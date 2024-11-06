"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31269"],
  {
    269128: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        a = t(772848),
        l = t(841261);
      let c = (0, a.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(l.button, t, { [l.open]: n, [l.withHighlight]: r }),
          children: [
            r &&
              (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                  id: c,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, i.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, i.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(c, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(c, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    17894: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(525654),
        r = t.n(i),
        o = t(39612),
        a = t(271579),
        l = t(756647),
        c = t(232567),
        s = t(703656),
        d = t(314897),
        u = t(896797),
        p = t(626135),
        f = t(954824),
        b = t(981631);
      async function m(e) {
        var n, t;
        let i = null === (n = r().os) || void 0 === n ? void 0 : n.family;
        if ("Android" === i || "iOS" === i) {
          let n =
              null !== (t = d.default.getFingerprint()) && void 0 !== t
                ? t
                : d.default.getId(),
            i = (0, a.WS)();
          if (null == n && d.default.isAuthenticated())
            try {
              await (0, c.k)(), (n = d.default.getId());
            } catch {}
          return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function h(e) {
        let n = await m(e),
          t = (0, a.zS)(n);
        null != t &&
          p.default.track(b.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource,
          }),
          f.Z.launch(n, (e) => {
            !e && (0, s.dL)(u.Z.fallbackRoute);
          });
      }
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        v: function () {
          return h;
        },
      }),
        t(47120);
      var i,
        r,
        o,
        a = t(200651),
        l = t(192379),
        c = t(120356),
        s = t.n(c),
        d = t(569619),
        u = t(481060),
        p = t(981631),
        f = t(388032),
        b = t(404934);
      function m(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((o = i || (i = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let h = {
        container: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: i } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: i ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: t ? 0.5 : 1,
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
        clearIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: t ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: t ? 0.3 : 1,
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
        option: (e, n) => {
          let { isSelected: t, isFocused: i } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : i
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
      class x extends (r = l.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: i,
              valueRenderer: r,
              optionRenderer: o,
              multiValueRenderer: l,
              options: c,
              value: p,
              autofocus: m,
              disabled: x,
              clearable: g,
              searchable: _,
              styleOverrides: v,
              isMulti: C,
              placeholder: S,
              filterOption: k,
              closeMenuOnSelect: y = !0,
              ...j
            } = this.props,
            T = { ...j };
          null != m && (T.autoFocus = m),
            null != x && (T.isDisabled = x),
            null != g && (T.isClearable = g),
            null != _ && (T.isSearchable = _);
          let P = { IndicatorSeparator: () => null };
          null != o &&
            (P.Option = (e) =>
              (0, a.jsx)(d.wx.Option, { ...e, children: o(e.data) })),
            null != r &&
              (P.SingleValue = (e) =>
                (0, a.jsx)(d.wx.SingleValue, { ...e, children: r(e.data) })),
            null != l && (P.MultiValue = (e) => l(e.data));
          if (C && Array.isArray(p)) {
            let n = {};
            c.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = p.map((e) => n[String(e)]));
          } else e = null != p ? c.find((e) => e.value === p) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: s()(b.select, n, { [b.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(d.ZP, {
                  ...T,
                  className: t,
                  ref: this._selectRef,
                  isMulti: C,
                  components: P,
                  options: c,
                  styles: null != v ? v : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: y,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : f.intl.string(f.t.XqMe3N),
                  noOptionsMessage: () => f.intl.string(f.t["Xe+fJC"]),
                  filterOption: k,
                }),
                null != i
                  ? (0, a.jsx)("div", {
                      className: b.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "_selectRef", l.createRef()),
            m(this, "_containerRef", l.createRef()),
            m(this, "state", { isFocused: !1, isOpen: !1 }),
            m(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            m(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            m(this, "handleKeyDown", (e) => {
              e.which === p.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            m(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            m(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      m(x, "MenuPlacements", i);
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(512722),
        o = t.n(r),
        a = t(481060),
        l = t(563132),
        c = t(698708),
        s = t(614277),
        d = t(388032),
        u = t(525550);
      function p(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: r,
            application: p,
          } = (0, l.usePaymentContext)();
        o()(null != r, "Expected selectedSkuId"),
          o()(null != p, "Expected application");
        let f = t[r];
        o()(null != f, "Expected sku");
        let b = d.intl.formatToPlainString(d.t.wK0IbG, {
          applicationName: p.name,
          itemName: f.name,
        });
        return (0, i.jsxs)(s.C3, {
          children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: b }),
                (0, i.jsx)("div", { className: u.divider }),
                (0, i.jsx)(a.Button, {
                  onClick: n,
                  children: d.intl.string(d.t.cpT0Cg),
                }),
              ],
            }),
          ],
        });
      }
    },
    961830: function (e, n, t) {
      t.d(n, {
        F7: function () {
          return g;
        },
        WA: function () {
          return f;
        },
        s2: function () {
          return b;
        },
        wo: function () {
          return x;
        },
        yp: function () {
          return _;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(853872),
        o = t(409813),
        a = t(276442),
        l = t(793541),
        c = t(380898),
        s = t(713316),
        d = t(710094),
        u = t(865921),
        p = t(388032);
      let f = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        b = {
          key: o.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(a.J, {
                ...e,
                breadcrumbSteps: [
                  o.h8.ADD_PAYMENT_STEPS,
                  o.h8.REVIEW,
                  o.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(r.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(o.h8.REVIEW, {
                        trackedFromStep: o.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        m = {
          key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(c.Z, {}),
        },
        h = {
          key: o.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(l.Z, {}),
          options: { renderHeader: !0 },
        },
        x = {
          key: o.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
          options: { useBreadcrumbLabel: () => p.intl.string(p.t.QBnNHh) },
        },
        g = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(s.w, { ...e }) },
        _ = [m, h];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        l = t(399606),
        c = t(89057),
        s = t(597688),
        d = t(987209),
        u = t(563132),
        p = t(409813),
        f = t(456251),
        b = t(981631);
      function m(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: o,
            hasFetchedSkus: m,
            paymentSources: h,
            hasFetchedPaymentSources: x,
            application: g,
            skusById: _,
            selectedSkuId: v,
          } = (0, u.usePaymentContext)(),
          { isGift: C } = (0, d.wD)(),
          [S, k] = r.useState(!0),
          y = (0, l.e7)([s.Z], () => s.Z.isFetchingCategories);
        return (r.useEffect(() => {
          let e = null != g;
          if (!!m && !!x && !!e) k(y);
        }, [m, x, g, y]),
        r.useEffect(() => {
          if (S || o) return;
          a()(null != v, "Expected selectedSkuId");
          let e = _[v];
          if (
            C &&
            (null == e ? void 0 : e.productLine) === b.POd.COLLECTIBLES
          ) {
            n(p.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(h).length) {
            n(p.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(p.h8.REVIEW);
        }, [S, o, n, h, C, _, v]),
        S)
          ? (0, i.jsx)(f.Z, {})
          : o
            ? (0, i.jsx)(c.Vq, { onClose: t })
            : null;
      }
    },
    721165: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(442837),
        a = t(131388),
        l = t(171246),
        c = t(689011),
        s = t(931905),
        d = t(430824),
        u = t(563132),
        p = t(409813),
        f = t(586585),
        b = t(614277),
        m = t(750143),
        h = t(388032);
      function x(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            subscriptionMetadataRequest: x,
            selectedSku: g,
            selectedStoreListing: _,
            application: v,
          } = (0, u.usePaymentContext)(),
          C = (0, a.Z)(m.i),
          S = (0, o.e7)([d.Z], () =>
            d.Z.getGuild(null == x ? void 0 : x.guild_id),
          ),
          k = r.useCallback(() => n(p.h8.REVIEW), [n]);
        if (null == g) return null;
        let y = (0, l.KW)(g.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(b.C3, {
              children: C
                ? (0, i.jsx)(s.h, {
                    confirmCta: h.intl.string(h.t.PBHFSk),
                    onConfirm: k,
                    onCancel: t,
                    title: h.intl.format(h.t["6n6oXF"], { tier: g.name }),
                    subtitle: y
                      ? h.intl.string(h.t.lzAoKC)
                      : h.intl.formatToPlainString(h.t["GqaY/v"], {
                          guildName: null == S ? void 0 : S.name,
                        }),
                    showOpenDiscord: !1,
                  })
                : (0, i.jsx)(c.Oc, {
                    icon: null == _ ? void 0 : _.thumbnail,
                    storeListingBenefits: null == _ ? void 0 : _.benefits,
                    application: null != v ? v : void 0,
                    title: h.intl.format(h.t.haiCxc, { tier: g.name }),
                    subtitle: y
                      ? h.intl.string(h.t.RvtbPz)
                      : h.intl.string(h.t.zY39Zm),
                    description: y
                      ? h.intl.formatToPlainString(h.t.QCe4ra, {
                          applicationName: null == v ? void 0 : v.name,
                        })
                      : h.intl.string(h.t.n1Pu8P),
                  }),
            }),
            !C &&
              (0, i.jsx)(b.O3, {
                children: (0, i.jsx)(f.Z, {
                  onBack: t,
                  backText: h.intl.string(h.t.TQBY1N),
                  onPrimary: k,
                  primaryCTA: f.g.CONTINUE,
                  primaryText: h.intl.string(h.t["gZhF+/"]),
                }),
              }),
          ],
        });
      }
    },
    519801: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(131388),
        a = t(607070),
        l = t(745510),
        c = t(171246),
        s = t(689011),
        d = t(931905),
        u = t(563132),
        p = t(409813),
        f = t(586585),
        b = t(456251),
        m = t(614277),
        h = t(698708),
        x = t(750143),
        g = t(388032);
      function _(e) {
        var n, t;
        let _,
          v,
          {
            showBenefits: C,
            handleClose: S,
            onSubscriptionConfirmation: k,
          } = e,
          {
            updatedSubscription: y,
            readySlideId: j,
            selectedSku: T,
            selectedStoreListing: P,
            application: B,
          } = (0, u.usePaymentContext)(),
          E = (0, o.Z)(x.i),
          { createMultipleConfettiAt: N } = r.useContext(l.h),
          O =
            null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : "",
          I = () => {
            S(), null == k || k();
          },
          w = j === p.h8.CONFIRM,
          A = (0, c.KW)(
            null !== (t = null == T ? void 0 : T.flags) && void 0 !== t ? t : 0,
          ),
          M =
            null != P && P.benefits.length > 0
              ? g.intl.formatToPlainString(g.t["+IQQVF"], {
                  benefitCount: P.benefits.length,
                })
              : null;
        return (
          C
            ? E
              ? (_ = (0, i.jsx)(d.h, {
                  title: g.intl.format(g.t.ea6tZm, { tierName: O }),
                  subtitle:
                    null != P && P.benefits.length > 0
                      ? g.intl.formatToPlainString(g.t.HNepfn, { benefits: M })
                      : null,
                  onConfirm: I,
                  confirmCta: g.intl.string(g.t.nlkyw8),
                }))
              : ((_ =
                  null != P && null != B
                    ? (0, i.jsx)(s.Oc, {
                        icon: P.thumbnail,
                        storeListingBenefits: P.benefits,
                        application: B,
                        title: g.intl.format(g.t["Q+qktb"], { tier: O }),
                        subtitle: g.intl.string(g.t.ECKxXV),
                        description: A
                          ? g.intl.format(g.t.MAtQk5, {
                              applicationName: null == B ? void 0 : B.name,
                            })
                          : g.intl.format(g.t.vHkMFx, { tier: O }),
                      })
                    : (0, i.jsx)(b.Z, {})),
                (v = (0, i.jsx)(f.Z, {
                  onPrimary: I,
                  primaryCTA: f.g.CONTINUE,
                  primaryText: g.intl.string(g.t["JtWl+f"]),
                })))
            : (_ = E
                ? (0, i.jsx)(d.m, {
                    tierName: O,
                    onConfirm: I,
                    subscription: y,
                  })
                : (0, i.jsx)(s.xe, {
                    tierName: O,
                    onConfirm: I,
                    subscription: y,
                  })),
          r.useEffect(() => {
            a.Z.useReducedMotion &&
              w &&
              N(window.innerWidth / 2, window.innerHeight / 2);
          }, [N, w]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(m.C3, { children: [(0, i.jsx)(h.Z, {}), _] }),
              null != v && (0, i.jsx)(m.O3, { children: v }),
            ],
          })
        );
      }
    },
    759386: function (e, n, t) {
      t.r(n),
        t.d(n, {
          getApplicationPaymentSteps: function () {
            return p;
          },
        }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(409813),
        o = t(276442),
        a = t(961830),
        l = t(721165),
        c = t(519801),
        s = t(589771),
        d = t(883419),
        u = t(388032);
      function p(e) {
        let { guildId: n, showBenefitsFirst: t } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, i.jsx)(s.Z, {
                initialStep: t ? r.h8.BENEFITS : r.h8.REVIEW,
                guildId: n,
                ...e,
              }),
          },
          {
            key: r.h8.BENEFITS,
            renderStep: (e) => (0, i.jsx)(l.Z, { ...e }),
            options: { useBreadcrumbLabel: () => u.intl.string(u.t["5LD2+P"]) },
          },
          {
            key: r.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(o.J, {
                  ...e,
                  breadcrumbSteps: [
                    r.h8.ADD_PAYMENT_STEPS,
                    r.h8.REVIEW,
                    r.h8.CONFIRM,
                  ],
                }),
              }),
            options: { renderHeader: !0 },
          },
          ...a.yp,
          {
            key: r.h8.REVIEW,
            renderStep: (e) =>
              (0, i.jsx)(d.Z, {
                backButtonEligible: !!t || void 0,
                prevStep: t ? r.h8.BENEFITS : void 0,
                ...e,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh),
            },
          },
          {
            key: r.h8.CONFIRM,
            renderStep: (e) => (0, i.jsx)(c.Z, { showBenefits: !t, ...e }),
          },
        ];
      }
    },
    589771: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        o = t(89057),
        a = t(509545),
        l = t(74538),
        c = t(987209),
        s = t(563132),
        d = t(456251);
      function u(e) {
        let {
            initialStep: n,
            initialPlanId: t,
            guildId: u,
            setAnalyticsData: p,
            handleClose: f,
          } = e,
          {
            blockedPayments: b,
            setStep: m,
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: x,
            currencyLoading: g,
            selectedSkuId: _,
            setSelectedSkuId: v,
            setSelectedPlanId: C,
            priceOptions: S,
            setSubscriptionMetadataRequest: k,
          } = (0, s.usePaymentContext)(),
          { isGift: y } = (0, c.wD)(),
          [j, T] = r.useState(!h || !x || g);
        return (r.useEffect(() => {
          T(!h || !x || g);
        }, [g, x, h]),
        r.useEffect(() => {
          null != u && k({ guild_id: u });
        }, [u, k]),
        r.useEffect(() => {
          C(t);
          let e = null != t ? a.Z.get(t) : null;
          if (!j && !b)
            p((n) => {
              let t = null != e ? (0, l.aS)(e.id, !1, y, S) : void 0;
              return {
                ...n,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (v(null == e ? void 0 : e.skuId), m(n));
        }, [b, t, y, j, S, _, p, C, v, m, n]),
        j)
          ? (0, i.jsx)(d.Z, {})
          : b
            ? (0, i.jsx)(o.Vq, { onClose: f })
            : null;
      }
    },
    883419: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        l = t(442837),
        c = t(481060),
        s = t(330726),
        d = t(716534),
        u = t(664891),
        p = t(171246),
        f = t(430824),
        b = t(563132),
        m = t(409813),
        h = t(45572),
        x = t(51499),
        g = t(678334),
        _ = t(456251),
        v = t(614277),
        C = t(698708),
        S = t(388032),
        k = t(748605);
      function y(e) {
        var n, t;
        let {
            backButtonEligible: o,
            prevStep: y,
            handleStepChange: j,
            trialFooterMessageOverride: T,
            reviewWarningMessage: P,
            planGroup: B,
            openInvoiceId: E,
            analyticsData: N,
            analyticsLocation: O,
            handleClose: I,
          } = e,
          {
            activeSubscription: w,
            application: A,
            setUpdatedSubscription: M,
            contextMetadata: R,
            currencies: Z,
            paymentSources: H,
            priceOptions: F,
            purchaseError: L,
            purchaseTokenAuthState: D,
            selectedPlan: W,
            selectedSku: G,
            setCurrency: V,
            setPaymentSourceId: K,
            setPurchaseState: Y,
            setPurchaseError: z,
            purchaseState: U,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: q,
          } = (0, b.usePaymentContext)();
        a()(null != W, "Expected plan to be selected"),
          a()(null != A, "Expected application");
        let X = r.useRef(null),
          [J, $] = (0, s.Z)(!1, 500),
          ee = null == Q ? void 0 : Q.guild_id,
          en = (0, l.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
          [et, ei] = r.useState(null),
          er = (0, p.KW)(
            null !== (n = null == G ? void 0 : G.flags) && void 0 !== n ? n : 0,
          );
        r.useEffect(() => {
          null != L &&
            null != X.current &&
            X.current.scrollIntoView({ behavior: "smooth" });
        }, [L]);
        let eo = r.useCallback(
            (e) => {
              M(e), j(m.h8.CONFIRM);
            },
            [j, M],
          ),
          ea = r.useRef(null);
        return U === h.A.PURCHASING
          ? (0, i.jsx)(_.Z, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(x.Z, { className: k.breadcrumbs }),
                (0, i.jsxs)(v.C3, {
                  children: [
                    (0, i.jsx)(C.Z, {}),
                    er &&
                      (0, i.jsxs)("div", {
                        className: k.userSubscriptionDetailsContainer,
                        children: [
                          (0, i.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.intl.string(S.t.nf5LOT),
                          }),
                          (0, i.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: S.intl.format(S.t.y4n0GR, {
                              applicationName: A.name,
                            }),
                          }),
                        ],
                      }),
                    !er &&
                      (0, i.jsxs)("div", {
                        className: k.guildPickerContainer,
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: S.intl.string(S.t["5qyruL"]),
                          }),
                          (0, i.jsxs)("div", {
                            className: k.guildNameContainer,
                            children: [
                              (0, i.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: S.intl.string(S.t.dBih7e),
                              }),
                              (0, i.jsx)(c.Text, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                children:
                                  null !==
                                    (t = null == en ? void 0 : en.name) &&
                                  void 0 !== t
                                    ? t
                                    : S.intl.string(S.t.dtwqPT),
                              }),
                            ],
                          }),
                        ],
                      }),
                    null == w
                      ? (0, i.jsx)(d.Z, {
                          selectedPlanId: W.id,
                          paymentSources: H,
                          onPaymentSourceChange: (e) =>
                            K(null != e ? e.id : null),
                          priceOptions: F,
                          currencies: Z,
                          onCurrencyChange: (e) => V(e),
                          handlePaymentSourceAdd: () =>
                            j(m.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: J,
                          trialFooterMessageOverride: T,
                          reviewWarningMessage: P,
                          metadata: er ? void 0 : Q,
                          purchaseState: U,
                          hideSubscriptionDetails: !0,
                          handleClose: I,
                        })
                      : (0, i.jsx)(u.Z, {
                          premiumSubscription: w,
                          paymentSources: H,
                          priceOptions: F,
                          onPaymentSourceChange: (e) =>
                            K(null != e ? e.id : null),
                          onPaymentSourceAdd: () => {
                            j(m.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: W.id,
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: J,
                          onInvoiceError: (e) => {
                            ei(e);
                          },
                          planGroup: B,
                          currencies: Z,
                          onCurrencyChange: (e) => V(e),
                          hasOpenInvoice: null != E,
                          purchaseState: U,
                          handleClose: I,
                        }),
                  ],
                }),
                (0, i.jsx)(v.O3, {
                  children: (0, i.jsx)(g.Z, {
                    premiumSubscription: null != w ? w : null,
                    setPurchaseState: Y,
                    onBack: () => null != y && j(y),
                    onNext: eo,
                    onPurchaseError: (e) => z(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: O,
                    baseAnalyticsData: N,
                    flowStartTime: R.startTime,
                    planGroup: B,
                    purchaseTokenAuthState: D,
                    openInvoiceId: E,
                    metadata: er ? void 0 : Q,
                    backButtonEligible: o,
                    invoiceError: et,
                    disablePurchase:
                      (null == Q ? void 0 : Q.guild_id) == null && !er,
                  }),
                }),
              ],
            });
      }
    },
    931905: function (e, n, t) {
      t.d(n, {
        h: function () {
          return c;
        },
        m: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(17894),
        a = t(388032),
        l = t(632354);
      let c = (e) => {
        let {
          onConfirm: n,
          onCancel: t,
          title: c,
          subtitle: s,
          confirmCta: d,
          showOpenDiscord: u = !0,
        } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: c,
            }),
            null != s
              ? (0, i.jsx)(r.Text, {
                  className: l.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: s,
                })
              : null,
            (0, i.jsxs)("div", {
              className: l.buttonContainer,
              children: [
                u &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, o.Z)("application_sub_mweb_success_modal"),
                    children: a.intl.string(a.t["8L5bZG"]),
                  }),
                (0, i.jsx)(r.Button, {
                  fullWidth: !0,
                  color: r.Button.Colors.PRIMARY,
                  onClick: n,
                  children: d,
                }),
                null != t &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    onClick: t,
                    children: a.intl.string(a.t.iAfxo6),
                  }),
              ],
            }),
          ],
        });
      };
      function s(e) {
        let { onConfirm: n, tierName: t, subscription: c } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: a.intl.format(a.t["wLFT6+"], { tier: t }),
            }),
            (0, i.jsx)(r.Text, {
              className: l.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: a.intl.format(a.t.OsAK9v, {
                timestamp: null == c ? void 0 : c.currentPeriodEnd,
              }),
            }),
            (0, i.jsxs)("div", {
              className: l.buttonContainer,
              children: [
                (0, i.jsx)(r.Button, {
                  className: l.__invalid_openDiscordButton,
                  onClick: () => (0, o.Z)("application_sub_mweb_success_modal"),
                  children: a.intl.string(a.t["8L5bZG"]),
                }),
                (0, i.jsx)(r.Button, {
                  className: l.__invalid_doneButton,
                  look: r.Button.Looks.BLANK,
                  onClick: n,
                  children: a.intl.string(a.t.nlkyw8),
                }),
              ],
            }),
          ],
        });
      }
    },
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(325767);
      function o(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: o = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    830151: function (e, n, t) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    841261: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    788629: function (e, n, t) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    404934: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    542781: function (e, n, t) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    59023: function (e, n, t) {
      e.exports = { body: "body_e16e99" };
    },
    525550: function (e, n, t) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    38569: function (e, n, t) {
      e.exports = { back: "back_fd80e5" };
    },
    244203: function (e, n, t) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    473156: function (e, n, t) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    309951: function (e, n, t) {
      e.exports = {
        root: "root_df35cb",
        shaker: "shaker_df35cb",
        stepBody: "stepBody_df35cb",
        bodyText: "bodyText_df35cb",
        invoice: "invoice_df35cb",
        paymentSourceWrapper: "paymentSourceWrapper_df35cb",
        paymentSourceOptionalWarning: "paymentSourceOptionalWarning_df35cb",
        currencyWrapper: "currencyWrapper_df35cb",
        trialCheckbox: "trialCheckbox_df35cb",
        trialCheckboxLabel: "trialCheckboxLabel_df35cb",
        loader: "loader_df35cb",
        contentWrapper: "contentWrapper_df35cb",
        reviewWarningMessageContainer: "reviewWarningMessageContainer_df35cb",
        reviewWarningMessage: "reviewWarningMessage_df35cb",
        trialPriceLine: "trialPriceLine_df35cb",
        afterTrialPriceLine: "afterTrialPriceLine_df35cb",
        formTitle: "formTitle_df35cb",
        spinnerWrapper: "spinnerWrapper_df35cb",
        trialHeader: "trialHeader_df35cb",
        giftMainAnimation: "giftMainAnimation_df35cb",
      };
    },
    748605: function (e, n, t) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    679640: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_ad3708",
        invoice: "invoice_ad3708",
        paymentSourceWrapper: "paymentSourceWrapper_ad3708",
        subscriptionCostRow: "subscriptionCostRow_ad3708",
        invoiceSpinner: "invoiceSpinner_ad3708",
        errorBlock: "errorBlock_ad3708",
        fineprint: "fineprint_ad3708",
        skuHeading: "skuHeading_ad3708",
        skuHeadingText: "skuHeadingText_ad3708",
      };
    },
    15841: function (e, n, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    3936: function (e, n, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    45785: function (e, n, t) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    522888: function (e, n, t) {
      e.exports = {
        giftMainAnimation: "giftMainAnimation_d90c00",
        soundEmojiContainer: "soundEmojiContainer_d90c00",
        sound: "sound_d90c00",
        emoji: "emoji_d90c00",
        animation: "animation_d90c00",
        spinner: "spinner_d90c00",
        giftBoxOptionContainer: "giftBoxOptionContainer_d90c00",
      };
    },
    898492: function (e, n, t) {
      e.exports = {
        container: "container_b96147",
        emojiList: "emojiList_b96147",
        emoji: "emoji_b96147",
        textSelected: "textSelected_b96147",
        text: "text_b96147",
        emojiIcon: "emojiIcon_b96147",
        customGiftContent: "customGiftContent_b96147",
        emojiHeader: "emojiHeader_b96147",
        customGiftHeader: "customGiftHeader_b96147",
      };
    },
    910485: function (e, n, t) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    133130: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_d439ef",
        stepBodyCustomGift: "stepBodyCustomGift_d439ef",
        paddingForHalloweenBanner: "paddingForHalloweenBanner_d439ef",
        bodyColumnMiddle: "bodyColumnMiddle_d439ef",
        bodyColumnRight: "bodyColumnRight_d439ef",
        bodyText: "bodyText_d439ef",
        selectPlanDivider: "selectPlanDivider_d439ef",
        selectPlanChooseTitle: "selectPlanChooseTitle_d439ef",
        selectPlanTotalRow: "selectPlanTotalRow_d439ef",
        planSelectSeparator: "planSelectSeparator_d439ef",
        trialPlanSelectHeader: "trialPlanSelectHeader_d439ef",
        legacyPricingNotice: "legacyPricingNotice_d439ef",
      };
    },
    703236: function (e, n, t) {
      e.exports = {
        planOption: "planOption_bd3462",
        planOneTimeCost: "planOneTimeCost_bd3462",
        selectionBox: "selectionBox_bd3462",
        selectedPlan: "selectedPlan_bd3462",
        planOptionDisabled: "planOptionDisabled_bd3462",
        planOptionClickable: "planOptionClickable_bd3462",
        planOptionCheckbox: "planOptionCheckbox_bd3462",
        planOptionInterval: "planOptionInterval_bd3462",
        optionSelected: "optionSelected_bd3462",
        planOptionCurrentPlan: "planOptionCurrentPlan_bd3462",
        planOptionMonthsFree: "planOptionMonthsFree_bd3462",
        planOptionDiscount: "planOptionDiscount_bd3462",
        planOptionSubtextContainer: "planOptionSubtextContainer_bd3462",
        planOptionSubtext: "planOptionSubtext_bd3462",
        discountPlanOptionSubtext: "discountPlanOptionSubtext_bd3462",
        planOptionClickableContainer: "planOptionClickableContainer_bd3462",
        updatedOptionSelected: "updatedOptionSelected_bd3462",
        optionPriceSelected: "optionPriceSelected_bd3462",
      };
    },
    294188: function (e, n, t) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    658160: function (e, n, t) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    203748: function (e, n, t) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    632354: function (e, n, t) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    651523: function (e, n, t) {
      e.exports = {
        title: "title_b3a5c2",
        disabled: "disabled_b3a5c2",
        customizationSection: "customizationSection_b3a5c2",
        hideDivider: "hideDivider_b3a5c2",
        withDivider: "withDivider_b3a5c2",
        showBorder: "showBorder_b3a5c2",
        customizationSectionBackground: "customizationSectionBackground_b3a5c2",
        sectionDescription: "sectionDescription_b3a5c2",
        errorMessage: "errorMessage_b3a5c2",
        customizationSectionBorder: "customizationSectionBorder_b3a5c2",
      };
    },
    261842: function (e, n, t) {
      e.exports = {
        premiumFeatureBorder:
          "premiumFeatureBorder_c6d722 featureBorder_c6d722",
        limitedFeatureBorder:
          "limitedFeatureBorder_c6d722 featureBorder_c6d722",
        background: "background_c6d722",
        premiumBackground: "premiumBackground_c6d722 background_c6d722",
        limitedBackground: "limitedBackground_c6d722 background_c6d722",
      };
    },
    599215: function (e, n, t) {
      e.exports = {
        container: "container_bb37e1",
        soundIcon: "soundIcon_bb37e1",
        textSelected: "textSelected_bb37e1",
        sound: "sound_bb37e1",
        text: "text_bb37e1",
        customGiftHeader: "customGiftHeader_bb37e1",
        searchAndSound: "searchAndSound_bb37e1",
      };
    },
  },
]);
//# sourceMappingURL=348ecf87b81768881d81.js.map
