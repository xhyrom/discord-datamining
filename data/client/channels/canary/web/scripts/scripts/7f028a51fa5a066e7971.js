"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88643"],
  {
    466080: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return a;
          },
        });
      var t = s(735250);
      s(470079);
      var r = s(481060),
        o = s(689938);
      function a(e) {
        let { onConfirm: n, onBack: s, ...a } = e;
        return (0, t.jsx)(r.ConfirmModal, {
          header: o.Z.Messages.MESSAGE_FORWARD_STAFF_NON_STAFF_TITLE,
          confirmText: o.Z.Messages.MESSAGE_FORWARD_STAFF_NON_STAFF_CONFIRM,
          cancelText: o.Z.Messages.BACK,
          confirmButtonColor: r.Button.Colors.BRAND,
          onConfirm: n,
          onCancel: s,
          ...a,
          children: (0, t.jsx)(r.Text, {
            variant: "text-md/medium",
            children: o.Z.Messages.MESSAGE_FORWARD_STAFF_NON_STAFF_CONTENT,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7f028a51fa5a066e7971.js.map
