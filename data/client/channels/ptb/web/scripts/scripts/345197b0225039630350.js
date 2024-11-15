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
            return f;
          },
        });
      var i = n(200651),
        s = n(192379),
        o = n(442837),
        l = n(481060),
        a = n(367907),
        r = n(231757),
        d = n(511010),
        c = n(553795),
        u = n(430824),
        x = n(979192),
        m = n(647529),
        h = n(463031),
        g = n(981631),
        j = n(388032),
        _ = n(97741);
      function f(e) {
        let { guildId: t, ...n } = e,
          r = (0, o.e7)([u.Z], () => u.Z.getGuild(t));
        return (s.useEffect(() => {
          null != t &&
            a.ZP.trackWithMetadata(g.rMx.OPEN_MODAL, {
              type: g.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
              guild_id: t,
            });
        }, [t]),
        null == r)
          ? null
          : (0, i.jsx)(m.Z, {
              guildId: t,
              title: j.intl.string(j.t["WWBw5+"]),
              ...n,
              children: (0, i.jsxs)(l.ModalContent, {
                className: _.modalContent,
                children: [
                  (0, i.jsxs)("div", {
                    className: _.subtitleContainer,
                    children: [
                      (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: j.intl.string(j.t.OBuzJi),
                      }),
                      (0, i.jsx)(l.LeagueOfLegendsBrandIcon, { size: "xs" }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: _.notes,
                    children: [
                      (0, i.jsx)(p, {}),
                      (0, i.jsx)(l.Spacer, { size: 4 }),
                      (0, i.jsx)(d.Z, { className: _.divider }),
                      null != r && (0, i.jsx)(B, { guild: r }),
                    ],
                  }),
                ],
              }),
            });
      }
      function p() {
        return (0, i.jsxs)("div", {
          className: _.row,
          children: [
            (0, i.jsx)(l.Text, {
              variant: "text-md/medium",
              children: j.intl.string(j.t.PL48CA),
            }),
            (0, i.jsx)(C, {}),
          ],
        });
      }
      function C() {
        return null !=
          (0, o.e7)([c.Z], () => c.Z.getAccount(null, g.ABu.RIOT_GAMES))
          ? (0, i.jsxs)(l.Button, {
              disabled: !0,
              color: l.Button.Colors.TRANSPARENT,
              look: l.Button.Looks.OUTLINED,
              innerClassName: _.doneButton,
              children: [
                (0, i.jsx)(l.CheckmarkSmallIcon, {}),
                (0, i.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  children: j.intl.string(j.t.i4jeWV),
                }),
              ],
            })
          : (0, i.jsx)(l.Button, {
              onClick: () => (0, r.Z)({ platformType: g.ABu.RIOT_GAMES }),
              size: l.Button.Sizes.SMALL,
              color: l.Button.Colors.PRIMARY,
              children: j.intl.string(j.t.To26Nj),
            });
      }
      function B(e) {
        let { guild: t } = e,
          { leaderboardsDisabled: n, toggleGuildLeaderboardsDisabled: s } = (0,
          x.O)(t.id, h._);
        return (0, i.jsx)(l.FormSwitch, {
          hideBorder: !0,
          onChange: s,
          value: !n,
          className: _.guildOptoutSwitch,
          children: j.intl.string(j.t.eZhXQU),
        });
      }
    },
    647529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(442837),
        o = n(481060),
        l = n(565138),
        a = n(430824),
        r = n(388032),
        d = n(583117),
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
          g = (0, s.e7)([a.Z], () => a.Z.getGuild(t));
        if (null == g) return null;
        let j = (0, i.jsx)(o.Button, {
          onClick: h,
          children: r.intl.string(r.t.i4jeWV),
        });
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: u,
          size: o.ModalSize.SMALL,
          className: d.container,
          children: [
            (0, i.jsxs)(o.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              children: [
                (0, i.jsx)("div", { className: d.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: c, className: d.heroImage }),
                (0, i.jsx)(o.Spacer, { size: 16 }),
                (0, i.jsx)(o.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: d.title,
                  children: n,
                }),
                (0, i.jsx)(o.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: d.guildContainer,
                  children: [
                    (0, i.jsx)(l.Z, {
                      size: l.Z.Sizes.SMOL,
                      guild: g,
                      className: d.guildIcon,
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: g.name,
                    }),
                  ],
                }),
                (0, i.jsx)(o.ModalCloseButton, {
                  onClick: h,
                  innerClassName: d.closeButton,
                  className: d.close,
                }),
              ],
            }),
            x,
            (0, i.jsx)(o.ModalFooter, {
              className: d.footer,
              children: (0, i.jsx)("div", {
                className: d.footerButtons,
                children: null != m ? m : j,
              }),
            }),
          ],
        });
      }
    },
    97741: function (e, t, n) {
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
    583117: function (e, t, n) {
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
//# sourceMappingURL=345197b0225039630350.js.map
