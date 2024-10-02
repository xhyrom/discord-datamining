"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61429"],
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
    269128: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var i = t(120356),
        a = t.n(i),
        s = t(772848),
        o = t(841261);
      let l = (0, s.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: i = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(o.button, t, { [o.open]: n, [o.withHighlight]: i }),
          children: [
            i &&
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
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
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
          return p;
        },
      });
      var r = t(525654),
        i = t.n(r),
        a = t(39612),
        s = t(271579),
        o = t(756647),
        l = t(232567),
        c = t(703656),
        u = t(314897),
        d = t(896797),
        I = t(626135),
        _ = t(954824),
        m = t(981631);
      async function f(e) {
        var n, t;
        let r = null === (n = i().os) || void 0 === n ? void 0 : n.family;
        if ("Android" === r || "iOS" === r) {
          let n =
              null !== (t = u.default.getFingerprint()) && void 0 !== t
                ? t
                : u.default.getId(),
            r = (0, s.WS)();
          if (null == n && u.default.isAuthenticated())
            try {
              await (0, l.k)(), (n = u.default.getId());
            } catch {}
          return (0, s.ZP)((0, a.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: r,
          });
        }
        return "discord://";
      }
      async function p(e) {
        let n = await f(e),
          t = (0, s.zS)(n);
        null != t &&
          I.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource,
          }),
          _.Z.launch(n, (e) => {
            !e && (0, c.dL)(d.Z.fallbackRoute);
          });
      }
    },
    89057: function (e, n, t) {
      t.d(n, {
        Vq: function () {
          return E;
        },
        c8: function () {
          return N;
        },
        oQ: function () {
          return C;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        a = t.n(i),
        s = t(692547),
        o = t(780384),
        l = t(481060),
        c = t(410030),
        u = t(600164),
        d = t(63063),
        I = t(211242),
        _ = t(981631),
        m = t(689938),
        f = t(943981),
        p = t(51125),
        T = t(47268);
      function h(e) {
        let { className: n } = e,
          t = (0, c.ZP)(),
          i = (0, o.wj)(t) ? p : T;
        return (0, r.jsxs)("div", {
          className: a()(f.container, n),
          children: [
            (0, r.jsx)(l.Heading, {
              className: f.header,
              variant: "heading-xl/semibold",
              children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, r.jsxs)(l.Text, {
              className: f.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, r.jsx)("p", {
                  children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, r.jsx)("p", {
                  children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: i,
              className: f.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function N() {
        return (0, r.jsx)(h, { className: f.settings });
      }
      function E(e) {
        let { onClose: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.ModalHeader, {
              className: f.blockedPaymentsModalHeader,
              justify: u.Z.Justify.END,
              children: (0, r.jsx)(l.ModalCloseButton, { onClick: n }),
            }),
            (0, r.jsx)(l.ModalContent, {
              className: f.blockedPaymentsModalContent,
              children: (0, r.jsx)(h, { className: f.modal }),
            }),
          ],
        });
      }
      function C(e) {
        let { className: n } = e;
        return (0, I.Q)()
          ? (0, r.jsxs)(l.Card, {
              className: a()(f.blockedPaymentsWarning, n),
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
                    m.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
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
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
        v: function () {
          return p;
        },
      }),
        t(47120);
      var r,
        i,
        a,
        s = t(735250),
        o = t(470079),
        l = t(120356),
        c = t.n(l),
        u = t(536640),
        d = t(481060),
        I = t(981631),
        _ = t(689938),
        m = t(404934);
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
      ((a = r || (r = {})).TOP = "top"), (a.BOTTOM = "bottom");
      let p = {
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
      class T extends (i = o.Component) {
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
              valueRenderer: i,
              optionRenderer: a,
              multiValueRenderer: o,
              options: l,
              value: I,
              autofocus: f,
              disabled: T,
              clearable: h,
              searchable: N,
              styleOverrides: E,
              isMulti: C,
              placeholder: S,
              filterOption: P,
              closeMenuOnSelect: g = !0,
              ...A
            } = this.props,
            O = { ...A };
          null != f && (O.autoFocus = f),
            null != T && (O.isDisabled = T),
            null != h && (O.isClearable = h),
            null != N && (O.isSearchable = N);
          let x = { IndicatorSeparator: () => null };
          null != a &&
            (x.Option = (e) =>
              (0, s.jsx)(u.wx.Option, { ...e, children: a(e.data) })),
            null != i &&
              (x.SingleValue = (e) =>
                (0, s.jsx)(u.wx.SingleValue, { ...e, children: i(e.data) })),
            null != o && (x.MultiValue = (e) => o(e.data));
          if (C && Array.isArray(I)) {
            let n = {};
            l.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = I.map((e) => n[String(e)]));
          } else e = null != I ? l.find((e) => e.value === I) : null;
          return (0, s.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)("div", {
              className: c()(m.select, n, { [m.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, s.jsx)(u.ZP, {
                  ...O,
                  className: t,
                  ref: this._selectRef,
                  isMulti: C,
                  components: x,
                  options: l,
                  styles: null != E ? E : p,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: g,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : _.Z.Messages.SELECT,
                  noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: P,
                }),
                null != r
                  ? (0, s.jsx)("div", {
                      className: m.errorMessage,
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
              e.which === I.yXg.ESCAPE &&
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
      f(T, "MenuPlacements", r);
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return I;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(512722),
        a = t.n(i),
        s = t(481060),
        o = t(598),
        l = t(698708),
        c = t(614277),
        u = t(689938),
        d = t(525550);
      function I(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: i,
            application: I,
          } = (0, o.usePaymentContext)();
        a()(null != i, "Expected selectedSkuId"),
          a()(null != I, "Expected application");
        let _ = t[i];
        a()(null != _, "Expected sku");
        let m =
          u.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: I.name,
            itemName: _.name,
          });
        return (0, r.jsxs)(c.C3, {
          children: [
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)("div", {
              className: d.confirmation,
              children: [
                (0, r.jsx)(s.Heading, {
                  variant: "heading-xxl/bold",
                  className: d.confirmationHeader,
                  children: "Success!",
                }),
                (0, r.jsx)(s.Text, { variant: "text-md/normal", children: m }),
                (0, r.jsx)("div", { className: d.divider }),
                (0, r.jsx)(s.Button, {
                  onClick: n,
                  children: u.Z.Messages.CLOSE,
                }),
              ],
            }),
          ],
        });
      }
    },
    456251: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        a = t(244203);
      function s() {
        return (0, r.jsx)(i.Spinner, { className: a.spinner });
      }
    },
    961830: function (e, n, t) {
      t.d(n, {
        F7: function () {
          return h;
        },
        WA: function () {
          return _;
        },
        s2: function () {
          return m;
        },
        wo: function () {
          return T;
        },
        yp: function () {
          return N;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(853872),
        a = t(409813),
        s = t(276442),
        o = t(793541),
        l = t(380898),
        c = t(713316),
        u = t(710094),
        d = t(865921),
        I = t(689938);
      let _ = { key: null, renderStep: (e) => (0, r.jsx)(d.v, { ...e }) },
        m = {
          key: a.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)(s.J, {
                ...e,
                breadcrumbSteps: [
                  a.h8.ADD_PAYMENT_STEPS,
                  a.h8.REVIEW,
                  a.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(i.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(a.h8.REVIEW, {
                        trackedFromStep: a.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        f = {
          key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, r.jsx)(l.Z, {}),
        },
        p = {
          key: a.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, r.jsx)(o.Z, {}),
          options: { renderHeader: !0 },
        },
        T = {
          key: a.h8.REVIEW,
          renderStep: (e) => (0, r.jsx)(u.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => I.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        h = { key: a.h8.CONFIRM, renderStep: (e) => (0, r.jsx)(c.w, { ...e }) },
        N = [f, p];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return _;
        },
      }),
        t(47120);
      var r = t(735250),
        i = t(470079),
        a = t(512722),
        s = t.n(a),
        o = t(89057),
        l = t(987209),
        c = t(598),
        u = t(409813),
        d = t(456251),
        I = t(981631);
      function _(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: a,
            hasFetchedSkus: _,
            paymentSources: m,
            hasFetchedPaymentSources: f,
            application: p,
            skusById: T,
            selectedSkuId: h,
          } = (0, c.usePaymentContext)(),
          { isGift: N } = (0, l.wD)(),
          [E, C] = i.useState(!0);
        return (i.useEffect(() => {
          let e = null != p;
          if (!!_ && !!f && !!e) C(!1);
        }, [_, f, p]),
        i.useEffect(() => {
          if (E || a) return;
          s()(null != h, "Expected selectedSkuId");
          let e = T[h];
          if (
            N &&
            (null == e ? void 0 : e.productLine) === I.POd.COLLECTIBLES
          ) {
            n(u.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(m).length) {
            n(u.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(u.h8.REVIEW);
        }, [E, a, n, m, N, T, h]),
        E)
          ? (0, r.jsx)(d.Z, {})
          : a
            ? (0, r.jsx)(o.Vq, { onClose: t })
            : null;
      }
    },
    614223: function (e, n, t) {
      t.d(n, {
        $g: function () {
          return s;
        },
        Kp: function () {
          return a;
        },
        nA: function () {
          return o;
        },
      });
      var r = t(74538),
        i = t(474936);
      function a(e) {
        let {
          isTrial: n,
          isGift: t,
          selectedSkuId: r,
          startedPaymentFlowWithPaymentSources: a,
          inReverseTrial: s,
        } = e;
        return !n && !t && !s && null != r && i.YQ.includes(r) && a;
      }
      function s(e, n, t) {
        let r = !1;
        return (
          e &&
            null != n &&
            null == n.invoiceItems.find((e) => e.subscriptionPlanId === t.id) &&
            (r = !0),
          r
        );
      }
      function o(e, n, t) {
        let a = null != n ? (0, r.Af)(n) : null,
          s = i.mn[e],
          o = null != t ? t : s;
        return (
          null != a
            ? o === a.planId && o === i.IW[e]
              ? (o = i.mn[e])
              : o === a.planId && o === i.mn[e]
                ? (o = i.IW[e])
                : (a.planId === i.Xh.PREMIUM_YEAR_TIER_0 ||
                    a.planId === i.Xh.PREMIUM_YEAR_TIER_1) &&
                  o === i.Xh.PREMIUM_MONTH_TIER_2 &&
                  (o = i.Xh.PREMIUM_YEAR_TIER_2)
            : o === i.Xh.PREMIUM_YEAR_TIER_1 && (o = i.Xh.PREMIUM_MONTH_TIER_1),
          o
        );
      }
    },
    721165: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(789020);
      var r = t(735250),
        i = t(470079),
        a = t(442837),
        s = t(131388),
        o = t(171246),
        l = t(689011),
        c = t(931905),
        u = t(430824),
        d = t(598),
        I = t(409813),
        _ = t(586585),
        m = t(614277),
        f = t(750143),
        p = t(689938);
      function T(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            subscriptionMetadataRequest: T,
            selectedSku: h,
            selectedStoreListing: N,
            application: E,
          } = (0, d.usePaymentContext)(),
          C = (0, s.Z)(f.i),
          S = (0, a.e7)([u.Z], () =>
            u.Z.getGuild(null == T ? void 0 : T.guild_id),
          ),
          P = i.useCallback(() => n(I.h8.REVIEW), [n]);
        if (null == h) return null;
        let g = (0, o.KW)(h.flags);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(m.C3, {
              children: C
                ? (0, r.jsx)(c.h, {
                    confirmCta:
                      p.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: P,
                    onCancel: t,
                    title:
                      p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: h.name },
                      ),
                    subtitle: g
                      ? p.Z.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == S ? void 0 : S.name },
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, r.jsx)(l.Oc, {
                    icon: null == N ? void 0 : N.thumbnail,
                    storeListingBenefits: null == N ? void 0 : N.benefits,
                    application: null != E ? E : void 0,
                    title:
                      p.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: h.name },
                      ),
                    subtitle: g
                      ? p.Z.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : p.Z.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: g
                      ? p.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: null == E ? void 0 : E.name },
                        )
                      : p.Z.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !C &&
              (0, r.jsx)(m.O3, {
                children: (0, r.jsx)(_.Z, {
                  onBack: t,
                  backText:
                    p.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: P,
                  primaryCTA: _.g.CONTINUE,
                  primaryText:
                    p.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON,
                }),
              }),
          ],
        });
      }
    },
    519801: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(789020);
      var r = t(735250),
        i = t(470079),
        a = t(131388),
        s = t(607070),
        o = t(745510),
        l = t(171246),
        c = t(689011),
        u = t(931905),
        d = t(598),
        I = t(409813),
        _ = t(586585),
        m = t(456251),
        f = t(614277),
        p = t(698708),
        T = t(750143),
        h = t(689938);
      function N(e) {
        var n, t;
        let N,
          E,
          {
            showBenefits: C,
            handleClose: S,
            onSubscriptionConfirmation: P,
          } = e,
          {
            updatedSubscription: g,
            readySlideId: A,
            selectedSku: O,
            selectedStoreListing: x,
            application: v,
          } = (0, d.usePaymentContext)(),
          R = (0, a.Z)(T.i),
          { createMultipleConfettiAt: b } = i.useContext(o.h),
          M =
            null !== (n = null == O ? void 0 : O.name) && void 0 !== n ? n : "",
          L = () => {
            S(), null == P || P();
          },
          B = A === I.h8.CONFIRM,
          U = (0, l.KW)(
            null !== (t = null == O ? void 0 : O.flags) && void 0 !== t ? t : 0,
          ),
          j =
            null != x && x.benefits.length > 0
              ? h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: x.benefits.length },
                )
              : null;
        return (
          C
            ? R
              ? (N = (0, r.jsx)(u.h, {
                  title:
                    h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: M },
                    ),
                  subtitle:
                    null != x && x.benefits.length > 0
                      ? h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          { benefits: j },
                        )
                      : null,
                  onConfirm: L,
                  confirmCta:
                    h.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((N =
                  null != x && null != v
                    ? (0, r.jsx)(c.Oc, {
                        icon: x.thumbnail,
                        storeListingBenefits: x.benefits,
                        application: v,
                        title:
                          h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                            { tier: M },
                          ),
                        subtitle:
                          h.Z.Messages
                            .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: U
                          ? h.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { applicationName: null == v ? void 0 : v.name },
                            )
                          : h.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { tier: M },
                            ),
                      })
                    : (0, r.jsx)(m.Z, {})),
                (E = (0, r.jsx)(_.Z, {
                  onPrimary: L,
                  primaryCTA: _.g.CONTINUE,
                  primaryText:
                    h.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (N = R
                ? (0, r.jsx)(u.m, {
                    tierName: M,
                    onConfirm: L,
                    subscription: g,
                  })
                : (0, r.jsx)(c.xe, {
                    tierName: M,
                    onConfirm: L,
                    subscription: g,
                  })),
          i.useEffect(() => {
            s.Z.useReducedMotion &&
              B &&
              b(window.innerWidth / 2, window.innerHeight / 2);
          }, [b, B]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(f.C3, { children: [(0, r.jsx)(p.Z, {}), N] }),
              null != E && (0, r.jsx)(f.O3, { children: E }),
            ],
          })
        );
      }
    },
    759386: function (e, n, t) {
      t.r(n),
        t.d(n, {
          getApplicationPaymentSteps: function () {
            return I;
          },
        }),
        t(47120);
      var r = t(735250);
      t(470079);
      var i = t(409813),
        a = t(276442),
        s = t(961830),
        o = t(721165),
        l = t(519801),
        c = t(589771),
        u = t(883419),
        d = t(689938);
      function I(e) {
        let {
          guildId: n,
          eligibleApplicationSubscriptionGuilds: t,
          showBenefitsFirst: I,
        } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, r.jsx)(c.Z, {
                initialStep: I ? i.h8.BENEFITS : i.h8.REVIEW,
                guildId: n,
                ...e,
              }),
          },
          {
            key: i.h8.BENEFITS,
            renderStep: (e) => (0, r.jsx)(o.Z, { ...e }),
            options: {
              useBreadcrumbLabel: () =>
                d.Z.Messages
                  .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
            },
          },
          {
            key: i.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(a.J, {
                  ...e,
                  breadcrumbSteps: [
                    i.h8.ADD_PAYMENT_STEPS,
                    i.h8.REVIEW,
                    i.h8.CONFIRM,
                  ],
                }),
              }),
            options: { renderHeader: !0 },
          },
          ...s.yp,
          {
            key: i.h8.REVIEW,
            renderStep: (e) =>
              (0, r.jsx)(u.Z, {
                backButtonEligible: !!I || void 0,
                prevStep: I ? i.h8.BENEFITS : void 0,
                eligibleApplicationSubscriptionGuilds: t,
                ...e,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => d.Z.Messages.BILLING_STEP_REVIEW,
            },
          },
          {
            key: i.h8.CONFIRM,
            renderStep: (e) => (0, r.jsx)(l.Z, { showBenefits: !I, ...e }),
          },
        ];
      }
    },
    589771: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var r = t(735250),
        i = t(470079),
        a = t(89057),
        s = t(509545),
        o = t(74538),
        l = t(987209),
        c = t(598),
        u = t(456251);
      function d(e) {
        let {
            initialStep: n,
            initialPlanId: t,
            guildId: d,
            setAnalyticsData: I,
            handleClose: _,
          } = e,
          {
            blockedPayments: m,
            setStep: f,
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: T,
            currencyLoading: h,
            selectedSkuId: N,
            setSelectedSkuId: E,
            setSelectedPlanId: C,
            priceOptions: S,
            setSubscriptionMetadataRequest: P,
          } = (0, c.usePaymentContext)(),
          { isGift: g } = (0, l.wD)(),
          [A, O] = i.useState(!p || !T || h);
        return (i.useEffect(() => {
          O(!p || !T || h);
        }, [h, T, p]),
        i.useEffect(() => {
          null != d && P({ guild_id: d });
        }, [d, P]),
        i.useEffect(() => {
          C(t);
          let e = null != t ? s.Z.get(t) : null;
          if (!A && !m)
            I((n) => {
              let t = null != e ? (0, o.aS)(e.id, !1, g, S) : void 0;
              return {
                ...n,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (E(null == e ? void 0 : e.skuId), f(n));
        }, [m, t, g, A, S, N, I, C, E, f, n]),
        A)
          ? (0, r.jsx)(u.Z, {})
          : m
            ? (0, r.jsx)(a.Vq, { onClose: _ })
            : null;
      }
    },
    883419: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return P;
        },
      }),
        t(47120),
        t(789020);
      var r = t(735250),
        i = t(470079),
        a = t(512722),
        s = t.n(a),
        o = t(481060),
        l = t(330726),
        c = t(716534),
        u = t(664891),
        d = t(171246),
        I = t(598),
        _ = t(409813),
        m = t(45572),
        f = t(51499),
        p = t(678334),
        T = t(456251),
        h = t(614277),
        N = t(698708),
        E = t(43542),
        C = t(689938),
        S = t(748605);
      function P(e) {
        var n;
        let {
            backButtonEligible: t,
            prevStep: a,
            handleStepChange: P,
            trialFooterMessageOverride: g,
            reviewWarningMessage: A,
            planGroup: O,
            openInvoiceId: x,
            analyticsData: v,
            analyticsLocation: R,
            eligibleApplicationSubscriptionGuilds: b,
            handleClose: M,
          } = e,
          {
            activeSubscription: L,
            application: B,
            setUpdatedSubscription: U,
            contextMetadata: j,
            currencies: Z,
            paymentSources: k,
            priceOptions: y,
            purchaseError: D,
            purchaseTokenAuthState: F,
            selectedPlan: H,
            selectedSku: w,
            setCurrency: V,
            setPaymentSourceId: G,
            setPurchaseState: W,
            setPurchaseError: Y,
            purchaseState: K,
            subscriptionMetadataRequest: X,
            setSubscriptionMetadataRequest: z,
            setHasAcceptedTerms: J,
          } = (0, I.usePaymentContext)();
        s()(null != H, "Expected plan to be selected"),
          s()(null != B, "Expected application");
        let q = i.useRef(null),
          [Q, $] = (0, l.Z)(!1, 500),
          [ee, en] = i.useState(null == X ? void 0 : X.guild_id),
          [et, er] = i.useState(null),
          ei = (0, d.KW)(
            null !== (n = null == w ? void 0 : w.flags) && void 0 !== n ? n : 0,
          );
        i.useEffect(() => {
          null != D &&
            null != q.current &&
            q.current.scrollIntoView({ behavior: "smooth" });
        }, [D]);
        let ea = i.useCallback(
            (e) => {
              U(e), P(_.h8.CONFIRM);
            },
            [P, U],
          ),
          es = i.useCallback(
            (e) => {
              en(e), z({ ...X, guild_id: e });
            },
            [en, z, X],
          ),
          eo = i.useRef(null);
        return K === m.A.PURCHASING
          ? (0, r.jsx)(T.Z, {})
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(f.Z, { className: S.breadcrumbs }),
                (0, r.jsxs)(h.C3, {
                  children: [
                    (0, r.jsx)(N.Z, {}),
                    ei &&
                      (0, r.jsxs)("div", {
                        className: S.userSubscriptionDetailsContainer,
                        children: [
                          (0, r.jsx)(o.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              C.Z.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children:
                              C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format(
                                { applicationName: B.name },
                              ),
                          }),
                        ],
                      }),
                    !ei &&
                      (0, r.jsxs)("div", {
                        className: S.guildPickerContainer,
                        children: [
                          (0, r.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children:
                              C.Z.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE,
                          }),
                          (0, r.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: S.guildPickerDescription,
                            children:
                              C.Z.Messages
                                .APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE,
                          }),
                          (0, r.jsx)(E.y, {
                            selectedGuildId: ee,
                            onGuildChange: es,
                            eligibleApplicationSubscriptionGuilds: b,
                          }),
                        ],
                      }),
                    null == L
                      ? (0, r.jsx)(c.Z, {
                          selectedPlanId: H.id,
                          paymentSources: k,
                          onPaymentSourceChange: (e) =>
                            G(null != e ? e.id : null),
                          priceOptions: y,
                          currencies: Z,
                          onCurrencyChange: (e) => V(e),
                          handlePaymentSourceAdd: () =>
                            P(_.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: J,
                          legalTermsNodeRef: eo,
                          hasLegalTermsFlash: Q,
                          trialFooterMessageOverride: g,
                          reviewWarningMessage: A,
                          metadata: ei ? void 0 : X,
                          purchaseState: K,
                          hideSubscriptionDetails: !0,
                          handleClose: M,
                        })
                      : (0, r.jsx)(u.Z, {
                          premiumSubscription: L,
                          paymentSources: k,
                          priceOptions: y,
                          onPaymentSourceChange: (e) =>
                            G(null != e ? e.id : null),
                          onPaymentSourceAdd: () => {
                            P(_.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: H.id,
                          setHasAcceptedTerms: J,
                          legalTermsNodeRef: eo,
                          hasLegalTermsFlash: Q,
                          onInvoiceError: (e) => {
                            er(e);
                          },
                          planGroup: O,
                          currencies: Z,
                          onCurrencyChange: (e) => V(e),
                          hasOpenInvoice: null != x,
                          purchaseState: K,
                          handleClose: M,
                        }),
                  ],
                }),
                (0, r.jsx)(h.O3, {
                  children: (0, r.jsx)(p.Z, {
                    premiumSubscription: null != L ? L : null,
                    setPurchaseState: W,
                    onBack: () => null != a && P(a),
                    onNext: ea,
                    onPurchaseError: (e) => Y(e),
                    legalTermsNodeRef: eo,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: R,
                    baseAnalyticsData: v,
                    flowStartTime: j.startTime,
                    planGroup: O,
                    purchaseTokenAuthState: F,
                    openInvoiceId: x,
                    metadata: ei ? void 0 : X,
                    backButtonEligible: t,
                    invoiceError: et,
                    disablePurchase:
                      (null == X ? void 0 : X.guild_id) == null && !ei,
                  }),
                }),
              ],
            });
      }
    },
    43542: function (e, n, t) {
      t.d(n, {
        y: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        a = t(689938),
        s = t(65307);
      function o(e) {
        let {
            selectedGuildId: n,
            onGuildChange: t,
            eligibleApplicationSubscriptionGuilds: o,
          } = e,
          l = o.map((e) => ({ value: e.id, label: e.name }));
        return (0, r.jsx)(i.SearchableSelect, {
          className: s.select,
          maxVisibleItems: 5,
          value: n,
          placeholder:
            a.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
          options: l,
          onChange: (e) => {
            t(e);
          },
        });
      }
    },
    857039: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(987209),
        i = t(599659);
      function a(e) {
        let { location: n } = e,
          { enabled: t } = i.O.useExperiment(
            { location: n },
            { autoTrackExposure: !1 },
          ),
          { alreadyHasHalloweenDeco: a, isGift: s } = (0, r.wD)();
        return t && s && !1 === a;
      }
    },
    459965: function (e, n, t) {
      t.d(n, {
        H: function () {
          return _;
        },
        w: function () {
          return d;
        },
      });
      var r = t(470079),
        i = t(442837),
        a = t(668781),
        s = t(509545),
        o = t(580130),
        l = t(74538),
        c = t(231338),
        u = t(689938);
      function d(e, n, t) {
        r.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !t &&
            (a.Z.show({
              title: u.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName: c.Vz[e.paymentGateway],
              }),
              body: u.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                paymentGatewayName: c.Vz[e.paymentGateway],
                subscriptionManagementLink: (0, l.JE)(
                  e.paymentGateway,
                  "SUBSCRIPTION_MANAGEMENT",
                ),
              }),
              confirmText: u.Z.Messages.OKAY,
            }),
            n());
        }, [e]);
      }
      let I = [];
      function _(e, n) {
        let t = (0, i.e7)([s.Z], () => (null != e ? s.Z.get(e) : null)),
          a = (0, i.e7)([o.Z], () => {
            var e;
            return null != t &&
              null !== (e = o.Z.getForSku(t.skuId)) &&
              void 0 !== e
              ? e
              : I;
          }),
          c = r.useMemo(
            () =>
              Array.from(a).filter((e) => {
                let { parentId: n, consumed: t } = e;
                return null != n && !t;
              }),
            [a],
          );
        return {
          hasEntitlements:
            !n &&
            null != t &&
            null != c &&
            c.length >= l.ZP.getIntervalMonths(t.interval, t.intervalCount),
          entitlements: c,
        };
      }
    },
    931905: function (e, n, t) {
      t.d(n, {
        h: function () {
          return l;
        },
        m: function () {
          return c;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        a = t(17894),
        s = t(689938),
        o = t(632354);
      let l = (e) => {
        let {
          onConfirm: n,
          onCancel: t,
          title: l,
          subtitle: c,
          confirmCta: u,
          showOpenDiscord: d = !0,
        } = e;
        return (0, r.jsxs)("div", {
          className: o.confirmationContainer,
          children: [
            (0, r.jsx)(i.Heading, {
              className: o.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: l,
            }),
            null != c
              ? (0, r.jsx)(i.Text, {
                  className: o.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: c,
                })
              : null,
            (0, r.jsxs)("div", {
              className: o.buttonContainer,
              children: [
                d &&
                  (0, r.jsx)(i.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, a.Z)("application_sub_mweb_success_modal"),
                    children:
                      s.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                  }),
                (0, r.jsx)(i.Button, {
                  fullWidth: !0,
                  color: i.Button.Colors.PRIMARY,
                  onClick: n,
                  children: u,
                }),
                null != t &&
                  (0, r.jsx)(i.Button, {
                    fullWidth: !0,
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    onClick: t,
                    children:
                      s.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON,
                  }),
              ],
            }),
          ],
        });
      };
      function c(e) {
        let { onConfirm: n, tierName: t, subscription: l } = e;
        return (0, r.jsxs)("div", {
          className: o.confirmationContainer,
          children: [
            (0, r.jsx)(i.Heading, {
              className: o.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: t },
                ),
            }),
            (0, r.jsx)(i.Text, {
              className: o.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == l ? void 0 : l.currentPeriodEnd },
                ),
            }),
            (0, r.jsxs)("div", {
              className: o.buttonContainer,
              children: [
                (0, r.jsx)(i.Button, {
                  className: o.__invalid_openDiscordButton,
                  onClick: () => (0, a.Z)("application_sub_mweb_success_modal"),
                  children:
                    s.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, r.jsx)(i.Button, {
                  className: o.__invalid_doneButton,
                  look: i.Button.Looks.BLANK,
                  onClick: n,
                  children:
                    s.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }),
              ],
            }),
          ],
        });
      }
    },
    504983: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return i;
        },
      });
      var r,
        i,
        a = t(735250),
        s = t(470079),
        o = t(120356),
        l = t.n(o),
        c = t(261842);
      ((r = i || (i = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let u = {
        premium: {
          border: c.premiumFeatureBorder,
          background: c.premiumBackground,
        },
        limited: {
          border: c.limitedFeatureBorder,
          background: c.limitedBackground,
        },
      };
      n.Z = s.forwardRef(function (e, n) {
        let {
          children: t,
          type: r = "premium",
          isShown: i,
          hasBackground: s = !1,
          className: o,
          backgroundClassName: d,
        } = e;
        if (!i) return (0, a.jsx)(a.Fragment, { children: t });
        let { border: I, background: _ } = u[r];
        return (0, a.jsx)("div", {
          ref: n,
          className: l()(I, o),
          children: (0, a.jsx)("div", {
            className: l()(s ? _ : c.background, d),
            children: t,
          }),
        });
      });
    },
    911367: function (e, n, t) {
      t.d(n, {
        t: function () {
          return a;
        },
      });
      var r = t(470079),
        i = t(365943);
      function a() {
        r.useEffect(() => {
          (0, i.z)();
        }, []);
      }
    },
    896797: function (e, n, t) {
      var r,
        i = t(442837),
        a = t(433517),
        s = t(570140),
        o = t(981631);
      function l(e, n, t) {
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
      let c = { lastViewedPath: null, lastViewedNonVoicePath: null },
        u = c,
        d = "LAST_VIEWED_PATH";
      class I extends (r = i.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
          u = null != e ? e : c;
        }
        get defaultRoute() {
          return o.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : o.Z5c.ME;
        }
        get fallbackRoute() {
          return o.Z5c.ME;
        }
        getState() {
          return u;
        }
      }
      l(I, "displayName", "DefaultRouteStore"),
        l(I, "persistKey", "DefaultRouteStore"),
        l(I, "migrations", [
          () => {
            let e = a.K.get(d, null);
            return a.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (n.Z = new I(s.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: n } = e;
            return (u.lastViewedPath = n), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: n } = e;
            return (u.lastViewedNonVoicePath = n), !0;
          },
        }));
    },
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(325767);
      function a(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: a = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(o),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: s,
            fill: a,
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
    525550: function (e, n, t) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    748605: function (e, n, t) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        guildPickerDescription: "guildPickerDescription_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
      };
    },
    65307: function (e, n, t) {
      e.exports = { select: "select_f72424" };
    },
    632354: function (e, n, t) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
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
  },
]);
//# sourceMappingURL=329990c2b5dcccf3a9c9.js.map
