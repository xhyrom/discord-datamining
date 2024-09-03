"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12536"],
  {
    499254: function (e, a, n) {
      n.d(a, {
        _: function () {
          return r;
        },
        y: function () {
          return s;
        },
      });
      var t = n(570140);
      function r(e, a, n) {
        t.Z.dispatch({
          type: "APP_LAUNCHER_SHOW",
          entrypoint: e,
          activeViewType: a,
          initialState: n,
        });
      }
      function s(e) {
        t.Z.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
      }
    },
    256139: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(735250),
        r = n(120356),
        s = n.n(r),
        i = n(481060),
        o = n(671656);
      function l(e) {
        let { className: a, onClick: n, ...r } = e,
          l = (0, t.jsx)(i.Clickable, {
            ...r,
            className: s()(null != n && o.clickable, a),
            onClick: n,
          });
        return null == n ? (0, t.jsx)(i.BlockInteractions, { children: l }) : l;
      }
    },
    91907: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(735250),
        r = n(470079),
        s = n(793030),
        i = n(256139),
        o = n(866040);
      function l(e) {
        let { user: a, text: n, channel: l, textClassName: c } = e,
          d = (0, r.useMemo)(() => [a], [a]);
        return (0, t.jsx)(o.Z, {
          participants: d,
          channel: l,
          children: (e) =>
            (0, t.jsx)(i.Z, {
              ...e,
              tag: "span",
              children: (0, t.jsx)(s.x, {
                className: c,
                variant: "text-sm/semibold",
                color: "text-primary",
                lineClamp: 1,
                scaleFontToUserSetting: !0,
                children: n,
              }),
            }),
        });
      }
    },
    866040: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return m;
        },
      }),
        n(411104);
      var t = n(735250),
        r = n(470079),
        s = n(442837),
        i = n(481060),
        o = n(239091),
        l = n(751688),
        c = n(184301),
        d = n(103575),
        u = n(210887),
        _ = n(5192),
        E = n(981631),
        I = n(303540);
      function A(e) {
        let { participants: a, channel: r } = e;
        return (0, t.jsx)(i.Scroller, {
          className: I.popout,
          children: a.map((e) =>
            (0, t.jsx)(
              l.Z,
              {
                guildId: null == r ? void 0 : r.guild_id,
                user: e,
                nick: _.ZP.getNickname(
                  null == r ? void 0 : r.guild_id,
                  null == r ? void 0 : r.id,
                  e,
                ),
                onContextMenu: (a) => {
                  (0, o.jW)(a, async () => {
                    let { default: a } = await Promise.all([
                      n.e("79695"),
                      n.e("69220"),
                      n.e("46611"),
                    ]).then(n.bind(n, 881351));
                    return (n) => (0, t.jsx)(a, { ...n, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function m(e) {
        let { children: a, participants: n, channel: o } = e,
          l = (0, s.e7)([u.Z], () => u.Z.theme),
          _ = 1 === n.length ? n[0] : null,
          I = (0, r.useCallback)(
            (e) => {
              if (null != _)
                return (0, t.jsx)(d.Z, {
                  ...e,
                  location: "Content Inventory Embed",
                  userId: _.id,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: null == o ? void 0 : o.id,
                  analyticsParams: {
                    location: {
                      page: E.ZY5.GUILD_CHANNEL,
                      section: E.jXE.CONTENT_INVENTORY_EMBED,
                    },
                  },
                });
              if (null != n)
                return (0, t.jsx)(A, { participants: n, channel: o });
              throw Error("One of participant or participants is required");
            },
            [o, n, _],
          );
        return (0, t.jsx)(i.ThemeContextProvider, {
          theme: l,
          children: (0, t.jsx)(i.Popout, {
            renderPopout: I,
            preload: () =>
              null != _
                ? (0, c.Z)(_, {
                    guildId: null == o ? void 0 : o.guild_id,
                    channelId: null == o ? void 0 : o.id,
                  })
                : Promise.resolve(),
            children: a,
          }),
        });
      }
    },
    206295: function (e, a, n) {
      n(47120);
      var t = n(470079),
        r = n(688619),
        s = n.n(r);
      n(979590);
      var i = n(442837),
        o = n(866442),
        l = n(607070),
        c = n(220082),
        d = n(981631);
      a.Z = (e) => {
        var a, r, u, _, E, I;
        let A;
        A = n(481060).tokens;
        let m = (0, i.e7)([l.Z], () => l.Z.saturation),
          [T, N] = (0, c.Cf)(
            e,
            null !==
              (I =
                null == A
                  ? void 0
                  : null === (E = A.colors) || void 0 === E
                    ? void 0
                    : null === (_ = E.BACKGROUND_FLOATING) || void 0 === _
                      ? void 0
                      : null === (u = _.resolve) || void 0 === u
                        ? void 0
                        : null ===
                              (r = u.call(_, {
                                theme: d.BRd.DARK,
                                saturation: m,
                              })) || void 0 === r
                          ? void 0
                          : null === (a = r.hex) || void 0 === a
                            ? void 0
                            : a.call(r)) && void 0 !== I
              ? I
              : "#000",
          );
        return t.useMemo(() => {
          let e = (0, o._i)(T),
            a = (0, o._i)(N);
          for (let a = 1; a < 8 && !((0, o.Bd)(e) >= 0.725); a++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(a) >= 0.725); e++) {
            a = s()(a).darken(0.5).num();
          }
          let n = (0, o.Rf)(e);
          return { primaryColor: n, secondaryColor: (0, o.Rf)(a) };
        }, [T, N]);
      };
    },
    410441: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return i;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(481060),
        s = n(76927);
      function i(e) {
        let { onClick: a, Icon: n, "aria-label": i } = e,
          o = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          l = (0, t.jsx)(n, {
            color: o.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == a
          ? (0, t.jsx)("div", {
              className: s.container,
              "aria-label": i,
              children: l,
            })
          : (0, t.jsx)(r.Tooltip, {
              text: i,
              children: (e) =>
                (0, t.jsx)(r.Clickable, {
                  className: s.container,
                  ...e,
                  onClick: a,
                  children: l,
                }),
            });
      }
    },
    998058: function (e, a, n) {
      n.d(a, {
        i: function () {
          return o;
        },
      });
      var t = n(544891),
        r = n(570140),
        s = n(881052),
        i = n(981631);
      let o = async (e) => {
        try {
          var a;
          let n = await t.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (
              null !== (a = n.body.similar_games) && void 0 !== a ? a : []
            ).filter((a) => a !== e);
          r.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: s,
          });
        } catch (e) {
          throw new s.Hx(e);
        }
      };
    },
    839392: function (e, a, n) {
      var t,
        r,
        s,
        i,
        o = n(442837),
        l = n(570140);
      let c = {};
      class d extends (i = o.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (s = "GameProfileStore"),
        (r = "displayName") in (t = d)
          ? Object.defineProperty(t, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = s),
        (a.Z = new d(l.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
          },
        }));
    },
    96856: function (e, a, n) {
      n.d(a, {
        p: function () {
          return r;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        let a =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = t.useExperiment(
            { location: e },
            { autoTrackExposure: a },
          );
        return n;
      }
    },
    567409: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var t = n(470079),
        r = n(392711),
        s = n.n(r),
        i = n(876215),
        o = n(442837),
        l = n(146282),
        c = n(897674),
        d = n(709054),
        u = n(206583);
      let _ = new Set([i.s.PLAYED_GAME]),
        E = (e) => _.has(e.content_type);
      function I() {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
          a = (0, c.Z)(u.YN.GLOBAL_FEED),
          n = t.useMemo(
            () =>
              s()(a)
                .unionBy(e, (e) => e.id)
                .filter(E)
                .orderBy((e) => d.default.extractTimestamp(e.id), "desc")
                .uniqWith(
                  (e, a) =>
                    e.author_id === a.author_id &&
                    e.extra.application_id === a.extra.application_id,
                )
                .value(),
            [e, a],
          );
        return {
          requestId: (0, o.e7)([l.Z], () =>
            l.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
          ),
          entries: n,
        };
      }
    },
    124030: function (e, a, n) {
      n.d(a, {
        A: function () {
          return i;
        },
        L: function () {
          return s;
        },
      });
      var t = n(433517);
      let r = "GameFollowSurveyModal";
      function s() {
        var e;
        return (
          (null === (e = t.K.get(r)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function i() {
        return t.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, a, n) {
      var t = n(735250),
        r = n(470079),
        s = n(120356),
        i = n.n(s),
        o = n(442837),
        l = n(481060),
        c = n(178762),
        d = n(91140),
        u = n(297781),
        _ = n(592125),
        E = n(944486),
        I = n(594174),
        A = n(5192),
        m = n(810568),
        T = n(689938),
        N = n(255341),
        O = n(707443);
      a.Z = (e) => {
        let { entry: a, viewId: n, onClose: s } = e,
          R = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
          p = (0, o.e7)([I.default], () => I.default.getUser(a.author_id)),
          { nick: g, avatar: P } = r.useMemo(() => {
            let e =
              null == p
                ? void 0
                : p.getAvatarURL(null == R ? void 0 : R.guild_id, 48, !1);
            return {
              nick: A.ZP.getName(
                null == R ? void 0 : R.guild_id,
                null == R ? void 0 : R.id,
                p,
              ),
              avatar: e,
            };
          }, [p, R]);
        return null == p
          ? null
          : (0, t.jsx)(l.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: i } = e;
                return (0, t.jsx)(c.J, {
                  entry: a,
                  closePopout: r,
                  updatePopoutPosition: i,
                  onReaction: () => {
                    (0, m.UE)({
                      action: m.as.SendMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                    }),
                      s(),
                      r();
                  },
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(a.id),
              onRequestOpen: () => {
                (0, m.UE)({
                  action: m.as.ClickMessageUser,
                  applicationId: a.extra.application_id,
                  gameName: a.extra.game_name,
                  recipientUserId: a.author_id,
                  viewId: n,
                });
              },
              children: (e) =>
                (0, t.jsx)(l.Clickable, {
                  ...e,
                  className: N.profileEntryCard,
                  children: (0, t.jsx)(l.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: N.avatar,
                          src: P,
                          alt: T.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: g },
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: i()(N.playerInfo),
                          children: (0, t.jsxs)("div", {
                            className: i()(O.column, O.gapXs),
                            children: [
                              (0, t.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: g,
                              }),
                              (0, t.jsx)(u.Gk, {
                                location: u.Gt.GAME_PROFILE,
                                children: d.W.map((e, n) =>
                                  (0, t.jsx)(e, { entry: a }, n),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: N.reactions,
                          children: (0, t.jsx)(l.ArrowAngleLeftUpIcon, {}),
                        }),
                      ],
                    }),
                  }),
                }),
            });
      };
    },
    183391: function (e, a, n) {
      n(47120);
      var t = n(735250),
        r = n(470079),
        s = n(120356),
        i = n.n(s),
        o = n(643872),
        l = n(481060),
        c = n(570140),
        d = n(652898),
        u = n(93093),
        _ = n(768581),
        E = n(810568),
        I = n(981631),
        A = n(689938),
        m = n(707443);
      let T = [o.p.OFFICIAL, o.p.TWITTER, o.p.YOUTUBE],
        N = (e) => {
          let { invite: a, trackClick: n } = e,
            { approximate_member_count: r, guild: s } = a;
          if (null == s) return null;
          let o = u.Z.isMember(s.id);
          if (
            !(null == s ? void 0 : s.features.includes("VERIFIED")) &&
            !(null == s ? void 0 : s.features.includes("PARTNER"))
          )
            return null;
          let d = _.ZP.getGuildIconURL({ id: s.id, icon: s.icon, size: 32 });
          return (0, t.jsxs)("div", {
            className: i()(m.column),
            children: [
              (0, t.jsx)(l.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, t.jsxs)("div", {
                className: i()(m.row, m.gapMd),
                children: [
                  (0, t.jsx)("img", {
                    className: m.icon,
                    src: d,
                    alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: s.name,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: i()(m.gapNone),
                    children: [
                      (0, t.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: s.name,
                      }),
                      null != r &&
                        (0, t.jsx)(l.Text, {
                          variant: "text-xxs/normal",
                          children:
                            A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                              { count: r },
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(l.Button, {
                color: l.ButtonColors.PRIMARY,
                onClick: () => {
                  n(E.as.JoinOfficialServer),
                    c.Z.dispatch({
                      type: "INVITE_MODAL_OPEN",
                      invite: a,
                      code: a.code,
                      context: I.IlC.APP,
                    });
                },
                children: o
                  ? A.Z.Messages.JOINED_GUILD
                  : A.Z.Messages.JOIN_GUILD,
              }),
            ],
          });
        };
      a.Z = (e) => {
        let { websites: a, trackClick: n } = e,
          s =
            null == a
              ? void 0
              : a.find((e) => {
                  let { category: a } = e;
                  return a === o.p.DISCORD;
                }),
          [c, u] = r.useState();
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let a = e.split("/").pop();
              if (null != a) {
                let e = await (0, d.Z)(a);
                !0 !== e.banned && u(e.invite);
              }
            };
            null != s && e(s.url);
          }, [s]),
          null == a || 0 === a.length)
        )
          return null;
        let _ = a
          .filter((e) => {
            let { category: a } = e;
            return T.includes(a);
          })
          .sort((e, a) => e.category - a.category);
        return (0, t.jsxs)("div", {
          className: i()(m.column),
          children: [
            null != c && (0, t.jsx)(N, { invite: c, trackClick: n }),
            (0, t.jsxs)("div", {
              className: i()(m.column, m.gapSm),
              children: [
                (0, t.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: A.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, t.jsx)("div", {
                  className: m.row,
                  children: _.map((e) => {
                    let a,
                      r,
                      { category: s, url: i } = e,
                      c = null;
                    switch (s) {
                      case o.p.OFFICIAL:
                        (c = (0, t.jsx)(l.GlobeEarthIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (r = E.as.WebsiteLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case o.p.TWITTER:
                        (c = (0, t.jsx)(l.XNeutralIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (r = E.as.XLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case o.p.YOUTUBE:
                        (r = E.as.YouTubeLink),
                          (c = (0, t.jsx)(l.YoutubeNeutralIcon, {
                            colorClass: m.linkIcon,
                          })),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != c
                      ? (0, t.jsx)(
                          l.Anchor,
                          {
                            className: m.linkAnchor,
                            title: a,
                            href: i,
                            onClick: () => {
                              n(r);
                            },
                            target: "_blank",
                            children: c,
                          },
                          i,
                        )
                      : null;
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    644941: function (e, a, n) {
      n.r(a), n(47120), n(653041);
      var t = n(735250),
        r = n(470079),
        s = n(120356),
        i = n.n(s),
        o = n(512722),
        l = n.n(o),
        c = n(392711),
        d = n(913527),
        u = n.n(d),
        _ = n(758713),
        E = n(705512),
        I = n(442837),
        A = n(433517),
        m = n(481060),
        T = n(224706),
        N = n(812206),
        O = n(168551),
        R = n(485267),
        p = n(26033),
        g = n(561308),
        P = n(669764),
        C = n(962250),
        S = n(706454),
        L = n(768581),
        M = n(814225),
        h = n(709054),
        f = n(810568),
        x = n(998058),
        G = n(839392),
        v = n(96856),
        Z = n(567409),
        j = n(774073),
        b = n(124030),
        D = n(383895),
        K = n(183391),
        k = n(206583),
        y = n(689938),
        B = n(707443);
      let U = "GameProfileModal",
        w = (e) => {
          let { game: a, onClose: n, trackClick: r } = e,
            s = (0, I.e7)([N.Z], () => {
              var e;
              return N.Z.getApplication(
                null !== (e = null == a ? void 0 : a.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == a) return null;
          let i = a.coverImageUrl;
          return (0, t.jsx)(m.Tooltip, {
            text: a.name,
            children: (e) => {
              var o;
              return (0, t.jsx)(m.Clickable, {
                ...e,
                className: B.clickable,
                onClick: async () => {
                  r(f.as.ClickSimilarGame, a.applicationId),
                    (0, m.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, t.jsx)(Y, {
                          applicationId: a.applicationId,
                          source: f.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
                },
                children: (0, t.jsx)("img", {
                  src: i,
                  className: B.similarGames,
                  alt: y.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (o = null == s ? void 0 : s.name) && void 0 !== o
                        ? o
                        : null == a
                          ? void 0
                          : a.name,
                  }),
                }),
              });
            },
          });
        },
        F = () =>
          (0, t.jsxs)("div", {
            className: B.gameBadge,
            children: [
              (0, t.jsx)(m.FireIcon, { size: "xxs" }),
              (0, t.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: y.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        H = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
        Q = (e) => {
          let { platforms: a } = e,
            n = [...new Set(a)];
          !n.includes(_.z.DESKTOP) &&
            (n.includes(_.z.MACOS) || n.includes(_.z.LINUX)) &&
            n.push(_.z.DESKTOP);
          let r = (n = n.filter((e) => H.includes(e))).map((e) => {
            switch (e) {
              case _.z.DESKTOP:
                return (0, t.jsx)(m.ScreenIcon, { size: "xs" }, e);
              case _.z.XBOX:
                return (0, t.jsx)(m.XboxNeutralIcon, { size: "xs" }, e);
              case _.z.PLAYSTATION:
                return (0, t.jsx)(m.PlaystationNeutralIcon, { size: "xs" }, e);
              case _.z.NINTENDO:
                return (0, t.jsx)(
                  m.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, t.jsxs)("div", {
            className: i()(B.row, B.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, t.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              r,
            ],
          });
        },
        W = (e) => e.filter(j.z6).slice(0, 5),
        Y = (e) => {
          var a, s;
          let {
              applicationId: o,
              source: d,
              sourceUserId: _,
              transitionState: H,
              onClose: Y,
            } = e,
            { clientThemesClassName: z } = (0, O.ZP)(),
            { width: V, height: X } = (0, C.b)(),
            [J, q] = r.useState(() => {
              var e;
              return null === (e = A.K.get(U)) || void 0 === e ? void 0 : e[o];
            }),
            $ = (0, I.e7)([S.default], () => S.default.locale),
            [ee, ea] = r.useState(null),
            [en, et] = r.useState(!0),
            [er, es] = r.useState(!1),
            ei = r.useRef(null),
            eo = r.useMemo(() => (0, f.fP)(), []);
          r.useEffect(() => {
            let e = ei.current;
            null != e && es(e.scrollHeight - e.clientHeight > 1);
          }, [ei, V, X]),
            r.useEffect(() => {
              (0, R.Jn)();
            }, []);
          let el = (0, I.Wu)([G.Z], () => {
              var e;
              return (
                null !== (e = G.Z.getSimilarGames(o)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            ec = (0, I.Wu)([P.Z], () =>
              el
                .map((e) => P.Z.getGame(e))
                .filter(j.W1)
                .slice(0, 5),
            ),
            ed = r.useRef([]);
          r.useEffect(() => {
            ed.current = el;
          }, [el]),
            r.useEffect(() => {
              (async () => {
                if (0 === el.length) {
                  ea(null);
                  try {
                    await (0, x.i)(o);
                  } catch (e) {
                    ea(e);
                  }
                }
              })(),
                T.Z.getDetectableGamesSupplemental([o, ...el]);
            }, [o, el]);
          let eu = (0, I.e7)([G.Z, P.Z], () => {
              let e = void 0 === G.Z.getSimilarGames(o),
                a = el.some((e) => P.Z.isFetching(e));
              return e || a;
            }),
            { entries: e_ } = (0, Z.Z)(),
            eE = r.useMemo(() => {
              var e;
              return null !==
                (e =
                  null == e_
                    ? void 0
                    : e_.filter(
                        (e) => (0, p.dX)(e) && e.extra.application_id === o,
                      )) && void 0 !== e
                ? e
                : [];
            }, [e_, o]),
            eI = eE.length > 7,
            [eA, em] = r.useState(!1);
          r.useEffect(() => {
            var e, a;
            return (
              (0, f.IS)({
                source: d,
                viewId: eo,
                applicationId: o,
                gameName:
                  null !==
                    (a =
                      null !== (e = null == eN ? void 0 : eN.name) &&
                      void 0 !== e
                        ? e
                        : null == eT
                          ? void 0
                          : eT.name) && void 0 !== a
                    ? a
                    : "",
                authorId: _,
              }),
              () => {
                var e, a;
                let n = Date.now(),
                  t = eE.map((e) => {
                    let a = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, $);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: a,
                    });
                  });
                (0, f.wz)({
                  viewId: eo,
                  applicationId: o,
                  gameName:
                    null !==
                      (a =
                        null !== (e = null == eN ? void 0 : eN.name) &&
                        void 0 !== e
                          ? e
                          : null == eT
                            ? void 0
                            : eT.name) && void 0 !== a
                      ? a
                      : "",
                  playedFriendIds: eE.map((e) => e.author_id),
                  playedFriendsData: t,
                  similarGames: W(ed.current),
                });
              }
            );
          }, []);
          let eT = N.Z.getApplication(o),
            eN = (0, I.e7)([P.Z], () => P.Z.getGame(o)),
            eO = r.useMemo(
              () => (null == eN ? void 0 : eN.genres.map(M.P3).join(", ")),
              [eN],
            ),
            eR = r.useMemo(() => {
              if (null == eN) return "";
              let { artwork: e, screenshots: a } = eN;
              if (e.length > 0) {
                let a = Math.floor(Math.random() * (e.length - 1));
                return e[a];
              }
              if (a.length > 0) {
                let e = Math.floor(Math.random() * (a.length - 1));
                return a[e];
              }
              return "";
            }, [eN]),
            ep = r.useMemo(() => {
              var e, a;
              let n = (
                null !== (e = null == eN ? void 0 : eN.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (a = null == eN ? void 0 : eN.screenshots) &&
                void 0 !== a
                  ? a
                  : []
                ).map((e) => ({ src: e })),
                ...n,
              ];
            }, [
              null == eN ? void 0 : eN.artwork,
              null == eN ? void 0 : eN.screenshots,
            ]),
            eg = (e, a) => {
              (0, f.UE)({
                gameName: null != eS ? eS : "",
                applicationId: o,
                action: e,
                similarGameId: a,
                viewId: eo,
              });
            },
            eP = (0, v.p)("GameProfileModal"),
            { shouldOpenGameProfile: eC } = (0, j.ZP)({
              location: "GameProfileModal",
              applicationId: o,
              trackEntryPointImpression: !1,
            });
          if (
            (l()(
              eC,
              "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`",
            ),
            null == eN)
          )
            return null;
          let eS =
              null !== (a = eN.name) && void 0 !== a
                ? a
                : null == eT
                  ? void 0
                  : eT.name,
            eL =
              null == eT ? void 0 : eT.getIconURL(160, L.$k ? "webp" : "png"),
            eM = null !== (s = eN.coverImageUrl) && void 0 !== s ? s : eL,
            { summary: eh, websites: ef, publishers: ex, platforms: eG } = eN,
            ev = h.default.extractTimestamp(o),
            eZ = u()().diff(u()(ev), "days") <= k.G,
            ej = eE.some((e) => (0, g.ig)(e) === E.o.GLOBAL);
          return (0, t.jsx)(m.ModalRoot, {
            transitionState: H,
            size: m.ModalSize.DYNAMIC,
            className: i()(z, B.gameProfileModal),
            children: (0, t.jsxs)(m.ScrollerNone, {
              className: B.scrollable,
              children: [
                (0, t.jsx)("div", {
                  className: i()(B.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eR, '")') },
                }),
                (0, t.jsxs)("div", {
                  className: i()(B.content, B.column, B.headerInfo),
                  children: [
                    (0, t.jsx)("div", {
                      className: B.logoWrapper,
                      children:
                        null != eM &&
                        (0, t.jsx)("img", {
                          className: B.logo,
                          src: eM,
                          alt: y.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: eS,
                          }),
                        }),
                    }),
                    (0, t.jsxs)("div", {
                      className: i()(B.row, B.gapSm, B.gameDetails),
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)(m.Heading, {
                              variant: "heading-xl/bold",
                              children: eS,
                            }),
                            (0, t.jsxs)("div", {
                              className: i()(B.row, B.gapSm),
                              children: [
                                null != eL &&
                                  (0, t.jsx)("img", {
                                    src: eL,
                                    height: 16,
                                    alt: y.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eS },
                                    ),
                                  }),
                                (0, t.jsx)(m.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eO,
                                }),
                                eZ &&
                                  (0, t.jsx)(m.Text, {
                                    variant: "eyebrow",
                                    className: B.newBadge,
                                    children: y.Z.Messages.NEW,
                                  }),
                                ej &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(m.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, t.jsx)(F, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          children:
                            eP &&
                            (0, t.jsx)(m.Tooltip, {
                              text: J
                                ? y.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : y.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, t.jsxs)(m.Button, {
                                  ...e,
                                  innerClassName: B.followButton,
                                  color: J
                                    ? m.Button.Colors.PRIMARY
                                    : m.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let a =
                                      null !== (e = A.K.get(U)) && void 0 !== e
                                        ? e
                                        : {};
                                    (a[o] = !a[o]),
                                      A.K.set(U, a),
                                      eg(
                                        a[o]
                                          ? f.as.FollowGame
                                          : f.as.UnfollowGame,
                                      ),
                                      a[o] &&
                                        (0, b.L)() &&
                                        (0, m.openModalLazy)(async () => {
                                          let { default: e } = await n
                                            .e("86564")
                                            .then(n.bind(n, 641758));
                                          return (a) =>
                                            (0, t.jsx)(e, {
                                              ...a,
                                              applicationId: o,
                                              background: eR,
                                              viewId: eo,
                                            });
                                        }),
                                      q(a[o]);
                                  },
                                  children: [
                                    J
                                      ? (0, t.jsx)(m.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, t.jsx)(m.BellIcon, {
                                          color: "white",
                                        }),
                                    J
                                      ? y.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                      : y.Z.Messages.FOLLOW,
                                  ],
                                }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(m.HeadingLevel, {
                  children: (0, t.jsxs)("div", {
                    className: i()(B.content, B.mainContent),
                    children: [
                      (0, t.jsxs)("div", {
                        className: B.column,
                        children: [
                          (0, t.jsx)(m.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              y.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, t.jsxs)("div", {
                            className: i()(B.section, {
                              [B.fadedEntries]: eI && !eA,
                            }),
                            children: [
                              0 === eE.length &&
                                (0, t.jsx)(m.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: B.emptyFriendsWhoPlay,
                                  children:
                                    y.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, t.jsx)("div", {
                                className: i()(B.column, B.gapNone),
                                children:
                                  null == eE
                                    ? void 0
                                    : eE
                                        .slice(0, eI && !eA ? 6 : void 0)
                                        .map((e) =>
                                          (0, t.jsx)(
                                            D.Z,
                                            {
                                              entry: e,
                                              viewId: eo,
                                              onClose: Y,
                                            },
                                            e.id,
                                          ),
                                        ),
                              }),
                            ],
                          }),
                          eI &&
                            !eA &&
                            (0, t.jsxs)(m.Clickable, {
                              className: B.expandEntriesButton,
                              onClick: () => em(!0),
                              children: [
                                (0, t.jsx)(m.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    y.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, t.jsx)(m.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          ep.length > 0 &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(m.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    y.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, t.jsx)(m.Scroller, {
                                  className: i()(B.row, B.imageScroller),
                                  orientation: "horizontal",
                                  children: ep.map((e, a) =>
                                    (0, t.jsx)(
                                      m.Clickable,
                                      {
                                        className: B.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: B.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eg(f.as.ClickImage),
                                            (0, m.openModalLazy)(async () => {
                                              let { default: e } = await n
                                                .e("99857")
                                                .then(n.bind(n, 895023));
                                              return (n) => {
                                                let { ...r } = n;
                                                return (0, t.jsx)(e, {
                                                  className: B.mediaModal,
                                                  ...r,
                                                  items: ep,
                                                  startingIndex: a,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, t.jsx)("img", {
                                          src: e.src,
                                          className: B.gameArtwork,
                                          alt: y.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eS },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, t.jsx)(m.Spacer, { size: 8 }),
                              ],
                            }),
                          eu &&
                            null == ee &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("div", {
                                  className: B.loadingHeadingSimilarGames,
                                }),
                                (0, t.jsx)("div", {
                                  className: B.row,
                                  children: (0, c.range)(0, 5).map((e) =>
                                    (0, t.jsx)(
                                      "div",
                                      {
                                        className: B.loadingSimilarGamesArtwork,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          !eu &&
                            ec.length > 0 &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(m.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    y.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, t.jsx)("div", {
                                  className: B.row,
                                  style: {},
                                  children: ec.map((e) =>
                                    (0, t.jsx)(
                                      w,
                                      { game: e, onClose: Y, trackClick: eg },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: i()(B.sidebar, B.column),
                        children: [
                          (0, t.jsx)(m.Heading, {
                            variant: "heading-md/bold",
                            children: y.Z.Messages.ABOUT,
                          }),
                          (0, t.jsxs)("div", {
                            className: B.sidebarSections,
                            children: [
                              null != eh &&
                                (0, t.jsxs)("div", {
                                  className: i()(B.column, B.gapSm),
                                  children: [
                                    (0, t.jsx)(m.Text, {
                                      ref: ei,
                                      lineClamp: en ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eh,
                                    }),
                                    (er || !en) &&
                                      (0, t.jsx)(m.Clickable, {
                                        className: B.clickable,
                                        onClick: () => {
                                          eg(
                                            en ? f.as.ShowMore : f.as.ShowLess,
                                          ),
                                            et(!en);
                                        },
                                        children: (0, t.jsx)(m.Text, {
                                          variant: "text-sm/semibold",
                                          children: en
                                            ? y.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : y.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, t.jsx)(K.Z, { websites: ef, trackClick: eg }),
                              (ex.length > 0 || eG.length > 0) &&
                                (0, t.jsx)("div", {
                                  className: i()(B.column),
                                  children:
                                    ex.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: i()(B.column, B.gapSm),
                                      children: [
                                        (0, t.jsx)(m.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            y.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: i()(B.row, B.gapMd),
                                          children: [
                                            (0, t.jsx)(m.Text, {
                                              variant: "text-sm/normal",
                                              children: ex.join(", "),
                                            }),
                                            eG.length > 0 &&
                                              (0, t.jsx)(Q, { platforms: eG }),
                                          ],
                                        }),
                                      ],
                                    }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      a.default = Y;
    },
    962250: function (e, a, n) {
      n.d(a, {
        b: function () {
          return r;
        },
      }),
        n(47120);
      var t = n(470079);
      function r() {
        var e, a;
        let [n, r] = t.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080,
        });
        return (
          t.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              r({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          n
        );
      }
    },
    237583: function (e, a, n) {
      n(653041), n(47120);
      var t,
        r = n(735250),
        s = n(470079),
        i = n(120356),
        o = n.n(i),
        l = n(481060),
        c = n(598077),
        d = n(940942),
        u = n(585867);
      function _(e, a, n) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = n),
          e
        );
      }
      class E extends (t = s.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: a,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: t,
            } = this.props,
            r = [],
            s = e.length === a ? e.length : a - 1,
            i = 0;
          for (; i < s && i < e.length; ) {
            let a = i === e.length - 1;
            r.push(
              n(e[i] || null, a ? null : d.avatarMasked, "user-".concat(i), a),
            ),
              i++;
          }
          if (i < e.length) {
            let a = Math.min(e.length - i, 99);
            r.push(t("+".concat(a), d.moreUsers, "more-users", a));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: d.iconContainer,
                children: (0, r.jsx)(l.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: d.foreground,
                  className: d.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsxs)("div", {
            className: o()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_ref", void 0),
            _(this, "defaultRenderUser", (e, a, n, t) => {
              let { onClick: s, size: i, guildId: _ } = this.props,
                E = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, r.jsx)("div", { className: o()(d.emptyUser, a) }, n)
                : (0, r.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, l.getAvatarSize)(i)),
                      size: i,
                      "aria-label": E.username,
                      className: o()(a, u.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != s ? s(e, E, this._ref) : null),
                    },
                    E.id,
                  );
            });
        }
      }
      _(E, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, a, n) {
          return (0, r.jsx)("div", { className: a, children: e }, n);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (a.Z = E);
    },
    908841: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return s;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(325767);
      function s(e) {
        let {
          width: a = 20,
          height: n = 20,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, r.Z)(i),
          width: a,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: s,
          }),
        });
      }
    },
    814225: function (e, a, n) {
      n.d(a, {
        P3: function () {
          return _;
        },
        ZK: function () {
          return u;
        },
        en: function () {
          return I;
        },
      }),
        n(757143),
        n(47120);
      var t = n(913527),
        r = n.n(t);
      if (12633 == n.j) var s = n(266067);
      n(358085), n(73346);
      var i = n(981631),
        o = n(689938);
      let l = {},
        c = {},
        d = Object.freeze({ ALL: -1, ...i.EKQ });
      function u(e) {
        let a = (0, s.LX)(e, {
          path: i.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != a ? a.params.skuId : null;
      }
      function _(e) {
        switch (e) {
          case i.EKQ.ACTION:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
          case i.EKQ.ACTION_RPG:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
          case i.EKQ.BRAWLER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
          case i.EKQ.HACK_AND_SLASH:
            return o.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
          case i.EKQ.PLATFORMER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
          case i.EKQ.STEALTH:
            return o.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
          case i.EKQ.SURVIVAL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
          case i.EKQ.ADVENTURE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
          case i.EKQ.ACTION_ADVENTURE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
          case i.EKQ.METROIDVANIA:
            return o.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
          case i.EKQ.OPEN_WORLD:
            return o.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
          case i.EKQ.PSYCHOLOGICAL_HORROR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
          case i.EKQ.SANDBOX:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
          case i.EKQ.SURVIVAL_HORROR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
          case i.EKQ.VISUAL_NOVEL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
          case i.EKQ.DRIVING_RACING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
          case i.EKQ.VEHICULAR_COMBAT:
            return o.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
          case i.EKQ.MASSIVELY_MULTIPLAYER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
          case i.EKQ.MMORPG:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
          case i.EKQ.ROLE_PLAYING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
          case i.EKQ.DUNGEON_CRAWLER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
          case i.EKQ.ROGUELIKE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
          case i.EKQ.SHOOTER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
          case i.EKQ.LIGHT_GUN:
            return o.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
          case i.EKQ.SHOOT_EM_UP:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
          case i.EKQ.FPS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FPS;
          case i.EKQ.DUAL_JOYSTICK_SHOOTER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
          case i.EKQ.SIMULATION:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
          case i.EKQ.FLIGHT_SIMULATOR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
          case i.EKQ.TRAIN_SIMULATOR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
          case i.EKQ.LIFE_SIMULATOR:
            return o.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
          case i.EKQ.FISHING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
          case i.EKQ.SPORTS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
          case i.EKQ.BASEBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
          case i.EKQ.BASKETBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
          case i.EKQ.BILLIARDS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
          case i.EKQ.BOWLING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
          case i.EKQ.BOXING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
          case i.EKQ.FOOTBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
          case i.EKQ.GOLF:
            return o.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
          case i.EKQ.HOCKEY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
          case i.EKQ.SKATEBOARDING_SKATING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
          case i.EKQ.SNOWBOARDING_SKIING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
          case i.EKQ.SOCCER:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
          case i.EKQ.TRACK_FIELD:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
          case i.EKQ.SURFING_WAKEBOARDING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
          case i.EKQ.WRESTLING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
          case i.EKQ.STRATEGY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
          case i.EKQ.FOUR_X:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
          case i.EKQ.ARTILLERY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
          case i.EKQ.RTS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_RTS;
          case i.EKQ.TOWER_DEFENSE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
          case i.EKQ.TURN_BASED_STRATEGY:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
          case i.EKQ.WARGAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
          case i.EKQ.MOBA:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
          case i.EKQ.FIGHTING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
          case i.EKQ.PUZZLE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
          case i.EKQ.CARD_GAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
          case i.EKQ.EDUCATION:
            return o.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
          case i.EKQ.FITNESS:
            return o.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
          case i.EKQ.GAMBLING:
            return o.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
          case i.EKQ.MUSIC_RHYTHM:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
          case i.EKQ.PARTY_MINI_GAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
          case i.EKQ.PINBALL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
          case i.EKQ.TRIVIA_BOARD_GAME:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
          case i.EKQ.TACTICAL:
            return o.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
          case i.EKQ.INDIE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
          case i.EKQ.ARCADE:
            return o.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
          case i.EKQ.POINT_AND_CLICK:
            return o.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
          default:
            return o.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
        }
      }
      Object.keys(d).forEach((e) => {
        let a = e.toLowerCase().replace(/_/g, "-"),
          n = d[e];
        (l[a] = n), (c[n] = a);
      });
      let E = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function I(e) {
        let { preorderReleaseAt: a, preorderApproximateReleaseDate: n } = e;
        if (null != a) return a.format("MMMM DD");
        if (null == n) return null;
        for (let e = 0; e < E.length; e++) {
          let [a, t] = E[e],
            s = r()(n, a, !0);
          if (s.isValid()) return s.format(t);
        }
        return n;
      }
    },
    643872: function (e, a, n) {
      var t, r;
      n.d(a, {
        p: function () {
          return t;
        },
      }),
        ((r = t || (t = {}))[(r.OFFICIAL = 1)] = "OFFICIAL"),
        (r[(r.WIKIA = 2)] = "WIKIA"),
        (r[(r.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (r[(r.FACEBOOK = 4)] = "FACEBOOK"),
        (r[(r.TWITTER = 5)] = "TWITTER"),
        (r[(r.TWITCH = 6)] = "TWITCH"),
        (r[(r.INSTAGRAM = 8)] = "INSTAGRAM"),
        (r[(r.YOUTUBE = 9)] = "YOUTUBE"),
        (r[(r.IPHONE = 10)] = "IPHONE"),
        (r[(r.IPAD = 11)] = "IPAD"),
        (r[(r.ANDROID = 12)] = "ANDROID"),
        (r[(r.STEAM = 13)] = "STEAM"),
        (r[(r.REDDIT = 14)] = "REDDIT"),
        (r[(r.ITCH = 15)] = "ITCH"),
        (r[(r.EPICGAMES = 16)] = "EPICGAMES"),
        (r[(r.GOG = 17)] = "GOG"),
        (r[(r.DISCORD = 18)] = "DISCORD");
    },
    671656: function (e, a, n) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    303540: function (e, a, n) {
      e.exports = { popout: "popout_e40224" };
    },
    346292: function (e, a, n) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    576306: function (e, a, n) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    164384: function (e, a, n) {
      e.exports = {
        popout: "popout_a35965",
        hero: "hero_a35965",
        interactionsContainerHeader: "interactionsContainerHeader_a35965",
        interactionsContainer: "interactionsContainer_a35965",
        emoji: "emoji_a35965",
        toastContainer: "toastContainer_a35965",
        emojiHotrailShareToChannel: "emojiHotrailShareToChannel_a35965",
        inputContainerShareToChannel: "inputContainerShareToChannel_a35965",
        primaryActionPopoutMessageCloseIcon:
          "primaryActionPopoutMessageCloseIcon_a35965",
        shareToChannelButton: "shareToChannelButton_a35965",
        popoutContentHeader: "popoutContentHeader_a35965",
        popoutContentWrapper: "popoutContentWrapper_a35965",
        popoutHeroInner: "popoutHeroInner_a35965",
        popoutThumbnailContainer: "popoutThumbnailContainer_a35965",
        popoutHeroBody: "popoutHeroBody_a35965",
        popoutHeroTextPrimary: "popoutHeroTextPrimary_a35965",
        popoutHeroTextPrimaryShort: "popoutHeroTextPrimaryShort_a35965",
        popoutHeroTextSecondary: "popoutHeroTextSecondary_a35965",
        popoutHeaderIcons: "popoutHeaderIcons_a35965",
        popoutUserContainer: "popoutUserContainer_a35965",
        popoutUsername: "popoutUsername_a35965",
        streamingPopoutHeader: "streamingPopoutHeader_a35965",
        streamingPopoutHeaderText: "streamingPopoutHeaderText_a35965",
        streamingPopoutImg: "streamingPopoutImg_a35965",
        voiceChannelPopoutReactorHeader:
          "voiceChannelPopoutReactorHeader_a35965",
        voiceChannelPopoutReactorChannel:
          "voiceChannelPopoutReactorChannel_a35965",
        voiceChannelName: "voiceChannelName_a35965",
        voiceChannelGuildIcon: "voiceChannelGuildIcon_a35965",
        voiceChannelAdditionalParticipants:
          "voiceChannelAdditionalParticipants_a35965",
        primaryActionPopoutDivider: "primaryActionPopoutDivider_a35965",
        iconButton: "iconButton_a35965",
        primaryActionPopoutActionButtons:
          "primaryActionPopoutActionButtons_a35965",
        hiddenButRenderedInputField: "hiddenButRenderedInputField_a35965",
        secondaryButton: "secondaryButton_a35965",
        secondaryText: "secondaryText_a35965",
        primaryButton: "primaryButton_a35965",
        popoutStackedAvatar: "popoutStackedAvatar_a35965",
        popoutBlockedWarningIcon: "popoutBlockedWarningIcon_a35965",
        popoutTextPrimary: "popoutTextPrimary_a35965",
        popoutTextSecondary: "popoutTextSecondary_a35965",
        streamingPopoutHero: "streamingPopoutHero_a35965",
        streamCTA: "streamCTA_a35965",
        maybeClickable: "maybeClickable_a35965",
      };
    },
    243113: function (e, a, n) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    348910: function (e, a, n) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    76927: function (e, a, n) {
      e.exports = { container: "container_b11148" };
    },
    255341: function (e, a, n) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    707443: function (e, a, n) {
      e.exports = {
        row: "row_e881fc",
        column: "column_e881fc",
        gapNone: "gapNone_e881fc",
        gapXs: "gapXs_e881fc",
        gapSm: "gapSm_e881fc",
        gapMd: "gapMd_e881fc",
        clickable: "clickable_e881fc",
        linkIcon: "linkIcon_e881fc",
        linkAnchor: "linkAnchor_e881fc",
        content: "content_e881fc",
        section: "section_e881fc",
        gameProfileModal: "gameProfileModal_e881fc",
        gameArtHero: "gameArtHero_e881fc",
        scrollable: "scrollable_e881fc",
        headerInfo: "headerInfo_e881fc",
        logoWrapper: "logoWrapper_e881fc",
        logo: "logo_e881fc",
        icon: "icon_e881fc",
        followButton: "followButton_e881fc",
        gameDetails: "gameDetails_e881fc",
        gameBadge: "gameBadge_e881fc",
        newBadge: "newBadge_e881fc",
        mainContent: "mainContent_e881fc",
        sidebar: "sidebar_e881fc",
        sidebarSections: "sidebarSections_e881fc",
        fadedEntries: "fadedEntries_e881fc",
        expandEntriesButton: "expandEntriesButton_e881fc",
        emptyFriendsWhoPlay: "emptyFriendsWhoPlay_e881fc",
        imageScroller: "imageScroller_e881fc",
        mediaModal: "mediaModal_e881fc",
        gameArtwork: "gameArtwork_e881fc",
        gameArtworkFocusRing: "gameArtworkFocusRing_e881fc",
        similarGames: "similarGames_e881fc",
        loadingSimilarGamesArtwork: "loadingSimilarGamesArtwork_e881fc",
        loadingHeadingSimilarGames: "loadingHeadingSimilarGames_e881fc",
      };
    },
    375387: function (e, a, n) {
      e.exports = {
        root: "root_ed81cc",
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    894967: function (e, a, n) {
      e.exports = {
        container: "container_bdea70",
        slotsContainer: "slotsContainer_bdea70",
        slots: "slots_bdea70",
        slotsWide: "slotsWide_bdea70",
        slot: "slot_bdea70",
        emoji: "emoji_bdea70",
        tooltipContainer: "tooltipContainer_bdea70",
        emojiItemDisabled: "emojiItemDisabled_bdea70",
        animatedPicker: "animatedPicker_bdea70",
        animatedPickerTall: "animatedPickerTall_bdea70",
        emojiPickerHeader: "emojiPickerHeader_bdea70",
        emojiPickerHeaderExpanded: "emojiPickerHeaderExpanded_bdea70",
        dropDownContainer: "dropDownContainer_bdea70",
        dropDown: "dropDown_bdea70",
        dropDownOpen: "dropDownOpen_bdea70",
      };
    },
    940942: function (e, a, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    585867: function (e, a, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=53f12014adb2e60ff908.js.map
