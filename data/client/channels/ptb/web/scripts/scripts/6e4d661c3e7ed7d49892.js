"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87355"],
  {
    560361: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = a(470079);
      function i(e) {
        let n = t.useRef();
        (n.current = e),
          t.useEffect(
            () => () => {
              var e;
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.call(n);
            },
            [],
          );
      }
    },
    998058: function (e, n, a) {
      a.d(n, {
        i: function () {
          return l;
        },
      });
      var t = a(544891),
        i = a(570140),
        o = a(881052),
        r = a(981631);
      let l = async (e) => {
        try {
          var n;
          let a = await t.tn.get({ url: r.ANM.SIMILAR_GAMES(e) }),
            o = (
              null !== (n = a.body.similar_games) && void 0 !== n ? n : []
            ).filter((n) => n !== e);
          i.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: o,
          });
        } catch (e) {
          throw new o.Hx(e);
        }
      };
    },
    839392: function (e, n, a) {
      var t,
        i,
        o,
        r,
        l = a(442837),
        s = a(570140);
      let c = {};
      class d extends (r = l.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (o = "GameProfileStore"),
        (i = "displayName") in (t = d)
          ? Object.defineProperty(t, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[i] = o),
        (n.Z = new d(s.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: n, games: a } = e;
            c[n] = a;
          },
        }));
    },
    96856: function (e, n, a) {
      a.d(n, {
        p: function () {
          return i;
        },
      });
      let t = (0, a(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: a } = t.useExperiment(
            { location: e },
            { autoTrackExposure: n },
          );
        return a;
      }
    },
    326103: function (e, n, a) {
      a.d(n, {
        v: function () {
          return i;
        },
      });
      let t = (0, a(818083).B)({
        kind: "user",
        id: "2024-09_game_profile_feedback_flow",
        label: "Game Profile Feedback Flow",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: a } = t.useExperiment(
            { location: e },
            { autoTrackExposure: n },
          );
        return a;
      }
    },
    567409: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return _;
        },
      }),
        a(47120);
      var t = a(470079),
        i = a(392711),
        o = a.n(i),
        r = a(876215),
        l = a(442837),
        s = a(146282),
        c = a(897674),
        d = a(709054),
        u = a(206583);
      let m = new Set([r.s.PLAYED_GAME]),
        p = (e) => m.has(e.content_type);
      function _() {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
          n = (0, c.Z)(u.YN.GLOBAL_FEED),
          a = t.useMemo(
            () =>
              o()(n)
                .unionBy(e, (e) => e.id)
                .filter(p)
                .orderBy((e) => d.default.extractTimestamp(e.id), "desc")
                .uniqWith(
                  (e, n) =>
                    e.author_id === n.author_id &&
                    e.extra.application_id === n.extra.application_id,
                )
                .value(),
            [e, n],
          );
        return {
          requestId: (0, l.e7)([s.Z], () =>
            s.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
          ),
          entries: a,
        };
      }
    },
    124030: function (e, n, a) {
      a.d(n, {
        A: function () {
          return r;
        },
        L: function () {
          return o;
        },
      });
      var t = a(433517);
      let i = "GameFollowSurveyModal";
      function o() {
        var e;
        return (
          (null === (e = t.K.get(i)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function r() {
        return t.K.set(i, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, n, a) {
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(442837),
        s = a(481060),
        c = a(178762),
        d = a(91140),
        u = a(297781),
        m = a(592125),
        p = a(944486),
        _ = a(594174),
        g = a(5192),
        f = a(810568),
        x = a(689938),
        v = a(501345),
        h = a(51527);
      n.Z = (e) => {
        let { entry: n, viewId: a, officialGuildId: o, onClose: I } = e,
          E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
          A = (0, l.e7)([_.default], () => _.default.getUser(n.author_id)),
          { nick: j, avatar: M } = i.useMemo(() => {
            let e =
              null == A
                ? void 0
                : A.getAvatarURL(null == E ? void 0 : E.guild_id, 48, !1);
            return {
              nick: g.ZP.getName(
                null == E ? void 0 : E.guild_id,
                null == E ? void 0 : E.id,
                A,
              ),
              avatar: e,
            };
          }, [A, E]);
        return null == A
          ? null
          : (0, t.jsx)(s.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: i, updatePosition: r } = e;
                return (0, t.jsx)(c.J, {
                  entry: n,
                  closePopout: i,
                  updatePopoutPosition: r,
                  onReaction: () => {
                    (0, f.UE)({
                      action: f.as.SendMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: a,
                      officialGuildId: o,
                    }),
                      I(),
                      i();
                  },
                  onUserPopoutClosed: () => i(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(n.id),
              onRequestOpen: () => {
                (0, f.UE)({
                  action: f.as.ClickMessageUser,
                  applicationId: n.extra.application_id,
                  gameName: n.extra.game_name,
                  recipientUserId: n.author_id,
                  viewId: a,
                  officialGuildId: o,
                });
              },
              children: (e) =>
                (0, t.jsx)(s.Clickable, {
                  ...e,
                  className: v.profileEntryCard,
                  children: (0, t.jsx)(s.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: v.avatar,
                          src: M,
                          alt: x.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: j },
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: r()(v.playerInfo),
                          children: (0, t.jsxs)("div", {
                            className: r()(h.column, h.gapXs),
                            children: [
                              (0, t.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: j,
                              }),
                              (0, t.jsx)(u.Gk, {
                                location: u.Gt.GAME_PROFILE,
                                children: d.W.map((e, a) =>
                                  (0, t.jsx)(e, { entry: n }, a),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: v.reactions,
                          children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, {}),
                        }),
                      ],
                    }),
                  }),
                }),
            });
      };
    },
    644941: function (e, n, a) {
      a.r(n), a(47120);
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(913527),
        s = a.n(l),
        c = a(705512),
        d = a(442837),
        u = a(433517),
        m = a(481060),
        p = a(560361),
        _ = a(812206),
        g = a(168551),
        f = a(485267),
        x = a(26033),
        v = a(561308),
        h = a(669764),
        I = a(706454),
        E = a(768581),
        A = a(814225),
        j = a(709054),
        M = a(810568),
        C = a(998058),
        T = a(839392),
        P = a(96856),
        b = a(567409),
        N = a(774073),
        S = a(124030),
        L = a(715318),
        w = a(38516),
        O = a(252547),
        G = a(484527),
        k = a(124580),
        y = a(296768),
        R = a(978313),
        Z = a(206583),
        F = a(689938),
        H = a(51527);
      let D = "GameProfileModal",
        B = () =>
          (0, t.jsxs)("div", {
            className: H.gameBadge,
            children: [
              (0, t.jsx)(m.FireIcon, { size: "xxs" }),
              (0, t.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          });
      function U(e) {
        var n, o;
        let {
            detectedGame: l,
            application: d,
            entries: p,
            viewId: _,
            trackAction: g,
          } = e,
          [f, x] = i.useState(() => {
            var e;
            return null === (e = u.K.get(D)) || void 0 === e ? void 0 : e[d.id];
          }),
          h = (0, P.p)("GameProfileModal"),
          I = i.useMemo(
            () => (null == l ? void 0 : l.genres.map(A.P3).join(", ")),
            [l],
          ),
          C = i.useMemo(() => {
            if (null == l) return "";
            let { artwork: e, screenshots: n } = l;
            if (e.length > 0) {
              let n = Math.floor(Math.random() * (e.length - 1));
              return e[n];
            }
            if (n.length > 0) {
              let e = Math.floor(Math.random() * (n.length - 1));
              return n[e];
            }
            return "";
          }, [l]),
          T = null == d ? void 0 : d.getIconURL(160, E.$k ? "webp" : "png"),
          b = j.default.extractTimestamp(d.id),
          N = null !== (n = l.coverImageUrl) && void 0 !== n ? n : T,
          w = s()().diff(s()(b), "days") <= Z.G,
          O = p.some((e) => (0, v.ig)(e) === c.o.GLOBAL),
          G =
            null !== (o = l.name) && void 0 !== o
              ? o
              : null == d
                ? void 0
                : d.name,
          k = i.useCallback(
            () => () => {
              var e;
              let n = null !== (e = u.K.get(D)) && void 0 !== e ? e : {};
              (n[d.id] = !n[d.id]),
                u.K.set(D, n),
                g(n[d.id] ? M.as.FollowGame : M.as.UnfollowGame),
                n[d.id] &&
                  (0, S.L)() &&
                  (0, m.openModalLazy)(async () => {
                    let { default: e } = await a
                      .e("86564")
                      .then(a.bind(a, 641758));
                    return (n) =>
                      (0, t.jsx)(e, {
                        ...n,
                        applicationId: d.id,
                        background: C,
                        viewId: _,
                      });
                  }),
                x(n[d.id]);
            },
            [d.id, C, g, _],
          );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: r()(H.gameArtHero),
              style: { backgroundImage: 'url("'.concat(C, '")') },
            }),
            (0, t.jsxs)("div", {
              className: r()(H.content, H.column, H.gapLg, H.headerInfo),
              children: [
                (0, t.jsxs)("div", {
                  className: H.coverArtRow,
                  children: [
                    (0, t.jsx)("div", {
                      className: H.logoWrapper,
                      children:
                        null != N &&
                        (0, t.jsx)("img", {
                          className: H.logo,
                          src: N,
                          alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: G,
                          }),
                        }),
                    }),
                    (0, t.jsx)(L.Z, {
                      applicationId: d.id,
                      viewId: _,
                      className: H.overflowMenu,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: r()(H.row, H.gapSm, H.gameDetails),
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(m.Heading, {
                          variant: "heading-xl/bold",
                          children: G,
                        }),
                        (0, t.jsxs)("div", {
                          className: r()(H.row, H.gapSm),
                          children: [
                            null != T &&
                              (0, t.jsx)("img", {
                                src: T,
                                height: 16,
                                alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                  { game: G },
                                ),
                              }),
                            (0, t.jsx)(m.Text, {
                              variant: "text-sm/semibold",
                              color: "text-muted",
                              children: I,
                            }),
                            w &&
                              (0, t.jsx)(m.Text, {
                                variant: "eyebrow",
                                className: H.newBadge,
                                children: F.Z.Messages.NEW,
                              }),
                            O &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(m.Text, {
                                    variant: "text-sm/medium",
                                    children: " \xb7 ",
                                  }),
                                  (0, t.jsx)(B, {}),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      children:
                        h &&
                        (0, t.jsx)(m.Tooltip, {
                          text: f
                            ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                            : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                          children: (e) =>
                            (0, t.jsxs)(m.Button, {
                              ...e,
                              innerClassName: H.followButton,
                              color: f
                                ? m.Button.Colors.PRIMARY
                                : m.Button.Colors.BRAND,
                              onClick: k,
                              children: [
                                f
                                  ? (0, t.jsx)(m.BellSlashIcon, {
                                      color: "white",
                                    })
                                  : (0, t.jsx)(m.BellIcon, { color: "white" }),
                                f
                                  ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                  : F.Z.Messages.FOLLOW,
                              ],
                            }),
                        }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function W(e) {
        var n;
        let {
            detectedGame: o,
            application: l,
            entries: s,
            officialGuildInvite: c,
            similarGames: d,
            similarGamesError: u,
            onClose: p,
            viewId: _,
            trackAction: g,
          } = e,
          f = i.useMemo(() => {
            var e, n;
            let a = (
              null !== (e = null == o ? void 0 : o.artwork) && void 0 !== e
                ? e
                : []
            ).map((e) => ({ src: e }));
            return [
              ...(null !== (n = null == o ? void 0 : o.screenshots) &&
              void 0 !== n
                ? n
                : []
              ).map((e) => ({ src: e })),
              ...a,
            ];
          }, [
            null == o ? void 0 : o.artwork,
            null == o ? void 0 : o.screenshots,
          ]);
        return (0, t.jsxs)("div", {
          className: H.sections,
          children: [
            (0, t.jsx)(O.Z, {
              entries: s,
              viewId: _,
              officialGuildId:
                null == c
                  ? void 0
                  : null === (n = c.guild) || void 0 === n
                    ? void 0
                    : n.id,
              onClose: p,
            }),
            f.length > 0 &&
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(m.Heading, {
                    className: H.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: F.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                  }),
                  (0, t.jsx)(m.Scroller, {
                    className: r()(H.row, H.gapLg, H.imageScroller),
                    orientation: "horizontal",
                    children: f.map((e, n) =>
                      (0, t.jsx)(
                        m.Clickable,
                        {
                          className: H.clickable,
                          focusProps: {
                            offset: 4,
                            ringClassName: H.gameArtworkFocusRing,
                          },
                          onClick: () => {
                            g(M.as.ClickImage),
                              (0, m.openModalLazy)(async () => {
                                let { default: e } = await a
                                  .e("99857")
                                  .then(a.bind(a, 895023));
                                return (a) => {
                                  let { ...i } = a;
                                  return (0, t.jsx)(e, {
                                    className: H.mediaModal,
                                    ...i,
                                    items: f,
                                    startingIndex: n,
                                  });
                                };
                              });
                          },
                          children: (0, t.jsx)("img", {
                            src: e.src,
                            className: H.gameArtwork,
                            alt: F.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                              { game: name },
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
            (0, t.jsx)(y.Z, {
              applicationId: l.id,
              onClose: p,
              trackAction: g,
              similarGames: d,
              similarGamesError: u,
            }),
          ],
        });
      }
      function z(e) {
        let { detectedGame: n, setOfficialGuildInvite: a, trackAction: i } = e;
        return (0, t.jsxs)("div", {
          className: r()(H.sidebar, H.column, H.gapLg),
          children: [
            (0, t.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: F.Z.Messages.ABOUT,
            }),
            (0, t.jsxs)("div", {
              className: H.sections,
              children: [
                (0, t.jsx)(R.Z, { detectedGame: n, trackAction: i }),
                (0, t.jsx)(G.Z, {
                  detectedGame: n,
                  trackClick: i,
                  onInviteResolved: a,
                }),
                (0, t.jsx)(w.Z, { detectedGame: n, trackClick: i }),
                (0, t.jsx)(k.Z, { detectedGame: n }),
              ],
            }),
          ],
        });
      }
      let Y = (e) => e.filter(N.z6).slice(0, 5);
      n.default = (e) => {
        let {
            applicationId: n,
            source: a,
            sourceUserId: o,
            transitionState: l,
            onClose: s,
          } = e,
          { clientThemesClassName: c } = (0, g.ZP)(),
          u = (0, d.e7)([I.default], () => I.default.locale),
          E = i.useMemo(() => (0, M.fP)(), []),
          A = (0, d.Wu)([T.Z], () => {
            var e;
            return (
              null !== (e = T.Z.getSimilarGames(n)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [j, P] = i.useState(null),
          { entries: N } = (0, b.Z)(),
          S = i.useMemo(() => {
            var e;
            return null !==
              (e =
                null == N
                  ? void 0
                  : N.filter(
                      (e) => (0, x.dX)(e) && e.extra.application_id === n,
                    )) && void 0 !== e
              ? e
              : [];
          }, [N, n]),
          [L, w] = i.useState(null),
          O = (0, d.e7)([_.Z], () => _.Z.getApplication(n)),
          G = (0, d.e7)([h.Z], () => h.Z.getGame(n)),
          k = (e, a) => {
            var t;
            (0, M.UE)({
              gameName: null != name ? name : "",
              applicationId: n,
              action: e,
              similarGameId: a,
              viewId: E,
              officialGuildId:
                null == L
                  ? void 0
                  : null === (t = L.guild) || void 0 === t
                    ? void 0
                    : t.id,
            });
          };
        return (i.useEffect(() => {
          var e, t;
          (0, M.IS)({
            source: a,
            viewId: E,
            applicationId: n,
            gameName:
              null !==
                (t =
                  null !== (e = null == G ? void 0 : G.name) && void 0 !== e
                    ? e
                    : null == O
                      ? void 0
                      : O.name) && void 0 !== t
                ? t
                : "",
            authorId: o,
          });
        }, []),
        i.useEffect(() => {
          (0, f.Jn)();
        }, []),
        i.useEffect(() => {
          (async () => {
            if (0 === A.length) {
              P(null);
              try {
                await (0, C.i)(n);
              } catch (e) {
                P(e);
              }
            }
          })();
        }, [n, A]),
        (0, p.Z)(() => {
          var e, a, t;
          let i = Date.now(),
            o = S.map((e) => {
              let n = (0, v.kr)(e) ? (0, v.T_)(e, i) : (0, v.GL)(e, u);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: n,
              });
            });
          (0, M.wz)({
            viewId: E,
            applicationId: n,
            gameName:
              null !==
                (t =
                  null !== (a = null == G ? void 0 : G.name) && void 0 !== a
                    ? a
                    : null == O
                      ? void 0
                      : O.name) && void 0 !== t
                ? t
                : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: o,
            similarGames: Y(A),
            officialGuildId:
              null == L
                ? void 0
                : null === (e = L.guild) || void 0 === e
                  ? void 0
                  : e.id,
          });
        }),
        null == G || null == O)
          ? null
          : (0, t.jsx)(m.ModalRoot, {
              transitionState: l,
              size: m.ModalSize.DYNAMIC,
              className: r()(c, H.gameProfileModal),
              children: (0, t.jsxs)(m.ScrollerNone, {
                className: H.scrollable,
                children: [
                  (0, t.jsx)(U, {
                    detectedGame: G,
                    application: O,
                    entries: S,
                    viewId: E,
                    trackAction: k,
                  }),
                  (0, t.jsx)(m.HeadingLevel, {
                    children: (0, t.jsxs)("div", {
                      className: r()(H.content, H.mainContent),
                      children: [
                        (0, t.jsx)(W, {
                          detectedGame: G,
                          application: O,
                          entries: S,
                          officialGuildInvite: L,
                          similarGames: A,
                          similarGamesError: j,
                          onClose: s,
                          viewId: E,
                          trackAction: k,
                        }),
                        (0, t.jsx)(z, {
                          detectedGame: G,
                          setOfficialGuildInvite: w,
                          trackAction: k,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      };
    },
    715318: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = a(735250);
      a(470079);
      var i = a(481060),
        o = a(239091),
        r = a(299206),
        l = a(326103),
        s = a(689938);
      function c(e) {
        let { applicationId: n, className: c, viewId: d } = e,
          u = (0, l.v)("GameProfileOverflowMenu"),
          m = (0, r.Z)({ id: n, label: s.Z.Messages.COPY_ID_APPLICATION }),
          p = u
            ? (0, t.jsx)(i.MenuItem, {
                id: "game-profile-something-wrong",
                label: s.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                action: () =>
                  (0, i.openModalLazy)(async () => {
                    let { GameProfileFeedbackModal: e } = await a
                      .e("1011")
                      .then(a.bind(a, 943350));
                    return (a) =>
                      (0, t.jsx)(e, { applicationId: n, viewId: d, ...a });
                  }),
              })
            : null;
        return null == m && null == p
          ? null
          : (0, t.jsx)(i.Popout, {
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(i.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, o.Zy)(), n();
                  },
                  "aria-label": s.Z.Messages.GAME_PROFILE_VIEW_MORE,
                  onSelect: () => {},
                  children: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(i.MenuGroup, { children: m }),
                      (0, t.jsx)(i.MenuGroup, { children: p }),
                    ],
                  }),
                });
              },
              children: (e) =>
                (0, t.jsx)(i.Tooltip, {
                  text: s.Z.Messages.MORE,
                  children: (n) =>
                    (0, t.jsx)(i.Clickable, {
                      className: c,
                      ...n,
                      ...e,
                      children: (0, t.jsx)(i.MoreHorizontalIcon, {
                        size: "xs",
                        color: i.tokens.colors.WHITE,
                      }),
                    }),
                }),
            });
      }
    },
    38516: function (e, n, a) {
      a(411104);
      var t = a(735250);
      a(470079);
      var i = a(120356),
        o = a.n(i),
        r = a(643872),
        l = a(481060),
        s = a(810568),
        c = a(689938),
        d = a(51527),
        u = a(825718);
      let m = [r.p.OFFICIAL, r.p.TWITTER, r.p.YOUTUBE];
      function p(e) {
        let { website: n, trackClick: a } = e,
          {
            action: i,
            icon: o,
            title: d,
          } = (function (e) {
            switch (e.category) {
              case r.p.OFFICIAL:
                return {
                  icon: (0, t.jsx)(l.GlobeEarthIcon, {
                    colorClass: u.linkIcon,
                  }),
                  action: s.as.WebsiteLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL,
                };
              case r.p.TWITTER:
                return {
                  icon: (0, t.jsx)(l.XNeutralIcon, { colorClass: u.linkIcon }),
                  action: s.as.XLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER,
                };
              case r.p.YOUTUBE:
                return {
                  action: s.as.YouTubeLink,
                  icon: (0, t.jsx)(l.YoutubeNeutralIcon, {
                    colorClass: u.linkIcon,
                  }),
                  title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE,
                };
              default:
                throw Error("Unknown IGDB website category");
            }
          })(n);
        return (0, t.jsx)(
          l.Anchor,
          {
            className: u.linkAnchor,
            title: d,
            href: n.url,
            onClick: () => {
              a(i);
            },
            target: "_blank",
            children: o,
          },
          n.url,
        );
      }
      n.Z = function (e) {
        let { detectedGame: n, trackClick: a } = e;
        if (null == n.websites || 0 === n.websites.length) return null;
        let i = n.websites
          .filter((e) => {
            let { category: n } = e;
            return m.includes(n);
          })
          .sort((e, n) => e.category - n.category);
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsx)(l.Heading, {
              className: d.sectionHeader,
              variant: "text-xs/semibold",
              color: "header-secondary",
              children: c.Z.Messages.GAME_PROFILE_LINKS,
            }),
            (0, t.jsx)("div", {
              className: o()(d.row, d.gapMd),
              children: i.map((e) =>
                (0, t.jsx)(p, { website: e, trackClick: a }, e.url),
              ),
            }),
          ],
        });
      };
    },
    252547: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return p;
        },
      }),
        a(47120);
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(793030),
        s = a(481060),
        c = a(383895),
        d = a(689938),
        u = a(51527),
        m = a(268236);
      function p(e) {
        let { entries: n, viewId: a, officialGuildId: o, onClose: p } = e,
          _ = n.length > 7,
          [g, f] = i.useState(!1),
          x = i.useMemo(() => n.slice(0, _ && !g ? 6 : void 0), [n, _, g]);
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsx)(l.X6, {
              className: u.sectionHeader,
              variant: "text-md/semibold",
              color: "header-primary",
              children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
            }),
            0 === n.length
              ? (0, t.jsx)(l.xv, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  className: m.emptyState,
                  children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className: r()(m.friends, { [m.fadedEntries]: _ && !g }),
                      children: (0, t.jsx)("div", {
                        className: u.column,
                        children: x.map((e) =>
                          (0, t.jsx)(
                            c.Z,
                            {
                              entry: e,
                              viewId: a,
                              onClose: p,
                              officialGuildId: o,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                    _ &&
                      !g &&
                      (0, t.jsxs)(s.Clickable, {
                        className: m.expandEntriesButton,
                        onClick: () => f(!0),
                        children: [
                          (0, t.jsx)(l.xv, {
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            children: d.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                          }),
                          (0, t.jsx)(s.ChevronSmallDownIcon, { size: "xs" }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }
    },
    484527: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return h;
        },
      }),
        a(47120);
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(643872),
        s = a(442837),
        c = a(481060),
        d = a(570140),
        u = a(652898),
        m = a(93093),
        p = a(768581),
        _ = a(810568),
        g = a(981631),
        f = a(689938),
        x = a(51527),
        v = a(479537);
      function h(e) {
        let { detectedGame: n, trackClick: a, onInviteResolved: o } = e,
          [h, I] = i.useState(),
          E = (0, s.e7)([m.Z], () => {
            var e, n;
            return (
              (null == h
                ? void 0
                : null === (e = h.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              m.Z.isMember(
                null == h
                  ? void 0
                  : null === (n = h.guild) || void 0 === n
                    ? void 0
                    : n.id,
              )
            );
          }),
          A = i.useMemo(() => {
            var e;
            return null === (e = n.websites) || void 0 === e
              ? void 0
              : e.find((e) => {
                  let { category: n } = e;
                  return n === l.p.DISCORD;
                });
          }, [n.websites]);
        if (
          (i.useEffect(() => {
            let e = async (e) => {
              let n = e.split("/").pop();
              if (null != n) {
                let e = await (0, u.Z)(n);
                !0 !== e.banned &&
                  (I(e.invite), null != e.invite && (null == o || o(e.invite)));
              }
            };
            null != A && e(A.url);
          }, [A, o]),
          null == h ||
            null == h.guild ||
            (!h.guild.features.includes("VERIFIED") &&
              !h.guild.features.includes("PARTNER")))
        )
          return null;
        let j = p.ZP.getGuildIconURL({
          id: h.guild.id,
          icon: h.guild.icon,
          size: 32,
        });
        return (0, t.jsxs)("div", {
          className: x.column,
          children: [
            (0, t.jsx)(c.Heading, {
              className: x.sectionHeader,
              variant: "text-xs/semibold",
              color: "header-secondary",
              children: f.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
            }),
            (0, t.jsxs)("div", {
              className: r()(x.row, x.gapMd),
              children: [
                (0, t.jsx)("img", {
                  className: v.guildIcon,
                  src: j,
                  alt: f.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                    guildName: h.guild.name,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: v.inviteInfo,
                  children: [
                    (0, t.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: h.guild.name,
                    }),
                    null != h.approximate_member_count &&
                      (0, t.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        children:
                          f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: h.approximate_member_count },
                          ),
                      }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(c.Button, {
              color: c.ButtonColors.PRIMARY,
              onClick: () => {
                a(_.as.JoinOfficialServer),
                  d.Z.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: h,
                    code: h.code,
                    context: g.IlC.APP,
                  });
              },
              children: E ? f.Z.Messages.JOINED_GUILD : f.Z.Messages.JOIN_GUILD,
            }),
          ],
        });
      }
    },
    124580: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return g;
        },
      }),
        a(47120),
        a(653041);
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(758713),
        s = a(657707),
        c = a(793030),
        d = a(689938),
        u = a(51527);
      let m = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];
      function p(e) {
        let { platform: n } = e;
        switch (n) {
          case l.z.DESKTOP:
            return (0, t.jsx)(s.pzj, { size: "xs" });
          case l.z.XBOX:
            return (0, t.jsx)(s.Mko, { size: "xs" });
          case l.z.PLAYSTATION:
            return (0, t.jsx)(s.Tsp, { size: "xs" });
          case l.z.NINTENDO:
            return (0, t.jsx)(s.aPH, { size: "xs" });
          default:
            return null;
        }
      }
      function _(e) {
        let { platforms: n } = e;
        return (0, t.jsxs)("div", {
          className: r()(u.row, u.gapSm),
          style: { alignItems: "center" },
          children: [
            (0, t.jsx)(c.xv, { variant: "text-sm/normal", children: " \xb7 " }),
            n.map((e) => (0, t.jsx)(p, { platform: e }, e)),
          ],
        });
      }
      function g(e) {
        let { detectedGame: n } = e,
          a = i.useMemo(() => {
            let e = new Set(n.platforms),
              a = [...e];
            return (
              !e.has(l.z.DESKTOP) &&
                (e.has(l.z.MACOS) || e.has(l.z.LINUX)) &&
                a.push(l.z.DESKTOP),
              a.filter((e) => m.includes(e))
            );
          }, [n.platforms]);
        return 0 === n.publishers.length && 0 === a.length
          ? null
          : (0, t.jsx)("div", {
              className: r()(u.column, u.gapLg),
              children:
                n.publishers.length > 0 &&
                (0, t.jsxs)("div", {
                  className: r()(u.column, u.gapSm),
                  children: [
                    (0, t.jsx)(c.X6, {
                      variant: "text-xs/semibold",
                      color: "header-secondary",
                      children: d.Z.Messages.GAME_PROFILE_PUBLISHER,
                    }),
                    (0, t.jsxs)("div", {
                      className: r()(u.row, u.gapMd),
                      children: [
                        (0, t.jsx)(c.xv, {
                          variant: "text-sm/normal",
                          children: n.publishers.join(", "),
                        }),
                        a.length > 0 && (0, t.jsx)(_, { platforms: a }),
                      ],
                    }),
                  ],
                }),
            });
      }
    },
    296768: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return A;
        },
      }),
        a(47120);
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(392711),
        s = a.n(l),
        c = a(442837),
        d = a(481060),
        u = a(224706),
        m = a(812206),
        p = a(669764),
        _ = a(810568),
        g = a(839392),
        f = a(774073),
        x = a(644941),
        v = a(689938),
        h = a(51527),
        I = a(796805);
      let E = (e) => {
        let { game: n, onClose: a, trackClick: i } = e,
          o = (0, c.e7)([m.Z], () =>
            (null == n ? void 0 : n.applicationId) != null
              ? m.Z.getApplication(null == n ? void 0 : n.applicationId)
              : null,
          );
        if (null == n) return null;
        let r = n.coverImageUrl;
        return (0, t.jsx)(d.Tooltip, {
          text: n.name,
          children: (e) => {
            var l;
            return (0, t.jsx)(d.Clickable, {
              ...e,
              className: h.clickable,
              onClick: async () => {
                i(_.as.ClickSimilarGame, n.applicationId),
                  (0, d.openModalLazy)(() =>
                    Promise.resolve((e) =>
                      (0, t.jsx)(x.default, {
                        applicationId: n.applicationId,
                        source: _.m1.SimilarGames,
                        ...e,
                      }),
                    ),
                  ),
                  await new Promise((e) => setTimeout(e, 10)),
                  a();
              },
              children: (0, t.jsx)("img", {
                src: r,
                className: I.similarGameImage,
                alt: v.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game:
                    null !== (l = null == o ? void 0 : o.name) && void 0 !== l
                      ? l
                      : null == n
                        ? void 0
                        : n.name,
                }),
              }),
            });
          },
        });
      };
      function A(e) {
        let {
            applicationId: n,
            onClose: a,
            trackAction: o,
            similarGames: l,
            similarGamesError: m,
          } = e,
          _ = (0, c.e7)([g.Z, p.Z], () => {
            let e = void 0 === g.Z.getSimilarGames(n),
              a = l.some((e) => p.Z.isFetching(e));
            return e || a;
          }),
          x = (0, c.Wu)([p.Z], () =>
            l
              .map((e) => p.Z.getGame(e))
              .filter(f.W1)
              .slice(0, 5),
          );
        return (i.useEffect(() => {
          l.length > 0 && u.Z.getDetectableGamesSupplemental([n, ...l]);
        }, [n, l]),
        _ && null == m)
          ? (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", {
                  className: r()(I.loadingHeading, h.sectionHeader),
                }),
                (0, t.jsx)("div", {
                  className: r()(h.row, h.gapLg),
                  children: s()
                    .range(0, 5)
                    .map((e) =>
                      (0, t.jsx)("div", { className: I.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : _ || 0 !== x.length
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(d.Heading, {
                    className: h.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: v.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                  }),
                  (0, t.jsx)("div", {
                    className: r()(h.row, h.gapLg),
                    style: {},
                    children: x.map((e) =>
                      (0, t.jsx)(
                        E,
                        { game: e, onClose: a, trackClick: o },
                        null == e ? void 0 : e.applicationId,
                      ),
                    ),
                  }),
                ],
              })
            : null;
      }
    },
    978313: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return g;
        },
      }),
        a(47120);
      var t = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        l = a(657707),
        s = a(793030),
        c = a(692547),
        d = a(481060),
        u = a(962250),
        m = a(810568),
        p = a(689938),
        _ = a(51527);
      function g(e) {
        let { detectedGame: n, trackAction: a } = e,
          [o, g] = i.useState(
            (null == n ? void 0 : n.summaryLocalized) != null,
          ),
          [f, x] = i.useState(!0),
          [v, h] = i.useState(!1),
          I = i.useRef(null),
          { width: E, height: A } = (0, u.b)();
        return (i.useEffect(() => {
          let e = I.current;
          null != e && h(e.scrollHeight - e.clientHeight > 1);
        }, [I, E, A]),
        null == n.summary)
          ? null
          : (0, t.jsxs)("div", {
              className: r()(_.column, _.gapSm),
              children: [
                null != n.summaryLocalized &&
                  (0, t.jsxs)("div", {
                    className: r()(_.row, _.gapSm),
                    children: [
                      (0, t.jsx)(l.SxY, {
                        color: c.Z.colors.HEADER_SECONDARY,
                        size: "xs",
                      }),
                      (0, t.jsx)(s.xv, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        children: o
                          ? p.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({
                              onShowOriginal: () => g(!1),
                            })
                          : p.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({
                              onShowTranslated: () => g(!0),
                            }),
                      }),
                    ],
                  }),
                (0, t.jsx)(s.xv, {
                  ref: I,
                  lineClamp: f ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: o ? n.summaryLocalized : n.summary,
                }),
                (v || !f) &&
                  (0, t.jsx)(d.Clickable, {
                    className: _.clickable,
                    onClick: () => {
                      a(f ? m.as.ShowMore : m.as.ShowLess), x(!f);
                    },
                    children: (0, t.jsx)(s.xv, {
                      variant: "text-sm/semibold",
                      children: f
                        ? p.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE
                        : p.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS,
                    }),
                  }),
              ],
            });
      }
    },
    962250: function (e, n, a) {
      a.d(n, {
        b: function () {
          return i;
        },
      }),
        a(47120);
      var t = a(470079);
      function i() {
        var e, n;
        let [a, i] = t.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (n = window.innerHeight) && void 0 !== n ? n : 1080,
        });
        return (
          t.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              i({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          a
        );
      }
    },
    643872: function (e, n, a) {
      var t, i;
      a.d(n, {
        p: function () {
          return t;
        },
      }),
        ((i = t || (t = {}))[(i.OFFICIAL = 1)] = "OFFICIAL"),
        (i[(i.WIKIA = 2)] = "WIKIA"),
        (i[(i.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (i[(i.FACEBOOK = 4)] = "FACEBOOK"),
        (i[(i.TWITTER = 5)] = "TWITTER"),
        (i[(i.TWITCH = 6)] = "TWITCH"),
        (i[(i.INSTAGRAM = 8)] = "INSTAGRAM"),
        (i[(i.YOUTUBE = 9)] = "YOUTUBE"),
        (i[(i.IPHONE = 10)] = "IPHONE"),
        (i[(i.IPAD = 11)] = "IPAD"),
        (i[(i.ANDROID = 12)] = "ANDROID"),
        (i[(i.STEAM = 13)] = "STEAM"),
        (i[(i.REDDIT = 14)] = "REDDIT"),
        (i[(i.ITCH = 15)] = "ITCH"),
        (i[(i.EPICGAMES = 16)] = "EPICGAMES"),
        (i[(i.GOG = 17)] = "GOG"),
        (i[(i.DISCORD = 18)] = "DISCORD");
    },
    968333: function (e, n, a) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    793834: function (e, n, a) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    290500: function (e, n, a) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    765388: function (e, n, a) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    738127: function (e, n, a) {
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
        streamingPopoutPreviewContainer:
          "streamingPopoutPreviewContainer_a35965",
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
    301698: function (e, n, a) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    704108: function (e, n, a) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    501345: function (e, n, a) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    51527: function (e, n, a) {
      e.exports = {
        row: "row_e881fc",
        column: "column_e881fc",
        gapXs: "gapXs_e881fc",
        gapSm: "gapSm_e881fc",
        gapMd: "gapMd_e881fc",
        gapLg: "gapLg_e881fc",
        clickable: "clickable_e881fc",
        content: "content_e881fc",
        gameProfileModal: "gameProfileModal_e881fc",
        gameArtHero: "gameArtHero_e881fc",
        scrollable: "scrollable_e881fc",
        coverArtRow: "coverArtRow_e881fc",
        overflowMenu: "overflowMenu_e881fc",
        headerInfo: "headerInfo_e881fc",
        logoWrapper: "logoWrapper_e881fc",
        logo: "logo_e881fc",
        followButton: "followButton_e881fc",
        gameDetails: "gameDetails_e881fc",
        gameBadge: "gameBadge_e881fc",
        newBadge: "newBadge_e881fc",
        mainContent: "mainContent_e881fc",
        sidebar: "sidebar_e881fc",
        sections: "sections_e881fc",
        sectionHeader: "sectionHeader_e881fc",
        imageScroller: "imageScroller_e881fc",
        mediaModal: "mediaModal_e881fc",
        gameArtwork: "gameArtwork_e881fc",
        gameArtworkFocusRing: "gameArtworkFocusRing_e881fc",
      };
    },
    825718: function (e, n, a) {
      e.exports = {
        linkIcon: "linkIcon_bb1ae6",
        linkAnchor: "linkAnchor_bb1ae6",
      };
    },
    268236: function (e, n, a) {
      e.exports = {
        friends: "friends_d8cab0",
        emptyState: "emptyState_d8cab0",
        fadedEntries: "fadedEntries_d8cab0",
        expandEntriesButton: "expandEntriesButton_d8cab0",
      };
    },
    479537: function (e, n, a) {
      e.exports = {
        inviteInfo: "inviteInfo_c2c033",
        guildIcon: "guildIcon_c2c033",
      };
    },
    796805: function (e, n, a) {
      e.exports = {
        similarGameImage: "similarGameImage_bd82e2",
        loadingArtwork: "loadingArtwork_bd82e2",
        loadingHeading: "loadingHeading_bd82e2",
      };
    },
    445524: function (e, n, a) {
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    835777: function (e, n, a) {
      e.exports = {
        gameTitle: "gameTitle_cf6db7",
        gameTitleContainer: "gameTitleContainer_cf6db7",
        rankText: "rankText_cf6db7",
        rankContainer: "rankContainer_cf6db7",
        rankFirstPlace: "rankFirstPlace_cf6db7",
        rankSecondPlace: "rankSecondPlace_cf6db7",
        rankThirdPlace: "rankThirdPlace_cf6db7",
        rankAvatar: "rankAvatar_cf6db7",
      };
    },
    264699: function (e, n, a) {
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
  },
]);
//# sourceMappingURL=6e4d661c3e7ed7d49892.js.map
