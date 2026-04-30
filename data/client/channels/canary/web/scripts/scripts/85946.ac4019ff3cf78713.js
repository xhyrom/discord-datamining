"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85946"],
  {
    939383(e) {
      e.exports = "/assets/5950a9b43e4e2f47.svg";
    },
    830382(e, t, n) {
      n.d(t, {
        Aj: () => T,
        EX: () => A,
        O1: () => y,
        QX: () => I,
        T3: () => N,
        XU: () => S,
        lo: () => R,
      });
      var o = n(635358),
        r = n(636537),
        a = n(228366),
        i = n(845584),
        l = n(136857),
        u = n(178253),
        s = n(323082),
        _ = n(977445),
        d = n(67480),
        C = n(739508),
        E = n(403362),
        p = n(107351),
        h = n(371794),
        c = n(652215);
      async function A(e, t, n, r) {
        if (null == d.A.get(t)) {
          a.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let i = (0, _.F)(e),
              l = {
                url: i
                  ? c.Rsh.STORE_SKU(t)
                  : c.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t),
                rejectWithError: !1,
              },
              u = {};
            n === o.g.VARIANTS_GROUP && (u.variants_return_style = n),
              r && (u.include_unpublished = !0),
              Object.keys(u).length > 0 && (l.query = u);
            let s = await (0, h.aP)(l);
            a.h.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: i ? s.body : s.body.sku,
            }),
              i ||
                a.h.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: s.body,
                });
          } catch (e) {
            throw (
              (a.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new u.A(`Failed to fetch SKU ${t}`))
            );
          }
        }
      }
      async function y(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (!(0, _.F)(e) && t)
          throw Error("this should only be used in test mode");
        let n = (
          await (0, h.aP)({
            url: c.Rsh.APPLICATION_SKUS(e),
            rejectWithError: !1,
          })
        ).body;
        return a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function I(e, t, n, o) {
        let r,
          u = { payment_source_id: n, gift: o?.isGift, currency: o?.currency };
        (0, _.F)(e) && (u.test_mode = !0),
          a.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (r = await (0, h.aP)({
            url: c.Rsh.STORE_SKU_PURCHASE(t),
            query: u,
            oldFormErrors: !0,
            rejectWithError: !1,
          })),
            a.h.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: r.body,
              checkoutSessionId: o?.loadId,
            });
        } catch (n) {
          a.h.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = n instanceof i.Ey ? n : new i.Ey(n);
          if (
            e.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
            e.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
            e.code === l.tG.INVALID_BILLING_ADDRESS
          )
            throw e;
        }
        return r;
      }
      let m = { isGift: !1 };
      async function T(e, t, n, o, l) {
        a.h.dispatch({ type: "ORDER_CREATE_START" });
        try {
          let i = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
          };
          o &&
            (i.gifting_facet = {
              is_gift: !0,
              gift_customization: {
                recipient_id: l.recipient_id,
                gift_style: l.gift_style,
                emoji_id: l.emoji_id,
                emoji_name: l.emoji_name,
                sound_id: l.sound_id,
                reward_sku_ids: l.reward_sku_ids,
                custom_message_contents: l.custom_message,
              },
            });
          let u = (
              await r.Bo.post({
                url: c.Rsh.ORDER_CREATE,
                body: i,
                rejectWithError: !1,
              })
            ).body,
            s = u.id;
          return (
            a.h.dispatch({
              type: "ORDER_CREATE_SUCCESS",
              orderId: s,
              order: u,
            }),
            s
          );
        } catch (e) {
          throw (
            (a.h.dispatch({ type: "ORDER_CREATE_FAIL" }),
            new i.Ey(`Failed to create order: ${e}`))
          );
        }
      }
      async function S(e, t, n) {
        let {
          paymentSource: o,
          expectedAmount: u,
          expectedCurrency: d,
          analyticsLoadId: h,
          isGift: A,
          giftInfoOptions: y,
          subscriptionPlanId: I,
          loadId: T,
          countryCode: S,
          orderId: R,
        } = { ...m, ...n };
        a.h.wait(() => {
          a.h.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let N = (0, _.F)(e);
        try {
          let e = {
            gift: A,
            sku_subscription_plan_id: I,
            gateway_checkout_context: await (0, C.ob)(o),
            load_id: T,
            gift_info_options: y,
          };
          if (N) e.test_mode = !0;
          else {
            if (
              null != o &&
              ((e.payment_source_id = o.id),
              (e.payment_source_token = await (0, s.jV)(o)),
              c.KcG.has(o.type))
            ) {
              let t = await (0, s.jf)(o.type);
              e.return_url =
                (0, r.TP)() +
                c.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(
                  o.type,
                  t ?? "",
                  "success",
                );
            }
            null != S && (e.country_code = S);
          }
          null != u && (e.expected_amount = u),
            null != d && (e.expected_currency = d),
            (e.purchase_token = (0, p.r)()),
            null != R && (e.order_id = R);
          let n = await r.Bo.post({
            url: c.Rsh.STORE_SKU_PURCHASE(t),
            body: e,
            context: { load_id: h },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
          return (
            a.h.dispatch({
              type: "SKU_PURCHASE_SUCCESS",
              skuId: t,
              libraryApplications:
                null != n.body.library_applications
                  ? n.body.library_applications.filter(E.Vq)
                  : [],
              entitlements: n.body.entitlements,
              appliedUserDiscounts: n.body.applied_user_discounts,
              giftCode: n.body.gift_code,
            }),
            {
              ...n.body,
              appliedUserDiscounts: n.body.applied_user_discounts,
              redirectConfirmation: !1,
            }
          );
        } catch (r) {
          let n = r instanceof i.Ey ? r : new i.Ey(r);
          if (
            ((n.code === l.tG.CONFIRMATION_REQUIRED ||
              n.code === l.tG.AUTHENTICATION_REQUIRED) &&
              a.h.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: A,
              }),
            a.h.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: n,
            }),
            n.code !== l.tG.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!r.body.payment_id)
            throw (0, s.i0)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, s.MM)(r.body, o);
        }
      }
      async function R() {
        try {
          let e = { purchase_token: (0, p.r)() };
          return {
            ...(
              await r.Bo.post({
                url: c.Rsh.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                body: e,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
            ).body,
          };
        } catch (e) {
          throw e instanceof i.Ey ? e : new i.Ey(e);
        }
      }
      function N() {
        a.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    601107(e, t, n) {
      n.d(t, { En: () => l, FZ: () => i, qf: () => a });
      var o,
        r,
        a =
          (((o = {})[(o.UNKNOWN = 0)] = "UNKNOWN"),
          (o[(o.ADMIN = 1)] = "ADMIN"),
          (o[(o.USER = 2)] = "USER"),
          (o[(o.FRACTIONAL_PREMIUM = 3)] = "FRACTIONAL_PREMIUM"),
          (o[(o.DEFERRED_START = 4)] = "DEFERRED_START"),
          (o[(o.USER_TEMPORARY_BAN = 5)] = "USER_TEMPORARY_BAN"),
          o);
      let i = { CAN_MAKE_SUBSCRIPTION_UPDATES: new Set([3, 4]) };
      var l =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.ADD_PERKS_IF_DETECTED = 1)] = "ADD_PERKS_IF_DETECTED"),
        (r[(r.FULL_RESYNC = 2)] = "FULL_RESYNC"),
        r);
    },
    916243(e, t, n) {
      n.d(t, { B: () => o });
      let o = "X-Discord-Original-MD5";
    },
    612200(e, t, n) {
      n.d(t, { IO: () => u, MP: () => _, Nk: () => s, yO: () => l });
      var o = n(228366);
      n(830215), n(976860);
      var r = n(954571),
        a = n(204925),
        i = n(652215);
      function l(e) {
        r.default.track(i.HAw.OPEN_MODAL, {
          type: "Enter Your Birthday",
          source: { section: e },
        }),
          o.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
      }
      function u(e) {
        o.h.wait(() => o.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
          void 0 !== e &&
            r.default.track(i.HAw.AGE_GATE_ACTION, {
              source: e,
              action: a.AM.AGE_GATE_CLOSE,
            });
      }
      function s(e) {
        o.h.wait(() => {
          o.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
        }),
          r.default.track(i.HAw.AGE_GATE_ACTION, {
            source: e,
            action: a.AM.AGE_GATE_SUCCESS,
          });
      }
      function _(e, t) {
        o.h.wait(() => {
          o.h.dispatch({
            type: "AGE_GATE_FAILURE_MODAL_OPEN",
            underageMessage: t,
          });
        }),
          r.default.track(i.HAw.AGE_GATE_ACTION, {
            source: e,
            action: a.AM.AGE_GATE_FAILURE,
          });
      }
    },
    721768(e, t, n) {
      n.d(t, {
        Gf: () => E,
        H2: () => h,
        WL: () => y,
        _y: () => c,
        e0: () => p,
        yL: () => A,
      });
      var o = n(284009),
        r = n.n(o),
        a = n(636537),
        i = n(228366),
        l = n(155718),
        u = n(495544),
        s = n(935208),
        _ = n(166862),
        d = n(392054),
        C = n(652215);
      function E(e) {
        let {
          channelId: t,
          command: n,
          section: o,
          location: a,
          initialValues: l,
          triggerSection: u,
          queryLength: s,
          sectionName: _,
          query: C,
          searchResultsPosition: E,
          source: p,
          commandOrigin: h,
        } = e;
        null != n &&
          r()(
            n.inputType !== d.y$.PLACEHOLDER,
            "command should not be placeholder",
          ),
          i.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: o,
            initialValues: l,
            location: a,
            triggerSection: u,
            queryLength: s,
            sectionName: _,
            query: C,
            searchResultsPosition: E,
            source: p,
            commandOrigin: h,
          });
      }
      function p(e, t) {
        i.h.dispatch({
          type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
          channelId: e,
          commandId: t,
        });
      }
      function h(e, t) {
        i.h.dispatch({
          type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
          channelId: e,
          changedOptionStates: t,
        });
      }
      function c(e, t) {
        h(
          e,
          Object.fromEntries(
            Object.entries(t).map((e) => {
              let [t, n] = e;
              return [t, { lastValidationResult: n }];
            }),
          ),
        );
      }
      function A(e, t, n, o) {
        return a.Bo.put({
          body: { permissions: o },
          url: C.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          rejectWithError: !1,
        });
      }
      function y(e, t, n) {
        r()(null != t.autocomplete, "Missing autocomplete context");
        let { query: o, name: d } = t.autocomplete,
          E = s.default.fromTimestamp(Date.now());
        null == t.channel ||
          (i.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: E,
            channelId: t.channel.id,
            query: o,
            name: d,
          }),
          null == _.A.getAutocompleteChoices(t.channel.id, d, o) &&
            a.Bo.post({
              url: C.Rsh.INTERACTIONS,
              body: {
                type: l.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                application_id: e.applicationId,
                guild_id: t.guild?.id,
                channel_id: t.channel.id,
                session_id: u.default.getSessionId(),
                data: n,
                nonce: E,
              },
              timeout: 3e3,
              rejectWithError: !0,
            }).catch(() => {
              i.h.dispatch({ type: "INTERACTION_FAILURE", nonce: E });
            }));
      }
    },
    885180(e, t, n) {
      n.d(t, { A: () => r, _: () => o });
      let o = (0, n(945810).mj)({
          name: "2025-10-payment-elements-launch",
          kind: "user",
          defaultConfig: { enabled: !1 },
          variations: { 1: { enabled: !0 } },
        }),
        r = o;
    },
    446044(e, t, n) {
      n.d(t, { Y: () => r });
      var o = n(885180);
      let r = (e) => ({ enabled: o.A.getConfig(e).enabled });
    },
    669874(e, t, n) {
      n.d(t, { j: () => s });
      var o = n(64700),
        r = n(626584),
        a = n(954571),
        i = n(38405),
        l = n(652215);
      let u = new r.A("CheckoutErrorBoundary.tsx");
      class s extends o.PureComponent {
        state = { error: null, info: null };
        componentDidCatch(e, t) {
          let {
              loadId: n,
              selectedSkuId: o,
              selectedPlanId: r,
              isGift: s,
              purchaseType: _,
              locationStack: d,
              additionalAnalyticsData: C,
            } = this.props,
            E = this.props.shouldRethrowError,
            p = {
              loadId: n,
              selectedSkuId: o,
              selectedPlanId: r,
              isGift: s,
              purchaseType: _,
              locationStack: d,
            },
            h = {
              tags: {
                app_context: "billing",
                checkout_error: "true",
                billing_context: "checkout",
                ...(E ? { crashed: "true" } : {}),
              },
              extra: { ...p, ...(C ?? {}), ...(t ?? {}) },
            };
          i.A.captureException(e, h),
            u.error("Checkout error occurred:", {
              error: e,
              additionalErrorContext: p,
            });
          let c = "string" == typeof e ? e : e.message;
          if (
            (a.default.track(l.HAw.PAYMENT_FLOW_ERROR, {
              load_id: n,
              crashed: E,
              error_message: c,
              location_stack: d ?? [],
              ...C,
            }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError &&
              this.props.onUnhandledError(e, t, h),
            this.props.shouldRethrowError)
          )
            throw e;
        }
        render() {
          return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
              ? this.props.renderCustomErrorComponent(
                  this.state.error,
                  this.state.info,
                )
              : null
            : this.props.children;
        }
      }
    },
    181447(e, t, n) {
      n.d(t, { P: () => l });
      var o = n(627968),
        r = n(64700),
        a = n(364995),
        i = n(94420);
      function l(e) {
        let { children: t } = e,
          [n] = r.useState(i.y$);
        return (0, a.aN)(n), (0, o.jsx)(i.Ni, { value: n, children: t });
      }
    },
    47671(e, t, n) {
      let o, r;
      n.d(t, { A: () => L });
      var a = n(17928),
        i = n(554146),
        l = n(228366),
        u = n(826673),
        s = n(284016),
        _ = n(973654),
        d = n(363195),
        C = n(964404),
        E = n(253932),
        p = n(617617),
        h = n(95701),
        c = n(734057),
        A = n(287809),
        y = n(927578),
        I = n(427262),
        m = n(644235),
        T = n(385803),
        S = n(185928);
      let R = !0,
        N = !1;
      function g() {
        R && (o = void 0), (N = !1);
      }
      let O = () => {
          let e = !y.Ay.canUseClientThemes(A.default.getCurrentUser());
          if (e === R) return !1;
          R = e;
        },
        P = () => {
          if (!s.A.shouldSync("appearance")) return !1;
          let e = E.eh.getSetting().backgroundGradientPresetId;
          if (null == e) {
            if (null == o) return !1;
            o = void 0;
          } else {
            let t = T.ag[e];
            if (t === o) return !1;
            o = t;
          }
        },
        M = () => {
          if (!s.A.shouldSync("appearance")) return !1;
          let e = E.eh.getSetting().backgroundGradientPresetId;
          if (
            (C.Ay.useSystemTheme === S.Q_.ON &&
              null != e &&
              (0, _.k7)(S.Q_.OFF),
            null == e)
          ) {
            null != o && (o = void 0);
            return;
          }
          let t = T.ag[e],
            n = o?.id === t?.id;
          null == t || n || (o = t);
        };
      class f extends a.Ay.PersistedStore {
        static displayName = "ClientThemesBackgroundStore";
        static persistKey = "ClientThemesBackgroundStore";
        migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
        initialize(e) {
          null != e &&
            (o =
              e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(c.A, s.A, d.A, C.Ay, p.A, A.default),
            this.syncWith([A.default], O),
            this.syncWith([s.A], P);
        }
        getState() {
          return R ? {} : { gradientPresetId: o?.id };
        }
        get gradientPreset() {
          return o;
        }
        getLinearGradient() {
          return null == this.gradientPreset
            ? null
            : (0, m.FK)(this.gradientPreset);
        }
        get isPreview() {
          return R;
        }
        get isCoachmark() {
          return N;
        }
        get mobilePendingThemeIndex() {
          return r;
        }
      }
      let L = new f(l.h, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: (e) => {
          let { presetId: t } = e;
          if (null == t) {
            o = void 0;
            return;
          }
          o = T.ag[t];
        },
        UPDATE_MOBILE_PENDING_THEME_INDEX: (e) => {
          let { mobileThemesIndex: t } = e;
          if (null == t) {
            r = void 0;
            return;
          }
          r = t;
        },
        RESET_PREVIEW_CLIENT_THEME: (e) => {
          o = void 0;
        },
        CLIENT_THEMES_EDITOR_CLOSE: g,
        CHANNEL_SELECT: (e) => {
          let { channelId: t, guildId: n } = e,
            o = A.default.getCurrentUser();
          if (
            null == t ||
            null == n ||
            (0, u.k8)(i.M.CLIENT_THEMES_COACHMARK) ||
            !(0, I.G2)(o)
          )
            return;
          let r = c.A.getChannel(t);
          null != r && (0, h.ke)(r.type) && (N = !0);
        },
        LOGOUT: g,
        CACHE_LOADED: M,
        CONNECTION_OPEN: M,
        OVERLAY_INITIALIZE: M,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: M,
        UNSYNCED_USER_SETTINGS_UPDATE: M,
        USER_SETTINGS_PROTO_UPDATE: M,
      });
    },
    11029(e, t, n) {
      n.d(t, { D: () => a });
      var o = n(228366),
        r = n(793943);
      let a = () => {
        (0, r.Jp)(), o.h.dispatch({ type: "CLIENT_THEMES_EDITOR_CLOSE" });
      };
    },
    860840(e, t, n) {
      n.d(t, { A: () => a }),
        n(508300),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var o = n(615380),
        r = n.n(o);
      class a {
        static async fromBlob(e) {
          return a.fromArrayBuffer(await e.arrayBuffer());
        }
        static fromArrayBuffer(e) {
          return r().ArrayBuffer.hash(e);
        }
        static fromDataURI(e) {
          let t = /^data:[^;]*;base64,(.*)$/.exec(e);
          if (null == t) return null;
          let n = atob(t[1]),
            o = new ArrayBuffer(n.length),
            a = new Uint8Array(o);
          for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
          return r().ArrayBuffer.hash(o);
        }
      }
    },
    620233(e, t, n) {
      n.d(t, { Tv: () => d, sD: () => _ });
      var o = n(17928),
        r = n(636537),
        a = n(785401),
        i = n(228366),
        l = n(710195),
        u = n(375441),
        s = n(652215);
      async function _(e) {
        try {
          let t = (
            await r.Bo.get({
              url: s.Rsh.APEX_EXPERIMENTS_METADATA,
              query: { surface: e },
              rejectWithError: !0,
            })
          ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({
              id: e.id,
              label: e.label,
              type: e.type,
            })),
          }));
          i.h.dispatch({
            type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
            experiments: t,
          });
        } catch (e) {
          i.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }),
            console.log(e);
        }
      }
      async function d(e) {
        if (
          !(null != e && l.A.hasLoaded(e)) &&
          !(l.A.isFetching(u.sz) || l.A.hasLoaded(u.sz))
        ) {
          i.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: u.sz });
          try {
            let e = await r.Bo.get({
              url: s.Rsh.APEX_EXPERIMENTS,
              query: { surface: a.Um.APP },
              rejectWithError: !1,
            });
            if (e?.body != null) {
              let { installation: t, ...n } = e.body;
              o.Ay.Emitter.batched(() => {
                t && i.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                  i.h.dispatch({
                    type: "APEX_EXPERIMENTS_FETCH_SUCCESS",
                    unitId: u.sz,
                    experiments: n,
                  });
              });
            } else
              i.h.dispatch({
                type: "APEX_EXPERIMENTS_FETCH_FAILURE",
                unitId: u.sz,
              });
          } catch (e) {
            i.h.dispatch({
              type: "APEX_EXPERIMENTS_FETCH_FAILURE",
              unitId: u.sz,
            });
          }
        }
      }
    },
    879408(e, t, n) {
      n.d(t, { A: () => s });
      var o = n(17928),
        r = n(228366),
        a = n(495544);
      let i = new Set(),
        l = new Set();
      class u extends o.Ay.Store {
        static displayName = "BulkBanStore";
        initialize() {
          this.waitFor(a.default);
        }
        hasPendingBulkBan(e) {
          return i.has(e);
        }
        consumeCompletedBeforeStarted(e, t) {
          let n = `${e}:${t}`;
          return l.delete(n);
        }
      }
      let s = new u(r.h, {
        GUILD_BULK_BAN_STARTED: function (e) {
          i.add(e.guildId);
        },
        GUILD_BULK_BAN_FAILED: function (e) {
          if (!i.has(e.guildId)) return !1;
          i.delete(e.guildId);
        },
        GUILD_BULK_BAN_UPDATE: function (e) {
          if (!i.has(e.guildId)) {
            let t = a.default.getId();
            return l.add(`${e.guildId}:${t}`), !1;
          }
          i.delete(e.guildId);
        },
        CONNECTION_OPEN: function () {
          i.clear(), l.clear();
        },
      });
    },
    568185(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(228366),
        r = n(576705),
        a = n(292572),
        i = n(652215);
      let l = {
        async checkGuildTemplateDirty(e) {
          if (!r.A.canWithPartialContext(i.xBc.MANAGE_GUILD, { guildId: e }))
            return;
          let t = await a.A.loadTemplatesForGuild(e);
          t.body.length > 0 &&
            o.h.dispatch({
              type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
              guildTemplate: t.body[0],
            });
        },
        hideGuildTemplateDirtyTooltip(e) {
          o.h.dispatch({
            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
            guildId: e,
          });
        },
        hideGuildTemplatePromotionTooltip() {
          o.h.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
        },
      };
    },
    518977(e, t, n) {
      n.d(t, {
        Gw: () => C,
        XF: () => s,
        j7: () => E,
        ni: () => p,
        rE: () => _,
      });
      var o = n(284009),
        r = n.n(o),
        a = n(96337),
        i = n(997101),
        l = n(487052),
        u = n(985018);
      function s(e) {
        let t = a.A.find((t) => t.alpha2 === e);
        if (null != t)
          return { name: t.name, code: t.phoneCountryCode, alpha2: t.alpha2 };
      }
      function _() {
        let e = (function (e) {
          let t = a.A.find((t) => t.name === e);
          if (null != t)
            return { name: t.name, code: t.phoneCountryCode, alpha2: t.alpha2 };
        })("United States");
        return r()(e, "Default country code cannot be missing."), e;
      }
      let d = {
        AF: () => u.intl.string(u.t["Jafq/8"]),
        AX: () => u.intl.string(u.t.fqW5xC),
        AL: () => u.intl.string(u.t["45zGd8"]),
        DZ: () => u.intl.string(u.t.GaE4sr),
        AS: () => u.intl.string(u.t["+WpYG8"]),
        AD: () => u.intl.string(u.t.Bine4f),
        AO: () => u.intl.string(u.t.EncoDy),
        AI: () => u.intl.string(u.t.FyMJlA),
        AQ: () => u.intl.string(u.t["6Ud25U"]),
        AG: () => u.intl.string(u.t.xH0uMV),
        AR: () => u.intl.string(u.t.ii4Wu5),
        AM: () => u.intl.string(u.t.t2mQBe),
        AW: () => u.intl.string(u.t["dDyK+Y"]),
        AC: () => u.intl.string(u.t["5OuUNf"]),
        AU: () => u.intl.string(u.t.jI66M4),
        AT: () => u.intl.string(u.t.X6tsfE),
        AZ: () => u.intl.string(u.t.hqDS5t),
        BS: () => u.intl.string(u.t["V0+FpS"]),
        BH: () => u.intl.string(u.t.KQEKst),
        BD: () => u.intl.string(u.t.O4xJdW),
        BB: () => u.intl.string(u.t["U3gWC+"]),
        BY: () => u.intl.string(u.t.JTzRvh),
        BE: () => u.intl.string(u.t.iKUIV8),
        BZ: () => u.intl.string(u.t.WJ00HN),
        BJ: () => u.intl.string(u.t.oy9Yqr),
        BM: () => u.intl.string(u.t.POFwen),
        BT: () => u.intl.string(u.t.ukyggU),
        BO: () => u.intl.string(u.t.f3izxw),
        BQ: () => u.intl.string(u.t.xNnm8G),
        BA: () => u.intl.string(u.t["i+Zfqp"]),
        BW: () => u.intl.string(u.t.eGkuvF),
        BV: () => u.intl.string(u.t.dbESeA),
        BR: () => u.intl.string(u.t["txyQ+2"]),
        IO: () => u.intl.string(u.t.rHYlV2),
        BN: () => u.intl.string(u.t["7NaGb5"]),
        BG: () => u.intl.string(u.t.rI28Xp),
        BF: () => u.intl.string(u.t.IqU818),
        BI: () => u.intl.string(u.t.IhzLGu),
        KH: () => u.intl.string(u.t["/dAWjY"]),
        CM: () => u.intl.string(u.t.zUUbBM),
        CA: () => u.intl.string(u.t.PNbhxs),
        CV: () => u.intl.string(u.t.i7Jc8d),
        KY: () => u.intl.string(u.t.P1PrRn),
        CF: () => u.intl.string(u.t["9VQtLv"]),
        TD: () => u.intl.string(u.t.dh3ims),
        CL: () => u.intl.string(u.t.pP7XMH),
        CN: () => u.intl.string(u.t.fs44pw),
        CX: () => u.intl.string(u.t.U0iMTj),
        CC: () => u.intl.string(u.t["3khaL3"]),
        CO: () => u.intl.string(u.t["x+nstY"]),
        KM: () => u.intl.string(u.t.lVyhLl),
        CG: () => u.intl.string(u.t.Iv2rZv),
        CD: () => u.intl.string(u.t.j8i9WF),
        CK: () => u.intl.string(u.t.lqyAiJ),
        CR: () => u.intl.string(u.t.ycPQE4),
        CI: () => u.intl.string(u.t["0Tqaz1"]),
        HR: () => u.intl.string(u.t.NnPbnH),
        CU: () => u.intl.string(u.t["lS/PDL"]),
        CW: () => u.intl.string(u.t.khmjg6),
        CY: () => u.intl.string(u.t["11oKq+"]),
        CZ: () => u.intl.string(u.t.EW0ibS),
        DK: () => u.intl.string(u.t.uxk5Qh),
        DG: () => u.intl.string(u.t["Dg/LLm"]),
        DJ: () => u.intl.string(u.t.G2wBdO),
        DM: () => u.intl.string(u.t.memMFD),
        DO: () => u.intl.string(u.t.R1ogUj),
        TP: () => u.intl.string(u.t.FBMXjV),
        EC: () => u.intl.string(u.t.NGNfj8),
        EG: () => u.intl.string(u.t.WJFeOY),
        SV: () => u.intl.string(u.t.lTRKpi),
        GQ: () => u.intl.string(u.t["ML/iU9"]),
        ER: () => u.intl.string(u.t.NQ4OOy),
        EE: () => u.intl.string(u.t["8Lv/0A"]),
        ET: () => u.intl.string(u.t.yNPSFD),
        FK: () => u.intl.string(u.t.v6Hsz1),
        FO: () => u.intl.string(u.t.X7fOHb),
        FJ: () => u.intl.string(u.t.ErOuAC),
        FI: () => u.intl.string(u.t.S5M47r),
        FR: () => u.intl.string(u.t["X/6soc"]),
        GF: () => u.intl.string(u.t["96auOc"]),
        PF: () => u.intl.string(u.t["To7/sV"]),
        TF: () => u.intl.string(u.t.xdJZTD),
        GA: () => u.intl.string(u.t.Sacsfy),
        GM: () => u.intl.string(u.t.GJAp3h),
        GE: () => u.intl.string(u.t["/3kyB3"]),
        DE: () => u.intl.string(u.t.W3pvvg),
        GH: () => u.intl.string(u.t.ffW0vs),
        GI: () => u.intl.string(u.t["/Lb6lb"]),
        GR: () => u.intl.string(u.t.OlCKMe),
        GL: () => u.intl.string(u.t.NLwwbr),
        GD: () => u.intl.string(u.t.uFgtvK),
        GP: () => u.intl.string(u.t.ZrXRVo),
        GU: () => u.intl.string(u.t.qgs2s0),
        GT: () => u.intl.string(u.t.wN1Cw6),
        GG: () => u.intl.string(u.t.DMua5e),
        GN: () => u.intl.string(u.t["/UyK0d"]),
        GW: () => u.intl.string(u.t.zMeBeJ),
        GY: () => u.intl.string(u.t.EoK4JQ),
        HT: () => u.intl.string(u.t.UWEIVr),
        HM: () => u.intl.string(u.t["Nm/9iM"]),
        VA: () => u.intl.string(u.t["RbW/9g"]),
        HN: () => u.intl.string(u.t.DlNDQj),
        HK: () => u.intl.string(u.t.VVWUCi),
        HU: () => u.intl.string(u.t.V6iXLU),
        IS: () => u.intl.string(u.t.bzdtxI),
        IN: () => u.intl.string(u.t["6sO4IF"]),
        ID: () => u.intl.string(u.t.bj0p9O),
        IR: () => u.intl.string(u.t.IGS9mT),
        IQ: () => u.intl.string(u.t["UEK//z"]),
        IE: () => u.intl.string(u.t["RwMJ+T"]),
        IM: () => u.intl.string(u.t.G5FsgF),
        IL: () => u.intl.string(u.t.aF96ro),
        IT: () => u.intl.string(u.t.lxuMKW),
        JM: () => u.intl.string(u.t.nAkIXU),
        JP: () => u.intl.string(u.t.A1PR1d),
        JE: () => u.intl.string(u.t["z3+6TZ"]),
        JO: () => u.intl.string(u.t.wJdVsw),
        KZ: () => u.intl.string(u.t["PwbVJ/"]),
        KE: () => u.intl.string(u.t.Tm2Bmi),
        KI: () => u.intl.string(u.t.e1jq1z),
        XK: () => u.intl.string(u.t["E6yaM+"]),
        KP: () => u.intl.string(u.t["V+Pwy9"]),
        KR: () => u.intl.string(u.t.J71wiI),
        KW: () => u.intl.string(u.t["0ptGwg"]),
        KG: () => u.intl.string(u.t.E312FJ),
        LA: () => u.intl.string(u.t.ia54cG),
        LV: () => u.intl.string(u.t["MGLRc/"]),
        LB: () => u.intl.string(u.t.Mbbwmo),
        LS: () => u.intl.string(u.t.kiCZ6s),
        LR: () => u.intl.string(u.t.qgmUSt),
        LY: () => u.intl.string(u.t.phLtT2),
        LI: () => u.intl.string(u.t.hMYf6x),
        LT: () => u.intl.string(u.t["0ZsaQp"]),
        LU: () => u.intl.string(u.t["W8+2MI"]),
        MO: () => u.intl.string(u.t.IacHym),
        MK: () => u.intl.string(u.t.zKkNKL),
        MG: () => u.intl.string(u.t["/Sg2NZ"]),
        MW: () => u.intl.string(u.t.rZehzK),
        MY: () => u.intl.string(u.t.PvGYlx),
        MV: () => u.intl.string(u.t["+LSSRH"]),
        ML: () => u.intl.string(u.t.eX7xJF),
        MT: () => u.intl.string(u.t.J7Qp1i),
        MH: () => u.intl.string(u.t["930cBv"]),
        MQ: () => u.intl.string(u.t.GhP3Td),
        MR: () => u.intl.string(u.t.JZZOoM),
        MU: () => u.intl.string(u.t.BXVASQ),
        YT: () => u.intl.string(u.t["Eiwn0/"]),
        MX: () => u.intl.string(u.t["5YMLyh"]),
        FM: () => u.intl.string(u.t["4piC24"]),
        MI: () => u.intl.string(u.t.sjTAkF),
        MD: () => u.intl.string(u.t["3KMKWh"]),
        MC: () => u.intl.string(u.t["VRh/QL"]),
        MN: () => u.intl.string(u.t.nuXeWR),
        ME: () => u.intl.string(u.t.w0Lzpq),
        MS: () => u.intl.string(u.t.q3CKrf),
        MA: () => u.intl.string(u.t.h1HVwc),
        MZ: () => u.intl.string(u.t["1syvzu"]),
        MM: () => u.intl.string(u.t["0Ergxv"]),
        NA: () => u.intl.string(u.t.EUzX90),
        NR: () => u.intl.string(u.t.yCfW6p),
        NP: () => u.intl.string(u.t["58TAkl"]),
        NL: () => u.intl.string(u.t.UdKSEp),
        AN: () => u.intl.string(u.t.mlTpxU),
        NC: () => u.intl.string(u.t["7ZQpd8"]),
        NZ: () => u.intl.string(u.t["104LTa"]),
        NI: () => u.intl.string(u.t["b402J+"]),
        NE: () => u.intl.string(u.t["MU4MR/"]),
        NG: () => u.intl.string(u.t.VpAeZP),
        NU: () => u.intl.string(u.t["g+sEOr"]),
        NF: () => u.intl.string(u.t.pwHtBs),
        MP: () => u.intl.string(u.t.QzduP1),
        NO: () => u.intl.string(u.t["WFaeb+"]),
        OM: () => u.intl.string(u.t["A/zFVr"]),
        PK: () => u.intl.string(u.t.wshYBS),
        PW: () => u.intl.string(u.t.bg4SUl),
        PS: () => u.intl.string(u.t.fORlCF),
        PA: () => u.intl.string(u.t.Hsdind),
        PG: () => u.intl.string(u.t.oscQpw),
        PY: () => u.intl.string(u.t["2MyxdK"]),
        PE: () => u.intl.string(u.t["/BRf4/"]),
        PH: () => u.intl.string(u.t["9dhmDU"]),
        PN: () => u.intl.string(u.t.gb2wtt),
        PL: () => u.intl.string(u.t.kMNWN7),
        PT: () => u.intl.string(u.t.idIaSI),
        PR: () => u.intl.string(u.t["2ofdMc"]),
        QA: () => u.intl.string(u.t.dOie5v),
        RE: () => u.intl.string(u.t["HFn6/P"]),
        RO: () => u.intl.string(u.t.o6TI9w),
        RU: () => u.intl.string(u.t.Wpcfkv),
        RW: () => u.intl.string(u.t["kWK/8U"]),
        BL: () => u.intl.string(u.t["2jLrok"]),
        SH: () => u.intl.string(u.t.pq6cqS),
        KN: () => u.intl.string(u.t.kc5n4S),
        LC: () => u.intl.string(u.t.nKQEoN),
        MF: () => u.intl.string(u.t.VPSBtF),
        PM: () => u.intl.string(u.t.C8Ing3),
        VC: () => u.intl.string(u.t.yzj1Ag),
        WS: () => u.intl.string(u.t["n/qY9X"]),
        SM: () => u.intl.string(u.t.ShzB0V),
        ST: () => u.intl.string(u.t.wXKj8c),
        SA: () => u.intl.string(u.t.DyAUdP),
        SN: () => u.intl.string(u.t.GTVnVc),
        RS: () => u.intl.string(u.t.NcPfDc),
        SC: () => u.intl.string(u.t.poiUxX),
        SL: () => u.intl.string(u.t["2qUJqg"]),
        SG: () => u.intl.string(u.t.qxhmN4),
        SX: () => u.intl.string(u.t.nx3nPV),
        SK: () => u.intl.string(u.t.rEAPa0),
        SI: () => u.intl.string(u.t.vE92UM),
        SB: () => u.intl.string(u.t.mu1jbI),
        SO: () => u.intl.string(u.t.PmG5cv),
        ZA: () => u.intl.string(u.t.nLN6A4),
        GS: () => u.intl.string(u.t.vjjsXR),
        SS: () => u.intl.string(u.t["4CZknz"]),
        ES: () => u.intl.string(u.t.DOAxuX),
        LK: () => u.intl.string(u.t.Hbo2lC),
        SD: () => u.intl.string(u.t.UcS5uF),
        SR: () => u.intl.string(u.t["ow+Bj+"]),
        SJ: () => u.intl.string(u.t.FSHHAe),
        SZ: () => u.intl.string(u.t.hnh4kP),
        SE: () => u.intl.string(u.t["+yFtm+"]),
        CH: () => u.intl.string(u.t.TmiTsd),
        SY: () => u.intl.string(u.t.hZHzwQ),
        TW: () => u.intl.string(u.t.reC53I),
        TJ: () => u.intl.string(u.t.QibTNQ),
        TZ: () => u.intl.string(u.t.y6CVE7),
        TH: () => u.intl.string(u.t.DzQks0),
        TL: () => u.intl.string(u.t.M6fZXZ),
        TG: () => u.intl.string(u.t.O8FB7Y),
        TK: () => u.intl.string(u.t.H0Hhzx),
        TO: () => u.intl.string(u.t["cs6mZ+"]),
        TT: () => u.intl.string(u.t.HSjyVP),
        TN: () => u.intl.string(u.t["9Y8ErH"]),
        TR: () => u.intl.string(u.t["0pGOx9"]),
        TM: () => u.intl.string(u.t.RLyIjh),
        TC: () => u.intl.string(u.t.hgenP3),
        TV: () => u.intl.string(u.t.yTaZQZ),
        UG: () => u.intl.string(u.t.MhfaQ7),
        UA: () => u.intl.string(u.t.VPxzCd),
        AE: () => u.intl.string(u.t.Q3gzMK),
        GB: () => u.intl.string(u.t.YypOXE),
        US: () => u.intl.string(u.t["7LL+Fw"]),
        UM: () => u.intl.string(u.t.gvRzmp),
        UY: () => u.intl.string(u.t.xwojAY),
        UZ: () => u.intl.string(u.t.qGQlYe),
        VU: () => u.intl.string(u.t.xd2XuA),
        VE: () => u.intl.string(u.t.A0oPen),
        VN: () => u.intl.string(u.t["CA4GY/"]),
        VG: () => u.intl.string(u.t["/MJ7OU"]),
        VI: () => u.intl.string(u.t.Swyyp5),
        WF: () => u.intl.string(u.t.mgb3iv),
        EH: () => u.intl.string(u.t.tRqLZU),
        YE: () => u.intl.string(u.t.yn37kD),
        ZM: () => u.intl.string(u.t.e0NQFU),
        ZW: () => u.intl.string(u.t.kQ6oLs),
      };
      function C(e) {
        return d[e]();
      }
      function E(e) {
        let t = d[e];
        return null != t ? t() : e;
      }
      function p(e) {
        let t;
        if (2 === e.length) {
          let t = i.d[e];
          if (null == t) throw Error(`Invalid country code alpha2 ${e}`);
          return t;
        }
        if (3 === e.length) {
          if (null == (t = l._[e]))
            throw Error(`Could not find ${e} in CountryCodesISO3to2`);
        } else
          throw Error(`Bad country code passed: ${e} with length ${e.length}`);
        return t;
      }
    },
    361158(e, t, n) {
      n.d(t, { B8: () => P, dF: () => M, up: () => O, xr: () => S });
      var o = n(627968),
        r = n(64700),
        a = n(296489),
        i = n.n(a),
        l = n(580956),
        u = n(451989),
        s = n(353640),
        _ = n(121894),
        d = n(319060),
        C = n(315710),
        E = n(844222),
        p = n(775121),
        h = n(240248),
        c = n(750506),
        A = n(191627),
        y = n(87404),
        I = n(215011);
      let m = new Set([y._s, A.Uy]),
        T = (0, h.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
        S = (0, s.v)((e) => ({
          fullScreenLayers: [],
          addLayer: (t) =>
            (0, _.r)(() => {
              e((e) => {
                let { fullScreenLayers: n } = e;
                return { fullScreenLayers: [...n, t] };
              });
            }),
        }));
      function R(e) {
        let { item: t, containerRef: n } = e;
        return (
          (0, C.t)(n),
          r.useEffect(() => {
            var e, n;
            return (
              p.A.disable(),
              m.has(t.key) ||
                p.A.enableTemp(
                  ((e = t.key),
                  (n = t.options.onEscape),
                  {
                    POP_LAYER: {
                      binds: ["esc"],
                      comboKeysBindGlobal: !0,
                      action() {
                        n?.() !== !0 && M(e);
                      },
                    },
                  }),
                ),
              () => {
                p.A.disableTemp();
              }
            );
          }, [t.key, t.options.onEscape]),
          (0, o.jsx)(t.LayerComponent, {
            children: (0, o.jsxs)("div", {
              className: I.zr,
              ref: n,
              children: [
                (0, o.jsx)("div", { className: I.$E }),
                t.render({
                  transitionState: null != t ? t.transitionState : 3,
                  closeLayer: () => M(t.key),
                }),
              ],
            }),
          })
        );
      }
      let N = {
          enter: I.Ve,
          enterActive: I.T8,
          enterDone: I.lG,
          exit: I.NS,
          exitActive: I.N5,
          exitDone: I.Dr,
        },
        g = {
          enter: I.Zf,
          enterActive: I.BA,
          enterDone: I.zo,
          exit: I.ph,
          exitActive: I.zX,
          exitDone: I.hf,
        };
      function O() {
        let { reducedMotion: e } = r.useContext(E.C),
          t = e.enabled ? g : N,
          n = S((e) => e.fullScreenLayers),
          a = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
        return (0, o.jsx)(l.A, {
          children: a.map((e) => {
            let { item: r, nodeRef: a } = e;
            return (0, o.jsx)(
              u.A,
              {
                nodeRef: a,
                classNames: r.options.disableAnimation ? void 0 : t,
                timeout: T,
                onEntered: () => {
                  (0, _.r)(() => {
                    S.setState({
                      fullScreenLayers: n.map((e) =>
                        e.key === r.key ? { ...e, transitionState: 2 } : e,
                      ),
                    });
                  });
                },
                unmountOnExit: !0,
                children: (0, o.jsx)(R, { containerRef: a, item: r }),
              },
              r.key,
            );
          }),
        });
      }
      function P(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Object.freeze({}),
          {
            layerKey: n,
            Layer: o,
            disableAnimation: r = !1,
            onEscape: a,
            showAppUnderLayer: l = !1,
          } = t,
          u = null != n ? n : i()();
        return (
          (0, _.r)(() => {
            S.setState((t) => ({
              fullScreenLayers: [
                ...t.fullScreenLayers,
                {
                  key: u,
                  transitionState: 1,
                  LayerComponent: o ?? c.Ay,
                  render: e,
                  options: {
                    disableAnimation: r,
                    onEscape: a,
                    showAppUnderLayer: l,
                  },
                },
              ],
            }));
          }),
          u
        );
      }
      function M(e) {
        (0, _.r)(() => {
          S.setState((t) => ({
            fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e),
          }));
        });
      }
    },
    26279(e, t, n) {
      n.d(t, { BM: () => u, Re: () => l, uH: () => i });
      var o,
        r,
        a,
        i =
          (((o = {}).MOBILE_WEB_REDIRECT_CHECKOUT =
            "mobile_web_redirect_checkout"),
          (o.META_QUEST_WEB_REDIRECT_CHECKOUT =
            "meta_quest_web_redirect_checkout"),
          o),
        l =
          (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
          (r[(r.DRAFT = 1)] = "DRAFT"),
          (r[(r.SIGNED = 2)] = "SIGNED"),
          (r[(r.DISCARDED = 3)] = "DISCARDED"),
          (r[(r.SIGNING_IN_PROGRESS = 4)] = "SIGNING_IN_PROGRESS"),
          r),
        u =
          (((a = {})[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
          (a[(a.ONE_TIME = 1)] = "ONE_TIME"),
          (a[(a.SUBSCRIPTION = 2)] = "SUBSCRIPTION"),
          a);
    },
    795791(e, t, n) {
      n.d(t, { $w: () => u, uM: () => s });
      var o = n(492462),
        r = n(873263);
      n(809733), n(38405);
      var a = n(26279),
        i = n(652215);
      let l = (e, t, n) => {
          if (!e.startsWith(i.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === i.W6J.MOBILE_WEB_REDIRECT_CHECKOUT)
              return a.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (n === a.uH.META_QUEST_WEB_REDIRECT_CHECKOUT)
              return a.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
          }
        },
        u = () => {
          let { search: e, pathname: t } = (0, r.zy)(),
            { deep_link_type: n, flow_type: a } = (0, o.parse)(e);
          return l(t, n, a);
        },
        s = () => {
          let e = window.location.pathname,
            { deep_link_type: t, flow_type: n } = (0, o.parse)(
              window.location.search,
            );
          return l(e, t, n);
        };
    },
    624210(e, t, n) {
      n.d(t, { Nl: () => s, fS: () => l, iY: () => u });
      var o = n(636537),
        r = n(228366),
        a = n(26279),
        i = n(652215);
      async function l(e) {
        let { skuId: t, paymentSourceId: n, paymentGateway: l, loadId: u } = e;
        r.h.wait(() => {
          r.h.dispatch({ type: "ORDER_CREATE_START" });
        });
        try {
          let e = {};
          null != n && (e.payment_source_id = n),
            null != l && (e.payment_gateway = l);
          let s = {
              order_line_items: [
                { sku_id: t, quantity: 1, purchase_type: a.BM.ONE_TIME },
              ],
              billing_facet: e,
            },
            _ = (
              await o.Bo.post({
                url: i.Rsh.ORDER_CREATE,
                body: s,
                context: null != u && "" !== u ? { load_id: u } : void 0,
                rejectWithError: !0,
              })
            ).body;
          if (null == _ || null == _.id || "" === _.id)
            throw Error("Invalid order response");
          return (
            await r.h.dispatch({
              type: "ORDER_CREATE_SUCCESS",
              orderId: _.id,
              order: _,
            }),
            _
          );
        } catch (e) {
          throw (await r.h.dispatch({ type: "ORDER_CREATE_FAIL" }), e);
        }
      }
      async function u(e) {
        let { orderId: t, updates: n } = e;
        r.h.wait(() => {
          r.h.dispatch({ type: "ORDER_UPDATE_START" });
        });
        try {
          let e = {};
          "paymentSourceId" in n &&
            (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await o.Bo.patch({
              url: i.Rsh.ORDER_UPDATE(t),
              body: e,
              rejectWithError: !0,
            }),
            await r.h.dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: t });
        } catch (e) {
          await r.h.dispatch({ type: "ORDER_UPDATE_FAIL" });
        }
      }
      async function s(e) {
        try {
          let t = await o.Bo.post({
            url: i.Rsh.ORDER_DISCARD(e),
            rejectWithError: !1,
          });
          if (null == t.body) throw Error("Invalid discard order response");
          return (
            await r.h.dispatch({ type: "ORDER_DISCARD_SUCCESS", orderId: e }),
            t.body
          );
        } catch (e) {
          throw e;
        }
      }
    },
    905773(e, t, n) {
      n.d(t, { A: () => d });
      var o = n(64700),
        r = n(17928),
        a = n(211287),
        i = n(158317),
        l = n(123633),
        u = n(624210);
      let s = (0, n(945810).mj)({
        name: "2026-03-orders-dual-write",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
      var _ = n(818348);
      function d(e, t) {
        let n = (0, r.bG)([l.A], () => l.A.currentOrder),
          d = (0, r.bG)([l.A], () => l.A.currentOrderId),
          C = (0, r.bG)([l.A], () => l.A.isCreatingOrder),
          E = s.useConfig({ location: "payment_modal" }).enabled,
          p = a.A.useConfig({ location: "payment_modal" }).enabled,
          h = t.paymentGateway === _.kM.VIRTUAL_CURRENCY,
          c = h ? p : E,
          A = (0, o.useRef)(null),
          y = (0, o.useRef)(""),
          I = (0, o.useRef)(!1),
          m = (0, o.useRef)(!1),
          T = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          if (!E || null == d || null == t.paymentSourceId) return;
          let e = t.paymentSourceId;
          async function o() {
            var o;
            let r = n ?? (await (0, i.r)(d)),
              a = r?.billing_facet;
            if (a?.payment_source_id === t.paymentSourceId) {
              (A.current = d), (y.current = e);
              return;
            }
            (o = r),
              o?.billing_facet?.payment_gateway !== _.kM.VIRTUAL_CURRENCY &&
                (await (0, u.iY)({ orderId: d, updates: t }),
                (A.current = d),
                (y.current = e));
          }
          (A.current !== d || y.current !== e) && o();
        }, [d, n, t.paymentSourceId, E]),
          (0, o.useEffect)(() => {
            let e = T.current;
            (T.current = d),
              null == d && null != e
                ? ((m.current = !0),
                  (A.current = null),
                  (y.current = ""),
                  (I.current = !1))
                : null != d && (m.current = !1);
          }, [d]),
          (0, o.useEffect)(() => {
            if (null != d) {
              (I.current = !1), (m.current = !1);
              return;
            }
            !m.current &&
              (!c ||
                C ||
                I.current ||
                null == e ||
                (null == t.paymentSourceId && null == t.paymentGateway) ||
                ((I.current = !0),
                (0, u.fS)({
                  skuId: e,
                  paymentSourceId: h ? void 0 : (t.paymentSourceId ?? void 0),
                  paymentGateway: t.paymentGateway,
                  loadId: t.loadId,
                })));
          }, [d, C, e, t, c, h]);
      }
    },
    853398(e, t, n) {
      n.d(t, { A: () => s });
      var o = n(64700),
        r = n(17928),
        a = n(97352),
        i = n(83617),
        l = n(788868),
        u = n(818348);
      function s(e) {
        let {
          activeSubscription: t,
          skuIDs: n,
          paymentSourceId: s,
          isGift: _,
          excludeSubscriptionPlansBySKU: d,
          checkoutInvoicePreview: C,
        } = e;
        n = n.filter((e) => e !== l.pe.NONE);
        let E = (0, r.bG)([a.A], () => {
            let e = a.A.getPlanIdsForSkus(n).filter((e) => !_ || l.JM.has(e));
            return e.length > 0 ? a.A.get(e[0]) : null;
          }),
          p = null == E ? [] : (0, i._w)(E.id, s, _),
          h = p.find((e) => e === t?.currency) ?? p[0] ?? u.Yr.USD,
          c = (0, i.Yk)({
            initialCurrency: h,
            subscriptionPlanId: E?.id,
            paymentSourceId: s,
            isGift: _,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
          }),
          { allowedCurrencies: A, invoiceCurrency: y } = o.useMemo(
            () =>
              null == C
                ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                : {
                    allowedCurrencies:
                      C.checkoutContext?.allowed_currencies ?? [],
                    invoiceCurrency: C.currency,
                  },
            [C],
          ),
          I = A.length > 0 ? A : p,
          m = c.priceOptions.currency,
          T = o.useMemo(
            () =>
              null != m ? m : null != y ? y : I.length > 0 ? I[0] : void 0,
            [m, y, I],
          );
        return { ...c, currencies: I, displayCurrency: T };
      }
    },
    121005(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(64700),
        r = n(17928),
        a = n(323082),
        i = n(166403);
      function l() {
        let e = (0, r.bG)([i.A], () => i.A.hasFetchedSubscriptions());
        return (
          o.useEffect(() => {
            e || (0, a.hP)();
          }, [e]),
          e
        );
      }
    },
    369827(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(64700),
        r = n(17928),
        a = n(323082),
        i = n(295405);
      function l(e) {
        let {
            isGift: t,
            activeSubscription: n,
            eligiblePaymentGateways: l,
          } = e,
          {
            defaultPaymentSourceId: u,
            paymentSources: s,
            hasFetchedPaymentSources: _,
          } = (0, r.cf)([i.A], () => ({
            defaultPaymentSourceId: i.A.defaultPaymentSourceId,
            paymentSources: i.A.paymentSources,
            hasFetchedPaymentSources: i.A.hasFetchedPaymentSources,
          })),
          d = (e, t, n, o) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != o && o.length > 0) {
              if (null != n && o.includes(s[n].paymentGateway)) return n;
              for (let e in s) {
                let t = s[e];
                if (o.includes(t.paymentGateway)) return e;
              }
              return null;
            }
            return n;
          },
          [C, E] = o.useState(() => d(t, n, u, l));
        return (
          o.useEffect(() => {
            _ ? E(d(t, n, u, l)) : (0, a.$o)();
          }, [_, t, n, u, l]),
          {
            paymentSources: s,
            hasPaymentSources: Object.keys(s).length > 0,
            paymentSourceId: C,
            setPaymentSourceId: E,
            hasFetchedPaymentSources: _,
            defaultPaymentSource: null != u ? s[u] : null,
          }
        );
      }
    },
    552574(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(17928),
        r = n(251913),
        a = n(825755),
        i = n(153084);
      function l() {
        let e = (0, o.bG)([a.A], () => a.A.error),
          [t, n] = (0, o.yK)([i.A], () => [
            i.A.error,
            i.A.isAwaitingAuthentication,
          ]);
        return {
          paymentError: null != t ? t : e,
          paymentAuthenticationState: n
            ? r.oc.PENDING
            : null != t
              ? r.oc.ERROR
              : r.oc.NONE,
        };
      }
    },
    935630(e, t, n) {
      n.d(t, { A: () => r });
      var o = n(64700);
      function r() {
        let [e, t] = o.useState(null),
          n = o.useRef(null);
        return (
          o.useEffect(() => {
            null != e &&
              null != n.current &&
              n.current.scrollIntoView({ behavior: "smooth" });
          }, [e]),
          { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: n }
        );
      }
    },
    988023(e, t, n) {
      n.d(t, { A: () => i });
      var o = n(64700),
        r = n(166532),
        a = n(566980);
      function i(e) {
        let [t, n] = o.useState(a.h.WAITING);
        return (
          o.useEffect(() => {
            null != e &&
              e !== r.pn.REVIEW &&
              t !== a.h.WAITING &&
              t !== a.h.COMPLETED &&
              n(a.h.WAITING);
          }, [e, t, n]),
          [t, n]
        );
      }
    },
    289333(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(64700),
        r = n(997101),
        a = n(17928),
        i = n(615405);
      function l() {
        let [e, t] = o.useState(!1),
          [n, l] = o.useState(!1),
          u = (0, a.bG)([i.A], () =>
            r.M.EEA_COUNTRIES.has(i.A.ipCountryCodeWithFallback),
          );
        return {
          hasViewedPurchaseTerms: e,
          setHasViewedPurchaseTerms: t,
          showWithdrawalWaiver: u,
          hasAcceptedWithdrawalWaiver: !u || n,
          setHasAcceptedWithdrawalWaiver: l,
        };
      }
    },
    252293(e, t, n) {
      n.d(t, { A: () => d });
      var o = n(64700),
        r = n(635358),
        a = n(830382),
        i = n(845584),
        l = n(136857),
        u = n(354328),
        s = n(79387),
        _ = n(67480);
      function d(e) {
        let {
            applicationId: t,
            skuIDs: n,
            currentPaymentSourceId: d,
            isGift: C,
            excludeSKUPurchasePreviews: E = !1,
            loadId: p,
            currency: h,
          } = e,
          c = (0, u.A)("shop_include_unpublished"),
          { previewErrorsById: A, setErrorById: y } = (function () {
            let [e, t] = o.useState({});
            return {
              previewErrorsById: e,
              setErrorById: o.useCallback(
                (e, n) => {
                  t((t) => ({ ...t, [e]: n }));
                },
                [t],
              ),
            };
          })();
        o.useEffect(() => {
          for (let e of n)
            _.A.isFetching(e) ||
              null != _.A.get(e) ||
              (0, a.EX)(t, e, r.g.VARIANTS_GROUP, c);
        }, [t, n, c]);
        let I = o.useRef(!1);
        return (
          o.useEffect(() => {
            if (!E) {
              for (let e of n)
                if (!s.A.isFetchingSKU(e)) {
                  let n = I.current ? d : null;
                  (0, a.QX)(t, e, n, {
                    isGift: C,
                    loadId: p,
                    currency: h,
                  }).catch((t) => {
                    t instanceof i.Ey &&
                      (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                        t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                        t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                      y(e, t);
                  });
                }
              I.current = !0;
            }
          }, [t, n, d, C, y, E, p, h]),
          { previewErrorsById: A }
        );
      }
    },
    87952(e, t, n) {
      n.d(t, { A: () => i });
      var o = n(64700),
        r = n(739508),
        a = n(71532);
      function i() {
        let [e, t] = o.useState(null);
        return (
          o.useEffect(() => {
            (0, a.Cv)()
              .then((e) => t(e))
              .catch((e) => {
                (0, r.pM)(e);
              });
          }, []),
          e
        );
      }
    },
    802588(e, t, n) {
      n.d(t, { A: () => _ }), n(323874), n(14289), n(35956);
      var o = n(64700),
        r = n(671325),
        a = n(636537),
        i = n(799226),
        l = n(954571),
        u = n(676279),
        s = n(652215);
      let _ = (e) => {
        (0, o.useEffect)(() => {
          e &&
            l.default.track(
              s.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING,
            );
        }, [e]);
        let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: _,
          } = ((e) => {
            let t = (0, u.TM)(),
              [n, r] = (0, o.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
              }),
              [i, _] = (0, o.useState)(!1),
              [d, C] = (0, o.useState)(!1),
              [E, p] = (0, o.useState)(!1),
              h = (0, o.useRef)(!0);
            (0, o.useEffect)(
              () => (
                (h.current = !0),
                () => {
                  h.current = !1;
                }
              ),
              [],
            );
            let c = (0, o.useCallback)(
                () =>
                  null != n.modalGlowEntry &&
                  null != n.modalGlowIdle &&
                  null != n.modalGlowExit,
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
              ),
              A = (0, o.useCallback)(async () => {
                if (!c() && !E) {
                  p(!0), C(!1), _(!1);
                  try {
                    let e = Date.now(),
                      [n, o, i] = await Promise.all([
                        a.Bo.get({
                          url: t
                            ? "https://cdn.discordapp.com/assets/content/26968a6375b676097d7234b043b61312b8037f45d077c91b621ead07c6b0544b.mov"
                            : "https://cdn.discordapp.com/assets/content/49d12c146442880c181fcc5502a49bd31d7537c2d6d5255aa2ad6b3d668553e7.webm",
                          binary: !0,
                          rejectWithError: !0,
                        }),
                        a.Bo.get({
                          url: t
                            ? "https://cdn.discordapp.com/assets/content/e1b69b796171027073273beebfee03fdf466010bf89a2ff116deccaec44d7c6f.mov"
                            : "https://cdn.discordapp.com/assets/content/ad6e3d6f3a4bb6a1debd45bc21e47b7f522685c3facc578bd2129aa4cd795f40.webm",
                          binary: !0,
                          rejectWithError: !0,
                        }),
                        a.Bo.get({
                          url: t
                            ? "https://cdn.discordapp.com/assets/content/7c384bc29166872d908b60c5faec0d00d9bd960267a8943331c456018ede5e7d.mov"
                            : "https://cdn.discordapp.com/assets/content/54bef6c79e1a3e1c2ec8f0d4a208643a7e203dc4c94e3463e6c6b38f6f4bdb23.webm",
                          binary: !0,
                          rejectWithError: !0,
                        }),
                      ]);
                    h.current &&
                      (r({
                        modalGlowEntry: window.URL.createObjectURL(n.body),
                        modalGlowExit: window.URL.createObjectURL(o.body),
                        modalGlowIdle: window.URL.createObjectURL(i.body),
                      }),
                      _(!0),
                      l.default.track(
                        s.HAw
                          .PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS,
                        { load_duration_ms: Date.now() - e },
                      ));
                  } catch (e) {
                    h.current && C(!0);
                  } finally {
                    h.current && p(!1);
                  }
                }
              }, [c, E, t]);
            return (
              (0, o.useEffect)(() => {
                e && A();
              }, [e, A]),
              (0, o.useEffect)(
                () => () => {
                  null != n.modalGlowEntry &&
                    window.URL.revokeObjectURL(n.modalGlowEntry),
                    null != n.modalGlowIdle &&
                      window.URL.revokeObjectURL(n.modalGlowIdle),
                    null != n.modalGlowExit &&
                      window.URL.revokeObjectURL(n.modalGlowExit);
                },
                [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
              ),
              { mediaUrls: n, isSuccess: i, isFailure: d, isLoading: E }
            );
          })(e),
          { status: d } = (0, i.CE)(e ? r.A : null);
        return {
          mediaUrls: t,
          isSuccess: n && d === i.BW.Loaded,
          isLoading: _ || d === i.BW.Loading,
        };
      };
    },
    925847(e, t, n) {
      n.d(t, { A: () => r });
      var o = n(492462);
      let r = () => {
        let { load_id: e } = (0, o.parse)(window.location.search);
        return Array.isArray(e) ? e[0] : e;
      };
    },
    788868(e, t, n) {
      n.d(t, {
        $3: () => e7,
        $I: () => f,
        Ac: () => td,
        Ae: () => e6,
        BL: () => W,
        BR: () => eD,
        Bu: () => ei,
        CA: () => es,
        CW: () => eU,
        Cq: () => t_,
        DA: () => e0,
        Dw: () => eA,
        EG: () => eP,
        EV: () => en,
        Eg: () => el,
        En: () => j,
        FB: () => ea,
        Ff: () => J,
        G4: () => e_,
        GI: () => eX,
        HF: () => ef,
        Hp: () => eE,
        J7: () => ec,
        JM: () => K,
        Jm: () => U,
        Jo: () => tr,
        KG: () => eg,
        Kq: () => e4,
        L9: () => et,
        LE: () => e2,
        M4: () => q,
        MB: () => eR,
        MX: () => ey,
        Mf: () => e3,
        Mr: () => X,
        NL: () => tc,
        OJ: () => tu,
        ON: () => ew,
        OO: () => eY,
        OW: () => eB,
        Pn: () => eb,
        PremiumTypes: () => M,
        Qz: () => eF,
        T: () => th,
        T7: () => w,
        TG: () => e$,
        TP: () => ek,
        TU: () => eN,
        Tt: () => eT,
        U1: () => ee,
        Uk: () => em,
        V2: () => eL,
        VD: () => tE,
        VY: () => k,
        Vk: () => P,
        WN: () => F,
        WT: () => z,
        Wx: () => to,
        XE: () => e8,
        YV: () => Y,
        _$: () => ts,
        a5: () => $,
        bi: () => eh,
        bx: () => eo,
        ci: () => D,
        d8: () => eQ,
        e: () => eV,
        eR: () => ev,
        eZ: () => ex,
        f3: () => ej,
        f5: () => te,
        fY: () => ep,
        gD: () => B,
        gd: () => eI,
        h7: () => eu,
        hd: () => Z,
        k4: () => ed,
        l1: () => ti,
        lA: () => eW,
        lj: () => eM,
        lk: () => L,
        ly: () => eG,
        nk: () => eZ,
        np: () => ta,
        o2: () => e9,
        oX: () => Q,
        oz: () => v,
        pW: () => V,
        pX: () => eC,
        pd: () => tt,
        pe: () => b,
        ph: () => er,
        q: () => eO,
        q9: () => eJ,
        sp: () => tC,
        tU: () => eH,
        tv: () => G,
        tz: () => e1,
        u0: () => H,
        uJ: () => tn,
        uP: () => e5,
        vQ: () => tl,
        w6: () => ez,
        xc: () => tp,
        xs: () => eK,
        y7: () => eq,
        yo: () => eS,
        zE: () => x,
      });
      var o,
        r,
        a,
        i,
        l,
        u,
        s,
        _,
        d,
        C,
        E,
        p,
        h,
        c,
        A,
        y,
        I,
        m,
        T,
        S,
        R = n(334279),
        N = n(652215),
        g = n(307731),
        O = n(985018),
        P =
          (((o = {})[(o.PREMIUM_TRIAL = 0)] = "PREMIUM_TRIAL"),
          (o[(o.PREMIUM_DISCOUNT = 1)] = "PREMIUM_DISCOUNT"),
          o),
        M =
          (((r = {})[(r.TIER_1 = 1)] = "TIER_1"),
          (r[(r.TIER_2 = 2)] = "TIER_2"),
          (r[(r.TIER_0 = 3)] = "TIER_0"),
          r);
      let f,
        L,
        U = [
          { id: "non-nitro", value: null, label: "Non-Nitro" },
          { id: "tier-0", value: 3, label: "Basic" },
          { id: "tier-1", value: 1, label: "Classic" },
          { id: "tier-2", value: 2, label: "Standard" },
        ],
        D = Object.freeze({ 3: 0, 1: 1, 2: 2 }),
        G = "521842831262875670";
      var b =
        (((a = {}).NONE = "628379670982688768"),
        (a.TIER_0 = "978380684370378762"),
        (a.TIER_1 = "521846918637420545"),
        (a.TIER_2 = "521847234246082599"),
        (a.GUILD = "590663762298667008"),
        (a.LEGACY = "521842865731534868"),
        a);
      let w = ["978380684370378762", "521847234246082599"],
        v = [
          "628379670982688768",
          "978380684370378762",
          "521846918637420545",
          "521847234246082599",
          "590663762298667008",
        ],
        F = Object.freeze({
          "978380684370378762": 3,
          "521846918637420545": 1,
          "521847234246082599": 2,
          "628379670982688768": 2,
          "521842865731534868": 2,
        }),
        H = Object.freeze({
          3: "978380684370378762",
          1: "521846918637420545",
          2: "521847234246082599",
        });
      var B =
        (((i = {}).NONE_MONTH = "628379151761408000"),
        (i.NONE_YEAR = "628381571568631808"),
        (i.PREMIUM_MONTH_TIER_0 = "978380692553465866"),
        (i.PREMIUM_YEAR_TIER_0 = "1024422698568122368"),
        (i.PREMIUM_MONTH_TIER_1 = "511651871736201216"),
        (i.PREMIUM_YEAR_TIER_1 = "511651876987469824"),
        (i.PREMIUM_MONTH_TIER_2 = "511651880837840896"),
        (i.PREMIUM_YEAR_TIER_2 = "511651885459963904"),
        (i.PREMIUM_MONTH_GUILD = "590665532894740483"),
        (i.PREMIUM_YEAR_GUILD = "590665538238152709"),
        (i.NONE_3_MONTH = "944265614527037440"),
        (i.NONE_6_MONTH = "944265636643602432"),
        (i.PREMIUM_3_MONTH_TIER_2 = "642251038925127690"),
        (i.PREMIUM_6_MONTH_TIER_2 = "944037208325619722"),
        (i.PREMIUM_3_MONTH_GUILD = "944037355453415424"),
        (i.PREMIUM_6_MONTH_GUILD = "944037391444738048"),
        (i.PREMIUM_MONTH_LEGACY = "511651856145973248"),
        (i.PREMIUM_YEAR_LEGACY = "511651860671627264"),
        (i.PREMIUM_GROUP_MONTH = "1432523012455792640"),
        i);
      let K = new Set([
          "978380692553465866",
          "1024422698568122368",
          "511651871736201216",
          "511651876987469824",
          "511651880837840896",
          "642251038925127690",
          "944037208325619722",
          "511651885459963904",
          "1432523012455792640",
          "511651856145973248",
          "511651860671627264",
        ]),
        k = new Set([
          "511651880837840896",
          "642251038925127690",
          "944037208325619722",
          "511651885459963904",
        ]),
        V = new Set([
          "590665532894740483",
          "944037355453415424",
          "944037391444738048",
          "590665538238152709",
        ]),
        W = new Set([
          "978380692553465866",
          "511651871736201216",
          "511651880837840896",
        ]),
        Y = new Set([
          "628379151761408000",
          "944265614527037440",
          "944265636643602432",
          "628381571568631808",
        ]),
        j = Object.freeze({
          "978380684370378762": "978380692553465866",
          "521846918637420545": "511651871736201216",
          "521847234246082599": "511651880837840896",
          "628379670982688768": void 0,
          "590663762298667008": void 0,
          "521842865731534868": void 0,
        }),
        x = Object.freeze({
          "978380684370378762": "1024422698568122368",
          "521846918637420545": "511651876987469824",
          "521847234246082599": "511651885459963904",
          "628379670982688768": void 0,
          "590663762298667008": void 0,
          "521842865731534868": void 0,
        });
      var z =
          (((l = {})[(l.MONTH = 1)] = "MONTH"),
          (l[(l.YEAR = 2)] = "YEAR"),
          (l[(l.DAY = 3)] = "DAY"),
          l),
        J =
          (((u = {})[(u.DAY = 1)] = "DAY"),
          (u[(u.WEEK = 2)] = "WEEK"),
          (u[(u.MONTH = 3)] = "MONTH"),
          (u[(u.YEAR = 4)] = "YEAR"),
          u);
      let X = Object.freeze({ 3: O.t["t9uG/o"], 1: O.t.FSOz78, 2: O.t.lG6a5x }),
        Z = Object.freeze({
          628379151761408000: {
            id: "628379151761408000",
            name: "None Monthly",
            skuId: "628379670982688768",
            interval: 1,
            intervalCount: 1,
          },
          "628381571568631808": {
            id: "628381571568631808",
            name: "None Yearly",
            skuId: "628379670982688768",
            interval: 2,
            intervalCount: 1,
          },
          "978380692553465866": {
            id: "978380692553465866",
            name: "Nitro Basic Monthly",
            premiumType: 3,
            skuId: "978380684370378762",
            interval: 1,
            intervalCount: 1,
          },
          "1024422698568122368": {
            id: "1024422698568122368",
            name: "Nitro Basic Yearly",
            premiumType: 3,
            skuId: "978380684370378762",
            interval: 2,
            intervalCount: 1,
          },
          "511651871736201216": {
            id: "511651871736201216",
            name: "Nitro Classic Monthly",
            premiumType: 1,
            skuId: "521846918637420545",
            interval: 1,
            intervalCount: 1,
          },
          "511651876987469824": {
            id: "511651876987469824",
            name: "Nitro Classic Yearly",
            premiumType: 1,
            skuId: "521846918637420545",
            interval: 2,
            intervalCount: 1,
          },
          "511651880837840896": {
            id: "511651880837840896",
            name: "Nitro Monthly",
            premiumType: 2,
            skuId: "521847234246082599",
            interval: 1,
            intervalCount: 1,
          },
          "511651885459963904": {
            id: "511651885459963904",
            name: "Nitro Yearly",
            premiumType: 2,
            skuId: "521847234246082599",
            interval: 2,
            intervalCount: 1,
          },
          "590665532894740483": {
            id: "590665532894740483",
            name: "Nitro Server Boost Monthly",
            skuId: "590663762298667008",
            interval: 1,
            intervalCount: 1,
          },
          "590665538238152709": {
            id: "590665538238152709",
            name: "Nitro Server Boost Yearly",
            skuId: "590663762298667008",
            interval: 2,
            intervalCount: 1,
          },
          "642251038925127690": {
            id: "642251038925127690",
            name: "Nitro Three Month",
            premiumType: 2,
            skuId: "521847234246082599",
            interval: 1,
            intervalCount: 3,
          },
          "944037208325619722": {
            id: "944037208325619722",
            name: "Nitro Six Month",
            premiumType: 2,
            skuId: "521847234246082599",
            interval: 1,
            intervalCount: 6,
          },
          "944037355453415424": {
            id: "944037355453415424",
            name: "Nitro Server Boost Three Month",
            skuId: "590663762298667008",
            interval: 1,
            intervalCount: 3,
          },
          "944037391444738048": {
            id: "944037391444738048",
            name: "Nitro Server Boost Six Month",
            skuId: "590663762298667008",
            interval: 1,
            intervalCount: 6,
          },
          "944265614527037440": {
            id: "944265614527037440",
            name: "None Three Month",
            skuId: "628379670982688768",
            interval: 1,
            intervalCount: 3,
          },
          "944265636643602432": {
            id: "944265636643602432",
            name: "None Six Month",
            skuId: "628379670982688768",
            interval: 1,
            intervalCount: 6,
          },
          "511651856145973248": {
            id: "511651856145973248",
            name: "Nitro Monthly (Legacy)",
            premiumType: 2,
            skuId: "521842865731534868",
            interval: 1,
            intervalCount: 1,
          },
          "511651860671627264": {
            id: "511651860671627264",
            name: "Nitro Classic Yearly (Legacy)",
            premiumType: 2,
            skuId: "521842865731534868",
            interval: 2,
            intervalCount: 1,
          },
          "1432523012455792640": {
            id: "1432523012455792640",
            name: "Nitro Squad Monthly",
            premiumType: 2,
            skuId: "521847234246082599",
            interval: 1,
            intervalCount: 1,
          },
        }),
        Q = 30,
        q = 2,
        $ = 3,
        ee = 28,
        et = 30,
        en = 30,
        eo = 7,
        er = 30,
        ea = "775514091874680832",
        ei = "845031178288889946",
        el = 6048e5,
        eu = 3456e5,
        es = 2808e5,
        e_ = 14,
        ed = "520373071933079552",
        eC = "902329034132684800",
        eE = "983601860436819968",
        ep = "983601860436819969",
        eh = "984244797441048577",
        ec = "1004850445463584768",
        eA = "1073698058383917056",
        ey = "1070132870233980928",
        eI = "1267968635301789696",
        em = "1267969164312576000",
        eT = "1268347360493174784",
        eS = "1161363847311785984",
        eR = [
          ed,
          eC,
          eE,
          ep,
          eh,
          ec,
          eA,
          ey,
          eI,
          em,
          eT,
          "1271484512081285191",
          eS,
        ],
        eN = "1150904354090532864",
        eg = "1199128659810582528",
        eO = "1204865493622587392",
        eP = "1204867673024888832",
        eM = "1215346678383509504",
        ef = "1215366184820539392",
        eL = "1488790996522238054",
        eU = "1223319122125783040",
        eD = "1223380890109870080",
        eG = [eU, eD],
        eb = [eS],
        ew = [],
        ev = "1397626558063050855",
        eF = "1397609029626232955",
        eH = "1460778896906522665",
        eB = 8,
        eK = 96,
        ek = Object.freeze({
          [ed]: { id: ed, skus: ["521847234246082599"] },
          [eC]: { id: eC, skus: ["521847234246082599"] },
          [eE]: { id: eE, skus: ["521847234246082599"] },
          [ep]: { id: ep, skus: ["521847234246082599"] },
          [eh]: { id: eh, skus: ["521847234246082599"] },
          [ec]: { id: ec, skus: ["521847234246082599"] },
          [ey]: { id: ey, skus: ["978380684370378762"] },
          [eA]: { id: eA, skus: ["521847234246082599"] },
          [eT]: { id: eT, skus: ["521847234246082599"] },
          [eS]: { id: eS, skus: ["521847234246082599"] },
        });
      var eV =
          (((s = {}).ANIMATED_GUILD_BANNER_TOOLTIP =
            "animated_guild_banner_tooltip"),
          (s.EMOJI_PICKER_SEARCH = "emoji_picker_search"),
          (s.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked"),
          (s.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked"),
          (s.EMOJI_PICKER_REACTION_EMOJI_CLICKED =
            "emoji_picker_reaction_emoji_clicked"),
          (s.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED =
            "emoji_picker_super_reaction_emoji_clicked"),
          (s.EMOJI_PICKER_STATUS_EMOJI_CLICKED =
            "emoji_picker_status_emoji_clicked"),
          (s.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED =
            "emoji_picker_top_server_emoji_clicked"),
          (s.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED =
            "emoji_picker_newly_added_emoji_clicked"),
          (s.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked"),
          (s.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline"),
          (s.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal"),
          (s.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover"),
          (s.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover"),
          (s.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover"),
          (s.EMOJI_IN_BURST_REACTION_HOVER_UPSELL =
            "emoji_in_burst_reaction_hover_upsell"),
          (s.EMOJI_PICKER_FLOATING_UPSELL = "emoji_picker_floating_upsell"),
          (s.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover"),
          (s.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell"),
          (s.STREAM_QUALITY_INDICATOR = "stream_quality_indicator"),
          (s.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator"),
          (s.MESSAGE_LENGTH_UPSELL = "message_length_upsell"),
          (s.MESSAGE_LENGTH_IN_EDITOR_UPSELL =
            "message_length_in_editor_upsell"),
          (s.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal"),
          (s.CUSTOM_PROFILE_TRY_OUT_UPSELL =
            "try out custom profile in settings upsell"),
          (s.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal"),
          (s.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline"),
          (s.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list"),
          (s.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal"),
          (s.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal"),
          (s.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell"),
          (s.PREMIUM_GUILD_IDENTITY_MODAL =
            "premium guild identity upsell alert"),
          (s.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON =
            "custom profiles settings banner upsell"),
          (s.STICKER_PICKER_UPSELL = "sticker_picker_upsell"),
          (s.ANIMATED_AVATAR_PREVIEW_GIF_MODAL =
            "animated avatar preview gif modal"),
          (s.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal"),
          (s.UPLOAD_ERROR_UPSELL = "upload error upsell"),
          (s.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE =
            "premium guild member profile upsell inline"),
          (s.CONCURRENT_ACTIVITIES = "Concurrent Activities"),
          (s.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED =
            "premium_uncancel_winback_modal_viewed"),
          (s.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET =
            "animated_video_background_new_preset"),
          (s.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip"),
          (s.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell"),
          (s.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji"),
          (s.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION =
            "profile customization"),
          (s.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING =
            "hd streaming"),
          (s.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS =
            "larger file uploads"),
          (s.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo"),
          (s.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell"),
          (s.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL =
            "Voice Channel Effect Bar Emoji Upsell"),
          (s.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED =
            "voice_channel_effects_toggle_clicked"),
          (s.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED =
            "voice_channel_effects_toggle_clicked_expanded"),
          (s.PROFILE_EFFECTS_INLINE_SETTINGS =
            "profile_effects_inline_settings"),
          (s.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE =
            "profile_effects_inline_settings_mobile"),
          (s.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell"),
          (s.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out"),
          (s.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell"),
          (s.BURST_REACTION_UPSELL = "burst_reaction_upsell"),
          (s.BURST_REACTION_QUICK_ACTION_UPSELL =
            "burst_reaction_quick_action_upsell"),
          (s.BURST_REACTION_CONTEXT_MENU_UPSELL =
            "burst_reaction_context_menu_upsell"),
          (s.PREMIUM_CLIENT_THEME_TRY_IT_OUT =
            "premium_client_theme_try_it_out"),
          (s.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL =
            "premium_client_theme_settings_upsell"),
          (s.VIDEO_STAGE_LIMIT = "video_stage_limit"),
          (s.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked"),
          (s.APP_ICON_UPSELL = "app_icon_upsell"),
          (s.COLLECTIBLES_SHOP = "collectibles_shop"),
          (s.COLLECTIBLES_PROFILE_SETTINGS_UPSELL =
            "collectibles_profile_settings_upsell"),
          (s.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL =
            "collectibles_premium_marketing_page_upsell"),
          (s.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL =
            "clips_guild_sidebar_coachmark_premium_early_access_upsell"),
          (s.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL =
            "clips_go_live_premium_early_access_roadblock_upsell"),
          (s.CUSTOM_NOTIFICATION_SOUNDS_UPSELL =
            "custom_notification_sounds_upsell"),
          (s.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL =
            "custom_notification_sounds_settings_inline_upsell"),
          (s.HD_STREAMING_VIEWER_UPSELL = "hd_streaming_viewer_upsell"),
          (s.FOR_LATER_MODAL_UPSELL = "for_later_modal_upsell"),
          (s.TRY_IT_OUT_MODAL_UPSELL = "try_it_out_modal_upsell"),
          (s.ANIMATED_BANNER_MODAL_UPSELL = "animated_banner_modal_upsell"),
          (s.ANIMATED_AVATAR_MODAL_UPSELL = "animated_avatar_modal_upsell"),
          (s.PROFILE_EFFECT_MODAL_UPSELL = "profile_effect_modal_upsell"),
          (s.AVATAR_DECORATION_MODAL_UPSELL = "avatar_decoration_modal_upsell"),
          (s.NAMEPLATE_MODAL_UPSELL = "nameplate_modal_upsell"),
          (s.RECENT_AVATARS_ROADBLOCK_UPSELL =
            "recent_avatars_roadblock_upsell"),
          (s.EMOJI_EVERYWHERE_INLINE_UPSELL = "emoji_everywhere_inline_upsell"),
          (s.EMOJI_EVERYWHERE_UPSELL = "emoji_everywhere_upsell"),
          (s.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL =
            "soundboard_everywhere_inline_upsell"),
          (s.SOUNDBOARD_EVERYWHERE_UPSELL = "soundboard_everywhere_upsell"),
          (s.LARGER_FILE_UPLOAD_INLINE_UPSELL =
            "larger_file_upload_inline_upsell"),
          (s.LARGER_FILE_UPLOAD_UPSELL = "larger_file_upload_upsell"),
          (s.ANIMATED_EMOJI_UPSELL = "animated_emoji_upsell"),
          (s.CLIENT_THEMES_UPSELL = "client_themes_upsell"),
          (s.CUSTOM_THEMES_UPSELL = "custom_themes_upsell"),
          (s.APP_ICON_INLINE_UPSELL = "app_icons_inline_upsell"),
          (s.STREAM_QUALITY_UPSELL = "stream_quality_upsell"),
          s),
        eW =
          (((_ = {})[(_.PREMIUM_TIER_1 = 1)] = "PREMIUM_TIER_1"),
          (_[(_.PREMIUM_TIER_2 = 2)] = "PREMIUM_TIER_2"),
          (_[(_.GUILD_BOOST = 4)] = "GUILD_BOOST"),
          (_[(_.PREMIUM_TIER_0 = 8)] = "PREMIUM_TIER_0"),
          _);
      let eY = Object.freeze({
          "978380684370378762": 8,
          "521846918637420545": 1,
          "521847234246082599": 2,
          "590663762298667008": 4,
        }),
        ej = 524288e3,
        ex = 0x3200000,
        ez = 0x6400000,
        eJ = 262144e3,
        eX = 5,
        eZ = {
          [N.TVA.NONE]: eX,
          [N.TVA.TIER_1]: 10,
          [N.TVA.TIER_2]: 15,
          [N.TVA.TIER_3]: 30,
        },
        eQ = {
          [N.TVA.NONE]: eZ[N.TVA.NONE],
          [N.TVA.TIER_1]: eZ[N.TVA.NONE] + eZ[N.TVA.TIER_1],
          [N.TVA.TIER_2]: eZ[N.TVA.NONE] + eZ[N.TVA.TIER_1] + eZ[N.TVA.TIER_2],
          [N.TVA.TIER_3]:
            eZ[N.TVA.NONE] +
            eZ[N.TVA.TIER_1] +
            eZ[N.TVA.TIER_2] +
            eZ[N.TVA.TIER_3],
        },
        eq = {
          [N.TVA.NONE]: eB,
          [N.TVA.TIER_1]: 24,
          [N.TVA.TIER_2]: 36,
          [N.TVA.TIER_3]: 48,
        },
        e$ = Object.freeze({
          [N.TVA.NONE]: {
            features: [],
            limits: {
              emoji: g.DEFAULT_EMOJI_SLOTS,
              bitrate: N.DqD,
              fileSize: N.TbF,
              screenShareQualityFramerate: 30,
              screenShareQualityResolution: "720p",
              soundboardSounds: eq[N.TVA.NONE],
              stickers: eQ[N.TVA.NONE],
              stageVideoUsers: N._i_,
            },
          },
          [N.TVA.TIER_1]: {
            features: [
              N.GuildFeatures.INVITE_SPLASH,
              N.GuildFeatures.ANIMATED_ICON,
            ],
            limits: {
              emoji: 100,
              bitrate: 128e3,
              fileSize: N.TbF,
              screenShareQualityFramerate: 60,
              screenShareQualityResolution: "720p",
              soundboardSounds: eq[N.TVA.TIER_1],
              stickers: eQ[N.TVA.TIER_1],
              stageVideoUsers: N._i_,
            },
          },
          [N.TVA.TIER_2]: {
            features: [
              N.GuildFeatures.INVITE_SPLASH,
              N.GuildFeatures.ANIMATED_ICON,
              N.GuildFeatures.BANNER,
              N.GuildFeatures.ROLE_ICONS,
            ],
            limits: {
              emoji: 150,
              bitrate: 256e3,
              fileSize: 0x3200000,
              screenShareQualityFramerate: 60,
              screenShareQualityResolution: "1080p",
              soundboardSounds: eq[N.TVA.TIER_2],
              stickers: eQ[N.TVA.TIER_2],
              stageVideoUsers: N.nyz,
            },
          },
          [N.TVA.TIER_3]: {
            features: [
              N.GuildFeatures.INVITE_SPLASH,
              N.GuildFeatures.ANIMATED_ICON,
              N.GuildFeatures.BANNER,
              N.GuildFeatures.ANIMATED_BANNER,
              N.GuildFeatures.VANITY_URL,
              N.GuildFeatures.ROLE_ICONS,
            ],
            limits: {
              emoji: 250,
              bitrate: 384e3,
              fileSize: 0x6400000,
              screenShareQualityFramerate: 60,
              screenShareQualityResolution: "1080p",
              soundboardSounds: eq[N.TVA.TIER_3],
              stickers: eQ[N.TVA.TIER_3],
              stageVideoUsers: N.uaN,
            },
          },
        }),
        e2 = [
          "978380692553465866",
          "1024422698568122368",
          "511651871736201216",
          "511651876987469824",
          "511651880837840896",
          "642251038925127690",
          "944037208325619722",
          "511651885459963904",
          "1432523012455792640",
        ],
        e0 = [
          "590665532894740483",
          "944037355453415424",
          "944037391444738048",
          "590665538238152709",
        ];
      var e6 =
          (((d = {}).SOUNDBOARD_PLAY = "soundboard play"),
          (d.PROFILE_THEME_COLOR = "profile_theme_color"),
          (d.PROFILE_BANNER = "profile_banner"),
          (d.ANIMATED_AVATAR = "animated_avatar"),
          (d.AVATAR_DECORATION = "avatar_decoration"),
          (d.CLIENT_THEME = "client_theme"),
          (d.PROFILE_EFFECT = "profile_effect"),
          (d.DISPLAY_NAME_STYLES = "display_name_styles"),
          (d.PRESET = "preset"),
          d),
        e1 =
          (((C = {}).FREE = "free"),
          (C.PREMIUM_STANDARD = "premium-standard"),
          C);
      let e8 = {
        "1024422698568122368": 16,
        "511651876987469824": 16,
        "511651885459963904": 16,
        "944037208325619722": 8,
        "642251038925127690": 5,
      };
      var e5 =
        (((E = {}).HIGH_STREAMING_QUALITY = "high_streaming_quality"),
        (E.MID_STREAMING_QUALITY = "mid_streaming_quality"),
        E);
      let e4 = Object.freeze({
        high_streaming_quality: 2,
        mid_streaming_quality: 1,
      });
      var e3 =
          (((p = {})[(p.UserSettings = 0)] = "UserSettings"),
          (p[(p.ApplicationStoreHome = 1)] = "ApplicationStoreHome"),
          p),
        e9 =
          (((h = {})[(h.SNOWGLOBE = 1)] = "SNOWGLOBE"),
          (h[(h.BOX = 2)] = "BOX"),
          (h[(h.CUP = 3)] = "CUP"),
          (h[(h.STANDARD_BOX = 4)] = "STANDARD_BOX"),
          (h[(h.CAKE = 5)] = "CAKE"),
          (h[(h.CHEST = 6)] = "CHEST"),
          (h[(h.COFFEE = 7)] = "COFFEE"),
          (h[(h.SEASONAL_STANDARD_BOX = 8)] = "SEASONAL_STANDARD_BOX"),
          (h[(h.SEASONAL_CAKE = 9)] = "SEASONAL_CAKE"),
          (h[(h.SEASONAL_CHEST = 10)] = "SEASONAL_CHEST"),
          (h[(h.SEASONAL_COFFEE = 11)] = "SEASONAL_COFFEE"),
          (h[(h.NITROWEEN_STANDARD = 12)] = "NITROWEEN_STANDARD"),
          h);
      let e7 = Object.freeze({
          IS_BLOCKED_IOS: 32,
          IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
          SUPPRESS_NOTIFICATION: 128,
        }),
        te = Object.freeze({
          3: { fileSize: 0x3200000 },
          1: { fileSize: 0x3200000 },
          2: { fileSize: ej },
        });
      var tt = (((c = {}).BOOST = "boost"), (c.DISMISS = "dismiss"), c);
      let tn = new Set(["PL", "TR"]),
        to = [1, 2, 3];
      [8, 9, 11, 10].concat(to);
      let tr = 190;
      var ta =
          (((A = {})[(A.FRIEND_ANNIVERSARY = 0)] = "FRIEND_ANNIVERSARY"), A),
        ti =
          (((y = {}).VIEW_ALL = "view_all"),
          (y.SEND_MESSAGE = "send_message"),
          y),
        tl =
          (((I = {})[(I.DM_CHANNEL = 0)] = "DM_CHANNEL"),
          (I[(I.SHOP_PAGE = 1)] = "SHOP_PAGE"),
          (I[(I.USER_PROFILE_WISHLIST = 2)] = "USER_PROFILE_WISHLIST"),
          (I[(I.DM_CHANNEL_WISHLIST = 3)] = "DM_CHANNEL_WISHLIST"),
          (I[(I.GUILD_CHANNEL = 4)] = "GUILD_CHANNEL"),
          I);
      let tu = 1,
        ts = 30,
        t_ = 20;
      var td =
        (((m = {}).PREMIUM_TENURE_1_MONTH = "premium_tenure_1_month_v2"),
        (m.PREMIUM_TENURE_3_MONTH = "premium_tenure_3_month_v2"),
        (m.PREMIUM_TENURE_6_MONTH = "premium_tenure_6_month_v2"),
        (m.PREMIUM_TENURE_12_MONTH = "premium_tenure_12_month_v2"),
        (m.PREMIUM_TENURE_24_MONTH = "premium_tenure_24_month_v2"),
        (m.PREMIUM_TENURE_36_MONTH = "premium_tenure_36_month_v2"),
        (m.PREMIUM_TENURE_60_MONTH = "premium_tenure_60_month_v2"),
        (m.PREMIUM_TENURE_72_MONTH = "premium_tenure_72_month_v2"),
        m);
      let tC = [
          "premium_tenure_1_month_v2",
          "premium_tenure_3_month_v2",
          "premium_tenure_6_month_v2",
          "premium_tenure_12_month_v2",
          "premium_tenure_24_month_v2",
          "premium_tenure_36_month_v2",
          "premium_tenure_60_month_v2",
          "premium_tenure_72_month_v2",
        ],
        tE = {
          premium_tenure_1_month_v2: {
            id: "premium_tenure_1_month_v2",
            nameUnformatted: O.t.LR1C0a,
            nameUnformattedNitro: O.t.tx9Fvw,
            tenureReqNumMonths: 1,
            hasWideArt: !1,
            glowColor: "#b54913",
          },
          premium_tenure_3_month_v2: {
            id: "premium_tenure_3_month_v2",
            nameUnformatted: O.t["rI1/3H"],
            nameUnformattedNitro: O.t.xJNb5C,
            tenureReqNumMonths: 3,
            hasWideArt: !1,
            glowColor: "#9e9e9e",
          },
          premium_tenure_6_month_v2: {
            id: "premium_tenure_6_month_v2",
            nameUnformatted: O.t.VkhVKS,
            nameUnformattedNitro: O.t["4scBFY"],
            tenureReqNumMonths: 6,
            hasWideArt: !1,
            glowColor: "#ffa813",
          },
          premium_tenure_12_month_v2: {
            id: "premium_tenure_12_month_v2",
            nameUnformatted: O.t.gzUfNS,
            nameUnformattedNitro: O.t["83Jw2B"],
            tenureReqNumMonths: 12,
            hasWideArt: !1,
            glowColor: "#5eacc2",
          },
          premium_tenure_24_month_v2: {
            id: "premium_tenure_24_month_v2",
            nameUnformatted: O.t.fuwTPm,
            nameUnformattedNitro: O.t.vRSCKv,
            tenureReqNumMonths: 24,
            hasWideArt: !1,
            glowColor: "#6d5cf2",
          },
          premium_tenure_36_month_v2: {
            id: "premium_tenure_36_month_v2",
            nameUnformatted: O.t.qNhNk4,
            nameUnformattedNitro: O.t.mV86tk,
            tenureReqNumMonths: 36,
            hasWideArt: !1,
            glowColor: "#32c102",
          },
          premium_tenure_60_month_v2: {
            id: "premium_tenure_60_month_v2",
            nameUnformatted: O.t["wvX+eD"],
            nameUnformattedNitro: O.t.WcsLxW,
            tenureReqNumMonths: 60,
            hasWideArt: !0,
            glowColor: "#f29cc3",
          },
          premium_tenure_72_month_v2: {
            id: "premium_tenure_72_month_v2",
            nameUnformatted: O.t["/menIw"],
            nameUnformattedNitro: O.t["Z/qgMK"],
            tenureReqNumMonths: 72,
            hasWideArt: !0,
            glowColor: "#078292",
          },
        };
      var tp =
          (((T = {})[(T.NONE = 0)] = "NONE"),
          (T[(T.FP_ONLY = 1)] = "FP_ONLY"),
          (T[(T.FP_SUB_PAUSED = 2)] = "FP_SUB_PAUSED"),
          T),
        th = (((S = {})[(S.HOUR = 1)] = "HOUR"), (S[(S.DAY = 2)] = "DAY"), S);
      let tc = {
        [R.j.PREMIUM_TIER_2_1_HOUR]: [1, 1],
        [R.j.PREMIUM_TIER_2_1_DAY]: [2, 1],
        [R.j.PREMIUM_TIER_2_3_DAY]: [2, 3],
      };
    },
    543767(e, t, n) {
      n.d(t, {
        C8: () => m,
        FP: () => y,
        Kq: () => I,
        OQ: () => p,
        sL: () => T,
      });
      var o = n(64700),
        r = n(284009),
        a = n.n(r),
        i = n(636537),
        l = n(228366),
        u = n(845584),
        s = n(570221),
        _ = n(927578),
        d = n(371794),
        C = n(652215);
      async function E(e) {
        let {
            items: t,
            paymentSourceId: n,
            trialId: o,
            code: r,
            applyEntitlements: a = !1,
            currency: d,
            renewal: E,
            metadata: p,
          } = e,
          h = {
            items: (t = (0, _.qn)(t)).map((e) => {
              let { planId: t, ...n } = e;
              return { ...n, plan_id: t };
            }),
            payment_source_id: n,
            trial_id: o,
            code: r,
            apply_entitlements: a,
            currency: d,
            renewal: E,
            metadata: p,
          };
        try {
          let e = await i.Bo.post({
              url: C.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
              body: h,
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
            t = s.A.createInvoiceFromServer(e.body);
          return (
            t.checkoutContext?.payment_sources != null &&
              l.h.dispatch({
                type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                checkoutContext: t.checkoutContext,
                paymentSourceId: n,
              }),
            t
          );
        } catch (e) {
          throw new u.Ey(e);
        }
      }
      async function p(e) {
        let {
          subscriptionId: t,
          items: n,
          paymentSourceId: o,
          renewal: r,
          currency: a,
          applyEntitlements: d = !1,
          analyticsLocations: E,
          analyticsLocation: p,
          userDiscountOfferId: h,
        } = e;
        null != n && (n = (0, _.qn)(n));
        let c = {
          items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
          }),
          payment_source_id: o,
          renewal: r,
          apply_entitlements: d,
          currency: a,
          user_discount_offer_id: h,
        };
        try {
          let e = await i.Bo.patch({
              url: C.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
              query: { location: p, location_stack: E },
              body: c,
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
            n = s.A.createInvoiceFromServer(e.body);
          return (
            null != o &&
              n.checkoutContext?.payment_sources != null &&
              l.h.dispatch({
                type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                checkoutContext: n.checkoutContext,
                paymentSourceId: o,
              }),
            n
          );
        } catch (e) {
          throw new u.Ey(e);
        }
      }
      async function h(e) {
        let {
          paymentSourceId: t,
          skuId: n,
          subscriptionPlanId: o,
          currency: r,
          loadId: i,
        } = e;
        a()(n, "SKU ID is missing for one time purchase gift invoice preview");
        try {
          let e = await (0, d.aP)({
            url: C.Rsh.STORE_SKU_PURCHASE(n),
            query: {
              gift: !0,
              payment_source_id: t,
              sku_subscription_plan_id: o,
              currency: r,
              load_id: i,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
          return s.A.createInvoiceFromServer(e.body);
        } catch (e) {
          throw new u.Ey(e);
        }
      }
      async function c(e) {
        let { subscriptionId: t, preventFetch: n } = e;
        if (n) return null;
        let o = await i.Bo.get({
          url: C.Rsh.BILLING_SUBSCRIPTION_INVOICE(t),
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        return s.A.createInvoiceFromServer(o.body);
      }
      function A(e, t) {
        let { preventFetch: n = !1 } = e,
          [r, a] = (0, o.useState)(null),
          [i, l] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            let e = !1;
            async function o() {
              try {
                l(null);
                let n = await t();
                e || a(n);
              } catch (t) {
                e || (l(t), a(null));
              }
            }
            return (
              n || o(),
              () => {
                e = !0;
              }
            );
          }, [n, t]),
          [r, i]
        );
      }
      function y(e) {
        let t = (0, o.useRef)(e);
        (0, o.useEffect)(() => {
          t.current = e;
        });
        let n = JSON.stringify(e);
        return A(
          e,
          (0, o.useCallback)(() => h(t.current), [n]),
        );
      }
      function I(e) {
        if ("subscriptionId" in e && null == e.subscriptionId) {
          let { subscriptionId: t, ...n } = e;
          e = n;
        }
        let t = (0, o.useRef)(e);
        (0, o.useEffect)(() => {
          t.current = e;
        });
        let n = JSON.stringify(e),
          r = (0, o.useCallback)(() => {
            let { current: e } = t;
            return "subscriptionId" in e ? p(e) : "items" in e ? E(e) : null;
          }, [n]);
        return A(e, r);
      }
      function m(e) {
        let t = (0, o.useRef)(e);
        (0, o.useEffect)(() => {
          t.current = e;
        });
        let n = JSON.stringify(e);
        return A(
          e,
          (0, o.useCallback)(() => c(t.current), [n]),
        );
      }
      function T(e) {
        let t = e.subscriptionPlanPrice;
        return (
          e.discounts.forEach((n) => {
            let o = n.amount / e.quantity;
            t -= o;
          }),
          t
        );
      }
    },
    573359(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(17928),
        r = n(228366);
      let a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
      class i extends o.Ay.Store {
        static displayName = "WowMomentConfirmationStore";
        getState() {
          return a;
        }
        get isDisplayingWowMomentConfirmation() {
          return a.isDisplayingWowMomentConfirmation;
        }
        get isAnimated() {
          return a.isAnimated;
        }
      }
      let l = new i(r.h, {
        LOGOUT: function () {
          a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
        },
        WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION:
          function (e) {
            let { value: t, isAnimated: n } = e;
            (a.isDisplayingWowMomentConfirmation = t), (a.isAnimated = n);
          },
      });
    },
    70730(e, t, n) {
      n.d(t, { p: () => r, u: () => o });
      let o = (0, n(945810).mj)({
          kind: "user",
          name: "2025-10-friendship-anniversary-gifting",
          defaultConfig: { enabled: !1, showDmPrompts: !1 },
          variations: {
            0: { enabled: !1, showDmPrompts: !1 },
            1: { enabled: !0, showDmPrompts: !0 },
            2: { enabled: !0, showDmPrompts: !1 },
          },
        }),
        r = (e) => o.getConfig({ location: e }).enabled;
    },
    593032(e, t, n) {
      n.d(t, { A: () => r });
      let o = (0, n(945810).mj)({
        name: "2025-12-katsudon",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      function r(e) {
        let { location: t } = e,
          { enabled: n } = o.useConfig({ location: t });
        return n;
      }
    },
    313246(e, t, n) {
      n.d(t, { A: () => d });
      var o = n(64700),
        r = n(17928),
        a = n(451988);
      function i(e) {
        return (
          null != e &&
          null != e.expires_at &&
          Date.now() > Date.parse(e.expires_at)
        );
      }
      var l = n(287809),
        u = n(354670),
        s = n(927578),
        _ = n(788868);
      function d(e, t) {
        let n = (0, r.bG)([u.A], () => u.A.getUserDiscountOffer(e)),
          [d, C] = o.useState(i(n)),
          E = (0, r.bG)([l.default], () =>
            (0, s.TW)(l.default.getCurrentUser()),
          ),
          p = e === _.q || e === _.EG;
        return (
          o.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.Ep(),
              t = () => {
                let o =
                  null != n.expires_at
                    ? Date.parse(n.expires_at) - Date.now()
                    : 0;
                e?.start(o, () => {
                  !d && i(n) ? C(!0) : t();
                });
              };
            return t(), () => e.stop();
          }, [d, n]),
          !d && (!E || t || p) ? n : null
        );
      }
    },
    477421(e, t, n) {
      n.d(t, { A: () => _ });
      var o = n(64700),
        r = n(17928),
        a = n(228366),
        i = n(323082),
        l = n(495544),
        u = n(615405),
        s = n(295405);
      function _() {
        let e = (0, r.bG)([s.A], () => s.A.getDefaultBillingCountryCode()),
          t = (0, r.bG)([u.A], () => u.A.ipLocation),
          n = (0, r.bG)([l.default], () => l.default.isAuthenticated());
        return (
          o.useEffect(() => {
            a.h.wait(() => {
              !n ||
                u.A.isPaymentSourceFetching ||
                s.A.hasFetchedPaymentSources ||
                i.$o();
            });
          }, [n]),
          o.useEffect(() => {
            n && !u.A.ipLocationLoaded && i.jZ();
          }, [t, n]),
          {
            defaultBillingCountryCode: e,
            ipCountryCode: t?.countryCode,
            ipSubdivisionCode: t?.subdivisionCode,
          }
        );
      }
    },
    586983(e, t, n) {
      n.d(t, { A: () => a });
      var o = n(64700),
        r = n(27867);
      function a(e) {
        let { delay: t, disable: n = !1 } = e,
          a = (0, r.A)();
        o.useEffect(() => {
          if (t <= 0 || n) return;
          let e = setTimeout(() => {
            a();
          }, t);
          return () => clearTimeout(e);
        }, [t, n, a]);
      }
    },
    349871(e, t, n) {
      n.d(t, { c$: () => l, Nh: () => u, kQ: () => s });
      var o,
        r = n(136722),
        a = n(441574),
        i =
          (((o = {})[(o.INCREASED_FILE_UPLOAD_SIZE = 0)] =
            "INCREASED_FILE_UPLOAD_SIZE"),
          (o[(o.INCREASED_GUILD_LIMIT = 1)] = "INCREASED_GUILD_LIMIT"),
          o);
      function l(e) {
        if (null == e) return null;
        let t = {};
        for (let [n, o] of Object.entries(e.config_by_perk))
          t[n] = {
            source: o.source,
            kind: (function (e) {
              if (null != e.kind)
                switch (e.kind.type) {
                  case i.INCREASED_FILE_UPLOAD_SIZE:
                    return {
                      type: i.INCREASED_FILE_UPLOAD_SIZE,
                      maxSize: e.kind.max_size,
                    };
                  case i.INCREASED_GUILD_LIMIT:
                    return {
                      type: i.INCREASED_GUILD_LIMIT,
                      maxGuilds: e.kind.max_guilds,
                    };
                  default:
                    return;
                }
            })(o),
          };
        return {
          activePerksBitmask: e.active_perks_bitmask,
          configByPerk: t,
          rulesVersion: e.rules_version,
        };
      }
      function u(e, t) {
        if (null == e) return !1;
        let n = e.activePerksBitmask,
          o = Math.floor(t / 64);
        return !(o >= n.length) && r.zy(r.iu(n[o]), r.jB(t % 64));
      }
      function s(e, t) {
        if (null == e) return;
        let n = e.configByPerk[String(t)];
        return n?.source != null
          ? n.source
          : u(e, t)
            ? [a.g$.SOURCE_NITRO]
            : void 0;
      }
    },
    251913(e, t, n) {
      n.d(t, { QR: () => p, b: () => E, oc: () => C });
      var o,
        r = n(64700),
        a = n(17928),
        i = n(451988),
        l = n(323082),
        u = n(446458),
        s = n(166532),
        _ = n(566980),
        d = n(153084),
        C =
          (((o = {})[(o.PENDING = 1)] = "PENDING"),
          (o[(o.ERROR = 2)] = "ERROR"),
          (o[(o.NONE = 3)] = "NONE"),
          o);
      function E(e, t, n, o) {
        let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = arguments.length > 5 ? arguments[5] : void 0;
        r.useEffect(() => {
          null != e &&
            (1 === t && e !== s.pn.AWAITING_AUTHENTICATION
              ? n(s.pn.AWAITING_AUTHENTICATION)
              : e === s.pn.AWAITING_AUTHENTICATION &&
                (2 === t
                  ? n(s.pn.REVIEW)
                  : 3 === t &&
                    (a
                      ? null != i
                        ? i()
                        : n(s.pn.REVIEW)
                      : (o(_.h.COMPLETED), n(s.pn.CONFIRM)))));
        }, [e, t, n, o, a, i]);
      }
      function p(e) {
        let t = (0, a.bG)([d.A], () => d.A.awaitingPaymentId),
          n = (0, a.bG)([u.A], () => u.A.isConnected()),
          o = r.useRef(new i.IX());
        r.useEffect(() => {
          n || null == t || 1 !== e
            ? o.current.stop()
            : o.current.start(5e3, () => (0, l.TK)(t));
        }, [t, e, n]);
      }
    },
    501957(e, t, n) {
      n.d(t, { U: () => u, j: () => l });
      var o = n(925847),
        r = n(954571),
        a = n(927578),
        i = n(652215);
      function l(e) {
        return {
          subscription_id: e.id,
          subscription_type: e.type,
          subscription_plan_id: (0, a.EL)(e)?.id,
          subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
          subscription_status: e.status,
        };
      }
      function u(e, t, n) {
        let a = n ?? (0, o.A)();
        r.default.track(i.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, {
          location_stack: t,
          load_id: a,
          ...l(e),
        });
      }
    },
    516780(e, t, n) {
      n.d(t, { oH: () => a, vz: () => r });
      var o = n(723702);
      let r = null;
      function a() {
        return (0, o.isAndroid)(), null;
      }
    },
    700241(e, t, n) {
      n.d(t, { default: () => a });
      var o = n(627968);
      n(64700);
      var r = n(192308);
      function a() {
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.e("74575").then(n.bind(n, 218642));
          return (t) => (0, o.jsx)(e, { ...t });
        });
      }
    },
    663311(e, t, n) {
      n.d(t, { A: () => a });
      var o = n(253932),
        r = n(486020);
      function a(e, t) {
        let n;
        if ("u" < typeof Image) return;
        let a = e.user?.id;
        null == a ||
          "" === a ||
          (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, r.ns)({
              id: a,
              guildId: t,
              banner: e.guild_member_profile.banner,
              canAnimate: o.kt.getSetting(),
              size: 600,
            })),
          e?.user_profile?.banner != null &&
            (n = (0, r.z)({
              id: a,
              banner: e.user_profile.banner,
              canAnimate: o.kt.getSetting(),
              size: 600,
            })),
          null == n || (new Image().src = n));
      }
    },
    545934(e, t, n) {
      n.d(t, { A: () => a });
      var o = n(315069);
      class r extends o.A {
        id;
        subscriptionId;
        premiumGuildSubscription;
        canceled;
        cooldownEndsAt;
        subscription;
        static createFromServer(e, t) {
          return new r({
            id: e.id,
            subscriptionId: e.subscription_id,
            premiumGuildSubscription:
              null != e.premium_guild_subscription
                ? {
                    id: e.premium_guild_subscription.id,
                    guildId: e.premium_guild_subscription.guild_id,
                  }
                : null,
            canceled: e.canceled,
            cooldownEndsAt: e.cooldown_ends_at,
            subscription: t,
          });
        }
        isOnCooldown() {
          return (
            null != this.cooldownEndsAt &&
            new Date(this.cooldownEndsAt).getTime() >= Date.now()
          );
        }
        isAvailable() {
          return null == this.premiumGuildSubscription && !this.isOnCooldown();
        }
        constructor(e) {
          super(),
            (this.id = e.id),
            (this.subscriptionId = e.subscriptionId),
            (this.premiumGuildSubscription = e.premiumGuildSubscription),
            (this.canceled = e.canceled),
            (this.cooldownEndsAt = e.cooldownEndsAt),
            (this.subscription = e.subscription);
        }
      }
      let a = r;
    },
    419212(e, t, n) {
      n.d(t, { A: () => C });
      var o = n(17928),
        r = n(228366),
        a = n(845584);
      let i = null,
        l = null,
        u = null;
      function s(e) {
        let { error: t } = e;
        i = t;
      }
      function _() {
        i = null;
      }
      class d extends o.Ay.Store {
        static displayName = "PremiumPaymentModalStore";
        get paymentError() {
          return i;
        }
        getGiftCode(e) {
          return e === u ? l : null;
        }
      }
      let C = new d(r.h, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: s,
        PREMIUM_PAYMENT_UPDATE_FAIL: s,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
          _();
        },
        PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
        PREMIUM_PAYMENT_ERROR_CLEAR: _,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
          let { message: t } = e;
          i = new a.Ey(t);
        },
        BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
          let { message: t } = e;
          i = new a.Ey(t);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
          (l = e.giftCode), (u = e.skuId);
        },
        SKU_PURCHASE_FAIL: function (e) {
          i = e.error;
        },
        SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
          e.isGift && (u = e.skuId);
        },
        GIFT_CODE_CREATE: function (e) {
          let { giftCode: t } = e;
          if (0 !== t.uses || t.sku_id !== u) return !1;
          l = t.code;
        },
      });
    },
    825755(e, t, n) {
      n.d(t, { A: () => D });
      var o = n(17928),
        r = n(228366),
        a = n(845584),
        i = n(71532);
      let l = "",
        u = null,
        s = "",
        _ = null,
        d = !1,
        C = null,
        E = "",
        p = "",
        h = "",
        c = "",
        A = "",
        y = "",
        I = "",
        m = "",
        T = !1,
        S = null,
        R = null,
        N = null,
        g = null;
      function O() {
        (_ = null),
          (l = ""),
          (u = null),
          (s = ""),
          (d = !1),
          (C = null),
          (E = "US"),
          (p = ""),
          (h = ""),
          (c = ""),
          (A = ""),
          (y = ""),
          (I = ""),
          (m = ""),
          (T = !1),
          (S = null),
          (R = null),
          (N = null),
          (g = null);
      }
      function P(e) {
        (p = e.name),
          (E = e.country),
          (c = e.line1),
          (A = e.line2),
          (y = e.city),
          (I = e.postalCode),
          (m = e.state),
          (h = e.email);
      }
      function M() {
        S = null;
      }
      function f(e) {
        let { error: t } = e;
        S = t;
      }
      function L(e) {
        let { message: t } = e;
        S = new a.Ey(t);
      }
      class U extends o.Ay.Store {
        static displayName = "NewPaymentSourceStore";
        get stripePaymentMethod() {
          return _;
        }
        get popupCallbackCalled() {
          return N;
        }
        get braintreeEmail() {
          return l;
        }
        get braintreeNonce() {
          return u;
        }
        get venmoUsername() {
          return s;
        }
        get redirectedPaymentId() {
          return R;
        }
        get adyenPaymentData() {
          return C;
        }
        get redirectedPaymentSourceId() {
          return g;
        }
        clearRedirectedPaymentSourceId() {
          g = null;
        }
        getCreditCardInfo() {
          return { name: p };
        }
        get isCardInfoValid() {
          return d;
        }
        getBillingAddressInfo() {
          return {
            name: p,
            email: h,
            country: E,
            line1: c,
            line2: A,
            city: y,
            postalCode: I,
            state: m,
          };
        }
        get isBillingAddressInfoValid() {
          return T;
        }
        get error() {
          return S;
        }
      }
      let D = new U(r.h, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
          let { stripePaymentMethod: t } = e;
          if (null == t) return void O();
          _ = t;
          let { billingAddressInfo: n } = i.uK(_);
          P(n);
        },
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
          let { info: t, isValid: n } = e;
          (p = t.name), (d = n);
        },
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
          let { info: t, isValid: n } = e;
          null != t.name && "" !== t.name && (p = t.name),
            (E = t.country),
            (p = t.name),
            (c = t.line1),
            (A = t.line2),
            (y = t.city),
            (I = t.postalCode),
            (m = t.state),
            (h = t.email),
            (T = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function () {
          (l = ""), (u = null);
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
          let { email: t, nonce: n, billingAddress: o } = e;
          (l = t), (u = n), P(o), (T = E.length > 0);
        },
        BRAINTREE_TOKENIZE_VENMO_START: function () {
          (s = ""), (u = null);
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
          let { username: t, nonce: n } = e;
          (s = t), (u = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: L,
        BRAINTREE_TOKENIZE_VENMO_FAIL: L,
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
          let { data: t } = e;
          C = t;
        },
        BILLING_PAYMENT_SOURCE_CREATE_START: M,
        MODAL_POP: M,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: M,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: f,
        STRIPE_TOKEN_FAILURE: f,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: O,
        LOGOUT: O,
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
          let { query: t } = e;
          t?.payment_id != null
            ? ((N = !0), (R = t.payment_id))
            : t?.payment_source_id != null &&
              ((N = !0), (g = t.payment_source_id));
        },
        RESET_PAYMENT_ID: function () {
          (N = !1), (R = null);
        },
      });
    },
    293700(e, t, n) {
      n.d(t, { A: () => h, C: () => u });
      var o,
        r = n(17928),
        a = n(228366),
        i = n(136857),
        l = n(446458),
        u =
          (((o = {})[(o.UNKNOWN = 0)] = "UNKNOWN"),
          (o[(o.PENDING = 1)] = "PENDING"),
          (o[(o.SUCCESS = 2)] = "SUCCESS"),
          (o[(o.ERROR = 3)] = "ERROR"),
          o);
      let s = 0,
        _ = null,
        d = null;
      function C(e) {
        let { error: t } = e,
          n = t instanceof i.Ay ? t : new i.Ay(t);
        l.A.isConnected() &&
          n.code === i.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED &&
          (s = 1);
      }
      function E() {
        (s = 0), (_ = null), (d = null);
      }
      class p extends r.Ay.Store {
        initialize() {
          this.waitFor(l.A);
        }
        static displayName = "PurchaseTokenAuthStore";
        get purchaseTokenAuthState() {
          return s;
        }
        get purchaseTokenHash() {
          return _;
        }
        get expiresAt() {
          return d;
        }
      }
      let h = new p(a.h, {
        SKU_PURCHASE_FAIL: C,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: C,
        USER_PAYMENT_CLIENT_ADD: function (e) {
          (s = 2), (_ = e.purchaseTokenHash), (d = e.expiresAt);
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: E,
        BILLING_SUBSCRIPTION_UPDATE_START: E,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: E,
        PREMIUM_PAYMENT_ERROR_CLEAR: E,
        PREMIUM_PAYMENT_MODAL_CLOSE: E,
        PREMIUM_PAYMENT_MODAL_OPEN: E,
        PREMIUM_PAYMENT_SUBSCRIBE_START: E,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: E,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: E,
        SKU_PURCHASE_MODAL_CLOSE: E,
        SKU_PURCHASE_MODAL_OPEN: E,
        SKU_PURCHASE_START: E,
        SKU_PURCHASE_SUCCESS: E,
      });
    },
    954571(e, t, n) {
      n.r(t),
        n.d(t, {
          AnalyticEventConfigs: () => O,
          AnalyticsContext: () => m,
          AnalyticsSchema: () => E,
          addExtraAnalyticsDecorator: () => g,
          clearAnalyticsEventsRecording: () => B,
          debugLogEvent: () => G,
          default: () => Y,
          expandEventProperties: () => D,
          expandLocation: () => P,
          getAnalyticsEventsRecording: () => H,
          getNewAnalyticsLoadId: () => W,
          isGameApplicationType: () => k,
          launchSignature: () => R,
          setUTMContext: () => U,
          startRecordingAnalyticsEvents: () => v,
          stopRecordingAnalyticsEvents: () => F,
          trackNetworkAction: () => V,
        }),
        n(321073);
      var o = n(64700),
        r = n(132500),
        a = n(110259),
        i = n(613345),
        l = n(306173),
        u = n(228366),
        s = n(686757),
        _ = n(53943),
        d = n(790171),
        C = n(111162),
        E = n(757811),
        p = n(321034),
        h = n(38405),
        c = n(652215),
        A = n(53298),
        y = n(705751),
        I = n(985018);
      let m = o.createContext({ location: {} }),
        T = {},
        S = performance.now(),
        R = (0, l.xd)() ? (0, l.xy)((0, i.V)()) : null;
      a.extendSuperProperties({ launch_signature: R });
      let N = [];
      function g(e) {
        N.push(e);
      }
      let O = {
        [c.HAw.APP_OPENED]: { throttlePeriod: 3e5, throttleKeys: () => [] },
        [c.HAw.APP_BACKGROUND]: {
          throttlePeriod: 12e4,
          throttleKeys: () => [],
        },
        [c.HAw.ACK_MESSAGES]: (e) =>
          e.location_object_type === c.AnalyticsObjectTypes.ACK_MANUAL
            ? void 0
            : {
                throttlePeriod: 9e5,
                throttleKeys: (e) => [
                  e.guild_id,
                  e.channel_id,
                  e.location_section,
                ],
              },
        [c.HAw.GUILD_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.guild_id, e.is_pending],
        },
        [c.HAw.FRIENDS_LIST_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.tab_opened],
        },
        [c.HAw.NOW_PLAYING_CARD_HOVERED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.tab_opened],
        },
        [c.HAw.START_SPEAKING]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.server],
        },
        [c.HAw.START_LISTENING]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.server],
        },
        [c.HAw.ACTIVITY_UPDATED]: {
          throttlePeriod: 6e4,
          throttleKeys: (e) => [e.application_id],
          deduplicate: !0,
        },
        [c.HAw.CHANNEL_OPENED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) =>
            null != e.channel_static_route
              ? [e.guild_id, e.channel_static_route, e.channel_view]
              : [e.channel_id, e.channel_view],
        },
        [c.HAw.TEXT_IN_VOICE_OPENED]: {
          throttlePeriod: 864e5,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.NOTIFICATION_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.notif_type],
        },
        [c.HAw.MEMBER_LIST_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.DM_LIST_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.NAV_DRAWER_OPENED]: {
          throttlePeriod: 9e5,
          throttleKeys: () => [],
        },
        [c.HAw.KEYBOARD_SHORTCUT_USED]: {
          throttlePeriod: 12e4,
          throttleKeys: (e) => [
            e.shortcut_name,
            e.location_object,
            ...(e.source_class_list ?? []),
          ],
        },
        [c.HAw.QUICKSWITCHER_OPENED]: {
          throttlePeriod: 1e4,
          throttleKeys: () => [],
        },
        [c.HAw.CHAT_INPUT_COMPONENT_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.type],
        },
        [c.HAw.ROLE_PAGE_VIEWED]: {
          throttlePeriod: 12e4,
          throttleKeys: (e) => [e.role_id, e.tab_opened],
        },
        [c.HAw.VIDEO_INPUT_INITIALIZED]: {
          throttlePeriod: 3e5,
          throttleKeys: () => [],
        },
        [c.HAw.AUDIO_INPUT_INITIALIZED]: {
          throttlePeriod: 3e5,
          throttleKeys: () => [],
        },
        [c.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
          throttlePeriod: 9e5,
          throttleKeys: () => [],
        },
        [c.HAw.HUB_STUDENT_PROMPT_CLICKED]: {
          throttlePeriod: 9e5,
          throttleKeys: () => [],
        },
        [c.HAw.RPC_SERVER_ERROR_CAUGHT]: {
          throttlePeriod: 864e5,
          throttleKeys: () => [],
        },
        [c.HAw.RPC_COMMAND_SENT]: {
          throttlePeriod: 864e5,
          throttleKeys: (e) => [e.application_id, e.command],
          throttlePercent: 0.001,
        },
        [c.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
          throttlePeriod: 864e5,
          throttleKeys: (e) => [e.application_id, e.event],
          throttlePercent: 0.001,
        },
        [c.HAw.ACTIVITY_HANDSHAKE]: {
          throttlePeriod: 864e5,
          throttleKeys: (e) => [e.application_id],
        },
        [c.HAw.CHANNEL_BANNER_VIEWED]: {
          throttlePeriod: 864e5,
          throttleKeys: (e) => [e.banner_type, e.channel_id],
        },
        [c.HAw.PREMIUM_UPSELL_VIEWED]: {
          throttlePeriod: 6e4,
          throttleKeys: (e) => [e.type],
        },
        [c.HAw.FORUM_CHANNEL_SEARCHED]: {
          throttlePeriod: 6e4,
          throttleKeys: (e) => [e.guild_id, e.channel_id],
        },
        [c.HAw.FORUM_CHANNEL_SCROLLED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.guild_id, e.channel_id],
        },
        [c.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
          throttlePeriod: 6e4,
          throttleKeys: (e) => [e.user_id],
        },
        [c.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: {
          throttlePeriod: 6e4,
          throttleKeys: () => [],
        },
        [c.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: {
          throttlePeriod: 3e5,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.ACTIVITY_CARDS_VIEWED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.context, e.guild_id],
        },
        [c.HAw.GUILD_TOOLTIP_SHOWN]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.guild_id],
        },
        [c.HAw.ACK_COMMUNITY_MESSAGES]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.REDESIGN_NAV_BAR_CLICKED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.tab],
        },
        [c.HAw.CHANNEL_LIST_END_REACHED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.guild_id],
        },
        [c.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
          throttlePeriod: 6e4,
          throttleKeys: (e) => [e.guild_id, e.channel_id],
        },
        [c.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
          throttlePeriod: 36e5,
          throttleKeys: () => [],
        },
        [c.HAw.MEDIA_INPUT_VOLUME_CHANGED]: {
          throttlePeriod: 3e5,
          throttleKeys: (e) => [e.location_stack],
        },
        [c.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: {
          throttlePeriod: 3e5,
          throttleKeys: (e) => [e.location_stack],
        },
        [c.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
          throttlePeriod: 3e5,
          throttleKeys: (e) => [e.activity_user_id, e.surface],
          deduplicate: !0,
        },
        [c.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
          throttlePeriod: 3e5,
          throttleKeys: (e) => [e.voice_channel_id],
          deduplicate: !0,
        },
        [c.HAw.MEMBER_LIST_SWIPE_PEEK]: {
          throttlePeriod: 1e3,
          throttleKeys: (e) => [e.channel_id],
        },
        [c.HAw.REDACTABLE_MESSAGE_LOADED]: {
          throttlePeriod: 9e5,
          throttleKeys: (e) => [e.channel_id, e.message_id],
        },
        [c.HAw.OPEN_MODAL]: (e) =>
          e.type === c.JJy.MEDIA_VIEWER
            ? { throttlePeriod: 6e4, throttleKeys: (e) => [e.type] }
            : void 0,
        [c.HAw.MODERATOR_QUEUE_ACTION]: {
          throttlePeriod: 1e4,
          throttleKeys: (e) => [e.guild_id],
        },
        [c.HAw.NOTIFICATION_PERMISSION_STATUS]: {
          throttlePeriod: 432e5,
          throttleKeys: (e) => [
            e.os_enabled,
            e.notification_authorization_status,
            e.foreground_app_enabled,
            e.background_app_enabled,
          ],
        },
        [c.HAw.SEARCH_BAR_VIEWED]: {
          throttlePeriod: 36e5,
          throttleKeys: (e) => [e.search_type],
        },
        [c.HAw.AD_IDENTIFIER_FETCHED]: {
          throttlePeriod: 864e5,
          throttleKeys: () => [],
        },
        [c.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: {
          throttlePeriod: 864e5,
          throttleKeys: (e) => [e.application_id],
        },
        [c.HAw.LIBDISCORE_SLOW_TIMERS]: {
          throttlePeriod: 36e5,
          throttleKeys: () => [],
        },
        [c.HAw.VIDEO_STREAM_ZOOM_CHANGED]: {
          throttlePeriod: 1e3,
          throttleKeys: () => [],
        },
        [c.HAw.CACHE_STATS_RECORDED]: {
          throttlePeriod: 9e5,
          throttleKeys: () => [],
        },
      };
      function P(e) {
        return "string" == typeof e
          ? { location: e }
          : {
              location: e.page,
              location_page: e.page,
              location_section: e.section,
              location_object: e.object,
              location_object_type: e.objectType,
            };
      }
      let M = () => A.O.NONE;
      function f(e) {
        d.o.includes(e) ||
          h.A.addBreadcrumb({ category: "analytics", message: e });
      }
      let L = (0, a.trackMaker)({
        addBreadcrumb: f,
        analyticEventConfigs: O,
        dispatcher: u.h,
        TRACK_ACTION_NAME: "TRACK",
      });
      function U(e) {
        return (T = e);
      }
      function D(e) {
        let t = e ?? {};
        if (null != t.location) {
          let { location: e, ...n } = t;
          t = { ...n, ...P(e) };
        }
        if (null != t.source) {
          let { source: e, ...n } = t;
          t = {
            ...n,
            ...("string" == typeof e
              ? { source: e }
              : {
                  source_page: e.page,
                  source_section: e.section,
                  source_object: e.object,
                  source_object_type: e.objectType,
                  source_promotion_id: e.promotionId,
                }),
          };
        }
        (t.client_performance_cpu = p.A.getCurrentCPUUsagePercent()),
          (t.client_performance_memory = p.A.getCurrentMemoryUsageKB()),
          (t.cpu_core_count = p.A.getCPUCoreCount()),
          (t.accessibility_features = M()),
          (t.rendered_locale = I.intl.currentLocale),
          (t.uptime_app = Math.floor((performance.now() - S) / 1e3));
        let n = p.A.getProcessUptime();
        null != n && (t.uptime_process_renderer = Math.floor(n));
        let { utmSource: o, utmMedium: r, utmCampaign: a, utmContent: i } = T;
        return (
          (t.utm_source = t.utm_source ?? o),
          (t.utm_medium = t.utm_medium ?? r),
          (t.utm_campaign = t.utm_campaign ?? a),
          (t.utm_content = t.utm_content ?? i),
          (t.launch_signature = R),
          N.forEach((e) => e(t)),
          t
        );
      }
      function G(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        C.default.isLoggingAnalyticsEvents &&
          console.info("AnalyticsUtils.track(...):", e, t),
          n ? _.z8("Analytics", e, t) : _.z8("Analytics", e);
      }
      let b = !1,
        w = {};
      function v() {
        b = !0;
      }
      function F() {
        b = !1;
      }
      function H() {
        return w;
      }
      function B() {
        Object.keys(w).forEach((e) => {
          delete w[e];
        });
      }
      let K = (0, a.trackMaker)({
        addBreadcrumb: f,
        analyticEventConfigs: O,
        dispatcher: u.h,
        TRACK_ACTION_NAME: "TRACK",
      });
      function k(e) {
        return e === y.S7.GAME || e === y.S7.DEPRECATED_GAME;
      }
      function V(e, t) {
        let n = D({ location: (0, s.g$)(), ...t });
        (0, s.eE)(e, { type: "action", ...t }), G(e, n), K(e, n);
      }
      function W() {
        return (0, r.A)();
      }
      let Y = {
        ...a,
        getCampaignParams: a.getCampaignParams,
        setSystemAccessibilityFeatures: function (e) {
          M = e;
        },
        expandEventProperties: D,
        track: function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = String(e);
          if (
            (b &&
              null != t &&
              (Array.isArray(w[e]) ? w[e].push(t) : (w[e] = [t])),
            null != n.throttlePercent && Math.random() > n.throttlePercent)
          )
            return Promise.resolve();
          let r = D(t);
          return (
            G(o, r, n.logEventProperties),
            L(e, r, { flush: n.flush, fingerprint: n.fingerprint })
          );
        },
      };
    },
    45938(e, t, n) {
      n.d(t, {
        AK: () => v,
        GM: () => w,
        Ik: () => M,
        Kx: () => f,
        UJ: () => B,
        Vd: () => W,
        Vt: () => Y,
        X6: () => L,
        YI: () => V,
        Zq: () => b,
        e7: () => G,
        eN: () => j,
        e_: () => K,
        lo: () => P,
        n$: () => H,
        pF: () => D,
        tB: () => O,
        u1: () => k,
        v3: () => F,
      }),
        n(801541);
      var o,
        r = n(889137),
        a = n(607399),
        i = n(17928),
        l = n(178253),
        u = n(491509),
        s = n(419212),
        _ = n(287809),
        d = n(954571),
        C = n(403362),
        E = n(927578),
        p = n(257120),
        h = n(371794),
        c = n(652215),
        A = n(788868),
        y = n(985018);
      let I = [
          p.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
          ...["discordapp.com/gifts", "discord.com/gifts"].map((e) =>
            p.A.escape(e),
          ),
        ].join("|"),
        m = RegExp(`(?: |^|https?://)(?:${I})/([a-z0-9-]+)`, "gi"),
        T = [
          ...["discord.com/billing/promotions", "promos.discord.gg"].map((e) =>
            p.A.escape(e),
          ),
        ].join("|"),
        S = RegExp(
          `(?: |^|https?://)(?:${T})(/|(/)?\\?code=)([a-z0-9-]+)`,
          "gi",
        ),
        R = (e, t) =>
          Array(t)
            .fill(void 0)
            .map(
              () =>
                `[abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789]{${e}}`,
            )
            .join("-?"),
        N = [
          R(4, 4),
          R(4, 6),
          R(5, 3),
          "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}",
        ].join("|"),
        g = RegExp(`^(WUMP-?)?(${N})$`);
      var O =
        (((o = {})[(o.DEFAULT = 0)] = "DEFAULT"),
        (o[(o.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
        (o[(o.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] =
          "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
        o);
      let P = (e, t) => (a.Fr || a.v1 ? 0 : null != e || t ? 2 : 1),
        M = (e) => 0 !== P(e);
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return `${e}:${t ?? ""}:${n ?? ""}`;
      }
      function L(e) {
        let [t, n, o] = e.split(":");
        return {
          skuId: t,
          subscriptionPlanId: "" === n ? null : n,
          giftStyle: "" !== o && null != o ? Number.parseInt(o) : void 0,
        };
      }
      function U(e) {
        return e.replace(/[^A-Za-z0-9]/g, "");
      }
      let D = (e) =>
          e?.type === c.lAJ.CUSTOM_GIFT &&
          e?.embeds?.length === 1 &&
          e?.embeds[0].type === c.Auw.GIFT,
        G = (e) => {
          let t;
          if (null == e) return [];
          let n = new Set();
          for (; null != (t = m.exec(e)) && n.size < 3; ) n.add(U(t[1]));
          for (; null != (t = S.exec(e)) && n.size < 3; )
            n.add(U(t[t.length - 1]));
          return Array.from(n);
        };
      function b() {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = window.GLOBAL_ENV.GIFT_CODE_HOST;
        return (
          null != n
            ? (e = `/${t}`)
            : ((n = location.host), (e = `/gifts/${t}`)),
          `${location.protocol}//${n}${e}`
        );
      }
      async function w(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
          let o = (
            await (0, h.aP)({
              url: c.Rsh.GIFT_CODE_RESOLVE(e),
              query: { with_application: t, with_subscription_plan: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            })
          ).body;
          return (
            d.default.track(
              c.HAw.GIFT_CODE_RESOLVED,
              {
                resolved: !0,
                gift_code: o.code,
                gift_code_max_uses: o.max_uses,
                sku_id: o.store_listing.sku.id,
                sku_type: o.store_listing.sku.type,
                application_id: o.store_listing.sku.application_id,
                store_title: o.store_listing.sku.name,
              },
              { flush: !0 },
            ),
            o
          );
        } catch (t) {
          throw (
            (d.default.track(c.HAw.GIFT_CODE_RESOLVED, {
              resolved: !1,
              gift_code: e,
            }),
            new l.A(t))
          );
        }
      }
      function v(e, t) {
        d.default.track(c.HAw.GIFT_CODE_COPIED, {
          ...(0, u.A)(t, !1, !1),
          ...e.analyticsData,
        });
      }
      function F(e, t, n) {
        let {
          error: o,
          accepted: r,
          accepting: a,
          opened: i,
          isCustomGift: l,
        } = n;
        return null == o && (r || a || null == e)
          ? !l || i || r || a
            ? r && (t.isSubscription || null != e)
              ? c.frR.SUCCESS
              : c.frR.CONFIRM
            : c.frR.OPEN
          : c.frR.ERROR;
      }
      function H(e, t, n) {
        switch (e) {
          case c.frR.ERROR:
            return y.intl.formatToMarkdownString(y.t.JUvC0s, {});
          case c.frR.SUCCESS:
            return t.isSubscription
              ? y.intl.formatToPlainString(y.t["1C2BG/"], { skuName: n.name })
              : y.intl.string(y.t["+BNMcF"]);
          case c.frR.CONFIRM:
          default:
            return t.isSubscription
              ? y.intl.formatToPlainString(y.t["2VN4N9"], { skuName: n.name })
              : y.intl.string(y.t.RmamAI);
        }
      }
      function B(e, t, n) {
        let { isCustomGift: o } = n;
        switch (e) {
          case c.frR.ERROR:
            return y.intl.string(y.t.w19zb6);
          case c.frR.SUCCESS:
            if (__OVERLAY__) return y.intl.string(y.t.zW87EM);
            if (t.isSubscription) return y.intl.string(y.t.ex5TKr);
            return y.intl.string(y.t.OOkjql);
          case c.frR.OPEN:
            return y.intl.string(y.t.F8ktci);
          case c.frR.CONFIRM:
          default:
            if (null != o && o) return y.intl.string(y.t.n6I6k4);
            if (null != t.giftStyle)
              return t.isClaimed
                ? y.intl.string(y.t.OgpR0c)
                : y.intl.string(y.t["2BWscv"]);
            return t.isSubscription
              ? y.intl.string(y.t.wQ1FHy)
              : y.intl.string(y.t.OgpR0c);
        }
      }
      function K(e) {
        let {
          step: t,
          sku: n,
          libraryApplication: o,
          error: a,
          accepted: i,
          accepting: l,
          onGoToLibrary: u,
          subscriptionPlan: s = null,
        } = e;
        switch (t) {
          case c.frR.ERROR:
            return k(o, a, i, l, u);
          case c.frR.SUCCESS:
            if (null != s)
              return (0, r.YW)(s)
                .with(
                  {
                    interval: A.WT.MONTH,
                    premiumSubscriptionType: A.PremiumTypes.TIER_2,
                  },
                  () =>
                    y.intl.formatToPlainString(y.t["vFfV+J"], {
                      timeInterval: y.intl.string(y.t.FPybU7),
                    }),
                )
                .with(
                  {
                    interval: A.WT.YEAR,
                    premiumSubscriptionType: A.PremiumTypes.TIER_2,
                  },
                  () =>
                    y.intl.formatToPlainString(y.t["vFfV+J"], {
                      timeInterval: y.intl.string(y.t.tfqrhj),
                    }),
                )
                .with(
                  {
                    interval: A.WT.MONTH,
                    premiumSubscriptionType: A.PremiumTypes.TIER_1,
                  },
                  () =>
                    y.intl.formatToPlainString(y.t.gjKbF4, {
                      intervalCount: s.intervalCount,
                    }),
                )
                .with(
                  {
                    interval: A.WT.YEAR,
                    premiumSubscriptionType: A.PremiumTypes.TIER_1,
                  },
                  () =>
                    y.intl.formatToPlainString(y.t.GIe7Bw, {
                      intervalCount: s.intervalCount,
                    }),
                )
                .otherwise(() => y.intl.string(y.t["5ayf7w"]));
            return y.intl.formatToPlainString(y.t["3CPsbo"], {
              skuName: n.name,
            });
          case c.frR.CONFIRM:
          default:
            if (null != s) {
              let e = s.interval === A.WT.MONTH ? y.t.P9eTKt : y.t.d8rUdy;
              return y.intl.format(e, {
                skuName: n.name,
                intervalCount: s.intervalCount,
              });
            }
            return y.intl.formatToPlainString(y.t.l6Ea4Z, { skuName: n.name });
        }
      }
      function k(e, t, n, o, r) {
        let a = y.intl.format(y.t["5zyz9y"], { onGoToLibrary: r });
        return null != (n || o ? void 0 : e)
          ? a
          : null == t
            ? null
            : j(t, _.default.getCurrentUser());
      }
      function V(e, t, n) {
        let o = t.applicationId,
          r = e.length > 0 ? e : [o],
          a = r.map((e) => n.getLibraryApplication(o, e, !0)).filter(C.Vq);
        return a.length === r.length ? a[0] : null;
      }
      function W(e) {
        let t = e.trim().split("/").pop().match(g);
        if (null == t) return null;
        let [n, o, r] = t;
        return null == r ? null : r.replace(/-/g, "");
      }
      let Y = (e, t) =>
        (0, i.bG)([s.A], () => {
          if (null == e || !t) return null;
          let n = s.A.getGiftCode(e);
          return null == n || "" === n ? null : n;
        });
      function j(e, t) {
        switch (e.code) {
          case c.t02.INVALID_GIFT_SELF_REDEMPTION:
            return y.intl.string(y.t.wa9h7F);
          case c.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return y.intl.string(y.t.Iw2TUW);
          case c.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return y.intl.string(y.t.mdLtb5);
          case c.t02.UNKNOWN_GIFT_CODE:
            return y.intl.string(y.t.roztIr);
          case c.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return y.intl.formatToPlainString(y.t["4YTHKw"], {
              planName: (0, E.YE)(t, A.PremiumTypes.TIER_2)
                ? y.intl.string(y.t.lG6a5x)
                : y.intl.string(y.t.FSOz78),
            });
          case c.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return y.intl.string(y.t["9i1J30"]);
          case c.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return y.intl.string(y.t["U26WX+"]);
          case c.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return y.intl.string(y.t.ypuSd8);
          case c.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return y.intl.string(y.t.mXMmWE);
          default:
            return y.intl.string(y.t["s9+XlB"]);
        }
      }
    },
    460288(e, t, n) {
      function o(e, t) {
        return 0 !== e.length && (e[Math.floor(t / 8)] & (1 << t % 8)) != 0;
      }
      function r(e, t) {
        let n = Math.floor(t / 8);
        if (e.length <= n) {
          let t = new Uint8Array(n + 1);
          t.set(e, 0), (e = t);
        }
        return (e[n] |= 1 << t % 8), e;
      }
      function a(e, t) {
        if (o(e, t)) {
          let n = Math.floor(t / 8),
            o = t % 8;
          e[n] &= ~(1 << o);
        }
        return e;
      }
      function i(e) {
        return e instanceof Uint8Array;
      }
      function l(e) {
        return null != e && "object" == typeof e && "uint8array" === e.__tag__;
      }
      n.d(t, {
        I: () => l,
        Vf: () => r,
        We: () => a,
        c0: () => o,
        mg: () => i,
      }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
    },
    671325(e, t, n) {
      n.d(t, { A: () => o });
      let o =
        "https://cdn.discordapp.com/assets/content/dc13d780516c55f5887ce975f335f049836bfa60e8e54e82348762e79fa66c39.riv";
    },
    819900(e, t, n) {
      n.d(t, { A: () => o });
      let o =
        "https://cdn.discordapp.com/assets/content/ada94a00ba3648b0d01f5bbf870b152b02ac6eb1bd1d245d8b46a54527416853.png";
    },
    697634(e, t, n) {
      n.d(t, { A: () => o });
      let o =
        "https://cdn.discordapp.com/assets/content/096964379958760a2615df5128a9022ac6de873c8f7a6af0beadb1c958ce55ea.png";
    },
    96337(e, t, n) {
      n.d(t, { A: () => o });
      let o = [
        {
          name: "Afghanistan",
          alpha2: "AF",
          phoneCountryCode: "+93",
          phoneCountryCodes: ["+93"],
        },
        {
          name: "Aland Islands",
          alpha2: "AX",
          phoneCountryCode: "+358",
          phoneCountryCodes: ["+358"],
        },
        {
          name: "Albania",
          alpha2: "AL",
          phoneCountryCode: "+355",
          phoneCountryCodes: ["+355"],
        },
        {
          name: "Algeria",
          alpha2: "DZ",
          phoneCountryCode: "+213",
          phoneCountryCodes: ["+213"],
        },
        {
          name: "American Samoa",
          alpha2: "AS",
          phoneCountryCode: "+1 684",
          phoneCountryCodes: ["+1 684"],
        },
        {
          name: "Andorra",
          alpha2: "AD",
          phoneCountryCode: "+376",
          phoneCountryCodes: ["+376"],
        },
        {
          name: "Angola",
          alpha2: "AO",
          phoneCountryCode: "+244",
          phoneCountryCodes: ["+244"],
        },
        {
          name: "Anguilla",
          alpha2: "AI",
          phoneCountryCode: "+1 264",
          phoneCountryCodes: ["+1 264"],
        },
        {
          name: "Antarctica",
          alpha2: "AQ",
          phoneCountryCode: "+672",
          phoneCountryCodes: ["+672"],
        },
        {
          name: "Antigua and Barbuda",
          alpha2: "AG",
          phoneCountryCode: "+1 268",
          phoneCountryCodes: ["+1 268"],
        },
        {
          name: "Argentina",
          alpha2: "AR",
          phoneCountryCode: "+54",
          phoneCountryCodes: ["+54"],
          localeForICU: "es-AR",
          currencyCode: "ars",
        },
        {
          name: "Armenia",
          alpha2: "AM",
          phoneCountryCode: "+374",
          phoneCountryCodes: ["+374"],
        },
        {
          name: "Aruba",
          alpha2: "AW",
          phoneCountryCode: "+297",
          phoneCountryCodes: ["+297"],
        },
        {
          name: "Ascension",
          alpha2: "AC",
          phoneCountryCode: "+247",
          phoneCountryCodes: ["+247"],
        },
        {
          name: "Australia",
          alpha2: "AU",
          phoneCountryCode: "+61",
          phoneCountryCodes: ["+61"],
          localeForICU: "en-AU",
          currencyCode: "aud",
        },
        {
          name: "Austria",
          alpha2: "AT",
          phoneCountryCode: "+43",
          phoneCountryCodes: ["+43"],
        },
        {
          name: "Azerbaijan",
          alpha2: "AZ",
          phoneCountryCode: "+994",
          phoneCountryCodes: ["+994"],
        },
        {
          name: "Bahamas",
          alpha2: "BS",
          phoneCountryCode: "+1 242",
          phoneCountryCodes: ["+1 242"],
        },
        {
          name: "Bahrain",
          alpha2: "BH",
          phoneCountryCode: "+973",
          phoneCountryCodes: ["+973"],
        },
        {
          name: "Bangladesh",
          alpha2: "BD",
          phoneCountryCode: "+880",
          phoneCountryCodes: ["+880"],
        },
        {
          name: "Barbados",
          alpha2: "BB",
          phoneCountryCode: "+1 246",
          phoneCountryCodes: ["+1 246"],
        },
        {
          name: "Belarus",
          alpha2: "BY",
          phoneCountryCode: "+375",
          phoneCountryCodes: ["+375"],
        },
        {
          name: "Belgium",
          alpha2: "BE",
          phoneCountryCode: "+32",
          phoneCountryCodes: ["+32"],
        },
        {
          name: "Belize",
          alpha2: "BZ",
          phoneCountryCode: "+501",
          phoneCountryCodes: ["+501"],
        },
        {
          name: "Benin",
          alpha2: "BJ",
          phoneCountryCode: "+229",
          phoneCountryCodes: ["+229"],
        },
        {
          name: "Bermuda",
          alpha2: "BM",
          phoneCountryCode: "+1 441",
          phoneCountryCodes: ["+1 441"],
        },
        {
          name: "Bhutan",
          alpha2: "BT",
          phoneCountryCode: "+975",
          phoneCountryCodes: ["+975"],
        },
        {
          name: "Bolivia, Plurinational State of",
          alpha2: "BO",
          phoneCountryCode: "+591",
          phoneCountryCodes: ["+591"],
        },
        {
          name: "Bonaire, Sint Eustatius and Saba",
          alpha2: "BQ",
          phoneCountryCode: "+599",
          phoneCountryCodes: ["+599"],
        },
        {
          name: "Bosnia and Herzegovina",
          alpha2: "BA",
          phoneCountryCode: "+387",
          phoneCountryCodes: ["+387"],
        },
        {
          name: "Botswana",
          alpha2: "BW",
          phoneCountryCode: "+267",
          phoneCountryCodes: ["+267"],
        },
        {
          name: "Bouvet Island",
          alpha2: "BV",
          phoneCountryCode: "+55",
          phoneCountryCodes: ["+55"],
        },
        {
          name: "Brazil",
          alpha2: "BR",
          phoneCountryCode: "+55",
          phoneCountryCodes: ["+55"],
        },
        {
          name: "British Indian Ocean Territory",
          alpha2: "IO",
          phoneCountryCode: "+246",
          phoneCountryCodes: ["+246"],
        },
        {
          name: "Brunei Darussalam",
          alpha2: "BN",
          phoneCountryCode: "+673",
          phoneCountryCodes: ["+673"],
        },
        {
          name: "Bulgaria",
          alpha2: "BG",
          phoneCountryCode: "+359",
          phoneCountryCodes: ["+359"],
        },
        {
          name: "Burkina Faso",
          alpha2: "BF",
          phoneCountryCode: "+226",
          phoneCountryCodes: ["+226"],
        },
        {
          name: "Burundi",
          alpha2: "BI",
          phoneCountryCode: "+257",
          phoneCountryCodes: ["+257"],
        },
        {
          name: "Cambodia",
          alpha2: "KH",
          phoneCountryCode: "+855",
          phoneCountryCodes: ["+855"],
        },
        {
          name: "Cameroon",
          alpha2: "CM",
          phoneCountryCode: "+237",
          phoneCountryCodes: ["+237"],
        },
        {
          name: "Canada",
          alpha2: "CA",
          phoneCountryCode: "+1",
          phoneCountryCodes: ["+1"],
        },
        {
          name: "Cape Verde",
          alpha2: "CV",
          phoneCountryCode: "+238",
          phoneCountryCodes: ["+238"],
        },
        {
          name: "Cayman Islands",
          alpha2: "KY",
          phoneCountryCode: "+1 345",
          phoneCountryCodes: ["+1 345"],
        },
        {
          name: "Central African Republic",
          alpha2: "CF",
          phoneCountryCode: "+236",
          phoneCountryCodes: ["+236"],
        },
        {
          name: "Chad",
          alpha2: "TD",
          phoneCountryCode: "+235",
          phoneCountryCodes: ["+235"],
        },
        {
          name: "Chile",
          alpha2: "CL",
          phoneCountryCode: "+56",
          phoneCountryCodes: ["+56"],
          localeForICU: "es-CL",
          currencyCode: "clp",
        },
        {
          name: "China",
          alpha2: "CN",
          phoneCountryCode: "+86",
          phoneCountryCodes: ["+86"],
        },
        {
          name: "Christmas Island",
          alpha2: "CX",
          phoneCountryCode: "+61",
          phoneCountryCodes: ["+61"],
        },
        {
          name: "Cocos (Keeling) Islands",
          alpha2: "CC",
          phoneCountryCode: "+61",
          phoneCountryCodes: ["+61"],
        },
        {
          name: "Colombia",
          alpha2: "CO",
          phoneCountryCode: "+57",
          phoneCountryCodes: ["+57"],
          localeForICU: "es-CO",
          currencyCode: "cop",
        },
        {
          name: "Comoros",
          alpha2: "KM",
          phoneCountryCode: "+269",
          phoneCountryCodes: ["+269"],
        },
        {
          name: "Congo",
          alpha2: "CG",
          phoneCountryCode: "+242",
          phoneCountryCodes: ["+242"],
        },
        {
          name: "Congo, The Democratic Republic of the",
          alpha2: "CD",
          phoneCountryCode: "+243",
          phoneCountryCodes: ["+243"],
        },
        {
          name: "Cook Islands",
          alpha2: "CK",
          phoneCountryCode: "+682",
          phoneCountryCodes: ["+682"],
        },
        {
          name: "Costa Rica",
          alpha2: "CR",
          phoneCountryCode: "+506",
          phoneCountryCodes: ["+506"],
        },
        {
          name: "Cote d'Ivoire",
          alpha2: "CI",
          phoneCountryCode: "+225",
          phoneCountryCodes: ["+225"],
        },
        {
          name: "Croatia",
          alpha2: "HR",
          phoneCountryCode: "+385",
          phoneCountryCodes: ["+385"],
        },
        {
          name: "Cuba",
          alpha2: "CU",
          phoneCountryCode: "+53",
          phoneCountryCodes: ["+53"],
        },
        {
          name: "Curacao",
          alpha2: "CW",
          phoneCountryCode: "+599",
          phoneCountryCodes: ["+599"],
        },
        {
          name: "Cyprus",
          alpha2: "CY",
          phoneCountryCode: "+357",
          phoneCountryCodes: ["+357"],
        },
        {
          name: "Czech Republic",
          alpha2: "CZ",
          phoneCountryCode: "+420",
          phoneCountryCodes: ["+420"],
        },
        {
          name: "Denmark",
          alpha2: "DK",
          phoneCountryCode: "+45",
          phoneCountryCodes: ["+45"],
        },
        {
          name: "Diego Garcia",
          alpha2: "DG",
          phoneCountryCode: "+246",
          phoneCountryCodes: ["+246"],
        },
        {
          name: "Djibouti",
          alpha2: "DJ",
          phoneCountryCode: "+253",
          phoneCountryCodes: ["+253"],
        },
        {
          name: "Dominica",
          alpha2: "DM",
          phoneCountryCode: "+1 767",
          phoneCountryCodes: ["+1 767"],
        },
        {
          name: "Dominican Republic",
          alpha2: "DO",
          phoneCountryCode: "+1 809",
          phoneCountryCodes: ["+1 809", "+1 829", "+1 849"],
        },
        {
          name: "Ecuador",
          alpha2: "EC",
          phoneCountryCode: "+593",
          phoneCountryCodes: ["+593"],
        },
        {
          name: "Egypt",
          alpha2: "EG",
          phoneCountryCode: "+20",
          phoneCountryCodes: ["+20"],
        },
        {
          name: "El Salvador",
          alpha2: "SV",
          phoneCountryCode: "+503",
          phoneCountryCodes: ["+503"],
        },
        {
          name: "Equatorial Guinea",
          alpha2: "GQ",
          phoneCountryCode: "+240",
          phoneCountryCodes: ["+240"],
        },
        {
          name: "Eritrea",
          alpha2: "ER",
          phoneCountryCode: "+291",
          phoneCountryCodes: ["+291"],
        },
        {
          name: "Estonia",
          alpha2: "EE",
          phoneCountryCode: "+372",
          phoneCountryCodes: ["+372"],
        },
        {
          name: "Ethiopia",
          alpha2: "ET",
          phoneCountryCode: "+251",
          phoneCountryCodes: ["+251"],
        },
        {
          name: "Falkland Islands (Malvinas)",
          alpha2: "FK",
          phoneCountryCode: "+500",
          phoneCountryCodes: ["+500"],
        },
        {
          name: "Faroe Islands",
          alpha2: "FO",
          phoneCountryCode: "+298",
          phoneCountryCodes: ["+298"],
        },
        {
          name: "Fiji",
          alpha2: "FJ",
          phoneCountryCode: "+679",
          phoneCountryCodes: ["+679"],
        },
        {
          name: "Finland",
          alpha2: "FI",
          phoneCountryCode: "+358",
          phoneCountryCodes: ["+358"],
        },
        {
          name: "France",
          alpha2: "FR",
          phoneCountryCode: "+33",
          phoneCountryCodes: ["+33"],
        },
        {
          name: "French Guiana",
          alpha2: "GF",
          phoneCountryCode: "+594",
          phoneCountryCodes: ["+594"],
        },
        {
          name: "French Polynesia",
          alpha2: "PF",
          phoneCountryCode: "+689",
          phoneCountryCodes: ["+689"],
        },
        {
          name: "French Southern Territories",
          alpha2: "TF",
          phoneCountryCode: "+262",
          phoneCountryCodes: ["+262"],
        },
        {
          name: "Gabon",
          alpha2: "GA",
          phoneCountryCode: "+241",
          phoneCountryCodes: ["+241"],
        },
        {
          name: "Gambia",
          alpha2: "GM",
          phoneCountryCode: "+220",
          phoneCountryCodes: ["+220"],
        },
        {
          name: "Georgia",
          alpha2: "GE",
          phoneCountryCode: "+995",
          phoneCountryCodes: ["+995"],
        },
        {
          name: "Germany",
          alpha2: "DE",
          phoneCountryCode: "+49",
          phoneCountryCodes: ["+49"],
        },
        {
          name: "Ghana",
          alpha2: "GH",
          phoneCountryCode: "+233",
          phoneCountryCodes: ["+233"],
        },
        {
          name: "Gibraltar",
          alpha2: "GI",
          phoneCountryCode: "+350",
          phoneCountryCodes: ["+350"],
        },
        {
          name: "Greece",
          alpha2: "GR",
          phoneCountryCode: "+30",
          phoneCountryCodes: ["+30"],
        },
        {
          name: "Greenland",
          alpha2: "GL",
          phoneCountryCode: "+299",
          phoneCountryCodes: ["+299"],
        },
        {
          name: "Grenada",
          alpha2: "GD",
          phoneCountryCode: "+1 473",
          phoneCountryCodes: ["+1 473"],
        },
        {
          name: "Guadeloupe",
          alpha2: "GP",
          phoneCountryCode: "+590",
          phoneCountryCodes: ["+590"],
        },
        {
          name: "Guam",
          alpha2: "GU",
          phoneCountryCode: "+1 671",
          phoneCountryCodes: ["+1 671"],
        },
        {
          name: "Guatemala",
          alpha2: "GT",
          phoneCountryCode: "+502",
          phoneCountryCodes: ["+502"],
        },
        {
          name: "Guernsey",
          alpha2: "GG",
          phoneCountryCode: "+44",
          phoneCountryCodes: ["+44"],
        },
        {
          name: "Guinea",
          alpha2: "GN",
          phoneCountryCode: "+224",
          phoneCountryCodes: ["+224"],
        },
        {
          name: "Guinea-Bissau",
          alpha2: "GW",
          phoneCountryCode: "+245",
          phoneCountryCodes: ["+245"],
        },
        {
          name: "Guyana",
          alpha2: "GY",
          phoneCountryCode: "+592",
          phoneCountryCodes: ["+592"],
        },
        {
          name: "Haiti",
          alpha2: "HT",
          phoneCountryCode: "+509",
          phoneCountryCodes: ["+509"],
        },
        {
          name: "Heard Island and McDonald Islands",
          alpha2: "HM",
          phoneCountryCode: "+672",
          phoneCountryCodes: ["+672"],
        },
        {
          name: "Holy See (Vatican City State)",
          alpha2: "VA",
          phoneCountryCode: "+39",
          phoneCountryCodes: ["+39"],
        },
        {
          name: "Honduras",
          alpha2: "HN",
          phoneCountryCode: "+504",
          phoneCountryCodes: ["+504"],
        },
        {
          name: "Hong Kong",
          alpha2: "HK",
          phoneCountryCode: "+852",
          phoneCountryCodes: ["+852"],
        },
        {
          name: "Hungary",
          alpha2: "HU",
          phoneCountryCode: "+36",
          phoneCountryCodes: ["+36"],
        },
        {
          name: "Iceland",
          alpha2: "IS",
          phoneCountryCode: "+354",
          phoneCountryCodes: ["+354"],
        },
        {
          name: "India",
          alpha2: "IN",
          phoneCountryCode: "+91",
          phoneCountryCodes: ["+91"],
        },
        {
          name: "Indonesia",
          alpha2: "ID",
          phoneCountryCode: "+62",
          phoneCountryCodes: ["+62"],
          localeForICU: "id",
          currencyCode: "idr",
        },
        {
          name: "Iran, Islamic Republic of",
          alpha2: "IR",
          phoneCountryCode: "+98",
          phoneCountryCodes: ["+98"],
        },
        {
          name: "Iraq",
          alpha2: "IQ",
          phoneCountryCode: "+964",
          phoneCountryCodes: ["+964"],
        },
        {
          name: "Ireland",
          alpha2: "IE",
          phoneCountryCode: "+353",
          phoneCountryCodes: ["+353"],
        },
        {
          name: "Isle of Man",
          alpha2: "IM",
          phoneCountryCode: "+44",
          phoneCountryCodes: ["+44"],
        },
        {
          name: "Israel",
          alpha2: "IL",
          phoneCountryCode: "+972",
          phoneCountryCodes: ["+972"],
        },
        {
          name: "Italy",
          alpha2: "IT",
          phoneCountryCode: "+39",
          phoneCountryCodes: ["+39"],
        },
        {
          name: "Jamaica",
          alpha2: "JM",
          phoneCountryCode: "+1 876",
          phoneCountryCodes: ["+1 876"],
        },
        {
          name: "Japan",
          alpha2: "JP",
          phoneCountryCode: "+81",
          phoneCountryCodes: ["+81"],
          localeForICU: "jp",
          currencyCode: "jpy",
        },
        {
          name: "Jersey",
          alpha2: "JE",
          phoneCountryCode: "+44",
          phoneCountryCodes: ["+44"],
        },
        {
          name: "Jordan",
          alpha2: "JO",
          phoneCountryCode: "+962",
          phoneCountryCodes: ["+962"],
        },
        {
          name: "Kazakhstan",
          alpha2: "KZ",
          phoneCountryCode: "+7",
          phoneCountryCodes: ["+7"],
        },
        {
          name: "Kenya",
          alpha2: "KE",
          phoneCountryCode: "+254",
          phoneCountryCodes: ["+254"],
        },
        {
          name: "Kiribati",
          alpha2: "KI",
          phoneCountryCode: "+686",
          phoneCountryCodes: ["+686"],
        },
        {
          name: "Kosovo",
          alpha2: "XK",
          phoneCountryCode: "+383",
          phoneCountryCodes: ["+383"],
        },
        {
          name: "Korea, Democratic People's Republic of",
          alpha2: "KP",
          phoneCountryCode: "+850",
          phoneCountryCodes: ["+850"],
        },
        {
          name: "Korea, Republic of",
          alpha2: "KR",
          phoneCountryCode: "+82",
          phoneCountryCodes: ["+82"],
        },
        {
          name: "Kuwait",
          alpha2: "KW",
          phoneCountryCode: "+965",
          phoneCountryCodes: ["+965"],
        },
        {
          name: "Kyrgyzstan",
          alpha2: "KG",
          phoneCountryCode: "+996",
          phoneCountryCodes: ["+996"],
        },
        {
          name: "Lao People's Democratic Republic",
          alpha2: "LA",
          phoneCountryCode: "+856",
          phoneCountryCodes: ["+856"],
        },
        {
          name: "Latvia",
          alpha2: "LV",
          phoneCountryCode: "+371",
          phoneCountryCodes: ["+371"],
        },
        {
          name: "Lebanon",
          alpha2: "LB",
          phoneCountryCode: "+961",
          phoneCountryCodes: ["+961"],
        },
        {
          name: "Lesotho",
          alpha2: "LS",
          phoneCountryCode: "+266",
          phoneCountryCodes: ["+266"],
        },
        {
          name: "Liberia",
          alpha2: "LR",
          phoneCountryCode: "+231",
          phoneCountryCodes: ["+231"],
        },
        {
          name: "Libya",
          alpha2: "LY",
          phoneCountryCode: "+218",
          phoneCountryCodes: ["+218"],
        },
        {
          name: "Liechtenstein",
          alpha2: "LI",
          phoneCountryCode: "+423",
          phoneCountryCodes: ["+423"],
        },
        {
          name: "Lithuania",
          alpha2: "LT",
          phoneCountryCode: "+370",
          phoneCountryCodes: ["+370"],
        },
        {
          name: "Luxembourg",
          alpha2: "LU",
          phoneCountryCode: "+352",
          phoneCountryCodes: ["+352"],
        },
        {
          name: "Macao",
          alpha2: "MO",
          phoneCountryCode: "+853",
          phoneCountryCodes: ["+853"],
        },
        {
          name: "Macedonia, Republic of",
          alpha2: "MK",
          phoneCountryCode: "+389",
          phoneCountryCodes: ["+389"],
        },
        {
          name: "Madagascar",
          alpha2: "MG",
          phoneCountryCode: "+261",
          phoneCountryCodes: ["+261"],
        },
        {
          name: "Malawi",
          alpha2: "MW",
          phoneCountryCode: "+265",
          phoneCountryCodes: ["+265"],
        },
        {
          name: "Malaysia",
          alpha2: "MY",
          phoneCountryCode: "+60",
          phoneCountryCodes: ["+60"],
          localeForICU: "ms",
          currencyCode: "myr",
        },
        {
          name: "Maldives",
          alpha2: "MV",
          phoneCountryCode: "+960",
          phoneCountryCodes: ["+960"],
        },
        {
          name: "Mali",
          alpha2: "ML",
          phoneCountryCode: "+223",
          phoneCountryCodes: ["+223"],
        },
        {
          name: "Malta",
          alpha2: "MT",
          phoneCountryCode: "+356",
          phoneCountryCodes: ["+356"],
        },
        {
          name: "Marshall Islands",
          alpha2: "MH",
          phoneCountryCode: "+692",
          phoneCountryCodes: ["+692"],
        },
        {
          name: "Martinique",
          alpha2: "MQ",
          phoneCountryCode: "+596",
          phoneCountryCodes: ["+596"],
        },
        {
          name: "Mauritania",
          alpha2: "MR",
          phoneCountryCode: "+222",
          phoneCountryCodes: ["+222"],
        },
        {
          name: "Mauritius",
          alpha2: "MU",
          phoneCountryCode: "+230",
          phoneCountryCodes: ["+230"],
        },
        {
          name: "Mayotte",
          alpha2: "YT",
          phoneCountryCode: "+262",
          phoneCountryCodes: ["+262"],
        },
        {
          name: "Mexico",
          alpha2: "MX",
          phoneCountryCode: "+52",
          phoneCountryCodes: ["+52"],
        },
        {
          name: "Micronesia, Federated States of",
          alpha2: "FM",
          phoneCountryCode: "+691",
          phoneCountryCodes: ["+691"],
        },
        {
          name: "Midway Island",
          alpha2: "MI",
          phoneCountryCode: "+1 808",
          phoneCountryCodes: ["+1 808"],
        },
        {
          name: "Moldova, Republic of",
          alpha2: "MD",
          phoneCountryCode: "+373",
          phoneCountryCodes: ["+373"],
        },
        {
          name: "Monaco",
          alpha2: "MC",
          phoneCountryCode: "+377",
          phoneCountryCodes: ["+377"],
        },
        {
          name: "Mongolia",
          alpha2: "MN",
          phoneCountryCode: "+976",
          phoneCountryCodes: ["+976"],
        },
        {
          name: "Montenegro",
          alpha2: "ME",
          phoneCountryCode: "+382",
          phoneCountryCodes: ["+382"],
        },
        {
          name: "Montserrat",
          alpha2: "MS",
          phoneCountryCode: "+1664",
          phoneCountryCodes: ["+1664"],
        },
        {
          name: "Morocco",
          alpha2: "MA",
          phoneCountryCode: "+212",
          phoneCountryCodes: ["+212"],
        },
        {
          name: "Mozambique",
          alpha2: "MZ",
          phoneCountryCode: "+258",
          phoneCountryCodes: ["+258"],
        },
        {
          name: "Myanmar",
          alpha2: "MM",
          phoneCountryCode: "+95",
          phoneCountryCodes: ["+95"],
        },
        {
          name: "Namibia",
          alpha2: "NA",
          phoneCountryCode: "+264",
          phoneCountryCodes: ["+264"],
        },
        {
          name: "Nauru",
          alpha2: "NR",
          phoneCountryCode: "+674",
          phoneCountryCodes: ["+674"],
        },
        {
          name: "Nepal",
          alpha2: "NP",
          phoneCountryCode: "+977",
          phoneCountryCodes: ["+977"],
        },
        {
          name: "Netherlands",
          alpha2: "NL",
          phoneCountryCode: "+31",
          phoneCountryCodes: ["+31"],
        },
        {
          name: "Netherlands Antilles",
          alpha2: "AN",
          phoneCountryCode: "+599",
          phoneCountryCodes: ["+599"],
        },
        {
          name: "New Caledonia",
          alpha2: "NC",
          phoneCountryCode: "+687",
          phoneCountryCodes: ["+687"],
        },
        {
          name: "New Zealand",
          alpha2: "NZ",
          phoneCountryCode: "+64",
          phoneCountryCodes: ["+64"],
        },
        {
          name: "Nicaragua",
          alpha2: "NI",
          phoneCountryCode: "+505",
          phoneCountryCodes: ["+505"],
        },
        {
          name: "Niger",
          alpha2: "NE",
          phoneCountryCode: "+227",
          phoneCountryCodes: ["+227"],
        },
        {
          name: "Nigeria",
          alpha2: "NG",
          phoneCountryCode: "+234",
          phoneCountryCodes: ["+234"],
        },
        {
          name: "Niue",
          alpha2: "NU",
          phoneCountryCode: "+683",
          phoneCountryCodes: ["+683"],
        },
        {
          name: "Norfolk Island",
          alpha2: "NF",
          phoneCountryCode: "+672",
          phoneCountryCodes: ["+672"],
        },
        {
          name: "Northern Mariana Islands",
          alpha2: "MP",
          phoneCountryCode: "+1 670",
          phoneCountryCodes: ["+1 670"],
        },
        {
          name: "Norway",
          alpha2: "NO",
          phoneCountryCode: "+47",
          phoneCountryCodes: ["+47"],
        },
        {
          name: "Oman",
          alpha2: "OM",
          phoneCountryCode: "+968",
          phoneCountryCodes: ["+968"],
        },
        {
          name: "Pakistan",
          alpha2: "PK",
          phoneCountryCode: "+92",
          phoneCountryCodes: ["+92"],
        },
        {
          name: "Palau",
          alpha2: "PW",
          phoneCountryCode: "+680",
          phoneCountryCodes: ["+680"],
        },
        {
          name: "Palestine, State of",
          alpha2: "PS",
          phoneCountryCode: "+970",
          phoneCountryCodes: ["+970"],
        },
        {
          name: "Panama",
          alpha2: "PA",
          phoneCountryCode: "+507",
          phoneCountryCodes: ["+507"],
        },
        {
          name: "Papua New Guinea",
          alpha2: "PG",
          phoneCountryCode: "+675",
          phoneCountryCodes: ["+675"],
        },
        {
          name: "Paraguay",
          alpha2: "PY",
          phoneCountryCode: "+595",
          phoneCountryCodes: ["+595"],
        },
        {
          name: "Peru",
          alpha2: "PE",
          phoneCountryCode: "+51",
          phoneCountryCodes: ["+51"],
          localeForICU: "es-PE",
          currencyCode: "pen",
        },
        {
          name: "Philippines",
          alpha2: "PH",
          phoneCountryCode: "+63",
          phoneCountryCodes: ["+63"],
          localeForICU: "en-PH",
          currencyCode: "php",
        },
        {
          name: "Pitcairn",
          alpha2: "PN",
          phoneCountryCode: "+64",
          phoneCountryCodes: ["+64"],
        },
        {
          name: "Poland",
          alpha2: "PL",
          phoneCountryCode: "+48",
          phoneCountryCodes: ["+48"],
        },
        {
          name: "Portugal",
          alpha2: "PT",
          phoneCountryCode: "+351",
          phoneCountryCodes: ["+351"],
        },
        {
          name: "Puerto Rico",
          alpha2: "PR",
          phoneCountryCode: "+1 787",
          phoneCountryCodes: ["+1 787"],
        },
        {
          name: "Qatar",
          alpha2: "QA",
          phoneCountryCode: "+974",
          phoneCountryCodes: ["+974"],
        },
        {
          name: "Reunion",
          alpha2: "RE",
          phoneCountryCode: "+262",
          phoneCountryCodes: ["+262"],
        },
        {
          name: "Romania",
          alpha2: "RO",
          phoneCountryCode: "+40",
          phoneCountryCodes: ["+40"],
        },
        {
          name: "Russian Federation",
          alpha2: "RU",
          phoneCountryCode: "+7",
          phoneCountryCodes: ["+7"],
        },
        {
          name: "Rwanda",
          alpha2: "RW",
          phoneCountryCode: "+250",
          phoneCountryCodes: ["+250"],
        },
        {
          name: "Saint Barth\xe9lemy",
          alpha2: "BL",
          phoneCountryCode: "+590",
          phoneCountryCodes: ["+590"],
        },
        {
          name: "Saint Helena, Ascension and Tristan da Cunha",
          alpha2: "SH",
          phoneCountryCode: "+290",
          phoneCountryCodes: ["+290"],
        },
        {
          name: "Saint Kitts and Nevis",
          alpha2: "KN",
          phoneCountryCode: "+1 869",
          phoneCountryCodes: ["+1 869"],
        },
        {
          name: "Saint Lucia",
          alpha2: "LC",
          phoneCountryCode: "+1 758",
          phoneCountryCodes: ["+1 758"],
        },
        {
          name: "Saint Martin (French part)",
          alpha2: "MF",
          phoneCountryCode: "+590",
          phoneCountryCodes: ["+590"],
        },
        {
          name: "Saint Pierre and Miquelon",
          alpha2: "PM",
          phoneCountryCode: "+508",
          phoneCountryCodes: ["+508"],
        },
        {
          name: "Saint Vincent and the Grenadines",
          alpha2: "VC",
          phoneCountryCode: "+1 784",
          phoneCountryCodes: ["+1 784"],
        },
        {
          name: "Samoa",
          alpha2: "WS",
          phoneCountryCode: "+685",
          phoneCountryCodes: ["+685"],
        },
        {
          name: "San Marino",
          alpha2: "SM",
          phoneCountryCode: "+378",
          phoneCountryCodes: ["+378"],
        },
        {
          name: "Sao Tome and Principe",
          alpha2: "ST",
          phoneCountryCode: "+239",
          phoneCountryCodes: ["+239"],
        },
        {
          name: "Saudi Arabia",
          alpha2: "SA",
          phoneCountryCode: "+966",
          phoneCountryCodes: ["+966"],
        },
        {
          name: "Senegal",
          alpha2: "SN",
          phoneCountryCode: "+221",
          phoneCountryCodes: ["+221"],
        },
        {
          name: "Serbia",
          alpha2: "RS",
          phoneCountryCode: "+381",
          phoneCountryCodes: ["+381"],
        },
        {
          name: "Seychelles",
          alpha2: "SC",
          phoneCountryCode: "+248",
          phoneCountryCodes: ["+248"],
        },
        {
          name: "Sierra Leone",
          alpha2: "SL",
          phoneCountryCode: "+232",
          phoneCountryCodes: ["+232"],
        },
        {
          name: "Singapore",
          alpha2: "SG",
          phoneCountryCode: "+65",
          phoneCountryCodes: ["+65"],
        },
        {
          name: "Sint Maarten (Dutch part)",
          alpha2: "SX",
          phoneCountryCode: "+1 721",
          phoneCountryCodes: ["+1 721"],
        },
        {
          name: "Slovakia",
          alpha2: "SK",
          phoneCountryCode: "+421",
          phoneCountryCodes: ["+421"],
        },
        {
          name: "Slovenia",
          alpha2: "SI",
          phoneCountryCode: "+386",
          phoneCountryCodes: ["+386"],
        },
        {
          name: "Solomon Islands",
          alpha2: "SB",
          phoneCountryCode: "+677",
          phoneCountryCodes: ["+677"],
        },
        {
          name: "Somalia",
          alpha2: "SO",
          phoneCountryCode: "+252",
          phoneCountryCodes: ["+252"],
        },
        {
          name: "South Africa",
          alpha2: "ZA",
          phoneCountryCode: "+27",
          phoneCountryCodes: ["+27"],
        },
        {
          name: "South Georgia and the South Sandwich Islands",
          alpha2: "GS",
          phoneCountryCode: "+500",
          phoneCountryCodes: ["+500"],
        },
        {
          name: "South Sudan",
          alpha2: "SS",
          phoneCountryCode: "+211",
          phoneCountryCodes: ["+211"],
        },
        {
          name: "Spain",
          alpha2: "ES",
          phoneCountryCode: "+34",
          phoneCountryCodes: ["+34"],
        },
        {
          name: "Sri Lanka",
          alpha2: "LK",
          phoneCountryCode: "+94",
          phoneCountryCodes: ["+94"],
        },
        {
          name: "Sudan",
          alpha2: "SD",
          phoneCountryCode: "+249",
          phoneCountryCodes: ["+249"],
        },
        {
          name: "Suriname",
          alpha2: "SR",
          phoneCountryCode: "+597",
          phoneCountryCodes: ["+597"],
        },
        {
          name: "Svalbard and Jan Mayen",
          alpha2: "SJ",
          phoneCountryCode: "+47",
          phoneCountryCodes: ["+47"],
        },
        {
          name: "Swaziland",
          alpha2: "SZ",
          phoneCountryCode: "+268",
          phoneCountryCodes: ["+268"],
        },
        {
          name: "Sweden",
          alpha2: "SE",
          phoneCountryCode: "+46",
          phoneCountryCodes: ["+46"],
        },
        {
          name: "Switzerland",
          alpha2: "CH",
          phoneCountryCode: "+41",
          phoneCountryCodes: ["+41"],
        },
        {
          name: "Syrian Arab Republic",
          alpha2: "SY",
          phoneCountryCode: "+963",
          phoneCountryCodes: ["+963"],
        },
        {
          name: "Taiwan",
          alpha2: "TW",
          phoneCountryCode: "+886",
          phoneCountryCodes: ["+886"],
        },
        {
          name: "Tajikistan",
          alpha2: "TJ",
          phoneCountryCode: "+992",
          phoneCountryCodes: ["+992"],
        },
        {
          name: "Tanzania, United Republic of",
          alpha2: "TZ",
          phoneCountryCode: "+255",
          phoneCountryCodes: ["+255"],
        },
        {
          name: "Thailand",
          alpha2: "TH",
          phoneCountryCode: "+66",
          phoneCountryCodes: ["+66"],
          localeForICU: "th",
          currencyCode: "thb",
        },
        {
          name: "Timor-Leste",
          alpha2: "TL",
          phoneCountryCode: "+670",
          phoneCountryCodes: ["+670"],
        },
        {
          name: "Togo",
          alpha2: "TG",
          phoneCountryCode: "+228",
          phoneCountryCodes: ["+228"],
        },
        {
          name: "Tokelau",
          alpha2: "TK",
          phoneCountryCode: "+690",
          phoneCountryCodes: ["+690"],
        },
        {
          name: "Tonga",
          alpha2: "TO",
          phoneCountryCode: "+676",
          phoneCountryCodes: ["+676"],
        },
        {
          name: "Trinidad and Tobago",
          alpha2: "TT",
          phoneCountryCode: "+1 868",
          phoneCountryCodes: ["+1 868"],
        },
        {
          name: "Tunisia",
          alpha2: "TN",
          phoneCountryCode: "+216",
          phoneCountryCodes: ["+216"],
        },
        {
          name: "Turkey",
          alpha2: "TR",
          phoneCountryCode: "+90",
          phoneCountryCodes: ["+90"],
        },
        {
          name: "Turkmenistan",
          alpha2: "TM",
          phoneCountryCode: "+993",
          phoneCountryCodes: ["+993"],
        },
        {
          name: "Turks and Caicos Islands",
          alpha2: "TC",
          phoneCountryCode: "+1 649",
          phoneCountryCodes: ["+1 649"],
        },
        {
          name: "Tuvalu",
          alpha2: "TV",
          phoneCountryCode: "+688",
          phoneCountryCodes: ["+688"],
        },
        {
          name: "Uganda",
          alpha2: "UG",
          phoneCountryCode: "+256",
          phoneCountryCodes: ["+256"],
        },
        {
          name: "Ukraine",
          alpha2: "UA",
          phoneCountryCode: "+380",
          phoneCountryCodes: ["+380"],
        },
        {
          name: "United Arab Emirates",
          alpha2: "AE",
          phoneCountryCode: "+971",
          phoneCountryCodes: ["+971"],
        },
        {
          name: "United Kingdom",
          alpha2: "GB",
          phoneCountryCode: "+44",
          phoneCountryCodes: ["+44"],
        },
        {
          name: "United States",
          alpha2: "US",
          phoneCountryCode: "+1",
          phoneCountryCodes: ["+1"],
        },
        {
          name: "United States Minor Outlying Islands",
          alpha2: "UM",
          phoneCountryCode: "+1",
          phoneCountryCodes: ["+1"],
        },
        {
          name: "Uruguay",
          alpha2: "UY",
          phoneCountryCode: "+598",
          phoneCountryCodes: ["+598"],
        },
        {
          name: "Uzbekistan",
          alpha2: "UZ",
          phoneCountryCode: "+998",
          phoneCountryCodes: ["+998"],
        },
        {
          name: "Vanuatu",
          alpha2: "VU",
          phoneCountryCode: "+678",
          phoneCountryCodes: ["+678"],
        },
        {
          name: "Venezuela, Bolivarian Republic of",
          alpha2: "VE",
          phoneCountryCode: "+58",
          phoneCountryCodes: ["+58"],
        },
        {
          name: "Vietnam",
          alpha2: "VN",
          phoneCountryCode: "+84",
          phoneCountryCodes: ["+84"],
          localeForICU: "vi",
          currencyCode: "vnd",
        },
        {
          name: "Virgin Islands, British",
          alpha2: "VG",
          phoneCountryCode: "+1 284",
          phoneCountryCodes: ["+1 284"],
        },
        {
          name: "Virgin Islands, U.S.",
          alpha2: "VI",
          phoneCountryCode: "+1 340",
          phoneCountryCodes: ["+1 340"],
        },
        {
          name: "Wallis and Futuna",
          alpha2: "WF",
          phoneCountryCode: "+681",
          phoneCountryCodes: ["+681"],
        },
        {
          name: "Western Sahara",
          alpha2: "EH",
          phoneCountryCode: "+212",
          phoneCountryCodes: ["+212"],
        },
        {
          name: "Yemen",
          alpha2: "YE",
          phoneCountryCode: "+967",
          phoneCountryCodes: ["+967"],
        },
        {
          name: "Zambia",
          alpha2: "ZM",
          phoneCountryCode: "+260",
          phoneCountryCodes: ["+260"],
        },
        {
          name: "Zimbabwe",
          alpha2: "ZW",
          phoneCountryCode: "+263",
          phoneCountryCodes: ["+263"],
        },
      ];
    },
  },
]);
//# sourceMappingURL=85946.ac4019ff3cf78713.js.map
