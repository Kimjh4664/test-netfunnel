'use client';

import { useEffect } from 'react';

export default function Test() {
  const ready = () => {
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

  useEffect(() => {
    ready();
  }, []);

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      대기 페이지
    </div>
  );
}
