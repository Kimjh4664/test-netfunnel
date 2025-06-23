'use client';

import Script from 'next/script';

export default function NetfunnelScripts() {
  return (
    <>
      {/* NetFUNNEL Agent */}
      <Script
        id="netfunnel-agent"
        strategy="beforeInteractive"
        src="https://agent-lib.stclab.com/agents/client/javascript/netfunnel-javascript-agent.js"
        data-nf-server-url="https://daejun-1335.netfunnel.stclab.com"
        data-nf-setting-url="https://nf-setting-bucket.stclab.com/daejun-1335.netfunnel/nf-setting.json"
        data-nf-vwr-page-url="https://agent-lib.stclab.com/vwr-page/daejun-1335.netfunnel/index.html"
        data-nf-retry-count="0"
        data-nf-network-timeout="3000"
      />

      {/* NetFUNNEL EUM */}
      <Script
        id="netfunnel-eum"
        src="https://agent-lib.stclab.com/agents/eum/browser/eum-browser.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.STC_EUM?.initialize({
            serverURL: 'https://eum-receiver-v3.stclab.com/eum_data',
            settingURL: 'https://nf-setting-bucket.stclab.com/daejun-1335.netfunnel/nf-setting.json',
            clientId: 'TN250623-8D5F5C95',
            trackResource: true,
            printLog: false,
          });
        }}
      />
    </>
  );
}
