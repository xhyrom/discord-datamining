"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44400"],
  {
    852860: function (e, n, t) {
      t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(666912),
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
            onSave: C,
            onSaveText: j,
            onResetText: b,
            onSaveButtonColor: g,
            disabled: f,
            saveButtonTooltip: N,
          } = e,
          _ = i.useRef(null),
          [{ spring: v }, E] = (0, s.useSpring)(() => ({ spring: 0 }));
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
        let T = v.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          I = v.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          S = v.to({
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
            ref: _,
            children: (0, l.jsxs)(s.FocusRingScope, {
              containerRef: _,
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
                          children: null != b ? b : d.intl.string(d.t.yBZMsb),
                        }),
                      }),
                    null != C
                      ? (0, l.jsx)(s.Tooltip, {
                          text: N,
                          children: (e) =>
                            (0, l.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != g ? g : s.Button.Colors.GREEN,
                              submitting: x,
                              disabled: f,
                              onClick: C,
                              ...e,
                              children:
                                null != j ? j : d.intl.string(d.t.K344S0),
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
          return C;
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
      async function C(e) {
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
          [h, C] = i.useState([]),
          [j, b] = i.useState(),
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
            ? C((n) => n.filter((n) => n !== e))
            : C((n) => [...n, e]);
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
                                  onChange: (e) => b(e),
                                  value: j,
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
                        raid_lockdown_feedback_other_reason: j,
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
            return N;
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
        C = t(821312),
        j = t(676770),
        b = t(981631),
        g = t(388032),
        f = t(343854);
      function N(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: N,
            analyticsData: _,
          } = e,
          v = (0, a.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          E = !!(null == v ? void 0 : v.hasFeature(b.oNc.INVITES_DISABLED)),
          [T] = i.useState(!1),
          [I, S] = i.useState(j.Fl),
          p = (0, a.e7)([h.Z], () => h.Z.getGuildIncident(n)),
          M = (0, m.BT)(v),
          R = (0, x.SG)(p) || E,
          A = (0, x.sN)(p),
          [Z, k] = i.useState(R),
          [L, B] = i.useState(A),
          [P, w] = i.useState(!1),
          D = Z !== R || L !== A || P,
          G = E && !M;
        if (null == v) return N(), null;
        function y() {
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
                    options: (0, j.c1)(),
                    select: (e) => {
                      S(e), w(!0);
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
                              onChange: y,
                              checked: Z,
                              disabled: G,
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
                          B((e) => !e);
                        },
                        checked: L,
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
                    (R || A) && !Z && !L
                      ? ((0, u.n)(v.id, !1, !1),
                        (0, s.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, l.jsx)(C.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(v.id, Z, L, I);
                    let { source: e, alertType: t, messageId: i } = _;
                    d.default.track(
                      b.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: i,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, x.sO)(Z, L),
                        intervention_type_disabled: (0, x.lk)(Z, L),
                        duration: 60 * I,
                      },
                    ),
                      N();
                  },
                  color: s.Button.Colors.BRAND,
                  look: s.Button.Looks.FILLED,
                  submitting: T,
                  disabled: !D,
                  children: g.intl.string(g.t["pwm/z8"]),
                }),
                (0, l.jsx)(s.Button, {
                  onClick: N,
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
    666233: function (e, n, t) {
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(594174),
        s = t(63568),
        o = t(246364),
        c = t(489813),
        d = t(186078),
        u = t(73880),
        m = t(196345),
        x = t(707592),
        h = t(476770),
        C = t(483760),
        j = t(465588),
        b = t(644929),
        g = t(814960),
        f = t(388032);
      n.Z = function (e) {
        let {
            guildId: n,
            formFields: t,
            user: N,
            showRequirements: _ = !0,
          } = e,
          v = (0, i.e7)([a.default], () =>
            null != N ? N : a.default.getCurrentUser(),
          ),
          E = (0, s.jS)(n, "DisabledFormRenderer");
        if (null == v) return null;
        let T = E ? h.Ih : c.Ih;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            _ &&
              (0, l.jsx)(T, {
                icon: r.ShieldIcon,
                text: f.intl.string(f.t.v2z4c3),
                meetsRequirement: !0,
              }),
            t.map((e, n) =>
              E
                ? (function (e, n) {
                    switch (e.field_type) {
                      case o.QJ.TERMS:
                        return (0, l.jsx)(b.QC, { formField: e }, n);
                      case o.QJ.TEXT_INPUT:
                        return (0, l.jsx)(g.YJ, { formField: e }, n);
                      case o.QJ.PARAGRAPH:
                        return (0, l.jsx)(j.jn, { formField: e }, n);
                      case o.QJ.MULTIPLE_CHOICE:
                        return (0, l.jsx)(C.QH, { formField: e }, n);
                    }
                  })(e, n)
                : (function (e, n) {
                    switch (e.field_type) {
                      case o.QJ.TERMS:
                        return (0, l.jsx)(m.QC, { formField: e }, n);
                      case o.QJ.TEXT_INPUT:
                        return (0, l.jsx)(x.YJ, { formField: e }, n);
                      case o.QJ.PARAGRAPH:
                        return (0, l.jsx)(u.jn, { formField: e }, n);
                      case o.QJ.MULTIPLE_CHOICE:
                        return (0, l.jsx)(d.QH, { formField: e }, n);
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
          return R;
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
        x = t(246364),
        h = t(328977),
        C = t(666233),
        j = t(360328),
        b = t(171368),
        g = t(598077),
        f = t(430824),
        N = t(51144),
        _ = t(981631),
        v = t(308083),
        E = t(388032),
        T = t(861683),
        I = t(125712);
      function S(e) {
        let { icon: n, label: t, onClick: i, disabled: r } = e;
        return (0, l.jsxs)(o.Clickable, {
          className: a()(T.actionButton, { [T.disabled]: r }),
          onClick: r ? _.dG4 : i,
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
      function p(e) {
        let { user: n, guildId: t, joinRequest: i } = e,
          { analyticsLocations: r } = (0, c.ZP)(),
          s = () => {
            (0, b.openUserProfileModal)({
              userId: n.id,
              joinRequestId: i.joinRequestId,
              sourceAnalyticsLocations: r,
              analyticsLocation: {
                section: _.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                object: _.qAy.JOIN_REQUEST,
              },
            });
          };
        return (0, l.jsxs)("div", {
          className: T.infoContainer,
          children: [
            (0, l.jsxs)("div", {
              className: I.memberNameContainer,
              children: [
                (0, l.jsx)(o.Clickable, {
                  onClick: s,
                  className: a()(T.clickable, I.memberAvatar),
                  children: (0, l.jsx)(o.Avatar, {
                    src: n.getAvatarURL(t, 48),
                    "aria-label": n.username,
                    size: o.AvatarSizes.SIZE_48,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: I.memberNameAndTagContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: I.memberNameTextContainer,
                      children: [
                        (0, l.jsx)(o.Clickable, {
                          onClick: s,
                          className: T.clickable,
                          children: (0, l.jsx)(o.Text, {
                            variant: "text-lg/medium",
                            children: null == n ? void 0 : n.globalName,
                          }),
                        }),
                        (0, l.jsx)(d.ZP, {
                          primaryGuild: null == n ? void 0 : n.primaryGuild,
                          userId: null == n ? void 0 : n.id,
                          contextGuildId: t,
                          badgeSize: v.NC.SIZE_16,
                          textVariant: "heading-md/semibold",
                          className: I.memberClanTag,
                          containerClassName: I.memberClanTagContainer,
                        }),
                      ],
                    }),
                    (0, l.jsx)(o.Clickable, {
                      onClick: s,
                      className: T.clickable,
                      children: (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-normal",
                        children: N.ZP.getUserTag(n),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(o.Clickable, {
              className: I.closeAction,
              onClick: () => m.Z.setSelectedGuildJoinRequest(t, null),
              children: (0, l.jsx)(o.XSmallIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function M(e) {
        let { user: n, guildId: t, joinRequest: i } = e,
          {
            approveRequest: r,
            rejectRequest: a,
            handleOpenInterview: s,
            submitting: c,
          } = (0, j.s)(t, n.id, i.joinRequestId, i.interviewChannelId);
        return (0, l.jsxs)("div", {
          className: T.actionRow,
          children: [
            (0, l.jsx)(S, {
              icon: o.CircleCheckIcon,
              label: E.intl.string(E.t.BzjDQE),
              onClick: r,
              disabled: c,
            }),
            (0, l.jsx)(S, {
              icon: o.CircleXIcon,
              label: E.intl.string(E.t.hDtbs7),
              onClick: a,
              disabled: c,
            }),
            (0, l.jsx)(S, {
              icon: o.ChatIcon,
              label: E.intl.string(E.t.KQeYoK),
              onClick: s,
              disabled: c,
            }),
          ],
        });
      }
      function R(e) {
        let { guildId: n } = e,
          t = (0, h.L)({ guildId: n }),
          { user: r } = null != t ? t : {},
          c = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.formResponses) &&
              void 0 !== e
              ? e
              : [];
          }, [null == t ? void 0 : t.formResponses]),
          d = i.useMemo(() => (null != r ? new g.Z(r) : null), [r]),
          m = (0, s.e7)([f.Z], () => f.Z.getGuild(n), [n]);
        return ((0, u.Tt)({
          subsection: E.intl.string(E.t.nqrK8f),
          location: null == m ? void 0 : m.name,
        }),
        null != t && null != m && null != d && null != r)
          ? (0, l.jsx)("section", {
              className: T.sidebar,
              children: (0, l.jsx)(o.Scroller, {
                children: (0, l.jsxs)("div", {
                  className: T.innerContainer,
                  children: [
                    (0, l.jsxs)("div", {
                      className: T.cardContainer,
                      children: [
                        (0, l.jsx)(p, { user: d, guildId: n, joinRequest: t }),
                        t.applicationStatus === x.wB.SUBMITTED &&
                          (0, l.jsx)(M, {
                            user: d,
                            guildId: n,
                            joinRequest: t,
                          }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: a()(T.cardContainer, T.responsesContainer),
                      children: (0, l.jsx)(C.Z, {
                        guildId: m.id,
                        formFields: c,
                        user: d,
                        showRequirements: !1,
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
          return w;
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
        C = t(826581),
        j = t(246364),
        b = t(98493),
        g = t(328977),
        f = t(412222),
        N = t(223312),
        _ = t(768762),
        v = t(171368),
        E = t(598077),
        T = t(430824),
        I = t(51144),
        S = t(388032),
        p = t(174598),
        M = t(676391),
        R = t(338648),
        A = t(216412);
      function Z(e) {
        let { status: n } = e;
        return (0, l.jsxs)("div", {
          className: p.emptyContainer,
          children: [
            (0, l.jsx)(d.CheckmarkLargeIcon, {
              size: "md",
              color: "currentColor",
              className: p.checkmark,
            }),
            (0, l.jsx)(d.Heading, {
              variant: "heading-md/medium",
              children:
                n === j.wB.REJECTED
                  ? S.intl.string(S.t["7YSJ6e"])
                  : S.intl.string(S.t["/wqiSk"]),
            }),
            (0, l.jsx)(d.Text, {
              color: "text-muted",
              variant: "text-sm/medium",
              children:
                n === j.wB.REJECTED
                  ? S.intl.string(S.t.i05OUV)
                  : S.intl.string(S.t.o47YZm),
            }),
          ],
        });
      }
      function k(e) {
        let { sortOrder: n, onSortChange: t } = e;
        return (0, l.jsx)("thead", {
          children: (0, l.jsxs)("tr", {
            className: R.tableHeaderRow,
            children: [
              (0, l.jsx)("th", {
                className: p.headerCell,
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: S.intl.string(S.t.Es7n9f),
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(p.headerCell, A.mediumCol),
                children: (0, l.jsxs)(d.Clickable, {
                  className: p.sortItem,
                  onClick: t,
                  children: [
                    (0, l.jsx)(d.Text, {
                      variant: "eyebrow",
                      color: "interactive-normal",
                      children: S.intl.string(S.t.EZ5QWF),
                    }),
                    n === j.Nw.TIMESTAMP_ASC
                      ? (0, l.jsx)(_.Z, {
                          className: p.sortIcon,
                          direction: _.Z.Directions.UP,
                        })
                      : (0, l.jsx)(_.Z, {
                          className: p.sortIcon,
                          direction: _.Z.Directions.DOWN,
                        }),
                  ],
                }),
              }),
              (0, l.jsx)("th", {
                className: a()(p.headerCell, p.moreOptionsCol),
                children: (0, l.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  children: S.intl.string(S.t["5Q9xGh"]),
                }),
              }),
            ],
          }),
        });
      }
      let L = i.memo(function (e) {
          let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
              (e) => {
                e.stopPropagation(),
                  e.preventDefault(),
                  (0, v.openUserProfileModal)({
                    userId: t.id,
                    joinRequestId: r,
                  });
              },
              [t, r],
            );
          return (0, l.jsxs)("div", {
            className: A.memberNameContainer,
            children: [
              (0, l.jsx)(d.Clickable, {
                className: A.memberAvatar,
                onClick: s,
                children: (0, l.jsx)(m.Z, { user: t }),
              }),
              (0, l.jsx)("div", {
                className: A.memberName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  children: (0, l.jsxs)(d.Clickable, {
                    onClick: s,
                    className: A.nameContainer,
                    children: [
                      t.globalName,
                      (0, l.jsx)(x.ZP, {
                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                        userId: null == t ? void 0 : t.id,
                        contextGuildId: a,
                        containerClassName: A.memberClanTag,
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: A.memberGlobalName,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  tag: "span",
                  children: (0, l.jsx)(d.Clickable, {
                    onClick: s,
                    tag: "span",
                    children: I.ZP.getUserTag(t),
                  }),
                }),
              }),
            ],
          });
        }),
        B = i.memo(function (e) {
          let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new E.Z(n.user), [n.user]),
            C = (0, g.L)({ guildId: s }),
            b = (0, c.e7)([T.Z], () => T.Z.getGuild(s)),
            f = x === j.wB.SUBMITTED,
            N = (e) => {
              (0, u.jW)(
                e,
                async () => {
                  let { default: e } = await t
                    .e("11451")
                    .then(t.bind(t, 597409));
                  return (n) => (0, l.jsx)(e, { ...n, guild: b, user: h });
                },
                { position: "bottom", align: "right" },
              );
            };
          return null == h
            ? null
            : (0, l.jsxs)("tr", {
                onClick: r,
                className: a()(A.roundedRow, A.memberRowContainer, {
                  [A.selected]:
                    (null == C ? void 0 : C.joinRequestId) === n.joinRequestId,
                }),
                children: [
                  (0, l.jsx)("td", {
                    children: (0, l.jsx)(L, { joinRequest: n, user: h }),
                  }),
                  (0, l.jsx)("td", {
                    className: A.mediumCol,
                    children: (0, l.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: o()(m).format("lll"),
                    }),
                  }),
                  (0, l.jsx)("td", {
                    className: p.moreOptionsCol,
                    children:
                      f &&
                      (0, l.jsx)(d.Tooltip, {
                        text: S.intl.string(S.t.x8Nn4O),
                        children: (e) => {
                          let { onMouseEnter: n, onMouseLeave: t } = e;
                          return (0, l.jsx)(d.Clickable, {
                            onMouseEnter: n,
                            onMouseLeave: t,
                            onClick: N,
                            className: a()(A.button),
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
        P = () => {
          let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            n = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(25 * Math.random()) + 50, "px");
          return (0, l.jsxs)("tr", {
            className: a()(A.roundedRow, A.memberRowContainer),
            children: [
              (0, l.jsx)("td", {
                children: (0, l.jsxs)("div", {
                  className: A.memberNameContainer,
                  children: [
                    (0, l.jsx)("div", {
                      className: a()(p.placeholderAvatar, A.memberAvatar),
                    }),
                    (0, l.jsx)("div", {
                      className: A.memberName,
                      children: (0, l.jsx)("div", {
                        className: p.placeholderText,
                        style: { width: e },
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: A.memberGlobalName,
                      children: (0, l.jsx)("div", {
                        className: p.placeholderTextSmall,
                        style: { width: n },
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("td", {
                className: A.mediumCol,
                children: (0, l.jsx)("div", {
                  className: p.placeholderText,
                  style: { width: t },
                }),
              }),
              (0, l.jsx)("td", { className: p.moreOptionsCol }),
            ],
          });
        };
      function w(e) {
        let { guildId: n, currentTab: t } = e,
          r = i.useRef(null),
          s = (0, c.e7)([T.Z], () => T.Z.getGuild(n)),
          o = (0, f.C)({ guildId: n }),
          u = (0, c.e7)([C.Z], () => C.Z.isFetching()),
          { guildJoinRequests: m } = (0, N.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o,
          }),
          { fetchNextPage: x } = (0, b.m)({ guildId: n, guildJoinRequests: m }),
          g = i.useCallback(async () => {
            let e =
              o === j.Nw.TIMESTAMP_ASC
                ? j.Nw.TIMESTAMP_DESC
                : j.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
          }, [o, n, x, t]);
        return null == s
          ? null
          : (0, l.jsx)("div", {
              className: M.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                className: M.horizatonalScroller,
                ref: r,
                orientation: "horizontal",
                children: (0, l.jsxs)("table", {
                  className: a()(p.table),
                  children: [
                    (0, l.jsx)(k, { sortOrder: o, onSortChange: g }),
                    (0, l.jsx)("tbody", {
                      children: u
                        ? [, , , , ,]
                            .fill(0)
                            .map((e, n) =>
                              (0, l.jsx)(P, {}, "placeholder-".concat(n)),
                            )
                        : 0 === m.length
                          ? (0, l.jsx)("td", {
                              colSpan: 3,
                              children: (0, l.jsx)(Z, { status: t }),
                            })
                          : m.map((e) =>
                              (0, l.jsx)(
                                B,
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
          return E;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(21260),
        c = t(780384),
        d = t(481060),
        u = t(410030),
        m = t(328977),
        x = t(571728),
        h = t(984370),
        C = t(433355),
        j = t(889711),
        b = t(384433),
        g = t(388032),
        f = t(998810);
      let N = (e) => [
          { id: b.e.ALL_MEMBERS, label: g.intl.string(g.t.NOOm1d) },
          {
            id: b.e.PENDING,
            label:
              e > 0
                ? g.intl.formatToPlainString(g.t["Wo+zLy"], { count: e })
                : g.intl.string(g.t["4eQVBA"]),
          },
          { id: b.e.REJECTED, label: g.intl.string(g.t.bSZklZ) },
        ],
        _ = (e) => {
          let { tabs: n, selectedTab: t, onTabSelect: i, onClose: r } = e;
          return (0, l.jsx)(d.Menu, {
            navId: "members-tabs-overflow-menu",
            "aria-label": g.intl.string(g.t.riPnr6),
            hideScroller: !0,
            onClose: r,
            onSelect: r,
            children: (0, l.jsx)(
              d.MenuGroup,
              {
                children: n.map((e) => {
                  let { id: n, label: r } = e;
                  return (0, l.jsx)(
                    d.MenuItem,
                    {
                      id: n,
                      label: r,
                      icon: n === t ? d.CircleCheckIcon : void 0,
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
      function v(e) {
        let { onTabSelect: n, tabs: t, selectedTab: r } = e,
          s = (0, u.ZP)(),
          o = (0, c.wj)(s),
          m = i.useMemo(
            () =>
              null !=
              t.find((e) => {
                let { id: n } = e;
                return n === r;
              }),
            [r, t],
          ),
          x = m ? "header-primary" : o ? "text-muted" : "header-primary",
          h = m
            ? d.tokens.colors.HEADER_PRIMARY
            : o
              ? d.tokens.colors.TEXT_MUTED
              : d.tokens.colors.HEADER_PRIMARY;
        return (0, l.jsx)(d.Popout, {
          renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, l.jsx)(_, {
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
            return (0, l.jsxs)(d.TabBar.Item, {
              ...e,
              id: "more",
              color: "text-muted",
              className: a()(f.more, { [f.selected]: m }),
              "aria-label": g.intl.string(g.t.UKOtz8),
              children: [
                (0, l.jsx)(d.Text, {
                  variant: "text-md/medium",
                  color: x,
                  children: g.intl.string(g.t.UKOtz8),
                }),
                t
                  ? (0, l.jsx)(d.ChevronSmallUpIcon, { size: "sm", color: h })
                  : (0, l.jsx)(d.ChevronSmallDownIcon, {
                      size: "sm",
                      color: h,
                    }),
              ],
            });
          },
        });
      }
      function E(e) {
        let { guildId: n, currentTab: t, onTabSelect: r } = e,
          [a, c] = i.useState(0),
          u = i.useRef(null),
          _ = i.useRef(a),
          E = (0, x.A)({ guildId: n }),
          T = N(null != E ? E : 0),
          {
            lastVisibleIndex: I,
            onItemLayout: S,
            overflowItemsRef: p,
          } = (0, o.zP)({
            items: T,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: a - 200,
          }),
          M = (0, s.e7)([C.ZP], () => null != C.ZP.getGuildSidebarState(n), [
            n,
          ]),
          R = (0, m.L)({ guildId: n }),
          A = i.useMemo(
            () => (t === b.e.ALL_MEMBERS ? M : null != R && null != R.user),
            [t, M, R],
          ),
          Z = i.useMemo(() => T.slice(0, I + 1), [I, T]),
          k = i.useMemo(() => T.slice(I + 1), [I, T]),
          L = i.useCallback(() => {
            var e;
            let n =
              null === (e = u.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            null != n &&
              _.current !== n.width &&
              (c(n.width), (_.current = n.width));
          }, []);
        return (
          i.useEffect(() => {
            let e = (0, j.pP)(L);
            return (
              (0, j.YP)(e, document.body), () => (0, j.UC)(e, document.body)
            );
          }, [L]),
          i.useEffect(() => {
            L();
          }, [L, A]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(h.Z.Divider, { className: f.divider }),
              (0, l.jsxs)("div", {
                className: f.tabsContainer,
                ref: u,
                children: [
                  (0, l.jsxs)("div", {
                    className: f.measurements,
                    children: [
                      T.map((e, n) =>
                        (0, l.jsx)(
                          o.AJ,
                          {
                            index: n,
                            onItemLayout: S,
                            children: (0, l.jsx)(d.TabBar.Item, {
                              id: e.id,
                              "aria-label": e.label,
                              children: e.label,
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, l.jsx)("div", {
                        ref: p,
                        children: (0, l.jsx)(v, {
                          tabs: k,
                          onTabSelect: r,
                          selectedTab: t,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(d.TabBar, {
                    "aria-label": g.intl.string(g.t.tcvVXF),
                    selectedItem: t,
                    type: "top-pill",
                    onItemSelect: r,
                    children: [
                      Z.map((e) =>
                        (0, l.jsx)(
                          d.TabBar.Item,
                          {
                            id: e.id,
                            "aria-label": e.label,
                            children: e.label,
                          },
                          e.id,
                        ),
                      ),
                      0 !== k.length
                        ? (0, l.jsx)(v, {
                            tabs: k,
                            onTabSelect: r,
                            selectedTab: t,
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
          C = (0, r.e7)([d.ZP], () => d.ZP.getGuildSidebarState(n), [n]),
          j = i.useCallback(() => {
            c.Z.closeGuildSidebar(n);
          }, [n]),
          b = null != C;
        return null != t && b && null != C
          ? (0, l.jsx)(s.Gt, {
              value: h,
              children: (0, l.jsx)("div", {
                className: x.__invalid_sidebarContainer,
                style: { width: m.$Y6 },
                children: (0, l.jsx)(o.Z, {
                  userId: C.details.userId,
                  guildId: C.details.guildId,
                  onClose: j,
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
            return V;
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
        C = t(693546),
        j = t(863249),
        b = t(63568),
        g = t(246364),
        f = t(697379),
        N = t(98493),
        _ = t(412222),
        v = t(223312),
        E = t(571728),
        T = t(473403),
        I = t(984370),
        S = t(703656),
        p = t(171368),
        M = t(433355),
        R = t(592125),
        A = t(984933),
        Z = t(430824),
        k = t(944486),
        L = t(384433),
        B = t(241559),
        P = t(575766),
        w = t(901066),
        D = t(987491),
        G = t(305473),
        y = t(995596),
        O = t(937283),
        U = t(440857),
        z = t(707113),
        F = t(981631),
        H = t(176505),
        J = t(50493),
        q = t(388032),
        Y = t(998810),
        Q = t(247627);
      function K(e) {
        let { guild: n, previousChannel: t, currentTab: r, onTabSelect: a } = e,
          s = (0, b.jS)(n.id, "Member Safety Page"),
          c = (0, f.W)(n.id),
          d = q.intl.string(q.t.oclz3d),
          x = q.intl.string(q.t.oclz3d);
        return (
          (0, m.Tt)({ location: n.name, subsection: d }),
          (0, l.jsxs)(I.Z, {
            className: Y.header,
            innerClassname: Y.__invalid_innerHeader,
            channelId: H.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
              null != t
                ? (0, l.jsx)(o.Button, {
                    className: Y.returnButton,
                    size: o.Button.Sizes.SMALL,
                    look: o.Button.Looks.OUTLINED,
                    color: o.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, S.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(o.Text, {
                      className: Y.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: q.intl.format(q.t.IX7oWl, {
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                i.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(T._, {
                                      className: Y.returnIcon,
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
              (0, l.jsx)(I.Z.Icon, { icon: o.GroupIcon, "aria-hidden": !0 }),
              (0, l.jsx)(I.Z.Title, { children: x }),
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
      function V(e) {
        var n;
        let { guildId: t } = e,
          r = null !== (n = (0, E.A)({ guildId: t })) && void 0 !== n ? n : 0,
          u = (0, b.jS)(t, "Member Safety Page"),
          [m, f] = i.useState(u && r > 0 ? L.e.PENDING : L.e.ALL_MEMBERS),
          T = (0, s.e7)([Z.Z], () => Z.Z.getGuild(t)),
          { analyticsLocations: I } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
          y = (0, _.C)({ guildId: t }),
          { guildJoinRequests: q } = (0, v.j)({
            guildId: t,
            applicationStatus: "ALL_MEMBERS" === m ? g.wB.SUBMITTED : m,
            sortOrder: y,
          }),
          V = (0, B.n2)(t),
          W = (0, h.ms)(t, V),
          X = (0, s.e7)([k.Z], () => k.Z.getLastSelectedChannelId(t)),
          $ = (0, s.e7)([R.Z], () => R.Z.getChannel(X)),
          ee = i.useRef(null);
        (0, P.n)(t);
        let { fetchNextPage: en } = (0, N.m)({
            guildId: t,
            guildJoinRequests: q,
          }),
          et = i.useCallback(async () => {
            var e;
            if (m === L.e.ALL_MEMBERS) return;
            let n =
              null === (e = ee.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null != n)
              n.scrollHeight - n.scrollTop - n.offsetHeight < 200 &&
                (await en(y, m));
          }, [m, m, y, en]),
          el = i.useCallback(
            async (e) => {
              if (m !== e) {
                if (u) {
                  if (
                    (f(e),
                    C.Z.setSelectedGuildJoinRequest(t, null),
                    "ALL_MEMBERS" === e)
                  )
                    return;
                  await en(y, e);
                }
              }
            },
            [m, u, t, en, y],
          );
        i.useEffect(() => {
          if (!V && null != T) {
            var e;
            let n =
              null === (e = A.ZP.getDefaultChannel(T.id)) || void 0 === e
                ? void 0
                : e.id;
            (0, S.XU)(T.id, n);
          }
        }, [T, V]),
          i.useEffect(() => {
            u && j.ZP.fetchVerificationForm(t);
          }, [t, u]);
        let ei = (0, s.e7)([M.ZP], () => null != M.ZP.getGuildSidebarState(t), [
            t,
          ]),
          er = i.useCallback(
            (e) => {
              (0, h.By)(e.guildId, !0)
                ? (0, x.r)(e.guildId, e.userId, H.oC.MEMBER_SAFETY, {
                    modViewPanel: J.k.INFO,
                  })
                : (0, p.openUserProfileModal)({
                    userId: e.userId,
                    guildId: e.guildId,
                    sourceAnalyticsLocations: I,
                    analyticsLocation: { section: F.jXE.MEMBER_SAFETY_PAGE },
                  });
            },
            [I],
          );
        if (null == T || !V) return null;
        let ea =
            m === L.e.ALL_MEMBERS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(G.Z, { guild: T }),
                    (0, l.jsx)(z.Z, { guild: T, onMemberSelect: er }),
                  ],
                })
              : (0, l.jsx)(D.Z, { guildId: T.id, currentTab: m }),
          es =
            m === L.e.ALL_MEMBERS
              ? (0, l.jsx)(O.Z, { guildId: T.id })
              : (0, l.jsx)(w.Z, { guildId: T.id });
        return (0, l.jsxs)(d.Gt, {
          value: I,
          children: [
            (0, l.jsxs)("div", {
              className: a()(Q.chat, Y.page, { [Q.threadSidebarOpen]: ei }),
              children: [
                (0, l.jsx)(K, {
                  guild: T,
                  previousChannel: $,
                  currentTab: m,
                  onTabSelect: el,
                }),
                (0, l.jsx)(o.AdvancedScroller, {
                  onScroll: et,
                  className: a()(Y.scroller),
                  ref: ee,
                  orientation: "vertical",
                  children: (0, l.jsx)("div", {
                    className: a()(Q.content, Y.container),
                    children: ea,
                  }),
                }),
                (0, l.jsx)(U.Z, { guildId: T.id }),
              ],
            }),
            W && es,
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
        s = t(666912),
        o = t(399606),
        c = t(481060),
        d = t(201070),
        u = t(893966),
        m = t(472596),
        x = t(598948),
        h = t(428936),
        C = t(41586),
        j = t(676391);
      function b(e) {
        let { guild: n } = e,
          t = (0, d.$j)(n.id),
          i = (0, c.useSpring)({ height: t ? 3 : 0, config: s.config.stiff });
        return (0, l.jsx)("div", {
          className: j.loaderContainer,
          children: (0, l.jsx)(s.animated.div, {
            className: j.loaderBar,
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
          N = (0, d.$j)(g),
          _ = (0, d.M3)(g),
          v = i.useCallback(
            (e) => {
              if (null != e) null == s || s(e);
            },
            [s],
          ),
          E = (0, m.xb)(_, N, f),
          T = i.useRef(null),
          I = i.useRef(null),
          S = i.useCallback(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.resetSearchText();
          }, []);
        return (0, l.jsx)("div", {
          className: a()(j.mainTableContainer, t),
          children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(j.horizatonalScroller),
            ref: I,
            orientation: "horizontal",
            children: [
              (0, l.jsx)(C.Z, { guild: n, ref: T }),
              (0, l.jsx)(b, { guild: n }),
              (0, l.jsx)(x.Z, {
                guild: n,
                onSelectRow: v,
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
        emptyContainer: "emptyContainer_b03ab6",
        checkmark: "checkmark_b03ab6",
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
//# sourceMappingURL=25b590069950aeba4b8e.js.map
