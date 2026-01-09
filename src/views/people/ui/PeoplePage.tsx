import { Plus } from 'lucide-react';

export default function PeoplePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      {/* 페이지 설명 입니다. 페이지 개발 후 삭제 */}
      <header className="mb-6 flex flex-col gap-2">
        <h1 className="text-lg!">인물 관리 페이지</h1>
        <p>
          인물 관리 페이지에서 인물을 추가하고 기록된 인물을 찾아볼 수 있습니다.
        </p>
        <p>새 인물 추가 버튼을 누르면 이름 입력 폼이 렌더링됩니다.</p>
        <p>인물 검색 창에서 인물을 이름이나 태그로 검색할 수 있습니다.</p>
        <p>
          인물 카드는 grid로 배치되며, 이름/관계/기록 개수/가장 많이 기록된
          감정이 보입니다.
        </p>
      </header>
      <section
        className="mb-6 flex items-center justify-between"
        aria-label="페이지 액션"
      >
        <h2>인물 관리</h2>
        <button className="flex items-center gap-2">
          <Plus size={18} />
          <span>새 인물 추가</span>
        </button>
      </section>

      <section className="mb-6" aria-label="인물 검색">
        여기에 인물 검색 창이 들어갑니다.
      </section>

      <section aria-label="인물 카드 목록">
        여기에 인물 정보에 대한 카드 컴포넌트가 들어갑니다.
      </section>
    </main>
  );
}
