"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76296"],
  {
    982240: function (e) {
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        a = n(772848),
        l = n(363969);
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
    700582: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        o = n(481060),
        a = n(372900);
      t.Z = r.memo(function (e) {
        var t, n, l, c;
        let {
            user: s,
            size: d = o.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          m = r.useContext(a.Z);
        return (0, i.jsx)(o.Avatar, {
          src:
            ((t = s),
            (n = (0, o.getAvatarSize)(d)),
            (l = u),
            (c = m),
            t.getAvatarURL(c, n, l)),
          size: d,
          "aria-label": f ? void 0 : s.username,
          "aria-hidden": f,
          ...p,
        });
      });
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
        f = n(626135),
        p = n(954824),
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
          f.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          p.Z.launch(t, (e) => {
            !e && (0, s.dL)(u.Z.fallbackRoute);
          });
      }
    },
    752053: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var i,
        r,
        o = n(200651);
      n(192379);
      var a = n(442837),
        l = n(780384),
        c = n(481060),
        s = n(410030),
        d = n(594174),
        u = n(388032),
        f = n(259319),
        p = n(982240),
        m = n(533854);
      ((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      t.Z = (e) => {
        let { onRetry: t, errorOrigin: n, errorMessage: i } = e,
          r = (0, s.ZP)(),
          b = (0, a.e7)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          h = 1 === n ? f.giftModalContainer : f.shopPageContainer,
          g =
            1 === n ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
        return (0, o.jsxs)("div", {
          className: h,
          children: [
            (0, o.jsx)("img", {
              className: f.__invalid_loadIssueImg,
              src: (0, l.wj)(r) ? p : m,
              alt: "",
            }),
            (0, o.jsx)(c.Heading, {
              className: f.heading1,
              variant: "heading-xl/semibold",
              children: u.intl.string(u.t["i5SQ7+"]),
            }),
            (0, o.jsx)(c.Text, {
              className: f.description,
              variant: "text-md/normal",
              children: g,
            }),
            b &&
              null != i &&
              (0, o.jsx)(c.Text, {
                variant: "text-md/normal",
                children: "staff-only debug: " + i,
              }),
            (0, o.jsx)(c.Button, {
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
        f = n(981631),
        p = n(388032),
        m = n(808786);
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
              value: f,
              autofocus: b,
              disabled: g,
              clearable: x,
              searchable: _,
              styleOverrides: v,
              isMulti: C,
              placeholder: S,
              filterOption: j,
              closeMenuOnSelect: k = !0,
              ...y
            } = this.props,
            T = { ...y };
          null != b && (T.autoFocus = b),
            null != g && (T.isDisabled = g),
            null != x && (T.isClearable = x),
            null != _ && (T.isSearchable = _);
          let P = { IndicatorSeparator: () => null };
          null != o &&
            (P.Option = (e) =>
              (0, a.jsx)(d.wx.Option, { ...e, children: o(e.data) })),
            null != r &&
              (P.SingleValue = (e) =>
                (0, a.jsx)(d.wx.SingleValue, { ...e, children: r(e.data) })),
            null != l && (P.MultiValue = (e) => l(e.data));
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
              className: s()(m.select, t, { [m.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(d.ZP, {
                  ...T,
                  className: n,
                  ref: this._selectRef,
                  isMulti: C,
                  components: P,
                  options: c,
                  styles: null != v ? v : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: k,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: j,
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
      b(g, "MenuPlacements", i);
    },
    48931: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(267097),
        a = n(752053),
        l = n(814335);
      function c(e) {
        let { onClose: t } = e,
          { refreshCategories: n } = (0, o.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.ModalHeader, {
              className: l.header,
              children: (0, i.jsx)(r.ModalCloseButton, {
                className: l.closeButton,
                onClick: t,
              }),
            }),
            (0, i.jsx)(a.Z, { onRetry: n, errorOrigin: a.i.GIFT_MODAL }),
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
      var i = n(200651);
      n(192379);
      var r = n(512722),
        o = n.n(r),
        a = n(481060),
        l = n(563132),
        c = n(698708),
        s = n(614277),
        d = n(388032),
        u = n(786698);
      function f(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: r,
            application: f,
          } = (0, l.usePaymentContext)();
        o()(null != r, "Expected selectedSkuId"),
          o()(null != f, "Expected application");
        let p = n[r];
        o()(null != p, "Expected sku");
        let m = d.intl.formatToPlainString(d.t.wK0IbG, {
          applicationName: f.name,
          itemName: p.name,
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
          return p;
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
        f = n(388032);
      let p = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
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
          options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) },
        },
        x = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(s.w, { ...e }) },
        _ = [b, h];
    },
    865921: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(399606),
        a = n(89057),
        l = n(597688),
        c = n(987209),
        s = n(563132),
        d = n(409813),
        u = n(48931),
        f = n(456251),
        p = n(981631);
      function m(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: m,
            hasFetchedSkus: b,
            paymentSources: h,
            hasFetchedPaymentSources: g,
            application: x,
            skusById: _,
            selectedSkuId: v,
          } = (0, s.usePaymentContext)(),
          { isGift: C } = (0, c.wD)(),
          [S, j] = r.useState(!0),
          [k, y] = (0, o.Wu)([l.Z], () => [
            l.Z.isFetchingCategories,
            l.Z.error,
          ]);
        if (
          (r.useEffect(() => {
            let e = null != x;
            if (!!b && !!g && !!e) j(k);
          }, [b, g, x, k]),
          r.useEffect(() => {
            if (S || m || null == v) return;
            let e = _[v];
            if (
              C &&
              (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES
            ) {
              t(d.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(h).length) {
              t(d.h8.ADD_PAYMENT_STEPS);
              return;
            }
            t(d.h8.REVIEW);
          }, [S, m, t, h, C, _, v]),
          S)
        )
          return (0, i.jsx)(f.Z, {});
        if (m) return (0, i.jsx)(a.Vq, { onClose: n });
        if (null != y) return (0, i.jsx)(u.Z, { onClose: n });
        return null;
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
        f = n(409813),
        p = n(586585),
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
          j = r.useCallback(() => t(f.h8.REVIEW), [t]);
        if (null == x) return null;
        let k = (0, l.KW)(x.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.C3, {
              children: C
                ? (0, i.jsx)(s.h, {
                    confirmCta: h.intl.string(h.t.PBHFSk),
                    onConfirm: j,
                    onCancel: n,
                    title: h.intl.format(h.t["6n6oXF"], { tier: x.name }),
                    subtitle: k
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
                    subtitle: k
                      ? h.intl.string(h.t.RvtbPz)
                      : h.intl.string(h.t.zY39Zm),
                    description: k
                      ? h.intl.formatToPlainString(h.t.QCe4ra, {
                          applicationName: null == v ? void 0 : v.name,
                        })
                      : h.intl.string(h.t.n1Pu8P),
                  }),
            }),
            !C &&
              (0, i.jsx)(m.O3, {
                children: (0, i.jsx)(p.Z, {
                  onBack: n,
                  backText: h.intl.string(h.t.TQBY1N),
                  onPrimary: j,
                  primaryCTA: p.g.CONTINUE,
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
        f = n(409813),
        p = n(586585),
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
            onSubscriptionConfirmation: j,
          } = e,
          {
            updatedSubscription: k,
            readySlideId: y,
            selectedSku: T,
            selectedStoreListing: P,
            application: B,
          } = (0, u.usePaymentContext)(),
          E = (0, o.Z)(g.i),
          { createMultipleConfettiAt: N } = r.useContext(l.h),
          O =
            null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : "",
          I = () => {
            S(), null == j || j();
          },
          A = y === f.h8.CONFIRM,
          M = (0, c.KW)(
            null !== (n = null == T ? void 0 : T.flags) && void 0 !== n ? n : 0,
          ),
          w =
            null != P && P.benefits.length > 0
              ? x.intl.formatToPlainString(x.t["+IQQVF"], {
                  benefitCount: P.benefits.length,
                })
              : null;
        return (
          C
            ? E
              ? (_ = (0, i.jsx)(d.h, {
                  title: x.intl.format(x.t.ea6tZm, { tierName: O }),
                  subtitle:
                    null != P && P.benefits.length > 0
                      ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: w })
                      : null,
                  onConfirm: I,
                  confirmCta: x.intl.string(x.t.nlkyw8),
                }))
              : ((_ =
                  null != P && null != B
                    ? (0, i.jsx)(s.Oc, {
                        icon: P.thumbnail,
                        storeListingBenefits: P.benefits,
                        application: B,
                        title: x.intl.format(x.t["Q+qktb"], { tier: O }),
                        subtitle: x.intl.string(x.t.ECKxXV),
                        description: M
                          ? x.intl.format(x.t.MAtQk5, {
                              applicationName: null == B ? void 0 : B.name,
                            })
                          : x.intl.format(x.t.vHkMFx, { tier: O }),
                      })
                    : (0, i.jsx)(m.Z, {})),
                (v = (0, i.jsx)(p.Z, {
                  onPrimary: I,
                  primaryCTA: p.g.CONTINUE,
                  primaryText: x.intl.string(x.t["JtWl+f"]),
                })))
            : (_ = E
                ? (0, i.jsx)(d.m, {
                    tierName: O,
                    onConfirm: I,
                    subscription: k,
                  })
                : (0, i.jsx)(s.xe, {
                    tierName: O,
                    onConfirm: I,
                    subscription: k,
                  })),
          r.useEffect(() => {
            a.Z.useReducedMotion &&
              A &&
              N(window.innerWidth / 2, window.innerHeight / 2);
          }, [N, A]),
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
            return f;
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
      function f(e) {
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
            setAnalyticsData: f,
            handleClose: p,
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
            setSubscriptionMetadataRequest: j,
          } = (0, s.usePaymentContext)(),
          { isGift: k } = (0, c.wD)(),
          [y, T] = r.useState(!h || !g || x);
        return (r.useEffect(() => {
          T(!h || !g || x);
        }, [x, g, h]),
        r.useEffect(() => {
          null != u && j({ guild_id: u });
        }, [u, j]),
        r.useEffect(() => {
          C(n);
          let e = null != n ? a.Z.get(n) : null;
          if (!y && !m)
            f((t) => {
              let n = null != e ? (0, l.aS)(e.id, !1, k, S) : void 0;
              return {
                ...t,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (v(null == e ? void 0 : e.skuId), b(t));
        }, [m, n, k, y, S, _, f, C, v, b, t]),
        y)
          ? (0, i.jsx)(d.Z, {})
          : m
            ? (0, i.jsx)(o.Vq, { onClose: p })
            : null;
      }
    },
    883419: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
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
        f = n(171246),
        p = n(430824),
        m = n(563132),
        b = n(409813),
        h = n(45572),
        g = n(51499),
        x = n(678334),
        _ = n(456251),
        v = n(614277),
        C = n(698708),
        S = n(388032),
        j = n(596054);
      function k(e) {
        var t, n;
        let {
            backButtonEligible: o,
            prevStep: k,
            handleStepChange: y,
            trialFooterMessageOverride: T,
            reviewWarningMessage: P,
            planGroup: B,
            openInvoiceId: E,
            analyticsData: N,
            analyticsLocation: O,
            handleClose: I,
          } = e,
          {
            activeSubscription: A,
            application: M,
            setUpdatedSubscription: w,
            contextMetadata: Z,
            currencies: R,
            paymentSources: H,
            priceOptions: L,
            purchaseError: D,
            purchaseTokenAuthState: F,
            selectedPlan: W,
            selectedSku: G,
            setCurrency: K,
            setPaymentSourceId: V,
            setPurchaseState: z,
            setPurchaseError: Y,
            purchaseState: U,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: q,
          } = (0, m.usePaymentContext)();
        a()(null != W, "Expected plan to be selected");
        let X = r.useRef(null),
          [J, $] = (0, s.Z)(!1, 500),
          ee = null == Q ? void 0 : Q.guild_id,
          et = (0, l.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
          [en, ei] = r.useState(null),
          er = (0, f.KW)(
            null !== (t = null == G ? void 0 : G.flags) && void 0 !== t ? t : 0,
          );
        r.useEffect(() => {
          null != D &&
            null != X.current &&
            X.current.scrollIntoView({ behavior: "smooth" });
        }, [D]);
        let eo = r.useCallback(
            (e) => {
              w(e), y(b.h8.CONFIRM);
            },
            [y, w],
          ),
          ea = r.useRef(null);
        return U === h.A.PURCHASING
          ? (0, i.jsx)(_.Z, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(g.Z, { className: j.breadcrumbs }),
                (0, i.jsxs)(v.C3, {
                  children: [
                    (0, i.jsx)(C.Z, {}),
                    er &&
                      (0, i.jsxs)("div", {
                        className: j.userSubscriptionDetailsContainer,
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
                              applicationName: null == M ? void 0 : M.name,
                            }),
                          }),
                        ],
                      }),
                    !er &&
                      (0, i.jsxs)("div", {
                        className: j.guildPickerContainer,
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: S.intl.string(S.t["5qyruL"]),
                          }),
                          (0, i.jsxs)("div", {
                            className: j.guildNameContainer,
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
                    null == A
                      ? (0, i.jsx)(d.Z, {
                          selectedPlanId: W.id,
                          paymentSources: H,
                          onPaymentSourceChange: (e) =>
                            V(null != e ? e.id : null),
                          priceOptions: L,
                          currencies: R,
                          onCurrencyChange: (e) => K(e),
                          handlePaymentSourceAdd: () =>
                            y(b.h8.ADD_PAYMENT_STEPS),
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
                          premiumSubscription: A,
                          paymentSources: H,
                          priceOptions: L,
                          onPaymentSourceChange: (e) =>
                            V(null != e ? e.id : null),
                          onPaymentSourceAdd: () => {
                            y(b.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: W.id,
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: J,
                          onInvoiceError: (e) => {
                            ei(e);
                          },
                          planGroup: B,
                          currencies: R,
                          onCurrencyChange: (e) => K(e),
                          hasOpenInvoice: null != E,
                          purchaseState: U,
                          handleClose: I,
                        }),
                  ],
                }),
                (0, i.jsx)(v.O3, {
                  children: (0, i.jsx)(x.Z, {
                    premiumSubscription: null != A ? A : null,
                    setPurchaseState: z,
                    onBack: () => null != k && y(k),
                    onNext: eo,
                    onPurchaseError: (e) => Y(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: O,
                    baseAnalyticsData: N,
                    flowStartTime: Z.startTime,
                    planGroup: B,
                    purchaseTokenAuthState: F,
                    openInvoiceId: E,
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
        l = n(753031);
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
    773232: function (e, t, n) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    363969: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    47648: function (e, t, n) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    452049: function (e, t, n) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_d0300f",
        profileEffectBackground: "profileEffectBackground_d0300f",
        profileEffect: "profileEffect_d0300f",
        avatarDecoration: "avatarDecoration_d0300f",
      };
    },
    259319: function (e, t, n) {
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    808786: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    814335: function (e, t, n) {
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    608490: function (e, t, n) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    282544: function (e, t, n) {
      e.exports = { body: "body_e16e99" };
    },
    786698: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    374172: function (e, t, n) {
      e.exports = { back: "back_fd80e5" };
    },
    950304: function (e, t, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    926617: function (e, t, n) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    809186: function (e, t, n) {
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
    596054: function (e, t, n) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    215409: function (e, t, n) {
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
    975765: function (e, t, n) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    698700: function (e, t, n) {
      e.exports = { collectiblePreview: "collectiblePreview_b5260a" };
    },
    894879: function (e, t, n) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    635182: function (e, t, n) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    461405: function (e, t, n) {
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
    301023: function (e, t, n) {
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
    803731: function (e, t, n) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    615945: function (e, t, n) {
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
    589242: function (e, t, n) {
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
    453476: function (e, t, n) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    311583: function (e, t, n) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    747642: function (e, t, n) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    753031: function (e, t, n) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    43371: function (e, t, n) {
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
    882880: function (e, t, n) {
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
    677635: function (e, t, n) {
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
//# sourceMappingURL=f447949b283172b2b5d9.js.map
