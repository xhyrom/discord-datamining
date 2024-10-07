"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51199"],
  {
    74316: function (e) {
      e.exports = "/assets/248040b40c437bc61301.svg";
    },
    679488: function (e) {
      e.exports = "/assets/5645bc51c0919b711a46.svg";
    },
    992339: function (e) {
      e.exports = "/assets/8cbb4f53d4dbb5bb9128.svg";
    },
    908570: function (e) {
      e.exports = "/assets/1f95de2ae0b33287acc5.svg";
    },
    51125: function (e) {
      e.exports = "/assets/7c915af96aa37d5a4fe4.svg";
    },
    47268: function (e) {
      e.exports = "/assets/357da48609c8d3354a8b.svg";
    },
    269128: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        l = n(772848),
        a = n(841261);
      let o = (0, l.Z)();
      s.Z = (e) => {
        let { open: s, className: n, withHighlight: r = !1 } = e;
        return (0, t.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(a.button, n, { [a.open]: s, [a.withHighlight]: r }),
          children: [
            r &&
              (0, t.jsx)("defs", {
                children: (0, t.jsxs)("linearGradient", {
                  id: o,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, t.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, t.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, t.jsx)("path", {
                  stroke: r ? "url(#".concat(o, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, t.jsx)("path", {
                  stroke: r ? "url(#".concat(o, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    89057: function (e, s, n) {
      n.d(s, {
        Vq: function () {
          return E;
        },
        c8: function () {
          return I;
        },
        oQ: function () {
          return M;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        l = n(692547),
        a = n(780384),
        o = n(481060),
        C = n(410030),
        d = n(600164),
        u = n(63063),
        c = n(211242),
        _ = n(981631),
        p = n(689938),
        x = n(943981),
        h = n(51125),
        L = n(47268);
      function f(e) {
        let { className: s } = e,
          n = (0, C.ZP)(),
          r = (0, a.wj)(n) ? h : L;
        return (0, t.jsxs)("div", {
          className: i()(x.container, s),
          children: [
            (0, t.jsx)(o.Heading, {
              className: x.header,
              variant: "heading-xl/semibold",
              children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, t.jsxs)(o.Text, {
              className: x.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, t.jsx)("p", {
                  children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, t.jsx)("p", {
                  children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: u.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, t.jsx)("img", {
              src: r,
              className: x.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function I() {
        return (0, t.jsx)(f, { className: x.settings });
      }
      function E(e) {
        let { onClose: s } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.ModalHeader, {
              className: x.blockedPaymentsModalHeader,
              justify: d.Z.Justify.END,
              children: (0, t.jsx)(o.ModalCloseButton, { onClick: s }),
            }),
            (0, t.jsx)(o.ModalContent, {
              className: x.blockedPaymentsModalContent,
              children: (0, t.jsx)(f, { className: x.modal }),
            }),
          ],
        });
      }
      function M(e) {
        let { className: s } = e;
        return (0, c.Q)()
          ? (0, t.jsxs)(o.Card, {
              className: i()(x.blockedPaymentsWarning, s),
              type: o.Card.Types.CUSTOM,
              children: [
                (0, t.jsx)(o.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: x.blockedPaymentsWarningIcon,
                  color: l.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, t.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    p.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                      helpdeskArticle: u.Z.getArticleURL(
                        _.BhN.BLOCKED_PAYMENTS,
                      ),
                    }),
                }),
              ],
            })
          : null;
      }
    },
    832149: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var r = n(481060);
      s.Z = (e) => {
        let { product: s, analyticsLocations: i } = e;
        (0, r.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("87624"),
            n.e("28428"),
          ]).then(n.bind(n, 331042));
          return (n) =>
            (0, t.jsx)(e, { product: s, analyticsLocations: i, ...n });
        });
      };
    },
    285888: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return L;
        },
        v: function () {
          return h;
        },
      }),
        n(47120);
      var t,
        r,
        i,
        l = n(735250),
        a = n(470079),
        o = n(120356),
        C = n.n(o),
        d = n(536640),
        u = n(481060),
        c = n(981631),
        _ = n(689938),
        p = n(404934);
      function x(e, s, n) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = n),
          e
        );
      }
      ((i = t || (t = {})).TOP = "top"), (i.BOTTOM = "bottom");
      let h = {
        container: (e, s) => {
          let { isDisabled: n } = s;
          return {
            ...e,
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, s) => {
          let { isDisabled: n, menuIsOpen: t } = s;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: t ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, s) => {
          let { isDisabled: n } = s;
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
        clearIndicator: (e, s) => {
          let { isDisabled: n } = s;
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
        dropdownIndicator: (e, s) => {
          let { isDisabled: n } = s;
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
        option: (e, s) => {
          let { isSelected: n, isFocused: t } = s;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : t
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
      class L extends (r = a.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: s,
              selectClassName: n,
              error: t,
              valueRenderer: r,
              optionRenderer: i,
              multiValueRenderer: a,
              options: o,
              value: c,
              autofocus: x,
              disabled: L,
              clearable: f,
              searchable: I,
              styleOverrides: E,
              isMulti: M,
              placeholder: N,
              filterOption: j,
              closeMenuOnSelect: g = !0,
              ...T
            } = this.props,
            m = { ...T };
          null != x && (m.autoFocus = x),
            null != L && (m.isDisabled = L),
            null != f && (m.isClearable = f),
            null != I && (m.isSearchable = I);
          let S = { IndicatorSeparator: () => null };
          null != i &&
            (S.Option = (e) =>
              (0, l.jsx)(d.wx.Option, { ...e, children: i(e.data) })),
            null != r &&
              (S.SingleValue = (e) =>
                (0, l.jsx)(d.wx.SingleValue, { ...e, children: r(e.data) })),
            null != a && (S.MultiValue = (e) => a(e.data));
          if (M && Array.isArray(c)) {
            let s = {};
            o.forEach((e) => {
              s[String(e.value)] = e;
            }),
              (e = c.map((e) => s[String(e)]));
          } else e = null != c ? o.find((e) => e.value === c) : null;
          return (0, l.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)("div", {
              className: C()(p.select, s, { [p.error]: null != t }),
              ref: this._containerRef,
              children: [
                (0, l.jsx)(d.ZP, {
                  ...m,
                  className: n,
                  ref: this._selectRef,
                  isMulti: M,
                  components: S,
                  options: o,
                  styles: null != E ? E : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: g,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != N ? N : _.Z.Messages.SELECT,
                  noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: j,
                }),
                null != t
                  ? (0, l.jsx)("div", {
                      className: p.errorMessage,
                      children: t,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            x(this, "_selectRef", a.createRef()),
            x(this, "_containerRef", a.createRef()),
            x(this, "state", { isFocused: !1, isOpen: !1 }),
            x(this, "handleFocus", (e) => {
              var s, n;
              this.setState({ isFocused: !0 }),
                null === (s = (n = this.props).onFocus) ||
                  void 0 === s ||
                  s.call(n, e);
            }),
            x(this, "handleBlur", (e) => {
              var s, n;
              this.setState({ isFocused: !1 }),
                null === (s = (n = this.props).onBlur) ||
                  void 0 === s ||
                  s.call(n, e);
            }),
            x(this, "handleKeyDown", (e) => {
              e.which === c.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            x(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            x(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      x(L, "MenuPlacements", t);
    },
    592627: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return x;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(481060),
        i = n(906732),
        l = n(832149),
        a = n(600164),
        o = n(857039),
        C = n(515593),
        d = n(598),
        u = n(614277),
        c = n(474936),
        _ = n(689938),
        p = n(744078);
      function x(e) {
        let { onClose: s, halloweenDecoPurchase: n } = e,
          { selectedPlan: x } = (0, d.usePaymentContext)(),
          { analyticsLocations: h } = (0, i.ZP)();
        return (0, o.Z)({ location: "Gift purchase confirmation" }) &&
          (null == x ? void 0 : x.skuId) === c.Si.TIER_2 &&
          null != n
          ? (0, t.jsx)(u.O3, {
              children: (0, t.jsx)(r.ModalFooter, {
                align: a.Z.Align.CENTER,
                children: (0, t.jsxs)("div", {
                  className: p.halloweenFooter,
                  children: [
                    (0, t.jsx)(C.Z, { size: r.AvatarSizes.SIZE_32 }),
                    (0, t.jsx)(r.Button, {
                      onClick: () => {
                        s(), (0, l.Z)({ product: n, analyticsLocations: h });
                      },
                      children: _.Z.Messages.NITROWEEN_GIFT_CONFIRMATION_CTA,
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
    },
    293858: function (e, s, n) {
      n.d(s, {
        b: function () {
          return L;
        },
      });
      var t = n(735250),
        r = n(470079),
        i = n(512722),
        l = n.n(i),
        a = n(881602),
        o = n(155491),
        C = n(317269),
        d = n(669079),
        u = n(296848),
        c = n(987209),
        _ = n(598),
        p = n(592627),
        x = n(614277),
        h = n(698708);
      function L(e) {
        var s, n;
        let i,
          {
            handleClose: L,
            planGroup: f,
            onSubscriptionConfirmation: I,
            renderPurchaseConfirmation: E,
            postSuccessGuild: M,
            followupSKUInfo: N,
            continueSession: j,
          } = e,
          {
            activeSubscription: g,
            paymentSources: T,
            paymentSourceId: m,
            selectedPlan: S,
            selectedSkuId: A,
            step: O,
            updatedSubscription: R,
            startingPremiumSubscriptionPlanIdRef: P,
          } = (0, _.usePaymentContext)(),
          {
            isGift: Z,
            giftRecipient: v,
            giftCode: y,
            hasSentMessage: U,
            isSendingMessage: b,
            sendGiftMessage: H,
          } = (0, c.wD)(),
          B = (0, o.Z2)();
        l()(null != S, "Expected plan to selected"),
          l()(null != A, "Expected selectedSkuId"),
          l()(null != O, "Step should be set");
        let k = r.useCallback(() => {
          L(), null == I || I();
        }, [L, I]);
        return (
          r.useEffect(() => {
            if (!(!Z || null == v || null == y || U || b || (0, d.pO)(v)))
              a.F.getCurrentConfig({ location: "36b986_1" }).enabled &&
                H({ onSubscriptionConfirmation: I });
          }, [H, Z, v, y, U, b, I]),
          (i =
            null != E
              ? E(S, k, R)
              : j
                ? (0, t.jsx)(C.VY, {})
                : Z
                  ? (0, t.jsx)(C.TB, {
                      planId: S.id,
                      onClose: k,
                      halloweenDecoPurchase: B,
                    })
                  : P.current === S.id
                    ? (0, t.jsx)(C.ZP, {
                        planId: S.id,
                        postSuccessGuild: M,
                        onClose: k,
                        paymentSourceType:
                          null === (s = T[null != m ? m : ""]) || void 0 === s
                            ? void 0
                            : s.type,
                      })
                    : (0, t.jsx)(C.ZP, {
                        followupSKUInfo: N,
                        startingPremiumSubscriptionPlanId: P.current,
                        planId: S.id,
                        onClose: k,
                        isDowngrade: null != g && (0, u.GY)(g, S.id, f),
                        paymentSourceType:
                          null === (n = T[null != m ? m : ""]) || void 0 === n
                            ? void 0
                            : n.type,
                      })),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(x.C3, { children: [(0, t.jsx)(h.Z, {}), i] }),
              Z
                ? (0, t.jsx)(p.Z, { onClose: k, halloweenDecoPurchase: B })
                : null,
            ],
          })
        );
      }
    },
    7305: function (e, s, n) {
      n.r(s),
        n.d(s, {
          PremiumPaymentModal: function () {
            return P;
          },
          STEPS: function () {
            return y;
          },
          default: function () {
            return U;
          },
        }),
        n(411104),
        n(47120);
      var t = n(735250),
        r = n(470079),
        i = n(442837),
        l = n(570140),
        a = n(821849),
        o = n(100527),
        C = n(906732),
        d = n(509545),
        u = n(78839),
        c = n(669079),
        _ = n(987209),
        p = n(598),
        x = n(409813),
        h = n(791785),
        L = n(276442),
        f = n(793541),
        I = n(380898),
        E = n(710094),
        M = n(293858),
        N = n(614223),
        j = n(174827),
        g = n(846464),
        T = n(184160),
        m = n(48175),
        S = n(981631),
        A = n(474936),
        O = n(689938);
      let R = [
        x.h8.PLAN_SELECT,
        x.h8.ADD_PAYMENT_STEPS,
        x.h8.REVIEW,
        x.h8.CONFIRM,
      ];
      function P(e) {
        let {
            analyticsLocation: s,
            analyticsObject: n,
            analyticsSourceLocation: i,
            onComplete: o,
            transitionState: u,
            initialPlanId: L,
            subscriptionTier: f,
            onClose: I,
            trialId: E,
            trialFooterMessageOverride: M,
            reviewWarningMessage: N,
            openInvoiceId: j,
            onSubscriptionConfirmation: g,
            renderPurchaseConfirmation: T,
            postSuccessGuild: m,
            followupSKUInfo: O,
            renderHeader: R,
            applicationId: P,
            guildId: Z,
            referralTrialOfferId: v,
            skuId: y,
            returnRef: U,
            skipConfirm: b = !1,
            continueSession: H = !1,
          } = e,
          { analyticsLocations: B } = (0, C.ZP)();
        r.useEffect(() => {
          !d.Z.isLoadedForPremiumSKUs() && l.Z.wait(() => (0, a.Y2)());
        }, []);
        let { step: k } = (0, p.usePaymentContext)(),
          { isGift: F, giftMessage: G, giftRecipient: w } = (0, _.wD)(),
          D = F && (0, c.pO)(w) && k === x.h8.PLAN_SELECT;
        return (0, t.jsx)(h.PaymentModal, {
          analyticsLocations: B,
          analyticsLocation: s,
          analyticsObject: n,
          analyticsSourceLocation: i,
          analyticsSubscriptionType: S.NYc.PREMIUM,
          onComplete: o,
          transitionState: u,
          initialPlanId: L,
          giftMessage: G,
          subscriptionTier: f,
          onClose: I,
          trialId: E,
          isGift: F,
          trialFooterMessageOverride: M,
          reviewWarningMessage: N,
          planGroup: A.Y1,
          openInvoiceId: j,
          onSubscriptionConfirmation: g,
          renderPurchaseConfirmation: T,
          postSuccessGuild: m,
          followupSKUInfo: O,
          renderHeader: R,
          applicationId: P,
          guildId: Z,
          referralTrialOfferId: v,
          skuId: y,
          shakeWhilePurchasing: !0,
          isLargeModal: D,
          returnRef: U,
          skipConfirm: b,
          continueSession: H,
        });
      }
      function Z(e) {
        let { startedPaymentFlowWithPaymentSourcesRef: s, selectedSkuId: n } =
            (0, p.usePaymentContext)(),
          { isGift: t } = (0, _.wD)();
        return (0, N.Kp)({
          isTrial: null != e && e,
          isGift: t,
          selectedSkuId: n,
          startedPaymentFlowWithPaymentSources: s.current,
        });
      }
      function v(e) {
        let {
            initialPlanId: s,
            handleStepChange: n,
            referralTrialOfferId: r,
          } = e,
          { paymentSources: i, selectedSkuId: l } = (0, p.usePaymentContext)(),
          { isGift: a } = (0, _.wD)(),
          o = Z((0, m.Z)({ isGift: a, skuId: l, referralTrialOfferId: r }));
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(L.J, {
            ...e,
            breadcrumbSteps: R,
            onReturn: () => {
              let e =
                Object.values(i).length < 1 && null == s
                  ? x.h8.PLAN_SELECT
                  : x.h8.REVIEW;
              o && (e = x.h8.REVIEW),
                n(e, { trackedFromStep: x.h8.PAYMENT_TYPE });
            },
          }),
        });
      }
      let y = [
        {
          key: null,
          renderStep: (e) => (0, t.jsx)(h.PaymentPredicateStep, { ...e }),
        },
        {
          key: x.h8.SKU_SELECT,
          renderStep: (e) => (0, t.jsx)(g.q, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: x.h8.WHAT_YOU_LOSE,
          renderStep: (e) => (0, t.jsx)(T.x, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: x.h8.PLAN_SELECT,
          renderStep: (e) => (0, t.jsx)(j.x, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              Z(e) ? null : O.Z.Messages.BILLING_STEP_SELECT_PLAN,
          },
        },
        {
          key: x.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(v, { ...e }) }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              Z(e) ? null : O.Z.Messages.BILLING_STEP_PAYMENT,
          },
        },
        {
          key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, t.jsx)(I.Z, {}),
        },
        {
          key: x.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, t.jsx)(f.Z, {}),
        },
        {
          key: x.h8.REVIEW,
          renderStep: (e) => (0, t.jsx)(E.l, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              Z(e)
                ? O.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                : O.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        { key: x.h8.CONFIRM, renderStep: (e) => (0, t.jsx)(M.b, { ...e }) },
      ];
      function U(e) {
        let s = (0, i.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: n } = (0, C.ZP)(
            e.analyticsLocations,
            o.Z.PREMIUM_PAYMENT_MODAL,
          ),
          {
            subscriptionTier: r,
            isGift: l,
            giftRecipient: a,
            giftMessage: d,
            giftStyle: c,
            loadId: x,
            defaultPlanId: h,
            referralCode: L,
            repeatPurchase: f,
          } = e;
        if (null != r && !Object.values(A.Si).includes(r))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, t.jsx)(C.Gt, {
          value: n,
          children: (0, t.jsx)(p.PaymentContextProvider, {
            loadId: x,
            activeSubscription: null != e.subscription ? e.subscription : s,
            stepConfigs: y,
            skuIDs: [...A.YQ],
            isGift: l,
            defaultPlanId: h,
            referralCode: L,
            repeatPurchase: f,
            children: (0, t.jsx)(_.KB, {
              isGift: l,
              giftRecipient: null == a ? void 0 : a,
              giftMessage: d,
              giftStyle: c,
              children: (0, t.jsx)(P, { ...e }),
            }),
          }),
        });
      }
    },
    174827: function (e, s, n) {
      n.d(s, {
        x: function () {
          return k;
        },
      }),
        n(47120);
      var t = n(735250),
        r = n(470079),
        i = n(512722),
        l = n.n(i),
        a = n(399606),
        o = n(481060),
        C = n(975608),
        d = n(600164),
        u = n(711459),
        c = n(374649),
        _ = n(650032),
        p = n(439017),
        x = n(857039),
        h = n(515593),
        L = n(104494),
        f = n(639119),
        I = n(642530),
        E = n(381507),
        M = n(314404),
        N = n(594174),
        j = n(509545),
        g = n(669079),
        T = n(63063),
        m = n(74538),
        S = n(987209),
        A = n(598),
        O = n(409813),
        R = n(51499),
        P = n(456251),
        Z = n(614277),
        v = n(809144),
        y = n(698708),
        U = n(981631),
        b = n(474936),
        H = n(689938),
        B = n(577581);
      function k(e) {
        var s, n, i;
        let {
            handleStepChange: k,
            initialPlanId: F,
            subscriptionTier: G,
            trialId: w,
            referralTrialOfferId: D,
            handleClose: W,
          } = e,
          {
            activeSubscription: Y,
            hasFetchedSubscriptions: K,
            paymentSourceId: V,
            paymentSources: X,
            selectedSkuId: Q,
            selectedPlan: z,
            step: q,
            defaultPlanId: J,
            priceOptions: $,
            isPremium: ee,
          } = (0, A.usePaymentContext)(),
          { isGift: es, giftRecipient: en, giftMessage: et } = (0, S.wD)(),
          er = null != V ? X[V] : null,
          { newPlans: ei } = u.ZP.useExperiment(
            { location: "d17fd6_3" },
            { autoTrackExposure: !1 },
          ),
          el = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
          ea =
            !es &&
            null != Q &&
            Q === b.Si.TIER_2 &&
            null != el &&
            el.hasHadPremium() &&
            K &&
            null == Y &&
            (0, u.aQ)(er),
          eo = (0, f.N)(D),
          eC =
            !es &&
            null != eo &&
            null != Q &&
            b.nG[eo.trial_id].skus.includes(Q),
          ed = (0, L.Ng)(),
          eu =
            null == ed
              ? void 0
              : null === (s = ed.discount) || void 0 === s
                ? void 0
                : s.plan_ids.some((e) => b.GP[e].skuId === Q),
          ec = !es && null != ed && null != Q && eu,
          e_ = null !== (n = eC || ec) && void 0 !== n && n,
          { defaultToMonthlyPlan: ep } = p.k.useExperiment(
            { location: "d17fd6_4" },
            { autoTrackExposure: !1 },
          ),
          ex = r.useMemo(
            () =>
              (0, m.V7)({
                skuId: Q,
                isPremium: ee,
                multiMonthPlans: ea ? ei : [],
                currentSubscription: Y,
                isGift: es,
                isEligibleForTrial: eC,
                defaultPlanId: J,
                defaultToMonthlyPlan: ep,
              }),
            [Q, ee, ei, Y, ea, es, eC, J, ep],
          ),
          eh =
            ec && ex.includes(b.Xh.PREMIUM_MONTH_TIER_2)
              ? b.Xh.PREMIUM_MONTH_TIER_2
              : ex[0],
          eL = (0, a.e7)([j.Z], () => j.Z.get(eh)),
          ef = [{ planId: null == eL ? void 0 : eL.id, quantity: 1 }],
          [eI, eE] = r.useState(e_),
          [eM, eN] = (0, c.ED)({
            items: ef,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency,
          }),
          ej =
            (0, x.Z)({ location: "PremiumGiftPlanSelect" }) &&
            (null == eL ? void 0 : eL.skuId) === b.Si.TIER_2;
        r.useEffect(() => {
          e_ && eE((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
        }, [eM, e_]),
          (0, C.Z)(
            "Payment Modal Plan Select Step",
            eI,
            5,
            {
              proratedInvoicePreview: eM,
              proratedInvoiceError: eN,
              isEligibleForOffer: e_,
            },
            { tags: { app_context: "billing" } },
          );
        let eg =
            null !== (i = null == eN ? void 0 : eN.message) && void 0 !== i
              ? i
              : H.Z.Messages.ERROR_GENERIC_TITLE,
          eT = e_ && null == eN,
          em = e_ && null != eN,
          eS =
            eT &&
            null == Y &&
            !!e_ &&
            (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
          { enabled: eA } = _._.useExperiment(
            { location: "PremiumPaymentPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eO =
            !es &&
            (null == eL ? void 0 : eL.skuId) === b.Si.TIER_2 &&
            (null == eo ? void 0 : eo.referrer_id) != null &&
            eA,
          eR = null;
        return ((eR = eO ? (0, t.jsx)(E.Z, {}) : (0, t.jsx)(I.Z, {})), eS)
          ? (0, t.jsx)(P.Z, {})
          : (l()(null != q, "Step should be set"),
            l()(ex.length > 0, "Premium plan options should be set"),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(v.P, { giftMessage: et }),
                !(es && (0, g.pO)(en)) &&
                  (0, t.jsx)(R.Z, { isEligibleForTrial: eC }),
                (0, t.jsxs)(Z.C3, {
                  children: [
                    eT &&
                      (0, t.jsx)("hr", {
                        className: B.planSelectSeparatorUpper,
                      }),
                    eR,
                    (0, t.jsx)(y.Z, {}),
                    em
                      ? (0, t.jsx)(o.FormErrorBlock, { children: eg })
                      : (0, t.jsx)(M.O, {
                          planOptions: ex,
                          eligibleForMultiMonthPlans: ea,
                          referralTrialOfferId: D,
                          selectedPlanId: null == z ? void 0 : z.id,
                          subscriptionPeriodEnd:
                            null == eM ? void 0 : eM.subscriptionPeriodEnd,
                          discountInvoiceItems: ec
                            ? null == eM
                              ? void 0
                              : eM.invoiceItems
                            : void 0,
                          handleClose: W,
                        }),
                    eT &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("hr", {
                            className: B.planSelectSeparatorLower,
                          }),
                          (0, t.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children:
                              H.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format(
                                {
                                  link: T.Z.getArticleURL(
                                    U.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                                  ),
                                },
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, t.jsxs)(Z.O3, {
                  children: [
                    ej
                      ? (0, t.jsxs)("div", {
                          className: B.nitroweenFooterBanner,
                          children: [
                            (0, t.jsx)(h.Z, { size: o.AvatarSizes.SIZE_40 }),
                            (0, t.jsx)(o.Text, {
                              variant: "text-md/normal",
                              color: "always-white",
                              children:
                                H.Z.Messages
                                  .NITROWEEN_DESKTOP_GIFT_PURCHASE_DESCRIPTION,
                            }),
                          ],
                        })
                      : null,
                    (0, t.jsx)(o.ModalFooter, {
                      justify: d.Z.Justify.BETWEEN,
                      align: d.Z.Align.CENTER,
                      children: (0, t.jsx)(M.M, {
                        onStepChange: k,
                        onBackClick: () => k(O.h8.SKU_SELECT),
                        showBackButton: null == F && null == G,
                        planOptions: ex,
                        shouldRenderUpdatedPaymentModal: eT,
                        isTrial: eC,
                      }),
                    }),
                  ],
                }),
              ],
            }));
      }
    },
    846464: function (e, s, n) {
      n.d(s, {
        q: function () {
          return M;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(120356),
        i = n.n(r),
        l = n(481060),
        a = n(140465),
        o = n(857039),
        C = n(639119),
        d = n(55610),
        u = n(973007),
        c = n(74538),
        _ = n(987209),
        p = n(598),
        x = n(409813),
        h = n(614223),
        L = n(48175),
        f = n(474936),
        I = n(689938),
        E = n(885032);
      function M(e) {
        let {
            handleStepChange: s,
            handleClose: n,
            referralTrialOfferId: r,
          } = e,
          {
            setSelectedSkuId: i,
            activeSubscription: l,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: u,
            priceOptions: I,
          } = (0, p.usePaymentContext)(),
          { isGift: E } = (0, _.wD)(),
          M = (0, o.Z)({ location: "Payment SKU Selection" }),
          j = (0, C.N)(r),
          g = (0, a.Nx)();
        return (0, t.jsx)(N, {
          selectSku: (e) =>
            (function (e) {
              let {
                activeSubscription: s,
                newSkuId: n,
                setSelectedSkuId: t,
                handleStepChange: r,
                isGift: i,
                userTrialOffer: l,
                setSelectedPlanId: a,
                startedPaymentFlowWithPaymentSources: o,
              } = e;
              t(n);
              let C = x.h8.PLAN_SELECT,
                d = (0, c.k5)(s);
              (d === f.Si.TIER_1 || d === f.Si.TIER_2) &&
                n === f.Si.TIER_0 &&
                !i &&
                (C = x.h8.WHAT_YOU_LOSE);
              let u = (0, L.T)({ userTrialOffer: l, isGift: i, skuId: n }),
                _ = (0, h.Kp)({
                  isTrial: u,
                  isGift: i,
                  selectedSkuId: n,
                  startedPaymentFlowWithPaymentSources: o,
                });
              C !== x.h8.WHAT_YOU_LOSE &&
                _ &&
                ((C = x.h8.REVIEW), a((0, h.nA)(n, s))),
                r(C, { analyticsDataOverride: { sku_id: n } });
            })({
              activeSubscription: l,
              newSkuId: e,
              setSelectedSkuId: i,
              handleStepChange: s,
              isGift: E,
              userTrialOffer: j,
              startedPaymentFlowWithPaymentSources: d.current,
              setSelectedPlanId: u,
            }),
          onClose: n,
          isGift: E,
          inOfferExperience: g,
          priceOptions: I,
          shouldShowHalloweenTier2Card: M,
        });
      }
      function N(e) {
        let {
          selectSku: s,
          onClose: n,
          isGift: r,
          inOfferExperience: a,
          priceOptions: o,
          shouldShowHalloweenTier2Card: C,
        } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(l.ModalHeader, {
              className: E.skuSelectModalHeader,
              separator: !1,
              children: [
                (0, t.jsx)(l.FormTitle, {
                  tag: l.FormTitleTags.H4,
                  children: I.Z.Messages.BILLING_STEP_SELECT_PLAN,
                }),
                (0, t.jsx)(l.ModalCloseButton, { onClick: n }),
              ],
            }),
            (0, t.jsxs)(l.ModalContent, {
              className: i()(E.skuSelectModalContent, { [E.modalPadding]: a }),
              children: [
                (0, t.jsx)(d.Z, {
                  fromBoostCancelModal: !1,
                  className: E.legacyPricingNotice,
                }),
                (0, t.jsx)(u.Z, {
                  onSelectSku: (e) => s((0, c.Wz)(e)),
                  isGift: r,
                  priceOptions: o,
                  shouldShowHalloweenTier2Card: C,
                }),
              ],
            }),
          ],
        });
      }
    },
    184160: function (e, s, n) {
      n.d(s, {
        x: function () {
          return L;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(512722),
        i = n.n(r),
        l = n(780384),
        a = n(481060),
        o = n(410030),
        C = n(973159),
        d = n(74538),
        u = n(987209),
        c = n(598),
        _ = n(409813),
        p = n(614223),
        x = n(689938),
        h = n(117787);
      function L(e) {
        let { handleStepChange: s, handleClose: n } = e,
          r = (0, o.ZP)(),
          {
            activeSubscription: L,
            selectedSkuId: f,
            setSelectedPlanId: I,
            startedPaymentFlowWithPaymentSourcesRef: E,
          } = (0, c.usePaymentContext)(),
          { isGift: M } = (0, u.wD)(),
          N = null != L ? (0, d.Af)(L) : null,
          j = null != N ? (0, d.gq)(N.planId) : null,
          g = null != N ? (0, d.Rd)(N.planId) : null,
          T = (0, p.Kp)({
            isTrial: !1,
            isGift: M,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: E.current,
          });
        return (
          i()(null != g, "Expected premium type"),
          (0, t.jsx)(C.Z, {
            premiumType: g,
            titleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText:
              x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                subscriptionName: j,
              }),
            footer: (0, t.jsxs)("div", {
              className: h.whatYouLoseButtonContainer,
              children: [
                (0, t.jsx)(a.Button, {
                  onClick: () => {
                    T
                      ? (I((0, p.nA)(f, L)), s(_.h8.REVIEW))
                      : s(_.h8.PLAN_SELECT);
                  },
                  children: x.Z.Messages.CONTINUE,
                }),
                (0, t.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: (0, l.wj)(r)
                    ? a.Button.Colors.WHITE
                    : a.Button.Colors.PRIMARY,
                  onClick: n,
                  children: x.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                }),
              ],
            }),
            onClose: n,
            isDowngrade: !0,
          })
        );
      }
    },
    881602: function (e, s, n) {
      n.d(s, {
        F: function () {
          return t;
        },
      });
      let t = (0, n(818083).B)({
        kind: "user",
        id: "2023-07_automated_gift_code_message",
        label:
          "Automatically send gift code message in direct message to gift recipient",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Show the automated gift code message",
            config: { enabled: !0 },
          },
        ],
      });
    },
    105759: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = n(470079),
        r = n(442837),
        i = n(598077),
        l = n(699516),
        a = n(295226),
        o = n(786397),
        C = n(474936);
      function d() {
        let e = (0, o.w)(C.a7),
          s = (0, r.e7)([a.Z], () =>
            a.Z.getReferrer(null == e ? void 0 : e.trial_id),
          ),
          n = (0, r.e7)([l.Z], () => null == s || l.Z.isBlocked(s.id));
        return t.useMemo(() => (n || null == s ? null : new i.Z(s)), [s, n]);
      }
    },
    381507: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var r = n(780384),
        i = n(481060),
        l = n(410030),
        a = n(518950),
        o = n(51144),
        C = n(105759),
        d = n(898969),
        u = n(703614),
        c = n(182294),
        _ = n(689938),
        p = n(279521);
      s.Z = () => {
        let e = (0, C.Z)(),
          { avatarSrc: s, eventHandlers: n } = (0, a.Z)({
            user: e,
            size: c.EF.SIZE_32,
            animateOnHover: !0,
          }),
          x = (0, l.Fg)(),
          h = (0, r.ap)(x),
          L = o.ZP.getName(e),
          f = h ? d.Z : u.Z;
        return null == e
          ? null
          : (0, t.jsxs)("div", {
              className: p.attributionBannerContainer,
              children: [
                (0, t.jsx)("div", {
                  className: p.avatarContainer,
                  children: (0, t.jsx)(i.Avatar, {
                    src: s,
                    "aria-label": e.username,
                    size: c.EF.SIZE_32,
                    ...n,
                  }),
                }),
                (0, t.jsx)(i.Text, {
                  variant: "text-xs/bold",
                  className: p.bannerHeader,
                  children:
                    _.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
                      userName: L,
                    }),
                }),
                (0, t.jsx)(f, { className: p.bannerIcon }),
              ],
            });
      };
    },
    898969: function (e, s, n) {
      var t = n(735250);
      n(470079);
      s.Z = (e) => {
        let { className: s, width: n = 83, height: r = 45 } = e;
        return (0, t.jsxs)("svg", {
          width: n,
          height: r,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: s,
          children: [
            (0, t.jsxs)("g", {
              opacity: "0.6",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1558_55666)",
                }),
                (0, t.jsxs)("g", {
                  clipPath: "url(#clip0_1558_55666)",
                  children: [
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1558_55666)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1558_55666)",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1558_55666)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1558_55666)",
                  fillOpacity: "0.9",
                }),
                (0, t.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1558_55666)",
                }),
                (0, t.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1558_55666)",
                }),
              ],
            }),
            (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("linearGradient", {
                  id: "paint0_linear_1558_55666",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint1_linear_1558_55666",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint2_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint3_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint4_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint5_linear_1558_55666",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint6_linear_1558_55666",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint7_linear_1558_55666",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint8_linear_1558_55666",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint9_linear_1558_55666",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint10_linear_1558_55666",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint11_linear_1558_55666",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint12_linear_1558_55666",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsx)("clipPath", {
                  id: "clip0_1558_55666",
                  children: (0, t.jsx)("rect", {
                    width: "16.3534",
                    height: "16.3534",
                    fill: "white",
                    transform: "translate(39.6143 14.9869)",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    703614: function (e, s, n) {
      var t = n(735250);
      n(470079);
      s.Z = (e) => {
        let { className: s, width: n = 83, height: r = 45 } = e;
        return (0, t.jsxs)("svg", {
          width: n,
          height: r,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: s,
          children: [
            (0, t.jsxs)("g", {
              opacity: "0.4",
              children: [
                (0, t.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1521_51082)",
                }),
                (0, t.jsxs)("g", {
                  clipPath: "url(#clip0_1521_51082)",
                  children: [
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1521_51082)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1521_51082)",
                    }),
                    (0, t.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1521_51082)",
                    }),
                    (0, t.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, t.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1521_51082)",
                  fillOpacity: "0.9",
                }),
                (0, t.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1521_51082)",
                }),
                (0, t.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1521_51082)",
                }),
              ],
            }),
            (0, t.jsxs)("defs", {
              children: [
                (0, t.jsxs)("linearGradient", {
                  id: "paint0_linear_1521_51082",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint1_linear_1521_51082",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint2_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint3_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint4_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint5_linear_1521_51082",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint6_linear_1521_51082",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint7_linear_1521_51082",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint8_linear_1521_51082",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint9_linear_1521_51082",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint10_linear_1521_51082",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint11_linear_1521_51082",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsxs)("linearGradient", {
                  id: "paint12_linear_1521_51082",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, t.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, t.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, t.jsx)("clipPath", {
                  id: "clip0_1521_51082",
                  children: (0, t.jsx)("rect", {
                    width: "16.3534",
                    height: "16.3534",
                    fill: "white",
                    transform: "translate(39.6143 14.9869)",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    973007: function (e, s, n) {
      var t = n(735250);
      n(470079);
      var r = n(481060),
        i = n(184508),
        l = n(823188),
        a = n(474936),
        o = n(377628);
      function C(e) {
        let {
          onClick: s,
          isGift: n,
          priceOptions: i,
          showHalloweenGift: a,
          shouldUseTaglineXPCopy: C,
        } = e;
        return (0, t.jsx)(r.Clickable, {
          onClick: s,
          style: { cursor: "pointer" },
          children: (0, t.jsx)(l.wp, {
            className: o.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !a && !C,
            showHalloweenGift: a,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: i,
            shouldUseTaglineXPCopy: C,
          }),
        });
      }
      function d(e) {
        let {
          onClick: s,
          isGift: n,
          priceOptions: i,
          shouldUseTaglineXPCopy: a,
        } = e;
        return (0, t.jsx)(r.Clickable, {
          onClick: s,
          style: { cursor: "pointer" },
          children: (0, t.jsx)(l.Gq, {
            className: o.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !a,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: i,
            shouldUseTaglineXPCopy: a,
          }),
        });
      }
      s.Z = function (e) {
        let {
            onSelectSku: s,
            isGift: n,
            priceOptions: r,
            shouldShowHalloweenTier2Card: l,
          } = e,
          o = (0, i.tY)("PremiumMarketingHome");
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(C, {
              onClick: () => s(a.Si.TIER_2),
              isGift: n,
              priceOptions: r,
              showHalloweenGift: l,
              shouldUseTaglineXPCopy: o,
            }),
            (0, t.jsx)(d, {
              onClick: () => s(a.Si.TIER_0),
              isGift: n,
              priceOptions: r,
              shouldUseTaglineXPCopy: o,
            }),
          ],
        });
      };
    },
    317269: function (e, s, n) {
      n.d(s, {
        TB: function () {
          return j;
        },
        VY: function () {
          return g;
        },
        ZP: function () {
          return N;
        },
      }),
        n(47120),
        n(411104);
      var t = n(735250),
        r = n(470079),
        i = n(512722),
        l = n.n(i),
        a = n(442837),
        o = n(481060),
        C = n(16084),
        d = n(987209),
        u = n(179118),
        c = n(912788),
        _ = n(509545),
        p = n(55563),
        x = n(74538),
        h = n(741245),
        L = n(474936),
        f = n(981631),
        I = n(689938),
        E = n(977885);
      function M(e) {
        var s, n;
        let r,
          {
            planId: i,
            startingPremiumSubscriptionPlanId: o,
            paymentSourceType: C,
          } = e,
          [d, u] = (0, a.Wu)([_.Z], () => [_.Z.get(o), _.Z.get(i)]);
        if (
          (l()(null != d && null != u, "Missing startingPlan or newPlan"),
          (s = o),
          (n = i),
          L.Y1.indexOf(s) < L.Y1.indexOf(n))
        )
          switch (i) {
            case L.Xh.PREMIUM_MONTH_TIER_1:
              (r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) &&
                  (r =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case L.Xh.PREMIUM_MONTH_TIER_2:
              (r =
                I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) &&
                  (r =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case L.Xh.PREMIUM_YEAR_TIER_1:
              (r =
                I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) &&
                  (r =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case L.Xh.PREMIUM_YEAR_TIER_2:
              (r =
                I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  { numFreeGuildSubscriptions: L.cb },
                )),
                f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) &&
                  (r =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      { numFreeGuildSubscriptions: L.cb },
                    ));
              break;
            case L.Xh.PREMIUM_3_MONTH_TIER_2:
            case L.Xh.PREMIUM_6_MONTH_TIER_2:
              r =
                I.Z.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case L.Xh.PREMIUM_MONTH_TIER_0:
            case L.Xh.PREMIUM_YEAR_TIER_0:
              r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(i));
          }
        else if (d.skuId === L.Si.TIER_2 && u.skuId === L.Si.TIER_1)
          r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (u.skuId) {
            case L.Si.TIER_0:
              r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case L.Si.TIER_1:
              r = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case L.Si.TIER_2:
              r =
                1 !== d.intervalCount
                  ? I.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : I.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(u.skuId));
          }
        return (0, t.jsx)("div", { className: E.text, children: r });
      }
      function N(e) {
        let s,
          n,
          {
            planId: i,
            enableNoPaymentTrial: d,
            startingPremiumSubscriptionPlanId: u,
            onClose: c,
            followupSKUInfo: N,
            isDowngrade: j,
            hideClose: g,
            postSuccessGuild: T,
            paymentSourceType: m,
          } = e,
          { theme: S } = (0, o.useThemeContext)(),
          A = (0, a.e7)([p.Z], () => (null != N ? p.Z.get(N.id) : null));
        r.useEffect(() => {
          if (null == N || null != A) return;
          let { applicationId: e, id: s } = N;
          (0, C.$N)(e, s).catch(f.VqG);
        }, [N, A]);
        let O = (e) => {
          if (e.skuId === L.Si.TIER_0)
            return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN)
              ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === L.Si.TIER_1)
            return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN)
              ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN)
            ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : d
              ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != A)
          s = (0, t.jsx)("div", {
            className: E.text,
            children:
              I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: A.name,
              }),
          });
        else if (null != u)
          s = (0, t.jsx)(M, {
            planId: i,
            startingPremiumSubscriptionPlanId: u,
          });
        else if (null != T) {
          let e = _.Z.get(i);
          l()(null != e, "Missing plan"),
            (s = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", { className: E.text, children: O(e) }),
                (0, t.jsx)("div", {
                  className: E.text,
                  children:
                    I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: T.name },
                    ),
                }),
              ],
            }));
        } else {
          let e = _.Z.get(i);
          l()(null != e, "Missing plan"),
            (s = (0, t.jsx)("div", { className: E.text, children: O(e) }));
        }
        let R = x.ZP.getPremiumType(i);
        return (
          l()(
            null != R,
            "premium type should not be null in purchase confirmation",
          ),
          (n =
            null != A
              ? I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                  skuName: A.name,
                })
              : j
                ? I.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != T
                  ? I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : I.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, t.jsxs)("div", {
            className: E.confirmation,
            children: [
              (0, t.jsx)(h.C, {
                className: E.banner,
                theme: S,
                premiumType: R,
                type: f.X7u.has(null != m ? m : f.HeQ.UNKNOWN)
                  ? h.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != u
                    ? h.C.Types.PREMIUM_UPDATED
                    : h.C.Types.PREMIUM_ACTIVATED,
              }),
              s,
              g ? null : (0, t.jsx)(o.Button, { onClick: c, children: n }),
            ],
          })
        );
      }
      function j(e) {
        let { planId: s, onClose: n, halloweenDecoPurchase: r } = e,
          {
            giftRecipient: i,
            selectedGiftStyle: o,
            hasSentMessage: C,
            giftMessageError: p,
            isSendingMessage: x,
          } = (0, d.wD)(),
          h = (0, a.e7)([_.Z], () => _.Z.get(s));
        l()(null != h, "Missing plan");
        let L = (0, a.e7)([c.Z], () => c.Z.getGiftCode(h.skuId));
        return (0, t.jsx)(u.Z, {
          giftCode: L,
          subscriptionPlan: h,
          onClose: n,
          selectedGiftStyle: o,
          hasSentMessage: C,
          giftRecipient: i,
          giftMessageError: p,
          isSendingMessage: x,
          halloweenDecoPurchase: r,
        });
      }
      function g() {
        return (0, t.jsxs)("div", {
          className: E.redirectConfirmation,
          children: [
            (0, t.jsx)(o.Heading, {
              variant: "heading-xl/bold",
              children:
                I.Z.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER,
            }),
            (0, t.jsxs)("div", {
              className: E.redirectBody,
              children: [
                (0, t.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children:
                    I.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY,
                }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children:
                    I.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS,
                }),
              ],
            }),
          ],
        });
      }
    },
    4912: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return i;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(325767);
      function i(e) {
        let {
          width: s = 14,
          height: n = 14,
          color: i = "currentColor",
          foreground: l,
          ...a
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, r.Z)(a),
          width: s,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, t.jsx)("path", {
            className: l,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=f8a41dd7069cf1b1c4f7.js.map
