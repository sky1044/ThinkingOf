# ThinkingOf

사람(인물)과 그 사람과의 “상황”, 그리고 그때의 “감정”을 기록하고,
기록된 데이터를 네트워크 그래프(Force-Directed Graph)로 시각화하는 웹 서비스입니다.

- 인물과 감정을 노드로 표현
- 상황(기억/이벤트)을 연결(엣지)로 표현
- 시간이 쌓일수록 관계/감정의 패턴을 한눈에 볼 수 있도록 설계합니다.

---

## Preview (WIP)

- (추후 스크린샷 / 데모 링크 추가)

---

## Core Features (Planned)

- 인물/상황/감정 기록(Create)
- 인물-감정 네트워크 시각화(View)
- 노드/엣지 드래그 인터랙션(Force simulation)
- 필터(인물/감정/기간) 및 검색
- (추후) 데이터 저장소 연동 및 계정 기능

> 위 기능 목록은 계획이며, 실제 구현 범위는 개발 진행에 따라 조정될 수 있습니다.

---

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- D3.js (force simulation 기반 네트워크 그래프)

### UI

- shadcn/ui (재사용 가능한 UI 컴포넌트)
- lucide-react (아이콘)

---

## Getting Started

```bash
# install
npm install

# dev
npm run dev
```
