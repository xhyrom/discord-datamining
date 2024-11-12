"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12524"],
  {
    269128: function (e, r, t) {
      var o = t(200651);
      t(192379);
      var n = t(120356),
        a = t.n(n),
        i = t(772848),
        s = t(841261);
      let l = (0, i.Z)();
      r.Z = (e) => {
        let { open: r, className: t, withHighlight: n = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(s.button, t, { [s.open]: r, [s.withHighlight]: n }),
          children: [
            n &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: l,
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
                  stroke: n ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: n ? "url(#".concat(l, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, r, t) {
      var o = t(200651),
        n = t(192379),
        a = t(481060),
        i = t(372900);
      r.Z = n.memo(function (e) {
        var r, t, s, l;
        let {
            user: c,
            size: d = a.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          h = n.useContext(i.Z);
        return (0, o.jsx)(a.Avatar, {
          src:
            ((r = c),
            (t = (0, a.getAvatarSize)(d)),
            (s = u),
            (l = h),
            r.getAvatarURL(l, t, s)),
          size: d,
          "aria-label": f ? void 0 : c.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    285888: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return C;
        },
        v: function () {
          return b;
        },
      }),
        t(47120);
      var o,
        n,
        a,
        i = t(200651),
        s = t(192379),
        l = t(120356),
        c = t.n(l),
        d = t(569619),
        u = t(481060),
        f = t(981631),
        p = t(388032),
        h = t(404934);
      function _(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      ((a = o || (o = {})).TOP = "top"), (a.BOTTOM = "bottom");
      let b = {
        container: (e, r) => {
          let { isDisabled: t } = r;
          return {
            ...e,
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, r) => {
          let { isDisabled: t, menuIsOpen: o } = r;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: o ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, r) => {
          let { isDisabled: t } = r;
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
        clearIndicator: (e, r) => {
          let { isDisabled: t } = r;
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
        dropdownIndicator: (e, r) => {
          let { isDisabled: t } = r;
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
        option: (e, r) => {
          let { isSelected: t, isFocused: o } = r;
          return {
            ...e,
            ...(t
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
      class C extends (n = s.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: r,
              selectClassName: t,
              error: o,
              valueRenderer: n,
              optionRenderer: a,
              multiValueRenderer: s,
              options: l,
              value: f,
              autofocus: _,
              disabled: C,
              clearable: v,
              searchable: m,
              styleOverrides: g,
              isMulti: F,
              placeholder: I,
              filterOption: S,
              closeMenuOnSelect: x = !0,
              ...A
            } = this.props,
            y = { ...A };
          null != _ && (y.autoFocus = _),
            null != C && (y.isDisabled = C),
            null != v && (y.isClearable = v),
            null != m && (y.isSearchable = m);
          let w = { IndicatorSeparator: () => null };
          null != a &&
            (w.Option = (e) =>
              (0, i.jsx)(d.wx.Option, { ...e, children: a(e.data) })),
            null != n &&
              (w.SingleValue = (e) =>
                (0, i.jsx)(d.wx.SingleValue, { ...e, children: n(e.data) })),
            null != s && (w.MultiValue = (e) => s(e.data));
          if (F && Array.isArray(f)) {
            let r = {};
            l.forEach((e) => {
              r[String(e.value)] = e;
            }),
              (e = f.map((e) => r[String(e)]));
          } else e = null != f ? l.find((e) => e.value === f) : null;
          return (0, i.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)("div", {
              className: c()(h.select, r, { [h.error]: null != o }),
              ref: this._containerRef,
              children: [
                (0, i.jsx)(d.ZP, {
                  ...y,
                  className: t,
                  ref: this._selectRef,
                  isMulti: F,
                  components: w,
                  options: l,
                  styles: null != g ? g : b,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: x,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != I ? I : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: S,
                }),
                null != o
                  ? (0, i.jsx)("div", {
                      className: h.errorMessage,
                      children: o,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_selectRef", s.createRef()),
            _(this, "_containerRef", s.createRef()),
            _(this, "state", { isFocused: !1, isOpen: !1 }),
            _(this, "handleFocus", (e) => {
              var r, t;
              this.setState({ isFocused: !0 }),
                null === (r = (t = this.props).onFocus) ||
                  void 0 === r ||
                  r.call(t, e);
            }),
            _(this, "handleBlur", (e) => {
              var r, t;
              this.setState({ isFocused: !1 }),
                null === (r = (t = this.props).onBlur) ||
                  void 0 === r ||
                  r.call(t, e);
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
      _(C, "MenuPlacements", o);
    },
    93127: function (e, r, t) {
      t.d(r, {
        W: function () {
          return c;
        },
        _: function () {
          return d;
        },
      });
      var o = t(544891),
        n = t(570140),
        a = t(480294),
        i = t(814443),
        s = t(428598),
        l = t(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return i.Z.needsRefresh()
          ? (n.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            o.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: r } = e;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: r,
                  });
                },
                () => {
                  n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && a.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            o.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: r } = e;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: r.user_affinities.map((e) => {
                      var r, t, o, n, a, i, s, l;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (r = e.dm_probability) && void 0 !== r
                            ? r
                            : 0,
                        dmRank:
                          null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                        vcProbability:
                          null !== (o = e.vc_probability) && void 0 !== o
                            ? o
                            : 0,
                        vcRank:
                          null !== (n = e.vc_rank) && void 0 !== n ? n : 0,
                        serverMessageProbability:
                          null !== (a = e.server_message_probability) &&
                          void 0 !== a
                            ? a
                            : 0,
                        serverMessageRank:
                          null !== (i = e.server_message_rank) && void 0 !== i
                            ? i
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
                  n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, r, t) {
      t.d(r, {
        K: function () {
          return o;
        },
      });
      let o = t(70956).Z.Millis.DAY;
    },
    428598: function (e, r, t) {
      let o;
      t(47120);
      var n,
        a = t(442837),
        i = t(570140),
        s = t(699516),
        l = t(496232);
      function c(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      let d = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...u };
      function p() {
        o = new Map(
          f.userAffinities
            .filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (n = a.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              p()),
            this.syncWith([s.Z], p);
        }
        shouldFetch() {
          if (!d) return Date.now() - f.lastFetched > l.K;
        }
        isFetching() {
          return d;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinity(e) {
          return o.get(e);
        }
        getState() {
          return f;
        }
      }
      c(h, "displayName", "UserAffinitiesStoreV2"),
        c(h, "persistKey", "UserAffinitiesStoreV2"),
        (r.Z = new h(i.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            d = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: r } = e;
            (f.lastFetched = Date.now()), (d = !1), (f.userAffinities = r), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            d = !1;
          },
          LOGOUT: function () {
            (f = { ...u }), (o = new Map()), (d = !1);
          },
        }));
    },
    4912: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = t(200651);
      t(192379);
      var n = t(325767);
      function a(e) {
        let {
          width: r = 14,
          height: t = 14,
          color: a = "currentColor",
          foreground: i,
          ...s
        } = e;
        return (0, o.jsx)("svg", {
          ...(0, n.Z)(s),
          width: r,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, o.jsx)("path", {
            className: i,
            fill: a,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    841261: function (e, r, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    404934: function (e, r, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    744078: function (e, r, t) {
      e.exports = { halloweenFooter: "halloweenFooter_c1dc14" };
    },
    577581: function (e, r, t) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
        nitroweenFooterBanner: "nitroweenFooterBanner_d9d258",
      };
    },
    885032: function (e, r, t) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    117787: function (e, r, t) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
      };
    },
    92783: function (e, r, t) {
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
    896243: function (e, r, t) {
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
    103581: function (e, r, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    279521: function (e, r, t) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
      };
    },
    377628: function (e, r, t) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    977885: function (e, r, t) {
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
//# sourceMappingURL=a1d49ca39d7d62ef581b.js.map
