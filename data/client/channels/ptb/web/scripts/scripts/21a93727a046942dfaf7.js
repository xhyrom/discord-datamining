"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56496"],
  {
    113886: function (e, a, s) {
      s.r(a), s(47120);
      var t = s(735250),
        n = s(470079),
        E = s(481060),
        r = s(693546),
        u = s(246364),
        c = s(689938);
      a.default = (e) => {
        let {
            guildId: a,
            userId: s,
            guildJoinRequestId: i,
            onConfirm: I,
            onError: T,
            modalProps: _,
          } = e,
          [l, C] = n.useState(),
          d = async () => {
            try {
              await r.Z.updateGuildJoinRequest(a, s, i, u.wB.REJECTED, l),
                null == I || I();
            } catch (e) {
              null == T || T();
            }
          };
        return (0, t.jsx)(E.ConfirmModal, {
          header:
            c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_MODAL_TITLE,
          cancelText: c.Z.Messages.CANCEL,
          confirmText:
            c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
          onConfirm: d,
          ..._,
          children: (0, t.jsx)(E.TextArea, {
            value: l,
            onChange: C,
            maxLength: 160,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=21a93727a046942dfaf7.js.map
