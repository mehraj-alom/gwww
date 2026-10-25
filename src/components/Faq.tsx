import { faq } from '../content';
import { Icon } from './Icon';

export default function Faq() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <p className="kicker">{faq.kicker}</p>
            <h2 id="faq-title" className="h2 mt-3 max-w-[18rem] text-ink">
              {faq.title}
            </h2>
            <p className="lead mt-5 max-w-[24rem]">{faq.sub}</p>
            <a
              href="/antworten/"
              className="mt-7 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-teal transition-colors hover:text-white"
            >
              {faq.allAnswers}
              <Icon name="arrow" size={13} />
            </a>
          </div>

          <div className="border-t border-white/[0.09]" data-reveal>
            {faq.items.map((item, index) => (
              <details key={item.q} className="answer-item" open={index === 0}>
                <summary>
                  <span className="pr-6">{item.q}</span>
                  <Icon name="plus" size={15} className="plus mt-0.5" />
                </summary>
                <div className="answer-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
