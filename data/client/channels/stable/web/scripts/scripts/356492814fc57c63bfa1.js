"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77721"],
  {
    114954: function (e) {
      e.exports = "/assets/2206165cca793ab33af9.jpg";
    },
    956089: function (e) {
      e.exports = "/assets/050485857e958066f138.jpg";
    },
    407407: function (e) {
      e.exports = "/assets/cb36816ac228f7edd92d.jpg";
    },
    942006: function (e) {
      e.exports = "/assets/ee98723ad02fdb4e2f66.jpg";
    },
    836479: function (e) {
      e.exports = "/assets/b6e187512bc046e7f357.jpg";
    },
    779337: function (e) {
      e.exports = "/assets/47559949640c3f2eb9a4.jpg";
    },
    694111: function (e) {
      e.exports = "/assets/02d1b623a8aa4276a547.jpg";
    },
    442405: function (e) {
      e.exports = "/assets/f51af29d1074883660ee.jpg";
    },
    974379: function (e) {
      e.exports = "/assets/c83efa08f70fbd23d360.jpg";
    },
    873444: function (e) {
      e.exports = "/assets/13bc45092a7ae08d28cf.jpg";
    },
    216989: function (e) {
      e.exports = "/assets/16766d24074c0eaf5f2f.jpg";
    },
    188225: function (e) {
      e.exports = "/assets/b5454e58f2aea6a7ad26.jpg";
    },
    337664: function (e) {
      e.exports = "/assets/3a5727203a474757d35a.jpg";
    },
    585681: function (e) {
      e.exports = "/assets/924639a60e6d67b413c1.jpg";
    },
    288021: function (e) {
      e.exports = "/assets/0946ee52177675f33436.png";
    },
    114089: function (e) {
      e.exports = "/assets/8405076206059575e192.png";
    },
    8361: function (e) {
      e.exports = "/assets/54c6b44aaa62e3f1e02f.png";
    },
    655297: function (e) {
      e.exports = "/assets/b9327f5bfdf60522e079.jpg";
    },
    616297: function (e) {
      e.exports = "/assets/67d2162365bf05a975f8.jpg";
    },
    213860: function (e) {
      e.exports = "/assets/d8ab62a559169fcc06be.jpg";
    },
    747604: function (e) {
      e.exports = "/assets/fce48417369b7f632663.jpg";
    },
    237931: function (e) {
      e.exports = "/assets/57f4b39ed399fee6e409.jpg";
    },
    992910: function (e) {
      e.exports = "/assets/2469bda5ed48c12bb708.jpg";
    },
    652120: function (e) {
      e.exports = "/assets/ba78e8904a0d2cb31b97.jpg";
    },
    824046: function (e) {
      e.exports = "/assets/7a877275ab50de5541e0.jpg";
    },
    943615: function (e) {
      e.exports = "/assets/45066b829ae4dc5e063c.jpg";
    },
    669001: function (e) {
      e.exports = "/assets/5f6ac50b985fbac7834a.jpg";
    },
    248313: function (e) {
      e.exports = "/assets/850a7c9943cb4da331a1.jpg";
    },
    928119: function (e) {
      e.exports = "/assets/186f03db90b4b7384f33.jpg";
    },
    497664: function (e) {
      e.exports = "/assets/83b1bab23b45e1e176d8.jpg";
    },
    685358: function (e) {
      e.exports = "/assets/6a9dd9b8814bfaf48d50.jpg";
    },
    33218: function (e) {
      e.exports = "/assets/5e812c93334283116c17.jpg";
    },
    975570: function (e) {
      e.exports = "/assets/9f038704b1c18045e7da.jpg";
    },
    678173: function (e, n, a) {
      a.d(n, {
        T: function () {
          return i;
        },
      });
      var t = a(470079),
        s = a(127255);
      function i(e, n) {
        let a = (0, s.Z)({ guildId: e });
        return t.useMemo(() => {
          var e;
          return null !== (e = a.find((e) => e.application.id === n)) &&
            void 0 !== e
            ? e
            : null;
        }, [a, n]);
      }
    },
    636508: function (e, n, a) {
      a.d(n, {
        $: function () {
          return c;
        },
        W: function () {
          return u;
        },
      });
      var t = a(470079),
        s = a(442837),
        i = a(592125),
        l = a(944486),
        r = a(914010),
        o = a(771845);
      function c() {
        var e;
        let { allowGdmActivityChannelSuggestion: n } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { allowGdmActivityChannelSuggestion: !1 },
          a = l.Z.getVoiceChannelId(),
          t = i.Z.getChannel(a);
        if (null != t && null != t.guild_id) return t.guild_id;
        if (null == t || !n)
          return null !== (e = r.Z.getLastSelectedGuildId()) && void 0 !== e
            ? e
            : o.ZP.getFlattenedGuildIds()[0];
      }
      function u() {
        let e = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
        return t.useMemo(() => e.map((e) => ({ label: e, value: e })), [e]);
      }
    },
    696068: function (e, n, a) {
      a.d(n, {
        F: function () {
          return f;
        },
        d: function () {
          return x;
        },
      }),
        a(653041),
        a(47120);
      var t = a(442837),
        s = a(592125),
        i = a(324067),
        l = a(430824),
        r = a(496675),
        o = a(944486),
        c = a(979651),
        u = a(938475),
        d = a(823379),
        g = a(374065),
        m = a(981631);
      function p(e, n, a, t, s) {
        let i = (0, g.e4)({
          channelId: e.id,
          ChannelStore: n,
          GuildStore: a,
          PermissionStore: t,
          VoiceStateStore: s,
        });
        return (e.type === m.d4z.GUILD_VOICE && i === g.jy.CAN_LAUNCH) || !1;
      }
      function x(e) {
        var n, a, t;
        let { guildId: g, allowGdmActivityChannelSuggestion: m = !1 } = e;
        if (null == g && !m) return null;
        let x = o.Z.getVoiceChannelId(),
          v = s.Z.getChannel(x);
        if (null != v && (null != v.guild_id || m)) return v.id;
        let f = [];
        for (let e of Object.values(i.Z.getCategories(g)))
          for (let n of e)
            p(n.channel, s.Z, l.Z, r.Z, c.Z) &&
              f.push({
                channel: n.channel,
                users: u.ZP.getVoiceStatesForChannel(n.channel).filter(d.lm),
              });
        return null !==
          (t =
            null ===
              (a = f.sort((e, n) =>
                e.users.length > n.users.length ? -1 : 1,
              )[0]) || void 0 === a
              ? void 0
              : null === (n = a.channel) || void 0 === n
                ? void 0
                : n.id) && void 0 !== t
          ? t
          : null;
      }
      function v(e, n) {
        if (e.length !== n.length) return !1;
        for (let a = 0; a < e.length; a++)
          if (e[a].value.channel.id !== n[a].value.channel.id) return !1;
        return !0;
      }
      function f(e) {
        return (0, t.e7)(
          [i.Z, s.Z, l.Z, r.Z, c.Z, u.ZP],
          () => {
            if (null == e) return [];
            let n = [];
            return (
              Object.values(i.Z.getCategories(e)).forEach((e) => {
                e.forEach((e) => {
                  let { channel: a } = e;
                  p(a, s.Z, l.Z, r.Z, c.Z) && n.push(a);
                });
              }),
              n
                .map((e) => {
                  let n = u.ZP.getVoiceStatesForChannel(e).filter(d.lm);
                  return { value: { channel: e, users: n }, label: e.name };
                })
                .sort((e, n) =>
                  e.value.users.length > n.value.users.length ? -1 : 1,
                )
            );
          },
          [e],
          v,
        );
      }
    },
    139230: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return Z;
          },
        }),
        a(47120),
        a(789020);
      var t = a(735250),
        s = a(470079),
        i = a(266067),
        l = a(692547),
        r = a(481060),
        o = a(100527),
        c = a(906732),
        u = a(70097),
        d = a(665149),
        g = a(703656),
        m = a(630388),
        p = a(566620),
        x = a(122613),
        v = a(678173),
        f = a(880308),
        b = a(636508),
        h = a(696068),
        I = a(361213),
        j = a(778569),
        S = a(412019),
        _ = a(431136),
        y = a(226799),
        C = a(981631),
        M = a(689938),
        N = a(776097);
      function Z(e) {
        var n, a;
        let { match: x } = e,
          b = null !== (n = (0, g.DR)()) && void 0 !== n ? n : [],
          { analyticsLocations: h } = (0, c.ZP)([
            ...b,
            o.Z.ACTIVITY_DETAIL_PAGE,
          ]),
          { applicationId: S } = x.params;
        (0, f.g)(),
          s.useEffect(() => {
            (0, p.w1)({ guildId: null });
          }, []);
        let _ = (0, j.Z)({
            applicationId: null != S ? S : "",
            size: 2048,
            names: ["embedded_cover"],
          }),
          Z = (0, v.T)(null, null != S && "" !== S ? S : null);
        if (null == S || null == Z) return null;
        if (!(0, m.yE)(Z.application.flags, C.udG.EMBEDDED))
          return (0, t.jsx)(i.l_, { to: C.Z5c.ACTIVITIES });
        let T =
            null != Z.activity.activity_preview_video_asset_id
              ? (0, I.Z)(S, Z.activity.activity_preview_video_asset_id)
              : null,
          A = y.o[S],
          D =
            (null == A ? void 0 : A.playersSuggestionMin) != null &&
            (null == A ? void 0 : A.playersSuggestionMax) != null
              ? ""
                  .concat(A.playersSuggestionMin, " - ")
                  .concat(A.playersSuggestionMax)
              : void 0;
        return (0, t.jsx)(c.Gt, {
          value: h,
          children: (0, t.jsxs)("div", {
            className: N.outerContainer,
            children: [
              (0, t.jsxs)(d.ZP, {
                children: [
                  (0, t.jsxs)("div", {
                    className: N.titleContainer,
                    children: [
                      (0, t.jsx)(r.ActivitiesIcon, {
                        size: "md",
                        color: "currentColor",
                        className: N.rocketIcon,
                      }),
                      (0, t.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        children: Z.application.name,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: N.__invalid_headerBarRightSideFiller,
                  }),
                ],
              }),
              (0, t.jsx)(r.Scroller, {
                className: N.scroller,
                children: (0, t.jsxs)("div", {
                  className: N.innerContainer,
                  children: [
                    (0, t.jsxs)("div", {
                      className: N.header,
                      children: [
                        (0, t.jsx)("img", {
                          src: _.url,
                          className: N.headerImage,
                          alt: Z.application.name,
                        }),
                        (0, t.jsx)("div", { className: N.headerImageOverlay }),
                        (0, t.jsxs)(r.Clickable, {
                          onClick: () => {
                            (0, g.op)();
                          },
                          className: N.backButtonContainer,
                          children: [
                            (0, t.jsx)(r.ChevronSmallLeftIcon, {
                              size: "md",
                              color: l.Z.unsafe_rawColors.WHITE_100,
                              className: N.backButtonIcon,
                            }),
                            (0, t.jsx)(r.Heading, {
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: M.Z.Messages.BACK,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: N.detailsOuterContainer,
                      children: (0, t.jsx)("div", {
                        className: N.detailsInnerContainer,
                        children: (0, t.jsxs)("div", {
                          className: N.detailsInnerInnerContainer,
                          children: [
                            (0, t.jsxs)("div", {
                              className: N.activityDetailsContainer,
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: N.detailsTitle,
                                      children: (0, t.jsx)(r.Heading, {
                                        variant: "heading-xxl/bold",
                                        children: Z.application.name,
                                      }),
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: N.detailsDetails,
                                      children: [
                                        null != D
                                          ? (0, t.jsxs)("div", {
                                              className: N.detailItem,
                                              children: [
                                                (0, t.jsx)(r.GroupIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                }),
                                                (0, t.jsx)(r.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: N.detailItemText,
                                                  children:
                                                    M.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format(
                                                      { nPlayers: D },
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (null == A
                                          ? void 0
                                          : A.timeSuggestionMinutes) != null
                                          ? (0, t.jsxs)("div", {
                                              className: N.detailItem,
                                              children: [
                                                (0, t.jsx)(r.HourglassIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                }),
                                                (0, t.jsx)(r.Text, {
                                                  variant: "text-xs/semibold",
                                                  className: N.detailItemText,
                                                  children:
                                                    M.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format(
                                                      {
                                                        nMinutes:
                                                          A.timeSuggestionMinutes,
                                                      },
                                                    ),
                                                }),
                                              ],
                                            })
                                          : null,
                                        (0, t.jsxs)("div", {
                                          className: N.detailItem,
                                          children: [
                                            (0, t.jsx)(r.TagsIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                            }),
                                            (0, t.jsx)(r.Text, {
                                              variant: "text-xs/semibold",
                                              className: N.detailItemText,
                                              children: Z.application.tags
                                                .slice(0, 3)
                                                .join(", "),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(r.Heading, {
                                  variant: "heading-lg/medium",
                                  className: N.detailsDescription,
                                  children: Z.application.description,
                                }),
                                (0, t.jsx)("div", { className: N.divider }),
                                (0, t.jsxs)("div", {
                                  className: N.imagesContainer,
                                  children: [
                                    (null !==
                                      (a =
                                        null == A
                                          ? void 0
                                          : A.gameplayImageUrls) && void 0 !== a
                                      ? a
                                      : []
                                    ).map((e) =>
                                      (0, t.jsx)(
                                        "img",
                                        {
                                          src: e,
                                          alt: M.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format(
                                            {
                                              activityName: Z.application.name,
                                            },
                                          ),
                                          className: N.activityImage,
                                        },
                                        e,
                                      ),
                                    ),
                                    (0, t.jsx)(u.Z, {
                                      loop: !0,
                                      autoPlay: !0,
                                      muted: !0,
                                      className: N.activityImage,
                                      src: T,
                                      poster: _.url,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: N.launcherOuterContainer,
                              children: (0, t.jsx)(E, { activityItem: Z }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function E(e) {
        var n, i;
        let { activityItem: l } = e,
          { analyticsLocations: o } = (0, c.ZP)(),
          [u, d] = s.useState(
            null !== (n = (0, b.$)()) && void 0 !== n ? n : void 0,
          ),
          [g, m] = s.useState(
            null !== (i = (0, h.d)({ guildId: u })) && void 0 !== i
              ? i
              : void 0,
          ),
          p = (0, b.W)(),
          v = (0, h.F)(u),
          f = s.useCallback(async () => {
            var e;
            if (null != g && null != u)
              await (0, x.Z)({
                targetApplicationId:
                  null == l
                    ? void 0
                    : null === (e = l.application) || void 0 === e
                      ? void 0
                      : e.id,
                channelId: g,
                analyticsLocations: o,
              });
          }, [l, o, g, u]),
          I = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                a.e("60133"),
                a.e("45374"),
              ]).then(a.bind(a, 827940));
              return (n) =>
                (0, t.jsx)(e, { activityItem: l, ...n, analyticsLocations: o });
            });
          }, [l, o]);
        return (0, t.jsxs)("div", {
          className: N.launcherInnerContainer,
          children: [
            (0, t.jsx)(r.Text, {
              variant: "text-md/medium",
              children: M.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE,
            }),
            (0, t.jsx)(r.Select, {
              placeholder: M.Z.Messages.GUILD_SELECT,
              optionClassName: N.__invalid_option,
              options: p,
              renderOptionValue: (e) => {
                let n = e.find((e) => e.value === u);
                return null == n ? null : (0, t.jsx)(_.m, { guildId: n.value });
              },
              renderOptionLabel: (e) => {
                let { value: n } = e;
                return (0, t.jsx)(_.m, { guildId: n });
              },
              isSelected: (e) => e === u,
              select: (e) => {
                var n;
                d(e),
                  m(
                    null !== (n = (0, h.d)({ guildId: e })) && void 0 !== n
                      ? n
                      : void 0,
                  );
              },
              serialize: (e) => e,
            }),
            (0, t.jsx)(r.Select, {
              placeholder:
                M.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
              optionClassName: N.__invalid_option,
              options: v,
              isSelected: (e) => {
                let { channel: n } = e;
                return n.id === g;
              },
              select: (e) => {
                let { channel: n } = e;
                return m(n.id);
              },
              serialize: (e) => {
                let { channel: n } = e;
                return n.id;
              },
              renderOptionValue: () => {
                let e = v.find((e) => e.value.channel.id === g);
                return null == e
                  ? null
                  : (0, t.jsx)(S.O, {
                      channel: e.value.channel,
                      users: e.value.users,
                    });
              },
              renderOptionLabel: (e) => {
                let {
                  value: { channel: n, users: a },
                } = e;
                return (0, t.jsx)(S.O, { channel: n, users: a });
              },
            }),
            (0, t.jsx)(r.Button, {
              fullWidth: !0,
              disabled:
                null == u ||
                null == g ||
                !p.some((e) => e.value === u) ||
                !v.some((e) => e.value.channel.id === g),
              onClick: f,
              children: M.Z.Messages.START,
            }),
            (0, t.jsx)("div", { className: N.divider }),
            (0, t.jsx)(r.Button, {
              fullWidth: !0,
              color: r.Button.Colors.PRIMARY,
              onClick: I,
              children: M.Z.Messages.SHARE,
            }),
          ],
        });
      }
    },
    226799: function (e, n, a) {
      a.d(n, {
        o: function () {
          return B;
        },
      });
      var t = a(701488),
        s = a(114954),
        i = a(956089),
        l = a(407407),
        r = a(942006),
        o = a(836479),
        c = a(779337),
        u = a(694111),
        d = a(442405),
        g = a(974379),
        m = a(873444),
        p = a(216989),
        x = a(188225),
        v = a(337664),
        f = a(585681),
        b = a(288021),
        h = a(114089),
        I = a(8361),
        j = a(655297),
        S = a(616297),
        _ = a(213860),
        y = a(747604),
        C = a(237931),
        M = a(992910),
        N = a(652120),
        Z = a(824046),
        E = a(943615),
        T = a(669001),
        A = a(248313),
        D = a(928119),
        U = a(497664),
        k = a(685358),
        O = a(33218),
        P = a(975570);
      let B = {
        [t.MO]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 1,
          gameplayImageUrls: [v, f],
        },
        [t.js]: {
          playersSuggestionMin: 4,
          playersSuggestionMax: 12,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [p, x],
        },
        [t.mI]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [],
        },
        [t.GR]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [U, k],
        },
        [t.PD]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [_, y],
        },
        [t.jT]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 2,
          gameplayImageUrls: [O, P],
        },
        [t.am]: {
          playersSuggestionMin: 3,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [j, S],
        },
        [t.Ec]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [l, r],
        },
        [t.l4]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [o, c],
        },
        [t.fE]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 16,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [g, m],
        },
        [t.IF]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 5,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [s, i],
        },
        [t.Zc]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 7,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [N, Z],
        },
        [t.Gv]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [C, M],
        },
        [t.Cb]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 15,
          gameplayImageUrls: [A, D],
        },
        [t.qG]: {
          playersSuggestionMin: 2,
          playersSuggestionMax: 4,
          timeSuggestionMinutes: 5,
          gameplayImageUrls: [u, d],
        },
        [t.f9]: {
          playersSuggestionMin: 1,
          playersSuggestionMax: 8,
          timeSuggestionMinutes: 10,
          gameplayImageUrls: [E, T],
        },
        [t.In]: { gameplayImageUrls: [b, h, I] },
      };
    },
    412019: function (e, n, a) {
      a.d(n, {
        O: function () {
          return d;
        },
      });
      var t = a(735250);
      a(470079);
      var s = a(481060),
        i = a(447003),
        l = a(687352),
        r = a(237583),
        o = a(823379),
        c = a(619915),
        u = a(179665);
      function d(e) {
        let { channel: n, users: a } = e,
          d = (0, c.ZP)(n);
        return (0, t.jsxs)("div", {
          className: u.channelInfo,
          children: [
            (0, i.Z)(n)
              ? (0, t.jsx)(s.VoiceLockIcon, {
                  size: "md",
                  color: "currentColor",
                  className: u.speakerIcon,
                })
              : (0, t.jsx)(s.VoiceNormalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: u.speakerIcon,
                }),
            (0, t.jsx)("div", { className: u.channelName, children: n.name }),
            d.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", { className: u.divider }),
                    (0, t.jsx)(l.Z, {
                      embeddedApps: d,
                      className: u.channelItemActivities,
                    }),
                    (0, t.jsx)("div", {
                      className: u.channelActivitiesText,
                      children: d
                        .map((e) => {
                          var n;
                          return null === (n = e.application) || void 0 === n
                            ? void 0
                            : n.name;
                        })
                        .filter(o.lm)
                        .join(", "),
                    }),
                  ],
                })
              : null,
            (0, t.jsx)("div", {
              className: u.voiceUserContainer,
              children: (0, t.jsx)(r.Z, { users: a, max: 4 }),
            }),
          ],
        });
      }
    },
    431136: function (e, n, a) {
      a.d(n, {
        m: function () {
          return u;
        },
      });
      var t = a(735250);
      a(470079);
      var s = a(468194),
        i = a(399606),
        l = a(481060),
        r = a(430824),
        o = a(768581),
        c = a(107455);
      function u(e) {
        let { guildId: n } = e,
          a = (0, i.e7)([r.Z], () => r.Z.getGuild(n));
        if (null == a) return null;
        let u = null;
        if (null != a.icon) {
          let e = o.ZP.getGuildIconURL({ id: a.id, icon: a.icon, size: 40 });
          u = (0, t.jsx)(l.Avatar, {
            src: e,
            "aria-label": a.name,
            size: l.AvatarSizes.SIZE_24,
          });
        } else {
          let e = (0, s.Zg)(a.name).slice(0, 2);
          u = (0, t.jsx)(l.Text, {
            variant: "text-xs/semibold",
            className: c.acronym,
            "aria-hidden": !0,
            children: e,
          });
        }
        return (0, t.jsxs)("div", {
          className: c.container,
          children: [
            u,
            (0, t.jsx)(l.Text, {
              variant: "text-md/semibold",
              className: c.text,
              children: a.name,
            }),
          ],
        });
      }
    },
    776097: function (e, n, a) {
      e.exports = {
        outerContainer: "outerContainer_b58db2",
        rocketIcon: "rocketIcon_b58db2",
        scroller: "scroller_b58db2",
        innerContainer: "innerContainer_b58db2",
        header: "header_b58db2",
        headerImage: "headerImage_b58db2",
        headerImageOverlay: "headerImageOverlay_b58db2",
        backButtonContainer: "backButtonContainer_b58db2",
        titleContainer: "titleContainer_b58db2",
        backButtonIcon: "backButtonIcon_b58db2",
        detailsOuterContainer: "detailsOuterContainer_b58db2",
        detailsInnerContainer: "detailsInnerContainer_b58db2",
        detailsInnerInnerContainer: "detailsInnerInnerContainer_b58db2",
        activityDetailsContainer: "activityDetailsContainer_b58db2",
        detailsTitle: "detailsTitle_b58db2",
        detailsDetails: "detailsDetails_b58db2",
        detailItem: "detailItem_b58db2",
        detailItemText: "detailItemText_b58db2",
        detailsDescription: "detailsDescription_b58db2",
        divider: "divider_b58db2",
        imagesContainer: "imagesContainer_b58db2",
        activityImage: "activityImage_b58db2",
        launcherOuterContainer: "launcherOuterContainer_b58db2",
        launcherInnerContainer: "launcherInnerContainer_b58db2",
      };
    },
    179665: function (e, n, a) {
      e.exports = {
        channelInfo: "channelInfo_c573a1",
        speakerIcon: "speakerIcon_c573a1",
        divider: "divider_c573a1",
        channelName: "channelName_c573a1",
        channelItemActivities: "channelItemActivities_c573a1",
        channelActivitiesText:
          "channelActivitiesText_c573a1 channelName_c573a1",
        voiceUserContainer: "voiceUserContainer_c573a1",
      };
    },
    107455: function (e, n, a) {
      e.exports = {
        container: "container_e2cb96",
        acronym: "acronym_e2cb96",
        text: "text_e2cb96",
      };
    },
  },
]);
//# sourceMappingURL=356492814fc57c63bfa1.js.map
