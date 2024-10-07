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
      var l = t(735250);
      t(470079);
      var i = t(442837),
        r = t(481060),
        a = t(264043),
        o = t(812206),
        s = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(981631),
        f = t(689938),
        p = t(213891),
        m = t(566809);
      function v(n) {
        let {
            appId: e,
            skuId: t,
            transitionState: v,
            onClose: I,
            onHeaderTitleClick: S,
            children: h,
            footer: x,
          } = n,
          N = (0, i.e7)(
            [o.Z, a.Z],
            () => {
              var n;
              return null !== (n = o.Z.getApplication(e)) && void 0 !== n
                ? n
                : a.Z.getApplicationRecord(e);
            },
            [e],
          );
        if (null == N) return null;
        let g = (0, u.y)(N, 25),
          { termsOfServiceUrl: T, privacyPolicyUrl: Z } = N;
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              className: p.modalHeader,
              children: [
                (0, l.jsxs)(r.Clickable, {
                  className: p.modalTitle,
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
                      children: N.name,
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: I,
                  className: p.modalCloseBtn,
                }),
              ],
            }),
            h,
            (0, l.jsxs)(r.ModalFooter, {
              className: m.footer,
              children: [
                null != T && null != Z
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        f.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: T,
                          ppUrl: Z,
                        }),
                    })
                  : (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: f.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    s.wS &&
                      (0, l.jsx)(r.Button, {
                        look: r.ButtonLooks.FILLED,
                        size: r.ButtonSizes.ICON,
                        color: r.ButtonColors.CUSTOM,
                        "aria-label": f.Z.Messages.COPY_LINK,
                        className: m.linkButton,
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
                                f.Z.Messages.COPIED_LINK,
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
            return S;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(752843),
        r = t(442837),
        a = t(481060),
        o = t(55563),
        s = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        f = t(886253),
        p = t(680005),
        m = t(938337),
        v = t(981631),
        I = t(689938);
      function S(n) {
        var e, t, S, h;
        let {
            onClose: x,
            transitionState: N,
            skuId: g,
            appId: T,
            onHeaderTitleClick: Z,
          } = n,
          E = (0, r.e7)([s.Z], () => s.Z.getForSKU(g), [g]),
          C = (0, r.e7)([o.Z], () => o.Z.get(g), [g]),
          _ = (0, d.M)(g);
        if (null == C) return null;
        let A = null !== (t = C.name) && void 0 !== t ? t : "",
          O =
            null !==
              (S =
                null == E
                  ? void 0
                  : null === (e = E.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== S
              ? S
              : void 0,
          R =
            (null == E ? void 0 : E.headerBackground) != null &&
            null !==
              (h = c.Z.toURLSafe((0, u._W)(T, E.headerBackground, 256))) &&
            void 0 !== h
              ? h
              : void 0,
          b = C.type === v.epS.DURABLE && _,
          j =
            C.type === v.epS.DURABLE
              ? b
                ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: P } = C;
        return null == P
          ? null
          : (0, l.jsx)(f.A, {
              appId: T,
              skuId: C.id,
              transitionState: N,
              onHeaderTitleClick: null != Z ? Z : x,
              onClose: x,
              footer: (0, l.jsx)(p.Y, { appId: T, sku: C }),
              children: (0, l.jsx)(m.i, {
                appId: T,
                skuId: C.id,
                title: A,
                description: O,
                imgSrc: R,
                tag: null != j ? (0, l.jsx)(i.V, { text: j }) : void 0,
                FallbackIcon: a.TicketIcon,
              }),
            });
      }
    },
    680005: function (n, e, t) {
      t.d(e, {
        Y: function () {
          return h;
        },
        p: function () {
          return S;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(860911),
        r = t(481060),
        a = t(100527),
        o = t(906732),
        s = t(887706),
        u = t(87484),
        c = t(703656),
        d = t(626135),
        f = t(937615),
        p = t(110742),
        m = t(981631),
        v = t(689938),
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
          canPurchase: u,
          cannotPurchaseReason: c,
        } = n;
        return u
          ? (0, l.jsx)(x, {
              appId: e,
              skuId: a,
              onClick: (n) => {
                i(n), null == r || r();
              },
              className: t,
              children: (0, l.jsxs)("div", {
                className: I.btnContent,
                children: [
                  s,
                  v.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                    rate: (0, f.xg)(o),
                  }),
                ],
              }),
            })
          : (0, l.jsx)(N, { className: t, children: c });
      }
      function h(n) {
        let {
            appId: e,
            className: t,
            onClick: i,
            onHasClicked: r,
            sku: s,
            icon: c,
          } = n,
          { analyticsLocations: d } = (0, o.ZP)(a.Z.APP_STOREFRONT),
          S = () => {
            (0, u.Z)({ applicationId: e, skuId: s.id, analyticsLocations: d });
          },
          h = (0, p.M)(s.id),
          g = s.type === m.epS.DURABLE && h,
          { price: T } = s;
        return null == T
          ? null
          : g
            ? (0, l.jsx)(N, {
                className: t,
                children: v.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(x, {
                appId: e,
                skuId: s.id,
                onClick: (n) => {
                  (null != i ? i : S)(n), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: I.btnContent,
                  children: [
                    c,
                    v.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, f.T4)(T.amount, T.currency),
                    }),
                  ],
                }),
              });
      }
      function x(n) {
        let { appId: e, skuId: t, onClick: a, ...o } = n,
          u = (0, s.Z)();
        return (0, l.jsx)(r.Button, {
          ...o,
          onClick: (n) => {
            if (
              (d.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: e,
                sku_id: t,
              }),
              !u)
            ) {
              n.preventDefault(), n.stopPropagation();
              let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t),
                r = (0, i.Ui)(l, !1);
              (0, c.uL)(r);
              return;
            }
            null == a || a(n);
          },
        });
      }
      function N(n) {
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
            return S;
          },
        });
      var l = t(735250),
        i = t(470079),
        r = t(269210),
        a = t(752843),
        o = t(481060),
        s = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        f = t(73346),
        p = t(591759),
        m = t(886253),
        v = t(680005),
        I = t(938337);
      function S(n) {
        var e;
        let {
            appId: t,
            subscriptionType: S,
            onClose: h,
            skuId: x,
            guildId: N,
            transitionState: g,
            onHeaderTitleClick: T,
          } = n,
          { data: Z } = (0, u.H)(x),
          { data: E } = (0, s.Z)(x),
          C = i.useMemo(() => {
            var n;
            return (null == E ? void 0 : E.thumbnail) != null &&
              null !== (n = p.Z.toURLSafe((0, f._W)(t, E.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [t, null == E ? void 0 : E.thumbnail]),
          _ = i.useMemo(() => {
            let n = null == E ? void 0 : E.benefits;
            if (null != n && 0 !== n.length)
              return n.map((n) => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, c.n)(t, n.icon),
              }));
          }, [t, null == E ? void 0 : E.benefits]),
          {
            openModal: A,
            canOpenModal: O,
            cannotOpenReason: R,
          } = (0, d.Z)({ skuId: x, guildId: N, showBenefitsFirst: !1 });
        return null == E || null == Z || 0 === Z.length
          ? null
          : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: g,
              onHeaderTitleClick: null != T ? T : h,
              onClose: h,
              footer: (0, l.jsx)(v.p, {
                onClick: A,
                appId: t,
                subscriptionType: S,
                skuId: x,
                subscriptionPlan: Z[0],
                canPurchase: O,
                cannotPurchaseReason: R,
              }),
              children: (0, l.jsx)(I.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != _
                    ? _.map((n) =>
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
                title: Z[0].name,
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
      var l = t(735250),
        i = t(470079),
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
          return p;
        },
        m: function () {
          return v;
        },
      }),
        t(789020);
      var l = t(735250);
      t(470079);
      var i = t(512722),
        r = t.n(i),
        a = t(481060),
        o = t(496929),
        s = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        f = t(981631);
      function p(n) {
        let {
          initialPlanId: e,
          activeSubscription: i,
          analyticsObject: r,
          analyticsLocation: o,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: p,
          skuId: m,
          guildId: v,
          reviewWarningMessage: I,
          applicationId: S,
          showBenefitsFirst: h,
          eligibleApplicationSubscriptionGuilds: x,
          onComplete: N,
          forcesTransitionToGuild: g,
        } = n;
        (0, a.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              a = (
                await Promise.all([
                  t.e("52249"),
                  t.e("72652"),
                  t.e("32776"),
                  t.e("68845"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: f } = await Promise.all([
                t.e("96427"),
                t.e("77298"),
                t.e("23357"),
                t.e("54803"),
                t.e("15685"),
                t.e("79915"),
                t.e("30671"),
                t.e("59329"),
              ]).then(t.bind(t, 759386)),
              T = f({
                guildId: v,
                showBenefitsFirst: h,
                eligibleApplicationSubscriptionGuilds: x,
              });
            return (t) =>
              (0, l.jsx)(n, {
                applicationId: S,
                activeSubscription: i,
                stepConfigs: T,
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
                    planGroup: p,
                    reviewWarningMessage: I,
                    applicationId: S,
                    guildId: null != v ? v : void 0,
                    onComplete: N,
                    forcesTransitionToGuild: g,
                  }),
                }),
              });
          },
          { onCloseRequest: f.dG4 },
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
          I = u.Z.getForSKU(l);
        r()(null != v, "Failed to find SKU");
        let S = (0, s.KW)(v.flags);
        r()(S, "Guild application subscriptions unsupported!"),
          await m(t, l),
          p({
            initialPlanId:
              null != i
                ? i
                : null === (e = I[0]) || void 0 === e
                  ? void 0
                  : e.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: a,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
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
            onComplete: f,
            analyticsLocations: p,
            analyticsLocationObject: m,
            contextKey: v,
          } = n,
          I = !1,
          S = (0, i.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              t.e("96427"),
              t.e("77298"),
              t.e("23357"),
              t.e("52249"),
              t.e("54803"),
              t.e("15685"),
              t.e("72652"),
              t.e("32776"),
              t.e("79915"),
              t.e("30671"),
              t.e("52730"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: i, ...r } = t;
              return (0, l.jsx)(n, {
                ...r,
                loadId: S,
                applicationId: e,
                skuId: c,
                analyticsLocations: p,
                analyticsLocationObject: m,
                onClose: (n) => {
                  i(), null == d || d(n);
                },
                onComplete: (n) => {
                  (I = !0), null == f || f(n);
                },
              });
            };
          },
          {
            contextKey: v,
            onCloseCallback: () => {
              !I &&
                s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: S,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: m,
                  is_gift: !1,
                  application_id: e,
                  location_stack: p,
                }),
                (0, a.fw)(),
                (0, o.p)(),
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
        C9: function () {
          return _;
        },
        CR: function () {
          return b;
        },
        h6: function () {
          return A;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return R;
        },
        sp: function () {
          return O;
        },
      }),
        t(653041),
        t(47120);
      var l,
        i,
        r = t(470079),
        a = t(512722),
        o = t.n(a),
        s = t(442837),
        u = t(496929),
        c = t(430824),
        d = t(496675),
        f = t(509545),
        p = t(78839),
        m = t(580130),
        v = t(55563),
        I = t(801249),
        S = t(106976),
        h = t(307643),
        x = t(488915),
        N = t(171246),
        g = t(981631);
      let T = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let Z = (n) => {
          let { guildId: e, canFetch: t = !0, forceRefetch: l = !1 } = n,
            i = (0, s.e7)(
              [x.Z],
              () =>
                null != e ? x.Z.getEntitlementsForGuildFetchState(e) : null,
              [e],
            );
          return (
            r.useEffect(() => {
              if (null == e || e === g.ME) return;
              let n = x.Z.getEntitlementsForGuildFetchState(e);
              t && (n === x.M.NOT_FETCHED || l) && (0, S.i1)(e);
            }, [e, t, l]),
            { entitlementsLoaded: i === x.M.FETCHED }
          );
        },
        E = [],
        C = [];
      function _(n, e) {
        o()(
          null == n || n.type === g.epS.SUBSCRIPTION_GROUP,
          "SKU must be a subscription group",
        );
        let t = null == n ? void 0 : n.bundledSkuIds,
          l = null == n ? void 0 : n.applicationId,
          i = (0, s.e7)([p.ZP], () => p.ZP.getSubscriptions(), []),
          a = (0, s.Wu)(
            [x.Z],
            () =>
              null != l && null != e
                ? x.Z.getApplicationEntitlementsForGuild(l, e)
                : E,
            [l, e],
          ),
          u = (0, s.Wu)(
            [m.Z],
            () => {
              var n;
              return null != l
                ? [
                    ...(null !== (n = m.Z.getForApplication(l)) && void 0 !== n
                      ? n
                      : []),
                  ]
                : C;
            },
            [l],
          ),
          c = r.useMemo(
            () =>
              [...a, ...u].filter(
                (n) =>
                  (null == t ? void 0 : t.includes(n.skuId)) &&
                  n.isValid(null, v.Z),
              ),
            [a, u, t],
          );
        return (0, s.cj)(
          [f.Z, v.Z],
          () => {
            let n, l;
            if (null == i) return {};
            for (let r of Object.values(i)) {
              if (null == l) {
                let n = (0, N.z0)(f.Z, null != t ? t : [], r);
                null != n && (l = { upcomingSubscriptionPlan: n });
              }
              if (null == n)
                for (let t of c) {
                  let l = (0, N.PB)(f.Z, v.Z, r, t, e);
                  if (null != l) {
                    n = {
                      activeSubscription: r,
                      activeSubscriptionPlan: l,
                      activeEntitlement: t,
                    };
                    break;
                  }
                }
              if (null != n && null != l) break;
            }
            return { ...n, ...l };
          },
          [i, t, c, e],
        );
      }
      function A(n) {
        var e;
        let t =
            null !== (e = null == n ? void 0 : n.id) && void 0 !== e
              ? e
              : g.lds,
          { entitlementsLoaded: l } = Z({
            guildId: t,
            canFetch: (0, s.e7)([d.Z], () => d.Z.can(g.Plq.ADMINISTRATOR, n)),
          }),
          i = (0, s.e7)([I.Z], () => I.Z.getLastGuildDismissedTime(t)),
          a = (0, s.Wu)([x.Z], () => {
            let n = x.Z.getEntitlementsForGuild(t),
              e = x.Z.getEntitlementsForGuild(t, !1),
              l = n.map((n) => n.applicationId);
            return e.filter((n) => !l.includes(n.applicationId));
          }),
          o = (0, s.cj)([v.Z], () => v.Z.getSKUs()),
          u = r.useMemo(
            () =>
              a.filter((n) => {
                let e = o[n.skuId];
                return null != e && e.available;
              }),
            [a, o],
          );
        return l
          ? u.filter(
              (n) =>
                null != n.endsAt &&
                n.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - T),
            )
          : [];
      }
      let O = (n) => {
          let [e, t] = r.useState(!1),
            l = r.useMemo(() => n.map(N.bZ), [n]);
          return (
            r.useEffect(() => {
              t(!0),
                Promise.all(l.map((n) => (0, S.vY)(n)))
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
                  (0, u.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: g.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, u.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: g.qc2.PURCHASE,
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
        let [t, l] = r.useState([]);
        return (
          r.useEffect(() => {
            null != n && (0, h.tn)(n, e).then(l);
          }, [n, e]),
          (0, s.Wu)(
            [c.Z],
            () => t.map((n) => c.Z.getGuild(n)).filter((n) => null != n),
            [t],
          )
        );
      }
    },
    171246: function (n, e, t) {
      t.d(e, {
        Jf: function () {
          return m;
        },
        KK: function () {
          return u;
        },
        KW: function () {
          return c;
        },
        OL: function () {
          return p;
        },
        PB: function () {
          return d;
        },
        bZ: function () {
          return s;
        },
        z0: function () {
          return f;
        },
      }),
        t(789020);
      var l = t(512722),
        i = t.n(l),
        r = t(55563),
        a = t(630388),
        o = t(981631);
      function s(n) {
        let e = n.items;
        return (
          i()(
            1 === e.length,
            "more than 1 subscription item for application subscription",
          ),
          e[0].planId
        );
      }
      function u(n) {
        return (0, a.yE)(n, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
      }
      function c(n) {
        return (0, a.yE)(n, o.l4R.APPLICATION_USER_SUBSCRIPTION);
      }
      function d(n, e, t, l, i) {
        var a;
        if (
          t.type === o.NYc.APPLICATION &&
          t.status === o.O0b.ACTIVE &&
          !!l.isValid(null, r.Z) &&
          (null === (a = t.metadata) || void 0 === a
            ? void 0
            : a.application_subscription_guild_id) === i
        )
          return t.items
            .map((e) => n.get(e.planId))
            .filter((n) => null != n)
            .find((n) => {
              let t = e.get(n.skuId);
              return null != t && (!u(t.flags) || l.guildId === i);
            });
      }
      function f(n, e, t) {
        var l;
        return null === (l = t.renewalMutations) || void 0 === l
          ? void 0
          : l.items
              .map((e) => n.get(e.planId))
              .filter((n) => null != n)
              .find((n) => e.includes(n.skuId));
      }
      function p(n) {
        return !1 === n.available;
      }
      function m(n, e) {
        var t;
        let l =
            null !== (t = null == e ? void 0 : e.deleted) && void 0 !== t && t,
          i = null != e && p(e);
        return n.status === o.O0b.CANCELED || l || i;
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
          return a;
        },
      });
      var l = t(442837),
        i = t(821849),
        r = t(509545);
      let a = (0, l.Kb)(r.Z, {
        queryId: (n) => (null != n ? ["subscription-plans", n] : null),
        get: (n) => (null != n ? r.Z.getForSKU(n) : []),
        load: (n, e) => (null != e ? (0, i.GZ)(e) : Promise.resolve()),
        useStateHook: l.Wu,
      });
    },
    714441: function (n, e, t) {
      t.d(e, {
        i: function () {
          return r;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(481060);
      function r(n) {
        let { applicationName: e, onConfirm: r, onCancel: a } = n;
        return (0, i.openModalLazy)(
          async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: n } = await t
              .e("99809")
              .then(t.bind(t, 525549));
            return (t) =>
              (0, l.jsx)(n, {
                ...t,
                applicationName: e,
                onConfirm: r,
                onCancel: a,
              });
          },
          { modalKey: "application-user-subscribe-no-shared-server-warning" },
        );
      }
    },
    696906: function (n, e, t) {
      t(390547), t(789020);
      var l = t(735250),
        i = t(470079),
        r = t(512722),
        a = t.n(r),
        o = t(442837),
        s = t(570140),
        u = t(821849),
        c = t(906732),
        d = t(887706),
        f = t(728345),
        p = t(724870),
        m = t(594174),
        v = t(509545),
        I = t(55563),
        S = t(551428),
        h = t(270144),
        x = t(171246),
        N = t(689011),
        g = t(714441),
        T = t(981631),
        Z = t(689938);
      e.Z = (n) => {
        var e, t, r;
        let E,
          {
            guildId: C,
            analyticsLocation: _,
            showBenefitsFirst: A,
            skuId: O,
            onComplete: R,
            forcesTransitionToGuild: b,
          } = n,
          j = (0, o.e7)([I.Z], () => (null != O ? I.Z.get(O) : void 0), [O]),
          P = (0, o.e7)([S.Z], () => (null != O ? S.Z.getForSKU(O) : void 0), [
            O,
          ]),
          L =
            null ===
              (e = (0, o.Wu)([v.Z], () => (null != O ? v.Z.getForSKU(O) : []), [
                O,
              ])[0]) || void 0 === e
              ? void 0
              : e.id,
          k = (0, o.e7)(
            [I.Z],
            () => (null != O ? I.Z.getParentSKU(O) : void 0),
            [O],
          ),
          M = null == k ? void 0 : k.bundledSkuIds,
          D = (0, o.Wu)(
            [v.Z],
            () => {
              var n;
              return null !==
                (n = null == M ? void 0 : M.flatMap(v.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [M],
          ),
          y = i.useMemo(() => D.map((n) => n.id), [D]),
          U = null == j ? void 0 : j.applicationId,
          B = (0, h.CR)(U, O),
          F = B.some((n) => n.id === C)
            ? C
            : null === (t = B[0]) || void 0 === t
              ? void 0
              : t.id,
          w =
            (null == P ? void 0 : P.published) === !0 &&
            (null == j ? void 0 : j.isAvailable()) === !0,
          { data: K } = (0, f.IX)(U),
          { analyticsLocations: G } = (0, c.ZP)(),
          { activeSubscription: Y, activeEntitlement: H } = (0, h.C9)(k, F),
          z = (0, d.Z)(),
          W = null != j && (0, x.KW)(j.flags),
          V = (null == H ? void 0 : H.skuId) === O,
          q =
            null != H &&
            H.userId ===
              (null === (r = m.default.getCurrentUser()) || void 0 === r
                ? void 0
                : r.id),
          X = null == H || D.length > 1,
          J = B.length > 0,
          Q = W && q && V,
          $ = null != j && null != K && X && (J || W) && !Q;
        return (
          J
            ? Q && (E = Z.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_TIER)
            : (E = Z.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
          i.useEffect(() => {
            w &&
              null != O &&
              z &&
              !(v.Z.isFetchingForSKU(O) || v.Z.isLoadedForSKU(O)) &&
              s.Z.wait(() => {
                (0, u.GZ)(O);
              });
          }, [w, O, z]),
          {
            openModal: i.useCallback(() => {
              a()(null != K, "No application"),
                a()(null != O, "No SKU ID"),
                a()(w, "Cannot purchase this unpublished plan");
              let n = () => {
                (0, p.h)({
                  activeSubscription: null != Y ? Y : null,
                  analyticsSubscriptionType: T.NYc.APPLICATION,
                  analyticsLocations: G,
                  analyticsLocation: _,
                  renderHeader: (n, e, t) =>
                    (0, l.jsx)(N.t, { step: t, onClose: () => e(!1) }),
                  initialPlanId: L,
                  skuId: O,
                  guildId: F,
                  eligibleApplicationSubscriptionGuilds: B,
                  planGroup: y,
                  applicationId: K.id,
                  showBenefitsFirst: A,
                  onComplete: R,
                  forcesTransitionToGuild: b,
                });
              };
              !J && W
                ? (0, g.i)({
                    applicationName: K.name,
                    onConfirm: n,
                    onCancel: () => {},
                  })
                : n();
            }, [O, L, y, w, K, F, J, W, G, _, Y, A, B, R, b]),
            canOpenModal: $,
            cannotOpenReason: E,
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
        r = t(557533),
        a = t.n(r),
        o = t(349361),
        s = t(698117);
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
            (0, l.jsx)(o.h2, {
              fade: !0,
              ...r,
              ref: (n) => {
                null != n && ((u.current = n), f());
              },
              onScroll: f,
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
      var l = t(735250);
      t(470079);
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
            FallbackIcon: f,
          } = n,
          p =
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
                      style: p,
                    }),
                    (0, l.jsx)("div", {
                      className: s.headerImage,
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
                            children: o.Z.Messages.Storefront.BENEFITS_TITLE,
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
          return p;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(557533),
        r = t.n(i),
        a = t(789978),
        o = t(368072),
        s = t(777207),
        u = t(330711),
        c = t(56273),
        d = t(103077),
        f = t(692547);
      function p(n) {
        let {
          description: e,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: p,
          title: m,
          onDetails: v,
          benefitItems: I,
          benefitsSummary: S,
        } = n;
        return (0, l.jsx)(a.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(c.container, d.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != v ? v() : null != p && p();
            },
            children: [
              (0, l.jsx)("div", {
                className: c.card,
                children: (0, l.jsxs)("div", {
                  className: c.body,
                  children: [
                    (0, l.jsx)(s.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: m,
                    }),
                    (0, l.jsx)("div", {
                      className: c.image,
                      children:
                        null != t
                          ? (0, l.jsx)("img", { src: t.toString(), alt: "" })
                          : (0, l.jsx)(o.V, {
                              color: f.Z.colors.ICON_PRIMARY,
                              size: "custom",
                              height: 48,
                              width: 48,
                            }),
                    }),
                    null != i
                      ? i({
                          className: c.purchaseBtn,
                          onClick: (n) => {
                            n.stopPropagation(), null == p || p();
                          },
                        })
                      : null,
                    null != e &&
                      "" !== e &&
                      (0, l.jsx)(s.x, {
                        className: c.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: e,
                      }),
                  ],
                }),
              }),
              null != S &&
                (0, l.jsx)("div", {
                  className: c.benefitsSummary,
                  children: (0, l.jsx)(s.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: u.Z.Messages.Storefront.BENEFITS_SUMMARY.format({
                      count: S,
                    }),
                  }),
                }),
              null != I &&
                (0, l.jsx)("div", {
                  className: c.benefits,
                  children: (0, l.jsx)("div", {
                    className: c.benefitsContainer,
                    children: (0, l.jsxs)("div", {
                      className: c.benefitsList,
                      children: [
                        (0, l.jsx)(s.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: u.Z.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        I.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                I.slice(0, 3),
                                (0, l.jsx)(s.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    u.Z.Messages.Storefront.MORE_BENEFITS.format(
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
          className: c.cardBenefit,
          children: [
            (0, l.jsx)("div", { className: c.cardBenefitIcon, children: e }),
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
              ? s.Z.Messages.Storefront.USER_SUBSCRIPTION
              : s.Z.Messages.Storefront.SERVER_SUBSCRIPTION,
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
//# sourceMappingURL=5a12b129046bed4d4c67.js.map
