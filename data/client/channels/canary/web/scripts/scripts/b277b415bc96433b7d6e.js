"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89839"],
  {
    553896: function (e, a, t) {
      t.d(a, {
        q: function () {
          return i;
        },
      }),
        t(291175),
        t(848572);
      var s = t(474936),
        n = t(388032);
      let i = (e, a) => {
        switch (e) {
          case s.JN.PREMIUM_TENURE_1_MONTH:
          case s.JN.PREMIUM_TENURE_3_MONTH:
          case s.JN.PREMIUM_TENURE_6_MONTH:
          case s.w7.PREMIUM_TENURE_1_MONTH:
          case s.w7.PREMIUM_TENURE_3_MONTH:
          case s.w7.PREMIUM_TENURE_6_MONTH:
            return n.intl.formatToPlainString(n.t.erUSmJ, { months: a });
          case s.JN.PREMIUM_TENURE_12_MONTH:
          case s.JN.PREMIUM_TENURE_24_MONTH:
          case s.JN.PREMIUM_TENURE_36_MONTH:
          case s.JN.PREMIUM_TENURE_60_MONTH:
          case s.w7.PREMIUM_TENURE_12_MONTH:
          case s.w7.PREMIUM_TENURE_24_MONTH:
          case s.w7.PREMIUM_TENURE_36_MONTH:
          case s.w7.PREMIUM_TENURE_60_MONTH:
            return n.intl.formatToPlainString(n.t.IfYQVF, { years: a / 12 });
          case s.JN.PREMIUM_TENURE_72_MONTH:
          case s.w7.PREMIUM_TENURE_72_MONTH:
            return n.intl.formatToPlainString(n.t.IfYQVF, { years: "6+" });
          default:
            return null;
        }
      };
    },
    121436: function (e, a, t) {
      t.r(a);
      var s = t(200651);
      t(192379);
      var n = t(120356),
        i = t.n(n),
        r = t(793030),
        d = t(481060),
        c = t(100527),
        l = t(906732),
        _ = t(313201),
        E = t(703656),
        N = t(594174),
        m = t(111361),
        o = t(471309),
        M = t(197115),
        T = t(553896),
        b = t(848572),
        u = t(787528),
        R = t(474936),
        g = t(981631),
        x = t(388032),
        U = t(837005);
      a.default = (e) => {
        let { transitionState: a, onClose: t } = e,
          { analyticsLocations: n } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
          h = (0, _.Dt)(),
          I = (0, b.j_)(),
          f = N.default.getCurrentUser(),
          v = (0, m.yd)(null == f ? void 0 : f.premiumType, R.p9.TIER_2),
          { version: j } = (0, o.Z)(),
          O = I.map((e) => {
            let {
                id: a,
                badgeVersion: t,
                nameUnformatted: n,
                tenureReqNumMonths: d,
              } = e,
              c = x.intl.string(n),
              l = (0, u.J)(a),
              _ = (0, T.q)(a, d);
            return (0, s.jsxs)(
              "div",
              {
                className: i()(U.badge, { [U.badgeV2]: 2 === t }),
                children: [
                  (0, s.jsx)("img", {
                    src: l,
                    alt: c,
                    className: U.badgeImage,
                  }),
                  (0, s.jsxs)("div", {
                    className: i()(U.badgeText, { [U.badgeTextV2]: 2 === t }),
                    children: [
                      (0, s.jsx)(r.xv, {
                        variant: "text-md/semibold",
                        className: U.badgeName,
                        children: c,
                      }),
                      (0, s.jsx)(r.xv, {
                        variant: "text-xs/normal",
                        children: _,
                      }),
                    ],
                  }),
                ],
              },
              a,
            );
          }),
          P = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r.xv, {
                variant: "display-md",
                className: U.header,
                children: x.intl.string(x.t["rmUN7+"]),
              }),
              (0, s.jsx)(r.xv, {
                variant: "text-md/medium",
                className: U.subHeader,
                children: x.intl.string(x.t.OI50am),
              }),
              (0, s.jsx)("div", { className: U.badgeList, children: O }),
            ],
          }),
          H = v
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(r.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: x.intl.string(x.t.Og62j4),
                  }),
                  (0, s.jsx)(r.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: x.intl.string(x.t["IdAP9/"]),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: O }),
                ],
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(r.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: x.intl.string(x.t.RtGeFR),
                  }),
                  (0, s.jsx)(r.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: x.intl.format(x.t.ffatnZ, {
                      onClick: () => {
                        (0, E.uL)(g.Z5c.APPLICATION_STORE, {
                          source: c.Z.TIERED_TENURE_BADGES_MODAL,
                          sourceLocationStack: n,
                        }),
                          null == t || t();
                      },
                    }),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: O }),
                  (0, s.jsx)(M.Z, {
                    className: U.subscribeButton,
                    premiumModalAnalyticsLocation: {
                      page: g.ZY5.TIERED_TENURE_BADGES_MODAL,
                    },
                    buttonText: x.intl.string(x.t.JST6jo),
                    subscriptionTier: R.Si.TIER_2,
                    showGradient: !0,
                  }),
                ],
              });
        return (0, s.jsxs)(d.ModalRoot, {
          transitionState: a,
          "aria-labelledby": h,
          className: i()(U.container, "theme-dark"),
          children: [
            (0, s.jsx)(d.ModalCloseButton, {
              onClick: t,
              className: U.closeButton,
            }),
            (0, s.jsx)(d.ModalContent, {
              className: U.content,
              children: 2 === j ? H : P,
            }),
          ],
        });
      };
    },
    837005: function (e, a, t) {
      e.exports = {
        container: "container_f418be",
        closeButton: "closeButton_f418be",
        content: "content_f418be",
        header: "header_f418be",
        subHeader: "subHeader_f418be",
        badge: "badge_f418be",
        badgeV2: "badgeV2_f418be",
        badgeImage: "badgeImage_f418be",
        badgeText: "badgeText_f418be",
        badgeTextV2: "badgeTextV2_f418be",
        badgeName: "badgeName_f418be",
        badgeList: "badgeList_f418be",
        subscribeButton: "subscribeButton_f418be",
      };
    },
  },
]);
//# sourceMappingURL=b277b415bc96433b7d6e.js.map
