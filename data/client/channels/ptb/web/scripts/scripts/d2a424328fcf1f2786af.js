"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61536"],
  {
    821312: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(120356),
        i = t.n(a),
        r = t(831209),
        l = t(481060),
        d = t(367907),
        c = t(177862),
        _ = t(981631),
        x = t(689938),
        C = t(217329);
      function E(e) {
        let { guildId: s, transitionState: t, onClose: a } = e,
          [E, I] = o.useState([]),
          [u, N] = o.useState(),
          D = [
            {
              text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
              value: c.C2.DM_SPAM,
            },
            {
              text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
              value: c.C2.MENTION_SPAM,
            },
            {
              text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
              value: c.C2.CHANNEL_SPAM,
            },
            {
              text: x.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
              value: c.C2.SUS_NEW_MEMBERS,
            },
            {
              text: x.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
              value: c.C2.CHANGING_SETTINGS,
            },
            {
              text: x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
              value: c.C2.OTHER,
            },
          ];
        function h(e) {
          E.includes(e)
            ? I((s) => s.filter((s) => s !== e))
            : I((s) => [...s, e]);
        }
        return null == s
          ? (a(), null)
          : (0, n.jsxs)(l.ModalRoot, {
              transitionState: t,
              size: l.ModalSize.MEDIUM,
              children: [
                (0, n.jsx)(l.ModalHeader, {
                  separator: !0,
                  children: (0, n.jsxs)("div", {
                    className: C.headerContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: C.headerText,
                        children: [
                          (0, n.jsx)(l.LockIcon, {
                            size: "xs",
                            color: r.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, n.jsx)(l.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children:
                              x.Z.Messages
                                .GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, n.jsx)(l.Clickable, {
                        onClick: a,
                        children: (0, n.jsx)(l.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: C.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(l.ModalContent, {
                  children: (0, n.jsx)("div", {
                    className: C.options,
                    children: D.map((e) => {
                      let { text: s, value: t } = e;
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: i()(C.optionContainer, {
                            [C.optionContainerOther]: t === c.C2.OTHER,
                          }),
                          children: [
                            (0, n.jsxs)(l.Clickable, {
                              className: C.optionText,
                              onClick: () => h(t),
                              children: [
                                (0, n.jsx)("div", {
                                  children: (0, n.jsx)(l.Checkbox, {
                                    type: l.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: E.includes(t),
                                    onChange: () => h(t),
                                  }),
                                }),
                                (0, n.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  color: E.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: s,
                                }),
                              ],
                            }),
                            t === c.C2.OTHER &&
                              E.includes(c.C2.OTHER) &&
                              (0, n.jsx)("div", {
                                className: C.textboxContainer,
                                children: (0, n.jsx)(l.TextArea, {
                                  className: C.serverLockdownReasonText,
                                  placeholder:
                                    x.Z.Messages
                                      .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                  onChange: (e) => N(e),
                                  value: u,
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
                (0, n.jsx)(l.ModalFooter, {
                  children: (0, n.jsx)(l.Button, {
                    onClick: function () {
                      (0, d.yw)(_.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: E,
                        raid_lockdown_feedback_other_reason: u,
                        guild_id: s,
                      }),
                        a();
                    },
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    submitting: !1,
                    children:
                      x.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT,
                  }),
                }),
              ],
            });
      }
    },
    664452: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return T;
          },
        }),
        t(47120);
      var n = t(735250),
        o = t(470079),
        a = t(831209),
        i = t(442837),
        r = t(481060),
        l = t(688465),
        d = t(430824),
        c = t(626135),
        _ = t(369994),
        x = t(162157),
        C = t(533244),
        E = t(487419),
        I = t(821312),
        u = t(676770),
        N = t(981631),
        D = t(689938),
        h = t(547193);
      function T(e) {
        let {
            guildId: s,
            transitionState: t,
            onClose: T,
            analyticsData: A,
          } = e,
          L = (0, i.e7)([d.Z], () => d.Z.getGuild(s), [s]),
          M = !!(null == L ? void 0 : L.hasFeature(N.oNc.INVITES_DISABLED)),
          [S] = o.useState(!1),
          [O, R] = o.useState(u.Fl),
          p = (0, i.e7)([E.Z], () => E.Z.getGuildIncident(s)),
          m = (0, x.BT)(L),
          j = (0, C.SG)(p) || M,
          g = (0, C.sN)(p),
          [v, k] = o.useState(j),
          [B, Z] = o.useState(g),
          [G, K] = o.useState(!1),
          U = v !== j || B !== g || G,
          b = M && !m;
        if (null == L) return T(), null;
        function f() {
          k((e) => !e);
        }
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: t,
          size: r.ModalSize.MEDIUM,
          children: [
            (0, n.jsx)(r.ModalHeader, {
              separator: !0,
              children: (0, n.jsxs)("div", {
                className: h.headerContainer,
                children: [
                  (0, n.jsx)(r.LockIcon, {
                    size: "xs",
                    color: a.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, n.jsx)(r.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: D.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE,
                  }),
                  (0, n.jsx)(l.Z, {}),
                ],
              }),
            }),
            (0, n.jsx)(r.ModalContent, {
              children: (0, n.jsxs)("div", {
                className: h.mainContainer,
                children: [
                  (0, n.jsx)(r.Select, {
                    placeholder:
                      D.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                    options: (0, u.c1)(),
                    select: (e) => {
                      R(e), K(!0);
                    },
                    isSelected: (e) => e === O,
                    serialize: (e) => String(e),
                  }),
                  (0, n.jsxs)("div", {
                    className: h.pauseContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: h.pauseText,
                        children: [
                          (0, n.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: D.Z.Messages.DISABLE_INVITES,
                          }),
                          (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              D.Z.Messages
                                .GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, n.jsx)(r.Tooltip, {
                        text: D.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                        shouldShow: M,
                        children: (e) =>
                          (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(r.Switch, {
                              className: h.toggle,
                              onChange: f,
                              checked: v,
                              disabled: b,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: h.pauseContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: h.pauseText,
                        children: [
                          (0, n.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: D.Z.Messages.DISABLE_DMS,
                          }),
                          (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              D.Z.Messages
                                .GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, n.jsx)(r.Switch, {
                        className: h.toggle,
                        onChange: function () {
                          Z((e) => !e);
                        },
                        checked: B,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsxs)(r.ModalFooter, {
              children: [
                (0, n.jsx)(r.Button, {
                  onClick: () => {
                    (j || g) && !v && !B
                      ? ((0, _.n)(L.id, !1, !1),
                        (0, r.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, n.jsx)(I.Z, { ...e, guildId: s }),
                          ),
                        ))
                      : (0, _.n)(L.id, v, B, O);
                    let { source: e, alertType: t, messageId: o } = A;
                    c.default.track(
                      N.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: s,
                        source: e,
                        raid_alert_id: o,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, C.sO)(v, B),
                        intervention_type_disabled: (0, C.lk)(v, B),
                        duration: 60 * O,
                      },
                    ),
                      T();
                  },
                  color: r.Button.Colors.BRAND,
                  look: r.Button.Looks.FILLED,
                  submitting: S,
                  disabled: !U,
                  children: D.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA,
                }),
                (0, n.jsx)(r.Button, {
                  onClick: T,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  disabled: S,
                  children: D.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    217329: function (e, s, t) {
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
    547193: function (e, s, t) {
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
//# sourceMappingURL=d2a424328fcf1f2786af.js.map
