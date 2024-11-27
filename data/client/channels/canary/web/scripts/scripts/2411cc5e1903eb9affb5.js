"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47193"],
  {
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var o = n(120356),
        r = n.n(o),
        a = n(772848),
        s = n(363969);
      let d = (0, a.Z)();
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
                  id: d,
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
                  stroke: o ? "url(#".concat(d, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: o ? "url(#".concat(d, ")") : "currentColor",
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
        o = n(192379),
        r = n(481060),
        a = n(372900);
      t.Z = o.memo(function (e) {
        var t, n, s, d;
        let {
            user: c,
            size: l = r.AvatarSizes.SIZE_32,
            animate: f = !1,
            "aria-hidden": u = !1,
            ...p
          } = e,
          _ = o.useContext(a.Z);
        return (0, i.jsx)(r.Avatar, {
          src:
            ((t = c),
            (n = (0, r.getAvatarSize)(l)),
            (s = f),
            (d = _),
            t.getAvatarURL(d, n, s)),
          size: l,
          "aria-label": u ? void 0 : c.username,
          "aria-hidden": u,
          ...p,
        });
      });
    },
    179118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(392711),
        d = n.n(s),
        c = n(442837),
        l = n(481060),
        f = n(37234),
        u = n(194359),
        p = n(700582),
        _ = n(925329),
        b = n(479446),
        m = n(522489),
        g = n(857039),
        h = n(93127),
        C = n(814443),
        x = n(590783),
        I = n(699516),
        S = n(246946),
        v = n(594174),
        y = n(572004),
        k = n(669079),
        B = n(74538),
        A = n(51144),
        T = n(563132),
        E = n(981631),
        L = n(474936),
        F = n(388032),
        R = n(431852);
      function N(e) {
        let {
            giftCode: t,
            application: n,
            sku: r,
            subscriptionPlan: s,
            selectedGiftStyle: d,
            onClose: f,
            hasSentMessage: u,
            giftRecipient: b,
            giftMessageError: h,
            isSendingMessage: C,
            halloweenDecoPurchase: I,
          } = e,
          [v, N] = o.useState(l.CopyInput.Modes.DEFAULT),
          P = (0, c.e7)([S.Z], () => S.Z.enabled),
          j = u || (null != d && null != b),
          M = (null == r ? void 0 : r.productLine) === E.POd.COLLECTIBLES,
          { selectedPlan: w } = (0, T.usePaymentContext)(),
          U =
            (0, g.Z)({ location: "Gift purchase confirm" }) &&
            (null == w ? void 0 : w.skuId) === L.Si.TIER_2 &&
            null != I,
          Z = () => (null != s ? s.skuId : null != r ? r.id : null),
          G = () => {
            let e;
            let t = null != d && L.kJ.includes(d);
            if (null != h) return F.intl.string(F.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === L.rV.MONTH) {
              if (U) return F.intl.string(F.t.IelGKy);
              e = j ? (t ? F.t.ECjJJy : F.t["4ZJ+7e"]) : F.t["P+z55e"];
            } else {
              if (U) return F.intl.string(F.t.gausub);
              e = j ? (t ? F.t.jeiz2N : F.t.p0pZXF) : F.t.bXqk3t;
            }
            return F.intl.format(e, {
              skuName: (0, B.aq)(s.id),
              intervalCount: s.intervalCount,
            });
          },
          H = (e, t) => {
            null != r && (0, k.dM)(new x.Z({ code: t, maxUses: 1 }), r);
            try {
              (0, y.JG)(e), N(l.CopyInput.Modes.SUCCESS);
            } catch (e) {
              N(l.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              N(l.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          D = () => {
            let e;
            if (null == t) return null;
            switch (v) {
              case l.CopyInput.Modes.SUCCESS:
                e = F.intl.string(F.t.XVvPjY);
                break;
              case l.CopyInput.Modes.ERROR:
                e = F.intl.string(F.t.i4GM3N);
                break;
              default:
                e = F.intl.string(F.t.OpuAlJ);
            }
            return (0, i.jsxs)("div", {
              className: R.giftCodeSection,
              children: [
                (0, i.jsx)(l.FormTitle, {
                  children: F.intl.string(F.t["/dG4ND"]),
                }),
                null != t &&
                  (0, i.jsx)(l.CopyInput, {
                    hideMessage: P ? F.intl.string(F.t["0RLn4+"]) : null,
                    value: (0, k.Nz)(t),
                    mode: v,
                    text: e,
                    onCopy: (e) => H(e, t),
                    supportsCopy: y.wS,
                    className: R.__invalid_copyInput,
                    buttonColor: l.ButtonColors.LINK,
                    buttonLook: l.ButtonLooks.LINK,
                  }),
                (0, i.jsx)("div", {
                  className: R.subtext,
                  children: F.intl.string(F.t.QWKUpq),
                }),
              ],
            });
          };
        return C
          ? (0, i.jsxs)("div", {
              className: R.confirmation,
              children: [
                null != n
                  ? (0, i.jsx)(_.Z, {
                      game: n,
                      className: R.__invalid_icon,
                      size: _.Z.Sizes.LARGE,
                      skuId: Z(),
                    })
                  : null,
                (0, i.jsx)(l.Spinner, {
                  type: l.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              className: R.confirmation,
              children: [
                null != n
                  ? (0, i.jsx)(_.Z, {
                      game: n,
                      className: R.__invalid_icon,
                      size: _.Z.Sizes.LARGE,
                      skuId: Z(),
                    })
                  : null,
                (0, i.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  className: a()({
                    [R.header]: null == d && !M,
                    [R.headerCustomGifting]: null != d && !M,
                  }),
                  children:
                    null != b || (u && null == h)
                      ? F.intl.string(F.t.zOmK9P)
                      : null != h
                        ? F.intl.string(F.t.d1lrmZ)
                        : F.intl.string(F.t["/s1xR0"]),
                }),
                (u && null != b && null == h) || j
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(p.Z, {
                          user: b,
                          className: R.giftRecipient,
                          size: l.AvatarSizes.SIZE_80,
                        }),
                        (0, i.jsx)(l.Heading, {
                          className: R.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: A.ZP.getName(b),
                        }),
                        (0, i.jsxs)("div", {
                          className: R.giftRecipientTag,
                          children: [" ", A.ZP.getUserTag(b)],
                        }),
                        (0, i.jsx)("div", {
                          className: R.giftSentMessage,
                          children: G(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, k.MY)(b, M),
                        { removeGiftRecipientUI: n } = m.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== k.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", {
                            className: R.blurb,
                            children: G(),
                          }),
                          !n &&
                            null == h &&
                            (0, i.jsx)(O, { giftCode: t, onClose: f }),
                          (0, i.jsx)("div", { className: R.divider }),
                          D(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let O = (e) => {
        let { giftCode: t, onClose: n } = e;
        o.useEffect(() => {
          u.Z.fetchRelationships(), (0, h.W)();
        }, []);
        let [r, a] = o.useState(),
          [s, _] = o.useState(!1),
          [m, g] = o.useState(!1),
          { userAffinities: x, isLoading: S } = (0, c.cj)([C.Z], () => ({
            userAffinities: C.Z.getUserAffinitiesUserIds(),
            isLoading: C.Z.getFetching(),
          })),
          y = Array.from(x.values()),
          k = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
          B = d().difference(k, y),
          T = [...y, ...B],
          E = (0, c.e7)(
            [v.default],
            () => v.default.filter((e) => T.includes(e.id) && !e.bot),
            [T],
          );
        if (null == E || 0 === E.length) return null;
        let L = d().sortBy(E, (e) => T.indexOf(e.id));
        return (0, i.jsxs)("div", {
          className: R.giftRecipientSection,
          children: [
            (0, i.jsx)(l.FormTitle, { children: F.intl.string(F.t.MJw05e) }),
            (0, i.jsxs)("div", {
              className: R.giftRecipient,
              children: [
                (0, i.jsx)(l.SearchableSelect, {
                  placeholder: F.intl.string(F.t.J019jY),
                  wrapperClassName: R.giftRecipientInputWrapper,
                  className: s ? R.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, i.jsx)(p.Z, {
                          user: e.value,
                          size: l.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    S
                      ? (0, i.jsx)(l.Spinner, {
                          type: l.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: r,
                  onChange: (e) => {
                    a(e), _(!1);
                  },
                  options: L.map((e) => ({
                    value: e,
                    label: "".concat(A.ZP.getUserTag(e)),
                  })),
                }),
                (0, i.jsx)(l.Button, {
                  disabled: null == r,
                  submitting: m,
                  className: R.sendToRecipientButton,
                  onClick: () => {
                    g(!0),
                      (0, b.YD)(r, t)
                        .then(() => {
                          n(), (0, f.Ou)();
                        })
                        .catch(() => {
                          _(!0), g(!1);
                        });
                  },
                  children: F.intl.string(F.t["+EgwQk"]),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: s ? R.subtextError : R.subtext,
              children: s
                ? F.intl.string(F.t.jo5Vbm)
                : F.intl.string(F.t["8/N3v7"]),
            }),
          ],
        });
      };
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return c;
        },
        _: function () {
          return l;
        },
      });
      var i = n(544891),
        o = n(570140),
        r = n(480294),
        a = n(814443),
        s = n(428598),
        d = n(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: d.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
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
      function l() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && r.Z.hasConsented(d.pjP.PERSONALIZATION)
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: d.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, o, r, a, s, d;
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
                          null !== (d = e.communication_rank) && void 0 !== d
                            ? d
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
        d = n(496232);
      function c(e, t, n) {
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
      let l = !1,
        f = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        u = { ...f };
      function p() {
        i = new Map(
          u.userAffinities
            .filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class _ extends (o = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((u.userAffinities = e.userAffinities),
              (u.lastFetched = e.lastFetched),
              p()),
            this.syncWith([s.Z], p);
        }
        shouldFetch() {
          if (!l) return Date.now() - u.lastFetched > d.K;
        }
        isFetching() {
          return l;
        }
        getUserAffinities() {
          return u.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return u;
        }
      }
      c(_, "displayName", "UserAffinitiesStoreV2"),
        c(_, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new _(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            l = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (u.lastFetched = Date.now()), (l = !1), (u.userAffinities = t), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            l = !1;
          },
          LOGOUT: function () {
            (u = { ...f }), (i = new Map()), (l = !1);
          },
        }));
    },
    590783: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(789020);
      var i = n(913527),
        o = n.n(i),
        r = n(81825),
        a = n(630388),
        s = n(301766),
        d = n(474936);
      function c(e, t, n) {
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
      let l = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class f extends r.Z {
        static createFromServer(e) {
          return new f({
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
          return (this.isSubscription && d.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, a.yE)(this.flags, l.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, a.yE)(
            this.flags,
            l.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
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
    431852: function (e, t, n) {
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
    956247: function (e, t, n) {
      e.exports = { halloweenFooter: "halloweenFooter_c1dc14" };
    },
    293803: function (e, t, n) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
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
    659915: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    467474: function (e, t, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    221309: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    374172: function (e, t, n) {
      e.exports = { back: "back_fd80e5" };
    },
    950304: function (e, t, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    135970: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
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
    242582: function (e, t, n) {
      e.exports = {
        planSelectSeparatorUpper: "planSelectSeparatorUpper_d9d258",
        planSelectSeparatorLower: "planSelectSeparatorLower_d9d258",
        nitroweenFooterBanner: "nitroweenFooterBanner_d9d258",
      };
    },
    82227: function (e, t, n) {
      e.exports = {
        legacyPricingNotice: "legacyPricingNotice_f92df2",
        skuSelectModalHeader: "skuSelectModalHeader_f92df2",
        skuSelectModalContent: "skuSelectModalContent_f92df2",
        modalPadding: "modalPadding_f92df2",
      };
    },
    475536: function (e, t, n) {
      e.exports = {
        whatYouLoseButtonContainer: "whatYouLoseButtonContainer_a3f464",
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
    534293: function (e, t, n) {
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
    280099: function (e, t, n) {
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
    779655: function (e, t, n) {
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
    402572: function (e, t, n) {
      e.exports = {
        body: "body_f4a859",
        title: "title_f4a859",
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
    99182: function (e, t, n) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    684315: function (e, t, n) {
      e.exports = {
        attributionBannerContainer: "attributionBannerContainer_d06fdd",
        avatarContainer: "avatarContainer_d06fdd",
        bannerHeader: "bannerHeader_d06fdd",
        bannerIcon: "bannerIcon_d06fdd",
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
    101098: function (e, t, n) {
      e.exports = {
        tier2MarketingCard: "tier2MarketingCard_eabbe0",
        tier0MarketingCard: "tier0MarketingCard_eabbe0",
      };
    },
    622694: function (e, t, n) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    307862: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
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
    76962: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    134384: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    641479: function (e, t, n) {
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
    630480: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
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
//# sourceMappingURL=2411cc5e1903eb9affb5.js.map
