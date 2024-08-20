"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84740"],
  {
    403404: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return u;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(481060),
        s = n(424602),
        o = n(397698),
        i = n(776862),
        l = n(701488),
        c = n(981631);
      function u(e) {
        let {
            channel: a,
            guildId: u,
            locationObject: _,
            openInPopout: E,
            initialSelectedApplicationId: d,
            initialSlide: I = l.ag.DIRECTORY,
            enableSelectedTextChannelInvite: A = !1,
            analyticsLocations: T,
            opensAppLauncherModal: m = !1,
          } = e,
          O = T.length > 0 ? T[T.length - 1] : "open-activity-shelf",
          { enabled: N } = s.m1.getCurrentConfig(
            { location: O },
            { autoTrackExposure: !1 },
          );
        if (m && N) {
          null != a &&
            (0, o.Z)({ openInPopout: E, channel: a, analyticsLocation: O });
          return;
        }
        E && (0, i.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
        let R = E ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        return (0, r.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              n.e("64714"),
              n.e("64430"),
            ]).then(n.bind(n, 471840));
            return (n) =>
              (0, t.jsx)(e, {
                ...n,
                channel: a,
                guildId: u,
                locationObject: _,
                initialSlide: I,
                initialSelectedApplicationId: d,
                enableSelectedTextChannelInvite: A,
                analyticsLocations: T,
              });
          },
          { modalKey: l.AC, contextKey: R },
        );
      }
    },
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
      function r(e, a) {
        t.Z.dispatch({
          type: "APP_LAUNCHER_SHOW",
          entrypoint: e,
          activeViewType: a,
        });
      }
      function s(e) {
        t.Z.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
      }
    },
    314734: function (e, a, n) {
      var t, r;
      n.d(a, {
        Gy: function () {
          return l;
        },
        Jh: function () {
          return s;
        },
        K7: function () {
          return c;
        },
        bS: function () {
          return t;
        },
        e9: function () {
          return o;
        },
        lv: function () {
          return u;
        },
        t4: function () {
          return i;
        },
        u$: function () {
          return _;
        },
      }),
        ((r = t || (t = {}))[(r.POPULAR = 0)] = "POPULAR"),
        (r[(r.ALPHABETICAL = 1)] = "ALPHABETICAL");
      let s = "app-launcher-element",
        o = "app-launcher-modal",
        i = "app-launcher-entrypoint",
        l = 500,
        c = 668,
        u = "min(100vh, ".concat(c, "px)"),
        _ = {
          "--custom-app-launcher-width": "".concat(l, "px"),
          "--custom-app-launcher-height": u,
        };
    },
    397698: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return E;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(481060),
        s = n(776862),
        o = n(306680),
        i = n(626135),
        l = n(499254),
        c = n(827498),
        u = n(314734),
        _ = n(981631);
      function E(e) {
        let { channel: a, openInPopout: E, analyticsLocation: d } = e;
        E && (0, s.Z)(_.KJ3.CHANNEL_CALL_POPOUT);
        let I = E ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        (0, l.y)(c.ti.DISMISSED), (0, l._)(c._b.VOICE);
        let A = a.id,
          T = o.ZP.hasUnread(A) || o.ZP.getMentionCount(A) > 0;
        return (
          i.default.track(_.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: d,
            source: c._b.VOICE,
            is_chat_badged: T,
          }),
          (0, r.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                n.e("64714"),
                n.e("21351"),
                n.e("73806"),
              ]).then(n.bind(n, 743161));
              return (n) => (0, t.jsx)(e, { channel: a, ...n });
            },
            { modalKey: u.e9, contextKey: I },
          )
        );
      }
    },
    206295: function (e, a, n) {
      n(47120);
      var t = n(470079),
        r = n(688619),
        s = n.n(r);
      n(979590);
      var o = n(442837),
        i = n(866442),
        l = n(607070),
        c = n(220082),
        u = n(981631);
      a.Z = (e) => {
        var a, r, _, E, d, I;
        let A;
        A = n(481060).tokens;
        let T = (0, o.e7)([l.Z], () => l.Z.saturation),
          [m, O] = (0, c.Cf)(
            e,
            null !==
              (I =
                null == A
                  ? void 0
                  : null === (d = A.colors) || void 0 === d
                    ? void 0
                    : null === (E = d.BACKGROUND_FLOATING) || void 0 === E
                      ? void 0
                      : null === (_ = E.resolve) || void 0 === _
                        ? void 0
                        : null ===
                              (r = _.call(E, {
                                theme: u.BRd.DARK,
                                saturation: T,
                              })) || void 0 === r
                          ? void 0
                          : null === (a = r.hex) || void 0 === a
                            ? void 0
                            : a.call(r)) && void 0 !== I
              ? I
              : "#000",
          );
        return t.useMemo(() => {
          let e = (0, i._i)(m),
            a = (0, i._i)(O);
          for (let a = 1; a < 8 && !((0, i.Bd)(e) >= 0.725); a++) {
            e = s()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, i.Bd)(a) >= 0.725); e++) {
            a = s()(a).darken(0.5).num();
          }
          let n = (0, i.Rf)(e);
          return { primaryColor: n, secondaryColor: (0, i.Rf)(a) };
        }, [m, O]);
      };
    },
    410441: function (e, a, n) {
      n.d(a, {
        Z: function () {
          return o;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(481060),
        s = n(76927);
      function o(e) {
        let { onClick: a, Icon: n, "aria-label": o } = e,
          i = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          l = (0, t.jsx)(n, {
            color: i.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == a
          ? (0, t.jsx)("div", {
              className: s.container,
              "aria-label": o,
              children: l,
            })
          : (0, t.jsx)(r.Tooltip, {
              text: o,
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
          return i;
        },
      });
      var t = n(544891),
        r = n(570140),
        s = n(881052),
        o = n(981631);
      let i = async (e) => {
        try {
          var a;
          let n = await t.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
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
        o,
        i = n(442837),
        l = n(570140);
      let c = {};
      class u extends (o = i.ZP.Store) {
        getSimilarGames(e) {
          return c[e];
        }
      }
      (s = "GameProfileStore"),
        (r = "displayName") in (t = u)
          ? Object.defineProperty(t, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = s),
        (a.Z = new u(l.Z, {
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
        o = n(876215),
        i = n(442837),
        l = n(146282),
        c = n(897674),
        u = n(709054),
        _ = n(206583);
      let E = new Set([o.s.PLAYED_GAME]),
        d = (e) => E.has(e.content_type);
      function I() {
        let e = (0, c.Z)(_.YN.GAME_PROFILE_FEED),
          a = (0, c.Z)(_.YN.GLOBAL_FEED),
          n = t.useMemo(
            () =>
              s()(a)
                .unionBy(e, (e) => e.id)
                .filter(d)
                .orderBy((e) => u.default.extractTimestamp(e.id), "desc")
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
            l.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED),
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
      function o() {
        return t.K.set(r, { hasInteractedWithSurvey: !0 });
      }
    },
    383895: function (e, a, n) {
      var t = n(735250),
        r = n(470079),
        s = n(120356),
        o = n.n(s),
        i = n(442837),
        l = n(481060),
        c = n(178762),
        u = n(91140),
        _ = n(297781),
        E = n(592125),
        d = n(944486),
        I = n(594174),
        A = n(5192),
        T = n(810568),
        m = n(689938),
        O = n(255341),
        N = n(707443);
      a.Z = (e) => {
        let { entry: a, viewId: n, onClose: s } = e,
          R = (0, i.e7)([d.Z, E.Z], () => E.Z.getChannel(d.Z.getChannelId())),
          p = (0, i.e7)([I.default], () => I.default.getUser(a.author_id)),
          { nick: P, avatar: g } = r.useMemo(() => {
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
                let { closePopout: r, updatePosition: o } = e;
                return (0, t.jsx)(c.J, {
                  entry: a,
                  closePopout: r,
                  updatePopoutPosition: o,
                  onReaction: () => {
                    (0, T.UE)({
                      action: T.as.SendMessageUser,
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
                (0, T.UE)({
                  action: T.as.ClickMessageUser,
                  applicationId: a.extra.application_id,
                  gameName: a.extra.game_name,
                  recipientUserId: a.author_id,
                  viewId: n,
                });
              },
              children: (e) =>
                (0, t.jsx)(l.Clickable, {
                  ...e,
                  className: O.profileEntryCard,
                  children: (0, t.jsx)(l.FocusRing, {
                    offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: O.avatar,
                          src: g,
                          alt: m.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format(
                            { userName: P },
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: o()(O.playerInfo),
                          children: (0, t.jsxs)("div", {
                            className: o()(N.column, N.gapXs),
                            children: [
                              (0, t.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                lineClamp: 1,
                                children: P,
                              }),
                              (0, t.jsx)(_.Gk, {
                                location: _.Gt.GAME_PROFILE,
                                children: u.W.map((e, n) =>
                                  (0, t.jsx)(e, { entry: a }, n),
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: O.reactions,
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
        o = n.n(s),
        i = n(643872),
        l = n(481060),
        c = n(570140),
        u = n(652898),
        _ = n(93093),
        E = n(768581),
        d = n(810568),
        I = n(981631),
        A = n(689938),
        T = n(707443);
      let m = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE],
        O = (e) => {
          let { invite: a, trackClick: n } = e,
            { approximate_member_count: r, guild: s } = a;
          if (null == s) return null;
          let i = _.Z.isMember(s.id);
          if (
            !(null == s ? void 0 : s.features.includes("VERIFIED")) &&
            !(null == s ? void 0 : s.features.includes("PARTNER"))
          )
            return null;
          let u = E.ZP.getGuildIconURL({ id: s.id, icon: s.icon, size: 32 });
          return (0, t.jsxs)("div", {
            className: o()(T.column),
            children: [
              (0, t.jsx)(l.Heading, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                children: A.Z.Messages.GAME_PROFILE_OFFICIAL_GUILD,
              }),
              (0, t.jsxs)("div", {
                className: o()(T.row, T.gapMd),
                children: [
                  (0, t.jsx)("img", {
                    className: T.icon,
                    src: u,
                    alt: A.Z.Messages.GAME_PROFILE_GUILD_ICON_ALT.format({
                      guildName: s.name,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: o()(T.gapNone),
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
          s =
            null == a
              ? void 0
              : a.find((e) => {
                  let { category: a } = e;
                  return a === i.p.DISCORD;
                }),
          [c, _] = r.useState();
        if (
          (r.useEffect(() => {
            let e = async (e) => {
              let a = e.split("/").pop();
              if (null != a) {
                let e = await (0, u.Z)(a);
                !0 !== e.banned && _(e.invite);
              }
            };
            null != s && e(s.url);
          }, [s]),
          null == a || 0 === a.length)
        )
          return null;
        let E = a
          .filter((e) => {
            let { category: a } = e;
            return m.includes(a);
          })
          .sort((e, a) => e.category - a.category);
        return (0, t.jsxs)("div", {
          className: o()(T.column),
          children: [
            null != c && (0, t.jsx)(O, { invite: c, trackClick: n }),
            (0, t.jsxs)("div", {
              className: o()(T.column, T.gapSm),
              children: [
                (0, t.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  color: "header-secondary",
                  children: A.Z.Messages.GAME_PROFILE_LINKS,
                }),
                (0, t.jsx)("div", {
                  className: T.row,
                  children: E.map((e) => {
                    let a,
                      r,
                      { category: s, url: o } = e,
                      c = null;
                    switch (s) {
                      case i.p.OFFICIAL:
                        (c = (0, t.jsx)(l.GlobeEarthIcon, {
                          colorClass: T.linkIcon,
                        })),
                          (r = d.as.WebsiteLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_OFFICIAL);
                        break;
                      case i.p.TWITTER:
                        (c = (0, t.jsx)(l.XNeutralIcon, {
                          colorClass: T.linkIcon,
                        })),
                          (r = d.as.XLink),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_TWITTER);
                        break;
                      case i.p.YOUTUBE:
                        (r = d.as.YouTubeLink),
                          (c = (0, t.jsx)(l.YoutubeNeutralIcon, {
                            colorClass: T.linkIcon,
                          })),
                          (a = A.Z.Messages.GAME_PROFILE_LINK_YOUTUBE);
                    }
                    return null != c
                      ? (0, t.jsx)(
                          l.Anchor,
                          {
                            className: T.linkAnchor,
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
      var t = n(735250),
        r = n(470079),
        s = n(120356),
        o = n.n(s),
        i = n(512722),
        l = n.n(i),
        c = n(913527),
        u = n.n(c),
        _ = n(758713),
        E = n(705512),
        d = n(442837),
        I = n(433517),
        A = n(481060),
        T = n(224706),
        m = n(812206),
        O = n(168551),
        N = n(485267),
        R = n(26033),
        p = n(561308),
        P = n(669764),
        g = n(962250),
        C = n(706454),
        L = n(768581),
        M = n(814225),
        S = n(709054),
        h = n(810568),
        f = n(998058),
        x = n(839392),
        G = n(96856),
        v = n(567409),
        Z = n(774073),
        j = n(124030),
        b = n(383895),
        D = n(183391),
        K = n(206583),
        U = n(689938),
        y = n(707443);
      let B = "GameProfileModal",
        F = (e) => {
          let { game: a, onClose: n, trackClick: r } = e,
            s = (0, d.e7)([m.Z], () => {
              var e;
              return m.Z.getApplication(
                null !== (e = null == a ? void 0 : a.applicationId) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            });
          if (null == a) return null;
          let o = a.coverImageUrl;
          return (0, t.jsx)(A.Tooltip, {
            text: a.name,
            children: (e) => {
              var i;
              return (0, t.jsx)(A.Clickable, {
                ...e,
                className: y.clickable,
                onClick: async () => {
                  r(h.as.ClickSimilarGame, a.applicationId),
                    (0, A.openModalLazy)(() =>
                      Promise.resolve((e) =>
                        (0, t.jsx)(W, {
                          applicationId: a.applicationId,
                          source: h.m1.SimilarGames,
                          ...e,
                        }),
                      ),
                    ),
                    await new Promise((e) => setTimeout(e, 10)),
                    n();
                },
                children: (0, t.jsx)("img", {
                  src: o,
                  className: y.similarGames,
                  alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                    game:
                      null !== (i = null == s ? void 0 : s.name) && void 0 !== i
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
        w = () =>
          (0, t.jsxs)("div", {
            className: y.gameBadge,
            children: [
              (0, t.jsx)(A.FireIcon, { size: "xxs" }),
              (0, t.jsx)(A.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: U.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
              }),
            ],
          }),
        H = [_.z.DESKTOP, _.z.XBOX, _.z.PLAYSTATION, _.z.NINTENDO],
        k = (e) => {
          let { platforms: a } = e,
            n = [...new Set(a)];
          !n.includes(_.z.DESKTOP) &&
            (n.includes(_.z.MACOS) || n.includes(_.z.LINUX)) &&
            n.push(_.z.DESKTOP);
          let r = (n = n.filter((e) => H.includes(e))).map((e) => {
            switch (e) {
              case _.z.DESKTOP:
                return (0, t.jsx)(A.ScreenIcon, { size: "xs" }, e);
              case _.z.XBOX:
                return (0, t.jsx)(A.XboxNeutralIcon, { size: "xs" }, e);
              case _.z.PLAYSTATION:
                return (0, t.jsx)(A.PlaystationNeutralIcon, { size: "xs" }, e);
              case _.z.NINTENDO:
                return (0, t.jsx)(
                  A.NintendoSwitchNeutralIcon,
                  { size: "xs" },
                  e,
                );
              default:
                return null;
            }
          });
          return (0, t.jsxs)("div", {
            className: o()(y.row, y.gapSm),
            style: { alignItems: "center" },
            children: [
              (0, t.jsx)(A.Text, {
                variant: "text-sm/normal",
                children: " \xb7 ",
              }),
              r,
            ],
          });
        },
        Q = (e) => e.filter(Z.z6).slice(0, 5),
        W = (e) => {
          var a, s;
          let {
              applicationId: i,
              source: c,
              sourceUserId: _,
              transitionState: H,
              onClose: W,
            } = e,
            { clientThemesClassName: Y } = (0, O.ZP)(),
            { width: z, height: V } = (0, g.b)(),
            [X, J] = r.useState(() => {
              var e;
              return null === (e = I.K.get(B)) || void 0 === e ? void 0 : e[i];
            }),
            q = (0, d.e7)([C.default], () => C.default.locale),
            [$, ee] = r.useState(!0),
            [ea, en] = r.useState(!1),
            et = r.useRef(null),
            er = r.useMemo(() => (0, h.fP)(), []);
          r.useEffect(() => {
            let e = et.current;
            null != e && en(e.scrollHeight - e.clientHeight > 1);
          }, [et, z, V]),
            r.useEffect(() => {
              (0, N.Jn)();
            }, []);
          let es = (0, d.Wu)([x.Z], () => {
              var e;
              return (
                null !== (e = x.Z.getSimilarGames(i)) && void 0 !== e ? e : []
              ).slice(0, 25);
            }),
            eo = (0, d.Wu)([P.Z], () =>
              es
                .map((e) => P.Z.getGame(e))
                .filter(Z.W1)
                .slice(0, 5),
            ),
            ei = r.useRef([]);
          r.useEffect(() => {
            ei.current = es;
          }, [es]);
          let { entries: el } = (0, v.Z)(),
            ec = r.useMemo(() => {
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
            eu = ec.length > 7,
            [e_, eE] = r.useState(!1);
          r.useEffect(() => {
            var e, a;
            return (
              (0, h.IS)({
                source: c,
                viewId: er,
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
                authorId: _,
              }),
              () => {
                var e, a;
                let n = Date.now(),
                  t = ec.map((e) => {
                    let a = (0, p.kr)(e) ? (0, p.T_)(e, n) : (0, p.GL)(e, q);
                    return JSON.stringify({
                      item_id: e.id,
                      trait: e.traits,
                      time_played: a,
                    });
                  });
                (0, h.wz)({
                  viewId: er,
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
                  playedFriendsData: t,
                  similarGames: Q(ei.current),
                });
              }
            );
          }, []),
            r.useEffect(() => {
              0 === es.length && (0, f.i)(i);
            }, [i, es]),
            r.useEffect(() => {
              T.Z.getDetectableGamesSupplemental([i, ...es]);
            }, [i, es]);
          let ed = m.Z.getApplication(i),
            eI = (0, d.e7)([P.Z], () => P.Z.getGame(i)),
            eA = r.useMemo(
              () => (null == eI ? void 0 : eI.genres.map(M.P3).join(", ")),
              [eI],
            ),
            eT = r.useMemo(() => {
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
            em = r.useMemo(() => {
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
            eO = (e, a) => {
              (0, h.UE)({
                gameName: null != ep ? ep : "",
                applicationId: i,
                action: e,
                similarGameId: a,
                viewId: er,
              });
            },
            eN = (0, G.p)("GameProfileModal"),
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
              null == ed ? void 0 : ed.getIconURL(160, L.$k ? "webp" : "png"),
            eg = null !== (s = eI.coverImageUrl) && void 0 !== s ? s : eP,
            { summary: eC, websites: eL, publishers: eM, platforms: eS } = eI,
            eh = S.default.extractTimestamp(i),
            ef = u()().diff(u()(eh), "days") <= K.G,
            ex = ec.some((e) => (0, p.ig)(e) === E.o.GLOBAL);
          return (0, t.jsx)(A.ModalRoot, {
            transitionState: H,
            size: A.ModalSize.DYNAMIC,
            className: o()(Y, y.gameProfileModal),
            children: (0, t.jsxs)(A.ScrollerNone, {
              className: y.scrollable,
              children: [
                (0, t.jsx)("div", {
                  className: o()(y.gameArtHero),
                  style: { backgroundImage: 'url("'.concat(eT, '")') },
                }),
                (0, t.jsxs)("div", {
                  className: o()(y.content, y.column, y.headerInfo),
                  children: [
                    (0, t.jsx)("div", {
                      className: y.logoWrapper,
                      children:
                        null != eg &&
                        (0, t.jsx)("img", {
                          className: y.logo,
                          src: eg,
                          alt: U.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({
                            game: ep,
                          }),
                        }),
                    }),
                    (0, t.jsxs)("div", {
                      className: o()(y.row, y.gapSm, y.gameDetails),
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)(A.Heading, {
                              variant: "heading-xl/bold",
                              children: ep,
                            }),
                            (0, t.jsxs)("div", {
                              className: o()(y.row, y.gapSm),
                              children: [
                                null != eP &&
                                  (0, t.jsx)("img", {
                                    src: eP,
                                    height: 16,
                                    alt: U.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format(
                                      { game: ep },
                                    ),
                                  }),
                                (0, t.jsx)(A.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-muted",
                                  children: eA,
                                }),
                                ef &&
                                  (0, t.jsx)(A.Text, {
                                    variant: "eyebrow",
                                    className: y.newBadge,
                                    children: U.Z.Messages.NEW,
                                  }),
                                ex &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(A.Text, {
                                        variant: "text-sm/medium",
                                        children: " \xb7 ",
                                      }),
                                      (0, t.jsx)(w, {}),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          children:
                            eN &&
                            (0, t.jsx)(A.Tooltip, {
                              text: X
                                ? U.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP
                                : U.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                              children: (e) =>
                                (0, t.jsxs)(A.Button, {
                                  ...e,
                                  innerClassName: y.followButton,
                                  color: X
                                    ? A.Button.Colors.PRIMARY
                                    : A.Button.Colors.BRAND,
                                  onClick: () => {
                                    var e;
                                    let a =
                                      null !== (e = I.K.get(B)) && void 0 !== e
                                        ? e
                                        : {};
                                    (a[i] = !a[i]),
                                      I.K.set(B, a),
                                      eO(
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
                                            (0, t.jsx)(e, {
                                              ...a,
                                              applicationId: i,
                                              background: eT,
                                              viewId: er,
                                            });
                                        }),
                                      J(a[i]);
                                  },
                                  children: [
                                    X
                                      ? (0, t.jsx)(A.BellSlashIcon, {
                                          color: "white",
                                        })
                                      : (0, t.jsx)(A.BellIcon, {
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
                (0, t.jsx)(A.HeadingLevel, {
                  children: (0, t.jsxs)("div", {
                    className: o()(y.content, y.mainContent),
                    children: [
                      (0, t.jsxs)("div", {
                        className: y.column,
                        children: [
                          (0, t.jsx)(A.Heading, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              U.Z.Messages.GAME_PROFILE_FRIENDS_WHO_PLAY_TAB,
                          }),
                          (0, t.jsxs)("div", {
                            className: o()(y.section, {
                              [y.fadedEntries]: eu && !e_,
                            }),
                            children: [
                              0 === ec.length &&
                                (0, t.jsx)(A.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-primary",
                                  className: y.emptyFriendsWhoPlay,
                                  children:
                                    U.Z.Messages
                                      .GAME_PROFILE_EMPTY_FRIENDS_WHO_PLAY,
                                }),
                              (0, t.jsx)("div", {
                                className: o()(y.column, y.gapNone),
                                children:
                                  null == ec
                                    ? void 0
                                    : ec
                                        .slice(0, eu && !e_ ? 6 : void 0)
                                        .map((e) =>
                                          (0, t.jsx)(
                                            b.Z,
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
                          eu &&
                            !e_ &&
                            (0, t.jsxs)(A.Clickable, {
                              className: y.expandEntriesButton,
                              onClick: () => eE(!0),
                              children: [
                                (0, t.jsx)(A.Text, {
                                  variant: "text-xs/semibold",
                                  color: "interactive-normal",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_SEE_ALL_ENTRIES,
                                }),
                                (0, t.jsx)(A.ChevronSmallDownIcon, {
                                  size: "xs",
                                }),
                              ],
                            }),
                          em.length > 0 &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(A.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_SCREENSHOTS,
                                }),
                                (0, t.jsx)(A.Scroller, {
                                  className: o()(y.row, y.imageScroller),
                                  orientation: "horizontal",
                                  children: em.map((e, a) =>
                                    (0, t.jsx)(
                                      A.Clickable,
                                      {
                                        className: y.clickable,
                                        focusProps: {
                                          offset: 4,
                                          ringClassName: y.gameArtworkFocusRing,
                                        },
                                        onClick: () => {
                                          eO(h.as.ClickImage),
                                            (0, A.openModalLazy)(async () => {
                                              let { default: e } = await n
                                                .e("99857")
                                                .then(n.bind(n, 895023));
                                              return (n) => {
                                                let { ...r } = n;
                                                return (0, t.jsx)(e, {
                                                  className: y.mediaModal,
                                                  ...r,
                                                  items: em,
                                                  startingIndex: a,
                                                });
                                              };
                                            });
                                        },
                                        children: (0, t.jsx)("img", {
                                          src: e.src,
                                          className: y.gameArtwork,
                                          alt: U.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format(
                                            { game: ep },
                                          ),
                                        }),
                                      },
                                      e.src,
                                    ),
                                  ),
                                }),
                                (0, t.jsx)(A.Spacer, { size: 8 }),
                              ],
                            }),
                          eo.length > 0 &&
                            (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(A.Heading, {
                                  variant: "heading-md/bold",
                                  children:
                                    U.Z.Messages.GAME_PROFILE_ALSO_PLAYING,
                                }),
                                (0, t.jsx)("div", {
                                  className: y.row,
                                  style: {},
                                  children: eo.map((e) =>
                                    (0, t.jsx)(
                                      F,
                                      { game: e, onClose: W, trackClick: eO },
                                      null == e ? void 0 : e.applicationId,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: o()(y.sidebar, y.column),
                        children: [
                          (0, t.jsx)(A.Heading, {
                            variant: "heading-md/bold",
                            children: U.Z.Messages.ABOUT,
                          }),
                          (0, t.jsxs)("div", {
                            className: y.sidebarSections,
                            children: [
                              null != eC &&
                                (0, t.jsxs)("div", {
                                  className: o()(y.column, y.gapSm),
                                  children: [
                                    (0, t.jsx)(A.Text, {
                                      ref: et,
                                      lineClamp: $ ? 8 : void 0,
                                      variant: "text-sm/normal",
                                      children: eC,
                                    }),
                                    (ea || !$) &&
                                      (0, t.jsx)(A.Clickable, {
                                        className: y.clickable,
                                        onClick: () => {
                                          eO($ ? h.as.ShowMore : h.as.ShowLess),
                                            ee(!$);
                                        },
                                        children: (0, t.jsx)(A.Text, {
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
                              (0, t.jsx)(D.Z, { websites: eL, trackClick: eO }),
                              (eM.length > 0 || eS.length > 0) &&
                                (0, t.jsx)("div", {
                                  className: o()(y.column),
                                  children:
                                    eM.length > 0 &&
                                    (0, t.jsxs)("div", {
                                      className: o()(y.column, y.gapSm),
                                      children: [
                                        (0, t.jsx)(A.Heading, {
                                          variant: "text-xs/semibold",
                                          color: "header-secondary",
                                          children:
                                            U.Z.Messages.GAME_PROFILE_PUBLISHER,
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: o()(y.row, y.gapMd),
                                          children: [
                                            (0, t.jsx)(A.Text, {
                                              variant: "text-sm/normal",
                                              children: eM.join(", "),
                                            }),
                                            eS.length > 0 &&
                                              (0, t.jsx)(k, { platforms: eS }),
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
        o = n(120356),
        i = n.n(o),
        l = n(481060),
        c = n(598077),
        u = n(940942),
        _ = n(585867);
      function E(e, a, n) {
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
      class d extends (t = s.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: a,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: t,
            } = this.props,
            r = [],
            s = e.length === a ? e.length : a - 1,
            o = 0;
          for (; o < s && o < e.length; ) {
            let a = o === e.length - 1;
            r.push(
              n(e[o] || null, a ? null : u.avatarMasked, "user-".concat(o), a),
            ),
              o++;
          }
          if (o < e.length) {
            let a = Math.min(e.length - o, 99);
            r.push(t("+".concat(a), u.moreUsers, "more-users", a));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: u.iconContainer,
                children: (0, r.jsx)(l.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: u.foreground,
                  className: u.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsxs)("div", {
            className: i()(e, u.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            E(this, "_ref", void 0),
            E(this, "defaultRenderUser", (e, a, n, t) => {
              let { onClick: s, size: o, guildId: E } = this.props,
                d = e instanceof c.Z ? e : null != e ? e.user : null;
              return null == d
                ? (0, r.jsx)("div", { className: i()(u.emptyUser, a) }, n)
                : (0, r.jsx)(
                    l.Avatar,
                    {
                      tabIndex: 0,
                      src: d.getAvatarURL(E, (0, l.getAvatarSize)(o)),
                      size: o,
                      "aria-label": d.username,
                      className: i()(a, _.cursorPointer, u.avatarSize),
                      onClick: (e) => (null != s ? s(e, d, this._ref) : null),
                    },
                    d.id,
                  );
            });
        }
      }
      E(d, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, a, n) {
          return (0, r.jsx)("div", { className: a, children: e }, n);
        },
        size: l.AvatarSizes.SIZE_24,
      }),
        (a.Z = d);
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
          ...o
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, r.Z)(o),
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
          return E;
        },
        ZK: function () {
          return _;
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
      var o = n(981631),
        i = n(689938);
      let l = {},
        c = {},
        u = Object.freeze({ ALL: -1, ...o.EKQ });
      function _(e) {
        let a = (0, s.LX)(e, {
          path: o.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        });
        return null != a ? a.params.skuId : null;
      }
      function E(e) {
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
      Object.keys(u).forEach((e) => {
        let a = e.toLowerCase().replace(/_/g, "-"),
          n = u[e];
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
          let [a, t] = d[e],
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
        contentImage: "contentImage_a35965",
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
//# sourceMappingURL=a63cb3e33df34a7b01e8.js.map
