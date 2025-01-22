"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93143"],
  {
    150414: function (t, n, i) {
      i.d(n, {
        q: function () {
          return a;
        },
      });
      var e = i(73346),
        r = i(591759);
      function a(t, n, i) {
        var a;
        return null !== (a = r.Z.toURLSafe((0, e._W)(t, n, i))) && void 0 !== a
          ? a
          : void 0;
      }
    },
    504211: function (t, n, i) {
      i.d(n, {
        B: function () {
          return r;
        },
        X: function () {
          return s;
        },
      });
      var e,
        r,
        a = i(626135),
        o = i(981631);
      function s(t, n, i) {
        a.default.track(o.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: t,
          area: n,
          sku_id: i,
        });
      }
      ((e = r || (r = {})).STORE_MODAL = "store_modal"),
        (e.DETAILS_MODAL = "details_modal"),
        (e.STORE_EMBED = "store_embed"),
        (e.SKU_EMBED = "sku_embed");
    },
    7225: function (t, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return h;
          },
        }),
        i(47120);
      var e,
        r,
        a = i(200651),
        o = i(192379),
        s = i(541822),
        l = i(442837),
        c = i(481060),
        d = i(728345),
        u = i(812206),
        p = i(600164),
        _ = i(886176),
        C = i(572004),
        S = i(504211),
        f = i(283836),
        I = i(507608),
        T = i(533159),
        N = i(981631),
        E = i(272242),
        L = i(388032),
        b = i(671702);
      function h(t) {
        let { onClose: n, transitionState: i, appId: e, guildId: r } = t,
          h = (0, l.e7)([u.Z], () => u.Z.getApplication(e), [e]),
          [m, g] = o.useState(() =>
            u.Z.isFetchingApplication(e) ? { status: 1 } : { status: 0 },
          );
        o.useEffect(() => {
          0 === m.status &&
            (g({ status: 1 }),
            d.ZP.fetchApplication(e)
              .then(() => {
                g({ status: 2 });
              })
              .catch((t) => {
                g({ status: 3, error: t.message });
              }));
        }, [e, m.status]);
        let { subscriptions: P, otps: O } = (0, f.q)(e);
        if (null == h) return null;
        let A = L.intl.formatToPlainString(L.t.XDRjs7, { appName: h.name });
        return (0, a.jsxs)(c.ModalRoot, {
          transitionState: i,
          "aria-label": A,
          size: c.ModalSize.DYNAMIC,
          className: b.modal,
          children: [
            (0, a.jsxs)(c.ModalHeader, {
              className: b.modalHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: b.modalTitle,
                  children: [
                    (0, a.jsx)(_.Z, {}),
                    (0, a.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: A,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: b.modalHeaderLinks,
                  children: [
                    C.wS &&
                      (0, a.jsx)(c.Button, {
                        look: c.ButtonLooks.BLANK,
                        size: c.ButtonSizes.ICON,
                        color: c.ButtonColors.TRANSPARENT,
                        "aria-label": L.intl.string(L.t.WqhZsr),
                        onClick: () => {
                          let t = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              N.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                e,
                                E.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, C.JG)(t),
                            (0, c.showToast)(
                              (0, c.createToast)(
                                L.intl.string(L.t["L/PwZW"]),
                                c.ToastType.SUCCESS,
                              ),
                            ),
                            (0, S.X)(e, S.B.STORE_MODAL);
                        },
                        children: (0, a.jsx)(c.LinkIcon, { size: "sm" }),
                      }),
                    (0, a.jsx)(c.ModalCloseButton, {
                      onClick: n,
                      className: b.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: b.scrollerWrapper,
              children: (0, a.jsx)(s.Z, {
                className: b.scroller,
                children: (0, a.jsx)(I.AF, {
                  app: h,
                  guildId: r,
                  subscriptions: P,
                  otps: O,
                }),
              }),
            }),
            (0, a.jsx)(c.ModalFooter, {
              justify: p.Z.Justify.END,
              children: (0, a.jsx)(c.Text, {
                variant: "text-md/normal",
                children:
                  null != h.termsOfServiceUrl || null != h.privacyPolicyUrl
                    ? (0, a.jsx)(T.Z, {
                        termsOfServiceUrl: h.termsOfServiceUrl,
                        privacyPolicyUrl: h.privacyPolicyUrl,
                      })
                    : L.intl.string(L.t["3ZY+0N"]),
              }),
            }),
          ],
        });
      }
      ((r = e || (e = {}))[(r.NONE = 0)] = "NONE"),
        (r[(r.FETCHING = 1)] = "FETCHING"),
        (r[(r.FETCHED = 2)] = "FETCHED"),
        (r[(r.ERROR = 3)] = "ERROR");
    },
    533159: function (t, n, i) {
      i.d(n, {
        Z: function () {
          return s;
        },
      });
      var e = i(200651);
      i(192379);
      var r = i(794295),
        a = i(388032),
        o = i(83909);
      function s(t) {
        let { termsOfServiceUrl: n, privacyPolicyUrl: i } = t;
        return null == n && null == i
          ? null
          : (0, e.jsxs)("span", {
              className: o.text,
              children: [
                null != n &&
                  (0, e.jsx)(r.Z, {
                    href: n,
                    children: a.intl.string(a.t["8S0kcH"]),
                  }),
                null != n &&
                  null != i &&
                  (0, e.jsx)("span", {
                    "aria-disabled": "true",
                    children: "•",
                  }),
                null != i &&
                  (0, e.jsx)(r.Z, {
                    href: i,
                    children: a.intl.string(a.t.ZpyeCg),
                  }),
              ],
            });
      }
    },
    886176: function (t, n, i) {
      i.d(n, {
        Z: function () {
          return a;
        },
      });
      var e = i(200651);
      i(192379);
      var r = i(331595);
      function a(t) {
        let {
          width: n = 24,
          height: i = 24,
          color: a = "currentColor",
          ...o
        } = t;
        return (0, e.jsxs)("svg", {
          ...(0, r.Z)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: i,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, e.jsxs)("g", {
              "clip-path": "url(#clip0_2645_182555)",
              children: [
                (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
                  fill: a,
                }),
                (0, e.jsx)("path", {
                  d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                  fill: a,
                }),
              ],
            }),
            (0, e.jsx)("defs", {
              children: (0, e.jsx)("clipPath", {
                id: "clip0_2645_182555",
                children: (0, e.jsx)("rect", {
                  width: "20",
                  height: "20",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
    },
    106976: function (t, n, i) {
      i.d(n, {
        i1: function () {
          return u;
        },
        rx: function () {
          return d;
        },
        sB: function () {
          return p;
        },
        vY: function () {
          return _;
        },
      }),
        i(47120);
      var e = i(570140),
        r = i(821849),
        a = i(307643),
        o = i(981631);
      function s(t) {
        return {
          id: t.id,
          type: o.epS.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: o.POd.APPLICATION,
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
      function l(t) {
        var n;
        return {
          id: t.id,
          sku: s(t),
          summary: t.description,
          description: t.description,
          benefits:
            null !== (n = t.store_listing_benefits) && void 0 !== n ? n : [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function c(t) {
        for (let n of (e.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: t.map(s),
        }),
        e.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: t.map(l),
        }),
        t))
          e.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function d(t, n) {
        e.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: n,
        });
        try {
          var i;
          let r = await a.jz(t, n);
          return (
            e.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: r,
            }),
            c(null !== (i = r.subscription_listings) && void 0 !== i ? i : []),
            r
          );
        } catch (n) {
          e.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: t,
          });
        }
      }
      async function u(t) {
        e.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: t,
        });
        try {
          let n = await a.GF(t);
          e.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: t,
            entitlements: n,
          });
        } catch (n) {
          e.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: t,
          });
        }
      }
      function p(t) {
        e.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: t,
        });
      }
      async function _(t) {
        e.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: t,
        });
        try {
          var n;
          let i = await a.a_(t);
          e.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: i,
          });
          let o =
            null !== (n = i.subscription_listings) && void 0 !== n ? n : [];
          await Promise.all(
            o.map((n) => {
              if (n.subscription_plans[0].id === t)
                return r.GZ(n.id, void 0, void 0, !0);
            }),
          ),
            c(o);
        } catch (t) {}
      }
    },
    488915: function (t, n, i) {
      i.d(n, {
        M: function () {
          return e;
        },
      }),
        i(47120);
      var e,
        r,
        a,
        o,
        s,
        l,
        c = i(512722),
        d = i.n(c),
        u = i(442837),
        p = i(759174),
        _ = i(570140),
        C = i(959546),
        S = i(55563);
      function f(t) {
        return "subscription_listing:".concat(t);
      }
      function I(t) {
        return "application:".concat(t);
      }
      function T(t) {
        return "plan:".concat(t);
      }
      function N(t, n, i) {
        return "entitlement:".concat(t, ":").concat(i, ":").concat(n);
      }
      function E(t, n) {
        return "entitlement:".concat(n, ":").concat(t);
      }
      ((a = e || (e = {}))[(a.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (a[(a.FETCHING = 1)] = "FETCHING"),
        (a[(a.FETCHED = 2)] = "FETCHED");
      let L = new p.h(
          (t) => [I(t.application_id), ...t.subscription_listings_ids.map(f)],
          (t) => t.id,
        ),
        b = new p.h(
          (t) => [I(t.application_id), T(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        h = new p.h(
          (t) => [
            N(t.applicationId, t.isValid(null, S.Z), t.guildId),
            E(t.isValid(null, S.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        m = {},
        g = {};
      function P(t) {
        var n;
        for (let i of (L.set(t.id, t),
        null !== (n = t.subscription_listings) && void 0 !== n ? n : []))
          (function (t) {
            b.set(t.id, t);
          })(i);
      }
      class O extends (r = u.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var n;
          return null !== (n = m[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(t) {
          return L.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let n = L.values(f(t));
          return (
            d()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(t) {
          return b.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return b.values(I(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var n;
          return null !== (n = g[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(t) {
          let n = b.values(T(t));
          return d()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(t, n) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return h.values(N(t, i, n));
        }
        getEntitlementsForGuild(t) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return h.values(E(n, t));
        }
      }
      (l = "ApplicationSubscriptionStore"),
        (s = "displayName") in (o = O)
          ? Object.defineProperty(o, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = l),
        (n.Z = new O(_.Z, {
          LOGOUT: function () {
            L.clear(), b.clear(), h.clear(), (m = {}), (g = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: n, groupListingId: i } = t;
            m[n] = 1;
            let e = L.get(i);
            if (null != e)
              for (let t of e.subscription_listings_ids) b.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: n, groupListing: i } = t;
            (m[n] = 2), P(i);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: n } = t;
            m[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: n } = t;
            g[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: n, entitlements: i } = t;
            (g[n] = 2),
              i.forEach((t) => {
                let n = C.Z.createFromServer(t);
                h.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: n } = t;
            g[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: n } = t;
            P(n);
          },
        }));
    },
    541822: function (t, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      }),
        i(47120);
      var e = i(200651),
        r = i(192379),
        a = i(557533),
        o = i.n(a),
        s = i(349361),
        l = i(366481);
      function c(t) {
        let { children: n, gradientClassName: i, ...a } = t,
          c = r.useRef(null),
          [d, u] = r.useState(!0),
          p = () => {
            var t;
            (null === (t = c.current) || void 0 === t
              ? void 0
              : t.isScrolledToBottom()) === !0
              ? u(!1)
              : u(!0);
          };
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)(s.h2, {
              fade: !0,
              ...a,
              ref: (t) => {
                null != t && ((c.current = t), p());
              },
              onScroll: p,
              children: n,
            }),
            (0, e.jsx)("div", {
              className: o()(l.containerScrollGradient, i),
              "data-shown": d,
            }),
          ],
        });
      }
    },
    941221: function (t, n, i) {
      t.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
        subscriptionCardSubtext: "subscriptionCardSubtext_bfa0f5",
      };
    },
    671702: function (t, n, i) {
      t.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
        scrollerWrapper: "scrollerWrapper_c5ad85",
        scroller: "scroller_c5ad85",
      };
    },
    978733: function (t, n, i) {
      t.exports = { btnContent: "btnContent_cdaed4" };
    },
    755522: function (t, n, i) {
      t.exports = { heading: "heading_fcab0f" };
    },
    83909: function (t, n, i) {
      t.exports = { text: "text_b628d6" };
    },
    366481: function (t, n, i) {
      t.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    422235: function (t, n, i) {
      t.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    134992: function (t, n, i) {
      t.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
    789864: function (t, n, i) {
      t.exports = {
        container: "container_f91bb7",
        image: "image_f91bb7",
        description: "description_f91bb7",
        card: "card_f91bb7",
        body: "body_f91bb7",
        purchaseBtn: "purchaseBtn_f91bb7",
        benefits: "benefits_f91bb7",
        benefitsContainer: "benefitsContainer_f91bb7",
        benefitsList: "benefitsList_f91bb7",
        cardBenefit: "cardBenefit_f91bb7",
        cardBenefitIcon: "cardBenefitIcon_f91bb7",
        benefitsSummary: "benefitsSummary_f91bb7",
      };
    },
    717729: function (t, n, i) {
      t.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=6530d3fb5f875ef09135.js.map
