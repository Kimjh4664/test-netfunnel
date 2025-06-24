/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import Link from 'next/link';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.nfStart) {
      window.nfStart(
        {
          projectKey: 'service_301',
          segmentKey: 'segKey_5982',
        },
        function (res) {
          console.log('[NetFUNNEL] 결과', res);

          switch (res.status) {
            case 'Success':
              if (res.statusCode === 200) alert('대기 완료!');
              break;
            case 'Close':
              alert('사용자가 닫음');
              break;
            case 'Block':
              alert('차단됨');
              break;
            case 'Error':
              alert('서버 오류');
              break;
            case 'NetworkError':
              alert('네트워크 오류');
              break;
          }
        }
      );
    } else {
      alert('NetFUNNEL이 아직 로드되지 않았습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
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
    </div >
  );
}
