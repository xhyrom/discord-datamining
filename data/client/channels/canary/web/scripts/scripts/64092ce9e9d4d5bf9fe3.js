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
          return o;
        },
      });
      var l,
        i,
        r = t(626135),
        a = t(981631);
      function o(n, e, t) {
        r.default.track(a.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return v;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(264043),
        o = t(812206),
        s = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(981631),
        p = t(689938),
        f = t(213891),
        m = t(566809);
      function v(n) {
        let {
            appId: e,
            skuId: t,
            transitionState: v,
            onClose: h,
            onHeaderTitleClick: I,
            children: S,
            footer: x,
          } = n,
          T = (0, i.e7)(
            [o.Z, a.Z],
            () => {
              var n;
              return null !== (n = o.Z.getApplication(e)) && void 0 !== n
                ? n
                : a.Z.getApplicationRecord(e);
            },
            [e],
          );
        if (null == T) return null;
        let E = (0, u.y)(T, 25),
          { termsOfServiceUrl: g, privacyPolicyUrl: N } = T;
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              className: f.modalHeader,
              children: [
                (0, l.jsxs)(r.Clickable, {
                  className: f.modalTitle,
                  onClick: I,
                  children: [
                    null != E &&
                      (0, l.jsx)("img", {
                        src: E.href,
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
                  onClick: h,
                  className: f.modalCloseBtn,
                }),
              ],
            }),
            S,
            (0, l.jsxs)(r.ModalFooter, {
              className: m.footer,
              children: [
                null != g && null != N
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: g,
                          ppUrl: N,
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
                    s.wS &&
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
                              d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                e,
                                t,
                              ),
                            );
                          (0, s.JG)(n),
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
            return I;
          },
        });
      var l = t(200651);
      t(192379);
      var i = t(752843),
        r = t(442837),
        a = t(481060),
        o = t(55563),
        s = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        f = t(680005),
        m = t(938337),
        v = t(981631),
        h = t(689938);
      function I(n) {
        var e, t, I, S;
        let {
            onClose: x,
            transitionState: T,
            skuId: E,
            appId: g,
            onHeaderTitleClick: N,
          } = n,
          R = (0, r.e7)([s.Z], () => s.Z.getForSKU(E), [E]),
          _ = (0, r.e7)([o.Z], () => o.Z.get(E), [E]),
          O = (0, d.M)(E);
        if (null == _) return null;
        let Z = null !== (t = _.name) && void 0 !== t ? t : "",
          C =
            null !==
              (I =
                null == R
                  ? void 0
                  : null === (e = R.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== I
              ? I
              : void 0,
          b =
            (null == R ? void 0 : R.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(g, R.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          j = _.type === v.epS.DURABLE && O,
          A =
            _.type === v.epS.DURABLE
              ? j
                ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = _;
        return null == L
          ? null
          : (0, l.jsx)(p.A, {
              appId: g,
              skuId: _.id,
              transitionState: T,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(f.Y, { appId: g, sku: _ }),
              children: (0, l.jsx)(m.i, {
                appId: g,
                skuId: _.id,
                title: Z,
                description: C,
                imgSrc: b,
                tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                FallbackIcon: a.TicketIcon,
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
        a = t(100527),
        o = t(906732),
        s = t(887706),
        u = t(929011),
        c = t(696906),
        d = t(703656),
        p = t(626135),
        f = t(937615),
        m = t(110742),
        v = t(981631),
        h = t(689938),
        I = t(962083);
      function S(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            skuId: a,
            subscriptionPlan: o,
            icon: s,
            cannotOpenReason: u,
          } = n,
          d = null != o ? (0, f.xg)(o) : null,
          p = null == u || u === c.HO.Loading,
          m = (0, c.FC)(u, null != d ? d : "");
        return p
          ? (0, l.jsx)(T, {
              appId: e,
              skuId: a,
              onClick: (n) => {
                i(n), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)("div", {
                className: I.btnContent,
                children: [
                  s,
                  null != d
                    ? h.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d })
                    : h.Z.Messages.STOREFRONT_SUBSCRIBE,
                ],
              }),
            })
          : (0, l.jsx)(E, { className: t, children: m });
      }
      function x(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            sku: s,
            icon: c,
          } = n,
          { analyticsLocations: d } = (0, o.ZP)(a.Z.APP_STOREFRONT),
          p = () => {
            (0, u.r)({ appId: e, skuId: s.id, analyticsLocations: d });
          },
          S = (0, m.M)(s.id),
          x = s.type === v.epS.DURABLE && S,
          { price: g } = s;
        return null == g
          ? null
          : x
            ? (0, l.jsx)(E, {
                className: t,
                children: h.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(T, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                  (null != i ? i : p)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: I.btnContent,
                  children: [
                    c,
                    h.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, f.T4)(g.amount, g.currency),
                    }),
                  ],
                }),
              });
      }
      function T(n) {
        let { appId: e, skuId: t, onClick: a, ...o } = n,
          u = (0, s.Z)();
        return (0, l.jsx)(r.Button, {
          ...o,
          onClick: (n) => {
            if (
              (p.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: e,
                sku_id: t,
              }),
              !u)
            ) {
              n.preventDefault(), n.stopPropagation();
              let l = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                r = (0, i.Ui)(l, !1);
              (0, d.uL)(r);
              return;
            }
            null == a || a(n);
          },
        });
      }
      function E(n) {
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
        a = t(752843),
        o = t(481060),
        s = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        p = t(73346),
        f = t(591759),
        m = t(886253),
        v = t(680005),
        h = t(938337);
      function I(n) {
        var e, t;
        let {
            appId: I,
            subscriptionType: S,
            onClose: x,
            skuId: T,
            guildId: E,
            transitionState: g,
            onHeaderTitleClick: N,
          } = n,
          { data: R } = (0, u.H)(T),
          _ = R[0],
          { data: O } = (0, s.Z)(T),
          Z = i.useMemo(() => {
            var n;
            return (null == O ? void 0 : O.thumbnail) != null &&
              null !== (n = f.Z.toURLSafe((0, p._W)(I, O.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [I, null == O ? void 0 : O.thumbnail]),
          C = i.useMemo(() => {
            let n = null == O ? void 0 : O.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, c.n)(I, n.icon),
              }));
          }, [I, null == O ? void 0 : O.benefits]),
          { openModal: b, cannotOpenReason: j } = (0, d.ZP)({
            skuId: T,
            subscribeForGuild: null != E ? E : void 0,
          });
        return null == O
          ? null
          : (0, l.jsx)(m.A, {
              appId: I,
              skuId: T,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(v.p, {
                onClick: b,
                appId: I,
                subscriptionType: S,
                skuId: T,
                subscriptionPlan: _,
                cannotOpenReason: j,
              }),
              children: (0, l.jsx)(h.i, {
                appId: I,
                skuId: T,
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
                  null !== (e = O.description) && void 0 !== e ? e : void 0,
                imgSrc: Z,
                title:
                  null !== (t = null == _ ? void 0 : _.name) && void 0 !== t
                    ? t
                    : O.summary,
                tag: (0, l.jsx)(a.Z, { type: S }),
                FallbackIcon: o.BadgeIcon,
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
      var l = t(200651),
        i = t(192379),
        r = t(512100),
        a = t(906732),
        o = t(626135),
        s = t(981631);
      function u(n) {
        let { appId: e, skuId: t, ...u } = n,
          { analyticsLocations: c } = (0, a.ZP)();
        return (
          i.useEffect(() => {
            o.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
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
          return v;
        },
      }),
        t(789020);
      var l = t(200651);
      t(192379);
      var i = t(512722),
        r = t.n(i),
        a = t(481060),
        o = t(496929),
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
          analyticsLocation: o,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: f,
          skuId: m,
          guildId: v,
          reviewWarningMessage: h,
          applicationId: I,
          showBenefitsFirst: S,
          onComplete: x,
          forcesTransitionToGuild: T,
        } = n;
        (0, a.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              a = (
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
                t.e("31269"),
              ]).then(t.bind(t, 759386)),
              E = p({ guildId: v, showBenefitsFirst: S });
            return (t) =>
              (0, l.jsx)(n, {
                applicationId: I,
                activeSubscription: i,
                stepConfigs: E,
                skuIDs: [m],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(a, {
                    ...t,
                    initialPlanId: e,
                    skuId: m,
                    analyticsLocations: s,
                    analyticsObject: r,
                    analyticsLocation: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: f,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: null != v ? v : void 0,
                    onComplete: x,
                    forcesTransitionToGuild: T,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let m = async (n, e) => {
        let t = (await (0, o.yD)(n))
          .filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date())
          .find((n) => n.sku_id === e);
        r()(null == t, "User already has an active subscription to this SKU");
      };
      async function v(n) {
        var e;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: a,
            analyticsLocations: o,
            renderHeader: d,
          } = n,
          v = c.Z.get(l),
          h = u.Z.getForSKU(l);
        r()(null != v, "Failed to find SKU");
        let I = (0, s.KW)(v.flags);
        r()(I, "Guild application subscriptions unsupported!"),
          await m(t, l),
          f({
            initialPlanId:
              null != i
                ? i
                : null === (e = h[0]) || void 0 === e
                  ? void 0
                  : e.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: a,
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
        a = t(976255),
        o = t(667),
        s = t(626135),
        u = t(981631);
      function c(n) {
        let {
            applicationId: e,
            skuId: c,
            onClose: d,
            onComplete: p,
            analyticsLocations: f,
            analyticsLocationObject: m,
            contextKey: v,
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
                analyticsLocations: f,
                analyticsLocationObject: m,
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
            contextKey: v,
            onCloseCallback: () => {
              !h &&
                s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: I,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: m,
                  is_gift: !1,
                  application_id: e,
                  location_stack: f,
                }),
                (0, a.fw)(),
                (0, o.p)(),
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
        a = t(570140);
      function o(n, e, t) {
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
      o(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        o(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (e.Z = new u(a.Z, {
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
          return O;
        },
        LM: function () {
          return T;
        },
        cr: function () {
          return C;
        },
        h6: function () {
          return E;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return N;
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
        a = t(442837),
        o = t(496929),
        s = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        p = t(55563),
        f = t(801249),
        m = t(106976),
        v = t(307643),
        h = t(488915),
        I = t(171246),
        S = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let T = (n) => {
        let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
          i = (0, a.e7)(
            [h.Z],
            () => (null != e ? h.Z.getEntitlementsForGuildFetchState(e) : null),
            [e],
          );
        return (
          r.useEffect(() => {
            if (null == e || e === S.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(e);
            t && (n === h.M.NOT_FETCHED || l) && (0, m.i1)(e);
          }, [e, t, l]),
          { entitlementsLoaded: i === h.M.FETCHED }
        );
      };
      function E(n) {
        var e;
        let t =
            null !== (e = null == n ? void 0 : n.id) && void 0 !== e
              ? e
              : S.lds,
          { entitlementsLoaded: l } = T({
            guildId: t,
            canFetch: (0, a.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, n)),
          }),
          i = (0, a.e7)([f.Z], () => f.Z.getLastGuildDismissedTime(t)),
          o = (0, a.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(t),
              e = h.Z.getEntitlementsForGuild(t, !1),
              l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
          }),
          s = (0, a.cj)([p.Z], () => p.Z.getSKUs()),
          c = r.useMemo(
            () =>
              o.filter((n) => {
                let e = s[n.skuId];
                return null != e && e.available;
              }),
            [o, s],
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
          let [n, e] = r.useState(0);
          return (
            r.useEffect(() => {
              e(1),
                Promise.all([
                  (0, o.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, o.p0)({
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
          [l, i] = r.useState([]),
          [o, u] = r.useState(!1);
        return (
          r.useLayoutEffect(() => {
            null != n &&
              t &&
              (u(!0),
              (0, v.tn)(n, e)
                .then(i)
                .finally(() => {
                  u(!1);
                }));
          }, [n, e, t]),
          {
            guilds: (0, a.Wu)(
              [s.Z],
              () => l.map((n) => s.Z.getGuild(n)).filter((n) => null != n),
              [l],
            ),
            isFetching: o,
          }
        );
      }
      let _ = (n) => n.items;
      function O(n, e) {
        return b(n, e, _);
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
          [o, s] = (0, a.Wu)(
            [d.ZP, c.Z],
            () => {
              var n, r;
              for (let a of null !==
                (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n
                ? n
                : []) {
                if (
                  (0, I.KK)(null != i ? i : 0) &&
                  null != e &&
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.application_subscription_guild_id) !== e
                )
                  continue;
                let n = t(a);
                if (null == n) continue;
                let o = n
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
                if (null != o) return [a, o];
              }
              return [];
            },
            [i, e, t, l],
          );
        return r.useMemo(() => {
          if (null != o && null != s)
            return { subscription: o, subscriptionPlan: s };
        }, [o, s]);
      }
    },
    757746: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(558381),
        r = t(551428);
      let a = (0, l.Kb)(r.Z, {
        queryId: (n) => (null != n ? ["storeListing", n] : null),
        get: (n) => (null != n ? r.Z.getForSKU(n) : null),
        load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (n, e, t) {
      t.d(e, {
        H: function () {
          return o;
        },
      }),
        t(47120),
        t(411104);
      var l = t(192379),
        i = t(442837),
        r = t(821849),
        a = t(509545);
      function o(n) {
        let [e, t] = l.useState(!1),
          { plans: o, isFetching: s } = (0, i.cj)(
            [a.Z],
            () => {
              let e = a.Z.getForSKU(n);
              return { plans: e, isFetching: a.Z.isFetchingForSKU(n) };
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
            data: o,
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
        a = t(87484),
        o = t(171246),
        s = t(689011),
        u = t(981631);
      async function c(n) {
        let {
            subscriptionPlanId: e,
            sku: a,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: p,
            analyticsLocations: f,
            analyticsLocation: m,
          } = n,
          { promise: v, resolve: h } = Promise.withResolvers();
        if ((0, o.KK)(a.flags)) {
          let { promise: n, resolve: e } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await t
              .e("43889")
              .then(t.bind(t, 279875));
            return (t) =>
              (0, l.jsx)(n, {
                transitionState: t.transitionState,
                onClose: t.onClose,
                sku: a,
                onSelect: e,
                currentGuildId: p,
              });
          }),
            (p = await n);
        }
        return (
          (0, r.h)({
            initialPlanId: e,
            skuId: a.id,
            activeSubscription: null != d ? d : null,
            applicationId: a.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (n, e, t) =>
              (0, l.jsx)(s.t, { step: t, onClose: () => e(!1) }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: f,
            analyticsLocation: m,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          v
        );
      }
      function d(n) {
        let { appId: e, skuId: t, analyticsLocations: l } = n;
        (0, a.Z)({ applicationId: e, skuId: t, analyticsLocations: l });
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
        a = t(512722),
        o = t.n(a),
        s = t(442837),
        u = t(570140),
        c = t(821849),
        d = t(906732),
        p = t(887706),
        f = t(728345),
        m = t(509545),
        v = t(55563),
        h = t(551428),
        I = t(270144),
        S = t(488915),
        x = t(171246),
        T = t(929011),
        E = t(689938);
      function g(n, e) {
        let t;
        switch (n) {
          case 3:
            t = E.Z.Messages.STOREFRONT_UPCOMING_PLAN_FOR.format({ rate: e });
            break;
          case 2:
            t = E.Z.Messages.STOREFRONT_CURRENT_PLAN_FOR.format({ rate: e });
            break;
          case 4:
            t = E.Z.Messages.STOREFRONT_ALREADY_SUBSCRIBED;
            break;
          case 1:
            t = E.Z.Messages.STOREFRONT_ITEM_UNAVAILABLE;
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
            subscribeForGuild: a,
            analyticsLocation: E,
            skuId: g,
            onComplete: N,
          } = n,
          R = (0, s.e7)([v.Z], () => (null != g ? v.Z.get(g) : void 0), [g]),
          _ = (0, s.e7)([h.Z], () => (null != g ? h.Z.getForSKU(g) : void 0), [
            g,
          ]),
          O =
            null ===
              (e = (0, s.Wu)([m.Z], () => (null != g ? m.Z.getForSKU(g) : []), [
                g,
              ])[0]) || void 0 === e
              ? void 0
              : e.id,
          Z = (0, s.e7)(
            [v.Z],
            () => (null != g ? v.Z.getParentSKU(g) : void 0),
            [g],
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
          j = r.useMemo(() => b.map((n) => n.id), [b]),
          A = (0, s.e7)(
            [S.Z],
            () =>
              null != a &&
              S.Z.getEntitlementsForGuild(a, !0).some((n) => {
                var e;
                return (
                  null !== (e = null == C ? void 0 : C.includes(n.skuId)) &&
                  void 0 !== e &&
                  e
                );
              }),
            [C, a],
          ),
          L = null == R ? void 0 : R.applicationId,
          P =
            (null == _ ? void 0 : _.published) === !0 &&
            (null == R ? void 0 : R.isAvailable()) === !0,
          { app: M } = (0, f.Rt)(L),
          { analyticsLocations: k } = (0, d.ZP)(),
          F = (0, I.Ev)(Z, null != a ? a : void 0),
          D = (0, I.cr)(Z, null != a ? a : void 0),
          { entitlementsLoaded: y } = (0, I.LM)({ guildId: a });
        null == a && (y = !0);
        let U = (0, p.Z)(),
          B = (0, x.KK)(
            null !== (l = null == R ? void 0 : R.flags) && void 0 !== l ? l : 0,
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
              !(m.Z.isFetchingForSKU(g) || m.Z.isLoadedForSKU(g)) &&
              u.Z.wait(() => {
                (0, c.GZ)(g);
              });
          }, [P, g, U]),
          {
            openModal: r.useCallback(() => {
              o()(null != M, "No application"),
                o()(null != g, "No SKU ID"),
                o()(P, "Cannot purchase this unpublished plan"),
                (0, T.H)({
                  subscriptionPlanId: O,
                  sku: R,
                  subscriptionGroupPlanIds: j,
                  activeSubscription: null == F ? void 0 : F.subscription,
                  subscribeForGuild: a,
                  analyticsLocations: k,
                  analyticsLocation: E,
                }).then(() => {
                  null == N || N();
                });
            }, [
              M,
              g,
              P,
              O,
              R,
              j,
              a,
              k,
              E,
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
      var l = t(200651),
        i = t(192379),
        r = t(557533),
        a = t.n(r),
        o = t(349361),
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
            (0, l.jsx)(o.h2, {
              fade: !0,
              ...r,
              ref: (n) => {
                null != n && ((u.current = n), p());
              },
              onScroll: p,
              children: e,
            }),
            (0, l.jsx)("div", {
              className: a()(s.containerScrollGradient, t),
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
        a = t(541822),
        o = t(330711),
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
                            children: o.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
          return f;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(557533),
        r = t.n(i),
        a = t(489948),
        o = t(368072),
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
          title: m,
          onDetails: v,
          benefitItems: h,
          benefitsSummary: I,
          subtitle: S,
        } = n;
        return (0, l.jsx)(a.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != v ? v() : null != f && f();
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
                          : (0, l.jsx)(o.V, {
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
              null != I &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(s.x, {
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
      var l = t(200651);
      t(192379);
      var i = t(628028),
        r = t(220427),
        a = t(777207),
        o = t(692547),
        s = t(330711),
        u = t(350727);
      function c(n) {
        let { type: e } = n;
        return (0, l.jsx)(d, {
          icon:
            "user" === e
              ? (0, l.jsx)(r.t, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
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
            (0, l.jsx)(a.x, {
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
//# sourceMappingURL=64092ce9e9d4d5bf9fe3.js.map
