type CardProps = {
  title: string;
  description: string;
};

type MetricProps = {
  label: string;
  value: string;
  note: string;
};

type StepProps = {
  number: string;
  title: string;
  description: string;
};

type ProductProps = {
  title: string;
  subtitle: string;
  bullets: string[];
};

type BeforeAfterProps = {
  title: string;
  items: string[];
  highlighted?: boolean;
};

const heroMetrics: MetricProps[] = [
  { label: "현재 정답률", value: "68%", note: "진단 기준" },
  { label: "가장 약한 역량", value: "자료 해석", note: "우선 보완" },
  { label: "이번 주 보완 문제", value: "에너지 전환 10문항", note: "주간 세트" },
  { label: "다음 점검", value: "2주 후 재진단", note: "성장 확인" },
];

const serviceLoop: StepProps[] = [
  {
    number: "01",
    title: "진단",
    description:
      "통합과학 문항을 풀며 개념 이해, 자료 해석, 문제 적용 수준을 확인합니다.",
  },
  {
    number: "02",
    title: "약점 분석",
    description:
      "정답률, 문항 유형, 오답 원인을 바탕으로 왜 틀리는지 분석합니다.",
  },
  {
    number: "03",
    title: "보완 문제 제공",
    description: "학생의 약점에 맞는 주간 보완 문제 세트를 제공합니다.",
  },
  {
    number: "04",
    title: "재풀이·복습",
    description: "오답 원인에 맞는 방식으로 문제를 다시 풀고 복습합니다.",
  },
  {
    number: "05",
    title: "재진단·성장 리포트",
    description:
      "같은 유형에서 약점이 줄었는지 확인하고 학습 방향을 조정합니다.",
  },
];

const deliveryCards: CardProps[] = [
  {
    title: "진단 기반 문제 제공",
    description: "학생의 약한 단원과 문항 유형에 맞는 문제를 제공합니다.",
  },
  {
    title: "주간 보완 세트",
    description: "매주 8~12문항 규모의 약점 보완 문제를 제공합니다.",
  },
  {
    title: "월간 미니 모의고사",
    description:
      "월 1회 통합과학 미니 모의고사로 실전 감각과 성장 여부를 확인합니다.",
  },
];

const problems: CardProps[] = [
  {
    title: "점수만 보고 넘어감",
    description:
      "시험 후 몇 점인지 확인하지만, 왜 틀렸는지는 제대로 분석하지 못합니다.",
  },
  {
    title: "오답 원인을 모름",
    description:
      "개념 부족인지, 자료 해석 실패인지, 조건 누락인지 구분하지 못합니다.",
  },
  {
    title: "필요한 문제가 다름",
    description:
      "모든 학생에게 같은 문제를 주면 실제 약점 보완으로 이어지기 어렵습니다.",
  },
  {
    title: "복습이 이어지지 않음",
    description:
      "진단 후 어떤 문제를 다시 풀어야 하는지 몰라 학습이 끊깁니다.",
  },
];

const features: CardProps[] = [
  {
    title: "통합과학 역량 진단",
    description:
      "개념 이해, 자료 해석, 문제 적용, 조건 파악 등 통합과학에 필요한 역량을 나눠 분석합니다.",
  },
  {
    title: "오답 원인 분석",
    description:
      "틀린 문제를 개념 부족, 자료 해석 실패, 조건 누락, 적용 실패 등으로 구분합니다.",
  },
  {
    title: "약점별 보완 문제",
    description:
      "에너지 전환 자료 해석형, 생태계 조건 적용형 등 학생에게 필요한 문제 세트를 제공합니다.",
  },
  {
    title: "재진단 기반 성장 확인",
    description:
      "복습 후 같은 유형에서 약점이 줄었는지 확인해 다음 학습 방향을 조정합니다.",
  },
];

const products: ProductProps[] = [
  {
    title: "주간 보완 문제 세트",
    subtitle: "약점 유형별 8~12문항",
    bullets: [
      "진단 결과에 따른 약점 단원 배정",
      "자료 해석, 조건 적용, 개념 확인 문제 구성",
      "오답 원인에 맞춘 복습 방향 제시",
      "짧은 주간 피드백 제공",
    ],
  },
  {
    title: "월간 통합과학 미니 모의고사",
    subtitle: "월 1회 20~25문항",
    bullets: [
      "개념 이해·자료 해석·문제 적용 종합 점검",
      "수능형 통합과학 문제 적응",
      "지난달 대비 약점 변화 확인",
      "학부모용 성장 리포트 제공",
    ],
  },
];

