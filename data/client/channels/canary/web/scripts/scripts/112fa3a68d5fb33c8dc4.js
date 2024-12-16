"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69796"],
  {
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return p;
        },
      });
      var l = t(200651);
      t(192379);
      var o = t(442837),
        r = t(481060),
        a = t(264043),
        i = t(812206),
        s = t(352057),
        c = t(757746),
        d = t(572004),
        u = t(601911),
        m = t(504211),
        x = t(533159),
        h = t(981631),
        v = t(388032),
        f = t(671702),
        _ = t(689762);
      function p(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: p,
            onClose: j,
            onHeaderTitleClick: N,
            children: I,
            footer: g,
          } = e,
          S = (0, s.h$)({ location: "store_modal" }),
          B = (0, o.e7)(
            [i.Z, a.Z],
            () => {
              var e;
              return null !== (e = i.Z.getApplication(n)) && void 0 !== e
                ? e
                : a.Z.getApplicationRecord(n);
            },
            [n],
          ),
          { data: k } = (0, c.Z)(t);
        if (null == B) return null;
        let R = (0, u.y)(B, 25),
          { termsOfServiceUrl: C, privacyPolicyUrl: T } = B;
        return (null == k ? void 0 : k.applicationId) !== n
          ? (0, l.jsxs)(r.ModalRoot, {
              transitionState: p,
              size: r.ModalSize.SMALL,
              children: [
                (0, l.jsxs)(r.ModalContent, {
                  className: _.content,
                  children: [
                    (0, l.jsx)(r.ModalCloseButton, {
                      onClick: j,
                      className: f.modalCloseBtn,
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-lg/semibold",
                      color: "header-primary",
                      className: _.unavailableTitle,
                      children: v.intl.string(v.t["0Bf80N"]),
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: _.unavailableBody,
                      children: v.intl.string(v.t.omH3bm),
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalFooter, {
                  children: (0, l.jsx)(r.Button, {
                    className: _.button,
                    color: r.Button.Colors.BRAND,
                    onClick: j,
                    size: r.Button.Sizes.LARGE,
                    children: v.intl.string(v.t.BddRzc),
                  }),
                }),
              ],
            })
          : (0, l.jsxs)(r.ModalRoot, {
              transitionState: p,
              size: r.ModalSize.DYNAMIC,
              className: _.modal,
              children: [
                (0, l.jsxs)(r.ModalHeader, {
                  className: f.modalHeader,
                  children: [
                    (0, l.jsxs)(r.Clickable, {
                      className: f.modalTitle,
                      onClick: N,
                      children: [
                        null != R &&
                          (0, l.jsx)("img", {
                            src: R.href,
                            alt: "",
                            className: _.appIcon,
                          }),
                        (0, l.jsx)(r.Heading, {
                          variant: "heading-md/semibold",
                          children: B.name,
                        }),
                      ],
                    }),
                    (0, l.jsx)(r.ModalCloseButton, {
                      onClick: j,
                      className: f.modalCloseBtn,
                    }),
                  ],
                }),
                I,
                (0, l.jsxs)(r.ModalFooter, {
                  className: _.footer,
                  children: [
                    null != C || null != T
                      ? (0, l.jsx)(r.Text, {
                          color: "header-primary",
                          variant: "text-sm/normal",
                          children: (0, l.jsx)(x.Z, {
                            termsOfServiceUrl: C,
                            privacyPolicyUrl: T,
                          }),
                        })
                      : (0, l.jsx)(r.Text, {
                          color: "header-primary",
                          variant: "text-xs/normal",
                          children: v.intl.string(v.t["3ZY+0N"]),
                        }),
                    (0, l.jsxs)("div", {
                      className: _.footerButtons,
                      children: [
                        d.wS &&
                          (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.FILLED,
                            size: r.Button.Sizes.ICON,
                            color: r.Button.Colors.PRIMARY,
                            "aria-label": v.intl.string(v.t.WqhZsr),
                            className: _.linkButton,
                            innerClassName: _.innerLinkButton,
                            onClick: () => {
                              let e = ""
                                .concat(location.protocol, "//")
                                .concat(location.host)
                                .concat(
                                  S
                                    ? h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                        n,
                                        t,
                                      )
                                    : h.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                        n,
                                        t,
                                      ),
                                );
                              (0, d.JG)(e),
                                (0, r.showToast)(
                                  (0, r.createToast)(
                                    v.intl.string(v.t["L/PwZW"]),
                                    r.ToastType.SUCCESS,
                                  ),
                                ),
                                (0, m.X)(n, m.B.DETAILS_MODAL, t);
                            },
                            children: (0, l.jsx)(r.LinkIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          }),
                        g,
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    147496: function (e, n, t) {
      t.r(n),
        t.d(n, {
          ItemDetailsModal: function () {
            return _;
          },
        });
      var l = t(200651);
      t(192379);
      var o = t(752843),
        r = t(442837),
        a = t(481060),
        i = t(55563),
        s = t(551428),
        c = t(73346),
        d = t(591759),
        u = t(110742),
        m = t(886253),
        x = t(680005),
        h = t(938337),
        v = t(981631),
        f = t(388032);
      function _(e) {
        var n, t, _, p;
        let {
            onClose: j,
            transitionState: N,
            skuId: I,
            appId: g,
            onHeaderTitleClick: S,
          } = e,
          B = (0, r.e7)([s.Z], () => s.Z.getForSKU(I), [I]),
          k = (0, r.e7)([i.Z], () => i.Z.get(I), [I]),
          R = (0, u.M)(I);
        if (null == k) return null;
        let C = null !== (t = k.name) && void 0 !== t ? t : "",
          T =
            null !==
              (_ =
                null == B
                  ? void 0
                  : null === (n = B.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== _
              ? _
              : void 0,
          E =
            (null == B ? void 0 : B.headerBackground) != null &&
            null !==
              (p = d.Z.toURLSafe((0, c._W)(g, B.headerBackground, 256))) &&
            void 0 !== p
              ? p
              : void 0,
          Z = k.type === v.epS.DURABLE && R,
          b =
            k.type === v.epS.DURABLE
              ? Z
                ? f.intl.string(f.t.bm82mp)
                : f.intl.string(f.t["6gprwc"])
              : void 0,
          { price: L } = k;
        return null == L
          ? null
          : (0, l.jsx)(m.A, {
              appId: g,
              skuId: k.id,
              transitionState: N,
              onHeaderTitleClick: null != S ? S : j,
              onClose: j,
              footer: (0, l.jsx)(x.YG, { appId: g, sku: k }),
              children: (0, l.jsx)(h.i, {
                appId: g,
                skuId: k.id,
                title: C,
                description: T,
                imgSrc: E,
                tag: null != b ? (0, l.jsx)(o.V, { text: b }) : void 0,
                FallbackIcon: a.TicketIcon,
              }),
            });
      }
    },
    938337: function (e, n, t) {
      t.d(n, {
        i: function () {
          return c;
        },
      });
      var l = t(200651),
        o = t(192379),
        r = t(512100),
        a = t(906732),
        i = t(626135),
        s = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, a.ZP)();
        return (
          o.useEffect(() => {
            i.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, l.jsx)(r.u, { ...c })
        );
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        o = t(558381),
        r = t(551428);
      let a = (0, l.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, o.km)(n) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var o = t(409794),
        r = t(777207),
        a = t(541822),
        i = t(330711),
        s = t(189090);
      function c(e) {
        let {
            benefits: n,
            description: t,
            imgSrc: c,
            title: d,
            tag: u,
            FallbackIcon: m,
          } = e,
          x =
            null != c
              ? { "--custom-background-url": "url(".concat(c.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: s.container,
          children: (0, l.jsx)(a.Z, {
            className: s.scroller,
            children: (0, l.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: s.headerBackground,
                      style: x,
                    }),
                    (0, l.jsx)("div", {
                      className: s.headerImage,
                      children:
                        null != c
                          ? (0, l.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, l.jsx)(m, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: s.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: s.details,
                      children: [
                        null != u && (0, l.jsx)("div", { children: u }),
                        (0, l.jsx)(o.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: d,
                        }),
                        null != t &&
                          "" !== t &&
                          (0, l.jsx)(r.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: s.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, l.jsxs)("div", {
                        className: s.benefits,
                        children: [
                          (0, l.jsx)(r.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: i.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                          }),
                          n,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    752843: function (e, n, t) {
      t.d(n, {
        V: function () {
          return u;
        },
        Z: function () {
          return d;
        },
      });
      var l = t(200651);
      t(192379);
      var o = t(628028),
        r = t(220427),
        a = t(777207),
        i = t(692547),
        s = t(330711),
        c = t(103665);
      function d(e) {
        let { type: n } = e;
        return (0, l.jsx)(u, {
          icon:
            "user" === n
              ? (0, l.jsx)(r.t, {
                  size: "xxs",
                  color: i.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(o.Q, {
                  size: "xxs",
                  color: i.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function u(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: c.container,
          children: [
            n,
            (0, l.jsx)(a.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: t,
            }),
          ],
        });
      }
    },
    689762: function (e, n, t) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
        content: "content_c48629",
        unavailableTitle: "unavailableTitle_c48629",
        unavailableBody: "unavailableBody_c48629",
        button: "button_c48629",
      };
    },
    189090: function (e, n, t) {
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
    103665: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
  },
]);
//# sourceMappingURL=112fa3a68d5fb33c8dc4.js.map
