export { }; // 이 줄이 있어야 모듈로 인식돼서 중복 오류 방지됨

declare global {
  interface Window {
    STC_EUM?: {
      initialize: (options: {
        serverURL: string;
        settingURL: string;
        clientId: string;
        trackResource: boolean;
        printLog: boolean;
      }) => Promise<any>;
    };

    nfStart?: (
      options: { projectKey: string; segmentKey: string },
      callback: (res: {
        status: 'Success' | 'Close' | 'Block' | 'Error' | 'NetworkError';
        statusCode: number;
        key?: string;
      }) => void
    ) => void;
  }
}
