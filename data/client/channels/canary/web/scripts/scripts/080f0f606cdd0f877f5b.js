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
        o = l(626135),
        r = l(981631);
      function s(n, e, l) {
        o.default.track(r.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return N;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(442837),
        o = l(481060),
        r = l(264043),
        s = l(812206),
        a = l(926061),
        c = l(215256),
        d = l(757746),
        u = l(314897),
        m = l(572004),
        x = l(601911),
        h = l(504211),
        v = l(533159),
        f = l(981631),
        j = l(388032),
        p = l(754014),
        S = l(554987);
      function N(n) {
        let {
            appId: e,
            skuId: l,
            transitionState: N,
            onClose: _,
            onHeaderTitleClick: I,
            children: R,
            footer: T,
          } = n,
          C = (0, i.e7)([u.default], () => u.default.isAuthenticated()),
          E = (0, a.YP)({ location: "store_modal" }),
          g = (0, c.M)({ location: "store_modal" }),
          k = C ? E : g,
          M = (0, i.e7)(
            [s.Z, r.Z],
            () => {
              var n;
              return null !== (n = s.Z.getApplication(e)) && void 0 !== n
                ? n
                : r.Z.getApplicationRecord(e);
            },
            [e],
          ),
          { data: Z } = (0, d.Z)(l);
        if (null == M) return null;
        let b = (0, x.y)(M, 25),
          { termsOfServiceUrl: B, privacyPolicyUrl: O } = M;
        return (null == Z ? void 0 : Z.applicationId) !== e
          ? (0, t.jsxs)(o.ModalRoot, {
              transitionState: N,
              size: o.ModalSize.SMALL,
              children: [
                (0, t.jsxs)(o.ModalContent, {
                  className: S.content,
                  children: [
                    (0, t.jsx)(o.ModalCloseButton, {
                      onClick: _,
                      className: p.modalCloseBtn,
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-lg/semibold",
                      color: "header-primary",
                      className: S.unavailableTitle,
                      children: j.intl.string(j.t["0Bf80N"]),
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: S.unavailableBody,
                      children: j.intl.string(j.t.omH3bm),
                    }),
                  ],
                }),
                (0, t.jsx)(o.ModalFooter, {
                  children: (0, t.jsx)(o.Button, {
                    className: S.button,
                    color: o.Button.Colors.BRAND,
                    onClick: _,
                    size: o.Button.Sizes.LARGE,
                    children: j.intl.string(j.t.BddRzc),
                  }),
                }),
              ],
            })
          : (0, t.jsxs)(o.ModalRoot, {
              transitionState: N,
              size: o.ModalSize.DYNAMIC,
              className: S.modal,
              children: [
                (0, t.jsxs)(o.ModalHeader, {
                  className: p.modalHeader,
                  children: [
                    (0, t.jsxs)(o.Clickable, {
                      className: p.modalTitle,
                      onClick: I,
                      children: [
                        null != b &&
                          (0, t.jsx)("img", {
                            src: b.href,
                            alt: "",
                            className: S.appIcon,
                          }),
                        (0, t.jsx)(o.Heading, {
                          variant: "heading-md/semibold",
                          children: M.name,
                        }),
                      ],
                    }),
                    (0, t.jsx)(o.ModalCloseButton, {
                      onClick: _,
                      className: p.modalCloseBtn,
                    }),
                  ],
                }),
                R,
                (0, t.jsxs)(o.ModalFooter, {
                  className: S.footer,
                  children: [
                    null != B || null != O
                      ? (0, t.jsx)(o.Text, {
                          color: "header-primary",
                          variant: "text-sm/normal",
                          children: (0, t.jsx)(v.Z, {
                            termsOfServiceUrl: B,
                            privacyPolicyUrl: O,
                          }),
                        })
                      : (0, t.jsx)(o.Text, {
                          color: "header-primary",
                          variant: "text-xs/normal",
                          children: j.intl.string(j.t["3ZY+0N"]),
                        }),
                    (0, t.jsxs)("div", {
                      className: S.footerButtons,
                      children: [
                        m.wS &&
                          (0, t.jsx)(o.Button, {
                            look: o.Button.Looks.FILLED,
                            size: o.Button.Sizes.ICON,
                            color: o.Button.Colors.PRIMARY,
                            "aria-label": j.intl.string(j.t.WqhZsr),
                            className: S.linkButton,
                            innerClassName: S.innerLinkButton,
                            onClick: () => {
                              let n = ""
                                .concat(location.protocol, "//")
                                .concat(location.host)
                                .concat(
                                  k
                                    ? f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                        e,
                                        l,
                                      )
                                    : f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                        e,
                                        l,
                                      ),
                                );
                              (0, m.JG)(n),
                                (0, o.showToast)(
                                  (0, o.createToast)(
                                    j.intl.string(j.t["L/PwZW"]),
                                    o.ToastType.SUCCESS,
                                  ),
                                ),
                                (0, h.X)(e, h.B.DETAILS_MODAL, l);
                            },
                            children: (0, t.jsx)(o.LinkIcon, {
                              size: "xs",
                              color: "currentColor",
                            }),
                          }),
                        T,
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
            return j;
          },
        });
      var t = l(200651),
        i = l(192379),
        o = l(269210),
        r = l(752843),
        s = l(481060),
        a = l(757746),
        c = l(930155),
        d = l(889989),
        u = l(263519),
        m = l(73346),
        x = l(591759),
        h = l(886253),
        v = l(680005),
        f = l(938337);
      function j(n) {
        var e, l;
        let {
            appId: j,
            subscriptionType: p,
            onClose: S,
            skuId: N,
            guildId: _,
            transitionState: I,
            onHeaderTitleClick: R,
          } = n,
          { data: T } = (0, c.H)(N),
          C = T[0],
          { data: E } = (0, a.Z)(N),
          g = i.useMemo(() => {
            var n;
            return (null == E ? void 0 : E.thumbnail) != null &&
              null !== (n = x.Z.toURLSafe((0, m._W)(j, E.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [j, null == E ? void 0 : E.thumbnail]),
          k = i.useMemo(() => {
            let n = null == E ? void 0 : E.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, d.n)(j, n.icon),
              }));
          }, [j, null == E ? void 0 : E.benefits]),
          { openModal: M, subscriptionPurchaseButtonState: Z } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != _ ? _ : void 0,
          });
        return null == E
          ? null
          : (0, t.jsx)(h.A, {
              appId: j,
              skuId: N,
              transitionState: I,
              onHeaderTitleClick: null != R ? R : S,
              onClose: S,
              footer: (0, t.jsx)(v.pV, {
                onClick: M,
                appId: j,
                subscriptionType: p,
                skuId: N,
                subscriptionPlan: C,
                state: Z,
              }),
              children: (0, t.jsx)(f.i, {
                appId: j,
                skuId: N,
                benefits:
                  null != k
                    ? k.map((n) =>
                        (0, t.jsx)(
                          o.Gm,
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
                  null !== (e = E.description) && void 0 !== e ? e : void 0,
                imgSrc: g,
                title:
                  null !== (l = null == C ? void 0 : C.name) && void 0 !== l
                    ? l
                    : E.summary,
                tag: (0, t.jsx)(r.Z, { type: p }),
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
        o = l(388032),
        r = l(989627);
      function s(n) {
        let { termsOfServiceUrl: e, privacyPolicyUrl: l } = n;
        return null == e && null == l
          ? null
          : (0, t.jsxs)("span", {
              className: r.text,
              children: [
                null != e &&
                  (0, t.jsx)(i.Z, {
                    href: e,
                    children: o.intl.string(o.t["8S0kcH"]),
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
                    children: o.intl.string(o.t.ZpyeCg),
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
        o = l(512100),
        r = l(906732),
        s = l(626135),
        a = l(981631);
      function c(n) {
        let { appId: e, skuId: l, ...c } = n,
          { analyticsLocations: d } = (0, r.ZP)();
        return (
          i.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: e,
              sku_id: l,
              location_stack: d,
            });
          }, [d, e, l]),
          (0, t.jsx)(o.u, { ...c })
        );
      }
    },
    757746: function (n, e, l) {
      l.d(e, {
        Z: function () {
          return r;
        },
      });
      var t = l(442837),
        i = l(558381),
        o = l(551428);
      let r = (0, t.Kb)(o.Z, {
        queryId: (n) => (null != n ? ["storeListing", n] : null),
        get: (n) => (null != n ? o.Z.getForSKU(n) : null),
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
        o = l(557533),
        r = l.n(o),
        s = l(349361),
        a = l(873597);
      function c(n) {
        let { children: e, gradientClassName: l, ...o } = n,
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
              ...o,
              ref: (n) => {
                null != n && ((c.current = n), m());
              },
              onScroll: m,
              children: e,
            }),
            (0, t.jsx)("div", {
              className: r()(a.containerScrollGradient, l),
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
        o = l(777207),
        r = l(541822),
        s = l(330711),
        a = l(1775);
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
          children: (0, t.jsx)(r.Z, {
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
                          (0, t.jsx)(o.x, {
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
                          (0, t.jsx)(o.x, {
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
        o = l(220427),
        r = l(777207),
        s = l(692547),
        a = l(330711),
        c = l(429195);
      function d(n) {
        let { type: e } = n;
        return (0, t.jsx)(u, {
          icon:
            "user" === e
              ? (0, t.jsx)(o.t, {
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
            (0, t.jsx)(r.x, {
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
//# sourceMappingURL=080f0f606cdd0f877f5b.js.map
