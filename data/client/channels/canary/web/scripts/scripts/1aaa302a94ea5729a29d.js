"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87446"],
  {
    561623: function (t, e, n) {
      n.r(e), n(47120), n(411104);
      var r = n(200651),
        o = n(192379),
        i = n(442837),
        a = n(780384),
        l = n(481060),
        s = n(366939),
        u = n(911969),
        c = n(410030),
        d = n(100527),
        f = n(906732),
        m = n(583046),
        _ = n(963249),
        C = n(853872),
        p = n(509545),
        h = n(626135),
        I = n(74538),
        T = n(937615),
        b = n(212895),
        N = n(296848),
        g = n(374649),
        E = n(807163),
        x = n(798769),
        M = n(317269),
        y = n(474936),
        P = n(981631),
        v = n(388032),
        S = n(103112);
      e.default = (t) => {
        var e, n, R, U;
        let {
            daysLeft: k,
            premiumType: A,
            premiumSubscription: L,
            analyticsSource: Z,
            ...j
          } = t,
          F = (0, c.ZP)(),
          [O, w] = o.useState(!1),
          { analyticsLocations: B } = (0, f.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
          Y = (0, i.e7)(
            [C.Z],
            () =>
              (null == L ? void 0 : L.paymentSourceId) != null
                ? C.Z.getPaymentSource(L.paymentSourceId)
                : null,
            [L],
          ),
          X = L.items[0].planId,
          H = (0, I.Wz)(y.GP[X].skuId),
          { priceOptions: D } = (0, m.Z)({
            activeSubscription: null,
            skuIDs: [H],
            paymentSourceId: null == L ? void 0 : L.paymentSourceId,
            isGift: !1,
          }),
          [G] = (0, g.ED)({
            subscriptionId: L.id,
            items: [{ planId: X, quantity: 1 }],
            renewal: !0,
            paymentSourceId: null == L ? void 0 : L.paymentSourceId,
            currency: D.currency,
            analyticsLocations: (0, f.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL,
          }),
          W = (0, i.e7)([p.Z], () => (0, N.oE)(X), [X]),
          K = (0, i.e7)([p.Z], () => p.Z.isFetchingForSKU(H)),
          Q =
            null == G
              ? void 0
              : null === (U = G.invoiceItems) || void 0 === U
                ? void 0
                : null === (R = U.find((t) => t.subscriptionPlanId === X)) ||
                    void 0 === R
                  ? void 0
                  : null === (n = R.discounts) || void 0 === n
                    ? void 0
                    : null ===
                          (e = n.find(
                            (t) => t.type === u.eW.SUBSCRIPTION_PLAN,
                          )) || void 0 === e
                      ? void 0
                      : e.amount,
          V = null != W ? (0, I.aS)(W.id, !1, !1, D) : null,
          z =
            null != V && null != Q
              ? (0, T.T4)(V.amount - (null != Q ? Q : 0), V.currency)
              : null,
          { intervalType: q, intervalCount: J } = I.ZP.getInterval(X),
          $ = A === y.p9.TIER_1,
          tt = null != V ? (0, T.T4)(V.amount, V.currency) : null;
        return (
          o.useEffect(() => {
            h.default.track(P.rMx.OPEN_MODAL, {
              type: "Premium Uncancel Winback",
              source: Z,
            });
          }, [Z]),
          (0, r.jsx)(l.ModalRoot, {
            ...j,
            className: S.modal,
            children: O
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(x.Z, { premiumType: A, onClose: j.onClose }),
                    (0, r.jsx)(M.ZP, {
                      planId: X,
                      onClose: j.onClose,
                      paymentSourceType: null == Y ? void 0 : Y.type,
                    }),
                  ],
                })
              : (0, r.jsx)(E.Z, {
                  premiumType: A,
                  titleText: $
                    ? v.intl.formatToPlainString(v.t.Sngnzs, { daysLeft: k })
                    : v.intl.formatToPlainString(v.t.tdvIlZ, { daysLeft: k }),
                  subtitleText: $
                    ? v.intl.format(v.t["6Su2XV"], {})
                    : v.intl.format(v.t["lE+P8f"], {}),
                  footer: (0, r.jsxs)("div", {
                    children: [
                      null !== tt
                        ? (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: (function (t) {
                              switch (q) {
                                case y.rV.YEAR:
                                  return $
                                    ? v.intl.format(v.t.O7JRzc, { price: t })
                                    : v.intl.format(v.t["0y5kAA"], {
                                        price: t,
                                      });
                                case y.rV.MONTH:
                                  if (null != z)
                                    return v.intl.format(v.t["1/ucvr"], {
                                      discountPrice: z,
                                      defaultPrice: t,
                                    });
                                  if ($)
                                    return v.intl.format(v.t.rbwRlZ, {
                                      price: t,
                                    });
                                  if (1 === J)
                                    return v.intl.format(v.t.C9oRCw, {
                                      price: t,
                                    });
                                  else
                                    return v.intl.format(v.t.TmmTgo, {
                                      price: t,
                                      intervalCount: J,
                                    });
                                default:
                                  throw Error(
                                    "Unknown interval type ".concat(q),
                                  );
                              }
                            })(tt),
                          })
                        : (0, r.jsx)(l.Spinner, {
                            type: l.SpinnerTypes.SPINNING_CIRCLE,
                          }),
                      (0, r.jsxs)("div", {
                        className: S.footer,
                        children: [
                          (0, r.jsx)(l.Button, {
                            disabled: K,
                            onClick: () => {
                              if (null != L) {
                                let t = (0, b.tD)(
                                  X,
                                  L.currency,
                                  null == Y ? void 0 : Y.id,
                                );
                                null != Y && Y.id === L.paymentSourceId && t
                                  ? (s.O5(L, B, P.Sbl.UNCANCEL_WINBACK_MODAL),
                                    w(!0))
                                  : (j.onClose(),
                                    (0, _.Z)({
                                      initialPlanId: X,
                                      analyticsLocations: B,
                                      analyticsLocation:
                                        P.Sbl.UNCANCEL_WINBACK_MODAL,
                                    }));
                              }
                            },
                            children: v.intl.string(v.t["2+luBg"]),
                          }),
                          (0, r.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: (0, a.wj)(F)
                              ? l.Button.Colors.WHITE
                              : l.Button.Colors.PRIMARY,
                            onClick: j.onClose,
                            children: v.intl.string(v.t.XDpS4O),
                          }),
                        ],
                      }),
                    ],
                  }),
                  onClose: j.onClose,
                }),
          })
        );
      };
    },
    317269: function (t, e, n) {
      n.d(e, {
        TB: function () {
          return E;
        },
        VY: function () {
          return x;
        },
        ZP: function () {
          return g;
        },
      }),
        n(47120),
        n(411104);
      var r = n(200651),
        o = n(192379),
        i = n(512722),
        a = n.n(i),
        l = n(442837),
        s = n(481060),
        u = n(16084),
        c = n(987209),
        d = n(179118),
        f = n(912788),
        m = n(509545),
        _ = n(55563),
        C = n(74538),
        p = n(741245),
        h = n(474936),
        I = n(981631),
        T = n(388032),
        b = n(977885);
      function N(t) {
        var e, n;
        let o,
          {
            planId: i,
            startingPremiumSubscriptionPlanId: s,
            paymentSourceType: u,
          } = t,
          [c, d] = (0, l.Wu)([m.Z], () => [m.Z.get(s), m.Z.get(i)]);
        if (
          (a()(null != c && null != d, "Missing startingPlan or newPlan"),
          (e = s),
          (n = i),
          h.Y1.indexOf(e) < h.Y1.indexOf(n))
        )
          switch (i) {
            case h.Xh.PREMIUM_MONTH_TIER_1:
              (o = T.intl.string(T.t.knvOV1)),
                I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) &&
                  (o = T.intl.format(T.t.o6hBiY, {}));
              break;
            case h.Xh.PREMIUM_MONTH_TIER_2:
              (o = T.intl.string(T.t.f8Dqur)),
                I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) &&
                  (o = T.intl.format(T.t.A4THYm, {}));
              break;
            case h.Xh.PREMIUM_YEAR_TIER_1:
              (o = T.intl.string(T.t.YZd5r6)),
                I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) &&
                  (o = T.intl.format(T.t.MHAxpK, {}));
              break;
            case h.Xh.PREMIUM_YEAR_TIER_2:
              (o = T.intl.formatToPlainString(T.t["M/Lknp"], {
                numFreeGuildSubscriptions: h.cb,
              })),
                I.X7u.has(null != u ? u : I.HeQ.UNKNOWN) &&
                  (o = T.intl.format(T.t.mULxLS, {
                    numFreeGuildSubscriptions: h.cb,
                  }));
              break;
            case h.Xh.PREMIUM_3_MONTH_TIER_2:
            case h.Xh.PREMIUM_6_MONTH_TIER_2:
              o = T.intl.string(T.t.aaCoW1);
              break;
            case h.Xh.PREMIUM_MONTH_TIER_0:
            case h.Xh.PREMIUM_YEAR_TIER_0:
              o = T.intl.string(T.t["XEoQ7+"]);
              break;
            default:
              throw Error("Unexpected planId: ".concat(i));
          }
        else if (c.skuId === h.Si.TIER_2 && d.skuId === h.Si.TIER_1)
          o = T.intl.string(T.t.PNX4ND);
        else
          switch (d.skuId) {
            case h.Si.TIER_0:
              o = T.intl.string(T.t["XEoQ7+"]);
              break;
            case h.Si.TIER_1:
              o = T.intl.string(T.t.nLI1Ki);
              break;
            case h.Si.TIER_2:
              o =
                1 !== c.intervalCount
                  ? T.intl.string(T.t.qSZZVF)
                  : T.intl.string(T.t.RNjcNj);
              break;
            default:
              throw Error("Unexpected skuId: ".concat(d.skuId));
          }
        return (0, r.jsx)("div", { className: b.text, children: o });
      }
      function g(t) {
        let e,
          n,
          {
            planId: i,
            enableNoPaymentTrial: c,
            startingPremiumSubscriptionPlanId: d,
            onClose: f,
            followupSKUInfo: g,
            isDowngrade: E,
            hideClose: x,
            postSuccessGuild: M,
            paymentSourceType: y,
          } = t,
          { theme: P } = (0, s.useThemeContext)(),
          v = (0, l.e7)([_.Z], () => (null != g ? _.Z.get(g.id) : null));
        o.useEffect(() => {
          if (null == g || null != v) return;
          let { applicationId: t, id: e } = g;
          (0, u.$N)(t, e).catch(I.VqG);
        }, [g, v]);
        let S = (t) => {
          if (t.skuId === h.Si.TIER_0)
            return I.X7u.has(null != y ? y : I.HeQ.UNKNOWN)
              ? T.intl.format(T.t.o6hBiY, {})
              : T.intl.string(T.t["AGf/yc"]);
          if (t.skuId === h.Si.TIER_1)
            return I.X7u.has(null != y ? y : I.HeQ.UNKNOWN)
              ? T.intl.format(T.t.o6hBiY, {})
              : T.intl.string(T.t.knvOV1);
          return I.X7u.has(null != y ? y : I.HeQ.UNKNOWN)
            ? T.intl.format(T.t.A4THYm, {})
            : c
              ? T.intl.string(T.t["g52y/v"])
              : T.intl.string(T.t.aTUr3d);
        };
        if (null != v)
          e = (0, r.jsx)("div", {
            className: b.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: v.name }),
          });
        else if (null != d)
          e = (0, r.jsx)(N, {
            planId: i,
            startingPremiumSubscriptionPlanId: d,
          });
        else if (null != M) {
          let t = m.Z.get(i);
          a()(null != t, "Missing plan"),
            (e = (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", { className: b.text, children: S(t) }),
                (0, r.jsx)("div", {
                  className: b.text,
                  children: T.intl.format(T.t["6aZ0NT"], { guildName: M.name }),
                }),
              ],
            }));
        } else {
          let t = m.Z.get(i);
          a()(null != t, "Missing plan"),
            (e = (0, r.jsx)("div", { className: b.text, children: S(t) }));
        }
        let R = C.ZP.getPremiumType(i);
        return (
          a()(
            null != R,
            "premium type should not be null in purchase confirmation",
          ),
          (n =
            null != v
              ? T.intl.formatToPlainString(T.t["1qGgm5"], { skuName: v.name })
              : E
                ? T.intl.string(T.t.QJ9EyM)
                : null != M
                  ? T.intl.string(T.t.ta3cXV)
                  : T.intl.string(T.t.TkTvBw)),
          (0, r.jsxs)("div", {
            className: b.confirmation,
            children: [
              (0, r.jsx)(p.C, {
                className: b.banner,
                theme: P,
                premiumType: R,
                type: I.X7u.has(null != y ? y : I.HeQ.UNKNOWN)
                  ? p.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != d
                    ? p.C.Types.PREMIUM_UPDATED
                    : p.C.Types.PREMIUM_ACTIVATED,
              }),
              e,
              x ? null : (0, r.jsx)(s.Button, { onClick: f, children: n }),
            ],
          })
        );
      }
      function E(t) {
        let { planId: e, onClose: n, halloweenDecoPurchase: o } = t,
          {
            giftRecipient: i,
            selectedGiftStyle: s,
            hasSentMessage: u,
            giftMessageError: _,
            isSendingMessage: C,
          } = (0, c.wD)(),
          p = (0, l.e7)([m.Z], () => m.Z.get(e));
        a()(null != p, "Missing plan");
        let h = (0, l.e7)([f.Z], () => f.Z.getGiftCode(p.skuId));
        return (0, r.jsx)(d.Z, {
          giftCode: h,
          subscriptionPlan: p,
          onClose: n,
          selectedGiftStyle: s,
          hasSentMessage: u,
          giftRecipient: i,
          giftMessageError: _,
          isSendingMessage: C,
          halloweenDecoPurchase: o,
        });
      }
      function x() {
        return (0, r.jsxs)("div", {
          className: b.redirectConfirmation,
          children: [
            (0, r.jsx)(s.Heading, {
              variant: "heading-xl/bold",
              children: T.intl.string(T.t.Xtf9wM),
            }),
            (0, r.jsxs)("div", {
              className: b.redirectBody,
              children: [
                (0, r.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: T.intl.string(T.t.bIVRSU),
                }),
                (0, r.jsx)("br", {}),
                (0, r.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: T.intl.string(T.t["0UJqOz"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    92783: function (t, e, n) {
      t.exports = {
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
    896243: function (t, e, n) {
      t.exports = {
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
    103581: function (t, e, n) {
      t.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    103112: function (t, e, n) {
      t.exports = { modal: "modal_fb5d87", footer: "footer_fb5d87" };
    },
    977885: function (t, e, n) {
      t.exports = {
        confirmation: "confirmation_be28dd",
        banner: "banner_be28dd",
        text: "text_be28dd",
        redirectConfirmation: "redirectConfirmation_be28dd",
        redirectBody: "redirectBody_be28dd",
      };
    },
  },
]);
//# sourceMappingURL=1aaa302a94ea5729a29d.js.map
