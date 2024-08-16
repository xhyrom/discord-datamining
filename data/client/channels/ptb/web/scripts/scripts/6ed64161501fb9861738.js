"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44462"],
  {
    478472: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return _;
          },
        });
      var r = a(735250);
      a(470079);
      var n = a(481060),
        t = a(689938);
      function _(e) {
        let { ruleName: s, ...a } = e,
          _ = null != s ? s : t.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
        return (0, r.jsx)(n.ConfirmModal, {
          ...a,
          header: t.Z.Messages.GUILD_AUTOMOD_REMOVE_RULE_CONFIRM_TITLE,
          cancelText: t.Z.Messages.CANCEL,
          confirmText: t.Z.Messages.CONFIRM,
          children: (0, r.jsx)(n.Text, {
            variant: "text-md/normal",
            children:
              t.Z.Messages.GUILD_AUTOMOD_REMOVE_RULE_CONFIRM_DESCRIPTION.format(
                { ruleName: _ },
              ),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=6ed64161501fb9861738.js.map
