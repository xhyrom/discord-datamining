"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30840"],
  {
    150414: function (t, e, n) {
      n.d(e, {
        q: function () {
          return a;
        },
      });
      var i = n(73346),
        o = n(591759);
      function a(t, e, n) {
        var a;
        return null !== (a = o.Z.toURLSafe((0, i._W)(t, e, n))) && void 0 !== a
          ? a
          : void 0;
      }
    },
    7225: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return E;
          },
        }),
        n(47120);
      var i,
        o,
        a = n(200651),
        r = n(192379),
        c = n(541822),
        s = n(442837),
        l = n(481060),
        d = n(728345),
        u = n(812206),
        _ = n(600164),
        p = n(886176),
        C = n(572004),
        f = n(504211),
        S = n(283836),
        I = n(507608),
        T = n(533159),
        b = n(981631),
        m = n(272242),
        N = n(388032),
        L = n(775012);
      function E(t) {
        let { onClose: e, transitionState: n, appId: i, guildId: o } = t,
          E = (0, s.e7)([u.Z], () => u.Z.getApplication(i), [i]),
          [h, g] = r.useState(() =>
            u.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 },
          );
        r.useEffect(() => {
          0 === h.status &&
            (g({ status: 1 }),
            d.ZP.fetchApplication(i)
              .then(() => {
                g({ status: 2 });
              })
              .catch((t) => {
                g({ status: 3, error: t.message });
              }));
        }, [i, h.status]);
        let { subscriptions: P, otps: O } = (0, S.q)(i);
        if (null == E) return null;
        let A = N.intl.formatToPlainString(N.t.XDRjs7, { appName: E.name });
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: n,
          "aria-label": A,
          size: l.ModalSize.DYNAMIC,
          className: L.modal,
          children: [
            (0, a.jsxs)(l.ModalHeader, {
              className: L.modalHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: L.modalTitle,
                  children: [
                    (0, a.jsx)(p.Z, {}),
                    (0, a.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: A,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: L.modalHeaderLinks,
                  children: [
                    C.wS &&
                      (0, a.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        color: l.ButtonColors.TRANSPARENT,
                        "aria-label": N.intl.string(N.t.WqhZsr),
                        onClick: () => {
                          let t = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              b.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                i,
                                m.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, C.JG)(t),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                N.intl.string(N.t["L/PwZW"]),
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, f.X)(i, f.B.STORE_MODAL);
                        },
                        children: (0, a.jsx)(l.LinkIcon, { size: "sm" }),
                      }),
                    (0, a.jsx)(l.ModalCloseButton, {
                      onClick: e,
                      className: L.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: L.scrollerWrapper,
              children: (0, a.jsx)(c.Z, {
                className: L.scroller,
                children: (0, a.jsx)(I.AF, {
                  app: E,
                  guildId: o,
                  subscriptions: P,
                  otps: O,
                }),
              }),
            }),
            (0, a.jsx)(l.ModalFooter, {
              justify: _.Z.Justify.END,
              children: (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != E.termsOfServiceUrl || null != E.privacyPolicyUrl
                    ? (0, a.jsx)(T.Z, {
                        termsOfServiceUrl: E.termsOfServiceUrl,
                        privacyPolicyUrl: E.privacyPolicyUrl,
                      })
                    : N.intl.string(N.t["3ZY+0N"]),
              }),
            }),
          ],
        });
      }
      ((o = i || (i = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED"),
        (o[(o.ERROR = 3)] = "ERROR");
    },
    886176: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(325767);
      function a(t) {
        let {
          width: e = 24,
          height: n = 24,
          color: a = "currentColor",
          ...r
        } = t;
        return (0, i.jsxs)("svg", {
          ...(0, o.Z)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, i.jsxs)("g", {
              "clip-path": "url(#clip0_2645_182555)",
              children: [
                (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M13.6698 8.91016C14.5646 10.1567 16.3407 10.3342 17.4866 9.44283C17.4957 9.46624 17.5008 9.49191 17.5008 9.51916V15.8337C17.5008 17.2144 16.3815 18.3337 15.0008 18.3337H12.7092C12.5941 18.3337 12.5008 18.2404 12.5008 18.1253V13.3337C12.5008 12.4132 11.7547 11.667 10.8342 11.667H9.16748C8.24699 11.667 7.5008 12.4132 7.5008 13.3337V18.1253C7.5008 18.2404 7.40753 18.3337 7.29247 18.3337H5.0008C3.62009 18.3337 2.5008 17.2144 2.5008 15.8337V9.51916C2.5008 9.36341 2.66628 9.26158 2.81091 9.31949C3.23542 9.48933 3.70172 9.58366 4.19593 9.58366C5.27336 9.58366 6.24385 9.12583 6.92345 8.39408C7.0135 8.29708 7.17004 8.29679 7.26039 8.39349C7.94479 9.12583 8.91932 9.58366 10.0008 9.58366C11.0823 9.58366 12.0568 9.12583 12.7412 8.39349C12.8316 8.29679 12.9882 8.29708 13.0782 8.39408C13.2565 8.58599 13.4548 8.75916 13.6698 8.91016ZM11.7497 6.67891C9.42957 5.8204 9.4179 2.5511 11.7147 1.6683C11.699 1.66743 11.6833 1.66699 11.6675 1.66699H8.33415C7.87391 1.66699 7.50082 2.04009 7.50082 2.50033V5.83366C7.50082 5.87681 7.50191 5.9197 7.50407 5.96231C7.52181 6.31232 7.61153 6.64333 7.75873 6.94085C7.77282 6.96931 7.78743 6.99747 7.80255 7.02531C8.2259 7.80462 9.05157 8.33366 10.0008 8.33366C10.984 8.33366 11.8346 7.76614 12.2429 6.94084L12.2543 6.91751C12.2613 6.90286 12.2682 6.88812 12.2751 6.87331L11.7497 6.67891ZM15.8231 8.3336C15.4338 8.32949 15.0467 8.10931 14.8853 7.67305L14.4606 6.52524C14.2917 6.06904 13.9321 5.70936 13.4759 5.54055L13.3342 5.4881V2.84588L13.4759 2.79343C13.9321 2.62463 14.2917 2.26494 14.4606 1.80874L14.5131 1.66699H15.2462C16.3397 1.66699 17.3062 2.37762 17.6324 3.42131L18.1647 5.12491C18.2057 5.25598 18.2352 5.38724 18.254 5.51775L18.1924 5.54055C17.7361 5.70936 17.3765 6.06904 17.2077 6.52524L16.783 7.67305C16.627 8.09458 16.2603 8.31438 15.8847 8.33245C15.8642 8.33308 15.8437 8.33346 15.8231 8.3336ZM12.5008 3.15424V5.17974L12.3281 5.11583C11.4472 4.78989 11.4472 3.54409 12.3281 3.21816L12.5008 3.15424ZM4.75546 1.66699C3.662 1.66699 2.69541 2.37762 2.36926 3.4213L1.83688 5.12491C1.52876 6.11092 1.8679 7.1068 2.56708 7.72187C2.99643 8.09957 3.56156 8.33366 4.19593 8.33366C5.13437 8.33366 5.95065 7.81064 6.36917 7.04019C6.38619 7.00888 6.40255 6.97714 6.41823 6.94502C6.57788 6.618 6.66748 6.25052 6.66748 5.86211V2.50033C6.66748 2.04009 6.29438 1.66699 5.83415 1.66699H4.75546Z",
                  fill: a,
                }),
                (0, i.jsx)("path", {
                  d: "M14.8838 0.660607C15.2097 -0.220202 16.4556 -0.220202 16.7815 0.660607L17.2062 1.80842C17.375 2.26462 17.7347 2.6243 18.1909 2.79311L19.3387 3.21783C20.2195 3.54377 20.2195 4.78957 19.3387 5.1155L18.1909 5.54023C17.7347 5.70903 17.375 6.06872 17.2062 6.52492L16.7815 7.67272C16.4556 8.5535 15.2097 8.5535 14.8838 7.67272L14.4591 6.52492C14.2903 6.06872 13.9306 5.70903 13.4744 5.54023L12.3266 5.1155C11.4458 4.78957 11.4458 3.54377 12.3266 3.21783L13.4744 2.79311C13.9306 2.6243 14.2903 2.26462 14.4591 1.80842L14.8838 0.660607Z",
                  fill: a,
                }),
              ],
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsx)("clipPath", {
                id: "clip0_2645_182555",
                children: (0, i.jsx)("rect", {
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
    106976: function (t, e, n) {
      n.d(e, {
        i1: function () {
          return u;
        },
        rx: function () {
          return d;
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
        a = n(307643),
        r = n(981631);
      function c(t) {
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
      function s(t) {
        var e;
        return {
          id: t.id,
          sku: c(t),
          summary: t.description,
          description: t.description,
          benefits:
            null !== (e = t.store_listing_benefits) && void 0 !== e ? e : [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function l(t) {
        for (let e of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: t.map(c),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: t.map(s),
        }),
        t))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: e.id,
            subscriptionPlans: e.subscription_plans,
          });
      }
      async function d(t, e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: e,
        });
        try {
          var n;
          let o = await a.jz(t, e);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: o,
            }),
            l(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
            o
          );
        } catch (e) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: t,
          });
        }
      }
      async function u(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: t,
        });
        try {
          let e = await a.GF(t);
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
      function _(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: t,
        });
      }
      async function p(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: t,
        });
        try {
          var e;
          let n = await a.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let r =
            null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
          for (let e of r)
            e.subscription_plans[0].id === t &&
              (await o.GZ(e.id, void 0, void 0, !0));
          l(r);
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
        a,
        r,
        c,
        s,
        l = n(512722),
        d = n.n(l),
        u = n(442837),
        _ = n(759174),
        p = n(570140),
        C = n(959546),
        f = n(55563);
      function S(t) {
        return "subscription_listing:".concat(t);
      }
      function I(t) {
        return "application:".concat(t);
      }
      function T(t) {
        return "plan:".concat(t);
      }
      function b(t, e, n) {
        return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
      }
      function m(t, e) {
        return "entitlement:".concat(e, ":").concat(t);
      }
      ((a = i || (i = {}))[(a.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (a[(a.FETCHING = 1)] = "FETCHING"),
        (a[(a.FETCHED = 2)] = "FETCHED");
      let N = new _.h(
          (t) => [I(t.application_id), ...t.subscription_listings_ids.map(S)],
          (t) => t.id,
        ),
        L = new _.h(
          (t) => [I(t.application_id), T(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        E = new _.h(
          (t) => [
            b(t.applicationId, t.isValid(null, f.Z), t.guildId),
            m(t.isValid(null, f.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        h = {},
        g = {};
      function P(t) {
        var e;
        for (let n of (N.set(t.id, t),
        null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
          (function (t) {
            L.set(t.id, t);
          })(n);
      }
      class O extends (o = u.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var e;
          return null !== (e = h[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionGroupListing(t) {
          return N.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let e = N.values(S(t));
          return (
            d()(e.length <= 1, "Found multiple group listings for listing"),
            e[0]
          );
        }
        getSubscriptionListing(t) {
          return L.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return L.values(I(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var e;
          return null !== (e = g[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionListingForPlan(t) {
          let e = L.values(T(t));
          return d()(e.length <= 1, "Found multiple listings for plan"), e[0];
        }
        getApplicationEntitlementsForGuild(t, e) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return E.values(b(t, n, e));
        }
        getEntitlementsForGuild(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return E.values(m(e, t));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (c = "displayName") in (r = O)
          ? Object.defineProperty(r, c, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[c] = s),
        (e.Z = new O(p.Z, {
          LOGOUT: function () {
            N.clear(), L.clear(), E.clear(), (h = {}), (g = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: n } = t;
            h[e] = 1;
            let i = N.get(n);
            if (null != i)
              for (let t of i.subscription_listings_ids) L.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: e, groupListing: n } = t;
            (h[e] = 2), P(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: e } = t;
            h[e] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: e } = t;
            g[e] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: e, entitlements: n } = t;
            (g[e] = 2),
              n.forEach((t) => {
                let e = C.Z.createFromServer(t);
                E.set(e.id, e);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: e } = t;
            g[e] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: e } = t;
            P(e);
          },
        }));
    },
    800879: function (t, e, n) {
      t.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
      };
    },
    775012: function (t, e, n) {
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
    968629: function (t, e, n) {
      t.exports = { btnContent: "btnContent_cdaed4" };
    },
    920633: function (t, e, n) {
      t.exports = { heading: "heading_fcab0f" };
    },
    266377: function (t, e, n) {
      t.exports = { text: "text_b628d6" };
    },
    652045: function (t, e, n) {
      t.exports = {
        back: "back_e27221",
        primaryIcon: "primaryIcon_e27221",
        button: "button_e27221",
      };
    },
    295082: function (t, e, n) {
      t.exports = {
        paymentModalLockIcon: "paymentModalLockIcon_f6be15",
        lockIcon: "lockIcon_f6be15",
      };
    },
    854724: function (t, e, n) {
      t.exports = {
        body: "body_bf926b",
        sliderBody: "sliderBody_bf926b",
        sliderBodyLarge: "sliderBodyLarge_bf926b",
      };
    },
    53787: function (t, e, n) {
      t.exports = {
        container: "container_a3545a",
        header: "header_a3545a",
        divider: "divider_a3545a",
        benefitsContainer: "benefitsContainer_a3545a",
        benefit: "benefit_a3545a",
      };
    },
    655949: function (t, e, n) {
      t.exports = {
        icon: "icon_e10dab",
        small: "small_e10dab",
        medium: "medium_e10dab",
      };
    },
    421585: function (t, e, n) {
      t.exports = {
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
    140936: function (t, e, n) {
      t.exports = {
        container: "container_ffcaea",
        emojiContainer: "emojiContainer_ffcaea",
        name: "name_ffcaea",
        infoContainer: "infoContainer_ffcaea",
      };
    },
    875804: function (t, e, n) {
      t.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    13951: function (t, e, n) {
      t.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    917626: function (t, e, n) {
      t.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
    377199: function (t, e, n) {
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
    847987: function (t, e, n) {
      t.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=1a3873d8c06a6669ca17.js.map
