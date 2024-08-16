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
            onConfirm: i,
            onError: I,
            modalProps: T,
          } = e,
          [_, l] = n.useState(),
          C = async () => {
            try {
              await r.Z.updateGuildJoinRequest(a, s, u.wB.REJECTED, _),
                null == i || i();
            } catch (e) {
              null == I || I();
            }
          };
        return (0, t.jsx)(E.ConfirmModal, {
          header:
            c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_MODAL_TITLE,
          cancelText: c.Z.Messages.CANCEL,
          confirmText:
            c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
          onConfirm: C,
          ...T,
          children: (0, t.jsx)(E.TextArea, {
            value: _,
            onChange: l,
            maxLength: 160,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=30ec5cea5128c59f0c16.js.map
