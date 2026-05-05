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

type FlowStepProps = StepProps;

type ComparisonProps = {
  title: string;
  items: string[];
  highlighted?: boolean;
};

type ClassificationProps = {
  confidence: string;
  correct: string;
  incorrect: string;
};

const problems: CardProps[] = [
  {
    title: "오답 원인을 모름",
    description:
      "개념 부족인지, 자료 해석 실패인지, 조건 누락인지 구분하지 못한 채 다음 시험으로 넘어갑니다.",
  },
  {
    title: "안다고 착각함",
    description:
      "익숙한 개념은 맞히지만 낯선 자료나 수능형 상황에 적용하면 흔들리는 경우가 많습니다.",
  },
  {
    title: "복습 우선순위가 없음",
    description:
      "틀린 문제를 모두 똑같이 다시 보며, 실제 점수 향상에 필요한 약점부터 처리하지 못합니다.",
  },
];

const features: CardProps[] = [
  {
    title: "확신도 체크",
    description:
      "답을 고른 뒤 이 답에 얼마나 확신이 있는지 체크해 자기 판단과 실제 결과의 차이를 확인합니다.",
  },
  {
    title: "오답 원인 분류",
    description:
      "개념 공백, 자료 해석, 조건 누락, 적용 실패, 시간 압박 등 오답의 성격을 나눕니다.",
  },
  {
    title: "고확신 오답 탐지",
    description:
      "맞았다고 믿었지만 실제로는 틀린 문항을 찾아 가장 위험한 착각 구간을 드러냅니다.",
  },
  {
    title: "복습 우선순위 제시",
    description:
      "모든 오답을 같은 무게로 보지 않고, 점수 향상에 필요한 복습 순서를 정리합니다.",
  },
];

const flowSteps: FlowStepProps[] = [
  {
    number: "01",
    title: "진단",
    description:
      "통합과학 문항의 답을 고른 뒤 확신도 체크와 체감 난도를 함께 기록합니다.",
  },
  {
    number: "02",
    title: "분석",
    description:
      "정답률뿐 아니라 고확신 오답, 오답 원인, 취약 유형을 확인합니다.",
  },
  {
    number: "03",
    title: "보완",
    description:
      "가장 위험한 약점부터 복습 우선순위를 정합니다.",
  },
  {
    number: "04",
    title: "재진단",
    description:
      "같은 유형에서 실수가 줄었는지 확인하며 학습 방향을 조정합니다.",
  },
];

const metrics: MetricProps[] = [
  { label: "전체 정답률", value: "68%", note: "기본 성취도" },
  { label: "고확신 오답률", value: "32%", note: "착각 위험도" },
  { label: "취약 유형", value: "자료 해석형", note: "문항 접근 방식" },
  { label: "우선 복습", value: "에너지 전환", note: "2주 복습 출발점" },
];

const steps: StepProps[] = [
  {
    number: "01",
    title: "신청",
    description: "신청서를 작성하면 진단 안내를 개별 발송합니다.",
  },
  {
    number: "02",
    title: "진단",
    description:
      "통합과학 문항을 풀고 답을 고른 뒤, 문항별 확신도와 오답 원인을 체크합니다.",
  },
  {
    number: "03",
    title: "리포트",
    description:
      "정답률, 고확신 오답률, 약점 유형, 2주 복습 방향을 제공합니다.",
  },
  {
    number: "04",
    title: "보완",
    description:
      "리포트에 따라 우선순위가 높은 유형부터 복습하고, 이후 재진단으로 개선 여부를 확인합니다.",
  },
];

const targets = [
  "통합과학 내신을 봤지만 왜 틀렸는지 정확히 모르는 학생",
  "개념은 아는 것 같은데 자료 해석형 문제에서 자주 틀리는 학생",
  "오답을 ‘실수’라고 넘기지만 비슷한 문제를 반복해서 틀리는 학생",
  "내신 통합과학을 수능형 학습으로 연결하고 싶은 학생",
  "학부모가 자녀의 약점과 복습 우선순위를 구체적으로 알고 싶은 경우",
];

const beforeItems = [
  "점수만 확인하고 넘어감",
  "오답을 전부 실수라고 생각함",
  "틀린 문제를 무작정 다시 풂",
  "내신과 수능형 약점이 연결되지 않음",
];

const afterItems = [
  "확신하고 틀린 문제를 따로 확인함",
  "오답 원인을 개념·자료 해석·조건 누락으로 구분함",
  "가장 위험한 약점부터 복습함",
  "내신 오답을 수능형 학습 방향으로 연결함",
];

