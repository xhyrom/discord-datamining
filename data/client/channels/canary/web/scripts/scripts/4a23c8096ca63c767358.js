"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75613"],
  {
    178632: function (e) {
      e.exports = "/assets/34283943e9d6d8c8c084.svg";
    },
    263954: function (e, o, n) {
      n.d(o, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        t = n.n(i),
        l = n(775475);
      function s(e) {
        let { icon: o, iconClassName: n, description: i, color: s } = e;
        return (0, r.jsxs)("div", {
          className: l.perkRow,
          children: [
            (0, r.jsx)("div", {
              className: l.perkIconContainer,
              children: (0, r.jsx)(o, {
                color: null != s ? s : "currentColor",
                className: t()(l.perkIcon, n),
              }),
            }),
            (0, r.jsx)("div", { className: l.perkDescription, children: i }),
          ],
        });
      }
    },
    72691: function (e, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return v;
          },
        });
      var r = n(200651),
        i = n(192379),
        t = n(120356),
        l = n.n(t),
        s = n(442837),
        c = n(481060),
        a = n(570140),
        u = n(355467),
        p = n(821849),
        d = n(15640),
        f = n(563132),
        m = n(409813),
        h = n(104494),
        x = n(639119),
        _ = n(165583),
        k = n(197115),
        C = n(185139),
        I = n(263954),
        j = n(706454),
        g = n(853872),
        b = n(930153),
        P = n(74538),
        S = n(937615),
        T = n(981631),
        N = n(474936),
        L = n(388032),
        R = n(866803);
      let B = (e) => {
          let { locale: o } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(I.Z, {
                icon: c.StickerIcon,
                iconClassName: R.iconColorPurple,
                description: L.intl.string(L.t.uAfKTU),
              }),
              (0, r.jsx)(I.Z, {
                icon: c.BoostTier2SimpleIcon,
                iconClassName: R.iconColorPink,
                description: L.intl.formatToPlainString(L.t.sWnv5O, {
                  numGuildSubscriptions: N.cb,
                  discountPercent: (0, b.T3)(o, N.Rr / 100),
                }),
              }),
              (0, r.jsx)(I.Z, {
                icon: c.ReactionIcon,
                iconClassName: R.iconColorYellow,
                description: L.intl.string(L.t.pqHIf3),
              }),
            ],
          });
        },
        E = (e) => {
          let {
              trialOffer: o,
              discountOffer: i,
              isLoading: t,
              price: a,
              onClose: u,
            } = e,
            p = (0, s.e7)([j.default], () => j.default.locale),
            d = null != o || null != i;
          return (0, r.jsxs)("div", {
            className: R.wrapper,
            children: [
              (0, r.jsx)(c.ModalCloseButton, {
                onClick: u,
                className: R.closeButton,
              }),
              d && (0, r.jsx)(_.dz, { className: R.premiumTrialBadge }),
              (0, r.jsx)("img", {
                className: l()(R.heroImage, { [R.heroImageWithTrialOffer]: d }),
                src: n(178632),
                alt: "",
              }),
              t
                ? (0, r.jsx)(c.Spinner, {})
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: R.heading,
                        children:
                          null == a
                            ? (0, r.jsx)(c.Spinner, {
                                type: c.Spinner.Type.PULSING_ELLIPSIS,
                              })
                            : L.intl.format(L.t.TBsJfX, {
                                monthlyPrice: (0, S.T4)(a.amount, a.currency),
                              }),
                      }),
                      (0, r.jsx)("div", {
                        className: R.perks,
                        children: (0, r.jsx)(B, { locale: p }),
                      }),
                    ],
                  }),
            ],
          });
        },
        M = (e) => {
          let { trialOffer: o, discountOffer: n, onClose: i } = e,
            t = { section: T.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
          return (0, r.jsxs)(c.ModalFooter, {
            className: R.footer,
            children: [
              (0, r.jsx)(c.Button, {
                onClick: i,
                size: c.Button.Sizes.SMALL,
                color: c.Button.Colors.PRIMARY,
                look: c.Button.Looks.LINK,
                children: L.intl.string(L.t.cpT0Cg),
              }),
              (0, r.jsx)(k.Z, {
                buttonText:
                  null != o || null != n
                    ? L.intl.string(L.t["Gd/XHB"])
                    : void 0,
                premiumModalAnalyticsLocation: t,
                subscriptionTier: N.Si.TIER_2,
                size: c.Button.Sizes.SMALL,
                color: c.Button.Colors.GREEN,
                onClick: () => {
                  i();
                },
              }),
            ],
          });
        };
      function v(e) {
        let { onClose: o, ...n } = e,
          t = (0, d.V)(),
          l = (0, s.e7)([g.Z], () => g.Z.hasFetchedPaymentSources),
          _ = t && l,
          k = (0, x.N)(),
          I = (0, h.Ng)();
        i.useEffect(() => {
          a.Z.wait(() => {
            (0, u.tZ)(), (0, p.Y2)(null, null, T.JjL.DISCOVERY);
          });
        }, []);
        let j = _ ? P.ZP.getDefaultPrice(N.Xh.PREMIUM_MONTH_TIER_2) : null;
        return (0, r.jsx)(f.PaymentContextProvider, {
          activeSubscription: null,
          stepConfigs: [],
          skuIDs: [],
          children: (0, r.jsx)(c.ModalRoot, {
            ...n,
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            children: (0, r.jsx)(C.Z, {
              hideBreadcrumbs: !0,
              body: (0, r.jsx)(E, {
                trialOffer: k,
                discountOffer: I,
                isLoading: !_,
                price: j,
                onClose: o,
              }),
              footer: (0, r.jsx)(M, {
                trialOffer: k,
                discountOffer: I,
                onClose: o,
              }),
              steps: [m.h8.PREMIUM_UPSELL],
              currentStep: m.h8.PREMIUM_UPSELL,
            }),
          }),
        });
      }
    },
    775475: function (e, o, n) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
    866803: function (e, o, n) {
      e.exports = {
        wrapper: "wrapper_fe3b99",
        heroImage: "heroImage_fe3b99",
        heroImageWithTrialOffer: "heroImageWithTrialOffer_fe3b99",
        premiumTrialBadge: "premiumTrialBadge_fe3b99",
        closeButton: "closeButton_fe3b99",
        heading: "heading_fe3b99",
        perks: "perks_fe3b99",
        iconColorYellow: "iconColorYellow_fe3b99 icon_fe3b99",
        iconColorPink: "iconColorPink_fe3b99 icon_fe3b99",
        iconColorPurple: "iconColorPurple_fe3b99 icon_fe3b99",
        footer: "footer_fe3b99",
      };
    },
  },
]);
//# sourceMappingURL=4a23c8096ca63c767358.js.map
