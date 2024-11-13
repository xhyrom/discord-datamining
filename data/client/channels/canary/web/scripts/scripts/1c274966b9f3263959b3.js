"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86282"],
  {
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return p;
        },
      });
      var o = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        r = t(264043),
        s = t(812206),
        a = t(572004),
        c = t(601911),
        d = t(504211),
        u = t(533159),
        m = t(981631),
        x = t(388032),
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
          N = (0, l.e7)(
            [s.Z, r.Z],
            () => {
              var e;
              return null !== (e = s.Z.getApplication(n)) && void 0 !== e
                ? e
                : r.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == N) return null;
        let k = (0, c.y)(N, 25),
          { termsOfServiceUrl: g, privacyPolicyUrl: C } = N;
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: p,
          size: i.ModalSize.DYNAMIC,
          className: f.modal,
          children: [
            (0, o.jsxs)(i.ModalHeader, {
              className: h.modalHeader,
              children: [
                (0, o.jsxs)(i.Clickable, {
                  className: h.modalTitle,
                  onClick: _,
                  children: [
                    null != k &&
                      (0, o.jsx)("img", {
                        src: k.href,
                        alt: "",
                        className: f.appIcon,
                      }),
                    (0, o.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      children: N.name,
                    }),
                  ],
                }),
                (0, o.jsx)(i.ModalCloseButton, {
                  onClick: v,
                  className: h.modalCloseBtn,
                }),
              ],
            }),
            j,
            (0, o.jsxs)(i.ModalFooter, {
              className: f.footer,
              children: [
                null != g || null != C
                  ? (0, o.jsx)(i.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, o.jsx)(u.Z, {
                        termsOfServiceUrl: g,
                        privacyPolicyUrl: C,
                      }),
                    })
                  : (0, o.jsx)(i.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: x.intl.string(x.t["3ZY+0N"]),
                    }),
                (0, o.jsxs)("div", {
                  className: f.footerButtons,
                  children: [
                    a.wS &&
                      (0, o.jsx)(i.Button, {
                        look: i.Button.Looks.FILLED,
                        size: i.Button.Sizes.ICON,
                        color: i.Button.Colors.PRIMARY,
                        "aria-label": x.intl.string(x.t.WqhZsr),
                        className: f.linkButton,
                        innerClassName: f.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                n,
                                t,
                              ),
                            );
                          (0, a.JG)(e),
                            (0, i.showToast)(
                              (0, i.createToast)(
                                x.intl.string(x.t["L/PwZW"]),
                                i.ToastType.SUCCESS,
                              ),
                            ),
                            (0, d.X)(n, d.B.DETAILS_MODAL, t);
                        },
                        children: (0, o.jsx)(i.LinkIcon, {
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
    519896: function (e, n, t) {
      t.r(n),
        t.d(n, {
          SubscriptionDetailsModal: function () {
            return v;
          },
        });
      var o = t(200651),
        l = t(192379),
        i = t(269210),
        r = t(752843),
        s = t(481060),
        a = t(757746),
        c = t(930155),
        d = t(889989),
        u = t(696906),
        m = t(73346),
        x = t(591759),
        h = t(886253),
        f = t(680005),
        p = t(938337);
      function v(e) {
        var n, t;
        let {
            appId: v,
            subscriptionType: _,
            onClose: j,
            skuId: I,
            guildId: N,
            transitionState: k,
            onHeaderTitleClick: g,
          } = e,
          { data: C } = (0, c.H)(I),
          S = C[0],
          { data: T } = (0, a.Z)(I),
          R = l.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null &&
              null !== (e = x.Z.toURLSafe((0, m._W)(v, T.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [v, null == T ? void 0 : T.thumbnail]),
          b = l.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, d.n)(v, e.icon),
              }));
          }, [v, null == T ? void 0 : T.benefits]),
          { openModal: E, cannotOpenReason: Z } = (0, u.ZP)({
            skuId: I,
            subscribeForGuild: null != N ? N : void 0,
          });
        return null == T
          ? null
          : (0, o.jsx)(h.A, {
              appId: v,
              skuId: I,
              transitionState: k,
              onHeaderTitleClick: null != g ? g : j,
              onClose: j,
              footer: (0, o.jsx)(f.p, {
                onClick: E,
                appId: v,
                subscriptionType: _,
                skuId: I,
                subscriptionPlan: S,
                cannotOpenReason: Z,
              }),
              children: (0, o.jsx)(p.i, {
                appId: v,
                skuId: I,
                benefits:
                  null != b
                    ? b.map((e) =>
                        (0, o.jsx)(
                          i.G,
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
                imgSrc: R,
                title:
                  null !== (t = null == S ? void 0 : S.name) && void 0 !== t
                    ? t
                    : T.summary,
                tag: (0, o.jsx)(r.Z, { type: _ }),
                FallbackIcon: s.BadgeIcon,
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
        l = t(192379),
        i = t(512100),
        r = t(906732),
        s = t(626135),
        a = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, r.ZP)();
        return (
          l.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, o.jsx)(i.u, { ...c })
        );
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var o = t(442837),
        l = t(558381),
        i = t(551428);
      let r = (0, o.Kb)(i.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? i.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, l.km)(n) : Promise.resolve()),
        useStateHook: o.e7,
      });
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return c;
        },
      });
      var o = t(200651);
      t(192379);
      var l = t(409794),
        i = t(777207),
        r = t(541822),
        s = t(330711),
        a = t(770561);
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
        return (0, o.jsx)("div", {
          className: a.container,
          children: (0, o.jsx)(r.Z, {
            className: a.scroller,
            children: (0, o.jsxs)("div", {
              className: a.scrollContent,
              children: [
                (0, o.jsxs)("div", {
                  className: a.header,
                  children: [
                    (0, o.jsx)("div", {
                      className: a.headerBackground,
                      style: x,
                    }),
                    (0, o.jsx)("div", {
                      className: a.headerImage,
                      children:
                        null != c
                          ? (0, o.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, o.jsx)(m, {
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
                        (0, o.jsx)(l.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: d,
                        }),
                        null != t &&
                          "" !== t &&
                          (0, o.jsx)(i.x, {
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
                          (0, o.jsx)(i.x, {
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
      var l = t(628028),
        i = t(220427),
        r = t(777207),
        s = t(692547),
        a = t(330711),
        c = t(350727);
      function d(e) {
        let { type: n } = e;
        return (0, o.jsx)(u, {
          icon:
            "user" === n
              ? (0, o.jsx)(i.t, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, o.jsx)(l.Q, {
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
            (0, o.jsx)(r.x, {
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
//# sourceMappingURL=1c274966b9f3263959b3.js.map
