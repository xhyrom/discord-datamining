"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25526"],
  {
    767688: function (e) {
      e.exports = "/assets/53dcdfb1c4d83a59b137.png";
    },
    935369: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      var n = t(192379),
        a = t(479531),
        r = t(689938);
      function i(e) {
        let [s, t] = n.useState(!1),
          [i, o] = n.useState(null);
        return [
          n.useCallback(
            async function () {
              for (var s = arguments.length, n = Array(s), i = 0; i < s; i++)
                n[i] = arguments[i];
              try {
                return o(null), t(!0), await e(...n);
              } catch (e) {
                e.message !== r.Z.Messages.MFA_V2_CANCELED &&
                  o(e instanceof a.Z ? e : new a.Z(e));
              } finally {
                t(!1);
              }
            },
            [e],
          ),
          { loading: s, error: i },
        ];
      }
    },
    707515: function (e, s, t) {
      t.d(s, {
        _: function () {
          return r;
        },
      });
      var n = t(425128),
        a = t(434382);
      let r = async (e) => {
        await n._b(e),
          await a.Z.fetchLeaderboard({
            guildId: e.guildId,
            leaderboardId: e.leaderboardId,
            force: !0,
          });
      };
    },
    262918: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return m;
          },
        }),
        t(47120),
        t(653041);
      var n = t(200651),
        a = t(192379),
        r = t(512722),
        i = t.n(r),
        o = t(902704),
        l = t(481060),
        d = t(935369),
        c = t(707515),
        u = t(528567),
        _ = t(873128),
        h = t(647529),
        g = t(689938),
        x = t(48439);
      function m(e) {
        let { guildId: s, leaderboardId: t, ...r } = e,
          m = (0, _.Z)({ guildId: s, leaderboardId: t });
        i()(
          null != m,
          "Leaderboard must be loaded before opening the settings modal",
        );
        let S = m.guild_settings,
          [f, E] = a.useState(S.sort_by_statistic_id),
          [L, T] = a.useState(S.sort_desc),
          [I, C] = a.useState(S.show_winner_crown),
          [A, { loading: b }] = (0, d.Z)(c._),
          j =
            f !== S.sort_by_statistic_id ||
            L !== S.sort_desc ||
            I !== S.show_winner_crown,
          N = async () => {
            await A({
              guildId: s,
              leaderboardId: t,
              sortByStatisticId: f,
              sortDesc: L,
              showWinnerCrown: I,
            }),
              r.onClose();
          },
          p = a.useMemo(() => {
            let e = Object.values(m.settings.statistics).filter(
                (e) => e.selectable_for_competition,
              ),
              s = [];
            for (let t of e)
              for (let e of [!0, !1])
                s.push({
                  value: { sortByStatisticId: t.id, sortDesc: e },
                  label: (0, u.s)({
                    statisticId: t.id,
                    sortDesc: e,
                    aggregationType: t.aggregation_type,
                  }),
                });
            return s;
          }, [m]),
          w = p.find((e) =>
            (0, o.Z)(e.value, { sortByStatisticId: f, sortDesc: L }),
          );
        return (0, n.jsx)(h.Z, {
          ...r,
          guildId: s,
          title: g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_TITLE,
          buttons: (0, n.jsx)(l.Button, {
            onClick: N,
            submitting: b,
            disabled: !j,
            children: g.Z.Messages.SAVE,
          }),
          children: (0, n.jsxs)(l.ModalContent, {
            className: x.content,
            children: [
              (0, n.jsx)(l.Spacer, { size: 32 }),
              (0, n.jsx)(l.FormTitle, {
                children:
                  g.Z.Messages
                    .LEADERBOARD_GUILD_SETTINGS_MODAL_COMPETITION_SECTION_TITLE,
              }),
              (0, n.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children:
                  g.Z.Messages
                    .LEADERBOARD_GUILD_SETTINGS_MODAL_COMPETITION_SECTION_LABEL,
              }),
              (0, n.jsx)(l.Spacer, { size: 18 }),
              (0, n.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "header-primary",
                children:
                  g.Z.Messages.LEADERBOARD_GUILD_SETTINGS_MODAL_STATISTIC_LABEL,
              }),
              (0, n.jsx)(l.Spacer, { size: 8 }),
              (0, n.jsx)(l.SingleSelect, {
                placeholder:
                  g.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                value: null == w ? void 0 : w.value,
                options: p,
                onChange: (e) => {
                  let { sortByStatisticId: s, sortDesc: t } = e;
                  E(s), T(t);
                },
              }),
              (0, n.jsx)("div", { className: x.divider }),
              (0, n.jsx)(l.FormTitle, {
                children:
                  g.Z.Messages
                    .LEADERBOARD_GUILD_SETTINGS_MODAL_REWARD_SECTION_TITLE,
              }),
              (0, n.jsx)(l.Spacer, { size: 8 }),
              (0, n.jsx)(l.FormSwitch, {
                hideBorder: !0,
                onChange: () => C((e) => !e),
                value: I,
                className: x.showWinnerCrownSwitch,
                children: (0, n.jsxs)("div", {
                  className: x.showWinnerCrownTextContainer,
                  children: [
                    (0, n.jsx)(l.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children:
                        g.Z.Messages
                          .LEADERBOARD_GUILD_SETTINGS_MODAL_ENABLE_CROWN_LABEL,
                    }),
                    (0, n.jsx)(l.LeagueOfLegendsBrandIcon, { size: "xs" }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    647529: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return u;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(442837),
        r = t(481060),
        i = t(565138),
        o = t(430824),
        l = t(689938),
        d = t(583117),
        c = t(767688);
      function u(e) {
        let {
            guildId: s,
            title: t,
            transitionState: u,
            children: _,
            buttons: h,
            onClose: g,
          } = e,
          x = (0, a.e7)([o.Z], () => o.Z.getGuild(s));
        if (null == x) return null;
        let m = (0, n.jsx)(r.Button, {
          onClick: g,
          children: l.Z.Messages.DONE,
        });
        return (0, n.jsxs)(r.ModalRoot, {
          transitionState: u,
          size: r.ModalSize.SMALL,
          className: d.container,
          children: [
            (0, n.jsxs)(r.ModalHeader, {
              separator: !1,
              className: d.modalHeader,
              children: [
                (0, n.jsx)("div", { className: d.gradientSplash }),
                (0, n.jsx)("img", { alt: "", src: c, className: d.heroImage }),
                (0, n.jsx)(r.Spacer, { size: 16 }),
                (0, n.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  className: d.title,
                  children: t,
                }),
                (0, n.jsx)(r.Spacer, { size: 4 }),
                (0, n.jsxs)("div", {
                  className: d.guildContainer,
                  children: [
                    (0, n.jsx)(i.Z, {
                      size: i.Z.Sizes.SMOL,
                      guild: x,
                      className: d.guildIcon,
                    }),
                    (0, n.jsx)(r.Text, {
                      variant: "text-md/semibold",
                      color: "text-secondary",
                      children: x.name,
                    }),
                  ],
                }),
                (0, n.jsx)(r.ModalCloseButton, {
                  onClick: g,
                  innerClassName: d.closeButton,
                  className: d.close,
                }),
              ],
            }),
            _,
            (0, n.jsx)(r.ModalFooter, {
              className: d.footer,
              children: (0, n.jsx)("div", {
                className: d.footerButtons,
                children: null != h ? h : m,
              }),
            }),
          ],
        });
      }
    },
    48439: function (e, s, t) {
      e.exports = {
        content: "content_c4fa87",
        divider: "divider_c4fa87",
        showWinnerCrownSwitch: "showWinnerCrownSwitch_c4fa87",
        showWinnerCrownTextContainer: "showWinnerCrownTextContainer_c4fa87",
      };
    },
    583117: function (e, s, t) {
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
//# sourceMappingURL=0240ae4256f79d829e03.js.map
