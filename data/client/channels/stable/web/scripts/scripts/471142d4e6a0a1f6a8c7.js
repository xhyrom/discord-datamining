"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39511"],
  {
    609194: function (e, r, n) {
      var t,
        l,
        o,
        i,
        s,
        a = n(200651),
        c = n(192379),
        d = n(120356),
        u = n.n(d),
        m = n(600164),
        p = n(355787);
      function h(e, r, n) {
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
      ((t = o || (o = {})).PRIMARY = "primary"),
        (t.SECONDARY = "secondary"),
        (t.WARNING = "warning"),
        (t.ERROR = "error"),
        ((l = i || (i = {})).SMALL = "small"),
        (l.LARGE = "large"),
        (l.NONE = "none");
      let _ = {
          primary: p.colorPrimary,
          secondary: p.colorSecondary,
          warning: p.colorWarning,
          error: p.colorError,
        },
        S = { small: p.small, large: p.large, none: null };
      class f extends (s = c.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: t,
            className: l,
            iconClassName: o,
          } = this.props;
          return (0, a.jsxs)(m.Z, {
            className: u()(p.note, _[r], l),
            align: m.Z.Align.CENTER,
            children: [
              (0, a.jsx)(e, {
                className: u()(p.icon, S[t], o),
                color: "currentColor",
              }),
              (0, a.jsx)("div", { children: n }),
            ],
          });
        }
      }
      h(f, "Colors", o), h(f, "Sizes", i), (r.Z = f);
    },
    51499: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return d;
        },
      }),
        n(390547);
      var t = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        i = n(481060),
        s = n(563132),
        a = n(409813),
        c = n(574630);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: l,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, s.usePaymentContext)();
        if (null == d || 0 === d.length) return null;
        let m = d.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === m.length
          ? null
          : ((m = m.filter((e) => {
              let r = e.id !== a.h8.ADD_PAYMENT_STEPS,
                t = e.id === a.h8.ADD_PAYMENT_STEPS && !u.current;
              return !n || (n && (r || t));
            })),
            (0, t.jsx)("div", {
              className: o()("breadcrumb", c.wrapper, r),
              children: (0, t.jsx)(i.Breadcrumbs, {
                activeId: l,
                breadcrumbs: m,
              }),
            }));
      }
    },
    614277: function (e, r, n) {
      n.d(r, {
        C3: function () {
          return S;
        },
        O3: function () {
          return f;
        },
        ZP: function () {
          return _;
        },
      });
      var t = n(200651),
        l = n(192379),
        o = n(120356),
        i = n.n(o),
        s = n(512722),
        a = n.n(s),
        c = n(995295),
        d = n(481060),
        u = n(540059),
        m = n(563132),
        p = n(409813),
        h = n(135970);
      function _(e) {
        var r, n, o, s, c, _;
        let {
            header: S,
            isLargeModal: f,
            isDynamicModal: N,
            stepProps: E,
          } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: t, ...l } = e;
            return {
              header: r,
              isLargeModal: n,
              isDynamicModal: t,
              stepProps: l,
            };
          })(e),
          {
            step: x,
            stepConfigs: P,
            setBodyNode: C,
            setFooterNode: g,
            setModalOverlayNode: v,
            setReadySlideId: I,
          } = (0, m.usePaymentContext)(),
          y = P.find((e) => e.key === x);
        l.useEffect(() => {
          v(null);
        }, [x, v]),
          a()(null != y, "Unknown step for current payment flow.");
        let k =
            null !==
              (c =
                null == y
                  ? void 0
                  : null === (r = y.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== c &&
            c,
          b =
            null == y
              ? void 0
              : null === (n = y.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          j =
            null == y
              ? void 0
              : null === (o = y.options) || void 0 === o
                ? void 0
                : o.sliderBodyClassName;
        void 0 !== f && f
          ? (j = h.sliderBodyLarge)
          : N && (j = h.sliderBodyDynamic);
        let A = (0, u.Q3)("PaymentModalStep");
        return (0, t.jsxs)(t.Fragment, {
          children: [
            null ===
              (_ =
                null == y
                  ? void 0
                  : null === (s = y.options) || void 0 === s
                    ? void 0
                    : s.renderHeader) ||
            void 0 === _ ||
            _
              ? S
              : null,
            y.renderStep(E),
            null == x || k
              ? null
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(d.ModalContent, {
                      className: i()(b, h.body, {
                        [h.reviewStep]: x === p.h8.REVIEW,
                        [h.addPaymentSteps]: x === p.h8.ADD_PAYMENT_STEPS,
                      }),
                      children: (0, t.jsx)(d.Slides, {
                        activeSlide: x,
                        centered: !1,
                        onSlideReady: (e) => I(e),
                        width:
                          A && x === p.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                        children: P.filter((e) => null != e.key).map((e) =>
                          (0, t.jsx)(
                            d.Slide,
                            {
                              id: e.key,
                              children: (0, t.jsx)("form", {
                                className: i()(h.sliderBody, j),
                                ref: (e) => C(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, t.jsx)("div", { ref: (e) => g(e) }),
                    (0, t.jsx)("div", { ref: (e) => v(e) }),
                  ],
                }),
          ],
        });
      }
      function S(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, m.usePaymentContext)();
        return null == n ? null : c.createPortal(r, n);
      }
      function f(e) {
        let { children: r } = e,
          { footerNode: n } = (0, m.usePaymentContext)();
        return null == n ? null : c.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return P;
        },
      }),
        n(47120),
        n(411104);
      var t = n(200651),
        l = n(192379),
        o = n(734530),
        i = n(120356),
        s = n.n(i),
        a = n(846519),
        c = n(481060),
        d = n(609194),
        u = n(881052),
        m = n(128069),
        p = n(563132),
        h = n(409813);
      n(51499), n(614277);
      var _ = n(122289),
        S = n(70956),
        f = n(981631),
        N = n(388032),
        E = n(719919);
      let x = new Set([
        h.h8.SKU_SELECT,
        h.h8.AWAITING_AUTHENTICATION,
        h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        h.h8.CONFIRM,
      ]);
      function P(e) {
        let {
            steps: r,
            currentStep: n,
            body: i,
            paymentError: P,
            header: C,
            footer: g,
            isGift: v = !1,
            giftMessage: I = N.intl.string(N.t.DrgnS0),
            hideBreadcrumbs: y = !1,
            isLoading: k = !1,
            purchaseError: b,
            purchaseErrorBlockRef: j,
            planError: A,
            onScroll: T,
            scrollerClassName: M,
            hasCurrencies: R = !1,
          } = e,
          B = null;
        null != P && null == (0, h.ly)(P)
          ? (B = P)
          : null != b
            ? (B = b)
            : null != A && (B = A);
        let W = null != B ? B.message : "";
        null != B &&
          B instanceof u.HF &&
          (B.code === m.SM.CARD_DECLINED &&
            R &&
            (W += " ".concat(N.intl.string(N.t.iWvwQU))),
          B.code === m.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (W = N.intl.string(N.t.ypuSd3)),
          B.code === f.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (W = N.intl.string(N.t.mXMmWF)));
        let { stripe: D } = (0, p.usePaymentContext)();
        k = k || null == D;
        let w = l.useRef(new a.V7());
        l.useEffect(() => {
          let e = w.current;
          return (
            null != D || e.isStarted()
              ? null != D && e.stop()
              : e.start(10 * S.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, _.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [D]);
        let O = r.includes(h.h8.PAYMENT_TYPE)
          ? h.h8.PAYMENT_TYPE
          : h.h8.ADD_PAYMENT_STEPS;
        return (0, t.jsxs)(o.Elements, {
          options: f.OBo,
          stripe: D,
          children: [
            C,
            (0, t.jsxs)("div", {
              className: s()("paymentModalContent", E.content),
              children: [
                v && n !== h.h8.CONFIRM
                  ? (0, t.jsx)(d.Z, {
                      className: E.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: c.GiftIcon,
                      color:
                        null == I ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: I,
                    })
                  : null,
                y
                  ? null
                  : (0, t.jsx)("div", {
                      className: E.breadcrumbsWrapper,
                      children: (0, t.jsx)(c.Breadcrumbs, {
                        activeId: h.Ck.has(n) ? O : n,
                        breadcrumbs: r
                          .filter((e) => !h.Ck.has(e) && !x.has(e))
                          .map((e) => ({ id: e, label: (0, h.DJ)(e) })),
                      }),
                    }),
                (0, t.jsxs)("div", {
                  className: E.bodyWrapper,
                  children: [
                    null == B
                      ? null
                      : (0, t.jsx)("div", {
                          className: E.errorBlockWrapper,
                          children: (0, t.jsx)(c.FormErrorBlock, {
                            ref: j,
                            children: W,
                          }),
                        }),
                    k
                      ? (0, t.jsx)(c.Spinner, { className: E.loadingBlock })
                      : (0, t.jsx)(c.Sequencer, {
                          className: E.sequencer,
                          staticClassName: E.sequencerStatic,
                          animatedNodeClassName: E.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, t.jsx)(c.AdvancedScrollerThin, {
                            onScroll: T,
                            className: s()(E.scroller, M),
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
    790954: function (e, r, n) {
      n.d(r, {
        Mf: function () {
          return a;
        },
        Y6: function () {
          return s;
        },
        pF: function () {
          return c;
        },
      });
      var t = n(15729),
        l = n(731965);
      let o = Object.freeze({
          inspectedStickerPosition: { rowIndex: -1, columnIndex: -1 },
        }),
        i = (0, t.U)((e) => o),
        s = i,
        a = (e, r, n) => {
          (0, l.j)(() =>
            i.setState({
              inspectedStickerPosition: {
                rowIndex: r,
                columnIndex: e,
                source: n,
              },
            }),
          );
        },
        c = () => {
          a(-1, -1);
        };
    },
    433550: function (e, r, n) {
      n.r(r),
        n.d(r, {
          StickerPackViewAllModalFooter: function () {
            return W;
          },
          default: function () {
            return w;
          },
        }),
        n(653041),
        n(47120);
      var t = n(200651),
        l = n(192379),
        o = n(120356),
        i = n.n(o),
        s = n(954955),
        a = n.n(s),
        c = n(442837),
        d = n(477690),
        u = n(481060),
        m = n(691251),
        p = n(563132),
        h = n(409813),
        _ = n(185139),
        S = n(624138),
        f = n(790954),
        N = n(453070),
        E = n(926491),
        x = n(378233),
        P = n(515005),
        C = n(282896),
        g = n(929204),
        v = n(981631),
        I = n(388032),
        y = n(9520);
      let k = (0, S.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS,
        ),
        b = (0, S.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING,
        ),
        j = (0, S.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN,
        ),
        A = k + 2 * b,
        T = a()(f.pF, 250),
        M = () => {
          T.cancel();
        },
        R = (e) => {
          let { visibleRowIndex: r, columnIndex: n } = e;
          T.cancel(), (0, f.Mf)(n, r, m.u.MOUSE_EVENT);
        },
        B = (e) => {
          let {
              stickerPack: r,
              width: n,
              hasHeaderImage: o,
              isScrolling: s,
              onInspect: a,
            } = e,
            c = l.useMemo(() => [(0, x.z)(r)], [r]),
            d = (0, f.Y6)((e) => e.inspectedStickerPosition),
            {
              rowCountBySection: u,
              stickersGrid: m,
              gutterWidth: p,
            } = (0, N.el)({
              stickersCategories: c,
              stickerNodeMargin: j,
              stickerNodeWidth: A,
              listWidth: n,
            });
          return (0, t.jsxs)("div", {
            className: i()(y.container, { [y.containerWithHeader]: o }),
            children: [
              (0, t.jsx)(
                C.Z,
                { className: y.header, stickerPack: r, withDescription: !0 },
                r.id,
              ),
              (0, t.jsx)("div", {
                onFocus: M,
                onBlur: T,
                onMouseOver: M,
                onMouseOut: T,
                children: (() => {
                  if (0 === u.length) return null;
                  let e = [];
                  for (let r = 0; r < u[0]; r++)
                    e.push(
                      (0, t.jsx)(
                        P.Z,
                        {
                          enlargeOnInteraction: !0,
                          preferAnimation: !0,
                          gutterWidth: p,
                          inspectedStickerPosition: d,
                          isScrolling: s,
                          onInspect: a,
                          rowIndex: r,
                          stickerDescriptors: m[r],
                          stickerPadding: b,
                          stickerSize: k,
                          isDisplayingIndividualStickers: !0,
                          checkSendability: !1,
                        },
                        r,
                      ),
                    );
                  return e;
                })(),
              }),
            ],
          });
        },
        W = (e) => {
          let { onClose: r, stickerPack: n } = e;
          (0, N.fP)();
          let l = (0, c.e7)([E.Z], () => E.Z.isPremiumPack(n.id));
          return (0, t.jsxs)(u.ModalFooter, {
            className: y.footer,
            children: [
              (0, t.jsx)(u.Anchor, {
                onClick: r,
                className: y.skuPreviewFooterCloseButton,
                children: I.intl.string(I.t.cpT0Cg),
              }),
              l &&
                (0, t.jsxs)(u.ShinyButton, {
                  color: u.Button.Colors.GREEN,
                  type: "submit",
                  innerClassName: y.premiumButtonInner,
                  onClick: () => {
                    r(), (0, g.Z)({ section: v.jXE.STICKER_PACK_VIEW_ALL });
                  },
                  children: [
                    (0, t.jsx)(u.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: y.premiumButtonNitroWheel,
                    }),
                    I.intl.string(I.t["w+kuhY"]),
                  ],
                }),
            ],
          });
        },
        D = (e) => {
          let { stickerPack: r, onClose: n } = e,
            l = (0, x.sM)(r, 1024);
          return null == l
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                className: y.headerWithImage,
                children: [
                  (0, t.jsx)("div", {
                    role: "image",
                    style: { backgroundImage: "url(".concat(l, ")") },
                    className: y.backgroundImage,
                  }),
                  (0, t.jsx)(u.ModalCloseButton, {
                    className: y.closeButton,
                    onClick: n,
                  }),
                ],
              });
        };
      function w(e) {
        let { onClose: r, stickerPack: n, ...o } = e,
          [i, s] = l.useState(null),
          a = l.useCallback((e) => {
            null !== e && s(e.offsetWidth);
          }, []);
        return (
          l.useLayoutEffect(() => {
            (0, f.pF)();
          }, []),
          (0, t.jsx)(p.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(u.ModalRoot, {
              ...o,
              "aria-labelledby": "sticker-pack-sku-preview-modal",
              children: (0, t.jsx)(_.Z, {
                hideBreadcrumbs: !0,
                body: (0, t.jsx)("div", {
                  ref: a,
                  children:
                    null != i &&
                    (0, t.jsx)(B, {
                      stickerPack: n,
                      hasHeaderImage: !0,
                      onInspect: R,
                      width: i,
                    }),
                }),
                footer: (0, t.jsx)(W, { onClose: r, stickerPack: n }),
                header: (0, t.jsx)(D, { onClose: r, stickerPack: n }),
                onScroll: T,
                steps: [h.h8.SKU_PREVIEW],
                currentStep: h.h8.SKU_PREVIEW,
              }),
            }),
          })
        );
      }
    },
    282896: function (e, r, n) {
      var t = n(200651),
        l = n(192379),
        o = n(120356),
        i = n.n(o),
        s = n(481060),
        a = n(378233),
        c = n(388032),
        d = n(654543);
      let u = (e) => {
        let { stickerPack: r } = e;
        return (0, t.jsx)("div", {
          className: d.features,
          children: (0, a.X_)(r)
            ? (0, t.jsx)(s.Tooltip, {
                tooltipClassName: d.featuresTooltip,
                position: "top",
                text: c.intl.string(c.t.W11rMT),
                children: (e) =>
                  (0, t.jsx)(s.PlayIcon, {
                    size: "xs",
                    color: "currentColor",
                    ...e,
                    className: d.featureIcon,
                  }),
              })
            : null,
        });
      };
      r.Z = l.memo((e) => {
        let { className: r, stickerPack: n, withDescription: l = !1 } = e;
        return (0, t.jsxs)("div", {
          className: i()(d.header, r),
          children: [
            (0, t.jsxs)("div", {
              className: d.title,
              children: [
                (0, t.jsx)(s.Heading, {
                  className: d.heading,
                  variant: "heading-sm/semibold",
                  children: n.name,
                }),
                (0, t.jsx)(u, { stickerPack: n }),
              ],
            }),
            l &&
              null != n.description &&
              (0, t.jsx)(s.Text, {
                className: d.description,
                variant: "text-sm/normal",
                children: n.description,
              }),
            (0, t.jsx)("div", {
              className: d.count,
              children: c.intl.format(c.t["0S3JpK"], {
                numStickers: n.stickers.length,
              }),
            }),
          ],
        });
      });
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
    9520: function (e, r, n) {
      e.exports = {
        headerWithImage: "headerWithImage_a9d4d6",
        backgroundImage: "backgroundImage_a9d4d6",
        closeButton: "closeButton_a9d4d6",
        footer: "footer_a9d4d6",
        skuPreviewFooterCloseButton: "skuPreviewFooterCloseButton_a9d4d6",
        header: "header_a9d4d6",
        container: "container_a9d4d6",
        containerWithHeader: "containerWithHeader_a9d4d6",
        premiumButtonNitroWheel: "premiumButtonNitroWheel_a9d4d6",
        premiumButtonInner: "premiumButtonInner_a9d4d6",
      };
    },
    654543: function (e, r, n) {
      e.exports = {
        header: "header_a970d0",
        title: "title_a970d0",
        heading: "heading_a970d0",
        count: "count_a970d0",
        features: "features_a970d0",
        featuresTooltip: "featuresTooltip_a970d0",
        featureIcon: "featureIcon_a970d0 feature_a970d0",
        description: "description_a970d0",
      };
    },
  },
]);
//# sourceMappingURL=471142d4e6a0a1f6a8c7.js.map
