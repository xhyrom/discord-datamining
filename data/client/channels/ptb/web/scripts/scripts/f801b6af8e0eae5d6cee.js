"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44400"],
  {
    852860: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(100621),
        o = t(692547),
        a = t(481060),
        s = t(585483),
        d = t(981631),
        c = t(388032),
        u = t(544751);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: x,
            submitting: h,
            onReset: _,
            onSave: g,
            onSaveText: C,
            onResetText: I,
            onSaveButtonColor: N,
            disabled: f,
            saveButtonTooltip: m,
          } = e,
          E = l.useRef(null),
          [{ spring: T }, j] = (0, a.useSpring)(() => ({ spring: 0 }));
        l.useEffect(() => {
          function e() {
            j({ spring: 1, config: r.config.gentle }),
              j({ spring: 0, config: r.config.gentle, delay: 1e3 });
          }
          return (
            s.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e),
            () => {
              s.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [j]);
        let S = T.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(o.Z.colors.TEXT_NORMAL).hex(),
              (0, a.useToken)(o.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          v = T.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(o.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, a.useToken)(o.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          p = T.to({
            range: [0, 1],
            output: [
              (0, a.useToken)(o.Z.colors.TEXT_DANGER).hex(),
              (0, a.useToken)(o.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, i.jsx)(r.animated.div, {
          className: u.container,
          style: { backgroundColor: v },
          children: (0, i.jsx)("div", {
            className: u.flexContainer,
            ref: E,
            children: (0, i.jsxs)(a.FocusRingScope, {
              containerRef: E,
              children: [
                (0, i.jsx)("div", {
                  className: u.shrinkingContainer,
                  children: (0, i.jsx)(r.animated.div, {
                    className: u.message,
                    style: { color: null != x ? p : S },
                    children:
                      null !== (n = null != x ? x : t) && void 0 !== n
                        ? n
                        : c.intl.string(c.t.GP7JLC),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: u.actions,
                  children: [
                    null != _ &&
                      (0, i.jsx)(a.Button, {
                        className: u.resetButton,
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        onClick: _,
                        children: (0, i.jsx)(r.animated.span, {
                          style: { color: S },
                          children: null != I ? I : c.intl.string(c.t.yBZMsb),
                        }),
                      }),
                    null != g
                      ? (0, i.jsx)(a.Tooltip, {
                          text: m,
                          children: (e) =>
                            (0, i.jsx)(a.Button, {
                              size: a.Button.Sizes.SMALL,
                              color: null != N ? N : a.Button.Colors.GREEN,
                              submitting: h,
                              disabled: f,
                              onClick: g,
                              ...e,
                              children:
                                null != C ? C : c.intl.string(c.t.K344S0),
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
          return g;
        },
        Fi: function () {
          return _;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return x;
        },
        n: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(913527),
        l = t.n(i),
        r = t(544891),
        o = t(367907),
        a = t(434404),
        s = t(430824),
        d = t(626135),
        c = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, o.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function x(e, n) {
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
      async function h(e, n, t, i) {
        let o = l()().add(i, "hours").toISOString();
        return await r.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? o : null,
            dms_disabled_until: t ? o : null,
          },
          rejectWithError: !1,
        });
      }
      async function _(e, n, t) {
        let i = s.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
              rejectWithError: !1,
            });
      }
      async function g(e) {
        let n = s.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1,
            });
      }
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return d;
        },
        N8: function () {
          return s;
        },
      });
      var i = t(442837);
      t(467319);
      var l = t(496675),
        r = t(533244),
        o = t(487419),
        a = t(981631);
      function s(e) {
        let n = (0, i.e7)(
            [l.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : l.Z;
                return (
                  n.can(a.Plq.BAN_MEMBERS, e) ||
                  n.can(a.Plq.KICK_MEMBERS, e) ||
                  n.can(a.Plq.MANAGE_GUILD, e)
                );
              })(e, l.Z),
            [e],
          ),
          t = (0, i.e7)(
            [o.Z],
            () => (null != e ? o.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, r.i9)(t)) && n;
      }
      function d(e) {
        return (0, i.e7)(
          [l.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l.Z;
              return n.can(a.Plq.MANAGE_GUILD, e);
            })(e, l.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        o = t.n(r),
        a = t(831209),
        s = t(481060),
        d = t(367907),
        c = t(177862),
        u = t(981631),
        x = t(388032),
        h = t(20525);
      function _(e) {
        let { guildId: n, transitionState: t, onClose: r } = e,
          [_, g] = l.useState([]),
          [C, I] = l.useState(),
          N = [
            { text: x.intl.string(x.t["//3pvr"]), value: c.C2.DM_SPAM },
            { text: x.intl.string(x.t.SdVsio), value: c.C2.MENTION_SPAM },
            { text: x.intl.string(x.t.uTiSVF), value: c.C2.CHANNEL_SPAM },
            { text: x.intl.string(x.t.GQczU1), value: c.C2.SUS_NEW_MEMBERS },
            { text: x.intl.string(x.t.AAgqy8), value: c.C2.CHANGING_SETTINGS },
            { text: x.intl.string(x.t.ryPKb2), value: c.C2.OTHER },
          ];
        function f(e) {
          _.includes(e)
            ? g((n) => n.filter((n) => n !== e))
            : g((n) => [...n, e]);
        }
        return null == n
          ? (r(), null)
          : (0, i.jsxs)(s.ModalRoot, {
              transitionState: t,
              size: s.ModalSize.MEDIUM,
              children: [
                (0, i.jsx)(s.ModalHeader, {
                  separator: !0,
                  children: (0, i.jsxs)("div", {
                    className: h.headerContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: h.headerText,
                        children: [
                          (0, i.jsx)(s.LockIcon, {
                            size: "xs",
                            color: a.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, i.jsx)(s.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: x.intl.string(x.t.f5hd9P),
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.Clickable, {
                        onClick: r,
                        children: (0, i.jsx)(s.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: h.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(s.ModalContent, {
                  children: (0, i.jsx)("div", {
                    className: h.options,
                    children: N.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: o()(h.optionContainer, {
                            [h.optionContainerOther]: t === c.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(s.Clickable, {
                              className: h.optionText,
                              onClick: () => f(t),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(s.Checkbox, {
                                    type: s.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: _.includes(t),
                                    onChange: () => f(t),
                                  }),
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  color: _.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === c.C2.OTHER &&
                              _.includes(c.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: h.textboxContainer,
                                children: (0, i.jsx)(s.TextArea, {
                                  className: h.serverLockdownReasonText,
                                  placeholder: x.intl.string(x.t["PAM+JS"]),
                                  onChange: (e) => I(e),
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
                (0, i.jsx)(s.ModalFooter, {
                  children: (0, i.jsx)(s.Button, {
                    onClick: function () {
                      (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: _,
                        raid_lockdown_feedback_other_reason: C,
                        guild_id: n,
                      }),
                        r();
                    },
                    color: s.Button.Colors.BRAND,
                    look: s.Button.Looks.FILLED,
                    submitting: !1,
                    children: x.intl.string(x.t.nAt0rK),
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
            return m;
          },
        }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(831209),
        o = t(442837),
        a = t(481060),
        s = t(688465),
        d = t(430824),
        c = t(626135),
        u = t(369994),
        x = t(162157),
        h = t(533244),
        _ = t(487419),
        g = t(821312),
        C = t(676770),
        I = t(981631),
        N = t(388032),
        f = t(303758);
      function m(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: m,
            analyticsData: E,
          } = e,
          T = (0, o.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          j = !!(null == T ? void 0 : T.hasFeature(I.oNc.INVITES_DISABLED)),
          [S] = l.useState(!1),
          [v, p] = l.useState(C.Fl),
          A = (0, o.e7)([_.Z], () => _.Z.getGuildIncident(n)),
          M = (0, x.BT)(T),
          Z = (0, h.SG)(A) || j,
          R = (0, h.sN)(A),
          [b, k] = l.useState(Z),
          [L, B] = l.useState(R),
          [D, G] = l.useState(!1),
          P = b !== Z || L !== R || D,
          y = j && !M;
        if (null == T) return m(), null;
        function O() {
          k((e) => !e);
        }
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: t,
          size: a.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(a.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: f.headerContainer,
                children: [
                  (0, i.jsx)(a.LockIcon, {
                    size: "xs",
                    color: r.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, i.jsx)(a.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: N.intl.string(N.t.oCYAc3),
                  }),
                  (0, i.jsx)(s.Z, {}),
                ],
              }),
            }),
            (0, i.jsx)(a.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: f.mainContainer,
                children: [
                  (0, i.jsx)(a.Select, {
                    placeholder: N.intl.string(N.t.vKYZzc),
                    options: (0, C.c1)(),
                    select: (e) => {
                      p(e), G(!0);
                    },
                    isSelected: (e) => e === v,
                    serialize: (e) => String(e),
                  }),
                  (0, i.jsxs)("div", {
                    className: f.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: f.pauseText,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: N.intl.string(N.t.Uwsjn5),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: N.intl.string(N.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.Tooltip, {
                        text: N.intl.string(N.t["9GPbsb"]),
                        shouldShow: j,
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(a.Switch, {
                              className: f.toggle,
                              onChange: O,
                              checked: b,
                              disabled: y,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: f.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: f.pauseText,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: N.intl.string(N.t.wrDmAw),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: N.intl.string(N.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.Switch, {
                        className: f.toggle,
                        onChange: function () {
                          B((e) => !e);
                        },
                        checked: L,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(a.ModalFooter, {
              children: [
                (0, i.jsx)(a.Button, {
                  onClick: () => {
                    (Z || R) && !b && !L
                      ? ((0, u.n)(T.id, !1, !1),
                        (0, a.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(g.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(T.id, b, L, v);
                    let { source: e, alertType: t, messageId: l } = E;
                    c.default.track(
                      I.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: l,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, h.sO)(b, L),
                        intervention_type_disabled: (0, h.lk)(b, L),
                        duration: 60 * v,
                      },
                    ),
                      m();
                  },
                  color: a.Button.Colors.BRAND,
                  look: a.Button.Looks.FILLED,
                  submitting: S,
                  disabled: !P,
                  children: N.intl.string(N.t["pwm/z8"]),
                }),
                (0, i.jsx)(a.Button, {
                  onClick: m,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  disabled: S,
                  children: N.intl.string(N.t["ETE/oK"]),
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
          return r;
        },
      });
      var i = t(192379),
        l = t(941028);
      function r(e) {
        i.useEffect(
          () => (
            l.k$(e),
            () => {
              l.kr(e);
            }
          ),
          [e],
        );
      }
    },
    937283: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        o = t(100527),
        a = t(906732),
        s = t(613464),
        d = t(6025),
        c = t(433355),
        u = t(430824),
        x = t(981631),
        h = t(743140);
      function _(e) {
        let { guildId: n } = e,
          t = (0, r.e7)([u.Z], () => u.Z.getGuild(n)),
          { analyticsLocations: _ } = (0, a.ZP)(o.Z.MEMBER_SAFETY_PAGE),
          g = (0, r.e7)([c.ZP], () => c.ZP.getGuildSidebarState(n), [n]),
          C = l.useCallback(() => {
            d.Z.closeGuildSidebar(n);
          }, [n]),
          I = null != g;
        return null != t && I && null != g
          ? (0, i.jsx)(a.Gt, {
              value: _,
              children: (0, i.jsx)("div", {
                className: h.__invalid_sidebarContainer,
                style: { width: x.$Y6 },
                children: (0, i.jsx)(s.Z, {
                  userId: g.details.userId,
                  guildId: g.details.guildId,
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
            return P;
          },
        });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        o = t.n(r),
        a = t(442837),
        s = t(481060),
        d = t(100527),
        c = t(906732),
        u = t(111028),
        x = t(252618),
        h = t(189432),
        _ = t(189357),
        g = t(473403),
        C = t(984370),
        I = t(703656),
        N = t(171368),
        f = t(433355),
        m = t(592125),
        E = t(984933),
        T = t(430824),
        j = t(944486),
        S = t(241559),
        v = t(575766),
        p = t(305473),
        A = t(937283),
        M = t(440857),
        Z = t(707113),
        R = t(981631),
        b = t(176505),
        k = t(50493),
        L = t(388032),
        B = t(743140),
        D = t(293914);
      function G(e) {
        let { guild: n, previousChannel: t } = e,
          r = L.intl.string(L.t.oclz3d),
          o = L.intl.string(L.t.oclz3d);
        return (
          (0, x.Tt)({ location: n.name, subsection: r }),
          (0, i.jsxs)(C.Z, {
            className: B.header,
            innerClassname: B.__invalid_innerHeader,
            channelId: b.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
              null != t
                ? (0, i.jsx)(s.Button, {
                    className: B.returnButton,
                    size: s.Button.Sizes.SMALL,
                    look: s.Button.Looks.OUTLINED,
                    color: s.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, I.XU)(n.id, t.id);
                    },
                    children: (0, i.jsx)(s.Text, {
                      className: B.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: L.intl.format(L.t.IX7oWl, {
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, i.jsxs)(
                                l.Fragment,
                                {
                                  children: [
                                    (0, i.jsx)(g._, {
                                      className: B.returnIcon,
                                      guild: n,
                                      channel: t,
                                    }),
                                    (0, i.jsx)(u.Z, {
                                      children: (0, i.jsx)(s.Text, {
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
                : (0, i.jsx)("div", {}),
            children: [
              (0, i.jsx)(C.Z.Icon, { icon: s.GroupIcon, "aria-hidden": !0 }),
              (0, i.jsx)(C.Z.Title, { children: o }),
            ],
          })
        );
      }
      function P(e) {
        let { guildId: n } = e,
          t = (0, a.e7)([T.Z], () => T.Z.getGuild(n)),
          { analyticsLocations: r } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE),
          u = (0, S.n2)(n),
          x = (0, _.ms)(n, u),
          g = (0, a.e7)([j.Z], () => j.Z.getLastSelectedChannelId(n)),
          C = (0, a.e7)([m.Z], () => m.Z.getChannel(g)),
          L = l.useRef(null);
        (0, v.n)(n),
          l.useEffect(() => {
            if (!u && null != t) {
              var e;
              let n =
                null === (e = E.ZP.getDefaultChannel(t.id)) || void 0 === e
                  ? void 0
                  : e.id;
              (0, I.XU)(t.id, n);
            }
          }, [t, u]);
        let P = (0, a.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(n), [
            n,
          ]),
          y = l.useCallback(
            (e) => {
              (0, _.By)(e.guildId, !0)
                ? (0, h.r)(e.guildId, e.userId, b.oC.MEMBER_SAFETY, {
                    modViewPanel: k.k.INFO,
                  })
                : (0, N.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: r,
                    analyticsLocation: { section: R.jXE.MEMBER_SAFETY_PAGE },
                  });
            },
            [r],
          );
        return null != t && u
          ? (0, i.jsxs)(c.Gt, {
              value: r,
              children: [
                (0, i.jsxs)("div", {
                  className: o()(D.chat, B.page, { [D.threadSidebarOpen]: P }),
                  children: [
                    (0, i.jsx)(G, { guild: t, previousChannel: C }),
                    (0, i.jsx)(s.AdvancedScroller, {
                      className: o()(B.scroller),
                      ref: L,
                      orientation: "vertical",
                      children: (0, i.jsxs)("div", {
                        className: o()(D.content, B.container),
                        children: [
                          (0, i.jsx)(p.Z, { guild: t }),
                          (0, i.jsx)(Z.Z, { guild: t, onMemberSelect: y }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(M.Z, { guildId: t.id }),
                  ],
                }),
                x && (0, i.jsx)(A.Z, { guildId: t.id }),
              ],
            })
          : null;
      }
    },
    707113: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        o = t.n(r),
        a = t(100621),
        s = t(399606),
        d = t(481060),
        c = t(201070),
        u = t(893966),
        x = t(472596),
        h = t(598948),
        _ = t(428936),
        g = t(41586),
        C = t(337550);
      function I(e) {
        let { guild: n } = e,
          t = (0, c.$j)(n.id),
          l = (0, d.useSpring)({ height: t ? 3 : 0, config: a.config.stiff });
        return (0, i.jsx)("div", {
          className: C.loaderContainer,
          children: (0, i.jsx)(a.animated.div, {
            className: C.loaderBar,
            style: l,
          }),
        });
      }
      function N(e) {
        let { guild: n, className: t, onPageChange: r, onMemberSelect: a } = e,
          N = n.id,
          f = (0, s.e7)(
            [u.Z],
            () => u.Z.getEstimatedMemberSearchCountByGuildId(N),
            [N],
          ),
          m = (0, c.$j)(N),
          E = (0, c.M3)(N),
          T = l.useCallback(
            (e) => {
              if (null != e) null == a || a(e);
            },
            [a],
          ),
          j = (0, x.xb)(E, m, f),
          S = l.useRef(null),
          v = l.useRef(null),
          p = l.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, i.jsx)("div", {
          className: o()(C.mainTableContainer, t),
          children: (0, i.jsxs)(d.AdvancedScroller, {
            className: o()(C.horizatonalScroller),
            ref: v,
            orientation: "horizontal",
            children: [
              (0, i.jsx)(g.Z, { guild: n, ref: S }),
              (0, i.jsx)(I, { guild: n }),
              (0, i.jsx)(h.Z, {
                guild: n,
                onSelectRow: T,
                searchState: j,
                onResetForNewMembers: p,
              }),
              j !== x.po.SUCCESS_STILL_INDEXING &&
                (0, i.jsx)(_.Z, { guildId: n.id, onPageChange: r }),
            ],
          }),
        });
      }
    },
    544751: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    20525: function (e, n, t) {
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
    303758: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    743140: function (e, n, t) {
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
    337550: function (e, n, t) {
      e.exports = {
        mainTableContainer: "mainTableContainer_e23072",
        horizatonalScroller: "horizatonalScroller_e23072",
        loaderContainer: "loaderContainer_e23072",
        loaderBar: "loaderBar_e23072",
      };
    },
  },
]);
//# sourceMappingURL=f801b6af8e0eae5d6cee.js.map
