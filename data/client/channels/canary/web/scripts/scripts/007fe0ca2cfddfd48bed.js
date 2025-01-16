"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9236"],
  {
    561623: function (t, n, e) {
      e.r(n), e(47120), e(411104);
      var r = e(200651),
        o = e(192379),
        i = e(442837),
        a = e(780384),
        l = e(481060),
        s = e(366939),
        u = e(911969),
        c = e(410030),
        d = e(100527),
        f = e(906732),
        m = e(583046),
        C = e(963249),
        _ = e(853872),
        p = e(509545),
        h = e(626135),
        I = e(74538),
        T = e(937615),
        N = e(212895),
        b = e(296848),
        g = e(374649),
        E = e(807163),
        x = e(798769),
        M = e(317269),
        y = e(474936),
        P = e(981631),
        v = e(388032),
        S = e(486299);
      n.default = (t) => {
        var n, e, R, U;
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
            [_.Z],
            () =>
              (null == L ? void 0 : L.paymentSourceId) != null
                ? _.Z.getPaymentSource(L.paymentSourceId)
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
          W = (0, i.e7)([p.Z], () => (0, b.oE)(X), [X]),
          K = (0, i.e7)([p.Z], () => p.Z.isFetchingForSKU(H)),
          Q =
            null == G
              ? void 0
              : null === (U = G.invoiceItems) || void 0 === U
                ? void 0
                : null === (R = U.find((t) => t.subscriptionPlanId === X)) ||
                    void 0 === R
                  ? void 0
                  : null === (e = R.discounts) || void 0 === e
                    ? void 0
                    : null ===
                          (n = e.find(
                            (t) => t.type === u.eW.SUBSCRIPTION_PLAN,
                          )) || void 0 === n
                      ? void 0
                      : n.amount,
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
                                let t = (0, N.tD)(
                                  X,
                                  L.currency,
                                  null == Y ? void 0 : Y.id,
                                );
                                null != Y && Y.id === L.paymentSourceId && t
                                  ? (s.O5(L, B, P.Sbl.UNCANCEL_WINBACK_MODAL),
                                    w(!0))
                                  : (j.onClose(),
                                    (0, C.Z)({
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
    317269: function (t, n, e) {
      e.d(n, {
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
        e(47120),
        e(411104);
      var r = e(200651),
        o = e(192379),
        i = e(512722),
        a = e.n(i),
        l = e(442837),
        s = e(481060),
        u = e(16084),
        c = e(987209),
        d = e(179118),
        f = e(912788),
        m = e(509545),
        C = e(55563),
        _ = e(74538),
        p = e(741245),
        h = e(474936),
        I = e(981631),
        T = e(388032),
        N = e(307862);
      function b(t) {
        var n, e;
        let o,
          {
            planId: i,
            startingPremiumSubscriptionPlanId: s,
            paymentSourceType: u,
          } = t,
          [c, d] = (0, l.Wu)([m.Z], () => [m.Z.get(s), m.Z.get(i)]);
        if (
          (a()(null != c && null != d, "Missing startingPlan or newPlan"),
          (n = s),
          (e = i),
          h.Y1.indexOf(n) < h.Y1.indexOf(e))
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
        return (0, r.jsx)("div", { className: N.text, children: o });
      }
      function g(t) {
        let n,
          e,
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
          v = (0, l.e7)([C.Z], () => (null != g ? C.Z.get(g.id) : null));
        o.useEffect(() => {
          if (null == g || null != v) return;
          let { applicationId: t, id: n } = g;
          (0, u.$N)(t, n).catch(I.VqG);
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
          n = (0, r.jsx)("div", {
            className: N.text,
            children: T.intl.format(T.t.tsQOs7, { skuName: v.name }),
          });
        else if (null != d)
          n = (0, r.jsx)(b, {
            planId: i,
            startingPremiumSubscriptionPlanId: d,
          });
        else if (null != M) {
          let t = m.Z.get(i);
          a()(null != t, "Missing plan"),
            (n = (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", { className: N.text, children: S(t) }),
                (0, r.jsx)("div", {
                  className: N.text,
                  children: T.intl.format(T.t["6aZ0NT"], { guildName: M.name }),
                }),
              ],
            }));
        } else {
          let t = m.Z.get(i);
          a()(null != t, "Missing plan"),
            (n = (0, r.jsx)("div", { className: N.text, children: S(t) }));
        }
        let R = _.ZP.getPremiumType(i);
        return (
          a()(
            null != R,
            "premium type should not be null in purchase confirmation",
          ),
          (e =
            null != v
              ? T.intl.formatToPlainString(T.t["1qGgm5"], { skuName: v.name })
              : E
                ? T.intl.string(T.t.QJ9EyM)
                : null != M
                  ? T.intl.string(T.t.ta3cXV)
                  : T.intl.string(T.t.TkTvBw)),
          (0, r.jsxs)("div", {
            className: N.confirmation,
            children: [
              (0, r.jsx)(p.C, {
                className: N.banner,
                theme: P,
                premiumType: R,
                type: I.X7u.has(null != y ? y : I.HeQ.UNKNOWN)
                  ? p.C.Types.PREMIUM_PAYMENT_STARTED
                  : null != d
                    ? p.C.Types.PREMIUM_UPDATED
                    : p.C.Types.PREMIUM_ACTIVATED,
              }),
              n,
              x ? null : (0, r.jsx)(s.Button, { onClick: f, children: e }),
            ],
          })
        );
      }
      function E(t) {
        let { planId: n, onClose: e } = t,
          {
            giftRecipient: o,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftMessageError: u,
            isSendingMessage: C,
          } = (0, c.wD)(),
          _ = (0, l.e7)([m.Z], () => m.Z.get(n));
        a()(null != _, "Missing plan");
        let p = (0, l.e7)([f.Z], () => f.Z.getGiftCode(_.skuId));
        return (0, r.jsx)(d.Z, {
          giftCode: p,
          subscriptionPlan: _,
          onClose: e,
          selectedGiftStyle: i,
          hasSentMessage: s,
          giftRecipient: o,
          giftMessageError: u,
          isSendingMessage: C,
        });
      }
      function x() {
        return (0, r.jsxs)("div", {
          className: N.redirectConfirmation,
          children: [
            (0, r.jsx)(s.Heading, {
              variant: "heading-xl/bold",
              children: T.intl.string(T.t.Xtf9wM),
            }),
            (0, r.jsxs)("div", {
              className: N.redirectBody,
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
    534293: function (t, n, e) {
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
    402572: function (t, n, e) {
      t.exports = {
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
    99182: function (t, n, e) {
      t.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    486299: function (t, n, e) {
      t.exports = { modal: "modal_fb5d87", footer: "footer_fb5d87" };
    },
    307862: function (t, n, e) {
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
//# sourceMappingURL=007fe0ca2cfddfd48bed.js.map
