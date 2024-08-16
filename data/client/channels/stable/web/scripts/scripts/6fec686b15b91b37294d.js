"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89287"],
  {
    206295: function (e, s, a) {
      a.d(s, {
        w: function () {
          return d;
        },
      }),
        a(47120);
      var n = a(470079),
        l = a(688619),
        r = a.n(l),
        t = a(979590),
        i = a.n(t),
        o = a(442837),
        E = a(866442),
        c = a(607070),
        _ = a(220082),
        I = a(981631);
      let u = (e, s) => {
          let a = c.Z.desaturateUserColors ? c.Z.saturation : 1,
            n = _.SR.getState().palette[e],
            l =
              null == n
                ? void 0
                : n.map((e) => {
                    let [s, n, l] = e,
                      { h: r, s: t, l: o } = i()({ r: s, g: n, b: l }).toHsl();
                    return i()({ h: r, s: t * a, l: o }).toHexString();
                  });
          return null != l ? l : [s, s];
        },
        d = (e) => {
          var s, n, l, t, i, o;
          let _;
          _ = a(481060).tokens;
          let d = c.Z.saturation,
            [A, R] = u(
              e,
              null !==
                (o =
                  null == _
                    ? void 0
                    : null === (i = _.colors) || void 0 === i
                      ? void 0
                      : null === (t = i.BACKGROUND_FLOATING) || void 0 === t
                        ? void 0
                        : null === (l = t.resolve) || void 0 === l
                          ? void 0
                          : null ===
                                (n = l.call(t, {
                                  theme: I.BRd.DARK,
                                  saturation: d,
                                })) || void 0 === n
                            ? void 0
                            : null === (s = n.hex) || void 0 === s
                              ? void 0
                              : s.call(n)) && void 0 !== o
                ? o
                : "#000",
            ),
            N = (0, E._i)(A),
            O = (0, E._i)(R);
          for (let e = 1; e < 8 && !((0, E.Bd)(N) >= 0.725); e++) {
            N = r()(N).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, E.Bd)(O) >= 0.725); e++) {
            O = r()(O).darken(0.5).num();
          }
          let T = (0, E.Rf)(N);
          return { primaryColor: T, secondaryColor: (0, E.Rf)(O) };
        };
      s.Z = (e) => {
        var s, l, t, i, u, d;
        let A;
        A = a(481060).tokens;
        let R = (0, o.e7)([c.Z], () => c.Z.saturation),
          [N, O] = (0, _.Cf)(
            e,
            null !==
              (d =
                null == A
                  ? void 0
                  : null === (u = A.colors) || void 0 === u
                    ? void 0
                    : null === (i = u.BACKGROUND_FLOATING) || void 0 === i
                      ? void 0
                      : null === (t = i.resolve) || void 0 === t
                        ? void 0
                        : null ===
                              (l = t.call(i, {
                                theme: I.BRd.DARK,
                                saturation: R,
                              })) || void 0 === l
                          ? void 0
                          : null === (s = l.hex) || void 0 === s
                            ? void 0
                            : s.call(l)) && void 0 !== d
              ? d
              : "#000",
          );
        return n.useMemo(() => {
          let e = (0, E._i)(N),
            s = (0, E._i)(O);
          for (let s = 1; s < 8 && !((0, E.Bd)(e) >= 0.725); s++) {
            e = r()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, E.Bd)(s) >= 0.725); e++) {
            s = r()(s).darken(0.5).num();
          }
          let a = (0, E.Rf)(e);
          return { primaryColor: a, secondaryColor: (0, E.Rf)(s) };
        }, [N, O]);
      };
    },
    998058: function (e, s, a) {
      a.d(s, {
        i: function () {
          return i;
        },
      });
      var n = a(544891),
        l = a(570140),
        r = a(881052),
        t = a(981631);
      let i = async (e) => {
        try {
          var s;
          let a = await n.tn.get({ url: t.ANM.SIMILAR_GAMES(e) }),
            r = (
              null !== (s = a.body.similar_games) && void 0 !== s ? s : []
            ).filter((s) => s !== e);
          l.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: r,
          });
        } catch (e) {
          throw new r.Hx(e);
        }
      };
    },
    839392: function (e, s, a) {
      var n,
        l,
        r,
        t,
        i = a(442837),
        o = a(570140);
      let E = {};
      class c extends (t = i.ZP.Store) {
        getSimilarGames(e) {
          return E[e];
        }
      }
      (r = "GameProfileStore"),
        (l = "displayName") in (n = c)
          ? Object.defineProperty(n, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[l] = r),
        (s.Z = new c(o.Z, {
          GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function (e) {
            let { applicationId: s, games: a } = e;
            E[s] = a;
          },
        }));
    },
    96856: function (e, s, a) {
      a.d(s, {
        p: function () {
          return l;
        },
      });
      let n = (0, a(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function l(e) {
        let s =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { enabled: a } = n.useExperiment(
            { location: e },
            { autoTrackExposure: s },
          );
        return a;
      }
    },
    567409: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return d;
        },
      }),
        a(47120);
      var n = a(470079),
        l = a(392711),
        r = a.n(l),
        t = a(876215),
        i = a(442837),
        o = a(146282),
        E = a(897674),
        c = a(709054),
        _ = a(206583);
      let I = new Set([t.s.PLAYED_GAME]),
        u = (e) => I.has(e.content_type);
      function d() {
        let e = (0, E.Z)(_.YN.GAME_PROFILE_FEED),
          s = (0, E.Z)(_.YN.GLOBAL_FEED),
          a = n.useMemo(
            () =>
              r()(s)
                .unionBy(e, (e) => e.id)
                .filter(u)
                .orderBy((e) => c.default.extractTimestamp(e.id), "desc")
                .uniqWith(
                  (e, s) =>
                    e.author_id === s.author_id &&
                    e.extra.application_id === s.extra.application_id,
                )
                .value(),
            [e, s],
          );
        return {
          requestId: (0, i.e7)([o.Z], () =>
            o.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED),
          ),
          entries: a,
        };
      }
    },
    289538: function (e, s, a) {
      a.d(s, {
        D: function () {
          return _;
        },
      });
      var n = a(735250),
        l = a(470079),
        r = a(481060),
        t = a(184301),
        i = a(103575),
        o = a(5192),
        E = a(689938),
        c = a(186426);
      function _(e) {
        let { user: s, channel: a } = e,
          { nick: _, avatar: I } = l.useMemo(() => {
            let e =
              null == s
                ? void 0
                : s.getAvatarURL(null == a ? void 0 : a.guild_id, 48, !1);
            return {
              nick: o.ZP.getName(
                null == a ? void 0 : a.guild_id,
                null == a ? void 0 : a.id,
                s,
              ),
              avatar: e,
            };
          }, [s, a]);
        return (0, n.jsx)(r.Popout, {
          preload: () => (0, t.Z)(s.id, I),
          renderPopout: (e) =>
            (0, n.jsx)(i.Z, {
              ...e,
              location: "GameProfileEntry",
              userId: s.id,
            }),
          children: (e) =>
            (0, n.jsx)(r.Clickable, {
              ...e,
              children: (0, n.jsx)("img", {
                className: c.avatar,
                src: I,
                alt: E.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({
                  userName: _,
                }),
              }),
            }),
        });
      }
    },
    124030: function (e, s, a) {
      a.d(s, {
        A: function () {
          return t;
        },
        L: function () {
          return r;
        },
      });
      var n = a(433517);
      let l = "GameFollowSurveyModal";
      function r() {
        var e;
        return (
          (null === (e = n.K.get(l)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function t() {
        return n.K.set(l, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, s, a) {
      a(47120);
      var n = a(735250),
        l = a(470079),
        r = a(120356),
        t = a.n(r),
        i = a(512722),
        o = a.n(i),
        E = a(442837),
        c = a(481060),
        _ = a(493683),
        I = a(220779),
        u = a(142550),
        d = a(201133),
        A = a(693824),
        R = a(919394),
        N = a(91140),
        O = a(297781),
        T = a(359110),
        m = a(592125),
        L = a(944486),
        g = a(594174),
        M = a(5192),
        P = a(810568),
        S = a(289538),
        G = a(689938),
        f = a(255341),
        C = a(707443);
      let v = (e) => {
        let { entry: s, setGeneratedImage: a, nickName: r } = e,
          [i, E] = l.useState();
        return (
          l.useEffect(() => {
            (async () => {
              let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
                n = m.Z.getChannel(e);
              o()(null != n, "DM channel cannot be null");
              let l = await (0, R.QC)(s, n, A.kH.Base64),
                r = await (0, R.QC)(s, n, A.kH.CloudUpload);
              E(l), a(r);
            })();
          }, [s, a]),
          (0, n.jsxs)("div", {
            className: f.reactReplyPreviewWrapper,
            children: [
              (0, n.jsx)("div", {
                className: t()(f.placeholderImage, null != i && f.in),
              }),
              null != i &&
                (0, n.jsx)("img", {
                  className: f.reactReplyPreview,
                  src: i,
                  alt: G.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
                    userName: r,
                    gameName: s.extra.game_name,
                  }),
                }),
            ],
          })
        );
      };
      s.Z = (e) => {
        let { entry: s, viewId: a, style: r = {}, onClose: i } = e,
          A = (0, E.e7)([L.Z, m.Z], () => m.Z.getChannel(L.Z.getChannelId())),
          R = (0, E.e7)([g.default], () => g.default.getUser(s.author_id)),
          h = l.useMemo(
            () =>
              M.ZP.getName(
                null == A ? void 0 : A.guild_id,
                null == A ? void 0 : A.id,
                R,
              ),
            [R, A],
          ),
          [x, p] = l.useState();
        return null == R
          ? null
          : (0, n.jsxs)("div", {
              className: f.profileEntryCard,
              style: r,
              children: [
                (0, n.jsxs)("div", {
                  className: t()(C.row, C.gapSm),
                  style: r,
                  children: [
                    (0, n.jsx)(S.D, { user: R, channel: A }),
                    (0, n.jsx)(c.Spacer, { size: 10 }),
                    (0, n.jsx)("div", {
                      className: t()(f.playerInfo),
                      children: (0, n.jsxs)("div", {
                        className: t()(C.column, C.gapXs),
                        children: [
                          (0, n.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-primary",
                            lineClamp: 1,
                            children: h,
                          }),
                          (0, n.jsx)(O.Gk, {
                            location: O.Gt.GAME_PROFILE,
                            children: N.W.map((e, a) =>
                              (0, n.jsx)(e, { entry: s }, a),
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: f.reactions,
                  children: (0, n.jsx)(I.ZP, {
                    showReply: !0,
                    showReact: !1,
                    onInteraction: async (e) => {
                      let { interactionType: n, reply: l } = e;
                      if (
                        (n === u.L.ReplyBegin &&
                          (0, P.UE)({
                            action: P.as.ClickMessageUser,
                            applicationId: s.extra.application_id,
                            gameName: s.extra.game_name,
                            recipientUserId: s.author_id,
                            viewId: a,
                          }),
                        n === u.L.ReplySubmit)
                      ) {
                        (0, P.UE)({
                          action: P.as.SendMessageUser,
                          applicationId: s.extra.application_id,
                          gameName: s.extra.game_name,
                          recipientUserId: s.author_id,
                          viewId: a,
                        });
                        let e = await _.Z.getOrEnsurePrivateChannel(
                            s.author_id,
                          ),
                          n = m.Z.getChannel(e);
                        o()(
                          null != n,
                          "GameProfile ReactReply - DM channel cannot be null",
                        ),
                          o()(
                            null != x,
                            "GameProfile ReactReply - Reaction Image cannot be null",
                          ),
                          (0, d.B)({
                            file: x,
                            channel: n,
                            altText: "",
                            reply: null != l ? l : "",
                          }),
                          i(),
                          (0, T.Kh)(n.id);
                      }
                    },
                    popoutProps: {
                      popoutBody: (0, n.jsx)(v, {
                        entry: s,
                        setGeneratedImage: p,
                        nickName: h,
                      }),
                      replyHeaderText: "",
                      replyPlaceholder: G.Z.Messages.QUICK_DM_USER.format({
                        name: h,
                      }),
                    },
                  }),
                }),
              ],
            });
      };
    },
    183391: function (e, s, a) {
      a(47120);
      var n = a(735250),
        l = a(470079),
        r = a(120356),
        t = a.n(r),
        i = a(643872),
        o = a(481060),
        E = a(570140),
        c = a(652898),
        _ = a(93093),
        I = a(768581),
        u = a(810568),
        d = a(981631),
        A = a(689938),
        R = a(707443);
      let N = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
        O = (e) => {
          let { invite: s, trackClick: a } = e,
            { approximate_member_count: l, guild: r } = s;
          if (null == r) return null;
          let i = _.Z.isMember(r.id);
          if (
            !(null == r ? void 0 : r.features.includes("VERIFIED")) &&
            !(null == r ? void 0 : r.features.includes("PARTNER"))
          )
            return null;
          let c = I.ZP.getGuildIconURL({ id: r.id, icon: r.icon, size: 32 });
          return (0, n.jsxs)("div", {
            className: t()(R.column),
            children: [
              (0, n.jsx)(o.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, n.jsxs)("div", {
                className: t()(R.row, R.gapMd),
                children: [
                  (0, n.jsx)("img", {
                    className: R.icon,
                    src: c,
                    alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: r.name,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: t()(R.gapNone),
                    children: [
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: r.name,
                      }),
                      null != l &&
                        (0, n.jsx)(o.Text, {
                          variant: "text-xxs/normal",
                          children:
                            A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                              { count: l },
                            ),
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(o.Button, {
                color: o.ButtonColors.PRIMARY,
                onClick: () => {
                  a(u.as.JoinOfficialServer),
                    E.Z.dispatch({
                      type: "INVITE_MODAL_OPEN",
                      invite: s,
                      code: s.code,
                      context: d.IlC.APP,
                    });
                },
                children: i
                  ? A.Z.Messages.JOINED_GUILD
                  : A.Z.Messages.JOIN_GUILD,
              }),
            ],
          });
        };
      s.Z = (e) => {
        let { websites: s, trackClick: a } = e,
          r =
            null == s
              ? void 0
              : s.find((e) => {
                  let { category: s } = e;
                  return s === i.p.DISCORD;
                }),
          [E, _] = l.useState();
        if (
          (l.useEffect(() => {
            let e = async (e) => {
              let s = e.split("/").pop();
              if (null != s) {
                let e = await (0, c.Z)(s);
                !0 !== e.banned && _(e.invite);
              }
            };
            null != r && e(r.url);
          }, [r]),
          null == s || 0 === s.length)
        )
          return null;
        let I = s
          .filter((e) => {
            let { category: s } = e;
            return N.includes(s);
          })
          .sort((e, s) => e.category - s.category);
        return (0, n.jsxs)("div", {
          className: t()(R.column),
          children: [
            null != E && (0, n.jsx)(O, { invite: E, trackClick: a }),
            (0, n.jsxs)("div", {
              className: t()(R.column, R.gapSm),
              children: [
                (0, n.jsx)(o.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: A.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, n.jsx)("div", {
                  className: R.row,
                  children: I.map((e) => {
                    let s,
                      l,
                      { category: r, url: t } = e,
                      E = null;
                    switch (r) {
                      case i.p.OFFICIAL:
                        (E = (0, n.jsx)(o.GlobeEarthIcon, {
                          colorClass: R.linkIcon,
                        })),
                          (l = u.as.WebsiteLink),
                          (s = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case i.p.TWITTER:
                        (E = (0, n.jsx)(o.XNeutralIcon, {
                          colorClass: R.linkIcon,
                        })),
                          (l = u.as.XLink),
                          (s = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case i.p.YOUTUBE:
                        (l = u.as.YouTubeLink),
                          (E = (0, n.jsx)(o.YoutubeNeutralIcon, {
                            colorClass: R.linkIcon,
                          })),
                          (s = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != E
                      ? (0, n.jsx)(
                          o.Anchor,
                          {
                            className: R.linkAnchor,
                            title: s,
                            href: t,
                            onClick: () => {
                              a(l);
                            },
                            target: "_blank",
                            children: E,
                          },
                          t,
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
    644941: function (e, s, a) {
      a.r(s), a(47120), a(653041);
      var n = a(735250),
        l = a(470079),
        r = a(120356),
        t = a.n(r),
        i = a(512722),
        o = a.n(i),
        E = a(913527),
        c = a.n(E),
        _ = a(758713),
        I = a(705512),
        u = a(442837),
        d = a(433517),
        A = a(481060),
        R = a(224706),
        N = a(812206),
        O = a(168551),
        T = a(485267),
        m = a(26033),
        L = a(561308),
        g = a(669764),
        M = a(962250),
        P = a(706454),
        S = a(768581),
        G = a(814225),
        f = a(709054),
        C = a(810568),
        v = a(998058),
        h = a(839392),
        x = a(96856),
        p = a(567409),
        Z = a(774073),
        K = a(124030),
        D = a(383895),
        j = a(183391),
        F = a(206583),
        B = a(689938),
        U = a(707443);
      let w = "GameProfileModal",
        y = (e) => {
          let { game: s, onClose: a, trackClick: l } = e,
            r = (0, u.e7)([N.Z], () => {
              var e;
              return N.Z.getApplication(
                null !== (e = null == s ? void 0 : s.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == s) return null;
          let t = s.coverImageUrl;
          return (0, n.jsx)(A.Tooltip, {
            text: s.name,
            children: (e) => {
              var i;
              return (0, n.jsx)(A.Clickable, {
                ...e,
                className: U.clickable,
                onClick: async () => {
                  l(C.as.ClickSimilarGame, s.applicationId),
                    (0, A.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, n.jsx)(Y, {
                          applicationId: s.applicationId,
                          source: C.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    a();
                },
                children: (0, n.jsx)("img", {
                  src: t,
                  className: U.similarGames,
                  alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (i = null == r ? void 0 : r.name) && void 0 !== i
                        ? i
                        : null == s
                          ? void 0
                          : s.name,
                  }),
                }),
              });
            },
          });
        },
        b = () =>
          (0, n.jsxs)("div", {
            className: U.gameBadge,
            children: [
              (0, n.jsx)(A.FireIcon, { size: "xxs" }),
              (0, n.jsx)(A.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        Q = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
        k = (e) => {
          let { platforms: s } = e,
            a = [...new Set(s)];
          !a.includes(_.z.DESKTOP) &&
            (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) &&
            a.push(_.z.DESKTOP);
          let l = (a = a.filter((e) => Q.includes(e))).map((e) => {
            switch (e) {
              case _.z.DESKTOP:
                return (0, n.jsx)(A.ScreenIcon, { size: "xs" }, e);
              case _.z.XBOX:
                return (0, n.jsx)(A.XboxNeutralIcon, { size: "xs" }, e);
              case _.z.PLAYSTATION:
                return (0, n.jsx)(A.PlaystationNeutralIcon, { size: "xs" }, e);
              case _.z.NINTENDO:
                return (0, n.jsx)(
                  A.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, n.jsxs)("div", {
            className: t()(U.row, U.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, n.jsx)(A.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              l,
            ],
          });
        },
        H = (e) => e.filter(Z.z6).slice(0, 5),
        Y = (e) => {
          var s, r;
          let {
              applicationId: i,
              source: E,
              sourceUserId: _,
              transitionState: Q,
              onClose: Y,
            } = e,
            { clientThemesClassName: W } = (0, O.ZP)(),
            { width: z, height: V } = (0, M.b)(),
            [X, J] = l.useState(() => {
              var e;
              return null === (e = d.K.get(w)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, u.e7)([P.default], () => P.default.locale),
            [$, ee] = l.useState(!0),
            [es, ea] = l.useState(!1),
            en = l.useRef(null),
            el = l.useMemo(() => (0, C.fP)(), []);
          l.useEffect(() => {
            let e = en.current;
            null != e && ea(e.scrollHeight - e.clientHeight > 1);
          }, [en, z, V]),
            l.useEffect(() => {
              (0, T.Jn)();
            }, []);
          let er = (0, u.Wu)([h.Z], () => {
              var e;
              return (
                null !== (e = h.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            et = (0, u.Wu)([g.Z], () =>
              er
                .map((e) => g.Z.getGame(e))
                .filter(Z.W1)
                .slice(0, 5),
            ),
            ei = l.useRef([]);
          l.useEffect(() => {
            ei.current = er;
          }, [er]);
          let { entries: eo } = (0, p.Z)(),
            eE = l.useMemo(() => {
              var e;
              return null !==
                (e =
                  null == eo
                    ? void 0
                    : eo.filter(
                        (e) => (0, m.dX)(e) && e.extra.application_id === i,
                      )) && void 0 !== e
                ? e
                : [];
            }, [eo, i]),
            ec = eE.length > 7,
            [e_, eI] = l.useState(!1);
          l.useEffect(() => {
            var e, s;
            return (
              (0, C.IS)({
                source: E,
                viewId: el,
                applicationId: i,
                gameName:
                  null !==
                    (s =
                      null !== (e = null == ed ? void 0 : ed.name) &&
                      void 0 !== e
                        ? e
                        : null == eu
                          ? void 0
                          : eu.name) && void 0 !== s
                    ? s
                    : "",
                authorId: _,
              }),
              () => {
                var e, s;
                let a = Date.now(),
                  n = eE.map((e) => {
                    let s = (0, L.kr)(e) ? (0, L.T_)(e, a) : (0, L.GL)(e, q);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: s,
                    });
                  });
                (0, C.wz)({
                  viewId: el,
                  applicationId: i,
                  gameName:
                    null !==
                      (s =
                        null !== (e = null == ed ? void 0 : ed.name) &&
                        void 0 !== e
                          ? e
                          : null == eu
                            ? void 0
                            : eu.name) && void 0 !== s
                      ? s
                      : "",
                  playedFriendIds: eE.map((e) => e.author_id),
                  playedFriendsData: n,
                  similarGames: H(ei.current),
                });
              }
            );
          }, []),
            l.useEffect(() => {
              0 === er.length && (0, v.i)(i);
            }, [i, er]),
            l.useEffect(() => {
              R.Z.getDetectableGamesSupplemental([i, ...er]);
            }, [i, er]);
          let eu = N.Z.getApplication(i),
            ed = (0, u.e7)([g.Z], () => g.Z.getGame(i)),
            eA = l.useMemo(
              () => (null == ed ? void 0 : ed.genres.map(G.P3).join(", ")),
              [ed],
            ),
            eR = l.useMemo(() => {
              if (null == ed) return "";
              let { artwork: e, screenshots: s } = ed;
              if (e.length > 0) {
                let s = Math.floor(Math.random() * (e.length - 1));
                return e[s];
              }
              if (s.length > 0) {
                let e = Math.floor(Math.random() * (s.length - 1));
                return s[e];
              }
              return "";
            }, [ed]),
            eN = l.useMemo(() => {
              var e, s;
              let a = (
                null !== (e = null == ed ? void 0 : ed.artwork) && void 0 !== e
                  ? e
                  : []
              ).map((e) => ({ src: e }));
              return [
                ...(null !== (s = null == ed ? void 0 : ed.screenshots) &&
                void 0 !== s
                  ? s
                  : []
                ).map((e) => ({ src: e })),
                ...a,
              ];
            }, [
              null == ed ? void 0 : ed.artwork,
              null == ed ? void 0 : ed.screenshots,
            ]),
            eO = (e, s) => {
              (0, C.UE)({
                gameName: null != eL ? eL : "",
                applicationId: i,
                action: e,
                similarGameId: s,
                viewId: el,
              });
            },
            eT = (0, x.p)("GameProfileModal"),
            { shouldOpenGameProfile: em } = (0, Z.ZP)({
              location: "GameProfileModal",
              applicationId: i,
              trackEntryPointImpression: !1,
            });
          if (
            (o()(
              em,
              "Game Profile was opened when it thinks it shouldn't have been.  Make sure to use `useShouldOpenGameProfileModal` before calling `openGameProfileModal`",
            ),
            null == ed)
          )
            return null;
          let eL =
              null !== (s = ed.name) && void 0 !== s
                ? s
                : null == eu
                  ? void 0
                  : eu.name,
            eg =
              null == eu ? void 0 : eu.getIconURL(160, S.$k ? "webp" : "png"),
            eM = null !== (r = ed.coverImageUrl) && void 0 !== r ? r : eg,
            { summary: eP, websites: eS, publishers: eG, platforms: ef } = ed,
            eC = f.default.extractTimestamp(i),
            ev = c()().diff(c()(eC), "days") <= F.G,
            eh = eE.some((e) => (0, L.ig)(e) === I.o.GLOBAL);
          return (0, n.jsx)(A.ModalRoot, {
            transitionState: Q,
            size: A.ModalSize.DYNAMIC,
            className: t()(W, U.gameProfileModal),
            children: (0, n.jsxs)(A.ScrollerNone, {
              className: U.scrollable,
              children: [
                (0, n.jsx)("div", {
                  className: t()(U.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eR, '")') },
                }),
                (0, n.jsxs)("div", {
                  className: t()(U.content, U.column, U.headerInfo),
                  children: [
                    (0, n.jsx)("div", {
                      className: U.logoWrapper,
                      children:
                        null != eM &&
                        (0, n.jsx)("img", {
                          className: U.logo,
                          src: eM,
                          alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: eL,
                          }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                      className: t()(U.row, U.gapSm, U.gameDetails),
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(A.Heading, {
                              variant: "heading-xl/bold",
                              children: eL,
                            }),
                            (0, n.jsxs)("div", {
                              className: t()(U.row, U.gapSm),
                              children: [
                                null != eg &&
                                  (0, n.jsx)("img", {
                                    src: eg,
                                    height: 16,
                                    alt: B.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eL },
                                    ),
                                  }),
                                (0, n.jsx)(A.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eA,
                                }),
                                ev &&
                                  (0, n.jsx)(A.Text, {
                                    variant: "eyebrow",
                                    className: U.newBadge,
                                    children: B.Z.Messages.NEW,
                                  }),
                                eh &&
                                  (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)(A.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, n.jsx)(b, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          children:
                            eT &&
                            (0, n.jsx)(A.Tooltip, {
                              text: X
                                ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : B.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, n.jsxs)(A.Button, {
                                  ...e,
                                  innerClassName: U.followButton,
                                  color: X
                                    ? A.Button.Colors.PRIMARY
                                    : A.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let s =
                                      null !== (e = d.K.get(w)) && void 0 !== e
                                        ? e
                                        : {};
                                    (s[i] = !s[i]),
                                      d.K.set(w, s),
                                      eO(
                                        s[i]
                                          ? C.as.FollowGame
                                          : C.as.UnfollowGame,
                                      ),
                                      s[i] &&
                                        (0, K.L)() &&
                                        (0, A.openModalLazy)(async () => {
                                          let { default: e } = await a
                                            .e("86564")
                                            .then(a.bind(a, 641758));
                                          return (s) =>
                                            (0, n.jsx)(e, {
                                              ...s,
                                              applicationId: i,
                                              background: eR,
                                              viewId: el,
                                            });
                                        }),
                                      J(s[i]);
                                  },
                                  children: [
                                    X
                                      ? (0, n.jsx)(A.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, n.jsx)(A.BellIcon, {
                                          color: "white",
                                        }),
                                    X
                                      ? B.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME
                                      : B.Z.Messages.FOLLOW,
                                  ],
                                }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(A.HeadingLevel, {
                  children: (0, n.jsxs)("div", {
                    className: t()(U.content, U.mainContent),
                    children: [
                      (0, n.jsxs)("div", {
                        className: U.column,
                        children: [
                          (0, n.jsx)(A.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              B.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, n.jsxs)("div", {
                            className: t()(U.section, {
                              [U.fadedEntries]: ec && !e_,
                            }),
                            children: [
                              0 === eE.length &&
                                (0, n.jsx)(A.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: U.emptyFriendsWhoPlay,
                                  children:
                                    B.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, n.jsx)("div", {
                                className: t()(U.column, U.gapNone),
                                children:
                                  null == eE
                                    ? void 0
                                    : eE
                                        .slice(0, ec && !e_ ? 6 : void 0)
                                        .map((e) =>
                                          (0, n.jsx)(
                                            D.Z,
                                            {
                                              entry: e,
                                              viewId: el,
                                              onClose: Y,
                                            },
                                            e.id,
                                          ),
                                        ),
                              }),
                            ],
                          }),
                          ec &&
                            !e_ &&
                            (0, n.jsxs)(A.Clickable, {
                              className: U.expandEntriesButton,
                              onClick: () => eI(!0),
                              children: [
                                (0, n.jsx)(A.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    B.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, n.jsx)(A.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          eN.length > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(A.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    B.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, n.jsx)(A.Scroller, {
                                  style: { overflowY: "visible" },
                                  className: t()(U.row, U.imageScroller),
                                  orientation: "horizontal",
                                  children: eN.map((e, s) =>
                                    (0, n.jsx)(
                                      A.Clickable,
                                      {
                                        className: U.clickable,
                                        onClick: () => {
                                          eO(C.as.ClickImage),
                                            (0, A.openModalLazy)(async () => {
                                              let { default: e } = await a
                                                .e("99857")
                                                .then(a.bind(a, 895023));
                                              return (a) => {
                                                let { ...l } = a;
                                                return (0, n.jsx)(e, {
                                                  className: U.mediaModal,
                                                  ...l,
                                                  items: eN,
                                                  startingIndex: s,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, n.jsx)("img", {
                                          src: e.src,
                                          className: U.gameArtwork,
                                          alt: B.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eL },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          et.length > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(A.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    B.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, n.jsx)("div", {
                                  className: U.row,
                                  style: {},
                                  children: et.map((e) =>
                                    (0, n.jsx)(
                                      y,
                                      { game: e, onClose: Y, trackClick: eO },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: t()(U.sidebar, U.column),
                        children: [
                          (0, n.jsx)(A.Heading, {
                            variant: "heading-md/bold",
                            children: B.Z.Messages.ABOUT,
                          }),
                          (0, n.jsxs)("div", {
                            className: U.sidebarSections,
                            children: [
                              null != eP &&
                                (0, n.jsxs)("div", {
                                  className: t()(U.column, U.gapSm),
                                  children: [
                                    (0, n.jsx)(A.Text, {
                                      ref: en,
                                      lineClamp: $ ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eP,
                                    }),
                                    (es || !$) &&
                                      (0, n.jsx)(A.Clickable, {
                                        className: U.clickable,
                                        onClick: () => {
                                          eO($ ? C.as.ShowMore : C.as.ShowLess),
                                            ee(!$);
                                        },
                                        children: (0, n.jsx)(A.Text, {
                                          variant: "text-sm/semibold",
                                          children: $
                                            ? B.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_MORE
                                            : B.Z.Messages
                                                .EXPANDABLE_TEXT_SHOW_LESS,
                                        }),
                                      }),
                                  ],
                                }),
                              (0, n.jsx)(j.Z, { websites: eS, trackClick: eO }),
                              (eG.length > 0 || ef.length > 0) &&
                                (0, n.jsx)("div", {
                                  className: t()(U.column),
                                  children:
                                    eG.length > 0 &&
                                    (0, n.jsxs)("div", {
                                      className: t()(U.column, U.gapSm),
                                      children: [
                                        (0, n.jsx)(A.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            B.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, n.jsxs)("div", {
                                          className: t()(U.row, U.gapMd),
                                          children: [
                                            (0, n.jsx)(A.Text, {
                                              variant: "text-sm/normal",
                                              children: eG.join(", "),
                                            }),
                                            ef.length > 0 &&
                                              (0, n.jsx)(k, { platforms: ef }),
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
      s.default = Y;
    },
    962250: function (e, s, a) {
      a.d(s, {
        b: function () {
          return l;
        },
      }),
        a(47120);
      var n = a(470079);
      function l() {
        var e, s;
        let [a, l] = n.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (s = window.innerHeight) && void 0 !== s ? s : 1080,
        });
        return (
          n.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              l({ width: e, height: window.innerHeight });
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
    814225: function (e, s, a) {
      a.d(s, {
        P3: function () {
          return I;
        },
        ZK: function () {
          return _;
        },
        en: function () {
          return d;
        },
      }),
        a(757143),
        a(47120);
      var n = a(913527),
        l = a.n(n);
      if (12633 == a.j) var r = a(266067);
      a(358085), a(73346);
      var t = a(981631),
        i = a(689938);
      let o = {},
        E = {},
        c = Object.freeze({ ALL: -1, ...t.EKQ });
      function _(e) {
        let s = (0, r.LX)(e, {
          path: t.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != s ? s.params.skuId : null;
      }
      function I(e) {
        switch (e) {
          case t.EKQ.ACTION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
          case t.EKQ.ACTION_RPG:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
          case t.EKQ.BRAWLER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
          case t.EKQ.HACK_AND_SLASH:
            return i.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
          case t.EKQ.PLATFORMER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
          case t.EKQ.STEALTH:
            return i.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
          case t.EKQ.SURVIVAL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
          case t.EKQ.ADVENTURE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
          case t.EKQ.ACTION_ADVENTURE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
          case t.EKQ.METROIDVANIA:
            return i.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
          case t.EKQ.OPEN_WORLD:
            return i.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
          case t.EKQ.PSYCHOLOGICAL_HORROR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
          case t.EKQ.SANDBOX:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
          case t.EKQ.SURVIVAL_HORROR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
          case t.EKQ.VISUAL_NOVEL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
          case t.EKQ.DRIVING_RACING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
          case t.EKQ.VEHICULAR_COMBAT:
            return i.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
          case t.EKQ.MASSIVELY_MULTIPLAYER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
          case t.EKQ.MMORPG:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
          case t.EKQ.ROLE_PLAYING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
          case t.EKQ.DUNGEON_CRAWLER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
          case t.EKQ.ROGUELIKE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
          case t.EKQ.SHOOTER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
          case t.EKQ.LIGHT_GUN:
            return i.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
          case t.EKQ.SHOOT_EM_UP:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
          case t.EKQ.FPS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FPS;
          case t.EKQ.DUAL_JOYSTICK_SHOOTER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
          case t.EKQ.SIMULATION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
          case t.EKQ.FLIGHT_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
          case t.EKQ.TRAIN_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
          case t.EKQ.LIFE_SIMULATOR:
            return i.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
          case t.EKQ.FISHING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
          case t.EKQ.SPORTS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
          case t.EKQ.BASEBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
          case t.EKQ.BASKETBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
          case t.EKQ.BILLIARDS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
          case t.EKQ.BOWLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
          case t.EKQ.BOXING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
          case t.EKQ.FOOTBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
          case t.EKQ.GOLF:
            return i.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
          case t.EKQ.HOCKEY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
          case t.EKQ.SKATEBOARDING_SKATING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
          case t.EKQ.SNOWBOARDING_SKIING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
          case t.EKQ.SOCCER:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
          case t.EKQ.TRACK_FIELD:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
          case t.EKQ.SURFING_WAKEBOARDING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
          case t.EKQ.WRESTLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
          case t.EKQ.STRATEGY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
          case t.EKQ.FOUR_X:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
          case t.EKQ.ARTILLERY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
          case t.EKQ.RTS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_RTS;
          case t.EKQ.TOWER_DEFENSE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
          case t.EKQ.TURN_BASED_STRATEGY:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
          case t.EKQ.WARGAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
          case t.EKQ.MOBA:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
          case t.EKQ.FIGHTING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
          case t.EKQ.PUZZLE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
          case t.EKQ.CARD_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
          case t.EKQ.EDUCATION:
            return i.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
          case t.EKQ.FITNESS:
            return i.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
          case t.EKQ.GAMBLING:
            return i.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
          case t.EKQ.MUSIC_RHYTHM:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
          case t.EKQ.PARTY_MINI_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
          case t.EKQ.PINBALL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
          case t.EKQ.TRIVIA_BOARD_GAME:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
          case t.EKQ.TACTICAL:
            return i.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
          case t.EKQ.INDIE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
          case t.EKQ.ARCADE:
            return i.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
          case t.EKQ.POINT_AND_CLICK:
            return i.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
          default:
            return i.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
        }
      }
      Object.keys(c).forEach((e) => {
        let s = e.toLowerCase().replace(/_/g, "-"),
          a = c[e];
        (o[s] = a), (E[a] = s);
      });
      let u = [
        ["YYYY-MM-DD", "MMMM DD, Y"],
        ["YYYY-MM", "MMMM Y"],
        ["MM-DD", "MMMM DD"],
        ["MM", "MMMM"],
        ["YYYY", "Y"],
      ];
      function d(e) {
        let { preorderReleaseAt: s, preorderApproximateReleaseDate: a } = e;
        if (null != s) return s.format("MMMM DD");
        if (null == a) return null;
        for (let e = 0; e < u.length; e++) {
          let [s, n] = u[e],
            r = l()(a, s, !0);
          if (r.isValid()) return r.format(n);
        }
        return a;
      }
    },
    643872: function (e, s, a) {
      var n, l;
      a.d(s, {
        p: function () {
          return n;
        },
      }),
        ((l = n || (n = {}))[(l.OFFICIAL = 1)] = "OFFICIAL"),
        (l[(l.WIKIA = 2)] = "WIKIA"),
        (l[(l.WIKIPEDIA = 3)] = "WIKIPEDIA"),
        (l[(l.FACEBOOK = 4)] = "FACEBOOK"),
        (l[(l.TWITTER = 5)] = "TWITTER"),
        (l[(l.TWITCH = 6)] = "TWITCH"),
        (l[(l.INSTAGRAM = 8)] = "INSTAGRAM"),
        (l[(l.YOUTUBE = 9)] = "YOUTUBE"),
        (l[(l.IPHONE = 10)] = "IPHONE"),
        (l[(l.IPAD = 11)] = "IPAD"),
        (l[(l.ANDROID = 12)] = "ANDROID"),
        (l[(l.STEAM = 13)] = "STEAM"),
        (l[(l.REDDIT = 14)] = "REDDIT"),
        (l[(l.ITCH = 15)] = "ITCH"),
        (l[(l.EPICGAMES = 16)] = "EPICGAMES"),
        (l[(l.GOG = 17)] = "GOG"),
        (l[(l.DISCORD = 18)] = "DISCORD");
    },
    186426: function (e, s, a) {
      e.exports = { avatar: "avatar_f24497" };
    },
    255341: function (e, s, a) {
      e.exports = {
        profileEntryCard: "profileEntryCard_f1257c",
        reactions: "reactions_f1257c",
        playerInfo: "playerInfo_f1257c",
        reactReplyPreviewWrapper: "reactReplyPreviewWrapper_f1257c",
        reactReplyPreview: "reactReplyPreview_f1257c",
        placeholderImage: "placeholderImage_f1257c",
        in: "in_f1257c",
      };
    },
    707443: function (e, s, a) {
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
        similarGames: "similarGames_e881fc",
      };
    },
  },
]);
//# sourceMappingURL=6fec686b15b91b37294d.js.map
