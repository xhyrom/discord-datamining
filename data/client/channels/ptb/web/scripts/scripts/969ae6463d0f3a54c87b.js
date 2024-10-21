"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24488"],
  {
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        s = n(841261);
      let l = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: o = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(s.button, n, { [s.open]: t, [s.withHighlight]: o }),
          children: [
            o &&
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
                  stroke: o ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: o ? "url(#".concat(l, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
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
        o,
        r,
        a = n(200651),
        s = n(192379),
        l = n(120356),
        d = n.n(l),
        c = n(569619),
        u = n(481060),
        f = n(981631),
        _ = n(689938),
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
      ((r = i || (i = {})).TOP = "top"), (r.BOTTOM = "bottom");
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
      class g extends (o = s.Component) {
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
              valueRenderer: o,
              optionRenderer: r,
              multiValueRenderer: s,
              options: l,
              value: f,
              autofocus: b,
              disabled: g,
              clearable: m,
              searchable: I,
              styleOverrides: C,
              isMulti: S,
              placeholder: x,
              filterOption: T,
              closeMenuOnSelect: v = !0,
              ...E
            } = this.props,
            A = { ...E };
          null != b && (A.autoFocus = b),
            null != g && (A.isDisabled = g),
            null != m && (A.isClearable = m),
            null != I && (A.isSearchable = I);
          let O = { IndicatorSeparator: () => null };
          null != r &&
            (O.Option = (e) =>
              (0, a.jsx)(c.wx.Option, { ...e, children: r(e.data) })),
            null != o &&
              (O.SingleValue = (e) =>
                (0, a.jsx)(c.wx.SingleValue, { ...e, children: o(e.data) })),
            null != s && (O.MultiValue = (e) => s(e.data));
          if (S && Array.isArray(f)) {
            let t = {};
            l.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = f.map((e) => t[String(e)]));
          } else e = null != f ? l.find((e) => e.value === f) : null;
          return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: d()(p.select, t, { [p.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(c.ZP, {
                  ...A,
                  className: n,
                  ref: this._selectRef,
                  isMulti: S,
                  components: O,
                  options: l,
                  styles: null != C ? C : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: v,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != x ? x : _.Z.Messages.SELECT,
                  noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: T,
                }),
                null != i
                  ? (0, a.jsx)("div", {
                      className: p.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "_selectRef", s.createRef()),
            b(this, "_containerRef", s.createRef()),
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
    179118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(392711),
        l = n.n(s),
        d = n(442837),
        c = n(481060),
        u = n(37234),
        f = n(194359),
        _ = n(700582),
        p = n(925329),
        b = n(479446),
        h = n(522489),
        g = n(857039),
        m = n(93127),
        I = n(814443),
        C = n(590783),
        S = n(699516),
        x = n(246946),
        T = n(594174),
        v = n(572004),
        E = n(669079),
        A = n(74538),
        O = n(51144),
        R = n(598),
        N = n(981631),
        P = n(474936),
        F = n(689938),
        L = n(524254);
      function k(e) {
        let {
            giftCode: t,
            application: n,
            sku: r,
            subscriptionPlan: s,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: f,
            giftRecipient: b,
            giftMessageError: m,
            isSendingMessage: I,
            halloweenDecoPurchase: S,
          } = e,
          [T, k] = o.useState(c.CopyInput.Modes.DEFAULT),
          M = (0, d.e7)([x.Z], () => x.Z.enabled),
          B = f || (null != l && null != b),
          U = (null == r ? void 0 : r.productLine) === N.POd.COLLECTIBLES,
          { selectedPlan: w } = (0, R.usePaymentContext)(),
          Z =
            (0, g.Z)({ location: "Gift purchase confirm" }) &&
            (null == w ? void 0 : w.skuId) === P.Si.TIER_2 &&
            null != S,
          G = () => (null != s ? s.skuId : null != r ? r.id : null),
          H = () => {
            let e;
            let t = null != l && P.V4.includes(l);
            if (null != m)
              return F.Z.Messages
                .APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
            if (null == s) return null;
            if (s.interval === P.rV.MONTH) {
              if (Z)
                return F.Z.Messages
                  .NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_MONTH;
              e = B
                ? t
                  ? F.Z.Messages
                      .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                  : F.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY
                : F.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY;
            } else {
              if (Z)
                return F.Z.Messages
                  .NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_YEAR;
              e = B
                ? t
                  ? F.Z.Messages
                      .APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                  : F.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY
                : F.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY;
            }
            return e.format({
              skuName: (0, A.aq)(s.id),
              intervalCount: s.intervalCount,
            });
          },
          j = (e, t) => {
            null != r && (0, E.dM)(new C.Z({ code: t, maxUses: 1 }), r);
            try {
              (0, v.JG)(e), k(c.CopyInput.Modes.SUCCESS);
            } catch (e) {
              k(c.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              k(c.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          D = () => {
            let e;
            if (null == t) return null;
            switch (T) {
              case c.CopyInput.Modes.SUCCESS:
                e = F.Z.Messages.BILLING_GIFT_COPIED;
                break;
              case c.CopyInput.Modes.ERROR:
                e = F.Z.Messages.FAILED;
                break;
              default:
                e = F.Z.Messages.COPY;
            }
            return (0, i.jsxs)("div", {
              className: L.giftCodeSection,
              children: [
                (0, i.jsx)(c.FormTitle, {
                  children:
                    F.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK,
                }),
                null != t &&
                  (0, i.jsx)(c.CopyInput, {
                    hideMessage: M ? F.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                    value: (0, E.Nz)(t),
                    mode: T,
                    text: e,
                    onCopy: (e) => j(e, t),
                    supportsCopy: v.wS,
                    className: L.__invalid_copyInput,
                    buttonColor: c.ButtonColors.LINK,
                    buttonLook: c.ButtonLooks.LINK,
                  }),
                (0, i.jsx)("div", {
                  className: L.subtext,
                  children:
                    F.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT,
                }),
              ],
            });
          };
        return I
          ? (0, i.jsxs)("div", {
              className: L.confirmation,
              children: [
                null != n
                  ? (0, i.jsx)(p.Z, {
                      game: n,
                      className: L.__invalid_icon,
                      size: p.Z.Sizes.LARGE,
                      skuId: G(),
                    })
                  : null,
                (0, i.jsx)(c.Spinner, {
                  type: c.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              className: L.confirmation,
              children: [
                null != n
                  ? (0, i.jsx)(p.Z, {
                      game: n,
                      className: L.__invalid_icon,
                      size: p.Z.Sizes.LARGE,
                      skuId: G(),
                    })
                  : null,
                (0, i.jsx)(c.Heading, {
                  variant: "heading-lg/semibold",
                  className: a()({
                    [L.header]: null == l && !U,
                    [L.headerCustomGifting]: null != l && !U,
                  }),
                  children:
                    null != b || (f && null == m)
                      ? F.Z.Messages
                          .APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE
                      : null != m
                        ? F.Z.Messages
                            .APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED
                        : F.Z.Messages
                            .APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE,
                }),
                (f && null != b && null == m) || B
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(_.Z, {
                          user: b,
                          className: L.giftRecipient,
                          size: c.AvatarSizes.SIZE_80,
                        }),
                        (0, i.jsx)(c.Heading, {
                          className: L.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: O.ZP.getName(b),
                        }),
                        (0, i.jsxs)("div", {
                          className: L.giftRecipientTag,
                          children: [" ", O.ZP.getUserTag(b)],
                        }),
                        (0, i.jsx)("div", {
                          className: L.giftSentMessage,
                          children: H(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, E.MY)(b, U),
                        { removeGiftRecipientUI: n } = h.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== E.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", {
                            className: L.blurb,
                            children: H(),
                          }),
                          !n &&
                            null == m &&
                            (0, i.jsx)(y, { giftCode: t, onClose: u }),
                          (0, i.jsx)("div", { className: L.divider }),
                          D(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let y = (e) => {
        let { giftCode: t, onClose: n } = e;
        o.useEffect(() => {
          f.Z.fetchRelationships(), (0, m.W)();
        }, []);
        let [r, a] = o.useState(),
          [s, p] = o.useState(!1),
          [h, g] = o.useState(!1),
          { userAffinities: C, isLoading: x } = (0, d.cj)([I.Z], () => ({
            userAffinities: I.Z.getUserAffinitiesUserIds(),
            isLoading: I.Z.getFetching(),
          })),
          v = Array.from(C.values()),
          E = (0, d.e7)([S.Z], () => S.Z.getFriendIDs()),
          A = l().difference(E, v),
          R = [...v, ...A],
          N = (0, d.e7)(
            [T.default],
            () => T.default.filter((e) => R.includes(e.id) && !e.bot),
            [R],
          );
        if (null == N || 0 === N.length) return null;
        let P = l().sortBy(N, (e) => R.indexOf(e.id));
        return (0, i.jsxs)("div", {
          className: L.giftRecipientSection,
          children: [
            (0, i.jsx)(c.FormTitle, {
              children:
                F.Z.Messages
                  .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL,
            }),
            (0, i.jsxs)("div", {
              className: L.giftRecipient,
              children: [
                (0, i.jsx)(c.SearchableSelect, {
                  placeholder:
                    F.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                  wrapperClassName: L.giftRecipientInputWrapper,
                  className: s ? L.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, i.jsx)(_.Z, {
                          user: e.value,
                          size: c.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    x
                      ? (0, i.jsx)(c.Spinner, {
                          type: c.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: r,
                  onChange: (e) => {
                    a(e), p(!1);
                  },
                  options: P.map((e) => ({
                    value: e,
                    label: "".concat(O.ZP.getUserTag(e)),
                  })),
                }),
                (0, i.jsx)(c.Button, {
                  disabled: null == r,
                  submitting: h,
                  className: L.sendToRecipientButton,
                  onClick: () => {
                    g(!0),
                      (0, b.YD)(r, t)
                        .then(() => {
                          n(), (0, u.Ou)();
                        })
                        .catch(() => {
                          p(!0), g(!1);
                        });
                  },
                  children:
                    F.Z.Messages
                      .APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON,
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: s ? L.subtextError : L.subtext,
              children: s
                ? F.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK
                : F.Z.Messages
                    .APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT,
            }),
          ],
        });
      };
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return d;
        },
        _: function () {
          return c;
        },
      });
      var i = n(544891),
        o = n(570140),
        r = n(480294),
        a = n(814443),
        s = n(428598),
        l = n(981631);
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && r.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, o, r, a, s, l;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (o = e.vc_rank) && void 0 !== o ? o : 0,
                        serverMessageProbability:
                          null !== (r = e.server_message_probability) &&
                          void 0 !== r
                            ? r
                            : 0,
                        serverMessageRank:
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
                            : 0,
                        communicationProbability:
                          null !== (s = e.communication_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        communicationRank:
                          null !== (l = e.communication_rank) && void 0 !== l
                            ? l
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      let i;
      n(47120);
      var o,
        r = n(442837),
        a = n(570140),
        s = n(699516),
        l = n(496232);
      function d(e, t, n) {
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
      let c = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...u };
      function _() {
        i = new Map(
          f.userAffinities
            .filter((e) => !s.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class p extends (o = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              _()),
            this.syncWith([s.Z], _);
        }
        shouldFetch() {
          if (!c) return Date.now() - f.lastFetched > l.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return f;
        }
      }
      d(p, "displayName", "UserAffinitiesStoreV2"),
        d(p, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new p(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...u }), (i = new Map()), (c = !1);
          },
        }));
    },
    590783: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(789020);
      var i = n(913527),
        o = n.n(i),
        r = n(81825),
        a = n(630388),
        s = n(301766),
        l = n(474936);
      function d(e, t, n) {
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
      let c = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class u extends r.Z {
        static createFromServer(e) {
          return new u({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? o()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? s.ZP.createFromServer(e.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != e.entitlement_branches ? e.entitlement_branches : null,
            flags: null != e.flags ? e.flags : 0,
            giftStyle: e.gift_style,
            subscriptionTrial:
              null != e.subscription_trial
                ? {
                    id: e.subscription_trial.id,
                    interval: e.subscription_trial.interval,
                    intervalCount: e.subscription_trial.interval_count,
                    skuId: e.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != e.promotion
                ? {
                    id: e.promotion.id,
                    startDate: e.promotion.start_date,
                    endDate: e.promotion.end_date,
                    inboundHeaderText: e.promotion.inbound_header_text,
                    inboundBodyText: e.promotion.inbound_body_text,
                    inboundHelpCenterLink: e.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && o()().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (this.isSubscription && l.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, a.yE)(this.flags, c.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, a.yE)(
            this.flags,
            c.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            d(this, "userId", void 0),
            d(this, "code", void 0),
            d(this, "skuId", void 0),
            d(this, "applicationId", void 0),
            d(this, "uses", void 0),
            d(this, "maxUses", void 0),
            d(this, "expiresAt", void 0),
            d(this, "redeemed", void 0),
            d(this, "storeListingId", void 0),
            d(this, "subscriptionPlanId", void 0),
            d(this, "subscriptionPlan", void 0),
            d(this, "revoked", void 0),
            d(this, "entitlementBranches", void 0),
            d(this, "flags", void 0),
            d(this, "subscriptionTrial", void 0),
            d(this, "promotion", void 0),
            d(this, "giftStyle", void 0),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      }
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(325767);
      function r(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: r = "currentColor",
          foreground: a,
          ...s
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, o.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
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
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    524254: function (e, t, n) {
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
    744078: function (e, t, n) {
      e.exports = { halloweenFooter: "halloweenFooter_c1dc14" };
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
    297908: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    920667: function (e, t, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    638635: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    38569: function (e, t, n) {
      e.exports = { back: "back_fd80e5" };
    },
    244203: function (e, t, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    130298: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
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
    577581: function (e, t, n) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
        nitroweenFooterBanner: "nitroweenFooterBanner_d9d258",
      };
    },
    885032: function (e, t, n) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    117787: function (e, t, n) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
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
    92783: function (e, t, n) {
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
    896243: function (e, t, n) {
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
    103581: function (e, t, n) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    279521: function (e, t, n) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
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
    377628: function (e, t, n) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
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
    977885: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
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
    893896: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    622085: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    555730: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    600699: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
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
//# sourceMappingURL=969ae6463d0f3a54c87b.js.map
