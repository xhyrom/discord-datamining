"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58469"],
  {
    528772(e, t, a) {
      a.d(t, { A: () => c });
      var n = a(17928),
        d = a(228366);
      let p = !1,
        r = !1;
      class s extends n.Ay.Store {
        static displayName = "SoundboardOverlayStore";
        get keepOpen() {
          return r;
        }
        get enabled() {
          return p;
        }
      }
      let c = new s(d.h, {
        SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
          (p = e.enabled), e.enabled && (r = e.keepOpen ?? !1);
        },
      });
    },
  },
]);
//# sourceMappingURL=58469.c68ba64e4593ba57.js.map
