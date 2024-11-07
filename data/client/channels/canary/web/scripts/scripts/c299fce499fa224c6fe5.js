"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2026"],
  {
    188584: function (e, t, i) {
      i.d(t, {
        k: function () {
          return r;
        },
      });
      var n = i(192379),
        l = i(328456);
      let r = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: i } =
          n.useMemo(() => {
            var t;
            return new l.b(
              null !== (t = e.bundledProducts) && void 0 !== t ? t : [],
            );
          }, [e]);
        return { firstProfileEffect: t, firstAvatarDecoration: i };
      };
    },
    224068: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      }),
        i(627341);
      var n = i(200651);
      i(192379);
      var l = i(120356),
        r = i.n(l),
        a = i(278074),
        s = i(979554),
        o = i(481060),
        c = i(388032),
        d = i(374503);
      function u(e) {
        var t;
        let { product: i, isDarkText: l = !1 } = e;
        let u =
          ((t = i.type),
          (0, a.EQ)(t)
            .with(s.Z.AVATAR_DECORATION, () => c.intl.string(c.t["7v0T9P"]))
            .with(s.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOj))
            .otherwise(() => null));
        return null === u
          ? null
          : (0, n.jsx)(o.Text, {
              variant: "text-xxs/normal",
              className: r()([d.container, l ? d.darkText : d.lightText]),
              children: u,
            });
      }
    },
    702370: function (e, t, i) {
      i.r(t), i(47120), i(627341);
      var n = i(200651),
        l = i(192379),
        r = i(120356),
        a = i.n(r),
        s = i(278074),
        o = i(873546),
        c = i(979554),
        d = i(399606),
        u = i(780384),
        m = i(481060),
        f = i(37234),
        v = i(809206),
        C = i(727637),
        x = i(410030),
        h = i(100527),
        p = i(906732),
        g = i(1585),
        P = i(786761),
        I = i(3148),
        _ = i(739566),
        b = i(753206),
        j = i(333867),
        w = i(197115),
        T = i(300284),
        E = i(921813),
        N = i(876917),
        k = i(642619),
        A = i(484459),
        Z = i(25990),
        L = i(594174),
        S = i(626135),
        y = i(74538),
        B = i(335131),
        R = i(1870),
        O = i(884697),
        D = i(890249),
        M = i(188584),
        F = i(635552),
        H = i(724994),
        V = i(328456),
        U = i(390698),
        z = i(141011),
        W = i(426171),
        q = i(224068),
        G = i(813083),
        K = i(823941),
        Q = i(680942),
        Y = i(558060),
        J = i(237031),
        X = i(372654),
        $ = i(616066),
        ee = i(832149),
        et = i(215023),
        ei = i(981631),
        en = i(474936),
        el = i(231338),
        er = i(388032),
        ea = i(359407);
      let es = (e) => {
          let { item: t, user: i, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            o = (0, C.Z)(a);
          return (0, s.EQ)(t.type)
            .with(c.Z.AVATAR_DECORATION, () =>
              (0, n.jsx)("div", {
                className: r
                  ? ea.bundleAvatarPreviewContainer
                  : ea.avatarPreviewContainer,
                children: (0, n.jsx)($.R, { user: i, item: t }),
              }),
            )
            .with(c.Z.PROFILE_EFFECT, () =>
              (0, n.jsx)("div", {
                className: r
                  ? ea.bundlePfxPreviewContainer
                  : ea.pfxPreviewContainer,
                ref: a,
                children: (0, n.jsx)(N.Z, {
                  profileEffectId: t.id,
                  isHovering: o,
                  removeSetHeight: !0,
                }),
              }),
            )
            .otherwise(() => null);
        },
        eo = (e) => {
          let { product: t, user: i } = e,
            [r, a] = l.useState(0);
          l.useEffect(() => {
            let e = setInterval(() => {
              t.items.length > 0 && a((e) => (e + 1) % t.items.length);
            }, 5e3);
            return () => {
              clearInterval(e);
            };
          }, [t.skuId, t.items.length, i.id]);
          let s = t.items.length;
          return (0, n.jsx)("div", {
            className: ea.bundlePreviewContainer,
            children: (0, n.jsx)(m.Slides, {
              activeSlide: String(r),
              children: t.items.map((e, l) => {
                let r = String(l),
                  a = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
                  o = "(".concat(l + 1, "/").concat(s, ")");
                return (0, n.jsx)(
                  m.Slide,
                  {
                    id: r,
                    children: (0, n.jsxs)("div", {
                      className: ea.bundlePreviewSlide,
                      children: [
                        (0, n.jsx)(es, { item: e, user: i, isBundleItem: !0 }),
                        (0, n.jsxs)(m.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ea.bundleSlideTitle,
                          children: [null == a ? void 0 : a.name, " ", o],
                        }),
                      ],
                    }),
                  },
                  r,
                );
              }),
            }),
          });
        },
        ec = (e) => {
          let { product: t, user: i } = e;
          return (0, O.x6)(t)
            ? (0, n.jsx)(eo, { product: t, user: i })
            : t.items.length > 0
              ? (0, n.jsx)(es, { item: t.items[0], user: i })
              : null;
        },
        ed = (e) => {
          var t, i;
          let {
              product: r,
              user: s,
              category: C,
              onClose: h,
              returnRef: P,
            } = e,
            { analyticsLocations: I } = (0, p.ZP)(),
            _ = y.ZP.canUseCollectibles(s),
            { isPurchased: b, isPartiallyPurchased: E } = (0, H.L)(r),
            N = (0, d.e7)([R.Z], () => R.Z.isClaiming === r.skuId),
            A = (0, T.Z)({ analyticsLocations: I }),
            Z = (0, x.ZP)(),
            L = (0, u.wj)(Z),
            S = (0, O.G1)(r),
            z = (0, O.ql)(r, ei.tuJ.DEFAULT),
            W = (null == z ? void 0 : z.amount) === 0,
            { firstAvatarDecoration: K, firstProfileEffect: X } = (0, V.R)(r),
            $ = l.useMemo(() => (0, O.BH)(r, _), [r, _]),
            et = (0, D.m)("CollectiblesCollectedModal"),
            es = (0, O.x6)(r) || et,
            { handleUseNow: eo, isApplying: ed } = (0, F.W)({
              product: r,
              onSuccess: h,
            }),
            eu = l.useCallback(() => {
              if ((h(), (0, f.xf)(), A(), null != K)) {
                (0, g.ps)({
                  initialSelectedDecoration: K,
                  analyticsLocations: I,
                });
                return;
              }
              null != X &&
                (0, k.H)({
                  initialSelectedEffectId: X.id,
                  analyticsLocations: I,
                });
            }, [I, K, X, h, A]);
          l.useEffect(() => {
            if (null != K) return (0, v.cV)(K), () => (0, v.cV)(void 0);
          }, [K]);
          let em = (e) =>
              (0, n.jsx)(w.Z, {
                subscriptionTier: en.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: J.v,
                onSubscribeModalClose: () => {
                  (0, J.T)({
                    product: r,
                    category: C,
                    returnRef: P,
                    analyticsLocations: I,
                  });
                },
              }),
            { firstAvatarDecoration: ef, firstProfileEffect: ev } = (0, M.k)(r),
            eC =
              r.type === c.Z.BUNDLE
                ? er.intl.formatToPlainString(er.t["jM8/7+"], {
                    avatarDecorationName:
                      null !== (t = null == ef ? void 0 : ef.name) &&
                      void 0 !== t
                        ? t
                        : "",
                    profileEffectName:
                      null !== (i = null == ev ? void 0 : ev.name) &&
                      void 0 !== i
                        ? i
                        : "",
                  })
                : r.summary;
          return (0, n.jsxs)("div", {
            className: ea.collectibleInfoContainer,
            children: [
              (0, n.jsx)("div", {
                className: ea.titleContainer,
                children: (0, n.jsx)(G.Z, { category: C, display: "modal" }),
              }),
              (0, n.jsx)(ec, { product: r, user: s }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: ea.description,
                    children: [
                      (0, n.jsx)(q.Z, { product: r, isDarkText: !L }),
                      (0, n.jsx)(m.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ea.headingWithItemTypePill,
                        children: r.name,
                      }),
                      (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        children: eC,
                      }),
                      b || E
                        ? (0, n.jsx)(U.U, {
                            className: ea.priceTag,
                            isPartiallyPurchased: E,
                          })
                        : S
                          ? (0, n.jsx)(m.Text, {
                              variant: "text-md/semibold",
                              className: ea.priceTag,
                              children: er.intl.string(er.t.rt69oq),
                            })
                          : (0, n.jsx)(Y.Z, {
                              product: r,
                              discount: $,
                              isPremiumUser: _,
                              className: _ ? ea.priceTag : ea.priceTagContainer,
                              nitroUpsell: !_,
                            }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: ea.buttonsContainer,
                    children: (0, n.jsxs)("div", {
                      className: ea.primaryButtons,
                      children: [
                        !S || _ || W
                          ? b
                            ? (0, n.jsx)(m.Button, {
                                className: ea.button,
                                look: m.Button.Looks.FILLED,
                                onClick: es ? eo : eu,
                                submitting: ed,
                                children: er.intl.string(er.t.MAS7uL),
                              })
                            : E
                              ? null
                              : S
                                ? (0, n.jsx)(m.Button, {
                                    className: ea.button,
                                    look: m.Button.Looks.FILLED,
                                    submitting: N,
                                    submittingStartedLabel: er.intl.string(
                                      er.t["TYw+9v"],
                                    ),
                                    submittingFinishedLabel: er.intl.string(
                                      er.t.Pg1UPz,
                                    ),
                                    onClick: async () => {
                                      await (0, B.fK)(r.skuId),
                                        h(),
                                        (0, ee.Z)({
                                          product: r,
                                          analyticsLocations: I,
                                        });
                                    },
                                    children: er.intl.string(er.t.zp6caG),
                                  })
                                : (0, n.jsx)(m.Button, {
                                    className: ea.button,
                                    look: m.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, j.Z)({
                                        skuId: r.skuId,
                                        analyticsLocations: I,
                                        onClose: (e) =>
                                          e ? h() : (0, el.dG)(),
                                      }),
                                    children: (0, O.x6)(r)
                                      ? er.intl.string(er.t.V1AWw8)
                                      : r.type === c.Z.PROFILE_EFFECT
                                        ? er.intl.string(er.t.kAeDcH)
                                        : er.intl.string(er.t.AQ0Ven),
                                  })
                          : em(er.intl.string(er.t.sEAnVF)),
                        !S &&
                          !W &&
                          !o.tq &&
                          (0, n.jsx)(Q.Z, {
                            product: r,
                            onSuccess: h,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(m.Text, {
                    className: a()(ea.disclaimer, !L && ea.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: b
                      ? null
                      : S
                        ? er.intl.string(er.t.O2K0xM)
                        : (0, O.x6)(r)
                          ? er.intl.string(er.t.Ifvd7O)
                          : r.type === c.Z.PROFILE_EFFECT
                            ? er.intl.string(er.t.pxunjo)
                            : er.intl.string(er.t.IA8coq),
                  }),
                ],
              }),
            ],
          });
        },
        eu = (e) => {
          let { product: t, user: i } = e,
            l = y.ZP.canUsePremiumProfileCustomization(i),
            r = (0, d.cj)([Z.Z], () => Z.Z.getAllPending()),
            a = t.type === c.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: u } = (0, V.R)(t),
            m = null != u;
          return (0, n.jsxs)("div", {
            className:
              (null == s ? void 0 : s.type) === c.Z.AVATAR_DECORATION
                ? ea.previewsContainerInner
                : ea.profileEffectPreviewsContainerInner,
            children: [
              (0, n.jsx)(E.Z, {
                ...r,
                user: i,
                canUsePremiumCustomization: l,
                pendingAvatarDecoration: o,
                pendingProfileEffectId: null == u ? void 0 : u.id,
                disabledInputs: !0,
                hideMessageInput: !m,
                hideExampleButton: !0,
                hideCustomStatus: !0,
                hideBioSection: a,
              }),
              a && (0, n.jsx)(ef, { user: i }),
            ],
          });
        },
        em = (e) => {
          let { author: t } = e;
          return (0, P.e5)({
            ...(0, I.ZP)({
              author: t,
              channelId: "1337",
              content: er.intl.string(er.t.d5YwKy),
            }),
            state: ei.yb.SENT,
            id: "0",
          });
        },
        ef = (e) => {
          let { user: t } = e,
            i = em({ author: t });
          return (0, n.jsx)(m.FocusBlock, {
            children: (0, n.jsxs)(m.Card, {
              className: ea.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, n.jsx)(
                  b.Z,
                  {
                    className: ea.mockMessage,
                    author: (0, _.ZH)(i),
                    message: i,
                  },
                  i.id,
                ),
                (0, n.jsxs)("div", {
                  className: ea.mockInput,
                  children: [
                    (0, n.jsx)(m.CirclePlusIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ea.mockInputButton,
                    }),
                    (0, n.jsx)(m.ReactionIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ea.mockInputButton,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      t.default = (e) => {
        var t;
        let {
            transitionState: i,
            onClose: r,
            product: a,
            category: s,
            returnRef: o,
            analyticsSource: u,
            analyticsLocations: f,
          } = e,
          v = (0, d.e7)([L.default], () => L.default.getCurrentUser()),
          { analyticsLocations: C } = (0, p.ZP)([
            ...f,
            h.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
          ]);
        (0, W.u9)(a);
        let [x] = a.items;
        if (
          (l.useEffect(() => {
            null != v && (0, A.Z)(v.id, v.getAvatarURL(void 0, 80));
          }, [v]),
          l.useEffect(() => {
            let e =
              (null == x ? void 0 : x.type) === c.Z.AVATAR_DECORATION
                ? "avatar decoration"
                : "profile effect";
            S.default.track(ei.rMx.OPEN_MODAL, {
              type: ei.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: u,
              location_stack: C,
              sku_id: a.skuId,
              product_type: e,
            }),
              a.items.map(B.oK);
          }, [u, C, a.skuId, a.items, null == x ? void 0 : x.type]),
          null == v)
        )
          return null;
        let g = (0, et.ZS)(s.skuId);
        return (0, n.jsx)(p.Gt, {
          value: C,
          children: (0, n.jsx)(m.ModalRoot, {
            hideShadow: !0,
            className: ea.modalRoot,
            returnRef: o,
            transitionState: i,
            size: m.ModalSize.DYNAMIC,
            children: (0, n.jsxs)(m.ModalContent, {
              className: ea.modalContent,
              children: [
                (0, n.jsx)(ed, {
                  user: v,
                  product: a,
                  category: s,
                  onClose: r,
                }),
                (0, n.jsxs)("div", {
                  className:
                    a.type === c.Z.AVATAR_DECORATION
                      ? ea.collectiblePreviewsContainerWithChat
                      : ea.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, n.jsx)(z.Z, {
                      asset:
                        null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                      size: (0, X.ML)(540),
                      className: ea.categoryBanner,
                      categoryBannerOverride: g,
                    }),
                    (0, n.jsx)(eu, { user: v, product: a }),
                    (0, n.jsxs)("div", {
                      className: ea.profilePreviewHeader,
                      children: [
                        (0, n.jsx)("div", {
                          className: ea.titleImageContainer,
                          children: (0, n.jsx)("img", {
                            className: ea.titleImage,
                            style: null == g ? void 0 : g.pdpLogoStyle,
                            src: (0, O.uV)(s.logo, { size: K.n }),
                            alt: s.name,
                          }),
                        }),
                        (0, n.jsx)(m.ModalCloseButton, {
                          onClick: r,
                          className: ea.modalCloseButton,
                          withCircleBackground: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    374503: function (e, t, i) {
      e.exports = {
        container: "container_e3e57a",
        darkText: "darkText_e3e57a",
        lightText: "lightText_e3e57a",
      };
    },
    359407: function (e, t, i) {
      e.exports = {
        modalRoot: "modalRoot_c5828f",
        modalContent: "modalContent_c5828f",
        profilePreviewHeader: "profilePreviewHeader_c5828f",
        modalCloseButton: "modalCloseButton_c5828f",
        collectibleInfoContainer: "collectibleInfoContainer_c5828f",
        previewsContainerInner: "previewsContainerInner_c5828f",
        profileEffectPreviewsContainerInner:
          "profileEffectPreviewsContainerInner_c5828f previewsContainerInner_c5828f",
        categoryBanner: "categoryBanner_c5828f",
        collectiblePreviewsContainerNoChat:
          "collectiblePreviewsContainerNoChat_c5828f collectiblePreviewsContainer_c5828f",
        collectiblePreviewsContainerWithChat:
          "collectiblePreviewsContainerWithChat_c5828f collectiblePreviewsContainer_c5828f",
        avatarPreviewContainer: "avatarPreviewContainer_c5828f",
        pfxPreviewContainer: "pfxPreviewContainer_c5828f",
        bundlePreviewContainer: "bundlePreviewContainer_c5828f",
        bundlePreviewSlide: "bundlePreviewSlide_c5828f",
        bundleAvatarPreviewContainer: "bundleAvatarPreviewContainer_c5828f",
        bundlePfxPreviewContainer: "bundlePfxPreviewContainer_c5828f",
        bundleSlideTitle: "bundleSlideTitle_c5828f",
        chatPreview: "chatPreview_c5828f",
        mockMessage: "mockMessage_c5828f",
        mockInput: "mockInput_c5828f",
        mockInputButton: "mockInputButton_c5828f",
        titleContainer: "titleContainer_c5828f",
        titleImageContainer: "titleImageContainer_c5828f",
        titleImage: "titleImage_c5828f",
        description: "description_c5828f",
        button: "button_c5828f",
        disclaimer: "disclaimer_c5828f",
        disclaimerLight: "disclaimerLight_c5828f",
        priceTag: "priceTag_c5828f",
        priceTagContainer: "priceTagContainer_c5828f",
        headingWithItemTypePill: "headingWithItemTypePill_c5828f",
        buttonsContainer: "buttonsContainer_c5828f",
        primaryButtons: "primaryButtons_c5828f",
      };
    },
  },
]);
//# sourceMappingURL=c299fce499fa224c6fe5.js.map
