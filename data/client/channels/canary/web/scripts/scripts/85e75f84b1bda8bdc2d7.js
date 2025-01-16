"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9766"],
  {
    889684: function (e, t, a) {
      a.r(t);
      var n = a(200651),
        o = a(192379),
        i = a(481060),
        s = a(230711),
        l = a(197115),
        r = a(626135),
        c = a(981631),
        d = a(474936),
        M = a(388032),
        u = a(863640);
      t.default = (e) => {
        let { transitionState: t, onClose: a } = e;
        return (
          o.useEffect(() => {
            r.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
              type: d.cd.EMOJI_AUTOCOMPLETE_MODAL,
            });
          }, []),
          (0, n.jsxs)(i.ModalRoot, {
            transitionState: t,
            size: i.ModalSize.SMALL,
            "aria-label": "",
            children: [
              (0, n.jsxs)(i.ModalContent, {
                className: u.content,
                children: [
                  (0, n.jsx)("div", { role: "image", className: u.image }),
                  (0, n.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    className: u.header,
                    children: M.intl.string(M.t.Uq1zJS),
                  }),
                  (0, n.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: M.intl.format(M.t.xPaO3t, {
                      onLearnMore: () => {
                        a(), s.Z.open(c.oAB.PREMIUM);
                      },
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(i.ModalFooter, {
                children: (0, n.jsx)(l.Z, {
                  onClick: a,
                  buttonText: "Get Nitro",
                  subscriptionTier: d.Si.TIER_2,
                  premiumModalAnalyticsLocation: {
                    page: c.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL,
                  },
                }),
              }),
              (0, n.jsx)(i.ModalCloseButton, {
                className: u.closeButton,
                onClick: a,
              }),
            ],
          })
        );
      };
    },
    863640: function (e, t, a) {
      e.exports = {
        closeButton: "closeButton_e7a3a7",
        content: "content_e7a3a7",
        image: "image_e7a3a7",
        header: "header_e7a3a7",
      };
    },
  },
]);
//# sourceMappingURL=85e75f84b1bda8bdc2d7.js.map
