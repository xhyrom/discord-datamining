"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89675"],
  {
    438471: function (e) {
      e.exports = "/assets/75f8d0fe6b6ba49eb369.svg";
    },
    609194: function (e, r, n) {
      var l,
        o,
        t,
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
      ((l = t || (t = {})).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        ((o = s || (s = {})).SMALL = "small"),
        (o.LARGE = "large"),
        (o.NONE = "none");
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
            className: o,
            iconClassName: t,
          } = this.props;
          return (0, c.jsxs)(p.Z, {
            className: u()(m.note, h[r], o),
            align: p.Z.Align.CENTER,
            children: [
              (0, c.jsx)(e, {
                className: u()(m.icon, _[l], t),
                color: "currentColor",
              }),
              (0, c.jsx)("div", { children: n }),
            ],
          });
        }
      }
      f(x, "Colors", t), f(x, "Sizes", s), (r.Z = x);
    },
    146747: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return C;
          },
        });
      var l = n(200651),
        o = n(192379),
        t = n(481060),
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
      function y(e) {
        let { title: r, subtitle: n, image: o } = e;
        return (0, l.jsxs)("div", {
          className: _.header,
          children: [
            (0, l.jsx)(t.Heading, {
              variant: "heading-xl/semibold",
              id: N,
              color: "header-primary",
              className: x.marginBottom8,
              children: r,
            }),
            (0, l.jsx)(t.Text, {
              variant: "text-md/normal",
              className: _.subtitleText,
              children: n,
            }),
            o,
          ],
        });
      }
      let b = (e) => {
          let {
            onClose: r,
            perks: n,
            perkIntro: o = h.intl.string(h.t.Dr3Goa),
            headerProps: s,
          } = e;
          return (0, l.jsxs)("div", {
            className: _.wrapper,
            children: [
              (0, l.jsx)(t.ModalCloseButton, {
                className: _.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, l.jsx)(v, { headerProps: s, perkIntro: o }),
              (0, l.jsx)("div", {
                className: _.perks,
                children: n.map((e, r) => {
                  let {
                    icon: n,
                    iconClassName: o,
                    description: t,
                    color: s,
                  } = e;
                  return (0, l.jsx)(
                    u.Z,
                    { icon: n, iconClassName: o, description: t, color: s },
                    r,
                  );
                }),
              }),
            ],
          });
        },
        v = (e) => {
          let { headerProps: r, perkIntro: s } = e;
          return (0, l.jsxs)(o.Fragment, {
            children: [
              null != r
                ? (0, l.jsx)(y, { ...r })
                : (0, l.jsx)("img", {
                    className: _.heroImage,
                    src: n(438471),
                    alt: h.intl.string(h.t.PkcaAA),
                  }),
              (0, l.jsx)(t.Text, {
                variant: "text-md/normal",
                className: _.heading,
                children: s,
              }),
            ],
          });
        },
        S = (e) => {
          let {
              guild: r,
              targetBoostedGuildTier: n,
              onClose: o,
              analyticsSourceLocation: s,
            } = e,
            a = {
              section: f.jXE.PREMIUM_GUILD_UPSELL_MODAL,
              object: f.qAy.BUTTON_CTA,
              objectType: null != n ? (0, p.ge)(n) : null,
            };
          return (0, l.jsxs)(t.ModalFooter, {
            className: _.footer,
            children: [
              (0, l.jsx)(t.Button, {
                size: t.Button.Sizes.SMALL,
                color: t.Button.Colors.PRIMARY,
                look: t.Button.Looks.LINK,
                onClick: () => {
                  o();
                },
                children: h.intl.string(h.t.cpT0Cg),
              }),
              (0, l.jsx)(m.Z, {
                analyticsLocation: a,
                analyticsSourceLocation: s,
                guild: r,
                targetBoostedGuildTier: n,
                onClose: () => {
                  o();
                },
              }),
            ],
          });
        };
      function C(e) {
        let {
            analyticsSourceLocation: r,
            guild: n,
            targetBoostedGuildTier: o,
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
            children: (0, l.jsx)(t.ModalRoot, {
              ...h,
              "aria-labelledby": N,
              children: (0, l.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(b, {
                  onClose: f,
                  perks: u,
                  perkIntro: p,
                  headerProps: m,
                }),
                footer: (0, l.jsx)(S, {
                  guild: n,
                  targetBoostedGuildTier: o,
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
      var o = n(120356),
        t = n.n(o),
        s = n(481060),
        a = n(563132),
        c = n(409813),
        i = n(574630);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: o,
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
              className: t()("breadcrumb", i.wrapper, r),
              children: (0, l.jsx)(s.Breadcrumbs, {
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
          return _;
        },
        ZP: function () {
          return f;
        },
      });
      var l = n(200651),
        o = n(192379),
        t = n(120356),
        s = n.n(t),
        a = n(512722),
        c = n.n(a),
        i = n(995295),
        d = n(481060),
        u = n(563132),
        p = n(409813),
        m = n(135970);
      function f(e) {
        var r, n, t, a, i, f;
        let {
            header: h,
            isLargeModal: _,
            isDynamicModal: x,
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
            step: y,
            stepConfigs: b,
            setBodyNode: v,
            setFooterNode: S,
            setModalOverlayNode: C,
            setReadySlideId: g,
          } = (0, u.usePaymentContext)(),
          j = b.find((e) => e.key === y);
        o.useEffect(() => {
          C(null);
        }, [y, C]),
          c()(null != j, "Unknown step for current payment flow.");
        let E =
            null !==
              (i =
                null == j
                  ? void 0
                  : null === (r = j.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== i &&
            i,
          P =
            null == j
              ? void 0
              : null === (n = j.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          A =
            null == j
              ? void 0
              : null === (t = j.options) || void 0 === t
                ? void 0
                : t.sliderBodyClassName;
        return (
          void 0 !== _ && _
            ? (A = m.sliderBodyLarge)
            : x && (A = m.sliderBodyDynamic),
          (0, l.jsxs)(l.Fragment, {
            children: [
              null ===
                (f =
                  null == j
                    ? void 0
                    : null === (a = j.options) || void 0 === a
                      ? void 0
                      : a.renderHeader) ||
              void 0 === f ||
              f
                ? h
                : null,
              j.renderStep(N),
              null == y || E
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(d.ModalContent, {
                        className: s()(
                          P,
                          m.body,
                          m.modalContentOverride,
                          y === p.h8.ADD_PAYMENT_STEPS
                            ? m.addPaymentSteps
                            : void 0,
                        ),
                        children: (0, l.jsx)(d.Slides, {
                          activeSlide: y,
                          centered: !1,
                          onSlideReady: (e) => g(e),
                          children: b
                            .filter((e) => null != e.key)
                            .map((e) =>
                              (0, l.jsx)(
                                d.Slide,
                                {
                                  id: e.key,
                                  children: (0, l.jsx)("form", {
                                    className: s()(m.sliderBody, A),
                                    ref: (e) => v(e),
                                    onSubmit: (e) => e.preventDefault(),
                                  }),
                                },
                                e.key,
                              ),
                            ),
                        }),
                      }),
                      (0, l.jsx)("div", { ref: (e) => S(e) }),
                      (0, l.jsx)("div", { ref: (e) => C(e) }),
                    ],
                  }),
            ],
          })
        );
      }
      function h(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
      function _(e) {
        let { children: r } = e,
          { footerNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return v;
        },
      }),
        n(47120),
        n(411104);
      var l = n(200651),
        o = n(192379),
        t = n(734530),
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
        y = n(719919);
      let b = new Set([
        f.h8.SKU_SELECT,
        f.h8.AWAITING_AUTHENTICATION,
        f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        f.h8.CONFIRM,
      ]);
      function v(e) {
        let {
            steps: r,
            currentStep: n,
            body: s,
            paymentError: v,
            header: S,
            footer: C,
            isGift: g = !1,
            giftMessage: j = N.intl.string(N.t.DrgnS0),
            hideBreadcrumbs: E = !1,
            isLoading: P = !1,
            purchaseError: A,
            purchaseErrorBlockRef: I,
            planError: k,
            onScroll: T,
            scrollerClassName: B,
            hasCurrencies: D = !1,
          } = e,
          M = null;
        null != v && null == (0, f.ly)(v)
          ? (M = v)
          : null != A
            ? (M = A)
            : null != k && (M = k);
        let R = null != M ? M.message : "";
        null != M &&
          M instanceof u.HF &&
          (M.code === p.SM.CARD_DECLINED &&
            D &&
            (R += " ".concat(N.intl.string(N.t.iWvwQU))),
          M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (R = N.intl.string(N.t.ypuSd3)),
          M.code === x.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (R = N.intl.string(N.t.mXMmWF)));
        let { stripe: L } = (0, m.usePaymentContext)();
        P = P || null == L;
        let O = o.useRef(new c.V7());
        o.useEffect(() => {
          let e = O.current;
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
        let w = r.includes(f.h8.PAYMENT_TYPE)
          ? f.h8.PAYMENT_TYPE
          : f.h8.ADD_PAYMENT_STEPS;
        return (0, l.jsxs)(t.Elements, {
          options: x.OBo,
          stripe: L,
          children: [
            S,
            (0, l.jsxs)("div", {
              className: a()("paymentModalContent", y.content),
              children: [
                g && n !== f.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: y.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == j ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: j,
                    })
                  : null,
                E
                  ? null
                  : (0, l.jsx)("div", {
                      className: y.breadcrumbsWrapper,
                      children: (0, l.jsx)(i.Breadcrumbs, {
                        activeId: f.Ck.has(n) ? w : n,
                        breadcrumbs: r
                          .filter((e) => !f.Ck.has(e) && !b.has(e))
                          .map((e) => ({ id: e, label: (0, f.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: y.bodyWrapper,
                  children: [
                    null == M
                      ? null
                      : (0, l.jsx)("div", {
                          className: y.errorBlockWrapper,
                          children: (0, l.jsx)(i.FormErrorBlock, {
                            ref: I,
                            children: R,
                          }),
                        }),
                    P
                      ? (0, l.jsx)(i.Spinner, { className: y.loadingBlock })
                      : (0, l.jsx)(i.Sequencer, {
                          className: y.sequencer,
                          staticClassName: y.sequencerStatic,
                          animatedNodeClassName: y.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(i.AdvancedScrollerThin, {
                            onScroll: T,
                            className: a()(y.scroller, B),
                            children: s,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            C,
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
      var o = n(120356),
        t = n.n(o),
        s = n(775475);
      function a(e) {
        let { icon: r, iconClassName: n, description: o, color: a } = e;
        return (0, l.jsxs)("div", {
          className: s.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: s.perkIconContainer,
              children: (0, l.jsx)(r, {
                color: null != a ? a : "currentColor",
                className: t()(s.perkIcon, n),
              }),
            }),
            (0, l.jsx)("div", { className: s.perkDescription, children: o }),
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
  },
]);
//# sourceMappingURL=5ea0e9b184303c3f76c1.js.map
