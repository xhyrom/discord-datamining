"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33670"],
  {
    14263: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(470079),
        o = n(442837),
        r = n(480608),
        l = n(243730);
      let s = {};
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, o.e7)([l.Z], () => l.Z.getRoleMemberCount(e));
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
            return p;
          },
          openInteractionModal: function () {
            return S;
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
      function p(e) {
        let { title: t, onClose: n, transitionState: p } = e,
          {
            components: S,
            applicationIconURL: I,
            applicationName: _,
            submissionState: C,
            error: f,
            validators: T,
            onSubmit: h,
          } = (0, a.X9)(e, n);
        return (0, i.jsx)("form", {
          onSubmit: (e) => {
            e.preventDefault(), h();
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
                      modal: e,
                      validators: T,
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
      function S(e) {
        (0, o.openModal)((t) => (0, i.jsx)(p, { ...t, ...e }));
      }
    },
    254109: function (e, t, n) {
      n.d(t, {
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
      function u(e, t, n, i) {
        (0, o.j)(() =>
          a.setState({
            ...s,
            guildId: e,
            channelId: t,
            channelType: n,
            numMediaItems: i,
          }),
        );
      }
      function c() {
        let e = a.getState();
        r.default.track(l.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
          guild_id: e.guildId,
          channel_id: e.channelId,
          channel_type: e.channelType,
          number_viewer_swipes: e.viewerSwipes,
          number_thumbnail_swipes: e.thumbnailSwipes,
          number_selected_item_changes: e.selectedItemChanges,
          number_media_items: e.numMediaItems,
        }),
          (0, o.j)(() => a.setState({ ...s }));
      }
      function d() {
        (0, o.j)(() =>
          a.setState((e) => ({
            selectedItemChanges: e.selectedItemChanges + 1,
          })),
        );
      }
    },
    780088: function (e, t, n) {
      n.d(t, {
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
        S = n(626135),
        I = n(591759),
        _ = n(981631),
        C = n(855199);
      function f(e, t) {
        let { width: n, height: o } = e,
          r = (0, p.q)(e);
        return {
          component: (0, i.jsx)(u.y, {
            width: n,
            height: o,
            original: e.url,
            renderLinkComponent: (e) => (0, i.jsx)(l.Z, { ...e }),
            renderForwardComponent: t,
            src: r,
          }),
          width: n,
          height: o,
          src: r,
        };
      }
      function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = (function (e, t) {
            var n, o;
            let r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (!(0, d.tw)(e.contentType)) return null;
            let c = null !== (n = e.width) && void 0 !== n ? n : 0,
              S = null !== (o = e.height) && void 0 !== o ? o : 0,
              I = (0, p.q)({ proxyURL: e.proxyUrl, url: e.url });
            return {
              component: (0, i.jsx)(u.y, {
                width: c,
                height: S,
                original: e.url,
                renderLinkComponent: (e) => (0, i.jsx)(l.Z, { ...e }),
                renderForwardComponent: t,
                src: I,
                shouldHideMediaOptions: r,
                obscure: (0, s.KP)({ type: s.lJ.GenericMedia, media: e }, a),
              }),
              width: c,
              height: S,
              src: I,
            };
          })(e, t, n, o);
        if (null != r) return r;
        let a = (function (e, t) {
          var n, o;
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!(0, d.X2)(e.contentType)) return null;
          let c = null !== (n = e.width) && void 0 !== n ? n : 0,
            S = null !== (o = e.height) && void 0 !== o ? o : 0,
            _ = (0, p.q)({ proxyURL: e.proxyUrl, url: e.url }),
            C = I.Z.toURLSafe(e.proxyUrl);
          return null == C
            ? null
            : (C.searchParams.append("format", "webp"),
              {
                component: (0, i.jsx)(u.K, {
                  width: c,
                  height: S,
                  poster: C.toString(),
                  naturalWidth: c,
                  naturalHeight: S,
                  renderLinkComponent: (e) => (0, i.jsx)(l.Z, { ...e }),
                  renderForwardComponent: t,
                  src: _,
                  shouldHideMediaOptions: r,
                  obscure: (0, s.KP)({ type: s.lJ.GenericMedia, media: e }, a),
                }),
                width: c,
                height: S,
                src: _,
              });
        })(e, t, n, o);
        return null != a ? a : null;
      }
      function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return T((0, a.VY)(e), t, n, i);
      }
      function g(e, t) {
        let l = {};
        for (let [s, a] of e.entries())
          l[a.src] = (l) =>
            (function (e, t, l, s) {
              e.preventDefault(),
                (0, o.k)(e.currentTarget) && e.currentTarget.blur(),
                null != s &&
                  (S.default.track(
                    _.rMx.OPEN_MODAL,
                    { type: _.jXE.MEDIA_VIEWER, ...s },
                    { throttlePercent: 0.01 },
                  ),
                  (0, c.fS)(
                    s.guild_id,
                    s.channel_id,
                    s.channel_type,
                    t.length,
                  )),
                (0, r.openModalLazy)(
                  async () => {
                    let { default: e } = await n
                      .e("99857")
                      .then(n.bind(n, 895023));
                    return (n) => {
                      let { ...o } = n;
                      return (0, i.jsx)(e, {
                        ...o,
                        onIndexChange: null != s ? c.f0 : void 0,
                        className: C.zoomedCarouselModalRoot,
                        items: t,
                        modalCarouselClassName: C.modalCarouselWrapper,
                        startingIndex: l,
                      });
                    };
                  },
                  { onCloseCallback: null != s ? c.VO : void 0 },
                );
            })(l, e, s, t);
        return l;
      }
    },
    106976: function (e, t, n) {
      n.d(t, {
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
          return S;
        },
      }),
        n(47120);
      var i = n(570140),
        o = n(821849),
        r = n(307643),
        l = n(981631);
      function s(e) {
        return {
          id: e.id,
          type: l.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: l.POd.APPLICATION,
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
      function a(e) {
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
      function u(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(s),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(a),
        }),
        e))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
          });
      }
      async function c(e, t) {
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
            u(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
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
      function p(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function S(e) {
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
          let l =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          for (let t of l)
            t.subscription_plans[0].id === e &&
              (await o.GZ(t.id, void 0, void 0, !0));
          u(l);
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
        l,
        s,
        a,
        u = n(512722),
        c = n.n(u),
        d = n(442837),
        p = n(759174),
        S = n(570140),
        I = n(959546),
        _ = n(55563);
      function C(e) {
        return "subscription_listing:".concat(e);
      }
      function f(e) {
        return "application:".concat(e);
      }
      function T(e) {
        return "plan:".concat(e);
      }
      function h(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function g(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((r = i || (i = {}))[(r.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED");
      let E = new p.h(
          (e) => [f(e.application_id), ...e.subscription_listings_ids.map(C)],
          (e) => e.id,
        ),
        N = new p.h(
          (e) => [f(e.application_id), T(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        m = new p.h(
          (e) => [
            h(e.applicationId, e.isValid(null, _.Z), e.guildId),
            g(e.isValid(null, _.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        P = {},
        v = {};
      function L(e) {
        var t;
        for (let n of (E.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            N.set(e.id, e);
          })(n);
      }
      class A extends (o = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = P[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return E.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = E.values(C(e));
          return (
            c()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return N.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return N.values(f(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = v[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = N.values(T(e));
          return c()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return m.values(h(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return m.values(g(t, e));
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
        (t.Z = new A(S.Z, {
          LOGOUT: function () {
            E.clear(), N.clear(), m.clear(), (P = {}), (v = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            P[t] = 1;
            let i = E.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) N.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (P[t] = 2), L(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            P[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            v[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (v[t] = 2),
              n.forEach((e) => {
                let t = I.Z.createFromServer(e);
                m.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            v[t] = 0;
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
    855199: function (e, t, n) {
      e.exports = {
        modalCarouselWrapper: "modalCarouselWrapper_f74404",
        zoomedCarouselModalRoot: "zoomedCarouselModalRoot_f74404",
      };
    },
  },
]);
//# sourceMappingURL=451b76a0d262720b8870.js.map
