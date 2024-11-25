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
    60314: function (e) {
      e.exports = "/assets/db7d719584a1dbf32855.png";
    },
    628952: function (e, n, t) {
      t(47120);
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(979554),
        s = t(442837),
        o = t(481060),
        d = t(987209),
        c = t(921813),
        u = t(484459),
        h = t(594174),
        m = t(937615),
        x = t(583434),
        f = t(905357),
        v = t(473608),
        p = t(388032),
        g = t(505069);
      n.Z = (e) => {
        let {
            skuId: n,
            skuPricePreview: t,
            isSelected: l,
            onSelect: C,
            shouldDisplayHeader: j = !1,
            className: I,
          } = e,
          { product: T } = (0, x.T)(n),
          { giftRecipient: E, giftRecipientError: N } = (0, d.wD)(),
          S = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
          Z = (0, f.k)(T);
        if (null == T || null == t) return null;
        let [y] = T.items,
          P = null != E && E.id !== (null == S ? void 0 : S.id);
        return (0, i.jsxs)("div", {
          className: I,
          children: [
            j &&
              (0, i.jsxs)("div", {
                className: g.previewTitleContainer,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    className: g.previewTitle,
                    children: p.intl.string(p.t.PpoJzs),
                  }),
                  P &&
                    (0, i.jsx)(
                      o.Popout,
                      {
                        preload: () => (0, u.Z)(E.id, E.getAvatarURL(null, 80)),
                        renderPopout: (e) =>
                          (0, i.jsx)(c.Z, {
                            ...e,
                            user: E,
                            pendingAvatar: E.getAvatarURL(
                              null,
                              (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80),
                            ),
                            pendingAvatarDecoration:
                              y.type === a.Z.AVATAR_DECORATION ? y : null,
                            pendingProfileEffectId:
                              y.type === a.Z.PROFILE_EFFECT ? y.id : null,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                          }),
                        align: "center",
                        position: "right",
                        children: (e) =>
                          (0, i.jsx)(o.Clickable, {
                            ...e,
                            className: g.previewLink,
                            children: (0, i.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              children: p.intl.string(p.t["2GnJQE"]),
                            }),
                          }),
                      },
                      E.id,
                    ),
                ],
              }),
            (0, i.jsxs)(o.Clickable, {
              tag: "div",
              onClick: () => {
                null != n && null != C && C(n);
              },
              className: r()(g.previewContainer, {
                [g.previewContainerSelected]: l && null == N,
                [g.previewContainerError]: l && null != N,
              }),
              children: [
                (0, i.jsxs)("div", {
                  className: g.giftInfoContainer,
                  children: [
                    (0, i.jsx)(v.O, { product: T, fallbackLabel: null }),
                    (0, i.jsxs)("div", {
                      className: g.previewTextContainer,
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/semibold",
                          children: Z,
                        }),
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-sm/medium",
                          color: "header-secondary",
                          children:
                            y.type === a.Z.AVATAR_DECORATION
                              ? p.intl.string(p.t["7v0T9P"])
                              : y.type === a.Z.PROFILE_EFFECT
                                ? p.intl.string(p.t.wR5wOj)
                                : null,
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      children: (0, m.T4)(t.amount, t.currency),
                    }),
                  ],
                }),
                l &&
                  null != N &&
                  (0, i.jsx)("div", {
                    className: g.recipientError,
                    children: (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "status-danger-background",
                      children: N,
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
      var l = t(442837),
        r = t(481060),
        a = t(700582),
        s = t(987209),
        o = t(699516),
        d = t(594174),
        c = t(51144),
        u = t(388032);
      n.Z = (e) => {
        let { selectedSkuId: n, validateSelectedGift: t, className: h } = e,
          m = (0, l.Wu)([o.Z], () => o.Z.getFriendIDs()),
          x = (0, l.Wu)(
            [d.default],
            () => d.default.filter((e) => m.includes(e.id) && !e.bot),
            [m],
          ),
          { giftRecipient: f, setGiftRecipient: v } = (0, s.wD)();
        return null == n
          ? null
          : (0, i.jsxs)("div", {
              className: h,
              children: [
                (0, i.jsx)(r.FormTitle, {
                  children: u.intl.string(u.t.xFn72t),
                }),
                (0, i.jsx)(r.SearchableSelect, {
                  placeholder: u.intl.string(u.t.R0vK0N),
                  renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                      ? null
                      : (0, i.jsx)(a.Z, {
                          user: e.value,
                          size: r.AvatarSizes.SIZE_20,
                        }),
                  value: f,
                  onChange: (e) => {
                    t(e, n), v(e);
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
        r = t(200651);
      t(192379);
      var a = t(442837),
        s = t(780384),
        o = t(481060),
        d = t(410030),
        c = t(594174),
        u = t(388032),
        h = t(259319),
        m = t(982240),
        x = t(533854);
      ((i = l || (l = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      n.Z = (e) => {
        let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
          l = (0, d.ZP)(),
          f = (0, a.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          v = 1 === t ? h.giftModalContainer : h.shopPageContainer,
          p =
            1 === t ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
        return (0, r.jsxs)("div", {
          className: v,
          children: [
            (0, r.jsx)("img", {
              className: h.__invalid_loadIssueImg,
              src: (0, s.wj)(l) ? m : x,
              alt: "",
            }),
            (0, r.jsx)(o.Heading, {
              className: h.heading1,
              variant: "heading-xl/semibold",
              children: u.intl.string(u.t["i5SQ7+"]),
            }),
            (0, r.jsx)(o.Text, {
              className: h.description,
              variant: "text-md/normal",
              children: p,
            }),
            f &&
              null != i &&
              (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: "staff-only debug: " + i,
              }),
            (0, r.jsx)(o.Button, {
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
        r = t(267097),
        a = t(752053),
        s = t(814335);
      function o(e) {
        let { onClose: n } = e,
          { refreshCategories: t } = (0, r.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.ModalHeader, {
              className: s.header,
              children: (0, i.jsx)(l.ModalCloseButton, {
                className: s.closeButton,
                onClick: n,
              }),
            }),
            (0, i.jsx)(a.Z, { onRetry: t, errorOrigin: a.i.GIFT_MODAL }),
          ],
        });
      }
    },
    742956: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(627341);
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(278074),
        s = t(481060),
        o = t(109213),
        d = t(409813),
        c = t(474936),
        u = t(388032),
        h = t(283314);
      function m(e) {
        let { step: n, onClose: t, giftingOrigin: l } = e,
          { enabled: m } = o.G.useExperiment(
            { location: "CollectiblesGiftPaymentModalHeader" },
            { autoTrackExposure: !1 },
          ),
          x = (0, a.EQ)(n)
            .with(d.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(d.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(d.h8.GIFT_CUSTOMIZATION, () =>
              m && l === c.Wt.DM_CHANNEL
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
          : (0, i.jsxs)(s.ModalHeader, {
              className: r()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  children: x,
                }),
                (0, i.jsx)(s.ModalCloseButton, {
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
          return P;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(703533),
        o = t(442837),
        d = t(570140),
        c = t(100527),
        u = t(906732),
        h = t(597688),
        m = t(987209),
        x = t(563132),
        f = t(409813),
        v = t(791785),
        p = t(961830),
        g = t(742956),
        C = t(346790),
        j = t(49308),
        I = t(117652),
        T = t(126982),
        E = t(981631),
        N = t(302800),
        S = t(215023),
        Z = t(231338),
        y = t(484495);
      function P(e) {
        var n;
        let {
            onClose: t,
            onComplete: r,
            onStepChange: P,
            transitionState: A,
            loadId: _,
            skuId: k,
            isGift: O = !1,
            giftRecipient: b,
            giftMessage: M,
            giftingOrigin: w,
            analyticsLocations: L,
            returnRef: R,
          } = e,
          { analyticsLocations: D } = (0, u.ZP)([
            ...L,
            c.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          B = l.useRef(new s.qA()),
          [F, G] = l.useState(null),
          [U, H] = l.useState(!1),
          W = l.useMemo(() => (0, N.UY)(k), [k]),
          z = (0, o.Wu)([h.Z], () => h.Z.recommendedGiftSkuIds, []),
          V = null != k ? [k] : z,
          Y = null !== (n = V[0]) && void 0 !== n ? n : null,
          K = null != k && S.Rm.has(k),
          q = l.useCallback(() => {
            H(!0), null == r || r();
          }, [r]),
          J = l.useCallback(
            (e) => {
              H(!1),
                t(e),
                d.Z.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
            },
            [t],
          ),
          Q = l.useMemo(
            () => [
              p.WA,
              I.Dd,
              C.n,
              ...p.yp,
              p.wo,
              {
                key: f.h8.CONFIRM,
                renderStep: (e) =>
                  (0, i.jsx)(j.x, {
                    ...e,
                    confettiCanvas: F,
                    analyticsLocations: D,
                    hideConfetti: null != W,
                  }),
                options: {
                  bodyClassName: y.modalOverrideBody,
                  sliderBodyClassName: y.modalOverrideSliderBody,
                },
              },
            ],
            [D, F, W],
          );
        return (0, i.jsxs)(u.Gt, {
          value: D,
          children: [
            (0, i.jsx)(s.O_, {
              ref: G,
              className: y.confettiCanvas,
              environment: B.current,
            }),
            null != W &&
              (0, i.jsx)("img", {
                src: W.imageSrc,
                className: a()(y.customConfetti, { [y.hidden]: !U }),
                style: W.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, i.jsx)(x.PaymentContextProvider, {
              loadId: _,
              stepConfigs: Q,
              applicationId: E.XAJ,
              skuIDs: V,
              isGift: O,
              activeSubscription: null,
              purchaseType: Z.GZ.ONE_TIME,
              children: (0, i.jsx)(m.KB, {
                isGift: O,
                giftRecipient: b,
                giftMessage: M,
                giftingOrigin: w,
                children: (0, i.jsx)(v.PaymentModal, {
                  onClose: J,
                  onComplete: q,
                  applicationId: E.XAJ,
                  skuId: Y,
                  initialPlanId: null,
                  analyticsLocations: D,
                  transitionState: A,
                  renderHeader: (e, n, t) =>
                    O
                      ? (0, i.jsx)(g.Z, {
                          step: t,
                          onClose: () => n(!1),
                          giftingOrigin: w,
                        })
                      : (0, i.jsx)(T.Z, { step: t, onClose: () => n(!1) }),
                  returnRef: R,
                  onStepChange: P,
                  skipConfirm: K,
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
        r = t(987209),
        a = t(409813),
        s = t(276442);
      let o = {
        key: a.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(d, { ...e }),
        options: { renderHeader: !0 },
      };
      function d(e) {
        let { isGift: n } = (0, r.wD)();
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(s.J, {
            ...e,
            breadcrumbSteps: [
              a.h8.ADD_PAYMENT_STEPS,
              a.h8.REVIEW,
              a.h8.CONFIRM,
            ],
            onReturn: () => {
              if (0 === Object.keys(l.Z.paymentSources).length) {
                if (n) {
                  e.handleStepChange(a.h8.GIFT_CUSTOMIZATION);
                  return;
                }
                e.handleClose();
              } else
                e.handleStepChange(a.h8.REVIEW, {
                  trackedFromStep: a.h8.ADD_PAYMENT_STEPS,
                });
            },
          }),
        });
      }
    },
    49308: function (e, n, t) {
      t.d(n, {
        x: function () {
          return T;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        a = t.n(r),
        s = t(399606),
        o = t(607070),
        d = t(597688),
        c = t(1870),
        u = t(429368),
        h = t(624377),
        m = t(530618),
        x = t(331042),
        f = t(372654),
        v = t(987209),
        p = t(563132),
        g = t(179118),
        C = t(614277),
        j = t(698708);
      function I(e) {
        let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: l = !1,
            analyticsLocations: r,
          } = e,
          o = (0, s.e7)([c.Z], () => c.Z.purchases),
          {
            skusById: h,
            selectedSkuId: m,
            application: f,
          } = (0, p.usePaymentContext)(),
          v = (0, s.e7)([d.Z], () => d.Z.getProduct(m)),
          g = (0, u.o)(v, o);
        a()(null != m, "Expected selectedSkuId"),
          a()(null != f, "Expected application");
        let I = h[m];
        return (a()(null != I, "Expected sku"), null == v)
          ? null
          : (0, i.jsxs)(C.C3, {
              children: [
                (0, i.jsx)(j.Z, {}),
                (0, i.jsx)(x.CollectiblesCollectedModalInner, {
                  product: v,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: r,
                  hideConfetti: l,
                  selectedVariantIndex: g,
                }),
              ],
            });
      }
      function T(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: r,
            hasSentMessage: a,
            giftRecipient: c,
            giftMessageError: u,
            isSendingMessage: x,
          } = (0, v.wD)(),
          C = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
          j = l.useRef(null),
          { selectedSkuId: T } = (0, p.usePaymentContext)(),
          E = (0, s.e7)([d.Z], () => d.Z.getProduct(T)),
          { confettiColors: N } = (0, h.Z)(null == E ? void 0 : E.styles);
        return n
          ? (0, i.jsxs)("div", {
              ref: j,
              children: [
                (0, i.jsx)(g.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: r,
                  hasSentMessage: a,
                  giftRecipient: c,
                  giftMessageError: u,
                  isSendingMessage: x,
                }),
                !e.hideConfetti &&
                  !C &&
                  (0, i.jsx)(m.Z, {
                    confettiTarget: j.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, f.vK)(null == E ? void 0 : E.categorySkuId),
                    colors: null == N ? void 0 : N.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, i.jsx)(I, { ...e });
      }
    },
    117652: function (e, n, t) {
      t.d(n, {
        Dd: function () {
          return _;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        s = t(100527),
        o = t(906732),
        d = t(335131),
        c = t(628952),
        u = t(225657),
        h = t(600164),
        m = t(109213),
        x = t(927699),
        f = t(987716),
        v = t(311821),
        p = t(251660),
        g = t(594174),
        C = t(855775),
        j = t(626135),
        I = t(987209),
        T = t(563132),
        E = t(409813),
        N = t(614277),
        S = t(981631),
        Z = t(474936),
        y = t(388032),
        P = t(463313),
        A = t(461405);
      let _ = {
        key: E.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, i.jsx)(O, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => y.intl.string(y.t["W685+f"]),
        },
      };
      function k(e) {
        let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: l = !1,
            disabled: r = !1,
            loading: s = !1,
          } = e,
          { hasPaymentSources: o } = (0, T.usePaymentContext)(),
          d = o ? E.h8.REVIEW : E.h8.ADD_PAYMENT_STEPS;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.Button, {
              onClick: () => n(d),
              disabled: r,
              submitting: s,
              children: y.intl.string(y.t.XiOHRU),
            }),
            l ? (0, i.jsx)(v.Z, { onClick: t }) : null,
          ],
        });
      }
      function O(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: s = "",
            setCustomGiftMessage: o,
            giftRecipientError: v,
            setGiftRecipientError: E,
            validatingGiftRecipient: _,
            giftRecipient: O,
            recommendedGiftSkuIds: M,
            giftingOrigin: w,
            setValidatingGiftRecipient: L,
          } = (0, I.wD)(),
          {
            selectedSkuId: R,
            setSelectedSkuId: D,
            selectedSkuPricePreview: B,
            paymentSourceId: F,
            skuPricePreviewsById: G,
          } = (0, T.usePaymentContext)(),
          U = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          { enabled: H, giftRecommendationAlgorithm: W } = m.G.useExperiment(
            { location: "CollectiblesPaymentModalGiftCustomizationStep" },
            { autoTrackExposure: !1 },
          ),
          z = H && w === Z.Wt.DM_CHANNEL,
          V =
            W === m.u.POPULAR
              ? y.intl.string(y.t.Kwgrrq)
              : y.intl.string(y.t.r1huYW),
          Y = async (e, n) => {
            L(!0),
              null != v && E(),
              !(await (0, d.B1)(e.id, n)) && E(y.intl.string(y.t["4kgVqa"])),
              L(!1);
          };
        l.useEffect(() => {
          null != R &&
            null != O &&
            (j.default.track(S.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
              sku_id: R,
            }),
            Y(O, R));
        }, []);
        let K = (e) => {
            j.default.track(S.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
              sku_id: e,
            }),
              null != O && Y(O, e),
              D(e);
          },
          q = (e) => {
            let n = G[e],
              t = null;
            if (null != n) {
              var l;
              t = null != F && null !== (l = n[F]) && void 0 !== l ? l : n[C.c];
            }
            if (null != t)
              return (0, i.jsx)(
                c.Z,
                {
                  skuId: e,
                  skuPricePreview: t,
                  isSelected: e === R,
                  onSelect: (e) => K(e),
                  className: P.recommendedGiftPreview,
                },
                e,
              );
          },
          J = () =>
            (0, i.jsx)(x.Z, {
              sectionTitle: y.intl.string(y.t.B3miEx),
              onTextChange: (e) => (null == o ? void 0 : o(e)),
              pendingText: s,
              currentText: s,
              disableThemedBackground: !0,
              className: P.customGiftMessageWrapper,
              innerClassName: P.customGiftMessage,
            });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(N.C3, {
              children: (0, i.jsxs)("div", {
                className: P.stepBody,
                children: [
                  z
                    ? (0, i.jsxs)("div", {
                        className: P.bodyColumnLeft,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            className: P.selectGiftTitle,
                            children: V.toLocaleUpperCase(),
                          }),
                          M.map((e) => q(e)),
                          (0, i.jsx)(b, { handleClose: t }),
                        ],
                      })
                    : (0, i.jsx)("div", {
                        className: P.bodyColumnMiddle,
                        children: (0, i.jsx)(f.q, { isShopGift: !0 }),
                      }),
                  z
                    ? (0, i.jsxs)("div", {
                        className: P.bodyColumnRight,
                        children: [
                          (0, i.jsx)(p.s, { giftRecipient: O }),
                          (0, i.jsx)(f.q, {
                            isShopGift: !0,
                            className: A.adjustedGiftMainAnimation,
                            optionsContainerClassName:
                              A.adjustedGiftBoxOptionContainer,
                          }),
                          J(),
                        ],
                      })
                    : (0, i.jsxs)("div", {
                        className: P.bodyColumnRight,
                        children: [
                          (0, i.jsx)(u.Z, {
                            selectedSkuId: R,
                            className: P.sendTo,
                            validateSelectedGift: Y,
                          }),
                          J(),
                          (0, i.jsx)(c.Z, {
                            skuId: R,
                            skuPricePreview: B,
                            className: P.giftPreview,
                            isSelected: !0,
                            shouldDisplayHeader: !0,
                          }),
                        ],
                      }),
                ],
              }),
            }),
            (0, i.jsx)(N.O3, {
              children: (0, i.jsx)(a.ModalFooter, {
                justify: h.Z.Justify.BETWEEN,
                align: h.Z.Align.CENTER,
                children: (0, i.jsx)(k, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != v ||
                    null == O ||
                    O.id === (null == U ? void 0 : U.id) ||
                    s.length > Z.$n,
                  loading: _,
                }),
              }),
            }),
          ],
        });
      }
      function b(e) {
        let { handleClose: n } = e,
          { analyticsLocations: t } = (0, o.ZP)(
            s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
          );
        return (0, i.jsx)(a.Clickable, {
          onClick: function () {
            n(),
              (0, a.closeAllModals)(),
              (0, d.mK)({
                openInLayer: !1,
                analyticsLocations: t,
                analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL,
              });
          },
          children: (0, i.jsxs)("div", {
            className: P.navigateToShopButton,
            children: [
              (0, i.jsxs)("div", {
                className: P.navigateToShopBody,
                children: [
                  (0, i.jsx)("div", {
                    className: P.shopIcon,
                    children: (0, i.jsx)(a.ShopIcon, {
                      size: "custom",
                      width: 18,
                      height: 18,
                      color: "var(--header-primary)",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: P.navigateToShopTextWrapper,
                    children: [
                      (0, i.jsx)(a.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: y.intl.string(y.t["1+Co8P"]),
                      }),
                      (0, i.jsx)(a.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: y.intl.string(y.t.nYn52N),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsx)(a.ArrowLargeRightIcon, {
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
        r = t(131388),
        a = t(409813),
        s = t(750143),
        o = t(457207),
        d = t(60314);
      function c(e) {
        let { step: n, onClose: t } = e,
          c = (0, r.Z)(s.X);
        return n === a.h8.BENEFITS || n === a.h8.CONFIRM
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
          return f;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(772848),
        r = t(481060),
        a = t(159351),
        s = t(667),
        o = t(335131),
        d = t(626135),
        c = t(409813),
        u = t(608579),
        h = t(981631);
      let m = "payment-modal",
        x = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
      function f(e) {
        let n;
        let {
            skuId: t,
            isGift: c = !1,
            giftMessage: f,
            giftingOrigin: v,
            onClose: p,
            onComplete: g,
            analyticsLocations: C,
            analyticsObject: j,
            giftRecipient: I,
            variantsReturnStyle: T,
          } = e,
          E = !1,
          N = (0, l.Z)(),
          S = (e) => {
            n = e;
          };
        (0, r.openModalLazy)(
          async () => (e) => {
            let { onClose: n, returnRef: l, ...r } = e;
            return (0, i.jsx)(u.Z, {
              ...r,
              loadId: N,
              skuId: t,
              isGift: c,
              giftMessage: f,
              giftingOrigin: v,
              analyticsLocations: C,
              giftRecipient: I,
              onClose: (e) => {
                n(), null == p || p(e);
              },
              onComplete: () => {
                (E = !0), null == g || g();
              },
              returnRef: l,
              onStepChange: S,
            });
          },
          {
            modalKey: m,
            onCloseCallback: () => {
              !E &&
                d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: N,
                  payment_type: h.Zuq[h.GZQ.ONE_TIME],
                  location: j,
                  is_gift: c,
                  location_stack: C,
                }),
                (0, a.fw)(),
                (0, s.p)(),
                null == p || p(E),
                E && (0, o.qg)({ variantsReturnStyle: T });
            },
            onCloseRequest: () => {
              null != n && x.has(n) && (0, r.closeModal)(m);
            },
          },
        );
      }
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(512722),
        r = t.n(l),
        a = t(481060),
        s = t(563132),
        o = t(698708),
        d = t(614277),
        c = t(388032),
        u = t(786698);
      function h(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: l,
            application: h,
          } = (0, s.usePaymentContext)();
        r()(null != l, "Expected selectedSkuId"),
          r()(null != h, "Expected application");
        let m = t[l];
        r()(null != m, "Expected sku");
        let x = c.intl.formatToPlainString(c.t.wK0IbG, {
          applicationName: h.name,
          itemName: m.name,
        });
        return (0, i.jsxs)(d.C3, {
          children: [
            (0, i.jsx)(o.Z, {}),
            (0, i.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: x }),
                (0, i.jsx)("div", { className: u.divider }),
                (0, i.jsx)(a.Button, {
                  onClick: n,
                  children: c.intl.string(c.t.cpT0Cg),
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
          return g;
        },
        WA: function () {
          return m;
        },
        s2: function () {
          return x;
        },
        wo: function () {
          return p;
        },
        yp: function () {
          return C;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(853872),
        r = t(409813),
        a = t(276442),
        s = t(793541),
        o = t(380898),
        d = t(713316),
        c = t(710094),
        u = t(865921),
        h = t(388032);
      let m = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        x = {
          key: r.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(a.J, {
                ...e,
                breadcrumbSteps: [
                  r.h8.ADD_PAYMENT_STEPS,
                  r.h8.REVIEW,
                  r.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(l.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(r.h8.REVIEW, {
                        trackedFromStep: r.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        f = {
          key: r.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(o.Z, {}),
        },
        v = {
          key: r.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(s.Z, {}),
          options: { renderHeader: !0 },
        },
        p = {
          key: r.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(c.l, { ...e }),
          options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHh) },
        },
        g = { key: r.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(d.w, { ...e }) },
        C = [f, v];
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
        r = t(399606),
        a = t(89057),
        s = t(597688),
        o = t(987209),
        d = t(563132),
        c = t(409813),
        u = t(48931),
        h = t(456251),
        m = t(981631);
      function x(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: x,
            hasFetchedSkus: f,
            paymentSources: v,
            hasFetchedPaymentSources: p,
            application: g,
            skusById: C,
            selectedSkuId: j,
          } = (0, d.usePaymentContext)(),
          { isGift: I } = (0, o.wD)(),
          [T, E] = l.useState(!0),
          [N, S] = (0, r.Wu)([s.Z], () => [
            s.Z.isFetchingCategories,
            s.Z.error,
          ]);
        if (
          (l.useEffect(() => {
            let e = null != g;
            if (!!f && !!p && !!e) E(N);
          }, [f, p, g, N]),
          l.useEffect(() => {
            if (T || x || null == j) return;
            let e = C[j];
            if (
              I &&
              (null == e ? void 0 : e.productLine) === m.POd.COLLECTIBLES
            ) {
              n(c.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(v).length) {
              n(c.h8.ADD_PAYMENT_STEPS);
              return;
            }
            n(c.h8.REVIEW);
          }, [T, x, n, v, I, C, j]),
          T)
        )
          return (0, i.jsx)(h.Z, {});
        if (x) return (0, i.jsx)(a.Vq, { onClose: t });
        if (null != S) return (0, i.jsx)(u.Z, { onClose: t });
        return null;
      }
    },
    445924: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(388032);
      n.Z = (e) => {
        let {
          onChangeAvatar: n,
          onChangeAvatarDecoration: t,
          onClose: a,
          className: s,
        } = e;
        return (0, i.jsxs)(l.Menu, {
          className: s,
          onClose: a,
          onSelect: void 0,
          navId: "user-settings-change-avatar",
          "aria-label": r.intl.string(r.t.ldIeAQ),
          children: [
            (0, i.jsx)(l.MenuItem, {
              id: "change-avatar",
              action: n,
              label: r.intl.string(r.t["4OynCA"]),
            }),
            (0, i.jsx)(l.MenuItem, {
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
          return I;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(481060),
        s = t(680295),
        o = t(687158),
        d = t(576635),
        c = t(518950),
        u = t(438163),
        h = t(502762),
        m = t(150039),
        x = t(450734),
        f = t(225089),
        v = t(853726),
        p = t(165747),
        g = t(981631),
        C = t(228168),
        j = t(154960);
      function I(e) {
        let {
            user: n,
            guild: t,
            canUsePremiumCustomization: l,
            onUpsellClick: I,
            pendingBanner: T,
            pendingBio: E,
            pendingPronouns: N,
            pendingAvatar: S,
            pendingAvatarDecoration: Z,
            pendingNickname: y,
            pendingGlobalName: P,
            pendingThemeColors: A,
            pendingProfileEffectId: _,
            avatarClassName: k,
            containerClassName: O,
            isTryItOutFlow: b = !1,
            disabledInputs: M = !1,
            hideCustomStatus: w = !1,
            hideBioSection: L = !1,
            hideMessageInput: R = !0,
            hideExampleButton: D = !1,
          } = e,
          B = (0, o.ZP)(n.id, null == t ? void 0 : t.id),
          { avatarSrc: F, avatarDecorationSrc: G } = (0, c.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: Z,
            avatarOverride: S,
            size: a.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          U = (0, m.ZT)({ pendingProfileEffectId: _, displayProfile: B }),
          { theme: H, primaryColor: W } = (0, d.Z)({
            user: n,
            displayProfile: B,
            pendingThemeColors: A,
            isPreview: l,
          });
        return (0, i.jsxs)(h.Z, {
          user: n,
          displayProfile: B,
          profileType: C.y0.BITE_SIZE,
          pendingThemeColors: A,
          className: r()(j.container, O),
          forceShowPremium: l,
          children: [
            (0, i.jsxs)("header", {
              className: j.header,
              children: [
                (0, i.jsx)(f.Z, {
                  user: n,
                  displayProfile: B,
                  guildId: null == t ? void 0 : t.id,
                  canUsePremiumCustomization: l,
                  pendingBanner: T,
                  isTryItOutFlow: b,
                  disabledInputs: M,
                  onUpsellClick: () =>
                    null == I
                      ? void 0
                      : I({ object: g.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, i.jsx)(x.Z, {
                  user: n,
                  guild: t,
                  displayProfile: B,
                  canUsePremiumCustomization: l,
                  previewAvatar: F,
                  previewAvatarDecoration: G,
                  previewTheme: H,
                  previewPrimaryColor: W,
                  className: k,
                  disabledInputs: M,
                  isTryItOutFlow: b,
                  onUpsellClick: () =>
                    null == I ? void 0 : I({ object: g.qAy.AVATAR }),
                }),
                !w && (0, i.jsx)(u.Z, { user: n, profileType: C.y0.BITE_SIZE }),
              ],
            }),
            (0, i.jsx)(v.Z, {
              user: n,
              displayProfile: B,
              guild: t,
              pendingAvatar: S,
              pendingNickname: y,
              pendingGlobalName: P,
              pendingBio: E,
              pendingPronouns: N,
              isTryItOutFlow: b,
              hideBioSection: L,
            }),
            (0, i.jsx)(p.Z, {
              user: n,
              hideMessageInput: R,
              hideExampleButton: D,
            }),
            null != U && (0, i.jsx)(s.Z, { profileEffectId: U }),
          ],
        });
      }
    },
    450734: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(442837),
        s = t(481060),
        o = t(906732),
        d = t(1585),
        c = t(158776),
        u = t(998502),
        h = t(445924),
        m = t(654904),
        x = t(486324),
        f = t(776458);
      let v = u.ZP.getEnableHardwareAcceleration()
        ? s.AnimatedAvatar
        : s.Avatar;
      function p(e) {
        let {
            user: n,
            guild: t,
            displayProfile: l,
            canUsePremiumCustomization: u,
            previewAvatar: p,
            previewAvatarDecoration: g,
            previewTheme: C,
            previewPrimaryColor: j,
            className: I,
            disabledInputs: T,
            isTryItOutFlow: E,
            onUpsellClick: N,
          } = e,
          { analyticsLocations: S } = (0, o.ZP)(),
          Z = (0, a.e7)([c.Z], () => c.Z.getStatus(n.id)),
          y =
            null == t ||
            (null == l ? void 0 : l.canUsePremiumProfileCustomization) ||
            u,
          P = (0, i.jsx)(v, {
            src: p,
            avatarDecoration: g,
            imageClassName: r()(I, { [f.overlay]: !T }),
            size: s.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: Z,
            statusTooltip: !1,
            statusBackdropColor:
              null != j ? (0, s.getStatusBackdropColor)(C) : void 0,
          });
        return T
          ? (0, i.jsx)("div", { className: f.avatar, children: P })
          : y
            ? (0, i.jsx)(s.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(h.Z, {
                    className: f.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, m.$r)(x.pC.AVATAR, null == t ? void 0 : t.id, E),
                    onChangeAvatarDecoration: () => {
                      (0, d.ps)({
                        guild: null == t ? void 0 : t,
                        analyticsLocations: S,
                        isTryItOutFlow: E,
                      });
                    },
                  });
                },
                children: (e) =>
                  (0, i.jsxs)(s.Clickable, {
                    ...e,
                    className: r()(f.avatar, f.clickable),
                    children: [
                      P,
                      (0, i.jsx)(s.PencilIcon, {
                        size: "custom",
                        className: f.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, i.jsxs)(s.Clickable, {
                onClick: N,
                className: r()(f.avatar, f.clickable),
                children: [
                  P,
                  (0, i.jsx)(s.NitroWheelIcon, {
                    size: "custom",
                    className: f.overlayIcon,
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
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(222062),
        a = t(867176),
        s = t(654904),
        o = t(486324),
        d = t(228168),
        c = t(388032),
        u = t(93428);
      function h(e) {
        let {
            user: n,
            displayProfile: t,
            guildId: h,
            canUsePremiumCustomization: m,
            pendingBanner: x,
            isTryItOutFlow: f,
            disabledInputs: v,
            onUpsellClick: p,
          } = e,
          g =
            m ||
            (null == t ? void 0 : t.canUsePremiumProfileCustomization) ||
            !1,
          C = g ? l.PencilIcon : l.NitroWheelIcon,
          j = (0, r.M)(g);
        return (0, i.jsx)(a.Z, {
          user: n,
          displayProfile: t,
          guildId: h,
          profileType: d.y0.BITE_SIZE,
          pendingBanner: x,
          canUsePremiumProfileCustomization: m,
          children:
            !v &&
            (0, i.jsxs)(l.Clickable, {
              onClick: () => {
                if (!g && !j) {
                  null == p || p();
                  return;
                }
                (0, s.$r)(o.pC.BANNER, h, f);
              },
              className: u.clickable,
              children: [
                (0, i.jsx)(C, { size: "xs", color: "white" }),
                (0, i.jsx)(l.Heading, {
                  variant: "text-sm/medium",
                  color: "always-white",
                  children:
                    g || j
                      ? c.intl.string(c.t.N0bC3N)
                      : c.intl.string(c.t.O1sT5u),
                }),
              ],
            }),
        });
      }
    },
    853726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(648052),
        a = t(530),
        s = t(420654),
        o = t(116854),
        d = t(271383),
        c = t(246946),
        u = t(654904),
        h = t(228168),
        m = t(591156);
      function x(e) {
        var n;
        let {
            user: t,
            displayProfile: x,
            guild: f,
            pendingAvatar: v,
            pendingNickname: p,
            pendingGlobalName: g,
            pendingBio: C,
            pendingPronouns: j,
            isTryItOutFlow: I,
            hideBioSection: T,
          } = e,
          E = (0, l.e7)([d.ZP], () =>
            null == f ? null : d.ZP.getMember(f.id, t.id),
          ),
          N = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation),
          S =
            null == x
              ? void 0
              : null === (n = x.getPreviewBio(C)) || void 0 === n
                ? void 0
                : n.value,
          Z = null != j ? j : null == x ? void 0 : x.pronouns,
          y = (0, u.Ly)({
            pendingNickname: p,
            pendingGlobalName: g,
            user: t,
            guildMember: E,
          });
        return (0, i.jsxs)("div", {
          inert: "",
          className: m.body,
          children: [
            (0, i.jsx)(a.Z, {
              user: t,
              profileType: h.y0.BITE_SIZE,
              usernameIcon: (() => {
                if (!(null != E)) return;
                if (null !== v && !!(null != E.avatar || null != v))
                  return (0, i.jsx)(o.Z, { user: t, nickname: y });
              })(),
              nickname: y,
              pronouns: Z,
              isTryItOut: I,
              tags: (0, i.jsx)(r.Z, {
                displayProfile: x,
                profileType: h.y0.BITE_SIZE,
              }),
            }),
            !T &&
              null != S &&
              "" !== S &&
              (0, i.jsx)(s.Z, {
                user: t,
                bio: S,
                hidePersonalInformation: N,
                viewFullBioDisabled: !0,
              }),
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
      var i = t(200651);
      t(192379);
      var l = t(475413),
        r = t(955418),
        a = t(388032),
        s = t(591156);
      function o(e) {
        let { user: n, hideMessageInput: t, hideExampleButton: o } = e;
        return t
          ? (0, i.jsx)("footer", {
              className: s.footer,
              children:
                !o &&
                (0, i.jsx)(l.tG, {
                  text: a.intl.string(a.t.hZkfwc),
                  fullWidth: !0,
                }),
            })
          : (0, i.jsx)("footer", {
              inert: "",
              className: s.footer,
              children: (0, i.jsx)(r.Z, { user: n }),
            });
      }
    },
  },
]);
//# sourceMappingURL=44fd0392c1df40925d06.js.map
