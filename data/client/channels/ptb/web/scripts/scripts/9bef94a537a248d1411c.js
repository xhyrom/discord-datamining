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
      var l = t(442837),
        r = t(481060),
        i = t(264043),
        s = t(812206),
        a = t(352057),
        c = t(572004),
        d = t(601911),
        u = t(504211),
        m = t(533159),
        x = t(981631),
        f = t(388032),
        h = t(775012),
        p = t(191046);
      function v(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: v,
            onClose: _,
            onHeaderTitleClick: j,
            children: I,
            footer: g,
          } = e,
          k = (0, a.h)({ location: "store_modal", autoTrackExposure: !1 }),
          N = (0, l.e7)(
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
        let C = (0, d.y)(N, 25),
          { termsOfServiceUrl: S, privacyPolicyUrl: b } = N;
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: p.modal,
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              className: h.modalHeader,
              children: [
                (0, o.jsxs)(r.Clickable, {
                  className: h.modalTitle,
                  onClick: j,
                  children: [
                    null != C &&
                      (0, o.jsx)("img", {
                        src: C.href,
                        alt: "",
                        className: p.appIcon,
                      }),
                    (0, o.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: N.name,
                    }),
                  ],
                }),
                (0, o.jsx)(r.ModalCloseButton, {
                  onClick: _,
                  className: h.modalCloseBtn,
                }),
              ],
            }),
            I,
            (0, o.jsxs)(r.ModalFooter, {
              className: p.footer,
              children: [
                null != S || null != b
                  ? (0, o.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, o.jsx)(m.Z, {
                        termsOfServiceUrl: S,
                        privacyPolicyUrl: b,
                      }),
                    })
                  : (0, o.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: f.intl.string(f.t["3ZY+0N"]),
                    }),
                (0, o.jsxs)("div", {
                  className: p.footerButtons,
                  children: [
                    c.wS &&
                      (0, o.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
                        "aria-label": f.intl.string(f.t.WqhZsr),
                        className: p.linkButton,
                        innerClassName: p.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              k
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
                            (0, r.showToast)(
                              (0, r.createToast)(
                                f.intl.string(f.t["L/PwZW"]),
                                r.ToastType.SUCCESS,
                              ),
                            ),
                            (0, u.X)(n, u.B.DETAILS_MODAL, t);
                        },
                        children: (0, o.jsx)(r.LinkIcon, {
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
    519896: function (e, n, t) {
      t.r(n),
        t.d(n, {
          SubscriptionDetailsModal: function () {
            return v;
          },
        });
      var o = t(200651),
        l = t(192379),
        r = t(269210),
        i = t(752843),
        s = t(481060),
        a = t(757746),
        c = t(930155),
        d = t(889989),
        u = t(263519),
        m = t(73346),
        x = t(591759),
        f = t(886253),
        h = t(680005),
        p = t(938337);
      function v(e) {
        var n, t;
        let {
            appId: v,
            subscriptionType: _,
            onClose: j,
            skuId: I,
            guildId: g,
            transitionState: k,
            onHeaderTitleClick: N,
          } = e,
          { data: C } = (0, c.H)(I),
          S = C[0],
          { data: b } = (0, a.Z)(I),
          T = l.useMemo(() => {
            var e;
            return (null == b ? void 0 : b.thumbnail) != null &&
              null !== (e = x.Z.toURLSafe((0, m._W)(v, b.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [v, null == b ? void 0 : b.thumbnail]),
          E = l.useMemo(() => {
            let e = null == b ? void 0 : b.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, d.n)(v, e.icon),
              }));
          }, [v, null == b ? void 0 : b.benefits]),
          { openModal: R, subscriptionPurchaseButtonState: B } = (0, u.Z)({
            skuId: I,
            subscribeForGuild: null != g ? g : void 0,
          });
        return null == b
          ? null
          : (0, o.jsx)(f.A, {
              appId: v,
              skuId: I,
              transitionState: k,
              onHeaderTitleClick: null != N ? N : j,
              onClose: j,
              footer: (0, o.jsx)(h.pV, {
                onClick: R,
                appId: v,
                subscriptionType: _,
                skuId: I,
                subscriptionPlan: S,
                state: B,
              }),
              children: (0, o.jsx)(p.i, {
                appId: v,
                skuId: I,
                benefits:
                  null != E
                    ? E.map((e) =>
                        (0, o.jsx)(
                          r.Gm,
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
                  null !== (n = b.description) && void 0 !== n ? n : void 0,
                imgSrc: T,
                title:
                  null !== (t = null == S ? void 0 : S.name) && void 0 !== t
                    ? t
                    : b.summary,
                tag: (0, o.jsx)(i.Z, { type: _ }),
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
        r = t(512100),
        i = t(906732),
        s = t(626135),
        a = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: d } = (0, i.ZP)();
        return (
          l.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: d,
            });
          }, [d, n, t]),
          (0, o.jsx)(r.u, { ...c })
        );
      }
    },
    352057: function (e, n, t) {
      t.d(n, {
        h: function () {
          return l;
        },
        r: function () {
          return r;
        },
      });
      let o = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function l(e) {
        let { location: n, autoTrackExposure: t = !0 } = e,
          { enabled: l } = o.useExperiment(
            { location: n },
            { autoTrackExposure: t },
          );
        return l;
      }
      function r(e) {
        let { location: n } = e;
        return o.getCurrentConfig({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var o = t(442837),
        l = t(558381),
        r = t(551428);
      let i = (0, o.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
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
        r = t(777207),
        i = t(541822),
        s = t(330711),
        a = t(476818);
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
                          (0, o.jsx)(r.x, {
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
                          (0, o.jsx)(r.x, {
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
        r = t(220427),
        i = t(777207),
        s = t(692547),
        a = t(330711),
        c = t(124370);
      function d(e) {
        let { type: n } = e;
        return (0, o.jsx)(u, {
          icon:
            "user" === n
              ? (0, o.jsx)(r.t, {
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
            (0, o.jsx)(i.x, {
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
//# sourceMappingURL=9bef94a537a248d1411c.js.map
