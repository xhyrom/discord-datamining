"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49288"],
  {
    74316: function (e) {
      e.exports = "/assets/248040b40c437bc61301.svg";
    },
    51125: function (e) {
      e.exports = "/assets/7c915af96aa37d5a4fe4.svg";
    },
    47268: function (e) {
      e.exports = "/assets/357da48609c8d3354a8b.svg";
    },
    123353: function (e) {
      e.exports = "/assets/f149df20b772b40f618a.svg";
    },
    269128: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(772848),
        l = n(841261);
      let s = (0, o.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: a = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(l.button, n, { [l.open]: t, [l.withHighlight]: a }),
          children: [
            a &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, r.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, r.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, r.jsx)("path", {
                  stroke: a ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: a ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    89057: function (e, t, n) {
      n.d(t, {
        Vq: function () {
          return v;
        },
        c8: function () {
          return x;
        },
        oQ: function () {
          return k;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(692547),
        l = n(780384),
        s = n(481060),
        c = n(410030),
        d = n(600164),
        u = n(63063),
        f = n(211242),
        h = n(981631),
        p = n(689938),
        b = n(943981),
        m = n(51125),
        g = n(47268);
      function _(e) {
        let { className: t } = e,
          n = (0, c.ZP)(),
          a = (0, l.wj)(n) ? m : g;
        return (0, r.jsxs)("div", {
          className: i()(b.container, t),
          children: [
            (0, r.jsx)(s.Heading, {
              className: b.header,
              variant: "heading-xl/semibold",
              children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, r.jsxs)(s.Text, {
              className: b.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, r.jsx)("p", {
                  children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, r.jsx)("p", {
                  children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: u.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: a,
              className: b.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function x() {
        return (0, r.jsx)(_, { className: b.settings });
      }
      function v(e) {
        let { onClose: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.ModalHeader, {
              className: b.blockedPaymentsModalHeader,
              justify: d.Z.Justify.END,
              children: (0, r.jsx)(s.ModalCloseButton, { onClick: t }),
            }),
            (0, r.jsx)(s.ModalContent, {
              className: b.blockedPaymentsModalContent,
              children: (0, r.jsx)(_, { className: b.modal }),
            }),
          ],
        });
      }
      function k(e) {
        let { className: t } = e;
        return (0, f.Q)()
          ? (0, r.jsxs)(s.Card, {
              className: i()(b.blockedPaymentsWarning, t),
              type: s.Card.Types.CUSTOM,
              children: [
                (0, r.jsx)(s.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: b.blockedPaymentsWarningIcon,
                  color: o.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, r.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  children:
                    p.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                      helpdeskArticle: u.Z.getArticleURL(
                        h.BhN.BLOCKED_PAYMENTS,
                      ),
                    }),
                }),
              ],
            })
          : null;
      }
    },
    285888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
        v: function () {
          return m;
        },
      }),
        n(47120);
      var r,
        a,
        i,
        o = n(735250),
        l = n(470079),
        s = n(120356),
        c = n.n(s),
        d = n(536640),
        u = n(481060),
        f = n(981631),
        h = n(689938),
        p = n(404934);
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
      ((i = r || (r = {})).TOP = "top"), (i.BOTTOM = "bottom");
      let m = {
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
          let { isDisabled: n, menuIsOpen: r } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "4px 4px 0 0" : "4px",
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
          let { isSelected: n, isFocused: r } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : r
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
      class g extends (a = l.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: r,
              valueRenderer: a,
              optionRenderer: i,
              multiValueRenderer: l,
              options: s,
              value: f,
              autofocus: b,
              disabled: g,
              clearable: _,
              searchable: x,
              styleOverrides: v,
              isMulti: k,
              placeholder: E,
              filterOption: S,
              closeMenuOnSelect: C = !0,
              ...A
            } = this.props,
            O = { ...A };
          null != b && (O.autoFocus = b),
            null != g && (O.isDisabled = g),
            null != _ && (O.isClearable = _),
            null != x && (O.isSearchable = x);
          let I = { IndicatorSeparator: () => null };
          null != i &&
            (I.Option = (e) =>
              (0, o.jsx)(d.wx.Option, { ...e, children: i(e.data) })),
            null != a &&
              (I.SingleValue = (e) =>
                (0, o.jsx)(d.wx.SingleValue, { ...e, children: a(e.data) })),
            null != l && (I.MultiValue = (e) => l(e.data));
          if (k && Array.isArray(f)) {
            let t = {};
            s.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? s.find((e) => e.value === f) : null;
          return (0, o.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: c()(p.select, t, { [p.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(d.ZP, {
                  ...O,
                  className: n,
                  ref: this._selectRef,
                  isMulti: k,
                  components: I,
                  options: s,
                  styles: null != v ? v : m,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: C,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != E ? E : h.Z.Messages.SELECT,
                  noOptionsMessage: () => h.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: S,
                }),
                null != r
                  ? (0, o.jsx)("div", {
                      className: p.errorMessage,
                      children: r,
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
              e.which === f.yXg.ESCAPE &&
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
      b(g, "MenuPlacements", r);
    },
    713316: function (e, t, n) {
      n.d(t, {
        w: function () {
          return f;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(512722),
        i = n.n(a),
        o = n(481060),
        l = n(598),
        s = n(698708),
        c = n(614277),
        d = n(689938),
        u = n(525550);
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: a,
            application: f,
          } = (0, l.usePaymentContext)();
        i()(null != a, "Expected selectedSkuId"),
          i()(null != f, "Expected application");
        let h = n[a];
        i()(null != h, "Expected sku");
        let p =
          d.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: f.name,
            itemName: h.name,
          });
        return (0, r.jsxs)(c.C3, {
          children: [
            (0, r.jsx)(s.Z, {}),
            (0, r.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, r.jsx)(o.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, r.jsx)(o.Text, { variant: "text-md/normal", children: p }),
                (0, r.jsx)("div", { className: u.divider }),
                (0, r.jsx)(o.Button, {
                  onClick: t,
                  children: d.Z.Messages.CLOSE,
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
          return _;
        },
        WA: function () {
          return h;
        },
        s2: function () {
          return p;
        },
        wo: function () {
          return g;
        },
        yp: function () {
          return x;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(853872),
        i = n(409813),
        o = n(276442),
        l = n(793541),
        s = n(380898),
        c = n(713316),
        d = n(710094),
        u = n(865921),
        f = n(689938);
      let h = { key: null, renderStep: (e) => (0, r.jsx)(u.v, { ...e }) },
        p = {
          key: i.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(o.J, {
                ...e,
                breadcrumbSteps: [
                  i.h8.ADD_PAYMENT_STEPS,
                  i.h8.REVIEW,
                  i.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(a.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(i.h8.REVIEW, {
                        trackedFromStep: i.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        b = {
          key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(s.Z, {}),
        },
        m = {
          key: i.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(l.Z, {}),
          options: { renderHeader: !0 },
        },
        g = {
          key: i.h8.REVIEW,
          renderStep: (e) => (0, r.jsx)(d.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => f.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        _ = { key: i.h8.CONFIRM, renderStep: (e) => (0, r.jsx)(c.w, { ...e }) },
        x = [b, m];
    },
    865921: function (e, t, n) {
      n.d(t, {
        v: function () {
          return h;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        i = n(512722),
        o = n.n(i),
        l = n(89057),
        s = n(987209),
        c = n(598),
        d = n(409813),
        u = n(456251),
        f = n(981631);
      function h(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: i,
            hasFetchedSkus: h,
            paymentSources: p,
            hasFetchedPaymentSources: b,
            application: m,
            skusById: g,
            selectedSkuId: _,
          } = (0, c.usePaymentContext)(),
          { isGift: x } = (0, s.wD)(),
          [v, k] = a.useState(!0);
        return (a.useEffect(() => {
          let e = null != m;
          if (!!h && !!b && !!e) k(!1);
        }, [h, b, m]),
        a.useEffect(() => {
          if (v || i) return;
          o()(null != _, "Expected selectedSkuId");
          let e = g[_];
          if (
            x &&
            (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES
          ) {
            t(d.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(p).length) {
            t(d.h8.ADD_PAYMENT_STEPS);
            return;
          }
          t(d.h8.REVIEW);
        }, [v, i, t, p, x, g, _]),
        v)
          ? (0, r.jsx)(u.Z, {})
          : i
            ? (0, r.jsx)(l.Vq, { onClose: n })
            : null;
      }
    },
    409600: function (e, t, n) {
      n.r(t),
        n.d(t, {
          STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return f;
          },
          default: function () {
            return h;
          },
        }),
        n(47120);
      var r = n(735250);
      n(470079);
      var a = n(100527),
        i = n(906732),
        o = n(987209),
        l = n(598),
        s = n(791785),
        c = n(961830),
        d = n(231338);
      function u(e) {
        let {
            onClose: t,
            onComplete: n,
            transitionState: a,
            applicationId: o,
            analyticsLocationObject: c,
            skuId: d,
          } = e,
          {} = (0, l.usePaymentContext)(),
          { analyticsLocations: u } = (0, i.ZP)();
        return (0, r.jsx)(s.PaymentModal, {
          onClose: t,
          onComplete: n,
          applicationId: o,
          skuId: d,
          initialPlanId: null,
          analyticsObject: c,
          analyticsLocations: u,
          transitionState: a,
        });
      }
      let f = [c.WA, c.s2, ...c.yp, c.wo, c.F7];
      function h(e) {
        let {
            loadId: t,
            applicationId: n,
            skuId: s,
            analyticsLocations: c,
          } = e,
          { analyticsLocations: h } = (0, i.ZP)(c, a.Z.PREMIUM_PAYMENT_MODAL);
        return (0, r.jsx)(i.Gt, {
          value: h,
          children: (0, r.jsx)(l.PaymentContextProvider, {
            loadId: t,
            stepConfigs: f,
            applicationId: n,
            skuIDs: [s],
            activeSubscription: null,
            purchaseType: d.GZ.ONE_TIME,
            children: (0, r.jsx)(o.KB, { children: (0, r.jsx)(u, { ...e }) }),
          }),
        });
      }
    },
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120),
        n(411104);
      var r = n(735250),
        a = n(470079),
        i = n(442837),
        o = n(481060),
        l = n(607070),
        s = n(409302),
        c = n(474936);
      function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: u,
            idleAnimationState: f,
          } = e,
          h = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
          [p, b] = a.useState(u),
          m = a.useRef((0, s._)(t, p)),
          [g, _] = a.useState(null == f),
          [x, v] = a.useState(!1),
          [k, E] = a.useState(-1),
          S = () => {
            (m.current = (0, s._)(t, p)), E((e) => e + 1);
          },
          C = () => {
            _(!1), v(!0), E(-1), b(u);
          };
        a.useEffect(() => {
          null == f && b(u);
        }, [f, u]),
          a.useEffect(() => {
            if (null != f && k >= 0) {
              C();
              return;
            }
            S();
          }, [t, f]),
          a.useEffect(() => {
            (!x || null == f) && S();
          }, [p]),
          a.useEffect(() => {
            x && (_(null == f), v(!1), S());
          }, [x]);
        if (!c.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, r.jsx)(o.LottieAnimation, {
          importData: m.current,
          shouldAnimate: !h && d,
          className: n,
          versionKey: k,
          onComplete:
            null != f
              ? () => {
                  null != f && (b(f), _(!0));
                }
              : void 0,
          loop: g,
        });
      }
    },
    108989: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        i = n(887024);
      let o = [n(123353)],
        l = ["#FFFFFF"],
        s = 1e3 / 60,
        c = {
          velocity: {
            type: "static-random",
            minValue: { x: 0, y: 1 },
            maxValue: { x: 3, y: 3 },
          },
          rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
          },
          size: { type: "static-random", minValue: 2, maxValue: 6 },
          dragCoefficient: { type: "static", value: { x: 0.05, y: 0.05 } },
          opacity: { type: "static", value: 0.3 },
        };
      function d(e) {
        let {
            className: t,
            firing: n = !0,
            wind: d = 2,
            sprites: u = o,
            spriteColors: f = l,
            confettiConfig: h,
          } = e,
          [p, b] = a.useState(null),
          [m, g] = a.useState(null),
          _ = (0, i.uR)(m, p),
          x = a.useMemo(() => new i.qA({ wind: d }), [d]),
          v = a.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            _.createConfetti({
              ...c,
              ...h,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -6 },
                maxValue: { x: t.width, y: -6 },
              },
            });
          }, [_, m, h]);
        return (
          a.useEffect(() => {
            let e = n ? setInterval(v, s) : null;
            return () => clearInterval(e);
          }, [n, v]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.O_, { ref: g, className: t, environment: x }),
              (0, r.jsx)(i.Ji, {
                ref: b,
                colors: f,
                sprites: u,
                spriteWidth: 6,
                spriteHeight: 6,
              }),
            ],
          })
        );
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var r = n(479446),
        a = n(474936);
      let i = (e, t) => {
        let i;
        switch (e) {
          case a.Cj.SNOWGLOBE:
            i = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.Cj.BOX:
            i = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.Cj.CUP:
            i = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.Cj.STANDARD_BOX:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.CAKE:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.CHEST:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.COFFEE:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 98860, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_CAKE:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_CHEST:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 897198, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_COFFEE:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.NITROWEEN_STANDARD:
            switch (t) {
              case r.SR.IDLE:
                i = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                i = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                i = () =>
                  n
                    .e("61365")
                    .then(n.t.bind(n, 279858, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            i = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return i;
      };
    },
    504983: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return a;
        },
      });
      var r,
        a,
        i = n(735250),
        o = n(470079),
        l = n(120356),
        s = n.n(l),
        c = n(261842);
      ((r = a || (a = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let d = {
        premium: {
          border: c.premiumFeatureBorder,
          background: c.premiumBackground,
        },
        limited: {
          border: c.limitedFeatureBorder,
          background: c.limitedBackground,
        },
      };
      t.Z = o.forwardRef(function (e, t) {
        let {
          children: n,
          type: r = "premium",
          isShown: a,
          hasBackground: o = !1,
          className: l,
          backgroundClassName: u,
        } = e;
        if (!a) return (0, i.jsx)(i.Fragment, { children: n });
        let { border: f, background: h } = d[r];
        return (0, i.jsx)("div", {
          ref: t,
          className: s()(f, l),
          children: (0, i.jsx)("div", {
            className: s()(o ? h : c.background, u),
            children: n,
          }),
        });
      });
    },
    911367: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(470079),
        a = n(365943);
      function i() {
        r.useEffect(() => {
          (0, a.z)();
        }, []);
      }
    },
    850840: function (e, t, n) {
      let r;
      n(653041);
      var a,
        i = n(442837),
        o = n(570140);
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
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class c extends (a = i.ZP.PersistedStore) {
        initialize(e) {
          r = null != e ? e : s;
        }
        getState() {
          return r;
        }
        get hasAcceptedStoreTerms() {
          return r.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return r.hasAcceptedEulaIds.includes(e);
        }
      }
      l(c, "displayName", "ApplicationStoreUserSettingsStore"),
        l(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        l(c, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new c(o.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            r.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (r.hasAcceptedEulaIds.includes(t)) return !1;
            r.hasAcceptedEulaIds.push(t);
          },
        }));
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(325767);
      function i(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: i = "currentColor",
          foreground: o,
          ...l
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: o,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    841261: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    943981: function (e, t, n) {
      e.exports = {
        container: "container_f1f9c9",
        header: "header_f1f9c9",
        description: "description_f1f9c9",
        splashImage: "splashImage_f1f9c9",
        settings: "settings_f1f9c9",
        modal: "modal_f1f9c9",
        blockedPaymentsModalHeader: "blockedPaymentsModalHeader_f1f9c9",
        blockedPaymentsModalContent: "blockedPaymentsModalContent_f1f9c9",
        blockedPaymentsWarningIcon: "blockedPaymentsWarningIcon_f1f9c9",
        blockedPaymentsWarning: "blockedPaymentsWarning_f1f9c9",
      };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    677825: function (e, t, n) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    525550: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    920667: function (e, t, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    83615: function (e, t, n) {
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
    324415: function (e, t, n) {
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
    251300: function (e, t, n) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
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
  },
]);
//# sourceMappingURL=86c946a4e6810081ffd7.js.map
