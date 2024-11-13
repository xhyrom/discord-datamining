"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47964"],
  {
    192918: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(442837),
        r = n(594174),
        a = n(823379);
      let l = [];
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = (0, o.Wu)(
            [r.default],
            () => {
              let t = e.participants
                  .map((e) => r.default.getUser(e))
                  .filter(a.lm),
                n = t.find((t) => t.id === e.author_id),
                i = t.filter((t) => t.id !== e.author_id);
              return null == n ? l : [...i, n];
            },
            [e],
          ),
          s = i.useMemo(() => n.slice(-t), [t, n]),
          c = s[s.length - 1],
          u = s[s.length - 2],
          d = Math.max(n.length - 1, 0);
        return {
          orderedParticipants: n,
          displayParticipants: s,
          participant1: c,
          participant2: u,
          numOtherParticipants: d,
        };
      }
    },
    14263: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(192379),
        o = n(442837),
        r = n(480608),
        a = n(243730);
      let l = {};
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, o.e7)([a.Z], () => a.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let n = l[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((l[e] = Date.now()), r.E(e));
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
        l = n(471073),
        s = n(293979),
        c = n(954654),
        u = n(388032),
        d = n(251686);
      function _(e) {
        let { title: t, onClose: n, transitionState: _ } = e,
          {
            components: p,
            applicationIconURL: I,
            applicationName: S,
            submissionState: f,
            error: C,
            validators: T,
            onSubmit: m,
          } = (0, s.X9)(e, n);
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
                    submitting: f === l.i.IN_FLIGHT,
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
    254109: function (e, t, n) {
      n.d(t, {
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
      var i = n(905837),
        o = n(731965),
        r = n(626135),
        a = n(981631);
      let l = {
          guildId: void 0,
          channelId: void 0,
          channelType: void 0,
          viewerSwipes: 0,
          thumbnailSwipes: 0,
          selectedItemChanges: 0,
          numMediaItems: 0,
        },
        s = (0, i.Ue)(() => l);
      function c(e, t, n, i) {
        (0, o.j)(() =>
          s.setState({
            ...l,
            guildId: e,
            channelId: t,
            channelType: n,
            numMediaItems: i,
          }),
        );
      }
      function u() {
        let e = s.getState();
        r.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: e.guildId,
          channel_id: e.channelId,
          channel_type: e.channelType,
          number_viewer_swipes: e.viewerSwipes,
          number_thumbnail_swipes: e.thumbnailSwipes,
          number_selected_item_changes: e.selectedItemChanges,
          number_media_items: e.numMediaItems,
        }),
          (0, o.j)(() => s.setState({ ...l }));
      }
      function d() {
        (0, o.j)(() =>
          s.setState((e) => ({
            selectedItemChanges: e.selectedItemChanges + 1,
          })),
        );
      }
    },
    94396: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      }),
        n(47120),
        n(192379);
      var i = n(374470),
        o = n(254109),
        r = n(312097),
        a = n(52824),
        l = n(626135),
        s = n(981631),
        c = n(268108);
      function u(e, t, n) {
        let u = {};
        for (let [d, _] of e.entries())
          u[(0, a.q)({ proxyURL: _.proxyUrl, url: _.url })] = (a) =>
            (function (e, t, n) {
              let a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                u = arguments.length > 4 ? arguments[4] : void 0;
              e.preventDefault(),
                (0, i.k)(e.currentTarget) && e.currentTarget.blur(),
                null != u &&
                  (l.default.track(
                    s.rMx.OPEN_MODAL,
                    { type: s.jXE.MEDIA_VIEWER, ...u },
                    { throttlePercent: 0.01 },
                  ),
                  (0, o.fS)(
                    u.guild_id,
                    u.channel_id,
                    u.channel_type,
                    t.length,
                  )),
                (0, r.K)({
                  ...a,
                  className: c.forcedTransparency,
                  onIndexChange: null != u ? o.f0 : void 0,
                  items: t,
                  startingIndex: n,
                  location: "zoomedMediaModalHelper",
                  onCloseCallback: null != u ? o.VO : void 0,
                });
            })(a, e, d, t, n);
        return u;
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
      function l(e) {
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
      function s(e) {
        var t;
        return {
          id: e.id,
          sku: l(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function c(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(l),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(s),
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
            c(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
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
            c(a);
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
        l,
        s,
        c = n(512722),
        u = n.n(c),
        d = n(442837),
        _ = n(759174),
        p = n(570140),
        I = n(959546),
        S = n(55563);
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
      function h(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let g = new _.h(
          (e) => [C(e.application_id), ...e.subscription_listings_ids.map(f)],
          (e) => e.id,
        ),
        E = new _.h(
          (e) => [C(e.application_id), T(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        N = new _.h(
          (e) => [
            m(e.applicationId, e.isValid(null, S.Z), e.guildId),
            h(e.isValid(null, S.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        b = {},
        P = {};
      function L(e) {
        var t;
        for (let n of (g.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            E.set(e.id, e);
          })(n);
      }
      class v extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = b[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return g.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = g.values(f(e));
          return (
            u()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return E.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return E.values(C(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = P[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = E.values(T(e));
          return u()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return N.values(m(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return N.values(h(t, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (l = "displayName") in (a = v)
          ? Object.defineProperty(a, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = s),
        (t.Z = new v(p.Z, {
          LOGOUT: function () {
            g.clear(), E.clear(), N.clear(), (b = {}), (P = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            b[t] = 1;
            let i = g.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) E.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (b[t] = 2), L(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            b[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            P[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (P[t] = 2),
              n.forEach((e) => {
                let t = I.Z.createFromServer(e);
                N.set(t.id, t);
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
    973335: function (e, t, n) {
      e.exports = { title: "title_d9a510" };
    },
    275703: function (e, t, n) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    251686: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    53304: function (e, t, n) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    268108: function (e, t, n) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    297908: function (e, t, n) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    638635: function (e, t, n) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    130298: function (e, t, n) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    893896: function (e, t, n) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    622085: function (e, t, n) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    555730: function (e, t, n) {
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
    600699: function (e, t, n) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
  },
]);
//# sourceMappingURL=fa6ac20dd2282579c273.js.map