const actionItems = [
  "에너지 전환 관련 자료 해석형 문항 우선 복습",
  "문제 풀이 후 정답 근거를 직접 표시",
  "확신하고 틀린 문항은 3일 뒤 재풀이",
  "2주 후 같은 유형으로 재진단",
];

const classifications: ClassificationProps[] = [
  { confidence: "확실함", correct: "안정 이해", incorrect: "안다고 착각" },
  { confidence: "애매함", correct: "부분 이해", incorrect: "보완 필요" },
  { confidence: "거의 찍음", correct: "불안정 정답", incorrect: "실제 약점" },
];

const predictionBridge: CardProps[] = [
  {
    title: "내신 범위",
    description:
      "학교별 시험 범위와 단원 흐름을 기준으로 현재 점검해야 할 학습 구간을 정리합니다.",
  },
  {
    title: "출제 가능 유형",
    description:
      "해당 범위에서 중요하게 다뤄질 가능성이 높은 개념 적용, 자료 해석, 조건 판단 유형을 살펴봅니다.",
  },
  {
    title: "학생 약점",
    description:
      "확신도 체크와 오답 원인 기록을 통해 학생 개인이 반복해서 흔들리는 지점을 확인합니다.",
  },
  {
    title: "개인별 복습 우선순위",
    description:
      "범위와 유형, 개인 약점을 함께 고려해 가장 먼저 보완해야 할 학습 순서를 제시합니다.",
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

function FlowStep({ number, title, description }: FlowStepProps) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
        {number}
      </div>
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function MetricCard({ label, value, note }: MetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
      <dt className="text-sm font-semibold text-slate-500">{label}</dt>
      <dd className="mt-2 text-2xl font-bold text-blue-700">{value}</dd>
      <p className="mt-2 text-xs font-medium text-slate-400">{note}</p>
    </div>
  );
}

function StepCard({ number, title, description }: StepProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-sm shadow-black/10">
      <p className="text-sm font-bold tabular-nums text-blue-200">{number}</p>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-blue-50/80">{description}</p>
    </article>
  );
}

