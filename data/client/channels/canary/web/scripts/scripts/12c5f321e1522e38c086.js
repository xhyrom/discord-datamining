"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81272"],
  {
    887706: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = t(399606),
        i = t(314897);
      function r() {
        return (0, l.e7)([i.default], () => i.default.isAuthenticated());
      }
    },
    601911: function (n, e, t) {
      t.d(e, {
        y: function () {
          return i;
        },
      });
      var l = t(591759);
      function i(n, e) {
        let t = n.getIconSource(e);
        if (null != t && "number" != typeof t) {
          let n;
          if (
            (Array.isArray(t) ? t.length > 0 && (n = t[0].uri) : (n = t.uri),
            null != n)
          ) {
            var i;
            return null !== (i = l.Z.toURLSafe(n)) && void 0 !== i ? i : void 0;
          }
        }
      }
    },
    504211: function (n, e, t) {
      t.d(e, {
        B: function () {
          return i;
        },
        X: function () {
          return a;
        },
      });
      var l,
        i,
        r = t(626135),
        o = t(981631);
      function a(n, e, t) {
        r.default.track(o.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: n,
          area: e,
          sku_id: t,
        });
      }
      ((l = i || (i = {})).STORE_MODAL = "store_modal"),
        (l.DETAILS_MODAL = "details_modal"),
        (l.STORE_EMBED = "store_embed"),
        (l.SKU_EMBED = "sku_embed");
    },
    110742: function (n, e, t) {
      t.d(e, {
        M: function () {
          return r;
        },
      }),
        t(47120);
      var l = t(442837),
        i = t(580130);
      function r(n) {
        return (0, l.e7)(
          [i.Z],
          () => {
            let e = i.Z.getForSku(n);
            if (null == e) return !1;
            let t = 0;
            for (let n of e) {
              var l, r;
              let e =
                null !==
                  (r =
                    null === (l = n.endsAt) || void 0 === l
                      ? void 0
                      : l.getTime()) && void 0 !== r
                  ? r
                  : 1 / 0;
              e >= t && (t = e);
            }
            return t > new Date().getTime();
          },
          [n],
        );
      }
    },
    886253: function (n, e, t) {
      t.d(e, {
        A: function () {
          return h;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        o = t(264043),
        a = t(812206),
        s = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(533159),
        p = t(981631),
        f = t(388032),
        v = t(213891),
        m = t(566809);
      function h(n) {
        let {
            appId: e,
            skuId: t,
            transitionState: h,
            onClose: x,
            onHeaderTitleClick: S,
            children: I,
            footer: g,
          } = n,
          Z = (0, i.e7)(
            [a.Z, o.Z],
            () => {
              var n;
              return null !== (n = a.Z.getApplication(e)) && void 0 !== n
                ? n
                : o.Z.getApplicationRecord(e);
            },
            [e],
          );
        if (null == Z) return null;
        let T = (0, u.y)(Z, 25),
          { termsOfServiceUrl: N, privacyPolicyUrl: b } = Z;
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: h,
          size: r.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              className: v.modalHeader,
              children: [
                (0, l.jsxs)(r.Clickable, {
                  className: v.modalTitle,
                  onClick: S,
                  children: [
                    null != T &&
                      (0, l.jsx)("img", {
                        src: T.href,
                        alt: "",
                        className: m.appIcon,
                      }),
                    (0, l.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: Z.name,
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: x,
                  className: v.modalCloseBtn,
                }),
              ],
            }),
            I,
            (0, l.jsxs)(r.ModalFooter, {
              className: m.footer,
              children: [
                null != N || null != b
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, l.jsx)(d.Z, {
                        termsOfServiceUrl: N,
                        privacyPolicyUrl: b,
                      }),
                    })
                  : (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: f.intl.string(f.t["3ZY+0N"]),
                    }),
                (0, l.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    s.wS &&
                      (0, l.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
                        "aria-label": f.intl.string(f.t.WqhZsr),
                        className: m.linkButton,
                        innerClassName: m.innerLinkButton,
                        onClick: () => {
                          let n = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              p.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                e,
                                t,
                              ),
                            );
                          (0, s.JG)(n),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                f.intl.string(f.t["L/PwZW"]),
                                r.ToastType.SUCCESS,
                              ),
                            ),
                            (0, c.X)(e, c.B.DETAILS_MODAL, t);
                        },
                        children: (0, l.jsx)(r.LinkIcon, {
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
    147496: function (n, e, t) {
      t.r(e),
        t.d(e, {
          ItemDetailsModal: function () {
            return x;
          },
        });
      var l = t(200651);
      t(192379);
      var i = t(752843),
        r = t(442837),
        o = t(481060),
        a = t(55563),
        s = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        f = t(680005),
        v = t(938337),
        m = t(981631),
        h = t(388032);
      function x(n) {
        var e, t, x, S;
        let {
            onClose: I,
            transitionState: g,
            skuId: Z,
            appId: T,
            onHeaderTitleClick: N,
          } = n,
          b = (0, r.e7)([s.Z], () => s.Z.getForSKU(Z), [Z]),
          j = (0, r.e7)([a.Z], () => a.Z.get(Z), [Z]),
          E = (0, d.M)(Z);
        if (null == j) return null;
        let C = null !== (t = j.name) && void 0 !== t ? t : "",
          k =
            null !==
              (x =
                null == b
                  ? void 0
                  : null === (e = b.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== x
              ? x
              : void 0,
          R =
            (null == b ? void 0 : b.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(T, b.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          _ = j.type === m.epS.DURABLE && E,
          O =
            j.type === m.epS.DURABLE
              ? _
                ? h.intl.string(h.t.bm82mp)
                : h.intl.string(h.t["6gprwc"])
              : void 0,
          { price: P } = j;
        return null == P
          ? null
          : (0, l.jsx)(p.A, {
              appId: T,
              skuId: j.id,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : I,
              onClose: I,
              footer: (0, l.jsx)(f.Y, { appId: T, sku: j }),
              children: (0, l.jsx)(v.i, {
                appId: T,
                skuId: j.id,
                title: C,
                description: k,
                imgSrc: R,
                tag: null != O ? (0, l.jsx)(i.V, { text: O }) : void 0,
                FallbackIcon: o.TicketIcon,
              }),
            });
      }
    },
    680005: function (n, e, t) {
      t.d(e, {
        Y: function () {
          return I;
        },
        p: function () {
          return S;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(860911),
        r = t(481060),
        o = t(100527),
        a = t(906732),
        s = t(887706),
        u = t(929011),
        c = t(696906),
        d = t(703656),
        p = t(626135),
        f = t(937615),
        v = t(110742),
        m = t(981631),
        h = t(388032),
        x = t(962083);
      function S(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            skuId: o,
            subscriptionPlan: a,
            icon: s,
            cannotOpenReason: u,
          } = n,
          d = null != a ? (0, f.xg)(a) : null,
          p = null == u || u === c.HO.Loading,
          v = (0, c.FC)(u, null != d ? d : "");
        return p
          ? (0, l.jsx)(g, {
              appId: e,
              skuId: o,
              onClick: (n) => {
                i(n), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)("div", {
                className: x.btnContent,
                children: [
                  s,
                  null != d
                    ? h.intl.formatToPlainString(h.t.i4T8v7, { rate: d })
                    : h.intl.string(h.t.uuzaAA),
                ],
              }),
            })
          : (0, l.jsx)(Z, { className: t, children: v });
      }
      function I(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            sku: s,
            icon: c,
          } = n,
          { analyticsLocations: d } = (0, a.ZP)(o.Z.APP_STOREFRONT),
          p = () => {
            (0, u.r)({ appId: e, skuId: s.id, analyticsLocations: d });
          },
          S = (0, v.M)(s.id),
          I = s.type === m.epS.DURABLE && S,
          { price: T } = s;
        return null == T
          ? null
          : I
            ? (0, l.jsx)(Z, {
                className: t,
                children: h.intl.string(h.t["/bUsx8"]),
              })
            : (0, l.jsx)(g, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                  (null != i ? i : p)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: x.btnContent,
                  children: [
                    c,
                    h.intl.format(h.t.Xp5WTk, {
                      price: (0, f.T4)(T.amount, T.currency),
                    }),
                  ],
                }),
              });
      }
      function g(n) {
        let { appId: e, skuId: t, onClick: o, ...a } = n,
          u = (0, s.Z)();
        return (0, l.jsx)(r.Button, {
          ...a,
          onClick: (n) => {
            if (
              (p.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: e,
                sku_id: t,
              }),
              !u)
            ) {
              n.preventDefault(), n.stopPropagation();
              let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                r = (0, i.Ui)(l, !1);
              (0, d.uL)(r);
              return;
            }
            null == o || o(n);
          },
        });
      }
      function Z(n) {
        let { className: e, children: t } = n;
        return (0, l.jsx)(r.Button, {
          disabled: !0,
          className: e,
          look: r.Button.Looks.OUTLINED,
          color: r.Button.Colors.PRIMARY,
          children: t,
        });
      }
    },
    519896: function (n, e, t) {
      t.r(e),
        t.d(e, {
          SubscriptionDetailsModal: function () {
            return x;
          },
        });
      var l = t(200651),
        i = t(192379),
        r = t(269210),
        o = t(752843),
        a = t(481060),
        s = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        p = t(73346),
        f = t(591759),
        v = t(886253),
        m = t(680005),
        h = t(938337);
      function x(n) {
        var e, t;
        let {
            appId: x,
            subscriptionType: S,
            onClose: I,
            skuId: g,
            guildId: Z,
            transitionState: T,
            onHeaderTitleClick: N,
          } = n,
          { data: b } = (0, u.H)(g),
          j = b[0],
          { data: E } = (0, s.Z)(g),
          C = i.useMemo(() => {
            var n;
            return (null == E ? void 0 : E.thumbnail) != null &&
              null !== (n = f.Z.toURLSafe((0, p._W)(x, E.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [x, null == E ? void 0 : E.thumbnail]),
          k = i.useMemo(() => {
            let n = null == E ? void 0 : E.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, c.n)(x, n.icon),
              }));
          }, [x, null == E ? void 0 : E.benefits]),
          { openModal: R, cannotOpenReason: _ } = (0, d.ZP)({
            skuId: g,
            subscribeForGuild: null != Z ? Z : void 0,
          });
        return null == E
          ? null
          : (0, l.jsx)(v.A, {
              appId: x,
              skuId: g,
              transitionState: T,
              onHeaderTitleClick: null != N ? N : I,
              onClose: I,
              footer: (0, l.jsx)(m.p, {
                onClick: R,
                appId: x,
                subscriptionType: S,
                skuId: g,
                subscriptionPlan: j,
                cannotOpenReason: _,
              }),
              children: (0, l.jsx)(h.i, {
                appId: x,
                skuId: g,
                benefits:
                  null != k
                    ? k.map((n) =>
                        (0, l.jsx)(
                          r.G,
                          {
                            name: n.title,
                            icon: n.icon,
                            description: n.description,
                          },
                          n.id,
                        ),
                      )
                    : void 0,
                description:
                  null !== (e = E.description) && void 0 !== e ? e : void 0,
                imgSrc: C,
                title:
                  null !== (t = null == j ? void 0 : j.name) && void 0 !== t
                    ? t
                    : E.summary,
                tag: (0, l.jsx)(o.Z, { type: S }),
                FallbackIcon: a.BadgeIcon,
              }),
            });
      }
    },
    533159: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(794295),
        r = t(388032),
        o = t(130685);
      function a(n) {
        let { termsOfServiceUrl: e, privacyPolicyUrl: t } = n;
        return null == e && null == t
          ? null
          : (0, l.jsxs)("span", {
              className: o.text,
              children: [
                null != e &&
                  (0, l.jsx)(i.Z, {
                    href: e,
                    children: r.intl.string(r.t["8S0kcH"]),
                  }),
                null != e &&
                  null != t &&
                  (0, l.jsx)("span", {
                    "aria-disabled": "true",
                    children: "•",
                  }),
                null != t &&
                  (0, l.jsx)(i.Z, {
                    href: t,
                    children: r.intl.string(r.t.ZpyeCg),
                  }),
              ],
            });
      }
    },
    938337: function (n, e, t) {
      t.d(e, {
        i: function () {
          return u;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(512100),
        o = t(906732),
        a = t(626135),
        s = t(981631);
      function u(n) {
        let { appId: e, skuId: t, ...u } = n,
          { analyticsLocations: c } = (0, o.ZP)();
        return (
          i.useEffect(() => {
            a.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: e,
              sku_id: t,
              location_stack: c,
            });
          }, [c, e, t]),
          (0, l.jsx)(r.u, { ...u })
        );
      }
    },
    724870: function (n, e, t) {
      t.d(e, {
        h: function () {
          return f;
        },
        m: function () {
          return m;
        },
      }),
        t(789020);
      var l = t(200651);
      t(192379);
      var i = t(512722),
        r = t.n(i),
        o = t(481060),
        a = t(496929),
        s = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        p = t(981631);
      function f(n) {
        let {
          initialPlanId: e,
          activeSubscription: i,
          analyticsObject: r,
          analyticsLocation: a,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: f,
          skuId: v,
          guildId: m,
          reviewWarningMessage: h,
          applicationId: x,
          showBenefitsFirst: S,
          onComplete: I,
          forcesTransitionToGuild: g,
        } = n;
        (0, o.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              o = (
                await Promise.all([
                  t.e("52249"),
                  t.e("26182"),
                  t.e("32776"),
                  t.e("8573"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: p } = await Promise.all([
                t.e("63288"),
                t.e("77298"),
                t.e("23357"),
                t.e("12013"),
                t.e("99783"),
                t.e("26182"),
                t.e("95900"),
                t.e("40031"),
              ]).then(t.bind(t, 759386)),
              Z = p({ guildId: m, showBenefitsFirst: S });
            return (t) =>
              (0, l.jsx)(n, {
                applicationId: x,
                activeSubscription: i,
                stepConfigs: Z,
                skuIDs: [v],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(o, {
                    ...t,
                    initialPlanId: e,
                    skuId: v,
                    analyticsLocations: s,
                    analyticsObject: r,
                    analyticsLocation: a,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: f,
                    reviewWarningMessage: h,
                    applicationId: x,
                    guildId: null != m ? m : void 0,
                    onComplete: I,
                    forcesTransitionToGuild: g,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let v = async (n, e) => {
        let t = (await (0, a.yD)(n))
          .filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date())
          .find((n) => n.sku_id === e);
        r()(null == t, "User already has an active subscription to this SKU");
      };
      async function m(n) {
        var e;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: o,
            analyticsLocations: a,
            renderHeader: d,
          } = n,
          m = c.Z.get(l),
          h = u.Z.getForSKU(l);
        r()(null != m, "Failed to find SKU");
        let x = (0, s.KW)(m.flags);
        r()(x, "Guild application subscriptions unsupported!"),
          await v(t, l),
          f({
            initialPlanId:
              null != i
                ? i
                : null === (e = h[0]) || void 0 === e
                  ? void 0
                  : e.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: o,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: t,
          });
      }
    },
    87484: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(772848),
        r = t(481060),
        o = t(976255),
        a = t(667),
        s = t(626135),
        u = t(981631);
      function c(n) {
        let {
            applicationId: e,
            skuId: c,
            onClose: d,
            onComplete: p,
            analyticsLocations: f,
            analyticsLocationObject: v,
            contextKey: m,
          } = n,
          h = !1,
          x = (0, i.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              t.e("63288"),
              t.e("77298"),
              t.e("23357"),
              t.e("12013"),
              t.e("52249"),
              t.e("99783"),
              t.e("26182"),
              t.e("95900"),
              t.e("32776"),
              t.e("76547"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: i, ...r } = t;
              return (0, l.jsx)(n, {
                ...r,
                loadId: x,
                applicationId: e,
                skuId: c,
                analyticsLocations: f,
                analyticsLocationObject: v,
                onClose: (n) => {
                  i(), null == d || d(n);
                },
                onComplete: (n) => {
                  (h = !0), null == p || p(n);
                },
              });
            };
          },
          {
            contextKey: m,
            onCloseCallback: () => {
              !h &&
                s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: x,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: v,
                  is_gift: !1,
                  application_id: e,
                  location_stack: f,
                }),
                (0, o.fw)(),
                (0, a.p)(),
                null == d || d(h);
            },
            onCloseRequest: u.dG4,
          },
        );
      }
    },
    801249: function (n, e, t) {
      let l;
      var i,
        r = t(442837),
        o = t(570140);
      function a(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      let s = { lastGuildDismissedTime: {} };
      class u extends (i = r.ZP.DeviceSettingsStore) {
        initialize() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
          l = n;
        }
        getUserAgnosticState() {
          return l;
        }
        getLastGuildDismissedTime(n) {
          return l.lastGuildDismissedTime[n];
        }
      }
      a(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        a(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (e.Z = new u(o.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: e } = n;
            l.lastGuildDismissedTime[e] = Date.now();
          },
        }));
    },
    270144: function (n, e, t) {
      t.d(e, {
        CR: function () {
          return b;
        },
        Ev: function () {
          return E;
        },
        LM: function () {
          return g;
        },
        cr: function () {
          return k;
        },
        h6: function () {
          return Z;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return N;
        },
        sp: function () {
          return T;
        },
      }),
        t(653041),
        t(47120),
        t(773603),
        t(789020);
      var l,
        i,
        r = t(192379),
        o = t(442837),
        a = t(496929),
        s = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        p = t(55563),
        f = t(801249),
        v = t(106976),
        m = t(307643),
        h = t(488915),
        x = t(171246),
        S = t(981631);
      let I = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let g = (n) => {
        let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
          i = (0, o.e7)(
            [h.Z],
            () => (null != e ? h.Z.getEntitlementsForGuildFetchState(e) : null),
            [e],
          );
        return (
          r.useEffect(() => {
            if (null == e || e === S.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(e);
            t && (n === h.M.NOT_FETCHED || l) && (0, v.i1)(e);
          }, [e, t, l]),
          { entitlementsLoaded: i === h.M.FETCHED }
        );
      };
      function Z(n) {
        var e;
        let t =
            null !== (e = null == n ? void 0 : n.id) && void 0 !== e
              ? e
              : S.lds,
          { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, o.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n)),
          }),
          i = (0, o.e7)([f.Z], () => f.Z.getLastGuildDismissedTime(t)),
          a = (0, o.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(t),
              e = h.Z.getEntitlementsForGuild(t, !1),
              l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
          }),
          s = (0, o.cj)([p.Z], () => p.Z.getSKUs()),
          c = r.useMemo(
            () =>
              a.filter((n) => {
                let e = s[n.skuId];
                return null != e && e.available;
              }),
            [a, s],
          );
        return l
          ? c.filter(
              (n) =>
                null != n.endsAt &&
                n.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - I),
            )
          : [];
      }
      let T = (n) => {
          let [e, t] = r.useState(!1),
            l = r.useMemo(() => n.map(x.bZ), [n]);
          return (
            r.useEffect(() => {
              t(!0),
                Promise.all(l.map((n) => (0, v.vY)(n)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  });
            }, [l]),
            { loading: e }
          );
        },
        N = () => {
          let [n, e] = r.useState(0);
          return (
            r.useEffect(() => {
              e(1),
                Promise.all([
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.qc2.PURCHASE,
                  }),
                ])
                  .catch(() => {
                    e(3);
                  })
                  .then(() => {
                    e(2);
                  });
            }, []),
            { loadState: n }
          );
        };
      function b(n, e) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [l, i] = r.useState([]),
          [a, u] = r.useState(!1);
        return (
          r.useLayoutEffect(() => {
            null != n &&
              t &&
              (u(!0),
              (0, m.tn)(n, e)
                .then(i)
                .finally(() => {
                  u(!1);
                }));
          }, [n, e, t]),
          {
            guilds: (0, o.Wu)(
              [s.Z],
              () => l.map((n) => s.Z.getGuild(n)).filter((n) => null != n),
              [l],
            ),
            isFetching: a,
          }
        );
      }
      let j = (n) => n.items;
      function E(n, e) {
        return R(n, e, j);
      }
      let C = (n) => {
        var e;
        return null === (e = n.renewalMutations) || void 0 === e
          ? void 0
          : e.items;
      };
      function k(n, e) {
        return R(n, e, C);
      }
      function R(n, e, t) {
        let l = null == n ? void 0 : n.bundledSkuIds,
          i = null == n ? void 0 : n.flags,
          [a, s] = (0, o.Wu)(
            [d.ZP, c.Z],
            () => {
              var n, r;
              for (let o of null !==
                (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n
                ? n
                : []) {
                if (
                  (0, x.KK)(null != i ? i : 0) &&
                  null != e &&
                  (null === (r = o.metadata) || void 0 === r
                    ? void 0
                    : r.application_subscription_guild_id) !== e
                )
                  continue;
                let n = t(o);
                if (null == n) continue;
                let a = n
                  .map((n) => c.Z.get(n.planId))
                  .find((n) => {
                    var e;
                    return (
                      null != n &&
                      null !== (e = null == l ? void 0 : l.includes(n.skuId)) &&
                      void 0 !== e &&
                      e
                    );
                  });
                if (null != a) return [o, a];
              }
              return [];
            },
            [i, e, t, l],
          );
        return r.useMemo(() => {
          if (null != a && null != s)
            return { subscription: a, subscriptionPlan: s };
        }, [a, s]);
      }
    },
    757746: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(558381),
        r = t(551428);
      let o = (0, l.Kb)(r.Z, {
        queryId: (n) => (null != n ? ["storeListing", n] : null),
        get: (n) => (null != n ? r.Z.getForSKU(n) : null),
        load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (n, e, t) {
      t.d(e, {
        H: function () {
          return a;
        },
      }),
        t(47120),
        t(411104);
      var l = t(192379),
        i = t(442837),
        r = t(821849),
        o = t(509545);
      function a(n) {
        let [e, t] = l.useState(!1),
          { plans: a, isFetching: s } = (0, i.cj)(
            [o.Z],
            () => {
              let e = o.Z.getForSKU(n);
              return { plans: e, isFetching: o.Z.isFetchingForSKU(n) };
            },
            [n],
          );
        return (
          l.useEffect(() => {
            !s &&
              (t(!1),
              (0, r.GZ)(n)
                .then(() => {
                  t(!1);
                })
                .catch(() => {
                  t(!0);
                }));
          }, [n]),
          {
            data: a,
            isLoading: s,
            error: e ? Error("SubscriptionPlans failed to fetch") : void 0,
          }
        );
      }
    },
    929011: function (n, e, t) {
      t.d(e, {
        H: function () {
          return c;
        },
        r: function () {
          return d;
        },
      }),
        t(789020);
      var l = t(200651),
        i = t(481060),
        r = t(724870),
        o = t(87484),
        a = t(171246),
        s = t(689011),
        u = t(981631);
      async function c(n) {
        let {
            subscriptionPlanId: e,
            sku: o,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: p,
            analyticsLocations: f,
            analyticsLocation: v,
          } = n,
          { promise: m, resolve: h } = Promise.withResolvers();
        if ((0, a.KK)(o.flags)) {
          let { promise: n, resolve: e } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t
              .e("43889")
              .then(t.bind(t, 279875));
            return (t) =>
              (0, l.jsx)(n, {
                transitionState: t.transitionState,
                onClose: t.onClose,
                sku: o,
                onSelect: e,
                currentGuildId: p,
              });
          }),
            (p = await n);
        }
        return (
          (0, r.h)({
            initialPlanId: e,
            skuId: o.id,
            activeSubscription: null != d ? d : null,
            applicationId: o.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (n, e, t) =>
              (0, l.jsx)(s.t, { step: t, onClose: () => e(!1) }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: f,
            analyticsLocation: v,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          m
        );
      }
      function d(n) {
        let { appId: e, skuId: t, analyticsLocations: l } = n;
        (0, o.Z)({ applicationId: e, skuId: t, analyticsLocations: l });
      }
    },
    696906: function (n, e, t) {
      t.d(e, {
        FC: function () {
          return T;
        },
        HO: function () {
          return l;
        },
      }),
        t(390547),
        t(789020);
      var l,
        i,
        r = t(192379),
        o = t(512722),
        a = t.n(o),
        s = t(442837),
        u = t(570140),
        c = t(821849),
        d = t(906732),
        p = t(887706),
        f = t(728345),
        v = t(509545),
        m = t(55563),
        h = t(551428),
        x = t(270144),
        S = t(488915),
        I = t(171246),
        g = t(929011),
        Z = t(388032);
      function T(n, e) {
        let t;
        switch (n) {
          case 3:
            t = Z.intl.formatToPlainString(Z.t.k1ew5O, { rate: e });
            break;
          case 2:
            t = Z.intl.formatToPlainString(Z.t["Hs3Y+P"], { rate: e });
            break;
          case 4:
            t = Z.intl.string(Z.t.HDFZLS);
            break;
          case 1:
            t = Z.intl.string(Z.t.DLAKbm);
        }
        return t;
      }
      ((i = l || (l = {}))[(i.Loading = 0)] = "Loading"),
        (i[(i.ItemUnavailable = 1)] = "ItemUnavailable"),
        (i[(i.CurrentPlan = 2)] = "CurrentPlan"),
        (i[(i.UpcomingPlan = 3)] = "UpcomingPlan"),
        (i[(i.OtherSubscription = 4)] = "OtherSubscription");
      e.ZP = (n) => {
        var e, t, l;
        let i,
          {
            subscribeForGuild: o,
            analyticsLocation: Z,
            skuId: T,
            onComplete: N,
          } = n,
          b = (0, s.e7)([m.Z], () => (null != T ? m.Z.get(T) : void 0), [T]),
          j = (0, s.e7)([h.Z], () => (null != T ? h.Z.getForSKU(T) : void 0), [
            T,
          ]),
          E =
            null ===
              (e = (0, s.Wu)([v.Z], () => (null != T ? v.Z.getForSKU(T) : []), [
                T,
              ])[0]) || void 0 === e
              ? void 0
              : e.id,
          C = (0, s.e7)(
            [m.Z],
            () => (null != T ? m.Z.getParentSKU(T) : void 0),
            [T],
          ),
          k = null == C ? void 0 : C.bundledSkuIds,
          R = (0, s.Wu)(
            [v.Z],
            () => {
              var n;
              return null !==
                (n = null == k ? void 0 : k.flatMap(v.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [k],
          ),
          _ = r.useMemo(() => R.map((n) => n.id), [R]),
          O = (0, s.e7)(
            [S.Z],
            () =>
              null != o &&
              S.Z.getEntitlementsForGuild(o, !0).some((n) => {
                var e;
                return (
                  null !== (e = null == k ? void 0 : k.includes(n.skuId)) &&
                  void 0 !== e &&
                  e
                );
              }),
            [k, o],
          ),
          P = null == b ? void 0 : b.applicationId,
          A =
            (null == j ? void 0 : j.published) === !0 &&
            (null == b ? void 0 : b.isAvailable()) === !0,
          { app: L } = (0, f.Rt)(P),
          { analyticsLocations: y } = (0, d.ZP)(),
          M = (0, x.Ev)(C, null != o ? o : void 0),
          D = (0, x.cr)(C, null != o ? o : void 0),
          { entitlementsLoaded: F } = (0, x.LM)({ guildId: o });
        null == o && (F = !0);
        let U = (0, p.Z)(),
          w = (0, I.KK)(
            null !== (l = null == b ? void 0 : b.flags) && void 0 !== l ? l : 0,
          );
        return (
          F && null != L && null != T
            ? A
              ? (null == M ? void 0 : M.subscriptionPlan.skuId) === T &&
                null == D
                ? (i = 2)
                : (null == D
                      ? void 0
                      : null === (t = D.subscriptionPlan) || void 0 === t
                        ? void 0
                        : t.skuId) === T
                  ? (i = 3)
                  : w && O && null == M && (i = 4)
              : (i = 1)
            : (i = 0),
          r.useEffect(() => {
            A &&
              null != T &&
              U &&
              !(v.Z.isFetchingForSKU(T) || v.Z.isLoadedForSKU(T)) &&
              u.Z.wait(() => {
                (0, c.GZ)(T);
              });
          }, [A, T, U]),
          {
            openModal: r.useCallback(() => {
              a()(null != L, "No application"),
                a()(null != T, "No SKU ID"),
                a()(A, "Cannot purchase this unpublished plan"),
                (0, g.H)({
                  subscriptionPlanId: E,
                  sku: b,
                  subscriptionGroupPlanIds: _,
                  activeSubscription: null == M ? void 0 : M.subscription,
                  subscribeForGuild: o,
                  analyticsLocations: y,
                  analyticsLocation: Z,
                }).then(() => {
                  null == N || N();
                });
            }, [
              L,
              T,
              A,
              E,
              b,
              _,
              o,
              y,
              Z,
              null == M ? void 0 : M.subscription,
              N,
            ]),
            cannotOpenReason: i,
          }
        );
      };
    },
    541822: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(557533),
        o = t.n(r),
        a = t(349361),
        s = t(698117);
      function u(n) {
        let { children: e, gradientClassName: t, ...r } = n,
          u = i.useRef(null),
          [c, d] = i.useState(!0),
          p = () => {
            var n;
            (null === (n = u.current) || void 0 === n
              ? void 0
              : n.isScrolledToBottom()) === !0
              ? d(!1)
              : d(!0);
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(a.h2, {
              fade: !0,
              ...r,
              ref: (n) => {
                null != n && ((u.current = n), p());
              },
              onScroll: p,
              children: e,
            }),
            (0, l.jsx)("div", {
              className: o()(s.containerScrollGradient, t),
              "data-shown": c,
            }),
          ],
        });
      }
    },
    512100: function (n, e, t) {
      t.d(e, {
        u: function () {
          return u;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(409794),
        r = t(777207),
        o = t(541822),
        a = t(330711),
        s = t(770561);
      function u(n) {
        let {
            benefits: e,
            description: t,
            imgSrc: u,
            title: c,
            tag: d,
            FallbackIcon: p,
          } = n,
          f =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: s.container,
          children: (0, l.jsx)(o.Z, {
            className: s.scroller,
            children: (0, l.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: s.headerBackground,
                      style: f,
                    }),
                    (0, l.jsx)("div", {
                      className: s.headerImage,
                      children:
                        null != u
                          ? (0, l.jsx)("img", { src: u.toString(), alt: "" })
                          : (0, l.jsx)(p, {
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
                        null != d && (0, l.jsx)("div", { children: d }),
                        (0, l.jsx)(i.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: c,
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
                    null != e &&
                      (0, l.jsxs)("div", {
                        className: s.benefits,
                        children: [
                          (0, l.jsx)(r.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
    269210: function (n, e, t) {
      t.d(e, {
        G: function () {
          return v;
        },
        U: function () {
          return f;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(557533),
        r = t.n(i),
        o = t(489948),
        a = t(368072),
        s = t(777207),
        u = t(692547),
        c = t(330711),
        d = t(56273),
        p = t(103077);
      function f(n) {
        let {
          description: e,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: f,
          title: v,
          onDetails: m,
          benefitItems: h,
          benefitsSummary: x,
          subtitle: S,
        } = n;
        return (0, l.jsx)(o.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != m ? m() : null != f && f();
            },
            children: [
              (0, l.jsx)("div", {
                className: d.card,
                children: (0, l.jsxs)("div", {
                  className: d.body,
                  children: [
                    (0, l.jsx)(s.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: v,
                    }),
                    (0, l.jsx)("div", {
                      className: d.image,
                      children:
                        null != t
                          ? (0, l.jsx)("img", { src: t.toString(), alt: "" })
                          : (0, l.jsx)(a.V, {
                              color: u.Z.colors.ICON_PRIMARY,
                              size: "custom",
                              height: 48,
                              width: 48,
                            }),
                    }),
                    null != i
                      ? i({
                          className: d.purchaseBtn,
                          onClick: (n) => {
                            n.stopPropagation(), null == f || f();
                          },
                        })
                      : null,
                    S,
                    null != e &&
                      "" !== e &&
                      (0, l.jsx)(s.x, {
                        className: d.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: e,
                      }),
                  ],
                }),
              }),
              null != x &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(s.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: x,
                    }),
                  }),
                }),
              null != h &&
                h.length > 0 &&
                (0, l.jsx)("div", {
                  className: d.benefits,
                  children: (0, l.jsx)("div", {
                    className: d.benefitsContainer,
                    children: (0, l.jsxs)("div", {
                      className: d.benefitsList,
                      children: [
                        (0, l.jsx)(s.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        h.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                h.slice(0, 3),
                                (0, l.jsx)(s.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.STOREFRONT_MORE_BENEFITS.format(
                                      { count: h.length - 3 },
                                    ),
                                }),
                              ],
                            })
                          : h,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function v(n) {
        let { icon: e, name: t, description: i } = n;
        return (0, l.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, l.jsx)("div", { className: d.cardBenefitIcon, children: e }),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(s.x, { variant: "text-sm/semibold", children: t }),
                null != i &&
                  (0, l.jsx)(s.x, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: i,
                  }),
              ],
            }),
          ],
        });
      }
    },
    752843: function (n, e, t) {
      t.d(e, {
        V: function () {
          return d;
        },
        Z: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(628028),
        r = t(220427),
        o = t(777207),
        a = t(692547),
        s = t(330711),
        u = t(350727);
      function c(n) {
        let { type: e } = n;
        return (0, l.jsx)(d, {
          icon:
            "user" === e
              ? (0, l.jsx)(r.t, {
                  size: "xxs",
                  color: a.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: a.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === e
              ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(n) {
        let { icon: e, text: t } = n;
        return (0, l.jsxs)("div", {
          className: u.container,
          children: [
            e,
            (0, l.jsx)(o.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: t,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=12c5f321e1522e38c086.js.map
