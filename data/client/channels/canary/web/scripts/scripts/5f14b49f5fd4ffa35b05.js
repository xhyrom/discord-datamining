"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48583"],
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
      var o = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        i = t(772848),
        a = t(841261);
      let s = (0, i.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: r = !1 } = e;
        return (0, o.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l()(a.button, t, { [a.open]: n, [a.withHighlight]: r }),
          children: [
            r &&
              (0, o.jsx)("defs", {
                children: (0, o.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, o.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, o.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, o.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, o.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, o.jsx)("path", {
                  stroke: r ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, o.jsx)("path", {
                  stroke: r ? "url(#".concat(s, ")") : "currentColor",
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
      var o = t(626135),
        r = t(91641),
        l = t(959784),
        i = t(987338),
        a = t(981631);
      let s = new r.E(
        [l.NR, l.ZI, l.Ob, l.uc, l.m1],
        i.$P.PAYMENT_FLOW_STARTED,
        { location: "payment flow started" },
      );
      function c(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), s.trigger();
      }
    },
    959784: function (e, n, t) {
      t.d(n, {
        NR: function () {
          return l;
        },
        Ob: function () {
          return s;
        },
        ZI: function () {
          return i;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return a;
        },
      });
      var o = t(987170),
        r = t(987338);
      let l = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_vanilla",
          label: "CTP payment flow started - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        i = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_filters_",
          label: "CTP payment flow started - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        a = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_multiple_buckets",
          label: "CTP payment flow started - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        s = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_everyone",
          label: "CTP payment flow started - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        c = (0, o.Z)({
          kind: "user",
          id: "2024-07_ctp_payment_flow_started_uneven_buckets_",
          label: "CTP payment flow started - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
        v: function () {
          return S;
        },
      }),
        t(47120);
      var o,
        r,
        l,
        i = t(200651),
        a = t(192379),
        s = t(120356),
        c = t.n(s),
        u = t(569619),
        d = t(481060),
        p = t(981631),
        f = t(689938),
        _ = t(404934);
      function m(e, n, t) {
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
      ((l = o || (o = {})).TOP = "top"), (l.BOTTOM = "bottom");
      let S = {
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
          let { isDisabled: t, menuIsOpen: o } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: o ? "4px 4px 0 0" : "4px",
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
          let { isSelected: t, isFocused: o } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : o
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
      class E extends (r = a.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: o,
              valueRenderer: r,
              optionRenderer: l,
              multiValueRenderer: a,
              options: s,
              value: p,
              autofocus: m,
              disabled: E,
              clearable: h,
              searchable: g,
              styleOverrides: I,
              isMulti: T,
              placeholder: P,
              filterOption: M,
              closeMenuOnSelect: C = !0,
              ...b
            } = this.props,
            x = { ...b };
          null != m && (x.autoFocus = m),
            null != E && (x.isDisabled = E),
            null != h && (x.isClearable = h),
            null != g && (x.isSearchable = g);
          let v = { IndicatorSeparator: () => null };
          null != l &&
            (v.Option = (e) =>
              (0, i.jsx)(u.wx.Option, { ...e, children: l(e.data) })),
            null != r &&
              (v.SingleValue = (e) =>
                (0, i.jsx)(u.wx.SingleValue, { ...e, children: r(e.data) })),
            null != a && (v.MultiValue = (e) => a(e.data));
          if (T && Array.isArray(p)) {
            let n = {};
            s.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = p.map((e) => n[String(e)]));
          } else e = null != p ? s.find((e) => e.value === p) : null;
          return (0, i.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)("div", {
              className: c()(_.select, n, { [_.error]: null != o }),
              ref: this._containerRef,
              children: [
                (0, i.jsx)(u.ZP, {
                  ...x,
                  className: t,
                  ref: this._selectRef,
                  isMulti: T,
                  components: v,
                  options: s,
                  styles: null != I ? I : S,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: C,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != P ? P : f.Z.Messages.SELECT,
                  noOptionsMessage: () => f.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: M,
                }),
                null != o
                  ? (0, i.jsx)("div", {
                      className: _.errorMessage,
                      children: o,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "_selectRef", a.createRef()),
            m(this, "_containerRef", a.createRef()),
            m(this, "state", { isFocused: !1, isOpen: !1 }),
            m(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            m(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            m(this, "handleKeyDown", (e) => {
              e.which === p.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            m(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            m(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      m(E, "MenuPlacements", o);
    },
    518062: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var o = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        i = t(607070),
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
          _ = (0, r.e7)([i.Z], () => i.Z.useReducedMotion);
        return (0, o.jsxs)(l.ModalHeader, {
          align: a.Z.Align.START,
          className: u.header,
          separator: !1,
          children: [
            (0, o.jsx)(c.fe, {
              className: u.animation,
              nextScene: p,
              onScenePlay: (e) => f(c.fe.getNextScene(e)),
              pauseWhileUnfocused: !1,
              pause: _,
            }),
            (0, o.jsx)("div", { className: u.headerTitle }),
            (0, o.jsx)(l.ModalCloseButton, {
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
            return eo;
          },
        }),
        t(47120);
      var o,
        r = t(200651),
        l = t(192379),
        i = t(512722),
        a = t.n(i),
        s = t(75124),
        c = t(252759),
        u = t(772848),
        d = t(442837),
        p = t(780384),
        f = t(481060),
        _ = t(355467),
        m = t(179360),
        S = t(723484),
        E = t(330726),
        h = t(100527),
        g = t(906732),
        I = t(15640),
        T = t(89057),
        P = t(600164),
        M = t(232127),
        C = t(598),
        b = t(409813),
        x = t(45572),
        v = t(98278),
        N = t(431369),
        R = t(176919),
        A = t(3409),
        y = t(185139),
        L = t(210887),
        k = t(430824),
        O = t(314884),
        U = t(975060),
        D = t(853872),
        B = t(509545),
        Z = t(78839),
        j = t(626135),
        w = t(267642),
        F = t(74538),
        G = t(212895),
        W = t(296848),
        Y = t(518062),
        H = t(4434),
        V = t(333451),
        K = t(981631),
        X = t(474936),
        z = t(231338),
        $ = t(689938),
        q = t(312094);
      (o || (o = {})).PREMIUM = "discord://app/settings/nitro";
      let J = X.Xh.NONE_MONTH,
        Q = [b.h8.PLAN_SELECT, b.h8.REVIEW, b.h8.CONFIRM],
        ee = [
          b.h8.PLAN_SELECT,
          b.h8.ADD_PAYMENT_STEPS,
          b.h8.REVIEW,
          b.h8.CONFIRM,
        ];
      async function en(e) {
        await (0, m.X8)();
        let n = (0, w.vx)(O.Z.boostSlots);
        return (0, m.W3)(
          e,
          n.map((e) => e.id),
        );
      }
      function et(e) {
        let n,
          {
            transitionState: t,
            onClose: o,
            closeGuildPerksModal: i,
            analyticsLocations: m,
            analyticsLocation: et,
            analyticsSourceLocation: eo,
            guildId: er,
            onSubscribeComplete: el,
            totalNumberOfSlotsToAssign: ei = 1,
            disablePremiumUpsell: ea = !1,
            onSubscriptionConfirmation: es,
            applicationId: ec,
          } = e,
          { activeSubscription: eu, blockedPayments: ed } = (0,
          C.usePaymentContext)(),
          ep = (0, d.e7)([Z.ZP], () => Z.ZP.hasFetchedSubscriptions()),
          ef = null != eu ? eu.paymentSourceId : null,
          e_ = (0, d.e7)([B.Z], () =>
            null != eu ? (0, W.oE)(eu.planId) : null,
          ),
          em = (0, d.e7)([B.Z], () => null == eu || null != B.Z.get(eu.planId)),
          eS = (0, d.e7)([B.Z], () => (null == e_ ? B.Z.get(J) : e_)),
          eE = (0, d.e7)([L.Z], () => L.Z.theme),
          eh = l.useRef((0, w.vx)(O.Z.boostSlots)).current,
          eg = (0, d.e7)([D.Z], () => D.Z.defaultPaymentSourceId),
          eI = (0, A.fL)(null != ef ? ef : ep ? eg : null),
          {
            paymentSources: eT,
            setPurchaseError: eP,
            paymentSourceId: eM,
            setIsSubmittingCurrentStep: eC,
            paymentAuthenticationState: eb,
            setPaymentSourceId: ex,
            isSubmittingCurrentStep: ev,
            paymentError: eN,
            purchaseError: eR,
            purchaseErrorBlockRef: eA,
          } = eI,
          ey = Object.keys(eT).length > 0,
          [eL, ek] = l.useState(ei - eh.length),
          [eO, eU] = l.useState(!1),
          eD = (0, d.e7)([U.Z], () => U.Z.popupCallbackCalled),
          eB = (0, I.V)(),
          eZ = l.useMemo(
            () =>
              null != eu && em && eB
                ? (0, N.g)(eu, eL)
                : [{ planId: X.Xh.PREMIUM_MONTH_GUILD, quantity: eL }],
            [eu, em, eL, eB],
          ),
          [ej, ew] = (0, s.Z)(() => [(0, u.Z)(), Date.now()]),
          { analyticsLocations: eF } = (0, g.ZP)(
            m,
            h.Z.GUILD_BOOST_PURCHASE_MODAL,
          ),
          eG = l.useMemo(() => {
            var e, n;
            return {
              load_id: ej,
              payment_type: z.Zu[z.GZ.SUBSCRIPTION],
              sku_id: X.Si.GUILD,
              subscription_type: K.NYc.PREMIUM,
              subscription_plan_id:
                null !==
                  (n =
                    null ===
                      (e = eZ.find((e) => {
                        let { planId: n } = e;
                        return X.Z1.has(n);
                      })) || void 0 === e
                      ? void 0
                      : e.planId) && void 0 !== n
                  ? n
                  : X.Xh.PREMIUM_MONTH_GUILD,
              quantity: eL,
              location: et,
              source: eo,
              location_stack: eF,
            };
          }, [ej, et, eF, eo, eZ, eL]);
        l.useEffect(() => {
          (0, G.i1)(eM);
        }, [eM]),
          l.useEffect(() => {
            (async () => {
              if (!0 === eD)
                try {
                  if (null == U.Z.redirectedPaymentId) return;
                  await (0, _.OP)(U.Z.redirectedPaymentId),
                    eJ(b.h8.CONFIRM),
                    eX(x.A.COMPLETED),
                    null != er && (await en(er)),
                    null != el && el();
                } catch (e) {
                  eX(x.A.FAIL),
                    eP(e),
                    j.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
                      ...eG,
                      payment_error_code: null == e ? void 0 : e.code,
                      payment_gateway: K.gg$.STRIPE,
                      payment_source_id: eM,
                      duration_ms: Date.now() - ew,
                    });
                } finally {
                  eC(!1), (0, _.K2)();
                }
            })();
          }, [eD]),
          l.useEffect(() => {
            !Z.ZP.hasFetchedSubscriptions() && (0, _.jg)(),
              (0, M.U)({ ...eG, guild_id: er, application_id: ec }),
              null != eu &&
                null != eu.renewalMutations &&
                j.default.track(K.rMx.PREMIUM_GUILD_PENDING_MODAL, {
                  location: et,
                  guild_id: er,
                });
          }, []);
        let [eW, eY] = l.useState(Q),
          [eH, eV] = l.useState(b.h8.PLAN_SELECT),
          [eK, eX] = l.useState(x.A.WAITING),
          [ez, e$] = l.useState(!0),
          eq = (0, c.Z)(() => Date.now(), [eH]),
          eJ = l.useCallback(
            (e, n) => {
              eV(e), eP(null);
              let t = Date.now();
              j.default.track(K.rMx.PAYMENT_FLOW_STEP, {
                ...eG,
                from_step: null != n ? n : eH,
                to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                step_duration_ms: t - eq,
                flow_duration_ms: t - ew,
                guild_id: er,
                application_id: ec,
              });
            },
            [eP, eG, eH, eq, ew, er, ec],
          ),
          eQ = () => {
            o(eK === x.A.COMPLETED);
          },
          e0 = null != eu && eu.isPurchasedExternally;
        l.useEffect(() => {
          eb !== R.wr.PENDING &&
            eH !== b.h8.CONFIRM &&
            null != ef &&
            (eW !== Q && eY(Q),
            !Q.includes(eH) && eH !== b.h8.PREMIUM_UPSELL && eJ(b.h8.REVIEW)),
            eH === b.h8.ADD_PAYMENT_STEPS && eW !== ee && eY(ee),
            e0 && eH !== b.h8.PLAN_SELECT && eV(b.h8.PLAN_SELECT);
        }, [eH, eJ, e0, eb, eu, ef, eW]),
          (0, R.bp)(eH, eb, eJ, eX),
          (0, b.dZ)(eH, eK, eX);
        let e1 = l.useRef(null),
          [e8, e2] = (0, E.Z)(!1, 500),
          [e7, e9] = l.useState(null),
          [e4, e5] = l.useState([]),
          [e6, e3] = l.useState(!1);
        l.useEffect(() => {
          let e;
          if (!!eB)
            null != B.Z.get(X.Xh.PREMIUM_MONTH_GUILD) &&
              e5((e = (0, G.DE)(X.Xh.PREMIUM_MONTH_GUILD, eM, !1))),
              null == eM && null != eu && null != eu.paymentSourceId
                ? e9(eu.currency)
                : null != e && e9(e[0]);
        }, [eM, eu, eB, JSON.stringify(e4)]);
        let ne = (0, A.vP)({
          paymentModalArgs: eI,
          initialStep: b.h8.PAYMENT_TYPE,
          prependSteps: [b.h8.PLAN_SELECT],
          appendSteps: [b.h8.REVIEW, b.h8.CONFIRM],
          breadcrumpSteps: eW,
          currentBreadcrumpStep: eH,
          onReturn: () => {
            eJ(
              Object.values(eT).length < 1 ? b.h8.PLAN_SELECT : b.h8.REVIEW,
              b.h8.PAYMENT_TYPE,
            );
          },
          onComplete: (e) => {
            eJ(b.h8.REVIEW, e);
          },
          onStepChange: (e) => {
            let { currentStep: n, toStep: t } = e,
              o = Date.now();
            j.default.track(K.rMx.PAYMENT_FLOW_STEP, {
              ...eG,
              from_step: n,
              to_step: t,
              step_duration_ms: o - eq,
              flow_duration_ms: o - ew,
              guild_id: er,
            });
          },
        });
        if (ed) n = (0, r.jsx)(T.Vq, { onClose: eQ });
        else if (ep && em && eB && null != e7 && "" !== e7) {
          if (null == eu ? void 0 : eu.isPausedOrPausePending)
            n = (0, r.jsx)(f.ModalContent, {
              children: (0, r.jsx)("p", {
                className: q.copy,
                children:
                  $.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION,
              }),
            });
          else if (null != eu && null != eu.renewalMutations)
            n = (0, r.jsx)(f.ModalContent, {
              children: (0, r.jsx)("p", {
                className: q.copy,
                children:
                  $.Z.Messages
                    .PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION,
              }),
            });
          else if (eH === b.h8.PREMIUM_UPSELL) {
            a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
              a()(e7, "Currency not defined");
            let e =
              null != eM
                ? { paymentSourceId: eM, currency: e7 }
                : { currency: e7 };
            n = (0, r.jsx)(V.Z, {
              premiumSubscriptionPlan: eS,
              analyticsLocation: et,
              analyticsSourceLocation: eo,
              onClose: eQ,
              onBack: () => eJ(b.h8.PLAN_SELECT),
              onSkip: () =>
                eJ(null != ef || ey ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS),
              onSubscriptionConfirmation: es,
              priceOptions: e,
            });
          } else {
            let e, t, o, l;
            a()(e7, "Currency not defined");
            let s =
              null != eM
                ? { paymentSourceId: eM, currency: e7 }
                : { currency: e7 };
            switch (eH) {
              case b.h8.PLAN_SELECT:
                a()(null != er, "Missing guildId"),
                  a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, r.jsx)(H.CP, {
                    premiumSubscriptionPlan: eS,
                    numGuildBoosts: eL,
                    setNumGuildBoosts: ek,
                    setForceDisableSubmitButton: e$,
                    premiumSubscription: eu,
                    existingAvailableSlots: eh,
                    onClickPremiumSubscriptionLink: () => {
                      if (__BILLING_STANDALONE__) {
                        window.location.href = "discord://app/settings/nitro";
                        return;
                      }
                      eQ(), null != i && i(), (0, v.z)();
                    },
                    guildId: er,
                    priceOptions: s,
                  })),
                  e0 &&
                    null != eu &&
                    null != eu.paymentGateway &&
                    (e = (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(f.FormErrorBlock, {
                          className: q.externalErrorBlock,
                          children:
                            $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format(
                              { paymentGatewayName: z.Vz[eu.paymentGateway] },
                            ),
                        }),
                        e,
                      ],
                    })),
                  (o = (0, r.jsx)(f.Button, {
                    look: f.Button.Looks.LINK,
                    color: (0, p.ap)(eE)
                      ? f.Button.Colors.PRIMARY
                      : f.Button.Colors.WHITE,
                    onClick: eQ,
                    children: $.Z.Messages.NEVERMIND,
                  })),
                  (l = (0, r.jsx)(f.Button, {
                    type: "submit",
                    disabled: ez || 0 === eL || e0,
                    onClick: () => {
                      if (
                        !ea &&
                        (null == e_ ||
                          e_.premiumSubscriptionType !== X.p9.TIER_2)
                      ) {
                        eJ(b.h8.PREMIUM_UPSELL);
                        return;
                      }
                      eJ(
                        null != ef || ey ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS,
                      );
                    },
                    children: $.Z.Messages.CONTINUE,
                  }));
                break;
              case b.h8.ADD_PAYMENT_STEPS:
                break;
              case b.h8.AWAITING_AUTHENTICATION:
                e = (0, r.jsx)(S.F, { className: q.__invalid_body });
                break;
              case b.h8.REVIEW:
                a()(null != eS, "Missing nextPremiumSubscriptionPlan"),
                  (e = (0, r.jsx)(H.Gq, {
                    paymentSources: eT,
                    priceOptions: s,
                    currentPremiumSubscription: eu,
                    premiumSubscriptionPaymentSourceId: ef,
                    premiumSubscriptionPlan: eS,
                    newAdditionalPlans: eZ,
                    onPaymentSourceChange: (e) => ex(null != e ? e.id : null),
                    onPaymentSourceAdd: () => {
                      eJ(b.h8.ADD_PAYMENT_STEPS), ex(null);
                    },
                    onPurchaseTermsChange: eU,
                    legalTermsNodeRef: e1,
                    hasLegalTermsFlash: e8,
                  })),
                  (t = b.h8.PLAN_SELECT),
                  (l = eO
                    ? (0, r.jsx)(f.Button, {
                        color: f.Button.Colors.GREEN,
                        type: "submit",
                        submitting: ev,
                        onClick: async () => {
                          a()(null != eZ, "Missing newAdditionalPlans");
                          let e = null != eM ? eT[eM] : null;
                          eP(null);
                          try {
                            if (
                              (eX(x.A.PURCHASING),
                              eC(!0),
                              a()(null != eM, "Missing paymentSourceId"),
                              j.default.track(K.rMx.PAYMENT_FLOW_COMPLETED, {
                                ...eG,
                                duration_ms: Date.now() - ew,
                                guild_id: er,
                                application_id: ec,
                              }),
                              e6)
                            )
                              return;
                            if (null == eu || null == e_) {
                              a()(null != e, "Missing paymentSource");
                              let n = await (0, _.XW)({
                                items: eZ,
                                paymentSource: e,
                                currency: s.currency,
                              });
                              if (n.redirectConfirmation) {
                                e3(null != n.redirectURL);
                                return;
                              }
                            } else {
                              let n = { items: (0, F.MY)(eu, eZ) };
                              (n.currency = eu.currency),
                                null == n.currency && (n.currency = s.currency),
                                (n.paymentSource =
                                  null != ef ? eT[ef] : void 0),
                                null == n.paymentSource &&
                                  (a()(null != e, "Missing paymentSource"),
                                  (n.paymentSource = e),
                                  (n.currency = s.currency));
                              let t = await (0, _.Mg)(eu, n, eF);
                              if (t.redirectConfirmation) {
                                e3(null != t.redirectURL);
                                return;
                              }
                            }
                            eJ(b.h8.CONFIRM),
                              eX(x.A.COMPLETED),
                              null != er && (await en(er)),
                              null != el && el();
                          } catch (n) {
                            eX(x.A.FAIL),
                              eP(n),
                              j.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
                                ...eG,
                                payment_error_code: null == n ? void 0 : n.code,
                                payment_gateway:
                                  null != e
                                    ? e.type === K.HeQ.CARD
                                      ? K.gg$.STRIPE
                                      : K.gg$.BRAINTREE
                                    : null,
                                payment_source_id: eM,
                                duration_ms: Date.now() - ew,
                              });
                          } finally {
                            !e6 && eC(!1);
                          }
                        },
                        children:
                          $.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT,
                      })
                    : (0, r.jsx)(f.Tooltip, {
                        text: $.Z.Messages
                          .BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                        children: (e) =>
                          (0, r.jsx)(f.Button, {
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
                            children:
                              $.Z.Messages
                                .GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT,
                          }),
                      }));
                break;
              case b.h8.CONFIRM:
                var nn;
                let c = k.Z.getGuild(er);
                e = (0, r.jsx)(H.R7, {
                  guild: c,
                  guildBoostQuantity: eL + eh.length,
                  onClose: eQ,
                  withAnimation: !1,
                  paymentSourceType:
                    null === (nn = eT[null != eM ? eM : ""]) || void 0 === nn
                      ? void 0
                      : nn.type,
                });
            }
            let u = null != eN && null == (0, b.ly)(eN) ? eN : eR;
            n =
              eH === b.h8.ADD_PAYMENT_STEPS
                ? ne
                : (0, r.jsx)(y.Z, {
                    hideBreadcrumbs: eH === b.h8.CONFIRM,
                    steps: eW,
                    currentStep: eH,
                    paymentError: u,
                    purchaseErrorBlockRef: eA,
                    hasCurrencies: e4.length > 1,
                    body: e,
                    footer:
                      eH !== b.h8.CONFIRM
                        ? (0, r.jsxs)(f.ModalFooter, {
                            direction: P.Z.Direction.HORIZONTAL,
                            align: P.Z.Align.CENTER,
                            justify: P.Z.Justify.END,
                            children: [
                              null != t
                                ? (0, r.jsx)("div", {
                                    className: q.backStep,
                                    children: (0, r.jsx)(f.Button, {
                                      color: (0, p.ap)(eE)
                                        ? f.Button.Colors.PRIMARY
                                        : f.Button.Colors.WHITE,
                                      look: f.Button.Looks.LINK,
                                      size: f.Button.Sizes.NONE,
                                      onClick: () => {
                                        null != t && eJ(t);
                                      },
                                      children: $.Z.Messages.BACK,
                                    }),
                                  })
                                : null,
                              (0, r.jsxs)("div", {
                                className: q.footerRight,
                                children: [o, l],
                              }),
                            ],
                          })
                        : null,
                  });
          }
        } else
          n = (0, r.jsx)("div", {
            className: q.loadingWrapper,
            children: (0, r.jsx)(f.Spinner, {}),
          });
        let nt = null;
        return (
          !ed &&
            eH !== b.h8.PREMIUM_UPSELL &&
            (nt = (0, r.jsx)(Y.Z, {
              onClose: eQ,
              currentStep: eH,
              purchaseState: eK,
            })),
          (0, r.jsxs)(f.ModalRoot, { transitionState: t, children: [nt, n] })
        );
      }
      function eo(e) {
        let n = (0, d.e7)([Z.ZP], () => Z.ZP.getPremiumTypeSubscription()),
          { analyticsLocations: t } = (0, g.ZP)(h.Z.GUILD_BOOST_PURCHASE_MODAL);
        return (0, r.jsx)(g.Gt, {
          value: t,
          children: (0, r.jsx)(C.PaymentContextProvider, {
            activeSubscription: n,
            stepConfigs: [],
            skuIDs: [],
            children: (0, r.jsx)(et, { ...e }),
          }),
        });
      }
    },
    333451: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var o = t(200651),
        r = t(192379),
        l = t(120356),
        i = t.n(l),
        a = t(442837),
        s = t(780384),
        c = t(481060),
        u = t(100527),
        d = t(906732),
        p = t(600164),
        f = t(963249),
        _ = t(639119),
        m = t(165583),
        S = t(263954),
        E = t(706454),
        h = t(709586),
        g = t(626135),
        I = t(930153),
        T = t(74538),
        P = t(937615),
        M = t(981631),
        C = t(474936),
        b = t(689938),
        x = t(75115);
      function v(e) {
        let { shouldUpsellFromNoneTier: n } = e,
          t = (0, a.e7)([E.default], () => E.default.locale);
        return (0, o.jsxs)("div", {
          className: x.perksList,
          children: [
            (0, o.jsx)(S.Z, {
              icon: h.Z,
              iconClassName: x.perkIconGuild,
              description:
                b.Z.Messages.PREMIUM_UPSELL_FEATURE_FREE_GUILD_SUBSCRIPTION.format(
                  { numFreeGuildSubscriptions: C.cb },
                ),
            }),
            (0, o.jsx)(S.Z, {
              icon: h.Z,
              iconClassName: x.perkIconGuild,
              description:
                b.Z.Messages.PREMIUM_UPSELL_FEATURE_GUILD_SUBSCRIPTION_DISCOUNT.format(
                  { percent: (0, I.T3)(t, C.Rr / 100) },
                ),
            }),
            n
              ? (0, o.jsx)(S.Z, {
                  icon: c.ReactionIcon,
                  iconClassName: x.perkIconChatPerks,
                  description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_CHAT_PERKS,
                })
              : null,
            (0, o.jsx)(S.Z, {
              icon: c.ScreenArrowIcon,
              iconClassName: x.perkIconStream,
              description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_STREAM,
            }),
            (0, o.jsx)(S.Z, {
              icon: c.UploadIcon,
              iconClassName: x.perkIconUpload,
              description: b.Z.Messages.PREMIUM_UPSELL_FEATURE_UPLOAD,
            }),
          ],
        });
      }
      function N(e) {
        var n;
        let {
            premiumSubscriptionPlan: t,
            onClose: l,
            onBack: a,
            onSkip: S,
            onSubscriptionConfirmation: E,
            analyticsLocation: h,
            analyticsSourceLocation: I,
            priceOptions: N,
          } = e,
          { analyticsLocations: R, sourceAnalyticsLocations: A } = (0, d.ZP)(
            u.Z.GUILD_BOOSTING_PREMIUM_UPSELL,
          ),
          { theme: y } = (0, c.useThemeContext)(),
          L = (0, s.ap)(y) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
          k = null == t || null == t.premiumSubscriptionType,
          O = T.ZP.getPrice(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, N),
          U = (0, P.T4)(O.amount, O.currency),
          D = (0, _.N)(),
          B = null == D ? void 0 : D.trial_id,
          Z =
            (null == D
              ? void 0
              : null === (n = D.subscription_trial) || void 0 === n
                ? void 0
                : n.sku_id) === C.Si.TIER_2;
        return (
          r.useEffect(() => {
            g.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
              type: C.cd.GUILD_PREMIUM_UPSELL_MODAL,
              location_stack: A,
            });
          }, [A]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(c.ModalContent, {
                className: x.content,
                children: [
                  (0, o.jsx)(c.ModalCloseButton, {
                    onClick: l,
                    className: x.closeButton,
                  }),
                  Z && (0, o.jsx)(m.dz, { className: x.premiumTrialBadge }),
                  (0, o.jsx)("div", {
                    className: i()(x.upsellImage, {
                      [x.upsellImageWithTrialOffer]: Z,
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: x.bodyText,
                    children:
                      null != B
                        ? b.Z.Messages
                            .PREMIUM_UPSELL_FEATURE_PRETEXT_TRIAL_VARIANT
                        : b.Z.Messages.PREMIUM_UPSELL_FEATURE_PRETEXT.format({
                            monthlyPrice: U,
                          }),
                  }),
                  (0, o.jsx)(v, { shouldUpsellFromNoneTier: k }),
                ],
              }),
              (0, o.jsxs)(c.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.END,
                children: [
                  (0, o.jsxs)("div", {
                    className: x.footerRight,
                    children: [
                      (0, o.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: L,
                        onClick: S,
                        children:
                          b.Z.Messages.PREMIUM_UPSELL_CONTINUE_TO_BOOSTS,
                      }),
                      (0, o.jsx)(c.Button, {
                        color: c.Button.Colors.GREEN,
                        type: "submit",
                        onClick: () => {
                          l(),
                            (0, f.Z)({
                              initialPlanId: null,
                              subscriptionTier: C.Si.TIER_2,
                              analyticsLocations: R,
                              analyticsObject: {
                                ...h,
                                section: M.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                              },
                              analyticsSourceLocation: I,
                              onSubscriptionConfirmation: E,
                              trialId: B,
                            });
                        },
                        children:
                          null != B
                            ? b.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                            : b.Z.Messages.PREMIUM_UPSELL_UPGRADE,
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: x.backStep,
                    children: (0, o.jsx)(c.Button, {
                      color: L,
                      look: c.Button.Looks.LINK,
                      size: c.Button.Sizes.NONE,
                      onClick: () => a(),
                      children: b.Z.Messages.BACK,
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
          return g;
        },
        wD: function () {
          return E;
        },
      }),
        t(47120);
      var o = t(200651),
        r = t(192379),
        l = t(479446),
        i = t(646476),
        a = t(599659),
        s = t(155491),
        c = t(975104),
        u = t(669079),
        d = t(598),
        p = t(474936),
        f = t(689938);
      let _ = p.Cj.STANDARD_BOX,
        m = void 0,
        [S, E, h] = (0, c.Z)();
      function g(e) {
        let {
            isGift: n = !1,
            giftRecipient: t,
            giftMessage: c,
            giftStyle: E,
            children: h,
          } = e,
          { selectedSkuId: g } = (0, d.usePaymentContext)(),
          [I, T] = r.useState(t),
          [P, M] = r.useState(),
          [C, b] = r.useState(!1),
          x = (0, u.pO)(I),
          v = (0, i.rK)(),
          { enabled: N } = i.ZP.useExperiment(
            { location: "PaymentContextProvider" },
            { autoTrackExposure: x && v },
          ),
          { enabled: R } = a.O.useExperiment({ location: "gift card" }),
          A = m;
        x &&
          ((A = N && v ? p.Cj.SEASONAL_STANDARD_BOX : null != E ? E : _),
          R && (A = p.Cj.NITROWEEN_STANDARD));
        let [y, L] = r.useState(A),
          [k, O] = r.useState(
            n &&
              (0, u.MY)(I) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD &&
              null == c
              ? f.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE
              : c,
          ),
          [U, D] = r.useState(void 0),
          [B, Z] = r.useState(void 0),
          j = (0, u.E5)(g, n),
          [w, F] = r.useState(!1),
          [G, W] = r.useState(!1),
          [Y, H] = r.useState(),
          V = r.useCallback(
            (e) => {
              let { onSubscriptionConfirmation: n } = e;
              return (
                W(!0),
                (0, l.YD)(I, j)
                  .then(() => {
                    W(!1), null == n || n(), F(!0);
                  })
                  .catch((e) => {
                    W(!1), H(e), F(!0);
                  })
              );
            },
            [I, j, W, F, H],
          ),
          K = (0, s.x8)();
        return (0, o.jsx)(S.Provider, {
          value: {
            isGift: n,
            giftCode: j,
            giftMessage: c,
            giftRecipient: I,
            setGiftRecipient: T,
            giftRecipientError: P,
            setGiftRecipientError: M,
            validatingGiftRecipient: C,
            setValidatingGiftRecipient: b,
            soundEffect: U,
            setSoundEffect: D,
            emojiConfetti: B,
            setEmojiConfetti: Z,
            customGiftMessage: k,
            setCustomGiftMessage: O,
            selectedGiftStyle: y,
            setSelectedGiftStyle: L,
            sendGiftMessage: V,
            hasSentMessage: w,
            isSendingMessage: G,
            giftMessageError: Y,
            alreadyHasHalloweenDeco: K,
          },
          children: h,
        });
      }
    },
    586585: function (e, n, t) {
      t.d(n, {
        g: function () {
          return r;
        },
      });
      var o,
        r,
        l = t(200651);
      t(192379);
      var i = t(481060),
        a = t(600164),
        s = t(612853),
        c = t(689938),
        u = t(297908);
      ((o = r || (r = {}))[(o.CONTINUE = 0)] = "CONTINUE"),
        (o[(o.UPGRADE = 1)] = "UPGRADE"),
        (o[(o.PURCHASE = 2)] = "PURCHASE");
      let d = (e) => {
        let {
          onBack: n,
          backText: t,
          primaryIcon: o,
          primaryCTA: r,
          primaryType: d,
          primaryText: p,
          primaryTooltip: f,
          primaryDisabled: _,
          primarySubmitting: m,
          onPrimary: S,
          secondaryText: E,
          onSecondary: h,
        } = e;
        return (0, l.jsxs)(i.ModalFooter, {
          justify: a.Z.Justify.BETWEEN,
          align: a.Z.Align.CENTER,
          children: [
            (() => {
              if (null == r || null == p) return null;
              let e = 2 === r ? i.ShinyButton : i.Button,
                n = {
                  innerClassName: u.button,
                  type: d,
                  disabled: _,
                  submitting: m,
                  color:
                    0 === r ? i.Button.Colors.BRAND : i.Button.Colors.GREEN,
                  onClick: S,
                };
              return null != f
                ? (0, l.jsx)(i.Tooltip, {
                    text: f,
                    children: (t) =>
                      (0, l.jsxs)(e, {
                        ...t,
                        ...n,
                        children: [
                          null == o
                            ? null
                            : (0, l.jsx)(o, {
                                color: "currentColor",
                                className: u.primaryIcon,
                              }),
                          p,
                        ],
                      }),
                  })
                : (0, l.jsxs)(e, {
                    ...n,
                    children: [
                      null == o
                        ? null
                        : (0, l.jsx)(o, {
                            color: "currentColor",
                            className: u.primaryIcon,
                          }),
                      p,
                    ],
                  });
            })(),
            null == E
              ? null
              : (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.PRIMARY,
                  look: i.Button.Looks.LINK,
                  onClick: h,
                  children: E,
                }),
            (0, l.jsx)(s.Z, {}),
            null == n
              ? null
              : (0, l.jsx)(i.Button, {
                  className: u.back,
                  color: i.Button.Colors.PRIMARY,
                  look: i.Button.Looks.LINK,
                  onClick: n,
                  children: null != t ? t : c.Z.Messages.BACK,
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
      var o = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        i = t(481060),
        a = t(689938),
        s = t(638635),
        c = t(739017);
      function u() {
        return (0, o.jsxs)("div", {
          className: l()(s.paymentModalLockIcon, c.flex, c.alignCenter),
          children: [
            (0, o.jsx)(i.LockIcon, {
              size: "sm",
              color: "currentColor",
              className: s.lockIcon,
            }),
            (0, o.jsx)(i.Text, {
              variant: "text-sm/medium",
              children: a.Z.Messages.BILLING_SECURE,
            }),
          ],
        });
      }
    },
    614277: function (e, n, t) {
      t.d(n, {
        C3: function () {
          return _;
        },
        O3: function () {
          return m;
        },
        ZP: function () {
          return f;
        },
      });
      var o = t(200651),
        r = t(192379),
        l = t(120356),
        i = t.n(l),
        a = t(512722),
        s = t.n(a),
        c = t(995295),
        u = t(481060),
        d = t(598),
        p = t(130298);
      function f(e) {
        var n, t, l, a, c, f;
        let {
            header: _,
            isLargeModal: m,
            stepProps: S,
          } = (function (e) {
            let { header: n, isLargeModal: t, ...o } = e;
            return { header: n, isLargeModal: t, stepProps: o };
          })(e),
          {
            step: E,
            stepConfigs: h,
            setBodyNode: g,
            setFooterNode: I,
            setModalOverlayNode: T,
            setReadySlideId: P,
          } = (0, d.usePaymentContext)(),
          M = h.find((e) => e.key === E);
        r.useEffect(() => {
          T(null);
        }, [E, T]),
          s()(null != M, "Unknown step for current payment flow.");
        let C =
            null !==
              (c =
                null == M
                  ? void 0
                  : null === (n = M.options) || void 0 === n
                    ? void 0
                    : n.hideSlider) &&
            void 0 !== c &&
            c,
          b =
            null == M
              ? void 0
              : null === (t = M.options) || void 0 === t
                ? void 0
                : t.bodyClassName,
          x =
            void 0 !== m && m
              ? p.sliderBodyLarge
              : null == M
                ? void 0
                : null === (l = M.options) || void 0 === l
                  ? void 0
                  : l.sliderBodyClassName;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            null ===
              (f =
                null == M
                  ? void 0
                  : null === (a = M.options) || void 0 === a
                    ? void 0
                    : a.renderHeader) ||
            void 0 === f ||
            f
              ? _
              : null,
            M.renderStep(S),
            null == E || C
              ? null
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(u.ModalContent, {
                      className: i()(p.body, b),
                      children: (0, o.jsx)(u.Slides, {
                        activeSlide: E,
                        centered: !1,
                        onSlideReady: (e) => P(e),
                        children: h
                          .filter((e) => null != e.key)
                          .map((e) =>
                            (0, o.jsx)(
                              u.Slide,
                              {
                                id: e.key,
                                children: (0, o.jsx)("form", {
                                  className: i()(p.sliderBody, x),
                                  ref: (e) => g(e),
                                  onSubmit: (e) => e.preventDefault(),
                                }),
                              },
                              e.key,
                            ),
                          ),
                      }),
                    }),
                    (0, o.jsx)("div", { ref: (e) => I(e) }),
                    (0, o.jsx)("div", { ref: (e) => T(e) }),
                  ],
                }),
          ],
        });
      }
      function _(e) {
        let { children: n } = e,
          { bodyNode: t } = (0, d.usePaymentContext)();
        return null == t ? null : c.createPortal(n, t);
      }
      function m(e) {
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
          return o;
        },
        YD: function () {
          return p;
        },
      }),
        t(411104);
      var o,
        r,
        l = t(512722),
        i = t.n(l),
        a = t(493683),
        s = t(904245),
        c = t(957730),
        u = t(592125),
        d = t(669079);
      ((r = o || (o = {})).ACTION = "action"),
        (r.LOOP = "loop"),
        (r.IDLE = "idle");
      let p = async (e, n) => {
          if (null == n) throw Error("giftCode must be defined");
          if (null == e) throw Error("Recipient must be defined");
          let t = await a.Z.openPrivateChannel(e.id).then((e) => {
              let n = u.Z.getChannel(e);
              if ((i()(null != n, "PrivateChannel is null"), null == n))
                throw Error("Channel must be defined");
              return n;
            }),
            o = (0, d.Nz)(n);
          return s.Z.sendMessage(t.id, c.ZP.parse(t, o), void 0, {
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
      var o = t(512722),
        r = t.n(o),
        l = t(509545),
        i = t(74538),
        a = t(474936),
        s = t(981631);
      function c(e, n) {
        let t = l.Z.get(e.planId);
        r()(null != t, "missing premium subscription plan");
        let o = l.Z.getForSkuAndInterval(
          (0, i.Wz)(a.Si.GUILD),
          t.interval,
          t.intervalCount,
        );
        r()(null != o, "missing premium guild plan");
        let c =
            null != e.renewalMutations
              ? e.renewalMutations.additionalPlans
              : e.additionalPlans,
          u = (e.status === s.O0b.CANCELED ? 0 : (0, i.uV)(c)) + n,
          d = c.filter((e) => e.planId !== o.id);
        if (u < 0) throw Error("Invalid adjustment");
        return 0 === u ? d : [...d, { planId: o.id, quantity: u }];
      }
    },
    122890: function (e, n, t) {
      t.d(n, {
        z: function () {
          return i;
        },
      }),
        t(47120);
      var o = t(192379),
        r = t(409813),
        l = t(45572);
      function i(e) {
        let {
            purchaseState: n,
            currentStep: t,
            initialScene: i,
            purchaseScene: a,
            errorScene: s,
            successScene: c,
          } = e,
          [u, d] = (0, o.useState)(i);
        return (
          (0, o.useEffect)(() => {
            n === l.A.PURCHASING ? d(a) : n === l.A.FAIL && d(s);
          }, [n, a, s]),
          (0, o.useEffect)(() => {
            t === r.h8.CONFIRM && d(c);
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
      var o = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        i = t(524994);
      function a(e) {
        let { icon: n, iconClassName: t, description: r, color: a } = e;
        return (0, o.jsxs)("div", {
          className: i.perkRow,
          children: [
            (0, o.jsx)("div", {
              className: i.perkIconContainer,
              children: (0, o.jsx)(n, {
                color: null != a ? a : "currentColor",
                className: l()(i.perkIcon, t),
              }),
            }),
            (0, o.jsx)("div", { className: i.perkDescription, children: r }),
          ],
        });
      }
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
//# sourceMappingURL=5f14b49f5fd4ffa35b05.js.map
