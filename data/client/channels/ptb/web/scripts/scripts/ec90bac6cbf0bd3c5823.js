"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86113"],
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
    269128: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        s = t(772848),
        o = t(841261);
      let l = (0, s.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: a = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(o.button, t, { [o.open]: n, [o.withHighlight]: a }),
          children: [
            a &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: l,
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
                  stroke: a ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: a ? "url(#".concat(l, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    89057: function (e, n, t) {
      t.d(n, {
        Vq: function () {
          return g;
        },
        c8: function () {
          return I;
        },
        oQ: function () {
          return E;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        s = t(692547),
        o = t(780384),
        l = t(481060),
        C = t(410030),
        d = t(600164),
        c = t(63063),
        u = t(211242),
        _ = t(981631),
        p = t(689938),
        f = t(943981),
        h = t(51125),
        x = t(47268);
      function L(e) {
        let { className: n } = e,
          t = (0, C.ZP)(),
          a = (0, o.wj)(t) ? h : x;
        return (0, r.jsxs)("div", {
          className: i()(f.container, n),
          children: [
            (0, r.jsx)(l.Heading, {
              className: f.header,
              variant: "heading-xl/semibold",
              children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, r.jsxs)(l.Text, {
              className: f.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, r.jsx)("p", {
                  children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, r.jsx)("p", {
                  children: p.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: c.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: a,
              className: f.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function I() {
        return (0, r.jsx)(L, { className: f.settings });
      }
      function g(e) {
        let { onClose: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.ModalHeader, {
              className: f.blockedPaymentsModalHeader,
              justify: d.Z.Justify.END,
              children: (0, r.jsx)(l.ModalCloseButton, { onClick: n }),
            }),
            (0, r.jsx)(l.ModalContent, {
              className: f.blockedPaymentsModalContent,
              children: (0, r.jsx)(L, { className: f.modal }),
            }),
          ],
        });
      }
      function E(e) {
        let { className: n } = e;
        return (0, u.Q)()
          ? (0, r.jsxs)(l.Card, {
              className: i()(f.blockedPaymentsWarning, n),
              type: l.Card.Types.CUSTOM,
              children: [
                (0, r.jsx)(l.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: f.blockedPaymentsWarningIcon,
                  color: s.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, r.jsx)(l.Text, {
                  variant: "text-sm/normal",
                  children:
                    p.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                      helpdeskArticle: c.Z.getArticleURL(
                        _.BhN.BLOCKED_PAYMENTS,
                      ),
                    }),
                }),
              ],
            })
          : null;
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
      var r,
        a,
        i,
        s = t(735250),
        o = t(470079),
        l = t(120356),
        C = t.n(l),
        d = t(536640),
        c = t(481060),
        u = t(981631),
        _ = t(689938),
        p = t(404934);
      function f(e, n, t) {
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
      ((i = r || (r = {})).TOP = "top"), (i.BOTTOM = "bottom");
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
          let { isDisabled: t, menuIsOpen: r } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "4px 4px 0 0" : "4px",
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
          let { isSelected: t, isFocused: r } = n;
          return {
            ...e,
            ...(t
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
      class x extends (a = o.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: r,
              valueRenderer: a,
              optionRenderer: i,
              multiValueRenderer: o,
              options: l,
              value: u,
              autofocus: f,
              disabled: x,
              clearable: L,
              searchable: I,
              styleOverrides: g,
              isMulti: E,
              placeholder: m,
              filterOption: M,
              closeMenuOnSelect: T = !0,
              ...N
            } = this.props,
            b = { ...N };
          null != f && (b.autoFocus = f),
            null != x && (b.isDisabled = x),
            null != L && (b.isClearable = L),
            null != I && (b.isSearchable = I);
          let j = { IndicatorSeparator: () => null };
          null != i &&
            (j.Option = (e) =>
              (0, s.jsx)(d.wx.Option, { ...e, children: i(e.data) })),
            null != a &&
              (j.SingleValue = (e) =>
                (0, s.jsx)(d.wx.SingleValue, { ...e, children: a(e.data) })),
            null != o && (j.MultiValue = (e) => o(e.data));
          if (E && Array.isArray(u)) {
            let n = {};
            l.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = u.map((e) => n[String(e)]));
          } else e = null != u ? l.find((e) => e.value === u) : null;
          return (0, s.jsx)(c.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)("div", {
              className: C()(p.select, n, { [p.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, s.jsx)(d.ZP, {
                  ...b,
                  className: t,
                  ref: this._selectRef,
                  isMulti: E,
                  components: j,
                  options: l,
                  styles: null != g ? g : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: T,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != m ? m : _.Z.Messages.SELECT,
                  noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: M,
                }),
                null != r
                  ? (0, s.jsx)("div", {
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
            f(this, "_selectRef", o.createRef()),
            f(this, "_containerRef", o.createRef()),
            f(this, "state", { isFocused: !1, isOpen: !1 }),
            f(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            f(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            f(this, "handleKeyDown", (e) => {
              e.which === u.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            f(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            f(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      f(x, "MenuPlacements", r);
    },
    164513: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(481060),
        i = t(906732),
        s = t(600164),
        o = t(522489),
        l = t(570711),
        C = t(669079),
        d = t(987209),
        c = t(598),
        u = t(614277),
        _ = t(981631),
        p = t(689938);
      function f(e) {
        let { onClose: n } = e,
          { selectedPlan: t } = (0, c.usePaymentContext)(),
          { selectedGiftStyle: f, giftRecipient: h } = (0, d.wD)(),
          { analyticsLocations: x } = (0, i.ZP)(),
          L = !__BILLING_STANDALONE__ && (0, C.MY)(h, !1) === C.xr.CUSTOM_STYLE,
          { enabled: I } = o.m.useExperiment(
            { location: "GiftPurchaseConfirmationFooter" },
            { autoTrackExposure: L, disable: !L },
          );
        return I
          ? (0, r.jsx)(u.O3, {
              children: (0, r.jsx)(a.ModalFooter, {
                align: s.Z.Align.CENTER,
                children: (0, r.jsx)(l.Z, {
                  repeatPurchase: !0,
                  initialPlanId: null == t ? void 0 : t.id,
                  subscriptionTier: null == t ? void 0 : t.skuId,
                  buttonText: p.Z.Messages.PREMIUM_GIFTING_REPEAT_GIFT,
                  giftStyle: f,
                  analyticsLocation: _.Sbl.REPEAT_GIFT_PURCHASE_BUTTON,
                  analyticsLocationsOverride: x.slice(0, -1),
                  onClick: () => {
                    n();
                  },
                }),
              }),
            })
          : null;
      }
    },
    293858: function (e, n, t) {
      t.d(n, {
        b: function () {
          return h;
        },
      });
      var r = t(735250),
        a = t(470079),
        i = t(512722),
        s = t.n(i),
        o = t(881602),
        l = t(317269),
        C = t(669079),
        d = t(296848),
        c = t(987209),
        u = t(598),
        _ = t(164513),
        p = t(614277),
        f = t(698708);
      function h(e) {
        var n, t;
        let i,
          {
            handleClose: h,
            planGroup: x,
            onSubscriptionConfirmation: L,
            renderPurchaseConfirmation: I,
            postSuccessGuild: g,
            followupSKUInfo: E,
            continueSession: m,
          } = e,
          {
            activeSubscription: M,
            paymentSources: T,
            paymentSourceId: N,
            selectedPlan: b,
            selectedSkuId: j,
            step: S,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: R,
          } = (0, u.usePaymentContext)(),
          {
            isGift: P,
            giftRecipient: O,
            giftCode: v,
            hasSentMessage: y,
            isSendingMessage: Z,
            sendGiftMessage: B,
          } = (0, c.wD)();
        s()(null != b, "Expected plan to selected"),
          s()(null != j, "Expected selectedSkuId"),
          s()(null != S, "Step should be set");
        let U = a.useCallback(() => {
          h(), null == L || L();
        }, [h, L]);
        return (
          a.useEffect(() => {
            if (!(!P || null == O || null == v || y || Z || (0, C.pO)(O)))
              o.F.getCurrentConfig({ location: "36b986_1" }).enabled &&
                B({ onSubscriptionConfirmation: L });
          }, [B, P, O, v, y, Z, L]),
          (i =
            null != I
              ? I(b, U, A)
              : m
                ? (0, r.jsx)(l.VY, {})
                : P
                  ? (0, r.jsx)(l.TB, { planId: b.id, onClose: U })
                  : R.current === b.id
                    ? (0, r.jsx)(l.ZP, {
                        planId: b.id,
                        postSuccessGuild: g,
                        onClose: U,
                        paymentSourceType:
                          null === (n = T[null != N ? N : ""]) || void 0 === n
                            ? void 0
                            : n.type,
                      })
                    : (0, r.jsx)(l.ZP, {
                        followupSKUInfo: E,
                        startingPremiumSubscriptionPlanId: R.current,
                        planId: b.id,
                        onClose: U,
                        isDowngrade: null != M && (0, d.GY)(M, b.id, x),
                        paymentSourceType:
                          null === (t = T[null != N ? N : ""]) || void 0 === t
                            ? void 0
                            : t.type,
                      })),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(p.C3, { children: [(0, r.jsx)(f.Z, {}), i] }),
              P && (0, r.jsx)(_.Z, { onClose: U }),
            ],
          })
        );
      }
    },
    7305: function (e, n, t) {
      t.r(n),
        t.d(n, {
          PremiumPaymentModal: function () {
            return P;
          },
          STEPS: function () {
            return y;
          },
          default: function () {
            return Z;
          },
        }),
        t(411104),
        t(47120);
      var r = t(735250),
        a = t(470079),
        i = t(442837),
        s = t(570140),
        o = t(821849),
        l = t(100527),
        C = t(906732),
        d = t(509545),
        c = t(78839),
        u = t(669079),
        _ = t(987209),
        p = t(598),
        f = t(409813),
        h = t(791785),
        x = t(276442),
        L = t(793541),
        I = t(380898),
        g = t(710094),
        E = t(293858),
        m = t(614223),
        M = t(174827),
        T = t(846464),
        N = t(184160),
        b = t(48175),
        j = t(981631),
        S = t(474936),
        A = t(689938);
      let R = [
        f.h8.PLAN_SELECT,
        f.h8.ADD_PAYMENT_STEPS,
        f.h8.REVIEW,
        f.h8.CONFIRM,
      ];
      function P(e) {
        let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: i,
            onComplete: l,
            transitionState: c,
            initialPlanId: x,
            subscriptionTier: L,
            onClose: I,
            trialId: g,
            trialFooterMessageOverride: E,
            reviewWarningMessage: m,
            openInvoiceId: M,
            onSubscriptionConfirmation: T,
            renderPurchaseConfirmation: N,
            postSuccessGuild: b,
            followupSKUInfo: A,
            renderHeader: R,
            applicationId: P,
            guildId: O,
            referralTrialOfferId: v,
            skuId: y,
            returnRef: Z,
            skipConfirm: B = !1,
            continueSession: U = !1,
          } = e,
          { analyticsLocations: k } = (0, C.ZP)();
        a.useEffect(() => {
          !d.Z.isLoadedForPremiumSKUs() && s.Z.wait(() => (0, o.Y2)());
        }, []);
        let { step: H } = (0, p.usePaymentContext)(),
          { isGift: F, giftMessage: G, giftRecipient: w } = (0, _.wD)(),
          W = F && (0, u.pO)(w) && H === f.h8.PLAN_SELECT;
        return (0, r.jsx)(h.PaymentModal, {
          analyticsLocations: k,
          analyticsLocation: n,
          analyticsObject: t,
          analyticsSourceLocation: i,
          analyticsSubscriptionType: j.NYc.PREMIUM,
          onComplete: l,
          transitionState: c,
          initialPlanId: x,
          giftMessage: G,
          subscriptionTier: L,
          onClose: I,
          trialId: g,
          isGift: F,
          trialFooterMessageOverride: E,
          reviewWarningMessage: m,
          planGroup: S.Y1,
          openInvoiceId: M,
          onSubscriptionConfirmation: T,
          renderPurchaseConfirmation: N,
          postSuccessGuild: b,
          followupSKUInfo: A,
          renderHeader: R,
          applicationId: P,
          guildId: O,
          referralTrialOfferId: v,
          skuId: y,
          shakeWhilePurchasing: !0,
          isLargeModal: W,
          returnRef: Z,
          skipConfirm: B,
          continueSession: U,
        });
      }
      function O(e) {
        let { startedPaymentFlowWithPaymentSourcesRef: n, selectedSkuId: t } =
            (0, p.usePaymentContext)(),
          { isGift: r } = (0, _.wD)();
        return (0, m.Kp)({
          isTrial: null != e && e,
          isGift: r,
          selectedSkuId: t,
          startedPaymentFlowWithPaymentSources: n.current,
        });
      }
      function v(e) {
        let {
            initialPlanId: n,
            handleStepChange: t,
            referralTrialOfferId: a,
          } = e,
          { paymentSources: i, selectedSkuId: s } = (0, p.usePaymentContext)(),
          { isGift: o } = (0, _.wD)(),
          l = O((0, b.Z)({ isGift: o, skuId: s, referralTrialOfferId: a }));
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(x.J, {
            ...e,
            breadcrumbSteps: R,
            onReturn: () => {
              let e =
                Object.values(i).length < 1 && null == n
                  ? f.h8.PLAN_SELECT
                  : f.h8.REVIEW;
              l && (e = f.h8.REVIEW),
                t(e, { trackedFromStep: f.h8.PAYMENT_TYPE });
            },
          }),
        });
      }
      let y = [
        {
          key: null,
          renderStep: (e) => (0, r.jsx)(h.PaymentPredicateStep, { ...e }),
        },
        {
          key: f.h8.SKU_SELECT,
          renderStep: (e) => (0, r.jsx)(T.q, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: f.h8.WHAT_YOU_LOSE,
          renderStep: (e) => (0, r.jsx)(N.x, { ...e }),
          options: { renderHeader: !1, hideSlider: !0 },
        },
        {
          key: f.h8.PLAN_SELECT,
          renderStep: (e) => (0, r.jsx)(M.x, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              O(e) ? null : A.Z.Messages.BILLING_STEP_SELECT_PLAN,
          },
        },
        {
          key: f.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(v, { ...e }) }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              O(e) ? null : A.Z.Messages.BILLING_STEP_PAYMENT,
          },
        },
        {
          key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(I.Z, {}),
        },
        {
          key: f.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(L.Z, {}),
        },
        {
          key: f.h8.REVIEW,
          renderStep: (e) => (0, r.jsx)(g.l, { ...e }),
          options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) =>
              O(e)
                ? A.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT
                : A.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        { key: f.h8.CONFIRM, renderStep: (e) => (0, r.jsx)(E.b, { ...e }) },
      ];
      function Z(e) {
        let n = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, C.ZP)(
            e.analyticsLocations,
            l.Z.PREMIUM_PAYMENT_MODAL,
          ),
          {
            subscriptionTier: a,
            isGift: s,
            giftRecipient: o,
            giftMessage: d,
            giftStyle: u,
            loadId: f,
            defaultPlanId: h,
            referralCode: x,
            repeatPurchase: L,
          } = e;
        if (null != a && !Object.values(S.Si).includes(a))
          throw Error("subscriptionTier must be a premium subscription");
        return (0, r.jsx)(C.Gt, {
          value: t,
          children: (0, r.jsx)(p.PaymentContextProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: y,
            skuIDs: [...S.YQ],
            isGift: s,
            defaultPlanId: h,
            referralCode: x,
            repeatPurchase: L,
            children: (0, r.jsx)(_.KB, {
              isGift: s,
              giftRecipient: null == o ? void 0 : o,
              giftMessage: d,
              giftStyle: u,
              children: (0, r.jsx)(P, { ...e }),
            }),
          }),
        });
      }
    },
    174827: function (e, n, t) {
      t.d(n, {
        x: function () {
          return H;
        },
      }),
        t(47120);
      var r = t(735250),
        a = t(470079),
        i = t(512722),
        s = t.n(i),
        o = t(399606),
        l = t(481060),
        C = t(975608),
        d = t(600164),
        c = t(711459),
        u = t(374649),
        _ = t(650032),
        p = t(439017),
        f = t(857039),
        h = t(515593),
        x = t(104494),
        L = t(639119),
        I = t(642530),
        g = t(381507),
        E = t(314404),
        m = t(594174),
        M = t(509545),
        T = t(669079),
        N = t(63063),
        b = t(74538),
        j = t(987209),
        S = t(598),
        A = t(409813),
        R = t(51499),
        P = t(456251),
        O = t(614277),
        v = t(809144),
        y = t(698708),
        Z = t(981631),
        B = t(474936),
        U = t(689938),
        k = t(577581);
      function H(e) {
        var n, t, i;
        let {
            handleStepChange: H,
            initialPlanId: F,
            subscriptionTier: G,
            trialId: w,
            referralTrialOfferId: W,
            handleClose: D,
          } = e,
          {
            activeSubscription: Y,
            hasFetchedSubscriptions: K,
            paymentSourceId: V,
            paymentSources: X,
            selectedSkuId: z,
            selectedPlan: Q,
            step: q,
            defaultPlanId: J,
            priceOptions: $,
            isPremium: ee,
          } = (0, S.usePaymentContext)(),
          { isGift: en, giftRecipient: et, giftMessage: er } = (0, j.wD)(),
          ea = null != V ? X[V] : null,
          { newPlans: ei } = c.ZP.useExperiment(
            { location: "d17fd6_3" },
            { autoTrackExposure: !1 },
          ),
          es = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
          eo =
            !en &&
            null != z &&
            z === B.Si.TIER_2 &&
            null != es &&
            es.hasHadPremium() &&
            K &&
            null == Y &&
            (0, c.aQ)(ea),
          el = (0, L.N)(W),
          eC =
            !en &&
            null != el &&
            null != z &&
            B.nG[el.trial_id].skus.includes(z),
          ed = (0, x.Ng)(),
          ec =
            null == ed
              ? void 0
              : null === (n = ed.discount) || void 0 === n
                ? void 0
                : n.plan_ids.some((e) => B.GP[e].skuId === z),
          eu = !en && null != ed && null != z && ec,
          e_ = null !== (t = eC || eu) && void 0 !== t && t,
          { defaultToMonthlyPlan: ep } = p.k.useExperiment(
            { location: "d17fd6_4" },
            { autoTrackExposure: !1 },
          ),
          ef = a.useMemo(
            () =>
              (0, b.V7)({
                skuId: z,
                isPremium: ee,
                multiMonthPlans: eo ? ei : [],
                currentSubscription: Y,
                isGift: en,
                isEligibleForTrial: eC,
                defaultPlanId: J,
                defaultToMonthlyPlan: ep,
              }),
            [z, ee, ei, Y, eo, en, eC, J, ep],
          ),
          eh =
            eu && ef.includes(B.Xh.PREMIUM_MONTH_TIER_2)
              ? B.Xh.PREMIUM_MONTH_TIER_2
              : ef[0],
          ex = (0, o.e7)([M.Z], () => M.Z.get(eh)),
          eL = [{ planId: null == ex ? void 0 : ex.id, quantity: 1 }],
          [eI, eg] = a.useState(e_),
          [eE, em] = (0, u.ED)({
            items: eL,
            renewal: !1,
            preventFetch: !e_,
            applyEntitlements: !0,
            trialId: w,
            paymentSourceId: $.paymentSourceId,
            currency: $.currency,
          }),
          eM =
            (0, f.Z)({ location: "PremiumGiftPlanSelect" }) &&
            (null == ex ? void 0 : ex.skuId) === B.Si.TIER_2;
        a.useEffect(() => {
          e_ && eg((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
        }, [eE, e_]),
          (0, C.Z)(
            "Payment Modal Plan Select Step",
            eI,
            5,
            {
              proratedInvoicePreview: eE,
              proratedInvoiceError: em,
              isEligibleForOffer: e_,
            },
            { tags: { app_context: "billing" } },
          );
        let eT =
            null !== (i = null == em ? void 0 : em.message) && void 0 !== i
              ? i
              : U.Z.Messages.ERROR_GENERIC_TITLE,
          eN = e_ && null == em,
          eb = e_ && null != em,
          ej =
            eN &&
            null == Y &&
            !!e_ &&
            (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null,
          { enabled: eS } = _._.useExperiment(
            { location: "PremiumPaymentPlanSelectStep" },
            { autoTrackExposure: !1 },
          ),
          eA =
            !en &&
            (null == ex ? void 0 : ex.skuId) === B.Si.TIER_2 &&
            (null == el ? void 0 : el.referrer_id) != null &&
            eS,
          eR = null;
        return ((eR = eA ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(I.Z, {})), ej)
          ? (0, r.jsx)(P.Z, {})
          : (s()(null != q, "Step should be set"),
            s()(ef.length > 0, "Premium plan options should be set"),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(v.P, { giftMessage: er }),
                !(en && (0, T.pO)(et)) &&
                  (0, r.jsx)(R.Z, { isEligibleForTrial: eC }),
                (0, r.jsxs)(O.C3, {
                  children: [
                    eN &&
                      (0, r.jsx)("hr", {
                        className: k.planSelectSeparatorUpper,
                      }),
                    eR,
                    (0, r.jsx)(y.Z, {}),
                    eb
                      ? (0, r.jsx)(l.FormErrorBlock, { children: eT })
                      : (0, r.jsx)(E.O, {
                          planOptions: ef,
                          eligibleForMultiMonthPlans: eo,
                          referralTrialOfferId: W,
                          selectedPlanId: null == Q ? void 0 : Q.id,
                          subscriptionPeriodEnd:
                            null == eE ? void 0 : eE.subscriptionPeriodEnd,
                          discountInvoiceItems: eu
                            ? null == eE
                              ? void 0
                              : eE.invoiceItems
                            : void 0,
                          handleClose: D,
                        }),
                    eN &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("hr", {
                            className: k.planSelectSeparatorLower,
                          }),
                          (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children:
                              U.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format(
                                {
                                  link: N.Z.getArticleURL(
                                    Z.BhN.PREMIUM_DETAILS_CANCEL_SUB,
                                  ),
                                },
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, r.jsxs)(O.O3, {
                  children: [
                    eM
                      ? (0, r.jsxs)("div", {
                          className: k.nitroweenFooterBanner,
                          children: [
                            (0, r.jsx)(h.Z, { size: l.AvatarSizes.SIZE_40 }),
                            (0, r.jsx)(l.Text, {
                              variant: "text-md/normal",
                              color: "always-white",
                              children:
                                U.Z.Messages
                                  .NITROWEEN_DESKTOP_GIFT_PURCHASE_DESCRIPTION,
                            }),
                          ],
                        })
                      : null,
                    (0, r.jsx)(l.ModalFooter, {
                      justify: d.Z.Justify.BETWEEN,
                      align: d.Z.Align.CENTER,
                      children: (0, r.jsx)(E.M, {
                        onStepChange: H,
                        onBackClick: () => H(A.h8.SKU_SELECT),
                        showBackButton: null == F && null == G,
                        planOptions: ef,
                        shouldRenderUpdatedPaymentModal: eN,
                        isTrial: eC,
                      }),
                    }),
                  ],
                }),
              ],
            }));
      }
    },
    846464: function (e, n, t) {
      t.d(n, {
        q: function () {
          return E;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(140465),
        l = t(857039),
        C = t(639119),
        d = t(55610),
        c = t(973007),
        u = t(74538),
        _ = t(987209),
        p = t(598),
        f = t(409813),
        h = t(614223),
        x = t(48175),
        L = t(474936),
        I = t(689938),
        g = t(885032);
      function E(e) {
        let {
            handleStepChange: n,
            handleClose: t,
            referralTrialOfferId: a,
          } = e,
          {
            setSelectedSkuId: i,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: c,
            priceOptions: I,
          } = (0, p.usePaymentContext)(),
          { isGift: g } = (0, _.wD)(),
          E = (0, l.Z)({ location: "Payment SKU Selection" }),
          M = (0, C.N)(a),
          T = (0, o.Nx)();
        return (0, r.jsx)(m, {
          selectSku: (e) =>
            (function (e) {
              let {
                activeSubscription: n,
                newSkuId: t,
                setSelectedSkuId: r,
                handleStepChange: a,
                isGift: i,
                userTrialOffer: s,
                setSelectedPlanId: o,
                startedPaymentFlowWithPaymentSources: l,
              } = e;
              r(t);
              let C = f.h8.PLAN_SELECT,
                d = (0, u.k5)(n);
              (d === L.Si.TIER_1 || d === L.Si.TIER_2) &&
                t === L.Si.TIER_0 &&
                !i &&
                (C = f.h8.WHAT_YOU_LOSE);
              let c = (0, x.T)({ userTrialOffer: s, isGift: i, skuId: t }),
                _ = (0, h.Kp)({
                  isTrial: c,
                  isGift: i,
                  selectedSkuId: t,
                  startedPaymentFlowWithPaymentSources: l,
                });
              C !== f.h8.WHAT_YOU_LOSE &&
                _ &&
                ((C = f.h8.REVIEW), o((0, h.nA)(t, n))),
                a(C, { analyticsDataOverride: { sku_id: t } });
            })({
              activeSubscription: s,
              newSkuId: e,
              setSelectedSkuId: i,
              handleStepChange: n,
              isGift: g,
              userTrialOffer: M,
              startedPaymentFlowWithPaymentSources: d.current,
              setSelectedPlanId: c,
            }),
          onClose: t,
          isGift: g,
          inOfferExperience: T,
          priceOptions: I,
          shouldShowHalloweenTier2Card: E,
        });
      }
      function m(e) {
        let {
          selectSku: n,
          onClose: t,
          isGift: a,
          inOfferExperience: o,
          priceOptions: l,
          shouldShowHalloweenTier2Card: C,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(s.ModalHeader, {
              className: g.skuSelectModalHeader,
              separator: !1,
              children: [
                (0, r.jsx)(s.FormTitle, {
                  tag: s.FormTitleTags.H4,
                  children: I.Z.Messages.BILLING_STEP_SELECT_PLAN,
                }),
                (0, r.jsx)(s.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, r.jsxs)(s.ModalContent, {
              className: i()(g.skuSelectModalContent, { [g.modalPadding]: o }),
              children: [
                (0, r.jsx)(d.Z, {
                  fromBoostCancelModal: !1,
                  className: g.legacyPricingNotice,
                }),
                (0, r.jsx)(c.Z, {
                  onSelectSku: (e) => n((0, u.Wz)(e)),
                  isGift: a,
                  priceOptions: l,
                  shouldShowHalloweenTier2Card: C,
                }),
              ],
            }),
          ],
        });
      }
    },
    184160: function (e, n, t) {
      t.d(n, {
        x: function () {
          return x;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(512722),
        i = t.n(a),
        s = t(780384),
        o = t(481060),
        l = t(410030),
        C = t(973159),
        d = t(74538),
        c = t(987209),
        u = t(598),
        _ = t(409813),
        p = t(614223),
        f = t(689938),
        h = t(117787);
      function x(e) {
        let { handleStepChange: n, handleClose: t } = e,
          a = (0, l.ZP)(),
          {
            activeSubscription: x,
            selectedSkuId: L,
            setSelectedPlanId: I,
            startedPaymentFlowWithPaymentSourcesRef: g,
          } = (0, u.usePaymentContext)(),
          { isGift: E } = (0, c.wD)(),
          m = null != x ? (0, d.Af)(x) : null,
          M = null != m ? (0, d.gq)(m.planId) : null,
          T = null != m ? (0, d.Rd)(m.planId) : null,
          N = (0, p.Kp)({
            isTrial: !1,
            isGift: E,
            selectedSkuId: L,
            startedPaymentFlowWithPaymentSources: g.current,
          });
        return (
          i()(null != T, "Expected premium type"),
          (0, r.jsx)(C.Z, {
            premiumType: T,
            titleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
            subtitleText:
              f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                subscriptionName: M,
              }),
            footer: (0, r.jsxs)("div", {
              className: h.whatYouLoseButtonContainer,
              children: [
                (0, r.jsx)(o.Button, {
                  onClick: () => {
                    N
                      ? (I((0, p.nA)(L, x)), n(_.h8.REVIEW))
                      : n(_.h8.PLAN_SELECT);
                  },
                  children: f.Z.Messages.CONTINUE,
                }),
                (0, r.jsx)(o.Button, {
                  look: o.Button.Looks.LINK,
                  color: (0, s.wj)(a)
                    ? o.Button.Colors.WHITE
                    : o.Button.Colors.PRIMARY,
                  onClick: t,
                  children: f.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK,
                }),
              ],
            }),
            onClose: t,
            isDowngrade: !0,
          })
        );
      }
    },
    881602: function (e, n, t) {
      t.d(n, {
        F: function () {
          return r;
        },
      });
      let r = (0, t(818083).B)({
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
    105759: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var r = t(470079),
        a = t(442837),
        i = t(598077),
        s = t(699516),
        o = t(295226),
        l = t(786397),
        C = t(474936);
      function d() {
        let e = (0, l.w)(C.a7),
          n = (0, a.e7)([o.Z], () =>
            o.Z.getReferrer(null == e ? void 0 : e.trial_id),
          ),
          t = (0, a.e7)([s.Z], () => null == n || s.Z.isBlocked(n.id));
        return r.useMemo(() => (t || null == n ? null : new i.Z(n)), [n, t]);
      }
    },
    570711: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var a = t(442837),
        i = t(481060),
        s = t(906732),
        o = t(963249),
        l = t(703656),
        C = t(594174),
        d = t(451478),
        c = t(981631),
        u = t(689938),
        _ = t(129559);
      n.Z = function (e) {
        let {
            subscriptionTier: n,
            initialPlanId: t,
            giftStyle: p,
            onClick: f,
            buttonText: h,
            analyticsLocation: x,
            analyticsLocationsOverride: L,
            repeatPurchase: I,
            ...g
          } = e,
          E = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
          m = (0, a.e7)([d.Z], () => d.Z.isFocused()),
          { analyticsLocations: M } = (0, s.ZP)();
        return (0, r.jsx)(i.ShinyButton, {
          pauseAnimation: !m,
          className: _.tier2Gradient,
          color: i.Button.Colors.CUSTOM,
          onClick: (e) => {
            if ((e.preventDefault(), null == E)) {
              (0, l.uL)(c.Z5c.LOGIN);
              return;
            }
            null == f || f(e),
              (0, o.Z)({
                subscriptionTier: n,
                initialPlanId: t,
                isGift: !0,
                giftStyle: p,
                analyticsLocation: x,
                analyticsLocations: null != L ? L : M,
                analyticsObject: {
                  object: c.qAy.BUTTON_CTA,
                  objectType: c.Qqv.GIFT,
                },
                repeatPurchase: I,
              });
          },
          ...g,
          children: (0, r.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "none",
            className: _.buttonText,
            children: null != h ? h : u.Z.Messages.PREMIUM_GIFTING_BUTTON,
          }),
        });
      };
    },
    381507: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var a = t(780384),
        i = t(481060),
        s = t(410030),
        o = t(518950),
        l = t(51144),
        C = t(105759),
        d = t(898969),
        c = t(703614),
        u = t(182294),
        _ = t(689938),
        p = t(279521);
      n.Z = () => {
        let e = (0, C.Z)(),
          { avatarSrc: n, eventHandlers: t } = (0, o.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0,
          }),
          f = (0, s.Fg)(),
          h = (0, a.ap)(f),
          x = l.ZP.getName(e),
          L = h ? d.Z : c.Z;
        return null == e
          ? null
          : (0, r.jsxs)("div", {
              className: p.attributionBannerContainer,
              children: [
                (0, r.jsx)("div", {
                  className: p.avatarContainer,
                  children: (0, r.jsx)(i.Avatar, {
                    src: n,
                    "aria-label": e.username,
                    size: u.EF.SIZE_32,
                    ...t,
                  }),
                }),
                (0, r.jsx)(i.Text, {
                  variant: "text-xs/bold",
                  className: p.bannerHeader,
                  children:
                    _.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
                      userName: x,
                    }),
                }),
                (0, r.jsx)(L, { className: p.bannerIcon }),
              ],
            });
      };
    },
    898969: function (e, n, t) {
      var r = t(735250);
      t(470079);
      n.Z = (e) => {
        let { className: n, width: t = 83, height: a = 45 } = e;
        return (0, r.jsxs)("svg", {
          width: t,
          height: a,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: n,
          children: [
            (0, r.jsxs)("g", {
              opacity: "0.6",
              children: [
                (0, r.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1558_55666)",
                }),
                (0, r.jsxs)("g", {
                  clipPath: "url(#clip0_1558_55666)",
                  children: [
                    (0, r.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1558_55666)",
                    }),
                    (0, r.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1558_55666)",
                    }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, r.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1558_55666)",
                    }),
                    (0, r.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, r.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1558_55666)",
                  fillOpacity: "0.9",
                }),
                (0, r.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1558_55666)",
                }),
                (0, r.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1558_55666)",
                }),
              ],
            }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  id: "paint0_linear_1558_55666",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint1_linear_1558_55666",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint2_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint3_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint4_linear_1558_55666",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint5_linear_1558_55666",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint6_linear_1558_55666",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint7_linear_1558_55666",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint8_linear_1558_55666",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint9_linear_1558_55666",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint10_linear_1558_55666",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint11_linear_1558_55666",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint12_linear_1558_55666",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsx)("clipPath", {
                  id: "clip0_1558_55666",
                  children: (0, r.jsx)("rect", {
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
    703614: function (e, n, t) {
      var r = t(735250);
      t(470079);
      n.Z = (e) => {
        let { className: n, width: t = 83, height: a = 45 } = e;
        return (0, r.jsxs)("svg", {
          width: t,
          height: a,
          viewBox: "0 0 83 45",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: n,
          children: [
            (0, r.jsxs)("g", {
              opacity: "0.4",
              children: [
                (0, r.jsx)("path", {
                  opacity: "0.3",
                  d: "M13.3691 45.2126H0V42.6549C0 38.5773 2.662 35.2411 5.91554 35.2411H7.09865C7.74936 35.2411 8.28176 34.5739 8.28176 33.7584V24.6765C8.28176 18.5231 12.2452 13.5559 17.1551 13.5559H32.8017C34.3102 13.5559 35.5228 12.0361 35.5228 10.1456V9.99731C35.5228 5.88268 38.1848 2.58356 41.4384 2.58356C46.23 2.58356 52.9145 2.58356 57.7061 2.58356C60.9597 2.58356 63.6217 5.91974 63.6217 9.99731V24.8248H76.3105C85.3022 24.8248 92.5783 33.9437 92.5783 45.2126H13.3691Z",
                  fill: "url(#paint0_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M77.3871 32.1522C61.2134 44.5441 47.5062 29.1694 27.3108 43.0819L25.5314 36.8238C26.3415 36.122 27.0215 35.0254 27.4916 33.6875C27.6861 33.1253 27.8361 32.5484 27.9401 31.9621C28.0988 31.1113 28.1787 30.2473 28.1788 29.3814C28.1788 25.7479 26.8406 22.6627 24.9817 21.5296C24.6547 21.3277 24.2946 21.1865 23.9184 21.1128C23.747 21.0777 23.5725 21.0606 23.3976 21.0617C22.6453 21.0617 21.9292 21.3687 21.2927 21.9097L19.5205 15.6663C39.716 1.74644 53.4231 17.1284 69.5968 4.73657L71.3618 10.9508C70.6674 11.543 70.0742 12.4276 69.6258 13.5023C69.4146 13.9945 69.2429 14.503 69.1122 15.0229C68.8364 16.1296 68.6979 17.2666 68.6999 18.4078C68.6999 22.3338 70.2695 25.6309 72.3744 26.5009C72.6949 26.6309 73.0349 26.705 73.3799 26.7203H73.4811C74.2406 26.7203 74.964 26.4132 75.6005 25.8649L77.3871 32.1522Z",
                  fill: "url(#paint1_linear_1521_51082)",
                }),
                (0, r.jsxs)("g", {
                  clipPath: "url(#clip0_1521_51082)",
                  children: [
                    (0, r.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "url(#paint2_linear_1521_51082)",
                    }),
                    (0, r.jsx)("path", {
                      d: "M49.8354 24.5264C50.588 24.5264 51.1982 23.9162 51.1982 23.1636C51.1982 22.411 50.588 21.8008 49.8354 21.8008C49.0827 21.8008 48.4726 22.411 48.4726 23.1636C48.4726 23.9162 49.0827 24.5264 49.8354 24.5264Z",
                      fill: "white",
                    }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "url(#paint3_linear_1521_51082)",
                    }),
                    (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M44.3842 17.7125C44.0079 17.7125 43.7029 18.0175 43.7029 18.3939C43.7029 18.7702 44.0079 19.0752 44.3842 19.0752H46.4284C46.8047 19.0752 47.1098 19.3803 47.1098 19.7566C47.1098 20.133 46.8047 20.438 46.4284 20.438L43.3622 20.438C42.9858 20.438 42.6808 20.7431 42.6808 21.1194C42.6808 21.4957 42.9858 21.8008 43.3622 21.8008H45.0656C45.442 21.8008 45.747 22.1059 45.747 22.4822C45.747 22.8585 45.442 23.1636 45.0656 23.1636H43.7029C43.3265 23.1636 43.0215 23.4687 43.0215 23.845C43.0215 24.2213 43.3265 24.5264 43.7029 24.5264H44.556C45.1611 26.8775 47.2954 28.6147 49.8354 28.6147C52.846 28.6147 55.2865 26.1742 55.2865 23.1636C55.2865 20.153 52.846 17.7125 49.8354 17.7125H44.3842ZM49.8354 25.8892C51.3407 25.8892 52.5609 24.6689 52.5609 23.1636C52.5609 21.6583 51.3407 20.438 49.8354 20.438C48.3301 20.438 47.1098 21.6583 47.1098 23.1636C47.1098 24.6689 48.3301 25.8892 49.8354 25.8892Z",
                      fill: "white",
                    }),
                    (0, r.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "url(#paint4_linear_1521_51082)",
                    }),
                    (0, r.jsx)("path", {
                      d: "M41.318 21.8008C41.6943 21.8008 41.9994 21.4957 41.9994 21.1194C41.9994 20.7431 41.6943 20.438 41.318 20.438H40.9773C40.601 20.438 40.2959 20.7431 40.2959 21.1194C40.2959 21.4957 40.601 21.8008 40.9773 21.8008H41.318Z",
                      fill: "white",
                    }),
                  ],
                }),
                (0, r.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "url(#paint5_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M73.3792 26.7203C73.0342 26.705 72.6943 26.6309 72.3738 26.501L73.4805 30.3976C69.6034 32.7225 65.6179 33.7168 60.3014 33.7168C58.1892 33.7168 56.0916 33.5705 53.871 33.4097C51.6503 33.2489 49.2778 33.088 46.8763 33.088C42.3772 33.088 36.3808 33.5925 29.4802 37.3941L27.9395 31.9622C27.8355 32.5484 27.6855 33.1253 27.491 33.6875L28.9304 38.7686C35.4838 34.8865 41.3573 34.0019 46.8763 34.0019C51.5346 34.0019 55.9469 34.6306 60.3014 34.6306C65.0247 34.6306 69.6902 33.8922 74.5438 30.8144L73.3792 26.7203ZM40.6484 12.954C42.9776 12.954 45.285 13.1221 47.5129 13.2757C49.7407 13.4292 51.8818 13.5827 54.059 13.5827C57.7625 13.5827 62.6088 13.1879 67.7589 10.249L69.1116 15.0229C69.2423 14.503 69.414 13.9945 69.6251 13.5023L68.3014 8.8526C63.4479 11.9305 58.7824 12.6689 54.059 12.6689C49.6973 12.6689 45.2995 12.0401 40.6484 12.0401C35.1222 12.0401 29.2415 12.932 22.6953 16.8068L23.9177 21.1129C24.2939 21.1866 24.654 21.3277 24.981 21.5296L23.7586 17.2381C30.4494 13.4511 36.2795 12.9613 40.6484 12.954Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "url(#paint6_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M63.2674 25.068L63.0865 25.0973C62.6029 25.1794 62.1063 25.0787 61.6914 24.8144C61.2765 24.5501 60.9723 24.1408 60.837 23.6643L60.7863 23.4889C60.7231 23.2642 60.7075 23.0286 60.7406 22.7975C60.7737 22.5663 60.8546 22.3448 60.9782 22.1475C61.1018 21.9501 61.2652 21.7813 61.4577 21.6522C61.6503 21.523 61.8676 21.4364 62.0956 21.398L62.2764 21.3687C62.7594 21.2829 63.2568 21.3812 63.6723 21.6445C64.0878 21.9078 64.392 22.3175 64.526 22.7944L64.5766 22.9698C64.6398 23.1949 64.6554 23.431 64.6224 23.6626C64.5894 23.8942 64.5085 24.1161 64.385 24.3141C64.2615 24.512 64.0982 24.6814 63.9056 24.8113C63.713 24.9412 63.4956 25.0287 63.2674 25.068ZM37.6541 23.3573C37.5187 22.8814 37.2143 22.4727 36.7992 22.2096C36.384 21.9465 35.8874 21.8476 35.4046 21.9317L35.2165 21.9609C34.9892 22.0002 34.7727 22.0875 34.581 22.217C34.3893 22.3466 34.2267 22.5155 34.1039 22.7127C33.9811 22.91 33.9007 23.1312 33.8681 23.3619C33.8355 23.5926 33.8513 23.8277 33.9145 24.0518L33.9651 24.2273C34.099 24.7031 34.4018 25.1124 34.8155 25.3767C35.2292 25.6411 35.7248 25.742 36.2075 25.6602L36.3955 25.631C36.623 25.5915 36.8396 25.5042 37.0316 25.3748C37.2235 25.2453 37.3865 25.0766 37.5099 24.8796C37.6333 24.6825 37.7144 24.4614 37.7479 24.2307C37.7815 24 37.7668 23.7647 37.7048 23.5401L37.6541 23.3573Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M75.2327 4.05689L73.4501 4.68353C73.3584 4.71488 73.2788 4.77401 73.2224 4.85265C73.166 4.9313 73.1357 5.02553 73.1357 5.12218C73.1357 5.21883 73.166 5.31307 73.2224 5.39171C73.2788 5.47036 73.3584 5.52949 73.4501 5.56083L75.2327 6.18748C75.299 6.21027 75.3592 6.24778 75.4087 6.29718C75.4583 6.34658 75.4959 6.40657 75.5188 6.4726L76.1476 8.24914C76.179 8.34056 76.2384 8.41991 76.3173 8.47609C76.3962 8.53226 76.4907 8.56246 76.5877 8.56246C76.6847 8.56246 76.7793 8.53226 76.8582 8.47609C76.9371 8.41991 76.9964 8.34056 77.0279 8.24914L77.6566 6.4726C77.6799 6.40679 77.7177 6.34701 77.7672 6.29767C77.8167 6.24833 77.8767 6.21067 77.9427 6.18748L79.7285 5.56083C79.8202 5.52949 79.8998 5.47036 79.9562 5.39171C80.0125 5.31307 80.0428 5.21883 80.0428 5.12218C80.0428 5.02553 80.0125 4.9313 79.9562 4.85265C79.8998 4.77401 79.8202 4.71488 79.7285 4.68353L77.9427 4.05689C77.877 4.03311 77.8173 3.99525 77.7679 3.94599C77.7185 3.89673 77.6805 3.83725 77.6566 3.77176L77.0279 1.99209C76.9964 1.90067 76.9371 1.82132 76.8582 1.76515C76.7793 1.70897 76.6847 1.67877 76.5877 1.67877C76.4907 1.67877 76.3962 1.70897 76.3173 1.76515C76.2384 1.82132 76.179 1.90067 76.1476 1.99209L75.5188 3.77176C75.4955 3.83758 75.4577 3.89735 75.4082 3.9467C75.3587 3.99604 75.2987 4.03369 75.2327 4.05689Z",
                  fill: "url(#paint7_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M73.9497 0.749596L73.7229 0.112508C73.7119 0.0797504 73.6909 0.0512546 73.6628 0.0310608C73.6348 0.010867 73.601 0 73.5663 0C73.5317 0 73.4979 0.010867 73.4699 0.0310608C73.4418 0.0512546 73.4208 0.0797504 73.4098 0.112508L73.1999 0.749596C73.1917 0.772911 73.1783 0.794088 73.1608 0.811554C73.1433 0.82902 73.122 0.842326 73.0986 0.850484L72.45 1.0616C72.4178 1.07291 72.3899 1.0939 72.3702 1.12167C72.3504 1.14945 72.3398 1.18264 72.3398 1.21667C72.3398 1.2507 72.3504 1.28389 72.3702 1.31167C72.3899 1.33944 72.4178 1.36043 72.45 1.37174L73.0818 1.5922C73.1051 1.60035 73.1264 1.61366 73.1439 1.63113C73.1614 1.64859 73.1748 1.66977 73.183 1.69308L73.4023 2.32083C73.4133 2.35359 73.4343 2.38208 73.4624 2.40228C73.4904 2.42247 73.5242 2.43334 73.5589 2.43334C73.5935 2.43334 73.6273 2.42247 73.6553 2.40228C73.6834 2.38208 73.7044 2.35359 73.7154 2.32083L73.9497 1.69308C73.9579 1.66977 73.9713 1.64859 73.9888 1.63113C74.0063 1.61366 74.0276 1.60035 74.0509 1.5922L74.6827 1.37174C74.7149 1.36043 74.7428 1.33944 74.7625 1.31167C74.7823 1.28389 74.7929 1.2507 74.7929 1.21667C74.7929 1.18264 74.7823 1.14945 74.7625 1.12167C74.7428 1.0939 74.7149 1.07291 74.6827 1.0616L74.0434 0.841142C74.0224 0.833086 74.0032 0.820804 73.9871 0.805058C73.9709 0.789311 73.9582 0.770434 73.9497 0.749596Z",
                  fill: "url(#paint8_linear_1521_51082)",
                  fillOpacity: "0.9",
                }),
                (0, r.jsx)("path", {
                  d: "M16.0485 33.5518L15.6681 32.4834C15.6497 32.4285 15.6145 32.3807 15.5674 32.3468C15.5203 32.313 15.4636 32.2947 15.4055 32.2947C15.3475 32.2947 15.2908 32.313 15.2437 32.3468C15.1966 32.3807 15.1614 32.4285 15.143 32.4834L14.7909 33.5518C14.7772 33.5909 14.7548 33.6265 14.7254 33.6558C14.696 33.685 14.6604 33.7074 14.6211 33.721L13.5334 34.0751C13.4794 34.0941 13.4326 34.1293 13.3995 34.1758C13.3664 34.2224 13.3486 34.2781 13.3486 34.3352C13.3486 34.3922 13.3664 34.4479 13.3995 34.4945C13.4326 34.541 13.4794 34.5762 13.5334 34.5952L14.5929 34.9649C14.6321 34.9786 14.6677 35.0009 14.6971 35.0302C14.7265 35.0595 14.7489 35.095 14.7626 35.1341L15.1305 36.1869C15.1488 36.2418 15.184 36.2896 15.2311 36.3235C15.2783 36.3573 15.3349 36.3756 15.393 36.3756C15.4511 36.3756 15.5077 36.3573 15.5548 36.3235C15.6019 36.2896 15.6371 36.2418 15.6555 36.1869L16.0485 35.1341C16.0622 35.095 16.0846 35.0595 16.114 35.0302C16.1434 35.0009 16.179 34.9786 16.2182 34.9649L17.2777 34.5952C17.3317 34.5762 17.3785 34.541 17.4116 34.4945C17.4447 34.4479 17.4625 34.3922 17.4625 34.3352C17.4625 34.2781 17.4447 34.2224 17.4116 34.1758C17.3785 34.1293 17.3317 34.0941 17.2777 34.0751L16.2057 33.7054C16.1703 33.6919 16.1381 33.6713 16.1111 33.6449C16.084 33.6185 16.0627 33.5868 16.0485 33.5518Z",
                  fill: "url(#paint9_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M77.193 39.5802L76.8126 38.5118C76.7942 38.4569 76.759 38.4091 76.7119 38.3752C76.6648 38.3413 76.6082 38.3231 76.5501 38.3231C76.492 38.3231 76.4354 38.3413 76.3882 38.3752C76.3411 38.4091 76.3059 38.4569 76.2876 38.5118L75.9354 39.5802C75.9217 39.6193 75.8993 39.6548 75.8699 39.6841C75.8405 39.7134 75.8049 39.7357 75.7657 39.7494L74.6779 40.1035C74.6239 40.1224 74.5771 40.1576 74.544 40.2042C74.5109 40.2508 74.4932 40.3065 74.4932 40.3635C74.4932 40.4206 74.5109 40.4763 74.544 40.5229C74.5771 40.5694 74.6239 40.6046 74.6779 40.6236L75.7374 40.9933C75.7766 41.007 75.8123 41.0293 75.8416 41.0586C75.871 41.0879 75.8934 41.1234 75.9072 41.1625L76.275 42.2153C76.2933 42.2702 76.3286 42.318 76.3757 42.3519C76.4228 42.3857 76.4794 42.404 76.5375 42.404C76.5956 42.404 76.6522 42.3857 76.6993 42.3519C76.7464 42.318 76.7817 42.2702 76.8 42.2153L77.193 41.1625C77.2067 41.1234 77.2291 41.0879 77.2585 41.0586C77.2879 41.0293 77.3235 41.007 77.3628 40.9933L78.4223 40.6236C78.4763 40.6046 78.523 40.5694 78.5561 40.5229C78.5892 40.4763 78.607 40.4206 78.607 40.3635C78.607 40.3065 78.5892 40.2508 78.5561 40.2042C78.523 40.1576 78.4763 40.1224 78.4223 40.1035L77.3502 39.7338C77.3148 39.7202 77.2827 39.6997 77.2556 39.6732C77.2286 39.6468 77.2073 39.6152 77.193 39.5802Z",
                  fill: "url(#paint10_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M19.0894 35.4102L18.8625 34.7731C18.8516 34.7403 18.8306 34.7118 18.8025 34.6916C18.7744 34.6715 18.7406 34.6606 18.706 34.6606C18.6714 34.6606 18.6376 34.6715 18.6095 34.6916C18.5814 34.7118 18.5604 34.7403 18.5495 34.7731L18.3395 35.4102C18.3313 35.4335 18.318 35.4547 18.3004 35.4721C18.2829 35.4896 18.2617 35.5029 18.2383 35.5111L17.5896 35.7222C17.5574 35.7335 17.5295 35.7545 17.5098 35.7823C17.4901 35.81 17.4795 35.8432 17.4795 35.8773C17.4795 35.9113 17.4901 35.9445 17.5098 35.9722C17.5295 36 17.5574 36.021 17.5896 36.0323L18.2214 36.2528C18.2448 36.2609 18.266 36.2742 18.2836 36.2917C18.3011 36.3092 18.3144 36.3304 18.3226 36.3537L18.542 36.9814C18.5529 37.0142 18.5739 37.0427 18.602 37.0629C18.6301 37.0831 18.6639 37.0939 18.6985 37.0939C18.7331 37.0939 18.7669 37.0831 18.795 37.0629C18.8231 37.0427 18.8441 37.0142 18.855 36.9814L19.0894 36.3537C19.0975 36.3304 19.1109 36.3092 19.1284 36.2917C19.1459 36.2742 19.1672 36.2609 19.1906 36.2528L19.8223 36.0323C19.8546 36.021 19.8824 36 19.9022 35.9722C19.9219 35.9445 19.9325 35.9113 19.9325 35.8773C19.9325 35.8432 19.9219 35.81 19.9022 35.7823C19.8824 35.7545 19.8546 35.7335 19.8223 35.7222L19.1831 35.5017C19.162 35.4937 19.1428 35.4814 19.1267 35.4656C19.1106 35.4499 19.0979 35.431 19.0894 35.4102Z",
                  fill: "url(#paint11_linear_1521_51082)",
                }),
                (0, r.jsx)("path", {
                  d: "M80.2349 41.4386L80.008 40.8015C79.9971 40.7687 79.9761 40.7402 79.948 40.72C79.9199 40.6998 79.8861 40.689 79.8515 40.689C79.8169 40.689 79.7831 40.6998 79.755 40.72C79.7269 40.7402 79.7059 40.7687 79.695 40.8015L79.485 41.4386C79.4768 41.4619 79.4635 41.4831 79.4459 41.5005C79.4284 41.518 79.4072 41.5313 79.3838 41.5394L78.7352 41.7506C78.7029 41.7619 78.6751 41.7829 78.6553 41.8106C78.6356 41.8384 78.625 41.8716 78.625 41.9056C78.625 41.9397 78.6356 41.9729 78.6553 42.0006C78.6751 42.0284 78.7029 42.0494 78.7352 42.0607L79.3669 42.2812C79.3903 42.2893 79.4116 42.3026 79.4291 42.3201C79.4466 42.3376 79.46 42.3587 79.4681 42.382L79.6875 43.0098C79.6984 43.0426 79.7194 43.071 79.7475 43.0912C79.7756 43.1114 79.8094 43.1223 79.844 43.1223C79.8786 43.1223 79.9124 43.1114 79.9405 43.0912C79.9686 43.071 79.9896 43.0426 80.0005 43.0098L80.2349 42.382C80.2431 42.3587 80.2564 42.3376 80.2739 42.3201C80.2915 42.3026 80.3127 42.2893 80.3361 42.2812L80.9679 42.0607C81.0001 42.0494 81.028 42.0284 81.0477 42.0006C81.0674 41.9729 81.078 41.9397 81.078 41.9056C81.078 41.8716 81.0674 41.8384 81.0477 41.8106C81.028 41.7829 81.0001 41.7619 80.9679 41.7506L80.3286 41.5301C80.3075 41.5221 80.2883 41.5098 80.2722 41.494C80.2561 41.4783 80.2434 41.4594 80.2349 41.4386Z",
                  fill: "url(#paint12_linear_1521_51082)",
                }),
              ],
            }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  id: "paint0_linear_1521_51082",
                  x1: "0",
                  y1: "23.8981",
                  x2: "92.5783",
                  y2: "23.8981",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint1_linear_1521_51082",
                  x1: "19.5205",
                  y1: "23.9092",
                  x2: "77.3871",
                  y2: "23.9092",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint2_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint3_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint4_linear_1521_51082",
                  x1: "40.2959",
                  y1: "23.1636",
                  x2: "55.2865",
                  y2: "23.1636",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint5_linear_1521_51082",
                  x1: "22.6953",
                  y1: "23.8106",
                  x2: "74.5438",
                  y2: "23.8106",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint6_linear_1521_51082",
                  x1: "33.8516",
                  y1: "23.5132",
                  x2: "64.6392",
                  y2: "23.5132",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint7_linear_1521_51082",
                  x1: "73.1357",
                  y1: "5.12062",
                  x2: "80.0428",
                  y2: "5.12062",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint8_linear_1521_51082",
                  x1: "72.3398",
                  y1: "1.21667",
                  x2: "74.7929",
                  y2: "1.21667",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint9_linear_1521_51082",
                  x1: "13.3486",
                  y1: "34.3352",
                  x2: "17.4625",
                  y2: "34.3352",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint10_linear_1521_51082",
                  x1: "74.4932",
                  y1: "40.3635",
                  x2: "78.607",
                  y2: "40.3635",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint11_linear_1521_51082",
                  x1: "17.4795",
                  y1: "35.8773",
                  x2: "19.9325",
                  y2: "35.8773",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsxs)("linearGradient", {
                  id: "paint12_linear_1521_51082",
                  x1: "78.625",
                  y1: "41.9056",
                  x2: "81.078",
                  y2: "41.9056",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, r.jsx)("clipPath", {
                  id: "clip0_1521_51082",
                  children: (0, r.jsx)("rect", {
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
    973007: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var a = t(481060),
        i = t(823188),
        s = t(474936),
        o = t(377628);
      function l(e) {
        let {
          onClick: n,
          isGift: t,
          priceOptions: s,
          showHalloweenGift: l,
        } = e;
        return (0, r.jsx)(a.Clickable, {
          onClick: n,
          style: { cursor: "pointer" },
          children: (0, r.jsx)(i.wp, {
            className: o.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !l,
            showHalloweenGift: l,
            showYearlyPrice: !0,
            isGift: t,
            isModal: !0,
            priceOptions: s,
          }),
        });
      }
      function C(e) {
        let { onClick: n, isGift: t, priceOptions: s } = e;
        return (0, r.jsx)(a.Clickable, {
          onClick: n,
          style: { cursor: "pointer" },
          children: (0, r.jsx)(i.Gq, {
            className: o.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: t,
            priceOptions: s,
          }),
        });
      }
      n.Z = function (e) {
        let {
          onSelectSku: n,
          isGift: t,
          priceOptions: a,
          shouldShowHalloweenTier2Card: i,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l, {
              onClick: () => n(s.Si.TIER_2),
              isGift: t,
              priceOptions: a,
              showHalloweenGift: i,
            }),
            (0, r.jsx)(C, {
              onClick: () => n(s.Si.TIER_0),
              isGift: t,
              priceOptions: a,
            }),
          ],
        });
      };
    },
    317269: function (e, n, t) {
      t.d(n, {
        TB: function () {
          return M;
        },
        VY: function () {
          return T;
        },
        ZP: function () {
          return m;
        },
      }),
        t(47120),
        t(411104);
      var r = t(735250),
        a = t(470079),
        i = t(512722),
        s = t.n(i),
        o = t(442837),
        l = t(481060),
        C = t(16084),
        d = t(987209),
        c = t(179118),
        u = t(912788),
        _ = t(509545),
        p = t(55563),
        f = t(74538),
        h = t(741245),
        x = t(474936),
        L = t(981631),
        I = t(689938),
        g = t(977885);
      function E(e) {
        var n, t;
        let a,
          {
            planId: i,
            startingPremiumSubscriptionPlanId: l,
            paymentSourceType: C,
          } = e,
          [d, c] = (0, o.Wu)([_.Z], () => [_.Z.get(l), _.Z.get(i)]);
        if (
          (s()(null != d && null != c, "Missing startingPlan or newPlan"),
          (n = l),
          (t = i),
          x.Y1.indexOf(n) < x.Y1.indexOf(t))
        )
          switch (i) {
            case x.Xh.PREMIUM_MONTH_TIER_1:
              (a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1),
                L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) &&
                  (a =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
              break;
            case x.Xh.PREMIUM_MONTH_TIER_2:
              (a =
                I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH),
                L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) &&
                  (a =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
              break;
            case x.Xh.PREMIUM_YEAR_TIER_1:
              (a =
                I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR),
                L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) &&
                  (a =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
              break;
            case x.Xh.PREMIUM_YEAR_TIER_2:
              (a =
                I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format(
                  { numFreeGuildSubscriptions: x.cb },
                )),
                L.X7u.has(null != C ? C : L.HeQ.UNKNOWN) &&
                  (a =
                    I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format(
                      { numFreeGuildSubscriptions: x.cb },
                    ));
              break;
            case x.Xh.PREMIUM_3_MONTH_TIER_2:
            case x.Xh.PREMIUM_6_MONTH_TIER_2:
              a =
                I.Z.Messages
                  .BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
              break;
            case x.Xh.PREMIUM_MONTH_TIER_0:
            case x.Xh.PREMIUM_YEAR_TIER_0:
              a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            default:
              throw Error("Unexpected planId: ".concat(i));
          }
        else if (d.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1)
          a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
        else
          switch (c.skuId) {
            case x.Si.TIER_0:
              a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
              break;
            case x.Si.TIER_1:
              a = I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
              break;
            case x.Si.TIER_2:
              a =
                1 !== d.intervalCount
                  ? I.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH
                  : I.Z.Messages
                      .BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
              break;
            default:
              throw Error("Unexpected skuId: ".concat(c.skuId));
          }
        return (0, r.jsx)("div", { className: g.text, children: a });
      }
      function m(e) {
        let n,
          t,
          {
            planId: i,
            enableNoPaymentTrial: d,
            startingPremiumSubscriptionPlanId: c,
            onClose: u,
            followupSKUInfo: m,
            isDowngrade: M,
            hideClose: T,
            postSuccessGuild: N,
            paymentSourceType: b,
          } = e,
          { theme: j } = (0, l.useThemeContext)(),
          S = (0, o.e7)([p.Z], () => (null != m ? p.Z.get(m.id) : null));
        a.useEffect(() => {
          if (null == m || null != S) return;
          let { applicationId: e, id: n } = m;
          (0, C.$N)(e, n).catch(L.VqG);
        }, [m, S]);
        let A = (e) => {
          if (e.skuId === x.Si.TIER_0)
            return L.X7u.has(null != b ? b : L.HeQ.UNKNOWN)
              ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
          if (e.skuId === x.Si.TIER_1)
            return L.X7u.has(null != b ? b : L.HeQ.UNKNOWN)
              ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format()
              : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
          return L.X7u.has(null != b ? b : L.HeQ.UNKNOWN)
            ? I.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format()
            : d
              ? I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL
              : I.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
        };
        if (null != S)
          n = (0, r.jsx)("div", {
            className: g.text,
            children:
              I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                skuName: S.name,
              }),
          });
        else if (null != c)
          n = (0, r.jsx)(E, {
            planId: i,
            startingPremiumSubscriptionPlanId: c,
          });
        else if (null != N) {
          let e = _.Z.get(i);
          s()(null != e, "Missing plan"),
            (n = (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", { className: g.text, children: A(e) }),
                (0, r.jsx)("div", {
                  className: g.text,
                  children:
                    I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format(
                      { guildName: N.name },
                    ),
                }),
              ],
            }));
        } else {
          let e = _.Z.get(i);
          s()(null != e, "Missing plan"),
            (n = (0, r.jsx)("div", { className: g.text, children: A(e) }));
        }
        let R = f.ZP.getPremiumType(i);
        return (
          s()(
            null != R,
            "premium type should not be null in purchase confirmation",
          ),
          (t =
            null != S
              ? I.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                  skuName: S.name,
                })
              : M
                ? I.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON
                : null != N
                  ? I.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA
                  : I.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON),
          (0, r.jsxs)("div", {
            className: g.confirmation,
            children: [
              (0, r.jsx)(h.C, {
                className: g.banner,
                theme: j,
                premiumType: R,
                type: L.X7u.has(null != b ? b : L.HeQ.UNKNOWN)
                  ? h.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != c
                    ? h.C.Types.PREMIUM_UPDATED
                    : h.C.Types.PREMIUM_ACTIVATED,
              }),
              n,
              T ? null : (0, r.jsx)(l.Button, { onClick: u, children: t }),
            ],
          })
        );
      }
      function M(e) {
        let { planId: n, onClose: t } = e,
          {
            giftRecipient: a,
            selectedGiftStyle: i,
            hasSentMessage: l,
            giftMessageError: C,
            isSendingMessage: p,
          } = (0, d.wD)(),
          f = (0, o.e7)([_.Z], () => _.Z.get(n));
        s()(null != f, "Missing plan");
        let h = (0, o.e7)([u.Z], () => u.Z.getGiftCode(f.skuId));
        return (0, r.jsx)(c.Z, {
          giftCode: h,
          subscriptionPlan: f,
          onClose: t,
          selectedGiftStyle: i,
          hasSentMessage: l,
          giftRecipient: a,
          giftMessageError: C,
          isSendingMessage: p,
        });
      }
      function T() {
        return (0, r.jsxs)("div", {
          className: g.redirectConfirmation,
          children: [
            (0, r.jsx)(l.Heading, {
              variant: "heading-xl/bold",
              children:
                I.Z.Messages
                  .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER,
            }),
            (0, r.jsxs)("div", {
              className: g.redirectBody,
              children: [
                (0, r.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children:
                    I.Z.Messages
                      .PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY,
                }),
                (0, r.jsx)("br", {}),
                (0, r.jsx)(l.Text, {
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
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var a = t(325767);
      function i(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: i = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.Z)(o),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: s,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    841261: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    943981: function (e, n, t) {
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
    404934: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    524254: function (e, n, t) {
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
    677825: function (e, n, t) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    920667: function (e, n, t) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    577581: function (e, n, t) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
        nitroweenFooterBanner: "nitroweenFooterBanner_d9d258",
      };
    },
    885032: function (e, n, t) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    117787: function (e, n, t) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
      };
    },
    92783: function (e, n, t) {
      e.exports = {
        churnFooterContainer: "churnFooterContainer_a5ba39",
        churnFooterGlow: "churnFooterGlow_a5ba39",
        churnFooterTopBorder: "churnFooterTopBorder_a5ba39",
        churnFooterContent: "churnFooterContent_a5ba39",
        churnFooterContentBody: "churnFooterContentBody_a5ba39",
        churnFooterIcon: "churnFooterIcon_a5ba39",
        churnFooterContentBodyInner: "churnFooterContentBodyInner_a5ba39",
        churnFooterCopy: "churnFooterCopy_a5ba39",
        churnFooterCTAs: "churnFooterCTAs_a5ba39",
        churnFooterClaimCTA: "churnFooterClaimCTA_a5ba39",
        churnFooterClaimCTAInner: "churnFooterClaimCTAInner_a5ba39",
        churnFooterClaimIcon: "churnFooterClaimIcon_a5ba39",
        churnFooterClaimCopy: "churnFooterClaimCopy_a5ba39",
      };
    },
    129559: function (e, n, t) {
      e.exports = {
        buttonText: "buttonText_c66e49",
        tier2Gradient: "tier2Gradient_c66e49",
      };
    },
    83615: function (e, n, t) {
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
    324415: function (e, n, t) {
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
    896243: function (e, n, t) {
      e.exports = {
        body: "body_f4a859",
        title: "title_f4a859",
        subtitle: "subtitle_f4a859",
        whatYouLoseItemContainer: "whatYouLoseItemContainer_f4a859",
        whatYouLoseItem: "whatYouLoseItem_f4a859",
        whatYouLoseItemLeftColumn: "whatYouLoseItemLeftColumn_f4a859",
        whatYouLoseItemLearnMore: "whatYouLoseItemLearnMore_f4a859",
        whatYouLoseItemRightColumn: "whatYouLoseItemRightColumn_f4a859",
        textSingleLineEllipsis: "textSingleLineEllipsis_f4a859",
        profileCard: "profileCard_f4a859",
        profileCardTier1: "profileCardTier1_f4a859 profileCard_f4a859",
        profileAvatar: "profileAvatar_f4a859",
        profileAvatarTier1: "profileAvatarTier1_f4a859",
        profileInner: "profileInner_f4a859",
        profileUserInfo: "profileUserInfo_f4a859",
        profileUserInfoTier1: "profileUserInfoTier1_f4a859",
        profileNameTag: "profileNameTag_f4a859",
        profileNameTagUsername: "profileNameTagUsername_f4a859",
        profilePremiumIcon: "profilePremiumIcon_f4a859",
        emojiStickersPersonalizedContainer:
          "emojiStickersPersonalizedContainer_f4a859",
        personalizedEmoji: "personalizedEmoji_f4a859",
        boostCardContainer: "boostCardContainer_f4a859",
        boostCard: "boostCard_f4a859",
        boostCardIcon: "boostCardIcon_f4a859",
        boostCardInfo: "boostCardInfo_f4a859",
        boostCardTitle: "boostCardTitle_f4a859",
        boostCardSubtitle: "boostCardSubtitle_f4a859",
        boostCardGem: "boostCardGem_f4a859",
        boostCardCount: "boostCardCount_f4a859",
        nonPersonalizedGraphic: "nonPersonalizedGraphic_f4a859",
        spinner: "spinner_f4a859",
      };
    },
    103581: function (e, n, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    279521: function (e, n, t) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
      };
    },
    377628: function (e, n, t) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    251300: function (e, n, t) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    977885: function (e, n, t) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
      };
    },
  },
]);
//# sourceMappingURL=ec90bac6cbf0bd3c5823.js.map
