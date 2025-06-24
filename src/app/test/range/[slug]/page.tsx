'use client';

import { use } from 'react';
import { NF_PROJECT_KEY, NF_SEGMENT_RANGE_KEY } from '@/config';
import { useNetFunnel } from '@/hooks/use-net-funnel';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: step } = use(params); // ✅ 안전한 방식

  const router = useRouter();

  const { canProceed, result } = useNetFunnel({
    type: 'section',
    step: step === '1' ? 'start' : step === '3' ? 'stop' : undefined,
    projectKey: NF_PROJECT_KEY,
    segmentKey: NF_SEGMENT_RANGE_KEY
  });

  const nextStep = (parseInt(step) + 1).toString();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">/test/range/{step}</h1>
      <p className="text-sm text-gray-500">NetFunnel 상태: {result?.status ?? '대기 중...'}</p>
      <button
        onClick={() => router.push(`/test/range/${nextStep}`)}
        disabled={!canProceed && step === '1'}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        다음 페이지로 이동
      </button>
    </div>
  );
}
