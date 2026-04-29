"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25486"],
  {
    474397(t, e, n) {
      n.d(e, { A: () => l });
      var o = n(627968),
        d = n(192308),
        i = n(531685),
        s = n(723702),
        a = n(19575),
        c = n(267102),
        u = n(652215);
      function l() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : u.BRT.APP,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          l = t ?? (0, c.zd)();
        if (l !== u.BRT.APP && null != l) {
          if (i.A.isFocused()) return;
          e
            ? s.isPlatformEmbedded
              ? a.Ay.focus()
              : window.focus()
            : (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : u.BRT.POPOUT;
                t !== u.BRT.APP &&
                  (0, d.openModalLazy)(
                    async () => {
                      let { default: e } = await n
                        .e("20570")
                        .then(n.bind(n, 368033));
                      return (n) => (0, o.jsx)(e, { ...n, contextKey: t });
                    },
                    { contextKey: (0, d.modalContextFromAppContext)(t) },
                  );
              })(t);
        }
      }
    },
  },
]);
//# sourceMappingURL=25486.26a5a273dcb4cf25.js.map
