"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73503"],
  {
    365627: function (n) {
      n.exports = "/assets/a398fdf7cebb1a429957.svg";
    },
    753260: function (n) {
      n.exports = "/assets/2c64af033af4ea637189.svg";
    },
    586585: function (n, e, i) {
      i.d(e, {
        g: function () {
          return r;
        },
      });
      var t,
        r,
        l = i(200651);
      i(192379);
      var a = i(481060),
        s = i(600164),
        o = i(612853),
        c = i(388032),
        d = i(404246);
      ((t = r || (r = {}))[(t.CONTINUE = 0)] = "CONTINUE"),
        (t[(t.UPGRADE = 1)] = "UPGRADE"),
        (t[(t.PURCHASE = 2)] = "PURCHASE");
      let u = (n) => {
        let {
          onBack: e,
          backText: i,
          primaryIcon: t,
          primaryCTA: r,
          primaryType: u,
          primaryText: m,
          primaryTooltip: x,
          primaryDisabled: f,
          primarySubmitting: h,
          onPrimary: j,
          secondaryText: v,
          onSecondary: N,
        } = n;
        return (0, l.jsxs)(a.ModalFooter, {
          justify: s.Z.Justify.BETWEEN,
          align: s.Z.Align.CENTER,
          children: [
            (() => {
              if (null == r || null == m) return null;
              let n = 2 === r ? a.ShinyButton : a.Button,
                e = {
                  innerClassName: d.button,
                  type: u,
                  disabled: f,
                  submitting: h,
                  color:
                    0 === r ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
                  onClick: j,
                };
              return null != x
                ? (0, l.jsx)(a.Tooltip, {
                    text: x,
                    children: (i) =>
                      (0, l.jsxs)(n, {
                        ...i,
                        ...e,
                        children: [
                          null == t
                            ? null
                            : (0, l.jsx)(t, {
                                color: "currentColor",
                                className: d.primaryIcon,
                              }),
                          m,
                        ],
                      }),
                  })
                : (0, l.jsxs)(n, {
                    ...e,
                    children: [
                      null == t
                        ? null
                        : (0, l.jsx)(t, {
                            color: "currentColor",
                            className: d.primaryIcon,
                          }),
                      m,
                    ],
                  });
            })(),
            null == v
              ? null
              : (0, l.jsx)(a.Button, {
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  onClick: N,
                  children: v,
                }),
            (0, l.jsx)(o.Z, {}),
            null == e
              ? null
              : (0, l.jsx)(a.Button, {
                  className: d.back,
                  color: a.Button.Colors.PRIMARY,
                  look: a.Button.Looks.LINK,
                  onClick: e,
                  children: null != i ? i : c.intl.string(c.t["13/7kZ"]),
                }),
          ],
        });
      };
      (u.CTAType = r), (e.Z = u);
    },
    612853: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return d;
        },
      });
      var t = i(200651);
      i(192379);
      var r = i(120356),
        l = i.n(r),
        a = i(481060),
        s = i(388032),
        o = i(414033),
        c = i(847854);
      function d() {
        return (0, t.jsxs)("div", {
          className: l()(o.paymentModalLockIcon, c.flex, c.alignCenter),
          children: [
            (0, t.jsx)(a.LockIcon, {
              size: "sm",
              color: "currentColor",
              className: o.lockIcon,
            }),
            (0, t.jsx)(a.Text, {
              variant: "text-sm/medium",
              children: s.intl.string(s.t.Kv6Z4O),
            }),
          ],
        });
      }
    },
    614277: function (n, e, i) {
      i.d(e, {
        C3: function () {
          return h;
        },
        O3: function () {
          return j;
        },
        ZP: function () {
          return f;
        },
      });
      var t = i(200651),
        r = i(192379),
        l = i(120356),
        a = i.n(l),
        s = i(512722),
        o = i.n(s),
        c = i(995295),
        d = i(481060),
        u = i(563132),
        m = i(409813),
        x = i(631232);
      function f(n) {
        var e, i, l, s, c, f;
        let {
            header: h,
            isLargeModal: j,
            isDynamicModal: v,
            stepProps: N,
          } = (function (n) {
            let { header: e, isLargeModal: i, isDynamicModal: t, ...r } = n;
            return {
              header: e,
              isLargeModal: i,
              isDynamicModal: t,
              stepProps: r,
            };
          })(n),
          {
            step: p,
            stepConfigs: C,
            setBodyNode: g,
            setFooterNode: y,
            setModalOverlayNode: E,
            setReadySlideId: T,
          } = (0, u.usePaymentContext)(),
          I = C.find((n) => n.key === p);
        r.useEffect(() => {
          E(null);
        }, [p, E]),
          o()(null != I, "Unknown step for current payment flow.");
        let S =
            null !==
              (c =
                null == I
                  ? void 0
                  : null === (e = I.options) || void 0 === e
                    ? void 0
                    : e.hideSlider) &&
            void 0 !== c &&
            c,
          k =
            null == I
              ? void 0
              : null === (i = I.options) || void 0 === i
                ? void 0
                : i.bodyClassName,
          b =
            null == I
              ? void 0
              : null === (l = I.options) || void 0 === l
                ? void 0
                : l.sliderBodyClassName;
        return (
          void 0 !== j && j
            ? (b = x.sliderBodyLarge)
            : v && (b = x.sliderBodyDynamic),
          (0, t.jsxs)(t.Fragment, {
            children: [
              null ===
                (f =
                  null == I
                    ? void 0
                    : null === (s = I.options) || void 0 === s
                      ? void 0
                      : s.renderHeader) ||
              void 0 === f ||
              f
                ? h
                : null,
              I.renderStep(N),
              null == p || S
                ? null
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(d.ModalContent, {
                        className: a()(k, x.body, {
                          [x.reviewStep]: p === m.h8.REVIEW,
                          [x.addPaymentSteps]: p === m.h8.ADD_PAYMENT_STEPS,
                        }),
                        children: (0, t.jsx)(d.Slides, {
                          activeSlide: p,
                          centered: !1,
                          onSlideReady: (n) => T(n),
                          width: p === m.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                          children: C.filter((n) => null != n.key).map((n) =>
                            (0, t.jsx)(
                              d.Slide,
                              {
                                id: n.key,
                                children: (0, t.jsx)("form", {
                                  className: a()(x.sliderBody, b),
                                  ref: (n) => g(n),
                                  onSubmit: (n) => n.preventDefault(),
                                }),
                              },
                              n.key,
                            ),
                          ),
                        }),
                      }),
                      (0, t.jsx)("div", { ref: (n) => y(n) }),
                      (0, t.jsx)("div", { ref: (n) => E(n) }),
                    ],
                  }),
            ],
          })
        );
      }
      function h(n) {
        let { children: e } = n,
          { bodyNode: i } = (0, u.usePaymentContext)();
        return null == i ? null : c.createPortal(e, i);
      }
      function j(n) {
        let { children: e } = n,
          { footerNode: i } = (0, u.usePaymentContext)();
        return null == i ? null : c.createPortal(e, i);
      }
    },
    750143: function (n, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        i: function () {
          return t;
        },
      });
      let t = "(max-width: 485px)",
        r = "(max-height: 450px)";
    },
    225715: function (n, e, i) {
      i.d(e, {
        CW: function () {
          return d;
        },
        G9: function () {
          return f;
        },
        K9: function () {
          return x;
        },
        q$: function () {
          return h;
        },
        r0: function () {
          return u;
        },
        s$: function () {
          return m;
        },
      });
      var t = i(200651);
      i(192379);
      var r = i(120356),
        l = i.n(r),
        a = i(481060),
        s = i(41959),
        o = i(245561),
        c = i(715309);
      let d = (n) => {
          let { application: e, asset: i, className: r, ...l } = n;
          return (0, t.jsx)(s.Z, {
            application: e,
            size: s.H.MEDIUM,
            asset: i,
            className: r,
            ...l,
          });
        },
        u = (n) => {
          let { children: e, className: i, id: r, ...s } = n;
          return (0, t.jsx)(a.Heading, {
            className: l()(c.header, i),
            variant: "heading-xl/extrabold",
            id: r,
            ...s,
            children: e,
          });
        };
      function m() {
        return (0, t.jsx)("hr", { className: c.divider });
      }
      let x = (n) => {
          let { className: e, title: i, description: r, ...l } = n;
          return (0, t.jsxs)("div", {
            className: e,
            ...l,
            children: [
              (0, t.jsx)(a.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: i,
              }),
              (0, t.jsx)(a.Heading, {
                variant: "heading-sm/normal",
                color: "header-secondary",
                children: r,
              }),
            ],
          });
        },
        f = (n) => {
          let {
            applicationId: e,
            storeListingBenefits: i,
            skuBenefits: r,
            className: a,
            ...s
          } = n;
          return (0, t.jsx)("div", {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, t.jsx)(o.GU, {
              applicationId: e,
              storeListingBenefits: i,
              skuBenefits: r,
              className: c.benefit,
            }),
          });
        },
        h = (n) => {
          let { children: e, className: i, ...r } = n;
          return (0, t.jsx)("div", {
            className: l()(c.container, i),
            ...r,
            children: e,
          });
        };
    },
    41959: function (n, e, i) {
      i.d(e, {
        H: function () {
          return r;
        },
      });
      var t,
        r,
        l = i(200651);
      i(192379);
      var a = i(120356),
        s = i.n(a),
        o = i(768581),
        c = i(73346),
        d = i(714317);
      ((t = r || (r = {}))[(t.SMALL = 40)] = "SMALL"),
        (t[(t.MEDIUM = 66)] = "MEDIUM");
      let u = { 40: d.small, 66: d.medium };
      e.Z = (n) => {
        let e,
          { application: i, size: t, asset: r, className: a } = n;
        return (
          (e =
            null != r
              ? (0, c._W)(i.id, r, t)
              : o.ZP.getApplicationIconURL({
                  id: i.id,
                  icon: i.icon,
                  size: t,
                })),
          (0, l.jsx)("img", {
            alt: "",
            src: e,
            className: s()(d.icon, u[t], a),
          })
        );
      };
    },
    689011: function (n, e, i) {
      i.d(e, {
        Oc: function () {
          return j;
        },
        t: function () {
          return h;
        },
        xe: function () {
          return v;
        },
      });
      var t = i(200651);
      i(192379);
      var r = i(481060),
        l = i(131388),
        a = i(409813),
        s = i(586585),
        o = i(614277),
        c = i(225715),
        d = i(750143),
        u = i(388032),
        m = i(751141),
        x = i(365627),
        f = i(753260);
      let h = (n) => {
          let { step: e, onClose: i } = n,
            s = (0, l.Z)(d.X);
          return e === a.h8.CONFIRM || e === a.h8.BENEFITS
            ? (0, t.jsx)("div", {})
            : (0, t.jsxs)("div", {
                className: m.headerContainer,
                children: [
                  !s &&
                    (0, t.jsx)("div", {
                      className: m.headerImageContainer,
                      "aria-hidden": "true",
                      children: (0, t.jsx)("img", {
                        src: f,
                        alt: "",
                        className: m.headerImage,
                      }),
                    }),
                  (0, t.jsx)(r.Clickable, {
                    className: m.closeContainer,
                    onClick: () => i(),
                    "aria-label": u.intl.string(u.t.cpT0Cg),
                    children: (0, t.jsx)(r.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: m.closeIcon,
                    }),
                  }),
                ],
              });
        },
        j = (n) => {
          let {
            icon: e,
            storeListingBenefits: i,
            skuBenefits: r,
            application: l,
            title: a,
            subtitle: s,
            description: o,
          } = n;
          return null == l
            ? null
            : (0, t.jsx)("div", {
                className: m.confirmationContainer,
                children: (0, t.jsxs)(c.q$, {
                  children: [
                    (0, t.jsx)(c.CW, { application: l, asset: e }),
                    (0, t.jsx)(c.r0, { children: a }),
                    (0, t.jsx)(c.s$, {}),
                    (0, t.jsx)(c.K9, { title: s, description: o }),
                    (0, t.jsx)(c.G9, {
                      applicationId: l.id,
                      storeListingBenefits: i,
                      skuBenefits: r,
                    }),
                  ],
                }),
              });
        };
      function v(n) {
        let { tierName: e, onConfirm: i, subscription: l } = n;
        return (0, t.jsxs)("div", {
          className: m.purchaseConfirmation,
          children: [
            (0, t.jsx)("img", { src: x, alt: "", width: 300, height: 126 }),
            (0, t.jsx)(r.Heading, {
              className: m.confirmationTitle,
              variant: "heading-xl/extrabold",
              color: "header-primary",
              children: u.intl.format(u.t["wLFT6+"], { tier: e }),
            }),
            (0, t.jsx)(r.Text, {
              className: m.confirmationSubtitle,
              variant: "text-md/medium",
              color: "header-secondary",
              children: u.intl.format(u.t.OsAK9v, {
                timestamp: null == l ? void 0 : l.currentPeriodEnd,
              }),
            }),
            (0, t.jsx)(o.O3, {
              children: (0, t.jsx)(s.Z, {
                onPrimary: i,
                primaryCTA: s.g.CONTINUE,
                primaryText: u.intl.string(u.t["JtWl+f"]),
              }),
            }),
          ],
        });
      }
    },
    245561: function (n, e, i) {
      i.d(e, {
        GU: function () {
          return d;
        },
      });
      var t = i(200651);
      i(192379);
      var r = i(120356),
        l = i.n(r),
        a = i(481060),
        s = i(596454),
        o = i(889989),
        c = i(980970);
      function d(n) {
        let e,
          {
            applicationId: i,
            storeListingBenefits: r,
            skuBenefits: a,
            className: s,
          } = n;
        return (
          null != r
            ? (e = r.map((n) =>
                (0, t.jsx)(
                  m,
                  {
                    applicationId: i,
                    benefit: n,
                    className: l()(c.__invalid_benefit, s),
                  },
                  n.id,
                ),
              ))
            : null != a &&
              (e = a.map((n, e) =>
                (0, t.jsx)(
                  u,
                  { benefit: n, className: l()(c.__invalid_benefit, s) },
                  e,
                ),
              )),
          (0, t.jsx)(t.Fragment, { children: e })
        );
      }
      function u(n) {
        let {
          benefit: e,
          className: i,
          emojiContainerClassName: r,
          showsDescription: o = !0,
          nameTextVariant: d = "text-md/medium",
          nameTextColor: u = "header-primary",
        } = n;
        return (0, t.jsxs)("div", {
          className: l()(c.container, i),
          children: [
            null != e.emoji &&
              (0, t.jsx)("div", {
                className: l()(c.emojiContainer, r),
                children: (0, t.jsx)(s.Z, {
                  emojiId: e.emoji.id,
                  emojiName: e.emoji.name,
                  animated: e.emoji.animated,
                }),
              }),
            (0, t.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, t.jsx)(a.Text, {
                  variant: d,
                  color: u,
                  className: c.name,
                  children: e.name,
                }),
                o &&
                  (0, t.jsx)(a.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: e.description,
                  }),
              ],
            }),
          ],
        });
      }
      function m(n) {
        let {
          applicationId: e,
          benefit: i,
          className: r,
          emojiContainerClassName: s,
          showsDescription: d = !0,
          nameTextVariant: u = "text-md/medium",
          nameTextColor: m = "header-primary",
        } = n;
        return (0, t.jsxs)("div", {
          className: l()(c.container, r),
          children: [
            (0, t.jsx)("div", {
              className: l()(c.emojiContainer, s),
              children: (0, o.n)(e, i.icon),
            }),
            (0, t.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, t.jsx)(a.Text, {
                  variant: u,
                  color: m,
                  className: c.name,
                  children: i.name,
                }),
                d &&
                  (0, t.jsx)(a.Text, {
                    color: "interactive-normal",
                    variant: "text-sm/normal",
                    children: i.description,
                  }),
              ],
            }),
          ],
        });
      }
    },
    889989: function (n, e, i) {
      i.d(e, {
        n: function () {
          return s;
        },
      });
      var t = i(200651);
      i(192379);
      var r = i(187753),
        l = i(596454),
        a = i(73346);
      function s(n, e) {
        if (null != e)
          switch (e.type) {
            case r.T.STORE_ASSET:
              let i = (0, a._W)(n, e.store_asset_id);
              return (0, t.jsx)("img", { src: i, alt: "", className: "emoji" });
            case r.T.EMOJI:
              return (0, t.jsx)(l.Z, { emojiName: e.emoji });
          }
      }
    },
    187753: function (n, e, i) {
      var t, r;
      i.d(e, {
        T: function () {
          return t;
        },
      }),
        ((r = t || (t = {}))[(r.STORE_ASSET = 1)] = "STORE_ASSET"),
        (r[(r.EMOJI = 2)] = "EMOJI");
    },
  },
]);
//# sourceMappingURL=e569e28a1322d5bc00b5.js.map
