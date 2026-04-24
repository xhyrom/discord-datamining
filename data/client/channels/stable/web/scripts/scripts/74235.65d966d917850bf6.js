"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74235"],
  {
    853513(e, t, n) {
      n.r(t), n.d(t, { default: () => s, messagesLoader: () => r });
      let { createLoader: i } = n(919523),
        r = i(
          {
            bg: () => n.e("29048").then(n.t.bind(n, 975531, 19)),
            cs: () => n.e("96143").then(n.t.bind(n, 897714, 19)),
            da: () => n.e("216").then(n.t.bind(n, 84811, 19)),
            de: () => n.e("12748").then(n.t.bind(n, 209671, 19)),
            el: () => n.e("5298").then(n.t.bind(n, 133001, 19)),
            "en-GB": () => n.e("64322").then(n.t.bind(n, 213689, 19)),
            "es-419": () => n.e("75500").then(n.t.bind(n, 20775, 19)),
            "es-ES": () => n.e("88018").then(n.t.bind(n, 748265, 19)),
            fi: () => n.e("90466").then(n.t.bind(n, 934521, 19)),
            fr: () => n.e("71849").then(n.t.bind(n, 982256, 19)),
            hi: () => n.e("57156").then(n.t.bind(n, 663247, 19)),
            hr: () => n.e("41055").then(n.t.bind(n, 276258, 19)),
            hu: () => n.e("47624").then(n.t.bind(n, 488475, 19)),
            it: () => n.e("69238").then(n.t.bind(n, 313269, 19)),
            ja: () => n.e("78574").then(n.t.bind(n, 194781, 19)),
            ko: () => n.e("75403").then(n.t.bind(n, 777094, 19)),
            lt: () => n.e("909").then(n.t.bind(n, 253244, 19)),
            nl: () => n.e("37911").then(n.t.bind(n, 579146, 19)),
            no: () => n.e("65652").then(n.t.bind(n, 91743, 19)),
            pl: () => n.e("68289").then(n.t.bind(n, 842904, 19)),
            "pt-BR": () => n.e("14754").then(n.t.bind(n, 854937, 19)),
            ro: () => n.e("94400").then(n.t.bind(n, 33667, 19)),
            ru: () => n.e("36962").then(n.t.bind(n, 568889, 19)),
            "sv-SE": () => n.e("12875").then(n.t.bind(n, 154118, 19)),
            th: () => n.e("6281").then(n.t.bind(n, 399376, 19)),
            tr: () => n.e("10363").then(n.t.bind(n, 495702, 19)),
            uk: () => n.e("46693").then(n.t.bind(n, 557508, 19)),
            vi: () => n.e("61778").then(n.t.bind(n, 415913, 19)),
            "zh-CN": () => n.e("28247").then(n.t.bind(n, 729578, 19)),
            "zh-TW": () => n.e("1211").then(n.t.bind(n, 9878, 19)),
            "en-US": () => n.e("35447").then(n.bind(n, 507402)),
          },
          "en-US",
        ),
        { makeMessagesProxy: l } = n(919523),
        s = l(r);
    },
    158032(e, t, n) {
      n.d(t, {
        B1: () => c,
        ET: () => m,
        Ir: () => d,
        U: () => p,
        r6: () => h,
        uK: () => C,
      });
      var i = n(284009),
        r = n.n(i),
        l = n(228366),
        s = n(323082),
        a = n(501957),
        u = n(927578),
        o = n(652215);
      async function c(e) {
        let {
          planId: t,
          currency: n,
          paymentSource: i,
          trialId: r,
          code: a,
          metadata: u,
          referralCode: o,
          loadId: c,
          expectedInvoicePrice: d,
          expectedRenewalPrice: p,
        } = e;
        l.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_START" });
        try {
          let e = await s.Ky({
            items: [{ planId: t, quantity: 1 }],
            paymentSource: i,
            trialId: r,
            code: a,
            currency: n,
            metadata: u,
            referralCode: o,
            loadId: c,
            expectedInvoicePrice: d,
            expectedRenewalPrice: p,
          });
          return (
            null != e.subscription &&
              l.h.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                subscription: e.subscription,
              }),
            e
          );
        } catch (e) {
          throw (
            (l.h.dispatch({ type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", error: e }),
            e)
          );
        }
      }
      async function d(e, t, n, i, c, d) {
        try {
          let p = (0, u.EL)(e);
          r()(p, "Expected existing premium plan");
          let h = (0, u.GX)(e, p.planId),
            C = void 0 !== n ? n.toLowerCase() : e.currency;
          (0, a.U)(e, t, d),
            await s.nV(
              e,
              { status: o.Dmq.ACTIVE, paymentSource: i, items: h, currency: n },
              { amount: 0, currency: C },
              (0, u.UC)(h, C, i?.id),
              t,
              c,
              d,
            ),
            l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (e) {
          throw (
            (l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e)
          );
        }
      }
      async function p(e, t, n) {
        try {
          await s.nV(
            e,
            { status: o.Dmq.ACTIVE },
            { amount: 0, currency: e.currency },
            (0, u.UC)(e.items, e.currency, e.paymentSourceId),
            t,
            n,
          );
        } catch (e) {
          throw e;
        }
      }
      async function h(e, t, n, i, r) {
        try {
          await s.r6(e, t, n, i, r),
            l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (e) {
          throw (
            (l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e)
          );
        }
      }
      async function C(e, t, n, i, r, a) {
        try {
          await s.uK(e, t, n, i, r, a),
            l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_SUCCESS" });
        } catch (e) {
          throw (
            (l.h.dispatch({ type: "PREMIUM_PAYMENT_UPDATE_FAIL", error: e }), e)
          );
        }
      }
      function m() {
        l.h.dispatch({ type: "PREMIUM_PAYMENT_ERROR_CLEAR" });
      }
    },
    686757(e, t, n) {
      n.d(t, {
        SD: () => d,
        Vm: () => u,
        eE: () => c,
        g$: () => p,
        u5: () => o,
        uJ: () => h,
      });
      var i = n(265690),
        r = n(110259),
        l = n(121894);
      let s = Object.freeze({ debugTrackedData: null, impressions: [] }),
        a = (0, i.h)((e) => s),
        u = (e) => {
          (0, l.r)(() => {
            a.setState((t) => ({ impressions: [...t.impressions, e] }));
          });
        },
        o = (e) => {
          (0, l.r)(() => {
            a.setState((t) => ({
              impressions: t.impressions.filter(
                (t) => t.sequenceId !== e.sequenceId,
              ),
            }));
          });
        },
        c = (e, t) => {
          (0, l.r)(() => {
            a.setState(() => ({ debugTrackedData: { name: e, ...t } }));
          });
        },
        d = a;
      function p() {
        let e = {};
        return (
          a.getState().impressions.forEach((t) => {
            t.type === r.ImpressionTypes.PAGE
              ? (e.page = t.name)
              : (e.section = t.name);
          }),
          e
        );
      }
      function h() {
        return a.getState().impressions;
      }
    },
    427675(e, t, n) {
      n.d(t, {
        Hf: () => p,
        Hu: () => h,
        RR: () => d,
        S3: () => c,
        gU: () => o,
      });
      var i = n(64700),
        r = n(702841),
        l = n(156312),
        s = n(79387),
        a = n(67480),
        u = n(94420);
      function o() {
        let { defaultFetchableSkuIds: e } = (0, l.P5)();
        return (0, r.cf)(
          [a.A],
          () => {
            let t = {};
            for (let n of e) t[n] = a.A.get(n) ?? void 0;
            return t;
          },
          [e],
        );
      }
      function c() {
        let e = (0, u.t4)((e) => e.selectedSkuId),
          t = o();
        return null != e ? t[e] : void 0;
      }
      function d() {
        let { defaultFetchableSkuIds: e } = (0, l.P5)();
        return (0, r.cf)(
          [s.A],
          () => {
            let t = {};
            for (let n of e) t[n] = s.A.getPricesForSku(n) ?? void 0;
            return t;
          },
          [e],
        );
      }
      function p() {
        let e = (0, u.t4)((e) => e.selectedSkuId),
          { paymentSourceId: t } = (0, l.P5)(),
          n = d();
        return i.useMemo(() => {
          if (null == e) return null;
          let i = n[e];
          return null == i ? null : (i[t ?? s.B] ?? i[s.B]);
        }, [e, t, n]);
      }
      function h() {
        let { defaultFetchableSkuIds: e } = (0, l.P5)();
        return (0, r.bG)(
          [a.A],
          () => e.every((e) => !a.A.isFetching(e) && null != a.A.get(e)),
          [e],
        );
      }
    },
    169797(e, t, n) {
      n.d(t, { Jg: () => P, lo: () => A, oH: () => b, s3: () => f });
      var i = n(627968),
        r = n(64700),
        l = n(503698),
        s = n.n(l),
        a = n(20742),
        u = n(364840),
        o = n(331322),
        c = n(224640),
        d = n(430993),
        p = n(500380),
        h = n(518977),
        C = n(683433),
        m = n(981036),
        I = n(725836),
        E = n(857414);
      function f(e) {
        let {
            gradientColor: t,
            title: n,
            headerBadgeText: l,
            headerBadgeIcon: s,
            countryCode: u,
            ...o
          } = e,
          { checkoutHeaderConfigs: c } = (0, I.ck)(),
          d = r.useCallback(
            () =>
              null == u
                ? null
                : (0, i.jsx)("img", {
                    alt: "",
                    className: E.bI,
                    src: (0, p.t)(u),
                  }),
            [u],
          ),
          C = r.useMemo(() => {
            if (null != l || null != c.headerBadgeText)
              return {
                icon: c.headerBadgeIcon ?? s,
                type: { text: c.headerBadgeText ?? l ?? "" },
                variant: "expressive",
              };
          }, [l, s, c.headerBadgeText, c.headerBadgeIcon]);
        return (0, i.jsx)(a.rQ, {
          ...o,
          badge: C,
          badgePosition: "end",
          gradientColor: t,
          titleTextVariant: "heading-lg/semibold",
          alignCenter: !1,
          title: n,
          subtitle:
            null != u
              ? { text: (0, h.j7)((0, h.ni)(u)), leadingIcon: d }
              : void 0,
        });
      }
      let _ = { top: 16, bottom: 8 };
      function A(e) {
        let { onBackClick: t, primaryButtonProps: n, portalClassName: r } = e,
          { variant: l } = n,
          { setCheckoutFooterContentNode: a } = (0, I.ck)();
        return (0, i.jsxs)(u.j, {
          children: [
            (0, i.jsx)("div", { ref: a, className: s()(E.K4, r) }),
            (0, i.jsxs)(o.B, {
              direction: "horizontal",
              align: "center",
              justify: null != t ? "space-between" : "end",
              fullWidth: !0,
              padding: _,
              children: [
                null != t ? (0, i.jsx)(C.A, { onClick: t }) : null,
                (0, i.jsx)(m.p, { ...n, variant: l ?? "active" }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        let {
          children: t,
          size: n = "md",
          maxHeight: r = "viewport",
          ...l
        } = e;
        return (0, i.jsx)(c.d, { size: n, ...l, maxHeight: r, children: t });
      }
      function b(e) {
        let {
          title: t,
          gradientColor: n = "purple",
          countryCode: r,
          headerBadgeText: l,
          headerBadgeIcon: s,
          onBackClick: a,
          primaryButtonProps: u,
          children: o,
          ...p
        } = e;
        return (0, i.jsx)(I.e0, {
          children: (0, i.jsxs)(c.d, {
            ...p,
            children: [
              (0, i.jsx)(f, {
                gradientColor: n,
                title: t,
                countryCode: r,
                headerBadgeText: l,
                headerBadgeIcon: s,
              }),
              (0, i.jsx)(d.c, { children: o }),
              (0, i.jsx)(A, { onBackClick: a, primaryButtonProps: u }),
            ],
          }),
        });
      }
    },
    871162(e, t, n) {
      n.d(t, { l: () => i });
      let i = (0, n(64700).createContext)({ overrideSettings: !1 });
    },
    357669(e, t, n) {
      n.d(t, { b: () => u });
      var i = n(954571),
        r = n(840251),
        l = n(688151),
        s = n(652215);
      let a = new r.E([], l.$G.PAYMENT_FLOW_STARTED, {
        location: "payment flow started",
      });
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i.default.track(s.HAw.PAYMENT_FLOW_STARTED, e, t), a.trigger();
      }
    },
    987144(e, t, n) {
      n.d(t, { g: () => I }), n(321073);
      var i = n(627968);
      n(64700);
      var r = n(231723),
        l = n(192308),
        s = n(820739),
        a = n(73825),
        u = n(323082),
        o = n(287809),
        c = n(178368),
        d = n(97352),
        p = n(473145),
        h = n(212637),
        C = n(652215);
      let m = "apply-guild-boost-modal";
      async function I(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: I,
            analyticsSourceLocation: E,
            numberOfBoostsToAdd: f,
            onClose: _,
            onLoading: A,
            closeLayer: P,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: y,
            guild: S,
            handleSubscribeModalClose: M,
            disablePremiumUpsell: T,
            inPopout: R,
            applicationId: g,
            intent: v,
          } = e,
          N = R ? r.KX : r.SY,
          U = o.default.getCurrentUser();
        if (null == U) return;
        if (!U.verified)
          return void (0, l.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                n.e("12206"),
                n.e("90406"),
              ]).then(n.bind(n, 661925));
              return (t) => {
                let { onClose: n, ...r } = t;
                return (0, i.jsx)(e, { ...r, onClose: n });
              };
            },
            { contextKey: N },
          );
        let x = [];
        d.A.isLoadedForPremiumSKUs() || x.push((0, a.zS)()),
          c.A.hasFetched || (x.push(u.hP()), x.push((0, s.CD)())),
          x.length > 0 && (A?.(!0), await Promise.allSettled(x), A?.(!1));
        let D = (0, p.D$)(c.A.boostSlots),
          L = D.length,
          w = (e) => {
            _?.(), M?.(e);
          };
        if (L > 0 && (null == f || L >= f)) {
          let e;
          1 === L ? (e = D.slice(0, 1)) : null != f && (e = D.slice(0, f)),
            await (0, l.openModalLazy)(
              async () => {
                let { default: t } = await Promise.all([
                  n.e("62175"),
                  n.e("96817"),
                  n.e("38249"),
                  n.e("24363"),
                ]).then(n.bind(n, 724624));
                return (n) => {
                  let { onClose: r, ...l } = n;
                  return (0, i.jsx)(t, {
                    ...l,
                    onClose: (e) => {
                      r(), w(e);
                    },
                    selectedGuild: S,
                    locationSection: C.liQ.PREMIUM_GUILD_USER_MODAL,
                    guildBoostSlots: e,
                    intent: v,
                  });
                };
              },
              {
                modalKey: m,
                onCloseRequest: () => {
                  (0, l.closeModal)(m), w(!1);
                },
                contextKey: N,
              },
            );
        } else
          (0, h.A)({
            analyticsLocations: t,
            analyticsLocation: I,
            analyticsSourceLocation: E,
            guildId: S.id,
            closeLayer: () => {
              _?.(), P?.();
            },
            totalNumberOfSlotsToAssign: f ?? 1,
            onCloseModal: w,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: y,
            inPopout: R,
            applicationId: g,
            intent: v,
          });
      }
    },
    361158(e, t, n) {
      n.d(t, { B8: () => R, dF: () => g, up: () => T, xr: () => b });
      var i = n(627968),
        r = n(64700),
        l = n(296489),
        s = n.n(l),
        a = n(580956),
        u = n(451989),
        o = n(353640),
        c = n(121894),
        d = n(319060),
        p = n(315710),
        h = n(844222),
        C = n(775121),
        m = n(240248),
        I = n(750506),
        E = n(191627),
        f = n(87404),
        _ = n(215011);
      let A = new Set([f._s, E.Uy]),
        P = (0, m.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
        b = (0, o.v)((e) => ({
          fullScreenLayers: [],
          addLayer: (t) =>
            (0, c.r)(() => {
              e((e) => {
                let { fullScreenLayers: n } = e;
                return { fullScreenLayers: [...n, t] };
              });
            }),
        }));
      function y(e) {
        let { item: t, containerRef: n } = e;
        return (
          (0, p.t)(n),
          r.useEffect(() => {
            var e, n;
            return (
              C.A.disable(),
              A.has(t.key) ||
                C.A.enableTemp(
                  ((e = t.key),
                  (n = t.options.onEscape),
                  {
                    POP_LAYER: {
                      binds: ["esc"],
                      comboKeysBindGlobal: !0,
                      action() {
                        n?.() !== !0 && g(e);
                      },
                    },
                  }),
                ),
              () => {
                C.A.disableTemp();
              }
            );
          }, [t.key, t.options.onEscape]),
          (0, i.jsx)(t.LayerComponent, {
            children: (0, i.jsxs)("div", {
              className: _.zr,
              ref: n,
              children: [
                (0, i.jsx)("div", { className: _.$E }),
                t.render({
                  transitionState: null != t ? t.transitionState : 3,
                  closeLayer: () => g(t.key),
                }),
              ],
            }),
          })
        );
      }
      let S = {
          enter: _.Ve,
          enterActive: _.T8,
          enterDone: _.lG,
          exit: _.NS,
          exitActive: _.N5,
          exitDone: _.Dr,
        },
        M = {
          enter: _.Zf,
          enterActive: _.BA,
          enterDone: _.zo,
          exit: _.ph,
          exitActive: _.zX,
          exitDone: _.hf,
        };
      function T() {
        let { reducedMotion: e } = r.useContext(h.C),
          t = e.enabled ? M : S,
          n = b((e) => e.fullScreenLayers),
          l = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
        return (0, i.jsx)(a.A, {
          children: l.map((e) => {
            let { item: r, nodeRef: l } = e;
            return (0, i.jsx)(
              u.A,
              {
                nodeRef: l,
                classNames: r.options.disableAnimation ? void 0 : t,
                timeout: P,
                onEntered: () => {
                  (0, c.r)(() => {
                    b.setState({
                      fullScreenLayers: n.map((e) =>
                        e.key === r.key ? { ...e, transitionState: 2 } : e,
                      ),
                    });
                  });
                },
                unmountOnExit: !0,
                children: (0, i.jsx)(y, { containerRef: l, item: r }),
              },
              r.key,
            );
          }),
        });
      }
      function R(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Object.freeze({}),
          {
            layerKey: n,
            Layer: i,
            disableAnimation: r = !1,
            onEscape: l,
            showAppUnderLayer: a = !1,
          } = t,
          u = null != n ? n : s()();
        return (
          (0, c.r)(() => {
            b.setState((t) => ({
              fullScreenLayers: [
                ...t.fullScreenLayers,
                {
                  key: u,
                  transitionState: 1,
                  LayerComponent: i ?? I.Ay,
                  render: e,
                  options: {
                    disableAnimation: r,
                    onEscape: l,
                    showAppUnderLayer: a,
                  },
                },
              ],
            }));
          }),
          u
        );
      }
      function g(e) {
        (0, c.r)(() => {
          b.setState((t) => ({
            fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e),
          }));
        });
      }
    },
    319437(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(64700),
        r = n(228366);
      function l(e) {
        let t = (0, i.useRef)(e);
        (0, i.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, i.useEffect)(() => {
            if (__OVERLAY__) {
              function e(e) {
                e.locked && t.current();
              }
              return (
                r.h.subscribe("OVERLAY_SET_INPUT_LOCKED", e),
                () => {
                  r.h.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e);
                }
              );
            }
          }, []);
      }
    },
    322076() {},
    462309(e, t, n) {
      n.d(t, { L: () => v });
      var i = n(627968),
        r = n(64700),
        l = n(284009),
        s = n.n(l),
        a = n(935462),
        u = n(546605),
        o = n(742810),
        c = n(364995),
        d = n(558620),
        p = n(427675),
        h = n(584160),
        C = n(169797),
        m = n(94420),
        I = n(242874),
        E = n(75825),
        f = n(237412),
        _ = n(490744),
        A = n(45938),
        P = n(937008),
        b = n(156312),
        y = n(166532),
        S = n(615310),
        M = n(652215),
        T = n(788868),
        R = n(818348),
        g = n(575650);
      function v(e) {
        let { renderHeader: t, handleClose: n } = e,
          l = (0, m.t4)((e) => e.selectedSkuId),
          {
            purchaseState: v,
            purchaseType: N,
            enablePremiumBrandRefresh: U,
            isDisplayingWowMomentConfirmation: x,
            isPremiumGroupPurchase: D,
            isEligibleForTrial: L,
            isEligibleForDiscount: w,
          } = (0, b.P5)(),
          O = (0, d.A)(),
          j = (0, p.S3)(),
          k = (0, S.bB)(),
          G = (0, c.P7)(),
          { isGift: B, selectedGiftStyle: H, giftRecipient: V } = (0, P.Pv)(),
          Y = (0, u.vg)("PaymentModalHeader"),
          F = j?.productLine === M.EZt.COLLECTIBLES,
          Z = j?.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM,
          q = B && (0, A.Ik)(V) && k === y.pn.CONFIRM && null != H && !F && !Z,
          K = null != t && null != k,
          z = [y.pn.SKU_SELECT, y.pn.SELECT_FREE_SKU],
          W = null != k && !z.includes(k) && null != l,
          $ = (0, o.D7)({ location: "PaymentModalHeader" });
        return r.useMemo(() => {
          if (null == k) return;
          if ($ && h.M.includes(k)) {
            let e = (0, h.u)({
              step: k,
              skuId: l ?? (null != j ? j.id : null),
              showTrialBadge: L,
              showPromoBadge: w,
              storeCountryFromCheckoutContext: G,
              isStoreCountryEnabled: Y,
            });
            return (0, i.jsx)(C.s3, { ...e });
          }
          let e = null;
          return (
            q
              ? (e = (0, i.jsxs)("div", {
                  className: g.kL,
                  children: [
                    (0, i.jsx)(E.A, {
                      defaultAnimationState: I.oA.LOOP,
                      giftStyle: H,
                      className: g.qq,
                    }),
                    (0, i.jsx)(a.s_, {
                      onClick: n,
                      className: g.b,
                      "data-migration-pending": !0,
                    }),
                  ],
                }))
              : K
                ? (e = t(O ?? null, n, k))
                : N === R.VV.ONE_TIME
                  ? (e = (0, i.jsx)(_.fs, { step: k, onClose: n }))
                  : W &&
                    (s()(l in T.WN, `invalid sku id: ${l}`),
                    (e = (0, i.jsx)(f.A, {
                      currentStep: k ?? void 0,
                      purchaseState: v,
                      premiumType: T.WN[l],
                      onClose: n,
                      showTrialBadge: L,
                      showDiscountBadge: w,
                      isGift: B,
                      giftRecipient: V,
                      isEligibleForTrial: L,
                      enablePremiumBrandRefresh: U,
                      isDisplayingWowMomentConfirmation: x,
                      isPremiumGroupPurchase: D,
                    }))),
            e
          );
        }, [$, Y, G, H, n, v, t, O, j, l, k, L, w, q, W, K, N, B, V, U, x, D]);
      }
    },
    379174(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(615310);
      function r() {
        let { step: e, stepConfigs: t } = (0, i.Ay)(),
          n = t.find((t) => t.key === e);
        return n?.options;
      }
    },
    216641(e, t, n) {
      n.d(t, { W: () => i, g: () => r });
      let i = (e, t) => (null == t || null == e ? null : e[t]),
        r = (e, t) => {
          let n = i(e, t);
          return null != n ? n.type : null;
        };
    },
    70730(e, t, n) {
      n.d(t, { p: () => r, u: () => i });
      let i = (0, n(945810).mj)({
          kind: "user",
          name: "2025-10-friendship-anniversary-gifting",
          defaultConfig: { enabled: !1, showDmPrompts: !1 },
          variations: {
            0: { enabled: !1, showDmPrompts: !1 },
            1: { enabled: !0, showDmPrompts: !0 },
            2: { enabled: !0, showDmPrompts: !1 },
          },
        }),
        r = (e) => i.getConfig({ location: e }).enabled;
    },
    51501(e, t, n) {
      n.d(t, { $: () => s, W: () => a });
      var i = n(788868),
        r = n(652215);
      let l = new Set([
        r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
        r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
        r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
      ]);
      function s(e) {
        return e === i.np.FRIEND_ANNIVERSARY
          ? {
              chat: r.ThZ.FRIEND_ANNIVERSARIES_CHAT,
              actionButton: r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
              actionButtonCoachmark:
                r.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
            }
          : {};
      }
      function a(e) {
        return l.has(e);
      }
    },
    869573(e, t, n) {
      n.d(t, { Q: () => s });
      var i = n(64700),
        r = n(166532),
        l = n(293700);
      function s(e, t, n) {
        i.useEffect(() => {
          null != e &&
          e !== r.pn.AWAITING_PURCHASE_TOKEN_AUTH &&
          t === l.C.PENDING
            ? n(r.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === r.pn.AWAITING_PURCHASE_TOKEN_AUTH &&
              t === l.C.SUCCESS &&
              n(r.pn.REVIEW);
        }, [e, t, n]);
      }
    },
    75825(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(627968),
        r = n(64700),
        l = n(17928),
        s = n(604121),
        a = n(775602),
        u = n(920569),
        o = n(788868);
      function c(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: c = !0,
            defaultAnimationState: d,
            idleAnimationState: p,
          } = e,
          h = (0, l.bG)([a.A], () => a.A.useReducedMotion),
          [C, m] = r.useState(d),
          I = r.useRef((0, u.z)(t, C)),
          [E, f] = r.useState(null == p),
          [_, A] = r.useState(!1),
          [P, b] = r.useState(-1);
        r.useEffect(() => {
          null == p && m(d);
        }, [p, d]);
        let y = {
            applyAnimation: () => {
              (I.current = (0, u.z)(t, C)), b((e) => e + 1);
            },
            idleAnimationState: p,
            isChanging: _,
            resetAnimation: () => {
              f(!1), A(!0), b(-1), m(d);
            },
            versionKey: P,
          },
          S = r.useRef(y);
        if (
          (r.useEffect(() => {
            S.current = y;
          }),
          r.useEffect(() => {
            let {
              resetAnimation: e,
              versionKey: t,
              applyAnimation: n,
            } = S.current;
            null != p && t >= 0 ? e() : n();
          }, [t, p]),
          r.useEffect(() => {
            let {
              applyAnimation: e,
              isChanging: t,
              idleAnimationState: n,
            } = S.current;
            (t && null != n) || e();
          }, [C]),
          r.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = S.current;
            _ && (f(null == t), A(!1), e());
          }, [_]),
          !o.o2.hasOwnProperty(t))
        )
          throw Error(`Unexpected giftStyle ${t}`);
        return (0, i.jsx)(s.a, {
          importData: I.current,
          shouldAnimate: !h && c,
          className: n,
          versionKey: P,
          onComplete:
            null != p
              ? () => {
                  null != p && (m(p), f(!0));
                }
              : void 0,
          loop: E,
        });
      }
    },
    815545(e, t, n) {
      n.d(t, {
        Ae: () => A,
        NL: () => f,
        Q8: () => m,
        Ro: () => _,
        SA: () => T,
        Sb: () => P,
        Tp: () => E,
        rc: () => S,
        wt: () => M,
      }),
        n(321073);
      var i = n(284009),
        r = n.n(i),
        l = n(17928),
        s = n(155718),
        a = n(97352),
        u = n(927578),
        o = n(580630),
        c = n(874638),
        d = n(788868),
        p = n(88001),
        h = n(466919),
        C = n(985018);
      let m = function (e, t) {
          let n,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { isSubscriptionUpdate: !1 },
            r = null != t ? (0, c.Z)(t.invoiceItems) : null,
            l = null != t ? (0, u.Ge)(t) : null,
            { intervalType: s, intervalCount: a } = (0, u.Ge)(e),
            o = null != l && (l.intervalType !== s || l.intervalCount !== a);
          return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
            let n = (0, u.xq)(e.subscriptionPlanId),
              i = (0, u.xq)(t.subscriptionPlanId);
            return n && !i ? -1 : !n && i ? 1 : 0;
          }),
          n)
            .filter((e) => {
              let { subscriptionPlanId: t } = e;
              return t !== d.gD.NONE_MONTH && t !== d.gD.NONE_YEAR;
            })
            .map((e) => {
              let t =
                  null != r &&
                  !r.some(
                    (t) =>
                      t.subscriptionPlanId === e.subscriptionPlanId &&
                      t.quantity === e.quantity,
                  ),
                n = !i.isSubscriptionUpdate || t;
              return {
                ...e,
                showGuildSubscriptionAdjustmentTooltip:
                  o &&
                  (e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_3_MONTH_GUILD ||
                    e.subscriptionPlanId === d.gD.PREMIUM_6_MONTH_GUILD),
                isAddedSubscriptionInvoiceItem: n,
              };
            });
        },
        I = (e, t) => (e.discounts ?? []).some((e) => e.type === t);
      function E(e, t, n, i) {
        let r = I(e, s.iS.PREMIUM_TRIAL);
        switch (e.subscriptionPlanId) {
          case d.gD.PREMIUM_GROUP_MONTH:
            return C.intl.formatToPlainString(h.default["8bPDtb"], {
              premiumGroupProductName: (0, p.DP)(),
            });
          case d.gD.PREMIUM_MONTH_LEGACY:
          case d.gD.PREMIUM_YEAR_LEGACY:
          case d.gD.PREMIUM_MONTH_TIER_0:
          case d.gD.PREMIUM_YEAR_TIER_0:
          case d.gD.PREMIUM_MONTH_TIER_1:
          case d.gD.PREMIUM_YEAR_TIER_1:
          case d.gD.PREMIUM_MONTH_TIER_2:
          case d.gD.PREMIUM_YEAR_TIER_2:
          case d.gD.PREMIUM_3_MONTH_TIER_2:
          case d.gD.PREMIUM_6_MONTH_TIER_2:
            return (0, u.Mn)(e.subscriptionPlanId, r, n, i);
          case d.gD.PREMIUM_3_MONTH_GUILD:
          case d.gD.PREMIUM_6_MONTH_GUILD:
            return C.intl.format(C.t.YAIIWp, {
              num: e.quantity,
              intervalCount: t.intervalCount,
            });
          case d.gD.PREMIUM_MONTH_GUILD:
            return C.intl.format(C.t["3BYyip"], { num: e.quantity });
          case d.gD.PREMIUM_YEAR_GUILD:
            return C.intl.format(C.t.JVW4UN, { num: e.quantity });
        }
        switch (t.interval) {
          case d.WT.MONTH:
            if (1 === t.intervalCount)
              return C.intl.formatToPlainString(C.t["6oq128"], {
                planName: t.name,
              });
            return C.intl.formatToPlainString(C.t["9ydggS"], {
              planName: t.name,
              intervalCount: t.intervalCount,
            });
          case d.WT.YEAR:
            return C.intl.formatToPlainString(C.t.V6UFQM, { planName: t.name });
        }
        throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
      }
      let f = (e) => {
          if (null != e.discounts)
            return e.discounts.find((e) => e.type === s.iS.SUBSCRIPTION_PLAN);
        },
        _ = (e, t) =>
          e.invoiceItems.some((e) =>
            (e.discounts ?? []).some((e) => e.discount_id === t),
          ),
        A = (e, t) => {
          let {
              subscriptionTrial: n,
              subscriptionPlan: i,
              overrideAmount: l,
              isPrepaidPaymentSource: c,
              currency: d,
            } = t,
            p = i ?? a.A.get(e.subscriptionPlanId);
          r()(null != p, "Missing subscriptionPlan");
          let h = ((e) => {
              if (null != e)
                return "interval_count" in e
                  ? e.interval_count
                  : e.intervalCount;
            })(n),
            C = E(
              e,
              p,
              c,
              (0, u.re)({ intervalType: n?.interval, intervalCount: h }),
            ),
            m = null != l ? l : e.amount,
            I = (0, o.$g)(m, d),
            _ = c ? I : (0, o.CE)(I, p.interval, p.intervalCount),
            A = f(e),
            P = e.discounts ?? [],
            b = P.find((e) => e.type === s.iS.PREMIUM_TRIAL),
            y = P.find((e) => e.type === s.iS.ENTITLEMENT),
            S = P.reduce((e, t) => e + t.amount, 0);
          return {
            label: C,
            value: _,
            originalAmount: e.subscriptionPlanPrice * e.quantity,
            amount: m,
            amountWithoutDiscount: e.amount + S,
            discountAmountOff: S,
            formattedPrice: I,
            subscriptionPlan: p,
            subscriptionTrial: n,
            trialDiscount: b,
            subscriptionDiscount: A,
            entitlementDiscount: y,
          };
        },
        P = (e, t) => {
          let n = (0, c.Z)(e.invoiceItems);
          return {
            subscriptionPlanInvoiceItem: n.find(
              (e) => e.subscriptionPlanId === t.id,
            ),
            coalescedInvoiceItems: n,
          };
        },
        b = (e) => {
          let t = (0, c.Z)(e.invoiceItems),
            n = t.find(
              (e) => !(0, u.z4)(e.subscriptionPlanId) && e.amount >= 0,
            ),
            i = t.find((e) => (0, u.z4)(e.subscriptionPlanId) && e.amount >= 0);
          return {
            coalescedInvoiceItems: t,
            basePlanInvoiceItem: n,
            guildSubscriptionInvoiceItem: i,
          };
        },
        y = (e, t, n) => {
          let { currency: i, isPrepaidPaymentSource: r } = n,
            l = null != t ? t.amount : 0,
            s = (0, o.$g)(l, i),
            a = null != e ? (0, o.CE)(s, e.interval, e.intervalCount) : 0;
          return {
            guildSubscriptionAmount: l,
            formattedGuildBoostPrice: s,
            formattedGuildBoostRate: a,
            guildBoostItemLabel:
              null != t && null != e
                ? C.intl.formatToPlainString(C.t.a3cAOg, {
                    numGuildSubscriptions: t.quantity,
                    planName: (0, u.Mn)(e.id, !1, r),
                  })
                : null,
          };
        },
        S = (e, t) => {
          let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: i, ...r } = b(e),
            s = (0, l.bG)([a.A], () =>
              null != i ? a.A.get(i.subscriptionPlanId) : null,
            ),
            u = y(s, i, { currency: e.currency, isPrepaidPaymentSource: n });
          return {
            ...r,
            guildSubscriptionInvoiceItem: i,
            guildSubscriptionPlan: s,
            ...u,
          };
        },
        M = (e, t) => {
          let { isPrepaidPaymentSource: n = !1 } = t,
            { guildSubscriptionInvoiceItem: i, ...r } = b(e),
            l = null != i ? a.A.get(i.subscriptionPlanId) : null,
            s = y(l, i, { currency: e.currency, isPrepaidPaymentSource: n });
          return {
            ...r,
            guildSubscriptionInvoiceItem: i,
            guildSubscriptionPlan: l,
            ...s,
          };
        },
        T = (e, t) => {
          let n,
            { subscriptionPlanInvoiceItem: i, coalescedInvoiceItems: l } = P(
              e,
              t,
            );
          r()(null != i, "Expected newPlanInvoiceItem");
          let a = l.find(
              (e) => !(0, u.z4)(e.subscriptionPlanId) && e.amount < 0,
            ),
            c = l.find(
              (e) =>
                null == e.subscriptionPlanId &&
                null != e.discounts &&
                e.discounts.find(
                  (e) => e.type === s.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION,
                ),
            ),
            p = I(i, s.iS.PREMIUM_TRIAL),
            h =
              ((n = s.iS.SUBSCRIPTION_PLAN),
              i.subscriptionPlanPrice -
                (i.discounts?.find((e) => e.type === n)?.amount ?? 0)),
            m = i.quantity * h,
            E =
              i.amount +
              (null != a ? a.amount : 0) -
              m +
              (null != c ? c.amount : 0),
            f = l.filter(
              (e) =>
                e.subscriptionPlanId === d.gD.PREMIUM_MONTH_GUILD ||
                e.subscriptionPlanId === d.gD.PREMIUM_YEAR_GUILD,
            ),
            _ = f.reduce((e, t) => e + t.amount, 0),
            A = [];
          return (
            0 === E ||
              p ||
              A.push({
                id: "base-plan-adjustment",
                label: C.intl.formatToPlainString(C.t.ZSVged, {
                  planName: (0, u.ys)(t.id) ? (0, u.RH)(t.id) : t.name,
                }),
                tooltipText: C.intl.string(C.t.JmwQJM),
                tooltipAriaLabel: "",
                value: (0, o.$g)(E, e.currency),
                amount: E,
                lineItemType: "adjustment",
              }),
            0 !== _ &&
              A.push({
                id: "guild-subscription-adjustment",
                label: C.intl.string(C.t["+as5ZZ"]),
                tooltipText: C.intl.format(C.t.UDop9c, {}),
                tooltipAriaLabel: C.intl.string(C.t.P68ePO),
                value: (0, o.$g)(_, e.currency),
                amount: _,
                lineItemType: "adjustment",
              }),
            {
              newPlanInvoiceItem: i,
              basePlanFullAmount: m,
              basePlanAdjustment: E,
              guildSubscriptionAdjustment: _,
              isTrialItem: p,
              invoiceAdjustmentDisplayItems: A,
              guildSubscriptionInvoiceItems: f,
              promotionItem: c,
              basePlanCreditItem: a,
            }
          );
        };
    },
    344159(e, t, n) {
      n.d(t, { X: () => h, s: () => d });
      var i = n(64700),
        r = n(17928),
        l = n(157559),
        s = n(97352),
        a = n(469778),
        u = n(927578),
        o = n(818348),
        c = n(985018);
      function d(e, t, n) {
        let r = { closeModal: t, isGift: n },
          s = i.useRef(r);
        i.useEffect(() => {
          s.current = r;
        }),
          i.useEffect(() => {
            let { closeModal: t, isGift: n } = s.current;
            null != e &&
              e.isPurchasedExternally &&
              null != e.paymentGateway &&
              !n &&
              (l.A.show({
                title: c.intl.formatToPlainString(c.t["6mIX6s"], {
                  paymentGatewayName: o.qm[e.paymentGateway],
                }),
                body: c.intl.format(c.t.EOa8ei, {
                  paymentGatewayName: o.qm[e.paymentGateway],
                  subscriptionManagementLink: (0, u.tW)(
                    e.paymentGateway,
                    "SUBSCRIPTION_MANAGEMENT",
                  ),
                }),
                confirmText: c.intl.string(c.t.BddRzS),
              }),
              t());
          }, [e]);
      }
      let p = [];
      function h(e, t) {
        let n = (0, r.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
          l = (0, r.yK)([a.A], () => {
            let e = null != n ? a.A.getForSku(n.skuId) : null;
            return null != e ? Array.from(e) : p;
          }),
          o = i.useMemo(
            () =>
              l.filter((e) => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [l],
          );
        return {
          hasEntitlements:
            !t &&
            null != n &&
            null != o &&
            o.length >= u.Ay.getIntervalMonths(n.interval, n.intervalCount),
          entitlements: o,
        };
      }
    },
    570221(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(315069),
        r = n(874638);
      class l extends i.A {
        id;
        invoiceItems;
        total;
        subtotal;
        currency;
        tax;
        taxInclusive;
        subscriptionPeriodStart;
        subscriptionPeriodEnd;
        status;
        orbsReward;
        checkoutContext;
        static createInvoiceFromServer(e) {
          return new l({
            id: e.id,
            invoiceItems: e.invoice_items?.map(r.c),
            total: e.total,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(e.subscription_period_start),
            subscriptionPeriodEnd: new Date(e.subscription_period_end),
            status: e.status,
            orbsReward: e.orbs_reward,
            checkoutContext: e.checkout_context,
          });
        }
        static createFromOTPPreview(e) {
          return new l({
            id: "",
            invoiceItems: e.invoice_items?.map(r.c),
            total: e.amount,
            subtotal: e.subtotal,
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            subscriptionPeriodStart: new Date(0),
            subscriptionPeriodEnd: new Date(0),
            orbsReward: e.orbs_reward,
            checkoutContext: e.checkout_context,
          });
        }
        constructor(e) {
          super(),
            (this.id = e.id),
            (this.invoiceItems = e.invoiceItems ?? []),
            (this.total = e.total),
            (this.subtotal = e.subtotal),
            (this.currency = e.currency),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscriptionPeriodStart = e.subscriptionPeriodStart),
            (this.subscriptionPeriodEnd = e.subscriptionPeriodEnd),
            (this.status = e.status),
            (this.orbsReward = e.orbsReward),
            (this.checkoutContext = e.checkoutContext);
        }
        findInvoiceItemByPlanId(e) {
          return (
            this.invoiceItems.find((t) => t.subscriptionPlanId === e) ?? null
          );
        }
        getDiscountIdIfExists() {
          let e = this.invoiceItems.find((e) => e.discounts.length > 0);
          if (null == e || 0 === e.discounts.length) return;
          let t = e.discounts[0];
          if (null != t) return t.discount_id;
        }
      }
    },
    85563(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(627968);
      n(64700);
      var r = n(953727);
      function l(e) {
        let {
          width: t = 55,
          height: n = 16,
          color: l = "currentColor",
          foreground: s,
          ...a
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.A)(a),
          width: t,
          height: n,
          viewBox: "0 0 55 16",
          children: (0, i.jsxs)("g", {
            fill: l,
            className: s,
            children: [
              (0, i.jsx)("path", {
                d: "M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z",
              }),
              (0, i.jsx)("path", {
                d: "M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z",
              }),
              (0, i.jsx)("path", {
                d: "M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z",
              }),
              (0, i.jsx)("path", {
                d: "M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z",
              }),
              (0, i.jsx)("path", {
                d: "M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z",
              }),
              (0, i.jsx)("path", {
                d: "M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z",
              }),
              (0, i.jsx)("path", {
                d: "M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z",
              }),
              (0, i.jsx)("path", {
                d: "M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z",
              }),
            ],
          }),
        });
      }
    },
    757811(e, t, n) {
      n.r(t);
    },
    209489(e, t, n) {
      let i;
      n.d(t, { A: () => s }), n(321073), (i = n(4472).A);
      let r = [],
        l = !1,
        s = {
          ...i,
          awaitOnline: () =>
            new Promise((e) => {
              if (i.isOnline()) return e();
              {
                if ((r.push(e), l)) return;
                l = !0;
                let t = () => {
                  r.forEach((e) => e()),
                    (r.length = 0),
                    (l = !1),
                    i.removeOnlineCallback(t);
                };
                i.addOnlineCallback(t);
              }
            }),
        };
    },
    83617(e, t, n) {
      n.d(t, { Yk: () => I, _w: () => C, c_: () => h, jJ: () => m });
      var i = n(64700),
        r = n(284009),
        l = n.n(r),
        s = n(228366),
        a = n(73825),
        u = n(160946),
        o = n(97352),
        c = n(927578),
        d = n(652215),
        p = n(788868);
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [...p.oz];
        return null == e || o.A.hasPaymentSourceForSKUIds(e, t)
          ? Promise.resolve()
          : new Promise((e, n) => {
              s.h.wait(async () => {
                try {
                  await (0, a.jv)(t), e();
                } catch (e) {
                  n(e);
                }
              });
            });
      }
      function C(e, t, n) {
        let i,
          r = [],
          s = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
        return (
          (i = "string" == typeof e ? o.A.get(e) : e),
          l()(i, "subscription plan not loaded"),
          null != t &&
            o.A.hasPaymentSourceForSKUId(t, i.skuId) &&
            (s.paymentSourceId = t),
          (r = (0, c.pb)(i.id, s).map((e) => e.currency)).length < 1 &&
            (r = [d.Yri.USD]),
          r
        );
      }
      function m(e, t, n) {
        let i = o.A.get(e);
        return l()(null != i, "plan is undefined"), C(i, n, !1).includes(t);
      }
      function I(e) {
        let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: r,
            isGift: l,
            skuIDs: s,
            excludeSubscriptionPlansBySKU: a,
          } = e,
          [o, c] = i.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != r
              ? { paymentSourceId: r, currency: t, loaded: !1 }
              : { currency: t, loaded: !1 },
          ),
          d = (0, u.Y)(s),
          p = JSON.stringify(s),
          C = i.useRef(s);
        i.useEffect(() => {
          C.current = s;
        }),
          i.useEffect(() => {
            (async () => {
              let { current: e } = C;
              try {
                e.length > 0 && !a && (await h(r, e));
              } catch (e) {
                if (10027 !== e.code) throw e;
              }
              c({ paymentSourceId: r, currency: void 0, loaded: !0 });
            })();
          }, [r, p, n, l, d, a]);
        let m = o.paymentSourceId !== r || null == n || !d || !0 !== o.loaded;
        return {
          hasFetchedSubscriptionPlans: d,
          priceOptions: o,
          setCurrency: (e) => {
            c({ currency: e });
          },
          currencyLoading: m,
        };
      }
    },
  },
]);
//# sourceMappingURL=74235.65d966d917850bf6.js.map
