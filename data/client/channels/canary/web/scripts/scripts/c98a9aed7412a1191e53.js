"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73217"],
  {
    767688: function (e) {
      e.exports = "/assets/53dcdfb1c4d83a59b137.png";
    },
    139964: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var s = n(200651);
      n(192379);
      var o = n(442837),
        i = n(481060),
        l = n(231757),
        a = n(511010),
        r = n(553795),
        d = n(430824),
        c = n(979192),
        u = n(647529),
        x = n(463031),
        m = n(981631),
        h = n(388032),
        g = n(856351);
      function j(e) {
        let { guildId: t, ...n } = e,
          l = (0, o.e7)([d.Z], () => d.Z.getGuild(t));
        return null == l
          ? null
          : (0, s.jsx)(u.Z, {
              guildId: t,
              title: h.intl.string(h.t["WWBw5+"]),
              ...n,
              children: (0, s.jsxs)(i.ModalContent, {
                className: g.modalContent,
                children: [
                  (0, s.jsxs)("div", {
                    className: g.subtitleContainer,
                    children: [
                      (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: h.intl.string(h.t.OBuzJi),
                      }),
                      (0, s.jsx)(i.LeagueOfLegendsBrandIcon, { size: "xs" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: g.notes,
                    children: [
                      (0, s.jsx)(p, {}),
                      (0, s.jsx)(i.Spacer, { size: 4 }),
                      (0, s.jsx)(a.Z, { className: g.divider }),
                      null != l && (0, s.jsx)(B, { guild: l }),
                    ],
                  }),
                ],
              }),
            });
      }
      function p() {
        return (0, s.jsxs)("div", {
          className: g.row,
          children: [
            (0, s.jsx)(i.Text, {
              variant: "text-md/medium",
              children: h.intl.string(h.t.PL48CA),
            }),
            (0, s.jsx)(f, {}),
          ],
        });
      }
      function f() {
        return null !=
          (0, o.e7)([r.Z], () => r.Z.getAccount(null, m.ABu.RIOT_GAMES))
          ? (0, s.jsxs)(i.Button, {
              disabled: !0,
              color: i.Button.Colors.TRANSPARENT,
              look: i.Button.Looks.OUTLINED,
              innerClassName: g.doneButton,
              children: [
                (0, s.jsx)(i.CheckmarkSmallIcon, {}),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  children: h.intl.string(h.t.i4jeWV),
                }),
              ],
            })
          : (0, s.jsx)(i.Button, {
              onClick: () => (0, l.Z)({ platformType: m.ABu.RIOT_GAMES }),
              size: i.Button.Sizes.SMALL,
              color: i.Button.Colors.PRIMARY,
              children: h.intl.string(h.t.To26Nj),
            });
      }
      function B(e) {
        let { guild: t } = e,
          { leaderboardsDisabled: n, toggleGuildLeaderboardsDisabled: o } = (0,
          c.O)(t.id, x._);
        return (0, s.jsx)(i.FormSwitch, {
          hideBorder: !0,
          onChange: o,
          value: !n,
          className: g.guildOptoutSwitch,
          children: h.intl.string(h.t.eZhXQU),
        });
      }
    },
    647529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var s = n(200651);
      n(192379);
      var o = n(442837),
        i = n(481060),
        l = n(565138),
        a = n(430824),
        r = n(388032),
        d = n(436728),
        c = n(767688);
      function u(e) {
        let {
            guildId: t,
            title: n,
            transitionState: u,
            children: x,
            buttons: m,
            onClose: h,
          } = e,
          g = (0, o.e7)([a.Z], () => a.Z.getGuild(t));
        if (null == g) return null;
        let j = (0, s.jsx)(i.Button, {
          onClick: h,
          children: r.intl.string(r.t.i4jeWV),
        });
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: u,
          size: i.ModalSize.SMALL,
          className: d.container,
          children: [
            (0, s.jsxs)(i.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              children: [
                (0, s.jsx)("div", { className: d.gradientSplash }),
                (0, s.jsx)("img", { alt: "", src: c, className: d.heroImage }),
                (0, s.jsx)(i.Spacer, { size: 16 }),
                (0, s.jsx)(i.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: d.title,
                  children: n,
                }),
                (0, s.jsx)(i.Spacer, { size: 4 }),
                (0, s.jsxs)("div", {
                  className: d.guildContainer,
                  children: [
                    (0, s.jsx)(l.Z, {
                      size: l.Z.Sizes.SMOL,
                      guild: g,
                      className: d.guildIcon,
                    }),
                    (0, s.jsx)(i.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: g.name,
                    }),
                  ],
                }),
                (0, s.jsx)(i.ModalCloseButton, {
                  onClick: h,
                  innerClassName: d.closeButton,
                  className: d.close,
                }),
              ],
            }),
            x,
            (0, s.jsx)(i.ModalFooter, {
              className: d.footer,
              children: (0, s.jsx)("div", {
                className: d.footerButtons,
                children: null != m ? m : j,
              }),
            }),
          ],
        });
      }
    },
    856351: function (e, t, n) {
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
    436728: function (e, t, n) {
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
//# sourceMappingURL=c98a9aed7412a1191e53.js.map
