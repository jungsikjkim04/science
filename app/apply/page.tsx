"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type FormData = {
  studentName: string;
  grade: string;
  parentName: string;
  applicantType: string;
  phone: string;
  email: string;
  currentStatus: string;
  biggestConcern: string[];
  preferredProgram: string;
  message: string;
  privacyAgreed: boolean;
};

const initialFormData: FormData = {
  studentName: "",
  grade: "",
  parentName: "",
  applicantType: "",
  phone: "",
  email: "",
  currentStatus: "",
  biggestConcern: [],
  preferredProgram: "",
  message: "",
  privacyAgreed: false,
};

const grades = ["예비고1", "고1", "고2", "고3", "기타"];
const applicantTypes = ["학생 본인", "학부모", "선생님/관리자"];
const statuses = [
  "학교 수업만 듣는 중",
  "문제집 풀이 중",
  "인강/학원 병행 중",
  "거의 대비하지 않음",
  "기타",
];
const concerns = [
  "개념 이해",
  "자료 해석",
  "그래프·표 해석",
  "조건 파악",
  "문제 적용",
  "오답 원인 분석",
  "무엇이 문제인지 모르겠음",
];
const programs = [
  "1회 통합과학 진단 리포트",
  "2주 보완 문제 + 재진단",
  "주간 보완 문제 세트",
  "월간 미니 모의고사",
  "아직 상담 후 결정",
];

function InfoCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-blue-100 bg-white/85 p-5 shadow-sm shadow-blue-100/60">
      <h2 className="text-base font-bold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
    </article>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-bold leading-6 text-slate-800"
    >
      {children}
      {required ? <span className="ml-1 text-blue-700">*</span> : null}
    </label>
  );
}

function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: "text" | "email";
  required?: boolean;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      required={required}
      className="mt-2 min-h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    />
  );
}

