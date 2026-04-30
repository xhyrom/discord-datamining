"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32326"],
  {
    614269(e, t, n) {
      n.d(t, { u: () => i });
      class i {
        static isHlsUrl(e) {
          return null != e && e.split("?")[0].endsWith(".m3u8");
        }
      }
    },
    829097(e, t, n) {
      n.d(t, { _: () => a });
      let i = (0, n(945810).mj)({
        name: "2025-09-video-qoe-metrics-tracking",
        kind: "user",
        defaultConfig: { externalAnalyticsEnabled: !1 },
        variations: {
          0: { externalAnalyticsEnabled: !1 },
          1: { externalAnalyticsEnabled: !0 },
        },
      });
      function a(e) {
        let { location: t } = e;
        return i.getConfig({ location: t });
      }
    },
  },
]);
//# sourceMappingURL=32326.3fc4782064690786.js.map
