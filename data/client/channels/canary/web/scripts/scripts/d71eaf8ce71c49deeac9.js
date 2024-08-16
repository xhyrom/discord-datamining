"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2026"],
  {
    188584: function (e, t, i) {
      i.d(t, {
        k: function () {
          return a;
        },
      });
      var n = i(470079),
        s = i(328456);
      let a = (e) => {
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
        a = i.n(s),
        l = i(278074),
        r = i(979554),
        o = i(481060),
        c = i(689938),
        d = i(847485);
      function u(e) {
        var t;
        let { product: i, isDarkText: s = !1 } = e;
        let u =
          ((t = i.type),
          (0, l.EQ)(t)
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
              className: a()([d.container, s ? d.darkText : d.lightText]),
              children: u,
            });
      }
    },
    702370: function (e, t, i) {
      i.r(t), i(47120), i(627341);
      var n = i(735250),
        s = i(470079),
        a = i(120356),
        l = i.n(a),
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
        O = i(876917),
        b = i(642619),
        A = i(25990),
        j = i(594174),
        Z = i(626135),
        w = i(74538),
        B = i(335131),
        M = i(1870),
        R = i(884697),
        D = i(890249),
        k = i(188584),
        y = i(635552),
        U = i(724994),
        F = i(328456),
        H = i(390698),
        W = i(141011),
        V = i(426171),
        z = i(224068),
        G = i(813083),
        Y = i(823941),
        K = i(680942),
        q = i(558060),
        Q = i(237031),
        X = i(372654),
        J = i(616066),
        $ = i(832149),
        ee = i(215023),
        et = i(981631),
        ei = i(474936),
        en = i(231338),
        es = i(689938),
        ea = i(941075);
      let el = (e) => {
          let { item: t, user: i, isBundleItem: a = !1 } = e,
            l = s.useRef(null),
            o = (0, _.Z)(l);
          return (0, r.EQ)(t.type)
            .with(c.Z.AVATAR_DECORATION, () =>
              (0, n.jsx)("div", {
                className: a
                  ? ea.bundleAvatarPreviewContainer
                  : ea.avatarPreviewContainer,
                children: (0, n.jsx)(J.R, { user: i, item: t }),
              }),
            )
            .with(c.Z.PROFILE_EFFECT, () =>
              (0, n.jsx)("div", {
                className: a
                  ? ea.bundlePfxPreviewContainer
                  : ea.pfxPreviewContainer,
                ref: l,
                children: (0, n.jsx)(O.Z, {
                  profileEffectId: t.id,
                  isHovering: o,
                  removeSetHeight: !0,
                }),
              }),
            )
            .otherwise(() => null);
        },
        er = (e) => {
          let { product: t, user: i } = e,
            [a, l] = s.useState(0);
          s.useEffect(() => {
            let e = setInterval(() => {
              t.items.length > 0 && l((e) => (e + 1) % t.items.length);
            }, 5e3);
            return () => {
              clearInterval(e);
            };
          }, [t.skuId, t.items.length, i.id]);
          let r = t.items.length;
          return (0, n.jsx)("div", {
            className: ea.bundlePreviewContainer,
            children: (0, n.jsx)(C.Slides, {
              activeSlide: String(a),
              children: t.items.map((e, s) => {
                let a = String(s),
                  l = null != t.bundledProducts ? t.bundledProducts[s] : void 0,
                  o = "(".concat(s + 1, "/").concat(r, ")");
                return (0, n.jsx)(
                  C.Slide,
                  {
                    id: a,
                    children: (0, n.jsxs)("div", {
                      className: ea.bundlePreviewSlide,
                      children: [
                        (0, n.jsx)(el, { item: e, user: i, isBundleItem: !0 }),
                        (0, n.jsxs)(C.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ea.bundleSlideTitle,
                          children: [null == l ? void 0 : l.name, " ", o],
                        }),
                      ],
                    }),
                  },
                  a,
                );
              }),
            }),
          });
        },
        eo = (e) => {
          let { product: t, user: i } = e;
          return (0, R.x6)(t)
            ? (0, n.jsx)(er, { product: t, user: i })
            : t.items.length > 0
              ? (0, n.jsx)(el, { item: t.items[0], user: i })
              : null;
        },
        ec = (e) => {
          var t, i;
          let {
              product: a,
              user: r,
              category: _,
              onClose: f,
              returnRef: x,
            } = e,
            { analyticsLocations: T } = (0, L.ZP)(),
            h = w.ZP.canUseCollectibles(r),
            { isPurchased: p, isPartiallyPurchased: N } = (0, U.L)(a),
            O = (0, d.e7)([M.Z], () => M.Z.isClaiming === a.skuId),
            A = (0, S.Z)({ analyticsLocations: T }),
            j = (0, I.ZP)(),
            Z = (0, u.wj)(j),
            W = (0, R.G1)(a),
            V = (0, R.ql)(a, et.tuJ.DEFAULT),
            Y = (null == V ? void 0 : V.amount) === 0,
            { firstAvatarDecoration: X, firstProfileEffect: J } = (0, F.R)(a),
            ee = s.useMemo(() => (0, R.BH)(a, h), [a, h]),
            el = (0, D.m)("CollectiblesCollectedModal"),
            er = (0, R.x6)(a) || el,
            { handleUseNow: ec, isApplying: ed } = (0, y.W)({
              product: a,
              onSuccess: f,
            }),
            eu = s.useCallback(() => {
              if ((f(), (0, m.xf)(), A(), null != X)) {
                (0, v.ps)({
                  initialSelectedDecoration: X,
                  analyticsLocations: T,
                });
                return;
              }
              null != J &&
                (0, b.H)({
                  initialSelectedEffectId: J.id,
                  analyticsLocations: T,
                });
            }, [T, X, J, f, A]);
          s.useEffect(() => {
            if (null != X) return (0, E.cV)(X), () => (0, E.cV)(void 0);
          }, [X]);
          let eC = (e) =>
              (0, n.jsx)(g.Z, {
                subscriptionTier: ei.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: Q.v,
                onSubscribeModalClose: () => {
                  (0, Q.T)({
                    product: a,
                    category: _,
                    returnRef: x,
                    analyticsLocations: T,
                  });
                },
              }),
            { firstAvatarDecoration: em, firstProfileEffect: eE } = (0, k.k)(a),
            e_ =
              a.type === c.Z.BUNDLE
                ? es.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
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
                : a.summary;
          return (0, n.jsxs)("div", {
            className: ea.collectibleInfoContainer,
            children: [
              (0, n.jsx)("div", {
                className: ea.titleContainer,
                children: (0, n.jsx)(G.Z, { category: _, display: "modal" }),
              }),
              (0, n.jsx)(eo, { product: a, user: r }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: ea.description,
                    children: [
                      (0, n.jsx)(z.Z, { product: a, isDarkText: !Z }),
                      (0, n.jsx)(C.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ea.headingWithItemTypePill,
                        children: a.name,
                      }),
                      (0, n.jsx)(C.Text, {
                        variant: "text-sm/normal",
                        children: e_,
                      }),
                      p || N
                        ? (0, n.jsx)(H.U, {
                            className: ea.priceTag,
                            isPartiallyPurchased: N,
                          })
                        : W
                          ? (0, n.jsx)(C.Text, {
                              variant: "text-md/semibold",
                              className: ea.priceTag,
                              children:
                                es.Z.Messages
                                  .COLLECTIBLES_INCLUDED_WITH_PREMIUM,
                            })
                          : (0, n.jsx)(q.Z, {
                              product: a,
                              discount: ee,
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
                        !W || h || Y
                          ? p
                            ? (0, n.jsx)(C.Button, {
                                className: ea.button,
                                look: C.Button.Looks.FILLED,
                                onClick: er ? ec : eu,
                                submitting: ed,
                                children: es.Z.Messages.COLLECTIBLES_USE_NOW,
                              })
                            : N
                              ? null
                              : W
                                ? (0, n.jsx)(C.Button, {
                                    className: ea.button,
                                    look: C.Button.Looks.FILLED,
                                    submitting: O,
                                    submittingStartedLabel:
                                      es.Z.Messages.COLLECTIBLES_COLLECTING,
                                    submittingFinishedLabel:
                                      es.Z.Messages
                                        .COLLECTIBLES_COLLECTING_FINISHED,
                                    onClick: async () => {
                                      await (0, B.fK)(a.skuId),
                                        f(),
                                        (0, $.Z)({
                                          product: a,
                                          analyticsLocations: T,
                                        });
                                    },
                                    children:
                                      es.Z.Messages
                                        .COLLECTIBLES_ADD_TO_YOUR_COLLECTION,
                                  })
                                : (0, n.jsx)(C.Button, {
                                    className: ea.button,
                                    look: C.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, P.Z)({
                                        skuId: a.skuId,
                                        analyticsLocations: T,
                                        onClose: (e) =>
                                          e ? f() : (0, en.dG)(),
                                      }),
                                    children: (0, R.x6)(a)
                                      ? es.Z.Messages
                                          .COLLECTIBLES_BUNDLE_BUY_BUNDLE
                                      : a.type === c.Z.PROFILE_EFFECT
                                        ? es.Z.Messages
                                            .COLLECTIBLES_BUY_PROFILE_EFFECT
                                        : es.Z.Messages
                                            .COLLECTIBLES_BUY_DECORATION,
                                  })
                          : eC(es.Z.Messages.UNLOCK_WITH_NITRO),
                        !W &&
                          !Y &&
                          !o.tq &&
                          (0, n.jsx)(K.Z, {
                            product: a,
                            onSuccess: f,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(C.Text, {
                    className: l()(ea.disclaimer, !Z && ea.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: p
                      ? null
                      : W
                        ? es.Z.Messages
                            .COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER
                        : (0, R.x6)(a)
                          ? es.Z.Messages
                              .COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER
                          : a.type === c.Z.PROFILE_EFFECT
                            ? es.Z.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER
                            : es.Z.Messages
                                .COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER,
                  }),
                ],
              }),
            ],
          });
        },
        ed = (e) => {
          let { product: t, user: i } = e,
            s = w.ZP.canUsePremiumProfileCustomization(i),
            a = (0, d.cj)([A.Z], () => A.Z.getAllPending()),
            l = t.type === c.Z.AVATAR_DECORATION,
            [r] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: u } = (0, F.R)(t),
            C = null != u;
          return (0, n.jsxs)("div", {
            className:
              (null == r ? void 0 : r.type) === c.Z.AVATAR_DECORATION
                ? ea.previewsContainerInner
                : ea.profileEffectPreviewsContainerInner,
            children: [
              (0, n.jsx)(N.Z, {
                ...a,
                user: i,
                canUsePremiumCustomization: s,
                pendingAvatarDecoration: o,
                pendingProfileEffectId: null == u ? void 0 : u.id,
                disabledInputs: !0,
                hideMessageInput: !C,
                hideExampleButton: !0,
                hideCustomStatus: !0,
                hideBioSection: l,
              }),
              l && (0, n.jsx)(eC, { user: i }),
            ],
          });
        },
        eu = (e) => {
          let { author: t } = e;
          return (0, x.e5)({
            ...(0, T.ZP)({
              author: t,
              channelId: "1337",
              content: es.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT,
            }),
            state: et.yb.SENT,
            id: "0",
          });
        },
        eC = (e) => {
          let { user: t } = e,
            i = eu({ author: t });
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
            onClose: a,
            product: l,
            category: r,
            returnRef: o,
            analyticsSource: u,
            analyticsLocations: m,
          } = e,
          E = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
          { analyticsLocations: _ } = (0, L.ZP)([
            ...m,
            f.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
          ]);
        (0, V.u9)(l);
        let [I] = l.items;
        if (
          (s.useEffect(() => {
            let e =
              (null == I ? void 0 : I.type) === c.Z.AVATAR_DECORATION
                ? "avatar decoration"
                : "profile effect";
            Z.default.track(et.rMx.OPEN_MODAL, {
              type: et.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: u,
              location_stack: _,
              sku_id: l.skuId,
              product_type: e,
            }),
              l.items.map(B.oK);
          }, [u, _, l.skuId, l.items, null == I ? void 0 : I.type]),
          null == E)
        )
          return null;
        let v = (0, ee.ZS)(r.skuId);
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
                (0, n.jsx)(ec, {
                  user: E,
                  product: l,
                  category: r,
                  onClose: a,
                }),
                (0, n.jsxs)("div", {
                  className:
                    l.type === c.Z.AVATAR_DECORATION
                      ? ea.collectiblePreviewsContainerWithChat
                      : ea.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, n.jsx)(W.Z, {
                      asset:
                        null !== (t = r.pdpBg) && void 0 !== t ? t : l.banner,
                      size: (0, X.ML)(540),
                      className: ea.categoryBanner,
                      categoryBannerOverride: v,
                    }),
                    (0, n.jsx)(ed, { user: E, product: l }),
                    (0, n.jsxs)("div", {
                      className: ea.profilePreviewHeader,
                      children: [
                        (0, n.jsx)("div", {
                          className: ea.titleImageContainer,
                          children: (0, n.jsx)("img", {
                            className: ea.titleImage,
                            style: v.pdpLogoStyle,
                            src: (0, R.uV)(r.logo, { size: Y.n }),
                            alt: r.name,
                          }),
                        }),
                        (0, n.jsx)(C.ModalCloseButton, {
                          onClick: a,
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
    847485: function (e, t, i) {
      e.exports = {
        container: "container_e3e57a",
        darkText: "darkText_e3e57a",
        lightText: "lightText_e3e57a",
      };
    },
    941075: function (e, t, i) {
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
//# sourceMappingURL=d71eaf8ce71c49deeac9.js.map
