"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89675"],
  {
    438471: function (e) {
      e.exports = "/assets/75f8d0fe6b6ba49eb369.svg";
    },
    609194: function (e, r, n) {
      var l,
        t,
        o,
        s,
        a,
        c = n(200651),
        i = n(192379),
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
      ((l = o || (o = {})).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        ((t = s || (s = {})).SMALL = "small"),
        (t.LARGE = "large"),
        (t.NONE = "none");
      let h = {
          primary: m.colorPrimary,
          secondary: m.colorSecondary,
          warning: m.colorWarning,
          error: m.colorError,
        },
        _ = { small: m.small, large: m.large, none: null };
      class x extends (a = i.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: l,
            className: t,
            iconClassName: o,
          } = this.props;
          return (0, c.jsxs)(p.Z, {
            className: u()(m.note, h[r], t),
            align: p.Z.Align.CENTER,
            children: [
              (0, c.jsx)(e, {
                className: u()(m.icon, _[l], o),
                color: "currentColor",
              }),
              (0, c.jsx)("div", { children: n }),
            ],
          });
        }
      }
      f(x, "Colors", o), f(x, "Sizes", s), (r.Z = x);
    },
    146747: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return E;
          },
        });
      var l = n(200651),
        t = n(192379),
        o = n(481060),
        s = n(100527),
        a = n(906732),
        c = n(563132),
        i = n(409813),
        d = n(185139),
        u = n(263954),
        p = n(267642),
        m = n(678558),
        f = n(981631),
        h = n(388032),
        _ = n(316798),
        x = n(232186);
      let N = "premium-guild-subscription-upsell-modal-header";
      function S(e) {
        let { title: r, subtitle: n, image: t } = e;
        return (0, l.jsxs)("div", {
          className: _.header,
          children: [
            (0, l.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              id: N,
              color: "header-primary",
              className: x.marginBottom8,
              children: r,
            }),
            (0, l.jsx)(o.Text, {
              variant: "text-md/normal",
              className: _.subtitleText,
              children: n,
            }),
            t,
          ],
        });
      }
      let y = (e) => {
          let {
            onClose: r,
            perks: n,
            perkIntro: t = h.intl.string(h.t.Dr3Goa),
            headerProps: s,
          } = e;
          return (0, l.jsxs)("div", {
            className: _.wrapper,
            children: [
              (0, l.jsx)(o.ModalCloseButton, {
                className: _.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, l.jsx)(b, { headerProps: s, perkIntro: t }),
              (0, l.jsx)("div", {
                className: _.perks,
                children: n.map((e, r) => {
                  let {
                    icon: n,
                    iconClassName: t,
                    description: o,
                    color: s,
                  } = e;
                  return (0, l.jsx)(
                    u.Z,
                    { icon: n, iconClassName: t, description: o, color: s },
                    r,
                  );
                }),
              }),
            ],
          });
        },
        b = (e) => {
          let { headerProps: r, perkIntro: s } = e;
          return (0, l.jsxs)(t.Fragment, {
            children: [
              null != r
                ? (0, l.jsx)(S, { ...r })
                : (0, l.jsx)("img", {
                    className: _.heroImage,
                    src: n(438471),
                    alt: h.intl.string(h.t.PkcaAA),
                  }),
              (0, l.jsx)(o.Text, {
                variant: "text-md/normal",
                className: _.heading,
                children: s,
              }),
            ],
          });
        },
        v = (e) => {
          let {
              guild: r,
              targetBoostedGuildTier: n,
              onClose: t,
              analyticsSourceLocation: s,
            } = e,
            a = {
              section: f.jXE.PREMIUM_GUILD_UPSELL_MODAL,
              object: f.qAy.BUTTON_CTA,
              objectType: null != n ? (0, p.ge)(n) : null,
            };
          return (0, l.jsxs)(o.ModalFooter, {
            className: _.footer,
            children: [
              (0, l.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.PRIMARY,
                look: o.Button.Looks.LINK,
                onClick: () => {
                  t();
                },
                children: h.intl.string(h.t.cpT0Cg),
              }),
              (0, l.jsx)(m.Z, {
                analyticsLocation: a,
                analyticsSourceLocation: s,
                guild: r,
                targetBoostedGuildTier: n,
                onClose: () => {
                  t();
                },
              }),
            ],
          });
        };
      function E(e) {
        let {
            analyticsSourceLocation: r,
            guild: n,
            targetBoostedGuildTier: t,
            perks: u,
            perkIntro: p,
            headerProps: m,
            onClose: f,
            ...h
          } = e,
          { analyticsLocations: _ } = (0, a.ZP)(s.Z.ACTIVITY_DIRECTORY);
        return (0, l.jsx)(a.Gt, {
          value: _,
          children: (0, l.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(o.ModalRoot, {
              ...h,
              "aria-labelledby": N,
              children: (0, l.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(y, {
                  onClose: f,
                  perks: u,
                  perkIntro: p,
                  headerProps: m,
                }),
                footer: (0, l.jsx)(v, {
                  guild: n,
                  targetBoostedGuildTier: t,
                  onClose: f,
                  analyticsSourceLocation: r,
                }),
                steps: [i.h8.PREMIUM_GUILD_UPSELL],
                currentStep: i.h8.PREMIUM_GUILD_UPSELL,
              }),
            }),
          }),
        });
      }
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
      var t = n(120356),
        o = n.n(t),
        s = n(481060),
        a = n(563132),
        c = n(409813),
        i = n(574630);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: t,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, a.usePaymentContext)();
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
              className: o()("breadcrumb", i.wrapper, r),
              children: (0, l.jsx)(s.Breadcrumbs, {
                activeId: t,
                breadcrumbs: p,
              }),
            }));
      }
    },
    614277: function (e, r, n) {
      n.d(r, {
        C3: function () {
          return _;
        },
        O3: function () {
          return x;
        },
        ZP: function () {
          return h;
        },
      });
      var l = n(200651),
        t = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(512722),
        c = n.n(a),
        i = n(995295),
        d = n(481060),
        u = n(540059),
        p = n(563132),
        m = n(409813),
        f = n(135970);
      function h(e) {
        var r, n, o, a, i, h;
        let {
            header: _,
            isLargeModal: x,
            isDynamicModal: N,
            stepProps: S,
          } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...t } = e;
            return {
              header: r,
              isLargeModal: n,
              isDynamicModal: l,
              stepProps: t,
            };
          })(e),
          {
            step: y,
            stepConfigs: b,
            setBodyNode: v,
            setFooterNode: E,
            setModalOverlayNode: g,
            setReadySlideId: j,
          } = (0, p.usePaymentContext)(),
          C = b.find((e) => e.key === y);
        t.useEffect(() => {
          g(null);
        }, [y, g]),
          c()(null != C, "Unknown step for current payment flow.");
        let P =
            null !==
              (i =
                null == C
                  ? void 0
                  : null === (r = C.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== i &&
            i,
          A =
            null == C
              ? void 0
              : null === (n = C.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          I =
            null == C
              ? void 0
              : null === (o = C.options) || void 0 === o
                ? void 0
                : o.sliderBodyClassName;
        void 0 !== x && x
          ? (I = f.sliderBodyLarge)
          : N && (I = f.sliderBodyDynamic);
        let k = (0, u.Q3)("PaymentModalStep");
        return (0, l.jsxs)(l.Fragment, {
          children: [
            null ===
              (h =
                null == C
                  ? void 0
                  : null === (a = C.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === h ||
            h
              ? _
              : null,
            C.renderStep(S),
            null == y || P
              ? null
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(d.ModalContent, {
                      className: s()(A, f.body, {
                        [f.reviewStep]: y === m.h8.REVIEW,
                        [f.addPaymentSteps]: y === m.h8.ADD_PAYMENT_STEPS,
                      }),
                      children: (0, l.jsx)(d.Slides, {
                        activeSlide: y,
                        centered: !1,
                        onSlideReady: (e) => j(e),
                        width:
                          k && y === m.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                        children: b
                          .filter((e) => null != e.key)
                          .map((e) =>
                            (0, l.jsx)(
                              d.Slide,
                              {
                                id: e.key,
                                children: (0, l.jsx)("form", {
                                  className: s()(f.sliderBody, I),
                                  ref: (e) => v(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                      }),
                    }),
                    (0, l.jsx)("div", { ref: (e) => E(e) }),
                    (0, l.jsx)("div", { ref: (e) => g(e) }),
                  ],
                }),
          ],
        });
      }
      function _(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, p.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
      function x(e) {
        let { children: r } = e,
          { footerNode: n } = (0, p.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return b;
        },
      }),
        n(47120),
        n(411104);
      var l = n(200651),
        t = n(192379),
        o = n(734530),
        s = n(120356),
        a = n.n(s),
        c = n(846519),
        i = n(481060),
        d = n(609194),
        u = n(881052),
        p = n(128069),
        m = n(563132),
        f = n(409813);
      n(51499), n(614277);
      var h = n(122289),
        _ = n(70956),
        x = n(981631),
        N = n(388032),
        S = n(719919);
      let y = new Set([
        f.h8.SKU_SELECT,
        f.h8.AWAITING_AUTHENTICATION,
        f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        f.h8.CONFIRM,
      ]);
      function b(e) {
        let {
            steps: r,
            currentStep: n,
            body: s,
            paymentError: b,
            header: v,
            footer: E,
            isGift: g = !1,
            giftMessage: j = N.intl.string(N.t.DrgnS0),
            hideBreadcrumbs: C = !1,
            isLoading: P = !1,
            purchaseError: A,
            purchaseErrorBlockRef: I,
            planError: k,
            onScroll: T,
            scrollerClassName: D,
            hasCurrencies: B = !1,
          } = e,
          M = null;
        null != b && null == (0, f.ly)(b)
          ? (M = b)
          : null != A
            ? (M = A)
            : null != k && (M = k);
        let R = null != M ? M.message : "";
        null != M &&
          M instanceof u.HF &&
          (M.code === p.SM.CARD_DECLINED &&
            B &&
            (R += " ".concat(N.intl.string(N.t.iWvwQU))),
          M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (R = N.intl.string(N.t.ypuSd3)),
          M.code === x.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (R = N.intl.string(N.t.mXMmWF)));
        let { stripe: L } = (0, m.usePaymentContext)();
        P = P || null == L;
        let w = t.useRef(new c.V7());
        t.useEffect(() => {
          let e = w.current;
          return (
            null != L || e.isStarted()
              ? null != L && e.stop()
              : e.start(10 * _.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, h.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [L]);
        let U = r.includes(f.h8.PAYMENT_TYPE)
          ? f.h8.PAYMENT_TYPE
          : f.h8.ADD_PAYMENT_STEPS;
        return (0, l.jsxs)(o.Elements, {
          options: x.OBo,
          stripe: L,
          children: [
            v,
            (0, l.jsxs)("div", {
              className: a()("paymentModalContent", S.content),
              children: [
                g && n !== f.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: S.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == j ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: j,
                    })
                  : null,
                C
                  ? null
                  : (0, l.jsx)("div", {
                      className: S.breadcrumbsWrapper,
                      children: (0, l.jsx)(i.Breadcrumbs, {
                        activeId: f.Ck.has(n) ? U : n,
                        breadcrumbs: r
                          .filter((e) => !f.Ck.has(e) && !y.has(e))
                          .map((e) => ({ id: e, label: (0, f.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: S.bodyWrapper,
                  children: [
                    null == M
                      ? null
                      : (0, l.jsx)("div", {
                          className: S.errorBlockWrapper,
                          children: (0, l.jsx)(i.FormErrorBlock, {
                            ref: I,
                            children: R,
                          }),
                        }),
                    P
                      ? (0, l.jsx)(i.Spinner, { className: S.loadingBlock })
                      : (0, l.jsx)(i.Sequencer, {
                          className: S.sequencer,
                          staticClassName: S.sequencerStatic,
                          animatedNodeClassName: S.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(i.AdvancedScrollerThin, {
                            onScroll: T,
                            className: a()(S.scroller, D),
                            children: s,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            E,
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
      var l = n(200651);
      n(192379);
      var t = n(120356),
        o = n.n(t),
        s = n(775475);
      function a(e) {
        let { icon: r, iconClassName: n, description: t, color: a } = e;
        return (0, l.jsxs)("div", {
          className: s.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: s.perkIconContainer,
              children: (0, l.jsx)(r, {
                color: null != a ? a : "currentColor",
                className: o()(s.perkIcon, n),
              }),
            }),
            (0, l.jsx)("div", { className: s.perkDescription, children: t }),
          ],
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
    316798: function (e, r, n) {
      e.exports = {
        wrapper: "wrapper_fcea2f",
        heroImage: "heroImage_fcea2f",
        closeButton: "closeButton_fcea2f",
        heading: "heading_fcea2f",
        perks: "perks_fcea2f",
        footer: "footer_fcea2f",
        header: "header_fcea2f",
        subtitleText: "subtitleText_fcea2f",
      };
    },
    574630: function (e, r, n) {
      e.exports = { wrapper: "wrapper_bfc2c6" };
    },
    135970: function (e, r, n) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
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
  },
]);
//# sourceMappingURL=cc97dff1846c39e035f9.js.map
