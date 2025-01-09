"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78258"],
  {
    500052: function (e) {
      e.exports = "/assets/d65b63b793d8469c9133.svg";
    },
    375832: function (e) {
      e.exports = "/assets/e5544441389ffc08e97e.svg";
    },
    992171: function (e) {
      e.exports = "/assets/2fd38497c2751c12ad65.svg";
    },
    937064: function (e) {
      e.exports = "/assets/27e89870290702718b52.svg";
    },
    434336: function (e) {
      e.exports = "/assets/69f03c63fd4f0de7bb66.svg";
    },
    128955: function (e) {
      e.exports = "/assets/c9a82b76ce3cbdd34691.svg";
    },
    803353: function (e) {
      e.exports = "/assets/0fe1010fd5e5b93fca96.svg";
    },
    479388: function (e) {
      e.exports = "/assets/1c8ce4399026699b9e2b.svg";
    },
    179581: function (e) {
      e.exports = "/assets/e99f881d5ccb3eec76bf.svg";
    },
    13174: function (e) {
      e.exports = "/assets/3bcf98703aa2a6b0c535.svg";
    },
    580248: function (e) {
      e.exports = "/assets/ba2b7aff84b7edba5dc0.svg";
    },
    966294: function (e) {
      e.exports = "/assets/14efb74478e6aca1902a.svg";
    },
    302143: function (e) {
      e.exports = "/assets/bb40db07cda4bf838cb8.svg";
    },
    146121: function (e) {
      e.exports = "/assets/b2019a71f2463b1837e7.svg";
    },
    705500: function (e) {
      e.exports = "/assets/1caa652bb55b05cc768c.svg";
    },
    402127: function (e) {
      e.exports = "/assets/497935ae765e9018dcfe.svg";
    },
    153652: function (e) {
      e.exports = "/assets/e52c6423dfb224b2a9dc.svg";
    },
    485487: function (e) {
      e.exports = "/assets/bea7ee393555dd70e15e.svg";
    },
    200985: function (e) {
      e.exports = "/assets/ca95311e1eb9f1822568.svg";
    },
    270930: function (e) {
      e.exports = "/assets/f5904b52aa6db01b4e7a.svg";
    },
    46514: function (e) {
      e.exports = "/assets/2b0675a122fe72c54791.svg";
    },
    750876: function (e) {
      e.exports = "/assets/1c1d68798cfe47dbdda8.svg";
    },
    993855: function (e) {
      e.exports = "/assets/e04ccdb2c075a03f0800.svg";
    },
    701497: function (e) {
      e.exports = "/assets/921fc238090f37c677eb.svg";
    },
    937717: function (e) {
      e.exports = "/assets/aa834684ffa49e7965d7.svg";
    },
    165194: function (e) {
      e.exports = "/assets/37316bae2b22b976513e.svg";
    },
    251977: function (e) {
      e.exports = "/assets/2875b89992a189dc4055.svg";
    },
    145905: function (e) {
      e.exports = "/assets/23359b778cfa0bb3c22d.svg";
    },
    335302: function (e) {
      e.exports = "/assets/8a9ebddce3c2da226f6f.svg";
    },
    956172: function (e) {
      e.exports = "/assets/33fede853d77cccff7bb.svg";
    },
    695579: function (e) {
      e.exports = "/assets/79e37f5b38441535e5b1.svg";
    },
    541764: function (e) {
      e.exports = "/assets/6a8eef4f53e77e838494.svg";
    },
    191706: function (e) {
      e.exports = "/assets/ac1d36fde0b6286c1973.svg";
    },
    67528: function (e) {
      e.exports = "/assets/6c9fa7e24ee329474293.svg";
    },
    332150: function (e) {
      e.exports = "/assets/ab5190d2222a28c78e4b.svg";
    },
    581902: function (e) {
      e.exports = "/assets/2de26820af92968cd010.svg";
    },
    167219: function (e) {
      e.exports = "/assets/217f87820262ccc5be1c.svg";
    },
    704381: function (e) {
      e.exports = "/assets/38682739a8f9476c2f32.svg";
    },
    591417: function (e) {
      e.exports = "/assets/44389a4a2f59faa408ed.svg";
    },
    929883: function (e) {
      e.exports = "/assets/b592a9a7bfcec79c40a5.svg";
    },
    261137: function (e) {
      e.exports = "/assets/8f09624705e694c77a05.svg";
    },
    958700: function (e) {
      e.exports = "/assets/50fffc88f0ce1ab3ad4d.svg";
    },
    278605: function (e, s, t) {
      t.d(s, {
        ah: function () {
          return r;
        },
        xP: function () {
          return i;
        },
      });
      var n = t(818083),
        a = t(987338);
      let r = (0, n.B)({
        kind: "user",
        id: "2024-11_marketing_page_v2_experiment",
        label: "Marketing Page V2 Experiment",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        treatments: [
          {
            id: 0,
            label: "User see current marketing page",
            config: { enabled: !1 },
          },
          {
            id: 1,
            label: "users see new marketing page",
            config: { enabled: !0 },
          },
        ],
      });
      function i(e) {
        let { enabled: s } = r.useExperiment(
          { location: e },
          { autoTrackExposure: !1 },
        );
        return s;
      }
    },
    655525: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(346497),
        r = t(227140);
      function i() {
        let e = (0, a.Vi)(),
          s = (0, a.W1)();
        return e ? (0, n.jsx)(r.Z, { copy: s }) : null;
      }
    },
    52188: function (e, s, t) {
      t.d(s, {
        U: function () {
          return n;
        },
        k: function () {
          return en;
        },
      }),
        t(47120);
      var n,
        a,
        r = t(200651);
      t(192379);
      var i = t(120356),
        o = t.n(i),
        c = t(442837),
        u = t(246946),
        l = t(91802),
        f = t(222727),
        d = t(981631),
        p = t(767493),
        g = t(500052),
        x = t(375832),
        b = t(992171),
        v = t(937064),
        m = t(434336),
        T = t(128955),
        _ = t(803353),
        C = t(479388),
        S = t(179581),
        L = t(13174),
        h = t(580248),
        B = t(966294),
        P = t(302143),
        E = t(146121),
        O = t(705500),
        A = t(402127),
        I = t(153652),
        U = t(485487),
        j = t(200985),
        N = t(270930),
        w = t(46514),
        y = t(750876),
        D = t(993855),
        G = t(701497),
        k = t(937717),
        Z = t(165194),
        F = t(251977),
        M = t(145905),
        R = t(335302),
        H = t(956172),
        Y = t(695579),
        V = t(541764),
        W = t(191706),
        X = t(67528),
        z = t(332150),
        K = t(581902),
        $ = t(167219),
        q = t(704381),
        J = t(591417),
        Q = t(929883),
        ee = t(261137),
        es = t(958700);
      ((a = n || (n = {}))[(a.PrivateMessages = 0)] = "PrivateMessages"),
        (a[(a.SettingsMenu = 1)] = "SettingsMenu");
      let et = new Map([
        ["PE", W],
        ["PH", X],
        ["CL", T],
        ["CO", _],
        ["AR", g],
        ["JP", y],
        ["VN", es],
        ["TH", ee],
        ["ID", U],
        ["MY", H],
        ["MX", R],
        ["KR", D],
        ["BG", v],
        ["CZ", S],
        ["HU", I],
        ["RO", $],
        ["SE", q],
        ["CY", C],
        ["EE", h],
        ["IS", N],
        ["IE", j],
        ["LV", F],
        ["LI", G],
        ["LT", k],
        ["LU", Z],
        ["MT", M],
        ["SK", Q],
        ["SI", J],
        ["GR", O],
        ["FI", P],
        ["PT", K],
        ["NO", V],
        ["BE", b],
        ["AT", x],
        ["CH", m],
        ["FR", E],
        ["DE", L],
        ["ES", B],
        ["IT", w],
        ["NL", Y],
        ["PL", z],
        ["HR", A],
      ]);
      function en(e) {
        let { entryPoint: s, className: t } = e,
          a = (0, c.e7)([u.Z], () => u.Z.hidePersonalInformation),
          i = (0, l.n)(),
          g = null == i ? void 0 : i.countryCode;
        if (((0, f.U)(d.jXE.SETTINGS_PREMIUM, g), null == g || !et.has(g) || a))
          return null;
        let x = et.get(g),
          b = "badgeIcon" + n[s];
        return (0, r.jsx)("img", {
          className: o()(t, p[b]),
          "aria-hidden": !0,
          alt: "Wumpus holding a country-specific flag",
          src: x,
        });
      }
    },
    924540: function (e, s, t) {
      t.d(s, {
        $H: function () {
          return v;
        },
        GN: function () {
          return m;
        },
      });
      var n = t(200651),
        a = t(192379),
        r = t(120356),
        i = t.n(r),
        o = t(481060),
        c = t(774078),
        u = t(55935),
        l = t(74538),
        f = t(278605),
        d = t(639119),
        p = t(474936),
        g = t(388032),
        x = t(229830);
      function b(e) {
        let {
            isTabSelected: s,
            expiresAt: t,
            trialDuration: r,
            className: l,
          } = e,
          f = a.useMemo(() => Date.parse(t), [t]),
          d = (0, c.Z)(f, 6e4);
        return Object.values(d).every((e) => 0 === e)
          ? null
          : (0, n.jsx)(o.Tooltip, {
              text: (0, u.QX)(d, {
                days: g.t.qVGNkZ,
                hours: g.t.wyg9a2,
                minutes: g.t.IzmIlZ,
              }),
              children: (e) =>
                (0, n.jsxs)("div", {
                  ...e,
                  className: i()(
                    x.premiumTrialBadge,
                    x.premiumTrialAcknowledgedBadge,
                    l,
                    { [x.premiumTrialBadgeSelected]: s },
                  ),
                  children: [
                    (0, n.jsx)(o.ClockIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: x.premiumTrialBadgeIcon,
                    }),
                    (0, n.jsxs)(o.Text, {
                      variant: "eyebrow",
                      children: [" ", r, " "],
                    }),
                  ],
                }),
            });
      }
      function v(e) {
        var s, t, a;
        let { isTabSelected: r, trialOffer: i } = e,
          o =
            null === (s = (0, d.N)()) || void 0 === s
              ? void 0
              : s.subscription_trial,
          c = (0, f.xP)("OfferTabBadge"),
          u = (0, l.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count,
          });
        return (0, n.jsx)(T, {
          isTabSelected: r,
          badgeCopy: u,
          offerExpiresAt: i.expires_at,
          className:
            ((t = c),
            (a = null == o ? void 0 : o.sku_id),
            t
              ? x.premiumTrialBadgeV2
              : a === p.Si.TIER_2
                ? x.premiumTrialTier2UnacknowledgedBadge
                : x.premiumTrialTier0UnacknowledgedBadge),
        });
      }
      function m(e) {
        let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
          r = g.intl.formatToPlainString(g.t.iiLbvr, {
            percent: t.discount.amount,
          }),
          i = (0, f.xP)("OfferTabBadge");
        return (0, n.jsx)(T, {
          isTabSelected: s,
          badgeCopy: a ? r : g.intl.string(g.t["/DTtr6"]),
          offerExpiresAt: t.expires_at,
          className: i
            ? x.premiumTrialBadgeV2
            : x.premiumDiscountUnacknowledgedBadge,
        });
      }
      function T(e) {
        let {
          isTabSelected: s,
          badgeCopy: t,
          offerExpiresAt: a,
          className: r,
          ackedClassName: c,
        } = e;
        return null != a
          ? (0, n.jsx)(b, {
              className: c,
              expiresAt: a,
              isTabSelected: s,
              trialDuration: t,
            })
          : (0, n.jsx)("div", {
              className: i()(x.premiumTrialBadge, r),
              children: (0, n.jsx)(o.Text, {
                variant: "eyebrow",
                className: x.premiumOfferBadgeCopy,
                children: t,
              }),
            });
      }
    },
    679768: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var n = t(200651);
      function a(e) {
        return (0, n.jsxs)("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M8.59403 1.10982C8.04647 -0.36994 5.95353 -0.36994 5.40597 1.10982L4.56476 3.38313C4.36219 3.93057 3.93057 4.36219 3.38313 4.56476L1.10982 5.40597C-0.36994 5.95353 -0.36994 8.04647 1.10982 8.59403L3.38313 9.43524C3.93057 9.63781 4.36219 10.0694 4.56476 10.6169L5.40597 12.8902C5.95353 14.3699 8.04647 14.3699 8.59403 12.8902L9.43524 10.6169C9.63781 10.0694 10.0694 9.63781 10.6169 9.43524L12.8902 8.59403C14.3699 8.04647 14.3699 5.95353 12.8902 5.40597L10.6169 4.56476C10.0694 4.36219 9.63781 3.93057 9.43524 3.38313L8.59403 1.10982Z",
              fill: "#4E5058",
            }),
            (0, n.jsx)("path", {
              d: "M8.59403 1.10982C8.04647 -0.36994 5.95353 -0.36994 5.40597 1.10982L4.56476 3.38313C4.36219 3.93057 3.93057 4.36219 3.38313 4.56476L1.10982 5.40597C-0.36994 5.95353 -0.36994 8.04647 1.10982 8.59403L3.38313 9.43524C3.93057 9.63781 4.36219 10.0694 4.56476 10.6169L5.40597 12.8902C5.95353 14.3699 8.04647 14.3699 8.59403 12.8902L9.43524 10.6169C9.63781 10.0694 10.0694 9.63781 10.6169 9.43524L12.8902 8.59403C14.3699 8.04647 14.3699 5.95353 12.8902 5.40597L10.6169 4.56476C10.0694 4.36219 9.63781 3.93057 9.43524 3.38313L8.59403 1.10982Z",
              fill: "url(#paint0_linear_3010_1362)",
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsxs)("linearGradient", {
                id: "paint0_linear_3010_1362",
                x1: "5.04494",
                y1: "-0.975697",
                x2: "21.2381",
                y2: "2.1675",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, n.jsx)("stop", { "stop-color": "#8547C6" }),
                  (0, n.jsx)("stop", {
                    offset: "0.52899",
                    "stop-color": "#B845C1",
                  }),
                  (0, n.jsx)("stop", { offset: "1", "stop-color": "#AB5D8A" }),
                ],
              }),
            }),
          ],
        });
      }
      t(192379);
    },
    227140: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return u;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        i = t(481060),
        o = t(679768),
        c = t(844812);
      function u(e) {
        let { copy: s, showStars: t = !0, className: a } = e;
        return (0, n.jsxs)("div", {
          className: r()(c.badgeContainer, a),
          children: [
            t &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", {
                    className: r()(c.star, c.starLeft),
                    children: (0, n.jsx)(o.Z, { width: "10", height: "10" }),
                  }),
                  (0, n.jsx)("span", {
                    className: r()(c.star, c.starRight),
                    children: (0, n.jsx)(o.Z, { width: "14", height: "14" }),
                  }),
                ],
              }),
            (0, n.jsx)(i.Text, {
              variant: "eyebrow",
              className: c.newBadge,
              children: s,
            }),
          ],
        });
      }
    },
    899667: function (e, s, t) {
      t(47120);
      var n,
        a,
        r,
        i,
        o = t(442837),
        c = t(570140);
      let u = {},
        l = null,
        f = [],
        d = !1,
        p = !1,
        g = null,
        x = null;
      function b() {
        p = !0;
      }
      class v extends (n = o.ZP.Store) {
        getAppliedGuildBoostsForGuild(e) {
          return null != u[e] ? u[e].subscriptions : null;
        }
        getLastFetchedAtForGuild(e) {
          return null != u[e] ? u[e].lastFetchedAt : null;
        }
        getCurrentUserAppliedBoosts() {
          return f;
        }
        getAppliedGuildBoost(e) {
          return f.find((s) => s.id === e);
        }
        get isModifyingAppliedBoost() {
          return p;
        }
        get applyBoostError() {
          return g;
        }
        get unapplyBoostError() {
          return x;
        }
        get cooldownEndsAt() {
          return l;
        }
        get isFetchingCurrentUserAppliedBoosts() {
          return d;
        }
      }
      (i = "AppliedGuildBoostStore"),
        (r = "displayName") in (a = v)
          ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = i),
        (s.Z = new v(c.Z, {
          GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: s, appliedBoosts: t } = e;
            u[s] = { subscriptions: t, lastFetchedAt: Date.now() };
          },
          USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: s } = e;
            (d = !1), (f = s);
          },
          APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: s } = e;
            l = s;
          },
          GUILD_UNAPPLY_BOOST_START: b,
          GUILD_APPLY_BOOST_START: b,
          GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: s } = e,
              t = new Set(s.map((e) => e.id));
            (f = [...s, ...f.filter((e) => !t.has(e.id))]),
              (g = null),
              (p = !1);
          },
          GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (g = s);
          },
          GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: s } = e;
            (f = f.filter((e) => e.id !== s)), (p = !1);
          },
          GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (x = s);
          },
          USER_APPLIED_BOOSTS_FETCH_START: function () {
            d = !0;
          },
        }));
    },
  },
]);
//# sourceMappingURL=4d3178ad95a3db1139f8.js.map
