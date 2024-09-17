"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4747"],
  {
    51125: function (e) {
      e.exports = "/assets/7c915af96aa37d5a4fe4.svg";
    },
    47268: function (e) {
      e.exports = "/assets/357da48609c8d3354a8b.svg";
    },
    89057: function (e, a, n) {
      n.d(a, {
        Vq: function () {
          return B;
        },
        c8: function () {
          return k;
        },
        oQ: function () {
          return x;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(120356),
        o = n.n(t),
        i = n(692547),
        s = n(780384),
        c = n(481060),
        d = n(410030),
        f = n(600164),
        l = n(63063),
        _ = n(211242),
        u = n(981631),
        g = n(689938),
        m = n(943981),
        h = n(51125),
        b = n(47268);
      function p(e) {
        let { className: a } = e,
          n = (0, d.ZP)(),
          t = (0, s.wj)(n) ? h : b;
        return (0, r.jsxs)("div", {
          className: o()(m.container, a),
          children: [
            (0, r.jsx)(c.Heading, {
              className: m.header,
              variant: "heading-xl/semibold",
              children: g.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, r.jsxs)(c.Text, {
              className: m.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, r.jsx)("p", {
                  children: g.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, r.jsx)("p", {
                  children: g.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: l.Z.getArticleURL(u.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, r.jsx)("img", {
              src: t,
              className: m.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function k() {
        return (0, r.jsx)(p, { className: m.settings });
      }
      function B(e) {
        let { onClose: a } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(c.ModalHeader, {
              className: m.blockedPaymentsModalHeader,
              justify: f.Z.Justify.END,
              children: (0, r.jsx)(c.ModalCloseButton, { onClick: a }),
            }),
            (0, r.jsx)(c.ModalContent, {
              className: m.blockedPaymentsModalContent,
              children: (0, r.jsx)(p, { className: m.modal }),
            }),
          ],
        });
      }
      function x(e) {
        let { className: a } = e;
        return (0, _.Q)()
          ? (0, r.jsxs)(c.Card, {
              className: o()(m.blockedPaymentsWarning, a),
              type: c.Card.Types.CUSTOM,
              children: [
                (0, r.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: m.blockedPaymentsWarningIcon,
                  color: i.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, r.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  children:
                    g.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                      helpdeskArticle: l.Z.getArticleURL(
                        u.BhN.BLOCKED_PAYMENTS,
                      ),
                    }),
                }),
              ],
            })
          : null;
      }
    },
    943981: function (e, a, n) {
      e.exports = {
        container: "container_f1f9c9",
        header: "header_f1f9c9",
        description: "description_f1f9c9",
        splashImage: "splashImage_f1f9c9",
        settings: "settings_f1f9c9",
        modal: "modal_f1f9c9",
        blockedPaymentsModalHeader: "blockedPaymentsModalHeader_f1f9c9",
        blockedPaymentsModalContent: "blockedPaymentsModalContent_f1f9c9",
        blockedPaymentsWarningIcon: "blockedPaymentsWarningIcon_f1f9c9",
        blockedPaymentsWarning: "blockedPaymentsWarning_f1f9c9",
      };
    },
    677825: function (e, a, n) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    920667: function (e, a, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    244203: function (e, a, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    83615: function (e, a, n) {
      e.exports = {
        tier2Animation: "tier2Animation_bfbba7",
        panningAnimation: "panningAnimation_bfbba7",
        tier2Background: "tier2Background_bfbba7 panningAnimationInner_bfbba7",
        tier2Foreground: "tier2Foreground_bfbba7 panningAnimationInner_bfbba7",
        guildWrapper: "guildWrapper_bfbba7",
        guildBackground: "guildBackground_bfbba7",
        guildStar: "guildStar_bfbba7",
        sequencedAnimation: "sequencedAnimation_bfbba7",
      };
    },
    324415: function (e, a, n) {
      e.exports = {
        headerBackground: "headerBackground_af10a6",
        tier2HeaderBackground:
          "tier2HeaderBackground_af10a6 headerBackground_af10a6",
        tier2HeaderBackgroundWinterTheme:
          "tier2HeaderBackgroundWinterTheme_af10a6 headerBackground_af10a6",
        snow: "snow_af10a6",
        headerTop: "headerTop_af10a6",
        headerIcon: "headerIcon_af10a6",
        nonTier2: "nonTier2_af10a6",
        price: "price_af10a6",
        closeButton: "closeButton_af10a6",
        trialBadgeContainer: "trialBadgeContainer_af10a6",
        trialOfferText: "trialOfferText_af10a6",
        tier0TrialOffer: "tier0TrialOffer_af10a6",
        trialBadgeSparkles: "trialBadgeSparkles_af10a6",
      };
    },
    251300: function (e, a, n) {
      e.exports = {
        modalHeader: "modalHeader_a27f2f",
        modalHeaderCustomGift: "modalHeaderCustomGift_a27f2f",
        closeButton: "closeButton_a27f2f",
        header: "header_a27f2f",
        headerAnimation: "headerAnimation_a27f2f",
        giftNitroInfo: "giftNitroInfo_a27f2f",
      };
    },
  },
]);
//# sourceMappingURL=2b8c32b890a0cbb21ee5.js.map
