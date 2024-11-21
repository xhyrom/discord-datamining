"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60691"],
  {
    179118: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return P;
        },
      }),
        i(47120);
      var n = i(200651),
        o = i(192379),
        a = i(120356),
        r = i.n(a),
        s = i(392711),
        d = i.n(s),
        c = i(442837),
        l = i(481060),
        u = i(37234),
        f = i(194359),
        p = i(700582),
        _ = i(925329),
        b = i(479446),
        g = i(522489),
        m = i(857039),
        h = i(93127),
        x = i(814443),
        C = i(590783),
        S = i(699516),
        I = i(246946),
        k = i(594174),
        v = i(572004),
        B = i(669079),
        y = i(74538),
        T = i(51144),
        O = i(563132),
        R = i(981631),
        E = i(474936),
        j = i(388032),
        N = i(524254);
      function P(e) {
        let {
            giftCode: t,
            application: i,
            sku: a,
            subscriptionPlan: s,
            selectedGiftStyle: d,
            onClose: u,
            hasSentMessage: f,
            giftRecipient: b,
            giftMessageError: h,
            isSendingMessage: x,
            halloweenDecoPurchase: S,
          } = e,
          [k, P] = o.useState(l.CopyInput.Modes.DEFAULT),
          M = (0, c.e7)([I.Z], () => I.Z.enabled),
          A = f || (null != d && null != b),
          G = (null == a ? void 0 : a.productLine) === R.POd.COLLECTIBLES,
          { selectedPlan: H } = (0, O.usePaymentContext)(),
          w =
            (0, m.Z)({ location: "Gift purchase confirm" }) &&
            (null == H ? void 0 : H.skuId) === E.Si.TIER_2 &&
            null != S,
          W = () => (null != s ? s.skuId : null != a ? a.id : null),
          D = () => {
            let e;
            let t = null != d && E.kJ.includes(d);
            if (null != h) return j.intl.string(j.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === E.rV.MONTH) {
              if (w) return j.intl.string(j.t.IelGKy);
              e = A ? (t ? j.t.ECjJJy : j.t["4ZJ+7e"]) : j.t["P+z55e"];
            } else {
              if (w) return j.intl.string(j.t.gausub);
              e = A ? (t ? j.t.jeiz2N : j.t.p0pZXF) : j.t.bXqk3t;
            }
            return j.intl.format(e, {
              skuName: (0, y.aq)(s.id),
              intervalCount: s.intervalCount,
            });
          },
          U = (e, t) => {
            null != a && (0, B.dM)(new C.Z({ code: t, maxUses: 1 }), a);
            try {
              (0, v.JG)(e), P(l.CopyInput.Modes.SUCCESS);
            } catch (e) {
              P(l.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              P(l.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          Z = () => {
            let e;
            if (null == t) return null;
            switch (k) {
              case l.CopyInput.Modes.SUCCESS:
                e = j.intl.string(j.t.XVvPjY);
                break;
              case l.CopyInput.Modes.ERROR:
                e = j.intl.string(j.t.i4GM3N);
                break;
              default:
                e = j.intl.string(j.t.OpuAlJ);
            }
            return (0, n.jsxs)("div", {
              className: N.giftCodeSection,
              children: [
                (0, n.jsx)(l.FormTitle, {
                  children: j.intl.string(j.t["/dG4ND"]),
                }),
                null != t &&
                  (0, n.jsx)(l.CopyInput, {
                    hideMessage: M ? j.intl.string(j.t["0RLn4+"]) : null,
                    value: (0, B.Nz)(t),
                    mode: k,
                    text: e,
                    onCopy: (e) => U(e, t),
                    supportsCopy: v.wS,
                    className: N.__invalid_copyInput,
                    buttonColor: l.ButtonColors.LINK,
                    buttonLook: l.ButtonLooks.LINK,
                  }),
                (0, n.jsx)("div", {
                  className: N.subtext,
                  children: j.intl.string(j.t.QWKUpq),
                }),
              ],
            });
          };
        return x
          ? (0, n.jsxs)("div", {
              className: N.confirmation,
              children: [
                null != i
                  ? (0, n.jsx)(_.Z, {
                      game: i,
                      className: N.__invalid_icon,
                      size: _.Z.Sizes.LARGE,
                      skuId: W(),
                    })
                  : null,
                (0, n.jsx)(l.Spinner, {
                  type: l.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, n.jsxs)("div", {
              className: N.confirmation,
              children: [
                null != i
                  ? (0, n.jsx)(_.Z, {
                      game: i,
                      className: N.__invalid_icon,
                      size: _.Z.Sizes.LARGE,
                      skuId: W(),
                    })
                  : null,
                (0, n.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  className: r()({
                    [N.header]: null == d && !G,
                    [N.headerCustomGifting]: null != d && !G,
                  }),
                  children:
                    null != b || (f && null == h)
                      ? j.intl.string(j.t.zOmK9P)
                      : null != h
                        ? j.intl.string(j.t.d1lrmZ)
                        : j.intl.string(j.t["/s1xR0"]),
                }),
                (f && null != b && null == h) || A
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(p.Z, {
                          user: b,
                          className: N.giftRecipient,
                          size: l.AvatarSizes.SIZE_80,
                        }),
                        (0, n.jsx)(l.Heading, {
                          className: N.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: T.ZP.getName(b),
                        }),
                        (0, n.jsxs)("div", {
                          className: N.giftRecipientTag,
                          children: [" ", T.ZP.getUserTag(b)],
                        }),
                        (0, n.jsx)("div", {
                          className: N.giftSentMessage,
                          children: D(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, B.MY)(b, G),
                        { removeGiftRecipientUI: i } = g.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== B.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: N.blurb,
                            children: D(),
                          }),
                          !i &&
                            null == h &&
                            (0, n.jsx)(L, { giftCode: t, onClose: u }),
                          (0, n.jsx)("div", { className: N.divider }),
                          Z(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let L = (e) => {
        let { giftCode: t, onClose: i } = e;
        o.useEffect(() => {
          f.Z.fetchRelationships(), (0, h.W)();
        }, []);
        let [a, r] = o.useState(),
          [s, _] = o.useState(!1),
          [g, m] = o.useState(!1),
          { userAffinities: C, isLoading: I } = (0, c.cj)([x.Z], () => ({
            userAffinities: x.Z.getUserAffinitiesUserIds(),
            isLoading: x.Z.getFetching(),
          })),
          v = Array.from(C.values()),
          B = (0, c.e7)([S.Z], () => S.Z.getFriendIDs()),
          y = d().difference(B, v),
          O = [...v, ...y],
          R = (0, c.e7)(
            [k.default],
            () => k.default.filter((e) => O.includes(e.id) && !e.bot),
            [O],
          );
        if (null == R || 0 === R.length) return null;
        let E = d().sortBy(R, (e) => O.indexOf(e.id));
        return (0, n.jsxs)("div", {
          className: N.giftRecipientSection,
          children: [
            (0, n.jsx)(l.FormTitle, { children: j.intl.string(j.t.MJw05e) }),
            (0, n.jsxs)("div", {
              className: N.giftRecipient,
              children: [
                (0, n.jsx)(l.SearchableSelect, {
                  placeholder: j.intl.string(j.t.J019jY),
                  wrapperClassName: N.giftRecipientInputWrapper,
                  className: s ? N.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, n.jsx)(p.Z, {
                          user: e.value,
                          size: l.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    I
                      ? (0, n.jsx)(l.Spinner, {
                          type: l.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: a,
                  onChange: (e) => {
                    r(e), _(!1);
                  },
                  options: E.map((e) => ({
                    value: e,
                    label: "".concat(T.ZP.getUserTag(e)),
                  })),
                }),
                (0, n.jsx)(l.Button, {
                  disabled: null == a,
                  submitting: g,
                  className: N.sendToRecipientButton,
                  onClick: () => {
                    m(!0),
                      (0, b.YD)(a, t)
                        .then(() => {
                          i(), (0, u.Ou)();
                        })
                        .catch(() => {
                          _(!0), m(!1);
                        });
                  },
                  children: j.intl.string(j.t["+EgwQk"]),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: s ? N.subtextError : N.subtext,
              children: s
                ? j.intl.string(j.t.jo5Vbm)
                : j.intl.string(j.t["8/N3v7"]),
            }),
          ],
        });
      };
    },
    590783: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      }),
        i(789020);
      var n = i(913527),
        o = i.n(n),
        a = i(81825),
        r = i(630388),
        s = i(301766),
        d = i(474936);
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
      let l = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class u extends a.Z {
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
          return (this.isSubscription && d.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, r.yE)(this.flags, l.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, r.yE)(
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
    830151: function (e, t, i) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    788629: function (e, t, i) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    524254: function (e, t, i) {
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
    677825: function (e, t, i) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    542781: function (e, t, i) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    59023: function (e, t, i) {
      e.exports = { body: "body_e16e99" };
    },
    297908: function (e, t, i) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    905994: function (e, t, i) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    638635: function (e, t, i) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    38569: function (e, t, i) {
      e.exports = { back: "back_fd80e5" };
    },
    244203: function (e, t, i) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    130298: function (e, t, i) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    473156: function (e, t, i) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    309951: function (e, t, i) {
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
    679640: function (e, t, i) {
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
    15841: function (e, t, i) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    3936: function (e, t, i) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    83615: function (e, t, i) {
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
    324415: function (e, t, i) {
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
    45785: function (e, t, i) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    522888: function (e, t, i) {
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
    898492: function (e, t, i) {
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
    910485: function (e, t, i) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    133130: function (e, t, i) {
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
    251300: function (e, t, i) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    703236: function (e, t, i) {
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
    294188: function (e, t, i) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    658160: function (e, t, i) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    203748: function (e, t, i) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    893896: function (e, t, i) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    622085: function (e, t, i) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    555730: function (e, t, i) {
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
    600699: function (e, t, i) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    651523: function (e, t, i) {
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
    261842: function (e, t, i) {
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
    599215: function (e, t, i) {
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
//# sourceMappingURL=d6aa5745d24b051e419b.js.map
