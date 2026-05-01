"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42204"],
  {
    354583(e, n, t) {
      t.d(n, { A: () => l });
      var i = t(17928),
        u = t(734057),
        r = t(309010);
      function l() {
        return (0, i.bG)([r.A, u.A], () => {
          let e = r.A.getVoiceChannelId();
          if (null != e) {
            let n = u.A.getChannel(e);
            if (n?.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
  },
]);
//# sourceMappingURL=42204.a9530b7e2f2863d1.js.map
