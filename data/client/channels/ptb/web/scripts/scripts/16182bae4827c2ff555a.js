"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2026"],
  {
    188584: function (e, t, n) {
      n.d(t, {
        k: function () {
          return r;
        },
      });
      var i = n(192379),
        l = n(328456);
      let r = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: n } =
          i.useMemo(() => {
            var t;
            return new l.b(
              null !== (t = e.bundledProducts) && void 0 !== t ? t : [],
            );
          }, [e]);
        return { firstProfileEffect: t, firstAvatarDecoration: n };
      };
    },
    224068: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(627341);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(278074),
        s = n(979554),
        o = n(481060),
        c = n(388032),
        d = n(253344);
      function u(e) {
        var t;
        let { product: n, isDarkText: l = !1 } = e;
        let u =
          ((t = n.type),
          (0, a.EQ)(t)
            .with(s.Z.AVATAR_DECORATION, () => c.intl.string(c.t["7v0T9P"]))
            .with(s.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOj))
            .otherwise(() => null));
        return null === u
          ? null
          : (0, i.jsx)(o.Text, {
              variant: "text-xxs/normal",
              className: r()([d.container, l ? d.darkText : d.lightText]),
              children: u,
            });
      }
    },
    702370: function (e, t, n) {
      n.r(t), n(47120), n(627341);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(512722),
        o = n.n(s),
        c = n(278074),
        d = n(873546),
        u = n(979554),
        m = n(399606),
        v = n(780384),
        f = n(481060),
        p = n(37234),
        C = n(809206),
        x = n(727637),
        h = n(410030),
        g = n(100527),
        P = n(906732),
        I = n(1585),
        w = n(786761),
        _ = n(3148),
        b = n(739566),
        j = n(753206),
        T = n(333867),
        N = n(197115),
        E = n(300284),
        k = n(921813),
        A = n(876917),
        Z = n(642619),
        S = n(484459),
        L = n(25990),
        y = n(594174),
        B = n(626135),
        R = n(74538),
        O = n(335131),
        D = n(1870),
        M = n(429368),
        F = n(884697),
        V = n(890249),
        H = n(228624),
        U = n(188584),
        W = n(635552),
        z = n(905357),
        G = n(724994),
        q = n(328456),
        K = n(390698),
        Q = n(141011),
        Y = n(426171),
        J = n(224068),
        X = n(813083),
        $ = n(823941),
        ee = n(680942),
        et = n(558060),
        en = n(237031),
        ei = n(372654),
        el = n(453713),
        er = n(616066),
        ea = n(332246),
        es = n(58201),
        eo = n(361110),
        ec = n(832149),
        ed = n(215023),
        eu = n(981631),
        em = n(474936),
        ev = n(231338),
        ef = n(388032),
        ep = n(147334);
      let eC = (e) => {
          let { item: t, user: n, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            s = (0, x.Z)(a);
          return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
              (0, i.jsx)("div", {
                className: r
                  ? ep.bundleAvatarPreviewContainer
                  : ep.avatarPreviewContainer,
                children: (0, i.jsx)(er.R, { user: n, item: t }),
              }),
            )
            .with(u.Z.PROFILE_EFFECT, () =>
              (0, i.jsx)("div", {
                className: r
                  ? ep.bundlePfxPreviewContainer
                  : ep.pfxPreviewContainer,
                ref: a,
                children: (0, i.jsx)(A.Z, {
                  profileEffectId: t.id,
                  isHovering: s,
                  removeSetHeight: !0,
                }),
              }),
            )
            .otherwise(() => null);
        },
        ex = (e) => {
          let { product: t, user: n } = e,
            [r, a] = l.useState(0);
          l.useEffect(() => {
            let e = setInterval(() => {
              t.items.length > 0 && a((e) => (e + 1) % t.items.length);
            }, 5e3);
            return () => {
              clearInterval(e);
            };
          }, [t.skuId, t.items.length, n.id]);
          let s = t.items.length;
          return (0, i.jsx)("div", {
            className: ep.bundlePreviewContainer,
            children: (0, i.jsx)(f.Slides, {
              activeSlide: String(r),
              children: t.items.map((e, l) => {
                let r = String(l),
                  a = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
                  o = "(".concat(l + 1, "/").concat(s, ")");
                return (0, i.jsx)(
                  f.Slide,
                  {
                    id: r,
                    children: (0, i.jsxs)("div", {
                      className: ep.bundlePreviewSlide,
                      children: [
                        (0, i.jsx)(eC, { item: e, user: n, isBundleItem: !0 }),
                        (0, i.jsxs)(f.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ep.bundleSlideTitle,
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
        eh = (e) => {
          let { product: t, user: n } = e;
          return (0, F.x6)(t)
            ? (0, i.jsx)(ex, { product: t, user: n })
            : t.items.length > 0
              ? (0, i.jsx)(eC, { item: t.items[0], user: n })
              : null;
        },
        eg = (e) => {
          var t, n;
          let {
              product: r,
              user: s,
              category: c,
              onClose: x,
              returnRef: g,
              previewingVariantIndexProps: w,
              selectedVariantIndex: _,
            } = e,
            { analyticsLocations: b } = (0, P.ZP)(),
            j = R.ZP.canUseCollectibles(s),
            { previewingVariantIndex: k } = w,
            A = (0, ea.N)(r, k),
            S = (0, es.W)(r, _);
          o()(null != S, "Selected product should not be null");
          let L = (0, G.L)(r),
            { isPurchased: y, isPartiallyOwnedBundle: B } = (0, G.L)(S),
            M = (0, m.e7)([D.Z], () => D.Z.purchases),
            Q = (0, m.e7)(
              [D.Z],
              () => D.Z.isClaiming === (null == S ? void 0 : S.skuId),
            ),
            Y = (0, E.Z)({ analyticsLocations: b }),
            $ = (0, h.ZP)(),
            ei = (0, v.wj)($),
            er = (0, F.G1)(S),
            eo = (0, F.ql)(S, eu.tuJ.DEFAULT),
            ed = (null == eo ? void 0 : eo.amount) === 0,
            { firstAvatarDecoration: eC, firstProfileEffect: ex } = (0, q.R)(
              null != A ? A : S,
            ),
            eg = l.useMemo(() => (0, F.BH)(S, j), [S, j]),
            eP = (0, V.m)("CollectiblesCollectedModal"),
            eI = (0, F.x6)(S) || eP,
            { handleUseNow: ew, isApplying: e_ } = (0, W.W)({
              product: S,
              onSuccess: x,
            }),
            eb = (0, H.hv)("CollectiblesProductPreviewInfo"),
            ej = (0, z.T)(S),
            eT = l.useCallback(() => {
              if ((x(), (0, p.xf)(), Y(), null != eC)) {
                (0, I.ps)({
                  initialSelectedDecoration: eC,
                  analyticsLocations: b,
                });
                return;
              }
              null != ex &&
                (0, Z.H)({
                  initialSelectedEffectId: ex.id,
                  analyticsLocations: b,
                });
            }, [b, eC, ex, x, Y]);
          l.useEffect(() => {
            if (null != eC) return (0, C.cV)(eC), () => (0, C.cV)(void 0);
          }, [eC]);
          let eN = (e) =>
              (0, i.jsx)(N.Z, {
                subscriptionTier: em.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: en.v,
                onSubscribeModalClose: () => {
                  (0, en.T)({
                    product: S,
                    category: c,
                    returnRef: g,
                    analyticsLocations: b,
                  });
                },
              }),
            { firstAvatarDecoration: eE, firstProfileEffect: ek } = (0, U.k)(S),
            eA =
              S.type === u.Z.BUNDLE
                ? ef.intl.formatToPlainString(ef.t["jM8/7+"], {
                    avatarDecorationName:
                      null !== (t = null == eE ? void 0 : eE.name) &&
                      void 0 !== t
                        ? t
                        : "",
                    profileEffectName:
                      null !== (n = null == ek ? void 0 : ek.name) &&
                      void 0 !== n
                        ? n
                        : "",
                  })
                : S.summary;
          return (0, i.jsxs)("div", {
            className: ep.collectibleInfoContainer,
            children: [
              (0, i.jsx)("div", {
                className: ep.titleContainer,
                children: (0, i.jsx)(X.Z, { category: c, display: "modal" }),
              }),
              (0, i.jsx)(eh, { product: null != A ? A : S, user: s }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsxs)("div", {
                    className: ep.description,
                    children: [
                      (0, i.jsx)(J.Z, { product: S, isDarkText: !ei }),
                      (0, i.jsx)(f.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ep.headingWithItemTypePill,
                        children: ej,
                      }),
                      (0, i.jsx)(f.Text, {
                        variant: "text-sm/normal",
                        children: eA,
                      }),
                      L.isPurchased || L.isPartiallyOwnedBundle
                        ? (0, i.jsx)(K.U, {
                            className: ep.priceTag,
                            isPartiallyPurchased: B,
                          })
                        : er
                          ? (0, i.jsx)(f.Text, {
                              variant: "text-md/semibold",
                              className: ep.priceTag,
                              children: ef.intl.string(ef.t.rt69oq),
                            })
                          : (0, i.jsx)(et.Z, {
                              product: S,
                              discount: eg,
                              isPremiumUser: j,
                              className: j ? ep.priceTag : ep.priceTagContainer,
                              nitroUpsell: !j,
                            }),
                    ],
                  }),
                  (0, i.jsx)(el.P, {
                    variantGroupProduct: r,
                    previewingVariantIndexProps: w,
                    className: ep.variantsSwitch,
                    purchases: M,
                  }),
                  (0, i.jsx)("div", {
                    className: ep.buttonsContainer,
                    children: (0, i.jsxs)("div", {
                      className: ep.primaryButtons,
                      children: [
                        !er || j || ed
                          ? y
                            ? (0, i.jsx)(f.Button, {
                                className: ep.button,
                                look: f.Button.Looks.FILLED,
                                onClick: eI ? ew : eT,
                                submitting: e_,
                                children: ef.intl.string(ef.t.MAS7uL),
                              })
                            : B
                              ? null
                              : er
                                ? (0, i.jsx)(f.Button, {
                                    className: ep.button,
                                    look: f.Button.Looks.FILLED,
                                    submitting: Q,
                                    submittingStartedLabel: ef.intl.string(
                                      ef.t["TYw+9v"],
                                    ),
                                    submittingFinishedLabel: ef.intl.string(
                                      ef.t.Pg1UPz,
                                    ),
                                    onClick: async () => {
                                      await (0, O.fK)(S.skuId),
                                        x(),
                                        (0, ec.Z)({
                                          product: S,
                                          analyticsLocations: b,
                                        });
                                    },
                                    children: ef.intl.string(ef.t.zp6caG),
                                  })
                                : (0, i.jsx)(f.Button, {
                                    className: ep.button,
                                    look: f.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, T.Z)({
                                        skuId: S.skuId,
                                        analyticsLocations: b,
                                        variantsReturnStyle: eb,
                                        onClose: (e) =>
                                          e ? x() : (0, ev.dG)(),
                                      }),
                                    children: (0, F.x6)(S)
                                      ? ef.intl.string(ef.t.V1AWw8)
                                      : S.type === u.Z.PROFILE_EFFECT
                                        ? ef.intl.string(ef.t.kAeDcH)
                                        : ef.intl.string(ef.t.AQ0Ven),
                                  })
                          : eN(ef.intl.string(ef.t.sEAnVF)),
                        !er &&
                          !ed &&
                          !d.tq &&
                          (0, i.jsx)(ee.Z, {
                            product: S,
                            onSuccess: x,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(f.Text, {
                    className: a()(ep.disclaimer, !ei && ep.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: y
                      ? null
                      : er
                        ? ef.intl.string(ef.t.O2K0xM)
                        : (0, F.x6)(S)
                          ? ef.intl.string(ef.t.Ifvd7O)
                          : S.type === u.Z.PROFILE_EFFECT
                            ? ef.intl.string(ef.t.pxunjo)
                            : ef.intl.string(ef.t.IA8coq),
                  }),
                ],
              }),
            ],
          });
        },
        eP = (e) => {
          let { product: t, user: n } = e,
            l = R.ZP.canUsePremiumProfileCustomization(n),
            r = (0, m.cj)([L.Z], () => L.Z.getAllPending()),
            a = t.type === u.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, q.R)(t),
            d = null != c;
          return (0, i.jsxs)("div", {
            className:
              (null == s ? void 0 : s.type) === u.Z.AVATAR_DECORATION
                ? ep.previewsContainerInner
                : ep.profileEffectPreviewsContainerInner,
            children: [
              (0, i.jsx)(k.Z, {
                ...r,
                user: n,
                canUsePremiumCustomization: l,
                pendingAvatarDecoration: o,
                pendingProfileEffectId: null == c ? void 0 : c.id,
                disabledInputs: !0,
                hideMessageInput: !d,
                hideExampleButton: !0,
                hideCustomStatus: !0,
                hideBioSection: a,
              }),
              a && (0, i.jsx)(ew, { user: n }),
            ],
          });
        },
        eI = (e) => {
          let { author: t } = e;
          return (0, w.e5)({
            ...(0, _.ZP)({
              author: t,
              channelId: "1337",
              content: ef.intl.string(ef.t.d5YwKy),
            }),
            state: eu.yb.SENT,
            id: "0",
          });
        },
        ew = (e) => {
          let { user: t } = e,
            n = eI({ author: t });
          return (0, i.jsx)(f.FocusBlock, {
            children: (0, i.jsxs)(f.Card, {
              className: ep.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, i.jsx)(
                  j.Z,
                  {
                    className: ep.mockMessage,
                    author: (0, b.ZH)(n),
                    message: n,
                  },
                  n.id,
                ),
                (0, i.jsxs)("div", {
                  className: ep.mockInput,
                  children: [
                    (0, i.jsx)(f.CirclePlusIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ep.mockInputButton,
                    }),
                    (0, i.jsx)(f.ReactionIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ep.mockInputButton,
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
            transitionState: n,
            onClose: r,
            product: a,
            category: s,
            returnRef: c,
            analyticsSource: d,
            analyticsLocations: v,
          } = e,
          p = (0, m.e7)([y.default], () => y.default.getCurrentUser()),
          C = (0, eo.f)(a),
          { previewingVariantIndex: x } = C,
          h = (0, m.e7)([D.Z], () => D.Z.purchases),
          I = (0, M.o)(a, h),
          w = (0, ea.N)(a, x),
          _ = (0, es.W)(a, I);
        o()(null != _, "Selected product should not be null");
        let { analyticsLocations: b } = (0, P.ZP)([
          ...v,
          g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
        ]);
        (0, Y.u9)(_);
        let [j] = _.items;
        if (
          (l.useEffect(() => {
            null != p && (0, S.Z)(p.id, p.getAvatarURL(void 0, 80));
          }, [p]),
          l.useEffect(() => {
            let e =
              (null == j ? void 0 : j.type) === u.Z.AVATAR_DECORATION
                ? "avatar decoration"
                : "profile effect";
            B.default.track(eu.rMx.OPEN_MODAL, {
              type: eu.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: d,
              location_stack: b,
              sku_id: _.skuId,
              product_type: e,
            }),
              _.items.map(O.oK);
          }, [d, b, null == j ? void 0 : j.type, _.skuId, _.items]),
          null == p)
        )
          return null;
        let T = (0, ed.ZS)(s.skuId);
        return (0, i.jsx)(P.Gt, {
          value: b,
          children: (0, i.jsx)(f.ModalRoot, {
            hideShadow: !0,
            className: ep.modalRoot,
            returnRef: c,
            transitionState: n,
            size: f.ModalSize.DYNAMIC,
            children: (0, i.jsxs)(f.ModalContent, {
              className: ep.modalContent,
              children: [
                (0, i.jsx)(eg, {
                  user: p,
                  product: a,
                  category: s,
                  onClose: r,
                  previewingVariantIndexProps: C,
                  selectedVariantIndex: I,
                }),
                (0, i.jsxs)("div", {
                  className:
                    _.type === u.Z.AVATAR_DECORATION
                      ? ep.collectiblePreviewsContainerWithChat
                      : ep.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, i.jsx)(Q.Z, {
                      asset:
                        null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                      size: (0, ei.ML)(540),
                      className: ep.categoryBanner,
                      categoryBannerOverride: T,
                    }),
                    (0, i.jsx)(eP, { user: p, product: null != w ? w : _ }),
                    (0, i.jsxs)("div", {
                      className: ep.profilePreviewHeader,
                      children: [
                        (0, i.jsx)("div", {
                          className: ep.titleImageContainer,
                          children: (0, i.jsx)("img", {
                            className: ep.titleImage,
                            style: null == T ? void 0 : T.pdpLogoStyle,
                            src: (0, F.uV)(s.logo, { size: $.n }),
                            alt: s.name,
                          }),
                        }),
                        (0, i.jsx)(f.ModalCloseButton, {
                          onClick: r,
                          className: ep.modalCloseButton,
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
    332246: function (e, t, n) {
      n.d(t, {
        N: function () {
          return l;
        },
      });
      var i = n(979554);
      let l = (e, t) => {
        var n;
        return e.type === i.Z.VARIANTS_GROUP
          ? null != t
            ? null === (n = e.variants) || void 0 === n
              ? void 0
              : n[t]
            : void 0
          : e;
      };
    },
    253344: function (e, t, n) {
      e.exports = {
        container: "container_e3e57a",
        darkText: "darkText_e3e57a",
        lightText: "lightText_e3e57a",
      };
    },
    147334: function (e, t, n) {
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
        variantsSwitch: "variantsSwitch_c5828f",
      };
    },
  },
]);
//# sourceMappingURL=16182bae4827c2ff555a.js.map
