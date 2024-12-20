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
        x = { small: m.small, large: m.large, none: null };
      class _ extends (a = i.PureComponent) {
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
                className: u()(m.icon, x[l], t),
                color: "currentColor",
              }),
              (0, c.jsx)("div", { children: n }),
            ],
          });
        }
      }
      f(_, "Colors", t), f(_, "Sizes", s), (r.Z = _);
    },
    146747: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return g;
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
        x = n(316798),
        _ = n(232186);
      let N = "premium-guild-subscription-upsell-modal-header";
      function b(e) {
        let { title: r, subtitle: n, image: o } = e;
        return (0, l.jsxs)("div", {
          className: x.header,
          children: [
            (0, l.jsx)(t.Heading, {
              variant: "heading-xl/semibold",
              id: N,
              color: "header-primary",
              className: _.marginBottom8,
              children: r,
            }),
            (0, l.jsx)(t.Text, {
              variant: "text-md/normal",
              className: x.subtitleText,
              children: n,
            }),
            o,
          ],
        });
      }
      let v = (e) => {
          let {
            onClose: r,
            perks: n,
            perkIntro: o = h.intl.string(h.t.Dr3Goa),
            headerProps: s,
          } = e;
          return (0, l.jsxs)("div", {
            className: x.wrapper,
            children: [
              (0, l.jsx)(t.ModalCloseButton, {
                className: x.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, l.jsx)(y, { headerProps: s, perkIntro: o }),
              (0, l.jsx)("div", {
                className: x.perks,
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
        y = (e) => {
          let { headerProps: r, perkIntro: s } = e;
          return (0, l.jsxs)(o.Fragment, {
            children: [
              null != r
                ? (0, l.jsx)(b, { ...r })
                : (0, l.jsx)("img", {
                    className: x.heroImage,
                    src: n(438471),
                    alt: h.intl.string(h.t.PkcaAA),
                  }),
              (0, l.jsx)(t.Text, {
                variant: "text-md/normal",
                className: x.heading,
                children: s,
              }),
            ],
          });
        },
        C = (e) => {
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
            className: x.footer,
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
      function g(e) {
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
          { analyticsLocations: x } = (0, a.ZP)(s.Z.ACTIVITY_DIRECTORY);
        return (0, l.jsx)(a.Gt, {
          value: x,
          children: (0, l.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(t.ModalRoot, {
              ...h,
              "aria-labelledby": N,
              children: (0, l.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(v, {
                  onClose: f,
                  perks: u,
                  perkIntro: p,
                  headerProps: m,
                }),
                footer: (0, l.jsx)(C, {
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
          return f;
        },
        O3: function () {
          return h;
        },
        ZP: function () {
          return m;
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
        p = n(135970);
      function m(e) {
        var r, n, t, a, i, m;
        let {
            header: f,
            isLargeModal: h,
            isDynamicModal: x,
            stepProps: _,
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
            step: N,
            stepConfigs: b,
            setBodyNode: v,
            setFooterNode: y,
            setModalOverlayNode: C,
            setReadySlideId: g,
          } = (0, u.usePaymentContext)(),
          j = b.find((e) => e.key === N);
        o.useEffect(() => {
          C(null);
        }, [N, C]),
          c()(null != j, "Unknown step for current payment flow.");
        let S =
            null !==
              (i =
                null == j
                  ? void 0
                  : null === (r = j.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== i &&
            i,
          E =
            null == j
              ? void 0
              : null === (n = j.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          I =
            null == j
              ? void 0
              : null === (t = j.options) || void 0 === t
                ? void 0
                : t.sliderBodyClassName;
        return (
          void 0 !== h && h
            ? (I = p.sliderBodyLarge)
            : x && (I = p.sliderBodyDynamic),
          (0, l.jsxs)(l.Fragment, {
            children: [
              null ===
                (m =
                  null == j
                    ? void 0
                    : null === (a = j.options) || void 0 === a
                      ? void 0
                      : a.renderHeader) ||
              void 0 === m ||
              m
                ? f
                : null,
              j.renderStep(_),
              null == N || S
                ? null
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(d.ModalContent, {
                        className: s()(E, p.body, p.modalContentOverride),
                        children: (0, l.jsx)(d.Slides, {
                          activeSlide: N,
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
                                    className: s()(p.sliderBody, I),
                                    ref: (e) => v(e),
                                    onSubmit: (e) => e.preventDefault(),
                                  }),
                                },
                                e.key,
                              ),
                            ),
                        }),
                      }),
                      (0, l.jsx)("div", { ref: (e) => y(e) }),
                      (0, l.jsx)("div", { ref: (e) => C(e) }),
                    ],
                  }),
            ],
          })
        );
      }
      function f(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
      function h(e) {
        let { children: r } = e,
          { footerNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return y;
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
        x = n(70956),
        _ = n(981631),
        N = n(388032),
        b = n(719919);
      let v = new Set([
        f.h8.SKU_SELECT,
        f.h8.AWAITING_AUTHENTICATION,
        f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        f.h8.CONFIRM,
      ]);
      function y(e) {
        let {
            steps: r,
            currentStep: n,
            body: s,
            paymentError: y,
            header: C,
            footer: g,
            isGift: j = !1,
            giftMessage: S = N.intl.string(N.t.DrgnS0),
            hideBreadcrumbs: E = !1,
            isLoading: I = !1,
            purchaseError: k,
            purchaseErrorBlockRef: P,
            planError: A,
            onScroll: T,
            scrollerClassName: B,
            hasCurrencies: R = !1,
          } = e,
          D = null;
        null != y && null == (0, f.ly)(y)
          ? (D = y)
          : null != k
            ? (D = k)
            : null != A && (D = A);
        let M = null != D ? D.message : "";
        null != D &&
          D instanceof u.HF &&
          (D.code === p.SM.CARD_DECLINED &&
            R &&
            (M += " ".concat(N.intl.string(N.t.iWvwQU))),
          D.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (M = N.intl.string(N.t.ypuSd3)),
          D.code === _.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (M = N.intl.string(N.t.mXMmWF)));
        let { stripe: L } = (0, m.usePaymentContext)();
        I = I || null == L;
        let O = o.useRef(new c.V7());
        o.useEffect(() => {
          let e = O.current;
          return (
            null != L || e.isStarted()
              ? null != L && e.stop()
              : e.start(10 * x.Z.Millis.SECOND, () => {
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
          options: _.OBo,
          stripe: L,
          children: [
            C,
            (0, l.jsxs)("div", {
              className: a()("paymentModalContent", b.content),
              children: [
                j && n !== f.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: b.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == S ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: S,
                    })
                  : null,
                E
                  ? null
                  : (0, l.jsx)("div", {
                      className: b.breadcrumbsWrapper,
                      children: (0, l.jsx)(i.Breadcrumbs, {
                        activeId: f.Ck.has(n) ? w : n,
                        breadcrumbs: r
                          .filter((e) => !f.Ck.has(e) && !v.has(e))
                          .map((e) => ({ id: e, label: (0, f.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: b.bodyWrapper,
                  children: [
                    null == D
                      ? null
                      : (0, l.jsx)("div", {
                          className: b.errorBlockWrapper,
                          children: (0, l.jsx)(i.FormErrorBlock, {
                            ref: P,
                            children: M,
                          }),
                        }),
                    I
                      ? (0, l.jsx)(i.Spinner, { className: b.loadingBlock })
                      : (0, l.jsx)(i.Sequencer, {
                          className: b.sequencer,
                          staticClassName: b.sequencerStatic,
                          animatedNodeClassName: b.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(i.AdvancedScrollerThin, {
                            onScroll: T,
                            className: a()(b.scroller, B),
                            children: s,
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
//# sourceMappingURL=3c79f1e8e286a9a38d30.js.map
