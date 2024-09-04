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
      var s = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        r = t(979554),
        i = t(442837),
        o = t(481060),
        d = t(1585),
        c = t(125988),
        u = t(987209),
        E = t(921813),
        h = t(731896),
        C = t(484459),
        f = t(594174),
        x = t(937615),
        p = t(583434),
        m = t(689938),
        T = t(653844),
        I = t(223223);
      let S = (e) => {
          let { avatarDecoration: n } = e,
            t = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, c.Z)({
              user: t,
              avatarDecorationOverride: n,
              size: (0, d.y9)(o.AvatarSizes.SIZE_40),
            });
          return (0, s.jsx)("img", {
            src: a,
            alt: n.label,
            className: T.avatarDecoration,
          });
        },
        v = (e) => {
          var n;
          let { profileEffect: t } = e,
            a = (0, h.V)(t.id),
            {
              accessibilityLabel: l,
              thumbnailPreviewSrc: r,
              title: i,
            } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n
              ? n
              : {};
          return (0, s.jsxs)("div", {
            className: T.profileEffectContainer,
            children: [
              (0, s.jsx)("img", {
                src: I,
                alt: l,
                className: T.profileEffectBackground,
              }),
              (0, s.jsx)("img", { className: T.profileEffect, src: r, alt: i }),
            ],
          });
        };
      n.Z = (e) => {
        let { selectedSkuId: n, selectedSkuPricePreview: t, className: a } = e,
          { product: d } = (0, p.T)(n),
          { giftRecipient: c, giftRecipientError: h } = (0, u.wD)(),
          I = (0, i.e7)([f.default], () => f.default.getCurrentUser());
        if (null == d || null == t) return null;
        let [g] = d.items,
          _ = null != c && c.id !== (null == I ? void 0 : I.id);
        return (0, s.jsxs)("div", {
          className: a,
          children: [
            (0, s.jsxs)("div", {
              className: T.previewTitleContainer,
              children: [
                (0, s.jsx)(o.FormTitle, {
                  className: T.previewTitle,
                  children: m.Z.Messages.COLLECTIBLES_GIFT_LABEL,
                }),
                _ &&
                  (0, s.jsx)(
                    o.Popout,
                    {
                      preload: () => (0, C.Z)(c.id, c.getAvatarURL(null, 80)),
                      renderPopout: (e) =>
                        (0, s.jsx)(E.Z, {
                          ...e,
                          user: c,
                          pendingAvatar: c.getAvatarURL(
                            null,
                            (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80),
                          ),
                          pendingAvatarDecoration:
                            g.type === r.Z.AVATAR_DECORATION ? g : null,
                          pendingProfileEffectId:
                            g.type === r.Z.PROFILE_EFFECT ? g.id : null,
                          canUsePremiumCustomization: !0,
                          disabledInputs: !0,
                        }),
                      align: "center",
                      position: "right",
                      children: (e) =>
                        (0, s.jsx)(o.Clickable, {
                          ...e,
                          className: T.previewLink,
                          children: (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-link",
                            children:
                              m.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE,
                          }),
                        }),
                    },
                    c.id,
                  ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: l()(T.previewContainer, {
                [T.previewContainerError]: null != h,
              }),
              children: [
                g.type === r.Z.AVATAR_DECORATION &&
                  (0, s.jsx)(S, { avatarDecoration: g }),
                g.type === r.Z.PROFILE_EFFECT &&
                  (0, s.jsx)(v, { profileEffect: g }),
                (0, s.jsxs)("div", {
                  className: T.previewTextContainer,
                  children: [
                    (0, s.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      children: d.name,
                    }),
                    (0, s.jsx)(o.Heading, {
                      variant: "heading-sm/medium",
                      color: "header-secondary",
                      children:
                        g.type === r.Z.AVATAR_DECORATION
                          ? m.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                          : g.type === r.Z.PROFILE_EFFECT
                            ? m.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                            : null,
                    }),
                  ],
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  children: (0, x.T4)(t.amount, t.currency),
                }),
              ],
            }),
            null != h &&
              (0, s.jsx)(o.Text, {
                className: T.recipientError,
                variant: "text-sm/normal",
                color: "status-danger-background",
                children: h,
              }),
          ],
        });
      };
    },
    225657: function (e, n, t) {
      var s = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(700582),
        i = t(987209),
        o = t(699516),
        d = t(594174),
        c = t(51144),
        u = t(335131),
        E = t(689938);
      n.Z = (e) => {
        let { selectedSkuId: n, className: t } = e,
          h = (0, a.Wu)([o.Z], () => o.Z.getFriendIDs()),
          C = (0, a.Wu)(
            [d.default],
            () => d.default.filter((e) => h.includes(e.id) && !e.bot),
            [h],
          ),
          {
            giftRecipient: f,
            setGiftRecipient: x,
            giftRecipientError: p,
            setGiftRecipientError: m,
            setValidatingGiftRecipient: T,
          } = (0, i.wD)();
        if (null == n) return null;
        let I = async (e) => {
          T(!0),
            null != p && m(),
            x(e),
            !(await (0, u.B1)(e.id, n)) &&
              m(E.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED),
            T(!1);
        };
        return (0, s.jsxs)("div", {
          className: t,
          children: [
            (0, s.jsx)(l.FormTitle, {
              children: E.Z.Messages.FORM_LABEL_SEND_TO,
            }),
            (0, s.jsx)(l.SearchableSelect, {
              placeholder: E.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
              renderOptionPrefix: (e) =>
                (null == e ? void 0 : e.value) == null
                  ? null
                  : (0, s.jsx)(r.Z, {
                      user: e.value,
                      size: l.AvatarSizes.SIZE_20,
                    }),
              value: f,
              onChange: I,
              options: C.map((e) => ({
                value: e,
                label: "".concat(c.ZP.getUserTag(e)),
              })),
            }),
          ],
        });
      };
    },
    742956: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(627341);
      var s = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        r = t(278074),
        i = t(481060),
        o = t(409813),
        d = t(689938),
        c = t(748202);
      function u(e) {
        let { step: n, onClose: t } = e,
          a = (0, r.EQ)(n)
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
        return null == a
          ? null
          : (0, s.jsxs)(i.ModalHeader, {
              className: l()(c.headerContainerGift),
              separator: n !== o.h8.CONFIRM,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-lg/semibold",
                  children: a,
                }),
                (0, s.jsx)(i.ModalCloseButton, {
                  onClick: t,
                  className: c.closeButtonGift,
                }),
              ],
            });
      }
    },
    608579: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var s = t(735250),
        a = t(470079),
        l = t(120356),
        r = t.n(l),
        i = t(887024),
        o = t(100527),
        d = t(906732),
        c = t(987209),
        u = t(598),
        E = t(409813),
        h = t(791785),
        C = t(961830),
        f = t(742956),
        x = t(346790),
        p = t(49308),
        m = t(117652),
        T = t(126982),
        I = t(981631),
        S = t(302800),
        v = t(231338),
        g = t(128300);
      function _(e) {
        let {
            onClose: n,
            onComplete: t,
            onStepChange: l,
            transitionState: _,
            loadId: N,
            skuId: A,
            isGift: j = !1,
            giftRecipient: O,
            giftMessage: Z,
            analyticsLocations: M,
            returnRef: L,
          } = e,
          { analyticsLocations: y } = (0, d.ZP)([
            ...M,
            o.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          P = a.useRef(new i.qA()),
          [R, D] = a.useState(null),
          [F, k] = a.useState(!1),
          b = a.useMemo(() => (0, S.UY)(A), [A]),
          w = a.useCallback(() => {
            k(!0), null == t || t();
          }, [t]),
          B = a.useCallback(
            (e) => {
              k(!1), n(e);
            },
            [n],
          ),
          G = a.useMemo(
            () => [
              C.WA,
              m.Dd,
              x.n,
              ...C.yp,
              C.wo,
              {
                key: E.h8.CONFIRM,
                renderStep: (e) =>
                  (0, s.jsx)(p.x, {
                    ...e,
                    confettiCanvas: R,
                    analyticsLocations: y,
                    hideConfetti: null != b,
                  }),
                options: {
                  bodyClassName: g.modalOverrideBody,
                  sliderBodyClassName: g.modalOverrideSliderBody,
                },
              },
            ],
            [y, R, b],
          );
        return (0, s.jsxs)(d.Gt, {
          value: y,
          children: [
            (0, s.jsx)(i.O_, {
              ref: D,
              className: g.confettiCanvas,
              environment: P.current,
            }),
            null != b &&
              (0, s.jsx)("img", {
                src: b.imageSrc,
                className: r()(g.customConfetti, { [g.hidden]: !F }),
                style: b.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, s.jsx)(u.PaymentContextProvider, {
              loadId: N,
              stepConfigs: G,
              applicationId: I.XAJ,
              skuIDs: [A],
              isGift: j,
              activeSubscription: null,
              purchaseType: v.GZ.ONE_TIME,
              children: (0, s.jsx)(c.KB, {
                isGift: j,
                giftRecipient: O,
                giftMessage: Z,
                children: (0, s.jsx)(h.PaymentModal, {
                  onClose: B,
                  onComplete: w,
                  applicationId: I.XAJ,
                  skuId: A,
                  initialPlanId: null,
                  analyticsLocations: y,
                  transitionState: _,
                  renderHeader: (e, n, t) =>
                    j
                      ? (0, s.jsx)(f.Z, { step: t, onClose: () => n(!1) })
                      : (0, s.jsx)(T.Z, { step: t, onClose: () => n(!1) }),
                  returnRef: L,
                  onStepChange: l,
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
      var s = t(735250);
      t(470079);
      var a = t(853872),
        l = t(987209),
        r = t(409813),
        i = t(276442);
      let o = {
        key: r.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, s.jsx)(d, { ...e }),
        options: { renderHeader: !0 },
      };
      function d(e) {
        let { isGift: n } = (0, l.wD)();
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(i.J, {
            ...e,
            breadcrumbSteps: [
              r.h8.ADD_PAYMENT_STEPS,
              r.h8.REVIEW,
              r.h8.CONFIRM,
            ],
            onReturn: () => {
              if (0 === Object.keys(a.Z.paymentSources).length) {
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
          return I;
        },
      });
      var s = t(735250),
        a = t(470079),
        l = t(512722),
        r = t.n(l),
        i = t(399606),
        o = t(607070),
        d = t(597688),
        c = t(624377),
        u = t(530618),
        E = t(331042),
        h = t(372654),
        C = t(987209),
        f = t(598),
        x = t(179118),
        p = t(614277),
        m = t(698708);
      function T(e) {
        let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: a = !1,
            analyticsLocations: l,
          } = e,
          {
            skusById: o,
            selectedSkuId: c,
            application: u,
          } = (0, f.usePaymentContext)(),
          h = (0, i.e7)([d.Z], () => d.Z.getProduct(c));
        r()(null != c, "Expected selectedSkuId"),
          r()(null != u, "Expected application");
        let C = o[c];
        return (r()(null != C, "Expected sku"), null == h)
          ? null
          : (0, s.jsxs)(p.C3, {
              children: [
                (0, s.jsx)(m.Z, {}),
                (0, s.jsx)(E.CollectiblesCollectedModalInner, {
                  product: h,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: l,
                  hideConfetti: a,
                }),
              ],
            });
      }
      function I(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: E,
            giftMessageError: p,
            isSendingMessage: m,
          } = (0, C.wD)(),
          I = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
          S = a.useRef(null),
          { selectedSkuId: v } = (0, f.usePaymentContext)(),
          g = (0, i.e7)([d.Z], () => d.Z.getProduct(v)),
          { confettiColors: _ } = (0, c.Z)(null == g ? void 0 : g.styles);
        return n
          ? (0, s.jsxs)("div", {
              ref: S,
              children: [
                (0, s.jsx)(x.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: l,
                  hasSentMessage: r,
                  giftRecipient: E,
                  giftMessageError: p,
                  isSendingMessage: m,
                }),
                !e.hideConfetti &&
                  !I &&
                  (0, s.jsx)(u.Z, {
                    confettiTarget: S.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, h.vK)(null == g ? void 0 : g.categorySkuId),
                    colors: null == _ ? void 0 : _.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, s.jsx)(T, { ...e });
      }
    },
    117652: function (e, n, t) {
      t.d(n, {
        Dd: function () {
          return I;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(628952),
        i = t(225657),
        o = t(600164),
        d = t(927699),
        c = t(987716),
        u = t(311821),
        E = t(594174),
        h = t(987209),
        C = t(598),
        f = t(409813),
        x = t(614277),
        p = t(474936),
        m = t(689938),
        T = t(21954);
      let I = {
        key: f.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, s.jsx)(v, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => m.Z.Messages.GIFT_CARD_SELECTION,
        },
      };
      function S(e) {
        let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: a = !1,
            disabled: r = !1,
            loading: i = !1,
          } = e,
          { hasPaymentSources: o } = (0, C.usePaymentContext)(),
          d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.Button, {
              onClick: () => n(d),
              disabled: r,
              submitting: i,
              children: m.Z.Messages.PAGINATION_NEXT,
            }),
            a ? (0, s.jsx)(u.Z, { onClick: t }) : null,
          ],
        });
      }
      function v(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: u = "",
            setCustomGiftMessage: f,
            giftRecipientError: I,
            validatingGiftRecipient: v,
            giftRecipient: g,
          } = (0, h.wD)(),
          { selectedSkuId: _, selectedSkuPricePreview: N } = (0,
          C.usePaymentContext)(),
          A = (0, a.e7)([E.default], () => E.default.getCurrentUser());
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(x.C3, {
              children: (0, s.jsxs)("div", {
                className: T.stepBody,
                children: [
                  (0, s.jsx)("div", {
                    className: T.bodyColumnMiddle,
                    children: (0, s.jsx)(c.q, { isShopGift: !0 }),
                  }),
                  (0, s.jsxs)("div", {
                    className: T.bodyColumnRight,
                    children: [
                      (0, s.jsx)(i.Z, {
                        selectedSkuId: _,
                        className: T.sendTo,
                      }),
                      (0, s.jsx)(d.Z, {
                        sectionTitle: m.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: (e) => (null == f ? void 0 : f(e)),
                        pendingText: u,
                        currentText: u,
                        disableThemedBackground: !0,
                        className: T.customGiftMessageWrapper,
                        innerClassName: T.customGiftMessage,
                      }),
                      (0, s.jsx)(r.Z, {
                        selectedSkuId: _,
                        selectedSkuPricePreview: N,
                        className: T.giftPreview,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(x.O3, {
              children: (0, s.jsx)(l.ModalFooter, {
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: (0, s.jsx)(S, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != I ||
                    null == g ||
                    g.id === (null == A ? void 0 : A.id) ||
                    u.length > p.$n,
                  loading: v,
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
          return c;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(481060),
        l = t(131388),
        r = t(409813),
        i = t(750143),
        o = t(742242),
        d = t(60314);
      function c(e) {
        let { step: n, onClose: t } = e,
          c = (0, l.Z)(i.X);
        return n === r.h8.BENEFITS || n === r.h8.CONFIRM
          ? null
          : (0, s.jsxs)("div", {
              className: o.headerContainer,
              children: [
                !c &&
                  (0, s.jsx)("div", {
                    className: o.headerImageContainer,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    children: (0, s.jsx)("img", {
                      src: d,
                      alt: "",
                      className: o.headerImage,
                    }),
                  }),
                (0, s.jsx)(a.ModalCloseButton, {
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
          return f;
        },
      }),
        t(47120);
      var s = t(735250);
      t(470079);
      var a = t(772848),
        l = t(481060),
        r = t(976255),
        i = t(667),
        o = t(335131),
        d = t(626135),
        c = t(409813),
        u = t(608579),
        E = t(981631);
      let h = "payment-modal",
        C = new Set([c.h8.REVIEW, c.h8.CONFIRM]);
      function f(e) {
        let n;
        let {
            skuId: t,
            isGift: c = !1,
            giftMessage: f,
            onClose: x,
            onComplete: p,
            analyticsLocations: m,
            analyticsObject: T,
          } = e,
          I = !1,
          S = (0, a.Z)(),
          v = (e) => {
            n = e;
          };
        (0, l.openModalLazy)(
          async () => (e) => {
            let { onClose: n, returnRef: a, ...l } = e;
            return (0, s.jsx)(u.Z, {
              ...l,
              loadId: S,
              skuId: t,
              isGift: c,
              giftMessage: f,
              analyticsLocations: m,
              onClose: (e) => {
                n(), null == x || x(e);
              },
              onComplete: () => {
                (I = !0), null == p || p();
              },
              returnRef: a,
              onStepChange: v,
            });
          },
          {
            modalKey: h,
            onCloseCallback: () => {
              !I &&
                d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: S,
                  payment_type: E.Zuq[E.GZQ.ONE_TIME],
                  location: T,
                  is_gift: c,
                  location_stack: m,
                }),
                (0, r.fw)(),
                (0, i.p)(),
                null == x || x(I),
                I && (0, o.qg)();
            },
            onCloseRequest: () => {
              null != n && C.has(n) && (0, l.closeModal)(h);
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
      var s = t(735250);
      t(470079);
      var a = t(512722),
        l = t.n(a),
        r = t(481060),
        i = t(598),
        o = t(698708),
        d = t(614277),
        c = t(689938),
        u = t(642852);
      function E(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: a,
            application: E,
          } = (0, i.usePaymentContext)();
        l()(null != a, "Expected selectedSkuId"),
          l()(null != E, "Expected application");
        let h = t[a];
        l()(null != h, "Expected sku");
        let C =
          c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: E.name,
            itemName: h.name,
          });
        return (0, s.jsxs)(d.C3, {
          children: [
            (0, s.jsx)(o.Z, {}),
            (0, s.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, s.jsx)(r.Text, { variant: "text-md/normal", children: C }),
                (0, s.jsx)("div", { className: u.divider }),
                (0, s.jsx)(r.Button, {
                  onClick: n,
                  children: c.Z.Messages.CLOSE,
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
          return m;
        },
        WA: function () {
          return h;
        },
        s2: function () {
          return C;
        },
        wo: function () {
          return p;
        },
        yp: function () {
          return T;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(853872),
        l = t(409813),
        r = t(276442),
        i = t(793541),
        o = t(380898),
        d = t(713316),
        c = t(710094),
        u = t(865921),
        E = t(689938);
      let h = { key: null, renderStep: (e) => (0, s.jsx)(u.v, { ...e }) },
        C = {
          key: l.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(r.J, {
                ...e,
                breadcrumbSteps: [
                  l.h8.ADD_PAYMENT_STEPS,
                  l.h8.REVIEW,
                  l.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(a.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(l.h8.REVIEW, {
                        trackedFromStep: l.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        f = {
          key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, s.jsx)(o.Z, {}),
        },
        x = {
          key: l.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, s.jsx)(i.Z, {}),
          options: { renderHeader: !0 },
        },
        p = {
          key: l.h8.REVIEW,
          renderStep: (e) => (0, s.jsx)(c.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => E.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        m = { key: l.h8.CONFIRM, renderStep: (e) => (0, s.jsx)(d.w, { ...e }) },
        T = [f, x];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return h;
        },
      }),
        t(47120);
      var s = t(735250),
        a = t(470079),
        l = t(512722),
        r = t.n(l),
        i = t(89057),
        o = t(987209),
        d = t(598),
        c = t(409813),
        u = t(456251),
        E = t(981631);
      function h(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: l,
            hasFetchedSkus: h,
            paymentSources: C,
            hasFetchedPaymentSources: f,
            application: x,
            skusById: p,
            selectedSkuId: m,
          } = (0, d.usePaymentContext)(),
          { isGift: T } = (0, o.wD)(),
          [I, S] = a.useState(!0);
        return (a.useEffect(() => {
          let e = null != x;
          if (!!h && !!f && !!e) S(!1);
        }, [h, f, x]),
        a.useEffect(() => {
          if (I || l) return;
          r()(null != m, "Expected selectedSkuId");
          let e = p[m];
          if (
            T &&
            (null == e ? void 0 : e.productLine) === E.POd.COLLECTIBLES
          ) {
            n(c.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(C).length) {
            n(c.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(c.h8.REVIEW);
        }, [I, l, n, C, T, p, m]),
        I)
          ? (0, s.jsx)(u.Z, {})
          : l
            ? (0, s.jsx)(i.Vq, { onClose: t })
            : null;
      }
    },
    876917: function (e, n, t) {
      t(47120);
      var s = t(735250),
        a = t(470079),
        l = t(120356),
        r = t.n(l),
        i = t(802433),
        o = t(680295),
        d = t(808055),
        c = t(241822);
      n.Z = (e) => {
        let {
            profileEffectId: n,
            isHovering: t,
            forCollectedModal: l = !1,
            isPurchased: u,
            removeSetHeight: E = !1,
          } = e,
          h = l ? 250 : 0.1,
          [C, f] = a.useState(!0);
        return (a.useEffect(() => {
          if (!0 !== l) f(!1);
          else {
            let e = setTimeout(() => {
              f(!1);
            }, h);
            return () => {
              clearTimeout(e);
            };
          }
        }, [h, l]),
        null != n)
          ? (0, s.jsxs)("div", {
              className: r()(d.previewContainer, {
                [d.previewContainerAnimation]: l,
                [d.previewContainerSetHeight]: !E,
              }),
              children: [
                (0, s.jsx)("img", {
                  src: c,
                  alt: " ",
                  className: l ? d.previewForCollected : d.preview,
                  "aria-hidden": !0,
                }),
                !C &&
                  (0, s.jsx)("div", {
                    className: u ? d.purchasedEffect : void 0,
                    children: (0, s.jsx)(o.Z, {
                      profileEffectId: n,
                      useThumbnail: !0,
                      autoPlay: l,
                      restartMethod: i.j.FromStart,
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
//# sourceMappingURL=e21b4cddc260be32a3cf.js.map
