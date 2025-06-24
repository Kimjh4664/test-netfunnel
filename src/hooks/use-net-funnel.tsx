'use client';

import { useEffect, useState, useCallback } from 'react';

type NetFunnelStatus = 'Success' | 'Block' | 'Close' | 'None';

interface UseNetFunnelOptions {
  type: 'basic' | 'section';
  step?: 'start' | 'stop';
  projectKey: string;
  segmentKey: string;
  manual?: boolean;
}

interface UseNetFunnelResult {
  result: { status: NetFunnelStatus; statusCode?: number } | null;
  canProceed: boolean;
  triggerStart: () => void;
  triggerStop: () => void;
}

export function useNetFunnel({
  type,
  step,
  projectKey,
  segmentKey,
  manual = false,
}: UseNetFunnelOptions): UseNetFunnelResult {
  const [result, setResult] = useState<UseNetFunnelResult['result']>(null);
  const [canProceed, setCanProceed] = useState(false);

  const callNetFunnel = useCallback(
    (action: 'start' | 'stop') => {
      if (typeof window === 'undefined') return;

      const closed = sessionStorage.getItem('netfunnel_closed') === 'true';
      if (action === 'start' && closed) return;

      const methodMap = {
        basic: {
          start: window.nfStart,
          stop: window.nfStop,
        },
        section: {
          start: window.nfStartSection,
          stop: window.nfStopSection,
        },
      };

      const fn = methodMap[type][action];
      if (!fn) return;

      fn({ projectKey, segmentKey }, (res: any) => {
        setResult(res);

        if (res.status === 'Success' && res.statusCode === 200) {
          setCanProceed(true);
        }
      });
    },
    [type, projectKey, segmentKey]
  );

  const triggerStart = useCallback(() => {
    callNetFunnel('start');
  }, [callNetFunnel]);

  const triggerStop = useCallback(() => {
    callNetFunnel('stop');
  }, [callNetFunnel]);

  useEffect(() => {
    if (manual || !step) return;
    callNetFunnel(step);
  }, [step, manual, callNetFunnel]);

  return {
    result,
    canProceed,
    triggerStart,
    triggerStop,
  };
}
