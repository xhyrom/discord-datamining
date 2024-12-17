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
        a = n(192379),
        l = n(442837),
        o = n(481060),
        s = n(367907),
        r = n(812206),
        d = n(231757),
        c = n(511010),
        u = n(553795),
        m = n(430824),
        x = n(979192),
        h = n(647529),
        g = n(986398),
        j = n(463031),
        p = n(981631),
        _ = n(388032),
        b = n(168423);
      function f(e) {
        let { guildId: t, leaderboard: n, ...d } = e,
          u = (0, l.e7)([m.Z], () => m.Z.getGuild(t)),
          x = (0, l.e7)([r.Z], () =>
            r.Z.getApplication(n.settings.application_id),
          );
        return (a.useEffect(() => {
          null != t &&
            s.ZP.trackWithMetadata(p.rMx.OPEN_MODAL, {
              type: p.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
              guild_id: t,
            });
        }, [t]),
        null == u || null == x)
          ? null
          : (0, i.jsx)(h.Z, {
              guildId: t,
              title: _.intl.formatToPlainString(_.t["3BZonp"], {
                applicationName: x.name,
              }),
              ...d,
              children: (0, i.jsxs)(o.ModalContent, {
                className: b.modalContent,
                children: [
                  (0, i.jsxs)("div", {
                    className: b.subtitleContainer,
                    children: [
                      (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: _.intl.string(_.t.OBuzJi),
                      }),
                      (0, i.jsx)(g.Z, {
                        className: b.winnerImage,
                        leaderboard: n,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: b.notes,
                    children: [
                      n.leaderboard_id === j.z
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(N, {}),
                              (0, i.jsx)(o.Spacer, { size: 4 }),
                              (0, i.jsx)(c.Z, { className: b.divider }),
                            ],
                          })
                        : null,
                      null != u &&
                        (0, i.jsx)(C, {
                          guild: u,
                          leaderboardId: n.leaderboard_id,
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      function N() {
        return (0, i.jsxs)("div", {
          className: b.row,
          children: [
            (0, i.jsx)(o.Text, {
              variant: "text-md/medium",
              children: _.intl.string(_.t.PL48CA),
            }),
            (0, i.jsx)(B, {}),
          ],
        });
      }
      function B() {
        return null !=
          (0, l.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.RIOT_GAMES))
          ? (0, i.jsxs)(o.Button, {
              disabled: !0,
              color: o.Button.Colors.TRANSPARENT,
              look: o.Button.Looks.OUTLINED,
              innerClassName: b.doneButton,
              children: [
                (0, i.jsx)(o.CheckmarkSmallIcon, {}),
                (0, i.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children: _.intl.string(_.t.i4jeWV),
                }),
              ],
            })
          : (0, i.jsx)(o.Button, {
              onClick: () => (0, d.Z)({ platformType: p.ABu.RIOT_GAMES }),
              size: o.Button.Sizes.SMALL,
              color: o.Button.Colors.PRIMARY,
              children: _.intl.string(_.t.To26Nj),
            });
      }
      function C(e) {
        let { guild: t, leaderboardId: n } = e,
          { leaderboardsDisabled: a, toggleGuildLeaderboardsDisabled: l } = (0,
          x.O)(t.id, n);
        return (0, i.jsx)(o.FormSwitch, {
          hideBorder: !0,
          onChange: l,
          value: !a,
          className: b.guildOptoutSwitch,
          children: _.intl.string(_.t.eZhXQU),
        });
      }
    },
    647529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(442837),
        l = n(481060),
        o = n(565138),
        s = n(430824),
        r = n(63063),
        d = n(981631),
        c = n(388032),
        u = n(242024),
        m = n(767688);
      function x(e) {
        let {
            guildId: t,
            title: n,
            transitionState: x,
            children: h,
            buttons: g,
            onClose: j,
          } = e,
          p = (0, a.e7)([s.Z], () => s.Z.getGuild(t));
        if (null == p) return null;
        let _ = (0, i.jsx)(l.Button, {
          onClick: j,
          children: c.intl.string(c.t.i4jeWV),
        });
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: x,
          size: l.ModalSize.SMALL,
          className: u.container,
          children: [
            (0, i.jsxs)(l.ModalHeader, {
              separator: !1,
              className: u.modalHeader,
              children: [
                (0, i.jsx)("div", { className: u.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: m, className: u.heroImage }),
                (0, i.jsx)(l.Spacer, { size: 16 }),
                (0, i.jsx)(l.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: u.title,
                  children: n,
                }),
                (0, i.jsx)(l.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: u.guildContainer,
                  children: [
                    (0, i.jsx)(o.Z, {
                      size: o.Z.Sizes.SMOL,
                      guild: p,
                      className: u.guildIcon,
                    }),
                    (0, i.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: p.name,
                    }),
                  ],
                }),
                (0, i.jsx)(l.ModalCloseButton, {
                  onClick: j,
                  innerClassName: u.closeButton,
                  className: u.close,
                }),
              ],
            }),
            h,
            (0, i.jsxs)(l.ModalFooter, {
              className: u.footer,
              children: [
                (0, i.jsx)("div", {
                  className: u.footerButtons,
                  children: null != g ? g : _,
                }),
                (0, i.jsx)(l.Text, {
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
    168423: function (e, t, n) {
      e.exports = {
        subtitleContainer: "subtitleContainer_a6ec51",
        winnerImage: "winnerImage_a6ec51",
        modalContent: "modalContent_a6ec51",
        notes: "notes_a6ec51",
        row: "row_a6ec51",
        divider: "divider_a6ec51",
        doneButton: "doneButton_a6ec51",
        guildOptoutSwitch: "guildOptoutSwitch_a6ec51",
      };
    },
    242024: function (e, t, n) {
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
//# sourceMappingURL=7cd187453b449c038f09.js.map
