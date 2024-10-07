"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68845"],
  {
    51125: function (e) {
      e.exports = "/assets/7c915af96aa37d5a4fe4.svg";
    },
    47268: function (e) {
      e.exports = "/assets/357da48609c8d3354a8b.svg";
    },
    123353: function (e) {
      e.exports = "/assets/f149df20b772b40f618a.svg";
    },
    89057: function (e, t, n) {
      n.d(t, {
        Vq: function () {
          return g;
        },
        c8: function () {
          return S;
        },
        oQ: function () {
          return k;
        },
      });
      var a = n(735250);
      n(470079);
      var r = n(120356),
        l = n.n(r),
        i = n(692547),
        s = n(780384),
        o = n(481060),
        d = n(410030),
        u = n(600164),
        c = n(63063),
        f = n(211242),
        h = n(981631),
        b = n(689938),
        _ = n(943981),
        m = n(51125),
        E = n(47268);
      function N(e) {
        let { className: t } = e,
          n = (0, d.ZP)(),
          r = (0, s.wj)(n) ? m : E;
        return (0, a.jsxs)("div", {
          className: l()(_.container, t),
          children: [
            (0, a.jsx)(o.Heading, {
              className: _.header,
              variant: "heading-xl/semibold",
              children: b.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
            }),
            (0, a.jsxs)(o.Text, {
              className: _.description,
              variant: "text-md/normal",
              color: "header-secondary",
              children: [
                (0, a.jsx)("p", {
                  children: b.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY,
                }),
                (0, a.jsx)("p", {
                  children: b.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                    helpdeskArticle: c.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS),
                  }),
                }),
              ],
            }),
            (0, a.jsx)("img", {
              src: r,
              className: _.splashImage,
              alt: "Blocked Payments",
            }),
          ],
        });
      }
      function S() {
        return (0, a.jsx)(N, { className: _.settings });
      }
      function g(e) {
        let { onClose: t } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.ModalHeader, {
              className: _.blockedPaymentsModalHeader,
              justify: u.Z.Justify.END,
              children: (0, a.jsx)(o.ModalCloseButton, { onClick: t }),
            }),
            (0, a.jsx)(o.ModalContent, {
              className: _.blockedPaymentsModalContent,
              children: (0, a.jsx)(N, { className: _.modal }),
            }),
          ],
        });
      }
      function k(e) {
        let { className: t } = e;
        return (0, f.Q)()
          ? (0, a.jsxs)(o.Card, {
              className: l()(_.blockedPaymentsWarning, t),
              type: o.Card.Types.CUSTOM,
              children: [
                (0, a.jsx)(o.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  className: _.blockedPaymentsWarningIcon,
                  color: i.Z.unsafe_rawColors.YELLOW_300.css,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    b.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                      helpdeskArticle: c.Z.getArticleURL(
                        h.BhN.BLOCKED_PAYMENTS,
                      ),
                    }),
                }),
              ],
            })
          : null;
      }
    },
    405083: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var a = n(735250);
      n(470079);
      var r = n(355467),
        l = n(106976),
        i = n(703656),
        s = n(914010),
        o = n(598),
        d = n(791785),
        u = n(981631);
      function c(e) {
        let { onClose: t, onComplete: n, forcesTransitionToGuild: c, ...f } = e,
          { subscriptionMetadataRequest: h } = (0, o.usePaymentContext)();
        return (0, a.jsx)(d.PaymentModal, {
          ...f,
          onComplete: n,
          onClose: (e) => {
            t(e);
            let a = null == h ? void 0 : h.guild_id;
            e &&
              null != a &&
              (r.jg(),
              (0, l.i1)(a),
              null == n || n(),
              null != a &&
                (c || s.Z.getGuildId() !== a) &&
                (0, i.uL)(u.Z5c.CHANNEL(a)));
          },
          forceNewPaymentModal: !0,
        });
      }
    },
    317271: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        n: function () {
          return s;
        },
      }),
        n(47120);
      var a = n(474936),
        r = n(981631);
      let l = new Set([
        r.Sbl.FRIEND_ANNIVERSARIES_CHAT,
        r.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        r.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
      ]);
      function i(e) {
        if (e === a.hX.FRIEND_ANNIVERSARY)
          return {
            chat: r.Sbl.FRIEND_ANNIVERSARIES_CHAT,
            actionButton: r.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            actionButtonCoachmark:
              r.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
          };
        return {};
      }
      function s(e) {
        return l.has(e);
      }
    },
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120),
        n(411104);
      var a = n(735250),
        r = n(470079),
        l = n(442837),
        i = n(481060),
        s = n(607070),
        o = n(409302),
        d = n(474936);
      function u(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: u = !0,
            defaultAnimationState: c,
            idleAnimationState: f,
          } = e,
          h = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
          [b, _] = r.useState(c),
          m = r.useRef((0, o._)(t, b)),
          [E, N] = r.useState(null == f),
          [S, g] = r.useState(!1),
          [k, A] = r.useState(-1),
          C = () => {
            (m.current = (0, o._)(t, b)), A((e) => e + 1);
          },
          p = () => {
            N(!1), g(!0), A(-1), _(c);
          };
        r.useEffect(() => {
          null == f && _(c);
        }, [f, c]),
          r.useEffect(() => {
            if (null != f && k >= 0) {
              p();
              return;
            }
            C();
          }, [t, f]),
          r.useEffect(() => {
            (!S || null == f) && C();
          }, [b]),
          r.useEffect(() => {
            S && (N(null == f), g(!1), C());
          }, [S]);
        if (!d.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, a.jsx)(i.LottieAnimation, {
          importData: m.current,
          shouldAnimate: !h && u,
          className: n,
          versionKey: k,
          onComplete:
            null != f
              ? () => {
                  null != f && (_(f), N(!0));
                }
              : void 0,
          loop: E,
        });
      }
    },
    108989: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(735250),
        r = n(470079),
        l = n(887024);
      let i = [n(123353)],
        s = ["#FFFFFF"],
        o = 1e3 / 60,
        d = {
          velocity: {
            type: "static-random",
            minValue: { x: 0, y: 1 },
            maxValue: { x: 3, y: 3 },
          },
          rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
          },
          size: { type: "static-random", minValue: 2, maxValue: 6 },
          dragCoefficient: { type: "static", value: { x: 0.05, y: 0.05 } },
          opacity: { type: "static", value: 0.3 },
        };
      function u(e) {
        let {
            className: t,
            firing: n = !0,
            wind: u = 2,
            sprites: c = i,
            spriteColors: f = s,
            confettiConfig: h,
          } = e,
          [b, _] = r.useState(null),
          [m, E] = r.useState(null),
          N = (0, l.uR)(m, b),
          S = r.useMemo(() => new l.qA({ wind: u }), [u]),
          g = r.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            N.createConfetti({
              ...d,
              ...h,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -6 },
                maxValue: { x: t.width, y: -6 },
              },
            });
          }, [N, m, h]);
        return (
          r.useEffect(() => {
            let e = n ? setInterval(g, o) : null;
            return () => clearInterval(e);
          }, [n, g]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.O_, { ref: E, className: t, environment: S }),
              (0, a.jsx)(l.Ji, {
                ref: _,
                colors: f,
                sprites: c,
                spriteWidth: 6,
                spriteHeight: 6,
              }),
            ],
          })
        );
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return l;
        },
      });
      var a = n(479446),
        r = n(474936);
      let l = (e, t) => {
        let l;
        switch (e) {
          case r.Cj.SNOWGLOBE:
            l = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.BOX:
            l = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.CUP:
            l = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case r.Cj.STANDARD_BOX:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.CAKE:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.CHEST:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.COFFEE:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 98860, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_CAKE:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_CHEST:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 897198, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.SEASONAL_COFFEE:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case r.Cj.NITROWEEN_STANDARD:
            switch (t) {
              case a.SR.IDLE:
                l = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case a.SR.LOOP:
                l = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                l = () =>
                  n
                    .e("61365")
                    .then(n.t.bind(n, 279858, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            l = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return l;
      };
    },
    943981: function (e, t, n) {
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
    677825: function (e, t, n) {
      e.exports = {
        shaker: "shaker_b93e3f",
        root: "root_b93e3f",
        withHeader: "withHeader_b93e3f",
        halloweenModalHeight: "halloweenModalHeight_b93e3f",
      };
    },
    920667: function (e, t, n) {
      e.exports = {
        seasonalGiftBoxHeaderIcon: "seasonalGiftBoxHeaderIcon_fff54c",
        container: "container_fff54c",
        closeButton: "closeButton_fff54c",
      };
    },
    244203: function (e, t, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    83615: function (e, t, n) {
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
    324415: function (e, t, n) {
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
    251300: function (e, t, n) {
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
//# sourceMappingURL=9ec19062d80d7b0dfc63.js.map
