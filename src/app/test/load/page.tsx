'use client';

import { NF_PROJECT_KEY, NF_SEGMENT_DEFAULT_KEY } from "@/config";
import { useNetFunnel } from "@/hooks/use-net-funnel";

export default function LoadTestPage() {
  const { result } = useNetFunnel({
    type: 'basic',
    step: 'start',
    projectKey: NF_PROJECT_KEY,
    segmentKey: NF_SEGMENT_DEFAULT_KEY,
  });

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">📄 /test/load</h1>
      <p>페이지 진입 시 자동 대기 테스트</p>
      <p className="text-sm text-gray-500">NetFunnel 상태: {result?.status ?? '대기 중...'}</p>
    </div>
  );
}