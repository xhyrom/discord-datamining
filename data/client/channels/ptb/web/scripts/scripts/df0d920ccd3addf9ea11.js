"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45497"],
  {
    982240: function (e) {
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    269128: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        a = n(772848),
        d = n(841261);
      let c = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: i = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(d.button, n, { [d.open]: t, [d.withHighlight]: i }),
          children: [
            i &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: c,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, o.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, o.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, o.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, o.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, o.jsx)("path", {
                  stroke: i ? "url(#".concat(c, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: i ? "url(#".concat(c, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, t, n) {
      var o = n(200651),
        i = n(192379),
        r = n(481060),
        a = n(372900);
      t.Z = i.memo(function (e) {
        var t, n, d, c;
        let {
            user: l,
            size: s = r.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          b = i.useContext(a.Z);
        return (0, o.jsx)(r.Avatar, {
          src:
            ((t = l),
            (n = (0, r.getAvatarSize)(s)),
            (d = u),
            (c = b),
            t.getAvatarURL(c, n, d)),
          size: s,
          "aria-label": f ? void 0 : l.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    752053: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var o,
        i,
        r = n(200651);
      n(192379);
      var a = n(442837),
        d = n(780384),
        c = n(481060),
        l = n(410030),
        s = n(594174),
        u = n(388032),
        f = n(417552),
        p = n(982240),
        b = n(533854);
      ((o = i || (i = {}))[(o.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (o[(o.GIFT_MODAL = 1)] = "GIFT_MODAL");
      t.Z = (e) => {
        let { onRetry: t, errorOrigin: n, errorMessage: o } = e,
          i = (0, l.ZP)(),
          _ = (0, a.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          g = 1 === n ? f.giftModalContainer : f.shopPageContainer,
          h =
            1 === n ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
        return (0, r.jsxs)("div", {
          className: g,
          children: [
            (0, r.jsx)("img", {
              className: f.__invalid_loadIssueImg,
              src: (0, d.wj)(i) ? p : b,
              alt: "",
            }),
            (0, r.jsx)(c.Heading, {
              className: f.heading1,
              variant: "heading-xl/semibold",
              children: u.intl.string(u.t["i5SQ7+"]),
            }),
            (0, r.jsx)(c.Text, {
              className: f.description,
              variant: "text-md/normal",
              children: h,
            }),
            _ &&
              null != o &&
              (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                children: "staff-only debug: " + o,
              }),
            (0, r.jsx)(c.Button, {
              className: f.reload,
              size: c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: t,
              children: u.intl.string(u.t["+hivLS"]),
            }),
          ],
        });
      };
    },
    285888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
        v: function () {
          return g;
        },
      }),
        n(47120);
      var o,
        i,
        r,
        a = n(200651),
        d = n(192379),
        c = n(120356),
        l = n.n(c),
        s = n(569619),
        u = n(481060),
        f = n(981631),
        p = n(388032),
        b = n(404934);
      function _(e, t, n) {
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
      ((r = o || (o = {})).TOP = "top"), (r.BOTTOM = "bottom");
      let g = {
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
          let { isDisabled: n, menuIsOpen: o } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: o ? "4px 4px 0 0" : "4px",
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
          let { isSelected: n, isFocused: o } = t;
          return {
            ...e,
            ...(n
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : o
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
      class h extends (i = d.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: n,
              error: o,
              valueRenderer: i,
              optionRenderer: r,
              multiValueRenderer: d,
              options: c,
              value: f,
              autofocus: _,
              disabled: h,
              clearable: x,
              searchable: m,
              styleOverrides: v,
              isMulti: C,
              placeholder: S,
              filterOption: k,
              closeMenuOnSelect: B = !0,
              ...O
            } = this.props,
            y = { ...O };
          null != _ && (y.autoFocus = _),
            null != h && (y.isDisabled = h),
            null != x && (y.isClearable = x),
            null != m && (y.isSearchable = m);
          let j = { IndicatorSeparator: () => null };
          null != r &&
            (j.Option = (e) =>
              (0, a.jsx)(s.wx.Option, { ...e, children: r(e.data) })),
            null != i &&
              (j.SingleValue = (e) =>
                (0, a.jsx)(s.wx.SingleValue, { ...e, children: i(e.data) })),
            null != d && (j.MultiValue = (e) => d(e.data));
          if (C && Array.isArray(f)) {
            let t = {};
            c.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? c.find((e) => e.value === f) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: l()(b.select, t, { [b.error]: null != o }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(s.ZP, {
                  ...y,
                  className: n,
                  ref: this._selectRef,
                  isMulti: C,
                  components: j,
                  options: c,
                  styles: null != v ? v : g,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: B,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: k,
                }),
                null != o
                  ? (0, a.jsx)("div", {
                      className: b.errorMessage,
                      children: o,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_selectRef", d.createRef()),
            _(this, "_containerRef", d.createRef()),
            _(this, "state", { isFocused: !1, isOpen: !1 }),
            _(this, "handleFocus", (e) => {
              var t, n;
              this.setState({ isFocused: !0 }),
                null === (t = (n = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            _(this, "handleBlur", (e) => {
              var t, n;
              this.setState({ isFocused: !1 }),
                null === (t = (n = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(n, e);
            }),
            _(this, "handleKeyDown", (e) => {
              e.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            _(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            _(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      _(h, "MenuPlacements", o);
    },
    48931: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(481060),
        r = n(267097),
        a = n(752053),
        d = n(18678);
      function c(e) {
        let { onClose: t } = e,
          { refreshCategories: n } = (0, r.Z)();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.ModalHeader, {
              className: d.header,
              children: (0, o.jsx)(i.ModalCloseButton, {
                className: d.closeButton,
                onClick: t,
              }),
            }),
            (0, o.jsx)(a.Z, { onRetry: n, errorOrigin: a.i.GIFT_MODAL }),
          ],
        });
      }
    },
    713316: function (e, t, n) {
      n.d(t, {
        w: function () {
          return f;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(512722),
        r = n.n(i),
        a = n(481060),
        d = n(563132),
        c = n(698708),
        l = n(614277),
        s = n(388032),
        u = n(525550);
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: i,
            application: f,
          } = (0, d.usePaymentContext)();
        r()(null != i, "Expected selectedSkuId"),
          r()(null != f, "Expected application");
        let p = n[i];
        r()(null != p, "Expected sku");
        let b = s.intl.formatToPlainString(s.t.wK0IbG, {
          applicationName: f.name,
          itemName: p.name,
        });
        return (0, o.jsxs)(l.C3, {
          children: [
            (0, o.jsx)(c.Z, {}),
            (0, o.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, o.jsx)(a.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, o.jsx)(a.Text, { variant: "text-md/normal", children: b }),
                (0, o.jsx)("div", { className: u.divider }),
                (0, o.jsx)(a.Button, {
                  onClick: t,
                  children: s.intl.string(s.t.cpT0Cg),
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
          return p;
        },
        s2: function () {
          return b;
        },
        wo: function () {
          return h;
        },
        yp: function () {
          return m;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(853872),
        r = n(409813),
        a = n(276442),
        d = n(793541),
        c = n(380898),
        l = n(713316),
        s = n(710094),
        u = n(865921),
        f = n(388032);
      let p = { key: null, renderStep: (e) => (0, o.jsx)(u.v, { ...e }) },
        b = {
          key: r.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, o.jsx)(o.Fragment, {
              children: (0, o.jsx)(a.J, {
                ...e,
                breadcrumbSteps: [
                  r.h8.ADD_PAYMENT_STEPS,
                  r.h8.REVIEW,
                  r.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(i.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(r.h8.REVIEW, {
                        trackedFromStep: r.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        _ = {
          key: r.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, o.jsx)(c.Z, {}),
        },
        g = {
          key: r.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, o.jsx)(d.Z, {}),
          options: { renderHeader: !0 },
        },
        h = {
          key: r.h8.REVIEW,
          renderStep: (e) => (0, o.jsx)(s.l, { ...e }),
          options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) },
        },
        x = { key: r.h8.CONFIRM, renderStep: (e) => (0, o.jsx)(l.w, { ...e }) },
        m = [_, g];
    },
    865921: function (e, t, n) {
      n.d(t, {
        v: function () {
          return b;
        },
      }),
        n(47120);
      var o = n(200651),
        i = n(192379),
        r = n(399606),
        a = n(89057),
        d = n(597688),
        c = n(987209),
        l = n(563132),
        s = n(409813),
        u = n(48931),
        f = n(456251),
        p = n(981631);
      function b(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: b,
            hasFetchedSkus: _,
            paymentSources: g,
            hasFetchedPaymentSources: h,
            application: x,
            skusById: m,
            selectedSkuId: v,
          } = (0, l.usePaymentContext)(),
          { isGift: C } = (0, c.wD)(),
          [S, k] = i.useState(!0),
          [B, O] = (0, r.Wu)([d.Z], () => [
            d.Z.isFetchingCategories,
            d.Z.error,
          ]);
        if (
          (i.useEffect(() => {
            let e = null != x;
            if (!!_ && !!h && !!e) k(B);
          }, [_, h, x, B]),
          i.useEffect(() => {
            if (S || b || null == v) return;
            let e = m[v];
            if (
              C &&
              (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES
            ) {
              t(s.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(g).length) {
              t(s.h8.ADD_PAYMENT_STEPS);
              return;
            }
            t(s.h8.REVIEW);
          }, [S, b, t, g, C, m, v]),
          S)
        )
          return (0, o.jsx)(f.Z, {});
        if (b) return (0, o.jsx)(a.Vq, { onClose: n });
        if (null != O) return (0, o.jsx)(u.Z, { onClose: n });
        return null;
      }
    },
    409600: function (e, t, n) {
      n.r(t),
        n.d(t, {
          STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return f;
          },
          default: function () {
            return p;
          },
        }),
        n(47120);
      var o = n(200651);
      n(192379);
      var i = n(100527),
        r = n(906732),
        a = n(987209),
        d = n(563132),
        c = n(791785),
        l = n(961830),
        s = n(231338);
      function u(e) {
        let {
            onClose: t,
            onComplete: n,
            transitionState: i,
            applicationId: a,
            analyticsLocationObject: l,
            skuId: s,
          } = e,
          {} = (0, d.usePaymentContext)(),
          { analyticsLocations: u } = (0, r.ZP)();
        return (0, o.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: n,
          applicationId: a,
          skuId: s,
          initialPlanId: null,
          analyticsObject: l,
          analyticsLocations: u,
          transitionState: i,
        });
      }
      let f = [l.WA, l.s2, ...l.yp, l.wo, l.F7];
      function p(e) {
        let {
            loadId: t,
            applicationId: n,
            skuId: c,
            analyticsLocations: l,
          } = e,
          { analyticsLocations: p } = (0, r.ZP)(l, i.Z.PREMIUM_PAYMENT_MODAL);
        return (0, o.jsx)(r.Gt, {
          value: p,
          children: (0, o.jsx)(d.PaymentContextProvider, {
            loadId: t,
            stepConfigs: f,
            applicationId: n,
            skuIDs: [c],
            activeSubscription: null,
            purchaseType: s.GZ.ONE_TIME,
            children: (0, o.jsx)(a.KB, { children: (0, o.jsx)(u, { ...e }) }),
          }),
        });
      }
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(325767);
      function r(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: r = "currentColor",
          foreground: a,
          ...d
        } = e;
        return (0, o.jsx)("svg", {
          ...(0, i.Z)(d),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, o.jsx)("path", {
            className: a,
            fill: r,
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
    417552: function (e, t, n) {
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    18678: function (e, t, n) {
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
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
    905994: function (e, t, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
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
        adjustedGiftMainAnimation: "adjustedGiftMainAnimation_d90c00",
        soundEmojiContainer: "soundEmojiContainer_d90c00",
        sound: "sound_d90c00",
        emoji: "emoji_d90c00",
        animation: "animation_d90c00",
        spinner: "spinner_d90c00",
        giftBoxOptionContainer: "giftBoxOptionContainer_d90c00",
        adjustedGiftBoxOptionContainer: "adjustedGiftBoxOptionContainer_d90c00",
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
        bodyColumnLeft: "bodyColumnLeft_d439ef",
        bodyColumnRight: "bodyColumnRight_d439ef",
        bodyText: "bodyText_d439ef",
        selectPlanDivider: "selectPlanDivider_d439ef",
        selectPlanChooseTitle: "selectPlanChooseTitle_d439ef",
        selectPlanTotalRow: "selectPlanTotalRow_d439ef",
        planSelectSeparator: "planSelectSeparator_d439ef",
        trialPlanSelectHeader: "trialPlanSelectHeader_d439ef",
        legacyPricingNotice: "legacyPricingNotice_d439ef",
        customGiftMessageWrapper: "customGiftMessageWrapper_d439ef",
        customGiftMessage: "customGiftMessage_d439ef",
        selectGiftTitle: "selectGiftTitle_d439ef",
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
//# sourceMappingURL=df0d920ccd3addf9ea11.js.map
