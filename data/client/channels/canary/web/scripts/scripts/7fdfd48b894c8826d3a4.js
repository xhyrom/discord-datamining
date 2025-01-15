"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57674"],
  {
    982240: function (e) {
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    315853: function (e) {
      e.exports = "/assets/db7d719584a1dbf32855.png";
    },
    225657: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(442837),
        s = t(481060),
        r = t(700582),
        a = t(987209),
        o = t(699516),
        d = t(594174),
        c = t(51144),
        u = t(388032);
      n.Z = (e) => {
        let { selectedSkuId: n, validateSelectedGift: t, className: h } = e,
          f = (0, l.Wu)([o.Z], () => o.Z.getFriendIDs()),
          x = (0, l.Wu)(
            [d.default],
            () => d.default.filter((e) => f.includes(e.id) && !e.bot),
            [f],
          ),
          { giftRecipient: C, setGiftRecipient: m } = (0, a.wD)();
        return null == n
          ? null
          : (0, i.jsxs)("div", {
              className: h,
              children: [
                (0, i.jsx)(s.FormTitle, {
                  children: u.intl.string(u.t.xFn72t),
                }),
                (0, i.jsx)(s.SearchableSelect, {
                  placeholder: u.intl.string(u.t.R0vK0N),
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, i.jsx)(r.Z, {
                          user: e.value,
                          size: s.AvatarSizes.SIZE_20,
                        }),
                  value: C,
                  onChange: (e) => {
                    t(e, n), m(e);
                  },
                  options: x.map((e) => ({
                    value: e,
                    label: "".concat(c.ZP.getUserTag(e)),
                  })),
                }),
              ],
            });
      };
    },
    752053: function (e, n, t) {
      t.d(n, {
        i: function () {
          return l;
        },
      });
      var i,
        l,
        s = t(200651);
      t(192379);
      var r = t(442837),
        a = t(780384),
        o = t(481060),
        d = t(410030),
        c = t(594174),
        u = t(388032),
        h = t(733983),
        f = t(982240),
        x = t(533854);
      ((i = l || (l = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      n.Z = (e) => {
        let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
          l = (0, d.ZP)(),
          C = (0, r.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          m = 1 === t ? h.giftModalContainer : h.shopPageContainer,
          g =
            1 === t ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
        return (0, s.jsxs)("div", {
          className: m,
          children: [
            (0, s.jsx)("img", {
              className: h.__invalid_loadIssueImg,
              src: (0, a.wj)(l) ? f : x,
              alt: "",
            }),
            (0, s.jsx)(o.Heading, {
              className: h.heading1,
              variant: "heading-xl/semibold",
              children: u.intl.string(u.t["i5SQ7+"]),
            }),
            (0, s.jsx)(o.Text, {
              className: h.description,
              variant: "text-md/normal",
              children: g,
            }),
            C &&
              null != i &&
              (0, s.jsx)(o.Text, {
                variant: "text-md/normal",
                children: "staff-only debug: " + i,
              }),
            (0, s.jsx)(o.Button, {
              className: h.reload,
              size: o.Button.Sizes.MEDIUM,
              color: o.Button.Colors.BRAND,
              onClick: n,
              children: u.intl.string(u.t["+hivLS"]),
            }),
          ],
        });
      };
    },
    48931: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        s = t(267097),
        r = t(752053),
        a = t(476090);
      function o(e) {
        let { onClose: n } = e,
          { refreshCategories: t } = (0, s.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.ModalHeader, {
              className: a.header,
              children: (0, i.jsx)(l.ModalCloseButton, {
                className: a.closeButton,
                onClick: n,
              }),
            }),
            (0, i.jsx)(r.Z, { onRetry: t, errorOrigin: r.i.GIFT_MODAL }),
          ],
        });
      }
    },
    742956: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(627341);
      var i = t(200651);
      t(192379);
      var l = t(120356),
        s = t.n(l),
        r = t(278074),
        a = t(481060),
        o = t(109213),
        d = t(409813),
        c = t(474936),
        u = t(388032),
        h = t(767537);
      function f(e) {
        let { step: n, onClose: t, giftingOrigin: l } = e,
          { enabled: f } = o.G.useExperiment(
            { location: "CollectiblesGiftPaymentModalHeader" },
            { autoTrackExposure: !1 },
          ),
          x = (0, r.EQ)(n)
            .with(d.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(d.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(d.h8.GIFT_CUSTOMIZATION, () =>
              f && l === c.Wt.DM_CHANNEL
                ? u.intl.string(u.t["xU+d9P"])
                : u.intl.string(u.t["JCFN//"]),
            )
            .with(d.h8.AWAITING_PURCHASE_TOKEN_AUTH, () =>
              u.intl.string(u.t.lDbi6O),
            )
            .with(d.h8.CONFIRM, () => "")
            .otherwise(() => null);
        return null == x
          ? null
          : (0, i.jsxs)(a.ModalHeader, {
              className: s()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-lg/semibold",
                  children: x,
                }),
                (0, i.jsx)(a.ModalCloseButton, {
                  onClick: t,
                  className: h.closeButtonGift,
                }),
              ],
            });
      }
    },
    608579: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        s = t(120356),
        r = t.n(s),
        a = t(119617),
        o = t(442837),
        d = t(570140),
        c = t(100527),
        u = t(906732),
        h = t(597688),
        f = t(317951),
        x = t(987209),
        C = t(563132),
        m = t(409813),
        g = t(791785),
        p = t(961830),
        S = t(742956),
        j = t(346790),
        v = t(49308),
        E = t(117652),
        I = t(126982),
        T = t(981631),
        N = t(302800),
        _ = t(231338),
        M = t(123955);
      function y(e) {
        var n;
        let {
            onClose: t,
            onComplete: s,
            onStepChange: y,
            transitionState: Z,
            loadId: A,
            skuId: O,
            isGift: P = !1,
            giftRecipient: k,
            giftMessage: b,
            giftingOrigin: L,
            analyticsLocations: D,
            returnRef: G,
          } = e,
          { analyticsLocations: R } = (0, u.ZP)([
            ...D,
            c.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          B = l.useRef(new a.qA()),
          [F, w] = l.useState(null),
          [H, W] = l.useState(!1),
          U = l.useMemo(() => (0, N.UY)(O), [O]),
          Y = (0, o.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
          K = null != O ? [O] : Y,
          V = null !== (n = K[0]) && void 0 !== n ? n : null,
          q = null != O && f.Rm.has(O),
          z = l.useCallback(() => {
            W(!0), null == s || s();
          }, [s]),
          J = l.useCallback(
            (e) => {
              W(!1),
                t(e),
                d.Z.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
            },
            [t],
          ),
          Q = l.useMemo(
            () => [
              p.WA,
              ...(P ? [E.Dd] : []),
              j.n,
              ...p.yp,
              p.wo,
              {
                key: m.h8.CONFIRM,
                renderStep: (e) =>
                  (0, i.jsx)(v.x, {
                    ...e,
                    confettiCanvas: F,
                    analyticsLocations: R,
                    hideConfetti: null != U,
                  }),
                options: {
                  bodyClassName: M.modalOverrideBody,
                  sliderBodyClassName: M.modalOverrideSliderBody,
                },
              },
            ],
            [R, F, U, P],
          );
        return (0, i.jsxs)(u.Gt, {
          value: R,
          children: [
            (0, i.jsx)(a.O_, {
              ref: w,
              className: M.confettiCanvas,
              environment: B.current,
            }),
            null != U &&
              (0, i.jsx)("img", {
                src: U.imageSrc,
                className: r()(M.customConfetti, { [M.hidden]: !H }),
                style: U.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, i.jsx)(C.PaymentContextProvider, {
              loadId: A,
              stepConfigs: Q,
              applicationId: T.XAJ,
              skuIDs: K,
              isGift: P,
              activeSubscription: null,
              purchaseType: _.GZ.ONE_TIME,
              children: (0, i.jsx)(x.KB, {
                isGift: P,
                giftRecipient: k,
                giftMessage: b,
                giftingOrigin: L,
                children: (0, i.jsx)(g.PaymentModal, {
                  onClose: J,
                  onComplete: z,
                  applicationId: T.XAJ,
                  skuId: V,
                  initialPlanId: null,
                  analyticsLocations: R,
                  transitionState: Z,
                  renderHeader: (e, n, t) =>
                    P
                      ? (0, i.jsx)(S.Z, {
                          step: t,
                          onClose: () => n(!1),
                          giftingOrigin: L,
                        })
                      : (0, i.jsx)(I.Z, { step: t, onClose: () => n(!1) }),
                  returnRef: G,
                  onStepChange: y,
                  skipConfirm: q,
                  hideShadow: !0,
                }),
              }),
            }),
          ],
        });
      }
    },
    346790: function (e, n, t) {
      t.d(n, {
        n: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(853872),
        s = t(987209),
        r = t(409813),
        a = t(276442);
      let o = {
        key: r.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(d, { ...e }),
        options: { renderHeader: !0 },
      };
      function d(e) {
        let { isGift: n } = (0, s.wD)();
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(a.J, {
            ...e,
            breadcrumbSteps: [
              r.h8.ADD_PAYMENT_STEPS,
              r.h8.REVIEW,
              r.h8.CONFIRM,
            ],
            onReturn: () => {
              if (0 === Object.keys(l.Z.paymentSources).length) {
                if (n) {
                  e.handleStepChange(r.h8.GIFT_CUSTOMIZATION);
                  return;
                }
                e.handleClose();
              } else
                e.handleStepChange(r.h8.REVIEW, {
                  trackedFromStep: r.h8.ADD_PAYMENT_STEPS,
                });
            },
          }),
        });
      }
    },
    49308: function (e, n, t) {
      t.d(n, {
        x: function () {
          return E;
        },
      });
      var i = t(200651),
        l = t(192379),
        s = t(512722),
        r = t.n(s),
        a = t(399606),
        o = t(607070),
        d = t(597688),
        c = t(1870),
        u = t(429368),
        h = t(624377),
        f = t(530618),
        x = t(331042),
        C = t(372654),
        m = t(987209),
        g = t(563132),
        p = t(179118),
        S = t(614277),
        j = t(698708);
      function v(e) {
        let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: l = !1,
            analyticsLocations: s,
          } = e,
          o = (0, a.e7)([c.Z], () => c.Z.purchases),
          {
            skusById: h,
            selectedSkuId: f,
            application: C,
          } = (0, g.usePaymentContext)(),
          m = (0, a.e7)([d.Z], () => d.Z.getProduct(f)),
          p = (0, u.o)(m, o);
        r()(null != f, "Expected selectedSkuId"),
          r()(null != C, "Expected application");
        let v = h[f];
        return (r()(null != v, "Expected sku"), null == m)
          ? null
          : (0, i.jsxs)(S.C3, {
              children: [
                (0, i.jsx)(j.Z, {}),
                (0, i.jsx)(x.CollectiblesCollectedModalInner, {
                  product: m,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: s,
                  hideConfetti: l,
                  selectedVariantIndex: p,
                }),
              ],
            });
      }
      function E(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: s,
            hasSentMessage: r,
            giftRecipient: c,
            giftMessageError: u,
            isSendingMessage: x,
          } = (0, m.wD)(),
          S = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
          j = l.useRef(null),
          { selectedSkuId: E } = (0, g.usePaymentContext)(),
          I = (0, a.e7)([d.Z], () => d.Z.getProduct(E)),
          { confettiColors: T } = (0, h.Z)(null == I ? void 0 : I.styles);
        return n
          ? (0, i.jsxs)("div", {
              ref: j,
              children: [
                (0, i.jsx)(p.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: s,
                  hasSentMessage: r,
                  giftRecipient: c,
                  giftMessageError: u,
                  isSendingMessage: x,
                }),
                !e.hideConfetti &&
                  !S &&
                  (0, i.jsx)(f.Z, {
                    confettiTarget: j.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, C.vK)(null == I ? void 0 : I.categorySkuId),
                    colors: null == T ? void 0 : T.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, i.jsx)(v, { ...e });
      }
    },
    117652: function (e, n, t) {
      t.d(n, {
        Dd: function () {
          return O;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        s = t(481060),
        r = t(493773),
        a = t(100527),
        o = t(906732),
        d = t(335131),
        c = t(628952),
        u = t(225657),
        h = t(600164),
        f = t(109213),
        x = t(927699),
        C = t(987716),
        m = t(311821),
        g = t(251660),
        p = t(594174),
        S = t(855775),
        j = t(626135),
        v = t(937615),
        E = t(987209),
        I = t(563132),
        T = t(409813),
        N = t(614277),
        _ = t(981631),
        M = t(474936),
        y = t(388032),
        Z = t(926811),
        A = t(853745);
      let O = {
        key: T.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, i.jsx)(k, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => y.intl.string(y.t["W685+f"]),
        },
      };
      function P(e) {
        let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: l = !1,
            disabled: r = !1,
            loading: a = !1,
          } = e,
          { hasPaymentSources: o } = (0, I.usePaymentContext)(),
          d = o ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Button, {
              onClick: () => n(d),
              disabled: r,
              submitting: a,
              children: y.intl.string(y.t.XiOHRU),
            }),
            l ? (0, i.jsx)(m.Z, { onClick: t }) : null,
          ],
        });
      }
      function k(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: a = "",
            setCustomGiftMessage: o,
            giftRecipientError: m,
            setGiftRecipientError: T,
            validatingGiftRecipient: O,
            giftRecipient: k,
            recommendedGiftSkuIds: L,
            giftingOrigin: D,
            setValidatingGiftRecipient: G,
          } = (0, E.wD)(),
          {
            selectedSkuId: R,
            setSelectedSkuId: B,
            selectedSkuPricePreview: F,
            paymentSourceId: w,
            skuPricePreviewsById: H,
          } = (0, I.usePaymentContext)(),
          W = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
          { enabled: U, giftRecommendationAlgorithm: Y } = f.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
          ),
          K = U && D === M.Wt.DM_CHANNEL,
          V =
            Y === f.u.POPULAR
              ? y.intl.string(y.t.Kwgrrq)
              : y.intl.string(y.t.r1huYW),
          q = async (e, n) => {
            G(!0),
              null != m && T(),
              !(await (0, d.B1)(e.id, n)) && T(y.intl.string(y.t["4kgVqa"])),
              G(!1);
          };
        (0, r.Z)(() => {
          null != R &&
            null != k &&
            (j.default.track(_.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
              sku_id: R,
            }),
            q(k, R));
        });
        let z = (e) => {
            j.default.track(_.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
              sku_id: e,
            }),
              null != k && q(k, e),
              B(e);
          },
          J = (e) => {
            let n = H[e],
              t = null;
            if (null != n) {
              var l;
              t = null != w && null !== (l = n[w]) && void 0 !== l ? l : n[S.c];
            }
            if (null == t) return;
            let s = (0, v.T4)(t.amount, t.currency);
            return (0, i.jsx)(
              c.Z,
              {
                skuId: e,
                price: s,
                isSelected: e === R,
                onSelect: (e) => z(e),
                className: Z.recommendedGiftPreview,
              },
              e,
            );
          },
          Q = () =>
            (0, i.jsx)(x.Z, {
              sectionTitle: y.intl.string(y.t.B3miEx),
              onTextChange: (e) => (null == o ? void 0 : o(e)),
              pendingText: a,
              currentText: a,
              disableThemedBackground: !0,
              className: Z.customGiftMessageWrapper,
              innerClassName: Z.customGiftMessage,
            });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(N.C3, {
              children: (0, i.jsxs)("div", {
                className: Z.stepBody,
                children: [
                  K
                    ? (0, i.jsxs)("div", {
                        className: Z.bodyColumnLeft,
                        children: [
                          (0, i.jsx)(s.Text, {
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            className: Z.selectGiftTitle,
                            children: V.toLocaleUpperCase(),
                          }),
                          L.map((e) => J(e)),
                          (0, i.jsx)(b, { handleClose: t }),
                        ],
                      })
                    : (0, i.jsx)("div", {
                        className: Z.bodyColumnMiddle,
                        children: (0, i.jsx)(C.q, { isShopGift: !0 }),
                      }),
                  (() => {
                    if (K)
                      return (0, i.jsxs)("div", {
                        className: Z.bodyColumnRight,
                        children: [
                          (0, i.jsx)(g.s, { giftRecipient: k }),
                          (0, i.jsx)(C.q, {
                            isShopGift: !0,
                            className: A.adjustedGiftMainAnimation,
                            optionsContainerClassName:
                              A.adjustedGiftBoxOptionContainer,
                          }),
                          Q(),
                        ],
                      });
                    let e =
                      null != F ? (0, v.T4)(F.amount, F.currency) : void 0;
                    return (0, i.jsxs)("div", {
                      className: Z.bodyColumnRight,
                      children: [
                        (0, i.jsx)(u.Z, {
                          selectedSkuId: R,
                          className: Z.sendTo,
                          validateSelectedGift: q,
                        }),
                        Q(),
                        null != e &&
                          (0, i.jsx)(c.Z, {
                            skuId: R,
                            price: e,
                            className: Z.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0,
                          }),
                      ],
                    });
                  })(),
                ],
              }),
            }),
            (0, i.jsx)(N.O3, {
              children: (0, i.jsx)(s.ModalFooter, {
                justify: h.Z.Justify.BETWEEN,
                align: h.Z.Align.CENTER,
                children: (0, i.jsx)(P, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != m ||
                    null == k ||
                    k.id === (null == W ? void 0 : W.id) ||
                    a.length > M.$n,
                  loading: O,
                }),
              }),
            }),
          ],
        });
      }
      function b(e) {
        let { handleClose: n } = e,
          { analyticsLocations: t } = (0, o.ZP)(
            a.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
          );
        return (0, i.jsx)(s.Clickable, {
          onClick: function () {
            n(),
              (0, s.closeAllModals)(),
              (0, d.mK)({
                openInLayer: !1,
                analyticsLocations: t,
                analyticsSource: a.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
              });
          },
          children: (0, i.jsxs)("div", {
            className: Z.navigateToShopButton,
            children: [
              (0, i.jsxs)("div", {
                className: Z.navigateToShopBody,
                children: [
                  (0, i.jsx)("div", {
                    className: Z.shopIcon,
                    children: (0, i.jsx)(s.ShopIcon, {
                      size: "custom",
                      width: 18,
                      height: 18,
                      color: "var(--header-primary)",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: Z.navigateToShopTextWrapper,
                    children: [
                      (0, i.jsx)(s.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: y.intl.string(y.t["1+Co8P"]),
                      }),
                      (0, i.jsx)(s.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: y.intl.string(y.t.nYn52N),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsx)(s.ArrowLargeRightIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "var(--header-primary)",
                }),
              }),
            ],
          }),
        });
      }
    },
    126982: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        s = t(131388),
        r = t(409813),
        a = t(750143),
        o = t(247642),
        d = t(315853);
      function c(e) {
        let { step: n, onClose: t } = e,
          c = (0, s.Z)(a.X);
        return n === r.h8.BENEFITS || n === r.h8.CONFIRM
          ? null
          : (0, i.jsxs)("div", {
              className: o.headerContainer,
              children: [
                !c &&
                  (0, i.jsx)("div", {
                    className: o.headerImageContainer,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    children: (0, i.jsx)("img", {
                      src: d,
                      alt: "",
                      className: o.headerImage,
                    }),
                  }),
                (0, i.jsx)(l.ModalCloseButton, {
                  withCircleBackground: !0,
                  className: o.closeButton,
                  onClick: t,
                }),
              ],
            });
      }
    },
    333867: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(772848),
        s = t(481060),
        r = t(159351),
        a = t(667),
        o = t(335131),
        d = t(626135),
        c = t(409813),
        u = t(608579),
        h = t(981631);
      let f = "payment-modal",
        x = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
      function C(e) {
        let n;
        let {
            skuId: t,
            isGift: c = !1,
            giftMessage: C,
            giftingOrigin: m,
            onClose: g,
            onComplete: p,
            analyticsLocations: S,
            analyticsObject: j,
            giftRecipient: v,
            variantsReturnStyle: E,
          } = e,
          I = !1,
          T = (0, l.Z)(),
          N = (e) => {
            n = e;
          };
        (0, s.openModalLazy)(
          async () => (e) => {
            let { onClose: n, returnRef: l, ...s } = e;
            return (0, i.jsx)(u.Z, {
              ...s,
              loadId: T,
              skuId: t,
              isGift: c,
              giftMessage: C,
              giftingOrigin: m,
              analyticsLocations: S,
              giftRecipient: v,
              onClose: (e) => {
                n(), null == g || g(e);
              },
              onComplete: () => {
                (I = !0), null == p || p();
              },
              returnRef: l,
              onStepChange: N,
            });
          },
          {
            modalKey: f,
            onCloseCallback: () => {
              !I &&
                d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: T,
                  payment_type: h.Zuq[h.GZQ.ONE_TIME],
                  location: j,
                  is_gift: c,
                  sku_id: t,
                  location_stack: S,
                }),
                (0, r.fw)(),
                (0, a.p)(),
                null == g || g(I),
                I &&
                  (0, o.qg)({
                    variantsReturnStyle: E,
                    location: "openCollectiblesPaymentModal",
                  });
            },
            onCloseRequest: () => {
              null != n && x.has(n) && (0, s.closeModal)(f);
            },
          },
        );
      }
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(512722),
        s = t.n(l),
        r = t(481060),
        a = t(563132),
        o = t(698708),
        d = t(844068),
        c = t(614277),
        u = t(388032),
        h = t(985192);
      function f(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: l,
            application: f,
          } = (0, a.usePaymentContext)();
        s()(null != l, "Expected selectedSkuId"),
          s()(null != f, "Expected application");
        let x = t[l];
        s()(null != x, "Expected sku");
        let C = u.intl.formatToPlainString(u.t.wK0IbG, {
          applicationName: f.name,
          itemName: x.name,
        });
        return (0, i.jsxs)(c.C3, {
          children: [
            (0, i.jsx)(d.Z, {}),
            (0, i.jsx)(o.Z, {}),
            (0, i.jsxs)("div", {
              className: h.confirmation,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-xxl/bold",
                  className: h.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(r.Text, { variant: "text-md/normal", children: C }),
                (0, i.jsx)("div", { className: h.divider }),
                (0, i.jsx)(r.Button, {
                  onClick: n,
                  children: u.intl.string(u.t.cpT0Cg),
                }),
              ],
            }),
          ],
        });
      }
    },
    961830: function (e, n, t) {
      t.d(n, {
        F7: function () {
          return p;
        },
        WA: function () {
          return f;
        },
        s2: function () {
          return x;
        },
        wo: function () {
          return g;
        },
        yp: function () {
          return S;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(853872),
        s = t(409813),
        r = t(276442),
        a = t(793541),
        o = t(380898),
        d = t(713316),
        c = t(710094),
        u = t(865921),
        h = t(388032);
      let f = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        x = {
          key: s.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(r.J, {
                ...e,
                breadcrumbSteps: [
                  s.h8.ADD_PAYMENT_STEPS,
                  s.h8.REVIEW,
                  s.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(l.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(s.h8.REVIEW, {
                        trackedFromStep: s.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        C = {
          key: s.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(o.Z, {}),
        },
        m = {
          key: s.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(a.Z, {}),
          options: { renderHeader: !0 },
        },
        g = {
          key: s.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(c.l, { ...e }),
          options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHh) },
        },
        p = { key: s.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(d.w, { ...e }) },
        S = [C, m];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return x;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        s = t(399606),
        r = t(89057),
        a = t(597688),
        o = t(987209),
        d = t(563132),
        c = t(409813),
        u = t(48931),
        h = t(456251),
        f = t(981631);
      function x(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: x,
            hasFetchedSkus: C,
            paymentSources: m,
            hasFetchedPaymentSources: g,
            application: p,
            skusById: S,
            selectedSkuId: j,
          } = (0, d.usePaymentContext)(),
          { isGift: v } = (0, o.wD)(),
          [E, I] = l.useState(!0),
          [T, N] = (0, s.Wu)([a.Z], () => [
            a.Z.isFetchingCategories,
            a.Z.error,
          ]);
        if (
          (l.useEffect(() => {
            let e = null != p;
            if (!!C && !!g && !!e) I(T);
          }, [C, g, p, T]),
          l.useEffect(() => {
            if (E || x || null == j) return;
            let e = S[j];
            if (
              v &&
              (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES
            ) {
              n(c.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(m).length) {
              n(c.h8.ADD_PAYMENT_STEPS);
              return;
            }
            n(c.h8.REVIEW);
          }, [E, x, n, m, v, S, j]),
          E)
        )
          return (0, i.jsx)(h.Z, {});
        if (x) return (0, i.jsx)(r.Vq, { onClose: t });
        if (null != N) return (0, i.jsx)(u.Z, { onClose: t });
        return null;
      }
    },
    317951: function (e, n, t) {
      t.d(n, {
        D1: function () {
          return l;
        },
        FX: function () {
          return i;
        },
        Rm: function () {
          return s;
        },
      }),
        t(47120);
      let i = "1285377810587979827",
        l = "1316162456959057920",
        s = new Set([i, l]);
    },
  },
]);
//# sourceMappingURL=7fdfd48b894c8826d3a4.js.map
