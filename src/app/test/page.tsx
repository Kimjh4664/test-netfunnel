'use client';

import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

export default function Test() {
  const [view, setView] = useState<boolean>(false);
  const [projectKey, setProjectKey] = useState<string>('service_301');
  const [segmentKey, setSegmentKey] = useState<string>('segKey_7349');

  const handleProjectKey = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectKey(e.target.value);
  };

  const handleSegmentKey = (e: ChangeEvent<HTMLInputElement>) => {
    setSegmentKey(e.target.value);
  };

  const handleClick = () => {
    if (projectKey && segmentKey) {
      localStorage.setItem('project-key', projectKey);
      localStorage.setItem('segment-key', segmentKey);
      setView(true);
    } else {
      setView(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <input type="text" placeholder='projectKey' value={projectKey} onChange={handleProjectKey} />
      <input type="text" placeholder='segmentKey' value={segmentKey} onChange={handleSegmentKey} />
      <button onClick={handleClick}>테스트 페이지 조회</button>

      {view && <div className="flex flex-col items-center w-full overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
          NEXTLAB 유량제어 시스템 테스트
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
          <Link href={'/test/range/1'}>구간 테스트</Link>
        </h3>
        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
          <Link href={'/test/load'}>페이지 로드 테스트</Link>
        </h3>
        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
          <Link href={'/test/action'}>버튼 테스트</Link>
        </h3>
      </div>}
    </div >
  );
}
