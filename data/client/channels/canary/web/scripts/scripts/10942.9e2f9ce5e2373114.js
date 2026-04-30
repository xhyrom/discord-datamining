"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10942"],
  {
    361610(e, t, n) {
      n.d(t, {
        Cf: () => a,
        Ey: () => u,
        G9: () => o,
        NE: () => s,
        NJ: () => d,
        un: () => r,
      }),
        n(321073);
      var i = n(228366),
        l = n(36124);
      function r(e, t) {
        i.h.dispatch({
          type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
          guildId: e,
          userIds: t,
        });
      }
      function s(e, t) {
        i.h.dispatch({
          type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
          guildId: e,
          userIds: t,
        });
      }
      function a(e) {
        i.h.dispatch({
          type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
          guildId: e,
        });
      }
      function o(e) {
        i.h.dispatch({
          type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
          guildId: e,
        });
      }
      function u(e, t, n) {
        i.h.dispatch({
          type: "GUILD_SUBSCRIPTIONS_CHANNEL",
          guildId: e,
          channelId: t,
          ranges: n,
        });
      }
      function d(e) {
        let { guildId: t, channelId: n, y: i, height: r, rowHeight: s } = e;
        function a(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
        }
        let o = [];
        function d(e) {
          let t = e + (l.JM - 1);
          return o.push([e, t]), t + 1;
        }
        let c = a(0.5 * r),
          h = a(i, -c),
          p = a(i + r, c);
        for (
          h > 0 && (h = Math.max(d(0), h)), h = Math.floor(h / l.JM) * l.JM;
          h <= p;

        )
          h = d(h);
        u(t, n, o);
      }
    },
    110574(e, t, n) {
      n.d(t, { A: () => z, b: () => k });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        s = n.n(r),
        a = n(990078),
        o = n(319060),
        u = n(329177),
        d = n(939249),
        c = n(104510),
        h = n(661531),
        p = n(463930),
        m = n(97808),
        f = n(778712),
        E = n(922016),
        g = n(960076),
        A = n(397244),
        _ = n(714114),
        S = n(729551),
        I = n(709066),
        y = n(295160),
        C = n(193663),
        T = n(490427),
        v = n(609425),
        R = n(922301),
        N = n(368919),
        M = n(73392),
        b = n(534400),
        w = n(835759),
        x = n(967144),
        D = n(890687),
        L = n(198525),
        U = n(854627),
        O = n(240248),
        j = n(427262),
        G = n(652215),
        F = n(705751),
        H = n(31408),
        P = n(985018),
        V = n(28371);
      let k = (0, O.xI)(o.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
        B = l.memo(function (e) {
          let {
            isOwner: t,
            lostPermissionTooltipText: n,
            ownerTooltipText: l,
          } = e;
          return null != t && t && null == n
            ? (0, i.jsx)(a.m, {
                __unsupportedReactNodeAsText: l ?? P.intl.string(P.t.pclUFJ),
                children: (0, i.jsx)(u.p, {
                  size: "md",
                  color: "currentColor",
                  className: V.Dd,
                }),
              })
            : null;
        }),
        Y = l.memo(function (e) {
          let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
          return null == t
            ? null
            : (0, i.jsx)(a.m, {
                text: P.intl.formatToPlainString(P.t.IWkAq7, { date: t }),
                asContainer: !0,
                children: (0, i.jsx)(d.D, {
                  onClick: n,
                  tabIndex: -1,
                  children: (0, i.jsx)(c._, {
                    color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    className: V.PC,
                  }),
                }),
              });
        }),
        W = l.memo(function (e) {
          let { user: t } = e;
          if (null == t || !t.bot) return null;
          let n = F.nu.BOT;
          return (0, i.jsx)(I.A, {
            className: V.AO,
            type: n,
            verified: t.isVerifiedBot(),
          });
        }),
        $ = l.memo(function (e) {
          let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: l,
            ownerTooltipText: r,
            premiumSince: s,
            onClickPremiumGuildIcon: a,
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(W, { user: t }),
              (0, i.jsx)(B, {
                isOwner: n,
                lostPermissionTooltipText: l,
                ownerTooltipText: r,
              }),
              (0, i.jsx)(Y, { premiumSince: s, onClickPremiumGuildIcon: a }),
            ],
          });
        }),
        q = l.memo(function (e) {
          let {
              colorRoleName: t,
              colorString: n,
              colorStrings: l,
              name: r,
              hideClanTag: s,
              user: a,
              guildId: o,
              isHovering: u,
            } = e,
            d = (0, v.A)({ userId: a?.id, guildId: o }),
            c = (0, M.a)({ displayNameStyles: d }),
            h = null == o && null != d;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              h
                ? (0, i.jsx)(N.A, {
                    userName: r ?? "",
                    displayNameStyles: d,
                    effectDisplayType: u ? R.G.ANIMATED : R.G.STATIC,
                    loop: !0,
                  })
                : (0, i.jsx)(p.g, {
                    roleName: t,
                    colorString: n,
                    colorStrings: l,
                    name: r,
                    className: V.UU,
                    displayNameStylesFont: c,
                    animateRoleGradient: u,
                  }),
              !s &&
                (0, i.jsx)(b.Ay, {
                  primaryGuild: a?.primaryGuild,
                  userId: a?.id,
                  contextGuildId: o,
                  disableGuildProfile: !0,
                  className: V.fc,
                }),
            ],
          });
        }),
        X = l.memo(function (e) {
          let {
              user: t,
              shouldAnimateStatus: n,
              activities: l,
              status: r,
              eventHandlers: s,
              avatarSrc: a,
              isMobile: o,
              isVR: u,
              isTyping: d,
              avatarDecorationSrc: c,
              handleSetTypingRef: h,
              typingRef: p,
              currentUser: E,
            } = e,
            A = r === G.clD.OFFLINE,
            _ = n ? m.Js : m.eu,
            S = (0, g.A)(l) ? G.clD.STREAMING : r;
          return (
            (S = A ? void 0 : S),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(_, {
                  ...s,
                  size: f._3.SIZE_32,
                  src: a,
                  isMobile: o,
                  isVR: u,
                  isTyping: d,
                  status: S,
                  "aria-label": t.username,
                  statusTooltip: !0,
                  avatarDecoration: c,
                  typingIndicatorRef: h,
                }),
                (0, i.jsx)(w.A, {
                  confettiSpawnRef: p,
                  shouldFire: d && null != E && t.id !== E.id,
                  confettiLocation: H.k.MEMBER_USER,
                }),
              ],
            })
          );
        }),
        K = l.memo(function (e) {
          let {
              hideSubtext: t,
              hideTooltip: n = !1,
              activities: r,
              status: s,
              applicationStream: a,
              voiceStatusChannel: o,
              user: u,
              channel: d,
              isHoveringOrFocusing: c,
              quest: h,
            } = e,
            p = l.useMemo(
              () =>
                (0, A.A)({
                  activities: r,
                  status: s,
                  applicationStream: a,
                  voiceChannel: o,
                }),
              [r, s, a, o],
            ),
            m = l.useMemo(
              () =>
                !(0, T.A)({
                  activity: r?.find((e) => {
                    let { type: t } = e;
                    return t === G.$pd.CUSTOM_STATUS;
                  }),
                  user: u,
                  channel: d,
                }),
              [r, u, d],
            );
          return t || !p
            ? null
            : (0, i.jsx)(S.A, {
                user: u,
                activities: r,
                applicationStream: a,
                voiceChannel: o,
                animateEmoji: c,
                hideEmoji: m,
                hasQuest: null != h,
                hideTooltip: n,
              });
        }),
        z = l.memo(function (e) {
          let {
              selected: t = !1,
              colorString: n,
              colorStrings: r,
              colorRoleName: o,
              isOwner: u,
              ownerTooltipText: d,
              lostPermissionTooltipText: c,
              isTyping: h = !1,
              nick: p,
              user: m,
              currentUser: g,
              activities: A,
              applicationStream: S,
              status: I,
              shouldAnimateStatus: T = !1,
              isMobile: v,
              isVR: R,
              premiumSince: N,
              channel: M,
              guildId: b,
              className: w,
              nameplate: O,
              hideClanTag: F = !1,
              hideSubtext: H = !1,
              hideTooltip: P = !1,
              onMouseDown: k,
              onKeyDown: B,
              onClick: Y,
              onContextMenu: W,
              onClickPremiumGuildIcon: z,
              "aria-controls": J,
              "aria-expanded": Q,
              "aria-posinset": Z,
              "aria-setsize": ee,
              id: et,
              tabIndex: en,
              itemProps: ei,
              ref: el,
            } = e,
            er = m?.id,
            es = j.Ay.useName(m),
            ea = l.useRef(null),
            eo = el ?? ea,
            [eu, ed] = l.useState(!1),
            [ec, eh] = l.useState(!1),
            [ep, em] = l.useState(null),
            { voiceChannel: ef } = (0, _.A)({ userId: er, guildId: b }),
            {
              avatarDecorationSrc: eE,
              avatarSrc: eg,
              eventHandlers: eA,
            } = (0, U.A)({
              userId: er,
              size: f._3.SIZE_32,
              animateOnHover: !(t || eu),
              guildId: b,
            }),
            { onFocus: e_, ...eS } = ei ?? {},
            eI = (0, x.gn)(b, er, r ?? null),
            [ey, eC] = l.useState(!1);
          l.useEffect(() => {
            t && eC(!1);
          }, [t]);
          let eT = (0, D.YW)(A),
            ev = (0, D.Yl)(eT, S, er) && t && !ey,
            eR = l.useCallback(() => {
              ed(!0);
            }, []),
            eN = l.useCallback(() => {
              ed(!1);
            }, []),
            eM = l.useCallback(() => {
              eh(!0), e_?.();
            }, [e_]),
            eb = l.useCallback(() => {
              eh(!1);
            }, []),
            ew = l.useCallback((e) => {
              em(e);
            }, []),
            ex = l.useCallback(
              (e) =>
                null == eT
                  ? null
                  : (0, i.jsx)(L.A, {
                      name: p ?? es,
                      quest: eT,
                      memberListItemRef: eo,
                      applicationStream: S,
                      ...e,
                      closePopout: () => eC(!0),
                    }),
              [eT, eo, S, p, es],
            );
          return null == m
            ? (0, i.jsx)(y.A, { avatarSize: f._3.SIZE_32, className: V.qf })
            : (0, i.jsx)(E.Y, {
                targetElementRef: eo,
                renderPopout: ex,
                position: "bottom",
                shouldShow: ev,
                nudgeAlignIntoViewport: !1,
                useRawTargetDimensions: !0,
                animation: E.Y.Animation.NONE,
                spacing: -3,
                children: () =>
                  (0, i.jsx)(C.A, {
                    ref: eo,
                    selected: t,
                    className: s()(V.Dc, w, {
                      [V.WK]: I === G.clD.OFFLINE && !t,
                      [V.PJ]: ev,
                    }),
                    innerClassName: V.Hz,
                    onClick: Y,
                    onKeyDown: B,
                    onMouseDown: k,
                    onContextMenu: W,
                    onMouseEnter: eR,
                    onMouseLeave: eN,
                    onBlur: eb,
                    hovered: eu,
                    name:
                      null == c
                        ? (0, i.jsx)("span", {
                            className: V.Xh,
                            children: (0, i.jsx)(q, {
                              colorRoleName: o,
                              colorString: n ?? null,
                              name: p ?? es,
                              colorStrings: eI,
                              hideClanTag: F,
                              user: m,
                              guildId: b,
                              isHovering: eu,
                            }),
                          })
                        : (0, i.jsx)(a.m, {
                            text: c,
                            children: (0, i.jsx)("span", {
                              className: s()(V.Xh, V.oj),
                              children: (0, i.jsx)(q, {
                                colorRoleName: o,
                                colorString: n ?? null,
                                name: p ?? es,
                                colorStrings: eI,
                                hideClanTag: F,
                                user: m,
                                guildId: b,
                                isHovering: eu,
                              }),
                            }),
                          }),
                    avatar: (0, i.jsx)(X, {
                      user: m,
                      shouldAnimateStatus: T,
                      activities: A,
                      status: I,
                      eventHandlers: eA,
                      avatarSrc: eg,
                      isMobile: v,
                      isVR: R,
                      isTyping: h,
                      avatarDecorationSrc: eE,
                      handleSetTypingRef: ew,
                      typingRef: ep,
                      currentUser: g,
                    }),
                    nameplate: O,
                    subText: (0, i.jsx)(K, {
                      hideSubtext: H,
                      activities: A,
                      status: I,
                      applicationStream: S,
                      voiceStatusChannel: ef,
                      user: m,
                      channel: M,
                      isHoveringOrFocusing: eu || ec,
                      quest: eT,
                      hideTooltip: P,
                    }),
                    decorators: (0, i.jsx)($, {
                      user: m,
                      isOwner: u,
                      lostPermissionTooltipText: c,
                      ownerTooltipText: d,
                      premiumSince: N,
                      onClickPremiumGuildIcon: z,
                    }),
                    "aria-controls": J,
                    "aria-expanded": Q,
                    "aria-setsize": ee,
                    "aria-posinset": Z,
                    id: et,
                    tabIndex: en,
                    onFocus: eM,
                    focusProps: {
                      offset: { top: 4, bottom: 4, left: 4, right: 4 },
                    },
                    ...eS,
                  }),
              });
        });
    },
    260762(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(887129),
        l = n(17928),
        r = n(775602);
      function s() {
        return Promise.resolve();
      }
      function a(e) {
        let t = document.querySelector(e);
        null != t && t.focus();
      }
      function o(e, t) {
        let n = (0, l.bG)([r.A], () => r.A.keyboardModeEnabled);
        return (0, i.Ay)({
          id: e,
          isEnabled: n,
          orientation: t,
          setFocus: a,
          scrollToStart: s,
          scrollToEnd: s,
        });
      }
    },
    685399(e, t, n) {
      n.d(t, { Ay: () => c, IQ: () => p, Rz: () => m, a1: () => h }), n(321073);
      var i = n(64700),
        l = n(17928),
        r = n(429913),
        s = n(290863),
        a = n(287809),
        o = n(403362),
        u = n(933958),
        d = n(969151);
      function c(e, t) {
        return p(
          (0, l.yK)([u.Ay], () =>
            null != e && null != e.id && "" !== e.id
              ? u.Ay.getEmbeddedActivitiesForChannel(e.id)
              : u.Am,
          ),
          t,
        );
      }
      function h(e) {
        let t = p(
          (0, l.bG)([u.Ay], () =>
            null != e ? u.Ay.getEmbeddedActivitiesForGuild(e) : u.Am,
          ),
        );
        return i.useMemo(() => {
          let e = new Map();
          return (
            t.forEach((t) => {
              let n = (0, d.H)(t.embeddedActivity.location);
              if (null == n) return;
              let i = e.get(n) ?? [];
              i.push(t), e.set(n, i);
            }),
            e
          );
        }, [t]);
      }
      function p(e, t) {
        let n = e.map((e) => e.applicationId),
          s = (0, r.A)(n),
          u = new Set([]);
        for (let t of e) for (let e of t.userIds) u.add(e);
        let d = (0, l.yK)(
          [a.default],
          () => {
            let e = [];
            for (let t of u) e.push(a.default.getUser(t));
            return e;
          },
          [u],
        );
        return i.useMemo(() => {
          let n = new Map();
          return (
            d.forEach((e) => {
              null != e && n.set(e.id, e);
            }),
            e
              .map((e, i) => {
                let l = s[i],
                  r = [];
                if (null != r)
                  for (let i of e.userIds) {
                    let e = n.get(i);
                    if (null != e && null != t) {
                      let n = t(e);
                      null != n && r.push(n);
                    }
                  }
                return null == l
                  ? null
                  : {
                      embeddedActivity: e,
                      application: l,
                      userParticipantAvatarUrls: r,
                    };
              })
              .filter(o.Vq)
          );
        }, [e, s, d, t]);
      }
      function m(e) {
        return (0, l.bG)(
          [s.A],
          () => {
            let t = new Map();
            return (
              e.forEach((e) => {
                let n = s.A.findActivity(
                  e?.embeddedActivity.userIds.values().next().value,
                  (t) => t.application_id === e?.application?.id,
                );
                t.set(e?.application?.id, { ...e, presenceActivity: n });
              }),
              t
            );
          },
          [e],
          l.My,
        );
      }
    },
    849269(e, t, n) {
      n.d(t, {
        Ay: () => v,
        Hq: () => N,
        l$: () => R,
        o6: () => T,
        wK: () => M,
      });
      var i,
        l = n(308528),
        r = n(155718),
        s = n(688810),
        a = n(429913),
        o = n(20015),
        u = n(625180),
        d = n(375802),
        c = n(723702),
        h = n(933958),
        p = n(62583),
        m = n(956549),
        f = n(685399),
        E = n(969151),
        g = n(847381),
        A = n(435582),
        _ = n(902439),
        S = n(620148),
        I = n(283488),
        y = n(360469),
        C = n(652215),
        T =
          (((i = {})[(i.START = 0)] = "START"),
          (i[(i.JOIN = 1)] = "JOIN"),
          (i[(i.LEAVE = 2)] = "LEAVE"),
          i);
      function v(e) {
        let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: l,
            embeddedActivitiesManager: s,
            assetNames: a = ["embedded_cover"],
            backgroundResolution: o = 250,
            launchingComponentId: u,
            commandOrigin: d,
            source: h,
          } = e,
          { application: p, activity: m } = t,
          E = m.client_platform_config[(0, g.A)((0, c.getOS)())],
          _ = Date.now(),
          S =
            null != E.label_until &&
            _ < Date.parse(E.label_until) &&
            null != E.label_from &&
            _ > Date.parse(E.label_from),
          y = (0, I.A)({
            applicationId: p.id,
            size: o,
            names: a,
            format: "webp",
          }),
          C =
            null != m.activity_preview_video_asset_id
              ? (0, A.A)(p.id, m.activity_preview_video_asset_id)
              : null,
          T = (0, f.Ay)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
          }),
          v = N({ context: n, applicationId: p.id }),
          b = M({
            application: t.application,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: s,
            onActivityItemSelectedProp: l,
            launchingComponentId: u,
            commandOrigin: d,
            source: h,
          }),
          w = R(p, t.activity);
        return {
          imageBackground: y,
          videoUrl: C,
          joinableEmbeddedApp: T,
          activityAction: v,
          onActivityItemSelected: b,
          labelType: S ? E.label_type : r.Hr.NONE,
          staffReleasePhase: w,
        };
      }
      function R(e, t) {
        if (
          !(
            (0, o.n)(e, C.gfo.EMBEDDED_RELEASED) ||
            (0, o.n)(e, C.gfo.EMBEDDED_FIRST_PARTY)
          )
        )
          return;
        let n =
          t.client_platform_config[(0, g.A)((0, c.getOS)())].release_phase;
        return y.qG.includes(n)
          ? n.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase())
          : void 0;
      }
      function N(e) {
        let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
          l = 0,
          r = "channel" === t.type ? t.channel : void 0,
          s = (0, _.A)(),
          o = (0, S.A)({ fetchesApplication: i }),
          u = (0, a.h)(n, i),
          d = (0, f.Ay)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != u && u.id === t.applicationId;
          });
        if (null == u) return l;
        let c = (0, E.H)(s?.location);
        return (
          null != r && c === r.id && o?.id === u.id
            ? (l = 2)
            : null != d && (l = 1),
          l
        );
      }
      function M(e) {
        let {
            application: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: r,
            embeddedActivitiesManager: a,
            onActivityItemSelectedProp: o,
            launchingComponentId: c,
            commandOrigin: f,
            sectionName: E,
            source: g,
            fetchesApplication: A = !0,
            customId: S,
            referrerId: I,
            onConfirmActivityLaunchChecksAlertOpen: y,
          } = e,
          C = t?.id ?? "",
          T = N({ context: i, applicationId: C, fetchesApplication: A }),
          { analyticsLocations: v } = (0, s.Ay)(),
          R = (0, _.A)(),
          M = (0, d.e)(t);
        if (null == t)
          return () => {
            o?.({ applicationId: "" });
          };
        switch (T) {
          case 0:
            return async () => {
              if (M) {
                try {
                  await u.A.launchFrame({ applicationId: C }),
                    o?.({ applicationId: C });
                } catch (e) {}
                return;
              }
              let e = "channel" === i.type ? i.channel.id : void 0;
              if (null != n)
                try {
                  e = await l.A.openPrivateChannel({
                    recipientIds: n,
                    navigateToChannel: !0,
                  });
                } catch (e) {
                  return;
                }
              await (0, m.A)({
                targetApplicationId: C,
                locationObject: r,
                channelId: e,
                analyticsLocations: v,
                componentId: c,
                commandOrigin: f,
                sectionName: E,
                source: g,
                customId: S,
                referrerId: I,
                onConfirmActivityLaunchChecksAlertOpen: y,
              }).then((e) => e && o?.({ applicationId: C }));
            };
          case 1:
            return async () => {
              h.Ay.isLaunchingActivity() ||
                (await (0, p.A)({
                  applicationId: C,
                  activityChannelId:
                    "channel" === i.type ? i.channel.id : void 0,
                  locationObject: r,
                  analyticsLocations: v,
                  componentId: c,
                  sectionName: E,
                  source: g,
                  customId: S,
                  referrerId: I,
                }).then((e) => e && o?.({ applicationId: C })));
            };
          case 2:
            return () => {
              h.Ay.isLaunchingActivity() ||
                (null != R &&
                  a.leaveActivity({ location: R.location, applicationId: C }),
                o?.({ applicationId: C }));
            };
        }
      }
    },
    850046(e, t, n) {
      n.d(t, { A: () => f, M: () => m });
      var i = n(64700),
        l = n(205338),
        r = n(87075),
        s = n(429913),
        a = n(201718),
        o = n(207803),
        u = n(403362),
        d = n(789069),
        c = n(385771);
      let h = {
        [l.A.MARVEL_RIVALS]: (e) => {
          let t = e.data?.primary?.season,
            n = e.data?.primary?.rank_name,
            i = (0, d.a)(e.data?.primary?.rank_image),
            l = (0, d.a)(e.data?.primary?.featured_played_character_image);
          return null == t || null == n || null == l
            ? null
            : {
                previewText: `${t}: ${n}`,
                previewTextShort: n,
                previewIcon: i,
                previewImage: l,
              };
        },
        [l.A.WUTHERING_WAVES]: (e, t) => {
          var n;
          let i,
            l = e.username,
            s =
              ((n = r.f.NUMBER),
              null ==
                (i = e.data?.dynamic?.find((e) => "union_level" === e.name)) ||
              i.type !== n
                ? null
                : i.value),
            a = (0, d.a)(e.data?.primary?.featured_played_character_image);
          return null == l || null == s || null == a
            ? null
            : {
                previewText: `${l}: Level ${t.format(s)}`,
                previewTextShort: `Level ${t.format(s)}`,
                previewIcon: null,
                previewImage: a,
              };
        },
      };
      function p(e, t, n, i) {
        let l = t.getIconURL(16);
        if (null == l) return null;
        let r = h[e.widgetTemplateId](n, i);
        return null == r
          ? null
          : { application: { id: t.id, name: t.name, icon: l }, ...r };
      }
      function m(e, t, n, i) {
        return p(e, t, n, i);
      }
      function f(e, t) {
        let n = (0, s.A)(t),
          { data: l } = (0, o.FY)(),
          { data: r } = (0, a.P)(e),
          d = (0, c.A)();
        return i.useMemo(
          () =>
            Object.fromEntries(
              t
                .map((e) => {
                  let t = l?.find((t) => t.applicationId === e),
                    i = n.find((t) => t?.id === e),
                    s = r?.find((t) => t.application_id === e)?.profile;
                  if (null == t || null == i || null == s) return null;
                  let a = p(t, i, s, d);
                  return null == a ? null : [e, a];
                })
                .filter(u.Vq),
            ),
          [n, l, r, d, t],
        );
      }
    },
    458990(e, t, n) {
      n.d(t, { A: () => eI, Y: () => eg });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        s = n.n(r),
        a = n(735438),
        o = n.n(a),
        u = n(837381);
      if (21552 == n.j) var d = n(887129);
      var c = n(607399),
        h = n(17928),
        p = n(140735),
        m = n(312138),
        f = n(707554),
        E = n(475825);
      if (21552 == n.j) var g = n(506309);
      var A = n(442433),
        _ = n(361610),
        S = n(414798),
        I = n(110574),
        y = n(775602),
        C = n(793574),
        T = n(58149),
        v = n(688810),
        R = n(941726),
        N = n(449582),
        M = n(276055),
        b = n(83974),
        w = n(420706),
        x = n(228366),
        D = n(963307),
        L = n(734057),
        U = n(71393),
        O = n(531685),
        j = n(954571),
        G = n(99066),
        F = n(435738),
        H = n(376261),
        P = n(947593),
        V = n(518741),
        k = n(424994),
        B = n(495744),
        Y = n(652215),
        W = n(985018);
      let $ = 21552 == n.j ? 3e3 : null;
      var q = n(485947),
        X = n(915089),
        K = n(509536),
        z = n(201275),
        J = n(657048),
        Q = n(728321),
        Z = n(342296),
        ee = n(773669),
        et = n(317525),
        en = n(994500),
        ei = n(309010),
        el = n(741961),
        er = n(287809),
        es = n(977997),
        ea = n(625494),
        eo = n(403362),
        eu = n(427262),
        ed = n(19575),
        ec = n(47167),
        eh = n(540808);
      let ep = ed.Ay.getEnableHardwareAcceleration(),
        em = {
          origin: { x: 38, y: 11 },
          targetWidth: 232,
          targetHeight: 40,
          offset: { x: 0, y: 0 },
        },
        ef = l.memo(function (e) {
          let {
              colorString: t,
              colorStrings: r,
              colorRoleName: s,
              colorRoleId: a,
              isOwner: o,
              nick: u,
              user: d,
              currentUser: h,
              activities: p,
              applicationStream: m,
              status: f,
              channel: E,
              guildId: g,
              isTyping: _,
              isMobileOnline: y,
              isVROnline: C,
              premiumSince: T,
              nameplate: v,
              ...R
            } = e,
            N = l.useRef(null),
            [M, b] = l.useState(!1),
            w = null != T ? new Date(T) : null,
            x = l.useCallback(
              (e) => {
                (0, A.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("17546"),
                      n.e("80848"),
                      n.e("40841"),
                      n.e("98042"),
                      n.e("98944"),
                      n.e("62731"),
                      n.e("22011"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("55411"),
                      n.e("93103"),
                      n.e("8757"),
                      n.e("89673"),
                      n.e("68403"),
                      n.e("85968"),
                      n.e("76418"),
                      n.e("60195"),
                      n.e("21921"),
                      n.e("91007"),
                      n.e("66495"),
                      n.e("29787"),
                      n.e("88342"),
                      n.e("97558"),
                      n.e("94000"),
                      n.e("82263"),
                      n.e("91994"),
                      n.e("42451"),
                      n.e("98965"),
                      n.e("35027"),
                      n.e("76665"),
                      n.e("54975"),
                      n.e("49697"),
                      n.e("71133"),
                      n.e("35313"),
                      n.e("77265"),
                      n.e("24198"),
                      n.e("39171"),
                      n.e("36564"),
                      n.e("52229"),
                      n.e("792"),
                      n.e("45996"),
                      n.e("61268"),
                      n.e("92822"),
                      n.e("19871"),
                      n.e("24170"),
                      n.e("14461"),
                      n.e("25486"),
                      n.e("23427"),
                      n.e("49145"),
                      n.e("94503"),
                      n.e("29422"),
                      n.e("9291"),
                      n.e("28152"),
                      n.e("49644"),
                      n.e("7059"),
                      n.e("49520"),
                      n.e("65826"),
                      n.e("42204"),
                      n.e("78195"),
                      n.e("66783"),
                      n.e("22261"),
                      n.e("11617"),
                      n.e("43116"),
                      n.e("74021"),
                      n.e("13708"),
                      n.e("70314"),
                      n.e("70515"),
                      n.e("30221"),
                      n.e("27435"),
                      n.e("66939"),
                      n.e("24240"),
                      n.e("20134"),
                      n.e("17334"),
                      n.e("1864"),
                      n.e("84841"),
                    ]).then(n.bind(n, 107632)),
                    t = es.A.isInChannel(ei.A.getVoiceChannelId(), d.id);
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: d,
                      guildId: g,
                      channel: E,
                      showMediaItems: t,
                    });
                });
              },
              [d, g, E],
            ),
            D = l.useCallback(() => {
              let e = `@${eu.Ay.getUserTag(d, { decoration: "never" })}`,
                t = `<@${d.id}>`;
              ea._.dispatch(Y.jej.TEXTAREA_FOCUS, { channelId: E.id }),
                ea._.dispatchToLastSubscribed(Y.jej.INSERT_TEXT, {
                  plainText: e,
                  rawText: t,
                }),
                S.A.startTyping(E.id);
            }, [d, E.id]),
            L = l.useCallback(
              (e) => {
                null != g &&
                  (e.stopPropagation(),
                  (0, K.K4)({
                    guildId: g,
                    location: {
                      section: Y.JJy.MEMBER_LIST,
                      object: Y.ZSU.BOOST_GEM_ICON,
                    },
                  }));
              },
              [g],
            );
          return (0, i.jsx)(Z.A, {
            targetElementRef: N,
            user: d,
            guildId: g,
            channelId: E.id,
            roleId: a,
            position: c.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: D,
            shouldShow: M,
            onRequestClose: () => {
              b(!1);
            },
            children: (e) => {
              let { onClick: n, onMouseDown: l, ...a } = e;
              return (0, i.jsx)(I.A, {
                ref: N,
                className: eh.Dc,
                onContextMenu: x,
                shouldAnimateStatus: ep,
                user: d,
                currentUser: h,
                nick: u,
                status: f,
                activities: p,
                applicationStream: m,
                isOwner: o,
                premiumSince: w,
                colorString: t,
                colorStrings: r,
                colorRoleName: s,
                isTyping: _,
                channel: E,
                guildId: g,
                isMobile: y,
                isVR: C,
                onClickPremiumGuildIcon: L,
                selected: M,
                itemProps: R,
                nameplate: v,
                onClick: (e) => {
                  e.shiftKey ? D?.() : b((e) => !e);
                },
                onMouseDown: (e) => {
                  M ? e.stopPropagation() : l?.(e);
                },
                ...a,
              });
            },
          });
        }),
        eE = l.memo(function (e) {
          let { colorRoleId: t, ...n } = e,
            { channel: l, user: r, index: s } = e,
            a = (0, u.rm)(`${s}`),
            o = (0, h.bG)([el.A], () => el.A.isTyping(l.id, r.id)),
            d = (0, h.bG)([er.default], () => er.default.getCurrentUser()),
            c = (0, h.bG)(
              [et.A],
              () => (null != t ? et.A.getRole(l.guild_id, t)?.name : void 0),
              [l, t],
            ),
            p = (0, N.r)({ user: r, guildId: l.guild_id });
          return (0, i.jsx)(ef, {
            ...n,
            ...a,
            isTyping: o,
            currentUser: d,
            colorRoleName: c,
            nameplate: p,
          });
        }),
        eg = l.memo(function (e) {
          let { id: t, title: r, count: s, guildId: a, className: o } = e,
            u = (0, z.$7)({ roleId: t, guildId: a, size: 16 }),
            d = (0, h.bG)(
              [ee.default],
              () =>
                null == s
                  ? null
                  : new Intl.NumberFormat(ee.default.locale).format(s),
              [s],
            ),
            c = l.useCallback(
              (e) => {
                u?.src != null &&
                  (0, A.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("95340"),
                      n.e("33743"),
                    ]).then(n.bind(n, 455538));
                    return (t) => (0, i.jsx)(e, { ...t, imageUrl: u.src });
                  });
              },
              [u?.src],
            );
          return t === Y.clD.UNKNOWN
            ? (0, i.jsx)("div", {
                className: o,
                children: (0, i.jsx)("div", { className: eh.k1 }),
              })
            : (0, i.jsxs)(q.A, {
                className: o,
                children: [
                  (0, i.jsx)(p.A, {
                    children:
                      null == s
                        ? r
                        : W.intl.format(W.t.Uaqbke, { title: r, count: s }),
                  }),
                  (0, i.jsxs)("div", {
                    className: eh.CN,
                    "aria-hidden": !0,
                    children: [
                      null != u
                        ? (0, i.jsx)("span", {
                            onContextMenu: c,
                            children: (0, i.jsx)(J.A, {
                              className: eh.UT,
                              ...u,
                            }),
                          })
                        : null,
                      (0, i.jsx)("span", { className: eh.iy, children: r }),
                      null == d
                        ? null
                        : (0, i.jsxs)("span", { children: ["\xa0— ", d] }),
                    ],
                  }),
                ],
              });
        });
      function eA(e) {
        let { index: t } = e,
          n = (0, u.rm)(`${t}`);
        return (0, i.jsx)(I.A, { itemProps: n });
      }
      class e_ extends l.Component {
        _list = null;
        _firstApplicationIdOccurrences = null;
        _lastRowsVersion;
        lastReportedAnalyticsChannel;
        shouldComponentUpdate(e) {
          return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
          );
        }
        componentDidMount() {
          this.updateSubscription(), this.trackMemberListViewed();
        }
        componentDidUpdate(e) {
          e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen();
        }
        setList = (e) => {
          (this._list = e), (this.props.listRef.current = e);
        };
        renderSection = (e) => {
          let { section: t } = e,
            { groups: n, channel: r } = this.props,
            s = n[t];
          if ((0, M.l)(s))
            return (0, l.createElement)(M.A, { ...s, key: `section-${t}` });
          if (0 === t) {
            let { key: e } = s;
            return (0, i.jsx)(
              Q.A,
              {
                tutorialId: "whos-online",
                position: "left",
                inlineSpecs: em,
                children: (0, l.createElement)(eg, {
                  ...s,
                  key: `section-${e}`,
                  guildId: r.guild_id,
                  className: eh.lL,
                }),
              },
              `section-${t}`,
            );
          }
          return (0, l.createElement)(eg, {
            ...s,
            key: `section-${t}`,
            guildId: r.guild_id,
            className: eh.lL,
          });
        };
        getRowProps = (e) => {
          let { groups: t, rows: n } = this.props,
            i = t[e.section];
          if (null == i) return null;
          let { index: l } = i;
          return null == l || "row" !== e.type ? null : n[l + 1 + e.row];
        };
        getFirstApplicationIdOccurrences = () => {
          let { rows: e, version: t } = this.props;
          if (
            null != this._firstApplicationIdOccurrences &&
            this._lastRowsVersion === t
          )
            return this._firstApplicationIdOccurrences;
          let n = new Set(),
            i = new Set();
          for (let t of e)
            if (null != t && t.type === D.S9.CONTENT_INVENTORY) {
              let { entry: e } = t;
              if (
                "application_id" in e.extra &&
                null != e.extra.application_id
              ) {
                let t = e.extra.application_id;
                n.has(t) || (n.add(t), i.add(e.id));
              }
            }
          return (
            (this._firstApplicationIdOccurrences = i),
            (this._lastRowsVersion = t),
            i
          );
        };
        renderRow = (e) => {
          let { section: t, row: n, rowIndex: l } = e,
            { channel: r } = this.props,
            s = this.getRowProps(e);
          if (null != s) {
            if (s.type === D.S9.MEMBER && "user" in s) {
              let {
                colorString: e,
                colorStrings: t,
                colorRoleId: n,
                user: a,
                status: o,
                isOwner: u,
                isMobileOnline: d,
                isVROnline: c,
                nick: h,
                activities: p,
                applicationStream: m,
                premiumSince: f,
              } = s;
              return (0, i.jsx)(
                eE,
                {
                  colorString: e,
                  colorStrings: t,
                  colorRoleId: n,
                  user: a,
                  status: o,
                  isOwner: u,
                  nick: h,
                  activities: p,
                  applicationStream: m,
                  channel: r,
                  guildId: r.guild_id,
                  premiumSince: f,
                  isMobileOnline: d,
                  isVROnline: c,
                  index: l,
                },
                `member-${s.user.id}`,
              );
            }
            if (s.type === D.S9.CONTENT_INVENTORY) {
              let e = `content-inventory-${s.entry.id}`;
              null != s.entry.original_id && (e += `-${s.entry.original_id}`);
              let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
              return (0, i.jsx)(
                w.Ay,
                {
                  ...s,
                  channel: this.props.channel,
                  index: l,
                  isFirstApplicationOccurrence: t,
                },
                e,
              );
            }
            if (s.type === D.S9.HIDDEN_CONTENT_INVENTORY)
              return (0, i.jsx)(b.A, {}, "content-inventory-hidden-entry");
          }
          return (0, i.jsx)(eA, { index: l }, `placeholder-${t}:${n}`);
        };
        handleScroll = () => {
          this.updateSubscription(), this.updateMaxContentFeedRowSeen();
        };
        updateMaxContentFeedRowSeen = o().debounce(() => {
          let e = this._list;
          if (null == e) return;
          let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
          this.props.updateMaxContentFeedRowSeen(i);
        }, 50);
        getContentFeedGroup = () => {
          let e = this.props.groups[0];
          if ((0, M.l)(e)) return e;
        };
        hasContentFeed = () => null != this.getContentFeedGroup();
        getRowHeightComputer = () => {
          let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
          if (null != e) {
            let { rows: n } = this.props,
              i = e.index;
            return function (e, l) {
              if (0 === e) {
                let e = n[i + 1 + l];
                return (0, w.h9)(e);
              }
              return t;
            };
          }
          return t;
        };
        getContentFeedHeight = () => {
          let e = this.getContentFeedGroup();
          return null != e ? e.feedHeight + this.props.sectionHeight : 0;
        };
        getContentFeedAdjustedDimensions(e) {
          let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            r = Math.max(0, t - Math.max(0, l - i)),
            s = Math.floor(r / n);
          return {
            height: r,
            rowHeight: n,
            rowsVisible: s,
            y: Math.max(0, i - l),
          };
        }
        getDimensions() {
          let e = this._list;
          if (null == e) return { y: 0, height: 0, rowHeight: 0 };
          let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(t / i);
          return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: i,
            rowsVisible: l,
            y: n,
          });
        }
        updateSubscription = o().debounce(() => {
          if (null == this._list) return;
          let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
          (0, _.NJ)({
            guildId: e.guild_id,
            channelId: e.id,
            y: n,
            height: i,
            rowHeight: t,
          });
        }, 50);
        trackMemberListViewed = () => {
          if (this.lastReportedAnalyticsChannel === this.props.channel.id)
            return;
          let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
          if (void 0 === t || 0 === t || null == e) return;
          this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
          let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(eo.Vq);
          if (0 === n.length) return;
          let i = n.reduce(
            (e, t) => (
              t.type !== D.S9.MEMBER ||
                (e.num_users_visible++,
                t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                null != t.activities &&
                  t.activities.length > 0 &&
                  (e.num_users_visible_with_activity++,
                  t.activities.some((e) => e.type === Y.$pd.PLAYING) &&
                    e.num_users_visible_with_game_activity++),
                null != t.user.avatarDecoration &&
                  e.num_users_visible_with_avatar_decoration++,
                t.user.collectibles?.nameplate != null &&
                  e.num_users_visible_with_nameplate++),
              e
            ),
            {
              num_users_visible: 0,
              num_users_visible_with_mobile_indicator: 0,
              num_users_visible_with_game_activity: 0,
              num_users_visible_with_activity: 0,
              num_users_visible_with_avatar_decoration: 0,
              num_users_visible_with_nameplate: 0,
            },
          );
          (this.lastReportedAnalyticsChannel = this.props.channel.id),
            T.Ay.trackWithMetadata(Y.HAw.MEMBER_LIST_VIEWED, { ...i });
        };
        render() {
          let {
            groups: e,
            listId: t,
            channel: n,
            sectionHeight: l,
          } = this.props;
          return (0, i.jsx)(m.sk, {
            children: (r) =>
              (0, i.jsx)(X.V0, {
                children: (a) =>
                  (0, i.jsx)("aside", {
                    className: s()(eh.yg, eh.ML),
                    "aria-labelledby": a,
                    children: (0, i.jsx)(f.F, {
                      component: (0, i.jsx)(p.A, {
                        children: (0, i.jsx)(f.H, {
                          id: a,
                          children: W.intl.format(W.t.JBQxV6, {
                            channel: (0, ec.m1)(n, er.default, en.A),
                          }),
                        }),
                      }),
                      children: (0, i.jsx)(u.PR, {
                        children: (n) => {
                          let { ref: a, role: o, ...u } = n;
                          return (0, i.jsx)(
                            E.OZ,
                            {
                              innerRole: o,
                              innerAriaLabel: W.intl.string(W.t["9Oq93m"]),
                              ref: (e) => {
                                (this._list = e),
                                  (this.props.listRef.current = e),
                                  (a.current = e?.getScrollerNode() ?? null);
                              },
                              className: s()(eh.ol, { [eh.Ij]: c.Fr }),
                              paddingTop: 0,
                              sectionHeight: l,
                              rowHeight: this.getRowHeightComputer(),
                              renderSection: this.renderSection,
                              renderRow: this.renderRow,
                              sections: e.map((e) => e.count),
                              onScroll: this.handleScroll,
                              fade: !0,
                              ...u,
                              ...r,
                            },
                            t,
                          );
                        },
                      }),
                    }),
                  }),
              }),
          });
        }
      }
      function eS(e) {
        let { channel: t, className: n } = e,
          { analyticsLocations: r } = (0, v.Ay)(C.A.MEMBER_LIST),
          a = (0, h.bG)([y.A], () => y.A.keyboardModeEnabled),
          o = (0, h.cf)([D.Ay], () => D.Ay.getProps(t.guild_id, t.id)),
          {
            rows: c,
            groups: p,
            version: m,
            updateMaxRowSeen: f,
          } = (function (e) {
            let {
                memberStoreProps: { groups: t, rows: n, version: i },
                channelId: r,
                guildId: s,
              } = e,
              [a, o] = l.useState(!1),
              {
                requestId: u,
                entries: d,
                impressionCappedEntryIds: c,
              } = (0, V.A)(r),
              p = (0, h.bG)([F.A], () => F.A.hidden),
              m = (0, h.bG)([O.A], () => O.A.isFocused()),
              f = (0, h.bG)([L.A], () => L.A.getChannel(r)),
              E = (0, h.bG)([U.A], () => U.A.getGuild(s), [s]),
              g = ((0, H.T)(E) ?? !1) && f?.isForumChannel() === !1,
              [A, _, S, I] = l.useMemo(() => {
                let e;
                if (null == d || 0 === d.length || null == u || !g)
                  return [t, n, i];
                let l = a ? d.length : 3,
                  c = d.slice(0, l);
                e = p
                  ? [{ type: D.S9.HIDDEN_CONTENT_INVENTORY }]
                  : c.map((e) => ({
                      type: D.S9.CONTENT_INVENTORY,
                      entry: e,
                      requestId: u,
                    }));
                let h = {
                  id: B.C,
                  type: D.S9.CONTENT_INVENTORY_GROUP,
                  key: B.C,
                  count: e.length,
                  index: n.length,
                  title: W.intl.string(W.t["6gwSFY"]),
                  onToggleExpand: () => {
                    o((e) => {
                      let t = !e;
                      return (
                        j.default.track(Y.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                          channel_id: r,
                          guild_id: s,
                          expanded: t,
                        }),
                        t
                      );
                    });
                  },
                  expanded: a,
                  expandedCount: d.length,
                  feedHeight: e.map(w.h9).reduce((e, t) => e + t, 0),
                };
                return [[h, ...t], [...n, h, ...e], Math.random(), e];
              }, [r, d, a, t, s, u, n, i, p, g]),
              y = l.useRef(0),
              C = l.useRef(d),
              T = l.useRef(void 0),
              v = l.useRef({ impressionCappedEntryIds: c }),
              R = l.useCallback(
                (e) => {
                  let t = Math.floor(e / w.bG),
                    n = Math.min(I?.length ?? 0, t);
                  y.current = Math.max(y.current, n);
                },
                [I],
              );
            return (
              l.useEffect(() => {
                C.current = d;
              }, [d]),
              l.useEffect(() => {
                v.current = { impressionCappedEntryIds: c };
              }, [c]),
              l.useEffect(
                () => (
                  (y.current = 0),
                  (T.current = Date.now()),
                  () => {
                    if (
                      null == u ||
                      null == T.current ||
                      Date.now() - T.current < $
                    )
                      return;
                    let e = C.current?.map((e) => e.id) ?? [],
                      t = e.slice(0, y.current);
                    !p &&
                      m &&
                      g &&
                      ((0, P.D)(Y.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                        request_id: u,
                        first_shown_at: T.current,
                        item_ids: t,
                        surface_type: k.UG.GUILD_MEMBER_LIST,
                        channel_id: r,
                        guild_id: s,
                        all_item_ids: e,
                        impression_capped_item_ids: [
                          ...v.current.impressionCappedEntryIds,
                        ],
                      }),
                      (0, G.sE)("useInjectContentInventoryFeed") &&
                        x.h.dispatch({
                          type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
                          itemIds: t,
                        }));
                  }
                ),
                [u, r, s, p, m, g],
              ),
              { groups: A, rows: _, version: S, updateMaxRowSeen: R }
            );
          })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
          E = l.useRef(null),
          A = (0, g.W)("lg") + (0, g.W)("xxs"),
          _ = l.useCallback(
            (e, t) => {
              let n = E.current;
              if (null == n) return;
              let i = parseInt(t, 10),
                [l, r] = n.getSectionRowFromIndex(i);
              n.scrollToIndex({
                section: l,
                row: r,
                padding: 42 * (0 === l && 0 === r),
                callback: () => {
                  requestAnimationFrame(() =>
                    document.querySelector(e)?.focus({ preventScroll: !0 }),
                  );
                },
              });
            },
            [42],
          ),
          S = l.useCallback(
            () =>
              new Promise((e) => {
                let t = E.current;
                if (null == t) return e();
                t.scrollToTop({
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [],
          ),
          I = l.useCallback(
            () =>
              new Promise((e) => {
                let t = E.current;
                if (null == t) return e();
                t.scrollToBottom({
                  callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                  },
                });
              }),
            [],
          ),
          T = (0, d.Ay)({
            id: `members-${t.id}`,
            setFocus: _,
            isEnabled: a,
            scrollToStart: S,
            scrollToEnd: I,
          });
        return (0, i.jsx)(v.f5, {
          value: r,
          children: (0, i.jsx)("div", {
            className: s()(eh.kL, n),
            children: (0, i.jsx)(u.hD, {
              navigator: T,
              children: (0, i.jsx)(e_, {
                ...e,
                ...o,
                version: m,
                groups: p,
                rows: c,
                listRef: E,
                updateMaxContentFeedRowSeen: f,
                sectionHeight: 18 + A,
                rowHeight: 42,
              }),
            }),
          }),
        });
      }
      function eI(e) {
        let { channel: t, className: n } = e,
          r = l.useDeferredValue(t);
        return l.useMemo(
          () =>
            (0, i.jsx)(R.r$, {
              children: (0, i.jsx)(eS, { channel: r, className: n }),
            }),
          [r, n],
        );
      }
    },
    939341(e, t, n) {
      n.d(t, { C4: () => g, D8: () => S, XN: () => _, nO: () => A });
      var i = n(573648),
        l = n(541806),
        r = n(141639),
        s = n(61330),
        a = n(429913),
        o = n(569926),
        u = n(82149),
        d = n(970928),
        c = n(486020),
        h = n(20805),
        p = n(327098),
        m = n(652215),
        f = n(360469),
        E = n(985018);
      function g(e) {
        let t = e?.getIconURL(f.iu.LARGE),
          n = e?.name;
        if (null != t)
          return {
            src: t,
            alt:
              null == n
                ? E.intl.string(E.t["2B/phM"])
                : E.intl.formatToPlainString(E.t.tiKyYg, {
                    applicationName: n,
                  }),
          };
      }
      function A(e) {
        let { entry: t, showCoverImage: n = !0 } = e,
          {
            activity: i,
            activityApplication: l,
            fallbackApplication: r,
          } = (0, p.A)(t),
          { largeImage: s, smallImage: a } = S(i, l),
          { largeImage: u } = _(i, r ?? l),
          { data: c } = (0, o.I)((r ?? l)?.id),
          m = c?.getCoverURL(),
          E =
            (0, h.Tq)(t) && t.extra.entries.length > 0
              ? { src: t.extra.entries[0].media.image_url }
              : (0, h.Lf)(t)
                ? {
                    src: (0, d.uD)(
                      t.extra.application_id,
                      t.extra.media_assets_large_image,
                      f.iu.LARGE,
                    ),
                    alt: t.extra.media_title,
                  }
                : (0, h.p6)(t)
                  ? { src: t.extra.media.image_url }
                  : void 0;
        return null != s
          ? { largeImage: s, smallImage: a }
          : null != E
            ? { largeImage: E, smallImage: void 0 }
            : null != m && n
              ? { largeImage: { src: m }, smallImage: void 0 }
              : { largeImage: u, smallImage: void 0 };
      }
      function _(e, t) {
        let { largeImage: n, smallImage: l } = S(e, t);
        if (null != n) return { largeImage: n, smallImage: l };
        if ((0, u.Cy)(e)) {
          let t = (0, u.UW)(e),
            n =
              null != t
                ? c.Ay.getGuildIconURL({
                    id: t.guildId,
                    icon: e?.assets?.small_image,
                    size: f.iu.SMALL,
                  })
                : void 0;
          return {
            largeImage: null != n ? { src: n } : void 0,
            smallImage: void 0,
          };
        }
        if (null == n && (0, s.A)(e))
          return {
            largeImage: {
              src: i.A.get(m.fg2.XBOX).icon.customPNG,
              alt: E.intl.string(E.t.Nfvo72),
            },
            smallImage: void 0,
          };
        if (null == n && null == l && (0, r.A)(e))
          return {
            largeImage: {
              src: i.A.get(m.fg2.PLAYSTATION).icon.lightPNG,
              alt: E.intl.string(E.t.fFl4jo),
            },
            smallImage: void 0,
          };
        let a = g(t);
        return null != a
          ? { largeImage: a, smallImage: l }
          : { largeImage: l, smallImage: void 0 };
      }
      function S(e, t) {
        let n = (0, a.h)(e?.application_id);
        if (null == e) return { largeImage: void 0, smallImage: void 0 };
        let i = e?.assets?.large_image,
          r =
            null != i
              ? {
                  src: (0, d.uD)(e.application_id, i, [f.iu.LARGE, f.iu.LARGE]),
                  text: e.assets?.large_text?.trim(),
                  url: e.assets?.large_url,
                }
              : void 0,
          s = (0, l.A)(e) ? void 0 : e?.assets?.small_image,
          o =
            null != s
              ? {
                  src: (0, d.uD)(e.application_id, s, [f.iu.LARGE, f.iu.LARGE]),
                  text: e.assets?.small_text?.trim(),
                  url: e.assets?.small_url,
                }
              : void 0;
        return { largeImage: r ?? g(t ?? n), smallImage: o };
      }
    },
    428249(e, t, n) {
      n.d(t, { J: () => s, d: () => r });
      var i = n(720149),
        l = n(451909);
      function r(e) {
        let {
            channel: t,
            content: n,
            entry: r,
            whenReady: s,
            doNotNotifyOnError: a,
            location: o,
          } = e,
          u = l.Ay.parse(t, n);
        return i.A.sendMessage(t.id, u, s, {
          contentInventoryEntry: { unverified_content: r },
          doNotNotifyOnError: a,
          location: o,
        });
      }
      function s(e) {
        let {
            channel: t,
            content: n,
            whenReady: r,
            doNotNotifyOnError: s,
            location: a,
          } = e,
          o = l.Ay.parse(t, n);
        return i.A.sendMessage(t.id, o, r, {
          doNotNotifyOnError: s,
          location: a,
        });
      }
    },
    485947(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(627968);
      n(64700);
      var l = n(503698),
        r = n.n(l),
        s = n(707554),
        a = n(320388);
      let o = (e) => {
        let { className: t, children: n, "aria-label": l, id: o } = e;
        return (0, i.jsx)(s.H, {
          className: r()(t, a.kL, a.wx),
          "aria-label": l,
          id: o,
          children: n,
        });
      };
    },
    379848(e, t, n) {
      n.d(t, { Ay: () => r, GY: () => s, YS: () => o, zJ: () => a });
      var i = n(627968);
      n(64700);
      var l = n(932001);
      function r(e) {
        let {
            contentTypes: t,
            children: n,
            groupName: r,
            bypassAutoDismiss: s,
          } = e,
          [a, o] = (0, l.kn)(t, r, s);
        return (0, i.jsx)(i.Fragment, {
          children: n({ visibleContent: a, markAsDismissed: o }),
        });
      }
      function s(e) {
        let {
            contentType: t,
            latestVersion: n,
            groupName: r,
            bypassAutoDismiss: s,
            children: a,
          } = e,
          [o, u] = (0, l.RF)(t, n, r, s);
        return (0, i.jsx)(i.Fragment, {
          children: a({ visibleContent: o, markAsDismissed: u }),
        });
      }
      function a(e) {
        let {
            contentType: t,
            timeRecurringConfig: n,
            groupName: r,
            bypassAutoDismiss: s,
            children: a,
          } = e,
          [o, u] = (0, l.Wl)(t, n, r, s);
        return (0, i.jsx)(i.Fragment, {
          children: a({ visibleContent: o, markAsDismissed: u }),
        });
      }
      function o(e) {
        let {
            contentType: t,
            newSnowflakeId: n,
            timeRecurringConfig: r,
            groupName: s,
            bypassAutoDismiss: a,
            children: o,
          } = e,
          [u, d] = (0, l.iP)(t, n, r, s, a);
        return (0, i.jsx)(i.Fragment, {
          children: o({ visibleContent: u, markAsDismissed: d }),
        });
      }
    },
    256265(e, t, n) {
      n.d(t, {
        $2: () => D,
        Ky: () => b,
        L_: () => w,
        no: () => N,
        vV: () => y,
        xz: () => x,
        yC: () => M,
      }),
        n(938796);
      var i,
        l = n(64700),
        r = n(665260),
        s = n(155718),
        a = n(814890),
        o = n(731068),
        u = n(77350),
        d = n(456874),
        c = n(253932),
        h = n(734057),
        p = n(232835),
        m = n(287809),
        f = n(403362),
        E = n(935208),
        g = n(998218),
        A = n(652215);
      function _(e) {
        if (null == e) return !1;
        let { filename: t, height: n, width: i } = e;
        return (0, u.u)(t) && null != n && n > 0 && null != i && i > 0;
      }
      function S(e) {
        return (
          null != e && null != e && (0, u.AE)(e.filename) && null != e.proxy_url
        );
      }
      function I(e) {
        return _(e) || S(e);
      }
      var y =
        (((i = {}).EMBED = "embed"),
        (i.ATTACHMENT = "attachment"),
        (i.COMPONENT = "component"),
        i);
      function C(e) {
        return (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.X6.getSetting();
          if (!t) return [];
          let n =
            e?.messageSnapshots[0]?.moderatorReport != null
              ? e?.messageSnapshots[0]?.message.attachments
              : e?.attachments;
          return null == e || null == n
            ? []
            : n
                .filter(I)
                .map((e, t) => {
                  let {
                    proxy_url: n,
                    url: i,
                    description: l,
                    spoiler: s,
                    flags: a,
                    width: o,
                    height: d,
                    filename: c,
                    content_scan_version: h,
                  } = e;
                  if (null == o || null == d) return null;
                  let p = (0, u.AE)(c),
                    m =
                      null != e.flags && (0, r.Lt)(e.flags, A.sbO.IS_THUMBNAIL),
                    f = n ?? i;
                  if (p) {
                    let e = g.A.toURLSafe(n);
                    if (null == e) return null;
                    e.searchParams.append("format", "webp"), (f = e.toString());
                  }
                  return {
                    type: "attachment",
                    src: f,
                    width: o,
                    height: d,
                    spoiler: s ?? !1,
                    flags: a,
                    contentScanVersion: h,
                    alt: l,
                    isVideo: p,
                    isThumbnail: m,
                    attachmentId: e.id,
                    mediaIndex: t,
                    srcIsAnimated: (0, r.Lt)(e.flags ?? 0, A.sbO.IS_ANIMATED),
                  };
                })
                .filter(f.Vq);
        })(e, c.X6.useSetting());
      }
      function T(e, t) {
        let n = c.hD.useSetting(),
          i = c.rs.useSetting();
        if (null == e) return [];
        let l =
          e.messageSnapshots[0]?.moderatorReport != null
            ? e.messageSnapshots[0]?.message.embeds
            : e.embeds;
        return n && i && null != l
          ? l
              .map((e, n) => {
                let i = e.image ?? e.thumbnail;
                if (
                  (null == i && null != e.images && (i = e.images[0]),
                  null != i && null != i.url)
                ) {
                  let {
                      height: l,
                      proxyURL: s,
                      url: a,
                      width: o,
                      flags: d,
                    } = i,
                    c = null != s && (0, u.r1)(s);
                  return {
                    type: "embed",
                    src: null != s && "" !== s ? s : a,
                    height: l,
                    width: o,
                    spoiler: t,
                    flags: e.flags,
                    contentScanVersion: e.contentScanVersion,
                    isVideo: c,
                    mediaIndex: n,
                    srcIsAnimated: (0, r.Lt)(d ?? 0, A.qNw.IS_ANIMATED),
                  };
                }
              })
              .filter(f.Vq)
          : [];
      }
      function v(e) {
        let t = c.hD.useSetting();
        if (null == e) return [];
        let n = e.components;
        return t && null != n
          ? Array.from((0, a.p4)(n).values())
              .flatMap((e) => {
                switch (e.type) {
                  case s.I5.THUMBNAIL:
                    return R(e.media, e.spoiler ?? !1);
                  case s.I5.MEDIA_GALLERY:
                    return e.items.map((e) => R(e.media, e.spoiler ?? !1));
                }
                return null;
              })
              .filter(f.Vq)
          : [];
      }
      function R(e, t) {
        let n = (0, o.FE)(e);
        return "INVALID" === n
          ? null
          : {
              type: "component",
              src: e.proxyUrl,
              height: e.height ?? 0,
              width: e.width ?? 0,
              spoiler: t,
              contentScanVersion: e.contentScanMetadata?.version,
              flags: 0,
              srcIsAnimated: (0, r.Lt)(e.flags, o.e5.IS_ANIMATED),
              isVideo: "VIDEO" === n,
              mediaIndex: 0,
              srcUnfurledMediaItem: e,
            };
      }
      function N(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = M(e, n);
        return l.useMemo(() => {
          if (null == t) return [];
          if (!t.isMediaChannel()) return i;
          {
            let e = i.find((e) => e.isThumbnail);
            return null != e ? [e] : i;
          }
        }, [t, i]);
      }
      function M(e, t) {
        return [...C(e), ...T(e, t), ...v(e)];
      }
      function b(e, t) {
        let n = C(e),
          i = T(e, t),
          l = v(e);
        return n[0] ?? i[0] ?? l[0] ?? null;
      }
      function w(e, t) {
        let n = C(e),
          i = T(e, t),
          l = v(e);
        return null == n[0] && null == l[0] && null != i[0];
      }
      function x(e, t) {
        let n = h.A.getChannel(t);
        if (null == n) return !1;
        let i = p.A.getMessage(n.id, E.default.castChannelIdAsMessageId(n.id));
        return (
          null != i &&
          e.length > 0 &&
          null != e.find((e) => e.isImage || e.isVideo) &&
          n.isForumPost() &&
          n.ownerId === m.default.getCurrentUser()?.id &&
          0 === d.A.getCount(n.id) &&
          (0 === i.attachments.length ||
            null == i.attachments.find((e) => _(e) || S(e)))
        );
      }
      function D(e) {
        return e.reduce(
          (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, u.ge)(t.src),
          }),
          { containsVideo: !1, containsGif: !1 },
        );
      }
    },
    201275(e, t, n) {
      n.d(t, { $7: () => u, ox: () => o, qE: () => d });
      var i = n(64700),
        l = n(17928),
        r = n(317525),
        s = n(71393),
        a = n(376304);
      function o(e, t) {
        if (null == e) return;
        let { customIconSrc: n, unicodeEmoji: i } = (0, a.sE)(e, t) ?? {};
        if (null != n || null != i)
          return {
            src: n,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i,
          };
      }
      function u(e) {
        let { guildId: t, roleId: n, size: u = 20, role: d, guild: c } = e,
          { guild: h, role: p } = (0, l.cf)(
            [s.A, r.A],
            () => ({
              guild: null == c ? s.A.getGuild(t) : void 0,
              role: null == d && null != n ? r.A.getRole(t, n) : void 0,
            }),
            [t, n, d, c],
          ),
          m = c ?? h,
          f = d ?? p;
        return i.useMemo(() => {
          if (null != m && null != f && (0, a.fm)(m, f)) return o(f, u);
        }, [m, f, u]);
      }
      function d(e, t) {
        let n = (0, l.bG)([s.A], () => s.A.getGuild(e));
        if (null != n && (0, a.fm)(n, t)) return o(t);
      }
    },
    953051(e, t, n) {
      n.d(t, { A: () => i });
      function i(e) {
        return 1 === e.length && e >= "0" && e <= "9";
      }
    },
    807098(e, t, n) {
      n.d(t, { T: () => a });
      var i = n(17928),
        l = n(462887),
        r = n(736653),
        s = n(775602);
      function a(e, t) {
        let n = (0, r.Ay)(),
          a = (0, i.bG)([s.A], () => s.A.useReducedMotion);
        return null == e
          ? null
          : (0, l.M)(n) || t
            ? a
              ? e.darkStaticUrl
              : e.darkUrl
            : a
              ? e.lightStaticUrl
              : e.lightUrl;
      }
    },
    657048(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        s = n.n(r),
        a = n(990078),
        o = n(187322),
        u = n(939249),
        d = n(985018),
        c = n(877217);
      let h = l.forwardRef(function (e, t) {
        let n,
          {
            className: l,
            src: r,
            unicodeEmoji: h,
            name: p,
            size: m = 20,
            enableTooltip: f = !0,
            enableHeight: E = !0,
            onClick: g,
          } = e;
        return null == r && null == h
          ? null
          : (0, i.jsx)(a.m, {
              asContainer: !0,
              text: p,
              "aria-label": !1,
              shouldShow: f,
              tag: "span",
              children:
                ((n = (0, i.jsx)("img", {
                  ref: t,
                  alt: d.intl.formatToPlainString(d.t["9+YWrE"], { name: p }),
                  className: s()(c.U, l, { [c.v]: null != g }),
                  height: E ? m : void 0,
                  src: r,
                  width: m,
                })),
                (null != h &&
                  (n = (0, i.jsx)("img", {
                    ref: t,
                    alt: h.allNamesString,
                    className: s()(c.U, l, { [c.v]: null != g }),
                    height: E ? m : void 0,
                    src: h.url,
                    width: m,
                  })),
                null == g)
                  ? (0, i.jsx)(o.vN, { offset: { left: 5 }, children: n })
                  : (0, i.jsx)(u.D, {
                      onClick: g,
                      tag: "span",
                      focusProps: { offset: { left: 5 } },
                      children: n,
                    })),
            });
      });
    },
    366811(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(265690),
        l = n(121894),
        r = n(463347),
        s = n(334465),
        a = n(652215);
      function o(e) {
        let t = (0, s.B)(e ?? "", {
          path: a.BVt.CHANNEL(
            r.pv.guildId(),
            r.pv.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return { guildId: e === a.ME ? null : e, channelId: n ?? null };
        }
        let n = (0, s.B)(e ?? "", {
          path: a.BVt.GUILD_BOOSTING_MARKETING(r.pv.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      let u = (0, i.h)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = o(t);
          (0, l.r)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = o(t);
          (0, l.r)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    151282(e, t, n) {
      n.d(t, {
        Eg: () => c,
        Ps: () => E,
        mk: () => h,
        pr: () => d,
        sy: () => m,
        yF: () => f,
      }),
        n(938796);
      var i = n(636537),
        l = n(228366),
        r = n(723444),
        s = n(292348),
        a = n(910425),
        o = n(652215);
      async function u(e) {
        if (0 === e.length) return;
        let t = (0, r.I)(),
          n = await t.uploadFiles(e);
        if (t._aborted) throw Error("Upload aborted");
        return n.map((e, t) => (0, s.OW)(e, t));
      }
      async function d(e) {
        let {
          channelId: t,
          scheduledTimestamp: n,
          messageSendData: r,
          attachments: s,
          attachmentsToUpload: d,
        } = e;
        l.h.dispatch({ type: "SCHEDULED_MESSAGES_CREATE_START", channelId: t });
        try {
          let [e, c] = (0, a.UF)({ content: r.content, flags: r.flags });
          null != d && (s = await u(d));
          let h = await i.Bo.post({
            url: o.Rsh.SCHEDULED_MESSAGES,
            body: {
              channel_id: t,
              content: e,
              scheduled_timestamp: n,
              flags: c,
              message_reference: r.message_reference,
              allowed_mentions: r.allowed_mentions,
              attachments: s ?? [],
            },
            rejectWithError: !0,
          });
          if (!h.ok) throw Error("Failed to create scheduled message");
          return (
            l.h.dispatch({
              type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
              channelId: t,
              scheduledMessageSend: (0, a.Lg)(h.body),
            }),
            h
          );
        } catch (n) {
          a.dx.error("Failed to create scheduled message", n);
          let e = n.body?.message ?? n.message;
          throw (
            (l.h.dispatch({
              type: "SCHEDULED_MESSAGES_CREATE_FAILURE",
              channelId: t,
              errorMsg: e,
            }),
            Error(e))
          );
        }
      }
      async function c(e, t) {
        l.h.dispatch({
          type: "SCHEDULED_MESSAGES_UPDATE_START",
          scheduledMessageId: e,
        });
        try {
          let n = await i.Bo.patch({
            url: o.Rsh.SCHEDULED_MESSAGE(e),
            body: { scheduled_timestamp: t },
            rejectWithError: !0,
          });
          if (!n.ok) throw Error("Failed to update scheduled message");
          l.h.dispatch({
            type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS",
            scheduledMessageSend: (0, a.Lg)(n.body),
          });
        } catch (n) {
          a.dx.error("Failed to update scheduled message", n);
          let t = n.body?.message ?? n.message;
          throw (
            (l.h.dispatch({
              type: "SCHEDULED_MESSAGES_UPDATE_FAILURE",
              scheduledMessageId: e,
              errorMsg: t,
            }),
            Error(t))
          );
        }
      }
      async function h(e) {
        l.h.dispatch({
          type: "SCHEDULED_MESSAGES_DELETE_START",
          scheduledMessageId: e,
        });
        try {
          if (
            !(
              await i.Bo.del({
                url: o.Rsh.SCHEDULED_MESSAGE(e),
                rejectWithError: !0,
              })
            ).ok
          )
            throw Error("Failed to delete scheduled message");
          l.h.dispatch({
            type: "SCHEDULED_MESSAGES_DELETE_SUCCESS",
            scheduledMessageId: e,
          });
        } catch (n) {
          a.dx.error("Failed to cancel scheduled message", n);
          let t = n.body?.message ?? n.message;
          throw (
            (l.h.dispatch({
              type: "SCHEDULED_MESSAGES_DELETE_FAILURE",
              scheduledMessageId: e,
              errorMsg: t,
            }),
            Error(t))
          );
        }
      }
      async function p() {
        let e = await i.Bo.get({
          url: o.Rsh.SCHEDULED_MESSAGES,
          rejectWithError: !0,
        });
        if (!e.ok) throw Error("Failed to fetch scheduled messages");
        return e.body.map(a.Lg);
      }
      async function m() {
        l.h.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
        try {
          let e = await p();
          a.dx.info("Fetched scheduled messages", e),
            l.h.dispatch({
              type: "FETCH_SCHEDULED_MESSAGES_SUCCESS",
              messages: e,
            });
        } catch (e) {
          a.dx.error("Failed to fetch scheduled messages", e),
            l.h.dispatch({
              type: "FETCH_SCHEDULED_MESSAGES_FAILURE",
              error: e,
            });
        }
      }
      function f(e) {
        let { channelId: t, scheduledTimestamp: n } = e;
        l.h.dispatch({
          type: "CREATE_PENDING_SCHEDULED_MESSAGE",
          channelId: t,
          scheduledTimestamp: n,
        });
      }
      function E(e) {
        l.h.dispatch({
          type: "DELETE_PENDING_SCHEDULED_MESSAGE",
          channelId: e,
        });
      }
    },
    863922(e, t, n) {
      n.d(t, {
        $T: () => A,
        Ay: () => M,
        C6: () => _,
        C7: () => C,
        O$: () => R,
        Oz: () => S,
        sK: () => I,
        s_: () => y,
      });
      var i = n(64700),
        l = n(735438),
        r = n.n(l),
        s = n(702841),
        a = n(636537),
        o = n(228366),
        u = n(845584),
        d = n(432371),
        c = n(446458),
        h = n(734057),
        p = n(927813),
        m = n(822074),
        f = n(652215);
      let E = 30 * p.A.Millis.SECOND;
      async function g(e, t) {
        let n, i;
        if (!m.A.shouldFetch(e, t)) return;
        let l = Date.now();
        o.h.dispatch({
          type: "REQUEST_CHANNEL_SUMMARY",
          channelId: e,
          summaryId: t,
          requestedAt: l,
        });
        try {
          let n = await a.Bo.get({
            url: f.BVt.CHANNEL_SUMMARY(e, t),
            rejectWithError: !1,
          });
          i = n?.body;
        } catch (e) {
          n = new u.LG(e);
        }
        o.h.dispatch({
          type: "RECEIVE_CHANNEL_SUMMARY",
          channelId: e,
          summary: i,
          error: n,
          requestedAt: l,
          receivedAt: Date.now(),
        });
      }
      async function A(e) {
        let t, n;
        if (!m.A.shouldFetch(e)) return;
        let i = Date.now();
        o.h.dispatch({
          type: "REQUEST_CHANNEL_SUMMARIES",
          channelId: e,
          requestedAt: i,
        });
        try {
          n = await a.Bo.get({
            url: f.BVt.CHANNEL_SUMMARIES(e),
            rejectWithError: !1,
          });
        } catch (e) {
          t = new u.LG(e);
        }
        let l =
          n?.body?.summaries instanceof Array
            ? n.body.summaries
            : (n?.body ?? []);
        (l = r().takeRight(l, 75)),
          o.h.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: l,
            error: t ?? void 0,
            requestedAt: i,
            receivedAt: Date.now(),
          });
      }
      function _(e, t) {
        o.h.dispatch({
          type: "SET_HIGHLIGHTED_SUMMARY",
          channelId: e,
          summaryId: t ?? null,
        });
      }
      function S() {
        o.h.dispatch({ type: "TOGGLE_TOPICS_BAR" });
      }
      function I(e, t) {
        null != e && null != t && g(e, t),
          o.h.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: t ?? null,
          });
      }
      function y(e, t) {
        o.h.dispatch({
          type: "UPDATE_VISIBLE_MESSAGES",
          topVisibleMessage: e ?? null,
          bottomVisibleMessage: t ?? null,
        });
      }
      function C(e, t) {
        o.h.dispatch({ type: "SET_SUMMARY_FEEDBACK", summary: e, rating: t });
      }
      async function T() {
        let e, t;
        if (!m.A.shouldFetchChannelAffinities()) return Promise.resolve(null);
        let n = Date.now();
        o.h.dispatch({ type: "REQUEST_CHANNEL_AFFINITIES", requestedAt: n });
        try {
          t = await a.Bo.get({
            url: "/users/@me/affinities/channels",
            rejectWithError: !1,
          });
        } catch (t) {
          e = new u.LG(t);
        }
        let i = t?.body?.channel_affinities;
        o.h.dispatch({
          type: "RECEIVE_CHANNEL_AFFINITIES",
          affinities: i,
          error: e ?? void 0,
          requestedAt: n,
          receivedAt: Date.now(),
        });
      }
      async function v(e) {
        let t,
          n,
          { useQuickSwitcher: i = !0, useChannelAffinities: l = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = e ?? [];
        let r = Date.now();
        if (
          0 ===
          (e = e
            .concat(
              m.A.defaultChannelIds({
                withQuickSwitcher: i,
                withChannelAffinities: l,
              }),
            )
            .filter((e) => {
              let t = h.A.getChannel(e);
              return (0, d.pk)(t, !1, !0);
            })
            .filter((e) => {
              let t = Date.now(),
                n = m.A.status(e);
              if (n?.fetching) return !1;
              let i = n?.lastReceivedAt;
              return null == i || t - i > E;
            })
            .slice(0, 50)).length
        )
          return Promise.resolve(null);
        o.h.dispatch({
          type: "REQUEST_CHANNEL_SUMMARIES_BULK",
          channelIds: e,
          requestedAt: r,
        });
        try {
          n = await a.Bo.post({
            url: f.BVt.USER_SUMMARIES,
            body: { channel_ids: e },
            rejectWithError: !1,
          });
        } catch (e) {
          t = new u.LG(e);
        }
        let s = n?.body.summaries;
        o.h.dispatch({
          type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
          requestedAt: r,
          receivedAt: Date.now(),
          summaries: s,
          requestArgs: { channelIds: e },
          error: t,
        });
      }
      async function R(e) {
        try {
          await a.Bo.del({
            url: f.BVt.CHANNEL_SUMMARY(e.channelId, e.id),
            rejectWithError: !1,
          }),
            o.h.dispatch({ type: "DELETE_SUMMARY", summary: e });
        } catch (e) {
          throw new u.LG(e);
        }
      }
      let N =
          21552 == n.j
            ? {
                setSummaryFeedback: C,
                updateVisibleMessages: y,
                setSelectedSummary: I,
                setHighlightedSummary: _,
                fetchSummaries: A,
                fetchSummariesBulk: v,
                useChannelSummaries: function (e) {
                  let { channelIds: t = [] } = e;
                  return (
                    !(function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                        t = (0, s.bG)([c.A], () => c.A.isConnected()),
                        n = i.useMemo(() => e.join(","), [e]);
                      i.useEffect(() => {
                        t && e();
                        async function e() {
                          try {
                            await T();
                          } catch (e) {}
                          await v(n.split(","));
                        }
                      }, [n, t]);
                    })(t),
                    (0, s.yK)([m.A], () => m.A.topSummaries(), [])
                  );
                },
                deleteSummary: R,
              }
            : null,
        M = 21552 == n.j ? N : null;
    },
    521732(e, t, n) {
      n.d(t, {
        eh: () => d,
        er: () => u,
        hf: () => o,
        j0: () => h,
        tk: () => c,
      });
      var i,
        l,
        r,
        s = n(927813),
        a = n(985018);
      let o = 5 * s.A.Millis.SECOND;
      var u =
          21552 == n.j
            ? (((i = {}).TOOLBAR_BUTTON = "toolbar button"),
              (i.PILL = "pill"),
              i)
            : null,
        d =
          (((l = {}).SIDEBAR = "sidebar"),
          (l.PILL_DROPDOWN = "pill dropdown"),
          (l.PILL_NEXT_ARROW = "pill next arrow"),
          (l.PILL_PREVIOUS_ARROW = "pill previous arrow"),
          l),
        c =
          (((r = {}).DUPLICATED = "DUPLICATED"),
          (r.TOO_GENERIC = "TOO_GENERIC"),
          (r.TOO_MANY = "TOO_MANY"),
          (r.INACCURATE = "INACCURATE"),
          (r.NOT_USEFUL = "NOT_USEFUL"),
          (r.OTHER = "OTHER"),
          r);
      function h() {
        return [
          { value: "DUPLICATED", label: a.intl.string(a.t.wwXl5h) },
          { value: "TOO_GENERIC", label: a.intl.string(a.t["t+6knu"]) },
          { value: "TOO_MANY", label: a.intl.string(a.t.xnKDnv) },
          { value: "INACCURATE", label: a.intl.string(a.t.JW5VFj) },
          { value: "NOT_USEFUL", label: a.intl.string(a.t.ZtCNiY) },
          { value: "OTHER", label: a.intl.string(a.t.BufsKk) },
        ];
      }
    },
    747926(e, t, n) {
      n.d(t, { JA: () => R, Tv: () => N, bA: () => b, xu: () => M });
      var i = n(284009),
        l = n.n(i),
        r = n(735438),
        s = n.n(r),
        a = n(228366),
        o = n(465532),
        u = n(608299),
        d = n(58149),
        c = n(584682),
        h = n(9588),
        p = n(267102),
        m = n(376708),
        f = n(976860),
        E = n(378570),
        g = n(253932),
        A = n(761640),
        _ = n(31717),
        S = n(309010),
        I = n(977997),
        y = n(625494),
        C = n(37411),
        T = n(652215),
        v = n(746080);
      function R(e, t, n) {
        if (!(0, m.C$)(e.id)) return void (0, h.E)();
        p.Uw.dispatch(T.jej.POPOUT_CLOSE);
        let i = !s().isEmpty(I.A.getVoiceStatesForChannel(e.id));
        if (t || !g.SY.getSetting() || __OVERLAY__ || i) {
          a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
          return;
        }
        l()(null != e.parent_id, "all threads must have parents");
        let r = e.getGuildId();
        if (null != r && null != A.Ay.getGuildSidebarState(r)) {
          a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
          return;
        }
        let o = S.A.getChannelId();
        e.parent_id === o || (0, v.mP)(o) || (0, E.iN)(e.parent_id),
          (0, f.pX)(
            T.BVt.CHANNEL_THREAD_VIEW(
              (0, c.j)(e),
              (0, v.mP)(o) ? v.VV.GUILD_HOME : e.parent_id,
              e.id,
            ),
            e.isForumPost() ? { source: C.H9.FORUM } : void 0,
          ),
          setTimeout(() => {
            y._.dispatch(T.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
          }, 0);
      }
      function N(e, t, n) {
        if (
          (l()(
            !e.isForumLikeChannel(),
            "cannot open thread creation sidebar in forums",
          ),
          l()(!__OVERLAY__, "Cannot create threads in the overlay."),
          (0, d.zV)(T.HAw.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id,
          }),
          p.Uw.dispatch(T.jej.POPOUT_CLOSE),
          S.A.getChannelId() !== e.id && (0, E.iN)(e.id),
          "" === _.A.getDraft(e.id, _.C.FirstThreadMessage))
        ) {
          let t = _.A.getDraft(e.id, _.C.ChannelMessage);
          o.A.saveDraft(e.id, "", _.C.ChannelMessage),
            o.A.saveDraft(e.id, t, _.C.FirstThreadMessage);
        }
        setTimeout(() => {
          a.h.dispatch({
            type: "SIDEBAR_CREATE_THREAD",
            parentChannelId: e.id,
            parentMessageId: t?.id,
            location: n,
          });
        }, 0);
      }
      function M(e, t) {
        (0, f.pX)(T.BVt.CHANNEL(e, (0, v.mP)(t) ? v.VV.GUILD_HOME : t)),
          a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
      }
      function b(e) {
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
          u.A.clearAll(e, _.C.FirstThreadMessage),
          a.h.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: _.C.FirstThreadMessage,
          }),
          a.h.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: _.C.ThreadSettings,
          });
      }
    },
    728321(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(627968),
        l = n(64700),
        r = n(621466),
        s = n(17928),
        a = n(531685),
        o = n(787541),
        u = n(575486),
        d = n(79858);
      class c extends l.Component {
        static defaultProps = {
          position: "top",
          offsetX: 0,
          offsetY: 0,
          autoInvert: !0,
        };
        componentDidMount() {
          let { visible: e, inlineSpecs: t } = this.props;
          null == t && this.show(e);
        }
        componentWillUnmount() {
          let { inlineSpecs: e } = this.props;
          null == e && this.show(!1);
        }
        componentDidUpdate(e) {
          let {
            position: t,
            offsetX: n,
            offsetY: i,
            tutorialId: l,
            visible: r,
            windowSize: s,
          } = e;
          l !== this.props.tutorialId
            ? o.jD(l)
            : (r !== this.props.visible ||
                t !== this.props.position ||
                n !== this.props.offsetX ||
                i !== this.props.offsetY ||
                s !== this.props.windowSize) &&
              this.show(this.props.visible);
        }
        show(e) {
          let {
            childRef: t,
            tutorialId: n,
            position: i,
            offsetX: l,
            offsetY: s,
            visible: a,
            inlineSpecs: u,
            autoInvert: d,
          } = this.props;
          if (e && null == u) {
            let e = t?.current;
            if (!(0, r.vq)(e)) return;
            let {
              top: a,
              left: u,
              right: c,
              bottom: h,
            } = e.getBoundingClientRect();
            o.WU(n, {
              position: i,
              targetWidth: c - u,
              targetHeight: h - a,
              autoInvert: d,
              origin: { x: u, y: a },
              offset: { x: l, y: s },
            });
          } else a && o.jD(n);
        }
        render() {
          let {
              inlineSpecs: e,
              tutorialId: t,
              children: n,
              visible: r,
              windowFocused: s,
              position: a,
              autoInvert: o,
            } = this.props,
            c = d.A.getData()[t];
          return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  n,
                  r &&
                    (0, i.jsx)(u.Y, {
                      autoInvert: o,
                      position: a,
                      tutorialId: t,
                      tutorialDefinition: c,
                      focused: s,
                      ...e,
                    }),
                ],
              })
            : l.Children.only(n);
        }
      }
      function h(e) {
        let { tutorialId: t, disabled: n } = e,
          l = (0, s.bG)([d.A], () => !n && d.A.shouldShow(t), [n, t]),
          r = (0, s.bG)([a.A], () => a.A.isFocused()),
          o = (0, s.bG)([a.A], () => a.A.windowSize(), []);
        return (0, i.jsx)(c, {
          ...e,
          visible: l,
          windowFocused: r,
          windowSize: o,
        });
      }
    },
    575486(e, t, n) {
      n.d(t, { A: () => I, Y: () => S });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        s = n.n(r),
        a = n(284009),
        o = n.n(a),
        u = n(621466),
        d = n(17928),
        c = n(939249),
        h = n(186111),
        p = n(531685),
        m = n(787541),
        f = n(244083),
        E = n(867348),
        g = n(574842),
        A = n(79858),
        _ = n(234645);
      class S extends l.PureComponent {
        state = { offsetX: null, offsetY: null };
        contentRef = l.createRef();
        componentDidMount() {
          this.updateCache();
        }
        componentDidUpdate(e) {
          let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: l,
            targetHeight: r,
            position: s,
            offset: a,
          } = e;
          (this.props.tutorialId !== t ||
            this.props.origin.x !== n ||
            this.props.origin.y !== i ||
            this.props.targetWidth !== l ||
            this.props.targetHeight !== r ||
            this.props.position !== s ||
            this.props.offset.x !== a.x ||
            this.props.offset.y !== a.y) &&
            this.updateCache();
        }
        updateCache() {
          let e = this.contentRef.current;
          if (null == e || !(0, u.vq)(e, HTMLElement)) return;
          let { offsetWidth: t, offsetHeight: n } = e,
            i = {
              offsetX: (this.props.targetWidth - t) / 2,
              offsetY: (this.props.targetHeight - n) / 2,
            };
          switch (this.props.position) {
            case "left":
              i.offsetX = -t;
              break;
            case "right":
              i.offsetX = this.props.targetWidth;
              break;
            case "bottom":
              i.offsetY = this.props.targetHeight;
              break;
            default:
              i.offsetY = -n;
          }
          (i.offsetX += this.props.offset.x ?? 0),
            (i.offsetY += this.props.offset.y ?? 0),
            this.setState(i);
        }
        handleSkipTips() {
          m.n7();
        }
        handleDismiss = () => {
          m.X8(this.props.tutorialId);
        };
        getTutorialPopoutText() {
          let { tutorialId: e } = this.props;
          return (0, g.F)(e);
        }
        render() {
          let {
              tutorialId: e,
              autoInvert: t,
              focused: n,
              origin: l,
            } = this.props,
            r = (0, E.p)(e);
          if (null == r) return null;
          let {
              media: a,
              textAlign: o,
              isLongText: u,
              highPriority: d,
              spacing: h,
              arrowAlignment: p = f.oN.TOP,
              popoutPosition: m,
            } = r,
            { offsetX: g, offsetY: A } = this.state,
            S = {
              left: null != g ? l.x + g : void 0,
              top: null != A ? l.y + A : void 0,
            },
            I = (e) => {
              let t = n && !e;
              return { [_.bW]: t, [_.EO]: !t, [_.TX]: d };
            },
            y = this.getTutorialPopoutText();
          return (0, i.jsx)(f.Ay, {
            innerRef: this.contentRef,
            position: m,
            renderMedia: a,
            textAlign: o,
            spacing: h,
            isLongText: u,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: p,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...y,
            children: (e, t) => {
              let l,
                { isShown: r } = t;
              return (0, i.jsx)(c.D, {
                ...e,
                className: _.q3,
                style: S,
                innerRef: this.contentRef,
                children: (0, i.jsxs)("div", {
                  className: s()(_.Mp, I(r)),
                  children: [
                    ((l = n && !r),
                    !0 !== d
                      ? null
                      : (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("div", {
                              className: s()(_.Mn, { [_.bW]: l, [_.EO]: !l }),
                            }),
                            (0, i.jsx)("div", {
                              className: s()(_.sQ, { [_.bW]: l, [_.EO]: !l }),
                            }),
                          ],
                        })),
                    (0, i.jsx)("div", { className: s()(_.r6, I(r)) }),
                    (0, i.jsx)("div", { className: s()(_.CY, I(r)) }),
                  ],
                }),
              });
            },
          });
        }
      }
      let I =
        21552 == n.j
          ? function () {
              let {
                indicators: e,
                tutorialData: t,
                windowFocused: n,
                shouldShowAny: l,
              } = (0, d.cf)([A.A, p.A, h.A], () => ({
                indicators: A.A.getIndicators(),
                tutorialData: A.A.getData(),
                shouldShowAny:
                  A.A.shouldShowAnyIndicators() && !h.A.hasLayers(),
                windowFocused: p.A.isFocused(),
              }));
              return l
                ? (0, i.jsx)(i.Fragment, {
                    children: Object.entries(e).map((e) => {
                      let [l, r] = e,
                        s = t[l];
                      return (
                        o()(null != s, `Missing tutorial definition for ${l}`),
                        (0, i.jsx)(
                          S,
                          {
                            tutorialId: l,
                            tutorialDefinition: s,
                            focused: n,
                            ...r,
                          },
                          l,
                        )
                      );
                    }),
                  })
                : null;
            }
          : null;
    },
    234320(e, t, n) {
      n.d(t, { Ah: () => d, EG: () => h, EH: () => u, Vo: () => c });
      var i = n(627968),
        l = n(64700),
        r = n(143236),
        s = n(444927),
        a = n(625494);
      class o {
        emitter = new r.EventEmitter();
        subscribe(e, t) {
          a._.subscribe(e, t), this.emitter.on(e, t);
        }
        unsubscribe(e, t) {
          a._.unsubscribe(e, t), this.emitter.off(e, t);
        }
        bumpDispatchPriority() {
          for (let e of this.emitter.eventNames())
            for (let t of this.emitter.listeners(e)) a._.resubscribe(e, t);
        }
      }
      let u = l.createContext(
          new (class {
            subscribe(e, t) {
              a._.subscribe(e, t);
            }
            unsubscribe(e, t) {
              a._.unsubscribe(e, t);
            }
            bumpDispatchPriority() {}
          })(),
        ),
        d = l.forwardRef(function (e, t) {
          let { children: n } = e,
            r = (0, s.A)(() => new o());
          return (
            l.useImperativeHandle(t, () => r, [r]),
            (0, i.jsx)(u.Provider, { value: r, children: n })
          );
        });
      function c(e) {
        let { event: t, handler: n } = e,
          i = l.useContext(u),
          r = l.useRef(n);
        l.useEffect(() => {
          r.current = n;
        }, [n]);
        let s = null == n;
        return (
          l.useEffect(() => {
            if (s) return;
            let e = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              r.current?.(...t);
            };
            return (
              i.subscribe(t, e),
              () => {
                i.unsubscribe(t, e);
              }
            );
          }, [i, t, s]),
          null
        );
      }
      function h(e) {
        return c(e), null;
      }
    },
    506309(e, t, n) {
      n.d(t, { W: () => l });
      var i = n(621466);
      function l(e) {
        let t = getComputedStyle(document.documentElement).getPropertyValue(
          `--space-${e}`,
        );
        return (0, i.xI)(t);
      }
    },
    6161(e, t, n) {
      n.d(t, { ContentInventoryAuthorType: () => l });
      var i,
        l =
          (((i = {})[(i.AUTHOR_TYPE_UNSPECIFIED = 0)] =
            "AUTHOR_TYPE_UNSPECIFIED"),
          (i[(i.USER = 1)] = "USER"),
          i);
    },
  },
]);
//# sourceMappingURL=10942.9e2f9ce5e2373114.js.map
