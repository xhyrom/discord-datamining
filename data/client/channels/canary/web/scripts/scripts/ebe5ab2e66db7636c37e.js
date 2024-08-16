"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6368"],
  {
    987999: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return c;
          },
        });
      var n = a(735250);
      a(470079);
      var I = a(442837),
        t = a(481060),
        i = a(239091),
        r = a(100527),
        o = a(970606),
        E = a(299206),
        l = a(693546),
        M = a(246364),
        u = a(937111),
        d = a(703656),
        _ = a(914010),
        C = a(981631),
        A = a(689938);
      function c(e) {
        let { guild: s, onSelect: a } = e,
          c = s.id,
          N = (0, E.Z)({ id: s.id, label: A.Z.Messages.COPY_ID_GUILD }),
          L = (0, I.e7)([u.Z], () => u.Z.getRequest(c)),
          R = () => {
            l.Z.removeGuildJoinRequest(c),
              _.Z.getGuildId() === c && (0, d.uL)(C.Z5c.ME);
          };
        return (0, n.jsxs)(t.Menu, {
          navId: "join-request-guild-context",
          onClose: i.Zy,
          "aria-label": A.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
          onSelect: a,
          children: [
            (null == L ? void 0 : L.applicationStatus) === M.wB.REJECTED &&
              (0, n.jsx)(t.MenuItem, {
                id: "reapply",
                label:
                  A.Z.Messages
                    .MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY,
                action: () => {
                  s.hasFeature(C.oNc.CLAN) &&
                    (0, o.Vr)({ guildId: c, source: r.Z.CLAN_REAPPLY }),
                    l.Z.resetGuildJoinRequest(c).then(() => {
                      (0, d.uL)(C.Z5c.GUILD_MEMBER_VERIFICATION(c));
                    });
                },
                color: "default",
              }),
            (0, n.jsx)(t.MenuItem, {
              id: "withdraw",
              label: A.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
              action: () => {
                (0, t.openModal)((e) =>
                  (0, n.jsx)(t.ConfirmModal, {
                    header:
                      A.Z.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
                    confirmText:
                      A.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                    cancelText: A.Z.Messages.CANCEL,
                    onConfirm: R,
                    ...e,
                    children: (0, n.jsx)(t.Text, {
                      variant: "text-md/normal",
                      children:
                        A.Z.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format(
                          { name: s.name },
                        ),
                    }),
                  }),
                );
              },
              color: "danger",
            }),
            (0, n.jsx)(t.MenuGroup, { children: N }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=ebe5ab2e66db7636c37e.js.map
