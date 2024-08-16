"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68747"],
  {
    744373: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return d;
          },
        });
      var t = n(735250);
      n(470079);
      var s = n(399606),
        r = n(481060),
        o = n(594174),
        i = n(51144),
        c = n(689938);
      function d(e) {
        let {
            transitionState: a,
            onClose: n,
            userId: d,
            onCancel: u,
            confirmBlock: C,
          } = e,
          f = (0, s.e7)([o.default], () => o.default.getUser(d)),
          l = i.ZP.useName(f);
        return (0, t.jsx)(r.ConfirmModal, {
          header: c.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({ name: l }),
          confirmText: c.Z.Messages.BLOCK,
          cancelText: c.Z.Messages.CANCEL,
          onConfirm: C,
          onClose: n,
          onCancel: u,
          transitionState: a,
          children: (0, t.jsx)(r.Text, {
            variant: "text-md/normal",
            children: c.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({ name: l }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=3ba8912764341c3d5aeb.js.map
