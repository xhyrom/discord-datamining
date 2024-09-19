"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44400"],
  {
    852860: function (e, n, t) {
      t(47120);
      var l = t(735250),
        s = t(470079),
        o = t(526629),
        i = t(692547),
        a = t(481060),
        r = t(585483),
        d = t(981631),
        c = t(689938),
        u = t(147768);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: _,
            submitting: E,
            onReset: x,
            onSave: I,
            onSaveText: C,
            onResetText: N,
            onSaveButtonColor: h,
            disabled: T,
            saveButtonTooltip: S,
          } = e,
          A = s.useRef(null),
          [{ spring: g }, M] = (0, a.useSpring)(() => ({ spring: 0 }));
        s.useEffect(() => {
          function e() {
            M({ spring: 1, config: o.config.gentle }),
              M({ spring: 0, config: o.config.gentle, delay: 1e3 });
          }
          return (
            r.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e),
            () => {
              r.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [M]);
        let D = g.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(i.Z.colors.TEXT_NORMAL).hex(),
              (0, a.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          L = g.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(i.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, a.useToken)(i.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          f = g.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(i.Z.colors.TEXT_DANGER).hex(),
              (0, a.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, l.jsx)(o.animated.div, {
          className: u.container,
          style: { backgroundColor: L },
          children: (0, l.jsx)("div", {
            className: u.flexContainer,
            ref: A,
            children: (0, l.jsxs)(a.FocusRingScope, {
              containerRef: A,
              children: [
                (0, l.jsx)("div", {
                  className: u.shrinkingContainer,
                  children: (0, l.jsx)(o.animated.div, {
                    className: u.message,
                    style: { color: null != _ ? f : D },
                    children:
                      null !== (n = null != _ ? _ : t) && void 0 !== n
                        ? n
                        : c.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: u.actions,
                  children: [
                    null != x &&
                      (0, l.jsx)(a.Button, {
                        className: u.resetButton,
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: x,
                        children: (0, l.jsx)(o.animated.span, {
                          style: { color: D },
                          children: null != N ? N : c.Z.Messages.RESET,
                        }),
                      }),
                    null != I
                      ? (0, l.jsx)(a.Tooltip, {
                          text: S,
                          children: (e) =>
                            (0, l.jsx)(a.Button, {
                              size: a.Button.Sizes.SMALL,
                              color: null != h ? h : a.Button.Colors.GREEN,
                              submitting: E,
                              disabled: T,
                              onClick: I,
                              ...e,
                              children:
                                null != C ? C : c.Z.Messages.SAVE_CHANGES,
                            }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    369994: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return I;
        },
        Fi: function () {
          return x;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return _;
        },
        n: function () {
          return E;
        },
      }),
        t(47120);
      var l = t(913527),
        s = t.n(l),
        o = t(544891),
        i = t(367907),
        a = t(434404),
        r = t(430824),
        d = t(626135),
        c = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, i.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function _(e, n) {
        let t = new Set(e.features);
        t.has(c.oNc.COMMUNITY)
          ? n
            ? t.delete(c.oNc.RAID_ALERTS_DISABLED)
            : t.add(c.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await a.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function E(e, n, t, l) {
        let i = s()().add(l, "hours").toISOString();
        return await o.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? i : null,
            dms_disabled_until: t ? i : null,
          },
        });
      }
      async function x(e, n, t) {
        let l = r.Z.getGuild(e);
        return null == (null == l ? void 0 : l.getSafetyAlertsChannelId())
          ? null
          : await o.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function I(e) {
        let n = r.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await o.tn.post({ url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
      }
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return d;
        },
        N8: function () {
          return r;
        },
      });
      var l = t(442837);
      t(467319);
      var s = t(496675),
        o = t(533244),
        i = t(487419),
        a = t(981631);
      function r(e) {
        let n = (0, l.e7)(
            [s.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s.Z;
                return (
                  n.can(a.Plq.BAN_MEMBERS, e) ||
                  n.can(a.Plq.KICK_MEMBERS, e) ||
                  n.can(a.Plq.MANAGE_GUILD, e)
                );
              })(e, s.Z),
            [e],
          ),
          t = (0, l.e7)(
            [i.Z],
            () => (null != e ? i.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, o.i9)(t)) && n;
      }
      function d(e) {
        return (0, l.e7)(
          [s.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s.Z;
              return n.can(a.Plq.MANAGE_GUILD, e);
            })(e, s.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        o = t(120356),
        i = t.n(o),
        a = t(831209),
        r = t(481060),
        d = t(367907),
        c = t(177862),
        u = t(981631),
        _ = t(689938),
        E = t(217329);
      function x(e) {
        let { guildId: n, transitionState: t, onClose: o } = e,
          [x, I] = s.useState([]),
          [C, N] = s.useState(),
          h = [
            {
              text: _.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
              value: c.C2.DM_SPAM,
            },
            {
              text: _.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
              value: c.C2.MENTION_SPAM,
            },
            {
              text: _.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
              value: c.C2.CHANNEL_SPAM,
            },
            {
              text: _.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
              value: c.C2.SUS_NEW_MEMBERS,
            },
            {
              text: _.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
              value: c.C2.CHANGING_SETTINGS,
            },
            {
              text: _.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
              value: c.C2.OTHER,
            },
          ];
        function T(e) {
          x.includes(e)
            ? I((n) => n.filter((n) => n !== e))
            : I((n) => [...n, e]);
        }
        return null == n
          ? (o(), null)
          : (0, l.jsxs)(r.ModalRoot, {
              transitionState: t,
              size: r.ModalSize.MEDIUM,
              children: [
                (0, l.jsx)(r.ModalHeader, {
                  separator: !0,
                  children: (0, l.jsxs)("div", {
                    className: E.headerContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: E.headerText,
                        children: [
                          (0, l.jsx)(r.LockIcon, {
                            size: "xs",
                            color: a.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, l.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children:
                              _.Z.Messages
                                .GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, l.jsx)(r.Clickable, {
                        onClick: o,
                        children: (0, l.jsx)(r.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: E.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(r.ModalContent, {
                  children: (0, l.jsx)("div", {
                    className: E.options,
                    children: h.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: i()(E.optionContainer, {
                            [E.optionContainerOther]: t === c.C2.OTHER,
                          }),
                          children: [
                            (0, l.jsxs)(r.Clickable, {
                              className: E.optionText,
                              onClick: () => T(t),
                              children: [
                                (0, l.jsx)("div", {
                                  children: (0, l.jsx)(r.Checkbox, {
                                    type: r.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: x.includes(t),
                                    onChange: () => T(t),
                                  }),
                                }),
                                (0, l.jsx)(r.Text, {
                                  variant: "text-md/medium",
                                  color: x.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === c.C2.OTHER &&
                              x.includes(c.C2.OTHER) &&
                              (0, l.jsx)("div", {
                                className: E.textboxContainer,
                                children: (0, l.jsx)(r.TextArea, {
                                  className: E.serverLockdownReasonText,
                                  placeholder:
                                    _.Z.Messages
                                      .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                  onChange: (e) => N(e),
                                  value: C,
                                  rows: 2,
                                  autoFocus: !0,
                                  flex: !0,
                                }),
                              }),
                          ],
                        },
                        t,
                      );
                    }),
                  }),
                }),
                (0, l.jsx)(r.ModalFooter, {
                  children: (0, l.jsx)(r.Button, {
                    onClick: function () {
                      (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: x,
                        raid_lockdown_feedback_other_reason: C,
                        guild_id: n,
                      }),
                        o();
                    },
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.FILLED,
                    submitting: !1,
                    children:
                      _.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT,
                  }),
                }),
              ],
            });
      }
    },
    664452: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return S;
          },
        }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        o = t(831209),
        i = t(442837),
        a = t(481060),
        r = t(688465),
        d = t(430824),
        c = t(626135),
        u = t(369994),
        _ = t(162157),
        E = t(533244),
        x = t(487419),
        I = t(821312),
        C = t(676770),
        N = t(981631),
        h = t(689938),
        T = t(547193);
      function S(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: S,
            analyticsData: A,
          } = e,
          g = (0, i.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          M = !!(null == g ? void 0 : g.hasFeature(N.oNc.INVITES_DISABLED)),
          [D] = s.useState(!1),
          [L, f] = s.useState(C.Fl),
          R = (0, i.e7)([x.Z], () => x.Z.getGuildIncident(n)),
          m = (0, _.BT)(g),
          j = (0, E.SG)(R) || M,
          Z = (0, E.sN)(R),
          [v, p] = s.useState(j),
          [O, B] = s.useState(Z),
          [k, G] = s.useState(!1),
          b = v !== j || O !== Z || k,
          P = M && !m;
        if (null == g) return S(), null;
        function U() {
          p((e) => !e);
        }
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: t,
          size: a.ModalSize.MEDIUM,
          children: [
            (0, l.jsx)(a.ModalHeader, {
              separator: !0,
              children: (0, l.jsxs)("div", {
                className: T.headerContainer,
                children: [
                  (0, l.jsx)(a.LockIcon, {
                    size: "xs",
                    color: o.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, l.jsx)(a.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE,
                  }),
                  (0, l.jsx)(r.Z, {}),
                ],
              }),
            }),
            (0, l.jsx)(a.ModalContent, {
              children: (0, l.jsxs)("div", {
                className: T.mainContainer,
                children: [
                  (0, l.jsx)(a.Select, {
                    placeholder:
                      h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                    options: (0, C.c1)(),
                    select: (e) => {
                      f(e), G(!0);
                    },
                    isSelected: (e) => e === L,
                    serialize: (e) => String(e),
                  }),
                  (0, l.jsxs)("div", {
                    className: T.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: T.pauseText,
                        children: [
                          (0, l.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.Z.Messages.DISABLE_INVITES,
                          }),
                          (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              h.Z.Messages
                                .GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, l.jsx)(a.Tooltip, {
                        text: h.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                        shouldShow: M,
                        children: (e) =>
                          (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(a.Switch, {
                              className: T.toggle,
                              onChange: U,
                              checked: v,
                              disabled: P,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: T.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: T.pauseText,
                        children: [
                          (0, l.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.Z.Messages.DISABLE_DMS,
                          }),
                          (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              h.Z.Messages
                                .GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, l.jsx)(a.Switch, {
                        className: T.toggle,
                        onChange: function () {
                          B((e) => !e);
                        },
                        checked: O,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsxs)(a.ModalFooter, {
              children: [
                (0, l.jsx)(a.Button, {
                  onClick: () => {
                    (j || Z) && !v && !O
                      ? ((0, u.n)(g.id, !1, !1),
                        (0, a.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, l.jsx)(I.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(g.id, v, O, L);
                    let { source: e, alertType: t, messageId: s } = A;
                    c.default.track(
                      N.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: s,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, E.sO)(v, O),
                        intervention_type_disabled: (0, E.lk)(v, O),
                        duration: 60 * L,
                      },
                    ),
                      S();
                  },
                  color: a.Button.Colors.BRAND,
                  look: a.Button.Looks.FILLED,
                  submitting: D,
                  disabled: !b,
                  children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA,
                }),
                (0, l.jsx)(a.Button, {
                  onClick: S,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  disabled: D,
                  children: h.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    575766: function (e, n, t) {
      t.d(n, {
        n: function () {
          return o;
        },
      });
      var l = t(470079),
        s = t(941028);
      function o(e) {
        l.useEffect(
          () => (
            s.k$(e),
            () => {
              s.kr(e);
            }
          ),
          [e],
        );
      }
    },
    937283: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(735250),
        s = t(470079),
        o = t(442837),
        i = t(100527),
        a = t(906732),
        r = t(613464),
        d = t(6025),
        c = t(433355),
        u = t(430824),
        _ = t(981631),
        E = t(842100);
      function x(e) {
        let { guildId: n } = e,
          t = (0, o.e7)([u.Z], () => u.Z.getGuild(n)),
          { analyticsLocations: x } = (0, a.ZP)(i.Z.MEMBER_SAFETY_PAGE),
          I = (0, o.e7)([c.ZP], () => c.ZP.getGuildSidebarState(n), [n]),
          C = s.useCallback(() => {
            d.Z.closeGuildSidebar(n);
          }, [n]),
          N = null != I;
        return null != t && N && null != I
          ? (0, l.jsx)(a.Gt, {
              value: x,
              children: (0, l.jsx)("div", {
                className: E.__invalid_sidebarContainer,
                style: { width: _.$Y6 },
                children: (0, l.jsx)(r.Z, {
                  userId: I.details.userId,
                  guildId: I.details.guildId,
                  onClose: C,
                }),
              }),
            })
          : null;
      }
    },
    545918: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        });
      var l = t(735250),
        s = t(470079),
        o = t(120356),
        i = t.n(o),
        a = t(442837),
        r = t(481060),
        d = t(100527),
        c = t(906732),
        u = t(111028),
        _ = t(252618),
        E = t(189432),
        x = t(189357),
        I = t(473403),
        C = t(984370),
        N = t(703656),
        h = t(171368),
        T = t(433355),
        S = t(592125),
        A = t(984933),
        g = t(430824),
        M = t(944486),
        D = t(241559),
        L = t(575766),
        f = t(305473),
        R = t(937283),
        m = t(440857),
        j = t(707113),
        Z = t(981631),
        v = t(176505),
        p = t(50493),
        O = t(689938),
        B = t(842100),
        k = t(784237);
      function G(e) {
        let { guild: n, previousChannel: t } = e,
          o = O.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
          i = O.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
        return (
          (0, _.Tt)({ location: n.name, subsection: o }),
          (0, l.jsxs)(C.Z, {
            className: B.header,
            innerClassname: B.__invalid_innerHeader,
            channelId: v.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
              null != t
                ? (0, l.jsx)(r.Button, {
                    className: B.returnButton,
                    size: r.Button.Sizes.SMALL,
                    look: r.Button.Looks.OUTLINED,
                    color: r.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, N.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(r.Text, {
                      className: B.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: O.Z.Messages.RETURN_TO_CHANNEL.format({
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                s.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(I._, {
                                      className: B.returnIcon,
                                      guild: n,
                                      channel: t,
                                    }),
                                    (0, l.jsx)(u.Z, {
                                      children: (0, l.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        color: "none",
                                        children: t.name,
                                      }),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                      }),
                    }),
                  })
                : (0, l.jsx)("div", {}),
            children: [
              (0, l.jsx)(C.Z.Icon, { icon: r.GroupIcon, "aria-hidden": !0 }),
              (0, l.jsx)(C.Z.Title, { children: i }),
            ],
          })
        );
      }
      function b(e) {
        let { guildId: n } = e,
          t = (0, a.e7)([g.Z], () => g.Z.getGuild(n)),
          { analyticsLocations: o } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE),
          u = (0, D.n2)(n),
          _ = (0, x.ms)(n, u),
          I = (0, a.e7)([M.Z], () => M.Z.getLastSelectedChannelId(n)),
          C = (0, a.e7)([S.Z], () => S.Z.getChannel(I)),
          O = s.useRef(null);
        (0, L.n)(n),
          s.useEffect(() => {
            if (!u && null != t) {
              var e;
              let n =
                null === (e = A.ZP.getDefaultChannel(t.id)) || void 0 === e
                  ? void 0
                  : e.id;
              (0, N.XU)(t.id, n);
            }
          }, [t, u]);
        let b = (0, a.e7)([T.ZP], () => null != T.ZP.getGuildSidebarState(n), [
            n,
          ]),
          P = s.useCallback(
            (e) => {
              (0, x.By)(e.guildId, !0)
                ? (0, E.r)(e.guildId, e.userId, v.oC.MEMBER_SAFETY, {
                    modViewPanel: p.k.INFO,
                  })
                : (0, h.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: o,
                    analyticsLocation: { section: Z.jXE.MEMBER_SAFETY_PAGE },
                  });
            },
            [o],
          );
        return null != t && u
          ? (0, l.jsxs)(c.Gt, {
              value: o,
              children: [
                (0, l.jsxs)("div", {
                  className: i()(k.chat, B.page, { [k.threadSidebarOpen]: b }),
                  children: [
                    (0, l.jsx)(G, { guild: t, previousChannel: C }),
                    (0, l.jsx)(r.AdvancedScroller, {
                      className: i()(B.scroller),
                      ref: O,
                      orientation: "vertical",
                      children: (0, l.jsxs)("div", {
                        className: i()(k.content, B.container),
                        children: [
                          (0, l.jsx)(f.Z, { guild: t }),
                          (0, l.jsx)(j.Z, { guild: t, onMemberSelect: P }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(m.Z, { guildId: t.id }),
                  ],
                }),
                _ && (0, l.jsx)(R.Z, { guildId: t.id }),
              ],
            })
          : null;
      }
    },
    707113: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(735250),
        s = t(470079),
        o = t(120356),
        i = t.n(o),
        a = t(526629),
        r = t(399606),
        d = t(481060),
        c = t(201070),
        u = t(893966),
        _ = t(472596),
        E = t(598948),
        x = t(428936),
        I = t(41586),
        C = t(168586);
      function N(e) {
        let { guild: n } = e,
          t = (0, c.$j)(n.id),
          s = (0, d.useSpring)({ height: t ? 3 : 0, config: a.config.stiff });
        return (0, l.jsx)("div", {
          className: C.loaderContainer,
          children: (0, l.jsx)(a.animated.div, {
            className: C.loaderBar,
            style: s,
          }),
        });
      }
      function h(e) {
        let { guild: n, className: t, onPageChange: o, onMemberSelect: a } = e,
          h = n.id,
          T = (0, r.e7)(
            [u.Z],
            () => u.Z.getEstimatedMemberSearchCountByGuildId(h),
            [h],
          ),
          S = (0, c.$j)(h),
          A = (0, c.M3)(h),
          g = s.useCallback(
            (e) => {
              if (null != e) null == a || a(e);
            },
            [a],
          ),
          M = (0, _.xb)(A, S, T),
          D = s.useRef(null),
          L = s.useRef(null),
          f = s.useCallback(() => {
            var e;
            null === (e = D.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, l.jsx)("div", {
          className: i()(C.mainTableContainer, t),
          children: (0, l.jsxs)(d.AdvancedScroller, {
            className: i()(C.horizatonalScroller),
            ref: L,
            orientation: "horizontal",
            children: [
              (0, l.jsx)(I.Z, { guild: n, ref: D }),
              (0, l.jsx)(N, { guild: n }),
              (0, l.jsx)(E.Z, {
                guild: n,
                onSelectRow: g,
                searchState: M,
                onResetForNewMembers: f,
              }),
              M !== _.po.SUCCESS_STILL_INDEXING &&
                (0, l.jsx)(x.Z, { guildId: n.id, onPageChange: o }),
            ],
          }),
        });
      }
    },
    147768: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    217329: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_e99e33",
        headerText: "headerText_e99e33",
        closeIcon: "closeIcon_e99e33",
        options: "options_e99e33",
        optionContainer: "optionContainer_e99e33",
        optionContainerOther: "optionContainerOther_e99e33",
        optionText: "optionText_e99e33",
        textboxContainer: "textboxContainer_e99e33",
        serverLockdownReasonText: "serverLockdownReasonText_e99e33",
      };
    },
    547193: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    842100: function (e, n, t) {
      e.exports = {
        returnButton: "returnButton_d20375",
        returnButtonText: "returnButtonText_d20375",
        returnIcon: "returnIcon_d20375",
        container: "container_d20375",
        scroller: "scroller_d20375",
        page: "page_d20375",
        header: "header_d20375",
      };
    },
    168586: function (e, n, t) {
      e.exports = {
        mainTableContainer: "mainTableContainer_e23072",
        horizatonalScroller: "horizatonalScroller_e23072",
        loaderContainer: "loaderContainer_e23072",
        loaderBar: "loaderBar_e23072",
      };
    },
  },
]);
//# sourceMappingURL=146773afd039357254c7.js.map
