"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89675"],
  {
    438471: function (e) {
      e.exports = "/assets/75f8d0fe6b6ba49eb369.svg";
    },
    609194: function (e, r, n) {
      var o,
        l,
        s,
        c,
        a,
        t = n(735250),
        i = n(470079),
        d = n(120356),
        u = n.n(d),
        p = n(600164),
        _ = n(865857);
      function m(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      ((o = s || (s = {})).PRIMARY = "primary"),
        (o.SECONDARY = "secondary"),
        (o.WARNING = "warning"),
        (o.ERROR = "error"),
        ((l = c || (c = {})).SMALL = "small"),
        (l.LARGE = "large"),
        (l.NONE = "none");
      let E = {
          primary: _.colorPrimary,
          secondary: _.colorSecondary,
          warning: _.colorWarning,
          error: _.colorError,
        },
        N = { small: _.small, large: _.large, none: null };
      class h extends (a = i.PureComponent) {
        render() {
          let {
            icon: e,
            color: r,
            children: n,
            iconSize: o,
            className: l,
            iconClassName: s,
          } = this.props;
          return (0, t.jsxs)(p.Z, {
            className: u()(_.note, E[r], l),
            align: p.Z.Align.CENTER,
            children: [
              (0, t.jsx)(e, {
                className: u()(_.icon, N[o], s),
                color: "currentColor",
              }),
              (0, t.jsx)("div", { children: n }),
            ],
          });
        }
      }
      m(h, "Colors", s), m(h, "Sizes", c), (r.Z = h);
    },
    146747: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return C;
          },
        });
      var o = n(735250),
        l = n(470079),
        s = n(481060),
        c = n(100527),
        a = n(906732),
        t = n(598),
        i = n(409813),
        d = n(185139),
        u = n(263954),
        p = n(267642),
        _ = n(678558),
        m = n(981631),
        E = n(689938),
        N = n(797118),
        h = n(113207);
      let f = "premium-guild-subscription-upsell-modal-header";
      function I(e) {
        let { title: r, subtitle: n, image: l } = e;
        return (0, o.jsxs)("div", {
          className: N.header,
          children: [
            (0, o.jsx)(s.Heading, {
              variant: "heading-xl/semibold",
              id: f,
              color: "header-primary",
              className: h.marginBottom8,
              children: r,
            }),
            (0, o.jsx)(s.Text, {
              variant: "text-md/normal",
              className: N.subtitleText,
              children: n,
            }),
            l,
          ],
        });
      }
      let x = (e) => {
          let {
            onClose: r,
            perks: n,
            perkIntro: l = E.Z.Messages
              .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
            headerProps: c,
          } = e;
          return (0, o.jsxs)("div", {
            className: N.wrapper,
            children: [
              (0, o.jsx)(s.ModalCloseButton, {
                className: N.closeButton,
                onClick: () => {
                  r();
                },
              }),
              (0, o.jsx)(T, { headerProps: c, perkIntro: l }),
              (0, o.jsx)("div", {
                className: N.perks,
                children: n.map((e, r) => {
                  let {
                    icon: n,
                    iconClassName: l,
                    description: s,
                    color: c,
                  } = e;
                  return (0, o.jsx)(
                    u.Z,
                    { icon: n, iconClassName: l, description: s, color: c },
                    r,
                  );
                }),
              }),
            ],
          });
        },
        T = (e) => {
          let { headerProps: r, perkIntro: c } = e;
          return (0, o.jsxs)(l.Fragment, {
            children: [
              null != r
                ? (0, o.jsx)(I, { ...r })
                : (0, o.jsx)("img", {
                    className: N.heroImage,
                    src: n(438471),
                    alt: E.Z.Messages
                      .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT,
                  }),
              (0, o.jsx)(s.Text, {
                variant: "text-md/normal",
                className: N.heading,
                children: c,
              }),
            ],
          });
        },
        S = (e) => {
          let {
              guild: r,
              targetBoostedGuildTier: n,
              onClose: l,
              analyticsSourceLocation: c,
            } = e,
            a = {
              section: m.jXE.PREMIUM_GUILD_UPSELL_MODAL,
              object: m.qAy.BUTTON_CTA,
              objectType: null != n ? (0, p.ge)(n) : null,
            };
          return (0, o.jsxs)(s.ModalFooter, {
            className: N.footer,
            children: [
              (0, o.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: () => {
                  l();
                },
                children: E.Z.Messages.CLOSE,
              }),
              (0, o.jsx)(_.Z, {
                analyticsLocation: a,
                analyticsSourceLocation: c,
                guild: r,
                targetBoostedGuildTier: n,
                onClose: () => {
                  l();
                },
              }),
            ],
          });
        };
      function C(e) {
        let {
            analyticsSourceLocation: r,
            guild: n,
            targetBoostedGuildTier: l,
            perks: u,
            perkIntro: p,
            headerProps: _,
            onClose: m,
            ...E
          } = e,
          { analyticsLocations: N } = (0, a.ZP)(c.Z.ACTIVITY_DIRECTORY);
        return (0, o.jsx)(a.Gt, {
          value: N,
          children: (0, o.jsx)(t.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, o.jsx)(s.ModalRoot, {
              ...E,
              "aria-labelledby": f,
              children: (0, o.jsx)(d.Z, {
                hideBreadcrumbs: !0,
                body: (0, o.jsx)(x, {
                  onClose: m,
                  perks: u,
                  perkIntro: p,
                  headerProps: _,
                }),
                footer: (0, o.jsx)(S, {
                  guild: n,
                  targetBoostedGuildTier: l,
                  onClose: m,
                  analyticsSourceLocation: r,
                }),
                steps: [i.h8.PREMIUM_GUILD_UPSELL],
                currentStep: i.h8.PREMIUM_GUILD_UPSELL,
              }),
            }),
          }),
        });
      }
    },
    51499: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return d;
        },
      }),
        n(390547);
      var o = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        c = n(481060),
        a = n(598),
        t = n(409813),
        i = n(548458);
      function d(e) {
        let { className: r, isEligibleForTrial: n = !1 } = e,
          {
            step: l,
            breadcrumbs: d,
            startedPaymentFlowWithPaymentSourcesRef: u,
          } = (0, a.usePaymentContext)();
        if (null == d || 0 === d.length) return null;
        let p = d.flatMap((e) => {
          let r = e.useBreadcrumbLabel(n);
          return null != r ? { id: e.id, label: r } : [];
        });
        return 0 === p.length
          ? null
          : ((p = p.filter((e) => {
              let r = e.id !== t.h8.ADD_PAYMENT_STEPS,
                o = e.id === t.h8.ADD_PAYMENT_STEPS && !u.current;
              return !n || (n && (r || o));
            })),
            (0, o.jsx)("div", {
              className: s()("breadcrumb", i.wrapper, r),
              children: (0, o.jsx)(c.Breadcrumbs, {
                activeId: l,
                breadcrumbs: p,
              }),
            }));
      }
    },
    185139: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return T;
        },
      }),
        n(47120),
        n(411104);
      var o = n(735250),
        l = n(470079),
        s = n(160612),
        c = n(120356),
        a = n.n(c),
        t = n(846519),
        i = n(481060),
        d = n(609194),
        u = n(881052),
        p = n(128069),
        _ = n(598),
        m = n(409813);
      n(51499), n(614277);
      var E = n(122289),
        N = n(70956),
        h = n(981631),
        f = n(689938),
        I = n(896769);
      let x = new Set([
        m.h8.SKU_SELECT,
        m.h8.AWAITING_AUTHENTICATION,
        m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        m.h8.CONFIRM,
      ]);
      function T(e) {
        let {
            steps: r,
            currentStep: n,
            body: c,
            paymentError: T,
            header: S,
            footer: C,
            isGift: M = !1,
            giftMessage: A = f.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
            hideBreadcrumbs: g = !1,
            isLoading: R = !1,
            purchaseError: j,
            purchaseErrorBlockRef: P,
            planError: L,
            onScroll: b,
            scrollerClassName: k,
            hasCurrencies: D = !1,
          } = e,
          v = null;
        null != T && null == (0, m.ly)(T)
          ? (v = T)
          : null != j
            ? (v = j)
            : null != L && (v = L);
        let y = null != v ? v.message : "";
        null != v &&
          v instanceof u.HF &&
          (v.code === p.SM.CARD_DECLINED &&
            D &&
            (y += " ".concat(f.Z.Messages.BILLING_ERROR_TRY_ANOTHER)),
          v.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED &&
            (y = f.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT),
          v.code === h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE &&
            (y = f.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
        let { stripe: B } = (0, _.usePaymentContext)();
        R = R || null == B;
        let O = l.useRef(new t.V7());
        l.useEffect(() => {
          let e = O.current;
          return (
            null != B || e.isStarted()
              ? null != B && e.stop()
              : e.start(10 * N.Z.Millis.SECOND, () => {
                  let e = Error("Stripe took too long to load");
                  (0, E.q2)(e);
                }),
            () => {
              e.stop();
            }
          );
        }, [B]);
        let U = r.includes(m.h8.PAYMENT_TYPE)
          ? m.h8.PAYMENT_TYPE
          : m.h8.ADD_PAYMENT_STEPS;
        return (0, o.jsxs)(s.Elements, {
          options: h.OBo,
          stripe: B,
          children: [
            S,
            (0, o.jsxs)("div", {
              className: a()("paymentModalContent", I.content),
              children: [
                M && n !== m.h8.CONFIRM
                  ? (0, o.jsx)(d.Z, {
                      className: I.paymentNote,
                      iconSize: d.Z.Sizes.SMALL,
                      icon: i.GiftIcon,
                      color:
                        null == A ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
                      children: A,
                    })
                  : null,
                g
                  ? null
                  : (0, o.jsx)("div", {
                      className: I.breadcrumbsWrapper,
                      children: (0, o.jsx)(i.Breadcrumbs, {
                        activeId: m.Ck.has(n) ? U : n,
                        breadcrumbs: r
                          .filter((e) => !m.Ck.has(e) && !x.has(e))
                          .map((e) => ({ id: e, label: (0, m.DJ)(e) })),
                      }),
                    }),
                (0, o.jsxs)("div", {
                  className: I.bodyWrapper,
                  children: [
                    null == v
                      ? null
                      : (0, o.jsx)("div", {
                          className: I.errorBlockWrapper,
                          children: (0, o.jsx)(i.FormErrorBlock, {
                            ref: P,
                            children: y,
                          }),
                        }),
                    R
                      ? (0, o.jsx)(i.Spinner, { className: I.loadingBlock })
                      : (0, o.jsx)(i.Sequencer, {
                          className: I.sequencer,
                          staticClassName: I.sequencerStatic,
                          animatedNodeClassName: I.sequencerAnimatedNode,
                          fillParent: !0,
                          step: n,
                          steps: r,
                          sideMargin: 20,
                          children: (0, o.jsx)(i.AdvancedScrollerThin, {
                            onScroll: b,
                            className: a()(I.scroller, k),
                            children: c,
                          }),
                        }),
                  ],
                }),
              ],
            }),
            C,
          ],
        });
      }
    },
    263954: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return a;
        },
      });
      var o = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        c = n(524994);
      function a(e) {
        let { icon: r, iconClassName: n, description: l, color: a } = e;
        return (0, o.jsxs)("div", {
          className: c.perkRow,
          children: [
            (0, o.jsx)("div", {
              className: c.perkIconContainer,
              children: (0, o.jsx)(r, {
                color: null != a ? a : "currentColor",
                className: s()(c.perkIcon, n),
              }),
            }),
            (0, o.jsx)("div", { className: c.perkDescription, children: l }),
          ],
        });
      }
    },
    865857: function (e, r, n) {
      e.exports = {
        note: "note_e0037c",
        icon: "icon_e0037c",
        large: "large_e0037c",
        small: "small_e0037c",
        colorWarning: "colorWarning_e0037c",
        colorError: "colorError_e0037c",
        colorPrimary: "colorPrimary_e0037c",
        colorSecondary: "colorSecondary_e0037c",
      };
    },
    797118: function (e, r, n) {
      e.exports = {
        wrapper: "wrapper_fcea2f",
        heroImage: "heroImage_fcea2f",
        closeButton: "closeButton_fcea2f",
        heading: "heading_fcea2f",
        perks: "perks_fcea2f",
        footer: "footer_fcea2f",
        header: "header_fcea2f",
        subtitleText: "subtitleText_fcea2f",
      };
    },
    548458: function (e, r, n) {
      e.exports = { wrapper: "wrapper_bfc2c6" };
    },
    896769: function (e, r, n) {
      e.exports = {
        content: "content_cc6017",
        breadcrumbsWrapper: "breadcrumbsWrapper_cc6017",
        bodyWrapper: "bodyWrapper_cc6017",
        scroller: "scroller_cc6017",
        errorBlockWrapper: "errorBlockWrapper_cc6017",
        paymentNote: "paymentNote_cc6017",
        loadingBlock: "loadingBlock_cc6017",
        sequencer: "sequencer_cc6017",
        sequencerStatic: "sequencerStatic_cc6017",
        sequencerAnimatedNode: "sequencerAnimatedNode_cc6017",
      };
    },
    524994: function (e, r, n) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
  },
]);
//# sourceMappingURL=a9118999f88654fac396.js.map
