"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28382"],
  {
    369994: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return R;
        },
        Fi: function () {
          return A;
        },
        KK: function () {
          return d;
        },
        f6: function () {
          return u;
        },
        n: function () {
          return I;
        },
      }),
        n(47120);
      var a = n(913527),
        o = n.n(a),
        l = n(544891),
        s = n(367907),
        r = n(434404),
        i = n(430824),
        _ = n(626135),
        c = n(981631);
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== t.length)
          _.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, s.hH)(e),
            guild_id: e,
            raid_types: t,
          });
      }
      async function u(e, t) {
        let n = new Set(e.features);
        n.has(c.oNc.COMMUNITY)
          ? t
            ? n.delete(c.oNc.RAID_ALERTS_DISABLED)
            : n.add(c.oNc.RAID_ALERTS_DISABLED)
          : t
            ? n.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await r.Z.saveGuild(e.id, { features: n }, { throwErr: !0 });
      }
      async function I(e, t, n, a) {
        let s = o()().add(a, "hours").toISOString();
        return await l.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: t ? s : null,
            dms_disabled_until: n ? s : null,
          },
        });
      }
      async function A(e, t, n) {
        let a = i.Z.getGuild(e);
        return null == (null == a ? void 0 : a.getSafetyAlertsChannelId())
          ? null
          : await l.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: t, reason: n },
            });
      }
      async function R(e) {
        let t = i.Z.getGuild(e);
        return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
          ? null
          : await l.tn.post({ url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
      }
    },
    537623: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        }),
        n(47120);
      var a = n(735250),
        o = n(470079),
        l = n(120356),
        s = n.n(l),
        r = n(481060),
        i = n(367907),
        _ = n(369994),
        c = n(177862),
        d = n(981631),
        u = n(689938),
        I = n(733609);
      function A(e) {
        let { guildId: t, messageId: l, transitionState: A, onClose: R } = e,
          [E, T] = o.useState([]),
          [D, N] = o.useState(),
          x = o.useCallback(() => {
            let e = {
              raid_alert_type: c.wR.JOIN_RAID,
              raid_alert_id: l,
              false_alarm_type: E.map((e) => e.toString()),
              false_alarm_other_reason: D,
              guild_id: t,
            };
            (0, i.yw)(d.rMx.GUILD_RAID_FEEDBACK, e),
              (0, _.Fi)(t, l, (0, c.J$)(E)),
              R(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("37564").then(n.bind(n, 969214));
                return (t) => (0, a.jsx)(e, { ...t });
              });
          }, [R, l, t, D, E]),
          C = [
            {
              text: u.Z.Messages
                .GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
              value: c.$l.LEGITIMATE_ACTIVITY,
            },
            {
              text: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
              value: c.$l.DM_SPAM,
            },
            {
              text: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
              value: c.$l.JOIN_RAID,
            },
            {
              text: u.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
              value: c.$l.OTHER,
            },
          ];
        function O(e) {
          E.includes(e)
            ? T((t) => t.filter((t) => t !== e))
            : T((t) => [...t, e]);
        }
        return (0, a.jsxs)(r.ModalRoot, {
          transitionState: A,
          size: r.ModalSize.SMALL,
          children: [
            (0, a.jsx)(r.ModalHeader, {
              separator: !1,
              className: I.center,
              children: (0, a.jsx)(r.Heading, {
                color: "header-primary",
                variant: "heading-xl/bold",
                children: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_TITLE,
              }),
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: I.center,
              children: [
                (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: I.textCenter,
                  children: u.Z.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION,
                }),
                (0, a.jsx)("div", {
                  className: I.options,
                  children: C.map((e) => {
                    let { text: t, value: n } = e;
                    return (0, a.jsxs)(
                      "div",
                      {
                        className: s()(I.optionContainer, {
                          [I.optionContainerOther]: n === c.$l.OTHER,
                        }),
                        children: [
                          (0, a.jsxs)(r.Clickable, {
                            className: I.optionText,
                            onClick: () => O(n),
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(r.Checkbox, {
                                  type: r.Checkbox.Types.INVERTED,
                                  size: 20,
                                  value: E.includes(n),
                                  onChange: () => O(n),
                                }),
                              }),
                              (0, a.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t,
                              }),
                            ],
                          }),
                          n === c.$l.OTHER &&
                            E.includes(c.$l.OTHER) &&
                            (0, a.jsx)("div", {
                              className: I.textboxContainer,
                              children: (0, a.jsx)(r.TextArea, {
                                className: I.falseAlarmReasonText,
                                placeholder:
                                  u.Z.Messages
                                    .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                onChange: (e) => N(e),
                                value: D,
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
              ],
            }),
            (0, a.jsxs)(r.ModalFooter, {
              className: I.__invalid_modalFooter,
              children: [
                (0, a.jsx)("div", {
                  className: I.button,
                  children: (0, a.jsx)(r.Button, {
                    onClick: x,
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.FILLED,
                    children:
                      u.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED,
                  }),
                }),
                (0, a.jsx)(r.Button, {
                  onClick: R,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  children: u.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    733609: function (e, t, n) {
      e.exports = {
        center: "center_b9c76f",
        textCenter: "textCenter_b9c76f",
        button: "button_b9c76f",
        options: "options_b9c76f",
        optionContainer: "optionContainer_b9c76f",
        optionContainerOther: "optionContainerOther_b9c76f",
        optionText: "optionText_b9c76f",
        textboxContainer: "textboxContainer_b9c76f",
        falseAlarmReasonText: "falseAlarmReasonText_b9c76f",
      };
    },
  },
]);
//# sourceMappingURL=9d2af0d30e177fd723c5.js.map
