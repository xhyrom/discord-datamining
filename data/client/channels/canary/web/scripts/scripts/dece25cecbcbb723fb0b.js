"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66774"],
  {
    982240: function (e) {
      e.exports = "/assets/44172e1d16cf024772fb.svg";
    },
    533854: function (e) {
      e.exports = "/assets/2c046deb08bbe6653203.svg";
    },
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        a = n(772848),
        l = n(716886);
      let c = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(l.button, n, { [l.open]: t, [l.withHighlight]: r }),
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
    700582: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        o = n(481060),
        a = n(372900);
      t.Z = r.memo(function (e) {
        var t, n, l, c;
        let {
            user: s,
            size: d = o.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          m = r.useContext(a.Z);
        return (0, i.jsx)(o.Avatar, {
          src:
            ((t = s),
            (n = (0, o.getAvatarSize)(d)),
            (l = u),
            (c = m),
            t.getAvatarURL(c, n, l)),
          size: d,
          "aria-label": f ? void 0 : s.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    17894: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = n(525654),
        r = n.n(i),
        o = n(39612),
        a = n(271579),
        l = n(756647),
        c = n(232567),
        s = n(703656),
        d = n(314897),
        u = n(896797),
        f = n(626135),
        p = n(954824),
        m = n(981631);
      async function b(e) {
        var t, n;
        let i = null === (t = r().os) || void 0 === t ? void 0 : t.family;
        if ("Android" === i || "iOS" === i) {
          let t =
              null !== (n = d.default.getFingerprint()) && void 0 !== n
                ? n
                : d.default.getId(),
            i = (0, a.WS)();
          if (null == t && d.default.isAuthenticated())
            try {
              await (0, c.k)(), (t = d.default.getId());
            } catch {}
          return (0, a.ZP)((0, o.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i,
          });
        }
        return "discord://";
      }
      async function _(e) {
        let t = await b(e),
          n = (0, a.zS)(t);
        null != n &&
          f.default.track(m.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
          }),
          p.Z.launch(t, (e) => {
            !e && (0, s.dL)(u.Z.fallbackRoute);
          });
      }
    },
    752053: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var i,
        r,
        o = n(200651);
      n(192379);
      var a = n(442837),
        l = n(780384),
        c = n(481060),
        s = n(410030),
        d = n(594174),
        u = n(388032),
        f = n(733983),
        p = n(982240),
        m = n(533854);
      ((i = r || (r = {}))[(i.SHOP_PAGE = 0)] = "SHOP_PAGE"),
        (i[(i.GIFT_MODAL = 1)] = "GIFT_MODAL");
      t.Z = (e) => {
        let { onRetry: t, errorOrigin: n, errorMessage: i } = e,
          r = (0, s.ZP)(),
          b = (0, a.e7)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (
              (null == e ? void 0 : e.isStaff()) ||
              (null == e ? void 0 : e.isStaffPersonal())
            );
          }),
          _ = 1 === n ? f.giftModalContainer : f.shopPageContainer,
          x =
            1 === n ? u.intl.string(u.t["+2QBZW"]) : u.intl.string(u.t.LuhKs7);
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
              onClick: t,
              children: u.intl.string(u.t["+hivLS"]),
            }),
          ],
        });
      };
    },
    48931: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(267097),
        a = n(752053),
        l = n(476090);
      function c(e) {
        let { onClose: t } = e,
          { refreshCategories: n } = (0, o.Z)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.ModalHeader, {
              className: l.header,
              children: (0, i.jsx)(r.ModalCloseButton, {
                className: l.closeButton,
                onClick: t,
              }),
            }),
            (0, i.jsx)(a.Z, { onRetry: n, errorOrigin: a.i.GIFT_MODAL }),
          ],
        });
      }
    },
    713316: function (e, t, n) {
      n.d(t, {
        w: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(512722),
        o = n.n(r),
        a = n(481060),
        l = n(563132),
        c = n(698708),
        s = n(844068),
        d = n(614277),
        u = n(388032),
        f = n(985192);
      function p(e) {
        let { handleClose: t } = e,
          {
            skusById: n,
            selectedSkuId: r,
            application: p,
          } = (0, l.usePaymentContext)();
        o()(null != r, "Expected selectedSkuId"),
          o()(null != p, "Expected application");
        let m = n[r];
        o()(null != m, "Expected sku");
        let b = u.intl.formatToPlainString(u.t.wK0IbG, {
          applicationName: p.name,
          itemName: m.name,
        });
        return (0, i.jsxs)(d.C3, {
          children: [
            (0, i.jsx)(s.Z, {}),
            (0, i.jsx)(c.Z, {}),
            (0, i.jsxs)("div", {
              className: f.confirmation,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xxl/bold",
                  className: f.confirmationHeader,
                  children: "Success!",
                }),
                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: b }),
                (0, i.jsx)("div", { className: f.divider }),
                (0, i.jsx)(a.Button, {
                  onClick: t,
                  children: u.intl.string(u.t.cpT0Cg),
                }),
              ],
            }),
          ],
        });
      }
    },
    961830: function (e, t, n) {
      n.d(t, {
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
      var i = n(200651);
      n(192379);
      var r = n(853872),
        o = n(409813),
        a = n(276442),
        l = n(793541),
        c = n(380898),
        s = n(713316),
        d = n(710094),
        u = n(865921),
        f = n(388032);
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
          renderStep: (e) => (0, i.jsx)(d.l, { ...e }),
          options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHh) },
        },
        g = { key: o.h8.CONFIRM, renderStep: (e) => (0, i.jsx)(s.w, { ...e }) },
        h = [b, _];
    },
    865921: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(399606),
        a = n(89057),
        l = n(597688),
        c = n(987209),
        s = n(563132),
        d = n(409813),
        u = n(48931),
        f = n(456251),
        p = n(981631);
      function m(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            blockedPayments: m,
            hasFetchedSkus: b,
            paymentSources: _,
            hasFetchedPaymentSources: x,
            application: g,
            skusById: h,
            selectedSkuId: C,
          } = (0, s.usePaymentContext)(),
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
              t(d.h8.GIFT_CUSTOMIZATION);
              return;
            }
            if (0 === Object.keys(_).length) {
              t(d.h8.ADD_PAYMENT_STEPS);
              return;
            }
            t(d.h8.REVIEW);
          }, [S, m, t, _, v, h, C]),
          S)
        )
          return (0, i.jsx)(f.Z, {});
        if (m) return (0, i.jsx)(a.Vq, { onClose: n });
        if (null != T) return (0, i.jsx)(u.Z, { onClose: n });
        return null;
      }
    },
    721165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(789020);
      var i = n(200651),
        r = n(192379),
        o = n(442837),
        a = n(131388),
        l = n(171246),
        c = n(689011),
        s = n(931905),
        d = n(430824),
        u = n(563132),
        f = n(409813),
        p = n(586585),
        m = n(614277),
        b = n(750143),
        _ = n(388032);
      function x(e) {
        let { handleStepChange: t, handleClose: n } = e,
          {
            subscriptionMetadataRequest: x,
            selectedSku: g,
            selectedStoreListing: h,
            application: C,
          } = (0, u.usePaymentContext)(),
          v = (0, a.Z)(b.i),
          S = (0, o.e7)([d.Z], () =>
            d.Z.getGuild(null == x ? void 0 : x.guild_id),
          ),
          j = r.useCallback(() => t(f.h8.REVIEW), [t]);
        if (null == g) return null;
        let k = (0, l.KW)(g.flags);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(m.C3, {
              children: v
                ? (0, i.jsx)(s.h, {
                    confirmCta: _.intl.string(_.t.PBHFSk),
                    onConfirm: j,
                    onCancel: n,
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
                  onBack: n,
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
    519801: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(789020);
      var i = n(200651),
        r = n(192379),
        o = n(131388),
        a = n(607070),
        l = n(745510),
        c = n(171246),
        s = n(689011),
        d = n(931905),
        u = n(563132),
        f = n(409813),
        p = n(586585),
        m = n(456251),
        b = n(614277),
        _ = n(698708),
        x = n(750143),
        g = n(388032);
      function h(e) {
        var t, n;
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
            selectedStoreListing: B,
            application: P,
          } = (0, u.usePaymentContext)(),
          N = (0, o.Z)(x.i),
          { createMultipleConfettiAt: E } = r.useContext(l.h),
          A =
            null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : "",
          I = () => {
            S(), null == j || j();
          },
          O = T === f.h8.CONFIRM,
          Z = (0, c.KW)(
            null !== (n = null == y ? void 0 : y.flags) && void 0 !== n ? n : 0,
          ),
          M =
            null != B && B.benefits.length > 0
              ? g.intl.formatToPlainString(g.t["+IQQVF"], {
                  benefitCount: B.benefits.length,
                })
              : null;
        return (
          v
            ? N
              ? (h = (0, i.jsx)(d.h, {
                  title: g.intl.format(g.t.ea6tZm, { tierName: A }),
                  subtitle:
                    null != B && B.benefits.length > 0
                      ? g.intl.formatToPlainString(g.t.HNepfn, { benefits: M })
                      : null,
                  onConfirm: I,
                  confirmCta: g.intl.string(g.t.nlkyw8),
                }))
              : ((h =
                  null != B && null != P
                    ? (0, i.jsx)(s.Oc, {
                        icon: B.thumbnail,
                        storeListingBenefits: B.benefits,
                        application: P,
                        title: g.intl.format(g.t["Q+qktb"], { tier: A }),
                        subtitle: g.intl.string(g.t.ECKxXV),
                        description: Z
                          ? g.intl.format(g.t.MAtQk5, {
                              applicationName: null == P ? void 0 : P.name,
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
                ? (0, i.jsx)(d.m, {
                    tierName: A,
                    onConfirm: I,
                    subscription: k,
                  })
                : (0, i.jsx)(s.xe, {
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
    759386: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getApplicationPaymentSteps: function () {
            return f;
          },
        }),
        n(47120);
      var i = n(200651);
      n(192379);
      var r = n(409813),
        o = n(276442),
        a = n(961830),
        l = n(721165),
        c = n(519801),
        s = n(589771),
        d = n(883419),
        u = n(388032);
      function f(e) {
        let { guildId: t, showBenefitsFirst: n } = e;
        return [
          {
            key: null,
            renderStep: (e) =>
              (0, i.jsx)(s.Z, {
                initialStep: n ? r.h8.BENEFITS : r.h8.REVIEW,
                guildId: t,
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
              (0, i.jsx)(d.Z, {
                backButtonEligible: !!n || void 0,
                prevStep: n ? r.h8.BENEFITS : void 0,
                ...e,
              }),
            options: {
              renderHeader: !0,
              useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh),
            },
          },
          {
            key: r.h8.CONFIRM,
            renderStep: (e) => (0, i.jsx)(c.Z, { showBenefits: !n, ...e }),
          },
        ];
      }
    },
    589771: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(89057),
        a = n(509545),
        l = n(74538),
        c = n(987209),
        s = n(563132),
        d = n(456251);
      function u(e) {
        let {
            initialStep: t,
            initialPlanId: n,
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
          } = (0, s.usePaymentContext)(),
          { isGift: k } = (0, c.wD)(),
          [T, y] = r.useState(!_ || !x || g);
        return (r.useEffect(() => {
          y(!_ || !x || g);
        }, [g, x, _]),
        r.useEffect(() => {
          null != u && j({ guild_id: u });
        }, [u, j]),
        r.useEffect(() => {
          v(n);
          let e = null != n ? a.Z.get(n) : null;
          if (!T && !m)
            f((t) => {
              let n = null != e ? (0, l.aS)(e.id, !1, k, S) : void 0;
              return {
                ...t,
                subscription_plan_id: null == e ? void 0 : e.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == e ? void 0 : e.price,
                currency: S.currency,
              };
            }),
              null != e && (C(null == e ? void 0 : e.skuId), b(t));
        }, [m, n, k, T, S, h, f, v, C, b, t]),
        T)
          ? (0, i.jsx)(d.Z, {})
          : m
            ? (0, i.jsx)(o.Vq, { onClose: p })
            : null;
      }
    },
    883419: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(47120),
        n(789020);
      var i = n(200651),
        r = n(192379),
        o = n(512722),
        a = n.n(o),
        l = n(442837),
        c = n(481060),
        s = n(330726),
        d = n(716534),
        u = n(664891),
        f = n(171246),
        p = n(430824),
        m = n(563132),
        b = n(409813),
        _ = n(45572),
        x = n(51499),
        g = n(678334),
        h = n(456251),
        C = n(614277),
        v = n(698708),
        S = n(388032),
        j = n(894290);
      function k(e) {
        var t, n;
        let {
            backButtonEligible: o,
            prevStep: k,
            handleStepChange: T,
            trialFooterMessageOverride: y,
            reviewWarningMessage: B,
            planGroup: P,
            openInvoiceId: N,
            analyticsData: E,
            analyticsLocation: A,
            handleClose: I,
          } = e,
          {
            activeSubscription: O,
            application: Z,
            setUpdatedSubscription: M,
            contextMetadata: L,
            currencies: H,
            paymentSources: w,
            priceOptions: D,
            purchaseError: G,
            purchaseTokenAuthState: W,
            selectedPlan: R,
            selectedSku: F,
            setCurrency: z,
            setPaymentSourceId: K,
            setPurchaseState: U,
            setPurchaseError: V,
            purchaseState: Y,
            subscriptionMetadataRequest: Q,
            setHasAcceptedTerms: q,
          } = (0, m.usePaymentContext)();
        a()(null != R, "Expected plan to be selected");
        let J = r.useRef(null),
          [X, $] = (0, s.Z)(!1, 500),
          ee = null == Q ? void 0 : Q.guild_id,
          et = (0, l.e7)([p.Z], () => p.Z.getGuild(ee), [ee]),
          [en, ei] = r.useState(null),
          er = (0, f.KW)(
            null !== (t = null == F ? void 0 : F.flags) && void 0 !== t ? t : 0,
          );
        r.useEffect(() => {
          null != G &&
            null != J.current &&
            J.current.scrollIntoView({ behavior: "smooth" });
        }, [G]);
        let eo = r.useCallback(
            (e) => {
              M(e), T(b.h8.CONFIRM);
            },
            [T, M],
          ),
          ea = r.useRef(null);
        return Y === _.A.PURCHASING
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
                                    (n = null == et ? void 0 : et.name) &&
                                  void 0 !== n
                                    ? n
                                    : S.intl.string(S.t.dtwqPT),
                              }),
                            ],
                          }),
                        ],
                      }),
                    null == O
                      ? (0, i.jsx)(d.Z, {
                          selectedPlanId: R.id,
                          paymentSources: w,
                          onPaymentSourceChange: (e) =>
                            K(null != e ? e.id : null),
                          priceOptions: D,
                          currencies: H,
                          onCurrencyChange: (e) => z(e),
                          handlePaymentSourceAdd: () =>
                            T(b.h8.ADD_PAYMENT_STEPS),
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: X,
                          trialFooterMessageOverride: y,
                          reviewWarningMessage: B,
                          metadata: er ? void 0 : Q,
                          purchaseState: Y,
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
                          planId: R.id,
                          setHasAcceptedTerms: q,
                          legalTermsNodeRef: ea,
                          hasLegalTermsFlash: X,
                          onInvoiceError: (e) => {
                            ei(e);
                          },
                          planGroup: P,
                          currencies: H,
                          onCurrencyChange: (e) => z(e),
                          hasOpenInvoice: null != N,
                          purchaseState: Y,
                          handleClose: I,
                        }),
                  ],
                }),
                (0, i.jsx)(C.O3, {
                  children: (0, i.jsx)(g.Z, {
                    premiumSubscription: null != O ? O : null,
                    setPurchaseState: U,
                    onBack: () => null != k && T(k),
                    onNext: eo,
                    onPurchaseError: (e) => V(e),
                    legalTermsNodeRef: ea,
                    flashLegalTerms: () => $(!0),
                    analyticsLocation: A,
                    baseAnalyticsData: E,
                    flowStartTime: L.startTime,
                    planGroup: P,
                    purchaseTokenAuthState: W,
                    openInvoiceId: N,
                    metadata: er ? void 0 : Q,
                    backButtonEligible: o,
                    invoiceError: en,
                    disablePurchase:
                      (null == Q ? void 0 : Q.guild_id) == null && !er,
                  }),
                }),
              ],
            });
      }
    },
    931905: function (e, t, n) {
      n.d(t, {
        h: function () {
          return c;
        },
        m: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(17894),
        a = n(388032),
        l = n(177163);
      let c = (e) => {
        let {
          onConfirm: t,
          onCancel: n,
          title: c,
          subtitle: s,
          confirmCta: d,
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
            null != s
              ? (0, i.jsx)(r.Text, {
                  className: l.confirmationSubtitle,
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: s,
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
                  onClick: t,
                  children: d,
                }),
                null != n &&
                  (0, i.jsx)(r.Button, {
                    fullWidth: !0,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    onClick: n,
                    children: a.intl.string(a.t.iAfxo6),
                  }),
              ],
            }),
          ],
        });
      };
      function s(e) {
        let { onConfirm: t, tierName: n, subscription: c } = e;
        return (0, i.jsxs)("div", {
          className: l.confirmationContainer,
          children: [
            (0, i.jsx)(r.Heading, {
              className: l.confirmationHeader,
              variant: "heading-lg/extrabold",
              children: a.intl.format(a.t["wLFT6+"], { tier: n }),
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
                  onClick: t,
                  children: a.intl.string(a.t.nlkyw8),
                }),
              ],
            }),
          ],
        });
      }
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(331595);
      function o(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: o = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    946179: function (e, t, n) {
      e.exports = { awaitingWrapper: "awaitingWrapper_a4ec0f" };
    },
    716886: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    243937: function (e, t, n) {
      e.exports = {
        container: "container_e4d3f1",
        iconBackground: "iconBackground_e4d3f1",
        link: "link_e4d3f1",
      };
    },
    28602: function (e, t, n) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_d0300f",
        profileEffectBackground: "profileEffectBackground_d0300f",
        profileEffect: "profileEffect_d0300f",
        avatarDecoration: "avatarDecoration_d0300f",
      };
    },
    733983: function (e, t, n) {
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    476090: function (e, t, n) {
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    559470: function (e, t, n) {
      e.exports = {
        awaitingAuthenticationStep: "awaitingAuthenticationStep_f10fc5",
      };
    },
    641894: function (e, t, n) {
      e.exports = { body: "body_e16e99" };
    },
    985192: function (e, t, n) {
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    590826: function (e, t, n) {
      e.exports = { back: "back_fd80e5" };
    },
    960346: function (e, t, n) {
      e.exports = { spinner: "spinner_b0f29a" };
    },
    710749: function (e, t, n) {
      e.exports = { paymentNote: "paymentNote_d791fd" };
    },
    401615: function (e, t, n) {
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
    312756: function (e, t, n) {
      e.exports = {
        notification: "notification_b45ae8",
        icon: "icon_b45ae8",
        text: "text_b45ae8",
      };
    },
    894290: function (e, t, n) {
      e.exports = {
        guildPickerContainer: "guildPickerContainer_e72e2e",
        breadcrumbs: "breadcrumbs_e72e2e",
        userSubscriptionDetailsContainer:
          "userSubscriptionDetailsContainer_e72e2e",
        guildNameContainer: "guildNameContainer_e72e2e",
      };
    },
    492558: function (e, t, n) {
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
    840614: function (e, t, n) {
      e.exports = {
        profileEffectContainer: "profileEffectContainer_faa800",
        profileEffectBackground: "profileEffectBackground_faa800",
        giftMainAnimationWrapper: "giftMainAnimationWrapper_faa800",
        avatar: "avatar_faa800",
      };
    },
    697459: function (e, t, n) {
      e.exports = { collectiblePreview: "collectiblePreview_b5260a" };
    },
    215302: function (e, t, n) {
      e.exports = {
        noticeRoot: "noticeRoot_f5d98f",
        iconContainer: "iconContainer_f5d98f",
        infoIcon: "infoIcon_f5d98f",
        text: "text_f5d98f",
      };
    },
    991509: function (e, t, n) {
      e.exports = {
        body: "body_e76e48",
        textArea: "textArea_e76e48",
        editorTextArea: "editorTextArea_e76e48",
      };
    },
    853745: function (e, t, n) {
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
    396139: function (e, t, n) {
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
        categoryList: "categoryList_b96147",
      };
    },
    325379: function (e, t, n) {
      e.exports = {
        customGiftBox: "customGiftBox_c4afc7",
        customGiftBoxHighlighted: "customGiftBoxHighlighted_c4afc7",
        button: "button_c4afc7",
      };
    },
    796166: function (e, t, n) {
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
        equalDistantBackButton: "equalDistantBackButton_d439ef",
        compactSendGiftToUser: "compactSendGiftToUser_d439ef",
        compactCustomGiftMessageWrapper:
          "compactCustomGiftMessageWrapper_d439ef",
        compactSelectGiftTitle: "compactSelectGiftTitle_d439ef",
      };
    },
    559805: function (e, t, n) {
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
    106486: function (e, t, n) {
      e.exports = {
        giftRecipientInfo: "giftRecipientInfo_cc6d95",
        content: "content_cc6d95",
        giftRecipientName: "giftRecipientName_cc6d95",
        giftRecipientTag: "giftRecipientTag_cc6d95",
      };
    },
    585488: function (e, t, n) {
      e.exports = { renewalInvoiceDate: "renewalInvoiceDate_ff918e" };
    },
    26687: function (e, t, n) {
      e.exports = {
        bannerContainer: "bannerContainer_dffbd4",
        giftIcon: "giftIcon_dffbd4",
        textContainer: "textContainer_dffbd4",
        textHeader: "textHeader_dffbd4",
        textHeaderWithGiftIcon: "textHeaderWithGiftIcon_dffbd4",
        banner: "banner_dffbd4",
      };
    },
    177163: function (e, t, n) {
      e.exports = {
        confirmationContainer: "confirmationContainer_e6ccba",
        confirmationHeader: "confirmationHeader_e6ccba",
        confirmationSubtitle: "confirmationSubtitle_e6ccba",
        buttonContainer: "buttonContainer_e6ccba",
      };
    },
    789906: function (e, t, n) {
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
    59437: function (e, t, n) {
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
    844782: function (e, t, n) {
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
//# sourceMappingURL=dece25cecbcbb723fb0b.js.map
