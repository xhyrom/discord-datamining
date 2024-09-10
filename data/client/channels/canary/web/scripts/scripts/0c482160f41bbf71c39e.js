"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["710"],
  {
    32342: function (e, t, a) {
      a.r(t),
        a.d(t, {
          TeamSetup: function () {
            return N;
          },
          default: function () {
            return A;
          },
        }),
        a(47120);
      var s = a(735250),
        n = a(470079),
        o = a(481060),
        d = a(782568),
        l = a(313201),
        r = a(53365),
        _ = a(377176),
        c = a(577275),
        E = a(981631),
        O = a(829857),
        i = a(689938),
        T = a(547786);
      function N(e) {
        let { selectedTeamId: t, onSetSelectedTeamId: a, teamOptions: n } = e;
        return (0, s.jsx)("div", {
          className: T.teamSetup,
          children:
            0 === n.length
              ? (0, s.jsx)(o.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children:
                    i.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_NO_TEAM_BODY.format(),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(o.Text, {
                      variant: "text-md/normal",
                      className: T.teamBodyText,
                      color: "header-secondary",
                      children:
                        i.Z.Messages
                          .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_CHOOSE_TEAM_BODY,
                    }),
                    (0, s.jsx)(o.SingleSelect, {
                      options: n,
                      placeholder:
                        i.Z.Messages
                          .GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                      value: t,
                      onChange: a,
                      "aria-label":
                        i.Z.Messages
                          .GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
                    }),
                  ],
                }),
        });
      }
      function A(e) {
        let {
            guildId: t,
            requireTeamSetup: a,
            onClose: A,
            transitionState: u,
          } = e,
          h = (0, l.Dt)(),
          [M, x] = n.useState(),
          [I, m] = n.useState(!1),
          { teams: R } = (0, c.Z)(),
          f = R.filter((e) => e.payout_account_status === O.C.ACTIVE),
          C = n.useMemo(
            () => f.map((e) => ({ label: e.name, value: e.id })),
            [f],
          ),
          p = n.useCallback(() => {
            (0, d.Z)(E.EYA.DEVELOPER_PORTAL_TEAMS);
          }, []);
        return (0, s.jsxs)(o.ModalRoot, {
          "aria-labelledby": h,
          size: o.ModalSize.DYNAMIC,
          transitionState: u,
          children: [
            (0, s.jsx)(o.ModalHeader, {
              separator: !1,
              className: T.header,
              children: (0, s.jsx)(o.Heading, {
                variant: "heading-xl/semibold",
                children: a
                  ? i.Z.Messages
                      .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE
                  : i.Z.Messages
                      .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE_ACCEPT_TERM_ONLY,
              }),
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: T.content,
              children: [
                a &&
                  (0, s.jsx)(N, {
                    selectedTeamId: M,
                    onSetSelectedTeamId: x,
                    teamOptions: C,
                  }),
                (0, s.jsx)(o.Checkbox, {
                  onChange: () => {
                    m((e) => !e);
                  },
                  size: 20,
                  type: o.Checkbox.Types.INVERTED,
                  value: I,
                  children: (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0, _.f)(),
                  }),
                }),
              ],
            }),
            (0, s.jsx)(o.ModalFooter, {
              className: T.footer,
              children: (0, s.jsx)("div", {
                className: T.buttons,
                children:
                  a && 0 === C.length
                    ? (0, s.jsx)(o.Button, {
                        onClick: p,
                        children:
                          i.Z.Messages
                            .CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_SETUP_TEAM_CTA,
                      })
                    : (0, s.jsx)(o.Button, {
                        disabled: !I || (a && null == M),
                        onClick: () => {
                          A(), (0, r.df)(t, M);
                        },
                        children: i.Z.Messages.SUBMIT,
                      }),
              }),
            }),
          ],
        });
      }
    },
    547786: function (e, t, a) {
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
//# sourceMappingURL=0c482160f41bbf71c39e.js.map
