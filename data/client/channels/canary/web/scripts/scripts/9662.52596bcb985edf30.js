"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9662"],
  {
    92111(e, t, n) {
      n.d(t, { O: () => o, P: () => a });
      var l = n(70283),
        r = n(985018);
      let i = {
        premium: l.$.PREMIUM_TENURE,
        premium_tenure_1_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_3_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_6_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_12_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_24_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_36_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_60_month_v2: l.$.PREMIUM_TENURE,
        premium_tenure_72_month_v2: l.$.PREMIUM_TENURE,
        partner: l.$.PARTNER,
        certified_moderator: l.$.CERTIFIED_MODERATOR,
        hypesquad: l.$.HYPESQUAD,
        hypesquad_house_1: l.$.HYPESQUAD_HOUSE_1,
        hypesquad_house_2: l.$.HYPESQUAD_HOUSE_2,
        hypesquad_house_3: l.$.HYPESQUAD_HOUSE_3,
        bug_hunter_level_1: l.$.BUG_HUNTER_LEVEL_1,
        bug_hunter_level_2: l.$.BUG_HUNTER_LEVEL_2,
        verified_developer: l.$.VERIFIED_DEVELOPER,
        early_supporter: l.$.EARLY_SUPPORTER,
        guild_booster_lvl1: l.$.GUILD_BOOSTER,
        guild_booster_lvl2: l.$.GUILD_BOOSTER,
        guild_booster_lvl3: l.$.GUILD_BOOSTER,
        guild_booster_lvl4: l.$.GUILD_BOOSTER,
        guild_booster_lvl5: l.$.GUILD_BOOSTER,
        guild_booster_lvl6: l.$.GUILD_BOOSTER,
        guild_booster_lvl7: l.$.GUILD_BOOSTER,
        guild_booster_lvl8: l.$.GUILD_BOOSTER,
        guild_booster_lvl9: l.$.GUILD_BOOSTER,
        legacy_username: l.$.LEGACY_USERNAME,
        quest_completed: l.$.QUEST_COMPLETED,
        april_fools_2026: l.$.APRIL_FOOLS_2026,
        orb_profile_badge: l.$.ORB_PROFILE,
      };
      function a(e) {
        return i[e];
      }
      let s = {
        [l.$.PREMIUM_TENURE]: {
          description: () => r.intl.string(r.t.SuO1X2),
          ctaLabel: () => r.intl.string(r.t.LEgsyS),
          ctaAction: "nitro_home",
          ctaVariant: "secondary",
        },
        [l.$.GUILD_BOOSTER]: {
          description: () => r.intl.string(r.t.gV7733),
          ctaLabel: () => r.intl.string(r.t.HKJcgE),
          ctaAction: "boost",
          ctaVariant: "secondary",
        },
        [l.$.QUEST_COMPLETED]: {
          description: () => r.intl.string(r.t["G+gbgO"]),
          ctaLabel: () => r.intl.string(r.t.FQHRUK),
          ctaAction: "quests",
          ctaVariant: "secondary",
        },
        [l.$.ORB_PROFILE]: {
          description: () => r.intl.string(r.t.tN6Sgx),
          ctaLabel: () => r.intl.string(r.t.wTVyFK),
          ctaAction: "orbs",
          ctaVariant: "expressive",
        },
        [l.$.GIFTING]: {
          description: () => r.intl.string(r.t["PECB/R"]),
          ctaLabel: () => r.intl.string(r.t.hdouKj),
          ctaAction: "gifting",
          ctaVariant: "secondary",
        },
      };
      function o(e) {
        return s[e];
      }
    },
    642481(e, t, n) {
      n.d(t, { A: () => f, j: () => p });
      var l = n(627968),
        r = n(64700),
        i = n(503698),
        a = n.n(i),
        s = n(312640),
        o = n(208756),
        d = n(798618),
        u = n(916845),
        c = n(534514),
        E = n(834730),
        _ = n(353795),
        m = n(989108);
      function g(e) {
        let { title: t, body: n } = e;
        return (0, l.jsxs)("div", {
          className: m.header,
          children: [
            (0, l.jsx)(c.D, {
              variant: "heading-md/semibold",
              className: m.title,
              children: t,
            }),
            (0, l.jsx)("div", {
              className: m.headerBody,
              children: (0, l.jsx)(E.E, {
                variant: "text-sm/normal",
                color: "none",
                children: n,
              }),
            }),
          ],
        });
      }
      function p(e) {
        let {
            title: t,
            body: n,
            graphic: i,
            size: c = "md",
            actions: E,
            gradientColor: p,
            onRequestClose: f,
            position: h,
            caretConfig: R,
            scrollBehavior: v,
            showCloseButton: x = !0,
            isCaretHoverable: A = !1,
            shouldTrapFocus: O = !1,
            returnRef: I,
            onNudgeChange: b,
            ...U
          } = e,
          [C, T] = r.useState(h ?? "top");
        r.useEffect(() => {
          null != h && T(h);
        }, [h]);
        let S = r.useMemo(
            () => ({
              align: R?.align ?? "center",
              customOffset: R?.customOffset,
            }),
            [R],
          ),
          j = r.useCallback(() => {
            f?.();
          }, [f]),
          D = r.useCallback(
            (e) => {
              f?.(e);
            },
            [f],
          ),
          L = r.useCallback((e) => {
            T(e);
          }, []),
          y = A ? m.caretHoverable : void 0,
          N = {
            targetElementRef: U.targetElementRef,
            shouldShow: U.shouldShow,
            hasVideo: U.hasVideo,
            position: C,
            caretConfig: S,
            onRequestClose: j,
            gradientColor: p,
            onPositionChange: L,
            onNudgeChange: b,
            scrollBehavior: v,
            modal: O,
            returnRef: I,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === U.alignmentStrategy
              ? { alignmentStrategy: "edge", align: U.align }
              : { alignmentStrategy: "trigger-center" }),
          };
        return (0, l.jsx)(s.x, {
          ...N,
          children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
              x &&
                (0, l.jsx)(u.q, {
                  onClick: D,
                  variant: null != p ? "color-mix" : void 0,
                }),
              null != i &&
                (0, l.jsx)("div", {
                  className: a()(m.graphic, {
                    [m[`graphic--${c}`]]: null != c,
                  }),
                  children: (0, l.jsx)(_.v, {
                    ...i,
                    aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                  }),
                }),
              (0, l.jsx)(g, { title: t, body: n }),
              null != E && E.length > 0
                ? (0, l.jsx)(o.Z, { actions: E, className: m.actionBar })
                : null,
              null != S && (0, l.jsx)(d.F, { className: y }),
            ],
          }),
        });
      }
      let f = p;
    },
    720879(e, t, n) {
      n.d(t, { L: () => o, A: () => d });
      var l = n(627968),
        r = n(64700),
        i = n(844222),
        a = n(350535),
        s = n(642481);
      function o(e) {
        let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: o,
            delay: d = 300,
            onShow: u,
            title: c,
            body: E,
            graphic: _,
            size: m = "md",
            actions: g,
            gradientColor: p,
          } = e,
          f = r.useContext(i.C),
          [h, R] = r.useState("closed"),
          v = r.useRef(null),
          x = r.useRef(!1),
          A = "opening-mouse" === h || "open-mouse" === h,
          O = "opening-keyboard" === h || "open-keyboard" === h,
          I = "open-mouse" === h || "open-keyboard" === h,
          b = (f.keyboardModeEnabled || O) && null != g,
          [U, C] = r.useState(0),
          T = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 200,
              n = arguments.length > 2 ? arguments[2] : void 0,
              [l, i] = r.useState("top");
            return (
              r.useEffect(() => {
                if (null == e.current) return void i("top");
                let n = e.current.getBoundingClientRect(),
                  l = window.innerWidth,
                  r = window.innerHeight,
                  a = {
                    top: n.top,
                    bottom: r - n.bottom,
                    left: n.left,
                    right: l - n.right,
                  },
                  s = ["top", "bottom", "right", "left"];
                for (let e of s) if (a[e] >= t) return void i(e);
                i(s.reduce((e, t) => (a[t] > a[e] ? t : e), "top"));
              }, [e, t, n]),
              l
            );
          })(n, o, h),
          S = r.useCallback(() => {
            null != v.current && (clearTimeout(v.current), (v.current = null));
          }, []),
          j = r.useCallback(
            (e) => {
              e && (x.current = !0), S(), R("closing");
            },
            [S],
          );
        r.useEffect(() => S, [S]);
        let D = r.useCallback(() => {
            ("closed" === h || "closing" === h) && (S(), R("opening-mouse"));
          }, [S, h]),
          L = r.useCallback(() => {
            A && j(!1);
          }, [j, A]),
          y = r.useCallback(() => {
            if (x.current || ("closed" !== h && "closing" !== h)) {
              x.current = !1;
              return;
            }
            S(), R("opening-keyboard");
          }, [S, h]),
          N = r.useCallback(() => {
            (b && "opening-keyboard" !== h) || j(!1);
          }, [j, h, b]);
        r.useEffect(() => {
          if ("opening-mouse" === h)
            return (
              (v.current = window.setTimeout(() => {
                (v.current = null), R("open-mouse"), u?.();
              }, d)),
              S
            );
        }, [h, d, u, S]),
          r.useEffect(() => {
            if ("opening-keyboard" === h)
              return (
                (v.current = window.setTimeout(() => {
                  (v.current = null), R("open-keyboard"), u?.();
                }, d)),
                S
              );
          }, [h, d, u, S]),
          r.useEffect(() => {
            if ("closing" === h)
              return (
                (v.current = window.setTimeout(() => {
                  (v.current = null), R("closed");
                }, 200)),
                S
              );
          }, [h, S]),
          r.useEffect(() => {
            if (!I) return;
            let e = (e) => {
              ("Escape" === e.key || "Esc" === e.key) &&
                (e.preventDefault(), e.stopPropagation(), j(!0));
            };
            return (
              document.addEventListener("keydown", e, !0),
              () => {
                document.removeEventListener("keydown", e, !0);
              }
            );
          }, [I, j]);
        let P = r.useMemo(
            () =>
              null == g
                ? g
                : g.map((e) => ({
                    ...e,
                    onClick: (t) => {
                      e.onClick?.(t), j(!1);
                    },
                  })),
            [g, j],
          ),
          B = r.useCallback((e) => {
            C(e);
          }, []);
        return (0, l.jsxs)("div", {
          onMouseEnter: D,
          onMouseLeave: L,
          onFocus: y,
          onBlur: N,
          children: [
            t,
            (0, l.jsx)(s.j, {
              targetElementRef: n,
              shouldShow: I,
              position: T,
              align: "center",
              title: c,
              body: E,
              graphic: _,
              size: m,
              actions: P,
              gradientColor: p,
              showCloseButton: b,
              shouldTrapFocus: b,
              returnRef: b ? n : void 0,
              isCaretHoverable: !0,
              caretConfig: { align: "custom", customOffset: U },
              onNudgeChange: B,
              onRequestClose: (e) => {
                j(null != e && (0, a.sg)(e));
              },
            }),
          ],
        });
      }
      let d = o;
    },
    262(e, t, n) {
      n.d(t, { A: () => u, h: () => o });
      var l = n(702841),
        r = n(253932),
        i = n(351906),
        a = n(287809),
        s = n(985018);
      let o = "quest_completed",
        d = "legacy_username";
      function u(e, t) {
        let n = r.m$.useSetting(),
          o = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
          u = (0, l.bG)([i.A], () => i.A.hidePersonalInformation);
        if (null == e) return [];
        let c = e?.getBadges() ?? [];
        return (
          null != o &&
            o.id === e.userId &&
            (void 0 !== t ? t : n) &&
            (c = c.filter((e) => e.id !== d)),
          u &&
            (c = c.map((e) => ({
              ...e,
              description:
                e.id === d ? s.intl.string(s.t.Br1ls3) : e.description,
            }))),
          c
        );
      }
    },
    68085(e, t, n) {
      n.d(t, { A: () => es });
      var l = n(627968),
        r = n(64700),
        i = n(503698),
        a = n.n(i),
        s = n(990078),
        o = n(349288),
        d = n(464792),
        u = n(793574),
        c = n(688810);
      let E = (0, n(945810).mj)({
        name: "2026-04-badge-discovery",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      var _ = n(192308);
      let m = function () {
        let { initialBadgeId: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, _.openModalLazy)(
          async () => {
            let { default: t } = await Promise.all([
              n.e("13445"),
              n.e("68629"),
            ]).then(n.bind(n, 825076));
            return (n) => (0, l.jsx)(t, { ...n, initialBadgeId: e });
          },
          { stackingBehavior: "stack" },
        );
      };
      var g = n(693477),
        p = n(459192);
      function f(e) {
        let {
          targetElementRef: t,
          delay: n,
          forceOpen: r,
          badgeDescription: i,
          children: a,
        } = e;
        return (0, l.jsx)(p.u, {
          targetElementRef: t,
          delay: n,
          forceOpen: r,
          asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
          },
          title: "Last Meadow Online",
          body: i,
          children: a,
        });
      }
      var h = n(116833),
        R = n(704640),
        v = n(425713),
        x = n(642481),
        A = n(720879),
        O = n(788868),
        I = n(49999),
        b = n(985018);
      let U = (e) => {
        let {
            badgeId: t = O.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            mode: a = "popover",
            tooltipDelay: s = 300,
            targetElementRef: o,
            body: d,
            progressCircleText: u,
            progressCirclePercent: c,
            progressCircleUrgency: E,
            actions: _,
            onShow: m,
            estimatedTooltipHeight: g = 300,
          } = e,
          p = O.VD[t].nameUnformattedNitro,
          f = b.intl.string(p).toLocaleUpperCase(),
          U = (0, R.A)(t),
          C = (0, v.I)(t).standard;
        (0, r.useEffect)(() => {
          h.m[h.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](),
            (new Image().src = C);
        }, [C]);
        let T = (0, r.useCallback)(() => {
            n?.(I.i.USER_DISMISS);
          }, [n]),
          S = {
            gradientColor: U,
            size: "lg",
            graphic: {
              type: "dynamic",
              component:
                h.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
              aspectRatio: "6/4",
              props: {
                src: C,
                alt: f,
                progressCircleText: u,
                progressCirclePercent: c,
                progressCircleUrgency: E,
              },
            },
            title: f,
            body: d,
            actions: _,
          };
        return "tooltip" === a
          ? (0, l.jsx)(A.A, {
              targetElementRef: o,
              estimatedTooltipHeight: g,
              delay: s,
              onShow: m,
              ...S,
              children: i,
            })
          : (0, l.jsxs)(l.Fragment, {
              children: [
                i,
                (0, l.jsx)(x.A, {
                  targetElementRef: o,
                  shouldShow: !0,
                  onRequestClose: T,
                  align: "right",
                  position: "top",
                  caretConfig: { align: "center" },
                  ...S,
                }),
              ],
            });
      };
      var C = n(534514),
        T = n(834730),
        S = n(775549);
      let j = (e) => {
        let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
        return (0, l.jsxs)("div", {
          className: S.R,
          children: [t, (0, l.jsx)("div", { className: S.A, children: n }), r],
        });
      };
      var D = n(224016),
        L = n(74824);
      let y = (e) => {
        let { profileBadge: t, tenureBadge: n } = e,
          r = (0, v.I)(n.id).standard;
        return (0, l.jsxs)(j, {
          assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
          tooltipWordmarkComponent: (0, l.jsx)(D.A, {
            width: 56,
            className: L.R,
          }),
          children: [
            (0, l.jsx)(C.D, {
              variant: "heading-xl/extrabold",
              children: b.intl.string(n.nameUnformatted),
            }),
            (0, l.jsx)(T.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: L.K,
              children: t.description,
            }),
          ],
        });
      };
      var N = n(30084),
        P = n(507107),
        B = n(590202),
        k = n(976860),
        M = n(305003),
        G = n(312640),
        $ = n(798618),
        H = n(752079),
        w = n(414690);
      function F(e) {
        let {
            children: t,
            targetElementRef: n,
            delay: i,
            showSubtext: a,
            forceOpen: s,
          } = e,
          [o, d] = r.useState(!1),
          u = r.useRef(null),
          c = r.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
          }, []);
        r.useEffect(() => c, [c]);
        let E = r.useCallback(() => {
          c(),
            (u.current = window.setTimeout(() => {
              (u.current = null), d(!0);
            }, i));
        }, [i, c]);
        r.useEffect(() => {
          s && !o && E();
        }, [s, o, E]);
        let _ = r.useCallback(() => {
            E();
          }, [E]),
          m = r.useCallback(() => {
            c(), d(!1);
          }, [c]);
        return (0, l.jsxs)("div", {
          onMouseEnter: _,
          onMouseLeave: m,
          children: [
            t,
            (0, l.jsxs)(G.x, {
              targetElementRef: n,
              shouldShow: !!(o || s),
              position: "top",
              caretConfig: { align: "center" },
              children: [
                (0, l.jsx)(V, { showSubtext: a }),
                (0, l.jsx)($.F, {}),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let { showSubtext: t = !1 } = e;
        return (0, l.jsxs)(j, {
          assetComponent: (0, l.jsx)(H.A, { className: w.jc }),
          tooltipWordmarkComponent: (0, l.jsx)(C.D, {
            variant: "heading-md/extrabold",
            className: w.RK,
            children: b.intl.string(b.t.ElYQFS),
          }),
          children: [
            (0, l.jsx)(C.D, {
              variant: "heading-xl/extrabold",
              className: t ? void 0 : w.Qn,
              children: b.intl.string(b.t.lTHkqd),
            }),
            t
              ? (0, l.jsx)(T.E, {
                  variant: "text-xs/normal",
                  className: w.lV,
                  children: b.intl.string(b.t.MEV0GI),
                })
              : void 0,
          ],
        });
      }
      var Q = n(287809),
        Y = n(954571),
        q = n(474090),
        K = n(439174),
        W = n(183555),
        z = n(47675);
      let J = (0, n(250105).Ay)({
        name: "2026-04-boosting-badge-hover-popup",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      var X = n(262),
        Z = n(999291),
        ee = n(518477);
      function et(e) {
        let {
            children: t,
            targetElementRef: n,
            delay: r,
            badgeIcon: i,
            premiumGuildSince: a,
          } = e,
          s = (0, ee.L7)(i),
          o = b.intl.string(b.t.OAq2KW).toLocaleUpperCase(),
          d = b.intl.formatToPlainString(b.t.rTUArF, { date: a });
        return (0, l.jsx)(A.A, {
          targetElementRef: n,
          estimatedTooltipHeight: 220,
          delay: r,
          gradientColor: "purple",
          size: "lg",
          graphic: { type: "image", src: s, aspectRatio: "6/4" },
          title: o,
          body: d,
          children: t,
        });
      }
      var en = n(652215),
        el = n(92111),
        er = n(758836);
      let ei = "premium";
      var ea = n(992028);
      function es(e) {
        let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: _,
            onClose: p,
            shouldOpenBadgeTooltip: h,
            shouldGlowTenureBadge: R,
          } = e,
          v = r.useRef(null),
          x = r.useRef(null),
          A = r.useRef(null),
          I = r.useRef(null),
          { analyticsLocations: C } = (0, c.Ay)(u.A.BADGE),
          { context: T, trackUserProfileAction: S } = (0, W.NJ)(),
          j = Q.default.getCurrentUser(),
          D = (0, q.CC)(j?.premiumType, O.PremiumTypes.TIER_2),
          L = J.useConfig({ location: "UserProfileBadgeList" }).enabled,
          G = (function (e) {
            let { location: t } = e;
            return E.useConfig({ location: t }).enabled;
          })({ location: "UserProfileBadgeList" }),
          $ = (0, Z.AP)(j?.id ?? null),
          H = (0, X.A)($).some((e) => e.id === M.A.ORB_PROFILE_BADGE);
        return (0, l.jsx)("div", {
          className: a()(ea.k, n),
          "aria-label": b.intl.string(b.t.VWV0y5),
          role: "group",
          children: t.map((e, t) => {
            let n = e.id === M.A.ORB_PROFILE_BADGE,
              r = (0, K.e0)(e.id),
              c = null != r || e.id === ei,
              E = _?.userId === j?.id,
              O = "april_fools_2026" === e.id,
              b = e.id.startsWith(ee.Ky),
              $ = void 0 !== r && e.id !== ei,
              w = (0, l.jsx)("img", {
                alt: " ",
                "aria-hidden": !0,
                src: e.iconSrc ?? (0, ee.L7)(e.icon),
                className: a()(ea.q, i),
              }),
              V = null != h && h(e.id),
              Q = {
                onClick: (t) => {
                  S({ action: "PRESS_BADGE" }),
                    (0, z.R9)({ badge: e.id, analyticsLocations: C, ...T });
                  let l = e.id.startsWith("staff") && !E;
                  if (G && !l) {
                    t.preventDefault(), m({ initialBadgeId: (0, el.P)(e.id) });
                    return;
                  }
                  if (n) {
                    (0, g.Cz)({
                      tab: er.G2.ORBS,
                      analyticsLocations: C,
                      analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                    }),
                      p?.();
                    return;
                  }
                  if (c) {
                    if (
                      (t.preventDefault(),
                      Y.default.track(en.HAw.TIERED_TENURE_BADGE_CLICKED, {
                        badge: e.id,
                        premium_type: D,
                        viewed_user_id: _?.userId,
                      }),
                      D)
                    ) {
                      E
                        ? (0, k.pX)(en.BVt.NITRO_HOME)
                        : (0, N.D)({
                            analyticsLocations: C,
                            displayProfile: _,
                          }),
                        p?.();
                      return;
                    }
                    if (E) {
                      let n =
                        null != e.link
                          ? (0, d.default)(e.link, { analyticsLocations: C })
                          : null;
                      if (null == n) return;
                      return p?.(), n(t);
                    }
                    return (
                      (0, N.D)({ analyticsLocations: C, displayProfile: _ }),
                      void p?.()
                    );
                  }
                  let r =
                    null != e.link
                      ? (0, d.default)(e.link, { analyticsLocations: C })
                      : null;
                  if (null != r) return p?.(), r(t);
                },
                onMouseEnter: () => {
                  e.id === X.h &&
                    Y.default.track(en.HAw.QUEST_CONTENT_VIEWED, {
                      ...(0, B.fF)(P.uF.QUEST_BADGE),
                      is_targeted: !1,
                    }),
                    S({ action: "HOVER_BADGE" }),
                    (0, z.sQ)({ badge: e.id, analyticsLocations: C, ...T });
                },
                href: e.link,
                "aria-label": e.description,
                style: {
                  filter:
                    R && null != r
                      ? `drop-shadow(0 0 5px ${r.glowColor})`
                      : void 0,
                },
              };
            if ($) {
              let n = (0, l.jsx)(o.Anchor, { ...Q, ref: v, children: w });
              return (0, l.jsx)(
                "div",
                {
                  children: (0, l.jsx)(U, {
                    badgeId: e.id,
                    targetElementRef: v,
                    mode: "tooltip",
                    tooltipDelay: ee.In,
                    body: e.description,
                    onShow: () => {
                      Y.default.track(en.HAw.TOOLTIP_VIEWED, {
                        type:
                          "tiered_tenure_badge_profile_" +
                          (E ? "self" : "other"),
                      });
                    },
                    estimatedTooltipHeight: 220,
                    children: n,
                  }),
                },
                `${e.id}-${t}`,
              );
            }
            if (n) {
              let n = (0, l.jsx)(o.Anchor, { ...Q, ref: x, children: w });
              return (0, l.jsx)(
                F,
                {
                  targetElementRef: x,
                  delay: ee.In,
                  showSubtext: !H && !e.isPreviewMode,
                  forceOpen: V,
                  children: n,
                },
                `${e.id}-${t}`,
              );
            }
            if (O) {
              let n = (0, l.jsx)(o.Anchor, { ...Q, ref: A, children: w });
              return (0, l.jsx)(
                f,
                {
                  targetElementRef: A,
                  delay: ee.In,
                  forceOpen: V,
                  badgeDescription: e.description,
                  children: n,
                },
                `${e.id}-${t}`,
              );
            }
            if (b && _?.premiumGuildSince != null && L) {
              let n = (0, l.jsx)(o.Anchor, { ...Q, ref: I, children: w });
              return (0, l.jsx)(
                et,
                {
                  targetElementRef: I,
                  delay: ee.In,
                  badgeIcon: e.icon,
                  premiumGuildSince: _.premiumGuildSince,
                  children: n,
                },
                `${e.id}-${t}`,
              );
            }
            let q = (0, l.jsx)(o.Anchor, { ...Q, children: w }),
              W = ((e) => {
                let { badge: t, tieredTenureBadge: n } = e;
                return void 0 !== n && t.id !== ei
                  ? (0, l.jsx)(y, { profileBadge: t, tenureBadge: n })
                  : t.description;
              })({
                badge: e,
                tieredTenureBadge: c && e.id !== ei ? r : void 0,
              });
            return (0, l.jsx)(
              s.m,
              {
                __unsupportedReactNodeAsText: W,
                forceOpen: V,
                delay: ee.In,
                ariaHidden: !0,
                children: q,
              },
              `${e.id}-${t}`,
            );
          }),
        });
      }
    },
    694720(e, t, n) {
      n.d(t, { A: () => E });
      var l = n(627968),
        r = n(64700),
        i = n(735438),
        a = n(262),
        s = n(305003);
      let o = (e) =>
        e.sort((e, t) =>
          e.id === s.A.ORB_PROFILE_BADGE
            ? 1
            : t.id === s.A.ORB_PROFILE_BADGE
              ? -1
              : 0,
        );
      var d = n(68085),
        u = n(996988);
      let c = {
        [u.d.POPOUT]: 12,
        [u.d.MODAL]: 26,
        [u.d.MODAL_V2]: 16,
        [u.d.SIDEBAR]: 13,
        [u.d.VIDEO_TILE_BACKGROUND]: 12,
      };
      function E(e) {
        let {
            displayProfile: t,
            themeType: n,
            pendingLegacyUsernameDisabled: s,
            pendingBadges: u,
            onClose: E,
            shouldOpenBadgeTooltip: _,
            shouldGlowTenureBadge: m,
          } = e,
          g = (0, a.A)(t, s),
          p = r.useMemo(() => {
            if (null == u) return o(g);
            let e = new Set(g.map((e) => e.id));
            return o([...g, ...u.filter((t) => !e.has(t.id))]);
          }, [g, u]);
        return 0 === p.length
          ? null
          : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(p, c[n]).map((e) =>
                (0, l.jsx)(
                  d.A,
                  {
                    badges: e,
                    displayProfile: t,
                    onClose: E,
                    shouldOpenBadgeTooltip: _,
                    shouldGlowTenureBadge: m,
                  },
                  e[0].id,
                ),
              ),
            });
      }
    },
    308244(e, t, n) {
      n.d(t, { E: () => A, A: () => x });
      var l = n(627968),
        r = n(64700),
        i = n(503698),
        a = n.n(i),
        s = n(834730),
        o = n(140735),
        d = n(707554),
        u = n(349288),
        c = n(954571),
        E = n(559868),
        _ = n(652215),
        m = n(985018);
      let g = () => {
        c.default.track(_.HAw.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "profile_bio",
          target: E.Do,
        });
      };
      function p() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("span", { children: m.intl.string(m.t.OJmNR9) }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("span", {
              children: m.intl.format(m.t.RCYeBL, {
                blogHook: (e, t) =>
                  (0, l.jsx)(
                    u.Anchor,
                    {
                      onClick: g,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      href: E.Do,
                      children: e,
                    },
                    t,
                  ),
              }),
            }),
          ],
        });
      }
      var f = n(311016),
        h = n(692051),
        R = n(713804),
        v = n(992595);
      function x(e) {
        let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: u = !0,
            textColor: c,
            userId: E,
          } = e,
          _ = r.useMemo(
            () =>
              (0, f.A)(E)
                ? (0, l.jsx)(p, {})
                : null == t || "" === t
                  ? null
                  : (0, R.parseBioReact)(t),
            [E, t],
          );
        return null == _
          ? null
          : (0, l.jsx)("div", {
              className: a()(n, v.PT),
              children: (0, l.jsx)(s.E, {
                variant: "text-sm/normal",
                lineClamp: u ? d : void 0,
                color: void 0 !== c ? c : void 0,
                children: (0, l.jsx)(h.Y.Provider, {
                  value: {
                    disableAnimations: i && !o,
                    disableInteractions: !1,
                  },
                  children: _,
                }),
              }),
            });
      }
      function A(e) {
        let t = r.useId(),
          { userBio: n, userId: i } = e;
        return (0, f.A)(i) || (null != n && "" !== n)
          ? (0, l.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                (0, l.jsx)(o.A, {
                  children: (0, l.jsx)(d.H, {
                    id: t,
                    children: m.intl.string(m.t.ZzAR2Y),
                  }),
                }),
                (0, l.jsx)(x, { ...e }),
              ],
            })
          : null;
      }
    },
    878555(e, t, n) {
      n.d(t, { c$: () => A, Ay: () => C, Ce: () => b, n2: () => I });
      var l = n(627968);
      n(64700);
      var r = n(503698),
        i = n.n(r),
        a = n(990078),
        s = n(834730),
        o = n(939249),
        d = n(140735),
        u = n(297413),
        c = n(705751);
      function E(e) {
        let t;
        return (
          e.isSystemUser() ? (t = c.nu.SYSTEM_DM) : e.bot && (t = c.nu.BOT), t
        );
      }
      var _ = n(709066),
        m = n(609425),
        g = n(922301),
        p = n(368919),
        f = n(534400),
        h = n(518477),
        R = n(985018),
        v = n(874644);
      let x = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
      function A(e) {
        let {
            user: t,
            guildId: n,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            botTag: u,
            className: c,
          } = e,
          E = (0, m.A)({
            userId: t.id,
            guildId: n,
            pendingDisplayNameStyles: o,
          }),
          _ = x[a];
        return null != E
          ? (0, l.jsx)(s.E, {
              variant: _,
              className: c,
              children: (0, l.jsx)(p.A, {
                userName: r,
                displayNameStyles: E,
                effectDisplayType: g.G.ANIMATED,
                textClassName: v.QC,
                shouldWrap: !0,
                loop: !0,
                inProfile: !0,
                shouldUnderlineOnHover: d,
                appendedInlineContent:
                  null != u
                    ? (0, l.jsxs)(l.Fragment, { children: [" ", u] })
                    : null,
              }),
            })
          : (0, l.jsxs)(s.E, {
              className: i()(v.QC, v.O2, c),
              variant: _,
              children: [r, " ", u],
            });
      }
      function O(e) {
        let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: a,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: u,
          } = e,
          c = E(t),
          m =
            null != c
              ? (0, l.jsx)(_.A, {
                  type: c,
                  verified: t.isVerifiedBot(),
                  className: v.AO,
                })
              : null,
          g = (0, l.jsx)(A, {
            user: t,
            guildId: n,
            displayName: r,
            size: s,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != u,
            botTag: m,
          });
        return (0, l.jsxs)("div", {
          className: i()(v.K$, "lg" === s && v.lg),
          children: [
            null != u
              ? (0, l.jsx)(o.D, { onClick: u, className: v.vk, children: g })
              : g,
            null != a &&
              !1 !== a &&
              (0, l.jsx)("div", { className: v.MU, children: a }),
          ],
        });
      }
      function I(e) {
        let { pronouns: t, className: n } = e;
        return (0, l.jsxs)(s.E, {
          className: i()(v.hI, n),
          variant: "text-sm/medium",
          color: "text-strong",
          children: [
            (0, l.jsx)(d.A, {
              tag: "span",
              children: R.intl.formatToPlainString(R.t["DRI+T7"], {
                pronouns: t,
              }),
            }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: t }),
          ],
        });
      }
      function b() {
        return (0, l.jsx)("div", { "aria-hidden": "true", className: v.SC });
      }
      function U(e) {
        let {
            user: t,
            usernameIcon: n,
            onClickUsername: r,
            pronouns: s,
            primaryGuild: d,
            trailing: c,
            onClose: _,
          } = e,
          m = null != s && s.length > 0,
          g = E(t),
          p = t.isProvisional
            ? null
            : (0, l.jsx)(u.A, {
                user: t,
                usernameIcon: n,
                forceUsername: !0,
                className: v.a1,
                usernameClass: v.eb,
                discriminatorClass: v.sw,
                hideBotTag: !0,
              });
        return (0, l.jsxs)("div", {
          className: i()(v.AK, { [v.j6]: m, [v.w2]: null != g }),
          children: [
            null != p && null != r
              ? (0, l.jsx)(o.D, { onClick: r, className: v.vk, children: p })
              : p,
            m &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(b, {}),
                  (0, l.jsx)(a.m, {
                    asContainer: !0,
                    text: R.intl.string(R.t.GI2A8C),
                    delay: h.In,
                    ariaHidden: !0,
                    children: (0, l.jsx)(I, { pronouns: s }),
                  }),
                ],
              }),
            (0, l.jsx)(f.Ay, {
              primaryGuild: d,
              userId: t.id,
              onClose: _,
              containerClassName: v.L4,
              className: v.Mp,
            }),
            c,
          ],
        });
      }
      function C(e) {
        let {
          user: t,
          guildId: n,
          className: r,
          onClickName: i,
          displayName: a,
          displayNameSize: s,
          pendingDisplayNameStyles: o,
          displayNameTrailing: d,
          usernameIcon: u,
          pronouns: c,
          primaryGuild: E,
          trailing: _,
          onClose: m,
        } = e;
        return (0, l.jsxs)("div", {
          className: r,
          children: [
            (0, l.jsx)(O, {
              user: t,
              guildId: n,
              displayName: a,
              size: s,
              pendingDisplayNameStyles: o,
              onClickDisplayName: i,
              trailing: d,
            }),
            (0, l.jsx)(U, {
              user: t,
              usernameIcon: u,
              pronouns: c,
              primaryGuild: E,
              onClickUsername: i,
              onClose: m,
              trailing: _,
            }),
          ],
        });
      }
    },
    70283(e, t, n) {
      n.d(t, { $: () => r });
      var l,
        r =
          (((l = {})[(l.PREMIUM_TENURE = 1)] = "PREMIUM_TENURE"),
          (l[(l.PARTNER = 2)] = "PARTNER"),
          (l[(l.CERTIFIED_MODERATOR = 3)] = "CERTIFIED_MODERATOR"),
          (l[(l.HYPESQUAD = 4)] = "HYPESQUAD"),
          (l[(l.HYPESQUAD_HOUSE_1 = 5)] = "HYPESQUAD_HOUSE_1"),
          (l[(l.HYPESQUAD_HOUSE_2 = 6)] = "HYPESQUAD_HOUSE_2"),
          (l[(l.HYPESQUAD_HOUSE_3 = 7)] = "HYPESQUAD_HOUSE_3"),
          (l[(l.BUG_HUNTER_LEVEL_1 = 8)] = "BUG_HUNTER_LEVEL_1"),
          (l[(l.BUG_HUNTER_LEVEL_2 = 9)] = "BUG_HUNTER_LEVEL_2"),
          (l[(l.VERIFIED_DEVELOPER = 10)] = "VERIFIED_DEVELOPER"),
          (l[(l.EARLY_SUPPORTER = 11)] = "EARLY_SUPPORTER"),
          (l[(l.GUILD_BOOSTER = 12)] = "GUILD_BOOSTER"),
          (l[(l.LEGACY_USERNAME = 13)] = "LEGACY_USERNAME"),
          (l[(l.QUEST_COMPLETED = 14)] = "QUEST_COMPLETED"),
          (l[(l.APRIL_FOOLS_2026 = 15)] = "APRIL_FOOLS_2026"),
          (l[(l.ORB_PROFILE = 16)] = "ORB_PROFILE"),
          (l[(l.GIFTING = 17)] = "GIFTING"),
          l);
    },
  },
]);
//# sourceMappingURL=9662.52596bcb985edf30.js.map
