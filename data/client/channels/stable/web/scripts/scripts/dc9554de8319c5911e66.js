"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39511"],
  {
    609194: function (e, r, n) {
      var t,
        l,
        o,
        s,
        i,
        a = n(735250),
        c = n(470079),
        d = n(120356),
        u = n.n(d),
        m = n(600164),
        _ = n(865857);
      function p(e, r, n) {
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
        ((l = s || (s = {})).SMALL = "small"),
        (l.LARGE = "large"),
        (l.NONE = "none");
      let h = {
          primary: _.colorPrimary,
          secondary: _.colorSecondary,
          warning: _.colorWarning,
          error: _.colorError,
        },
        E = { small: _.small, large: _.large, none: null };
      class N extends (i = c.PureComponent) {
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
            className: u()(_.note, h[r], l),
            align: m.Z.Align.CENTER,
            children: [
              (0, a.jsx)(e, {
                className: u()(_.icon, E[t], o),
                color: "currentColor",
              }),
              (0, a.jsx)("div", { children: n }),
            ],
          });
        }
      }
      p(N, "Colors", o), p(N, "Sizes", s), (r.Z = N);
    },
    51499: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return d;
        },
      }),
        n(390547);
      var t = n(735250);
      n(470079);
      var l = n(120356),
        o = n.n(l),
        s = n(481060),
        i = n(598),
        a = n(409813),
        c = n(548458);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: l,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, i.usePaymentContext)();
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
              children: (0, t.jsx)(s.Breadcrumbs, {
                activeId: l,
                breadcrumbs: m,
              }),
            }));
      }
    },
    614277: function (e, r, n) {
      n.d(r, {
        C3: function () {
          return p;
        },
        O3: function () {
          return h;
        },
        ZP: function () {
          return _;
        },
      });
      var t = n(735250),
        l = n(470079),
        o = n(120356),
        s = n.n(o),
        i = n(512722),
        a = n.n(i),
        c = n(699581),
        d = n(481060),
        u = n(598),
        m = n(130298);
      function _(e) {
        var r, n, o, i, c, _;
        let {
            header: p,
            isLargeModal: h,
            stepProps: E,
          } = (function (e) {
            let { header: r, isLargeModal: n, ...t } = e;
            return { header: r, isLargeModal: n, stepProps: t };
          })(e),
          {
            step: N,
            stepConfigs: S,
            setBodyNode: f,
            setFooterNode: C,
            setModalOverlayNode: I,
            setReadySlideId: P,
          } = (0, u.usePaymentContext)(),
          x = S.find((e) => e.key === N);
        l.useEffect(() => {
          I(null);
        }, [N, I]),
          a()(null != x, "Unknown step for current payment flow.");
        let g =
            null !==
              (c =
                null == x
                  ? void 0
                  : null === (r = x.options) || void 0 === r
                    ? void 0
                    : r.hideSlider) &&
            void 0 !== c &&
            c,
          A =
            null == x
              ? void 0
              : null === (n = x.options) || void 0 === n
                ? void 0
                : n.bodyClassName,
          T =
            void 0 !== h && h
              ? m.sliderBodyLarge
              : null == x
                ? void 0
                : null === (o = x.options) || void 0 === o
                  ? void 0
                  : o.sliderBodyClassName;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            null ===
              (_ =
                null == x
                  ? void 0
                  : null === (i = x.options) || void 0 === i
                    ? void 0
                    : i.renderHeader) ||
            void 0 === _ ||
            _
              ? p
              : null,
            x.renderStep(E),
            null == N || g
              ? null
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(d.ModalContent, {
                      className: s()(m.body, A),
                      children: (0, t.jsx)(d.Slides, {
                        activeSlide: N,
                        centered: !1,
                        onSlideReady: (e) => P(e),
                        children: S.filter((e) => null != e.key).map((e) =>
                          (0, t.jsx)(
                            d.Slide,
                            {
                              id: e.key,
                              children: (0, t.jsx)("form", {
                                className: s()(m.sliderBody, T),
                                ref: (e) => f(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, t.jsx)("div", { ref: (e) => C(e) }),
                    (0, t.jsx)("div", { ref: (e) => I(e) }),
                  ],
                }),
          ],
        });
      }
      function p(e) {
        let { children: r } = e,
          { bodyNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : c.createPortal(r, n);
      }
      function h(e) {
        let { children: r } = e,
          { footerNode: n } = (0, u.usePaymentContext)();
        return null == n ? null : c.createPortal(r, n);
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return I;
        },
      }),
        n(47120),
        n(411104);
      var t = n(735250),
        l = n(470079),
        o = n(160612),
        s = n(120356),
        i = n.n(s),
        a = n(846519),
        c = n(481060),
        d = n(609194),
        u = n(881052),
        m = n(128069),
        _ = n(598),
        p = n(409813);
      n(51499), n(614277);
      var h = n(122289),
        E = n(70956),
        N = n(981631),
        S = n(689938),
        f = n(896769);
      let C = new Set([
        p.h8.SKU_SELECT,
        p.h8.AWAITING_AUTHENTICATION,
        p.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        p.h8.CONFIRM,
      ]);
      function I(e) {
        let {
            steps: r,
            currentStep: n,
            body: s,
            paymentError: I,
            header: P,
            footer: x,
            isGift: g = !1,
            giftMessage: A = S.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: T = !1,
            isLoading: k = !1,
            purchaseError: v,
            purchaseErrorBlockRef: j,
            planError: R,
            onScroll: M,
            scrollerClassName: b,
            hasCurrencies: y = !1,
          } = e,
          B = null;
        null != I && null == (0, p.ly)(I)
          ? (B = I)
          : null != v
            ? (B = v)
            : null != R && (B = R);
        let W = null != B ? B.message : "";
        null != B &&
          B instanceof u.HF &&
          (B.code === m.SM.CARD_DECLINED &&
            y &&
            (W += " ".concat(S.Z.Messages.BILLING_ERROR_TRY_ANOTHER)),
          B.code === m.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (W = S.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          B.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (W = S.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: D } = (0, _.usePaymentContext)();
        k = k || null == D;
        let O = l.useRef(new a.V7());
        l.useEffect(() => {
          let e = O.current;
          return (
            null != D || e.isStarted()
              ? null != D && e.stop()
              : e.start(10 * E.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, h.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [D]);
        let Z = r.includes(p.h8.PAYMENT_TYPE)
          ? p.h8.PAYMENT_TYPE
          : p.h8.ADD_PAYMENT_STEPS;
        return (0, t.jsxs)(o.Elements, {
          options: N.OBo,
          stripe: D,
          children: [
            P,
            (0, t.jsxs)("div", {
              className: i()("paymentModalContent", f.content),
              children: [
                g && n !== p.h8.CONFIRM
                  ? (0, t.jsx)(d.Z, {
                      className: f.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: c.GiftIcon,
                      color:
                        null == A ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: A,
                    })
                  : null,
                T
                  ? null
                  : (0, t.jsx)("div", {
                      className: f.breadcrumbsWrapper,
                      children: (0, t.jsx)(c.Breadcrumbs, {
                        activeId: p.Ck.has(n) ? Z : n,
                        breadcrumbs: r
                          .filter((e) => !p.Ck.has(e) && !C.has(e))
                          .map((e) => ({ id: e, label: (0, p.DJ)(e) })),
                      }),
                    }),
                (0, t.jsxs)("div", {
                  className: f.bodyWrapper,
                  children: [
                    null == B
                      ? null
                      : (0, t.jsx)("div", {
                          className: f.errorBlockWrapper,
                          children: (0, t.jsx)(c.FormErrorBlock, {
                            ref: j,
                            children: W,
                          }),
                        }),
                    k
                      ? (0, t.jsx)(c.Spinner, { className: f.loadingBlock })
                      : (0, t.jsx)(c.Sequencer, {
                          className: f.sequencer,
                          staticClassName: f.sequencerStatic,
                          animatedNodeClassName: f.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, t.jsx)(c.AdvancedScrollerThin, {
                            onScroll: M,
                            className: i()(f.scroller, b),
                            children: s,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            x,
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
          return i;
        },
        pF: function () {
          return c;
        },
      });
      var t = n(652874),
        l = n(731965);
      let o = Object.freeze({
          inspectedStickerPosition: { rowIndex: -1, columnIndex: -1 },
        }),
        s = (0, t.Z)((e) => o),
        i = s,
        a = (e, r, n) => {
          (0, l.j)(() =>
            s.setState({
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
            return O;
          },
        }),
        n(653041),
        n(47120);
      var t = n(735250),
        l = n(470079),
        o = n(120356),
        s = n.n(o),
        i = n(954955),
        a = n.n(i),
        c = n(442837),
        d = n(477690),
        u = n(481060),
        m = n(691251),
        _ = n(598),
        p = n(409813),
        h = n(185139),
        E = n(624138),
        N = n(790954),
        S = n(453070),
        f = n(926491),
        C = n(378233),
        I = n(515005),
        P = n(282896),
        x = n(929204),
        g = n(981631),
        A = n(689938),
        T = n(174018);
      let k = (0, E.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS,
        ),
        v = (0, E.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING,
        ),
        j = (0, E.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN,
        ),
        R = k + 2 * v,
        M = a()(N.pF, 250),
        b = () => {
          M.cancel();
        },
        y = (e) => {
          let { visibleRowIndex: r, columnIndex: n } = e;
          M.cancel(), (0, N.Mf)(n, r, m.u.MOUSE_EVENT);
        },
        B = (e) => {
          let {
              stickerPack: r,
              width: n,
              hasHeaderImage: o,
              isScrolling: i,
              onInspect: a,
            } = e,
            c = l.useMemo(() => [(0, C.z)(r)], [r]),
            d = (0, N.Y6)((e) => e.inspectedStickerPosition),
            {
              rowCountBySection: u,
              stickersGrid: m,
              gutterWidth: _,
            } = (0, S.el)({
              stickersCategories: c,
              stickerNodeMargin: j,
              stickerNodeWidth: R,
              listWidth: n,
            });
          return (0, t.jsxs)("div", {
            className: s()(T.container, { [T.containerWithHeader]: o }),
            children: [
              (0, t.jsx)(
                P.Z,
                { className: T.header, stickerPack: r, withDescription: !0 },
                r.id,
              ),
              (0, t.jsx)("div", {
                onFocus: b,
                onBlur: M,
                onMouseOver: b,
                onMouseOut: M,
                children: (() => {
                  if (0 === u.length) return null;
                  let e = [];
                  for (let r = 0; r < u[0]; r++)
                    e.push(
                      (0, t.jsx)(
                        I.Z,
                        {
                          enlargeOnInteraction: !0,
                          preferAnimation: !0,
                          gutterWidth: _,
                          inspectedStickerPosition: d,
                          isScrolling: i,
                          onInspect: a,
                          rowIndex: r,
                          stickerDescriptors: m[r],
                          stickerPadding: v,
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
          (0, S.fP)();
          let l = (0, c.e7)([f.Z], () => f.Z.isPremiumPack(n.id));
          return (0, t.jsxs)(u.ModalFooter, {
            className: T.footer,
            children: [
              (0, t.jsx)(u.Anchor, {
                onClick: r,
                className: T.skuPreviewFooterCloseButton,
                children: A.Z.Messages.CLOSE,
              }),
              l &&
                (0, t.jsxs)(u.ShinyButton, {
                  color: u.Button.Colors.GREEN,
                  type: "submit",
                  innerClassName: T.premiumButtonInner,
                  onClick: () => {
                    r(), (0, x.Z)({ section: g.jXE.STICKER_PACK_VIEW_ALL });
                  },
                  children: [
                    (0, t.jsx)(u.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: T.premiumButtonNitroWheel,
                    }),
                    A.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM,
                  ],
                }),
            ],
          });
        },
        D = (e) => {
          let { stickerPack: r, onClose: n } = e,
            l = (0, C.sM)(r, 1024);
          return null == l
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                className: T.headerWithImage,
                children: [
                  (0, t.jsx)("div", {
                    role: "image",
                    style: { backgroundImage: "url(".concat(l, ")") },
                    className: T.backgroundImage,
                  }),
                  (0, t.jsx)(u.ModalCloseButton, {
                    className: T.closeButton,
                    onClick: n,
                  }),
                ],
              });
        };
      function O(e) {
        let { onClose: r, stickerPack: n, ...o } = e,
          [s, i] = l.useState(null),
          a = l.useCallback((e) => {
            null !== e && i(e.offsetWidth);
          }, []);
        return (
          l.useLayoutEffect(() => {
            (0, N.pF)();
          }, []),
          (0, t.jsx)(_.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(u.ModalRoot, {
              ...o,
              "aria-labelledby": "sticker-pack-sku-preview-modal",
              children: (0, t.jsx)(h.Z, {
                hideBreadcrumbs: !0,
                body: (0, t.jsx)("div", {
                  ref: a,
                  children:
                    null != s &&
                    (0, t.jsx)(B, {
                      stickerPack: n,
                      hasHeaderImage: !0,
                      onInspect: y,
                      width: s,
                    }),
                }),
                footer: (0, t.jsx)(W, { onClose: r, stickerPack: n }),
                header: (0, t.jsx)(D, { onClose: r, stickerPack: n }),
                onScroll: M,
                steps: [p.h8.SKU_PREVIEW],
                currentStep: p.h8.SKU_PREVIEW,
              }),
            }),
          })
        );
      }
    },
    282896: function (e, r, n) {
      var t = n(735250),
        l = n(470079),
        o = n(120356),
        s = n.n(o),
        i = n(481060),
        a = n(378233),
        c = n(689938),
        d = n(959687);
      let u = (e) => {
        let { stickerPack: r } = e;
        return (0, t.jsx)("div", {
          className: d.features,
          children: (0, a.X_)(r)
            ? (0, t.jsx)(i.Tooltip, {
                tooltipClassName: d.featuresTooltip,
                position: "top",
                text: c.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                children: (e) =>
                  (0, t.jsx)(i.PlayIcon, {
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
          className: s()(d.header, r),
          children: [
            (0, t.jsxs)("div", {
              className: d.title,
              children: [
                (0, t.jsx)(i.Heading, {
                  className: d.heading,
                  variant: "heading-sm/semibold",
                  children: n.name,
                }),
                (0, t.jsx)(u, { stickerPack: n }),
              ],
            }),
            l &&
              null != n.description &&
              (0, t.jsx)(i.Text, {
                className: d.description,
                variant: "text-sm/normal",
                children: n.description,
              }),
            (0, t.jsx)("div", {
              className: d.count,
              children: c.Z.Messages.STICKER_PACK_STICKER_COUNT.format({
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
//# sourceMappingURL=dc9554de8319c5911e66.js.map
