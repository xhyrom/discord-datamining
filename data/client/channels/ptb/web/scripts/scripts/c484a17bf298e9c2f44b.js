"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86282"],
  {
    504211: function (n, e, l) {
      l.d(e, {
        B: function () {
          return i;
        },
        X: function () {
          return s;
        },
      });
      var t,
        i,
        r = l(626135),
        o = l(981631);
      function s(n, e, l) {
        r.default.track(o.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: n,
          area: e,
          sku_id: l,
        });
      }
      ((t = i || (i = {})).STORE_MODAL = "store_modal"),
        (t.DETAILS_MODAL = "details_modal"),
        (t.STORE_EMBED = "store_embed"),
        (t.SKU_EMBED = "sku_embed");
    },
    886253: function (n, e, l) {
      l.d(e, {
        A: function () {
          return f;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(442837),
        r = l(481060),
        o = l(264043),
        s = l(812206),
        a = l(757746),
        c = l(572004),
        d = l(601911),
        u = l(504211),
        m = l(533159),
        x = l(981631),
        h = l(388032),
        v = l(671702),
        j = l(689762);
      function f(n) {
        let {
            appId: e,
            skuId: l,
            transitionState: f,
            onClose: p,
            onHeaderTitleClick: S,
            children: N,
            footer: _,
          } = n,
          C = (0, i.e7)(
            [s.Z, o.Z],
            () => {
              var n;
              return null !== (n = s.Z.getApplication(e)) && void 0 !== n
                ? n
                : o.Z.getApplicationRecord(e);
            },
            [e],
          ),
          { data: T } = (0, a.Z)(l);
        if (null == C) return null;
        let I = (0, d.y)(C, 25),
          { termsOfServiceUrl: R, privacyPolicyUrl: g } = C;
        return (null == T ? void 0 : T.applicationId) !== e
          ? (0, t.jsxs)(r.ModalRoot, {
              transitionState: f,
              size: r.ModalSize.SMALL,
              children: [
                (0, t.jsxs)(r.ModalContent, {
                  className: j.content,
                  children: [
                    (0, t.jsx)(r.ModalCloseButton, {
                      onClick: p,
                      className: v.modalCloseBtn,
                    }),
                    (0, t.jsx)(r.Text, {
                      variant: "text-lg/semibold",
                      color: "header-primary",
                      className: j.unavailableTitle,
                      children: h.intl.string(h.t["0Bf80N"]),
                    }),
                    (0, t.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: j.unavailableBody,
                      children: h.intl.string(h.t.omH3bm),
                    }),
                  ],
                }),
                (0, t.jsx)(r.ModalFooter, {
                  children: (0, t.jsx)(r.Button, {
                    className: j.button,
                    color: r.Button.Colors.BRAND,
                    onClick: p,
                    size: r.Button.Sizes.LARGE,
                    children: h.intl.string(h.t.BddRzc),
                  }),
                }),
              ],
            })
          : (0, t.jsxs)(r.ModalRoot, {
              transitionState: f,
              size: r.ModalSize.DYNAMIC,
              className: j.modal,
              children: [
                (0, t.jsxs)(r.ModalHeader, {
                  className: v.modalHeader,
                  children: [
                    (0, t.jsxs)(r.Clickable, {
                      className: v.modalTitle,
                      onClick: S,
                      children: [
                        null != I &&
                          (0, t.jsx)("img", {
                            src: I.href,
                            alt: "",
                            className: j.appIcon,
                          }),
                        (0, t.jsx)(r.Heading, {
                          variant: "heading-md/semibold",
                          children: C.name,
                        }),
                      ],
                    }),
                    (0, t.jsx)(r.ModalCloseButton, {
                      onClick: p,
                      className: v.modalCloseBtn,
                    }),
                  ],
                }),
                N,
                (0, t.jsxs)(r.ModalFooter, {
                  className: j.footer,
                  children: [
                    null != R || null != g
                      ? (0, t.jsx)(r.Text, {
                          color: "header-primary",
                          variant: "text-sm/normal",
                          children: (0, t.jsx)(m.Z, {
                            termsOfServiceUrl: R,
                            privacyPolicyUrl: g,
                          }),
                        })
                      : (0, t.jsx)(r.Text, {
                          color: "header-primary",
                          variant: "text-xs/normal",
                          children: h.intl.string(h.t["3ZY+0N"]),
                        }),
                    (0, t.jsxs)("div", {
                      className: j.footerButtons,
                      children: [
                        c.wS &&
                          (0, t.jsx)(r.Button, {
                            look: r.Button.Looks.FILLED,
                            size: r.Button.Sizes.ICON,
                            color: r.Button.Colors.PRIMARY,
                            "aria-label": h.intl.string(h.t.WqhZsr),
                            className: j.linkButton,
                            innerClassName: j.innerLinkButton,
                            onClick: () => {
                              let n = ""
                                .concat(location.protocol, "//")
                                .concat(location.host)
                                .concat(
                                  x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                    e,
                                    l,
                                  ),
                                );
                              (0, c.JG)(n),
                                (0, r.showToast)(
                                  (0, r.createToast)(
                                    h.intl.string(h.t["L/PwZW"]),
                                    r.ToastType.SUCCESS,
                                  ),
                                ),
                                (0, u.X)(e, u.B.DETAILS_MODAL, l);
                            },
                            children: (0, t.jsx)(r.LinkIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          }),
                        _,
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
    519896: function (n, e, l) {
      l.r(e),
        l.d(e, {
          SubscriptionDetailsModal: function () {
            return f;
          },
        });
      var t = l(200651),
        i = l(192379),
        r = l(269210),
        o = l(752843),
        s = l(481060),
        a = l(757746),
        c = l(930155),
        d = l(889989),
        u = l(263519),
        m = l(73346),
        x = l(591759),
        h = l(886253),
        v = l(680005),
        j = l(938337);
      function f(n) {
        var e, l;
        let {
            appId: f,
            subscriptionType: p,
            onClose: S,
            skuId: N,
            guildId: _,
            transitionState: C,
            onHeaderTitleClick: T,
          } = n,
          { data: I } = (0, c.H)(N),
          R = I[0],
          { data: g } = (0, a.Z)(N),
          E = i.useMemo(() => {
            var n;
            return (null == g ? void 0 : g.thumbnail) != null &&
              null !== (n = x.Z.toURLSafe((0, m._W)(f, g.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [f, null == g ? void 0 : g.thumbnail]),
          k = i.useMemo(() => {
            let n = null == g ? void 0 : g.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, d.n)(f, n.icon),
              }));
          }, [f, null == g ? void 0 : g.benefits]),
          { openModal: b, subscriptionPurchaseButtonState: M } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != _ ? _ : void 0,
          });
        return null == g
          ? null
          : (0, t.jsx)(h.A, {
              appId: f,
              skuId: N,
              transitionState: C,
              onHeaderTitleClick: null != T ? T : S,
              onClose: S,
              footer: (0, t.jsx)(v.pV, {
                onClick: b,
                appId: f,
                subscriptionType: p,
                skuId: N,
                subscriptionPlan: R,
                state: M,
              }),
              children: (0, t.jsx)(j.i, {
                appId: f,
                skuId: N,
                benefits:
                  null != k
                    ? k.map((n) =>
                        (0, t.jsx)(
                          r.Gm,
                          {
                            header: n.title,
                            icon: n.icon,
                            description: n.description,
                          },
                          n.id,
                        ),
                      )
                    : void 0,
                description:
                  null !== (e = g.description) && void 0 !== e ? e : void 0,
                imgSrc: E,
                title:
                  null !== (l = null == R ? void 0 : R.name) && void 0 !== l
                    ? l
                    : g.summary,
                tag: (0, t.jsx)(o.Z, { type: p }),
                FallbackIcon: s.BadgeIcon,
              }),
            });
      }
    },
    533159: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return s;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(794295),
        r = l(388032),
        o = l(83909);
      function s(n) {
        let { termsOfServiceUrl: e, privacyPolicyUrl: l } = n;
        return null == e && null == l
          ? null
          : (0, t.jsxs)("span", {
              className: o.text,
              children: [
                null != e &&
                  (0, t.jsx)(i.Z, {
                    href: e,
                    children: r.intl.string(r.t["8S0kcH"]),
                  }),
                null != e &&
                  null != l &&
                  (0, t.jsx)("span", {
                    "aria-disabled": "true",
                    children: "•",
                  }),
                null != l &&
                  (0, t.jsx)(i.Z, {
                    href: l,
                    children: r.intl.string(r.t.ZpyeCg),
                  }),
              ],
            });
      }
    },
    938337: function (n, e, l) {
      l.d(e, {
        i: function () {
          return c;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(512100),
        o = l(906732),
        s = l(626135),
        a = l(981631);
      function c(n) {
        let { appId: e, skuId: l, ...c } = n,
          { analyticsLocations: d } = (0, o.ZP)();
        return (
          i.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: e,
              sku_id: l,
              location_stack: d,
            });
          }, [d, e, l]),
          (0, t.jsx)(r.u, { ...c })
        );
      }
    },
    757746: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return o;
        },
      });
      var t = l(442837),
        i = l(558381),
        r = l(551428);
      let o = (0, t.Kb)(r.Z, {
        queryId: (n) => (null != n ? ["storeListing", n] : null),
        get: (n) => (null != n ? r.Z.getForSKU(n) : null),
        load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
        useStateHook: t.e7,
      });
    },
    541822: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return c;
        },
      }),
        l(47120);
      var t = l(200651),
        i = l(192379),
        r = l(557533),
        o = l.n(r),
        s = l(349361),
        a = l(366481);
      function c(n) {
        let { children: e, gradientClassName: l, ...r } = n,
          c = i.useRef(null),
          [d, u] = i.useState(!0),
          m = () => {
            var n;
            (null === (n = c.current) || void 0 === n
              ? void 0
              : n.isScrolledToBottom()) === !0
              ? u(!1)
              : u(!0);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.h2, {
              fade: !0,
              ...r,
              ref: (n) => {
                null != n && ((c.current = n), m());
              },
              onScroll: m,
              children: e,
            }),
            (0, t.jsx)("div", {
              className: o()(a.containerScrollGradient, l),
              "data-shown": d,
            }),
          ],
        });
      }
    },
    512100: function (n, e, l) {
      l.d(e, {
        u: function () {
          return c;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(409794),
        r = l(777207),
        o = l(541822),
        s = l(330711),
        a = l(189090);
      function c(n) {
        let {
            benefits: e,
            description: l,
            imgSrc: c,
            title: d,
            tag: u,
            FallbackIcon: m,
          } = n,
          x =
            null != c
              ? { "--custom-background-url": "url(".concat(c.toString(), ")") }
              : void 0;
        return (0, t.jsx)("div", {
          className: a.container,
          children: (0, t.jsx)(o.Z, {
            className: a.scroller,
            children: (0, t.jsxs)("div", {
              className: a.scrollContent,
              children: [
                (0, t.jsxs)("div", {
                  className: a.header,
                  children: [
                    (0, t.jsx)("div", {
                      className: a.headerBackground,
                      style: x,
                    }),
                    (0, t.jsx)("div", {
                      className: a.headerImage,
                      children:
                        null != c
                          ? (0, t.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, t.jsx)(m, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: a.content,
                  children: [
                    (0, t.jsxs)("div", {
                      className: a.details,
                      children: [
                        null != u && (0, t.jsx)("div", { children: u }),
                        (0, t.jsx)(i.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: d,
                        }),
                        null != l &&
                          "" !== l &&
                          (0, t.jsx)(r.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: a.description,
                            children: l,
                          }),
                      ],
                    }),
                    null != e &&
                      (0, t.jsxs)("div", {
                        className: a.benefits,
                        children: [
                          (0, t.jsx)(r.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                          }),
                          e,
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
    752843: function (n, e, l) {
      l.d(e, {
        V: function () {
          return u;
        },
        Z: function () {
          return d;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(628028),
        r = l(220427),
        o = l(777207),
        s = l(692547),
        a = l(330711),
        c = l(103665);
      function d(n) {
        let { type: e } = n;
        return (0, t.jsx)(u, {
          icon:
            "user" === e
              ? (0, t.jsx)(r.t, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, t.jsx)(i.Q, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === e
              ? a.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : a.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function u(n) {
        let { icon: e, text: l } = n;
        return (0, t.jsxs)("div", {
          className: c.container,
          children: [
            e,
            (0, t.jsx)(o.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: l,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=c484a17bf298e9c2f44b.js.map
