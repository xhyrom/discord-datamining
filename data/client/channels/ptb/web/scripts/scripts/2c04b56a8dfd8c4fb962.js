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
        c,
        s = n(200651),
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
      class N extends (c = a.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: l,
            className: o,
            iconClassName: t,
          } = this.props;
          return (0, s.jsxs)(p.Z, {
            className: u()(m.note, _[r], o),
            align: p.Z.Align.CENTER,
            children: [
              (0, s.jsx)(e, {
                className: u()(m.icon, h[l], t),
                color: "currentColor",
              }),
              (0, s.jsx)("div", { children: n }),
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
        c = n(563132),
        s = n(409813),
        a = n(574630);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: o,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, c.usePaymentContext)();
        if (null == d || 0 === d.length) return null;
        let p = d.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === p.length
          ? null
          : ((p = p.filter((e) => {
              let r = e.id !== s.h8.ADD_PAYMENT_STEPS,
                l = e.id === s.h8.ADD_PAYMENT_STEPS && !u.current;
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
          return f;
        },
        O3: function () {
          return _;
        },
        ZP: function () {
          return m;
        },
      });
      var l = n(200651),
        o = n(192379),
        t = n(120356),
        i = n.n(t),
        c = n(512722),
        s = n.n(c),
        a = n(995295),
        d = n(481060),
        u = n(563132),
        p = n(135970);
      function m(e) {
        var r, n, t, c, a, m;
        let {
            header: f,
            isLargeModal: _,
            isDynamicModal: h,
            stepProps: N,
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
            setBodyNode: b,
            setFooterNode: S,
            setModalOverlayNode: E,
            setReadySlideId: g,
          } = (0, u.usePaymentContext)(),
          y = C.find((e) => e.key === x);
        o.useEffect(() => {
          E(null);
        }, [x, E]),
          s()(null != y, "Unknown step for current payment flow.");
        let v =
            null !==
              (a =
                null == y
                  ? void 0
                  : null === (r = y.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== a &&
            a,
          P =
            null == y
              ? void 0
              : null === (n = y.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          j =
            null == y
              ? void 0
              : null === (t = y.options) || void 0 === t
                ? void 0
                : t.sliderBodyClassName;
        return (
          void 0 !== _ && _
            ? (j = p.sliderBodyLarge)
            : h && (j = p.sliderBodyDynamic),
          (0, l.jsxs)(l.Fragment, {
            children: [
              null ===
                (m =
                  null == y
                    ? void 0
                    : null === (c = y.options) || void 0 === c
                      ? void 0
                      : c.renderHeader) ||
              void 0 === m ||
              m
                ? f
                : null,
              y.renderStep(N),
              null == x || v
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(d.ModalContent, {
                        className: i()(P, p.body, p.modalContentOverride),
                        children: (0, l.jsx)(d.Slides, {
                          activeSlide: x,
                          centered: !1,
                          onSlideReady: (e) => g(e),
                          children: C.filter((e) => null != e.key).map((e) =>
                            (0, l.jsx)(
                              d.Slide,
                              {
                                id: e.key,
                                children: (0, l.jsx)("form", {
                                  className: i()(p.sliderBody, j),
                                  ref: (e) => b(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                        }),
                      }),
                      (0, l.jsx)("div", { ref: (e) => S(e) }),
                      (0, l.jsx)("div", { ref: (e) => E(e) }),
                    ],
                  }),
            ],
          })
        );
      }
      function f(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : a.createPortal(r, n);
      }
      function _(e) {
        let { children: r } = e,
          { footerNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : a.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return S;
        },
      }),
        n(47120),
        n(411104);
      var l = n(200651),
        o = n(192379),
        t = n(734530),
        i = n(120356),
        c = n.n(i),
        s = n(846519),
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
        x = n(388032),
        C = n(719919);
      let b = new Set([
        f.h8.SKU_SELECT,
        f.h8.AWAITING_AUTHENTICATION,
        f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        f.h8.CONFIRM,
      ]);
      function S(e) {
        let {
            steps: r,
            currentStep: n,
            body: i,
            paymentError: S,
            header: E,
            footer: g,
            isGift: y = !1,
            giftMessage: v = x.intl.string(x.t.DrgnS0),
            hideBreadcrumbs: P = !1,
            isLoading: j = !1,
            purchaseError: I,
            purchaseErrorBlockRef: k,
            planError: T,
            onScroll: R,
            scrollerClassName: A,
            hasCurrencies: B = !1,
          } = e,
          M = null;
        null != S && null == (0, f.ly)(S)
          ? (M = S)
          : null != I
            ? (M = I)
            : null != T && (M = T);
        let L = null != M ? M.message : "";
        null != M &&
          M instanceof u.HF &&
          (M.code === p.SM.CARD_DECLINED &&
            B &&
            (L += " ".concat(x.intl.string(x.t.iWvwQU))),
          M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (L = x.intl.string(x.t.ypuSd3)),
          M.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (L = x.intl.string(x.t.mXMmWF)));
        let { stripe: D } = (0, m.usePaymentContext)();
        j = j || null == D;
        let O = o.useRef(new s.V7());
        o.useEffect(() => {
          let e = O.current;
          return (
            null != D || e.isStarted()
              ? null != D && e.stop()
              : e.start(10 * h.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, _.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [D]);
        let w = r.includes(f.h8.PAYMENT_TYPE)
          ? f.h8.PAYMENT_TYPE
          : f.h8.ADD_PAYMENT_STEPS;
        return (0, l.jsxs)(t.Elements, {
          options: N.OBo,
          stripe: D,
          children: [
            E,
            (0, l.jsxs)("div", {
              className: c()("paymentModalContent", C.content),
              children: [
                y && n !== f.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: C.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: a.GiftIcon,
                      color:
                        null == v ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: v,
                    })
                  : null,
                P
                  ? null
                  : (0, l.jsx)("div", {
                      className: C.breadcrumbsWrapper,
                      children: (0, l.jsx)(a.Breadcrumbs, {
                        activeId: f.Ck.has(n) ? w : n,
                        breadcrumbs: r
                          .filter((e) => !f.Ck.has(e) && !b.has(e))
                          .map((e) => ({ id: e, label: (0, f.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: C.bodyWrapper,
                  children: [
                    null == M
                      ? null
                      : (0, l.jsx)("div", {
                          className: C.errorBlockWrapper,
                          children: (0, l.jsx)(a.FormErrorBlock, {
                            ref: k,
                            children: L,
                          }),
                        }),
                    j
                      ? (0, l.jsx)(a.Spinner, { className: C.loadingBlock })
                      : (0, l.jsx)(a.Sequencer, {
                          className: C.sequencer,
                          staticClassName: C.sequencerStatic,
                          animatedNodeClassName: C.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(a.AdvancedScrollerThin, {
                            onScroll: R,
                            className: c()(C.scroller, A),
                            children: i,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            g,
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
      var l = n(200651);
      n(192379);
      var o = n(120356),
        t = n.n(o),
        i = n(775475);
      function c(e) {
        let { icon: r, iconClassName: n, description: o, color: c } = e;
        return (0, l.jsxs)("div", {
          className: i.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: i.perkIconContainer,
              children: (0, l.jsx)(r, {
                color: null != c ? c : "currentColor",
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
            return B;
          },
        });
      var l = n(200651),
        o = n(192379),
        t = n(120356),
        i = n.n(t),
        c = n(442837),
        s = n(481060),
        a = n(570140),
        d = n(355467),
        u = n(821849),
        p = n(15640),
        m = n(563132),
        f = n(409813),
        _ = n(104494),
        h = n(639119),
        N = n(165583),
        x = n(197115),
        C = n(185139),
        b = n(263954),
        S = n(706454),
        E = n(853872),
        g = n(930153),
        y = n(74538),
        v = n(937615),
        P = n(981631),
        j = n(474936),
        I = n(388032),
        k = n(866803);
      let T = (e) => {
          let { locale: r } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(b.Z, {
                icon: s.StickerIcon,
                iconClassName: k.iconColorPurple,
                description: I.intl.string(I.t.uAfKTU),
              }),
              (0, l.jsx)(b.Z, {
                icon: s.BoostTier2SimpleIcon,
                iconClassName: k.iconColorPink,
                description: I.intl.formatToPlainString(I.t.sWnv5O, {
                  numGuildSubscriptions: j.cb,
                  discountPercent: (0, g.T3)(r, j.Rr / 100),
                }),
              }),
              (0, l.jsx)(b.Z, {
                icon: s.ReactionIcon,
                iconClassName: k.iconColorYellow,
                description: I.intl.string(I.t.pqHIf3),
              }),
            ],
          });
        },
        R = (e) => {
          let {
              trialOffer: r,
              discountOffer: o,
              isLoading: t,
              price: a,
              onClose: d,
            } = e,
            u = (0, c.e7)([S.default], () => S.default.locale),
            p = null != r || null != o;
          return (0, l.jsxs)("div", {
            className: k.wrapper,
            children: [
              (0, l.jsx)(s.ModalCloseButton, {
                onClick: d,
                className: k.closeButton,
              }),
              p && (0, l.jsx)(N.dz, { className: k.premiumTrialBadge }),
              (0, l.jsx)("img", {
                className: i()(k.heroImage, { [k.heroImageWithTrialOffer]: p }),
                src: n(178632),
                alt: "",
              }),
              t
                ? (0, l.jsx)(s.Spinner, {})
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        className: k.heading,
                        children:
                          null == a
                            ? (0, l.jsx)(s.Spinner, {
                                type: s.Spinner.Type.PULSING_ELLIPSIS,
                              })
                            : I.intl.format(I.t.TBsJfX, {
                                monthlyPrice: (0, v.T4)(a.amount, a.currency),
                              }),
                      }),
                      (0, l.jsx)("div", {
                        className: k.perks,
                        children: (0, l.jsx)(T, { locale: u }),
                      }),
                    ],
                  }),
            ],
          });
        },
        A = (e) => {
          let { trialOffer: r, discountOffer: n, onClose: o } = e,
            t = { section: P.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
          return (0, l.jsxs)(s.ModalFooter, {
            className: k.footer,
            children: [
              (0, l.jsx)(s.Button, {
                onClick: o,
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                children: I.intl.string(I.t.cpT0Cg),
              }),
              (0, l.jsx)(x.Z, {
                buttonText:
                  null != r || null != n
                    ? I.intl.string(I.t["Gd/XHB"])
                    : void 0,
                premiumModalAnalyticsLocation: t,
                subscriptionTier: j.Si.TIER_2,
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.GREEN,
                onClick: () => {
                  o();
                },
              }),
            ],
          });
        };
      function B(e) {
        let { onClose: r, ...n } = e,
          t = (0, p.V)(),
          i = (0, c.e7)([E.Z], () => E.Z.hasFetchedPaymentSources),
          N = t && i,
          x = (0, h.N)(),
          b = (0, _.Ng)();
        o.useEffect(() => {
          a.Z.wait(() => {
            (0, d.tZ)(), (0, u.Y2)(null, null, P.JjL.DISCOVERY);
          });
        }, []);
        let S = N ? y.ZP.getDefaultPrice(j.Xh.PREMIUM_MONTH_TIER_2) : null;
        return (0, l.jsx)(m.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, l.jsx)(s.ModalRoot, {
            ...n,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            children: (0, l.jsx)(C.Z, {
              hideBreadcrumbs: !0,
              body: (0, l.jsx)(R, {
                trialOffer: x,
                discountOffer: b,
                isLoading: !N,
                price: S,
                onClose: r,
              }),
              footer: (0, l.jsx)(A, {
                trialOffer: x,
                discountOffer: b,
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
//# sourceMappingURL=2c04b56a8dfd8c4fb962.js.map
