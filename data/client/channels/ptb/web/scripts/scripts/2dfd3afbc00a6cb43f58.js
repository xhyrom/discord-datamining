"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3994"],
  {
    60314: function (e) {
      e.exports = "/assets/db7d719584a1dbf32855.png";
    },
    223223: function (e) {
      e.exports = "/assets/1a88b4ae0f6cc7cdbd66.png";
    },
    628952: function (e, n, t) {
      t(47120);
      var i = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(979554),
        l = t(442837),
        s = t(481060),
        c = t(1585),
        d = t(125988),
        u = t(987209),
        f = t(921813),
        p = t(731896),
        m = t(484459),
        g = t(594174),
        _ = t(937615),
        b = t(583434),
        h = t(388032),
        x = t(696307),
        C = t(223223);
      let v = (e) => {
          let { avatarDecoration: n } = e,
            t = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
            { avatarDecorationSrc: a } = (0, d.Z)({
              user: t,
              avatarDecorationOverride: n,
              size: (0, c.y9)(s.AvatarSizes.SIZE_40),
            });
          return (0, i.jsx)("img", {
            src: a,
            alt: n.label,
            className: x.avatarDecoration,
          });
        },
        S = (e) => {
          var n;
          let { profileEffect: t } = e,
            a = (0, p.V)(t.id),
            {
              accessibilityLabel: r,
              thumbnailPreviewSrc: o,
              title: l,
            } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n
              ? n
              : {};
          return (0, i.jsxs)("div", {
            className: x.profileEffectContainer,
            children: [
              (0, i.jsx)("img", {
                src: C,
                alt: r,
                className: x.profileEffectBackground,
              }),
              (0, i.jsx)("img", { className: x.profileEffect, src: o, alt: l }),
            ],
          });
        };
      n.Z = (e) => {
        let {
            skuId: n,
            skuPricePreview: t,
            isSelected: a,
            onSelect: c,
            shouldDisplayHeader: d = !1,
            className: p,
          } = e,
          { product: C } = (0, b.T)(n),
          { giftRecipient: I, giftRecipientError: T } = (0, u.wD)(),
          j = (0, l.e7)([g.default], () => g.default.getCurrentUser());
        if (null == C || null == t) return null;
        let [y] = C.items,
          E = null != I && I.id !== (null == j ? void 0 : j.id);
        return (0, i.jsxs)("div", {
          className: p,
          children: [
            d &&
              (0, i.jsxs)("div", {
                className: x.previewTitleContainer,
                children: [
                  (0, i.jsx)(s.FormTitle, {
                    className: x.previewTitle,
                    children: h.intl.string(h.t.PpoJzs),
                  }),
                  E &&
                    (0, i.jsx)(
                      s.Popout,
                      {
                        preload: () => (0, m.Z)(I.id, I.getAvatarURL(null, 80)),
                        renderPopout: (e) =>
                          (0, i.jsx)(f.Z, {
                            ...e,
                            user: I,
                            pendingAvatar: I.getAvatarURL(
                              null,
                              (0, s.getAvatarSize)(s.AvatarSizes.SIZE_80),
                            ),
                            pendingAvatarDecoration:
                              y.type === o.Z.AVATAR_DECORATION ? y : null,
                            pendingProfileEffectId:
                              y.type === o.Z.PROFILE_EFFECT ? y.id : null,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                          }),
                        align: "center",
                        position: "right",
                        children: (e) =>
                          (0, i.jsx)(s.Clickable, {
                            ...e,
                            className: x.previewLink,
                            children: (0, i.jsx)(s.Text, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              children: h.intl.string(h.t["2GnJQE"]),
                            }),
                          }),
                      },
                      I.id,
                    ),
                ],
              }),
            (0, i.jsxs)(s.Clickable, {
              tag: "div",
              onClick: () => {
                null != n && null != c && c(n);
              },
              className: r()(x.previewContainer, {
                [x.previewContainerSelected]: a && null == T,
                [x.previewContainerError]: null != T,
              }),
              children: [
                (0, i.jsxs)("div", {
                  className: x.giftInfoContainer,
                  children: [
                    y.type === o.Z.AVATAR_DECORATION &&
                      (0, i.jsx)(v, { avatarDecoration: y }),
                    y.type === o.Z.PROFILE_EFFECT &&
                      (0, i.jsx)(S, { profileEffect: y }),
                    (0, i.jsxs)("div", {
                      className: x.previewTextContainer,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-md/semibold",
                          children: C.name,
                        }),
                        (0, i.jsx)(s.Heading, {
                          variant: "heading-sm/medium",
                          color: "header-secondary",
                          children:
                            y.type === o.Z.AVATAR_DECORATION
                              ? h.intl.string(h.t["7v0T9P"])
                              : y.type === o.Z.PROFILE_EFFECT
                                ? h.intl.string(h.t.wR5wOj)
                                : null,
                        }),
                      ],
                    }),
                    (0, i.jsx)(s.Text, {
                      variant: "text-md/semibold",
                      children: (0, _.T4)(t.amount, t.currency),
                    }),
                  ],
                }),
                a &&
                  null != T &&
                  (0, i.jsx)("div", {
                    className: x.recipientError,
                    children: (0, i.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      color: "status-danger-background",
                      children: T,
                    }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    225657: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var a = t(442837),
        r = t(481060),
        o = t(700582),
        l = t(987209),
        s = t(699516),
        c = t(594174),
        d = t(51144),
        u = t(388032);
      n.Z = (e) => {
        let { selectedSkuId: n, validateSelectedGift: t, className: f } = e,
          p = (0, a.Wu)([s.Z], () => s.Z.getFriendIDs()),
          m = (0, a.Wu)(
            [c.default],
            () => c.default.filter((e) => p.includes(e.id) && !e.bot),
            [p],
          ),
          { giftRecipient: g, setGiftRecipient: _ } = (0, l.wD)();
        return null == n
          ? null
          : (0, i.jsxs)("div", {
              className: f,
              children: [
                (0, i.jsx)(r.FormTitle, {
                  children: u.intl.string(u.t.xFn72t),
                }),
                (0, i.jsx)(r.SearchableSelect, {
                  placeholder: u.intl.string(u.t.R0vK0N),
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, i.jsx)(o.Z, {
                          user: e.value,
                          size: r.AvatarSizes.SIZE_20,
                        }),
                  value: g,
                  onChange: (e) => {
                    t(e, n), _(e);
                  },
                  options: m.map((e) => ({
                    value: e,
                    label: "".concat(d.ZP.getUserTag(e)),
                  })),
                }),
              ],
            });
      };
    },
    742956: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(627341);
      var i = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(278074),
        l = t(481060),
        s = t(109213),
        c = t(409813),
        d = t(474936),
        u = t(388032),
        f = t(73913);
      function p(e) {
        let { step: n, onClose: t, giftingOrigin: a } = e,
          { enabled: p } = s.G.useExperiment(
            { location: "CollectiblesGiftPaymentModalHeader" },
            { autoTrackExposure: !1 },
          ),
          m = (0, o.EQ)(n)
            .with(c.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(c.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(c.h8.GIFT_CUSTOMIZATION, () =>
              p && a === d.Wt.DM_CHANNEL
                ? u.intl.string(u.t["xU+d9P"])
                : u.intl.string(u.t["JCFN//"]),
            )
            .with(c.h8.AWAITING_PURCHASE_TOKEN_AUTH, () =>
              u.intl.string(u.t.lDbi6O),
            )
            .with(c.h8.CONFIRM, () => "")
            .otherwise(() => null);
        return null == m
          ? null
          : (0, i.jsxs)(l.ModalHeader, {
              className: r()(f.headerContainerGift),
              separator: n !== c.h8.CONFIRM,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "heading-lg/semibold",
                  children: m,
                }),
                (0, i.jsx)(l.ModalCloseButton, {
                  onClick: t,
                  className: f.closeButtonGift,
                }),
              ],
            });
      }
    },
    608579: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        o = t.n(r),
        l = t(703533),
        s = t(442837),
        c = t(100527),
        d = t(906732),
        u = t(597688),
        f = t(987209),
        p = t(563132),
        m = t(409813),
        g = t(791785),
        _ = t(961830),
        b = t(742956),
        h = t(346790),
        x = t(49308),
        C = t(117652),
        v = t(126982),
        S = t(981631),
        I = t(302800),
        T = t(215023),
        j = t(231338),
        y = t(556709);
      function E(e) {
        var n;
        let {
            onClose: t,
            onComplete: r,
            onStepChange: E,
            transitionState: N,
            loadId: k,
            skuId: P,
            isGift: B = !1,
            giftRecipient: A,
            giftMessage: w,
            giftingOrigin: Z,
            analyticsLocations: O,
            returnRef: R,
          } = e,
          { analyticsLocations: M } = (0, d.ZP)([
            ...O,
            c.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          G = a.useRef(new l.qA()),
          [L, D] = a.useState(null),
          [H, F] = a.useState(!1),
          W = a.useMemo(() => (0, I.UY)(P), [P]),
          z = (0, s.Wu)([u.Z], () => u.Z.recommendedGiftSkuIds, []),
          U = null != P ? [P] : z,
          V = null !== (n = U[0]) && void 0 !== n ? n : null,
          Y = null != P && T.Rm.has(P),
          q = a.useCallback(() => {
            F(!0), null == r || r();
          }, [r]),
          J = a.useCallback(
            (e) => {
              F(!1), t(e);
            },
            [t],
          ),
          K = a.useMemo(
            () => [
              _.WA,
              C.Dd,
              h.n,
              ..._.yp,
              _.wo,
              {
                key: m.h8.CONFIRM,
                renderStep: (e) =>
                  (0, i.jsx)(x.x, {
                    ...e,
                    confettiCanvas: L,
                    analyticsLocations: M,
                    hideConfetti: null != W,
                  }),
                options: {
                  bodyClassName: y.modalOverrideBody,
                  sliderBodyClassName: y.modalOverrideSliderBody,
                },
              },
            ],
            [M, L, W],
          );
        return (0, i.jsxs)(d.Gt, {
          value: M,
          children: [
            (0, i.jsx)(l.O_, {
              ref: D,
              className: y.confettiCanvas,
              environment: G.current,
            }),
            null != W &&
              (0, i.jsx)("img", {
                src: W.imageSrc,
                className: o()(y.customConfetti, { [y.hidden]: !H }),
                style: W.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, i.jsx)(p.PaymentContextProvider, {
              loadId: k,
              stepConfigs: K,
              applicationId: S.XAJ,
              skuIDs: U,
              isGift: B,
              activeSubscription: null,
              purchaseType: j.GZ.ONE_TIME,
              children: (0, i.jsx)(f.KB, {
                isGift: B,
                giftRecipient: A,
                giftMessage: w,
                giftingOrigin: Z,
                children: (0, i.jsx)(g.PaymentModal, {
                  onClose: J,
                  onComplete: q,
                  applicationId: S.XAJ,
                  skuId: V,
                  initialPlanId: null,
                  analyticsLocations: M,
                  transitionState: N,
                  renderHeader: (e, n, t) =>
                    B
                      ? (0, i.jsx)(b.Z, {
                          step: t,
                          onClose: () => n(!1),
                          giftingOrigin: Z,
                        })
                      : (0, i.jsx)(v.Z, { step: t, onClose: () => n(!1) }),
                  returnRef: R,
                  onStepChange: E,
                  skipConfirm: Y,
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
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(853872),
        r = t(987209),
        o = t(409813),
        l = t(276442);
      let s = {
        key: o.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(c, { ...e }),
        options: { renderHeader: !0 },
      };
      function c(e) {
        let { isGift: n } = (0, r.wD)();
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(l.J, {
            ...e,
            breadcrumbSteps: [
              o.h8.ADD_PAYMENT_STEPS,
              o.h8.REVIEW,
              o.h8.CONFIRM,
            ],
            onReturn: () => {
              if (0 === Object.keys(a.Z.paymentSources).length) {
                if (n) {
                  e.handleStepChange(o.h8.GIFT_CUSTOMIZATION);
                  return;
                }
                e.handleClose();
              } else
                e.handleStepChange(o.h8.REVIEW, {
                  trackedFromStep: o.h8.ADD_PAYMENT_STEPS,
                });
            },
          }),
        });
      }
    },
    49308: function (e, n, t) {
      t.d(n, {
        x: function () {
          return C;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(512722),
        o = t.n(r),
        l = t(399606),
        s = t(607070),
        c = t(597688),
        d = t(624377),
        u = t(530618),
        f = t(331042),
        p = t(372654),
        m = t(987209),
        g = t(563132),
        _ = t(179118),
        b = t(614277),
        h = t(698708);
      function x(e) {
        let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: a = !1,
            analyticsLocations: r,
          } = e,
          {
            skusById: s,
            selectedSkuId: d,
            application: u,
          } = (0, g.usePaymentContext)(),
          p = (0, l.e7)([c.Z], () => c.Z.getProduct(d));
        o()(null != d, "Expected selectedSkuId"),
          o()(null != u, "Expected application");
        let m = s[d];
        return (o()(null != m, "Expected sku"), null == p)
          ? null
          : (0, i.jsxs)(b.C3, {
              children: [
                (0, i.jsx)(h.Z, {}),
                (0, i.jsx)(f.CollectiblesCollectedModalInner, {
                  product: p,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: r,
                  hideConfetti: a,
                }),
              ],
            });
      }
      function C(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: r,
            hasSentMessage: o,
            giftRecipient: f,
            giftMessageError: b,
            isSendingMessage: h,
          } = (0, m.wD)(),
          C = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
          v = a.useRef(null),
          { selectedSkuId: S } = (0, g.usePaymentContext)(),
          I = (0, l.e7)([c.Z], () => c.Z.getProduct(S)),
          { confettiColors: T } = (0, d.Z)(null == I ? void 0 : I.styles);
        return n
          ? (0, i.jsxs)("div", {
              ref: v,
              children: [
                (0, i.jsx)(_.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: r,
                  hasSentMessage: o,
                  giftRecipient: f,
                  giftMessageError: b,
                  isSendingMessage: h,
                }),
                !e.hideConfetti &&
                  !C &&
                  (0, i.jsx)(u.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, p.vK)(null == I ? void 0 : I.categorySkuId),
                    colors: null == T ? void 0 : T.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, i.jsx)(x, { ...e });
      }
    },
    117652: function (e, n, t) {
      t.d(n, {
        Dd: function () {
          return E;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(442837),
        o = t(481060),
        l = t(335131),
        s = t(628952),
        c = t(225657),
        d = t(600164),
        u = t(109213),
        f = t(927699),
        p = t(987716),
        m = t(311821),
        g = t(251660),
        _ = t(703656),
        b = t(594174),
        h = t(855775),
        x = t(987209),
        C = t(563132),
        v = t(409813),
        S = t(614277),
        I = t(981631),
        T = t(474936),
        j = t(388032),
        y = t(829294);
      let E = {
        key: v.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, i.jsx)(k, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => j.intl.string(j.t["W685+f"]),
        },
      };
      function N(e) {
        let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: a = !1,
            disabled: r = !1,
            loading: l = !1,
          } = e,
          { hasPaymentSources: s } = (0, C.usePaymentContext)(),
          c = s ? v.h8.REVIEW : v.h8.ADD_PAYMENT_STEPS;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o.Button, {
              onClick: () => n(c),
              disabled: r,
              submitting: l,
              children: j.intl.string(j.t.XiOHRU),
            }),
            a ? (0, i.jsx)(m.Z, { onClick: t }) : null,
          ],
        });
      }
      function k(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: m = "",
            setCustomGiftMessage: _,
            giftRecipientError: v,
            setGiftRecipientError: I,
            validatingGiftRecipient: E,
            giftRecipient: k,
            recommendedGiftSkuIds: B,
            giftingOrigin: A,
            setValidatingGiftRecipient: w,
          } = (0, x.wD)(),
          {
            selectedSkuId: Z,
            setSelectedSkuId: O,
            selectedSkuPricePreview: R,
            paymentSourceId: M,
            skuPricePreviewsById: G,
          } = (0, C.usePaymentContext)(),
          L = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
          { enabled: D, giftRecommendationAlgorithm: H } = u.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
          ),
          F = D && A === T.Wt.DM_CHANNEL,
          W =
            H === u.u.POPULAR
              ? j.intl.string(j.t.Kwgrrq)
              : j.intl.string(j.t.r1huYW),
          z = async (e, n) => {
            w(!0),
              null != v && I(),
              !(await (0, l.B1)(e.id, n)) && I(j.intl.string(j.t["4kgVqa"])),
              w(!1);
          };
        a.useEffect(() => {
          null != Z && null != k && z(k, Z);
        }, []);
        let U = (e) => {
            null != k && z(k, e), O(e);
          },
          V = (e) => {
            let n = G[e],
              t = null != M ? M : h.c,
              a = null != n ? n[t] : null;
            if (null != a)
              return (0, i.jsx)(
                s.Z,
                {
                  skuId: e,
                  skuPricePreview: a,
                  isSelected: e === Z,
                  onSelect: (e) => U(e),
                  className: y.recommendedGiftPreview,
                },
                e,
              );
          },
          Y = () =>
            (0, i.jsx)(f.Z, {
              sectionTitle: j.intl.string(j.t.B3miEx),
              onTextChange: (e) => (null == _ ? void 0 : _(e)),
              pendingText: m,
              currentText: m,
              disableThemedBackground: !0,
              className: y.customGiftMessageWrapper,
              innerClassName: y.customGiftMessage,
            });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(S.C3, {
              children: (0, i.jsxs)("div", {
                className: y.stepBody,
                children: [
                  F
                    ? (0, i.jsxs)("div", {
                        className: y.bodyColumnLeft,
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            className: y.selectGiftTitle,
                            children: W.toLocaleUpperCase(),
                          }),
                          B.map((e) => V(e)),
                          (0, i.jsx)(P, { handleClose: t }),
                          ";",
                        ],
                      })
                    : (0, i.jsx)("div", {
                        className: y.bodyColumnMiddle,
                        children: (0, i.jsx)(p.q, { isShopGift: !0 }),
                      }),
                  F
                    ? (0, i.jsxs)("div", {
                        className: y.bodyColumnRight,
                        children: [
                          (0, i.jsx)(g.s, { giftRecipient: k }),
                          (0, i.jsx)(p.q, {
                            isShopGift: !0,
                            className: y.selectedGiftAnimation,
                            optionsContainerClassName:
                              y.giftAnimationOptionsContainer,
                          }),
                          Y(),
                        ],
                      })
                    : (0, i.jsxs)("div", {
                        className: y.bodyColumnRight,
                        children: [
                          (0, i.jsx)(c.Z, {
                            selectedSkuId: Z,
                            className: y.sendTo,
                            validateSelectedGift: z,
                          }),
                          Y(),
                          (0, i.jsx)(s.Z, {
                            skuId: Z,
                            skuPricePreview: R,
                            className: y.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0,
                          }),
                        ],
                      }),
                ],
              }),
            }),
            (0, i.jsx)(S.O3, {
              children: (0, i.jsx)(o.ModalFooter, {
                justify: d.Z.Justify.BETWEEN,
                align: d.Z.Align.CENTER,
                children: (0, i.jsx)(N, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != v ||
                    null == k ||
                    k.id === (null == L ? void 0 : L.id) ||
                    m.length > T.$n,
                  loading: E,
                }),
              }),
            }),
          ],
        });
      }
      function P(e) {
        let { handleClose: n } = e;
        return (0, i.jsx)(o.Clickable, {
          onClick: function () {
            n(), (0, _.uL)(I.Z5c.COLLECTIBLES_SHOP);
          },
          children: (0, i.jsxs)("div", {
            className: y.navigateToShopButton,
            children: [
              (0, i.jsxs)("div", {
                className: y.navigateToShopBody,
                children: [
                  (0, i.jsx)("div", {
                    className: y.shopIcon,
                    children: (0, i.jsx)(o.ShopIcon, {
                      size: "custom",
                      width: 18,
                      height: 18,
                      color: "var(--header-primary)",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: y.navigateToShopTextWrapper,
                    children: [
                      (0, i.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: j.intl.string(j.t["1+Co8P"]),
                      }),
                      (0, i.jsx)(o.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: j.intl.string(j.t.nYn52N),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsx)(o.ArrowLargeRightIcon, {
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
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(131388),
        o = t(409813),
        l = t(750143),
        s = t(264499),
        c = t(60314);
      function d(e) {
        let { step: n, onClose: t } = e,
          d = (0, r.Z)(l.X);
        return n === o.h8.BENEFITS || n === o.h8.CONFIRM
          ? null
          : (0, i.jsxs)("div", {
              className: s.headerContainer,
              children: [
                !d &&
                  (0, i.jsx)("div", {
                    className: s.headerImageContainer,
                    "aria-hidden": "true",
                    "data-accessibility": "desaturate",
                    children: (0, i.jsx)("img", {
                      src: c,
                      alt: "",
                      className: s.headerImage,
                    }),
                  }),
                (0, i.jsx)(a.ModalCloseButton, {
                  withCircleBackground: !0,
                  className: s.closeButton,
                  onClick: t,
                }),
              ],
            });
      }
    },
    333867: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var a = t(772848),
        r = t(481060),
        o = t(159351),
        l = t(667),
        s = t(335131),
        c = t(626135),
        d = t(409813),
        u = t(608579),
        f = t(981631);
      let p = "payment-modal",
        m = new Set([d.h8.REVIEW, d.h8.CONFIRM]);
      function g(e) {
        let n;
        let {
            skuId: t,
            isGift: d = !1,
            giftMessage: g,
            giftingOrigin: _,
            onClose: b,
            onComplete: h,
            analyticsLocations: x,
            analyticsObject: C,
            giftRecipient: v,
          } = e,
          S = !1,
          I = (0, a.Z)(),
          T = (e) => {
            n = e;
          };
        (0, r.openModalLazy)(
          async () => (e) => {
            let { onClose: n, returnRef: a, ...r } = e;
            return (0, i.jsx)(u.Z, {
              ...r,
              loadId: I,
              skuId: t,
              isGift: d,
              giftMessage: g,
              giftingOrigin: _,
              analyticsLocations: x,
              giftRecipient: v,
              onClose: (e) => {
                n(), null == b || b(e);
              },
              onComplete: () => {
                (S = !0), null == h || h();
              },
              returnRef: a,
              onStepChange: T,
            });
          },
          {
            modalKey: p,
            onCloseCallback: () => {
              !S &&
                c.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: I,
                  payment_type: f.Zuq[f.GZQ.ONE_TIME],
                  location: C,
                  is_gift: d,
                  location_stack: x,
                }),
                (0, o.fw)(),
                (0, l.p)(),
                null == b || b(S),
                S && (0, s.qg)();
            },
            onCloseRequest: () => {
              null != n && m.has(n) && (0, r.closeModal)(p);
            },
          },
        );
      }
    },
    179118: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        o = t.n(r),
        l = t(392711),
        s = t.n(l),
        c = t(442837),
        d = t(481060),
        u = t(37234),
        f = t(194359),
        p = t(700582),
        m = t(925329),
        g = t(479446),
        _ = t(522489),
        b = t(857039),
        h = t(93127),
        x = t(814443),
        C = t(590783),
        v = t(699516),
        S = t(246946),
        I = t(594174),
        T = t(572004),
        j = t(669079),
        y = t(74538),
        E = t(51144),
        N = t(563132),
        k = t(981631),
        P = t(474936),
        B = t(388032),
        A = t(524254);
      function w(e) {
        let {
            giftCode: n,
            application: t,
            sku: r,
            subscriptionPlan: l,
            selectedGiftStyle: s,
            onClose: u,
            hasSentMessage: f,
            giftRecipient: g,
            giftMessageError: h,
            isSendingMessage: x,
            halloweenDecoPurchase: v,
          } = e,
          [I, w] = a.useState(d.CopyInput.Modes.DEFAULT),
          O = (0, c.e7)([S.Z], () => S.Z.enabled),
          R = f || (null != s && null != g),
          M = (null == r ? void 0 : r.productLine) === k.POd.COLLECTIBLES,
          { selectedPlan: G } = (0, N.usePaymentContext)(),
          L =
            (0, b.Z)({ location: "Gift purchase confirm" }) &&
            (null == G ? void 0 : G.skuId) === P.Si.TIER_2 &&
            null != v,
          D = () => (null != l ? l.skuId : null != r ? r.id : null),
          H = () => {
            let e;
            let n = null != s && P.kJ.includes(s);
            if (null != h) return B.intl.string(B.t.qB8ayc);
            if (null == l) return null;
            if (l.interval === P.rV.MONTH) {
              if (L) return B.intl.string(B.t.IelGKy);
              e = R ? (n ? B.t.ECjJJy : B.t["4ZJ+7e"]) : B.t["P+z55e"];
            } else {
              if (L) return B.intl.string(B.t.gausub);
              e = R ? (n ? B.t.jeiz2N : B.t.p0pZXF) : B.t.bXqk3t;
            }
            return B.intl.format(e, {
              skuName: (0, y.aq)(l.id),
              intervalCount: l.intervalCount,
            });
          },
          F = (e, n) => {
            null != r && (0, j.dM)(new C.Z({ code: n, maxUses: 1 }), r);
            try {
              (0, T.JG)(e), w(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
              w(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
              w(d.CopyInput.Modes.DEFAULT);
            }, 1500);
          },
          W = () => {
            let e;
            if (null == n) return null;
            switch (I) {
              case d.CopyInput.Modes.SUCCESS:
                e = B.intl.string(B.t.XVvPjY);
                break;
              case d.CopyInput.Modes.ERROR:
                e = B.intl.string(B.t.i4GM3N);
                break;
              default:
                e = B.intl.string(B.t.OpuAlJ);
            }
            return (0, i.jsxs)("div", {
              className: A.giftCodeSection,
              children: [
                (0, i.jsx)(d.FormTitle, {
                  children: B.intl.string(B.t["/dG4ND"]),
                }),
                null != n &&
                  (0, i.jsx)(d.CopyInput, {
                    hideMessage: O ? B.intl.string(B.t["0RLn4+"]) : null,
                    value: (0, j.Nz)(n),
                    mode: I,
                    text: e,
                    onCopy: (e) => F(e, n),
                    supportsCopy: T.wS,
                    className: A.__invalid_copyInput,
                    buttonColor: d.ButtonColors.LINK,
                    buttonLook: d.ButtonLooks.LINK,
                  }),
                (0, i.jsx)("div", {
                  className: A.subtext,
                  children: B.intl.string(B.t.QWKUpq),
                }),
              ],
            });
          };
        return x
          ? (0, i.jsxs)("div", {
              className: A.confirmation,
              children: [
                null != t
                  ? (0, i.jsx)(m.Z, {
                      game: t,
                      className: A.__invalid_icon,
                      size: m.Z.Sizes.LARGE,
                      skuId: D(),
                    })
                  : null,
                (0, i.jsx)(d.Spinner, {
                  type: d.SpinnerTypes.PULSING_ELLIPSIS,
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              className: A.confirmation,
              children: [
                null != t
                  ? (0, i.jsx)(m.Z, {
                      game: t,
                      className: A.__invalid_icon,
                      size: m.Z.Sizes.LARGE,
                      skuId: D(),
                    })
                  : null,
                (0, i.jsx)(d.Heading, {
                  variant: "heading-lg/semibold",
                  className: o()({
                    [A.header]: null == s && !M,
                    [A.headerCustomGifting]: null != s && !M,
                  }),
                  children:
                    null != g || (f && null == h)
                      ? B.intl.string(B.t.zOmK9P)
                      : null != h
                        ? B.intl.string(B.t.d1lrmZ)
                        : B.intl.string(B.t["/s1xR0"]),
                }),
                (f && null != g && null == h) || R
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(p.Z, {
                          user: g,
                          className: A.giftRecipient,
                          size: d.AvatarSizes.SIZE_80,
                        }),
                        (0, i.jsx)(d.Heading, {
                          className: A.giftRecipientName,
                          variant: "heading-md/semibold",
                          children: E.ZP.getName(g),
                        }),
                        (0, i.jsxs)("div", {
                          className: A.giftRecipientTag,
                          children: [" ", E.ZP.getUserTag(g)],
                        }),
                        (0, i.jsx)("div", {
                          className: A.giftSentMessage,
                          children: H(),
                        }),
                      ],
                    })
                  : (() => {
                      let e = (0, j.MY)(g, M),
                        { removeGiftRecipientUI: t } = _.m.getCurrentConfig(
                          { location: "GiftPurchaseConfirmation" },
                          {
                            autoTrackExposure: !1,
                            disable:
                              __BILLING_STANDALONE__ || e !== j.xr.CUSTOM_STYLE,
                          },
                        );
                      return (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", {
                            className: A.blurb,
                            children: H(),
                          }),
                          !t &&
                            null == h &&
                            (0, i.jsx)(Z, { giftCode: n, onClose: u }),
                          (0, i.jsx)("div", { className: A.divider }),
                          W(),
                        ],
                      });
                    })(),
              ],
            });
      }
      let Z = (e) => {
        let { giftCode: n, onClose: t } = e;
        a.useEffect(() => {
          f.Z.fetchRelationships(), (0, h.W)();
        }, []);
        let [r, o] = a.useState(),
          [l, m] = a.useState(!1),
          [_, b] = a.useState(!1),
          { userAffinities: C, isLoading: S } = (0, c.cj)([x.Z], () => ({
            userAffinities: x.Z.getUserAffinitiesUserIds(),
            isLoading: x.Z.getFetching(),
          })),
          T = Array.from(C.values()),
          j = (0, c.e7)([v.Z], () => v.Z.getFriendIDs()),
          y = s().difference(j, T),
          N = [...T, ...y],
          k = (0, c.e7)(
            [I.default],
            () => I.default.filter((e) => N.includes(e.id) && !e.bot),
            [N],
          );
        if (null == k || 0 === k.length) return null;
        let P = s().sortBy(k, (e) => N.indexOf(e.id));
        return (0, i.jsxs)("div", {
          className: A.giftRecipientSection,
          children: [
            (0, i.jsx)(d.FormTitle, { children: B.intl.string(B.t.MJw05e) }),
            (0, i.jsxs)("div", {
              className: A.giftRecipient,
              children: [
                (0, i.jsx)(d.SearchableSelect, {
                  placeholder: B.intl.string(B.t.J019jY),
                  wrapperClassName: A.giftRecipientInputWrapper,
                  className: l ? A.giftRecipientInputError : void 0,
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, i.jsx)(p.Z, {
                          user: e.value,
                          size: d.AvatarSizes.SIZE_20,
                        }),
                  renderLeading: () =>
                    S
                      ? (0, i.jsx)(d.Spinner, {
                          type: d.SpinnerTypes.PULSING_ELLIPSIS,
                        })
                      : null,
                  value: r,
                  onChange: (e) => {
                    o(e), m(!1);
                  },
                  options: P.map((e) => ({
                    value: e,
                    label: "".concat(E.ZP.getUserTag(e)),
                  })),
                }),
                (0, i.jsx)(d.Button, {
                  disabled: null == r,
                  submitting: _,
                  className: A.sendToRecipientButton,
                  onClick: () => {
                    b(!0),
                      (0, g.YD)(r, n)
                        .then(() => {
                          t(), (0, u.Ou)();
                        })
                        .catch(() => {
                          m(!0), b(!1);
                        });
                  },
                  children: B.intl.string(B.t["+EgwQk"]),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: l ? A.subtextError : A.subtext,
              children: l
                ? B.intl.string(B.t.jo5Vbm)
                : B.intl.string(B.t["8/N3v7"]),
            }),
          ],
        });
      };
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(512722),
        r = t.n(a),
        o = t(481060),
        l = t(563132),
        s = t(698708),
        c = t(614277),
        d = t(388032),
        u = t(525550);
      function f(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: a,
            application: f,
          } = (0, l.usePaymentContext)();
        r()(null != a, "Expected selectedSkuId"),
          r()(null != f, "Expected application");
        let p = t[a];
        r()(null != p, "Expected sku");
        let m = d.intl.formatToPlainString(d.t.wK0IbG, {
          applicationName: f.name,
          itemName: p.name,
        });
        return (0, i.jsxs)(c.C3, {
          children: [
            (0, i.jsx)(s.Z, {}),
            (0, i.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(o.Text, { variant: "text-md/normal", children: m }),
                (0, i.jsx)("div", { className: u.divider }),
                (0, i.jsx)(o.Button, {
                  onClick: n,
                  children: d.intl.string(d.t.cpT0Cg),
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
          return h;
        },
        WA: function () {
          return p;
        },
        s2: function () {
          return m;
        },
        wo: function () {
          return b;
        },
        yp: function () {
          return x;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(853872),
        r = t(409813),
        o = t(276442),
        l = t(793541),
        s = t(380898),
        c = t(713316),
        d = t(710094),
        u = t(865921),
        f = t(388032);
      let p = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        m = {
          key: r.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(o.J, {
                ...e,
                breadcrumbSteps: [
                  r.h8.ADD_PAYMENT_STEPS,
                  r.h8.REVIEW,
                  r.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(a.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(r.h8.REVIEW, {
                        trackedFromStep: r.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        g = {
          key: r.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(s.Z, {}),
        },
        _ = {
          key: r.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(l.Z, {}),
          options: { renderHeader: !0 },
        },
        b = {
          key: r.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
          options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) },
        },
        h = { key: r.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(c.w, { ...e }) },
        x = [g, _];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(512722),
        o = t.n(r),
        l = t(399606),
        s = t(89057),
        c = t(597688),
        d = t(987209),
        u = t(563132),
        f = t(409813),
        p = t(456251),
        m = t(981631);
      function g(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: r,
            hasFetchedSkus: g,
            paymentSources: _,
            hasFetchedPaymentSources: b,
            application: h,
            skusById: x,
            selectedSkuId: C,
          } = (0, u.usePaymentContext)(),
          { isGift: v } = (0, d.wD)(),
          [S, I] = a.useState(!0),
          T = (0, l.e7)([c.Z], () => c.Z.isFetchingCategories);
        return (a.useEffect(() => {
          let e = null != h;
          if (!!g && !!b && !!e) I(T);
        }, [g, b, h, T]),
        a.useEffect(() => {
          if (S || r) return;
          o()(null != C, "Expected selectedSkuId");
          let e = x[C];
          if (
            v &&
            (null == e ? void 0 : e.productLine) === m.POd.COLLECTIBLES
          ) {
            n(f.h8.GIFT_CUSTOMIZATION);
            return;
          }
          if (0 === Object.keys(_).length) {
            n(f.h8.ADD_PAYMENT_STEPS);
            return;
          }
          n(f.h8.REVIEW);
        }, [S, r, n, _, v, x, C]),
        S)
          ? (0, i.jsx)(p.Z, {})
          : r
            ? (0, i.jsx)(s.Vq, { onClose: t })
            : null;
      }
    },
    445924: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(388032);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: t,
          onClose: o,
          className: l,
        } = e;
        return (0, i.jsxs)(a.Menu, {
          className: l,
          onClose: o,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": r.intl.string(r.t.ldIeAQ),
          children: [
            (0, i.jsx)(a.MenuItem, {
              id: "change-avatar",
              action: n,
              label: r.intl.string(r.t["4OynCA"]),
            }),
            (0, i.jsx)(a.MenuItem, {
              id: "change-avatar-decoration",
              action: t,
              label: r.intl.string(r.t["Tna/TU"]),
            }),
          ],
        });
      };
    },
    921813: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(680295),
        s = t(687158),
        c = t(576635),
        d = t(518950),
        u = t(438163),
        f = t(502762),
        p = t(150039),
        m = t(450734),
        g = t(225089),
        _ = t(853726),
        b = t(165747),
        h = t(981631),
        x = t(228168),
        C = t(706995);
      function v(e) {
        let {
            user: n,
            guild: t,
            canUsePremiumCustomization: a,
            onUpsellClick: v,
            pendingBanner: S,
            pendingBio: I,
            pendingPronouns: T,
            pendingAvatar: j,
            pendingAvatarDecoration: y,
            pendingNickname: E,
            pendingGlobalName: N,
            pendingThemeColors: k,
            pendingProfileEffectId: P,
            avatarClassName: B,
            containerClassName: A,
            isTryItOutFlow: w = !1,
            disabledInputs: Z = !1,
            hideCustomStatus: O = !1,
            hideBioSection: R = !1,
            hideMessageInput: M = !0,
            hideExampleButton: G = !1,
          } = e,
          L = (0, s.ZP)(n.id, null == t ? void 0 : t.id),
          { avatarSrc: D, avatarDecorationSrc: H } = (0, d.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: y,
            avatarOverride: j,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          F = (0, p.ZT)({ pendingProfileEffectId: P, displayProfile: L }),
          { theme: W, primaryColor: z } = (0, c.Z)({
            user: n,
            displayProfile: L,
            pendingThemeColors: k,
            isPreview: a,
          });
        return (0, i.jsxs)(f.Z, {
          user: n,
          displayProfile: L,
          profileType: x.y0.BITE_SIZE,
          pendingThemeColors: k,
          className: r()(C.container, A),
          forceShowPremium: a,
          children: [
            (0, i.jsxs)("header", {
              className: C.header,
              children: [
                (0, i.jsx)(g.Z, {
                  user: n,
                  displayProfile: L,
                  guildId: null == t ? void 0 : t.id,
                  canUsePremiumCustomization: a,
                  pendingBanner: S,
                  isTryItOutFlow: w,
                  disabledInputs: Z,
                  onUpsellClick: () =>
                    null == v
                      ? void 0
                      : v({ object: h.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, i.jsx)(m.Z, {
                  user: n,
                  guild: t,
                  displayProfile: L,
                  canUsePremiumCustomization: a,
                  previewAvatar: D,
                  previewAvatarDecoration: H,
                  previewTheme: W,
                  previewPrimaryColor: z,
                  className: B,
                  disabledInputs: Z,
                  isTryItOutFlow: w,
                  onUpsellClick: () =>
                    null == v ? void 0 : v({ object: h.qAy.AVATAR }),
                }),
                !O && (0, i.jsx)(u.Z, { user: n, profileType: x.y0.BITE_SIZE }),
              ],
            }),
            (0, i.jsx)(_.Z, {
              user: n,
              displayProfile: L,
              guild: t,
              pendingAvatar: j,
              pendingNickname: E,
              pendingGlobalName: N,
              pendingBio: I,
              pendingPronouns: T,
              isTryItOutFlow: w,
              hideBioSection: R,
            }),
            (0, i.jsx)(b.Z, {
              user: n,
              hideMessageInput: M,
              hideExampleButton: G,
            }),
            null != F && (0, i.jsx)(l.Z, { profileEffectId: F }),
          ],
        });
      }
    },
    450734: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        o = t(442837),
        l = t(481060),
        s = t(906732),
        c = t(1585),
        d = t(158776),
        u = t(998502),
        f = t(445924),
        p = t(654904),
        m = t(486324),
        g = t(529934);
      let _ = u.ZP.getEnableHardwareAcceleration()
        ? l.AnimatedAvatar
        : l.Avatar;
      function b(e) {
        let {
            user: n,
            guild: t,
            displayProfile: a,
            canUsePremiumCustomization: u,
            previewAvatar: b,
            previewAvatarDecoration: h,
            previewTheme: x,
            previewPrimaryColor: C,
            className: v,
            disabledInputs: S,
            isTryItOutFlow: I,
            onUpsellClick: T,
          } = e,
          { analyticsLocations: j } = (0, s.ZP)(),
          y = (0, o.e7)([d.Z], () => d.Z.getStatus(n.id)),
          E =
            null == t ||
            (null == a ? void 0 : a.canUsePremiumProfileCustomization) ||
            u,
          N = (0, i.jsx)(_, {
            src: b,
            avatarDecoration: h,
            imageClassName: r()(v, { [g.overlay]: !S }),
            size: l.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: y,
            statusTooltip: !1,
            statusBackdropColor:
              null != C ? (0, l.getStatusBackdropColor)(x) : void 0,
          });
        return S
          ? (0, i.jsx)("div", { className: g.avatar, children: N })
          : E
            ? (0, i.jsx)(l.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(f.Z, {
                    className: g.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, p.$r)(m.pC.AVATAR, null == t ? void 0 : t.id, I),
                    onChangeAvatarDecoration: () => {
                      (0, c.ps)({
                        guild: null == t ? void 0 : t,
                        analyticsLocations: j,
                        isTryItOutFlow: I,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, i.jsxs)(l.Clickable, {
                    ...e,
                    className: r()(g.avatar, g.clickable),
                    children: [
                      N,
                      (0, i.jsx)(l.PencilIcon, {
                        size: "custom",
                        className: g.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, i.jsxs)(l.Clickable, {
                onClick: T,
                className: r()(g.avatar, g.clickable),
                children: [
                  N,
                  (0, i.jsx)(l.NitroWheelIcon, {
                    size: "custom",
                    className: g.overlayIcon,
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
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        r = t(81245),
        o = t(867176),
        l = t(654904),
        s = t(486324),
        c = t(228168),
        d = t(388032),
        u = t(892532);
      function f(e) {
        let {
            user: n,
            displayProfile: t,
            guildId: f,
            canUsePremiumCustomization: p,
            pendingBanner: m,
            isTryItOutFlow: g,
            disabledInputs: _,
            onUpsellClick: b,
          } = e,
          h =
            p ||
            (null == t ? void 0 : t.canUsePremiumProfileCustomization) ||
            !1,
          x = h ? a.PencilIcon : a.NitroWheelIcon,
          C = (0, r.Mu)("ProfileCustomizationPreviewBanner", h);
        return (0, i.jsx)(o.Z, {
          user: n,
          displayProfile: t,
          guildId: f,
          profileType: c.y0.BITE_SIZE,
          pendingBanner: m,
          canUsePremiumProfileCustomization: p,
          children:
            !_ &&
            (0, i.jsxs)(a.Clickable, {
              onClick: () => {
                if (!h && !C) {
                  null == b || b();
                  return;
                }
                (0, l.$r)(s.pC.BANNER, f, g);
              },
              className: u.clickable,
              children: [
                (0, i.jsx)(x, { size: "xs", color: "white" }),
                (0, i.jsx)(a.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    h || C
                      ? d.intl.string(d.t.N0bC3N)
                      : d.intl.string(d.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(442837),
        r = t(648052),
        o = t(530),
        l = t(420654),
        s = t(116854),
        c = t(271383),
        d = t(246946),
        u = t(654904),
        f = t(228168),
        p = t(451563);
      function m(e) {
        var n;
        let {
            user: t,
            displayProfile: m,
            guild: g,
            pendingAvatar: _,
            pendingNickname: b,
            pendingGlobalName: h,
            pendingBio: x,
            pendingPronouns: C,
            isTryItOutFlow: v,
            hideBioSection: S,
          } = e,
          I = (0, a.e7)([c.ZP], () =>
            null == g ? null : c.ZP.getMember(g.id, t.id),
          ),
          T = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
          j =
            null == m
              ? void 0
              : null === (n = m.getPreviewBio(x)) || void 0 === n
                ? void 0
                : n.value,
          y = null != C ? C : null == m ? void 0 : m.pronouns,
          E = (0, u.Ly)({
            pendingNickname: b,
            pendingGlobalName: h,
            user: t,
            guildMember: I,
          });
        return (0, i.jsxs)("div", {
          inert: "",
          className: p.body,
          children: [
            (0, i.jsx)(o.Z, {
              user: t,
              profileType: f.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != I)) return;
                if (null !== _ && !!(null != I.avatar || null != _))
                  return (0, i.jsx)(s.Z, { user: t, nickname: E });
              })(),
              nickname: E,
              pronouns: y,
              isTryItOut: v,
              tags: (0, i.jsx)(r.Z, {
                displayProfile: m,
                profileType: f.y0.BITE_SIZE,
              }),
            }),
            !S &&
              null != j &&
              "" !== j &&
              (0, i.jsx)(l.Z, {
                user: t,
                bio: j,
                hidePersonalInformation: T,
                viewFullBioDisabled: !0,
              }),
          ],
        });
      }
    },
    165747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(475413),
        r = t(955418),
        o = t(388032),
        l = t(451563);
      function s(e) {
        let { user: n, hideMessageInput: t, hideExampleButton: s } = e;
        return t
          ? (0, i.jsx)("footer", {
              className: l.footer,
              children:
                !s &&
                (0, i.jsx)(a.tG, {
                  text: o.intl.string(o.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, i.jsx)("footer", {
              inert: "",
              className: l.footer,
              children: (0, i.jsx)(r.Z, { user: n }),
            });
      }
    },
    830151: function (e, n, t) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    689380: function (e, n, t) {
      e.exports = { banner: "banner_da16fe" };
    },
    783600: function (e, n, t) {
      e.exports = {
        modalRoot: "modalRoot_a0e502",
        modalContent: "modalContent_a0e502",
        modalInner: "modalInner_a0e502",
        modalCloseButton: "modalCloseButton_a0e502",
        avatarDecoration: "avatarDecoration_a0e502",
        decorationBanner: "decorationBanner_a0e502",
        bannerContainer: "bannerContainer_a0e502",
        collectedInfoContainer: "collectedInfoContainer_a0e502",
        collectedTextContainer: "collectedTextContainer_a0e502",
        confettiCanvas: "confettiCanvas_a0e502",
        profileEffectShopPreview: "profileEffectShopPreview_a0e502",
        customConfetti: "customConfetti_a0e502",
        bundlePreview: "bundlePreview_a0e502",
        bundleProfileEffectCard: "bundleProfileEffectCard_a0e502",
        buttons: "buttons_a0e502",
        easterEggContainer: "easterEggContainer_a0e502",
      };
    },
    788629: function (e, n, t) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    696307: function (e, n, t) {
      e.exports = {
        avatarDecoration: "avatarDecoration_b74403",
        profileEffectContainer: "profileEffectContainer_b74403",
        profileEffect: "profileEffect_b74403",
        profileEffectBackground: "profileEffectBackground_b74403",
        previewContainer: "previewContainer_b74403",
        giftInfoContainer: "giftInfoContainer_b74403",
        previewContainerSelected: "previewContainerSelected_b74403",
        previewContainerError: "previewContainerError_b74403",
        previewTextContainer: "previewTextContainer_b74403",
        previewTitleContainer: "previewTitleContainer_b74403",
        previewTitle: "previewTitle_b74403",
        recipientError: "recipientError_b74403",
        previewLink: "previewLink_b74403",
      };
    },
    446563: function (e, n, t) {
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    746443: function (e, n, t) {
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    73913: function (e, n, t) {
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    556709: function (e, n, t) {
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    829294: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_dcb6d5",
        bodyColumnMiddle: "bodyColumnMiddle_dcb6d5",
        bodyColumnLeft: "bodyColumnLeft_dcb6d5",
        bodyColumnRight: "bodyColumnRight_dcb6d5",
        sendTo: "sendTo_dcb6d5",
        customGiftMessageWrapper: "customGiftMessageWrapper_dcb6d5",
        customGiftMessage: "customGiftMessage_dcb6d5",
        giftPreview: "giftPreview_dcb6d5",
        selectGiftTitle: "selectGiftTitle_dcb6d5",
        recommendedGiftPreview: "recommendedGiftPreview_dcb6d5",
        selectedGiftAnimation: "selectedGiftAnimation_dcb6d5",
        giftAnimationOptionsContainer: "giftAnimationOptionsContainer_dcb6d5",
        navigateToShopButton: "navigateToShopButton_dcb6d5",
        navigateToShopBody: "navigateToShopBody_dcb6d5",
        navigateToShopTextWrapper: "navigateToShopTextWrapper_dcb6d5",
        shopIcon: "shopIcon_dcb6d5",
      };
    },
    264499: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    524254: function (e, n, t) {
      e.exports = {
        blurb: "blurb_c9a9bf",
        giftSentMessage: "giftSentMessage_c9a9bf",
        giftRecipient: "giftRecipient_c9a9bf",
        giftRecipientName: "giftRecipientName_c9a9bf",
        giftRecipientTag: "giftRecipientTag_c9a9bf",
        divider: "divider_c9a9bf",
        subtext: "subtext_c9a9bf",
        subtextError: "subtextError_c9a9bf subtext_c9a9bf",
        header: "header_c9a9bf",
        headerCustomGifting: "headerCustomGifting_c9a9bf",
        giftRecipientSection: "giftRecipientSection_c9a9bf",
        giftRecipientInputWrapper: "giftRecipientInputWrapper_c9a9bf",
        giftRecipientInputError: "giftRecipientInputError_c9a9bf",
        sendToRecipientButton: "sendToRecipientButton_c9a9bf",
        confirmation: "confirmation_c9a9bf",
        giftCodeSection: "giftCodeSection_c9a9bf",
      };
    },
    677825: function (e, n, t) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    542781: function (e, n, t) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    59023: function (e, n, t) {
      e.exports = { body: "body_e16e99" };
    },
    525550: function (e, n, t) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    297908: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    905994: function (e, n, t) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    638635: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    38569: function (e, n, t) {
      e.exports = { back: "back_fd80e5" };
    },
    244203: function (e, n, t) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    130298: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    473156: function (e, n, t) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    309951: function (e, n, t) {
      e.exports = {
        root: "root_df35cb",
        shaker: "shaker_df35cb",
        stepBody: "stepBody_df35cb",
        bodyText: "bodyText_df35cb",
        invoice: "invoice_df35cb",
        paymentSourceWrapper: "paymentSourceWrapper_df35cb",
        paymentSourceOptionalWarning: "paymentSourceOptionalWarning_df35cb",
        currencyWrapper: "currencyWrapper_df35cb",
        trialCheckbox: "trialCheckbox_df35cb",
        trialCheckboxLabel: "trialCheckboxLabel_df35cb",
        loader: "loader_df35cb",
        contentWrapper: "contentWrapper_df35cb",
        reviewWarningMessageContainer: "reviewWarningMessageContainer_df35cb",
        reviewWarningMessage: "reviewWarningMessage_df35cb",
        trialPriceLine: "trialPriceLine_df35cb",
        afterTrialPriceLine: "afterTrialPriceLine_df35cb",
        formTitle: "formTitle_df35cb",
        spinnerWrapper: "spinnerWrapper_df35cb",
        trialHeader: "trialHeader_df35cb",
        giftMainAnimation: "giftMainAnimation_df35cb",
      };
    },
    679640: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_ad3708",
        invoice: "invoice_ad3708",
        paymentSourceWrapper: "paymentSourceWrapper_ad3708",
        subscriptionCostRow: "subscriptionCostRow_ad3708",
        invoiceSpinner: "invoiceSpinner_ad3708",
        errorBlock: "errorBlock_ad3708",
        fineprint: "fineprint_ad3708",
        skuHeading: "skuHeading_ad3708",
        skuHeadingText: "skuHeadingText_ad3708",
      };
    },
    15841: function (e, n, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    3936: function (e, n, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    83615: function (e, n, t) {
      e.exports = {
        tier2Animation: "tier2Animation_bfbba7",
        panningAnimation: "panningAnimation_bfbba7",
        tier2Background: "tier2Background_bfbba7 panningAnimationInner_bfbba7",
        tier2Foreground: "tier2Foreground_bfbba7 panningAnimationInner_bfbba7",
        guildWrapper: "guildWrapper_bfbba7",
        guildBackground: "guildBackground_bfbba7",
        guildStar: "guildStar_bfbba7",
        sequencedAnimation: "sequencedAnimation_bfbba7",
      };
    },
    324415: function (e, n, t) {
      e.exports = {
        headerBackground: "headerBackground_af10a6",
        tier2HeaderBackground:
          "tier2HeaderBackground_af10a6 headerBackground_af10a6",
        tier2HeaderBackgroundWinterTheme:
          "tier2HeaderBackgroundWinterTheme_af10a6 headerBackground_af10a6",
        snow: "snow_af10a6",
        headerTop: "headerTop_af10a6",
        headerIcon: "headerIcon_af10a6",
        nonTier2: "nonTier2_af10a6",
        price: "price_af10a6",
        closeButton: "closeButton_af10a6",
        trialBadgeContainer: "trialBadgeContainer_af10a6",
        trialOfferText: "trialOfferText_af10a6",
        tier0TrialOffer: "tier0TrialOffer_af10a6",
        trialBadgeSparkles: "trialBadgeSparkles_af10a6",
      };
    },
    45785: function (e, n, t) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    522888: function (e, n, t) {
      e.exports = {
        giftMainAnimation: "giftMainAnimation_d90c00",
        soundEmojiContainer: "soundEmojiContainer_d90c00",
        sound: "sound_d90c00",
        emoji: "emoji_d90c00",
        animation: "animation_d90c00",
        spinner: "spinner_d90c00",
        giftBoxOptionContainer: "giftBoxOptionContainer_d90c00",
      };
    },
    898492: function (e, n, t) {
      e.exports = {
        container: "container_b96147",
        emojiList: "emojiList_b96147",
        emoji: "emoji_b96147",
        textSelected: "textSelected_b96147",
        text: "text_b96147",
        emojiIcon: "emojiIcon_b96147",
        customGiftContent: "customGiftContent_b96147",
        emojiHeader: "emojiHeader_b96147",
        customGiftHeader: "customGiftHeader_b96147",
      };
    },
    910485: function (e, n, t) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    133130: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_d439ef",
        stepBodyCustomGift: "stepBodyCustomGift_d439ef",
        paddingForHalloweenBanner: "paddingForHalloweenBanner_d439ef",
        bodyColumnMiddle: "bodyColumnMiddle_d439ef",
        bodyColumnRight: "bodyColumnRight_d439ef",
        bodyText: "bodyText_d439ef",
        selectPlanDivider: "selectPlanDivider_d439ef",
        selectPlanChooseTitle: "selectPlanChooseTitle_d439ef",
        selectPlanTotalRow: "selectPlanTotalRow_d439ef",
        planSelectSeparator: "planSelectSeparator_d439ef",
        trialPlanSelectHeader: "trialPlanSelectHeader_d439ef",
        legacyPricingNotice: "legacyPricingNotice_d439ef",
      };
    },
    251300: function (e, n, t) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
    703236: function (e, n, t) {
      e.exports = {
        planOption: "planOption_bd3462",
        planOneTimeCost: "planOneTimeCost_bd3462",
        selectionBox: "selectionBox_bd3462",
        selectedPlan: "selectedPlan_bd3462",
        planOptionDisabled: "planOptionDisabled_bd3462",
        planOptionClickable: "planOptionClickable_bd3462",
        planOptionCheckbox: "planOptionCheckbox_bd3462",
        planOptionInterval: "planOptionInterval_bd3462",
        optionSelected: "optionSelected_bd3462",
        planOptionCurrentPlan: "planOptionCurrentPlan_bd3462",
        planOptionMonthsFree: "planOptionMonthsFree_bd3462",
        planOptionDiscount: "planOptionDiscount_bd3462",
        planOptionSubtextContainer: "planOptionSubtextContainer_bd3462",
        planOptionSubtext: "planOptionSubtext_bd3462",
        discountPlanOptionSubtext: "discountPlanOptionSubtext_bd3462",
        planOptionClickableContainer: "planOptionClickableContainer_bd3462",
        updatedOptionSelected: "updatedOptionSelected_bd3462",
        optionPriceSelected: "optionPriceSelected_bd3462",
      };
    },
    294188: function (e, n, t) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    658160: function (e, n, t) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    203748: function (e, n, t) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    893896: function (e, n, t) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    622085: function (e, n, t) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    555730: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    600699: function (e, n, t) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    706995: function (e, n, t) {
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    529934: function (e, n, t) {
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    892532: function (e, n, t) {
      e.exports = { clickable: "clickable_eebaf6" };
    },
    651523: function (e, n, t) {
      e.exports = {
        title: "title_b3a5c2",
        disabled: "disabled_b3a5c2",
        customizationSection: "customizationSection_b3a5c2",
        hideDivider: "hideDivider_b3a5c2",
        withDivider: "withDivider_b3a5c2",
        showBorder: "showBorder_b3a5c2",
        customizationSectionBackground: "customizationSectionBackground_b3a5c2",
        sectionDescription: "sectionDescription_b3a5c2",
        errorMessage: "errorMessage_b3a5c2",
        customizationSectionBorder: "customizationSectionBorder_b3a5c2",
      };
    },
    261842: function (e, n, t) {
      e.exports = {
        premiumFeatureBorder:
          "premiumFeatureBorder_c6d722 featureBorder_c6d722",
        limitedFeatureBorder:
          "limitedFeatureBorder_c6d722 featureBorder_c6d722",
        background: "background_c6d722",
        premiumBackground: "premiumBackground_c6d722 background_c6d722",
        limitedBackground: "limitedBackground_c6d722 background_c6d722",
      };
    },
    296140: function (e, n, t) {
      e.exports = {
        previewContainer: "previewContainer_c99d75",
        previewContainerSetHeight: "previewContainerSetHeight_c99d75",
        previewContainerAnimation: "previewContainerAnimation_c99d75",
        preview: "preview_c99d75",
        previewForCollected: "previewForCollected_c99d75 preview_c99d75",
        purchasedEffect: "purchasedEffect_c99d75",
      };
    },
    599215: function (e, n, t) {
      e.exports = {
        container: "container_bb37e1",
        soundIcon: "soundIcon_bb37e1",
        textSelected: "textSelected_bb37e1",
        sound: "sound_bb37e1",
        text: "text_bb37e1",
        customGiftHeader: "customGiftHeader_bb37e1",
        searchAndSound: "searchAndSound_bb37e1",
      };
    },
  },
]);
//# sourceMappingURL=2dfd3afbc00a6cb43f58.js.map
