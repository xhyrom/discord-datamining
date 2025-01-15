"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["710"],
  {
    32342: function (e, t, n) {
      n.r(t),
        n.d(t, {
          TeamSetup: function () {
            return x;
          },
          default: function () {
            return p;
          },
        }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        r = n(481060),
        s = n(782568),
        o = n(313201),
        i = n(53365),
        d = n(377176),
        c = n(577275),
        u = n(981631),
        h = n(829857),
        f = n(388032),
        m = n(895832);
      function x(e) {
        let { selectedTeamId: t, onSetSelectedTeamId: n, teamOptions: l } = e;
        return (0, a.jsx)("div", {
          className: m.teamSetup,
          children:
            0 === l.length
              ? (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: f.intl.format(f.t.Jyy4pa, {}),
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(r.Text, {
                      variant: "text-md/normal",
                      className: m.teamBodyText,
                      color: "header-secondary",
                      children: f.intl.string(f.t.U1Vz29),
                    }),
                    (0, a.jsx)(r.SingleSelect, {
                      options: l,
                      placeholder: f.intl.string(f.t.QXf93N),
                      value: t,
                      onChange: n,
                      "aria-label": f.intl.string(f.t.QXf93N),
                    }),
                  ],
                }),
        });
      }
      function p(e) {
        let {
            guildId: t,
            requireTeamSetup: n,
            onClose: p,
            transitionState: g,
          } = e,
          j = (0, o.Dt)(),
          [b, T] = l.useState(),
          [C, S] = l.useState(!1),
          { teams: y } = (0, c.Z)(),
          _ = y.filter((e) => e.payout_account_status === h.C.ACTIVE),
          k = l.useMemo(
            () => _.map((e) => ({ label: e.name, value: e.id })),
            [_],
          ),
          v = l.useCallback(() => {
            (0, s.Z)(u.EYA.DEVELOPER_PORTAL_TEAMS);
          }, []);
        return (0, a.jsxs)(r.ModalRoot, {
          "aria-labelledby": j,
          size: r.ModalSize.DYNAMIC,
          transitionState: g,
          children: [
            (0, a.jsx)(r.ModalHeader, {
              separator: !1,
              className: m.header,
              children: (0, a.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: n
                  ? f.intl.string(f.t.inJKQk)
                  : f.intl.string(f.t.GfObDA),
              }),
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: m.content,
              children: [
                n &&
                  (0, a.jsx)(x, {
                    selectedTeamId: b,
                    onSetSelectedTeamId: T,
                    teamOptions: k,
                  }),
                (0, a.jsx)(r.Checkbox, {
                  onChange: () => {
                    S((e) => !e);
                  },
                  size: 20,
                  type: r.Checkbox.Types.INVERTED,
                  value: C,
                  children: (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0, d.f)(),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(r.ModalFooter, {
              className: m.footer,
              children: (0, a.jsx)("div", {
                className: m.buttons,
                children:
                  n && 0 === k.length
                    ? (0, a.jsx)(r.Button, {
                        onClick: v,
                        children: f.intl.string(f.t.JddVgI),
                      })
                    : (0, a.jsx)(r.Button, {
                        disabled: !C || (n && null == b),
                        onClick: () => {
                          p(), (0, i.df)(t, b);
                        },
                        children: f.intl.string(f.t.geKm7u),
                      }),
              }),
            }),
          ],
        });
      }
    },
    895832: function (e, t, n) {
      e.exports = {
        header: "header_f32efd",
        content: "content_f32efd",
        teamSetup: "teamSetup_f32efd",
        teamBodyText: "teamBodyText_f32efd",
        footer: "footer_f32efd",
        buttons: "buttons_f32efd",
      };
    },
  },
]);
//# sourceMappingURL=106743e113455d912f7e.js.map
