export default function LogsPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      {/* 페이지 설명 입니다. 페이지 개발 후 삭제 */}
      <header className="mb-6 flex flex-col gap-2">
        <h1 className="text-lg!">기록 목록 페이지</h1>
        <p>
          기록 목록 페이지에는 기록 검색 창, 인물 선택 창, 기록 데이터 카드가
          있습니다.
        </p>
        <p>
          기록에 대한 검색은 상황이나 인물로 검색할 수 있으며, 우측 인물 선택
          창을 통해 인물별 기록을 찾아볼 수 있습니다.
        </p>
        <p>또한 기록 데이터는 최신순/오래된 순으로 정렬할 수 있습니다.</p>
        <p>
          기록 데이터를 담은 카드 컴포넌트를 누르면 LogDetailPage로
          redirect됩니다.
        </p>
      </header>
      <section className="mb-6">
        <h2 className="mb-4">기록 목록</h2>

        <section className="" aria-label="검색 및 인물 선택">
          여기에 기록 검색 창과 인물 선택 창이 들어갑니다.
        </section>

        <section
          className="mb-4 flex items-center justify-between"
          aria-label="목록 요약 및 정렬"
        >
          <p> 총 몇개의 기록 </p>
          <section className="w-40">여기에 정렬 컴포넌트가 들어갑니다.</section>
        </section>

        <section className="flex flex-col gap-4" aria-label="기록 리스트">
          여기에 기록 데이터가 담긴 카드 컴포넌트가 들어갑니다.
        </section>
      </section>
    </main>
  );
}
