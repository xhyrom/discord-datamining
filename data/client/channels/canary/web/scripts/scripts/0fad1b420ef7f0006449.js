"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89839"],
  {
    553896: function (e, a, t) {
      t.d(a, {
        q: function () {
          return r;
        },
      }),
        t(291175),
        t(848572);
      var s = t(474936),
        n = t(388032);
      let r = (e, a) => {
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
        r = t.n(n),
        i = t(793030),
        d = t(481060),
        c = t(100527),
        l = t(906732),
        _ = t(313201),
        E = t(703656),
        N = t(594174),
        m = t(111361),
        o = t(197115),
        b = t(943180),
        M = t(553896),
        T = t(848572),
        u = t(787528),
        g = t(474936),
        R = t(981631),
        x = t(388032),
        U = t(837005);
      a.default = (e) => {
        let { transitionState: a, onClose: t } = e,
          { analyticsLocations: n } = (0, l.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
          h = (0, _.Dt)(),
          I = (0, T.j_)(),
          f = (0, T.Rw)(),
          v = N.default.getCurrentUser(),
          j = (0, m.yd)(null == v ? void 0 : v.premiumType, g.p9.TIER_2),
          { version: O } = (0, b.D)(),
          P = I.map((e) => {
            let {
                id: a,
                badgeVersion: t,
                nameUnformatted: n,
                tenureReqNumMonths: c,
              } = e,
              l = x.intl.string(n),
              _ = (0, u.J)(a),
              E = (0, M.q)(a, c),
              N = (null == f ? void 0 : f.id) === a && 2 === t;
            return (0, s.jsxs)(
              "div",
              {
                className: r()(U.badge, {
                  [U.badgeV2]: 2 === t,
                  [U.earnedBadge]: N,
                }),
                children: [
                  (0, s.jsx)("img", {
                    src: _,
                    alt: l,
                    className: U.badgeImage,
                  }),
                  (0, s.jsxs)("div", {
                    className: r()(U.badgeText, { [U.badgeTextV2]: 2 === t }),
                    children: [
                      (0, s.jsx)(i.xv, {
                        variant: "text-md/semibold",
                        className: U.badgeName,
                        children: l,
                      }),
                      (0, s.jsx)(i.xv, {
                        variant: "text-xs/normal",
                        children: E,
                      }),
                      N && (0, s.jsx)(d.CheckmarkSmallIcon, {}),
                    ],
                  }),
                ],
              },
              a,
            );
          }),
          H = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i.xv, {
                variant: "display-md",
                className: U.header,
                children: x.intl.string(x.t["rmUN7+"]),
              }),
              (0, s.jsx)(i.xv, {
                variant: "text-md/medium",
                className: U.subHeader,
                children: x.intl.string(x.t.OI50am),
              }),
              (0, s.jsx)("div", { className: U.badgeList, children: P }),
            ],
          }),
          p = j
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(i.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: x.intl.string(x.t.Og62j4),
                  }),
                  (0, s.jsx)(i.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: x.intl.string(x.t["IdAP9/"]),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: P }),
                ],
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(i.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: x.intl.string(x.t.RtGeFR),
                  }),
                  (0, s.jsx)(i.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: x.intl.format(x.t.ffatnZ, {
                      onClick: () => {
                        (0, E.uL)(R.Z5c.APPLICATION_STORE, {
                          source: c.Z.TIERED_TENURE_BADGES_MODAL,
                          sourceLocationStack: n,
                        }),
                          null == t || t();
                      },
                    }),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: P }),
                  (0, s.jsx)(o.Z, {
                    className: U.subscribeButton,
                    premiumModalAnalyticsLocation: {
                      page: R.ZY5.TIERED_TENURE_BADGES_MODAL,
                    },
                    buttonText: x.intl.string(x.t.JST6jo),
                    subscriptionTier: g.Si.TIER_2,
                    showGradient: !0,
                  }),
                ],
              });
        return (0, s.jsxs)(d.ModalRoot, {
          transitionState: a,
          "aria-labelledby": h,
          className: r()(U.container, "theme-dark"),
          children: [
            (0, s.jsx)(d.ModalCloseButton, {
              onClick: t,
              className: U.closeButton,
            }),
            (0, s.jsx)(d.ModalContent, {
              className: U.content,
              children: 2 === O ? p : H,
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
        earnedBadge: "earnedBadge_f418be",
      };
    },
  },
]);
//# sourceMappingURL=0fad1b420ef7f0006449.js.map
