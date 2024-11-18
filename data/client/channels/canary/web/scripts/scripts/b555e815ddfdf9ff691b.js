"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69796"],
  {
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return _;
        },
      });
      var r = t(200651);
      t(192379);
      var o = t(442837),
        l = t(481060),
        i = t(264043),
        a = t(812206),
        s = t(352057),
        c = t(572004),
        d = t(601911),
        u = t(504211),
        x = t(533159),
        m = t(981631),
        f = t(388032),
        h = t(775012),
        p = t(191046);
      function _(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: _,
            onClose: v,
            onHeaderTitleClick: j,
            children: I,
            footer: g,
          } = e,
          k = (0, s.h)({ location: "store_modal", autoTrackExposure: !1 }),
          N = (0, o.e7)(
            [a.Z, i.Z],
            () => {
              var e;
              return null !== (e = a.Z.getApplication(n)) && void 0 !== e
                ? e
                : i.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == N) return null;
        let E = (0, d.y)(N, 25),
          { termsOfServiceUrl: S, privacyPolicyUrl: C } = N;
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: _,
          size: l.ModalSize.DYNAMIC,
          className: p.modal,
          children: [
            (0, r.jsxs)(l.ModalHeader, {
              className: h.modalHeader,
              children: [
                (0, r.jsxs)(l.Clickable, {
                  className: h.modalTitle,
                  onClick: j,
                  children: [
                    null != E &&
                      (0, r.jsx)("img", {
                        src: E.href,
                        alt: "",
                        className: p.appIcon,
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
            I,
            (0, r.jsxs)(l.ModalFooter, {
              className: p.footer,
              children: [
                null != S || null != C
                  ? (0, r.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(x.Z, {
                        termsOfServiceUrl: S,
                        privacyPolicyUrl: C,
                      }),
                    })
                  : (0, r.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: f.intl.string(f.t["3ZY+0N"]),
                    }),
                (0, r.jsxs)("div", {
                  className: p.footerButtons,
                  children: [
                    c.wS &&
                      (0, r.jsx)(l.Button, {
                        look: l.Button.Looks.FILLED,
                        size: l.Button.Sizes.ICON,
                        color: l.Button.Colors.PRIMARY,
                        "aria-label": f.intl.string(f.t.WqhZsr),
                        className: p.linkButton,
                        innerClassName: p.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              k
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
                                f.intl.string(f.t["L/PwZW"]),
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, u.X)(n, u.B.DETAILS_MODAL, t);
                        },
                        children: (0, r.jsx)(l.LinkIcon, {
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
      var r = t(200651);
      t(192379);
      var o = t(752843),
        l = t(442837),
        i = t(481060),
        a = t(55563),
        s = t(551428),
        c = t(73346),
        d = t(591759),
        u = t(110742),
        x = t(886253),
        m = t(680005),
        f = t(938337),
        h = t(981631),
        p = t(388032);
      function _(e) {
        var n, t, _, v;
        let {
            onClose: j,
            transitionState: I,
            skuId: g,
            appId: k,
            onHeaderTitleClick: N,
          } = e,
          E = (0, l.e7)([s.Z], () => s.Z.getForSKU(g), [g]),
          S = (0, l.e7)([a.Z], () => a.Z.get(g), [g]),
          C = (0, u.M)(g);
        if (null == S) return null;
        let R = null !== (t = S.name) && void 0 !== t ? t : "",
          T =
            null !==
              (_ =
                null == E
                  ? void 0
                  : null === (n = E.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== _
              ? _
              : void 0,
          B =
            (null == E ? void 0 : E.headerBackground) != null &&
            null !==
              (v = d.Z.toURLSafe((0, c._W)(k, E.headerBackground, 256))) &&
            void 0 !== v
              ? v
              : void 0,
          Z = S.type === h.epS.DURABLE && C,
          A =
            S.type === h.epS.DURABLE
              ? Z
                ? p.intl.string(p.t.bm82mp)
                : p.intl.string(p.t["6gprwc"])
              : void 0,
          { price: O } = S;
        return null == O
          ? null
          : (0, r.jsx)(x.A, {
              appId: k,
              skuId: S.id,
              transitionState: I,
              onHeaderTitleClick: null != N ? N : j,
              onClose: j,
              footer: (0, r.jsx)(m.YG, { appId: k, sku: S }),
              children: (0, r.jsx)(f.i, {
                appId: k,
                skuId: S.id,
                title: R,
                description: T,
                imgSrc: B,
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
        a = t(626135),
        s = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, i.ZP)();
        return (
          o.useEffect(() => {
            a.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, r.jsx)(l.u, { ...c })
        );
      }
    },
    352057: function (e, n, t) {
      t.d(n, {
        h: function () {
          return o;
        },
        r: function () {
          return l;
        },
      });
      let r = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(e) {
        let { location: n, autoTrackExposure: t = !0 } = e,
          { enabled: o } = r.useExperiment(
            { location: n },
            { autoTrackExposure: t },
          );
        return o;
      }
      function l(e) {
        let { location: n } = e;
        return r.getCurrentConfig({ location: n }, { autoTrackExposure: !1 })
          .enabled;
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
        a = t(330711),
        s = t(476818);
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
          className: s.container,
          children: (0, r.jsx)(i.Z, {
            className: s.scroller,
            children: (0, r.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, r.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, r.jsx)("div", {
                      className: s.headerBackground,
                      style: m,
                    }),
                    (0, r.jsx)("div", {
                      className: s.headerImage,
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
                  className: s.content,
                  children: [
                    (0, r.jsxs)("div", {
                      className: s.details,
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
                            className: s.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, r.jsxs)("div", {
                        className: s.benefits,
                        children: [
                          (0, r.jsx)(l.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
        a = t(692547),
        s = t(330711),
        c = t(124370);
      function d(e) {
        let { type: n } = e;
        return (0, r.jsx)(u, {
          icon:
            "user" === n
              ? (0, r.jsx)(l.t, {
                  size: "xxs",
                  color: a.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, r.jsx)(o.Q, {
                  size: "xxs",
                  color: a.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
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
    191046: function (e, n, t) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    476818: function (e, n, t) {
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
    124370: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
  },
]);
//# sourceMappingURL=b555e815ddfdf9ff691b.js.map
