"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75613"],
  {
    178632: function (e) {
      e.exports = "/assets/34283943e9d6d8c8c084.svg";
    },
    609194: function (e, r, n) {
      var o,
        l,
        s,
        c,
        a,
        t = n(735250),
        i = n(470079),
        u = n(120356),
        d = n.n(u),
        _ = n(600164),
        p = n(865857);
      function E(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      ((o = s || (s = {})).PRIMARY = "primary"),
        (o.SECONDARY = "secondary"),
        (o.WARNING = "warning"),
        (o.ERROR = "error"),
        ((l = c || (c = {})).SMALL = "small"),
        (l.LARGE = "large"),
        (l.NONE = "none");
      let m = {
          primary: p.colorPrimary,
          secondary: p.colorSecondary,
          warning: p.colorWarning,
          error: p.colorError,
        },
        I = { small: p.small, large: p.large, none: null };
      class f extends (a = i.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: o,
            className: l,
            iconClassName: s,
          } = this.props;
          return (0, t.jsxs)(_.Z, {
            className: d()(p.note, m[r], l),
            align: _.Z.Align.CENTER,
            children: [
              (0, t.jsx)(e, {
                className: d()(p.icon, I[o], s),
                color: "currentColor",
              }),
              (0, t.jsx)("div", { children: n }),
            ],
          });
        }
      }
      E(f, "Colors", s), E(f, "Sizes", c), (r.Z = f);
    },
    51499: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return u;
        },
      }),
        n(390547);
      var o = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        c = n(481060),
        a = n(598),
        t = n(409813),
        i = n(548458);
      function u(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: l,
            breadcrumbs: u,
            startedPaymentFlowWithPaymentSourcesRef: d,
          } = (0, a.usePaymentContext)();
        if (null == u || 0 === u.length) return null;
        let _ = u.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === _.length
          ? null
          : ((_ = _.filter((e) => {
              let r = e.id !== t.h8.ADD_PAYMENT_STEPS,
                o = e.id === t.h8.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (r || o));
            })),
            (0, o.jsx)("div", {
              className: s()("breadcrumb", i.wrapper, r),
              children: (0, o.jsx)(c.Breadcrumbs, {
                activeId: l,
                breadcrumbs: _,
              }),
            }));
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return R;
        },
      }),
        n(47120),
        n(411104);
      var o = n(735250),
        l = n(470079),
        s = n(160612),
        c = n(120356),
        a = n.n(c),
        t = n(846519),
        i = n(481060),
        u = n(609194),
        d = n(881052),
        _ = n(128069),
        p = n(598),
        E = n(409813);
      n(51499), n(614277);
      var m = n(122289),
        I = n(70956),
        f = n(981631),
        N = n(689938),
        S = n(896769);
      let T = new Set([
        E.h8.SKU_SELECT,
        E.h8.AWAITING_AUTHENTICATION,
        E.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        E.h8.CONFIRM,
      ]);
      function R(e) {
        let {
            steps: r,
            currentStep: n,
            body: c,
            paymentError: R,
            header: C,
            footer: h,
            isGift: P = !1,
            giftMessage: M = N.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: x = !1,
            isLoading: g = !1,
            purchaseError: b,
            purchaseErrorBlockRef: A,
            planError: L,
            onScroll: j,
            scrollerClassName: k,
            hasCurrencies: O = !1,
          } = e,
          B = null;
        null != R && null == (0, E.ly)(R)
          ? (B = R)
          : null != b
            ? (B = b)
            : null != L && (B = L);
        let U = null != B ? B.message : "";
        null != B &&
          B instanceof d.HF &&
          (B.code === _.SM.CARD_DECLINED &&
            O &&
            (U += " ".concat(N.Z.Messages.BILLING_ERROR_TRY_ANOTHER)),
          B.code === _.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (U = N.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          B.code === f.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (U = N.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: Z } = (0, p.usePaymentContext)();
        g = g || null == Z;
        let y = l.useRef(new t.V7());
        l.useEffect(() => {
          let e = y.current;
          return (
            null != Z || e.isStarted()
              ? null != Z && e.stop()
              : e.start(10 * I.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, m.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [Z]);
        let v = r.includes(E.h8.PAYMENT_TYPE)
          ? E.h8.PAYMENT_TYPE
          : E.h8.ADD_PAYMENT_STEPS;
        return (0, o.jsxs)(s.Elements, {
          options: f.OBo,
          stripe: Z,
          children: [
            C,
            (0, o.jsxs)("div", {
              className: a()("paymentModalContent", S.content),
              children: [
                P && n !== E.h8.CONFIRM
                  ? (0, o.jsx)(u.Z, {
                      className: S.paymentNote,
                      iconSize: u.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == M ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                      children: M,
                    })
                  : null,
                x
                  ? null
                  : (0, o.jsx)("div", {
                      className: S.breadcrumbsWrapper,
                      children: (0, o.jsx)(i.Breadcrumbs, {
                        activeId: E.Ck.has(n) ? v : n,
                        breadcrumbs: r
                          .filter((e) => !E.Ck.has(e) && !T.has(e))
                          .map((e) => ({ id: e, label: (0, E.DJ)(e) })),
                      }),
                    }),
                (0, o.jsxs)("div", {
                  className: S.bodyWrapper,
                  children: [
                    null == B
                      ? null
                      : (0, o.jsx)("div", {
                          className: S.errorBlockWrapper,
                          children: (0, o.jsx)(i.FormErrorBlock, {
                            ref: A,
                            children: U,
                          }),
                        }),
                    g
                      ? (0, o.jsx)(i.Spinner, { className: S.loadingBlock })
                      : (0, o.jsx)(i.Sequencer, {
                          className: S.sequencer,
                          staticClassName: S.sequencerStatic,
                          animatedNodeClassName: S.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, o.jsx)(i.AdvancedScrollerThin, {
                            onScroll: j,
                            className: a()(S.scroller, k),
                            children: c,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            h,
          ],
        });
      }
    },
    263954: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        c = n(524994);
      function a(e) {
        let { icon: r, iconClassName: n, description: l, color: a } = e;
        return (0, o.jsxs)("div", {
          className: c.perkRow,
          children: [
            (0, o.jsx)("div", {
              className: c.perkIconContainer,
              children: (0, o.jsx)(r, {
                color: null != a ? a : "currentColor",
                className: s()(c.perkIcon, n),
              }),
            }),
            (0, o.jsx)("div", { className: c.perkDescription, children: l }),
          ],
        });
      }
    },
    72691: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return O;
          },
        });
      var o = n(735250),
        l = n(470079),
        s = n(120356),
        c = n.n(s),
        a = n(442837),
        t = n(481060),
        i = n(570140),
        u = n(355467),
        d = n(821849),
        _ = n(15640),
        p = n(598),
        E = n(409813),
        m = n(104494),
        I = n(639119),
        f = n(165583),
        N = n(197115),
        S = n(185139),
        T = n(263954),
        R = n(706454),
        C = n(853872),
        h = n(930153),
        P = n(74538),
        M = n(937615),
        x = n(981631),
        g = n(474936),
        b = n(689938),
        A = n(840812);
      let L = (e) => {
          let { locale: r } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(T.Z, {
                icon: t.StickerIcon,
                iconClassName: A.iconColorPurple,
                description:
                  b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM,
              }),
              (0, o.jsx)(T.Z, {
                icon: t.BoostTier2SimpleIcon,
                iconClassName: A.iconColorPink,
                description:
                  b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format(
                    {
                      numGuildSubscriptions: g.cb,
                      discountPercent: (0, h.T3)(r, g.Rr / 100),
                    },
                  ),
              }),
              (0, o.jsx)(T.Z, {
                icon: t.ReactionIcon,
                iconClassName: A.iconColorYellow,
                description:
                  b.Z.Messages
                    .STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION,
              }),
            ],
          });
        },
        j = (e) => {
          let {
              trialOffer: r,
              discountOffer: l,
              isLoading: s,
              price: i,
              onClose: u,
            } = e,
            d = (0, a.e7)([R.default], () => R.default.locale),
            _ = null != r || null != l;
          return (0, o.jsxs)("div", {
            className: A.wrapper,
            children: [
              (0, o.jsx)(t.ModalCloseButton, {
                onClick: u,
                className: A.closeButton,
              }),
              _ && (0, o.jsx)(f.dz, { className: A.premiumTrialBadge }),
              (0, o.jsx)("img", {
                className: c()(A.heroImage, { [A.heroImageWithTrialOffer]: _ }),
                src: n(178632),
                alt: "",
              }),
              s
                ? (0, o.jsx)(t.Spinner, {})
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(t.Text, {
                        variant: "text-md/normal",
                        className: A.heading,
                        children:
                          null == i
                            ? (0, o.jsx)(t.Spinner, {
                                type: t.Spinner.Type.PULSING_ELLIPSIS,
                              })
                            : b.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format(
                                {
                                  monthlyPrice: (0, M.T4)(i.amount, i.currency),
                                },
                              ),
                      }),
                      (0, o.jsx)("div", {
                        className: A.perks,
                        children: (0, o.jsx)(L, { locale: d }),
                      }),
                    ],
                  }),
            ],
          });
        },
        k = (e) => {
          let { trialOffer: r, discountOffer: n, onClose: l } = e,
            s = { section: x.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
          return (0, o.jsxs)(t.ModalFooter, {
            className: A.footer,
            children: [
              (0, o.jsx)(t.Button, {
                onClick: l,
                size: t.Button.Sizes.SMALL,
                color: t.Button.Colors.PRIMARY,
                look: t.Button.Looks.LINK,
                children: b.Z.Messages.CLOSE,
              }),
              (0, o.jsx)(N.Z, {
                buttonText:
                  null != r || null != n
                    ? b.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                    : void 0,
                premiumModalAnalyticsLocation: s,
                subscriptionTier: g.Si.TIER_2,
                size: t.Button.Sizes.SMALL,
                color: t.Button.Colors.GREEN,
                onClick: () => {
                  l();
                },
              }),
            ],
          });
        };
      function O(e) {
        let { onClose: r, ...n } = e,
          s = (0, _.V)(),
          c = (0, a.e7)([C.Z], () => C.Z.hasFetchedPaymentSources),
          f = s && c,
          N = (0, I.N)(),
          T = (0, m.Ng)();
        l.useEffect(() => {
          i.Z.wait(() => {
            (0, u.tZ)(), (0, d.Y2)(null, null, x.JjL.DISCOVERY);
          });
        }, []);
        let R = f ? P.ZP.getDefaultPrice(g.Xh.PREMIUM_MONTH_TIER_2) : null;
        return (0, o.jsx)(p.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, o.jsx)(t.ModalRoot, {
            ...n,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            children: (0, o.jsx)(S.Z, {
              hideBreadcrumbs: !0,
              body: (0, o.jsx)(j, {
                trialOffer: N,
                discountOffer: T,
                isLoading: !f,
                price: R,
                onClose: r,
              }),
              footer: (0, o.jsx)(k, {
                trialOffer: N,
                discountOffer: T,
                onClose: r,
              }),
              steps: [E.h8.PREMIUM_UPSELL],
              currentStep: E.h8.PREMIUM_UPSELL,
            }),
          }),
        });
      }
    },
    865857: function (e, r, n) {
      e.exports = {
        note: "note_e0037c",
        icon: "icon_e0037c",
        large: "large_e0037c",
        small: "small_e0037c",
        colorWarning: "colorWarning_e0037c",
        colorError: "colorError_e0037c",
        colorPrimary: "colorPrimary_e0037c",
        colorSecondary: "colorSecondary_e0037c",
      };
    },
    548458: function (e, r, n) {
      e.exports = { wrapper: "wrapper_bfc2c6" };
    },
    896769: function (e, r, n) {
      e.exports = {
        content: "content_cc6017",
        breadcrumbsWrapper: "breadcrumbsWrapper_cc6017",
        bodyWrapper: "bodyWrapper_cc6017",
        scroller: "scroller_cc6017",
        errorBlockWrapper: "errorBlockWrapper_cc6017",
        paymentNote: "paymentNote_cc6017",
        loadingBlock: "loadingBlock_cc6017",
        sequencer: "sequencer_cc6017",
        sequencerStatic: "sequencerStatic_cc6017",
        sequencerAnimatedNode: "sequencerAnimatedNode_cc6017",
      };
    },
    524994: function (e, r, n) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
    840812: function (e, r, n) {
      e.exports = {
        wrapper: "wrapper_fe3b99",
        heroImage: "heroImage_fe3b99",
        heroImageWithTrialOffer: "heroImageWithTrialOffer_fe3b99",
        premiumTrialBadge: "premiumTrialBadge_fe3b99",
        closeButton: "closeButton_fe3b99",
        heading: "heading_fe3b99",
        perks: "perks_fe3b99",
        iconColorYellow: "iconColorYellow_fe3b99 icon_fe3b99",
        iconColorPink: "iconColorPink_fe3b99 icon_fe3b99",
        iconColorPurple: "iconColorPurple_fe3b99 icon_fe3b99",
        footer: "footer_fe3b99",
      };
    },
  },
]);
//# sourceMappingURL=fb326522649ee200b2cf.js.map
