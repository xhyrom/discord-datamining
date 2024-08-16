"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70061"],
  {
    764998: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return T;
          },
        });
      var s = n(735250);
      n(470079);
      var r = n(481060),
        t = n(689938);
      function T(e) {
        let { onConfirmUninstall: a, game: n, ...T } = e;
        return (0, s.jsx)(r.ConfirmModal, {
          header: t.Z.Messages.APPLICATION_UNINSTALL_PROMPT_TITLE.format({
            gameName: n.name,
          }),
          confirmText: t.Z.Messages.APPLICATION_UNINSTALL_PROMPT_CONFIRM,
          cancelText: t.Z.Messages.APPLICATION_UNINSTALL_PROMPT_CANCEL,
          onConfirm: a,
          ...T,
          children: (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            children: t.Z.Messages.APPLICATION_UNINSTALL_PROMPT_BODY.format({
              gameName: n.name,
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=25fd6e5cb14424ad9258.js.map