function ComparisonCard({ title, items, highlighted = false }: ComparisonProps) {
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

function ClassificationTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        <p className="text-sm font-bold text-blue-700">확신도 체크 기준</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">
          “이 답에 얼마나 확신이 있나요?”
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          학생에게 풀이 전 가능 여부를 묻지 않습니다. 답을 선택한 뒤 확신도를
          체크하고, 정오 결과와 함께 학습 상태를 분류합니다.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-500 sm:px-6">
        <span>확신도</span>
        <span>정답일 때</span>
        <span>오답일 때</span>
      </div>
      {classifications.map((item) => (
        <div
          key={item.confidence}
          className="grid grid-cols-[1fr_1fr_1fr] gap-2 border-b border-slate-100 px-4 py-4 text-sm last:border-b-0 sm:px-6 sm:text-base"
        >
          <span className="font-bold text-slate-950">{item.confidence}</span>
          <span className="font-semibold text-blue-700">{item.correct}</span>
          <span className="font-semibold text-slate-700">{item.incorrect}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-100 bg-gradient-to-b from-blue-50/70 via-white to-white">
        <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-100/80">
              고1·고2 대상 통합과학 메타인지 진단
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              통합과학, 점수만 보고 끝내지 마세요.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              문제별 확신도와 오답 원인을 분석해, 아이가 안다고 착각하는
              개념과 자료 해석 약점을 찾아냅니다. 약점을 정확히 알아야 내신과
              수능형 통합과학 성적 향상으로 이어지는 복습이 가능합니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#apply"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-blue-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
              >
                진단 신청하기
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
            aria-label="진단 리포트 요약 예시"
            className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-3 shadow-2xl shadow-blue-100/70 backdrop-blur sm:p-5"
          >
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    리포트 미리보기
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    고확신 오답 경고
                  </h2>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  예시
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metrics.slice(0, 2).map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </dl>
              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-900">
                  우선 확인할 약점
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  정답률보다 먼저 볼 지점은 확신하고 틀린 문항입니다. 이
                  구간은 학생이 이해했다고 느끼지만 실제 적용에서 흔들릴 수
                  있습니다.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="학습 개선 흐름"
            title="성적 향상은 ‘더 많이 푸는 것’보다 ‘무엇을 보완할지 아는 것’에서 시작됩니다."
            description="같은 점수를 받은 학생이라도 원인은 다를 수 있습니다. 어떤 학생은 개념이 부족하고, 어떤 학생은 자료 해석에서 흔들리며, 어떤 학생은 안다고 확신한 문제를 반복해서 틀립니다. 이 서비스는 정답률 뒤에 숨어 있는 학습 문제를 찾아내고, 다음 복습 방향으로 연결합니다."
          />
          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-8 right-8 top-11 hidden h-px bg-blue-100 lg:block" />
            {flowSteps.map((step) => (
              <FlowStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="문제"
            title="정답률보다 중요한 것은 확신하고 틀린 문제입니다."
            description="시험 후 점수만 확인하면 학생이 왜 틀렸는지 알 수 없습니다. 특히 확신하고 틀린 문제는 학생이 이해했다고 느끼지만 실제 적용에서는 무너진다는 신호입니다. 이 구간을 찾아내야 같은 실수를 반복하지 않고 성적 향상에 필요한 복습을 할 수 있습니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="진단"
            title="진단이 끝나면, 복습 방향이 달라집니다."
            description="학생은 진단 문항의 답을 고른 뒤 확신도 체크, 정오 여부, 체감 난도, 오답 원인을 기록합니다. 이후 리포트는 정답률 뒤에 가려진 착각 구간, 취약 단원, 취약 문항 유형, 복습 우선순위를 보여줍니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <p className="text-sm font-bold text-blue-700">
                답을 고른 뒤 체크합니다
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950">
                풀이 전 질문이 아니라, 선택한 답에 대한 확신도를 봅니다.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                진단 문항을 풀기 전에 “풀 수 있나요?”라고 묻지 않습니다.
                학생이 답을 선택한 뒤 “이 답에 얼마나 확신이 있나요?”를
                체크하게 하고, 그 결과를 정답 여부와 함께 해석합니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["확실함", "애매함", "거의 찍음"].map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
            <ClassificationTable />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="다음 확장 방향"
            title="출제 가능 유형 분석과 개인 약점을 함께 연결합니다."
            description="단순히 나올 문제를 예측하는 것이 아니라, 출제 가능성이 높은 유형과 학생 개인의 약점을 결합해 가장 먼저 보완해야 할 학습 순서를 제시합니다. 이 방향은 향후 내신 범위와 수능형 통합과학 학습을 더 세밀하게 연결하기 위한 구조입니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {predictionBridge.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading title="진단 전과 진단 후, 공부 방식이 달라집니다." />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ComparisonCard title="진단 전" items={beforeItems} />
            <ComparisonCard title="진단 후" items={afterItems} highlighted />
          </div>
        </div>
      </section>

      <section id="report" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <SectionHeading
            eyebrow="리포트 예시"
            title="리포트는 점수표가 아니라 성적 향상을 위한 학습 방향표입니다."
            description="학부모와 학생이 같은 기준으로 약점을 확인할 수 있도록, 수치와 해석을 함께 제공합니다. 단순히 몇 점을 받았는지가 아니라, 어떤 유형에서 왜 흔들리고 무엇부터 보완해야 하는지를 보여줍니다."
          />
          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-8">
            <div className="flex flex-col gap-2 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold text-blue-700">
                  예시 리포트
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  통합과학 진단 요약
                </h3>
              </div>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </dl>
            <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-slate-700 sm:p-6 sm:text-base sm:leading-8">
              전체 정답률은 68%입니다. 다만 확신도 높은 오답 비율이 32%로
              나타났습니다. 이는 학생이 일부 개념을 알고 있다고 느끼지만,
              실제 문제 적용에서는 흔들릴 가능성이 있다는 의미입니다. 특히
              자료 해석형 문항과 에너지 전환 영역에서 약점이 나타났습니다.
              다음 2주간은 새 개념 진도보다 해당 유형의 근거 찾기와 자료 해석
              훈련이 우선입니다.
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
              실제 리포트는 학생의 응답 결과에 따라 개별 생성됩니다.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="진단 절차"
            title="진단은 이렇게 진행됩니다."
            inverse
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
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

      <section id="apply" className="border-t border-blue-100 bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            통합과학 성적 향상, 먼저 약점 진단부터 시작하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            내신 점수만으로는 아이의 학습 상태를 충분히 알기 어렵습니다.
            통합과학 메타인지 진단을 통해 지금 필요한 복습 방향을 확인하세요.
          </p>
          <a
            href="/apply"
            className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-blue-700 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-200/80 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            진단 신청하기
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
