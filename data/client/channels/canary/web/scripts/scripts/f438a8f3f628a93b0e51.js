"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39511"],
  {
    790954: function (e, t, n) {
      n.d(t, {
        Mf: function () {
          return c;
        },
        Y6: function () {
          return a;
        },
        pF: function () {
          return l;
        },
      });
      var r = n(15729),
        i = n(731965);
      let o = Object.freeze({
          inspectedStickerPosition: { rowIndex: -1, columnIndex: -1 },
        }),
        s = (0, r.U)((e) => o),
        a = s,
        c = (e, t, n) => {
          (0, i.j)(() =>
            s.setState({
              inspectedStickerPosition: {
                rowIndex: t,
                columnIndex: e,
                source: n,
              },
            }),
          );
        },
        l = () => {
          c(-1, -1);
        };
    },
    433550: function (e, t, n) {
      n.r(t),
        n.d(t, {
          StickerPackViewAllModalFooter: function () {
            return K;
          },
          default: function () {
            return y;
          },
        }),
        n(653041),
        n(47120);
      var r = n(200651),
        i = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(954955),
        c = n.n(a),
        l = n(442837),
        d = n(477690),
        u = n(481060),
        h = n(691251),
        m = n(563132),
        p = n(409813),
        k = n(185139),
        _ = n(624138),
        I = n(790954),
        S = n(453070),
        f = n(926491),
        x = n(378233),
        C = n(515005),
        N = n(282896),
        g = n(929204),
        P = n(981631),
        j = n(388032),
        E = n(9520);
      let v = (0, _.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS,
        ),
        T = (0, _.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING,
        ),
        W = (0, _.Mg)(
          d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN,
        ),
        M = v + 2 * T,
        R = c()(I.pF, 250),
        B = () => {
          R.cancel();
        },
        b = (e) => {
          let { visibleRowIndex: t, columnIndex: n } = e;
          R.cancel(), (0, I.Mf)(n, t, h.u.MOUSE_EVENT);
        },
        A = (e) => {
          let {
              stickerPack: t,
              width: n,
              hasHeaderImage: o,
              isScrolling: a,
              onInspect: c,
            } = e,
            l = i.useMemo(() => [(0, x.z)(t)], [t]),
            d = (0, I.Y6)((e) => e.inspectedStickerPosition),
            {
              rowCountBySection: u,
              stickersGrid: h,
              gutterWidth: m,
            } = (0, S.el)({
              stickersCategories: l,
              stickerNodeMargin: W,
              stickerNodeWidth: M,
              listWidth: n,
            });
          return (0, r.jsxs)("div", {
            className: s()(E.container, { [E.containerWithHeader]: o }),
            children: [
              (0, r.jsx)(
                N.Z,
                { className: E.header, stickerPack: t, withDescription: !0 },
                t.id,
              ),
              (0, r.jsx)("div", {
                onFocus: B,
                onBlur: R,
                onMouseOver: B,
                onMouseOut: R,
                children: (() => {
                  if (0 === u.length) return null;
                  let e = [];
                  for (let t = 0; t < u[0]; t++)
                    e.push(
                      (0, r.jsx)(
                        C.Z,
                        {
                          enlargeOnInteraction: !0,
                          preferAnimation: !0,
                          gutterWidth: m,
                          inspectedStickerPosition: d,
                          isScrolling: a,
                          onInspect: c,
                          rowIndex: t,
                          stickerDescriptors: h[t],
                          stickerPadding: T,
                          stickerSize: v,
                          isDisplayingIndividualStickers: !0,
                          checkSendability: !1,
                        },
                        t,
                      ),
                    );
                  return e;
                })(),
              }),
            ],
          });
        },
        K = (e) => {
          let { onClose: t, stickerPack: n } = e;
          (0, S.fP)();
          let i = (0, l.e7)([f.Z], () => f.Z.isPremiumPack(n.id));
          return (0, r.jsxs)(u.ModalFooter, {
            className: E.footer,
            children: [
              (0, r.jsx)(u.Anchor, {
                onClick: t,
                className: E.skuPreviewFooterCloseButton,
                children: j.intl.string(j.t.cpT0Cg),
              }),
              i &&
                (0, r.jsxs)(u.ShinyButton, {
                  color: u.Button.Colors.GREEN,
                  type: "submit",
                  innerClassName: E.premiumButtonInner,
                  onClick: () => {
                    t(), (0, g.Z)({ section: P.jXE.STICKER_PACK_VIEW_ALL });
                  },
                  children: [
                    (0, r.jsx)(u.NitroWheelIcon, {
                      size: "md",
                      color: "currentColor",
                      className: E.premiumButtonNitroWheel,
                    }),
                    j.intl.string(j.t["w+kuhY"]),
                  ],
                }),
            ],
          });
        },
        w = (e) => {
          let { stickerPack: t, onClose: n } = e,
            i = (0, x.sM)(t, 1024);
          return null == i
            ? null
            : (0, r.jsxs)(u.ModalHeader, {
                className: E.headerWithImage,
                children: [
                  (0, r.jsx)("div", {
                    role: "image",
                    style: { backgroundImage: "url(".concat(i, ")") },
                    className: E.backgroundImage,
                  }),
                  (0, r.jsx)(u.ModalCloseButton, {
                    className: E.closeButton,
                    onClick: n,
                  }),
                ],
              });
        };
      function y(e) {
        let { onClose: t, stickerPack: n, ...o } = e,
          [s, a] = i.useState(null),
          c = i.useCallback((e) => {
            null !== e && a(e.offsetWidth);
          }, []);
        return (
          i.useLayoutEffect(() => {
            (0, I.pF)();
          }, []),
          (0, r.jsx)(m.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(u.ModalRoot, {
              ...o,
              "aria-labelledby": "sticker-pack-sku-preview-modal",
              children: (0, r.jsx)(k.Z, {
                hideBreadcrumbs: !0,
                body: (0, r.jsx)("div", {
                  ref: c,
                  children:
                    null != s &&
                    (0, r.jsx)(A, {
                      stickerPack: n,
                      hasHeaderImage: !0,
                      onInspect: b,
                      width: s,
                    }),
                }),
                footer: (0, r.jsx)(K, { onClose: t, stickerPack: n }),
                header: (0, r.jsx)(w, { onClose: t, stickerPack: n }),
                onScroll: R,
                steps: [p.h8.SKU_PREVIEW],
                currentStep: p.h8.SKU_PREVIEW,
              }),
            }),
          })
        );
      }
    },
    282896: function (e, t, n) {
      var r = n(200651),
        i = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(481060),
        c = n(378233),
        l = n(388032),
        d = n(654543);
      let u = (e) => {
        let { stickerPack: t } = e;
        return (0, r.jsx)("div", {
          className: d.features,
          children: (0, c.X_)(t)
            ? (0, r.jsx)(a.Tooltip, {
                tooltipClassName: d.featuresTooltip,
                position: "top",
                text: l.intl.string(l.t.W11rMT),
                children: (e) =>
                  (0, r.jsx)(a.PlayIcon, {
                    size: "xs",
                    color: "currentColor",
                    ...e,
                    className: d.featureIcon,
                  }),
              })
            : null,
        });
      };
      t.Z = i.memo((e) => {
        let { className: t, stickerPack: n, withDescription: i = !1 } = e;
        return (0, r.jsxs)("div", {
          className: s()(d.header, t),
          children: [
            (0, r.jsxs)("div", {
              className: d.title,
              children: [
                (0, r.jsx)(a.Heading, {
                  className: d.heading,
                  variant: "heading-sm/semibold",
                  children: n.name,
                }),
                (0, r.jsx)(u, { stickerPack: n }),
              ],
            }),
            i &&
              null != n.description &&
              (0, r.jsx)(a.Text, {
                className: d.description,
                variant: "text-sm/normal",
                children: n.description,
              }),
            (0, r.jsx)("div", {
              className: d.count,
              children: l.intl.format(l.t["0S3JpK"], {
                numStickers: n.stickers.length,
              }),
            }),
          ],
        });
      });
    },
    9520: function (e, t, n) {
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
    654543: function (e, t, n) {
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
//# sourceMappingURL=f438a8f3f628a93b0e51.js.map
