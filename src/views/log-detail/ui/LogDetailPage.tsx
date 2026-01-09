import { ArrowLeft, Calendar, Edit, Trash2, User } from 'lucide-react';
import React from 'react';

export default function LogDetailPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      {/* 페이지 설명 입니다. 페이지 개발 후 삭제 */}
      <header className="mb-6 flex flex-col gap-2">
        <h1 className="text-lg!">기록 상세 페이지</h1>
        <p>
          기록 상세 페이지에는 인물, 상황 그리고 상황에 따른 감정 변화가
          들어갑니다. 또한 기록을 수정하거나 삭제할 수 있습니다.
        </p>
        <p>또한 기록을 수정하거나 삭제할 수 있습니다.</p>
        <p>
          기록의 작성일을 확인할 수 있으며, 기록을 수정시 수정일은 업데이트
          됩니다.
        </p>
      </header>

      <div className="mb-6">
        <button className="mb-4 flex items-center gap-2">
          <ArrowLeft size={18} />
          <span>돌아가기</span>
        </button>
      </div>
      <section>
        <header className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full">
              <User size={28} />
            </div>
            <div>
              <h2 className="m-0">홍길동</h2>
              <div className="mt-2 flex items-center gap-2">
                <Calendar size={14} />
                <small className="">작성일</small>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2">
              <Edit size={16} />
              <span>편집</span>
            </button>

            <button className="flex items-center gap-2 text-red-500">
              <Trash2 size={16} />
              <span>삭제</span>
            </button>
          </div>
        </header>

        {/* Emotion Timeline */}
        <section className="mb-6">
          <h3 className="mb-4">감정 변화</h3>
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4">
              여기에 감정 변화가 표시됩니다.
            </div>
          </div>
        </section>

        {/* Situation */}
        <section>
          <h3 className="mb-4">상황</h3>
          <div className="p-6">
            <p className="leading-relaxed whitespace-pre-wrap">
              여기에 상황 설명이 들어갑니다.
            </p>
          </div>
        </section>

        {/* Metadata */}
        <footer className="mt-6 border-t border-[rgba(163,177,198,0.2)] pt-6">
          <div className="flex items-center gap-6">
            <small>작성일:</small>
            <small>수정일:</small>
          </div>
        </footer>
      </section>
    </main>
  );
}
