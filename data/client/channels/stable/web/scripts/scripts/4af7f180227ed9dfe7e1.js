"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70687"],
  {
    792254: function (n, t, c) {
      c.d(t, {
        Z: function () {
          return N;
        },
      });
      var e = c(442837),
        a = c(410030),
        d = c(607070),
        s = c(474936),
        o = c(231338),
        i = c(955092),
        f = c(250225),
        p = c(778441),
        r = c(238988),
        A = c(298233),
        b = c(304354),
        u = c(265704),
        l = c(85010),
        R = c(954620),
        L = c(28747),
        E = c(962658),
        C = c(29971),
        Z = c(730837),
        _ = c(95897),
        m = c(171362),
        T = c(945720);
      function N(n) {
        let t = (0, e.e7)([d.Z], () => d.Z.useReducedMotion),
          c = (0, a.ZP)();
        return t
          ? (function (n, t) {
              switch (n) {
                case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return t === o.BR.DARK ? R.Z : Z.Z;
                case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return t === o.BR.DARK ? L.Z : _.Z;
                case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return t === o.BR.DARK ? C.Z : T.Z;
                case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return t === o.BR.DARK ? E.Z : m.Z;
              }
            })(n, c)
          : (function (n, t) {
              switch (n) {
                case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return t === o.BR.DARK ? i.Z : A.Z;
                case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return t === o.BR.DARK ? f.Z : b.Z;
                case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return t === o.BR.DARK ? r.Z : l.Z;
                case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return t === o.BR.DARK ? p.Z : u.Z;
              }
            })(n, c);
      }
    },
    530329: function (n, t, c) {
      c.d(t, {
        Z: function () {
          return b;
        },
      });
      var e = c(200651),
        a = c(192379),
        d = c(120356),
        s = c.n(d),
        o = c(53691),
        i = c(378879),
        f = c(981631),
        p = c(486324),
        r = c(388032),
        A = c(173318);
      function b(n) {
        let { uploadType: t, className: c, ...d } = n,
          b = a.useCallback(() => {
            (0, i.openProfileUpsellModal)(t, void 0);
          }, [t]),
          u = a.useMemo(() => {
            switch (t) {
              case p.pC.AVATAR:
                return r.intl.format(r.t["pvw/HB"], { onClick: b });
              case p.pC.BANNER:
                return r.intl.format(r.t.aCrz1d, { onClick: b });
              default:
                return "";
            }
          }, [t, b]);
        return t === p.pC.AVATAR || t === p.pC.BANNER
          ? (0, e.jsx)(o.p, {
              text: u,
              button: r.intl.string(r.t.BmJkbW),
              buttonAnalyticsObject: { section: f.jXE.USER_PROFILE },
              className: s()(A.container, c),
              ...d,
            })
          : null;
      }
    },
    378879: function (n, t, c) {
      c.r(t),
        c.d(t, {
          default: function () {
            return E;
          },
          openProfileUpsellModal: function () {
            return L;
          },
        });
      var e = c(200651);
      c(192379);
      var a = c(481060),
        d = c(921813),
        s = c(687158),
        o = c(576635),
        i = c(594174),
        f = c(98278),
        p = c(792254),
        r = c(790527),
        A = c(474936),
        b = c(981631),
        u = c(486324),
        l = c(388032),
        R = c(761346);
      function L(n, t) {
        let d = i.default.getCurrentUser();
        return (
          null != d &&
          ((0, a.openModalLazy)(async () => {
            let { default: s } = await Promise.resolve().then(
              c.bind(c, 378879),
            );
            return (c) =>
              (0, e.jsx)(s, {
                user: d,
                imageSrc: t,
                uploadType: n,
                analyticsSource: b.Sbl.PROFILE_PANEL,
                analyticsLocation: {
                  section: b.jXE.USER_PROFILE,
                  object: b.qAy.BUTTON_CTA,
                },
                onSecondaryClick: a.closeAllModals,
                ...c,
              });
          }),
          !0)
        );
      }
      function E(n) {
        let {
            user: t,
            uploadType: c,
            imageSrc: a,
            onClose: i,
            analyticsSource: b,
            analyticsLocation: L,
            onSecondaryClick: E,
            ...C
          } = n,
          Z = (0, s.ZP)(t.id),
          { primaryColor: _, secondaryColor: m } = (0, o.Z)({
            user: t,
            displayProfile: Z,
            pendingAvatar: c === u.pC.AVATAR ? a : void 0,
            isPreview: !0,
          }),
          T = c === u.pC.AVATAR || c === u.pC.BANNER,
          N = null != a,
          g = (0, p.Z)(
            c === u.pC.AVATAR
              ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL
              : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
          );
        return T
          ? (0, e.jsx)(r.Z, {
              artURL: N ? void 0 : g,
              modalClassName: N ? R.modal : void 0,
              modalContentClassName: N ? R.modalContent : void 0,
              type:
                c === u.pC.AVATAR
                  ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL
                  : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title:
                c === u.pC.AVATAR
                  ? l.intl.string(l.t["X7tO6+"])
                  : l.intl.string(l.t.zXPa2N),
              body:
                c === u.pC.AVATAR
                  ? l.intl.string(l.t.ifCRdH)
                  : l.intl.string(l.t.yQAnf3),
              glowUp:
                c === u.pC.AVATAR
                  ? l.intl.string(l.t.ifCRdH)
                  : l.intl.string(l.t.yQAnf3),
              onSecondaryClick: () => {
                null == E || E(), (0, f.$)(i);
              },
              secondaryCTA: l.intl.string(l.t.PcTCBw),
              onClose: i,
              enableArtBoxShadow: !1,
              analyticsSource: b,
              analyticsLocation: L,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: N
                ? (0, e.jsx)("div", {
                    className: R.previewContainerParent,
                    children: (0, e.jsx)(d.Z, {
                      containerClassName: R.previewContainer,
                      user: t,
                      canUsePremiumCustomization: !0,
                      disabledInputs: !0,
                      pendingAvatar: c === u.pC.AVATAR ? a : void 0,
                      pendingBanner: c === u.pC.BANNER ? a : void 0,
                      pendingThemeColors: [_, m],
                      hideExampleButton: !0,
                    }),
                  })
                : void 0,
              ...C,
            })
          : null;
      }
    },
    955092: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/5b4dc771eb1d2e239bcba774f3589b977845bf70d179315dc2f9a531b253c6d8.png";
    },
    250225: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/577d28b05d22c43a8b3dfe5ebfc6fa278c58f03907e888db884c331d13c3ad23.png";
    },
    778441: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/7fa341ec7211b62a71a0bd433d2bafe570ada865b0fd72d695b90de4a581022a.png";
    },
    238988: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    298233: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f56fdb607f14f6ebe5a37eac65f5b8c975ea446224c06dd8aef4dd0187c81874.png";
    },
    304354: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/d1dcb0c115a836edc8cbf021a15888bdf416fd352187518f227b8e905a20227f.png";
    },
    265704: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/b344b1fe2b3d2cc66466f09c46b4e2dcce56a16f1ff047aed69155fa4cff39a8.png";
    },
    85010: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    954620: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/87534097f7ff0b0a3c6164bbcaad8968b2e7f8dbbdc59776c782cf14dba4c53c.png";
    },
    28747: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/5e27b7f8865a87dd6eec34188b96bb51924a55252b16f9ebfb8aa72973304bbd.png";
    },
    962658: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/15940a9acc0fab74b37e730350d6cef34289948e14b6d73e90432c19b4a51beb.png";
    },
    29971: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
    730837: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/fab9a25304af3a77b100b6beabd1d46013120289193faa37e9fa82977f133322.png";
    },
    95897: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/ef7a0b437305ab3a5ccda00a5ecd4eddd69544a90eac121e5c984ca63dd93b9e.png";
    },
    171362: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/71744284320fdf451ac09af729ea60d3fde7ef492f7c7e8c5657387c20c2b9c6.png";
    },
    945720: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
  },
]);
//# sourceMappingURL=4af7f180227ed9dfe7e1.js.map
