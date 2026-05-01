"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90088"],
  {
    742459(e, t, s) {
      s.d(t, { A: () => d }), s(321073);
      var i = s(284009),
        p = s.n(i),
        r = s(656470),
        u = s.n(r),
        h = s(731854);
      let n = [h.fS.WINDOW, h.fS.SCREEN];
      function d(e, t, s) {
        let i = window.DiscordNative;
        p()(null != i, "Can't get desktop sources outside of native app"),
          (t = t?.filter((e) => n.includes(e)) ?? n),
          (s = s ?? { width: 150, height: 150 });
        let r = [];
        return (
          t.includes(h.fS.SCREEN) &&
            e.supports(h.O5.SCREEN_PREVIEWS) &&
            (r.push(e.getScreenPreviews(s.width, s.height)),
            (t = t.filter((e) => e !== h.fS.SCREEN))),
          t.includes(h.fS.WINDOW) &&
            e.supports(h.O5.WINDOW_PREVIEWS) &&
            (r.push(e.getWindowPreviews(s.width, s.height)),
            (t = t.filter((e) => e !== h.fS.WINDOW))),
          0 !== t.length &&
            r.push(
              i.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: s,
              }),
            ),
          Promise.all(r).then((e) => u()(e))
        );
      }
    },
  },
]);
//# sourceMappingURL=90088.d8bd3e4ed9ea1159.js.map