const reportMetrics: MetricProps[] = [
  { label: "전체 정답률", value: "68%", note: "현재 성취 수준" },
  { label: "가장 약한 역량", value: "자료 해석", note: "우선 보완 영역" },
  { label: "주요 오답 원인", value: "조건 누락", note: "반복 실수 원인" },
  { label: "이번 주 보완 문제", value: "에너지 전환 10문항", note: "주간 배정" },
];

const weeklyProblemItems = [
  "에너지 전환 기본 개념 확인 2문항",
  "그래프·표 해석형 4문항",
  "조건 적용형 3문항",
  "실전형 종합 문제 1문항",
];

const actionItems = [
  "문제 풀이 전 그래프의 축·단위·조건 먼저 표시",
  "오답 문항은 답을 고른 근거 다시 작성",
  "3일 뒤 동일 유형 5문항 재풀이",
  "2주 뒤 같은 유형으로 재진단",
];

const beforeItems = [
  "점수만 확인하고 넘어감",
  "오답을 모두 실수라고 생각함",
  "틀린 문제를 무작정 다시 풂",
  "다음에 풀 문제가 정해지지 않음",
];

const afterItems = [
  "약점의 원인을 구분함",
  "개념·자료·조건·적용 중 어디가 약한지 확인함",
  "약점에 맞는 보완 문제를 제공받음",
  "재진단으로 개선 여부를 확인함",
];

const processSteps: StepProps[] = [
  {
    number: "01",
    title: "신청",
    description: "신청서를 작성하면 진단 안내를 개별 발송합니다.",
  },
  {
    number: "02",
    title: "진단",
    description: "통합과학 문항을 풀고 답안과 풀이 정보를 입력합니다.",
  },
  {
    number: "03",
    title: "분석",
    description:
      "정답률, 문항 유형, 오답 원인을 바탕으로 약점의 원인을 분석합니다.",
  },
  {
    number: "04",
    title: "보완 문제",
    description: "진단 결과에 따라 주간 보완 문제 세트를 제공합니다.",
  },
  {
    number: "05",
    title: "재진단",
    description: "복습 후 같은 유형에서 개선이 있었는지 확인합니다.",
  },
  {
    number: "06",
    title: "성장 리포트",
    description:
      "학부모와 학생이 학습 변화와 다음 방향을 확인할 수 있도록 리포트를 제공합니다.",
  },
];

const targets = [
  "통합과학 내신을 봤지만 왜 틀렸는지 정확히 모르는 학생",
  "개념은 아는 것 같은데 자료 해석형 문제에서 자주 틀리는 학생",
  "오답을 ‘실수’라고 넘기지만 비슷한 문제를 반복해서 틀리는 학생",
  "진단 후 무엇을 풀어야 할지 몰라 복습이 이어지지 않는 학생",
  "내신 통합과학을 수능형 학습으로 연결하고 싶은 학생",
  "학부모가 자녀의 약점과 주간 학습 방향을 구체적으로 알고 싶은 경우",
];

