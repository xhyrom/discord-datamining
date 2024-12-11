"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63430"],
  {
    852860: function (e, n, t) {
      t(47120);
      var l = t(200651),
        r = t(192379),
        i = t(752877),
        a = t(692547),
        o = t(481060),
        s = t(585483),
        c = t(981631),
        d = t(388032),
        u = t(840814);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: x,
            submitting: m,
            onReset: h,
            onSave: b,
            onSaveText: _,
            onResetText: C,
            onSaveButtonColor: j,
            disabled: g,
            saveButtonTooltip: f,
          } = e,
          v = r.useRef(null),
          [{ spring: p }, N] = (0, o.useSpring)(() => ({ spring: 0 }));
        r.useEffect(() => {
          function e() {
            N({ spring: 1, config: i.config.gentle }),
              N({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            s.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              s.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [N]);
        let S = p.to({
            range: [0, 1],
            output: [
              (0, o.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, o.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          T = p.to({
            range: [0, 1],
            output: [
              (0, o.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, o.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          E = p.to({
            range: [0, 1],
            output: [
              (0, o.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, o.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, l.jsx)(i.animated.div, {
          className: u.container,
          style: { backgroundColor: T },
          children: (0, l.jsx)("div", {
            className: u.flexContainer,
            ref: v,
            children: (0, l.jsxs)(o.FocusRingScope, {
              containerRef: v,
              children: [
                (0, l.jsx)("div", {
                  className: u.shrinkingContainer,
                  children: (0, l.jsx)(i.animated.div, {
                    className: u.message,
                    style: { color: null != x ? E : S },
                    children:
                      null !== (n = null != x ? x : t) && void 0 !== n
                        ? n
                        : d.intl.string(d.t.GP7JLC),
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: u.actions,
                  children: [
                    null != h &&
                      (0, l.jsx)(o.Button, {
                        className: u.resetButton,
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        onClick: h,
                        children: (0, l.jsx)(i.animated.span, {
                          style: { color: S },
                          children: null != C ? C : d.intl.string(d.t.yBZMsb),
                        }),
                      }),
                    null != b
                      ? (0, l.jsx)(o.Tooltip, {
                          text: f,
                          children: (e) =>
                            (0, l.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              color: null != j ? j : o.Button.Colors.GREEN,
                              submitting: m,
                              disabled: g,
                              onClick: b,
                              ...e,
                              children:
                                null != _ ? _ : d.intl.string(d.t.K344S0),
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
          return x;
        },
        n: function () {
          return m;
        },
      }),
        t(47120);
      var l = t(913527),
        r = t.n(l),
        i = t(544891),
        a = t(367907),
        o = t(434404),
        s = t(430824),
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
      async function x(e, n) {
        let t = new Set(e.features);
        t.has(d.oNc.COMMUNITY)
          ? n
            ? t.delete(d.oNc.RAID_ALERTS_DISABLED)
            : t.add(d.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await o.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function m(e, n, t, l) {
        let a = r()().add(l, "hours").toISOString();
        return await i.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? a : null,
            dms_disabled_until: t ? a : null,
          },
          rejectWithError: !1,
        });
      }
      async function h(e, n, t) {
        let l = s.Z.getGuild(e);
        return null == (null == l ? void 0 : l.getSafetyAlertsChannelId())
          ? null
          : await i.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
              rejectWithError: !1,
            });
      }
      async function b(e) {
        let n = s.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await i.tn.post({
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
          return s;
        },
      });
      var l = t(442837);
      t(467319);
      var r = t(496675),
        i = t(533244),
        a = t(487419),
        o = t(981631);
      function s(e) {
        let n = (0, l.e7)(
            [r.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.Z;
                return (
                  n.can(o.Plq.BAN_MEMBERS, e) ||
                  n.can(o.Plq.KICK_MEMBERS, e) ||
                  n.can(o.Plq.MANAGE_GUILD, e)
                );
              })(e, r.Z),
            [e],
          ),
          t = (0, l.e7)(
            [a.Z],
            () => (null != e ? a.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, i.i9)(t)) && n;
      }
      function c(e) {
        return (0, l.e7)(
          [r.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : r.Z;
              return n.can(o.Plq.MANAGE_GUILD, e);
            })(e, r.Z),
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
        r = t(192379),
        i = t(120356),
        a = t.n(i),
        o = t(831209),
        s = t(481060),
        c = t(367907),
        d = t(177862),
        u = t(981631),
        x = t(388032),
        m = t(506452);
      function h(e) {
        let { guildId: n, transitionState: t, onClose: i } = e,
          [h, b] = r.useState([]),
          [_, C] = r.useState(),
          j = [
            { text: x.intl.string(x.t["//3pvr"]), value: d.C2.DM_SPAM },
            { text: x.intl.string(x.t.SdVsio), value: d.C2.MENTION_SPAM },
            { text: x.intl.string(x.t.uTiSVF), value: d.C2.CHANNEL_SPAM },
            { text: x.intl.string(x.t.GQczU1), value: d.C2.SUS_NEW_MEMBERS },
            { text: x.intl.string(x.t.AAgqy8), value: d.C2.CHANGING_SETTINGS },
            { text: x.intl.string(x.t.ryPKb2), value: d.C2.OTHER },
          ];
        function g(e) {
          h.includes(e)
            ? b((n) => n.filter((n) => n !== e))
            : b((n) => [...n, e]);
        }
        return null == n
          ? (i(), null)
          : (0, l.jsxs)(s.ModalRoot, {
              transitionState: t,
              size: s.ModalSize.MEDIUM,
              children: [
                (0, l.jsx)(s.ModalHeader, {
                  separator: !0,
                  children: (0, l.jsxs)("div", {
                    className: m.headerContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: m.headerText,
                        children: [
                          (0, l.jsx)(s.LockIcon, {
                            size: "xs",
                            color: o.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, l.jsx)(s.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: x.intl.string(x.t.f5hd9P),
                          }),
                        ],
                      }),
                      (0, l.jsx)(s.Clickable, {
                        onClick: i,
                        children: (0, l.jsx)(s.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: m.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(s.ModalContent, {
                  children: (0, l.jsx)("div", {
                    className: m.options,
                    children: j.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: a()(m.optionContainer, {
                            [m.optionContainerOther]: t === d.C2.OTHER,
                          }),
                          children: [
                            (0, l.jsxs)(s.Clickable, {
                              className: m.optionText,
                              onClick: () => g(t),
                              children: [
                                (0, l.jsx)("div", {
                                  children: (0, l.jsx)(s.Checkbox, {
                                    type: s.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: h.includes(t),
                                    onChange: () => g(t),
                                  }),
                                }),
                                (0, l.jsx)(s.Text, {
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
                                className: m.textboxContainer,
                                children: (0, l.jsx)(s.TextArea, {
                                  className: m.serverLockdownReasonText,
                                  placeholder: x.intl.string(x.t["PAM+JS"]),
                                  onChange: (e) => C(e),
                                  value: _,
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
                (0, l.jsx)(s.ModalFooter, {
                  children: (0, l.jsx)(s.Button, {
                    onClick: function () {
                      (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: h,
                        raid_lockdown_feedback_other_reason: _,
                        guild_id: n,
                      }),
                        i();
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
            return f;
          },
        }),
        t(47120);
      var l = t(200651),
        r = t(192379),
        i = t(831209),
        a = t(442837),
        o = t(481060),
        s = t(688465),
        c = t(430824),
        d = t(626135),
        u = t(369994),
        x = t(162157),
        m = t(533244),
        h = t(487419),
        b = t(821312),
        _ = t(676770),
        C = t(981631),
        j = t(388032),
        g = t(343854);
      function f(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: f,
            analyticsData: v,
          } = e,
          p = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          N = !!(null == p ? void 0 : p.hasFeature(C.oNc.INVITES_DISABLED)),
          [S] = r.useState(!1),
          [T, E] = r.useState(_.Fl),
          I = (0, a.e7)([h.Z], () => h.Z.getGuildIncident(n)),
          M = (0, x.BT)(p),
          A = (0, m.SG)(I) || N,
          R = (0, m.sN)(I),
          [Z, k] = r.useState(A),
          [B, L] = r.useState(R),
          [w, y] = r.useState(!1),
          D = Z !== A || B !== R || w,
          P = N && !M;
        if (null == p) return f(), null;
        function G() {
          k((e) => !e);
        }
        return (0, l.jsxs)(o.ModalRoot, {
          transitionState: t,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, l.jsx)(o.ModalHeader, {
              separator: !0,
              children: (0, l.jsxs)("div", {
                className: g.headerContainer,
                children: [
                  (0, l.jsx)(o.LockIcon, {
                    size: "xs",
                    color: i.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, l.jsx)(o.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: j.intl.string(j.t.oCYAc3),
                  }),
                  (0, l.jsx)(s.Z, {}),
                ],
              }),
            }),
            (0, l.jsx)(o.ModalContent, {
              children: (0, l.jsxs)("div", {
                className: g.mainContainer,
                children: [
                  (0, l.jsx)(o.Select, {
                    placeholder: j.intl.string(j.t.vKYZzc),
                    options: (0, _.c1)(),
                    select: (e) => {
                      E(e), y(!0);
                    },
                    isSelected: (e) => e === T,
                    serialize: (e) => String(e),
                  }),
                  (0, l.jsxs)("div", {
                    className: g.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: g.pauseText,
                        children: [
                          (0, l.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: j.intl.string(j.t.Uwsjn5),
                          }),
                          (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.string(j.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, l.jsx)(o.Tooltip, {
                        text: j.intl.string(j.t["9GPbsb"]),
                        shouldShow: N,
                        children: (e) =>
                          (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(o.Switch, {
                              className: g.toggle,
                              onChange: G,
                              checked: Z,
                              disabled: P,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: g.pauseContainer,
                    children: [
                      (0, l.jsxs)("div", {
                        className: g.pauseText,
                        children: [
                          (0, l.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: j.intl.string(j.t.wrDmAw),
                          }),
                          (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.string(j.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, l.jsx)(o.Switch, {
                        className: g.toggle,
                        onChange: function () {
                          L((e) => !e);
                        },
                        checked: B,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsxs)(o.ModalFooter, {
              children: [
                (0, l.jsx)(o.Button, {
                  onClick: () => {
                    (A || R) && !Z && !B
                      ? ((0, u.n)(p.id, !1, !1),
                        (0, o.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, l.jsx)(b.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(p.id, Z, B, T);
                    let { source: e, alertType: t, messageId: r } = v;
                    d.default.track(
                      C.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: r,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, m.sO)(Z, B),
                        intervention_type_disabled: (0, m.lk)(Z, B),
                        duration: 60 * T,
                      },
                    ),
                      f();
                  },
                  color: o.Button.Colors.BRAND,
                  look: o.Button.Looks.FILLED,
                  submitting: S,
                  disabled: !D,
                  children: j.intl.string(j.t["pwm/z8"]),
                }),
                (0, l.jsx)(o.Button, {
                  onClick: f,
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  disabled: S,
                  children: j.intl.string(j.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    384433: function (e, n, t) {
      t.d(n, {
        e: function () {
          return r;
        },
      });
      var l,
        r,
        i = t(246364);
      ((l = r || (r = {})).ALL_MEMBERS = "ALL_MEMBERS"),
        (l[(l.PENDING = i.wB.SUBMITTED)] = "PENDING"),
        (l[(l.REJECTED = i.wB.REJECTED)] = "REJECTED");
    },
    575766: function (e, n, t) {
      t.d(n, {
        n: function () {
          return i;
        },
      });
      var l = t(192379),
        r = t(941028);
      function i(e) {
        l.useEffect(
          () => (
            r.k$(e),
            () => {
              r.kr(e);
            }
          ),
          [e],
        );
      }
    },
    901066: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var l = t(200651),
        r = t(192379),
        i = t(442837),
        a = t(252618),
        o = t(693546),
        s = t(863249),
        c = t(328977),
        d = t(853486),
        u = t(598077),
        x = t(430824),
        m = t(388032),
        h = t(861683);
      function b(e) {
        let { guildId: n } = e,
          t = (0, c.L)({ guildId: n }),
          { user: b } = null != t ? t : {},
          _ = r.useMemo(() => (null != b ? new u.Z(b) : null), [b]),
          C = (0, i.e7)([x.Z], () => x.Z.getGuild(n), [n]);
        return ((0, a.Tt)({
          subsection: m.intl.string(m.t.nqrK8f),
          location: null == C ? void 0 : C.name,
        }),
        r.useEffect(() => {
          s.ZP.fetchVerificationForm(n);
        }, [n]),
        null != t && null != C && null != _)
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", { className: h.sidebarSeparator }),
                (0, l.jsx)("section", {
                  className: h.sidebar,
                  children: (0, l.jsx)(d.Z, {
                    guild: C,
                    guildJoinRequest: t,
                    guildJoinRequestUser: _,
                    onClose: () => o.Z.setSelectedGuildJoinRequest(n, null),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    987491: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      });
      var l = t(200651),
        r = t(192379),
        i = t(120356),
        a = t.n(i),
        o = t(913527),
        s = t.n(o),
        c = t(442837),
        d = t(481060),
        u = t(239091),
        x = t(700582),
        m = t(979264),
        h = t(693546),
        b = t(826581),
        _ = t(246364),
        C = t(98493),
        j = t(328977),
        g = t(412222),
        f = t(223312),
        v = t(146463),
        p = t(768762),
        N = t(171368),
        S = t(598077),
        T = t(430824),
        E = t(51144),
        I = t(388032),
        M = t(174598),
        A = t(676391),
        R = t(338648),
        Z = t(216412);
      function k(e) {
        let { sortOrder: n, onSortChange: t } = e;
        return (0, l.jsx)("thead", {
          children: (0, l.jsxs)("tr", {
            className: R.tableHeaderRow,
            children: [
              (0, l.jsx)("th", {
                className: M.headerCell,
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: I.intl.string(I.t.Es7n9f),
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
                      children: I.intl.string(I.t.EZ5QWF),
                    }),
                    n === _.Nw.TIMESTAMP_ASC
                      ? (0, l.jsx)(p.Z, {
                          className: M.sortIcon,
                          direction: p.Z.Directions.UP,
                        })
                      : (0, l.jsx)(p.Z, {
                          className: M.sortIcon,
                          direction: p.Z.Directions.DOWN,
                        }),
                  ],
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(M.headerCell, Z.xsmallCol),
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: I.intl.string(I.t["5Q9xGh"]),
                }),
              }),
            ],
          }),
        });
      }
      let B = r.memo(function (e) {
          let { joinRequest: n, user: t } = e,
            { joinRequestId: i, guildId: a } = n,
            o = r.useCallback(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  (0, N.openUserProfileModal)({
                    userId: t.id,
                    joinRequestId: i,
                  });
              },
              [t, i],
            );
          return (0, l.jsxs)("div", {
            className: Z.memberNameContainer,
            children: [
              (0, l.jsx)(d.Clickable, {
                className: Z.memberAvatar,
                onClick: o,
                children: (0, l.jsx)(x.Z, { user: t }),
              }),
              (0, l.jsx)("div", {
                className: Z.memberName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: (0, l.jsxs)(d.Clickable, {
                    onClick: o,
                    className: Z.nameContainer,
                    children: [
                      t.globalName,
                      (0, l.jsx)(m.ZP, {
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
                    onClick: o,
                    tag: "span",
                    children: E.ZP.getUserTag(t),
                  }),
                }),
              }),
            ],
          });
        }),
        L = r.memo(function (e) {
          let { joinRequest: n, onSelect: i } = e,
            { guildId: o, createdAt: x, applicationStatus: m } = n,
            h = r.useMemo(() => new S.Z(n.user), [n.user]),
            b = (0, j.L)({ guildId: o }),
            C = (0, c.e7)([T.Z], () => T.Z.getGuild(o)),
            g = m === _.wB.SUBMITTED,
            f = (e) => {
              (0, u.jW)(
                e,
                async () => {
                  let { default: e } = await t
                    .e("84259")
                    .then(t.bind(t, 597409));
                  return (n) => (0, l.jsx)(e, { ...n, guild: C, user: h });
                },
                { position: "bottom", align: "right" },
              );
            };
          return null == h
            ? null
            : (0, l.jsxs)("tr", {
                onClick: i,
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
                      children: s()(x).format("lll"),
                    }),
                  }),
                  (0, l.jsx)("td", {
                    className: Z.xsmallCol,
                    children:
                      g &&
                      (0, l.jsx)(d.Tooltip, {
                        text: I.intl.string(I.t.x8Nn4O),
                        children: (e) => {
                          let { onMouseEnter: n, onMouseLeave: t } = e;
                          return (0, l.jsx)(d.Clickable, {
                            onMouseEnter: n,
                            onMouseLeave: t,
                            onClick: f,
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
        w = () => {
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
              (0, l.jsx)("td", { className: Z.xsmallCol }),
            ],
          });
        };
      function y(e) {
        let { guildId: n, currentTab: t } = e,
          i = r.useRef(null),
          o = (0, c.e7)([T.Z], () => T.Z.getGuild(n)),
          s = (0, g.C)({ guildId: n }),
          u = (0, c.e7)([b.Z], () => b.Z.isFetching()),
          { guildJoinRequests: x } = (0, f.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: s,
          }),
          { fetchNextPage: m } = (0, C.m)({ guildId: n, guildJoinRequests: x }),
          j = r.useCallback(async () => {
            let e =
              s === _.Nw.TIMESTAMP_ASC
                ? _.Nw.TIMESTAMP_DESC
                : _.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await m(e, t);
          }, [s, n, m, t]);
        return null == o
          ? null
          : (0, l.jsx)("div", {
              className: A.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                className: A.horizatonalScroller,
                ref: i,
                orientation: "horizontal",
                children: (0, l.jsxs)("table", {
                  className: a()(M.table),
                  children: [
                    (0, l.jsx)(k, { sortOrder: s, onSortChange: j }),
                    (0, l.jsx)("tbody", {
                      children: u
                        ? [, , , , ,]
                            .fill(0)
                            .map((e, n) =>
                              (0, l.jsx)(w, {}, "placeholder-".concat(n)),
                            )
                        : 0 === x.length
                          ? (0, l.jsx)("td", {
                              colSpan: 3,
                              children: (0, l.jsx)(v.u, { status: t }),
                            })
                          : x.map((e) =>
                              (0, l.jsx)(
                                L,
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
          return f;
        },
      }),
        t(47120);
      var l = t(200651),
        r = t(192379),
        i = t(120356),
        a = t.n(i),
        o = t(21260),
        s = t(780384),
        c = t(481060),
        d = t(410030),
        u = t(571728),
        x = t(984370),
        m = t(889711),
        h = t(384433),
        b = t(388032),
        _ = t(998810);
      let C = (e) => [
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
        j = (e) => {
          let { tabs: n, selectedTab: t, onTabSelect: r, onClose: i } = e;
          return (0, l.jsx)(c.Menu, {
            navId: "members-tabs-overflow-menu",
            "aria-label": b.intl.string(b.t.riPnr6),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, l.jsx)(
              c.MenuGroup,
              {
                children: n.map((e) => {
                  let { id: n, label: i } = e;
                  return (0, l.jsx)(
                    c.MenuItem,
                    {
                      id: n,
                      label: i,
                      icon: n === t ? c.CircleCheckIcon : void 0,
                      action: () => r(n),
                    },
                    n,
                  );
                }),
              },
              "applications-overflow-tabs",
            ),
          });
        };
      function g(e) {
        let { onTabSelect: n, tabs: t, selectedTab: i } = e,
          o = (0, d.ZP)(),
          u = (0, s.wj)(o),
          x = r.useMemo(
            () =>
              null !=
              t.find((e) => {
                let { id: n } = e;
                return n === i;
              }),
            [i, t],
          ),
          m = x ? "header-primary" : u ? "text-muted" : "header-primary",
          h = x
            ? c.tokens.colors.HEADER_PRIMARY
            : u
              ? c.tokens.colors.TEXT_MUTED
              : c.tokens.colors.HEADER_PRIMARY;
        return (0, l.jsx)(c.Popout, {
          renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, l.jsx)(j, {
              selectedTab: i,
              onClose: r,
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
              className: a()(_.more, { [_.selected]: x }),
              "aria-label": b.intl.string(b.t.UKOtz8),
              children: [
                (0, l.jsx)(c.Text, {
                  variant: "text-md/medium",
                  color: m,
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
      function f(e) {
        var n;
        let { guildId: t, currentTab: i, onTabSelect: a } = e,
          [s, d] = r.useState(0),
          h = r.useRef(null),
          j = r.useRef(s),
          f = C(
            null !== (n = (0, u.A)({ guildId: t })) && void 0 !== n ? n : 0,
          ),
          {
            lastVisibleIndex: v,
            onItemLayout: p,
            overflowItemsRef: N,
          } = (0, o.zP)({
            items: f,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: s - 200,
          }),
          S = r.useMemo(() => f.slice(0, v + 1), [v, f]),
          T = r.useMemo(() => f.slice(v + 1), [v, f]),
          E = r.useCallback(() => {
            var e;
            let n =
              null === (e = h.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != n &&
              j.current !== n.width &&
              (d(n.width), (j.current = n.width));
          }, []);
        return (
          r.useEffect(() => {
            let e = (0, m.pP)(E);
            return (
              (0, m.YP)(e, document.body), () => (0, m.UC)(e, document.body)
            );
          }, [E]),
          r.useEffect(() => {
            E();
          }, [E]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(x.Z.Divider, { className: _.divider }),
              (0, l.jsxs)("div", {
                className: _.tabsContainer,
                ref: h,
                children: [
                  (0, l.jsxs)("div", {
                    className: _.measurements,
                    children: [
                      f.map((e, n) =>
                        (0, l.jsx)(
                          o.AJ,
                          {
                            index: n,
                            onItemLayout: p,
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
                        ref: N,
                        children: (0, l.jsx)(g, {
                          tabs: T,
                          onTabSelect: a,
                          selectedTab: i,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(c.TabBar, {
                    "aria-label": b.intl.string(b.t.tcvVXF),
                    selectedItem: i,
                    type: "top-pill",
                    onItemSelect: a,
                    children: [
                      S.map((e) =>
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
                      0 !== T.length
                        ? (0, l.jsx)(g, {
                            tabs: T,
                            onTabSelect: a,
                            selectedTab: i,
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
        r = t(192379),
        i = t(442837),
        a = t(100527),
        o = t(906732),
        s = t(613464),
        c = t(6025),
        d = t(433355),
        u = t(430824),
        x = t(981631),
        m = t(998810);
      function h(e) {
        let { guildId: n } = e,
          t = (0, i.e7)([u.Z], () => u.Z.getGuild(n)),
          { analyticsLocations: h } = (0, o.ZP)(a.Z.MEMBER_SAFETY_PAGE),
          b = (0, i.e7)([d.ZP], () => d.ZP.getGuildSidebarState(n), [n]),
          _ = r.useCallback(() => {
            c.Z.closeGuildSidebar(n);
          }, [n]),
          C = null != b;
        return null != t && C && null != b
          ? (0, l.jsx)(o.Gt, {
              value: h,
              children: (0, l.jsx)("div", {
                className: m.__invalid_sidebarContainer,
                style: { width: x.$Y6 },
                children: (0, l.jsx)(s.Z, {
                  userId: b.details.userId,
                  guildId: b.details.guildId,
                  onClose: _,
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
            return W;
          },
        }),
        t(47120);
      var l = t(200651),
        r = t(192379),
        i = t(120356),
        a = t.n(i),
        o = t(442837),
        s = t(481060),
        c = t(100527),
        d = t(906732),
        u = t(111028),
        x = t(252618),
        m = t(189432),
        h = t(189357),
        b = t(693546),
        _ = t(63568),
        C = t(246364),
        j = t(697379),
        g = t(98493),
        f = t(412222),
        v = t(223312),
        p = t(473403),
        N = t(984370),
        S = t(703656),
        T = t(171368),
        E = t(433355),
        I = t(592125),
        M = t(984933),
        A = t(430824),
        R = t(944486),
        Z = t(384433),
        k = t(241559),
        B = t(575766),
        L = t(901066),
        w = t(987491),
        y = t(305473),
        D = t(995596),
        P = t(937283),
        G = t(440857),
        O = t(707113),
        U = t(981631),
        z = t(176505),
        F = t(50493),
        H = t(388032),
        q = t(998810),
        K = t(247627);
      function Y(e) {
        let { guild: n, previousChannel: t, currentTab: i, onTabSelect: a } = e,
          o = (0, _.jS)(n.id, "Member Safety Page"),
          c = (0, j.W)(n.id),
          d = H.intl.string(H.t.oclz3d),
          m = H.intl.string(H.t.oclz3d);
        return (
          (0, x.Tt)({ location: n.name, subsection: d }),
          (0, l.jsxs)(N.Z, {
            className: q.header,
            innerClassname: q.__invalid_innerHeader,
            channelId: z.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
              null != t
                ? (0, l.jsx)(s.Button, {
                    className: q.returnButton,
                    size: s.Button.Sizes.SMALL,
                    look: s.Button.Looks.OUTLINED,
                    color: s.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, S.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(s.Text, {
                      className: q.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: H.intl.format(H.t.IX7oWl, {
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                r.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(p._, {
                                      className: q.returnIcon,
                                      guild: n,
                                      channel: t,
                                    }),
                                    (0, l.jsx)(u.Z, {
                                      children: (0, l.jsx)(s.Text, {
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
              (0, l.jsx)(N.Z.Icon, { icon: s.GroupIcon, "aria-hidden": !0 }),
              (0, l.jsx)(N.Z.Title, { children: m }),
              o &&
                c &&
                (0, l.jsx)(D.Z, {
                  guildId: n.id,
                  currentTab: i,
                  onTabSelect: a,
                }),
            ],
          })
        );
      }
      function W(e) {
        let { guildId: n } = e,
          [t, i] = r.useState(Z.e.ALL_MEMBERS),
          u = (0, o.e7)([A.Z], () => A.Z.getGuild(n)),
          { analyticsLocations: x } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
          _ = (0, f.C)({ guildId: n }),
          { guildJoinRequests: j } = (0, v.j)({
            guildId: n,
            applicationStatus: "ALL_MEMBERS" === t ? C.wB.SUBMITTED : t,
            sortOrder: _,
          }),
          p = (0, k.n2)(n),
          N = (0, h.ms)(n, p),
          D = (0, o.e7)([R.Z], () => R.Z.getLastSelectedChannelId(n)),
          H = (0, o.e7)([I.Z], () => I.Z.getChannel(D)),
          W = r.useRef(null);
        (0, B.n)(n);
        let { fetchNextPage: J } = (0, g.m)({
            guildId: n,
            guildJoinRequests: j,
          }),
          V = r.useCallback(async () => {
            var e;
            if (t === Z.e.ALL_MEMBERS) return;
            let n =
              null === (e = W.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != n)
              n.scrollHeight - n.scrollTop - n.offsetHeight < 200 &&
                (await J(_, t));
          }, [t, t, _, J]),
          X = r.useCallback(
            async (e) => {
              if (t !== e) {
                if (
                  (i(e),
                  b.Z.setSelectedGuildJoinRequest(n, null),
                  "ALL_MEMBERS" !== e)
                )
                  await J(_, e);
              }
            },
            [t, _, n, J],
          );
        r.useEffect(() => {
          if (!p && null != u) {
            var e;
            let n =
              null === (e = M.ZP.getDefaultChannel(u.id)) || void 0 === e
                ? void 0
                : e.id;
            (0, S.XU)(u.id, n);
          }
        }, [u, p]);
        let Q = (0, o.e7)([E.ZP], () => null != E.ZP.getGuildSidebarState(n), [
            n,
          ]),
          $ = r.useCallback(
            (e) => {
              (0, h.By)(e.guildId, !0)
                ? (0, m.r)(e.guildId, e.userId, z.oC.MEMBER_SAFETY, {
                    modViewPanel: F.k.INFO,
                  })
                : (0, T.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: x,
                    analyticsLocation: { section: U.jXE.MEMBER_SAFETY_PAGE },
                  });
            },
            [x],
          );
        if (null == u || !p) return null;
        let ee =
            t === Z.e.ALL_MEMBERS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(y.Z, { guild: u }),
                    (0, l.jsx)(O.Z, { guild: u, onMemberSelect: $ }),
                  ],
                })
              : (0, l.jsx)(w.Z, { guildId: u.id, currentTab: t }),
          en =
            t === Z.e.ALL_MEMBERS
              ? (0, l.jsx)(P.Z, { guildId: u.id })
              : (0, l.jsx)(L.Z, { guildId: u.id });
        return (0, l.jsxs)(d.Gt, {
          value: x,
          children: [
            (0, l.jsxs)("div", {
              className: a()(K.chat, q.page, { [K.threadSidebarOpen]: Q }),
              children: [
                (0, l.jsx)(Y, {
                  guild: u,
                  previousChannel: H,
                  currentTab: t,
                  onTabSelect: X,
                }),
                (0, l.jsx)(s.AdvancedScroller, {
                  onScroll: V,
                  className: a()(q.scroller),
                  ref: W,
                  orientation: "vertical",
                  children: (0, l.jsx)("div", {
                    className: a()(K.content, q.container),
                    children: ee,
                  }),
                }),
                (0, l.jsx)(G.Z, { guildId: u.id }),
              ],
            }),
            N && en,
          ],
        });
      }
    },
    707113: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
        },
      });
      var l = t(200651),
        r = t(192379),
        i = t(120356),
        a = t.n(i),
        o = t(752877),
        s = t(399606),
        c = t(481060),
        d = t(201070),
        u = t(893966),
        x = t(472596),
        m = t(598948),
        h = t(428936),
        b = t(41586),
        _ = t(676391);
      function C(e) {
        let { guild: n } = e,
          t = (0, d.$j)(n.id),
          r = (0, c.useSpring)({ height: t ? 3 : 0, config: o.config.stiff });
        return (0, l.jsx)("div", {
          className: _.loaderContainer,
          children: (0, l.jsx)(o.animated.div, {
            className: _.loaderBar,
            style: r,
          }),
        });
      }
      function j(e) {
        let { guild: n, className: t, onPageChange: i, onMemberSelect: o } = e,
          j = n.id,
          g = (0, s.e7)(
            [u.Z],
            () => u.Z.getEstimatedMemberSearchCountByGuildId(j),
            [j],
          ),
          f = (0, d.$j)(j),
          v = (0, d.M3)(j),
          p = r.useCallback(
            (e) => {
              if (null != e) null == o || o(e);
            },
            [o],
          ),
          N = (0, x.xb)(v, f, g),
          S = r.useRef(null),
          T = r.useRef(null),
          E = r.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, l.jsx)("div", {
          className: a()(_.mainTableContainer, t),
          children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(_.horizatonalScroller),
            ref: T,
            orientation: "horizontal",
            children: [
              (0, l.jsx)(b.Z, { guild: n, ref: S }),
              (0, l.jsx)(C, { guild: n }),
              (0, l.jsx)(m.Z, {
                guild: n,
                onSelectRow: p,
                searchState: N,
                onResetForNewMembers: E,
              }),
              N !== x.po.SUCCESS_STILL_INDEXING &&
                (0, l.jsx)(h.Z, { guildId: n.id, onPageChange: i }),
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
    364068: function (e, n, t) {
      e.exports = {
        container: "container_c61d8c",
        wrapper: "wrapper_c61d8c",
        headerSubtext: "headerSubtext_c61d8c",
        inline: "inline_c61d8c",
        icon: "icon_c61d8c",
        iconInteractive: "iconInteractive_c61d8c icon_c61d8c",
        iconApproved: "iconApproved_c61d8c",
        buttons: "buttons_c61d8c",
        overflow: "overflow_c61d8c",
        rejectionReason: "rejectionReason_c61d8c",
        actionedByUser: "actionedByUser_c61d8c",
      };
    },
    64371: function (e, n, t) {
      e.exports = {
        container: "container_a84246",
        avatar: "avatar_a84246",
        username: "username_a84246",
      };
    },
    337424: function (e, n, t) {
      e.exports = {
        container: "container_cc034a",
        disabledFormRenderer: "disabledFormRenderer_cc034a",
        actionButtons: "actionButtons_cc034a",
      };
    },
    861683: function (e, n, t) {
      e.exports = {
        sidebar: "sidebar_bb5774",
        sidebarSeparator: "sidebarSeparator_bb5774",
      };
    },
    174598: function (e, n, t) {
      e.exports = {
        table: "table_b03ab6",
        headerCell: "headerCell_b03ab6",
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
//# sourceMappingURL=16c8b7f41714f8fa29a1.js.map
