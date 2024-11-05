"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40031"],
  {
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        a = n(772848),
        l = n(841261);
      let c = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(l.button, n, { [l.open]: t, [l.withHighlight]: r }),
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
    17894: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(525654),
        r = n.n(i),
        o = n(39612),
        a = n(271579),
        l = n(756647),
        c = n(232567),
        s = n(703656),
        d = n(314897),
        u = n(896797),
        p = n(626135),
        f = n(954824),
        m = n(981631);
      async function b(e) {
        var t, n;
        let i = null === (t = r().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === i || "iOS" === i) {
          let t =
              null !== (n = d.default.getFingerprint()) && void 0 !== n
                ? n
                : d.default.getId(),
            i = (0, a.WS)();
          if (null == t && d.default.isAuthenticated())
            try {
              await (0, c.k)(), (t = d.default.getId());
            } catch {}
          return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function h(e) {
        let t = await b(e),
          n = (0, a.zS)(t);
        null != n &&
          p.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          f.Z.launch(t, (e) => {
            !e && (0, s.dL)(u.Z.fallbackRoute);
          });
      }
    },
    285888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
        v: function () {
          return h;
        },
      }),
        n(47120);
      var i,
        r,
        o,
        a = n(200651),
        l = n(192379),
        c = n(120356),
        s = n.n(c),
        d = n(569619),
        u = n(481060),
        p = n(981631),
        f = n(388032),
        m = n(404934);
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((o = i || (i = {})).TOP = "top"), (o.BOTTOM = "bottom");
      let h = {
        container: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: n, menuIsOpen: i } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: i ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: n ? 0.5 : 1,
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
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: n } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: n ? void 0 : "pointer",
            opacity: n ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: n ? 0.3 : 1,
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
          let { isSelected: n, isFocused: i } = t;
          return {
            ...e,
            ...(n
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
      class g extends (r = l.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: i,
              valueRenderer: r,
              optionRenderer: o,
              multiValueRenderer: l,
              options: c,
              value: p,
              autofocus: b,
              disabled: g,
              clearable: x,
              searchable: _,
              styleOverrides: v,
              isMulti: C,
              placeholder: S,
              filterOption: k,
              closeMenuOnSelect: y = !0,
              ...T
            } = this.props,
            j = { ...T };
          null != b && (j.autoFocus = b),
            null != g && (j.isDisabled = g),
            null != x && (j.isClearable = x),
            null != _ && (j.isSearchable = _);
          let E = { IndicatorSeparator: () => null };
          null != o &&
            (E.Option = (e) =>
              (0, a.jsx)(d.wx.Option, { ...e, children: o(e.data) })),
            null != r &&
              (E.SingleValue = (e) =>
                (0, a.jsx)(d.wx.SingleValue, { ...e, children: r(e.data) })),
            null != l && (E.MultiValue = (e) => l(e.data));
          if (C && Array.isArray(p)) {
            let t = {};
            c.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = p.map((e) => t[String(e)]));
          } else e = null != p ? c.find((e) => e.value === p) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: s()(m.select, t, { [m.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(d.ZP, {
                  ...j,
                  className: n,
                  ref: this._selectRef,
                  isMulti: C,
                  components: E,
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
                      className: m.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "_selectRef", l.createRef()),
            b(this, "_containerRef", l.createRef()),
            b(this, "state", { isFocused: !1, isOpen: !1 }),
            b(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            b(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            b(this, "handleKeyDown", (e) => {
              e.which === p.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            b(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            b(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      b(g, "MenuPlacements", i);
    },
    713316: function (e, t, n) {
      n.d(t, {
        w: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(512722),
        o = n.n(r),
        a = n(481060),
        l = n(563132),
        c = n(698708),
        s = n(614277),
        d = n(388032),
        u = n(525550);
      function p(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: r,
            application: p,
          } = (0, l.usePaymentContext)();
        o()(null != r, "Expected selectedSkuId"),
          o()(null != p, "Expected application");
        let f = n[r];
        o()(null != f, "Expected sku");
        let m = d.intl.formatToPlainString(d.t.wK0IbG, {
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
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: m }),
                (0, i.jsx)("div", { className: u.divider }),
                (0, i.jsx)(a.Button, {
                  onClick: t,
                  children: d.intl.string(d.t.cpT0Cg),
                }),
              ],
            }),
          ],
        });
      }
    },
    961830: function (e, t, n) {
      n.d(t, {
        F7: function () {
          return x;
        },
        WA: function () {
          return f;
        },
        s2: function () {
          return m;
        },
        wo: function () {
          return g;
        },
        yp: function () {
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(853872),
        o = n(409813),
        a = n(276442),
        l = n(793541),
        c = n(380898),
        s = n(713316),
        d = n(710094),
        u = n(865921),
        p = n(388032);
      let f = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        m = {
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
        b = {
          key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(c.Z, {}),
        },
        h = {
          key: o.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(l.Z, {}),
          options: { renderHeader: !0 },
        },
        g = {
          key: o.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
          options: { useBreadcrumbLabel: () => p.intl.string(p.t.QBnNHh) },
        },
        x = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(s.w, { ...e }) },
        _ = [b, h];
    },
    865921: function (e, t, n) {
      n.d(t, {
        v: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(512722),
        a = n.n(o),
        l = n(399606),
        c = n(89057),
        s = n(597688),
        d = n(987209),
        u = n(563132),
        p = n(409813),
        f = n(456251),
        m = n(981631);
      function b(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: o,
            hasFetchedSkus: b,
            paymentSources: h,
            hasFetchedPaymentSources: g,
            application: x,
            skusById: _,
            selectedSkuId: v,
          } = (0, u.usePaymentContext)(),
          { isGift: C } = (0, d.wD)(),
          [S, k] = r.useState(!0),
          y = (0, l.e7)([s.Z], () => s.Z.isFetchingCategories);
        return (r.useEffect(() => {
          let e = null != x;
          if (!!b && !!g && !!e) k(y);
        }, [b, g, x, y]),
        r.useEffect(() => {
          if (S || o) return;
          a()(null != v, "Expected selectedSkuId");
          let e = _[v];
          if (
            C &&
            (null == e ? void 0 : e.productLine) === m.POd.COLLECTIBLES
          ) {
            t(p.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(h).length) {
            t(p.h8.ADD_PAYMENT_STEPS);
            return;
          }
          t(p.h8.REVIEW);
        }, [S, o, t, h, C, _, v]),
        S)
          ? (0, i.jsx)(f.Z, {})
          : o
            ? (0, i.jsx)(c.Vq, { onClose: n })
            : null;
      }
    },
    721165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(789020);
      var i = n(200651),
        r = n(192379),
        o = n(442837),
        a = n(131388),
        l = n(171246),
        c = n(689011),
        s = n(931905),
        d = n(430824),
        u = n(563132),
        p = n(409813),
        f = n(586585),
        m = n(614277),
        b = n(750143),
        h = n(388032);
      function g(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            subscriptionMetadataRequest: g,
            selectedSku: x,
            selectedStoreListing: _,
            application: v,
          } = (0, u.usePaymentContext)(),
          C = (0, a.Z)(b.i),
          S = (0, o.e7)([d.Z], () =>
            d.Z.getGuild(null == g ? void 0 : g.guild_id),
          ),
          k = r.useCallback(() => t(p.h8.REVIEW), [t]);
        if (null == x) return null;
        let y = (0, l.KW)(x.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.C3, {
              children: C
                ? (0, i.jsx)(s.h, {
                    confirmCta: h.intl.string(h.t.PBHFSk),
                    onConfirm: k,
                    onCancel: n,
                    title: h.intl.format(h.t["6n6oXF"], { tier: x.name }),
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
                    title: h.intl.format(h.t.haiCxc, { tier: x.name }),
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
              (0, i.jsx)(m.O3, {
                children: (0, i.jsx)(f.Z, {
                  onBack: n,
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
    519801: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(789020);
      var i = n(200651),
        r = n(192379),
        o = n(131388),
        a = n(607070),
        l = n(745510),
        c = n(171246),
        s = n(689011),
        d = n(931905),
        u = n(563132),
        p = n(409813),
        f = n(586585),
        m = n(456251),
        b = n(614277),
        h = n(698708),
        g = n(750143),
        x = n(388032);
      function _(e) {
        var t, n;
        let _,
          v,
          {
            showBenefits: C,
            handleClose: S,
            onSubscriptionConfirmation: k,
          } = e,
          {
            updatedSubscription: y,
            readySlideId: T,
            selectedSku: j,
            selectedStoreListing: E,
            application: P,
          } = (0, u.usePaymentContext)(),
          A = (0, o.Z)(g.i),
          { createMultipleConfettiAt: O } = r.useContext(l.h),
          N =
            null !== (t = null == j ? void 0 : j.name) && void 0 !== t ? t : "",
          I = () => {
            S(), null == k || k();
          },
          B = T === p.h8.CONFIRM,
          w = (0, c.KW)(
            null !== (n = null == j ? void 0 : j.flags) && void 0 !== n ? n : 0,
          ),
          M =
            null != E && E.benefits.length > 0
              ? x.intl.formatToPlainString(x.t["+IQQVF"], {
                  benefitCount: E.benefits.length,
                })
              : null;
        return (
          C
            ? A
              ? (_ = (0, i.jsx)(d.h, {
                  title: x.intl.format(x.t.ea6tZm, { tierName: N }),
                  subtitle:
                    null != E && E.benefits.length > 0
                      ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: M })
                      : null,
                  onConfirm: I,
                  confirmCta: x.intl.string(x.t.nlkyw8),
                }))
              : ((_ =
                  null != E && null != P
                    ? (0, i.jsx)(s.Oc, {
                        icon: E.thumbnail,
                        storeListingBenefits: E.benefits,
                        application: P,
                        title: x.intl.format(x.t["Q+qktb"], { tier: N }),
                        subtitle: x.intl.string(x.t.ECKxXV),
                        description: w
                          ? x.intl.format(x.t.MAtQk5, {
                              applicationName: null == P ? void 0 : P.name,
                            })
                          : x.intl.format(x.t.vHkMFx, { tier: N }),
                      })
                    : (0, i.jsx)(m.Z, {})),
                (v = (0, i.jsx)(f.Z, {
                  onPrimary: I,
                  primaryCTA: f.g.CONTINUE,
                  primaryText: x.intl.string(x.t["JtWl+f"]),
                })))
            : (_ = A
                ? (0, i.jsx)(d.m, {
                    tierName: N,
                    onConfirm: I,
                    subscription: y,
                  })
                : (0, i.jsx)(s.xe, {
                    tierName: N,
                    onConfirm: I,
                    subscription: y,
                  })),
          r.useEffect(() => {
            a.Z.useReducedMotion &&
              B &&
              O(window.innerWidth / 2, window.innerHeight / 2);
          }, [O, B]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(b.C3, { children: [(0, i.jsx)(h.Z, {}), _] }),
              null != v && (0, i.jsx)(b.O3, { children: v }),
            ],
          })
        );
      }
    },
    759386: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getApplicationPaymentSteps: function () {
            return p;
          },
        }),
        n(47120);
      var i = n(200651);
      n(192379);
      var r = n(409813),
        o = n(276442),
        a = n(961830),
        l = n(721165),
        c = n(519801),
        s = n(589771),
        d = n(883419),
        u = n(388032);
      function p(e) {
        let { guildId: t, showBenefitsFirst: n } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, i.jsx)(s.Z, {
                initialStep: n ? r.h8.BENEFITS : r.h8.REVIEW,
                guildId: t,
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
                backButtonEligible: !!n || void 0,
                prevStep: n ? r.h8.BENEFITS : void 0,
                ...e,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh),
            },
          },
          {
            key: r.h8.CONFIRM,
            renderStep: (e) => (0, i.jsx)(c.Z, { showBenefits: !n, ...e }),
          },
        ];
      }
    },
    589771: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(89057),
        a = n(509545),
        l = n(74538),
        c = n(987209),
        s = n(563132),
        d = n(456251);
      function u(e) {
        let {
            initialStep: t,
            initialPlanId: n,
            guildId: u,
            setAnalyticsData: p,
            handleClose: f,
          } = e,
          {
            blockedPayments: m,
            setStep: b,
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: x,
            selectedSkuId: _,
            setSelectedSkuId: v,
            setSelectedPlanId: C,
            priceOptions: S,
            setSubscriptionMetadataRequest: k,
          } = (0, s.usePaymentContext)(),
          { isGift: y } = (0, c.wD)(),
          [T, j] = r.useState(!h || !g || x);
        return (r.useEffect(() => {
          j(!h || !g || x);
        }, [x, g, h]),
        r.useEffect(() => {
          null != u && k({ guild_id: u });
        }, [u, k]),
        r.useEffect(() => {
          C(n);
          let e = null != n ? a.Z.get(n) : null;
          if (!T && !m)
            p((t) => {
              let n = null != e ? (0, l.aS)(e.id, !1, y, S) : void 0;
              return {
                ...t,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (v(null == e ? void 0 : e.skuId), b(t));
        }, [m, n, y, T, S, _, p, C, v, b, t]),
        T)
          ? (0, i.jsx)(d.Z, {})
          : m
            ? (0, i.jsx)(o.Vq, { onClose: f })
            : null;
      }
    },
    883419: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      }),
        n(47120),
        n(789020);
      var i = n(200651),
        r = n(192379),
        o = n(512722),
        a = n.n(o),
        l = n(442837),
        c = n(481060),
        s = n(330726),
        d = n(716534),
        u = n(664891),
        p = n(171246),
        f = n(430824),
        m = n(563132),
        b = n(409813),
        h = n(45572),
        g = n(51499),
        x = n(678334),
        _ = n(456251),
        v = n(614277),
        C = n(698708),
        S = n(388032),
        k = n(748605);
      function y(e) {
        var t, n;
        let {
            backButtonEligible: o,
            prevStep: y,
            handleStepChange: T,
            trialFooterMessageOverride: j,
            reviewWarningMessage: E,
            planGroup: P,
            openInvoiceId: A,
            analyticsData: O,
            analyticsLocation: N,
            handleClose: I,
          } = e,
          {
            activeSubscription: B,
            application: w,
            setUpdatedSubscription: M,
            contextMetadata: R,
            currencies: Z,
            paymentSources: H,
            priceOptions: L,
            purchaseError: F,
            purchaseTokenAuthState: D,
            selectedPlan: W,
            selectedSku: G,
            setCurrency: K,
            setPaymentSourceId: V,
            setPurchaseState: U,
            setPurchaseError: Y,
            purchaseState: z,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: q,
          } = (0, m.usePaymentContext)();
        a()(null != W, "Expected plan to be selected"),
          a()(null != w, "Expected application");
        let X = r.useRef(null),
          [J, $] = (0, s.Z)(!1, 500),
          ee = null == Q ? void 0 : Q.guild_id,
          et = (0, l.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
          [en, ei] = r.useState(null),
          er = (0, p.KW)(
            null !== (t = null == G ? void 0 : G.flags) && void 0 !== t ? t : 0,
          );
        r.useEffect(() => {
          null != F &&
            null != X.current &&
            X.current.scrollIntoView({ behavior: "smooth" });
        }, [F]);
        let eo = r.useCallback(
            (e) => {
              M(e), T(b.h8.CONFIRM);
            },
            [T, M],
          ),
          ea = r.useRef(null);
        return z === h.A.PURCHASING
          ? (0, i.jsx)(_.Z, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(g.Z, { className: k.breadcrumbs }),
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
                              applicationName: w.name,
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
                                    (n = null == et ? void 0 : et.name) &&
                                  void 0 !== n
                                    ? n
                                    : S.intl.string(S.t.dtwqPT),
                              }),
                            ],
                          }),
                        ],
                      }),
                    null == B
                      ? (0, i.jsx)(d.Z, {
                          selectedPlanId: W.id,
                          paymentSources: H,
                          onPaymentSourceChange: (e) =>
                            V(null != e ? e.id : null),
                          priceOptions: L,
                          currencies: Z,
                          onCurrencyChange: (e) => K(e),
                          handlePaymentSourceAdd: () =>
                            T(b.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: J,
                          trialFooterMessageOverride: j,
                          reviewWarningMessage: E,
                          metadata: er ? void 0 : Q,
                          purchaseState: z,
                          hideSubscriptionDetails: !0,
                          handleClose: I,
                        })
                      : (0, i.jsx)(u.Z, {
                          premiumSubscription: B,
                          paymentSources: H,
                          priceOptions: L,
                          onPaymentSourceChange: (e) =>
                            V(null != e ? e.id : null),
                          onPaymentSourceAdd: () => {
                            T(b.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: W.id,
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: J,
                          onInvoiceError: (e) => {
                            ei(e);
                          },
                          planGroup: P,
                          currencies: Z,
                          onCurrencyChange: (e) => K(e),
                          hasOpenInvoice: null != A,
                          purchaseState: z,
                          handleClose: I,
                        }),
                  ],
                }),
                (0, i.jsx)(v.O3, {
                  children: (0, i.jsx)(x.Z, {
                    premiumSubscription: null != B ? B : null,
                    setPurchaseState: U,
                    onBack: () => null != y && T(y),
                    onNext: eo,
                    onPurchaseError: (e) => Y(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: N,
                    baseAnalyticsData: O,
                    flowStartTime: R.startTime,
                    planGroup: P,
                    purchaseTokenAuthState: D,
                    openInvoiceId: A,
                    metadata: er ? void 0 : Q,
                    backButtonEligible: o,
                    invoiceError: en,
                    disablePurchase:
                      (null == Q ? void 0 : Q.guild_id) == null && !er,
                  }),
                }),
              ],
            });
      }
    },
    931905: function (e, t, n) {
      n.d(t, {
        h: function () {
          return c;
        },
        m: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(17894),
        a = n(388032),
        l = n(632354);
      let c = (e) => {
        let {
          onConfirm: t,
          onCancel: n,
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
                  onClick: t,
                  children: d,
                }),
                null != n &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    onClick: n,
                    children: a.intl.string(a.t.iAfxo6),
                  }),
              ],
            }),
          ],
        });
      };
      function s(e) {
        let { onConfirm: t, tierName: n, subscription: c } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: a.intl.format(a.t["wLFT6+"], { tier: n }),
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
                  onClick: t,
                  children: a.intl.string(a.t.nlkyw8),
                }),
              ],
            }),
          ],
        });
      }
    },
    850840: function (e, t, n) {
      let i;
      n(653041);
      var r,
        o = n(442837),
        a = n(570140);
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let c = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class s extends (r = o.ZP.PersistedStore) {
        initialize(e) {
          i = null != e ? e : c;
        }
        getState() {
          return i;
        }
        get hasAcceptedStoreTerms() {
          return i.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return i.hasAcceptedEulaIds.includes(e);
        }
      }
      l(s, "displayName", "ApplicationStoreUserSettingsStore"),
        l(s, "persistKey", "ApplicationStoreUserSettingsStore"),
        l(s, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new s(a.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (i.hasAcceptedEulaIds.includes(t)) return !1;
            i.hasAcceptedEulaIds.push(t);
          },
        }));
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(325767);
      function o(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: o = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    830151: function (e, t, n) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    841261: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    788629: function (e, t, n) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    542781: function (e, t, n) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    59023: function (e, t, n) {
      e.exports = { body: "body_e16e99" };
    },
    525550: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    38569: function (e, t, n) {
      e.exports = { back: "back_fd80e5" };
    },
    244203: function (e, t, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    473156: function (e, t, n) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    309951: function (e, t, n) {
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
    748605: function (e, t, n) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    679640: function (e, t, n) {
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
    15841: function (e, t, n) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    3936: function (e, t, n) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    45785: function (e, t, n) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    522888: function (e, t, n) {
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
    898492: function (e, t, n) {
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
    910485: function (e, t, n) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    133130: function (e, t, n) {
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
    703236: function (e, t, n) {
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
    294188: function (e, t, n) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    658160: function (e, t, n) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    203748: function (e, t, n) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    632354: function (e, t, n) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    651523: function (e, t, n) {
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
    261842: function (e, t, n) {
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
    599215: function (e, t, n) {
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
//# sourceMappingURL=83de8de9e23a5ad6bbf5.js.map
