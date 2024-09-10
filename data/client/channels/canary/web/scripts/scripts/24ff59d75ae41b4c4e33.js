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
        s,
        t,
        a,
        c = n(735250),
        i = n(470079),
        d = n(120356),
        u = n.n(d),
        p = n(600164),
        _ = n(865857);
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
      ((l = s || (s = {})).PRIMARY = "primary"),
        (l.SECONDARY = "secondary"),
        (l.WARNING = "warning"),
        (l.ERROR = "error"),
        ((o = t || (t = {})).SMALL = "small"),
        (o.LARGE = "large"),
        (o.NONE = "none");
      let f = {
          primary: _.colorPrimary,
          secondary: _.colorSecondary,
          warning: _.colorWarning,
          error: _.colorError,
        },
        N = { small: _.small, large: _.large, none: null };
      class h extends (a = i.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: l,
            className: o,
            iconClassName: s,
          } = this.props;
          return (0, c.jsxs)(p.Z, {
            className: u()(_.note, f[r], o),
            align: p.Z.Align.CENTER,
            children: [
              (0, c.jsx)(e, {
                className: u()(_.icon, N[l], s),
                color: "currentColor",
              }),
              (0, c.jsx)("div", { children: n }),
            ],
          });
        }
      }
      m(h, "Colors", s), m(h, "Sizes", t), (r.Z = h);
    },
    146747: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return T;
          },
        });
      var l = n(735250),
        o = n(470079),
        s = n(481060),
        t = n(100527),
        a = n(906732),
        c = n(598),
        i = n(409813),
        d = n(185139),
        u = n(263954),
        p = n(267642),
        _ = n(678558),
        m = n(981631),
        f = n(689938),
        N = n(797118),
        h = n(113207);
      let E = "premium-guild-subscription-upsell-modal-header";
      function x(e) {
        let { title: r, subtitle: n, image: o } = e;
        return (0, l.jsxs)("div", {
          className: N.header,
          children: [
            (0, l.jsx)(s.Heading, {
              variant: "heading-xl/semibold",
              id: E,
              color: "header-primary",
              className: h.marginBottom8,
              children: r,
            }),
            (0, l.jsx)(s.Text, {
              variant: "text-md/normal",
              className: N.subtitleText,
              children: n,
            }),
            o,
          ],
        });
      }
      let I = (e) => {
          let {
            onClose: r,
            perks: n,
            perkIntro: o = f.Z.Messages
              .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
            headerProps: t,
          } = e;
          return (0, l.jsxs)("div", {
            className: N.wrapper,
            children: [
              (0, l.jsx)(s.ModalCloseButton, {
                className: N.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, l.jsx)(S, { headerProps: t, perkIntro: o }),
              (0, l.jsx)("div", {
                className: N.perks,
                children: n.map((e, r) => {
                  let {
                    icon: n,
                    iconClassName: o,
                    description: s,
                    color: t,
                  } = e;
                  return (0, l.jsx)(
                    u.Z,
                    { icon: n, iconClassName: o, description: s, color: t },
                    r,
                  );
                }),
              }),
            ],
          });
        },
        S = (e) => {
          let { headerProps: r, perkIntro: t } = e;
          return (0, l.jsxs)(o.Fragment, {
            children: [
              null != r
                ? (0, l.jsx)(x, { ...r })
                : (0, l.jsx)("img", {
                    className: N.heroImage,
                    src: n(438471),
                    alt: f.Z.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT,
                  }),
              (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                className: N.heading,
                children: t,
              }),
            ],
          });
        },
        C = (e) => {
          let {
              guild: r,
              targetBoostedGuildTier: n,
              onClose: o,
              analyticsSourceLocation: t,
            } = e,
            a = {
              section: m.jXE.PREMIUM_GUILD_UPSELL_MODAL,
              object: m.qAy.BUTTON_CTA,
              objectType: null != n ? (0, p.ge)(n) : null,
            };
          return (0, l.jsxs)(s.ModalFooter, {
            className: N.footer,
            children: [
              (0, l.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: () => {
                  o();
                },
                children: f.Z.Messages.CLOSE,
              }),
              (0, l.jsx)(_.Z, {
                analyticsLocation: a,
                analyticsSourceLocation: t,
                guild: r,
                targetBoostedGuildTier: n,
                onClose: () => {
                  o();
                },
              }),
            ],
          });
        };
      function T(e) {
        let {
            analyticsSourceLocation: r,
            guild: n,
            targetBoostedGuildTier: o,
            perks: u,
            perkIntro: p,
            headerProps: _,
            onClose: m,
            ...f
          } = e,
          { analyticsLocations: N } = (0, a.ZP)(t.Z.ACTIVITY_DIRECTORY);
        return (0, l.jsx)(a.Gt, {
          value: N,
          children: (0, l.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(s.ModalRoot, {
              ...f,
              "aria-labelledby": E,
              children: (0, l.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, l.jsx)(I, {
                  onClose: m,
                  perks: u,
                  perkIntro: p,
                  headerProps: _,
                }),
                footer: (0, l.jsx)(C, {
                  guild: n,
                  targetBoostedGuildTier: o,
                  onClose: m,
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
      var l = n(735250);
      n(470079);
      var o = n(120356),
        s = n.n(o),
        t = n(481060),
        a = n(598),
        c = n(409813),
        i = n(548458);
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
              className: s()("breadcrumb", i.wrapper, r),
              children: (0, l.jsx)(t.Breadcrumbs, {
                activeId: o,
                breadcrumbs: p,
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
          return _;
        },
      });
      var l = n(735250),
        o = n(470079),
        s = n(120356),
        t = n.n(s),
        a = n(512722),
        c = n.n(a),
        i = n(699581),
        d = n(481060),
        u = n(598),
        p = n(130298);
      function _(e) {
        var r, n, s, a, i, _;
        let {
            header: m,
            isLargeModal: f,
            stepProps: N,
          } = (function (e) {
            let { header: r, isLargeModal: n, ...l } = e;
            return { header: r, isLargeModal: n, stepProps: l };
          })(e),
          {
            step: h,
            stepConfigs: E,
            setBodyNode: x,
            setFooterNode: I,
            setModalOverlayNode: S,
            setReadySlideId: C,
          } = (0, u.usePaymentContext)(),
          T = E.find((e) => e.key === h);
        o.useEffect(() => {
          S(null);
        }, [h, S]),
          c()(null != T, "Unknown step for current payment flow.");
        let b =
            null !==
              (i =
                null == T
                  ? void 0
                  : null === (r = T.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== i &&
            i,
          j =
            null == T
              ? void 0
              : null === (n = T.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          v =
            void 0 !== f && f
              ? p.sliderBodyLarge
              : null == T
                ? void 0
                : null === (s = T.options) || void 0 === s
                  ? void 0
                  : s.sliderBodyClassName;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            null ===
              (_ =
                null == T
                  ? void 0
                  : null === (a = T.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === _ ||
            _
              ? m
              : null,
            T.renderStep(N),
            null == h || b
              ? null
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(d.ModalContent, {
                      className: t()(p.body, j),
                      children: (0, l.jsx)(d.Slides, {
                        activeSlide: h,
                        centered: !1,
                        onSlideReady: (e) => C(e),
                        children: E.filter((e) => null != e.key).map((e) =>
                          (0, l.jsx)(
                            d.Slide,
                            {
                              id: e.key,
                              children: (0, l.jsx)("form", {
                                className: t()(p.sliderBody, v),
                                ref: (e) => x(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, l.jsx)("div", { ref: (e) => I(e) }),
                    (0, l.jsx)("div", { ref: (e) => S(e) }),
                  ],
                }),
          ],
        });
      }
      function m(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
      }
      function f(e) {
        let { children: r } = e,
          { footerNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : i.createPortal(r, n);
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
      var l = n(735250),
        o = n(470079),
        s = n(160612),
        t = n(120356),
        a = n.n(t),
        c = n(846519),
        i = n(481060),
        d = n(609194),
        u = n(881052),
        p = n(128069),
        _ = n(598),
        m = n(409813);
      n(51499), n(614277);
      var f = n(122289),
        N = n(70956),
        h = n(981631),
        E = n(689938),
        x = n(896769);
      let I = new Set([
        m.h8.SKU_SELECT,
        m.h8.AWAITING_AUTHENTICATION,
        m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        m.h8.CONFIRM,
      ]);
      function S(e) {
        let {
            steps: r,
            currentStep: n,
            body: t,
            paymentError: S,
            header: C,
            footer: T,
            isGift: b = !1,
            giftMessage: j = E.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: v = !1,
            isLoading: g = !1,
            purchaseError: P,
            purchaseErrorBlockRef: M,
            planError: y,
            onScroll: A,
            scrollerClassName: R,
            hasCurrencies: L = !1,
          } = e,
          k = null;
        null != S && null == (0, m.ly)(S)
          ? (k = S)
          : null != P
            ? (k = P)
            : null != y && (k = y);
        let D = null != k ? k.message : "";
        null != k &&
          k instanceof u.HF &&
          (k.code === p.SM.CARD_DECLINED &&
            L &&
            (D += " ".concat(E.Z.Messages.BILLING_ERROR_TRY_ANOTHER)),
          k.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (D = E.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          k.code === h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (D = E.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: B } = (0, _.usePaymentContext)();
        g = g || null == B;
        let O = o.useRef(new c.V7());
        o.useEffect(() => {
          let e = O.current;
          return (
            null != B || e.isStarted()
              ? null != B && e.stop()
              : e.start(10 * N.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, f.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [B]);
        let U = r.includes(m.h8.PAYMENT_TYPE)
          ? m.h8.PAYMENT_TYPE
          : m.h8.ADD_PAYMENT_STEPS;
        return (0, l.jsxs)(s.Elements, {
          options: h.OBo,
          stripe: B,
          children: [
            C,
            (0, l.jsxs)("div", {
              className: a()("paymentModalContent", x.content),
              children: [
                b && n !== m.h8.CONFIRM
                  ? (0, l.jsx)(d.Z, {
                      className: x.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == j ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: j,
                    })
                  : null,
                v
                  ? null
                  : (0, l.jsx)("div", {
                      className: x.breadcrumbsWrapper,
                      children: (0, l.jsx)(i.Breadcrumbs, {
                        activeId: m.Ck.has(n) ? U : n,
                        breadcrumbs: r
                          .filter((e) => !m.Ck.has(e) && !I.has(e))
                          .map((e) => ({ id: e, label: (0, m.DJ)(e) })),
                      }),
                    }),
                (0, l.jsxs)("div", {
                  className: x.bodyWrapper,
                  children: [
                    null == k
                      ? null
                      : (0, l.jsx)("div", {
                          className: x.errorBlockWrapper,
                          children: (0, l.jsx)(i.FormErrorBlock, {
                            ref: M,
                            children: D,
                          }),
                        }),
                    g
                      ? (0, l.jsx)(i.Spinner, { className: x.loadingBlock })
                      : (0, l.jsx)(i.Sequencer, {
                          className: x.sequencer,
                          staticClassName: x.sequencerStatic,
                          animatedNodeClassName: x.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, l.jsx)(i.AdvancedScrollerThin, {
                            onScroll: A,
                            className: a()(x.scroller, R),
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
          return a;
        },
      });
      var l = n(735250);
      n(470079);
      var o = n(120356),
        s = n.n(o),
        t = n(524994);
      function a(e) {
        let { icon: r, iconClassName: n, description: o, color: a } = e;
        return (0, l.jsxs)("div", {
          className: t.perkRow,
          children: [
            (0, l.jsx)("div", {
              className: t.perkIconContainer,
              children: (0, l.jsx)(r, {
                color: null != a ? a : "currentColor",
                className: s()(t.perkIcon, n),
              }),
            }),
            (0, l.jsx)("div", { className: t.perkDescription, children: o }),
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
//# sourceMappingURL=24ff59d75ae41b4c4e33.js.map
