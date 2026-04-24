"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65885"],
  {
    854378(e, t, n) {
      n.d(t, {
        $v: () => b,
        Ay: () => F,
        CK: () => D,
        F4: () => L,
        KE: () => P,
        ME: () => K,
        R1: () => R,
        _V: () => S,
        eB: () => N,
        eu: () => I,
        hE: () => v,
        pd: () => T,
        tK: () => M,
        xt: () => x,
      });
      var r = n(627968);
      n(64700);
      var i = n(503698),
        a = n.n(i),
        l = n(97808),
        o = n(534514),
        s = n(834730),
        u = n(778712),
        d = n(292666),
        c = n(821609),
        h = n(43990),
        y = n(571694),
        p = n(902811),
        f = n(235986),
        m = n(915089),
        _ = n(548118),
        E = n(53505),
        C = n(975571),
        g = n(652215),
        A = n(985018),
        w = n(337321);
      let k = l.eu;
      null == k && (k = () => null);
      let v = (e) => {
          let {
            className: t,
            id: n,
            children: i,
            variant: l = "heading-xl/semibold",
          } = e;
          return (0, r.jsx)(o.D, {
            variant: l,
            color: "text-strong",
            className: a()(w.DD, t),
            id: n,
            children: i,
          });
        },
        M = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)(s.E, {
            variant: "text-md/normal",
            color: "text-default",
            className: t,
            children: n,
          });
        },
        S = (e) => {
          let { className: t, src: n } = e;
          return (0, r.jsx)("img", {
            alt: "",
            src: n,
            className: a()(w.Sl, t),
          });
        },
        I = (e) => {
          let { className: t, src: n, size: i } = e;
          return (0, r.jsx)(k, {
            src: n,
            size: i,
            className: a()(w.yt, t),
            "aria-hidden": !0,
          });
        },
        b = (e) => {
          let { guild: t, size: n, animate: i = !1, className: a } = e;
          return (0, r.jsx)(_.Ay, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a,
          });
        };
      b.Sizes = _.Ay.Sizes;
      let L = (e) => {
        let { className: t, channel: n, size: i } = e;
        return (0, r.jsx)(k, {
          src: (0, y.Y)(n),
          size: i,
          className: a()(w.TP, t),
          "aria-hidden": !0,
        });
      };
      L.Sizes = u._3;
      let T = (e) => {
          let {
              label: t,
              error: n,
              placeholder: i,
              value: a,
              className: l,
              setRef: o,
              type: s = "text",
              onChange: u,
              autoComplete: c,
              autoFocus: h,
              maxLength: y,
              spellCheck: p,
              name: f,
              description: _,
              required: E,
              onFocus: C,
              onBlur: g,
            } = e,
            A = (0, m.GV)(),
            w = (0, r.jsx)(d.k, {
              name: f,
              type: s,
              value: a,
              inputRef: o,
              placeholder: i,
              "aria-label": t,
              onChange: u,
              autoComplete: c,
              autoFocus: h,
              maxLength: y,
              spellCheck: p,
              id: A,
              onFocus: C,
              onBlur: g,
              label: t,
              error: n,
              required: E,
              description: _,
            });
          return null != l
            ? (0, r.jsx)("div", { className: l, children: w })
            : w;
        },
        N = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)("div", { className: a()(w.om, t), children: n });
        },
        K = (e) => {
          let { className: t, children: n } = e;
          return (0, r.jsx)(s.E, {
            variant: "text-xs/normal",
            className: a()(w.Sv, t),
            children: n,
          });
        },
        D = (e) => {
          let { className: t } = e;
          return (0, r.jsx)(f.A, {
            direction: f.A.Direction.VERTICAL,
            align: f.A.Align.CENTER,
            className: t,
            children: (0, r.jsx)(p.A, { className: w.$$ }),
          });
        },
        O = (e) =>
          (0, r.jsx)(s.E, {
            tag: "span",
            className: e?.className,
            variant: "text-sm/normal",
            color: "text-default",
            children: e?.children,
          }),
        R = (e) => {
          let t,
            {
              online: n,
              total: i,
              className: l,
              flat: o,
              textClassName: s,
              renderText: u = O,
            } = e;
          return null == i
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, r.jsxs)("div", {
                  className: a()(w.Io, w.L1, o && w.Z6),
                  children: [
                    (0, r.jsx)("i", { className: w._o }),
                    u({
                      className: s,
                      children: A.intl.format(A.t["LC+S+m"], {
                        membersOnline: n,
                      }),
                    }),
                  ],
                })),
              (0, r.jsxs)(f.A, {
                justify: f.A.Justify.CENTER,
                className: l,
                children: [
                  t,
                  (0, r.jsxs)("div", {
                    className: a()(w.Io, o && w.Z6),
                    children: [
                      (0, r.jsx)("i", { className: w.jk }),
                      u({
                        className: s,
                        children: A.intl.format(A.t.zRl6XR, { count: i }),
                      }),
                    ],
                  }),
                ],
              }));
        },
        x = (e) => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, r.jsxs)("div", {
                className: w.l1,
                children: [
                  (0, r.jsx)(s.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "text-default",
                    children: A.intl.string(A.t["/8WWvE"]),
                  }),
                  (0, r.jsx)(I, {
                    className: w.yj,
                    src: t.getAvatarURL(void 0, 24),
                    size: u._3.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, r.jsx)(s.E, {
                    className: w.pp,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: t.username,
                  }),
                ],
              });
        },
        P = (e) => {
          let { className: t } = e;
          return (0, r.jsxs)(N, {
            className: t,
            children: [
              (0, r.jsx)(c.$, {
                text: A.intl.format(A.t.JoS1i3, { platform: (0, E.Vf)() }),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => window.open((0, E.SU)()),
              }),
              (0, r.jsx)(K, {
                className: w.UM,
                children: A.intl.format(A.t.wO1VBk, {
                  supportedBrowserURL: C.A.getArticleURL(
                    g.MVz.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        },
        F = (e) => {
          let {
            className: t,
            contentClassName: n,
            tag: i = "section",
            onSubmit: l,
            children: o,
            expanded: s = !1,
            theme: u = g.NJ8.DARK,
            style: d,
          } = e;
          return (0, r.jsx)(h.N, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
              (0, r.jsxs)(i, {
                "data-theme": u,
                onSubmit: l,
                style: d,
                className: a()(s ? w.PR : w.sL, e, t),
                children: [
                  (0, r.jsx)("div", { className: w.ie }),
                  (0, r.jsx)("div", { className: a()(w.f4, n), children: o }),
                ],
              }),
          });
        };
    },
    436317() {},
    713517(e, t, n) {
      n.d(t, { A: () => l, M: () => o });
      var r = n(64700),
        i = n(17928),
        a = n(775602);
      function l(e) {
        let [t, n] = r.useState(!1),
          [l, o] = r.useState(!1),
          s = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
        r.useEffect(() => {
          let t = e.current;
          if (null == t) return;
          n(!1), o(!1);
          let r = () => n(!0),
            i = () => n(!1),
            a = () => o(!0),
            l = (e) => {
              t.contains(e.relatedTarget) || o(!1);
            };
          return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", i),
            t.addEventListener("focusin", a),
            t.addEventListener("focusout", l),
            () => {
              t.removeEventListener("mouseenter", r),
                t.removeEventListener("mouseleave", i),
                t.removeEventListener("focusin", a),
                t.removeEventListener("focusout", l);
            }
          );
        }, [e]);
        let u = s && l;
        return { isHovering: t, isFocusing: u, isHoveringOrFocusing: t || u };
      }
      function o(e) {
        let [t, n] = r.useState(!1);
        return (
          r.useEffect(() => {
            let t = e.current;
            if (null == t) return;
            let r = () => n(!0),
              i = () => n(!1);
            return (
              t.addEventListener("mouseenter", r),
              t.addEventListener("mouseleave", i),
              () => {
                t.removeEventListener("mouseenter", r),
                  t.removeEventListener("mouseleave", i);
              }
            );
          }, [e]),
          t
        );
      }
    },
    921037(e, t, n) {
      n.d(t, { A: () => h, B: () => d });
      var r = n(362474),
        i = n(228366),
        a = n(376728),
        l = n(439372),
        o = n(495544),
        s = n(723702),
        u = n(652215);
      let d = "guestInviteToAccept";
      class c extends l.A {
        actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
        handleConnectionOpen = async () => {
          if ((0, s.isWeb)()) {
            let e = r.u.get(d);
            if (
              null != e &&
              "string" == typeof e &&
              o.default.isAuthenticated()
            ) {
              let { invite: t } = await a.Ay.resolveInvite(e, "Desktop Modal");
              null != t &&
                (i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: t,
                  code: e,
                  context: u.BRT.APP,
                }),
                r.u.remove(d));
            }
          }
        };
      }
      let h = new c();
    },
    454938(e, t, n) {
      n.d(t, { A: () => l });
      var r = n(426983),
        i = n(176128);
      let a = new Set([
        r._.PARTNERED,
        r._.VERIFIED,
        r._.VERIFIED_AND_PARTNERED,
        r._.COMMUNITY,
        r._.DISCOVERABLE,
      ]);
      function l(e) {
        if (null == e) return !1;
        let t = (0, i.Jp)(e),
          n = (0, r.K)(t);
        return a.has(n);
      }
    },
    57991(e, t, n) {
      n.d(t, { A: () => x });
      var r = n(627968),
        i = n(64700),
        a = n(503698),
        l = n.n(a),
        o = n(17928),
        s = n(661531),
        u = n(462887),
        d = n(306471),
        c = n(478016),
        h = n(565787),
        y = n(332837),
        p = n(998445),
        f = n(834730),
        m = n(781696),
        _ = n(939249),
        E = n(404374),
        C = n(509536),
        g = n(496885),
        A = n(363195),
        w = n(696451),
        k = n(287809),
        v = n(816166),
        M = n(813098),
        S = n(473145),
        I = n(426983),
        b = n(176128),
        L = n(981883),
        T = n(652215),
        N = n(985018),
        K = n(40544);
      let D = {
        [I._.STAFF]: {
          IconComponent: d.V,
          foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: s.A.unsafe_rawColors.GREEN_360.css,
          backgroundLightColor: s.A.unsafe_rawColors.GREEN_360.css,
        },
        [I._.VERIFIED_AND_PARTNERED]: {
          IconComponent: c.U,
          foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: s.A.unsafe_rawColors.GREEN_360.css,
          backgroundLightColor: s.A.unsafe_rawColors.GREEN_360.css,
        },
        [I._.VERIFIED]: {
          IconComponent: c.U,
          foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: s.A.unsafe_rawColors.GREEN_360.css,
          backgroundLightColor: s.A.unsafe_rawColors.GREEN_360.css,
        },
        [I._.PARTNERED]: {
          IconComponent: (0, h.k)(v.A),
          foregroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
          foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: s.A.unsafe_rawColors.BRAND_500.css,
          backgroundLightColor: s.A.unsafe_rawColors.BRAND_500.css,
        },
        [I._.COMMUNITY]: {
          IconComponent: y.f,
          foregroundDarkColor: s.A.unsafe_rawColors.PRIMARY_500.css,
          foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundLightColor: s.A.unsafe_rawColors.PRIMARY_500.css,
          premiumBackgroundColor: E.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
          premiumForegroundColor: s.A.unsafe_rawColors.WHITE.css,
          sizeAdjustment: 2,
        },
        [I._.DISCOVERABLE]: {
          IconComponent: p.L,
          foregroundDarkColor: s.A.unsafe_rawColors.PRIMARY_500.css,
          foregroundLightColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundDarkColor: s.A.unsafe_rawColors.WHITE.css,
          backgroundLightColor: s.A.unsafe_rawColors.PRIMARY_500.css,
          premiumBackgroundColor: E.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
          premiumForegroundColor: s.A.unsafe_rawColors.WHITE.css,
          sizeAdjustment: 2,
        },
        [I._.NONE]: {},
      };
      function O(e) {
        let { guildTraits: t } = e;
        return (0, r.jsxs)("div", {
          className: K.V8,
          children: [
            (0, r.jsxs)("div", {
              className: l()(K.f, K.N5),
              children: [
                (0, r.jsx)(M.A, { width: 18, height: 18, className: K.F8 }),
                (0, r.jsx)(f.E, {
                  variant: "text-xs/semibold",
                  color: "always-white",
                  children: S.gb(t.premiumTier),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: K.f,
              children: (0, r.jsx)(f.E, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: N.intl.format(N.t["dR/SVH"], {
                  count: t.premiumSubscriberCount,
                }),
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { badgeType: t, guildTraits: n } = e,
          {
            tooltipTitle: i,
            tooltipSubtitle: a,
            tooltipDescription: l,
          } = (0, L.V)(t, n.visibility);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: K.Rf,
              children: [
                (0, r.jsx)(f.E, {
                  color: "interactive-text-active",
                  variant: "text-xs/bold",
                  children: i,
                }),
                null != a
                  ? (0, r.jsx)(f.E, {
                      color: "text-muted",
                      variant: "text-xs/medium",
                      children: a,
                    })
                  : null,
                null != l
                  ? (0, r.jsx)(f.E, {
                      color: "text-muted",
                      variant: "text-xs/medium",
                      children: l,
                    })
                  : null,
              ],
            }),
            n.premium ? (0, r.jsx)(O, { guildTraits: n }) : null,
          ],
        });
      }
      function x(e) {
        let t,
          n,
          {
            guild: a,
            tooltipColor: l = m.ST.Colors.BRAND,
            tooltipPosition: s,
            className: d,
            flowerStarClassName: c,
            iconClassName: h,
            badgeStrokeColor: y,
            badgeColor: p,
            disableBoostClick: f,
            "aria-label": E = !1,
            ...v
          } = e,
          M = v.size ?? 18,
          S = (0, o.bG)([k.default, w.Ay], () => {
            let e = k.default.getCurrentUser();
            return w.Ay.isMember(a?.id, e?.id);
          }),
          L = (0, o.bG)([A.A], () => A.A.theme),
          N = (0, b.Jp)(a),
          O = (0, I.K)(N),
          x = i.useMemo(() => N.premium && S && !f, [f, N.premium, S]),
          P = i.useCallback(
            (e) => {
              x &&
                (e.stopPropagation(),
                e.preventDefault(),
                (0, C.K4)({
                  guildId: a.id,
                  location: {
                    section: T.JJy.GUILD_HEADER,
                    object: T.ZSU.BOOST_GEM_ICON,
                  },
                }));
            },
            [x, a.id],
          );
        if (O === I._.NONE) return null;
        let {
          IconComponent: F,
          backgroundDarkColor: j,
          backgroundLightColor: U,
          foregroundDarkColor: B,
          foregroundLightColor: z,
          premiumBackgroundColor: G,
          premiumForegroundColor: H,
          sizeAdjustment: W,
        } = D[O];
        if (null == F) return null;
        N.premium && ((t = H), (n = G));
        let V = (0, u.M)(L) ? B : z,
          $ = (0, u.M)(L) ? j : U;
        (t = t ?? V), (n = n ?? $);
        let Y = Math.floor(0.75 * M) - (W ?? 0);
        return (0, r.jsx)(m.ST, {
          color: l,
          position: s,
          "aria-label": E,
          text: (0, r.jsx)(R, { badgeType: O, guildTraits: N }),
          tooltipContentClassName: K.Hj,
          children: (e) =>
            (0, r.jsx)(_.D, {
              onClick: P,
              tabIndex: x ? 0 : -1,
              children: (0, r.jsx)(g.A, {
                ...e,
                className: d,
                flowerStarClassName: c,
                allowFullSizedIcon: !0,
                color: n ?? p,
                stroke: y,
                size: M,
                children: (0, r.jsx)(F, {
                  size: "custom",
                  width: Y,
                  height: Y,
                  className: h,
                  color: t ?? "currentColor",
                }),
              }),
            }),
        });
      }
    },
    470348(e, t, n) {
      n.d(t, { A: () => a, r: () => i });
      let r = (0, n(945810).mj)({
        name: "2026-02-pubsub-bulk-ban-users",
        kind: "user",
        defaultConfig: { usePubSub: !1 },
        variations: { 1: { usePubSub: !0 } },
      });
      function i(e) {
        let { location: t } = e;
        return r.useConfig({ location: t });
      }
      let a = r;
    },
    172799(e, t, n) {
      n.d(t, { QR: () => u, Xd: () => l, uR: () => o, yV: () => s });
      var r,
        i,
        a,
        l =
          (((r = {})[(r.GUILD = 0)] = "GUILD"),
          (r[(r.GROUP_DM = 1)] = "GROUP_DM"),
          (r[(r.FRIEND = 2)] = "FRIEND"),
          r);
      let o = new Set([0, 1]);
      var s =
          (((i = {})[(i.STREAM = 1)] = "STREAM"),
          (i[(i.EMBEDDED_APPLICATION = 2)] = "EMBEDDED_APPLICATION"),
          (i[(i.ROLE_SUBSCRIPTIONS_PURCHASE = 3)] =
            "ROLE_SUBSCRIPTIONS_PURCHASE"),
          i),
        u = (((a = {}).MAIN = "main"), (a.SETTINGS = "settings"), a);
    },
    426620(e, t, n) {
      n.d(t, { A: () => s });
      var r = n(17928),
        i = n(228366);
      let a = null;
      class l extends r.Ay.PersistedStore {
        static displayName = "NewUserStore";
        static persistKey = "nuf";
        initialize(e) {
          a = e?.type ?? null;
        }
        getType() {
          return a;
        }
        getState() {
          return { type: a };
        }
      }
      let o = new l(i.h, {
          NUF_NEW_USER: function (e) {
            let { newUserType: t } = e;
            (a = t), o.persist();
          },
          NUF_COMPLETE: function () {
            (a = null), o.persist();
          },
        }),
        s = o;
    },
    116891(e, t, n) {
      n.d(t, { eT: () => l, fj: () => i });
      var r = n(250105);
      let i = "1080p",
        a = (0, r.Ay)({
          name: "2026-04-server-boost-copy-1440p",
          kind: "user",
          defaultConfig: { streamQualityMarketingResolution: i },
          variations: { 1: { streamQualityMarketingResolution: "1440p" } },
        });
      function l(e) {
        return a.getConfig({ location: e }).streamQualityMarketingResolution;
      }
    },
    658128(e, t, n) {
      n.d(t, { W: () => h });
      var r = n(713125),
        i = n(473529),
        a = n(871123),
        l = n(734057),
        o = n(808728),
        s = n(309010),
        u = n(567761),
        d = n(652215),
        c = n(746080);
      function h(e) {
        let t = s.A.getChannelId(e),
          n =
            o.Ay.getDefaultChannel(e)?.id ??
            (function (e) {
              if (e !== d.ME) return;
              let t = u.default.getPrivateChannelIds();
              return t.length > 0 ? t[0] : void 0;
            })(e);
        return (t !== c.VV.GUILD_ONBOARDING || r.Ay.shouldShowOnboarding(e)) &&
          (t !== c.VV.GUILD_HOME || (0, i.K)(e))
          ? t === c.VV.GAME_SHOP && (0, a.Ye)(e)
            ? t
            : null == l.A.getChannel(t)
              ? n
              : t
          : n;
      }
    },
    533406(e, t, n) {
      n.d(t, {
        B: () => m,
        a: () =>
          function e(t, n) {
            let {
                isGift: r,
                giftRecipient: a,
                giftingOrigin: u,
                additionalUserIds: m,
              } = n,
              {
                discoverySessionId: _,
                analyticsLocations: E,
                guildId: C,
                isEligibilityCheckContinuation: g,
                checkoutState: A,
              } = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
              w = h.A.getSKUEligibilityEntry(t.id),
              k = w?.state,
              v =
                !r &&
                null != C &&
                (null == k || "checking" === k || "ineligible" === k);
            if (!v && !g) {
              let e = "none";
              r
                ? (e = "gift")
                : null == C
                  ? (e = "no_guild")
                  : "eligible" === k
                    ? (e = "already_eligible")
                    : "error" === k && (e = "prior_error"),
                c.default.track(
                  p.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED,
                  {
                    sku_id: t.id,
                    guild_id: C ?? null,
                    application_id: t.applicationId,
                    is_gift: r,
                    eligibility_state: k ?? "none",
                    skip_reason: e,
                    error_http_status:
                      w?.state === "error" ? (w.httpStatus ?? null) : null,
                    location_stack: E,
                  },
                );
            }
            let M = A ?? { hasFinished: !1 };
            if (v)
              return void (0, y.L)({
                guildId: C,
                skuId: t.id,
                analyticsLocations: E ?? [],
                onContinue: () => {
                  if (!M.hasFinished)
                    return e(
                      t,
                      {
                        isGift: r,
                        giftRecipient: a,
                        giftingOrigin: u,
                        additionalUserIds: m,
                      },
                      {
                        discoverySessionId: _,
                        analyticsLocations: E,
                        guildId: C,
                        isEligibilityCheckContinuation: !0,
                        checkoutState: M,
                      },
                    );
                },
              });
            let S = !1,
              I = (0, i.A)();
            f({
              loadId: I,
              discoverySessionId: _,
              skuId: t.id,
              applicationId: t.applicationId,
              analyticsLocations: E ?? [],
              isGift: r,
              giftRecipient: a,
              giftingOrigin: u,
              additionalUserIds: m,
              onCloseCallback: () => {
                if (!S) {
                  let e = (0, d.q1)({
                    location: "SocialLayerStorefrontPaymentModal",
                    unifiedCheckoutFlow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                  });
                  c.default.track(p.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: I,
                    discovery_session_id: _,
                    payment_type: p.frM[p.VVm.ONE_TIME],
                    is_gift: r,
                    sku_id: t.id,
                    application_id: t.applicationId,
                    location_stack: E,
                    sku_product_line: t.productLine,
                    checkout_design: e ? d.rS.UNIFIED : d.rS.LEGACY,
                    checkout_flow: s.C.SLAYER_STOREFRONT_CHECKOUT,
                  });
                }
                (0, l.ET)(), (0, o.z)(), (0, y.l)(), (M.hasFinished = !0);
              },
              onComplete: () => {
                (S = !0), (M.hasFinished = !0);
              },
              modalKey: "slayer-payment-modal",
            });
          },
      });
      var r = n(627968),
        i = n(132500),
        a = n(192308),
        l = n(391048),
        o = n(636099),
        s = n(120700),
        u = n(226991),
        d = n(742810),
        c = n(954571),
        h = n(832163),
        y = n(556808),
        p = n(652215);
      let f = (e) => {
        let {
          loadId: t,
          discoverySessionId: n,
          applicationId: r,
          skuId: i,
          analyticsLocations: a,
          isGift: l,
          giftRecipient: o,
          additionalUserIds: s,
          giftingOrigin: d,
          onCloseCallback: c,
          onComplete: h,
          modalKey: y,
        } = e;
        return (0, u.KY)().openCheckoutModal({
          loadId: t,
          discoverySessionId: n,
          applicationId: r,
          skuId: i,
          analyticsLocations: a,
          onComplete: h,
          giftContextProps: {
            isGift: l,
            giftRecipient: o,
            giftingOrigin: d,
            additionalUserIds: s,
          },
          openModalOptions: { modalKey: y, onCloseCallback: c },
        });
      };
      function m() {
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.e("26388").then(n.bind(n, 297187));
            return (t) => (0, r.jsx)(e, { ...t });
          },
          { modalKey: "slayer-storefront-announcement-modal" },
        );
      }
    },
    383394(e, t, n) {
      n.d(t, { A: () => s });
      var r = n(17928),
        i = n(228366),
        a = n(617617);
      let l = new Set();
      class o extends r.Ay.PersistedStore {
        static displayName = "ExpandedGuildFolderStore";
        static persistKey = "ExpandedGuildFolderStore";
        initialize(e) {
          null != e && (l = new Set(e.expandedFolders)), this.waitFor(a.A);
        }
        getState() {
          return { expandedFolders: Array.from(l) };
        }
        getExpandedFolders() {
          return l;
        }
        isFolderExpanded(e) {
          return l.has(e);
        }
      }
      let s = new o(i.h, {
        TOGGLE_GUILD_FOLDER_EXPAND: function (e) {
          let { folderId: t } = e;
          (l = new Set(l)).has(t) ? l.delete(t) : l.add(t);
        },
        SET_GUILD_FOLDER_EXPANDED: function (e) {
          let { folderId: t, expanded: n } = e;
          (l = new Set(l)), n ? l.add(t) : l.has(t) && l.delete(t);
        },
        USER_SETTINGS_PROTO_UPDATE: function () {
          let e = a.A.getGuildFolders();
          if (null == e) return !1;
          let t = !1;
          for (let n of l)
            e.some((e) => e.folderId === n) ||
              ((l = new Set(l)).delete(n), (t = !0));
          return t;
        },
        GUILD_FOLDER_COLLAPSE: function () {
          if (0 === l.size) return !1;
          l = new Set();
        },
      });
    },
    970928(e, t, n) {
      n.d(t, { RG: () => b, Di: () => v, uD: () => M, Y: () => S }),
        n(323874),
        n(14289),
        n(35956);
      var r = n(284009),
        i = n.n(r),
        a = n(636537),
        l = n(228366),
        o = n(735438),
        s = n.n(o),
        u = n(17928);
      let d = {},
        c = {};
      function h(e) {
        let { assets: t } = e,
          n = { ...d };
        for (let e in t) {
          let r = t[e];
          (n[e] = 2),
            (c[e] = {
              assets: s().keyBy(r, "name") ?? {},
              lastUpdated: Date.now(),
            });
        }
        d = n;
      }
      class y extends u.Ay.Store {
        static displayName = "ApplicationAssetsStore";
        getApplicationAssetFetchState(e) {
          return d[e] ?? 0;
        }
        getFetchingIds() {
          return [
            ...Object.entries(d)
              .filter((e) => {
                let [, t] = e;
                return 1 === t;
              })
              .map((e) => {
                let [t] = e;
                return t;
              }),
          ];
        }
        getApplicationAssets(e) {
          return c[e];
        }
      }
      let p = new y(l.h, {
        APPLICATION_ASSETS_FETCH: function (e) {
          let { applicationId: t } = e;
          d = { ...d, [t]: 1 };
        },
        APPLICATION_ASSETS_FETCH_SUCCESS: function (e) {
          let { applicationId: t } = e;
          d = { ...d, [t]: 2 };
        },
        APPLICATION_ASSETS_UPDATE: function (e) {
          let { applicationId: t, assets: n } = e;
          null != n
            ? (c[t] = {
                assets: s().keyBy(n, "name") ?? {},
                lastUpdated: Date.now(),
              })
            : delete c[t];
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: h,
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: h,
      });
      var f = n(626584),
        m = n(776231),
        _ = n(652215);
      let E = "https://i.scdn.co/image/",
        C =
          /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
        g =
          /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
        A = {
          [_.fg2.SPOTIFY]: {
            deserialize: (e) => `${E}${encodeURIComponent(e)}`,
            serialize: (e) => e.split(E)[1],
          },
          [_.fg2.TWITCH]: {
            deserialize: (e, t) => {
              let n, r, i;
              return (
                (n = encodeURIComponent(e)),
                (r = t[0]),
                (i = t[1]),
                `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n}-${r}x${i}.jpg`
              );
            },
            serialize: (e) => {
              let t = e.match(C);
              return null != t ? t[1] : null;
            },
          },
          [_.fg2.YOUTUBE]: {
            deserialize: (e) => {
              let t;
              return (
                (t = encodeURIComponent(e)),
                `https://i.ytimg.com/vi/${t}/hqdefault_live.jpg`
              );
            },
            serialize: (e) => {
              let t = e.match(g);
              return null != t ? t[1] : null;
            },
          },
          mp: {
            deserialize: (e) => {
              i()(
                null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT,
                "MEDIA_PROXY_ENDPOINT not configured",
              );
              let t = new URL(
                  e,
                  location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT,
                ),
                n = e.toLowerCase().endsWith(".gif"),
                r = e.toLowerCase().endsWith(".webp"),
                a = e.toLowerCase().endsWith(".avif");
              return (
                n && t.searchParams.set("format", "webp"),
                (n || r || a) && t.searchParams.set("animated", "true"),
                t.toString()
              );
            },
            serialize: (e) => e,
          },
        },
        w = new Map();
      async function k(e) {
        let { body: t } = await a.Bo.get({
          url: _.Rsh.APPLICATION_ASSETS(e),
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        return (
          l.h.dispatch({
            type: "APPLICATION_ASSETS_UPDATE",
            applicationId: e,
            assets: t,
          }),
          p.getApplicationAssets(e)
        );
      }
      function v(e, t) {
        let n = A[e].serialize(t);
        return n ? `${e}:${n.toString()}` : null;
      }
      function M(e, t, n) {
        let r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "png";
        if (null != t && t.includes(":")) {
          let [e, r] = t.split(":");
          return e === _.fg2.TWITCH
            ? null == n || "number" == typeof n
              ? void new f.A("ApplicationAssetUtils").warn(
                  "getAssetImage: size must === [number, number] for Twitch",
                )
              : A[_.fg2.TWITCH].deserialize(r, n)
            : Object.prototype.hasOwnProperty.call(A, e)
              ? A[e].deserialize(r)
              : void 0;
        }
        if (null == e || null == t) return;
        let i = Array.isArray(n) ? Math.max(...n) : n,
          l = "number" == typeof i ? `?size=${(0, m.kr)(i)}` : "";
        return null != window.GLOBAL_ENV.CDN_HOST
          ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${r}${l}`
          : `${(0, a.TP)()}/applications/${e}/app-assets/${t}.${r}${l}`;
      }
      async function S(e) {
        var t;
        let n,
          r = await (null == (n = p.getApplicationAssets(e)) ||
          ((t = n.lastUpdated), Date.now() - t > 36e5)
            ? k(e)
            : Promise.resolve(n));
        return r?.assets;
      }
      async function I(e, t) {
        let n = t.filter((e) => null != e && null == w.get(e));
        if (0 === n.length) return;
        let { body: r } = await a.Bo.post({
          url: _.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
          body: { urls: n },
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        for (let { url: e, external_asset_path: t } of r) w.set(e, t);
      }
      async function b(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        l.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
        let r = [],
          i = t.filter(
            (e) => e?.startsWith("http:") || e?.startsWith("https:"),
          );
        if (
          (i.length > 0 && (await I(e, i)),
          (function (e, t) {
            let n = 0;
            if (
              e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"))
                .length > 0
            )
              for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if (null == i) continue;
                let a = w.get(i);
                null != a && ((t[r] = v("mp", a)), n++);
              }
            return n === e.length;
          })(t, r))
        )
          return (
            l.h.dispatch({
              type: "APPLICATION_ASSETS_FETCH_SUCCESS",
              applicationId: e,
            }),
            r
          );
        let a = await S(e);
        return (l.h.dispatch({
          type: "APPLICATION_ASSETS_UPDATE",
          applicationId: e,
          assets: a,
        }),
        (function (e, t, n, r) {
          let i = !1;
          for (let a = 0; a < e.length; a++) {
            let l = e[a];
            if (null == l || null != t[a]) continue;
            let o = Object.prototype.hasOwnProperty.call(n, l) && n[l];
            if (!o) {
              if (null == r || r <= 0) {
                t[a] = null;
                continue;
              }
              i = !0;
            }
            t[a] = o.id;
          }
          return i;
        })(t, r, a, n))
          ? k(e).then(() => b(e, t, n - 1))
          : (l.h.dispatch({
              type: "APPLICATION_ASSETS_FETCH_SUCCESS",
              applicationId: e,
            }),
            r);
      }
    },
    372250(e, t, n) {
      n.d(t, { p: () => r });
      function r(e) {
        return Array.isArray(e) ? e[0] : e;
      }
    },
    316501(e, t, n) {
      n.d(t, {
        AD: () => I,
        Kh: () => h,
        Pk: () => N,
        Q_: () => T,
        Ze: () => b,
        pF: () => M,
        sv: () => L,
      }),
        n(321073);
      var r = n(695497),
        i = n.n(r),
        a = n(506774),
        l = n(626584),
        o = n(111162),
        s = n(723702),
        u = n(650583);
      let d = new l.A("KeyboardLayoutMapUtils"),
        c = (0, s.isLinux)()
          ? u.C8
          : (0, s.isMac)()
            ? u.V8
            : (0, s.isWindows)() || __OVERLAY__
              ? u.Nu
              : i().codes,
        h = new Set([192, 220, 222, 223, 229]),
        y = Object.freeze({
          KeyA: "a",
          KeyB: "b",
          KeyC: "c",
          KeyD: "d",
          KeyE: "e",
          KeyF: "f",
          KeyG: "g",
          KeyH: "h",
          KeyI: "i",
          KeyJ: "j",
          KeyK: "k",
          KeyL: "l",
          KeyM: "m",
          KeyN: "n",
          KeyO: "o",
          KeyP: "p",
          KeyQ: "q",
          KeyR: "r",
          KeyS: "s",
          KeyT: "t",
          KeyU: "u",
          KeyV: "v",
          KeyW: "w",
          KeyX: "x",
          KeyY: "y",
          KeyZ: "z",
          Digit0: "0",
          Digit1: "1",
          Digit2: "2",
          Digit3: "3",
          Digit4: "4",
          Digit5: "5",
          Digit6: "6",
          Digit7: "7",
          Digit8: "8",
          Digit9: "9",
          Backquote: "`",
          Backslash: "\\",
          Quote: "'",
          Slash: "/",
          Comma: ",",
          Period: ".",
          Semicolon: ";",
          Equal: "=",
          Minus: "-",
          BracketLeft: "[",
          BracketRight: "]",
          IntlBackslash: "\xa7",
        });
      function p(e) {
        return null == e ? e : e.toLocaleLowerCase();
      }
      class f {
        map;
        constructor(e = y) {
          this.map = new Map(
            Object.entries(e).map((e) => {
              let [t, n] = e;
              return [t, p(n)];
            }),
          );
        }
        get(e) {
          return this.map.get(e);
        }
        has(e) {
          return this.map.has(e);
        }
        keys() {
          return this.map.keys();
        }
        values() {
          return this.map.values();
        }
        entries() {
          return this.map.entries();
        }
        forEach(e, t) {
          return this.map.forEach(e, t);
        }
        get size() {
          return this.map.size;
        }
        _set(e, t) {
          this.map.set(e, t);
        }
      }
      let m = new f();
      async function _() {
        if (__OVERLAY__) return (m = new f()), !1;
        if (navigator.keyboard?.getLayoutMap != null)
          try {
            let e = await navigator.keyboard.getLayoutMap();
            return (m = new f(Object.fromEntries(e.entries()))), !0;
          } catch (e) {
            m = new f();
          }
        return !1;
      }
      function E(e) {
        let t = new Set(),
          n = {};
        for (let [r, i] of Object.entries(e)) {
          let e = p(r);
          if (t.has(e) && null != n[e] && n[e] !== i) {
            d.error(`Seperate keyCode mappings found for: ${e}`);
            continue;
          }
          t.add(e), (n[e] = i);
        }
        return n;
      }
      function C(e) {
        return {
          keyCode: e.keyCode,
          key: null != e.key ? p(e.key) : void 0,
          code: e.code,
        };
      }
      let g = "keyboard-layout-map";
      class A {
        keyCodeMap;
        keyMap;
        _internalKeyLayoutMap = null;
        _defaultKeyMap;
        _cachedKeyCodeMapEntries = [];
        _cachedKeyMapEntries = [];
        _cachedKeyLayoutMapEntries = [];
        _cachedAllEvents = [];
        constructor(e = {}) {
          this._defaultKeyMap = e;
          const t = a.w.get(g) ?? null;
          null != t ? (this.keyMap = t) : (this.keyMap = E({ ...e })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
        }
        _setCachedKeyCodeMapEntries() {
          (this._cachedKeyCodeMapEntries = Object.entries(this.keyCodeMap).map(
            (e) => {
              let [t, n] = e;
              return [Number(t), n];
            },
          )),
            (this._cachedAllEvents = this._cachedKeyCodeMapEntries.flatMap(
              (e) => {
                let [t, n] = e;
                return n;
              },
            ));
        }
        _setCachedKeyMapEntries() {
          this._cachedKeyMapEntries = Object.entries(this.keyMap);
        }
        _setCachedKeyLayoutMapEntries() {
          this._cachedKeyLayoutMapEntries = Array.from(
            this.getLayoutMap().entries(),
          );
        }
        get cachedKeyCodeMapEntries() {
          return (
            0 === this._cachedKeyCodeMapEntries.length &&
              this._setCachedKeyCodeMapEntries(),
            this._cachedKeyCodeMapEntries
          );
        }
        get cachedKeyMapEntries() {
          return (
            0 === this._cachedKeyMapEntries.length &&
              this._setCachedKeyMapEntries(),
            this._cachedKeyMapEntries
          );
        }
        get cachedKeyLayoutMapEntries() {
          return (
            0 === this._cachedKeyLayoutMapEntries.length &&
              this._setCachedKeyLayoutMapEntries(),
            this._cachedKeyLayoutMapEntries
          );
        }
        get cachedAllEvents() {
          return (
            0 === this._cachedAllEvents.length &&
              this._setCachedKeyCodeMapEntries(),
            this._cachedAllEvents
          );
        }
        getKeyCodeMapItem(e) {
          return (
            null == this.keyCodeMap[e] && (this.keyCodeMap[e] = []),
            this.keyCodeMap[e]
          );
        }
        _buildKeyCodeMapFromKeyMap() {
          let e = {};
          for (let [t, n] of Object.entries(this.keyMap))
            (e[n] = e[n] ?? []),
              e[n].push({
                keyCode: n,
                key: t,
                code: this.findCodeFromKeyboardLayoutMap(t, !0),
              });
          return e;
        }
        _initializeInternalLayoutMap() {
          let e = m;
          (this._internalKeyLayoutMap = new Map(Array.from(e.entries()))),
            this._setCachedKeyLayoutMapEntries();
        }
        _hasExactMatch(e) {
          if (null == e.keyCode) return !1;
          let t = this.keyCodeMap[e.keyCode];
          return (
            null != t &&
            t.some(
              (t) =>
                t.key === e.key && t.code === e.code && t.keyCode === e.keyCode,
            )
          );
        }
        addEvent(e) {
          let t = C(e);
          null == this._internalKeyLayoutMap &&
            this._initializeInternalLayoutMap(),
            this._hasExactMatch(t) ||
              (null != t.key &&
                "dead" !== t.key &&
                (null == this.keyMap[t.key]
                  ? (this.keyMap[t.key] = t.keyCode)
                  : this.keyMap[t.key] !== t.keyCode &&
                    o.default.logKeyboardMismatches &&
                    d.error(
                      `KeyboardMapper - Key code mismatch for key ${t.key}: ${this.keyMap[t.key]} !== ${t.keyCode}`,
                    ),
                (this.keyCodeMap[t.keyCode] = this.keyCodeMap[t.keyCode] ?? []),
                this.keyCodeMap[t.keyCode].push(t),
                this._internalKeyLayoutMap?.set(t.code, t.key),
                this.updateCaches()));
        }
        updateCaches() {
          this._setCachedKeyCodeMapEntries(),
            this._setCachedKeyMapEntries(),
            this._setCachedKeyLayoutMapEntries();
        }
        reset() {
          (this._internalKeyLayoutMap = null),
            (this.keyMap = E({ ...this._defaultKeyMap })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
        }
        save() {
          var e;
          (e = this.keyMap), a.w.set(g, e);
        }
        getLayoutMap() {
          return null == this._internalKeyLayoutMap
            ? m
            : this._internalKeyLayoutMap;
        }
        getKeyCode(e) {
          return this.keyMap[e];
        }
        findCodeFromKeyboardLayoutMap(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.cachedKeyLayoutMapEntries;
          t && (n = Array.from(m.entries()));
          let r = p(e);
          return (
            n.find((e) => {
              let [t, n] = e;
              return n === r;
            })?.[0] ?? e
          );
        }
      }
      class w extends A {
        getKeyString(e, t) {
          let n = this.getKeyCodeMapItem(e);
          return (
            0 === n.length &&
              (n = this.cachedKeyMapEntries
                .filter((e) => {
                  let [t, n] = e;
                  return n == n;
                })
                .map((e) => {
                  let [n, r] = e;
                  return {
                    key: n,
                    keyCode: r,
                    code: t ?? this.findCodeFromKeyboardLayoutMap(n),
                  };
                })),
            n.find((n) => {
              let r = n.keyCode === e;
              return null != t ? r && n.code === t : r;
            })?.key
          );
        }
        findExactKeyboardEventMatch(e, t, n) {
          let r = p(e);
          if (
            (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)),
            null != n)
          ) {
            let e = this.keyCodeMap[n];
            if (null != e) {
              let n = e.find((e) => p(e.key) === r && e.code === t);
              if (null != n) return n;
            }
          }
          if (null != n && null != t)
            return this.cachedAllEvents.find((e) => {
              let i = p(e.key) === r,
                a = e.keyCode === n,
                l = e.code === t;
              return a && i && l;
            });
        }
        getWeightedPossibleKeyStringMatches(e, t, n) {
          return this.cachedAllEvents
            .filter((r) => {
              let i = p(r.key) === p(e),
                a = null == n || r.keyCode === n,
                l = null == t || r.code === t;
              return a && i && l;
            })
            .sort((r, i) => {
              let a = (r) => {
                  let i = 0;
                  return (
                    p(r.key) === p(e) && (i += 0.5),
                    null != t && r.code === t && (i += 0.3),
                    null != n && r.keyCode === n && (i += 0.2),
                    i
                  );
                },
                l = a(r);
              return a(i) - l;
            });
        }
        findKeyboardEventByKey(e, t, n) {
          let r = p(e);
          if (
            (null == t && (t = this.findCodeFromKeyboardLayoutMap(r)),
            null != n)
          ) {
            let e = this.keyCodeMap[n];
            if (null != e) {
              let n = e.find((e) => p(e.key) === r && e.code === t);
              if (null != n) return n;
            }
          }
          let [i] = this.getWeightedPossibleKeyStringMatches(e, t, n);
          return i;
        }
        findKeyboardEventByKeyCode(e, t) {
          let n = this.getKeyString(e, t);
          if (
            (null == n && null != t && (n = this.getLayoutMap().get(t)),
            null == n)
          ) {
            let r = this.getKeyCodeMapItem(e);
            n = r.find((n) => {
              let r = n.keyCode === e;
              return null != t ? r && n.code === t : r;
            })?.key;
          }
          return null == n
            ? this.getDefaultKeyboardEventShape(void 0, e, t)
            : this.findKeyboardEventByKey(n, t, e);
        }
        getDefaultKeyboardEventShape(e, t, n) {
          let r = null != e ? p(e) : void 0;
          if (null != r) {
            let e = this.keyMap[r];
            if (null == e) return;
            return C({
              keyCode: e,
              key: r,
              code: n ?? this.findCodeFromKeyboardLayoutMap(r),
            });
          }
          if (null != t) {
            let e = this.cachedKeyMapEntries.find((e) => {
              let [n, r] = e;
              return r === t;
            })?.[0];
            if (null == e) return;
            return C({
              keyCode: t,
              key: e,
              code: n ?? this.findCodeFromKeyboardLayoutMap(e),
            });
          }
        }
      }
      let k = null,
        v = null;
      function M() {
        return null != v
          ? v
          : (v = new Promise(async (e) => {
              await _(),
                (k = new w(c)),
                document.addEventListener("keydown", (e) => {
                  try {
                    k?.addEvent(e);
                  } catch (t) {
                    d.error("KeyboardMapper - Error adding event", {
                      event: e,
                      error: t,
                    });
                  }
                }),
                e();
            }));
      }
      function S() {
        return null == k ? (M(), null) : k;
      }
      async function I() {
        await _(), S()?.reset();
      }
      function b() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? m : (S()?.getLayoutMap() ?? m);
      }
      function L(e) {
        let t = C(e);
        return null != t.key
          ? (S()?.findExactKeyboardEventMatch(t.key, t.code, t.keyCode) ?? null)
          : null;
      }
      function T(e) {
        let t = null != e ? p(e) : void 0;
        if (null == t) return null;
        let n = (function (e) {
            let t = null != e ? p(e) : void 0;
            if (null != t)
              return S()?.findCodeFromKeyboardLayoutMap(t) ?? void 0;
          })(t),
          r = S()?.findKeyboardEventByKey(t, n) ?? null;
        if (null != r) return r;
        try {
          let e = S()?.getDefaultKeyboardEventShape(t, void 0, n) ?? null;
          if (null == e) return null;
          let r = new KeyboardEvent("keydown", e);
          return C({ keyCode: r.keyCode, key: r.key, code: r.code });
        } catch (e) {
          return null;
        }
      }
      function N(e) {
        let t = S()?.findKeyboardEventByKeyCode(e) ?? null;
        if (null != t) return t;
        try {
          let t = S()?.getDefaultKeyboardEventShape(void 0, e) ?? null;
          if (null == t) return null;
          let n = new KeyboardEvent("keydown", t);
          return C({ keyCode: n.keyCode, key: n.key, code: n.code });
        } catch (e) {
          return null;
        }
      }
    },
    502518(e, t, n) {
      let r, i;
      n.d(t, { b: () => O, q: () => T }), n(142703), n(667532), n(321073);
      var a = n(132500);
      n(423034);
      var l = n(80703),
        o = n(17928),
        s = n(636537),
        u = n(187207),
        d = n(818348);
      let c = "x-science-test",
        h = 1500,
        y = 0,
        p = 0,
        f = 0,
        m = 0,
        _ = 0,
        E = null,
        C = 0,
        g = Number.MAX_SAFE_INTEGER,
        A = 0,
        w = 0,
        k = null,
        v = !1,
        M = null,
        S = null;
      function I(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return e + t;
      }
      let b = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
        L = new u.n(),
        T = {
          handleConnectionOpen: () => {},
          handleConnectionClosed: () => {},
          handleFingerprint: () => {},
          handleTrack: () => {},
          handleSetAnalyticsToken: () => {},
        },
        N = [],
        K = null,
        D = () => Promise.resolve({ sessionId: void 0 }),
        O = (e) => {
          let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: u,
            getSessionId: O = D,
            TRACKING_URL: R,
            drainTimeoutOverride: x,
            waitFor: P,
            scheduleWhenIdle: F = b,
            getLaunchSignature: j = () => null,
          } = e;
          function U() {
            return 0 !== N.length && (null != i ? null != r : null != u());
          }
          function B(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == K &&
              U() &&
              (K = t ? setTimeout(z, 0) : F(z, { timeout: h }));
          }
          function z() {
            if (((K = null), !U())) return Promise.resolve();
            let e = N.slice();
            (N = []), (C = I(C));
            let t = e.length;
            (g = Math.min(g, t)), (A = Math.max(A, t)), (w = I(w, t));
            let n = G(e);
            return (
              n.then(
                () => {
                  e.forEach((e) => {
                    e.resolve?.();
                  }),
                    (f = I(f));
                },
                (t) => {
                  N.unshift(...e), (m = I(m));
                  let { message: n } = t.body || t;
                  console.warn("[AnalyticsTrackingStore] Track:", n);
                },
              ),
              n
            );
          }
          function G(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : R,
              n = Date.now(),
              i = e.map((e) => ({
                ...e,
                properties: { ...e.properties, client_send_timestamp: n },
              })),
              l = {};
            return (
              v || ((S = (0, a.A)()), (l[c] = S), (v = !0)),
              s.Bo.post({
                url: t,
                headers: l,
                body: { token: r, events: i },
                retries: 3,
                rejectWithError: !1,
              }).then((e) => (l[c] && (M = e?.headers?.[c] ?? null), e))
            );
          }
          function H() {
            let e = {
              type: d.bZ.CLIENT_TELEMETRY,
              properties: {
                client_track_timestamp: Date.now(),
                rpc_success_count: f,
                rpc_failure_count: m,
                first_seen_event_sequence_number: _,
                last_seen_event_sequence_number: y,
                telemetry_period_start_timestamp: E,
                telemetry_period_end_timestamp: Date.now(),
                event_queue_rejection_count: p,
                event_queue_batch_count: C,
                event_queue_batch_min_size:
                  g === Number.MAX_SAFE_INTEGER ? 0 : g,
                event_queue_batch_max_size: A,
                event_queue_batch_avg_size: C > 0 ? w / C : 0,
                science_request_id: S,
                science_response: M,
                launch_signature: j(),
              },
            };
            return (
              (p = 0),
              (f = 0),
              (m = 0),
              (C = 0),
              (g = Number.MAX_SAFE_INTEGER),
              (A = 0),
              (w = 0),
              (E = Date.now()),
              (_ = y),
              G([e], d.mX.CLIENT_TELEMETRY)
            );
          }
          (h = x ?? 1500),
            (T.handleConnectionOpen = function (e) {
              let { analyticsToken: t, user: n } = e;
              return (
                null != t && (r = t),
                null != n.id && (i = n.id),
                !(function () {
                  if (null != k) return;
                  let e = () => {
                    k = {
                      type: "timeout",
                      id: setTimeout(
                        () => {
                          H(), e();
                        },
                        Math.max(
                          36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4),
                          6e4,
                        ),
                      ),
                    };
                  };
                  k = {
                    type: "timeout",
                    id: setTimeout(
                      () => {
                        H(), e();
                      },
                      Math.floor(354e4 * Math.random() + 6e4),
                    ),
                  };
                })(),
                B({ shouldFlushOnNextTick: !1 }),
                !1
              );
            }),
            (T.handleConnectionClosed = function () {
              return (
                z(),
                (function () {
                  if (null == k) return;
                  switch (k.type) {
                    case "timeout":
                      clearTimeout(k.id);
                      break;
                    case "interval":
                      clearInterval(k.id);
                      break;
                    default:
                      k.type;
                  }
                  k = null;
                })(),
                (r = null),
                (i = null),
                !1
              );
            }),
            (T.handleFingerprint = function () {
              return z(), !1;
            }),
            (T.handleTrack = function (e) {
              let {
                event: t,
                properties: n,
                flush: r,
                fingerprint: a,
                resolve: o,
              } = e;
              return (
                O().then((e) => {
                  let { sessionId: s } = e,
                    d = {
                      type: t,
                      fingerprint: a,
                      properties: {
                        client_track_timestamp: Date.now(),
                        client_heartbeat_session_id: s,
                        event_sequence_number: ++y,
                        ...n,
                      },
                      resolve: o,
                    },
                    c = (function (e) {
                      if (null != i) return i;
                      let t = e.fingerprint ?? u();
                      return null != t ? (0, l.d)(t) : null;
                    })(d);
                  if (
                    (null != c && (d.properties.client_uuid = L.generate(c)),
                    N.push(d),
                    N.length > 1e4)
                  ) {
                    let e = N.length - 1e4;
                    (p = I(p, e)), (N = N.slice(-1e4));
                  }
                  r
                    ? B({ shouldFlushOnNextTick: !0 })
                    : B({ shouldFlushOnNextTick: !1 });
                }),
                !1
              );
            }),
            (T.handleSetAnalyticsToken = function (e) {
              let { analyticsToken: t, userId: n } = e;
              return (
                null == r &&
                  null != t &&
                  ((r = t), (i = n), B({ shouldFlushOnNextTick: !1 })),
                !1
              );
            });
          class W extends o.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
              null != P && this.waitFor(...P);
            }
            submitEventsImmediately = G;
          }
          return new W(t, n);
        };
    },
    841117(e, t, n) {
      n.d(t, { Cu: () => a, eU: () => r, sq: () => l });
      let r = (e) => new Promise((t) => setTimeout(t, e)),
        i = () => Promise.resolve();
      function a(e) {
        i = e;
      }
      async function l(e) {
        let { createPromise: t, webpackId: a } = e,
          l = 500,
          o = 0;
        for (;;)
          try {
            return await t();
          } catch (e) {
            if ((console.log(e), a in n.c))
              throw (
                (console.log(
                  "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                ),
                e)
              );
            if (o >= 50) throw e;
            await r(l), await i(), (l = Math.min(5e3, 2 * l)), o++;
          }
      }
    },
    400253(e, t, n) {
      function r(e) {
        return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
      }
      function i(e) {
        return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
      }
      function a() {
        return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
      }
      n.d(t, { BH: () => a, FH: () => i, jN: () => r });
    },
    279234(e, t, n) {
      n.d(t, { P: () => h, x: () => y });
      var r = n(118356),
        i = n(31436);
      let a = null,
        l = new r.Vy("libdiscore");
      function o(e) {
        l.error(e);
      }
      function s(e) {
        l.warn(e);
      }
      function u(e) {
        l.info(e);
      }
      function d(e) {
        l.verbose(e);
      }
      function c(e) {
        l.trace(e);
      }
      function h() {
        return (
          null == a &&
            (a = (async () => {
              await i.Bf();
              let e = i.vZ();
              e.installLogCallback(o, s, u, d, c),
                await e.initLibdiscore(),
                (window._libdiscoreInitialized = !0);
            })()),
          a
        );
      }
      function y() {
        return !0 === window._libdiscoreInitialized;
      }
    },
    31436(e, t, n) {
      n.d(t, { Ay: () => s, Bf: () => l, vZ: () => o });
      var r = n(841117);
      function i(e) {
        console.warn(`[libdiscore] ${e}`);
      }
      async function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          a = null,
          l = e;
        for (;;)
          try {
            await Promise.resolve().then(n.bind(n, 5426));
            return;
          } catch (e) {
            if (
              e instanceof ReferenceError ||
              e instanceof WebAssembly.CompileError
            ) {
              var o;
              throw (
                ((o = !0),
                (window._libdiscoreUnsupportedBrowser = o),
                i(
                  `Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`,
                ),
                e)
              );
            }
            if (((a = e), delete n.c[5426], 0 == --l)) throw a;
            i(
              `Failed to import libdiscore-wasm, retrying... (${l} attempts left), ${a.name}: ${a.message}`,
            ),
              await (0, r.eU)(t);
          }
      }
      function l() {
        let e = window._libdiscoreInitPromise ?? null;
        if (null != e) return e;
        {
          var t;
          let e = (async () => {
            var e;
            await a(),
              (e = await (0, r.sq)({
                createPromise: () => n.e("14575").then(n.bind(n, 811059)),
                webpackId: 811059,
              })),
              (window._libdiscoreWasm = e);
          })();
          return (t = e), (window._libdiscoreInitPromise = t), e;
        }
      }
      function o() {
        if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
        throw Error("libdiscoreWasm is not initialized");
      }
      let s = o;
    },
    547830(e, t, n) {
      n.d(t, { FO: () => a, fL: () => r, u5: () => i }), n(724214);
      try {
        null == Date.now && (Date.now = () => new Date().valueOf());
      } catch (e) {}
      let r = (() => {
          try {
            return (
              n.g.performance.timing.navigationStart ?? n.g.performance.now()
            );
          } catch (e) {}
          return Date.now();
        })(),
        i = (() => {
          try {
            return n.g.performance.timeOrigin ?? r;
          } catch (e) {}
          return Date.now();
        })();
      if (null == n.g.performance.timing)
        try {
          n.g.performance.timing = { navigationStart: r };
        } catch (e) {}
      if (null == n.g.performance.timeOrigin)
        try {
          n.g.performance.timeOrigin = i;
        } catch (e) {}
      let a = n.g.performance;
    },
    396574(e, t, n) {
      n.d(t, {
        Hz: () => s,
        It: () => a,
        LU: () => y,
        PF: () => d,
        VP: () => o,
        fA: () => h,
        g7: () => u,
        zU: () => c,
      });
      var r = n(214958),
        i = n.n(r);
      let a = parseInt(i().version ?? "0", 10),
        l = null != i().ua && i().ua.indexOf("OculusBrowser") > -1,
        o = (() => {
          if ("u" > typeof window && null == window.WebSocket) return !1;
          switch (i().name) {
            case "IE":
            case "Microsoft Edge":
              return a >= 15;
            default:
              return !0;
          }
        })(),
        s =
          l ||
          ("Firefox" === i().name && a >= 80) ||
          ("Chrome" === i().name && a >= 37) ||
          ("Opera" === i().name && a >= 66) ||
          ("Node.js" === i().name && a >= 6) ||
          ("Electron" === i().name && a >= 1) ||
          ("Safari" === i().name && a >= 13) ||
          ("Microsoft Edge" === i().name && a >= 37),
        u =
          "Chrome" === i().name ||
          "Safari" === i().name ||
          ("Firefox" === i().name && a >= 80) ||
          "Opera" === i().name ||
          "Microsoft Edge" === i().name,
        d =
          "u" > typeof RTCPeerConnection &&
          "function" == typeof RTCPeerConnection.prototype.addTransceiver,
        c =
          "u" > typeof RTCRtpSender &&
          ("transform" in RTCRtpSender.prototype ||
            "createEncodedStreams" in RTCRtpSender.prototype),
        h =
          ("Chrome" === i().name && a >= 58) ||
          ("Safari" === i().name && a >= 15) ||
          ("Firefox" === i().name && a >= 108),
        y =
          ("Chrome" === i().name && a >= 72) ||
          ("Safari" === i().name && a >= 11) ||
          ("Opera" === i().name && a >= 60) ||
          ("Microsoft Edge" === i().name && a >= 79);
    },
  },
]);
//# sourceMappingURL=65885.cdc3a41a5ebe8350.js.map
