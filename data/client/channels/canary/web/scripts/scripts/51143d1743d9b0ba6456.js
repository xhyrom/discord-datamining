"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74543"],
  {
    556012: function (t, n, e) {
      e.d(n, {
        c: function () {
          return E;
        },
      });
      var l = e(481060),
        r = e(933557),
        i = e(592125),
        a = e(699516),
        o = e(594174),
        s = e(273504),
        c = e(590433),
        u = e(388032);
      let d = (t) => {
          if (t === s.jj.QUARANTINE_USER) return !1;
          return !0;
        },
        j = (t) => {
          switch (t) {
            case s.jj.BLOCK_MESSAGE:
            case s.jj.FLAG_TO_CHANNEL:
            case s.jj.USER_COMMUNICATION_DISABLED:
            case s.jj.QUARANTINE_USER:
              return !0;
            default:
              return !1;
          }
        },
        A = (t) => {
          switch (t) {
            case s.jj.BLOCK_MESSAGE:
              return u.intl.string(u.t.d1ab8v);
            case s.jj.FLAG_TO_CHANNEL:
              return u.intl.string(u.t["Y+Vmvb"]);
            case s.jj.USER_COMMUNICATION_DISABLED:
              return u.intl.string(u.t.Xz2njI);
            case s.jj.QUARANTINE_USER:
              return u.intl.string(u.t.NPO8eX);
          }
        },
        h = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.fX.KEYWORD;
          switch (t) {
            case s.jj.BLOCK_MESSAGE:
              switch (n) {
                case s.fX.MENTION_SPAM:
                  return u.intl.string(u.t["8hdId3"]);
                case s.fX.ML_SPAM:
                  return u.intl.string(u.t.tLQYs7);
                default:
                  return u.intl.string(u.t.xAAocn);
              }
            case s.jj.FLAG_TO_CHANNEL:
              return u.intl.string(u.t.BHAXfX);
            case s.jj.USER_COMMUNICATION_DISABLED:
              return u.intl.string(u.t["bNK+gI"]);
            case s.jj.QUARANTINE_USER:
              return u.intl.string(u.t["/7nL5e"]);
          }
        },
        N = (t, n) => {
          var e, l, d;
          switch (t) {
            case s.jj.QUARANTINE_USER:
            case s.jj.BLOCK_MESSAGE:
              return null;
            case s.jj.FLAG_TO_CHANNEL: {
              let t =
                null == n
                  ? void 0
                  : null === (e = n.metadata) || void 0 === e
                    ? void 0
                    : e.channelId;
              if (null == t) return null;
              let l = i.Z.getChannel(t);
              if (null == l) return null;
              let s = (0, r.F6)(l, o.default, a.Z);
              return u.intl.format(u.t.xQXnkJ, { channelName: s });
            }
            case s.jj.USER_COMMUNICATION_DISABLED: {
              let t =
                  null !==
                    (d =
                      null == n
                        ? void 0
                        : null === (l = n.metadata) || void 0 === l
                          ? void 0
                          : l.durationSeconds) && void 0 !== d
                    ? d
                    : 0,
                e = (0, c.L9)(t);
              if (null == e) return null;
              return u.intl.format(u.t.AFmbfX, { duration: e });
            }
          }
        },
        C = (t) => {
          switch (t) {
            case s.jj.BLOCK_MESSAGE:
              return l.CircleXIcon;
            case s.jj.FLAG_TO_CHANNEL:
              return l.TextIcon;
            case s.jj.USER_COMMUNICATION_DISABLED:
              return l.ClockWarningIcon;
            case s.jj.QUARANTINE_USER:
              return l.ChatXIcon;
          }
        };
      function E(t, n, e) {
        var r, i, a, o;
        return j(t)
          ? {
              headerText: null !== (r = A(t)) && void 0 !== r ? r : "",
              descriptionText: null !== (i = h(t, e)) && void 0 !== i ? i : "",
              helperText: null !== (a = N(t, n)) && void 0 !== a ? a : null,
              icon: null !== (o = C(t)) && void 0 !== o ? o : l.CircleXIcon,
              isEditable: d(t),
            }
          : null;
      }
    },
    643611: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return E;
          },
        }),
        e(47120);
      var l = e(200651),
        r = e(192379),
        i = e(442837),
        a = e(481060),
        o = e(933557),
        s = e(313201),
        c = e(592125),
        u = e(984933),
        d = e(699516),
        j = e(594174),
        A = e(556012),
        h = e(388032),
        N = e(207028);
      let C = (t) => {
        let { guildId: n, channel: e, onSelectChannel: r } = t,
          s = (0, i.Wu)(
            [u.ZP],
            () =>
              u.ZP.getChannels(n)
                [u.sH].filter((t) => {
                  let { channel: n } = t;
                  return (
                    !n.isGuildVocal() &&
                    !n.isThread() &&
                    !n.isForumLikeChannel()
                  );
                })
                .map((t) => {
                  let { channel: n } = t;
                  return n;
                }),
            [n],
          );
        return (0, l.jsx)(a.FormItem, {
          className: N.channelSelector,
          required: !0,
          children: (0, l.jsx)(a.SearchableSelect, {
            value: null == e ? void 0 : e.id,
            options: s.map((t) => ({
              value: t.id,
              label: (0, o.F6)(t, j.default, d.Z, !0),
            })),
            onChange: (t) => {
              let n = s.find((n) => n.id === t);
              r(null != n ? n : void 0);
            },
            placeholder: h.intl.string(h.t["N+T69/"]),
          }),
        });
      };
      function E(t) {
        let {
            action: n,
            triggerType: e,
            guildId: o,
            isEdit: u,
            onEditChannel: d,
            onClose: j,
            transitionState: E,
          } = t,
          S = (0, s.Dt)(),
          [_, I] = r.useState(n.metadata.channelId),
          [L, f] = r.useState(null),
          g = (0, i.e7)([c.Z], () => c.Z.getChannel(_), [_]),
          T = (0, A.c)(n.type, n, e);
        if (null == T) return null;
        let { headerText: x } = T;
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: E,
          "aria-labelledby": S,
          size: a.ModalSize.SMALL,
          children: [
            (0, l.jsxs)(a.ModalContent, {
              className: N.actionContentContainer,
              children: [
                (0, l.jsx)(a.Heading, {
                  id: S,
                  color: "header-primary",
                  variant: "heading-lg/semibold",
                  className: N.header,
                  children: x,
                }),
                (0, l.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: h.intl.string(h.t["z/ZF2t"]),
                }),
                (0, l.jsx)(C, {
                  guildId: o,
                  channel: g,
                  onSelectChannel: (t) => {
                    if (null != t) I(t.id);
                  },
                }),
                null != L
                  ? (0, l.jsx)(a.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      children: L,
                    })
                  : (0, l.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: h.intl.string(h.t["ric+5u"]),
                    }),
              ],
            }),
            (0, l.jsxs)(a.ModalFooter, {
              children: [
                (0, l.jsx)(a.Button, {
                  onClick: () => {
                    if (null == _) {
                      f(h.intl.string(h.t.lM1NLi));
                      return;
                    }
                    d(_);
                  },
                  color: a.Button.Colors.BRAND,
                  size: a.Button.Sizes.SMALL,
                  children: u
                    ? h.intl.string(h.t.bt75u7)
                    : h.intl.string(h.t.R3BPHx),
                }),
                (0, l.jsx)(a.Button, {
                  onClick: () => {
                    j();
                  },
                  color: a.Button.Colors.TRANSPARENT,
                  look: a.Button.Looks.LINK,
                  children: h.intl.string(h.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    207028: function (t, n, e) {
      t.exports = {
        actionContentContainer: "actionContentContainer_a16456",
        channelSelector: "channelSelector_a16456",
        header: "header_a16456",
      };
    },
  },
]);
//# sourceMappingURL=51143d1743d9b0ba6456.js.map
