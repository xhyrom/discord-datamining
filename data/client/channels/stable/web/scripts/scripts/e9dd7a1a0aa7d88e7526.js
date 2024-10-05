"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31605"],
  {
    365627: function (e) {
      e.exports = "/assets/a398fdf7cebb1a429957.svg";
    },
    753260: function (e) {
      e.exports = "/assets/2c64af033af4ea637189.svg";
    },
    987209: function (e, n, t) {
      t.d(n, {
        KB: function () {
          return C;
        },
        wD: function () {
          return j;
        },
      }),
        t(47120);
      var r = t(735250),
        i = t(470079),
        l = t(479446),
        a = t(646476),
        s = t(599659),
        o = t(155491),
        c = t(975104),
        u = t(669079),
        d = t(598),
        m = t(474936),
        f = t(689938);
      let x = m.Cj.STANDARD_BOX,
        h = void 0,
        [N, j, v] = (0, c.Z)();
      function C(e) {
        let {
            isGift: n = !1,
            giftRecipient: t,
            giftMessage: c,
            giftStyle: j,
            children: v,
          } = e,
          { selectedSkuId: C } = (0, d.usePaymentContext)(),
          [p, S] = i.useState(t),
          [I, E] = i.useState(),
          [T, O] = i.useState(!1),
          g = (0, u.pO)(p),
          A = (0, a.rK)(),
          { enabled: _ } = a.ZP.useExperiment(
            { location: "PaymentContextProvider" },
            { autoTrackExposure: g && A },
          ),
          { enabled: P } = s.O.useExperiment({ location: "gift card" }),
          y = h;
        g &&
          ((y = _ && A ? m.Cj.SEASONAL_STANDARD_BOX : null != j ? j : x),
          P && (y = m.Cj.NITROWEEN_STANDARD));
        let [M, R] = i.useState(y),
          [B, b] = i.useState(
            n &&
              (0, u.MY)(p) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
              null == c
              ? f.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
              : c,
          ),
          [L, U] = i.useState(void 0),
          [k, Z] = i.useState(void 0),
          D = (0, u.E5)(C, n),
          [G, w] = i.useState(!1),
          [H, F] = i.useState(!1),
          [K, W] = i.useState(),
          J = i.useCallback(
            (e) => {
              let { onSubscriptionConfirmation: n } = e;
              return (
                F(!0),
                (0, l.YD)(p, D)
                  .then(() => {
                    F(!1), null == n || n(), w(!0);
                  })
                  .catch((e) => {
                    F(!1), W(e), w(!0);
                  })
              );
            },
            [p, D, F, w, W],
          ),
          X = (0, o.x8)();
        return (0, r.jsx)(N.Provider, {
          value: {
            isGift: n,
            giftCode: D,
            giftMessage: c,
            giftRecipient: p,
            setGiftRecipient: S,
            giftRecipientError: I,
            setGiftRecipientError: E,
            validatingGiftRecipient: T,
            setValidatingGiftRecipient: O,
            soundEffect: L,
            setSoundEffect: U,
            emojiConfetti: k,
            setEmojiConfetti: Z,
            customGiftMessage: B,
            setCustomGiftMessage: b,
            selectedGiftStyle: M,
            setSelectedGiftStyle: R,
            sendGiftMessage: J,
            hasSentMessage: G,
            isSendingMessage: H,
            giftMessageError: K,
            alreadyHasHalloweenDeco: X,
          },
          children: v,
        });
      }
    },
    586585: function (e, n, t) {
      t.d(n, {
        g: function () {
          return i;
        },
      });
      var r,
        i,
        l = t(735250);
      t(470079);
      var a = t(481060),
        s = t(600164),
        o = t(612853),
        c = t(689938),
        u = t(297908);
      ((r = i || (i = {}))[(r.CONTINUE = 0)] = "CONTINUE"),
        (r[(r.UPGRADE = 1)] = "UPGRADE"),
        (r[(r.PURCHASE = 2)] = "PURCHASE");
      let d = (e) => {
        let {
          onBack: n,
          backText: t,
          primaryIcon: r,
          primaryCTA: i,
          primaryType: d,
          primaryText: m,
          primaryTooltip: f,
          primaryDisabled: x,
          primarySubmitting: h,
          onPrimary: N,
          secondaryText: j,
          onSecondary: v,
        } = e;
        return (0, l.jsxs)(a.ModalFooter, {
          justify: s.Z.Justify.BETWEEN,
          align: s.Z.Align.CENTER,
          children: [
            (() => {
              if (null == i || null == m) return null;
              let e = 2 === i ? a.ShinyButton : a.Button,
                n = {
                  innerClassName: u.button,
                  type: d,
                  disabled: x,
                  submitting: h,
                  color:
                    0 === i ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                  onClick: N,
                };
              return null != f
                ? (0, l.jsx)(a.Tooltip, {
                    text: f,
                    children: (t) =>
                      (0, l.jsxs)(e, {
                        ...t,
                        ...n,
                        children: [
                          null == r
                            ? null
                            : (0, l.jsx)(r, {
                                color: "currentColor",
                                className: u.primaryIcon,
                              }),
                          m,
                        ],
                      }),
                  })
                : (0, l.jsxs)(e, {
                    ...n,
                    children: [
                      null == r
                        ? null
                        : (0, l.jsx)(r, {
                            color: "currentColor",
                            className: u.primaryIcon,
                          }),
                      m,
                    ],
                  });
            })(),
            null == j
              ? null
              : (0, l.jsx)(a.Button, {
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  onClick: v,
                  children: j,
                }),
            (0, l.jsx)(o.Z, {}),
            null == n
              ? null
              : (0, l.jsx)(a.Button, {
                  className: u.back,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  onClick: n,
                  children: null != t ? t : c.Z.Messages.BACK,
                }),
          ],
        });
      };
      (d.CTAType = i), (n.Z = d);
    },
    612853: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        a = t(481060),
        s = t(689938),
        o = t(638635),
        c = t(739017);
      function u() {
        return (0, r.jsxs)("div", {
          className: l()(o.paymentModalLockIcon, c.flex, c.alignCenter),
          children: [
            (0, r.jsx)(a.LockIcon, {
              size: "sm",
              color: "currentColor",
              className: o.lockIcon,
            }),
            (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              children: s.Z.Messages.BILLING_SECURE,
            }),
          ],
        });
      }
    },
    614277: function (e, n, t) {
      t.d(n, {
        C3: function () {
          return x;
        },
        O3: function () {
          return h;
        },
        ZP: function () {
          return f;
        },
      });
      var r = t(735250),
        i = t(470079),
        l = t(120356),
        a = t.n(l),
        s = t(512722),
        o = t.n(s),
        c = t(699581),
        u = t(481060),
        d = t(598),
        m = t(130298);
      function f(e) {
        var n, t, l, s, c, f;
        let {
            header: x,
            isLargeModal: h,
            stepProps: N,
          } = (function (e) {
            let { header: n, isLargeModal: t, ...r } = e;
            return { header: n, isLargeModal: t, stepProps: r };
          })(e),
          {
            step: j,
            stepConfigs: v,
            setBodyNode: C,
            setFooterNode: p,
            setModalOverlayNode: S,
            setReadySlideId: I,
          } = (0, d.usePaymentContext)(),
          E = v.find((e) => e.key === j);
        i.useEffect(() => {
          S(null);
        }, [j, S]),
          o()(null != E, "Unknown step for current payment flow.");
        let T =
            null !==
              (c =
                null == E
                  ? void 0
                  : null === (n = E.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          O =
            null == E
              ? void 0
              : null === (t = E.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          g =
            void 0 !== h && h
              ? m.sliderBodyLarge
              : null == E
                ? void 0
                : null === (l = E.options) || void 0 === l
                  ? void 0
                  : l.sliderBodyClassName;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            null ===
              (f =
                null == E
                  ? void 0
                  : null === (s = E.options) || void 0 === s
                    ? void 0
                    : s.renderHeader) ||
            void 0 === f ||
            f
              ? x
              : null,
            E.renderStep(N),
            null == j || T
              ? null
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(u.ModalContent, {
                      className: a()(m.body, O),
                      children: (0, r.jsx)(u.Slides, {
                        activeSlide: j,
                        centered: !1,
                        onSlideReady: (e) => I(e),
                        children: v
                          .filter((e) => null != e.key)
                          .map((e) =>
                            (0, r.jsx)(
                              u.Slide,
                              {
                                id: e.key,
                                children: (0, r.jsx)("form", {
                                  className: a()(m.sliderBody, g),
                                  ref: (e) => C(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                      }),
                    }),
                    (0, r.jsx)("div", { ref: (e) => p(e) }),
                    (0, r.jsx)("div", { ref: (e) => S(e) }),
                  ],
                }),
          ],
        });
      }
      function x(e) {
        let { children: n } = e,
          { bodyNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
      function h(e) {
        let { children: n } = e,
          { footerNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
    },
    479446: function (e, n, t) {
      t.d(n, {
        Ou: function () {
          return f;
        },
        SR: function () {
          return r;
        },
        YD: function () {
          return m;
        },
      }),
        t(411104);
      var r,
        i,
        l = t(512722),
        a = t.n(l),
        s = t(493683),
        o = t(904245),
        c = t(957730),
        u = t(592125),
        d = t(669079);
      ((i = r || (r = {})).ACTION = "action"),
        (i.LOOP = "loop"),
        (i.IDLE = "idle");
      let m = async (e, n) => {
          if (null == n) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let t = await s.Z.openPrivateChannel(e.id).then((e) => {
              let n = u.Z.getChannel(e);
              if ((a()(null != n, "PrivateChannel is null"), null == n))
                throw Error("Channel must be defined");
              return n;
            }),
            r = (0, d.Nz)(n);
          return o.Z.sendMessage(t.id, c.ZP.parse(t, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
          });
        },
        f = (e) => {};
    },
    750143: function (e, n, t) {
      t.d(n, {
        X: function () {
          return i;
        },
        i: function () {
          return r;
        },
      });
      let r = "(max-width: 485px)",
        i = "(max-height: 450px)";
    },
    225715: function (e, n, t) {
      t.d(n, {
        CW: function () {
          return u;
        },
        G9: function () {
          return x;
        },
        K9: function () {
          return f;
        },
        q$: function () {
          return h;
        },
        r0: function () {
          return d;
        },
        s$: function () {
          return m;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        a = t(481060),
        s = t(41959),
        o = t(245561),
        c = t(893896);
      let u = (e) => {
          let { application: n, asset: t, className: i, ...l } = e;
          return (0, r.jsx)(s.Z, {
            application: n,
            size: s.H.MEDIUM,
            asset: t,
            className: i,
            ...l,
          });
        },
        d = (e) => {
          let { children: n, className: t, id: i, ...s } = e;
          return (0, r.jsx)(a.Heading, {
            className: l()(c.header, t),
            variant: "heading-xl/extrabold",
            id: i,
            ...s,
            children: n,
          });
        };
      function m() {
        return (0, r.jsx)("hr", { className: c.divider });
      }
      let f = (e) => {
          let { className: n, title: t, description: i, ...l } = e;
          return (0, r.jsxs)("div", {
            className: n,
            ...l,
            children: [
              (0, r.jsx)(a.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: t,
              }),
              (0, r.jsx)(a.Heading, {
                variant: "heading-sm/normal",
                color: "header-secondary",
                children: i,
              }),
            ],
          });
        },
        x = (e) => {
          let {
            applicationId: n,
            storeListingBenefits: t,
            skuBenefits: i,
            className: a,
            ...s
          } = e;
          return (0, r.jsx)("div", {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, r.jsx)(o.GU, {
              applicationId: n,
              storeListingBenefits: t,
              skuBenefits: i,
              className: c.benefit,
            }),
          });
        },
        h = (e) => {
          let { children: n, className: t, ...i } = e;
          return (0, r.jsx)("div", {
            className: l()(c.container, t),
            ...i,
            children: n,
          });
        };
    },
    41959: function (e, n, t) {
      t.d(n, {
        H: function () {
          return i;
        },
      });
      var r,
        i,
        l = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        o = t(768581),
        c = t(73346),
        u = t(622085);
      ((r = i || (i = {}))[(r.SMALL = 40)] = "SMALL"),
        (r[(r.MEDIUM = 66)] = "MEDIUM");
      let d = { 40: u.small, 66: u.medium };
      n.Z = (e) => {
        let n,
          { application: t, size: r, asset: i, className: a } = e;
        return (
          (n =
            null != i
              ? (0, c._W)(t.id, i, r)
              : o.ZP.getApplicationIconURL({
                  id: t.id,
                  icon: t.icon,
                  size: r,
                })),
          (0, l.jsx)("img", {
            alt: "",
            src: n,
            className: s()(u.icon, d[r], a),
          })
        );
      };
    },
    689011: function (e, n, t) {
      t.d(n, {
        Oc: function () {
          return N;
        },
        t: function () {
          return h;
        },
        xe: function () {
          return j;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        l = t(131388),
        a = t(409813),
        s = t(586585),
        o = t(614277),
        c = t(225715),
        u = t(750143),
        d = t(689938),
        m = t(555730),
        f = t(365627),
        x = t(753260);
      let h = (e) => {
          let { step: n, onClose: t } = e,
            s = (0, l.Z)(u.X);
          return n === a.h8.CONFIRM || n === a.h8.BENEFITS
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                className: m.headerContainer,
                children: [
                  !s &&
                    (0, r.jsx)("div", {
                      className: m.headerImageContainer,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("img", {
                        src: x,
                        alt: "",
                        className: m.headerImage,
                      }),
                    }),
                  (0, r.jsx)(i.Clickable, {
                    className: m.closeContainer,
                    onClick: () => t(),
                    "aria-label": d.Z.Messages.CLOSE,
                    children: (0, r.jsx)(i.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: m.closeIcon,
                    }),
                  }),
                ],
              });
        },
        N = (e) => {
          let {
            icon: n,
            storeListingBenefits: t,
            skuBenefits: i,
            application: l,
            title: a,
            subtitle: s,
            description: o,
          } = e;
          return null == l
            ? null
            : (0, r.jsx)("div", {
                className: m.confirmationContainer,
                children: (0, r.jsxs)(c.q$, {
                  children: [
                    (0, r.jsx)(c.CW, { application: l, asset: n }),
                    (0, r.jsx)(c.r0, { children: a }),
                    (0, r.jsx)(c.s$, {}),
                    (0, r.jsx)(c.K9, { title: s, description: o }),
                    (0, r.jsx)(c.G9, {
                      applicationId: l.id,
                      storeListingBenefits: t,
                      skuBenefits: i,
                    }),
                  ],
                }),
              });
        };
      function j(e) {
        let { tierName: n, onConfirm: t, subscription: l } = e;
        return (0, r.jsxs)("div", {
          className: m.purchaseConfirmation,
          children: [
            (0, r.jsx)("img", { src: f, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(i.Heading, {
              className: m.confirmationTitle,
              variant: "heading-xl/extrabold",
              color: "header-primary",
              children:
                d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format(
                  { tier: n },
                ),
            }),
            (0, r.jsx)(i.Text, {
              className: m.confirmationSubtitle,
              variant: "text-md/medium",
              color: "header-secondary",
              children:
                d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format(
                  { timestamp: null == l ? void 0 : l.currentPeriodEnd },
                ),
            }),
            (0, r.jsx)(o.O3, {
              children: (0, r.jsx)(s.Z, {
                onPrimary: t,
                primaryCTA: s.g.CONTINUE,
                primaryText:
                  d.Z.Messages
                    .APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON,
              }),
            }),
          ],
        });
      }
    },
    245561: function (e, n, t) {
      t.d(n, {
        GU: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        a = t(481060),
        s = t(596454),
        o = t(889989),
        c = t(600699);
      function u(e) {
        let n,
          {
            applicationId: t,
            storeListingBenefits: i,
            skuBenefits: a,
            className: s,
          } = e;
        return (
          null != i
            ? (n = i.map((e) =>
                (0, r.jsx)(
                  m,
                  {
                    applicationId: t,
                    benefit: e,
                    className: l()(c.__invalid_benefit, s),
                  },
                  e.id,
                ),
              ))
            : null != a &&
              (n = a.map((e, n) =>
                (0, r.jsx)(
                  d,
                  { benefit: e, className: l()(c.__invalid_benefit, s) },
                  n,
                ),
              )),
          (0, r.jsx)(r.Fragment, { children: n })
        );
      }
      function d(e) {
        let {
          benefit: n,
          className: t,
          emojiContainerClassName: i,
          showsDescription: o = !0,
          nameTextVariant: u = "text-md/medium",
          nameTextColor: d = "header-primary",
        } = e;
        return (0, r.jsxs)("div", {
          className: l()(c.container, t),
          children: [
            null != n.emoji &&
              (0, r.jsx)("div", {
                className: l()(c.emojiContainer, i),
                children: (0, r.jsx)(s.Z, {
                  emojiId: n.emoji.id,
                  emojiName: n.emoji.name,
                  animated: n.emoji.animated,
                }),
              }),
            (0, r.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, r.jsx)(a.Text, {
                  variant: u,
                  color: d,
                  className: c.name,
                  children: n.name,
                }),
                o &&
                  (0, r.jsx)(a.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: n.description,
                  }),
              ],
            }),
          ],
        });
      }
      function m(e) {
        let {
          applicationId: n,
          benefit: t,
          className: i,
          emojiContainerClassName: s,
          showsDescription: u = !0,
          nameTextVariant: d = "text-md/medium",
          nameTextColor: m = "header-primary",
        } = e;
        return (0, r.jsxs)("div", {
          className: l()(c.container, i),
          children: [
            (0, r.jsx)("div", {
              className: l()(c.emojiContainer, s),
              children: (0, o.n)(n, t.icon),
            }),
            (0, r.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, r.jsx)(a.Text, {
                  variant: d,
                  color: m,
                  className: c.name,
                  children: t.name,
                }),
                u &&
                  (0, r.jsx)(a.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: t.description,
                  }),
              ],
            }),
          ],
        });
      }
    },
    889989: function (e, n, t) {
      t.d(n, {
        n: function () {
          return s;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(187753),
        l = t(596454),
        a = t(73346);
      function s(e, n) {
        if (null != n)
          switch (n.type) {
            case i.T.STORE_ASSET:
              let t = (0, a._W)(e, n.store_asset_id);
              return (0, r.jsx)("img", { src: t, alt: "", className: "emoji" });
            case i.T.EMOJI:
              return (0, r.jsx)(l.Z, { emojiName: n.emoji });
          }
      }
    },
    187753: function (e, n, t) {
      var r, i;
      t.d(n, {
        T: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.STORE_ASSET = 1)] = "STORE_ASSET"),
        (i[(i.EMOJI = 2)] = "EMOJI");
    },
  },
]);
//# sourceMappingURL=e9dd7a1a0aa7d88e7526.js.map
