"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10597"],
  {
    192918: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var i = t(192379),
        o = t(442837),
        r = t(594174),
        a = t(823379);
      let l = [];
      function s(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          t = (0, o.Wu)(
            [r.default],
            () => {
              let n = e.participants
                  .map((e) => r.default.getUser(e))
                  .filter(a.lm),
                t = n.find((n) => n.id === e.author_id),
                i = n.filter((n) => n.id !== e.author_id);
              return null == t ? l : [...i, t];
            },
            [e],
          ),
          s = i.useMemo(() => t.slice(-n), [n, t]),
          c = s[s.length - 1],
          u = s[s.length - 2],
          d = Math.max(t.length - 1, 0);
        return {
          orderedParticipants: t,
          displayParticipants: s,
          participant1: c,
          participant2: u,
          numOtherParticipants: d,
        };
      }
    },
    352057: function (e, n, t) {
      t.d(n, {
        h: function () {
          return o;
        },
        r: function () {
          return r;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(e) {
        let { location: n, autoTrackExposure: t = !0 } = e,
          { enabled: o } = i.useExperiment(
            { location: n },
            { autoTrackExposure: t },
          );
        return o;
      }
      function r(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    14263: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(192379),
        o = t(442837),
        r = t(480608),
        a = t(243730);
      let l = {};
      function s(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (0, o.e7)([a.Z], () => a.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let t = l[e];
            !(null != t && n > 0 && Date.now() - t < n) &&
              ((l[e] = Date.now()), r.E(e));
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
        l = t(471073),
        s = t(293979),
        c = t(954654),
        u = t(388032),
        d = t(223674);
      function _(e) {
        let { title: n, onClose: t, transitionState: _ } = e,
          {
            components: p,
            applicationIconURL: f,
            applicationName: I,
            submissionState: S,
            error: C,
            validators: T,
            onSubmit: m,
          } = (0, s.X9)(e, t);
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
                    src: f,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": I,
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
                      applicationName: I,
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
                    submitting: S === l.i.IN_FLIGHT,
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
    254109: function (e, n, t) {
      t.d(n, {
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
      var i = t(905837),
        o = t(731965),
        r = t(626135),
        a = t(981631);
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
      function c(e, n, t, i) {
        (0, o.j)(() =>
          s.setState({
            ...l,
            guildId: e,
            channelId: n,
            channelType: t,
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
    94396: function (e, n, t) {
      t.d(n, {
        _: function () {
          return u;
        },
      }),
        t(47120),
        t(192379);
      var i = t(374470),
        o = t(254109),
        r = t(312097),
        a = t(52824),
        l = t(626135),
        s = t(981631),
        c = t(431548);
      function u(e, n, t) {
        let u = {};
        for (let [d, _] of e.entries())
          u[(0, a.q)({ proxyURL: _.proxyUrl, url: _.url })] = (a) =>
            (function (e, n, t) {
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
                    n.length,
                  )),
                (0, r.K)({
                  ...a,
                  className: c.forcedTransparency,
                  onIndexChange: null != u ? o.f0 : void 0,
                  items: n,
                  startingIndex: t,
                  location: "zoomedMediaModalHelper",
                  onCloseCallback: null != u ? o.VO : void 0,
                });
            })(a, e, d, n, t);
        return u;
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
        var n;
        return {
          id: e.id,
          sku: l(e),
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
          skus: e.map(l),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(s),
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
        l,
        s,
        c = t(512722),
        u = t.n(c),
        d = t(442837),
        _ = t(759174),
        p = t(570140),
        f = t(959546),
        I = t(55563);
      function S(e) {
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
      function g(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let h = new _.h(
          (e) => [C(e.application_id), ...e.subscription_listings_ids.map(S)],
          (e) => e.id,
        ),
        E = new _.h(
          (e) => [C(e.application_id), T(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        b = new _.h(
          (e) => [
            m(e.applicationId, e.isValid(null, I.Z), e.guildId),
            g(e.isValid(null, I.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        N = {},
        P = {};
      function L(e) {
        var n;
        for (let t of (h.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            E.set(e.id, e);
          })(t);
      }
      class v extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = N[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return h.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = h.values(S(e));
          return (
            u()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return E.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return E.values(C(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = P[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = E.values(T(e));
          return u()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return b.values(m(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return b.values(g(n, e));
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
        (n.Z = new v(p.Z, {
          LOGOUT: function () {
            h.clear(), E.clear(), b.clear(), (N = {}), (P = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            N[n] = 1;
            let i = h.get(t);
            if (null != i)
              for (let e of i.subscription_listings_ids) E.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (N[n] = 2), L(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            N[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            P[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (P[n] = 2),
              t.forEach((e) => {
                let n = f.Z.createFromServer(e);
                b.set(n.id, n);
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
    379720: function (e, n, t) {
      e.exports = { title: "title_d9a510" };
    },
    985146: function (e, n, t) {
      e.exports = {
        hoverButtonGroup: "hoverButtonGroup_d0395d",
        forceShowHover: "forceShowHover_d0395d",
        hoverButton: "hoverButton_d0395d",
        selected: "selected_d0395d",
        nonMediaMosaicItem: "nonMediaMosaicItem_d0395d",
      };
    },
    223674: function (e, n, t) {
      e.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
    808647: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    431548: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
    652045: function (e, n, t) {
      e.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    295082: function (e, n, t) {
      e.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    854724: function (e, n, t) {
      e.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    53787: function (e, n, t) {
      e.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    655949: function (e, n, t) {
      e.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    421585: function (e, n, t) {
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
    140936: function (e, n, t) {
      e.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
  },
]);
//# sourceMappingURL=0fd2fb87151caac758ca.js.map
