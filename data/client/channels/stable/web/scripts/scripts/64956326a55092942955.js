"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28382"],
  {
    369994: function (t, e, n) {
      n.d(e, {
        C4: function () {
          return f;
        },
        Fi: function () {
          return h;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return _;
        },
        n: function () {
          return x;
        },
      }),
        n(47120);
      var l = n(913527),
        o = n.n(l),
        a = n(544891),
        i = n(367907),
        r = n(434404),
        s = n(430824),
        c = n(626135),
        d = n(981631);
      function u(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== e.length)
          c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, i.hH)(t),
            guild_id: t,
            raid_types: e,
          });
      }
      async function _(t, e) {
        let n = new Set(t.features);
        n.has(d.oNc.COMMUNITY)
          ? e
            ? n.delete(d.oNc.RAID_ALERTS_DISABLED)
            : n.add(d.oNc.RAID_ALERTS_DISABLED)
          : e
            ? n.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : n.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await r.Z.saveGuild(t.id, { features: n }, { throwErr: !0 });
      }
      async function x(t, e, n, l) {
        let i = o()().add(l, "hours").toISOString();
        return await a.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(t),
          body: {
            invites_disabled_until: e ? i : null,
            dms_disabled_until: n ? i : null,
          },
        });
      }
      async function h(t, e, n) {
        let l = s.Z.getGuild(t);
        return null == (null == l ? void 0 : l.getSafetyAlertsChannelId())
          ? null
          : await a.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(t),
              body: { alert_message_id: e, reason: n },
            });
      }
      async function f(t) {
        let e = s.Z.getGuild(t);
        return null == (null == e ? void 0 : e.getSafetyAlertsChannelId())
          ? null
          : await a.tn.post({ url: d.ANM.GUILD_INCIDENT_REPORT_RAID(t) });
      }
    },
    537623: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        }),
        n(47120);
      var l = n(200651),
        o = n(192379),
        a = n(120356),
        i = n.n(a),
        r = n(481060),
        s = n(367907),
        c = n(369994),
        d = n(177862),
        u = n(981631),
        _ = n(388032),
        x = n(733609);
      function h(t) {
        let { guildId: e, messageId: a, transitionState: h, onClose: f } = t,
          [I, A] = o.useState([]),
          [C, N] = o.useState(),
          p = o.useCallback(() => {
            let t = {
              raid_alert_type: d.wR.JOIN_RAID,
              raid_alert_id: a,
              false_alarm_type: I.map((t) => t.toString()),
              false_alarm_other_reason: C,
              guild_id: e,
            };
            (0, s.yw)(u.rMx.GUILD_RAID_FEEDBACK, t),
              (0, c.Fi)(e, a, (0, d.J$)(I)),
              f(),
              (0, r.openModalLazy)(async () => {
                let { default: t } = await n.e("37564").then(n.bind(n, 969214));
                return (e) => (0, l.jsx)(t, { ...e });
              });
          }, [f, a, e, C, I]),
          T = [
            {
              text: _.intl.string(_.t.yeaXw8),
              value: d.$l.LEGITIMATE_ACTIVITY,
            },
            { text: _.intl.string(_.t["o++3Bw"]), value: d.$l.DM_SPAM },
            { text: _.intl.string(_.t.UfHAwc), value: d.$l.JOIN_RAID },
            { text: _.intl.string(_.t.K3UWeX), value: d.$l.OTHER },
          ];
        function R(t) {
          I.includes(t)
            ? A((e) => e.filter((e) => e !== t))
            : A((e) => [...e, t]);
        }
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: h,
          size: r.ModalSize.SMALL,
          children: [
            (0, l.jsx)(r.ModalHeader, {
              separator: !1,
              className: x.center,
              children: (0, l.jsx)(r.Heading, {
                color: "header-primary",
                variant: "heading-xl/bold",
                children: _.intl.string(_.t["1zmw/P"]),
              }),
            }),
            (0, l.jsxs)(r.ModalContent, {
              className: x.center,
              children: [
                (0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: x.textCenter,
                  children: _.intl.string(_.t.nF79oK),
                }),
                (0, l.jsx)("div", {
                  className: x.options,
                  children: T.map((t) => {
                    let { text: e, value: n } = t;
                    return (0, l.jsxs)(
                      "div",
                      {
                        className: i()(x.optionContainer, {
                          [x.optionContainerOther]: n === d.$l.OTHER,
                        }),
                        children: [
                          (0, l.jsxs)(r.Clickable, {
                            className: x.optionText,
                            onClick: () => R(n),
                            children: [
                              (0, l.jsx)("div", {
                                children: (0, l.jsx)(r.Checkbox, {
                                  type: r.Checkbox.Types.INVERTED,
                                  size: 20,
                                  value: I.includes(n),
                                  onChange: () => R(n),
                                }),
                              }),
                              (0, l.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: e,
                              }),
                            ],
                          }),
                          n === d.$l.OTHER &&
                            I.includes(d.$l.OTHER) &&
                            (0, l.jsx)("div", {
                              className: x.textboxContainer,
                              children: (0, l.jsx)(r.TextArea, {
                                className: x.falseAlarmReasonText,
                                placeholder: _.intl.string(_.t["PAM+JS"]),
                                onChange: (t) => N(t),
                                value: C,
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
            (0, l.jsxs)(r.ModalFooter, {
              className: x.__invalid_modalFooter,
              children: [
                (0, l.jsx)("div", {
                  className: x.button,
                  children: (0, l.jsx)(r.Button, {
                    onClick: p,
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.FILLED,
                    children: _.intl.string(_.t.Gh3A0N),
                  }),
                }),
                (0, l.jsx)(r.Button, {
                  onClick: f,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  children: _.intl.string(_.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    733609: function (t, e, n) {
      t.exports = {
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
//# sourceMappingURL=64956326a55092942955.js.map
