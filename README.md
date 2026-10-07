# appboong.github.io

AppBoong 앱들이 함께 쓰는 정적 사이트. 서버 코드는 없다.

- `/.well-known/apple-app-site-association`: iOS Universal Links. 앱마다 `details`에 항목 하나(`TEAMID.bundle.id` + 담당 경로)를 추가한다.
- `/.well-known/assetlinks.json`: Android App Links. 앱마다 패키지명과 Play 앱 서명 SHA-256 지문을 추가한다(Play Console 등록 후).
- `/<app>/`: 앱 소개, `privacy.html`(개인정보처리방침), `support.html`(지원·FAQ), 링크 랜딩 페이지. 정책·지원 페이지는 ko/en 두 블록이고 `assets/lang-switch.js`로 언어를 바꿔 볼 수 있다. ASC의 개인정보처리방침·지원 URL과 앱 안 링크가 이 주소를 가리킨다.
- `.nojekyll`: `.well-known` 폴더를 게시하기 위해 필요하다.

새 앱 추가: `/<app>/` 폴더를 만들고, 두 인증 파일에 경로를 겹치지 않게 등록한 뒤 `index.html` 목록에 카드를 추가한다.

| 앱 | 경로 | iOS appID | Android |
|---|---|---|---|
| PenTrip | `/pentrip/c/*` | `MU569YV3Y3.com.appboong.pentrip` | 출시 후 추가 |
