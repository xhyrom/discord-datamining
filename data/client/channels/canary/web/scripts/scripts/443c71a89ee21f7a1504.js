"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43331"],
  {
    60314: function (e) {
      e.exports = "/assets/db7d719584a1dbf32855.png";
    },
    223223: function (e) {
      e.exports = "/assets/1a88b4ae0f6cc7cdbd66.png";
    },
    628952: function (e, n, t) {
      t(47120);
      var a = t(735250);
      t(470079);
      var s = t(120356),
        i = t.n(s),
        l = t(979554),
        r = t(442837),
        o = t(481060),
        d = t(1585),
        u = t(125988),
        c = t(987209),
        E = t(921813),
        h = t(731896),
        f = t(484459),
        m = t(594174),
        v = t(937615),
        C = t(583434),
        p = t(689938),
        x = t(653844),
        I = t(223223);
      let T = (e) => {
          let { avatarDecoration: n } = e,
            t = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
            { avatarDecorationSrc: s } = (0, u.Z)({
              user: t,
              avatarDecorationOverride: n,
              size: (0, d.y9)(o.AvatarSizes.SIZE_40),
            });
          return (0, a.jsx)("img", {
            src: s,
            alt: n.label,
            className: x.avatarDecoration,
          });
        },
        g = (e) => {
          var n;
          let { profileEffect: t } = e,
            s = (0, h.V)(t.id),
            {
              accessibilityLabel: i,
              thumbnailPreviewSrc: l,
              title: r,
            } = null !== (n = null == s ? void 0 : s.config) && void 0 !== n
              ? n
              : {};
          return (0, a.jsxs)("div", {
            className: x.profileEffectContainer,
            children: [
              (0, a.jsx)("img", {
                src: I,
                alt: i,
                className: x.profileEffectBackground,
              }),
              (0, a.jsx)("img", { className: x.profileEffect, src: l, alt: r }),
            ],
          });
        };
      n.Z = (e) => {
        let { selectedSkuId: n, selectedSkuPricePreview: t, className: s } = e,
          { product: d } = (0, C.T)(n),
          { giftRecipient: u, giftRecipientError: h } = (0, c.wD)(),
          I = (0, r.e7)([m.default], () => m.default.getCurrentUser());
        if (null == d || null == t) return null;
        let [N] = d.items,
          S = null != u && u.id !== (null == I ? void 0 : I.id);
        return (0, a.jsxs)("div", {
          className: s,
          children: [
            (0, a.jsxs)("div", {
              className: x.previewTitleContainer,
              children: [
                (0, a.jsx)(o.FormTitle, {
                  className: x.previewTitle,
                  children: p.Z.Messages.COLLECTIBLES_GIFT_LABEL,
                }),
                S &&
                  (0, a.jsx)(
                    o.Popout,
                    {
                      preload: () => (0, f.Z)(u.id, u.getAvatarURL(null, 80)),
                      renderPopout: (e) =>
                        (0, a.jsx)(E.Z, {
                          ...e,
                          user: u,
                          pendingAvatar: u.getAvatarURL(
                            null,
                            (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80),
                          ),
                          pendingAvatarDecoration:
                            N.type === l.Z.AVATAR_DECORATION ? N : null,
                          pendingProfileEffectId:
                            N.type === l.Z.PROFILE_EFFECT ? N.id : null,
                          canUsePremiumCustomization: !0,
                          disabledInputs: !0,
                        }),
                      align: "center",
                      position: "right",
                      children: (e) =>
                        (0, a.jsx)(o.Clickable, {
                          ...e,
                          className: x.previewLink,
                          children: (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-link",
                            children:
                              p.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE,
                          }),
                        }),
                    },
                    u.id,
                  ),
              ],
            }),
            (0, a.jsxs)("div", {
              className: i()(x.previewContainer, {
                [x.previewContainerError]: null != h,
              }),
              children: [
                N.type === l.Z.AVATAR_DECORATION &&
                  (0, a.jsx)(T, { avatarDecoration: N }),
                N.type === l.Z.PROFILE_EFFECT &&
                  (0, a.jsx)(g, { profileEffect: N }),
                (0, a.jsxs)("div", {
                  className: x.previewTextContainer,
                  children: [
                    (0, a.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      children: d.name,
                    }),
                    (0, a.jsx)(o.Heading, {
                      variant: "heading-sm/medium",
                      color: "header-secondary",
                      children:
                        N.type === l.Z.AVATAR_DECORATION
                          ? p.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                          : N.type === l.Z.PROFILE_EFFECT
                            ? p.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                            : null,
                    }),
                  ],
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  children: (0, v.T4)(t.amount, t.currency),
                }),
              ],
            }),
            null != h &&
              (0, a.jsx)(o.Text, {
                className: x.recipientError,
                variant: "text-sm/normal",
                color: "status-danger-background",
                children: h,
              }),
          ],
        });
      };
    },
    225657: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var s = t(442837),
        i = t(481060),
        l = t(700582),
        r = t(987209),
        o = t(699516),
        d = t(594174),
        u = t(51144),
        c = t(335131),
        E = t(689938);
      n.Z = (e) => {
        let { selectedSkuId: n, className: t } = e,
          h = (0, s.Wu)([o.Z], () => o.Z.getFriendIDs()),
          f = (0, s.Wu)(
            [d.default],
            () => d.default.filter((e) => h.includes(e.id) && !e.bot),
            [h],
          ),
          {
            giftRecipient: m,
            setGiftRecipient: v,
            giftRecipientError: C,
            setGiftRecipientError: p,
            setValidatingGiftRecipient: x,
          } = (0, r.wD)();
        if (null == n) return null;
        let I = async (e) => {
          x(!0),
            null != C && p(),
            v(e),
            !(await (0, c.B1)(e.id, n)) &&
              p(E.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED),
            x(!1);
        };
        return (0, a.jsxs)("div", {
          className: t,
          children: [
            (0, a.jsx)(i.FormTitle, {
              children: E.Z.Messages.FORM_LABEL_SEND_TO,
            }),
            (0, a.jsx)(i.SearchableSelect, {
              placeholder: E.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
              renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                  ? null
                  : (0, a.jsx)(l.Z, {
                      user: e.value,
                      size: i.AvatarSizes.SIZE_20,
                    }),
              value: m,
              onChange: I,
              options: f.map((e) => ({
                value: e,
                label: "".concat(u.ZP.getUserTag(e)),
              })),
            }),
          ],
        });
      };
    },
    742956: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(627341);
      var a = t(735250);
      t(470079);
      var s = t(120356),
        i = t.n(s),
        l = t(278074),
        r = t(481060),
        o = t(409813),
        d = t(689938),
        u = t(748202);
      function c(e) {
        let { step: n, onClose: t } = e,
          s = (0, l.EQ)(n)
            .with(
              o.h8.REVIEW,
              () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER,
            )
            .with(
              o.h8.ADD_PAYMENT_STEPS,
              () => d.Z.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE,
            )
            .with(
              o.h8.GIFT_CUSTOMIZATION,
              () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
            )
            .with(
              o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
              () => d.Z.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING,
            )
            .with(o.h8.CONFIRM, () => "")
            .otherwise(() => null);
        return null == s
          ? null
          : (0, a.jsxs)(r.ModalHeader, {
              className: i()(u.headerContainerGift),
              separator: n !== o.h8.CONFIRM,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: s,
                }),
                (0, a.jsx)(r.ModalCloseButton, {
                  onClick: t,
                  className: u.closeButtonGift,
                }),
              ],
            });
      }
    },
    608579: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      }),
        t(47120);
      var a = t(735250),
        s = t(470079),
        i = t(120356),
        l = t.n(i),
        r = t(887024),
        o = t(100527),
        d = t(906732),
        u = t(987209),
        c = t(598),
        E = t(409813),
        h = t(791785),
        f = t(961830),
        m = t(742956),
        v = t(346790),
        C = t(49308),
        p = t(117652),
        x = t(126982),
        I = t(981631),
        T = t(302800),
        g = t(231338),
        N = t(128300);
      function S(e) {
        let {
            onClose: n,
            onComplete: t,
            onStepChange: i,
            transitionState: S,
            loadId: A,
            skuId: _,
            isGift: j = !1,
            giftRecipient: Z,
            giftMessage: P,
            analyticsLocations: y,
            returnRef: O,
          } = e,
          { analyticsLocations: M } = (0, d.ZP)([
            ...y,
            o.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          R = s.useRef(new r.qA()),
          [L, k] = s.useState(null),
          [b, D] = s.useState(!1),
          w = s.useMemo(() => (0, T.UY)(_), [_]),
          F = s.useCallback(() => {
            D(!0), null == t || t();
          }, [t]),
          B = s.useCallback(
            (e) => {
              D(!1), n(e);
            },
            [n],
          ),
          G = s.useMemo(
            () => [
              f.WA,
              p.Dd,
              v.n,
              ...f.yp,
              f.wo,
              {
                key: E.h8.CONFIRM,
                renderStep: (e) =>
                  (0, a.jsx)(C.x, {
                    ...e,
                    confettiCanvas: L,
                    analyticsLocations: M,
                    hideConfetti: null != w,
                  }),
                options: {
                  bodyClassName: N.modalOverrideBody,
                  sliderBodyClassName: N.modalOverrideSliderBody,
                },
              },
            ],
            [M, L, w],
          );
        return (0, a.jsxs)(d.Gt, {
          value: M,
          children: [
            (0, a.jsx)(r.O_, {
              ref: k,
              className: N.confettiCanvas,
              environment: R.current,
            }),
            null != w &&
              (0, a.jsx)("img", {
                src: w.imageSrc,
                className: l()(N.customConfetti, { [N.hidden]: !b }),
                style: w.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, a.jsx)(c.PaymentContextProvider, {
              loadId: A,
              stepConfigs: G,
              applicationId: I.XAJ,
              skuIDs: [_],
              isGift: j,
              activeSubscription: null,
              purchaseType: g.GZ.ONE_TIME,
              children: (0, a.jsx)(u.KB, {
                isGift: j,
                giftRecipient: Z,
                giftMessage: P,
                children: (0, a.jsx)(h.PaymentModal, {
                  onClose: B,
                  onComplete: F,
                  applicationId: I.XAJ,
                  skuId: _,
                  initialPlanId: null,
                  analyticsLocations: M,
                  transitionState: S,
                  renderHeader: (e, n, t) =>
                    j
                      ? (0, a.jsx)(m.Z, { step: t, onClose: () => n(!1) })
                      : (0, a.jsx)(x.Z, { step: t, onClose: () => n(!1) }),
                  returnRef: O,
                  onStepChange: i,
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
      var a = t(735250);
      t(470079);
      var s = t(853872),
        i = t(987209),
        l = t(409813),
        r = t(276442);
      let o = {
        key: l.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, a.jsx)(d, { ...e }),
        options: { renderHeader: !0 },
      };
      function d(e) {
        let { isGift: n } = (0, i.wD)();
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(r.J, {
            ...e,
            breadcrumbSteps: [
              l.h8.ADD_PAYMENT_STEPS,
              l.h8.REVIEW,
              l.h8.CONFIRM,
            ],
            onReturn: () => {
              if (0 === Object.keys(s.Z.paymentSources).length) {
                if (n) {
                  e.handleStepChange(l.h8.GIFT_CUSTOMIZATION);
                  return;
                }
                e.handleClose();
              } else
                e.handleStepChange(l.h8.REVIEW, {
                  trackedFromStep: l.h8.ADD_PAYMENT_STEPS,
                });
            },
          }),
        });
      }
    },
    49308: function (e, n, t) {
      t.d(n, {
        x: function () {
          return I;
        },
      });
      var a = t(735250),
        s = t(470079),
        i = t(512722),
        l = t.n(i),
        r = t(399606),
        o = t(607070),
        d = t(597688),
        u = t(624377),
        c = t(530618),
        E = t(331042),
        h = t(372654),
        f = t(987209),
        m = t(598),
        v = t(179118),
        C = t(614277),
        p = t(698708);
      function x(e) {
        let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: s = !1,
            analyticsLocations: i,
          } = e,
          {
            skusById: o,
            selectedSkuId: u,
            application: c,
          } = (0, m.usePaymentContext)(),
          h = (0, r.e7)([d.Z], () => d.Z.getProduct(u));
        l()(null != u, "Expected selectedSkuId"),
          l()(null != c, "Expected application");
        let f = o[u];
        return (l()(null != f, "Expected sku"), null == h)
          ? null
          : (0, a.jsxs)(C.C3, {
              children: [
                (0, a.jsx)(p.Z, {}),
                (0, a.jsx)(E.CollectiblesCollectedModalInner, {
                  product: h,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: i,
                  hideConfetti: s,
                }),
              ],
            });
      }
      function I(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: i,
            hasSentMessage: l,
            giftRecipient: E,
            giftMessageError: C,
            isSendingMessage: p,
          } = (0, f.wD)(),
          I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
          T = s.useRef(null),
          { selectedSkuId: g } = (0, m.usePaymentContext)(),
          N = (0, r.e7)([d.Z], () => d.Z.getProduct(g)),
          { confettiColors: S } = (0, u.Z)(null == N ? void 0 : N.styles);
        return n
          ? (0, a.jsxs)("div", {
              ref: T,
              children: [
                (0, a.jsx)(v.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: i,
                  hasSentMessage: l,
                  giftRecipient: E,
                  giftMessageError: C,
                  isSendingMessage: p,
                }),
                !e.hideConfetti &&
                  !I &&
                  (0, a.jsx)(c.Z, {
                    confettiTarget: T.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, h.vK)(null == N ? void 0 : N.categorySkuId),
                    colors: null == S ? void 0 : S.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, a.jsx)(x, { ...e });
      }
    },
    117652: function (e, n, t) {
      t.d(n, {
        Dd: function () {
          return I;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(442837),
        i = t(481060),
        l = t(628952),
        r = t(225657),
        o = t(600164),
        d = t(927699),
        u = t(987716),
        c = t(311821),
        E = t(594174),
        h = t(987209),
        f = t(598),
        m = t(409813),
        v = t(614277),
        C = t(474936),
        p = t(689938),
        x = t(21954);
      let I = {
        key: m.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, a.jsx)(g, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => p.Z.Messages.GIFT_CARD_SELECTION,
        },
      };
      function T(e) {
        let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: s = !1,
            disabled: l = !1,
            loading: r = !1,
          } = e,
          { hasPaymentSources: o } = (0, f.usePaymentContext)(),
          d = o ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.Button, {
              onClick: () => n(d),
              disabled: l,
              submitting: r,
              children: p.Z.Messages.PAGINATION_NEXT,
            }),
            s ? (0, a.jsx)(c.Z, { onClick: t }) : null,
          ],
        });
      }
      function g(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: c = "",
            setCustomGiftMessage: m,
            giftRecipientError: I,
            validatingGiftRecipient: g,
            giftRecipient: N,
          } = (0, h.wD)(),
          { selectedSkuId: S, selectedSkuPricePreview: A } = (0,
          f.usePaymentContext)(),
          _ = (0, s.e7)([E.default], () => E.default.getCurrentUser());
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(v.C3, {
              children: (0, a.jsxs)("div", {
                className: x.stepBody,
                children: [
                  (0, a.jsx)("div", {
                    className: x.bodyColumnMiddle,
                    children: (0, a.jsx)(u.q, { isShopGift: !0 }),
                  }),
                  (0, a.jsxs)("div", {
                    className: x.bodyColumnRight,
                    children: [
                      (0, a.jsx)(r.Z, {
                        selectedSkuId: S,
                        className: x.sendTo,
                      }),
                      (0, a.jsx)(d.Z, {
                        sectionTitle: p.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: (e) => (null == m ? void 0 : m(e)),
                        pendingText: c,
                        currentText: c,
                        disableThemedBackground: !0,
                        className: x.customGiftMessageWrapper,
                        innerClassName: x.customGiftMessage,
                      }),
                      (0, a.jsx)(l.Z, {
                        selectedSkuId: S,
                        selectedSkuPricePreview: A,
                        className: x.giftPreview,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(v.O3, {
              children: (0, a.jsx)(i.ModalFooter, {
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: (0, a.jsx)(T, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != I ||
                    null == N ||
                    N.id === (null == _ ? void 0 : _.id) ||
                    c.length > C.$n,
                  loading: g,
                }),
              }),
            }),
          ],
        });
      }
    },
    126982: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(481060),
        i = t(131388),
        l = t(409813),
        r = t(750143),
        o = t(742242),
        d = t(60314);
      function u(e) {
        let { step: n, onClose: t } = e,
          u = (0, i.Z)(r.X);
        return n === l.h8.BENEFITS || n === l.h8.CONFIRM
          ? null
          : (0, a.jsxs)("div", {
              className: o.headerContainer,
              children: [
                !u &&
                  (0, a.jsx)("div", {
                    className: o.headerImageContainer,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    children: (0, a.jsx)("img", {
                      src: d,
                      alt: "",
                      className: o.headerImage,
                    }),
                  }),
                (0, a.jsx)(s.ModalCloseButton, {
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
          return m;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var s = t(772848),
        i = t(481060),
        l = t(976255),
        r = t(667),
        o = t(335131),
        d = t(626135),
        u = t(409813),
        c = t(608579),
        E = t(981631);
      let h = "payment-modal",
        f = new Set([u.h8.REVIEW, u.h8.CONFIRM]);
      function m(e) {
        let n;
        let {
            skuId: t,
            isGift: u = !1,
            giftMessage: m,
            onClose: v,
            onComplete: C,
            analyticsLocations: p,
            analyticsObject: x,
          } = e,
          I = !1,
          T = (0, s.Z)(),
          g = (e) => {
            n = e;
          };
        (0, i.openModalLazy)(
          async () => (e) => {
            let { onClose: n, returnRef: s, ...i } = e;
            return (0, a.jsx)(c.Z, {
              ...i,
              loadId: T,
              skuId: t,
              isGift: u,
              giftMessage: m,
              analyticsLocations: p,
              onClose: (e) => {
                n(), null == v || v(e);
              },
              onComplete: () => {
                (I = !0), null == C || C();
              },
              returnRef: s,
              onStepChange: g,
            });
          },
          {
            modalKey: h,
            onCloseCallback: () => {
              !I &&
                d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: T,
                  payment_type: E.Zuq[E.GZQ.ONE_TIME],
                  location: x,
                  is_gift: u,
                  location_stack: p,
                }),
                (0, l.fw)(),
                (0, r.p)(),
                null == v || v(I),
                I && (0, o.qg)();
            },
            onCloseRequest: () => {
              null != n && f.has(n) && (0, i.closeModal)(h);
            },
          },
        );
      }
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return E;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(512722),
        i = t.n(s),
        l = t(481060),
        r = t(598),
        o = t(698708),
        d = t(614277),
        u = t(689938),
        c = t(642852);
      function E(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: s,
            application: E,
          } = (0, r.usePaymentContext)();
        i()(null != s, "Expected selectedSkuId"),
          i()(null != E, "Expected application");
        let h = t[s];
        i()(null != h, "Expected sku");
        let f =
          u.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: E.name,
            itemName: h.name,
          });
        return (0, a.jsxs)(d.C3, {
          children: [
            (0, a.jsx)(o.Z, {}),
            (0, a.jsxs)("div", {
              className: c.confirmation,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "heading-xxl/bold",
                  className: c.confirmationHeader,
                  children: "Success!",
                }),
                (0, a.jsx)(l.Text, { variant: "text-md/normal", children: f }),
                (0, a.jsx)("div", { className: c.divider }),
                (0, a.jsx)(l.Button, {
                  onClick: n,
                  children: u.Z.Messages.CLOSE,
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
          return h;
        },
        s2: function () {
          return f;
        },
        wo: function () {
          return C;
        },
        yp: function () {
          return x;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(853872),
        i = t(409813),
        l = t(276442),
        r = t(793541),
        o = t(380898),
        d = t(713316),
        u = t(710094),
        c = t(865921),
        E = t(689938);
      let h = { key: null, renderStep: (e) => (0, a.jsx)(c.v, { ...e }) },
        f = {
          key: i.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(l.J, {
                ...e,
                breadcrumbSteps: [
                  i.h8.ADD_PAYMENT_STEPS,
                  i.h8.REVIEW,
                  i.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(s.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(i.h8.REVIEW, {
                        trackedFromStep: i.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        m = {
          key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, a.jsx)(o.Z, {}),
        },
        v = {
          key: i.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, a.jsx)(r.Z, {}),
          options: { renderHeader: !0 },
        },
        C = {
          key: i.h8.REVIEW,
          renderStep: (e) => (0, a.jsx)(u.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => E.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        p = { key: i.h8.CONFIRM, renderStep: (e) => (0, a.jsx)(d.w, { ...e }) },
        x = [m, v];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return h;
        },
      }),
        t(47120);
      var a = t(735250),
        s = t(470079),
        i = t(512722),
        l = t.n(i),
        r = t(89057),
        o = t(987209),
        d = t(598),
        u = t(409813),
        c = t(456251),
        E = t(981631);
      function h(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: i,
            hasFetchedSkus: h,
            paymentSources: f,
            hasFetchedPaymentSources: m,
            application: v,
            skusById: C,
            selectedSkuId: p,
          } = (0, d.usePaymentContext)(),
          { isGift: x } = (0, o.wD)(),
          [I, T] = s.useState(!0);
        return (s.useEffect(() => {
          let e = null != v;
          if (!!h && !!m && !!e) T(!1);
        }, [h, m, v]),
        s.useEffect(() => {
          if (I || i) return;
          l()(null != p, "Expected selectedSkuId");
          let e = C[p];
          if (
            x &&
            (null == e ? void 0 : e.productLine) === E.POd.COLLECTIBLES
          ) {
            n(u.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(f).length) {
            n(u.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(u.h8.REVIEW);
        }, [I, i, n, f, x, C, p]),
        I)
          ? (0, a.jsx)(c.Z, {})
          : i
            ? (0, a.jsx)(r.Vq, { onClose: t })
            : null;
      }
    },
    445924: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var s = t(481060),
        i = t(689938);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: t,
          onClose: l,
          className: r,
        } = e;
        return (0, a.jsxs)(s.Menu, {
          className: r,
          onClose: l,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": i.Z.Messages.AVATAR_ACTIONS_MENU_LABEL,
          children: [
            (0, a.jsx)(s.MenuItem, {
              id: "change-avatar",
              action: n,
              label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR,
            }),
            (0, a.jsx)(s.MenuItem, {
              id: "change-avatar-decoration",
              action: t,
              label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION,
            }),
          ],
        });
      };
    },
    921813: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(481060),
        i = t(680295),
        l = t(318661),
        r = t(721987),
        o = t(438163),
        d = t(502762),
        u = t(204197),
        c = t(654904),
        E = t(450734),
        h = t(225089),
        f = t(853726),
        m = t(165747),
        v = t(981631),
        C = t(228168),
        p = t(60638);
      function x(e) {
        let {
            user: n,
            guild: t,
            canUsePremiumCustomization: x,
            onUpsellClick: I,
            pendingBanner: T,
            pendingBio: g,
            pendingPronouns: N,
            pendingAvatar: S,
            pendingAvatarDecoration: A,
            pendingNickname: _,
            pendingGlobalName: j,
            pendingThemeColors: Z,
            pendingProfileEffectId: P,
            avatarClassName: y,
            isTryItOutFlow: O = !1,
            disabledInputs: M = !1,
            hideCustomStatus: R = !1,
            hideBioSection: L = !1,
            hideMessageInput: k = !0,
            hideExampleButton: b = !1,
          } = e,
          D = (0, l.ZP)(n.id, null == t ? void 0 : t.id),
          { avatarSrc: w, avatarDecorationSrc: F } = (0, u.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: A,
            avatarOverride: S,
            size: s.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          B = (0, c.ZT)({ pendingProfileEffectId: P, displayProfile: D }),
          { theme: G, primaryColor: U } = (0, r.Z)({
            user: n,
            displayProfile: D,
            pendingThemeColors: Z,
            isPreview: x,
          });
        return (0, a.jsxs)(d.Z, {
          user: n,
          displayProfile: D,
          profileType: C.y0.BITE_SIZE,
          pendingThemeColors: Z,
          pendingProfileEffectId: B,
          className: p.container,
          forceShowPremium: x,
          children: [
            (0, a.jsxs)("header", {
              className: p.header,
              children: [
                (0, a.jsx)(h.Z, {
                  user: n,
                  displayProfile: D,
                  guildId: null == t ? void 0 : t.id,
                  canUsePremiumCustomization: x,
                  pendingBanner: T,
                  isTryItOutFlow: O,
                  disabledInputs: M,
                  onUpsellClick: () =>
                    null == I
                      ? void 0
                      : I({ object: v.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, a.jsx)(E.Z, {
                  user: n,
                  guild: t,
                  displayProfile: D,
                  canUsePremiumCustomization: x,
                  previewAvatar: w,
                  previewAvatarDecoration: F,
                  previewTheme: G,
                  previewPrimaryColor: U,
                  className: y,
                  disabledInputs: M,
                  isTryItOutFlow: O,
                  onUpsellClick: () =>
                    null == I ? void 0 : I({ object: v.qAy.AVATAR }),
                }),
                !R && (0, a.jsx)(o.Z, { user: n, profileType: C.y0.BITE_SIZE }),
              ],
            }),
            (0, a.jsx)(f.Z, {
              user: n,
              displayProfile: D,
              guild: t,
              pendingAvatar: S,
              pendingNickname: _,
              pendingGlobalName: j,
              pendingBio: g,
              pendingPronouns: N,
              isTryItOutFlow: O,
              hideBioSection: L,
            }),
            (0, a.jsx)(m.Z, {
              user: n,
              hideMessageInput: k,
              hideExampleButton: b,
            }),
            null != B && (0, a.jsx)(i.Z, { profileEffectId: B }),
          ],
        });
      }
    },
    450734: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(120356),
        i = t.n(s),
        l = t(442837),
        r = t(481060),
        o = t(906732),
        d = t(1585),
        u = t(158776),
        c = t(998502),
        E = t(445924),
        h = t(654904),
        f = t(486324),
        m = t(651058);
      let v = c.ZP.getEnableHardwareAcceleration()
        ? r.AnimatedAvatar
        : r.Avatar;
      function C(e) {
        let {
            user: n,
            guild: t,
            displayProfile: s,
            canUsePremiumCustomization: c,
            previewAvatar: C,
            previewAvatarDecoration: p,
            previewTheme: x,
            previewPrimaryColor: I,
            className: T,
            disabledInputs: g,
            isTryItOutFlow: N,
            onUpsellClick: S,
          } = e,
          { analyticsLocations: A } = (0, o.ZP)(),
          _ = (0, l.e7)([u.Z], () => u.Z.getStatus(n.id)),
          j =
            null == t ||
            (null == s ? void 0 : s.canUsePremiumProfileCustomization) ||
            c,
          Z = (0, a.jsx)(v, {
            src: C,
            avatarDecoration: p,
            imageClassName: i()(T, { [m.overlay]: !g }),
            size: r.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: _,
            statusTooltip: !1,
            statusBackdropColor:
              null != I ? (0, r.getStatusBackdropColor)(x) : void 0,
          });
        return g
          ? (0, a.jsx)("div", { className: m.avatar, children: Z })
          : j
            ? (0, a.jsx)(r.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(E.Z, {
                    className: m.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, h.$r)(f.pC.AVATAR, null == t ? void 0 : t.id, N),
                    onChangeAvatarDecoration: () => {
                      (0, d.ps)({
                        guild: null == t ? void 0 : t,
                        analyticsLocations: A,
                        isTryItOutFlow: N,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, a.jsxs)(r.Clickable, {
                    ...e,
                    className: i()(m.avatar, m.clickable),
                    children: [
                      Z,
                      (0, a.jsx)(r.PencilIcon, {
                        size: "custom",
                        className: m.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, a.jsxs)(r.Clickable, {
                onClick: S,
                className: i()(m.avatar, m.clickable),
                children: [
                  Z,
                  (0, a.jsx)(r.NitroWheelIcon, {
                    size: "custom",
                    className: m.overlayIcon,
                    width: 20,
                    height: 20,
                    color: "white",
                  }),
                ],
              });
      }
    },
    225089: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(481060),
        i = t(867176),
        l = t(654904),
        r = t(486324),
        o = t(228168),
        d = t(689938),
        u = t(360247);
      function c(e) {
        let {
            user: n,
            displayProfile: t,
            guildId: c,
            canUsePremiumCustomization: E,
            pendingBanner: h,
            isTryItOutFlow: f,
            disabledInputs: m,
            onUpsellClick: v,
          } = e,
          C =
            E ||
            (null == t ? void 0 : t.canUsePremiumProfileCustomization) ||
            !1,
          p = C ? s.PencilIcon : s.NitroWheelIcon;
        return (0, a.jsx)(i.Z, {
          user: n,
          displayProfile: t,
          guildId: c,
          profileType: o.y0.BITE_SIZE,
          pendingBanner: h,
          canUsePremiumProfileCustomization: E,
          children:
            !m &&
            (0, a.jsxs)(s.Clickable, {
              onClick: () => {
                if (!C) {
                  null == v || v();
                  return;
                }
                (0, l.$r)(r.pC.BANNER, c, f);
              },
              className: u.clickable,
              children: [
                (0, a.jsx)(p, { size: "xs", color: "white" }),
                (0, a.jsx)(s.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children: C
                    ? d.Z.Messages.CHANGE_BANNER
                    : d.Z.Messages.USER_SETTINGS_UNLOCK_BANNER,
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(442837),
        i = t(954138),
        l = t(979264),
        r = t(648052),
        o = t(530),
        d = t(420654),
        u = t(116854),
        c = t(271383),
        E = t(246946),
        h = t(654904),
        f = t(228168),
        m = t(115879);
      function v(e) {
        var n;
        let {
            user: t,
            displayProfile: v,
            guild: C,
            pendingAvatar: p,
            pendingNickname: x,
            pendingGlobalName: I,
            pendingBio: T,
            pendingPronouns: g,
            isTryItOutFlow: N,
            hideBioSection: S,
          } = e,
          A = (0, s.e7)([c.ZP], () =>
            null == C ? null : c.ZP.getMember(C.id, t.id),
          ),
          _ = (0, s.e7)([E.Z], () => E.Z.hidePersonalInformation),
          j = (0, i.Z)("ProfileCustomizationPreviewBody"),
          Z =
            null == v
              ? void 0
              : null === (n = v.getPreviewBio(T)) || void 0 === n
                ? void 0
                : n.value,
          P = null != g ? g : null == v ? void 0 : v.pronouns,
          y = (0, h.Ly)({
            pendingNickname: x,
            pendingGlobalName: I,
            user: t,
            guildMember: A,
          });
        return (0, a.jsxs)("div", {
          inert: "",
          className: m.body,
          children: [
            (0, a.jsx)(o.Z, {
              user: t,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != A)) return;
                if (null !== p && !!(null != A.avatar || null != p))
                  return (0, a.jsx)(u.Z, { user: t, nickname: y });
              })(),
              nickname: y,
              pronouns: P,
              isTryItOut: N,
              tags: (0, a.jsx)(r.Z, {
                displayProfile: v,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            j && (0, a.jsx)(l.ZP, { userId: t.id, inline: !1 }),
            !S &&
              null != Z &&
              "" !== Z &&
              (0, a.jsx)(d.Z, { user: t, bio: Z, hidePersonalInformation: _ }),
          ],
        });
      }
    },
    165747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(475413),
        i = t(955418),
        l = t(689938),
        r = t(115879);
      function o(e) {
        let { user: n, hideMessageInput: t, hideExampleButton: o } = e;
        return t
          ? (0, a.jsx)("footer", {
              className: r.footer,
              children:
                !o &&
                (0, a.jsx)(s.tG, {
                  text: l.Z.Messages
                    .USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
                  fullWidth: !0,
                }),
            })
          : (0, a.jsx)("footer", {
              inert: "",
              className: r.footer,
              children: (0, a.jsx)(i.Z, { user: n }),
            });
      }
    },
    876917: function (e, n, t) {
      t(47120);
      var a = t(735250),
        s = t(470079),
        i = t(120356),
        l = t.n(i),
        r = t(802433),
        o = t(680295),
        d = t(808055),
        u = t(241822);
      n.Z = (e) => {
        let {
            profileEffectId: n,
            isHovering: t,
            forCollectedModal: i = !1,
            isPurchased: c,
            removeSetHeight: E = !1,
          } = e,
          h = i ? 250 : 0.1,
          [f, m] = s.useState(!0);
        return (s.useEffect(() => {
          if (!0 !== i) m(!1);
          else {
            let e = setTimeout(() => {
              m(!1);
            }, h);
            return () => {
              clearTimeout(e);
            };
          }
        }, [h, i]),
        null != n)
          ? (0, a.jsxs)("div", {
              className: l()(d.previewContainer, {
                [d.previewContainerAnimation]: i,
                [d.previewContainerSetHeight]: !E,
              }),
              children: [
                (0, a.jsx)("img", {
                  src: u,
                  alt: " ",
                  className: i ? d.previewForCollected : d.preview,
                  "aria-hidden": !0,
                }),
                !f &&
                  (0, a.jsx)("div", {
                    className: c ? d.purchasedEffect : void 0,
                    children: (0, a.jsx)(o.Z, {
                      profileEffectId: n,
                      useThumbnail: !0,
                      autoPlay: i,
                      restartMethod: r.j.FromStart,
                      resetOnHover: !0,
                      isHovering: t,
                      introDelay: h,
                      useOpacityOnHover: !1,
                      shopPreview: !0,
                    }),
                  }),
              ],
            })
          : null;
      };
    },
  },
]);
//# sourceMappingURL=443c71a89ee21f7a1504.js.map
