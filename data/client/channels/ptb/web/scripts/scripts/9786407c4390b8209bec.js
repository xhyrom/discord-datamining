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
          return f;
        },
        Rw: function () {
          return g;
        },
        j_: function () {
          return M;
        },
        kG: function () {
          return N;
        },
        y3: function () {
          return b;
        },
      }),
        n(724458);
      var s = n(913527),
        a = n.n(s),
        r = n(442837),
        i = n(291175),
        l = n(621853),
        u = n(594174),
        c = n(78839),
        d = n(111361),
        _ = n(471309),
        o = n(494450),
        E = n(474936);
      let N = () => {
          let e = (0, r.e7)([u.default], () => u.default.getCurrentUser());
          return (0, o.l)(null == e ? void 0 : e.id);
        },
        M = () => {
          let { version: e } = (0, _.Z)();
          return 2 === e ? Object.values(E.q4) : Object.values(E.Ph);
        },
        T = (e) =>
          (0, r.e7)([l.Z], () => {
            if (null == e) return null;
            let t = l.Z.getUserProfile(e);
            return null == t ? void 0 : t.premiumSince;
          }),
        f = () => {
          let e = (0, r.e7)([u.default], () => u.default.getCurrentUser());
          return T(null == e ? void 0 : e.id);
        },
        b = () => {
          let e = M(),
            t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            n = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
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
        R = () => {
          let e = N(),
            t = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
          return null == e || null == t || null == t.premiumSince
            ? null
            : (0, i.RZ)(e, t.premiumSince);
        },
        g = () => {
          let e = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            t = m(null == e ? void 0 : e.id),
            n = R();
          return null == t ? null : { ...t, earnedOnDate: n };
        },
        m = (e) => {
          let t = (0, o.l)(e);
          return null == t ? null : E.np[t];
        };
    },
    494450: function (e, t, n) {
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var s = n(442837),
        a = n(291175),
        r = n(621853);
      function i(e) {
        return (0, s.e7)([r.Z], () => {
          var t;
          let n;
          let s = null != e ? r.Z.getUserProfile(e) : null,
            i = null == s ? void 0 : s.premiumSince;
          return null == s || null == i
            ? null
            : (null == s ||
                null === (t = s.badges) ||
                void 0 === t ||
                t.forEach((e) => {
                  let t = (0, a.gn)(e.id);
                  null != t && (n = t);
                }),
              n);
        });
      }
    },
    121436: function (e, t, n) {
      n.r(t);
      var s = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        i = n(793030),
        l = n(481060),
        u = n(100527),
        c = n(906732),
        d = n(313201),
        _ = n(703656),
        o = n(594174),
        E = n(111361),
        N = n(471309),
        M = n(197115),
        T = n(553896),
        f = n(848572),
        b = n(787528),
        R = n(474936),
        g = n(981631),
        m = n(388032),
        U = n(837005);
      t.default = (e) => {
        let { transitionState: t, onClose: n } = e,
          { analyticsLocations: a } = (0, c.ZP)(u.Z.TIERED_TENURE_BADGES_MODAL),
          x = (0, d.Dt)(),
          v = (0, f.j_)(),
          p = o.default.getCurrentUser(),
          P = (0, E.yd)(null == p ? void 0 : p.premiumType, R.p9.TIER_2),
          { version: I } = (0, N.Z)(),
          O = v.map((e) => {
            let {
                id: t,
                badgeVersion: n,
                nameUnformatted: a,
                tenureReqNumMonths: l,
              } = e,
              u = m.intl.string(a),
              c = (0, b.J)(t),
              d = (0, T.q)(t, l);
            return (0, s.jsxs)(
              "div",
              {
                className: r()(U.badge, { [U.badgeV2]: 2 === n }),
                children: [
                  (0, s.jsx)("img", {
                    src: c,
                    alt: u,
                    className: U.badgeImage,
                  }),
                  (0, s.jsxs)("div", {
                    className: r()(U.badgeText, { [U.badgeTextV2]: 2 === n }),
                    children: [
                      (0, s.jsx)(i.xv, {
                        variant: "text-md/semibold",
                        className: U.badgeName,
                        children: u,
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
                children: m.intl.string(m.t["rmUN7+"]),
              }),
              (0, s.jsx)(i.xv, {
                variant: "text-md/medium",
                className: U.subHeader,
                children: m.intl.string(m.t.OI50am),
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
                    children: m.intl.string(m.t.Og62j4),
                  }),
                  (0, s.jsx)(i.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: m.intl.string(m.t["IdAP9/"]),
                  }),
                  (0, s.jsx)("div", { className: U.badgeList, children: O }),
                ],
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(i.xv, {
                    variant: "display-md",
                    className: U.header,
                    children: m.intl.string(m.t.RtGeFR),
                  }),
                  (0, s.jsx)(i.xv, {
                    variant: "text-md/medium",
                    className: U.subHeader,
                    children: m.intl.format(m.t.ffatnZ, {
                      onClick: () => {
                        (0, _.uL)(g.Z5c.APPLICATION_STORE, {
                          source: u.Z.TIERED_TENURE_BADGES_MODAL,
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
                      page: g.ZY5.TIERED_TENURE_BADGES_MODAL,
                    },
                    buttonText: m.intl.string(m.t.JST6jo),
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
          return m;
        },
      }),
        n(848572);
      var s = n(474936),
        a = n(137692),
        r = n(749472),
        i = n(403707),
        l = n(860691),
        u = n(447204),
        c = n(110149),
        d = n(557995),
        _ = n(39754),
        o = n(64649),
        E = n(783308),
        N = n(253141),
        M = n(79914),
        T = n(2563),
        f = n(634071),
        b = n(175185),
        R = n(557821);
      let g = {
          [s.JN.PREMIUM_TENURE_1_MONTH]: r,
          [s.JN.PREMIUM_TENURE_3_MONTH]: R,
          [s.JN.PREMIUM_TENURE_6_MONTH]: o,
          [s.JN.PREMIUM_TENURE_12_MONTH]: M,
          [s.JN.PREMIUM_TENURE_24_MONTH]: l,
          [s.JN.PREMIUM_TENURE_36_MONTH]: c,
          [s.JN.PREMIUM_TENURE_60_MONTH]: f,
          [s.JN.PREMIUM_TENURE_72_MONTH]: d,
          [s.w7.PREMIUM_TENURE_1_MONTH]: a,
          [s.w7.PREMIUM_TENURE_3_MONTH]: b,
          [s.w7.PREMIUM_TENURE_6_MONTH]: _,
          [s.w7.PREMIUM_TENURE_12_MONTH]: N,
          [s.w7.PREMIUM_TENURE_24_MONTH]: i,
          [s.w7.PREMIUM_TENURE_36_MONTH]: u,
          [s.w7.PREMIUM_TENURE_60_MONTH]: T,
          [s.w7.PREMIUM_TENURE_72_MONTH]: E,
        },
        m = (e) => g[e];
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
//# sourceMappingURL=9786407c4390b8209bec.js.map
