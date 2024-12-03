"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62347"],
  {
    51125: function (e) {
      e.exports = "/assets/7c915af96aa37d5a4fe4.svg";
    },
    47268: function (e) {
      e.exports = "/assets/357da48609c8d3354a8b.svg";
    },
    89057: function (e, n, a) {
      a.d(n, {
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
      var t = a(200651);
      a(192379);
      var o = a(120356),
        r = a.n(o),
        i = a(692547),
        l = a(780384),
        d = a(481060),
        c = a(410030),
        s = a(600164),
        f = a(63063),
        u = a(211242),
        _ = a(981631),
        b = a(388032),
        g = a(792776),
        m = a(51125),
        h = a(47268);
      function p(e) {
        let { className: n } = e,
          a = (0, c.ZP)(),
          o = (0, l.wj)(a) ? m : h;
        return (0, t.jsxs)("div", {
          className: r()(g.container, n),
          children: [
            (0, t.jsx)(d.Heading, {
              className: g.header,
              variant: "heading-xl/semibold",
              children: b.intl.string(b.t.vwMEHR),
            }),
            (0, t.jsxs)(d.Text, {
              className: g.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, t.jsx)("p", { children: b.intl.string(b.t.fev8MT) }),
                (0, t.jsx)("p", {
                  children: b.intl.format(b.t.IHxEJS, {
                    helpdeskArticle: f.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, t.jsx)("img", {
              src: o,
              className: g.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function k() {
        return (0, t.jsx)(p, { className: g.settings });
      }
      function x(e) {
        let { onClose: n } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(d.ModalHeader, {
              className: g.blockedPaymentsModalHeader,
              justify: s.Z.Justify.END,
              children: (0, t.jsx)(d.ModalCloseButton, { onClick: n }),
            }),
            (0, t.jsx)(d.ModalContent, {
              className: g.blockedPaymentsModalContent,
              children: (0, t.jsx)(p, { className: g.modal }),
            }),
          ],
        });
      }
      function B(e) {
        let { className: n } = e;
        return (0, u.Q)()
          ? (0, t.jsxs)(d.Card, {
              className: r()(g.blockedPaymentsWarning, n),
              type: d.Card.Types.CUSTOM,
              children: [
                (0, t.jsx)(d.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: g.blockedPaymentsWarningIcon,
                  color: i.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, t.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: b.intl.format(b.t.NYkcCg, {
                    helpdeskArticle: f.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            })
          : null;
      }
    },
    737143: function (e, n, a) {
      a.d(n, {
        L4: function () {
          return d;
        },
        q1: function () {
          return c;
        },
        tr: function () {
          return s;
        },
      });
      var t = a(818083),
        o = a(358085),
        r = a(987338),
        i = a(474936);
      let l = (0, t.B)({
          id: "2023-07_checkout_optimization_browser_autofill",
          label: "Checkout Optimization Browser Autofill",
          kind: "user",
          defaultConfig: { enabled: !1, delay: !1 },
          treatments: [
            { id: 1, label: "Enabled", config: { enabled: !0, delay: !1 } },
            {
              id: 2,
              label: "Enabled with delay",
              config: { enabled: !0, delay: !0 },
            },
          ],
        }),
        d = (0, t.B)({
          id: "2024-11_checkout_optimization_browser_autofill_global",
          label: "Checkout Optimization Browser Autofill Global",
          kind: "user",
          defaultConfig: { enabled: !1, delay: !1 },
          commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Enabled", config: { enabled: !0, delay: !1 } },
            {
              id: 2,
              label: "Enabled with delay",
              config: { enabled: !0, delay: !0 },
            },
          ],
        });
      function c() {
        let e = l.getCurrentConfig(
          { location: "5f89bb_3" },
          { autoTrackExposure: !0 },
        );
        return e.enabled
          ? e
          : d.getCurrentConfig(
              { location: "5f89bb_3" },
              { autoTrackExposure: !0 },
            );
      }
      function s(e, n, a) {
        return (
          (0, o.isDesktop)() &&
          null != e &&
          [i.Si.TIER_0, i.Si.TIER_2].includes(e) &&
          !n &&
          null == a
        );
      }
    },
    926841: function (e, n, a) {
      a.d(n, {
        a: function () {
          return i;
        },
        b: function () {
          return r;
        },
      });
      var t = a(818083),
        o = a(987338);
      let r = (0, t.B)({
        kind: "user",
        id: "2024-11_checkout_optimization_desktop_client_google_pay",
        label: "Checkout Optimization Browser Autofill Google Pay",
        defaultConfig: { enabled: !1, delay: !1 },
        commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
        treatments: [
          {
            id: 1,
            label: "Enabled with delay",
            config: { enabled: !0, delay: !0 },
          },
        ],
      });
      function i() {
        return r.getCurrentConfig(
          { location: "premium_payment_flow_started_1" },
          { autoTrackExposure: !0 },
        );
      }
    },
    405083: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return f;
          },
        });
      var t = a(200651);
      a(192379);
      var o = a(355467),
        r = a(106976),
        i = a(703656),
        l = a(914010),
        d = a(563132),
        c = a(791785),
        s = a(981631);
      function f(e) {
        let { onClose: n, onComplete: a, forcesTransitionToGuild: f, ...u } = e,
          { subscriptionMetadataRequest: _ } = (0, d.usePaymentContext)();
        return (0, t.jsx)(c.PaymentModal, {
          ...u,
          onComplete: a,
          onClose: (e) => {
            n(e);
            let t = null == _ ? void 0 : _.guild_id;
            e &&
              null != t &&
              (o.jg(),
              (0, r.i1)(t),
              null == a || a(),
              null != t &&
                (f || l.Z.getGuildId() !== t) &&
                (0, i.uL)(s.Z5c.CHANNEL(t)));
          },
          forceNewPaymentModal: !0,
        });
      }
    },
    792776: function (e, n, a) {
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
    293803: function (e, n, a) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    467474: function (e, n, a) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    950304: function (e, n, a) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    280099: function (e, n, a) {
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
    779655: function (e, n, a) {
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
    622694: function (e, n, a) {
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
//# sourceMappingURL=b1f1bcab53807744b0f3.js.map
