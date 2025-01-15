"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25526"],
  {
    767688: function (e) {
      e.exports = "/assets/53dcdfb1c4d83a59b137.png";
    },
    935369: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(192379),
        a = n(479531),
        r = n(388032);
      function s(e) {
        let [t, n] = i.useState(!1),
          [s, o] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var t = arguments.length, i = Array(t), s = 0; s < t; s++)
                i[s] = arguments[s];
              try {
                return o(null), n(!0), await e(...i);
              } catch (e) {
                e.message !== r.intl.string(r.t.N2yb9f) &&
                  o(e instanceof a.Z ? e : new a.Z(e));
              } finally {
                n(!1);
              }
            },
            [e],
          ),
          { loading: t, error: s },
        ];
      }
    },
    707515: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var i = n(425128),
        a = n(434382);
      let r = async (e) => {
        await i._b(e),
          await a.Z.fetchLeaderboard({
            guildId: e.guildId,
            leaderboardId: e.leaderboardId,
            force: !0,
          });
      };
    },
    262918: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        a = n(192379),
        r = n(512722),
        s = n.n(r),
        o = n(902704),
        l = n(481060),
        d = n(935369),
        c = n(367907),
        u = n(707515),
        h = n(528567),
        g = n(873128),
        x = n(647529),
        m = n(986398),
        f = n(981631),
        _ = n(388032),
        b = n(111865);
      function w(e) {
        let { guildId: t, leaderboardId: n, ...r } = e,
          w = (0, g.Z)({ guildId: t, leaderboardId: n });
        s()(
          null != w,
          "Leaderboard must be loaded before opening the settings modal",
        );
        let j = w.guild_settings,
          [p, v] = a.useState(j.sort_by_statistic_id),
          [S, C] = a.useState(j.sort_desc),
          [I, N] = a.useState(j.show_winner_crown),
          [y, { loading: Z }] = (0, d.Z)(u._);
        a.useEffect(() => {
          c.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, {
            type: f.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL,
          });
        }, []);
        let B =
            p !== j.sort_by_statistic_id ||
            S !== j.sort_desc ||
            I !== j.show_winner_crown,
          M = async () => {
            await y({
              guildId: t,
              leaderboardId: n,
              sortByStatisticId: p,
              sortDesc: S,
              showWinnerCrown: I,
            }),
              r.onClose();
          },
          L = a.useMemo(() => {
            let e = Object.values(w.settings.statistics).filter(
                (e) => e.selectable_for_competition,
              ),
              t = [];
            for (let n of e)
              for (let e of [!0, !1])
                t.push({
                  value: { sortByStatisticId: n.id, sortDesc: e },
                  label: (0, h.s)({
                    statisticId: n.id,
                    sortDesc: e,
                    aggregationType: n.aggregation_type,
                  }),
                });
            return t;
          }, [w]),
          T = L.find((e) =>
            (0, o.Z)(e.value, { sortByStatisticId: p, sortDesc: S }),
          );
        return (0, i.jsx)(x.Z, {
          ...r,
          guildId: t,
          title: _.intl.string(_.t.rv9GUV),
          buttons: (0, i.jsx)(l.Button, {
            onClick: M,
            submitting: Z,
            disabled: !B,
            children: _.intl.string(_.t.R3BPHx),
          }),
          children: (0, i.jsxs)(l.ModalContent, {
            className: b.content,
            children: [
              (0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: _.intl.string(_.t.IQO9Fx),
              }),
              (0, i.jsx)(l.Spacer, { size: 8 }),
              (0, i.jsx)(l.SingleSelect, {
                placeholder: _.intl.string(_.t["g/Rr2d"]),
                value: null == T ? void 0 : T.value,
                options: L,
                onChange: (e) => {
                  let { sortByStatisticId: t, sortDesc: n } = e;
                  v(t), C(n);
                },
              }),
              (0, i.jsx)("div", { className: b.divider }),
              (0, i.jsx)(l.FormTitle, { children: _.intl.string(_.t.HU4EKC) }),
              (0, i.jsx)(l.Spacer, { size: 8 }),
              (0, i.jsx)(l.FormSwitch, {
                hideBorder: !0,
                onChange: () => N((e) => !e),
                value: I,
                className: b.showWinnerCrownSwitch,
                children: (0, i.jsxs)("div", {
                  className: b.showWinnerCrownTextContainer,
                  children: [
                    (0, i.jsx)(l.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: _.intl.string(_.t.cH7QEx),
                    }),
                    (0, i.jsx)(m.Z, {
                      className: b.winnerImage,
                      leaderboard: w,
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    647529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(442837),
        r = n(481060),
        s = n(565138),
        o = n(430824),
        l = n(63063),
        d = n(981631),
        c = n(388032),
        u = n(935759),
        h = n(767688);
      function g(e) {
        let {
            guildId: t,
            title: n,
            transitionState: g,
            children: x,
            buttons: m,
            onClose: f,
          } = e,
          _ = (0, a.e7)([o.Z], () => o.Z.getGuild(t));
        if (null == _) return null;
        let b = (0, i.jsx)(r.Button, {
          onClick: f,
          children: c.intl.string(c.t.i4jeWV),
        });
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: g,
          size: r.ModalSize.SMALL,
          className: u.container,
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              separator: !1,
              className: u.modalHeader,
              children: [
                (0, i.jsx)("div", { className: u.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: h, className: u.heroImage }),
                (0, i.jsx)(r.Spacer, { size: 16 }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: u.title,
                  children: n,
                }),
                (0, i.jsx)(r.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: u.guildContainer,
                  children: [
                    (0, i.jsx)(s.Z, {
                      size: s.Z.Sizes.SMOL,
                      guild: _,
                      className: u.guildIcon,
                    }),
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: _.name,
                    }),
                  ],
                }),
                (0, i.jsx)(r.ModalCloseButton, {
                  onClick: f,
                  innerClassName: u.closeButton,
                  className: u.close,
                }),
              ],
            }),
            x,
            (0, i.jsxs)(r.ModalFooter, {
              className: u.footer,
              children: [
                (0, i.jsx)("div", {
                  className: u.footerButtons,
                  children: null != m ? m : b,
                }),
                (0, i.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "text-secondary",
                  children: c.intl.format(c.t.zbMH0d, {
                    link: l.Z.getArticleURL(d.BhN.GUILD_LEADERBOARD),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    111865: function (e, t, n) {
      e.exports = {
        content: "content_c4fa87",
        divider: "divider_c4fa87",
        showWinnerCrownSwitch: "showWinnerCrownSwitch_c4fa87",
        showWinnerCrownTextContainer: "showWinnerCrownTextContainer_c4fa87",
        winnerImage: "winnerImage_c4fa87",
      };
    },
    935759: function (e, t, n) {
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
//# sourceMappingURL=b31a9616d2757ecdf3e3.js.map
