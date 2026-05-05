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

const problems: CardProps[] = [
  {
    title: "오답 원인을 모름",
    description:
      "개념 부족인지, 자료 해석 실패인지, 조건 누락인지 구분하지 못한 채 다음 시험으로 넘어갑니다.",
  },
  {
    title: "안다고 착각함",
    description:
      "익숙한 개념은 맞히지만 낯선 자료나 상황에 적용하면 흔들리는 경우가 많습니다.",
  },
  {
    title: "복습 우선순위가 없음",
    description:
      "틀린 문제를 모두 똑같이 다시 보며, 가장 위험한 약점부터 처리하지 못합니다.",
  },
];

const features: CardProps[] = [
  {
    title: "확신도 분석",
    description:
      "문항마다 학생이 얼마나 확신했는지 기록해 정답률 뒤에 가려진 이해 상태를 확인합니다.",
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
    title: "복습 우선순위",
    description:
      "모든 오답을 같은 무게로 보지 않고, 먼저 복습해야 할 단원과 유형을 정리합니다.",
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
    description: "신청서를 작성하면 진단 링크와 안내를 개별 발송합니다.",
  },
  {
    number: "02",
    title: "진단",
    description:
      "통합과학 문항을 풀고, 문항별 확신도와 오답 원인을 체크합니다.",
  },
  {
    number: "03",
    title: "리포트",
    description:
      "정답률, 고확신 오답률, 약점 유형, 2주 복습 방향을 제공합니다.",
  },
];

const targets = [
  "통합과학 내신을 봤지만 왜 틀렸는지 정확히 모르는 학생",
  "개념은 아는 것 같은데 자료 해석형 문제에서 자주 틀리는 학생",
  "오답을 ‘실수’라고 넘기지만 비슷한 문제를 반복해서 틀리는 학생",
  "학부모가 자녀의 약점과 복습 우선순위를 구체적으로 알고 싶은 경우",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-bold text-blue-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProblemCard({ title, description }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
        !
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function FeatureCard({ title, description }: CardProps) {
  return (
    <article className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function MetricCard({ label, value, note }: MetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <dt className="text-sm font-semibold text-slate-500">{label}</dt>
      <dd className="mt-2 text-2xl font-bold text-blue-700">{value}</dd>
      <p className="mt-2 text-xs font-medium text-slate-400">{note}</p>
    </div>
  );
}

function StepCard({ number, title, description }: StepProps) {
  return (
    <article className="rounded-2xl border border-white/15 bg-white/[0.07] p-6">
      <p className="text-sm font-bold text-blue-200">{number}</p>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-blue-50/80">{description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-100">
        <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              고1·고2 대상 통합과학 메타인지 진단 파일럿
            </p>
            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              통합과학 내신, 점수만 보고 끝내고 있나요?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              문제별 확신도와 오답 원인을 분석해, 아이가 안다고 착각하는
              개념과 자료 해석 약점을 찾아드립니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-700 px-6 text-base font-bold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                진단 파일럿 신청하기
              </a>
              <a
                href="#report"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-base font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
              >
                리포트 예시 보기
              </a>
            </div>
          </div>

          <aside
            aria-label="진단 리포트 요약 예시"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6"
          >
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-bold text-blue-700">
                    파일럿 리포트 미리보기
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    고확신 오답 경고
                  </h2>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  예시
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {metrics.slice(0, 2).map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </dl>
              <div className="mt-5 rounded-2xl bg-blue-50 p-5">
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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="문제"
            title="정답률보다 중요한 것은 확신하고 틀린 문제입니다."
            description="많은 학생은 통합과학 시험이 끝난 뒤 점수만 확인합니다. 하지만 위험한 부분은 단순히 틀린 문제가 아닙니다. 개념을 이해했다고 생각했는데도 틀린 문제가 진짜 학습 위험 신호입니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="진단"
            title="그래서 먼저 필요한 것은 강의가 아니라 진단입니다."
            description="학생은 진단 문항을 풀고 확신도, 정오 여부, 체감 난도, 오답 원인을 기록합니다. 이후 리포트는 정답률, 고확신 오답, 취약 단원, 취약 문항 유형, 복습 우선순위를 보여줍니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="report" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <SectionHeading
            eyebrow="리포트 예시"
            title="리포트는 점수표가 아니라 학습 방향표입니다."
            description="학부모와 학생이 같은 기준으로 약점을 확인할 수 있도록, 수치와 해석을 함께 제공합니다."
          />
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-2 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold text-blue-700">
                  예시 리포트
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  통합과학 진단 요약
                </h3>
              </div>
              <p className="text-sm font-medium text-slate-500">
                정식 리포트 형식은 파일럿 중 조정됩니다.
              </p>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </dl>
            <p className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              전체 정답률은 68%입니다. 다만 확신도 높은 오답 비율이 32%로
              나타났습니다. 이는 학생이 일부 개념을 알고 있다고 느끼지만,
              실제 문제 적용에서는 흔들릴 가능성이 있다는 의미입니다. 특히
              자료 해석형 문항과 에너지 전환 영역에서 약점이 나타났습니다.
              다음 2주간은 새 개념 진도보다 해당 유형의 근거 찾기와 자료 해석
              훈련이 우선입니다.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="파일럿 진행"
            title="파일럿은 이렇게 진행됩니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <SectionHeading title="이런 학생에게 적합합니다." />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {targets.map((target) => (
              <li
                key={target}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700 shadow-sm"
              >
                <span className="mr-2 font-bold text-blue-700">확인</span>
                {target}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="border-t border-slate-100 bg-blue-50 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            통합과학 공부를 시작하기 전, 현재 약점과 복습 우선순위를 먼저
            확인하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            이번 파일럿은 소규모로 운영됩니다. 신청 후 진단 안내를 개별
            발송합니다.
          </p>
          <a
            href="/apply"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-blue-700 px-6 text-base font-bold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            진단 파일럿 신청하기
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        통합과학 메타인지 진단 파일럿 · 정식 출시 전 검증 프로그램
      </footer>
    </main>
  );
}
