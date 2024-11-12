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
    223223: function (e) {
      e.exports = "/assets/1a88b4ae0f6cc7cdbd66.png";
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
        d = t(1585),
        c = t(125988),
        u = t(987209),
        h = t(921813),
        m = t(731896),
        f = t(484459),
        x = t(594174),
        v = t(937615),
        p = t(583434),
        g = t(388032),
        C = t(696307),
        j = t(223223);
      let I = (e) => {
          let { avatarDecoration: n } = e,
            t = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
            { avatarDecorationSrc: l } = (0, c.Z)({
              user: t,
              avatarDecorationOverride: n,
              size: (0, d.y9)(o.AvatarSizes.SIZE_40),
            });
          return (0, i.jsx)("img", {
            src: l,
            alt: n.label,
            className: C.avatarDecoration,
          });
        },
        T = (e) => {
          var n;
          let { profileEffect: t } = e,
            l = (0, m.V)(t.id),
            {
              accessibilityLabel: r,
              thumbnailPreviewSrc: a,
              title: s,
            } = null !== (n = null == l ? void 0 : l.config) && void 0 !== n
              ? n
              : {};
          return (0, i.jsxs)("div", {
            className: C.profileEffectContainer,
            children: [
              (0, i.jsx)("img", {
                src: j,
                alt: r,
                className: C.profileEffectBackground,
              }),
              (0, i.jsx)("img", { className: C.profileEffect, src: a, alt: s }),
            ],
          });
        };
      n.Z = (e) => {
        let {
            skuId: n,
            skuPricePreview: t,
            isSelected: l,
            onSelect: d,
            shouldDisplayHeader: c = !1,
            className: m,
          } = e,
          { product: j } = (0, p.T)(n),
          { giftRecipient: E, giftRecipientError: N } = (0, u.wD)(),
          S = (0, s.e7)([x.default], () => x.default.getCurrentUser());
        if (null == j || null == t) return null;
        let [Z] = j.items,
          y = null != E && E.id !== (null == S ? void 0 : S.id);
        return (0, i.jsxs)("div", {
          className: m,
          children: [
            c &&
              (0, i.jsxs)("div", {
                className: C.previewTitleContainer,
                children: [
                  (0, i.jsx)(o.FormTitle, {
                    className: C.previewTitle,
                    children: g.intl.string(g.t.PpoJzs),
                  }),
                  y &&
                    (0, i.jsx)(
                      o.Popout,
                      {
                        preload: () => (0, f.Z)(E.id, E.getAvatarURL(null, 80)),
                        renderPopout: (e) =>
                          (0, i.jsx)(h.Z, {
                            ...e,
                            user: E,
                            pendingAvatar: E.getAvatarURL(
                              null,
                              (0, o.getAvatarSize)(o.AvatarSizes.SIZE_80),
                            ),
                            pendingAvatarDecoration:
                              Z.type === a.Z.AVATAR_DECORATION ? Z : null,
                            pendingProfileEffectId:
                              Z.type === a.Z.PROFILE_EFFECT ? Z.id : null,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                          }),
                        align: "center",
                        position: "right",
                        children: (e) =>
                          (0, i.jsx)(o.Clickable, {
                            ...e,
                            className: C.previewLink,
                            children: (0, i.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              color: "text-link",
                              children: g.intl.string(g.t["2GnJQE"]),
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
                null != n && null != d && d(n);
              },
              className: r()(C.previewContainer, {
                [C.previewContainerSelected]: l && null == N,
                [C.previewContainerError]: l && null != N,
              }),
              children: [
                (0, i.jsxs)("div", {
                  className: C.giftInfoContainer,
                  children: [
                    Z.type === a.Z.AVATAR_DECORATION &&
                      (0, i.jsx)(I, { avatarDecoration: Z }),
                    Z.type === a.Z.PROFILE_EFFECT &&
                      (0, i.jsx)(T, { profileEffect: Z }),
                    (0, i.jsxs)("div", {
                      className: C.previewTextContainer,
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/semibold",
                          children: j.name,
                        }),
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-sm/medium",
                          color: "header-secondary",
                          children:
                            Z.type === a.Z.AVATAR_DECORATION
                              ? g.intl.string(g.t["7v0T9P"])
                              : Z.type === a.Z.PROFILE_EFFECT
                                ? g.intl.string(g.t.wR5wOj)
                                : null,
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-md/semibold",
                      children: (0, v.T4)(t.amount, t.currency),
                    }),
                  ],
                }),
                l &&
                  null != N &&
                  (0, i.jsx)("div", {
                    className: C.recipientError,
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
          f = (0, l.Wu)(
            [d.default],
            () => d.default.filter((e) => m.includes(e.id) && !e.bot),
            [m],
          ),
          { giftRecipient: x, setGiftRecipient: v } = (0, s.wD)();
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
                  value: x,
                  onChange: (e) => {
                    t(e, n), v(e);
                  },
                  options: f.map((e) => ({
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
        h = t(417552),
        m = t(982240),
        f = t(533854);
      ((i = l || (l = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      n.Z = (e) => {
        let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
          l = (0, d.ZP)(),
          x = (0, a.e7)([c.default], () => {
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
              src: (0, s.wj)(l) ? m : f,
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
            x &&
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
        s = t(18678);
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
        h = t(73913);
      function m(e) {
        let { step: n, onClose: t, giftingOrigin: l } = e,
          { enabled: m } = o.G.useExperiment(
            { location: "CollectiblesGiftPaymentModalHeader" },
            { autoTrackExposure: !1 },
          ),
          f = (0, a.EQ)(n)
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
        return null == f
          ? null
          : (0, i.jsxs)(s.ModalHeader, {
              className: r()(h.headerContainerGift),
              separator: n !== d.h8.CONFIRM,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-lg/semibold",
                  children: f,
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
          return y;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(703533),
        o = t(442837),
        d = t(100527),
        c = t(906732),
        u = t(597688),
        h = t(987209),
        m = t(563132),
        f = t(409813),
        x = t(791785),
        v = t(961830),
        p = t(742956),
        g = t(346790),
        C = t(49308),
        j = t(117652),
        I = t(126982),
        T = t(981631),
        E = t(302800),
        N = t(215023),
        S = t(231338),
        Z = t(556709);
      function y(e) {
        var n;
        let {
            onClose: t,
            onComplete: r,
            onStepChange: y,
            transitionState: A,
            loadId: P,
            skuId: _,
            isGift: O = !1,
            giftRecipient: b,
            giftMessage: k,
            giftingOrigin: M,
            analyticsLocations: w,
            returnRef: R,
          } = e,
          { analyticsLocations: D } = (0, c.ZP)([
            ...w,
            d.Z.COLLECTIBLES_PAYMENT_MODAL,
          ]),
          B = l.useRef(new s.qA()),
          [L, F] = l.useState(null),
          [G, U] = l.useState(!1),
          H = l.useMemo(() => (0, E.UY)(_), [_]),
          W = (0, o.Wu)([u.Z], () => u.Z.recommendedGiftSkuIds, []),
          z = null != _ ? [_] : W,
          V = null !== (n = z[0]) && void 0 !== n ? n : null,
          Y = null != _ && N.Rm.has(_),
          K = l.useCallback(() => {
            U(!0), null == r || r();
          }, [r]),
          q = l.useCallback(
            (e) => {
              U(!1), t(e);
            },
            [t],
          ),
          J = l.useMemo(
            () => [
              v.WA,
              j.Dd,
              g.n,
              ...v.yp,
              v.wo,
              {
                key: f.h8.CONFIRM,
                renderStep: (e) =>
                  (0, i.jsx)(C.x, {
                    ...e,
                    confettiCanvas: L,
                    analyticsLocations: D,
                    hideConfetti: null != H,
                  }),
                options: {
                  bodyClassName: Z.modalOverrideBody,
                  sliderBodyClassName: Z.modalOverrideSliderBody,
                },
              },
            ],
            [D, L, H],
          );
        return (0, i.jsxs)(c.Gt, {
          value: D,
          children: [
            (0, i.jsx)(s.O_, {
              ref: F,
              className: Z.confettiCanvas,
              environment: B.current,
            }),
            null != H &&
              (0, i.jsx)("img", {
                src: H.imageSrc,
                className: a()(Z.customConfetti, { [Z.hidden]: !G }),
                style: H.style,
                alt: "",
                "aria-hidden": !0,
              }),
            (0, i.jsx)(m.PaymentContextProvider, {
              loadId: P,
              stepConfigs: J,
              applicationId: T.XAJ,
              skuIDs: z,
              isGift: O,
              activeSubscription: null,
              purchaseType: S.GZ.ONE_TIME,
              children: (0, i.jsx)(h.KB, {
                isGift: O,
                giftRecipient: b,
                giftMessage: k,
                giftingOrigin: M,
                children: (0, i.jsx)(x.PaymentModal, {
                  onClose: q,
                  onComplete: K,
                  applicationId: T.XAJ,
                  skuId: V,
                  initialPlanId: null,
                  analyticsLocations: D,
                  transitionState: A,
                  renderHeader: (e, n, t) =>
                    O
                      ? (0, i.jsx)(p.Z, {
                          step: t,
                          onClose: () => n(!1),
                          giftingOrigin: M,
                        })
                      : (0, i.jsx)(I.Z, { step: t, onClose: () => n(!1) }),
                  returnRef: R,
                  onStepChange: y,
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
          return j;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        a = t.n(r),
        s = t(399606),
        o = t(607070),
        d = t(597688),
        c = t(624377),
        u = t(530618),
        h = t(331042),
        m = t(372654),
        f = t(987209),
        x = t(563132),
        v = t(179118),
        p = t(614277),
        g = t(698708);
      function C(e) {
        let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: l = !1,
            analyticsLocations: r,
          } = e,
          {
            skusById: o,
            selectedSkuId: c,
            application: u,
          } = (0, x.usePaymentContext)(),
          m = (0, s.e7)([d.Z], () => d.Z.getProduct(c));
        a()(null != c, "Expected selectedSkuId"),
          a()(null != u, "Expected application");
        let f = o[c];
        return (a()(null != f, "Expected sku"), null == m)
          ? null
          : (0, i.jsxs)(p.C3, {
              children: [
                (0, i.jsx)(g.Z, {}),
                (0, i.jsx)(h.CollectiblesCollectedModalInner, {
                  product: m,
                  onClose: n,
                  confettiCanvas: t,
                  analyticsLocations: r,
                  hideConfetti: l,
                }),
              ],
            });
      }
      function j(e) {
        let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: r,
            hasSentMessage: a,
            giftRecipient: h,
            giftMessageError: p,
            isSendingMessage: g,
          } = (0, f.wD)(),
          j = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
          I = l.useRef(null),
          { selectedSkuId: T } = (0, x.usePaymentContext)(),
          E = (0, s.e7)([d.Z], () => d.Z.getProduct(T)),
          { confettiColors: N } = (0, c.Z)(null == E ? void 0 : E.styles);
        return n
          ? (0, i.jsxs)("div", {
              ref: I,
              children: [
                (0, i.jsx)(v.Z, {
                  giftCode: t,
                  onClose: e.handleClose,
                  selectedGiftStyle: r,
                  hasSentMessage: a,
                  giftRecipient: h,
                  giftMessageError: p,
                  isSendingMessage: g,
                }),
                !e.hideConfetti &&
                  !j &&
                  (0, i.jsx)(u.Z, {
                    confettiTarget: I.current,
                    confettiCanvas: e.confettiCanvas,
                    sprites: (0, m.vK)(null == E ? void 0 : E.categorySkuId),
                    colors: null == N ? void 0 : N.map((e) => e.toHexString()),
                  }),
              ],
            })
          : (0, i.jsx)(C, { ...e });
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
        f = t(927699),
        x = t(987716),
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
        A = t(829294),
        P = t(522888);
      let _ = {
        key: E.h8.GIFT_CUSTOMIZATION,
        renderStep: (e) => (0, i.jsx)(b, { ...e }),
        options: {
          isLargeModal: !0,
          useBreadcrumbLabel: () => y.intl.string(y.t["W685+f"]),
        },
      };
      function O(e) {
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
      function b(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            customGiftMessage: s = "",
            setCustomGiftMessage: o,
            giftRecipientError: v,
            setGiftRecipientError: E,
            validatingGiftRecipient: _,
            giftRecipient: b,
            recommendedGiftSkuIds: M,
            giftingOrigin: w,
            setValidatingGiftRecipient: R,
          } = (0, I.wD)(),
          {
            selectedSkuId: D,
            setSelectedSkuId: B,
            selectedSkuPricePreview: L,
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
            R(!0),
              null != v && E(),
              !(await (0, d.B1)(e.id, n)) && E(y.intl.string(y.t["4kgVqa"])),
              R(!1);
          };
        l.useEffect(() => {
          null != D &&
            null != b &&
            (j.default.track(S.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
              sku_id: D,
            }),
            Y(b, D));
        }, []);
        let K = (e) => {
            j.default.track(S.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
              sku_id: e,
            }),
              null != b && Y(b, e),
              B(e);
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
                  isSelected: e === D,
                  onSelect: (e) => K(e),
                  className: A.recommendedGiftPreview,
                },
                e,
              );
          },
          J = () =>
            (0, i.jsx)(f.Z, {
              sectionTitle: y.intl.string(y.t.B3miEx),
              onTextChange: (e) => (null == o ? void 0 : o(e)),
              pendingText: s,
              currentText: s,
              disableThemedBackground: !0,
              className: A.customGiftMessageWrapper,
              innerClassName: A.customGiftMessage,
            });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(N.C3, {
              children: (0, i.jsxs)("div", {
                className: A.stepBody,
                children: [
                  z
                    ? (0, i.jsxs)("div", {
                        className: A.bodyColumnLeft,
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            className: A.selectGiftTitle,
                            children: V.toLocaleUpperCase(),
                          }),
                          M.map((e) => q(e)),
                          (0, i.jsx)(k, { handleClose: t }),
                        ],
                      })
                    : (0, i.jsx)("div", {
                        className: A.bodyColumnMiddle,
                        children: (0, i.jsx)(x.q, { isShopGift: !0 }),
                      }),
                  z
                    ? (0, i.jsxs)("div", {
                        className: A.bodyColumnRight,
                        children: [
                          (0, i.jsx)(p.s, { giftRecipient: b }),
                          (0, i.jsx)(x.q, {
                            isShopGift: !0,
                            className: P.adjustedGiftMainAnimation,
                            optionsContainerClassName:
                              P.adjustedGiftBoxOptionContainer,
                          }),
                          J(),
                        ],
                      })
                    : (0, i.jsxs)("div", {
                        className: A.bodyColumnRight,
                        children: [
                          (0, i.jsx)(u.Z, {
                            selectedSkuId: D,
                            className: A.sendTo,
                            validateSelectedGift: Y,
                          }),
                          J(),
                          (0, i.jsx)(c.Z, {
                            skuId: D,
                            skuPricePreview: L,
                            className: A.giftPreview,
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
                children: (0, i.jsx)(O, {
                  onStepChange: n,
                  onBackClick: t,
                  disabled:
                    null != v ||
                    null == b ||
                    b.id === (null == U ? void 0 : U.id) ||
                    s.length > Z.$n,
                  loading: _,
                }),
              }),
            }),
          ],
        });
      }
      function k(e) {
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
            className: A.navigateToShopButton,
            children: [
              (0, i.jsxs)("div", {
                className: A.navigateToShopBody,
                children: [
                  (0, i.jsx)("div", {
                    className: A.shopIcon,
                    children: (0, i.jsx)(a.ShopIcon, {
                      size: "custom",
                      width: 18,
                      height: 18,
                      color: "var(--header-primary)",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: A.navigateToShopTextWrapper,
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
        o = t(264499),
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
          return x;
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
        f = new Set([c.h8.REVIEW, c.h8.CONFIRM, c.h8.GIFT_CUSTOMIZATION]);
      function x(e) {
        let n;
        let {
            skuId: t,
            isGift: c = !1,
            giftMessage: x,
            giftingOrigin: v,
            onClose: p,
            onComplete: g,
            analyticsLocations: C,
            analyticsObject: j,
            giftRecipient: I,
          } = e,
          T = !1,
          E = (0, l.Z)(),
          N = (e) => {
            n = e;
          };
        (0, r.openModalLazy)(
          async () => (e) => {
            let { onClose: n, returnRef: l, ...r } = e;
            return (0, i.jsx)(u.Z, {
              ...r,
              loadId: E,
              skuId: t,
              isGift: c,
              giftMessage: x,
              giftingOrigin: v,
              analyticsLocations: C,
              giftRecipient: I,
              onClose: (e) => {
                n(), null == p || p(e);
              },
              onComplete: () => {
                (T = !0), null == g || g();
              },
              returnRef: l,
              onStepChange: N,
            });
          },
          {
            modalKey: m,
            onCloseCallback: () => {
              !T &&
                d.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: E,
                  payment_type: h.Zuq[h.GZQ.ONE_TIME],
                  location: j,
                  is_gift: c,
                  location_stack: C,
                }),
                (0, a.fw)(),
                (0, s.p)(),
                null == p || p(T),
                T && (0, o.qg)();
            },
            onCloseRequest: () => {
              null != n && f.has(n) && (0, r.closeModal)(m);
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
        u = t(525550);
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
        let f = c.intl.formatToPlainString(c.t.wK0IbG, {
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
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: f }),
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
          return f;
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
        f = {
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
        x = {
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
        C = [x, v];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return f;
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
      function f(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: f,
            hasFetchedSkus: x,
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
            if (!!x && !!p && !!e) E(N);
          }, [x, p, g, N]),
          l.useEffect(() => {
            if (T || f || null == j) return;
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
          }, [T, f, n, v, I, C, j]),
          T)
        )
          return (0, i.jsx)(h.Z, {});
        if (f) return (0, i.jsx)(a.Vq, { onClose: t });
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
        f = t(450734),
        x = t(225089),
        v = t(853726),
        p = t(165747),
        g = t(981631),
        C = t(228168),
        j = t(706995);
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
            pendingGlobalName: A,
            pendingThemeColors: P,
            pendingProfileEffectId: _,
            avatarClassName: O,
            containerClassName: b,
            isTryItOutFlow: k = !1,
            disabledInputs: M = !1,
            hideCustomStatus: w = !1,
            hideBioSection: R = !1,
            hideMessageInput: D = !0,
            hideExampleButton: B = !1,
          } = e,
          L = (0, o.ZP)(n.id, null == t ? void 0 : t.id),
          { avatarSrc: F, avatarDecorationSrc: G } = (0, c.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: Z,
            avatarOverride: S,
            size: a.AvatarSizes.SIZE_80,
            showPending: !0,
          }),
          U = (0, m.ZT)({ pendingProfileEffectId: _, displayProfile: L }),
          { theme: H, primaryColor: W } = (0, d.Z)({
            user: n,
            displayProfile: L,
            pendingThemeColors: P,
            isPreview: l,
          });
        return (0, i.jsxs)(h.Z, {
          user: n,
          displayProfile: L,
          profileType: C.y0.BITE_SIZE,
          pendingThemeColors: P,
          className: r()(j.container, b),
          forceShowPremium: l,
          children: [
            (0, i.jsxs)("header", {
              className: j.header,
              children: [
                (0, i.jsx)(x.Z, {
                  user: n,
                  displayProfile: L,
                  guildId: null == t ? void 0 : t.id,
                  canUsePremiumCustomization: l,
                  pendingBanner: T,
                  isTryItOutFlow: k,
                  disabledInputs: M,
                  onUpsellClick: () =>
                    null == I
                      ? void 0
                      : I({ object: g.qAy.EDIT_PROFILE_BANNER }),
                }),
                (0, i.jsx)(f.Z, {
                  user: n,
                  guild: t,
                  displayProfile: L,
                  canUsePremiumCustomization: l,
                  previewAvatar: F,
                  previewAvatarDecoration: G,
                  previewTheme: H,
                  previewPrimaryColor: W,
                  className: O,
                  disabledInputs: M,
                  isTryItOutFlow: k,
                  onUpsellClick: () =>
                    null == I ? void 0 : I({ object: g.qAy.AVATAR }),
                }),
                !w && (0, i.jsx)(u.Z, { user: n, profileType: C.y0.BITE_SIZE }),
              ],
            }),
            (0, i.jsx)(v.Z, {
              user: n,
              displayProfile: L,
              guild: t,
              pendingAvatar: S,
              pendingNickname: y,
              pendingGlobalName: A,
              pendingBio: E,
              pendingPronouns: N,
              isTryItOutFlow: k,
              hideBioSection: R,
            }),
            (0, i.jsx)(p.Z, {
              user: n,
              hideMessageInput: D,
              hideExampleButton: B,
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
        f = t(486324),
        x = t(529934);
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
          A = (0, i.jsx)(v, {
            src: p,
            avatarDecoration: g,
            imageClassName: r()(I, { [x.overlay]: !T }),
            size: s.AvatarSizes.SIZE_80,
            "aria-label": n.username,
            status: Z,
            statusTooltip: !1,
            statusBackdropColor:
              null != j ? (0, s.getStatusBackdropColor)(C) : void 0,
          });
        return T
          ? (0, i.jsx)("div", { className: x.avatar, children: A })
          : y
            ? (0, i.jsx)(s.Popout, {
                renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(h.Z, {
                    className: x.menu,
                    onClose: n,
                    onChangeAvatar: () =>
                      (0, m.$r)(f.pC.AVATAR, null == t ? void 0 : t.id, E),
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
                    className: r()(x.avatar, x.clickable),
                    children: [
                      A,
                      (0, i.jsx)(s.PencilIcon, {
                        size: "custom",
                        className: x.overlayIcon,
                        width: 20,
                        height: 20,
                        color: "white",
                      }),
                    ],
                  }),
              })
            : (0, i.jsxs)(s.Clickable, {
                onClick: N,
                className: r()(x.avatar, x.clickable),
                children: [
                  A,
                  (0, i.jsx)(s.NitroWheelIcon, {
                    size: "custom",
                    className: x.overlayIcon,
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
        r = t(81245),
        a = t(867176),
        s = t(654904),
        o = t(486324),
        d = t(228168),
        c = t(388032),
        u = t(892532);
      function h(e) {
        let {
            user: n,
            displayProfile: t,
            guildId: h,
            canUsePremiumCustomization: m,
            pendingBanner: f,
            isTryItOutFlow: x,
            disabledInputs: v,
            onUpsellClick: p,
          } = e,
          g =
            m ||
            (null == t ? void 0 : t.canUsePremiumProfileCustomization) ||
            !1,
          C = g ? l.PencilIcon : l.NitroWheelIcon,
          j = (0, r.Mu)("ProfileCustomizationPreviewBanner", g);
        return (0, i.jsx)(a.Z, {
          user: n,
          displayProfile: t,
          guildId: h,
          profileType: d.y0.BITE_SIZE,
          pendingBanner: f,
          canUsePremiumProfileCustomization: m,
          children:
            !v &&
            (0, i.jsxs)(l.Clickable, {
              onClick: () => {
                if (!g && !j) {
                  null == p || p();
                  return;
                }
                (0, s.$r)(o.pC.BANNER, h, x);
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
          return f;
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
        m = t(451563);
      function f(e) {
        var n;
        let {
            user: t,
            displayProfile: f,
            guild: x,
            pendingAvatar: v,
            pendingNickname: p,
            pendingGlobalName: g,
            pendingBio: C,
            pendingPronouns: j,
            isTryItOutFlow: I,
            hideBioSection: T,
          } = e,
          E = (0, l.e7)([d.ZP], () =>
            null == x ? null : d.ZP.getMember(x.id, t.id),
          ),
          N = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation),
          S =
            null == f
              ? void 0
              : null === (n = f.getPreviewBio(C)) || void 0 === n
                ? void 0
                : n.value,
          Z = null != j ? j : null == f ? void 0 : f.pronouns,
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
                displayProfile: f,
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
        s = t(451563);
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
//# sourceMappingURL=e02aac65c7ceb327b549.js.map
