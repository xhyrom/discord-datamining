"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68747"],
  {
    744373: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return p;
          },
        });
      var a = e(200651);
      e(192379);
      var i = e(990547),
        r = e(399606),
        o = e(481060),
        s = e(843931),
        l = e(1596),
        c = e(594174),
        m = e(626135),
        d = e(51144),
        u = e(981631),
        f = e(388032);
      function p(t) {
        let {
            transitionState: n,
            onClose: e,
            userId: p,
            onCancel: C,
            confirmBlock: x,
          } = t,
          h = (0, r.e7)([c.default], () => c.default.getUser(p)),
          _ = d.ZP.useName(h);
        return (0, a.jsx)(o.ConfirmModal, {
          header: f.intl.formatToPlainString(f.t.x5pOn5, { name: _ }),
          confirmText: f.intl.string(f.t.l4EmaW),
          cancelText: f.intl.string(f.t["ETE/oK"]),
          onConfirm: () => {
            x(), m.default.track(u.rMx.BLOCK_USER_CONFIRMED);
          },
          onClose: e,
          onCancel: C,
          transitionState: n,
          impression: {
            impressionName: i.ImpressionNames.BLOCK_USER_CONFIRMATION,
          },
          children: (0, s.cC)({ location: "confirm_block_modal" })
            ? (0, a.jsx)(l.Z, {})
            : (0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                children: f.intl.format(f.t.pegItL, { name: _ }),
              }),
        });
      }
    },
  },
]);
//# sourceMappingURL=e5cf3257b5ece989a0f9.js.map
