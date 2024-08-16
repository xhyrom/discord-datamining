"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34999"],
  {
    396473: function (n, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var e = t(735250);
      t(470079);
      var o = t(481060),
        s = t(689938);
      function a(n) {
        let { title: r, subtitle: t, onConfirm: a, ...i } = n;
        return (0, e.jsx)(o.ConfirmModal, {
          header: r,
          confirmText: s.Z.Messages.E2EE_ENABLE_PERSISTENT_KEY_CONFIRM,
          cancelText: s.Z.Messages.CANCEL,
          onConfirm: a,
          confirmButtonColor: o.Button.Colors.BRAND,
          ...i,
          children: (0, e.jsx)(o.Text, {
            variant: "text-md/normal",
            children: t,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=57c6efec4b29c9e6e689.js.map
