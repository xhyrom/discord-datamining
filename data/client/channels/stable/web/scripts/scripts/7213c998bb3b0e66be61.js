"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86282"],
  {
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return v;
        },
      });
      var o = t(200651);
      t(192379);
      var i = t(442837),
        l = t(481060),
        r = t(264043),
        s = t(812206),
        a = t(352057),
        c = t(572004),
        d = t(601911),
        u = t(504211),
        m = t(533159),
        x = t(981631),
        h = t(388032),
        f = t(671702),
        p = t(689762);
      function v(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: v,
            onClose: _,
            onHeaderTitleClick: j,
            children: I,
            footer: N,
          } = e,
          S = (0, a.h$)({ location: "store_modal" }),
          k = (0, i.e7)(
            [s.Z, r.Z],
            () => {
              var e;
              return null !== (e = s.Z.getApplication(n)) && void 0 !== e
                ? e
                : r.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == k) return null;
        let g = (0, d.y)(k, 25),
          { termsOfServiceUrl: C, privacyPolicyUrl: R } = k;
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: v,
          size: l.ModalSize.DYNAMIC,
          className: p.modal,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: f.modalHeader,
              children: [
                (0, o.jsxs)(l.Clickable, {
                  className: f.modalTitle,
                  onClick: j,
                  children: [
                    null != g &&
                      (0, o.jsx)("img", {
                        src: g.href,
                        alt: "",
                        className: p.appIcon,
                      }),
                    (0, o.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: k.name,
                    }),
                  ],
                }),
                (0, o.jsx)(l.ModalCloseButton, {
                  onClick: _,
                  className: f.modalCloseBtn,
                }),
              ],
            }),
            I,
            (0, o.jsxs)(l.ModalFooter, {
              className: p.footer,
              children: [
                null != C || null != R
                  ? (0, o.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, o.jsx)(m.Z, {
                        termsOfServiceUrl: C,
                        privacyPolicyUrl: R,
                      }),
                    })
                  : (0, o.jsx)(l.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: h.intl.string(h.t["3ZY+0N"]),
                    }),
                (0, o.jsxs)("div", {
                  className: p.footerButtons,
                  children: [
                    c.wS &&
                      (0, o.jsx)(l.Button, {
                        look: l.Button.Looks.FILLED,
                        size: l.Button.Sizes.ICON,
                        color: l.Button.Colors.PRIMARY,
                        "aria-label": h.intl.string(h.t.WqhZsr),
                        className: p.linkButton,
                        innerClassName: p.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              S
                                ? x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                    n,
                                    t,
                                  )
                                : x.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
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
    519896: function (e, n, t) {
      t.r(n),
        t.d(n, {
          SubscriptionDetailsModal: function () {
            return v;
          },
        });
      var o = t(200651),
        i = t(192379),
        l = t(269210),
        r = t(752843),
        s = t(481060),
        a = t(757746),
        c = t(930155),
        d = t(889989),
        u = t(263519),
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
            transitionState: S,
            onHeaderTitleClick: k,
          } = e,
          { data: g } = (0, c.H)(I),
          C = g[0],
          { data: R } = (0, a.Z)(I),
          T = i.useMemo(() => {
            var e;
            return (null == R ? void 0 : R.thumbnail) != null &&
              null !== (e = x.Z.toURLSafe((0, m._W)(v, R.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [v, null == R ? void 0 : R.thumbnail]),
          E = i.useMemo(() => {
            let e = null == R ? void 0 : R.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, d.n)(v, e.icon),
              }));
          }, [v, null == R ? void 0 : R.benefits]),
          { openModal: Z, subscriptionPurchaseButtonState: b } = (0, u.Z)({
            skuId: I,
            initialSubscribeForGuild: null != N ? N : void 0,
          });
        return null == R
          ? null
          : (0, o.jsx)(h.A, {
              appId: v,
              skuId: I,
              transitionState: S,
              onHeaderTitleClick: null != k ? k : j,
              onClose: j,
              footer: (0, o.jsx)(f.pV, {
                onClick: Z,
                appId: v,
                subscriptionType: _,
                skuId: I,
                subscriptionPlan: C,
                state: b,
              }),
              children: (0, o.jsx)(p.i, {
                appId: v,
                skuId: I,
                benefits:
                  null != E
                    ? E.map((e) =>
                        (0, o.jsx)(
                          l.Gm,
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
                  null !== (n = R.description) && void 0 !== n ? n : void 0,
                imgSrc: T,
                title:
                  null !== (t = null == C ? void 0 : C.name) && void 0 !== t
                    ? t
                    : R.summary,
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
        i = t(192379),
        l = t(512100),
        r = t(906732),
        s = t(626135),
        a = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, r.ZP)();
        return (
          i.useEffect(() => {
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
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var o = t(442837),
        i = t(558381),
        l = t(551428);
      let r = (0, o.Kb)(l.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? l.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
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
      var i = t(409794),
        l = t(777207),
        r = t(541822),
        s = t(330711),
        a = t(189090);
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
                        (0, o.jsx)(i.X, {
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
      var i = t(628028),
        l = t(220427),
        r = t(777207),
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
              : (0, o.jsx)(i.Q, {
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
//# sourceMappingURL=7213c998bb3b0e66be61.js.map
