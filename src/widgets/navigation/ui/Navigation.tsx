'use client';

import { BookOpen, Home, Search, Settings, Users } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation'; //app router에서는 next/navigation의 useRouter를 사용해야한다.

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-8">
        <h1 className="m-0 text-(--color-text-primary)">ThinkingOf</h1>

        <div className="flex gap-2">
          <button
            onClick={() => router.push('home')}
            className="flex items-center gap-2"
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          <button
            onClick={() => router.push('people')}
            className="flex items-center gap-2"
          >
            <Users size={18} />
            <span>People</span>
          </button>

          <button
            onClick={() => router.push('logs')}
            className="flex items-center gap-2"
          >
            <BookOpen size={18} />
            <span>Logs</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button>
          <Search size={18} />
        </button>
        <button>
          <Settings size={18} />
        </button>
      </div>
    </nav>
  );
}
