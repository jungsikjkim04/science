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
  { label: "현재 진단 결과", value: "자료 해석 약함", note: "우선 확인" },
  { label: "우선 보완 과목", value: "통합과학", note: "현재 운영 중심" },
  { label: "이번 주 문제 세트", value: "에너지 전환 10문항", note: "맞춤 보완" },
  { label: "다음 점검", value: "2주 후 재진단", note: "학습 방향 조정" },
];

const identityCards: CardProps[] = [
  {
    title: "학습 데이터 분석",
    description:
      "문제 풀이 결과, 문항 유형, 오답 원인, 재풀이 결과를 바탕으로 학습 상태를 분석합니다.",
  },
  {
    title: "약점 원인 진단",
    description:
      "개념 부족, 자료 해석 실패, 조건 누락, 적용 실패 등 약점의 원인을 구분합니다.",
  },
  {
    title: "개인별 보완 문제",
    description:
      "학생에게 필요한 단원과 유형에 맞춰 주간 보완 문제를 제공합니다.",
  },
  {
    title: "학습 방향 최적화",
    description:
      "재진단 결과를 바탕으로 다음 주에 무엇을 공부해야 할지 조정합니다.",
  },
];

const serviceLoop: StepProps[] = [
  {
    number: "01",
    title: "진단",
    description:
      "통합과학·통합사회 문항을 풀며 현재 학습 상태를 확인합니다.",
  },
  {
    number: "02",
    title: "데이터 분석",
    description: "정답률, 문항 유형, 오답 원인, 풀이 패턴을 분석합니다.",
  },
  {
    number: "03",
    title: "약점 도출",
    description:
      "개념 이해, 자료 해석, 문제 적용, 조건 파악 중 약한 영역을 찾습니다.",
  },
  {
    number: "04",
    title: "보완 문제 제공",
    description: "학생에게 필요한 주간 보완 문제 세트를 제공합니다.",
  },
  {
    number: "05",
    title: "재진단",
    description: "같은 유형에서 약점이 줄었는지 다시 확인합니다.",
  },
  {
    number: "06",
    title: "학습 최적화",
    description: "결과에 따라 다음 학습 순서와 문제 유형을 조정합니다.",
  },
];

const problems: CardProps[] = [
  {
    title: "점수만 보고 넘어감",
    description:
      "시험 후 몇 점인지 확인하지만, 왜 틀렸는지는 제대로 분석하지 못합니다.",
  },
  {
    title: "약점 원인을 모름",
    description:
      "개념 부족인지, 자료 해석 실패인지, 조건 누락인지 구분하지 못합니다.",
  },
  {
    title: "같은 문제를 모두에게 제공",
    description:
      "학생마다 필요한 보완 문제가 다른데도 모두가 같은 문제를 풉니다.",
  },
  {
    title: "복습 방향이 계속 바뀌지 않음",
    description:
      "복습 후에도 개선 여부를 확인하지 않아 다음 학습 방향을 조정하지 못합니다.",
  },
];

const features: CardProps[] = [
  {
    title: "통합탐구 역량 진단",
    description:
      "통합과학과 통합사회에서 필요한 개념 이해, 자료 해석, 문제 적용, 조건 파악 능력을 나눠 분석합니다.",
  },
  {
    title: "오답 원인 분석",
    description:
      "틀린 문제를 개념 부족, 자료 해석 실패, 조건 누락, 적용 실패 등으로 구분합니다.",
  },
  {
    title: "맞춤 보완 문제",
    description:
      "학생의 약한 단원과 유형에 맞는 주간 문제 세트를 제공합니다.",
  },
  {
    title: "재진단 기반 최적화",
    description:
      "복습 후 같은 유형에서 개선되었는지 확인하고 다음 학습 방향을 조정합니다.",
  },
];

const subjectCards: CardProps[] = [
  {
    title: "통합과학",
    description:
      "개념 이해, 그래프·표 해석, 실험 자료 해석, 조건 적용 능력을 중심으로 진단합니다.",
  },
  {
    title: "통합사회",
    description:
      "사회 개념 이해, 사례 적용, 자료 해석, 가치 판단, 선지 비교 능력을 중심으로 진단합니다.",
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
    title: "월간 통합탐구 미니 점검",
    subtitle: "월 1회 진단형 문제 세트",
    bullets: [
      "통합과학·통합사회 주요 역량 점검",
      "지난달 대비 약점 변화 확인",
      "수능형 통합탐구 문제 적응",
      "학부모용 성장 리포트 제공",
    ],
  },
];

const visionCards: CardProps[] = [
  {
    title: "오답 패턴 감지",
    description:
      "향후 제공 예정 기능으로, 같은 유형에서 오답이 반복될 때 학습 방향을 조정합니다.",
  },
  {
    title: "복습 타이밍 안내",
    description:
      "확장 방향으로, 이전에 틀린 유형을 다시 풀 시점을 안내합니다.",
  },
  {
    title: "학습 최적화",
    description:
      "학생의 약점, 복습 이력, 재진단 결과를 바탕으로 다음 학습 순서를 제시하는 방향을 지향합니다.",
  },
];

