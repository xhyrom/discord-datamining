"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73217"],
  {
    767688: function (e) {
      e.exports = "/assets/53dcdfb1c4d83a59b137.png";
    },
    139964: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return j;
          },
        });
      var n = s(735250);
      s(470079);
      var t = s(442837),
        i = s(481060),
        o = s(231757),
        l = s(565138),
        d = s(511010),
        r = s(553795),
        c = s(430824),
        m = s(914010),
        u = s(979192),
        x = s(981631),
        h = s(689938),
        g = s(97741),
        _ = s(767688);
      function j(e) {
        let { transitionState: a } = e,
          s = (0, t.e7)([m.Z], () => m.Z.getGuildId()),
          o = (0, t.e7)([c.Z], () => c.Z.getGuild(s));
        return null == o
          ? null
          : (0, n.jsxs)(i.ModalRoot, {
              transitionState: a,
              size: i.ModalSize.DYNAMIC,
              className: g.modalRoot,
              children: [
                (0, n.jsx)("div", { className: g.gradientSplash }),
                (0, n.jsxs)(i.ModalHeader, {
                  separator: !1,
                  className: g.modalHeader,
                  children: [
                    (0, n.jsx)("div", {
                      className: g.imageFrame,
                      children: (0, n.jsx)("img", {
                        alt: h.Z.Messages.LEADERBOARD_MODAL_TITLE,
                        src: _,
                        className: g.heroImage,
                      }),
                    }),
                    (0, n.jsx)(i.Heading, {
                      variant: "heading-xl/bold",
                      color: "header-primary",
                      className: g.title,
                      children: h.Z.Messages.LEADERBOARD_MODAL_TITLE,
                    }),
                    (0, n.jsxs)("div", {
                      className: g.guildContainer,
                      children: [
                        (0, n.jsx)(l.Z, { guild: o, className: g.guildIcon }),
                        (0, n.jsx)(i.Text, {
                          variant: "text-md/semibold",
                          color: "text-secondary",
                          children: o.name,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(i.ModalContent, {
                  className: g.modalContent,
                  children: [
                    (0, n.jsxs)("div", {
                      className: g.subtitleContainer,
                      children: [
                        (0, n.jsx)(i.Text, {
                          variant: "text-md/normal",
                          color: "text-secondary",
                          children: h.Z.Messages.LEADERBOARD_MODAL_SUBTITLE,
                        }),
                        (0, n.jsx)(i.LeagueOfLegendsBrandIcon, { size: "xs" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: g.notes,
                      children: [
                        (0, n.jsx)(C, {}),
                        (0, n.jsx)(d.Z, { className: g.divider }),
                        null != o && (0, n.jsx)(A, { guild: o }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
      function C() {
        return (0, n.jsxs)("div", {
          className: g.row,
          children: [
            (0, n.jsx)(i.Text, {
              variant: "text-md/medium",
              children: h.Z.Messages.LEADERBOARD_MODAL_CONNECT_RIOT,
            }),
            (0, n.jsx)(N, {}),
          ],
        });
      }
      function N() {
        return null !=
          (0, t.e7)([r.Z], () => r.Z.getAccount(null, x.ABu.RIOT_GAMES))
          ? (0, n.jsxs)(i.Button, {
              disabled: !0,
              color: i.Button.Colors.TRANSPARENT,
              look: i.Button.Looks.OUTLINED,
              innerClassName: g.doneButton,
              children: [
                (0, n.jsx)(i.CheckmarkSmallIcon, {}),
                (0, n.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  children: h.Z.Messages.DONE,
                }),
              ],
            })
          : (0, n.jsx)(i.Button, {
              onClick: () => (0, o.Z)({ platformType: x.ABu.RIOT_GAMES }),
              children: h.Z.Messages.CONNECT,
            });
      }
      function A(e) {
        let { guild: a } = e,
          { leaderboardsDisabled: s, toggleGuildLeaderboardsDisabled: t } = (0,
          u.O)(a.id);
        return (0, n.jsxs)("div", {
          className: g.row,
          children: [
            (0, n.jsx)(i.Text, {
              variant: "text-sm/medium",
              children: h.Z.Messages.LEADERBOARD_SHARE_STATS,
            }),
            (0, n.jsx)("div", {
              className: g.switchContainer,
              children: (0, n.jsx)(i.Switch, {
                checked: !s,
                onChange: () => t(),
              }),
            }),
          ],
        });
      }
    },
    97741: function (e, a, s) {
      e.exports = {
        modalRoot: "modalRoot_a6ec51",
        gradientSplash: "gradientSplash_a6ec51",
        modalHeader: "modalHeader_a6ec51",
        title: "title_a6ec51",
        subtitleContainer: "subtitleContainer_a6ec51",
        imageFrame: "imageFrame_a6ec51",
        heroImage: "heroImage_a6ec51",
        modalContent: "modalContent_a6ec51",
        notes: "notes_a6ec51",
        row: "row_a6ec51",
        guildContainer: "guildContainer_a6ec51",
        guildIcon: "guildIcon_a6ec51",
        divider: "divider_a6ec51",
        doneButton: "doneButton_a6ec51",
        switchContainer: "switchContainer_a6ec51",
      };
    },
  },
]);
//# sourceMappingURL=1496f210134ad89d89a0.js.map
