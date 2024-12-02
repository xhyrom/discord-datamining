"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52808"],
  {
    982240: function (e) {
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    269128: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        a = t(772848),
        l = t(363969);
      let c = (0, a.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(l.button, t, { [l.open]: n, [l.withHighlight]: r }),
          children: [
            r &&
              (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                  id: c,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, i.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, i.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(c, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(c, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        o = t(481060),
        a = t(372900);
      n.Z = r.memo(function (e) {
        var n, t, l, c;
        let {
            user: d,
            size: s = o.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          m = r.useContext(a.Z);
        return (0, i.jsx)(o.Avatar, {
          src:
            ((n = d),
            (t = (0, o.getAvatarSize)(s)),
            (l = u),
            (c = m),
            n.getAvatarURL(c, t, l)),
          size: s,
          "aria-label": f ? void 0 : d.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    17894: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(525654),
        r = t.n(i),
        o = t(39612),
        a = t(271579),
        l = t(756647),
        c = t(232567),
        d = t(703656),
        s = t(314897),
        u = t(896797),
        f = t(626135),
        p = t(954824),
        m = t(981631);
      async function b(e) {
        var n, t;
        let i = null === (n = r().os) || void 0 === n ? void 0 : n.family;
        if ("Android" === i || "iOS" === i) {
          let n =
              null !== (t = s.default.getFingerprint()) && void 0 !== t
                ? t
                : s.default.getId(),
            i = (0, a.WS)();
          if (null == n && s.default.isAuthenticated())
            try {
              await (0, c.k)(), (n = s.default.getId());
            } catch {}
          return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: n,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function _(e) {
        let n = await b(e),
          t = (0, a.zS)(n);
        null != t &&
          f.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource,
          }),
          p.Z.launch(n, (e) => {
            !e && (0, d.dL)(u.Z.fallbackRoute);
          });
      }
    },
    752053: function (e, n, t) {
      t.d(n, {
        i: function () {
          return r;
        },
      });
      var i,
        r,
        o = t(200651);
      t(192379);
      var a = t(442837),
        l = t(780384),
        c = t(481060),
        d = t(410030),
        s = t(594174),
        u = t(388032),
        f = t(259319),
        p = t(982240),
        m = t(533854);
      ((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      n.Z = (e) => {
        let { onRetry: n, errorOrigin: t, errorMessage: i } = e,
          r = (0, d.ZP)(),
          b = (0, a.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          _ = 1 === t ? f.giftModalContainer : f.shopPageContainer,
          x =
            1 === t ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
        return (0, o.jsxs)("div", {
          className: _,
          children: [
            (0, o.jsx)("img", {
              className: f.__invalid_loadIssueImg,
              src: (0, l.wj)(r) ? p : m,
              alt: "",
            }),
            (0, o.jsx)(c.Heading, {
              className: f.heading1,
              variant: "heading-xl/semibold",
              children: u.intl.string(u.t["i5SQ7+"]),
            }),
            (0, o.jsx)(c.Text, {
              className: f.description,
              variant: "text-md/normal",
              children: x,
            }),
            b &&
              null != i &&
              (0, o.jsx)(c.Text, {
                variant: "text-md/normal",
                children: "staff-only debug: " + i,
              }),
            (0, o.jsx)(c.Button, {
              className: f.reload,
              size: c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: n,
              children: u.intl.string(u.t["+hivLS"]),
            }),
          ],
        });
      };
    },
    48931: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(267097),
        a = t(752053),
        l = t(814335);
      function c(e) {
        let { onClose: n } = e,
          { refreshCategories: t } = (0, o.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.ModalHeader, {
              className: l.header,
              children: (0, i.jsx)(r.ModalCloseButton, {
                className: l.closeButton,
                onClick: n,
              }),
            }),
            (0, i.jsx)(a.Z, { onRetry: t, errorOrigin: a.i.GIFT_MODAL }),
          ],
        });
      }
    },
    713316: function (e, n, t) {
      t.d(n, {
        w: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(512722),
        o = t.n(r),
        a = t(481060),
        l = t(563132),
        c = t(698708),
        d = t(614277),
        s = t(388032),
        u = t(786698);
      function f(e) {
        let { handleClose: n } = e,
          {
            skusById: t,
            selectedSkuId: r,
            application: f,
          } = (0, l.usePaymentContext)();
        o()(null != r, "Expected selectedSkuId"),
          o()(null != f, "Expected application");
        let p = t[r];
        o()(null != p, "Expected sku");
        let m = s.intl.formatToPlainString(s.t.wK0IbG, {
          applicationName: f.name,
          itemName: p.name,
        });
        return (0, i.jsxs)(d.C3, {
          children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsxs)("div", {
              className: u.confirmation,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xxl/bold",
                  className: u.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: m }),
                (0, i.jsx)("div", { className: u.divider }),
                (0, i.jsx)(a.Button, {
                  onClick: n,
                  children: s.intl.string(s.t.cpT0Cg),
                }),
              ],
            }),
          ],
        });
      }
    },
    961830: function (e, n, t) {
      t.d(n, {
        F7: function () {
          return g;
        },
        WA: function () {
          return p;
        },
        s2: function () {
          return m;
        },
        wo: function () {
          return x;
        },
        yp: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(853872),
        o = t(409813),
        a = t(276442),
        l = t(793541),
        c = t(380898),
        d = t(713316),
        s = t(710094),
        u = t(865921),
        f = t(388032);
      let p = { key: null, renderStep: (e) => (0, i.jsx)(u.v, { ...e }) },
        m = {
          key: o.h8.ADD_PAYMENT_STEPS,
          renderStep: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(a.J, {
                ...e,
                breadcrumbSteps: [
                  o.h8.ADD_PAYMENT_STEPS,
                  o.h8.REVIEW,
                  o.h8.CONFIRM,
                ],
                onReturn: () => {
                  0 === Object.keys(r.Z.paymentSources).length
                    ? e.handleClose()
                    : e.handleStepChange(o.h8.REVIEW, {
                        trackedFromStep: o.h8.ADD_PAYMENT_STEPS,
                      });
                },
              }),
            }),
          options: { renderHeader: !0 },
        },
        b = {
          key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
          renderStep: () => (0, i.jsx)(c.Z, {}),
        },
        _ = {
          key: o.h8.AWAITING_AUTHENTICATION,
          renderStep: () => (0, i.jsx)(l.Z, {}),
          options: { renderHeader: !0 },
        },
        x = {
          key: o.h8.REVIEW,
          renderStep: (e) => (0, i.jsx)(s.l, { ...e }),
          options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) },
        },
        g = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(d.w, { ...e }) },
        h = [b, _];
    },
    865921: function (e, n, t) {
      t.d(n, {
        v: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        o = t(399606),
        a = t(89057),
        l = t(597688),
        c = t(987209),
        d = t(563132),
        s = t(409813),
        u = t(48931),
        f = t(456251),
        p = t(981631);
      function m(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            blockedPayments: m,
            hasFetchedSkus: b,
            paymentSources: _,
            hasFetchedPaymentSources: x,
            application: g,
            skusById: h,
            selectedSkuId: C,
          } = (0, d.usePaymentContext)(),
          { isGift: v } = (0, c.wD)(),
          [S, j] = r.useState(!0),
          [k, T] = (0, o.Wu)([l.Z], () => [
            l.Z.isFetchingCategories,
            l.Z.error,
          ]);
        if (
          (r.useEffect(() => {
            let e = null != g;
            if (!!b && !!x && !!e) j(k);
          }, [b, x, g, k]),
          r.useEffect(() => {
            if (S || m || null == C) return;
            let e = h[C];
            if (
              v &&
              (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES
            ) {
              n(s.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(_).length) {
              n(s.h8.ADD_PAYMENT_STEPS);
              return;
            }
            n(s.h8.REVIEW);
          }, [S, m, n, _, v, h, C]),
          S)
        )
          return (0, i.jsx)(f.Z, {});
        if (m) return (0, i.jsx)(a.Vq, { onClose: t });
        if (null != T) return (0, i.jsx)(u.Z, { onClose: t });
        return null;
      }
    },
    721165: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(442837),
        a = t(131388),
        l = t(171246),
        c = t(689011),
        d = t(931905),
        s = t(430824),
        u = t(563132),
        f = t(409813),
        p = t(586585),
        m = t(614277),
        b = t(750143),
        _ = t(388032);
      function x(e) {
        let { handleStepChange: n, handleClose: t } = e,
          {
            subscriptionMetadataRequest: x,
            selectedSku: g,
            selectedStoreListing: h,
            application: C,
          } = (0, u.usePaymentContext)(),
          v = (0, a.Z)(b.i),
          S = (0, o.e7)([s.Z], () =>
            s.Z.getGuild(null == x ? void 0 : x.guild_id),
          ),
          j = r.useCallback(() => n(f.h8.REVIEW), [n]);
        if (null == g) return null;
        let k = (0, l.KW)(g.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.C3, {
              children: v
                ? (0, i.jsx)(d.h, {
                    confirmCta: _.intl.string(_.t.PBHFSk),
                    onConfirm: j,
                    onCancel: t,
                    title: _.intl.format(_.t["6n6oXF"], { tier: g.name }),
                    subtitle: k
                      ? _.intl.string(_.t.lzAoKC)
                      : _.intl.formatToPlainString(_.t["GqaY/v"], {
                          guildName: null == S ? void 0 : S.name,
                        }),
                    showOpenDiscord: !1,
                  })
                : (0, i.jsx)(c.Oc, {
                    icon: null == h ? void 0 : h.thumbnail,
                    storeListingBenefits: null == h ? void 0 : h.benefits,
                    application: null != C ? C : void 0,
                    title: _.intl.format(_.t.haiCxc, { tier: g.name }),
                    subtitle: k
                      ? _.intl.string(_.t.RvtbPz)
                      : _.intl.string(_.t.zY39Zm),
                    description: k
                      ? _.intl.formatToPlainString(_.t.QCe4ra, {
                          applicationName: null == C ? void 0 : C.name,
                        })
                      : _.intl.string(_.t.n1Pu8P),
                  }),
            }),
            !v &&
              (0, i.jsx)(m.O3, {
                children: (0, i.jsx)(p.Z, {
                  onBack: t,
                  backText: _.intl.string(_.t.TQBY1N),
                  onPrimary: j,
                  primaryCTA: p.g.CONTINUE,
                  primaryText: _.intl.string(_.t["gZhF+/"]),
                }),
              }),
          ],
        });
      }
    },
    519801: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(131388),
        a = t(607070),
        l = t(745510),
        c = t(171246),
        d = t(689011),
        s = t(931905),
        u = t(563132),
        f = t(409813),
        p = t(586585),
        m = t(456251),
        b = t(614277),
        _ = t(698708),
        x = t(750143),
        g = t(388032);
      function h(e) {
        var n, t;
        let h,
          C,
          {
            showBenefits: v,
            handleClose: S,
            onSubscriptionConfirmation: j,
          } = e,
          {
            updatedSubscription: k,
            readySlideId: T,
            selectedSku: y,
            selectedStoreListing: P,
            application: B,
          } = (0, u.usePaymentContext)(),
          N = (0, o.Z)(x.i),
          { createMultipleConfettiAt: E } = r.useContext(l.h),
          A =
            null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : "",
          I = () => {
            S(), null == j || j();
          },
          O = T === f.h8.CONFIRM,
          Z = (0, c.KW)(
            null !== (t = null == y ? void 0 : y.flags) && void 0 !== t ? t : 0,
          ),
          M =
            null != P && P.benefits.length > 0
              ? g.intl.formatToPlainString(g.t["+IQQVF"], {
                  benefitCount: P.benefits.length,
                })
              : null;
        return (
          v
            ? N
              ? (h = (0, i.jsx)(s.h, {
                  title: g.intl.format(g.t.ea6tZm, { tierName: A }),
                  subtitle:
                    null != P && P.benefits.length > 0
                      ? g.intl.formatToPlainString(g.t.HNepfn, { benefits: M })
                      : null,
                  onConfirm: I,
                  confirmCta: g.intl.string(g.t.nlkyw8),
                }))
              : ((h =
                  null != P && null != B
                    ? (0, i.jsx)(d.Oc, {
                        icon: P.thumbnail,
                        storeListingBenefits: P.benefits,
                        application: B,
                        title: g.intl.format(g.t["Q+qktb"], { tier: A }),
                        subtitle: g.intl.string(g.t.ECKxXV),
                        description: Z
                          ? g.intl.format(g.t.MAtQk5, {
                              applicationName: null == B ? void 0 : B.name,
                            })
                          : g.intl.format(g.t.vHkMFx, { tier: A }),
                      })
                    : (0, i.jsx)(m.Z, {})),
                (C = (0, i.jsx)(p.Z, {
                  onPrimary: I,
                  primaryCTA: p.g.CONTINUE,
                  primaryText: g.intl.string(g.t["JtWl+f"]),
                })))
            : (h = N
                ? (0, i.jsx)(s.m, {
                    tierName: A,
                    onConfirm: I,
                    subscription: k,
                  })
                : (0, i.jsx)(d.xe, {
                    tierName: A,
                    onConfirm: I,
                    subscription: k,
                  })),
          r.useEffect(() => {
            a.Z.useReducedMotion &&
              O &&
              E(window.innerWidth / 2, window.innerHeight / 2);
          }, [E, O]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(b.C3, { children: [(0, i.jsx)(_.Z, {}), h] }),
              null != C && (0, i.jsx)(b.O3, { children: C }),
            ],
          })
        );
      }
    },
    759386: function (e, n, t) {
      t.r(n),
        t.d(n, {
          getApplicationPaymentSteps: function () {
            return f;
          },
        }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(409813),
        o = t(276442),
        a = t(961830),
        l = t(721165),
        c = t(519801),
        d = t(589771),
        s = t(883419),
        u = t(388032);
      function f(e) {
        let { guildId: n, showBenefitsFirst: t } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, i.jsx)(d.Z, {
                initialStep: t ? r.h8.BENEFITS : r.h8.REVIEW,
                guildId: n,
                ...e,
              }),
          },
          {
            key: r.h8.BENEFITS,
            renderStep: (e) => (0, i.jsx)(l.Z, { ...e }),
            options: { useBreadcrumbLabel: () => u.intl.string(u.t["5LD2+P"]) },
          },
          {
            key: r.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(o.J, {
                  ...e,
                  breadcrumbSteps: [
                    r.h8.ADD_PAYMENT_STEPS,
                    r.h8.REVIEW,
                    r.h8.CONFIRM,
                  ],
                }),
              }),
            options: { renderHeader: !0 },
          },
          ...a.yp,
          {
            key: r.h8.REVIEW,
            renderStep: (e) =>
              (0, i.jsx)(s.Z, {
                backButtonEligible: !!t || void 0,
                prevStep: t ? r.h8.BENEFITS : void 0,
                ...e,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh),
            },
          },
          {
            key: r.h8.CONFIRM,
            renderStep: (e) => (0, i.jsx)(c.Z, { showBenefits: !t, ...e }),
          },
        ];
      }
    },
    589771: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        o = t(89057),
        a = t(509545),
        l = t(74538),
        c = t(987209),
        d = t(563132),
        s = t(456251);
      function u(e) {
        let {
            initialStep: n,
            initialPlanId: t,
            guildId: u,
            setAnalyticsData: f,
            handleClose: p,
          } = e,
          {
            blockedPayments: m,
            setStep: b,
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: x,
            currencyLoading: g,
            selectedSkuId: h,
            setSelectedSkuId: C,
            setSelectedPlanId: v,
            priceOptions: S,
            setSubscriptionMetadataRequest: j,
          } = (0, d.usePaymentContext)(),
          { isGift: k } = (0, c.wD)(),
          [T, y] = r.useState(!_ || !x || g);
        return (r.useEffect(() => {
          y(!_ || !x || g);
        }, [g, x, _]),
        r.useEffect(() => {
          null != u && j({ guild_id: u });
        }, [u, j]),
        r.useEffect(() => {
          v(t);
          let e = null != t ? a.Z.get(t) : null;
          if (!T && !m)
            f((n) => {
              let t = null != e ? (0, l.aS)(e.id, !1, k, S) : void 0;
              return {
                ...n,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (C(null == e ? void 0 : e.skuId), b(n));
        }, [m, t, k, T, S, h, f, v, C, b, n]),
        T)
          ? (0, i.jsx)(s.Z, {})
          : m
            ? (0, i.jsx)(o.Vq, { onClose: p })
            : null;
      }
    },
    883419: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return k;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        l = t(442837),
        c = t(481060),
        d = t(330726),
        s = t(716534),
        u = t(664891),
        f = t(171246),
        p = t(430824),
        m = t(563132),
        b = t(409813),
        _ = t(45572),
        x = t(51499),
        g = t(678334),
        h = t(456251),
        C = t(614277),
        v = t(698708),
        S = t(388032),
        j = t(596054);
      function k(e) {
        var n, t;
        let {
            backButtonEligible: o,
            prevStep: k,
            handleStepChange: T,
            trialFooterMessageOverride: y,
            reviewWarningMessage: P,
            planGroup: B,
            openInvoiceId: N,
            analyticsData: E,
            analyticsLocation: A,
            handleClose: I,
          } = e,
          {
            activeSubscription: O,
            application: Z,
            setUpdatedSubscription: M,
            contextMetadata: H,
            currencies: L,
            paymentSources: w,
            priceOptions: D,
            purchaseError: R,
            purchaseTokenAuthState: W,
            selectedPlan: F,
            selectedSku: G,
            setCurrency: z,
            setPaymentSourceId: K,
            setPurchaseState: V,
            setPurchaseError: Y,
            purchaseState: U,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: q,
          } = (0, m.usePaymentContext)();
        a()(null != F, "Expected plan to be selected");
        let J = r.useRef(null),
          [X, $] = (0, d.Z)(!1, 500),
          ee = null == Q ? void 0 : Q.guild_id,
          en = (0, l.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
          [et, ei] = r.useState(null),
          er = (0, f.KW)(
            null !== (n = null == G ? void 0 : G.flags) && void 0 !== n ? n : 0,
          );
        r.useEffect(() => {
          null != R &&
            null != J.current &&
            J.current.scrollIntoView({ behavior: "smooth" });
        }, [R]);
        let eo = r.useCallback(
            (e) => {
              M(e), T(b.h8.CONFIRM);
            },
            [T, M],
          ),
          ea = r.useRef(null);
        return U === _.A.PURCHASING
          ? (0, i.jsx)(h.Z, {})
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(x.Z, { className: j.breadcrumbs }),
                (0, i.jsxs)(C.C3, {
                  children: [
                    (0, i.jsx)(v.Z, {}),
                    er &&
                      (0, i.jsxs)("div", {
                        className: j.userSubscriptionDetailsContainer,
                        children: [
                          (0, i.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: S.intl.string(S.t.nf5LOT),
                          }),
                          (0, i.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-normal",
                            children: S.intl.format(S.t.y4n0GR, {
                              applicationName: null == Z ? void 0 : Z.name,
                            }),
                          }),
                        ],
                      }),
                    !er &&
                      (0, i.jsxs)("div", {
                        className: j.guildPickerContainer,
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: S.intl.string(S.t["5qyruL"]),
                          }),
                          (0, i.jsxs)("div", {
                            className: j.guildNameContainer,
                            children: [
                              (0, i.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: S.intl.string(S.t.dBih7e),
                              }),
                              (0, i.jsx)(c.Text, {
                                variant: "text-md/normal",
                                lineClamp: 1,
                                children:
                                  null !==
                                    (t = null == en ? void 0 : en.name) &&
                                  void 0 !== t
                                    ? t
                                    : S.intl.string(S.t.dtwqPT),
                              }),
                            ],
                          }),
                        ],
                      }),
                    null == O
                      ? (0, i.jsx)(s.Z, {
                          selectedPlanId: F.id,
                          paymentSources: w,
                          onPaymentSourceChange: (e) =>
                            K(null != e ? e.id : null),
                          priceOptions: D,
                          currencies: L,
                          onCurrencyChange: (e) => z(e),
                          handlePaymentSourceAdd: () =>
                            T(b.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: X,
                          trialFooterMessageOverride: y,
                          reviewWarningMessage: P,
                          metadata: er ? void 0 : Q,
                          purchaseState: U,
                          hideSubscriptionDetails: !0,
                          handleClose: I,
                        })
                      : (0, i.jsx)(u.Z, {
                          premiumSubscription: O,
                          paymentSources: w,
                          priceOptions: D,
                          onPaymentSourceChange: (e) =>
                            K(null != e ? e.id : null),
                          onPaymentSourceAdd: () => {
                            T(b.h8.ADD_PAYMENT_STEPS);
                          },
                          planId: F.id,
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: X,
                          onInvoiceError: (e) => {
                            ei(e);
                          },
                          planGroup: B,
                          currencies: L,
                          onCurrencyChange: (e) => z(e),
                          hasOpenInvoice: null != N,
                          purchaseState: U,
                          handleClose: I,
                        }),
                  ],
                }),
                (0, i.jsx)(C.O3, {
                  children: (0, i.jsx)(g.Z, {
                    premiumSubscription: null != O ? O : null,
                    setPurchaseState: V,
                    onBack: () => null != k && T(k),
                    onNext: eo,
                    onPurchaseError: (e) => Y(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: A,
                    baseAnalyticsData: E,
                    flowStartTime: H.startTime,
                    planGroup: B,
                    purchaseTokenAuthState: W,
                    openInvoiceId: N,
                    metadata: er ? void 0 : Q,
                    backButtonEligible: o,
                    invoiceError: et,
                    disablePurchase:
                      (null == Q ? void 0 : Q.guild_id) == null && !er,
                  }),
                }),
              ],
            });
      }
    },
    931905: function (e, n, t) {
      t.d(n, {
        h: function () {
          return c;
        },
        m: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(17894),
        a = t(388032),
        l = t(753031);
      let c = (e) => {
        let {
          onConfirm: n,
          onCancel: t,
          title: c,
          subtitle: d,
          confirmCta: s,
          showOpenDiscord: u = !0,
        } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: c,
            }),
            null != d
              ? (0, i.jsx)(r.Text, {
                  className: l.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: d,
                })
              : null,
            (0, i.jsxs)("div", {
              className: l.buttonContainer,
              children: [
                u &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: () =>
                      (0, o.Z)("application_sub_mweb_success_modal"),
                    children: a.intl.string(a.t["8L5bZG"]),
                  }),
                (0, i.jsx)(r.Button, {
                  fullWidth: !0,
                  color: r.Button.Colors.PRIMARY,
                  onClick: n,
                  children: s,
                }),
                null != t &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    onClick: t,
                    children: a.intl.string(a.t.iAfxo6),
                  }),
              ],
            }),
          ],
        });
      };
      function d(e) {
        let { onConfirm: n, tierName: t, subscription: c } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: a.intl.format(a.t["wLFT6+"], { tier: t }),
            }),
            (0, i.jsx)(r.Text, {
              className: l.confirmationSubtitle,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: a.intl.format(a.t.OsAK9v, {
                timestamp: null == c ? void 0 : c.currentPeriodEnd,
              }),
            }),
            (0, i.jsxs)("div", {
              className: l.buttonContainer,
              children: [
                (0, i.jsx)(r.Button, {
                  className: l.__invalid_openDiscordButton,
                  onClick: () => (0, o.Z)("application_sub_mweb_success_modal"),
                  children: a.intl.string(a.t["8L5bZG"]),
                }),
                (0, i.jsx)(r.Button, {
                  className: l.__invalid_doneButton,
                  look: r.Button.Looks.BLANK,
                  onClick: n,
                  children: a.intl.string(a.t.nlkyw8),
                }),
              ],
            }),
          ],
        });
      }
    },
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(325767);
      function o(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: o = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    773232: function (e, n, t) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    363969: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    47648: function (e, n, t) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    452049: function (e, n, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_d0300f",
        profileEffectBackground: "profileEffectBackground_d0300f",
        profileEffect: "profileEffect_d0300f",
        avatarDecoration: "avatarDecoration_d0300f",
      };
    },
    259319: function (e, n, t) {
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    814335: function (e, n, t) {
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    608490: function (e, n, t) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    282544: function (e, n, t) {
      e.exports = { body: "body_e16e99" };
    },
    786698: function (e, n, t) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    374172: function (e, n, t) {
      e.exports = { back: "back_fd80e5" };
    },
    950304: function (e, n, t) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    926617: function (e, n, t) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    809186: function (e, n, t) {
      e.exports = {
        root: "root_df35cb",
        shaker: "shaker_df35cb",
        stepBody: "stepBody_df35cb",
        bodyText: "bodyText_df35cb",
        invoice: "invoice_df35cb",
        paymentSourceWrapper: "paymentSourceWrapper_df35cb",
        paymentSourceOptionalWarning: "paymentSourceOptionalWarning_df35cb",
        currencyWrapper: "currencyWrapper_df35cb",
        trialCheckbox: "trialCheckbox_df35cb",
        trialCheckboxLabel: "trialCheckboxLabel_df35cb",
        loader: "loader_df35cb",
        contentWrapper: "contentWrapper_df35cb",
        reviewWarningMessageContainer: "reviewWarningMessageContainer_df35cb",
        reviewWarningMessage: "reviewWarningMessage_df35cb",
        trialPriceLine: "trialPriceLine_df35cb",
        afterTrialPriceLine: "afterTrialPriceLine_df35cb",
        formTitle: "formTitle_df35cb",
        spinnerWrapper: "spinnerWrapper_df35cb",
        trialHeader: "trialHeader_df35cb",
        giftMainAnimation: "giftMainAnimation_df35cb",
        selectFreeSku: "selectFreeSku_df35cb",
      };
    },
    596054: function (e, n, t) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    215409: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_ad3708",
        invoice: "invoice_ad3708",
        paymentSourceWrapper: "paymentSourceWrapper_ad3708",
        subscriptionCostRow: "subscriptionCostRow_ad3708",
        invoiceSpinner: "invoiceSpinner_ad3708",
        errorBlock: "errorBlock_ad3708",
        fineprint: "fineprint_ad3708",
        skuHeading: "skuHeading_ad3708",
        skuHeadingText: "skuHeadingText_ad3708",
      };
    },
    975765: function (e, n, t) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    698700: function (e, n, t) {
      e.exports = { collectiblePreview: "collectiblePreview_b5260a" };
    },
    894879: function (e, n, t) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    635182: function (e, n, t) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    461405: function (e, n, t) {
      e.exports = {
        giftMainAnimation: "giftMainAnimation_d90c00",
        adjustedGiftMainAnimation: "adjustedGiftMainAnimation_d90c00",
        soundEmojiContainer: "soundEmojiContainer_d90c00",
        sound: "sound_d90c00",
        emoji: "emoji_d90c00",
        animation: "animation_d90c00",
        spinner: "spinner_d90c00",
        giftBoxOptionContainer: "giftBoxOptionContainer_d90c00",
        adjustedGiftBoxOptionContainer: "adjustedGiftBoxOptionContainer_d90c00",
      };
    },
    301023: function (e, n, t) {
      e.exports = {
        container: "container_b96147",
        emojiList: "emojiList_b96147",
        emoji: "emoji_b96147",
        textSelected: "textSelected_b96147",
        text: "text_b96147",
        emojiIcon: "emojiIcon_b96147",
        customGiftContent: "customGiftContent_b96147",
        emojiHeader: "emojiHeader_b96147",
        customGiftHeader: "customGiftHeader_b96147",
      };
    },
    803731: function (e, n, t) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    615945: function (e, n, t) {
      e.exports = {
        stepBody: "stepBody_d439ef",
        stepBodyCustomGift: "stepBodyCustomGift_d439ef",
        paddingForHalloweenBanner: "paddingForHalloweenBanner_d439ef",
        bodyColumnMiddle: "bodyColumnMiddle_d439ef",
        bodyColumnLeft: "bodyColumnLeft_d439ef",
        bodyColumnRight: "bodyColumnRight_d439ef",
        bodyText: "bodyText_d439ef",
        selectPlanDivider: "selectPlanDivider_d439ef",
        selectPlanChooseTitle: "selectPlanChooseTitle_d439ef",
        selectPlanTotalRow: "selectPlanTotalRow_d439ef",
        planSelectSeparator: "planSelectSeparator_d439ef",
        trialPlanSelectHeader: "trialPlanSelectHeader_d439ef",
        legacyPricingNotice: "legacyPricingNotice_d439ef",
        customGiftMessageWrapper: "customGiftMessageWrapper_d439ef",
        customGiftMessage: "customGiftMessage_d439ef",
        selectGiftTitle: "selectGiftTitle_d439ef",
      };
    },
    589242: function (e, n, t) {
      e.exports = {
        planOption: "planOption_bd3462",
        planOneTimeCost: "planOneTimeCost_bd3462",
        selectionBox: "selectionBox_bd3462",
        selectedPlan: "selectedPlan_bd3462",
        planOptionDisabled: "planOptionDisabled_bd3462",
        planOptionClickable: "planOptionClickable_bd3462",
        planOptionCheckbox: "planOptionCheckbox_bd3462",
        planOptionInterval: "planOptionInterval_bd3462",
        optionSelected: "optionSelected_bd3462",
        planOptionCurrentPlan: "planOptionCurrentPlan_bd3462",
        planOptionMonthsFree: "planOptionMonthsFree_bd3462",
        planOptionDiscount: "planOptionDiscount_bd3462",
        planOptionSubtextContainer: "planOptionSubtextContainer_bd3462",
        planOptionSubtext: "planOptionSubtext_bd3462",
        discountPlanOptionSubtext: "discountPlanOptionSubtext_bd3462",
        planOptionClickableContainer: "planOptionClickableContainer_bd3462",
        updatedOptionSelected: "updatedOptionSelected_bd3462",
        optionPriceSelected: "optionPriceSelected_bd3462",
      };
    },
    453476: function (e, n, t) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    311583: function (e, n, t) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    747642: function (e, n, t) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    753031: function (e, n, t) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    43371: function (e, n, t) {
      e.exports = {
        title: "title_b3a5c2",
        disabled: "disabled_b3a5c2",
        customizationSection: "customizationSection_b3a5c2",
        hideDivider: "hideDivider_b3a5c2",
        withDivider: "withDivider_b3a5c2",
        showBorder: "showBorder_b3a5c2",
        customizationSectionBackground: "customizationSectionBackground_b3a5c2",
        sectionDescription: "sectionDescription_b3a5c2",
        errorMessage: "errorMessage_b3a5c2",
        customizationSectionBorder: "customizationSectionBorder_b3a5c2",
      };
    },
    882880: function (e, n, t) {
      e.exports = {
        premiumFeatureBorder:
          "premiumFeatureBorder_c6d722 featureBorder_c6d722",
        limitedFeatureBorder:
          "limitedFeatureBorder_c6d722 featureBorder_c6d722",
        background: "background_c6d722",
        premiumBackground: "premiumBackground_c6d722 background_c6d722",
        limitedBackground: "limitedBackground_c6d722 background_c6d722",
      };
    },
    677635: function (e, n, t) {
      e.exports = {
        container: "container_bb37e1",
        soundIcon: "soundIcon_bb37e1",
        textSelected: "textSelected_bb37e1",
        sound: "sound_bb37e1",
        text: "text_bb37e1",
        customGiftHeader: "customGiftHeader_bb37e1",
        searchAndSound: "searchAndSound_bb37e1",
      };
    },
  },
]);
//# sourceMappingURL=367c9023dac592b3dd64.js.map
