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
        c,
        a = n(200651),
        i = n(192379),
        d = n(120356),
        u = n.n(d),
        p = n(600164),
        m = n(865857);
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
      class N extends (c = i.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: l,
            className: o,
            iconClassName: t,
          } = this.props;
          return (0, a.jsxs)(p.Z, {
            className: u()(m.note, h[r], o),
            align: p.Z.Align.CENTER,
            children: [
              (0, a.jsx)(e, {
                className: u()(m.icon, x[l], t),
                color: "currentColor",
              }),
              (0, a.jsx)("div", { children: n }),
            ],
          });
        }
      }
      f(N, "Colors", t), f(N, "Sizes", s), (r.Z = N);
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
        c = n(906732),
        a = n(563132),
        i = n(409813),
        d = n(185139),
        u = n(263954),
        p = n(267642),
        m = n(678558),
        f = n(981631),
        h = n(388032),
        x = n(797118),
        N = n(113207);
      let _ = "premium-guild-subscription-upsell-modal-header";
      function g(e) {
        let { title: r, subtitle: n, image: o } = e;
        return (0, l.jsxs)("div", {
          className: x.header,
          children: [
            (0, l.jsx)(t.Heading, {
              variant: "heading-xl/semibold",
              id: _,
              color: "header-primary",
              className: N.marginBottom8,
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
              (0, l.jsx)(b, { headerProps: s, perkIntro: o }),
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
        b = (e) => {
          let { headerProps: r, perkIntro: s } = e;
          return (0, l.jsxs)(o.Fragment, {
            children: [
              null != r
                ? (0, l.jsx)(g, { ...r })
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
        j = (e) => {
          let {
              guild: r,
              targetBoostedGuildTier: n,
              onClose: o,
              analyticsSourceLocation: s,
            } = e,
            c = {
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
                analyticsLocation: c,
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
          { analyticsLocations: x } = (0, c.ZP)(s.Z.ACTIVITY_DIRECTORY);
        return (0, l.jsx)(c.Gt, {
          value: x,
          children: (0, l.jsx)(a.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(t.ModalRoot, {
              ...h,
              "aria-labelledby": _,
              children: (0, l.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(v, {
                  onClose: f,
                  perks: u,
                  perkIntro: p,
                  headerProps: m,
                }),
                footer: (0, l.jsx)(j, {
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
        c = n(563132),
        a = n(409813),
        i = n(548458);
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
              let r = e.id !== a.h8.ADD_PAYMENT_STEPS,
                l = e.id === a.h8.ADD_PAYMENT_STEPS && !u.current;
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
        c = n(512722),
        a = n.n(c),
        i = n(995295),
        d = n(481060),
        u = n(563132),
        p = n(130298);
      function m(e) {
        var r, n, t, c, i, m;
        let {
            header: f,
            isLargeModal: h,
            stepProps: x,
          } = (function (e) {
            let { header: r, isLargeModal: n, ...l } = e;
            return { header: r, isLargeModal: n, stepProps: l };
          })(e),
          {
            step: N,
            stepConfigs: _,
            setBodyNode: g,
            setFooterNode: v,
            setModalOverlayNode: b,
            setReadySlideId: j,
          } = (0, u.usePaymentContext)(),
          C = _.find((e) => e.key === N);
        o.useEffect(() => {
          b(null);
        }, [N, b]),
          a()(null != C, "Unknown step for current payment flow.");
        let y =
            null !==
              (i =
                null == C
                  ? void 0
                  : null === (r = C.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== i &&
            i,
          S =
            null == C
              ? void 0
              : null === (n = C.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          E =
            void 0 !== h && h
              ? p.sliderBodyLarge
              : null == C
                ? void 0
                : null === (t = C.options) || void 0 === t
                  ? void 0
                  : t.sliderBodyClassName;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            null ===
              (m =
                null == C
                  ? void 0
                  : null === (c = C.options) || void 0 === c
                    ? void 0
                    : c.renderHeader) ||
            void 0 === m ||
            m
              ? f
              : null,
            C.renderStep(x),
            null == N || y
              ? null
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(d.ModalContent, {
                      className: s()(p.body, S),
                      children: (0, l.jsx)(d.Slides, {
                        activeSlide: N,
                        centered: !1,
                        onSlideReady: (e) => j(e),
                        children: _.filter((e) => null != e.key).map((e) =>
                          (0, l.jsx)(
                            d.Slide,
                            {
                              id: e.key,
                              children: (0, l.jsx)("form", {
                                className: s()(p.sliderBody, E),
                                ref: (e) => g(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, l.jsx)("div", { ref: (e) => v(e) }),
                    (0, l.jsx)("div", { ref: (e) => b(e) }),
                  ],
                }),
          ],
        });
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
          return b;
        },
      }),
        n(47120),
        n(411104);
      var l = n(200651),
        o = n(192379),
        t = n(734530),
        s = n(120356),
        c = n.n(s),
        a = n(846519),
        i = n(481060),
        d = n(609194),
        u = n(881052),
        p = n(128069),
        m = n(563132),
        f = n(409813);
      n(51499), n(614277);
      var h = n(122289),
        x = n(70956),
        N = n(981631),
        _ = n(388032),
        g = n(896769);
      let v = new Set([
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
            header: j,
            footer: C,
            isGift: y = !1,
            giftMessage: S = _.intl.string(_.t.DrgnS0),
            hideBreadcrumbs: E = !1,
            isLoading: I = !1,
            purchaseError: k,
            purchaseErrorBlockRef: P,
            planError: A,
            onScroll: T,
            scrollerClassName: R,
            hasCurrencies: B = !1,
          } = e,
          M = null;
        null != b && null == (0, f.ly)(b)
          ? (M = b)
          : null != k
            ? (M = k)
            : null != A && (M = A);
        let L = null != M ? M.message : "";
        null != M &&
          M instanceof u.HF &&
          (M.code === p.SM.CARD_DECLINED &&
            B &&
            (L += " ".concat(_.intl.string(_.t.iWvwQU))),
          M.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (L = _.intl.string(_.t.ypuSd3)),
          M.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (L = _.intl.string(_.t.mXMmWF)));
        let { stripe: D } = (0, m.usePaymentContext)();
        I = I || null == D;
        let w = o.useRef(new a.V7());
        o.useEffect(() => {
          let e = w.current;
          return (
            null != D || e.isStarted()
              ? null != D && e.stop()
              : e.start(10 * x.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, h.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [D]);
        let U = r.includes(f.h8.PAYMENT_TYPE)
          ? f.h8.PAYMENT_TYPE
          : f.h8.ADD_PAYMENT_STEPS;
        return (0, l.jsxs)(t.Elements, {
          options: N.OBo,
          stripe: D,
          children: [
            j,
            (0, l.jsxs)("div", {
              className: c()("paymentModalContent", g.content),
              children: [
                y && n !== f.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: g.paymentNote,
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
                      className: g.breadcrumbsWrapper,
                      children: (0, l.jsx)(i.Breadcrumbs, {
                        activeId: f.Ck.has(n) ? U : n,
                        breadcrumbs: r
                          .filter((e) => !f.Ck.has(e) && !v.has(e))
                          .map((e) => ({ id: e, label: (0, f.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: g.bodyWrapper,
                  children: [
                    null == M
                      ? null
                      : (0, l.jsx)("div", {
                          className: g.errorBlockWrapper,
                          children: (0, l.jsx)(i.FormErrorBlock, {
                            ref: P,
                            children: L,
                          }),
                        }),
                    I
                      ? (0, l.jsx)(i.Spinner, { className: g.loadingBlock })
                      : (0, l.jsx)(i.Sequencer, {
                          className: g.sequencer,
                          staticClassName: g.sequencerStatic,
                          animatedNodeClassName: g.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(i.AdvancedScrollerThin, {
                            onScroll: T,
                            className: c()(g.scroller, R),
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
          return c;
        },
      });
      var l = n(200651);
      n(192379);
      var o = n(120356),
        t = n.n(o),
        s = n(524994);
      function c(e) {
        let { icon: r, iconClassName: n, description: o, color: c } = e;
        return (0, l.jsxs)("div", {
          className: s.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: s.perkIconContainer,
              children: (0, l.jsx)(r, {
                color: null != c ? c : "currentColor",
                className: t()(s.perkIcon, n),
              }),
            }),
            (0, l.jsx)("div", { className: s.perkDescription, children: o }),
          ],
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
    797118: function (e, r, n) {
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
  },
]);
//# sourceMappingURL=dcd7986c48cd6176df8d.js.map
