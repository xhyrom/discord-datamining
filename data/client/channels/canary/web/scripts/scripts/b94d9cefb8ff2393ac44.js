"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70061"],
  {
    764998: function (t, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return o;
          },
        });
      var a = r(200651);
      r(192379);
      var e = r(481060),
        i = r(388032);
      function o(t) {
        let { onConfirmUninstall: n, game: r, ...o } = t;
        return (0, a.jsx)(e.ConfirmModal, {
          header: i.intl.formatToPlainString(i.t["f/BAbG"], {
            gameName: r.name,
          }),
          confirmText: i.intl.string(i.t.RVy6Vl),
          cancelText: i.intl.string(i.t["96dwMT"]),
          onConfirm: n,
          ...o,
          children: (0, a.jsx)(e.Text, {
            variant: "text-md/normal",
            children: i.intl.format(i.t["FP+NKS"], { gameName: r.name }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=b94d9cefb8ff2393ac44.js.map
