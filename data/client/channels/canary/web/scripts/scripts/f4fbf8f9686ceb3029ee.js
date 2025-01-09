"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75613"],
  {
    178632: function (e) {
      e.exports = "/assets/34283943e9d6d8c8c084.svg";
    },
    609194: function (e, r, n) {
      var l,
        o,
        t,
        i,
        s,
        c = n(200651),
        a = n(192379),
        d = n(120356),
        u = n.n(d),
        p = n(600164),
        m = n(355787);
      function f(e, r, n) {
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
      ((l = t || (t = {})).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        ((o = i || (i = {})).SMALL = "small"),
        (o.LARGE = "large"),
        (o.NONE = "none");
      let _ = {
          primary: m.colorPrimary,
          secondary: m.colorSecondary,
          warning: m.colorWarning,
          error: m.colorError,
        },
        h = { small: m.small, large: m.large, none: null };
      class N extends (s = a.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: l,
            className: o,
            iconClassName: t,
          } = this.props;
          return (0, c.jsxs)(p.Z, {
            className: u()(m.note, _[r], o),
            align: p.Z.Align.CENTER,
            children: [
              (0, c.jsx)(e, {
                className: u()(m.icon, h[l], t),
                color: "currentColor",
              }),
              (0, c.jsx)("div", { children: n }),
            ],
          });
        }
      }
      f(N, "Colors", t), f(N, "Sizes", i), (r.Z = N);
    },
    51499: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return d;
        },
      }),
        n(390547);
      var l = n(200651);
      n(192379);
      var o = n(120356),
        t = n.n(o),
        i = n(481060),
        s = n(563132),
        c = n(409813),
        a = n(574630);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: o,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, s.usePaymentContext)();
        if (null == d || 0 === d.length) return null;
        let p = d.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === p.length
          ? null
          : ((p = p.filter((e) => {
              let r = e.id !== c.h8.ADD_PAYMENT_STEPS,
                l = e.id === c.h8.ADD_PAYMENT_STEPS && !u.current;
              return !n || (n && (r || l));
            })),
            (0, l.jsx)("div", {
              className: t()("breadcrumb", a.wrapper, r),
              children: (0, l.jsx)(i.Breadcrumbs, {
                activeId: o,
                breadcrumbs: p,
              }),
            }));
      }
    },
    614277: function (e, r, n) {
      n.d(r, {
        C3: function () {
          return h;
        },
        O3: function () {
          return N;
        },
        ZP: function () {
          return _;
        },
      });
      var l = n(200651),
        o = n(192379),
        t = n(120356),
        i = n.n(t),
        s = n(512722),
        c = n.n(s),
        a = n(995295),
        d = n(481060),
        u = n(540059),
        p = n(563132),
        m = n(409813),
        f = n(135970);
      function _(e) {
        var r, n, t, s, a, _;
        let {
            header: h,
            isLargeModal: N,
            isDynamicModal: S,
            stepProps: b,
          } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...o } = e;
            return {
              header: r,
              isLargeModal: n,
              isDynamicModal: l,
              stepProps: o,
            };
          })(e),
          {
            step: x,
            stepConfigs: C,
            setBodyNode: E,
            setFooterNode: P,
            setModalOverlayNode: y,
            setReadySlideId: g,
          } = (0, p.usePaymentContext)(),
          v = C.find((e) => e.key === x);
        o.useEffect(() => {
          y(null);
        }, [x, y]),
          c()(null != v, "Unknown step for current payment flow.");
        let j =
            null !==
              (a =
                null == v
                  ? void 0
                  : null === (r = v.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== a &&
            a,
          I =
            null == v
              ? void 0
              : null === (n = v.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          T =
            null == v
              ? void 0
              : null === (t = v.options) || void 0 === t
                ? void 0
                : t.sliderBodyClassName;
        void 0 !== N && N
          ? (T = f.sliderBodyLarge)
          : S && (T = f.sliderBodyDynamic);
        let k = (0, u.Q3)("PaymentModalStep");
        return (0, l.jsxs)(l.Fragment, {
          children: [
            null ===
              (_ =
                null == v
                  ? void 0
                  : null === (s = v.options) || void 0 === s
                    ? void 0
                    : s.renderHeader) ||
            void 0 === _ ||
            _
              ? h
              : null,
            v.renderStep(b),
            null == x || j
              ? null
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(d.ModalContent, {
                      className: i()(
                        I,
                        f.body,
                        f.modalContentOverride,
                        x === m.h8.ADD_PAYMENT_STEPS
                          ? f.addPaymentSteps
                          : void 0,
                      ),
                      children: (0, l.jsx)(d.Slides, {
                        activeSlide: x,
                        centered: !1,
                        onSlideReady: (e) => g(e),
                        width:
                          k && x === m.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                        children: C.filter((e) => null != e.key).map((e) =>
                          (0, l.jsx)(
                            d.Slide,
                            {
                              id: e.key,
                              children: (0, l.jsx)("form", {
                                className: i()(f.sliderBody, T),
                                ref: (e) => E(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, l.jsx)("div", { ref: (e) => P(e) }),
                    (0, l.jsx)("div", { ref: (e) => y(e) }),
                  ],
                }),
          ],
        });
      }
      function h(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, p.usePaymentContext)();
        return null == n ? null : a.createPortal(r, n);
      }
      function N(e) {
        let { children: r } = e,
          { footerNode: n } = (0, p.usePaymentContext)();
        return null == n ? null : a.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return C;
        },
      }),
        n(47120),
        n(411104);
      var l = n(200651),
        o = n(192379),
        t = n(734530),
        i = n(120356),
        s = n.n(i),
        c = n(846519),
        a = n(481060),
        d = n(609194),
        u = n(881052),
        p = n(128069),
        m = n(563132),
        f = n(409813);
      n(51499), n(614277);
      var _ = n(122289),
        h = n(70956),
        N = n(981631),
        S = n(388032),
        b = n(719919);
      let x = new Set([
        f.h8.SKU_SELECT,
        f.h8.AWAITING_AUTHENTICATION,
        f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        f.h8.CONFIRM,
      ]);
      function C(e) {
        let {
            steps: r,
            currentStep: n,
            body: i,
            paymentError: C,
            header: E,
            footer: P,
            isGift: y = !1,
            giftMessage: g = S.intl.string(S.t.DrgnS0),
            hideBreadcrumbs: v = !1,
            isLoading: j = !1,
            purchaseError: I,
            purchaseErrorBlockRef: T,
            planError: k,
            onScroll: A,
            scrollerClassName: M,
            hasCurrencies: R = !1,
          } = e,
          B = null;
        null != C && null == (0, f.ly)(C)
          ? (B = C)
          : null != I
            ? (B = I)
            : null != k && (B = k);
        let D = null != B ? B.message : "";
        null != B &&
          B instanceof u.HF &&
          (B.code === p.SM.CARD_DECLINED &&
            R &&
            (D += " ".concat(S.intl.string(S.t.iWvwQU))),
          B.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (D = S.intl.string(S.t.ypuSd3)),
          B.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (D = S.intl.string(S.t.mXMmWF)));
        let { stripe: L } = (0, m.usePaymentContext)();
        j = j || null == L;
        let O = o.useRef(new c.V7());
        o.useEffect(() => {
          let e = O.current;
          return (
            null != L || e.isStarted()
              ? null != L && e.stop()
              : e.start(10 * h.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, _.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [L]);
        let w = r.includes(f.h8.PAYMENT_TYPE)
          ? f.h8.PAYMENT_TYPE
          : f.h8.ADD_PAYMENT_STEPS;
        return (0, l.jsxs)(t.Elements, {
          options: N.OBo,
          stripe: L,
          children: [
            E,
            (0, l.jsxs)("div", {
              className: s()("paymentModalContent", b.content),
              children: [
                y && n !== f.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: b.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: a.GiftIcon,
                      color:
                        null == g ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: g,
                    })
                  : null,
                v
                  ? null
                  : (0, l.jsx)("div", {
                      className: b.breadcrumbsWrapper,
                      children: (0, l.jsx)(a.Breadcrumbs, {
                        activeId: f.Ck.has(n) ? w : n,
                        breadcrumbs: r
                          .filter((e) => !f.Ck.has(e) && !x.has(e))
                          .map((e) => ({ id: e, label: (0, f.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: b.bodyWrapper,
                  children: [
                    null == B
                      ? null
                      : (0, l.jsx)("div", {
                          className: b.errorBlockWrapper,
                          children: (0, l.jsx)(a.FormErrorBlock, {
                            ref: T,
                            children: D,
                          }),
                        }),
                    j
                      ? (0, l.jsx)(a.Spinner, { className: b.loadingBlock })
                      : (0, l.jsx)(a.Sequencer, {
                          className: b.sequencer,
                          staticClassName: b.sequencerStatic,
                          animatedNodeClassName: b.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(a.AdvancedScrollerThin, {
                            onScroll: A,
                            className: s()(b.scroller, M),
                            children: i,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            P,
          ],
        });
      }
    },
    263954: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return s;
        },
      });
      var l = n(200651);
      n(192379);
      var o = n(120356),
        t = n.n(o),
        i = n(775475);
      function s(e) {
        let { icon: r, iconClassName: n, description: o, color: s } = e;
        return (0, l.jsxs)("div", {
          className: i.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: i.perkIconContainer,
              children: (0, l.jsx)(r, {
                color: null != s ? s : "currentColor",
                className: t()(i.perkIcon, n),
              }),
            }),
            (0, l.jsx)("div", { className: i.perkDescription, children: o }),
          ],
        });
      }
    },
    72691: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return R;
          },
        });
      var l = n(200651),
        o = n(192379),
        t = n(120356),
        i = n.n(t),
        s = n(442837),
        c = n(481060),
        a = n(570140),
        d = n(355467),
        u = n(821849),
        p = n(15640),
        m = n(563132),
        f = n(409813),
        _ = n(104494),
        h = n(639119),
        N = n(165583),
        S = n(197115),
        b = n(185139),
        x = n(263954),
        C = n(706454),
        E = n(853872),
        P = n(930153),
        y = n(74538),
        g = n(937615),
        v = n(981631),
        j = n(474936),
        I = n(388032),
        T = n(866803);
      let k = (e) => {
          let { locale: r } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(x.Z, {
                icon: c.StickerIcon,
                iconClassName: T.iconColorPurple,
                description: I.intl.string(I.t.uAfKTU),
              }),
              (0, l.jsx)(x.Z, {
                icon: c.BoostTier2SimpleIcon,
                iconClassName: T.iconColorPink,
                description: I.intl.formatToPlainString(I.t.sWnv5O, {
                  numGuildSubscriptions: j.cb,
                  discountPercent: (0, P.T3)(r, j.Rr / 100),
                }),
              }),
              (0, l.jsx)(x.Z, {
                icon: c.ReactionIcon,
                iconClassName: T.iconColorYellow,
                description: I.intl.string(I.t.pqHIf3),
              }),
            ],
          });
        },
        A = (e) => {
          let {
              trialOffer: r,
              discountOffer: o,
              isLoading: t,
              price: a,
              onClose: d,
            } = e,
            u = (0, s.e7)([C.default], () => C.default.locale),
            p = null != r || null != o;
          return (0, l.jsxs)("div", {
            className: T.wrapper,
            children: [
              (0, l.jsx)(c.ModalCloseButton, {
                onClick: d,
                className: T.closeButton,
              }),
              p && (0, l.jsx)(N.dz, { className: T.premiumTrialBadge }),
              (0, l.jsx)("img", {
                className: i()(T.heroImage, { [T.heroImageWithTrialOffer]: p }),
                src: n(178632),
                alt: "",
              }),
              t
                ? (0, l.jsx)(c.Spinner, {})
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: T.heading,
                        children:
                          null == a
                            ? (0, l.jsx)(c.Spinner, {
                                type: c.Spinner.Type.PULSING_ELLIPSIS,
                              })
                            : I.intl.format(I.t.TBsJfX, {
                                monthlyPrice: (0, g.T4)(a.amount, a.currency),
                              }),
                      }),
                      (0, l.jsx)("div", {
                        className: T.perks,
                        children: (0, l.jsx)(k, { locale: u }),
                      }),
                    ],
                  }),
            ],
          });
        },
        M = (e) => {
          let { trialOffer: r, discountOffer: n, onClose: o } = e,
            t = { section: v.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
          return (0, l.jsxs)(c.ModalFooter, {
            className: T.footer,
            children: [
              (0, l.jsx)(c.Button, {
                onClick: o,
                size: c.Button.Sizes.SMALL,
                color: c.Button.Colors.PRIMARY,
                look: c.Button.Looks.LINK,
                children: I.intl.string(I.t.cpT0Cg),
              }),
              (0, l.jsx)(S.Z, {
                buttonText:
                  null != r || null != n
                    ? I.intl.string(I.t["Gd/XHB"])
                    : void 0,
                premiumModalAnalyticsLocation: t,
                subscriptionTier: j.Si.TIER_2,
                size: c.Button.Sizes.SMALL,
                color: c.Button.Colors.GREEN,
                onClick: () => {
                  o();
                },
              }),
            ],
          });
        };
      function R(e) {
        let { onClose: r, ...n } = e,
          t = (0, p.V)(),
          i = (0, s.e7)([E.Z], () => E.Z.hasFetchedPaymentSources),
          N = t && i,
          S = (0, h.N)(),
          x = (0, _.Ng)();
        o.useEffect(() => {
          a.Z.wait(() => {
            (0, d.tZ)(), (0, u.Y2)(null, null, v.JjL.DISCOVERY);
          });
        }, []);
        let C = N ? y.ZP.getDefaultPrice(j.Xh.PREMIUM_MONTH_TIER_2) : null;
        return (0, l.jsx)(m.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, l.jsx)(c.ModalRoot, {
            ...n,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            children: (0, l.jsx)(b.Z, {
              hideBreadcrumbs: !0,
              body: (0, l.jsx)(A, {
                trialOffer: S,
                discountOffer: x,
                isLoading: !N,
                price: C,
                onClose: r,
              }),
              footer: (0, l.jsx)(M, {
                trialOffer: S,
                discountOffer: x,
                onClose: r,
              }),
              steps: [f.h8.PREMIUM_UPSELL],
              currentStep: f.h8.PREMIUM_UPSELL,
            }),
          }),
        });
      }
    },
    355787: function (e, r, n) {
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
    574630: function (e, r, n) {
      e.exports = { wrapper: "wrapper_bfc2c6" };
    },
    135970: function (e, r, n) {
      e.exports = {
        body: "body_bf926b",
        modalContentOverride: "modalContentOverride_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    719919: function (e, r, n) {
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
    775475: function (e, r, n) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
    866803: function (e, r, n) {
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
//# sourceMappingURL=f4fbf8f9686ceb3029ee.js.map
