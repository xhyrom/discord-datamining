"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89839"],
  {
    137692: function (e) {
      e.exports = "/assets/0386191373eb17c272df.svg";
    },
    749472: function (e) {
      e.exports = "/assets/e87725d75c6b138c5304.svg";
    },
    403707: function (e) {
      e.exports = "/assets/f3521e2861ff44a0384d.svg";
    },
    860691: function (e) {
      e.exports = "/assets/9a0a4244e4eb0c0b56a6.svg";
    },
    447204: function (e) {
      e.exports = "/assets/f2b9b02fb22cc6459922.svg";
    },
    110149: function (e) {
      e.exports = "/assets/6cb0fb24803a803393cb.svg";
    },
    557995: function (e) {
      e.exports = "/assets/e116db39d3beeb4caeac.svg";
    },
    39754: function (e) {
      e.exports = "/assets/8725fe12ada9afa51c1a.svg";
    },
    64649: function (e) {
      e.exports = "/assets/720abe4190804fc2065a.svg";
    },
    783308: function (e) {
      e.exports = "/assets/b4fc7a9c37ec2fae36e3.svg";
    },
    253141: function (e) {
      e.exports = "/assets/746689c803e06be87705.svg";
    },
    79914: function (e) {
      e.exports = "/assets/db8451ff2b2e8bd5bc2d.svg";
    },
    2563: function (e) {
      e.exports = "/assets/ecf86e18838013c9d95a.svg";
    },
    634071: function (e) {
      e.exports = "/assets/5842cd38f99cecb8a729.svg";
    },
    175185: function (e) {
      e.exports = "/assets/9d4d362c62da3c985845.svg";
    },
    557821: function (e) {
      e.exports = "/assets/4ce1c754ee26bd52e389.svg";
    },
    471309: function (e, t, n) {
      let s = (0, n(818083).B)({
        kind: "user",
        id: "2024-08_tiered_tenure_badges",
        label: "Tiered Tenure Badging",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Tiered Tenure Badges v1",
            config: { enabled: !0, version: 1 },
          },
          {
            id: 2,
            label: "Enable Tiered Tenure Badges v2",
            config: { enabled: !0, version: 2 },
          },
        ],
      });
      t.Z = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return s.useExperiment(
          { location: "experiment_hook" },
          { autoTrackExposure: e },
        );
      };
    },
    553896: function (e, t, n) {
      n.d(t, {
        q: function () {
          return r;
        },
      }),
        n(291175),
        n(848572);
      var s = n(474936),
        a = n(388032);
      let r = (e, t) => {
        switch (e) {
          case s.JN.PREMIUM_TENURE_1_MONTH:
          case s.JN.PREMIUM_TENURE_3_MONTH:
          case s.JN.PREMIUM_TENURE_6_MONTH:
          case s.w7.PREMIUM_TENURE_1_MONTH:
          case s.w7.PREMIUM_TENURE_3_MONTH:
          case s.w7.PREMIUM_TENURE_6_MONTH:
            return a.intl.formatToPlainString(a.t.erUSmJ, { months: t });
          case s.JN.PREMIUM_TENURE_12_MONTH:
          case s.JN.PREMIUM_TENURE_24_MONTH:
          case s.JN.PREMIUM_TENURE_36_MONTH:
          case s.JN.PREMIUM_TENURE_60_MONTH:
          case s.w7.PREMIUM_TENURE_12_MONTH:
          case s.w7.PREMIUM_TENURE_24_MONTH:
          case s.w7.PREMIUM_TENURE_36_MONTH:
          case s.w7.PREMIUM_TENURE_60_MONTH:
            return a.intl.formatToPlainString(a.t.IfYQVF, { years: t / 12 });
          case s.JN.PREMIUM_TENURE_72_MONTH:
          case s.w7.PREMIUM_TENURE_72_MONTH:
            return a.intl.formatToPlainString(a.t.IfYQVF, { years: "6+" });
          default:
            return null;
        }
      };
    },
    848572: function (e, t, n) {
      n.d(t, {
        GG: function () {
          return M;
        },
        Rw: function () {
          return f;
        },
        j_: function () {
          return N;
        },
        kG: function () {
          return o;
        },
        y3: function () {
          return T;
        },
      }),
        n(724458);
      var s = n(913527),
        a = n.n(s),
        r = n(442837),
        i = n(291175),
        l = n(621853),
        c = n(594174),
        u = n(78839),
        d = n(111361),
        _ = n(471309),
        E = n(474936);
      let o = () => {
          var e;
          let t;
          let n = (0, r.e7)([c.default, l.Z], () => {
            let e = c.default.getCurrentUser();
            return null != e ? l.Z.getUserProfile(e.id) : null;
          });
          if (null == n || null == n.premiumSince) return;
          let s = null == n ? void 0 : n.premiumSince;
          return (
            null == n ||
              null === (e = n.badges) ||
              void 0 === e ||
              e.forEach((e) => {
                let n = (0, i.gn)(e.id);
                null != n && null != s && (t = n);
              }),
            t
          );
        },
        N = () => {
          let { version: e } = (0, _.Z)();
          return 2 === e ? Object.values(E.q4) : Object.values(E.Ph);
        },
        M = () =>
          (0, r.e7)([c.default, l.Z], () => {
            let e = c.default.getCurrentUser();
            if (null == e) return null;
            let t = l.Z.getUserProfile(e.id);
            return null == t ? void 0 : t.premiumSince;
          }),
        T = () => {
          let e = N(),
            t = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
            n = (0, r.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
          if (!(0, d.M5)(t, E.p9.TIER_2) || null == n || null == n.premiumSince)
            return null;
          let s = a()(),
            i = a()(n.premiumSince).add(1, "day"),
            l = s.diff(i, "months");
          return e.reduce((e, t) => {
            let { id: n, tenureReqNumMonths: s } = t;
            return l >= s ? n : e;
          }, null);
        },
        b = () => {
          let e = o(),
            t = (0, r.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription());
          return null == e || null == t || null == t.premiumSince
            ? null
            : (0, i.RZ)(e, t.premiumSince);
        },
        f = () => {
          let e = o(),
            t = b();
          return null == e ? null : { ...E.np[e], earnedOnDate: t };
        };
    },
    121436: function (e, t, n) {
      n.r(t);
      var s = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        i = n(793030),
        l = n(481060),
        c = n(100527),
        u = n(906732),
        d = n(313201),
        _ = n(703656),
        E = n(594174),
        o = n(111361),
        N = n(471309),
        M = n(197115),
        T = n(553896),
        b = n(848572),
        f = n(787528),
        R = n(474936),
        m = n(981631),
        g = n(388032),
        U = n(837005);
      t.default = (e) => {
        let { transitionState: t, onClose: n } = e,
          { analyticsLocations: a } = (0, u.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
          x = (0, d.Dt)(),
          v = (0, b.j_)(),
          p = E.default.getCurrentUser(),
          P = (0, o.yd)(null == p ? void 0 : p.premiumType, R.p9.TIER_2),
          { version: I } = (0, N.Z)(),
          O = v.map((e) => {
            let {
                id: t,
                badgeVersion: n,
                nameUnformatted: a,
                tenureReqNumMonths: l,
              } = e,
              c = g.intl.string(a),
              u = (0, f.J)(t),
              d = (0, T.q)(t, l);
            return (0, s.jsxs)(
              "div",
              {
                className: r()(U.badge, { [U.badgeV2]: 2 === n }),
                children: [
                  (0, s.jsx)("img", {
                    src: u,
                    alt: c,
                    className: U.badgeImage,
                  }),
                  (0, s.jsxs)("div", {
                    className: r()(U.badgeText, { [U.badgeTextV2]: 2 === n }),
                    children: [
                      (0, s.jsx)(i.xv, {
                        variant: "text-md/semibold",
                        className: U.badgeName,
                        children: c,
                      }),
                      (0, s.jsx)(i.xv, {
                        variant: "text-xs/normal",
                        children: d,
                      }),
                    ],
                  }),
                ],
              },
              t,
            );
          }),
          h = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i.xv, {
                variant: "display-md",
                className: U.header,
                children: g.intl.string(g.t["rmUN7+"]),
              }),
              (0, s.jsx)(i.xv, {
                variant: "text-md/medium",
                className: U.subHeader,
                children: g.intl.string(g.t.OI50am),
              }),
              (0, s.jsx)("div", { className: U.badgeList, children: O }),
            ],
          }),
          H = P
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(i.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: g.intl.string(g.t.Og62j4),
                  }),
                  (0, s.jsx)(i.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: g.intl.string(g.t["IdAP9/"]),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: O }),
                ],
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(i.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: g.intl.string(g.t.RtGeFR),
                  }),
                  (0, s.jsx)(i.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: g.intl.format(g.t.ffatnZ, {
                      onClick: () => {
                        (0, _.uL)(m.Z5c.APPLICATION_STORE, {
                          source: c.Z.TIERED_TENURE_BADGES_MODAL,
                          sourceLocationStack: a,
                        }),
                          null == n || n();
                      },
                    }),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: O }),
                  (0, s.jsx)(M.Z, {
                    className: U.subscribeButton,
                    premiumModalAnalyticsLocation: {
                      page: m.ZY5.TIERED_TENURE_BADGES_MODAL,
                    },
                    buttonText: g.intl.string(g.t.JST6jo),
                    subscriptionTier: R.Si.TIER_2,
                    showGradient: !0,
                  }),
                ],
              });
        return (0, s.jsxs)(l.ModalRoot, {
          transitionState: t,
          "aria-labelledby": x,
          className: r()(U.container, "theme-dark"),
          children: [
            (0, s.jsx)(l.ModalCloseButton, {
              onClick: n,
              className: U.closeButton,
            }),
            (0, s.jsx)(l.ModalContent, {
              className: U.content,
              children: 2 === I ? H : h,
            }),
          ],
        });
      };
    },
    787528: function (e, t, n) {
      n.d(t, {
        J: function () {
          return g;
        },
      }),
        n(848572);
      var s = n(474936),
        a = n(137692),
        r = n(749472),
        i = n(403707),
        l = n(860691),
        c = n(447204),
        u = n(110149),
        d = n(557995),
        _ = n(39754),
        E = n(64649),
        o = n(783308),
        N = n(253141),
        M = n(79914),
        T = n(2563),
        b = n(634071),
        f = n(175185),
        R = n(557821);
      let m = {
          [s.JN.PREMIUM_TENURE_1_MONTH]: r,
          [s.JN.PREMIUM_TENURE_3_MONTH]: R,
          [s.JN.PREMIUM_TENURE_6_MONTH]: E,
          [s.JN.PREMIUM_TENURE_12_MONTH]: M,
          [s.JN.PREMIUM_TENURE_24_MONTH]: l,
          [s.JN.PREMIUM_TENURE_36_MONTH]: u,
          [s.JN.PREMIUM_TENURE_60_MONTH]: b,
          [s.JN.PREMIUM_TENURE_72_MONTH]: d,
          [s.w7.PREMIUM_TENURE_1_MONTH]: a,
          [s.w7.PREMIUM_TENURE_3_MONTH]: f,
          [s.w7.PREMIUM_TENURE_6_MONTH]: _,
          [s.w7.PREMIUM_TENURE_12_MONTH]: N,
          [s.w7.PREMIUM_TENURE_24_MONTH]: i,
          [s.w7.PREMIUM_TENURE_36_MONTH]: c,
          [s.w7.PREMIUM_TENURE_60_MONTH]: T,
          [s.w7.PREMIUM_TENURE_72_MONTH]: o,
        },
        g = (e) => m[e];
    },
    837005: function (e, t, n) {
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
//# sourceMappingURL=9ca47c142fcb78a77a92.js.map
