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
        t = n(570140),
        r = n(881052),
        o = n(981631);
      let i = async (e) => {
        try {
          var a;
          let n = await s.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
            r = (
              null !== (a = n.body.similar_games) && void 0 !== a ? a : []
            ).filter((a) => a !== e);
          t.Z.dispatch({
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
      var s,
        t,
        r,
        o,
        i = n(442837),
        l = n(570140);
      let c = {};
      class _ extends (o = i.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (r = "GameProfileStore"),
        (t = "displayName") in (s = _)
          ? Object.defineProperty(s, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[t] = r),
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
          return t;
        },
      });
      let s = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function t(e) {
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
        t = n(392711),
        r = n.n(t),
        o = n(876215),
        i = n(442837),
        l = n(146282),
        c = n(897674),
        _ = n(709054),
        E = n(206583);
      let u = new Set([o.s.PLAYED_GAME]),
        d = (e) => u.has(e.content_type);
      function I() {
        let e = (0, c.Z)(E.YN.GAME_PROFILE_FEED),
          a = (0, c.Z)(E.YN.GLOBAL_FEED),
          n = s.useMemo(
            () =>
              r()(a)
                .unionBy(e, (e) => e.id)
                .filter(d)
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
          return r;
        },
      });
      var s = n(433517);
      let t = "GameFollowSurveyModal";
      function r() {
        var e;
        return (
          (null === (e = s.K.get(t)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function o() {
        return s.K.set(t, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, a, n) {
      var s = n(735250),
        t = n(470079),
        r = n(120356),
        o = n.n(r),
        i = n(442837),
        l = n(481060),
        c = n(178762),
        _ = n(91140),
        E = n(297781),
        u = n(592125),
        d = n(944486),
        I = n(594174),
        A = n(5192),
        m = n(810568),
        T = n(689938),
        N = n(255341),
        O = n(707443);
      a.Z = (e) => {
        let { entry: a, viewId: n, onClose: r } = e,
          R = (0, i.e7)([d.Z, u.Z], () => u.Z.getChannel(d.Z.getChannelId())),
          p = (0, i.e7)([I.default], () => I.default.getUser(a.author_id)),
          { nick: P, avatar: g } = t.useMemo(() => {
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
                let { closePopout: t, updatePosition: o } = e;
                return (0, s.jsx)(c.J, {
                  entry: a,
                  closePopout: t,
                  updatePopoutPosition: o,
                  onReaction: () => {
                    (0, m.UE)({
                      action: m.as.SendMessageUser,
                      applicationId: a.extra.application_id,
                      gameName: a.extra.game_name,
                      recipientUserId: a.author_id,
                      viewId: n,
                    }),
                      r(),
                      t();
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
                          src: g,
                          alt: T.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: P },
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
                                children: P,
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
        t = n(470079),
        r = n(120356),
        o = n.n(r),
        i = n(643872),
        l = n(481060),
        c = n(570140),
        _ = n(652898),
        E = n(93093),
        u = n(768581),
        d = n(810568),
        I = n(981631),
        A = n(689938),
        m = n(707443);
      let T = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
        N = (e) => {
          let { invite: a, trackClick: n } = e,
            { approximate_member_count: t, guild: r } = a;
          if (null == r) return null;
          let i = E.Z.isMember(r.id);
          if (
            !(null == r ? void 0 : r.features.includes("VERIFIED")) &&
            !(null == r ? void 0 : r.features.includes("PARTNER"))
          )
            return null;
          let _ = u.ZP.getGuildIconURL({ id: r.id, icon: r.icon, size: 32 });
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
                      guildName: r.name,
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: o()(m.gapNone),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: r.name,
                      }),
                      null != t &&
                        (0, s.jsx)(l.Text, {
                          variant: "text-xxs/normal",
                          children:
                            A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                              { count: t },
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(l.Button, {
                color: l.ButtonColors.PRIMARY,
                onClick: () => {
                  n(d.as.JoinOfficialServer),
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
          r =
            null == a
              ? void 0
              : a.find((e) => {
                  let { category: a } = e;
                  return a === i.p.DISCORD;
                }),
          [c, E] = t.useState();
        if (
          (t.useEffect(() => {
            let e = async (e) => {
              let a = e.split("/").pop();
              if (null != a) {
                let e = await (0, _.Z)(a);
                !0 !== e.banned && E(e.invite);
              }
            };
            null != r && e(r.url);
          }, [r]),
          null == a || 0 === a.length)
        )
          return null;
        let u = a
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
                  children: u.map((e) => {
                    let a,
                      t,
                      { category: r, url: o } = e,
                      c = null;
                    switch (r) {
                      case i.p.OFFICIAL:
                        (c = (0, s.jsx)(l.GlobeEarthIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (t = d.as.WebsiteLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case i.p.TWITTER:
                        (c = (0, s.jsx)(l.XNeutralIcon, {
                          colorClass: m.linkIcon,
                        })),
                          (t = d.as.XLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case i.p.YOUTUBE:
                        (t = d.as.YouTubeLink),
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
                              n(t);
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
        t = n(470079),
        r = n(120356),
        o = n.n(r),
        i = n(512722),
        l = n.n(i),
        c = n(913527),
        _ = n.n(c),
        E = n(758713),
        u = n(705512),
        d = n(442837),
        I = n(433517),
        A = n(481060),
        m = n(224706),
        T = n(812206),
        N = n(168551),
        O = n(485267),
        R = n(26033),
        p = n(561308),
        P = n(669764),
        g = n(962250),
        L = n(706454),
        S = n(768581),
        M = n(814225),
        C = n(709054),
        h = n(810568),
        G = n(998058),
        f = n(839392),
        x = n(96856),
        v = n(567409),
        Z = n(774073),
        j = n(124030),
        b = n(383895),
        D = n(183391),
        K = n(206583),
        U = n(689938),
        B = n(707443);
      let F = "GameProfileModal",
        y = (e) => {
          let { game: a, onClose: n, trackClick: t } = e,
            r = (0, d.e7)([T.Z], () => {
              var e;
              return T.Z.getApplication(
                null !== (e = null == a ? void 0 : a.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == a) return null;
          let o = a.coverImageUrl;
          return (0, s.jsx)(A.Tooltip, {
            text: a.name,
            children: (e) => {
              var i;
              return (0, s.jsx)(A.Clickable, {
                ...e,
                className: B.clickable,
                onClick: async () => {
                  t(h.as.ClickSimilarGame, a.applicationId),
                    (0, A.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, s.jsx)(W, {
                          applicationId: a.applicationId,
                          source: h.m1.SimilarGames,
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
                      null !== (i = null == r ? void 0 : r.name) && void 0 !== i
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
        H = () =>
          (0, s.jsxs)("div", {
            className: B.gameBadge,
            children: [
              (0, s.jsx)(A.FireIcon, { size: "xxs" }),
              (0, s.jsx)(A.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        k = [E.z.DESKTOP, E.z.XBOX, E.z.PLAYSTATION, E.z.NINTENDO],
        w = (e) => {
          let { platforms: a } = e,
            n = [...new Set(a)];
          !n.includes(E.z.DESKTOP) &&
            (n.includes(E.z.MACOS) || n.includes(E.z.LINUX)) &&
            n.push(E.z.DESKTOP);
          let t = (n = n.filter((e) => k.includes(e))).map((e) => {
            switch (e) {
              case E.z.DESKTOP:
                return (0, s.jsx)(A.ScreenIcon, { size: "xs" }, e);
              case E.z.XBOX:
                return (0, s.jsx)(A.XboxNeutralIcon, { size: "xs" }, e);
              case E.z.PLAYSTATION:
                return (0, s.jsx)(A.PlaystationNeutralIcon, { size: "xs" }, e);
              case E.z.NINTENDO:
                return (0, s.jsx)(
                  A.NintendoSwitchNeutralIcon,
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
              (0, s.jsx)(A.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              t,
            ],
          });
        },
        Q = (e) => e.filter(Z.z6).slice(0, 5),
        W = (e) => {
          var a, r;
          let {
              applicationId: i,
              source: c,
              sourceUserId: E,
              transitionState: k,
              onClose: W,
            } = e,
            { clientThemesClassName: Y } = (0, N.ZP)(),
            { width: z, height: V } = (0, g.b)(),
            [X, J] = t.useState(() => {
              var e;
              return null === (e = I.K.get(F)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, d.e7)([L.default], () => L.default.locale),
            [$, ee] = t.useState(!0),
            [ea, en] = t.useState(!1),
            es = t.useRef(null),
            et = t.useMemo(() => (0, h.fP)(), []);
          t.useEffect(() => {
            let e = es.current;
            null != e && en(e.scrollHeight - e.clientHeight > 1);
          }, [es, z, V]),
            t.useEffect(() => {
              (0, O.Jn)();
            }, []);
          let er = (0, d.Wu)([f.Z], () => {
              var e;
              return (
                null !== (e = f.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            eo = (0, d.Wu)([P.Z], () =>
              er
                .map((e) => P.Z.getGame(e))
                .filter(Z.W1)
                .slice(0, 5),
            ),
            ei = t.useRef([]);
          t.useEffect(() => {
            ei.current = er;
          }, [er]);
          let { entries: el } = (0, v.Z)(),
            ec = t.useMemo(() => {
              var e;
              return null !==
                (e =
                  null == el
                    ? void 0
                    : el.filter(
                        (e) => (0, R.dX)(e) && e.extra.application_id === i,
                      )) && void 0 !== e
                ? e
                : [];
            }, [el, i]),
            e_ = ec.length > 7,
            [eE, eu] = t.useState(!1);
          t.useEffect(() => {
            var e, a;
            return (
              (0, h.IS)({
                source: c,
                viewId: et,
                applicationId: i,
                gameName:
                  null !==
                    (a =
                      null !== (e = null == eI ? void 0 : eI.name) &&
                      void 0 !== e
                        ? e
                        : null == ed
                          ? void 0
                          : ed.name) && void 0 !== a
                    ? a
                    : "",
                authorId: E,
              }),
              () => {
                var e, a;
                let n = Date.now(),
                  s = ec.map((e) => {
                    let a = (0, p.kr)(e) ? (0, p.T_)(e, n) : (0, p.GL)(e, q);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: a,
                    });
                  });
                (0, h.wz)({
                  viewId: et,
                  applicationId: i,
                  gameName:
                    null !==
                      (a =
                        null !== (e = null == eI ? void 0 : eI.name) &&
                        void 0 !== e
                          ? e
                          : null == ed
                            ? void 0
                            : ed.name) && void 0 !== a
                      ? a
                      : "",
                  playedFriendIds: ec.map((e) => e.author_id),
                  playedFriendsData: s,
                  similarGames: Q(ei.current),
                });
              }
            );
          }, []),
            t.useEffect(() => {
              0 === er.length && (0, G.i)(i);
            }, [i, er]),
            t.useEffect(() => {
              m.Z.getDetectableGamesSupplemental([i, ...er]);
            }, [i, er]);
          let ed = T.Z.getApplication(i),
            eI = (0, d.e7)([P.Z], () => P.Z.getGame(i)),
            eA = t.useMemo(
              () => (null == eI ? void 0 : eI.genres.map(M.P3).join(", ")),
              [eI],
            ),
            em = t.useMemo(() => {
              if (null == eI) return "";
              let { artwork: e, screenshots: a } = eI;
              if (e.length > 0) {
                let a = Math.floor(Math.random() * (e.length - 1));
                return e[a];
              }
              if (a.length > 0) {
                let e = Math.floor(Math.random() * (a.length - 1));
                return a[e];
              }
              return "";
            }, [eI]),
            eT = t.useMemo(() => {
              var e, a;
              let n = (
                null !== (e = null == eI ? void 0 : eI.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (a = null == eI ? void 0 : eI.screenshots) &&
                void 0 !== a
                  ? a
                  : []
                ).map((e) => ({ src: e })),
                ...n,
              ];
            }, [
              null == eI ? void 0 : eI.artwork,
              null == eI ? void 0 : eI.screenshots,
            ]),
            eN = (e, a) => {
              (0, h.UE)({
                gameName: null != ep ? ep : "",
                applicationId: i,
                action: e,
                similarGameId: a,
                viewId: et,
              });
            },
            eO = (0, x.p)("GameProfileModal"),
            { shouldOpenGameProfile: eR } = (0, Z.ZP)({
              location: "GameProfileModal",
              applicationId: i,
              trackEntryPointImpression: !1,
            });
          if (
            (l()(
              eR,
              "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`",
            ),
            null == eI)
          )
            return null;
          let ep =
              null !== (a = eI.name) && void 0 !== a
                ? a
                : null == ed
                  ? void 0
                  : ed.name,
            eP =
              null == ed ? void 0 : ed.getIconURL(160, S.$k ? "webp" : "png"),
            eg = null !== (r = eI.coverImageUrl) && void 0 !== r ? r : eP,
            { summary: eL, websites: eS, publishers: eM, platforms: eC } = eI,
            eh = C.default.extractTimestamp(i),
            eG = _()().diff(_()(eh), "days") <= K.G,
            ef = ec.some((e) => (0, p.ig)(e) === u.o.GLOBAL);
          return (0, s.jsx)(A.ModalRoot, {
            transitionState: k,
            size: A.ModalSize.DYNAMIC,
            className: o()(Y, B.gameProfileModal),
            children: (0, s.jsxs)(A.ScrollerNone, {
              className: B.scrollable,
              children: [
                (0, s.jsx)("div", {
                  className: o()(B.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(em, '")') },
                }),
                (0, s.jsxs)("div", {
                  className: o()(B.content, B.column, B.headerInfo),
                  children: [
                    (0, s.jsx)("div", {
                      className: B.logoWrapper,
                      children:
                        null != eg &&
                        (0, s.jsx)("img", {
                          className: B.logo,
                          src: eg,
                          alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: ep,
                          }),
                        }),
                    }),
                    (0, s.jsxs)("div", {
                      className: o()(B.row, B.gapSm, B.gameDetails),
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(A.Heading, {
                              variant: "heading-xl/bold",
                              children: ep,
                            }),
                            (0, s.jsxs)("div", {
                              className: o()(B.row, B.gapSm),
                              children: [
                                null != eP &&
                                  (0, s.jsx)("img", {
                                    src: eP,
                                    height: 16,
                                    alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: ep },
                                    ),
                                  }),
                                (0, s.jsx)(A.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eA,
                                }),
                                eG &&
                                  (0, s.jsx)(A.Text, {
                                    variant: "eyebrow",
                                    className: B.newBadge,
                                    children: U.Z.Messages.NEW,
                                  }),
                                ef &&
                                  (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)(A.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, s.jsx)(H, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          children:
                            eO &&
                            (0, s.jsx)(A.Tooltip, {
                              text: X
                                ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, s.jsxs)(A.Button, {
                                  ...e,
                                  innerClassName: B.followButton,
                                  color: X
                                    ? A.Button.Colors.PRIMARY
                                    : A.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let a =
                                      null !== (e = I.K.get(F)) && void 0 !== e
                                        ? e
                                        : {};
                                    (a[i] = !a[i]),
                                      I.K.set(F, a),
                                      eN(
                                        a[i]
                                          ? h.as.FollowGame
                                          : h.as.UnfollowGame,
                                      ),
                                      a[i] &&
                                        (0, j.L)() &&
                                        (0, A.openModalLazy)(async () => {
                                          let { default: e } = await n
                                            .e("86564")
                                            .then(n.bind(n, 641758));
                                          return (a) =>
                                            (0, s.jsx)(e, {
                                              ...a,
                                              applicationId: i,
                                              background: em,
                                              viewId: et,
                                            });
                                        }),
                                      J(a[i]);
                                  },
                                  children: [
                                    X
                                      ? (0, s.jsx)(A.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, s.jsx)(A.BellIcon, {
                                          color: "white",
                                        }),
                                    X
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
                (0, s.jsx)(A.HeadingLevel, {
                  children: (0, s.jsxs)("div", {
                    className: o()(B.content, B.mainContent),
                    children: [
                      (0, s.jsxs)("div", {
                        className: B.column,
                        children: [
                          (0, s.jsx)(A.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, s.jsxs)("div", {
                            className: o()(B.section, {
                              [B.fadedEntries]: e_ && !eE,
                            }),
                            children: [
                              0 === ec.length &&
                                (0, s.jsx)(A.Text, {
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
                                  null == ec
                                    ? void 0
                                    : ec
                                        .slice(0, e_ && !eE ? 6 : void 0)
                                        .map((e) =>
                                          (0, s.jsx)(
                                            b.Z,
                                            {
                                              entry: e,
                                              viewId: et,
                                              onClose: W,
                                            },
                                            e.id,
                                          ),
                                        ),
                              }),
                            ],
                          }),
                          e_ &&
                            !eE &&
                            (0, s.jsxs)(A.Clickable, {
                              className: B.expandEntriesButton,
                              onClick: () => eu(!0),
                              children: [
                                (0, s.jsx)(A.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, s.jsx)(A.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          eT.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(A.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, s.jsx)(A.Scroller, {
                                  className: o()(B.row, B.imageScroller),
                                  orientation: "horizontal",
                                  children: eT.map((e, a) =>
                                    (0, s.jsx)(
                                      A.Clickable,
                                      {
                                        className: B.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: B.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eN(h.as.ClickImage),
                                            (0, A.openModalLazy)(async () => {
                                              let { default: e } = await n
                                                .e("99857")
                                                .then(n.bind(n, 895023));
                                              return (n) => {
                                                let { ...t } = n;
                                                return (0, s.jsx)(e, {
                                                  className: B.mediaModal,
                                                  ...t,
                                                  items: eT,
                                                  startingIndex: a,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, s.jsx)("img", {
                                          src: e.src,
                                          className: B.gameArtwork,
                                          alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: ep },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, s.jsx)(A.Spacer, { size: 8 }),
                              ],
                            }),
                          eo.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(A.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, s.jsx)("div", {
                                  className: B.row,
                                  style: {},
                                  children: eo.map((e) =>
                                    (0, s.jsx)(
                                      y,
                                      { game: e, onClose: W, trackClick: eN },
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
                          (0, s.jsx)(A.Heading, {
                            variant: "heading-md/bold",
                            children: U.Z.Messages.ABOUT,
                          }),
                          (0, s.jsxs)("div", {
                            className: B.sidebarSections,
                            children: [
                              null != eL &&
                                (0, s.jsxs)("div", {
                                  className: o()(B.column, B.gapSm),
                                  children: [
                                    (0, s.jsx)(A.Text, {
                                      ref: es,
                                      lineClamp: $ ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eL,
                                    }),
                                    (ea || !$) &&
                                      (0, s.jsx)(A.Clickable, {
                                        className: B.clickable,
                                        onClick: () => {
                                          eN($ ? h.as.ShowMore : h.as.ShowLess),
                                            ee(!$);
                                        },
                                        children: (0, s.jsx)(A.Text, {
                                          variant: "text-sm/semibold",
                                          children: $
                                            ? U.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : U.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, s.jsx)(D.Z, { websites: eS, trackClick: eN }),
                              (eM.length > 0 || eC.length > 0) &&
                                (0, s.jsx)("div", {
                                  className: o()(B.column),
                                  children:
                                    eM.length > 0 &&
                                    (0, s.jsxs)("div", {
                                      className: o()(B.column, B.gapSm),
                                      children: [
                                        (0, s.jsx)(A.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            U.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: o()(B.row, B.gapMd),
                                          children: [
                                            (0, s.jsx)(A.Text, {
                                              variant: "text-sm/normal",
                                              children: eM.join(", "),
                                            }),
                                            eC.length > 0 &&
                                              (0, s.jsx)(w, { platforms: eC }),
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
      a.default = W;
    },
    962250: function (e, a, n) {
      n.d(a, {
        b: function () {
          return t;
        },
      }),
        n(47120);
      var s = n(470079);
      function t() {
        var e, a;
        let [n, t] = s.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (a = window.innerHeight) && void 0 !== a ? a : 1080,
        });
        return (
          s.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              t({ width: e, height: window.innerHeight });
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
        t = n(735250),
        r = n(470079),
        o = n(120356),
        i = n.n(o),
        l = n(481060),
        c = n(598077),
        _ = n(940942),
        E = n(585867);
      function u(e, a, n) {
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
      class d extends (s = r.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: a,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: s,
            } = this.props,
            t = [],
            r = e.length === a ? e.length : a - 1,
            o = 0;
          for (; o < r && o < e.length; ) {
            let a = o === e.length - 1;
            t.push(
              n(e[o] || null, a ? null : _.avatarMasked, "user-".concat(o), a),
            ),
              o++;
          }
          if (o < e.length) {
            let a = Math.min(e.length - o, 99);
            t.push(s("+".concat(a), _.moreUsers, "more-users", a));
          }
          return t;
        }
        renderIcon() {
          return this.props.icon
            ? (0, t.jsx)("div", {
                className: _.iconContainer,
                children: (0, t.jsx)(l.VoiceNormalIcon, {
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
          return (0, t.jsxs)("div", {
            className: i()(e, _.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "_ref", void 0),
            u(this, "defaultRenderUser", (e, a, n, s) => {
              let { onClick: r, size: o, guildId: u } = this.props,
                d = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == d
                ? (0, t.jsx)("div", { className: i()(_.emptyUser, a) }, n)
                : (0, t.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: d.getAvatarURL(u, (0, l.getAvatarSize)(o)),
                      size: o,
                      "aria-label": d.username,
                      className: i()(a, E.cursorPointer, _.avatarSize),
                      onClick: (e) => (null != r ? r(e, d, this._ref) : null),
                    },
                    d.id,
                  );
            });
        }
      }
      u(d, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, a, n) {
          return (0, t.jsx)("div", { className: a, children: e }, n);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (a.Z = d);
    },
    814225: function (e, a, n) {
      n.d(a, {
        P3: function () {
          return u;
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
        t = n.n(s);
      if (12633 == n.j) var r = n(266067);
      n(358085), n(73346);
      var o = n(981631),
        i = n(689938);
      let l = {},
        c = {},
        _ = Object.freeze({ ALL: -1, ...o.EKQ });
      function E(e) {
        let a = (0, r.LX)(e, {
          path: o.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != a ? a.params.skuId : null;
      }
      function u(e) {
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
      let d = [
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
        for (let e = 0; e < d.length; e++) {
          let [a, s] = d[e],
            r = t()(n, a, !0);
          if (r.isValid()) return r.format(s);
        }
        return n;
      }
    },
    643872: function (e, a, n) {
      var s, t;
      n.d(a, {
        p: function () {
          return s;
        },
      }),
        ((t = s || (s = {}))[(t.OFFICIAL = 1)] = "OFFICIAL"),
        (t[(t.WIKIA = 2)] = "WIKIA"),
        (t[(t.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (t[(t.FACEBOOK = 4)] = "FACEBOOK"),
        (t[(t.TWITTER = 5)] = "TWITTER"),
        (t[(t.TWITCH = 6)] = "TWITCH"),
        (t[(t.INSTAGRAM = 8)] = "INSTAGRAM"),
        (t[(t.YOUTUBE = 9)] = "YOUTUBE"),
        (t[(t.IPHONE = 10)] = "IPHONE"),
        (t[(t.IPAD = 11)] = "IPAD"),
        (t[(t.ANDROID = 12)] = "ANDROID"),
        (t[(t.STEAM = 13)] = "STEAM"),
        (t[(t.REDDIT = 14)] = "REDDIT"),
        (t[(t.ITCH = 15)] = "ITCH"),
        (t[(t.EPICGAMES = 16)] = "EPICGAMES"),
        (t[(t.GOG = 17)] = "GOG"),
        (t[(t.DISCORD = 18)] = "DISCORD");
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
//# sourceMappingURL=571f462dd9cf834393ab.js.map
