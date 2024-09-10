"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74543"],
  {
    556012: function (e, n, t) {
      t.d(n, {
        c: function () {
          return C;
        },
      });
      var _ = t(481060),
        a = t(933557),
        l = t(592125),
        s = t(699516),
        r = t(594174),
        A = t(273504),
        O = t(590433),
        o = t(689938);
      let N = (e) => {
          if (e === A.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        i = (e) => {
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
            case A.jj.FLAG_TO_CHANNEL:
            case A.jj.USER_COMMUNICATION_DISABLED:
            case A.jj.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        I = (e) => {
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
              return o.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
            case A.jj.FLAG_TO_CHANNEL:
              return o.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
            case A.jj.USER_COMMUNICATION_DISABLED:
              return o.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
            case A.jj.QUARANTINE_USER:
              return o.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
          }
        },
        c = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : A.fX.KEYWORD;
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
              switch (n) {
                case A.fX.MENTION_SPAM:
                  return o.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                case A.fX.ML_SPAM:
                  return o.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                default:
                  return o.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION;
              }
            case A.jj.FLAG_TO_CHANNEL:
              return o.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
            case A.jj.USER_COMMUNICATION_DISABLED:
              return o.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
            case A.jj.QUARANTINE_USER:
              return o.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION;
          }
        },
        u = (e, n) => {
          var t, _, N;
          switch (e) {
            case A.jj.QUARANTINE_USER:
            case A.jj.BLOCK_MESSAGE:
              return null;
            case A.jj.FLAG_TO_CHANNEL: {
              let e =
                null == n
                  ? void 0
                  : null === (t = n.metadata) || void 0 === t
                    ? void 0
                    : t.channelId;
              if (null == e) return null;
              let _ = l.Z.getChannel(e);
              if (null == _) return null;
              let A = (0, a.F6)(_, r.default, s.Z);
              return o.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format(
                { channelName: A },
              );
            }
            case A.jj.USER_COMMUNICATION_DISABLED: {
              let e =
                  null !==
                    (N =
                      null == n
                        ? void 0
                        : null === (_ = n.metadata) || void 0 === _
                          ? void 0
                          : _.durationSeconds) && void 0 !== N
                    ? N
                    : 0,
                t = (0, O.L9)(e);
              if (null == t) return null;
              return o.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format(
                { duration: t },
              );
            }
          }
        },
        E = (e) => {
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
              return _.CircleXIcon;
            case A.jj.FLAG_TO_CHANNEL:
              return _.TextIcon;
            case A.jj.USER_COMMUNICATION_DISABLED:
              return _.ClockWarningIcon;
            case A.jj.QUARANTINE_USER:
              return _.ChatXIcon;
          }
        };
      function C(e, n, t) {
        var a, l, s, r;
        return i(e)
          ? {
              headerText: null !== (a = I(e)) && void 0 !== a ? a : "",
              descriptionText: null !== (l = c(e, t)) && void 0 !== l ? l : "",
              helperText: null !== (s = u(e, n)) && void 0 !== s ? s : null,
              icon: null !== (r = E(e)) && void 0 !== r ? r : _.CircleXIcon,
              isEditable: N(e),
            }
          : null;
      }
    },
    643611: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return C;
          },
        }),
        t(47120);
      var _ = t(735250),
        a = t(470079),
        l = t(442837),
        s = t(481060),
        r = t(933557),
        A = t(313201),
        O = t(592125),
        o = t(984933),
        N = t(699516),
        i = t(594174),
        I = t(556012),
        c = t(689938),
        u = t(646866);
      let E = (e) => {
        let { guildId: n, channel: t, onSelectChannel: a } = e,
          A = (0, l.Wu)(
            [o.ZP],
            () =>
              o.ZP.getChannels(n)
                [o.sH].filter((e) => {
                  let { channel: n } = e;
                  return (
                    !n.isGuildVocal() &&
                    !n.isThread() &&
                    !n.isForumLikeChannel()
                  );
                })
                .map((e) => {
                  let { channel: n } = e;
                  return n;
                }),
            [n],
          );
        return (0, _.jsx)(s.FormItem, {
          className: u.channelSelector,
          required: !0,
          children: (0, _.jsx)(s.SearchableSelect, {
            value: null == t ? void 0 : t.id,
            options: A.map((e) => ({
              value: e.id,
              label: (0, r.F6)(e, i.default, N.Z, !0),
            })),
            onChange: (e) => {
              let n = A.find((n) => n.id === e);
              a(null != n ? n : void 0);
            },
            placeholder:
              c.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER,
          }),
        });
      };
      function C(e) {
        let {
            action: n,
            triggerType: t,
            guildId: r,
            isEdit: o,
            onEditChannel: N,
            onClose: i,
            transitionState: C,
          } = e,
          S = (0, A.Dt)(),
          [L, M] = a.useState(n.metadata.channelId),
          [T, d] = a.useState(null),
          U = (0, l.e7)([O.Z], () => O.Z.getChannel(L), [L]),
          D = (0, I.c)(n.type, n, t);
        if (null == D) return null;
        let { headerText: j } = D;
        return (0, _.jsxs)(s.ModalRoot, {
          transitionState: C,
          "aria-labelledby": S,
          size: s.ModalSize.SMALL,
          children: [
            (0, _.jsxs)(s.ModalContent, {
              className: u.actionContentContainer,
              children: [
                (0, _.jsx)(s.Heading, {
                  id: S,
                  color: "header-primary",
                  variant: "heading-lg/semibold",
                  className: u.header,
                  children: j,
                }),
                (0, _.jsx)(s.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    c.Z.Messages
                      .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION,
                }),
                (0, _.jsx)(E, {
                  guildId: r,
                  channel: U,
                  onSelectChannel: (e) => {
                    if (null != e) M(e.id);
                  },
                }),
                null != T
                  ? (0, _.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: T,
                    })
                  : (0, _.jsx)(s.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children:
                        c.Z.Messages
                          .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER,
                    }),
              ],
            }),
            (0, _.jsxs)(s.ModalFooter, {
              children: [
                (0, _.jsx)(s.Button, {
                  onClick: () => {
                    if (null == L) {
                      d(
                        c.Z.Messages
                          .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL,
                      );
                      return;
                    }
                    N(L);
                  },
                  color: s.Button.Colors.BRAND,
                  size: s.Button.Sizes.SMALL,
                  children: o ? c.Z.Messages.EDIT : c.Z.Messages.SAVE,
                }),
                (0, _.jsx)(s.Button, {
                  onClick: () => {
                    i();
                  },
                  color: s.Button.Colors.TRANSPARENT,
                  look: s.Button.Looks.LINK,
                  children: c.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    646866: function (e, n, t) {
      e.exports = {
        actionContentContainer: "actionContentContainer_a16456",
        channelSelector: "channelSelector_a16456",
        header: "header_a16456",
      };
    },
  },
]);
//# sourceMappingURL=e9650552018cc57ec0ed.js.map
