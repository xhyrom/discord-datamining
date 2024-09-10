"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58175"],
  {
    369994: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return C;
        },
        Fi: function () {
          return E;
        },
        KK: function () {
          return _;
        },
        f6: function () {
          return u;
        },
        n: function () {
          return I;
        },
      }),
        t(47120);
      var o = t(913527),
        i = t.n(o),
        a = t(544891),
        s = t(367907),
        l = t(434404),
        r = t(430824),
        d = t(626135),
        c = t(981631);
      function _(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, s.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function u(e, n) {
        let t = new Set(e.features);
        t.has(c.oNc.COMMUNITY)
          ? n
            ? t.delete(c.oNc.RAID_ALERTS_DISABLED)
            : t.add(c.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await l.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function I(e, n, t, o) {
        let s = i()().add(o, "hours").toISOString();
        return await a.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? s : null,
            dms_disabled_until: t ? s : null,
          },
        });
      }
      async function E(e, n, t) {
        let o = r.Z.getGuild(e);
        return null == (null == o ? void 0 : o.getSafetyAlertsChannelId())
          ? null
          : await a.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function C(e) {
        let n = r.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await a.tn.post({ url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
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
      var o = t(442837);
      t(467319);
      var i = t(496675),
        a = t(533244),
        s = t(487419),
        l = t(981631);
      function r(e) {
        let n = (0, o.e7)(
            [i.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.Z;
                return (
                  n.can(l.Plq.BAN_MEMBERS, e) ||
                  n.can(l.Plq.KICK_MEMBERS, e) ||
                  n.can(l.Plq.MANAGE_GUILD, e)
                );
              })(e, i.Z),
            [e],
          ),
          t = (0, o.e7)(
            [s.Z],
            () => (null != e ? s.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, a.i9)(t)) && n;
      }
      function d(e) {
        return (0, o.e7)(
          [i.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.Z;
              return n.can(l.Plq.MANAGE_GUILD, e);
            })(e, i.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        a = t(120356),
        s = t.n(a),
        l = t(831209),
        r = t(481060),
        d = t(367907),
        c = t(177862),
        _ = t(981631),
        u = t(689938),
        I = t(217329);
      function E(e) {
        let { guildId: n, transitionState: t, onClose: a } = e,
          [E, C] = i.useState([]),
          [N, D] = i.useState(),
          x = [
            {
              text: u.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
              value: c.C2.DM_SPAM,
            },
            {
              text: u.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
              value: c.C2.MENTION_SPAM,
            },
            {
              text: u.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
              value: c.C2.CHANNEL_SPAM,
            },
            {
              text: u.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
              value: c.C2.SUS_NEW_MEMBERS,
            },
            {
              text: u.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
              value: c.C2.CHANGING_SETTINGS,
            },
            {
              text: u.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
              value: c.C2.OTHER,
            },
          ];
        function A(e) {
          E.includes(e)
            ? C((n) => n.filter((n) => n !== e))
            : C((n) => [...n, e]);
        }
        return null == n
          ? (a(), null)
          : (0, o.jsxs)(r.ModalRoot, {
              transitionState: t,
              size: r.ModalSize.MEDIUM,
              children: [
                (0, o.jsx)(r.ModalHeader, {
                  separator: !0,
                  children: (0, o.jsxs)("div", {
                    className: I.headerContainer,
                    children: [
                      (0, o.jsxs)("div", {
                        className: I.headerText,
                        children: [
                          (0, o.jsx)(r.LockIcon, {
                            size: "xs",
                            color: l.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, o.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children:
                              u.Z.Messages
                                .GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, o.jsx)(r.Clickable, {
                        onClick: a,
                        children: (0, o.jsx)(r.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: I.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)(r.ModalContent, {
                  children: (0, o.jsx)("div", {
                    className: I.options,
                    children: x.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, o.jsxs)(
                        "div",
                        {
                          className: s()(I.optionContainer, {
                            [I.optionContainerOther]: t === c.C2.OTHER,
                          }),
                          children: [
                            (0, o.jsxs)(r.Clickable, {
                              className: I.optionText,
                              onClick: () => A(t),
                              children: [
                                (0, o.jsx)("div", {
                                  children: (0, o.jsx)(r.Checkbox, {
                                    type: r.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: E.includes(t),
                                    onChange: () => A(t),
                                  }),
                                }),
                                (0, o.jsx)(r.Text, {
                                  variant: "text-md/medium",
                                  color: E.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === c.C2.OTHER &&
                              E.includes(c.C2.OTHER) &&
                              (0, o.jsx)("div", {
                                className: I.textboxContainer,
                                children: (0, o.jsx)(r.TextArea, {
                                  className: I.serverLockdownReasonText,
                                  placeholder:
                                    u.Z.Messages
                                      .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                  onChange: (e) => D(e),
                                  value: N,
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
                (0, o.jsx)(r.ModalFooter, {
                  children: (0, o.jsx)(r.Button, {
                    onClick: function () {
                      (0, d.yw)(_.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: E,
                        raid_lockdown_feedback_other_reason: N,
                        guild_id: n,
                      }),
                        a();
                    },
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.FILLED,
                    submitting: !1,
                    children:
                      u.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT,
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
            return T;
          },
        }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        a = t(831209),
        s = t(442837),
        l = t(481060),
        r = t(688465),
        d = t(430824),
        c = t(626135),
        _ = t(369994),
        u = t(162157),
        I = t(533244),
        E = t(487419),
        C = t(821312),
        N = t(676770),
        D = t(981631),
        x = t(689938),
        A = t(547193);
      function T(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: T,
            analyticsData: h,
          } = e,
          M = (0, s.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          L = !!(null == M ? void 0 : M.hasFeature(D.oNc.INVITES_DISABLED)),
          [S] = i.useState(!1),
          [R, O] = i.useState(N.Fl),
          g = (0, s.e7)([E.Z], () => E.Z.getGuildIncident(n)),
          m = (0, u.BT)(M),
          f = (0, I.SG)(g) || L,
          p = (0, I.sN)(g),
          [v, j] = i.useState(f),
          [B, G] = i.useState(p),
          [Z, k] = i.useState(!1),
          U = v !== f || B !== p || Z,
          b = L && !m;
        if (null == M) return T(), null;
        function K() {
          j((e) => !e);
        }
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: t,
          size: l.ModalSize.MEDIUM,
          children: [
            (0, o.jsx)(l.ModalHeader, {
              separator: !0,
              children: (0, o.jsxs)("div", {
                className: A.headerContainer,
                children: [
                  (0, o.jsx)(l.LockIcon, {
                    size: "xs",
                    color: a.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, o.jsx)(l.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: x.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE,
                  }),
                  (0, o.jsx)(r.Z, {}),
                ],
              }),
            }),
            (0, o.jsx)(l.ModalContent, {
              children: (0, o.jsxs)("div", {
                className: A.mainContainer,
                children: [
                  (0, o.jsx)(l.Select, {
                    placeholder:
                      x.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                    options: (0, N.c1)(),
                    select: (e) => {
                      O(e), k(!0);
                    },
                    isSelected: (e) => e === R,
                    serialize: (e) => String(e),
                  }),
                  (0, o.jsxs)("div", {
                    className: A.pauseContainer,
                    children: [
                      (0, o.jsxs)("div", {
                        className: A.pauseText,
                        children: [
                          (0, o.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: x.Z.Messages.DISABLE_INVITES,
                          }),
                          (0, o.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              x.Z.Messages
                                .GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, o.jsx)(l.Tooltip, {
                        text: x.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                        shouldShow: L,
                        children: (e) =>
                          (0, o.jsx)("div", {
                            ...e,
                            children: (0, o.jsx)(l.Switch, {
                              className: A.toggle,
                              onChange: K,
                              checked: v,
                              disabled: b,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: A.pauseContainer,
                    children: [
                      (0, o.jsxs)("div", {
                        className: A.pauseText,
                        children: [
                          (0, o.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: x.Z.Messages.DISABLE_DMS,
                          }),
                          (0, o.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              x.Z.Messages
                                .GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, o.jsx)(l.Switch, {
                        className: A.toggle,
                        onChange: function () {
                          G((e) => !e);
                        },
                        checked: B,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(l.ModalFooter, {
              children: [
                (0, o.jsx)(l.Button, {
                  onClick: () => {
                    (f || p) && !v && !B
                      ? ((0, _.n)(M.id, !1, !1),
                        (0, l.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, o.jsx)(C.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, _.n)(M.id, v, B, R);
                    let { source: e, alertType: t, messageId: i } = h;
                    c.default.track(
                      D.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: i,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, I.sO)(v, B),
                        intervention_type_disabled: (0, I.lk)(v, B),
                        duration: 60 * R,
                      },
                    ),
                      T();
                  },
                  color: l.Button.Colors.BRAND,
                  look: l.Button.Looks.FILLED,
                  submitting: S,
                  disabled: !U,
                  children: x.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA,
                }),
                (0, o.jsx)(l.Button, {
                  onClick: T,
                  color: l.Button.Colors.PRIMARY,
                  look: l.Button.Looks.LINK,
                  disabled: S,
                  children: x.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    460083: function (e, n, t) {
      t.d(n, {
        d: function () {
          return o;
        },
      });
      let o = (0, t(818083).B)({
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
    467319: function (e, n, t) {
      t.d(n, {
        H: function () {
          return i;
        },
        a: function () {
          return a;
        },
      });
      var o = t(460083);
      function i(e) {
        let { enabled: n } = o.d.getCurrentConfig({
          guildId: e,
          location: "988d4e_3",
        });
        return n;
      }
      function a(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: t } = o.d.useExperiment(
            { guildId: e, location: "988d4e_4" },
            { autoTrackExposure: n },
          );
        return t;
      }
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
  },
]);
//# sourceMappingURL=3a6b56dbd7a45da74bc9.js.map