function SelectField({
  id,
  value,
  onChange,
  options,
  placeholder = "선택해주세요",
  required = false,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      className="mt-2 min-h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/60">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
      />
      <span>{label}</span>
    </label>
  );
}

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-100 pt-7 first:border-t-0 first:pt-0">
      <h2 className="text-base font-bold text-slate-950">{title}</h2>
      <div className="mt-5 grid gap-5">{children}</div>
    </section>
  );
}

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return (
      formData.studentName.trim().length > 0 &&
      formData.grade.length > 0 &&
      formData.applicantType.length > 0 &&
      formData.phone.trim().length > 0 &&
      formData.currentStatus.length > 0 &&
      formData.biggestConcern.length > 0 &&
      formData.preferredProgram.length > 0 &&
      formData.privacyAgreed
    );
  }, [formData]);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const toggleConcern = (concern: string) => {
    setFormData((current) => {
      const selected = current.biggestConcern.includes(concern);
      return {
        ...current,
        biggestConcern: selected
          ? current.biggestConcern.filter((item) => item !== concern)
          : [...current.biggestConcern, concern],
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    console.log("통합과학 진단 신청 데이터", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(219,234,254,0.95),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#ffffff_58%)] text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <section className="lg:sticky lg:top-10 lg:self-start">
          <Link
            href="/"
            className="inline-flex text-sm font-bold text-blue-700 transition hover:text-blue-900"
          >
            홈으로 돌아가기
          </Link>
          <p className="mt-8 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-100/80">
            통합과학 메타인지 학습관리
          </p>
          <h1 className="mt-6 max-w-xl text-[2.35rem] font-bold leading-tight text-slate-950 sm:text-5xl sm:leading-tight">
            통합과학 진단을 신청하세요.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            학생의 통합과학 문제풀이 결과를 바탕으로 개념 이해, 자료
            해석, 문제 적용, 오답 원인을 분석하고 필요한 보완 문제와 복습
            방향을 제시합니다.
          </p>
          <div className="mt-9 grid gap-4">
            <InfoCard
              title="1. 진단"
              body="통합과학 문항을 풀며 현재 학습 상태를 확인합니다."
            />
            <InfoCard
              title="2. 분석"
              body="정답률, 문항 유형, 오답 원인을 바탕으로 약점의 원인을 분석합니다."
            />
            <InfoCard
              title="3. 보완"
              body="진단 결과에 따라 주간 보완 문제와 재진단 방향을 안내합니다."
            />
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-100/70 sm:p-6">
          {submitted ? (
            <div className="rounded-[1.35rem] border border-blue-100 bg-blue-50/70 p-6 sm:p-8">
              <p className="inline-flex rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white">
                신청 완료
              </p>
              <h2 className="mt-6 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                통합과학 진단 신청이 접수되었습니다.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                신청 내용 확인 후 진단 안내를 개별적으로 전달드립니다. 현재
                페이지는 프로토타입이므로, 실제 운영 시에는 데이터베이스 저장
                또는 관리자 알림 기능을 연결하면 됩니다.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                <h3 className="text-lg font-bold text-slate-950">
                  신청 요약
                </h3>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-500">학생명</dt>
                    <dd className="mt-1 font-bold text-slate-900">
                      {formData.studentName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">학년</dt>
                    <dd className="mt-1 font-bold text-slate-900">
                      {formData.grade}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      희망 프로그램
                    </dt>
                    <dd className="mt-1 font-bold text-slate-900">
                      {formData.preferredProgram}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">주요 고민</dt>
                    <dd className="mt-1 font-bold text-slate-900">
                      {formData.biggestConcern.join(", ")}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-200/80 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
                >
                  홈으로 돌아가기
                </Link>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
                >
                  다른 학생 신청하기
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.35rem] border border-slate-100 bg-white p-5 sm:p-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  신청 정보 입력
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  신청 내용을 확인한 뒤 진단 안내를 개별적으로 전달드립니다.
                </p>
              </div>

              <div className="mt-8 space-y-8">
                <FormSection title="학생 정보">
                  <div>
                    <FieldLabel htmlFor="studentName" required>
                      학생 이름
                    </FieldLabel>
                    <TextInput
                      id="studentName"
                      value={formData.studentName}
                      onChange={(value) => updateField("studentName", value)}
                      placeholder="예: 김민준"
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="grade" required>
                      학년
                    </FieldLabel>
                    <SelectField
                      id="grade"
                      value={formData.grade}
                      onChange={(value) => updateField("grade", value)}
                      options={grades}
                      required
                    />
                  </div>
                </FormSection>

                <FormSection title="학부모 및 신청자 정보">
                  <div>
                    <FieldLabel htmlFor="parentName">학부모 이름</FieldLabel>
                    <TextInput
                      id="parentName"
                      value={formData.parentName}
                      onChange={(value) => updateField("parentName", value)}
                      placeholder="예: 김OO"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="applicantType" required>
                        신청자
                      </FieldLabel>
                      <SelectField
                        id="applicantType"
                        value={formData.applicantType}
                        onChange={(value) => updateField("applicantType", value)}
                        options={applicantTypes}
                        required
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="phone" required>
                        연락처
                      </FieldLabel>
                      <TextInput
                        id="phone"
                        value={formData.phone}
                        onChange={(value) => updateField("phone", value)}
                        placeholder="예: 010-0000-0000"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <FieldLabel htmlFor="email">이메일</FieldLabel>
                    <TextInput
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(value) => updateField("email", value)}
                      placeholder="예: example@email.com"
                    />
                  </div>
                </FormSection>

                <FormSection title="학습 상태">
                  <div>
                    <FieldLabel htmlFor="currentStatus" required>
                      현재 통합과학 학습 상태
                    </FieldLabel>
                    <SelectField
                      id="currentStatus"
                      value={formData.currentStatus}
                      onChange={(value) => updateField("currentStatus", value)}
                      options={statuses}
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel required>가장 보완하고 싶은 부분</FieldLabel>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {concerns.map((concern) => (
                        <CheckboxOption
                          key={concern}
                          label={concern}
                          checked={formData.biggestConcern.includes(concern)}
                          onChange={() => toggleConcern(concern)}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <FieldLabel htmlFor="preferredProgram" required>
                      관심 있는 프로그램
                    </FieldLabel>
                    <SelectField
                      id="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={(value) =>
                        updateField("preferredProgram", value)
                      }
                      options={programs}
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="message">
                      추가로 남기고 싶은 내용
                    </FieldLabel>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      placeholder="현재 고민, 시험 일정, 학습 상황 등을 자유롭게 적어주세요."
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </FormSection>

                <FormSection title="개인정보 수집 및 이용 동의">
                  <label className="flex cursor-pointer gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold leading-7 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/60">
                    <input
                      type="checkbox"
                      checked={formData.privacyAgreed}
                      onChange={(event) =>
                        updateField("privacyAgreed", event.target.checked)
                      }
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
                    />
                    <span>
                      진단 안내 및 리포트 제공을 위해 입력한 정보를
                      수집·이용하는 것에 동의합니다.
                    </span>
                  </label>
                  <p className="text-sm leading-7 text-slate-500">
                    입력 정보는 진단 안내와 서비스 제공 목적 외에는 사용하지
                    않습니다.
                  </p>
                </FormSection>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`mt-9 inline-flex min-h-[54px] w-full items-center justify-center rounded-xl px-8 py-4 text-base font-bold transition focus:outline-none focus:ring-4 ${
                  isValid
                    ? "bg-blue-700 text-white shadow-xl shadow-blue-200/80 hover:-translate-y-0.5 hover:bg-blue-800 focus:ring-blue-200"
                    : "cursor-not-allowed bg-slate-200 text-slate-500 focus:ring-slate-100"
                }`}
              >
                신청 완료하기
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
