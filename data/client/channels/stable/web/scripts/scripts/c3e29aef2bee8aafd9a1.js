"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18146"],
  {
    511293: function (e) {
      e.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (e) {
      e.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
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
    208802: function (e) {
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
    497321: function (e, s, t) {
      t(47120);
      var n,
        a = t(735250),
        r = t(470079),
        o = t(120356),
        i = t.n(o),
        c = t(481060),
        l = t(37234),
        u = t(230711),
        d = t(981631),
        f = t(689938),
        p = t(243014);
      function g(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      class x extends (n = r.Component) {
        render() {
          return (0, a.jsxs)("div", {
            className: p.streamerModeEnabled,
            children: [
              (0, a.jsx)("div", { className: p.streamerModeEnabledImage }),
              (0, a.jsx)(c.Clickable, {
                className: i()(p.streamerModeEnabledBtn, {
                  [p.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.Z.Messages.STREAMER_MODE_ENABLED,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, l.jN)(d.S9g.USER_SETTINGS),
                u.Z.setSection(d.oAB.STREAMER_MODE));
            });
        }
      }
      g(x, "defaultProps", { disableButton: !1 }), (s.Z = x);
    },
    269128: function (e, s, t) {
      var n = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(772848),
        i = t(841261);
      let c = (0, o.Z)();
      s.Z = (e) => {
        let { open: s, className: t, withHighlight: a = !1 } = e;
        return (0, n.jsxs)("svg", {
          width: "18",
          height: "18",
          className: r()(i.button, t, { [i.open]: s, [i.withHighlight]: a }),
          children: [
            a &&
              (0, n.jsx)("defs", {
                children: (0, n.jsxs)("linearGradient", {
                  id: c,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, n.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, n.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, n.jsx)("path", {
                  stroke: a ? "url(#".concat(c, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
                  stroke: a ? "url(#".concat(c, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    655525: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return o;
        },
      });
      var n = t(735250);
      t(470079);
      var a = t(248042),
        r = t(227140);
      function o() {
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
        r = t(735250);
      t(470079);
      var o = t(120356),
        i = t.n(o),
        c = t(442837),
        l = t(246946),
        u = t(91802),
        d = t(222727),
        f = t(981631),
        p = t(526207),
        g = t(500052),
        x = t(375832),
        b = t(992171),
        v = t(937064),
        _ = t(434336),
        h = t(128955),
        S = t(803353),
        C = t(479388),
        T = t(179581),
        A = t(13174),
        E = t(580248),
        L = t(966294),
        I = t(302143),
        m = t(146121),
        B = t(705500),
        M = t(402127),
        j = t(153652),
        U = t(485487),
        N = t(200985),
        O = t(270930),
        P = t(46514),
        R = t(750876),
        w = t(993855),
        D = t(701497),
        G = t(937717),
        Z = t(165194),
        y = t(208802),
        k = t(145905),
        F = t(335302),
        H = t(956172),
        Y = t(695579),
        V = t(541764),
        W = t(191706),
        X = t(67528),
        K = t(332150),
        z = t(581902),
        J = t(167219),
        Q = t(704381),
        $ = t(591417),
        q = t(929883),
        ee = t(261137),
        es = t(958700);
      ((a = n || (n = {}))[(a.PrivateMessages = 0)] = "PrivateMessages"),
        (a[(a.SettingsMenu = 1)] = "SettingsMenu");
      let et = new Map([
        ["PE", W],
        ["PH", X],
        ["CL", h],
        ["CO", S],
        ["AR", g],
        ["JP", R],
        ["VN", es],
        ["TH", ee],
        ["ID", U],
        ["MY", H],
        ["MX", F],
        ["KR", w],
        ["BG", v],
        ["CZ", T],
        ["HU", j],
        ["RO", J],
        ["SE", Q],
        ["CY", C],
        ["EE", E],
        ["IS", O],
        ["IE", N],
        ["LV", y],
        ["LI", D],
        ["LT", G],
        ["LU", Z],
        ["MT", k],
        ["SK", q],
        ["SI", $],
        ["GR", B],
        ["FI", I],
        ["PT", z],
        ["NO", V],
        ["BE", b],
        ["AT", x],
        ["CH", _],
        ["FR", m],
        ["DE", A],
        ["ES", L],
        ["IT", P],
        ["NL", Y],
        ["PL", K],
        ["HR", M],
      ]);
      function en(e) {
        let { entryPoint: s, className: t } = e,
          a = (0, c.e7)([l.Z], () => l.Z.hidePersonalInformation),
          o = (0, u.n)(),
          g = null == o ? void 0 : o.countryCode;
        if (((0, d.U)(f.jXE.SETTINGS_PREMIUM, g), null == g || !et.has(g) || a))
          return null;
        let x = et.get(g),
          b = "badgeIcon" + n[s];
        return (0, r.jsx)("img", {
          className: i()(t, p[b]),
          "aria-hidden": !0,
          alt: "Wumpus holding a country-specific flag",
          src: x,
        });
      }
    },
    924540: function (e, s, t) {
      t.d(s, {
        $H: function () {
          return b;
        },
        GN: function () {
          return v;
        },
      });
      var n = t(735250),
        a = t(470079),
        r = t(120356),
        o = t.n(r),
        i = t(481060),
        c = t(774078),
        l = t(55935),
        u = t(74538),
        d = t(639119),
        f = t(474936),
        p = t(689938),
        g = t(742774);
      function x(e) {
        let { isTabSelected: s, expiresAt: t, trialDuration: r } = e,
          u = a.useMemo(() => Date.parse(t), [t]),
          d = (0, c.Z)(u, 6e4);
        return Object.values(d).every((e) => 0 === e)
          ? null
          : (0, n.jsx)(i.Tooltip, {
              text: (0, l.QX)(d, {
                days: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
                hours: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
                minutes:
                  p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES,
              }),
              children: (e) =>
                (0, n.jsxs)("div", {
                  ...e,
                  className: o()(
                    g.premiumTrialBadge,
                    g.premiumTrialAcknowledgedBadge,
                    { [g.premiumTrialBadgeSelected]: s },
                  ),
                  children: [
                    (0, n.jsx)(i.ClockIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: g.premiumTrialBadgeIcon,
                    }),
                    (0, n.jsxs)(i.Text, {
                      variant: "eyebrow",
                      children: [" ", r, " "],
                    }),
                  ],
                }),
            });
      }
      function b(e) {
        var s;
        let { isTabSelected: t, trialOffer: a } = e,
          r =
            null === (s = (0, d.N)()) || void 0 === s
              ? void 0
              : s.subscription_trial,
          o = (0, u.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count,
          });
        return (0, n.jsx)(_, {
          isTabSelected: t,
          badgeCopy: o,
          offerExpiresAt: a.expires_at,
          className:
            (null == r ? void 0 : r.sku_id) === f.Si.TIER_2
              ? g.premiumTrialTier2UnacknowledgedBadge
              : g.premiumTrialTier0UnacknowledgedBadge,
        });
      }
      function v(e) {
        let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
          r = p.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
            percent: t.discount.amount,
          });
        return (0, n.jsx)(_, {
          isTabSelected: s,
          badgeCopy: a ? r : p.Z.Messages.PREMIUM_DISCOUNT_BADGE,
          offerExpiresAt: t.expires_at,
          className: g.premiumDiscountUnacknowledgedBadge,
        });
      }
      function _(e) {
        let {
          isTabSelected: s,
          badgeCopy: t,
          offerExpiresAt: a,
          className: r,
        } = e;
        return null != a
          ? (0, n.jsx)(x, { expiresAt: a, isTabSelected: s, trialDuration: t })
          : (0, n.jsx)("div", {
              className: o()(g.premiumTrialBadge, r),
              children: (0, n.jsx)(i.Text, {
                variant: "eyebrow",
                className: g.premiumOfferBadgeCopy,
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
      var n = t(735250);
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
      t(470079);
    },
    227140: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return l;
        },
      });
      var n = t(735250);
      t(470079);
      var a = t(120356),
        r = t.n(a),
        o = t(481060),
        i = t(679768),
        c = t(704448);
      function l(e) {
        let { copy: s, showStars: t = !0, className: a } = e;
        return (0, n.jsxs)("div", {
          className: r()(c.badgeContainer, a),
          children: [
            t &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", {
                    className: r()(c.star, c.starLeft),
                    children: (0, n.jsx)(i.Z, { width: "10", height: "10" }),
                  }),
                  (0, n.jsx)("span", {
                    className: r()(c.star, c.starRight),
                    children: (0, n.jsx)(i.Z, { width: "14", height: "14" }),
                  }),
                ],
              }),
            (0, n.jsx)(o.Text, {
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
        o,
        i = t(442837),
        c = t(570140);
      let l = {},
        u = null,
        d = [],
        f = !1,
        p = !1,
        g = null,
        x = null;
      function b() {
        p = !0;
      }
      class v extends (n = i.ZP.Store) {
        getAppliedGuildBoostsForGuild(e) {
          return null != l[e] ? l[e].subscriptions : null;
        }
        getLastFetchedAtForGuild(e) {
          return null != l[e] ? l[e].lastFetchedAt : null;
        }
        getCurrentUserAppliedBoosts() {
          return d;
        }
        getAppliedGuildBoost(e) {
          return d.find((s) => s.id === e);
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
          return u;
        }
        get isFetchingCurrentUserAppliedBoosts() {
          return f;
        }
      }
      (o = "AppliedGuildBoostStore"),
        (r = "displayName") in (a = v)
          ? Object.defineProperty(a, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = o),
        (s.Z = new v(c.Z, {
          GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: s, appliedBoosts: t } = e;
            l[s] = { subscriptions: t, lastFetchedAt: Date.now() };
          },
          USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: s } = e;
            (f = !1), (d = s);
          },
          APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: s } = e;
            u = s;
          },
          GUILD_UNAPPLY_BOOST_START: b,
          GUILD_APPLY_BOOST_START: b,
          GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: s } = e,
              t = new Set(s.map((e) => e.id));
            (d = [...s, ...d.filter((e) => !t.has(e.id))]),
              (g = null),
              (p = !1);
          },
          GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (g = s);
          },
          GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: s } = e;
            (d = d.filter((e) => e.id !== s)), (p = !1);
          },
          GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (x = s);
          },
          USER_APPLIED_BOOSTS_FETCH_START: function () {
            f = !0;
          },
        }));
    },
  },
]);
//# sourceMappingURL=c3e29aef2bee8aafd9a1.js.map
