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
      var i = n(470079),
        o = n(442837),
        s = n(594174),
        r = n(823379);
      let l = [];
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = (0, o.Wu)(
            [s.default],
            () => {
              let e = t.participants
                  .map((t) => s.default.getUser(t))
                  .filter(r.lm),
                n = e.find((e) => e.id === t.author_id),
                i = e.filter((e) => e.id !== t.author_id);
              return null == n ? l : [...i, n];
            },
            [t],
          ),
          a = i.useMemo(() => n.slice(-e), [e, n]),
          u = a[a.length - 1],
          c = a[a.length - 2],
          d = Math.max(n.length - 1, 0);
        return {
          orderedParticipants: n,
          displayParticipants: a,
          participant1: u,
          participant2: c,
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
      var i = n(470079),
        o = n(442837),
        s = n(480608),
        r = n(243730);
      let l = {};
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, o.e7)([r.Z], () => r.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let n = l[t];
            !(null != n && e > 0 && Date.now() - n < e) &&
              ((l[t] = Date.now()), s.E(t));
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
      var o = n(481060),
        s = n(112831),
        r = n(970184),
        l = n(471073),
        a = n(293979),
        u = n(954654),
        c = n(689938),
        d = n(251686);
      function I(t) {
        let { title: e, onClose: n, transitionState: I } = t,
          {
            components: S,
            applicationIconURL: p,
            applicationName: _,
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
            transitionState: I,
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(o.Avatar, {
                    src: p,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": _,
                    className: d.applicationIcon,
                  }),
                  (0, i.jsx)(s.Z, {
                    color: s.Z.Colors.HEADER_PRIMARY,
                    size: s.Z.Sizes.SIZE_24,
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
                    children:
                      c.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format(
                        { applicationName: _ },
                      ),
                  }),
                  (0, i.jsx)(o.FormSection, {
                    children: (0, i.jsx)(r.Il, {
                      modal: t,
                      validators: C,
                      children: (0, u.xX)(S),
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
                    children: c.Z.Messages.SUBMIT,
                  }),
                  (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: n,
                    children: c.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function S(t) {
        (0, o.openModal)((e) => (0, i.jsx)(I, { ...e, ...t }));
      }
    },
    254109: function (t, e, n) {
      n.d(e, {
        VO: function () {
          return c;
        },
        f0: function () {
          return d;
        },
        fS: function () {
          return u;
        },
      });
      var i = n(652874),
        o = n(731965),
        s = n(626135),
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
      function u(t, e, n, i) {
        (0, o.j)(() =>
          a.setState({
            ...l,
            guildId: t,
            channelId: e,
            channelType: n,
            numMediaItems: i,
          }),
        );
      }
      function c() {
        let t = a.getState();
        s.default.track(r.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: t.guildId,
          channel_id: t.channelId,
          channel_type: t.channelType,
          number_viewer_swipes: t.viewerSwipes,
          number_thumbnail_swipes: t.thumbnailSwipes,
          number_selected_item_changes: t.selectedItemChanges,
          number_media_items: t.numMediaItems,
        }),
          (0, o.j)(() => a.setState({ ...l }));
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
          return I;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var o = n(374470),
        s = n(481060),
        r = n(254109),
        l = n(52824),
        a = n(626135),
        u = n(981631),
        c = n(701865),
        d = n(268108);
      function I(t, e, I) {
        let S = {};
        for (let [p, _] of t.entries())
          S[(0, l.q)({ proxyURL: _.proxyUrl, url: _.url })] = (l) =>
            (function (t, e, l) {
              let I =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                S = arguments.length > 4 ? arguments[4] : void 0;
              t.preventDefault(),
                (0, o.k)(t.currentTarget) && t.currentTarget.blur(),
                null != S &&
                  (a.default.track(
                    u.rMx.OPEN_MODAL,
                    { type: u.jXE.MEDIA_VIEWER, ...S },
                    { throttlePercent: 0.01 },
                  ),
                  (0, r.fS)(
                    S.guild_id,
                    S.channel_id,
                    S.channel_type,
                    e.length,
                  )),
                (0, s.openModalLazy)(
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
                  { onCloseCallback: null != S ? r.VO : void 0, modalKey: c.U },
                );
            })(l, t, p, e, I);
        return S;
      }
    },
    106976: function (t, e, n) {
      n.d(e, {
        i1: function () {
          return d;
        },
        rx: function () {
          return c;
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
        o = n(821849),
        s = n(307643),
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
      function u(t) {
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
      async function c(t, e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: e,
        });
        try {
          var n;
          let o = await s.jz(t, e);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: o,
            }),
            u(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
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
          let e = await s.GF(t);
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
          let n = await s.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let r =
            null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
          for (let e of r)
            e.subscription_plans[0].id === t &&
              (await o.GZ(e.id, void 0, void 0, !0));
          u(r);
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
        s,
        r,
        l,
        a,
        u = n(512722),
        c = n.n(u),
        d = n(442837),
        I = n(759174),
        S = n(570140),
        p = n(959546),
        _ = n(55563);
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
      function N(t, e) {
        return "entitlement:".concat(e, ":").concat(t);
      }
      ((s = i || (i = {}))[(s.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED");
      let g = new I.h(
          (t) => [f(t.application_id), ...t.subscription_listings_ids.map(T)],
          (t) => t.id,
        ),
        h = new I.h(
          (t) => [f(t.application_id), C(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        m = new I.h(
          (t) => [
            E(t.applicationId, t.isValid(null, _.Z), t.guildId),
            N(t.isValid(null, _.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        P = {},
        A = {};
      function L(t) {
        var e;
        for (let n of (g.set(t.id, t),
        null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
          (function (t) {
            h.set(t.id, t);
          })(n);
      }
      class v extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var e;
          return null !== (e = P[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionGroupListing(t) {
          return g.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let e = g.values(T(t));
          return (
            c()(e.length <= 1, "Found multiple group listings for listing"),
            e[0]
          );
        }
        getSubscriptionListing(t) {
          return h.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return h.values(f(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var e;
          return null !== (e = A[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionListingForPlan(t) {
          let e = h.values(C(t));
          return c()(e.length <= 1, "Found multiple listings for plan"), e[0];
        }
        getApplicationEntitlementsForGuild(t, e) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return m.values(E(t, n, e));
        }
        getEntitlementsForGuild(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return m.values(N(e, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (l = "displayName") in (r = v)
          ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = a),
        (e.Z = new v(S.Z, {
          LOGOUT: function () {
            g.clear(), h.clear(), m.clear(), (P = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: n } = t;
            P[e] = 1;
            let i = g.get(n);
            if (null != i)
              for (let t of i.subscription_listings_ids) h.delete(t);
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
                let e = p.Z.createFromServer(t);
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
  },
]);
//# sourceMappingURL=43bdd46ec11072a08613.js.map
