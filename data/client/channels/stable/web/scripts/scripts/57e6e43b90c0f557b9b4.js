"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57674"],
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
        i = t(979554),
        r = t(442837),
        o = t(481060),
        d = t(1585),
        c = t(125988),
        u = t(987209),
        E = t(921813),
        C = t(731896),
        h = t(484459),
        x = t(594174),
        f = t(937615),
        T = t(583434),
        p = t(689938),
        I = t(696307),
        m = t(223223);
      let S = (e) => {
          let { avatarDecoration: n } = e,
            t = (0, r.e7)([x.default], () => x.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, c.Z)({
              user: t,
              avatarDecorationOverride: n,
              size: (0, d.y9)(o.AvatarSizes.SIZE_40),
            });
          return (0, s.jsx)("img", {
            src: a,
            alt: n.label,
            className: I.avatarDecoration,
          });
        },
        g = (e) => {
          var n;
          let { profileEffect: t } = e,
            a = (0, C.V)(t.id),
            {
              accessibilityLabel: l,
              thumbnailPreviewSrc: i,
              title: r,
            } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n
              ? n
              : {};
          return (0, s.jsxs)("div", {
            className: I.profileEffectContainer,
            children: [
              (0, s.jsx)("img", {
                src: m,
                alt: l,
                className: I.profileEffectBackground,
              }),
              (0, s.jsx)("img", { className: I.profileEffect, src: i, alt: r }),
            ],
          });
        };
      n.Z = (e) => {
        let { selectedSkuId: n, selectedSkuPricePreview: t, className: a } = e,
          { product: d } = (0, T.T)(n),
          { giftRecipient: c, giftRecipientError: C } = (0, u.wD)(),
          m = (0, r.e7)([x.default], () => x.default.getCurrentUser());
        if (null == d || null == t) return null;
        let [_] = d.items,
          N = null != c && c.id !== (null == m ? void 0 : m.id);
        return (0, s.jsxs)("div", {
          className: a,
          children: [
            (0, s.jsxs)("div", {
              className: I.previewTitleContainer,
              children: [
                (0, s.jsx)(o.FormTitle, {
                  className: I.previewTitle,
                  children: p.Z.Messages.COLLECTIBLES_GIFT_LABEL,
                }),
                N &&
                  (0, s.jsx)(
                    o.Popout,
                    {
                      preload: () => (0, h.Z)(c.id, c.getAvatarURL(null, 80)),
                      renderPopout: (e) =>
                        (0, s.jsx)(E.Z, {
                          ...e,
                          user: c,
                          pendingAvatar: c.getAvatarURL(
                            null,
                            (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80),
                          ),
                          pendingAvatarDecoration:
                            _.type === i.Z.AVATAR_DECORATION ? _ : null,
                          pendingProfileEffectId:
                            _.type === i.Z.PROFILE_EFFECT ? _.id : null,
                          canUsePremiumCustomization: !0,
                          disabledInputs: !0,
                        }),
                      align: "center",
                      position: "right",
                      children: (e) =>
                        (0, s.jsx)(o.Clickable, {
                          ...e,
                          className: I.previewLink,
                          children: (0, s.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-link",
                            children:
                              p.Z.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE,
                          }),
                        }),
                    },
                    c.id,
                  ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: l()(I.previewContainer, {
                [I.previewContainerError]: null != C,
              }),
              children: [
                _.type === i.Z.AVATAR_DECORATION &&
                  (0, s.jsx)(S, { avatarDecoration: _ }),
                _.type === i.Z.PROFILE_EFFECT &&
                  (0, s.jsx)(g, { profileEffect: _ }),
                (0, s.jsxs)("div", {
                  className: I.previewTextContainer,
                  children: [
                    (0, s.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      children: d.name,
                    }),
                    (0, s.jsx)(o.Heading, {
                      variant: "heading-sm/medium",
                      color: "header-secondary",
                      children:
                        _.type === i.Z.AVATAR_DECORATION
                          ? p.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                          : _.type === i.Z.PROFILE_EFFECT
                            ? p.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                            : null,
                    }),
                  ],
                }),
                (0, s.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  children: (0, f.T4)(t.amount, t.currency),
                }),
              ],
            }),
            null != C &&
              (0, s.jsx)(o.Text, {
                className: I.recipientError,
                variant: "text-sm/normal",
                color: "status-danger-background",
                children: C,
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
        i = t(700582),
        r = t(987209),
        o = t(699516),
        d = t(594174),
        c = t(51144),
        u = t(335131),
        E = t(689938);
      n.Z = (e) => {
        let { selectedSkuId: n, className: t } = e,
          C = (0, a.Wu)([o.Z], () => o.Z.getFriendIDs()),
          h = (0, a.Wu)(
            [d.default],
            () => d.default.filter((e) => C.includes(e.id) && !e.bot),
            [C],
          ),
          {
            giftRecipient: x,
            setGiftRecipient: f,
            giftRecipientError: T,
            setGiftRecipientError: p,
            setValidatingGiftRecipient: I,
          } = (0, r.wD)();
        if (null == n) return null;
        let m = async (e) => {
          I(!0),
            null != T && p(),
            f(e),
            !(await (0, u.B1)(e.id, n)) &&
              p(E.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED),
            I(!1);
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
                  : (0, s.jsx)(i.Z, {
                      user: e.value,
                      size: l.AvatarSizes.SIZE_20,
                    }),
              value: x,
              onChange: m,
              options: h.map((e) => ({
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
        i = t(278074),
        r = t(481060),
        o = t(409813),
        d = t(689938),
        c = t(73913);
      function u(e) {
        let { step: n, onClose: t } = e,
          a = (0, i.EQ)(n)
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
          : (0, s.jsxs)(r.ModalHeader, {
              className: l()(c.headerContainerGift),
              separator: n !== o.h8.CONFIRM,
              children: [
                (0, s.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: a,
                }),
                (0, s.jsx)(r.ModalCloseButton, {
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
          return N;
        },
      }),
        t(47120);
      var s = t(735250),
        a = t(470079),
        l = t(120356),
        i = t.n(l),
        r = t(887024),
        o = t(100527),
        d = t(906732),
        c = t(987209),
        u = t(598),
        E = t(409813),
        C = t(791785),
        h = t(961830),
        x = t(742956),
        f = t(346790),
        T = t(49308),
        p = t(117652),
        I = t(126982),
        m = t(981631),
        S = t(302800),
        g = t(231338),
        _ = t(556709);
      function N(e) {
        let {
            onClose: n,
            onComplete: t,
            onStepChange: l,
            transitionState: N,
            loadId: v,
            skuId: A,
            isGift: j = !1,
            giftRecipient: O,
            giftMessage: Z,
            analyticsLocations: M,
            returnRef: L,
          } = e,
          { analyticsLocations: R } = (0, d.ZP)([
            ...M,
            o.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          P = a.useRef(new r.qA()),
          [y, D] = a.useState(null),
          [k, F] = a.useState(!1),
          b = a.useMemo(() => (0, S.UY)(A), [A]),
          B = a.useCallback(() => {
            F(!0), null == t || t();
          }, [t]),
          G = a.useCallback(
            (e) => {
              F(!1), n(e);
            },
            [n],
          ),
          w = a.useMemo(
            () => [
              h.WA,
              p.Dd,
              f.n,
              ...h.yp,
              h.wo,
              {
                key: E.h8.CONFIRM,
                renderStep: (e) =>
                  (0, s.jsx)(T.x, {
                    ...e,
                    confettiCanvas: y,
                    analyticsLocations: R,
                    hideConfetti: null != b,
                  }),
                options: {
                  bodyClassName: _.modalOverrideBody,
                  sliderBodyClassName: _.modalOverrideSliderBody,
                },
              },
            ],
            [R, y, b],
          );
        return (0, s.jsxs)(d.Gt, {
          value: R,
          children: [
            (0, s.jsx)(r.O_, {
              ref: D,
              className: _.confettiCanvas,
              environment: P.current,
            }),
            null != b &&
              (0, s.jsx)("img", {
                src: b.imageSrc,
                className: i()(_.customConfetti, { [_.hidden]: !k }),
                style: b.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, s.jsx)(u.PaymentContextProvider, {
              loadId: v,
              stepConfigs: w,
              applicationId: m.XAJ,
              skuIDs: [A],
              isGift: j,
              activeSubscription: null,
              purchaseType: g.GZ.ONE_TIME,
              children: (0, s.jsx)(c.KB, {
                isGift: j,
                giftRecipient: O,
                giftMessage: Z,
                children: (0, s.jsx)(C.PaymentModal, {
                  onClose: G,
                  onComplete: B,
                  applicationId: m.XAJ,
                  skuId: A,
                  initialPlanId: null,
                  analyticsLocations: R,
                  transitionState: N,
                  renderHeader: (e, n, t) =>
                    j
                      ? (0, s.jsx)(x.Z, { step: t, onClose: () => n(!1) })
                      : (0, s.jsx)(I.Z, { step: t, onClose: () => n(!1) }),
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
        i = t(409813),
        r = t(276442);
      let o = {
        key: i.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, s.jsx)(d, { ...e }),
        options: { renderHeader: !0 },
      };
      function d(e) {
        let { isGift: n } = (0, l.wD)();
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(r.J, {
            ...e,
            breadcrumbSteps: [
              i.h8.ADD_PAYMENT_STEPS,
              i.h8.REVIEW,
              i.h8.CONFIRM,
            ],
            onReturn: () => {
              if (0 === Object.keys(a.Z.paymentSources).length) {
                if (n) {
                  e.handleStepChange(i.h8.GIFT_CUSTOMIZATION);
                  return;
                }
                e.handleClose();
              } else
                e.handleStepChange(i.h8.REVIEW, {
                  trackedFromStep: i.h8.ADD_PAYMENT_STEPS,
                });
            },
          }),
        });
      }
    },
    49308: function (e, n, t) {
      t.d(n, {
        x: function () {
          return m;
        },
      });
      var s = t(735250),
        a = t(470079),
        l = t(512722),
        i = t.n(l),
        r = t(399606),
        o = t(607070),
        d = t(597688),
        c = t(624377),
        u = t(530618),
        E = t(331042),
        C = t(372654),
        h = t(987209),
        x = t(598),
        f = t(179118),
        T = t(614277),
        p = t(698708);
      function I(e) {
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
          } = (0, x.usePaymentContext)(),
          C = (0, r.e7)([d.Z], () => d.Z.getProduct(c));
        i()(null != c, "Expected selectedSkuId"),
          i()(null != u, "Expected application");
        let h = o[c];
        return (i()(null != h, "Expected sku"), null == C)
          ? null
          : (0, s.jsxs)(T.C3, {
              children: [
                (0, s.jsx)(p.Z, {}),
                (0, s.jsx)(E.CollectiblesCollectedModalInner, {
                  product: C,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: l,
                  hideConfetti: a,
                }),
              ],
            });
      }
      function m(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: E,
            giftMessageError: T,
            isSendingMessage: p,
          } = (0, h.wD)(),
          m = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
          S = a.useRef(null),
          { selectedSkuId: g } = (0, x.usePaymentContext)(),
          _ = (0, r.e7)([d.Z], () => d.Z.getProduct(g)),
          { confettiColors: N } = (0, c.Z)(null == _ ? void 0 : _.styles);
        return n
          ? (0, s.jsxs)("div", {
              ref: S,
              children: [
                (0, s.jsx)(f.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: l,
                  hasSentMessage: i,
                  giftRecipient: E,
                  giftMessageError: T,
                  isSendingMessage: p,
                }),
                !e.hideConfetti &&
                  !m &&
                  (0, s.jsx)(u.Z, {
                    confettiTarget: S.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, C.vK)(null == _ ? void 0 : _.categorySkuId),
                    colors: null == N ? void 0 : N.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, s.jsx)(I, { ...e });
      }
    },
    117652: function (e, n, t) {
      t.d(n, {
        Dd: function () {
          return m;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        i = t(628952),
        r = t(225657),
        o = t(600164),
        d = t(927699),
        c = t(987716),
        u = t(311821),
        E = t(594174),
        C = t(987209),
        h = t(598),
        x = t(409813),
        f = t(614277),
        T = t(474936),
        p = t(689938),
        I = t(829294);
      let m = {
        key: x.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, s.jsx)(g, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => p.Z.Messages.GIFT_CARD_SELECTION,
        },
      };
      function S(e) {
        let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: a = !1,
            disabled: i = !1,
            loading: r = !1,
          } = e,
          { hasPaymentSources: o } = (0, h.usePaymentContext)(),
          d = o ? x.h8.REVIEW : x.h8.ADD_PAYMENT_STEPS;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.Button, {
              onClick: () => n(d),
              disabled: i,
              submitting: r,
              children: p.Z.Messages.PAGINATION_NEXT,
            }),
            a ? (0, s.jsx)(u.Z, { onClick: t }) : null,
          ],
        });
      }
      function g(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: u = "",
            setCustomGiftMessage: x,
            giftRecipientError: m,
            validatingGiftRecipient: g,
            giftRecipient: _,
          } = (0, C.wD)(),
          { selectedSkuId: N, selectedSkuPricePreview: v } = (0,
          h.usePaymentContext)(),
          A = (0, a.e7)([E.default], () => E.default.getCurrentUser());
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(f.C3, {
              children: (0, s.jsxs)("div", {
                className: I.stepBody,
                children: [
                  (0, s.jsx)("div", {
                    className: I.bodyColumnMiddle,
                    children: (0, s.jsx)(c.q, { isShopGift: !0 }),
                  }),
                  (0, s.jsxs)("div", {
                    className: I.bodyColumnRight,
                    children: [
                      (0, s.jsx)(r.Z, {
                        selectedSkuId: N,
                        className: I.sendTo,
                      }),
                      (0, s.jsx)(d.Z, {
                        sectionTitle: p.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                        onTextChange: (e) => (null == x ? void 0 : x(e)),
                        pendingText: u,
                        currentText: u,
                        disableThemedBackground: !0,
                        className: I.customGiftMessageWrapper,
                        innerClassName: I.customGiftMessage,
                      }),
                      (0, s.jsx)(i.Z, {
                        selectedSkuId: N,
                        selectedSkuPricePreview: v,
                        className: I.giftPreview,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(f.O3, {
              children: (0, s.jsx)(l.ModalFooter, {
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: (0, s.jsx)(S, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != m ||
                    null == _ ||
                    _.id === (null == A ? void 0 : A.id) ||
                    u.length > T.$n,
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
          return c;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(481060),
        l = t(131388),
        i = t(409813),
        r = t(750143),
        o = t(264499),
        d = t(60314);
      function c(e) {
        let { step: n, onClose: t } = e,
          c = (0, l.Z)(r.X);
        return n === i.h8.BENEFITS || n === i.h8.CONFIRM
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
          return x;
        },
      }),
        t(47120);
      var s = t(735250);
      t(470079);
      var a = t(772848),
        l = t(481060),
        i = t(976255),
        r = t(667),
        o = t(335131),
        d = t(626135),
        c = t(409813),
        u = t(608579),
        E = t(981631);
      let C = "payment-modal",
        h = new Set([c.h8.REVIEW, c.h8.CONFIRM]);
      function x(e) {
        let n;
        let {
            skuId: t,
            isGift: c = !1,
            giftMessage: x,
            onClose: f,
            onComplete: T,
            analyticsLocations: p,
            analyticsObject: I,
          } = e,
          m = !1,
          S = (0, a.Z)(),
          g = (e) => {
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
              giftMessage: x,
              analyticsLocations: p,
              onClose: (e) => {
                n(), null == f || f(e);
              },
              onComplete: () => {
                (m = !0), null == T || T();
              },
              returnRef: a,
              onStepChange: g,
            });
          },
          {
            modalKey: C,
            onCloseCallback: () => {
              !m &&
                d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: S,
                  payment_type: E.Zuq[E.GZQ.ONE_TIME],
                  location: I,
                  is_gift: c,
                  location_stack: p,
                }),
                (0, i.fw)(),
                (0, r.p)(),
                null == f || f(m),
                m && (0, o.qg)();
            },
            onCloseRequest: () => {
              null != n && h.has(n) && (0, l.closeModal)(C);
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
        i = t(481060),
        r = t(598),
        o = t(698708),
        d = t(614277),
        c = t(689938),
        u = t(525550);
      function E(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: a,
            application: E,
          } = (0, r.usePaymentContext)();
        l()(null != a, "Expected selectedSkuId"),
          l()(null != E, "Expected application");
        let C = t[a];
        l()(null != C, "Expected sku");
        let h =
          c.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
            applicationName: E.name,
            itemName: C.name,
          });
        return (0, s.jsxs)(d.C3, {
          children: [
            (0, s.jsx)(o.Z, {}),
            (0, s.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, s.jsx)(i.Text, { variant: "text-md/normal", children: h }),
                (0, s.jsx)("div", { className: u.divider }),
                (0, s.jsx)(i.Button, {
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
          return p;
        },
        WA: function () {
          return C;
        },
        s2: function () {
          return h;
        },
        wo: function () {
          return T;
        },
        yp: function () {
          return I;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(853872),
        l = t(409813),
        i = t(276442),
        r = t(793541),
        o = t(380898),
        d = t(713316),
        c = t(710094),
        u = t(865921),
        E = t(689938);
      let C = { key: null, renderStep: (e) => (0, s.jsx)(u.v, { ...e }) },
        h = {
          key: l.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(i.J, {
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
        x = {
          key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, s.jsx)(o.Z, {}),
        },
        f = {
          key: l.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, s.jsx)(r.Z, {}),
          options: { renderHeader: !0 },
        },
        T = {
          key: l.h8.REVIEW,
          renderStep: (e) => (0, s.jsx)(c.l, { ...e }),
          options: {
            useBreadcrumbLabel: () => E.Z.Messages.BILLING_STEP_REVIEW,
          },
        },
        p = { key: l.h8.CONFIRM, renderStep: (e) => (0, s.jsx)(d.w, { ...e }) },
        I = [x, f];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return C;
        },
      }),
        t(47120);
      var s = t(735250),
        a = t(470079),
        l = t(512722),
        i = t.n(l),
        r = t(89057),
        o = t(987209),
        d = t(598),
        c = t(409813),
        u = t(456251),
        E = t(981631);
      function C(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: l,
            hasFetchedSkus: C,
            paymentSources: h,
            hasFetchedPaymentSources: x,
            application: f,
            skusById: T,
            selectedSkuId: p,
          } = (0, d.usePaymentContext)(),
          { isGift: I } = (0, o.wD)(),
          [m, S] = a.useState(!0);
        return (a.useEffect(() => {
          let e = null != f;
          if (!!C && !!x && !!e) S(!1);
        }, [C, x, f]),
        a.useEffect(() => {
          if (m || l) return;
          i()(null != p, "Expected selectedSkuId");
          let e = T[p];
          if (
            I &&
            (null == e ? void 0 : e.productLine) === E.POd.COLLECTIBLES
          ) {
            n(c.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(h).length) {
            n(c.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(c.h8.REVIEW);
        }, [m, l, n, h, I, T, p]),
        m)
          ? (0, s.jsx)(u.Z, {})
          : l
            ? (0, s.jsx)(r.Vq, { onClose: t })
            : null;
      }
    },
  },
]);
//# sourceMappingURL=57e6e43b90c0f557b9b4.js.map
