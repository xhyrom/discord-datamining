"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9662"],
  {
    642481(e, n, t) {
      t.d(n, { A: () => x, j: () => h });
      var l = t(627968),
        r = t(64700),
        i = t(503698),
        a = t.n(i),
        s = t(312640),
        o = t(208756),
        d = t(798618),
        u = t(916845),
        c = t(534514),
        m = t(834730),
        f = t(353795),
        p = t(989108);
      function g(e) {
        let { title: n, body: t } = e;
        return (0, l.jsxs)("div", {
          className: p.header,
          children: [
            (0, l.jsx)(c.D, {
              variant: "heading-md/semibold",
              className: p.title,
              children: n,
            }),
            (0, l.jsx)("div", {
              className: p.headerBody,
              children: (0, l.jsx)(m.E, {
                variant: "text-sm/normal",
                color: "none",
                children: t,
              }),
            }),
          ],
        });
      }
      function h(e) {
        let {
            title: n,
            body: t,
            graphic: i,
            size: c = "md",
            actions: m,
            gradientColor: h,
            onRequestClose: x,
            position: j,
            caretConfig: v,
            scrollBehavior: C,
            showCloseButton: E = !0,
            isCaretHoverable: b = !1,
            shouldTrapFocus: A = !1,
            returnRef: y,
            onNudgeChange: R,
            ...k
          } = e,
          [_, I] = r.useState(j ?? "top");
        r.useEffect(() => {
          null != j && I(j);
        }, [j]);
        let N = r.useMemo(
            () => ({
              align: v?.align ?? "center",
              customOffset: v?.customOffset,
            }),
            [v],
          ),
          D = r.useCallback(() => {
            x?.();
          }, [x]),
          S = r.useCallback(
            (e) => {
              x?.(e);
            },
            [x],
          ),
          T = r.useCallback((e) => {
            I(e);
          }, []),
          O = b ? p.caretHoverable : void 0,
          w = {
            targetElementRef: k.targetElementRef,
            shouldShow: k.shouldShow,
            hasVideo: k.hasVideo,
            position: _,
            caretConfig: N,
            onRequestClose: D,
            gradientColor: h,
            onPositionChange: T,
            onNudgeChange: R,
            scrollBehavior: C,
            modal: A,
            returnRef: y,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === k.alignmentStrategy
              ? { alignmentStrategy: "edge", align: k.align }
              : { alignmentStrategy: "trigger-center" }),
          };
        return (0, l.jsx)(s.x, {
          ...w,
          children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
              E &&
                (0, l.jsx)(u.q, {
                  onClick: S,
                  variant: null != h ? "color-mix" : void 0,
                }),
              null != i &&
                (0, l.jsx)("div", {
                  className: a()(p.graphic, {
                    [p[`graphic--${c}`]]: null != c,
                  }),
                  children: (0, l.jsx)(f.v, {
                    ...i,
                    aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                  }),
                }),
              (0, l.jsx)(g, { title: n, body: t }),
              null != m && m.length > 0
                ? (0, l.jsx)(o.Z, { actions: m, className: p.actionBar })
                : null,
              null != N && (0, l.jsx)(d.F, { className: O }),
            ],
          }),
        });
      }
      let x = h;
    },
    720879(e, n, t) {
      t.d(n, { L: () => o, A: () => d });
      var l = t(627968),
        r = t(64700),
        i = t(844222),
        a = t(350535),
        s = t(642481);
      function o(e) {
        let {
            children: n,
            targetElementRef: t,
            estimatedTooltipHeight: o,
            delay: d = 300,
            onShow: u,
            title: c,
            body: m,
            graphic: f,
            size: p = "md",
            actions: g,
            gradientColor: h,
          } = e,
          x = r.useContext(i.C),
          [j, v] = r.useState("closed"),
          C = r.useRef(null),
          E = r.useRef(!1),
          b = "opening-mouse" === j || "open-mouse" === j,
          A = "opening-keyboard" === j || "open-keyboard" === j,
          y = "open-mouse" === j || "open-keyboard" === j,
          R = (x.keyboardModeEnabled || A) && null != g,
          [k, _] = r.useState(0),
          I = (function (e) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 200,
              t = arguments.length > 2 ? arguments[2] : void 0,
              [l, i] = r.useState("top");
            return (
              r.useEffect(() => {
                if (null == e.current) return void i("top");
                let t = e.current.getBoundingClientRect(),
                  l = window.innerWidth,
                  r = window.innerHeight,
                  a = {
                    top: t.top,
                    bottom: r - t.bottom,
                    left: t.left,
                    right: l - t.right,
                  },
                  s = ["top", "bottom", "right", "left"];
                for (let e of s) if (a[e] >= n) return void i(e);
                i(s.reduce((e, n) => (a[n] > a[e] ? n : e), "top"));
              }, [e, n, t]),
              l
            );
          })(t, o, j),
          N = r.useCallback(() => {
            null != C.current && (clearTimeout(C.current), (C.current = null));
          }, []),
          D = r.useCallback(
            (e) => {
              e && (E.current = !0), N(), v("closing");
            },
            [N],
          );
        r.useEffect(() => N, [N]);
        let S = r.useCallback(() => {
            ("closed" === j || "closing" === j) && (N(), v("opening-mouse"));
          }, [N, j]),
          T = r.useCallback(() => {
            b && D(!1);
          }, [D, b]),
          O = r.useCallback(() => {
            if (E.current || ("closed" !== j && "closing" !== j)) {
              E.current = !1;
              return;
            }
            N(), v("opening-keyboard");
          }, [N, j]),
          w = r.useCallback(() => {
            (R && "opening-keyboard" !== j) || D(!1);
          }, [D, j, R]);
        r.useEffect(() => {
          if ("opening-mouse" === j)
            return (
              (C.current = window.setTimeout(() => {
                (C.current = null), v("open-mouse"), u?.();
              }, d)),
              N
            );
        }, [j, d, u, N]),
          r.useEffect(() => {
            if ("opening-keyboard" === j)
              return (
                (C.current = window.setTimeout(() => {
                  (C.current = null), v("open-keyboard"), u?.();
                }, d)),
                N
              );
          }, [j, d, u, N]),
          r.useEffect(() => {
            if ("closing" === j)
              return (
                (C.current = window.setTimeout(() => {
                  (C.current = null), v("closed");
                }, 200)),
                N
              );
          }, [j, N]),
          r.useEffect(() => {
            if (!y) return;
            let e = (e) => {
              ("Escape" === e.key || "Esc" === e.key) &&
                (e.preventDefault(), e.stopPropagation(), D(!0));
            };
            return (
              document.addEventListener("keydown", e, !0),
              () => {
                document.removeEventListener("keydown", e, !0);
              }
            );
          }, [y, D]);
        let B = r.useMemo(
            () =>
              null == g
                ? g
                : g.map((e) => ({
                    ...e,
                    onClick: (n) => {
                      e.onClick?.(n), D(!1);
                    },
                  })),
            [g, D],
          ),
          G = r.useCallback((e) => {
            _(e);
          }, []);
        return (0, l.jsxs)("div", {
          onMouseEnter: S,
          onMouseLeave: T,
          onFocus: O,
          onBlur: w,
          children: [
            n,
            (0, l.jsx)(s.j, {
              targetElementRef: t,
              shouldShow: y,
              position: I,
              align: "center",
              title: c,
              body: m,
              graphic: f,
              size: p,
              actions: B,
              gradientColor: h,
              showCloseButton: R,
              shouldTrapFocus: R,
              returnRef: R ? t : void 0,
              isCaretHoverable: !0,
              caretConfig: { align: "custom", customOffset: k },
              onNudgeChange: G,
              onRequestClose: (e) => {
                D(null != e && (0, a.sg)(e));
              },
            }),
          ],
        });
      }
      let d = o;
    },
    262(e, n, t) {
      t.d(n, { A: () => u, h: () => o });
      var l = t(702841),
        r = t(253932),
        i = t(351906),
        a = t(287809),
        s = t(985018);
      let o = "quest_completed",
        d = "legacy_username";
      function u(e, n) {
        let t = r.m$.useSetting(),
          o = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
          u = (0, l.bG)([i.A], () => i.A.hidePersonalInformation);
        if (null == e) return [];
        let c = e?.getBadges() ?? [];
        return (
          null != o &&
            o.id === e.userId &&
            (void 0 !== n ? n : t) &&
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
    68085(e, n, t) {
      t.d(n, { A: () => ei });
      var l = t(627968),
        r = t(64700),
        i = t(503698),
        a = t.n(i),
        s = t(990078),
        o = t(349288),
        d = t(464792),
        u = t(793574),
        c = t(688810);
      let m = (0, t(945810).mj)({
        name: "2026-04-badge-discovery",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      var f = t(192308),
        p = t(693477),
        g = t(459192);
      function h(e) {
        let {
          targetElementRef: n,
          delay: t,
          forceOpen: r,
          badgeDescription: i,
          children: a,
        } = e;
        return (0, l.jsx)(g.u, {
          targetElementRef: n,
          delay: t,
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
      var x = t(116833),
        j = t(704640),
        v = t(425713),
        C = t(642481),
        E = t(720879),
        b = t(788868),
        A = t(49999),
        y = t(985018);
      let R = (e) => {
        let {
            badgeId: n = b.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: t,
            children: i,
            mode: a = "popover",
            tooltipDelay: s = 300,
            targetElementRef: o,
            body: d,
            progressCircleText: u,
            progressCirclePercent: c,
            progressCircleUrgency: m,
            actions: f,
            onShow: p,
            estimatedTooltipHeight: g = 300,
          } = e,
          h = b.VD[n].nameUnformattedNitro,
          R = y.intl.string(h).toLocaleUpperCase(),
          k = (0, j.A)(n),
          _ = (0, v.I)(n).standard;
        (0, r.useEffect)(() => {
          x.m[x.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](),
            (new Image().src = _);
        }, [_]);
        let I = (0, r.useCallback)(() => {
            t?.(A.i.USER_DISMISS);
          }, [t]),
          N = {
            gradientColor: k,
            size: "lg",
            graphic: {
              type: "dynamic",
              component:
                x.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
              aspectRatio: "6/4",
              props: {
                src: _,
                alt: R,
                progressCircleText: u,
                progressCirclePercent: c,
                progressCircleUrgency: m,
              },
            },
            title: R,
            body: d,
            actions: f,
          };
        return "tooltip" === a
          ? (0, l.jsx)(E.A, {
              targetElementRef: o,
              estimatedTooltipHeight: g,
              delay: s,
              onShow: p,
              ...N,
              children: i,
            })
          : (0, l.jsxs)(l.Fragment, {
              children: [
                i,
                (0, l.jsx)(C.A, {
                  targetElementRef: o,
                  shouldShow: !0,
                  onRequestClose: I,
                  align: "right",
                  position: "top",
                  caretConfig: { align: "center" },
                  ...N,
                }),
              ],
            });
      };
      var k = t(534514),
        _ = t(834730),
        I = t(775549);
      let N = (e) => {
        let { assetComponent: n, tooltipWordmarkComponent: t, children: r } = e;
        return (0, l.jsxs)("div", {
          className: I.R,
          children: [n, (0, l.jsx)("div", { className: I.A, children: t }), r],
        });
      };
      var D = t(224016),
        S = t(74824);
      let T = (e) => {
        let { profileBadge: n, tenureBadge: t } = e,
          r = (0, v.I)(t.id).standard;
        return (0, l.jsxs)(N, {
          assetComponent: (0, l.jsx)("img", { src: r, alt: "" }),
          tooltipWordmarkComponent: (0, l.jsx)(D.A, {
            width: 56,
            className: S.R,
          }),
          children: [
            (0, l.jsx)(k.D, {
              variant: "heading-xl/extrabold",
              children: y.intl.string(t.nameUnformatted),
            }),
            (0, l.jsx)(_.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: S.K,
              children: n.description,
            }),
          ],
        });
      };
      var O = t(30084),
        w = t(507107),
        B = t(590202),
        G = t(976860),
        L = t(305003),
        M = t(312640),
        P = t(798618),
        U = t(752079),
        H = t(414690);
      function F(e) {
        let {
            children: n,
            targetElementRef: t,
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
        let m = r.useCallback(() => {
          c(),
            (u.current = window.setTimeout(() => {
              (u.current = null), d(!0);
            }, i));
        }, [i, c]);
        r.useEffect(() => {
          s && !o && m();
        }, [s, o, m]);
        let f = r.useCallback(() => {
            m();
          }, [m]),
          p = r.useCallback(() => {
            c(), d(!1);
          }, [c]);
        return (0, l.jsxs)("div", {
          onMouseEnter: f,
          onMouseLeave: p,
          children: [
            n,
            (0, l.jsxs)(M.x, {
              targetElementRef: t,
              shouldShow: !!(o || s),
              position: "top",
              caretConfig: { align: "center" },
              children: [
                (0, l.jsx)(V, { showSubtext: a }),
                (0, l.jsx)(P.F, {}),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let { showSubtext: n = !1 } = e;
        return (0, l.jsxs)(N, {
          assetComponent: (0, l.jsx)(U.A, { className: H.jc }),
          tooltipWordmarkComponent: (0, l.jsx)(k.D, {
            variant: "heading-md/extrabold",
            className: H.RK,
            children: y.intl.string(y.t.ElYQFS),
          }),
          children: [
            (0, l.jsx)(k.D, {
              variant: "heading-xl/extrabold",
              className: n ? void 0 : H.Qn,
              children: y.intl.string(y.t.lTHkqd),
            }),
            n
              ? (0, l.jsx)(_.E, {
                  variant: "text-xs/normal",
                  className: H.lV,
                  children: y.intl.string(y.t.MEV0GI),
                })
              : void 0,
          ],
        });
      }
      var $ = t(287809),
        W = t(954571),
        K = t(474090),
        q = t(439174),
        z = t(183555),
        Q = t(47675);
      let Y = (0, t(250105).Ay)({
        name: "2026-04-boosting-badge-hover-popup",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      var J = t(262),
        Z = t(999291),
        X = t(518477);
      function ee(e) {
        let {
            children: n,
            targetElementRef: t,
            delay: r,
            badgeIcon: i,
            premiumGuildSince: a,
          } = e,
          s = (0, X.L7)(i),
          o = y.intl.string(y.t.OAq2KW).toLocaleUpperCase(),
          d = y.intl.formatToPlainString(y.t.rTUArF, { date: a });
        return (0, l.jsx)(E.A, {
          targetElementRef: t,
          estimatedTooltipHeight: 220,
          delay: r,
          gradientColor: "purple",
          size: "lg",
          graphic: { type: "image", src: s, aspectRatio: "6/4" },
          title: o,
          body: d,
          children: n,
        });
      }
      var en = t(652215),
        et = t(758836);
      let el = "premium";
      var er = t(992028);
      function ei(e) {
        let {
            badges: n,
            className: i,
            badgeClassName: g,
            displayProfile: x,
            onClose: j,
            shouldOpenBadgeTooltip: v,
            shouldGlowTenureBadge: C,
          } = e,
          E = r.useRef(null),
          A = r.useRef(null),
          k = r.useRef(null),
          _ = r.useRef(null),
          { analyticsLocations: I } = (0, c.Ay)(u.A.BADGE),
          { context: N, trackUserProfileAction: D } = (0, z.NJ)(),
          S = $.default.getCurrentUser(),
          M = (0, K.CC)(S?.premiumType, b.PremiumTypes.TIER_2),
          P = Y.useConfig({ location: "UserProfileBadgeList" }).enabled,
          U = (function (e) {
            let { location: n } = e;
            return m.useConfig({ location: n }).enabled;
          })({ location: "UserProfileBadgeList" }),
          H = (0, Z.AP)(S?.id ?? null),
          V = (0, J.A)(H).some((e) => e.id === L.A.ORB_PROFILE_BADGE);
        return (0, l.jsx)("div", {
          className: a()(er.k, i),
          "aria-label": y.intl.string(y.t.VWV0y5),
          role: "group",
          children: n.map((e, n) => {
            let r = e.id === L.A.ORB_PROFILE_BADGE,
              i = (0, q.e0)(e.id),
              c = null != i || e.id === el,
              m = x?.userId === S?.id,
              b = "april_fools_2026" === e.id,
              y = e.id.startsWith(X.Ky),
              H = void 0 !== i && e.id !== el,
              $ = (0, l.jsx)("img", {
                alt: " ",
                "aria-hidden": !0,
                src: e.iconSrc ?? (0, X.L7)(e.icon),
                className: a()(er.q, g),
              }),
              K = null != v && v(e.id),
              z = {
                onClick: (n) => {
                  D({ action: "PRESS_BADGE" }),
                    (0, Q.R9)({ badge: e.id, analyticsLocations: I, ...N });
                  let i = e.id.startsWith("staff") && !m;
                  if (U && !i) {
                    n.preventDefault(),
                      (0, f.openModalLazy)(
                        async () => {
                          let { default: e } = await Promise.all([
                            t.e("13445"),
                            t.e("835"),
                          ]).then(t.bind(t, 1102));
                          return (n) => (0, l.jsx)(e, { ...n });
                        },
                        { stackingBehavior: "stack" },
                      );
                    return;
                  }
                  if (r) {
                    (0, p.Cz)({
                      tab: et.G2.ORBS,
                      analyticsLocations: I,
                      analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                    }),
                      j?.();
                    return;
                  }
                  if (c) {
                    if (
                      (n.preventDefault(),
                      W.default.track(en.HAw.TIERED_TENURE_BADGE_CLICKED, {
                        badge: e.id,
                        premium_type: M,
                        viewed_user_id: x?.userId,
                      }),
                      M)
                    ) {
                      m
                        ? (0, G.pX)(en.BVt.NITRO_HOME)
                        : (0, O.D)({
                            analyticsLocations: I,
                            displayProfile: x,
                          }),
                        j?.();
                      return;
                    }
                    if (m) {
                      let t =
                        null != e.link
                          ? (0, d.default)(e.link, { analyticsLocations: I })
                          : null;
                      if (null == t) return;
                      return j?.(), t(n);
                    }
                    return (
                      (0, O.D)({ analyticsLocations: I, displayProfile: x }),
                      void j?.()
                    );
                  }
                  let a =
                    null != e.link
                      ? (0, d.default)(e.link, { analyticsLocations: I })
                      : null;
                  if (null != a) return j?.(), a(n);
                },
                onMouseEnter: () => {
                  e.id === J.h &&
                    W.default.track(en.HAw.QUEST_CONTENT_VIEWED, {
                      ...(0, B.fF)(w.uF.QUEST_BADGE),
                      is_targeted: !1,
                    }),
                    D({ action: "HOVER_BADGE" }),
                    (0, Q.sQ)({ badge: e.id, analyticsLocations: I, ...N });
                },
                href: e.link,
                "aria-label": e.description,
                style: {
                  filter:
                    C && null != i
                      ? `drop-shadow(0 0 5px ${i.glowColor})`
                      : void 0,
                },
              };
            if (H) {
              let t = (0, l.jsx)(o.Anchor, { ...z, ref: E, children: $ });
              return (0, l.jsx)(
                "div",
                {
                  children: (0, l.jsx)(R, {
                    badgeId: e.id,
                    targetElementRef: E,
                    mode: "tooltip",
                    tooltipDelay: X.In,
                    body: e.description,
                    onShow: () => {
                      W.default.track(en.HAw.TOOLTIP_VIEWED, {
                        type:
                          "tiered_tenure_badge_profile_" +
                          (m ? "self" : "other"),
                      });
                    },
                    estimatedTooltipHeight: 220,
                    children: t,
                  }),
                },
                `${e.id}-${n}`,
              );
            }
            if (r) {
              let t = (0, l.jsx)(o.Anchor, { ...z, ref: A, children: $ });
              return (0, l.jsx)(
                F,
                {
                  targetElementRef: A,
                  delay: X.In,
                  showSubtext: !V && !e.isPreviewMode,
                  forceOpen: K,
                  children: t,
                },
                `${e.id}-${n}`,
              );
            }
            if (b) {
              let t = (0, l.jsx)(o.Anchor, { ...z, ref: k, children: $ });
              return (0, l.jsx)(
                h,
                {
                  targetElementRef: k,
                  delay: X.In,
                  forceOpen: K,
                  badgeDescription: e.description,
                  children: t,
                },
                `${e.id}-${n}`,
              );
            }
            if (y && x?.premiumGuildSince != null && P) {
              let t = (0, l.jsx)(o.Anchor, { ...z, ref: _, children: $ });
              return (0, l.jsx)(
                ee,
                {
                  targetElementRef: _,
                  delay: X.In,
                  badgeIcon: e.icon,
                  premiumGuildSince: x.premiumGuildSince,
                  children: t,
                },
                `${e.id}-${n}`,
              );
            }
            let Y = (0, l.jsx)(o.Anchor, { ...z, children: $ }),
              Z = ((e) => {
                let { badge: n, tieredTenureBadge: t } = e;
                return void 0 !== t && n.id !== el
                  ? (0, l.jsx)(T, { profileBadge: n, tenureBadge: t })
                  : n.description;
              })({
                badge: e,
                tieredTenureBadge: c && e.id !== el ? i : void 0,
              });
            return (0, l.jsx)(
              s.m,
              {
                __unsupportedReactNodeAsText: Z,
                forceOpen: K,
                delay: X.In,
                ariaHidden: !0,
                children: Y,
              },
              `${e.id}-${n}`,
            );
          }),
        });
      }
    },
    694720(e, n, t) {
      t.d(n, { A: () => m });
      var l = t(627968),
        r = t(64700),
        i = t(735438),
        a = t(262),
        s = t(305003);
      let o = (e) =>
        e.sort((e, n) =>
          e.id === s.A.ORB_PROFILE_BADGE
            ? 1
            : n.id === s.A.ORB_PROFILE_BADGE
              ? -1
              : 0,
        );
      var d = t(68085),
        u = t(996988);
      let c = {
        [u.d.POPOUT]: 12,
        [u.d.MODAL]: 26,
        [u.d.MODAL_V2]: 16,
        [u.d.SIDEBAR]: 13,
        [u.d.VIDEO_TILE_BACKGROUND]: 12,
      };
      function m(e) {
        let {
            displayProfile: n,
            themeType: t,
            pendingLegacyUsernameDisabled: s,
            pendingBadges: u,
            onClose: m,
            shouldOpenBadgeTooltip: f,
            shouldGlowTenureBadge: p,
          } = e,
          g = (0, a.A)(n, s),
          h = r.useMemo(() => {
            if (null == u) return o(g);
            let e = new Set(g.map((e) => e.id));
            return o([...g, ...u.filter((n) => !e.has(n.id))]);
          }, [g, u]);
        return 0 === h.length
          ? null
          : (0, l.jsx)(l.Fragment, {
              children: (0, i.chunk)(h, c[t]).map((e) =>
                (0, l.jsx)(
                  d.A,
                  {
                    badges: e,
                    displayProfile: n,
                    onClose: m,
                    shouldOpenBadgeTooltip: f,
                    shouldGlowTenureBadge: p,
                  },
                  e[0].id,
                ),
              ),
            });
      }
    },
    308244(e, n, t) {
      t.d(n, { E: () => b, A: () => E });
      var l = t(627968),
        r = t(64700),
        i = t(503698),
        a = t.n(i),
        s = t(834730),
        o = t(140735),
        d = t(707554),
        u = t(349288),
        c = t(954571),
        m = t(559868),
        f = t(652215),
        p = t(985018);
      let g = () => {
        c.default.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "profile_bio",
          target: m.Do,
        });
      };
      function h() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("span", { children: p.intl.string(p.t.OJmNR9) }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("span", {
              children: p.intl.format(p.t.RCYeBL, {
                blogHook: (e, n) =>
                  (0, l.jsx)(
                    u.Anchor,
                    {
                      onClick: g,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      href: m.Do,
                      children: e,
                    },
                    n,
                  ),
              }),
            }),
          ],
        });
      }
      var x = t(311016),
        j = t(692051),
        v = t(713804),
        C = t(992595);
      function E(e) {
        let {
            userBio: n,
            className: t,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: u = !0,
            textColor: c,
            userId: m,
          } = e,
          f = r.useMemo(
            () =>
              (0, x.A)(m)
                ? (0, l.jsx)(h, {})
                : null == n || "" === n
                  ? null
                  : (0, v.parseBioReact)(n),
            [m, n],
          );
        return null == f
          ? null
          : (0, l.jsx)("div", {
              className: a()(t, C.PT),
              children: (0, l.jsx)(s.E, {
                variant: "text-sm/normal",
                lineClamp: u ? d : void 0,
                color: void 0 !== c ? c : void 0,
                children: (0, l.jsx)(j.Y.Provider, {
                  value: {
                    disableAnimations: i && !o,
                    disableInteractions: !1,
                  },
                  children: f,
                }),
              }),
            });
      }
      function b(e) {
        let n = r.useId(),
          { userBio: t, userId: i } = e;
        return (0, x.A)(i) || (null != t && "" !== t)
          ? (0, l.jsxs)("section", {
              "aria-labelledby": n,
              children: [
                (0, l.jsx)(o.A, {
                  children: (0, l.jsx)(d.H, {
                    id: n,
                    children: p.intl.string(p.t.ZzAR2Y),
                  }),
                }),
                (0, l.jsx)(E, { ...e }),
              ],
            })
          : null;
      }
    },
    878555(e, n, t) {
      t.d(n, { c$: () => b, Ay: () => _, Ce: () => R, n2: () => y });
      var l = t(627968);
      t(64700);
      var r = t(503698),
        i = t.n(r),
        a = t(990078),
        s = t(834730),
        o = t(939249),
        d = t(140735),
        u = t(297413),
        c = t(705751);
      function m(e) {
        let n;
        return (
          e.isSystemUser() ? (n = c.nu.SYSTEM_DM) : e.bot && (n = c.nu.BOT), n
        );
      }
      var f = t(709066),
        p = t(609425),
        g = t(922301),
        h = t(368919),
        x = t(534400),
        j = t(518477),
        v = t(985018),
        C = t(874644);
      let E = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
      function b(e) {
        let {
            user: n,
            guildId: t,
            displayName: r,
            size: a = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            botTag: u,
            className: c,
          } = e,
          m = (0, p.A)({
            userId: n.id,
            guildId: t,
            pendingDisplayNameStyles: o,
          }),
          f = E[a];
        return null != m
          ? (0, l.jsx)(s.E, {
              variant: f,
              className: c,
              children: (0, l.jsx)(h.A, {
                userName: r,
                displayNameStyles: m,
                effectDisplayType: g.G.ANIMATED,
                textClassName: C.QC,
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
              className: i()(C.QC, C.O2, c),
              variant: f,
              children: [r, " ", u],
            });
      }
      function A(e) {
        let {
            user: n,
            guildId: t,
            displayName: r,
            trailing: a,
            size: s = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: u,
          } = e,
          c = m(n),
          p =
            null != c
              ? (0, l.jsx)(f.A, {
                  type: c,
                  verified: n.isVerifiedBot(),
                  className: C.AO,
                })
              : null,
          g = (0, l.jsx)(b, {
            user: n,
            guildId: t,
            displayName: r,
            size: s,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != u,
            botTag: p,
          });
        return (0, l.jsxs)("div", {
          className: i()(C.K$, "lg" === s && C.lg),
          children: [
            null != u
              ? (0, l.jsx)(o.D, { onClick: u, className: C.vk, children: g })
              : g,
            null != a &&
              !1 !== a &&
              (0, l.jsx)("div", { className: C.MU, children: a }),
          ],
        });
      }
      function y(e) {
        let { pronouns: n, className: t } = e;
        return (0, l.jsxs)(s.E, {
          className: i()(C.hI, t),
          variant: "text-sm/medium",
          color: "text-strong",
          children: [
            (0, l.jsx)(d.A, {
              tag: "span",
              children: v.intl.formatToPlainString(v.t["DRI+T7"], {
                pronouns: n,
              }),
            }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: n }),
          ],
        });
      }
      function R() {
        return (0, l.jsx)("div", { "aria-hidden": "true", className: C.SC });
      }
      function k(e) {
        let {
            user: n,
            usernameIcon: t,
            onClickUsername: r,
            pronouns: s,
            primaryGuild: d,
            trailing: c,
            onClose: f,
          } = e,
          p = null != s && s.length > 0,
          g = m(n),
          h = n.isProvisional
            ? null
            : (0, l.jsx)(u.A, {
                user: n,
                usernameIcon: t,
                forceUsername: !0,
                className: C.a1,
                usernameClass: C.eb,
                discriminatorClass: C.sw,
                hideBotTag: !0,
              });
        return (0, l.jsxs)("div", {
          className: i()(C.AK, { [C.j6]: p, [C.w2]: null != g }),
          children: [
            null != h && null != r
              ? (0, l.jsx)(o.D, { onClick: r, className: C.vk, children: h })
              : h,
            p &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(R, {}),
                  (0, l.jsx)(a.m, {
                    asContainer: !0,
                    text: v.intl.string(v.t.GI2A8C),
                    delay: j.In,
                    ariaHidden: !0,
                    children: (0, l.jsx)(y, { pronouns: s }),
                  }),
                ],
              }),
            (0, l.jsx)(x.Ay, {
              primaryGuild: d,
              userId: n.id,
              onClose: f,
              containerClassName: C.L4,
              className: C.Mp,
            }),
            c,
          ],
        });
      }
      function _(e) {
        let {
          user: n,
          guildId: t,
          className: r,
          onClickName: i,
          displayName: a,
          displayNameSize: s,
          pendingDisplayNameStyles: o,
          displayNameTrailing: d,
          usernameIcon: u,
          pronouns: c,
          primaryGuild: m,
          trailing: f,
          onClose: p,
        } = e;
        return (0, l.jsxs)("div", {
          className: r,
          children: [
            (0, l.jsx)(A, {
              user: n,
              guildId: t,
              displayName: a,
              size: s,
              pendingDisplayNameStyles: o,
              onClickDisplayName: i,
              trailing: d,
            }),
            (0, l.jsx)(k, {
              user: n,
              usernameIcon: u,
              pronouns: c,
              primaryGuild: m,
              onClickUsername: i,
              onClose: p,
              trailing: f,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=9662.9cb035c9c264cf36.js.map
