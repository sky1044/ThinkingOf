export default function HomePage() {
  return (
    <main>
      {/* 페이지 설명 입니다. 페이지 개발 후 삭제 */}
      <header className="flex flex-col gap-2 p-6">
        <h1 className="text-lg!">사용자 홈페이지</h1>
        <p>사용자 홈페이지에는 감정 그래프가 있습니다.</p>
        <p>또한 감정과 인물 그리고 상황에 대한 새 기록을 작성할 수 있습니다.</p>
        <p>그래프의 노드를 클릭하면 노드에 대한 상세 정보를 알 수 있습니다.</p>
      </header>
      <div className="flex h-[cal(100vh-88px)] gap-6 p-6">
        {/* Left Panel - 새 기록 작성 */}
        <aside className="w-80 shrink-0 border" aria-label="새 기록 작성">
          여기에 새 기록 작성이 들어갑니다.
        </aside>

        {/* Center Panel - 그래프 */}
        <section className="flex-1 border" aria-label="감정 그래프">
          여기에 감정 그래프가 들어갑니다.
        </section>

        {/* Right Panel - 그래프 노드 상세 정보 */}
        <aside
          className="w-96 shrink-0 border"
          aria-label="그래프 노드 상세 정보"
        >
          여기에 그래프 노드 상세 정보가 들어갑니다.
        </aside>
      </div>
    </main>
  );
}
