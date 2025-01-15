"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58175"],
  {
    369994: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return C;
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
        n(47120);
      var i = n(913527),
        o = n.n(i),
        r = n(544891),
        l = n(367907),
        a = n(434404),
        s = n(430824),
        d = n(626135),
        c = n(981631);
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== t.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, l.hH)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function x(e, t) {
        let n = new Set(e.features);
        n.has(c.oNc.COMMUNITY)
          ? t
            ? n.delete(c.oNc.RAID_ALERTS_DISABLED)
            : n.add(c.oNc.RAID_ALERTS_DISABLED)
          : t
            ? n.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await a.Z.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function h(e, t, n, i) {
        let l = o()().add(i, "hours").toISOString();
        return await r.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: t ? l : null,
            dms_disabled_until: n ? l : null,
          },
          rejectWithError: !1,
        });
      }
      async function _(e, t, n) {
        let i = s.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: t, reason: n },
              rejectWithError: !1,
            });
      }
      async function C(e) {
        let t = s.Z.getGuild(e);
        return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
          ? null
          : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1,
            });
      }
    },
    162157: function (e, t, n) {
      n.d(t, {
        BT: function () {
          return d;
        },
        N8: function () {
          return s;
        },
      });
      var i = n(442837);
      n(467319);
      var o = n(496675),
        r = n(533244),
        l = n(487419),
        a = n(981631);
      function s(e) {
        let t = (0, i.e7)(
            [o.Z],
            () =>
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : o.Z;
                return (
                  t.can(a.Plq.BAN_MEMBERS, e) ||
                  t.can(a.Plq.KICK_MEMBERS, e) ||
                  t.can(a.Plq.MANAGE_GUILD, e)
                );
              })(e, o.Z),
            [e],
          ),
          n = (0, i.e7)(
            [l.Z],
            () => (null != e ? l.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != n && (0, r.i9)(n)) && t;
      }
      function d(e) {
        return (0, i.e7)(
          [o.Z],
          () =>
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o.Z;
              return t.can(a.Plq.MANAGE_GUILD, e);
            })(e, o.Z),
          [e],
        );
      }
    },
    821312: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        l = n.n(r),
        a = n(831209),
        s = n(481060),
        d = n(367907),
        c = n(177862),
        u = n(981631),
        x = n(388032),
        h = n(581850);
      function _(e) {
        let { guildId: t, transitionState: n, onClose: r } = e,
          [_, C] = o.useState([]),
          [N, g] = o.useState(),
          I = [
            { text: x.intl.string(x.t["//3pvr"]), value: c.C2.DM_SPAM },
            { text: x.intl.string(x.t.SdVsio), value: c.C2.MENTION_SPAM },
            { text: x.intl.string(x.t.uTiSVF), value: c.C2.CHANNEL_SPAM },
            { text: x.intl.string(x.t.GQczU1), value: c.C2.SUS_NEW_MEMBERS },
            { text: x.intl.string(x.t.AAgqy8), value: c.C2.CHANGING_SETTINGS },
            { text: x.intl.string(x.t.ryPKb2), value: c.C2.OTHER },
          ];
        function m(e) {
          _.includes(e)
            ? C((t) => t.filter((t) => t !== e))
            : C((t) => [...t, e]);
        }
        return null == t
          ? (r(), null)
          : (0, i.jsxs)(s.ModalRoot, {
              transitionState: n,
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
                    children: I.map((e) => {
                      let { text: t, value: n } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: l()(h.optionContainer, {
                            [h.optionContainerOther]: n === c.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(s.Clickable, {
                              className: h.optionText,
                              onClick: () => m(n),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(s.Checkbox, {
                                    type: s.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: _.includes(n),
                                    onChange: () => m(n),
                                  }),
                                }),
                                (0, i.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  color: _.includes(n)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: t,
                                }),
                              ],
                            }),
                            n === c.C2.OTHER &&
                              _.includes(c.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: h.textboxContainer,
                                children: (0, i.jsx)(s.TextArea, {
                                  className: h.serverLockdownReasonText,
                                  placeholder: x.intl.string(x.t["PAM+JS"]),
                                  onChange: (e) => g(e),
                                  value: N,
                                  rows: 2,
                                  autoFocus: !0,
                                  flex: !0,
                                }),
                              }),
                          ],
                        },
                        n,
                      );
                    }),
                  }),
                }),
                (0, i.jsx)(s.ModalFooter, {
                  children: (0, i.jsx)(s.Button, {
                    onClick: function () {
                      (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: _,
                        raid_lockdown_feedback_other_reason: N,
                        guild_id: t,
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
    664452: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
        }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(831209),
        l = n(442837),
        a = n(481060),
        s = n(688465),
        d = n(430824),
        c = n(626135),
        u = n(369994),
        x = n(162157),
        h = n(533244),
        _ = n(487419),
        C = n(821312),
        N = n(676770),
        g = n(981631),
        I = n(388032),
        m = n(890993);
      function T(e) {
        let {
            guildId: t,
            transitionState: n,
            onClose: T,
            analyticsData: f,
          } = e,
          E = (0, l.e7)([d.Z], () => d.Z.getGuild(t), [t]),
          p = !!(null == E ? void 0 : E.hasFeature(g.oNc.INVITES_DISABLED)),
          [v] = o.useState(!1),
          [A, j] = o.useState(N.Fl),
          S = (0, l.e7)([_.Z], () => _.Z.getGuildIncident(t)),
          M = (0, x.BT)(E),
          R = (0, h.SG)(S) || p,
          D = (0, h.sN)(S),
          [L, b] = o.useState(R),
          [k, O] = o.useState(D),
          [y, G] = o.useState(!1),
          w = L !== R || k !== D || y,
          B = p && !M;
        if (null == E) return T(), null;
        function Z() {
          b((e) => !e);
        }
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: n,
          size: a.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(a.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: m.headerContainer,
                children: [
                  (0, i.jsx)(a.LockIcon, {
                    size: "xs",
                    color: r.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, i.jsx)(a.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: I.intl.string(I.t.oCYAc3),
                  }),
                  (0, i.jsx)(s.Z, {}),
                ],
              }),
            }),
            (0, i.jsx)(a.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: m.mainContainer,
                children: [
                  (0, i.jsx)(a.Select, {
                    placeholder: I.intl.string(I.t.vKYZzc),
                    options: (0, N.c1)(),
                    select: (e) => {
                      j(e), G(!0);
                    },
                    isSelected: (e) => e === A,
                    serialize: (e) => String(e),
                  }),
                  (0, i.jsxs)("div", {
                    className: m.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: m.pauseText,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: I.intl.string(I.t.Uwsjn5),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: I.intl.string(I.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.Tooltip, {
                        text: I.intl.string(I.t["9GPbsb"]),
                        shouldShow: p,
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(a.Switch, {
                              className: m.toggle,
                              onChange: Z,
                              checked: L,
                              disabled: B,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: m.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: m.pauseText,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: I.intl.string(I.t.wrDmAw),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: I.intl.string(I.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.Switch, {
                        className: m.toggle,
                        onChange: function () {
                          O((e) => !e);
                        },
                        checked: k,
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
                    (R || D) && !L && !k
                      ? ((0, u.n)(E.id, !1, !1),
                        (0, a.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(C.Z, { ...e, guildId: t }),
                          ),
                        ))
                      : (0, u.n)(E.id, L, k, A);
                    let { source: e, alertType: n, messageId: o } = f;
                    c.default.track(
                      g.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: t,
                        source: e,
                        raid_alert_id: o,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, h.sO)(L, k),
                        intervention_type_disabled: (0, h.lk)(L, k),
                        duration: 60 * A,
                      },
                    ),
                      T();
                  },
                  color: a.Button.Colors.BRAND,
                  look: a.Button.Looks.FILLED,
                  submitting: v,
                  disabled: !w,
                  children: I.intl.string(I.t["pwm/z8"]),
                }),
                (0, i.jsx)(a.Button, {
                  onClick: T,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  disabled: v,
                  children: I.intl.string(I.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    460083: function (e, t, n) {
      n.d(t, {
        d: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
        kind: "guild",
        id: "2022-12_mention_raid_limit",
        label: "Automod Mention Raid Limit",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Automod Mention Raid Limit",
            config: { enabled: !0 },
          },
        ],
      });
    },
    467319: function (e, t, n) {
      n.d(t, {
        H: function () {
          return o;
        },
        a: function () {
          return r;
        },
      });
      var i = n(460083);
      function o(e) {
        let { enabled: t } = i.d.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return t;
      }
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = i.d.useExperiment(
            { guildId: e, location: "988d4e_4" },
            { autoTrackExposure: t },
          );
        return n;
      }
    },
    581850: function (e, t, n) {
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
    890993: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
  },
]);
//# sourceMappingURL=d3a7dd0b36b26ae54be1.js.map
