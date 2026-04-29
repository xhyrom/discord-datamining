"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98357"],
  {
    151476(e, a, s) {
      s.d(a, { A: () => c });
      var i = s(735438),
        t = s.n(i),
        d = s(17928),
        r = s(51760),
        n = s(731854);
      function c() {
        let { enabled: e, cameraUnavailable: a } = (0, d.cf)([r.Ay], () => {
          let e = t()(r.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
          return {
            enabled: r.Ay.isVideoEnabled(),
            cameraUnavailable: e || !r.Ay.supports(n.O5.VIDEO),
          };
        });
        return { enabled: e, cameraUnavailable: a };
      }
    },
  },
]);
//# sourceMappingURL=98357.10c7281f39565d22.js.map
