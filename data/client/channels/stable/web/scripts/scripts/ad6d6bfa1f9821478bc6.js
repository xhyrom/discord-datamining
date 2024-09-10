"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78273"],
  {
    556012: function (e, n, t) {
      t.d(n, {
        c: function () {
          return E;
        },
      });
      var a = t(481060),
        r = t(933557),
        _ = t(592125),
        s = t(699516),
        l = t(594174),
        A = t(273504),
        o = t(590433),
        I = t(689938);
      let O = (e) => {
          if (e === A.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        u = (e) => {
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
        c = (e) => {
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
              return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
            case A.jj.FLAG_TO_CHANNEL:
              return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
            case A.jj.USER_COMMUNICATION_DISABLED:
              return I.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
            case A.jj.QUARANTINE_USER:
              return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
          }
        },
        i = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : A.fX.KEYWORD;
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
              switch (n) {
                case A.fX.MENTION_SPAM:
                  return I.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                case A.fX.ML_SPAM:
                  return I.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                default:
                  return I.Z.Messages
                    .GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION;
              }
            case A.jj.FLAG_TO_CHANNEL:
              return I.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
            case A.jj.USER_COMMUNICATION_DISABLED:
              return I.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
            case A.jj.QUARANTINE_USER:
              return I.Z.Messages
                .GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION;
          }
        },
        S = (e, n) => {
          var t, a, O;
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
              let a = _.Z.getChannel(e);
              if (null == a) return null;
              let A = (0, r.F6)(a, l.default, s.Z);
              return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format(
                { channelName: A },
              );
            }
            case A.jj.USER_COMMUNICATION_DISABLED: {
              let e =
                  null !==
                    (O =
                      null == n
                        ? void 0
                        : null === (a = n.metadata) || void 0 === a
                          ? void 0
                          : a.durationSeconds) && void 0 !== O
                    ? O
                    : 0,
                t = (0, o.L9)(e);
              if (null == t) return null;
              return I.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format(
                { duration: t },
              );
            }
          }
        },
        N = (e) => {
          switch (e) {
            case A.jj.BLOCK_MESSAGE:
              return a.CircleXIcon;
            case A.jj.FLAG_TO_CHANNEL:
              return a.TextIcon;
            case A.jj.USER_COMMUNICATION_DISABLED:
              return a.ClockWarningIcon;
            case A.jj.QUARANTINE_USER:
              return a.ChatXIcon;
          }
        };
      function E(e, n, t) {
        var r, _, s, l;
        return u(e)
          ? {
              headerText: null !== (r = c(e)) && void 0 !== r ? r : "",
              descriptionText: null !== (_ = i(e, t)) && void 0 !== _ ? _ : "",
              helperText: null !== (s = S(e, n)) && void 0 !== s ? s : null,
              icon: null !== (l = N(e)) && void 0 !== l ? l : a.CircleXIcon,
              isEditable: O(e),
            }
          : null;
      }
    },
    41767: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        _ = t(481060),
        s = t(313201),
        l = t(556012),
        A = t(590433),
        o = t(689938),
        I = t(531534);
      let O = (e) => {
        var n;
        let { duration: t, onSelectDuration: r } = e,
          s = (0, A.tr)(),
          l = s.find((e) => e.value === t);
        return (0, a.jsx)(_.FormItem, {
          className: I.durationSelector,
          required: !0,
          children: (0, a.jsx)(_.SearchableSelect, {
            value:
              null !== (n = null == l ? void 0 : l.value) && void 0 !== n
                ? n
                : A.UK.DURATION_60_SEC,
            options: s,
            onChange: (e) => {
              let n = s.find((n) => n.value === e);
              null != n && r(n.value);
            },
            placeholder:
              o.Z.Messages
                .GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER,
          }),
        });
      };
      function u(e) {
        let {
            action: n,
            triggerType: t,
            isEdit: u,
            onUpdateDuration: c,
            onClose: i,
            transitionState: S,
          } = e,
          N = (0, s.Dt)(),
          [E, C] = r.useState(() =>
            null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0
              ? n.metadata.durationSeconds
              : A.UK.DURATION_60_SEC,
          ),
          M = (0, l.c)(n.type, n, t);
        if (null == M) return null;
        let { headerText: d } = M;
        return (0, a.jsxs)(_.ModalRoot, {
          transitionState: S,
          "aria-labelledby": N,
          size: _.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(_.ModalContent, {
              className: I.actionContentContainer,
              children: [
                (0, a.jsx)(_.Heading, {
                  id: N,
                  color: "header-primary",
                  variant: "heading-lg/semibold",
                  className: I.header,
                  children: d,
                }),
                (0, a.jsx)(_.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children:
                    o.Z.Messages
                      .GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION,
                }),
                (0, a.jsx)(O, {
                  duration: E,
                  onSelectDuration: (e) => {
                    C(e);
                  },
                }),
              ],
            }),
            (0, a.jsxs)(_.ModalFooter, {
              children: [
                (0, a.jsx)(_.Button, {
                  onClick: () => {
                    c(E);
                  },
                  color: _.Button.Colors.BRAND,
                  size: _.Button.Sizes.SMALL,
                  children: u ? o.Z.Messages.EDIT : o.Z.Messages.SAVE,
                }),
                (0, a.jsx)(_.Button, {
                  onClick: () => {
                    i();
                  },
                  color: _.Button.Colors.TRANSPARENT,
                  look: _.Button.Looks.LINK,
                  children: o.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    531534: function (e, n, t) {
      e.exports = {
        actionContentContainer: "actionContentContainer_e7c5e0",
        durationSelector: "durationSelector_e7c5e0",
        header: "header_e7c5e0",
      };
    },
  },
]);
//# sourceMappingURL=ad6d6bfa1f9821478bc6.js.map