const gradeCards: CardProps[] = [
  {
    title: "현재 고1·고2",
    description: "내신 통합과학 약점 진단과 주간 보완 문제",
  },
  {
    title: "내년 고3",
    description: "2028 수능형 통합과학 대비 월간 미니 모의고사",
  },
  {
    title: "학부모",
    description: "학습 변화와 다음 복습 방향을 확인하는 성장 리포트",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-sm font-bold tracking-[0.08em] ${
            inverse ? "text-blue-200" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-[1.75rem] font-bold leading-tight tracking-normal sm:text-4xl ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg sm:leading-9 ${
            inverse ? "text-blue-50/75" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BasicCard({ title, description }: CardProps) {
  return (
    <article className="flex h-full min-h-[205px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
        {title.slice(0, 1)}
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function ProblemCard({ title, description }: CardProps) {
  return (
    <article className="flex h-full min-h-[205px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/70">
      <div className="mb-5 h-1.5 w-12 rounded-full bg-blue-600" />
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function FeatureCard({ title, description }: CardProps) {
  return (
    <article className="flex h-full min-h-[215px] flex-col rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm shadow-blue-100/60">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function FlowStep({ number, title, description }: StepProps) {
  return (
    <article className="relative z-10 flex h-full min-h-[210px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold tabular-nums text-white shadow-md shadow-blue-200/80">
        {number}
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function MetricCard({ label, value, note }: MetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
      <dt className="text-sm font-semibold text-slate-500">{label}</dt>
      <dd className="mt-2 text-[1.55rem] font-bold leading-tight text-blue-700">
        {value}
      </dd>
      <p className="mt-2 text-xs font-medium text-slate-400">{note}</p>
    </div>
  );
}

function ProductCard({ title, subtitle, bullets }: ProductProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
      <p className="text-sm font-bold tracking-[0.08em] text-blue-700">
        {subtitle}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-slate-950">{title}</h3>
      <ul className="mt-6 space-y-4">
        {bullets.map((bullet) => (
          <ActionItem key={bullet} text={bullet} />
        ))}
      </ul>
    </article>
  );
}

function ProcessCard({ number, title, description }: StepProps) {
  return (
    <article className="flex h-full min-h-[190px] flex-col rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-sm shadow-black/10">
      <p className="text-sm font-bold tabular-nums text-blue-200">{number}</p>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-blue-50/80">{description}</p>
    </article>
  );
}

function BeforeAfterCard({ title, items, highlighted = false }: BeforeAfterProps) {
  return (
    <article
      className={`rounded-3xl border p-6 shadow-sm sm:p-8 ${
        highlighted
          ? "border-blue-200 bg-blue-50 shadow-blue-100/70"
          : "border-slate-200 bg-white shadow-slate-200/60"
      }`}
    >
      <h3
        className={`text-2xl font-bold ${
          highlighted ? "text-blue-900" : "text-slate-950"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <ActionItem key={item} text={item} />
        ))}
      </ul>
    </article>
  );
}

function ActionItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_top_left,rgba(219,234,254,0.9),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#ffffff_70%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
        <div className="mx-auto grid min-h-[760px] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-28">
          <div>
            <p className="inline-flex max-w-full rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-100/80">
              고1·고2 대상 통합과학 메타인지 학습관리
            </p>
            <h1 className="mt-7 max-w-3xl text-[2.45rem] font-bold leading-[1.18] tracking-normal text-slate-950 sm:text-5xl sm:leading-[1.15] lg:text-[3.7rem]">
              통합과학 성적 향상, 진단에서 끝내지 마세요.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl sm:leading-10">
              정답률만으로는 학생의 실력을 정확히 알 수 없습니다. 개념 이해,
              자료 해석, 문제 적용, 오답 원인을 분석하고, 학생에게 필요한 보완
              문제를 매주 제공해 통합과학 학습 방향을 관리합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#apply"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
              >
                통합과학 진단 시작하기
              </a>
              <a
                href="#service-loop"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
              >
                서비스 구조 보기
              </a>
            </div>
          </div>

          <aside
            aria-label="이번 주 학습관리 예시"
            className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-3 shadow-2xl shadow-blue-100/80 backdrop-blur sm:p-5"
          >
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="border-b border-slate-100 pb-5">
                <p className="text-sm font-bold tracking-[0.08em] text-blue-700">
                  학습관리 예시
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  이번 주 학습관리 예시
                </h2>
              </div>
              <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {heroMetrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </dl>
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-900">
                  이번 주 관리 방향
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  학생은 기본 개념보다 자료 해석형 문항에서 약점이 나타났습니다.
                  이번 주에는 에너지 전환 자료 해석형 보완 문제를 우선 제공하고,
                  2주 뒤 같은 유형으로 재진단합니다.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="service-loop" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습관리 구조"
            title="진단 → 보완 문제 → 재진단의 반복이 실력을 만듭니다."
            description="성적 향상은 단순히 문제를 많이 푸는 것보다, 반복해서 틀리는 원인을 줄이는 것에서 시작됩니다. 통합과학 메타인지 진단은 학생의 약점 원인을 분석하고, 그 결과에 맞는 보완 문제를 제공한 뒤, 재진단으로 개선 여부를 확인합니다."
          />
          <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-8 right-8 top-10 hidden h-0.5 rounded-full bg-blue-100 lg:block" />
            {serviceLoop.map((step) => (
              <FlowStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="문제 제공 방식"
            title="문제를 더 많이 푸는 것이 아니라, 필요한 문제를 정확히 풀어야 합니다."
            description="같은 통합과학 점수를 받은 학생이라도 필요한 문제는 다릅니다. 어떤 학생은 개념 확인 문제가 필요하고, 어떤 학생은 자료 해석형 문제가 필요하며, 어떤 학생은 조건 적용형 문제를 반복해야 합니다. 이 서비스는 진단 결과를 바탕으로 학생별 보완 문제를 제공해 학습 효율을 높입니다."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {deliveryCards.map((card) => (
              <BasicCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 문제"
            title="통합과학 공부가 막히는 이유는 학생마다 다릅니다."
            description="시험이 끝난 뒤 점수만 확인하면 학생이 왜 틀렸는지 알 수 없습니다. 개념을 몰라서 틀린 것인지, 자료를 잘못 해석한 것인지, 문제 조건을 놓친 것인지에 따라 복습 방법과 필요한 문제가 달라져야 합니다."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="진단과 문제 배정"
            title="진단 결과에 따라 보완 문제가 달라집니다."
            description="학생의 답안, 문항 유형, 정오 여부, 오답 원인을 바탕으로 통합과학 실력을 세부 역량별로 분석합니다. 이후 약점 유형별 문제 세트를 배정하고, 재진단을 통해 개선 여부를 확인합니다."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 제공 방식"
            title="주간 보완 문제와 월간 미니 모의고사로 관리합니다."
            description="진단 리포트만으로는 학습이 이어지기 어렵습니다. 학생의 약점에 맞춘 주간 보완 문제와 월간 미니 모의고사를 통해 통합과학 학습을 지속적으로 관리합니다."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-slate-500">
            초기에는 진단 결과에 따라 약점별 문제팩을 배정하는 방식으로 운영됩니다.
          </p>
        </div>
      </section>

      <section id="report" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <SectionHeading
            eyebrow="성장 리포트"
            title="리포트는 끝이 아니라 다음 문제의 출발점입니다."
            description="학부모와 학생이 같은 기준으로 약점을 확인할 수 있도록, 수치와 해석을 함께 제공합니다. 리포트는 단순 점수표가 아니라 다음 주에 어떤 문제를 풀어야 하는지 정하는 학습 방향표입니다."
          />
          <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
            <div className="border-b border-slate-200 bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold tracking-[0.08em] text-blue-100">
                    예시 리포트
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    통합과학 학습관리 리포트
                  </h3>
                </div>
                <span className="inline-flex w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-blue-50 ring-1 ring-white/20">
                  보완 문제 배정
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              <dl className="grid gap-4 sm:grid-cols-2">
                {reportMetrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </dl>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/80 p-5 sm:p-6">
                <p className="text-sm font-bold tracking-[0.08em] text-blue-700">
                  학부모 요약
                </p>
                <p className="mt-3 text-sm leading-8 text-slate-700 sm:text-base sm:leading-8">
                  전체 정답률은 68%입니다. 학생은 기본 개념 문항에서는 비교적
                  안정적인 모습을 보였지만, 자료 해석형 문항과 조건 적용형
                  문항에서 약점이 나타났습니다. 특히 에너지 전환 영역에서 문제의
                  조건을 자료와 연결하는 과정이 불안정했습니다. 이번 주에는
                  에너지 전환 관련 자료 해석형 보완 문제 10문항을 우선 제공하고,
                  2주 뒤 같은 유형으로 재진단하는 것이 적절합니다.
                </p>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 sm:p-6">
                  <h4 className="text-lg font-bold text-slate-950">
                    이번 주 보완 문제 구성
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {weeklyProblemItems.map((item) => (
                      <ActionItem key={item} text={item} />
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 sm:p-6">
                  <h4 className="text-lg font-bold text-slate-950">
                    다음 학습 액션
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {actionItems.map((item) => (
                      <ActionItem key={item} text={item} />
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500">
                실제 리포트와 보완 문제는 학생의 진단 결과에 따라 개별 제공됩니다.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading title="진단 전과 진단 후, 공부 방식이 달라집니다." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <BeforeAfterCard title="진단 전" items={beforeItems} />
            <BeforeAfterCard title="진단 후" items={afterItems} highlighted />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="대상 확장"
            title="고1·고2 내신부터, 내년 고3 수능형 통합과학까지"
            description="현재는 고1·고2 학생의 통합과학 내신 학습을 중심으로 진단합니다. 이후 2028학년도 수능을 준비하는 고3 학생에게는 월간 미니 모의고사와 수능형 통합과학 보완 문제를 제공하는 방향으로 확장합니다."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gradeCards.map((card) => (
              <BasicCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="서비스 절차"
            title="서비스는 이렇게 진행됩니다."
            inverse
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading title="이런 학생에게 적합합니다." />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {targets.map((target) => (
              <li
                key={target}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700 shadow-sm shadow-slate-200/50"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
                  ✓
                </span>
                <span>{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="apply"
        className="border-t border-blue-100 bg-gradient-to-b from-blue-50 to-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-[1.85rem] font-bold leading-tight text-slate-950 sm:text-4xl">
            통합과학 성적 향상, 진단부터 보완 문제까지 관리하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            내신 점수만으로는 아이의 학습 상태를 충분히 알기 어렵습니다.
            통합과학 메타인지 진단을 통해 약점 원인을 확인하고, 필요한 보완
            문제로 학습을 이어가세요.
          </p>
          <a
            href="/apply"
            className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center rounded-xl bg-blue-700 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
            통합과학 진단 시작하기
          </a>
          <p className="mt-4 text-sm font-medium text-slate-500">
            현재 신청자 순서대로 진단을 안내하고 있습니다.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        통합과학 메타인지 학습관리 · 진단부터 보완 문제, 재진단까지
      </footer>
    </main>
  );
}
