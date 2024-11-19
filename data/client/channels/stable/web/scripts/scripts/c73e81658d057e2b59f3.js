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
        w = i(753206),
        b = i(333867),
        j = i(197115),
        T = i(300284),
        E = i(921813),
        N = i(876917),
        k = i(642619),
        A = i(484459),
        S = i(25990),
        Z = i(594174),
        L = i(626135),
        y = i(74538),
        B = i(335131),
        R = i(1870),
        O = i(429368),
        D = i(884697),
        M = i(890249),
        F = i(228624),
        H = i(188584),
        V = i(635552),
        U = i(905357),
        W = i(724994),
        z = i(328456),
        q = i(390698),
        G = i(141011),
        K = i(426171),
        Q = i(224068),
        Y = i(813083),
        J = i(823941),
        X = i(680942),
        $ = i(558060),
        ee = i(237031),
        et = i(372654),
        ei = i(453713),
        en = i(616066),
        el = i(58201),
        er = i(832149),
        ea = i(215023),
        es = i(981631),
        eo = i(474936),
        ec = i(231338),
        ed = i(388032),
        eu = i(359407);
      let em = (e) => {
          let { item: t, user: i, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            o = (0, C.Z)(a);
          return (0, s.EQ)(t.type)
            .with(c.Z.AVATAR_DECORATION, () =>
              (0, n.jsx)("div", {
                className: r
                  ? eu.bundleAvatarPreviewContainer
                  : eu.avatarPreviewContainer,
                children: (0, n.jsx)(en.R, { user: i, item: t }),
              }),
            )
            .with(c.Z.PROFILE_EFFECT, () =>
              (0, n.jsx)("div", {
                className: r
                  ? eu.bundlePfxPreviewContainer
                  : eu.pfxPreviewContainer,
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
        ef = (e) => {
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
            className: eu.bundlePreviewContainer,
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
                      className: eu.bundlePreviewSlide,
                      children: [
                        (0, n.jsx)(em, { item: e, user: i, isBundleItem: !0 }),
                        (0, n.jsxs)(m.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: eu.bundleSlideTitle,
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
        ev = (e) => {
          let { product: t, user: i } = e;
          return (0, D.x6)(t)
            ? (0, n.jsx)(ef, { product: t, user: i })
            : t.items.length > 0
              ? (0, n.jsx)(em, { item: t.items[0], user: i })
              : null;
        },
        eC = (e) => {
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
            w = (0, O.o0)(r),
            E = (0, el.W)(r, w),
            { isPurchased: N, isPartiallyPurchased: A } = (0, W.L)(E),
            S = (0, d.e7)([R.Z], () => R.Z.isClaiming === E.skuId),
            Z = (0, T.Z)({ analyticsLocations: I }),
            L = (0, x.ZP)(),
            G = (0, u.wj)(L),
            K = (0, D.G1)(E),
            J = (0, D.ql)(E, es.tuJ.DEFAULT),
            et = (null == J ? void 0 : J.amount) === 0,
            { firstAvatarDecoration: en, firstProfileEffect: ea } = (0, z.R)(E),
            em = l.useMemo(() => (0, D.BH)(E, _), [E, _]),
            ef = (0, M.m)("CollectiblesCollectedModal"),
            eC = (0, D.x6)(E) || ef,
            { handleUseNow: ex, isApplying: eh } = (0, V.W)({
              product: E,
              onSuccess: h,
            }),
            ep = (0, F.h)("CollectiblesProductPreviewInfo"),
            eg = (0, U.T)(E),
            eP = l.useCallback(() => {
              if ((h(), (0, f.xf)(), Z(), null != en)) {
                (0, g.ps)({
                  initialSelectedDecoration: en,
                  analyticsLocations: I,
                });
                return;
              }
              null != ea &&
                (0, k.H)({
                  initialSelectedEffectId: ea.id,
                  analyticsLocations: I,
                });
            }, [I, en, ea, h, Z]);
          l.useEffect(() => {
            if (null != en) return (0, v.cV)(en), () => (0, v.cV)(void 0);
          }, [en]);
          let eI = (e) =>
              (0, n.jsx)(j.Z, {
                subscriptionTier: eo.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: ee.v,
                onSubscribeModalClose: () => {
                  (0, ee.T)({
                    product: E,
                    category: C,
                    returnRef: P,
                    analyticsLocations: I,
                  });
                },
              }),
            { firstAvatarDecoration: e_, firstProfileEffect: ew } = (0, H.k)(E),
            eb =
              E.type === c.Z.BUNDLE
                ? ed.intl.formatToPlainString(ed.t["jM8/7+"], {
                    avatarDecorationName:
                      null !== (t = null == e_ ? void 0 : e_.name) &&
                      void 0 !== t
                        ? t
                        : "",
                    profileEffectName:
                      null !== (i = null == ew ? void 0 : ew.name) &&
                      void 0 !== i
                        ? i
                        : "",
                  })
                : E.summary;
          return (0, n.jsxs)("div", {
            className: eu.collectibleInfoContainer,
            children: [
              (0, n.jsx)("div", {
                className: eu.titleContainer,
                children: (0, n.jsx)(Y.Z, { category: C, display: "modal" }),
              }),
              (0, n.jsx)(ev, { product: E, user: s }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: eu.description,
                    children: [
                      (0, n.jsx)(Q.Z, { product: E, isDarkText: !G }),
                      (0, n.jsx)(m.Heading, {
                        variant: "heading-xl/extrabold",
                        className: eu.headingWithItemTypePill,
                        children: eg,
                      }),
                      (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        children: eb,
                      }),
                      N || A
                        ? (0, n.jsx)(q.U, {
                            className: eu.priceTag,
                            isPartiallyPurchased: A,
                          })
                        : K
                          ? (0, n.jsx)(m.Text, {
                              variant: "text-md/semibold",
                              className: eu.priceTag,
                              children: ed.intl.string(ed.t.rt69oq),
                            })
                          : (0, n.jsx)($.Z, {
                              product: E,
                              discount: em,
                              isPremiumUser: _,
                              className: _ ? eu.priceTag : eu.priceTagContainer,
                              nitroUpsell: !_,
                            }),
                    ],
                  }),
                  (0, n.jsx)(ei.P, {
                    product: r,
                    className: eu.variantsSwitch,
                  }),
                  (0, n.jsx)("div", {
                    className: eu.buttonsContainer,
                    children: (0, n.jsxs)("div", {
                      className: eu.primaryButtons,
                      children: [
                        !K || _ || et
                          ? N
                            ? (0, n.jsx)(m.Button, {
                                className: eu.button,
                                look: m.Button.Looks.FILLED,
                                onClick: eC ? ex : eP,
                                submitting: eh,
                                children: ed.intl.string(ed.t.MAS7uL),
                              })
                            : A
                              ? null
                              : K
                                ? (0, n.jsx)(m.Button, {
                                    className: eu.button,
                                    look: m.Button.Looks.FILLED,
                                    submitting: S,
                                    submittingStartedLabel: ed.intl.string(
                                      ed.t["TYw+9v"],
                                    ),
                                    submittingFinishedLabel: ed.intl.string(
                                      ed.t.Pg1UPz,
                                    ),
                                    onClick: async () => {
                                      await (0, B.fK)(E.skuId),
                                        h(),
                                        (0, er.Z)({
                                          product: E,
                                          analyticsLocations: I,
                                        });
                                    },
                                    children: ed.intl.string(ed.t.zp6caG),
                                  })
                                : (0, n.jsx)(m.Button, {
                                    className: eu.button,
                                    look: m.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, b.Z)({
                                        skuId: E.skuId,
                                        analyticsLocations: I,
                                        variantsReturnStyle: ep,
                                        onClose: (e) =>
                                          e ? h() : (0, ec.dG)(),
                                      }),
                                    children: (0, D.x6)(E)
                                      ? ed.intl.string(ed.t.V1AWw8)
                                      : E.type === c.Z.PROFILE_EFFECT
                                        ? ed.intl.string(ed.t.kAeDcH)
                                        : ed.intl.string(ed.t.AQ0Ven),
                                  })
                          : eI(ed.intl.string(ed.t.sEAnVF)),
                        !K &&
                          !et &&
                          !o.tq &&
                          (0, n.jsx)(X.Z, {
                            product: E,
                            onSuccess: h,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(m.Text, {
                    className: a()(eu.disclaimer, !G && eu.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: N
                      ? null
                      : K
                        ? ed.intl.string(ed.t.O2K0xM)
                        : (0, D.x6)(E)
                          ? ed.intl.string(ed.t.Ifvd7O)
                          : E.type === c.Z.PROFILE_EFFECT
                            ? ed.intl.string(ed.t.pxunjo)
                            : ed.intl.string(ed.t.IA8coq),
                  }),
                ],
              }),
            ],
          });
        },
        ex = (e) => {
          let { product: t, user: i } = e,
            l = y.ZP.canUsePremiumProfileCustomization(i),
            r = (0, d.cj)([S.Z], () => S.Z.getAllPending()),
            a = t.type === c.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: u } = (0, z.R)(t),
            m = null != u;
          return (0, n.jsxs)("div", {
            className:
              (null == s ? void 0 : s.type) === c.Z.AVATAR_DECORATION
                ? eu.previewsContainerInner
                : eu.profileEffectPreviewsContainerInner,
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
              a && (0, n.jsx)(ep, { user: i }),
            ],
          });
        },
        eh = (e) => {
          let { author: t } = e;
          return (0, P.e5)({
            ...(0, I.ZP)({
              author: t,
              channelId: "1337",
              content: ed.intl.string(ed.t.d5YwKy),
            }),
            state: es.yb.SENT,
            id: "0",
          });
        },
        ep = (e) => {
          let { user: t } = e,
            i = eh({ author: t });
          return (0, n.jsx)(m.FocusBlock, {
            children: (0, n.jsxs)(m.Card, {
              className: eu.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, n.jsx)(
                  w.Z,
                  {
                    className: eu.mockMessage,
                    author: (0, _.ZH)(i),
                    message: i,
                  },
                  i.id,
                ),
                (0, n.jsxs)("div", {
                  className: eu.mockInput,
                  children: [
                    (0, n.jsx)(m.CirclePlusIcon, {
                      size: "md",
                      color: "currentColor",
                      className: eu.mockInputButton,
                    }),
                    (0, n.jsx)(m.ReactionIcon, {
                      size: "md",
                      color: "currentColor",
                      className: eu.mockInputButton,
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
          v = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
          C = (0, O.o0)(a),
          x = (0, el.W)(a, C),
          { analyticsLocations: g } = (0, p.ZP)([
            ...f,
            h.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
          ]);
        (0, K.u9)(x);
        let [P] = x.items;
        if (
          (l.useEffect(() => {
            null != v && (0, A.Z)(v.id, v.getAvatarURL(void 0, 80));
          }, [v]),
          l.useEffect(() => {
            let e =
              (null == P ? void 0 : P.type) === c.Z.AVATAR_DECORATION
                ? "avatar decoration"
                : "profile effect";
            L.default.track(es.rMx.OPEN_MODAL, {
              type: es.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: u,
              location_stack: g,
              sku_id: x.skuId,
              product_type: e,
            }),
              x.items.map(B.oK);
          }, [u, g, x.skuId, x.items, null == P ? void 0 : P.type]),
          null == v)
        )
          return null;
        let I = (0, ea.ZS)(s.skuId);
        return (0, n.jsx)(p.Gt, {
          value: g,
          children: (0, n.jsx)(m.ModalRoot, {
            hideShadow: !0,
            className: eu.modalRoot,
            returnRef: o,
            transitionState: i,
            size: m.ModalSize.DYNAMIC,
            children: (0, n.jsxs)(m.ModalContent, {
              className: eu.modalContent,
              children: [
                (0, n.jsx)(eC, {
                  user: v,
                  product: a,
                  category: s,
                  onClose: r,
                }),
                (0, n.jsxs)("div", {
                  className:
                    x.type === c.Z.AVATAR_DECORATION
                      ? eu.collectiblePreviewsContainerWithChat
                      : eu.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, n.jsx)(G.Z, {
                      asset:
                        null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                      size: (0, et.ML)(540),
                      className: eu.categoryBanner,
                      categoryBannerOverride: I,
                    }),
                    (0, n.jsx)(ex, { user: v, product: x }),
                    (0, n.jsxs)("div", {
                      className: eu.profilePreviewHeader,
                      children: [
                        (0, n.jsx)("div", {
                          className: eu.titleImageContainer,
                          children: (0, n.jsx)("img", {
                            className: eu.titleImage,
                            style: null == I ? void 0 : I.pdpLogoStyle,
                            src: (0, D.uV)(s.logo, { size: J.n }),
                            alt: s.name,
                          }),
                        }),
                        (0, n.jsx)(m.ModalCloseButton, {
                          onClick: r,
                          className: eu.modalCloseButton,
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
        variantsSwitch: "variantsSwitch_c5828f",
      };
    },
  },
]);
//# sourceMappingURL=c73e81658d057e2b59f3.js.map
