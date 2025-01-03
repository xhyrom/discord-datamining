"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46619"],
  {
    504211: function (e, n, t) {
      t.d(n, {
        B: function () {
          return o;
        },
        X: function () {
          return i;
        },
      });
      var l,
        o,
        r = t(626135),
        a = t(981631);
      function i(e, n, t) {
        r.default.track(a.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: e,
          area: n,
          sku_id: t,
        });
      }
      ((l = o || (o = {})).STORE_MODAL = "store_modal"),
        (l.DETAILS_MODAL = "details_modal"),
        (l.STORE_EMBED = "store_embed"),
        (l.SKU_EMBED = "sku_embed");
    },
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return S;
        },
      });
      var l = t(200651);
      t(192379);
      var o = t(442837),
        r = t(481060),
        a = t(264043),
        i = t(812206),
        s = t(926061),
        c = t(215256),
        d = t(757746),
        u = t(314897),
        m = t(572004),
        x = t(601911),
        f = t(504211),
        _ = t(533159),
        h = t(981631),
        v = t(388032),
        p = t(671702),
        j = t(689762);
      function S(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: S,
            onClose: N,
            onHeaderTitleClick: B,
            children: g,
            footer: I,
          } = e,
          T = (0, o.e7)([u.default], () => u.default.isAuthenticated()),
          k = (0, s.YP)({ location: "store_modal" }),
          C = (0, c.M)({ location: "store_modal" }),
          R = T ? k : C,
          E = (0, o.e7)(
            [i.Z, a.Z],
            () => {
              var e;
              return null !== (e = i.Z.getApplication(n)) && void 0 !== e
                ? e
                : a.Z.getApplicationRecord(n);
            },
            [n],
          ),
          { data: L } = (0, d.Z)(t);
        if (null == E) return null;
        let Z = (0, x.y)(E, 25),
          { termsOfServiceUrl: M, privacyPolicyUrl: b } = E;
        return (null == L ? void 0 : L.applicationId) !== n
          ? (0, l.jsxs)(r.ModalRoot, {
              transitionState: S,
              size: r.ModalSize.SMALL,
              children: [
                (0, l.jsxs)(r.ModalContent, {
                  className: j.content,
                  children: [
                    (0, l.jsx)(r.ModalCloseButton, {
                      onClick: N,
                      className: p.modalCloseBtn,
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-lg/semibold",
                      color: "header-primary",
                      className: j.unavailableTitle,
                      children: v.intl.string(v.t["0Bf80N"]),
                    }),
                    (0, l.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: j.unavailableBody,
                      children: v.intl.string(v.t.omH3bm),
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalFooter, {
                  children: (0, l.jsx)(r.Button, {
                    className: j.button,
                    color: r.Button.Colors.BRAND,
                    onClick: N,
                    size: r.Button.Sizes.LARGE,
                    children: v.intl.string(v.t.BddRzc),
                  }),
                }),
              ],
            })
          : (0, l.jsxs)(r.ModalRoot, {
              transitionState: S,
              size: r.ModalSize.DYNAMIC,
              className: j.modal,
              children: [
                (0, l.jsxs)(r.ModalHeader, {
                  className: p.modalHeader,
                  children: [
                    (0, l.jsxs)(r.Clickable, {
                      className: p.modalTitle,
                      onClick: B,
                      children: [
                        null != Z &&
                          (0, l.jsx)("img", {
                            src: Z.href,
                            alt: "",
                            className: j.appIcon,
                          }),
                        (0, l.jsx)(r.Heading, {
                          variant: "heading-md/semibold",
                          children: E.name,
                        }),
                      ],
                    }),
                    (0, l.jsx)(r.ModalCloseButton, {
                      onClick: N,
                      className: p.modalCloseBtn,
                    }),
                  ],
                }),
                g,
                (0, l.jsxs)(r.ModalFooter, {
                  className: j.footer,
                  children: [
                    null != M || null != b
                      ? (0, l.jsx)(r.Text, {
                          color: "header-primary",
                          variant: "text-sm/normal",
                          children: (0, l.jsx)(_.Z, {
                            termsOfServiceUrl: M,
                            privacyPolicyUrl: b,
                          }),
                        })
                      : (0, l.jsx)(r.Text, {
                          color: "header-primary",
                          variant: "text-xs/normal",
                          children: v.intl.string(v.t["3ZY+0N"]),
                        }),
                    (0, l.jsxs)("div", {
                      className: j.footerButtons,
                      children: [
                        m.wS &&
                          (0, l.jsx)(r.Button, {
                            look: r.Button.Looks.FILLED,
                            size: r.Button.Sizes.ICON,
                            color: r.Button.Colors.PRIMARY,
                            "aria-label": v.intl.string(v.t.WqhZsr),
                            className: j.linkButton,
                            innerClassName: j.innerLinkButton,
                            onClick: () => {
                              let e = ""
                                .concat(location.protocol, "//")
                                .concat(location.host)
                                .concat(
                                  R
                                    ? h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                        n,
                                        t,
                                      )
                                    : h.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                        n,
                                        t,
                                      ),
                                );
                              (0, m.JG)(e),
                                (0, r.showToast)(
                                  (0, r.createToast)(
                                    v.intl.string(v.t["L/PwZW"]),
                                    r.ToastType.SUCCESS,
                                  ),
                                ),
                                (0, f.X)(n, f.B.DETAILS_MODAL, t);
                            },
                            children: (0, l.jsx)(r.LinkIcon, {
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
        f = t(938337),
        _ = t(981631),
        h = t(388032);
      function v(e) {
        var n, t, v, p;
        let {
            onClose: j,
            transitionState: S,
            skuId: N,
            appId: B,
            onHeaderTitleClick: g,
          } = e,
          I = (0, r.e7)([s.Z], () => s.Z.getForSKU(N), [N]),
          T = (0, r.e7)([i.Z], () => i.Z.get(N), [N]),
          k = (0, u.M)(N);
        if (null == T) return null;
        let C = null !== (t = T.name) && void 0 !== t ? t : "",
          R =
            null !==
              (v =
                null == I
                  ? void 0
                  : null === (n = I.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== v
              ? v
              : void 0,
          E =
            (null == I ? void 0 : I.headerBackground) != null &&
            null !==
              (p = d.Z.toURLSafe((0, c._W)(B, I.headerBackground, 256))) &&
            void 0 !== p
              ? p
              : void 0,
          L = T.type === _.epS.DURABLE && k,
          Z =
            T.type === _.epS.DURABLE
              ? L
                ? h.intl.string(h.t.bm82mp)
                : h.intl.string(h.t["6gprwc"])
              : void 0,
          { price: M } = T;
        return null == M
          ? null
          : (0, l.jsx)(m.A, {
              appId: B,
              skuId: T.id,
              transitionState: S,
              onHeaderTitleClick: null != g ? g : j,
              onClose: j,
              footer: (0, l.jsx)(x.YG, { appId: B, sku: T }),
              children: (0, l.jsx)(f.i, {
                appId: B,
                skuId: T.id,
                title: C,
                description: R,
                imgSrc: E,
                tag: null != Z ? (0, l.jsx)(o.V, { text: Z }) : void 0,
                FallbackIcon: a.TicketIcon,
              }),
            });
      }
    },
    533159: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var l = t(200651);
      t(192379);
      var o = t(794295),
        r = t(388032),
        a = t(83909);
      function i(e) {
        let { termsOfServiceUrl: n, privacyPolicyUrl: t } = e;
        return null == n && null == t
          ? null
          : (0, l.jsxs)("span", {
              className: a.text,
              children: [
                null != n &&
                  (0, l.jsx)(o.Z, {
                    href: n,
                    children: r.intl.string(r.t["8S0kcH"]),
                  }),
                null != n &&
                  null != t &&
                  (0, l.jsx)("span", {
                    "aria-disabled": "true",
                    children: "•",
                  }),
                null != t &&
                  (0, l.jsx)(o.Z, {
                    href: t,
                    children: r.intl.string(r.t.ZpyeCg),
                  }),
              ],
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
    541822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var l = t(200651),
        o = t(192379),
        r = t(557533),
        a = t.n(r),
        i = t(349361),
        s = t(366481);
      function c(e) {
        let { children: n, gradientClassName: t, ...r } = e,
          c = o.useRef(null),
          [d, u] = o.useState(!0),
          m = () => {
            var e;
            (null === (e = c.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? u(!1)
              : u(!0);
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(i.h2, {
              fade: !0,
              ...r,
              ref: (e) => {
                null != e && ((c.current = e), m());
              },
              onScroll: m,
              children: n,
            }),
            (0, l.jsx)("div", {
              className: a()(s.containerScrollGradient, t),
              "data-shown": d,
            }),
          ],
        });
      }
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
    671702: function (e, n, t) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
        scrollerWrapper: "scrollerWrapper_c5ad85",
        scroller: "scroller_c5ad85",
      };
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
    83909: function (e, n, t) {
      e.exports = { text: "text_b628d6" };
    },
    366481: function (e, n, t) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
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
//# sourceMappingURL=fb9f96b04cae90e21606.js.map
