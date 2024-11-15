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
          return r;
        },
      }),
        n(47120);
      var i = n(192379),
        s = n(479531),
        a = n(388032);
      function r(e) {
        let [t, n] = i.useState(!1),
          [r, o] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var t = arguments.length, i = Array(t), r = 0; r < t; r++)
                i[r] = arguments[r];
              try {
                return o(null), n(!0), await e(...i);
              } catch (e) {
                e.message !== a.intl.string(a.t.N2yb9f) &&
                  o(e instanceof s.Z ? e : new s.Z(e));
              } finally {
                n(!1);
              }
            },
            [e],
          ),
          { loading: t, error: r },
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
        s = n(434382);
      let a = async (e) => {
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
            return b;
          },
        }),
        n(47120),
        n(653041);
      var i = n(200651),
        s = n(192379),
        a = n(512722),
        r = n.n(a),
        o = n(902704),
        l = n(481060),
        d = n(935369),
        c = n(367907),
        u = n(707515),
        h = n(528567),
        g = n(873128),
        x = n(647529),
        f = n(981631),
        m = n(388032),
        _ = n(499945);
      function b(e) {
        let { guildId: t, leaderboardId: n, ...a } = e,
          b = (0, g.Z)({ guildId: t, leaderboardId: n });
        r()(
          null != b,
          "Leaderboard must be loaded before opening the settings modal",
        );
        let j = b.guild_settings,
          [p, w] = s.useState(j.sort_by_statistic_id),
          [v, S] = s.useState(j.sort_desc),
          [C, N] = s.useState(j.show_winner_crown),
          [y, { loading: I }] = (0, d.Z)(u._);
        s.useEffect(() => {
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
          M = s.useMemo(() => {
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
          L = M.find((e) =>
            (0, o.Z)(e.value, { sortByStatisticId: p, sortDesc: v }),
          );
        return (0, i.jsx)(x.Z, {
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
                value: null == L ? void 0 : L.value,
                options: M,
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
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(442837),
        a = n(481060),
        r = n(565138),
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
          f = (0, s.e7)([o.Z], () => o.Z.getGuild(t));
        if (null == f) return null;
        let m = (0, i.jsx)(a.Button, {
          onClick: x,
          children: l.intl.string(l.t.i4jeWV),
        });
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: u,
          size: a.ModalSize.SMALL,
          className: d.container,
          children: [
            (0, i.jsxs)(a.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              children: [
                (0, i.jsx)("div", { className: d.gradientSplash }),
                (0, i.jsx)("img", { alt: "", src: c, className: d.heroImage }),
                (0, i.jsx)(a.Spacer, { size: 16 }),
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: d.title,
                  children: n,
                }),
                (0, i.jsx)(a.Spacer, { size: 4 }),
                (0, i.jsxs)("div", {
                  className: d.guildContainer,
                  children: [
                    (0, i.jsx)(r.Z, {
                      size: r.Z.Sizes.SMOL,
                      guild: f,
                      className: d.guildIcon,
                    }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: f.name,
                    }),
                  ],
                }),
                (0, i.jsx)(a.ModalCloseButton, {
                  onClick: x,
                  innerClassName: d.closeButton,
                  className: d.close,
                }),
              ],
            }),
            h,
            (0, i.jsx)(a.ModalFooter, {
              className: d.footer,
              children: (0, i.jsx)("div", {
                className: d.footerButtons,
                children: null != g ? g : m,
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
//# sourceMappingURL=921077fdf01ac5fdb152.js.map
