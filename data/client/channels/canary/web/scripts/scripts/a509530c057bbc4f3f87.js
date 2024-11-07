"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30243"],
  {
    886253: function (e, n, l) {
      l.d(n, {
        A: function () {
          return v;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(442837),
        r = l(481060),
        a = l(264043),
        s = l(812206),
        o = l(572004),
        u = l(601911),
        c = l(504211),
        d = l(533159),
        m = l(981631),
        p = l(388032),
        f = l(213891),
        x = l(566809);
      function v(e) {
        let {
            appId: n,
            skuId: l,
            transitionState: v,
            onClose: h,
            onHeaderTitleClick: C,
            children: g,
            footer: j,
          } = e,
          S = (0, i.e7)(
            [s.Z, a.Z],
            () => {
              var e;
              return null !== (e = s.Z.getApplication(n)) && void 0 !== e
                ? e
                : a.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == S) return null;
        let I = (0, u.y)(S, 25),
          { termsOfServiceUrl: N, privacyPolicyUrl: E } = S;
        return (0, t.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: x.modal,
          children: [
            (0, t.jsxs)(r.ModalHeader, {
              className: f.modalHeader,
              children: [
                (0, t.jsxs)(r.Clickable, {
                  className: f.modalTitle,
                  onClick: C,
                  children: [
                    null != I &&
                      (0, t.jsx)("img", {
                        src: I.href,
                        alt: "",
                        className: x.appIcon,
                      }),
                    (0, t.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: S.name,
                    }),
                  ],
                }),
                (0, t.jsx)(r.ModalCloseButton, {
                  onClick: h,
                  className: f.modalCloseBtn,
                }),
              ],
            }),
            g,
            (0, t.jsxs)(r.ModalFooter, {
              className: x.footer,
              children: [
                null != N || null != E
                  ? (0, t.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, t.jsx)(d.Z, {
                        termsOfServiceUrl: N,
                        privacyPolicyUrl: E,
                      }),
                    })
                  : (0, t.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.intl.string(p.t["3ZY+0N"]),
                    }),
                (0, t.jsxs)("div", {
                  className: x.footerButtons,
                  children: [
                    o.wS &&
                      (0, t.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
                        "aria-label": p.intl.string(p.t.WqhZsr),
                        className: x.linkButton,
                        innerClassName: x.innerLinkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                n,
                                l,
                              ),
                            );
                          (0, o.JG)(e),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                p.intl.string(p.t["L/PwZW"]),
                                r.ToastType.SUCCESS,
                              ),
                            ),
                            (0, c.X)(n, c.B.DETAILS_MODAL, l);
                        },
                        children: (0, t.jsx)(r.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    j,
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    147496: function (e, n, l) {
      l.r(n),
        l.d(n, {
          ItemDetailsModal: function () {
            return h;
          },
        });
      var t = l(200651);
      l(192379);
      var i = l(752843),
        r = l(442837),
        a = l(481060),
        s = l(55563),
        o = l(551428),
        u = l(73346),
        c = l(591759),
        d = l(110742),
        m = l(886253),
        p = l(680005),
        f = l(938337),
        x = l(981631),
        v = l(388032);
      function h(e) {
        var n, l, h, C;
        let {
            onClose: g,
            transitionState: j,
            skuId: S,
            appId: I,
            onHeaderTitleClick: N,
          } = e,
          E = (0, r.e7)([o.Z], () => o.Z.getForSKU(S), [S]),
          b = (0, r.e7)([s.Z], () => s.Z.get(S), [S]),
          Z = (0, d.M)(S);
        if (null == b) return null;
        let T = null !== (l = b.name) && void 0 !== l ? l : "",
          _ =
            null !==
              (h =
                null == E
                  ? void 0
                  : null === (n = E.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== h
              ? h
              : void 0,
          y =
            (null == E ? void 0 : E.headerBackground) != null &&
            null !==
              (C = c.Z.toURLSafe((0, u._W)(I, E.headerBackground, 256))) &&
            void 0 !== C
              ? C
              : void 0,
          k = b.type === x.epS.DURABLE && Z,
          R =
            b.type === x.epS.DURABLE
              ? k
                ? v.intl.string(v.t.bm82mp)
                : v.intl.string(v.t["6gprwc"])
              : void 0,
          { price: L } = b;
        return null == L
          ? null
          : (0, t.jsx)(m.A, {
              appId: I,
              skuId: b.id,
              transitionState: j,
              onHeaderTitleClick: null != N ? N : g,
              onClose: g,
              footer: (0, t.jsx)(p.Y, { appId: I, sku: b }),
              children: (0, t.jsx)(f.i, {
                appId: I,
                skuId: b.id,
                title: T,
                description: _,
                imgSrc: y,
                tag: null != R ? (0, t.jsx)(i.V, { text: R }) : void 0,
                FallbackIcon: a.TicketIcon,
              }),
            });
      }
    },
    519896: function (e, n, l) {
      l.r(n),
        l.d(n, {
          SubscriptionDetailsModal: function () {
            return h;
          },
        });
      var t = l(200651),
        i = l(192379),
        r = l(269210),
        a = l(752843),
        s = l(481060),
        o = l(757746),
        u = l(930155),
        c = l(889989),
        d = l(696906),
        m = l(73346),
        p = l(591759),
        f = l(886253),
        x = l(680005),
        v = l(938337);
      function h(e) {
        var n, l;
        let {
            appId: h,
            subscriptionType: C,
            onClose: g,
            skuId: j,
            guildId: S,
            transitionState: I,
            onHeaderTitleClick: N,
          } = e,
          { data: E } = (0, u.H)(j),
          b = E[0],
          { data: Z } = (0, o.Z)(j),
          T = i.useMemo(() => {
            var e;
            return (null == Z ? void 0 : Z.thumbnail) != null &&
              null !== (e = p.Z.toURLSafe((0, m._W)(h, Z.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [h, null == Z ? void 0 : Z.thumbnail]),
          _ = i.useMemo(() => {
            let e = null == Z ? void 0 : Z.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(h, e.icon),
              }));
          }, [h, null == Z ? void 0 : Z.benefits]),
          { openModal: y, cannotOpenReason: k } = (0, d.ZP)({
            skuId: j,
            subscribeForGuild: null != S ? S : void 0,
          });
        return null == Z
          ? null
          : (0, t.jsx)(f.A, {
              appId: h,
              skuId: j,
              transitionState: I,
              onHeaderTitleClick: null != N ? N : g,
              onClose: g,
              footer: (0, t.jsx)(x.p, {
                onClick: y,
                appId: h,
                subscriptionType: C,
                skuId: j,
                subscriptionPlan: b,
                cannotOpenReason: k,
              }),
              children: (0, t.jsx)(v.i, {
                appId: h,
                skuId: j,
                benefits:
                  null != _
                    ? _.map((e) =>
                        (0, t.jsx)(
                          r.G,
                          {
                            name: e.title,
                            icon: e.icon,
                            description: e.description,
                          },
                          e.id,
                        ),
                      )
                    : void 0,
                description:
                  null !== (n = Z.description) && void 0 !== n ? n : void 0,
                imgSrc: T,
                title:
                  null !== (l = null == b ? void 0 : b.name) && void 0 !== l
                    ? l
                    : Z.summary,
                tag: (0, t.jsx)(a.Z, { type: C }),
                FallbackIcon: s.BadgeIcon,
              }),
            });
      }
    },
    938337: function (e, n, l) {
      l.d(n, {
        i: function () {
          return u;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(512100),
        a = l(906732),
        s = l(626135),
        o = l(981631);
      function u(e) {
        let { appId: n, skuId: l, ...u } = e,
          { analyticsLocations: c } = (0, a.ZP)();
        return (
          i.useEffect(() => {
            s.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: l,
              location_stack: c,
            });
          }, [c, n, l]),
          (0, t.jsx)(r.u, { ...u })
        );
      }
    },
    744969: function (e, n, l) {
      l.d(n, {
        s: function () {
          return j;
        },
      }),
        l(789020);
      var t = l(200651),
        i = l(192379),
        r = l(442837),
        a = l(544891),
        s = l(481060),
        o = l(570140),
        u = l(171246),
        c = l(509545),
        d = l(55563),
        m = l(551428),
        p = l(74538),
        f = l(937615),
        x = l(147496),
        v = l(519896),
        h = l(981631),
        C = l(388032);
      let g = (0, r.Kb)([d.Z, c.Z, m.Z], {
        queryId: (e) => (null != e ? ["premium-button", e] : null),
        get: (e) => {
          var n;
          if (null == e) return;
          let l = d.Z.get(e),
            t = null !== (n = c.Z.getForSKU(e)) && void 0 !== n ? n : [],
            i = m.Z.getForSKU(e),
            r = d.Z.getParentSKU(e);
          if (
            null != l &&
            null != i &&
            (null == l || l.type !== h.epS.SUBSCRIPTION || null != r)
          )
            return {
              parentSku: r,
              sku: l,
              storeListing: i,
              subscriptionPlans: t,
            };
        },
        load: async (e, n) => {
          if (null == n) return;
          let l = { url: h.ANM.STOREFRONT_PREMIUM_BUTTON(n) },
            { body: t } = await a.tn.get(l);
          o.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: t.store_listings,
          }),
            null != t.subscription_plans &&
              o.Z.dispatch({
                type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                skuId: n,
                subscriptionPlans: t.subscription_plans,
              }),
            null != t.skus &&
              t.skus.forEach((e) => {
                o.Z.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
              });
        },
        useStateHook: r.cj,
      });
      function j(e) {
        let { data: n } = g(e),
          l = null == n ? void 0 : n.parentSku,
          r = null == n ? void 0 : n.sku,
          a = null == n ? void 0 : n.storeListing,
          o = null == n ? void 0 : n.subscriptionPlans,
          c = i.useCallback(() => {
            if (
              (null == r ? void 0 : r.applicationId) == null ||
              (null == r ? void 0 : r.id) == null ||
              (null == r ? void 0 : r.flags) == null
            )
              return null;
            (0, s.openModal)((e) => {
              let { onClose: n, transitionState: l } = e;
              return (0, t.jsx)(v.SubscriptionDetailsModal, {
                appId: r.applicationId,
                subscriptionType: (0, u.KW)(r.flags) ? "user" : "guild",
                onClose: n,
                skuId: r.id,
                transitionState: l,
                guildId: null,
              });
            });
          }, [
            null == r ? void 0 : r.applicationId,
            null == r ? void 0 : r.id,
            null == r ? void 0 : r.flags,
          ]),
          d = i.useCallback(() => {
            if (null == r) return null;
            (0, s.openModal)((e) => {
              let { onClose: n, transitionState: l } = e;
              return (0, t.jsx)(x.ItemDetailsModal, {
                appId: r.applicationId,
                skuId: r.id,
                onClose: n,
                transitionState: l,
              });
            });
          }, [r]);
        if (
          null != r &&
          null != a &&
          (null == r || r.type !== h.epS.SUBSCRIPTION || null != l)
        ) {
          if (null == e || (null != r && !r.available))
            return { disabled: !0, label: C.intl.string(C.t.CHa0vL) };
          if (r.type === h.epS.SUBSCRIPTION) {
            if (null == o || 0 === o.length)
              return { disabled: !0, label: C.intl.string(C.t.CHa0vL) };
            let e = o[0],
              n = (0, p.aS)(e.id);
            return {
              disabled: !1,
              label: C.intl.formatToPlainString(C.t["c6Q+Bw"], {
                skuName: r.name,
                price: (0, f.T4)(n.amount, n.currency),
              }),
              onClick: c,
            };
          }
          return null == r.price
            ? { disabled: !0, label: C.intl.string(C.t.CHa0vL) }
            : {
                disabled: !1,
                label: C.intl.formatToPlainString(C.t["c6Q+Bw"], {
                  skuName: r.name,
                  price: (0, f.T4)(r.price.amount, r.price.currency),
                }),
                onClick: d,
              };
        }
      }
    },
    256139: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = l(200651),
        i = l(120356),
        r = l.n(i),
        a = l(481060),
        s = l(615934);
      function o(e) {
        let { className: n, onClick: l, ...i } = e,
          o = (0, t.jsx)(a.Clickable, {
            ...i,
            className: r()(null != l && s.clickable, n),
            onClick: l,
          });
        return null == l ? (0, t.jsx)(a.BlockInteractions, { children: o }) : o;
      }
    },
    328731: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return x;
        },
      });
      var t = l(200651),
        i = l(120356),
        r = l.n(i),
        a = l(481060),
        s = l(318374),
        o = l(5192),
        u = l(192918),
        c = l(256139),
        d = l(91907),
        m = l(866040),
        p = l(388032),
        f = l(756988);
      function x(e) {
        let { entry: n, channel: l, className: i } = e,
          {
            displayParticipants: x,
            participant1: v,
            participant2: h,
            numOtherParticipants: C,
            orderedParticipants: g,
          } = (0, u.Z)(n),
          j = [v, h];
        return (0, t.jsxs)("div", {
          className: r()(f.container, i),
          children: [
            x.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(m.Z, {
                      participants: g,
                      channel: l,
                      children: (e) =>
                        (0, t.jsx)(a.Clickable, {
                          className: f.clickable,
                          ...e,
                          children: (0, t.jsx)(s.Z, {
                            maxUsers: 3,
                            users: x,
                            size: a.AvatarSizes.SIZE_20,
                            avatarClassName: f.stackedAvatar,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0,
                          }),
                        }),
                    }),
                    (0, t.jsx)(a.Spacer, { size: 6, horizontal: !0 }),
                  ],
                })
              : null,
            (0, t.jsx)(a.Heading, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              className: r()(f.truncatedText, f.usersHeader),
              scaleFontToUserSetting: !0,
              children: p.intl.format(p.t.rH95Gh, {
                user0: o.ZP.getName(l.guild_id, l.id, j[0]),
                user1: o.ZP.getName(l.guild_id, l.id, j[1]),
                countOthers: C,
                name0Hook: (e, n) =>
                  (0, t.jsx)(d.Z, { text: e, user: j[0], channel: l }, n),
                name1Hook: (e, n) =>
                  (0, t.jsx)(d.Z, { text: e, user: j[1], channel: l }, n),
                countOthersHook: (e, n) =>
                  (0, t.jsx)(
                    m.Z,
                    {
                      participants: g,
                      channel: l,
                      children: (n) =>
                        (0, t.jsx)(c.Z, {
                          ...n,
                          tag: "span",
                          children: (0, t.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "text-primary",
                            lineClamp: 1,
                            scaleFontToUserSetting: !0,
                            children: e,
                          }),
                        }),
                    },
                    n,
                  ),
              }),
            }),
          ],
        });
      }
    },
    91907: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(793030),
        a = l(256139),
        s = l(866040);
      function o(e) {
        let {
            user: n,
            text: l,
            channel: o,
            textClassName: u,
            onPopoutClosed: c,
          } = e,
          d = (0, i.useMemo)(() => [n], [n]);
        return (0, t.jsx)(s.Z, {
          participants: d,
          channel: o,
          onPopoutClosed: c,
          children: (e) =>
            (0, t.jsx)(a.Z, {
              ...e,
              tag: "span",
              children: (0, t.jsx)(r.xv, {
                className: u,
                variant: "text-sm/semibold",
                color: "text-primary",
                lineClamp: 1,
                scaleFontToUserSetting: !0,
                children: l,
              }),
            }),
        });
      }
    },
    866040: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return x;
        },
      }),
        l(411104);
      var t = l(200651),
        i = l(192379),
        r = l(442837),
        a = l(481060),
        s = l(239091),
        o = l(751688),
        u = l(184301),
        c = l(347475),
        d = l(210887),
        m = l(5192),
        p = l(684201);
      function f(e) {
        let { participants: n, channel: i } = e;
        return (0, t.jsx)(a.Scroller, {
          className: p.popout,
          children: n.map((e) =>
            (0, t.jsx)(
              o.Z,
              {
                guildId: null == i ? void 0 : i.guild_id,
                user: e,
                nick: m.ZP.getNickname(
                  null == i ? void 0 : i.guild_id,
                  null == i ? void 0 : i.id,
                  e,
                ),
                onContextMenu: (n) => {
                  (0, s.jW)(n, async () => {
                    let { default: n } = await Promise.all([
                      l.e("79695"),
                      l.e("69220"),
                      l.e("50261"),
                    ]).then(l.bind(l, 881351));
                    return (l) => (0, t.jsx)(n, { ...l, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function x(e) {
        let { children: n, participants: l, channel: s, onPopoutClosed: o } = e,
          m = (0, r.e7)([d.Z], () => d.Z.theme),
          p = 1 === l.length ? l[0] : null,
          x = (0, i.useCallback)(
            (e) => {
              if (null != p)
                return (0, t.jsx)(c.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == o || o();
                  },
                  userId: p.id,
                  guildId: null == s ? void 0 : s.guild_id,
                  channelId: null == s ? void 0 : s.id,
                });
              if (null != l)
                return (0, t.jsx)(f, { participants: l, channel: s });
              throw Error("One of participant or participants is required");
            },
            [s, o, l, p],
          );
        return (0, t.jsx)(a.ThemeContextProvider, {
          theme: m,
          children: (0, t.jsx)(a.Popout, {
            renderPopout: x,
            preload: () =>
              null != p
                ? (0, u.Z)(p, {
                    guildId: null == s ? void 0 : s.guild_id,
                    channelId: null == s ? void 0 : s.id,
                  })
                : Promise.resolve(),
            children: n,
          }),
        });
      }
    },
    435439: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = l(200651),
        i = l(481060),
        r = l(374129),
        a = l(639351),
        s = l(908841),
        o = l(410441),
        u = l(206583),
        c = l(388032);
      let d = {
          [u.kG.SPOTIFY]: s.Z,
          [u.kG.CRUNCHYROLL]: i.CrunchyrollNeutralIcon,
          [u.kG.XBOX]: a.Z,
          [u.kG.PLAYSTATION]: r.Z,
        },
        m = {
          [u.kG.SPOTIFY]: () => c.intl.string(c.t["0ZB/XF"]),
          [u.kG.CRUNCHYROLL]: () => c.intl.string(c.t.jdJYX1),
          [u.kG.XBOX]: () => c.intl.string(c.t["Nfvo7+"]),
          [u.kG.PLAYSTATION]: () => c.intl.string(c.t.fFl4jo),
        };
      function p(e) {
        var n;
        let { type: l, "aria-label": i, ...r } = e,
          a = d[l];
        if (null == a) return null;
        let s =
          null != i
            ? i
            : null === (n = m[l]) || void 0 === n
              ? void 0
              : n.call(m);
        return (0, t.jsx)(o.Z, { Icon: a, ...r, "aria-label": s });
      }
    },
    96513: function (e, n, l) {
      var t, i;
      l.d(n, {
        _: function () {
          return t;
        },
      }),
        ((i = t || (t = {}))[(i.EMBED = 1)] = "EMBED");
    },
    52396: function (e, n, l) {
      l.d(n, {
        B: function () {
          return v;
        },
        r: function () {
          return C;
        },
      }),
        l(411104);
      var t = l(200651),
        i = l(192379),
        r = l(512722),
        a = l.n(r),
        s = l(876215),
        o = l(775379),
        u = l(879046),
        c = l(214597),
        d = l(498187),
        m = l(482417),
        p = l(301419),
        f = l(397035);
      let x = i.createContext(void 0);
      function v() {
        let e = i.useContext(x);
        return (
          a()(
            null != e,
            "useEntryDataContext must be used within a EntryDataContextProvider",
          ),
          e
        );
      }
      function h(e) {
        let { entry: n, ...l } = e,
          i = {
            baseEntryData: (0, c.Z)({ entry: n, channel: l.channel }),
            ...l,
          };
        switch (n.content_type) {
          case s.s.TOP_ARTIST:
            return (0, t.jsx)(j, { entry: n, ...i });
          case s.s.TOP_GAME:
            return (0, t.jsx)(S, { entry: n, ...i });
          case s.s.PLAYED_GAME:
            return (0, t.jsx)(I, { entry: n, ...i });
          case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(N, { entry: n, ...i });
          case s.s.LISTENED_SESSION:
            return (0, t.jsx)(E, { entry: n, ...i });
          case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(g, { entry: n, ...i });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function C(e) {
        let { errorFallback: n, ...l } = e;
        return (0, t.jsx)(o.S, {
          fallback: n,
          children: (0, t.jsx)(h, { ...l }),
        });
      }
      function g(e) {
        let { entry: n, children: l, ...i } = e,
          r = (0, u.Z)({ entry: n, ...i });
        return (0, t.jsx)(x.Provider, {
          value: { parsedEntry: r, ...i },
          children: l,
        });
      }
      function j(e) {
        let { entry: n, children: l, ...i } = e,
          r = (0, p.Z)({ entry: n, ...i });
        return (0, t.jsx)(x.Provider, {
          value: { parsedEntry: r, ...i },
          children: l,
        });
      }
      function S(e) {
        let { entry: n, children: l, ...i } = e,
          r = (0, d.Z)({ entry: n, ...i });
        return (0, t.jsx)(x.Provider, {
          value: { parsedEntry: r, ...i },
          children: l,
        });
      }
      function I(e) {
        let { entry: n, children: l, ...i } = e,
          r = (0, d.Z)({ entry: n, ...i });
        return (0, t.jsx)(x.Provider, {
          value: { parsedEntry: r, ...i },
          children: l,
        });
      }
      function N(e) {
        let { entry: n, children: l, ...i } = e,
          r = (0, f.Z)({ entry: n, ...i });
        return (0, t.jsx)(x.Provider, {
          value: { parsedEntry: r, ...i },
          children: l,
        });
      }
      function E(e) {
        let { entry: n, children: l, ...i } = e,
          r = (0, m.Z)({ entry: n, ...i });
        return (0, t.jsx)(x.Provider, {
          value: { parsedEntry: r, ...i },
          children: l,
        });
      }
    },
    775379: function (e, n, l) {
      l.d(n, {
        S: function () {
          return i;
        },
      }),
        l(47120);
      var t = l(192379);
      class i extends t.PureComponent {
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, n) {
          console.error("ErrorBoundary caught an error", e, n);
        }
        render() {
          return null != this.state.error
            ? this.props.fallback
            : this.props.children;
        }
        constructor(...e) {
          var n, l, t;
          super(...e),
            (n = this),
            (t = { error: null }),
            (l = "state") in n
              ? Object.defineProperty(n, l, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[l] = t);
        }
      }
    },
    879046: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = l(499254),
        i = l(827498),
        r = l(835473),
        a = l(541716),
        s = l(561308),
        o = l(701488),
        u = l(388032);
      function c(e) {
        let { entry: n } = e,
          l = (0, r.q)(n.extra.application_id),
          c = null == l ? void 0 : l.getIconURL(o.Si.LARGE),
          d = n.extra.activity_name,
          m = (0, s.Jg)(n) ? u.t.vPg1JS : u.t.rPqqtr,
          p = {
            onClick: () => {
              t.__(i._b.TEXT, a.I.NORMAL, {
                applicationId: n.extra.application_id,
              });
            },
            ariaDescription: u.intl.formatToPlainString(u.t.NTHttL, {
              title: d,
            }),
          };
        return {
          thumbnailUrl: c,
          title: d,
          titleClickable: p,
          thumbnailClickable: p,
          userDescription: m,
        };
      }
    },
    214597: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = l(192379),
        i = l(902704),
        r = l(232567),
        a = l(720202),
        s = l(594174);
      function o(e) {
        let { entry: n, channel: l } = e,
          o = t.useRef([]);
        return (
          t.useEffect(() => {
            if (!(0, i.E)(o.current, n.participants))
              (o.current = n.participants),
                n.participants
                  .filter((e) => null == s.default.getUser(e))
                  .forEach((e) => {
                    null == l.guild_id
                      ? (0, r.PR)(e)
                      : a.Z.requestMember(l.guild_id, e);
                  });
          }, [n, l.guild_id]),
          {}
        );
      }
    },
    498187: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return x;
        },
      });
      var t = l(876215),
        i = l(758713),
        r = l(835473),
        a = l(810568),
        s = l(168524),
        o = l(561308),
        u = l(206583),
        c = l(96513),
        d = l(701488),
        m = l(388032);
      let p = { [i.z.XBOX]: u.kG.XBOX, [i.z.PLAYSTATION]: u.kG.PLAYSTATION },
        f = { [c._.EMBED]: a.m1.Embed };
      function x(e) {
        let n,
          l,
          { entry: i, location: a, baseEntryData: u } = e,
          c = (0, r.q)(i.extra.application_id),
          x = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
          v = i.extra.game_name;
        if (null != i.extra.platform) {
          let e = p[i.extra.platform];
          null != e && (n = { type: e });
        }
        l =
          i.content_type === t.s.PLAYED_GAME
            ? (0, o.kr)(i) && !(0, o.n2)(i)
              ? m.t.vPg1JS
              : m.t.rPqqtr
            : m.t.rPqqtr;
        let h = f[a],
          C = {
            onClick: (0, s.Z)({
              location: h,
              applicationId: i.extra.application_id,
              source: h,
              trackEntryPointImpression: !0,
              sourceUserId: i.author_id,
            }),
            ariaDescription: m.intl.formatToPlainString(m.t["9sZWVl"], {
              gameName: v,
            }),
          };
        return {
          ...u,
          thumbnailUrl: x,
          title: v,
          titleClickable: C,
          thumbnailClickable: C,
          userDescription: l,
          providerIconProps: n,
        };
      }
    },
    482417: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      }),
        l(47120);
      var t = l(423875),
        i = l(740605),
        r = l(206583),
        a = l(616922),
        s = l(388032);
      function o(e) {
        let n,
          { entry: l, baseEntryData: o } = e,
          u = l.extra.entries[0].media,
          c = u.artists[0],
          { title: d, provider: m, image_url: p } = u,
          f = c.name,
          x = {
            onClick: () => (0, i.o)(a.Hw.TRACK, u.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, {
              itemName: d,
            }),
          },
          v = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, c.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, {
              itemName: f,
            }),
          };
        return (
          m === t.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
          {
            ...o,
            title: d,
            subtitle: f,
            thumbnailUrl: p,
            titleClickable: x,
            subtitleClickable: v,
            thumbnailClickable: x,
            userDescription: s.t.CcVI1d,
            providerIconProps: n,
          }
        );
      }
    },
    301419: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = l(423875),
        i = l(740605),
        r = l(206583),
        a = l(616922),
        s = l(388032);
      function o(e) {
        let n,
          { entry: l, baseEntryData: o } = e,
          { provider: u, image_url: c } = l.extra.media,
          d = l.extra.artist.name,
          m = {
            onClick: () =>
              (0, i.o)(a.Hw.ALBUM, l.extra.media.external_parent_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, {
              itemName: l.extra.media.parent_title,
            }),
          },
          p = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, l.extra.artist.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, {
              itemName: d,
            }),
          };
        return (
          u === t.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
          {
            ...o,
            title: d,
            thumbnailUrl: c,
            titleClickable: p,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: s.t.CcVI1d,
            providerIconProps: n,
          }
        );
      }
    },
    397035: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = l(192379),
        i = l(835473),
        r = l(81063),
        a = l(591759),
        s = l(561308),
        o = l(206583),
        u = l(701488),
        c = l(388032);
      function d(e) {
        let n,
          { entry: l, baseEntryData: d } = e,
          m = (0, i.q)(l.extra.application_id),
          p = null == m ? void 0 : m.getIconURL(128),
          f = (0, r.getAssetImage)(
            l.extra.application_id,
            l.extra.media_assets_large_image,
            [u.Si.LARGE, u.Si.LARGE],
          ),
          x = l.extra.media_title,
          v = l.extra.media_subtitle,
          h = (0, s.Jg)(l) ? c.t["LH+Z39"] : c.t.YuKgmp,
          C = { type: o.kG.CRUNCHYROLL },
          g = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = a.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [l.extra.url]);
        return (
          null != g &&
            (n = {
              href: a.Z.format(g),
              ariaDescription: c.intl.formatToPlainString(c.t.aFFQ3t, {
                title: x,
              }),
            }),
          {
            ...d,
            thumbnailUrl: null != f ? f : p,
            title: x,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: v,
            userDescription: h,
            providerIconProps: C,
          }
        );
      }
    },
    410441: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(481060),
        r = l(832923);
      function a(e) {
        let { onClick: n, Icon: l, "aria-label": a } = e,
          s = (0, i.useToken)(
            i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          o = (0, t.jsx)(l, {
            color: s.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, t.jsx)("div", {
              className: r.container,
              "aria-label": a,
              children: o,
            })
          : (0, t.jsx)(i.Tooltip, {
              text: a,
              children: (e) =>
                (0, t.jsx)(i.Clickable, {
                  className: r.container,
                  ...e,
                  onClick: n,
                  children: o,
                }),
            });
      }
    },
    870456: function (e, n, l) {
      l.d(n, {
        u: function () {
          return t;
        },
      });
      let t = {
        allowList: !0,
        allowHeading: !0,
        allowLinks: !0,
        previewLinkTarget: !0,
      };
    },
    811654: function (e, n, l) {
      l.d(n, {
        HI: function () {
          return p;
        },
        _H: function () {
          return f;
        },
        af: function () {
          return x;
        },
        tx: function () {
          return v;
        },
      }),
        l(47120);
      var t = l(524846),
        i = l(911969),
        r = l(592125),
        a = l(271383),
        s = l(430824),
        o = l(594174),
        u = l(483360),
        c = l(823379),
        d = l(5192),
        m = l(280501);
      l(892902);
      let p = 1e3;
      function f(e, n, l) {
        let t = r.Z.getChannel(l);
        if (null == t) return [];
        let a = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
          s = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
          { users: o, roles: c } = u.ZP.queryMentionResults({
            query: n,
            channel: t,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: a,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
          }),
          p = o.map((e) => {
            var n;
            let i = d.ZP.getNickname(t.getGuildId(), l, e.user);
            return {
              type: m.tM.USER,
              value: e.user.id,
              label:
                null !== (n = null != i ? i : e.user.globalName) && void 0 !== n
                  ? n
                  : e.user.username,
            };
          });
        return [
          ...p,
          ...c.map((e) => ({ type: m.tM.ROLE, value: e.id, label: e.name })),
        ];
      }
      function x(e, n, l) {
        let t = r.Z.getChannel(n);
        return null == t
          ? []
          : u.ZP.queryApplicationCommandChannelResults({
              query: e,
              channel: t,
              channelTypes: l,
              limit: 15,
            }).channels.map((e) => ({
              type: m.tM.CHANNEL,
              value: e.id,
              label: e.name,
            }));
      }
      function v(e, n) {
        let l =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let i = s.Z.getGuild(n);
        return e
          .map((e) => {
            switch (e.type) {
              case t.$.USER: {
                var n;
                let l = o.default.getUser(e.id);
                if (null == l) return null;
                let t = null != i ? a.ZP.getNick(i.id, l.id) : void 0;
                return {
                  type: m.tM.USER,
                  value: l.id,
                  label:
                    null !== (n = null != t ? t : l.globalName) && void 0 !== n
                      ? n
                      : l.username,
                };
              }
              case t.$.ROLE: {
                if (null == i) return null;
                let n = s.Z.getRole(i.id, e.id);
                if (null == n) return null;
                return { type: m.tM.ROLE, value: n.id, label: n.name };
              }
              case t.$.CHANNEL: {
                if (null == i) return null;
                let n = r.Z.getChannel(e.id);
                if (
                  null == n ||
                  n.guild_id !== i.id ||
                  (l.length > 0 && !l.includes(n.type))
                )
                  return null;
                return { type: m.tM.CHANNEL, value: n.id, label: n.name };
              }
            }
          })
          .filter(c.lm);
      }
    },
    954654: function (e, n, l) {
      l.d(n, {
        ZP: function () {
          return j;
        },
        xX: function () {
          return g;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(911969),
        s = l(970184),
        o = l(987106),
        u = l(927057),
        c = l(574597),
        d = l(378975),
        m = l(413991),
        p = l(12067),
        f = l(676149),
        x = l(861529),
        v = l(770009),
        h = l(889515),
        C = l(915689);
      function g(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case a.re.ACTION_ROW:
                return (0, t.jsx)(h.Z, { ...e, renderComponents: g }, n);
              case a.re.BUTTON:
                return (0, t.jsx)(o.Z, { ...e }, n);
              case a.re.STRING_SELECT:
                return (0, t.jsx)(d.Z, { ...e }, n);
              case a.re.CHANNEL_SELECT:
                return (0, t.jsx)(u.Z, { ...e }, n);
              case a.re.USER_SELECT:
              case a.re.ROLE_SELECT:
              case a.re.MENTIONABLE_SELECT:
                return (0, t.jsx)(c.Z, { ...e }, n);
              case a.re.INPUT_TEXT:
                return (0, t.jsx)(m.Z, { ...e }, n);
              case a.re.TEXT:
                return (0, t.jsx)(x.Z, { ...e }, n);
              case a.re.MEDIA_GALLERY:
                return (0, t.jsx)(p.Z, { ...e }, n);
              case a.re.SEPARATOR:
                return (0, t.jsx)(f.Z, { ...e }, n);
              case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, t.jsx)(v.Z, { ...e }, n);
            }
          })(e, n.toString()),
        );
      }
      function j(e) {
        let { message: n } = e,
          { components: l } = n;
        return 0 === l.length
          ? null
          : (0, t.jsx)("div", {
              className: r()([
                C.container,
                { [C.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, t.jsx)(s.Il, { message: n, children: g(l) }),
            });
      }
    },
    987106: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return g;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(392711),
        s = l(481060),
        o = l(239091),
        u = l(596454),
        c = l(911969),
        d = l(744969),
        m = l(572004),
        p = l(49012),
        f = l(970184),
        x = l(280501),
        v = l(388032),
        h = l(948489);
      function C(e) {
        let { url: n, onSelect: l } = e;
        return m.wS && null != n
          ? (0, t.jsx)(s.Menu, {
              navId: "component-button",
              onClose: o.Zy,
              "aria-label": v.intl.string(v.t.tvTXy8),
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                children: (0, t.jsx)(s.MenuItem, {
                  id: "copy",
                  label: v.intl.string(v.t.uHhnfX),
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function g(e) {
        let n;
        let { label: l, style: i, disabled: m, emoji: v, url: g, skuId: j } = e,
          {
            executeStateUpdate: S,
            visualState: I,
            isDisabled: N,
          } = (0, f.Ee)(e),
          E = (0, d.s)(j),
          b = null != j && i === c.ZJ.PREMIUM,
          Z = b && (null == E ? void 0 : E.disabled),
          T = b ? (null == E ? void 0 : E.label) : l,
          _ = null != v,
          y = null != T && T.length > 0,
          k = i === c.ZJ.LINK && null != g && g.length > 0,
          R = I === x.gH.LOADING || (b && null == E);
        return (
          (n = k
            ? () => {
                (0, p.q)({ href: null != g ? g : "", shouldConfirm: !0 });
              }
            : b
              ? null != E && !1 === E.disabled
                ? E.onClick
                : a.noop
              : () => S()),
          (0, t.jsxs)(s.Button, {
            color: (function (e) {
              switch (e) {
                case c.ZJ.PRIMARY:
                case c.ZJ.PREMIUM:
                  return s.Button.Colors.BRAND;
                case c.ZJ.SUCCESS:
                  return s.Button.Colors.GREEN;
                case c.ZJ.DESTRUCTIVE:
                  return s.Button.Colors.RED;
                default:
                  return s.Button.Colors.PRIMARY;
              }
            })(i),
            size: s.Button.Sizes.SMALL,
            disabled: m || I === x.gH.DISABLED || N || Z,
            onClick: n,
            onContextMenu: (e) => {
              k && (0, o.vq)(e, (e) => (0, t.jsx)(C, { ...e, url: g }));
            },
            role: k ? "link" : "button",
            children: [
              (0, t.jsxs)("div", {
                className: r()(h.content, { [h.hidden]: R, [h.premium]: b }),
                "aria-hidden": R,
                children: [
                  b
                    ? (0, t.jsx)("div", {
                        className: h.shopIcon,
                        children: (0, t.jsx)(s.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  _
                    ? (0, t.jsx)(u.Z, {
                        className: r()({ [h.textEmoji]: y }),
                        src: v.src,
                        emojiId: v.id,
                        emojiName: v.name,
                        animated: v.animated,
                      })
                    : null,
                  y
                    ? (0, t.jsx)("div", { className: h.label, children: T })
                    : null,
                  k
                    ? (0, t.jsx)(s.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: h.launchIcon,
                      })
                    : null,
                ],
              }),
              R
                ? (0, t.jsx)("div", {
                    className: h.loading,
                    children: (0, t.jsx)(s.Dots, {
                      dotRadius: 3.5,
                      themed: !0,
                    }),
                  })
                : null,
            ],
          })
        );
      }
    },
    927057: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(481060),
        a = l(471445),
        s = l(592125),
        o = l(430824),
        u = l(970184),
        c = l(811654),
        d = l(344991),
        m = l(981631),
        p = l(967831);
      function f(e) {
        var n;
        let { channelTypes: l } = e,
          f = (0, u.CJ)(),
          x =
            null == f
              ? void 0
              : null === (n = f.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          v = s.Z.getChannel(x),
          h = o.Z.getGuild(null == v ? void 0 : v.getGuildId()),
          C = i.useMemo(
            () => (0, c.tx)(e.defaultValues, null == h ? void 0 : h.id, l),
            [e.defaultValues, h, l],
          );
        return (0, t.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, c.af)(e, x, l),
          renderIcon: (e, n) => {
            let l = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == l) return null;
            let i =
              l.type === m.d4z.GUILD_CATEGORY ? r.FolderIcon : (0, a.KS)(l);
            return null != i
              ? (0, t.jsx)(i, {
                  size: "custom",
                  color: "currentColor",
                  width: n,
                  height: n,
                })
              : null;
          },
          renderOptionLabel: (e) =>
            (0, t.jsx)("span", { className: p.label, children: e.label }),
          defaultValues: C,
        });
      }
    },
    574597: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return I;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(866442),
        a = l(481060),
        s = l(129861),
        o = l(91218),
        u = l(829883),
        c = l(518738),
        d = l(14263),
        m = l(592125),
        p = l(430824),
        f = l(158776),
        x = l(594174),
        v = l(970184),
        h = l(280501),
        C = l(811654),
        g = l(344991),
        j = l(981631),
        S = l(967831);
      function I(e) {
        var n;
        let l = (0, v.CJ)(),
          I =
            null == l
              ? void 0
              : null === (n = l.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          N = m.Z.getChannel(I),
          E = p.Z.getGuild(null == N ? void 0 : N.getGuildId()),
          b = (0, d.Z)(null == E ? void 0 : E.id, C.HI),
          Z = i.useMemo(
            () => (0, C.tx)(e.defaultValues, null == E ? void 0 : E.id),
            [e.defaultValues, E],
          );
        return (0, t.jsx)(g.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, C._H)(e.type, n, I),
          renderIcon: (e, n) => {
            let l = n === g.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === h.tM.USER) {
              let i = x.default.getUser(e.value);
              if (null == i) return;
              return (0, t.jsx)(a.Avatar, {
                size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                src: i.getAvatarURL(null == E ? void 0 : E.id, n),
                status: l ? null : f.Z.getStatus(i.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === h.tM.ROLE) {
              var i;
              let l = null != E ? p.Z.getRole(E.id, e.value) : void 0;
              if (null == l || null == E) return;
              let s = (0, u._b)(E, l) ? (0, c.Kz)(l, n) : null;
              return null != s
                ? (0, t.jsx)(o.Z, { ...s })
                : (0, t.jsx)(a.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (i = l.colorString) && void 0 !== i
                        ? i
                        : (0, r.Rf)(j.p6O),
                    height: n,
                    width: n,
                  });
            }
          },
          renderOptionLabel: (e) => {
            let n = null;
            if (e.type === h.tM.USER) {
              let l = x.default.getUser(e.value);
              null != l &&
                (n = (0, t.jsx)(s.Z, {
                  className: S.tag,
                  usernameClass: S.username,
                  discriminatorClass: S.discriminator,
                  botClass: S.bot,
                  user: l,
                  forceUsername: !0,
                }));
            } else if (e.type === h.tM.ROLE) {
              let l = null != E ? p.Z.getRole(E.id, e.value) : void 0,
                i = null == l ? null : null == b ? void 0 : b[l.id];
              null != i &&
                (n = (0, t.jsxs)("div", {
                  className: S.roleCountContainer,
                  children: [
                    (0, t.jsx)(a.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: S.roleCountIcon,
                    }),
                    (0, t.jsx)("span", {
                      className: S.roleCountText,
                      children: i,
                    }),
                  ],
                }));
            }
            return (0, t.jsxs)("span", {
              className: S.label,
              children: [
                (0, t.jsx)("span", {
                  className: S.labelText,
                  children: e.label,
                }),
                n,
              ],
            });
          },
          defaultValues: Z,
        });
      }
    },
    344991: function (e, n, l) {
      l.d(n, {
        ZP: function () {
          return C;
        },
        tE: function () {
          return t;
        },
      }),
        l(47120);
      var t,
        i,
        r = l(200651),
        a = l(192379),
        s = l(120356),
        o = l.n(s),
        u = l(481060),
        c = l(911969),
        d = l(739754),
        m = l(970184),
        p = l(280501),
        f = l(388032),
        x = l(128422),
        v = l(601648);
      function h(e) {
        let { icon: n, iconSize: l } = e;
        return (0, r.jsx)("div", {
          className: x.iconContainer,
          style: { height: l, width: l },
          children: n,
        });
      }
      function C(e) {
        let {
            selectActionComponent: n,
            queryOptions: l,
            renderIcon: t,
            renderOptionLabel: i,
            defaultValues: s,
          } = e,
          { type: C, placeholder: g, maxValues: j, disabled: S } = n,
          [I, N] = a.useState(!1),
          [E, b] = a.useState(!1),
          [Z, T] = a.useState(
            new Map(null == s ? void 0 : s.map((e) => [e.value, e])),
          ),
          [_, y] = a.useState(new Set(Z.keys())),
          [k, R] = a.useState(() => (null != s ? s : []).map((e) => e.value)),
          [L, P] = a.useState(0);
        a.useEffect(() => {
          let e = (null != s ? s : []).map((e) => e.value);
          if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n)))
            return;
          R(e);
          let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
          T(n), y(new Set(n.keys())), P((e) => e + 1);
        }, [s, k]);
        let {
            state: O,
            executeStateUpdate: A,
            visualState: M,
            isDisabled: U,
            error: w,
          } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(Z.values()),
          }),
          D = M === p.gH.LOADING;
        a.useEffect(() => {
          if (
            (null == O ? void 0 : O.type) === c.re.USER_SELECT ||
            (null == O ? void 0 : O.type) === c.re.ROLE_SELECT ||
            (null == O ? void 0 : O.type) === c.re.MENTIONABLE_SELECT ||
            (null == O ? void 0 : O.type) === c.re.CHANNEL_SELECT
          ) {
            let e = new Map(O.selectedOptions.map((e) => [e.value, e]));
            T(e), y(new Set(e.keys()));
          }
        }, [O]);
        let B = a.useCallback(() => {
          A({ type: C, selectedOptions: Array.from(Z.values()) }) &&
            y(new Set(Z.keys()));
        }, [A, C, Z]);
        a.useEffect(() => {
          if (
            !(
              I ||
              E ||
              (Z.size === _.size && Array.from(Z.keys()).every((e) => _.has(e)))
            )
          )
            B();
        }, [I, E, _, Z, B]);
        let G = 0 === Z.size || I,
          H = {
            isDisabled: S || U,
            wrapperClassName: x.select,
            options: (e) =>
              new Promise((n) => {
                n(l(e));
              }),
            placeholder: G
              ? null != g
                ? g
                : f.intl.string(f.t.Otr6W1)
              : void 0,
            onClose: () => N(!1),
            onOpen: () => N(!0),
            onBlur: () => b(!1),
            maxVisibleItems: 5,
            optionClassName: x.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
              let { inPill: l } = n,
                i = l ? 16 : 24,
                a = t(e, i);
              return null != a ? (0, r.jsx)(h, { icon: a, iconSize: i }) : null;
            },
            renderOptionLabel: i,
          };
        return (0, r.jsxs)(a.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: x.container,
              children: [
                j > 1
                  ? (0, r.jsx)(
                      u.SearchableSelect,
                      {
                        className: x.badges,
                        value: Array.from(Z.values()),
                        onChange: (e) => {
                          !I && b(!0), T(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: o()({
                          [x.soloInput]: 0 === Z.size,
                          [x.inlineInput]: Z.size > 0,
                          [x.hidden]: !G,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...H,
                      },
                      L,
                    )
                  : (0, r.jsx)(
                      u.SearchableSelect,
                      {
                        className: (x.badges, x.singleSelect),
                        value: [...Z.values()][0],
                        onChange: (e) =>
                          T(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...H,
                      },
                      L,
                    ),
                D
                  ? (0, r.jsx)("div", {
                      className: x.loading,
                      children: (0, r.jsx)(u.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != w
              ? (0, r.jsx)(d.st, { ...(0, d.c4)(w), className: v.error })
              : null,
          ],
        });
      }
      ((i = t || (t = {}))[(i.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"),
        (i[(i.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE");
    },
    378975: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return C;
        },
      }),
        l(47120);
      var t = l(200651),
        i = l(192379),
        r = l(120356),
        a = l.n(r),
        s = l(481060),
        o = l(596454),
        u = l(911969),
        c = l(739754),
        d = l(970184),
        m = l(280501),
        p = l(388032),
        f = l(601648);
      function x(e) {
        let {
            emoji: n,
            label: l,
            description: i,
            isDisabled: r,
            isOffset: s,
          } = e,
          u = a()(f.labelContainer, {
            [f.disabled]: r,
            [f.offset]: null == n && s,
          });
        return (0, t.jsxs)("div", {
          className: f.option,
          children: [
            null != n
              ? (0, t.jsx)(o.Z, {
                  className: f.emoji,
                  emojiId: n.id,
                  emojiName: n.name,
                  animated: n.animated,
                })
              : null,
            (0, t.jsxs)("div", {
              className: u,
              children: [
                (0, t.jsx)("strong", { className: f.label, children: l }),
                null != i
                  ? (0, t.jsx)("span", {
                      className: f.description,
                      children: i,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { emoji: n, label: l } = e;
        return (0, t.jsx)("div", {
          className: f.option,
          children: (0, t.jsxs)("div", {
            className: a()(f.value, f.singleValue),
            children: [
              null != n
                ? (0, t.jsx)(o.Z, {
                    className: f.emoji,
                    src: n.src,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: n.animated,
                  })
                : null,
              (0, t.jsx)("span", {
                className: f.singleValueLabel,
                children: l,
              }),
            ],
          }),
        });
      }
      function h(e) {
        let { options: n } = e;
        return (0, t.jsx)("div", {
          className: f.option,
          children: (0, t.jsx)("div", {
            className: f.value,
            children: n.map((e, n) =>
              (0, t.jsxs)(
                "div",
                {
                  className: f.optionTag,
                  children: [
                    null != e.emoji
                      ? (0, t.jsx)(o.Z, {
                          className: f.smallEmoji,
                          src: e.emoji.src,
                          emojiId: e.emoji.id,
                          emojiName: e.emoji.name,
                          animated: e.emoji.animated,
                        })
                      : null,
                    (0, t.jsx)(
                      "span",
                      { className: f.tag, children: e.label },
                      e.value,
                    ),
                  ],
                },
                n,
              ),
            ),
          }),
        });
      }
      function C(e) {
        let {
            type: n,
            options: l,
            id: r,
            placeholder: a,
            maxValues: o,
            minValues: C,
            disabled: g,
          } = e,
          j = i.useMemo(
            () => l.filter((e) => e.default).map((e) => e.value),
            [l],
          ),
          {
            state: S,
            executeStateUpdate: I,
            visualState: N,
            isDisabled: E,
            error: b,
          } = (0, d.Ee)(e, { type: n, values: j }),
          Z = o > 1,
          T = N === m.gH.LOADING,
          [_, y] = i.useState(!1),
          [k, R] = i.useState(
            () => new Set(l.filter((e) => e.default).map((e) => e.value)),
          ),
          [L, P] = i.useState(k),
          O = i.useMemo(() => l.some((e) => null != e.emoji), [l]);
        i.useEffect(() => {
          if ((null == S ? void 0 : S.type) === u.re.STRING_SELECT) {
            let e = new Set(S.values);
            R(e), P(e);
          } else {
            let e = new Set(j);
            R(e), P(e);
          }
        }, [r, j, S]);
        let A = i.useCallback(() => {
          if (L !== k)
            I({ type: u.re.STRING_SELECT, values: Array.from(k) }) && P(k);
        }, [k, L, P, I]);
        i.useEffect(() => {
          if (
            !(_ || (k.size === L.size && Array.from(L).every((e) => k.has(e))))
          )
            A();
        }, [_, k, L, A]);
        let M = s.singleSelect;
        Z ? (M = s.multiSelect) : 0 === C && (M = s.toggleSelect);
        let U = (0, s.useVariableSelect)({
          value: k,
          onChange: (e) => R(e),
          onSelectInteraction: M,
        });
        return (0, t.jsxs)(i.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: f.container,
              children: [
                (0, t.jsx)(s.Select, {
                  isDisabled: g || E,
                  className: f.select,
                  options: l.map((e) => ({
                    ...e,
                    disabled: Z && !k.has(e.value) && k.size === o,
                  })),
                  placeholder: null != a ? a : p.intl.string(p.t.Otr6W1),
                  onClose: () => y(!1),
                  onOpen: () => y(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !Z,
                  optionClassName: f.selectOption,
                  renderOptionLabel: (e) =>
                    (0, t.jsx)(x, {
                      ...e,
                      isDisabled: Z && !k.has(e.value) && k.size === o,
                      isOffset: O,
                    }),
                  renderOptionValue: (e) =>
                    Z
                      ? (0, t.jsx)(h, { options: e })
                      : (0, t.jsx)(v, { ...e[0] }),
                  ...U,
                }),
                T
                  ? (0, t.jsx)("div", {
                      className: f.__invalid_loading,
                      children: (0, t.jsx)(s.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != b
              ? (0, t.jsx)(c.st, { ...(0, c.c4)(b), className: f.error })
              : null,
          ],
        });
      }
    },
    413991: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      }),
        l(47120);
      var t = l(200651),
        i = l(192379),
        r = l(481060),
        a = l(911969),
        s = l(970184),
        o = l(293979),
        u = l(350874);
      function c(e) {
        let n;
        let {
            type: l,
            style: c,
            label: d,
            placeholder: m,
            minLength: p,
            maxLength: f,
            required: x,
            value: v,
          } = e,
          [h, C] = i.useState(null != v ? v : ""),
          {
            state: g,
            executeStateUpdate: j,
            error: S,
          } = (0, s.Ee)(e, null != v ? { type: l, value: v } : void 0),
          I = (0, o.hz)(e.id);
        i.useEffect(() => {
          (null == g ? void 0 : g.type) === l && C(g.value);
        }, [l, g]);
        let N = {
          name: d,
          value: h,
          placeholder: m,
          minLength: p,
          maxLength: f,
          required: x,
          onChange: (e) => {
            C(e), j({ type: l, value: e });
          },
          autoFocus: I,
        };
        switch (c) {
          case a.FO.SMALL:
            n = (0, t.jsx)(r.TextInput, { ...N });
            break;
          case a.FO.PARAGRAPH:
            n = (0, t.jsx)(r.TextArea, { autosize: !0, ...N });
        }
        return (0, t.jsx)(r.FormItem, {
          title: d,
          required: x,
          className: u.formItem,
          error: S,
          children: n,
        });
      }
    },
    12067: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return v;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(442837),
        r = l(768494),
        a = l(169525),
        s = l(499376),
        o = l(611170),
        u = l(128854),
        c = l(884182),
        d = l(94396),
        m = l(592125),
        p = l(52824),
        f = l(970184),
        x = l(981631);
      function v(e) {
        let { message: n } = (0, f.CJ)(),
          l = (0, i.e7)([m.Z], () =>
            m.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: v,
            shouldRedactExplicitContent: h,
            gifAutoPlay: C,
            getGifFavButton: g,
            getOnMediaItemContextMenu: j,
          } = (0, u.c)();
        if (null == n || null == l) return null;
        let S = e.items
            .map((e) => ({
              ...(0, r.y_)(e.media),
              original: e.media.url,
              srcIsAnimated: e.media.srcIsAnimated,
            }))
            .filter((e) => "INVALID" !== e.type),
          I = {
            source: "Media Mosaic",
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type,
          },
          N =
            S.length > 1
              ? (0, d._)(
                  S,
                  { shouldHideMediaOptions: v, shouldRedactExplicitContent: h },
                  I,
                )
              : {};
        function E(e, n) {
          let l = e.originalItem;
          return (0, a.lK)(l.media, n, l.spoiler);
        }
        let b = e.items.map((e) => {
          let l = e.media,
            t = null == j ? void 0 : j(l),
            i = {
              message: n,
              item: {
                uniqueId: l.proxyUrl,
                originalItem: e,
                type: (0, s.pU)(l, !0),
                downloadUrl: l.url,
                height: l.height,
                width: l.width,
                spoiler: e.spoiler,
                contentType: l.contentType,
                srcIsAnimated: l.srcIsAnimated,
              },
              onContextMenu: t,
              autoPlayGif: C,
              getObscureReason: E,
              renderImageComponent: o.a,
              renderVideoComponent: o.r,
              renderAudioComponent: x.dG4,
              renderPlaintextFilePreview: x.dG4,
              renderGenericFileComponent: x.dG4,
              renderMosaicItemFooter: x.dG4,
              gifFavoriteButton: g(l),
              onPlay: (e, n, l) => {},
              canRemoveItem: !1,
              onRemoveItem: x.dG4,
            },
            r = (0, p.q)({ proxyURL: l.proxyUrl, url: l.url });
          return r in N && (i.onClick = N[r]), i;
        });
        return (0, t.jsx)("div", { children: (0, t.jsx)(c.Z, { items: b }) });
      }
    },
    676149: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(911969),
        s = l(908e3);
      function o(e) {
        let { divider: n, spacing: l } = e;
        return (0, t.jsx)("div", {
          className: r()({
            [s.spacingLarge]: l === a.US.LARGE,
            [s.divider]: n,
          }),
        });
      }
    },
    861529: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(120356),
        a = l.n(r),
        s = l(454585),
        o = l(937889),
        u = l(970184),
        c = l(870456),
        d = l(662762),
        m = l(554034);
      function p(e) {
        let { content: n, className: l } = e,
          r = (function (e) {
            let n = (0, u.CJ)();
            return (0, i.useMemo)(() => {
              let l;
              return null === n
                ? null
                : ((l =
                    null != n.message
                      ? (0, o.rs)(n.message, c.u)
                      : (0, o.p6)({
                          channelId: n.channelId,
                          renderOptions: c.u,
                        })),
                  s.Z.parse(e, !0, l));
            }, [e, n]);
          })(n);
        return (0, t.jsx)("div", {
          className: a()([l, m.markup, d.markdownContainer]),
          children: r,
        });
      }
    },
    770009: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(512722),
        r = l.n(i),
        a = l(442837),
        s = l(52396),
        o = l(592125),
        u = l(970184),
        c = l(151200),
        d = l(96513);
      function m(e) {
        let { contentInventoryEntry: n, channel: l } = e,
          { parsedEntry: i } = (0, s.B)();
        return (0, t.jsx)(c.Z, { ...i, entry: n, channel: l });
      }
      function p(e) {
        let n = (0, u.CJ)();
        r()(
          null != n,
          "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
        );
        let { channelId: l } = n,
          i = (0, a.e7)([o.Z], () => o.Z.getChannel(l));
        return (
          r()(null != i, "channel must be defined"),
          (0, t.jsx)(s.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: i,
            errorFallback: null,
            children: (0, t.jsx)(m, { ...e, channel: i }),
          })
        );
      }
    },
    151200: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return g;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(481060),
        s = l(328731),
        o = l(442550),
        u = l(435439),
        c = l(206295),
        d = l(297781),
        m = l(313201),
        p = l(231338),
        f = l(388032),
        x = l(790246),
        v = l(615934);
      function h(e) {
        let {
            className: n,
            clickableClassName: l,
            clickable: i,
            children: s,
          } = e,
          o = (0, m.Dt)();
        if (null != i && "href" in i) {
          let { ariaDescription: e, href: u } = i;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(a.HiddenVisually, { id: o, children: e }),
              (0, t.jsx)(a.Anchor, {
                className: r()(n, l),
                href: u,
                "aria-describedby": o,
                children: s,
              }),
            ],
          });
        }
        let { onClick: u, ariaDescription: c } = null != i ? i : {};
        return (0, t.jsxs)(a.BlockInteractionsContext.Provider, {
          value: null == u,
          children: [
            null != u &&
              null != c &&
              (0, t.jsx)(a.HiddenVisually, { id: o, children: c }),
            (0, t.jsx)(a.Clickable, {
              onClick: u,
              "aria-describedby": null == u ? void 0 : o,
              className: r()(n, null != u && l),
              children: s,
            }),
          ],
        });
      }
      function C(e) {
        let { clickable: n, ...l } = e;
        return (0, t.jsx)(h, {
          ...l,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: v.clickable,
        });
      }
      function g(e) {
        let {
            entry: n,
            channel: l,
            title: i,
            subtitle: v,
            thumbnailUrl: g,
            titleClickable: j,
            subtitleClickable: S,
            thumbnailClickable: I,
            providerIconProps: N,
            style: E = {},
          } = e,
          b = (0, m.Dt)(),
          { primaryColor: Z, secondaryColor: T } = (0, c.Z)(g);
        return (
          null != g &&
            (E.background = "linear-gradient(45deg, "
              .concat(Z, ", ")
              .concat(T, ")")),
          (0, t.jsx)(a.ThemeProvider, {
            theme: p.BR.DARK,
            children: (e) =>
              (0, t.jsxs)("figure", {
                "aria-roledescription": f.intl.string(f.t.zFfUhI),
                "aria-labelledby": b,
                "data-disable-adaptive-theme": !0,
                className: r()(x.container, e),
                style: E,
                children: [
                  (0, t.jsx)(h, {
                    className: x.thumbnailContainer,
                    clickableClassName: x.clickable,
                    clickable: I,
                    children: (0, t.jsx)(o.f, {
                      src: g,
                      constrain: "width",
                      size: 64,
                      "aria-hidden": !0,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: x.infoContainer,
                    children: [
                      (0, t.jsx)(s.Z, {
                        channel: l,
                        entry: n,
                        className: x.users,
                      }),
                      (0, t.jsx)(a.Spacer, { size: 2 }),
                      (0, t.jsx)(C, {
                        clickable: j,
                        className: x.clickableText,
                        children: (0, t.jsx)(a.Heading, {
                          id: b,
                          variant: "heading-md/medium",
                          lineClamp: 1,
                          className: r()(x.textPrimary, x.truncatedText),
                          scaleFontToUserSetting: !0,
                          children: i,
                        }),
                      }),
                      null != v
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(a.Spacer, { size: 2 }),
                              (0, t.jsx)(C, {
                                clickable: S,
                                className: x.clickableText,
                                children: (0, t.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  className: r()(
                                    x.textSecondary,
                                    x.truncatedText,
                                  ),
                                  lineClamp: 1,
                                  scaleFontToUserSetting: !0,
                                  children: v,
                                }),
                              }),
                            ],
                          })
                        : null,
                      (0, t.jsx)(d.PZ, {
                        className: x.badges,
                        entry: n,
                        location: d.Gt.EMBED,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: x.headerIcons,
                    children: null != N ? (0, t.jsx)(u.Z, { ...N }) : null,
                  }),
                ],
              }),
          })
        );
      }
    },
    889515: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(739754),
        r = l(970184),
        a = l(383720);
      function s(e) {
        let { components: n, renderComponents: l } = e,
          { message: s } = (0, r.CJ)();
        return null == n || 0 === n.length
          ? null
          : (0, t.jsxs)("div", {
              className: a.container,
              children: [
                (0, t.jsx)("div", { className: a.children, children: l(n) }),
                null != s
                  ? (0, t.jsx)(i.ZP, {
                      className: a.error,
                      message: s,
                      component: e,
                    })
                  : null,
              ],
            });
      }
    },
    611170: function (e, n, l) {
      l.d(n, {
        a: function () {
          return r;
        },
        r: function () {
          return a;
        },
      });
      var t = l(591759),
        i = l(524444);
      function r(e) {
        let n = e.item.originalItem.media;
        return (0, i.Yi)({
          ...e,
          alt: e.item.originalItem.description,
          src: n.proxyUrl,
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholderVersion,
          sourceMetadata: { message: e.message },
        });
      }
      function a(e) {
        let n = e.item.originalItem.media,
          l = t.Z.toURLSafe(n.proxyUrl);
        return null == l
          ? null
          : (l.searchParams.append("format", "webp"),
            (0, i.lV)({
              ...e,
              poster: l.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message },
            }));
      }
    },
    128854: function (e, n, l) {
      l.d(n, {
        F: function () {
          return s;
        },
        c: function () {
          return a;
        },
      }),
        l(411104);
      var t = l(200651),
        i = l(192379);
      let r = i.createContext(null);
      function a() {
        let e = i.useContext(r);
        if (null == e)
          throw Error(
            "Could not find context for useMessageAccessoriesComponentContext.",
          );
        return e;
      }
      function s(e) {
        let { children: n, ...l } = e;
        return (0, t.jsx)(r.Provider, { value: l, children: n });
      }
    },
    757746: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = l(442837),
        i = l(558381),
        r = l(551428);
      let a = (0, t.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
        useStateHook: t.e7,
      });
    },
    908841: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(325767);
      function r(e) {
        let {
          width: n = 20,
          height: l = 20,
          color: r = "currentColor",
          ...a
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, i.Z)(a),
          width: n,
          height: l,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: r,
          }),
        });
      }
    },
    512100: function (e, n, l) {
      l.d(n, {
        u: function () {
          return u;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(409794),
        r = l(777207),
        a = l(541822),
        s = l(330711),
        o = l(770561);
      function u(e) {
        let {
            benefits: n,
            description: l,
            imgSrc: u,
            title: c,
            tag: d,
            FallbackIcon: m,
          } = e,
          p =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, t.jsx)("div", {
          className: o.container,
          children: (0, t.jsx)(a.Z, {
            className: o.scroller,
            children: (0, t.jsxs)("div", {
              className: o.scrollContent,
              children: [
                (0, t.jsxs)("div", {
                  className: o.header,
                  children: [
                    (0, t.jsx)("div", {
                      className: o.headerBackground,
                      style: p,
                    }),
                    (0, t.jsx)("div", {
                      className: o.headerImage,
                      children:
                        null != u
                          ? (0, t.jsx)("img", { src: u.toString(), alt: "" })
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
                  className: o.content,
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.details,
                      children: [
                        null != d && (0, t.jsx)("div", { children: d }),
                        (0, t.jsx)(i.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: c,
                        }),
                        null != l &&
                          "" !== l &&
                          (0, t.jsx)(r.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: o.description,
                            children: l,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, t.jsxs)("div", {
                        className: o.benefits,
                        children: [
                          (0, t.jsx)(r.x, {
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
    752843: function (e, n, l) {
      l.d(n, {
        V: function () {
          return d;
        },
        Z: function () {
          return c;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(628028),
        r = l(220427),
        a = l(777207),
        s = l(692547),
        o = l(330711),
        u = l(350727);
      function c(e) {
        let { type: n } = e;
        return (0, t.jsx)(d, {
          icon:
            "user" === n
              ? (0, t.jsx)(r.t, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, t.jsx)(i.Q, {
                  size: "xxs",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(e) {
        let { icon: n, text: l } = e;
        return (0, t.jsxs)("div", {
          className: u.container,
          children: [
            n,
            (0, t.jsx)(a.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: l,
            }),
          ],
        });
      }
    },
    524846: function (e, n, l) {
      var t, i;
      l.d(n, {
        $: function () {
          return t;
        },
      }),
        ((i = t || (t = {})).USER = "user"),
        (i.ROLE = "role"),
        (i.CHANNEL = "channel");
    },
  },
]);
//# sourceMappingURL=a509530c057bbc4f3f87.js.map
