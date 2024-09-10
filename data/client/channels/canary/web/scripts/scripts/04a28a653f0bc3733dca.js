"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9766"],
  {
    889684: function (e, a, t) {
      t.r(a);
      var o = t(735250),
        s = t(470079),
        n = t(481060),
        i = t(230711),
        r = t(197115),
        l = t(626135),
        c = t(981631),
        M = t(474936),
        d = t(689938),
        E = t(831318);
      a.default = (e) => {
        let { transitionState: a, onClose: t } = e;
        return (
          s.useEffect(() => {
            l.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
              type: M.cd.EMOJI_AUTOCOMPLETE_MODAL,
            });
          }, []),
          (0, o.jsxs)(n.ModalRoot, {
            transitionState: a,
            size: n.ModalSize.SMALL,
            "aria-label": "",
            children: [
              (0, o.jsxs)(n.ModalContent, {
                className: E.content,
                children: [
                  (0, o.jsx)("div", { role: "image", className: E.image }),
                  (0, o.jsx)(n.Heading, {
                    variant: "heading-xl/semibold",
                    className: E.header,
                    children:
                      d.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_HEADER,
                  }),
                  (0, o.jsx)(n.Text, {
                    variant: "text-md/normal",
                    children:
                      d.Z.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_BLURB.format(
                        {
                          onLearnMore: () => {
                            t(), i.Z.open(c.oAB.PREMIUM);
                          },
                        },
                      ),
                  }),
                ],
              }),
              (0, o.jsx)(n.ModalFooter, {
                children: (0, o.jsx)(r.Z, {
                  onClick: t,
                  buttonText: "Get Nitro",
                  subscriptionTier: M.Si.TIER_2,
                  premiumModalAnalyticsLocation: {
                    page: c.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL,
                  },
                }),
              }),
              (0, o.jsx)(n.ModalCloseButton, {
                className: E.closeButton,
                onClick: t,
              }),
            ],
          })
        );
      };
    },
    831318: function (e, a, t) {
      e.exports = {
        closeButton: "closeButton_e7a3a7",
        content: "content_e7a3a7",
        image: "image_e7a3a7",
        header: "header_e7a3a7",
      };
    },
  },
]);
//# sourceMappingURL=04a28a653f0bc3733dca.js.map
