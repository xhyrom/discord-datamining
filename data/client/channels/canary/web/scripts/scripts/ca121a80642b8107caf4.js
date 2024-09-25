"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39511"],
  {
    609194: function (e, r, n) {
      var t,
        o,
        s,
        l,
        a,
        c = n(735250),
        i = n(470079),
        d = n(120356),
        u = n.n(d),
        _ = n(600164),
        m = n(865857);
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
      ((t = s || (s = {})).PRIMARY = "primary"),
        (t.SECONDARY = "secondary"),
        (t.WARNING = "warning"),
        (t.ERROR = "error"),
        ((o = l || (l = {})).SMALL = "small"),
        (o.LARGE = "large"),
        (o.NONE = "none");
      let E = {
          primary: m.colorPrimary,
          secondary: m.colorSecondary,
          warning: m.colorWarning,
          error: m.colorError,
        },
        h = { small: m.small, large: m.large, none: null };
      class N extends (a = i.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: t,
            className: o,
            iconClassName: s,
          } = this.props;
          return (0, c.jsxs)(_.Z, {
            className: u()(m.note, E[r], o),
            align: _.Z.Align.CENTER,
            children: [
              (0, c.jsx)(e, {
                className: u()(m.icon, h[t], s),
                color: "currentColor",
              }),
              (0, c.jsx)("div", { children: n }),
            ],
          });
        }
      }
      p(N, "Colors", s), p(N, "Sizes", l), (r.Z = N);
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
      var o = n(120356),
        s = n.n(o),
        l = n(481060),
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
        let _ = d.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === _.length
          ? null
          : ((_ = _.filter((e) => {
              let r = e.id !== c.h8.ADD_PAYMENT_STEPS,
                t = e.id === c.h8.ADD_PAYMENT_STEPS && !u.current;
              return !n || (n && (r || t));
            })),
            (0, t.jsx)("div", {
              className: s()("breadcrumb", i.wrapper, r),
              children: (0, t.jsx)(l.Breadcrumbs, {
                activeId: o,
                breadcrumbs: _,
              }),
            }));
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return f;
        },
      }),
        n(47120),
        n(411104);
      var t = n(735250),
        o = n(470079),
        s = n(160612),
        l = n(120356),
        a = n.n(l),
        c = n(846519),
        i = n(481060),
        d = n(609194),
        u = n(881052),
        _ = n(128069),
        m = n(598),
        p = n(409813);
      n(51499), n(614277);
      var E = n(122289),
        h = n(70956),
        N = n(981631),
        I = n(689938),
        S = n(896769);
      let C = new Set([
        p.h8.SKU_SELECT,
        p.h8.AWAITING_AUTHENTICATION,
        p.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        p.h8.CONFIRM,
      ]);
      function f(e) {
        let {
            steps: r,
            currentStep: n,
            body: l,
            paymentError: f,
            header: P,
            footer: A,
            isGift: T = !1,
            giftMessage: g = I.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: x = !1,
            isLoading: k = !1,
            purchaseError: R,
            purchaseErrorBlockRef: M,
            planError: j,
            onScroll: b,
            scrollerClassName: v,
            hasCurrencies: W = !1,
          } = e,
          B = null;
        null != f && null == (0, p.ly)(f)
          ? (B = f)
          : null != R
            ? (B = R)
            : null != j && (B = j);
        let y = null != B ? B.message : "";
        null != B &&
          B instanceof u.HF &&
          (B.code === _.SM.CARD_DECLINED &&
            W &&
            (y += " ".concat(I.Z.Messages.BILLING_ERROR_TRY_ANOTHER)),
          B.code === _.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (y = I.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          B.code === N.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (y = I.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: D } = (0, m.usePaymentContext)();
        k = k || null == D;
        let O = o.useRef(new c.V7());
        o.useEffect(() => {
          let e = O.current;
          return (
            null != D || e.isStarted()
              ? null != D && e.stop()
              : e.start(10 * h.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, E.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [D]);
        let Z = r.includes(p.h8.PAYMENT_TYPE)
          ? p.h8.PAYMENT_TYPE
          : p.h8.ADD_PAYMENT_STEPS;
        return (0, t.jsxs)(s.Elements, {
          options: N.OBo,
          stripe: D,
          children: [
            P,
            (0, t.jsxs)("div", {
              className: a()("paymentModalContent", S.content),
              children: [
                T && n !== p.h8.CONFIRM
                  ? (0, t.jsx)(d.Z, {
                      className: S.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == g ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: g,
                    })
                  : null,
                x
                  ? null
                  : (0, t.jsx)("div", {
                      className: S.breadcrumbsWrapper,
                      children: (0, t.jsx)(i.Breadcrumbs, {
                        activeId: p.Ck.has(n) ? Z : n,
                        breadcrumbs: r
                          .filter((e) => !p.Ck.has(e) && !C.has(e))
                          .map((e) => ({ id: e, label: (0, p.DJ)(e) })),
                      }),
                    }),
                (0, t.jsxs)("div", {
                  className: S.bodyWrapper,
                  children: [
                    null == B
                      ? null
                      : (0, t.jsx)("div", {
                          className: S.errorBlockWrapper,
                          children: (0, t.jsx)(i.FormErrorBlock, {
                            ref: M,
                            children: y,
                          }),
                        }),
                    k
                      ? (0, t.jsx)(i.Spinner, { className: S.loadingBlock })
                      : (0, t.jsx)(i.Sequencer, {
                          className: S.sequencer,
                          staticClassName: S.sequencerStatic,
                          animatedNodeClassName: S.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, t.jsx)(i.AdvancedScrollerThin, {
                            onScroll: b,
                            className: a()(S.scroller, v),
                            children: l,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            A,
          ],
        });
      }
    },
    790954: function (e, r, n) {
      n.d(r, {
        Mf: function () {
          return c;
        },
        Y6: function () {
          return a;
        },
        pF: function () {
          return i;
        },
      });
      var t = n(652874),
        o = n(731965);
      let s = Object.freeze({
          inspectedStickerPosition: { rowIndex: -1, columnIndex: -1 },
        }),
        l = (0, t.Z)((e) => s),
        a = l,
        c = (e, r, n) => {
          (0, o.j)(() =>
            l.setState({
              inspectedStickerPosition: {
                rowIndex: r,
                columnIndex: e,
                source: n,
              },
            }),
          );
        },
        i = () => {
          c(-1, -1);
        };
    },
    433550: function (e, r, n) {
      n.r(r),
        n.d(r, {
          StickerPackViewAllModalFooter: function () {
            return y;
          },
          default: function () {
            return O;
          },
        }),
        n(653041),
        n(47120);
      var t = n(735250),
        o = n(470079),
        s = n(120356),
        l = n.n(s),
        a = n(954955),
        c = n.n(a),
        i = n(442837),
        d = n(477690),
        u = n(481060),
        _ = n(691251),
        m = n(598),
        p = n(409813),
        E = n(185139),
        h = n(624138),
        N = n(790954),
        I = n(453070),
        S = n(926491),
        C = n(378233),
        f = n(515005),
        P = n(282896),
        A = n(929204),
        T = n(981631),
        g = n(689938),
        x = n(174018);
      let k = (0, h.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS,
        ),
        R = (0, h.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING,
        ),
        M = (0, h.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN,
        ),
        j = k + 2 * R,
        b = c()(N.pF, 250),
        v = () => {
          b.cancel();
        },
        W = (e) => {
          let { visibleRowIndex: r, columnIndex: n } = e;
          b.cancel(), (0, N.Mf)(n, r, _.u.MOUSE_EVENT);
        },
        B = (e) => {
          let {
              stickerPack: r,
              width: n,
              hasHeaderImage: s,
              isScrolling: a,
              onInspect: c,
            } = e,
            i = o.useMemo(() => [(0, C.z)(r)], [r]),
            d = (0, N.Y6)((e) => e.inspectedStickerPosition),
            {
              rowCountBySection: u,
              stickersGrid: _,
              gutterWidth: m,
            } = (0, I.el)({
              stickersCategories: i,
              stickerNodeMargin: M,
              stickerNodeWidth: j,
              listWidth: n,
            });
          return (0, t.jsxs)("div", {
            className: l()(x.container, { [x.containerWithHeader]: s }),
            children: [
              (0, t.jsx)(
                P.Z,
                { className: x.header, stickerPack: r, withDescription: !0 },
                r.id,
              ),
              (0, t.jsx)("div", {
                onFocus: v,
                onBlur: b,
                onMouseOver: v,
                onMouseOut: b,
                children: (() => {
                  if (0 === u.length) return null;
                  let e = [];
                  for (let r = 0; r < u[0]; r++)
                    e.push(
                      (0, t.jsx)(
                        f.Z,
                        {
                          enlargeOnInteraction: !0,
                          preferAnimation: !0,
                          gutterWidth: m,
                          inspectedStickerPosition: d,
                          isScrolling: a,
                          onInspect: c,
                          rowIndex: r,
                          stickerDescriptors: _[r],
                          stickerPadding: R,
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
        y = (e) => {
          let { onClose: r, stickerPack: n } = e;
          (0, I.fP)();
          let o = (0, i.e7)([S.Z], () => S.Z.isPremiumPack(n.id));
          return (0, t.jsxs)(u.ModalFooter, {
            className: x.footer,
            children: [
              (0, t.jsx)(u.Anchor, {
                onClick: r,
                className: x.skuPreviewFooterCloseButton,
                children: g.Z.Messages.CLOSE,
              }),
              o &&
                (0, t.jsxs)(u.ShinyButton, {
                  color: u.Button.Colors.GREEN,
                  type: "submit",
                  innerClassName: x.premiumButtonInner,
                  onClick: () => {
                    r(), (0, A.Z)({ section: T.jXE.STICKER_PACK_VIEW_ALL });
                  },
                  children: [
                    (0, t.jsx)(u.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: x.premiumButtonNitroWheel,
                    }),
                    g.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM,
                  ],
                }),
            ],
          });
        },
        D = (e) => {
          let { stickerPack: r, onClose: n } = e,
            o = (0, C.sM)(r, 1024);
          return null == o
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                className: x.headerWithImage,
                children: [
                  (0, t.jsx)("div", {
                    role: "image",
                    style: { backgroundImage: "url(".concat(o, ")") },
                    className: x.backgroundImage,
                  }),
                  (0, t.jsx)(u.ModalCloseButton, {
                    className: x.closeButton,
                    onClick: n,
                  }),
                ],
              });
        };
      function O(e) {
        let { onClose: r, stickerPack: n, ...s } = e,
          [l, a] = o.useState(null),
          c = o.useCallback((e) => {
            null !== e && a(e.offsetWidth);
          }, []);
        return (
          o.useLayoutEffect(() => {
            (0, N.pF)();
          }, []),
          (0, t.jsx)(m.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(u.ModalRoot, {
              ...s,
              "aria-labelledby": "sticker-pack-sku-preview-modal",
              children: (0, t.jsx)(E.Z, {
                hideBreadcrumbs: !0,
                body: (0, t.jsx)("div", {
                  ref: c,
                  children:
                    null != l &&
                    (0, t.jsx)(B, {
                      stickerPack: n,
                      hasHeaderImage: !0,
                      onInspect: W,
                      width: l,
                    }),
                }),
                footer: (0, t.jsx)(y, { onClose: r, stickerPack: n }),
                header: (0, t.jsx)(D, { onClose: r, stickerPack: n }),
                onScroll: b,
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
        o = n(470079),
        s = n(120356),
        l = n.n(s),
        a = n(481060),
        c = n(378233),
        i = n(689938),
        d = n(959687);
      let u = (e) => {
        let { stickerPack: r } = e;
        return (0, t.jsx)("div", {
          className: d.features,
          children: (0, c.X_)(r)
            ? (0, t.jsx)(a.Tooltip, {
                tooltipClassName: d.featuresTooltip,
                position: "top",
                text: i.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                children: (e) =>
                  (0, t.jsx)(a.PlayIcon, {
                    size: "xs",
                    color: "currentColor",
                    ...e,
                    className: d.featureIcon,
                  }),
              })
            : null,
        });
      };
      r.Z = o.memo((e) => {
        let { className: r, stickerPack: n, withDescription: o = !1 } = e;
        return (0, t.jsxs)("div", {
          className: l()(d.header, r),
          children: [
            (0, t.jsxs)("div", {
              className: d.title,
              children: [
                (0, t.jsx)(a.Heading, {
                  className: d.heading,
                  variant: "heading-sm/semibold",
                  children: n.name,
                }),
                (0, t.jsx)(u, { stickerPack: n }),
              ],
            }),
            o &&
              null != n.description &&
              (0, t.jsx)(a.Text, {
                className: d.description,
                variant: "text-sm/normal",
                children: n.description,
              }),
            (0, t.jsx)("div", {
              className: d.count,
              children: i.Z.Messages.STICKER_PACK_STICKER_COUNT.format({
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
//# sourceMappingURL=ca121a80642b8107caf4.js.map
