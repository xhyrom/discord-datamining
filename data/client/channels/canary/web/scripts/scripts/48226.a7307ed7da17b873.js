"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48226"],
  {
    447453(e, s, t) {
      t.d(s, { S: () => v });
      var n = t(627968),
        i = t(64700),
        a = t(503698),
        l = t.n(a),
        r = t(925747),
        c = t(17928),
        o = t(866323),
        u = t(834730),
        d = t(475358),
        g = t(775602),
        h = t(425763),
        m = t(985018),
        p = t(493442);
      function v(e) {
        let { className: s } = e,
          t = [
            {
              keybinds: ["Spacebar", "Enter"],
              name: m.intl.string(m.t["cs/HVH"]),
            },
            { keybinds: ["up", "down"], name: m.intl.string(m.t.dmMqay) },
            { keybinds: ["ESC"], name: m.intl.string(m.t["1ioMJQ"]) },
          ],
          a = (0, c.bG)([g.A], () => g.A.useReducedMotion),
          v = (0, h.VU)();
        return (0, o.p)(
          v,
          {
            enter: {
              from: { opacity: 0, y: 80 * !a },
              to: { opacity: 1, y: 0 },
            },
            leave: { opacity: 0, y: 80 * !a },
            config: r.config.stiff,
          },
          "animate-always",
        )((e, a) =>
          a
            ? (0, n.jsx)("div", {
                className: l()(p.lY, s),
                children: (0, n.jsx)(r.animated.div, {
                  className: p.kL,
                  style: e,
                  children: t.map((e, s) => {
                    let { keybinds: a, name: l } = e;
                    return (0, n.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, n.jsx)(u.E, {
                            variant: "text-md/semibold",
                            className: p.nx,
                            children: l,
                          }),
                          a.map((e) =>
                            (0, n.jsx)(
                              d.e,
                              { shortcut: e, className: p.LE },
                              e,
                            ),
                          ),
                          s < t.length - 1
                            ? (0, n.jsx)("span", { className: p.me })
                            : null,
                        ],
                      },
                      l,
                    );
                  }),
                }),
              })
            : null,
        );
      }
    },
    973912(e, s, t) {
      t.d(s, { A: () => B });
      var n = t(627968),
        i = t(64700),
        a = t(503698),
        l = t.n(a),
        r = t(17928),
        c = t(492518),
        o = t(32731),
        u = t(287809),
        d = t(909536),
        g = t(594832),
        h = t(862772),
        m = t(575593),
        p = t(691540),
        v = t(857250),
        w = t(97483),
        I = t(765178),
        f = t(793574),
        E = t(688810),
        x = t(274681),
        y = t(183555),
        A = t(661492),
        k = t(808247),
        S = t(212387),
        L = t(460442),
        M = t(699976),
        j = t(652215),
        R = t(518477),
        O = t(985018),
        _ = t(316587),
        T = t(997990);
      let C = M.Z.SIZE_90;
      function F(e) {
        let {
            sku: s,
            wishlistOwner: t,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: c,
            onClick: o,
            "aria-label": u,
            wishlistId: d,
            children: g,
          } = e,
          { trackUserProfileWishlistAction: h } = (0, y.NJ)(),
          m = i.useCallback(() => {
            h({
              wishlistId: d,
              action: R.Mq.WISHLIST_ITEM_CLICKED,
              skuId: s.id,
              productLines: new Set([s.productLine]),
            }),
              o();
          }, [o, s.id, s.productLine, h, d]);
        return (0, n.jsx)(S.A, {
          sku: s,
          user: t,
          spec: C,
          cardStyle: l()(_.Nr, a),
          skuPreviewStyle: l()(_.ev, r),
          onHoverOrFocusChange: c,
          onClick: m,
          "aria-label": u,
          children: g,
        });
      }
      function N(e) {
        let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: r,
            skuPreviewStyle: c,
            wishlistOwner: o,
            onAddSuccess: u,
            ...d
          } = e,
          [g, h] = i.useState(!1),
          m = i.useCallback(async () => {
            if (!g) {
              h(!0);
              try {
                await k.A.addSkuToWishlist(s.id, t),
                  u?.(),
                  r?.({ tabSection: R.RP.WISHLIST });
              } catch (e) {
                (0, p.P0)((0, v.o)(O.intl.string(O.t.F8FvUy), w.Ck.FAILURE)),
                  I.O.announce(O.intl.string(O.t.F8FvUy));
              } finally {
                h(!1);
              }
            }
          }, [s, t, g, r, u]),
          f = i.useMemo(() => l()({ [_.zW]: a || g }, c), [a, g, c]);
        return (0, n.jsx)(F, {
          "aria-label": O.intl.formatToPlainString(O.t.xRjJBe, {
            productName: (0, A.TC)(s),
          }),
          sku: s,
          wishlistOwner: o,
          skuPreviewStyle: f,
          onClick: m,
          isHoveringOrFocusing: a,
          ...d,
          children: (0, n.jsx)(L.oU, { isHoveringOrFocusing: a, loading: g }),
        });
      }
      function b(e) {
        let { sku: s, analyticsLocations: t, ...i } = e,
          { analyticsLocations: a } = (0, E.Ay)(
            ...(t ?? []),
            f.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
          );
        return (0, n.jsx)(N, { sku: s, analyticsLocations: a, ...i });
      }
      function H(e) {
        let { sku: s, ...t } = e,
          a = i.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
              case m.R.PROFILE_EFFECT:
              case m.R.NAMEPLATE:
                return;
              case m.R.AVATAR_DECORATION:
                return _.ML;
              default:
                return l()(_.ML, _.ZY);
            }
          }, [s?.tenantMetadata?.collectibles?.type]);
        return (0, n.jsx)(N, { sku: s, skuPreviewStyle: a, ...t });
      }
      function P(e) {
        let { sku: s, ...t } = e;
        return (0, n.jsx)(N, {
          sku: s,
          skuPreviewStyle: T.MO,
          onAddSuccess: x.w,
          ...t,
        });
      }
      function U(e) {
        let { sku: s, ...t } = e,
          [a, l] = i.useState(!1);
        switch (s.productLine) {
          case j.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(b, {
              sku: s,
              isHoveringOrFocusing: a,
              setIsHoveringOrFocusing: l,
              ...t,
            });
          case j.EZt.COLLECTIBLES:
            return (0, n.jsx)(H, {
              sku: s,
              isHoveringOrFocusing: a,
              setIsHoveringOrFocusing: l,
              ...t,
            });
          case j.EZt.PREMIUM:
            return (0, n.jsx)(P, {
              sku: s,
              isHoveringOrFocusing: a,
              setIsHoveringOrFocusing: l,
              ...t,
            });
          default:
            return null;
        }
      }
      var Z = t(788868),
        V = t(817990);
      function W(e) {
        let {
            wishlist: s,
            handleOpenUserProfileModal: t,
            analyticsLocations: a,
            numWishlistItemsToRecommend: g,
            maxWishlistItemsToShow: h = g,
            className: m,
            isLoading: p,
            recommendations: v,
          } = e,
          w = (0, r.bG)([u.default], () => u.default.getUser(s?.userId)),
          I = (0, d.Gh)("add_to_wishlist_grid_suggested_nitro"),
          f = i.useMemo(() => new Set(s?.items.map((e) => e.skuId) ?? []), [s]),
          E = I && !f.has(Z.pe.TIER_2),
          x = i.useMemo(
            () =>
              E
                ? new o.A({
                    id: Z.pe.TIER_2,
                    productLine: j.EZt.PREMIUM,
                    name: O.intl.string(O.t.lG6a5x),
                    features: new Set(),
                    genres: new Set(),
                    manifests: [],
                    availableRegions: [],
                    locales: [],
                    bundledSkuIds: [],
                    selectedOptions: [],
                    eligibleOffers: [],
                    prices: {},
                  })
                : null,
            [E],
          ),
          y = v
            .filter((e) => !f.has(e.id))
            .slice(0, null != x ? Math.max(0, h - 1) : h),
          A = null != x ? [x, ...y] : y;
        return p
          ? (0, n.jsx)("div", {
              className: V.g4,
              children: (0, n.jsx)(c.k, {}),
            })
          : 0 === A.length
            ? null
            : (0, n.jsx)("ul", {
                className: l()(V.Vg, m),
                children: A.map((e) =>
                  (0, n.jsx)(
                    U,
                    {
                      sku: e,
                      wishlistId: s?.id,
                      wishlistOwner: w,
                      handleOpenUserProfileModal: t,
                      analyticsLocations: a,
                    },
                    e.id,
                  ),
                ),
              });
      }
      function B(e) {
        let { userId: s, numWishlistItemsToRecommend: t, ...i } = e,
          { recommendations: a, status: l } = (0, h.Ul)({
            userId: s,
            numItems: t,
            source: g.B5.USER_PROFILE,
          });
        return (0, n.jsx)(W, {
          isLoading: "loading" === l,
          recommendations: a,
          numWishlistItemsToRecommend: t,
          ...i,
        });
      }
    },
    877784(e, s, t) {
      t.d(s, { q: () => r });
      var n = t(627968);
      t(64700);
      var i = t(661531),
        a = t(996682),
        l = t(27989);
      let r = (e) => {
        let {
            size: s = "md",
            width: t,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...u
          } = e,
          d = (0, l.J)(s),
          g = d?.width ?? t,
          h = d?.height ?? r;
        return (0, n.jsxs)("svg", {
          ...(0, a.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof c ? c : c.css,
              d: "M10.89 11.79A3 3 0 1 0 13.1 6.2a3 3 0 0 0-2.22 5.58Z",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof c ? c : c.css,
              fillRule: "evenodd",
              d: "M11.91 16.43a.66.66 0 0 0-.16.08 3.16 3.16 0 0 1-2.85.27 3.14 3.14 0 0 1-1.88-2.16.67.67 0 0 0-.5-.49A3.14 3.14 0 0 1 4.5 9.45a.67.67 0 0 0 0-.7 3.14 3.14 0 0 1 1.88-4.73.67.67 0 0 0 .49-.5 3.14 3.14 0 0 1 4.68-2.02c.22.13.5.13.7 0a3.14 3.14 0 0 1 4.73 1.88c.07.24.26.44.5.49a3.14 3.14 0 0 1 2.02 4.68.67.67 0 0 0 0 .7 3.14 3.14 0 0 1-1.88 4.73.67.67 0 0 0-.49.5 3.14 3.14 0 0 1-4.68 2.02.66.66 0 0 0-.54-.07Zm-1.76-2.79a5 5 0 1 0 3.7-9.28 5 5 0 0 0-3.7 9.28Z",
              clipRule: "evenodd",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof c ? c : c.css,
              d: "M12.11 17.46a4.13 4.13 0 0 1-5.35-1.1l-.57 5.5a1 1 0 0 0 1.47.99l4.1-2.22a.5.5 0 0 1 .48 0l4.1 2.22a1 1 0 0 0 1.47-.98l-.56-5.42a4.12 4.12 0 0 1-5.14 1Z",
              className: o,
            }),
          ],
        });
      };
    },
    148795(e, s, t) {
      t.d(s, { d: () => r });
      var n = t(627968);
      t(64700);
      var i = t(661531),
        a = t(996682),
        l = t(27989);
      let r = (e) => {
        let {
            size: s = "md",
            width: t,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...u
          } = e,
          d = (0, l.J)(s),
          g = d?.width ?? t,
          h = d?.height ?? r;
        return (0, n.jsx)("svg", {
          ...(0, a.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: g,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M9 19a3 3 0 0 0 3 3 1 1 0 0 0 1-1v-2a3 3 0 0 1 .19-1.05l4.26-2.88a7.9 7.9 0 0 0 3.26-8.4c-.43-1.77-1.44-3.42-3.14-4.07a8.3 8.3 0 0 0-2.95-.6H6.59a2.09 2.09 0 0 0-1.93 2.88l.4.97a.2.2 0 0 1-.08.24l-.54.33a1.99 1.99 0 0 0-.8 2.44l.43 1.02c.03.07.02.16-.03.23l-.6.9A1.92 1.92 0 0 0 5.04 14h5.39A8 8 0 0 0 9 18.56V19Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=48226.a7307ed7da17b873.js.map
