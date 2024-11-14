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
        d = i(435216);
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
        j = i(753206),
        w = i(333867),
        b = i(197115),
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
        F = i(188584),
        H = i(635552),
        V = i(905357),
        U = i(724994),
        W = i(328456),
        z = i(390698),
        q = i(141011),
        G = i(426171),
        K = i(224068),
        Q = i(813083),
        Y = i(823941),
        J = i(680942),
        X = i(558060),
        $ = i(237031),
        ee = i(372654),
        et = i(453713),
        ei = i(616066),
        en = i(58201),
        el = i(832149),
        er = i(215023),
        ea = i(981631),
        es = i(474936),
        eo = i(231338),
        ec = i(388032),
        ed = i(547804);
      let eu = (e) => {
          let { item: t, user: i, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            o = (0, C.Z)(a);
          return (0, s.EQ)(t.type)
            .with(c.Z.AVATAR_DECORATION, () =>
              (0, n.jsx)("div", {
                className: r
                  ? ed.bundleAvatarPreviewContainer
                  : ed.avatarPreviewContainer,
                children: (0, n.jsx)(ei.R, { user: i, item: t }),
              }),
            )
            .with(c.Z.PROFILE_EFFECT, () =>
              (0, n.jsx)("div", {
                className: r
                  ? ed.bundlePfxPreviewContainer
                  : ed.pfxPreviewContainer,
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
        em = (e) => {
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
            className: ed.bundlePreviewContainer,
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
                      className: ed.bundlePreviewSlide,
                      children: [
                        (0, n.jsx)(eu, { item: e, user: i, isBundleItem: !0 }),
                        (0, n.jsxs)(m.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ed.bundleSlideTitle,
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
        ef = (e) => {
          let { product: t, user: i } = e;
          return (0, D.x6)(t)
            ? (0, n.jsx)(em, { product: t, user: i })
            : t.items.length > 0
              ? (0, n.jsx)(eu, { item: t.items[0], user: i })
              : null;
        },
        ev = (e) => {
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
            j = (0, O.o0)(r),
            E = (0, en.W)(r, j),
            { isPurchased: N, isPartiallyPurchased: A } = (0, U.L)(E),
            S = (0, d.e7)([R.Z], () => R.Z.isClaiming === E.skuId),
            Z = (0, T.Z)({ analyticsLocations: I }),
            L = (0, x.ZP)(),
            q = (0, u.wj)(L),
            G = (0, D.G1)(E),
            Y = (0, D.ql)(E, ea.tuJ.DEFAULT),
            ee = (null == Y ? void 0 : Y.amount) === 0,
            { firstAvatarDecoration: ei, firstProfileEffect: er } = (0, W.R)(E),
            eu = l.useMemo(() => (0, D.BH)(E, _), [E, _]),
            em = (0, M.m)("CollectiblesCollectedModal"),
            ev = (0, D.x6)(E) || em,
            { handleUseNow: eC, isApplying: ex } = (0, H.W)({
              product: E,
              onSuccess: h,
            }),
            eh = (0, V.T)(E),
            ep = l.useCallback(() => {
              if ((h(), (0, f.xf)(), Z(), null != ei)) {
                (0, g.ps)({
                  initialSelectedDecoration: ei,
                  analyticsLocations: I,
                });
                return;
              }
              null != er &&
                (0, k.H)({
                  initialSelectedEffectId: er.id,
                  analyticsLocations: I,
                });
            }, [I, ei, er, h, Z]);
          l.useEffect(() => {
            if (null != ei) return (0, v.cV)(ei), () => (0, v.cV)(void 0);
          }, [ei]);
          let eg = (e) =>
              (0, n.jsx)(b.Z, {
                subscriptionTier: es.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: $.v,
                onSubscribeModalClose: () => {
                  (0, $.T)({
                    product: E,
                    category: C,
                    returnRef: P,
                    analyticsLocations: I,
                  });
                },
              }),
            { firstAvatarDecoration: eP, firstProfileEffect: eI } = (0, F.k)(E),
            e_ =
              E.type === c.Z.BUNDLE
                ? ec.intl.formatToPlainString(ec.t["jM8/7+"], {
                    avatarDecorationName:
                      null !== (t = null == eP ? void 0 : eP.name) &&
                      void 0 !== t
                        ? t
                        : "",
                    profileEffectName:
                      null !== (i = null == eI ? void 0 : eI.name) &&
                      void 0 !== i
                        ? i
                        : "",
                  })
                : E.summary;
          return (0, n.jsxs)("div", {
            className: ed.collectibleInfoContainer,
            children: [
              (0, n.jsx)("div", {
                className: ed.titleContainer,
                children: (0, n.jsx)(Q.Z, { category: C, display: "modal" }),
              }),
              (0, n.jsx)(ef, { product: E, user: s }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className: ed.description,
                    children: [
                      (0, n.jsx)(K.Z, { product: E, isDarkText: !q }),
                      (0, n.jsx)(m.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ed.headingWithItemTypePill,
                        children: eh,
                      }),
                      (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        children: e_,
                      }),
                      N || A
                        ? (0, n.jsx)(z.U, {
                            className: ed.priceTag,
                            isPartiallyPurchased: A,
                          })
                        : G
                          ? (0, n.jsx)(m.Text, {
                              variant: "text-md/semibold",
                              className: ed.priceTag,
                              children: ec.intl.string(ec.t.rt69oq),
                            })
                          : (0, n.jsx)(X.Z, {
                              product: E,
                              discount: eu,
                              isPremiumUser: _,
                              className: _ ? ed.priceTag : ed.priceTagContainer,
                              nitroUpsell: !_,
                            }),
                    ],
                  }),
                  (0, n.jsx)(et.P, {
                    product: r,
                    className: ed.variantsSwitch,
                  }),
                  (0, n.jsx)("div", {
                    className: ed.buttonsContainer,
                    children: (0, n.jsxs)("div", {
                      className: ed.primaryButtons,
                      children: [
                        !G || _ || ee
                          ? N
                            ? (0, n.jsx)(m.Button, {
                                className: ed.button,
                                look: m.Button.Looks.FILLED,
                                onClick: ev ? eC : ep,
                                submitting: ex,
                                children: ec.intl.string(ec.t.MAS7uL),
                              })
                            : A
                              ? null
                              : G
                                ? (0, n.jsx)(m.Button, {
                                    className: ed.button,
                                    look: m.Button.Looks.FILLED,
                                    submitting: S,
                                    submittingStartedLabel: ec.intl.string(
                                      ec.t["TYw+9v"],
                                    ),
                                    submittingFinishedLabel: ec.intl.string(
                                      ec.t.Pg1UPz,
                                    ),
                                    onClick: async () => {
                                      await (0, B.fK)(E.skuId),
                                        h(),
                                        (0, el.Z)({
                                          product: E,
                                          analyticsLocations: I,
                                        });
                                    },
                                    children: ec.intl.string(ec.t.zp6caG),
                                  })
                                : (0, n.jsx)(m.Button, {
                                    className: ed.button,
                                    look: m.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, w.Z)({
                                        skuId: E.skuId,
                                        analyticsLocations: I,
                                        onClose: (e) =>
                                          e ? h() : (0, eo.dG)(),
                                      }),
                                    children: (0, D.x6)(E)
                                      ? ec.intl.string(ec.t.V1AWw8)
                                      : E.type === c.Z.PROFILE_EFFECT
                                        ? ec.intl.string(ec.t.kAeDcH)
                                        : ec.intl.string(ec.t.AQ0Ven),
                                  })
                          : eg(ec.intl.string(ec.t.sEAnVF)),
                        !G &&
                          !ee &&
                          !o.tq &&
                          (0, n.jsx)(J.Z, {
                            product: E,
                            onSuccess: h,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(m.Text, {
                    className: a()(ed.disclaimer, !q && ed.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: N
                      ? null
                      : G
                        ? ec.intl.string(ec.t.O2K0xM)
                        : (0, D.x6)(E)
                          ? ec.intl.string(ec.t.Ifvd7O)
                          : E.type === c.Z.PROFILE_EFFECT
                            ? ec.intl.string(ec.t.pxunjo)
                            : ec.intl.string(ec.t.IA8coq),
                  }),
                ],
              }),
            ],
          });
        },
        eC = (e) => {
          let { product: t, user: i } = e,
            l = y.ZP.canUsePremiumProfileCustomization(i),
            r = (0, d.cj)([S.Z], () => S.Z.getAllPending()),
            a = t.type === c.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: u } = (0, W.R)(t),
            m = null != u;
          return (0, n.jsxs)("div", {
            className:
              (null == s ? void 0 : s.type) === c.Z.AVATAR_DECORATION
                ? ed.previewsContainerInner
                : ed.profileEffectPreviewsContainerInner,
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
              a && (0, n.jsx)(eh, { user: i }),
            ],
          });
        },
        ex = (e) => {
          let { author: t } = e;
          return (0, P.e5)({
            ...(0, I.ZP)({
              author: t,
              channelId: "1337",
              content: ec.intl.string(ec.t.d5YwKy),
            }),
            state: ea.yb.SENT,
            id: "0",
          });
        },
        eh = (e) => {
          let { user: t } = e,
            i = ex({ author: t });
          return (0, n.jsx)(m.FocusBlock, {
            children: (0, n.jsxs)(m.Card, {
              className: ed.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, n.jsx)(
                  j.Z,
                  {
                    className: ed.mockMessage,
                    author: (0, _.ZH)(i),
                    message: i,
                  },
                  i.id,
                ),
                (0, n.jsxs)("div", {
                  className: ed.mockInput,
                  children: [
                    (0, n.jsx)(m.CirclePlusIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ed.mockInputButton,
                    }),
                    (0, n.jsx)(m.ReactionIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ed.mockInputButton,
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
          x = (0, en.W)(a, C),
          { analyticsLocations: g } = (0, p.ZP)([
            ...f,
            h.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
          ]);
        (0, G.u9)(x);
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
            L.default.track(ea.rMx.OPEN_MODAL, {
              type: ea.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
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
        let I = (0, er.ZS)(s.skuId);
        return (0, n.jsx)(p.Gt, {
          value: g,
          children: (0, n.jsx)(m.ModalRoot, {
            hideShadow: !0,
            className: ed.modalRoot,
            returnRef: o,
            transitionState: i,
            size: m.ModalSize.DYNAMIC,
            children: (0, n.jsxs)(m.ModalContent, {
              className: ed.modalContent,
              children: [
                (0, n.jsx)(ev, {
                  user: v,
                  product: a,
                  category: s,
                  onClose: r,
                }),
                (0, n.jsxs)("div", {
                  className:
                    x.type === c.Z.AVATAR_DECORATION
                      ? ed.collectiblePreviewsContainerWithChat
                      : ed.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, n.jsx)(q.Z, {
                      asset:
                        null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                      size: (0, ee.ML)(540),
                      className: ed.categoryBanner,
                      categoryBannerOverride: I,
                    }),
                    (0, n.jsx)(eC, { user: v, product: x }),
                    (0, n.jsxs)("div", {
                      className: ed.profilePreviewHeader,
                      children: [
                        (0, n.jsx)("div", {
                          className: ed.titleImageContainer,
                          children: (0, n.jsx)("img", {
                            className: ed.titleImage,
                            style: null == I ? void 0 : I.pdpLogoStyle,
                            src: (0, D.uV)(s.logo, { size: Y.n }),
                            alt: s.name,
                          }),
                        }),
                        (0, n.jsx)(m.ModalCloseButton, {
                          onClick: r,
                          className: ed.modalCloseButton,
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
        variantsSwitch: "variantsSwitch_c5828f",
      };
    },
  },
]);
//# sourceMappingURL=0fbb413aac720b074ffb.js.map
