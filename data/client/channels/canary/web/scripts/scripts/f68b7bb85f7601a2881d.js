"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83613"],
  {
    449675: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return i;
          },
        });
      var a = n(735250);
      n(470079);
      var r = n(481060),
        t = n(65912),
        _ = n(689938);
      function i(e) {
        let { ruleName: s, onConfirm: n, ...i } = e,
          { setEditingRule: l } = (0, t.V)(),
          u = null != s ? s : _.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
        return (0, a.jsx)(r.ConfirmModal, {
          ...i,
          header: _.Z.Messages.GUILD_AUTOMOD_WARNING_UNSAVED_CHANGES_TITLE,
          cancelText: _.Z.Messages.CANCEL,
          confirmText: _.Z.Messages.CONFIRM,
          onConfirm: () => {
            l(null), null == n || n();
          },
          children: (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            children:
              _.Z.Messages.GUILD_AUTOMOD_WARNING_UNSAVED_CHANGES_DESCRIPTION.format(
                { ruleName: u },
              ),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=f68b7bb85f7601a2881d.js.map
