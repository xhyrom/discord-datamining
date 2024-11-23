(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18249"],
  {
    24217: function (e) {
      e.exports = function (e) {
        for (
          var t = -1, n = null == e ? 0 : e.length, r = 0, a = [];
          ++t < n;

        ) {
          var i = e[t];
          i && (a[r++] = i);
        }
        return a;
      };
    },
    557816: function (e, t, n) {
      var r = n(256098),
        a = n(106234);
      e.exports = function (e, t) {
        return e && e.length ? a(e, r(t, 2)) : [];
      };
    },
    450865: function (e) {
      "use strict";
      e.exports = "/assets/42cbf2766606a1bd5618.jpg";
    },
    458597: function (e) {
      "use strict";
      e.exports = "/assets/a68cf21df85d942d028b.png";
    },
    196315: function (e) {
      "use strict";
      e.exports = "/assets/2d6d2813d197eedb2ac7.png";
    },
    702486: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var r = n(192379),
        a = n(772848),
        i = n(638730),
        l = n(626135);
      let s = (e, t, n, r) => {
          let {
            scrollTop: a = 0,
            scrollOffset: i = 0,
            scrollHeight: s = 0,
            scrollWidth: o = 0,
          } = r;
          if (s > 0) {
            let r = (a + i) / s;
            r > 0 &&
              l.default.track(e, {
                scroll_visible_percent: r,
                source: n,
                page_height: Math.round(s),
                page_width: Math.round(o),
                page_session_id: t,
              });
          }
        },
        o = (e, t) => {
          let n = r.useRef(null),
            l = r.useRef((0, a.Z)()),
            o = (0, i.h)(s, 5e3, [], { trailing: !0 }),
            c = r.useCallback(() => {
              var r;
              let a =
                null === (r = n.current) || void 0 === r
                  ? void 0
                  : r.getScrollerNode();
              null != a &&
                o(e, l.current, t, {
                  scrollTop: a.scrollTop,
                  scrollOffset: a.offsetHeight,
                  scrollHeight: a.scrollHeight,
                  scrollWidth: a.scrollWidth,
                });
            }, [o, e, t]);
          return { scrollerRef: n, scrollHandler: c, sessionId: l.current };
        };
    },
    381585: function (e, t, n) {
      "use strict";
      n.d(t, {
        k0: function () {
          return s;
        },
        sp: function () {
          return l;
        },
      });
      var r = n(200651),
        a = n(192379);
      let i = a.createContext(null);
      function l() {
        return a.useContext(i);
      }
      function s(e) {
        let { newValue: t, children: n } = e,
          s = l(),
          o = a.useMemo(() => ({ ...s, ...t }), [s, t]);
        return (0, r.jsx)(i.Provider, { value: o, children: n });
      }
    },
    251068: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return a;
        },
      });
      let r = (0, n(818083).B)({
          kind: "user",
          id: "2024-09_shop_browse_backend",
          label: "Collectibles Shop Home Backend",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "use backend data", config: { enabled: !0 } },
          ],
        }),
        a = (e) => r.useExperiment({ location: e }).enabled;
    },
    307043: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return l;
        },
      });
      var r = n(818083),
        a = n(987338);
      let i = (0, r.B)({
          kind: "user",
          id: "2024-08_shop_browse",
          label: "Collectibles Shop Browse Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Enable new shop layout", config: { enabled: !0 } },
          ],
          commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN,
        }),
        l = (e) => i.useExperiment({ location: e }).enabled;
    },
    664018: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return a;
        },
        E: function () {
          return s;
        },
      });
      var r,
        a,
        i = n(818083);
      ((r = a || (a = {}))[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.TRANSFORMATION = 1)] = "TRANSFORMATION"),
        (r[(r.NO_MOVEMENT = 2)] = "NO_MOVEMENT");
      let l = (0, i.B)({
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
        s = (e) => l.useExperiment({ location: e });
    },
    819490: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return a;
        },
      });
      let r = (0, n(818083).B)({
          kind: "user",
          id: "2024-10_shop_tile_impression_logging",
          label: "Shop tile impressions logging",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable shop tile impression logging",
              config: { enabled: !0 },
            },
          ],
        }),
        a = (e) => r.useExperiment({ location: e }).enabled;
    },
    82892: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var r = n(512722),
        a = n.n(r),
        i = n(442837),
        l = n(594174);
      let s = () => {
        let e = (0, i.e7)([l.default], () => l.default.getCurrentUser());
        return a()(null != e, "user has signed in before accessing shop"), e;
      };
    },
    724994: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return c;
        },
        U: function () {
          return o;
        },
      });
      var r = n(24217),
        a = n.n(r),
        i = n(979554),
        l = n(442837),
        s = n(1870);
      let o = (e, t) => {
          var n, r, l, s, o;
          let c = null != e.getPurchase(t.skuId),
            d = null !== (n = t.items) && void 0 !== n ? n : [],
            u = a()(d.map((t) => e.getPurchase(t.skuId)));
          switch (null == t ? void 0 : t.type) {
            case i.Z.BUNDLE:
              return {
                isPurchased: c || (d.length > 0 && u.length === d.length),
                isPartiallyOwnedBundle: u.length > 0 && u.length < d.length,
                isPartiallyOwnedVariantsGroup: !1,
              };
            case i.Z.VARIANTS_GROUP:
              return {
                isPurchased:
                  null !==
                    (s =
                      null === (r = t.variants) || void 0 === r
                        ? void 0
                        : r.every((t) => null != e.getPurchase(t.skuId))) &&
                  void 0 !== s &&
                  s,
                isPartiallyOwnedBundle: !1,
                isPartiallyOwnedVariantsGroup:
                  null !==
                    (o =
                      null === (l = t.variants) || void 0 === l
                        ? void 0
                        : l.some((t) => null != e.getPurchase(t.skuId))) &&
                  void 0 !== o &&
                  o,
              };
            default:
              return {
                isPurchased: c,
                isPartiallyOwnedBundle: !1,
                isPartiallyOwnedVariantsGroup: !1,
              };
          }
        },
        c = (e) => (0, l.cj)([s.Z], () => o(s.Z, e));
    },
    298228: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return l;
        },
      }),
        n(47120),
        n(653041);
      var r = n(192379),
        a = n(399606),
        i = n(1870);
      let l = (e) => {
        let t = (0, a.e7)([i.Z], () => i.Z.purchases);
        return (0, r.useMemo)(() => {
          let n = [],
            r = [];
          for (let a of e.values())
            a.products.every((e) => !!t.get(e.skuId)) ? n.push(a) : r.push(a);
          return r.concat(n);
        }, [e, t]);
      };
    },
    937510: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return u;
        },
      }),
        n(47120),
        n(653041);
      var r,
        a,
        i = n(192379),
        l = n(952639),
        s = n.n(l),
        o = n(399606),
        c = n(1870),
        d = n(724994);
      ((a = r || (r = {}))[(a.NOT_PURCHASED = 0)] = "NOT_PURCHASED"),
        (a[(a.PARTIAL_OWNED_VARIANTS_GROUP = 1)] =
          "PARTIAL_OWNED_VARIANTS_GROUP"),
        (a[(a.PARTIAL_OWNED_BUNDLE = 2)] = "PARTIAL_OWNED_BUNDLE"),
        (a[(a.PURCHASED = 3)] = "PURCHASED");
      let u = (e) => {
        let t = (0, o.e7)([c.Z], () => c.Z.purchases);
        return (0, i.useMemo)(() => {
          let t = [[], [], [], []];
          for (let n of e.values()) {
            let {
              isPurchased: e,
              isPartiallyOwnedBundle: r,
              isPartiallyOwnedVariantsGroup: a,
            } = (0, d.U)(c.Z, n);
            t[r ? 2 : a ? 1 : e ? 3 : 0].push(n);
          }
          return s()(t);
        }, [t, e]);
      };
    },
    309956: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(215023);
      let i = (e, t) => {
        let [n, i] = r.useState(a.f7.HIDDEN),
          [l, s] = r.useState(a.f7.HIDDEN);
        r.useEffect(() => {
          i(e ? a.f7.VISIBLE : a.f7.HIDDEN), s(e ? a.f7.HIDDEN : a.f7.VISIBLE);
        }, [e]);
        let o = (e) => new Promise((t) => setTimeout(t, e)),
          c = r.useCallback(
            async (e) => {
              e && (i(a.f7.OUT), await o(1.1 * a.lb)),
                e && s(a.f7.IN),
                i(a.f7.HIDDEN),
                null != t.current && t.current.scrollTo({ to: 0 }),
                s(a.f7.VISIBLE);
            },
            [t],
          );
        return {
          feedState: n,
          catalogState: l,
          transitionToCatalog: c,
          transitionToFeed: r.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }),
              s(a.f7.HIDDEN),
              i(a.f7.VISIBLE);
          }, [t]),
        };
      };
    },
    297651: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return h;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(442837),
        i = n(626135),
        l = n(74538),
        s = n(381585),
        o = n(597688),
        c = n(884697),
        d = n(819490),
        u = n(82892),
        m = n(981631);
      function h(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "product",
          h = (0, s.sp)(),
          p = (0, a.e7)([o.Z], () => o.Z.getProduct(e)),
          f = (0, u.x)(),
          g = l.ZP.canUseCollectibles(f),
          C = r.useRef(null),
          [v, b] = r.useState(!1),
          [x, _] = r.useState(!1),
          k = (0, d.B)("shop_product_card");
        return (
          r.useEffect(
            () => (
              v && null === C.current
                ? (C.current = setTimeout(() => {
                    _(!0);
                  }, 1e3))
                : !v &&
                  (null !== C.current &&
                    (clearTimeout(C.current), (C.current = null)),
                  _(!1)),
              () => {
                null !== C.current &&
                  (clearTimeout(C.current), (C.current = null));
              }
            ),
            [v],
          ),
          r.useEffect(() => {
            if (x && k) {
              let r = null != p ? (0, c.Vw)(p, g, !1) : null,
                a = null != p ? (0, c.eu)(p, g, !1) : void 0;
              i.default.track(m.rMx.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: null == h ? void 0 : h.sessionId,
                sku_id: e,
                display_price: null == r ? void 0 : r.amount,
                display_price_currency:
                  null == r ? void 0 : r.currency.toString(),
                display_price_strikethrough: a,
                position: null == h ? void 0 : h.tilePosition,
                page_type: t,
                page_category: null == h ? void 0 : h.pageCategory,
                page_section: null == h ? void 0 : h.pageSection,
                type: n,
                category_position: null == h ? void 0 : h.categoryPosition,
              });
            }
          }, [
            null == h ? void 0 : h.sessionId,
            null == h ? void 0 : h.categoryPosition,
            null == h ? void 0 : h.pageCategory,
            null == h ? void 0 : h.pageSection,
            null == h ? void 0 : h.tilePosition,
            x,
            g,
            k,
            t,
            p,
            e,
            n,
          ]),
          {
            handleCardVisibilityChange: (e) => {
              b(e);
            },
          }
        );
      }
    },
    390698: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(481060),
        s = n(388032),
        o = n(74708);
      let c = (e) => {
        let { className: t, isPartiallyPurchased: n } = e;
        return n
          ? (0, r.jsx)(l.Tooltip, {
              tooltipClassName: o.partiallyOwnedDisclaimer,
              position: "top",
              align: "left",
              text: s.intl.string(s.t["2MCxfX"]),
              children: (e) =>
                (0, r.jsxs)("div", {
                  className: i()(o.partialOwnStateContainer, t),
                  ...e,
                  children: [
                    (0, r.jsx)("span", {
                      className: o.iconWrapper,
                      children: (0, r.jsx)(l.CircleInformationIcon, {
                        size: "md",
                        color: "currentColor",
                        className: o.infoIcon,
                      }),
                    }),
                    (0, r.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      children: s.intl.string(s.t["5b+JhY"]),
                    }),
                  ],
                }),
            })
          : (0, r.jsx)(l.Text, {
              variant: "text-md/semibold",
              className: t,
              children: s.intl.string(s.t["/bUsx8"]),
            });
      };
    },
    853748: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return g;
        },
      }),
        n(653041);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(100621),
        o = n(873546),
        c = n(481060),
        d = n(774078),
        u = n(388032),
        m = n(367797),
        h = n(781385),
        p = n(585616);
      function f(e) {
        let { endDate: t } = e,
          { days: n, hours: a, minutes: i, seconds: l } = (0, d.Z)(t),
          s = (function (e, t, n, r) {
            let a = (e, t) =>
                "".concat(e.toString().padStart(2, "0")).concat(t),
              i = [];
            return (
              e > 0 && i.push(a(e, u.intl.string(u.t.QJyuxc))),
              (t > 0 || i.length > 0) &&
                i.push(a(t, u.intl.string(u.t["1LyF1t"]))),
              (n > 0 || i.length > 0) &&
                i.push(a(n, u.intl.string(u.t.n7dksL))),
              i.push(a(r, u.intl.string(u.t["6m/6nJ"]))),
              i.join(":")
            );
          })(n, a, i, l);
        return (0, r.jsx)(c.Text, {
          variant: "heading-md/medium",
          className: m.countdown,
          tag: "div",
          children: (0, r.jsx)("div", {
            role: "timer",
            "aria-relevant": "all",
            children: s,
          }),
        });
      }
      let g = a.memo(function (e) {
        let {
            unpublishedAt: t,
            isVisible: n,
            displayOptions: a,
            isFullScreen: i,
          } = e,
          d = (0, c.useSpring)({
            transform: "translateX(-50%) ".concat(
              n ? "translateY(-75%)" : "translateY(0%)",
            ),
            opacity: n ? 1 : 0,
            config: { tension: 120, friction: 12 },
          });
        return (0, r.jsxs)(s.animated.div, {
          className: l()([
            m.countDownWrapper,
            i && m.fullScreenWrapper,
            o.tq && m.mobileWrapper,
          ]),
          role: "status",
          style: { ...a.style, ...d },
          children: [
            (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              className: m.countdownLabel,
              children: a.label(),
            }),
            null != a.iconSrc &&
              (0, r.jsx)("img", {
                src: a.iconSrc,
                className: m.countdownIcon,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, r.jsx)(f, { endDate: t }),
            (0, r.jsx)("img", {
              src: h.Z,
              className: l()(m.sparkles, m.left),
              alt: "",
              "aria-hidden": !0,
            }),
            (0, r.jsx)("img", {
              src: p.Z,
              className: l()(m.sparkles, m.right),
              alt: "",
              "aria-hidden": !0,
            }),
          ],
        });
      });
    },
    426171: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kp: function () {
          return C;
        },
        u9: function () {
          return f;
        },
        xV: function () {
          return v;
        },
      }),
        n(757143),
        n(47120),
        n(653041);
      var r = n(192379),
        a = n(512969),
        i = n(442837),
        l = n(607070),
        s = n(100527),
        o = n(906732),
        c = n(328347),
        d = n(237031),
        u = n(981631);
      let m = "".concat("#").concat("itemSkuId", "="),
        h = new RegExp("^".concat(m, "(\\d+)$")),
        p = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
        f = (e) => {
          let t = (0, a.TH)();
          r.useEffect(() => {
            if (null != e && p.includes(t.pathname))
              return (
                window.location.replace("".concat(m).concat(e.skuId)),
                () => {
                  window.location.hash.startsWith(m) &&
                    window.location.replace("#");
                }
              );
          }, []);
        },
        g = (e) => {
          let {
            categories: t,
            productSkuId: n,
            analyticsLocations: r,
            analyticsSource: a,
            initialItemCardRef: i,
            reducedMotion: l = !1,
          } = e;
          for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === n);
            if (null != t) {
              var s;
              null === (s = i.current) ||
                void 0 === s ||
                s.scrollIntoView({
                  behavior: l ? "instant" : "smooth",
                  block: "center",
                  inline: "center",
                });
              let n = setTimeout(() => {
                let n = document.getElementById("shop-item-".concat(t.skuId));
                n !== document.activeElement && (null == n || n.focus()),
                  (0, d.T)({
                    product: t,
                    category: e,
                    analyticsSource: a,
                    analyticsLocations: r,
                    returnRef: i,
                  });
              }, 750);
              return () => clearTimeout(n);
            }
          }
          return () => {};
        },
        C = (e) => {
          let {
              categories: t,
              isFetchingCategories: n,
              isLayer: d,
              initialItemCardRef: m,
            } = e,
            p = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
            f = r.useRef(null),
            C = (0, a.TH)(),
            v =
              C.pathname === u.Z5c.COLLECTIBLES_SHOP
                ? s.Z.HOME_PAGE_SHOP_TAB
                : C.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                  ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN
                  : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, o.ZP)(v);
          r.useEffect(() => {
            if (d) return;
            let e = h.exec(C.hash);
            if (null != e) {
              let t = e[1];
              f.current = t;
            }
          }, []);
          let x = (0, i.e7)([c.Z], () => c.Z.initialProductSkuId);
          r.useEffect(() => {
            if (n) return;
            let e = null;
            if (
              (d && null != x && (e = x),
              !d && null != f.current && (e = f.current),
              null != e)
            ) {
              let n = [],
                r = setTimeout(() => {
                  let r = g({
                    categories: t,
                    productSkuId: e,
                    analyticsLocations: b,
                    analyticsSource: v,
                    initialItemCardRef: m,
                    reducedMotion: p,
                  });
                  n.push(r);
                }, 250);
              return (
                n.push(() => clearTimeout(r)),
                () => {
                  n.forEach((e) => e());
                }
              );
            }
          }, [d, b, v, t, n, x, m, p]);
        },
        v = (e) => {
          let t = r.useRef({}),
            n = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
            a = r.useCallback((e, n) => {
              t.current[e] = n;
            }, []);
          return {
            setCategoryRef: a,
            handleScrollToCategory: r.useCallback(
              (r) => {
                let a = t.current[r];
                null != a &&
                  (null == e ||
                    e.scrollIntoViewNode({
                      node: a,
                      padding: 12,
                      animate: !n,
                      shouldScrollToStart: !0,
                    }));
              },
              [e, n],
            ),
          };
        };
    },
    813083: function (e, t, n) {
      "use strict";
      n(627341);
      var r,
        a,
        i = n(200651);
      n(192379);
      var l = n(120356),
        s = n.n(l),
        o = n(278074),
        c = n(780384),
        d = n(481060),
        u = n(410030),
        m = n(884697),
        h = n(388032),
        p = n(161386);
      ((a = r || (r = {})).BANNER = "banner"),
        (a.MODAL = "modal"),
        (a.CARD = "card");
      t.Z = (e) => {
        let { category: t, display: n, className: r } = e,
          a = (0, u.ZP)();
        if (null == t.unpublishedAt) return null;
        let l = (0, m.OT)(t.unpublishedAt);
        function f(e) {
          return (0, i.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: s()((0, c.wj)(a) ? p.badgeDark : p.badgeLight, r),
          });
        }
        return (0, o.EQ)([n, l > 1])
          .with(["card", !0], () => null)
          .with(["banner", !0], () =>
            f(h.intl.formatToPlainString(h.t["8gsP5O"], { days: l })),
          )
          .with(["modal", !0], () =>
            f(h.intl.formatToPlainString(h.t.Io7ozs, { days: l })),
          )
          .otherwise(() => f(h.intl.string(h.t.Bc13HB)));
      };
    },
    838819: function (e, t, n) {
      "use strict";
      n.r(t), n(47120);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(180650),
        o = n(979554),
        c = n(399606),
        d = n(704215),
        u = n(952265),
        m = n(481060),
        h = n(150063),
        p = n(434650),
        f = n(100527),
        g = n(906732),
        C = n(702486),
        v = n(605236),
        b = n(977395),
        x = n(214852),
        _ = n(479446),
        k = n(981632),
        I = n(290026),
        j = n(819640),
        S = n(594174),
        E = n(626135),
        T = n(74538),
        N = n(335131),
        B = n(381585),
        y = n(597688),
        L = n(328347),
        P = n(307043),
        Z = n(223143),
        O = n(298228),
        w = n(937510),
        A = n(309956),
        R = n(853748),
        H = n(426171),
        F = n(823941),
        D = n(752053),
        V = n(963102),
        M = n(508498),
        W = n(38900),
        U = n(709999),
        G = n(373113),
        z = n(802022),
        K = n(558117),
        $ = n(141594),
        Y = n(566564),
        q = n(531864),
        J = n(302800),
        Q = n(215023),
        X = n(981631),
        ee = n(921944),
        et = n(420212),
        en = n(474936),
        er = n(213731);
      function ea(e) {
        let {
            products: t,
            handleShopCardMount: n,
            header: a,
            category: i,
            isPremiumUser: l,
            isGiftEasterEggEnabled: s,
            showMysteryCard: o = !1,
          } = e,
          d = (0, c.e7)([S.default], () => S.default.getCurrentUser());
        return null == d || 0 === t.length
          ? null
          : (0, r.jsxs)("div", {
              children: [
                null != a
                  ? (0, r.jsx)(m.Text, {
                      className: er.itemTypeTitle,
                      color: "header-secondary",
                      variant: "text-sm/bold",
                      children: a,
                    })
                  : (0, r.jsx)(m.Spacer, { size: 24 }),
                (0, r.jsx)("div", {
                  className: er.cardsContainer,
                  children: t.map((e, t) =>
                    (0, r.jsxs)(
                      B.k0,
                      {
                        newValue: { tilePosition: t },
                        children: [
                          (0, r.jsx)(
                            U.Z,
                            {
                              onMount: n(e),
                              isPremiumUser: l,
                              category: i,
                              product: e,
                              user: d,
                              isGiftEasterEggEnabled: s,
                            },
                            e.skuId,
                          ),
                          1 === t && o && (0, r.jsx)(z.Z, {}),
                        ],
                      },
                      e.skuId,
                    ),
                  ),
                }),
              ],
            });
      }
      function ei(e) {
        let { category: t, initialItemCardRef: n, ...i } = e,
          l = (0, w.l)(t.products),
          o = (0, c.e7)([L.Z], () => L.Z.initialProductSkuId),
          d = a.useCallback(
            (e) => (t) => {
              e.skuId === o && (n.current = t.current);
            },
            [o, n],
          ),
          { revealed: u } = (0, K.R)("CollectiblesShop"),
          m = !u && t.skuId === s.T.STORM && l.length <= 15;
        return (0, r.jsx)(ea, {
          products: l,
          handleShopCardMount: d,
          category: t,
          showMysteryCard: m,
          ...i,
        });
      }
      function el(e) {
        let {
            category: t,
            isPremiumUser: n,
            initialItemCardRef: i,
            isGiftEasterEggEnabled: s,
            setIsGiftEasterEggEnabled: o,
            showEasterEggToggle: c,
            isFullScreen: d,
          } = e,
          u = a.useRef(10 + 70 * Math.random()),
          [h, f] = a.useState(!1),
          g = (0, J.M7)(t.skuId),
          C = (0, p.O)(
            (e) => {
              f(e && null != g);
            },
            d ? 0.13 : 0.15,
          );
        return (0, r.jsxs)("div", {
          className: er.categoryWrapper,
          ref: C,
          children: [
            c &&
              (0, r.jsx)(m.Clickable, {
                className: l()(er.hiddenWumpus, {
                  [er.hiddenWumpusEnabled]: s,
                }),
                onClick: () => o(!0),
                style: { left: "".concat(u.current, "%") },
                children: (0, r.jsx)(k.Z, {
                  idleAnimationState: _.SR.IDLE,
                  giftStyle: en.Cj.BOX,
                }),
              }),
            (0, r.jsx)(F.Z, { category: t, hideLimitedTimeBadge: null != g }),
            (0, r.jsx)(ei, {
              category: t,
              initialItemCardRef: i,
              isPremiumUser: n,
              isGiftEasterEggEnabled: s,
            }),
            null != g &&
              null != t.unpublishedAt &&
              (0, r.jsx)(R.$, {
                unpublishedAt: t.unpublishedAt,
                isVisible: h,
                displayOptions: g,
                isFullScreen: d,
              }),
          ],
        });
      }
      t.default = function (e) {
        var t;
        let { isFullScreen: n = !0 } = e;
        (0, x.z)(b.f);
        let i = (0, P.u)("CollectiblesShop"),
          { analyticsSource: s, analyticsLocations: p } = (0, c.cj)([L.Z], () =>
            L.Z.getAnalytics(),
          ),
          { analyticsLocations: _ } = (0, g.ZP)([...p, f.Z.COLLECTIBLES_SHOP]),
          {
            sessionId: k,
            scrollerRef: w,
            scrollHandler: R,
          } = (0, C._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, s),
          {
            feedState: F,
            catalogState: U,
            transitionToCatalog: z,
            transitionToFeed: K,
          } = (0, A.B)(i, w),
          [J, ea] = a.useState(!1),
          [ei, es] = a.useState(Q.IV),
          [eo, ec] = a.useState(),
          [ed, eu] = a.useState(),
          em = (0, c.e7)([j.Z], () =>
            j.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP),
          ),
          eh = (0, u.f9)(),
          { onClose: ep } = (0, M.Db)(),
          ef = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
          eg = T.ZP.canUseCollectibles(ef),
          {
            categories: eC,
            isFetchingCategories: ev,
            fetchCategoriesError: eb,
            fetchPurchasesError: ex,
            claimError: e_,
            refreshCategories: ek,
          } = (0, Z.Z)(),
          eI = null !== (t = null != eb ? eb : ex) && void 0 !== t ? t : e_;
        (0, I.P)();
        let ej = (0, O.O)(eC),
          eS = a.useRef(null),
          [eE, eT] = a.useState(!1);
        (0, H.Kp)({
          categories: eC,
          isFetchingCategories: ev,
          isLayer: em,
          initialItemCardRef: eS,
        }),
          a.useEffect(() => {
            if (F === Q.f7.VISIBLE || U === Q.f7.VISIBLE) {
              var e;
              let t;
              (t = i ? (U === Q.f7.VISIBLE ? ed : s) : s),
                E.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
                  location_stack: _,
                  source: t,
                  page_session_id: k,
                  page_type: F === Q.f7.VISIBLE ? "home" : "full",
                  category:
                    F === Q.f7.VISIBLE
                      ? void 0
                      : null === (e = y.Z.getCategory(eo)) || void 0 === e
                        ? void 0
                        : e.name,
                });
            }
            !eg &&
              E.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
                type: en.cd.COLLECTIBLES_SHOP,
                location_stack: _,
              });
          }, [i, eg, _, s, k, F, U, eo, ec, ed]);
        let { dismissCollectiblesShopTabNewBadge: eN } = (0, $.Z)();
        a.useEffect(() => {
          if ((eN(), !(0, v.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, v.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
              dismissAction: ee.L.AUTO_DISMISS,
              forceTrack: !0,
            });
        }, [eN]),
          a.useEffect(() => {
            !n && (0, h.Y)(X.Z5c.COLLECTIBLES_SHOP);
          }, [n]),
          a.useEffect(
            () => () => {
              (0, N.K$)({
                categories: [...eC.values()],
                itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT],
              });
            },
            [eC],
          ),
          a.useEffect(() => {
            if (!n || em || eh) return;
            let e = (e) => {
              if (e.key === et.mR.Escape) ep();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, [n, em, eh, ep]);
        let eB = a.useCallback(() => {
            ek();
          }, [ek]),
          { setCategoryRef: ey, handleScrollToCategory: eL } = (0, H.xV)(
            w.current,
          ),
          { reducedMotion: eP } = a.useContext(
            m.AccessibilityPreferencesContext,
          ),
          eZ = a.useRef(null),
          eO = a.useRef(null);
        (0, m.useFocusLock)(eZ),
          a.useEffect(() => {
            if (!n) {
              var e;
              null === (e = eO.current) || void 0 === e || e.focus();
            }
          }, [n]);
        let ew = a.useCallback(
            async (e, t, r) => {
              let a = r && !n && !eP.enabled;
              eu(e), ec(t), await z(a), t && eL(t);
            },
            [z, eL, n, eP],
          ),
          eA = (0, c.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getCategory(eo)) || void 0 === e
              ? void 0
              : e.name;
          });
        return (0, r.jsx)(g.Gt, {
          value: _,
          children: (0, r.jsxs)(B.k0, {
            newValue: { sessionId: k, pageCategory: eA },
            children: [
              (0, r.jsx)("div", {
                className: er.shop,
                ref: n ? eZ : eO,
                tabIndex: -1,
                children: (0, r.jsxs)(m.AdvancedScroller, {
                  className: er.shopScroll,
                  ref: w,
                  onScroll: () => {
                    if ((R(), null != w.current)) {
                      let e = w.current.getDistanceFromBottom();
                      ei >= Q.iA ? ea(e < 20) : e <= 200 && es(ei + Q.IV);
                    }
                  },
                  children: [
                    F !== Q.f7.HIDDEN &&
                      (0, r.jsxs)("div", {
                        className: l()(er.shopViewWrapper, {
                          [er.visible]: F === Q.f7.VISIBLE,
                          [er.in]: F === Q.f7.IN,
                          [er.out]: F === Q.f7.OUT,
                        }),
                        children: [
                          (0, r.jsx)(V.I, {
                            isFullScreen: n,
                            isLayer: em,
                            onClose: ep,
                            isCatalogView: !1,
                            transparent: !0,
                          }),
                          (0, r.jsx)(Y.Z, {
                            handleTransition: ew,
                            numVisibleItems: ei,
                          }),
                        ],
                      }),
                    U !== Q.f7.HIDDEN &&
                      (0, r.jsxs)("div", {
                        className: l()(er.shopViewWrapper, {
                          [er.visible]: U === Q.f7.VISIBLE,
                          [er.in]: U === Q.f7.IN,
                          [er.out]: U === Q.f7.OUT,
                        }),
                        children: [
                          (0, r.jsx)(V.I, {
                            isFullScreen: n,
                            isLayer: em,
                            onClose: ep,
                            isCatalogView: i,
                            transparent: i,
                            handleTransition: K,
                          }),
                          (0, r.jsx)("div", {
                            className: er.pageWrapper,
                            children: (0, r.jsx)("main", {
                              className: l()(er.page, {
                                [er.pageFullscreen]: n,
                              }),
                              children: ev
                                ? (0, r.jsx)(W.Z, {})
                                : null != eI
                                  ? (0, r.jsx)(D.Z, {
                                      onRetry: eB,
                                      errorOrigin: D.i.SHOP_PAGE,
                                    })
                                  : (0, r.jsx)("div", {
                                      className: er.categories,
                                      children: ej
                                        .filter(
                                          (e) =>
                                            null == e.unpublishedAt ||
                                            e.unpublishedAt > new Date(),
                                        )
                                        .filter((e) => {
                                          let { products: t } = e;
                                          return t.length > 0;
                                        })
                                        .map((e, t) =>
                                          (0, r.jsx)(
                                            "div",
                                            {
                                              ref: (t) => ey(e.skuId, t),
                                              children: (0, r.jsx)(B.k0, {
                                                newValue: {
                                                  categoryPosition: t,
                                                },
                                                children: (0, r.jsx)(el, {
                                                  isPremiumUser: eg,
                                                  category: e,
                                                  initialItemCardRef: eS,
                                                  setIsGiftEasterEggEnabled: eT,
                                                  isGiftEasterEggEnabled: eE,
                                                  isFullScreen: n,
                                                }),
                                              }),
                                            },
                                            e.skuId,
                                          ),
                                        ),
                                    }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              eE && (0, r.jsx)(G.Z, {}),
              !n &&
                U !== Q.f7.VISIBLE &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(q.Z, {
                      peaking: J,
                      transitioning: F === Q.f7.OUT,
                    }),
                    (0, r.jsx)(q.Z, {
                      style: { left: 1850 },
                      peaking: J,
                      transitioning: F === Q.f7.OUT,
                    }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    823941: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return L;
        },
        n: function () {
          return N;
        },
      });
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(180650),
        o = n(399606),
        c = n(481060),
        d = n(607070),
        u = n(906732),
        m = n(70097),
        h = n(963249),
        p = n(594174),
        f = n(451478),
        g = n(754347),
        C = n(74538),
        v = n(884697),
        b = n(624377),
        x = n(141011),
        _ = n(813083),
        k = n(67938),
        I = n(372654),
        j = n(215023),
        S = n(474936),
        E = n(388032),
        T = n(462972);
      let N = (0, v.IC)(96),
        B = (e) => {
          let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = a.useRef(null),
            l = (0, o.e7)([p.default], () => p.default.getCurrentUser());
          return C.ZP.canUseCollectibles(l)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                children: E.intl.format(E.t["9hafRk"], {
                  getPremium: (e) =>
                    (0, r.jsx)(c.Clickable, {
                      innerRef: i,
                      className: T.getPremiumHook,
                      onClick: () => {
                        (0, h.Z)({
                          subscriptionTier: S.Si.TIER_2,
                          analyticsLocations: n,
                          returnRef: i,
                        });
                      },
                      tag: "span",
                      children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "always-white",
                        tag: "span",
                        children: e,
                      }),
                    }),
                }),
              });
        },
        y = (e) => {
          let { src: t } = e;
          return /.*\.png/i.test(t)
            ? (0, r.jsx)("img", {
                src: t,
                alt: "",
                className: T.animationAsset,
              })
            : (0, r.jsx)(m.Z, {
                src: t,
                className: T.animationAsset,
                autoPlay: !0,
                loop: !0,
              });
        };
      function L(e) {
        var t, n, a;
        let { category: i, className: u, hideLimitedTimeBadge: m = !1 } = e,
          { backgroundColors: h } = (0, b.Z)(i.styles),
          p = (0, j.ZS)(i.skuId),
          C = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
          S = (0, o.e7)([f.Z], () => f.Z.isFocused());
        if (i.skuId === s.T.CHANCE) return (0, r.jsx)(k.O, { category: i });
        let E = !!(null == p ? void 0 : p.showDarkBannerText),
          L = null == p ? void 0 : p.animatedBanner;
        return (0, r.jsxs)(x.Z, {
          asset: i.banner,
          className: l()(T.shopBanner, u),
          style:
            null != h
              ? {
                  background: "".concat((0, I.nH)(h), " border-box border-box"),
                  outlineColor: h.border.toHslString(),
                }
              : void 0,
          children: [
            !C && void 0 !== L && S && (0, r.jsx)(y, { src: L }),
            (
              null === (t = j.Ve[i.skuId]) || void 0 === t
                ? void 0
                : t.addAttributionLogo
            )
              ? (0, r.jsxs)("div", {
                  className: T.discordLogo,
                  children: [
                    (0, r.jsx)(c.ClydeIcon, {
                      size: "custom",
                      width: 28,
                      height: 28,
                      color: "currentColor",
                      className: T.discordIcon,
                    }),
                    (0, r.jsx)(g.Z, { className: T.discordWordmark }),
                  ],
                })
              : (0, r.jsx)(c.Spacer, { size: 28 }),
            (null === (n = j.Ve[i.skuId]) || void 0 === n ? void 0 : n.addLogo)
              ? (0, r.jsx)("img", {
                  className: T.categoryLogo,
                  src: (0, v.uV)(i.logo, { size: N }),
                  alt: i.name,
                  style: {
                    maxWidth:
                      null === (a = j.Ve[i.skuId]) || void 0 === a
                        ? void 0
                        : a.logoMaxWidth,
                  },
                })
              : (0, r.jsx)(c.Spacer, { size: 96 }),
            (0, r.jsx)(c.Text, {
              className: l()(T.summary, { [T.blackSummary]: E }),
              variant: "text-md/normal",
              children:
                i.skuId === s.T.DISXCORE
                  ? (0, r.jsx)(B, { category: i })
                  : i.summary,
            }),
            !m &&
              (0, r.jsx)(_.Z, {
                category: i,
                className: T.limitedTimeBadge,
                display: "banner",
              }),
          ],
        });
      }
    },
    67938: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(442837),
        i = n(481060),
        l = n(607070),
        s = n(564032);
      function o(e) {
        let { category: t } = e,
          n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion);
        return (0, r.jsx)("div", {
          className: s.banner,
          "aria-label": t.name,
          children: (0, r.jsxs)("div", {
            className: s.mainContent,
            style: {
              backgroundImage: "url(".concat(
                "https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png",
                ")",
              ),
            },
            children: [
              !n &&
                (0, r.jsx)("img", {
                  src: "https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png",
                  className: s.animatedLayer,
                  alt: "",
                  "aria-hidden": !0,
                }),
              (0, r.jsx)(i.Text, {
                className: s.summary,
                variant: "text-md/normal",
                children: t.summary,
              }),
            ],
          }),
        });
      }
    },
    680942: function (e, t, n) {
      "use strict";
      var r = n(200651),
        a = n(192379),
        i = n(481060),
        l = n(727637),
        s = n(906732),
        o = n(241553),
        c = n(333867),
        d = n(884697),
        u = n(228624),
        m = n(67409),
        h = n(474936),
        p = n(231338),
        f = n(388032),
        g = n(65297);
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
            selectedVariantIndex: n,
            returnRef: v,
            onSuccess: b,
            tooltipDelay: x,
            isGiftEasterEggEnabled: _,
            disableCustomColor: k = !1,
          } = e,
          { analyticsLocations: I } = (0, s.ZP)(),
          j = a.useRef(null),
          S = (0, l.Z)(j),
          E = k ? p.BR.DARK : p.BR.LIGHT,
          T = (0, u.hv)("CollectiblesShopGiftButton");
        return (0, d.x6)(t)
          ? null
          : (0, r.jsx)(i.Tooltip, {
              text: f.intl.string(f.t["JCFN//"]),
              delay: x,
              children: (e) =>
                (0, r.jsx)(i.Button, {
                  ...e,
                  buttonRef: j,
                  className: g.giftButton,
                  color: k ? i.ButtonColors.BRAND : i.ButtonColors.CUSTOM,
                  look: i.Button.Looks.FILLED,
                  size: i.ButtonSizes.ICON,
                  innerClassName: g.giftButtonInner,
                  "aria-label": f.intl.string(f.t.PEjaCw),
                  onClick: (e) => {
                    e.stopPropagation(),
                      (0, c.Z)({
                        skuId: (0, m.S)({
                          product: t,
                          selectedVariantIndex: n,
                        }),
                        isGift: !0,
                        giftingOrigin: h.Wt.SHOP_PAGE,
                        analyticsLocations: I,
                        returnRef: v,
                        variantsReturnStyle: T,
                        onClose:
                          null != b
                            ? (e) => {
                                e && b();
                              }
                            : void 0,
                      });
                  },
                  children: _
                    ? (0, r.jsx)(o.e, {
                        hovered: S,
                        isContentDismissed: !0,
                        themeOverride: E,
                        boxColors: C,
                      })
                    : (0, r.jsx)(i.GiftIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                }),
            });
      };
    },
    963102: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return v;
        },
      });
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(442837),
        o = n(780384),
        c = n(481060),
        d = n(425493),
        u = n(410030),
        m = n(984370),
        h = n(594174),
        p = n(471731),
        f = n(335131),
        g = n(388032),
        C = n(454801);
      function v(e) {
        let {
            isFullScreen: t,
            isLayer: n,
            onClose: i,
            isCatalogView: v,
            handleTransition: b,
            transparent: x,
          } = e,
          _ = (0, u.ZP)(),
          k = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
          I =
            (null == k ? void 0 : k.isStaff()) ||
            (null == k ? void 0 : k.isStaffPersonal()) ||
            !1;
        return (0, r.jsx)(c.ThemeProvider, {
          theme: _,
          children: (e) =>
            (0, r.jsxs)(m.Z, {
              className: l()(e, C.headerBar, {
                [C.fullscreenHeaderBar]: t,
                [C.headerBarRegularBackground]: !x,
                [C.headerBarTransparentLightBackground]: x && !(0, o.wj)(_),
                [C.headerBarTransparentDarkBackground]: x && (0, o.wj)(_),
              }),
              transparent: x,
              toolbar: t || !I ? null : (0, r.jsx)(a.Fragment, {}),
              children: [
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    v &&
                      null != b &&
                      (0, r.jsx)(c.Clickable, {
                        onClick: b,
                        className: C.back,
                        "aria-label": g.intl.string(g.t["13/7kZ"]),
                        children: (0, r.jsx)(c.ArrowLargeLeftIcon, {}),
                      }),
                    (0, r.jsx)(p.Z, {
                      color: x ? ((0, o.wj)(_) ? "white" : "black") : void 0,
                      className: C.discordLogo,
                    }),
                  ],
                }),
                (0, r.jsx)(m.Z.Title, { children: g.intl.string(g.t.pWG4zc) }),
                v &&
                  (0, r.jsx)(m.Z.Title, {
                    className: C.shopAllHeader,
                    children: g.intl.string(g.t.xFcotb),
                  }),
                t &&
                  (0, r.jsx)(d.Z, {
                    className: C.closeIcon,
                    closeAction: n ? f.DR : i,
                    keybind: "ESC",
                  }),
              ],
            }),
        });
      }
    },
    558060: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(481060),
        s = n(884697),
        o = n(409116),
        c = n(200615),
        d = n(981631),
        u = n(388032),
        m = n(416806);
      function h(e) {
        let {
            product: t,
            isPremiumUser: n,
            discount: a,
            className: h,
            nitroUpsell: p = !1,
          } = e,
          f = (0, s.ql)(t, d.tuJ.DEFAULT);
        if (null == f) return null;
        if (f.amount <= 0)
          return (0, r.jsx)("div", {
            className: i()(m.priceTagsContainer, h),
            children: (0, r.jsx)(o.F, { price: f }),
          });
        let g = (0, s.ql)(t, d.tuJ.PREMIUM_TIER_2),
          C = !n && !(0, s.x6)(t),
          v = (0, s.x6)(t) && n ? { ...f, amount: a.original } : f;
        return (0, r.jsxs)("div", {
          className: i()(m.priceTagsContainer, h),
          children: [
            (0, r.jsx)(o.F, {
              price: v,
              discount: n ? s.f_ : a,
              className: i()(m.price, {
                [m.striked]: n,
                [m.dimmed]: n,
                [m.fullPrice]: C,
              }),
            }),
            null != g &&
              (0, r.jsx)(o.F, {
                price: g,
                discount: n ? a : s.f_,
                renderPrice: p
                  ? (e) =>
                      (0, r.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        children: u.intl.format(u.t.Sv8iiY, {
                          price: e,
                          subscribeNowHook: (e) => (0, r.jsx)(c.F, { text: e }),
                        }),
                      })
                  : C
                    ? (e) =>
                        u.intl.formatToPlainString(u.t.W3gIWF, { price: e })
                    : void 0,
                className: i()(m.price, { [m.dimmed]: !n, [m.fullPrice]: C }),
                variant: n ? void 0 : "text-xs/semibold",
                icon: (0, r.jsx)(l.Tooltip, {
                  text: u.intl.string(u.t.MPFyJy),
                  "aria-label": u.intl.string(u.t.X3Ekj4),
                  children: (e) => {
                    let { ...t } = e;
                    return (0, r.jsx)(l.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      ...t,
                      className: i()(m.premiumIcon, { [m.fullPrice]: C }),
                    });
                  },
                }),
              }),
          ],
        });
      }
    },
    409116: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return u;
        },
      }),
        n(757143);
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(481060),
        s = n(937615),
        o = n(884697),
        c = n(747157);
      let d = (e) => (e.length > 5 ? e.replace(/\.00$/, "") : e),
        u = (e) => {
          var t;
          let {
              price: { amount: n, currency: a },
              renderPrice: u,
              icon: m,
              className: h,
              discount: p = o.f_,
              variant: f = "heading-md/semibold",
            } = e,
            g = d((0, s.T4)(n, a)),
            C =
              p !== o.f_ && p.discountPercentage >= 5
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      g,
                      (0, r.jsx)(l.Heading, {
                        variant: f,
                        color: "text-positive",
                        className: c.discount,
                        children: " (-".concat(p.discountPercentage, "%)"),
                      }),
                    ],
                  })
                : g;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(l.Heading, {
              variant: f,
              className: i()(c.container, h),
              children: [
                m,
                null !== (t = null == u ? void 0 : u(C)) && void 0 !== t
                  ? t
                  : C,
              ],
            }),
          });
        };
    },
    237031: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return l;
        },
        v: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(481060);
      let i = "collectibles shop product details modal",
        l = (e) => {
          let {
            product: t,
            category: l,
            analyticsSource: s,
            analyticsLocations: o,
            returnRef: c,
          } = e;
          (0, a.openModalLazy)(
            async () => {
              let { default: e } = await n.e("2026").then(n.bind(n, 702370));
              return (n) =>
                (0, r.jsx)(e, {
                  ...n,
                  product: t,
                  category: l,
                  analyticsSource: s,
                  analyticsLocations: o,
                  returnRef: c,
                });
            },
            { modalKey: i },
          );
        },
        s = () => {
          (0, a.closeModal)(i);
        };
    },
    508498: function (e, t, n) {
      "use strict";
      n.d(t, {
        Db: function () {
          return d;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r,
        a,
        i = n(192379),
        l = n(512969),
        s = n(37234),
        o = n(703656),
        c = n(981631);
      function d() {
        let { search: e } = (0, l.TH)(),
          t = (0, l.UO)(),
          n = i.useMemo(() => new URLSearchParams(e), [e]).get("source"),
          r = null != n ? parseInt(n, 10) : null;
        return {
          onClose: i.useCallback(() => {
            if (0 === r) {
              (0, o.op)(), (0, s.jN)(c.S9g.USER_SETTINGS);
              return;
            }
            if ((0, o.uv)()) {
              (0, o.op)();
              return;
            }
            (0, o.uL)(c.Z5c.APP);
          }, [r]),
          source: r,
          ...t,
        };
      }
      ((a = r || (r = {}))[(a.SETTINGS = 0)] = "SETTINGS"),
        (a[(a.CHANGELOG = 1)] = "CHANGELOG"),
        (a[(a.DM_LIST = 2)] = "DM_LIST");
    },
    38900: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return m;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(213731),
        s = n(462972),
        o = n(17504),
        c = n(352177);
      let d = () => 4 * Math.random() + 8,
        u = [d(), d(), d()],
        m = () =>
          (0, r.jsx)("div", {
            className: i()(o.skeleton, c.shopCard),
            children: (0, r.jsxs)("div", {
              className: o.cardBody,
              children: [
                (0, r.jsx)("div", { className: o.cardAvatar }),
                (0, r.jsx)("div", { className: o.cardTitle }),
                (0, r.jsx)("div", { className: o.cardDescription }),
                (0, r.jsx)("div", { className: o.cardSummary }),
              ],
            }),
          });
      t.Z = () =>
        (0, r.jsx)("div", {
          className: l.skeletons,
          children: u.map((e) =>
            (0, r.jsxs)(
              "div",
              {
                className: l.cardsContainer,
                children: [
                  (0, r.jsx)("div", {
                    className: i()(o.skeleton, s.shopBanner),
                    children: (0, r.jsx)("div", { className: o.bannerBody }),
                  }),
                  Array.from({ length: e }, (e, t) => t).map((e) =>
                    (0, r.jsx)(m, {}, e),
                  ),
                ],
              },
              e,
            ),
          ),
        });
    },
    709999: function (e, t, n) {
      "use strict";
      n(47120), n(627341);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(512722),
        o = n.n(s),
        c = n(278074),
        d = n(873546),
        u = n(180650),
        m = n(979554),
        h = n(399606),
        p = n(622535),
        f = n(663002),
        g = n(481060),
        C = n(37234),
        v = n(727637),
        b = n(607070),
        x = n(100527),
        _ = n(906732),
        k = n(1585),
        I = n(333867),
        j = n(197115),
        S = n(300284),
        E = n(876917),
        T = n(642619),
        N = n(210887),
        B = n(74538),
        y = n(335131),
        L = n(1870),
        P = n(429368),
        Z = n(884697),
        O = n(664018),
        w = n(890249),
        A = n(228624),
        R = n(635552),
        H = n(905357),
        F = n(724994),
        D = n(297651),
        V = n(390698),
        M = n(813083),
        W = n(680942),
        U = n(558060),
        G = n(237031),
        z = n(453713),
        K = n(616066),
        $ = n(216541),
        Y = n(67409),
        q = n(58201),
        J = n(201964),
        Q = n(361110),
        X = n(832149),
        ee = n(474936),
        et = n(388032),
        en = n(352177);
      let er = (e) => {
          let { children: t, onClick: n, ...a } = e;
          return (0, r.jsx)(g.Button, {
            fullWidth: !0,
            look: g.Button.Looks.FILLED,
            onClick: (e) => {
              e.stopPropagation(), n();
            },
            ...a,
            children: t,
          });
        },
        ea = (e) => {
          let { className: t, ...n } = e;
          return (0, r.jsx)(g.Button, {
            color: g.ButtonColors.BRAND,
            look: g.Button.Looks.FILLED,
            size: g.ButtonSizes.ICON,
            className: l()(en.previewButton, t),
            innerClassName: en.previewButtonInner,
            "aria-label": et.intl.string(et.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.EyeIcon, {
              size: "md",
              color: "currentColor",
            }),
          });
        },
        ei = (e) => {
          let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
          return (0, r.jsx)("div", {
            className: en.profileEffectShopPreview,
            children: (0, r.jsx)(E.Z, {
              profileEffectId: t,
              isHovering: n,
              isPurchased: a && !n,
              removeSetHeight: !0,
            }),
          });
        },
        el = (e) => {
          let {
            isStormMysteryItem: t,
            isHighlighted: n,
            isPurchased: a,
            user: i,
            item: s,
          } = e;
          return (0, r.jsx)("div", {
            className: l()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, r.jsx)(K.R, {
              item: s,
              user: i,
              isPurchased: a,
              isHighlighted: n,
            }),
          });
        };
      t.Z = function (e) {
        let {
            product: t,
            user: n,
            category: i,
            onMount: s,
            isGiftEasterEggEnabled: E,
            isInFeedView: K,
          } = e,
          { analyticsLocations: es } = (0, _.ZP)([
            ...(K ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []),
            x.Z.COLLECTIBLES_SHOP_CARD,
          ]),
          eo = a.useRef(null),
          ec = (0, v.Z)(eo),
          [ed, eu] = a.useState(!1),
          em = ec || ed,
          eh = (0, Q.f)(t),
          { previewingVariantIndex: ep } = eh,
          ef = (0, H.k)(t),
          eg = (0, h.e7)([b.Z], () => b.Z.useReducedMotion),
          eC = B.ZP.canUseCollectibles(n),
          ev = (0, Z.XM)(t, eC, !1),
          eb = a.useMemo(() => (0, Z.BH)(t, eC), [t, eC]),
          ex = (0, Z.G1)(t),
          e_ = (0, Z.rN)(t),
          [ek, eI, ej] = (0, h.Wu)([L.Z], () => [
            L.Z.isClaiming === t.skuId,
            null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId,
            L.Z.purchases,
          ]),
          eS = (0, J.o)(t, ej, ep),
          eE = (0, h.e7)([N.Z], () => (0, f.wj)(N.Z.theme)),
          eT = (0, w.m)("CollectiblesCollectedModal"),
          eN = (0, Z.x6)(t) || eT,
          eB = (0, Z.Yq)(t.skuId),
          { hoverVariant: ey } = (0, O.E)("CollectiblesShopTallCard"),
          eL = i.skuId === u.T.STORM && "1268362891946627103" === t.skuId,
          eP = (0, A.hv)("CollectiblesShopTallCard"),
          eZ = (0, P.o)(t, ej),
          eO = (0, q.W)(t, eZ),
          { isPurchased: ew, isPartiallyOwnedBundle: eA } = (0, F.L)(eO),
          eR = null !== ep ? ep : eZ,
          [eH, eF] = a.useState(!1),
          { handleCardVisibilityChange: eD } = (0, D.E)(
            eO.skuId,
            K ? "home" : "full",
          );
        a.useEffect(() => {
          let { current: e } = eo;
          if (null == e) return;
          let t = () => eu(!0);
          return (
            e.addEventListener("focusin", t),
            e.blur(),
            () => {
              e.removeEventListener("focusin", t);
            }
          );
        }, []),
          a.useEffect(() => {
            null == s || s(eo);
          }, [s]);
        let eV = (0, S.Z)({ analyticsLocations: es }),
          eM = a.useRef(null),
          { handleUseNow: eW, isApplying: eU } = (0, R.W)({ product: eO }),
          eG = () => {
            if (
              ((0, C.xf)(),
              eV(),
              t.type === m.Z.AVATAR_DECORATION && null != eS)
            ) {
              o()(
                eS.type === t.type,
                "product type is equivlant to first item's check for avatar deco",
              ),
                (0, k.ps)({
                  initialSelectedDecoration: eS,
                  analyticsLocations: es,
                });
              return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
              (0, T.H)({
                initialSelectedEffectId: eS.id,
                analyticsLocations: es,
              });
          },
          ez = (e) => (n) => {
            (eM.current = n.currentTarget),
              (0, G.T)({
                product: t,
                category: i,
                analyticsLocations: es,
                analyticsSource: e,
                returnRef: eM,
              });
          },
          eK = ez(x.Z.COLLECTIBLES_SHOP_CARD),
          e$ = ez(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
          eY = () =>
            (0, r.jsx)("div", {
              className: en.hoverUpsellContainer,
              children: (0, r.jsx)(j.Z, {
                fullWidth: !0,
                className: en.__invalid_premiumSubscribeButton,
                disabled: eI,
                onClick: (e) => e.stopPropagation(),
                buttonText: et.intl.string(et.t.sEAnVF),
                subscriptionTier: ee.Si.TIER_2,
              }),
            }),
          eq = () =>
            ew || eA
              ? (0, r.jsx)(V.U, {
                  className: en.priceTag,
                  isPartiallyPurchased: eA,
                })
              : ex
                ? (0, r.jsx)(g.Text, {
                    variant: "text-md/semibold",
                    className: en.priceTag,
                    children: et.intl.string(et.t.rt69oq),
                  })
                : (0, r.jsx)(U.Z, {
                    product: t,
                    discount: eb,
                    isPremiumUser: eC,
                    className: en.priceTag,
                  }),
          eJ = () =>
            ex || d.tq
              ? null
              : e_
                ? (0, r.jsx)(ea, { onClick: e$ })
                : (0, r.jsx)(W.Z, {
                    product: t,
                    selectedVariantIndex: eZ,
                    returnRef: eo,
                    isGiftEasterEggEnabled: E,
                    disableCustomColor: !0,
                    tooltipDelay: 250,
                  }),
          eQ = () => {
            if (ex && !eC && !e_) return eY();
            let e = ex
              ? {
                  submitting: ek,
                  submittingStartedLabel: et.intl.string(et.t["TYw+9v"]),
                  submittingFinishedLabel: et.intl.string(et.t.Pg1UPz),
                  onClick: async () => {
                    await (0, y.fK)(t.skuId),
                      (0, X.Z)({ product: t, analyticsLocations: es });
                  },
                }
              : {
                  onClick: () =>
                    (0, I.Z)({
                      skuId: (0, Y.S)({ product: t, selectedVariantIndex: eZ }),
                      analyticsLocations: es,
                      returnRef: eo,
                      variantsReturnStyle: eP,
                    }),
                };
            return (0, r.jsxs)("div", {
              className: en.buttonsContainer,
              children: [
                eA
                  ? null
                  : ew
                    ? (0, r.jsx)(er, {
                        disabled: eI,
                        onClick: eN ? eW : eG,
                        submitting: eU,
                        children: et.intl.string(et.t.MAS7uL),
                      })
                    : (0, r.jsx)(er, {
                        disabled: eI,
                        className: en.purchaseButton,
                        ...e,
                        children: ex
                          ? et.intl.string(et.t.zp6caG)
                          : et.intl.formatToPlainString(et.t["cNSL/v"], {
                              price: ev,
                            }),
                      }),
                eJ(),
              ],
            });
          };
        return (0, Z.x6)(t) && null != eb && eb.discountPercentage < 0
          ? null
          : (0, r.jsx)(p.$, {
              onChange: eD,
              threshold: 0,
              children: (0, r.jsx)(g.FocusRing, {
                children: (0, r.jsxs)(g.Clickable, {
                  innerRef: eo,
                  className: l()(eE ? en.shopCardDark : en.shopCard, {
                    [en.partiallyOwned]: eA && !em,
                    [en.shopCardAnimation]: !eg && ey !== O.D.NO_MOVEMENT,
                    [eE ? en.shopCardDarkHighlighted : en.shopCardHighlighted]:
                      em,
                    [en.mysteryShopCard]: eL,
                  }),
                  onBlur: () => eu(!1),
                  onClick: eK,
                  id: "shop-item-".concat(t.skuId),
                  children: [
                    ex &&
                      (0, r.jsx)(g.Tooltip, {
                        tooltipContentClassName: en.premiumWheelTooltipContent,
                        color: g.Tooltip.Colors.PRIMARY,
                        text: et.intl.string(et.t.O2K0xM),
                        children: (e) =>
                          (0, r.jsx)(g.TextBadge, {
                            ...e,
                            className: en.premiumWheelBadge,
                            text: (0, r.jsx)(g.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: en.premiumWheel,
                            }),
                          }),
                      }),
                    (0, r.jsx)("div", {
                      className: en.preview,
                      children: (0, c.EQ)(t.type)
                        .with(m.Z.PROFILE_EFFECT, () =>
                          (0, r.jsx)(ei, {
                            isHighlighted: em,
                            profileEffectId: eS.id,
                            isPurchased: ew,
                          }),
                        )
                        .with(
                          m.Z.AVATAR_DECORATION,
                          () => (
                            o()(
                              eS.type === m.Z.AVATAR_DECORATION,
                              "ts-match already checked the type",
                            ),
                            (0, r.jsx)(el, {
                              item: eS,
                              user: n,
                              isStormMysteryItem: eL,
                              isHighlighted: em,
                              isPurchased: ew,
                            })
                          ),
                        )
                        .with(m.Z.BUNDLE, () =>
                          (0, r.jsx)($.d, {
                            product: t,
                            user: n,
                            isPurchased: ew,
                            isHighlighted: em,
                          }),
                        )
                        .with(m.Z.VARIANTS_GROUP, () => {
                          if (null == t.variants || 0 === t.variants.length)
                            return null;
                          let e = t.variants[eR];
                          return null == e
                            ? null
                            : (0, c.EQ)(e.type)
                                .with(m.Z.PROFILE_EFFECT, () => {
                                  let [t] = e.items;
                                  return (0, r.jsx)(ei, {
                                    isHighlighted: em,
                                    profileEffectId: t.id,
                                    isPurchased: ew && !eH,
                                  });
                                })
                                .with(m.Z.AVATAR_DECORATION, () => {
                                  let [t] = e.items;
                                  return (
                                    o()(
                                      t.type === m.Z.AVATAR_DECORATION,
                                      "ts-match already checked the type",
                                    ),
                                    (0, r.jsx)(el, {
                                      item: t,
                                      user: n,
                                      isStormMysteryItem: eL,
                                      isHighlighted: em,
                                      isPurchased: ew,
                                    })
                                  );
                                })
                                .otherwise(() => null);
                        })
                        .otherwise(() => null),
                    }),
                    ew
                      ? (0, r.jsx)("div", {
                          className: en.checkmarkWrapper,
                          children: (0, r.jsx)(g.CheckmarkLargeBoldIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 38,
                            height: 38,
                            className: en.checkmark,
                          }),
                        })
                      : null,
                    (0, r.jsxs)("div", {
                      className: l()(en.cardText, {
                        [en.cardTextBlur]:
                          (null == eS ? void 0 : eS.type) ===
                          m.Z.PROFILE_EFFECT,
                        [en.variantsGroup]: t.type === m.Z.VARIANTS_GROUP,
                      }),
                      children: [
                        (0, r.jsx)("div", {
                          className: l()(
                            en.cardBackground,
                            eE ? en.darkCardBackground : en.lightCardBackground,
                            (null == eS ? void 0 : eS.type) ===
                              m.Z.PROFILE_EFFECT
                              ? en.cardLowOpacity
                              : null,
                          ),
                        }),
                        (0, r.jsx)(g.Text, {
                          variant: "text-lg/bold",
                          className: en.productName,
                          children: ef,
                        }),
                        t.type === m.Z.VARIANTS_GROUP
                          ? (0, r.jsx)(z.P, {
                              variantGroupProduct: t,
                              previewingVariantIndexProps: eh,
                              setIsHoveringOnSwitch: eF,
                              purchases: ej,
                              minimal: !ec,
                            })
                          : null,
                        (0, r.jsxs)("div", {
                          className: en.detailsWrapper,
                          children: [
                            (0, r.jsx)("div", {
                              className: eA ? void 0 : en.innerBlur,
                              children: eq(),
                            }),
                            (0, r.jsx)("div", {
                              className: en.innerHover,
                              children: eQ(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(M.Z, {
                      category: i,
                      className: en.limitedTimeBadge,
                      display: "card",
                    }),
                    eB &&
                      !eA &&
                      !ew &&
                      (0, r.jsx)(g.TextBadge, {
                        text: et.intl.string(et.t.y2b7CA),
                        disableColor: !0,
                        className: en.newBadge,
                      }),
                  ],
                }),
              }),
            });
      };
    },
    373113: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(250365);
      function i() {
        return (0, r.jsxs)("div", {
          className: a.__invalid_snowflakes,
          children: [
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
            (0, r.jsx)("div", { className: a.snowflake, children: "❅" }),
          ],
        });
      }
    },
    200615: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return d;
        },
      });
      var r = n(200651),
        a = n(192379),
        i = n(481060),
        l = n(906732),
        s = n(963249),
        o = n(474936),
        c = n(974657);
      let d = (e) => {
        let { text: t } = e,
          { analyticsLocations: n } = (0, l.ZP)(),
          d = a.useRef(null);
        return (0, r.jsx)(i.Clickable, {
          className: c.subscribeNow,
          innerRef: d,
          onClick: () => {
            (0, s.Z)({
              subscriptionTier: o.Si.TIER_2,
              analyticsLocations: n,
              returnRef: d,
            });
          },
          children: t,
        });
      };
    },
    453713: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return C;
        },
      });
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(404759),
        o = n.n(s),
        c = n(866442),
        d = n(481060),
        u = n(429368),
        m = n(724994),
        h = n(388032),
        p = n(591014);
      let f = o()((e) => {
          let t = !1;
          if (null != e && (0, c.FX)(e)) {
            let n = (0, c._i)(e);
            null != n && (t = 0.3 >= (0, c.Bd)(n));
          }
          return t
            ? d.tokens.unsafe_rawColors.PRIMARY_700.css
            : d.tokens.unsafe_rawColors.PRIMARY_200.css;
        }),
        g = (e) => {
          let {
              variantGroupProduct: t,
              variant: n,
              variantIndex: i,
              totalVariants: s,
              selectedVariantIndex: o,
              onEnter: c,
              onLeave: g,
              minimal: C,
            } = e,
            { isPurchased: v } = (0, m.L)(n),
            b = a.useCallback(
              (e) => {
                e.preventDefault(), e.stopPropagation(), (0, u.$)(t, i);
              },
              [t, i],
            );
          return (0, r.jsx)(d.Tooltip, {
            text: h.intl.string(h.t["/bUsx8"]),
            "aria-label": !1,
            shouldShow: !C && v,
            children: (e) =>
              (0, r.jsx)(d.Clickable, {
                tag: "li",
                onMouseEnter: () => {
                  var t;
                  c(),
                    null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                },
                onMouseLeave: () => {
                  var t;
                  g(),
                    null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                },
                onClick: b,
                className: p.colorVariant,
                children: (0, r.jsx)("div", {
                  className: l()(p.colorSwatch, {
                    [p.open]: !C,
                    [p.selected]: i === o,
                  }),
                  style: { backgroundColor: n.variantValue, zIndex: s - i },
                  children: v
                    ? (0, r.jsx)(d.CheckmarkSmallBoldIcon, {
                        className: p.purchasedIndicator,
                        color: f(n.variantValue),
                      })
                    : null,
                }),
              }),
          });
        },
        C = (e) => {
          var t, n, a;
          let {
              variantGroupProduct: i,
              className: s,
              previewingVariantIndexProps: o,
              setIsHoveringOnSwitch: c,
              minimal: m,
              purchases: f,
            } = e,
            C = (0, u.o)(i, f),
            v = o.previewingVariantIndex,
            b = null === (t = i.variants) || void 0 === t ? void 0 : t[C],
            x =
              null !== v
                ? null === (n = i.variants) || void 0 === n
                  ? void 0
                  : n[v]
                : void 0;
          if (null == b) return null;
          let _ =
            null != x ? x.variantLabel : null == b ? void 0 : b.variantLabel;
          return (0, r.jsxs)("div", {
            className: l()(p.variantsPanel, s, { [p.minimalState]: m }),
            onMouseEnter: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            children: [
              (0, r.jsx)("ol", {
                className: p.variantsList,
                children:
                  null === (a = i.variants) || void 0 === a
                    ? void 0
                    : a.map((e, t) => {
                        var n, a;
                        return (0, r.jsx)(
                          g,
                          {
                            variantGroupProduct: i,
                            variant: e,
                            variantIndex: t,
                            selectedVariantIndex: C,
                            totalVariants:
                              null !==
                                (a =
                                  null === (n = i.variants) || void 0 === n
                                    ? void 0
                                    : n.length) && void 0 !== a
                                ? a
                                : 0,
                            onEnter: () => o.handleEntering(t),
                            onLeave: o.handleLeaving,
                            minimal: m,
                          },
                          t,
                        );
                      }),
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                className: p.variantLabel,
                children: m ? h.intl.string(h.t.wbgaj4) : _,
              }),
            ],
          });
        };
    },
    802022: function (e, t, n) {
      "use strict";
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(399606),
        o = n(780384),
        c = n(481060),
        d = n(774078),
        u = n(727637),
        m = n(607070),
        h = n(210887),
        p = n(388032),
        f = n(352177),
        g = n(297491),
        C = n(458597);
      t.Z = function () {
        let e = a.useRef(null),
          t = (0, u.Z)(e),
          n = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
          i = (0, s.e7)([h.Z], () => (0, o.wj)(h.Z.theme)),
          { days: v, hours: b } = (0, d.Z)(
            new Date("2024-08-23T08:15:00-07:00"),
          ),
          x = a.useMemo(() => {
            if (0 === v && 0 === b) return p.intl.string(p.t.qAWS4O);
            let e = ""
                .concat(v.toString().padStart(2, "0"))
                .concat(p.intl.string(p.t.QJyuxc)),
              t = ""
                .concat(b.toString().padStart(2, "0"))
                .concat(p.intl.string(p.t["1LyF1t"]));
            return "".concat(e, ":").concat(t);
          }, [v, b]);
        return (0, r.jsxs)("div", {
          ref: e,
          className: l()(i ? f.shopCardDark : f.shopCard, g.notInteractive, {
            [f.shopCardAnimation]: !n,
            [i ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: t,
          }),
          children: [
            (0, r.jsx)("div", {
              className: f.preview,
              children: (0, r.jsx)("div", {
                className: l()(f.avatarContainer, f.mysteryAvatarContainer),
                children: (0, r.jsx)("img", {
                  src: C,
                  className: g.spark,
                  alt: "",
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: f.cardText,
              children: [
                (0, r.jsx)("div", {
                  className: l()(
                    f.cardBackground,
                    i ? f.darkCardBackground : f.lightCardBackground,
                  ),
                }),
                (0, r.jsx)(c.Text, {
                  variant: "text-lg/bold",
                  className: g.productName,
                  children: p.intl.string(p.t.ZDfl3d),
                }),
              ],
            }),
            (0, r.jsx)(c.TextBadge, {
              text: x,
              disableColor: !0,
              className: f.newBadge,
            }),
          ],
        });
      };
    },
    558117: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return a;
        },
      });
      let r = (0, n(818083).B)({
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
        a = (e) => r.useExperiment({ location: e });
    },
    67409: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return a;
        },
      });
      var r = n(979554);
      let a = (e) => {
        var t, n, a;
        let { product: i, selectedVariantIndex: l } = e;
        return i.type === r.Z.VARIANTS_GROUP &&
          null != l &&
          null !==
            (a =
              null === (n = i.variants) || void 0 === n
                ? void 0
                : null === (t = n[l]) || void 0 === t
                  ? void 0
                  : t.skuId) &&
          void 0 !== a
          ? a
          : i.skuId;
      };
    },
    201964: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return i;
        },
      });
      var r = n(979554),
        a = n(429368);
      let i = (e, t, n) => {
        let i = (0, a.o)(e, t),
          l = null != n ? n : i;
        return (null == e ? void 0 : e.type) === r.Z.VARIANTS_GROUP &&
          null != e.variants &&
          e.variants.length > l
          ? e.variants[l].items[0]
          : e.items[0];
      };
    },
    361110: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(979554);
      let i = (e) => {
        let [t, n] = (0, r.useState)(null),
          i = (0, r.useCallback)(
            (t) => {
              if ((null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP) n(t);
            },
            [null == e ? void 0 : e.type],
          );
        return {
          previewingVariantIndex: t,
          handleEntering: i,
          handleLeaving: (0, r.useCallback)(() => {
            if ((null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP) n(null);
          }, [null == e ? void 0 : e.type]),
        };
      };
    },
    566564: function (e, t, n) {
      "use strict";
      n(47120), n(653041);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(557816),
        o = n.n(s),
        c = n(180650),
        d = n(442837),
        u = n(622535),
        m = n(481060),
        h = n(607070),
        p = n(70097),
        f = n(580747),
        g = n(594174),
        C = n(451478),
        v = n(960048),
        b = n(381585),
        x = n(597688),
        _ = n(884697),
        k = n(251068),
        I = n(744112),
        j = n(228624),
        S = n(223143),
        E = n(937510),
        T = n(297651),
        N = n(823941),
        B = n(752053),
        y = n(38900),
        L = n(709999),
        P = n(215023),
        Z = n(388032),
        O = n(632007),
        w = n(196315);
      t.Z = (e) => {
        var t, n, i, s, A, R;
        let { handleTransition: H, numVisibleItems: F } = e,
          {
            categories: D,
            isFetchingCategories: V,
            fetchCategoriesError: M,
            fetchPurchasesError: W,
            claimError: U,
            refreshCategories: G,
          } = (0, S.Z)(),
          z = null !== (t = null != M ? M : W) && void 0 !== t ? t : U,
          K = Array.from(D.values()),
          $ = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          Y = a.createRef(),
          q = (0, k.m)("CollectiblesFeedShop"),
          J = (0, I.b)("Collectibles Shop Button"),
          Q = (0, f.Z)("shop_disable_cache"),
          X = (0, f.Z)("shop_include_unpublished"),
          ee = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
          et = (0, d.e7)([C.Z], () => C.Z.isFocused()),
          en = (0, j.ed)("CollectiblesFeedShop"),
          er = q ? K[0] : x.Z.getCategory(c.T.SPOOKY_NIGHT),
          ea = q ? K[1] : x.Z.getCategory(c.T.BAND),
          ei = x.Z.getCategory(c.T.ANIME_V2),
          el = q
            ? (0, _.uV)(
                null !== (n = null == er ? void 0 : er.heroBanner) &&
                  void 0 !== n
                  ? n
                  : "",
                { size: P.pv, format: "jpg" },
              )
            : w,
          es = a.useCallback(() => {
            G();
          }, [G]),
          eo = q
            ? null !== (i = null == er ? void 0 : er.heroRanking) &&
              void 0 !== i
              ? i
              : []
            : P.Ku,
          ec = a.useMemo(
            () => eo.map((e) => x.Z.getProduct(e)).filter((e) => null != e),
            [V],
          ),
          ed = (0, E.l)(ec).slice(0, 4),
          eu = a.useMemo(
            () =>
              o()(
                P.yo
                  .map((e) => {
                    let t = x.Z.getProduct(e);
                    return en &&
                      null != t &&
                      null != t.variantGroupStoreListingId
                      ? x.Z.getProductByStoreListingId(
                          t.variantGroupStoreListingId,
                        )
                      : t;
                  })
                  .filter((e) => null != e),
                "storeListingId",
              ),
            [V, en],
          ),
          em = (0, E.l)(eu),
          eh =
            (null == er ? void 0 : er.skuId) != null
              ? (0, P.ZS)(er.skuId)
              : void 0;
        if (null == $) return null;
        let ep = (e) => {
            var t;
            let { category: n, showMostPopularBadge: a } = e,
              { handleCardVisibilityChange: i } = (0, T.E)(
                n.skuId,
                "home",
                "marketing",
              ),
              s =
                !0 === a
                  ? Z.intl.string(Z.t["o/oRJC"])
                  : (null == n ? void 0 : n.unpublishedAt) != null
                    ? Z.intl.string(Z.t["h/uBCQ"])
                    : void 0,
              o = (0, _.uV)(
                null !== (t = null == n ? void 0 : n.featuredBlock) &&
                  void 0 !== t
                  ? t
                  : "",
                { size: P.J0, format: "png" },
              );
            return (0, r.jsx)(u.$, {
              onChange: i,
              threshold: 0,
              children: (0, r.jsxs)(m.Clickable, {
                className: l()(O.featuredBlock),
                style: { backgroundImage: "url(".concat(o, ")") },
                onClick: () =>
                  H("shop marketing tile", null == n ? void 0 : n.skuId),
                children: [
                  null != s &&
                    (0, r.jsx)(m.TextBadge, {
                      disableColor: !0,
                      text: s,
                      className: O.featuredBlockBadge,
                    }),
                  (0, r.jsx)(m.Button, {
                    className: O.featuredBlockButton,
                    color: m.ButtonColors.WHITE,
                    onClick: () => {},
                    children: Z.intl.string(Z.t.jVcuVV),
                  }),
                ],
              }),
            });
          },
          ef = Z.intl.formatToPlainString(Z.t.wvKYCg, {
            category_name: null == er ? void 0 : er.name,
          });
        if (null != z) {
          let e = [];
          null != M
            ? e.push("shop load fetch categories error: ".concat(z.message))
            : null != W
              ? e.push("shop load fetch purchase error: ".concat(z.message))
              : e.push("shop load claim error: ".concat(z.message)),
            v.Z.captureMessage(e.join("\n"), {
              tags: {
                isStaff: $.isStaff().toString(),
                preloadEnabled: J.toString(),
                disableCache: Q.toString(),
                includeUnpublished: X.toString(),
              },
            });
        }
        if (null != M)
          return (0, r.jsx)(B.Z, {
            onRetry: es,
            errorOrigin: B.i.SHOP_PAGE,
            errorMessage: M.message,
          });
        let eg =
          null !== (s = null == eh ? void 0 : eh.heroBanner) && void 0 !== s
            ? s
            : void 0;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: O.shop,
            children: [
              (0, r.jsxs)("div", {
                className: O.banner,
                children: [
                  (null == eg ? void 0 : eg.animationSource) != null &&
                  !ee &&
                  et
                    ? (0, r.jsx)(p.Z, {
                        className: O.bannerVideoBackground,
                        src: eg.animationSource,
                        autoPlay: !0,
                        loop: !0,
                      })
                    : (0, r.jsx)("div", {
                        className: O.bannerImage,
                        style: { backgroundImage: "url(".concat(el, ")") },
                      }),
                  (0, r.jsx)("div", {
                    className: l()(O.bannerShadow, O.left, {
                      [O.darker]: null == eg ? void 0 : eg.darker,
                    }),
                    style:
                      (null == eg ? void 0 : eg.gradientLeft) != null
                        ? { background: null == eg ? void 0 : eg.gradientLeft }
                        : void 0,
                  }),
                  (0, r.jsx)("div", {
                    className: l()(O.bannerShadow, O.right, {
                      [O.darker]: null == eg ? void 0 : eg.darker,
                    }),
                    style:
                      (null == eg ? void 0 : eg.gradientRight) != null
                        ? { background: null == eg ? void 0 : eg.gradientRight }
                        : void 0,
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: l()(O.content, O.mainContent),
                children: [
                  (0, r.jsxs)("div", {
                    className: l()(O.heroHeaderContainer),
                    children: [
                      V
                        ? (0, r.jsx)("div", {
                            className: l()(
                              O.heroHeaderBadgeLogoSummaryContainer,
                            ),
                          })
                        : (0, r.jsxs)("div", {
                            className: l()(
                              O.heroHeaderBadgeLogoSummaryContainer,
                            ),
                            children: [
                              (null == er ? void 0 : er.unpublishedAt) !=
                                null &&
                                (0, r.jsx)(m.TextBadge, {
                                  disableColor: !0,
                                  text: Z.intl.string(Z.t["h/uBCQ"]),
                                  className: O.limitedTimeBadge,
                                }),
                              (0, r.jsxs)("div", {
                                className: l()(O.heroLogoNameContainer),
                                children: [
                                  (0, r.jsx)("img", {
                                    className: O.heroHeaderLogo,
                                    src: (0, _.uV)(
                                      null !==
                                        (R =
                                          null !==
                                            (A =
                                              null == er
                                                ? void 0
                                                : er.heroLogo) && void 0 !== A
                                            ? A
                                            : null == er
                                              ? void 0
                                              : er.logo) && void 0 !== R
                                        ? R
                                        : "",
                                      { size: N.n },
                                    ),
                                    alt: null == er ? void 0 : er.name,
                                  }),
                                  (0, r.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    className:
                                      null != eh && eh.showDarkBannerText
                                        ? O.subHeaderTextDark
                                        : O.subHeaderText,
                                    children: null == er ? void 0 : er.summary,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      !V &&
                        (0, r.jsx)("div", {
                          className: O.heroHeaderButtonContainer,
                          children: (0, r.jsx)(m.Button, {
                            className: O.heroHeaderButton,
                            color: m.ButtonColors.WHITE,
                            onClick: () =>
                              H(
                                "shop latest category hero",
                                null == er ? void 0 : er.skuId,
                              ),
                            children: ef,
                          }),
                        }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: l()(O.row, O.feed, O.feedSingleRow),
                    children: V
                      ? (0, r.jsx)(r.Fragment, {
                          children: [void 0, void 0, void 0, void 0].map(
                            (e, t) => (0, r.jsx)(y.K, {}, t),
                          ),
                        })
                      : (0, r.jsx)(r.Fragment, {
                          children: ed.map((e, t) => {
                            let n = x.Z.getCategoryForProduct(e.skuId);
                            return null == e || null == n
                              ? null
                              : (0, r.jsx)(
                                  b.k0,
                                  {
                                    newValue: {
                                      tilePosition: t,
                                      pageSection: "top 4",
                                      categoryPosition: 0,
                                    },
                                    children: (0, r.jsx)(
                                      L.Z,
                                      {
                                        product: e,
                                        category: n,
                                        user: $,
                                        isInFeedView: !0,
                                      },
                                      e.skuId,
                                    ),
                                  },
                                  null == e ? void 0 : e.skuId,
                                );
                          }),
                        }),
                  }),
                  (0, r.jsx)("div", {
                    className: l()(
                      O.section,
                      O.col2,
                      O.featuredBlocksContainer,
                    ),
                    children: (0, r.jsx)(
                      () =>
                        V
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: l()(O.skeleton, O.featuredBlock),
                                  children: (0, r.jsx)("div", {
                                    className: O.skeletonBody,
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: l()(O.skeleton, O.featuredBlock),
                                  children: (0, r.jsx)("div", {
                                    className: O.skeletonBody,
                                  }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)(b.k0, {
                              newValue: {
                                categoryPosition: 1,
                                pageSection: "featured_block",
                              },
                              children: [
                                null != ea && (0, r.jsx)(ep, { category: ea }),
                                null != ei &&
                                  (0, r.jsx)(ep, {
                                    category: ei,
                                    showMostPopularBadge: !0,
                                  }),
                              ],
                            }),
                      {},
                    ),
                  }),
                  (0, r.jsxs)("div", {
                    className: l()(O.row, O.between, O.section),
                    children: [
                      (0, r.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        children: Z.intl.string(Z.t.ivaAAw),
                      }),
                      (0, r.jsxs)(m.Clickable, {
                        className: O.shopAll,
                        onClick: () => H("shop all top"),
                        children: [
                          (0, r.jsx)(m.ServerGridIcon, {}),
                          (0, r.jsx)(m.Text, {
                            variant: "text-sm/medium",
                            children: Z.intl.string(Z.t.xFcotb),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: O.feed,
                    ref: Y,
                    children: V
                      ? (0, r.jsx)(r.Fragment, {
                          children: [...Array(12)].map((e, t) =>
                            (0, r.jsx)(y.K, {}, t + 1),
                          ),
                        })
                      : (0, r.jsx)(r.Fragment, {
                          children: em.slice(0, F).map((e, t) => {
                            let n = x.Z.getCategoryForProduct(e.skuId);
                            return null == e || null == n
                              ? null
                              : (0, r.jsx)(
                                  b.k0,
                                  {
                                    newValue: {
                                      tilePosition: t,
                                      pageSection: "popular picks",
                                      categoryPosition: 2,
                                    },
                                    children: (0, r.jsx)(
                                      L.Z,
                                      {
                                        product: e,
                                        category: n,
                                        user: $,
                                        isInFeedView: !0,
                                      },
                                      e.skuId,
                                    ),
                                  },
                                  null == e ? void 0 : e.skuId,
                                );
                          }),
                        }),
                  }),
                  F >= P.iA &&
                    (0, r.jsxs)("div", {
                      className: O.endOfFeed,
                      children: [
                        (0, r.jsx)(m.Heading, {
                          variant: "heading-md/semibold",
                          children: Z.intl.string(Z.t.Yr70c3),
                        }),
                        (0, r.jsx)(m.Button, {
                          className: O.endOfFeedButton,
                          onClick: () => {
                            H("shop all bottom", void 0, !0);
                          },
                          children: (0, r.jsx)(m.Text, {
                            variant: "text-md/medium",
                            color: "always-white",
                            children: Z.intl.string(Z.t.AfrvRE),
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
    531864: function (e, t, n) {
      "use strict";
      n(47120);
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        s = n(979554),
        o = n(876917),
        c = n(597688),
        d = n(616066),
        u = n(215023),
        m = n(340657);
      let h = { x: 160, y: 160 },
        p = [
          {
            left: 0,
            top: 20,
            rotation: -32,
            size: h,
            skuId: "1212569433839636530",
          },
          {
            left: 110,
            top: 48,
            rotation: -24,
            size: h,
            skuId: "1144308439720394944",
          },
          {
            left: 230,
            top: 12,
            rotation: 8,
            size: h,
            skuId: "1228251144065777765",
          },
          {
            left: 354,
            top: 44,
            rotation: -48,
            size: h,
            skuId: "1262491137394868308",
          },
          {
            left: 470,
            top: 52,
            rotation: 12,
            size: h,
            skuId: "1157407831348228141",
          },
          {
            left: 600,
            top: 28,
            rotation: -4,
            size: h,
            skuId: "1197344326133502032",
          },
          {
            left: 740,
            top: 12,
            rotation: -32,
            size: h,
            skuId: "1232071712695386162",
          },
          {
            left: 870,
            top: 40,
            rotation: -20,
            size: h,
            skuId: "1220513977683935373",
          },
          {
            left: 1010,
            top: 30,
            rotation: 15,
            size: h,
            skuId: "1144046002110738634",
          },
          {
            left: 1140,
            top: 52,
            rotation: -18,
            size: h,
            skuId: "1271174324375519273",
          },
          {
            left: 1270,
            top: 32,
            rotation: 25,
            size: h,
            skuId: "1237653964582031400",
          },
          {
            left: 1400,
            top: 33,
            rotation: -5,
            size: h,
            skuId: "1217625794382401577",
          },
        ];
      t.Z = (e) => {
        let { peaking: t, transitioning: n, style: i } = e,
          h = window.innerHeight,
          [f, g] = a.useState(!1),
          C = p.map((e) => {
            let { skuId: t } = e;
            return c.Z.getProduct(t);
          });
        return (
          a.useEffect(() => {
            n &&
              setTimeout(() => {
                g(!0);
              }, u.lb);
          }, [n]),
          (0, r.jsx)("div", {
            style: i,
            className: l()(m.jumbleWrapper, {
              [m.peaking]: t,
              [m.transitioned]: f,
            }),
            children: p.map((e, t) => {
              var a, i;
              let { top: l, left: c, rotation: p, size: f, skuId: g } = e,
                v = null === (a = C[t]) || void 0 === a ? void 0 : a.items[0],
                b = null === (i = C[t]) || void 0 === i ? void 0 : i.type,
                x = b === s.Z.AVATAR_DECORATION ? 384 : 512;
              return (0, r.jsxs)(
                "div",
                {
                  className: m.asset,
                  style: {
                    top: n ? -h - x : l,
                    left: n ? "".concat(c - 75 - 350 * Math.random()) : c,
                    transform: "rotate(".concat(p, "deg)"),
                    height: f.y,
                    width: f.x,
                    transitionDelay: "".concat(Math.random() / 3, "s"),
                    transitionDuration: "".concat(
                      u.lb - 200 * Math.random(),
                      "ms",
                    ),
                  },
                  children: [
                    null != v &&
                      b === s.Z.AVATAR_DECORATION &&
                      (0, r.jsx)(d.R, { item: v }),
                    null != v &&
                      b === s.Z.PROFILE_EFFECT &&
                      (0, r.jsx)(o.Z, {
                        profileEffectId: v.id,
                        isPurchased: !1,
                        isHovering: !0,
                      }),
                  ],
                },
                g + t,
              );
            }),
          })
        );
      };
    },
    977395: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(91641),
        a = n(166350),
        i = n(987338);
      let l = new r.E(
        [a.NR, a.ZI, a.Ob, a.uc, a.m1],
        i.$P.COLLECTIBLES_SHOP_OPEN,
        { location: "collectibles shop open" },
      );
    },
    166350: function (e, t, n) {
      "use strict";
      n.d(t, {
        NR: function () {
          return i;
        },
        Ob: function () {
          return o;
        },
        ZI: function () {
          return l;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return s;
        },
      });
      var r = n(987170),
        a = n(987338);
      let i = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_vanilla",
          label: "CTP collectibles shop open - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        l = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_filters",
          label: "CTP collectibles shop open - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        s = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_multiple_buckets",
          label: "CTP collectibles shop open - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        o = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_everyone",
          label: "CTP collectibles shop open - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        c = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_collectibles_shop_open_uneven_buckets",
          label: "CTP collectibles shop open - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    290026: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(979554),
        i = n(442837),
        l = n(597688),
        s = n(365943),
        o = n(25251);
      let c = () => {
        let e = (0, i.e7)([l.Z], () => l.Z.products);
        r.useEffect(() => {
          let t = [...e.values()]
            .filter((e) => e.type === a.Z.PROFILE_EFFECT)
            .some((e) => {
              let t = e.items[0].id;
              return null != t && null == o.Z.getProfileEffectById(t);
            });
          (0, s.z)(t);
        }, [e]);
      };
    },
    471731: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(325767);
      function i(e) {
        let {
          width: t = 124,
          height: n = 24,
          color: i = "currentColor",
          foreground: l,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 124 24",
          children: (0, r.jsxs)("g", {
            fill: i,
            className: l,
            children: [
              (0, r.jsx)("path", {
                d: "M26.2421 2.00996C24.2367 1.07098 22.0925 0.388543 19.8509 0C19.5755 0.498132 19.2539 1.16812 19.0322 1.70112C16.6492 1.34247 14.2881 1.34247 11.949 1.70112C11.7273 1.16812 11.3983 0.498132 11.1206 0C8.87648 0.388543 6.72984 1.07347 4.72453 2.01494C0.679785 8.132 -0.41668 14.0971 0.131553 19.9776C2.81424 21.9826 5.41408 23.2005 7.97006 23.9975C8.60114 23.1283 9.16399 22.2042 9.64888 21.2304C8.72541 20.8792 7.84093 20.4458 7.00517 19.9427C7.2269 19.7783 7.44376 19.6065 7.65331 19.4296C12.7507 21.8157 18.289 21.8157 23.3255 19.4296C23.5374 19.6065 23.7543 19.7783 23.9736 19.9427C23.1354 20.4483 22.2485 20.8817 21.325 21.2329C21.8099 22.2042 22.3703 23.1308 23.0038 24C25.5622 23.203 28.1645 21.9851 30.8472 19.9776C31.4905 13.1606 29.7483 7.25031 26.2421 2.00996ZM10.3433 16.3611C8.81313 16.3611 7.55828 14.9315 7.55828 13.1905C7.55828 11.4496 8.78632 10.0174 10.3433 10.0174C11.9003 10.0174 13.1551 11.4471 13.1283 13.1905C13.1308 14.9315 11.9003 16.3611 10.3433 16.3611ZM20.6355 16.3611C19.1053 16.3611 17.8504 14.9315 17.8504 13.1905C17.8504 11.4496 19.0785 10.0174 20.6355 10.0174C22.1924 10.0174 23.4473 11.4471 23.4205 13.1905C23.4205 14.9315 22.1924 16.3611 20.6355 16.3611Z",
              }),
              (0, r.jsx)("path", {
                d: "M41.6289 6.12256H48.2808C49.8841 6.12256 51.2388 6.3791 52.3499 6.88968C53.4586 7.40027 54.2894 8.1126 54.8401 9.02418C55.3908 9.93576 55.6685 10.9793 55.6685 12.1549C55.6685 13.3056 55.381 14.3492 54.806 15.2832C54.2309 16.2197 53.3562 16.9594 52.1793 17.5049C51.0025 18.0503 49.5454 18.3243 47.8032 18.3243H41.6289V6.12256ZM47.735 15.2234C48.8144 15.2234 49.6453 14.947 50.2252 14.3965C50.8051 13.8436 51.0951 13.0914 51.0951 12.1375C51.0951 11.2533 50.8368 10.5485 50.3202 10.0204C49.8037 9.49242 49.0215 9.22592 47.9762 9.22592H45.8954V15.2234H47.735Z",
              }),
              (0, r.jsx)("path", {
                d: "M65.6272 18.3094C64.7061 18.0654 63.8752 17.7117 63.137 17.2459V14.3518C63.6949 14.7926 64.443 15.1563 65.3811 15.4427C66.3191 15.7266 67.2256 15.8686 68.1027 15.8686C68.5121 15.8686 68.8215 15.8138 69.0311 15.7042C69.2406 15.5946 69.3454 15.4626 69.3454 15.3107C69.3454 15.1363 69.2894 14.9919 69.1748 14.8748C69.0603 14.7578 68.8386 14.6606 68.5096 14.5784L66.4629 14.1077C65.2909 13.8287 64.46 13.4427 63.9654 12.947C63.4708 12.4539 63.2247 11.8063 63.2247 11.0043C63.2247 10.3294 63.4391 9.74406 63.8728 9.24343C64.3041 8.74281 64.9181 8.35676 65.7149 8.08528C66.5116 7.8113 67.4424 7.67432 68.5121 7.67432C69.4672 7.67432 70.342 7.77892 71.1387 7.98814C71.9355 8.19736 72.5934 8.46386 73.1172 8.79013V11.5274C72.5812 11.2011 71.9672 10.9446 71.2654 10.7503C70.5661 10.5585 69.8473 10.4639 69.1066 10.4639C68.0369 10.4639 67.5033 10.6507 67.5033 11.0218C67.5033 11.1961 67.5862 11.3256 67.7519 11.4128C67.9176 11.5 68.2221 11.5896 68.6631 11.6843L70.3688 11.9981C71.4823 12.1949 72.3132 12.5411 72.859 13.0342C73.4047 13.5274 73.6777 14.2571 73.6777 15.2235C73.6777 16.282 73.2269 17.1214 72.3229 17.7441C71.4189 18.3667 70.1373 18.6781 68.4755 18.6781C67.4985 18.6756 66.5482 18.5535 65.6272 18.3094Z",
              }),
              (0, r.jsx)("path", {
                d: "M77.703 17.9432C76.726 17.455 75.9877 16.7925 75.4955 15.9557C75.0033 15.1188 74.7548 14.1773 74.7548 13.1312C74.7548 12.0852 75.0106 11.1487 75.5223 10.3243C76.034 9.49986 76.7844 8.85229 77.7737 8.38155C78.763 7.91082 79.9447 7.6767 81.3214 7.6767C83.027 7.6767 84.4426 8.04282 85.5683 8.77508V11.9656C85.1712 11.6867 84.7082 11.46 84.1795 11.2857C83.6508 11.1113 83.0855 11.0241 82.4812 11.0241C81.4237 11.0241 80.5977 11.2209 80.0007 11.6169C79.4038 12.0129 79.1041 12.5285 79.1041 13.1686C79.1041 13.7962 79.394 14.3093 79.9739 14.7128C80.5538 15.1138 81.3945 15.3156 82.4982 15.3156C83.066 15.3156 83.6264 15.2309 84.1795 15.064C84.7302 14.8946 85.2053 14.6879 85.6025 14.4438V17.5297C84.3525 18.2969 82.9027 18.6804 81.2531 18.6804C79.8643 18.6755 78.6801 18.4314 77.703 17.9432Z",
              }),
              (0, r.jsx)("path", {
                d: "M89.8227 17.9433C88.8383 17.4551 88.0878 16.7876 87.5713 15.9383C87.0547 15.089 86.794 14.1425 86.794 13.0965C86.794 12.0504 87.0523 11.1164 87.5713 10.297C88.0903 9.47754 88.8359 8.83495 89.8154 8.3692C90.7925 7.90345 91.9596 7.67181 93.3119 7.67181C94.6642 7.67181 95.8313 7.90345 96.8084 8.3692C97.7855 8.83495 98.5311 9.47256 99.0428 10.287C99.5544 11.1015 99.8103 12.0354 99.8103 13.094C99.8103 14.1401 99.5544 15.0865 99.0428 15.9358C98.5311 16.7851 97.783 17.4526 96.7987 17.9408C95.8143 18.429 94.652 18.6731 93.3095 18.6731C91.9669 18.6731 90.8046 18.4315 89.8227 17.9433ZM95.0053 14.8499C95.4195 14.4265 95.6291 13.8661 95.6291 13.1687C95.6291 12.4713 95.422 11.9159 95.0053 11.5049C94.5911 11.0915 94.0258 10.8848 93.3095 10.8848C92.5809 10.8848 92.0108 11.0915 91.5941 11.5049C91.1799 11.9184 90.9728 12.4713 90.9728 13.1687C90.9728 13.8661 91.1799 14.4265 91.5941 14.8499C92.0083 15.2733 92.5809 15.4875 93.3095 15.4875C94.0258 15.485 94.5911 15.2733 95.0053 14.8499Z",
              }),
              (0, r.jsx)("path", {
                d: "M110.059 8.31931V12.0852C109.625 11.7938 109.065 11.6493 108.37 11.6493C107.461 11.6493 106.76 11.9308 106.272 12.4937C105.782 13.0565 105.539 13.9333 105.539 15.1188V18.3268H101.36V8.12753H105.454V11.3704C105.68 10.1848 106.048 9.31059 106.555 8.74521C107.059 8.18232 107.712 7.90088 108.507 7.90088C109.108 7.90088 109.625 8.04036 110.059 8.31931Z",
              }),
              (0, r.jsx)("path", {
                d: "M123.942 5.77393V18.3268H119.763V16.0429C119.41 16.9022 118.874 17.5572 118.153 18.0056C117.432 18.4514 116.54 18.6755 115.482 18.6755C114.537 18.6755 113.713 18.4414 113.009 17.9707C112.305 17.5 111.762 16.8549 111.379 16.0354C110.999 15.216 110.806 14.2895 110.806 13.2534C110.794 12.1849 110.997 11.226 111.413 10.3767C111.827 9.52735 112.415 8.86483 113.17 8.38912C113.925 7.9134 114.788 7.6743 115.755 7.6743C117.746 7.6743 119.081 8.55848 119.763 10.3244V5.77393H123.942ZM119.14 14.7802C119.566 14.3567 119.778 13.8063 119.778 13.1338C119.778 12.4838 119.571 11.9533 119.157 11.5473C118.742 11.1413 118.175 10.9371 117.461 10.9371C116.757 10.9371 116.194 11.1438 115.772 11.5572C115.351 11.9707 115.141 12.5062 115.141 13.1687C115.141 13.8312 115.351 14.3717 115.772 14.7901C116.194 15.2085 116.749 15.4178 117.444 15.4178C118.148 15.4153 118.713 15.2036 119.14 14.7802Z",
              }),
              (0, r.jsx)("path", {
                d: "M59.1896 9.21341C60.3401 9.21341 61.2728 8.35701 61.2728 7.30058C61.2728 6.24416 60.3401 5.38776 59.1896 5.38776C58.039 5.38776 57.1063 6.24416 57.1063 7.30058C57.1063 8.35701 58.039 9.21341 59.1896 9.21341Z",
              }),
              (0, r.jsx)("path", {
                d: "M57.1044 10.531C58.3811 11.0939 59.9649 11.1188 61.2709 10.531V18.3816H57.1044V10.531Z",
              }),
            ],
          }),
        });
      }
    },
    74708: function (e, t, n) {
      "use strict";
      e.exports = {
        partialOwnStateContainer: "partialOwnStateContainer_c27df5",
        partiallyOwnedDisclaimer: "partiallyOwnedDisclaimer_c27df5",
        iconWrapper: "iconWrapper_c27df5",
        infoIcon: "infoIcon_c27df5",
      };
    },
    367797: function (e, t, n) {
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
    161386: function (e, t, n) {
      "use strict";
      e.exports = {
        badgeDark: "badgeDark_e228ee",
        badgeLight: "badgeLight_e228ee",
      };
    },
    213731: function (e, t, n) {
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
        hiddenWumpus: "hiddenWumpus_e77fa3",
        hiddenWumpusEnabled: "hiddenWumpusEnabled_e77fa3",
        categories: "categories_e77fa3",
        skeletons: "skeletons_e77fa3",
      };
    },
    462972: function (e, t, n) {
      "use strict";
      e.exports = {
        shopBanner: "shopBanner_be5025",
        animationAsset: "animationAsset_be5025",
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
    564032: function (e, t, n) {
      "use strict";
      e.exports = {
        banner: "banner_d396b3",
        mainContent: "mainContent_d396b3",
        animatedLayer: "animatedLayer_d396b3",
        summary: "summary_d396b3",
      };
    },
    65297: function (e, t, n) {
      "use strict";
      e.exports = {
        giftButton: "giftButton_e70ca4",
        giftButtonInner: "giftButtonInner_e70ca4",
      };
    },
    454801: function (e, t, n) {
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
    416806: function (e, t, n) {
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
    747157: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_ea08b2",
        discount: "discount_ea08b2",
      };
    },
    17504: function (e, t, n) {
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
    352177: function (e, t, n) {
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
        variantsGroup: "variantsGroup_c23530",
        profileEffectShopPreview: "profileEffectShopPreview_c23530",
        productName: "productName_c23530",
        newBadge: "newBadge_c23530",
        partiallyOwned: "partiallyOwned_c23530",
        preview: "preview_c23530",
      };
    },
    250365: function (e, t, n) {
      "use strict";
      e.exports = { snowflake: "snowflake_a8ba4a" };
    },
    974657: function (e, t, n) {
      "use strict";
      e.exports = { subscribeNow: "subscribeNow_e2cadd" };
    },
    591014: function (e, t, n) {
      "use strict";
      e.exports = {
        variantsPanel: "variantsPanel_dee9c5",
        variantLabel: "variantLabel_dee9c5",
        variantsList: "variantsList_dee9c5",
        colorVariant: "colorVariant_dee9c5",
        colorSwatch: "colorSwatch_dee9c5",
        open: "open_dee9c5",
        selected: "selected_dee9c5",
        purchasedIndicator: "purchasedIndicator_dee9c5",
        minimalState: "minimalState_dee9c5",
      };
    },
    297491: function (e, t, n) {
      "use strict";
      e.exports = {
        spark: "spark_d4ea10",
        productName: "productName_d4ea10",
        notInteractive: "notInteractive_d4ea10",
      };
    },
    632007: function (e, t, n) {
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
        bannerVideoBackground: "bannerVideoBackground_ebba41",
        bannerShadow: "bannerShadow_ebba41",
        left: "left_ebba41",
        right: "right_ebba41",
        darker: "darker_ebba41",
        featuredBlocksContainer: "featuredBlocksContainer_ebba41",
        featuredBlock: "featuredBlock_ebba41",
        featuredBlockBadge: "featuredBlockBadge_ebba41",
        featuredBlockButton: "featuredBlockButton_ebba41",
        mainContent: "mainContent_ebba41",
        heroHeaderContainer: "heroHeaderContainer_ebba41",
        heroHeaderBadgeLogoSummaryContainer:
          "heroHeaderBadgeLogoSummaryContainer_ebba41",
        heroLogoNameContainer: "heroLogoNameContainer_ebba41",
        heroHeaderLogo: "heroHeaderLogo_ebba41",
        subHeaderText: "subHeaderText_ebba41",
        subHeaderTextDark: "subHeaderTextDark_ebba41",
        heroHeaderButtonContainer: "heroHeaderButtonContainer_ebba41",
        heroHeaderButton: "heroHeaderButton_ebba41",
        limitedTimeBadge: "limitedTimeBadge_ebba41",
        shopAll: "shopAll_ebba41",
        feed: "feed_ebba41",
        feedSingleRow: "feedSingleRow_ebba41",
        endOfFeed: "endOfFeed_ebba41",
        endOfFeedButton: "endOfFeedButton_ebba41",
        skeleton: "skeleton_ebba41",
        skeletonBody: "skeletonBody_ebba41",
      };
    },
    340657: function (e, t, n) {
      "use strict";
      e.exports = {
        jumbleWrapper: "jumbleWrapper_abcfcd",
        asset: "asset_abcfcd",
        peaking: "peaking_abcfcd",
        transitioned: "transitioned_abcfcd",
      };
    },
    781385: function (e, t) {
      "use strict";
      t.Z =
        "https://cdn.discordapp.com/assets/content/40910f226cf80d19a731aae6618c1893c3a383abcffb58a85561e0036f846af2.png";
    },
    585616: function (e, t) {
      "use strict";
      t.Z =
        "https://cdn.discordapp.com/assets/content/a892ebd2d42e6280e4db73ad66576388ec723c89b64542dc1a9a8a8b180d35e7.png";
    },
  },
]);
//# sourceMappingURL=b50219aaecae17914136.js.map
