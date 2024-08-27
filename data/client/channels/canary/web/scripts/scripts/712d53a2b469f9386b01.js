"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66193"],
  {
    998058: function (e, a, n) {
      n.d(a, {
        i: function () {
          return i;
        },
      });
      var s = n(544891),
        r = n(570140),
        t = n(881052),
        o = n(981631);
      let i = async (e) => {
        try {
          var a;
          let n = await s.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
            t = (
              null !== (a = n.body.similar_games) && void 0 !== a ? a : []
            ).filter((a) => a !== e);
          r.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: t,
          });
        } catch (e) {
          throw new t.Hx(e);
        }
      };
    },
    839392: function (e, a, n) {
      var s,
        r,
        t,
        o,
        i = n(442837),
        l = n(570140);
      let c = {};
      class _ extends (o = i.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (t = "GameProfileStore"),
        (r = "displayName") in (s = _)
          ? Object.defineProperty(s, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = t),
        (a.Z = new _(l.Z, {
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
      let s = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        let a =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: n } = s.useExperiment(
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
      var s = n(470079),
        r = n(392711),
        t = n.n(r),
        o = n(876215),
        i = n(442837),
        l = n(146282),
        c = n(897674),
        _ = n(709054),
        E = n(206583);
      let d = new Set([o.s.PLAYED_GAME]),
        u = (e) => d.has(e.content_type);
      function I() {
        let e = (0, c.Z)(E.YN.GAME_PROFILE_FEED),
          a = (0, c.Z)(E.YN.GLOBAL_FEED),
          n = s.useMemo(
            () =>
              t()(a)
                .unionBy(e, (e) => e.id)
                .filter(u)
                .orderBy((e) => _.default.extractTimestamp(e.id), "desc")
                .uniqWith(
                  (e, a) =>
                    e.author_id === a.author_id &&
                    e.extra.application_id === a.extra.application_id,
                )
                .value(),
            [e, a],
          );
        return {
          requestId: (0, i.e7)([l.Z], () =>
            l.Z.getFeedRequestId(E.YN.GAME_PROFILE_FEED),
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
          return t;
        },
      });
      var s = n(433517);
      let r = "GameFollowSurveyModal";
      function t() {
        var e;
        return (
          (null === (e = s.K.get(r)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function o() {
        return s.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, a, n) {
      var s = n(735250),
        r = n(470079),
        t = n(120356),
        o = n.n(t),
        i = n(442837),
        l = n(481060),
        c = n(178762),
        _ = n(91140),
        E = n(297781),
        d = n(592125),
        u = n(944486),
        I = n(594174),
        A = n(5192),
        m = n(810568),
        T = n(689938),
        N = n(255341),
        O = n(707443);
      a.Z = (e) => {
        let { entry: a, viewId: n, onClose: t } = e,
          R = (0, i.e7)([u.Z, d.Z], () => d.Z.getChannel(u.Z.getChannelId())),
          p = (0, i.e7)([I.default], () => I.default.getUser(a.author_id)),
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
          : (0, s.jsx)(l.Popout, {
              position: "right",
              renderPopout: (e) => {
                let { closePopout: r, updatePosition: o } = e;
                return (0, s.jsx)(c.J, {
                  entry: a,
                  closePopout: r,
                  updatePopoutPosition: o,
                  onReaction: () => {
                    (0, m.UE)({
                      action: m.as.SendMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                    }),
                      t(),
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
                (0, s.jsx)(l.Clickable, {
                  ...e,
                  className: N.profileEntryCard,
                  children: (0, s.jsx)(l.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("img", {
                          className: N.avatar,
                          src: P,
                          alt: T.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: g },
                          ),
                        }),
                        (0, s.jsx)("div", {
                          className: o()(N.playerInfo),
                          children: (0, s.jsxs)("div", {
                            className: o()(O.column, O.gapXs),
                            children: [
                              (0, s.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: g,
                              }),
                              (0, s.jsx)(E.Gk, {
                                location: E.Gt.GAME_PROFILE,
                                children: _.W.map((e, n) =>
                                  (0, s.jsx)(e, { entry: a }, n),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: N.reactions,
                          children: (0, s.jsx)(l.ArrowAngleLeftUpIcon, {}),
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
      var s = n(735250),
        r = n(470079),
        t = n(120356),
        o = n.n(t),
        i = n(643872),
        l = n(481060),
        c = n(570140),
        _ = n(652898),
        E = n(93093),
        d = n(768581),
        u = n(810568),
        I = n(981631),
        A = n(689938),
        m = n(707443);
      let T = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
        N = (e) => {
          let { invite: a, trackClick: n } = e,
            { approximate_member_count: r, guild: t } = a;
          if (null == t) return null;
          let i = E.Z.isMember(t.id);
          if (
            !(null == t ? void 0 : t.features.includes("VERIFIED")) &&
            !(null == t ? void 0 : t.features.includes("PARTNER"))
          )
            return null;
          let _ = d.ZP.getGuildIconURL({ id: t.id, icon: t.icon, size: 32 });
          return (0, s.jsxs)("div", {
            className: o()(m.column),
            children: [
              (0, s.jsx)(l.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, s.jsxs)("div", {
                className: o()(m.row, m.gapMd),
                children: [
                  (0, s.jsx)("img", {
                    className: m.icon,
                    src: _,
                    alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: t.name,
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: o()(m.gapNone),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: t.name,
                      }),
                      null != r &&
                        (0, s.jsx)(l.Text, {
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
              (0, s.jsx)(l.Button, {
                color: l.ButtonColors.PRIMARY,
                onClick: () => {
                  n(u.as.JoinOfficialServer),
                    c.Z.dispatch({
                      type: "INVITE_MODAL_OPEN",
                      invite: a,
                      code: a.code,
                      context: I.IlC.APP,
                    });
                },
                children: i
                  ? A.Z.Messages.JOINED_GUILD
                  : A.Z.Messages.JOIN_GUILD,
              }),
            ],
          });
        };
      a.Z = (e) => {
        let { websites: a, trackClick: n } = e,
          t =
            null == a
              ? void 0
              : a.find((e) => {
                  let { category: a } = e;
                  return a === i.p.DISCORD;
                }),
          [c, E] = r.useState();
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let a = e.split("/").pop();
              if (null != a) {
                let e = await (0, _.Z)(a);
                !0 !== e.banned && E(e.invite);
              }
            };
            null != t && e(t.url);
          }, [t]),
          null == a || 0 === a.length)
        )
          return null;
        let d = a
          .filter((e) => {
            let { category: a } = e;
            return T.includes(a);
          })
          .sort((e, a) => e.category - a.category);
        return (0, s.jsxs)("div", {
          className: o()(m.column),
          children: [
            null != c && (0, s.jsx)(N, { invite: c, trackClick: n }),
            (0, s.jsxs)("div", {
              className: o()(m.column, m.gapSm),
              children: [
                (0, s.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: A.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, s.jsx)("div", {
                  className: m.row,
                  children: d.map((e) => {
                    let a,
                      r,
                      { category: t, url: o } = e,
                      c = null;
                    switch (t) {
                      case i.p.OFFICIAL:
                        (c = (0, s.jsx)(l.GlobeEarthIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (r = u.as.WebsiteLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case i.p.TWITTER:
                        (c = (0, s.jsx)(l.XNeutralIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (r = u.as.XLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case i.p.YOUTUBE:
                        (r = u.as.YouTubeLink),
                          (c = (0, s.jsx)(l.YoutubeNeutralIcon, {
                            colorClass: m.linkIcon,
                          })),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != c
                      ? (0, s.jsx)(
                          l.Anchor,
                          {
                            className: m.linkAnchor,
                            title: a,
                            href: o,
                            onClick: () => {
                              n(r);
                            },
                            target: "_blank",
                            children: c,
                          },
                          o,
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
      var s = n(735250),
        r = n(470079),
        t = n(120356),
        o = n.n(t),
        i = n(512722),
        l = n.n(i),
        c = n(392711),
        _ = n(913527),
        E = n.n(_),
        d = n(758713),
        u = n(705512),
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
        S = n(962250),
        L = n(706454),
        M = n(768581),
        C = n(814225),
        h = n(709054),
        G = n(810568),
        f = n(998058),
        x = n(839392),
        v = n(96856),
        Z = n(567409),
        j = n(774073),
        b = n(124030),
        D = n(383895),
        K = n(183391),
        F = n(206583),
        U = n(689938),
        B = n(707443);
      let y = "GameProfileModal",
        H = (e) => {
          let { game: a, onClose: n, trackClick: r } = e,
            t = (0, I.e7)([N.Z], () => {
              var e;
              return N.Z.getApplication(
                null !== (e = null == a ? void 0 : a.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == a) return null;
          let o = a.coverImageUrl;
          return (0, s.jsx)(m.Tooltip, {
            text: a.name,
            children: (e) => {
              var i;
              return (0, s.jsx)(m.Clickable, {
                ...e,
                className: B.clickable,
                onClick: async () => {
                  r(G.as.ClickSimilarGame, a.applicationId),
                    (0, m.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, s.jsx)(Y, {
                          applicationId: a.applicationId,
                          source: G.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
                },
                children: (0, s.jsx)("img", {
                  src: o,
                  className: B.similarGames,
                  alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (i = null == t ? void 0 : t.name) && void 0 !== i
                        ? i
                        : null == a
                          ? void 0
                          : a.name,
                  }),
                }),
              });
            },
          });
        },
        k = () =>
          (0, s.jsxs)("div", {
            className: B.gameBadge,
            children: [
              (0, s.jsx)(m.FireIcon, { size: "xxs" }),
              (0, s.jsx)(m.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        w = [d.z.DESKTOP, d.z.XBOX, d.z.PLAYSTATION, d.z.NINTENDO],
        Q = (e) => {
          let { platforms: a } = e,
            n = [...new Set(a)];
          !n.includes(d.z.DESKTOP) &&
            (n.includes(d.z.MACOS) || n.includes(d.z.LINUX)) &&
            n.push(d.z.DESKTOP);
          let r = (n = n.filter((e) => w.includes(e))).map((e) => {
            switch (e) {
              case d.z.DESKTOP:
                return (0, s.jsx)(m.ScreenIcon, { size: "xs" }, e);
              case d.z.XBOX:
                return (0, s.jsx)(m.XboxNeutralIcon, { size: "xs" }, e);
              case d.z.PLAYSTATION:
                return (0, s.jsx)(m.PlaystationNeutralIcon, { size: "xs" }, e);
              case d.z.NINTENDO:
                return (0, s.jsx)(
                  m.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, s.jsxs)("div", {
            className: o()(B.row, B.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, s.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              r,
            ],
          });
        },
        W = (e) => e.filter(j.z6).slice(0, 5),
        Y = (e) => {
          var a, t;
          let {
              applicationId: i,
              source: _,
              sourceUserId: d,
              transitionState: w,
              onClose: Y,
            } = e,
            { clientThemesClassName: z } = (0, O.ZP)(),
            { width: V, height: X } = (0, S.b)(),
            [J, q] = r.useState(() => {
              var e;
              return null === (e = A.K.get(y)) || void 0 === e ? void 0 : e[i];
            }),
            $ = (0, I.e7)([L.default], () => L.default.locale),
            [ee, ea] = r.useState(!0),
            [en, es] = r.useState(!1),
            er = r.useRef(null),
            et = r.useMemo(() => (0, G.fP)(), []);
          r.useEffect(() => {
            let e = er.current;
            null != e && es(e.scrollHeight - e.clientHeight > 1);
          }, [er, V, X]),
            r.useEffect(() => {
              (0, R.Jn)();
            }, []);
          let eo = (0, I.Wu)([x.Z], () => {
              var e;
              return (
                null !== (e = x.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            ei = (0, I.Wu)([P.Z], () =>
              eo
                .map((e) => P.Z.getGame(e))
                .filter(j.W1)
                .slice(0, 5),
            ),
            el = r.useRef([]);
          r.useEffect(() => {
            el.current = eo;
          }, [eo]),
            r.useEffect(() => {
              0 === eo.length && (0, f.i)(i),
                T.Z.getDetectableGamesSupplemental([i, ...eo]);
            }, [i, eo]);
          let ec = (0, I.e7)([x.Z, P.Z], () => {
              let e = void 0 === x.Z.getSimilarGames(i),
                a = eo.some((e) => P.Z.isFetching(e));
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
                        (e) => (0, p.dX)(e) && e.extra.application_id === i,
                      )) && void 0 !== e
                ? e
                : [];
            }, [e_, i]),
            ed = eE.length > 7,
            [eu, eI] = r.useState(!1);
          r.useEffect(() => {
            var e, a;
            return (
              (0, G.IS)({
                source: _,
                viewId: et,
                applicationId: i,
                gameName:
                  null !==
                    (a =
                      null !== (e = null == em ? void 0 : em.name) &&
                      void 0 !== e
                        ? e
                        : null == eA
                          ? void 0
                          : eA.name) && void 0 !== a
                    ? a
                    : "",
                authorId: d,
              }),
              () => {
                var e, a;
                let n = Date.now(),
                  s = eE.map((e) => {
                    let a = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, $);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: a,
                    });
                  });
                (0, G.wz)({
                  viewId: et,
                  applicationId: i,
                  gameName:
                    null !==
                      (a =
                        null !== (e = null == em ? void 0 : em.name) &&
                        void 0 !== e
                          ? e
                          : null == eA
                            ? void 0
                            : eA.name) && void 0 !== a
                      ? a
                      : "",
                  playedFriendIds: eE.map((e) => e.author_id),
                  playedFriendsData: s,
                  similarGames: W(el.current),
                });
              }
            );
          }, []);
          let eA = N.Z.getApplication(i),
            em = (0, I.e7)([P.Z], () => P.Z.getGame(i)),
            eT = r.useMemo(
              () => (null == em ? void 0 : em.genres.map(C.P3).join(", ")),
              [em],
            ),
            eN = r.useMemo(() => {
              if (null == em) return "";
              let { artwork: e, screenshots: a } = em;
              if (e.length > 0) {
                let a = Math.floor(Math.random() * (e.length - 1));
                return e[a];
              }
              if (a.length > 0) {
                let e = Math.floor(Math.random() * (a.length - 1));
                return a[e];
              }
              return "";
            }, [em]),
            eO = r.useMemo(() => {
              var e, a;
              let n = (
                null !== (e = null == em ? void 0 : em.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (a = null == em ? void 0 : em.screenshots) &&
                void 0 !== a
                  ? a
                  : []
                ).map((e) => ({ src: e })),
                ...n,
              ];
            }, [
              null == em ? void 0 : em.artwork,
              null == em ? void 0 : em.screenshots,
            ]),
            eR = (e, a) => {
              (0, G.UE)({
                gameName: null != eP ? eP : "",
                applicationId: i,
                action: e,
                similarGameId: a,
                viewId: et,
              });
            },
            ep = (0, v.p)("GameProfileModal"),
            { shouldOpenGameProfile: eg } = (0, j.ZP)({
              location: "GameProfileModal",
              applicationId: i,
              trackEntryPointImpression: !1,
            });
          if (
            (l()(
              eg,
              "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`",
            ),
            null == em)
          )
            return null;
          let eP =
              null !== (a = em.name) && void 0 !== a
                ? a
                : null == eA
                  ? void 0
                  : eA.name,
            eS =
              null == eA ? void 0 : eA.getIconURL(160, M.$k ? "webp" : "png"),
            eL = null !== (t = em.coverImageUrl) && void 0 !== t ? t : eS,
            { summary: eM, websites: eC, publishers: eh, platforms: eG } = em,
            ef = h.default.extractTimestamp(i),
            ex = E()().diff(E()(ef), "days") <= F.G,
            ev = eE.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
          return (0, s.jsx)(m.ModalRoot, {
            transitionState: w,
            size: m.ModalSize.DYNAMIC,
            className: o()(z, B.gameProfileModal),
            children: (0, s.jsxs)(m.ScrollerNone, {
              className: B.scrollable,
              children: [
                (0, s.jsx)("div", {
                  className: o()(B.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eN, '")') },
                }),
                (0, s.jsxs)("div", {
                  className: o()(B.content, B.column, B.headerInfo),
                  children: [
                    (0, s.jsx)("div", {
                      className: B.logoWrapper,
                      children:
                        null != eL &&
                        (0, s.jsx)("img", {
                          className: B.logo,
                          src: eL,
                          alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: eP,
                          }),
                        }),
                    }),
                    (0, s.jsxs)("div", {
                      className: o()(B.row, B.gapSm, B.gameDetails),
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(m.Heading, {
                              variant: "heading-xl/bold",
                              children: eP,
                            }),
                            (0, s.jsxs)("div", {
                              className: o()(B.row, B.gapSm),
                              children: [
                                null != eS &&
                                  (0, s.jsx)("img", {
                                    src: eS,
                                    height: 16,
                                    alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eP },
                                    ),
                                  }),
                                (0, s.jsx)(m.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eT,
                                }),
                                ex &&
                                  (0, s.jsx)(m.Text, {
                                    variant: "eyebrow",
                                    className: B.newBadge,
                                    children: U.Z.Messages.NEW,
                                  }),
                                ev &&
                                  (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)(m.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, s.jsx)(k, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          children:
                            ep &&
                            (0, s.jsx)(m.Tooltip, {
                              text: J
                                ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, s.jsxs)(m.Button, {
                                  ...e,
                                  innerClassName: B.followButton,
                                  color: J
                                    ? m.Button.Colors.PRIMARY
                                    : m.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let a =
                                      null !== (e = A.K.get(y)) && void 0 !== e
                                        ? e
                                        : {};
                                    (a[i] = !a[i]),
                                      A.K.set(y, a),
                                      eR(
                                        a[i]
                                          ? G.as.FollowGame
                                          : G.as.UnfollowGame,
                                      ),
                                      a[i] &&
                                        (0, b.L)() &&
                                        (0, m.openModalLazy)(async () => {
                                          let { default: e } = await n
                                            .e("86564")
                                            .then(n.bind(n, 641758));
                                          return (a) =>
                                            (0, s.jsx)(e, {
                                              ...a,
                                              applicationId: i,
                                              background: eN,
                                              viewId: et,
                                            });
                                        }),
                                      q(a[i]);
                                  },
                                  children: [
                                    J
                                      ? (0, s.jsx)(m.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, s.jsx)(m.BellIcon, {
                                          color: "white",
                                        }),
                                    J
                                      ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                      : U.Z.Messages.FOLLOW,
                                  ],
                                }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(m.HeadingLevel, {
                  children: (0, s.jsxs)("div", {
                    className: o()(B.content, B.mainContent),
                    children: [
                      (0, s.jsxs)("div", {
                        className: B.column,
                        children: [
                          (0, s.jsx)(m.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, s.jsxs)("div", {
                            className: o()(B.section, {
                              [B.fadedEntries]: ed && !eu,
                            }),
                            children: [
                              0 === eE.length &&
                                (0, s.jsx)(m.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: B.emptyFriendsWhoPlay,
                                  children:
                                    U.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, s.jsx)("div", {
                                className: o()(B.column, B.gapNone),
                                children:
                                  null == eE
                                    ? void 0
                                    : eE
                                        .slice(0, ed && !eu ? 6 : void 0)
                                        .map((e) =>
                                          (0, s.jsx)(
                                            D.Z,
                                            {
                                              entry: e,
                                              viewId: et,
                                              onClose: Y,
                                            },
                                            e.id,
                                          ),
                                        ),
                              }),
                            ],
                          }),
                          ed &&
                            !eu &&
                            (0, s.jsxs)(m.Clickable, {
                              className: B.expandEntriesButton,
                              onClick: () => eI(!0),
                              children: [
                                (0, s.jsx)(m.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, s.jsx)(m.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          eO.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(m.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, s.jsx)(m.Scroller, {
                                  className: o()(B.row, B.imageScroller),
                                  orientation: "horizontal",
                                  children: eO.map((e, a) =>
                                    (0, s.jsx)(
                                      m.Clickable,
                                      {
                                        className: B.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: B.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eR(G.as.ClickImage),
                                            (0, m.openModalLazy)(async () => {
                                              let { default: e } = await n
                                                .e("99857")
                                                .then(n.bind(n, 895023));
                                              return (n) => {
                                                let { ...r } = n;
                                                return (0, s.jsx)(e, {
                                                  className: B.mediaModal,
                                                  ...r,
                                                  items: eO,
                                                  startingIndex: a,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, s.jsx)("img", {
                                          src: e.src,
                                          className: B.gameArtwork,
                                          alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eP },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, s.jsx)(m.Spacer, { size: 8 }),
                              ],
                            }),
                          ec &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("div", {
                                  className: B.loadingHeadingSimilarGames,
                                }),
                                (0, s.jsx)("div", {
                                  className: B.row,
                                  children: (0, c.range)(0, 5).map((e) =>
                                    (0, s.jsx)(
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
                          !ec &&
                            ei.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(m.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, s.jsx)("div", {
                                  className: B.row,
                                  style: {},
                                  children: ei.map((e) =>
                                    (0, s.jsx)(
                                      H,
                                      { game: e, onClose: Y, trackClick: eR },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: o()(B.sidebar, B.column),
                        children: [
                          (0, s.jsx)(m.Heading, {
                            variant: "heading-md/bold",
                            children: U.Z.Messages.ABOUT,
                          }),
                          (0, s.jsxs)("div", {
                            className: B.sidebarSections,
                            children: [
                              null != eM &&
                                (0, s.jsxs)("div", {
                                  className: o()(B.column, B.gapSm),
                                  children: [
                                    (0, s.jsx)(m.Text, {
                                      ref: er,
                                      lineClamp: ee ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eM,
                                    }),
                                    (en || !ee) &&
                                      (0, s.jsx)(m.Clickable, {
                                        className: B.clickable,
                                        onClick: () => {
                                          eR(
                                            ee ? G.as.ShowMore : G.as.ShowLess,
                                          ),
                                            ea(!ee);
                                        },
                                        children: (0, s.jsx)(m.Text, {
                                          variant: "text-sm/semibold",
                                          children: ee
                                            ? U.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : U.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, s.jsx)(K.Z, { websites: eC, trackClick: eR }),
                              (eh.length > 0 || eG.length > 0) &&
                                (0, s.jsx)("div", {
                                  className: o()(B.column),
                                  children:
                                    eh.length > 0 &&
                                    (0, s.jsxs)("div", {
                                      className: o()(B.column, B.gapSm),
                                      children: [
                                        (0, s.jsx)(m.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            U.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: o()(B.row, B.gapMd),
                                          children: [
                                            (0, s.jsx)(m.Text, {
                                              variant: "text-sm/normal",
                                              children: eh.join(", "),
                                            }),
                                            eG.length > 0 &&
                                              (0, s.jsx)(Q, { platforms: eG }),
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
      var s = n(470079);
      function r() {
        var e, a;
        let [n, r] = s.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080,
        });
        return (
          s.useLayoutEffect(() => {
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
      var s,
        r = n(735250),
        t = n(470079),
        o = n(120356),
        i = n.n(o),
        l = n(481060),
        c = n(598077),
        _ = n(940942),
        E = n(585867);
      function d(e, a, n) {
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
      class u extends (s = t.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: a,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: s,
            } = this.props,
            r = [],
            t = e.length === a ? e.length : a - 1,
            o = 0;
          for (; o < t && o < e.length; ) {
            let a = o === e.length - 1;
            r.push(
              n(e[o] || null, a ? null : _.avatarMasked, "user-".concat(o), a),
            ),
              o++;
          }
          if (o < e.length) {
            let a = Math.min(e.length - o, 99);
            r.push(s("+".concat(a), _.moreUsers, "more-users", a));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: _.iconContainer,
                children: (0, r.jsx)(l.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: _.foreground,
                  className: _.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsxs)("div", {
            className: i()(e, _.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "_ref", void 0),
            d(this, "defaultRenderUser", (e, a, n, s) => {
              let { onClick: t, size: o, guildId: d } = this.props,
                u = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == u
                ? (0, r.jsx)("div", { className: i()(_.emptyUser, a) }, n)
                : (0, r.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: u.getAvatarURL(d, (0, l.getAvatarSize)(o)),
                      size: o,
                      "aria-label": u.username,
                      className: i()(a, E.cursorPointer, _.avatarSize),
                      onClick: (e) => (null != t ? t(e, u, this._ref) : null),
                    },
                    u.id,
                  );
            });
        }
      }
      d(u, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, a, n) {
          return (0, r.jsx)("div", { className: a, children: e }, n);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (a.Z = u);
    },
    814225: function (e, a, n) {
      n.d(a, {
        P3: function () {
          return d;
        },
        ZK: function () {
          return E;
        },
        en: function () {
          return I;
        },
      }),
        n(757143),
        n(47120);
      var s = n(913527),
        r = n.n(s);
      if (12633 == n.j) var t = n(266067);
      n(358085), n(73346);
      var o = n(981631),
        i = n(689938);
      let l = {},
        c = {},
        _ = Object.freeze({ ALL: -1, ...o.EKQ });
      function E(e) {
        let a = (0, t.LX)(e, {
          path: o.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != a ? a.params.skuId : null;
      }
      function d(e) {
        switch (e) {
          case o.EKQ.ACTION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
          case o.EKQ.ACTION_RPG:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
          case o.EKQ.BRAWLER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
          case o.EKQ.HACK_AND_SLASH:
            return i.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
          case o.EKQ.PLATFORMER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
          case o.EKQ.STEALTH:
            return i.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
          case o.EKQ.SURVIVAL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
          case o.EKQ.ADVENTURE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
          case o.EKQ.ACTION_ADVENTURE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
          case o.EKQ.METROIDVANIA:
            return i.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
          case o.EKQ.OPEN_WORLD:
            return i.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
          case o.EKQ.PSYCHOLOGICAL_HORROR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
          case o.EKQ.SANDBOX:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
          case o.EKQ.SURVIVAL_HORROR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
          case o.EKQ.VISUAL_NOVEL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
          case o.EKQ.DRIVING_RACING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
          case o.EKQ.VEHICULAR_COMBAT:
            return i.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
          case o.EKQ.MASSIVELY_MULTIPLAYER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
          case o.EKQ.MMORPG:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
          case o.EKQ.ROLE_PLAYING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
          case o.EKQ.DUNGEON_CRAWLER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
          case o.EKQ.ROGUELIKE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
          case o.EKQ.SHOOTER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
          case o.EKQ.LIGHT_GUN:
            return i.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
          case o.EKQ.SHOOT_EM_UP:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
          case o.EKQ.FPS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FPS;
          case o.EKQ.DUAL_JOYSTICK_SHOOTER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
          case o.EKQ.SIMULATION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
          case o.EKQ.FLIGHT_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
          case o.EKQ.TRAIN_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
          case o.EKQ.LIFE_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
          case o.EKQ.FISHING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
          case o.EKQ.SPORTS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
          case o.EKQ.BASEBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
          case o.EKQ.BASKETBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
          case o.EKQ.BILLIARDS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
          case o.EKQ.BOWLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
          case o.EKQ.BOXING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
          case o.EKQ.FOOTBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
          case o.EKQ.GOLF:
            return i.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
          case o.EKQ.HOCKEY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
          case o.EKQ.SKATEBOARDING_SKATING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
          case o.EKQ.SNOWBOARDING_SKIING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
          case o.EKQ.SOCCER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
          case o.EKQ.TRACK_FIELD:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
          case o.EKQ.SURFING_WAKEBOARDING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
          case o.EKQ.WRESTLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
          case o.EKQ.STRATEGY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
          case o.EKQ.FOUR_X:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
          case o.EKQ.ARTILLERY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
          case o.EKQ.RTS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_RTS;
          case o.EKQ.TOWER_DEFENSE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
          case o.EKQ.TURN_BASED_STRATEGY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
          case o.EKQ.WARGAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
          case o.EKQ.MOBA:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
          case o.EKQ.FIGHTING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
          case o.EKQ.PUZZLE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
          case o.EKQ.CARD_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
          case o.EKQ.EDUCATION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
          case o.EKQ.FITNESS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
          case o.EKQ.GAMBLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
          case o.EKQ.MUSIC_RHYTHM:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
          case o.EKQ.PARTY_MINI_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
          case o.EKQ.PINBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
          case o.EKQ.TRIVIA_BOARD_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
          case o.EKQ.TACTICAL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
          case o.EKQ.INDIE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
          case o.EKQ.ARCADE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
          case o.EKQ.POINT_AND_CLICK:
            return i.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
          default:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
        }
      }
      Object.keys(_).forEach((e) => {
        let a = e.toLowerCase().replace(/_/g, "-"),
          n = _[e];
        (l[a] = n), (c[n] = a);
      });
      let u = [
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
        for (let e = 0; e < u.length; e++) {
          let [a, s] = u[e],
            t = r()(n, a, !0);
          if (t.isValid()) return t.format(s);
        }
        return n;
      }
    },
    643872: function (e, a, n) {
      var s, r;
      n.d(a, {
        p: function () {
          return s;
        },
      }),
        ((r = s || (s = {}))[(r.OFFICIAL = 1)] = "OFFICIAL"),
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
//# sourceMappingURL=712d53a2b469f9386b01.js.map
