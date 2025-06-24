export { };

declare global {
  interface Window {
    nfStart?: (
      options: {
        projectKey: string;
        segmentKey: string;
      },
      callback: (res: NetFunnelResponse) => void
    ) => void;

    nfStop?: (
      options: {
        projectKey: string;
        segmentKey: string;
      },
      callback: (res: NetFunnelResponse) => void
    ) => void;

    nfStartSection?: (
      options: {
        projectKey: string;
        segmentKey: string;
      },
      callback: (res: NetFunnelResponse) => void
    ) => void;

    nfStopSection?: (
      options: {
        projectKey: string;
        segmentKey: string;
      },
      callback: (res: NetFunnelResponse) => void
    ) => void;

    STC_EUM?: {
      initialize: (options: {
        serverURL: string;
        settingURL: string;
        clientId: string;
        trackResource: boolean;
        printLog: boolean;
      }) => Promise<any>;
    };

    Netfunnel?: {
      key?: string;
      devtoolsAddListener?: (cb: (isOpen: boolean) => void) => void;
      devtoolsLaunch?: () => void;
    };
  }

  interface NetFunnelResponse {
    status: 'Success' | 'Block' | 'Close' | 'Error' | 'NetworkError';
    statusCode: number;
    key?: string;
  }
}
