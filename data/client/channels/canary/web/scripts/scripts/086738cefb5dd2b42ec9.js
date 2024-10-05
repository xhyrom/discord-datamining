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
        t,
        c,
        i = n(735250),
        a = n(470079),
        u = n(120356),
        d = n.n(u),
        _ = n(600164),
        p = n(865857);
      function m(e, r, n) {
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
        ((l = t || (t = {})).SMALL = "small"),
        (l.LARGE = "large"),
        (l.NONE = "none");
      let f = {
          primary: p.colorPrimary,
          secondary: p.colorSecondary,
          warning: p.colorWarning,
          error: p.colorError,
        },
        E = { small: p.small, large: p.large, none: null };
      class I extends (c = a.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: o,
            className: l,
            iconClassName: s,
          } = this.props;
          return (0, i.jsxs)(_.Z, {
            className: d()(p.note, f[r], l),
            align: _.Z.Align.CENTER,
            children: [
              (0, i.jsx)(e, {
                className: d()(p.icon, E[o], s),
                color: "currentColor",
              }),
              (0, i.jsx)("div", { children: n }),
            ],
          });
        }
      }
      m(I, "Colors", s), m(I, "Sizes", t), (r.Z = I);
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
        t = n(481060),
        c = n(598),
        i = n(409813),
        a = n(548458);
      function u(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: l,
            breadcrumbs: u,
            startedPaymentFlowWithPaymentSourcesRef: d,
          } = (0, c.usePaymentContext)();
        if (null == u || 0 === u.length) return null;
        let _ = u.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === _.length
          ? null
          : ((_ = _.filter((e) => {
              let r = e.id !== i.h8.ADD_PAYMENT_STEPS,
                o = e.id === i.h8.ADD_PAYMENT_STEPS && !d.current;
              return !n || (n && (r || o));
            })),
            (0, o.jsx)("div", {
              className: s()("breadcrumb", a.wrapper, r),
              children: (0, o.jsx)(t.Breadcrumbs, {
                activeId: l,
                breadcrumbs: _,
              }),
            }));
      }
    },
    614277: function (e, r, n) {
      n.d(r, {
        C3: function () {
          return m;
        },
        O3: function () {
          return f;
        },
        ZP: function () {
          return p;
        },
      });
      var o = n(735250),
        l = n(470079),
        s = n(120356),
        t = n.n(s),
        c = n(512722),
        i = n.n(c),
        a = n(699581),
        u = n(481060),
        d = n(598),
        _ = n(130298);
      function p(e) {
        var r, n, s, c, a, p;
        let {
            header: m,
            isLargeModal: f,
            stepProps: E,
          } = (function (e) {
            let { header: r, isLargeModal: n, ...o } = e;
            return { header: r, isLargeModal: n, stepProps: o };
          })(e),
          {
            step: I,
            stepConfigs: N,
            setBodyNode: S,
            setFooterNode: C,
            setModalOverlayNode: h,
            setReadySlideId: P,
          } = (0, d.usePaymentContext)(),
          T = N.find((e) => e.key === I);
        l.useEffect(() => {
          h(null);
        }, [I, h]),
          i()(null != T, "Unknown step for current payment flow.");
        let R =
            null !==
              (a =
                null == T
                  ? void 0
                  : null === (r = T.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== a &&
            a,
          x =
            null == T
              ? void 0
              : null === (n = T.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          M =
            void 0 !== f && f
              ? _.sliderBodyLarge
              : null == T
                ? void 0
                : null === (s = T.options) || void 0 === s
                  ? void 0
                  : s.sliderBodyClassName;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            null ===
              (p =
                null == T
                  ? void 0
                  : null === (c = T.options) || void 0 === c
                    ? void 0
                    : c.renderHeader) ||
            void 0 === p ||
            p
              ? m
              : null,
            T.renderStep(E),
            null == I || R
              ? null
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(u.ModalContent, {
                      className: t()(_.body, x),
                      children: (0, o.jsx)(u.Slides, {
                        activeSlide: I,
                        centered: !1,
                        onSlideReady: (e) => P(e),
                        children: N.filter((e) => null != e.key).map((e) =>
                          (0, o.jsx)(
                            u.Slide,
                            {
                              id: e.key,
                              children: (0, o.jsx)("form", {
                                className: t()(_.sliderBody, M),
                                ref: (e) => S(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, o.jsx)("div", { ref: (e) => C(e) }),
                    (0, o.jsx)("div", { ref: (e) => h(e) }),
                  ],
                }),
          ],
        });
      }
      function m(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, d.usePaymentContext)();
        return null == n ? null : a.createPortal(r, n);
      }
      function f(e) {
        let { children: r } = e,
          { footerNode: n } = (0, d.usePaymentContext)();
        return null == n ? null : a.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return h;
        },
      }),
        n(47120),
        n(411104);
      var o = n(735250),
        l = n(470079),
        s = n(160612),
        t = n(120356),
        c = n.n(t),
        i = n(846519),
        a = n(481060),
        u = n(609194),
        d = n(881052),
        _ = n(128069),
        p = n(598),
        m = n(409813);
      n(51499), n(614277);
      var f = n(122289),
        E = n(70956),
        I = n(981631),
        N = n(689938),
        S = n(896769);
      let C = new Set([
        m.h8.SKU_SELECT,
        m.h8.AWAITING_AUTHENTICATION,
        m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        m.h8.CONFIRM,
      ]);
      function h(e) {
        let {
            steps: r,
            currentStep: n,
            body: t,
            paymentError: h,
            header: P,
            footer: T,
            isGift: R = !1,
            giftMessage: x = N.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: M = !1,
            isLoading: b = !1,
            purchaseError: g,
            purchaseErrorBlockRef: j,
            planError: L,
            onScroll: v,
            scrollerClassName: y,
            hasCurrencies: A = !1,
          } = e,
          k = null;
        null != h && null == (0, m.ly)(h)
          ? (k = h)
          : null != g
            ? (k = g)
            : null != L && (k = L);
        let B = null != k ? k.message : "";
        null != k &&
          k instanceof d.HF &&
          (k.code === _.SM.CARD_DECLINED &&
            A &&
            (B += " ".concat(N.Z.Messages.BILLING_ERROR_TRY_ANOTHER)),
          k.code === _.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (B = N.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          k.code === I.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (B = N.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: O } = (0, p.usePaymentContext)();
        b = b || null == O;
        let U = l.useRef(new i.V7());
        l.useEffect(() => {
          let e = U.current;
          return (
            null != O || e.isStarted()
              ? null != O && e.stop()
              : e.start(10 * E.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, f.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [O]);
        let Z = r.includes(m.h8.PAYMENT_TYPE)
          ? m.h8.PAYMENT_TYPE
          : m.h8.ADD_PAYMENT_STEPS;
        return (0, o.jsxs)(s.Elements, {
          options: I.OBo,
          stripe: O,
          children: [
            P,
            (0, o.jsxs)("div", {
              className: c()("paymentModalContent", S.content),
              children: [
                R && n !== m.h8.CONFIRM
                  ? (0, o.jsx)(u.Z, {
                      className: S.paymentNote,
                      iconSize: u.Z.Sizes.SMALL,
                      icon: a.GiftIcon,
                      color:
                        null == x ? u.Z.Colors.PRIMARY : u.Z.Colors.SECONDARY,
                      children: x,
                    })
                  : null,
                M
                  ? null
                  : (0, o.jsx)("div", {
                      className: S.breadcrumbsWrapper,
                      children: (0, o.jsx)(a.Breadcrumbs, {
                        activeId: m.Ck.has(n) ? Z : n,
                        breadcrumbs: r
                          .filter((e) => !m.Ck.has(e) && !C.has(e))
                          .map((e) => ({ id: e, label: (0, m.DJ)(e) })),
                      }),
                    }),
                (0, o.jsxs)("div", {
                  className: S.bodyWrapper,
                  children: [
                    null == k
                      ? null
                      : (0, o.jsx)("div", {
                          className: S.errorBlockWrapper,
                          children: (0, o.jsx)(a.FormErrorBlock, {
                            ref: j,
                            children: B,
                          }),
                        }),
                    b
                      ? (0, o.jsx)(a.Spinner, { className: S.loadingBlock })
                      : (0, o.jsx)(a.Sequencer, {
                          className: S.sequencer,
                          staticClassName: S.sequencerStatic,
                          animatedNodeClassName: S.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, o.jsx)(a.AdvancedScrollerThin, {
                            onScroll: v,
                            className: c()(S.scroller, y),
                            children: t,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            T,
          ],
        });
      }
    },
    263954: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return c;
        },
      });
      var o = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        t = n(524994);
      function c(e) {
        let { icon: r, iconClassName: n, description: l, color: c } = e;
        return (0, o.jsxs)("div", {
          className: t.perkRow,
          children: [
            (0, o.jsx)("div", {
              className: t.perkIconContainer,
              children: (0, o.jsx)(r, {
                color: null != c ? c : "currentColor",
                className: s()(t.perkIcon, n),
              }),
            }),
            (0, o.jsx)("div", { className: t.perkDescription, children: l }),
          ],
        });
      }
    },
    72691: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return A;
          },
        });
      var o = n(735250),
        l = n(470079),
        s = n(120356),
        t = n.n(s),
        c = n(442837),
        i = n(481060),
        a = n(570140),
        u = n(355467),
        d = n(821849),
        _ = n(15640),
        p = n(598),
        m = n(409813),
        f = n(104494),
        E = n(639119),
        I = n(165583),
        N = n(197115),
        S = n(185139),
        C = n(263954),
        h = n(706454),
        P = n(853872),
        T = n(930153),
        R = n(74538),
        x = n(937615),
        M = n(981631),
        b = n(474936),
        g = n(689938),
        j = n(840812);
      let L = (e) => {
          let { locale: r } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(C.Z, {
                icon: i.StickerIcon,
                iconClassName: j.iconColorPurple,
                description:
                  g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM,
              }),
              (0, o.jsx)(C.Z, {
                icon: i.BoostTier2SimpleIcon,
                iconClassName: j.iconColorPink,
                description:
                  g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format(
                    {
                      numGuildSubscriptions: b.cb,
                      discountPercent: (0, T.T3)(r, b.Rr / 100),
                    },
                  ),
              }),
              (0, o.jsx)(C.Z, {
                icon: i.ReactionIcon,
                iconClassName: j.iconColorYellow,
                description:
                  g.Z.Messages
                    .STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION,
              }),
            ],
          });
        },
        v = (e) => {
          let {
              trialOffer: r,
              discountOffer: l,
              isLoading: s,
              price: a,
              onClose: u,
            } = e,
            d = (0, c.e7)([h.default], () => h.default.locale),
            _ = null != r || null != l;
          return (0, o.jsxs)("div", {
            className: j.wrapper,
            children: [
              (0, o.jsx)(i.ModalCloseButton, {
                onClick: u,
                className: j.closeButton,
              }),
              _ && (0, o.jsx)(I.dz, { className: j.premiumTrialBadge }),
              (0, o.jsx)("img", {
                className: t()(j.heroImage, { [j.heroImageWithTrialOffer]: _ }),
                src: n(178632),
                alt: "",
              }),
              s
                ? (0, o.jsx)(i.Spinner, {})
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(i.Text, {
                        variant: "text-md/normal",
                        className: j.heading,
                        children:
                          null == a
                            ? (0, o.jsx)(i.Spinner, {
                                type: i.Spinner.Type.PULSING_ELLIPSIS,
                              })
                            : g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format(
                                {
                                  monthlyPrice: (0, x.T4)(a.amount, a.currency),
                                },
                              ),
                      }),
                      (0, o.jsx)("div", {
                        className: j.perks,
                        children: (0, o.jsx)(L, { locale: d }),
                      }),
                    ],
                  }),
            ],
          });
        },
        y = (e) => {
          let { trialOffer: r, discountOffer: n, onClose: l } = e,
            s = { section: M.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
          return (0, o.jsxs)(i.ModalFooter, {
            className: j.footer,
            children: [
              (0, o.jsx)(i.Button, {
                onClick: l,
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.PRIMARY,
                look: i.Button.Looks.LINK,
                children: g.Z.Messages.CLOSE,
              }),
              (0, o.jsx)(N.Z, {
                buttonText:
                  null != r || null != n
                    ? g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                    : void 0,
                premiumModalAnalyticsLocation: s,
                subscriptionTier: b.Si.TIER_2,
                size: i.Button.Sizes.SMALL,
                color: i.Button.Colors.GREEN,
                onClick: () => {
                  l();
                },
              }),
            ],
          });
        };
      function A(e) {
        let { onClose: r, ...n } = e,
          s = (0, _.V)(),
          t = (0, c.e7)([P.Z], () => P.Z.hasFetchedPaymentSources),
          I = s && t,
          N = (0, E.N)(),
          C = (0, f.Ng)();
        l.useEffect(() => {
          a.Z.wait(() => {
            (0, u.tZ)(), (0, d.Y2)(null, null, M.JjL.DISCOVERY);
          });
        }, []);
        let h = I ? R.ZP.getDefaultPrice(b.Xh.PREMIUM_MONTH_TIER_2) : null;
        return (0, o.jsx)(p.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, o.jsx)(i.ModalRoot, {
            ...n,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            children: (0, o.jsx)(S.Z, {
              hideBreadcrumbs: !0,
              body: (0, o.jsx)(v, {
                trialOffer: N,
                discountOffer: C,
                isLoading: !I,
                price: h,
                onClose: r,
              }),
              footer: (0, o.jsx)(y, {
                trialOffer: N,
                discountOffer: C,
                onClose: r,
              }),
              steps: [m.h8.PREMIUM_UPSELL],
              currentStep: m.h8.PREMIUM_UPSELL,
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
    130298: function (e, r, n) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
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
//# sourceMappingURL=086738cefb5dd2b42ec9.js.map
