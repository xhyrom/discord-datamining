"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68747"],
  {
    744373: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return m;
          },
        });
      var a = e(200651);
      e(192379);
      var i = e(399606),
        r = e(481060),
        o = e(843931),
        l = e(1596),
        c = e(594174),
        s = e(51144),
        d = e(388032);
      function m(t) {
        let {
            transitionState: n,
            onClose: e,
            userId: m,
            onCancel: u,
            confirmBlock: f,
          } = t,
          p = (0, i.e7)([c.default], () => c.default.getUser(m)),
          h = s.ZP.useName(p);
        return (0, a.jsx)(r.ConfirmModal, {
          header: d.intl.formatToPlainString(d.t.x5pOn5, { name: h }),
          confirmText: d.intl.string(d.t.l4EmaW),
          cancelText: d.intl.string(d.t["ETE/oK"]),
          onConfirm: f,
          onClose: e,
          onCancel: u,
          transitionState: n,
          children: (0, o.c)({ location: "confirm_block_modal" })
            ? (0, a.jsx)(l.Z, {})
            : (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                children: d.intl.format(d.t.pegItL, { name: h }),
              }),
        });
      }
    },
  },
]);
//# sourceMappingURL=31d33143a4f1f2d8b998.js.map
