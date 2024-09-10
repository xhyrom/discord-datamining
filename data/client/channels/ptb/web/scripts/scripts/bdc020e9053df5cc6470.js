"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2026"],
  {
    188584: function (e, t, i) {
      i.d(t, {
        k: function () {
          return l;
        },
      });
      var n = i(470079),
        s = i(328456);
      let l = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: i } =
          n.useMemo(() => {
            var t;
            return new s.b(
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
      var n = i(735250);
      i(470079);
      var s = i(120356),
        l = i.n(s),
        a = i(278074),
        r = i(979554),
        o = i(481060),
        c = i(689938),
        d = i(435216);
      function u(e) {
        var t;
        let { product: i, isDarkText: s = !1 } = e;
        let u =
          ((t = i.type),
          (0, a.EQ)(t)
            .with(
              r.Z.AVATAR_DECORATION,
              () => c.Z.Messages.USER_SETTINGS_AVATAR_DECORATION,
            )
            .with(
              r.Z.PROFILE_EFFECT,
              () => c.Z.Messages.USER_SETTINGS_PROFILE_EFFECT,
            )
            .otherwise(() => null));
        return null === u
          ? null
          : (0, n.jsx)(o.Text, {
              variant: "text-xxs/normal",
              className: l()([d.container, s ? d.darkText : d.lightText]),
              children: u,
            });
      }
    },
    702370: function (e, t, i) {
      i.r(t), i(47120), i(627341);
      var n = i(735250),
        s = i(470079),
        l = i(120356),
        a = i.n(l),
        r = i(278074),
        o = i(873546),
        c = i(979554),
        d = i(399606),
        u = i(780384),
        C = i(481060),
        m = i(37234),
        E = i(809206),
        _ = i(727637),
        I = i(410030),
        f = i(100527),
        L = i(906732),
        v = i(1585),
        x = i(786761),
        T = i(3148),
        h = i(739566),
        p = i(753206),
        P = i(333867),
        g = i(197115),
        S = i(300284),
        N = i(921813),
        A = i(876917),
        O = i(642619),
        b = i(484459),
        j = i(25990),
        Z = i(594174),
        w = i(626135),
        B = i(74538),
        M = i(335131),
        R = i(1870),
        D = i(884697),
        k = i(890249),
        y = i(188584),
        U = i(635552),
        F = i(724994),
        H = i(328456),
        W = i(390698),
        V = i(141011),
        z = i(426171),
        G = i(224068),
        Y = i(813083),
        K = i(823941),
        q = i(680942),
        Q = i(558060),
        X = i(237031),
        J = i(372654),
        $ = i(616066),
        ee = i(832149),
        et = i(215023),
        ei = i(981631),
        en = i(474936),
        es = i(231338),
        el = i(689938),
        ea = i(547804);
      let er = (e) => {
          let { item: t, user: i, isBundleItem: l = !1 } = e,
            a = s.useRef(null),
            o = (0, _.Z)(a);
          return (0, r.EQ)(t.type)
            .with(c.Z.AVATAR_DECORATION, () =>
              (0, n.jsx)("div", {
                className: l
                  ? ea.bundleAvatarPreviewContainer
                  : ea.avatarPreviewContainer,
                children: (0, n.jsx)($.R, { user: i, item: t }),
              }),
            )
            .with(c.Z.PROFILE_EFFECT, () =>
              (0, n.jsx)("div", {
                className: l
                  ? ea.bundlePfxPreviewContainer
                  : ea.pfxPreviewContainer,
                ref: a,
                children: (0, n.jsx)(A.Z, {
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
            [l, a] = s.useState(0);
          s.useEffect(() => {
            let e = setInterval(() => {
              t.items.length > 0 && a((e) => (e + 1) % t.items.length);
            }, 5e3);
            return () => {
              clearInterval(e);
            };
          }, [t.skuId, t.items.length, i.id]);
          let r = t.items.length;
          return (0, n.jsx)("div", {
            className: ea.bundlePreviewContainer,
            children: (0, n.jsx)(C.Slides, {
              activeSlide: String(l),
              children: t.items.map((e, s) => {
                let l = String(s),
                  a = null != t.bundledProducts ? t.bundledProducts[s] : void 0,
                  o = "(".concat(s + 1, "/").concat(r, ")");
                return (0, n.jsx)(
                  C.Slide,
                  {
                    id: l,
                    children: (0, n.jsxs)("div", {
                      className: ea.bundlePreviewSlide,
                      children: [
                        (0, n.jsx)(er, { item: e, user: i, isBundleItem: !0 }),
                        (0, n.jsxs)(C.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ea.bundleSlideTitle,
                          children: [null == a ? void 0 : a.name, " ", o],
                        }),
                      ],
                    }),
                  },
                  l,
                );
              }),
            }),
          });
        },
        ec = (e) => {
          let { product: t, user: i } = e;
          return (0, D.x6)(t)
            ? (0, n.jsx)(eo, { product: t, user: i })
            : t.items.length > 0
              ? (0, n.jsx)(er, { item: t.items[0], user: i })
              : null;
        },
        ed = (e) => {
          var t, i;
          let {
              product: l,
              user: r,
              category: _,
              onClose: f,
              returnRef: x,
            } = e,
            { analyticsLocations: T } = (0, L.ZP)(),
            h = B.ZP.canUseCollectibles(r),
            { isPurchased: p, isPartiallyPurchased: N } = (0, F.L)(l),
            A = (0, d.e7)([R.Z], () => R.Z.isClaiming === l.skuId),
            b = (0, S.Z)({ analyticsLocations: T }),
            j = (0, I.ZP)(),
            Z = (0, u.wj)(j),
            w = (0, D.G1)(l),
            V = (0, D.ql)(l, ei.tuJ.DEFAULT),
            z = (null == V ? void 0 : V.amount) === 0,
            { firstAvatarDecoration: K, firstProfileEffect: J } = (0, H.R)(l),
            $ = s.useMemo(() => (0, D.BH)(l, h), [l, h]),
            et = (0, k.m)("CollectiblesCollectedModal"),
            er = (0, D.x6)(l) || et,
            { handleUseNow: eo, isApplying: ed } = (0, U.W)({
              product: l,
              onSuccess: f,
            }),
            eu = s.useCallback(() => {
              if ((f(), (0, m.xf)(), b(), null != K)) {
                (0, v.ps)({
                  initialSelectedDecoration: K,
                  analyticsLocations: T,
                });
                return;
              }
              null != J &&
                (0, O.H)({
                  initialSelectedEffectId: J.id,
                  analyticsLocations: T,
                });
            }, [T, K, J, f, b]);
          s.useEffect(() => {
            if (null != K) return (0, E.cV)(K), () => (0, E.cV)(void 0);
          }, [K]);
          let eC = (e) =>
              (0, n.jsx)(g.Z, {
                subscriptionTier: en.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: X.v,
                onSubscribeModalClose: () => {
                  (0, X.T)({
                    product: l,
                    category: _,
                    returnRef: x,
                    analyticsLocations: T,
                  });
                },
              }),
            { firstAvatarDecoration: em, firstProfileEffect: eE } = (0, y.k)(l),
            e_ =
              l.type === c.Z.BUNDLE
                ? el.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
                    avatarDecorationName:
                      null !== (t = null == em ? void 0 : em.name) &&
                      void 0 !== t
                        ? t
                        : "",
                    profileEffectName:
                      null !== (i = null == eE ? void 0 : eE.name) &&
                      void 0 !== i
                        ? i
                        : "",
                  })
                : l.summary;
          return (0, n.jsxs)("div", {
            className: ea.collectibleInfoContainer,
            children: [
              (0, n.jsx)("div", {
                className: ea.titleContainer,
                children: (0, n.jsx)(Y.Z, { category: _, display: "modal" }),
              }),
              (0, n.jsx)(ec, { product: l, user: r }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: ea.description,
                    children: [
                      (0, n.jsx)(G.Z, { product: l, isDarkText: !Z }),
                      (0, n.jsx)(C.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ea.headingWithItemTypePill,
                        children: l.name,
                      }),
                      (0, n.jsx)(C.Text, {
                        variant: "text-sm/normal",
                        children: e_,
                      }),
                      p || N
                        ? (0, n.jsx)(W.U, {
                            className: ea.priceTag,
                            isPartiallyPurchased: N,
                          })
                        : w
                          ? (0, n.jsx)(C.Text, {
                              variant: "text-md/semibold",
                              className: ea.priceTag,
                              children:
                                el.Z.Messages
                                  .COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                            })
                          : (0, n.jsx)(Q.Z, {
                              product: l,
                              discount: $,
                              isPremiumUser: h,
                              className: h ? ea.priceTag : ea.priceTagContainer,
                              nitroUpsell: !h,
                            }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: ea.buttonsContainer,
                    children: (0, n.jsxs)("div", {
                      className: ea.primaryButtons,
                      children: [
                        !w || h || z
                          ? p
                            ? (0, n.jsx)(C.Button, {
                                className: ea.button,
                                look: C.Button.Looks.FILLED,
                                onClick: er ? eo : eu,
                                submitting: ed,
                                children: el.Z.Messages.COLLECTIBLES_USE_NOW,
                              })
                            : N
                              ? null
                              : w
                                ? (0, n.jsx)(C.Button, {
                                    className: ea.button,
                                    look: C.Button.Looks.FILLED,
                                    submitting: A,
                                    submittingStartedLabel:
                                      el.Z.Messages.COLLECTIBLES_COLLECTING,
                                    submittingFinishedLabel:
                                      el.Z.Messages
                                        .COLLECTIBLES_COLLECTING_FINISHED,
                                    onClick: async () => {
                                      await (0, M.fK)(l.skuId),
                                        f(),
                                        (0, ee.Z)({
                                          product: l,
                                          analyticsLocations: T,
                                        });
                                    },
                                    children:
                                      el.Z.Messages
                                        .COLLECTIBLES_ADD_TO_YOUR_COLLECTION,
                                  })
                                : (0, n.jsx)(C.Button, {
                                    className: ea.button,
                                    look: C.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, P.Z)({
                                        skuId: l.skuId,
                                        analyticsLocations: T,
                                        onClose: (e) =>
                                          e ? f() : (0, es.dG)(),
                                      }),
                                    children: (0, D.x6)(l)
                                      ? el.Z.Messages
                                          .COLLECTIBLES_BUNDLE_BUY_BUNDLE
                                      : l.type === c.Z.PROFILE_EFFECT
                                        ? el.Z.Messages
                                            .COLLECTIBLES_BUY_PROFILE_EFFECT
                                        : el.Z.Messages
                                            .COLLECTIBLES_BUY_DECORATION,
                                  })
                          : eC(el.Z.Messages.UNLOCK_WITH_NITRO),
                        !w &&
                          !z &&
                          !o.tq &&
                          (0, n.jsx)(q.Z, {
                            product: l,
                            onSuccess: f,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(C.Text, {
                    className: a()(ea.disclaimer, !Z && ea.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: p
                      ? null
                      : w
                        ? el.Z.Messages
                            .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER
                        : (0, D.x6)(l)
                          ? el.Z.Messages
                              .COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER
                          : l.type === c.Z.PROFILE_EFFECT
                            ? el.Z.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER
                            : el.Z.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER,
                  }),
                ],
              }),
            ],
          });
        },
        eu = (e) => {
          let { product: t, user: i } = e,
            s = B.ZP.canUsePremiumProfileCustomization(i),
            l = (0, d.cj)([j.Z], () => j.Z.getAllPending()),
            a = t.type === c.Z.AVATAR_DECORATION,
            [r] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: u } = (0, H.R)(t),
            C = null != u;
          return (0, n.jsxs)("div", {
            className:
              (null == r ? void 0 : r.type) === c.Z.AVATAR_DECORATION
                ? ea.previewsContainerInner
                : ea.profileEffectPreviewsContainerInner,
            children: [
              (0, n.jsx)(N.Z, {
                ...l,
                user: i,
                canUsePremiumCustomization: s,
                pendingAvatarDecoration: o,
                pendingProfileEffectId: null == u ? void 0 : u.id,
                disabledInputs: !0,
                hideMessageInput: !C,
                hideExampleButton: !0,
                hideCustomStatus: !0,
                hideBioSection: a,
              }),
              a && (0, n.jsx)(em, { user: i }),
            ],
          });
        },
        eC = (e) => {
          let { author: t } = e;
          return (0, x.e5)({
            ...(0, T.ZP)({
              author: t,
              channelId: "1337",
              content: el.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT,
            }),
            state: ei.yb.SENT,
            id: "0",
          });
        },
        em = (e) => {
          let { user: t } = e,
            i = eC({ author: t });
          return (0, n.jsx)(C.FocusBlock, {
            children: (0, n.jsxs)(C.Card, {
              className: ea.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, n.jsx)(
                  p.Z,
                  {
                    className: ea.mockMessage,
                    author: (0, h.ZH)(i),
                    message: i,
                  },
                  i.id,
                ),
                (0, n.jsxs)("div", {
                  className: ea.mockInput,
                  children: [
                    (0, n.jsx)(C.CirclePlusIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ea.mockInputButton,
                    }),
                    (0, n.jsx)(C.ReactionIcon, {
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
            onClose: l,
            product: a,
            category: r,
            returnRef: o,
            analyticsSource: u,
            analyticsLocations: m,
          } = e,
          E = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
          { analyticsLocations: _ } = (0, L.ZP)([
            ...m,
            f.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
          ]);
        (0, z.u9)(a);
        let [I] = a.items;
        if (
          (s.useEffect(() => {
            null != E && (0, b.Z)(E.id, E.getAvatarURL(void 0, 80));
          }, [E]),
          s.useEffect(() => {
            let e =
              (null == I ? void 0 : I.type) === c.Z.AVATAR_DECORATION
                ? "avatar decoration"
                : "profile effect";
            w.default.track(ei.rMx.OPEN_MODAL, {
              type: ei.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: u,
              location_stack: _,
              sku_id: a.skuId,
              product_type: e,
            }),
              a.items.map(M.oK);
          }, [u, _, a.skuId, a.items, null == I ? void 0 : I.type]),
          null == E)
        )
          return null;
        let v = (0, et.ZS)(r.skuId);
        return (0, n.jsx)(L.Gt, {
          value: _,
          children: (0, n.jsx)(C.ModalRoot, {
            hideShadow: !0,
            className: ea.modalRoot,
            returnRef: o,
            transitionState: i,
            size: C.ModalSize.DYNAMIC,
            children: (0, n.jsxs)(C.ModalContent, {
              className: ea.modalContent,
              children: [
                (0, n.jsx)(ed, {
                  user: E,
                  product: a,
                  category: r,
                  onClose: l,
                }),
                (0, n.jsxs)("div", {
                  className:
                    a.type === c.Z.AVATAR_DECORATION
                      ? ea.collectiblePreviewsContainerWithChat
                      : ea.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, n.jsx)(V.Z, {
                      asset:
                        null !== (t = r.pdpBg) && void 0 !== t ? t : a.banner,
                      size: (0, J.ML)(540),
                      className: ea.categoryBanner,
                      categoryBannerOverride: v,
                    }),
                    (0, n.jsx)(eu, { user: E, product: a }),
                    (0, n.jsxs)("div", {
                      className: ea.profilePreviewHeader,
                      children: [
                        (0, n.jsx)("div", {
                          className: ea.titleImageContainer,
                          children: (0, n.jsx)("img", {
                            className: ea.titleImage,
                            style: null == v ? void 0 : v.pdpLogoStyle,
                            src: (0, D.uV)(r.logo, { size: K.n }),
                            alt: r.name,
                          }),
                        }),
                        (0, n.jsx)(C.ModalCloseButton, {
                          onClick: l,
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
    435216: function (e, t, i) {
      e.exports = {
        container: "container_e3e57a",
        darkText: "darkText_e3e57a",
        lightText: "lightText_e3e57a",
      };
    },
    547804: function (e, t, i) {
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
//# sourceMappingURL=bdc020e9053df5cc6470.js.map
