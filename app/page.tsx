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

type BeforeAfterProps = {
  title: string;
  items: string[];
  highlighted?: boolean;
};

const capabilities: CardProps[] = [
  {
    title: "개념 이해",
    description: "기본 개념을 정확히 알고 있는지 확인합니다.",
  },
  {
    title: "자료 해석",
    description: "표, 그래프, 실험 결과를 읽고 판단하는 능력을 분석합니다.",
  },
  {
    title: "문제 적용",
    description:
      "알고 있는 개념을 낯선 문제 상황에 연결할 수 있는지 확인합니다.",
  },
  {
    title: "오답 원인",
    description:
      "틀린 이유를 개념 부족, 조건 누락, 적용 실패 등으로 나눕니다.",
  },
];

const problems: CardProps[] = [
  {
    title: "개념을 모른 채 넘어감",
    description:
      "기본 개념이 불안정한데도 해설만 읽고 이해했다고 느끼는 경우가 많습니다.",
  },
  {
    title: "자료 해석에서 흔들림",
    description:
      "통합과학에서 중요한 표, 그래프, 실험 결과를 잘못 읽어 오답이 발생합니다.",
  },
  {
    title: "조건을 놓치고 풂",
    description:
      "문제의 핵심 조건이나 단서를 놓쳐 알고 있는 개념도 제대로 적용하지 못합니다.",
  },
  {
    title: "복습 순서가 없음",
    description:
      "틀린 문제를 모두 똑같이 보며, 실제 점수 향상에 필요한 약점부터 처리하지 못합니다.",
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
    title: "개인별 복습 우선순위",
    description:
      "모든 오답을 같은 무게로 보지 않고, 가장 먼저 보완해야 할 약점부터 정리합니다.",
  },
  {
    title: "재진단 기반 성장 확인",
    description:
      "복습 후 같은 유형에서 약점이 줄었는지 확인해 학습 방향을 조정합니다.",
  },
];

const improvementSteps: StepProps[] = [
  {
    number: "01",
    title: "문제 풀이",
    description: "통합과학 진단 문항을 풉니다.",
  },
  {
    number: "02",
    title: "약점 분석",
    description: "정답률, 문항 유형, 오답 원인을 분석합니다.",
  },
  {
    number: "03",
    title: "복습 순서 제시",
    description: "가장 먼저 보완해야 할 단원과 유형을 정리합니다.",
  },
  {
    number: "04",
    title: "보완 학습",
    description: "자료 해석, 조건 파악, 개념 적용 등 필요한 방식으로 복습합니다.",
  },
  {
    number: "05",
    title: "재진단",
    description: "같은 유형에서 약점이 줄었는지 확인합니다.",
  },
];

const metrics: MetricProps[] = [
  { label: "전체 정답률", value: "68%", note: "현재 성취 수준" },
  { label: "가장 약한 역량", value: "자료 해석", note: "우선 보완 영역" },
  { label: "주요 오답 원인", value: "조건 누락", note: "반복 실수 원인" },
  { label: "우선 복습 단원", value: "에너지 전환", note: "2주 복습 출발점" },
];

const actionItems = [
  "에너지 전환 관련 자료 해석형 문항 우선 복습",
  "그래프·표의 축, 단위, 조건을 먼저 표시하고 풀이",
  "오답 문항에서 답을 고른 근거 다시 작성",
  "2주 뒤 같은 유형으로 재진단",
];

const beforeItems = [
  "점수만 확인하고 넘어감",
  "오답을 모두 실수라고 생각함",
  "틀린 문제를 무작정 다시 풂",
  "무엇부터 복습해야 할지 모름",
];

const afterItems = [
  "약점의 원인을 구분함",
  "개념·자료·조건·적용 중 어디가 약한지 확인함",
  "가장 중요한 약점부터 복습함",
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
    description: "정답률, 문항 유형, 오답 원인을 바탕으로 약점의 원인을 분석합니다.",
  },
  {
    number: "04",
    title: "리포트",
    description: "개인별 학습 상태와 복습 우선순위를 리포트로 제공합니다.",
  },
  {
    number: "05",
    title: "재진단",
    description: "복습 후 같은 유형에서 개선이 있었는지 확인합니다.",
  },
];

