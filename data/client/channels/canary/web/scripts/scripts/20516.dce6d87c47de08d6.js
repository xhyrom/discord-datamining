"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20516"],
  {
    431804(a, e, n) {
      n.d(e, { r: () => t, y: () => s });
      var o,
        r,
        t =
          (((o = {}).PLAY = "play"),
          (o.PAUSE = "pause"),
          (o.BACK_TO_CONVERSATION = "back_to_conversation"),
          o),
        s =
          (((r = {}).INAPPROPRIATE_CONVERSATION = "inappropriate_conversation"),
          (r.KEYBIND = "keybind"),
          r);
    },
    674272(a, e, n) {
      n.d(e, { A: () => s });
      var o = n(627968);
      n(64700);
      var r = n(192308),
        t = n(892491);
      function s(a) {
        let { source: e, onClose: s } = a;
        (0, r.openModalLazy)(
          async () => {
            let { default: a } = await Promise.all([
              n.e("68011"),
              n.e("98199"),
              n.e("92223"),
              n.e("61376"),
            ]).then(n.bind(n, 999235));
            return (n) => (0, o.jsx)(a, { ...n, source: e });
          },
          { onCloseCallback: s, backdropStyle: t.F.BLUR },
        );
      }
    },
  },
]);
//# sourceMappingURL=20516.dce6d87c47de08d6.js.map
