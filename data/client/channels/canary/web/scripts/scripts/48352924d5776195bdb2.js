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
          return a;
        },
      }),
        n(47120);
      var i = n(192379),
        s = n(479531),
        r = n(388032);
      function a(e) {
        let [t, n] = i.useState(!1),
          [a, o] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var t = arguments.length, i = Array(t), a = 0; a < t; a++)
                i[a] = arguments[a];
              try {
                return o(null), n(!0), await e(...i);
              } catch (e) {
                e.message !== r.intl.string(r.t.N2yb9f) &&
                  o(e instanceof s.Z ? e : new s.Z(e));
              } finally {
                n(!1);
              }
            },
            [e],
          ),
          { loading: t, error: a },
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
        s = n(434382);
      let r = async (e) => {
        await i._b(e),
          await s.Z.fetchLeaderboard({
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
            return f;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        s = n(192379),
        r = n(512722),
        a = n.n(r),
        o = n(902704),
        l = n(481060),
        d = n(935369),
        c = n(707515),
        u = n(528567),
        h = n(873128),
        g = n(647529),
        x = n(388032),
        m = n(499945);
      function f(e) {
        let { guildId: t, leaderboardId: n, ...r } = e,
          f = (0, h.Z)({ guildId: t, leaderboardId: n });
        a()(
          null != f,
          "Leaderboard must be loaded before opening the settings modal",
        );
        let _ = f.guild_settings,
          [b, j] = s.useState(_.sort_by_statistic_id),
          [p, w] = s.useState(_.sort_desc),
          [v, S] = s.useState(_.show_winner_crown),
          [C, { loading: y }] = (0, d.Z)(c._),
          N =
            b !== _.sort_by_statistic_id ||
            p !== _.sort_desc ||
            v !== _.show_winner_crown,
          I = async () => {
            await C({
              guildId: t,
              leaderboardId: n,
              sortByStatisticId: b,
              sortDesc: p,
              showWinnerCrown: v,
            }),
              r.onClose();
          },
          B = s.useMemo(() => {
            let e = Object.values(f.settings.statistics).filter(
                (e) => e.selectable_for_competition,
              ),
              t = [];
            for (let n of e)
              for (let e of [!0, !1])
                t.push({
                  value: { sortByStatisticId: n.id, sortDesc: e },
                  label: (0, u.s)({
                    statisticId: n.id,
                    sortDesc: e,
                    aggregationType: n.aggregation_type,
                  }),
                });
            return t;
          }, [f]),
          Z = B.find((e) =>
            (0, o.Z)(e.value, { sortByStatisticId: b, sortDesc: p }),
          );
        return (0, i.jsx)(g.Z, {
          ...r,
          guildId: t,
          title: x.intl.string(x.t.rv9GUV),
          buttons: (0, i.jsx)(l.Button, {
            onClick: I,
            submitting: y,
            disabled: !N,
            children: x.intl.string(x.t.R3BPHx),
          }),
          children: (0, i.jsxs)(l.ModalContent, {
            className: m.content,
            children: [
              (0, i.jsx)(l.Spacer, { size: 32 }),
              (0, i.jsx)(l.FormTitle, { children: x.intl.string(x.t.R0X60t) }),
              (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: x.intl.string(x.t.vcisKS),
              }),
              (0, i.jsx)(l.Spacer, { size: 18 }),
              (0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children: x.intl.string(x.t.IQO9Fx),
              }),
              (0, i.jsx)(l.Spacer, { size: 8 }),
              (0, i.jsx)(l.SingleSelect, {
                placeholder: x.intl.string(x.t["g/Rr2d"]),
                value: null == Z ? void 0 : Z.value,
                options: B,
                onChange: (e) => {
                  let { sortByStatisticId: t, sortDesc: n } = e;
                  j(t), w(n);
                },
              }),
              (0, i.jsx)("div", { className: m.divider }),
              (0, i.jsx)(l.FormTitle, { children: x.intl.string(x.t.HU4EKC) }),
              (0, i.jsx)(l.Spacer, { size: 8 }),
              (0, i.jsx)(l.FormSwitch, {
                hideBorder: !0,
                onChange: () => S((e) => !e),
                value: v,
                className: m.showWinnerCrownSwitch,
                children: (0, i.jsxs)("div", {
                  className: m.showWinnerCrownTextContainer,
                  children: [
                    (0, i.jsx)(l.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: x.intl.string(x.t.cH7QEx),
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
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(442837),
        r = n(481060),
        a = n(565138),
        o = n(430824),
        l = n(388032),
        d = n(436728),
        c = n(767688);
      function u(e) {
        let {
            guildId: t,
            title: n,
            transitionState: u,
            children: h,
            buttons: g,
            onClose: x,
          } = e,
          m = (0, s.e7)([o.Z], () => o.Z.getGuild(t));
        if (null == m) return null;
        let f = (0, i.jsx)(r.Button, {
          onClick: x,
          children: l.intl.string(l.t.i4jeWV),
        });
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: u,
          size: r.ModalSize.SMALL,
          className: d.container,
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              children: [
                (0, i.jsx)("div", { className: d.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: c, className: d.heroImage }),
                (0, i.jsx)(r.Spacer, { size: 16 }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: d.title,
                  children: n,
                }),
                (0, i.jsx)(r.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: d.guildContainer,
                  children: [
                    (0, i.jsx)(a.Z, {
                      size: a.Z.Sizes.SMOL,
                      guild: m,
                      className: d.guildIcon,
                    }),
                    (0, i.jsx)(r.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: m.name,
                    }),
                  ],
                }),
                (0, i.jsx)(r.ModalCloseButton, {
                  onClick: x,
                  innerClassName: d.closeButton,
                  className: d.close,
                }),
              ],
            }),
            h,
            (0, i.jsx)(r.ModalFooter, {
              className: d.footer,
              children: (0, i.jsx)("div", {
                className: d.footerButtons,
                children: null != g ? g : f,
              }),
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
//# sourceMappingURL=48352924d5776195bdb2.js.map
