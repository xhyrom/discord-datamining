"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8041"],
  {
    14263: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(192379),
        o = t(442837),
        r = t(480608),
        a = t(243730);
      let s = {};
      function l(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (0, o.e7)([a.Z], () => a.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let t = s[e];
            !(null != t && n > 0 && Date.now() - t < n) &&
              ((s[e] = Date.now()), r.E(e));
          }, [e, n]),
          t
        );
      }
    },
    440934: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
          openInteractionModal: function () {
            return p;
          },
        });
      var i = t(200651);
      t(192379);
      var o = t(481060),
        r = t(118012),
        a = t(970184),
        s = t(471073),
        l = t(293979),
        c = t(954654),
        u = t(388032),
        d = t(517753);
      function _(e) {
        let { title: n, onClose: t, transitionState: _ } = e,
          {
            components: p,
            applicationIconURL: I,
            applicationName: S,
            submissionState: f,
            error: C,
            validators: T,
            onSubmit: m,
          } = (0, l.X9)(e, t);
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
                    src: I,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": S,
                    className: d.applicationIcon,
                  }),
                  (0, i.jsx)(r.Z, {
                    color: r.Z.Colors.HEADER_PRIMARY,
                    size: r.Z.Sizes.SIZE_24,
                    children: n,
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    onClick: t,
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
                      applicationName: S,
                    }),
                  }),
                  (0, i.jsx)(o.FormSection, {
                    children: (0, i.jsx)(a.Il, {
                      modal: e,
                      validators: T,
                      children: (0, c.xX)(p),
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
                    onClick: t,
                    children: u.intl.string(u.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p(e) {
        (0, o.openModal)((n) => (0, i.jsx)(_, { ...n, ...e }));
      }
    },
    94396: function (e, n, t) {
      t.d(n, {
        _: function () {
          return s;
        },
      }),
        t(47120),
        t(192379);
      var i = t(513431),
        o = t(312097),
        r = t(52824),
        a = t(230569);
      function s(e, n, t) {
        let s = {};
        for (let [l, c] of e.entries())
          s[(0, r.q)({ proxyURL: c.proxyUrl, url: c.url })] = (r) =>
            (function (e, n, t) {
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
                  items: n,
                  startingIndex: t,
                  location: null != s ? s : "zoomedMediaModalHelper",
                });
            })(r, e, l, n, t);
        return s;
      }
    },
    106976: function (e, n, t) {
      t.d(n, {
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
        t(47120);
      var i = t(570140),
        o = t(821849),
        r = t(307643),
        a = t(981631);
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
      function l(e) {
        var n;
        return {
          id: e.id,
          sku: s(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (n = e.store_listing_benefits) && void 0 !== n ? n : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function c(e) {
        for (let n of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(s),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(l),
        }),
        e))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function u(e, n) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: n,
        });
        try {
          var t;
          let o = await r.jz(e, n);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: o,
            }),
            c(null !== (t = o.subscription_listings) && void 0 !== t ? t : []),
            o
          );
        } catch (n) {
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
          let n = await r.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: n,
          });
        } catch (n) {
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
          var n;
          let t = await r.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
          });
          let a =
            null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
          await Promise.all(
            a.map((n) => {
              if (n.subscription_plans[0].id === e)
                return o.GZ(n.id, void 0, void 0, !0);
            }),
          ),
            c(a);
        } catch (e) {}
      }
    },
    488915: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      }),
        t(47120);
      var i,
        o,
        r,
        a,
        s,
        l,
        c = t(512722),
        u = t.n(c),
        d = t(442837),
        _ = t(759174),
        p = t(570140),
        I = t(959546),
        S = t(55563);
      function f(e) {
        return "subscription_listing:".concat(e);
      }
      function C(e) {
        return "application:".concat(e);
      }
      function T(e) {
        return "plan:".concat(e);
      }
      function m(e, n, t) {
        return "entitlement:".concat(e, ":").concat(t, ":").concat(n);
      }
      function N(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
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
            m(e.applicationId, e.isValid(null, S.Z), e.guildId),
            N(e.isValid(null, S.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        h = {},
        P = {};
      function L(e) {
        var n;
        for (let t of (E.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            b.set(e.id, e);
          })(t);
      }
      class A extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = h[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return E.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = E.values(f(e));
          return (
            u()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return b.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return b.values(C(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = P[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = b.values(T(e));
          return u()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return g.values(m(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return g.values(N(n, e));
        }
      }
      (l = "ApplicationSubscriptionStore"),
        (s = "displayName") in (a = A)
          ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = l),
        (n.Z = new A(p.Z, {
          LOGOUT: function () {
            E.clear(), b.clear(), g.clear(), (h = {}), (P = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            h[n] = 1;
            let i = E.get(t);
            if (null != i)
              for (let e of i.subscription_listings_ids) b.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (h[n] = 2), L(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            h[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            P[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (P[n] = 2),
              t.forEach((e) => {
                let n = I.Z.createFromServer(e);
                g.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            P[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: n } = e;
            L(n);
          },
        }));
    },
    974378: function (e, n, t) {
      e.exports = { title: "title_d9a510" };
    },
    740909: function (e, n, t) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
        sizer: "sizer_d0395d",
      };
    },
    517753: function (e, n, t) {
      e.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    303511: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    230569: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    659915: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    221309: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    135970: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        modalContentOverride: "modalContentOverride_bf926b",
        sliderBody: "sliderBody_bf926b",
        addPaymentSteps: "addPaymentSteps_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
        sliderBodyDynamic: "sliderBodyDynamic_bf926b",
      };
    },
    76962: function (e, n, t) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    134384: function (e, n, t) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    641479: function (e, n, t) {
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
    630480: function (e, n, t) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
  },
]);
//# sourceMappingURL=fa6b46839c714f5ca598.js.map
