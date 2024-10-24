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
        s = t(981631);
      function a(n, e, t) {
        r.default.track(s.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
        s = t(264043),
        a = t(812206),
        o = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(533159),
        f = t(981631),
        p = t(689938),
        v = t(213891),
        m = t(566809);
      function h(n) {
        let {
            appId: e,
            skuId: t,
            transitionState: h,
            onClose: I,
            onHeaderTitleClick: S,
            children: x,
            footer: E,
          } = n,
          T = (0, i.e7)(
            [a.Z, s.Z],
            () => {
              var n;
              return null !== (n = a.Z.getApplication(e)) && void 0 !== n
                ? n
                : s.Z.getApplicationRecord(e);
            },
            [e],
          );
        if (null == T) return null;
        let g = (0, u.y)(T, 25),
          { termsOfServiceUrl: R, privacyPolicyUrl: N } = T;
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
                    null != g &&
                      (0, l.jsx)("img", {
                        src: g.href,
                        alt: "",
                        className: m.appIcon,
                      }),
                    (0, l.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: T.name,
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: I,
                  className: v.modalCloseBtn,
                }),
              ],
            }),
            x,
            (0, l.jsxs)(r.ModalFooter, {
              className: m.footer,
              children: [
                null != R || null != N
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, l.jsx)(d.Z, {
                        termsOfServiceUrl: R,
                        privacyPolicyUrl: N,
                      }),
                    })
                  : (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    o.wS &&
                      (0, l.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
                        "aria-label": p.Z.Messages.COPY_LINK,
                        className: m.linkButton,
                        innerClassName: m.innerLinkButton,
                        onClick: () => {
                          let n = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                e,
                                t,
                              ),
                            );
                          (0, o.JG)(n),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                p.Z.Messages.COPIED_LINK,
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
                    E,
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
            return I;
          },
        });
      var l = t(200651);
      t(192379);
      var i = t(752843),
        r = t(442837),
        s = t(481060),
        a = t(55563),
        o = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        f = t(886253),
        p = t(680005),
        v = t(938337),
        m = t(981631),
        h = t(689938);
      function I(n) {
        var e, t, I, S;
        let {
            onClose: x,
            transitionState: E,
            skuId: T,
            appId: g,
            onHeaderTitleClick: R,
          } = n,
          N = (0, r.e7)([o.Z], () => o.Z.getForSKU(T), [T]),
          O = (0, r.e7)([a.Z], () => a.Z.get(T), [T]),
          Z = (0, d.M)(T);
        if (null == O) return null;
        let _ = null !== (t = O.name) && void 0 !== t ? t : "",
          C =
            null !==
              (I =
                null == N
                  ? void 0
                  : null === (e = N.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== I
              ? I
              : void 0,
          j =
            (null == N ? void 0 : N.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(g, N.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          b = O.type === m.epS.DURABLE && Z,
          A =
            O.type === m.epS.DURABLE
              ? b
                ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = O;
        return null == L
          ? null
          : (0, l.jsx)(f.A, {
              appId: g,
              skuId: O.id,
              transitionState: E,
              onHeaderTitleClick: null != R ? R : x,
              onClose: x,
              footer: (0, l.jsx)(p.Y, { appId: g, sku: O }),
              children: (0, l.jsx)(v.i, {
                appId: g,
                skuId: O.id,
                title: _,
                description: C,
                imgSrc: j,
                tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                FallbackIcon: s.TicketIcon,
              }),
            });
      }
    },
    680005: function (n, e, t) {
      t.d(e, {
        Y: function () {
          return x;
        },
        p: function () {
          return S;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(860911),
        r = t(481060),
        s = t(100527),
        a = t(906732),
        o = t(887706),
        u = t(929011),
        c = t(696906),
        d = t(703656),
        f = t(626135),
        p = t(937615),
        v = t(110742),
        m = t(981631),
        h = t(689938),
        I = t(962083);
      function S(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            skuId: s,
            subscriptionPlan: a,
            icon: o,
            cannotOpenReason: u,
          } = n,
          d = null != a ? (0, p.xg)(a) : null,
          f = null == u || u === c.HO.Loading,
          v = (0, c.FC)(u, null != d ? d : "");
        return f
          ? (0, l.jsx)(E, {
              appId: e,
              skuId: s,
              onClick: (n) => {
                i(n), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)("div", {
                className: I.btnContent,
                children: [
                  o,
                  null != d
                    ? h.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d })
                    : h.Z.Messages.STOREFRONT_SUBSCRIBE,
                ],
              }),
            })
          : (0, l.jsx)(T, { className: t, children: v });
      }
      function x(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            sku: o,
            icon: c,
          } = n,
          { analyticsLocations: d } = (0, a.ZP)(s.Z.APP_STOREFRONT),
          f = () => {
            (0, u.r)({ appId: e, skuId: o.id, analyticsLocations: d });
          },
          S = (0, v.M)(o.id),
          x = o.type === m.epS.DURABLE && S,
          { price: g } = o;
        return null == g
          ? null
          : x
            ? (0, l.jsx)(T, {
                className: t,
                children: h.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(E, {
                appId: e,
                skuId: o.id,
                onClick: (n) => {
                  (null != i ? i : f)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: I.btnContent,
                  children: [
                    c,
                    h.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, p.T4)(g.amount, g.currency),
                    }),
                  ],
                }),
              });
      }
      function E(n) {
        let { appId: e, skuId: t, onClick: s, ...a } = n,
          u = (0, o.Z)();
        return (0, l.jsx)(r.Button, {
          ...a,
          onClick: (n) => {
            if (
              (f.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
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
            null == s || s(n);
          },
        });
      }
      function T(n) {
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
            return I;
          },
        });
      var l = t(200651),
        i = t(192379),
        r = t(269210),
        s = t(752843),
        a = t(481060),
        o = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        f = t(73346),
        p = t(591759),
        v = t(886253),
        m = t(680005),
        h = t(938337);
      function I(n) {
        var e, t;
        let {
            appId: I,
            subscriptionType: S,
            onClose: x,
            skuId: E,
            guildId: T,
            transitionState: g,
            onHeaderTitleClick: R,
          } = n,
          { data: N } = (0, u.H)(E),
          O = N[0],
          { data: Z } = (0, o.Z)(E),
          _ = i.useMemo(() => {
            var n;
            return (null == Z ? void 0 : Z.thumbnail) != null &&
              null !== (n = p.Z.toURLSafe((0, f._W)(I, Z.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [I, null == Z ? void 0 : Z.thumbnail]),
          C = i.useMemo(() => {
            let n = null == Z ? void 0 : Z.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, c.n)(I, n.icon),
              }));
          }, [I, null == Z ? void 0 : Z.benefits]),
          { openModal: j, cannotOpenReason: b } = (0, d.ZP)({
            skuId: E,
            subscribeForGuild: null != T ? T : void 0,
          });
        return null == Z
          ? null
          : (0, l.jsx)(v.A, {
              appId: I,
              skuId: E,
              transitionState: g,
              onHeaderTitleClick: null != R ? R : x,
              onClose: x,
              footer: (0, l.jsx)(m.p, {
                onClick: j,
                appId: I,
                subscriptionType: S,
                skuId: E,
                subscriptionPlan: O,
                cannotOpenReason: b,
              }),
              children: (0, l.jsx)(h.i, {
                appId: I,
                skuId: E,
                benefits:
                  null != C
                    ? C.map((n) =>
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
                  null !== (e = Z.description) && void 0 !== e ? e : void 0,
                imgSrc: _,
                title:
                  null !== (t = null == O ? void 0 : O.name) && void 0 !== t
                    ? t
                    : Z.summary,
                tag: (0, l.jsx)(s.Z, { type: S }),
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
        r = t(689938),
        s = t(130685);
      function a(n) {
        let { termsOfServiceUrl: e, privacyPolicyUrl: t } = n;
        return null == e && null == t
          ? null
          : (0, l.jsxs)("span", {
              className: s.text,
              children: [
                null != e &&
                  (0, l.jsx)(i.Z, {
                    href: e,
                    children: r.Z.Messages.STOREFRONT_TERMS_OF_SERVICE,
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
                    children: r.Z.Messages.STOREFRONT_PRIVACY_POLICY,
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
        s = t(906732),
        a = t(626135),
        o = t(981631);
      function u(n) {
        let { appId: e, skuId: t, ...u } = n,
          { analyticsLocations: c } = (0, s.ZP)();
        return (
          i.useEffect(() => {
            a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
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
          return p;
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
        s = t(481060),
        a = t(496929),
        o = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        f = t(981631);
      function p(n) {
        let {
          initialPlanId: e,
          activeSubscription: i,
          analyticsObject: r,
          analyticsLocation: a,
          analyticsLocations: o,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: p,
          skuId: v,
          guildId: m,
          reviewWarningMessage: h,
          applicationId: I,
          showBenefitsFirst: S,
          onComplete: x,
          forcesTransitionToGuild: E,
        } = n;
        (0, s.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              s = (
                await Promise.all([
                  t.e("52249"),
                  t.e("26182"),
                  t.e("32776"),
                  t.e("8573"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: f } = await Promise.all([
                t.e("63288"),
                t.e("77298"),
                t.e("23357"),
                t.e("12013"),
                t.e("99783"),
                t.e("26182"),
                t.e("95900"),
                t.e("31269"),
              ]).then(t.bind(t, 759386)),
              T = f({ guildId: m, showBenefitsFirst: S });
            return (t) =>
              (0, l.jsx)(n, {
                applicationId: I,
                activeSubscription: i,
                stepConfigs: T,
                skuIDs: [v],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(s, {
                    ...t,
                    initialPlanId: e,
                    skuId: v,
                    analyticsLocations: o,
                    analyticsObject: r,
                    analyticsLocation: a,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: p,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: null != m ? m : void 0,
                    onComplete: x,
                    forcesTransitionToGuild: E,
                  }),
                }),
              });
          },
          { onCloseRequest: f.dG4 },
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
            analyticsLocationObject: s,
            analyticsLocations: a,
            renderHeader: d,
          } = n,
          m = c.Z.get(l),
          h = u.Z.getForSKU(l);
        r()(null != m, "Failed to find SKU");
        let I = (0, o.KW)(m.flags);
        r()(I, "Guild application subscriptions unsupported!"),
          await v(t, l),
          p({
            initialPlanId:
              null != i
                ? i
                : null === (e = h[0]) || void 0 === e
                  ? void 0
                  : e.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: s,
            analyticsSubscriptionType: f.NYc.APPLICATION,
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
        s = t(976255),
        a = t(667),
        o = t(626135),
        u = t(981631);
      function c(n) {
        let {
            applicationId: e,
            skuId: c,
            onClose: d,
            onComplete: f,
            analyticsLocations: p,
            analyticsLocationObject: v,
            contextKey: m,
          } = n,
          h = !1,
          I = (0, i.Z)();
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
              t.e("57308"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: i, ...r } = t;
              return (0, l.jsx)(n, {
                ...r,
                loadId: I,
                applicationId: e,
                skuId: c,
                analyticsLocations: p,
                analyticsLocationObject: v,
                onClose: (n) => {
                  i(), null == d || d(n);
                },
                onComplete: (n) => {
                  (h = !0), null == f || f(n);
                },
              });
            };
          },
          {
            contextKey: m,
            onCloseCallback: () => {
              !h &&
                o.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: I,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: v,
                  is_gift: !1,
                  application_id: e,
                  location_stack: p,
                }),
                (0, s.fw)(),
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
        s = t(570140);
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
      let o = { lastGuildDismissedTime: {} };
      class u extends (i = r.ZP.DeviceSettingsStore) {
        initialize() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
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
        (e.Z = new u(s.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: e } = n;
            l.lastGuildDismissedTime[e] = Date.now();
          },
        }));
    },
    270144: function (n, e, t) {
      t.d(e, {
        CR: function () {
          return N;
        },
        Ev: function () {
          return Z;
        },
        LM: function () {
          return E;
        },
        cr: function () {
          return C;
        },
        h6: function () {
          return T;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return R;
        },
        sp: function () {
          return g;
        },
      }),
        t(653041),
        t(47120),
        t(773603),
        t(789020);
      var l,
        i,
        r = t(192379),
        s = t(442837),
        a = t(496929),
        o = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        f = t(55563),
        p = t(801249),
        v = t(106976),
        m = t(307643),
        h = t(488915),
        I = t(171246),
        S = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let E = (n) => {
        let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
          i = (0, s.e7)(
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
      function T(n) {
        var e;
        let t =
            null !== (e = null == n ? void 0 : n.id) && void 0 !== e
              ? e
              : S.lds,
          { entitlementsLoaded: l } = E({
            guildId: t,
            canFetch: (0, s.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n)),
          }),
          i = (0, s.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(t)),
          a = (0, s.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(t),
              e = h.Z.getEntitlementsForGuild(t, !1),
              l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
          }),
          o = (0, s.cj)([f.Z], () => f.Z.getSKUs()),
          c = r.useMemo(
            () =>
              a.filter((n) => {
                let e = o[n.skuId];
                return null != e && e.available;
              }),
            [a, o],
          );
        return l
          ? c.filter(
              (n) =>
                null != n.endsAt &&
                n.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - x),
            )
          : [];
      }
      let g = (n) => {
          let [e, t] = r.useState(!1),
            l = r.useMemo(() => n.map(I.bZ), [n]);
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
        R = () => {
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
      function N(n, e) {
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
            guilds: (0, s.Wu)(
              [o.Z],
              () => l.map((n) => o.Z.getGuild(n)).filter((n) => null != n),
              [l],
            ),
            isFetching: a,
          }
        );
      }
      let O = (n) => n.items;
      function Z(n, e) {
        return j(n, e, O);
      }
      let _ = (n) => {
        var e;
        return null === (e = n.renewalMutations) || void 0 === e
          ? void 0
          : e.items;
      };
      function C(n, e) {
        return j(n, e, _);
      }
      function j(n, e, t) {
        let l = null == n ? void 0 : n.bundledSkuIds,
          i = null == n ? void 0 : n.flags,
          [a, o] = (0, s.Wu)(
            [d.ZP, c.Z],
            () => {
              var n, r;
              for (let s of null !==
                (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n
                ? n
                : []) {
                if (
                  (0, I.KK)(null != i ? i : 0) &&
                  null != e &&
                  (null === (r = s.metadata) || void 0 === r
                    ? void 0
                    : r.application_subscription_guild_id) !== e
                )
                  continue;
                let n = t(s);
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
                if (null != a) return [s, a];
              }
              return [];
            },
            [i, e, t, l],
          );
        return r.useMemo(() => {
          if (null != a && null != o)
            return { subscription: a, subscriptionPlan: o };
        }, [a, o]);
      }
    },
    757746: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = t(442837),
        i = t(558381),
        r = t(551428);
      let s = (0, l.Kb)(r.Z, {
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
        s = t(509545);
      function a(n) {
        let [e, t] = l.useState(!1),
          { plans: a, isFetching: o } = (0, i.cj)(
            [s.Z],
            () => {
              let e = s.Z.getForSKU(n);
              return { plans: e, isFetching: s.Z.isFetchingForSKU(n) };
            },
            [n],
          );
        return (
          l.useEffect(() => {
            !o &&
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
            isLoading: o,
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
        s = t(87484),
        a = t(171246),
        o = t(689011),
        u = t(981631);
      async function c(n) {
        let {
            subscriptionPlanId: e,
            sku: s,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: f,
            analyticsLocations: p,
            analyticsLocation: v,
          } = n,
          { promise: m, resolve: h } = Promise.withResolvers();
        if ((0, a.KK)(s.flags)) {
          let { promise: n, resolve: e } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t
              .e("43889")
              .then(t.bind(t, 279875));
            return (t) =>
              (0, l.jsx)(n, {
                transitionState: t.transitionState,
                onClose: t.onClose,
                sku: s,
                onSelect: e,
                currentGuildId: f,
              });
          }),
            (f = await n);
        }
        return (
          (0, r.h)({
            initialPlanId: e,
            skuId: s.id,
            activeSubscription: null != d ? d : null,
            applicationId: s.applicationId,
            planGroup: c,
            guildId: f,
            renderHeader: (n, e, t) =>
              (0, l.jsx)(o.t, { step: t, onClose: () => e(!1) }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: p,
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
        (0, s.Z)({ applicationId: e, skuId: t, analyticsLocations: l });
      }
    },
    696906: function (n, e, t) {
      t.d(e, {
        FC: function () {
          return g;
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
        s = t(512722),
        a = t.n(s),
        o = t(442837),
        u = t(570140),
        c = t(821849),
        d = t(906732),
        f = t(887706),
        p = t(728345),
        v = t(509545),
        m = t(55563),
        h = t(551428),
        I = t(270144),
        S = t(488915),
        x = t(171246),
        E = t(929011),
        T = t(689938);
      function g(n, e) {
        let t;
        switch (n) {
          case 3:
            t = T.Z.Messages.STOREFRONT_UPCOMING_PLAN_FOR.format({ rate: e });
            break;
          case 2:
            t = T.Z.Messages.STOREFRONT_CURRENT_PLAN_FOR.format({ rate: e });
            break;
          case 4:
            t = T.Z.Messages.STOREFRONT_ALREADY_SUBSCRIBED;
            break;
          case 1:
            t = T.Z.Messages.STOREFRONT_ITEM_UNAVAILABLE;
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
            subscribeForGuild: s,
            analyticsLocation: T,
            skuId: g,
            onComplete: R,
          } = n,
          N = (0, o.e7)([m.Z], () => (null != g ? m.Z.get(g) : void 0), [g]),
          O = (0, o.e7)([h.Z], () => (null != g ? h.Z.getForSKU(g) : void 0), [
            g,
          ]),
          Z =
            null ===
              (e = (0, o.Wu)([v.Z], () => (null != g ? v.Z.getForSKU(g) : []), [
                g,
              ])[0]) || void 0 === e
              ? void 0
              : e.id,
          _ = (0, o.e7)(
            [m.Z],
            () => (null != g ? m.Z.getParentSKU(g) : void 0),
            [g],
          ),
          C = null == _ ? void 0 : _.bundledSkuIds,
          j = (0, o.Wu)(
            [v.Z],
            () => {
              var n;
              return null !==
                (n = null == C ? void 0 : C.flatMap(v.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [C],
          ),
          b = r.useMemo(() => j.map((n) => n.id), [j]),
          A = (0, o.e7)(
            [S.Z],
            () =>
              null != s &&
              S.Z.getEntitlementsForGuild(s, !0).some((n) => {
                var e;
                return (
                  null !== (e = null == C ? void 0 : C.includes(n.skuId)) &&
                  void 0 !== e &&
                  e
                );
              }),
            [C, s],
          ),
          L = null == N ? void 0 : N.applicationId,
          P =
            (null == O ? void 0 : O.published) === !0 &&
            (null == N ? void 0 : N.isAvailable()) === !0,
          { app: M } = (0, p.Rt)(L),
          { analyticsLocations: k } = (0, d.ZP)(),
          F = (0, I.Ev)(_, null != s ? s : void 0),
          D = (0, I.cr)(_, null != s ? s : void 0),
          { entitlementsLoaded: y } = (0, I.LM)({ guildId: s });
        null == s && (y = !0);
        let U = (0, f.Z)(),
          B = (0, x.KK)(
            null !== (l = null == N ? void 0 : N.flags) && void 0 !== l ? l : 0,
          );
        return (
          y && null != M && null != g
            ? P
              ? (null == F ? void 0 : F.subscriptionPlan.skuId) === g &&
                null == D
                ? (i = 2)
                : (null == D
                      ? void 0
                      : null === (t = D.subscriptionPlan) || void 0 === t
                        ? void 0
                        : t.skuId) === g
                  ? (i = 3)
                  : B && A && null == F && (i = 4)
              : (i = 1)
            : (i = 0),
          r.useEffect(() => {
            P &&
              null != g &&
              U &&
              !(v.Z.isFetchingForSKU(g) || v.Z.isLoadedForSKU(g)) &&
              u.Z.wait(() => {
                (0, c.GZ)(g);
              });
          }, [P, g, U]),
          {
            openModal: r.useCallback(() => {
              a()(null != M, "No application"),
                a()(null != g, "No SKU ID"),
                a()(P, "Cannot purchase this unpublished plan"),
                (0, E.H)({
                  subscriptionPlanId: Z,
                  sku: N,
                  subscriptionGroupPlanIds: b,
                  activeSubscription: null == F ? void 0 : F.subscription,
                  subscribeForGuild: s,
                  analyticsLocations: k,
                  analyticsLocation: T,
                }).then(() => {
                  null == R || R();
                });
            }, [
              M,
              g,
              P,
              Z,
              N,
              b,
              s,
              k,
              T,
              null == F ? void 0 : F.subscription,
              R,
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
        s = t.n(r),
        a = t(349361),
        o = t(698117);
      function u(n) {
        let { children: e, gradientClassName: t, ...r } = n,
          u = i.useRef(null),
          [c, d] = i.useState(!0),
          f = () => {
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
                null != n && ((u.current = n), f());
              },
              onScroll: f,
              children: e,
            }),
            (0, l.jsx)("div", {
              className: s()(o.containerScrollGradient, t),
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
        s = t(541822),
        a = t(330711),
        o = t(770561);
      function u(n) {
        let {
            benefits: e,
            description: t,
            imgSrc: u,
            title: c,
            tag: d,
            FallbackIcon: f,
          } = n,
          p =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: o.container,
          children: (0, l.jsx)(s.Z, {
            className: o.scroller,
            children: (0, l.jsxs)("div", {
              className: o.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: o.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: o.headerBackground,
                      style: p,
                    }),
                    (0, l.jsx)("div", {
                      className: o.headerImage,
                      children:
                        null != u
                          ? (0, l.jsx)("img", { src: u.toString(), alt: "" })
                          : (0, l.jsx)(f, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: o.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: o.details,
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
                            className: o.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != e &&
                      (0, l.jsxs)("div", {
                        className: o.benefits,
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
          return p;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(557533),
        r = t.n(i),
        s = t(489948),
        a = t(368072),
        o = t(777207),
        u = t(692547),
        c = t(330711),
        d = t(56273),
        f = t(103077);
      function p(n) {
        let {
          description: e,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: p,
          title: v,
          onDetails: m,
          benefitItems: h,
          benefitsSummary: I,
          subtitle: S,
        } = n;
        return (0, l.jsx)(s.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != m ? m() : null != p && p();
            },
            children: [
              (0, l.jsx)("div", {
                className: d.card,
                children: (0, l.jsxs)("div", {
                  className: d.body,
                  children: [
                    (0, l.jsx)(o.x, {
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
                            n.stopPropagation(), null == p || p();
                          },
                        })
                      : null,
                    S,
                    null != e &&
                      "" !== e &&
                      (0, l.jsx)(o.x, {
                        className: d.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: e,
                      }),
                  ],
                }),
              }),
              null != I &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(o.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: I,
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
                        (0, l.jsx)(o.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        h.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                h.slice(0, 3),
                                (0, l.jsx)(o.x, {
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
                (0, l.jsx)(o.x, { variant: "text-sm/semibold", children: t }),
                null != i &&
                  (0, l.jsx)(o.x, {
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
        s = t(777207),
        a = t(692547),
        o = t(330711),
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
              ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(n) {
        let { icon: e, text: t } = n;
        return (0, l.jsxs)("div", {
          className: u.container,
          children: [
            e,
            (0, l.jsx)(s.x, {
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
//# sourceMappingURL=6122ee8459a337a9459d.js.map
