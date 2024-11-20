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
        d = n(435216);
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
        C = n(37234),
        x = n(809206),
        p = n(727637),
        h = n(410030),
        g = n(100527),
        P = n(906732),
        I = n(1585),
        _ = n(786761),
        b = n(3148),
        w = n(739566),
        j = n(753206),
        T = n(333867),
        N = n(197115),
        E = n(300284),
        k = n(921813),
        A = n(876917),
        S = n(642619),
        Z = n(484459),
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
        eo = n(832149),
        ec = n(215023),
        ed = n(981631),
        eu = n(474936),
        em = n(231338),
        ev = n(388032),
        ef = n(547804);
      let eC = (e) => {
          let { item: t, user: n, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            s = (0, p.Z)(a);
          return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
              (0, i.jsx)("div", {
                className: r
                  ? ef.bundleAvatarPreviewContainer
                  : ef.avatarPreviewContainer,
                children: (0, i.jsx)(er.R, { user: n, item: t }),
              }),
            )
            .with(u.Z.PROFILE_EFFECT, () =>
              (0, i.jsx)("div", {
                className: r
                  ? ef.bundlePfxPreviewContainer
                  : ef.pfxPreviewContainer,
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
            className: ef.bundlePreviewContainer,
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
                      className: ef.bundlePreviewSlide,
                      children: [
                        (0, i.jsx)(eC, { item: e, user: n, isBundleItem: !0 }),
                        (0, i.jsxs)(f.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ef.bundleSlideTitle,
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
        ep = (e) => {
          let { product: t, user: n } = e;
          return (0, F.x6)(t)
            ? (0, i.jsx)(ex, { product: t, user: n })
            : t.items.length > 0
              ? (0, i.jsx)(eC, { item: t.items[0], user: n })
              : null;
        },
        eh = (e) => {
          var t, n;
          let {
              product: r,
              user: s,
              category: c,
              onClose: p,
              returnRef: g,
            } = e,
            { analyticsLocations: _ } = (0, P.ZP)(),
            b = R.ZP.canUseCollectibles(s),
            w = (0, M.ff)(r),
            j = (0, M.o0)(r),
            k = (0, ea.N)(r, w),
            A = (0, es.W)(r, j);
          o()(null != A, "Selected product should not be null");
          let { isPurchased: Z, isPartiallyPurchased: L } = (0, G.L)(A),
            y = (0, m.e7)(
              [D.Z],
              () => D.Z.isClaiming === (null == A ? void 0 : A.skuId),
            ),
            B = (0, E.Z)({ analyticsLocations: _ }),
            Q = (0, h.ZP)(),
            Y = (0, v.wj)(Q),
            $ = (0, F.G1)(A),
            ei = (0, F.ql)(A, ed.tuJ.DEFAULT),
            er = (null == ei ? void 0 : ei.amount) === 0,
            { firstAvatarDecoration: ec, firstProfileEffect: eC } = (0, q.R)(
              null != k ? k : A,
            ),
            ex = l.useMemo(() => (0, F.BH)(A, b), [A, b]),
            eh = (0, V.m)("CollectiblesCollectedModal"),
            eg = (0, F.x6)(A) || eh,
            { handleUseNow: eP, isApplying: eI } = (0, W.W)({
              product: A,
              onSuccess: p,
            }),
            e_ = (0, H.hv)("CollectiblesProductPreviewInfo"),
            eb = (0, z.T)(A),
            ew = l.useCallback(() => {
              if ((p(), (0, C.xf)(), B(), null != ec)) {
                (0, I.ps)({
                  initialSelectedDecoration: ec,
                  analyticsLocations: _,
                });
                return;
              }
              null != eC &&
                (0, S.H)({
                  initialSelectedEffectId: eC.id,
                  analyticsLocations: _,
                });
            }, [_, ec, eC, p, B]);
          l.useEffect(() => {
            if (null != ec) return (0, x.cV)(ec), () => (0, x.cV)(void 0);
          }, [ec]);
          let ej = (e) =>
              (0, i.jsx)(N.Z, {
                subscriptionTier: eu.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: en.v,
                onSubscribeModalClose: () => {
                  (0, en.T)({
                    product: A,
                    category: c,
                    returnRef: g,
                    analyticsLocations: _,
                  });
                },
              }),
            { firstAvatarDecoration: eT, firstProfileEffect: eN } = (0, U.k)(A),
            eE =
              A.type === u.Z.BUNDLE
                ? ev.intl.formatToPlainString(ev.t["jM8/7+"], {
                    avatarDecorationName:
                      null !== (t = null == eT ? void 0 : eT.name) &&
                      void 0 !== t
                        ? t
                        : "",
                    profileEffectName:
                      null !== (n = null == eN ? void 0 : eN.name) &&
                      void 0 !== n
                        ? n
                        : "",
                  })
                : A.summary;
          return (0, i.jsxs)("div", {
            className: ef.collectibleInfoContainer,
            children: [
              (0, i.jsx)("div", {
                className: ef.titleContainer,
                children: (0, i.jsx)(X.Z, { category: c, display: "modal" }),
              }),
              (0, i.jsx)(ep, { product: null != k ? k : A, user: s }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsxs)("div", {
                    className: ef.description,
                    children: [
                      (0, i.jsx)(J.Z, { product: A, isDarkText: !Y }),
                      (0, i.jsx)(f.Heading, {
                        variant: "heading-xl/extrabold",
                        className: ef.headingWithItemTypePill,
                        children: eb,
                      }),
                      (0, i.jsx)(f.Text, {
                        variant: "text-sm/normal",
                        children: eE,
                      }),
                      Z || L
                        ? (0, i.jsx)(K.U, {
                            className: ef.priceTag,
                            isPartiallyPurchased: L,
                          })
                        : $
                          ? (0, i.jsx)(f.Text, {
                              variant: "text-md/semibold",
                              className: ef.priceTag,
                              children: ev.intl.string(ev.t.rt69oq),
                            })
                          : (0, i.jsx)(et.Z, {
                              product: A,
                              discount: ex,
                              isPremiumUser: b,
                              className: b ? ef.priceTag : ef.priceTagContainer,
                              nitroUpsell: !b,
                            }),
                    ],
                  }),
                  (0, i.jsx)(el.P, {
                    variantGroupProduct: r,
                    className: ef.variantsSwitch,
                  }),
                  (0, i.jsx)("div", {
                    className: ef.buttonsContainer,
                    children: (0, i.jsxs)("div", {
                      className: ef.primaryButtons,
                      children: [
                        !$ || b || er
                          ? Z
                            ? (0, i.jsx)(f.Button, {
                                className: ef.button,
                                look: f.Button.Looks.FILLED,
                                onClick: eg ? eP : ew,
                                submitting: eI,
                                children: ev.intl.string(ev.t.MAS7uL),
                              })
                            : L
                              ? null
                              : $
                                ? (0, i.jsx)(f.Button, {
                                    className: ef.button,
                                    look: f.Button.Looks.FILLED,
                                    submitting: y,
                                    submittingStartedLabel: ev.intl.string(
                                      ev.t["TYw+9v"],
                                    ),
                                    submittingFinishedLabel: ev.intl.string(
                                      ev.t.Pg1UPz,
                                    ),
                                    onClick: async () => {
                                      await (0, O.fK)(A.skuId),
                                        p(),
                                        (0, eo.Z)({
                                          product: A,
                                          analyticsLocations: _,
                                        });
                                    },
                                    children: ev.intl.string(ev.t.zp6caG),
                                  })
                                : (0, i.jsx)(f.Button, {
                                    className: ef.button,
                                    look: f.Button.Looks.FILLED,
                                    onClick: () =>
                                      (0, T.Z)({
                                        skuId: A.skuId,
                                        analyticsLocations: _,
                                        variantsReturnStyle: e_,
                                        onClose: (e) =>
                                          e ? p() : (0, em.dG)(),
                                      }),
                                    children: (0, F.x6)(A)
                                      ? ev.intl.string(ev.t.V1AWw8)
                                      : A.type === u.Z.PROFILE_EFFECT
                                        ? ev.intl.string(ev.t.kAeDcH)
                                        : ev.intl.string(ev.t.AQ0Ven),
                                  })
                          : ej(ev.intl.string(ev.t.sEAnVF)),
                        !$ &&
                          !er &&
                          !d.tq &&
                          (0, i.jsx)(ee.Z, {
                            product: A,
                            onSuccess: p,
                            disableCustomColor: !0,
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(f.Text, {
                    className: a()(ef.disclaimer, !Y && ef.disclaimerLight),
                    variant: "text-xxs/normal",
                    children: Z
                      ? null
                      : $
                        ? ev.intl.string(ev.t.O2K0xM)
                        : (0, F.x6)(A)
                          ? ev.intl.string(ev.t.Ifvd7O)
                          : A.type === u.Z.PROFILE_EFFECT
                            ? ev.intl.string(ev.t.pxunjo)
                            : ev.intl.string(ev.t.IA8coq),
                  }),
                ],
              }),
            ],
          });
        },
        eg = (e) => {
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
                ? ef.previewsContainerInner
                : ef.profileEffectPreviewsContainerInner,
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
              a && (0, i.jsx)(eI, { user: n }),
            ],
          });
        },
        eP = (e) => {
          let { author: t } = e;
          return (0, _.e5)({
            ...(0, b.ZP)({
              author: t,
              channelId: "1337",
              content: ev.intl.string(ev.t.d5YwKy),
            }),
            state: ed.yb.SENT,
            id: "0",
          });
        },
        eI = (e) => {
          let { user: t } = e,
            n = eP({ author: t });
          return (0, i.jsx)(f.FocusBlock, {
            children: (0, i.jsxs)(f.Card, {
              className: ef.chatPreview,
              outline: !0,
              "aria-hidden": !0,
              children: [
                (0, i.jsx)(
                  j.Z,
                  {
                    className: ef.mockMessage,
                    author: (0, w.ZH)(n),
                    message: n,
                  },
                  n.id,
                ),
                (0, i.jsxs)("div", {
                  className: ef.mockInput,
                  children: [
                    (0, i.jsx)(f.CirclePlusIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.mockInputButton,
                    }),
                    (0, i.jsx)(f.ReactionIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ef.mockInputButton,
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
          C = (0, m.e7)([y.default], () => y.default.getCurrentUser()),
          x = (0, M.ff)(a),
          p = (0, M.o0)(a),
          h = (0, ea.N)(a, x),
          I = (0, es.W)(a, p);
        o()(null != I, "Selected product should not be null");
        let { analyticsLocations: _ } = (0, P.ZP)([
          ...v,
          g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
        ]);
        (0, Y.u9)(I);
        let [b] = I.items;
        if (
          (l.useEffect(() => {
            null != C && (0, Z.Z)(C.id, C.getAvatarURL(void 0, 80));
          }, [C]),
          l.useEffect(() => {
            let e =
              (null == b ? void 0 : b.type) === u.Z.AVATAR_DECORATION
                ? "avatar decoration"
                : "profile effect";
            B.default.track(ed.rMx.OPEN_MODAL, {
              type: ed.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
              source: d,
              location_stack: _,
              sku_id: I.skuId,
              product_type: e,
            }),
              I.items.map(O.oK);
          }, [d, _, null == b ? void 0 : b.type, I.skuId, I.items]),
          null == C)
        )
          return null;
        let w = (0, ec.ZS)(s.skuId);
        return (0, i.jsx)(P.Gt, {
          value: _,
          children: (0, i.jsx)(f.ModalRoot, {
            hideShadow: !0,
            className: ef.modalRoot,
            returnRef: c,
            transitionState: n,
            size: f.ModalSize.DYNAMIC,
            children: (0, i.jsxs)(f.ModalContent, {
              className: ef.modalContent,
              children: [
                (0, i.jsx)(eh, {
                  user: C,
                  product: a,
                  category: s,
                  onClose: r,
                }),
                (0, i.jsxs)("div", {
                  className:
                    I.type === u.Z.AVATAR_DECORATION
                      ? ef.collectiblePreviewsContainerWithChat
                      : ef.collectiblePreviewsContainerNoChat,
                  children: [
                    (0, i.jsx)(Q.Z, {
                      asset:
                        null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                      size: (0, ei.ML)(540),
                      className: ef.categoryBanner,
                      categoryBannerOverride: w,
                    }),
                    (0, i.jsx)(eg, { user: C, product: null != h ? h : I }),
                    (0, i.jsxs)("div", {
                      className: ef.profilePreviewHeader,
                      children: [
                        (0, i.jsx)("div", {
                          className: ef.titleImageContainer,
                          children: (0, i.jsx)("img", {
                            className: ef.titleImage,
                            style: null == w ? void 0 : w.pdpLogoStyle,
                            src: (0, F.uV)(s.logo, { size: $.n }),
                            alt: s.name,
                          }),
                        }),
                        (0, i.jsx)(f.ModalCloseButton, {
                          onClick: r,
                          className: ef.modalCloseButton,
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
    435216: function (e, t, n) {
      e.exports = {
        container: "container_e3e57a",
        darkText: "darkText_e3e57a",
        lightText: "lightText_e3e57a",
      };
    },
    547804: function (e, t, n) {
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
//# sourceMappingURL=a2b56750f82cb8cda0e2.js.map
