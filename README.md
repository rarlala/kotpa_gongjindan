# 월간 공진단 사이트 퍼블리싱

HTML5 + CSS3 + jQuery + JavaScript 를 활용한 퍼블리싱 작업 진행

### 해당 사이트 선정 이유

[gdweb](http://www.gdweb.co.kr/main/)에서 반응형 작업을 진행할 사이트를 찾던 중 모바일까지 반응형으로 작업된 페이지를 찾다가 발견했다.  
우선 외관상 사이트 자체가 예쁘고 깔끔한 느낌이라 선정했다.  
분석하다보니 반응형 처리를 위한 break-point가 많고, 애니메이션 효과 등이 많아 학습에도 많은 도움이 되었다.

### 작업물 소개

- 2단 레이어로 구성되어있는 main 디자인
- 덜컹 거리는 느낌이 좋아보이지 않아 상세 페이지내 헤더는 `position:fixed`로 고정하였음
- 원래의 사이트보다 축소 시 레이아웃이 무너지지 않는 선에서 글자 크기를 많이 줄이지 않고 작업하였음

### 작업 화면

- [x] index.html
- [x] preview.html

### 반응형 처리 check

- index.html / break-point

  - [x] 680px 이하
  - [x] 800px 이하
  - [x] 960px 이하
  - [x] 1200px 이하
  - [x] 1201px 이상
  - [x] 1701px 이상

- preview.html / break-point
  - [x] 1125px 이하 // header
  - [x] 800px 이하
  - [x] 762px 이하 // frame
  - [x] 680px 이하

### 작업 리스트

- [완료] scroll에 따른 animation 처리
- [완료] 이미지 hover 시 jquery 오류 해결 필요
- [완료] 영역 hover 시 이미지 hover 처리 필요
- [완료] menu 클릭 시 menu 박스 뒤 영역 스크롤 안되도록 처리하기
- [완료] visual 영역 이미지 jQuery로 받아와 처리하기
- [완료] content-list 박스 반응형에 따라 형태가 무너지는 현상 해결 필요
- [완료] 공연 등록 버튼 이미지 반응형에 따라 위치 및 형태가 무너지는 현상 해결 필요 (특히, 1600px 이상 시)

### WAI-ARIA 처리

- `.hidden` class로 더보기 버튼 설명 추가

### 참고

- 월간 공진단 주소 https://webzine.kotpa.org/
- 원 사이트 및 퍼블리싱 당시 사이트 이미지 캡쳐
