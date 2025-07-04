
// /test/action/page.tsx - 버튼 클릭 시 수동 대기 실행
'use client';
import { NF_PROJECT_KEY, NF_SEGMENT_DEFAULT_KEY } from '@/config';
import { useNetFunnel } from '@/hooks/use-net-funnel';

export default function ActionTestPage() {
  const { result, triggerStart, triggerStop, canProceed } = useNetFunnel({
    type: 'basic',
    projectKey: NF_PROJECT_KEY,
    segmentKey: NF_SEGMENT_DEFAULT_KEY,
    manual: true,
  });

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">🛎️ /test/action</h1>
      <button
        onClick={triggerStart}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        NetFUNNEL 대기
      </button>

      <p>진입에 대한 종료를 호출하기 위해서는 아래 버튼을 누르세요.</p>

      <button
        onClick={triggerStop}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        NetFUNNEL 진입 종료
      </button>

      <p className="text-sm text-gray-500">NetFunnel 상태: {result?.status ?? '아직 대기 미실행'}</p>
      {canProceed && <p className="text-green-600 text-sm">✅ 대기 완료!</p>}
    </div>
  );
}
