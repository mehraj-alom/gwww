import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LABELS = [
  { text: 'Schlaf', index: 3 },
  { text: 'Puls', index: 8 },
  { text: 'Medikamente', index: 12 },
  { text: 'Ernährung', index: 16 },
  { text: 'Befunde', index: 19 },
  { text: 'Zyklus', index: 22 },
];

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function glowTexture(color: string) {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,0.95)');
  gradient.addColorStop(0.22, color);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function GraphScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 80);
    camera.position.set(0, 0.15, 9.4);

    const graph = new THREE.Group();
    graph.position.y = -0.1;
    scene.add(graph);

    const random = mulberry32(20261026);
    const nodeCount = 26;
    const teal = new THREE.Color('#5eead4');
    const blue = new THREE.Color('#60a5fa');
    const white = new THREE.Color('#dcfff8');

    const nodeGeometry = new THREE.SphereGeometry(1, 14, 14);
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: teal, transparent: true, opacity: 0.95 }),
      new THREE.MeshBasicMaterial({ color: blue, transparent: true, opacity: 0.9 }),
      new THREE.MeshBasicMaterial({ color: white, transparent: true, opacity: 0.95 }),
    ];

    const glowTeal = glowTexture('rgba(94,234,212,0.55)');
    const glowBlue = glowTexture('rgba(96,165,250,0.45)');
    const glowMaterials = [
      new THREE.SpriteMaterial({
        map: glowTeal,
        color: 0xffffff,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      new THREE.SpriteMaterial({
        map: glowBlue,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    ];

    type Node = {
      position: THREE.Vector3;
      baseScale: number;
      phase: number;
      speed: number;
      mesh: THREE.Mesh;
      sprite: THREE.Sprite;
    };
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i += 1) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * 2.399963229728653;
      const distance = 2.55 + random() * 0.95;
      const position = new THREE.Vector3(
        Math.cos(theta) * radius * distance,
        y * distance * 0.92,
        Math.sin(theta) * radius * distance,
      );

      const size = 0.045 + random() * 0.075;
      const matIndex = i % 5 === 0 ? 1 : i % 3 === 0 ? 2 : 0;
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterials[matIndex]);
      mesh.position.copy(position);
      mesh.scale.setScalar(size);
      graph.add(mesh);

      const sprite = new THREE.Sprite(glowMaterials[matIndex === 1 ? 1 : 0]);
      sprite.position.copy(position);
      const baseScale = 0.7 + random() * 0.75;
      sprite.scale.setScalar(baseScale);
      graph.add(sprite);

      nodes.push({
        position,
        baseScale,
        phase: random() * Math.PI * 2,
        speed: 0.45 + random() * 0.5,
        mesh,
        sprite,
      });
    }

    const edgePositions: number[] = [];
    for (let i = 0; i < nodes.length; i += 1) {
      const distances = nodes
        .map((node, index) => ({ index, distance: nodes[i].position.distanceTo(node.position) }))
        .filter((entry) => entry.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 2);

      for (const entry of distances) {
        const a = nodes[i].position;
        const b = nodes[entry.index].position;
        edgePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3));
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x5eead4,
      transparent: true,
      opacity: 0.11,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    graph.add(edges);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const r = 3.2 + random() * 2.4;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      particlePositions[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      particlePositions[i * 3 + 1] = Math.cos(phi) * r * 0.8;
      particlePositions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xcffff5,
      size: 0.028,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const coreGeometry = new THREE.IcosahedronGeometry(0.62, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x5eead4,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const coreGlowMaterial = new THREE.SpriteMaterial({
      map: glowTeal,
      transparent: true,
      opacity: 0.34,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const coreGlow = new THREE.Sprite(coreGlowMaterial);
    coreGlow.scale.setScalar(3.1);
    scene.add(coreGlow);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x5eead4,
      transparent: true,
      opacity: 0.09,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.45 + i * 0.52, 0.006, 6, 128), ringMaterial);
      ring.rotation.x = Math.PI / 2.4 + i * 0.35;
      ring.rotation.y = i * 0.5;
      graph.add(ring);
      rings.push(ring);
    }

    let width = 1;
    let height = 1;
    const resize = () => {
      width = Math.max(1, host.clientWidth);
      height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const pointer = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.01 },
    );
    io.observe(host);

    const projected = new THREE.Vector3();
    const updateLabels = () => {
      LABELS.forEach((label, i) => {
        const el = labelRefs.current[i];
        const node = nodes[label.index];
        if (!el || !node) return;
        projected.copy(node.position).applyMatrix4(graph.matrixWorld).project(camera);
        const x = (projected.x * 0.5 + 0.5) * width;
        const y = (-projected.y * 0.5 + 0.5) * height;
        const inFront = projected.z < 1;
        el.style.opacity = inFront ? '1' : '0';
        el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
    };

    let raf = 0;
    const clock = new THREE.Clock();
    let elapsed = 0;

    const dispose = () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      nodeGeometry.dispose();
      nodeMaterials.forEach((material) => material.dispose());
      glowMaterials.forEach((material) => material.dispose());
      glowTeal.dispose();
      glowBlue.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      coreGlowMaterial.dispose();
      ringMaterial.dispose();
      rings.forEach((ring) => ring.geometry.dispose());
      renderer.dispose();
    };

    const render = () => {
      raf = requestAnimationFrame(render);
      if (!visible || document.hidden) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      if (!reduced) elapsed += delta;

      smooth.x += (pointer.x - smooth.x) * 0.045;
      smooth.y += (pointer.y - smooth.y) * 0.045;

      graph.rotation.y = elapsed * 0.075 + smooth.x * 0.32;
      graph.rotation.x = Math.sin(elapsed * 0.18) * 0.06 + smooth.y * 0.16;

      core.rotation.y = elapsed * 0.24;
      core.rotation.x = elapsed * 0.12;

      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.05 + index * 0.015);
      });

      particles.rotation.y = -elapsed * 0.025;

      for (const node of nodes) {
        const pulse = 1 + Math.sin(elapsed * node.speed + node.phase) * 0.22;
        node.sprite.scale.setScalar(node.baseScale * pulse);
      }

      coreGlow.material.opacity = 0.3 + Math.sin(elapsed * 0.9) * 0.06;

      renderer.render(scene, camera);
      updateLabels();
    };

    if (reduced) {
      graph.rotation.y = 0.35;
      graph.rotation.x = 0.08;
      renderer.render(scene, camera);
      updateLabels();
      // Re-render on resize without animation.
      const onResize = () => {
        resize();
        renderer.render(scene, camera);
        updateLabels();
      };
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
        resizeObserver.disconnect();
        io.disconnect();
        window.removeEventListener('pointermove', onPointerMove);
        dispose();
      };
    }

    render();

    return dispose;
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      {LABELS.map((label, index) => (
        <span
          key={label.text}
          ref={(el) => {
            labelRefs.current[index] = el;
          }}
          className="scene-label"
          style={{ left: 0, top: 0 }}
        >
          <span className="chip-dot text-teal" />
          {label.text}
        </span>
      ))}
    </div>
  );
}
