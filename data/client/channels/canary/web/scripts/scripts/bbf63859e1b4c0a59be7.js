"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77650"],
  {
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        r = n(772848),
        s = n(363969);
      let c = (0, r.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: o = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: a()(s.button, n, { [s.open]: t, [s.withHighlight]: o }),
          children: [
            o &&
              (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                  id: c,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, i.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, i.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, i.jsx)("path", {
                  stroke: o ? "url(#".concat(c, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: o ? "url(#".concat(c, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, t, n) {
      var i = n(200651),
        o = n(192379),
        a = n(481060),
        r = n(372900);
      t.Z = o.memo(function (e) {
        var t, n, s, c;
        let {
            user: d,
            size: l = a.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": _ = !1,
            ...f
          } = e,
          h = o.useContext(r.Z);
        return (0, i.jsx)(a.Avatar, {
          src:
            ((t = d),
            (n = (0, a.getAvatarSize)(l)),
            (s = u),
            (c = h),
            t.getAvatarURL(c, n, s)),
          size: l,
          "aria-label": _ ? void 0 : d.username,
          "aria-hidden": _,
          ...f,
        });
      });
    },
    435626: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var i,
        o,
        a = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        c = n(481060),
        d = n(493773),
        l = n(100527),
        u = n(906732),
        _ = n(1585),
        f = n(821982),
        h = n(125988),
        p = n(228624),
        m = n(267097),
        v = n(109213),
        b = n(626135),
        g = n(333867),
        C = n(963249),
        I = n(981631),
        S = n(217702),
        E = n(474936),
        T = n(388032),
        A = n(521050),
        x = n(476945),
        y = n(945182);
      function B(e) {
        let {
          analyticsLocations: t,
          transitionState: n,
          onClose: i,
          giftRecipient: o,
          analyticsObject: r,
        } = e;
        return (
          (0, d.Z)(() => {
            b.default.track(I.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
              location: r,
              location_stack: t,
            });
          }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(j, {}),
              (0, a.jsxs)(c.ModalRoot, {
                size: c.ModalSize.DYNAMIC,
                transitionState: n,
                className: A.modalRoot,
                children: [
                  (0, a.jsxs)(c.ModalHeader, {
                    className: A.header,
                    separator: !1,
                    children: [
                      (0, a.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H4,
                        children: T.intl.string(T.t.YBGjsr),
                      }),
                      (0, a.jsx)(c.ModalCloseButton, {
                        onClick: () => {
                          b.default.track(I.rMx.MODAL_DISMISSED, {
                            type: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                            location_object: I.qAy.BUTTON_CTA,
                          }),
                            i();
                        },
                        className: A.cursorPointer,
                      }),
                    ],
                  }),
                  (0, a.jsx)(c.ModalContent, {
                    className: A.modalContent,
                    children: (0, a.jsx)(O, {
                      analyticsLocations: t,
                      giftRecipient: o,
                      analyticsObject: r,
                      onClose: i,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      ((i = o || (o = {}))[(i.NITRO = 0)] = "NITRO"),
        (i[(i.NITRO_BASIC = 1)] = "NITRO_BASIC"),
        (i[(i.SHOP = 2)] = "SHOP");
      let j = () => ((0, m.Z)(), null);
      function O(e) {
        let { giftRecipient: t, analyticsObject: n, onClose: i } = e,
          { showBothNitroSkusInCategorySelect: o } = v.G.useExperiment(
            { location: "gift-button" },
            { autoTrackExposure: !1 },
          ),
          r = (0, p.hv)("CategoryButtons"),
          { analyticsLocations: d } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL),
          _ = (e) => {
            e && i();
          },
          f = (e) => {
            let i = I.Qqv.NITRO_SKU_SELECTION;
            e === E.Si.TIER_2
              ? (i = I.Qqv.NITRO_STANDARD)
              : e === E.Si.TIER_0 && (i = I.Qqv.NITRO_BASIC),
              (0, C.Z)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: E.Wt.DM_CHANNEL,
                initialPlanId: null,
                analyticsLocations: d,
                subscriptionTier: e,
                analyticsObject: {
                  ...n,
                  section: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                  object: I.qAy.GIFT_CATEGORY_OPTION,
                  objectType: i,
                },
                onClose: _,
              });
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Clickable, {
              onClick: () => f(o ? E.Si.TIER_2 : void 0),
              children: (0, a.jsxs)("div", {
                className: s()(A.categoryButton, A.nitroButton),
                children: [
                  (0, a.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: A.buttonText,
                    children: T.intl.string(T.t["lG6a5+"]),
                  }),
                  (0, a.jsx)(R, { imageType: 0 }),
                ],
              }),
            }),
            o &&
              (0, a.jsx)(c.Clickable, {
                onClick: () => f(E.Si.TIER_0),
                children: (0, a.jsxs)("div", {
                  className: s()(A.nitroBasicButton, A.categoryButton),
                  children: [
                    (0, a.jsx)(c.Text, {
                      variant: "display-sm",
                      color: "always-white",
                      className: A.buttonText,
                      children: T.intl.string(T.t["t9uG/v"]),
                    }),
                    (0, a.jsx)(R, { imageType: 1 }),
                  ],
                }),
              }),
            (0, a.jsx)(c.Clickable, {
              onClick: () => {
                (0, g.Z)({
                  isGift: !0,
                  giftingOrigin: E.Wt.DM_CHANNEL,
                  analyticsLocations: d,
                  analyticsObject: n,
                  giftRecipient: t,
                  onClose: _,
                  variantsReturnStyle: r,
                });
              },
              children: (0, a.jsxs)("div", {
                className: s()(A.shopButton, A.categoryButton),
                children: [
                  (0, a.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: A.buttonText,
                    children: T.intl.string(T.t.gFlB9f),
                  }),
                  (0, a.jsx)(R, { imageType: 2 }),
                ],
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { imageType: t } = e,
          { avatarPlaceholderSrc: n } = (0, h.Z)({
            size: (0, _.y9)(c.AvatarSizes.SIZE_80),
          }),
          i = (0, f.Z)(
            "a_c3cffc19e9784f7d0b005eecdf1b566e",
            c.AvatarSizes.SIZE_80,
            !1,
          );
        return 0 === t || 1 === t
          ? (0, a.jsx)("div", {
              className: A.wumpusImageContainer,
              children: (0, a.jsx)(c.Image, {
                src: 1 === t ? x : y,
                mediaLayoutType: S.hV.RESPONSIVE,
                width: 122,
                height: 110,
                zoomable: !1,
              }),
            })
          : 2 === t
            ? (0, a.jsx)("div", {
                className: A.shopImageContainer,
                children: (0, a.jsx)(c.Avatar, {
                  src: n,
                  avatarDecoration: i,
                  size: c.AvatarSizes.SIZE_80,
                  "aria-hidden": !0,
                }),
              })
            : void 0;
      }
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return d;
        },
        _: function () {
          return l;
        },
      });
      var i = n(544891),
        o = n(570140),
        a = n(480294),
        r = n(814443),
        s = n(428598),
        c = n(981631);
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return r.Z.needsRefresh()
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: c.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function l() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && a.Z.hasConsented(c.pjP.PERSONALIZATION)
          ? (o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: c.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  o.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, o, a, r, s, c;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (o = e.vc_rank) && void 0 !== o ? o : 0,
                        serverMessageProbability:
                          null !== (a = e.server_message_probability) &&
                          void 0 !== a
                            ? a
                            : 0,
                        serverMessageRank:
                          null !== (r = e.server_message_rank) && void 0 !== r
                            ? r
                            : 0,
                        communicationProbability:
                          null !== (s = e.communication_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        communicationRank:
                          null !== (c = e.communication_rank) && void 0 !== c
                            ? c
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  o.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      n(47120);
      var i,
        o = n(442837),
        a = n(570140),
        r = n(699516),
        s = n(496232);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let d = new Map(),
        l = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        _ = { ...u };
      function f() {
        d = new Map(
          _.userAffinities
            .filter((e) => !r.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class h extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(r.Z),
            null != e &&
              ((_.userAffinities = e.userAffinities),
              (_.lastFetched = e.lastFetched),
              f()),
            this.syncWith([r.Z], f);
        }
        shouldFetch() {
          if (!l) return Date.now() - _.lastFetched > s.K;
        }
        isFetching() {
          return l;
        }
        getUserAffinities() {
          return _.userAffinities;
        }
        getUserAffinitiesMap() {
          return d;
        }
        compare(e, t) {
          var n, i, o, a;
          return (
            (null !==
              (o =
                null === (n = d.get(t)) || void 0 === n
                  ? void 0
                  : n.communicationProbability) && void 0 !== o
              ? o
              : 0) -
            (null !==
              (a =
                null === (i = d.get(e)) || void 0 === i
                  ? void 0
                  : i.communicationProbability) && void 0 !== a
              ? a
              : 0)
          );
        }
        getUserAffinity(e) {
          return d.get(e);
        }
        getState() {
          return _;
        }
      }
      c(h, "displayName", "UserAffinitiesStoreV2"),
        c(h, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new h(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            l = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (_.lastFetched = Date.now()), (l = !1), (_.userAffinities = t), f();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            l = !1;
          },
          LOGOUT: function () {
            (_ = { ...u }), (d = new Map()), (l = !1);
          },
        }));
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(331595);
      function a(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: a = "currentColor",
          foreground: r,
          ...s
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, o.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: r,
            fill: a,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    363969: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    695935: function (e, t, n) {
      e.exports = { banner: "banner_da16fe" };
    },
    493200: function (e, t, n) {
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
        seaonalButtonGradient: "seaonalButtonGradient_a0e502",
        seasonalBanner: "seasonalBanner_a0e502",
      };
    },
    259319: function (e, t, n) {
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    638079: function (e, t, n) {
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    379252: function (e, t, n) {
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    814335: function (e, t, n) {
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    283314: function (e, t, n) {
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    484495: function (e, t, n) {
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    463313: function (e, t, n) {
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
        navigateToShopButton: "navigateToShopButton_dcb6d5",
        navigateToShopBody: "navigateToShopBody_dcb6d5",
        navigateToShopTextWrapper: "navigateToShopTextWrapper_dcb6d5",
        shopIcon: "shopIcon_dcb6d5",
      };
    },
    457207: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    786698: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    521050: function (e, t, n) {
      e.exports = {
        categoryButton: "categoryButton_ce8be8",
        modalRoot: "modalRoot_ce8be8",
        modalContent: "modalContent_ce8be8",
        header: "header_ce8be8",
        wumpusImageContainer: "wumpusImageContainer_ce8be8",
        shopImageContainer: "shopImageContainer_ce8be8",
        nitroButton: "nitroButton_ce8be8",
        nitroBasicButton: "nitroBasicButton_ce8be8",
        shopButton: "shopButton_ce8be8",
        cursorPointer: "cursorPointer_ce8be8",
        buttonText: "buttonText_ce8be8",
      };
    },
    537616: function (e, t, n) {
      e.exports = {
        previewContainer: "previewContainer_c99d75",
        previewContainerSetHeight: "previewContainerSetHeight_c99d75",
        previewContainerAnimation: "previewContainerAnimation_c99d75",
        preview: "preview_c99d75",
        previewForCollected: "previewForCollected_c99d75 preview_c99d75",
        purchasedEffect: "purchasedEffect_c99d75",
      };
    },
  },
]);
//# sourceMappingURL=bbf63859e1b4c0a59be7.js.map
