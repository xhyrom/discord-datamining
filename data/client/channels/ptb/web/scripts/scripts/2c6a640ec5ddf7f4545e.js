"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33670"],
  {
    14263: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(470079),
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
            return I;
          },
        });
      var i = n(735250);
      n(470079);
      var o = n(481060),
        r = n(112831),
        l = n(970184),
        s = n(471073),
        a = n(293979),
        u = n(954654),
        c = n(689938),
        d = n(251686);
      function p(t) {
        let { title: e, onClose: n, transitionState: p } = t,
          {
            components: I,
            applicationIconURL: S,
            applicationName: _,
            submissionState: C,
            error: f,
            validators: T,
            onSubmit: h,
          } = (0, a.X9)(t, n);
        return (0, i.jsx)("form", {
          onSubmit: (t) => {
            t.preventDefault(), h();
          },
          children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(o.Avatar, {
                    src: S,
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": _,
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
                    children:
                      c.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format(
                        { applicationName: _ },
                      ),
                  }),
                  (0, i.jsx)(o.FormSection, {
                    children: (0, i.jsx)(l.Il, {
                      modal: t,
                      validators: T,
                      children: (0, u.xX)(I),
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
                    submitting: C === s.i.IN_FLIGHT,
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
      function I(t) {
        (0, o.openModal)((e) => (0, i.jsx)(p, { ...e, ...t }));
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
      function u(t, e, n, i) {
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
      function c() {
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
    780088: function (t, e, n) {
      n.d(e, {
        Cx: function () {
          return g;
        },
        j0: function () {
          return T;
        },
        j9: function () {
          return h;
        },
        nP: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var o = n(374470),
        r = n(481060),
        l = n(794295),
        s = n(163268),
        a = n(768494),
        u = n(751586),
        c = n(254109),
        d = n(406432),
        p = n(52824),
        I = n(626135),
        S = n(591759),
        _ = n(981631),
        C = n(855199);
      function f(t, e) {
        let { width: n, height: o } = t,
          r = (0, p.q)(t);
        return {
          component: (0, i.jsx)(u.y, {
            width: n,
            height: o,
            original: t.url,
            renderLinkComponent: (t) => (0, i.jsx)(l.Z, { ...t }),
            renderForwardComponent: e,
            src: r,
          }),
          width: n,
          height: o,
          src: r,
        };
      }
      function T(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = (function (t, e) {
            var n, o;
            let r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, d.tw)(t.contentType)) return null;
            let c = null !== (n = t.width) && void 0 !== n ? n : 0,
              I = null !== (o = t.height) && void 0 !== o ? o : 0,
              S = (0, p.q)({ proxyURL: t.proxyUrl, url: t.url });
            return {
              component: (0, i.jsx)(u.y, {
                width: c,
                height: I,
                original: t.url,
                renderLinkComponent: (t) => (0, i.jsx)(l.Z, { ...t }),
                renderForwardComponent: e,
                src: S,
                shouldHideMediaOptions: r,
                obscure: (0, s.KP)({ type: s.lJ.GenericMedia, media: t }, a),
              }),
              width: c,
              height: I,
              src: S,
            };
          })(t, e, n, o);
        if (null != r) return r;
        let a = (function (t, e) {
          var n, o;
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!(0, d.X2)(t.contentType)) return null;
          let c = null !== (n = t.width) && void 0 !== n ? n : 0,
            I = null !== (o = t.height) && void 0 !== o ? o : 0,
            _ = (0, p.q)({ proxyURL: t.proxyUrl, url: t.url }),
            C = S.Z.toURLSafe(t.proxyUrl);
          return null == C
            ? null
            : (C.searchParams.append("format", "webp"),
              {
                component: (0, i.jsx)(u.K, {
                  width: c,
                  height: I,
                  poster: C.toString(),
                  naturalWidth: c,
                  naturalHeight: I,
                  renderLinkComponent: (t) => (0, i.jsx)(l.Z, { ...t }),
                  renderForwardComponent: e,
                  src: _,
                  shouldHideMediaOptions: r,
                  obscure: (0, s.KP)({ type: s.lJ.GenericMedia, media: t }, a),
                }),
                width: c,
                height: I,
                src: _,
              });
        })(t, e, n, o);
        return null != a ? a : null;
      }
      function h(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return T((0, a.VY)(t), e, n, i);
      }
      function g(t, e) {
        let l = {};
        for (let [s, a] of t.entries())
          l[a.src] = (l) =>
            (function (t, e, l, s) {
              t.preventDefault(),
                (0, o.k)(t.currentTarget) && t.currentTarget.blur(),
                null != s &&
                  (I.default.track(
                    _.rMx.OPEN_MODAL,
                    { type: _.jXE.MEDIA_VIEWER, ...s },
                    { throttlePercent: 0.01 },
                  ),
                  (0, c.fS)(
                    s.guild_id,
                    s.channel_id,
                    s.channel_type,
                    e.length,
                  )),
                (0, r.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .e("99857")
                      .then(n.bind(n, 895023));
                    return (n) => {
                      let { ...o } = n;
                      return (0, i.jsx)(t, {
                        ...o,
                        onIndexChange: null != s ? c.f0 : void 0,
                        className: C.zoomedCarouselModalRoot,
                        items: e,
                        modalCarouselClassName: C.modalCarouselWrapper,
                        startingIndex: l,
                      });
                    };
                  },
                  { onCloseCallback: null != s ? c.VO : void 0 },
                );
            })(l, t, s, e);
        return l;
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
          return p;
        },
        vY: function () {
          return I;
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
      function u(t) {
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
      async function c(t, e) {
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
      async function I(t) {
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
          u(l);
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
        u = n(512722),
        c = n.n(u),
        d = n(442837),
        p = n(759174),
        I = n(570140),
        S = n(959546),
        _ = n(55563);
      function C(t) {
        return "subscription_listing:".concat(t);
      }
      function f(t) {
        return "application:".concat(t);
      }
      function T(t) {
        return "plan:".concat(t);
      }
      function h(t, e, n) {
        return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
      }
      function g(t, e) {
        return "entitlement:".concat(e, ":").concat(t);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let E = new p.h(
          (t) => [f(t.application_id), ...t.subscription_listings_ids.map(C)],
          (t) => t.id,
        ),
        N = new p.h(
          (t) => [f(t.application_id), T(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        m = new p.h(
          (t) => [
            h(t.applicationId, t.isValid(null, _.Z), t.guildId),
            g(t.isValid(null, _.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        P = {},
        v = {};
      function L(t) {
        var e;
        for (let n of (E.set(t.id, t),
        null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
          (function (t) {
            N.set(t.id, t);
          })(n);
      }
      class A extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var e;
          return null !== (e = P[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionGroupListing(t) {
          return E.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let e = E.values(C(t));
          return (
            c()(e.length <= 1, "Found multiple group listings for listing"),
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
          return null !== (e = v[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionListingForPlan(t) {
          let e = N.values(T(t));
          return c()(e.length <= 1, "Found multiple listings for plan"), e[0];
        }
        getApplicationEntitlementsForGuild(t, e) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return m.values(h(t, n, e));
        }
        getEntitlementsForGuild(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return m.values(g(e, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (s = "displayName") in (l = A)
          ? Object.defineProperty(l, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[s] = a),
        (e.Z = new A(I.Z, {
          LOGOUT: function () {
            E.clear(), N.clear(), m.clear(), (P = {}), (v = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: n } = t;
            P[e] = 1;
            let i = E.get(n);
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
            v[e] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: e, entitlements: n } = t;
            (v[e] = 2),
              n.forEach((t) => {
                let e = S.Z.createFromServer(t);
                m.set(e.id, e);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: e } = t;
            v[e] = 0;
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
      t.exports = { title: "title_d9a510", buttonIcon: "buttonIcon_d9a510" };
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
    855199: function (t, e, n) {
      t.exports = {
        modalCarouselWrapper: "modalCarouselWrapper_f74404",
        zoomedCarouselModalRoot: "zoomedCarouselModalRoot_f74404",
      };
    },
  },
]);
//# sourceMappingURL=2c6a640ec5ddf7f4545e.js.map
