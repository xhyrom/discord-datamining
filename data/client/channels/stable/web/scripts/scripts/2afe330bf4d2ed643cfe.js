"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87355"],
  {
    560361: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return i;
        },
      });
      var t = n(470079);
      function i(e) {
        let a = t.useRef();
        (a.current = e),
          t.useEffect(
            () => () => {
              var e;
              return null === (e = a.current) || void 0 === e
                ? void 0
                : e.call(a);
            },
            [],
          );
      }
    },
    998058: function (e, a, n) {
      n.d(a, {
        i: function () {
          return l;
        },
      });
      var t = n(544891),
        i = n(570140),
        r = n(881052),
        o = n(981631);
      let l = async (e) => {
        try {
          var a;
          let n = await t.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
            r = (
              null !== (a = n.body.similar_games) && void 0 !== a ? a : []
            ).filter((a) => a !== e);
          i.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: r,
          });
        } catch (e) {
          throw new r.Hx(e);
        }
      };
    },
    839392: function (e, a, n) {
      var t,
        i,
        r,
        o,
        l = n(442837),
        s = n(570140);
      let c = {};
      class d extends (o = l.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (r = "GameProfileStore"),
        (i = "displayName") in (t = d)
          ? Object.defineProperty(t, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[i] = r),
        (a.Z = new d(s.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: a, games: n } = e;
            c[a] = n;
          },
        }));
    },
    96856: function (e, a, n) {
      n.d(a, {
        p: function () {
          return i;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        let a =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = t.useExperiment(
            { location: e },
            { autoTrackExposure: a },
          );
        return n;
      }
    },
    326103: function (e, a, n) {
      n.d(a, {
        v: function () {
          return i;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_game_profile_feedback_flow",
        label: "Game Profile Feedback Flow",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
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
          return g;
        },
      }),
        n(47120);
      var t = n(470079),
        i = n(392711),
        r = n.n(i),
        o = n(876215),
        l = n(442837),
        s = n(146282),
        c = n(897674),
        d = n(709054),
        u = n(206583);
      let m = new Set([o.s.PLAYED_GAME]),
        p = (e) => m.has(e.content_type);
      function g() {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
          a = (0, c.Z)(u.YN.GLOBAL_FEED),
          n = t.useMemo(
            () =>
              r()(a)
                .unionBy(e, (e) => e.id)
                .filter(p)
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
          requestId: (0, l.e7)([s.Z], () =>
            s.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED),
          ),
          entries: n,
        };
      }
    },
    124030: function (e, a, n) {
      n.d(a, {
        A: function () {
          return o;
        },
        L: function () {
          return r;
        },
      });
      var t = n(433517);
      let i = "GameFollowSurveyModal";
      function r() {
        var e;
        return (
          (null === (e = t.K.get(i)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function o() {
        return t.K.set(i, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, a, n) {
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(442837),
        s = n(481060),
        c = n(178762),
        d = n(91140),
        u = n(297781),
        m = n(592125),
        p = n(944486),
        g = n(594174),
        _ = n(5192),
        f = n(810568),
        x = n(689938),
        h = n(501345),
        v = n(51527);
      a.Z = (e) => {
        let { entry: a, viewId: n, officialGuildId: r, onClose: I } = e,
          E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
          A = (0, l.e7)([g.default], () => g.default.getUser(a.author_id)),
          { nick: b, avatar: C } = i.useMemo(() => {
            let e =
              null == A
                ? void 0
                : A.getAvatarURL(null == E ? void 0 : E.guild_id, 48, !1);
            return {
              nick: _.ZP.getName(
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
                let { closePopout: i, updatePosition: o } = e;
                return (0, t.jsx)(c.J, {
                  entry: a,
                  closePopout: i,
                  updatePopoutPosition: o,
                  onReaction: () => {
                    (0, f.UE)({
                      action: f.as.SendMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                      officialGuildId: r,
                    }),
                      I(),
                      i();
                  },
                  onUserPopoutClosed: () => i(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(a.id),
              onRequestOpen: () => {
                (0, f.UE)({
                  action: f.as.ClickMessageUser,
                  applicationId: a.extra.application_id,
                  gameName: a.extra.game_name,
                  recipientUserId: a.author_id,
                  viewId: n,
                  officialGuildId: r,
                });
              },
              children: (e) =>
                (0, t.jsx)(s.Clickable, {
                  ...e,
                  className: h.profileEntryCard,
                  children: (0, t.jsx)(s.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: h.avatar,
                          src: C,
                          alt: x.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: b },
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: o()(h.playerInfo),
                          children: (0, t.jsxs)("div", {
                            className: o()(v.column, v.gapXs),
                            children: [
                              (0, t.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: b,
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
                          className: h.reactions,
                          children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, {
                            size: "sm",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            });
      };
    },
    644941: function (e, a, n) {
      n.r(a), n(47120);
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(913527),
        s = n.n(l),
        c = n(705512),
        d = n(442837),
        u = n(433517),
        m = n(481060),
        p = n(560361),
        g = n(835473),
        _ = n(168551),
        f = n(485267),
        x = n(26033),
        h = n(561308),
        v = n(669764),
        I = n(706454),
        E = n(768581),
        A = n(814225),
        b = n(709054),
        C = n(810568),
        j = n(998058),
        M = n(839392),
        P = n(96856),
        T = n(567409),
        N = n(774073),
        S = n(124030),
        L = n(715318),
        w = n(38516),
        k = n(891949),
        G = n(252547),
        O = n(484527),
        y = n(131033),
        R = n(296768),
        Z = n(978313),
        F = n(206583),
        H = n(689938),
        D = n(51527);
      let B = "GameProfileModal",
        W = () =>
          (0, t.jsxs)("div", {
            className: D.gameBadge,
            children: [
              (0, t.jsx)(m.FireIcon, { size: "xxs" }),
              (0, t.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: H.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          });
      function U(e) {
        var a, r;
        let {
            detectedGame: l,
            application: d,
            entries: p,
            viewId: g,
            trackAction: _,
          } = e,
          [f, x] = i.useState(() => {
            var e;
            return null === (e = u.K.get(B)) || void 0 === e ? void 0 : e[d.id];
          }),
          v = (0, P.p)("GameProfileModal"),
          I = i.useMemo(
            () => (null == l ? void 0 : l.genres.map(A.P3).join(", ")),
            [l],
          ),
          j = i.useMemo(() => {
            if (null == l) return "";
            let { artwork: e, screenshots: a } = l;
            if (e.length > 0) {
              let a = Math.floor(Math.random() * (e.length - 1));
              return e[a];
            }
            if (a.length > 0) {
              let e = Math.floor(Math.random() * (a.length - 1));
              return a[e];
            }
            return "";
          }, [l]),
          M = null == d ? void 0 : d.getIconURL(160, E.$k ? "webp" : "png"),
          T = b.default.extractTimestamp(d.id),
          N = null !== (a = l.coverImageUrl) && void 0 !== a ? a : M,
          w = s()().diff(s()(T), "days") <= F.G,
          k = p.some((e) => (0, h.ig)(e) === c.o.GLOBAL),
          G =
            null !== (r = l.name) && void 0 !== r
              ? r
              : null == d
                ? void 0
                : d.name,
          O = i.useCallback(
            () => () => {
              var e;
              let a = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
              (a[d.id] = !a[d.id]),
                u.K.set(B, a),
                _(a[d.id] ? C.as.FollowGame : C.as.UnfollowGame),
                a[d.id] &&
                  (0, S.L)() &&
                  (0, m.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("86564")
                      .then(n.bind(n, 641758));
                    return (a) =>
                      (0, t.jsx)(e, {
                        ...a,
                        applicationId: d.id,
                        background: j,
                        viewId: g,
                      });
                  }),
                x(a[d.id]);
            },
            [d.id, j, _, g],
          );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: o()(D.gameArtHero),
              style: { backgroundImage: 'url("'.concat(j, '")') },
            }),
            (0, t.jsxs)("div", {
              className: o()(D.content, D.column, D.gapLg, D.headerInfo),
              children: [
                (0, t.jsxs)("div", {
                  className: D.coverArtRow,
                  children: [
                    (0, t.jsx)("div", {
                      className: D.logoWrapper,
                      children:
                        null != N &&
                        (0, t.jsx)("img", {
                          className: D.logo,
                          src: N,
                          alt: H.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: G,
                          }),
                        }),
                    }),
                    (0, t.jsx)(L.Z, {
                      applicationId: d.id,
                      viewId: g,
                      className: D.overflowMenu,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: o()(D.row, D.gapSm, D.gameDetails),
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(m.Heading, {
                          variant: "heading-xl/bold",
                          children: G,
                        }),
                        (0, t.jsxs)("div", {
                          className: o()(D.row, D.gapSm),
                          children: [
                            null != M &&
                              (0, t.jsx)("img", {
                                src: M,
                                height: 16,
                                alt: H.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
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
                                className: D.newBadge,
                                children: H.Z.Messages.NEW,
                              }),
                            k &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(m.Text, {
                                    variant: "text-sm/medium",
                                    children: " \xb7 ",
                                  }),
                                  (0, t.jsx)(W, {}),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      children:
                        v &&
                        (0, t.jsx)(m.Tooltip, {
                          text: f
                            ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                            : H.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                          children: (e) =>
                            (0, t.jsxs)(m.Button, {
                              ...e,
                              innerClassName: D.followButton,
                              color: f
                                ? m.Button.Colors.PRIMARY
                                : m.Button.Colors.BRAND,
                              onClick: O,
                              children: [
                                f
                                  ? (0, t.jsx)(m.BellSlashIcon, {
                                      color: "white",
                                    })
                                  : (0, t.jsx)(m.BellIcon, { color: "white" }),
                                f
                                  ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                  : H.Z.Messages.FOLLOW,
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
      function z(e) {
        var a;
        let {
          detectedGame: n,
          application: i,
          entries: r,
          officialGuildInvite: o,
          similarGames: l,
          similarGamesError: s,
          onClose: c,
          viewId: d,
          trackAction: u,
        } = e;
        return (0, t.jsxs)("div", {
          className: D.sections,
          children: [
            (0, t.jsx)(G.Z, {
              entries: r,
              viewId: d,
              officialGuildId:
                null == o
                  ? void 0
                  : null === (a = o.guild) || void 0 === a
                    ? void 0
                    : a.id,
              onClose: c,
            }),
            (0, t.jsx)(k.Z, { detectedGame: n, trackAction: u }),
            (0, t.jsx)(R.Z, {
              applicationId: i.id,
              onClose: c,
              trackAction: u,
              similarGames: l,
              similarGamesError: s,
            }),
          ],
        });
      }
      function Y(e) {
        let { detectedGame: a, setOfficialGuildInvite: n, trackAction: i } = e;
        return (0, t.jsxs)("div", {
          className: o()(D.sidebar, D.column, D.gapLg),
          children: [
            (0, t.jsx)(m.Heading, {
              variant: "heading-md/bold",
              children: H.Z.Messages.ABOUT,
            }),
            (0, t.jsxs)("div", {
              className: D.sections,
              children: [
                (0, t.jsx)(Z.Z, { detectedGame: a, trackAction: i }),
                (0, t.jsx)(O.Z, {
                  detectedGame: a,
                  trackClick: i,
                  onInviteResolved: n,
                }),
                (0, t.jsx)(w.Z, { detectedGame: a, trackClick: i }),
                (0, t.jsx)(y.Z, { detectedGame: a }),
              ],
            }),
          ],
        });
      }
      let K = (e) => e.filter(N.z6).slice(0, 5);
      a.default = (e) => {
        let {
            applicationId: a,
            source: n,
            sourceUserId: r,
            transitionState: l,
            onClose: s,
          } = e,
          { clientThemesClassName: c } = (0, _.ZP)(),
          u = (0, d.e7)([I.default], () => I.default.locale),
          E = i.useMemo(() => (0, C.fP)(), []),
          A = (0, d.Wu)([M.Z], () => {
            var e;
            return (
              null !== (e = M.Z.getSimilarGames(a)) && void 0 !== e ? e : []
            ).slice(0, 25);
          }),
          [b, P] = i.useState(null),
          { entries: N } = (0, T.Z)(),
          S = i.useMemo(() => {
            var e;
            return null !==
              (e =
                null == N
                  ? void 0
                  : N.filter(
                      (e) => (0, x.dX)(e) && e.extra.application_id === a,
                    )) && void 0 !== e
              ? e
              : [];
          }, [N, a]),
          [L, w] = i.useState(null),
          k = (0, g.q)(a),
          G = (0, d.e7)([v.Z], () => v.Z.getGame(a)),
          O = (e, n) => {
            var t;
            (0, C.UE)({
              gameName: null != name ? name : "",
              applicationId: a,
              action: e,
              similarGameId: n,
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
          (0, C.IS)({
            source: n,
            viewId: E,
            applicationId: a,
            gameName:
              null !==
                (t =
                  null !== (e = null == G ? void 0 : G.name) && void 0 !== e
                    ? e
                    : null == k
                      ? void 0
                      : k.name) && void 0 !== t
                ? t
                : "",
            authorId: r,
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
                await (0, j.i)(a);
              } catch (e) {
                P(e);
              }
            }
          })();
        }, [a, A]),
        (0, p.Z)(() => {
          var e, n, t;
          let i = Date.now(),
            r = S.map((e) => {
              let a = (0, h.kr)(e) ? (0, h.T_)(e, i) : (0, h.GL)(e, u);
              return JSON.stringify({
                item_id: e.id,
                trait: e.traits,
                time_played: a,
              });
            });
          (0, C.wz)({
            viewId: E,
            applicationId: a,
            gameName:
              null !==
                (t =
                  null !== (n = null == G ? void 0 : G.name) && void 0 !== n
                    ? n
                    : null == k
                      ? void 0
                      : k.name) && void 0 !== t
                ? t
                : "",
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: K(A),
            officialGuildId:
              null == L
                ? void 0
                : null === (e = L.guild) || void 0 === e
                  ? void 0
                  : e.id,
          });
        }),
        null == G || null == k)
          ? null
          : (0, t.jsx)(m.ModalRoot, {
              transitionState: l,
              size: m.ModalSize.DYNAMIC,
              className: o()(c, D.gameProfileModal),
              children: (0, t.jsxs)(m.ScrollerNone, {
                className: D.scrollable,
                children: [
                  (0, t.jsx)(U, {
                    detectedGame: G,
                    application: k,
                    entries: S,
                    viewId: E,
                    trackAction: O,
                  }),
                  (0, t.jsx)(m.HeadingLevel, {
                    children: (0, t.jsxs)("div", {
                      className: o()(D.content, D.mainContent),
                      children: [
                        (0, t.jsx)(z, {
                          detectedGame: G,
                          application: k,
                          entries: S,
                          officialGuildInvite: L,
                          similarGames: A,
                          similarGamesError: b,
                          onClose: s,
                          viewId: E,
                          trackAction: O,
                        }),
                        (0, t.jsx)(Y, {
                          detectedGame: G,
                          setOfficialGuildInvite: w,
                          trackAction: O,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      };
    },
    715318: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var t = n(735250);
      n(470079);
      var i = n(481060),
        r = n(239091),
        o = n(299206),
        l = n(326103),
        s = n(689938);
      function c(e) {
        let { applicationId: a, className: c, viewId: d } = e,
          u = (0, l.v)("GameProfileOverflowMenu"),
          m = (0, o.Z)({ id: a, label: s.Z.Messages.COPY_ID_APPLICATION }),
          p = u
            ? (0, t.jsx)(i.MenuItem, {
                id: "game-profile-something-wrong",
                label: s.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                action: () =>
                  (0, i.openModalLazy)(async () => {
                    let { GameProfileFeedbackModal: e } = await n
                      .e("1011")
                      .then(n.bind(n, 943350));
                    return (n) =>
                      (0, t.jsx)(e, { applicationId: a, viewId: d, ...n });
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
                let { closePopout: a } = e;
                return (0, t.jsx)(i.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, r.Zy)(), a();
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
                  children: (a) =>
                    (0, t.jsx)(i.Clickable, {
                      className: c,
                      ...a,
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
    38516: function (e, a, n) {
      n(411104);
      var t = n(735250);
      n(470079);
      var i = n(120356),
        r = n.n(i),
        o = n(643872),
        l = n(481060),
        s = n(810568),
        c = n(689938),
        d = n(51527),
        u = n(825718);
      let m = [o.p.OFFICIAL, o.p.TWITTER, o.p.YOUTUBE];
      function p(e) {
        let { website: a, trackClick: n } = e,
          {
            action: i,
            icon: r,
            title: d,
          } = (function (e) {
            switch (e.category) {
              case o.p.OFFICIAL:
                return {
                  icon: (0, t.jsx)(l.GlobeEarthIcon, {
                    colorClass: u.linkIcon,
                  }),
                  action: s.as.WebsiteLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL,
                };
              case o.p.TWITTER:
                return {
                  icon: (0, t.jsx)(l.XNeutralIcon, { colorClass: u.linkIcon }),
                  action: s.as.XLink,
                  title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER,
                };
              case o.p.YOUTUBE:
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
          })(a);
        return (0, t.jsx)(
          l.Anchor,
          {
            className: u.linkAnchor,
            title: d,
            href: a.url,
            onClick: () => {
              n(i);
            },
            target: "_blank",
            children: r,
          },
          a.url,
        );
      }
      a.Z = function (e) {
        let { detectedGame: a, trackClick: n } = e;
        if (null == a.websites) return null;
        let i = a.websites
          .filter((e) => {
            let { category: a } = e;
            return m.includes(a);
          })
          .sort((e, a) => e.category - a.category);
        return 0 === i.length
          ? null
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(l.Heading, {
                  className: d.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: c.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, t.jsx)("div", {
                  className: r()(d.row, d.gapMd),
                  children: i.map((e) =>
                    (0, t.jsx)(p, { website: e, trackClick: n }, e.url),
                  ),
                }),
              ],
            });
      };
    },
    891949: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var t = n(735250),
        i = n(470079),
        r = n(481060),
        o = n(810568),
        l = n(689938),
        s = n(51527),
        c = n(133512);
      function d(e) {
        let { detectedGame: a, trackAction: d } = e,
          u = i.useRef(null),
          m = i.useMemo(() => {
            let e = a.artwork.map((e) => ({ src: e }));
            return [...a.screenshots.map((e) => ({ src: e })), ...e];
          }, [a.artwork, a.screenshots]),
          p = m.length > 2;
        function g(e) {
          if (null == u.current) return;
          let a = u.current.getScrollerState().scrollLeft;
          u.current.scrollTo({ to: a + 280 * e, animate: !0 });
        }
        return 0 === m.length
          ? null
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(r.Heading, {
                  className: s.sectionHeader,
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: l.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                }),
                (0, t.jsxs)("div", {
                  className: p
                    ? c.gameProfileMediaSmall
                    : c.gameProfileMediaLarge,
                  children: [
                    (0, t.jsx)(r.AdvancedScrollerNone, {
                      ref: u,
                      className: c.imageScroller,
                      orientation: "horizontal",
                      children: m.map((e, a) =>
                        (0, t.jsx)(
                          r.Clickable,
                          {
                            className: c.imageClickable,
                            focusProps: {
                              offset: 4,
                              ringClassName: c.gameArtworkFocusRing,
                            },
                            onClick: () => {
                              d(o.as.ClickImage),
                                (0, r.openModalLazy)(async () => {
                                  let { default: e } = await n
                                    .e("99857")
                                    .then(n.bind(n, 895023));
                                  return (n) => {
                                    let { ...i } = n;
                                    return (0, t.jsx)(e, {
                                      className: c.mediaModal,
                                      ...i,
                                      items: m,
                                      startingIndex: a,
                                    });
                                  };
                                });
                            },
                            children: (0, t.jsx)("img", {
                              src: e.src,
                              className: c.gameArtwork,
                              alt: l.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                { game: name },
                              ),
                            }),
                          },
                          e.src,
                        ),
                      ),
                    }),
                    p &&
                      (0, t.jsxs)("div", {
                        className: c.mediaOverlay,
                        children: [
                          (0, t.jsx)("div", { className: c.gradientLeft }),
                          (0, t.jsx)(r.Clickable, {
                            className: c.arrowClickable,
                            onClick: () => g(-1),
                            children: (0, t.jsx)(r.ArrowSmallLeftIcon, {
                              className: c.arrow,
                              color: "currentColor",
                            }),
                          }),
                          (0, t.jsx)("div", { className: c.gradientRight }),
                          (0, t.jsx)(r.Clickable, {
                            className: c.arrowClickable,
                            onClick: () => g(1),
                            children: (0, t.jsx)(r.ArrowSmallRightIcon, {
                              className: c.arrow,
                              color: "currentColor",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            });
      }
    },
    252547: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(793030),
        s = n(481060),
        c = n(383895),
        d = n(689938),
        u = n(51527),
        m = n(268236);
      function p(e) {
        let { entries: a, viewId: n, officialGuildId: r, onClose: p } = e,
          g = a.length > 7,
          [_, f] = i.useState(!1),
          x = i.useMemo(() => a.slice(0, g && !_ ? 6 : void 0), [a, g, _]);
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsx)(l.X6, {
              className: u.sectionHeader,
              variant: "text-md/semibold",
              color: "header-primary",
              children: d.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
            }),
            0 === a.length
              ? (0, t.jsx)(l.xv, {
                  variant: "text-xs/semibold",
                  color: "text-primary",
                  className: m.emptyState,
                  children: d.Z.Messages.GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      className: o()(m.friends, { [m.fadedEntries]: g && !_ }),
                      children: (0, t.jsx)("div", {
                        className: u.column,
                        children: x.map((e) =>
                          (0, t.jsx)(
                            c.Z,
                            {
                              entry: e,
                              viewId: n,
                              onClose: p,
                              officialGuildId: r,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    }),
                    g &&
                      !_ &&
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
    484527: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(643872),
        s = n(442837),
        c = n(481060),
        d = n(570140),
        u = n(652898),
        m = n(93093),
        p = n(768581),
        g = n(810568),
        _ = n(981631),
        f = n(689938),
        x = n(51527),
        h = n(479537);
      function v(e) {
        let { detectedGame: a, trackClick: n, onInviteResolved: r } = e,
          [v, I] = i.useState(),
          E = (0, s.e7)([m.Z], () => {
            var e, a;
            return (
              (null == v
                ? void 0
                : null === (e = v.guild) || void 0 === e
                  ? void 0
                  : e.id) != null &&
              m.Z.isMember(
                null == v
                  ? void 0
                  : null === (a = v.guild) || void 0 === a
                    ? void 0
                    : a.id,
              )
            );
          }),
          A = i.useMemo(() => {
            var e;
            return null === (e = a.websites) || void 0 === e
              ? void 0
              : e.find((e) => {
                  let { category: a } = e;
                  return a === l.p.DISCORD;
                });
          }, [a.websites]);
        if (
          (i.useEffect(() => {
            let e = async (e) => {
              let a = e.split("/").pop();
              if (null != a) {
                let e = await (0, u.Z)(a);
                !0 !== e.banned &&
                  (I(e.invite), null != e.invite && (null == r || r(e.invite)));
              }
            };
            null != A && e(A.url);
          }, [A, r]),
          null == v ||
            null == v.guild ||
            (!v.guild.features.includes("VERIFIED") &&
              !v.guild.features.includes("PARTNER")))
        )
          return null;
        let b = p.ZP.getGuildIconURL({
          id: v.guild.id,
          icon: v.guild.icon,
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
              className: o()(x.row, x.gapMd),
              children: [
                (0, t.jsx)("img", {
                  className: h.guildIcon,
                  src: b,
                  alt: f.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                    guildName: v.guild.name,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: h.inviteInfo,
                  children: [
                    (0, t.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      children: v.guild.name,
                    }),
                    null != v.approximate_member_count &&
                      (0, t.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        children:
                          f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: v.approximate_member_count },
                          ),
                      }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(c.Button, {
              color: c.ButtonColors.PRIMARY,
              onClick: () => {
                n(g.as.JoinOfficialServer),
                  d.Z.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: v,
                    code: v.code,
                    context: _.IlC.APP,
                  });
              },
              children: E ? f.Z.Messages.JOINED_GUILD : f.Z.Messages.JOIN_GUILD,
            }),
          ],
        });
      }
    },
    221370: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return g;
        },
      }),
        n(47120),
        n(653041);
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(758713),
        s = n(657707),
        c = n(793030),
        d = n(51527);
      let u = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];
      function m(e) {
        let { platform: a } = e;
        switch (a) {
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
      function p(e) {
        let { platforms: a } = e;
        return (0, t.jsxs)("div", {
          className: o()(d.row, d.gapSm),
          style: { alignItems: "center" },
          children: [
            (0, t.jsx)(c.xv, { variant: "text-sm/normal", children: " \xb7 " }),
            a.map((e) => (0, t.jsx)(m, { platform: e }, e)),
          ],
        });
      }
      function g(e) {
        let { detectedGame: a, className: n } = e,
          r = i.useMemo(() => {
            let e = new Set(a.platforms),
              n = [...e];
            return (
              !e.has(l.z.DESKTOP) &&
                (e.has(l.z.MACOS) || e.has(l.z.LINUX)) &&
                n.push(l.z.DESKTOP),
              n.filter((e) => u.includes(e))
            );
          }, [a.platforms]);
        return 0 === r.length
          ? null
          : (0, t.jsx)("div", {
              className: o()(d.column, d.gapLg, n),
              children: r.length > 0 && (0, t.jsx)(p, { platforms: r }),
            });
      }
    },
    131033: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var t = n(735250);
      n(470079);
      var i = n(793030),
        r = n(689938),
        o = n(51527);
      function l(e) {
        let { detectedGame: a } = e;
        return 0 === a.publishers.length
          ? null
          : (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(i.X6, {
                  className: o.sectionHeader,
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: r.Z.Messages.GAME_PROFILE_PUBLISHER,
                }),
                (0, t.jsx)(i.xv, {
                  variant: "text-sm/normal",
                  children: a.publishers.join(", "),
                }),
              ],
            });
      }
    },
    296768: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(392711),
        s = n.n(l),
        c = n(442837),
        d = n(481060),
        u = n(224706),
        m = n(812206),
        p = n(669764),
        g = n(810568),
        _ = n(839392),
        f = n(774073),
        x = n(644941),
        h = n(689938),
        v = n(51527),
        I = n(796805);
      let E = (e) => {
        let { game: a, onClose: n, trackClick: i } = e,
          r = (0, c.e7)([m.Z], () => m.Z.getApplication(a.applicationId));
        return (0, t.jsx)(d.Tooltip, {
          text: a.name,
          children: (e) => {
            var o;
            return (0, t.jsx)(d.Clickable, {
              ...e,
              className: I.similarGameImageClickable,
              onClick: async () => {
                i(g.as.ClickSimilarGame, a.applicationId),
                  (0, d.openModalLazy)(() =>
                    Promise.resolve((e) =>
                      (0, t.jsx)(x.default, {
                        applicationId: a.applicationId,
                        source: g.m1.SimilarGames,
                        ...e,
                      }),
                    ),
                  ),
                  await new Promise((e) => setTimeout(e, 10)),
                  n();
              },
              children: (0, t.jsx)("img", {
                src: a.coverImageUrl,
                className: I.similarGameImage,
                alt: h.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                  game:
                    null !== (o = null == r ? void 0 : r.name) && void 0 !== o
                      ? o
                      : null == a
                        ? void 0
                        : a.name,
                }),
              }),
            });
          },
        });
      };
      function A(e) {
        let {
            applicationId: a,
            onClose: n,
            trackAction: r,
            similarGames: l,
            similarGamesError: m,
          } = e,
          g = (0, c.e7)([_.Z, p.Z], () => {
            let e = void 0 === _.Z.getSimilarGames(a),
              n = l.some((e) => p.Z.isFetching(e));
            return e || n;
          }),
          x = (0, c.Wu)([p.Z], () =>
            l
              .map((e) => p.Z.getGame(e))
              .filter((e) => null != e)
              .filter((e) => null != e.coverImageUrl)
              .filter(f.W1)
              .slice(0, 5),
          );
        return (i.useEffect(() => {
          l.length > 0 && u.Z.getDetectableGamesSupplemental([a, ...l]);
        }, [a, l]),
        g && null == m)
          ? (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)("div", {
                  className: o()(I.loadingHeading, v.sectionHeader),
                }),
                (0, t.jsx)("div", {
                  className: o()(v.row, v.gapLg),
                  children: s()
                    .range(0, 5)
                    .map((e) =>
                      (0, t.jsx)("div", { className: I.loadingArtwork }, e),
                    ),
                }),
              ],
            })
          : g || 0 !== x.length
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(d.Heading, {
                    className: v.sectionHeader,
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: h.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                  }),
                  (0, t.jsx)("div", {
                    className: o()(v.row, v.gapLg),
                    style: {},
                    children: x.map((e) =>
                      (0, t.jsx)(
                        E,
                        { game: e, onClose: n, trackClick: r },
                        e.applicationId,
                      ),
                    ),
                  }),
                ],
              })
            : null;
      }
    },
    978313: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var t = n(735250),
        i = n(470079),
        r = n(120356),
        o = n.n(r),
        l = n(657707),
        s = n(793030),
        c = n(692547),
        d = n(481060),
        u = n(962250),
        m = n(810568),
        p = n(221370),
        g = n(689938),
        _ = n(51527),
        f = n(110367);
      function x(e) {
        let { detectedGame: a, trackAction: n } = e,
          [r, x] = i.useState(
            (null == a ? void 0 : a.summaryLocalized) != null,
          ),
          [h, v] = i.useState(!0),
          [I, E] = i.useState(!1),
          A = i.useRef(null),
          { width: b, height: C } = (0, u.b)();
        return (i.useEffect(() => {
          let e = A.current;
          null != e && E(e.scrollHeight - e.clientHeight > 1);
        }, [A, b, C]),
        null == a.summary)
          ? null
          : (0, t.jsxs)("div", {
              className: o()(_.column, _.gapSm),
              children: [
                null != a.summaryLocalized &&
                  (0, t.jsxs)("div", {
                    className: o()(_.row, _.gapSm),
                    children: [
                      (0, t.jsx)(l.SxY, {
                        color: c.Z.colors.HEADER_SECONDARY,
                        size: "xs",
                      }),
                      (0, t.jsx)(s.xv, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        children: r
                          ? g.Z.Messages.MACHINE_TRANSLATED_TRANSLATED.format({
                              onShowOriginal: () => x(!1),
                            })
                          : g.Z.Messages.MACHINE_TRANSLATED_ORIGINAL.format({
                              onShowTranslated: () => x(!0),
                            }),
                      }),
                    ],
                  }),
                (0, t.jsx)(s.xv, {
                  ref: A,
                  lineClamp: h ? 8 : void 0,
                  variant: "text-sm/normal",
                  children: r ? a.summaryLocalized : a.summary,
                }),
                (I || !h) &&
                  (0, t.jsx)(d.Clickable, {
                    className: _.clickable,
                    onClick: () => {
                      n(h ? m.as.ShowMore : m.as.ShowLess), v(!h);
                    },
                    children: (0, t.jsx)(s.xv, {
                      variant: "text-sm/semibold",
                      children: h
                        ? g.Z.Messages.EXPANDABLE_TEXT_SHOW_MORE
                        : g.Z.Messages.EXPANDABLE_TEXT_SHOW_LESS,
                    }),
                  }),
                (0, t.jsx)(p.Z, { className: f.platforms, detectedGame: a }),
              ],
            });
      }
    },
    962250: function (e, a, n) {
      n.d(a, {
        b: function () {
          return i;
        },
      }),
        n(47120);
      var t = n(470079);
      function i() {
        var e, a;
        let [n, i] = t.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080,
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
          n
        );
      }
    },
    643872: function (e, a, n) {
      var t, i;
      n.d(a, {
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
    968333: function (e, a, n) {
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    793834: function (e, a, n) {
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    290500: function (e, a, n) {
      e.exports = {
        listeningTimeline: "listeningTimeline_a218d8",
        seekBarContainer: "seekBarContainer_a218d8",
        seekBarFill: "seekBarFill_a218d8",
        timestamp: "timestamp_a218d8",
      };
    },
    765388: function (e, a, n) {
      e.exports = {
        coachtip: "coachtip_e8254e",
        coachtipContent: "coachtipContent_e8254e",
        coachtipInner: "coachtipInner_e8254e",
        coachtipAsset: "coachtipAsset_e8254e",
        coachtipTextContainer: "coachtipTextContainer_e8254e",
      };
    },
    738127: function (e, a, n) {
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
    301698: function (e, a, n) {
      e.exports = { menuIcon: "menuIcon_aa0ae7" };
    },
    704108: function (e, a, n) {
      e.exports = { loadingSpinner: "loadingSpinner_f2635d" };
    },
    501345: function (e, a, n) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        avatar: "avatar_f1257c",
        playerInfo: "playerInfo_f1257c",
      };
    },
    51527: function (e, a, n) {
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
      };
    },
    825718: function (e, a, n) {
      e.exports = {
        linkIcon: "linkIcon_bb1ae6",
        linkAnchor: "linkAnchor_bb1ae6",
      };
    },
    133512: function (e, a, n) {
      e.exports = {
        gameProfileMediaSmall:
          "gameProfileMediaSmall_f5a23b gameProfileMedia_f5a23b",
        imageScroller: "imageScroller_f5a23b",
        gameArtwork: "gameArtwork_f5a23b",
        gameProfileMediaLarge:
          "gameProfileMediaLarge_f5a23b gameProfileMedia_f5a23b",
        imageClickable: "imageClickable_f5a23b",
        gameArtworkFocusRing: "gameArtworkFocusRing_f5a23b",
        mediaOverlay: "mediaOverlay_f5a23b",
        gradientLeft: "gradientLeft_f5a23b gradient_f5a23b",
        gradientRight: "gradientRight_f5a23b gradient_f5a23b",
        arrowClickable: "arrowClickable_f5a23b",
        arrow: "arrow_f5a23b",
        mediaModal: "mediaModal_f5a23b",
      };
    },
    268236: function (e, a, n) {
      e.exports = {
        friends: "friends_d8cab0",
        emptyState: "emptyState_d8cab0",
        fadedEntries: "fadedEntries_d8cab0",
        expandEntriesButton: "expandEntriesButton_d8cab0",
      };
    },
    479537: function (e, a, n) {
      e.exports = {
        inviteInfo: "inviteInfo_c2c033",
        guildIcon: "guildIcon_c2c033",
      };
    },
    796805: function (e, a, n) {
      e.exports = {
        similarGameImageClickable:
          "similarGameImageClickable_bd82e2 similarGameImageWrapper_bd82e2",
        similarGameImage: "similarGameImage_bd82e2",
        loadingArtwork:
          "loadingArtwork_bd82e2 similarGameImage_bd82e2 similarGameImageWrapper_bd82e2",
        loadingHeading: "loadingHeading_bd82e2",
      };
    },
    110367: function (e, a, n) {
      e.exports = { platforms: "platforms_a8723c" };
    },
    445524: function (e, a, n) {
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    835777: function (e, a, n) {
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
    264699: function (e, a, n) {
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
//# sourceMappingURL=2afe330bf4d2ed643cfe.js.map
