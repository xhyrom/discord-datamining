"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73606"],
  {
    704824(e, t, i) {
      i.d(t, { U: () => o, j: () => u });
      var n = i(64700),
        l = i(17928),
        r = i(824552),
        s = i(546183),
        a = i(403362);
      function u(e, t) {
        let { disableFetch: i = !1 } = t ?? {},
          u = (0, l.yK)(
            [s.default],
            () =>
              e
                ?.map((e) => s.default.getNewestTokenForApplication(e))
                .filter(a.Vq) ?? [],
            [e],
          ),
          o = (0, l.bG)(
            [s.default],
            () =>
              e?.every(
                (e) =>
                  s.default.getFetchStateForApplication(e) ===
                  s.FetchState.FETCHED,
              ) ?? !1,
            [e],
          ),
          d = (0, l.yK)(
            [s.default],
            () =>
              e?.filter(
                (e) =>
                  s.default.getFetchStateForApplication(e) ===
                  s.FetchState.NOT_FETCHED,
              ) ?? [],
            [e],
          );
        return (
          n.useEffect(() => {
            i || 0 === d.length || r.A.fetch(d);
          }, [i, d]),
          { tokens: u, fetched: o }
        );
      }
      function o(e, t) {
        let { tokens: i, fetched: l } = u(
          n.useMemo(() => (null != e ? [e] : null), [e]),
          t,
        );
        return { token: i.length > 0 ? i[0] : null, fetched: l };
      }
    },
    139146(e, t, i) {
      i.d(t, { R: () => b, _: () => S });
      var n = i(627968),
        l = i(64700),
        r = i(503698),
        s = i.n(r),
        a = i(17928),
        u = i(459192),
        o = i(990078),
        d = i(844222),
        c = i(926268),
        p = i(559758),
        A = i(939249),
        h = i(661492),
        E = i(495544),
        _ = i(113265),
        m = i(758836),
        f = i(985018),
        I = i(859633);
      let g = { xs: "xxs", sm: "xs", md: "refresh_sm" },
        b = (e) => {
          let {
              product: t,
              selectedVariantIndex: i,
              location: r,
              onError: s,
              isCardHovered: u = !0,
              onTrackClick: o,
              ...d
            } = e,
            c = (0, a.bG)([E.default], () => E.default.getId()),
            {
              isWishlisted: p,
              isBusy: A,
              isFirstTimeWishlister: f,
              handleToggle: I,
              specificProductOrVariant: g,
              isPurchased: b,
            } = (0, _.z)({
              userId: c,
              product: t,
              selectedVariantIndex: i,
              location: r,
              onError: s,
            }),
            C = l.useCallback(() => {
              o?.(p ? m.sH.REMOVE_FROM_WISHLIST : m.sH.ADD_TO_WISHLIST), I();
            }, [p, I, o]),
            T = u || p;
          return b || !T
            ? null
            : (0, n.jsx)(S, {
                skuId: g.skuId,
                productName: g.name,
                disabled: !(0, h.qq)(g),
                isWishlisted: p,
                isBusy: A,
                isFirstTimeWishlister: f,
                onClick: C,
                ...d,
              });
        };
      function S(e) {
        let {
            skuId: t,
            productName: i,
            className: r,
            disabled: a,
            variant: h = "default",
            size: E = "md",
            isWishlisted: _,
            isBusy: m,
            isFirstTimeWishlister: b,
            onClick: S,
            shouldShowTooltip: C,
            tooltipConfig: T = {},
          } = e,
          y = g[E],
          { reducedMotion: N } = l.useContext(d.C),
          v = l.useRef(null),
          [L, R] = l.useState(!1),
          O = _ && !L,
          P = O ? c.C : p.y,
          M = s()(I.normalIconColor, O && I.wishlistedOrAnimating);
        l.useEffect(() => {
          R(!1);
        }, [t]);
        let x = l.useCallback(
            (e) => {
              e.stopPropagation(),
                a || (_ || N.enabled ? _ && L && R(!1) : R(!0), S());
            },
            [a, _, N.enabled, L, S],
          ),
          j = !a && !_ && !L,
          D = l.useCallback(
            (e) => {
              e.target === e.currentTarget &&
                L &&
                requestAnimationFrame(() => R(!1));
            },
            [L],
          ),
          B = () => {
            var e;
            let t = f.intl.formatToPlainString(f.t["7kFjeK"], {
              productName: i,
            });
            return (0, n.jsx)(A.D, {
              className: s()(
                I.wishlistButton,
                I[E],
                {
                  [I.variantDefault]: "default" === h,
                  [I.variantSecondary]: "secondary" === h,
                  [I.variantSecondaryOverlay]: "overlay-secondary" === h,
                  [I.disabled]: a,
                },
                r,
              ),
              innerRef: v,
              onClick: x,
              "aria-label": t,
              "aria-pressed": _,
              "aria-busy": m,
              "aria-disabled": a,
              children: N.enabled
                ? (0, n.jsx)(P, { colorClass: e ?? M, size: y })
                : (0, n.jsxs)("div", {
                    className: s()(I.iconContainer, j && I.canAnimate),
                    children: [
                      (0, n.jsx)("span", {
                        className: s()(I.iconWrapper, j && I.canHover),
                        children: (0, n.jsx)(P, {
                          colorClass: e ?? M,
                          size: y,
                        }),
                      }),
                      (0, n.jsx)("span", {
                        className: s()(
                          I.animationOverlay,
                          L && I.clickAnimation,
                        ),
                        onAnimationEnd: D,
                        children: (0, n.jsx)(c.C, { size: y }),
                      }),
                    ],
                  }),
            });
          };
        if (b && !a) {
          let e = T.firstTimeTitle ?? f.intl.string(f.t["47Rhc3"]),
            t = T.firstTimeBody ?? f.intl.string(f.t.PXjA0b);
          return (0, n.jsx)(u.u, {
            title: e,
            body: t,
            shouldShow: C,
            children: B(),
          });
        }
        let w = a
          ? (T.disabled ?? f.intl.string(f.t["50TX9k"]))
          : _
            ? (T.remove ?? f.intl.string(f.t.yr9TTf))
            : (T.add ?? f.intl.string(f.t["8DkMEQ"]));
        return (0, n.jsx)(o.m, {
          text: w,
          ariaHidden: !a,
          shouldShow: C,
          children: B(),
        });
      }
    },
    761365(e, t, i) {
      i.d(t, { A: () => u });
      var n = i(627968),
        l = i(64700),
        r = i(130147),
        s = i(344346),
        a = i(101206);
      let u = l.memo(function (e) {
        let {
            user: t,
            nameplate: i,
            isHighlighted: l,
            size: u = "default",
          } = e,
          o = "small" === u ? 62 : 94,
          d = "small" === u ? 72 : 110;
        return (0, n.jsx)("div", {
          className: a.Dz,
          children: (0, n.jsxs)("div", {
            className: a.ur,
            children: [
              (0, n.jsx)(r._, {
                showStatus: !0,
                width: o,
                opacity: 0.7,
                size: u,
              }),
              (0, n.jsx)(r._, {
                showStatus: !0,
                width: d,
                opacity: 0.85,
                size: u,
              }),
              (0, n.jsx)(s.A, {
                user: t,
                nameplate: i,
                className: a.tZ,
                isHighlighted: l,
                showPlaceholderUser: !l,
                showStatus: !0,
                nameplatePreviewSize: "small" === u ? "small" : "default",
              }),
              (0, n.jsx)(r._, {
                showStatus: !0,
                width: d,
                opacity: 0.85,
                size: u,
              }),
              (0, n.jsx)(r._, {
                showStatus: !0,
                width: o,
                opacity: 0.7,
                size: u,
              }),
            ],
          }),
        });
      });
    },
    268218(e, t, i) {
      i.d(t, { Fe: () => n.Fe, c2: () => n.c2, sq: () => n.sq });
      var n = i(156828),
        l = i(209489);
      (0, n.Cu)(l.A.awaitOnline);
    },
    913563(e, t, i) {
      i.d(t, { A: () => s });
      var n = i(559949),
        l = i(864386);
      let r = {
        [n.x.DEFAULT]: l.default.ZEL6mz,
        [n.x.CHERRY_BOMB]: l.default.rN7cuX,
        [n.x.CHICLE]: l.default.CbHHnL,
        [n.x.MUSEO_MODERNO]: l.default.iEcEKO,
        [n.x.NEO_CASTEL]: l.default.DL7jLZ,
        [n.x.PIXELIFY]: l.default.jq4aRp,
        [n.x.SINISTRE]: l.default.jV9DN4,
        [n.x.ZILLA_SLAB]: l.default.KMR8rT,
      };
      function s(e) {
        return r[e] ?? l.default.ZEL6mz;
      }
    },
    346846(e, t, i) {
      i.d(t, { A: () => l });
      var n = i(378570);
      function l(e) {
        (0, n.iN)(e.channelId);
      }
    },
    176128(e, t, i) {
      i.d(t, { Jp: () => a, qo: () => s });
      var n,
        l = i(860689),
        r = i(652215),
        s =
          (((n = {}).PUBLIC = "PUBLIC"),
          (n.INVITE_ONLY = "INVITE_ONLY"),
          (n.APPLY_TO_JOIN = "APPLY_TO_JOIN"),
          n);
      function a(e) {
        var t;
        let i = new Set(e.features),
          n = "INVITE_ONLY";
        i.has(r.GuildFeatures.COMMUNITY) && i.has(r.GuildFeatures.DISCOVERABLE)
          ? (n = "PUBLIC")
          : i.has(r.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            i.has(r.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            (n = "APPLY_TO_JOIN");
        let s =
            null != (t = e) &&
            ((0, l.fh)(t)
              ? t.premiumSubscriberCount > 0 || t.premiumTier > r.TVA.NONE
              : null != t.premiumSubscriptionCount &&
                t.premiumSubscriptionCount > 0),
          a = 0;
        s &&
          (a =
            ((0, l.fh)(e)
              ? e.premiumSubscriberCount
              : e.premiumSubscriptionCount) ?? 0);
        let u = (0, l.fh)(e) ? e.premiumTier : r.TVA.NONE;
        return {
          verified: i.has(r.GuildFeatures.VERIFIED),
          partnered: i.has(r.GuildFeatures.PARTNERED),
          community: i.has(r.GuildFeatures.COMMUNITY),
          staff: i.has(r.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
          visibility: n,
          premium: s,
          premiumSubscriberCount: a,
          premiumTier: u,
        };
      }
    },
    509536(e, t, i) {
      i.d(t, { K4: () => f, Zt: () => _ });
      var n = i(627968),
        l = i(64700),
        r = i(17928),
        s = i(444927),
        a = i(793574),
        u = i(688810),
        o = i(361158),
        d = i(71393),
        c = i(287809),
        p = i(954571),
        A = i(625494),
        h = i(281910),
        E = i(652215);
      let _ = "BoostedGuildPerksModalConnected",
        m = (e) => {
          let {
              guildId: t,
              close: i,
              location: o,
              registerDismissModalHandler: A,
              scrollToPowerupCards: _,
            } = e,
            m = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
            f = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
            I = (0, s.A)(() => Date.now()),
            { analyticsLocations: g } = (0, u.Ay)(
              a.A.BOOSTED_GUILD_PERKS_MODAL,
            ),
            b = f?.id,
            S = l.useCallback(() => {
              i(),
                null != b &&
                  p.default.track(E.HAw.MODAL_DISMISSED, {
                    type: E.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: g,
                    location_section: o.section,
                    location_object: o.object,
                    guild_id: b,
                    duration_open_ms: Date.now() - I,
                  });
            }, [g, I, o.object, o.section, i, b]);
          return (l.useLayoutEffect(() => {
            A?.(S);
          }, [S, A]),
          null == m || null == f)
            ? null
            : (0, n.jsx)(u.f5, {
                value: g,
                children: (0, n.jsx)(h.A, {
                  analyticsLocation: o,
                  onClose: S,
                  guild: f,
                  scrollToPowerupCards: _,
                }),
              });
        };
      function f(e) {
        let { guildId: t, location: i, scrollToPowerupCards: l } = e,
          r = { current: null };
        (0, o.B8)(
          (e) => {
            let { closeLayer: s } = e;
            return (
              null == r.current && (r.current = s),
              (0, n.jsx)(m, {
                close: s,
                guildId: t,
                location: i,
                registerDismissModalHandler: (e) => {
                  r.current = e;
                },
                scrollToPowerupCards: l,
              })
            );
          },
          {
            layerKey: _,
            onEscape: () =>
              A._.hasSubscribers(E.jej.MODAL_CLOSE)
                ? (A._.dispatch(E.jej.MODAL_CLOSE), !0)
                : null != r.current && (r.current(), !0),
          },
        );
      }
    },
    9994(e, t, i) {
      i.d(t, { MU: () => d, oO: () => c, ow: () => o, wr: () => u }), i(516773);
      var n = i(159273),
        l = i(7584),
        r = i(403362),
        s = i(348943);
      let a = { label: "" };
      function u(e) {
        var t, i;
        return {
          id: e.id,
          name: e.name,
          description: e.description ?? "",
          icon: e.icon_hash,
          customBanner: e.custom_banner_hash,
          onlineCount: e.online_count,
          memberCount: e.member_count,
          brandColorPrimary:
            null == (t = e.brand_color_primary) || "" === t ? null : t,
          visibility: e.visibility,
          traits: (function (e, t) {
            let i = [, , , , ,].fill(a);
            for (let r of t)
              r.position < 0 ||
                r.position >= 5 ||
                (i[r.position] = {
                  label: r.label,
                  emoji:
                    (function (e) {
                      let { guildId: t, emojiId: i, emojiName: r } = e,
                        s = n.o2.get(t);
                      if (null == i && null == r) return null;
                      if (null != i)
                        if (null != s) return s.getById(i);
                        else return null;
                      return null != r ? l.Ay.getByName(r) : null;
                    })({
                      guildId: e,
                      emojiId: r.emoji_id,
                      emojiName: r.emoji_name,
                    }) ?? void 0,
                });
            return i;
          })(e.id, e.traits ?? []),
          gameApplicationIds: e.game_application_ids ?? [],
          gameActivity:
            null == (i = e.game_activity)
              ? {}
              : Object.entries(i).reduce((e, t) => {
                  let [i, n] = t;
                  return (
                    (e[i.toString()] = {
                      level: n.activity_level,
                      score: n.activity_score,
                    }),
                    e
                  );
                }, {}),
          features: e.features ?? [],
          tag: e.tag,
          badge: e.badge,
          badgeColorPrimary: e.badge_color_primary,
          badgeColorSecondary: e.badge_color_secondary,
          badgeHash: e.badge_hash,
          premiumSubscriberCount: e.premium_subscription_count,
          premiumTier: e.premium_tier,
        };
      }
      function o(e) {
        let t = {};
        return (
          null != e.name && (t.name = e.name),
          null != e.description && (t.description = e.description),
          void 0 !== e.icon && (t.icon = e.icon),
          void 0 !== e.customBanner && (t.custom_banner = e.customBanner),
          null != e.visibility && (t.visibility = e.visibility),
          void 0 !== e.brandColorPrimary &&
            (t.brand_color_primary = e.brandColorPrimary),
          null != e.traits &&
            (t.traits = e.traits
              .map((e, t) =>
                e?.label == null || e.label.length <= 0
                  ? null
                  : {
                      label: e.label,
                      position: t,
                      emoji_id: e.emoji?.id,
                      emoji_name: e.emoji?.name,
                      emoji_animated: e.emoji?.animated,
                    },
              )
              .filter(r.Vq)),
          null != e.gameApplicationIds &&
            (t.game_application_ids = e.gameApplicationIds),
          void 0 !== e.tag && (t.tag = e.tag),
          void 0 !== e.badge && (t.badge = e.badge),
          void 0 !== e.badgeColorPrimary &&
            (t.badge_color_primary = e.badgeColorPrimary),
          void 0 !== e.badgeColorSecondary &&
            (t.badge_color_secondary = e.badgeColorSecondary),
          t
        );
      }
      function d(e) {
        return e.reduce(
          (e, t) => (
            (e[t.game_application_id] = {
              level: t.activity_level,
              score: t.activity_score,
            }),
            e
          ),
          {},
        );
      }
      function c(e) {
        let { guild: t, profile: i } = e,
          n = null != i ? u(i) : null;
        return null != n
          ? n
          : null == t
            ? null
            : {
                id: t.id,
                name: t.name,
                description: t.description ?? "",
                icon: t.icon,
                customBanner: t.banner,
                onlineCount:
                  t.approximate_presence_count ??
                  e.approximate_presence_count ??
                  0,
                memberCount:
                  t.approximate_member_count ?? e.approximate_member_count ?? 0,
                visibility: s.n.NOT_SPECIFIED,
                traits: [],
                gameApplicationIds: [],
                gameActivity: {},
                features: t.features ?? [],
                brandColorPrimary: null,
                tag: null,
                badge: null,
                badgeHash: null,
                badgeColorPrimary: null,
                badgeColorSecondary: null,
                premiumSubscriberCount: t.premium_subscription_count,
                premiumTier: t.premium_tier,
              };
      }
    },
    646269(e, t, i) {
      i.d(t, { N: () => n });
      function n(e) {
        return { tag: e.tag };
      }
    },
    496885(e, t, i) {
      i.d(t, { A: () => o });
      var n = i(627968),
        l = i(64700),
        r = i(503698),
        s = i.n(r),
        a = i(98115),
        u = i(767246);
      function o(e) {
        let {
            children: t,
            size: i = 16,
            className: r,
            flowerStarClassName: o,
            ...d
          } = e,
          c = l.Children.only(t),
          p = !e.allowFullSizedIcon;
        return (0, n.jsxs)("div", {
          className: s()(u.jH, r),
          style: { width: i, height: i },
          children: [
            (0, n.jsx)(a.A, { ...d, className: s()(o, u.mP) }),
            (0, n.jsx)("div", {
              className: s()(u.sn, { [u.Qu]: p }),
              children: c,
            }),
          ],
        });
      }
    },
    21599(e, t, i) {
      i.d(t, {
        WU: () => a,
        _U: () => d,
        fB: () => s,
        m0: () => o,
        y$: () => u,
      });
      var n = i(488428),
        l = i(372250);
      let r = "event";
      function s(e, t) {
        return null == t
          ? e
          : a({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                let t = "?" === e.charAt(0) ? e.substring(1) : e;
                try {
                  let e = n.parse(t);
                  return (0, l.p)(e[r]);
                } catch (e) {
                  return;
                }
              })(t),
            });
      }
      function a(e) {
        let { baseCode: t, guildScheduledEventId: i } = e;
        return null == i ? t : `${t}?${r}=${i}`;
      }
      function u(e) {
        let [t, i] = e.split("?");
        if (null == i) return { baseCode: t };
        let s = n.parse(i);
        return { baseCode: t, guildScheduledEventId: (0, l.p)(s[r]) };
      }
      function o(e) {
        let [t] = e.split("?");
        return t;
      }
      function d(e, t) {
        if (null == t) return;
        let i = o(e);
        return `${t}:${i}`;
      }
    },
    274681(e, t, i) {
      i.d(t, { w: () => s });
      var n = i(554146),
        l = i(826673),
        r = i(49999);
      function s() {
        (0, l.Dr)(n.M.PREMIUM_WISHLIST_COACHMARK, {
          dismissAction: r.i.INDIRECT_ACTION,
          forceTrack: !0,
        });
      }
    },
    138298(e, t, i) {
      i.d(t, { A: () => d });
      var n = i(228366),
        l = i(720149),
        r = i(56562),
        s = i(225142),
        a = i(547),
        u = i(940382),
        o = i(746080);
      let d = {
        openPrivateChannelAsSidebar(e) {
          let {
            channelId: t,
            messageId: i,
            baseChannelId: r,
            hasSingleMessageRequest: s,
          } = e;
          n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: r,
            channelId: t,
            details: { type: u.LU.MESSAGE_REQUEST, hasSingleMessageRequest: s },
          }),
            null != i
              ? l.A.jumpToMessage({ channelId: t, messageId: i, flash: !0 })
              : a.A.fetchMessages({ channelId: t });
        },
        openChannelAsSidebar(e) {
          let {
            guildId: t,
            channelId: i,
            baseChannelId: s,
            flash: o = !0,
            details: d,
          } = e;
          n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: s,
            channelId: i,
            details: d,
          });
          let c = d?.initialMessageId;
          null != c
            ? l.A.jumpToMessage({
                channelId: i,
                messageId: c,
                flash: o,
                jumpType: r.US.INSTANT,
              })
            : a.A.fetchMessages({ guildId: t, channelId: i });
        },
        openResourceChannelAsSidebar(e) {
          let { guildId: t, channelId: i } = e;
          null != t &&
            ((0, s.bN)(t, i, !1),
            n.h.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.PE.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: o.VV.GUILD_HOME,
              channelId: i,
            }));
        },
        openModReportAsSidebar(e) {
          let {
            guildId: t,
            baseChannelId: i,
            channelId: s,
            flash: o = !0,
            details: d,
          } = e;
          n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MOD_REPORT,
            baseChannelId: i,
            channelId: s,
            details: d,
          }),
            d?.initialMessageId != null
              ? l.A.jumpToMessage({
                  channelId: s,
                  messageId: d.initialMessageId,
                  flash: o,
                  jumpType: r.US.INSTANT,
                })
              : a.A.fetchMessages({ guildId: t, channelId: s });
        },
        openThreadAsSidebar(e) {
          let {
            guildId: t,
            baseChannelId: i,
            channelId: s,
            flash: o = !0,
            details: d,
          } = e;
          n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_THREAD,
            baseChannelId: i,
            channelId: s,
            details: d,
          }),
            d?.initialMessageId != null
              ? l.A.jumpToMessage({
                  channelId: s,
                  messageId: d.initialMessageId,
                  flash: o,
                  jumpType: r.US.INSTANT,
                })
              : a.A.fetchMessages({ guildId: t, channelId: s });
        },
        closeChannelSidebar(e) {
          n.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
        },
        openGuildSidebar(e) {
          let { guildId: t, baseChannelId: i, sidebarType: l, details: r } = e;
          return n.h.dispatch({
            type: "SIDEBAR_VIEW_GUILD",
            sidebarType: l,
            baseChannelId: i,
            guildId: t,
            details: r,
          });
        },
        closeGuildSidebar(e) {
          n.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
        },
        setSelectedSearchContext(e) {
          n.h.dispatch({
            type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT",
            searchContextId: e,
          });
        },
      };
    },
    229231(e, t, i) {
      i.d(t, { Ok: () => a, Zc: () => s, _u: () => u, gk: () => o });
      var n = i(540185),
        l = i(587895),
        r = i(985018);
      let s = [
          n.x.APPLICATION,
          n.x.FAVORITE_GAMES,
          n.x.PLAYED_GAMES,
          n.x.CURRENT_GAMES,
          n.x.WANT_TO_PLAY_GAMES,
        ],
        a = {
          [n.x.FAVORITE_GAMES]: () => r.intl.string(r.t.sUQar8),
          [n.x.CURRENT_GAMES]: () => r.intl.string(r.t.SqNnus),
          [n.x.WANT_TO_PLAY_GAMES]: () => r.intl.string(r.t.bWSQwW),
          [n.x.PLAYED_GAMES]: () => r.intl.string(r.t.scOKET),
          [n.x.APPLICATION]: (e) =>
            l.A.getApplication(e.applicationId)?.name ?? "",
        },
        u = [n.x.FAVORITE_GAMES],
        o = [n.x.CURRENT_GAMES, n.x.FAVORITE_GAMES];
    },
    594832(e, t, i) {
      i.d(t, {
        B5: () => b,
        Zh: () => I,
        fw: () => T,
        pE: () => v,
        pl: () => f,
        rJ: () => y,
        sv: () => C,
        tA: () => N,
        uS: () => g,
      });
      var n,
        l,
        r = i(64700),
        s = i(735438),
        a = i(17928),
        u = i(96203),
        o = i(171491),
        d = i(841595),
        c = i(576622),
        p = i(495544),
        A = i(287809),
        h = i(808247),
        E = i(107563),
        _ = i(855052),
        m = i(792334);
      let f = 5,
        I = 350;
      var g = (((n = {}).WISHLIST = "wishlist"), (n.POPULAR = "popular"), n),
        b = (((l = {}).USER_PROFILE = "user_profile"), l);
      function S(e, t) {
        return null != t ? `${e}:${t}` : `${e}:default`;
      }
      function C(e) {
        let { wishlistIdsAndUsers: t, source: i = "user_profile" } = e,
          n = (0, a.yK)(
            [E.A],
            () =>
              t.map((e) => {
                let { wishlistId: t } = e;
                return null != t ? E.A.getWishlist(t) : null;
              }),
            [t],
          ),
          l = (0, a.bG)(
            [E.A],
            () =>
              t.some((e) => {
                let { wishlistId: t } = e;
                return null != t && E.A.isFetching(t);
              }),
            [t],
          ),
          s = (0, a.yK)(
            [E.A],
            () =>
              t.map((e) => {
                let { wishlistId: t } = e;
                return null != t ? E.A.getError(t) : void 0;
              }),
            [t],
          ),
          u = (0, a.yK)([d.A], () =>
            t.map((e) => {
              let { wishlistId: t, userId: i } = e;
              return null != t
                ? d.A.getWishlistSettings(i, t)?.updated_at
                : void 0;
            }),
          ),
          o = r.useMemo(() => {
            let e = {};
            return (
              t.forEach((t, i) => {
                let { userId: n, wishlistId: l } = t;
                i >= u.length || (e[S(n, l)] = u[i]);
              }),
              e
            );
          }, [t, u]);
        return (
          (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: n } of t) {
              if (null == e || E.A.isFetching(e) || null != E.A.getError(e))
                continue;
              let t = E.A.getWishlist(e),
                l = E.A.getUpdatedAt(e),
                r = o[S(n, e)];
              (null == t || (null != r && l !== r)) &&
                h.A.fetchWishlist(e, r, i);
            }
          }, [t, i, o]),
          { wishlists: n, isFetching: l, errors: s }
        );
      }
      function T(e) {
        let { wishlistId: t, userId: i, source: n = "user_profile" } = e,
          [l, u, c, p] = (0, a.yK)([E.A], () =>
            null == t
              ? [null, "success", void 0, void 0]
              : [
                  E.A.getWishlist(t),
                  E.A.getStatus(t),
                  E.A.getError(t),
                  E.A.getUpdatedAt(t),
                ],
          ),
          A = r.useMemo(
            () => (null == l ? [] : (0, s.uniq)((0, _.Lh)(l))),
            [l],
          );
        (0, o.j)({ skuIds: A, location: "useFetchWishlist" });
        let m = (0, a.bG)([d.A], () => {
          if (null != t && null != i)
            return d.A.getWishlistSettings(i, t)?.updated_at;
        });
        return (
          (0, r.useEffect)(() => {
            null == t ||
              E.A.isFetching(t) ||
              null != c ||
              ((null == l || (null != m && p !== m)) &&
                h.A.fetchWishlist(t, m, n));
          }, [t, n, l, m, p, c]),
          {
            wishlist: l,
            isFetching: "fetching" === u,
            wasFetched: "success" === u || "error" === u,
            error: c,
          }
        );
      }
      function y(e, t) {
        return (0, a.bG)([E.A], () => null != e && E.A.hasSkuId(e, t));
      }
      function N(e) {
        let {
            isGift: t,
            giftRecipient: i,
            isSocialLayerStorefrontEnabled: n = !0,
          } = e,
          l = (0, u.A)({ userId: i?.id }),
          s = (0, a.bG)([d.A], () =>
            i?.id == null ? null : d.A.getFirstWishlistId(i.id),
          ),
          { wishlist: o } = T({
            wishlistId: null != s && t && null != i ? s : null,
            userId: i?.id,
          }),
          c = (0, m.B)(o);
        return r.useMemo(
          () => !0 === t && null != i && (c.length > 0 || (n && l.length > 0)),
          [t, i, c, l, n],
        );
      }
      function v() {
        return (function (e) {
          let t = (0, a.bG)([A.default], () => A.default.getUser(e)),
            { userProfile: i, wishlistId: n } = (0, a.cf)(
              [d.A],
              () => ({
                userProfile: null != e ? d.A.getUserProfile(e) : null,
                wishlistId: null != e ? d.A.getFirstWishlistId(e) : null,
              }),
              [e],
            );
          return (
            r.useEffect(() => {
              null != e &&
                null == i &&
                null != t &&
                null == i &&
                (0, c.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, i]),
            {
              ...T({ wishlistId: n, userId: e }),
              wishlistId: n,
              userProfile: i,
            }
          );
        })((0, a.bG)([p.default], () => p.default.getId()));
      }
    },
    70142(e, t, i) {
      let n, l;
      i.d(t, { A: () => E });
      var r = i(17928),
        s = i(636537),
        a = i(228366),
        u = i(723702),
        o = i(652215);
      let d = null,
        c = null,
        p = null;
      (0, u.isDesktop)() &&
        (window.popupBridge = {
          getReturnUrlPrefix: () => {
            if (null == n) throw Error("popupBridgeState is unset");
            return (
              (0, s.TP)() +
              o.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                o.kM_.BRAINTREE,
                n,
              )
            );
          },
          open: (e) => {
            (l = e), window.open(e), h.emitChange();
          },
        });
      class A extends r.Ay.Store {
        static displayName = "BraintreeStore";
        getClient() {
          return d;
        }
        getPayPalClient() {
          return c;
        }
        getVenmoClient() {
          return p;
        }
        getLastURL() {
          return l;
        }
      }
      let h = new A(a.h, {
          BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            d = t;
          },
          BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            c = t;
          },
          BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: i, path: l, query: r } = e;
            if (t !== o.hes.PAYPAL || i !== n) return;
            let s = window.popupBridge.onComplete;
            "function" == typeof s && s(null, { path: l, queryItems: r });
          },
          BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: i } = e;
            t === o.hes.PAYPAL && (n = i);
          },
          BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            c = null;
          },
          BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            p = t;
          },
          BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            p = null;
          },
        }),
        E = h;
    },
    184015(e, t, i) {
      i.d(t, { Z: () => a, j: () => s });
      var n = i(268218),
        l = i(70142),
        r = i(652215);
      function s() {
        return (0, n.sq)({
          createPromise: () => i.e("99193").then(i.t.bind(i, 224273, 23)),
          webpackId: 224273,
        }).then((e) => {
          let { default: t } = e;
          return t;
        });
      }
      function a() {
        let e = l.A.getClient();
        return null == e
          ? s().then((e) =>
              e.client
                .create({ authorization: r.Gg3.BRAINTREE.KEY })
                .then((e) => u(e))
                .catch(() => null),
            )
          : u(e);
      }
      function u(e) {
        return s().then((t) =>
          t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
        );
      }
    },
    933681(e, t, i) {
      function n(e) {
        return e;
      }
      function l(e, t) {
        return Object.setPrototypeOf(e, t.prototype);
      }
      function r(e) {
        let { andFail: t = !0 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t) throw Error();
      }
      i.d(t, { dr: () => r, e0: () => n, pp: () => l });
    },
    416887(e, t, i) {
      i.d(t, { L: () => o });
      var n = i(64700),
        l = i(132500),
        r = i(313271);
      let s = (0, l.A)(),
        a = new Map(),
        u = new Map();
      class o extends n.Component {
        elementId;
        isVisible = !1;
        static defaultProps = {
          active: !0,
          children: n.createElement("span"),
          root: null,
          rootMargin: "0px 0px 0px 0px",
          threshold: [0, 5e-324],
        };
        constructor(e) {
          super(e);
          const { root: t, rootMargin: i, threshold: n } = e;
          t
            ? a.has(t)
              ? (this.elementId = a.get(t) || "")
              : a.set(t, (0, l.A)())
            : (this.elementId = s);
          const o = this.getVisibilityObserverId();
          u.has(o) ||
            u.set(o, new r.j({ root: t, rootMargin: i, threshold: n }));
        }
        componentDidMount() {
          if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this, this.props.innerRef),
              (this.isVisible = e.isVisible(this)),
              this.props.onChange(this.isVisible);
          }
        }
        componentDidUpdate(e) {
          let t = this.getVisibilityObserver(),
            i = t.isVisible(this);
          this.props.active && i !== this.isVisible && this.props.onChange(i),
            !e.active && this.props.active
              ? t.observe(this, this.props.innerRef)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = i);
        }
        componentWillUnmount() {
          this.getVisibilityObserver().unobserve(this);
        }
        getVisibilityObserverId() {
          let { rootMargin: e, threshold: t } = this.props;
          return `${this.elementId} ${e} ${t}`;
        }
        getVisibilityObserver() {
          let e = this.getVisibilityObserverId(),
            t = u.get(e);
          if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
          return t;
        }
        render() {
          return n.Children.only(this.props.children);
        }
      }
    },
  },
]);
//# sourceMappingURL=73606.0916e34396f76c92.js.map
