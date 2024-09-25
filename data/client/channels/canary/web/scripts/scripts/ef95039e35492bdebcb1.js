"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49449"],
  {
    560361: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return o;
        },
      });
      var t = n(470079);
      function o(e) {
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
        o = n(570140),
        i = n(881052),
        r = n(981631);
      let l = async (e) => {
        try {
          var a;
          let n = await t.tn.get({ url: r.ANM.SIMILAR_GAMES(e) }),
            i = (
              null !== (a = n.body.similar_games) && void 0 !== a ? a : []
            ).filter((a) => a !== e);
          o.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: i,
          });
        } catch (e) {
          throw new i.Hx(e);
        }
      };
    },
    839392: function (e, a, n) {
      var t,
        o,
        i,
        r,
        l = n(442837),
        s = n(570140);
      let c = {};
      class d extends (r = l.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (i = "GameProfileStore"),
        (o = "displayName") in (t = d)
          ? Object.defineProperty(t, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[o] = i),
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
          return o;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(e) {
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
          return o;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_game_profile_feedback_flow",
        label: "Game Profile Feedback Flow",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(e) {
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
          return _;
        },
      }),
        n(47120);
      var t = n(470079),
        o = n(392711),
        i = n.n(o),
        r = n(876215),
        l = n(442837),
        s = n(146282),
        c = n(897674),
        d = n(709054),
        u = n(206583);
      let m = new Set([r.s.PLAYED_GAME]),
        p = (e) => m.has(e.content_type);
      function _() {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
          a = (0, c.Z)(u.YN.GLOBAL_FEED),
          n = t.useMemo(
            () =>
              i()(a)
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
          return r;
        },
        L: function () {
          return i;
        },
      });
      var t = n(433517);
      let o = "GameFollowSurveyModal";
      function i() {
        var e;
        return (
          (null === (e = t.K.get(o)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function r() {
        return t.K.set(o, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, a, n) {
      var t = n(735250),
        o = n(470079),
        i = n(120356),
        r = n.n(i),
        l = n(442837),
        s = n(481060),
        c = n(178762),
        d = n(91140),
        u = n(297781),
        m = n(592125),
        p = n(944486),
        _ = n(594174),
        g = n(5192),
        h = n(810568),
        f = n(689938),
        x = n(501345),
        I = n(51527);
      a.Z = (e) => {
        let { entry: a, viewId: n, officialGuildId: i, onClose: v } = e,
          E = (0, l.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getChannelId())),
          A = (0, l.e7)([_.default], () => _.default.getUser(a.author_id)),
          { nick: M, avatar: P } = o.useMemo(() => {
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
                let { closePopout: o, updatePosition: r } = e;
                return (0, t.jsx)(c.J, {
                  entry: a,
                  closePopout: o,
                  updatePopoutPosition: r,
                  onReaction: () => {
                    (0, h.UE)({
                      action: h.as.SendMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                      officialGuildId: i,
                    }),
                      v(),
                      o();
                  },
                  onUserPopoutClosed: () => o(),
                  disableGameProfileLinks: !0,
                });
              },
              positionKey: "game-profile-entry-".concat(a.id),
              onRequestOpen: () => {
                (0, h.UE)({
                  action: h.as.ClickMessageUser,
                  applicationId: a.extra.application_id,
                  gameName: a.extra.game_name,
                  recipientUserId: a.author_id,
                  viewId: n,
                  officialGuildId: i,
                });
              },
              children: (e) =>
                (0, t.jsx)(s.Clickable, {
                  ...e,
                  className: x.profileEntryCard,
                  children: (0, t.jsx)(s.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: x.avatar,
                          src: P,
                          alt: f.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: M },
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: r()(x.playerInfo),
                          children: (0, t.jsxs)("div", {
                            className: r()(I.column, I.gapXs),
                            children: [
                              (0, t.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: M,
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
                          className: x.reactions,
                          children: (0, t.jsx)(s.ArrowAngleLeftUpIcon, {}),
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
        o = n(470079),
        i = n(120356),
        r = n.n(i),
        l = n(643872),
        s = n(481060),
        c = n(570140),
        d = n(652898),
        u = n(93093),
        m = n(768581),
        p = n(810568),
        _ = n(981631),
        g = n(689938),
        h = n(51527);
      let f = [l.p.OFFICIAL, l.p.TWITTER, l.p.YOUTUBE],
        x = (e) => {
          let { invite: a, trackClick: n } = e,
            { approximate_member_count: o, guild: i } = a;
          if (null == i) return null;
          let l = u.Z.isMember(i.id);
          if (
            !(null == i ? void 0 : i.features.includes("VERIFIED")) &&
            !(null == i ? void 0 : i.features.includes("PARTNER"))
          )
            return null;
          let d = m.ZP.getGuildIconURL({ id: i.id, icon: i.icon, size: 32 });
          return (0, t.jsxs)("div", {
            className: r()(h.column),
            children: [
              (0, t.jsx)(s.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: g.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, t.jsxs)("div", {
                className: r()(h.row, h.gapMd),
                children: [
                  (0, t.jsx)("img", {
                    className: h.icon,
                    src: d,
                    alt: g.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: i.name,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: r()(h.gapNone),
                    children: [
                      (0, t.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: i.name,
                      }),
                      null != o &&
                        (0, t.jsx)(s.Text, {
                          variant: "text-xxs/normal",
                          children:
                            g.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                              { count: o },
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(s.Button, {
                color: s.ButtonColors.PRIMARY,
                onClick: () => {
                  n(p.as.JoinOfficialServer),
                    c.Z.dispatch({
                      type: "INVITE_MODAL_OPEN",
                      invite: a,
                      code: a.code,
                      context: _.IlC.APP,
                    });
                },
                children: l
                  ? g.Z.Messages.JOINED_GUILD
                  : g.Z.Messages.JOIN_GUILD,
              }),
            ],
          });
        };
      a.Z = (e) => {
        let { websites: a, trackClick: n, onInviteResolved: i } = e,
          c =
            null == a
              ? void 0
              : a.find((e) => {
                  let { category: a } = e;
                  return a === l.p.DISCORD;
                }),
          [u, m] = o.useState();
        if (
          (o.useEffect(() => {
            let e = async (e) => {
              let a = e.split("/").pop();
              if (null != a) {
                let e = await (0, d.Z)(a);
                !0 !== e.banned &&
                  (m(e.invite), null != e.invite && (null == i || i(e.invite)));
              }
            };
            null != c && e(c.url);
          }, [c, i]),
          null == a || 0 === a.length)
        )
          return null;
        let _ = a
          .filter((e) => {
            let { category: a } = e;
            return f.includes(a);
          })
          .sort((e, a) => e.category - a.category);
        return (0, t.jsxs)("div", {
          className: r()(h.column),
          children: [
            null != u && (0, t.jsx)(x, { invite: u, trackClick: n }),
            (0, t.jsxs)("div", {
              className: r()(h.column, h.gapSm),
              children: [
                (0, t.jsx)(s.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: g.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, t.jsx)("div", {
                  className: h.row,
                  children: _.map((e) => {
                    let a,
                      o,
                      { category: i, url: r } = e,
                      c = null;
                    switch (i) {
                      case l.p.OFFICIAL:
                        (c = (0, t.jsx)(s.GlobeEarthIcon, {
                          colorClass: h.linkIcon,
                        })),
                          (o = p.as.WebsiteLink),
                          (a = g.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case l.p.TWITTER:
                        (c = (0, t.jsx)(s.XNeutralIcon, {
                          colorClass: h.linkIcon,
                        })),
                          (o = p.as.XLink),
                          (a = g.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case l.p.YOUTUBE:
                        (o = p.as.YouTubeLink),
                          (c = (0, t.jsx)(s.YoutubeNeutralIcon, {
                            colorClass: h.linkIcon,
                          })),
                          (a = g.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != c
                      ? (0, t.jsx)(
                          s.Anchor,
                          {
                            className: h.linkAnchor,
                            title: a,
                            href: r,
                            onClick: () => {
                              n(o);
                            },
                            target: "_blank",
                            children: c,
                          },
                          r,
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
        o = n(470079),
        i = n(120356),
        r = n.n(i),
        l = n(392711),
        s = n(913527),
        c = n.n(s),
        d = n(758713),
        u = n(705512),
        m = n(442837),
        p = n(433517),
        _ = n(481060),
        g = n(224706),
        h = n(560361),
        f = n(812206),
        x = n(168551),
        I = n(485267),
        v = n(26033),
        E = n(561308),
        A = n(669764),
        M = n(962250),
        P = n(706454),
        T = n(768581),
        j = n(814225),
        C = n(709054),
        N = n(810568),
        S = n(998058),
        b = n(839392),
        O = n(96856),
        y = n(567409),
        w = n(774073),
        L = n(124030),
        G = n(383895),
        R = n(183391),
        k = n(715318),
        F = n(206583),
        Z = n(689938),
        H = n(51527);
      let B = "GameProfileModal",
        D = (e) => {
          let { game: a, onClose: n, trackClick: o } = e,
            i = (0, m.e7)([f.Z], () => {
              var e;
              return f.Z.getApplication(
                null !== (e = null == a ? void 0 : a.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == a) return null;
          let r = a.coverImageUrl;
          return (0, t.jsx)(_.Tooltip, {
            text: a.name,
            children: (e) => {
              var l;
              return (0, t.jsx)(_.Clickable, {
                ...e,
                className: H.clickable,
                onClick: async () => {
                  o(N.as.ClickSimilarGame, a.applicationId),
                    (0, _.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, t.jsx)(Y, {
                          applicationId: a.applicationId,
                          source: N.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
                },
                children: (0, t.jsx)("img", {
                  src: r,
                  className: H.similarGames,
                  alt: Z.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (l = null == i ? void 0 : i.name) && void 0 !== l
                        ? l
                        : null == a
                          ? void 0
                          : a.name,
                  }),
                }),
              });
            },
          });
        },
        W = () =>
          (0, t.jsxs)("div", {
            className: H.gameBadge,
            children: [
              (0, t.jsx)(_.FireIcon, { size: "xxs" }),
              (0, t.jsx)(_.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        U = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
        z = (e) => {
          let { platforms: a } = e,
            n = [...new Set(a)];
          !n.includes(d.z.DESKTOP) &&
            (n.includes(d.z.MACOS) || n.includes(d.z.LINUX)) &&
            n.push(d.z.DESKTOP);
          let o = (n = n.filter((e) => U.includes(e))).map((e) => {
            switch (e) {
              case d.z.DESKTOP:
                return (0, t.jsx)(_.ScreenIcon, { size: "xs" }, e);
              case d.z.XBOX:
                return (0, t.jsx)(_.XboxNeutralIcon, { size: "xs" }, e);
              case d.z.PLAYSTATION:
                return (0, t.jsx)(_.PlaystationNeutralIcon, { size: "xs" }, e);
              case d.z.NINTENDO:
                return (0, t.jsx)(
                  _.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, t.jsxs)("div", {
            className: r()(H.row, H.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, t.jsx)(_.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              o,
            ],
          });
        },
        K = (e) => e.filter(w.z6).slice(0, 5),
        Y = (e) => {
          var a, i;
          let {
              applicationId: s,
              source: d,
              sourceUserId: U,
              transitionState: Y,
              onClose: X,
            } = e,
            { clientThemesClassName: V } = (0, x.ZP)(),
            { width: J, height: q } = (0, M.b)(),
            [$, Q] = o.useState(() => {
              var e;
              return null === (e = p.K.get(B)) || void 0 === e ? void 0 : e[s];
            }),
            ee = (0, m.e7)([P.default], () => P.default.locale),
            [ea, en] = o.useState(null),
            [et, eo] = o.useState(!0),
            [ei, er] = o.useState(!1),
            el = o.useRef(null),
            es = o.useMemo(() => (0, N.fP)(), []);
          o.useEffect(() => {
            let e = el.current;
            null != e && er(e.scrollHeight - e.clientHeight > 1);
          }, [el, J, q]),
            o.useEffect(() => {
              (0, I.Jn)();
            }, []);
          let ec = (0, m.Wu)([b.Z], () => {
              var e;
              return (
                null !== (e = b.Z.getSimilarGames(s)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            ed = (0, m.Wu)([A.Z], () =>
              ec
                .map((e) => A.Z.getGame(e))
                .filter(w.W1)
                .slice(0, 5),
            ),
            eu = o.useRef([]);
          o.useEffect(() => {
            eu.current = ec;
          }, [ec]),
            o.useEffect(() => {
              (async () => {
                if (0 === ec.length) {
                  en(null);
                  try {
                    await (0, S.i)(s);
                  } catch (e) {
                    en(e);
                  }
                }
              })(),
                g.Z.getDetectableGamesSupplemental([s, ...ec]);
            }, [s, ec]);
          let em = (0, m.e7)([b.Z, A.Z], () => {
              let e = void 0 === b.Z.getSimilarGames(s),
                a = ec.some((e) => A.Z.isFetching(e));
              return e || a;
            }),
            { entries: ep } = (0, y.Z)(),
            e_ = o.useMemo(() => {
              var e;
              return null !==
                (e =
                  null == ep
                    ? void 0
                    : ep.filter(
                        (e) => (0, v.dX)(e) && e.extra.application_id === s,
                      )) && void 0 !== e
                ? e
                : [];
            }, [ep, s]),
            eg = e_.length > 7,
            [eh, ef] = o.useState(!1),
            [ex, eI] = o.useState(null);
          o.useEffect(() => {
            var e, a;
            (0, N.IS)({
              source: d,
              viewId: es,
              applicationId: s,
              gameName:
                null !==
                  (a =
                    null !== (e = null == eE ? void 0 : eE.name) && void 0 !== e
                      ? e
                      : null == ev
                        ? void 0
                        : ev.name) && void 0 !== a
                  ? a
                  : "",
              authorId: U,
            });
          }, []),
            (0, h.Z)(() => {
              var e, a, n;
              let t = Date.now(),
                o = e_.map((e) => {
                  let a = (0, E.kr)(e) ? (0, E.T_)(e, t) : (0, E.GL)(e, ee);
                  return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: a,
                  });
                });
              (0, N.wz)({
                viewId: es,
                applicationId: s,
                gameName:
                  null !==
                    (n =
                      null !== (a = null == eE ? void 0 : eE.name) &&
                      void 0 !== a
                        ? a
                        : null == ev
                          ? void 0
                          : ev.name) && void 0 !== n
                    ? n
                    : "",
                playedFriendIds: e_.map((e) => e.author_id),
                playedFriendsData: o,
                similarGames: K(eu.current),
                officialGuildId:
                  null == ex
                    ? void 0
                    : null === (e = ex.guild) || void 0 === e
                      ? void 0
                      : e.id,
              });
            });
          let ev = f.Z.getApplication(s),
            eE = (0, m.e7)([A.Z], () => A.Z.getGame(s)),
            eA = o.useMemo(
              () => (null == eE ? void 0 : eE.genres.map(j.P3).join(", ")),
              [eE],
            ),
            eM = o.useMemo(() => {
              if (null == eE) return "";
              let { artwork: e, screenshots: a } = eE;
              if (e.length > 0) {
                let a = Math.floor(Math.random() * (e.length - 1));
                return e[a];
              }
              if (a.length > 0) {
                let e = Math.floor(Math.random() * (a.length - 1));
                return a[e];
              }
              return "";
            }, [eE]),
            eP = o.useMemo(() => {
              var e, a;
              let n = (
                null !== (e = null == eE ? void 0 : eE.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (a = null == eE ? void 0 : eE.screenshots) &&
                void 0 !== a
                  ? a
                  : []
                ).map((e) => ({ src: e })),
                ...n,
              ];
            }, [
              null == eE ? void 0 : eE.artwork,
              null == eE ? void 0 : eE.screenshots,
            ]),
            eT = (e, a) => {
              var n;
              (0, N.UE)({
                gameName: null != eC ? eC : "",
                applicationId: s,
                action: e,
                similarGameId: a,
                viewId: es,
                officialGuildId:
                  null == ex
                    ? void 0
                    : null === (n = ex.guild) || void 0 === n
                      ? void 0
                      : n.id,
              });
            },
            ej = (0, O.p)("GameProfileModal");
          if (null == eE) return null;
          let eC =
              null !== (a = eE.name) && void 0 !== a
                ? a
                : null == ev
                  ? void 0
                  : ev.name,
            eN =
              null == ev ? void 0 : ev.getIconURL(160, T.$k ? "webp" : "png"),
            eS = null !== (i = eE.coverImageUrl) && void 0 !== i ? i : eN,
            { summary: eb, websites: eO, publishers: ey, platforms: ew } = eE,
            eL = C.default.extractTimestamp(s),
            eG = c()().diff(c()(eL), "days") <= F.G,
            eR = e_.some((e) => (0, E.ig)(e) === u.o.GLOBAL);
          return (0, t.jsx)(_.ModalRoot, {
            transitionState: Y,
            size: _.ModalSize.DYNAMIC,
            className: r()(V, H.gameProfileModal),
            children: (0, t.jsxs)(_.ScrollerNone, {
              className: H.scrollable,
              children: [
                (0, t.jsx)("div", {
                  className: r()(H.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eM, '")') },
                }),
                (0, t.jsxs)("div", {
                  className: r()(H.content, H.column, H.headerInfo),
                  children: [
                    (0, t.jsxs)("div", {
                      className: H.coverArtRow,
                      children: [
                        (0, t.jsx)("div", {
                          className: H.logoWrapper,
                          children:
                            null != eS &&
                            (0, t.jsx)("img", {
                              className: H.logo,
                              src: eS,
                              alt: Z.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format(
                                { game: eC },
                              ),
                            }),
                        }),
                        (0, t.jsx)(k.Z, {
                          applicationId: s,
                          className: H.overflowMenu,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: r()(H.row, H.gapSm, H.gameDetails),
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)(_.Heading, {
                              variant: "heading-xl/bold",
                              children: eC,
                            }),
                            (0, t.jsxs)("div", {
                              className: r()(H.row, H.gapSm),
                              children: [
                                null != eN &&
                                  (0, t.jsx)("img", {
                                    src: eN,
                                    height: 16,
                                    alt: Z.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eC },
                                    ),
                                  }),
                                (0, t.jsx)(_.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eA,
                                }),
                                eG &&
                                  (0, t.jsx)(_.Text, {
                                    variant: "eyebrow",
                                    className: H.newBadge,
                                    children: Z.Z.Messages.NEW,
                                  }),
                                eR &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(_.Text, {
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
                            ej &&
                            (0, t.jsx)(_.Tooltip, {
                              text: $
                                ? Z.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : Z.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, t.jsxs)(_.Button, {
                                  ...e,
                                  innerClassName: H.followButton,
                                  color: $
                                    ? _.Button.Colors.PRIMARY
                                    : _.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let a =
                                      null !== (e = p.K.get(B)) && void 0 !== e
                                        ? e
                                        : {};
                                    (a[s] = !a[s]),
                                      p.K.set(B, a),
                                      eT(
                                        a[s]
                                          ? N.as.FollowGame
                                          : N.as.UnfollowGame,
                                      ),
                                      a[s] &&
                                        (0, L.L)() &&
                                        (0, _.openModalLazy)(async () => {
                                          let { default: e } = await n
                                            .e("86564")
                                            .then(n.bind(n, 641758));
                                          return (a) =>
                                            (0, t.jsx)(e, {
                                              ...a,
                                              applicationId: s,
                                              background: eM,
                                              viewId: es,
                                            });
                                        }),
                                      Q(a[s]);
                                  },
                                  children: [
                                    $
                                      ? (0, t.jsx)(_.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, t.jsx)(_.BellIcon, {
                                          color: "white",
                                        }),
                                    $
                                      ? Z.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                      : Z.Z.Messages.FOLLOW,
                                  ],
                                }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(_.HeadingLevel, {
                  children: (0, t.jsxs)("div", {
                    className: r()(H.content, H.mainContent),
                    children: [
                      (0, t.jsxs)("div", {
                        className: H.column,
                        children: [
                          (0, t.jsx)(_.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              Z.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, t.jsxs)("div", {
                            className: r()(H.section, {
                              [H.fadedEntries]: eg && !eh,
                            }),
                            children: [
                              0 === e_.length &&
                                (0, t.jsx)(_.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: H.emptyFriendsWhoPlay,
                                  children:
                                    Z.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, t.jsx)("div", {
                                className: r()(H.column, H.gapNone),
                                children:
                                  null == e_
                                    ? void 0
                                    : e_
                                        .slice(0, eg && !eh ? 6 : void 0)
                                        .map((e) => {
                                          var a;
                                          return (0, t.jsx)(
                                            G.Z,
                                            {
                                              entry: e,
                                              viewId: es,
                                              onClose: X,
                                              officialGuildId:
                                                null == ex
                                                  ? void 0
                                                  : null === (a = ex.guild) ||
                                                      void 0 === a
                                                    ? void 0
                                                    : a.id,
                                            },
                                            e.id,
                                          );
                                        }),
                              }),
                            ],
                          }),
                          eg &&
                            !eh &&
                            (0, t.jsxs)(_.Clickable, {
                              className: H.expandEntriesButton,
                              onClick: () => ef(!0),
                              children: [
                                (0, t.jsx)(_.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    Z.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, t.jsx)(_.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          eP.length > 0 &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(_.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    Z.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, t.jsx)(_.Scroller, {
                                  className: r()(H.row, H.imageScroller),
                                  orientation: "horizontal",
                                  children: eP.map((e, a) =>
                                    (0, t.jsx)(
                                      _.Clickable,
                                      {
                                        className: H.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: H.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eT(N.as.ClickImage),
                                            (0, _.openModalLazy)(async () => {
                                              let { default: e } = await n
                                                .e("99857")
                                                .then(n.bind(n, 895023));
                                              return (n) => {
                                                let { ...o } = n;
                                                return (0, t.jsx)(e, {
                                                  className: H.mediaModal,
                                                  ...o,
                                                  items: eP,
                                                  startingIndex: a,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, t.jsx)("img", {
                                          src: e.src,
                                          className: H.gameArtwork,
                                          alt: Z.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eC },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, t.jsx)(_.Spacer, { size: 8 }),
                              ],
                            }),
                          em &&
                            null == ea &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("div", {
                                  className: H.loadingHeadingSimilarGames,
                                }),
                                (0, t.jsx)("div", {
                                  className: H.row,
                                  children: (0, l.range)(0, 5).map((e) =>
                                    (0, t.jsx)(
                                      "div",
                                      {
                                        className: H.loadingSimilarGamesArtwork,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          !em &&
                            ed.length > 0 &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(_.Heading, {
                                  variant: "text-md/semibold",
                                  color: "header-primary",
                                  children:
                                    Z.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, t.jsx)("div", {
                                  className: H.row,
                                  style: {},
                                  children: ed.map((e) =>
                                    (0, t.jsx)(
                                      D,
                                      { game: e, onClose: X, trackClick: eT },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: r()(H.sidebar, H.column),
                        children: [
                          (0, t.jsx)(_.Heading, {
                            variant: "heading-md/bold",
                            children: Z.Z.Messages.ABOUT,
                          }),
                          (0, t.jsxs)("div", {
                            className: H.sidebarSections,
                            children: [
                              null != eb &&
                                (0, t.jsxs)("div", {
                                  className: r()(H.column, H.gapSm),
                                  children: [
                                    (0, t.jsx)(_.Text, {
                                      ref: el,
                                      lineClamp: et ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eb,
                                    }),
                                    (ei || !et) &&
                                      (0, t.jsx)(_.Clickable, {
                                        className: H.clickable,
                                        onClick: () => {
                                          eT(
                                            et ? N.as.ShowMore : N.as.ShowLess,
                                          ),
                                            eo(!et);
                                        },
                                        children: (0, t.jsx)(_.Text, {
                                          variant: "text-sm/semibold",
                                          children: et
                                            ? Z.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : Z.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, t.jsx)(R.Z, {
                                websites: eO,
                                trackClick: eT,
                                onInviteResolved: eI,
                              }),
                              (ey.length > 0 || ew.length > 0) &&
                                (0, t.jsx)("div", {
                                  className: r()(H.column),
                                  children:
                                    ey.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: r()(H.column, H.gapSm),
                                      children: [
                                        (0, t.jsx)(_.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            Z.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: r()(H.row, H.gapMd),
                                          children: [
                                            (0, t.jsx)(_.Text, {
                                              variant: "text-sm/normal",
                                              children: ey.join(", "),
                                            }),
                                            ew.length > 0 &&
                                              (0, t.jsx)(z, { platforms: ew }),
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
    715318: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var t = n(735250);
      n(470079);
      var o = n(481060),
        i = n(239091),
        r = n(299206),
        l = n(326103),
        s = n(689938);
      function c(e) {
        let { applicationId: a, className: c } = e,
          d = (0, l.v)("GameProfileOverflowMenu"),
          u = (0, r.Z)({ id: a, label: s.Z.Messages.COPY_ID_APPLICATION }),
          m = d
            ? (0, t.jsx)(o.MenuItem, {
                id: "game-profile-something-wrong",
                label: s.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                action: () =>
                  (0, o.openModalLazy)(async () => {
                    let { GameProfileFeedbackModal: e } = await n
                      .e("1011")
                      .then(n.bind(n, 943350));
                    return (n) => (0, t.jsx)(e, { applicationId: a, ...n });
                  }),
              })
            : null;
        return null == u && null == m
          ? null
          : (0, t.jsx)(o.Popout, {
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                let { closePopout: a } = e;
                return (0, t.jsx)(o.Menu, {
                  navId: "game-profile-context",
                  onClose: () => {
                    (0, i.Zy)(), a();
                  },
                  "aria-label": s.Z.Messages.GAME_PROFILE_VIEW_MORE,
                  onSelect: () => {},
                  children: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(o.MenuGroup, { children: u }),
                      (0, t.jsx)(o.MenuGroup, { children: m }),
                    ],
                  }),
                });
              },
              children: (e) =>
                (0, t.jsx)(o.Tooltip, {
                  text: s.Z.Messages.MORE,
                  children: (a) =>
                    (0, t.jsx)(o.Clickable, {
                      className: c,
                      ...a,
                      ...e,
                      children: (0, t.jsx)(o.MoreHorizontalIcon, {
                        size: "xs",
                      }),
                    }),
                }),
            });
      }
    },
    962250: function (e, a, n) {
      n.d(a, {
        b: function () {
          return o;
        },
      }),
        n(47120);
      var t = n(470079);
      function o() {
        var e, a;
        let [n, o] = t.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080,
        });
        return (
          t.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              o({ width: e, height: window.innerHeight });
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
      var t, o;
      n.d(a, {
        p: function () {
          return t;
        },
      }),
        ((o = t || (t = {}))[(o.OFFICIAL = 1)] = "OFFICIAL"),
        (o[(o.WIKIA = 2)] = "WIKIA"),
        (o[(o.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (o[(o.FACEBOOK = 4)] = "FACEBOOK"),
        (o[(o.TWITTER = 5)] = "TWITTER"),
        (o[(o.TWITCH = 6)] = "TWITCH"),
        (o[(o.INSTAGRAM = 8)] = "INSTAGRAM"),
        (o[(o.YOUTUBE = 9)] = "YOUTUBE"),
        (o[(o.IPHONE = 10)] = "IPHONE"),
        (o[(o.IPAD = 11)] = "IPAD"),
        (o[(o.ANDROID = 12)] = "ANDROID"),
        (o[(o.STEAM = 13)] = "STEAM"),
        (o[(o.REDDIT = 14)] = "REDDIT"),
        (o[(o.ITCH = 15)] = "ITCH"),
        (o[(o.EPICGAMES = 16)] = "EPICGAMES"),
        (o[(o.GOG = 17)] = "GOG"),
        (o[(o.DISCORD = 18)] = "DISCORD");
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
        coverArtRow: "coverArtRow_e881fc",
        overflowMenu: "overflowMenu_e881fc",
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
    445524: function (e, a, n) {
      e.exports = {
        root: "root_ed81cc",
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    304818: function (e, a, n) {
      e.exports = {
        popout: "popout_b245a4",
        leaderboardTitle: "leaderboardTitle_b245a4",
        header: "header_b245a4",
      };
    },
    288984: function (e, a, n) {
      e.exports = { menuIcon: "menuIcon_cdae90" };
    },
    835777: function (e, a, n) {
      e.exports = { gameTitle: "gameTitle_cf6db7" };
    },
    881894: function (e, a, n) {
      e.exports = {
        container: "container_cf8a7d",
        table: "table_cf8a7d",
        headerRow: "headerRow_cf8a7d",
        headerRank: "headerRank_cf8a7d",
        headerPlayer: "headerPlayer_cf8a7d",
        headerValue: "headerValue_cf8a7d",
        userRow: "userRow_cf8a7d",
        userRank: "userRank_cf8a7d",
        userPlayer: "userPlayer_cf8a7d",
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
//# sourceMappingURL=ef95039e35492bdebcb1.js.map
