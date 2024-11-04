"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47340"],
  {
    562497: function (e) {
      e.exports = "/assets/ca0f72ee85ec39688aee.svg";
    },
    317768: function (e) {
      e.exports = "/assets/bce13e0bd03fca4e6a64.svg";
    },
    882980: function (e) {
      e.exports = "/assets/6b2bd1c8a0ff293a0e9c.svg";
    },
    269128: function (e, n, t) {
      var r = t(200651);
      t(192379);
      var o = t(120356),
        i = t.n(o),
        l = t(772848),
        a = t(841261);
      let s = (0, l.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: o = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: i()(a.button, t, { [a.open]: n, [a.withHighlight]: o }),
          children: [
            o &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, r.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, r.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, r.jsx)("path", {
                  stroke: o ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: o ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    232127: function (e, n, t) {
      t.d(n, {
        U: function () {
          return c;
        },
      });
      var r = t(626135),
        o = t(91641),
        i = t(959784),
        l = t(987338),
        a = t(981631);
      let s = new o.E(
        [i.NR, i.ZI, i.Ob, i.uc, i.m1],
        l.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function c(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), s.trigger();
      }
    },
    959784: function (e, n, t) {
      t.d(n, {
        NR: function () {
          return i;
        },
        Ob: function () {
          return s;
        },
        ZI: function () {
          return l;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return a;
        },
      });
      var r = t(987170),
        o = t(987338);
      let i = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_vanilla",
          label: "CTP payment flow started - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        l = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_filters_",
          label: "CTP payment flow started - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        a = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_multiple_buckets",
          label: "CTP payment flow started - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        s = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_everyone",
          label: "CTP payment flow started - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        c = (0, r.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_uneven_buckets_",
          label: "CTP payment flow started - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: o.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
        v: function () {
          return _;
        },
      }),
        t(47120);
      var r,
        o,
        i,
        l = t(200651),
        a = t(192379),
        s = t(120356),
        c = t.n(s),
        u = t(569619),
        d = t(481060),
        p = t(981631),
        f = t(388032),
        m = t(404934);
      function h(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((i = r || (r = {})).TOP = "top"), (i.BOTTOM = "bottom");
      let _ = {
        container: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: r } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: t ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: t ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: t ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, n) => {
          let { isSelected: t, isFocused: r } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : r
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class g extends (o = a.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: r,
              valueRenderer: o,
              optionRenderer: i,
              multiValueRenderer: a,
              options: s,
              value: p,
              autofocus: h,
              disabled: g,
              clearable: S,
              searchable: E,
              styleOverrides: b,
              isMulti: x,
              placeholder: P,
              filterOption: C,
              closeMenuOnSelect: v = !0,
              ...T
            } = this.props,
            I = { ...T };
          null != h && (I.autoFocus = h),
            null != g && (I.isDisabled = g),
            null != S && (I.isClearable = S),
            null != E && (I.isSearchable = E);
          let y = { IndicatorSeparator: () => null };
          null != i &&
            (y.Option = (e) =>
              (0, l.jsx)(u.wx.Option, { ...e, children: i(e.data) })),
            null != o &&
              (y.SingleValue = (e) =>
                (0, l.jsx)(u.wx.SingleValue, { ...e, children: o(e.data) })),
            null != a && (y.MultiValue = (e) => a(e.data));
          if (x && Array.isArray(p)) {
            let n = {};
            s.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = p.map((e) => n[String(e)]));
          } else e = null != p ? s.find((e) => e.value === p) : null;
          return (0, l.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)("div", {
              className: c()(m.select, n, { [m.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, l.jsx)(u.ZP, {
                  ...I,
                  className: t,
                  ref: this._selectRef,
                  isMulti: x,
                  components: y,
                  options: s,
                  styles: null != b ? b : _,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: v,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != P ? P : f.intl.string(f.t.XqMe3N),
                  noOptionsMessage: () => f.intl.string(f.t["Xe+fJC"]),
                  filterOption: C,
                }),
                null != r
                  ? (0, l.jsx)("div", {
                      className: m.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "_selectRef", a.createRef()),
            h(this, "_containerRef", a.createRef()),
            h(this, "state", { isFocused: !1, isOpen: !1 }),
            h(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            h(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            h(this, "handleKeyDown", (e) => {
              e.which === p.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            h(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            h(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      h(g, "MenuPlacements", r);
    },
    518062: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var r = t(200651);
      t(192379);
      var o = t(442837),
        i = t(481060),
        l = t(607070),
        a = t(600164),
        s = t(122890),
        c = t(110818),
        u = t(179695);
      function d(e) {
        let { purchaseState: n, currentStep: t, onClose: d } = e,
          [p, f] = (0, s.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS,
          }),
          m = (0, o.e7)([l.Z], () => l.Z.useReducedMotion);
        return (0, r.jsxs)(i.ModalHeader, {
          align: a.Z.Align.START,
          className: u.header,
          separator: !1,
          children: [
            (0, r.jsx)(c.fe, {
              className: u.animation,
              nextScene: p,
              onScenePlay: (e) => f(c.fe.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: m,
            }),
            (0, r.jsx)("div", { className: u.headerTitle }),
            (0, r.jsx)(i.ModalCloseButton, {
              onClick: d,
              className: u.closeButton,
            }),
          ],
        });
      }
    },
    343649: function (e, n, t) {
      t.r(n),
        t.d(n, {
          GuildBoostPurchaseModal: function () {
            return et;
          },
          default: function () {
            return er;
          },
        }),
        t(47120);
      var r,
        o = t(200651),
        i = t(192379),
        l = t(512722),
        a = t.n(l),
        s = t(75124),
        c = t(252759),
        u = t(772848),
        d = t(442837),
        p = t(780384),
        f = t(481060),
        m = t(355467),
        h = t(179360),
        _ = t(723484),
        g = t(330726),
        S = t(100527),
        E = t(906732),
        b = t(15640),
        x = t(89057),
        P = t(600164),
        C = t(232127),
        v = t(563132),
        T = t(409813),
        I = t(45572),
        y = t(98278),
        A = t(431369),
        N = t(176919),
        k = t(3409),
        M = t(185139),
        R = t(210887),
        L = t(430824),
        O = t(314884),
        j = t(975060),
        B = t(853872),
        Z = t(509545),
        D = t(78839),
        w = t(626135),
        U = t(267642),
        F = t(74538),
        W = t(212895),
        G = t(296848),
        Y = t(518062),
        H = t(4434),
        V = t(333451),
        X = t(981631),
        z = t(474936),
        K = t(231338),
        q = t(388032),
        $ = t(312094);
      (r || (r = {})).PREMIUM = "discord://app/settings/nitro";
      let J = z.Xh.NONE_MONTH,
        Q = [T.h8.PLAN_SELECT, T.h8.REVIEW, T.h8.CONFIRM],
        ee = [
          T.h8.PLAN_SELECT,
          T.h8.ADD_PAYMENT_STEPS,
          T.h8.REVIEW,
          T.h8.CONFIRM,
        ];
      async function en(e) {
        await (0, h.X8)();
        let n = (0, U.vx)(O.Z.boostSlots);
        return (0, h.W3)(
          e,
          n.map((e) => e.id),
        );
      }
      function et(e) {
        let n,
          {
            transitionState: t,
            onClose: r,
            closeGuildPerksModal: l,
            analyticsLocations: h,
            analyticsLocation: et,
            analyticsSourceLocation: er,
            guildId: eo,
            onSubscribeComplete: ei,
            totalNumberOfSlotsToAssign: el = 1,
            disablePremiumUpsell: ea = !1,
            onSubscriptionConfirmation: es,
            applicationId: ec,
          } = e,
          { activeSubscription: eu, blockedPayments: ed } = (0,
          v.usePaymentContext)(),
          ep = (0, d.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
          ef = null != eu ? eu.paymentSourceId : null,
          em = (0, d.e7)([Z.Z], () =>
            null != eu ? (0, G.oE)(eu.planId) : null,
          ),
          eh = (0, d.e7)([Z.Z], () => null == eu || null != Z.Z.get(eu.planId)),
          e_ = (0, d.e7)([Z.Z], () => (null == em ? Z.Z.get(J) : em)),
          eg = (0, d.e7)([R.Z], () => R.Z.theme),
          eS = i.useRef((0, U.vx)(O.Z.boostSlots)).current,
          eE = (0, d.e7)([B.Z], () => B.Z.defaultPaymentSourceId),
          eb = (0, k.fL)(null != ef ? ef : ep ? eE : null),
          {
            paymentSources: ex,
            setPurchaseError: eP,
            paymentSourceId: eC,
            setIsSubmittingCurrentStep: ev,
            paymentAuthenticationState: eT,
            setPaymentSourceId: eI,
            isSubmittingCurrentStep: ey,
            paymentError: eA,
            purchaseError: eN,
            purchaseErrorBlockRef: ek,
          } = eb,
          eM = Object.keys(ex).length > 0,
          [eR, eL] = i.useState(el - eS.length),
          [eO, ej] = i.useState(!1),
          eB = (0, d.e7)([j.Z], () => j.Z.popupCallbackCalled),
          eZ = (0, b.V)(),
          eD = i.useMemo(
            () =>
              null != eu && eh && eZ
                ? (0, A.g)(eu, eR)
                : [{ planId: z.Xh.PREMIUM_MONTH_GUILD, quantity: eR }],
            [eu, eh, eR, eZ],
          ),
          [ew, eU] = (0, s.Z)(() => [(0, u.Z)(), Date.now()]),
          { analyticsLocations: eF } = (0, E.ZP)(
            h,
            S.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eW = i.useMemo(() => {
            var e, n;
            return {
              load_id: ew,
              payment_type: K.Zu[K.GZ.SUBSCRIPTION],
              sku_id: z.Si.GUILD,
              subscription_type: X.NYc.PREMIUM,
              subscription_plan_id:
                null !==
                  (n =
                    null ===
                      (e = eD.find((e) => {
                        let { planId: n } = e;
                        return z.Z1.has(n);
                      })) || void 0 === e
                      ? void 0
                      : e.planId) && void 0 !== n
                  ? n
                  : z.Xh.PREMIUM_MONTH_GUILD,
              quantity: eR,
              location: et,
              source: er,
              location_stack: eF,
            };
          }, [ew, et, eF, er, eD, eR]);
        i.useEffect(() => {
          (0, W.i1)(eC);
        }, [eC]),
          i.useEffect(() => {
            (async () => {
              if (!0 === eB)
                try {
                  if (null == j.Z.redirectedPaymentId) return;
                  await (0, m.OP)(j.Z.redirectedPaymentId),
                    eJ(T.h8.CONFIRM),
                    ez(I.A.COMPLETED),
                    null != eo && (await en(eo)),
                    null != ei && ei();
                } catch (e) {
                  ez(I.A.FAIL),
                    eP(e),
                    w.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                      ...eW,
                      payment_error_code: null == e ? void 0 : e.code,
                      payment_gateway: X.gg$.STRIPE,
                      payment_source_id: eC,
                      duration_ms: Date.now() - eU,
                    });
                } finally {
                  ev(!1), (0, m.K2)();
                }
            })();
          }, [eB]),
          i.useEffect(() => {
            !D.ZP.hasFetchedSubscriptions() && (0, m.jg)(),
              (0, C.U)({ ...eW, guild_id: eo, application_id: ec }),
              null != eu &&
                null != eu.renewalMutations &&
                w.default.track(X.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: et,
                  guild_id: eo,
                });
          }, []);
        let [eG, eY] = i.useState(Q),
          [eH, eV] = i.useState(T.h8.PLAN_SELECT),
          [eX, ez] = i.useState(I.A.WAITING),
          [eK, eq] = i.useState(!0),
          e$ = (0, c.Z)(() => Date.now(), [eH]),
          eJ = i.useCallback(
            (e, n) => {
              eV(e), eP(null);
              let t = Date.now();
              w.default.track(X.rMx.PAYMENT_FLOW_STEP, {
                ...eW,
                from_step: null != n ? n : eH,
                to_step: e === T.h8.ADD_PAYMENT_STEPS ? T.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - e$,
                flow_duration_ms: t - eU,
                guild_id: eo,
                application_id: ec,
              });
            },
            [eP, eW, eH, e$, eU, eo, ec],
          ),
          eQ = () => {
            r(eX === I.A.COMPLETED);
          },
          e0 = null != eu && eu.isPurchasedExternally;
        i.useEffect(() => {
          eT !== N.wr.PENDING &&
            eH !== T.h8.CONFIRM &&
            null != ef &&
            (eG !== Q && eY(Q),
            !Q.includes(eH) && eH !== T.h8.PREMIUM_UPSELL && eJ(T.h8.REVIEW)),
            eH === T.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee),
            e0 && eH !== T.h8.PLAN_SELECT && eV(T.h8.PLAN_SELECT);
        }, [eH, eJ, e0, eT, eu, ef, eG]),
          (0, N.bp)(eH, eT, eJ, ez),
          (0, T.dZ)(eH, eX, ez);
        let e1 = i.useRef(null),
          [e8, e2] = (0, g.Z)(!1, 500),
          [e7, e9] = i.useState(null),
          [e4, e3] = i.useState([]),
          [e5, e6] = i.useState(!1);
        i.useEffect(() => {
          let e;
          if (!!eZ)
            null != Z.Z.get(z.Xh.PREMIUM_MONTH_GUILD) &&
              e3((e = (0, W.DE)(z.Xh.PREMIUM_MONTH_GUILD, eC, !1))),
              null == eC && null != eu && null != eu.paymentSourceId
                ? e9(eu.currency)
                : null != e && e9(e[0]);
        }, [eC, eu, eZ, JSON.stringify(e4)]);
        let ne = (0, k.vP)({
          paymentModalArgs: eb,
          initialStep: T.h8.PAYMENT_TYPE,
          prependSteps: [T.h8.PLAN_SELECT],
          appendSteps: [T.h8.REVIEW, T.h8.CONFIRM],
          breadcrumpSteps: eG,
          currentBreadcrumpStep: eH,
          onReturn: () => {
            eJ(
              Object.values(ex).length < 1 ? T.h8.PLAN_SELECT : T.h8.REVIEW,
              T.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            eJ(T.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              r = Date.now();
            w.default.track(X.rMx.PAYMENT_FLOW_STEP, {
              ...eW,
              from_step: n,
              to_step: t,
              step_duration_ms: r - e$,
              flow_duration_ms: r - eU,
              guild_id: eo,
            });
          },
        });
        if (ed) n = (0, o.jsx)(x.Vq, { onClose: eQ });
        else if (ep && eh && eZ && null != e7 && "" !== e7) {
          if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, o.jsx)(f.ModalContent, {
              children: (0, o.jsx)("p", {
                className: $.copy,
                children: q.intl.string(q.t.mOWsFx),
              }),
            });
          else if (null != eu && null != eu.renewalMutations)
            n = (0, o.jsx)(f.ModalContent, {
              children: (0, o.jsx)("p", {
                className: $.copy,
                children: q.intl.string(q.t.npfhh4),
              }),
            });
          else if (eH === T.h8.PREMIUM_UPSELL) {
            a()(null != e_, "Missing nextPremiumSubscriptionPlan"),
              a()(e7, "Currency not defined");
            let e =
              null != eC
                ? { paymentSourceId: eC, currency: e7 }
                : { currency: e7 };
            n = (0, o.jsx)(V.Z, {
              premiumSubscriptionPlan: e_,
              analyticsLocation: et,
              analyticsSourceLocation: er,
              onClose: eQ,
              onBack: () => eJ(T.h8.PLAN_SELECT),
              onSkip: () =>
                eJ(null != ef || eM ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: es,
              priceOptions: e,
            });
          } else {
            let e, t, r, i;
            a()(e7, "Currency not defined");
            let s =
              null != eC
                ? { paymentSourceId: eC, currency: e7 }
                : { currency: e7 };
            switch (eH) {
              case T.h8.PLAN_SELECT:
                a()(null != eo, "Missing guildId"),
                  a()(null != e_, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, o.jsx)(H.CP, {
                    premiumSubscriptionPlan: e_,
                    numGuildBoosts: eR,
                    setNumGuildBoosts: eL,
                    setForceDisableSubmitButton: eq,
                    premiumSubscription: eu,
                    existingAvailableSlots: eS,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      eQ(), null != l && l(), (0, y.z)();
                    },
                    guildId: eo,
                    priceOptions: s,
                  })),
                  e0 &&
                    null != eu &&
                    null != eu.paymentGateway &&
                    (e = (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(f.FormErrorBlock, {
                          className: $.externalErrorBlock,
                          children: q.intl.format(q.t["/m3Y3t"], {
                            paymentGatewayName: K.Vz[eu.paymentGateway],
                          }),
                        }),
                        e,
                      ],
                    })),
                  (r = (0, o.jsx)(f.Button, {
                    look: f.Button.Looks.LINK,
                    color: (0, p.ap)(eg)
                      ? f.Button.Colors.PRIMARY
                      : f.Button.Colors.WHITE,
                    onClick: eQ,
                    children: q.intl.string(q.t.oEAioK),
                  })),
                  (i = (0, o.jsx)(f.Button, {
                    type: "submit",
                    disabled: eK || 0 === eR || e0,
                    onClick: () => {
                      if (
                        !ea &&
                        (null == em ||
                          em.premiumSubscriptionType !== z.p9.TIER_2)
                      ) {
                        eJ(T.h8.PREMIUM_UPSELL);
                        return;
                      }
                      eJ(
                        null != ef || eM ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: q.intl.string(q.t["3PatS0"]),
                  }));
                break;
              case T.h8.ADD_PAYMENT_STEPS:
                break;
              case T.h8.AWAITING_AUTHENTICATION:
                e = (0, o.jsx)(_.F, { className: $.__invalid_body });
                break;
              case T.h8.REVIEW:
                a()(null != e_, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, o.jsx)(H.Gq, {
                    paymentSources: ex,
                    priceOptions: s,
                    currentPremiumSubscription: eu,
                    premiumSubscriptionPaymentSourceId: ef,
                    premiumSubscriptionPlan: e_,
                    newAdditionalPlans: eD,
                    onPaymentSourceChange: (e) => eI(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eJ(T.h8.ADD_PAYMENT_STEPS), eI(null);
                    },
                    onPurchaseTermsChange: ej,
                    legalTermsNodeRef: e1,
                    hasLegalTermsFlash: e8,
                  })),
                  (t = T.h8.PLAN_SELECT),
                  (i = eO
                    ? (0, o.jsx)(f.Button, {
                        color: f.Button.Colors.GREEN,
                        type: "submit",
                        submitting: ey,
                        onClick: async () => {
                          a()(null != eD, "Missing newAdditionalPlans");
                          let e = null != eC ? ex[eC] : null;
                          eP(null);
                          try {
                            if (
                              (ez(I.A.PURCHASING),
                              ev(!0),
                              a()(null != eC, "Missing paymentSourceId"),
                              w.default.track(X.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eW,
                                duration_ms: Date.now() - eU,
                                guild_id: eo,
                                application_id: ec,
                              }),
                              e5)
                            )
                              return;
                            if (null == eu || null == em) {
                              a()(null != e, "Missing paymentSource");
                              let n = await (0, m.XW)({
                                items: eD,
                                paymentSource: e,
                                currency: s.currency,
                              });
                              if (n.redirectConfirmation) {
                                e6(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, F.MY)(eu, eD) };
                              (n.currency = eu.currency),
                                null == n.currency && (n.currency = s.currency),
                                (n.paymentSource =
                                  null != ef ? ex[ef] : void 0),
                                null == n.paymentSource &&
                                  (a()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = s.currency));
                              let t = await (0, m.Mg)(eu, n, eF);
                              if (t.redirectConfirmation) {
                                e6(null != t.redirectURL);
                                return;
                              }
                            }
                            eJ(T.h8.CONFIRM),
                              ez(I.A.COMPLETED),
                              null != eo && (await en(eo)),
                              null != ei && ei();
                          } catch (n) {
                            ez(I.A.FAIL),
                              eP(n),
                              w.default.track(X.rMx.PAYMENT_FLOW_FAILED, {
                                ...eW,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === X.HeQ.CARD
                                      ? X.gg$.STRIPE
                                      : X.gg$.BRAINTREE
                                    : null,
                                payment_source_id: eC,
                                duration_ms: Date.now() - eU,
                              });
                          } finally {
                            !e5 && ev(!1);
                          }
                        },
                        children: q.intl.string(q.t.eUEeCg),
                      })
                    : (0, o.jsx)(f.Tooltip, {
                        text: q.intl.string(q.t.XdvBLS),
                        children: (e) =>
                          (0, o.jsx)(f.Button, {
                            ...e,
                            color: f.Button.Colors.GREEN,
                            onClick: () => {
                              null != e1.current &&
                                (e1.current.scrollIntoView({
                                  behavior: "smooth",
                                }),
                                e2(!0));
                            },
                            type: "submit",
                            children: q.intl.string(q.t.eUEeCg),
                          }),
                      }));
                break;
              case T.h8.CONFIRM:
                var nn;
                let c = L.Z.getGuild(eo);
                e = (0, o.jsx)(H.R7, {
                  guild: c,
                  guildBoostQuantity: eR + eS.length,
                  onClose: eQ,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (nn = ex[null != eC ? eC : ""]) || void 0 === nn
                      ? void 0
                      : nn.type,
                });
            }
            let u = null != eA && null == (0, T.ly)(eA) ? eA : eN;
            n =
              eH === T.h8.ADD_PAYMENT_STEPS
                ? ne
                : (0, o.jsx)(M.Z, {
                    hideBreadcrumbs: eH === T.h8.CONFIRM,
                    steps: eG,
                    currentStep: eH,
                    paymentError: u,
                    purchaseErrorBlockRef: ek,
                    hasCurrencies: e4.length > 1,
                    body: e,
                    footer:
                      eH !== T.h8.CONFIRM
                        ? (0, o.jsxs)(f.ModalFooter, {
                            direction: P.Z.Direction.HORIZONTAL,
                            align: P.Z.Align.CENTER,
                            justify: P.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, o.jsx)("div", {
                                    className: $.backStep,
                                    children: (0, o.jsx)(f.Button, {
                                      color: (0, p.ap)(eg)
                                        ? f.Button.Colors.PRIMARY
                                        : f.Button.Colors.WHITE,
                                      look: f.Button.Looks.LINK,
                                      size: f.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != t && eJ(t);
                                      },
                                      children: q.intl.string(q.t["13/7kZ"]),
                                    }),
                                  })
                                : null,
                              (0, o.jsxs)("div", {
                                className: $.footerRight,
                                children: [r, i],
                              }),
                            ],
                          })
                        : null,
                  });
          }
        } else
          n = (0, o.jsx)("div", {
            className: $.loadingWrapper,
            children: (0, o.jsx)(f.Spinner, {}),
          });
        let nt = null;
        return (
          !ed &&
            eH !== T.h8.PREMIUM_UPSELL &&
            (nt = (0, o.jsx)(Y.Z, {
              onClose: eQ,
              currentStep: eH,
              purchaseState: eX,
            })),
          (0, o.jsxs)(f.ModalRoot, { transitionState: t, children: [nt, n] })
        );
      }
      function er(e) {
        let n = (0, d.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, E.ZP)(S.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, o.jsx)(E.Gt, {
          value: t,
          children: (0, o.jsx)(v.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, o.jsx)(et, { ...e }),
          }),
        });
      }
    },
    333451: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var r = t(200651),
        o = t(192379),
        i = t(120356),
        l = t.n(i),
        a = t(442837),
        s = t(780384),
        c = t(481060),
        u = t(100527),
        d = t(906732),
        p = t(600164),
        f = t(963249),
        m = t(639119),
        h = t(165583),
        _ = t(263954),
        g = t(706454),
        S = t(709586),
        E = t(626135),
        b = t(930153),
        x = t(74538),
        P = t(937615),
        C = t(981631),
        v = t(474936),
        T = t(388032),
        I = t(75115);
      function y(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([g.default], () => g.default.locale);
        return (0, r.jsxs)("div", {
          className: I.perksList,
          children: [
            (0, r.jsx)(_.Z, {
              icon: S.Z,
              iconClassName: I.perkIconGuild,
              description: T.intl.formatToPlainString(T.t.sQBgs7, {
                numFreeGuildSubscriptions: v.cb,
              }),
            }),
            (0, r.jsx)(_.Z, {
              icon: S.Z,
              iconClassName: I.perkIconGuild,
              description: T.intl.formatToPlainString(T.t["1A6vXl"], {
                percent: (0, b.T3)(t, v.Rr / 100),
              }),
            }),
            n
              ? (0, r.jsx)(_.Z, {
                  icon: c.ReactionIcon,
                  iconClassName: I.perkIconChatPerks,
                  description: T.intl.string(T.t.Z9b2x8),
                })
              : null,
            (0, r.jsx)(_.Z, {
              icon: c.ScreenArrowIcon,
              iconClassName: I.perkIconStream,
              description: T.intl.string(T.t["8dqG5O"]),
            }),
            (0, r.jsx)(_.Z, {
              icon: c.UploadIcon,
              iconClassName: I.perkIconUpload,
              description: T.intl.string(T.t.cBorIy),
            }),
          ],
        });
      }
      function A(e) {
        var n;
        let {
            premiumSubscriptionPlan: t,
            onClose: i,
            onBack: a,
            onSkip: _,
            onSubscriptionConfirmation: g,
            analyticsLocation: S,
            analyticsSourceLocation: b,
            priceOptions: A,
          } = e,
          { analyticsLocations: N, sourceAnalyticsLocations: k } = (0, d.ZP)(
            u.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: M } = (0, c.useThemeContext)(),
          R = (0, s.ap)(M) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
          L = null == t || null == t.premiumSubscriptionType,
          O = x.ZP.getPrice(v.Xh.PREMIUM_MONTH_TIER_2, !1, !1, A),
          j = (0, P.T4)(O.amount, O.currency),
          B = (0, m.N)(),
          Z = null == B ? void 0 : B.trial_id,
          D =
            (null == B
              ? void 0
              : null === (n = B.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === v.Si.TIER_2;
        return (
          o.useEffect(() => {
            E.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
              type: v.cd.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: k,
            });
          }, [k]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(c.ModalContent, {
                className: I.content,
                children: [
                  (0, r.jsx)(c.ModalCloseButton, {
                    onClick: i,
                    className: I.closeButton,
                  }),
                  D && (0, r.jsx)(h.dz, { className: I.premiumTrialBadge }),
                  (0, r.jsx)("div", {
                    className: l()(I.upsellImage, {
                      [I.upsellImageWithTrialOffer]: D,
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: I.bodyText,
                    children:
                      null != Z
                        ? T.intl.string(T.t.AoSzEh)
                        : T.intl.format(T.t["7vePZW"], { monthlyPrice: j }),
                  }),
                  (0, r.jsx)(y, { shouldUpsellFromNoneTier: L }),
                ],
              }),
              (0, r.jsxs)(c.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.END,
                children: [
                  (0, r.jsxs)("div", {
                    className: I.footerRight,
                    children: [
                      (0, r.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: R,
                        onClick: _,
                        children: T.intl.string(T.t["SI/adn"]),
                      }),
                      (0, r.jsx)(c.Button, {
                        color: c.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => {
                          i(),
                            (0, f.Z)({
                              initialPlanId: null,
                              subscriptionTier: v.Si.TIER_2,
                              analyticsLocations: N,
                              analyticsObject: {
                                ...S,
                                section: C.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: b,
                              onSubscriptionConfirmation: g,
                              trialId: Z,
                            });
                        },
                        children:
                          null != Z
                            ? T.intl.string(T.t["Gd/XHB"])
                            : T.intl.string(T.t.p2moio),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: I.backStep,
                    children: (0, r.jsx)(c.Button, {
                      color: R,
                      look: c.Button.Looks.LINK,
                      size: c.Button.Sizes.NONE,
                      onClick: () => a(),
                      children: T.intl.string(T.t["13/7kZ"]),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    987209: function (e, n, t) {
      t.d(n, {
        KB: function () {
          return x;
        },
        wD: function () {
          return E;
        },
      }),
        t(47120);
      var r = t(200651),
        o = t(192379),
        i = t(442837),
        l = t(597688),
        a = t(479446),
        s = t(646476),
        c = t(599659),
        u = t(155491),
        d = t(975104),
        p = t(669079),
        f = t(563132),
        m = t(474936),
        h = t(388032);
      let _ = m.Cj.STANDARD_BOX,
        g = void 0,
        [S, E, b] = (0, d.Z)();
      function x(e) {
        let {
            isGift: n = !1,
            giftRecipient: t,
            giftMessage: d,
            giftStyle: E,
            giftingOrigin: b,
            children: x,
          } = e,
          { selectedSkuId: P } = (0, f.usePaymentContext)(),
          [C, v] = o.useState(t),
          [T, I] = o.useState(),
          [y, A] = o.useState(!1),
          N = (0, p.pO)(C),
          k = (0, s.rK)(),
          { enabled: M } = s.ZP.useExperiment(
            { location: "PaymentContextProvider" },
            { autoTrackExposure: N && k },
          ),
          { enabled: R } = c.O.useExperiment({ location: "gift card" }),
          L = g;
        N &&
          ((L = M && k ? m.Cj.SEASONAL_STANDARD_BOX : null != E ? E : _),
          R && (L = m.Cj.NITROWEEN_STANDARD));
        let [O, j] = o.useState(L),
          [B, Z] = o.useState(
            n &&
              (0, p.MY)(C) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
              null == d
              ? h.intl.string(h.t.ZkOo1d)
              : d,
          ),
          [D, w] = o.useState(void 0),
          [U, F] = o.useState(void 0),
          W = (0, p.E5)(P, n),
          [G, Y] = o.useState(!1),
          [H, V] = o.useState(!1),
          [X, z] = o.useState(),
          K = o.useCallback(
            (e) => {
              let { onSubscriptionConfirmation: n } = e;
              return (
                V(!0),
                (0, a.YD)(C, W)
                  .then(() => {
                    V(!1), null == n || n(), Y(!0);
                  })
                  .catch((e) => {
                    V(!1), z(e), Y(!0);
                  })
              );
            },
            [C, W, V, Y, z],
          ),
          q = (0, u.x8)(),
          $ = (0, i.Wu)([l.Z], () => l.Z.recommendedGiftSkuIds);
        return (0, r.jsx)(S.Provider, {
          value: {
            isGift: n,
            giftCode: W,
            giftMessage: d,
            giftRecipient: C,
            setGiftRecipient: v,
            giftRecipientError: T,
            setGiftRecipientError: I,
            validatingGiftRecipient: y,
            setValidatingGiftRecipient: A,
            soundEffect: D,
            setSoundEffect: w,
            emojiConfetti: U,
            setEmojiConfetti: F,
            customGiftMessage: B,
            setCustomGiftMessage: Z,
            selectedGiftStyle: O,
            setSelectedGiftStyle: j,
            sendGiftMessage: K,
            hasSentMessage: G,
            isSendingMessage: H,
            giftMessageError: X,
            alreadyHasHalloweenDeco: q,
            recommendedGiftSkuIds: $,
            giftingOrigin: b,
          },
          children: x,
        });
      }
    },
    586585: function (e, n, t) {
      t.d(n, {
        g: function () {
          return o;
        },
      });
      var r,
        o,
        i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(600164),
        s = t(612853),
        c = t(388032),
        u = t(297908);
      ((r = o || (o = {}))[(r.CONTINUE = 0)] = "CONTINUE"),
        (r[(r.UPGRADE = 1)] = "UPGRADE"),
        (r[(r.PURCHASE = 2)] = "PURCHASE");
      let d = (e) => {
        let {
          onBack: n,
          backText: t,
          primaryIcon: r,
          primaryCTA: o,
          primaryType: d,
          primaryText: p,
          primaryTooltip: f,
          primaryDisabled: m,
          primarySubmitting: h,
          onPrimary: _,
          secondaryText: g,
          onSecondary: S,
        } = e;
        return (0, i.jsxs)(l.ModalFooter, {
          justify: a.Z.Justify.BETWEEN,
          align: a.Z.Align.CENTER,
          children: [
            (() => {
              if (null == o || null == p) return null;
              let e = 2 === o ? l.ShinyButton : l.Button,
                n = {
                  innerClassName: u.button,
                  type: d,
                  disabled: m,
                  submitting: h,
                  color:
                    0 === o ? l.Button.Colors.BRAND : l.Button.Colors.GREEN,
                  onClick: _,
                };
              return null != f
                ? (0, i.jsx)(l.Tooltip, {
                    text: f,
                    children: (t) =>
                      (0, i.jsxs)(e, {
                        ...t,
                        ...n,
                        children: [
                          null == r
                            ? null
                            : (0, i.jsx)(r, {
                                color: "currentColor",
                                className: u.primaryIcon,
                              }),
                          p,
                        ],
                      }),
                  })
                : (0, i.jsxs)(e, {
                    ...n,
                    children: [
                      null == r
                        ? null
                        : (0, i.jsx)(r, {
                            color: "currentColor",
                            className: u.primaryIcon,
                          }),
                      p,
                    ],
                  });
            })(),
            null == g
              ? null
              : (0, i.jsx)(l.Button, {
                  color: l.Button.Colors.PRIMARY,
                  look: l.Button.Looks.LINK,
                  onClick: S,
                  children: g,
                }),
            (0, i.jsx)(s.Z, {}),
            null == n
              ? null
              : (0, i.jsx)(l.Button, {
                  className: u.back,
                  color: l.Button.Colors.PRIMARY,
                  look: l.Button.Looks.LINK,
                  onClick: n,
                  children: null != t ? t : c.intl.string(c.t["13/7kZ"]),
                }),
          ],
        });
      };
      (d.CTAType = o), (n.Z = d);
    },
    612853: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(120356),
        i = t.n(o),
        l = t(481060),
        a = t(388032),
        s = t(638635),
        c = t(739017);
      function u() {
        return (0, r.jsxs)("div", {
          className: i()(s.paymentModalLockIcon, c.flex, c.alignCenter),
          children: [
            (0, r.jsx)(l.LockIcon, {
              size: "sm",
              color: "currentColor",
              className: s.lockIcon,
            }),
            (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              children: a.intl.string(a.t.Kv6Z4O),
            }),
          ],
        });
      }
    },
    614277: function (e, n, t) {
      t.d(n, {
        C3: function () {
          return m;
        },
        O3: function () {
          return h;
        },
        ZP: function () {
          return f;
        },
      });
      var r = t(200651),
        o = t(192379),
        i = t(120356),
        l = t.n(i),
        a = t(512722),
        s = t.n(a),
        c = t(995295),
        u = t(481060),
        d = t(563132),
        p = t(130298);
      function f(e) {
        var n, t, i, a, c, f;
        let {
            header: m,
            isLargeModal: h,
            stepProps: _,
          } = (function (e) {
            let { header: n, isLargeModal: t, ...r } = e;
            return { header: n, isLargeModal: t, stepProps: r };
          })(e),
          {
            step: g,
            stepConfigs: S,
            setBodyNode: E,
            setFooterNode: b,
            setModalOverlayNode: x,
            setReadySlideId: P,
          } = (0, d.usePaymentContext)(),
          C = S.find((e) => e.key === g);
        o.useEffect(() => {
          x(null);
        }, [g, x]),
          s()(null != C, "Unknown step for current payment flow.");
        let v =
            null !==
              (c =
                null == C
                  ? void 0
                  : null === (n = C.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          T =
            null == C
              ? void 0
              : null === (t = C.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          I =
            void 0 !== h && h
              ? p.sliderBodyLarge
              : null == C
                ? void 0
                : null === (i = C.options) || void 0 === i
                  ? void 0
                  : i.sliderBodyClassName;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            null ===
              (f =
                null == C
                  ? void 0
                  : null === (a = C.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === f ||
            f
              ? m
              : null,
            C.renderStep(_),
            null == g || v
              ? null
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(u.ModalContent, {
                      className: l()(p.body, T),
                      children: (0, r.jsx)(u.Slides, {
                        activeSlide: g,
                        centered: !1,
                        onSlideReady: (e) => P(e),
                        children: S.filter((e) => null != e.key).map((e) =>
                          (0, r.jsx)(
                            u.Slide,
                            {
                              id: e.key,
                              children: (0, r.jsx)("form", {
                                className: l()(p.sliderBody, I),
                                ref: (e) => E(e),
                                onSubmit: (e) => e.preventDefault(),
                              }),
                            },
                            e.key,
                          ),
                        ),
                      }),
                    }),
                    (0, r.jsx)("div", { ref: (e) => b(e) }),
                    (0, r.jsx)("div", { ref: (e) => x(e) }),
                  ],
                }),
          ],
        });
      }
      function m(e) {
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
          return p;
        },
      }),
        t(411104);
      var r,
        o,
        i = t(512722),
        l = t.n(i),
        a = t(493683),
        s = t(904245),
        c = t(957730),
        u = t(592125),
        d = t(669079);
      ((o = r || (r = {})).ACTION = "action"),
        (o.LOOP = "loop"),
        (o.IDLE = "idle");
      let p = async (e, n) => {
          if (null == n) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let t = await a.Z.openPrivateChannel(e.id).then((e) => {
              let n = u.Z.getChannel(e);
              if ((l()(null != n, "PrivateChannel is null"), null == n))
                throw Error("Channel must be defined");
              return n;
            }),
            r = (0, d.Nz)(n);
          return s.Z.sendMessage(t.id, c.ZP.parse(t, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
          });
        },
        f = (e) => {};
    },
    431369: function (e, n, t) {
      t.d(n, {
        g: function () {
          return c;
        },
      }),
        t(411104),
        t(47120);
      var r = t(512722),
        o = t.n(r),
        i = t(509545),
        l = t(74538),
        a = t(474936),
        s = t(981631);
      function c(e, n) {
        let t = i.Z.get(e.planId);
        o()(null != t, "missing premium subscription plan");
        let r = i.Z.getForSkuAndInterval(
          (0, l.Wz)(a.Si.GUILD),
          t.interval,
          t.intervalCount,
        );
        o()(null != r, "missing premium guild plan");
        let c =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          u = (e.status === s.O0b.CANCELED ? 0 : (0, l.uV)(c)) + n,
          d = c.filter((e) => e.planId !== r.id);
        if (u < 0) throw Error("Invalid adjustment");
        return 0 === u ? d : [...d, { planId: r.id, quantity: u }];
      }
    },
    122890: function (e, n, t) {
      t.d(n, {
        z: function () {
          return l;
        },
      }),
        t(47120);
      var r = t(192379),
        o = t(409813),
        i = t(45572);
      function l(e) {
        let {
            purchaseState: n,
            currentStep: t,
            initialScene: l,
            purchaseScene: a,
            errorScene: s,
            successScene: c,
          } = e,
          [u, d] = (0, r.useState)(l);
        return (
          (0, r.useEffect)(() => {
            n === i.A.PURCHASING ? d(a) : n === i.A.FAIL && d(s);
          }, [n, a, s]),
          (0, r.useEffect)(() => {
            t === o.h8.CONFIRM && d(c);
          }, [t, c]),
          [u, d]
        );
      }
    },
    263954: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(120356),
        i = t.n(o),
        l = t(524994);
      function a(e) {
        let { icon: n, iconClassName: t, description: o, color: a } = e;
        return (0, r.jsxs)("div", {
          className: l.perkRow,
          children: [
            (0, r.jsx)("div", {
              className: l.perkIconContainer,
              children: (0, r.jsx)(n, {
                color: null != a ? a : "currentColor",
                className: i()(l.perkIcon, t),
              }),
            }),
            (0, r.jsx)("div", { className: l.perkDescription, children: o }),
          ],
        });
      }
    },
    850840: function (e, n, t) {
      let r;
      t(653041);
      var o,
        i = t(442837),
        l = t(570140);
      function a(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class c extends (o = i.ZP.PersistedStore) {
        initialize(e) {
          r = null != e ? e : s;
        }
        getState() {
          return r;
        }
        get hasAcceptedStoreTerms() {
          return r.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return r.hasAcceptedEulaIds.includes(e);
        }
      }
      a(c, "displayName", "ApplicationStoreUserSettingsStore"),
        a(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        a(c, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (n.Z = new c(l.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            r.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: n } = e;
            if (r.hasAcceptedEulaIds.includes(n)) return !1;
            r.hasAcceptedEulaIds.push(n);
          },
        }));
    },
    841261: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    404934: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    179695: function (e, n, t) {
      e.exports = {
        header: "header_f56ad2",
        animation: "animation_f56ad2",
        headerTitle: "headerTitle_f56ad2",
        closeButton: "closeButton_f56ad2",
      };
    },
    312094: function (e, n, t) {
      e.exports = {
        externalErrorBlock: "externalErrorBlock_eeab8f",
        footerRight: "footerRight_eeab8f",
        backStep: "backStep_eeab8f",
        copy: "copy_eeab8f",
        loadingWrapper: "loadingWrapper_eeab8f",
      };
    },
    261774: function (e, n, t) {
      e.exports = {
        bodyText: "bodyText_f875f7",
        planSelectText: "planSelectText_f875f7",
        planSelectRow: "planSelectRow_f875f7",
        planSelectorWrapper: "planSelectorWrapper_f875f7",
        planSelectorLabel: "planSelectorLabel_f875f7",
        planSelectorPreviewPrice: "planSelectorPreviewPrice_f875f7",
        planSelectDivider: "planSelectDivider_f875f7",
        planSelectorSubtotal: "planSelectorSubtotal_f875f7",
        paymentSourceWrapper: "paymentSourceWrapper_f875f7",
        confirmationContainer: "confirmationContainer_f875f7",
        confirmationAnimation: "confirmationAnimation_f875f7",
        confirmationUpgradedBanner: "confirmationUpgradedBanner_f875f7",
        confirmationText: "confirmationText_f875f7",
        existingSlotNotice: "existingSlotNotice_f875f7",
        existingSlotIcon: "existingSlotIcon_f875f7",
        existingSlotTooltipWarningIcon: "existingSlotTooltipWarningIcon_f875f7",
        loadingSpinner: "loadingSpinner_f875f7",
        reverseTrialContextInfoDivider: "reverseTrialContextInfoDivider_f875f7",
        reverseTrialContextText: "reverseTrialContextText_f875f7",
        reverseTrialContextMarginBottom:
          "reverseTrialContextMarginBottom_f875f7",
      };
    },
    75115: function (e, n, t) {
      e.exports = {
        content: "content_cf948e",
        closeButton: "closeButton_cf948e",
        upsellImage: "upsellImage_cf948e",
        upsellImageWithTrialOffer: "upsellImageWithTrialOffer_cf948e",
        premiumTrialBadge: "premiumTrialBadge_cf948e",
        bodyText: "bodyText_cf948e",
        perksList: "perksList_cf948e",
        perkIconGuild: "perkIconGuild_cf948e",
        perkIconUpload: "perkIconUpload_cf948e",
        perkIconStream: "perkIconStream_cf948e",
        perkIconChatPerks: "perkIconChatPerks_cf948e",
        backStep: "backStep_cf948e",
        footerRight: "footerRight_cf948e",
      };
    },
    297908: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    638635: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    130298: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    83615: function (e, n, t) {
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
    103581: function (e, n, t) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    378145: function (e, n, t) {
      e.exports = {
        upsellFooter: "upsellFooter_a26a1a",
        upsellFooterIcon: "upsellFooterIcon_a26a1a",
        reverseTrialUpsellContainer: "reverseTrialUpsellContainer_a26a1a",
        unlockIcon: "unlockIcon_a26a1a",
        upsellText: "upsellText_a26a1a",
      };
    },
    524994: function (e, n, t) {
      e.exports = {
        perkRow: "perkRow_a899f7",
        perkIconContainer: "perkIconContainer_a899f7",
        perkIcon: "perkIcon_a899f7",
        perkDescription: "perkDescription_a899f7",
      };
    },
  },
]);
//# sourceMappingURL=f597cf11928eb4309cd6.js.map
