"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24478"],
  {
    319481: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return M;
          },
        });
      var r = s(735250);
      s(470079);
      var t = s(481060),
        E = s(689938);
      function M(e) {
        let { onConfirm: n, ...s } = e;
        return (0, r.jsx)(t.ConfirmModal, {
          header:
            E.Z.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_TITLE,
          confirmText: E.Z.Messages.OK,
          cancelText: E.Z.Messages.CANCEL,
          confirmButtonColor: t.Button.Colors.BRAND,
          onConfirm: n,
          ...s,
          children: (0, r.jsx)(t.Text, {
            variant: "text-md/normal",
            children:
              E.Z.Messages
                .MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_DESCRIPTION,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=6a7048c4192fdec8150a.js.map
