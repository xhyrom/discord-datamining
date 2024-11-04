"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26197"],
  {
    192918: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(442837),
        r = n(594174),
        l = n(823379);
      let s = [];
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = (0, o.Wu)(
            [r.default],
            () => {
              let e = t.participants
                  .map((t) => r.default.getUser(t))
                  .filter(l.lm),
                n = e.find((e) => e.id === t.author_id),
                i = e.filter((e) => e.id !== t.author_id);
              return null == n ? s : [...i, n];
            },
            [t],
          ),
          a = i.useMemo(() => n.slice(-e), [e, n]),
          c = a[a.length - 1],
          u = a[a.length - 2],
          d = Math.max(n.length - 1, 0);
        return {
          orderedParticipants: n,
          displayParticipants: a,
          participant1: c,
          participant2: u,
          numOtherParticipants: d,
        };
      }
    },
    14263: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        o = n(442837),
        r = n(480608),
        l = n(243730);
      let s = {};
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, o.e7)([l.Z], () => l.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let n = s[t];
            !(null != n && e > 0 && Date.now() - n < e) &&
              ((s[t] = Date.now()), r.E(t));
          }, [t, e]),
          n
        );
      }
    },
    440934: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
          openInteractionModal: function () {
            return S;
          },
        });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(118012),
        l = n(970184),
        s = n(471073),
        a = n(293979),
        c = n(954654),
        u = n(388032),
        d = n(251686);
      function p(t) {
        let { title: e, onClose: n, transitionState: p } = t,
          {
            components: S,
            applicationIconURL: _,
            applicationName: I,
            submissionState: T,
            error: f,
            validators: C,
            onSubmit: E,
          } = (0, a.X9)(t, n);
        return (0, i.jsx)("form", {
          onSubmit: (t) => {
            t.preventDefault(), E();
          },
          children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(o.Avatar, {
                    src: _,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": I,
                    className: d.applicationIcon,
                  }),
                  (0, i.jsx)(r.Z, {
                    color: r.Z.Colors.HEADER_PRIMARY,
                    size: r.Z.Sizes.SIZE_24,
                    children: e,
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    onClick: n,
                    className: d.closeButton,
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalContent, {
                children: [
                  null != f && "" !== f
                    ? (0, i.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.ERROR,
                        className: d.submissionWarning,
                        children: f,
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
                    children: (0, i.jsx)(l.Il, {
                      modal: t,
                      validators: C,
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
                    submitting: T === s.i.IN_FLIGHT,
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
      function S(t) {
        (0, o.openModal)((e) => (0, i.jsx)(p, { ...e, ...t }));
      }
    },
    254109: function (t, e, n) {
      n.d(e, {
        VO: function () {
          return u;
        },
        f0: function () {
          return d;
        },
        fS: function () {
          return c;
        },
      });
      var i = n(903797),
        o = n(731965),
        r = n(626135),
        l = n(981631);
      let s = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        a = (0, i.Z)(() => s);
      function c(t, e, n, i) {
        (0, o.j)(() =>
          a.setState({
            ...s,
            guildId: t,
            channelId: e,
            channelType: n,
            numMediaItems: i,
          }),
        );
      }
      function u() {
        let t = a.getState();
        r.default.track(l.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: t.guildId,
          channel_id: t.channelId,
          channel_type: t.channelType,
          number_viewer_swipes: t.viewerSwipes,
          number_thumbnail_swipes: t.thumbnailSwipes,
          number_selected_item_changes: t.selectedItemChanges,
          number_media_items: t.numMediaItems,
        }),
          (0, o.j)(() => a.setState({ ...s }));
      }
      function d() {
        (0, o.j)(() =>
          a.setState((t) => ({
            selectedItemChanges: t.selectedItemChanges + 1,
          })),
        );
      }
    },
    94396: function (t, e, n) {
      n.d(e, {
        _: function () {
          return u;
        },
      }),
        n(47120),
        n(192379);
      var i = n(374470),
        o = n(254109),
        r = n(312097),
        l = n(52824),
        s = n(626135),
        a = n(981631),
        c = n(268108);
      function u(t, e, n) {
        let u = {};
        for (let [d, p] of t.entries())
          u[(0, l.q)({ proxyURL: p.proxyUrl, url: p.url })] = (l) =>
            (function (t, e, n) {
              let l =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                u = arguments.length > 4 ? arguments[4] : void 0;
              t.preventDefault(),
                (0, i.k)(t.currentTarget) && t.currentTarget.blur(),
                null != u &&
                  (s.default.track(
                    a.rMx.OPEN_MODAL,
                    { type: a.jXE.MEDIA_VIEWER, ...u },
                    { throttlePercent: 0.01 },
                  ),
                  (0, o.fS)(
                    u.guild_id,
                    u.channel_id,
                    u.channel_type,
                    e.length,
                  )),
                (0, r.K)({
                  ...l,
                  className: c.forcedTransparency,
                  onIndexChange: null != u ? o.f0 : void 0,
                  items: e,
                  startingIndex: n,
                  location: "zoomedMediaModalHelper",
                  onCloseCallback: null != u ? o.VO : void 0,
                });
            })(l, t, d, e, n);
        return u;
      }
    },
    106976: function (t, e, n) {
      n.d(e, {
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
        n(47120);
      var i = n(570140),
        o = n(821849),
        r = n(307643),
        l = n(981631);
      function s(t) {
        return {
          id: t.id,
          type: l.epS.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: l.POd.APPLICATION,
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
        var e;
        return {
          id: t.id,
          sku: s(t),
          summary: t.description,
          description: t.description,
          benefits:
            null !== (e = t.store_listing_benefits) && void 0 !== e ? e : [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function c(t) {
        for (let e of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: t.map(s),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: t.map(a),
        }),
        t))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: e.id,
            subscriptionPlans: e.subscription_plans,
          });
      }
      async function u(t, e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: e,
        });
        try {
          var n;
          let o = await r.jz(t, e);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: o,
            }),
            c(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
            o
          );
        } catch (e) {
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
          let e = await r.GF(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: t,
            entitlements: e,
          });
        } catch (e) {
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
          var e;
          let n = await r.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let l =
            null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
          for (let e of l)
            e.subscription_plans[0].id === t &&
              (await o.GZ(e.id, void 0, void 0, !0));
          c(l);
        } catch (t) {}
      }
    },
    488915: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        o,
        r,
        l,
        s,
        a,
        c = n(512722),
        u = n.n(c),
        d = n(442837),
        p = n(759174),
        S = n(570140),
        _ = n(959546),
        I = n(55563);
      function T(t) {
        return "subscription_listing:".concat(t);
      }
      function f(t) {
        return "application:".concat(t);
      }
      function C(t) {
        return "plan:".concat(t);
      }
      function E(t, e, n) {
        return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
      }
      function g(t, e) {
        return "entitlement:".concat(e, ":").concat(t);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let h = new p.h(
          (t) => [f(t.application_id), ...t.subscription_listings_ids.map(T)],
          (t) => t.id,
        ),
        N = new p.h(
          (t) => [f(t.application_id), C(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        m = new p.h(
          (t) => [
            E(t.applicationId, t.isValid(null, I.Z), t.guildId),
            g(t.isValid(null, I.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        P = {},
        A = {};
      function L(t) {
        var e;
        for (let n of (h.set(t.id, t),
        null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
          (function (t) {
            N.set(t.id, t);
          })(n);
      }
      class v extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var e;
          return null !== (e = P[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionGroupListing(t) {
          return h.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let e = h.values(T(t));
          return (
            u()(e.length <= 1, "Found multiple group listings for listing"),
            e[0]
          );
        }
        getSubscriptionListing(t) {
          return N.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return N.values(f(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var e;
          return null !== (e = A[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionListingForPlan(t) {
          let e = N.values(C(t));
          return u()(e.length <= 1, "Found multiple listings for plan"), e[0];
        }
        getApplicationEntitlementsForGuild(t, e) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return m.values(E(t, n, e));
        }
        getEntitlementsForGuild(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return m.values(g(e, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (s = "displayName") in (l = v)
          ? Object.defineProperty(l, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[s] = a),
        (e.Z = new v(S.Z, {
          LOGOUT: function () {
            h.clear(), N.clear(), m.clear(), (P = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: n } = t;
            P[e] = 1;
            let i = h.get(n);
            if (null != i)
              for (let t of i.subscription_listings_ids) N.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: e, groupListing: n } = t;
            (P[e] = 2), L(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: e } = t;
            P[e] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: e } = t;
            A[e] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: e, entitlements: n } = t;
            (A[e] = 2),
              n.forEach((t) => {
                let e = _.Z.createFromServer(t);
                m.set(e.id, e);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: e } = t;
            A[e] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: e } = t;
            L(e);
          },
        }));
    },
    973335: function (t, e, n) {
      t.exports = { title: "title_d9a510" };
    },
    275703: function (t, e, n) {
      t.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    251686: function (t, e, n) {
      t.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    53304: function (t, e, n) {
      t.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    268108: function (t, e, n) {
      t.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
  },
]);
//# sourceMappingURL=b83557237dc60bace8cd.js.map
