"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19475"],
  {
    143582(t, i, s) {
      s.d(i, { Hc: () => C, _R: () => r, f5: () => T, vz: () => c });
      var S = s(228366),
        e = s(73825),
        _ = s(337095),
        I = s(652215);
      function a(t) {
        return {
          id: t.id,
          type: I.Puh.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: I.EZt.APPLICATION,
          name: t.name,
          summary: "",
          description: t.description,
          flags: t.sku_flags,
          manifests: [],
          available_regions: [],
          legal_notice: "",
          deleted: t.soft_deleted,
          price_tier: 0,
          show_age_gate: !1,
          restricted: !1,
        };
      }
      function p(t) {
        return {
          id: t.id,
          sku: a(t),
          summary: t.description,
          description: t.description,
          benefits: t.store_listing_benefits ?? [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function n(t) {
        for (let i of (S.h.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: t.map(a),
        }),
        S.h.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: t.map(p),
        }),
        t))
          S.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: i.id,
            subscriptionPlans: i.subscription_plans,
          });
      }
      async function c(t, i) {
        S.h.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: i,
        });
        try {
          let s = await _.fY(t, i);
          return (
            S.h.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: s,
            }),
            n(s.subscription_listings ?? []),
            s
          );
        } catch (i) {
          S.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: t,
          });
        }
      }
      async function T(t) {
        S.h.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: t,
        });
        try {
          let i = await _.dU(t);
          S.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: t,
            entitlements: i,
          });
        } catch (i) {
          S.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: t,
          });
        }
      }
      function C(t) {
        S.h.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: t,
        });
      }
      async function r(t) {
        let i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        S.h.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: t,
        });
        try {
          let i = await _.q$(t);
          S.h.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: i,
          });
          let s = i.subscription_listings ?? [];
          await Promise.all(
            s.map((i) => {
              if (i.subscription_plans[0].id === t)
                return e.ur(i.id, void 0, void 0, !0);
            }),
          ),
            n(s);
        } catch (s) {
          if ("status" in s && 429 === s.status && i < 10) await r(t, ++i);
          else throw s;
        }
      }
    },
  },
]);
//# sourceMappingURL=19475.0688fb4ba1779a34.js.map
