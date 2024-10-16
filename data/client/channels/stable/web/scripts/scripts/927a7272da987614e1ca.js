"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78079"],
  {
    14263: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(470079),
        s = n(442837),
        o = n(480608),
        r = n(243730);
      let l = {};
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, s.e7)([r.Z], () => r.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let n = l[t];
            !(null != n && e > 0 && Date.now() - n < e) &&
              ((l[t] = Date.now()), o.E(t));
          }, [t, e]),
          n
        );
      }
    },
    440934: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return I;
          },
          openInteractionModal: function () {
            return S;
          },
        });
      var i = n(735250);
      n(470079);
      var s = n(481060),
        o = n(112831),
        r = n(970184),
        l = n(471073),
        a = n(293979),
        c = n(954654),
        u = n(689938),
        d = n(251686);
      function I(t) {
        let { title: e, onClose: n, transitionState: I } = t,
          {
            components: S,
            applicationIconURL: _,
            applicationName: p,
            submissionState: T,
            error: C,
            validators: f,
            onSubmit: E,
          } = (0, a.X9)(t, n);
        return (0, i.jsx)("form", {
          onSubmit: (t) => {
            t.preventDefault(), E();
          },
          children: (0, i.jsxs)(s.ModalRoot, {
            transitionState: I,
            children: [
              (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(s.Avatar, {
                    src: _,
                    size: s.AvatarSizes.SIZE_24,
                    "aria-label": p,
                    className: d.applicationIcon,
                  }),
                  (0, i.jsx)(o.Z, {
                    color: o.Z.Colors.HEADER_PRIMARY,
                    size: o.Z.Sizes.SIZE_24,
                    children: e,
                  }),
                  (0, i.jsx)(s.ModalCloseButton, {
                    onClick: n,
                    className: d.closeButton,
                  }),
                ],
              }),
              (0, i.jsxs)(s.ModalContent, {
                children: [
                  null != C && "" !== C
                    ? (0, i.jsx)(s.HelpMessage, {
                        messageType: s.HelpMessageTypes.ERROR,
                        className: d.submissionWarning,
                        children: C,
                      })
                    : null,
                  (0, i.jsx)(s.HelpMessage, {
                    messageType: s.HelpMessageTypes.WARNING,
                    className: d.submissionWarning,
                    children:
                      u.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format(
                        { applicationName: p },
                      ),
                  }),
                  (0, i.jsx)(s.FormSection, {
                    children: (0, i.jsx)(r.Il, {
                      modal: t,
                      validators: f,
                      children: (0, c.xX)(S),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(s.ModalFooter, {
                children: [
                  (0, i.jsx)(s.Button, {
                    type: "submit",
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.MEDIUM,
                    submitting: T === l.i.IN_FLIGHT,
                    children: u.Z.Messages.SUBMIT,
                  }),
                  (0, i.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.PRIMARY,
                    onClick: n,
                    children: u.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function S(t) {
        (0, s.openModal)((e) => (0, i.jsx)(I, { ...e, ...t }));
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
      var i = n(652874),
        s = n(731965),
        o = n(626135),
        r = n(981631);
      let l = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        a = (0, i.Z)(() => l);
      function c(t, e, n, i) {
        (0, s.j)(() =>
          a.setState({
            ...l,
            guildId: t,
            channelId: e,
            channelType: n,
            numMediaItems: i,
          }),
        );
      }
      function u() {
        let t = a.getState();
        o.default.track(r.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: t.guildId,
          channel_id: t.channelId,
          channel_type: t.channelType,
          number_viewer_swipes: t.viewerSwipes,
          number_thumbnail_swipes: t.thumbnailSwipes,
          number_selected_item_changes: t.selectedItemChanges,
          number_media_items: t.numMediaItems,
        }),
          (0, s.j)(() => a.setState({ ...l }));
      }
      function d() {
        (0, s.j)(() =>
          a.setState((t) => ({
            selectedItemChanges: t.selectedItemChanges + 1,
          })),
        );
      }
    },
    94396: function (t, e, n) {
      n.d(e, {
        _: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var s = n(374470),
        o = n(481060),
        r = n(254109),
        l = n(52824),
        a = n(626135),
        c = n(981631),
        u = n(701865),
        d = n(268108);
      function I(t, e, I) {
        let S = {};
        for (let [_, p] of t.entries())
          S[(0, l.q)({ proxyURL: p.proxyUrl, url: p.url })] = (l) =>
            (function (t, e, l) {
              let I =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                S = arguments.length > 4 ? arguments[4] : void 0;
              t.preventDefault(),
                (0, s.k)(t.currentTarget) && t.currentTarget.blur(),
                null != S &&
                  (a.default.track(
                    c.rMx.OPEN_MODAL,
                    { type: c.jXE.MEDIA_VIEWER, ...S },
                    { throttlePercent: 0.01 },
                  ),
                  (0, r.fS)(
                    S.guild_id,
                    S.channel_id,
                    S.channel_type,
                    e.length,
                  )),
                (0, o.openModalLazy)(
                  async () => {
                    let { default: t } = await Promise.resolve().then(
                      n.bind(n, 950120),
                    );
                    return (n) =>
                      (0, i.jsx)(t, {
                        ...n,
                        ...I,
                        className: d.forcedTransparency,
                        onIndexChange: null != S ? r.f0 : void 0,
                        items: e,
                        startingIndex: l,
                      });
                  },
                  { onCloseCallback: null != S ? r.VO : void 0, modalKey: u.U },
                );
            })(l, t, _, e, I);
        return S;
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
          return I;
        },
        vY: function () {
          return S;
        },
      }),
        n(47120);
      var i = n(570140),
        s = n(821849),
        o = n(307643),
        r = n(981631);
      function l(t) {
        return {
          id: t.id,
          type: r.epS.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: r.POd.APPLICATION,
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
          sku: l(t),
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
          skus: t.map(l),
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
          let s = await o.jz(t, e);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: s,
            }),
            c(null !== (n = s.subscription_listings) && void 0 !== n ? n : []),
            s
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
          let e = await o.GF(t);
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
      function I(t) {
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
          let n = await o.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let r =
            null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
          for (let e of r)
            e.subscription_plans[0].id === t &&
              (await s.GZ(e.id, void 0, void 0, !0));
          c(r);
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
        s,
        o,
        r,
        l,
        a,
        c = n(512722),
        u = n.n(c),
        d = n(442837),
        I = n(759174),
        S = n(570140),
        _ = n(959546),
        p = n(55563);
      function T(t) {
        return "subscription_listing:".concat(t);
      }
      function C(t) {
        return "application:".concat(t);
      }
      function f(t) {
        return "plan:".concat(t);
      }
      function E(t, e, n) {
        return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
      }
      function N(t, e) {
        return "entitlement:".concat(e, ":").concat(t);
      }
      ((o = i || (i = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let g = new I.h(
          (t) => [C(t.application_id), ...t.subscription_listings_ids.map(T)],
          (t) => t.id,
        ),
        h = new I.h(
          (t) => [C(t.application_id), f(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        P = new I.h(
          (t) => [
            E(t.applicationId, t.isValid(null, p.Z), t.guildId),
            N(t.isValid(null, p.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        m = {},
        A = {};
      function L(t) {
        var e;
        for (let n of (g.set(t.id, t),
        null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
          (function (t) {
            h.set(t.id, t);
          })(n);
      }
      class O extends (s = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var e;
          return null !== (e = m[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionGroupListing(t) {
          return g.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let e = g.values(T(t));
          return (
            u()(e.length <= 1, "Found multiple group listings for listing"),
            e[0]
          );
        }
        getSubscriptionListing(t) {
          return h.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return h.values(C(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var e;
          return null !== (e = A[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionListingForPlan(t) {
          let e = h.values(f(t));
          return u()(e.length <= 1, "Found multiple listings for plan"), e[0];
        }
        getApplicationEntitlementsForGuild(t, e) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return P.values(E(t, n, e));
        }
        getEntitlementsForGuild(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return P.values(N(e, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (l = "displayName") in (r = O)
          ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = a),
        (e.Z = new O(S.Z, {
          LOGOUT: function () {
            g.clear(), h.clear(), P.clear(), (m = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: n } = t;
            m[e] = 1;
            let i = g.get(n);
            if (null != i)
              for (let t of i.subscription_listings_ids) h.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: e, groupListing: n } = t;
            (m[e] = 2), L(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: e } = t;
            m[e] = 2;
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
                P.set(e.id, e);
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
  },
]);
//# sourceMappingURL=927a7272da987614e1ca.js.map
