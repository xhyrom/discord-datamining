"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79209"],
  {
    939383(e) {
      e.exports = "/assets/5950a9b43e4e2f47.svg";
    },
    830382(e, t, n) {
      n.d(t, {
        Aj: () => T,
        EX: () => A,
        O1: () => I,
        QX: () => y,
        T3: () => N,
        XU: () => S,
        lo: () => R,
      });
      var o = n(635358),
        r = n(636537),
        i = n(228366),
        a = n(845584),
        l = n(136857),
        s = n(178253),
        u = n(323082),
        _ = n(977445),
        d = n(67480),
        C = n(739508),
        E = n(403362),
        p = n(107351),
        h = n(371794),
        c = n(652215);
      async function A(e, t, n, r) {
        if (null == d.A.get(t)) {
          i.h.dispatch({ type: "SKU_FETCH_START", skuId: t });
          try {
            let a = (0, _.F)(e),
              l = {
                url: a
                  ? c.Rsh.STORE_SKU(t)
                  : c.Rsh.STORE_PUBLISHED_LISTINGS_SKU(t),
                rejectWithError: !1,
              },
              s = {};
            n === o.g.VARIANTS_GROUP && (s.variants_return_style = n),
              r && (s.include_unpublished = !0),
              Object.keys(s).length > 0 && (l.query = s);
            let u = await (0, h.aP)(l);
            i.h.dispatch({
              type: "SKU_FETCH_SUCCESS",
              sku: a ? u.body : u.body.sku,
            }),
              a ||
                i.h.dispatch({
                  type: "STORE_LISTING_FETCH_SUCCESS",
                  storeListing: u.body,
                });
          } catch (e) {
            throw (
              (i.h.dispatch({ type: "SKU_FETCH_FAIL", skuId: t }),
              new s.A(`Failed to fetch SKU ${t}`))
            );
          }
        }
      }
      async function I(e) {
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
        return i.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: n }), n;
      }
      async function y(e, t, n, o) {
        let r,
          s = { payment_source_id: n, gift: o?.isGift, currency: o?.currency };
        (0, _.F)(e) && (s.test_mode = !0),
          i.h.dispatch({ type: "SKU_PURCHASE_PREVIEW_FETCH", skuId: t });
        try {
          (r = await (0, h.aP)({
            url: c.Rsh.STORE_SKU_PURCHASE(t),
            query: s,
            oldFormErrors: !0,
            rejectWithError: !1,
          })),
            i.h.dispatch({
              type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
              skuId: t,
              paymentSourceId: n,
              price: r.body,
              checkoutSessionId: o?.loadId,
            });
        } catch (n) {
          i.h.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
            skuId: t,
          });
          let e = n instanceof a.Ey ? n : new a.Ey(n);
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
        i.h.dispatch({ type: "ORDER_CREATE_START" });
        try {
          let a = {
            order_line_items: [{ sku_id: e, quantity: 1, purchase_type: 1 }],
            billing_facet: { payment_source_id: t },
            location_facet: { request_gateway_country_code: n },
          };
          o &&
            (a.gifting_facet = {
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
          let s = (
              await r.Bo.post({
                url: c.Rsh.ORDER_CREATE,
                body: a,
                rejectWithError: !1,
              })
            ).body,
            u = s.id;
          return (
            i.h.dispatch({
              type: "ORDER_CREATE_SUCCESS",
              orderId: u,
              order: s,
            }),
            u
          );
        } catch (e) {
          throw (
            (i.h.dispatch({ type: "ORDER_CREATE_FAIL" }),
            new a.Ey(`Failed to create order: ${e}`))
          );
        }
      }
      async function S(e, t, n) {
        let {
          paymentSource: o,
          expectedAmount: s,
          expectedCurrency: d,
          analyticsLoadId: h,
          isGift: A,
          giftInfoOptions: I,
          subscriptionPlanId: y,
          loadId: T,
          countryCode: S,
          orderId: R,
        } = { ...m, ...n };
        i.h.wait(() => {
          i.h.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: t,
          });
        });
        let N = (0, _.F)(e);
        try {
          let e = {
            gift: A,
            sku_subscription_plan_id: y,
            gateway_checkout_context: await (0, C.ob)(o),
            load_id: T,
            gift_info_options: I,
          };
          if (N) e.test_mode = !0;
          else {
            if (
              null != o &&
              ((e.payment_source_id = o.id),
              (e.payment_source_token = await (0, u.jV)(o)),
              c.KcG.has(o.type))
            ) {
              let t = await (0, u.jf)(o.type);
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
          null != s && (e.expected_amount = s),
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
            i.h.dispatch({
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
          let n = r instanceof a.Ey ? r : new a.Ey(r);
          if (
            ((n.code === l.tG.CONFIRMATION_REQUIRED ||
              n.code === l.tG.AUTHENTICATION_REQUIRED) &&
              i.h.dispatch({
                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                skuId: t,
                isGift: A,
              }),
            i.h.dispatch({
              type: "SKU_PURCHASE_FAIL",
              applicationId: e,
              skuId: t,
              error: n,
            }),
            n.code !== l.tG.CONFIRMATION_REQUIRED)
          )
            throw n;
          if (!r.body.payment_id)
            throw (0, u.i0)(
              "payment id cannot be null on redirected confirmations.",
            );
          return (0, u.MM)(r.body, o);
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
          throw e instanceof a.Ey ? e : new a.Ey(e);
        }
      }
      function N() {
        i.h.dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
      }
    },
    601107(e, t, n) {
      n.d(t, { En: () => l, FZ: () => a, qf: () => i });
      var o,
        r,
        i =
          (((o = {})[(o.UNKNOWN = 0)] = "UNKNOWN"),
          (o[(o.ADMIN = 1)] = "ADMIN"),
          (o[(o.USER = 2)] = "USER"),
          (o[(o.FRACTIONAL_PREMIUM = 3)] = "FRACTIONAL_PREMIUM"),
          (o[(o.DEFERRED_START = 4)] = "DEFERRED_START"),
          (o[(o.USER_TEMPORARY_BAN = 5)] = "USER_TEMPORARY_BAN"),
          o);
      let a = { CAN_MAKE_SUBSCRIPTION_UPDATES: new Set([3, 4]) };
      var l =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.ADD_PERKS_IF_DETECTED = 1)] = "ADD_PERKS_IF_DETECTED"),
        (r[(r.FULL_RESYNC = 2)] = "FULL_RESYNC"),
        r);
    },
    612200(e, t, n) {
      n.d(t, { IO: () => s, MP: () => _, Nk: () => u, yO: () => l });
      var o = n(228366);
      n(830215), n(976860);
      var r = n(954571),
        i = n(204925),
        a = n(652215);
      function l(e) {
        r.default.track(a.HAw.OPEN_MODAL, {
          type: "Enter Your Birthday",
          source: { section: e },
        }),
          o.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e });
      }
      function s(e) {
        o.h.wait(() => o.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
          void 0 !== e &&
            r.default.track(a.HAw.AGE_GATE_ACTION, {
              source: e,
              action: i.AM.AGE_GATE_CLOSE,
            });
      }
      function u(e) {
        o.h.wait(() => {
          o.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
        }),
          r.default.track(a.HAw.AGE_GATE_ACTION, {
            source: e,
            action: i.AM.AGE_GATE_SUCCESS,
          });
      }
      function _(e, t) {
        o.h.wait(() => {
          o.h.dispatch({
            type: "AGE_GATE_FAILURE_MODAL_OPEN",
            underageMessage: t,
          });
        }),
          r.default.track(a.HAw.AGE_GATE_ACTION, {
            source: e,
            action: i.AM.AGE_GATE_FAILURE,
          });
      }
    },
    721768(e, t, n) {
      n.d(t, {
        Gf: () => E,
        H2: () => h,
        WL: () => I,
        _y: () => c,
        e0: () => p,
        yL: () => A,
      });
      var o = n(284009),
        r = n.n(o),
        i = n(636537),
        a = n(228366),
        l = n(155718),
        s = n(495544),
        u = n(935208),
        _ = n(166862),
        d = n(392054),
        C = n(652215);
      function E(e) {
        let {
          channelId: t,
          command: n,
          section: o,
          location: i,
          initialValues: l,
          triggerSection: s,
          queryLength: u,
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
          a.h.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: o,
            initialValues: l,
            location: i,
            triggerSection: s,
            queryLength: u,
            sectionName: _,
            query: C,
            searchResultsPosition: E,
            source: p,
            commandOrigin: h,
          });
      }
      function p(e, t) {
        a.h.dispatch({
          type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
          channelId: e,
          commandId: t,
        });
      }
      function h(e, t) {
        a.h.dispatch({
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
        return i.Bo.put({
          body: { permissions: o },
          url: C.Rsh.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
          rejectWithError: !1,
        });
      }
      function I(e, t, n) {
        r()(null != t.autocomplete, "Missing autocomplete context");
        let { query: o, name: d } = t.autocomplete,
          E = u.default.fromTimestamp(Date.now());
        null == t.channel ||
          (a.h.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: E,
            channelId: t.channel.id,
            query: o,
            name: d,
          }),
          null == _.A.getAutocompleteChoices(t.channel.id, d, o) &&
            i.Bo.post({
              url: C.Rsh.INTERACTIONS,
              body: {
                type: l.G4.APPLICATION_COMMAND_AUTOCOMPLETE,
                application_id: e.applicationId,
                guild_id: t.guild?.id,
                channel_id: t.channel.id,
                session_id: s.default.getSessionId(),
                data: n,
                nonce: E,
              },
              timeout: 3e3,
              rejectWithError: !0,
            }).catch(() => {
              a.h.dispatch({ type: "INTERACTION_FAILURE", nonce: E });
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
      n.d(t, { j: () => u });
      var o = n(64700),
        r = n(626584),
        i = n(954571),
        a = n(38405),
        l = n(652215);
      let s = new r.A("CheckoutErrorBoundary.tsx");
      class u extends o.PureComponent {
        state = { error: null, info: null };
        componentDidCatch(e, t) {
          let {
              loadId: n,
              selectedSkuId: o,
              selectedPlanId: r,
              isGift: u,
              purchaseType: _,
              locationStack: d,
              additionalAnalyticsData: C,
            } = this.props,
            E = this.props.shouldRethrowError,
            p = {
              loadId: n,
              selectedSkuId: o,
              selectedPlanId: r,
              isGift: u,
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
          a.A.captureException(e, h),
            s.error("Checkout error occurred:", {
              error: e,
              additionalErrorContext: p,
            });
          let c = "string" == typeof e ? e : e.message;
          if (
            (i.default.track(l.HAw.PAYMENT_FLOW_ERROR, {
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
        i = n(364995),
        a = n(94420);
      function l(e) {
        let { children: t } = e,
          [n] = r.useState(a.y$);
        return (0, i.aN)(n), (0, o.jsx)(a.Ni, { value: n, children: t });
      }
    },
    47671(e, t, n) {
      let o, r;
      n.d(t, { A: () => L });
      var i = n(17928),
        a = n(554146),
        l = n(228366),
        s = n(826673),
        u = n(284016),
        _ = n(973654),
        d = n(363195),
        C = n(964404),
        E = n(253932),
        p = n(617617),
        h = n(95701),
        c = n(734057),
        A = n(287809),
        I = n(927578),
        y = n(427262),
        m = n(644235),
        T = n(385803),
        S = n(185928);
      let R = !0,
        N = !1;
      function O() {
        R && (o = void 0), (N = !1);
      }
      let g = () => {
          let e = !I.Ay.canUseClientThemes(A.default.getCurrentUser());
          if (e === R) return !1;
          R = e;
        },
        P = () => {
          if (!u.A.shouldSync("appearance")) return !1;
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
          if (!u.A.shouldSync("appearance")) return !1;
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
      class f extends i.Ay.PersistedStore {
        static displayName = "ClientThemesBackgroundStore";
        static persistKey = "ClientThemesBackgroundStore";
        migrations = [(e) => ({ gradientPresetId: e?.gradientPreset?.id })];
        initialize(e) {
          null != e &&
            (o =
              e?.gradientPresetId != null ? T.ag[e.gradientPresetId] : void 0),
            this.waitFor(c.A, u.A, d.A, C.Ay, p.A, A.default),
            this.syncWith([A.default], g),
            this.syncWith([u.A], P);
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
        CLIENT_THEMES_EDITOR_CLOSE: O,
        CHANNEL_SELECT: (e) => {
          let { channelId: t, guildId: n } = e,
            o = A.default.getCurrentUser();
          if (
            null == t ||
            null == n ||
            (0, s.k8)(a.M.CLIENT_THEMES_COACHMARK) ||
            !(0, y.G2)(o)
          )
            return;
          let r = c.A.getChannel(t);
          null != r && (0, h.ke)(r.type) && (N = !0);
        },
        LOGOUT: O,
        CACHE_LOADED: M,
        CONNECTION_OPEN: M,
        OVERLAY_INITIALIZE: M,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: M,
        UNSYNCED_USER_SETTINGS_UPDATE: M,
        USER_SETTINGS_PROTO_UPDATE: M,
      });
    },
    11029(e, t, n) {
      n.d(t, { D: () => i });
      var o = n(228366),
        r = n(793943);
      let i = () => {
        (0, r.Jp)(), o.h.dispatch({ type: "CLIENT_THEMES_EDITOR_CLOSE" });
      };
    },
    620233(e, t, n) {
      n.d(t, { Tv: () => d, sD: () => _ });
      var o = n(17928),
        r = n(636537),
        i = n(785401),
        a = n(228366),
        l = n(710195),
        s = n(375441),
        u = n(652215);
      async function _(e) {
        try {
          let t = (
            await r.Bo.get({
              url: u.Rsh.APEX_EXPERIMENTS_METADATA,
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
          a.h.dispatch({
            type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
            experiments: t,
          });
        } catch (e) {
          a.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }),
            console.log(e);
        }
      }
      async function d(e) {
        if (
          !(null != e && l.A.hasLoaded(e)) &&
          !(l.A.isFetching(s.sz) || l.A.hasLoaded(s.sz))
        ) {
          a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: s.sz });
          try {
            let e = await r.Bo.get({
              url: u.Rsh.APEX_EXPERIMENTS,
              query: { surface: i.Um.APP },
              rejectWithError: !1,
            });
            if (e?.body != null) {
              let { installation: t, ...n } = e.body;
              o.Ay.Emitter.batched(() => {
                t && a.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                  a.h.dispatch({
                    type: "APEX_EXPERIMENTS_FETCH_SUCCESS",
                    unitId: s.sz,
                    experiments: n,
                  });
              });
            } else
              a.h.dispatch({
                type: "APEX_EXPERIMENTS_FETCH_FAILURE",
                unitId: s.sz,
              });
          } catch (e) {
            a.h.dispatch({
              type: "APEX_EXPERIMENTS_FETCH_FAILURE",
              unitId: s.sz,
            });
          }
        }
      }
    },
    879408(e, t, n) {
      n.d(t, { A: () => u });
      var o = n(17928),
        r = n(228366),
        i = n(495544);
      let a = new Set(),
        l = new Set();
      class s extends o.Ay.Store {
        static displayName = "BulkBanStore";
        initialize() {
          this.waitFor(i.default);
        }
        hasPendingBulkBan(e) {
          return a.has(e);
        }
        consumeCompletedBeforeStarted(e, t) {
          let n = `${e}:${t}`;
          return l.delete(n);
        }
      }
      let u = new s(r.h, {
        GUILD_BULK_BAN_STARTED: function (e) {
          a.add(e.guildId);
        },
        GUILD_BULK_BAN_FAILED: function (e) {
          if (!a.has(e.guildId)) return !1;
          a.delete(e.guildId);
        },
        GUILD_BULK_BAN_UPDATE: function (e) {
          if (!a.has(e.guildId)) {
            let t = i.default.getId();
            return l.add(`${e.guildId}:${t}`), !1;
          }
          a.delete(e.guildId);
        },
        CONNECTION_OPEN: function () {
          a.clear(), l.clear();
        },
      });
    },
    568185(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(228366),
        r = n(576705),
        i = n(292572),
        a = n(652215);
      let l = {
        async checkGuildTemplateDirty(e) {
          if (!r.A.canWithPartialContext(a.xBc.MANAGE_GUILD, { guildId: e }))
            return;
          let t = await i.A.loadTemplatesForGuild(e);
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
        XF: () => u,
        j7: () => E,
        ni: () => p,
        rE: () => _,
      });
      var o = n(284009),
        r = n.n(o),
        i = n(96337),
        a = n(997101),
        l = n(487052),
        s = n(985018);
      function u(e) {
        let t = i.A.find((t) => t.alpha2 === e);
        if (null != t)
          return { name: t.name, code: t.phoneCountryCode, alpha2: t.alpha2 };
      }
      function _() {
        let e = (function (e) {
          let t = i.A.find((t) => t.name === e);
          if (null != t)
            return { name: t.name, code: t.phoneCountryCode, alpha2: t.alpha2 };
        })("United States");
        return r()(e, "Default country code cannot be missing."), e;
      }
      let d = {
        AF: () => s.intl.string(s.t["Jafq/8"]),
        AX: () => s.intl.string(s.t.fqW5xC),
        AL: () => s.intl.string(s.t["45zGd8"]),
        DZ: () => s.intl.string(s.t.GaE4sr),
        AS: () => s.intl.string(s.t["+WpYG8"]),
        AD: () => s.intl.string(s.t.Bine4f),
        AO: () => s.intl.string(s.t.EncoDy),
        AI: () => s.intl.string(s.t.FyMJlA),
        AQ: () => s.intl.string(s.t["6Ud25U"]),
        AG: () => s.intl.string(s.t.xH0uMV),
        AR: () => s.intl.string(s.t.ii4Wu5),
        AM: () => s.intl.string(s.t.t2mQBe),
        AW: () => s.intl.string(s.t["dDyK+Y"]),
        AC: () => s.intl.string(s.t["5OuUNf"]),
        AU: () => s.intl.string(s.t.jI66M4),
        AT: () => s.intl.string(s.t.X6tsfE),
        AZ: () => s.intl.string(s.t.hqDS5t),
        BS: () => s.intl.string(s.t["V0+FpS"]),
        BH: () => s.intl.string(s.t.KQEKst),
        BD: () => s.intl.string(s.t.O4xJdW),
        BB: () => s.intl.string(s.t["U3gWC+"]),
        BY: () => s.intl.string(s.t.JTzRvh),
        BE: () => s.intl.string(s.t.iKUIV8),
        BZ: () => s.intl.string(s.t.WJ00HN),
        BJ: () => s.intl.string(s.t.oy9Yqr),
        BM: () => s.intl.string(s.t.POFwen),
        BT: () => s.intl.string(s.t.ukyggU),
        BO: () => s.intl.string(s.t.f3izxw),
        BQ: () => s.intl.string(s.t.xNnm8G),
        BA: () => s.intl.string(s.t["i+Zfqp"]),
        BW: () => s.intl.string(s.t.eGkuvF),
        BV: () => s.intl.string(s.t.dbESeA),
        BR: () => s.intl.string(s.t["txyQ+2"]),
        IO: () => s.intl.string(s.t.rHYlV2),
        BN: () => s.intl.string(s.t["7NaGb5"]),
        BG: () => s.intl.string(s.t.rI28Xp),
        BF: () => s.intl.string(s.t.IqU818),
        BI: () => s.intl.string(s.t.IhzLGu),
        KH: () => s.intl.string(s.t["/dAWjY"]),
        CM: () => s.intl.string(s.t.zUUbBM),
        CA: () => s.intl.string(s.t.PNbhxs),
        CV: () => s.intl.string(s.t.i7Jc8d),
        KY: () => s.intl.string(s.t.P1PrRn),
        CF: () => s.intl.string(s.t["9VQtLv"]),
        TD: () => s.intl.string(s.t.dh3ims),
        CL: () => s.intl.string(s.t.pP7XMH),
        CN: () => s.intl.string(s.t.fs44pw),
        CX: () => s.intl.string(s.t.U0iMTj),
        CC: () => s.intl.string(s.t["3khaL3"]),
        CO: () => s.intl.string(s.t["x+nstY"]),
        KM: () => s.intl.string(s.t.lVyhLl),
        CG: () => s.intl.string(s.t.Iv2rZv),
        CD: () => s.intl.string(s.t.j8i9WF),
        CK: () => s.intl.string(s.t.lqyAiJ),
        CR: () => s.intl.string(s.t.ycPQE4),
        CI: () => s.intl.string(s.t["0Tqaz1"]),
        HR: () => s.intl.string(s.t.NnPbnH),
        CU: () => s.intl.string(s.t["lS/PDL"]),
        CW: () => s.intl.string(s.t.khmjg6),
        CY: () => s.intl.string(s.t["11oKq+"]),
        CZ: () => s.intl.string(s.t.EW0ibS),
        DK: () => s.intl.string(s.t.uxk5Qh),
        DG: () => s.intl.string(s.t["Dg/LLm"]),
        DJ: () => s.intl.string(s.t.G2wBdO),
        DM: () => s.intl.string(s.t.memMFD),
        DO: () => s.intl.string(s.t.R1ogUj),
        TP: () => s.intl.string(s.t.FBMXjV),
        EC: () => s.intl.string(s.t.NGNfj8),
        EG: () => s.intl.string(s.t.WJFeOY),
        SV: () => s.intl.string(s.t.lTRKpi),
        GQ: () => s.intl.string(s.t["ML/iU9"]),
        ER: () => s.intl.string(s.t.NQ4OOy),
        EE: () => s.intl.string(s.t["8Lv/0A"]),
        ET: () => s.intl.string(s.t.yNPSFD),
        FK: () => s.intl.string(s.t.v6Hsz1),
        FO: () => s.intl.string(s.t.X7fOHb),
        FJ: () => s.intl.string(s.t.ErOuAC),
        FI: () => s.intl.string(s.t.S5M47r),
        FR: () => s.intl.string(s.t["X/6soc"]),
        GF: () => s.intl.string(s.t["96auOc"]),
        PF: () => s.intl.string(s.t["To7/sV"]),
        TF: () => s.intl.string(s.t.xdJZTD),
        GA: () => s.intl.string(s.t.Sacsfy),
        GM: () => s.intl.string(s.t.GJAp3h),
        GE: () => s.intl.string(s.t["/3kyB3"]),
        DE: () => s.intl.string(s.t.W3pvvg),
        GH: () => s.intl.string(s.t.ffW0vs),
        GI: () => s.intl.string(s.t["/Lb6lb"]),
        GR: () => s.intl.string(s.t.OlCKMe),
        GL: () => s.intl.string(s.t.NLwwbr),
        GD: () => s.intl.string(s.t.uFgtvK),
        GP: () => s.intl.string(s.t.ZrXRVo),
        GU: () => s.intl.string(s.t.qgs2s0),
        GT: () => s.intl.string(s.t.wN1Cw6),
        GG: () => s.intl.string(s.t.DMua5e),
        GN: () => s.intl.string(s.t["/UyK0d"]),
        GW: () => s.intl.string(s.t.zMeBeJ),
        GY: () => s.intl.string(s.t.EoK4JQ),
        HT: () => s.intl.string(s.t.UWEIVr),
        HM: () => s.intl.string(s.t["Nm/9iM"]),
        VA: () => s.intl.string(s.t["RbW/9g"]),
        HN: () => s.intl.string(s.t.DlNDQj),
        HK: () => s.intl.string(s.t.VVWUCi),
        HU: () => s.intl.string(s.t.V6iXLU),
        IS: () => s.intl.string(s.t.bzdtxI),
        IN: () => s.intl.string(s.t["6sO4IF"]),
        ID: () => s.intl.string(s.t.bj0p9O),
        IR: () => s.intl.string(s.t.IGS9mT),
        IQ: () => s.intl.string(s.t["UEK//z"]),
        IE: () => s.intl.string(s.t["RwMJ+T"]),
        IM: () => s.intl.string(s.t.G5FsgF),
        IL: () => s.intl.string(s.t.aF96ro),
        IT: () => s.intl.string(s.t.lxuMKW),
        JM: () => s.intl.string(s.t.nAkIXU),
        JP: () => s.intl.string(s.t.A1PR1d),
        JE: () => s.intl.string(s.t["z3+6TZ"]),
        JO: () => s.intl.string(s.t.wJdVsw),
        KZ: () => s.intl.string(s.t["PwbVJ/"]),
        KE: () => s.intl.string(s.t.Tm2Bmi),
        KI: () => s.intl.string(s.t.e1jq1z),
        XK: () => s.intl.string(s.t["E6yaM+"]),
        KP: () => s.intl.string(s.t["V+Pwy9"]),
        KR: () => s.intl.string(s.t.J71wiI),
        KW: () => s.intl.string(s.t["0ptGwg"]),
        KG: () => s.intl.string(s.t.E312FJ),
        LA: () => s.intl.string(s.t.ia54cG),
        LV: () => s.intl.string(s.t["MGLRc/"]),
        LB: () => s.intl.string(s.t.Mbbwmo),
        LS: () => s.intl.string(s.t.kiCZ6s),
        LR: () => s.intl.string(s.t.qgmUSt),
        LY: () => s.intl.string(s.t.phLtT2),
        LI: () => s.intl.string(s.t.hMYf6x),
        LT: () => s.intl.string(s.t["0ZsaQp"]),
        LU: () => s.intl.string(s.t["W8+2MI"]),
        MO: () => s.intl.string(s.t.IacHym),
        MK: () => s.intl.string(s.t.zKkNKL),
        MG: () => s.intl.string(s.t["/Sg2NZ"]),
        MW: () => s.intl.string(s.t.rZehzK),
        MY: () => s.intl.string(s.t.PvGYlx),
        MV: () => s.intl.string(s.t["+LSSRH"]),
        ML: () => s.intl.string(s.t.eX7xJF),
        MT: () => s.intl.string(s.t.J7Qp1i),
        MH: () => s.intl.string(s.t["930cBv"]),
        MQ: () => s.intl.string(s.t.GhP3Td),
        MR: () => s.intl.string(s.t.JZZOoM),
        MU: () => s.intl.string(s.t.BXVASQ),
        YT: () => s.intl.string(s.t["Eiwn0/"]),
        MX: () => s.intl.string(s.t["5YMLyh"]),
        FM: () => s.intl.string(s.t["4piC24"]),
        MI: () => s.intl.string(s.t.sjTAkF),
        MD: () => s.intl.string(s.t["3KMKWh"]),
        MC: () => s.intl.string(s.t["VRh/QL"]),
        MN: () => s.intl.string(s.t.nuXeWR),
        ME: () => s.intl.string(s.t.w0Lzpq),
        MS: () => s.intl.string(s.t.q3CKrf),
        MA: () => s.intl.string(s.t.h1HVwc),
        MZ: () => s.intl.string(s.t["1syvzu"]),
        MM: () => s.intl.string(s.t["0Ergxv"]),
        NA: () => s.intl.string(s.t.EUzX90),
        NR: () => s.intl.string(s.t.yCfW6p),
        NP: () => s.intl.string(s.t["58TAkl"]),
        NL: () => s.intl.string(s.t.UdKSEp),
        AN: () => s.intl.string(s.t.mlTpxU),
        NC: () => s.intl.string(s.t["7ZQpd8"]),
        NZ: () => s.intl.string(s.t["104LTa"]),
        NI: () => s.intl.string(s.t["b402J+"]),
        NE: () => s.intl.string(s.t["MU4MR/"]),
        NG: () => s.intl.string(s.t.VpAeZP),
        NU: () => s.intl.string(s.t["g+sEOr"]),
        NF: () => s.intl.string(s.t.pwHtBs),
        MP: () => s.intl.string(s.t.QzduP1),
        NO: () => s.intl.string(s.t["WFaeb+"]),
        OM: () => s.intl.string(s.t["A/zFVr"]),
        PK: () => s.intl.string(s.t.wshYBS),
        PW: () => s.intl.string(s.t.bg4SUl),
        PS: () => s.intl.string(s.t.fORlCF),
        PA: () => s.intl.string(s.t.Hsdind),
        PG: () => s.intl.string(s.t.oscQpw),
        PY: () => s.intl.string(s.t["2MyxdK"]),
        PE: () => s.intl.string(s.t["/BRf4/"]),
        PH: () => s.intl.string(s.t["9dhmDU"]),
        PN: () => s.intl.string(s.t.gb2wtt),
        PL: () => s.intl.string(s.t.kMNWN7),
        PT: () => s.intl.string(s.t.idIaSI),
        PR: () => s.intl.string(s.t["2ofdMc"]),
        QA: () => s.intl.string(s.t.dOie5v),
        RE: () => s.intl.string(s.t["HFn6/P"]),
        RO: () => s.intl.string(s.t.o6TI9w),
        RU: () => s.intl.string(s.t.Wpcfkv),
        RW: () => s.intl.string(s.t["kWK/8U"]),
        BL: () => s.intl.string(s.t["2jLrok"]),
        SH: () => s.intl.string(s.t.pq6cqS),
        KN: () => s.intl.string(s.t.kc5n4S),
        LC: () => s.intl.string(s.t.nKQEoN),
        MF: () => s.intl.string(s.t.VPSBtF),
        PM: () => s.intl.string(s.t.C8Ing3),
        VC: () => s.intl.string(s.t.yzj1Ag),
        WS: () => s.intl.string(s.t["n/qY9X"]),
        SM: () => s.intl.string(s.t.ShzB0V),
        ST: () => s.intl.string(s.t.wXKj8c),
        SA: () => s.intl.string(s.t.DyAUdP),
        SN: () => s.intl.string(s.t.GTVnVc),
        RS: () => s.intl.string(s.t.NcPfDc),
        SC: () => s.intl.string(s.t.poiUxX),
        SL: () => s.intl.string(s.t["2qUJqg"]),
        SG: () => s.intl.string(s.t.qxhmN4),
        SX: () => s.intl.string(s.t.nx3nPV),
        SK: () => s.intl.string(s.t.rEAPa0),
        SI: () => s.intl.string(s.t.vE92UM),
        SB: () => s.intl.string(s.t.mu1jbI),
        SO: () => s.intl.string(s.t.PmG5cv),
        ZA: () => s.intl.string(s.t.nLN6A4),
        GS: () => s.intl.string(s.t.vjjsXR),
        SS: () => s.intl.string(s.t["4CZknz"]),
        ES: () => s.intl.string(s.t.DOAxuX),
        LK: () => s.intl.string(s.t.Hbo2lC),
        SD: () => s.intl.string(s.t.UcS5uF),
        SR: () => s.intl.string(s.t["ow+Bj+"]),
        SJ: () => s.intl.string(s.t.FSHHAe),
        SZ: () => s.intl.string(s.t.hnh4kP),
        SE: () => s.intl.string(s.t["+yFtm+"]),
        CH: () => s.intl.string(s.t.TmiTsd),
        SY: () => s.intl.string(s.t.hZHzwQ),
        TW: () => s.intl.string(s.t.reC53I),
        TJ: () => s.intl.string(s.t.QibTNQ),
        TZ: () => s.intl.string(s.t.y6CVE7),
        TH: () => s.intl.string(s.t.DzQks0),
        TL: () => s.intl.string(s.t.M6fZXZ),
        TG: () => s.intl.string(s.t.O8FB7Y),
        TK: () => s.intl.string(s.t.H0Hhzx),
        TO: () => s.intl.string(s.t["cs6mZ+"]),
        TT: () => s.intl.string(s.t.HSjyVP),
        TN: () => s.intl.string(s.t["9Y8ErH"]),
        TR: () => s.intl.string(s.t["0pGOx9"]),
        TM: () => s.intl.string(s.t.RLyIjh),
        TC: () => s.intl.string(s.t.hgenP3),
        TV: () => s.intl.string(s.t.yTaZQZ),
        UG: () => s.intl.string(s.t.MhfaQ7),
        UA: () => s.intl.string(s.t.VPxzCd),
        AE: () => s.intl.string(s.t.Q3gzMK),
        GB: () => s.intl.string(s.t.YypOXE),
        US: () => s.intl.string(s.t["7LL+Fw"]),
        UM: () => s.intl.string(s.t.gvRzmp),
        UY: () => s.intl.string(s.t.xwojAY),
        UZ: () => s.intl.string(s.t.qGQlYe),
        VU: () => s.intl.string(s.t.xd2XuA),
        VE: () => s.intl.string(s.t.A0oPen),
        VN: () => s.intl.string(s.t["CA4GY/"]),
        VG: () => s.intl.string(s.t["/MJ7OU"]),
        VI: () => s.intl.string(s.t.Swyyp5),
        WF: () => s.intl.string(s.t.mgb3iv),
        EH: () => s.intl.string(s.t.tRqLZU),
        YE: () => s.intl.string(s.t.yn37kD),
        ZM: () => s.intl.string(s.t.e0NQFU),
        ZW: () => s.intl.string(s.t.kQ6oLs),
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
          let t = a.d[e];
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
      n.d(t, { B8: () => P, dF: () => M, up: () => g, xr: () => S });
      var o = n(627968),
        r = n(64700),
        i = n(296489),
        a = n.n(i),
        l = n(580956),
        s = n(451989),
        u = n(353640),
        _ = n(121894),
        d = n(319060),
        C = n(315710),
        E = n(844222),
        p = n(775121),
        h = n(240248),
        c = n(750506),
        A = n(191627),
        I = n(87404),
        y = n(215011);
      let m = new Set([I._s, A.Uy]),
        T = (0, h.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
        S = (0, u.v)((e) => ({
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
              className: y.zr,
              ref: n,
              children: [
                (0, o.jsx)("div", { className: y.$E }),
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
          enter: y.Ve,
          enterActive: y.T8,
          enterDone: y.lG,
          exit: y.NS,
          exitActive: y.N5,
          exitDone: y.Dr,
        },
        O = {
          enter: y.Zf,
          enterActive: y.BA,
          enterDone: y.zo,
          exit: y.ph,
          exitActive: y.zX,
          exitDone: y.hf,
        };
      function g() {
        let { reducedMotion: e } = r.useContext(E.C),
          t = e.enabled ? O : N,
          n = S((e) => e.fullScreenLayers),
          i = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
        return (0, o.jsx)(l.A, {
          children: i.map((e) => {
            let { item: r, nodeRef: i } = e;
            return (0, o.jsx)(
              s.A,
              {
                nodeRef: i,
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
                children: (0, o.jsx)(R, { containerRef: i, item: r }),
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
            onEscape: i,
            showAppUnderLayer: l = !1,
          } = t,
          s = null != n ? n : a()();
        return (
          (0, _.r)(() => {
            S.setState((t) => ({
              fullScreenLayers: [
                ...t.fullScreenLayers,
                {
                  key: s,
                  transitionState: 1,
                  LayerComponent: o ?? c.Ay,
                  render: e,
                  options: {
                    disableAnimation: r,
                    onEscape: i,
                    showAppUnderLayer: l,
                  },
                },
              ],
            }));
          }),
          s
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
      n.d(t, { BM: () => s, Re: () => l, uH: () => a });
      var o,
        r,
        i,
        a =
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
        s =
          (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
          (i[(i.ONE_TIME = 1)] = "ONE_TIME"),
          (i[(i.SUBSCRIPTION = 2)] = "SUBSCRIPTION"),
          i);
    },
    795791(e, t, n) {
      n.d(t, { $w: () => s, uM: () => u });
      var o = n(492462),
        r = n(873263);
      n(809733), n(38405);
      var i = n(26279),
        a = n(652215);
      let l = (e, t, n) => {
          if (!e.startsWith(a.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === a.W6J.MOBILE_WEB_REDIRECT_CHECKOUT)
              return i.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (n === i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT)
              return i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
          }
        },
        s = () => {
          let { search: e, pathname: t } = (0, r.zy)(),
            { deep_link_type: n, flow_type: i } = (0, o.parse)(e);
          return l(t, n, i);
        },
        u = () => {
          let e = window.location.pathname,
            { deep_link_type: t, flow_type: n } = (0, o.parse)(
              window.location.search,
            );
          return l(e, t, n);
        };
    },
    624210(e, t, n) {
      n.d(t, { Nl: () => u, fS: () => l, iY: () => s });
      var o = n(636537),
        r = n(228366),
        i = n(26279),
        a = n(652215);
      async function l(e) {
        let { skuId: t, paymentSourceId: n, paymentGateway: l, loadId: s } = e;
        r.h.wait(() => {
          r.h.dispatch({ type: "ORDER_CREATE_START" });
        });
        try {
          let e = {};
          null != n && (e.payment_source_id = n),
            null != l && (e.payment_gateway = l);
          let u = {
              order_line_items: [
                { sku_id: t, quantity: 1, purchase_type: i.BM.ONE_TIME },
              ],
              billing_facet: e,
            },
            _ = (
              await o.Bo.post({
                url: a.Rsh.ORDER_CREATE,
                body: u,
                context: null != s && "" !== s ? { load_id: s } : void 0,
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
      async function s(e) {
        let { orderId: t, updates: n } = e;
        r.h.wait(() => {
          r.h.dispatch({ type: "ORDER_UPDATE_START" });
        });
        try {
          let e = {};
          "paymentSourceId" in n &&
            (e.billing_facet = { payment_source_id: n.paymentSourceId }),
            await o.Bo.patch({
              url: a.Rsh.ORDER_UPDATE(t),
              body: e,
              rejectWithError: !0,
            }),
            await r.h.dispatch({ type: "ORDER_UPDATE_SUCCESS", orderId: t });
        } catch (e) {
          await r.h.dispatch({ type: "ORDER_UPDATE_FAIL" });
        }
      }
      async function u(e) {
        try {
          let t = await o.Bo.post({
            url: a.Rsh.ORDER_DISCARD(e),
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
    166532(e, t, n) {
      n.d(t, {
        Ir: () => p,
        ZC: () => E,
        l_: () => C,
        ou: () => h,
        pn: () => d,
        zT: () => c,
      });
      var o,
        r = n(64700),
        i = n(845584),
        a = n(626584),
        l = n(739508),
        s = n(566980),
        u = n(985018);
      let _ = new a.A("PaymentSteps");
      var d =
        (((o = {}).PAYMENT_TYPE = "payment_type"),
        (o.PAYMENT_ELEMENT = "payment_element"),
        (o.CREDIT_CARD_INFORMATION = "credit_card_information"),
        (o.PAYPAL_INFORMATION = "paypal_information"),
        (o.VENMO_INFORMATION = "venmo_information"),
        (o.PRZELEWY24_INFORMATION = "przelewy24_information"),
        (o.EPS_INFORMATION = "eps_information"),
        (o.IDEAL_INFORMATION = "ideal_information"),
        (o.CASH_APP_INFORMATION = "cash_app_information"),
        (o.PAYMENT_REQUEST_INFORMATION = "payment_request_information"),
        (o.ADDRESS = "address"),
        (o.AWAITING_AUTHENTICATION = "awaiting_authentication"),
        (o.SKU_SELECT = "sku_select"),
        (o.PLAN_SELECT = "plan_select"),
        (o.PREMIUM_UPSELL = "premium_upsell"),
        (o.PREMIUM_GUILD_UPSELL = "premium_guild_upsell"),
        (o.REVIEW = "review"),
        (o.CONFIRM = "confirm"),
        (o.CLAIM_FREE_SKU = "claim_free_sku"),
        (o.SKU_PREVIEW = "sku_preview"),
        (o.LOADING_PAYMENT_SOURCES = "loading_payment_sources"),
        (o.SHOP = "shop"),
        (o.PROMOTION_INFO = "promotion_info"),
        (o.AWAITING_PURCHASE_TOKEN_AUTH = "awaiting_purchase_token_auth"),
        (o.BENEFITS = "benefits"),
        (o.WHAT_YOU_LOSE = "what_you_lose"),
        (o.ADD_PAYMENT_STEPS = "add_payment_steps"),
        (o.ATTEMPT_GOOGLE_PAY = "attempt_google_pay"),
        (o.ATTEMPT_APPLE_PAY = "attempt_apple_pay"),
        (o.AWAITING_BROWSER_CHECKOUT = "awaiting_browser_checkout"),
        (o.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY =
          "awaiting_browser_checkout_google_pay"),
        (o.AWAITING_BROWSER_CHECKOUT_APPLE_PAY =
          "awaiting_browser_checkout_apple_pay"),
        (o.GIFT_CUSTOMIZATION = "gift_customization"),
        (o.SELECT_FREE_SKU = "select_free_sku"),
        o);
      let C = new Set([
          "awaiting_browser_checkout",
          "awaiting_browser_checkout_google_pay",
          "awaiting_browser_checkout_apple_pay",
        ]),
        E = new Set([
          "credit_card_information",
          "payment_request_information",
          "paypal_information",
          "venmo_information",
          "cash_app_information",
          "address",
          "claim_free_sku",
          "sku_preview",
          "premium_upsell",
          "przelewy24_information",
        ]);
      function p(e) {
        switch (e) {
          case "plan_select":
            return u.intl.string(u.t["r+SebU"]);
          case "payment_type":
          case "add_payment_steps":
            return u.intl.string(u.t.Sb6wI1);
          case "awaiting_purchase_token_auth":
          case "review":
            return u.intl.string(u.t.QBnNHq);
          case "shop":
            return u.intl.string(u.t.xj9ooX);
          case "payment_request_information":
            return u.intl.string(u.t.DDPRXs);
          case "credit_card_information":
            return u.intl.string(u.t.yMPCXL);
          case "address":
            return u.intl.string(u.t["50Auo2"]);
          case "paypal_information":
            return u.intl.string(u.t.RVHDnH);
          case "venmo_information":
            return u.intl.string(u.t.bzQdwW);
          case "przelewy24_information":
            return u.intl.string(u.t.BW0R4v);
          case "cash_app_information":
            return u.intl.string(u.t.Gz1fyE);
          case "gift_customization":
            return u.intl.string(u.t.R0vK0N);
        }
        throw Error(`Unexpected step: ${e}`);
      }
      function h(e) {
        if (null != e) {
          if (!(e instanceof i.Ey))
            throw (_.error(e), (0, l.pM)(e), Error("Unexpected error type"));
          if (e.hasCardError()) return "credit_card_information";
          if (e.hasAddressError()) return "address";
        }
        return null;
      }
      function c(e, t, n) {
        r.useEffect(() => {
          null != e &&
            "review" !== e &&
            t !== s.h.WAITING &&
            t !== s.h.COMPLETED &&
            n(s.h.WAITING);
        }, [e, t, n]);
      }
    },
    905773(e, t, n) {
      n.d(t, { A: () => d });
      var o = n(64700),
        r = n(17928),
        i = n(211287),
        a = n(158317),
        l = n(123633),
        s = n(624210);
      let u = (0, n(945810).mj)({
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
          E = u.useConfig({ location: "payment_modal" }).enabled,
          p = i.A.useConfig({ location: "payment_modal" }).enabled,
          h = t.paymentGateway === _.kM.VIRTUAL_CURRENCY,
          c = h ? p : E,
          A = (0, o.useRef)(null),
          I = (0, o.useRef)(""),
          y = (0, o.useRef)(!1),
          m = (0, o.useRef)(!1),
          T = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          if (!E || null == d || null == t.paymentSourceId) return;
          let e = t.paymentSourceId;
          async function o() {
            var o;
            let r = n ?? (await (0, a.r)(d)),
              i = r?.billing_facet;
            if (i?.payment_source_id === t.paymentSourceId) {
              (A.current = d), (I.current = e);
              return;
            }
            (o = r),
              o?.billing_facet?.payment_gateway !== _.kM.VIRTUAL_CURRENCY &&
                (await (0, s.iY)({ orderId: d, updates: t }),
                (A.current = d),
                (I.current = e));
          }
          (A.current !== d || I.current !== e) && o();
        }, [d, n, t.paymentSourceId, E]),
          (0, o.useEffect)(() => {
            let e = T.current;
            (T.current = d),
              null == d && null != e
                ? ((m.current = !0),
                  (A.current = null),
                  (I.current = ""),
                  (y.current = !1))
                : null != d && (m.current = !1);
          }, [d]),
          (0, o.useEffect)(() => {
            if (null != d) {
              (y.current = !1), (m.current = !1);
              return;
            }
            !m.current &&
              (!c ||
                C ||
                y.current ||
                null == e ||
                (null == t.paymentSourceId && null == t.paymentGateway) ||
                ((y.current = !0),
                (0, s.fS)({
                  skuId: e,
                  paymentSourceId: h ? void 0 : (t.paymentSourceId ?? void 0),
                  paymentGateway: t.paymentGateway,
                  loadId: t.loadId,
                })));
          }, [d, C, e, t, c, h]);
      }
    },
    853398(e, t, n) {
      n.d(t, { A: () => u });
      var o = n(64700),
        r = n(17928),
        i = n(97352),
        a = n(83617),
        l = n(788868),
        s = n(818348);
      function u(e) {
        let {
          activeSubscription: t,
          skuIDs: n,
          paymentSourceId: u,
          isGift: _,
          excludeSubscriptionPlansBySKU: d,
          checkoutInvoicePreview: C,
        } = e;
        n = n.filter((e) => e !== l.pe.NONE);
        let E = (0, r.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(n).filter((e) => !_ || l.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
          }),
          p = null == E ? [] : (0, a._w)(E.id, u, _),
          h = p.find((e) => e === t?.currency) ?? p[0] ?? s.Yr.USD,
          c = (0, a.Yk)({
            initialCurrency: h,
            subscriptionPlanId: E?.id,
            paymentSourceId: u,
            isGift: _,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
          }),
          { allowedCurrencies: A, invoiceCurrency: I } = o.useMemo(
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
          y = A.length > 0 ? A : p,
          m = c.priceOptions.currency,
          T = o.useMemo(
            () =>
              null != m ? m : null != I ? I : y.length > 0 ? y[0] : void 0,
            [m, I, y],
          );
        return { ...c, currencies: y, displayCurrency: T };
      }
    },
    121005(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(64700),
        r = n(17928),
        i = n(323082),
        a = n(166403);
      function l() {
        let e = (0, r.bG)([a.A], () => a.A.hasFetchedSubscriptions());
        return (
          o.useEffect(() => {
            e || (0, i.hP)();
          }, [e]),
          e
        );
      }
    },
    369827(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(64700),
        r = n(17928),
        i = n(323082),
        a = n(295405);
      function l(e) {
        let {
            isGift: t,
            activeSubscription: n,
            eligiblePaymentGateways: l,
          } = e,
          {
            defaultPaymentSourceId: s,
            paymentSources: u,
            hasFetchedPaymentSources: _,
          } = (0, r.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
          })),
          d = (e, t, n, o) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != o && o.length > 0) {
              if (null != n && o.includes(u[n].paymentGateway)) return n;
              for (let e in u) {
                let t = u[e];
                if (o.includes(t.paymentGateway)) return e;
              }
              return null;
            }
            return n;
          },
          [C, E] = o.useState(() => d(t, n, s, l));
        return (
          o.useEffect(() => {
            _ ? E(d(t, n, s, l)) : (0, i.$o)();
          }, [_, t, n, s, l]),
          {
            paymentSources: u,
            hasPaymentSources: Object.keys(u).length > 0,
            paymentSourceId: C,
            setPaymentSourceId: E,
            hasFetchedPaymentSources: _,
            defaultPaymentSource: null != s ? u[s] : null,
          }
        );
      }
    },
    552574(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(17928),
        r = n(251913),
        i = n(825755),
        a = n(153084);
      function l() {
        let e = (0, o.bG)([i.A], () => i.A.error),
          [t, n] = (0, o.yK)([a.A], () => [
            a.A.error,
            a.A.isAwaitingAuthentication,
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
      n.d(t, { A: () => a });
      var o = n(64700),
        r = n(166532),
        i = n(566980);
      function a(e) {
        let [t, n] = o.useState(i.h.WAITING);
        return (
          o.useEffect(() => {
            null != e &&
              e !== r.pn.REVIEW &&
              t !== i.h.WAITING &&
              t !== i.h.COMPLETED &&
              n(i.h.WAITING);
          }, [e, t, n]),
          [t, n]
        );
      }
    },
    289333(e, t, n) {
      n.d(t, { A: () => l });
      var o = n(64700),
        r = n(997101),
        i = n(17928),
        a = n(615405);
      function l() {
        let [e, t] = o.useState(!1),
          [n, l] = o.useState(!1),
          s = (0, i.bG)([a.A], () =>
            r.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback),
          );
        return {
          hasViewedPurchaseTerms: e,
          setHasViewedPurchaseTerms: t,
          showWithdrawalWaiver: s,
          hasAcceptedWithdrawalWaiver: !s || n,
          setHasAcceptedWithdrawalWaiver: l,
        };
      }
    },
    252293(e, t, n) {
      n.d(t, { A: () => d });
      var o = n(64700),
        r = n(635358),
        i = n(830382),
        a = n(845584),
        l = n(136857),
        s = n(354328),
        u = n(79387),
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
          c = (0, s.A)("shop_include_unpublished"),
          { previewErrorsById: A, setErrorById: I } = (function () {
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
              (0, i.EX)(t, e, r.g.VARIANTS_GROUP, c);
        }, [t, n, c]);
        let y = o.useRef(!1);
        return (
          o.useEffect(() => {
            if (!E) {
              for (let e of n)
                if (!u.A.isFetchingSKU(e)) {
                  let n = y.current ? d : null;
                  (0, i.QX)(t, e, n, {
                    isGift: C,
                    loadId: p,
                    currency: h,
                  }).catch((t) => {
                    t instanceof a.Ey &&
                      (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED ||
                        t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED ||
                        t.code === l.tG.INVALID_BILLING_ADDRESS) &&
                      I(e, t);
                  });
                }
              y.current = !0;
            }
          }, [t, n, d, C, I, E, p, h]),
          { previewErrorsById: A }
        );
      }
    },
    87952(e, t, n) {
      n.d(t, { A: () => a });
      var o = n(64700),
        r = n(739508),
        i = n(71532);
      function a() {
        let [e, t] = o.useState(null);
        return (
          o.useEffect(() => {
            (0, i.Cv)()
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
        i = n(636537),
        a = n(799226),
        l = n(954571),
        s = n(676279),
        u = n(652215);
      let _ = (e) => {
        (0, o.useEffect)(() => {
          e &&
            l.default.track(
              u.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING,
            );
        }, [e]);
        let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: _,
          } = ((e) => {
            let t = (0, s.TM)(),
              [n, r] = (0, o.useState)({
                modalGlowEntry: void 0,
                modalGlowIdle: void 0,
                modalGlowExit: void 0,
              }),
              [a, _] = (0, o.useState)(!1),
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
                      [n, o, a] = await Promise.all([
                        i.Bo.get({
                          url: t
                            ? "https://cdn.discordapp.com/assets/content/26968a6375b676097d7234b043b61312b8037f45d077c91b621ead07c6b0544b.mov"
                            : "https://cdn.discordapp.com/assets/content/49d12c146442880c181fcc5502a49bd31d7537c2d6d5255aa2ad6b3d668553e7.webm",
                          binary: !0,
                          rejectWithError: !0,
                        }),
                        i.Bo.get({
                          url: t
                            ? "https://cdn.discordapp.com/assets/content/e1b69b796171027073273beebfee03fdf466010bf89a2ff116deccaec44d7c6f.mov"
                            : "https://cdn.discordapp.com/assets/content/ad6e3d6f3a4bb6a1debd45bc21e47b7f522685c3facc578bd2129aa4cd795f40.webm",
                          binary: !0,
                          rejectWithError: !0,
                        }),
                        i.Bo.get({
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
                        modalGlowIdle: window.URL.createObjectURL(a.body),
                      }),
                      _(!0),
                      l.default.track(
                        u.HAw
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
              { mediaUrls: n, isSuccess: a, isFailure: d, isLoading: E }
            );
          })(e),
          { status: d } = (0, a.CE)(e ? r.A : null);
        return {
          mediaUrls: t,
          isSuccess: n && d === a.BW.Loaded,
          isLoading: _ || d === a.BW.Loading,
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
        Bu: () => ea,
        CA: () => eu,
        CQ: () => el,
        CW: () => eU,
        Cq: () => t_,
        DA: () => e0,
        Dw: () => eA,
        EG: () => eP,
        EV: () => en,
        En: () => j,
        FB: () => ei,
        Ff: () => J,
        G4: () => e_,
        GI: () => eX,
        HF: () => ef,
        Hp: () => eE,
        J7: () => ec,
        JM: () => K,
        Jm: () => U,
        Jo: () => tr,
        KG: () => eO,
        Kq: () => e4,
        L9: () => et,
        LE: () => e2,
        M4: () => q,
        MB: () => eR,
        MX: () => eI,
        Mf: () => e3,
        Mr: () => X,
        NL: () => tc,
        OJ: () => ts,
        ON: () => eb,
        OO: () => eY,
        OW: () => eB,
        Pn: () => ew,
        PremiumTypes: () => M,
        Qz: () => eF,
        T: () => th,
        T7: () => b,
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
        _$: () => tu,
        a5: () => $,
        bi: () => eh,
        bx: () => eo,
        ci: () => D,
        d8: () => eZ,
        e: () => eV,
        eR: () => ev,
        eZ: () => ex,
        f3: () => ej,
        f5: () => te,
        fY: () => ep,
        gD: () => B,
        gd: () => ey,
        h7: () => es,
        hd: () => Q,
        k4: () => ed,
        l1: () => ta,
        lA: () => eW,
        lj: () => eM,
        lk: () => L,
        ly: () => eG,
        nk: () => eQ,
        np: () => ti,
        o2: () => e9,
        oX: () => Z,
        oz: () => v,
        pW: () => V,
        pX: () => eC,
        pd: () => tt,
        pe: () => w,
        ph: () => er,
        q: () => eg,
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
        i,
        a,
        l,
        s,
        u,
        _,
        d,
        C,
        E,
        p,
        h,
        c,
        A,
        I,
        y,
        m,
        T,
        S,
        R = n(334279),
        N = n(652215),
        O = n(307731),
        g = n(985018),
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
      var w =
        (((i = {}).NONE = "628379670982688768"),
        (i.TIER_0 = "978380684370378762"),
        (i.TIER_1 = "521846918637420545"),
        (i.TIER_2 = "521847234246082599"),
        (i.GUILD = "590663762298667008"),
        (i.LEGACY = "521842865731534868"),
        i);
      let b = ["978380684370378762", "521847234246082599"],
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
        (((a = {}).NONE_MONTH = "628379151761408000"),
        (a.NONE_YEAR = "628381571568631808"),
        (a.PREMIUM_MONTH_TIER_0 = "978380692553465866"),
        (a.PREMIUM_YEAR_TIER_0 = "1024422698568122368"),
        (a.PREMIUM_MONTH_TIER_1 = "511651871736201216"),
        (a.PREMIUM_YEAR_TIER_1 = "511651876987469824"),
        (a.PREMIUM_MONTH_TIER_2 = "511651880837840896"),
        (a.PREMIUM_YEAR_TIER_2 = "511651885459963904"),
        (a.PREMIUM_MONTH_GUILD = "590665532894740483"),
        (a.PREMIUM_YEAR_GUILD = "590665538238152709"),
        (a.NONE_3_MONTH = "944265614527037440"),
        (a.NONE_6_MONTH = "944265636643602432"),
        (a.PREMIUM_3_MONTH_TIER_2 = "642251038925127690"),
        (a.PREMIUM_6_MONTH_TIER_2 = "944037208325619722"),
        (a.PREMIUM_3_MONTH_GUILD = "944037355453415424"),
        (a.PREMIUM_6_MONTH_GUILD = "944037391444738048"),
        (a.PREMIUM_MONTH_LEGACY = "511651856145973248"),
        (a.PREMIUM_YEAR_LEGACY = "511651860671627264"),
        (a.PREMIUM_GROUP_MONTH = "1432523012455792640"),
        a);
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
          (((s = {})[(s.DAY = 1)] = "DAY"),
          (s[(s.WEEK = 2)] = "WEEK"),
          (s[(s.MONTH = 3)] = "MONTH"),
          (s[(s.YEAR = 4)] = "YEAR"),
          s);
      let X = Object.freeze({ 3: g.t["t9uG/o"], 1: g.t.FSOz78, 2: g.t.lG6a5x }),
        Q = Object.freeze({
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
        Z = 30,
        q = 2,
        $ = 3,
        ee = 28,
        et = 30,
        en = 30,
        eo = 7,
        er = 30,
        ei = "775514091874680832",
        ea = "845031178288889946",
        el = 432e6,
        es = 3456e5,
        eu = 2808e5,
        e_ = 14,
        ed = "520373071933079552",
        eC = "902329034132684800",
        eE = "983601860436819968",
        ep = "983601860436819969",
        eh = "984244797441048577",
        ec = "1004850445463584768",
        eA = "1073698058383917056",
        eI = "1070132870233980928",
        ey = "1267968635301789696",
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
          eI,
          ey,
          em,
          eT,
          "1271484512081285191",
          eS,
        ],
        eN = "1150904354090532864",
        eO = "1199128659810582528",
        eg = "1204865493622587392",
        eP = "1204867673024888832",
        eM = "1215346678383509504",
        ef = "1215366184820539392",
        eL = "1488790996522238054",
        eU = "1223319122125783040",
        eD = "1223380890109870080",
        eG = [eU, eD],
        ew = [eS],
        eb = [],
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
          [eI]: { id: eI, skus: ["978380684370378762"] },
          [eA]: { id: eA, skus: ["521847234246082599"] },
          [eT]: { id: eT, skus: ["521847234246082599"] },
          [eS]: { id: eS, skus: ["521847234246082599"] },
        });
      var eV =
          (((u = {}).ANIMATED_GUILD_BANNER_TOOLTIP =
            "animated_guild_banner_tooltip"),
          (u.EMOJI_PICKER_SEARCH = "emoji_picker_search"),
          (u.EMOJI_PICKER_EMOJI_CLICKED = "emoji_picker_emoji_clicked"),
          (u.EMOJI_PICKER_STICKER_CLICKED = "emoji_picker_sticker_clicked"),
          (u.EMOJI_PICKER_REACTION_EMOJI_CLICKED =
            "emoji_picker_reaction_emoji_clicked"),
          (u.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED =
            "emoji_picker_super_reaction_emoji_clicked"),
          (u.EMOJI_PICKER_STATUS_EMOJI_CLICKED =
            "emoji_picker_status_emoji_clicked"),
          (u.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED =
            "emoji_picker_top_server_emoji_clicked"),
          (u.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED =
            "emoji_picker_newly_added_emoji_clicked"),
          (u.EMOJI_AUTOSUGGEST_CLICKED = "emoji_autosuggest_clicked"),
          (u.EMOJI_AUTOCOMPLETE_INLINE = "emoji_autocomplete_inline"),
          (u.EMOJI_AUTOCOMPLETE_MODAL = "emoji_autocomplete_modal"),
          (u.EMOJI_IN_MESSAGE_HOVER = "emoji_in_message_hover"),
          (u.EMOJI_IN_REACTION_HOVER = "emoji_in_reaction_hover"),
          (u.EMOJI_IN_BURST_REACTION_HOVER = "emoji_in_burst_reaction_hover"),
          (u.EMOJI_IN_BURST_REACTION_HOVER_UPSELL =
            "emoji_in_burst_reaction_hover_upsell"),
          (u.EMOJI_PICKER_FLOATING_UPSELL = "emoji_picker_floating_upsell"),
          (u.STICKER_IN_MESSAGE_HOVER = "sticker_in_message_hover"),
          (u.EMPTY_STICKER_PICKER_UPSELL = "empty_sticker_picker_upsell"),
          (u.STREAM_QUALITY_INDICATOR = "stream_quality_indicator"),
          (u.GIFT_STREAM_QUALITY_INDICATOR = "gift_stream_quality_indicator"),
          (u.MESSAGE_LENGTH_UPSELL = "message_length_upsell"),
          (u.MESSAGE_LENGTH_IN_EDITOR_UPSELL =
            "message_length_in_editor_upsell"),
          (u.CUSTOM_PROFILE_UPSELL = "custom profiles upsell modal"),
          (u.CUSTOM_PROFILE_TRY_OUT_UPSELL =
            "try out custom profile in settings upsell"),
          (u.VIDEO_BACKGROUNDS_MODAL = "video backgrounds modal"),
          (u.VIDEO_BACKGROUNDS_INLINE = "video backgrounds inline"),
          (u.GUILD_CAP_INLINE_SERVER_LIST = "guild_cap_inline_server_list"),
          (u.GUILD_PREMIUM_UPSELL_MODAL = "premium guild premium upsell modal"),
          (u.GUILD_CAP_INLINE_INVITE_MODAL = "guild_cap_inline_invite_modal"),
          (u.GUILD_CAP_MODAL_UPSELL = "guild_cap_modal_upsell"),
          (u.PREMIUM_GUILD_IDENTITY_MODAL =
            "premium guild identity upsell alert"),
          (u.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON =
            "custom profiles settings banner upsell"),
          (u.STICKER_PICKER_UPSELL = "sticker_picker_upsell"),
          (u.ANIMATED_AVATAR_PREVIEW_GIF_MODAL =
            "animated avatar preview gif modal"),
          (u.ANIMATED_USER_AVATAR_MODAL = "animated user avatar upsell modal"),
          (u.UPLOAD_ERROR_UPSELL = "upload error upsell"),
          (u.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE =
            "premium guild member profile upsell inline"),
          (u.CONCURRENT_ACTIVITIES = "Concurrent Activities"),
          (u.PREMIUM_UNCANCEL_WINBACK_MODAL_VIEWED =
            "premium_uncancel_winback_modal_viewed"),
          (u.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET =
            "animated_video_background_new_preset"),
          (u.LOW_PRICE_EXPERIMENT_TOOLTIP = "low_price_experiment_tooltip"),
          (u.PREMIUM_PROFILE_BADGE_UPSELL = "premium_profile_badge_upsell"),
          (u.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "emoji"),
          (u.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION =
            "profile customization"),
          (u.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING =
            "hd streaming"),
          (u.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS =
            "larger file uploads"),
          (u.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "bogo"),
          (u.VOICE_CHANNEL_EFFECTS_UPSELL = "voice_channel_effects_upsell"),
          (u.VOICE_CHANNEL_EFFECTS_BAR_EMOJI_UPSELL =
            "Voice Channel Effect Bar Emoji Upsell"),
          (u.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED =
            "voice_channel_effects_toggle_clicked"),
          (u.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED =
            "voice_channel_effects_toggle_clicked_expanded"),
          (u.PROFILE_EFFECTS_INLINE_SETTINGS =
            "profile_effects_inline_settings"),
          (u.PROFILE_EFFECTS_INLINE_SETTINGS_MOBILE =
            "profile_effects_inline_settings_mobile"),
          (u.HIGH_VIDEO_QUALITY_UPSELL = "high_video_quality_upsell"),
          (u.PREMIUM_PROFILE_TRY_IT_OUT = "premium_profile_try_it_out"),
          (u.BURST_REACTION_RAIL_UPSELL = "burst_reaction_rail_upsell"),
          (u.BURST_REACTION_UPSELL = "burst_reaction_upsell"),
          (u.BURST_REACTION_QUICK_ACTION_UPSELL =
            "burst_reaction_quick_action_upsell"),
          (u.BURST_REACTION_CONTEXT_MENU_UPSELL =
            "burst_reaction_context_menu_upsell"),
          (u.PREMIUM_CLIENT_THEME_TRY_IT_OUT =
            "premium_client_theme_try_it_out"),
          (u.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL =
            "premium_client_theme_settings_upsell"),
          (u.VIDEO_STAGE_LIMIT = "video_stage_limit"),
          (u.SOUND_PICKER_SOUND_CLICKED = "sound_picker_sound_clicked"),
          (u.APP_ICON_UPSELL = "app_icon_upsell"),
          (u.COLLECTIBLES_SHOP = "collectibles_shop"),
          (u.COLLECTIBLES_PROFILE_SETTINGS_UPSELL =
            "collectibles_profile_settings_upsell"),
          (u.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL =
            "collectibles_premium_marketing_page_upsell"),
          (u.CLIPS_GUILD_SIDEBAR_COACHMARK_PREMIUM_EARLY_ACCESS_UPSELL =
            "clips_guild_sidebar_coachmark_premium_early_access_upsell"),
          (u.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL =
            "clips_go_live_premium_early_access_roadblock_upsell"),
          (u.CUSTOM_NOTIFICATION_SOUNDS_UPSELL =
            "custom_notification_sounds_upsell"),
          (u.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL =
            "custom_notification_sounds_settings_inline_upsell"),
          (u.HD_STREAMING_VIEWER_UPSELL = "hd_streaming_viewer_upsell"),
          (u.FOR_LATER_MODAL_UPSELL = "for_later_modal_upsell"),
          (u.TRY_IT_OUT_MODAL_UPSELL = "try_it_out_modal_upsell"),
          (u.ANIMATED_BANNER_MODAL_UPSELL = "animated_banner_modal_upsell"),
          (u.ANIMATED_AVATAR_MODAL_UPSELL = "animated_avatar_modal_upsell"),
          (u.PROFILE_EFFECT_MODAL_UPSELL = "profile_effect_modal_upsell"),
          (u.AVATAR_DECORATION_MODAL_UPSELL = "avatar_decoration_modal_upsell"),
          (u.NAMEPLATE_MODAL_UPSELL = "nameplate_modal_upsell"),
          (u.RECENT_AVATARS_ROADBLOCK_UPSELL =
            "recent_avatars_roadblock_upsell"),
          (u.EMOJI_EVERYWHERE_INLINE_UPSELL = "emoji_everywhere_inline_upsell"),
          (u.EMOJI_EVERYWHERE_UPSELL = "emoji_everywhere_upsell"),
          (u.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL =
            "soundboard_everywhere_inline_upsell"),
          (u.SOUNDBOARD_EVERYWHERE_UPSELL = "soundboard_everywhere_upsell"),
          (u.LARGER_FILE_UPLOAD_INLINE_UPSELL =
            "larger_file_upload_inline_upsell"),
          (u.LARGER_FILE_UPLOAD_UPSELL = "larger_file_upload_upsell"),
          (u.ANIMATED_EMOJI_UPSELL = "animated_emoji_upsell"),
          (u.CLIENT_THEMES_UPSELL = "client_themes_upsell"),
          (u.CUSTOM_THEMES_UPSELL = "custom_themes_upsell"),
          (u.APP_ICON_INLINE_UPSELL = "app_icons_inline_upsell"),
          (u.STREAM_QUALITY_UPSELL = "stream_quality_upsell"),
          u),
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
        eQ = {
          [N.TVA.NONE]: eX,
          [N.TVA.TIER_1]: 10,
          [N.TVA.TIER_2]: 15,
          [N.TVA.TIER_3]: 30,
        },
        eZ = {
          [N.TVA.NONE]: eQ[N.TVA.NONE],
          [N.TVA.TIER_1]: eQ[N.TVA.NONE] + eQ[N.TVA.TIER_1],
          [N.TVA.TIER_2]: eQ[N.TVA.NONE] + eQ[N.TVA.TIER_1] + eQ[N.TVA.TIER_2],
          [N.TVA.TIER_3]:
            eQ[N.TVA.NONE] +
            eQ[N.TVA.TIER_1] +
            eQ[N.TVA.TIER_2] +
            eQ[N.TVA.TIER_3],
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
              emoji: O.DEFAULT_EMOJI_SLOTS,
              bitrate: N.DqD,
              fileSize: N.TbF,
              screenShareQualityFramerate: 30,
              screenShareQualityResolution: "720p",
              soundboardSounds: eq[N.TVA.NONE],
              stickers: eZ[N.TVA.NONE],
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
              stickers: eZ[N.TVA.TIER_1],
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
              stickers: eZ[N.TVA.TIER_2],
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
              stickers: eZ[N.TVA.TIER_3],
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
      var ti =
          (((A = {})[(A.FRIEND_ANNIVERSARY = 0)] = "FRIEND_ANNIVERSARY"), A),
        ta =
          (((I = {}).VIEW_ALL = "view_all"),
          (I.SEND_MESSAGE = "send_message"),
          I),
        tl =
          (((y = {})[(y.DM_CHANNEL = 0)] = "DM_CHANNEL"),
          (y[(y.SHOP_PAGE = 1)] = "SHOP_PAGE"),
          (y[(y.USER_PROFILE_WISHLIST = 2)] = "USER_PROFILE_WISHLIST"),
          (y[(y.DM_CHANNEL_WISHLIST = 3)] = "DM_CHANNEL_WISHLIST"),
          (y[(y.GUILD_CHANNEL = 4)] = "GUILD_CHANNEL"),
          y);
      let ts = 1,
        tu = 30,
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
            nameUnformatted: g.t.LR1C0a,
            nameUnformattedNitro: g.t.tx9Fvw,
            tenureReqNumMonths: 1,
            hasWideArt: !1,
            glowColor: "#b54913",
          },
          premium_tenure_3_month_v2: {
            id: "premium_tenure_3_month_v2",
            nameUnformatted: g.t["rI1/3H"],
            nameUnformattedNitro: g.t.xJNb5C,
            tenureReqNumMonths: 3,
            hasWideArt: !1,
            glowColor: "#9e9e9e",
          },
          premium_tenure_6_month_v2: {
            id: "premium_tenure_6_month_v2",
            nameUnformatted: g.t.VkhVKS,
            nameUnformattedNitro: g.t["4scBFY"],
            tenureReqNumMonths: 6,
            hasWideArt: !1,
            glowColor: "#ffa813",
          },
          premium_tenure_12_month_v2: {
            id: "premium_tenure_12_month_v2",
            nameUnformatted: g.t.gzUfNS,
            nameUnformattedNitro: g.t["83Jw2B"],
            tenureReqNumMonths: 12,
            hasWideArt: !1,
            glowColor: "#5eacc2",
          },
          premium_tenure_24_month_v2: {
            id: "premium_tenure_24_month_v2",
            nameUnformatted: g.t.fuwTPm,
            nameUnformattedNitro: g.t.vRSCKv,
            tenureReqNumMonths: 24,
            hasWideArt: !1,
            glowColor: "#6d5cf2",
          },
          premium_tenure_36_month_v2: {
            id: "premium_tenure_36_month_v2",
            nameUnformatted: g.t.qNhNk4,
            nameUnformattedNitro: g.t.mV86tk,
            tenureReqNumMonths: 36,
            hasWideArt: !1,
            glowColor: "#32c102",
          },
          premium_tenure_60_month_v2: {
            id: "premium_tenure_60_month_v2",
            nameUnformatted: g.t["wvX+eD"],
            nameUnformattedNitro: g.t.WcsLxW,
            tenureReqNumMonths: 60,
            hasWideArt: !0,
            glowColor: "#f29cc3",
          },
          premium_tenure_72_month_v2: {
            id: "premium_tenure_72_month_v2",
            nameUnformatted: g.t["/menIw"],
            nameUnformattedNitro: g.t["Z/qgMK"],
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
        FP: () => I,
        Kq: () => y,
        OQ: () => p,
        sL: () => T,
      });
      var o = n(64700),
        r = n(284009),
        i = n.n(r),
        a = n(636537),
        l = n(228366),
        s = n(845584),
        u = n(570221),
        _ = n(927578),
        d = n(371794),
        C = n(652215);
      async function E(e) {
        let {
            items: t,
            paymentSourceId: n,
            trialId: o,
            code: r,
            applyEntitlements: i = !1,
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
            apply_entitlements: i,
            currency: d,
            renewal: E,
            metadata: p,
          };
        try {
          let e = await a.Bo.post({
              url: C.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
              body: h,
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
            t = u.A.createInvoiceFromServer(e.body);
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
          throw new s.Ey(e);
        }
      }
      async function p(e) {
        let {
          subscriptionId: t,
          items: n,
          paymentSourceId: o,
          renewal: r,
          currency: i,
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
          currency: i,
          user_discount_offer_id: h,
        };
        try {
          let e = await a.Bo.patch({
              url: C.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
              query: { location: p, location_stack: E },
              body: c,
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
            n = u.A.createInvoiceFromServer(e.body);
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
          throw new s.Ey(e);
        }
      }
      async function h(e) {
        let {
          paymentSourceId: t,
          skuId: n,
          subscriptionPlanId: o,
          currency: r,
          loadId: a,
        } = e;
        i()(n, "SKU ID is missing for one time purchase gift invoice preview");
        try {
          let e = await (0, d.aP)({
            url: C.Rsh.STORE_SKU_PURCHASE(n),
            query: {
              gift: !0,
              payment_source_id: t,
              sku_subscription_plan_id: o,
              currency: r,
              load_id: a,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
          return u.A.createInvoiceFromServer(e.body);
        } catch (e) {
          throw new s.Ey(e);
        }
      }
      async function c(e) {
        let { subscriptionId: t, preventFetch: n } = e;
        if (n) return null;
        let o = await a.Bo.get({
          url: C.Rsh.BILLING_SUBSCRIPTION_INVOICE(t),
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        return u.A.createInvoiceFromServer(o.body);
      }
      function A(e, t) {
        let { preventFetch: n = !1 } = e,
          [r, i] = (0, o.useState)(null),
          [a, l] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            let e = !1;
            async function o() {
              try {
                l(null);
                let n = await t();
                e || i(n);
              } catch (t) {
                e || (l(t), i(null));
              }
            }
            return (
              n || o(),
              () => {
                e = !0;
              }
            );
          }, [n, t]),
          [r, a]
        );
      }
      function I(e) {
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
      function y(e) {
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
      let i = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
      class a extends o.Ay.Store {
        static displayName = "WowMomentConfirmationStore";
        getState() {
          return i;
        }
        get isDisplayingWowMomentConfirmation() {
          return i.isDisplayingWowMomentConfirmation;
        }
        get isAnimated() {
          return i.isAnimated;
        }
      }
      let l = new a(r.h, {
        LOGOUT: function () {
          i = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1 };
        },
        WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION:
          function (e) {
            let { value: t, isAnimated: n } = e;
            (i.isDisplayingWowMomentConfirmation = t), (i.isAnimated = n);
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
        i = n(451988);
      function a(e) {
        return (
          null != e &&
          null != e.expires_at &&
          Date.now() > Date.parse(e.expires_at)
        );
      }
      var l = n(287809),
        s = n(354670),
        u = n(927578),
        _ = n(788868);
      function d(e, t) {
        let n = (0, r.bG)([s.A], () => s.A.getUserDiscountOffer(e)),
          [d, C] = o.useState(a(n)),
          E = (0, r.bG)([l.default], () =>
            (0, u.TW)(l.default.getCurrentUser()),
          ),
          p = e === _.q || e === _.EG;
        return (
          o.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new i.Ep(),
              t = () => {
                let o =
                  null != n.expires_at
                    ? Date.parse(n.expires_at) - Date.now()
                    : 0;
                e?.start(o, () => {
                  !d && a(n) ? C(!0) : t();
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
        i = n(228366),
        a = n(323082),
        l = n(495544),
        s = n(615405),
        u = n(295405);
      function _() {
        let e = (0, r.bG)([u.A], () => u.A.getDefaultBillingCountryCode()),
          t = (0, r.bG)([s.A], () => s.A.ipLocation),
          n = (0, r.bG)([l.default], () => l.default.isAuthenticated());
        return (
          o.useEffect(() => {
            i.h.wait(() => {
              !n ||
                s.A.isPaymentSourceFetching ||
                u.A.hasFetchedPaymentSources ||
                a.$o();
            });
          }, [n]),
          o.useEffect(() => {
            n && !s.A.ipLocationLoaded && a.jZ();
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
      n.d(t, { A: () => i });
      var o = n(64700),
        r = n(27867);
      function i(e) {
        let { delay: t, disable: n = !1 } = e,
          i = (0, r.A)();
        o.useEffect(() => {
          if (t <= 0 || n) return;
          let e = setTimeout(() => {
            i();
          }, t);
          return () => clearTimeout(e);
        }, [t, n, i]);
      }
    },
    349871(e, t, n) {
      n.d(t, { c$: () => l, Nh: () => s, kQ: () => u });
      var o,
        r = n(136722),
        i = n(441574),
        a =
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
                  case a.INCREASED_FILE_UPLOAD_SIZE:
                    return {
                      type: a.INCREASED_FILE_UPLOAD_SIZE,
                      maxSize: e.kind.max_size,
                    };
                  case a.INCREASED_GUILD_LIMIT:
                    return {
                      type: a.INCREASED_GUILD_LIMIT,
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
      function s(e, t) {
        if (null == e) return !1;
        let n = e.activePerksBitmask,
          o = Math.floor(t / 64);
        return !(o >= n.length) && r.zy(r.iu(n[o]), r.jB(t % 64));
      }
      function u(e, t) {
        if (null == e) return;
        let n = e.configByPerk[String(t)];
        return n?.source != null
          ? n.source
          : s(e, t)
            ? [i.g$.SOURCE_NITRO]
            : void 0;
      }
    },
    251913(e, t, n) {
      n.d(t, { QR: () => p, b: () => E, oc: () => C });
      var o,
        r = n(64700),
        i = n(17928),
        a = n(451988),
        l = n(323082),
        s = n(446458),
        u = n(166532),
        _ = n(566980),
        d = n(153084),
        C =
          (((o = {})[(o.PENDING = 1)] = "PENDING"),
          (o[(o.ERROR = 2)] = "ERROR"),
          (o[(o.NONE = 3)] = "NONE"),
          o);
      function E(e, t, n, o) {
        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          a = arguments.length > 5 ? arguments[5] : void 0;
        r.useEffect(() => {
          null != e &&
            (1 === t && e !== u.pn.AWAITING_AUTHENTICATION
              ? n(u.pn.AWAITING_AUTHENTICATION)
              : e === u.pn.AWAITING_AUTHENTICATION &&
                (2 === t
                  ? n(u.pn.REVIEW)
                  : 3 === t &&
                    (i
                      ? null != a
                        ? a()
                        : n(u.pn.REVIEW)
                      : (o(_.h.COMPLETED), n(u.pn.CONFIRM)))));
        }, [e, t, n, o, i, a]);
      }
      function p(e) {
        let t = (0, i.bG)([d.A], () => d.A.awaitingPaymentId),
          n = (0, i.bG)([s.A], () => s.A.isConnected()),
          o = r.useRef(new a.IX());
        r.useEffect(() => {
          n || null == t || 1 !== e
            ? o.current.stop()
            : o.current.start(5e3, () => (0, l.TK)(t));
        }, [t, e, n]);
      }
    },
    501957(e, t, n) {
      n.d(t, { U: () => s, j: () => l });
      var o = n(925847),
        r = n(954571),
        i = n(927578),
        a = n(652215);
      function l(e) {
        return {
          subscription_id: e.id,
          subscription_type: e.type,
          subscription_plan_id: (0, i.EL)(e)?.id,
          subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
          subscription_status: e.status,
        };
      }
      function s(e, t, n) {
        let i = n ?? (0, o.A)();
        r.default.track(a.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, {
          location_stack: t,
          load_id: i,
          ...l(e),
        });
      }
    },
    516780(e, t, n) {
      n.d(t, { oH: () => i, vz: () => r });
      var o = n(723702);
      let r = null;
      function i() {
        return (0, o.isAndroid)(), null;
      }
    },
    700241(e, t, n) {
      n.d(t, { default: () => i });
      var o = n(627968);
      n(64700);
      var r = n(192308);
      function i() {
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.e("74575").then(n.bind(n, 218642));
          return (t) => (0, o.jsx)(e, { ...t });
        });
      }
    },
    663311(e, t, n) {
      n.d(t, { A: () => i });
      var o = n(253932),
        r = n(486020);
      function i(e, t) {
        let n;
        if ("u" < typeof Image) return;
        let i = e.user?.id;
        null == i ||
          "" === i ||
          (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, r.ns)({
              id: i,
              guildId: t,
              banner: e.guild_member_profile.banner,
              canAnimate: o.kt.getSetting(),
              size: 600,
            })),
          e?.user_profile?.banner != null &&
            (n = (0, r.z)({
              id: i,
              banner: e.user_profile.banner,
              canAnimate: o.kt.getSetting(),
              size: 600,
            })),
          null == n || (new Image().src = n));
      }
    },
    545934(e, t, n) {
      n.d(t, { A: () => i });
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
      let i = r;
    },
    419212(e, t, n) {
      n.d(t, { A: () => C });
      var o = n(17928),
        r = n(228366),
        i = n(845584);
      let a = null,
        l = null,
        s = null;
      function u(e) {
        let { error: t } = e;
        a = t;
      }
      function _() {
        a = null;
      }
      class d extends o.Ay.Store {
        static displayName = "PremiumPaymentModalStore";
        get paymentError() {
          return a;
        }
        getGiftCode(e) {
          return e === s ? l : null;
        }
      }
      let C = new d(r.h, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
        PREMIUM_PAYMENT_UPDATE_FAIL: u,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
          _();
        },
        PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
        PREMIUM_PAYMENT_ERROR_CLEAR: _,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
          let { message: t } = e;
          a = new i.Ey(t);
        },
        BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
          let { message: t } = e;
          a = new i.Ey(t);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
          (l = e.giftCode), (s = e.skuId);
        },
        SKU_PURCHASE_FAIL: function (e) {
          a = e.error;
        },
        SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
          e.isGift && (s = e.skuId);
        },
        GIFT_CODE_CREATE: function (e) {
          let { giftCode: t } = e;
          if (0 !== t.uses || t.sku_id !== s) return !1;
          l = t.code;
        },
      });
    },
    825755(e, t, n) {
      n.d(t, { A: () => D });
      var o = n(17928),
        r = n(228366),
        i = n(845584),
        a = n(71532);
      let l = "",
        s = null,
        u = "",
        _ = null,
        d = !1,
        C = null,
        E = "",
        p = "",
        h = "",
        c = "",
        A = "",
        I = "",
        y = "",
        m = "",
        T = !1,
        S = null,
        R = null,
        N = null,
        O = null;
      function g() {
        (_ = null),
          (l = ""),
          (s = null),
          (u = ""),
          (d = !1),
          (C = null),
          (E = "US"),
          (p = ""),
          (h = ""),
          (c = ""),
          (A = ""),
          (I = ""),
          (y = ""),
          (m = ""),
          (T = !1),
          (S = null),
          (R = null),
          (N = null),
          (O = null);
      }
      function P(e) {
        (p = e.name),
          (E = e.country),
          (c = e.line1),
          (A = e.line2),
          (I = e.city),
          (y = e.postalCode),
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
        S = new i.Ey(t);
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
          return s;
        }
        get venmoUsername() {
          return u;
        }
        get redirectedPaymentId() {
          return R;
        }
        get adyenPaymentData() {
          return C;
        }
        get redirectedPaymentSourceId() {
          return O;
        }
        clearRedirectedPaymentSourceId() {
          O = null;
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
            city: I,
            postalCode: y,
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
          if (null == t) return void g();
          _ = t;
          let { billingAddressInfo: n } = a.uK(_);
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
            (I = t.city),
            (y = t.postalCode),
            (m = t.state),
            (h = t.email),
            (T = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function () {
          (l = ""), (s = null);
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
          let { email: t, nonce: n, billingAddress: o } = e;
          (l = t), (s = n), P(o), (T = E.length > 0);
        },
        BRAINTREE_TOKENIZE_VENMO_START: function () {
          (u = ""), (s = null);
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
          let { username: t, nonce: n } = e;
          (u = t), (s = n);
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
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: g,
        LOGOUT: g,
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
          let { query: t } = e;
          t?.payment_id != null
            ? ((N = !0), (R = t.payment_id))
            : t?.payment_source_id != null &&
              ((N = !0), (O = t.payment_source_id));
        },
        RESET_PAYMENT_ID: function () {
          (N = !1), (R = null);
        },
      });
    },
    293700(e, t, n) {
      n.d(t, { A: () => h, C: () => s });
      var o,
        r = n(17928),
        i = n(228366),
        a = n(136857),
        l = n(446458),
        s =
          (((o = {})[(o.UNKNOWN = 0)] = "UNKNOWN"),
          (o[(o.PENDING = 1)] = "PENDING"),
          (o[(o.SUCCESS = 2)] = "SUCCESS"),
          (o[(o.ERROR = 3)] = "ERROR"),
          o);
      let u = 0,
        _ = null,
        d = null;
      function C(e) {
        let { error: t } = e,
          n = t instanceof a.Ay ? t : new a.Ay(t);
        l.A.isConnected() &&
          n.code === a.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED &&
          (u = 1);
      }
      function E() {
        (u = 0), (_ = null), (d = null);
      }
      class p extends r.Ay.Store {
        initialize() {
          this.waitFor(l.A);
        }
        static displayName = "PurchaseTokenAuthStore";
        get purchaseTokenAuthState() {
          return u;
        }
        get purchaseTokenHash() {
          return _;
        }
        get expiresAt() {
          return d;
        }
      }
      let h = new p(i.h, {
        SKU_PURCHASE_FAIL: C,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: C,
        USER_PAYMENT_CLIENT_ADD: function (e) {
          (u = 2), (_ = e.purchaseTokenHash), (d = e.expiresAt);
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
          AnalyticEventConfigs: () => g,
          AnalyticsContext: () => m,
          AnalyticsSchema: () => E,
          addExtraAnalyticsDecorator: () => O,
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
        i = n(110259),
        a = n(613345),
        l = n(306173),
        s = n(228366),
        u = n(686757),
        _ = n(53943),
        d = n(790171),
        C = n(111162),
        E = n(757811),
        p = n(321034),
        h = n(38405),
        c = n(652215),
        A = n(53298),
        I = n(705751),
        y = n(985018);
      let m = o.createContext({ location: {} }),
        T = {},
        S = performance.now(),
        R = (0, l.xd)() ? (0, l.xy)((0, a.V)()) : null;
      i.extendSuperProperties({ launch_signature: R });
      let N = [];
      function O(e) {
        N.push(e);
      }
      let g = {
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
      let L = (0, i.trackMaker)({
        addBreadcrumb: f,
        analyticEventConfigs: g,
        dispatcher: s.h,
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
          (t.rendered_locale = y.intl.currentLocale),
          (t.uptime_app = Math.floor((performance.now() - S) / 1e3));
        let n = p.A.getProcessUptime();
        null != n && (t.uptime_process_renderer = Math.floor(n));
        let { utmSource: o, utmMedium: r, utmCampaign: i, utmContent: a } = T;
        return (
          (t.utm_source = t.utm_source ?? o),
          (t.utm_medium = t.utm_medium ?? r),
          (t.utm_campaign = t.utm_campaign ?? i),
          (t.utm_content = t.utm_content ?? a),
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
      let w = !1,
        b = {};
      function v() {
        w = !0;
      }
      function F() {
        w = !1;
      }
      function H() {
        return b;
      }
      function B() {
        Object.keys(b).forEach((e) => {
          delete b[e];
        });
      }
      let K = (0, i.trackMaker)({
        addBreadcrumb: f,
        analyticEventConfigs: g,
        dispatcher: s.h,
        TRACK_ACTION_NAME: "TRACK",
      });
      function k(e) {
        return e === I.S7.GAME || e === I.S7.DEPRECATED_GAME;
      }
      function V(e, t) {
        let n = D({ location: (0, u.g$)(), ...t });
        (0, u.eE)(e, { type: "action", ...t }), G(e, n), K(e, n);
      }
      function W() {
        return (0, r.A)();
      }
      let Y = {
        ...i,
        getCampaignParams: i.getCampaignParams,
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
            (w &&
              null != t &&
              (Array.isArray(b[e]) ? b[e].push(t) : (b[e] = [t])),
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
        GM: () => b,
        Ik: () => M,
        Kx: () => f,
        UJ: () => B,
        Vd: () => W,
        Vt: () => Y,
        X6: () => L,
        YI: () => V,
        Zq: () => w,
        e7: () => G,
        eN: () => j,
        e_: () => K,
        lo: () => P,
        n$: () => H,
        pF: () => D,
        tB: () => g,
        u1: () => k,
        v3: () => F,
      }),
        n(801541);
      var o,
        r = n(889137),
        i = n(607399),
        a = n(17928),
        l = n(178253),
        s = n(491509),
        u = n(419212),
        _ = n(287809),
        d = n(954571),
        C = n(403362),
        E = n(927578),
        p = n(257120),
        h = n(371794),
        c = n(652215),
        A = n(788868),
        I = n(985018);
      let y = [
          p.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
          ...["discordapp.com/gifts", "discord.com/gifts"].map((e) =>
            p.A.escape(e),
          ),
        ].join("|"),
        m = RegExp(`(?: |^|https?://)(?:${y})/([a-z0-9-]+)`, "gi"),
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
        O = RegExp(`^(WUMP-?)?(${N})$`);
      var g =
        (((o = {})[(o.DEFAULT = 0)] = "DEFAULT"),
        (o[(o.CUSTOM_STYLE = 1)] = "CUSTOM_STYLE"),
        (o[(o.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2)] =
          "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD"),
        o);
      let P = (e, t) => (i.Fr || i.v1 ? 0 : null != e || t ? 2 : 1),
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
      function w() {
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
      async function b(e) {
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
          ...(0, s.A)(t, !1, !1),
          ...e.analyticsData,
        });
      }
      function F(e, t, n) {
        let {
          error: o,
          accepted: r,
          accepting: i,
          opened: a,
          isCustomGift: l,
        } = n;
        return null == o && (r || i || null == e)
          ? !l || a || r || i
            ? r && (t.isSubscription || null != e)
              ? c.frR.SUCCESS
              : c.frR.CONFIRM
            : c.frR.OPEN
          : c.frR.ERROR;
      }
      function H(e, t, n) {
        switch (e) {
          case c.frR.ERROR:
            return I.intl.formatToMarkdownString(I.t.JUvC0s, {});
          case c.frR.SUCCESS:
            return t.isSubscription
              ? I.intl.formatToPlainString(I.t["1C2BG/"], { skuName: n.name })
              : I.intl.string(I.t["+BNMcF"]);
          case c.frR.CONFIRM:
          default:
            return t.isSubscription
              ? I.intl.formatToPlainString(I.t["2VN4N9"], { skuName: n.name })
              : I.intl.string(I.t.RmamAI);
        }
      }
      function B(e, t, n) {
        let { isCustomGift: o } = n;
        switch (e) {
          case c.frR.ERROR:
            return I.intl.string(I.t.w19zb6);
          case c.frR.SUCCESS:
            if (__OVERLAY__) return I.intl.string(I.t.zW87EM);
            if (t.isSubscription) return I.intl.string(I.t.ex5TKr);
            return I.intl.string(I.t.OOkjql);
          case c.frR.OPEN:
            return I.intl.string(I.t.F8ktci);
          case c.frR.CONFIRM:
          default:
            if (null != o && o) return I.intl.string(I.t.n6I6k4);
            if (null != t.giftStyle)
              return t.isClaimed
                ? I.intl.string(I.t.OgpR0c)
                : I.intl.string(I.t["2BWscv"]);
            return t.isSubscription
              ? I.intl.string(I.t.wQ1FHy)
              : I.intl.string(I.t.OgpR0c);
        }
      }
      function K(e) {
        let {
          step: t,
          sku: n,
          libraryApplication: o,
          error: i,
          accepted: a,
          accepting: l,
          onGoToLibrary: s,
          subscriptionPlan: u = null,
        } = e;
        switch (t) {
          case c.frR.ERROR:
            return k(o, i, a, l, s);
          case c.frR.SUCCESS:
            if (null != u)
              return (0, r.YW)(u)
                .with(
                  {
                    interval: A.WT.MONTH,
                    premiumSubscriptionType: A.PremiumTypes.TIER_2,
                  },
                  () =>
                    I.intl.formatToPlainString(I.t["vFfV+J"], {
                      timeInterval: I.intl.string(I.t.FPybU7),
                    }),
                )
                .with(
                  {
                    interval: A.WT.YEAR,
                    premiumSubscriptionType: A.PremiumTypes.TIER_2,
                  },
                  () =>
                    I.intl.formatToPlainString(I.t["vFfV+J"], {
                      timeInterval: I.intl.string(I.t.tfqrhj),
                    }),
                )
                .with(
                  {
                    interval: A.WT.MONTH,
                    premiumSubscriptionType: A.PremiumTypes.TIER_1,
                  },
                  () =>
                    I.intl.formatToPlainString(I.t.gjKbF4, {
                      intervalCount: u.intervalCount,
                    }),
                )
                .with(
                  {
                    interval: A.WT.YEAR,
                    premiumSubscriptionType: A.PremiumTypes.TIER_1,
                  },
                  () =>
                    I.intl.formatToPlainString(I.t.GIe7Bw, {
                      intervalCount: u.intervalCount,
                    }),
                )
                .otherwise(() => I.intl.string(I.t["5ayf7w"]));
            return I.intl.formatToPlainString(I.t["3CPsbo"], {
              skuName: n.name,
            });
          case c.frR.CONFIRM:
          default:
            if (null != u) {
              let e = u.interval === A.WT.MONTH ? I.t.P9eTKt : I.t.d8rUdy;
              return I.intl.format(e, {
                skuName: n.name,
                intervalCount: u.intervalCount,
              });
            }
            return I.intl.formatToPlainString(I.t.l6Ea4Z, { skuName: n.name });
        }
      }
      function k(e, t, n, o, r) {
        let i = I.intl.format(I.t["5zyz9y"], { onGoToLibrary: r });
        return null != (n || o ? void 0 : e)
          ? i
          : null == t
            ? null
            : j(t, _.default.getCurrentUser());
      }
      function V(e, t, n) {
        let o = t.applicationId,
          r = e.length > 0 ? e : [o],
          i = r.map((e) => n.getLibraryApplication(o, e, !0)).filter(C.Vq);
        return i.length === r.length ? i[0] : null;
      }
      function W(e) {
        let t = e.trim().split("/").pop().match(O);
        if (null == t) return null;
        let [n, o, r] = t;
        return null == r ? null : r.replace(/-/g, "");
      }
      let Y = (e, t) =>
        (0, a.bG)([u.A], () => {
          if (null == e || !t) return null;
          let n = u.A.getGiftCode(e);
          return null == n || "" === n ? null : n;
        });
      function j(e, t) {
        switch (e.code) {
          case c.t02.INVALID_GIFT_SELF_REDEMPTION:
            return I.intl.string(I.t.wa9h7F);
          case c.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return I.intl.string(I.t.Iw2TUW);
          case c.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return I.intl.string(I.t.mdLtb5);
          case c.t02.UNKNOWN_GIFT_CODE:
            return I.intl.string(I.t.roztIr);
          case c.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return I.intl.formatToPlainString(I.t["4YTHKw"], {
              planName: (0, E.YE)(t, A.PremiumTypes.TIER_2)
                ? I.intl.string(I.t.lG6a5x)
                : I.intl.string(I.t.FSOz78),
            });
          case c.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return I.intl.string(I.t["9i1J30"]);
          case c.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return I.intl.string(I.t["U26WX+"]);
          case c.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return I.intl.string(I.t.ypuSd8);
          case c.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return I.intl.string(I.t.mXMmWE);
          default:
            return I.intl.string(I.t["s9+XlB"]);
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
      function i(e, t) {
        if (o(e, t)) {
          let n = Math.floor(t / 8),
            o = t % 8;
          e[n] &= ~(1 << o);
        }
        return e;
      }
      function a(e) {
        return e instanceof Uint8Array;
      }
      function l(e) {
        return null != e && "object" == typeof e && "uint8array" === e.__tag__;
      }
      n.d(t, {
        I: () => l,
        Vf: () => r,
        We: () => i,
        c0: () => o,
        mg: () => a,
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
//# sourceMappingURL=79209.5d639697d5d7decf.js.map
