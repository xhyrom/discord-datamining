"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89675"],
  {
    438471: function (e) {
      e.exports = "/assets/75f8d0fe6b6ba49eb369.svg";
    },
    146747: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return b;
          },
        });
      var o = t(200651),
        n = t(192379),
        s = t(481060),
        a = t(100527),
        i = t(906732),
        l = t(563132),
        c = t(409813),
        d = t(185139),
        u = t(263954),
        p = t(267642),
        f = t(678558),
        h = t(981631),
        x = t(388032),
        m = t(316798),
        j = t(232186);
      let k = "premium-guild-subscription-upsell-modal-header";
      function g(e) {
        let { title: r, subtitle: t, image: n } = e;
        return (0, o.jsxs)("div", {
          className: m.header,
          children: [
            (0, o.jsx)(s.Heading, {
              variant: "heading-xl/semibold",
              id: k,
              color: "header-primary",
              className: j.marginBottom8,
              children: r,
            }),
            (0, o.jsx)(s.Text, {
              variant: "text-md/normal",
              className: m.subtitleText,
              children: t,
            }),
            n,
          ],
        });
      }
      let I = (e) => {
          let {
            onClose: r,
            perks: t,
            perkIntro: n = x.intl.string(x.t.Dr3Goa),
            headerProps: a,
          } = e;
          return (0, o.jsxs)("div", {
            className: m.wrapper,
            children: [
              (0, o.jsx)(s.ModalCloseButton, {
                className: m.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, o.jsx)(_, { headerProps: a, perkIntro: n }),
              (0, o.jsx)("div", {
                className: m.perks,
                children: t.map((e, r) => {
                  let {
                    icon: t,
                    iconClassName: n,
                    description: s,
                    color: a,
                  } = e;
                  return (0, o.jsx)(
                    u.Z,
                    { icon: t, iconClassName: n, description: s, color: a },
                    r,
                  );
                }),
              }),
            ],
          });
        },
        _ = (e) => {
          let { headerProps: r, perkIntro: a } = e;
          return (0, o.jsxs)(n.Fragment, {
            children: [
              null != r
                ? (0, o.jsx)(g, { ...r })
                : (0, o.jsx)("img", {
                    className: m.heroImage,
                    src: t(438471),
                    alt: x.intl.string(x.t.PkcaAA),
                  }),
              (0, o.jsx)(s.Text, {
                variant: "text-md/normal",
                className: m.heading,
                children: a,
              }),
            ],
          });
        },
        C = (e) => {
          let {
              guild: r,
              targetBoostedGuildTier: t,
              onClose: n,
              analyticsSourceLocation: a,
            } = e,
            i = {
              section: h.jXE.PREMIUM_GUILD_UPSELL_MODAL,
              object: h.qAy.BUTTON_CTA,
              objectType: null != t ? (0, p.ge)(t) : null,
            };
          return (0, o.jsxs)(s.ModalFooter, {
            className: m.footer,
            children: [
              (0, o.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: () => {
                  n();
                },
                children: x.intl.string(x.t.cpT0Cg),
              }),
              (0, o.jsx)(f.Z, {
                analyticsLocation: i,
                analyticsSourceLocation: a,
                guild: r,
                targetBoostedGuildTier: t,
                onClose: () => {
                  n();
                },
              }),
            ],
          });
        };
      function b(e) {
        let {
            analyticsSourceLocation: r,
            guild: t,
            targetBoostedGuildTier: n,
            perks: u,
            perkIntro: p,
            headerProps: f,
            onClose: h,
            ...x
          } = e,
          { analyticsLocations: m } = (0, i.ZP)(a.Z.ACTIVITY_DIRECTORY);
        return (0, o.jsx)(i.Gt, {
          value: m,
          children: (0, o.jsx)(l.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, o.jsx)(s.ModalRoot, {
              ...x,
              "aria-labelledby": k,
              children: (0, o.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, o.jsx)(I, {
                  onClose: h,
                  perks: u,
                  perkIntro: p,
                  headerProps: f,
                }),
                footer: (0, o.jsx)(C, {
                  guild: t,
                  targetBoostedGuildTier: n,
                  onClose: h,
                  analyticsSourceLocation: r,
                }),
                steps: [c.h8.PREMIUM_GUILD_UPSELL],
                currentStep: c.h8.PREMIUM_GUILD_UPSELL,
              }),
            }),
          }),
        });
      }
    },
    263954: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var o = t(200651);
      t(192379);
      var n = t(120356),
        s = t.n(n),
        a = t(775475);
      function i(e) {
        let { icon: r, iconClassName: t, description: n, color: i } = e;
        return (0, o.jsxs)("div", {
          className: a.perkRow,
          children: [
            (0, o.jsx)("div", {
              className: a.perkIconContainer,
              children: (0, o.jsx)(r, {
                color: null != i ? i : "currentColor",
                className: s()(a.perkIcon, t),
              }),
            }),
            (0, o.jsx)("div", { className: a.perkDescription, children: n }),
          ],
        });
      }
    },
    316798: function (e, r, t) {
      e.exports = {
        wrapper: "wrapper_fcea2f",
        heroImage: "heroImage_fcea2f",
        closeButton: "closeButton_fcea2f",
        heading: "heading_fcea2f",
        perks: "perks_fcea2f",
        footer: "footer_fcea2f",
        header: "header_fcea2f",
        subtitleText: "subtitleText_fcea2f",
      };
    },
    775475: function (e, r, t) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
  },
]);
//# sourceMappingURL=e4c43685e9e3e49917bd.js.map
