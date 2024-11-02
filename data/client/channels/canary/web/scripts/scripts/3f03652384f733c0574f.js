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
        p = n(865857);
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
        f = { small: p.small, large: p.large, none: null };
      class N extends (s = c.PureComponent) {
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
                className: u()(p.icon, f[t], o),
                color: "currentColor",
              }),
              (0, a.jsx)("div", { children: n }),
            ],
          });
        }
      }
      h(N, "Colors", o), h(N, "Sizes", i), (r.Z = N);
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
        s = n(598),
        a = n(409813),
        c = n(548458);
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
          return h;
        },
        O3: function () {
          return _;
        },
        ZP: function () {
          return p;
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
        u = n(598),
        m = n(130298);
      function p(e) {
        var r, n, o, s, c, p;
        let {
            header: h,
            isLargeModal: _,
            stepProps: f,
          } = (function (e) {
            let { header: r, isLargeModal: n, ...t } = e;
            return { header: r, isLargeModal: n, stepProps: t };
          })(e),
          {
            step: N,
            stepConfigs: S,
            setBodyNode: x,
            setFooterNode: E,
            setModalOverlayNode: C,
            setReadySlideId: g,
          } = (0, u.usePaymentContext)(),
          P = S.find((e) => e.key === N);
        l.useEffect(() => {
          C(null);
        }, [N, C]),
          a()(null != P, "Unknown step for current payment flow.");
        let I =
            null !==
              (c =
                null == P
                  ? void 0
                  : null === (r = P.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== c &&
            c,
          k =
            null == P
              ? void 0
              : null === (n = P.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          v =
            void 0 !== _ && _
              ? m.sliderBodyLarge
              : null == P
                ? void 0
                : null === (o = P.options) || void 0 === o
                  ? void 0
                  : o.sliderBodyClassName;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            null ===
              (p =
                null == P
                  ? void 0
                  : null === (s = P.options) || void 0 === s
                    ? void 0
                    : s.renderHeader) ||
            void 0 === p ||
            p
              ? h
              : null,
            P.renderStep(f),
            null == N || I
              ? null
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(d.ModalContent, {
                      className: i()(m.body, k),
                      children: (0, t.jsx)(d.Slides, {
                        activeSlide: N,
                        centered: !1,
                        onSlideReady: (e) => g(e),
                        children: S.filter((e) => null != e.key).map((e) =>
                          (0, t.jsx)(
                            d.Slide,
                            {
                              id: e.key,
                              children: (0, t.jsx)("form", {
                                className: i()(m.sliderBody, v),
                                ref: (e) => x(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, t.jsx)("div", { ref: (e) => E(e) }),
                    (0, t.jsx)("div", { ref: (e) => C(e) }),
                  ],
                }),
          ],
        });
      }
      function h(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : c.createPortal(r, n);
      }
      function _(e) {
        let { children: r } = e,
          { footerNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : c.createPortal(r, n);
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
        p = n(598),
        h = n(409813);
      n(51499), n(614277);
      var _ = n(122289),
        f = n(70956),
        N = n(981631),
        S = n(388032),
        x = n(896769);
      let E = new Set([
        h.h8.SKU_SELECT,
        h.h8.AWAITING_AUTHENTICATION,
        h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        h.h8.CONFIRM,
      ]);
      function C(e) {
        let {
            steps: r,
            currentStep: n,
            body: i,
            paymentError: C,
            header: g,
            footer: P,
            isGift: I = !1,
            giftMessage: k = S.intl.string(S.t.DrgnS0),
            hideBreadcrumbs: v = !1,
            isLoading: j = !1,
            purchaseError: b,
            purchaseErrorBlockRef: y,
            planError: A,
            onScroll: T,
            scrollerClassName: R,
            hasCurrencies: M = !1,
          } = e,
          W = null;
        null != C && null == (0, h.ly)(C)
          ? (W = C)
          : null != b
            ? (W = b)
            : null != A && (W = A);
        let B = null != W ? W.message : "";
        null != W &&
          W instanceof u.HF &&
          (W.code === m.SM.CARD_DECLINED &&
            M &&
            (B += " ".concat(S.intl.string(S.t.iWvwQU))),
          W.code === m.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (B = S.intl.string(S.t.ypuSd3)),
          W.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (B = S.intl.string(S.t.mXMmWF)));
        let { stripe: D } = (0, p.usePaymentContext)();
        j = j || null == D;
        let O = l.useRef(new a.V7());
        l.useEffect(() => {
          let e = O.current;
          return (
            null != D || e.isStarted()
              ? null != D && e.stop()
              : e.start(10 * f.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, _.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [D]);
        let w = r.includes(h.h8.PAYMENT_TYPE)
          ? h.h8.PAYMENT_TYPE
          : h.h8.ADD_PAYMENT_STEPS;
        return (0, t.jsxs)(o.Elements, {
          options: N.OBo,
          stripe: D,
          children: [
            g,
            (0, t.jsxs)("div", {
              className: s()("paymentModalContent", x.content),
              children: [
                I && n !== h.h8.CONFIRM
                  ? (0, t.jsx)(d.Z, {
                      className: x.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: c.GiftIcon,
                      color:
                        null == k ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: k,
                    })
                  : null,
                v
                  ? null
                  : (0, t.jsx)("div", {
                      className: x.breadcrumbsWrapper,
                      children: (0, t.jsx)(c.Breadcrumbs, {
                        activeId: h.Ck.has(n) ? w : n,
                        breadcrumbs: r
                          .filter((e) => !h.Ck.has(e) && !E.has(e))
                          .map((e) => ({ id: e, label: (0, h.DJ)(e) })),
                      }),
                    }),
                (0, t.jsxs)("div", {
                  className: x.bodyWrapper,
                  children: [
                    null == W
                      ? null
                      : (0, t.jsx)("div", {
                          className: x.errorBlockWrapper,
                          children: (0, t.jsx)(c.FormErrorBlock, {
                            ref: y,
                            children: B,
                          }),
                        }),
                    j
                      ? (0, t.jsx)(c.Spinner, { className: x.loadingBlock })
                      : (0, t.jsx)(c.Sequencer, {
                          className: x.sequencer,
                          staticClassName: x.sequencerStatic,
                          animatedNodeClassName: x.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, t.jsx)(c.AdvancedScrollerThin, {
                            onScroll: T,
                            className: s()(x.scroller, R),
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
      var t = n(903797),
        l = n(731965);
      let o = Object.freeze({
          inspectedStickerPosition: { rowIndex: -1, columnIndex: -1 },
        }),
        i = (0, t.Z)((e) => o),
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
            return B;
          },
          default: function () {
            return O;
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
        p = n(598),
        h = n(409813),
        _ = n(185139),
        f = n(624138),
        N = n(790954),
        S = n(453070),
        x = n(926491),
        E = n(378233),
        C = n(515005),
        g = n(282896),
        P = n(929204),
        I = n(981631),
        k = n(388032),
        v = n(174018);
      let j = (0, f.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS,
        ),
        b = (0, f.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING,
        ),
        y = (0, f.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN,
        ),
        A = j + 2 * b,
        T = a()(N.pF, 250),
        R = () => {
          T.cancel();
        },
        M = (e) => {
          let { visibleRowIndex: r, columnIndex: n } = e;
          T.cancel(), (0, N.Mf)(n, r, m.u.MOUSE_EVENT);
        },
        W = (e) => {
          let {
              stickerPack: r,
              width: n,
              hasHeaderImage: o,
              isScrolling: s,
              onInspect: a,
            } = e,
            c = l.useMemo(() => [(0, E.z)(r)], [r]),
            d = (0, N.Y6)((e) => e.inspectedStickerPosition),
            {
              rowCountBySection: u,
              stickersGrid: m,
              gutterWidth: p,
            } = (0, S.el)({
              stickersCategories: c,
              stickerNodeMargin: y,
              stickerNodeWidth: A,
              listWidth: n,
            });
          return (0, t.jsxs)("div", {
            className: i()(v.container, { [v.containerWithHeader]: o }),
            children: [
              (0, t.jsx)(
                g.Z,
                { className: v.header, stickerPack: r, withDescription: !0 },
                r.id,
              ),
              (0, t.jsx)("div", {
                onFocus: R,
                onBlur: T,
                onMouseOver: R,
                onMouseOut: T,
                children: (() => {
                  if (0 === u.length) return null;
                  let e = [];
                  for (let r = 0; r < u[0]; r++)
                    e.push(
                      (0, t.jsx)(
                        C.Z,
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
                          stickerSize: j,
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
        B = (e) => {
          let { onClose: r, stickerPack: n } = e;
          (0, S.fP)();
          let l = (0, c.e7)([x.Z], () => x.Z.isPremiumPack(n.id));
          return (0, t.jsxs)(u.ModalFooter, {
            className: v.footer,
            children: [
              (0, t.jsx)(u.Anchor, {
                onClick: r,
                className: v.skuPreviewFooterCloseButton,
                children: k.intl.string(k.t.cpT0Cg),
              }),
              l &&
                (0, t.jsxs)(u.ShinyButton, {
                  color: u.Button.Colors.GREEN,
                  type: "submit",
                  innerClassName: v.premiumButtonInner,
                  onClick: () => {
                    r(), (0, P.Z)({ section: I.jXE.STICKER_PACK_VIEW_ALL });
                  },
                  children: [
                    (0, t.jsx)(u.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: v.premiumButtonNitroWheel,
                    }),
                    k.intl.string(k.t["w+kuhY"]),
                  ],
                }),
            ],
          });
        },
        D = (e) => {
          let { stickerPack: r, onClose: n } = e,
            l = (0, E.sM)(r, 1024);
          return null == l
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                className: v.headerWithImage,
                children: [
                  (0, t.jsx)("div", {
                    role: "image",
                    style: { backgroundImage: "url(".concat(l, ")") },
                    className: v.backgroundImage,
                  }),
                  (0, t.jsx)(u.ModalCloseButton, {
                    className: v.closeButton,
                    onClick: n,
                  }),
                ],
              });
        };
      function O(e) {
        let { onClose: r, stickerPack: n, ...o } = e,
          [i, s] = l.useState(null),
          a = l.useCallback((e) => {
            null !== e && s(e.offsetWidth);
          }, []);
        return (
          l.useLayoutEffect(() => {
            (0, N.pF)();
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
                    (0, t.jsx)(W, {
                      stickerPack: n,
                      hasHeaderImage: !0,
                      onInspect: M,
                      width: i,
                    }),
                }),
                footer: (0, t.jsx)(B, { onClose: r, stickerPack: n }),
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
        d = n(959687);
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
    174018: function (e, r, n) {
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
    959687: function (e, r, n) {
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
//# sourceMappingURL=3f03652384f733c0574f.js.map
