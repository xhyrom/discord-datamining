"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68747"],
  {
    744373: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return u;
          },
        });
      var t = n(200651);
      n(192379);
      var s = n(399606),
        r = n(481060),
        o = n(843931),
        c = n(1596),
        i = n(594174),
        d = n(51144),
        l = n(689938);
      function u(e) {
        let {
            transitionState: a,
            onClose: n,
            userId: u,
            onCancel: C,
            confirmBlock: f,
          } = e,
          m = (0, s.e7)([i.default], () => i.default.getUser(u)),
          _ = d.ZP.useName(m);
        return (0, t.jsx)(r.ConfirmModal, {
          header: l.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({ name: _ }),
          confirmText: l.Z.Messages.BLOCK,
          cancelText: l.Z.Messages.CANCEL,
          onConfirm: f,
          onClose: n,
          onCancel: C,
          transitionState: a,
          children: (0, o.c)({ location: "confirm_block_modal" })
            ? (0, t.jsx)(c.Z, {})
            : (0, t.jsx)(r.Text, {
                variant: "text-md/normal",
                children: l.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
                  name: _,
                }),
              }),
        });
      }
    },
  },
]);
//# sourceMappingURL=60d4be0ff41031cf467d.js.map