const targets = [
  "통합과학 내신을 봤지만 왜 틀렸는지 정확히 모르는 학생",
  "개념은 아는 것 같은데 자료 해석형 문제에서 자주 틀리는 학생",
  "오답을 ‘실수’라고 넘기지만 비슷한 문제를 반복해서 틀리는 학생",
  "내신 통합과학을 수능형 학습으로 연결하고 싶은 학생",
  "학부모가 자녀의 약점과 복습 우선순위를 구체적으로 알고 싶은 경우",
];

const planningCards: CardProps[] = [
  {
    title: "내신 범위",
    description: "학교 시험 범위 안에서 우선 점검해야 할 단원 흐름을 확인합니다.",
  },
  {
    title: "출제 가능 유형",
    description:
      "중요하게 다뤄질 가능성이 높은 개념 적용, 자료 해석, 조건 판단 유형을 살펴봅니다.",
  },
  {
    title: "개인 약점",
    description:
      "학생의 진단 결과와 반복 오답 원인을 함께 보며 보완 지점을 구체화합니다.",
  },
  {
    title: "복습 전략",
    description:
      "나올 문제만 좁히기보다, 출제 가능성이 높은 유형과 개인 약점을 연결해 복습 순서를 정합니다.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p
          className={`text-sm font-bold ${
            inverse ? "text-blue-200" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-bold leading-tight tracking-normal sm:text-4xl ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            inverse ? "text-blue-50/75" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CapabilityCard({ title, description }: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
        {title.slice(0, 1)}
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function ProblemCard({ title, description }: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/70">
      <div className="mb-5 h-1.5 w-12 rounded-full bg-blue-600" />
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function FeatureCard({ title, description }: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm shadow-blue-100/60">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function FlowStep({ number, title, description }: StepProps) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold tabular-nums text-white">
        {number}
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function ReportMetric({ label, value, note }: MetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
      <dt className="text-sm font-semibold text-slate-500">{label}</dt>
      <dd className="mt-2 text-2xl font-bold text-blue-700">{value}</dd>
      <p className="mt-2 text-xs font-medium text-slate-400">{note}</p>
    </div>
  );
}

function ProcessCard({ number, title, description }: StepProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-sm shadow-black/10">
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
          <li key={item} className="flex gap-3 text-base leading-7 text-slate-700">
            <span
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                highlighted
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {highlighted ? "✓" : "·"}
            </span>
            <span>{item}</span>
          </li>
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
      <section className="border-b border-slate-100 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-100/80">
              고1·고2 대상 통합과학 메타인지 진단
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              통합과학 성적 향상, 먼저 왜 틀리는지부터 진단하세요.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              정답률만으로는 학생의 실력을 정확히 알 수 없습니다. 개념 이해,
              자료 해석, 문제 적용, 오답 원인을 분석해 지금 가장 먼저 보완해야
              할 통합과학 학습 방향을 제시합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#apply"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-blue-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
              >
                통합과학 진단 시작하기
              </a>
              <a
                href="#report"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
              >
                리포트 예시 보기
              </a>
            </div>
          </div>

          <aside
            aria-label="통합과학 진단 요약 예시"
            className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-3 shadow-2xl shadow-blue-100/70 backdrop-blur sm:p-5"
          >
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="border-b border-slate-100 pb-5">
                <p className="text-sm font-bold text-blue-700">
                  진단 리포트 미리보기
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  약점 원인 요약
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  점수보다 먼저 볼 것은 학생이 어떤 역량에서 흔들리는지입니다.
                </p>
              </div>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metrics.slice(0, 2).map((metric) => (
                  <ReportMetric key={metric.label} {...metric} />
                ))}
              </dl>
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-900">
                  우선 복습 방향
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  에너지 전환 단원의 자료 해석형 문항을 먼저 복습하고, 문제
                  조건을 자료와 연결하는 훈련을 권장합니다.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 진단"
            title="점수는 결과만 보여줍니다. 진단은 원인을 보여줍니다."
            description="같은 68점이라도 학생마다 필요한 복습은 다릅니다. 어떤 학생은 개념 이해가 부족하고, 어떤 학생은 자료 해석에서 흔들리며, 어떤 학생은 문제 조건을 놓칩니다. 통합과학 메타인지 진단은 점수 뒤에 숨어 있는 약점의 원인을 분석하고, 성적 향상으로 이어질 수 있는 복습 순서를 제시합니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} {...capability} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 문제"
            title="통합과학 공부가 막히는 이유는 학생마다 다릅니다."
            description="시험이 끝난 뒤 점수만 확인하면 학생이 왜 틀렸는지 알 수 없습니다. 개념을 몰라서 틀린 것인지, 자료를 잘못 해석한 것인지, 문제 조건을 놓친 것인지에 따라 복습 방법은 달라져야 합니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="진단과 복습관리"
            title="진단이 끝나면, 복습 방향이 달라집니다."
            description="학생의 답안, 문항 유형, 정오 여부, 오답 원인을 바탕으로 통합과학 실력을 세부 역량별로 분석합니다. 답에 대한 확신도는 보조 지표로 참고하고, 이후 가장 먼저 보완해야 할 단원과 문항 유형을 정리해 개인별 복습 순서를 제시합니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="성적 향상 구조"
            title="진단 → 보완 → 재진단의 반복이 실력을 만듭니다."
            description="성적 향상은 단순히 문제를 더 많이 푸는 것보다, 반복해서 틀리는 원인을 줄이는 것에서 시작됩니다. 진단 결과를 바탕으로 복습 우선순위를 정하고, 재진단을 통해 같은 약점이 줄었는지 확인합니다."
          />
          <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-8 right-8 top-10 hidden h-px bg-blue-100 lg:block" />
            {improvementSteps.map((step) => (
              <FlowStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="내신과 수능형 학습 연결"
            title="출제 가능 유형과 개인 약점을 함께 봅니다."
            description="통합과학은 내신에서 드러난 약점이 이후 수능형 학습 습관과도 연결될 수 있습니다. 단순히 나올 문제를 예측하는 것이 아니라, 출제 가능성이 높은 유형과 학생 개인의 약점을 결합해 가장 먼저 보완해야 할 학습 순서를 제시합니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {planningCards.map((card) => (
              <CapabilityCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section id="report" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <SectionHeading
            eyebrow="리포트 예시"
            title="리포트는 점수표가 아니라 학습 방향표입니다."
            description="학부모와 학생이 같은 기준으로 약점을 확인할 수 있도록, 수치와 해석을 함께 제공합니다. 단순히 몇 점을 받았는지가 아니라, 어떤 역량에서 왜 흔들리고 무엇부터 보완해야 하는지를 보여줍니다."
          />
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="border-b border-slate-200 pb-6">
              <p className="text-sm font-bold text-blue-700">예시 리포트</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                통합과학 진단 요약
              </h3>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <ReportMetric key={metric.label} {...metric} />
              ))}
            </dl>
            <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-slate-700 sm:p-6 sm:text-base sm:leading-8">
              전체 정답률은 68%입니다. 학생은 기본 개념 문항에서는 비교적
              안정적인 모습을 보였지만, 자료 해석형 문항과 조건 적용형 문항에서
              약점이 나타났습니다. 특히 에너지 전환 영역에서 문제의 조건을
              자료와 연결하는 과정이 불안정했습니다. 다음 2주간은 새 개념
              진도보다 에너지 전환 관련 자료 해석형 문항을 우선 복습하는 것이
              적절합니다.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h4 className="text-lg font-bold text-slate-950">
                다음 학습 액션
              </h4>
              <ul className="mt-4 space-y-3">
                {actionItems.map((item) => (
                  <ActionItem key={item} text={item} />
                ))}
              </ul>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">
              실제 리포트는 학생의 진단 결과에 따라 개별 생성됩니다.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading title="진단 전과 진단 후, 공부 방식이 달라집니다." />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <BeforeAfterCard title="진단 전" items={beforeItems} />
            <BeforeAfterCard title="진단 후" items={afterItems} highlighted />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="진단 절차"
            title="진단은 이렇게 진행됩니다."
            inverse
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading title="이런 학생에게 적합합니다." />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
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
        className="border-t border-blue-100 bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            통합과학 성적 향상, 먼저 약점 원인 진단부터 시작하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            내신 점수만으로는 아이의 학습 상태를 충분히 알기 어렵습니다.
            통합과학 메타인지 진단을 통해 지금 필요한 복습 방향을 확인하세요.
          </p>
          <a
            href="/apply"
            className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-blue-700 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
          >
            통합과학 진단 시작하기
          </a>
          <p className="mt-4 text-sm font-medium text-slate-500">
            현재 신청자 순서대로 진단을 안내하고 있습니다.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        통합과학 메타인지 진단 · 내신부터 수능형 학습까지
      </footer>
    </main>
  );
}
