"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44400"],
  {
    852860: function (e, n, t) {
      t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(752877),
        a = t(692547),
        s = t(481060),
        o = t(585483),
        c = t(981631),
        d = t(388032),
        u = t(840814);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: m,
            submitting: x,
            onReset: h,
            onSave: b,
            onSaveText: C,
            onResetText: j,
            onSaveButtonColor: g,
            disabled: f,
            saveButtonTooltip: v,
          } = e,
          N = i.useRef(null),
          [{ spring: _ }, E] = (0, s.useSpring)(() => ({ spring: 0 }));
        i.useEffect(() => {
          function e() {
            E({ spring: 1, config: r.config.gentle }),
              E({ spring: 0, config: r.config.gentle, delay: 1e3 });
          }
          return (
            o.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              o.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [E]);
        let T = _.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          I = _.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          S = _.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, l.jsx)(r.animated.div, {
          className: u.container,
          style: { backgroundColor: I },
          children: (0, l.jsx)("div", {
            className: u.flexContainer,
            ref: N,
            children: (0, l.jsxs)(s.FocusRingScope, {
              containerRef: N,
              children: [
                (0, l.jsx)("div", {
                  className: u.shrinkingContainer,
                  children: (0, l.jsx)(r.animated.div, {
                    className: u.message,
                    style: { color: null != m ? S : T },
                    children:
                      null !== (n = null != m ? m : t) && void 0 !== n
                        ? n
                        : d.intl.string(d.t.GP7JLC),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: u.actions,
                  children: [
                    null != h &&
                      (0, l.jsx)(s.Button, {
                        className: u.resetButton,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: h,
                        children: (0, l.jsx)(r.animated.span, {
                          style: { color: T },
                          children: null != j ? j : d.intl.string(d.t.yBZMsb),
                        }),
                      }),
                    null != b
                      ? (0, l.jsx)(s.Tooltip, {
                          text: v,
                          children: (e) =>
                            (0, l.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != g ? g : s.Button.Colors.GREEN,
                              submitting: x,
                              disabled: f,
                              onClick: b,
                              ...e,
                              children:
                                null != C ? C : d.intl.string(d.t.K344S0),
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
          return b;
        },
        Fi: function () {
          return h;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return m;
        },
        n: function () {
          return x;
        },
      }),
        t(47120);
      var l = t(913527),
        i = t.n(l),
        r = t(544891),
        a = t(367907),
        s = t(434404),
        o = t(430824),
        c = t(626135),
        d = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, a.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function m(e, n) {
        let t = new Set(e.features);
        t.has(d.oNc.COMMUNITY)
          ? n
            ? t.delete(d.oNc.RAID_ALERTS_DISABLED)
            : t.add(d.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await s.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function x(e, n, t, l) {
        let a = i()().add(l, "hours").toISOString();
        return await r.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? a : null,
            dms_disabled_until: t ? a : null,
          },
          rejectWithError: !1,
        });
      }
      async function h(e, n, t) {
        let l = o.Z.getGuild(e);
        return null == (null == l ? void 0 : l.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
              rejectWithError: !1,
            });
      }
      async function b(e) {
        let n = o.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1,
            });
      }
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return c;
        },
        N8: function () {
          return o;
        },
      });
      var l = t(442837);
      t(467319);
      var i = t(496675),
        r = t(533244),
        a = t(487419),
        s = t(981631);
      function o(e) {
        let n = (0, l.e7)(
            [i.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.Z;
                return (
                  n.can(s.Plq.BAN_MEMBERS, e) ||
                  n.can(s.Plq.KICK_MEMBERS, e) ||
                  n.can(s.Plq.MANAGE_GUILD, e)
                );
              })(e, i.Z),
            [e],
          ),
          t = (0, l.e7)(
            [a.Z],
            () => (null != e ? a.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, r.i9)(t)) && n;
      }
      function c(e) {
        return (0, l.e7)(
          [i.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.Z;
              return n.can(s.Plq.MANAGE_GUILD, e);
            })(e, i.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(831209),
        o = t(481060),
        c = t(367907),
        d = t(177862),
        u = t(981631),
        m = t(388032),
        x = t(506452);
      function h(e) {
        let { guildId: n, transitionState: t, onClose: r } = e,
          [h, b] = i.useState([]),
          [C, j] = i.useState(),
          g = [
            { text: m.intl.string(m.t["//3pvr"]), value: d.C2.DM_SPAM },
            { text: m.intl.string(m.t.SdVsio), value: d.C2.MENTION_SPAM },
            { text: m.intl.string(m.t.uTiSVF), value: d.C2.CHANNEL_SPAM },
            { text: m.intl.string(m.t.GQczU1), value: d.C2.SUS_NEW_MEMBERS },
            { text: m.intl.string(m.t.AAgqy8), value: d.C2.CHANGING_SETTINGS },
            { text: m.intl.string(m.t.ryPKb2), value: d.C2.OTHER },
          ];
        function f(e) {
          h.includes(e)
            ? b((n) => n.filter((n) => n !== e))
            : b((n) => [...n, e]);
        }
        return null == n
          ? (r(), null)
          : (0, l.jsxs)(o.ModalRoot, {
              transitionState: t,
              size: o.ModalSize.MEDIUM,
              children: [
                (0, l.jsx)(o.ModalHeader, {
                  separator: !0,
                  children: (0, l.jsxs)("div", {
                    className: x.headerContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: x.headerText,
                        children: [
                          (0, l.jsx)(o.LockIcon, {
                            size: "xs",
                            color: s.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, l.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t.f5hd9P),
                          }),
                        ],
                      }),
                      (0, l.jsx)(o.Clickable, {
                        onClick: r,
                        children: (0, l.jsx)(o.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: x.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(o.ModalContent, {
                  children: (0, l.jsx)("div", {
                    className: x.options,
                    children: g.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: a()(x.optionContainer, {
                            [x.optionContainerOther]: t === d.C2.OTHER,
                          }),
                          children: [
                            (0, l.jsxs)(o.Clickable, {
                              className: x.optionText,
                              onClick: () => f(t),
                              children: [
                                (0, l.jsx)("div", {
                                  children: (0, l.jsx)(o.Checkbox, {
                                    type: o.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: h.includes(t),
                                    onChange: () => f(t),
                                  }),
                                }),
                                (0, l.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  color: h.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === d.C2.OTHER &&
                              h.includes(d.C2.OTHER) &&
                              (0, l.jsx)("div", {
                                className: x.textboxContainer,
                                children: (0, l.jsx)(o.TextArea, {
                                  className: x.serverLockdownReasonText,
                                  placeholder: m.intl.string(m.t["PAM+JS"]),
                                  onChange: (e) => j(e),
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
                (0, l.jsx)(o.ModalFooter, {
                  children: (0, l.jsx)(o.Button, {
                    onClick: function () {
                      (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: h,
                        raid_lockdown_feedback_other_reason: C,
                        guild_id: n,
                      }),
                        r();
                    },
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    submitting: !1,
                    children: m.intl.string(m.t.nAt0rK),
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
            return v;
          },
        }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(831209),
        a = t(442837),
        s = t(481060),
        o = t(688465),
        c = t(430824),
        d = t(626135),
        u = t(369994),
        m = t(162157),
        x = t(533244),
        h = t(487419),
        b = t(821312),
        C = t(676770),
        j = t(981631),
        g = t(388032),
        f = t(343854);
      function v(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: v,
            analyticsData: N,
          } = e,
          _ = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          E = !!(null == _ ? void 0 : _.hasFeature(j.oNc.INVITES_DISABLED)),
          [T] = i.useState(!1),
          [I, S] = i.useState(C.Fl),
          p = (0, a.e7)([h.Z], () => h.Z.getGuildIncident(n)),
          M = (0, m.BT)(_),
          R = (0, x.SG)(p) || E,
          A = (0, x.sN)(p),
          [Z, k] = i.useState(R),
          [B, w] = i.useState(A),
          [L, D] = i.useState(!1),
          P = Z !== R || B !== A || L,
          y = E && !M;
        if (null == _) return v(), null;
        function G() {
          k((e) => !e);
        }
        return (0, l.jsxs)(s.ModalRoot, {
          transitionState: t,
          size: s.ModalSize.MEDIUM,
          children: [
            (0, l.jsx)(s.ModalHeader, {
              separator: !0,
              children: (0, l.jsxs)("div", {
                className: f.headerContainer,
                children: [
                  (0, l.jsx)(s.LockIcon, {
                    size: "xs",
                    color: r.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, l.jsx)(s.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: g.intl.string(g.t.oCYAc3),
                  }),
                  (0, l.jsx)(o.Z, {}),
                ],
              }),
            }),
            (0, l.jsx)(s.ModalContent, {
              children: (0, l.jsxs)("div", {
                className: f.mainContainer,
                children: [
                  (0, l.jsx)(s.Select, {
                    placeholder: g.intl.string(g.t.vKYZzc),
                    options: (0, C.c1)(),
                    select: (e) => {
                      S(e), D(!0);
                    },
                    isSelected: (e) => e === I,
                    serialize: (e) => String(e),
                  }),
                  (0, l.jsxs)("div", {
                    className: f.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: f.pauseText,
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: g.intl.string(g.t.Uwsjn5),
                          }),
                          (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.string(g.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, l.jsx)(s.Tooltip, {
                        text: g.intl.string(g.t["9GPbsb"]),
                        shouldShow: E,
                        children: (e) =>
                          (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(s.Switch, {
                              className: f.toggle,
                              onChange: G,
                              checked: Z,
                              disabled: y,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: f.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: f.pauseText,
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: g.intl.string(g.t.wrDmAw),
                          }),
                          (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: g.intl.string(g.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, l.jsx)(s.Switch, {
                        className: f.toggle,
                        onChange: function () {
                          w((e) => !e);
                        },
                        checked: B,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsxs)(s.ModalFooter, {
              children: [
                (0, l.jsx)(s.Button, {
                  onClick: () => {
                    (R || A) && !Z && !B
                      ? ((0, u.n)(_.id, !1, !1),
                        (0, s.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, l.jsx)(b.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(_.id, Z, B, I);
                    let { source: e, alertType: t, messageId: i } = N;
                    d.default.track(
                      j.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: i,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, x.sO)(Z, B),
                        intervention_type_disabled: (0, x.lk)(Z, B),
                        duration: 60 * I,
                      },
                    ),
                      v();
                  },
                  color: s.Button.Colors.BRAND,
                  look: s.Button.Looks.FILLED,
                  submitting: T,
                  disabled: !P,
                  children: g.intl.string(g.t["pwm/z8"]),
                }),
                (0, l.jsx)(s.Button, {
                  onClick: v,
                  color: s.Button.Colors.PRIMARY,
                  look: s.Button.Looks.LINK,
                  disabled: T,
                  children: g.intl.string(g.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    328977: function (e, n, t) {
      t.d(n, {
        L: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(826581);
      function r(e) {
        let { guildId: n } = e;
        return (0, l.e7)([i.Z], () => i.Z.getSelectedGuildJoinRequest(n), [n]);
      }
    },
    412222: function (e, n, t) {
      t.d(n, {
        C: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(826581);
      function r(e) {
        let { guildId: n } = e;
        return (0, l.e7)([i.Z], () => i.Z.getSelectedSortOrder(n), [n]);
      }
    },
    223312: function (e, n, t) {
      t.d(n, {
        j: function () {
          return s;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(442837),
        r = t(826581),
        a = t(246364);
      function s(e) {
        let { guildId: n, applicationStatus: t, sortOrder: s } = e,
          o = (0, i.e7)([r.Z], () => r.Z.getRequests(n, t), [t, n]);
        return {
          guildJoinRequests: l.useMemo(
            () => (s === a.Nw.TIMESTAMP_DESC ? [...o].reverse() : o),
            [s, o],
          ),
        };
      }
    },
    146463: function (e, n, t) {
      t.d(n, {
        u: function () {
          return _;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(91192),
        s = t(442837),
        o = t(481060),
        c = t(209613),
        d = t(430824),
        u = t(855981),
        m = t(55543),
        x = t(693546),
        h = t(826581),
        b = t(246364),
        C = t(328977),
        j = t(571728),
        g = t(762660),
        f = t(388032),
        v = t(372819);
      let N = () => null;
      function _(e) {
        let { status: n } = e,
          t = f.intl.string(f.t["/wqiSk"]),
          i = f.intl.string(f.t.o47YZm);
        switch (n) {
          case b.wB.REJECTED:
            (t = f.intl.string(f.t["7YSJ6e"])), (i = f.intl.string(f.t.i05OUV));
            break;
          case b.wB.APPROVED:
            (t = f.intl.string(f.t.bv82GR)), (i = f.intl.string(f.t.D4OUHR));
            break;
          default:
            (t = f.intl.string(f.t["/wqiSk"])), (i = f.intl.string(f.t.o47YZm));
        }
        return (0, l.jsxs)("div", {
          className: v.emptyContainer,
          children: [
            (0, l.jsxs)("div", {
              className: v.emptyIcon,
              children: [
                (0, l.jsx)(m.Z, { className: v.star }),
                (0, l.jsx)(o.CheckmarkLargeIcon, {
                  size: "md",
                  color: "currentColor",
                  className: v.checkmark,
                }),
                (0, l.jsx)(u.Z, { className: v.plus }),
              ],
            }),
            (0, l.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: t,
            }),
            (0, l.jsx)(o.Text, {
              color: "header-secondary",
              className: v.emptyBody,
              variant: "text-sm/normal",
              children: i,
            }),
          ],
        });
      }
      n.Z = function (e) {
        var n;
        let {
            applicationStatus: t,
            guildJoinRequests: i,
            guildId: u,
            onScroll: m,
            listRef: E,
            atMaxMemberCapacity: T,
          } = e,
          I = (0, s.e7)([d.Z], () => d.Z.getGuild(u), [u]),
          S = (0, s.e7)([h.Z], () => h.Z.isFetching()),
          p = S ? [i.length + 25] : [i.length],
          M = (0, C.L)({ guildId: u }),
          R = null !== (n = (0, j.A)({ guildId: u })) && void 0 !== n ? n : 0,
          A = (0, c.Z)("guild-join-requests"),
          Z = (e) => {
            let { row: n } = e,
              a = i[n];
            return null == a
              ? (0, l.jsx)(g.h, {}, n)
              : (0, l.jsx)(
                  g.C,
                  {
                    className: r()({
                      [v.selected]: M === a,
                      [v.siblingSelected]: M === i[n - 1],
                    }),
                    guild: I,
                    guildJoinRequest: a,
                    onClick: () => x.Z.setSelectedGuildJoinRequest(u, a),
                    applicationStatus: t,
                    atMaxMemberCapacity: T,
                  },
                  ""
                    .concat(a.userId, "-")
                    .concat(a.applicationStatus, "-")
                    .concat(n),
                );
          };
        return S || 0 !== i.length
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                0 !== R &&
                  t === b.wB.SUBMITTED &&
                  (0, l.jsx)(o.Text, {
                    className: v.title,
                    variant: "text-xs/semibold",
                    color: "header-secondary",
                    children: (function (e, n) {
                      let t = n.toLocaleString();
                      switch (e) {
                        case b.wB.SUBMITTED:
                          return f.intl.formatToPlainString(f.t["s/46en"], {
                            count: t,
                          });
                        case b.wB.REJECTED:
                          return f.intl.formatToPlainString(f.t["9voQIC"], {
                            count: t,
                          });
                        case b.wB.APPROVED:
                          return f.intl.formatToPlainString(f.t["8hLZsb"], {
                            count: t,
                          });
                        default:
                          return "";
                      }
                    })(t, R).toUpperCase(),
                  }),
                (0, l.jsx)(a.bG, {
                  navigator: A,
                  children: (0, l.jsx)(a.SJ, {
                    children: (e) => {
                      let { ref: n, role: t, ...i } = e;
                      return (0, l.jsx)(
                        o.List,
                        {
                          innerRole: t,
                          innerAriaLabel: f.intl.string(f.t["9Oq93t"]),
                          ref: (e) => {
                            var t;
                            (E.current = e),
                              (n.current =
                                null !==
                                  (t =
                                    null == e ? void 0 : e.getScrollerNode()) &&
                                void 0 !== t
                                  ? t
                                  : null);
                          },
                          paddingTop: 0,
                          paddingBottom: 16,
                          sectionHeight: 0,
                          rowHeight: 64,
                          renderSection: N,
                          renderRow: Z,
                          sections: p,
                          onScroll: m,
                          fade: !0,
                          ...i,
                        },
                        "guild-application-review",
                      );
                    },
                  }),
                }),
              ],
            })
          : (0, l.jsx)(_, { status: t });
      };
    },
    762660: function (e, n, t) {
      t.d(n, {
        C: function () {
          return g;
        },
        h: function () {
          return f;
        },
      }),
        t(47120),
        t(411104);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(913527),
        o = t.n(s),
        c = t(481060),
        d = t(239091),
        u = t(598077),
        m = t(768581),
        x = t(693546),
        h = t(246364),
        b = t(388032),
        C = t(372819);
      function j(e) {
        let { icon: n, onClick: t, submitting: i, disabled: r } = e;
        return (0, l.jsx)(c.Clickable, {
          className: a()(C.actionIconContainer, { [C.disabled]: r || i }),
          onClick: t,
          children: i
            ? (0, l.jsx)(c.Dots, {
                className: C.icon,
                dotRadius: 2,
                themed: !0,
              })
            : (0, l.jsx)(n, {
                className: C.icon,
                size: "xxs",
                color: "currentColor",
              }),
        });
      }
      function g(e) {
        let {
            applicationStatus: n,
            guild: r,
            guildJoinRequest: s,
            className: g,
            onClick: f,
            atMaxMemberCapacity: v,
          } = e,
          [N, _] = i.useState(null),
          { user: E, createdAt: T } = s;
        if (null == E) throw Error("Missing user on this guild join request!");
        let I = i.useMemo(() => new u.Z(E), [E]),
          S = m.ZP.getUserAvatarURL(I),
          p = n === h.wB.SUBMITTED,
          M = i.useCallback(
            async (e, n) => {
              let { guildId: t, userId: l } = e;
              if (null == N) {
                _(n);
                try {
                  await x.Z.updateGuildJoinRequest(t, l, s.joinRequestId, n);
                } catch (e) {
                  (0, c.showToast)(
                    (0, c.createToast)(
                      b.intl.string(b.t.R0RpRU),
                      c.ToastType.FAILURE,
                    ),
                  ),
                    _(null);
                }
              }
            },
            [N, s.joinRequestId],
          ),
          R = async () => {
            await M(s, h.wB.APPROVED);
          },
          A = async () => {
            await M(s, h.wB.REJECTED);
          };
        return (0, l.jsxs)(c.Clickable, {
          className: a()(C.container, g),
          onClick: f,
          children: [
            (0, l.jsx)(c.Avatar, {
              src: S,
              size: c.AvatarSizes.SIZE_40,
              "aria-label": E.username,
              className: C.__invalid_spacer,
            }),
            (0, l.jsxs)("div", {
              className: C.userDetails,
              children: [
                (0, l.jsx)(c.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: E.username,
                }),
                (0, l.jsx)(c.Text, {
                  className: C.createdAt,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o()(T).format("lll"),
                }),
              ],
            }),
            p &&
              !v &&
              (0, l.jsx)(j, {
                icon: c.CheckmarkLargeIcon,
                onClick: R,
                submitting: N === h.wB.APPROVED,
                disabled: null != N && N !== h.wB.APPROVED,
              }),
            p &&
              (0, l.jsx)(j, {
                icon: c.XSmallIcon,
                onClick: A,
                submitting: N === h.wB.REJECTED,
                disabled: null != N && N !== h.wB.REJECTED,
              }),
            (0, l.jsx)(c.Clickable, {
              className: a()(C.overflowMenuContainer, {
                [C.disabled]: null != N,
              }),
              onClick: (e) => {
                (0, d.jW)(
                  e,
                  async () => {
                    let { default: e } = await t
                      .e("84259")
                      .then(t.bind(t, 597409));
                    return (n) => (0, l.jsx)(e, { ...n, guild: r, user: I });
                  },
                  { position: "bottom", align: "right" },
                );
              },
              children: (0, l.jsx)(c.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                className: C.icon,
                width: 18,
              }),
            }),
          ],
        });
      }
      function f() {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
          n = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, l.jsxs)("div", {
          className: C.placeholder,
          children: [
            (0, l.jsx)("div", { className: a()(C.placeholderAvatar) }),
            (0, l.jsxs)("div", {
              className: C.userDetails,
              children: [
                (0, l.jsx)("div", {
                  className: C.placeholderUsername,
                  style: { maxWidth: e },
                }),
                (0, l.jsx)("div", {
                  className: C.placeholderCreatedAt,
                  style: { maxWidth: n },
                }),
              ],
            }),
          ],
        });
      }
    },
    666233: function (e, n, t) {
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(594174),
        s = t(246364),
        o = t(489813),
        c = t(186078),
        d = t(73880),
        u = t(196345),
        m = t(707592),
        x = t(388032);
      n.Z = function (e) {
        let { formFields: n, user: t, showRequirements: h = !0 } = e;
        return null ==
          (0, i.e7)([a.default], () =>
            null != t ? t : a.default.getCurrentUser(),
          )
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                h &&
                  (0, l.jsx)(o.Ih, {
                    icon: r.ShieldIcon,
                    text: x.intl.string(x.t.v2z4c3),
                    meetsRequirement: !0,
                  }),
                n.map((e, n) =>
                  (function (e, n) {
                    switch (e.field_type) {
                      case s.QJ.TERMS:
                        return (0, l.jsx)(u.QC, { formField: e }, n);
                      case s.QJ.TEXT_INPUT:
                        return (0, l.jsx)(m.YJ, { formField: e }, n);
                      case s.QJ.PARAGRAPH:
                        return (0, l.jsx)(d.jn, { formField: e }, n);
                      case s.QJ.MULTIPLE_CHOICE:
                        return (0, l.jsx)(c.QH, { formField: e }, n);
                    }
                  })(e, n),
                ),
              ],
            });
      };
    },
    384433: function (e, n, t) {
      t.d(n, {
        e: function () {
          return i;
        },
      });
      var l,
        i,
        r = t(246364);
      ((l = i || (i = {})).ALL_MEMBERS = "ALL_MEMBERS"),
        (l[(l.PENDING = r.wB.SUBMITTED)] = "PENDING"),
        (l[(l.REJECTED = r.wB.REJECTED)] = "REJECTED");
    },
    575766: function (e, n, t) {
      t.d(n, {
        n: function () {
          return r;
        },
      });
      var l = t(192379),
        i = t(941028);
      function r(e) {
        l.useEffect(
          () => (
            i.k$(e),
            () => {
              i.kr(e);
            }
          ),
          [e],
        );
      }
    },
    901066: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(481060),
        c = t(906732),
        d = t(979264),
        u = t(252618),
        m = t(693546),
        x = t(328977),
        h = t(666233),
        b = t(360328),
        C = t(171368),
        j = t(598077),
        g = t(430824),
        f = t(51144),
        v = t(981631),
        N = t(308083),
        _ = t(388032),
        E = t(861683),
        T = t(125712);
      function I(e) {
        let { icon: n, label: t, onClick: i, disabled: r } = e;
        return (0, l.jsxs)(o.Clickable, {
          className: a()(E.actionButton, { [E.disabled]: r }),
          onClick: r ? v.dG4 : i,
          "aria-label": t,
          children: [
            (0, l.jsx)(n, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20,
            }),
            (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "none",
              children: t,
            }),
          ],
        });
      }
      function S(e) {
        let { user: n, guildId: t, joinRequest: i } = e,
          { analyticsLocations: r } = (0, c.ZP)(),
          {
            approveRequest: s,
            rejectRequest: u,
            handleOpenInterview: x,
            submitting: h,
          } = (0, b.s)(t, n.id, i.joinRequestId, i.interviewChannelId),
          j = () => {
            (0, C.openUserProfileModal)({
              userId: n.id,
              joinRequestId: i.joinRequestId,
              sourceAnalyticsLocations: r,
              analyticsLocation: {
                section: v.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: v.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: E.infoContainer,
              children: [
                (0, l.jsxs)("div", {
                  className: T.memberNameContainer,
                  children: [
                    (0, l.jsx)(o.Clickable, {
                      onClick: j,
                      className: a()(E.clickable, T.memberAvatar),
                      children: (0, l.jsx)(o.Avatar, {
                        src: n.getAvatarURL(t, 48),
                        "aria-label": n.username,
                        size: o.AvatarSizes.SIZE_48,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: T.memberNameAndTagContainer,
                      children: [
                        (0, l.jsxs)("div", {
                          className: T.memberNameTextContainer,
                          children: [
                            (0, l.jsx)(o.Clickable, {
                              onClick: j,
                              className: E.clickable,
                              children: (0, l.jsx)(o.Text, {
                                variant: "text-lg/medium",
                                children: null == n ? void 0 : n.globalName,
                              }),
                            }),
                            (0, l.jsx)(d.ZP, {
                              clan: null == n ? void 0 : n.clan,
                              userId: null == n ? void 0 : n.id,
                              contextGuildId: t,
                              badgeSize: N.NC.SIZE_16,
                              textVariant: "heading-md/semibold",
                              className: T.memberClanTag,
                              containerClassName: T.memberClanTagContainer,
                            }),
                          ],
                        }),
                        (0, l.jsx)(o.Clickable, {
                          onClick: j,
                          className: E.clickable,
                          children: (0, l.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: f.ZP.getUserTag(n),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(o.Clickable, {
                  className: T.closeAction,
                  onClick: () => m.Z.setSelectedGuildJoinRequest(t, null),
                  children: (0, l.jsx)(o.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: E.actionRow,
              children: [
                (0, l.jsx)(I, {
                  icon: o.CircleCheckIcon,
                  label: _.intl.string(_.t.BzjDQE),
                  onClick: s,
                  disabled: h,
                }),
                (0, l.jsx)(I, {
                  icon: o.CircleXIcon,
                  label: _.intl.string(_.t.hDtbs7),
                  onClick: u,
                  disabled: h,
                }),
                (0, l.jsx)(I, {
                  icon: o.ChatIcon,
                  label: _.intl.string(_.t.KQeYoK),
                  onClick: x,
                  disabled: h,
                }),
              ],
            }),
          ],
        });
      }
      function p(e) {
        let { guildId: n } = e,
          t = (0, x.L)({ guildId: n }),
          { user: r } = null != t ? t : {},
          c = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) &&
              void 0 !== e
              ? e
              : [];
          }, [null == t ? void 0 : t.formResponses]),
          d = i.useMemo(() => (null != r ? new j.Z(r) : null), [r]),
          m = (0, s.e7)([g.Z], () => g.Z.getGuild(n), [n]);
        return ((0, u.Tt)({
          subsection: _.intl.string(_.t.nqrK8f),
          location: null == m ? void 0 : m.name,
        }),
        null != t && null != m && null != d && null != r)
          ? (0, l.jsx)("section", {
              className: E.sidebar,
              children: (0, l.jsx)(o.Scroller, {
                children: (0, l.jsxs)("div", {
                  className: E.innerContainer,
                  children: [
                    (0, l.jsx)("div", {
                      className: E.cardContainer,
                      children: (0, l.jsx)(S, {
                        user: d,
                        guildId: n,
                        joinRequest: t,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: a()(E.cardContainer, E.responsesContainer),
                      children: (0, l.jsx)(h.Z, {
                        guildId: m.id,
                        formFields: c,
                        user: d,
                      }),
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
    },
    987491: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return D;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(913527),
        o = t.n(s),
        c = t(442837),
        d = t(481060),
        u = t(239091),
        m = t(700582),
        x = t(979264),
        h = t(693546),
        b = t(826581),
        C = t(246364),
        j = t(98493),
        g = t(328977),
        f = t(412222),
        v = t(223312),
        N = t(146463),
        _ = t(768762),
        E = t(171368),
        T = t(598077),
        I = t(430824),
        S = t(51144),
        p = t(388032),
        M = t(174598),
        R = t(676391),
        A = t(338648),
        Z = t(216412);
      function k(e) {
        let { sortOrder: n, onSortChange: t } = e;
        return (0, l.jsx)("thead", {
          children: (0, l.jsxs)("tr", {
            className: A.tableHeaderRow,
            children: [
              (0, l.jsx)("th", {
                className: M.headerCell,
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: p.intl.string(p.t.Es7n9f),
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(M.headerCell, Z.mediumCol),
                children: (0, l.jsxs)(d.Clickable, {
                  className: M.sortItem,
                  onClick: t,
                  children: [
                    (0, l.jsx)(d.Text, {
                      variant: "eyebrow",
                      color: "interactive-normal",
                      children: p.intl.string(p.t.EZ5QWF),
                    }),
                    n === C.Nw.TIMESTAMP_ASC
                      ? (0, l.jsx)(_.Z, {
                          className: M.sortIcon,
                          direction: _.Z.Directions.UP,
                        })
                      : (0, l.jsx)(_.Z, {
                          className: M.sortIcon,
                          direction: _.Z.Directions.DOWN,
                        }),
                  ],
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(M.headerCell, M.moreOptionsCol),
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: p.intl.string(p.t["5Q9xGh"]),
                }),
              }),
            ],
          }),
        });
      }
      let B = i.memo(function (e) {
          let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  (0, E.openUserProfileModal)({
                    userId: t.id,
                    joinRequestId: r,
                  });
              },
              [t, r],
            );
          return (0, l.jsxs)("div", {
            className: Z.memberNameContainer,
            children: [
              (0, l.jsx)(d.Clickable, {
                className: Z.memberAvatar,
                onClick: s,
                children: (0, l.jsx)(m.Z, { user: t }),
              }),
              (0, l.jsx)("div", {
                className: Z.memberName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: (0, l.jsxs)(d.Clickable, {
                    onClick: s,
                    className: Z.nameContainer,
                    children: [
                      t.globalName,
                      (0, l.jsx)(x.ZP, {
                        clan: null == t ? void 0 : t.clan,
                        userId: null == t ? void 0 : t.id,
                        contextGuildId: a,
                        containerClassName: Z.memberClanTag,
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: Z.memberGlobalName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  tag: "span",
                  children: (0, l.jsx)(d.Clickable, {
                    onClick: s,
                    tag: "span",
                    children: S.ZP.getUserTag(t),
                  }),
                }),
              }),
            ],
          });
        }),
        w = i.memo(function (e) {
          let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new T.Z(n.user), [n.user]),
            b = (0, g.L)({ guildId: s }),
            j = (0, c.e7)([I.Z], () => I.Z.getGuild(s)),
            f = x === C.wB.SUBMITTED,
            v = (e) => {
              (0, u.jW)(
                e,
                async () => {
                  let { default: e } = await t
                    .e("84259")
                    .then(t.bind(t, 597409));
                  return (n) => (0, l.jsx)(e, { ...n, guild: j, user: h });
                },
                { position: "bottom", align: "right" },
              );
            };
          return null == h
            ? null
            : (0, l.jsxs)("tr", {
                onClick: r,
                className: a()(Z.roundedRow, Z.memberRowContainer, {
                  [Z.selected]:
                    (null == b ? void 0 : b.joinRequestId) === n.joinRequestId,
                }),
                children: [
                  (0, l.jsx)("td", {
                    children: (0, l.jsx)(B, { joinRequest: n, user: h }),
                  }),
                  (0, l.jsx)("td", {
                    className: Z.mediumCol,
                    children: (0, l.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: o()(m).format("lll"),
                    }),
                  }),
                  (0, l.jsx)("td", {
                    className: M.moreOptionsCol,
                    children:
                      f &&
                      (0, l.jsx)(d.Tooltip, {
                        text: p.intl.string(p.t.x8Nn4O),
                        children: (e) => {
                          let { onMouseEnter: n, onMouseLeave: t } = e;
                          return (0, l.jsx)(d.Clickable, {
                            onMouseEnter: n,
                            onMouseLeave: t,
                            onClick: v,
                            className: a()(Z.button),
                            children: (0, l.jsx)(d.MoreVerticalIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 18,
                              height: 18,
                            }),
                          });
                        },
                      }),
                  }),
                ],
              });
        }),
        L = () => {
          let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            n = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
          return (0, l.jsxs)("tr", {
            className: a()(Z.roundedRow, Z.memberRowContainer),
            children: [
              (0, l.jsx)("td", {
                children: (0, l.jsxs)("div", {
                  className: Z.memberNameContainer,
                  children: [
                    (0, l.jsx)("div", {
                      className: a()(M.placeholderAvatar, Z.memberAvatar),
                    }),
                    (0, l.jsx)("div", {
                      className: Z.memberName,
                      children: (0, l.jsx)("div", {
                        className: M.placeholderText,
                        style: { width: e },
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: Z.memberGlobalName,
                      children: (0, l.jsx)("div", {
                        className: M.placeholderTextSmall,
                        style: { width: n },
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("td", {
                className: Z.mediumCol,
                children: (0, l.jsx)("div", {
                  className: M.placeholderText,
                  style: { width: t },
                }),
              }),
              (0, l.jsx)("td", { className: M.moreOptionsCol }),
            ],
          });
        };
      function D(e) {
        let { guildId: n, currentTab: t } = e,
          r = i.useRef(null),
          s = (0, c.e7)([I.Z], () => I.Z.getGuild(n)),
          o = (0, f.C)({ guildId: n }),
          u = (0, c.e7)([b.Z], () => b.Z.isFetching()),
          { guildJoinRequests: m } = (0, v.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o,
          }),
          { fetchNextPage: x } = (0, j.m)({ guildId: n, guildJoinRequests: m }),
          g = i.useCallback(async () => {
            let e =
              o === C.Nw.TIMESTAMP_ASC
                ? C.Nw.TIMESTAMP_DESC
                : C.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
          }, [o, n, x, t]);
        return null == s
          ? null
          : (0, l.jsx)("div", {
              className: R.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                className: R.horizatonalScroller,
                ref: r,
                orientation: "horizontal",
                children: (0, l.jsxs)("table", {
                  className: a()(M.table),
                  children: [
                    (0, l.jsx)(k, { sortOrder: o, onSortChange: g }),
                    (0, l.jsx)("tbody", {
                      children: u
                        ? [, , , , ,]
                            .fill(0)
                            .map((e, n) =>
                              (0, l.jsx)(L, {}, "placeholder-".concat(n)),
                            )
                        : 0 === m.length
                          ? (0, l.jsx)("td", {
                              colSpan: 3,
                              children: (0, l.jsx)(N.u, { status: t }),
                            })
                          : m.map((e) =>
                              (0, l.jsx)(
                                w,
                                {
                                  joinRequest: e,
                                  onSelect: () =>
                                    h.Z.setSelectedGuildJoinRequest(n, e),
                                },
                                e.joinRequestId,
                              ),
                            ),
                    }),
                  ],
                }),
              }),
            });
      }
    },
    995596: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(21260),
        o = t(780384),
        c = t(481060),
        d = t(410030),
        u = t(571728),
        m = t(984370),
        x = t(889711),
        h = t(384433),
        b = t(388032),
        C = t(998810);
      let j = (e) => [
          { id: h.e.ALL_MEMBERS, label: b.intl.string(b.t.NOOm1d) },
          {
            id: h.e.PENDING,
            label:
              0 === e
                ? b.intl.string(b.t["4eQVBA"])
                : b.intl.formatToPlainString(b.t["Wo+zLy"], { count: e }),
          },
          { id: h.e.REJECTED, label: b.intl.string(b.t.bSZklZ) },
        ],
        g = (e) => {
          let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
          return (0, l.jsx)(c.Menu, {
            navId: "members-tabs-overflow-menu",
            "aria-label": b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
              c.MenuGroup,
              {
                children: n.map((e) => {
                  let { id: n, label: r } = e;
                  return (0, l.jsx)(
                    c.MenuItem,
                    {
                      id: n,
                      label: r,
                      icon: n === t ? c.CircleCheckIcon : void 0,
                      action: () => i(n),
                    },
                    n,
                  );
                }),
              },
              "applications-overflow-tabs",
            ),
          });
        };
      function f(e) {
        let { onTabSelect: n, tabs: t, selectedTab: r } = e,
          s = (0, d.ZP)(),
          u = (0, o.wj)(s),
          m = i.useMemo(
            () =>
              null !=
              t.find((e) => {
                let { id: n } = e;
                return n === r;
              }),
            [r, t],
          ),
          x = m ? "header-primary" : u ? "text-muted" : "header-primary",
          h = m
            ? c.tokens.colors.HEADER_PRIMARY
            : u
              ? c.tokens.colors.TEXT_MUTED
              : c.tokens.colors.HEADER_PRIMARY;
        return (0, l.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(g, {
              selectedTab: r,
              onClose: i,
              tabs: t,
              onTabSelect: n,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsxs)(c.TabBar.Item, {
              ...e,
              id: "more",
              color: "text-muted",
              className: a()(C.more, { [C.selected]: m }),
              "aria-label": b.intl.string(b.t.UKOtz8),
              children: [
                (0, l.jsx)(c.Text, {
                  variant: "text-md/medium",
                  color: x,
                  children: b.intl.string(b.t.UKOtz8),
                }),
                t
                  ? (0, l.jsx)(c.ChevronSmallUpIcon, { size: "sm", color: h })
                  : (0, l.jsx)(c.ChevronSmallDownIcon, {
                      size: "sm",
                      color: h,
                    }),
              ],
            });
          },
        });
      }
      function v(e) {
        var n;
        let { guildId: t, currentTab: r, onTabSelect: a } = e,
          [o, d] = i.useState(0),
          h = i.useRef(null),
          g = i.useRef(o),
          v = j(
            null !== (n = (0, u.A)({ guildId: t })) && void 0 !== n ? n : 0,
          ),
          {
            lastVisibleIndex: N,
            onItemLayout: _,
            overflowItemsRef: E,
          } = (0, s.zP)({
            items: v,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: o - 200,
          }),
          T = i.useMemo(() => v.slice(0, N + 1), [N, v]),
          I = i.useMemo(() => v.slice(N + 1), [N, v]),
          S = i.useCallback(() => {
            var e;
            let n =
              null === (e = h.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != n &&
              g.current !== n.width &&
              (d(n.width), (g.current = n.width));
          }, []);
        return (
          i.useEffect(() => {
            let e = (0, x.pP)(S);
            return (
              (0, x.YP)(e, document.body), () => (0, x.UC)(e, document.body)
            );
          }, [S]),
          i.useEffect(() => {
            S();
          }, [S]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(m.Z.Divider, { className: C.divider }),
              (0, l.jsxs)("div", {
                className: C.tabsContainer,
                ref: h,
                children: [
                  (0, l.jsxs)("div", {
                    className: C.measurements,
                    children: [
                      v.map((e, n) =>
                        (0, l.jsx)(
                          s.AJ,
                          {
                            index: n,
                            onItemLayout: _,
                            children: (0, l.jsx)(c.TabBar.Item, {
                              id: e.id,
                              "aria-label": e.label,
                              children: e.label,
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, l.jsx)("div", {
                        ref: E,
                        children: (0, l.jsx)(f, {
                          tabs: I,
                          onTabSelect: a,
                          selectedTab: r,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(c.TabBar, {
                    "aria-label": b.intl.string(b.t.tcvVXF),
                    selectedItem: r,
                    type: "top-pill",
                    onItemSelect: a,
                    children: [
                      T.map((e) =>
                        (0, l.jsx)(
                          c.TabBar.Item,
                          {
                            id: e.id,
                            "aria-label": e.label,
                            children: e.label,
                          },
                          e.id,
                        ),
                      ),
                      0 !== I.length
                        ? (0, l.jsx)(f, {
                            tabs: I,
                            onTabSelect: a,
                            selectedTab: r,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    937283: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(100527),
        s = t(906732),
        o = t(613464),
        c = t(6025),
        d = t(433355),
        u = t(430824),
        m = t(981631),
        x = t(998810);
      function h(e) {
        let { guildId: n } = e,
          t = (0, r.e7)([u.Z], () => u.Z.getGuild(n)),
          { analyticsLocations: h } = (0, s.ZP)(a.Z.MEMBER_SAFETY_PAGE),
          b = (0, r.e7)([d.ZP], () => d.ZP.getGuildSidebarState(n), [n]),
          C = i.useCallback(() => {
            c.Z.closeGuildSidebar(n);
          }, [n]),
          j = null != b;
        return null != t && j && null != b
          ? (0, l.jsx)(s.Gt, {
              value: h,
              children: (0, l.jsx)("div", {
                className: x.__invalid_sidebarContainer,
                style: { width: m.$Y6 },
                children: (0, l.jsx)(o.Z, {
                  userId: b.details.userId,
                  guildId: b.details.guildId,
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
            return K;
          },
        }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(481060),
        c = t(100527),
        d = t(906732),
        u = t(111028),
        m = t(252618),
        x = t(189432),
        h = t(189357),
        b = t(693546),
        C = t(863249),
        j = t(63568),
        g = t(246364),
        f = t(697379),
        v = t(98493),
        N = t(412222),
        _ = t(223312),
        E = t(473403),
        T = t(984370),
        I = t(703656),
        S = t(171368),
        p = t(433355),
        M = t(592125),
        R = t(984933),
        A = t(430824),
        Z = t(944486),
        k = t(384433),
        B = t(241559),
        w = t(575766),
        L = t(901066),
        D = t(987491),
        P = t(305473),
        y = t(995596),
        G = t(937283),
        O = t(440857),
        U = t(707113),
        z = t(981631),
        F = t(176505),
        q = t(50493),
        H = t(388032),
        J = t(998810),
        Y = t(247627);
      function V(e) {
        let { guild: n, previousChannel: t, currentTab: r, onTabSelect: a } = e,
          s = (0, j.jS)(n.id, "Member Safety Page"),
          c = (0, f.W)(n.id),
          d = H.intl.string(H.t.oclz3d),
          x = H.intl.string(H.t.oclz3d);
        return (
          (0, m.Tt)({ location: n.name, subsection: d }),
          (0, l.jsxs)(T.Z, {
            className: J.header,
            innerClassname: J.__invalid_innerHeader,
            channelId: F.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
              null != t
                ? (0, l.jsx)(o.Button, {
                    className: J.returnButton,
                    size: o.Button.Sizes.SMALL,
                    look: o.Button.Looks.OUTLINED,
                    color: o.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, I.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(o.Text, {
                      className: J.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: H.intl.format(H.t.IX7oWl, {
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                i.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(E._, {
                                      className: J.returnIcon,
                                      guild: n,
                                      channel: t,
                                    }),
                                    (0, l.jsx)(u.Z, {
                                      children: (0, l.jsx)(o.Text, {
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
              (0, l.jsx)(T.Z.Icon, { icon: o.GroupIcon, "aria-hidden": !0 }),
              (0, l.jsx)(T.Z.Title, { children: x }),
              s &&
                c &&
                (0, l.jsx)(y.Z, {
                  guildId: n.id,
                  currentTab: r,
                  onTabSelect: a,
                }),
            ],
          })
        );
      }
      function K(e) {
        let { guildId: n } = e,
          [t, r] = i.useState(k.e.ALL_MEMBERS),
          u = (0, s.e7)([A.Z], () => A.Z.getGuild(n)),
          { analyticsLocations: m } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
          f = (0, N.C)({ guildId: n }),
          E = (0, j.jS)(n, "Member Safety Page"),
          { guildJoinRequests: T } = (0, _.j)({
            guildId: n,
            applicationStatus: "ALL_MEMBERS" === t ? g.wB.SUBMITTED : t,
            sortOrder: f,
          }),
          y = (0, B.n2)(n),
          H = (0, h.ms)(n, y),
          K = (0, s.e7)([Z.Z], () => Z.Z.getLastSelectedChannelId(n)),
          W = (0, s.e7)([M.Z], () => M.Z.getChannel(K)),
          Q = i.useRef(null);
        (0, w.n)(n);
        let { fetchNextPage: X } = (0, v.m)({
            guildId: n,
            guildJoinRequests: T,
          }),
          $ = i.useCallback(async () => {
            var e;
            if (t === k.e.ALL_MEMBERS) return;
            let n =
              null === (e = Q.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != n)
              n.scrollHeight - n.scrollTop - n.offsetHeight < 200 &&
                (await X(f, t));
          }, [t, t, f, X]),
          ee = i.useCallback(
            async (e) => {
              if (t !== e) {
                if (E) {
                  if (
                    (r(e),
                    b.Z.setSelectedGuildJoinRequest(n, null),
                    "ALL_MEMBERS" === e)
                  )
                    return;
                  await X(f, e);
                }
              }
            },
            [t, E, n, X, f],
          );
        i.useEffect(() => {
          if (!y && null != u) {
            var e;
            let n =
              null === (e = R.ZP.getDefaultChannel(u.id)) || void 0 === e
                ? void 0
                : e.id;
            (0, I.XU)(u.id, n);
          }
        }, [u, y]),
          i.useEffect(() => {
            E && C.ZP.fetchVerificationForm(n);
          }, [n, E]);
        let en = (0, s.e7)([p.ZP], () => null != p.ZP.getGuildSidebarState(n), [
            n,
          ]),
          et = i.useCallback(
            (e) => {
              (0, h.By)(e.guildId, !0)
                ? (0, x.r)(e.guildId, e.userId, F.oC.MEMBER_SAFETY, {
                    modViewPanel: q.k.INFO,
                  })
                : (0, S.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: m,
                    analyticsLocation: { section: z.jXE.MEMBER_SAFETY_PAGE },
                  });
            },
            [m],
          );
        if (null == u || !y) return null;
        let el =
            t === k.e.ALL_MEMBERS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(P.Z, { guild: u }),
                    (0, l.jsx)(U.Z, { guild: u, onMemberSelect: et }),
                  ],
                })
              : (0, l.jsx)(D.Z, { guildId: u.id, currentTab: t }),
          ei =
            t === k.e.ALL_MEMBERS
              ? (0, l.jsx)(G.Z, { guildId: u.id })
              : (0, l.jsx)(L.Z, { guildId: u.id });
        return (0, l.jsxs)(d.Gt, {
          value: m,
          children: [
            (0, l.jsxs)("div", {
              className: a()(Y.chat, J.page, { [Y.threadSidebarOpen]: en }),
              children: [
                (0, l.jsx)(V, {
                  guild: u,
                  previousChannel: W,
                  currentTab: t,
                  onTabSelect: ee,
                }),
                (0, l.jsx)(o.AdvancedScroller, {
                  onScroll: $,
                  className: a()(J.scroller),
                  ref: Q,
                  orientation: "vertical",
                  children: (0, l.jsx)("div", {
                    className: a()(Y.content, J.container),
                    children: el,
                  }),
                }),
                (0, l.jsx)(O.Z, { guildId: u.id }),
              ],
            }),
            H && ei,
          ],
        });
      }
    },
    707113: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(752877),
        o = t(399606),
        c = t(481060),
        d = t(201070),
        u = t(893966),
        m = t(472596),
        x = t(598948),
        h = t(428936),
        b = t(41586),
        C = t(676391);
      function j(e) {
        let { guild: n } = e,
          t = (0, d.$j)(n.id),
          i = (0, c.useSpring)({ height: t ? 3 : 0, config: s.config.stiff });
        return (0, l.jsx)("div", {
          className: C.loaderContainer,
          children: (0, l.jsx)(s.animated.div, {
            className: C.loaderBar,
            style: i,
          }),
        });
      }
      function g(e) {
        let { guild: n, className: t, onPageChange: r, onMemberSelect: s } = e,
          g = n.id,
          f = (0, o.e7)(
            [u.Z],
            () => u.Z.getEstimatedMemberSearchCountByGuildId(g),
            [g],
          ),
          v = (0, d.$j)(g),
          N = (0, d.M3)(g),
          _ = i.useCallback(
            (e) => {
              if (null != e) null == s || s(e);
            },
            [s],
          ),
          E = (0, m.xb)(N, v, f),
          T = i.useRef(null),
          I = i.useRef(null),
          S = i.useCallback(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, l.jsx)("div", {
          className: a()(C.mainTableContainer, t),
          children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(C.horizatonalScroller),
            ref: I,
            orientation: "horizontal",
            children: [
              (0, l.jsx)(b.Z, { guild: n, ref: T }),
              (0, l.jsx)(j, { guild: n }),
              (0, l.jsx)(x.Z, {
                guild: n,
                onSelectRow: _,
                searchState: E,
                onResetForNewMembers: S,
              }),
              E !== m.po.SUCCESS_STILL_INDEXING &&
                (0, l.jsx)(h.Z, { guildId: n.id, onPageChange: r }),
            ],
          }),
        });
      }
    },
    840814: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    506452: function (e, n, t) {
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
    343854: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    372819: function (e, n, t) {
      e.exports = {
        title: "title_a43b87",
        container: "container_a43b87",
        siblingSelected: "siblingSelected_a43b87",
        selected: "selected_a43b87",
        contextMenu: "contextMenu_a43b87",
        userDetails: "userDetails_a43b87",
        createdAt: "createdAt_a43b87",
        actionIconContainer: "actionIconContainer_a43b87 iconContainer_a43b87",
        overflowMenuContainer:
          "overflowMenuContainer_a43b87 iconContainer_a43b87",
        icon: "icon_a43b87",
        disabled: "disabled_a43b87",
        placeholder: "placeholder_a43b87",
        placeholderUsername: "placeholderUsername_a43b87",
        placeholderCreatedAt: "placeholderCreatedAt_a43b87",
        placeholderAvatar: "placeholderAvatar_a43b87",
        emptyContainer: "emptyContainer_a43b87",
        emptyIcon: "emptyIcon_a43b87",
        checkmark: "checkmark_a43b87",
        star: "star_a43b87",
        plus: "plus_a43b87",
        emptyBody: "emptyBody_a43b87",
      };
    },
    861683: function (e, n, t) {
      e.exports = {
        sidebar: "sidebar_bb5774",
        innerContainer: "innerContainer_bb5774",
        cardContainer: "cardContainer_bb5774",
        clickable: "clickable_bb5774",
        infoContainer: "infoContainer_bb5774",
        responsesContainer: "responsesContainer_bb5774",
        actionRow: "actionRow_bb5774",
        actionButton: "actionButton_bb5774",
        disabled: "disabled_bb5774",
      };
    },
    174598: function (e, n, t) {
      e.exports = {
        table: "table_b03ab6",
        headerCell: "headerCell_b03ab6",
        moreOptionsCol: "moreOptionsCol_b03ab6",
        sortItem: "sortItem_b03ab6",
        sortIcon: "sortIcon_b03ab6",
        placeholderText: "placeholderText_b03ab6",
        placeholderTextSmall: "placeholderTextSmall_b03ab6",
        placeholderAvatar: "placeholderAvatar_b03ab6",
      };
    },
    998810: function (e, n, t) {
      e.exports = {
        returnButton: "returnButton_d20375",
        returnButtonText: "returnButtonText_d20375",
        returnIcon: "returnIcon_d20375",
        container: "container_d20375",
        scroller: "scroller_d20375",
        page: "page_d20375",
        header: "header_d20375",
        measurements: "measurements_d20375",
        more: "more_d20375",
        selected: "selected_d20375",
        divider: "divider_d20375",
        tabsContainer: "tabsContainer_d20375",
      };
    },
    676391: function (e, n, t) {
      e.exports = {
        mainTableContainer: "mainTableContainer_e23072",
        horizatonalScroller: "horizatonalScroller_e23072",
        loaderContainer: "loaderContainer_e23072",
        loaderBar: "loaderBar_e23072",
      };
    },
  },
]);
//# sourceMappingURL=a1c6c23654a2e3253f7b.js.map
