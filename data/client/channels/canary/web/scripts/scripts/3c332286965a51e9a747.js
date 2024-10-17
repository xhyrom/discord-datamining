"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81272"],
  {
    887706: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = t(399606),
        i = t(314897);
      function o() {
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
        o = t(626135),
        r = t(981631);
      function a(n, e, t) {
        o.default.track(r.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return o;
        },
      }),
        t(47120);
      var l = t(442837),
        i = t(580130);
      function o(n) {
        return (0, l.e7)(
          [i.Z],
          () => {
            let e = i.Z.getForSku(n);
            if (null == e) return !1;
            let t = 0;
            for (let n of e) {
              var l, o;
              let e =
                null !==
                  (o =
                    null === (l = n.endsAt) || void 0 === l
                      ? void 0
                      : l.getTime()) && void 0 !== o
                  ? o
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
          return f;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        o = t(481060),
        r = t(264043),
        a = t(812206),
        s = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(981631),
        p = t(689938),
        v = t(213891),
        m = t(566809);
      function f(n) {
        let {
            appId: e,
            skuId: t,
            transitionState: f,
            onClose: I,
            onHeaderTitleClick: h,
            children: S,
            footer: x,
          } = n,
          g = (0, i.e7)(
            [a.Z, r.Z],
            () => {
              var n;
              return null !== (n = a.Z.getApplication(e)) && void 0 !== n
                ? n
                : r.Z.getApplicationRecord(e);
            },
            [e],
          );
        if (null == g) return null;
        let T = (0, u.y)(g, 25),
          { termsOfServiceUrl: E, privacyPolicyUrl: N } = g;
        return (0, l.jsxs)(o.ModalRoot, {
          transitionState: f,
          size: o.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, l.jsxs)(o.ModalHeader, {
              className: v.modalHeader,
              children: [
                (0, l.jsxs)(o.Clickable, {
                  className: v.modalTitle,
                  onClick: h,
                  children: [
                    null != T &&
                      (0, l.jsx)("img", {
                        src: T.href,
                        alt: "",
                        className: m.appIcon,
                      }),
                    (0, l.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: g.name,
                    }),
                  ],
                }),
                (0, l.jsx)(o.ModalCloseButton, {
                  onClick: I,
                  className: v.modalCloseBtn,
                }),
              ],
            }),
            S,
            (0, l.jsxs)(o.ModalFooter, {
              className: m.footer,
              children: [
                null != E && null != N
                  ? (0, l.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: E,
                          ppUrl: N,
                        }),
                    })
                  : (0, l.jsx)(o.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    s.wS &&
                      (0, l.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        size: o.Button.Sizes.ICON,
                        color: o.Button.Colors.PRIMARY,
                        "aria-label": p.Z.Messages.COPY_LINK,
                        className: m.linkButton,
                        innerClassName: m.innerLinkButton,
                        onClick: () => {
                          let n = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                e,
                                t,
                              ),
                            );
                          (0, s.JG)(n),
                            (0, o.showToast)(
                              (0, o.createToast)(
                                p.Z.Messages.COPIED_LINK,
                                o.ToastType.SUCCESS,
                              ),
                            ),
                            (0, c.X)(e, c.B.DETAILS_MODAL, t);
                        },
                        children: (0, l.jsx)(o.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    x,
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
            return h;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(752843),
        o = t(442837),
        r = t(481060),
        a = t(55563),
        s = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        v = t(680005),
        m = t(938337),
        f = t(981631),
        I = t(689938);
      function h(n) {
        var e, t, h, S;
        let {
            onClose: x,
            transitionState: g,
            skuId: T,
            appId: E,
            onHeaderTitleClick: N,
          } = n,
          R = (0, o.e7)([s.Z], () => s.Z.getForSKU(T), [T]),
          O = (0, o.e7)([a.Z], () => a.Z.get(T), [T]),
          _ = (0, d.M)(T);
        if (null == O) return null;
        let Z = null !== (t = O.name) && void 0 !== t ? t : "",
          C =
            null !==
              (h =
                null == R
                  ? void 0
                  : null === (e = R.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== h
              ? h
              : void 0,
          b =
            (null == R ? void 0 : R.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(E, R.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          j = O.type === f.epS.DURABLE && _,
          A =
            O.type === f.epS.DURABLE
              ? j
                ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = O;
        return null == L
          ? null
          : (0, l.jsx)(p.A, {
              appId: E,
              skuId: O.id,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(v.Y, { appId: E, sku: O }),
              children: (0, l.jsx)(m.i, {
                appId: E,
                skuId: O.id,
                title: Z,
                description: C,
                imgSrc: b,
                tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                FallbackIcon: r.TicketIcon,
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
      var l = t(735250);
      t(470079);
      var i = t(860911),
        o = t(481060),
        r = t(100527),
        a = t(906732),
        s = t(887706),
        u = t(929011),
        c = t(696906),
        d = t(703656),
        p = t(626135),
        v = t(937615),
        m = t(110742),
        f = t(981631),
        I = t(689938),
        h = t(962083);
      function S(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: o,
            skuId: r,
            subscriptionPlan: a,
            icon: s,
            cannotOpenReason: u,
          } = n,
          d = (0, v.xg)(a),
          p = null == u || u === c.HO.LoggedOut || u === c.HO.Loading,
          m = (0, c.FC)(u, d);
        return p
          ? (0, l.jsx)(g, {
              appId: e,
              skuId: r,
              onClick: (n) => {
                i(n), null == o || o();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)("div", {
                className: h.btnContent,
                children: [
                  s,
                  I.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d }),
                ],
              }),
            })
          : (0, l.jsx)(T, { className: t, children: m });
      }
      function x(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: o,
            sku: s,
            icon: c,
          } = n,
          { analyticsLocations: d } = (0, a.ZP)(r.Z.APP_STOREFRONT),
          p = () => {
            (0, u.r)({ appId: e, skuId: s.id, analyticsLocations: d });
          },
          S = (0, m.M)(s.id),
          x = s.type === f.epS.DURABLE && S,
          { price: E } = s;
        return null == E
          ? null
          : x
            ? (0, l.jsx)(T, {
                className: t,
                children: I.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(g, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                  (null != i ? i : p)(n), null == o || o();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: h.btnContent,
                  children: [
                    c,
                    I.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, v.T4)(E.amount, E.currency),
                    }),
                  ],
                }),
              });
      }
      function g(n) {
        let { appId: e, skuId: t, onClick: r, ...a } = n,
          u = (0, s.Z)();
        return (0, l.jsx)(o.Button, {
          ...a,
          onClick: (n) => {
            if (
              (p.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: e,
                sku_id: t,
              }),
              !u)
            ) {
              n.preventDefault(), n.stopPropagation();
              let l = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                o = (0, i.Ui)(l, !1);
              (0, d.uL)(o);
              return;
            }
            null == r || r(n);
          },
        });
      }
      function T(n) {
        let { className: e, children: t } = n;
        return (0, l.jsx)(o.Button, {
          disabled: !0,
          className: e,
          look: o.Button.Looks.OUTLINED,
          color: o.Button.Colors.PRIMARY,
          children: t,
        });
      }
    },
    519896: function (n, e, t) {
      t.r(e),
        t.d(e, {
          SubscriptionDetailsModal: function () {
            return h;
          },
        });
      var l = t(735250),
        i = t(470079),
        o = t(269210),
        r = t(752843),
        a = t(481060),
        s = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        p = t(73346),
        v = t(591759),
        m = t(886253),
        f = t(680005),
        I = t(938337);
      function h(n) {
        var e;
        let {
            appId: t,
            subscriptionType: h,
            onClose: S,
            skuId: x,
            guildId: g,
            transitionState: T,
            onHeaderTitleClick: E,
          } = n,
          { data: N } = (0, u.H)(x),
          { data: R } = (0, s.Z)(x),
          O = i.useMemo(() => {
            var n;
            return (null == R ? void 0 : R.thumbnail) != null &&
              null !== (n = v.Z.toURLSafe((0, p._W)(t, R.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [t, null == R ? void 0 : R.thumbnail]),
          _ = i.useMemo(() => {
            let n = null == R ? void 0 : R.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, c.n)(t, n.icon),
              }));
          }, [t, null == R ? void 0 : R.benefits]),
          { openModal: Z, cannotOpenReason: C } = (0, d.ZP)({
            skuId: x,
            subscribeForGuild: null != g ? g : void 0,
          });
        return null == R || null == N || 0 === N.length
          ? null
          : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: T,
              onHeaderTitleClick: null != E ? E : S,
              onClose: S,
              footer: (0, l.jsx)(f.p, {
                onClick: Z,
                appId: t,
                subscriptionType: h,
                skuId: x,
                subscriptionPlan: N[0],
                cannotOpenReason: C,
              }),
              children: (0, l.jsx)(I.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != _
                    ? _.map((n) =>
                        (0, l.jsx)(
                          o.G,
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
                  null !== (e = R.description) && void 0 !== e ? e : void 0,
                imgSrc: O,
                title: N[0].name,
                tag: (0, l.jsx)(r.Z, { type: h }),
                FallbackIcon: a.BadgeIcon,
              }),
            });
      }
    },
    938337: function (n, e, t) {
      t.d(e, {
        i: function () {
          return u;
        },
      });
      var l = t(735250),
        i = t(470079),
        o = t(512100),
        r = t(906732),
        a = t(626135),
        s = t(981631);
      function u(n) {
        let { appId: e, skuId: t, ...u } = n,
          { analyticsLocations: c } = (0, r.ZP)();
        return (
          i.useEffect(() => {
            a.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: e,
              sku_id: t,
              location_stack: c,
            });
          }, [c, e, t]),
          (0, l.jsx)(o.u, { ...u })
        );
      }
    },
    724870: function (n, e, t) {
      t.d(e, {
        h: function () {
          return v;
        },
        m: function () {
          return f;
        },
      }),
        t(789020);
      var l = t(735250);
      t(470079);
      var i = t(512722),
        o = t.n(i),
        r = t(481060),
        a = t(496929),
        s = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        p = t(981631);
      function v(n) {
        let {
          initialPlanId: e,
          activeSubscription: i,
          analyticsObject: o,
          analyticsLocation: a,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: v,
          skuId: m,
          guildId: f,
          reviewWarningMessage: I,
          applicationId: h,
          showBenefitsFirst: S,
          onComplete: x,
          forcesTransitionToGuild: g,
        } = n;
        (0, r.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              r = (
                await Promise.all([
                  t.e("52249"),
                  t.e("26182"),
                  t.e("32776"),
                  t.e("8573"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: p } = await Promise.all([
                t.e("96427"),
                t.e("77298"),
                t.e("23357"),
                t.e("12013"),
                t.e("99783"),
                t.e("26182"),
                t.e("95900"),
                t.e("31269"),
              ]).then(t.bind(t, 759386)),
              T = p({ guildId: f, showBenefitsFirst: S });
            return (t) =>
              (0, l.jsx)(n, {
                applicationId: h,
                activeSubscription: i,
                stepConfigs: T,
                skuIDs: [m],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(r, {
                    ...t,
                    initialPlanId: e,
                    skuId: m,
                    analyticsLocations: s,
                    analyticsObject: o,
                    analyticsLocation: a,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: v,
                    reviewWarningMessage: I,
                    applicationId: h,
                    guildId: null != f ? f : void 0,
                    onComplete: x,
                    forcesTransitionToGuild: g,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let m = async (n, e) => {
        let t = (await (0, a.yD)(n))
          .filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date())
          .find((n) => n.sku_id === e);
        o()(null == t, "User already has an active subscription to this SKU");
      };
      async function f(n) {
        var e;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: r,
            analyticsLocations: a,
            renderHeader: d,
          } = n,
          f = c.Z.get(l),
          I = u.Z.getForSKU(l);
        o()(null != f, "Failed to find SKU");
        let h = (0, s.KW)(f.flags);
        o()(h, "Guild application subscriptions unsupported!"),
          await m(t, l),
          v({
            initialPlanId:
              null != i
                ? i
                : null === (e = I[0]) || void 0 === e
                  ? void 0
                  : e.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: r,
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
      var l = t(735250);
      t(470079);
      var i = t(772848),
        o = t(481060),
        r = t(976255),
        a = t(667),
        s = t(626135),
        u = t(981631);
      function c(n) {
        let {
            applicationId: e,
            skuId: c,
            onClose: d,
            onComplete: p,
            analyticsLocations: v,
            analyticsLocationObject: m,
            contextKey: f,
          } = n,
          I = !1,
          h = (0, i.Z)();
        (0, o.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              t.e("96427"),
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
              let { onClose: i, ...o } = t;
              return (0, l.jsx)(n, {
                ...o,
                loadId: h,
                applicationId: e,
                skuId: c,
                analyticsLocations: v,
                analyticsLocationObject: m,
                onClose: (n) => {
                  i(), null == d || d(n);
                },
                onComplete: (n) => {
                  (I = !0), null == p || p(n);
                },
              });
            };
          },
          {
            contextKey: f,
            onCloseCallback: () => {
              !I &&
                s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: h,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: m,
                  is_gift: !1,
                  application_id: e,
                  location_stack: v,
                }),
                (0, r.fw)(),
                (0, a.p)(),
                null == d || d(I);
            },
            onCloseRequest: u.dG4,
          },
        );
      }
    },
    801249: function (n, e, t) {
      let l;
      var i,
        o = t(442837),
        r = t(570140);
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
      class u extends (i = o.ZP.DeviceSettingsStore) {
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
        (e.Z = new u(r.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: e } = n;
            l.lastGuildDismissedTime[e] = Date.now();
          },
        }));
    },
    270144: function (n, e, t) {
      t.d(e, {
        CR: function () {
          return R;
        },
        Ev: function () {
          return _;
        },
        LM: function () {
          return g;
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
          return N;
        },
        sp: function () {
          return E;
        },
      }),
        t(653041),
        t(47120),
        t(773603),
        t(789020);
      var l,
        i,
        o = t(470079),
        r = t(442837),
        a = t(496929),
        s = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        p = t(55563),
        v = t(801249),
        m = t(106976),
        f = t(307643),
        I = t(488915),
        h = t(171246),
        S = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let g = (n) => {
        let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
          i = (0, r.e7)(
            [I.Z],
            () => (null != e ? I.Z.getEntitlementsForGuildFetchState(e) : null),
            [e],
          );
        return (
          o.useEffect(() => {
            if (null == e || e === S.ME) return;
            let n = I.Z.getEntitlementsForGuildFetchState(e);
            t && (n === I.M.NOT_FETCHED || l) && (0, m.i1)(e);
          }, [e, t, l]),
          { entitlementsLoaded: i === I.M.FETCHED }
        );
      };
      function T(n) {
        var e;
        let t =
            null !== (e = null == n ? void 0 : n.id) && void 0 !== e
              ? e
              : S.lds,
          { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, r.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n)),
          }),
          i = (0, r.e7)([v.Z], () => v.Z.getLastGuildDismissedTime(t)),
          a = (0, r.Wu)([I.Z], () => {
            let n = I.Z.getEntitlementsForGuild(t),
              e = I.Z.getEntitlementsForGuild(t, !1),
              l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
          }),
          s = (0, r.cj)([p.Z], () => p.Z.getSKUs()),
          c = o.useMemo(
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
                  Math.max(null != i ? i : 0, Date.now() - x),
            )
          : [];
      }
      let E = (n) => {
          let [e, t] = o.useState(!1),
            l = o.useMemo(() => n.map(h.bZ), [n]);
          return (
            o.useEffect(() => {
              t(!0),
                Promise.all(l.map((n) => (0, m.vY)(n)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  });
            }, [l]),
            { loading: e }
          );
        },
        N = () => {
          let [n, e] = o.useState(0);
          return (
            o.useEffect(() => {
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
      function R(n, e) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [l, i] = o.useState([]),
          [a, u] = o.useState(!1);
        return (
          o.useLayoutEffect(() => {
            null != n &&
              t &&
              (u(!0),
              (0, f.tn)(n, e)
                .then(i)
                .finally(() => {
                  u(!1);
                }));
          }, [n, e, t]),
          {
            guilds: (0, r.Wu)(
              [s.Z],
              () => l.map((n) => s.Z.getGuild(n)).filter((n) => null != n),
              [l],
            ),
            isFetching: a,
          }
        );
      }
      let O = (n) => n.items;
      function _(n, e) {
        return b(n, e, O);
      }
      let Z = (n) => {
        var e;
        return null === (e = n.renewalMutations) || void 0 === e
          ? void 0
          : e.items;
      };
      function C(n, e) {
        return b(n, e, Z);
      }
      function b(n, e, t) {
        let l = null == n ? void 0 : n.bundledSkuIds,
          i = null == n ? void 0 : n.flags,
          [a, s] = (0, r.Wu)(
            [d.ZP, c.Z],
            () => {
              var n, o;
              for (let r of null !==
                (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n
                ? n
                : []) {
                if (
                  (0, h.KK)(null != i ? i : 0) &&
                  null != e &&
                  (null === (o = r.metadata) || void 0 === o
                    ? void 0
                    : o.application_subscription_guild_id) !== e
                )
                  continue;
                let n = t(r);
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
                if (null != a) return [r, a];
              }
              return [];
            },
            [i, e, t, l],
          );
        return o.useMemo(() => {
          if (null != a && null != s)
            return { subscription: a, subscriptionPlan: s };
        }, [a, s]);
      }
    },
    757746: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(558381),
        o = t(551428);
      let r = (0, l.Kb)(o.Z, {
        queryId: (n) => (null != n ? ["storeListing", n] : null),
        get: (n) => (null != n ? o.Z.getForSKU(n) : null),
        load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (n, e, t) {
      t.d(e, {
        H: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(821849),
        o = t(509545);
      let r = (0, l.Kb)(o.Z, {
        queryId: (n) => (null != n ? ["subscription-plans", n] : null),
        get: (n) => (null != n ? o.Z.getForSKU(n) : []),
        load: (n, e) => (null != e ? (0, i.GZ)(e) : Promise.resolve()),
        useStateHook: l.Wu,
      });
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
      var l = t(735250),
        i = t(481060),
        o = t(724870),
        r = t(87484),
        a = t(171246),
        s = t(689011),
        u = t(981631);
      async function c(n) {
        let {
            subscriptionPlanId: e,
            sku: r,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: p,
            analyticsLocations: v,
            analyticsLocation: m,
          } = n,
          { promise: f, resolve: I } = Promise.withResolvers();
        if ((0, a.KK)(r.flags)) {
          let { promise: n, resolve: e } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t
              .e("43889")
              .then(t.bind(t, 279875));
            return (t) =>
              (0, l.jsx)(n, {
                transitionState: t.transitionState,
                onClose: t.onClose,
                sku: r,
                onSelect: e,
                currentGuildId: p,
              });
          }),
            (p = await n);
        }
        return (
          (0, o.h)({
            initialPlanId: e,
            skuId: r.id,
            activeSubscription: null != d ? d : null,
            applicationId: r.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (n, e, t) =>
              (0, l.jsx)(s.t, { step: t, onClose: () => e(!1) }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: v,
            analyticsLocation: m,
            onComplete: I,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          f
        );
      }
      function d(n) {
        let { appId: e, skuId: t, analyticsLocations: l } = n;
        (0, r.Z)({ applicationId: e, skuId: t, analyticsLocations: l });
      }
    },
    696906: function (n, e, t) {
      t.d(e, {
        FC: function () {
          return E;
        },
        HO: function () {
          return l;
        },
      }),
        t(390547),
        t(789020);
      var l,
        i,
        o = t(470079),
        r = t(512722),
        a = t.n(r),
        s = t(442837),
        u = t(570140),
        c = t(821849),
        d = t(906732),
        p = t(887706),
        v = t(728345),
        m = t(509545),
        f = t(55563),
        I = t(551428),
        h = t(270144),
        S = t(488915),
        x = t(171246),
        g = t(929011),
        T = t(689938);
      function E(n, e) {
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
        (i[(i.OtherSubscription = 4)] = "OtherSubscription"),
        (i[(i.LoggedOut = 5)] = "LoggedOut");
      e.ZP = (n) => {
        var e, t, l;
        let i,
          {
            subscribeForGuild: r,
            analyticsLocation: T,
            skuId: E,
            onComplete: N,
          } = n,
          R = (0, s.e7)([f.Z], () => (null != E ? f.Z.get(E) : void 0), [E]),
          O = (0, s.e7)([I.Z], () => (null != E ? I.Z.getForSKU(E) : void 0), [
            E,
          ]),
          _ =
            null ===
              (e = (0, s.Wu)([m.Z], () => (null != E ? m.Z.getForSKU(E) : []), [
                E,
              ])[0]) || void 0 === e
              ? void 0
              : e.id,
          Z = (0, s.e7)(
            [f.Z],
            () => (null != E ? f.Z.getParentSKU(E) : void 0),
            [E],
          ),
          C = null == Z ? void 0 : Z.bundledSkuIds,
          b = (0, s.Wu)(
            [m.Z],
            () => {
              var n;
              return null !==
                (n = null == C ? void 0 : C.flatMap(m.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [C],
          ),
          j = o.useMemo(() => b.map((n) => n.id), [b]),
          A = (0, s.e7)(
            [S.Z],
            () =>
              null != r &&
              S.Z.getEntitlementsForGuild(r, !0).some((n) => {
                var e;
                return (
                  null !== (e = null == C ? void 0 : C.includes(n.skuId)) &&
                  void 0 !== e &&
                  e
                );
              }),
            [C, r],
          ),
          L = null == R ? void 0 : R.applicationId,
          P =
            (null == O ? void 0 : O.published) === !0 &&
            (null == R ? void 0 : R.isAvailable()) === !0,
          { data: k } = (0, v.IX)(L),
          { analyticsLocations: M } = (0, d.ZP)(),
          F = (0, h.Ev)(Z, null != r ? r : void 0),
          D = (0, h.cr)(Z, null != r ? r : void 0),
          { entitlementsLoaded: y } = (0, h.LM)({ guildId: r }),
          U = (0, p.Z)(),
          B = (0, x.KK)(
            null !== (l = null == R ? void 0 : R.flags) && void 0 !== l ? l : 0,
          );
        return (
          U
            ? y && null != k && null != E
              ? P
                ? (null == F ? void 0 : F.subscriptionPlan.skuId) === E &&
                  (null == D ? void 0 : D.subscriptionPlan.id) ===
                    (null == F ? void 0 : F.subscriptionPlan.id)
                  ? (i = 2)
                  : (null == D
                        ? void 0
                        : null === (t = D.subscriptionPlan) || void 0 === t
                          ? void 0
                          : t.skuId) === E
                    ? (i = 3)
                    : B && A && null == F && (i = 4)
                : (i = 1)
              : (i = 0)
            : (i = 5),
          o.useEffect(() => {
            P &&
              null != E &&
              U &&
              !(m.Z.isFetchingForSKU(E) || m.Z.isLoadedForSKU(E)) &&
              u.Z.wait(() => {
                (0, c.GZ)(E);
              });
          }, [P, E, U]),
          {
            openModal: o.useCallback(() => {
              a()(null != k, "No application"),
                a()(null != E, "No SKU ID"),
                a()(P, "Cannot purchase this unpublished plan"),
                (0, g.H)({
                  subscriptionPlanId: _,
                  sku: R,
                  subscriptionGroupPlanIds: j,
                  activeSubscription: null == F ? void 0 : F.subscription,
                  subscribeForGuild: r,
                  analyticsLocations: M,
                  analyticsLocation: T,
                }).then(() => {
                  null == N || N();
                });
            }, [
              k,
              E,
              P,
              _,
              R,
              j,
              r,
              M,
              T,
              null == F ? void 0 : F.subscription,
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
      var l = t(735250),
        i = t(470079),
        o = t(557533),
        r = t.n(o),
        a = t(349361),
        s = t(698117);
      function u(n) {
        let { children: e, gradientClassName: t, ...o } = n,
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
              ...o,
              ref: (n) => {
                null != n && ((u.current = n), p());
              },
              onScroll: p,
              children: e,
            }),
            (0, l.jsx)("div", {
              className: r()(s.containerScrollGradient, t),
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
      var l = t(735250);
      t(470079);
      var i = t(409794),
        o = t(777207),
        r = t(541822),
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
          v =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: s.container,
          children: (0, l.jsx)(r.Z, {
            className: s.scroller,
            children: (0, l.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: s.headerBackground,
                      style: v,
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
                          (0, l.jsx)(o.x, {
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
                          (0, l.jsx)(o.x, {
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
          return m;
        },
        U: function () {
          return v;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(557533),
        o = t.n(i),
        r = t(789978),
        a = t(368072),
        s = t(777207),
        u = t(692547),
        c = t(330711),
        d = t(56273),
        p = t(103077);
      function v(n) {
        let {
          description: e,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: v,
          title: m,
          onDetails: f,
          benefitItems: I,
          benefitsSummary: h,
          subtitle: S,
        } = n;
        return (0, l.jsx)(r.tE, {
          children: (0, l.jsxs)("div", {
            className: o()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != f ? f() : null != v && v();
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
                      children: m,
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
                            n.stopPropagation(), null == v || v();
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
              null != h &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(s.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: h,
                    }),
                  }),
                }),
              null != I &&
                I.length > 0 &&
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
                        I.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                I.slice(0, 3),
                                (0, l.jsx)(s.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.STOREFRONT_MORE_BENEFITS.format(
                                      { count: I.length - 3 },
                                    ),
                                }),
                              ],
                            })
                          : I,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function m(n) {
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
      var l = t(735250);
      t(470079);
      var i = t(628028),
        o = t(220427),
        r = t(777207),
        a = t(692547),
        s = t(330711),
        u = t(350727);
      function c(n) {
        let { type: e } = n;
        return (0, l.jsx)(d, {
          icon:
            "user" === e
              ? (0, l.jsx)(o.t, {
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
            (0, l.jsx)(r.x, {
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
//# sourceMappingURL=3c332286965a51e9a747.js.map
