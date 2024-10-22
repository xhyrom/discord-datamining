"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73217"],
  {
    767688: function (e) {
      e.exports = "/assets/53dcdfb1c4d83a59b137.png";
    },
    139964: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return g;
          },
        });
      var n = s(200651);
      s(192379);
      var o = s(442837),
        a = s(481060),
        l = s(231757),
        i = s(511010),
        r = s(553795),
        d = s(430824),
        c = s(979192),
        u = s(647529),
        x = s(463031),
        m = s(981631),
        h = s(689938),
        _ = s(97741);
      function g(e) {
        let { guildId: t, ...s } = e,
          l = (0, o.e7)([d.Z], () => d.Z.getGuild(t));
        return null == l
          ? null
          : (0, n.jsx)(u.Z, {
              guildId: t,
              title: h.Z.Messages.LEADERBOARD_MODAL_TITLE,
              ...s,
              children: (0, n.jsxs)(a.ModalContent, {
                className: _.modalContent,
                children: [
                  (0, n.jsxs)("div", {
                    className: _.subtitleContainer,
                    children: [
                      (0, n.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: h.Z.Messages.LEADERBOARD_MODAL_SUBTITLE,
                      }),
                      (0, n.jsx)(a.LeagueOfLegendsBrandIcon, { size: "xs" }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: _.notes,
                    children: [
                      (0, n.jsx)(j, {}),
                      (0, n.jsx)(a.Spacer, { size: 4 }),
                      (0, n.jsx)(i.Z, { className: _.divider }),
                      null != l && (0, n.jsx)(S, { guild: l }),
                    ],
                  }),
                ],
              }),
            });
      }
      function j() {
        return (0, n.jsxs)("div", {
          className: _.row,
          children: [
            (0, n.jsx)(a.Text, {
              variant: "text-md/medium",
              children: h.Z.Messages.LEADERBOARD_MODAL_CONNECT_RIOT,
            }),
            (0, n.jsx)(N, {}),
          ],
        });
      }
      function N() {
        return null !=
          (0, o.e7)([r.Z], () => r.Z.getAccount(null, m.ABu.RIOT_GAMES))
          ? (0, n.jsxs)(a.Button, {
              disabled: !0,
              color: a.Button.Colors.TRANSPARENT,
              look: a.Button.Looks.OUTLINED,
              innerClassName: _.doneButton,
              children: [
                (0, n.jsx)(a.CheckmarkSmallIcon, {}),
                (0, n.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  children: h.Z.Messages.DONE,
                }),
              ],
            })
          : (0, n.jsx)(a.Button, {
              onClick: () => (0, l.Z)({ platformType: m.ABu.RIOT_GAMES }),
              size: a.Button.Sizes.SMALL,
              color: a.Button.Colors.PRIMARY,
              children: h.Z.Messages.LEADERBOARD_SETTINGS_SIGN_IN_TO_CONNECTION,
            });
      }
      function S(e) {
        let { guild: t } = e,
          { leaderboardsDisabled: s, toggleGuildLeaderboardsDisabled: o } = (0,
          c.O)(t.id, x._);
        return (0, n.jsx)(a.FormSwitch, {
          hideBorder: !0,
          onChange: o,
          value: !s,
          className: _.guildOptoutSwitch,
          children: h.Z.Messages.LEADERBOARD_SHARE_STATS,
        });
      }
    },
    647529: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = s(200651);
      s(192379);
      var o = s(442837),
        a = s(481060),
        l = s(565138),
        i = s(430824),
        r = s(689938),
        d = s(583117),
        c = s(767688);
      function u(e) {
        let {
            guildId: t,
            title: s,
            transitionState: u,
            children: x,
            buttons: m,
            onClose: h,
          } = e,
          _ = (0, o.e7)([i.Z], () => i.Z.getGuild(t));
        if (null == _) return null;
        let g = (0, n.jsx)(a.Button, {
          onClick: h,
          children: r.Z.Messages.DONE,
        });
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: u,
          size: a.ModalSize.SMALL,
          className: d.container,
          children: [
            (0, n.jsxs)(a.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              children: [
                (0, n.jsx)("div", { className: d.gradientSplash }),
                (0, n.jsx)("img", { alt: "", src: c, className: d.heroImage }),
                (0, n.jsx)(a.Spacer, { size: 16 }),
                (0, n.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: d.title,
                  children: s,
                }),
                (0, n.jsx)(a.Spacer, { size: 4 }),
                (0, n.jsxs)("div", {
                  className: d.guildContainer,
                  children: [
                    (0, n.jsx)(l.Z, {
                      size: l.Z.Sizes.SMOL,
                      guild: _,
                      className: d.guildIcon,
                    }),
                    (0, n.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: _.name,
                    }),
                  ],
                }),
                (0, n.jsx)(a.ModalCloseButton, {
                  onClick: h,
                  innerClassName: d.closeButton,
                  className: d.close,
                }),
              ],
            }),
            x,
            (0, n.jsx)(a.ModalFooter, {
              className: d.footer,
              children: (0, n.jsx)("div", {
                className: d.footerButtons,
                children: null != m ? m : g,
              }),
            }),
          ],
        });
      }
    },
    97741: function (e, t, s) {
      e.exports = {
        subtitleContainer: "subtitleContainer_a6ec51",
        modalContent: "modalContent_a6ec51",
        notes: "notes_a6ec51",
        row: "row_a6ec51",
        divider: "divider_a6ec51",
        doneButton: "doneButton_a6ec51",
        guildOptoutSwitch: "guildOptoutSwitch_a6ec51",
      };
    },
    583117: function (e, t, s) {
      e.exports = {
        gradientSplash: "gradientSplash_b3820d",
        modalHeader: "modalHeader_b3820d",
        title: "title_b3820d",
        heroImage: "heroImage_b3820d",
        guildContainer: "guildContainer_b3820d",
        guildIcon: "guildIcon_b3820d",
        closeButton: "closeButton_b3820d",
        close: "close_b3820d",
        footerButtons: "footerButtons_b3820d",
        footer: "footer_b3820d",
        container: "container_b3820d",
      };
    },
  },
]);
//# sourceMappingURL=76349e9b836b1b4a604e.js.map
