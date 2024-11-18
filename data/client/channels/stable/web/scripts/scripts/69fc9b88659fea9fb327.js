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
        r = n(479531),
        a = n(388032);
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
                e.message !== a.intl.string(a.t.N2yb9f) &&
                  o(e instanceof r.Z ? e : new r.Z(e));
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
          return a;
        },
      });
      var i = n(425128),
        r = n(434382);
      let a = async (e) => {
        await i._b(e),
          await r.Z.fetchLeaderboard({
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
            return b;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        r = n(192379),
        a = n(512722),
        s = n.n(a),
        o = n(902704),
        l = n(481060),
        d = n(935369),
        c = n(367907),
        u = n(707515),
        h = n(528567),
        x = n(873128),
        g = n(647529),
        f = n(981631),
        m = n(388032),
        _ = n(499945);
      function b(e) {
        let { guildId: t, leaderboardId: n, ...a } = e,
          b = (0, x.Z)({ guildId: t, leaderboardId: n });
        s()(
          null != b,
          "Leaderboard must be loaded before opening the settings modal",
        );
        let j = b.guild_settings,
          [p, w] = r.useState(j.sort_by_statistic_id),
          [v, S] = r.useState(j.sort_desc),
          [C, N] = r.useState(j.show_winner_crown),
          [y, { loading: I }] = (0, d.Z)(u._);
        r.useEffect(() => {
          c.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, {
            type: f.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL,
          });
        }, []);
        let B =
            p !== j.sort_by_statistic_id ||
            v !== j.sort_desc ||
            C !== j.show_winner_crown,
          Z = async () => {
            await y({
              guildId: t,
              leaderboardId: n,
              sortByStatisticId: p,
              sortDesc: v,
              showWinnerCrown: C,
            }),
              a.onClose();
          },
          L = r.useMemo(() => {
            let e = Object.values(b.settings.statistics).filter(
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
          }, [b]),
          M = L.find((e) =>
            (0, o.Z)(e.value, { sortByStatisticId: p, sortDesc: v }),
          );
        return (0, i.jsx)(g.Z, {
          ...a,
          guildId: t,
          title: m.intl.string(m.t.rv9GUV),
          buttons: (0, i.jsx)(l.Button, {
            onClick: Z,
            submitting: I,
            disabled: !B,
            children: m.intl.string(m.t.R3BPHx),
          }),
          children: (0, i.jsxs)(l.ModalContent, {
            className: _.content,
            children: [
              (0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: m.intl.string(m.t.IQO9Fx),
              }),
              (0, i.jsx)(l.Spacer, { size: 8 }),
              (0, i.jsx)(l.SingleSelect, {
                placeholder: m.intl.string(m.t["g/Rr2d"]),
                value: null == M ? void 0 : M.value,
                options: L,
                onChange: (e) => {
                  let { sortByStatisticId: t, sortDesc: n } = e;
                  w(t), S(n);
                },
              }),
              (0, i.jsx)("div", { className: _.divider }),
              (0, i.jsx)(l.FormTitle, { children: m.intl.string(m.t.HU4EKC) }),
              (0, i.jsx)(l.Spacer, { size: 8 }),
              (0, i.jsx)(l.FormSwitch, {
                hideBorder: !0,
                onChange: () => N((e) => !e),
                value: C,
                className: _.showWinnerCrownSwitch,
                children: (0, i.jsxs)("div", {
                  className: _.showWinnerCrownTextContainer,
                  children: [
                    (0, i.jsx)(l.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: m.intl.string(m.t.cH7QEx),
                    }),
                    (0, i.jsx)(l.LeagueOfLegendsBrandIcon, { size: "xs" }),
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
          return x;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        a = n(481060),
        s = n(565138),
        o = n(430824),
        l = n(63063),
        d = n(981631),
        c = n(388032),
        u = n(436728),
        h = n(767688);
      function x(e) {
        let {
            guildId: t,
            title: n,
            transitionState: x,
            children: g,
            buttons: f,
            onClose: m,
          } = e,
          _ = (0, r.e7)([o.Z], () => o.Z.getGuild(t));
        if (null == _) return null;
        let b = (0, i.jsx)(a.Button, {
          onClick: m,
          children: c.intl.string(c.t.i4jeWV),
        });
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: x,
          size: a.ModalSize.SMALL,
          className: u.container,
          children: [
            (0, i.jsxs)(a.ModalHeader, {
              separator: !1,
              className: u.modalHeader,
              children: [
                (0, i.jsx)("div", { className: u.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: h, className: u.heroImage }),
                (0, i.jsx)(a.Spacer, { size: 16 }),
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: u.title,
                  children: n,
                }),
                (0, i.jsx)(a.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: u.guildContainer,
                  children: [
                    (0, i.jsx)(s.Z, {
                      size: s.Z.Sizes.SMOL,
                      guild: _,
                      className: u.guildIcon,
                    }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: _.name,
                    }),
                  ],
                }),
                (0, i.jsx)(a.ModalCloseButton, {
                  onClick: m,
                  innerClassName: u.closeButton,
                  className: u.close,
                }),
              ],
            }),
            g,
            (0, i.jsxs)(a.ModalFooter, {
              className: u.footer,
              children: [
                (0, i.jsx)("div", {
                  className: u.footerButtons,
                  children: null != f ? f : b,
                }),
                (0, i.jsx)(a.Text, {
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
    499945: function (e, t, n) {
      e.exports = {
        content: "content_c4fa87",
        divider: "divider_c4fa87",
        showWinnerCrownSwitch: "showWinnerCrownSwitch_c4fa87",
        showWinnerCrownTextContainer: "showWinnerCrownTextContainer_c4fa87",
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
//# sourceMappingURL=69fc9b88659fea9fb327.js.map
