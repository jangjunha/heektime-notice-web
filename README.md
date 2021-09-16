# HeekTime Notice Website

HeekTime 모바일의 공지사항을 제공합니다.

## 유의사항

- /notices
  - frontmatter:
    - createdAt: ISO 8601 포맷의 글 작성 시각. 모바일에서 이 값이 최댓값을 비교해서 배지를 띄웁니다.
    - published: 공지사항 리스트에 보일 것인지 여부. 직접 접근시 관계없이 보입니다.
    - popupVersionPattern: 팝업으로 띄울 앱 버전 패턴. 예) `iOS 3\.0\.0`
    - popupShowAlways: 앱을 켤 때마다 보여줍니다.
  - gatsby-node.ts 에 의해 build 이후 status.json 이 생성됩니다.
