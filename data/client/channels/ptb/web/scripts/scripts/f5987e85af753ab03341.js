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
      var o = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        i = t(264043),
        s = t(812206),
        a = t(352057),
        c = t(572004),
        d = t(601911),
        u = t(504211),
        x = t(533159),
        m = t(981631),
        h = t(388032),
        f = t(671702),
        _ = t(689762);
      function p(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: p,
            onClose: v,
            onHeaderTitleClick: j,
            children: I,
            footer: N,
          } = e,
          S = (0, a.h$)({ location: "store_modal" }),
          g = (0, r.e7)(
            [s.Z, i.Z],
            () => {
              var e;
              return null !== (e = s.Z.getApplication(n)) && void 0 !== e
                ? e
                : i.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == g) return null;
        let k = (0, d.y)(g, 25),
          { termsOfServiceUrl: R, privacyPolicyUrl: T } = g;
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: p,
          size: l.ModalSize.DYNAMIC,
          className: _.modal,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: f.modalHeader,
              children: [
                (0, o.jsxs)(l.Clickable, {
                  className: f.modalTitle,
                  onClick: j,
                  children: [
                    null != k &&
                      (0, o.jsx)("img", {
                        src: k.href,
                        alt: "",
                        className: _.appIcon,
                      }),
                    (0, o.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: g.name,
                    }),
                  ],
                }),
                (0, o.jsx)(l.ModalCloseButton, {
                  onClick: v,
                  className: f.modalCloseBtn,
                }),
              ],
            }),
            I,
            (0, o.jsxs)(l.ModalFooter, {
              className: _.footer,
              children: [
                null != R || null != T
                  ? (0, o.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, o.jsx)(x.Z, {
                        termsOfServiceUrl: R,
                        privacyPolicyUrl: T,
                      }),
                    })
                  : (0, o.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: h.intl.string(h.t["3ZY+0N"]),
                    }),
                (0, o.jsxs)("div", {
                  className: _.footerButtons,
                  children: [
                    c.wS &&
                      (0, o.jsx)(l.Button, {
                        look: l.Button.Looks.FILLED,
                        size: l.Button.Sizes.ICON,
                        color: l.Button.Colors.PRIMARY,
                        "aria-label": h.intl.string(h.t.WqhZsr),
                        className: _.linkButton,
                        innerClassName: _.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              S
                                ? m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                    n,
                                    t,
                                  )
                                : m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                    n,
                                    t,
                                  ),
                            );
                          (0, c.JG)(e),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                h.intl.string(h.t["L/PwZW"]),
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, u.X)(n, u.B.DETAILS_MODAL, t);
                        },
                        children: (0, o.jsx)(l.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    N,
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
            return p;
          },
        });
      var o = t(200651);
      t(192379);
      var r = t(752843),
        l = t(442837),
        i = t(481060),
        s = t(55563),
        a = t(551428),
        c = t(73346),
        d = t(591759),
        u = t(110742),
        x = t(886253),
        m = t(680005),
        h = t(938337),
        f = t(981631),
        _ = t(388032);
      function p(e) {
        var n, t, p, v;
        let {
            onClose: j,
            transitionState: I,
            skuId: N,
            appId: S,
            onHeaderTitleClick: g,
          } = e,
          k = (0, l.e7)([a.Z], () => a.Z.getForSKU(N), [N]),
          R = (0, l.e7)([s.Z], () => s.Z.get(N), [N]),
          T = (0, u.M)(N);
        if (null == R) return null;
        let C = null !== (t = R.name) && void 0 !== t ? t : "",
          E =
            null !==
              (p =
                null == k
                  ? void 0
                  : null === (n = k.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== p
              ? p
              : void 0,
          B =
            (null == k ? void 0 : k.headerBackground) != null &&
            null !==
              (v = d.Z.toURLSafe((0, c._W)(S, k.headerBackground, 256))) &&
            void 0 !== v
              ? v
              : void 0,
          Z = R.type === f.epS.DURABLE && T,
          O =
            R.type === f.epS.DURABLE
              ? Z
                ? _.intl.string(_.t.bm82mp)
                : _.intl.string(_.t["6gprwc"])
              : void 0,
          { price: A } = R;
        return null == A
          ? null
          : (0, o.jsx)(x.A, {
              appId: S,
              skuId: R.id,
              transitionState: I,
              onHeaderTitleClick: null != g ? g : j,
              onClose: j,
              footer: (0, o.jsx)(m.YG, { appId: S, sku: R }),
              children: (0, o.jsx)(h.i, {
                appId: S,
                skuId: R.id,
                title: C,
                description: E,
                imgSrc: B,
                tag: null != O ? (0, o.jsx)(r.V, { text: O }) : void 0,
                FallbackIcon: i.TicketIcon,
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
      var o = t(200651),
        r = t(192379),
        l = t(512100),
        i = t(906732),
        s = t(626135),
        a = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, i.ZP)();
        return (
          r.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, o.jsx)(l.u, { ...c })
        );
      }
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return c;
        },
      });
      var o = t(200651);
      t(192379);
      var r = t(409794),
        l = t(777207),
        i = t(541822),
        s = t(330711),
        a = t(189090);
      function c(e) {
        let {
            benefits: n,
            description: t,
            imgSrc: c,
            title: d,
            tag: u,
            FallbackIcon: x,
          } = e,
          m =
            null != c
              ? { "--custom-background-url": "url(".concat(c.toString(), ")") }
              : void 0;
        return (0, o.jsx)("div", {
          className: a.container,
          children: (0, o.jsx)(i.Z, {
            className: a.scroller,
            children: (0, o.jsxs)("div", {
              className: a.scrollContent,
              children: [
                (0, o.jsxs)("div", {
                  className: a.header,
                  children: [
                    (0, o.jsx)("div", {
                      className: a.headerBackground,
                      style: m,
                    }),
                    (0, o.jsx)("div", {
                      className: a.headerImage,
                      children:
                        null != c
                          ? (0, o.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, o.jsx)(x, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: a.content,
                  children: [
                    (0, o.jsxs)("div", {
                      className: a.details,
                      children: [
                        null != u && (0, o.jsx)("div", { children: u }),
                        (0, o.jsx)(r.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: d,
                        }),
                        null != t &&
                          "" !== t &&
                          (0, o.jsx)(l.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: a.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, o.jsxs)("div", {
                        className: a.benefits,
                        children: [
                          (0, o.jsx)(l.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
      var o = t(200651);
      t(192379);
      var r = t(628028),
        l = t(220427),
        i = t(777207),
        s = t(692547),
        a = t(330711),
        c = t(103665);
      function d(e) {
        let { type: n } = e;
        return (0, o.jsx)(u, {
          icon:
            "user" === n
              ? (0, o.jsx)(l.t, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, o.jsx)(r.Q, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? a.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : a.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function u(e) {
        let { icon: n, text: t } = e;
        return (0, o.jsxs)("div", {
          className: c.container,
          children: [
            n,
            (0, o.jsx)(i.x, {
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
//# sourceMappingURL=f5987e85af753ab03341.js.map
