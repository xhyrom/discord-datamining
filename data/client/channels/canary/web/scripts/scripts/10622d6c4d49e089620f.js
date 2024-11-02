"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83613"],
  {
    449675: function (n, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var i = r(200651);
      r(192379);
      var l = r(481060),
        e = r(65912),
        a = r(388032);
      function c(n) {
        let { ruleName: t, onConfirm: r, ...c } = n,
          { setEditingRule: o } = (0, e.V)(),
          u = null != t ? t : a.intl.string(a.t.ffR2cH);
        return (0, i.jsx)(l.ConfirmModal, {
          ...c,
          header: a.intl.string(a.t.kknTmJ),
          cancelText: a.intl.string(a.t["ETE/oK"]),
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          onConfirm: () => {
            o(null), null == r || r();
          },
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.intl.format(a.t["ff/gx8"], { ruleName: u }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=10622d6c4d49e089620f.js.map
