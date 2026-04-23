"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59583"],
  {
    704824(e, t, n) {
      n.d(t, { U: () => o, j: () => u });
      var i = n(64700),
        l = n(17928),
        r = n(824552),
        a = n(546183),
        s = n(403362);
      function u(e, t) {
        let { disableFetch: n = !1 } = t ?? {},
          u = (0, l.yK)(
            [a.default],
            () =>
              e
                ?.map((e) => a.default.getNewestTokenForApplication(e))
                .filter(s.Vq) ?? [],
            [e],
          ),
          o = (0, l.bG)(
            [a.default],
            () =>
              e?.every(
                (e) =>
                  a.default.getFetchStateForApplication(e) ===
                  a.FetchState.FETCHED,
              ) ?? !1,
            [e],
          ),
          c = (0, l.yK)(
            [a.default],
            () =>
              e?.filter(
                (e) =>
                  a.default.getFetchStateForApplication(e) ===
                  a.FetchState.NOT_FETCHED,
              ) ?? [],
            [e],
          );
        return (
          i.useEffect(() => {
            n || 0 === c.length || r.A.fetch(c);
          }, [n, c]),
          { tokens: u, fetched: o }
        );
      }
      function o(e, t) {
        let { tokens: n, fetched: l } = u(
          i.useMemo(() => (null != e ? [e] : null), [e]),
          t,
        );
        return { token: n.length > 0 ? n[0] : null, fetched: l };
      }
    },
    139146(e, t, n) {
      n.d(t, { R: () => h, _: () => C });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        a = n.n(r),
        s = n(17928),
        u = n(459192),
        o = n(990078),
        c = n(844222),
        d = n(926268),
        E = n(559758),
        _ = n(939249),
        A = n(661492),
        p = n(495544),
        I = n(113265),
        f = n(758836),
        S = n(985018),
        T = n(859633);
      let m = { xs: "xxs", sm: "xs", md: "refresh_sm" },
        h = (e) => {
          let {
              product: t,
              selectedVariantIndex: n,
              location: r,
              onError: a,
              isCardHovered: u = !0,
              onTrackClick: o,
              ...c
            } = e,
            d = (0, s.bG)([p.default], () => p.default.getId()),
            {
              isWishlisted: E,
              isBusy: _,
              isFirstTimeWishlister: S,
              handleToggle: T,
              specificProductOrVariant: m,
              isPurchased: h,
            } = (0, I.z)({
              userId: d,
              product: t,
              selectedVariantIndex: n,
              location: r,
              onError: a,
            }),
            L = l.useCallback(() => {
              o?.(E ? f.sH.REMOVE_FROM_WISHLIST : f.sH.ADD_TO_WISHLIST), T();
            }, [E, T, o]),
            g = u || E;
          return h || !g
            ? null
            : (0, i.jsx)(C, {
                skuId: m.skuId,
                productName: m.name,
                disabled: !(0, A.qq)(m),
                isWishlisted: E,
                isBusy: _,
                isFirstTimeWishlister: S,
                onClick: L,
                ...c,
              });
        };
      function C(e) {
        let {
            skuId: t,
            productName: n,
            className: r,
            disabled: s,
            variant: A = "default",
            size: p = "md",
            isWishlisted: I,
            isBusy: f,
            isFirstTimeWishlister: h,
            onClick: C,
            shouldShowTooltip: L,
            tooltipConfig: g = {},
          } = e,
          R = m[p],
          { reducedMotion: b } = l.useContext(c.C),
          O = l.useRef(null),
          [N, y] = l.useState(!1),
          D = I && !N,
          P = D ? d.C : E.y,
          G = a()(T.normalIconColor, D && T.wishlistedOrAnimating);
        l.useEffect(() => {
          y(!1);
        }, [t]);
        let U = l.useCallback(
            (e) => {
              e.stopPropagation(),
                s || (I || b.enabled ? I && N && y(!1) : y(!0), C());
            },
            [s, I, b.enabled, N, C],
          ),
          F = !s && !I && !N,
          v = l.useCallback(
            (e) => {
              e.target === e.currentTarget &&
                N &&
                requestAnimationFrame(() => y(!1));
            },
            [N],
          ),
          M = () => {
            var e;
            let t = S.intl.formatToPlainString(S.t["7kFjeK"], {
              productName: n,
            });
            return (0, i.jsx)(_.D, {
              className: a()(
                T.wishlistButton,
                T[p],
                {
                  [T.variantDefault]: "default" === A,
                  [T.variantSecondary]: "secondary" === A,
                  [T.variantSecondaryOverlay]: "overlay-secondary" === A,
                  [T.disabled]: s,
                },
                r,
              ),
              innerRef: O,
              onClick: U,
              "aria-label": t,
              "aria-pressed": I,
              "aria-busy": f,
              "aria-disabled": s,
              children: b.enabled
                ? (0, i.jsx)(P, { colorClass: e ?? G, size: R })
                : (0, i.jsxs)("div", {
                    className: a()(T.iconContainer, F && T.canAnimate),
                    children: [
                      (0, i.jsx)("span", {
                        className: a()(T.iconWrapper, F && T.canHover),
                        children: (0, i.jsx)(P, {
                          colorClass: e ?? G,
                          size: R,
                        }),
                      }),
                      (0, i.jsx)("span", {
                        className: a()(
                          T.animationOverlay,
                          N && T.clickAnimation,
                        ),
                        onAnimationEnd: v,
                        children: (0, i.jsx)(d.C, { size: R }),
                      }),
                    ],
                  }),
            });
          };
        if (h && !s) {
          let e = g.firstTimeTitle ?? S.intl.string(S.t["47Rhc3"]),
            t = g.firstTimeBody ?? S.intl.string(S.t.PXjA0b);
          return (0, i.jsx)(u.u, {
            title: e,
            body: t,
            shouldShow: L,
            children: M(),
          });
        }
        let B = s
          ? (g.disabled ?? S.intl.string(S.t["50TX9k"]))
          : I
            ? (g.remove ?? S.intl.string(S.t.yr9TTf))
            : (g.add ?? S.intl.string(S.t["8DkMEQ"]));
        return (0, i.jsx)(o.m, {
          text: B,
          ariaHidden: !s,
          shouldShow: L,
          children: M(),
        });
      }
    },
    268218(e, t, n) {
      n.d(t, { Fe: () => i.Fe, c2: () => i.c2, sq: () => i.sq });
      var i = n(156828),
        l = n(209489);
      (0, i.Cu)(l.A.awaitOnline);
    },
    913563(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(559949),
        l = n(864386);
      let r = {
        [i.x.DEFAULT]: l.default.ZEL6mz,
        [i.x.CHERRY_BOMB]: l.default.rN7cuX,
        [i.x.CHICLE]: l.default.CbHHnL,
        [i.x.MUSEO_MODERNO]: l.default.iEcEKO,
        [i.x.NEO_CASTEL]: l.default.DL7jLZ,
        [i.x.PIXELIFY]: l.default.jq4aRp,
        [i.x.SINISTRE]: l.default.jV9DN4,
        [i.x.ZILLA_SLAB]: l.default.KMR8rT,
      };
      function a(e) {
        return r[e] ?? l.default.ZEL6mz;
      }
    },
    346846(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(378570);
      function l(e) {
        (0, i.iN)(e.channelId);
      }
    },
    176128(e, t, n) {
      n.d(t, { Jp: () => s, qo: () => a });
      var i,
        l = n(860689),
        r = n(652215),
        a =
          (((i = {}).PUBLIC = "PUBLIC"),
          (i.INVITE_ONLY = "INVITE_ONLY"),
          (i.APPLY_TO_JOIN = "APPLY_TO_JOIN"),
          i);
      function s(e) {
        var t;
        let n = new Set(e.features),
          i = "INVITE_ONLY";
        n.has(r.GuildFeatures.COMMUNITY) && n.has(r.GuildFeatures.DISCOVERABLE)
          ? (i = "PUBLIC")
          : n.has(r.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            n.has(r.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            (i = "APPLY_TO_JOIN");
        let a =
            null != (t = e) &&
            ((0, l.fh)(t)
              ? t.premiumSubscriberCount > 0 || t.premiumTier > r.TVA.NONE
              : null != t.premiumSubscriptionCount &&
                t.premiumSubscriptionCount > 0),
          s = 0;
        a &&
          (s =
            ((0, l.fh)(e)
              ? e.premiumSubscriberCount
              : e.premiumSubscriptionCount) ?? 0);
        let u = (0, l.fh)(e) ? e.premiumTier : r.TVA.NONE;
        return {
          verified: n.has(r.GuildFeatures.VERIFIED),
          partnered: n.has(r.GuildFeatures.PARTNERED),
          community: n.has(r.GuildFeatures.COMMUNITY),
          staff: n.has(r.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
          visibility: i,
          premium: a,
          premiumSubscriberCount: s,
          premiumTier: u,
        };
      }
    },
    509536(e, t, n) {
      n.d(t, { K4: () => S, Zt: () => I });
      var i = n(627968),
        l = n(64700),
        r = n(17928),
        a = n(444927),
        s = n(793574),
        u = n(688810),
        o = n(361158),
        c = n(71393),
        d = n(287809),
        E = n(954571),
        _ = n(625494),
        A = n(281910),
        p = n(652215);
      let I = "BoostedGuildPerksModalConnected",
        f = (e) => {
          let {
              guildId: t,
              close: n,
              location: o,
              registerDismissModalHandler: _,
              scrollToPowerupCards: I,
            } = e,
            f = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
            S = (0, r.bG)([c.A], () => c.A.getGuild(t), [t]),
            T = (0, a.A)(() => Date.now()),
            { analyticsLocations: m } = (0, u.Ay)(
              s.A.BOOSTED_GUILD_PERKS_MODAL,
            ),
            h = S?.id,
            C = l.useCallback(() => {
              n(),
                null != h &&
                  E.default.track(p.HAw.MODAL_DISMISSED, {
                    type: p.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_stack: m,
                    location_section: o.section,
                    location_object: o.object,
                    guild_id: h,
                    duration_open_ms: Date.now() - T,
                  });
            }, [m, T, o.object, o.section, n, h]);
          return (l.useLayoutEffect(() => {
            _?.(C);
          }, [C, _]),
          null == f || null == S)
            ? null
            : (0, i.jsx)(u.f5, {
                value: m,
                children: (0, i.jsx)(A.A, {
                  analyticsLocation: o,
                  onClose: C,
                  guild: S,
                  scrollToPowerupCards: I,
                }),
              });
        };
      function S(e) {
        let { guildId: t, location: n, scrollToPowerupCards: l } = e,
          r = { current: null };
        (0, o.B8)(
          (e) => {
            let { closeLayer: a } = e;
            return (
              null == r.current && (r.current = a),
              (0, i.jsx)(f, {
                close: a,
                guildId: t,
                location: n,
                registerDismissModalHandler: (e) => {
                  r.current = e;
                },
                scrollToPowerupCards: l,
              })
            );
          },
          {
            layerKey: I,
            onEscape: () =>
              _._.hasSubscribers(p.jej.MODAL_CLOSE)
                ? (_._.dispatch(p.jej.MODAL_CLOSE), !0)
                : null != r.current && (r.current(), !0),
          },
        );
      }
    },
    9994(e, t, n) {
      n.d(t, { MU: () => c, oO: () => d, ow: () => o, wr: () => u }), n(516773);
      var i = n(159273),
        l = n(7584),
        r = n(403362),
        a = n(348943);
      let s = { label: "" };
      function u(e) {
        var t, n;
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
            let n = [, , , , ,].fill(s);
            for (let r of t)
              r.position < 0 ||
                r.position >= 5 ||
                (n[r.position] = {
                  label: r.label,
                  emoji:
                    (function (e) {
                      let { guildId: t, emojiId: n, emojiName: r } = e,
                        a = i.o2.get(t);
                      if (null == n && null == r) return null;
                      if (null != n)
                        if (null != a) return a.getById(n);
                        else return null;
                      return null != r ? l.Ay.getByName(r) : null;
                    })({
                      guildId: e,
                      emojiId: r.emoji_id,
                      emojiName: r.emoji_name,
                    }) ?? void 0,
                });
            return n;
          })(e.id, e.traits ?? []),
          gameApplicationIds: e.game_application_ids ?? [],
          gameActivity:
            null == (n = e.game_activity)
              ? {}
              : Object.entries(n).reduce((e, t) => {
                  let [n, i] = t;
                  return (
                    (e[n.toString()] = {
                      level: i.activity_level,
                      score: i.activity_score,
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
      function c(e) {
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
      function d(e) {
        let { guild: t, profile: n } = e,
          i = null != n ? u(n) : null;
        return null != i
          ? i
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
                visibility: a.n.NOT_SPECIFIED,
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
    837011(e, t, n) {
      n.d(t, { A: () => p, X: () => u });
      var i,
        l = n(17928),
        r = n(228366),
        a = n(9994),
        s = n(652215),
        u =
          (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
          (i.FETCHING = "FETCHING"),
          (i.FETCHED = "FETCHED"),
          i);
      let o = new Map(),
        c = {
          profile: null,
          lastSyncTimestamp: null,
          fetchStatus: "NOT_FETCHED",
          isUpdating: !1,
          error: null,
        };
      function d(e) {
        let { guildId: t } = e,
          n = o.get(t);
        null == n
          ? o.set(t, { ...c, isUpdating: !0 })
          : o.set(t, { ...n, isUpdating: !0 });
      }
      function E(e) {
        let { guildId: t, error: n } = e,
          i = o.get(t);
        null == i
          ? o.set(t, { ...c, error: n })
          : o.set(t, { ...i, error: n, isUpdating: !1 });
      }
      function _(e) {
        let { invite: t } = e,
          { profile: n } = t;
        if (null == n) return;
        let i = o.get(n.id),
          l = (0, a.wr)(n);
        null == i
          ? o.set(n.id, {
              ...c,
              profile: l,
              lastSyncTimestamp: Date.now(),
              fetchStatus: "FETCHED",
            })
          : o.set(n.id, {
              ...i,
              profile: l,
              lastSyncTimestamp: Date.now(),
              fetchStatus: "FETCHED",
            });
      }
      class A extends l.Ay.Store {
        static displayName = "GuildProfileStore";
        getProfile(e) {
          return null == e ? null : (o.get(e)?.profile ?? null);
        }
        getFetchStatus(e) {
          return null == e
            ? "NOT_FETCHED"
            : (o.get(e)?.fetchStatus ?? "NOT_FETCHED");
        }
        getLastSyncTimestamp(e) {
          return null == e ? null : (o.get(e)?.lastSyncTimestamp ?? null);
        }
        getIsUpdating(e) {
          return null != e && (o.get(e)?.isUpdating ?? !1);
        }
        getErrorCode(e) {
          return null == e ? null : (o.get(e)?.error?.code ?? null);
        }
      }
      let p = new A(r.h, {
        GUILD_PROFILE_FETCH: function (e) {
          let { guildId: t } = e,
            n = o.get(t);
          null == n
            ? o.set(t, { ...c, fetchStatus: "FETCHING" })
            : o.set(t, { ...n, fetchStatus: "FETCHING" });
        },
        GUILD_PROFILE_FETCH_SUCCESS: function (e) {
          let { guildId: t, profile: n } = e,
            i = o.get(t);
          null == i
            ? o.set(t, {
                ...c,
                profile: n,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              })
            : o.set(t, {
                ...i,
                profile: n,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              });
        },
        GUILD_PROFILE_FETCH_FAILURE: function (e) {
          let { guildId: t, error: n } = e,
            i = o.get(t);
          null == i
            ? o.set(t, { ...c, error: n, fetchStatus: "FETCHED" })
            : o.set(t, { ...i, error: n, fetchStatus: "FETCHED" });
        },
        GUILD_PROFILE_UPDATE: d,
        GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
          let { guildId: t, profile: n } = e,
            i = o.get(t);
          null == i
            ? o.set(t, { ...c, profile: n })
            : o.set(t, { ...i, profile: n, isUpdating: !1 });
        },
        GUILD_PROFILE_UPDATE_FAILURE: E,
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
          let { form: t, guildId: n } = e,
            i = t?.profile;
          if (null == i) return;
          let l = o.get(n);
          null == l
            ? o.set(n, {
                ...c,
                profile: i,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              })
            : o.set(n, {
                ...l,
                profile: i,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              });
        },
        INVITE_RESOLVE_SUCCESS: _,
        INSTANT_INVITE_CREATE_SUCCESS: _,
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          t.type === s.rbe.GUILD_ANNOUNCEMENT &&
            null != t.guild_id &&
            o.delete(t.guild_id);
        },
        GUILD_SETTINGS_SET_WIDGET: function (e) {
          let { guildId: t, enabled: n } = e;
          null != t && n && o.delete(t);
        },
        GUILD_UPDATE: function (e) {
          let { guild: t } = e,
            n = o.get(t.id);
          if (null == n || null == n.profile) return !1;
          let i = {
            ...n.profile,
            name: t.name,
            icon: t.icon ?? null,
            description: t.description ?? "",
            customBanner: t.discovery_splash ?? null,
          };
          o.set(t.id, { ...n, profile: i });
        },
        GUILD_PROFILE_UPDATE_VISIBILITY: d,
        GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
          let { guildId: t, visibility: n } = e,
            i = o.get(t),
            l = i?.profile;
          null != i &&
            null != l &&
            o.set(t, {
              ...i,
              isUpdating: !1,
              profile: { ...l, visibility: n },
            });
        },
        GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: E,
      });
    },
    743981(e, t, n) {
      n.d(t, {
        C9: () => d,
        Sl: () => E,
        Tf: () => p,
        Ub: () => c,
        bl: () => u,
        hc: () => A,
        kO: () => I,
        lv: () => _,
        xj: () => o,
      });
      var i,
        l,
        r,
        a = n(512750),
        s = n(652215),
        u =
          (((i = {})[(i.SWORD = 0)] = "SWORD"),
          (i[(i.WATER_DROP = 1)] = "WATER_DROP"),
          (i[(i.SKULL = 2)] = "SKULL"),
          (i[(i.TOADSTOOL = 3)] = "TOADSTOOL"),
          (i[(i.MOON = 4)] = "MOON"),
          (i[(i.LIGHTNING = 5)] = "LIGHTNING"),
          (i[(i.LEAF = 6)] = "LEAF"),
          (i[(i.HEART = 7)] = "HEART"),
          (i[(i.FIRE = 8)] = "FIRE"),
          (i[(i.COMPASS = 9)] = "COMPASS"),
          (i[(i.CROSSHAIRS = 10)] = "CROSSHAIRS"),
          (i[(i.FLOWER = 11)] = "FLOWER"),
          (i[(i.FORCE = 12)] = "FORCE"),
          (i[(i.GEM = 13)] = "GEM"),
          (i[(i.LAVA = 14)] = "LAVA"),
          (i[(i.PSYCHIC = 15)] = "PSYCHIC"),
          (i[(i.SMOKE = 16)] = "SMOKE"),
          (i[(i.SNOW = 17)] = "SNOW"),
          (i[(i.SOUND = 18)] = "SOUND"),
          (i[(i.SUN = 19)] = "SUN"),
          (i[(i.WIND = 20)] = "WIND"),
          (i[(i.BUNNY = 21)] = "BUNNY"),
          (i[(i.DOG = 22)] = "DOG"),
          (i[(i.FROG = 23)] = "FROG"),
          (i[(i.GOAT = 24)] = "GOAT"),
          (i[(i.CAT = 25)] = "CAT"),
          (i[(i.DIAMOND = 26)] = "DIAMOND"),
          (i[(i.CROWN = 27)] = "CROWN"),
          (i[(i.TROPHY = 28)] = "TROPHY"),
          (i[(i.MONEY_BAG = 29)] = "MONEY_BAG"),
          (i[(i.DOLLAR_SIGN = 30)] = "DOLLAR_SIGN"),
          (i[(i.CLOVER = 31)] = "CLOVER"),
          (i[(i.BLOSSOM = 32)] = "BLOSSOM"),
          (i[(i.POTTED_PLANT = 33)] = "POTTED_PLANT"),
          (i[(i.MAPLE = 34)] = "MAPLE"),
          (i[(i.WILTED_FLOWER = 35)] = "WILTED_FLOWER"),
          (i[(i.BUTTERFLY = 36)] = "BUTTERFLY"),
          (i[(i.SNAIL = 37)] = "SNAIL"),
          (i[(i.CATERPILLAR = 38)] = "CATERPILLAR"),
          (i[(i.SPIDER = 39)] = "SPIDER"),
          (i[(i.BEE = 40)] = "BEE"),
          i),
        o =
          (((l = {}).HOT_PINK = "#ff1c90"),
          (l.LIGHT_PINK = "#ff7fc0"),
          (l.ORANGE = "#ff8f1c"),
          (l.PEACH = "#ffae77"),
          (l.GOLD = "#eebe1a"),
          (l.LIGHT_YELLOW = "#fffc7f"),
          (l.TEAL = "#32a070"),
          (l.MINT_GREEN = "#57b59e"),
          (l.BLUE_TEAL = "#32839a"),
          (l.LIGHT_BLUE = "#71c2d9"),
          (l.PURPLE = "#8a43ff"),
          (l.LAVENDER = "#bd95ff"),
          (l.VIOLET = "#9b3fe5"),
          (l.MAUVE = "#cc8dff"),
          (l.DEEP_PURPLE = "#942e8f"),
          (l.ORCHID = "#d46cb5"),
          (l.RED = "#d14242"),
          (l.SALMON = "#ff8989"),
          (l.BROWN = "#814300"),
          (l.TAN = "#a88a6c"),
          (l.OLIVE = "#717224"),
          (l.GRAY = "#c3c3c3"),
          (l.BURGUNDY = "#5d1d47"),
          (l.ROSE = "#c58fbb"),
          (l.DARK_GRAY = "#222222"),
          (l.LIGHT_GRAY = "#cccccc"),
          l);
      let c = [
        { primary: "#ff1c90", secondary: "#ff7fc0" },
        { primary: "#ff8f1c", secondary: "#ffae77" },
        { primary: "#eebe1a", secondary: "#fffc7f" },
        { primary: "#32a070", secondary: "#57b59e" },
        { primary: "#32839a", secondary: "#71c2d9" },
        { primary: "#8a43ff", secondary: "#bd95ff" },
        { primary: "#9b3fe5", secondary: "#cc8dff" },
        { primary: "#942e8f", secondary: "#d46cb5" },
        { primary: "#d14242", secondary: "#ff8989" },
        { primary: "#814300", secondary: "#a88a6c" },
        { primary: "#717224", secondary: "#c3c3c3" },
        { primary: "#5d1d47", secondary: "#c58fbb" },
        { primary: "#222222", secondary: "#cccccc" },
      ];
      c[0].primary, c[0].secondary;
      let d = {
        0: 2,
        1: 1,
        2: 1,
        3: 2,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 2,
        10: 2,
        11: 2,
        12: 2,
        13: 2,
        14: 2,
        15: 2,
        16: 2,
        17: 2,
        18: 2,
        19: 2,
        20: 2,
        21: 1,
        22: 2,
        23: 2,
        24: 1,
        25: 1,
        26: 1,
        27: 2,
        28: 1,
        29: 1,
        30: 1,
        40: 1,
        39: 2,
        38: 2,
        37: 2,
        36: 2,
        35: 2,
        32: 1,
        33: 2,
        31: 1,
        34: 1,
      };
      var E =
        (((r = {})[(r.SIZE_12 = 12)] = "SIZE_12"),
        (r[(r.SIZE_14 = 14)] = "SIZE_14"),
        (r[(r.SIZE_16 = 16)] = "SIZE_16"),
        (r[(r.SIZE_24 = 24)] = "SIZE_24"),
        (r[(r.SIZE_32 = 32)] = "SIZE_32"),
        (r[(r.SIZE_36 = 36)] = "SIZE_36"),
        r);
      let _ = { 12: 16, 14: 16, 16: 16, 24: 24, 32: 32, 36: 40 },
        A = [6, 0, 7, 8, 1, 2, 4, 5, 9, 3],
        p = {
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: [21, 22, 23, 24, 25],
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: [26, 27, 28, 29, 30],
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: [31, 32, 33, 34, 35],
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: [
            36, 37, 38, 39, 40,
          ],
        },
        I = {
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_PETS]: a.OJ,
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_FLEX]: a.jF,
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_PLANT]: a.Ht,
          [s.GuildFeatures.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES]: a.tv,
        };
    },
    646269(e, t, n) {
      n.d(t, { N: () => i });
      function i(e) {
        return { tag: e.tag };
      }
    },
    496885(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        a = n.n(r),
        s = n(98115),
        u = n(767246);
      function o(e) {
        let {
            children: t,
            size: n = 16,
            className: r,
            flowerStarClassName: o,
            ...c
          } = e,
          d = l.Children.only(t),
          E = !e.allowFullSizedIcon;
        return (0, i.jsxs)("div", {
          className: a()(u.jH, r),
          style: { width: n, height: n },
          children: [
            (0, i.jsx)(s.A, { ...c, className: a()(o, u.mP) }),
            (0, i.jsx)("div", {
              className: a()(u.sn, { [u.Qu]: E }),
              children: d,
            }),
          ],
        });
      }
    },
    21599(e, t, n) {
      n.d(t, {
        WU: () => s,
        _U: () => c,
        fB: () => a,
        m0: () => o,
        y$: () => u,
      });
      var i = n(488428),
        l = n(372250);
      let r = "event";
      function a(e, t) {
        return null == t
          ? e
          : s({
              baseCode: e,
              guildScheduledEventId: (function (e) {
                let t = "?" === e.charAt(0) ? e.substring(1) : e;
                try {
                  let e = i.parse(t);
                  return (0, l.p)(e[r]);
                } catch (e) {
                  return;
                }
              })(t),
            });
      }
      function s(e) {
        let { baseCode: t, guildScheduledEventId: n } = e;
        return null == n ? t : `${t}?${r}=${n}`;
      }
      function u(e) {
        let [t, n] = e.split("?");
        if (null == n) return { baseCode: t };
        let a = i.parse(n);
        return { baseCode: t, guildScheduledEventId: (0, l.p)(a[r]) };
      }
      function o(e) {
        let [t] = e.split("?");
        return t;
      }
      function c(e, t) {
        if (null == t) return;
        let n = o(e);
        return `${t}:${n}`;
      }
    },
    274681(e, t, n) {
      n.d(t, { w: () => a });
      var i = n(554146),
        l = n(826673),
        r = n(49999);
      function a() {
        (0, l.Dr)(i.M.PREMIUM_WISHLIST_COACHMARK, {
          dismissAction: r.i.INDIRECT_ACTION,
          forceTrack: !0,
        });
      }
    },
    138298(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(228366),
        l = n(720149),
        r = n(56562),
        a = n(225142),
        s = n(547),
        u = n(940382),
        o = n(746080);
      let c = {
        openPrivateChannelAsSidebar(e) {
          let {
            channelId: t,
            messageId: n,
            baseChannelId: r,
            hasSingleMessageRequest: a,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: r,
            channelId: t,
            details: { type: u.LU.MESSAGE_REQUEST, hasSingleMessageRequest: a },
          }),
            null != n
              ? l.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
              : s.A.fetchMessages({ channelId: t });
        },
        openChannelAsSidebar(e) {
          let {
            guildId: t,
            channelId: n,
            baseChannelId: a,
            flash: o = !0,
            details: c,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: a,
            channelId: n,
            details: c,
          });
          let d = c?.initialMessageId;
          null != d
            ? l.A.jumpToMessage({
                channelId: n,
                messageId: d,
                flash: o,
                jumpType: r.US.INSTANT,
              })
            : s.A.fetchMessages({ guildId: t, channelId: n });
        },
        openResourceChannelAsSidebar(e) {
          let { guildId: t, channelId: n } = e;
          null != t &&
            ((0, a.bN)(t, n, !1),
            i.h.dispatch({
              type: "SIDEBAR_VIEW_CHANNEL",
              sidebarType: u.PE.VIEW_CHANNEL,
              guildId: t,
              baseChannelId: o.VV.GUILD_HOME,
              channelId: n,
            }));
        },
        openModReportAsSidebar(e) {
          let {
            guildId: t,
            baseChannelId: n,
            channelId: a,
            flash: o = !0,
            details: c,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: a,
            details: c,
          }),
            c?.initialMessageId != null
              ? l.A.jumpToMessage({
                  channelId: a,
                  messageId: c.initialMessageId,
                  flash: o,
                  jumpType: r.US.INSTANT,
                })
              : s.A.fetchMessages({ guildId: t, channelId: a });
        },
        openThreadAsSidebar(e) {
          let {
            guildId: t,
            baseChannelId: n,
            channelId: a,
            flash: o = !0,
            details: c,
          } = e;
          i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_THREAD,
            baseChannelId: n,
            channelId: a,
            details: c,
          }),
            c?.initialMessageId != null
              ? l.A.jumpToMessage({
                  channelId: a,
                  messageId: c.initialMessageId,
                  flash: o,
                  jumpType: r.US.INSTANT,
                })
              : s.A.fetchMessages({ guildId: t, channelId: a });
        },
        closeChannelSidebar(e) {
          i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
        },
        openGuildSidebar(e) {
          let { guildId: t, baseChannelId: n, sidebarType: l, details: r } = e;
          return i.h.dispatch({
            type: "SIDEBAR_VIEW_GUILD",
            sidebarType: l,
            baseChannelId: n,
            guildId: t,
            details: r,
          });
        },
        closeGuildSidebar(e) {
          i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
        },
        setSelectedSearchContext(e) {
          i.h.dispatch({
            type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT",
            searchContextId: e,
          });
        },
      };
    },
    317560(e, t, n) {
      n.d(t, { R: () => a, j: () => s });
      var i = n(627968),
        l = n(192308);
      let r = "social-layer-storefront-product-details-modal",
        a = (e) => {
          let {
            skuId: t,
            applicationId: a,
            isStorefront: s,
            giftRecipient: u,
            giftingOrigin: o,
            analyticsLocations: c,
            analyticsContext: d,
            onClose: E,
          } = e;
          (0, l.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                n.e("44575"),
                n.e("34268"),
                n.e("25641"),
              ]).then(n.bind(n, 138266));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  skuId: t,
                  applicationId: a,
                  isStorefront: s,
                  analyticsLocations: c,
                  analyticsContext: d,
                  giftRecipient: u,
                  giftingOrigin: o,
                });
            },
            {
              modalKey: r,
              allowsNavigation: s,
              onCloseCallback: () => {
                E?.();
              },
            },
          );
        };
      function s() {
        (0, l.hasModalOpen)(r) && (0, l.closeModal)(r);
      }
    },
    229231(e, t, n) {
      n.d(t, { Ok: () => s, Zc: () => a, _u: () => u, gk: () => o });
      var i = n(540185),
        l = n(587895),
        r = n(985018);
      let a = [
          i.x.APPLICATION,
          i.x.FAVORITE_GAMES,
          i.x.PLAYED_GAMES,
          i.x.CURRENT_GAMES,
          i.x.WANT_TO_PLAY_GAMES,
        ],
        s = {
          [i.x.FAVORITE_GAMES]: () => r.intl.string(r.t.sUQar8),
          [i.x.CURRENT_GAMES]: () => r.intl.string(r.t.SqNnus),
          [i.x.WANT_TO_PLAY_GAMES]: () => r.intl.string(r.t.bWSQwW),
          [i.x.PLAYED_GAMES]: () => r.intl.string(r.t.scOKET),
          [i.x.APPLICATION]: (e) =>
            l.A.getApplication(e.applicationId)?.name ?? "",
        },
        u = [i.x.FAVORITE_GAMES],
        o = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES];
    },
    814390(e, t, n) {
      n.d(t, { A: () => l, h: () => r });
      var i = n(253932);
      function l() {
        let e = i.D_.useSetting(),
          t = i.SI.useSetting();
        return e || !t;
      }
      function r() {
        return i.D_.getSetting() || !i.SI.getSetting();
      }
    },
    342296(e, t, n) {
      n.d(t, { A: () => S, S: () => A });
      var i = n(627968),
        l = n(64700),
        r = n(17928),
        a = n(778712),
        s = n(922016),
        u = n(335180),
        o = n(287809),
        c = n(454719),
        d = n(589022),
        E = n(518477),
        _ = n(818348);
      let A = (0, a.FT)(a._3.SIZE_80),
        p = {
          onMouseDown: _.tE,
          onClick: _.tE,
          onKeyDown: _.tE,
          "aria-controls": void 0,
          "aria-expanded": !1,
        },
        I = { isShown: !1, position: void 0 };
      function f(e) {
        let {
            children: t,
            user: n,
            currentUser: r,
            guildId: a,
            channelId: o,
            messageId: _,
            roleId: p,
            disableUserProfileLink: I,
            newAnalyticsLocations: f,
            appContext: S,
            avatarUrl: T,
            preload: m,
            renderPopout: h,
            onRequestOpen: C,
            onRequestClose: L,
            onClosePopout: g,
            shouldShow: R,
            shouldPreload: b = !0,
            ...O
          } = e,
          N = l.useRef(void 0),
          y = l.useCallback(
            () =>
              null != m
                ? m()
                : (0, c.A)(n.id, T ?? n.getAvatarURL(a, A), {
                    type: "popout",
                    withMutualGuilds: n.id !== r.id,
                    withMutualFriends: !n.bot && n.id !== r.id,
                    guildId: a,
                    channelId: o,
                  }),
            [m, r, n, T, a, o],
          ),
          D = l.useCallback(
            (e) =>
              ((N.current = Date.now()), null != h)
                ? h(e, N.current)
                : (0, i.jsx)(d.A, {
                    ...e,
                    user: n,
                    currentUser: r,
                    guildId: a,
                    channelId: o,
                    roleId: p,
                    messageId: _,
                    disableUserProfileLink: I,
                    newAnalyticsLocations: f,
                    appContext: S,
                    openedAt: N.current,
                    closePopout: () => {
                      e.closePopout(), g?.();
                    },
                  }),
            [n, r, h, a, o, p, _, I, f, S, g],
          );
        return (0, i.jsx)(s.Y, {
          popoutKey: E.KM,
          shouldShow: R,
          preload: b ? y : void 0,
          loadingComponent: (0, u.Zm)(),
          renderPopout: D,
          onRequestOpen: C,
          onRequestClose: L,
          ...O,
          children: t,
        });
      }
      let S = l.memo(function (e) {
        let { children: t, userId: n, user: l, ...a } = e,
          s = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
          u = (0, r.bG)([o.default], () => l ?? o.default.getUser(n));
        return null == u || null == s
          ? t(p, I)
          : (0, i.jsx)(f, { ...a, user: u, currentUser: s, children: t });
      });
    },
    999886(e, t, n) {
      n.d(t, { k: () => s });
      var i = n(64700),
        l = n(17928),
        r = n(594061),
        a = n(617617);
      function s() {
        return (
          i.useEffect(() => {
            r.bW.loadIfNecessary();
          }, []),
          (0, l.bG)([a.A], () => a.A.frecencyWithoutFetchingLatest)
        );
      }
    },
    594832(e, t, n) {
      n.d(t, {
        B5: () => h,
        Zh: () => T,
        fw: () => g,
        pE: () => O,
        pl: () => S,
        rJ: () => R,
        sv: () => L,
        tA: () => b,
        uS: () => m,
      });
      var i,
        l,
        r = n(64700),
        a = n(735438),
        s = n(17928),
        u = n(96203),
        o = n(171491),
        c = n(841595),
        d = n(576622),
        E = n(495544),
        _ = n(287809),
        A = n(808247),
        p = n(107563),
        I = n(855052),
        f = n(792334);
      let S = 5,
        T = 350;
      var m = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i),
        h = (((l = {}).USER_PROFILE = "user_profile"), l);
      function C(e, t) {
        return null != t ? `${e}:${t}` : `${e}:default`;
      }
      function L(e) {
        let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
          i = (0, s.yK)(
            [p.A],
            () =>
              t.map((e) => {
                let { wishlistId: t } = e;
                return null != t ? p.A.getWishlist(t) : null;
              }),
            [t],
          ),
          l = (0, s.bG)(
            [p.A],
            () =>
              t.some((e) => {
                let { wishlistId: t } = e;
                return null != t && p.A.isFetching(t);
              }),
            [t],
          ),
          a = (0, s.yK)(
            [p.A],
            () =>
              t.map((e) => {
                let { wishlistId: t } = e;
                return null != t ? p.A.getError(t) : void 0;
              }),
            [t],
          ),
          u = (0, s.yK)([c.A], () =>
            t.map((e) => {
              let { wishlistId: t, userId: n } = e;
              return null != t
                ? c.A.getWishlistSettings(n, t)?.updated_at
                : void 0;
            }),
          ),
          o = r.useMemo(() => {
            let e = {};
            return (
              t.forEach((t, n) => {
                let { userId: i, wishlistId: l } = t;
                n >= u.length || (e[C(i, l)] = u[n]);
              }),
              e
            );
          }, [t, u]);
        return (
          (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: i } of t) {
              if (null == e || p.A.isFetching(e) || null != p.A.getError(e))
                continue;
              let t = p.A.getWishlist(e),
                l = p.A.getUpdatedAt(e),
                r = o[C(i, e)];
              (null == t || (null != r && l !== r)) &&
                A.A.fetchWishlist(e, r, n);
            }
          }, [t, n, o]),
          { wishlists: i, isFetching: l, errors: a }
        );
      }
      function g(e) {
        let { wishlistId: t, userId: n, source: i = "user_profile" } = e,
          [l, u, d, E] = (0, s.yK)([p.A], () =>
            null == t
              ? [null, "success", void 0, void 0]
              : [
                  p.A.getWishlist(t),
                  p.A.getStatus(t),
                  p.A.getError(t),
                  p.A.getUpdatedAt(t),
                ],
          ),
          _ = r.useMemo(
            () => (null == l ? [] : (0, a.uniq)((0, I.Lh)(l))),
            [l],
          );
        (0, o.j)({ skuIds: _, location: "useFetchWishlist" });
        let f = (0, s.bG)([c.A], () => {
          if (null != t && null != n)
            return c.A.getWishlistSettings(n, t)?.updated_at;
        });
        return (
          (0, r.useEffect)(() => {
            null == t ||
              p.A.isFetching(t) ||
              null != d ||
              ((null == l || (null != f && E !== f)) &&
                A.A.fetchWishlist(t, f, i));
          }, [t, i, l, f, E, d]),
          {
            wishlist: l,
            isFetching: "fetching" === u,
            wasFetched: "success" === u || "error" === u,
            error: d,
          }
        );
      }
      function R(e, t) {
        return (0, s.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
      }
      function b(e) {
        let {
            isGift: t,
            giftRecipient: n,
            isSocialLayerStorefrontEnabled: i = !0,
          } = e,
          l = (0, u.A)({ userId: n?.id }),
          a = (0, s.bG)([c.A], () =>
            n?.id == null ? null : c.A.getFirstWishlistId(n.id),
          ),
          { wishlist: o } = g({
            wishlistId: null != a && t && null != n ? a : null,
            userId: n?.id,
          }),
          d = (0, f.B)(o);
        return r.useMemo(
          () => !0 === t && null != n && (d.length > 0 || (i && l.length > 0)),
          [t, n, d, l, i],
        );
      }
      function O() {
        return (function (e) {
          let t = (0, s.bG)([_.default], () => _.default.getUser(e)),
            { userProfile: n, wishlistId: i } = (0, s.cf)(
              [c.A],
              () => ({
                userProfile: null != e ? c.A.getUserProfile(e) : null,
                wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
              }),
              [e],
            );
          return (
            r.useEffect(() => {
              null != e &&
                null == n &&
                null != t &&
                null == n &&
                (0, d.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            {
              ...g({ wishlistId: i, userId: e }),
              wishlistId: i,
              userProfile: n,
            }
          );
        })((0, s.bG)([E.default], () => E.default.getId()));
      }
    },
    70142(e, t, n) {
      let i, l;
      n.d(t, { A: () => p });
      var r = n(17928),
        a = n(636537),
        s = n(228366),
        u = n(723702),
        o = n(652215);
      let c = null,
        d = null,
        E = null;
      (0, u.isDesktop)() &&
        (window.popupBridge = {
          getReturnUrlPrefix: () => {
            if (null == i) throw Error("popupBridgeState is unset");
            return (
              (0, a.TP)() +
              o.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                o.kM_.BRAINTREE,
                i,
              )
            );
          },
          open: (e) => {
            (l = e), window.open(e), A.emitChange();
          },
        });
      class _ extends r.Ay.Store {
        static displayName = "BraintreeStore";
        getClient() {
          return c;
        }
        getPayPalClient() {
          return d;
        }
        getVenmoClient() {
          return E;
        }
        getLastURL() {
          return l;
        }
      }
      let A = new _(s.h, {
          BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
            let { client: t } = e;
            c = t;
          },
          BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
            let { paypalClient: t } = e;
            d = t;
          },
          BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { paymentSourceType: t, state: n, path: l, query: r } = e;
            if (t !== o.hes.PAYPAL || n !== i) return;
            let a = window.popupBridge.onComplete;
            "function" == typeof a && a(null, { path: l, queryItems: r });
          },
          BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
            let { paymentSourceType: t, state: n } = e;
            t === o.hes.PAYPAL && (i = n);
          },
          BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
            d = null;
          },
          BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
            let { venmoClient: t } = e;
            E = t;
          },
          BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
            E = null;
          },
        }),
        p = A;
    },
    184015(e, t, n) {
      n.d(t, { Z: () => s, j: () => a });
      var i = n(268218),
        l = n(70142),
        r = n(652215);
      function a() {
        return (0, i.sq)({
          createPromise: () => n.e("99193").then(n.t.bind(n, 224273, 23)),
          webpackId: 224273,
        }).then((e) => {
          let { default: t } = e;
          return t;
        });
      }
      function s() {
        let e = l.A.getClient();
        return null == e
          ? a().then((e) =>
              e.client
                .create({ authorization: r.Gg3.BRAINTREE.KEY })
                .then((e) => u(e))
                .catch(() => null),
            )
          : u(e);
      }
      function u(e) {
        return a().then((t) =>
          t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
        );
      }
    },
    933681(e, t, n) {
      function i(e) {
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
      n.d(t, { dr: () => r, e0: () => i, pp: () => l });
    },
    416887(e, t, n) {
      n.d(t, { L: () => o });
      var i = n(64700),
        l = n(132500),
        r = n(313271);
      let a = (0, l.A)(),
        s = new Map(),
        u = new Map();
      class o extends i.Component {
        elementId;
        isVisible = !1;
        static defaultProps = {
          active: !0,
          children: i.createElement("span"),
          root: null,
          rootMargin: "0px 0px 0px 0px",
          threshold: [0, 5e-324],
        };
        constructor(e) {
          super(e);
          const { root: t, rootMargin: n, threshold: i } = e;
          t
            ? s.has(t)
              ? (this.elementId = s.get(t) || "")
              : s.set(t, (0, l.A)())
            : (this.elementId = a);
          const o = this.getVisibilityObserverId();
          u.has(o) ||
            u.set(o, new r.j({ root: t, rootMargin: n, threshold: i }));
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
            n = t.isVisible(this);
          this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
              ? t.observe(this, this.props.innerRef)
              : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
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
          return i.Children.only(this.props.children);
        }
      }
    },
  },
]);
//# sourceMappingURL=59583.099418b598988bf1.js.map
