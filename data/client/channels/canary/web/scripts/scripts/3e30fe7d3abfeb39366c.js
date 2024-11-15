"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66470"],
  {
    982240: function (e) {
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    269128: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        a = t(772848),
        l = t(718922);
      let s = (0, a.Z)();
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
                  id: s,
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
                  stroke: r ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        o = t(481060),
        a = t(372900);
      n.Z = r.memo(function (e) {
        var n, t, l, s;
        let {
            user: c,
            size: d = o.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": p = !1,
            ...f
          } = e,
          m = r.useContext(a.Z);
        return (0, i.jsx)(o.Avatar, {
          src:
            ((n = c),
            (t = (0, o.getAvatarSize)(d)),
            (l = u),
            (s = m),
            n.getAvatarURL(s, t, l)),
          size: d,
          "aria-label": p ? void 0 : c.username,
          "aria-hidden": p,
          ...f,
        });
      });
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
        s = t(232567),
        c = t(703656),
        d = t(314897),
        u = t(896797),
        p = t(626135),
        f = t(954824),
        m = t(981631);
      async function b(e) {
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
              await (0, s.k)(), (n = d.default.getId());
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
        let n = await b(e),
          t = (0, a.zS)(n);
        null != t &&
          p.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource,
          }),
          f.Z.launch(n, (e) => {
            !e && (0, c.dL)(u.Z.fallbackRoute);
          });
      }
    },
    752053: function (e, n, t) {
      t.d(n, {
        i: function () {
          return r;
        },
      });
      var i,
        r,
        o = t(200651);
      t(192379);
      var a = t(442837),
        l = t(780384),
        s = t(481060),
        c = t(410030),
        d = t(594174),
        u = t(388032),
        p = t(480621),
        f = t(982240),
        m = t(533854);
      ((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      n.Z = (e) => {
        let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
          r = (0, c.ZP)(),
          b = (0, a.e7)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          h = 1 === t ? p.giftModalContainer : p.shopPageContainer,
          g =
            1 === t ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
        return (0, o.jsxs)("div", {
          className: h,
          children: [
            (0, o.jsx)("img", {
              className: p.__invalid_loadIssueImg,
              src: (0, l.wj)(r) ? f : m,
              alt: "",
            }),
            (0, o.jsx)(s.Heading, {
              className: p.heading1,
              variant: "heading-xl/semibold",
              children: u.intl.string(u.t["i5SQ7+"]),
            }),
            (0, o.jsx)(s.Text, {
              className: p.description,
              variant: "text-md/normal",
              children: g,
            }),
            b &&
              null != i &&
              (0, o.jsx)(s.Text, {
                variant: "text-md/normal",
                children: "staff-only debug: " + i,
              }),
            (0, o.jsx)(s.Button, {
              className: p.reload,
              size: s.Button.Sizes.MEDIUM,
              color: s.Button.Colors.BRAND,
              onClick: n,
              children: u.intl.string(u.t["+hivLS"]),
            }),
          ],
        });
      };
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
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
        s = t(120356),
        c = t.n(s),
        d = t(569619),
        u = t(481060),
        p = t(981631),
        f = t(388032),
        m = t(7804);
      function b(e, n, t) {
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
      class g extends (r = l.Component) {
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
              options: s,
              value: p,
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
          if (C && Array.isArray(p)) {
            let n = {};
            s.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = p.map((e) => n[String(e)]));
          } else e = null != p ? s.find((e) => e.value === p) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(m.select, n, { [m.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(d.ZP, {
                  ...T,
                  className: t,
                  ref: this._selectRef,
                  isMulti: C,
                  components: P,
                  options: s,
                  styles: null != v ? v : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: k,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : f.intl.string(f.t.XqMe3N),
                  noOptionsMessage: () => f.intl.string(f.t["Xe+fJC"]),
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
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            b(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
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
    48931: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(267097),
        a = t(752053),
        l = t(971653);
      function s(e) {
        let { onClose: n } = e,
          { refreshCategories: t } = (0, o.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.ModalHeader, {
              className: l.header,
              children: (0, i.jsx)(r.ModalCloseButton, {
                className: l.closeButton,
                onClick: n,
              }),
            }),
            (0, i.jsx)(a.Z, { onRetry: t, errorOrigin: a.i.GIFT_MODAL }),
          ],
        });
      }
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
        s = t(698708),
        c = t(614277),
        d = t(388032),
        u = t(538228);
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
        let m = d.intl.formatToPlainString(d.t.wK0IbG, {
          applicationName: p.name,
          itemName: f.name,
        });
        return (0, i.jsxs)(c.C3, {
          children: [
            (0, i.jsx)(s.Z, {}),
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
      var i = t(200651);
      t(192379);
      var r = t(853872),
        o = t(409813),
        a = t(276442),
        l = t(793541),
        s = t(380898),
        c = t(713316),
        d = t(710094),
        u = t(865921),
        p = t(388032);
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
          renderStep: () => (0, i.jsx)(s.Z, {}),
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
        x = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(c.w, { ...e }) },
        _ = [b, h];
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
        o = t(399606),
        a = t(89057),
        l = t(597688),
        s = t(987209),
        c = t(563132),
        d = t(409813),
        u = t(48931),
        p = t(456251),
        f = t(981631);
      function m(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: m,
            hasFetchedSkus: b,
            paymentSources: h,
            hasFetchedPaymentSources: g,
            application: x,
            skusById: _,
            selectedSkuId: v,
          } = (0, c.usePaymentContext)(),
          { isGift: C } = (0, s.wD)(),
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
              (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES
            ) {
              n(d.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(h).length) {
              n(d.h8.ADD_PAYMENT_STEPS);
              return;
            }
            n(d.h8.REVIEW);
          }, [S, m, n, h, C, _, v]),
          S)
        )
          return (0, i.jsx)(p.Z, {});
        if (m) return (0, i.jsx)(a.Vq, { onClose: t });
        if (null != y) return (0, i.jsx)(u.Z, { onClose: t });
        return null;
      }
    },
    721165: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(442837),
        a = t(131388),
        l = t(171246),
        s = t(689011),
        c = t(931905),
        d = t(430824),
        u = t(563132),
        p = t(409813),
        f = t(586585),
        m = t(614277),
        b = t(750143),
        h = t(388032);
      function g(e) {
        let { handleStepChange: n, handleClose: t } = e,
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
          j = r.useCallback(() => n(p.h8.REVIEW), [n]);
        if (null == x) return null;
        let k = (0, l.KW)(x.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.C3, {
              children: C
                ? (0, i.jsx)(c.h, {
                    confirmCta: h.intl.string(h.t.PBHFSk),
                    onConfirm: j,
                    onCancel: t,
                    title: h.intl.format(h.t["6n6oXF"], { tier: x.name }),
                    subtitle: k
                      ? h.intl.string(h.t.lzAoKC)
                      : h.intl.formatToPlainString(h.t["GqaY/v"], {
                          guildName: null == S ? void 0 : S.name,
                        }),
                    showOpenDiscord: !1,
                  })
                : (0, i.jsx)(s.Oc, {
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
                children: (0, i.jsx)(f.Z, {
                  onBack: t,
                  backText: h.intl.string(h.t.TQBY1N),
                  onPrimary: j,
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
        s = t(171246),
        c = t(689011),
        d = t(931905),
        u = t(563132),
        p = t(409813),
        f = t(586585),
        m = t(456251),
        b = t(614277),
        h = t(698708),
        g = t(750143),
        x = t(388032);
      function _(e) {
        var n, t;
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
          N = (0, o.Z)(g.i),
          { createMultipleConfettiAt: O } = r.useContext(l.h),
          E =
            null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : "",
          I = () => {
            S(), null == j || j();
          },
          A = y === p.h8.CONFIRM,
          M = (0, s.KW)(
            null !== (t = null == T ? void 0 : T.flags) && void 0 !== t ? t : 0,
          ),
          w =
            null != P && P.benefits.length > 0
              ? x.intl.formatToPlainString(x.t["+IQQVF"], {
                  benefitCount: P.benefits.length,
                })
              : null;
        return (
          C
            ? N
              ? (_ = (0, i.jsx)(d.h, {
                  title: x.intl.format(x.t.ea6tZm, { tierName: E }),
                  subtitle:
                    null != P && P.benefits.length > 0
                      ? x.intl.formatToPlainString(x.t.HNepfn, { benefits: w })
                      : null,
                  onConfirm: I,
                  confirmCta: x.intl.string(x.t.nlkyw8),
                }))
              : ((_ =
                  null != P && null != B
                    ? (0, i.jsx)(c.Oc, {
                        icon: P.thumbnail,
                        storeListingBenefits: P.benefits,
                        application: B,
                        title: x.intl.format(x.t["Q+qktb"], { tier: E }),
                        subtitle: x.intl.string(x.t.ECKxXV),
                        description: M
                          ? x.intl.format(x.t.MAtQk5, {
                              applicationName: null == B ? void 0 : B.name,
                            })
                          : x.intl.format(x.t.vHkMFx, { tier: E }),
                      })
                    : (0, i.jsx)(m.Z, {})),
                (v = (0, i.jsx)(f.Z, {
                  onPrimary: I,
                  primaryCTA: f.g.CONTINUE,
                  primaryText: x.intl.string(x.t["JtWl+f"]),
                })))
            : (_ = N
                ? (0, i.jsx)(d.m, {
                    tierName: E,
                    onConfirm: I,
                    subscription: k,
                  })
                : (0, i.jsx)(c.xe, {
                    tierName: E,
                    onConfirm: I,
                    subscription: k,
                  })),
          r.useEffect(() => {
            a.Z.useReducedMotion &&
              A &&
              O(window.innerWidth / 2, window.innerHeight / 2);
          }, [O, A]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(b.C3, { children: [(0, i.jsx)(h.Z, {}), _] }),
              null != v && (0, i.jsx)(b.O3, { children: v }),
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
        s = t(519801),
        c = t(589771),
        d = t(883419),
        u = t(388032);
      function p(e) {
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
            renderStep: (e) => (0, i.jsx)(s.Z, { showBenefits: !t, ...e }),
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
        s = t(987209),
        c = t(563132),
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
          } = (0, c.usePaymentContext)(),
          { isGift: k } = (0, s.wD)(),
          [y, T] = r.useState(!h || !g || x);
        return (r.useEffect(() => {
          T(!h || !g || x);
        }, [x, g, h]),
        r.useEffect(() => {
          null != u && j({ guild_id: u });
        }, [u, j]),
        r.useEffect(() => {
          C(t);
          let e = null != t ? a.Z.get(t) : null;
          if (!y && !m)
            p((n) => {
              let t = null != e ? (0, l.aS)(e.id, !1, k, S) : void 0;
              return {
                ...n,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (v(null == e ? void 0 : e.skuId), b(n));
        }, [m, t, k, y, S, _, p, C, v, b, n]),
        y)
          ? (0, i.jsx)(d.Z, {})
          : m
            ? (0, i.jsx)(o.Vq, { onClose: f })
            : null;
      }
    },
    883419: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return k;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        l = t(442837),
        s = t(481060),
        c = t(330726),
        d = t(716534),
        u = t(664891),
        p = t(171246),
        f = t(430824),
        m = t(563132),
        b = t(409813),
        h = t(45572),
        g = t(51499),
        x = t(678334),
        _ = t(456251),
        v = t(614277),
        C = t(698708),
        S = t(388032),
        j = t(260901);
      function k(e) {
        var n, t;
        let {
            backButtonEligible: o,
            prevStep: k,
            handleStepChange: y,
            trialFooterMessageOverride: T,
            reviewWarningMessage: P,
            planGroup: B,
            openInvoiceId: N,
            analyticsData: O,
            analyticsLocation: E,
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
            purchaseError: F,
            purchaseTokenAuthState: D,
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
        a()(null != W, "Expected plan to be selected"),
          a()(null != M, "Expected application");
        let X = r.useRef(null),
          [J, $] = (0, c.Z)(!1, 500),
          ee = null == Q ? void 0 : Q.guild_id,
          en = (0, l.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
          [et, ei] = r.useState(null),
          er = (0, p.KW)(
            null !== (n = null == G ? void 0 : G.flags) && void 0 !== n ? n : 0,
          );
        r.useEffect(() => {
          null != F &&
            null != X.current &&
            X.current.scrollIntoView({ behavior: "smooth" });
        }, [F]);
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
                          (0, i.jsx)(s.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.intl.string(S.t.nf5LOT),
                          }),
                          (0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: S.intl.format(S.t.y4n0GR, {
                              applicationName: M.name,
                            }),
                          }),
                        ],
                      }),
                    !er &&
                      (0, i.jsxs)("div", {
                        className: j.guildPickerContainer,
                        children: [
                          (0, i.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children: S.intl.string(S.t["5qyruL"]),
                          }),
                          (0, i.jsxs)("div", {
                            className: j.guildNameContainer,
                            children: [
                              (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: S.intl.string(S.t.dBih7e),
                              }),
                              (0, i.jsx)(s.Text, {
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
                          hasOpenInvoice: null != N,
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
                    analyticsLocation: E,
                    baseAnalyticsData: O,
                    flowStartTime: Z.startTime,
                    planGroup: B,
                    purchaseTokenAuthState: D,
                    openInvoiceId: N,
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
          return s;
        },
        m: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(17894),
        a = t(388032),
        l = t(160371);
      let s = (e) => {
        let {
          onConfirm: n,
          onCancel: t,
          title: s,
          subtitle: c,
          confirmCta: d,
          showOpenDiscord: u = !0,
        } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: s,
            }),
            null != c
              ? (0, i.jsx)(r.Text, {
                  className: l.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: c,
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
      function c(e) {
        let { onConfirm: n, tierName: t, subscription: s } = e;
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
                timestamp: null == s ? void 0 : s.currentPeriodEnd,
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
    186073: function (e, n, t) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    718922: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    781162: function (e, n, t) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    480621: function (e, n, t) {
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    7804: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    971653: function (e, n, t) {
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    313636: function (e, n, t) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    67738: function (e, n, t) {
      e.exports = { body: "body_e16e99" };
    },
    538228: function (e, n, t) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    784768: function (e, n, t) {
      e.exports = { back: "back_fd80e5" };
    },
    471030: function (e, n, t) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    743101: function (e, n, t) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    438826: function (e, n, t) {
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
    260901: function (e, n, t) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    911903: function (e, n, t) {
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
    44005: function (e, n, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    110760: function (e, n, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    451746: function (e, n, t) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    461313: function (e, n, t) {
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
    147192: function (e, n, t) {
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
    969470: function (e, n, t) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    246279: function (e, n, t) {
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
    318877: function (e, n, t) {
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
    658560: function (e, n, t) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    20259: function (e, n, t) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    523849: function (e, n, t) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    160371: function (e, n, t) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    613544: function (e, n, t) {
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
    153724: function (e, n, t) {
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
    42456: function (e, n, t) {
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
//# sourceMappingURL=3e30fe7d3abfeb39366c.js.map
