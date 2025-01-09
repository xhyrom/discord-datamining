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
    586585: function (n, e, t) {
      t.d(e, {
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
        d = t(659915);
      ((i = r || (r = {}))[(i.CONTINUE = 0)] = "CONTINUE"),
        (i[(i.UPGRADE = 1)] = "UPGRADE"),
        (i[(i.PURCHASE = 2)] = "PURCHASE");
      let u = (n) => {
        let {
          onBack: e,
          backText: t,
          primaryIcon: i,
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
                    children: (t) =>
                      (0, l.jsxs)(n, {
                        ...t,
                        ...e,
                        children: [
                          null == i
                            ? null
                            : (0, l.jsx)(i, {
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
                      null == i
                        ? null
                        : (0, l.jsx)(i, {
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
                  children: null != t ? t : c.intl.string(c.t["13/7kZ"]),
                }),
          ],
        });
      };
      (u.CTAType = r), (e.Z = u);
    },
    612853: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        a = t(481060),
        s = t(388032),
        o = t(221309),
        c = t(652849);
      function d() {
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
    614277: function (n, e, t) {
      t.d(e, {
        C3: function () {
          return j;
        },
        O3: function () {
          return v;
        },
        ZP: function () {
          return h;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        s = t(512722),
        o = t.n(s),
        c = t(995295),
        d = t(481060),
        u = t(540059),
        m = t(563132),
        x = t(409813),
        f = t(135970);
      function h(n) {
        var e, t, l, s, c, h;
        let {
            header: j,
            isLargeModal: v,
            isDynamicModal: N,
            stepProps: p,
          } = (function (n) {
            let { header: e, isLargeModal: t, isDynamicModal: i, ...r } = n;
            return {
              header: e,
              isLargeModal: t,
              isDynamicModal: i,
              stepProps: r,
            };
          })(n),
          {
            step: C,
            stepConfigs: y,
            setBodyNode: g,
            setFooterNode: E,
            setModalOverlayNode: T,
            setReadySlideId: I,
          } = (0, m.usePaymentContext)(),
          S = y.find((n) => n.key === C);
        r.useEffect(() => {
          T(null);
        }, [C, T]),
          o()(null != S, "Unknown step for current payment flow.");
        let k =
            null !==
              (c =
                null == S
                  ? void 0
                  : null === (e = S.options) || void 0 === e
                    ? void 0
                    : e.hideSlider) &&
            void 0 !== c &&
            c,
          b =
            null == S
              ? void 0
              : null === (t = S.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          P =
            null == S
              ? void 0
              : null === (l = S.options) || void 0 === l
                ? void 0
                : l.sliderBodyClassName;
        void 0 !== v && v
          ? (P = f.sliderBodyLarge)
          : N && (P = f.sliderBodyDynamic);
        let A = (0, u.Q3)("PaymentModalStep");
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null ===
              (h =
                null == S
                  ? void 0
                  : null === (s = S.options) || void 0 === s
                    ? void 0
                    : s.renderHeader) ||
            void 0 === h ||
            h
              ? j
              : null,
            S.renderStep(p),
            null == C || k
              ? null
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(d.ModalContent, {
                      className: a()(
                        b,
                        f.body,
                        f.modalContentOverride,
                        C === x.h8.ADD_PAYMENT_STEPS
                          ? f.addPaymentSteps
                          : void 0,
                      ),
                      children: (0, i.jsx)(d.Slides, {
                        activeSlide: C,
                        centered: !1,
                        onSlideReady: (n) => I(n),
                        width:
                          A && C === x.h8.ADD_PAYMENT_STEPS ? "100%" : void 0,
                        children: y
                          .filter((n) => null != n.key)
                          .map((n) =>
                            (0, i.jsx)(
                              d.Slide,
                              {
                                id: n.key,
                                children: (0, i.jsx)("form", {
                                  className: a()(f.sliderBody, P),
                                  ref: (n) => g(n),
                                  onSubmit: (n) => n.preventDefault(),
                                }),
                              },
                              n.key,
                            ),
                          ),
                      }),
                    }),
                    (0, i.jsx)("div", { ref: (n) => E(n) }),
                    (0, i.jsx)("div", { ref: (n) => T(n) }),
                  ],
                }),
          ],
        });
      }
      function j(n) {
        let { children: e } = n,
          { bodyNode: t } = (0, m.usePaymentContext)();
        return null == t ? null : c.createPortal(e, t);
      }
      function v(n) {
        let { children: e } = n,
          { footerNode: t } = (0, m.usePaymentContext)();
        return null == t ? null : c.createPortal(e, t);
      }
    },
    750143: function (n, e, t) {
      t.d(e, {
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
    225715: function (n, e, t) {
      t.d(e, {
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
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        a = t(481060),
        s = t(41959),
        o = t(245561),
        c = t(76962);
      let d = (n) => {
          let { application: e, asset: t, className: r, ...l } = n;
          return (0, i.jsx)(s.Z, {
            application: e,
            size: s.H.MEDIUM,
            asset: t,
            className: r,
            ...l,
          });
        },
        u = (n) => {
          let { children: e, className: t, id: r, ...s } = n;
          return (0, i.jsx)(a.Heading, {
            className: l()(c.header, t),
            variant: "heading-xl/extrabold",
            id: r,
            ...s,
            children: e,
          });
        };
      function m() {
        return (0, i.jsx)("hr", { className: c.divider });
      }
      let x = (n) => {
          let { className: e, title: t, description: r, ...l } = n;
          return (0, i.jsxs)("div", {
            className: e,
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
        f = (n) => {
          let {
            applicationId: e,
            storeListingBenefits: t,
            skuBenefits: r,
            className: a,
            ...s
          } = n;
          return (0, i.jsx)("div", {
            className: l()(c.benefitsContainer, a),
            ...s,
            children: (0, i.jsx)(o.GU, {
              applicationId: e,
              storeListingBenefits: t,
              skuBenefits: r,
              className: c.benefit,
            }),
          });
        },
        h = (n) => {
          let { children: e, className: t, ...r } = n;
          return (0, i.jsx)("div", {
            className: l()(c.container, t),
            ...r,
            children: e,
          });
        };
    },
    41959: function (n, e, t) {
      t.d(e, {
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
        d = t(134384);
      ((i = r || (r = {}))[(i.SMALL = 40)] = "SMALL"),
        (i[(i.MEDIUM = 66)] = "MEDIUM");
      let u = { 40: d.small, 66: d.medium };
      e.Z = (n) => {
        let e,
          { application: t, size: i, asset: r, className: a } = n;
        return (
          (e =
            null != r
              ? (0, c._W)(t.id, r, i)
              : o.ZP.getApplicationIconURL({
                  id: t.id,
                  icon: t.icon,
                  size: i,
                })),
          (0, l.jsx)("img", {
            alt: "",
            src: e,
            className: s()(d.icon, u[i], a),
          })
        );
      };
    },
    689011: function (n, e, t) {
      t.d(e, {
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
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(131388),
        a = t(409813),
        s = t(586585),
        o = t(614277),
        c = t(225715),
        d = t(750143),
        u = t(388032),
        m = t(641479),
        x = t(365627),
        f = t(753260);
      let h = (n) => {
          let { step: e, onClose: t } = n,
            s = (0, l.Z)(d.X);
          return e === a.h8.CONFIRM || e === a.h8.BENEFITS
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: m.headerContainer,
                children: [
                  !s &&
                    (0, i.jsx)("div", {
                      className: m.headerImageContainer,
                      "aria-hidden": "true",
                      children: (0, i.jsx)("img", {
                        src: f,
                        alt: "",
                        className: m.headerImage,
                      }),
                    }),
                  (0, i.jsx)(r.Clickable, {
                    className: m.closeContainer,
                    onClick: () => t(),
                    "aria-label": u.intl.string(u.t.cpT0Cg),
                    children: (0, i.jsx)(r.XSmallIcon, {
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
            storeListingBenefits: t,
            skuBenefits: r,
            application: l,
            title: a,
            subtitle: s,
            description: o,
          } = n;
          return null == l
            ? null
            : (0, i.jsx)("div", {
                className: m.confirmationContainer,
                children: (0, i.jsxs)(c.q$, {
                  children: [
                    (0, i.jsx)(c.CW, { application: l, asset: e }),
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
      function v(n) {
        let { tierName: e, onConfirm: t, subscription: l } = n;
        return (0, i.jsxs)("div", {
          className: m.purchaseConfirmation,
          children: [
            (0, i.jsx)("img", { src: x, alt: "", width: 300, height: 126 }),
            (0, i.jsx)(r.Heading, {
              className: m.confirmationTitle,
              variant: "heading-xl/extrabold",
              color: "header-primary",
              children: u.intl.format(u.t["wLFT6+"], { tier: e }),
            }),
            (0, i.jsx)(r.Text, {
              className: m.confirmationSubtitle,
              variant: "text-md/medium",
              color: "header-secondary",
              children: u.intl.format(u.t.OsAK9v, {
                timestamp: null == l ? void 0 : l.currentPeriodEnd,
              }),
            }),
            (0, i.jsx)(o.O3, {
              children: (0, i.jsx)(s.Z, {
                onPrimary: t,
                primaryCTA: s.g.CONTINUE,
                primaryText: u.intl.string(u.t["JtWl+f"]),
              }),
            }),
          ],
        });
      }
    },
    245561: function (n, e, t) {
      t.d(e, {
        GU: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        a = t(481060),
        s = t(596454),
        o = t(889989),
        c = t(630480);
      function d(n) {
        let e,
          {
            applicationId: t,
            storeListingBenefits: r,
            skuBenefits: a,
            className: s,
          } = n;
        return (
          null != r
            ? (e = r.map((n) =>
                (0, i.jsx)(
                  m,
                  {
                    applicationId: t,
                    benefit: n,
                    className: l()(c.__invalid_benefit, s),
                  },
                  n.id,
                ),
              ))
            : null != a &&
              (e = a.map((n, e) =>
                (0, i.jsx)(
                  u,
                  { benefit: n, className: l()(c.__invalid_benefit, s) },
                  e,
                ),
              )),
          (0, i.jsx)(i.Fragment, { children: e })
        );
      }
      function u(n) {
        let {
          benefit: e,
          className: t,
          emojiContainerClassName: r,
          showsDescription: o = !0,
          nameTextVariant: d = "text-md/medium",
          nameTextColor: u = "header-primary",
        } = n;
        return (0, i.jsxs)("div", {
          className: l()(c.container, t),
          children: [
            null != e.emoji &&
              (0, i.jsx)("div", {
                className: l()(c.emojiContainer, r),
                children: (0, i.jsx)(s.Z, {
                  emojiId: e.emoji.id,
                  emojiName: e.emoji.name,
                  animated: e.emoji.animated,
                }),
              }),
            (0, i.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: d,
                  color: u,
                  className: c.name,
                  children: e.name,
                }),
                o &&
                  (0, i.jsx)(a.Text, {
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
          benefit: t,
          className: r,
          emojiContainerClassName: s,
          showsDescription: d = !0,
          nameTextVariant: u = "text-md/medium",
          nameTextColor: m = "header-primary",
        } = n;
        return (0, i.jsxs)("div", {
          className: l()(c.container, r),
          children: [
            (0, i.jsx)("div", {
              className: l()(c.emojiContainer, s),
              children: (0, o.n)(e, t.icon),
            }),
            (0, i.jsxs)("div", {
              className: c.infoContainer,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: u,
                  color: m,
                  className: c.name,
                  children: t.name,
                }),
                d &&
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
    889989: function (n, e, t) {
      t.d(e, {
        n: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(187753),
        l = t(596454),
        a = t(73346);
      function s(n, e) {
        if (null != e)
          switch (e.type) {
            case r.T.STORE_ASSET:
              let t = (0, a._W)(n, e.store_asset_id);
              return (0, i.jsx)("img", { src: t, alt: "", className: "emoji" });
            case r.T.EMOJI:
              return (0, i.jsx)(l.Z, { emojiName: e.emoji });
          }
      }
    },
    187753: function (n, e, t) {
      var i, r;
      t.d(e, {
        T: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STORE_ASSET = 1)] = "STORE_ASSET"),
        (r[(r.EMOJI = 2)] = "EMOJI");
    },
  },
]);
//# sourceMappingURL=45717c0f8a2d86bfe846.js.map
