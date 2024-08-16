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
        r = a(688619),
        l = a.n(r),
        t = a(979590),
        i = a.n(t),
        o = a(442837),
        E = a(866442),
        c = a(607070),
        _ = a(220082),
        u = a(981631);
      let I = (e, s) => {
          let a = c.Z.desaturateUserColors ? c.Z.saturation : 1,
            n = _.SR.getState().palette[e],
            r =
              null == n
                ? void 0
                : n.map((e) => {
                    let [s, n, r] = e,
                      { h: l, s: t, l: o } = i()({ r: s, g: n, b: r }).toHsl();
                    return i()({ h: l, s: t * a, l: o }).toHexString();
                  });
          return null != r ? r : [s, s];
        },
        d = (e) => {
          var s, n, r, t, i, o;
          let _;
          _ = a(481060).tokens;
          let d = c.Z.saturation,
            [A, R] = I(
              e,
              null !==
                (o =
                  null == _
                    ? void 0
                    : null === (i = _.colors) || void 0 === i
                      ? void 0
                      : null === (t = i.BACKGROUND_FLOATING) || void 0 === t
                        ? void 0
                        : null === (r = t.resolve) || void 0 === r
                          ? void 0
                          : null ===
                                (n = r.call(t, {
                                  theme: u.BRd.DARK,
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
            N = l()(N).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, E.Bd)(O) >= 0.725); e++) {
            O = l()(O).darken(0.5).num();
          }
          let T = (0, E.Rf)(N);
          return { primaryColor: T, secondaryColor: (0, E.Rf)(O) };
        };
      s.Z = (e) => {
        var s, r, t, i, I, d;
        let A;
        A = a(481060).tokens;
        let R = (0, o.e7)([c.Z], () => c.Z.saturation),
          [N, O] = (0, _.Cf)(
            e,
            null !==
              (d =
                null == A
                  ? void 0
                  : null === (I = A.colors) || void 0 === I
                    ? void 0
                    : null === (i = I.BACKGROUND_FLOATING) || void 0 === i
                      ? void 0
                      : null === (t = i.resolve) || void 0 === t
                        ? void 0
                        : null ===
                              (r = t.call(i, {
                                theme: u.BRd.DARK,
                                saturation: R,
                              })) || void 0 === r
                          ? void 0
                          : null === (s = r.hex) || void 0 === s
                            ? void 0
                            : s.call(r)) && void 0 !== d
              ? d
              : "#000",
          );
        return n.useMemo(() => {
          let e = (0, E._i)(N),
            s = (0, E._i)(O);
          for (let s = 1; s < 8 && !((0, E.Bd)(e) >= 0.725); s++) {
            e = l()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, E.Bd)(s) >= 0.725); e++) {
            s = l()(s).darken(0.5).num();
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
        r = a(570140),
        l = a(881052),
        t = a(981631);
      let i = async (e) => {
        try {
          var s;
          let a = await n.tn.get({ url: t.ANM.SIMILAR_GAMES(e) }),
            l = (
              null !== (s = a.body.similar_games) && void 0 !== s ? s : []
            ).filter((s) => s !== e);
          r.Z.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: l,
          });
        } catch (e) {
          throw new l.Hx(e);
        }
      };
    },
    839392: function (e, s, a) {
      var n,
        r,
        l,
        t,
        i = a(442837),
        o = a(570140);
      let E = {};
      class c extends (t = i.ZP.Store) {
        getSimilarGames(e) {
          return E[e];
        }
      }
      (l = "GameProfileStore"),
        (r = "displayName") in (n = c)
          ? Object.defineProperty(n, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[r] = l),
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
          return r;
        },
      });
      let n = (0, a(818083).B)({
        kind: "user",
        id: "2024-08_game_follow_survey",
        label: "Game Follow Fake Door Survey",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
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
        r = a(392711),
        l = a.n(r),
        t = a(876215),
        i = a(442837),
        o = a(146282),
        E = a(897674),
        c = a(709054),
        _ = a(206583);
      let u = new Set([t.s.PLAYED_GAME]),
        I = (e) => u.has(e.content_type);
      function d() {
        let e = (0, E.Z)(_.YN.GAME_PROFILE_FEED),
          s = (0, E.Z)(_.YN.GLOBAL_FEED),
          a = n.useMemo(
            () =>
              l()(s)
                .unionBy(e, (e) => e.id)
                .filter(I)
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
        r = a(470079),
        l = a(481060),
        t = a(184301),
        i = a(103575),
        o = a(5192),
        E = a(689938),
        c = a(186426);
      function _(e) {
        let { user: s, channel: a } = e,
          { nick: _, avatar: u } = r.useMemo(() => {
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
        return (0, n.jsx)(l.Popout, {
          preload: () => (0, t.Z)(s.id, u),
          renderPopout: (e) =>
            (0, n.jsx)(i.Z, {
              ...e,
              location: "GameProfileEntry",
              userId: s.id,
            }),
          children: (e) =>
            (0, n.jsx)(l.Clickable, {
              ...e,
              children: (0, n.jsx)("img", {
                className: c.avatar,
                src: u,
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
          return l;
        },
      });
      var n = a(433517);
      let r = "GameFollowSurveyModal";
      function l() {
        var e;
        return (
          (null === (e = n.K.get(r)) || void 0 === e
            ? void 0
            : e.hasInteractedWithSurvey) !== !0
        );
      }
      function t() {
        return n.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, s, a) {
      a(47120);
      var n = a(735250),
        r = a(470079),
        l = a(120356),
        t = a.n(l),
        i = a(512722),
        o = a.n(i),
        E = a(442837),
        c = a(481060),
        _ = a(493683),
        u = a(220779),
        I = a(142550),
        d = a(201133),
        A = a(693824),
        R = a(919394),
        N = a(91140),
        O = a(297781),
        T = a(359110),
        m = a(592125),
        g = a(944486),
        L = a(594174),
        M = a(5192),
        P = a(810568),
        S = a(289538),
        G = a(689938),
        f = a(255341),
        C = a(707443);
      let h = (e) => {
        let { entry: s, setGeneratedImage: a, nickName: l } = e,
          [i, E] = r.useState();
        return (
          r.useEffect(() => {
            (async () => {
              let e = await _.Z.getOrEnsurePrivateChannel(s.author_id),
                n = m.Z.getChannel(e);
              o()(null != n, "DM channel cannot be null");
              let r = await (0, R.QC)(s, n, A.kH.Base64),
                l = await (0, R.QC)(s, n, A.kH.CloudUpload);
              E(r), a(l);
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
                    userName: l,
                    gameName: s.extra.game_name,
                  }),
                }),
            ],
          })
        );
      };
      s.Z = (e) => {
        let { entry: s, viewId: a, style: l = {}, onClose: i } = e,
          A = (0, E.e7)([g.Z, m.Z], () => m.Z.getChannel(g.Z.getChannelId())),
          R = (0, E.e7)([L.default], () => L.default.getUser(s.author_id)),
          v = r.useMemo(
            () =>
              M.ZP.getName(
                null == A ? void 0 : A.guild_id,
                null == A ? void 0 : A.id,
                R,
              ),
            [R, A],
          ),
          [x, p] = r.useState();
        return null == R
          ? null
          : (0, n.jsxs)("div", {
              className: f.profileEntryCard,
              style: l,
              children: [
                (0, n.jsxs)("div", {
                  className: t()(C.row, C.gapSm),
                  style: l,
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
                            children: v,
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
                  children: (0, n.jsx)(u.ZP, {
                    showReply: !0,
                    showReact: !1,
                    onInteraction: async (e) => {
                      let { interactionType: n, reply: r } = e;
                      if (
                        (n === I.L.ReplyBegin &&
                          (0, P.UE)({
                            action: P.as.ClickMessageUser,
                            applicationId: s.extra.application_id,
                            gameName: s.extra.game_name,
                            recipientUserId: s.author_id,
                            viewId: a,
                          }),
                        n === I.L.ReplySubmit)
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
                            reply: null != r ? r : "",
                          }),
                          i(),
                          (0, T.Kh)(n.id);
                      }
                    },
                    popoutProps: {
                      popoutBody: (0, n.jsx)(h, {
                        entry: s,
                        setGeneratedImage: p,
                        nickName: v,
                      }),
                      replyHeaderText: "",
                      replyPlaceholder: G.Z.Messages.QUICK_DM_USER.format({
                        name: v,
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
        r = a(470079),
        l = a(120356),
        t = a.n(l),
        i = a(643872),
        o = a(481060),
        E = a(570140),
        c = a(652898),
        _ = a(93093),
        u = a(768581),
        I = a(810568),
        d = a(981631),
        A = a(689938),
        R = a(707443);
      let N = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
        O = (e) => {
          let { invite: s, trackClick: a } = e,
            { approximate_member_count: r, guild: l } = s;
          if (null == l) return null;
          let i = _.Z.isMember(l.id);
          if (
            !(null == l ? void 0 : l.features.includes("VERIFIED")) &&
            !(null == l ? void 0 : l.features.includes("PARTNER"))
          )
            return null;
          let c = u.ZP.getGuildIconURL({ id: l.id, icon: l.icon, size: 32 });
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
                      guildName: l.name,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: t()(R.gapNone),
                    children: [
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: l.name,
                      }),
                      null != r &&
                        (0, n.jsx)(o.Text, {
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
              (0, n.jsx)(o.Button, {
                color: o.ButtonColors.PRIMARY,
                onClick: () => {
                  a(I.as.JoinOfficialServer),
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
          l =
            null == s
              ? void 0
              : s.find((e) => {
                  let { category: s } = e;
                  return s === i.p.DISCORD;
                }),
          [E, _] = r.useState();
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let s = e.split("/").pop();
              if (null != s) {
                let e = await (0, c.Z)(s);
                !0 !== e.banned && _(e.invite);
              }
            };
            null != l && e(l.url);
          }, [l]),
          null == s || 0 === s.length)
        )
          return null;
        let u = s
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
                  children: u.map((e) => {
                    let s,
                      r,
                      { category: l, url: t } = e,
                      E = null;
                    switch (l) {
                      case i.p.OFFICIAL:
                        (E = (0, n.jsx)(o.GlobeEarthIcon, {
                          colorClass: R.linkIcon,
                        })),
                          (r = I.as.WebsiteLink),
                          (s = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case i.p.TWITTER:
                        (E = (0, n.jsx)(o.XNeutralIcon, {
                          colorClass: R.linkIcon,
                        })),
                          (r = I.as.XLink),
                          (s = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case i.p.YOUTUBE:
                        (r = I.as.YouTubeLink),
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
                              a(r);
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
        r = a(470079),
        l = a(120356),
        t = a.n(l),
        i = a(512722),
        o = a.n(i),
        E = a(913527),
        c = a.n(E),
        _ = a(758713),
        u = a(705512),
        I = a(442837),
        d = a(433517),
        A = a(481060),
        R = a(224706),
        N = a(812206),
        O = a(168551),
        T = a(485267),
        m = a(26033),
        g = a(561308),
        L = a(669764),
        M = a(962250),
        P = a(706454),
        S = a(768581),
        G = a(814225),
        f = a(709054),
        C = a(810568),
        h = a(998058),
        v = a(839392),
        x = a(96856),
        p = a(567409),
        Z = a(774073),
        K = a(124030),
        D = a(383895),
        j = a(183391),
        F = a(206583),
        B = a(689938),
        w = a(707443);
      let U = "GameProfileModal",
        y = (e) => {
          let { game: s, onClose: a, trackClick: r } = e,
            l = (0, I.e7)([N.Z], () => {
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
                className: w.clickable,
                onClick: async () => {
                  r(C.as.ClickSimilarGame, s.applicationId),
                    (0, A.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, n.jsx)(W, {
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
                  className: w.similarGames,
                  alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (i = null == l ? void 0 : l.name) && void 0 !== i
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
        k = () =>
          (0, n.jsxs)("div", {
            className: w.gameBadge,
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
        b = (e) => {
          let { platforms: s } = e,
            a = [...new Set(s)];
          !a.includes(_.z.DESKTOP) &&
            (a.includes(_.z.MACOS) || a.includes(_.z.LINUX)) &&
            a.push(_.z.DESKTOP);
          let r = (a = a.filter((e) => Q.includes(e))).map((e) => {
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
            className: t()(w.row, w.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, n.jsx)(A.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              r,
            ],
          });
        },
        H = (e) => e.filter(Z.z6).slice(0, 5),
        W = (e) => {
          var s, l;
          let {
              applicationId: i,
              source: E,
              sourceUserId: _,
              transitionState: Q,
              onClose: W,
            } = e,
            { clientThemesClassName: Y } = (0, O.ZP)(),
            { width: z, height: V } = (0, M.b)(),
            [X, J] = r.useState(() => {
              var e;
              return null === (e = d.K.get(U)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, I.e7)([P.default], () => P.default.locale),
            [$, ee] = r.useState(!0),
            [es, ea] = r.useState(!1),
            en = r.useRef(null),
            er = r.useMemo(() => (0, C.fP)(), []);
          r.useEffect(() => {
            let e = en.current;
            null != e && ea(e.scrollHeight - e.clientHeight > 1);
          }, [en, z, V]),
            r.useEffect(() => {
              (0, T.Jn)();
            }, []);
          let el = (0, I.Wu)([v.Z], () => {
              var e;
              return (
                null !== (e = v.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            et = (0, I.Wu)([L.Z], () =>
              el
                .map((e) => L.Z.getGame(e))
                .filter(Z.W1)
                .slice(0, 5),
            ),
            ei = r.useRef([]);
          r.useEffect(() => {
            ei.current = el;
          }, [el]);
          let { entries: eo } = (0, p.Z)(),
            eE = r.useMemo(() => {
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
            [e_, eu] = r.useState(!1);
          r.useEffect(() => {
            var e, s;
            return (
              (0, C.IS)({
                source: E,
                viewId: er,
                applicationId: i,
                gameName:
                  null !==
                    (s =
                      null !== (e = null == ed ? void 0 : ed.name) &&
                      void 0 !== e
                        ? e
                        : null == eI
                          ? void 0
                          : eI.name) && void 0 !== s
                    ? s
                    : "",
                authorId: _,
              }),
              () => {
                var e, s;
                let a = Date.now(),
                  n = eE.map((e) => {
                    let s = (0, g.kr)(e) ? (0, g.T_)(e, a) : (0, g.GL)(e, q);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: s,
                    });
                  });
                (0, C.wz)({
                  viewId: er,
                  applicationId: i,
                  gameName:
                    null !==
                      (s =
                        null !== (e = null == ed ? void 0 : ed.name) &&
                        void 0 !== e
                          ? e
                          : null == eI
                            ? void 0
                            : eI.name) && void 0 !== s
                      ? s
                      : "",
                  playedFriendIds: eE.map((e) => e.author_id),
                  playedFriendsData: n,
                  similarGames: H(ei.current),
                });
              }
            );
          }, []),
            r.useEffect(() => {
              0 === el.length && (0, h.i)(i);
            }, [i, el]),
            r.useEffect(() => {
              R.Z.getDetectableGamesSupplemental([i, ...el]);
            }, [i, el]);
          let eI = N.Z.getApplication(i),
            ed = (0, I.e7)([L.Z], () => L.Z.getGame(i)),
            eA = r.useMemo(
              () => (null == ed ? void 0 : ed.genres.map(G.P3).join(", ")),
              [ed],
            ),
            eR = r.useMemo(() => {
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
            eN = r.useMemo(() => {
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
                gameName: null != eg ? eg : "",
                applicationId: i,
                action: e,
                similarGameId: s,
                viewId: er,
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
          let eg =
              null !== (s = ed.name) && void 0 !== s
                ? s
                : null == eI
                  ? void 0
                  : eI.name,
            eL =
              null == eI ? void 0 : eI.getIconURL(160, S.$k ? "webp" : "png"),
            eM = null !== (l = ed.coverImageUrl) && void 0 !== l ? l : eL,
            { summary: eP, websites: eS, publishers: eG, platforms: ef } = ed,
            eC = f.default.extractTimestamp(i),
            eh = c()().diff(c()(eC), "days") <= F.G,
            ev = eE.some((e) => (0, g.ig)(e) === u.o.GLOBAL);
          return (0, n.jsx)(A.ModalRoot, {
            transitionState: Q,
            size: A.ModalSize.DYNAMIC,
            className: t()(Y, w.gameProfileModal),
            children: (0, n.jsxs)(A.ScrollerNone, {
              className: w.scrollable,
              children: [
                (0, n.jsx)("div", {
                  className: t()(w.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eR, '")') },
                }),
                (0, n.jsxs)("div", {
                  className: t()(w.content, w.column, w.headerInfo),
                  children: [
                    (0, n.jsx)("div", {
                      className: w.logoWrapper,
                      children:
                        null != eM &&
                        (0, n.jsx)("img", {
                          className: w.logo,
                          src: eM,
                          alt: B.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: eg,
                          }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                      className: t()(w.row, w.gapSm, w.gameDetails),
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(A.Heading, {
                              variant: "heading-xl/bold",
                              children: eg,
                            }),
                            (0, n.jsxs)("div", {
                              className: t()(w.row, w.gapSm),
                              children: [
                                null != eL &&
                                  (0, n.jsx)("img", {
                                    src: eL,
                                    height: 16,
                                    alt: B.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: eg },
                                    ),
                                  }),
                                (0, n.jsx)(A.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eA,
                                }),
                                eh &&
                                  (0, n.jsx)(A.Text, {
                                    variant: "eyebrow",
                                    className: w.newBadge,
                                    children: B.Z.Messages.NEW,
                                  }),
                                ev &&
                                  (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)(A.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, n.jsx)(k, {}),
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
                                  innerClassName: w.followButton,
                                  color: X
                                    ? A.Button.Colors.PRIMARY
                                    : A.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let s =
                                      null !== (e = d.K.get(U)) && void 0 !== e
                                        ? e
                                        : {};
                                    (s[i] = !s[i]),
                                      d.K.set(U, s),
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
                                              viewId: er,
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
                    className: t()(w.content, w.mainContent),
                    children: [
                      (0, n.jsxs)("div", {
                        className: w.column,
                        children: [
                          (0, n.jsx)(A.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              B.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, n.jsxs)("div", {
                            className: t()(w.section, {
                              [w.fadedEntries]: ec && !e_,
                            }),
                            children: [
                              0 === eE.length &&
                                (0, n.jsx)(A.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: w.emptyFriendsWhoPlay,
                                  children:
                                    B.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, n.jsx)("div", {
                                className: t()(w.column, w.gapNone),
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
                                              viewId: er,
                                              onClose: W,
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
                              className: w.expandEntriesButton,
                              onClick: () => eu(!0),
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
                                  className: t()(w.row, w.imageScroller),
                                  orientation: "horizontal",
                                  children: eN.map((e, s) =>
                                    (0, n.jsx)(
                                      A.Clickable,
                                      {
                                        className: w.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: w.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eO(C.as.ClickImage),
                                            (0, A.openModalLazy)(async () => {
                                              let { default: e } = await a
                                                .e("99857")
                                                .then(a.bind(a, 895023));
                                              return (a) => {
                                                let { ...r } = a;
                                                return (0, n.jsx)(e, {
                                                  className: w.mediaModal,
                                                  ...r,
                                                  items: eN,
                                                  startingIndex: s,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, n.jsx)("img", {
                                          src: e.src,
                                          className: w.gameArtwork,
                                          alt: B.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: eg },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, n.jsx)(A.Spacer, { size: 8 }),
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
                                  className: w.row,
                                  style: {},
                                  children: et.map((e) =>
                                    (0, n.jsx)(
                                      y,
                                      { game: e, onClose: W, trackClick: eO },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: t()(w.sidebar, w.column),
                        children: [
                          (0, n.jsx)(A.Heading, {
                            variant: "heading-md/bold",
                            children: B.Z.Messages.ABOUT,
                          }),
                          (0, n.jsxs)("div", {
                            className: w.sidebarSections,
                            children: [
                              null != eP &&
                                (0, n.jsxs)("div", {
                                  className: t()(w.column, w.gapSm),
                                  children: [
                                    (0, n.jsx)(A.Text, {
                                      ref: en,
                                      lineClamp: $ ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eP,
                                    }),
                                    (es || !$) &&
                                      (0, n.jsx)(A.Clickable, {
                                        className: w.clickable,
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
                                  className: t()(w.column),
                                  children:
                                    eG.length > 0 &&
                                    (0, n.jsxs)("div", {
                                      className: t()(w.column, w.gapSm),
                                      children: [
                                        (0, n.jsx)(A.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            B.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, n.jsxs)("div", {
                                          className: t()(w.row, w.gapMd),
                                          children: [
                                            (0, n.jsx)(A.Text, {
                                              variant: "text-sm/normal",
                                              children: eG.join(", "),
                                            }),
                                            ef.length > 0 &&
                                              (0, n.jsx)(b, { platforms: ef }),
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
      s.default = W;
    },
    962250: function (e, s, a) {
      a.d(s, {
        b: function () {
          return r;
        },
      }),
        a(47120);
      var n = a(470079);
      function r() {
        var e, s;
        let [a, r] = n.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (s = window.innerHeight) && void 0 !== s ? s : 1080,
        });
        return (
          n.useLayoutEffect(() => {
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
          a
        );
      }
    },
    814225: function (e, s, a) {
      a.d(s, {
        P3: function () {
          return u;
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
        r = a.n(n);
      if (12633 == a.j) var l = a(266067);
      a(358085), a(73346);
      var t = a(981631),
        i = a(689938);
      let o = {},
        E = {},
        c = Object.freeze({ ALL: -1, ...t.EKQ });
      function _(e) {
        let s = (0, l.LX)(e, {
          path: t.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != s ? s.params.skuId : null;
      }
      function u(e) {
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
      let I = [
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
        for (let e = 0; e < I.length; e++) {
          let [s, n] = I[e],
            l = r()(a, s, !0);
          if (l.isValid()) return l.format(n);
        }
        return a;
      }
    },
    643872: function (e, s, a) {
      var n, r;
      a.d(s, {
        p: function () {
          return n;
        },
      }),
        ((r = n || (n = {}))[(r.OFFICIAL = 1)] = "OFFICIAL"),
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
        gameArtworkFocusRing: "gameArtworkFocusRing_e881fc",
        similarGames: "similarGames_e881fc",
      };
    },
  },
]);
//# sourceMappingURL=212893f6ed1bfa12e7b9.js.map
