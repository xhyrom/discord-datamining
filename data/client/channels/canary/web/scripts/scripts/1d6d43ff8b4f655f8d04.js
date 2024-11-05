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
      var r = t(200651);
      t(192379);
      var o = t(442837),
        l = t(481060),
        i = t(264043),
        s = t(812206),
        a = t(572004),
        c = t(601911),
        d = t(504211),
        u = t(533159),
        x = t(981631),
        m = t(388032),
        h = t(213891),
        f = t(566809);
      function p(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: p,
            onClose: v,
            onHeaderTitleClick: _,
            children: j,
            footer: I,
          } = e,
          N = (0, o.e7)(
            [s.Z, i.Z],
            () => {
              var e;
              return null !== (e = s.Z.getApplication(n)) && void 0 !== e
                ? e
                : i.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == N) return null;
        let g = (0, c.y)(N, 25),
          { termsOfServiceUrl: k, privacyPolicyUrl: R } = N;
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: p,
          size: l.ModalSize.DYNAMIC,
          className: f.modal,
          children: [
            (0, r.jsxs)(l.ModalHeader, {
              className: h.modalHeader,
              children: [
                (0, r.jsxs)(l.Clickable, {
                  className: h.modalTitle,
                  onClick: _,
                  children: [
                    null != g &&
                      (0, r.jsx)("img", {
                        src: g.href,
                        alt: "",
                        className: f.appIcon,
                      }),
                    (0, r.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: N.name,
                    }),
                  ],
                }),
                (0, r.jsx)(l.ModalCloseButton, {
                  onClick: v,
                  className: h.modalCloseBtn,
                }),
              ],
            }),
            j,
            (0, r.jsxs)(l.ModalFooter, {
              className: f.footer,
              children: [
                null != k || null != R
                  ? (0, r.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(u.Z, {
                        termsOfServiceUrl: k,
                        privacyPolicyUrl: R,
                      }),
                    })
                  : (0, r.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: m.intl.string(m.t["3ZY+0N"]),
                    }),
                (0, r.jsxs)("div", {
                  className: f.footerButtons,
                  children: [
                    a.wS &&
                      (0, r.jsx)(l.Button, {
                        look: l.Button.Looks.FILLED,
                        size: l.Button.Sizes.ICON,
                        color: l.Button.Colors.PRIMARY,
                        "aria-label": m.intl.string(m.t.WqhZsr),
                        className: f.linkButton,
                        innerClassName: f.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                n,
                                t,
                              ),
                            );
                          (0, a.JG)(e),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                m.intl.string(m.t["L/PwZW"]),
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, d.X)(n, d.B.DETAILS_MODAL, t);
                        },
                        children: (0, r.jsx)(l.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    I,
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
            return v;
          },
        });
      var r = t(200651);
      t(192379);
      var o = t(752843),
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
        p = t(388032);
      function v(e) {
        var n, t, v, _;
        let {
            onClose: j,
            transitionState: I,
            skuId: N,
            appId: g,
            onHeaderTitleClick: k,
          } = e,
          R = (0, l.e7)([a.Z], () => a.Z.getForSKU(N), [N]),
          S = (0, l.e7)([s.Z], () => s.Z.get(N), [N]),
          T = (0, u.M)(N);
        if (null == S) return null;
        let C = null !== (t = S.name) && void 0 !== t ? t : "",
          B =
            null !==
              (v =
                null == R
                  ? void 0
                  : null === (n = R.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== v
              ? v
              : void 0,
          E =
            (null == R ? void 0 : R.headerBackground) != null &&
            null !==
              (_ = d.Z.toURLSafe((0, c._W)(g, R.headerBackground, 256))) &&
            void 0 !== _
              ? _
              : void 0,
          Z = S.type === f.epS.DURABLE && T,
          A =
            S.type === f.epS.DURABLE
              ? Z
                ? p.intl.string(p.t.bm82mp)
                : p.intl.string(p.t["6gprwc"])
              : void 0,
          { price: L } = S;
        return null == L
          ? null
          : (0, r.jsx)(x.A, {
              appId: g,
              skuId: S.id,
              transitionState: I,
              onHeaderTitleClick: null != k ? k : j,
              onClose: j,
              footer: (0, r.jsx)(m.Y, { appId: g, sku: S }),
              children: (0, r.jsx)(h.i, {
                appId: g,
                skuId: S.id,
                title: C,
                description: B,
                imgSrc: E,
                tag: null != A ? (0, r.jsx)(o.V, { text: A }) : void 0,
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
      var r = t(200651),
        o = t(192379),
        l = t(512100),
        i = t(906732),
        s = t(626135),
        a = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, i.ZP)();
        return (
          o.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, r.jsx)(l.u, { ...c })
        );
      }
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return c;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(409794),
        l = t(777207),
        i = t(541822),
        s = t(330711),
        a = t(770561);
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
        return (0, r.jsx)("div", {
          className: a.container,
          children: (0, r.jsx)(i.Z, {
            className: a.scroller,
            children: (0, r.jsxs)("div", {
              className: a.scrollContent,
              children: [
                (0, r.jsxs)("div", {
                  className: a.header,
                  children: [
                    (0, r.jsx)("div", {
                      className: a.headerBackground,
                      style: m,
                    }),
                    (0, r.jsx)("div", {
                      className: a.headerImage,
                      children:
                        null != c
                          ? (0, r.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, r.jsx)(x, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: a.content,
                  children: [
                    (0, r.jsxs)("div", {
                      className: a.details,
                      children: [
                        null != u && (0, r.jsx)("div", { children: u }),
                        (0, r.jsx)(o.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: d,
                        }),
                        null != t &&
                          "" !== t &&
                          (0, r.jsx)(l.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: a.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, r.jsxs)("div", {
                        className: a.benefits,
                        children: [
                          (0, r.jsx)(l.x, {
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
      var r = t(200651);
      t(192379);
      var o = t(628028),
        l = t(220427),
        i = t(777207),
        s = t(692547),
        a = t(330711),
        c = t(350727);
      function d(e) {
        let { type: n } = e;
        return (0, r.jsx)(u, {
          icon:
            "user" === n
              ? (0, r.jsx)(l.t, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, r.jsx)(o.Q, {
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
        return (0, r.jsxs)("div", {
          className: c.container,
          children: [
            n,
            (0, r.jsx)(i.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: t,
            }),
          ],
        });
      }
    },
    566809: function (e, n, t) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    770561: function (e, n, t) {
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
    350727: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
  },
]);
//# sourceMappingURL=1d6d43ff8b4f655f8d04.js.map
