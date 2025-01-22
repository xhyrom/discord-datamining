"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36140"],
  {
    14263: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(192379),
        o = e(442837),
        r = e(480608),
        s = e(243730);
      let l = {};
      function a(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e = (0, o.e7)([s.Z], () => s.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let e = l[t];
            !(null != e && n > 0 && Date.now() - e < n) &&
              ((l[t] = Date.now()), r.E(t));
          }, [t, n]),
          e
        );
      }
    },
    440934: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return p;
          },
          openInteractionModal: function () {
            return S;
          },
        });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        r = e(118012),
        s = e(970184),
        l = e(471073),
        a = e(293979),
        c = e(954654),
        u = e(388032),
        d = e(517753);
      function p(t) {
        let { title: n, onClose: e, transitionState: p } = t,
          {
            components: S,
            applicationIconURL: I,
            applicationName: _,
            submissionState: T,
            error: C,
            validators: f,
            onSubmit: N,
          } = (0, a.X9)(t, e);
        return (0, i.jsx)("form", {
          onSubmit: (t) => {
            t.preventDefault(), N();
          },
          children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(o.Avatar, {
                    src: I,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": _,
                    className: d.applicationIcon,
                  }),
                  (0, i.jsx)(r.Z, {
                    color: r.Z.Colors.HEADER_PRIMARY,
                    size: r.Z.Sizes.SIZE_24,
                    children: n,
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    onClick: e,
                    className: d.closeButton,
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalContent, {
                children: [
                  null != C && "" !== C
                    ? (0, i.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.ERROR,
                        className: d.submissionWarning,
                        children: C,
                      })
                    : null,
                  (0, i.jsx)(o.HelpMessage, {
                    messageType: o.HelpMessageTypes.WARNING,
                    className: d.submissionWarning,
                    children: u.intl.format(u.t["dSTy//"], {
                      applicationName: _,
                    }),
                  }),
                  (0, i.jsx)(o.FormSection, {
                    children: (0, i.jsx)(s.Il, {
                      modal: t,
                      validators: f,
                      children: (0, c.xX)(S),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalFooter, {
                children: [
                  (0, i.jsx)(o.Button, {
                    type: "submit",
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MEDIUM,
                    submitting: T === l.i.IN_FLIGHT,
                    children: u.intl.string(u.t.geKm7u),
                  }),
                  (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: e,
                    children: u.intl.string(u.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function S(t) {
        (0, o.openModal)((n) => (0, i.jsx)(p, { ...n, ...t }));
      }
    },
    94396: function (t, n, e) {
      e.d(n, {
        J: function () {
          return a;
        },
      }),
        e(47120),
        e(192379);
      var i = e(513431),
        o = e(730606),
        r = e(312097),
        s = e(52824),
        l = e(230569);
      function a(t, n, e) {
        let a = {},
          c = {};
        for (let [u, d] of t.entries()) {
          let p = (0, s.q)({ proxyURL: d.proxyUrl, url: d.url });
          (a[p] = (o) =>
            (function (t, n, e) {
              let o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                s = arguments.length > 4 ? arguments[4] : void 0;
              t.preventDefault(),
                (0, i.k)(t.currentTarget) && t.currentTarget.blur(),
                (0, r.K)({
                  ...o,
                  className: l.forcedTransparency,
                  items: n,
                  startingIndex: e,
                  location: null != s ? s : "zoomedMediaModalHelper",
                });
            })(o, t, u, n, e)),
            (c[p] = () => (0, o.WG)(d, t.length > 1));
        }
        return { srcToOnClickOverride: a, srcToHandlePreloadImage: c };
      }
    },
    106976: function (t, n, e) {
      e.d(n, {
        i1: function () {
          return d;
        },
        rx: function () {
          return u;
        },
        sB: function () {
          return p;
        },
        vY: function () {
          return S;
        },
      }),
        e(47120);
      var i = e(570140),
        o = e(821849),
        r = e(307643),
        s = e(981631);
      function l(t) {
        return {
          id: t.id,
          type: s.epS.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: s.POd.APPLICATION,
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
      function a(t) {
        var n;
        return {
          id: t.id,
          sku: l(t),
          summary: t.description,
          description: t.description,
          benefits:
            null !== (n = t.store_listing_benefits) && void 0 !== n ? n : [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function c(t) {
        for (let n of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: t.map(l),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: t.map(a),
        }),
        t))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function u(t, n) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: n,
        });
        try {
          var e;
          let o = await r.jz(t, n);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: o,
            }),
            c(null !== (e = o.subscription_listings) && void 0 !== e ? e : []),
            o
          );
        } catch (n) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: t,
          });
        }
      }
      async function d(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: t,
        });
        try {
          let n = await r.GF(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: t,
            entitlements: n,
          });
        } catch (n) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: t,
          });
        }
      }
      function p(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: t,
        });
      }
      async function S(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: t,
        });
        try {
          var n;
          let e = await r.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: e,
          });
          let s =
            null !== (n = e.subscription_listings) && void 0 !== n ? n : [];
          await Promise.all(
            s.map((n) => {
              if (n.subscription_plans[0].id === t)
                return o.GZ(n.id, void 0, void 0, !0);
            }),
          ),
            c(s);
        } catch (t) {}
      }
    },
    488915: function (t, n, e) {
      e.d(n, {
        M: function () {
          return i;
        },
      }),
        e(47120);
      var i,
        o,
        r,
        s,
        l,
        a,
        c = e(512722),
        u = e.n(c),
        d = e(442837),
        p = e(759174),
        S = e(570140),
        I = e(959546),
        _ = e(55563);
      function T(t) {
        return "subscription_listing:".concat(t);
      }
      function C(t) {
        return "application:".concat(t);
      }
      function f(t) {
        return "plan:".concat(t);
      }
      function N(t, n, e) {
        return "entitlement:".concat(t, ":").concat(e, ":").concat(n);
      }
      function E(t, n) {
        return "entitlement:".concat(n, ":").concat(t);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let g = new p.h(
          (t) => [C(t.application_id), ...t.subscription_listings_ids.map(T)],
          (t) => t.id,
        ),
        P = new p.h(
          (t) => [C(t.application_id), f(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        h = new p.h(
          (t) => [
            N(t.applicationId, t.isValid(null, _.Z), t.guildId),
            E(t.isValid(null, _.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        L = {},
        A = {};
      function m(t) {
        var n;
        for (let e of (g.set(t.id, t),
        null !== (n = t.subscription_listings) && void 0 !== n ? n : []))
          (function (t) {
            P.set(t.id, t);
          })(e);
      }
      class F extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var n;
          return null !== (n = L[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(t) {
          return g.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let n = g.values(T(t));
          return (
            u()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(t) {
          return P.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return P.values(C(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var n;
          return null !== (n = A[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(t) {
          let n = P.values(f(t));
          return u()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(t, n) {
          let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return h.values(N(t, e, n));
        }
        getEntitlementsForGuild(t) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return h.values(E(n, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (l = "displayName") in (s = F)
          ? Object.defineProperty(s, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[l] = a),
        (n.Z = new F(S.Z, {
          LOGOUT: function () {
            g.clear(), P.clear(), h.clear(), (L = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: n, groupListingId: e } = t;
            L[n] = 1;
            let i = g.get(e);
            if (null != i)
              for (let t of i.subscription_listings_ids) P.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: n, groupListing: e } = t;
            (L[n] = 2), m(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: n } = t;
            L[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: n } = t;
            A[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: n, entitlements: e } = t;
            (A[n] = 2),
              e.forEach((t) => {
                let n = I.Z.createFromServer(t);
                h.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: n } = t;
            A[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: n } = t;
            m(n);
          },
        }));
    },
    974378: function (t, n, e) {
      t.exports = { title: "title_d9a510" };
    },
    740909: function (t, n, e) {
      t.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
        sizer: "sizer_d0395d",
      };
    },
    517753: function (t, n, e) {
      t.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    303511: function (t, n, e) {
      t.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    230569: function (t, n, e) {
      t.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
  },
]);
//# sourceMappingURL=d3255653cdc150c8874b.js.map
