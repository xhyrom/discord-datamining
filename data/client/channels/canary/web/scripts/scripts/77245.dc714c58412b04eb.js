"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77245"],
  {
    665171(e, r, t) {
      t.d(r, {
        BX: () => T,
        Jr: () => P,
        K: () => S,
        KH: () => G,
        QK: () => I,
        Wp: () => C,
        as: () => O,
        cq: () => h,
        e_: () => y,
        jL: () => f,
        pj: () => m,
        tT: () => A,
        z9: () => R,
      });
      var u = t(636537),
        o = t(228366),
        l = t(773669),
        E = t(287809),
        n = t(954571),
        i = t(371794),
        _ = t(79133),
        d = t(532555),
        s = t(627072),
        c = t(760321),
        p = t(800007),
        a = t(652215);
      function R(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (r)
          return void setTimeout(() => {
            o.h.dispatch({
              type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
              guildId: e,
              catalog: _.q.reduce((e, r) => ((e[r.id] = r), e), {}),
            });
          }, 5e3);
        let t = E.default.getCurrentUser()?.isStaff() ?? !1;
        return (0, i.aP)({
          url: a.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(p.q4),
          query: {
            locale: l.default.locale,
            guild_id: e,
            include_unpublished_products: t,
            include_unpublished_collection: t,
          },
          oldFormErrors: !0,
          rejectWithError: !1,
          retries: 2,
        }).then((r) => {
          let t = r.body.products.reduce((e, r) => {
            let t = (0, s.o)(r);
            return (e[t.id] = t), e;
          }, {});
          o.h.dispatch({
            type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: t,
          });
        });
      }
      function S() {
        let e = E.default.getCurrentUser()?.isStaff() ?? !1;
        return (0, i.aP)({
          url: a.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(p.q4),
          query: {
            locale: l.default.locale,
            include_unpublished_products: e,
            include_unpublished_collection: e,
          },
          oldFormErrors: !0,
          rejectWithError: !1,
          retries: 2,
        }).then((e) => {
          let r = e.body.products.reduce((e, r) => {
            let t = (0, s.o)(r);
            return (e[t.id] = t), e;
          }, {});
          o.h.dispatch({
            type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS",
            catalog: r,
          });
        });
      }
      function h(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0;
        return r
          ? (setTimeout(() => {
              o.h.dispatch({
                type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                guildId: e,
                instances: _.L.reduce((e, r) => ((e[r.id] = r), e), {}),
              });
            }, 5e3),
            Promise.resolve())
          : u.Bo.get({
              url: a.Rsh.GAME_SERVERS(e),
              rejectWithError: !0,
              retries: 2,
              signal: t,
            }).then((r) => {
              if (null != r.body) {
                let t = r.body.reduce(
                  (e, r) => ((e[r.id] = (0, d.A)(r)), e),
                  {},
                );
                o.h.dispatch({
                  type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
                  guildId: e,
                  instances: t,
                });
              }
            });
      }
      function T(e) {
        let r = E.default.getCurrentUser()?.isStaff() ?? !1;
        return (0, i.aP)({
          url: a.Rsh.STOREFRONT_COLLECTIONS_WITH_PRODUCTS,
          query: {
            collection_ids: [p.t0],
            locale: l.default.locale,
            include_unpublished_products: r,
            include_unpublished_collections: r,
          },
          oldFormErrors: !0,
          rejectWithError: !1,
          retries: 2,
        }).then(
          (r) => {
            let t = r.body.collections[0];
            if (null == t)
              return void o.h.dispatch({
                type: "GAME_SERVER_FETCH_NEW_GAMES_FAILURE",
                guildId: e,
              });
            let u = (t.products ?? []).reduce((e, r) => {
                let t = (0, s.o)(r);
                return (e[t.id] = t), e;
              }, {}),
              l = t.product_ids.map((e) => u[e]).filter((e) => null != e);
            o.h.dispatch({
              type: "GAME_SERVER_FETCH_NEW_GAMES_SUCCESS",
              guildId: e,
              products: l,
            });
          },
          () => {
            o.h.dispatch({
              type: "GAME_SERVER_FETCH_NEW_GAMES_FAILURE",
              guildId: e,
            });
          },
        );
      }
      function A(e, r) {
        return (0, i.aP)({
          url: a.Rsh.STOREFRONT_PRODUCT_BY_SKU_ID(r),
          query: { locale: l.default.locale },
          rejectWithError: !0,
          retries: 3,
        }).then((t) => {
          if (null != t.body) {
            let u =
              t.body.tenant_metadata?.guild_monetization?.game_server
                ?.instructions.pc ?? [];
            o.h.dispatch({
              type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
              guildId: e,
              skuId: r,
              instructions: u,
            });
          }
        });
      }
      function C(e, r) {
        e &&
          n.default.track(
            a.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED,
            { user_id: E.default.getCurrentUser()?.id, provider: r },
          );
      }
      function G() {
        o.h.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
      }
      function I(e, r) {
        o.h.dispatch({
          type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
          pingUrl: e,
          state: r,
        });
      }
      function f(e, r, t, o) {
        return u.Bo.post({
          url: a.Rsh.GUILD_POWERUP_TOGGLE(e, r),
          body: { game_server_name: t, game_server_region: o },
          rejectWithError: !0,
          oldFormErrors: !0,
        });
      }
      function m(e, r, t, o) {
        return u.Bo.patch({
          url: a.Rsh.GUILD_POWERUP_UPDATE(e, r),
          body: { game_server_name: o, sku_id: t },
          rejectWithError: !0,
          oldFormErrors: !0,
        });
      }
      function y(e, r, t) {
        return u.Bo.del({
          url: a.Rsh.GUILD_POWERUP_TOGGLE(e, r),
          query: { entitlement_id: t },
          rejectWithError: !0,
          oldFormErrors: !0,
        });
      }
      function P(e) {
        return u.Bo.get({
          url: a.Rsh.GAME_SERVER_REGIONS(e),
          rejectWithError: !0,
          oldFormErrors: !0,
          retries: 3,
        }).then((e) => {
          o.h.dispatch({
            type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
            regions: e.body
              .map(c.A)
              .sort((e, r) => e.name.localeCompare(r.name)),
          });
        });
      }
      function O(e, r) {
        return u.Bo.post({
          url: a.Rsh.GAME_SERVER_WAKE(e, r),
          rejectWithError: !0,
        }).then((r) => {
          o.h.dispatch({
            type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
            guildId: e,
            instance: (0, d.A)(r.body),
          });
        });
      }
    },
    760321(e, r, t) {
      t.d(r, { A: () => u });
      function u(e) {
        return {
          id: e.id,
          name: e.name,
          countryCode: e.country_code,
          pingUrl: e.ping_url,
          enabled: e.enabled,
        };
      }
    },
    998418(e, r, t) {
      t.d(r, { Ay: () => s, dy: () => _, jJ: () => d });
      var u = t(17928),
        o = t(71393),
        l = t(645619),
        E = t(800007),
        n = t(568065),
        i = t(652215);
      function _(e) {
        return e.type !== n.b_.INACTIVE;
      }
      function d(e, r) {
        let t = (0, u.bG)([o.A], () => o.A.getGuild(e)),
          _ = (0, u.bG)([l.A], () => l.A.getStateForGuild(e)),
          d = t?.features?.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
        return r.map((e) =>
          (function (e) {
            var r, u;
            if (e.skuId === E.W5)
              return {
                type: t?.features?.has(i.GuildFeatures.GAME_SERVERS)
                  ? n.b_.POWERUP_ACTIVATED
                  : n.b_.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
              };
            let {
                isActiveFromLevel: o,
                levelEntitlement: l,
                levelPowerup: s,
              } = (function (e) {
                if (null == e || null == t || null == _)
                  return {
                    isActiveFromLevel: !1,
                    levelEntitlement: void 0,
                    levelPowerup: void 0,
                  };
                let r = n.wr[e.skuId];
                if (null == r)
                  return {
                    isActiveFromLevel: !1,
                    levelEntitlement: void 0,
                    levelPowerup: void 0,
                  };
                let u = t.premiumTier >= r,
                  o = n.a8[r];
                return {
                  isActiveFromLevel: u,
                  levelEntitlement:
                    null != o ? _.unlockedPowerups?.[o] : void 0,
                  levelPowerup: null != o ? _.allPowerups?.[o] : void 0,
                };
              })(e),
              c = ((r = e), d && n.o2.has(r.skuId)),
              p = ((u = e), _?.unlockedPowerups?.[u.skuId] ?? null),
              a = {
                type: n.b_.INACTIVE,
                powerup: e,
                sourceEntitlement: void 0,
                sourcePowerup: void 0,
              };
            return (
              o
                ? (a = {
                    type: n.b_.LEVEL_ACTIVATED,
                    powerup: e,
                    sourceEntitlement: l,
                    sourcePowerup: s,
                  })
                : c
                  ? (a = {
                      type: n.b_.TIER_OVERRIDE_ACTIVATED,
                      powerup: e,
                      sourceEntitlement: void 0,
                      sourcePowerup: e,
                    })
                  : null != p &&
                    (a = {
                      type: n.b_.POWERUP_ACTIVATED,
                      powerup: e,
                      sourceEntitlement: p,
                      sourcePowerup: e,
                    }),
              a
            );
          })(e),
        );
      }
      function s(e, r) {
        let t = d(e, null == r ? [] : [r]);
        return t.length <= 0
          ? {
              type: n.b_.INACTIVE,
              sourceEntitlement: void 0,
              sourcePowerup: void 0,
            }
          : t[0];
      }
    },
  },
]);
//# sourceMappingURL=77245.dc714c58412b04eb.js.map
