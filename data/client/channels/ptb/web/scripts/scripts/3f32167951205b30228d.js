"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92575"],
  {
    601787: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return t;
          },
        });
      var _ = a(200651);
      a(192379);
      var r = a(481060),
        n = a(689938);
      function t(e) {
        let { ruleName: s, keyword: a, ...t } = e,
          O = null != s ? s : n.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
        return (0, _.jsx)(r.ConfirmModal, {
          ...t,
          header: n.Z.Messages.GUILD_AUTOMOD_ADD_KEYWORD_TO_RULE_CONFIRM_TITLE,
          cancelText: n.Z.Messages.CANCEL,
          confirmText: n.Z.Messages.CONFIRM,
          children: (0, _.jsx)(r.Text, {
            variant: "text-md/normal",
            children:
              n.Z.Messages.GUILD_AUTOMOD_ADD_KEYWORD_TO_RULE_CONFIRM_DESCRIPTION.format(
                { ruleName: O, keyword: a },
              ),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=3f32167951205b30228d.js.map
