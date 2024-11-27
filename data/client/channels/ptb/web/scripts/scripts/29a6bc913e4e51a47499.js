"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49232"],
  {
    269128: function (t, e, i) {
      var s = i(200651);
      i(192379);
      var n = i(120356),
        r = i.n(n),
        o = i(772848),
        a = i(363969);
      let l = (0, o.Z)();
      e.Z = (t) => {
        let { open: e, className: i, withHighlight: n = !1 } = t;
        return (0, s.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(a.button, i, { [a.open]: e, [a.withHighlight]: n }),
          children: [
            n &&
              (0, s.jsx)("defs", {
                children: (0, s.jsxs)("linearGradient", {
                  id: l,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, s.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, s.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, s.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, s.jsx)("path", {
                  stroke: n ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
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
    700582: function (t, e, i) {
      var s = i(200651),
        n = i(192379),
        r = i(481060),
        o = i(372900);
      e.Z = n.memo(function (t) {
        var e, i, a, l;
        let {
            user: c,
            size: u = r.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": h = !1,
            ..._
          } = t,
          p = n.useContext(o.Z);
        return (0, s.jsx)(r.Avatar, {
          src:
            ((e = c),
            (i = (0, r.getAvatarSize)(u)),
            (a = d),
            (l = p),
            e.getAvatarURL(l, i, a)),
          size: u,
          "aria-label": h ? void 0 : c.username,
          "aria-hidden": h,
          ..._,
        });
      });
    },
    435626: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return L;
          },
        });
      var s,
        n,
        r = i(200651),
        o = i(192379),
        a = i(120356),
        l = i.n(a),
        c = i(481060),
        u = i(100527),
        d = i(906732),
        h = i(1585),
        _ = i(821982),
        p = i(125988),
        I = i(228624),
        m = i(267097),
        f = i(109213),
        g = i(626135),
        b = i(333867),
        S = i(963249),
        E = i(981631),
        v = i(217702),
        x = i(474936),
        A = i(388032),
        T = i(521050),
        C = i(476945),
        y = i(945182);
      function L(t) {
        let {
          analyticsLocations: e,
          transitionState: i,
          onClose: s,
          giftRecipient: n,
          analyticsObject: a,
        } = t;
        return (
          o.useEffect(() => {
            g.default.track(E.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
              location: a,
              location_stack: e,
            });
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(R, {}),
              (0, r.jsxs)(c.ModalRoot, {
                size: c.ModalSize.DYNAMIC,
                transitionState: i,
                className: T.modalRoot,
                children: [
                  (0, r.jsxs)(c.ModalHeader, {
                    className: T.header,
                    separator: !1,
                    children: [
                      (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H4,
                        children: A.intl.string(A.t.YBGjsr),
                      }),
                      (0, r.jsx)(c.ModalCloseButton, {
                        onClick: () => {
                          g.default.track(E.rMx.MODAL_DISMISSED, {
                            type: E.jXE.GIFT_CATEGORY_SELECT_MODAL,
                            location_object: E.qAy.BUTTON_CTA,
                          }),
                            s();
                        },
                        className: T.cursorPointer,
                      }),
                    ],
                  }),
                  (0, r.jsx)(c.ModalContent, {
                    className: T.modalContent,
                    children: (0, r.jsx)(O, {
                      analyticsLocations: e,
                      giftRecipient: n,
                      analyticsObject: a,
                      onClose: s,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      ((s = n || (n = {}))[(s.NITRO = 0)] = "NITRO"),
        (s[(s.NITRO_BASIC = 1)] = "NITRO_BASIC"),
        (s[(s.SHOP = 2)] = "SHOP");
      let R = () => ((0, m.Z)(), null);
      function O(t) {
        let { giftRecipient: e, analyticsObject: i, onClose: s } = t,
          { showBothNitroSkusInCategorySelect: n } = f.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
          ),
          o = (0, I.hv)("CategoryButtons"),
          { analyticsLocations: a } = (0, d.ZP)(u.Z.GIFT_CATEGORY_SELECT_MODAL),
          h = (t) => {
            t && s();
          },
          _ = (t) => {
            let s = E.Qqv.NITRO_SKU_SELECTION;
            t === x.Si.TIER_2
              ? (s = E.Qqv.NITRO_STANDARD)
              : t === x.Si.TIER_0 && (s = E.Qqv.NITRO_BASIC),
              (0, S.Z)({
                isGift: !0,
                giftRecipient: e,
                giftingOrigin: x.Wt.DM_CHANNEL,
                initialPlanId: null,
                analyticsLocations: a,
                subscriptionTier: t,
                analyticsObject: {
                  ...i,
                  section: E.jXE.GIFT_CATEGORY_SELECT_MODAL,
                  object: E.qAy.GIFT_CATEGORY_OPTION,
                  objectType: s,
                },
                onClose: h,
              });
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(c.Clickable, {
              onClick: () => _(n ? x.Si.TIER_2 : void 0),
              children: (0, r.jsxs)("div", {
                className: l()(T.categoryButton, T.nitroButton),
                children: [
                  (0, r.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: T.buttonText,
                    children: A.intl.string(A.t["lG6a5+"]),
                  }),
                  (0, r.jsx)(N, { imageType: 0 }),
                ],
              }),
            }),
            n &&
              (0, r.jsx)(c.Clickable, {
                onClick: () => _(x.Si.TIER_0),
                children: (0, r.jsxs)("div", {
                  className: l()(T.nitroBasicButton, T.categoryButton),
                  children: [
                    (0, r.jsx)(c.Text, {
                      variant: "display-sm",
                      color: "always-white",
                      className: T.buttonText,
                      children: A.intl.string(A.t["t9uG/v"]),
                    }),
                    (0, r.jsx)(N, { imageType: 1 }),
                  ],
                }),
              }),
            (0, r.jsx)(c.Clickable, {
              onClick: () => {
                (0, b.Z)({
                  isGift: !0,
                  giftingOrigin: x.Wt.DM_CHANNEL,
                  analyticsLocations: a,
                  analyticsObject: i,
                  giftRecipient: e,
                  onClose: h,
                  variantsReturnStyle: o,
                });
              },
              children: (0, r.jsxs)("div", {
                className: l()(T.shopButton, T.categoryButton),
                children: [
                  (0, r.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: T.buttonText,
                    children: A.intl.string(A.t.gFlB9f),
                  }),
                  (0, r.jsx)(N, { imageType: 2 }),
                ],
              }),
            }),
          ],
        });
      }
      function N(t) {
        let { imageType: e } = t,
          { avatarPlaceholderSrc: i } = (0, p.Z)({
            size: (0, h.y9)(c.AvatarSizes.SIZE_80),
          }),
          s = (0, _.Z)(
            "a_c3cffc19e9784f7d0b005eecdf1b566e",
            c.AvatarSizes.SIZE_80,
            !1,
          );
        return 0 === e || 1 === e
          ? (0, r.jsx)("div", {
              className: T.wumpusImageContainer,
              children: (0, r.jsx)(c.Image, {
                src: 1 === e ? C : y,
                mediaLayoutType: v.hV.RESPONSIVE,
                width: 122,
                height: 110,
                zoomable: !1,
              }),
            })
          : 2 === e
            ? (0, r.jsx)("div", {
                className: T.shopImageContainer,
                children: (0, r.jsx)(c.Avatar, {
                  src: i,
                  avatarDecoration: s,
                  size: c.AvatarSizes.SIZE_80,
                  "aria-hidden": !0,
                }),
              })
            : void 0;
      }
    },
    93127: function (t, e, i) {
      i.d(e, {
        W: function () {
          return c;
        },
        _: function () {
          return u;
        },
      });
      var s = i(544891),
        n = i(570140),
        r = i(480294),
        o = i(814443),
        a = i(428598),
        l = i(981631);
      function c() {
        let t =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (n.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            s.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: t ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (t) => {
                  let { body: e } = t;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: e,
                  });
                },
                () => {
                  n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function u() {
        let t =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.shouldFetch() && r.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (n.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            s.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: t ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (t) => {
                  let { body: e } = t;
                  n.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: e.user_affinities.map((t) => {
                      var e, i, s, n, r, o, a, l;
                      return {
                        otherUserId: t.other_user_id,
                        userSegment: t.user_segment,
                        otherUserSegment: t.other_user_segment,
                        isFriend: t.is_friend,
                        dmProbability:
                          null !== (e = t.dm_probability) && void 0 !== e
                            ? e
                            : 0,
                        dmRank:
                          null !== (i = t.dm_rank) && void 0 !== i ? i : 0,
                        vcProbability:
                          null !== (s = t.vc_probability) && void 0 !== s
                            ? s
                            : 0,
                        vcRank:
                          null !== (n = t.vc_rank) && void 0 !== n ? n : 0,
                        serverMessageProbability:
                          null !== (r = t.server_message_probability) &&
                          void 0 !== r
                            ? r
                            : 0,
                        serverMessageRank:
                          null !== (o = t.server_message_rank) && void 0 !== o
                            ? o
                            : 0,
                        communicationProbability:
                          null !== (a = t.communication_probability) &&
                          void 0 !== a
                            ? a
                            : 0,
                        communicationRank:
                          null !== (l = t.communication_rank) && void 0 !== l
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
    496232: function (t, e, i) {
      i.d(e, {
        K: function () {
          return s;
        },
      });
      let s = i(70956).Z.Millis.DAY;
    },
    428598: function (t, e, i) {
      let s;
      i(47120);
      var n,
        r = i(442837),
        o = i(570140),
        a = i(699516),
        l = i(496232);
      function c(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      let u = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        h = { ...d };
      function _() {
        s = new Map(
          h.userAffinities
            .filter((t) => !a.Z.isBlockedOrIgnored(t.otherUserId))
            .map((t) => [t.otherUserId, t]),
        );
      }
      class p extends (n = r.ZP.PersistedStore) {
        initialize(t) {
          this.waitFor(a.Z),
            null != t &&
              ((h.userAffinities = t.userAffinities),
              (h.lastFetched = t.lastFetched),
              _()),
            this.syncWith([a.Z], _);
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
        getUserAffinity(t) {
          return s.get(t);
        }
        getState() {
          return h;
        }
      }
      c(p, "displayName", "UserAffinitiesStoreV2"),
        c(p, "persistKey", "UserAffinitiesStoreV2"),
        (e.Z = new p(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            u = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (t) {
            let { affineUsers: e } = t;
            (h.lastFetched = Date.now()), (u = !1), (h.userAffinities = e), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            u = !1;
          },
          LOGOUT: function () {
            (h = { ...d }), (s = new Map()), (u = !1);
          },
        }));
    },
    590783: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return d;
        },
      }),
        i(789020);
      var s = i(913527),
        n = i.n(s),
        r = i(81825),
        o = i(630388),
        a = i(301766),
        l = i(474936);
      function c(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      let u = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class d extends r.Z {
        static createFromServer(t) {
          return new d({
            userId: null != t.user ? t.user.id : null,
            code: t.code,
            skuId: t.sku_id,
            applicationId: t.application_id,
            uses: t.uses,
            maxUses: t.max_uses,
            storeListingId: null != t.store_listing ? t.store_listing.id : null,
            expiresAt: null != t.expires_at ? n()(t.expires_at) : null,
            redeemed: t.redeemed,
            subscriptionPlanId:
              null != t.subscription_plan
                ? t.subscription_plan.id
                : t.subscription_plan_id,
            subscriptionPlan:
              null != t.subscription_plan
                ? a.ZP.createFromServer(t.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != t.entitlement_branches ? t.entitlement_branches : null,
            flags: null != t.flags ? t.flags : 0,
            giftStyle: t.gift_style,
            subscriptionTrial:
              null != t.subscription_trial
                ? {
                    id: t.subscription_trial.id,
                    interval: t.subscription_trial.interval,
                    intervalCount: t.subscription_trial.interval_count,
                    skuId: t.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != t.promotion
                ? {
                    id: t.promotion.id,
                    startDate: t.promotion.start_date,
                    endDate: t.promotion.end_date,
                    inboundHeaderText: t.promotion.inbound_header_text,
                    inboundBodyText: t.promotion.inbound_body_text,
                    inboundHelpCenterLink: t.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let t = this.expiresAt;
          return null != t && n()().isAfter(t);
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
        constructor(t) {
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
            (this.userId = t.userId),
            (this.code = t.code),
            (this.skuId = t.skuId),
            (this.applicationId = t.applicationId),
            (this.uses = t.uses),
            (this.maxUses = t.maxUses),
            (this.expiresAt = t.expiresAt),
            (this.redeemed = t.redeemed),
            (this.storeListingId = t.storeListingId),
            (this.subscriptionPlanId = t.subscriptionPlanId),
            (this.subscriptionPlan = t.subscriptionPlan),
            (this.revoked = t.revoked),
            (this.entitlementBranches = t.entitlementBranches),
            (this.flags = t.flags),
            (this.subscriptionTrial = t.subscriptionTrial),
            (this.promotion = t.promotion),
            (this.giftStyle = t.giftStyle);
        }
      }
    },
    4912: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var s = i(200651);
      i(192379);
      var n = i(325767);
      function r(t) {
        let {
          width: e = 14,
          height: i = 14,
          color: r = "currentColor",
          foreground: o,
          ...a
        } = t;
        return (0, s.jsx)("svg", {
          ...(0, n.Z)(a),
          width: e,
          height: i,
          viewBox: "0 0 14 14",
          children: (0, s.jsx)("path", {
            className: o,
            fill: r,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    363969: function (t, e, i) {
      t.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    521050: function (t, e, i) {
      t.exports = {
        categoryButton: "categoryButton_ce8be8",
        modalRoot: "modalRoot_ce8be8",
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
//# sourceMappingURL=29a6bc913e4e51a47499.js.map
