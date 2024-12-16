"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86282"],
  {
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return _;
        },
      });
      var l = t(200651);
      t(192379);
      var o = t(442837),
        i = t(481060),
        a = t(264043),
        r = t(812206),
        s = t(352057),
        c = t(757746),
        d = t(572004),
        u = t(601911),
        m = t(504211),
        x = t(533159),
        h = t(981631),
        v = t(388032),
        f = t(671702),
        p = t(689762);
      function _(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: _,
            onClose: j,
            onHeaderTitleClick: N,
            children: I,
            footer: S,
          } = e,
          C = (0, s.h$)({ location: "store_modal" }),
          b = (0, o.e7)(
            [r.Z, a.Z],
            () => {
              var e;
              return null !== (e = r.Z.getApplication(n)) && void 0 !== e
                ? e
                : a.Z.getApplicationRecord(n);
            },
            [n],
          ),
          { data: B } = (0, c.Z)(t);
        if (null == b) return null;
        let T = (0, u.y)(b, 25),
          { termsOfServiceUrl: g, privacyPolicyUrl: k } = b;
        return (null == B ? void 0 : B.applicationId) !== n
          ? (0, l.jsxs)(i.ModalRoot, {
              transitionState: _,
              size: i.ModalSize.SMALL,
              children: [
                (0, l.jsxs)(i.ModalContent, {
                  className: p.content,
                  children: [
                    (0, l.jsx)(i.ModalCloseButton, {
                      onClick: j,
                      className: f.modalCloseBtn,
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-lg/semibold",
                      color: "header-primary",
                      className: p.unavailableTitle,
                      children: v.intl.string(v.t["0Bf80N"]),
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: p.unavailableBody,
                      children: v.intl.string(v.t.omH3bm),
                    }),
                  ],
                }),
                (0, l.jsx)(i.ModalFooter, {
                  children: (0, l.jsx)(i.Button, {
                    className: p.button,
                    color: i.Button.Colors.BRAND,
                    onClick: j,
                    size: i.Button.Sizes.LARGE,
                    children: v.intl.string(v.t.BddRzc),
                  }),
                }),
              ],
            })
          : (0, l.jsxs)(i.ModalRoot, {
              transitionState: _,
              size: i.ModalSize.DYNAMIC,
              className: p.modal,
              children: [
                (0, l.jsxs)(i.ModalHeader, {
                  className: f.modalHeader,
                  children: [
                    (0, l.jsxs)(i.Clickable, {
                      className: f.modalTitle,
                      onClick: N,
                      children: [
                        null != T &&
                          (0, l.jsx)("img", {
                            src: T.href,
                            alt: "",
                            className: p.appIcon,
                          }),
                        (0, l.jsx)(i.Heading, {
                          variant: "heading-md/semibold",
                          children: b.name,
                        }),
                      ],
                    }),
                    (0, l.jsx)(i.ModalCloseButton, {
                      onClick: j,
                      className: f.modalCloseBtn,
                    }),
                  ],
                }),
                I,
                (0, l.jsxs)(i.ModalFooter, {
                  className: p.footer,
                  children: [
                    null != g || null != k
                      ? (0, l.jsx)(i.Text, {
                          color: "header-primary",
                          variant: "text-sm/normal",
                          children: (0, l.jsx)(x.Z, {
                            termsOfServiceUrl: g,
                            privacyPolicyUrl: k,
                          }),
                        })
                      : (0, l.jsx)(i.Text, {
                          color: "header-primary",
                          variant: "text-xs/normal",
                          children: v.intl.string(v.t["3ZY+0N"]),
                        }),
                    (0, l.jsxs)("div", {
                      className: p.footerButtons,
                      children: [
                        d.wS &&
                          (0, l.jsx)(i.Button, {
                            look: i.Button.Looks.FILLED,
                            size: i.Button.Sizes.ICON,
                            color: i.Button.Colors.PRIMARY,
                            "aria-label": v.intl.string(v.t.WqhZsr),
                            className: p.linkButton,
                            innerClassName: p.innerLinkButton,
                            onClick: () => {
                              let e = ""
                                .concat(location.protocol, "//")
                                .concat(location.host)
                                .concat(
                                  C
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
                                (0, i.showToast)(
                                  (0, i.createToast)(
                                    v.intl.string(v.t["L/PwZW"]),
                                    i.ToastType.SUCCESS,
                                  ),
                                ),
                                (0, m.X)(n, m.B.DETAILS_MODAL, t);
                            },
                            children: (0, l.jsx)(i.LinkIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          }),
                        S,
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    519896: function (e, n, t) {
      t.r(n),
        t.d(n, {
          SubscriptionDetailsModal: function () {
            return p;
          },
        });
      var l = t(200651),
        o = t(192379),
        i = t(269210),
        a = t(752843),
        r = t(481060),
        s = t(757746),
        c = t(930155),
        d = t(889989),
        u = t(263519),
        m = t(73346),
        x = t(591759),
        h = t(886253),
        v = t(680005),
        f = t(938337);
      function p(e) {
        var n, t;
        let {
            appId: p,
            subscriptionType: _,
            onClose: j,
            skuId: N,
            guildId: I,
            transitionState: S,
            onHeaderTitleClick: C,
          } = e,
          { data: b } = (0, c.H)(N),
          B = b[0],
          { data: T } = (0, s.Z)(N),
          g = o.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null &&
              null !== (e = x.Z.toURLSafe((0, m._W)(p, T.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [p, null == T ? void 0 : T.thumbnail]),
          k = o.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, d.n)(p, e.icon),
              }));
          }, [p, null == T ? void 0 : T.benefits]),
          { openModal: R, subscriptionPurchaseButtonState: E } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != I ? I : void 0,
          });
        return null == T
          ? null
          : (0, l.jsx)(h.A, {
              appId: p,
              skuId: N,
              transitionState: S,
              onHeaderTitleClick: null != C ? C : j,
              onClose: j,
              footer: (0, l.jsx)(v.pV, {
                onClick: R,
                appId: p,
                subscriptionType: _,
                skuId: N,
                subscriptionPlan: B,
                state: E,
              }),
              children: (0, l.jsx)(f.i, {
                appId: p,
                skuId: N,
                benefits:
                  null != k
                    ? k.map((e) =>
                        (0, l.jsx)(
                          i.Gm,
                          {
                            header: e.title,
                            icon: e.icon,
                            description: e.description,
                          },
                          e.id,
                        ),
                      )
                    : void 0,
                description:
                  null !== (n = T.description) && void 0 !== n ? n : void 0,
                imgSrc: g,
                title:
                  null !== (t = null == B ? void 0 : B.name) && void 0 !== t
                    ? t
                    : T.summary,
                tag: (0, l.jsx)(a.Z, { type: _ }),
                FallbackIcon: r.BadgeIcon,
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
        i = t(512100),
        a = t(906732),
        r = t(626135),
        s = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, a.ZP)();
        return (
          o.useEffect(() => {
            r.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, l.jsx)(i.u, { ...c })
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
        i = t(551428);
      let a = (0, l.Kb)(i.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? i.Z.getForSKU(e) : null),
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
        i = t(777207),
        a = t(541822),
        r = t(330711),
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
                          (0, l.jsx)(i.x, {
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
                          (0, l.jsx)(i.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: r.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
        i = t(220427),
        a = t(777207),
        r = t(692547),
        s = t(330711),
        c = t(103665);
      function d(e) {
        let { type: n } = e;
        return (0, l.jsx)(u, {
          icon:
            "user" === n
              ? (0, l.jsx)(i.t, {
                  size: "xxs",
                  color: r.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(o.Q, {
                  size: "xxs",
                  color: r.Z.colors.INTERACTIVE_NORMAL,
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
//# sourceMappingURL=a8677385a4c3eeb2bde5.js.map
