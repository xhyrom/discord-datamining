"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29852"],
  {
    436620(A, Y, e) {
      e.d(Y, { J: () => E });
      var t,
        E =
          (((t = {}).MY_GAMES = "MY_GAMES"),
          (t.OVERLAY = "OVERLAY"),
          (t.ACTIVITY_PRIVACY = "ACTIVITY_PRIVACY"),
          t);
    },
    866903(A, Y, e) {
      e.d(Y, { A: () => I });
      var t = e(780964),
        E = e(858897),
        s = e(436620);
      function I(A) {
        let Y =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, E.openUserSettings)(
          (function (A) {
            switch (A) {
              case s.J.MY_GAMES:
                return t.X.REGISTERED_GAMES_PANEL;
              case s.J.OVERLAY:
                return t.X.OVERLAY_PANEL;
              case s.J.ACTIVITY_PRIVACY:
                return t.X.ACTIVITY_PRIVACY_PANEL;
            }
          })(A),
          Y,
        );
      }
    },
  },
]);
//# sourceMappingURL=29852.2f4e74d0017437f0.js.map
