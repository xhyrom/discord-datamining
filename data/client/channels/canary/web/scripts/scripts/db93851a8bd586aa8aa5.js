"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86751"],
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
    269128: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        l = n(772848),
        s = n(235532);
      let o = (0, l.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: a = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(s.button, n, { [s.open]: t, [s.withHighlight]: a }),
          children: [
            a &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: o,
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
                  stroke: a ? "url(#".concat(o, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: a ? "url(#".concat(o, ")") : "currentColor",
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
          return E;
        },
      });
      var r = n(525654),
        a = n.n(r),
        i = n(39612),
        l = n(271579),
        s = n(756647),
        o = n(232567),
        u = n(703656),
        c = n(314897),
        d = n(896797),
        I = n(626135),
        _ = n(954824),
        f = n(981631);
      async function h(e) {
        var t, n;
        let r = null === (t = a().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === r || "iOS" === r) {
          let t =
              null !== (n = c.default.getFingerprint()) && void 0 !== n
                ? n
                : c.default.getId(),
            r = (0, l.WS)();
          if (null == t && c.default.isAuthenticated())
            try {
              await (0, o.k)(), (t = c.default.getId());
            } catch {}
          return (0, l.ZP)((0, i.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r,
          });
        }
        return "discord://";
      }
      async function E(e) {
        let t = await h(e),
          n = (0, l.zS)(t);
        null != n &&
          I.default.track(f.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          _.Z.launch(t, (e) => {
            !e && (0, u.dL)(d.Z.fallbackRoute);
          });
      }
    },
    89057: function (e, t, n) {
      n.d(t, {
        Vq: function () {
          return T;
        },
        c8: function () {
          return p;
        },
        oQ: function () {
          return C;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        l = n(692547),
        s = n(780384),
        o = n(481060),
        u = n(410030),
        c = n(600164),
        d = n(63063),
        I = n(211242),
        _ = n(981631),
        f = n(689938),
        h = n(205452),
        E = n(51125),
        S = n(47268);
      function m(e) {
        let { className: t } = e,
          n = (0, u.ZP)(),
          a = (0, s.wj)(n) ? E : S;
        return (0, r.jsxs)("div", {
          className: i()(h.container, t),
          children: [
            (0, r.jsx)(o.Heading, {
              className: h.header,
              variant: "heading-xl/semibold",
              children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, r.jsxs)(o.Text, {
              className: h.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, r.jsx)("p", {
                  children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, r.jsx)("p", {
                  children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: a,
              className: h.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function p() {
        return (0, r.jsx)(m, { className: h.settings });
      }
      function T(e) {
        let { onClose: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(o.ModalHeader, {
              className: h.blockedPaymentsModalHeader,
              justify: c.Z.Justify.END,
              children: (0, r.jsx)(o.ModalCloseButton, { onClick: t }),
            }),
            (0, r.jsx)(o.ModalContent, {
              className: h.blockedPaymentsModalContent,
              children: (0, r.jsx)(m, { className: h.modal }),
            }),
          ],
        });
      }
      function C(e) {
        let { className: t } = e;
        return (0, I.Q)()
          ? (0, r.jsxs)(o.Card, {
              className: i()(h.blockedPaymentsWarning, t),
              type: o.Card.Types.CUSTOM,
              children: [
                (0, r.jsx)(o.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: h.blockedPaymentsWarningIcon,
                  color: l.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, r.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    f.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                      helpdeskArticle: d.Z.getArticleURL(
                        _.BhN.BLOCKED_PAYMENTS,
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
          return S;
        },
        v: function () {
          return E;
        },
      }),
        n(47120);
      var r,
        a,
        i,
        l = n(735250),
        s = n(470079),
        o = n(120356),
        u = n.n(o),
        c = n(536640),
        d = n(481060),
        I = n(981631),
        _ = n(689938),
        f = n(471753);
      function h(e, t, n) {
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
      let E = {
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
      class S extends (a = s.Component) {
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
              multiValueRenderer: s,
              options: o,
              value: I,
              autofocus: h,
              disabled: S,
              clearable: m,
              searchable: p,
              styleOverrides: T,
              isMulti: C,
              placeholder: N,
              filterOption: A,
              closeMenuOnSelect: O = !0,
              ...P
            } = this.props,
            b = { ...P };
          null != h && (b.autoFocus = h),
            null != S && (b.isDisabled = S),
            null != m && (b.isClearable = m),
            null != p && (b.isSearchable = p);
          let g = { IndicatorSeparator: () => null };
          null != i &&
            (g.Option = (e) =>
              (0, l.jsx)(c.wx.Option, { ...e, children: i(e.data) })),
            null != a &&
              (g.SingleValue = (e) =>
                (0, l.jsx)(c.wx.SingleValue, { ...e, children: a(e.data) })),
            null != s && (g.MultiValue = (e) => s(e.data));
          if (C && Array.isArray(I)) {
            let t = {};
            o.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = I.map((e) => t[String(e)]));
          } else e = null != I ? o.find((e) => e.value === I) : null;
          return (0, l.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)("div", {
              className: u()(f.select, t, { [f.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, l.jsx)(c.ZP, {
                  ...b,
                  className: n,
                  ref: this._selectRef,
                  isMulti: C,
                  components: g,
                  options: o,
                  styles: null != T ? T : E,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: O,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != N ? N : _.Z.Messages.SELECT,
                  noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: A,
                }),
                null != r
                  ? (0, l.jsx)("div", {
                      className: f.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "_selectRef", s.createRef()),
            h(this, "_containerRef", s.createRef()),
            h(this, "state", { isFocused: !1, isOpen: !1 }),
            h(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            h(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            h(this, "handleKeyDown", (e) => {
              e.which === I.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            h(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            h(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      h(S, "MenuPlacements", r);
    },
    713316: function (e, t, n) {
      n.d(t, {
        w: function () {
          return I;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(512722),
        i = n.n(a),
        l = n(481060),
        s = n(598),
        o = n(698708),
        u = n(614277),
        c = n(689938),
        d = n(642852);
      function I(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: a,
            application: I,
          } = (0, s.usePaymentContext)();
        i()(null != a, "Expected selectedSkuId"),
          i()(null != I, "Expected application");
        let _ = n[a];
        i()(null != _, "Expected sku");
        let f =
          c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: I.name,
            itemName: _.name,
          });
        return (0, r.jsxs)(u.C3, {
          children: [
            (0, r.jsx)(o.Z, {}),
            (0, r.jsxs)("div", {
              className: d.confirmation,
              children: [
                (0, r.jsx)(l.Heading, {
                  variant: "heading-xxl/bold",
                  className: d.confirmationHeader,
                  children: "Success!",
                }),
                (0, r.jsx)(l.Text, { variant: "text-md/normal", children: f }),
                (0, r.jsx)("div", { className: d.divider }),
                (0, r.jsx)(l.Button, {
                  onClick: t,
                  children: c.Z.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
      }
    },
    456251: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(481060),
        i = n(529449);
      function l() {
        return (0, r.jsx)(a.Spinner, { className: i.spinner });
      }
    },
    961830: function (e, t, n) {
      n.d(t, {
        F7: function () {
          return m;
        },
        WA: function () {
          return _;
        },
        s2: function () {
          return f;
        },
        wo: function () {
          return S;
        },
        yp: function () {
          return p;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(853872),
        i = n(409813),
        l = n(276442),
        s = n(793541),
        o = n(380898),
        u = n(713316),
        c = n(710094),
        d = n(865921),
        I = n(689938);
      let _ = { key: null, renderStep: (e) => (0, r.jsx)(d.v, { ...e }) },
        f = {
          key: i.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(l.J, {
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
        h = {
          key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(o.Z, {}),
        },
        E = {
          key: i.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(s.Z, {}),
          options: { renderHeader: !0 },
        },
        S = {
          key: i.h8.REVIEW,
          renderStep: (e) => (0, r.jsx)(c.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => I.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        m = { key: i.h8.CONFIRM, renderStep: (e) => (0, r.jsx)(u.w, { ...e }) },
        p = [h, E];
    },
    865921: function (e, t, n) {
      n.d(t, {
        v: function () {
          return _;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        i = n(512722),
        l = n.n(i),
        s = n(89057),
        o = n(987209),
        u = n(598),
        c = n(409813),
        d = n(456251),
        I = n(981631);
      function _(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: i,
            hasFetchedSkus: _,
            paymentSources: f,
            hasFetchedPaymentSources: h,
            application: E,
            skusById: S,
            selectedSkuId: m,
          } = (0, u.usePaymentContext)(),
          { isGift: p } = (0, o.wD)(),
          [T, C] = a.useState(!0);
        return (a.useEffect(() => {
          let e = null != E;
          if (!!_ && !!h && !!e) C(!1);
        }, [_, h, E]),
        a.useEffect(() => {
          if (T || i) return;
          l()(null != m, "Expected selectedSkuId");
          let e = S[m];
          if (
            p &&
            (null == e ? void 0 : e.productLine) === I.POd.COLLECTIBLES
          ) {
            t(c.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(f).length) {
            t(c.h8.ADD_PAYMENT_STEPS);
            return;
          }
          t(c.h8.REVIEW);
        }, [T, i, t, f, p, S, m]),
        T)
          ? (0, r.jsx)(d.Z, {})
          : i
            ? (0, r.jsx)(s.Vq, { onClose: n })
            : null;
      }
    },
    614223: function (e, t, n) {
      n.d(t, {
        $g: function () {
          return l;
        },
        Kp: function () {
          return i;
        },
        nA: function () {
          return s;
        },
      });
      var r = n(74538),
        a = n(474936);
      function i(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: r,
          startedPaymentFlowWithPaymentSources: i,
          inReverseTrial: l,
        } = e;
        return !t && !n && !l && null != r && a.YQ.includes(r) && i;
      }
      function l(e, t, n) {
        let r = !1;
        return (
          e &&
            null != t &&
            null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) &&
            (r = !0),
          r
        );
      }
      function s(e, t, n) {
        let i = null != t ? (0, r.Af)(t) : null,
          l = a.mn[e],
          s = null != n ? n : l;
        return (
          null != i
            ? s === i.planId && s === a.IW[e]
              ? (s = a.mn[e])
              : s === i.planId && s === a.mn[e]
                ? (s = a.IW[e])
                : (i.planId === a.Xh.PREMIUM_YEAR_TIER_0 ||
                    i.planId === a.Xh.PREMIUM_YEAR_TIER_1) &&
                  s === a.Xh.PREMIUM_MONTH_TIER_2 &&
                  (s = a.Xh.PREMIUM_YEAR_TIER_2)
            : s === a.Xh.PREMIUM_YEAR_TIER_1 && (s = a.Xh.PREMIUM_MONTH_TIER_1),
          s
        );
      }
    },
    721165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(789020);
      var r = n(735250),
        a = n(470079),
        i = n(442837),
        l = n(131388),
        s = n(171246),
        o = n(689011),
        u = n(931905),
        c = n(430824),
        d = n(598),
        I = n(409813),
        _ = n(586585),
        f = n(614277),
        h = n(750143),
        E = n(689938);
      function S(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            subscriptionMetadataRequest: S,
            selectedSku: m,
            selectedStoreListing: p,
            application: T,
          } = (0, d.usePaymentContext)(),
          C = (0, l.Z)(h.i),
          N = (0, i.e7)([c.Z], () =>
            c.Z.getGuild(null == S ? void 0 : S.guild_id),
          ),
          A = a.useCallback(() => t(I.h8.REVIEW), [t]);
        if (null == m) return null;
        let O = (0, s.KW)(m.flags);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(f.C3, {
              children: C
                ? (0, r.jsx)(u.h, {
                    confirmCta:
                      E.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: A,
                    onCancel: n,
                    title:
                      E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: m.name },
                      ),
                    subtitle: O
                      ? E.Z.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == N ? void 0 : N.name },
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, r.jsx)(o.Oc, {
                    icon: null == p ? void 0 : p.thumbnail,
                    storeListingBenefits: null == p ? void 0 : p.benefits,
                    application: null != T ? T : void 0,
                    title:
                      E.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: m.name },
                      ),
                    subtitle: O
                      ? E.Z.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : E.Z.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: O
                      ? E.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: null == T ? void 0 : T.name },
                        )
                      : E.Z.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !C &&
              (0, r.jsx)(f.O3, {
                children: (0, r.jsx)(_.Z, {
                  onBack: n,
                  backText:
                    E.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: A,
                  primaryCTA: _.g.CONTINUE,
                  primaryText:
                    E.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON,
                }),
              }),
          ],
        });
      }
    },
    519801: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(789020);
      var r = n(735250),
        a = n(470079),
        i = n(131388),
        l = n(607070),
        s = n(745510),
        o = n(171246),
        u = n(689011),
        c = n(931905),
        d = n(598),
        I = n(409813),
        _ = n(586585),
        f = n(456251),
        h = n(614277),
        E = n(698708),
        S = n(750143),
        m = n(689938);
      function p(e) {
        var t, n;
        let p,
          T,
          {
            showBenefits: C,
            handleClose: N,
            onSubscriptionConfirmation: A,
          } = e,
          {
            updatedSubscription: O,
            readySlideId: P,
            selectedSku: b,
            selectedStoreListing: g,
            application: R,
          } = (0, d.usePaymentContext)(),
          v = (0, i.Z)(S.i),
          { createMultipleConfettiAt: L } = a.useContext(s.h),
          x =
            null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : "",
          M = () => {
            N(), null == A || A();
          },
          k = P === I.h8.CONFIRM,
          B = (0, o.KW)(
            null !== (n = null == b ? void 0 : b.flags) && void 0 !== n ? n : 0,
          ),
          j =
            null != g && g.benefits.length > 0
              ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: g.benefits.length },
                )
              : null;
        return (
          C
            ? v
              ? (p = (0, r.jsx)(c.h, {
                  title:
                    m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: x },
                    ),
                  subtitle:
                    null != g && g.benefits.length > 0
                      ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          { benefits: j },
                        )
                      : null,
                  onConfirm: M,
                  confirmCta:
                    m.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((p =
                  null != g && null != R
                    ? (0, r.jsx)(u.Oc, {
                        icon: g.thumbnail,
                        storeListingBenefits: g.benefits,
                        application: R,
                        title:
                          m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                            { tier: x },
                          ),
                        subtitle:
                          m.Z.Messages
                            .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: B
                          ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { applicationName: null == R ? void 0 : R.name },
                            )
                          : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { tier: x },
                            ),
                      })
                    : (0, r.jsx)(f.Z, {})),
                (T = (0, r.jsx)(_.Z, {
                  onPrimary: M,
                  primaryCTA: _.g.CONTINUE,
                  primaryText:
                    m.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (p = v
                ? (0, r.jsx)(c.m, {
                    tierName: x,
                    onConfirm: M,
                    subscription: O,
                  })
                : (0, r.jsx)(u.xe, {
                    tierName: x,
                    onConfirm: M,
                    subscription: O,
                  })),
          a.useEffect(() => {
            l.Z.useReducedMotion &&
              k &&
              L(window.innerWidth / 2, window.innerHeight / 2);
          }, [L, k]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(h.C3, { children: [(0, r.jsx)(E.Z, {}), p] }),
              null != T && (0, r.jsx)(h.O3, { children: T }),
            ],
          })
        );
      }
    },
    759386: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getApplicationPaymentSteps: function () {
            return I;
          },
        }),
        n(47120);
      var r = n(735250);
      n(470079);
      var a = n(409813),
        i = n(276442),
        l = n(961830),
        s = n(721165),
        o = n(519801),
        u = n(589771),
        c = n(883419),
        d = n(689938);
      function I(e) {
        let {
          guildId: t,
          eligibleApplicationSubscriptionGuilds: n,
          showBenefitsFirst: I,
        } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, r.jsx)(u.Z, {
                initialStep: I ? a.h8.BENEFITS : a.h8.REVIEW,
                guildId: t,
                ...e,
              }),
          },
          {
            key: a.h8.BENEFITS,
            renderStep: (e) => (0, r.jsx)(s.Z, { ...e }),
            options: {
              useBreadcrumbLabel: () =>
                d.Z.Messages
                  .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
            },
          },
          {
            key: a.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(i.J, {
                  ...e,
                  breadcrumbSteps: [
                    a.h8.ADD_PAYMENT_STEPS,
                    a.h8.REVIEW,
                    a.h8.CONFIRM,
                  ],
                }),
              }),
            options: { renderHeader: !0 },
          },
          ...l.yp,
          {
            key: a.h8.REVIEW,
            renderStep: (e) =>
              (0, r.jsx)(c.Z, {
                backButtonEligible: !!I || void 0,
                prevStep: I ? a.h8.BENEFITS : void 0,
                showGuildPicker: null == t,
                eligibleApplicationSubscriptionGuilds: n,
                ...e,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => d.Z.Messages.BILLING_STEP_REVIEW,
            },
          },
          {
            key: a.h8.CONFIRM,
            renderStep: (e) => (0, r.jsx)(o.Z, { showBenefits: !I, ...e }),
          },
        ];
      }
    },
    589771: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        i = n(89057),
        l = n(509545),
        s = n(74538),
        o = n(987209),
        u = n(598),
        c = n(456251);
      function d(e) {
        let {
            initialStep: t,
            initialPlanId: n,
            guildId: d,
            setAnalyticsData: I,
            handleClose: _,
          } = e,
          {
            blockedPayments: f,
            setStep: h,
            hasFetchedSubscriptions: E,
            hasFetchedSubscriptionPlans: S,
            currencyLoading: m,
            selectedSkuId: p,
            setSelectedSkuId: T,
            setSelectedPlanId: C,
            priceOptions: N,
            setSubscriptionMetadataRequest: A,
          } = (0, u.usePaymentContext)(),
          { isGift: O } = (0, o.wD)(),
          [P, b] = a.useState(!E || !S || m);
        return (a.useEffect(() => {
          b(!E || !S || m);
        }, [m, S, E]),
        a.useEffect(() => {
          null != d && A({ guild_id: d });
        }, [d, A]),
        a.useEffect(() => {
          C(n);
          let e = null != n ? l.Z.get(n) : null;
          if (!P && !f)
            I((t) => {
              let n = null != e ? (0, s.aS)(e.id, !1, O, N) : void 0;
              return {
                ...t,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: N.currency,
              };
            }),
              null != e && (T(null == e ? void 0 : e.skuId), h(t));
        }, [f, n, O, P, N, p, I, C, T, h, t]),
        P)
          ? (0, r.jsx)(c.Z, {})
          : f
            ? (0, r.jsx)(i.Vq, { onClose: _ })
            : null;
      }
    },
    883419: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(789020);
      var r = n(735250),
        a = n(470079),
        i = n(512722),
        l = n.n(i),
        s = n(481060),
        o = n(330726),
        u = n(716534),
        c = n(171246),
        d = n(598),
        I = n(409813),
        _ = n(45572),
        f = n(51499),
        h = n(678334),
        E = n(456251),
        S = n(614277),
        m = n(698708),
        p = n(43542),
        T = n(689938),
        C = n(600962);
      function N(e) {
        var t;
        let {
            backButtonEligible: n,
            prevStep: i,
            showGuildPicker: N,
            handleStepChange: A,
            trialFooterMessageOverride: O,
            reviewWarningMessage: P,
            planGroup: b,
            openInvoiceId: g,
            analyticsData: R,
            analyticsLocation: v,
            eligibleApplicationSubscriptionGuilds: L,
            handleClose: x,
          } = e,
          {
            activeSubscription: M,
            application: k,
            setUpdatedSubscription: B,
            contextMetadata: j,
            currencies: U,
            paymentSources: Z,
            priceOptions: y,
            purchaseError: D,
            purchaseTokenAuthState: w,
            selectedPlan: F,
            selectedSku: H,
            setCurrency: V,
            setPaymentSourceId: G,
            setPurchaseState: W,
            setPurchaseError: K,
            purchaseState: Y,
            subscriptionMetadataRequest: X,
            setSubscriptionMetadataRequest: z,
            setHasAcceptedTerms: J,
          } = (0, d.usePaymentContext)();
        l()(null != F, "Expected plan to be selected"),
          l()(null != k, "Expected application");
        let q = a.useRef(null),
          [Q, $] = (0, o.Z)(!1, 500),
          [ee, et] = a.useState(null == X ? void 0 : X.guild_id),
          en = (0, c.KW)(
            null !== (t = null == H ? void 0 : H.flags) && void 0 !== t ? t : 0,
          );
        a.useEffect(() => {
          null != D &&
            null != q.current &&
            q.current.scrollIntoView({ behavior: "smooth" });
        }, [D]);
        let er = a.useCallback(
            (e) => {
              B(e), A(I.h8.CONFIRM);
            },
            [A, B],
          ),
          ea = a.useCallback(
            (e) => {
              et(e), z({ ...X, guild_id: e });
            },
            [et, z, X],
          ),
          ei = a.useRef(null);
        return Y === _.A.PURCHASING
          ? (0, r.jsx)(E.Z, {})
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(f.Z, { className: C.breadcrumbs }),
                (0, r.jsxs)(S.C3, {
                  children: [
                    (0, r.jsx)(m.Z, {}),
                    en &&
                      (0, r.jsxs)("div", {
                        className: C.userSubscriptionDetailsContainer,
                        children: [
                          (0, r.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              T.Z.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children:
                              T.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format(
                                { applicationName: k.name },
                              ),
                          }),
                        ],
                      }),
                    N &&
                      !en &&
                      (0, r.jsxs)("div", {
                        className: C.guildPickerContainer,
                        children: [
                          (0, r.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children:
                              T.Z.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE,
                          }),
                          (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: C.guildPickerDescription,
                            children:
                              T.Z.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE,
                          }),
                          (0, r.jsx)(p.y, {
                            selectedGuildId: ee,
                            onGuildChange: ea,
                            eligibleApplicationSubscriptionGuilds: L,
                          }),
                        ],
                      }),
                    (0, r.jsx)(u.Z, {
                      selectedPlanId: F.id,
                      paymentSources: Z,
                      onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                      priceOptions: y,
                      currencies: U,
                      onCurrencyChange: (e) => V(e),
                      handlePaymentSourceAdd: () => A(I.h8.ADD_PAYMENT_STEPS),
                      setHasAcceptedTerms: J,
                      legalTermsNodeRef: ei,
                      hasLegalTermsFlash: Q,
                      trialFooterMessageOverride: O,
                      reviewWarningMessage: P,
                      metadata: N || en ? void 0 : X,
                      purchaseState: Y,
                      hideSubscriptionDetails: !0,
                      handleClose: x,
                    }),
                  ],
                }),
                (0, r.jsx)(S.O3, {
                  children: (0, r.jsx)(h.Z, {
                    premiumSubscription: null != M ? M : null,
                    setPurchaseState: W,
                    onBack: () => null != i && A(i),
                    onNext: er,
                    onPurchaseError: (e) => K(e),
                    legalTermsNodeRef: ei,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: v,
                    baseAnalyticsData: R,
                    flowStartTime: j.startTime,
                    planGroup: b,
                    purchaseTokenAuthState: w,
                    openInvoiceId: g,
                    metadata: en ? void 0 : X,
                    backButtonEligible: n,
                    invoiceError: null,
                    disablePurchase:
                      (null == X ? void 0 : X.guild_id) == null && !en,
                  }),
                }),
              ],
            });
      }
    },
    43542: function (e, t, n) {
      n.d(t, {
        y: function () {
          return s;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(481060),
        i = n(689938),
        l = n(829870);
      function s(e) {
        let {
            selectedGuildId: t,
            onGuildChange: n,
            eligibleApplicationSubscriptionGuilds: s,
          } = e,
          o = s.map((e) => ({ value: e.id, label: e.name }));
        return (0, r.jsx)(a.SearchableSelect, {
          className: l.select,
          maxVisibleItems: 5,
          value: t,
          placeholder:
            i.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
          options: o,
          onChange: (e) => {
            n(e);
          },
        });
      }
    },
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120),
        n(411104);
      var r = n(735250),
        a = n(470079),
        i = n(442837),
        l = n(481060),
        s = n(607070),
        o = n(409302),
        u = n(474936);
      function c(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: c = !0,
            defaultAnimationState: d,
            idleAnimationState: I,
          } = e,
          _ = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
          [f, h] = a.useState(d),
          E = a.useRef((0, o._)(t, f)),
          [S, m] = a.useState(null == I),
          [p, T] = a.useState(!1),
          [C, N] = a.useState(-1),
          A = () => {
            (E.current = (0, o._)(t, f)), N((e) => e + 1);
          },
          O = () => {
            m(!1), T(!0), N(-1), h(d);
          };
        a.useEffect(() => {
          null == I && h(d);
        }, [I, d]),
          a.useEffect(() => {
            if (null != I && C >= 0) {
              O();
              return;
            }
            A();
          }, [t, I]),
          a.useEffect(() => {
            (!p || null == I) && A();
          }, [f]),
          a.useEffect(() => {
            p && (m(null == I), T(!1), A());
          }, [p]);
        if (!u.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, r.jsx)(l.LottieAnimation, {
          importData: E.current,
          shouldAnimate: !_ && c,
          className: n,
          versionKey: C,
          onComplete:
            null != I
              ? () => {
                  null != I && (h(I), m(!0));
                }
              : void 0,
          loop: S,
        });
      }
    },
    459965: function (e, t, n) {
      n.d(t, {
        H: function () {
          return _;
        },
        w: function () {
          return d;
        },
      });
      var r = n(470079),
        a = n(442837),
        i = n(668781),
        l = n(509545),
        s = n(580130),
        o = n(74538),
        u = n(231338),
        c = n(689938);
      function d(e, t, n) {
        r.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (i.Z.show({
              title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName: u.Vz[e.paymentGateway],
              }),
              body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                paymentGatewayName: u.Vz[e.paymentGateway],
                subscriptionManagementLink: (0, o.JE)(
                  e.paymentGateway,
                  "SUBSCRIPTION_MANAGEMENT",
                ),
              }),
              confirmText: c.Z.Messages.OKAY,
            }),
            t());
        }, [e]);
      }
      let I = [];
      function _(e, t) {
        let n = (0, a.e7)([l.Z], () => (null != e ? l.Z.get(e) : null)),
          i = (0, a.e7)([s.Z], () => {
            var e;
            return null != n &&
              null !== (e = s.Z.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : I;
          }),
          u = r.useMemo(
            () =>
              Array.from(i).filter((e) => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [i],
          );
        return {
          hasEntitlements:
            !t &&
            null != n &&
            null != u &&
            u.length >= o.ZP.getIntervalMonths(n.interval, n.intervalCount),
          entitlements: u,
        };
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
          default:
            i = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return i;
      };
    },
    931905: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
        m: function () {
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(481060),
        i = n(17894),
        l = n(689938),
        s = n(410113);
      let o = (e) => {
        let {
          onConfirm: t,
          onCancel: n,
          title: o,
          subtitle: u,
          confirmCta: c,
          showOpenDiscord: d = !0,
        } = e;
        return (0, r.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, r.jsx)(a.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: o,
            }),
            null != u
              ? (0, r.jsx)(a.Text, {
                  className: s.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: u,
                })
              : null,
            (0, r.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                d &&
                  (0, r.jsx)(a.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, i.Z)("application_sub_mweb_success_modal"),
                    children:
                      l.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                  }),
                (0, r.jsx)(a.Button, {
                  fullWidth: !0,
                  color: a.Button.Colors.PRIMARY,
                  onClick: t,
                  children: c,
                }),
                null != n &&
                  (0, r.jsx)(a.Button, {
                    fullWidth: !0,
                    color: a.Button.Colors.PRIMARY,
                    look: a.Button.Looks.LINK,
                    onClick: n,
                    children:
                      l.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON,
                  }),
              ],
            }),
          ],
        });
      };
      function u(e) {
        let { onConfirm: t, tierName: n, subscription: o } = e;
        return (0, r.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, r.jsx)(a.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: n },
                ),
            }),
            (0, r.jsx)(a.Text, {
              className: s.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == o ? void 0 : o.currentPeriodEnd },
                ),
            }),
            (0, r.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                (0, r.jsx)(a.Button, {
                  className: s.__invalid_openDiscordButton,
                  onClick: () => (0, i.Z)("application_sub_mweb_success_modal"),
                  children:
                    l.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, r.jsx)(a.Button, {
                  className: s.__invalid_doneButton,
                  look: a.Button.Looks.BLANK,
                  onClick: t,
                  children:
                    l.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }),
              ],
            }),
          ],
        });
      }
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
        l = n(470079),
        s = n(120356),
        o = n.n(s),
        u = n(823668);
      ((r = a || (a = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let c = {
        premium: {
          border: u.premiumFeatureBorder,
          background: u.premiumBackground,
        },
        limited: {
          border: u.limitedFeatureBorder,
          background: u.limitedBackground,
        },
      };
      t.Z = l.forwardRef(function (e, t) {
        let {
          children: n,
          type: r = "premium",
          isShown: a,
          hasBackground: l = !1,
          className: s,
          backgroundClassName: d,
        } = e;
        if (!a) return (0, i.jsx)(i.Fragment, { children: n });
        let { border: I, background: _ } = c[r];
        return (0, i.jsx)("div", {
          ref: t,
          className: o()(I, s),
          children: (0, i.jsx)("div", {
            className: o()(l ? _ : u.background, d),
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
    896797: function (e, t, n) {
      var r,
        a = n(442837),
        i = n(433517),
        l = n(570140),
        s = n(981631);
      function o(e, t, n) {
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
      let u = { lastViewedPath: null, lastViewedNonVoicePath: null },
        c = u,
        d = "LAST_VIEWED_PATH";
      class I extends (r = a.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
          c = null != e ? e : u;
        }
        get defaultRoute() {
          return s.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = c.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : s.Z5c.ME;
        }
        get fallbackRoute() {
          return s.Z5c.ME;
        }
        getState() {
          return c;
        }
      }
      o(I, "displayName", "DefaultRouteStore"),
        o(I, "persistKey", "DefaultRouteStore"),
        o(I, "migrations", [
          () => {
            let e = i.K.get(d, null);
            return i.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (t.Z = new I(l.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: t } = e;
            return (c.lastViewedPath = t), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: t } = e;
            return (c.lastViewedNonVoicePath = t), !0;
          },
        }));
    },
    850840: function (e, t, n) {
      let r;
      n(653041);
      var a,
        i = n(442837),
        l = n(570140);
      function s(e, t, n) {
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
      let o = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class u extends (a = i.ZP.PersistedStore) {
        initialize(e) {
          r = null != e ? e : o;
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
      s(u, "displayName", "ApplicationStoreUserSettingsStore"),
        s(u, "persistKey", "ApplicationStoreUserSettingsStore"),
        s(u, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new u(l.Z, {
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
          foreground: l,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: l,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    235532: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    205452: function (e, t, n) {
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
    471753: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    642852: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    600962: function (e, t, n) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        guildPickerDescription: "guildPickerDescription_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
      };
    },
    829870: function (e, t, n) {
      e.exports = { select: "select_f72424" };
    },
    410113: function (e, t, n) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    823668: function (e, t, n) {
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
//# sourceMappingURL=db93851a8bd586aa8aa5.js.map
