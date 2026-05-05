# 인터넷 공개 배포 방법

이 프로젝트는 Next.js 랜딩페이지입니다. 다른 사람이 인터넷으로 접속하게 하려면 Vercel에 배포하는 방식이 가장 간단합니다.

## Vercel로 배포

1. https://vercel.com 에 접속합니다.
2. GitHub 계정으로 로그인합니다.
3. 이 프로젝트를 GitHub 저장소에 올립니다.
4. Vercel에서 `Add New Project`를 선택합니다.
5. 방금 올린 저장소를 선택합니다.
6. Framework Preset은 `Next.js`로 둡니다.
7. `Deploy`를 누릅니다.

배포가 끝나면 `https://프로젝트이름.vercel.app` 형태의 공개 링크가 생성됩니다.

## 확인 사항

- 백엔드, 데이터베이스, 인증, 결제, API route는 없습니다.
- 신청 버튼은 현재 `/apply` placeholder로 연결되어 있습니다.
- 실제 신청 폼이 생기면 `app/page.tsx`의 마지막 CTA `href="/apply"` 값을 바꾸면 됩니다.
