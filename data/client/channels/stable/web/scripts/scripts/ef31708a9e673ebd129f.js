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
        _ = n(856351);
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
                      (0, i.jsx)(B, {}),
                      (0, i.jsx)(l.Spacer, { size: 4 }),
                      (0, i.jsx)(d.Z, { className: _.divider }),
                      null != r && (0, i.jsx)(C, { guild: r }),
                    ],
                  }),
                ],
              }),
            });
      }
      function B() {
        return (0, i.jsxs)("div", {
          className: _.row,
          children: [
            (0, i.jsx)(l.Text, {
              variant: "text-md/medium",
              children: j.intl.string(j.t.PL48CA),
            }),
            (0, i.jsx)(p, {}),
          ],
        });
      }
      function p() {
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
      function C(e) {
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
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(442837),
        o = n(481060),
        l = n(565138),
        a = n(430824),
        r = n(63063),
        d = n(981631),
        c = n(388032),
        u = n(436728),
        x = n(767688);
      function m(e) {
        let {
            guildId: t,
            title: n,
            transitionState: m,
            children: h,
            buttons: g,
            onClose: j,
          } = e,
          _ = (0, s.e7)([a.Z], () => a.Z.getGuild(t));
        if (null == _) return null;
        let f = (0, i.jsx)(o.Button, {
          onClick: j,
          children: c.intl.string(c.t.i4jeWV),
        });
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: m,
          size: o.ModalSize.SMALL,
          className: u.container,
          children: [
            (0, i.jsxs)(o.ModalHeader, {
              separator: !1,
              className: u.modalHeader,
              children: [
                (0, i.jsx)("div", { className: u.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: x, className: u.heroImage }),
                (0, i.jsx)(o.Spacer, { size: 16 }),
                (0, i.jsx)(o.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: u.title,
                  children: n,
                }),
                (0, i.jsx)(o.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: u.guildContainer,
                  children: [
                    (0, i.jsx)(l.Z, {
                      size: l.Z.Sizes.SMOL,
                      guild: _,
                      className: u.guildIcon,
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: _.name,
                    }),
                  ],
                }),
                (0, i.jsx)(o.ModalCloseButton, {
                  onClick: j,
                  innerClassName: u.closeButton,
                  className: u.close,
                }),
              ],
            }),
            h,
            (0, i.jsxs)(o.ModalFooter, {
              className: u.footer,
              children: [
                (0, i.jsx)("div", {
                  className: u.footerButtons,
                  children: null != g ? g : f,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "text-secondary",
                  children: c.intl.format(c.t.zbMH0d, {
                    link: r.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD),
                  }),
                }),
              ],
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
//# sourceMappingURL=ef31708a9e673ebd129f.js.map
