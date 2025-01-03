"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42309"],
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
    278605: function (e, t, s) {
      s.d(t, {
        ah: function () {
          return i;
        },
        xP: function () {
          return a;
        },
      });
      var n = s(818083),
        r = s(987338);
      let i = (0, n.B)({
        kind: "user",
        id: "2024-11_marketing_page_v2_experiment",
        label: "Marketing Page V2 Experiment",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
      function a(e) {
        let { enabled: t } = i.useExperiment(
          { location: e },
          { autoTrackExposure: !1 },
        );
        return t;
      }
    },
    655525: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(200651);
      s(192379);
      var r = s(346497),
        i = s(227140);
      function a() {
        let e = (0, r.Vi)(),
          t = (0, r.W1)();
        return e ? (0, n.jsx)(i.Z, { copy: t }) : null;
      }
    },
    912244: function (e, t, s) {
      s.d(t, {
        N: function () {
          return r;
        },
      });
      var n = s(520540);
      function r(e) {
        let { enabled: t, eligibleToFetch: s } = n.g.useExperiment(
          { location: e },
          { autoTrackExposure: !1 },
        );
        return { enabled: t, eligibleToFetch: s };
      }
    },
    533525: function (e, t, s) {
      s.d(t, {
        b: function () {
          return o;
        },
      });
      var n = s(442837),
        r = s(276444),
        i = s(912244),
        a = s(232076);
      let o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          { enabled: s, eligibleToFetch: o } = (0, i.N)(e);
        (0, a.B)(e, !o || t);
        let l = (0, n.e7)([r.Z], () => r.Z.getIsEligibleToSendReferrals());
        return s && l;
      };
    },
    232076: function (e, t, s) {
      s.d(t, {
        B: function () {
          return p;
        },
      });
      var n = s(192379),
        r = s(442837),
        i = s(594174),
        a = s(111361),
        o = s(140465),
        l = s(775412),
        c = s(276444),
        u = s(912244),
        d = s(474936);
      let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          s = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
          p = (0, o.t7)(),
          f = (0, l._O)(),
          { eligibleToFetch: x } = (0, u.N)(e),
          g =
            x &&
            (null == s ? void 0 : s.verified) === !0 &&
            (0, a.M5)(s, d.p9.TIER_2) &&
            !p &&
            !f;
        n.useEffect(() => {
          g && !t && c.Z.checkAndFetchReferralsRemaining();
        }, [g, t]);
      };
    },
    796634: function (e, t, s) {
      s.d(t, {
        G: function () {
          return c;
        },
        Q: function () {
          return l;
        },
      });
      var n = s(192379),
        r = s(442837),
        i = s(232567),
        a = s(594174),
        o = s(276444);
      let l = 3;
      function c() {
        let e = (0, r.Wu)([o.Z], () => o.Z.getSentUserIds()),
          t = (0, r.Wu)([a.default], () =>
            e.map((e) => a.default.getUser(e)).filter((e) => null != e),
          );
        n.useEffect(() => {
          e.forEach((e) => {
            (0, i.PR)(e);
          });
        }, [e]);
        let s = e.length === l;
        return {
          referralSentUsers: t,
          hasSentAllReferrals: s,
          refreshAt: (0, r.e7)([o.Z], () => o.Z.getRefreshAt()),
        };
      }
    },
    52188: function (e, t, s) {
      s.d(t, {
        U: function () {
          return n;
        },
        k: function () {
          return en;
        },
      }),
        s(47120);
      var n,
        r,
        i = s(200651);
      s(192379);
      var a = s(120356),
        o = s.n(a),
        l = s(442837),
        c = s(246946),
        u = s(91802),
        d = s(222727),
        p = s(981631),
        f = s(767493),
        x = s(500052),
        g = s(375832),
        C = s(992171),
        _ = s(937064),
        m = s(434336),
        h = s(128955),
        v = s(803353),
        L = s(479388),
        A = s(179581),
        E = s(13174),
        j = s(580248),
        O = s(966294),
        T = s(302143),
        b = s(146121),
        I = s(705500),
        N = s(402127),
        S = s(153652),
        y = s(485487),
        R = s(200985),
        w = s(270930),
        B = s(46514),
        P = s(750876),
        G = s(993855),
        U = s(701497),
        F = s(937717),
        Z = s(165194),
        k = s(251977),
        D = s(145905),
        M = s(335302),
        V = s(956172),
        Q = s(695579),
        H = s(541764),
        W = s(191706),
        z = s(67528),
        K = s(332150),
        Y = s(581902),
        q = s(167219),
        $ = s(704381),
        X = s(591417),
        J = s(929883),
        ee = s(261137),
        et = s(958700);
      ((r = n || (n = {}))[(r.PrivateMessages = 0)] = "PrivateMessages"),
        (r[(r.SettingsMenu = 1)] = "SettingsMenu");
      let es = new Map([
        ["PE", W],
        ["PH", z],
        ["CL", h],
        ["CO", v],
        ["AR", x],
        ["JP", P],
        ["VN", et],
        ["TH", ee],
        ["ID", y],
        ["MY", V],
        ["MX", M],
        ["KR", G],
        ["BG", _],
        ["CZ", A],
        ["HU", S],
        ["RO", q],
        ["SE", $],
        ["CY", L],
        ["EE", j],
        ["IS", w],
        ["IE", R],
        ["LV", k],
        ["LI", U],
        ["LT", F],
        ["LU", Z],
        ["MT", D],
        ["SK", J],
        ["SI", X],
        ["GR", I],
        ["FI", T],
        ["PT", Y],
        ["NO", H],
        ["BE", C],
        ["AT", g],
        ["CH", m],
        ["FR", b],
        ["DE", E],
        ["ES", O],
        ["IT", B],
        ["NL", Q],
        ["PL", K],
        ["HR", N],
      ]);
      function en(e) {
        let { entryPoint: t, className: s } = e,
          r = (0, l.e7)([c.Z], () => c.Z.hidePersonalInformation),
          a = (0, u.n)(),
          x = null == a ? void 0 : a.countryCode;
        if (((0, d.U)(p.jXE.SETTINGS_PREMIUM, x), null == x || !es.has(x) || r))
          return null;
        let g = es.get(x),
          C = "badgeIcon" + n[t];
        return (0, i.jsx)("img", {
          className: o()(s, f[C]),
          "aria-hidden": !0,
          alt: "Wumpus holding a country-specific flag",
          src: g,
        });
      }
    },
    924540: function (e, t, s) {
      s.d(t, {
        $H: function () {
          return _;
        },
        GN: function () {
          return m;
        },
        _y: function () {
          return h;
        },
      });
      var n = s(200651),
        r = s(192379),
        i = s(120356),
        a = s.n(i),
        o = s(481060),
        l = s(774078),
        c = s(55935),
        u = s(74538),
        d = s(278605),
        p = s(639119),
        f = s(474936),
        x = s(388032),
        g = s(229830);
      function C(e) {
        let {
            isTabSelected: t,
            expiresAt: s,
            trialDuration: i,
            className: u,
          } = e,
          d = r.useMemo(() => Date.parse(s), [s]),
          p = (0, l.Z)(d, 6e4);
        return Object.values(p).every((e) => 0 === e)
          ? null
          : (0, n.jsx)(o.Tooltip, {
              text: (0, c.QX)(p, {
                days: x.t.qVGNkZ,
                hours: x.t.wyg9a2,
                minutes: x.t.IzmIlZ,
              }),
              children: (e) =>
                (0, n.jsxs)("div", {
                  ...e,
                  className: a()(
                    g.premiumTrialBadge,
                    g.premiumTrialAcknowledgedBadge,
                    u,
                    { [g.premiumTrialBadgeSelected]: t },
                  ),
                  children: [
                    (0, n.jsx)(o.ClockIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: g.premiumTrialBadgeIcon,
                    }),
                    (0, n.jsxs)(o.Text, {
                      variant: "eyebrow",
                      children: [" ", i, " "],
                    }),
                  ],
                }),
            });
      }
      function _(e) {
        var t, s, r;
        let { isTabSelected: i, trialOffer: a } = e,
          o =
            null === (t = (0, p.N)()) || void 0 === t
              ? void 0
              : t.subscription_trial,
          l = (0, d.xP)("OfferTabBadge"),
          c = (0, u.a5)({
            intervalType: null == o ? void 0 : o.interval,
            intervalCount: null == o ? void 0 : o.interval_count,
          });
        return (0, n.jsx)(h, {
          isTabSelected: i,
          badgeCopy: c,
          offerExpiresAt: a.expires_at,
          className:
            ((s = l),
            (r = null == o ? void 0 : o.sku_id),
            s
              ? g.premiumTrialBadgeV2
              : r === f.Si.TIER_2
                ? g.premiumTrialTier2UnacknowledgedBadge
                : g.premiumTrialTier0UnacknowledgedBadge),
        });
      }
      function m(e) {
        let { isTabSelected: t, userDiscount: s, includesAmountOff: r } = e,
          i = x.intl.formatToPlainString(x.t.iiLbvr, {
            percent: s.discount.amount,
          }),
          a = (0, d.xP)("OfferTabBadge");
        return (0, n.jsx)(h, {
          isTabSelected: t,
          badgeCopy: r ? i : x.intl.string(x.t["/DTtr6"]),
          offerExpiresAt: s.expires_at,
          className: a
            ? g.premiumTrialBadgeV2
            : g.premiumDiscountUnacknowledgedBadge,
        });
      }
      function h(e) {
        let {
          isTabSelected: t,
          badgeCopy: s,
          offerExpiresAt: r,
          className: i,
          ackedClassName: l,
        } = e;
        return null != r
          ? (0, n.jsx)(C, {
              className: l,
              expiresAt: r,
              isTabSelected: t,
              trialDuration: s,
            })
          : (0, n.jsx)("div", {
              className: a()(g.premiumTrialBadge, i),
              children: (0, n.jsx)(o.Text, {
                variant: "eyebrow",
                className: g.premiumOfferBadgeCopy,
                children: s,
              }),
            });
      }
    },
    474486: function (e, t, s) {
      s.d(t, {
        A7: function () {
          return S;
        },
        CI: function () {
          return y;
        },
        dX: function () {
          return P;
        },
        j$: function () {
          return r;
        },
        lH: function () {
          return R;
        },
      });
      var n,
        r,
        i = s(200651),
        a = s(192379),
        o = s(990547),
        l = s(704215),
        c = s(481060),
        u = s(774078),
        d = s(213609),
        p = s(605236),
        f = s(765585),
        x = s(703656),
        g = s(706454),
        C = s(74538),
        _ = s(924540),
        m = s(119269),
        h = s(938736),
        v = s(227140),
        L = s(981631),
        A = s(921944),
        E = s(388032),
        j = s(762042);
      let O = "url(#dark-purple-gradient)";
      function T(e) {
        return e.toLocaleString(g.default.locale, {
          minimumIntegerDigits: 2,
          useGrouping: !1,
        });
      }
      ((n = r || (r = {})).REFERRAL_PROGRAM = "referral_program"),
        (n.TRIAL_FOR_ALL = "trial_for_all");
      let b = () =>
          (0, i.jsxs)("div", {
            className: j.coachtipContent,
            children: [
              (0, i.jsx)(c.Heading, {
                variant: "heading-sm/bold",
                children: E.intl.string(E.t.USo4s7),
              }),
              (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: E.intl.format(E.t.AGKQq6, { numReferrals: 3 }),
              }),
            ],
          }),
        I = () =>
          (0, i.jsx)("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z",
              fill: "white",
            }),
          }),
        N = () =>
          (0, p.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, {
            dismissAction: A.L.TAKE_ACTION,
          }),
        S = (e) => {
          let { children: t } = e;
          return (0, i.jsx)(c.Popout, {
            shouldShow: !0,
            renderPopout: () =>
              (0, i.jsx)(f.Z, {
                artClassName: j.coachmarkArt,
                dismissIconClassName: j.exitIcon,
                onDismissIconClick: N,
                dismissIcon: (0, i.jsx)(I, {}),
                headerClassName: j.incentiveCoachtipContent,
                contentClassName: j.incentiveCoachtipContainer,
                pointerClassName: j.incentiveTooltipPointer,
                onTryFeature: () => {
                  (0, x.uL)(L.Z5c.NITRO_HOME), N();
                },
                art: (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(m.ZP, {
                    staticPercentage: 100,
                    iconClassName: j.incentiveIcon,
                    showAnimations: !1,
                    progressCircleVariation: m.Qo.NITRO_LOGO,
                    ellipseOpacity: 1,
                    circleColor: O,
                    circleStroke: O,
                    progressCircleStrokeSize: 4,
                  }),
                }),
                position: "right",
                align: "top",
                tryItText: E.intl.string(E.t.RzWDqa),
                header: E.intl.formatToPlainString(E.t.md2GU1, {
                  discountRate: h.Nq,
                }),
                hideDismissButton: !0,
                body: E.intl.formatToPlainString(E.t.mxPPxc, {
                  discountRate: h.Nq,
                }),
                dismissibleContent:
                  l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                maxWidth: 320,
              }),
            children: t,
          });
        },
        y = (e) => {
          let t,
            { children: s, variant: n, trialOffer: r, isHovered: a } = e,
            l = "referral_program" === n;
          return (
            (0, d.Z)(
              {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.TRIAL_FOR_ALL_COACHTIP,
              },
              { disableTrack: !a || l },
              [a, l],
            ),
            (t = l
              ? (0, i.jsxs)("div", {
                  className: j.coachTipContainer,
                  children: [
                    (0, i.jsx)("div", {
                      className: j.iconContainer,
                      children: (0, i.jsx)(m.ZP, {
                        staticPercentage: 100,
                        iconClassName: j.icon,
                        showAnimations: !0,
                        progressCircleVariation: m.Qo.NITRO_LOGO,
                        ellipseOpacity: 1,
                        customAnimationClassName: j.customCircleAnimation,
                        circleColor: "url(#purple-gradient)",
                      }),
                    }),
                    (0, i.jsx)(b, {}),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: j.t4ACoachTipContainer,
                  children: [
                    (0, i.jsx)("div", {
                      className: j.t4ACoachtipArtOuterContainer,
                      children: (0, i.jsx)(w, {}),
                    }),
                    (0, i.jsx)(B, {
                      trialExpiration:
                        (null == r ? void 0 : r.expires_at) != null
                          ? Date.parse(r.expires_at)
                          : void 0,
                    }),
                  ],
                })),
            (0, i.jsx)(c.Tooltip, {
              text: t,
              position: "right",
              "aria-label": l
                ? E.intl.string(E.t.USo4s7)
                : E.intl.string(E.t.Kkcmj4),
              tooltipClassName: l
                ? j.marketingBadgeTooltip
                : j.t4AMarketingBadgeTooltip,
              allowOverflow: !0,
              tooltipContentClassName: j.tooltipContent,
              children: (e) => (0, i.jsx)("div", { ...e, children: s }),
            })
          );
        },
        R = (e) => {
          let { isSelected: t, onSelect: s } = e;
          return (
            a.useEffect(() => {
              t && s();
            }, [t, s]),
            (0, i.jsx)(v.Z, { copy: E.intl.string(E.t.y2b7CA) })
          );
        },
        w = () =>
          (0, i.jsx)("div", {
            className: j.t4ACoachtipArtInnerContainer,
            children: (0, i.jsx)("img", {
              src: "https://cdn.discordapp.com/assets/content/49060ae409d6cf2fa9b58ad200d60c7f3f68b0927ef57df90b5b9c06c8d1bbe7.png",
              alt: "",
            }),
          }),
        B = (e) => {
          let { trialExpiration: t } = e,
            s = (0, u.Z)(
              null != t ? t : Date.parse("2024-11-22T08:00:00Z"),
              1e3,
            );
          return (0, i.jsxs)("div", {
            className: j.t4aCoachtipContent,
            children: [
              (0, i.jsx)(c.Heading, {
                variant: "heading-sm/bold",
                children: E.intl.string(E.t.Kkcmj4),
              }),
              (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                children:
                  s.days > 0
                    ? E.intl.formatToPlainString(E.t.G1Ldn5, { days: s.days })
                    : E.intl.formatToPlainString(E.t.h982oq, {
                        hours: T(s.hours),
                        minutes: T(s.minutes),
                        seconds: T(s.seconds),
                      }),
              }),
            ],
          });
        },
        P = (e) => {
          var t, s;
          let { isSelected: n, trialOffer: r, q4MarketingEnabled: o } = e,
            c = (0, p.wE)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
            u =
              null === (t = r.subscription_trial) || void 0 === t
                ? void 0
                : t.interval,
            d =
              null === (s = r.subscription_trial) || void 0 === s
                ? void 0
                : s.interval_count,
            f = (0, C.a5)({
              intervalType: null !== u ? u : void 0,
              intervalCount: null !== d ? d : void 0,
            });
          return (
            a.useEffect(() => {
              n &&
                !c &&
                (0, p.EW)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, {
                  dismissAction: A.L.TAKE_ACTION,
                });
            }, [n, c]),
            (0, i.jsx)(_._y, {
              ackedClassName: j.trialAckedBadge,
              className: j.trialBadgeBackground,
              isTabSelected: n,
              badgeCopy: o ? E.intl.string(E.t.OS9KPj) : f,
              offerExpiresAt: c ? r.expires_at : void 0,
            })
          );
        };
    },
    679768: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(200651);
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
      s(192379);
    },
    967538: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var r = s(325767);
      t.Z = (e) => {
        let {
          className: t,
          backgroundColor: s,
          backgroundCircleSize: i,
          ...a
        } = e;
        return (0, n.jsxs)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 100 100",
          fill: "none",
          style: { overflow: "visible" },
          xmlns: "http://www.w3.org/2000/svg",
          ...(0, r.Z)({ ...a }),
          children: [
            (0, n.jsx)("circle", {
              r: null != i ? i : "40%",
              cx: "50%",
              cy: "50%",
              className: s,
            }),
            (0, n.jsxs)("g", {
              transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
              children: [
                (0, n.jsx)("path", {
                  d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                  fill: "#FF6BFA",
                  className: t,
                }),
                (0, n.jsx)("path", {
                  d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                  fill: "#FFDEF9",
                }),
                (0, n.jsx)("path", {
                  d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                  fill: "#FFB0FF",
                }),
              ],
            }),
          ],
        });
      };
    },
    885302: function (e, t, s) {
      var n = s(200651);
      s(192379);
      var r = s(780384),
        i = s(410030),
        a = s(325767);
      let o = (e, t) => (null != t ? t : e ? 0.5 : 0.2),
        l = (e, t) =>
          null != t
            ? t
            : e
              ? "url(#paint0_linear_1055_83268)"
              : "url(#paint0_linear_1282_11557)";
      t.Z = (e) => {
        let { ellipseOpacity: t, circleColor: s, ...c } = e,
          u = (0, i.ZP)(),
          d = (0, r.ap)(u),
          p = o(d, t),
          f = l(d, s);
        return (0, n.jsxs)("svg", {
          style: { overflow: "visible" },
          width: "80%",
          height: "80%",
          viewBox: "0 0 100 100",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...(0, a.Z)({ ...c }),
          children: [
            (0, n.jsxs)("svg", {
              width: "100",
              height: "100",
              viewBox: "0 0 114 114",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsxs)("defs", {
                  children: [
                    (0, n.jsxs)("linearGradient", {
                      id: "purple-gradient",
                      x1: "0%",
                      y1: "0%",
                      x2: "100%",
                      y2: "0%",
                      children: [
                        (0, n.jsx)("stop", {
                          offset: "0%",
                          style: { stopColor: "#E2C7FA", stopOpacity: 1 },
                        }),
                        (0, n.jsx)("stop", {
                          offset: "100%",
                          style: { stopColor: "#F3D3DE", stopOpacity: 1 },
                        }),
                      ],
                    }),
                    (0, n.jsxs)("linearGradient", {
                      id: "dark-purple-gradient",
                      x1: "0%",
                      y1: "0%",
                      x2: "0%",
                      y2: "100%",
                      children: [
                        (0, n.jsx)("stop", {
                          offset: "0%",
                          style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                        }),
                        (0, n.jsx)("stop", {
                          offset: "100%",
                          style: { stopColor: "rgb(36,23,49)", stopOpacity: 1 },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("ellipse", {
                  cx: "57.2768",
                  cy: "57.0796",
                  rx: "56.3726",
                  ry: "56.3726",
                  fill: null != s ? s : f,
                  fillOpacity: p,
                }),
                (0, n.jsxs)("g", {
                  width: "65",
                  transform: "translate(50, 50) scale(.7) translate(-10, -39)",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, n.jsx)("path", {
                      d: "M42.0084 14.8866L33.7687 17.7832C33.3446 17.9281 32.9766 18.2015 32.7161 18.565C32.4555 18.9285 32.3154 19.3641 32.3154 19.8109C32.3154 20.2576 32.4555 20.6932 32.7161 21.0567C32.9766 21.4203 33.3446 21.6936 33.7687 21.8385L42.0084 24.7351C42.3147 24.8404 42.593 25.0138 42.8221 25.2422C43.0512 25.4705 43.2252 25.7478 43.3309 26.053L46.2373 34.2649C46.3827 34.6875 46.657 35.0543 47.0217 35.3139C47.3865 35.5736 47.8236 35.7132 48.2718 35.7132C48.7201 35.7132 49.1572 35.5736 49.522 35.3139C49.8867 35.0543 50.161 34.6875 50.3064 34.2649L53.2128 26.053C53.3204 25.7488 53.495 25.4725 53.7239 25.2444C53.9528 25.0164 54.23 24.8423 54.5353 24.7351L62.7896 21.8385C63.2136 21.6936 63.5817 21.4203 63.8422 21.0567C64.1028 20.6932 64.2428 20.2576 64.2428 19.8109C64.2428 19.3641 64.1028 18.9285 63.8422 18.565C63.5817 18.2015 63.2136 17.9281 62.7896 17.7832L54.5353 14.8866C54.2315 14.7767 53.9557 14.6018 53.7272 14.374C53.4987 14.1463 53.3231 13.8714 53.2128 13.5687L50.3064 5.34234C50.161 4.91974 49.8867 4.55297 49.522 4.2933C49.1572 4.03363 48.7201 3.89404 48.2718 3.89404C47.8236 3.89404 47.3865 4.03363 47.0217 4.2933C46.657 4.55297 46.3827 4.91974 46.2373 5.34234L43.3309 13.5687C43.2233 13.8729 43.0487 14.1492 42.8198 14.3773C42.591 14.6054 42.3137 14.7794 42.0084 14.8866Z",
                      fill: "white",
                      fillOpacity: d ? "0.6" : "0.4",
                    }),
                    (0, n.jsx)("path", {
                      d: "M34.0878 3.57968L33.0393 0.634802C32.9888 0.483384 32.8917 0.351665 32.7618 0.258321C32.6319 0.164978 32.4759 0.114746 32.3158 0.114746C32.1556 0.114746 31.9996 0.164978 31.8697 0.258321C31.7398 0.351665 31.6427 0.483384 31.5922 0.634802L30.6217 3.57968C30.5838 3.68745 30.5221 3.78534 30.4411 3.86607C30.3601 3.94681 30.2619 4.00831 30.1538 4.04602L27.1555 5.02189C27.0067 5.07415 26.8777 5.17117 26.7865 5.29956C26.6953 5.42795 26.6464 5.58137 26.6464 5.73868C26.6464 5.89598 26.6953 6.04941 26.7865 6.17779C26.8777 6.30618 27.0067 6.4032 27.1555 6.45547L30.0758 7.47451C30.1839 7.51222 30.2821 7.57373 30.3631 7.65446C30.4441 7.7352 30.5059 7.83308 30.5437 7.94085L31.5575 10.8426C31.6081 10.994 31.7052 11.1257 31.835 11.219C31.9649 11.3124 32.121 11.3626 32.2811 11.3626C32.4412 11.3626 32.5973 11.3124 32.7271 11.219C32.857 11.1257 32.9541 10.994 33.0047 10.8426L34.0878 7.94085C34.1257 7.83308 34.1874 7.7352 34.2684 7.65446C34.3494 7.57373 34.4476 7.51222 34.5558 7.47451L37.476 6.45547C37.6249 6.4032 37.7538 6.30618 37.845 6.17779C37.9362 6.04941 37.9852 5.89598 37.9852 5.73868C37.9852 5.58137 37.9362 5.42795 37.845 5.29956C37.7538 5.17117 37.6249 5.07415 37.476 5.02189L34.5211 4.00284C34.4237 3.9656 34.3349 3.90883 34.2604 3.83604C34.1859 3.76326 34.1271 3.676 34.0878 3.57968Z",
                      fill: "white",
                      fillOpacity: "0.8",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("defs", {
              children: [
                (0, n.jsxs)("filter", {
                  id: "filter0_d_1282_11577",
                  x: "-6.55945",
                  y: "0.382812",
                  width: "89.2926",
                  height: "70.3945",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    (0, n.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, n.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      result: "hardAlpha",
                    }),
                    (0, n.jsx)("feOffset", { dy: "4" }),
                    (0, n.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                    (0, n.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, n.jsx)("feColorMatrix", {
                      type: "matrix",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                    }),
                    (0, n.jsx)("feBlend", {
                      mode: "normal",
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_1282_11577",
                    }),
                    (0, n.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_1282_11577",
                      result: "shape",
                    }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_1282_11577",
                  x1: "3.44055",
                  y1: "31.5801",
                  x2: "72.7332",
                  y2: "31.5801",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint2_linear_1986_8686",
                  x1: "3.44073",
                  y1: "43.8345",
                  x2: "72.7334",
                  y2: "43.8345",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint1_linear_1282_11577",
                  x1: "3.44055",
                  y1: "31.5801",
                  x2: "72.7332",
                  y2: "31.5801",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint1_linear_1986_8686",
                  x1: "3.44073",
                  y1: "43.8345",
                  x2: "72.7334",
                  y2: "43.8345",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint2_linear_1282_11577",
                  x1: "3.44055",
                  y1: "31.5801",
                  x2: "72.7332",
                  y2: "31.5801",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_1986_8686",
                  x1: "3.44073",
                  y1: "43.8345",
                  x2: "72.7334",
                  y2: "43.8345",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_1282_11557",
                  x1: "0.904297",
                  y1: "56.5004",
                  x2: "113.649",
                  y2: "56.5004",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_684_72736",
                  x1: "0.904236",
                  y1: "57.0796",
                  x2: "113.649",
                  y2: "57.0796",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_1055_83179",
                  x1: "0.904236",
                  y1: "56.5005",
                  x2: "113.649",
                  y2: "56.5005",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_1055_83268",
                  x1: "0.904236",
                  y1: "57.2461",
                  x2: "113.649",
                  y2: "57.2461",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#B473F5" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("g", {
              filter: d ? void 0 : "url(#filter0_d_1282_11577)",
              transform: "translate(50, 50) scale(.8) translate(-44, -30)",
              children: [
                (0, n.jsx)("path", {
                  d: "M47.5359 37.8795C51.0149 37.8795 53.8352 35.0592 53.8352 31.5801C53.8352 28.1011 51.0149 25.2808 47.5359 25.2808C44.0568 25.2808 41.2365 28.1011 41.2365 31.5801C41.2365 35.0592 44.0568 37.8795 47.5359 37.8795Z",
                  fill: d
                    ? "url(#paint2_linear_1986_8686)"
                    : "url(#paint0_linear_1282_11577)",
                }),
                (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M22.3385 6.38281C20.599 6.38281 19.1889 7.79297 19.1889 9.53248C19.1889 11.272 20.599 12.6821 22.3385 12.6821H31.7875C33.527 12.6821 34.9372 14.0923 34.9372 15.8318C34.9372 17.5713 33.527 18.9815 31.7875 18.9815L17.614 18.9815C15.8745 18.9815 14.4644 20.3916 14.4644 22.1311C14.4644 23.8706 15.8745 25.2808 17.614 25.2808L25.4882 25.2808C27.2277 25.2808 28.6379 26.691 28.6379 28.4305C28.6379 30.17 27.2277 31.5801 25.4882 31.5801H19.1889C17.4494 31.5801 16.0392 32.9903 16.0392 34.7298C16.0392 36.4693 17.4494 37.8795 19.1889 37.8795H23.1324C25.9295 48.7472 35.7949 56.7774 47.5359 56.7774C61.4519 56.7774 72.7332 45.4962 72.7332 31.5801C72.7332 17.664 61.4519 6.38281 47.5359 6.38281H22.3385ZM47.5359 44.1788C54.4939 44.1788 60.1345 38.5382 60.1345 31.5801C60.1345 24.6221 54.4939 18.9815 47.5359 18.9815C40.5778 18.9815 34.9372 24.6221 34.9372 31.5801C34.9372 38.5382 40.5778 44.1788 47.5359 44.1788Z",
                  fill: d
                    ? "url(#paint1_linear_1986_8686)"
                    : "url(#paint1_linear_1282_11577)",
                }),
                (0, n.jsx)("path", {
                  d: "M8.16505 25.2808C9.90456 25.2808 11.3147 23.8706 11.3147 22.1311C11.3147 20.3916 9.90456 18.9815 8.16505 18.9815H6.59022C4.8507 18.9815 3.44055 20.3916 3.44055 22.1311C3.44055 23.8706 4.8507 25.2808 6.59022 25.2808H8.16505Z",
                  fill: d
                    ? "url(#paint0_linear_1986_8686)"
                    : "url(#paint2_linear_1282_11577)",
                }),
              ],
            }),
            (0, n.jsx)("g", {
              width: "65",
              transform: "translate(50, 50) scale(0.81) translate(-26, -42)",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M12.6686 60.7298L10.9101 55.7911C10.8254 55.5372 10.6626 55.3163 10.4448 55.1597C10.227 55.0032 9.96524 54.9189 9.69671 54.9189C9.42818 54.9189 9.16646 55.0032 8.94866 55.1597C8.73086 55.3163 8.56804 55.5372 8.48326 55.7911L6.85565 60.7298C6.7922 60.9105 6.6887 61.0747 6.55284 61.2101C6.41699 61.3455 6.25226 61.4487 6.07091 61.5119L1.04275 63.1485C0.793091 63.2361 0.576874 63.3988 0.423928 63.6141C0.270981 63.8294 0.188843 64.0868 0.188843 64.3506C0.188843 64.6144 0.270981 64.8717 0.423928 65.087C0.576874 65.3023 0.793091 65.465 1.04275 65.5527L5.94012 67.2616C6.12147 67.3249 6.2862 67.428 6.42205 67.5634C6.55791 67.6988 6.66141 67.863 6.72486 68.0437L8.42513 72.91C8.50991 73.1639 8.67273 73.3848 8.89053 73.5414C9.10833 73.6979 9.37005 73.7822 9.63858 73.7822C9.90711 73.7822 10.1688 73.6979 10.3866 73.5414C10.6044 73.3848 10.7672 73.1639 10.852 72.91L12.6686 68.0437C12.732 67.863 12.8355 67.6988 12.9714 67.5634C13.1072 67.428 13.2719 67.3249 13.4533 67.2616L18.3507 65.5527C18.6003 65.465 18.8165 65.3023 18.9695 65.087C19.1224 64.8717 19.2046 64.6144 19.2046 64.3506C19.2046 64.0868 19.1224 63.8294 18.9695 63.6141C18.8165 63.3988 18.6003 63.2361 18.3507 63.1485L13.3952 61.4395C13.2318 61.377 13.083 61.2818 12.958 61.1598C12.833 61.0377 12.7345 60.8914 12.6686 60.7298Z",
                fill: "white",
                fillOpacity: "0.8",
              }),
            }),
          ],
        });
      };
    },
    119269: function (e, t, s) {
      s.d(t, {
        Qo: function () {
          return r;
        },
      });
      var n,
        r,
        i = s(200651),
        a = s(192379),
        o = s(120356),
        l = s.n(o),
        c = s(442837),
        u = s(481060),
        d = s(607070),
        p = s(821982),
        f = s(967538),
        x = s(885302),
        g = s(914677),
        C = s(830164);
      ((n = r || (r = {}))[(n.NITRO_GEM = 0)] = "NITRO_GEM"),
        (n[(n.NITRO_LOGO = 1)] = "NITRO_LOGO"),
        (n[(n.AVATAR_DECO = 2)] = "AVATAR_DECO");
      let _ = (e) => {
        let { avatarDecoAssetId: t, avatarDecoAssetDescription: s } = e,
          n = a.useMemo(() => (0, p.Z)(t, u.AvatarSizes.SIZE_120, !1), [t]);
        return (0, i.jsx)("div", {
          className: C.avatarDecoContainer,
          children: (0, i.jsx)("div", {
            className: C.avatarDeco,
            children: (0, i.jsx)("img", {
              className: C.avatarDecoImage,
              alt: s,
              src: n,
            }),
          }),
        });
      };
      t.ZP = (e) => {
        let {
            showAnimations: t = !0,
            iconClassName: s,
            staticPercentage: n,
            innerCircleClassName: r,
            progressCircleStrokeSize: a,
            backgroundCircleSize: o,
            percentage: u,
            initialPercentage: p,
            progressCircleVariation: m = 0,
            avatarDecoAssetId: h,
            avatarDecoAssetDescription: v,
            ellipseOpacity: L,
            customAnimationClassName: A,
            circleColor: E,
            circleStroke: j,
          } = e,
          O = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
          T = t && !O;
        return (0, i.jsx)("div", {
          className: l()(C.progressCircle, s),
          children: (0, i.jsx)(g.Z, {
            animationClassName: l()(C.activeProgressCircle, {
              [C.activeProgressCircleAnimation]: T,
              [null != A ? A : ""]: T,
            }),
            progressCircleStroke: j,
            progressCircleStrokeSize: a,
            percentage: null != n ? n : u,
            initialPercentage: null != n ? n : p,
            progressCircleVariation: m,
            children: (() => {
              switch (m) {
                case 0:
                  return (0, i.jsx)(f.Z, {
                    className: T ? C.nitroGemAnimation : void 0,
                    backgroundColor: l()(C.gemBackgroundFill, r),
                    backgroundCircleSize: o,
                  });
                case 1:
                  return (0, i.jsx)(x.Z, { circleColor: E, ellipseOpacity: L });
                case 2:
                  if (null != h)
                    return (0, i.jsx)(_, {
                      avatarDecoAssetId: h,
                      avatarDecoAssetDescription: v,
                    });
                  return null;
                default:
                  return null;
              }
            })(),
          }),
        });
      };
    },
    914677: function (e, t, s) {
      s(47120);
      var n = s(200651),
        r = s(192379),
        i = s(780384),
        a = s(410030),
        o = s(119269),
        l = s(697303);
      let c = "url(#gradient)",
        u = (e, t) => {
          switch (e) {
            case o.Qo.NITRO_LOGO:
              return t ? "0.3" : "0.2";
            case o.Qo.NITRO_GEM:
            case o.Qo.AVATAR_DECO:
            default:
              return;
          }
        },
        d = (e) => {
          switch (e) {
            case o.Qo.NITRO_GEM:
            case o.Qo.AVATAR_DECO:
              return "var(--background-primary)";
            case o.Qo.NITRO_LOGO:
              return "var(--premium-tier-2-purple)";
            default:
              return;
          }
        },
        p = (e, t) => {
          switch (t) {
            case o.Qo.NITRO_GEM:
            case o.Qo.AVATAR_DECO:
              return c;
            case o.Qo.NITRO_LOGO:
              return e ? "url(#gradient_nitro_logo)" : c;
            default:
              return;
          }
        };
      t.Z = (e) => {
        let {
            percentage: t = 0,
            children: s,
            animationClassName: c,
            initialPercentage: f = 0,
            progressCircleStrokeSize: x = 2,
            progressCircleVariation: g,
            progressCircleStroke: C,
          } = e,
          _ = 43 + x / 2,
          m = 2 * Math.PI * _,
          [h, v] = r.useState(f);
        r.useEffect(() => {
          let e = setTimeout(() => {
            v(t);
          }, 200);
          return () => clearTimeout(e);
        }, [t]);
        let L = (0, a.ZP)(),
          A = (0, i.ap)(L),
          E = d(g),
          j = u(g, A),
          O = null != C ? C : p(A, g);
        return (0, n.jsxs)("div", {
          className: l.circleContainer,
          children: [
            (0, n.jsxs)("svg", {
              viewBox: "0 0 100 100",
              className: l.circleSVG,
              children: [
                (0, n.jsx)("circle", {
                  className:
                    g === o.Qo.NITRO_GEM || g === o.Qo.AVATAR_DECO
                      ? l.baseProgressCircle
                      : void 0,
                  fill: "transparent",
                  strokeWidth: x,
                  r: "".concat(_),
                  cx: "50%",
                  cy: "50%",
                  stroke: E,
                  strokeOpacity: j,
                }),
                (0, n.jsx)("circle", {
                  stroke: O,
                  strokeWidth: x,
                  strokeLinecap: "round",
                  strokeDasharray: "".concat(m, " ").concat(m),
                  className: c,
                  style: { strokeDashoffset: (1 - h / 100) * m },
                  r: "".concat(_),
                  cx: "50%",
                  cy: "50%",
                }),
              ],
            }),
            (0, n.jsxs)("svg", {
              width: "0",
              height: "0",
              children: [
                (0, n.jsxs)("linearGradient", {
                  id: "gradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, n.jsx)("stop", {
                      offset: "0%",
                      style: { stopColor: "#FFBDF2" },
                    }),
                    (0, n.jsx)("stop", {
                      offset: "100%",
                      style: { stopColor: "#E742E1" },
                    }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "gradient_nitro_logo",
                  x1: "2.99995",
                  y1: "67.6298",
                  x2: "132.55",
                  y2: "67.6298",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", { stopColor: "#F9A0E8" }),
                    (0, n.jsx)("stop", { offset: "1", stopColor: "#E742E1" }),
                  ],
                }),
                (0, n.jsxs)("linearGradient", {
                  id: "dark-purple-gradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "0%",
                  children: [
                    (0, n.jsx)("stop", {
                      offset: "0%",
                      style: { stopColor: "#241731", stopOpacity: 1 },
                    }),
                    (0, n.jsx)("stop", {
                      offset: "100%",
                      style: { stopColor: "#241731", stopOpacity: 1 },
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", { className: l.childrenContainer, children: s }),
          ],
        });
      };
    },
    938736: function (e, t, s) {
      s.d(t, {
        $s: function () {
          return j;
        },
        AV: function () {
          return x;
        },
        Hg: function () {
          return O;
        },
        Kn: function () {
          return E;
        },
        Nq: function () {
          return f;
        },
        TW: function () {
          return C;
        },
        pn: function () {
          return _;
        },
        uv: function () {
          return v;
        },
        vx: function () {
          return m;
        },
        wG: function () {
          return A;
        },
      });
      var n = s(442837),
        r = s(704215),
        i = s(605236),
        a = s(276444),
        o = s(822070),
        l = s(520540),
        c = s(533525),
        u = s(796634),
        d = s(981631),
        p = s(388032);
      let f = "40%",
        x = 8,
        g = (e) => {
          let {
            hasSentAll: t,
            hasSentAtLeastOne: s,
            numSentUsers: n,
            helpdeskArticle: r,
          } = e;
          return t
            ? p.intl.format(p.t["3OYZMT"], { helpdeskArticle: r })
            : s
              ? p.intl.format(p.t.EkWiZm, {
                  numFriends: u.Q - n,
                  helpdeskArticle: r,
                })
              : p.intl.format(p.t.FjrXCg, {
                  numFriends: u.Q,
                  helpdeskArticle: r,
                });
        },
        C = (e) => {
          let t = v(e);
          return null != t && t !== d.g2L.NOT_ELIGIBLE;
        },
        _ = (e) => {
          let t = C(e),
            s = (0, c.b)("PremiumManagementSettings"),
            r = (0, n.e7)([a.Z], () => a.Z.getRecipientStatus());
          if (!t) return !1;
          if (!s) return !!(r.size > 0) || !1;
          return !0;
        },
        m = (e) => {
          let t = h(e),
            s = (0, i.wE)(r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
          return t && !s;
        },
        h = (e) => {
          let { enabled: t } = l.g.useExperiment(
              { location: e },
              { autoTrackExposure: !1 },
            ),
            { enabled: s } = o.$.useExperiment(
              { location: e },
              { autoTrackExposure: !0 },
            ),
            r = (0, n.e7)([a.Z], () => a.Z.getIsSenderEligibleForIncentive());
          return t && s && r;
        },
        v = (e) => {
          let { enabled: t } = l.g.useExperiment(
              { location: e },
              { autoTrackExposure: !1 },
            ),
            { enabled: s } = o.$.useExperiment(
              { location: e },
              { autoTrackExposure: !0 },
            ),
            r = (0, n.e7)([a.Z], () =>
              a.Z.getIsFetchingReferralIncentiveEligibility(),
            ),
            i = (0, n.e7)([a.Z], () => a.Z.getSenderIncentiveState());
          return r ? d.g2L.NOT_ELIGIBLE : s && t ? i : d.g2L.NOT_ELIGIBLE;
        },
        L = (e) => {
          let t = v(e);
          return (
            t === d.g2L.COOLDOWN ||
            t === d.g2L.UNAPPLIED ||
            t === d.g2L.QUALIFIED
          );
        },
        A = (e) => {
          let t = L(e),
            s = (0, i.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
          return t && !s;
        },
        E = (e) => {
          let t = C(e),
            s = (0, c.b)(e),
            n = (0, i.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
          return !t && s && !n;
        },
        j = (e) => {
          let {
            referralIncentiveLifecycleState: t,
            hasSentAll: s,
            referralsStatuses: n,
          } = e;
          switch (t) {
            case d.g2L.NOT_ELIGIBLE:
              return s ? p.intl.string(p.t.M47CJS) : p.intl.string(p.t.USo4s7);
            case d.g2L.ELIGIBLE:
              if (n.sent < 2)
                return p.intl.formatToPlainString(p.t.md2GU1, {
                  discountRate: f,
                });
              if (n.redeemed === u.Q) return p.intl.string(p.t.SRJkUV);
              return p.intl.formatToPlainString(p.t.O8mswM, {
                discountRate: f,
              });
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
              return n.redeemed === u.Q
                ? p.intl.string(p.t.SRJkUV)
                : p.intl.string(p.t.MoKnzc);
          }
        },
        O = (e) => {
          let {
            helpdeskArticle: t,
            referralIncentiveLifecycleState: s,
            referralsStatuses: n,
            isWithinCountdownRange: r,
          } = e;
          switch (s) {
            case d.g2L.NOT_ELIGIBLE:
              return g({
                hasSentAll: n.sent >= u.Q,
                hasSentAtLeastOne: n.sent >= 1,
                numSentUsers: n.sent,
                helpdeskArticle: t,
              });
            case d.g2L.ELIGIBLE:
              let i = {
                discountRate: f,
                learnMoreLink: t,
                subscriptionInterval: p.intl.string(p.t.FPybU1),
              };
              if (n.redeemed <= 1) return p.intl.format(p.t.nysttb, i);
              return p.intl.format(p.t.nHuzUF, i);
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
              if (n.redeemed < u.Q)
                return p.intl.format(p.t.HGO89v, { learnMoreLink: t });
              if (!r)
                return p.intl.format(p.t.iGlQKi, {
                  learnMoreLink: t,
                  numberOfTimerPeriods: "",
                  timePeriodInterval: p.intl.formatToPlainString(
                    p.t["7r7VxM"],
                    { time: 6 },
                  ),
                });
              return p.intl.format(p.t.Kq6hc3, { learnMoreLink: t });
          }
        };
    },
    227140: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(200651);
      s(192379);
      var r = s(120356),
        i = s.n(r),
        a = s(481060),
        o = s(679768),
        l = s(844812);
      function c(e) {
        let { copy: t, showStars: s = !0, className: r } = e;
        return (0, n.jsxs)("div", {
          className: i()(l.badgeContainer, r),
          children: [
            s &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", {
                    className: i()(l.star, l.starLeft),
                    children: (0, n.jsx)(o.Z, { width: "10", height: "10" }),
                  }),
                  (0, n.jsx)("span", {
                    className: i()(l.star, l.starRight),
                    children: (0, n.jsx)(o.Z, { width: "14", height: "14" }),
                  }),
                ],
              }),
            (0, n.jsx)(a.Text, {
              variant: "eyebrow",
              className: l.newBadge,
              children: t,
            }),
          ],
        });
      }
    },
    899667: function (e, t, s) {
      s(47120);
      var n,
        r,
        i,
        a,
        o = s(442837),
        l = s(570140);
      let c = {},
        u = null,
        d = [],
        p = !1,
        f = !1,
        x = null,
        g = null;
      function C() {
        f = !0;
      }
      class _ extends (n = o.ZP.Store) {
        getAppliedGuildBoostsForGuild(e) {
          return null != c[e] ? c[e].subscriptions : null;
        }
        getLastFetchedAtForGuild(e) {
          return null != c[e] ? c[e].lastFetchedAt : null;
        }
        getCurrentUserAppliedBoosts() {
          return d;
        }
        getAppliedGuildBoost(e) {
          return d.find((t) => t.id === e);
        }
        get isModifyingAppliedBoost() {
          return f;
        }
        get applyBoostError() {
          return x;
        }
        get unapplyBoostError() {
          return g;
        }
        get cooldownEndsAt() {
          return u;
        }
        get isFetchingCurrentUserAppliedBoosts() {
          return p;
        }
      }
      (a = "AppliedGuildBoostStore"),
        (i = "displayName") in (r = _)
          ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = a),
        (t.Z = new _(l.Z, {
          GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: s } = e;
            c[t] = { subscriptions: s, lastFetchedAt: Date.now() };
          },
          USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (p = !1), (d = t);
          },
          APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            u = t;
          },
          GUILD_UNAPPLY_BOOST_START: C,
          GUILD_APPLY_BOOST_START: C,
          GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
              s = new Set(t.map((e) => e.id));
            (d = [...t, ...d.filter((e) => !s.has(e.id))]),
              (x = null),
              (f = !1);
          },
          GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (x = t);
          },
          GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (d = d.filter((e) => e.id !== t)), (f = !1);
          },
          GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (g = t);
          },
          USER_APPLIED_BOOSTS_FETCH_START: function () {
            p = !0;
          },
        }));
    },
  },
]);
//# sourceMappingURL=dbe24bb1c3cbd2cfcde0.js.map