const reportMetrics: MetricProps[] = [
  { label: "현재 진단 결과", value: "68%", note: "학습 상태 기준" },
  { label: "가장 약한 역량", value: "자료 해석", note: "우선 보완 영역" },
  { label: "우선 보완 과목", value: "통합과학", note: "이번 주 집중" },
  { label: "이번 주 학습 방향", value: "에너지 전환 10문항", note: "보완 문제" },
];

const reportActions = [
  "통합과학 에너지 전환 자료 해석형 10문항",
  "그래프·표의 축, 단위, 조건 먼저 표시",
  "오답 문항은 답을 고른 근거 다시 작성",
  "2주 뒤 동일 유형 재진단",
];

const beforeItems = [
  "점수만 확인하고 넘어감",
  "오답을 모두 실수라고 생각함",
  "모두에게 같은 문제를 풂",
  "다음에 무엇을 공부해야 할지 모름",
];

const afterItems = [
  "약점 원인을 데이터로 확인함",
  "개념·자료·조건·적용 중 어디가 약한지 구분함",
  "학생에게 필요한 보완 문제를 제공받음",
  "재진단으로 학습 방향을 조정함",
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
    description: "통합탐구 문항을 풀고 현재 학습 상태를 확인합니다.",
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
  "통합과학·통합사회에서 왜 틀리는지 정확히 모르는 학생",
  "개념은 아는 것 같은데 자료 해석형 문제에서 자주 틀리는 학생",
  "오답을 ‘실수’라고 넘기지만 비슷한 문제를 반복해서 틀리는 학생",
  "진단 후 무엇을 풀어야 할지 몰라 복습이 이어지지 않는 학생",
  "내신 통합탐구를 수능형 학습으로 연결하고 싶은 학생",
  "학부모가 자녀의 약점과 주간 학습 방향을 구체적으로 알고 싶은 경우",
];

