"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36695"],
  {
    14263: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(192379),
        o = n(442837),
        r = n(480608),
        a = n(243730);
      let s = {};
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, o.e7)([a.Z], () => a.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let n = s[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((s[e] = Date.now()), r.E(e));
          }, [e, t]),
          n
        );
      }
    },
    440934: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
          openInteractionModal: function () {
            return p;
          },
        });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(118012),
        a = n(970184),
        s = n(471073),
        c = n(293979),
        l = n(954654),
        u = n(388032),
        d = n(817895);
      function _(e) {
        let { title: t, onClose: n, transitionState: _ } = e,
          {
            components: p,
            applicationIconURL: S,
            applicationName: I,
            submissionState: f,
            error: C,
            validators: T,
            onSubmit: m,
          } = (0, c.X9)(e, n);
        return (0, i.jsx)("form", {
          onSubmit: (e) => {
            e.preventDefault(), m();
          },
          children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: _,
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(o.Avatar, {
                    src: S,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": I,
                    className: d.applicationIcon,
                  }),
                  (0, i.jsx)(r.Z, {
                    color: r.Z.Colors.HEADER_PRIMARY,
                    size: r.Z.Sizes.SIZE_24,
                    children: t,
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    onClick: n,
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
                      applicationName: I,
                    }),
                  }),
                  (0, i.jsx)(o.FormSection, {
                    children: (0, i.jsx)(a.Il, {
                      modal: e,
                      validators: T,
                      children: (0, l.xX)(p),
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
                    submitting: f === s.i.IN_FLIGHT,
                    children: u.intl.string(u.t.geKm7u),
                  }),
                  (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: n,
                    children: u.intl.string(u.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p(e) {
        (0, o.openModal)((t) => (0, i.jsx)(_, { ...t, ...e }));
      }
    },
    94396: function (e, t, n) {
      n.d(t, {
        _: function () {
          return s;
        },
      }),
        n(47120),
        n(192379);
      var i = n(513431),
        o = n(312097),
        r = n(52824),
        a = n(453082);
      function s(e, t, n) {
        let s = {};
        for (let [c, l] of e.entries())
          s[(0, r.q)({ proxyURL: l.proxyUrl, url: l.url })] = (r) =>
            (function (e, t, n) {
              let r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                s = arguments.length > 4 ? arguments[4] : void 0;
              e.preventDefault(),
                (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                (0, o.K)({
                  ...r,
                  className: a.forcedTransparency,
                  items: t,
                  startingIndex: n,
                  location: null != s ? s : "zoomedMediaModalHelper",
                });
            })(r, e, c, t, n);
        return s;
      }
    },
    106976: function (e, t, n) {
      n.d(t, {
        i1: function () {
          return d;
        },
        rx: function () {
          return u;
        },
        sB: function () {
          return _;
        },
        vY: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(570140),
        o = n(821849),
        r = n(307643),
        a = n(981631);
      function s(e) {
        return {
          id: e.id,
          type: a.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: a.POd.APPLICATION,
          name: e.name,
          summary: "",
          description: e.description,
          flags: e.sku_flags,
          manifests: [],
          available_regions: [],
          legal_notice: "",
          deleted: e.soft_deleted,
          price_tier: 0,
          show_age_gate: !1,
          restricted: !1,
        };
      }
      function c(e) {
        var t;
        return {
          id: e.id,
          sku: s(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function l(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(s),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(c),
        }),
        e))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
          });
      }
      async function u(e, t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let o = await r.jz(e, t);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: o,
            }),
            l(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
            o
          );
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function d(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let t = await r.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
          });
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
          });
        }
      }
      function _(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function p(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var t;
          let n = await r.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let a =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          await Promise.all(
            a.map((t) => {
              if (t.subscription_plans[0].id === e)
                return o.GZ(t.id, void 0, void 0, !0);
            }),
          ),
            l(a);
        } catch (e) {}
      }
    },
    488915: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        o,
        r,
        a,
        s,
        c,
        l = n(512722),
        u = n.n(l),
        d = n(442837),
        _ = n(759174),
        p = n(570140),
        S = n(959546),
        I = n(55563);
      function f(e) {
        return "subscription_listing:".concat(e);
      }
      function C(e) {
        return "application:".concat(e);
      }
      function T(e) {
        return "plan:".concat(e);
      }
      function m(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function N(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let E = new _.h(
          (e) => [C(e.application_id), ...e.subscription_listings_ids.map(f)],
          (e) => e.id,
        ),
        b = new _.h(
          (e) => [C(e.application_id), T(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        g = new _.h(
          (e) => [
            m(e.applicationId, e.isValid(null, I.Z), e.guildId),
            N(e.isValid(null, I.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        h = {},
        P = {};
      function L(e) {
        var t;
        for (let n of (E.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            b.set(e.id, e);
          })(n);
      }
      class A extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = h[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return E.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = E.values(f(e));
          return (
            u()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return b.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return b.values(C(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = P[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = b.values(T(e));
          return u()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return g.values(m(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return g.values(N(t, e));
        }
      }
      (c = "ApplicationSubscriptionStore"),
        (s = "displayName") in (a = A)
          ? Object.defineProperty(a, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = c),
        (t.Z = new A(p.Z, {
          LOGOUT: function () {
            E.clear(), b.clear(), g.clear(), (h = {}), (P = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            h[t] = 1;
            let i = E.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) b.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (h[t] = 2), L(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            h[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            P[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (P[t] = 2),
              n.forEach((e) => {
                let t = S.Z.createFromServer(e);
                g.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            P[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            L(t);
          },
        }));
    },
    413956: function (e, t, n) {
      e.exports = { title: "title_d9a510" };
    },
    847153: function (e, t, n) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
        sizer: "sizer_d0395d",
      };
    },
    817895: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    666350: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    453082: function (e, t, n) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    404246: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    414033: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    631232: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        reviewStep: "reviewStep_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    715309: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    714317: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    751141: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_fe5d81",
        closeContainer: "closeContainer_fe5d81",
        closeIcon: "closeIcon_fe5d81",
        headerImageContainer: "headerImageContainer_fe5d81",
        headerImage: "headerImage_fe5d81",
        confirmationContainer: "confirmationContainer_fe5d81",
        purchaseConfirmation:
          "purchaseConfirmation_fe5d81 confirmationContainer_fe5d81",
        confirmationTitle: "confirmationTitle_fe5d81",
        confirmationSubtitle: "confirmationSubtitle_fe5d81",
      };
    },
    980970: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
  },
]);
//# sourceMappingURL=c9878014ffb37b4583d6.js.map
