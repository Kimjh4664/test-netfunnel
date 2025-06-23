/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { motion } from 'framer-motion';

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
      {/* Hero Section */}
      <motion.section
        className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-[var(--background)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.1] to-[var(--accent)]/[0.1] pointer-events-none" />
        <div className="container px-4 sm:px-6 relative z-10 max-w-full">
          <motion.div
            className="flex flex-col items-center space-y-6 text-center"
            {...fadeIn}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-poppins bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              NET FUNNEL TEST
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
              <button onClick={handleClick}>
                START
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
