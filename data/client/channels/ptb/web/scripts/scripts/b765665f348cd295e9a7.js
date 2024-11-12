"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21634"],
  {
    269128: function (e, t, i) {
      var n = i(200651);
      i(192379);
      var r = i(120356),
        s = i.n(r),
        o = i(772848),
        a = i(841261);
      let l = (0, o.Z)();
      t.Z = (e) => {
        let { open: t, className: i, withHighlight: r = !1 } = e;
        return (0, n.jsxs)("svg", {
          width: "18",
          height: "18",
          className: s()(a.button, i, { [a.open]: t, [a.withHighlight]: r }),
          children: [
            r &&
              (0, n.jsx)("defs", {
                children: (0, n.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, n.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, n.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, n.jsx)("path", {
                  stroke: r ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
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
    700582: function (e, t, i) {
      var n = i(200651),
        r = i(192379),
        s = i(481060),
        o = i(372900);
      t.Z = r.memo(function (e) {
        var t, i, a, l;
        let {
            user: c,
            size: u = s.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": h = !1,
            ...p
          } = e,
          _ = r.useContext(o.Z);
        return (0, n.jsx)(s.Avatar, {
          src:
            ((t = c),
            (i = (0, s.getAvatarSize)(u)),
            (a = d),
            (l = _),
            t.getAvatarURL(l, i, a)),
          size: u,
          "aria-label": h ? void 0 : c.username,
          "aria-hidden": h,
          ...p,
        });
      });
    },
    285888: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return g;
        },
        v: function () {
          return b;
        },
      }),
        i(47120);
      var n,
        r,
        s,
        o = i(200651),
        a = i(192379),
        l = i(120356),
        c = i.n(l),
        u = i(569619),
        d = i(481060),
        h = i(981631),
        p = i(388032),
        _ = i(404934);
      function v(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      ((s = n || (n = {})).TOP = "top"), (s.BOTTOM = "bottom");
      let b = {
        container: (e, t) => {
          let { isDisabled: i } = t;
          return {
            ...e,
            cursor: i ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, t) => {
          let { isDisabled: i, menuIsOpen: n } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: i ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: n ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: i ? "not-allowed" : void 0,
            pointerEvents: i ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, t) => {
          let { isDisabled: i } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: i ? 0.5 : 1,
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
          let { isDisabled: i } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: i ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, t) => {
          let { isDisabled: i } = t;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: i ? void 0 : "pointer",
            opacity: i ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: i ? 0.3 : 1,
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
          let { isSelected: i, isFocused: n } = t;
          return {
            ...e,
            ...(i
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : n
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
      class g extends (r = a.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: t,
              selectClassName: i,
              error: n,
              valueRenderer: r,
              optionRenderer: s,
              multiValueRenderer: a,
              options: l,
              value: h,
              autofocus: v,
              disabled: g,
              clearable: f,
              searchable: m,
              styleOverrides: I,
              isMulti: x,
              placeholder: S,
              filterOption: E,
              closeMenuOnSelect: A = !0,
              ...C
            } = this.props,
            T = { ...C };
          null != v && (T.autoFocus = v),
            null != g && (T.isDisabled = g),
            null != f && (T.isClearable = f),
            null != m && (T.isSearchable = m);
          let y = { IndicatorSeparator: () => null };
          null != s &&
            (y.Option = (e) =>
              (0, o.jsx)(u.wx.Option, { ...e, children: s(e.data) })),
            null != r &&
              (y.SingleValue = (e) =>
                (0, o.jsx)(u.wx.SingleValue, { ...e, children: r(e.data) })),
            null != a && (y.MultiValue = (e) => a(e.data));
          if (x && Array.isArray(h)) {
            let t = {};
            l.forEach((e) => {
              t[String(e.value)] = e;
            }),
              (e = h.map((e) => t[String(e)]));
          } else e = null != h ? l.find((e) => e.value === h) : null;
          return (0, o.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: c()(_.select, t, { [_.error]: null != n }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(u.ZP, {
                  ...T,
                  className: i,
                  ref: this._selectRef,
                  isMulti: x,
                  components: y,
                  options: l,
                  styles: null != I ? I : b,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: A,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != S ? S : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: E,
                }),
                null != n
                  ? (0, o.jsx)("div", {
                      className: _.errorMessage,
                      children: n,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "_selectRef", a.createRef()),
            v(this, "_containerRef", a.createRef()),
            v(this, "state", { isFocused: !1, isOpen: !1 }),
            v(this, "handleFocus", (e) => {
              var t, i;
              this.setState({ isFocused: !0 }),
                null === (t = (i = this.props).onFocus) ||
                  void 0 === t ||
                  t.call(i, e);
            }),
            v(this, "handleBlur", (e) => {
              var t, i;
              this.setState({ isFocused: !1 }),
                null === (t = (i = this.props).onBlur) ||
                  void 0 === t ||
                  t.call(i, e);
            }),
            v(this, "handleKeyDown", (e) => {
              e.which === h.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            v(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            v(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      v(g, "MenuPlacements", n);
    },
    435626: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return y;
          },
        });
      var n,
        r,
        s = i(200651),
        o = i(192379),
        a = i(120356),
        l = i.n(a),
        c = i(481060),
        u = i(100527),
        d = i(906732),
        h = i(1585),
        p = i(821982),
        _ = i(125988),
        v = i(267097),
        b = i(109213),
        g = i(626135),
        f = i(333867),
        m = i(963249),
        I = i(981631),
        x = i(217702),
        S = i(474936),
        E = i(388032),
        A = i(601674),
        C = i(476945),
        T = i(945182);
      function y(e) {
        let {
          analyticsLocations: t,
          transitionState: i,
          onClose: n,
          giftRecipient: r,
          analyticsObject: a,
        } = e;
        return (
          o.useEffect(() => {
            g.default.track(I.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
              ...a,
              location_stack: t,
            });
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(O, {}),
              (0, s.jsxs)(c.ModalRoot, {
                size: c.ModalSize.SMALL,
                transitionState: i,
                children: [
                  (0, s.jsxs)(c.ModalHeader, {
                    className: A.header,
                    separator: !1,
                    children: [
                      (0, s.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H4,
                        children: E.intl.string(E.t.YBGjsr),
                      }),
                      (0, s.jsx)(c.ModalCloseButton, {
                        onClick: () => {
                          g.default.track(I.rMx.MODAL_DISMISSED, {
                            type: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                            location_object: I.qAy.BUTTON_CTA,
                          }),
                            n();
                        },
                        className: A.cursorPointer,
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.ModalContent, {
                    className: A.modalContent,
                    children: (0, s.jsx)(R, {
                      analyticsLocations: t,
                      giftRecipient: r,
                      analyticsObject: a,
                      onClose: n,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      ((n = r || (r = {}))[(n.NITRO = 0)] = "NITRO"),
        (n[(n.NITRO_BASIC = 1)] = "NITRO_BASIC"),
        (n[(n.SHOP = 2)] = "SHOP");
      let O = () => ((0, v.Z)(), null);
      function R(e) {
        let { giftRecipient: t, analyticsObject: i, onClose: n } = e,
          { showBothNitroSkusInCategorySelect: r } = b.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
          ),
          { analyticsLocations: o } = (0, d.ZP)(u.Z.GIFT_CATEGORY_SELECT_MODAL),
          a = (e) => {
            e && n();
          },
          h = (e) => {
            let n = I.Qqv.NITRO_SKU_SELECTION;
            e === S.Si.TIER_2
              ? (n = I.Qqv.NITRO_STANDARD)
              : e === S.Si.TIER_0 && (n = I.Qqv.NITRO_BASIC),
              (0, m.Z)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: S.Wt.DM_CHANNEL,
                initialPlanId: null,
                analyticsLocations: o,
                subscriptionTier: e,
                analyticsObject: {
                  ...i,
                  section: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                  object: I.qAy.GIFT_CATEGORY_OPTION,
                  objectType: n,
                },
                onClose: a,
              });
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.Clickable, {
              onClick: () => h(r ? S.Si.TIER_2 : void 0),
              children: (0, s.jsxs)("div", {
                className: l()(A.categoryButton, A.nitroButton),
                children: [
                  (0, s.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: A.buttonText,
                    children: E.intl.string(E.t["lG6a5+"]),
                  }),
                  (0, s.jsx)(k, { imageType: 0 }),
                ],
              }),
            }),
            r &&
              (0, s.jsx)(c.Clickable, {
                onClick: () => h(S.Si.TIER_0),
                children: (0, s.jsxs)("div", {
                  className: l()(A.nitroBasicButton, A.categoryButton),
                  children: [
                    (0, s.jsx)(c.Text, {
                      variant: "display-sm",
                      color: "always-white",
                      className: A.buttonText,
                      children: E.intl.string(E.t["t9uG/v"]),
                    }),
                    (0, s.jsx)(k, { imageType: 1 }),
                  ],
                }),
              }),
            (0, s.jsx)(c.Clickable, {
              onClick: () => {
                (0, f.Z)({
                  isGift: !0,
                  giftingOrigin: S.Wt.DM_CHANNEL,
                  analyticsLocations: o,
                  analyticsObject: i,
                  giftRecipient: t,
                  onClose: a,
                });
              },
              children: (0, s.jsxs)("div", {
                className: l()(A.shopButton, A.categoryButton),
                children: [
                  (0, s.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: A.buttonText,
                    children: E.intl.string(E.t.gFlB9f),
                  }),
                  (0, s.jsx)(k, { imageType: 2 }),
                ],
              }),
            }),
          ],
        });
      }
      function k(e) {
        let { imageType: t } = e,
          { avatarPlaceholderSrc: i } = (0, _.Z)({
            size: (0, h.y9)(c.AvatarSizes.SIZE_80),
          }),
          n = (0, p.Z)(
            "a_c3cffc19e9784f7d0b005eecdf1b566e",
            c.AvatarSizes.SIZE_80,
            !1,
          );
        return 0 === t || 1 === t
          ? (0, s.jsx)("div", {
              className: A.wumpusImageContainer,
              children: (0, s.jsx)(c.Image, {
                src: 1 === t ? C : T,
                mediaLayoutType: x.hV.RESPONSIVE,
                width: 122,
                height: 110,
                zoomable: !1,
              }),
            })
          : 2 === t
            ? (0, s.jsx)("div", {
                className: A.shopImageContainer,
                children: (0, s.jsx)(c.Avatar, {
                  src: i,
                  avatarDecoration: n,
                  size: c.AvatarSizes.SIZE_80,
                  "aria-hidden": !0,
                }),
              })
            : void 0;
      }
    },
    93127: function (e, t, i) {
      i.d(t, {
        W: function () {
          return c;
        },
        _: function () {
          return u;
        },
      });
      var n = i(544891),
        r = i(570140),
        s = i(480294),
        o = i(814443),
        a = i(428598),
        l = i(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            n.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.shouldFetch() && s.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            n.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, i, n, r, s, o, a, l;
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
                          null !== (i = e.dm_rank) && void 0 !== i ? i : 0,
                        vcProbability:
                          null !== (n = e.vc_probability) && void 0 !== n
                            ? n
                            : 0,
                        vcRank:
                          null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (s = e.server_message_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        serverMessageRank:
                          null !== (o = e.server_message_rank) && void 0 !== o
                            ? o
                            : 0,
                        communicationProbability:
                          null !== (a = e.communication_probability) &&
                          void 0 !== a
                            ? a
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
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, i) {
      i.d(t, {
        K: function () {
          return n;
        },
      });
      let n = i(70956).Z.Millis.DAY;
    },
    428598: function (e, t, i) {
      let n;
      i(47120);
      var r,
        s = i(442837),
        o = i(570140),
        a = i(699516),
        l = i(496232);
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      let u = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        h = { ...d };
      function p() {
        n = new Map(
          h.userAffinities
            .filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class _ extends (r = s.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((h.userAffinities = e.userAffinities),
              (h.lastFetched = e.lastFetched),
              p()),
            this.syncWith([a.Z], p);
        }
        shouldFetch() {
          if (!u) return Date.now() - h.lastFetched > l.K;
        }
        isFetching() {
          return u;
        }
        getUserAffinities() {
          return h.userAffinities;
        }
        getUserAffinity(e) {
          return n.get(e);
        }
        getState() {
          return h;
        }
      }
      c(_, "displayName", "UserAffinitiesStoreV2"),
        c(_, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new _(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            u = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (h.lastFetched = Date.now()), (u = !1), (h.userAffinities = t), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            u = !1;
          },
          LOGOUT: function () {
            (h = { ...d }), (n = new Map()), (u = !1);
          },
        }));
    },
    590783: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return d;
        },
      }),
        i(789020);
      var n = i(913527),
        r = i.n(n),
        s = i(81825),
        o = i(630388),
        a = i(301766),
        l = i(474936);
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      let u = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class d extends s.Z {
        static createFromServer(e) {
          return new d({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? r()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? a.ZP.createFromServer(e.subscription_plan)
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
          return null != e && r()().isAfter(e);
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
          return !(0, o.yE)(this.flags, u.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, o.yE)(
            this.flags,
            u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
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
            c(this, "userId", void 0),
            c(this, "code", void 0),
            c(this, "skuId", void 0),
            c(this, "applicationId", void 0),
            c(this, "uses", void 0),
            c(this, "maxUses", void 0),
            c(this, "expiresAt", void 0),
            c(this, "redeemed", void 0),
            c(this, "storeListingId", void 0),
            c(this, "subscriptionPlanId", void 0),
            c(this, "subscriptionPlan", void 0),
            c(this, "revoked", void 0),
            c(this, "entitlementBranches", void 0),
            c(this, "flags", void 0),
            c(this, "subscriptionTrial", void 0),
            c(this, "promotion", void 0),
            c(this, "giftStyle", void 0),
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
    4912: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = i(200651);
      i(192379);
      var r = i(325767);
      function s(e) {
        let {
          width: t = 14,
          height: i = 14,
          color: s = "currentColor",
          foreground: o,
          ...a
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, r.Z)(a),
          width: t,
          height: i,
          viewBox: "0 0 14 14",
          children: (0, n.jsx)("path", {
            className: o,
            fill: s,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    841261: function (e, t, i) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    404934: function (e, t, i) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    601674: function (e, t, i) {
      e.exports = {
        categoryButton: "categoryButton_ce8be8",
        modalContent: "modalContent_ce8be8",
        header: "header_ce8be8",
        wumpusImageContainer: "wumpusImageContainer_ce8be8",
        shopImageContainer: "shopImageContainer_ce8be8",
        nitroButton: "nitroButton_ce8be8",
        nitroBasicButton: "nitroBasicButton_ce8be8",
        shopButton: "shopButton_ce8be8",
        cursorPointer: "cursorPointer_ce8be8",
        buttonText: "buttonText_ce8be8",
      };
    },
  },
]);
//# sourceMappingURL=b765665f348cd295e9a7.js.map
