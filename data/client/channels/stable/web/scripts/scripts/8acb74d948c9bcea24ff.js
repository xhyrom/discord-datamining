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
          return S;
        },
        wD: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        a = t(597688),
        s = t(479446),
        o = t(646476),
        c = t(599659),
        u = t(155491),
        d = t(975104),
        m = t(669079),
        f = t(563132),
        x = t(474936),
        h = t(388032);
      let v = x.Cj.STANDARD_BOX,
        j = void 0,
        [N, p, C] = (0, d.Z)();
      function S(e) {
        let {
            isGift: n = !1,
            giftRecipient: t,
            giftMessage: d,
            giftStyle: p,
            giftingOrigin: C,
            children: S,
          } = e,
          { selectedSkuId: E } = (0, f.usePaymentContext)(),
          [g, y] = r.useState(t),
          [T, I] = r.useState(),
          [O, k] = r.useState(!1),
          b = (0, m.pO)(g),
          A = (0, o.rK)(),
          { enabled: B } = o.ZP.useExperiment(
            { location: "PaymentContextProvider" },
            { autoTrackExposure: b && A },
          ),
          { enabled: P } = c.O.useExperiment({ location: "gift card" }),
          R = j;
        b &&
          ((R = B && A ? x.Cj.SEASONAL_STANDARD_BOX : null != p ? p : v),
          P && (R = x.Cj.NITROWEEN_STANDARD));
        let [Z, M] = r.useState(R),
          [_, D] = r.useState(
            n &&
              (0, m.MY)(g) === m.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
              null == d
              ? h.intl.string(h.t.ZkOo1d)
              : d,
          ),
          [L, U] = r.useState(void 0),
          [w, G] = r.useState(void 0),
          H = (0, m.E5)(E, n),
          [K, W] = r.useState(!1),
          [F, J] = r.useState(!1),
          [X, Y] = r.useState(),
          z = r.useCallback(
            (e) => {
              let { onSubscriptionConfirmation: n } = e;
              return (
                J(!0),
                (0, s.YD)(g, H)
                  .then(() => {
                    J(!1), null == n || n(), W(!0);
                  })
                  .catch((e) => {
                    J(!1), Y(e), W(!0);
                  })
              );
            },
            [g, H, J, W, Y],
          ),
          $ = (0, u.x8)(),
          q = (0, l.Wu)([a.Z], () => a.Z.recommendedGiftSkuIds);
        return (0, i.jsx)(N.Provider, {
          value: {
            isGift: n,
            giftCode: H,
            giftMessage: d,
            giftRecipient: g,
            setGiftRecipient: y,
            giftRecipientError: T,
            setGiftRecipientError: I,
            validatingGiftRecipient: O,
            setValidatingGiftRecipient: k,
            soundEffect: L,
            setSoundEffect: U,
            emojiConfetti: w,
            setEmojiConfetti: G,
            customGiftMessage: _,
            setCustomGiftMessage: D,
            selectedGiftStyle: Z,
            setSelectedGiftStyle: M,
            sendGiftMessage: z,
            hasSentMessage: K,
            isSendingMessage: F,
            giftMessageError: X,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: q,
            giftingOrigin: C,
          },
          children: S,
        });
      }
    },
    586585: function (e, n, t) {
      t.d(n, {
        g: function () {
          return r;
        },
      });
      var i,
        r,
        l = t(200651);
      t(192379);
      var a = t(481060),
        s = t(600164),
        o = t(612853),
        c = t(388032),
        u = t(297908);
      ((i = r || (r = {}))[(i.CONTINUE = 0)] = "CONTINUE"),
        (i[(i.UPGRADE = 1)] = "UPGRADE"),
        (i[(i.PURCHASE = 2)] = "PURCHASE");
      let d = (e) => {
        let {
          onBack: n,
          backText: t,
          primaryIcon: i,
          primaryCTA: r,
          primaryType: d,
          primaryText: m,
          primaryTooltip: f,
          primaryDisabled: x,
          primarySubmitting: h,
          onPrimary: v,
          secondaryText: j,
          onSecondary: N,
        } = e;
        return (0, l.jsxs)(a.ModalFooter, {
          justify: s.Z.Justify.BETWEEN,
          align: s.Z.Align.CENTER,
          children: [
            (() => {
              if (null == r || null == m) return null;
              let e = 2 === r ? a.ShinyButton : a.Button,
                n = {
                  innerClassName: u.button,
                  type: d,
                  disabled: x,
                  submitting: h,
                  color:
                    0 === r ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                  onClick: v,
                };
              return null != f
                ? (0, l.jsx)(a.Tooltip, {
                    text: f,
                    children: (t) =>
                      (0, l.jsxs)(e, {
                        ...t,
                        ...n,
                        children: [
                          null == i
                            ? null
                            : (0, l.jsx)(i, {
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
                      null == i
                        ? null
                        : (0, l.jsx)(i, {
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
                  onClick: N,
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
                  children: null != t ? t : c.intl.string(c.t["13/7kZ"]),
                }),
          ],
        });
      };
      (d.CTAType = r), (n.Z = d);
    },
    612853: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        a = t(481060),
        s = t(388032),
        o = t(638635),
        c = t(739017);
      function u() {
        return (0, i.jsxs)("div", {
          className: l()(o.paymentModalLockIcon, c.flex, c.alignCenter),
          children: [
            (0, i.jsx)(a.LockIcon, {
              size: "sm",
              color: "currentColor",
              className: o.lockIcon,
            }),
            (0, i.jsx)(a.Text, {
              variant: "text-sm/medium",
              children: s.intl.string(s.t.Kv6Z4O),
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
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        s = t(512722),
        o = t.n(s),
        c = t(995295),
        u = t(481060),
        d = t(563132),
        m = t(130298);
      function f(e) {
        var n, t, l, s, c, f;
        let {
            header: x,
            isLargeModal: h,
            stepProps: v,
          } = (function (e) {
            let { header: n, isLargeModal: t, ...i } = e;
            return { header: n, isLargeModal: t, stepProps: i };
          })(e),
          {
            step: j,
            stepConfigs: N,
            setBodyNode: p,
            setFooterNode: C,
            setModalOverlayNode: S,
            setReadySlideId: E,
          } = (0, d.usePaymentContext)(),
          g = N.find((e) => e.key === j);
        r.useEffect(() => {
          S(null);
        }, [j, S]),
          o()(null != g, "Unknown step for current payment flow.");
        let y =
            null !==
              (c =
                null == g
                  ? void 0
                  : null === (n = g.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          T =
            null == g
              ? void 0
              : null === (t = g.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          I =
            void 0 !== h && h
              ? m.sliderBodyLarge
              : null == g
                ? void 0
                : null === (l = g.options) || void 0 === l
                  ? void 0
                  : l.sliderBodyClassName;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null ===
              (f =
                null == g
                  ? void 0
                  : null === (s = g.options) || void 0 === s
                    ? void 0
                    : s.renderHeader) ||
            void 0 === f ||
            f
              ? x
              : null,
            g.renderStep(v),
            null == j || y
              ? null
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(u.ModalContent, {
                      className: a()(m.body, T),
                      children: (0, i.jsx)(u.Slides, {
                        activeSlide: j,
                        centered: !1,
                        onSlideReady: (e) => E(e),
                        children: N.filter((e) => null != e.key).map((e) =>
                          (0, i.jsx)(
                            u.Slide,
                            {
                              id: e.key,
                              children: (0, i.jsx)("form", {
                                className: a()(m.sliderBody, I),
                                ref: (e) => p(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, i.jsx)("div", { ref: (e) => C(e) }),
                    (0, i.jsx)("div", { ref: (e) => S(e) }),
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
          return i;
        },
        YD: function () {
          return m;
        },
      }),
        t(411104);
      var i,
        r,
        l = t(512722),
        a = t.n(l),
        s = t(493683),
        o = t(904245),
        c = t(957730),
        u = t(592125),
        d = t(669079);
      ((r = i || (i = {})).ACTION = "action"),
        (r.LOOP = "loop"),
        (r.IDLE = "idle");
      let m = async (e, n) => {
          if (null == n) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let t = await s.Z.openPrivateChannel(e.id).then((e) => {
              let n = u.Z.getChannel(e);
              if ((a()(null != n, "PrivateChannel is null"), null == n))
                throw Error("Channel must be defined");
              return n;
            }),
            i = (0, d.Nz)(n);
          return o.Z.sendMessage(t.id, c.ZP.parse(t, i), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
          });
        },
        f = (e) => {};
    },
    750143: function (e, n, t) {
      t.d(n, {
        X: function () {
          return r;
        },
        i: function () {
          return i;
        },
      });
      let i = "(max-width: 485px)",
        r = "(max-height: 450px)";
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
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        a = t(481060),
        s = t(41959),
        o = t(245561),
        c = t(893896);
      let u = (e) => {
          let { application: n, asset: t, className: r, ...l } = e;
          return (0, i.jsx)(s.Z, {
            application: n,
            size: s.H.MEDIUM,
            asset: t,
            className: r,
            ...l,
          });
        },
        d = (e) => {
          let { children: n, className: t, id: r, ...s } = e;
          return (0, i.jsx)(a.Heading, {
            className: l()(c.header, t),
            variant: "heading-xl/extrabold",
            id: r,
            ...s,
            children: n,
          });
        };
      function m() {
        return (0, i.jsx)("hr", { className: c.divider });
      }
      let f = (e) => {
          let { className: n, title: t, description: r, ...l } = e;
          return (0, i.jsxs)("div", {
            className: n,
            ...l,
            children: [
              (0, i.jsx)(a.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: t,
              }),
              (0, i.jsx)(a.Heading, {
                variant: "heading-sm/normal",
                color: "header-secondary",
                children: r,
              }),
            ],
          });
        },
        x = (e) => {
          let {
            applicationId: n,
            storeListingBenefits: t,
            skuBenefits: r,
            className: a,
            ...s
          } = e;
          return (0, i.jsx)("div", {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, i.jsx)(o.GU, {
              applicationId: n,
              storeListingBenefits: t,
              skuBenefits: r,
              className: c.benefit,
            }),
          });
        },
        h = (e) => {
          let { children: n, className: t, ...r } = e;
          return (0, i.jsx)("div", {
            className: l()(c.container, t),
            ...r,
            children: n,
          });
        };
    },
    41959: function (e, n, t) {
      t.d(n, {
        H: function () {
          return r;
        },
      });
      var i,
        r,
        l = t(200651);
      t(192379);
      var a = t(120356),
        s = t.n(a),
        o = t(768581),
        c = t(73346),
        u = t(622085);
      ((i = r || (r = {}))[(i.SMALL = 40)] = "SMALL"),
        (i[(i.MEDIUM = 66)] = "MEDIUM");
      let d = { 40: u.small, 66: u.medium };
      n.Z = (e) => {
        let n,
          { application: t, size: i, asset: r, className: a } = e;
        return (
          (n =
            null != r
              ? (0, c._W)(t.id, r, i)
              : o.ZP.getApplicationIconURL({
                  id: t.id,
                  icon: t.icon,
                  size: i,
                })),
          (0, l.jsx)("img", {
            alt: "",
            src: n,
            className: s()(u.icon, d[i], a),
          })
        );
      };
    },
    689011: function (e, n, t) {
      t.d(n, {
        Oc: function () {
          return v;
        },
        t: function () {
          return h;
        },
        xe: function () {
          return j;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(131388),
        a = t(409813),
        s = t(586585),
        o = t(614277),
        c = t(225715),
        u = t(750143),
        d = t(388032),
        m = t(555730),
        f = t(365627),
        x = t(753260);
      let h = (e) => {
          let { step: n, onClose: t } = e,
            s = (0, l.Z)(u.X);
          return n === a.h8.CONFIRM || n === a.h8.BENEFITS
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: m.headerContainer,
                children: [
                  !s &&
                    (0, i.jsx)("div", {
                      className: m.headerImageContainer,
                      "aria-hidden": "true",
                      children: (0, i.jsx)("img", {
                        src: x,
                        alt: "",
                        className: m.headerImage,
                      }),
                    }),
                  (0, i.jsx)(r.Clickable, {
                    className: m.closeContainer,
                    onClick: () => t(),
                    "aria-label": d.intl.string(d.t.cpT0Cg),
                    children: (0, i.jsx)(r.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: m.closeIcon,
                    }),
                  }),
                ],
              });
        },
        v = (e) => {
          let {
            icon: n,
            storeListingBenefits: t,
            skuBenefits: r,
            application: l,
            title: a,
            subtitle: s,
            description: o,
          } = e;
          return null == l
            ? null
            : (0, i.jsx)("div", {
                className: m.confirmationContainer,
                children: (0, i.jsxs)(c.q$, {
                  children: [
                    (0, i.jsx)(c.CW, { application: l, asset: n }),
                    (0, i.jsx)(c.r0, { children: a }),
                    (0, i.jsx)(c.s$, {}),
                    (0, i.jsx)(c.K9, { title: s, description: o }),
                    (0, i.jsx)(c.G9, {
                      applicationId: l.id,
                      storeListingBenefits: t,
                      skuBenefits: r,
                    }),
                  ],
                }),
              });
        };
      function j(e) {
        let { tierName: n, onConfirm: t, subscription: l } = e;
        return (0, i.jsxs)("div", {
          className: m.purchaseConfirmation,
          children: [
            (0, i.jsx)("img", { src: f, alt: "", width: 300, height: 126 }),
            (0, i.jsx)(r.Heading, {
              className: m.confirmationTitle,
              variant: "heading-xl/extrabold",
              color: "header-primary",
              children: d.intl.format(d.t["wLFT6+"], { tier: n }),
            }),
            (0, i.jsx)(r.Text, {
              className: m.confirmationSubtitle,
              variant: "text-md/medium",
              color: "header-secondary",
              children: d.intl.format(d.t.OsAK9v, {
                timestamp: null == l ? void 0 : l.currentPeriodEnd,
              }),
            }),
            (0, i.jsx)(o.O3, {
              children: (0, i.jsx)(s.Z, {
                onPrimary: t,
                primaryCTA: s.g.CONTINUE,
                primaryText: d.intl.string(d.t["JtWl+f"]),
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
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        a = t(481060),
        s = t(596454),
        o = t(889989),
        c = t(600699);
      function u(e) {
        let n,
          {
            applicationId: t,
            storeListingBenefits: r,
            skuBenefits: a,
            className: s,
          } = e;
        return (
          null != r
            ? (n = r.map((e) =>
                (0, i.jsx)(
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
                (0, i.jsx)(
                  d,
                  { benefit: e, className: l()(c.__invalid_benefit, s) },
                  n,
                ),
              )),
          (0, i.jsx)(i.Fragment, { children: n })
        );
      }
      function d(e) {
        let {
          benefit: n,
          className: t,
          emojiContainerClassName: r,
          showsDescription: o = !0,
          nameTextVariant: u = "text-md/medium",
          nameTextColor: d = "header-primary",
        } = e;
        return (0, i.jsxs)("div", {
          className: l()(c.container, t),
          children: [
            null != n.emoji &&
              (0, i.jsx)("div", {
                className: l()(c.emojiContainer, r),
                children: (0, i.jsx)(s.Z, {
                  emojiId: n.emoji.id,
                  emojiName: n.emoji.name,
                  animated: n.emoji.animated,
                }),
              }),
            (0, i.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: u,
                  color: d,
                  className: c.name,
                  children: n.name,
                }),
                o &&
                  (0, i.jsx)(a.Text, {
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
          className: r,
          emojiContainerClassName: s,
          showsDescription: u = !0,
          nameTextVariant: d = "text-md/medium",
          nameTextColor: m = "header-primary",
        } = e;
        return (0, i.jsxs)("div", {
          className: l()(c.container, r),
          children: [
            (0, i.jsx)("div", {
              className: l()(c.emojiContainer, s),
              children: (0, o.n)(n, t.icon),
            }),
            (0, i.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: d,
                  color: m,
                  className: c.name,
                  children: t.name,
                }),
                u &&
                  (0, i.jsx)(a.Text, {
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
      var i = t(200651);
      t(192379);
      var r = t(187753),
        l = t(596454),
        a = t(73346);
      function s(e, n) {
        if (null != n)
          switch (n.type) {
            case r.T.STORE_ASSET:
              let t = (0, a._W)(e, n.store_asset_id);
              return (0, i.jsx)("img", { src: t, alt: "", className: "emoji" });
            case r.T.EMOJI:
              return (0, i.jsx)(l.Z, { emojiName: n.emoji });
          }
      }
    },
    187753: function (e, n, t) {
      var i, r;
      t.d(n, {
        T: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STORE_ASSET = 1)] = "STORE_ASSET"),
        (r[(r.EMOJI = 2)] = "EMOJI");
    },
  },
]);
//# sourceMappingURL=8acb74d948c9bcea24ff.js.map
