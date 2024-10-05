"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5710"],
  {
    7225: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n(47120);
      var i,
        o,
        a = n(735250),
        r = n(470079),
        c = n(442837),
        s = n(481060),
        l = n(728345),
        d = n(812206),
        _ = n(886176),
        u = n(572004),
        f = n(504211),
        C = n(283836),
        p = n(507608),
        S = n(981631),
        I = n(272242),
        T = n(689938),
        b = n(213891);
      function m(e) {
        let { onClose: t, transitionState: n, appId: i, guildId: o } = e,
          m = (0, c.e7)([d.Z], () => d.Z.getApplication(i), [i]),
          [N, L] = r.useState(() =>
            d.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 },
          ),
          h = r.useRef(null),
          [E, g] = r.useState(!0),
          P = () => {
            var e;
            (null === (e = h.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? g(!1)
              : g(!0);
          };
        r.useEffect(() => {
          0 === N.status &&
            (L({ status: 1 }),
            l.ZP.fetchApplication(i)
              .then(() => {
                L({ status: 2 });
              })
              .catch((e) => {
                L({ status: 3, error: e.message });
              }));
        }, [i, N.status]);
        let { subscriptions: O, otps: A } = (0, C.q)(i);
        if (null == m) return null;
        let F = T.Z.Messages.STOREFRONT_TITLE.format({ appName: m.name });
        return (0, a.jsxs)(s.ModalRoot, {
          transitionState: n,
          "aria-label": F,
          size: s.ModalSize.DYNAMIC,
          className: b.modal,
          children: [
            (0, a.jsxs)(s.ModalHeader, {
              className: b.modalHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: b.modalTitle,
                  children: [
                    (0, a.jsx)(_.Z, {}),
                    (0, a.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      children: F,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: b.modalHeaderLinks,
                  children: [
                    u.wS &&
                      (0, a.jsx)(s.Button, {
                        look: s.ButtonLooks.BLANK,
                        size: s.ButtonSizes.ICON,
                        color: s.ButtonColors.TRANSPARENT,
                        "aria-label": T.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              S.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                i,
                                I.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, u.JG)(e),
                            (0, s.showToast)(
                              (0, s.createToast)(
                                T.Z.Messages.COPIED_LINK,
                                s.ToastType.SUCCESS,
                              ),
                            ),
                            (0, f.X)(i, f.B.STORE_MODAL);
                        },
                        children: (0, a.jsx)(s.LinkIcon, { size: "sm" }),
                      }),
                    (0, a.jsx)(s.ModalCloseButton, {
                      onClick: t,
                      className: b.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(s.ModalContent, {
              scrollerRef: (e) => {
                null != e && ((h.current = e), P());
              },
              onScroll: P,
              children: (0, a.jsx)(p.AF, {
                app: m,
                guildId: o,
                subscriptions: O,
                otps: A,
              }),
            }),
            (0, a.jsx)("div", {
              className: b.containerScrollGradient,
              "data-shown": E,
            }),
          ],
        });
      }
      ((o = i || (i = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED"),
        (o[(o.ERROR = 3)] = "ERROR");
    },
    886176: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(325767);
      function a(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: a = "currentColor",
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, o.Z)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
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
    106976: function (e, t, n) {
      n.d(t, {
        i1: function () {
          return _;
        },
        rx: function () {
          return d;
        },
        sB: function () {
          return u;
        },
        vY: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(570140),
        o = n(821849),
        a = n(307643),
        r = n(981631);
      function c(e) {
        return {
          id: e.id,
          type: r.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: r.POd.APPLICATION,
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
          sku: c(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function l(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(c),
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
      async function d(e, t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let o = await a.jz(e, t);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: o,
            }),
            l(null !== (n = o.subscription_listings) && void 0 !== n ? n : []),
            o
          );
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function _(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let t = await a.GF(e);
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
      function u(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function f(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var t;
          let n = await a.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let r =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          for (let t of r)
            t.subscription_plans[0].id === e &&
              (await o.GZ(t.id, void 0, void 0, !0));
          l(r);
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
        a,
        r,
        c,
        s,
        l = n(512722),
        d = n.n(l),
        _ = n(442837),
        u = n(759174),
        f = n(570140),
        C = n(959546),
        p = n(55563);
      function S(e) {
        return "subscription_listing:".concat(e);
      }
      function I(e) {
        return "application:".concat(e);
      }
      function T(e) {
        return "plan:".concat(e);
      }
      function b(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function m(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((a = i || (i = {}))[(a.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (a[(a.FETCHING = 1)] = "FETCHING"),
        (a[(a.FETCHED = 2)] = "FETCHED");
      let N = new u.h(
          (e) => [I(e.application_id), ...e.subscription_listings_ids.map(S)],
          (e) => e.id,
        ),
        L = new u.h(
          (e) => [I(e.application_id), T(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        h = new u.h(
          (e) => [
            b(e.applicationId, e.isValid(null, p.Z), e.guildId),
            m(e.isValid(null, p.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        E = {},
        g = {};
      function P(e) {
        var t;
        for (let n of (N.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            L.set(e.id, e);
          })(n);
      }
      class O extends (o = _.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return N.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = N.values(S(e));
          return (
            d()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return L.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return L.values(I(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = L.values(T(e));
          return d()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return h.values(b(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return h.values(m(t, e));
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
        (t.Z = new O(f.Z, {
          LOGOUT: function () {
            N.clear(), L.clear(), h.clear(), (E = {}), (g = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            E[t] = 1;
            let i = N.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) L.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (E[t] = 2), P(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            E[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            g[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (g[t] = 2),
              n.forEach((e) => {
                let t = C.Z.createFromServer(e);
                h.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            g[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            P(t);
          },
        }));
    },
    335567: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    213891: function (e, t, n) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        containerScrollGradient: "containerScrollGradient_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
      };
    },
    566809: function (e, t, n) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    962083: function (e, t, n) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    132313: function (e, t, n) {
      e.exports = { heading: "heading_fcab0f" };
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
    698117: function (e, t, n) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    529079: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    770561: function (e, t, n) {
      e.exports = {
        container: "container_e8df26",
        header: "header_e8df26",
        headerBackground: "headerBackground_e8df26",
        headerImage: "headerImage_e8df26",
        scroller: "scroller_e8df26",
        scrollContent: "scrollContent_e8df26",
        content: "content_e8df26",
        details: "details_e8df26",
        benefits: "benefits_e8df26",
        description: "description_e8df26",
      };
    },
    147333: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
    56273: function (e, t, n) {
      e.exports = {
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
    350727: function (e, t, n) {
      e.exports = { container: "container_c99f26" };
    },
    103077: function (e, t, n) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=cfd85dbc4e7611be4815.js.map
