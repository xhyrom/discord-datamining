"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97313"],
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
        r = t(200651),
        o = t(192379),
        a = t(120356),
        i = t.n(a),
        c = t(481060),
        l = t(37234),
        u = t(230711),
        d = t(981631),
        f = t(388032),
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
      class x extends (n = o.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: p.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: p.streamerModeEnabledImage }),
              (0, r.jsx)(c.Clickable, {
                className: i()(p.streamerModeEnabledBtn, {
                  [p.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
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
    927359: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return c;
        },
        a: function () {
          return n;
        },
      }),
        t(411104);
      var n,
        r,
        o = t(774078),
        a = t(55935),
        i = t(388032);
      function c(e, s) {
        let t;
        switch (s) {
          case 0:
            t = {
              days: i.t["/wnvqK"],
              hours: i.t.Jsq0XF,
              minutes: i.t["SBd+Bg"],
            };
            break;
          case 1:
            t = { days: i.t.UD5nn5, hours: i.t.Hg8FeX, minutes: i.t.XSbQZW };
            break;
          case 2:
            t = { days: i.t.rLqNaW, hours: i.t.d1LvCA, minutes: i.t.Z2LX7O };
            break;
          case 3:
            t = { days: i.t.fYmir6, hours: i.t["C3RO+v"], minutes: i.t.r77oHR };
            break;
          default:
            throw Error(
              "Unknown messageType (".concat(s, ") when rendering time left"),
            );
        }
        let n = (0, o.Z)(e.toDate(), 6e4);
        return (0, a.QX)(n, t);
      }
      ((r = n || (n = {}))[(r.SHORT_TIME_LEFT = 0)] = "SHORT_TIME_LEFT"),
        (r[(r.LONG_TIME_LEFT = 1)] = "LONG_TIME_LEFT"),
        (r[(r.ENDS_IN = 2)] = "ENDS_IN"),
        (r[(r.SHORT_TIME = 3)] = "SHORT_TIME");
    },
    767870: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return p;
        },
      });
      var n = t(200651),
        r = t(120356),
        o = t.n(r),
        a = t(927359),
        i = t(325767),
        c = t(823188),
        l = t(860553);
      let u = "premium_tier_gradient",
        d = "smaller_sparkle_gradient";
      function f(e) {
        let {
          width: s = 14,
          height: t = 15,
          color: r = "white",
          foreground: o,
          ...a
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, i.Z)({ ...a }),
          preserveAspectRatio: "none",
          width: s,
          height: t,
          viewBox: "0 0 14 15",
          className: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("defs", {
              children: (0, n.jsxs)("linearGradient", {
                id: u,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%",
                children: [
                  (0, n.jsx)("stop", { offset: "0%", stopColor: "#8547C6" }),
                  (0, n.jsx)("stop", { offset: "50%", stopColor: "#B845C1" }),
                  (0, n.jsx)("stop", { offset: "100%", stopColor: "#AB5D8A" }),
                ],
              }),
            }),
            (0, n.jsxs)("linearGradient", {
              id: d,
              x1: "-4.95474",
              y1: "5.44067",
              x2: "11.2384",
              y2: "8.58386",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, n.jsx)("stop", { stopColor: "#8547C6" }),
                (0, n.jsx)("stop", { offset: "0.52899", stopColor: "#B845C1" }),
                (0, n.jsx)("stop", { offset: "1", stopColor: "#AB5D8A" }),
              ],
            }),
            (0, n.jsx)("path", {
              d: "M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z",
              fill: r,
            }),
          ],
        });
      }
      function p(e) {
        let {
            className: s,
            endsAt: t,
            messageStyle: r,
            upperCase: i,
            showSparkles: p,
          } = e,
          g = (0, a.Z)(t, r);
        return (
          i && g.toUpperCase(),
          (0, n.jsxs)("div", {
            className: o()(s, l.countDown),
            children: [
              p
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(f, {
                        foreground: l.sparkleStar1,
                        color: "url(#".concat(d, ")"),
                      }),
                      (0, n.jsx)(f, {
                        foreground: l.sparkleStar2,
                        color: "url(#".concat(u, ")"),
                      }),
                    ],
                  })
                : null,
              (0, n.jsx)(c.mn, {
                text: g,
                colorOptions: c.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL,
              }),
            ],
          })
        );
      }
    },
    655525: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var n = t(200651);
      t(192379);
      var r = t(248042),
        o = t(227140);
      function a() {
        let e = (0, r.Vi)(),
          s = (0, r.W1)();
        return e ? (0, n.jsx)(o.Z, { copy: s }) : null;
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
        r,
        o = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
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
        C = t(434336),
        _ = t(128955),
        h = t(803353),
        S = t(479388),
        T = t(179581),
        m = t(13174),
        L = t(580248),
        E = t(966294),
        j = t(302143),
        B = t(146121),
        I = t(705500),
        A = t(402127),
        O = t(153652),
        w = t(485487),
        N = t(200985),
        U = t(270930),
        P = t(46514),
        y = t(750876),
        D = t(993855),
        M = t(701497),
        R = t(937717),
        Z = t(165194),
        G = t(208802),
        k = t(145905),
        F = t(335302),
        H = t(956172),
        Y = t(695579),
        X = t(541764),
        W = t(191706),
        V = t(67528),
        q = t(332150),
        K = t(581902),
        Q = t(167219),
        z = t(704381),
        J = t(591417),
        $ = t(929883),
        ee = t(261137),
        es = t(958700);
      ((r = n || (n = {}))[(r.PrivateMessages = 0)] = "PrivateMessages"),
        (r[(r.SettingsMenu = 1)] = "SettingsMenu");
      let et = new Map([
        ["PE", W],
        ["PH", V],
        ["CL", _],
        ["CO", h],
        ["AR", g],
        ["JP", y],
        ["VN", es],
        ["TH", ee],
        ["ID", w],
        ["MY", H],
        ["MX", F],
        ["KR", D],
        ["BG", v],
        ["CZ", T],
        ["HU", O],
        ["RO", Q],
        ["SE", z],
        ["CY", S],
        ["EE", L],
        ["IS", U],
        ["IE", N],
        ["LV", G],
        ["LI", M],
        ["LT", R],
        ["LU", Z],
        ["MT", k],
        ["SK", $],
        ["SI", J],
        ["GR", I],
        ["FI", j],
        ["PT", K],
        ["NO", X],
        ["BE", b],
        ["AT", x],
        ["CH", C],
        ["FR", B],
        ["DE", m],
        ["ES", E],
        ["IT", P],
        ["NL", Y],
        ["PL", q],
        ["HR", A],
      ]);
      function en(e) {
        let { entryPoint: s, className: t } = e,
          r = (0, c.e7)([l.Z], () => l.Z.hidePersonalInformation),
          a = (0, u.n)(),
          g = null == a ? void 0 : a.countryCode;
        if (((0, d.U)(f.jXE.SETTINGS_PREMIUM, g), null == g || !et.has(g) || r))
          return null;
        let x = et.get(g),
          b = "badgeIcon" + n[s];
        return (0, o.jsx)("img", {
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
        _y: function () {
          return C;
        },
      });
      var n = t(200651),
        r = t(192379),
        o = t(120356),
        a = t.n(o),
        i = t(481060),
        c = t(774078),
        l = t(55935),
        u = t(74538),
        d = t(639119),
        f = t(474936),
        p = t(388032),
        g = t(742774);
      function x(e) {
        let { isTabSelected: s, expiresAt: t, trialDuration: o } = e,
          u = r.useMemo(() => Date.parse(t), [t]),
          d = (0, c.Z)(u, 6e4);
        return Object.values(d).every((e) => 0 === e)
          ? null
          : (0, n.jsx)(i.Tooltip, {
              text: (0, l.QX)(d, {
                days: p.t.qVGNkZ,
                hours: p.t.wyg9a2,
                minutes: p.t.IzmIlZ,
              }),
              children: (e) =>
                (0, n.jsxs)("div", {
                  ...e,
                  className: a()(
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
                      children: [" ", o, " "],
                    }),
                  ],
                }),
            });
      }
      function b(e) {
        var s;
        let { isTabSelected: t, trialOffer: r } = e,
          o =
            null === (s = (0, d.N)()) || void 0 === s
              ? void 0
              : s.subscription_trial,
          a = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count,
          });
        return (0, n.jsx)(C, {
          isTabSelected: t,
          badgeCopy: a,
          offerExpiresAt: r.expires_at,
          className:
            (null == o ? void 0 : o.sku_id) === f.Si.TIER_2
              ? g.premiumTrialTier2UnacknowledgedBadge
              : g.premiumTrialTier0UnacknowledgedBadge,
        });
      }
      function v(e) {
        let { isTabSelected: s, userDiscount: t, includesAmountOff: r } = e,
          o = p.intl.formatToPlainString(p.t.iiLbvr, {
            percent: t.discount.amount,
          });
        return (0, n.jsx)(C, {
          isTabSelected: s,
          badgeCopy: r ? o : p.intl.string(p.t["/DTtr6"]),
          offerExpiresAt: t.expires_at,
          className: g.premiumDiscountUnacknowledgedBadge,
        });
      }
      function C(e) {
        let {
          isTabSelected: s,
          badgeCopy: t,
          offerExpiresAt: r,
          className: o,
        } = e;
        return null != r
          ? (0, n.jsx)(x, { expiresAt: r, isTabSelected: s, trialDuration: t })
          : (0, n.jsx)("div", {
              className: a()(g.premiumTrialBadge, o),
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
          return r;
        },
      });
      var n = t(200651);
      function r(e) {
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
          return l;
        },
      });
      var n = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        a = t(481060),
        i = t(679768),
        c = t(704448);
      function l(e) {
        let { copy: s, showStars: t = !0, className: r } = e;
        return (0, n.jsxs)("div", {
          className: o()(c.badgeContainer, r),
          children: [
            t &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", {
                    className: o()(c.star, c.starLeft),
                    children: (0, n.jsx)(i.Z, { width: "10", height: "10" }),
                  }),
                  (0, n.jsx)("span", {
                    className: o()(c.star, c.starRight),
                    children: (0, n.jsx)(i.Z, { width: "14", height: "14" }),
                  }),
                ],
              }),
            (0, n.jsx)(a.Text, {
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
        r,
        o,
        a,
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
      (a = "AppliedGuildBoostStore"),
        (o = "displayName") in (r = v)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
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
//# sourceMappingURL=c9ec3430e7c1bc701ba0.js.map
