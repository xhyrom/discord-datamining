(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96536"],
  {
    24217: function (e) {
      e.exports = function (e) {
        for (
          var t = -1, r = null == e ? 0 : e.length, a = 0, n = [];
          ++t < r;

        ) {
          var s = e[t];
          s && (n[a++] = s);
        }
        return n;
      };
    },
    493978: function (e) {
      "use strict";
      e.exports = "/assets/6c1ce510ab8ef068b662.png";
    },
    932135: function (e) {
      "use strict";
      e.exports = "/assets/a9c025b46314994a42cf.png";
    },
    450865: function (e) {
      "use strict";
      e.exports = "/assets/42cbf2766606a1bd5618.jpg";
    },
    458597: function (e) {
      "use strict";
      e.exports = "/assets/a68cf21df85d942d028b.png";
    },
    367815: function (e) {
      "use strict";
      e.exports = "/assets/43d49a94d4ce35f87386.png";
    },
    196798: function (e) {
      "use strict";
      e.exports = "/assets/d536495e147f4be53457.png";
    },
    660348: function (e) {
      "use strict";
      e.exports = "/assets/70b4295037d211b7a987.png";
    },
    872044: function (e) {
      "use strict";
      e.exports = "/assets/efb4197dc3fccc5893da.jpg";
    },
    671581: function (e) {
      "use strict";
      e.exports = "/assets/01d3cf69a6c01b9fe1fb.png";
    },
    830487: function (e) {
      "use strict";
      e.exports = "/assets/14bd3f6a0ae817a72184.png";
    },
    602476: function (e) {
      "use strict";
      e.exports = "/assets/b85f3db42c1e6579ce97.png";
    },
    933285: function (e) {
      "use strict";
      e.exports = "/assets/8c4e7c23e5748b1711ef.png";
    },
    982240: function (e) {
      "use strict";
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      "use strict";
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    83498: function (e) {
      "use strict";
      e.exports = "/assets/7abfe62516ec62fb48a2.jpg";
    },
    702486: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return l;
        },
      });
      var a = r(470079),
        n = r(772848),
        s = r(638730),
        i = r(626135);
      let o = (e, t, r, a) => {
          let {
            scrollTop: n = 0,
            scrollOffset: s = 0,
            scrollHeight: o = 0,
            scrollWidth: l = 0,
          } = a;
          if (o > 0) {
            let a = (n + s) / o;
            a > 0 &&
              i.default.track(e, {
                scroll_visible_percent: a,
                source: r,
                page_height: Math.round(o),
                page_width: Math.round(l),
                page_session_id: t,
              });
          }
        },
        l = (e, t) => {
          let r = a.useRef(null),
            i = a.useRef((0, n.Z)()),
            l = (0, s.h)(o, 5e3, [], { trailing: !0 }),
            c = a.useCallback(() => {
              var a;
              let n =
                null === (a = r.current) || void 0 === a
                  ? void 0
                  : a.getScrollerNode();
              null != n &&
                l(e, i.current, t, {
                  scrollTop: n.scrollTop,
                  scrollOffset: n.offsetHeight,
                  scrollHeight: n.scrollHeight,
                  scrollWidth: n.scrollWidth,
                });
            }, [l, e, t]);
          return { scrollerRef: r, scrollHandler: c, sessionId: i.current };
        };
    },
    372047: function (e, t, r) {
      "use strict";
      let a = (0, r(818083).B)({
        kind: "user",
        id: "2024-06_shop_popular_picks",
        label: "Shop Popular Picks Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables popular picks row in shop",
            config: { enabled: !0 },
          },
        ],
      });
      t.Z = (e) => {
        let { location: t } = e;
        return a.useExperiment({ location: t });
      };
    },
    307043: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return i;
        },
      });
      var a = r(818083),
        n = r(987338);
      let s = (0, a.B)({
          kind: "user",
          id: "2024-08_shop_browse",
          label: "Collectibles Shop Browse Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Enable new shop layout", config: { enabled: !0 } },
          ],
          commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN,
        }),
        i = (e) => s.useExperiment({ location: e }).enabled;
    },
    664018: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return n;
        },
        E: function () {
          return o;
        },
      });
      var a,
        n,
        s = r(818083);
      ((a = n || (n = {}))[(a.CONTROL = 0)] = "CONTROL"),
        (a[(a.TRANSFORMATION = 1)] = "TRANSFORMATION"),
        (a[(a.NO_MOVEMENT = 2)] = "NO_MOVEMENT");
      let i = (0, s.B)({
          kind: "user",
          id: "2024-03_shop_card_hover_animation",
          label: "Shop card hover animation experiment",
          defaultConfig: { hoverVariant: 0 },
          treatments: [
            {
              id: 1,
              label: "Use CSS Transformation",
              config: { hoverVariant: 1 },
            },
            { id: 2, label: "No hover movement", config: { hoverVariant: 2 } },
          ],
        }),
        o = (e) => i.useExperiment({ location: e });
    },
    675052: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return l;
        },
      }),
        r(47120),
        r(653041);
      var a = r(470079),
        n = r(399606),
        s = r(1870),
        i = r(215023);
      let o = (e) => {
          let t = new Map();
          return (
            i.N.forEach((e, r) => {
              t.set(e, r);
            }),
            e.sort((e, r) => {
              var a, n;
              let s = null !== (a = t.get(e.skuId)) && void 0 !== a ? a : 1 / 0;
              return (
                s - (null !== (n = t.get(r.skuId)) && void 0 !== n ? n : 1 / 0)
              );
            })
          );
        },
        l = (e) => {
          let t = (0, n.e7)([s.Z], () => s.Z.purchases),
            { sortedPopularPickProducts: r } = (0, a.useMemo)(() => {
              let r = [],
                a = [],
                n = new Map();
              for (let s of e.values())
                s.products.forEach((e) => {
                  i.N.includes(e.skuId) &&
                    (t.get(e.skuId) ? r.push(e) : a.push(e), n.set(e.skuId, s));
                });
              let s = o(r);
              return { sortedPopularPickProducts: o(a).concat(s).slice(0, 12) };
            }, [e, t]);
          return { sortedPopularPickProducts: r };
        };
    },
    724994: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return l;
        },
        U: function () {
          return o;
        },
      });
      var a = r(24217),
        n = r.n(a),
        s = r(442837),
        i = r(1870);
      let o = (e, t) => {
          var r;
          let a = null != e.getPurchase(t.skuId),
            s = null !== (r = t.items) && void 0 !== r ? r : [],
            i = n()(s.map((t) => e.getPurchase(t.skuId)));
          return {
            isPurchased: a || (s.length > 0 && i.length === s.length),
            isPartiallyPurchased: i.length > 0 && i.length < s.length,
          };
        },
        l = (e) => (0, s.cj)([i.Z], () => o(i.Z, e));
    },
    298228: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return i;
        },
      }),
        r(47120),
        r(653041);
      var a = r(470079),
        n = r(399606),
        s = r(1870);
      let i = (e) => {
        let t = (0, n.e7)([s.Z], () => s.Z.purchases);
        return (0, a.useMemo)(() => {
          let r = [],
            a = [];
          for (let n of e.values())
            n.products.every((e) => !!t.get(e.skuId)) ? r.push(n) : a.push(n);
          return a.concat(r);
        }, [e, t]);
      };
    },
    937510: function (e, t, r) {
      "use strict";
      r.d(t, {
        l: function () {
          return u;
        },
      }),
        r(47120),
        r(653041);
      var a,
        n,
        s = r(470079),
        i = r(952639),
        o = r.n(i),
        l = r(399606),
        c = r(1870),
        d = r(724994);
      ((n = a || (a = {}))[(n.NOT_PURCHASED = 0)] = "NOT_PURCHASED"),
        (n[(n.PARTIAL_PURCHASED = 1)] = "PARTIAL_PURCHASED"),
        (n[(n.PURCHASED = 2)] = "PURCHASED");
      let u = (e) => {
        let t = (0, l.e7)([c.Z], () => c.Z.purchases);
        return (0, s.useMemo)(() => {
          let t = [[], [], []];
          for (let r of e.values()) {
            let { isPurchased: e, isPartiallyPurchased: a } = (0, d.U)(c.Z, r);
            t[a ? 1 : e ? 2 : 0].push(r);
          }
          return o()(t);
        }, [t, e]);
      };
    },
    309956: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return s;
        },
      }),
        r(47120);
      var a = r(470079),
        n = r(215023);
      let s = (e, t) => {
        let [r, s] = a.useState(n.f7.HIDDEN),
          [i, o] = a.useState(n.f7.HIDDEN);
        a.useEffect(() => {
          s(e ? n.f7.VISIBLE : n.f7.HIDDEN), o(e ? n.f7.HIDDEN : n.f7.VISIBLE);
        }, [e]);
        let l = (e) => new Promise((t) => setTimeout(t, e)),
          c = a.useCallback(
            async (e) => {
              e && (s(n.f7.OUT), await l(1.1 * n.lb)),
                e && o(n.f7.IN),
                s(n.f7.HIDDEN),
                null != t.current && t.current.scrollTo({ to: 0 }),
                o(n.f7.VISIBLE);
            },
            [t],
          );
        return {
          feedState: r,
          catalogState: i,
          transitionToCatalog: c,
          transitionToFeed: a.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }),
              o(n.f7.HIDDEN),
              s(n.f7.VISIBLE);
          }, [t]),
        };
      };
    },
    390698: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return c;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(120356),
        s = r.n(n),
        i = r(481060),
        o = r(689938),
        l = r(613616);
      let c = (e) => {
        let { className: t, isPartiallyPurchased: r } = e;
        return r
          ? (0, a.jsx)(i.Tooltip, {
              tooltipClassName: l.partiallyOwnedDisclaimer,
              position: "top",
              align: "left",
              text: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
              children: (e) =>
                (0, a.jsxs)("div", {
                  className: s()(l.partialOwnStateContainer, t),
                  ...e,
                  children: [
                    (0, a.jsx)("span", {
                      className: l.iconWrapper,
                      children: (0, a.jsx)(i.CircleInformationIcon, {
                        size: "md",
                        color: "currentColor",
                        className: l.infoIcon,
                      }),
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: "text-md/semibold",
                      children: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED,
                    }),
                  ],
                }),
            })
          : (0, a.jsx)(i.Text, {
              variant: "text-md/semibold",
              className: t,
              children: o.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
            });
      };
    },
    853748: function (e, t, r) {
      "use strict";
      r.d(t, {
        $: function () {
          return m;
        },
      }),
        r(653041);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(180081),
        l = r(873546),
        c = r(481060),
        d = r(774078),
        u = r(689938),
        f = r(409912),
        p = r(493978),
        C = r(932135);
      function _(e) {
        let { endDate: t } = e,
          { days: r, hours: n, minutes: s, seconds: i } = (0, d.Z)(t),
          o = (function (e, t, r, a) {
            let n = (e, t) =>
                "".concat(e.toString().padStart(2, "0")).concat(t),
              s = [];
            return (
              e > 0 && s.push(n(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)),
              (t > 0 || s.length > 0) &&
                s.push(n(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)),
              (r > 0 || s.length > 0) &&
                s.push(n(r, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)),
              s.push(n(a, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)),
              s.join(":")
            );
          })(r, n, s, i);
        return (0, a.jsx)(c.Text, {
          variant: "heading-md/medium",
          className: f.countdown,
          tag: "div",
          children: (0, a.jsx)("div", {
            role: "timer",
            "aria-relevant": "all",
            children: o,
          }),
        });
      }
      let m = n.memo(function (e) {
        let {
            unpublishedAt: t,
            isVisible: r,
            displayOptions: n,
            isFullScreen: s,
          } = e,
          d = (0, c.useSpring)({
            transform: "translateX(-50%) ".concat(
              r ? "translateY(-75%)" : "translateY(0%)",
            ),
            opacity: r ? 1 : 0,
            config: { tension: 120, friction: 12 },
          });
        return (0, a.jsxs)(o.animated.div, {
          className: i()([
            f.countDownWrapper,
            s && f.fullScreenWrapper,
            l.tq && f.mobileWrapper,
          ]),
          role: "status",
          style: { ...n.style, ...d },
          children: [
            (0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: f.countdownLabel,
              children: n.label(),
            }),
            null != n.iconSrc &&
              (0, a.jsx)("img", {
                src: n.iconSrc,
                className: f.countdownIcon,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, a.jsx)(_, { endDate: t }),
            (0, a.jsx)("img", {
              src: p,
              className: i()(f.sparkles, f.left),
              alt: "",
              "aria-hidden": !0,
            }),
            (0, a.jsx)("img", {
              src: C,
              className: i()(f.sparkles, f.right),
              alt: "",
              "aria-hidden": !0,
            }),
          ],
        });
      });
    },
    426171: function (e, t, r) {
      "use strict";
      r.d(t, {
        Kp: function () {
          return g;
        },
        u9: function () {
          return _;
        },
        xV: function () {
          return h;
        },
      }),
        r(757143),
        r(47120),
        r(653041);
      var a = r(470079),
        n = r(266067),
        s = r(442837),
        i = r(607070),
        o = r(100527),
        l = r(906732),
        c = r(328347),
        d = r(237031),
        u = r(981631);
      let f = "".concat("#").concat("itemSkuId", "="),
        p = new RegExp("^".concat(f, "(\\d+)$")),
        C = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
        _ = (e) => {
          let t = (0, n.TH)();
          a.useEffect(() => {
            if (null != e && C.includes(t.pathname))
              return (
                window.location.replace("".concat(f).concat(e.skuId)),
                () => {
                  window.location.hash.startsWith(f) &&
                    window.location.replace("#");
                }
              );
          }, []);
        },
        m = (e) => {
          let {
            categories: t,
            productSkuId: r,
            analyticsLocations: a,
            analyticsSource: n,
            initialItemCardRef: s,
            reducedMotion: i = !1,
          } = e;
          for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === r);
            if (null != t) {
              var o;
              null === (o = s.current) ||
                void 0 === o ||
                o.scrollIntoView({
                  behavior: i ? "instant" : "smooth",
                  block: "center",
                  inline: "center",
                });
              let r = setTimeout(() => {
                let r = document.getElementById("shop-item-".concat(t.skuId));
                r !== document.activeElement && (null == r || r.focus()),
                  (0, d.T)({
                    product: t,
                    category: e,
                    analyticsSource: n,
                    analyticsLocations: a,
                    returnRef: s,
                  });
              }, 750);
              return () => clearTimeout(r);
            }
          }
          return () => {};
        },
        g = (e) => {
          let {
              categories: t,
              isFetchingCategories: r,
              isLayer: d,
              initialItemCardRef: f,
            } = e,
            C = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
            _ = a.useRef(null),
            g = (0, n.TH)(),
            h =
              g.pathname === u.Z5c.COLLECTIBLES_SHOP
                ? o.Z.HOME_PAGE_SHOP_TAB
                : g.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                  ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN
                  : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, l.ZP)(h);
          a.useEffect(() => {
            if (d) return;
            let e = p.exec(g.hash);
            if (null != e) {
              let t = e[1];
              _.current = t;
            }
          }, []);
          let E = (0, s.e7)([c.Z], () => c.Z.initialProductSkuId);
          a.useEffect(() => {
            if (r) return;
            let e = null;
            if (
              (d && null != E && (e = E),
              !d && null != _.current && (e = _.current),
              null != e)
            ) {
              let r = [],
                a = setTimeout(() => {
                  let a = m({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: b,
                    analyticsSource: h,
                    initialItemCardRef: f,
                    reducedMotion: C,
                  });
                  r.push(a);
                }, 250);
              return (
                r.push(() => clearTimeout(a)),
                () => {
                  r.forEach((e) => e());
                }
              );
            }
          }, [d, b, h, t, r, E, f, C]);
        },
        h = (e) => {
          let t = a.useRef({}),
            r = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
            n = a.useCallback((e, r) => {
              t.current[e] = r;
            }, []);
          return {
            setCategoryRef: n,
            handleScrollToCategory: a.useCallback(
              (a) => {
                let n = t.current[a];
                null != n &&
                  (null == e ||
                    e.scrollIntoViewNode({
                      node: n,
                      padding: 12,
                      animate: !r,
                      shouldScrollToStart: !0,
                    }));
              },
              [e, r],
            ),
          };
        };
    },
    813083: function (e, t, r) {
      "use strict";
      r(627341);
      var a,
        n,
        s = r(735250);
      r(470079);
      var i = r(120356),
        o = r.n(i),
        l = r(278074),
        c = r(780384),
        d = r(481060),
        u = r(410030),
        f = r(884697),
        p = r(689938),
        C = r(112562);
      ((n = a || (a = {})).BANNER = "banner"),
        (n.MODAL = "modal"),
        (n.CARD = "card");
      t.Z = (e) => {
        let { category: t, display: r, className: a } = e,
          n = (0, u.ZP)();
        if (null == t.unpublishedAt) return null;
        let i = (0, f.OT)(t.unpublishedAt);
        function _(e) {
          return (0, s.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: o()((0, c.wj)(n) ? C.badgeDark : C.badgeLight, a),
          });
        }
        return (0, l.EQ)([r, i > 1])
          .with(["card", !0], () => null)
          .with(["banner", !0], () =>
            _(p.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({ days: i })),
          )
          .with(["modal", !0], () =>
            _(p.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: i })),
          )
          .otherwise(() => _(p.Z.Messages.COLLECTIBLES_LAST_DAY));
      };
    },
    838819: function (e, t, r) {
      "use strict";
      r.r(t), r(47120);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(180650),
        l = r(979554),
        c = r(399606),
        d = r(704215),
        u = r(952265),
        f = r(780384),
        p = r(481060),
        C = r(150063),
        _ = r(434650),
        m = r(100527),
        g = r(906732),
        h = r(702486),
        b = r(514361),
        E = r(605236),
        I = r(977395),
        x = r(214852),
        v = r(479446),
        T = r(981632),
        L = r(290026),
        S = r(210887),
        N = r(819640),
        O = r(594174),
        k = r(626135),
        B = r(74538),
        j = r(335131),
        P = r(597688),
        R = r(372047),
        Z = r(328347),
        A = r(307043),
        M = r(223143),
        y = r(675052),
        w = r(298228),
        H = r(937510),
        F = r(309956),
        D = r(853748),
        U = r(426171),
        G = r(823941),
        W = r(752053),
        V = r(963102),
        z = r(508498),
        Y = r(38900),
        K = r(709999),
        X = r(373113),
        $ = r(802022),
        q = r(399033),
        J = r(558117),
        Q = r(141594),
        ee = r(566564),
        et = r(531864),
        er = r(302800),
        ea = r(215023),
        en = r(981631),
        es = r(921944),
        ei = r(420212),
        eo = r(474936),
        el = r(689938),
        ec = r(53824);
      function ed(e) {
        let {
            products: t,
            handleShopCardMount: r,
            header: n,
            category: s,
            isPremiumUser: i,
            isGiftEasterEggEnabled: o,
            showMysteryCard: l = !1,
          } = e,
          d = (0, c.e7)([O.default], () => O.default.getCurrentUser());
        return null == d || 0 === t.length
          ? null
          : (0, a.jsxs)("div", {
              children: [
                null != n
                  ? (0, a.jsx)(p.Text, {
                      className: ec.itemTypeTitle,
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: n,
                    })
                  : (0, a.jsx)(p.Spacer, { size: 24 }),
                (0, a.jsx)("div", {
                  className: ec.cardsContainer,
                  children: t.map((e, t) =>
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(
                          K.Z,
                          {
                            onMount: r(e),
                            isPremiumUser: i,
                            category: s,
                            product: e,
                            user: d,
                            isGiftEasterEggEnabled: o,
                          },
                          e.skuId,
                        ),
                        1 === t && l && (0, a.jsx)($.Z, {}),
                      ],
                    }),
                  ),
                }),
              ],
            });
      }
      function eu(e) {
        let { category: t, initialItemCardRef: r, ...s } = e,
          i = (0, H.l)(t.products),
          l = (0, c.e7)([Z.Z], () => Z.Z.initialProductSkuId),
          d = n.useCallback(
            (e) => (t) => {
              e.skuId === l && (r.current = t.current);
            },
            [l, r],
          ),
          { revealed: u } = (0, J.R)("CollectiblesShop"),
          f = !u && t.skuId === o.T.STORM && i.length <= 15;
        return (0, a.jsx)(ed, {
          products: i,
          handleShopCardMount: d,
          category: t,
          showMysteryCard: f,
          ...s,
        });
      }
      function ef(e) {
        let {
            category: t,
            isPremiumUser: r,
            initialItemCardRef: s,
            isGiftEasterEggEnabled: o,
            setIsGiftEasterEggEnabled: l,
            showEasterEggToggle: c,
            isFullScreen: d,
          } = e,
          u = n.useRef(10 + 70 * Math.random()),
          [f, C] = n.useState(!1),
          m = (0, er.M7)(t.skuId),
          g = (0, _.O)(
            (e) => {
              C(e && null != m);
            },
            d ? 0.13 : 0.15,
          );
        return (0, a.jsxs)("div", {
          className: ec.categoryWrapper,
          ref: g,
          children: [
            c &&
              (0, a.jsx)(p.Clickable, {
                className: i()(ec.hiddenWumpus, {
                  [ec.hiddenWumpusEnabled]: o,
                }),
                onClick: () => l(!0),
                style: { left: "".concat(u.current, "%") },
                children: (0, a.jsx)(T.Z, {
                  idleAnimationState: v.SR.IDLE,
                  giftStyle: eo.Cj.BOX,
                }),
              }),
            (0, a.jsx)(G.Z, { category: t, hideLimitedTimeBadge: null != m }),
            (0, a.jsx)(eu, {
              category: t,
              initialItemCardRef: s,
              isPremiumUser: r,
              isGiftEasterEggEnabled: o,
            }),
            null != m &&
              null != t.unpublishedAt &&
              (0, a.jsx)(D.$, {
                unpublishedAt: t.unpublishedAt,
                isVisible: f,
                displayOptions: m,
                isFullScreen: d,
              }),
          ],
        });
      }
      t.default = function (e) {
        let { isFullScreen: t = !0 } = e;
        (0, x.z)(I.f);
        let r = (0, A.u)("CollectiblesShop"),
          { analyticsSource: s, analyticsLocations: o } = (0, c.cj)([Z.Z], () =>
            Z.Z.getAnalytics(),
          ),
          { analyticsLocations: _ } = (0, g.ZP)([...o, m.Z.COLLECTIBLES_SHOP]),
          {
            sessionId: v,
            scrollerRef: T,
            scrollHandler: H,
          } = (0, h._)(en.rMx.COLLECTIBLES_SHOP_SCROLLED, s),
          {
            feedState: D,
            catalogState: G,
            transitionToCatalog: K,
            transitionToFeed: $,
          } = (0, F.B)(r, T),
          [J, er] = n.useState(!1),
          [ed, eu] = n.useState(ea.IV),
          [ep, eC] = n.useState(),
          [e_, em] = n.useState(),
          eg = (0, c.e7)([N.Z], () =>
            N.Z.getLayers().includes(en.S9g.COLLECTIBLES_SHOP),
          ),
          eh = (0, u.f9)(),
          { onClose: eb } = (0, z.Db)(),
          eE = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
          eI = B.ZP.canUseCollectibles(eE),
          {
            categories: ex,
            isFetchingCategories: ev,
            error: eT,
            refreshCategories: eL,
          } = (0, M.Z)();
        (0, L.P)();
        let eS = (0, w.O)(ex),
          { sortedPopularPickProducts: eN } = (0, y.a)(ex),
          eO = n.useRef(null),
          [ek, eB] = n.useState(!1);
        (0, U.Kp)({
          categories: ex,
          isFetchingCategories: ev,
          isLayer: eg,
          initialItemCardRef: eO,
        }),
          n.useEffect(() => {
            if (D === ea.f7.VISIBLE || G === ea.f7.VISIBLE) {
              var e;
              let t;
              (t = r ? (G === ea.f7.VISIBLE ? e_ : s) : s),
                k.default.track(en.rMx.COLLECTIBLES_SHOP_VIEWED, {
                  location_stack: _,
                  source: t,
                  page_session_id: v,
                  page_type: D === ea.f7.VISIBLE ? "home" : "full",
                  category:
                    D === ea.f7.VISIBLE
                      ? void 0
                      : null === (e = P.Z.getCategory(ep)) || void 0 === e
                        ? void 0
                        : e.name,
                });
            }
            !eI &&
              k.default.track(en.rMx.PREMIUM_UPSELL_VIEWED, {
                type: eo.cd.COLLECTIBLES_SHOP,
                location_stack: _,
              });
          }, [r, eI, _, s, v, D, G, ep, eC, e_]);
        let { dismissCollectiblesShopTabNewBadge: ej } = (0, Q.Z)();
        n.useEffect(() => {
          if ((ej(), !(0, E.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, E.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
              dismissAction: es.L.AUTO_DISMISS,
              forceTrack: !0,
            });
        }, [ej]),
          n.useEffect(() => {
            !t && (0, C.Y)(en.Z5c.COLLECTIBLES_SHOP);
          }, [t]),
          n.useEffect(
            () => () => {
              (0, j.K$)({
                categories: [...ex.values()],
                itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT],
              });
            },
            [ex],
          ),
          n.useEffect(() => {
            if (!t || eg || eh) return;
            let e = (e) => {
              if (e.key === ei.mR.Escape) eb();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [t, eg, eh, eb]);
        let eP = n.useCallback(() => {
            eL();
          }, [eL]),
          { containerRef: eR } = (function () {
            let e = n.useRef(null),
              t = n.useRef(null);
            return (
              (0, p.useFocusLock)(e, { returnRef: t }),
              { containerRef: e, returnRef: t }
            );
          })(),
          { setCategoryRef: eZ, handleScrollToCategory: eA } = (0, U.xV)(
            T.current,
          ),
          { enabled: eM } = (0, R.Z)({ location: "CollectiblesShop" }),
          ey = (0, c.e7)([b.Z], () => b.Z.gradientPreset),
          ew = !(0, c.e7)([S.Z], () => (0, f.wj)(S.Z.theme)) && null == ey,
          { reducedMotion: eH } = n.useContext(
            p.AccessibilityPreferencesContext,
          ),
          eF = n.useCallback(
            async (e, r, a) => {
              let n = a && !t && !eH.enabled;
              em(e), eC(r), await K(n), r && eA(r);
            },
            [K, eA, t, eH],
          );
        return (0, a.jsxs)(g.Gt, {
          value: _,
          children: [
            (0, a.jsx)("div", {
              className: ec.shop,
              ref: t ? eR : void 0,
              children: (0, a.jsxs)(p.AdvancedScroller, {
                className: ec.shopScroll,
                ref: T,
                onScroll: () => {
                  if ((H(), null != T.current)) {
                    let e = T.current.getDistanceFromBottom();
                    ed >= ea.iA ? er(e < 20) : e <= 200 && eu(ed + ea.IV);
                  }
                },
                children: [
                  D !== ea.f7.HIDDEN &&
                    (0, a.jsxs)("div", {
                      className: i()(ec.shopViewWrapper, {
                        [ec.visible]: D === ea.f7.VISIBLE,
                        [ec.in]: D === ea.f7.IN,
                        [ec.out]: D === ea.f7.OUT,
                      }),
                      children: [
                        (0, a.jsx)(V.I, {
                          isFullScreen: t,
                          isLayer: eg,
                          onClose: eb,
                          isCatalogView: !1,
                          transparent: !0,
                        }),
                        (0, a.jsx)(ee.Z, {
                          handleTransition: eF,
                          numVisibleItems: ed,
                        }),
                      ],
                    }),
                  G !== ea.f7.HIDDEN &&
                    (0, a.jsxs)("div", {
                      className: i()(ec.shopViewWrapper, {
                        [ec.visible]: G === ea.f7.VISIBLE,
                        [ec.in]: G === ea.f7.IN,
                        [ec.out]: G === ea.f7.OUT,
                      }),
                      children: [
                        (0, a.jsx)(V.I, {
                          isFullScreen: t,
                          isLayer: eg,
                          onClose: eb,
                          isCatalogView: r,
                          transparent: r,
                          handleTransition: $,
                        }),
                        (0, a.jsx)("div", {
                          className: ec.pageWrapper,
                          children: (0, a.jsxs)("main", {
                            className: i()(ec.page, { [ec.pageFullscreen]: t }),
                            children: [
                              eM &&
                                (0, a.jsxs)("div", {
                                  className: i()(
                                    ec.popularPicksContainer,
                                    ew
                                      ? ec.defaultLightModeCustomGradient
                                      : ec.popularPicksGradient,
                                  ),
                                  children: [
                                    (0, a.jsx)(p.Text, {
                                      className: ec.popularPicksHeader,
                                      variant: "text-lg/medium",
                                      children:
                                        el.Z.Messages
                                          .COLLECTIBLES_POPULAR_PICKS,
                                    }),
                                    (0, a.jsx)(q.Z, { products: eN, user: eE }),
                                  ],
                                }),
                              ev
                                ? (0, a.jsx)(Y.Z, {})
                                : eT
                                  ? (0, a.jsx)(W.Z, { onRetry: eP })
                                  : (0, a.jsx)("div", {
                                      className: ec.categories,
                                      children: eS
                                        .filter(
                                          (e) =>
                                            null == e.unpublishedAt ||
                                            e.unpublishedAt > new Date(),
                                        )
                                        .filter((e) => {
                                          let { products: t } = e;
                                          return t.length > 0;
                                        })
                                        .map((e) =>
                                          (0, a.jsx)(
                                            "div",
                                            {
                                              ref: (t) => eZ(e.skuId, t),
                                              children: (0, a.jsx)(ef, {
                                                isPremiumUser: eI,
                                                category: e,
                                                initialItemCardRef: eO,
                                                setIsGiftEasterEggEnabled: eB,
                                                isGiftEasterEggEnabled: ek,
                                                isFullScreen: t,
                                              }),
                                            },
                                            e.skuId,
                                          ),
                                        ),
                                    }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            ek && (0, a.jsx)(X.Z, {}),
            !t &&
              G !== ea.f7.VISIBLE &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(et.Z, {
                    peaking: J,
                    transitioning: D === ea.f7.OUT,
                  }),
                  (0, a.jsx)(et.Z, {
                    style: { left: 1850 },
                    peaking: J,
                    transitioning: D === ea.f7.OUT,
                  }),
                ],
              }),
          ],
        });
      };
    },
    823941: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return N;
        },
        n: function () {
          return L;
        },
      });
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(180650),
        l = r(399606),
        c = r(481060),
        d = r(906732),
        u = r(963249),
        f = r(594174),
        p = r(754347),
        C = r(74538),
        _ = r(884697),
        m = r(624377),
        g = r(141011),
        h = r(813083),
        b = r(67938),
        E = r(372654),
        I = r(215023),
        x = r(474936),
        v = r(689938),
        T = r(291256);
      let L = (0, _.IC)(96),
        S = (e) => {
          let { category: t } = e,
            { analyticsLocations: r } = (0, d.ZP)(),
            s = n.useRef(null),
            i = (0, l.e7)([f.default], () => f.default.getCurrentUser());
          return C.ZP.canUseCollectibles(i)
            ? (0, a.jsx)(a.Fragment, { children: t.summary })
            : (0, a.jsx)(a.Fragment, {
                children:
                  v.Z.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format(
                    {
                      getPremium: (e) =>
                        (0, a.jsx)(c.Clickable, {
                          innerRef: s,
                          className: T.getPremiumHook,
                          onClick: () => {
                            (0, u.Z)({
                              subscriptionTier: x.Si.TIER_2,
                              analyticsLocations: r,
                              returnRef: s,
                            });
                          },
                          tag: "span",
                          children: (0, a.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            tag: "span",
                            children: e,
                          }),
                        }),
                    },
                  ),
              });
        };
      function N(e) {
        var t, r, n, s;
        let { category: l, className: d, hideLimitedTimeBadge: u = !1 } = e,
          { backgroundColors: f } = (0, m.Z)(l.styles),
          C = !!(null === (t = I.Ve[l.skuId]) || void 0 === t
            ? void 0
            : t.showDarkBannerText);
        return l.skuId === o.T.TIDE
          ? (0, a.jsx)(b.G, { category: l })
          : (0, a.jsxs)(g.Z, {
              asset: l.banner,
              className: i()(T.shopBanner, d),
              style:
                null != f
                  ? {
                      background: "".concat(
                        (0, E.nH)(f),
                        " border-box border-box",
                      ),
                      outlineColor: f.border.toHslString(),
                    }
                  : void 0,
              children: [
                (
                  null === (r = I.Ve[l.skuId]) || void 0 === r
                    ? void 0
                    : r.addAttributionLogo
                )
                  ? (0, a.jsxs)("div", {
                      className: T.discordLogo,
                      children: [
                        (0, a.jsx)(c.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          className: T.discordIcon,
                        }),
                        (0, a.jsx)(p.Z, { className: T.discordWordmark }),
                      ],
                    })
                  : (0, a.jsx)(c.Spacer, { size: 28 }),
                (
                  null === (n = I.Ve[l.skuId]) || void 0 === n
                    ? void 0
                    : n.addLogo
                )
                  ? (0, a.jsx)("img", {
                      className: T.categoryLogo,
                      src: (0, _.uV)(l.logo, { size: L }),
                      alt: l.name,
                      style: {
                        maxWidth:
                          null === (s = I.Ve[l.skuId]) || void 0 === s
                            ? void 0
                            : s.logoMaxWidth,
                      },
                    })
                  : (0, a.jsx)(c.Spacer, { size: 96 }),
                (0, a.jsx)(c.Text, {
                  className: i()(T.summary, { [T.blackSummary]: C }),
                  variant: "text-md/normal",
                  children:
                    l.skuId === o.T.DISXCORE
                      ? (0, a.jsx)(S, { category: l })
                      : l.summary,
                }),
                !u &&
                  (0, a.jsx)(h.Z, {
                    category: l,
                    className: T.limitedTimeBadge,
                    display: "banner",
                  }),
              ],
            });
      }
    },
    67938: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return h;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(120356),
        s = r.n(n),
        i = r(442837),
        o = r(481060),
        l = r(607070),
        c = r(372047),
        d = r(731782),
        u = r(196798),
        f = r(660348),
        p = r(872044),
        C = r(671581),
        _ = r(830487),
        m = r(602476);
      function g() {
        return (0, a.jsxs)("div", {
          className: d.attributionLogos,
          "aria-label": "Discord x Pocketpair",
          children: [
            (0, a.jsx)(o.ClydeIcon, {
              size: "custom",
              color: "currentColor",
              height: 22,
              "aria-hidden": !0,
            }),
            (0, a.jsx)(o.Text, {
              variant: "heading-sm/extrabold",
              tag: "div",
              children: "|",
            }),
            (0, a.jsx)("img", { src: f, alt: "", "aria-hidden": !0 }),
          ],
        });
      }
      function h(e) {
        let { category: t } = e,
          r = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
          { enabled: n } = (0, c.Z)({ location: "CollectiblesShop" });
        return (0, a.jsxs)("div", {
          className: s()(d.banner, { [d.noTopMargin]: n }),
          "aria-label": t.name,
          children: [
            (0, a.jsxs)("div", {
              className: d.mainContent,
              children: [
                (0, a.jsx)("img", {
                  src: p,
                  className: d.bannerImage,
                  alt: t.name,
                  "aria-hidden": !0,
                }),
                (0, a.jsx)(g, {}),
                (0, a.jsx)("img", {
                  src: C,
                  className: d.categoryLogo,
                  alt: t.name,
                  "aria-hidden": !0,
                }),
                !r &&
                  (0, a.jsx)("img", {
                    src: u,
                    className: d.animatedLayer,
                    alt: "",
                    "aria-hidden": !0,
                  }),
                (0, a.jsx)(o.Text, {
                  className: d.summary,
                  variant: "text-md/normal",
                  children: t.summary,
                }),
              ],
            }),
            (0, a.jsx)("img", {
              src: m,
              className: s()(d.overflowImage, d.overflowRight),
              alt: "",
              "aria-hidden": !0,
            }),
            (0, a.jsx)("img", {
              src: _,
              className: s()(d.overflowImage, d.overflowLeft),
              alt: "",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
    752053: function (e, t, r) {
      "use strict";
      var a = r(735250);
      r(470079);
      var n = r(780384),
        s = r(481060),
        i = r(410030),
        o = r(689938),
        l = r(243709),
        c = r(982240),
        d = r(533854);
      t.Z = (e) => {
        let { onRetry: t } = e,
          r = (0, i.ZP)();
        return (0, a.jsxs)("div", {
          className: l.wrapper,
          children: [
            (0, a.jsx)("img", {
              className: l.__invalid_loadIssueImg,
              src: (0, n.wj)(r) ? c : d,
              alt: "",
            }),
            (0, a.jsx)(s.Heading, {
              className: l.heading1,
              variant: "heading-xl/semibold",
              children: o.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING,
            }),
            (0, a.jsx)(s.Text, {
              variant: "text-md/normal",
              children: o.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD,
            }),
            (0, a.jsx)(s.Button, {
              className: l.reload,
              size: s.Button.Sizes.MEDIUM,
              color: s.Button.Colors.BRAND,
              onClick: t,
              children: o.Z.Messages.ERRORS_RELOAD,
            }),
          ],
        });
      };
    },
    680942: function (e, t, r) {
      "use strict";
      var a = r(735250),
        n = r(470079),
        s = r(481060),
        i = r(727637),
        o = r(906732),
        l = r(241553),
        c = r(333867),
        d = r(884697),
        u = r(231338),
        f = r(689938),
        p = r(703909);
      let C = {
        dark: [
          { box: "#FFF19E", ribbon: "#FF484B" },
          { box: "#17B5E2", ribbon: "#FFFFFF" },
          { box: "#FFE1A6", ribbon: "#C29CFF" },
          { box: "#60DA81", ribbon: "#FFF597" },
          { box: "#E4578A", ribbon: "#BEC4FF" },
          { box: "#AFE0FC", ribbon: "#FF9356" },
          { box: "#DB6D6D", ribbon: "#67DA9C" },
        ],
        light: [
          { box: "#FFF19E", ribbon: "#FF484B" },
          { box: "#025D90", ribbon: "#70FFF8" },
          { box: "#C29CFF", ribbon: "#255FA3" },
          { box: "#6AC082", ribbon: "#DED052" },
          { box: "#AC448B", ribbon: "#4845B8" },
          { box: "#175B82", ribbon: "#F9D249" },
          { box: "#B54141", ribbon: "#026530" },
        ],
      };
      t.Z = (e) => {
        let {
            product: t,
            returnRef: r,
            onSuccess: _,
            tooltipDelay: m,
            isGiftEasterEggEnabled: g,
            disableCustomColor: h = !1,
          } = e,
          { analyticsLocations: b } = (0, o.ZP)(),
          E = n.useRef(null),
          I = (0, i.Z)(E),
          x = h ? u.BR.DARK : u.BR.LIGHT;
        return (0, d.x6)(t)
          ? null
          : (0, a.jsx)(s.Tooltip, {
              text: f.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
              delay: m,
              children: (e) =>
                (0, a.jsx)(s.Button, {
                  ...e,
                  buttonRef: E,
                  className: p.giftButton,
                  color: h ? s.ButtonColors.BRAND : s.ButtonColors.CUSTOM,
                  look: s.Button.Looks.FILLED,
                  size: s.ButtonSizes.ICON,
                  innerClassName: p.giftButtonInner,
                  "aria-label": f.Z.Messages.PREMIUM_GIFTING_BUTTON,
                  onClick: (e) => {
                    e.stopPropagation(),
                      (0, c.Z)({
                        skuId: t.skuId,
                        isGift: !0,
                        analyticsLocations: b,
                        returnRef: r,
                        onClose:
                          null != _
                            ? (e) => {
                                e && _();
                              }
                            : void 0,
                      });
                  },
                  children: g
                    ? (0, a.jsx)(l.e, {
                        hovered: I,
                        isContentDismissed: !0,
                        themeOverride: x,
                        boxColors: C,
                      })
                    : (0, a.jsx)(s.GiftIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                }),
            });
      };
    },
    963102: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return h;
        },
      });
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(442837),
        l = r(780384),
        c = r(481060),
        d = r(425493),
        u = r(410030),
        f = r(984370),
        p = r(594174),
        C = r(471731),
        _ = r(335131),
        m = r(689938),
        g = r(99065);
      function h(e) {
        let {
            isFullScreen: t,
            isLayer: r,
            onClose: s,
            isCatalogView: h,
            handleTransition: b,
            transparent: E,
          } = e,
          I = (0, u.ZP)(),
          x = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
          v =
            (null == x ? void 0 : x.isStaff()) ||
            (null == x ? void 0 : x.isStaffPersonal()) ||
            !1;
        return (0, a.jsx)(c.ThemeProvider, {
          theme: I,
          children: (e) =>
            (0, a.jsxs)(f.Z, {
              className: i()(e, g.headerBar, {
                [g.fullscreenHeaderBar]: t,
                [g.headerBarRegularBackground]: !E,
                [g.headerBarTransparentLightBackground]: E && !(0, l.wj)(I),
                [g.headerBarTransparentDarkBackground]: E && (0, l.wj)(I),
              }),
              transparent: E,
              toolbar: t || !v ? null : (0, a.jsx)(n.Fragment, {}),
              children: [
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    h &&
                      null != b &&
                      (0, a.jsx)(c.Clickable, {
                        onClick: b,
                        className: g.back,
                        "aria-label": m.Z.Messages.BACK,
                        children: (0, a.jsx)(c.ArrowLargeLeftIcon, {}),
                      }),
                    (0, a.jsx)(C.Z, {
                      color: E ? ((0, l.wj)(I) ? "white" : "black") : void 0,
                      className: g.discordLogo,
                    }),
                  ],
                }),
                (0, a.jsx)(f.Z.Title, {
                  children: m.Z.Messages.COLLECTIBLES_SHOP,
                }),
                h &&
                  (0, a.jsx)(f.Z.Title, {
                    className: g.shopAllHeader,
                    children: m.Z.Messages.COLLECTIBLES_SHOP_ALL,
                  }),
                t &&
                  (0, a.jsx)(d.Z, {
                    className: g.closeIcon,
                    closeAction: r ? _.DR : s,
                    keybind: "ESC",
                  }),
              ],
            }),
        });
      }
    },
    558060: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(120356),
        s = r.n(n),
        i = r(481060),
        o = r(884697),
        l = r(409116),
        c = r(200615),
        d = r(981631),
        u = r(689938),
        f = r(889540);
      function p(e) {
        let {
            product: t,
            isPremiumUser: r,
            discount: n,
            className: p,
            nitroUpsell: C = !1,
          } = e,
          _ = (0, o.ql)(t, d.tuJ.DEFAULT);
        if (null == _) return null;
        if (_.amount <= 0)
          return (0, a.jsx)("div", {
            className: s()(f.priceTagsContainer, p),
            children: (0, a.jsx)(l.F, { price: _ }),
          });
        let m = (0, o.ql)(t, d.tuJ.PREMIUM_TIER_2),
          g = !r && !(0, o.x6)(t),
          h = (0, o.x6)(t) && r ? { ..._, amount: n.original } : _;
        return (0, a.jsxs)("div", {
          className: s()(f.priceTagsContainer, p),
          children: [
            (0, a.jsx)(l.F, {
              price: h,
              discount: r ? o.f_ : n,
              className: s()(f.price, {
                [f.striked]: r,
                [f.dimmed]: r,
                [f.fullPrice]: g,
              }),
            }),
            null != m &&
              (0, a.jsx)(l.F, {
                price: m,
                discount: r ? n : o.f_,
                renderPrice: C
                  ? (e) =>
                      (0, a.jsx)(i.Text, {
                        variant: "text-xs/medium",
                        children:
                          u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format(
                            {
                              price: e,
                              subscribeNowHook: (e) =>
                                (0, a.jsx)(c.F, { text: e }),
                            },
                          ),
                      })
                  : g
                    ? (e) =>
                        u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                          price: e,
                        })
                    : void 0,
                className: s()(f.price, { [f.dimmed]: !r, [f.fullPrice]: g }),
                variant: r ? void 0 : "text-xs/semibold",
                icon: (0, a.jsx)(i.Tooltip, {
                  text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  children: (e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(i.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      ...t,
                      className: s()(f.premiumIcon, { [f.fullPrice]: g }),
                    });
                  },
                }),
              }),
          ],
        });
      }
    },
    409116: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return u;
        },
      }),
        r(757143);
      var a = r(735250);
      r(470079);
      var n = r(120356),
        s = r.n(n),
        i = r(481060),
        o = r(937615),
        l = r(884697),
        c = r(222541);
      let d = (e) => (e.length > 5 ? e.replace(/\.00$/, "") : e),
        u = (e) => {
          var t;
          let {
              price: { amount: r, currency: n },
              renderPrice: u,
              icon: f,
              className: p,
              discount: C = l.f_,
              variant: _ = "heading-md/semibold",
            } = e,
            m = d((0, o.T4)(r, n)),
            g =
              C !== l.f_ && C.discountPercentage >= 5
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      m,
                      (0, a.jsx)(i.Heading, {
                        variant: _,
                        color: "text-positive",
                        className: c.discount,
                        children: " (-".concat(C.discountPercentage, "%)"),
                      }),
                    ],
                  })
                : m;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(i.Heading, {
              variant: _,
              className: s()(c.container, p),
              children: [
                f,
                null !== (t = null == u ? void 0 : u(g)) && void 0 !== t
                  ? t
                  : g,
              ],
            }),
          });
        };
    },
    237031: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return i;
        },
        v: function () {
          return o;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(481060);
      let s = "collectibles shop product details modal",
        i = (e) => {
          let {
            product: t,
            category: i,
            analyticsSource: o,
            analyticsLocations: l,
            returnRef: c,
          } = e;
          (0, n.openModalLazy)(
            async () => {
              let { default: e } = await r.e("2026").then(r.bind(r, 702370));
              return (r) =>
                (0, a.jsx)(e, {
                  ...r,
                  product: t,
                  category: i,
                  analyticsSource: o,
                  analyticsLocations: l,
                  returnRef: c,
                });
            },
            { modalKey: s },
          );
        },
        o = () => {
          (0, n.closeModal)(s);
        };
    },
    508498: function (e, t, r) {
      "use strict";
      r.d(t, {
        Db: function () {
          return d;
        },
      }),
        r(610138),
        r(216116),
        r(78328),
        r(815648),
        r(47120);
      var a,
        n,
        s = r(470079),
        i = r(266067),
        o = r(37234),
        l = r(703656),
        c = r(981631);
      function d() {
        let { search: e } = (0, i.TH)(),
          t = (0, i.UO)(),
          r = s.useMemo(() => new URLSearchParams(e), [e]).get("source"),
          a = null != r ? parseInt(r, 10) : null;
        return {
          onClose: s.useCallback(() => {
            if (0 === a) {
              (0, l.op)(), (0, o.jN)(c.S9g.USER_SETTINGS);
              return;
            }
            if ((0, l.uv)()) {
              (0, l.op)();
              return;
            }
            (0, l.uL)(c.Z5c.APP);
          }, [a]),
          source: a,
          ...t,
        };
      }
      ((n = a || (a = {}))[(n.SETTINGS = 0)] = "SETTINGS"),
        (n[(n.CHANGELOG = 1)] = "CHANGELOG"),
        (n[(n.DM_LIST = 2)] = "DM_LIST");
    },
    38900: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return f;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(120356),
        s = r.n(n),
        i = r(53824),
        o = r(291256),
        l = r(801895),
        c = r(775409);
      let d = () => 4 * Math.random() + 8,
        u = [d(), d(), d()],
        f = () =>
          (0, a.jsx)("div", {
            className: s()(l.skeleton, c.shopCard),
            children: (0, a.jsxs)("div", {
              className: l.cardBody,
              children: [
                (0, a.jsx)("div", { className: l.cardAvatar }),
                (0, a.jsx)("div", { className: l.cardTitle }),
                (0, a.jsx)("div", { className: l.cardDescription }),
                (0, a.jsx)("div", { className: l.cardSummary }),
              ],
            }),
          });
      t.Z = () =>
        (0, a.jsx)("div", {
          className: i.skeletons,
          children: u.map((e) =>
            (0, a.jsxs)(
              "div",
              {
                className: i.cardsContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: s()(l.skeleton, o.shopBanner),
                    children: (0, a.jsx)("div", { className: l.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map((e) =>
                    (0, a.jsx)(f, {}, e),
                  ),
                ],
              },
              e,
            ),
          ),
        });
    },
    709999: function (e, t, r) {
      "use strict";
      r(47120), r(627341);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(512722),
        l = r.n(o),
        c = r(278074),
        d = r(873546),
        u = r(180650),
        f = r(979554),
        p = r(399606),
        C = r(663002),
        _ = r(481060),
        m = r(37234),
        g = r(727637),
        h = r(607070),
        b = r(100527),
        E = r(906732),
        I = r(1585),
        x = r(333867),
        v = r(197115),
        T = r(300284),
        L = r(876917),
        S = r(642619),
        N = r(210887),
        O = r(74538),
        k = r(335131),
        B = r(1870),
        j = r(884697),
        P = r(664018),
        R = r(890249),
        Z = r(635552),
        A = r(724994),
        M = r(390698),
        y = r(813083),
        w = r(680942),
        H = r(558060),
        F = r(237031),
        D = r(616066),
        U = r(216541),
        G = r(832149),
        W = r(474936),
        V = r(689938),
        z = r(775409);
      let Y = (e) => {
          let { children: t, onClick: r, ...n } = e;
          return (0, a.jsx)(_.Button, {
            fullWidth: !0,
            look: _.Button.Looks.FILLED,
            onClick: (e) => {
              e.stopPropagation(), r();
            },
            ...n,
            children: t,
          });
        },
        K = (e) => {
          let { className: t, ...r } = e;
          return (0, a.jsx)(_.Button, {
            color: _.ButtonColors.BRAND,
            look: _.Button.Looks.FILLED,
            size: _.ButtonSizes.ICON,
            className: i()(z.previewButton, t),
            innerClassName: z.previewButtonInner,
            "aria-label": V.Z.Messages.PREVIEW,
            ...r,
            children: (0, a.jsx)(_.EyeIcon, {
              size: "md",
              color: "currentColor",
            }),
          });
        };
      t.Z = function (e) {
        let {
            product: t,
            user: r,
            category: s,
            onMount: o,
            isGiftEasterEggEnabled: X,
            isPopularPicksRow: $,
            isInFeedView: q,
          } = e,
          { analyticsLocations: J } = (0, E.ZP)([
            ...($ ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []),
            ...(q ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []),
            b.Z.COLLECTIBLES_SHOP_CARD,
          ]),
          Q = n.useRef(null),
          ee = (0, g.Z)(Q),
          [et, er] = n.useState(!1),
          ea = ee || et,
          [en] = t.items,
          es = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
          ei = O.ZP.canUseCollectibles(r),
          eo = (0, j.XM)(t, ei, !1),
          el = n.useMemo(() => (0, j.BH)(t, ei), [t, ei]),
          ec = (0, j.G1)(t),
          ed = (0, j.rN)(t),
          { isPurchased: eu, isPartiallyPurchased: ef } = (0, A.L)(t),
          [ep, eC] = (0, p.Wu)([B.Z], () => [
            B.Z.isClaiming === t.skuId,
            null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId,
          ]),
          e_ = (0, p.e7)([N.Z], () => (0, C.wj)(N.Z.theme)),
          em = (0, R.m)("CollectiblesCollectedModal"),
          eg = (0, j.x6)(t) || em,
          eh = (0, j.Yq)(t.skuId),
          { hoverVariant: eb } = (0, P.E)("CollectiblesShopTallCard"),
          eE = s.skuId === u.T.STORM && "1268362891946627103" === t.skuId;
        n.useEffect(() => {
          let { current: e } = Q;
          if (null == e) return;
          let t = () => er(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []),
          n.useEffect(() => {
            null == o || o(Q);
          }, [o]);
        let eI = (0, T.Z)({ analyticsLocations: J }),
          ex = n.useRef(null),
          { handleUseNow: ev, isApplying: eT } = (0, Z.W)({ product: t }),
          eL = () => {
            if (
              ((0, m.xf)(),
              eI(),
              t.type === f.Z.AVATAR_DECORATION && null != en)
            ) {
              l()(
                en.type === t.type,
                "product type is equivlant to first item's check for avatar deco",
              ),
                (0, I.ps)({
                  initialSelectedDecoration: en,
                  analyticsLocations: J,
                });
              return;
            }
            t.type === f.Z.PROFILE_EFFECT &&
              (0, S.H)({
                initialSelectedEffectId: en.id,
                analyticsLocations: J,
              });
          },
          eS = (e) => (r) => {
            (ex.current = r.currentTarget),
              (0, F.T)({
                product: t,
                category: s,
                analyticsLocations: J,
                analyticsSource: e,
                returnRef: ex,
              });
          },
          eN = eS(b.Z.COLLECTIBLES_SHOP_CARD),
          eO = eS(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          ek = () =>
            (0, a.jsx)("div", {
              className: z.hoverUpsellContainer,
              children: (0, a.jsx)(v.Z, {
                fullWidth: !0,
                className: z.__invalid_premiumSubscribeButton,
                disabled: eC,
                onClick: (e) => e.stopPropagation(),
                buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: W.Si.TIER_2,
              }),
            }),
          eB = () =>
            eu || ef
              ? (0, a.jsx)(M.U, {
                  className: z.priceTag,
                  isPartiallyPurchased: ef,
                })
              : ec
                ? (0, a.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    className: z.priceTag,
                    children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                  })
                : (0, a.jsx)(H.Z, {
                    product: t,
                    discount: el,
                    isPremiumUser: ei,
                    className: z.priceTag,
                  }),
          ej = () =>
            ec || d.tq
              ? null
              : ed
                ? (0, a.jsx)(K, { onClick: eO })
                : (0, a.jsx)(w.Z, {
                    product: t,
                    returnRef: Q,
                    isGiftEasterEggEnabled: X,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          eP = () => {
            if (ec && !ei && !ed) return ek();
            let e = ec
              ? {
                  submitting: ep,
                  submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
                  submittingFinishedLabel:
                    V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                  onClick: async () => {
                    await (0, k.fK)(t.skuId),
                      (0, G.Z)({ product: t, analyticsLocations: J });
                  },
                }
              : {
                  onClick: () =>
                    (0, x.Z)({
                      skuId: t.skuId,
                      analyticsLocations: J,
                      returnRef: Q,
                    }),
                };
            return (0, a.jsxs)("div", {
              className: z.buttonsContainer,
              children: [
                ef
                  ? null
                  : eu
                    ? (0, a.jsx)(Y, {
                        disabled: eC,
                        onClick: eg ? ev : eL,
                        submitting: eT,
                        children: V.Z.Messages.COLLECTIBLES_USE_NOW,
                      })
                    : (0, a.jsx)(Y, {
                        disabled: eC,
                        className: z.purchaseButton,
                        ...e,
                        children: ec
                          ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                          : V.Z.Messages.COLLECTIBLES_PURCHASE.format({
                              price: eo,
                            }),
                      }),
                ej(),
              ],
            });
          };
        return (0, j.x6)(t) && null != el && el.discountPercentage < 0
          ? null
          : (0, a.jsx)(_.FocusRing, {
              children: (0, a.jsxs)(_.Clickable, {
                innerRef: Q,
                className: i()(e_ ? z.shopCardDark : z.shopCard, {
                  [z.partiallyOwned]: ef,
                  [z.shopCardAnimation]: !es && eb !== P.D.NO_MOVEMENT,
                  [e_ ? z.shopCardDarkHighlighted : z.shopCardHighlighted]: ea,
                  [z.mysteryShopCard]: eE,
                }),
                onBlur: () => er(!1),
                onClick: eN,
                id: "shop-item-".concat(t.skuId),
                children: [
                  ec &&
                    (0, a.jsx)(_.Tooltip, {
                      tooltipContentClassName: z.premiumWheelTooltipContent,
                      color: _.Tooltip.Colors.PRIMARY,
                      text: V.Z.Messages
                        .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                      children: (e) =>
                        (0, a.jsx)(_.TextBadge, {
                          ...e,
                          className: z.premiumWheelBadge,
                          text: (0, a.jsx)(_.NitroWheelIcon, {
                            size: "md",
                            color: "currentColor",
                            className: z.premiumWheel,
                          }),
                        }),
                    }),
                  (0, a.jsx)("div", {
                    className: z.preview,
                    children: (0, c.EQ)(t.type)
                      .with(f.Z.PROFILE_EFFECT, () =>
                        (0, a.jsx)("div", {
                          className: z.profileEffectShopPreview,
                          children: (0, a.jsx)(L.Z, {
                            isHovering: ea,
                            profileEffectId: en.id,
                            isPurchased: eu,
                            removeSetHeight: !0,
                          }),
                        }),
                      )
                      .with(
                        f.Z.AVATAR_DECORATION,
                        () => (
                          l()(
                            en.type === f.Z.AVATAR_DECORATION,
                            "ts-match already checked the type",
                          ),
                          (0, a.jsx)("div", {
                            className: i()(
                              z.avatarContainer,
                              eE && z.mysteryAvatarContainer,
                            ),
                            children: (0, a.jsx)(D.R, {
                              item: en,
                              user: r,
                              isPurchased: eu,
                              isHighlighted: ea,
                            }),
                          })
                        ),
                      )
                      .with(f.Z.BUNDLE, () =>
                        (0, a.jsx)(U.d, {
                          product: t,
                          user: r,
                          isPurchased: eu,
                          isHighlighted: ea,
                        }),
                      )
                      .otherwise(() => null),
                  }),
                  eu
                    ? (0, a.jsx)("div", {
                        className: z.checkmarkWrapper,
                        children: (0, a.jsx)(_.CheckmarkLargeBoldIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 38,
                          height: 38,
                          className: z.checkmark,
                        }),
                      })
                    : null,
                  (0, a.jsxs)("div", {
                    className: i()(z.cardText, {
                      [z.cardTextBlur]:
                        (null == en ? void 0 : en.type) === f.Z.PROFILE_EFFECT,
                    }),
                    children: [
                      (0, a.jsx)("div", {
                        className: i()(
                          z.cardBackground,
                          e_ ? z.darkCardBackground : z.lightCardBackground,
                          (null == en ? void 0 : en.type) === f.Z.PROFILE_EFFECT
                            ? z.cardLowOpacity
                            : null,
                        ),
                      }),
                      (0, a.jsx)(_.Text, {
                        variant: "text-lg/bold",
                        className: z.productName,
                        children: t.name,
                      }),
                      (0, a.jsxs)("div", {
                        className: z.detailsWrapper,
                        children: [
                          (0, a.jsx)("div", {
                            className: ef ? void 0 : z.innerBlur,
                            children: eB(),
                          }),
                          (0, a.jsx)("div", {
                            className: z.innerHover,
                            children: eP(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(y.Z, {
                    category: s,
                    className: z.limitedTimeBadge,
                    display: "card",
                  }),
                  eh &&
                    !ef &&
                    !eu &&
                    (0, a.jsx)(_.TextBadge, {
                      text: V.Z.Messages.NEW,
                      disableColor: !0,
                      className: z.newBadge,
                    }),
                ],
              }),
            });
      };
    },
    373113: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(29768);
      function s() {
        return (0, a.jsxs)("div", {
          className: n.__invalid_snowflakes,
          children: [
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
            (0, a.jsx)("div", { className: n.snowflake, children: "❅" }),
          ],
        });
      }
    },
    200615: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return d;
        },
      });
      var a = r(735250),
        n = r(470079),
        s = r(481060),
        i = r(906732),
        o = r(963249),
        l = r(474936),
        c = r(585367);
      let d = (e) => {
        let { text: t } = e,
          { analyticsLocations: r } = (0, i.ZP)(),
          d = n.useRef(null);
        return (0, a.jsx)(s.Clickable, {
          className: c.subscribeNow,
          innerRef: d,
          onClick: () => {
            (0, o.Z)({
              subscriptionTier: l.Si.TIER_2,
              analyticsLocations: r,
              returnRef: d,
            });
          },
          children: t,
        });
      };
    },
    802022: function (e, t, r) {
      "use strict";
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(399606),
        l = r(780384),
        c = r(481060),
        d = r(774078),
        u = r(727637),
        f = r(607070),
        p = r(210887),
        C = r(689938),
        _ = r(775409),
        m = r(636246),
        g = r(458597);
      t.Z = function () {
        let e = n.useRef(null),
          t = (0, u.Z)(e),
          r = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
          s = (0, o.e7)([p.Z], () => (0, l.wj)(p.Z.theme)),
          { days: h, hours: b } = (0, d.Z)(
            new Date("2024-08-23T08:15:00-07:00"),
          ),
          E = n.useMemo(() => {
            if (0 === h && 0 === b) return C.Z.Messages.COLLECTIBLES_QUEUING_UP;
            let e = ""
                .concat(h.toString().padStart(2, "0"))
                .concat(C.Z.Messages.COUNTDOWN_UNITS_DAYS),
              t = ""
                .concat(b.toString().padStart(2, "0"))
                .concat(C.Z.Messages.COUNTDOWN_UNITS_HOURS);
            return "".concat(e, ":").concat(t);
          }, [h, b]);
        return (0, a.jsxs)("div", {
          ref: e,
          className: i()(s ? _.shopCardDark : _.shopCard, m.notInteractive, {
            [_.shopCardAnimation]: !r,
            [s ? _.shopCardDarkHighlighted : _.shopCardHighlighted]: t,
          }),
          children: [
            (0, a.jsx)("div", {
              className: _.preview,
              children: (0, a.jsx)("div", {
                className: i()(_.avatarContainer, _.mysteryAvatarContainer),
                children: (0, a.jsx)("img", {
                  src: g,
                  className: m.spark,
                  alt: "",
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: _.cardText,
              children: [
                (0, a.jsx)("div", {
                  className: i()(
                    _.cardBackground,
                    s ? _.darkCardBackground : _.lightCardBackground,
                  ),
                }),
                (0, a.jsx)(c.Text, {
                  variant: "text-lg/bold",
                  className: m.productName,
                  children: C.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE,
                }),
              ],
            }),
            (0, a.jsx)(c.TextBadge, {
              text: E,
              disableColor: !0,
              className: _.newBadge,
            }),
          ],
        });
      };
    },
    399033: function (e, t, r) {
      "use strict";
      r(47120);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(180081),
        l = r(442837),
        c = r(481060),
        d = r(100527),
        u = r(906732),
        f = r(259580),
        p = r(597688),
        C = r(328347),
        _ = r(709999),
        m = r(305271),
        g = r(689938),
        h = r(178935);
      t.Z = (e) => {
        let { className: t, products: r, user: s } = e,
          [b, E] = n.useState(0),
          I = r.length,
          { analyticsLocations: x } = (0, l.cj)([C.Z], () =>
            C.Z.getAnalytics(),
          ),
          { analyticsLocations: v } = (0, u.ZP)([
            ...x,
            d.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL,
          ]),
          { trackPagination: T } = (0, m.X)(
            "collectibles_shop_popular_picks_carousel",
            v,
          ),
          L = n.useCallback((e) => ({ x: (e - b) * 100 }), [b]),
          [S, N] = (0, c.useSprings)(r.length, L);
        return (n.useEffect(() => {
          N(L);
        }, [N, L]),
        null == s || 0 === r.length)
          ? null
          : (0, a.jsx)("div", {
              className: t,
              children: (0, a.jsxs)("div", {
                className: h.cardContainer,
                children: [
                  (0, a.jsx)(c.Button, {
                    look: c.Button.Looks.FILLED,
                    color: c.Button.Colors.PRIMARY,
                    className: i()(h.caretButton, h.leftCaret),
                    onClick: () => {
                      E((e) => {
                        let t = e - 4;
                        return T(t / 4, b / 4), t;
                      });
                    },
                    disabled: b - 4 < 0,
                    "aria-label": g.Z.Messages.PAGINATION_PREVIOUS,
                    children: (0, a.jsx)(f.Z, {
                      direction: f.Z.Directions.LEFT,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: h.cardInnerContainer,
                    children: S.map((e, t) => {
                      let { x: n } = e,
                        i = p.Z.getCategoryForProduct(r[t].skuId);
                      if (null != i)
                        return (0, a.jsx)(
                          o.animated.div,
                          {
                            className: h.card,
                            style: {
                              transform:
                                null == n
                                  ? void 0
                                  : n.to((e) =>
                                      "translate3d(".concat(e, "%,0,0)"),
                                    ),
                            },
                            children: (0, a.jsx)(
                              _.Z,
                              {
                                product: r[t],
                                category: i,
                                user: s,
                                isPopularPicksRow: !0,
                              },
                              ""
                                .concat(r[t].name, "_")
                                .concat(t, "_perks_card"),
                            ),
                          },
                          "".concat(r[t].name, "_").concat(t, "_animated_div"),
                        );
                    }),
                  }),
                  (0, a.jsx)(c.Button, {
                    look: c.Button.Looks.FILLED,
                    color: c.Button.Colors.PRIMARY,
                    className: i()(h.caretButton, h.rightCaret),
                    onClick: () => {
                      E((e) => {
                        let t = e + 4;
                        return T(t / 4, b / 4), t;
                      });
                    },
                    disabled: b + 4 >= I,
                    "aria-label": g.Z.Messages.PAGINATION_NEXT,
                    children: (0, a.jsx)(f.Z, {
                      direction: f.Z.Directions.RIGHT,
                    }),
                  }),
                ],
              }),
            });
      };
    },
    305271: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return i;
        },
      });
      var a = r(470079),
        n = r(626135),
        s = r(981631);
      let i = (e, t) => {
        let r = a.useCallback(
          (r, a) =>
            n.default.track(s.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
              carousel_id: e,
              slide_id: null != a ? a : r.toString(),
              slide_index: r,
              location_stack: t,
            }),
          [e, t],
        );
        return {
          trackSlideView: r,
          trackPagination: a.useCallback(
            (r, a, i, o) =>
              n.default.track(s.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
                carousel_id: e,
                current_slide_index: a,
                next_slide_index: r,
                current_slide_id: o,
                next_slide_id: i,
                location_stack: t,
              }),
            [e, t],
          ),
        };
      };
    },
    558117: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return n;
        },
      });
      let a = (0, r(818083).B)({
          kind: "user",
          id: "2024-07_reveal_mystery_card",
          label: "Shop Reveal Mystery Card",
          defaultConfig: { revealed: !1 },
          treatments: [
            {
              id: 1,
              label: "Force reveal mystery card in shop",
              config: { revealed: !0 },
            },
          ],
        }),
        n = (e) => a.useExperiment({ location: e });
    },
    832149: function (e, t, r) {
      "use strict";
      var a = r(735250);
      r(470079);
      var n = r(481060);
      t.Z = (e) => {
        let { product: t, analyticsLocations: s } = e;
        (0, n.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            r.e("87624"),
            r.e("28072"),
          ]).then(r.bind(r, 331042));
          return (r) =>
            (0, a.jsx)(e, { product: t, analyticsLocations: s, ...r });
        });
      };
    },
    566564: function (e, t, r) {
      "use strict";
      r(47120);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(180650),
        l = r(442837),
        c = r(481060),
        d = r(594174),
        u = r(597688),
        f = r(1870),
        p = r(884697),
        C = r(223143),
        _ = r(823941),
        m = r(38900),
        g = r(709999),
        h = r(215023),
        b = r(689938),
        E = r(728097),
        I = r(367815),
        x = r(933285),
        v = r(83498);
      t.Z = (e) => {
        var t, r, s, T, L, S;
        let { handleTransition: N, numVisibleItems: O } = e,
          { isFetching: k } = (0, C.Z)(),
          B = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
          j = n.createRef(),
          P = (0, l.cj)([u.Z], () => ({
            feature: u.Z.getCategory(o.T.THE_VAULT),
          })),
          R = n.useMemo(
            () =>
              h.$O
                .map((e) => u.Z.getProduct(e))
                .filter((e) => null != e)
                .map((e) => ({
                  ...e,
                  category: u.Z.getCategoryForProduct(e.skuId),
                }))
                .filter((e) => null != e.category)
                .sort((e, t) => {
                  let r = !!f.Z.getPurchase(e.skuId),
                    a = !!f.Z.getPurchase(t.skuId);
                  return Number(r) - Number(a);
                })
                .slice(0, 4),
            [k],
          ),
          Z = n.useMemo(
            () =>
              h.yo
                .map((e) => u.Z.getProduct(e))
                .filter((e) => null != e)
                .map((e) => ({
                  ...e,
                  category: u.Z.getCategoryForProduct(e.skuId),
                }))
                .filter((e) => null != e.category)
                .sort((e, t) => {
                  let r = !!f.Z.getPurchase(e.skuId),
                    a = !!f.Z.getPurchase(t.skuId);
                  return Number(r) - Number(a);
                }),
            [k],
          );
        if (null == B) return null;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: E.shop,
            children: [
              (0, a.jsx)("div", {
                className: E.banner,
                children: (0, a.jsx)("div", {
                  className: E.bannerImage,
                  style: { backgroundImage: "url(".concat(v, ")") },
                }),
              }),
              (0, a.jsxs)("div", {
                className: i()(E.content, E.mainContent),
                children: [
                  (0, a.jsxs)("div", {
                    className: i()(E.heroHeaderContainer),
                    children: [
                      k
                        ? (0, a.jsx)("div", {
                            className: i()(
                              E.heroHeaderBadgeLogoSummaryContainer,
                            ),
                          })
                        : (0, a.jsxs)("div", {
                            className: i()(
                              E.heroHeaderBadgeLogoSummaryContainer,
                            ),
                            children: [
                              (null === (r = P.feature) || void 0 === r
                                ? void 0
                                : r.unpublishedAt) != null &&
                                (0, a.jsx)(c.TextBadge, {
                                  disableColor: !0,
                                  text: b.Z.Messages.LIMITED_TIME,
                                  className: E.limitedTimeBadge,
                                }),
                              (0, a.jsx)("img", {
                                className: E.heroHeaderLogo,
                                src: (0, p.uV)(
                                  null !==
                                    (S =
                                      null === (s = P.feature) || void 0 === s
                                        ? void 0
                                        : s.logo) && void 0 !== S
                                    ? S
                                    : "",
                                  { size: _.n },
                                ),
                                alt:
                                  null === (T = P.feature) || void 0 === T
                                    ? void 0
                                    : T.name,
                              }),
                              (0, a.jsx)(c.Text, {
                                color: "always-white",
                                variant: "text-md/normal",
                                children:
                                  null === (L = P.feature) || void 0 === L
                                    ? void 0
                                    : L.summary,
                              }),
                            ],
                          }),
                      (0, a.jsx)("div", {
                        className: E.heroHeaderButtonContainer,
                        children: (0, a.jsx)(c.Button, {
                          className: E.heroHeaderButton,
                          color: c.ButtonColors.WHITE,
                          onClick: () => N("shop latest category hero"),
                          children:
                            b.Z.Messages.COLLECTIBLES_SHOP_THE_VAULT_COLLECTION,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: i()(E.row, E.feed, E.feedSingleRow),
                    children: k
                      ? (0, a.jsx)(a.Fragment, {
                          children: [void 0, void 0, void 0, void 0].map(
                            (e, t) => (0, a.jsx)(m.K, {}, t),
                          ),
                        })
                      : (0, a.jsx)(a.Fragment, {
                          children: R.map((e) => {
                            if (null == e || null == e.category) return null;
                            let { category: t, ...r } = e;
                            return (0, a.jsx)(
                              g.Z,
                              {
                                product: r,
                                category: t,
                                user: B,
                                isInFeedView: !0,
                              },
                              null == e ? void 0 : e.skuId,
                            );
                          }),
                        }),
                  }),
                  (0, a.jsxs)("div", {
                    className: i()(
                      E.section,
                      E.col2,
                      E.featuredBlocksContainer,
                    ),
                    children: [
                      (0, a.jsxs)(c.Clickable, {
                        className: i()(E.featuredBlock),
                        style: { backgroundImage: "url(".concat(x, ")") },
                        onClick: () => N("shop marketing tile", o.T.DOJO),
                        children: [
                          (null === (t = u.Z.getCategory(o.T.DOJO)) ||
                          void 0 === t
                            ? void 0
                            : t.unpublishedAt) != null &&
                            (0, a.jsx)(c.TextBadge, {
                              disableColor: !0,
                              text: b.Z.Messages.LIMITED_TIME,
                              className: E.featuredBlockBadge,
                            }),
                          (0, a.jsx)(c.Button, {
                            className: E.featuredBlockButton,
                            color: c.ButtonColors.WHITE,
                            onClick: () => {},
                            children: b.Z.Messages.TAKE_ME_THERE,
                          }),
                        ],
                      }),
                      (0, a.jsxs)(c.Clickable, {
                        className: i()(E.featuredBlock),
                        style: { backgroundImage: "url(".concat(I, ")") },
                        onClick: () => N("shop marketing tile", o.T.ANIME_V2),
                        children: [
                          (0, a.jsx)(c.TextBadge, {
                            disableColor: !0,
                            text: b.Z.Messages.MOST_POPULAR,
                            className: E.featuredBlockBadge,
                          }),
                          (0, a.jsx)(c.Button, {
                            className: E.featuredBlockButton,
                            color: c.ButtonColors.WHITE,
                            onClick: () => {},
                            children: b.Z.Messages.TAKE_ME_THERE,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: i()(E.row, E.between, E.section),
                    children: [
                      (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        children: b.Z.Messages.COLLECTIBLES_POPULAR_PICKS,
                      }),
                      (0, a.jsxs)(c.Clickable, {
                        className: E.shopAll,
                        onClick: () => N("shop all top"),
                        children: [
                          (0, a.jsx)(c.ServerGridIcon, {}),
                          (0, a.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            children: b.Z.Messages.COLLECTIBLES_SHOP_ALL,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: E.feed,
                    ref: j,
                    children: k
                      ? (0, a.jsx)(a.Fragment, {
                          children: [...Array(12)].map((e, t) =>
                            (0, a.jsx)(m.K, {}, t + 1),
                          ),
                        })
                      : (0, a.jsx)(a.Fragment, {
                          children: Z.slice(0, O).map((e) => {
                            if (null == e || null == e.category) return null;
                            let { category: t, ...r } = e;
                            return (0, a.jsx)(
                              g.Z,
                              {
                                product: r,
                                category: t,
                                user: B,
                                isInFeedView: !0,
                              },
                              null == e ? void 0 : e.skuId,
                            );
                          }),
                        }),
                  }),
                  O >= h.iA &&
                    (0, a.jsxs)("div", {
                      className: E.endOfFeed,
                      children: [
                        (0, a.jsx)(c.Heading, {
                          variant: "heading-md/semibold",
                          children:
                            b.Z.Messages
                              .COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT,
                        }),
                        (0, a.jsx)(c.Button, {
                          className: E.endOfFeedButton,
                          onClick: () => {
                            N("shop all bottom", void 0, !0);
                          },
                          children: (0, a.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children:
                              b.Z.Messages
                                .COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    531864: function (e, t, r) {
      "use strict";
      r(47120);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(979554),
        l = r(876917),
        c = r(597688),
        d = r(616066),
        u = r(215023),
        f = r(843702);
      let p = { x: 160, y: 160 },
        C = [
          {
            left: 0,
            top: 20,
            rotation: -32,
            size: p,
            skuId: "1212569433839636530",
          },
          {
            left: 110,
            top: 48,
            rotation: -24,
            size: p,
            skuId: "1144308439720394944",
          },
          {
            left: 230,
            top: 12,
            rotation: 8,
            size: p,
            skuId: "1228251144065777765",
          },
          {
            left: 354,
            top: 44,
            rotation: -48,
            size: p,
            skuId: "1262491137394868308",
          },
          {
            left: 470,
            top: 52,
            rotation: 12,
            size: p,
            skuId: "1252404767737778217",
          },
          {
            left: 600,
            top: 28,
            rotation: -4,
            size: p,
            skuId: "1197344326133502032",
          },
          {
            left: 740,
            top: 12,
            rotation: -32,
            size: p,
            skuId: "1232071712695386162",
          },
          {
            left: 870,
            top: 40,
            rotation: -20,
            size: p,
            skuId: "1220513977683935373",
          },
          {
            left: 1010,
            top: 30,
            rotation: 15,
            size: p,
            skuId: "1144046002110738634",
          },
          {
            left: 1140,
            top: 52,
            rotation: -18,
            size: p,
            skuId: "1271174324375519273",
          },
          {
            left: 1270,
            top: 32,
            rotation: 25,
            size: p,
            skuId: "1237653964582031400",
          },
          {
            left: 1400,
            top: 33,
            rotation: -5,
            size: p,
            skuId: "1217625794382401577",
          },
        ];
      t.Z = (e) => {
        let { peaking: t, transitioning: r, style: s } = e,
          p = window.innerHeight,
          [_, m] = n.useState(!1),
          g = C.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
          });
        return (
          n.useEffect(() => {
            r &&
              setTimeout(() => {
                m(!0);
              }, u.lb);
          }, [r]),
          (0, a.jsx)("div", {
            style: s,
            className: i()(f.jumbleWrapper, {
              [f.peaking]: t,
              [f.transitioned]: _,
            }),
            children: C.map((e, t) => {
              var n, s;
              let { top: i, left: c, rotation: C, size: _, skuId: m } = e,
                h = null === (n = g[t]) || void 0 === n ? void 0 : n.items[0],
                b = null === (s = g[t]) || void 0 === s ? void 0 : s.type,
                E = b === o.Z.AVATAR_DECORATION ? 384 : 512;
              return (0, a.jsxs)(
                "div",
                {
                  className: f.asset,
                  style: {
                    top: r ? -p - E : i,
                    left: r ? "".concat(c - 75 - 350 * Math.random()) : c,
                    transform: "rotate(".concat(C, "deg)"),
                    height: _.y,
                    width: _.x,
                    transitionDelay: "".concat(Math.random() / 3, "s"),
                    transitionDuration: "".concat(
                      u.lb - 200 * Math.random(),
                      "ms",
                    ),
                  },
                  children: [
                    null != h &&
                      b === o.Z.AVATAR_DECORATION &&
                      (0, a.jsx)(d.R, { item: h }),
                    null != h &&
                      b === o.Z.PROFILE_EFFECT &&
                      (0, a.jsx)(l.Z, {
                        profileEffectId: h.id,
                        isPurchased: !1,
                        isHovering: !0,
                      }),
                  ],
                },
                m + t,
              );
            }),
          })
        );
      };
    },
    977395: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return i;
        },
      });
      var a = r(91641),
        n = r(166350),
        s = r(987338);
      let i = new a.E(
        [n.NR, n.ZI, n.Ob, n.uc, n.m1],
        s.$P.COLLECTIBLES_SHOP_OPEN,
        { location: "collectibles shop open" },
      );
    },
    166350: function (e, t, r) {
      "use strict";
      r.d(t, {
        NR: function () {
          return s;
        },
        Ob: function () {
          return l;
        },
        ZI: function () {
          return i;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return o;
        },
      });
      var a = r(987170),
        n = r(987338);
      let s = (0, a.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_vanilla",
          label: "CTP collectibles shop open - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        i = (0, a.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_filters",
          label: "CTP collectibles shop open - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        o = (0, a.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_multiple_buckets",
          label: "CTP collectibles shop open - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        l = (0, a.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_everyone",
          label: "CTP collectibles shop open - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        c = (0, a.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_uneven_buckets",
          label: "CTP collectibles shop open - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: n.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    285888: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return g;
        },
        v: function () {
          return m;
        },
      }),
        r(47120);
      var a,
        n,
        s,
        i = r(735250),
        o = r(470079),
        l = r(120356),
        c = r.n(l),
        d = r(536640),
        u = r(481060),
        f = r(981631),
        p = r(689938),
        C = r(471753);
      function _(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      ((s = a || (a = {})).TOP = "top"), (s.BOTTOM = "bottom");
      let m = {
        container: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            cursor: r ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: r, menuIsOpen: a } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: r ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: a ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: r ? "not-allowed" : void 0,
            pointerEvents: r ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: r ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: r ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: r } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: r ? void 0 : "pointer",
            opacity: r ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: r ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, t) => {
          let { isSelected: r, isFocused: a } = t;
          return {
            ...e,
            ...(r
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : a
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class g extends (n = o.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: r,
              error: a,
              valueRenderer: n,
              optionRenderer: s,
              multiValueRenderer: o,
              options: l,
              value: f,
              autofocus: _,
              disabled: g,
              clearable: h,
              searchable: b,
              styleOverrides: E,
              isMulti: I,
              placeholder: x,
              filterOption: v,
              closeMenuOnSelect: T = !0,
              ...L
            } = this.props,
            S = { ...L };
          null != _ && (S.autoFocus = _),
            null != g && (S.isDisabled = g),
            null != h && (S.isClearable = h),
            null != b && (S.isSearchable = b);
          let N = { IndicatorSeparator: () => null };
          null != s &&
            (N.Option = (e) =>
              (0, i.jsx)(d.wx.Option, { ...e, children: s(e.data) })),
            null != n &&
              (N.SingleValue = (e) =>
                (0, i.jsx)(d.wx.SingleValue, { ...e, children: n(e.data) })),
            null != o && (N.MultiValue = (e) => o(e.data));
          if (I && Array.isArray(f)) {
            let t = {};
            l.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? l.find((e) => e.value === f) : null;
          return (0, i.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)("div", {
              className: c()(C.select, t, { [C.error]: null != a }),
              ref: this._containerRef,
              children: [
                (0, i.jsx)(d.ZP, {
                  ...S,
                  className: r,
                  ref: this._selectRef,
                  isMulti: I,
                  components: N,
                  options: l,
                  styles: null != E ? E : m,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: T,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != x ? x : p.Z.Messages.SELECT,
                  noOptionsMessage: () => p.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: v,
                }),
                null != a
                  ? (0, i.jsx)("div", {
                      className: C.errorMessage,
                      children: a,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_selectRef", o.createRef()),
            _(this, "_containerRef", o.createRef()),
            _(this, "state", { isFocused: !1, isOpen: !1 }),
            _(this, "handleFocus", (e) => {
              var t, r;
              this.setState({ isFocused: !0 }),
                null === (t = (r = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(r, e);
            }),
            _(this, "handleBlur", (e) => {
              var t, r;
              this.setState({ isFocused: !1 }),
                null === (t = (r = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(r, e);
            }),
            _(this, "handleKeyDown", (e) => {
              e.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            _(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            _(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      _(g, "MenuPlacements", a);
    },
    179118: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return j;
        },
      }),
        r(47120);
      var a = r(735250),
        n = r(470079),
        s = r(120356),
        i = r.n(s),
        o = r(392711),
        l = r.n(o),
        c = r(442837),
        d = r(481060),
        u = r(37234),
        f = r(194359),
        p = r(700582),
        C = r(925329),
        _ = r(479446),
        m = r(522489),
        g = r(93127),
        h = r(814443),
        b = r(590783),
        E = r(699516),
        I = r(246946),
        x = r(594174),
        v = r(572004),
        T = r(669079),
        L = r(74538),
        S = r(51144),
        N = r(981631),
        O = r(474936),
        k = r(689938),
        B = r(851212);
      function j(e) {
        let {
            giftCode: t,
            application: r,
            sku: s,
            subscriptionPlan: o,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: f,
            giftRecipient: _,
            giftMessageError: g,
            isSendingMessage: h,
          } = e,
          [E, x] = n.useState(d.CopyInput.Modes.DEFAULT),
          j = (0, c.e7)([I.Z], () => I.Z.enabled),
          R = f || (null != l && null != _),
          Z = (null == s ? void 0 : s.productLine) === N.POd.COLLECTIBLES,
          A = () => (null != o ? o.skuId : null != s ? s.id : null),
          M = () => {
            let e;
            let t = null != l && O.V4.includes(l);
            return null != g
              ? k.Z.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
              : null == o
                ? null
                : (e =
                    o.interval === O.rV.MONTH
                      ? R
                        ? t
                          ? k.Z.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                          : k.Z.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                        : k.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY
                      : R
                        ? t
                          ? k.Z.Messages
                              .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                          : k.Z.Messages
                              .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                        : k.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format(
                    {
                      skuName: (0, L.aq)(o.id),
                      intervalCount: o.intervalCount,
                    },
                  );
          },
          y = (e, t) => {
            null != s && (0, T.dM)(new b.Z({ code: t, maxUses: 1 }), s);
            try {
              (0, v.JG)(e), x(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
              x(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              x(d.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          w = () => {
            let e;
            if (null == t) return null;
            switch (E) {
              case d.CopyInput.Modes.SUCCESS:
                e = k.Z.Messages.BILLING_GIFT_COPIED;
                break;
              case d.CopyInput.Modes.ERROR:
                e = k.Z.Messages.FAILED;
                break;
              default:
                e = k.Z.Messages.COPY;
            }
            return (0, a.jsxs)("div", {
              className: B.giftCodeSection,
              children: [
                (0, a.jsx)(d.FormTitle, {
                  children:
                    k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != t &&
                  (0, a.jsx)(d.CopyInput, {
                    hideMessage: j ? k.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                    value: (0, T.Nz)(t),
                    mode: E,
                    text: e,
                    onCopy: (e) => y(e, t),
                    supportsCopy: v.wS,
                    className: B.__invalid_copyInput,
                    buttonColor: d.ButtonColors.LINK,
                    buttonLook: d.ButtonLooks.LINK,
                  }),
                (0, a.jsx)("div", {
                  className: B.subtext,
                  children:
                    k.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        return h
          ? (0, a.jsxs)("div", {
              className: B.confirmation,
              children: [
                null != r
                  ? (0, a.jsx)(C.Z, {
                      game: r,
                      className: B.__invalid_icon,
                      size: C.Z.Sizes.LARGE,
                      skuId: A(),
                    })
                  : null,
                (0, a.jsx)(d.Spinner, {
                  type: d.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className: B.confirmation,
              children: [
                null != r
                  ? (0, a.jsx)(C.Z, {
                      game: r,
                      className: B.__invalid_icon,
                      size: C.Z.Sizes.LARGE,
                      skuId: A(),
                    })
                  : null,
                (0, a.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  className: i()({
                    [B.header]: null == l && !Z,
                    [B.headerCustomGifting]: null != l && !Z,
                  }),
                  children:
                    null != _ || (f && null == g)
                      ? k.Z.Messages
                          .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                      : null != g
                        ? k.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                        : k.Z.Messages
                            .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
                }),
                (f && null != _ && null == g) || R
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(p.Z, {
                          user: _,
                          className: B.giftRecipient,
                          size: d.AvatarSizes.SIZE_80,
                        }),
                        (0, a.jsx)(d.Heading, {
                          className: B.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: S.ZP.getName(_),
                        }),
                        (0, a.jsxs)("div", {
                          className: B.giftRecipientTag,
                          children: [" ", S.ZP.getUserTag(_)],
                        }),
                        (0, a.jsx)("div", {
                          className: B.giftSentMessage,
                          children: M(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, T.MY)(_, Z),
                        { removeGiftRecipientUI: r } = m.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== T.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", {
                            className: B.blurb,
                            children: M(),
                          }),
                          !r &&
                            null == g &&
                            (0, a.jsx)(P, { giftCode: t, onClose: u }),
                          (0, a.jsx)("div", { className: B.divider }),
                          w(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let P = (e) => {
        let { giftCode: t, onClose: r } = e;
        n.useEffect(() => {
          f.Z.fetchRelationships(), (0, g.W)();
        }, []);
        let [s, i] = n.useState(),
          [o, C] = n.useState(!1),
          [m, b] = n.useState(!1),
          { userAffinities: I, isLoading: v } = (0, c.cj)([h.Z], () => ({
            userAffinities: h.Z.getUserAffinitiesUserIds(),
            isLoading: h.Z.getFetching(),
          })),
          T = Array.from(I.values()),
          L = (0, c.e7)([E.Z], () => E.Z.getFriendIDs()),
          N = l().difference(L, T),
          O = [...T, ...N],
          j = (0, c.e7)(
            [x.default],
            () => x.default.filter((e) => O.includes(e.id) && !e.bot),
            [O],
          );
        if (null == j || 0 === j.length) return null;
        let P = l().sortBy(j, (e) => O.indexOf(e.id));
        return (0, a.jsxs)("div", {
          className: B.giftRecipientSection,
          children: [
            (0, a.jsx)(d.FormTitle, {
              children:
                k.Z.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, a.jsxs)("div", {
              className: B.giftRecipient,
              children: [
                (0, a.jsx)(d.SearchableSelect, {
                  placeholder:
                    k.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: B.giftRecipientInputWrapper,
                  className: o ? B.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, a.jsx)(p.Z, {
                          user: e.value,
                          size: d.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    v
                      ? (0, a.jsx)(d.Spinner, {
                          type: d.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: s,
                  onChange: (e) => {
                    i(e), C(!1);
                  },
                  options: P.map((e) => ({
                    value: e,
                    label: "".concat(S.ZP.getUserTag(e)),
                  })),
                }),
                (0, a.jsx)(d.Button, {
                  disabled: null == s,
                  submitting: m,
                  className: B.sendToRecipientButton,
                  onClick: () => {
                    b(!0),
                      (0, _.YD)(s, t)
                        .then(() => {
                          r(), (0, u.Ou)();
                        })
                        .catch(() => {
                          C(!0), b(!1);
                        });
                  },
                  children:
                    k.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: o ? B.subtextError : B.subtext,
              children: o
                ? k.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : k.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    290026: function (e, t, r) {
      "use strict";
      r.d(t, {
        P: function () {
          return c;
        },
      }),
        r(47120);
      var a = r(470079),
        n = r(979554),
        s = r(442837),
        i = r(597688),
        o = r(365943),
        l = r(25251);
      let c = () => {
        let e = (0, s.e7)([i.Z], () => i.Z.products);
        a.useEffect(() => {
          let t = [...e.values()]
            .filter((e) => e.type === n.Z.PROFILE_EFFECT)
            .some((e) => {
              let t = e.items[0].id;
              return null != t && null == l.Z.getProfileEffectById(t);
            });
          (0, o.z)(t);
        }, [e]);
      };
    },
    471731: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(325767);
      function s(e) {
        let {
          width: t = 124,
          height: r = 24,
          color: s = "currentColor",
          foreground: i,
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.Z)(o),
          width: t,
          height: r,
          viewBox: "0 0 124 24",
          children: (0, a.jsxs)("g", {
            fill: s,
            className: i,
            children: [
              (0, a.jsx)("path", {
                d: "M26.2421 2.00996C24.2367 1.07098 22.0925 0.388543 19.8509 0C19.5755 0.498132 19.2539 1.16812 19.0322 1.70112C16.6492 1.34247 14.2881 1.34247 11.949 1.70112C11.7273 1.16812 11.3983 0.498132 11.1206 0C8.87648 0.388543 6.72984 1.07347 4.72453 2.01494C0.679785 8.132 -0.41668 14.0971 0.131553 19.9776C2.81424 21.9826 5.41408 23.2005 7.97006 23.9975C8.60114 23.1283 9.16399 22.2042 9.64888 21.2304C8.72541 20.8792 7.84093 20.4458 7.00517 19.9427C7.2269 19.7783 7.44376 19.6065 7.65331 19.4296C12.7507 21.8157 18.289 21.8157 23.3255 19.4296C23.5374 19.6065 23.7543 19.7783 23.9736 19.9427C23.1354 20.4483 22.2485 20.8817 21.325 21.2329C21.8099 22.2042 22.3703 23.1308 23.0038 24C25.5622 23.203 28.1645 21.9851 30.8472 19.9776C31.4905 13.1606 29.7483 7.25031 26.2421 2.00996ZM10.3433 16.3611C8.81313 16.3611 7.55828 14.9315 7.55828 13.1905C7.55828 11.4496 8.78632 10.0174 10.3433 10.0174C11.9003 10.0174 13.1551 11.4471 13.1283 13.1905C13.1308 14.9315 11.9003 16.3611 10.3433 16.3611ZM20.6355 16.3611C19.1053 16.3611 17.8504 14.9315 17.8504 13.1905C17.8504 11.4496 19.0785 10.0174 20.6355 10.0174C22.1924 10.0174 23.4473 11.4471 23.4205 13.1905C23.4205 14.9315 22.1924 16.3611 20.6355 16.3611Z",
              }),
              (0, a.jsx)("path", {
                d: "M41.6289 6.12256H48.2808C49.8841 6.12256 51.2388 6.3791 52.3499 6.88968C53.4586 7.40027 54.2894 8.1126 54.8401 9.02418C55.3908 9.93576 55.6685 10.9793 55.6685 12.1549C55.6685 13.3056 55.381 14.3492 54.806 15.2832C54.2309 16.2197 53.3562 16.9594 52.1793 17.5049C51.0025 18.0503 49.5454 18.3243 47.8032 18.3243H41.6289V6.12256ZM47.735 15.2234C48.8144 15.2234 49.6453 14.947 50.2252 14.3965C50.8051 13.8436 51.0951 13.0914 51.0951 12.1375C51.0951 11.2533 50.8368 10.5485 50.3202 10.0204C49.8037 9.49242 49.0215 9.22592 47.9762 9.22592H45.8954V15.2234H47.735Z",
              }),
              (0, a.jsx)("path", {
                d: "M65.6272 18.3094C64.7061 18.0654 63.8752 17.7117 63.137 17.2459V14.3518C63.6949 14.7926 64.443 15.1563 65.3811 15.4427C66.3191 15.7266 67.2256 15.8686 68.1027 15.8686C68.5121 15.8686 68.8215 15.8138 69.0311 15.7042C69.2406 15.5946 69.3454 15.4626 69.3454 15.3107C69.3454 15.1363 69.2894 14.9919 69.1748 14.8748C69.0603 14.7578 68.8386 14.6606 68.5096 14.5784L66.4629 14.1077C65.2909 13.8287 64.46 13.4427 63.9654 12.947C63.4708 12.4539 63.2247 11.8063 63.2247 11.0043C63.2247 10.3294 63.4391 9.74406 63.8728 9.24343C64.3041 8.74281 64.9181 8.35676 65.7149 8.08528C66.5116 7.8113 67.4424 7.67432 68.5121 7.67432C69.4672 7.67432 70.342 7.77892 71.1387 7.98814C71.9355 8.19736 72.5934 8.46386 73.1172 8.79013V11.5274C72.5812 11.2011 71.9672 10.9446 71.2654 10.7503C70.5661 10.5585 69.8473 10.4639 69.1066 10.4639C68.0369 10.4639 67.5033 10.6507 67.5033 11.0218C67.5033 11.1961 67.5862 11.3256 67.7519 11.4128C67.9176 11.5 68.2221 11.5896 68.6631 11.6843L70.3688 11.9981C71.4823 12.1949 72.3132 12.5411 72.859 13.0342C73.4047 13.5274 73.6777 14.2571 73.6777 15.2235C73.6777 16.282 73.2269 17.1214 72.3229 17.7441C71.4189 18.3667 70.1373 18.6781 68.4755 18.6781C67.4985 18.6756 66.5482 18.5535 65.6272 18.3094Z",
              }),
              (0, a.jsx)("path", {
                d: "M77.703 17.9432C76.726 17.455 75.9877 16.7925 75.4955 15.9557C75.0033 15.1188 74.7548 14.1773 74.7548 13.1312C74.7548 12.0852 75.0106 11.1487 75.5223 10.3243C76.034 9.49986 76.7844 8.85229 77.7737 8.38155C78.763 7.91082 79.9447 7.6767 81.3214 7.6767C83.027 7.6767 84.4426 8.04282 85.5683 8.77508V11.9656C85.1712 11.6867 84.7082 11.46 84.1795 11.2857C83.6508 11.1113 83.0855 11.0241 82.4812 11.0241C81.4237 11.0241 80.5977 11.2209 80.0007 11.6169C79.4038 12.0129 79.1041 12.5285 79.1041 13.1686C79.1041 13.7962 79.394 14.3093 79.9739 14.7128C80.5538 15.1138 81.3945 15.3156 82.4982 15.3156C83.066 15.3156 83.6264 15.2309 84.1795 15.064C84.7302 14.8946 85.2053 14.6879 85.6025 14.4438V17.5297C84.3525 18.2969 82.9027 18.6804 81.2531 18.6804C79.8643 18.6755 78.6801 18.4314 77.703 17.9432Z",
              }),
              (0, a.jsx)("path", {
                d: "M89.8227 17.9433C88.8383 17.4551 88.0878 16.7876 87.5713 15.9383C87.0547 15.089 86.794 14.1425 86.794 13.0965C86.794 12.0504 87.0523 11.1164 87.5713 10.297C88.0903 9.47754 88.8359 8.83495 89.8154 8.3692C90.7925 7.90345 91.9596 7.67181 93.3119 7.67181C94.6642 7.67181 95.8313 7.90345 96.8084 8.3692C97.7855 8.83495 98.5311 9.47256 99.0428 10.287C99.5544 11.1015 99.8103 12.0354 99.8103 13.094C99.8103 14.1401 99.5544 15.0865 99.0428 15.9358C98.5311 16.7851 97.783 17.4526 96.7987 17.9408C95.8143 18.429 94.652 18.6731 93.3095 18.6731C91.9669 18.6731 90.8046 18.4315 89.8227 17.9433ZM95.0053 14.8499C95.4195 14.4265 95.6291 13.8661 95.6291 13.1687C95.6291 12.4713 95.422 11.9159 95.0053 11.5049C94.5911 11.0915 94.0258 10.8848 93.3095 10.8848C92.5809 10.8848 92.0108 11.0915 91.5941 11.5049C91.1799 11.9184 90.9728 12.4713 90.9728 13.1687C90.9728 13.8661 91.1799 14.4265 91.5941 14.8499C92.0083 15.2733 92.5809 15.4875 93.3095 15.4875C94.0258 15.485 94.5911 15.2733 95.0053 14.8499Z",
              }),
              (0, a.jsx)("path", {
                d: "M110.059 8.31931V12.0852C109.625 11.7938 109.065 11.6493 108.37 11.6493C107.461 11.6493 106.76 11.9308 106.272 12.4937C105.782 13.0565 105.539 13.9333 105.539 15.1188V18.3268H101.36V8.12753H105.454V11.3704C105.68 10.1848 106.048 9.31059 106.555 8.74521C107.059 8.18232 107.712 7.90088 108.507 7.90088C109.108 7.90088 109.625 8.04036 110.059 8.31931Z",
              }),
              (0, a.jsx)("path", {
                d: "M123.942 5.77393V18.3268H119.763V16.0429C119.41 16.9022 118.874 17.5572 118.153 18.0056C117.432 18.4514 116.54 18.6755 115.482 18.6755C114.537 18.6755 113.713 18.4414 113.009 17.9707C112.305 17.5 111.762 16.8549 111.379 16.0354C110.999 15.216 110.806 14.2895 110.806 13.2534C110.794 12.1849 110.997 11.226 111.413 10.3767C111.827 9.52735 112.415 8.86483 113.17 8.38912C113.925 7.9134 114.788 7.6743 115.755 7.6743C117.746 7.6743 119.081 8.55848 119.763 10.3244V5.77393H123.942ZM119.14 14.7802C119.566 14.3567 119.778 13.8063 119.778 13.1338C119.778 12.4838 119.571 11.9533 119.157 11.5473C118.742 11.1413 118.175 10.9371 117.461 10.9371C116.757 10.9371 116.194 11.1438 115.772 11.5572C115.351 11.9707 115.141 12.5062 115.141 13.1687C115.141 13.8312 115.351 14.3717 115.772 14.7901C116.194 15.2085 116.749 15.4178 117.444 15.4178C118.148 15.4153 118.713 15.2036 119.14 14.7802Z",
              }),
              (0, a.jsx)("path", {
                d: "M59.1896 9.21341C60.3401 9.21341 61.2728 8.35701 61.2728 7.30058C61.2728 6.24416 60.3401 5.38776 59.1896 5.38776C58.039 5.38776 57.1063 6.24416 57.1063 7.30058C57.1063 8.35701 58.039 9.21341 59.1896 9.21341Z",
              }),
              (0, a.jsx)("path", {
                d: "M57.1044 10.531C58.3811 11.0939 59.9649 11.1188 61.2709 10.531V18.3816H57.1044V10.531Z",
              }),
            ],
          }),
        });
      }
    },
    4912: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = r(735250);
      r(470079);
      var n = r(325767);
      function s(e) {
        let {
          width: t = 14,
          height: r = 14,
          color: s = "currentColor",
          foreground: i,
          ...o
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.Z)(o),
          width: t,
          height: r,
          viewBox: "0 0 14 14",
          children: (0, a.jsx)("path", {
            className: i,
            fill: s,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    613616: function (e, t, r) {
      "use strict";
      e.exports = {
        partialOwnStateContainer: "partialOwnStateContainer_c27df5",
        partiallyOwnedDisclaimer: "partiallyOwnedDisclaimer_c27df5",
        iconWrapper: "iconWrapper_c27df5",
        infoIcon: "infoIcon_c27df5",
      };
    },
    924579: function (e, t, r) {
      "use strict";
      e.exports = { banner: "banner_da16fe" };
    },
    621e3: function (e, t, r) {
      "use strict";
      e.exports = {
        modalRoot: "modalRoot_a0e502",
        modalContent: "modalContent_a0e502",
        modalInner: "modalInner_a0e502",
        modalCloseButton: "modalCloseButton_a0e502",
        avatarDecoration: "avatarDecoration_a0e502",
        decorationBanner: "decorationBanner_a0e502",
        bannerContainer: "bannerContainer_a0e502",
        collectedInfoContainer: "collectedInfoContainer_a0e502",
        collectedTextContainer: "collectedTextContainer_a0e502",
        confettiCanvas: "confettiCanvas_a0e502",
        profileEffectShopPreview: "profileEffectShopPreview_a0e502",
        customConfetti: "customConfetti_a0e502",
        bundlePreview: "bundlePreview_a0e502",
        bundleProfileEffectCard: "bundleProfileEffectCard_a0e502",
        buttons: "buttons_a0e502",
        easterEggContainer: "easterEggContainer_a0e502",
      };
    },
    409912: function (e, t, r) {
      "use strict";
      e.exports = {
        countDownWrapper: "countDownWrapper_cd5584",
        fullScreenWrapper: "fullScreenWrapper_cd5584",
        mobileWrapper: "mobileWrapper_cd5584",
        countdownIcon: "countdownIcon_cd5584",
        countdownLabel: "countdownLabel_cd5584",
        countdown: "countdown_cd5584",
        sparkles: "sparkles_cd5584",
        left: "left_cd5584",
        right: "right_cd5584",
      };
    },
    653844: function (e, t, r) {
      "use strict";
      e.exports = {
        avatarDecoration: "avatarDecoration_b74403",
        profileEffectContainer: "profileEffectContainer_b74403",
        profileEffect: "profileEffect_b74403",
        profileEffectBackground: "profileEffectBackground_b74403",
        previewContainer: "previewContainer_b74403",
        previewContainerError: "previewContainerError_b74403",
        previewTextContainer: "previewTextContainer_b74403",
        previewTitleContainer: "previewTitleContainer_b74403",
        previewTitle: "previewTitle_b74403",
        recipientError: "recipientError_b74403",
        previewLink: "previewLink_b74403",
      };
    },
    112562: function (e, t, r) {
      "use strict";
      e.exports = {
        badgeDark: "badgeDark_e228ee",
        badgeLight: "badgeLight_e228ee",
      };
    },
    53824: function (e, t, r) {
      "use strict";
      e.exports = {
        shopViewWrapper: "shopViewWrapper_e77fa3",
        visible: "visible_e77fa3",
        out: "out_e77fa3",
        in: "in_e77fa3",
        pageWrapper: "pageWrapper_e77fa3",
        page: "page_e77fa3",
        pageFullscreen: "pageFullscreen_e77fa3",
        categoryWrapper: "categoryWrapper_e77fa3",
        cardsContainer: "cardsContainer_e77fa3",
        shop: "shop_e77fa3",
        shopScroll: "shopScroll_e77fa3",
        itemTypeTitle: "itemTypeTitle_e77fa3",
        popularPicksContainer: "popularPicksContainer_e77fa3",
        popularPicksGradient: "popularPicksGradient_e77fa3",
        defaultLightModeCustomGradient: "defaultLightModeCustomGradient_e77fa3",
        popularPicksHeader: "popularPicksHeader_e77fa3",
        hiddenWumpus: "hiddenWumpus_e77fa3",
        hiddenWumpusEnabled: "hiddenWumpusEnabled_e77fa3",
        categories: "categories_e77fa3",
        skeletons: "skeletons_e77fa3",
      };
    },
    291256: function (e, t, r) {
      "use strict";
      e.exports = {
        shopBanner: "shopBanner_be5025",
        categoryLogo: "categoryLogo_be5025",
        discordLogo: "discordLogo_be5025",
        discordIcon: "discordIcon_be5025",
        discordWordmark: "discordWordmark_be5025",
        summary: "summary_be5025",
        blackSummary: "blackSummary_be5025",
        limitedTimeBadge: "limitedTimeBadge_be5025",
        getPremiumHook: "getPremiumHook_be5025",
      };
    },
    731782: function (e, t, r) {
      "use strict";
      e.exports = {
        banner: "banner_d396b3",
        mainContent: "mainContent_d396b3",
        bannerImage: "bannerImage_d396b3",
        overflowImage: "overflowImage_d396b3",
        overflowLeft: "overflowLeft_d396b3",
        overflowRight: "overflowRight_d396b3",
        animatedLayer: "animatedLayer_d396b3",
        attributionLogos: "attributionLogos_d396b3",
        categoryLogo: "categoryLogo_d396b3",
        summary: "summary_d396b3",
        noTopMargin: "noTopMargin_d396b3",
      };
    },
    243709: function (e, t, r) {
      "use strict";
      e.exports = {
        wrapper: "wrapper_dd4901",
        heading1: "heading1_dd4901",
        reload: "reload_dd4901",
      };
    },
    703909: function (e, t, r) {
      "use strict";
      e.exports = {
        giftButton: "giftButton_e70ca4",
        giftButtonInner: "giftButtonInner_e70ca4",
      };
    },
    99065: function (e, t, r) {
      "use strict";
      e.exports = {
        headerBar: "headerBar_d8354c",
        headerBarRegularBackground: "headerBarRegularBackground_d8354c",
        headerBarTransparentDarkBackground:
          "headerBarTransparentDarkBackground_d8354c",
        headerBarTransparentLightBackground:
          "headerBarTransparentLightBackground_d8354c",
        fullscreenHeaderBar: "fullscreenHeaderBar_d8354c",
        shopAllHeader: "shopAllHeader_d8354c",
        discordLogo: "discordLogo_d8354c",
        closeIcon: "closeIcon_d8354c",
        back: "back_d8354c",
      };
    },
    889540: function (e, t, r) {
      "use strict";
      e.exports = {
        priceTagsContainer: "priceTagsContainer_c72deb",
        price: "price_c72deb",
        striked: "striked_c72deb",
        dimmed: "dimmed_c72deb",
        fullPrice: "fullPrice_c72deb",
        premiumIcon: "premiumIcon_c72deb",
      };
    },
    222541: function (e, t, r) {
      "use strict";
      e.exports = {
        container: "container_ea08b2",
        discount: "discount_ea08b2",
      };
    },
    801895: function (e, t, r) {
      "use strict";
      e.exports = {
        skeleton: "skeleton_b0ceed",
        bannerBody: "bannerBody_b0ceed",
        cardBody: "cardBody_b0ceed",
        cardAvatar: "cardAvatar_b0ceed",
        cardTitle: "cardTitle_b0ceed",
        cardDescription: "cardDescription_b0ceed",
        cardSummary: "cardSummary_b0ceed",
      };
    },
    775409: function (e, t, r) {
      "use strict";
      e.exports = {
        shopCard: "shopCard_c23530",
        shopCardDark: "shopCardDark_c23530 shopCard_c23530",
        shopCardHighlighted: "shopCardHighlighted_c23530",
        shopCardDarkHighlighted: "shopCardDarkHighlighted_c23530",
        mysteryShopCard: "mysteryShopCard_c23530",
        shopCardAnimation: "shopCardAnimation_c23530",
        avatarContainer: "avatarContainer_c23530",
        mysteryAvatarContainer: "mysteryAvatarContainer_c23530",
        cardText: "cardText_c23530",
        cardTextBlur: "cardTextBlur_c23530",
        cardBackground: "cardBackground_c23530",
        cardLowOpacity: "cardLowOpacity_c23530",
        darkCardBackground: "darkCardBackground_c23530",
        lightCardBackground: "lightCardBackground_c23530",
        priceTag: "priceTag_c23530",
        buttonsContainer: "buttonsContainer_c23530",
        previewButton: "previewButton_c23530",
        purchaseButton: "purchaseButton_c23530",
        previewButtonInner: "previewButtonInner_c23530",
        premiumWheelTooltipContent: "premiumWheelTooltipContent_c23530",
        premiumWheelBadge: "premiumWheelBadge_c23530",
        premiumWheel: "premiumWheel_c23530",
        detailsWrapper: "detailsWrapper_c23530",
        hoverUpsellContainer: "hoverUpsellContainer_c23530",
        innerHover: "innerHover_c23530",
        innerBlur: "innerBlur_c23530",
        checkmarkWrapper: "checkmarkWrapper_c23530",
        checkmark: "checkmark_c23530",
        limitedTimeBadge: "limitedTimeBadge_c23530",
        profileEffectShopPreview: "profileEffectShopPreview_c23530",
        productName: "productName_c23530",
        newBadge: "newBadge_c23530",
        partiallyOwned: "partiallyOwned_c23530",
        preview: "preview_c23530",
      };
    },
    29768: function (e, t, r) {
      "use strict";
      e.exports = { snowflake: "snowflake_a8ba4a" };
    },
    585367: function (e, t, r) {
      "use strict";
      e.exports = { subscribeNow: "subscribeNow_e2cadd" };
    },
    777381: function (e, t, r) {
      "use strict";
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    801242: function (e, t, r) {
      "use strict";
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    636246: function (e, t, r) {
      "use strict";
      e.exports = {
        spark: "spark_d4ea10",
        productName: "productName_d4ea10",
        notInteractive: "notInteractive_d4ea10",
      };
    },
    178935: function (e, t, r) {
      "use strict";
      e.exports = {
        cardContainer: "cardContainer_d3ddd1",
        cardInnerContainer: "cardInnerContainer_d3ddd1",
        card: "card_d3ddd1",
        caretButton: "caretButton_d3ddd1",
        rightCaret: "rightCaret_d3ddd1",
        leftCaret: "leftCaret_d3ddd1",
      };
    },
    728097: function (e, t, r) {
      "use strict";
      e.exports = {
        section: "section_ebba41",
        content: "content_ebba41",
        col2: "col2_ebba41",
        row: "row_ebba41",
        between: "between_ebba41",
        shop: "shop_ebba41",
        banner: "banner_ebba41",
        bannerImage: "bannerImage_ebba41",
        featuredBlocksContainer: "featuredBlocksContainer_ebba41",
        featuredBlock: "featuredBlock_ebba41",
        featuredBlockBadge: "featuredBlockBadge_ebba41",
        featuredBlockButton: "featuredBlockButton_ebba41",
        mainContent: "mainContent_ebba41",
        heroHeaderContainer: "heroHeaderContainer_ebba41",
        heroHeaderBadgeLogoSummaryContainer:
          "heroHeaderBadgeLogoSummaryContainer_ebba41",
        heroHeaderLogo: "heroHeaderLogo_ebba41",
        heroHeaderButtonContainer: "heroHeaderButtonContainer_ebba41",
        heroHeaderButton: "heroHeaderButton_ebba41",
        limitedTimeBadge: "limitedTimeBadge_ebba41",
        shopAll: "shopAll_ebba41",
        feed: "feed_ebba41",
        feedSingleRow: "feedSingleRow_ebba41",
        endOfFeed: "endOfFeed_ebba41",
        endOfFeedButton: "endOfFeedButton_ebba41",
      };
    },
    843702: function (e, t, r) {
      "use strict";
      e.exports = {
        jumbleWrapper: "jumbleWrapper_abcfcd",
        asset: "asset_abcfcd",
        peaking: "peaking_abcfcd",
        transitioned: "transitioned_abcfcd",
      };
    },
    471753: function (e, t, r) {
      "use strict";
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    748202: function (e, t, r) {
      "use strict";
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    128300: function (e, t, r) {
      "use strict";
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    21954: function (e, t, r) {
      "use strict";
      e.exports = {
        stepBody: "stepBody_dcb6d5",
        bodyColumnMiddle: "bodyColumnMiddle_dcb6d5",
        bodyColumnRight: "bodyColumnRight_dcb6d5",
        sendTo: "sendTo_dcb6d5",
        customGiftMessageWrapper: "customGiftMessageWrapper_dcb6d5",
        customGiftMessage: "customGiftMessage_dcb6d5",
        giftPreview: "giftPreview_dcb6d5",
      };
    },
    742242: function (e, t, r) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    851212: function (e, t, r) {
      "use strict";
      e.exports = {
        blurb: "blurb_c9a9bf",
        giftSentMessage: "giftSentMessage_c9a9bf",
        giftRecipient: "giftRecipient_c9a9bf",
        giftRecipientName: "giftRecipientName_c9a9bf",
        giftRecipientTag: "giftRecipientTag_c9a9bf",
        divider: "divider_c9a9bf",
        subtext: "subtext_c9a9bf",
        subtextError: "subtextError_c9a9bf subtext_c9a9bf",
        header: "header_c9a9bf",
        headerCustomGifting: "headerCustomGifting_c9a9bf",
        giftRecipientSection: "giftRecipientSection_c9a9bf",
        giftRecipientInputWrapper: "giftRecipientInputWrapper_c9a9bf",
        giftRecipientInputError: "giftRecipientInputError_c9a9bf",
        sendToRecipientButton: "sendToRecipientButton_c9a9bf",
        confirmation: "confirmation_c9a9bf",
        giftCodeSection: "giftCodeSection_c9a9bf",
      };
    },
    166352: function (e, t, r) {
      "use strict";
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
      };
    },
    642852: function (e, t, r) {
      "use strict";
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    900550: function (e, t, r) {
      "use strict";
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    762032: function (e, t, r) {
      "use strict";
      e.exports = {
        tier2Animation: "tier2Animation_bfbba7",
        panningAnimation: "panningAnimation_bfbba7",
        tier2Background: "tier2Background_bfbba7 panningAnimationInner_bfbba7",
        tier2Foreground: "tier2Foreground_bfbba7 panningAnimationInner_bfbba7",
        guildWrapper: "guildWrapper_bfbba7",
        guildBackground: "guildBackground_bfbba7",
        guildStar: "guildStar_bfbba7",
        sequencedAnimation: "sequencedAnimation_bfbba7",
      };
    },
    989287: function (e, t, r) {
      "use strict";
      e.exports = {
        headerBackground: "headerBackground_af10a6",
        tier2HeaderBackground:
          "tier2HeaderBackground_af10a6 headerBackground_af10a6",
        tier2HeaderBackgroundWinterTheme:
          "tier2HeaderBackgroundWinterTheme_af10a6 headerBackground_af10a6",
        snow: "snow_af10a6",
        headerTop: "headerTop_af10a6",
        headerIcon: "headerIcon_af10a6",
        nonTier2: "nonTier2_af10a6",
        price: "price_af10a6",
        closeButton: "closeButton_af10a6",
        trialBadgeContainer: "trialBadgeContainer_af10a6",
        trialOfferText: "trialOfferText_af10a6",
        tier0TrialOffer: "tier0TrialOffer_af10a6",
        trialBadgeSparkles: "trialBadgeSparkles_af10a6",
      };
    },
    614956: function (e, t, r) {
      "use strict";
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    808055: function (e, t, r) {
      "use strict";
      e.exports = {
        previewContainer: "previewContainer_c99d75",
        previewContainerSetHeight: "previewContainerSetHeight_c99d75",
        previewContainerAnimation: "previewContainerAnimation_c99d75",
        preview: "preview_c99d75",
        previewForCollected: "previewForCollected_c99d75 preview_c99d75",
        purchasedEffect: "purchasedEffect_c99d75",
      };
    },
  },
]);
//# sourceMappingURL=165e2994a0df00cd6408.js.map
