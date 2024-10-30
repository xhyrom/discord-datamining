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
        s = t(841261);
      let l = (0, a.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(s.button, t, { [s.open]: n, [s.withHighlight]: r }),
          children: [
            r &&
              (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                  id: l,
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
                  stroke: r ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(l, ")") : "currentColor",
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
          return C;
        },
      });
      var i = t(525654),
        r = t.n(i),
        o = t(39612),
        a = t(271579),
        s = t(756647),
        l = t(232567),
        c = t(703656),
        d = t(314897),
        u = t(896797),
        _ = t(626135),
        p = t(954824),
        f = t(981631);
      async function I(e) {
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
              await (0, l.k)(), (n = d.default.getId());
            } catch {}
          return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function C(e) {
        let n = await I(e),
          t = (0, a.zS)(n);
        null != t &&
          _.default.track(f.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource,
          }),
          p.Z.launch(n, (e) => {
            !e && (0, c.dL)(u.Z.fallbackRoute);
          });
      }
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        v: function () {
          return C;
        },
      }),
        t(47120);
      var i,
        r,
        o,
        a = t(200651),
        s = t(192379),
        l = t(120356),
        c = t.n(l),
        d = t(569619),
        u = t(481060),
        _ = t(981631),
        p = t(689938),
        f = t(404934);
      function I(e, n, t) {
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
      let C = {
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
      class m extends (r = s.Component) {
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
              multiValueRenderer: s,
              options: l,
              value: _,
              autofocus: I,
              disabled: m,
              clearable: b,
              searchable: S,
              styleOverrides: h,
              isMulti: T,
              placeholder: g,
              filterOption: x,
              closeMenuOnSelect: O = !0,
              ...N
            } = this.props,
            A = { ...N };
          null != I && (A.autoFocus = I),
            null != m && (A.isDisabled = m),
            null != b && (A.isClearable = b),
            null != S && (A.isSearchable = S);
          let P = { IndicatorSeparator: () => null };
          null != o &&
            (P.Option = (e) =>
              (0, a.jsx)(d.wx.Option, { ...e, children: o(e.data) })),
            null != r &&
              (P.SingleValue = (e) =>
                (0, a.jsx)(d.wx.SingleValue, { ...e, children: r(e.data) })),
            null != s && (P.MultiValue = (e) => s(e.data));
          if (T && Array.isArray(_)) {
            let n = {};
            l.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = _.map((e) => n[String(e)]));
          } else e = null != _ ? l.find((e) => e.value === _) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(f.select, n, { [f.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(d.ZP, {
                  ...A,
                  className: t,
                  ref: this._selectRef,
                  isMulti: T,
                  components: P,
                  options: l,
                  styles: null != h ? h : C,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: O,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != g ? g : p.Z.Messages.SELECT,
                  noOptionsMessage: () => p.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: x,
                }),
                null != i
                  ? (0, a.jsx)("div", {
                      className: f.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "_selectRef", s.createRef()),
            I(this, "_containerRef", s.createRef()),
            I(this, "state", { isFocused: !1, isOpen: !1 }),
            I(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            I(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            I(this, "handleKeyDown", (e) => {
              e.which === _.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            I(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            I(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      I(m, "MenuPlacements", i);
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return _;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(512722),
        o = t.n(r),
        a = t(481060),
        s = t(598),
        l = t(698708),
        c = t(614277),
        d = t(689938),
        u = t(525550);
      function _(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: r,
            application: _,
          } = (0, s.usePaymentContext)();
        o()(null != r, "Expected selectedSkuId"),
          o()(null != _, "Expected application");
        let p = t[r];
        o()(null != p, "Expected sku");
        let f =
          d.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: _.name,
            itemName: p.name,
          });
        return (0, i.jsxs)(c.C3, {
          children: [
            (0, i.jsx)(l.Z, {}),
            (0, i.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: f }),
                (0, i.jsx)("div", { className: u.divider }),
                (0, i.jsx)(a.Button, {
                  onClick: n,
                  children: d.Z.Messages.CLOSE,
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
          return b;
        },
        WA: function () {
          return p;
        },
        s2: function () {
          return f;
        },
        wo: function () {
          return m;
        },
        yp: function () {
          return S;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(853872),
        o = t(409813),
        a = t(276442),
        s = t(793541),
        l = t(380898),
        c = t(713316),
        d = t(710094),
        u = t(865921),
        _ = t(689938);
      let p = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        f = {
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
        I = {
          key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(l.Z, {}),
        },
        C = {
          key: o.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(s.Z, {}),
          options: { renderHeader: !0 },
        },
        m = {
          key: o.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => _.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        b = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(c.w, { ...e }) },
        S = [I, C];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        s = t(399606),
        l = t(89057),
        c = t(597688),
        d = t(987209),
        u = t(598),
        _ = t(409813),
        p = t(456251),
        f = t(981631);
      function I(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: o,
            hasFetchedSkus: I,
            paymentSources: C,
            hasFetchedPaymentSources: m,
            application: b,
            skusById: S,
            selectedSkuId: h,
          } = (0, u.usePaymentContext)(),
          { isGift: T } = (0, d.wD)(),
          [g, x] = r.useState(!0),
          O = (0, s.e7)([c.Z], () => c.Z.isFetchingCategories);
        return (r.useEffect(() => {
          let e = null != b;
          if (!!I && !!m && !!e) x(O);
        }, [I, m, b, O]),
        r.useEffect(() => {
          if (g || o) return;
          a()(null != h, "Expected selectedSkuId");
          let e = S[h];
          if (
            T &&
            (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES
          ) {
            n(_.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(C).length) {
            n(_.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(_.h8.REVIEW);
        }, [g, o, n, C, T, S, h]),
        g)
          ? (0, i.jsx)(p.Z, {})
          : o
            ? (0, i.jsx)(l.Vq, { onClose: t })
            : null;
      }
    },
    721165: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(442837),
        a = t(131388),
        s = t(171246),
        l = t(689011),
        c = t(931905),
        d = t(430824),
        u = t(598),
        _ = t(409813),
        p = t(586585),
        f = t(614277),
        I = t(750143),
        C = t(689938);
      function m(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            subscriptionMetadataRequest: m,
            selectedSku: b,
            selectedStoreListing: S,
            application: h,
          } = (0, u.usePaymentContext)(),
          T = (0, a.Z)(I.i),
          g = (0, o.e7)([d.Z], () =>
            d.Z.getGuild(null == m ? void 0 : m.guild_id),
          ),
          x = r.useCallback(() => n(_.h8.REVIEW), [n]);
        if (null == b) return null;
        let O = (0, s.KW)(b.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(f.C3, {
              children: T
                ? (0, i.jsx)(c.h, {
                    confirmCta:
                      C.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                    onConfirm: x,
                    onCancel: t,
                    title:
                      C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format(
                        { tier: b.name },
                      ),
                    subtitle: O
                      ? C.Z.Messages
                          .APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE
                      : C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format(
                          { guildName: null == g ? void 0 : g.name },
                        ),
                    showOpenDiscord: !1,
                  })
                : (0, i.jsx)(l.Oc, {
                    icon: null == S ? void 0 : S.thumbnail,
                    storeListingBenefits: null == S ? void 0 : S.benefits,
                    application: null != h ? h : void 0,
                    title:
                      C.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format(
                        { tier: b.name },
                      ),
                    subtitle: O
                      ? C.Z.Messages
                          .APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                      : C.Z.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                    description: O
                      ? C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format(
                          { applicationName: null == h ? void 0 : h.name },
                        )
                      : C.Z.Messages
                          .APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS,
                  }),
            }),
            !T &&
              (0, i.jsx)(f.O3, {
                children: (0, i.jsx)(p.Z, {
                  onBack: t,
                  backText:
                    C.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                  onPrimary: x,
                  primaryCTA: p.g.CONTINUE,
                  primaryText:
                    C.Z.Messages
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
          return S;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(131388),
        a = t(607070),
        s = t(745510),
        l = t(171246),
        c = t(689011),
        d = t(931905),
        u = t(598),
        _ = t(409813),
        p = t(586585),
        f = t(456251),
        I = t(614277),
        C = t(698708),
        m = t(750143),
        b = t(689938);
      function S(e) {
        var n, t;
        let S,
          h,
          {
            showBenefits: T,
            handleClose: g,
            onSubscriptionConfirmation: x,
          } = e,
          {
            updatedSubscription: O,
            readySlideId: N,
            selectedSku: A,
            selectedStoreListing: P,
            application: E,
          } = (0, u.usePaymentContext)(),
          v = (0, o.Z)(m.i),
          { createMultipleConfettiAt: R } = r.useContext(s.h),
          L =
            null !== (n = null == A ? void 0 : A.name) && void 0 !== n ? n : "",
          M = () => {
            g(), null == x || x();
          },
          B = N === _.h8.CONFIRM,
          k = (0, l.KW)(
            null !== (t = null == A ? void 0 : A.flags) && void 0 !== t ? t : 0,
          ),
          j =
            null != P && P.benefits.length > 0
              ? b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format(
                  { benefitCount: P.benefits.length },
                )
              : null;
        return (
          T
            ? v
              ? (S = (0, i.jsx)(d.h, {
                  title:
                    b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format(
                      { tierName: L },
                    ),
                  subtitle:
                    null != P && P.benefits.length > 0
                      ? b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format(
                          { benefits: j },
                        )
                      : null,
                  onConfirm: M,
                  confirmCta:
                    b.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
                }))
              : ((S =
                  null != P && null != E
                    ? (0, i.jsx)(c.Oc, {
                        icon: P.thumbnail,
                        storeListingBenefits: P.benefits,
                        application: E,
                        title:
                          b.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format(
                            { tier: L },
                          ),
                        subtitle:
                          b.Z.Messages
                            .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                        description: k
                          ? b.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { applicationName: null == E ? void 0 : E.name },
                            )
                          : b.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format(
                              { tier: L },
                            ),
                      })
                    : (0, i.jsx)(f.Z, {})),
                (h = (0, i.jsx)(p.Z, {
                  onPrimary: M,
                  primaryCTA: p.g.CONTINUE,
                  primaryText:
                    b.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
                })))
            : (S = v
                ? (0, i.jsx)(d.m, {
                    tierName: L,
                    onConfirm: M,
                    subscription: O,
                  })
                : (0, i.jsx)(c.xe, {
                    tierName: L,
                    onConfirm: M,
                    subscription: O,
                  })),
          r.useEffect(() => {
            a.Z.useReducedMotion &&
              B &&
              R(window.innerWidth / 2, window.innerHeight / 2);
          }, [R, B]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(I.C3, { children: [(0, i.jsx)(C.Z, {}), S] }),
              null != h && (0, i.jsx)(I.O3, { children: h }),
            ],
          })
        );
      }
    },
    759386: function (e, n, t) {
      t.r(n),
        t.d(n, {
          getApplicationPaymentSteps: function () {
            return _;
          },
        }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(409813),
        o = t(276442),
        a = t(961830),
        s = t(721165),
        l = t(519801),
        c = t(589771),
        d = t(883419),
        u = t(689938);
      function _(e) {
        let { guildId: n, showBenefitsFirst: t } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, i.jsx)(c.Z, {
                initialStep: t ? r.h8.BENEFITS : r.h8.REVIEW,
                guildId: n,
                ...e,
              }),
          },
          {
            key: r.h8.BENEFITS,
            renderStep: (e) => (0, i.jsx)(s.Z, { ...e }),
            options: {
              useBreadcrumbLabel: () =>
                u.Z.Messages
                  .APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS,
            },
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
              useBreadcrumbLabel: () => u.Z.Messages.BILLING_STEP_REVIEW,
            },
          },
          {
            key: r.h8.CONFIRM,
            renderStep: (e) => (0, i.jsx)(l.Z, { showBenefits: !t, ...e }),
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
        s = t(74538),
        l = t(987209),
        c = t(598),
        d = t(456251);
      function u(e) {
        let {
            initialStep: n,
            initialPlanId: t,
            guildId: u,
            setAnalyticsData: _,
            handleClose: p,
          } = e,
          {
            blockedPayments: f,
            setStep: I,
            hasFetchedSubscriptions: C,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: b,
            selectedSkuId: S,
            setSelectedSkuId: h,
            setSelectedPlanId: T,
            priceOptions: g,
            setSubscriptionMetadataRequest: x,
          } = (0, c.usePaymentContext)(),
          { isGift: O } = (0, l.wD)(),
          [N, A] = r.useState(!C || !m || b);
        return (r.useEffect(() => {
          A(!C || !m || b);
        }, [b, m, C]),
        r.useEffect(() => {
          null != u && x({ guild_id: u });
        }, [u, x]),
        r.useEffect(() => {
          T(t);
          let e = null != t ? a.Z.get(t) : null;
          if (!N && !f)
            _((n) => {
              let t = null != e ? (0, s.aS)(e.id, !1, O, g) : void 0;
              return {
                ...n,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: g.currency,
              };
            }),
              null != e && (h(null == e ? void 0 : e.skuId), I(n));
        }, [f, t, O, N, g, S, _, T, h, I, n]),
        N)
          ? (0, i.jsx)(d.Z, {})
          : f
            ? (0, i.jsx)(o.Vq, { onClose: p })
            : null;
      }
    },
    883419: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        s = t(442837),
        l = t(481060),
        c = t(330726),
        d = t(716534),
        u = t(664891),
        _ = t(171246),
        p = t(430824),
        f = t(598),
        I = t(409813),
        C = t(45572),
        m = t(51499),
        b = t(678334),
        S = t(456251),
        h = t(614277),
        T = t(698708),
        g = t(689938),
        x = t(748605);
      function O(e) {
        var n, t;
        let {
            backButtonEligible: o,
            prevStep: O,
            handleStepChange: N,
            trialFooterMessageOverride: A,
            reviewWarningMessage: P,
            planGroup: E,
            openInvoiceId: v,
            analyticsData: R,
            analyticsLocation: L,
            handleClose: M,
          } = e,
          {
            activeSubscription: B,
            application: k,
            setUpdatedSubscription: j,
            contextMetadata: y,
            currencies: U,
            paymentSources: Z,
            priceOptions: D,
            purchaseError: H,
            purchaseTokenAuthState: F,
            selectedPlan: w,
            selectedSku: W,
            setCurrency: G,
            setPaymentSourceId: V,
            setPurchaseState: K,
            setPurchaseError: Y,
            purchaseState: z,
            subscriptionMetadataRequest: q,
            setHasAcceptedTerms: J,
          } = (0, f.usePaymentContext)();
        a()(null != w, "Expected plan to be selected"),
          a()(null != k, "Expected application");
        let X = r.useRef(null),
          [Q, $] = (0, c.Z)(!1, 500),
          ee = null == q ? void 0 : q.guild_id,
          en = (0, s.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
          [et, ei] = r.useState(null),
          er = (0, _.KW)(
            null !== (n = null == W ? void 0 : W.flags) && void 0 !== n ? n : 0,
          );
        r.useEffect(() => {
          null != H &&
            null != X.current &&
            X.current.scrollIntoView({ behavior: "smooth" });
        }, [H]);
        let eo = r.useCallback(
            (e) => {
              j(e), N(I.h8.CONFIRM);
            },
            [N, j],
          ),
          ea = r.useRef(null);
        return z === C.A.PURCHASING
          ? (0, i.jsx)(S.Z, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(m.Z, { className: x.breadcrumbs }),
                (0, i.jsxs)(h.C3, {
                  children: [
                    (0, i.jsx)(T.Z, {}),
                    er &&
                      (0, i.jsxs)("div", {
                        className: x.userSubscriptionDetailsContainer,
                        children: [
                          (0, i.jsx)(l.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children:
                              g.Z.Messages
                                .APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE,
                          }),
                          (0, i.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children:
                              g.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format(
                                { applicationName: k.name },
                              ),
                          }),
                        ],
                      }),
                    !er &&
                      (0, i.jsxs)("div", {
                        className: x.guildPickerContainer,
                        children: [
                          (0, i.jsx)(l.FormTitle, {
                            tag: l.FormTitleTags.H5,
                            children: g.Z.Messages.SERVER,
                          }),
                          (0, i.jsxs)("div", {
                            className: x.guildNameContainer,
                            children: [
                              (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: g.Z.Messages.FORM_LABEL_SERVER_NAME,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                children:
                                  null !==
                                    (t = null == en ? void 0 : en.name) &&
                                  void 0 !== t
                                    ? t
                                    : g.Z.Messages.UNKNOWN_GUILD,
                              }),
                            ],
                          }),
                        ],
                      }),
                    null == B
                      ? (0, i.jsx)(d.Z, {
                          selectedPlanId: w.id,
                          paymentSources: Z,
                          onPaymentSourceChange: (e) =>
                            V(null != e ? e.id : null),
                          priceOptions: D,
                          currencies: U,
                          onCurrencyChange: (e) => G(e),
                          handlePaymentSourceAdd: () =>
                            N(I.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: J,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: Q,
                          trialFooterMessageOverride: A,
                          reviewWarningMessage: P,
                          metadata: er ? void 0 : q,
                          purchaseState: z,
                          hideSubscriptionDetails: !0,
                          handleClose: M,
                        })
                      : (0, i.jsx)(u.Z, {
                          premiumSubscription: B,
                          paymentSources: Z,
                          priceOptions: D,
                          onPaymentSourceChange: (e) =>
                            V(null != e ? e.id : null),
                          onPaymentSourceAdd: () => {
                            N(I.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: w.id,
                          setHasAcceptedTerms: J,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: Q,
                          onInvoiceError: (e) => {
                            ei(e);
                          },
                          planGroup: E,
                          currencies: U,
                          onCurrencyChange: (e) => G(e),
                          hasOpenInvoice: null != v,
                          purchaseState: z,
                          handleClose: M,
                        }),
                  ],
                }),
                (0, i.jsx)(h.O3, {
                  children: (0, i.jsx)(b.Z, {
                    premiumSubscription: null != B ? B : null,
                    setPurchaseState: K,
                    onBack: () => null != O && N(O),
                    onNext: eo,
                    onPurchaseError: (e) => Y(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: L,
                    baseAnalyticsData: R,
                    flowStartTime: y.startTime,
                    planGroup: E,
                    purchaseTokenAuthState: F,
                    openInvoiceId: v,
                    metadata: er ? void 0 : q,
                    backButtonEligible: o,
                    invoiceError: et,
                    disablePurchase:
                      (null == q ? void 0 : q.guild_id) == null && !er,
                  }),
                }),
              ],
            });
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
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(17894),
        a = t(689938),
        s = t(632354);
      let l = (e) => {
        let {
          onConfirm: n,
          onCancel: t,
          title: l,
          subtitle: c,
          confirmCta: d,
          showOpenDiscord: u = !0,
        } = e;
        return (0, i.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: l,
            }),
            null != c
              ? (0, i.jsx)(r.Text, {
                  className: s.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: c,
                })
              : null,
            (0, i.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                u &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, o.Z)("application_sub_mweb_success_modal"),
                    children:
                      a.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
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
                    children:
                      a.Z.Messages
                        .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON,
                  }),
              ],
            }),
          ],
        });
      };
      function c(e) {
        let { onConfirm: n, tierName: t, subscription: l } = e;
        return (0, i.jsxs)("div", {
          className: s.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: s.confirmationHeader,
              variant: "heading-lg/extrabold",
              children:
                a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: t },
                ),
            }),
            (0, i.jsx)(r.Text, {
              className: s.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children:
                a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == l ? void 0 : l.currentPeriodEnd },
                ),
            }),
            (0, i.jsxs)("div", {
              className: s.buttonContainer,
              children: [
                (0, i.jsx)(r.Button, {
                  className: s.__invalid_openDiscordButton,
                  onClick: () => (0, o.Z)("application_sub_mweb_success_modal"),
                  children:
                    a.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON,
                }),
                (0, i.jsx)(r.Button, {
                  className: s.__invalid_doneButton,
                  look: r.Button.Looks.BLANK,
                  onClick: n,
                  children:
                    a.Z.Messages
                      .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON,
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
          ...s
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(s),
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
//# sourceMappingURL=4a9b5c8843540165d9df.js.map