const gradeCards: CardProps[] = [
  {
    title: "현재 고1·고2",
    description: "통합과학 내신 약점 진단과 주간 보완 문제",
  },
  {
    title: "예비고3",
    description: "수능형 통합탐구 대비 월간 점검과 재진단",
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
    <article className="relative z-10 flex h-full min-h-[200px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
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
      <dd className="mt-2 text-[1.35rem] font-bold leading-tight text-blue-700">
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
              고1·고2·예비고3 대상 통합탐구 메타인지 학습관리
            </p>
            <h1 className="mt-7 max-w-3xl text-[2.45rem] font-bold leading-[1.18] tracking-normal text-slate-950 sm:text-5xl sm:leading-[1.15] lg:text-[3.7rem]">
              통합탐구 공부, 지금 무엇을 해야 할지 알고 있나요?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 sm:text-xl sm:leading-10">
              통합과학·통합사회 학습 데이터를 분석해 학생의 약점 원인과
              복습 우선순위를 파악하고, 개인별 보완 문제와 재진단을 통해
              학습 방향을 최적화합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="/apply"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
              >
                통합탐구 진단 시작하기
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
            aria-label="이번 주 학습 최적화 예시"
            className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-3 shadow-2xl shadow-blue-100/80 backdrop-blur sm:p-5"
          >
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="border-b border-slate-100 pb-5">
                <p className="text-sm font-bold tracking-[0.08em] text-blue-700">
                  학습 최적화 예시
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  이번 주 학습 최적화 예시
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
                  학생은 통합과학 자료 해석형 문항에서 약점이 나타났습니다.
                  이번 주에는 에너지 전환 자료 해석형 보완 문제를 우선 제공하고,
                  2주 뒤 같은 유형으로 재진단해 학습 방향을 조정합니다.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="서비스 정체성"
            title="점수표가 아니라, 학습 방향을 조정하는 서비스입니다."
            description="통합탐구 학습에서 중요한 것은 단순히 몇 문제를 맞혔는지가 아닙니다. 학생이 어떤 개념을 이해하지 못했는지, 어떤 자료 해석에서 흔들리는지, 어떤 유형을 반복해서 틀리는지 알아야 합니다. 이 서비스는 학생의 통합과학·통합사회 학습 데이터를 분석해 지금 가장 먼저 보완해야 할 학습 방향을 제시합니다."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {identityCards.map((card) => (
              <BasicCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section id="service-loop" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습관리 구조"
            title="진단 → 보완 → 재진단으로 학습을 최적화합니다."
            description="처음 진단으로 약점을 찾고, 약점에 맞는 문제를 풀고, 재진단으로 개선 여부를 확인합니다. 이 반복을 통해 학생은 막연히 공부하는 것이 아니라, 자신의 학습 상태에 맞춰 공부 방향을 조정할 수 있습니다."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceLoop.map((step) => (
              <FlowStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 문제"
            title="통합탐구 공부가 어려운 이유는 학생마다 다릅니다."
            description="어떤 학생은 개념을 몰라서 틀리고, 어떤 학생은 자료를 해석하지 못해 틀리며, 어떤 학생은 문제 조건을 놓쳐 틀립니다. 같은 점수라도 원인이 다르기 때문에 같은 문제를 푸는 방식만으로는 효과적인 보완이 어렵습니다."
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
            eyebrow="데이터 기반 보완"
            title="학생별 데이터에 따라 보완 방식이 달라집니다."
            description="이 서비스는 학생의 통합탐구 학습 데이터를 바탕으로 약점 원인을 분석하고, 학생별로 필요한 문제와 복습 순서를 제시합니다. 진단에서 끝나는 것이 아니라, 보완 문제와 재진단을 통해 학습 방향을 계속 조정합니다."
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
            eyebrow="통합탐구"
            title="통합과학에서 시작해 통합사회까지 확장합니다."
            description="현재는 통합과학 진단과 보완 문제를 중심으로 시작합니다. 이후 통합사회까지 확장해 통합탐구 전체의 학습 데이터를 관리하고, 학생별 약점 보완과 수능형 학습 방향을 함께 제시합니다."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {subjectCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
          <p className="mt-6 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-5 text-base leading-8 text-slate-700">
            두 과목 모두 단순 암기보다 자료 해석과 문제 적용력이 중요하기 때문에,
            메타인지 기반 진단과 복습 관리가 효과적으로 작동할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 제공 방식"
            title="주간 보완 문제와 월간 점검으로 학습을 이어갑니다."
            description="진단 리포트만으로는 학습이 이어지기 어렵습니다. 학생의 약점에 맞춘 주간 보완 문제와 월간 미니 점검을 통해 통합탐구 학습을 지속적으로 관리합니다."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-slate-500">
            초기에는 통합과학을 중심으로 운영하고, 이후 통합사회까지 확장합니다.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="향후 방향"
            title="궁극적으로는 공부 중에도 학습 방향을 조정하는 서비스를 지향합니다."
            description="현재는 진단, 보완 문제, 재진단 중심으로 시작합니다. 이후 학생의 문제풀이 데이터가 누적되면, 공부 중 반복되는 오답 패턴과 학습 효율 변화를 바탕으로 지금 무엇을 공부해야 효과적인지 실시간에 가까운 피드백을 제공하는 방향으로 확장합니다."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {visionCards.map((card) => (
              <BasicCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section id="report" className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <SectionHeading
            eyebrow="성장 리포트"
            title="리포트는 결과지가 아니라 다음 학습의 설계도입니다."
            description="학생과 학부모가 같은 기준으로 학습 상태를 확인할 수 있도록, 진단 결과와 다음 학습 방향을 함께 제공합니다. 리포트는 단순 점수표가 아니라 다음 주에 무엇을 보완해야 할지 정하는 기준이 됩니다."
          />
          <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
            <div className="border-b border-slate-200 bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold tracking-[0.08em] text-blue-100">
                    예시 리포트
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    통합탐구 학습관리 리포트
                  </h3>
                </div>
                <span className="inline-flex w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-blue-50 ring-1 ring-white/20">
                  학습 방향 설계
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
                  학생은 기본 개념 문항에서는 비교적 안정적인 모습을 보였지만,
                  자료 해석형 문항과 조건 적용형 문항에서 약점이 나타났습니다.
                  이번 주에는 통합과학 에너지 전환 관련 자료 해석형 보완 문제를
                  우선 제공하고, 2주 뒤 같은 유형으로 재진단하는 것이 적절합니다.
                  이후 통합사회 자료 해석형 문항까지 함께 점검하면 통합탐구
                  전반의 학습 방향을 더 정확히 조정할 수 있습니다.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 sm:p-6">
                <h4 className="text-lg font-bold text-slate-950">
                  이번 주 학습 액션
                </h4>
                <ul className="mt-4 space-y-3">
                  {reportActions.map((item) => (
                    <ActionItem key={item} text={item} />
                  ))}
                </ul>
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
            title="고1·고2 내신부터, 예비고3 수능형 통합탐구까지"
            description="현재는 고1·고2 학생의 통합과학 내신 학습을 중심으로 시작합니다. 이후 통합사회와 수능형 통합탐구 학습까지 확장해, 예비고3 학생에게도 월간 점검과 개인별 보완 문제를 제공하는 방향으로 발전합니다."
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
            통합탐구 학습관리, 진단부터 보완 문제까지 시작하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            내신 점수만으로는 아이의 학습 상태를 충분히 알기 어렵습니다.
            통합탐구 메타인지 학습관리를 통해 약점 원인을 확인하고, 필요한
            보완 문제로 학습을 이어가세요.
          </p>
          <a
            href="/apply"
            className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center rounded-xl bg-blue-700 px-9 py-4 text-base font-bold text-white shadow-xl shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
            통합탐구 진단 시작하기
          </a>
          <p className="mt-4 text-sm font-medium text-slate-500">
            현재 신청자 순서대로 진단을 안내하고 있습니다.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        통합탐구 메타인지 학습관리 · 진단부터 보완 문제, 재진단까지
      </footer>
    </main>
  );
}
