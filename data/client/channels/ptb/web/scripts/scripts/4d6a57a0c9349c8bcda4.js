"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97195"],
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
          return x;
        },
        c8: function () {
          return k;
        },
        oQ: function () {
          return B;
        },
      });
      var t = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        i = n(692547),
        s = n(780384),
        d = n(481060),
        c = n(410030),
        l = n(600164),
        f = n(63063),
        u = n(211242),
        m = n(981631),
        g = n(388032),
        _ = n(801140),
        h = n(51125),
        b = n(47268);
      function p(e) {
        let { className: a } = e,
          n = (0, c.ZP)(),
          r = (0, s.wj)(n) ? h : b;
        return (0, t.jsxs)("div", {
          className: o()(_.container, a),
          children: [
            (0, t.jsx)(d.Heading, {
              className: _.header,
              variant: "heading-xl/semibold",
              children: g.intl.string(g.t.vwMEHR),
            }),
            (0, t.jsxs)(d.Text, {
              className: _.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, t.jsx)("p", { children: g.intl.string(g.t.fev8MT) }),
                (0, t.jsx)("p", {
                  children: g.intl.format(g.t.IHxEJS, {
                    helpdeskArticle: f.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, t.jsx)("img", {
              src: r,
              className: _.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function k() {
        return (0, t.jsx)(p, { className: _.settings });
      }
      function x(e) {
        let { onClose: a } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(d.ModalHeader, {
              className: _.blockedPaymentsModalHeader,
              justify: l.Z.Justify.END,
              children: (0, t.jsx)(d.ModalCloseButton, { onClick: a }),
            }),
            (0, t.jsx)(d.ModalContent, {
              className: _.blockedPaymentsModalContent,
              children: (0, t.jsx)(p, { className: _.modal }),
            }),
          ],
        });
      }
      function B(e) {
        let { className: a } = e;
        return (0, u.Q)()
          ? (0, t.jsxs)(d.Card, {
              className: o()(_.blockedPaymentsWarning, a),
              type: d.Card.Types.CUSTOM,
              children: [
                (0, t.jsx)(d.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: _.blockedPaymentsWarningIcon,
                  color: i.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, t.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: g.intl.format(g.t.NYkcCg, {
                    helpdeskArticle: f.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    405083: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return f;
          },
        });
      var t = n(200651);
      n(192379);
      var r = n(355467),
        o = n(106976),
        i = n(703656),
        s = n(914010),
        d = n(563132),
        c = n(791785),
        l = n(981631);
      function f(e) {
        let { onClose: a, onComplete: n, forcesTransitionToGuild: f, ...u } = e,
          { subscriptionMetadataRequest: m } = (0, d.usePaymentContext)();
        return (0, t.jsx)(c.PaymentModal, {
          ...u,
          onComplete: n,
          onClose: (e) => {
            a(e);
            let t = null == m ? void 0 : m.guild_id;
            e &&
              null != t &&
              (r.jg(),
              (0, o.i1)(t),
              null == n || n(),
              null != t &&
                (f || s.Z.getGuildId() !== t) &&
                (0, i.uL)(l.Z5c.CHANNEL(t)));
          },
          forceNewPaymentModal: !0,
        });
      }
    },
    801140: function (e, a, n) {
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
    748705: function (e, a, n) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    643985: function (e, a, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    471030: function (e, a, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    270532: function (e, a, n) {
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
    13859: function (e, a, n) {
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
    987378: function (e, a, n) {
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
//# sourceMappingURL=4d6a57a0c9349c8bcda4.js.map
