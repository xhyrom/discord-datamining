"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61536"],
  {
    821312: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(831209),
        l = n(481060),
        d = n(367907),
        c = n(177862),
        x = n(981631),
        u = n(388032),
        h = n(581850);
      function C(e) {
        let { guildId: t, transitionState: n, onClose: s } = e,
          [C, m] = o.useState([]),
          [p, _] = o.useState(),
          j = [
            { text: u.intl.string(u.t["//3pvr"]), value: c.C2.DM_SPAM },
            { text: u.intl.string(u.t.SdVsio), value: c.C2.MENTION_SPAM },
            { text: u.intl.string(u.t.uTiSVF), value: c.C2.CHANNEL_SPAM },
            { text: u.intl.string(u.t.GQczU1), value: c.C2.SUS_NEW_MEMBERS },
            { text: u.intl.string(u.t.AAgqy8), value: c.C2.CHANGING_SETTINGS },
            { text: u.intl.string(u.t.ryPKb2), value: c.C2.OTHER },
          ];
        function g(e) {
          C.includes(e)
            ? m((t) => t.filter((t) => t !== e))
            : m((t) => [...t, e]);
        }
        return null == t
          ? (s(), null)
          : (0, i.jsxs)(l.ModalRoot, {
              transitionState: n,
              size: l.ModalSize.MEDIUM,
              children: [
                (0, i.jsx)(l.ModalHeader, {
                  separator: !0,
                  children: (0, i.jsxs)("div", {
                    className: h.headerContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: h.headerText,
                        children: [
                          (0, i.jsx)(l.LockIcon, {
                            size: "xs",
                            color: a.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, i.jsx)(l.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children: u.intl.string(u.t.f5hd9P),
                          }),
                        ],
                      }),
                      (0, i.jsx)(l.Clickable, {
                        onClick: s,
                        children: (0, i.jsx)(l.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: h.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(l.ModalContent, {
                  children: (0, i.jsx)("div", {
                    className: h.options,
                    children: j.map((e) => {
                      let { text: t, value: n } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: r()(h.optionContainer, {
                            [h.optionContainerOther]: n === c.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(l.Clickable, {
                              className: h.optionText,
                              onClick: () => g(n),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(l.Checkbox, {
                                    type: l.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: C.includes(n),
                                    onChange: () => g(n),
                                  }),
                                }),
                                (0, i.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  color: C.includes(n)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: t,
                                }),
                              ],
                            }),
                            n === c.C2.OTHER &&
                              C.includes(c.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: h.textboxContainer,
                                children: (0, i.jsx)(l.TextArea, {
                                  className: h.serverLockdownReasonText,
                                  placeholder: u.intl.string(u.t["PAM+JS"]),
                                  onChange: (e) => _(e),
                                  value: p,
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
                (0, i.jsx)(l.ModalFooter, {
                  children: (0, i.jsx)(l.Button, {
                    onClick: function () {
                      (0, d.yw)(x.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: C,
                        raid_lockdown_feedback_other_reason: p,
                        guild_id: t,
                      }),
                        s();
                    },
                    color: l.Button.Colors.BRAND,
                    look: l.Button.Looks.FILLED,
                    submitting: !1,
                    children: u.intl.string(u.t.nAt0rK),
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
            return v;
          },
        }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        s = n(831209),
        r = n(442837),
        a = n(481060),
        l = n(688465),
        d = n(430824),
        c = n(626135),
        x = n(369994),
        u = n(162157),
        h = n(533244),
        C = n(487419),
        m = n(821312),
        p = n(676770),
        _ = n(981631),
        j = n(388032),
        g = n(890993);
      function v(e) {
        let {
            guildId: t,
            transitionState: n,
            onClose: v,
            analyticsData: T,
          } = e,
          N = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]),
          k = !!(null == N ? void 0 : N.hasFeature(_.oNc.INVITES_DISABLED)),
          [S] = o.useState(!1),
          [I, E] = o.useState(p.Fl),
          M = (0, r.e7)([C.Z], () => C.Z.getGuildIncident(t)),
          b = (0, u.BT)(N),
          A = (0, h.SG)(M) || k,
          R = (0, h.sN)(M),
          [L, f] = o.useState(A),
          [D, w] = o.useState(R),
          [B, y] = o.useState(!1),
          O = L !== A || D !== R || B,
          z = k && !b;
        if (null == N) return v(), null;
        function G() {
          f((e) => !e);
        }
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: n,
          size: a.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(a.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: g.headerContainer,
                children: [
                  (0, i.jsx)(a.LockIcon, {
                    size: "xs",
                    color: s.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, i.jsx)(a.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: j.intl.string(j.t.oCYAc3),
                  }),
                  (0, i.jsx)(l.Z, {}),
                ],
              }),
            }),
            (0, i.jsx)(a.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: g.mainContainer,
                children: [
                  (0, i.jsx)(a.Select, {
                    placeholder: j.intl.string(j.t.vKYZzc),
                    options: (0, p.c1)(),
                    select: (e) => {
                      E(e), y(!0);
                    },
                    isSelected: (e) => e === I,
                    serialize: (e) => String(e),
                  }),
                  (0, i.jsxs)("div", {
                    className: g.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: g.pauseText,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: j.intl.string(j.t.Uwsjn5),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.string(j.t.qPJkZm),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.Tooltip, {
                        text: j.intl.string(j.t["9GPbsb"]),
                        shouldShow: k,
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(a.Switch, {
                              className: g.toggle,
                              onChange: G,
                              checked: L,
                              disabled: z,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: g.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: g.pauseText,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: j.intl.string(j.t.wrDmAw),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.string(j.t.UQbJW1),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.Switch, {
                        className: g.toggle,
                        onChange: function () {
                          w((e) => !e);
                        },
                        checked: D,
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
                    (A || R) && !L && !D
                      ? ((0, x.n)(N.id, !1, !1),
                        (0, a.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(m.Z, { ...e, guildId: t }),
                          ),
                        ))
                      : (0, x.n)(N.id, L, D, I);
                    let { source: e, alertType: n, messageId: o } = T;
                    c.default.track(
                      _.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: t,
                        source: e,
                        raid_alert_id: o,
                        raid_alert_type: n,
                        intervention_type_enabled: (0, h.sO)(L, D),
                        intervention_type_disabled: (0, h.lk)(L, D),
                        duration: 60 * I,
                      },
                    ),
                      v();
                  },
                  color: a.Button.Colors.BRAND,
                  look: a.Button.Looks.FILLED,
                  submitting: S,
                  disabled: !O,
                  children: j.intl.string(j.t["pwm/z8"]),
                }),
                (0, i.jsx)(a.Button, {
                  onClick: v,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  disabled: S,
                  children: j.intl.string(j.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
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
//# sourceMappingURL=a4b5c6f1425c9d4cd785.js.map
