"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91304"],
  {
    886253: function (e, n, t) {
      t.d(n, {
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
        s = t(352057),
        c = t(572004),
        u = t(601911),
        d = t(504211),
        m = t(533159),
        f = t(981631),
        p = t(388032),
        h = t(775012),
        x = t(191046);
      function v(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: v,
            onClose: _,
            onHeaderTitleClick: C,
            children: g,
            footer: I,
          } = e,
          b = (0, s.h)({ location: "store_modal", autoTrackExposure: !1 }),
          j = (0, i.e7)(
            [o.Z, a.Z],
            () => {
              var e;
              return null !== (e = o.Z.getApplication(n)) && void 0 !== e
                ? e
                : a.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == j) return null;
        let S = (0, u.y)(j, 25),
          { termsOfServiceUrl: N, privacyPolicyUrl: E } = j;
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: x.modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              className: h.modalHeader,
              children: [
                (0, l.jsxs)(r.Clickable, {
                  className: h.modalTitle,
                  onClick: C,
                  children: [
                    null != S &&
                      (0, l.jsx)("img", {
                        src: S.href,
                        alt: "",
                        className: x.appIcon,
                      }),
                    (0, l.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: j.name,
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: _,
                  className: h.modalCloseBtn,
                }),
              ],
            }),
            g,
            (0, l.jsxs)(r.ModalFooter, {
              className: x.footer,
              children: [
                null != N || null != E
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children: (0, l.jsx)(m.Z, {
                        termsOfServiceUrl: N,
                        privacyPolicyUrl: E,
                      }),
                    })
                  : (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.intl.string(p.t["3ZY+0N"]),
                    }),
                (0, l.jsxs)("div", {
                  className: x.footerButtons,
                  children: [
                    c.wS &&
                      (0, l.jsx)(r.Button, {
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
                              b
                                ? f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                                    n,
                                    t,
                                  )
                                : f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                    n,
                                    t,
                                  ),
                            );
                          (0, c.JG)(e),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                p.intl.string(p.t["L/PwZW"]),
                                r.ToastType.SUCCESS,
                              ),
                            ),
                            (0, d.X)(n, d.B.DETAILS_MODAL, t);
                        },
                        children: (0, l.jsx)(r.LinkIcon, {
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
    147496: function (e, n, t) {
      t.r(n),
        t.d(n, {
          ItemDetailsModal: function () {
            return v;
          },
        });
      var l = t(200651);
      t(192379);
      var i = t(752843),
        r = t(442837),
        a = t(481060),
        o = t(55563),
        s = t(551428),
        c = t(73346),
        u = t(591759),
        d = t(110742),
        m = t(886253),
        f = t(680005),
        p = t(938337),
        h = t(981631),
        x = t(388032);
      function v(e) {
        var n, t, v, _;
        let {
            onClose: C,
            transitionState: g,
            skuId: I,
            appId: b,
            onHeaderTitleClick: j,
          } = e,
          S = (0, r.e7)([s.Z], () => s.Z.getForSKU(I), [I]),
          N = (0, r.e7)([o.Z], () => o.Z.get(I), [I]),
          E = (0, d.M)(I);
        if (null == N) return null;
        let T = null !== (t = N.name) && void 0 !== t ? t : "",
          y =
            null !==
              (v =
                null == S
                  ? void 0
                  : null === (n = S.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== v
              ? v
              : void 0,
          Z =
            (null == S ? void 0 : S.headerBackground) != null &&
            null !==
              (_ = u.Z.toURLSafe((0, c._W)(b, S.headerBackground, 256))) &&
            void 0 !== _
              ? _
              : void 0,
          k = N.type === h.epS.DURABLE && E,
          L =
            N.type === h.epS.DURABLE
              ? k
                ? x.intl.string(x.t.bm82mp)
                : x.intl.string(x.t["6gprwc"])
              : void 0,
          { price: R } = N;
        return null == R
          ? null
          : (0, l.jsx)(m.A, {
              appId: b,
              skuId: N.id,
              transitionState: g,
              onHeaderTitleClick: null != j ? j : C,
              onClose: C,
              footer: (0, l.jsx)(f.YG, { appId: b, sku: N }),
              children: (0, l.jsx)(p.i, {
                appId: b,
                skuId: N.id,
                title: T,
                description: y,
                imgSrc: Z,
                tag: null != L ? (0, l.jsx)(i.V, { text: L }) : void 0,
                FallbackIcon: a.TicketIcon,
              }),
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
      var l = t(200651),
        i = t(192379),
        r = t(269210),
        a = t(752843),
        o = t(481060),
        s = t(757746),
        c = t(930155),
        u = t(889989),
        d = t(263519),
        m = t(73346),
        f = t(591759),
        p = t(886253),
        h = t(680005),
        x = t(938337);
      function v(e) {
        var n, t;
        let {
            appId: v,
            subscriptionType: _,
            onClose: C,
            skuId: g,
            guildId: I,
            transitionState: b,
            onHeaderTitleClick: j,
          } = e,
          { data: S } = (0, c.H)(g),
          N = S[0],
          { data: E } = (0, s.Z)(g),
          T = i.useMemo(() => {
            var e;
            return (null == E ? void 0 : E.thumbnail) != null &&
              null !== (e = f.Z.toURLSafe((0, m._W)(v, E.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [v, null == E ? void 0 : E.thumbnail]),
          y = i.useMemo(() => {
            let e = null == E ? void 0 : E.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, u.n)(v, e.icon),
              }));
          }, [v, null == E ? void 0 : E.benefits]),
          { openModal: Z, subscriptionPurchaseButtonState: k } = (0, d.Z)({
            skuId: g,
            subscribeForGuild: null != I ? I : void 0,
          });
        return null == E
          ? null
          : (0, l.jsx)(p.A, {
              appId: v,
              skuId: g,
              transitionState: b,
              onHeaderTitleClick: null != j ? j : C,
              onClose: C,
              footer: (0, l.jsx)(h.pV, {
                onClick: Z,
                appId: v,
                subscriptionType: _,
                skuId: g,
                subscriptionPlan: N,
                state: k,
              }),
              children: (0, l.jsx)(x.i, {
                appId: v,
                skuId: g,
                benefits:
                  null != y
                    ? y.map((e) =>
                        (0, l.jsx)(
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
                  null !== (n = E.description) && void 0 !== n ? n : void 0,
                imgSrc: T,
                title:
                  null !== (t = null == N ? void 0 : N.name) && void 0 !== t
                    ? t
                    : E.summary,
                tag: (0, l.jsx)(a.Z, { type: _ }),
                FallbackIcon: o.BadgeIcon,
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
      var l = t(200651),
        i = t(192379),
        r = t(512100),
        a = t(906732),
        o = t(626135),
        s = t(981631);
      function c(e) {
        let { appId: n, skuId: t, ...c } = e,
          { analyticsLocations: u } = (0, a.ZP)();
        return (
          i.useEffect(() => {
            o.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: u,
            });
          }, [u, n, t]),
          (0, l.jsx)(r.u, { ...c })
        );
      }
    },
    744969: function (e, n, t) {
      t.d(n, {
        s: function () {
          return g;
        },
      }),
        t(789020);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(544891),
        o = t(481060),
        s = t(570140),
        c = t(171246),
        u = t(509545),
        d = t(55563),
        m = t(551428),
        f = t(74538),
        p = t(937615),
        h = t(147496),
        x = t(519896),
        v = t(981631),
        _ = t(388032);
      let C = (0, r.Kb)([d.Z, u.Z, m.Z], {
        queryId: (e) => (null != e ? ["premium-button", e] : null),
        get: (e) => {
          var n;
          if (null == e) return;
          let t = d.Z.get(e),
            l = null !== (n = u.Z.getForSKU(e)) && void 0 !== n ? n : [],
            i = m.Z.getForSKU(e),
            r = d.Z.getParentSKU(e);
          if (
            null != t &&
            null != i &&
            (null == t || t.type !== v.epS.SUBSCRIPTION || null != r)
          )
            return {
              parentSku: r,
              sku: t,
              storeListing: i,
              subscriptionPlans: l,
            };
        },
        load: async (e, n) => {
          if (null == n) return;
          let t = {
              url: v.ANM.STOREFRONT_PREMIUM_BUTTON(n),
              rejectWithError: !1,
            },
            { body: l } = await a.tn.get(t);
          s.Z.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: l.store_listings,
          }),
            null != l.subscription_plans &&
              s.Z.dispatch({
                type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                skuId: n,
                subscriptionPlans: l.subscription_plans,
              }),
            null != l.skus &&
              l.skus.forEach((e) => {
                s.Z.dispatch({ type: "SKU_FETCH_SUCCESS", sku: e });
              });
        },
        useStateHook: r.cj,
      });
      function g(e) {
        let { data: n } = C(e),
          t = null == n ? void 0 : n.parentSku,
          r = null == n ? void 0 : n.sku,
          a = null == n ? void 0 : n.storeListing,
          s = null == n ? void 0 : n.subscriptionPlans,
          u = i.useCallback(() => {
            if (
              (null == r ? void 0 : r.applicationId) == null ||
              (null == r ? void 0 : r.id) == null ||
              (null == r ? void 0 : r.flags) == null
            )
              return null;
            (0, o.openModal)((e) => {
              let { onClose: n, transitionState: t } = e;
              return (0, l.jsx)(x.SubscriptionDetailsModal, {
                appId: r.applicationId,
                subscriptionType: (0, c.KW)(r.flags) ? "user" : "guild",
                onClose: n,
                skuId: r.id,
                transitionState: t,
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
            (0, o.openModal)((e) => {
              let { onClose: n, transitionState: t } = e;
              return (0, l.jsx)(h.ItemDetailsModal, {
                appId: r.applicationId,
                skuId: r.id,
                onClose: n,
                transitionState: t,
              });
            });
          }, [r]);
        if (
          null != r &&
          null != a &&
          (null == r || r.type !== v.epS.SUBSCRIPTION || null != t)
        ) {
          if (null == e || (null != r && !r.available))
            return { disabled: !0, label: _.intl.string(_.t.CHa0vL) };
          if (r.type === v.epS.SUBSCRIPTION) {
            if (null == s || 0 === s.length)
              return { disabled: !0, label: _.intl.string(_.t.CHa0vL) };
            let e = s[0],
              n = (0, f.aS)(e.id);
            return {
              disabled: !1,
              label: _.intl.formatToPlainString(_.t["c6Q+Bw"], {
                skuName: r.name,
                price: (0, p.T4)(n.amount, n.currency),
              }),
              onClick: u,
            };
          }
          return null == r.price
            ? { disabled: !0, label: _.intl.string(_.t.CHa0vL) }
            : {
                disabled: !1,
                label: _.intl.formatToPlainString(_.t["c6Q+Bw"], {
                  skuName: r.name,
                  price: (0, p.T4)(r.price.amount, r.price.currency),
                }),
                onClick: d,
              };
        }
      }
    },
    256139: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651),
        i = t(120356),
        r = t.n(i),
        a = t(481060),
        o = t(40305);
      function s(e) {
        let { className: n, onClick: t, ...i } = e,
          s = (0, l.jsx)(a.Clickable, {
            ...i,
            className: r()(null != t && o.clickable, n),
            onClick: t,
          });
        return null == t ? (0, l.jsx)(a.BlockInteractions, { children: s }) : s;
      }
    },
    328731: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651),
        i = t(120356),
        r = t.n(i),
        a = t(481060),
        o = t(318374),
        s = t(5192),
        c = t(192918),
        u = t(256139),
        d = t(91907),
        m = t(866040),
        f = t(388032),
        p = t(719181);
      function h(e) {
        let { entry: n, channel: t, className: i } = e,
          {
            displayParticipants: h,
            participant1: x,
            participant2: v,
            numOtherParticipants: _,
            orderedParticipants: C,
          } = (0, c.Z)(n),
          g = [x, v];
        return (0, l.jsxs)("div", {
          className: r()(p.container, i),
          children: [
            h.length > 0
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(m.Z, {
                      participants: C,
                      channel: t,
                      children: (e) =>
                        (0, l.jsx)(a.Clickable, {
                          className: p.clickable,
                          ...e,
                          children: (0, l.jsx)(o.Z, {
                            maxUsers: 3,
                            users: h,
                            size: a.AvatarSizes.SIZE_20,
                            avatarClassName: p.stackedAvatar,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0,
                          }),
                        }),
                    }),
                    (0, l.jsx)(a.Spacer, { size: 6, horizontal: !0 }),
                  ],
                })
              : null,
            (0, l.jsx)(a.Heading, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              className: r()(p.truncatedText, p.usersHeader),
              scaleFontToUserSetting: !0,
              children: f.intl.format(f.t.rH95Gh, {
                user0: s.ZP.getName(t.guild_id, t.id, g[0]),
                user1: s.ZP.getName(t.guild_id, t.id, g[1]),
                countOthers: _,
                name0Hook: (e, n) =>
                  (0, l.jsx)(d.Z, { text: e, user: g[0], channel: t }, n),
                name1Hook: (e, n) =>
                  (0, l.jsx)(d.Z, { text: e, user: g[1], channel: t }, n),
                countOthersHook: (e, n) =>
                  (0, l.jsx)(
                    m.Z,
                    {
                      participants: C,
                      channel: t,
                      children: (n) =>
                        (0, l.jsx)(u.Z, {
                          ...n,
                          tag: "span",
                          children: (0, l.jsx)(a.Text, {
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
    91907: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(793030),
        a = t(256139),
        o = t(866040);
      function s(e) {
        let {
            user: n,
            text: t,
            channel: s,
            textClassName: c,
            onPopoutClosed: u,
          } = e,
          d = (0, i.useMemo)(() => [n], [n]);
        return (0, l.jsx)(o.Z, {
          participants: d,
          channel: s,
          onPopoutClosed: u,
          children: (e) =>
            (0, l.jsx)(a.Z, {
              ...e,
              tag: "span",
              children: (0, l.jsx)(r.xv, {
                className: c,
                variant: "text-sm/semibold",
                color: "text-primary",
                lineClamp: 1,
                scaleFontToUserSetting: !0,
                children: t,
              }),
            }),
        });
      }
    },
    866040: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(411104);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        o = t(239091),
        s = t(751688),
        c = t(184301),
        u = t(347475),
        d = t(210887),
        m = t(5192),
        f = t(846921);
      function p(e) {
        let { participants: n, channel: i } = e;
        return (0, l.jsx)(a.Scroller, {
          className: f.popout,
          children: n.map((e) =>
            (0, l.jsx)(
              s.Z,
              {
                guildId: null == i ? void 0 : i.guild_id,
                user: e,
                nick: m.ZP.getNickname(
                  null == i ? void 0 : i.guild_id,
                  null == i ? void 0 : i.id,
                  e,
                ),
                onContextMenu: (n) => {
                  (0, o.jW)(n, async () => {
                    let { default: n } = await Promise.all([
                      t.e("79695"),
                      t.e("69220"),
                      t.e("44378"),
                    ]).then(t.bind(t, 881351));
                    return (t) => (0, l.jsx)(n, { ...t, user: e });
                  });
                },
              },
              e.id,
            ),
          ),
        });
      }
      function h(e) {
        let { children: n, participants: t, channel: o, onPopoutClosed: s } = e,
          m = (0, r.e7)([d.Z], () => d.Z.theme),
          f = 1 === t.length ? t[0] : null,
          h = (0, i.useCallback)(
            (e) => {
              if (null != f)
                return (0, l.jsx)(u.Z, {
                  ...e,
                  closePopout: () => {
                    e.closePopout(), null == s || s();
                  },
                  userId: f.id,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: null == o ? void 0 : o.id,
                });
              if (null != t)
                return (0, l.jsx)(p, { participants: t, channel: o });
              throw Error("One of participant or participants is required");
            },
            [o, s, t, f],
          );
        return (0, l.jsx)(a.ThemeContextProvider, {
          theme: m,
          children: (0, l.jsx)(a.Popout, {
            renderPopout: h,
            preload: () =>
              null != f
                ? (0, c.Z)(f, {
                    guildId: null == o ? void 0 : o.guild_id,
                    channelId: null == o ? void 0 : o.id,
                  })
                : Promise.resolve(),
            children: n,
          }),
        });
      }
    },
    435439: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(200651),
        i = t(481060),
        r = t(374129),
        a = t(639351),
        o = t(908841),
        s = t(410441),
        c = t(206583),
        u = t(388032);
      let d = {
          [c.kG.SPOTIFY]: o.Z,
          [c.kG.CRUNCHYROLL]: i.CrunchyrollNeutralIcon,
          [c.kG.XBOX]: a.Z,
          [c.kG.PLAYSTATION]: r.Z,
        },
        m = {
          [c.kG.SPOTIFY]: () => u.intl.string(u.t["0ZB/XF"]),
          [c.kG.CRUNCHYROLL]: () => u.intl.string(u.t.jdJYX1),
          [c.kG.XBOX]: () => u.intl.string(u.t["Nfvo7+"]),
          [c.kG.PLAYSTATION]: () => u.intl.string(u.t.fFl4jo),
        };
      function f(e) {
        var n;
        let { type: t, "aria-label": i, ...r } = e,
          a = d[t];
        if (null == a) return null;
        let o =
          null != i
            ? i
            : null === (n = m[t]) || void 0 === n
              ? void 0
              : n.call(m);
        return (0, l.jsx)(s.Z, { Icon: a, ...r, "aria-label": o });
      }
    },
    96513: function (e, n, t) {
      var l, i;
      t.d(n, {
        _: function () {
          return l;
        },
      }),
        ((i = l || (l = {}))[(i.EMBED = 1)] = "EMBED");
    },
    52396: function (e, n, t) {
      t.d(n, {
        B: function () {
          return x;
        },
        r: function () {
          return _;
        },
      }),
        t(411104);
      var l = t(200651),
        i = t(192379),
        r = t(512722),
        a = t.n(r),
        o = t(876215),
        s = t(775379),
        c = t(879046),
        u = t(214597),
        d = t(498187),
        m = t(482417),
        f = t(301419),
        p = t(397035);
      let h = i.createContext(void 0);
      function x() {
        let e = i.useContext(h);
        return (
          a()(
            null != e,
            "useEntryDataContext must be used within a EntryDataContextProvider",
          ),
          e
        );
      }
      function v(e) {
        let { entry: n, ...t } = e,
          i = {
            baseEntryData: (0, u.Z)({ entry: n, channel: t.channel }),
            ...t,
          };
        switch (n.content_type) {
          case o.s.TOP_ARTIST:
            return (0, l.jsx)(g, { entry: n, ...i });
          case o.s.TOP_GAME:
            return (0, l.jsx)(I, { entry: n, ...i });
          case o.s.PLAYED_GAME:
            return (0, l.jsx)(b, { entry: n, ...i });
          case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(j, { entry: n, ...i });
          case o.s.LISTENED_SESSION:
            return (0, l.jsx)(S, { entry: n, ...i });
          case o.s.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(C, { entry: n, ...i });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function _(e) {
        let { errorFallback: n, ...t } = e;
        return (0, l.jsx)(s.S, {
          fallback: n,
          children: (0, l.jsx)(v, { ...t }),
        });
      }
      function C(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, c.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function g(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, f.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function I(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, d.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function b(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, d.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function j(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, p.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function S(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, m.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
    },
    775379: function (e, n, t) {
      t.d(n, {
        S: function () {
          return i;
        },
      }),
        t(47120);
      var l = t(192379);
      class i extends l.PureComponent {
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
          var n, t, l;
          super(...e),
            (n = this),
            (l = { error: null }),
            (t = "state") in n
              ? Object.defineProperty(n, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[t] = l);
        }
      }
    },
    879046: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(499254),
        i = t(827498),
        r = t(835473),
        a = t(541716),
        o = t(561308),
        s = t(701488),
        c = t(388032);
      function u(e) {
        let { entry: n } = e,
          t = (0, r.q)(n.extra.application_id),
          u = null == t ? void 0 : t.getIconURL(s.Si.LARGE),
          d = n.extra.activity_name,
          m = (0, o.Jg)(n) ? c.t.vPg1JS : c.t.rPqqtr,
          f = {
            onClick: () => {
              l.__(i._b.TEXT, a.I.NORMAL, {
                applicationId: n.extra.application_id,
              });
            },
            ariaDescription: c.intl.formatToPlainString(c.t.NTHttL, {
              title: d,
            }),
          };
        return {
          thumbnailUrl: u,
          title: d,
          titleClickable: f,
          thumbnailClickable: f,
          userDescription: m,
        };
      }
    },
    214597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(192379),
        i = t(902704),
        r = t(232567),
        a = t(720202),
        o = t(594174);
      function s(e) {
        let { entry: n, channel: t } = e,
          s = l.useRef([]);
        return (
          l.useEffect(() => {
            if (!(0, i.E)(s.current, n.participants))
              (s.current = n.participants),
                n.participants
                  .filter((e) => null == o.default.getUser(e))
                  .forEach((e) => {
                    null == t.guild_id
                      ? (0, r.PR)(e)
                      : a.Z.requestMember(t.guild_id, e);
                  });
          }, [n, t.guild_id]),
          {}
        );
      }
    },
    498187: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(876215),
        i = t(758713),
        r = t(835473),
        a = t(810568),
        o = t(168524),
        s = t(561308),
        c = t(206583),
        u = t(96513),
        d = t(701488),
        m = t(388032);
      let f = { [i.z.XBOX]: c.kG.XBOX, [i.z.PLAYSTATION]: c.kG.PLAYSTATION },
        p = { [u._.EMBED]: a.m1.Embed };
      function h(e) {
        let n,
          t,
          { entry: i, location: a, baseEntryData: c } = e,
          u = (0, r.q)(i.extra.application_id),
          h = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
          x = i.extra.game_name;
        if (null != i.extra.platform) {
          let e = f[i.extra.platform];
          null != e && (n = { type: e });
        }
        t =
          i.content_type === l.s.PLAYED_GAME
            ? (0, s.kr)(i) && !(0, s.n2)(i)
              ? m.t.vPg1JS
              : m.t.rPqqtr
            : m.t.rPqqtr;
        let v = p[a],
          _ = {
            onClick: (0, o.Z)({
              location: v,
              applicationId: i.extra.application_id,
              source: v,
              trackEntryPointImpression: !0,
              sourceUserId: i.author_id,
            }),
            ariaDescription: m.intl.formatToPlainString(m.t["9sZWVl"], {
              gameName: x,
            }),
          };
        return {
          ...c,
          thumbnailUrl: h,
          title: x,
          titleClickable: _,
          thumbnailClickable: _,
          userDescription: t,
          providerIconProps: n,
        };
      }
    },
    482417: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var l = t(423875),
        i = t(740605),
        r = t(206583),
        a = t(616922),
        o = t(388032);
      function s(e) {
        let n,
          { entry: t, baseEntryData: s } = e,
          c = t.extra.entries[0].media,
          u = c.artists[0],
          { title: d, provider: m, image_url: f } = c,
          p = u.name,
          h = {
            onClick: () => (0, i.o)(a.Hw.TRACK, c.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, {
              itemName: d,
            }),
          },
          x = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, u.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, {
              itemName: p,
            }),
          };
        return (
          m === l.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
          {
            ...s,
            title: d,
            subtitle: p,
            thumbnailUrl: f,
            titleClickable: h,
            subtitleClickable: x,
            thumbnailClickable: h,
            userDescription: o.t.CcVI1d,
            providerIconProps: n,
          }
        );
      }
    },
    301419: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(423875),
        i = t(740605),
        r = t(206583),
        a = t(616922),
        o = t(388032);
      function s(e) {
        let n,
          { entry: t, baseEntryData: s } = e,
          { provider: c, image_url: u } = t.extra.media,
          d = t.extra.artist.name,
          m = {
            onClick: () =>
              (0, i.o)(a.Hw.ALBUM, t.extra.media.external_parent_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, {
              itemName: t.extra.media.parent_title,
            }),
          },
          f = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, t.extra.artist.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar6, {
              itemName: d,
            }),
          };
        return (
          c === l.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
          {
            ...s,
            title: d,
            thumbnailUrl: u,
            titleClickable: f,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: o.t.CcVI1d,
            providerIconProps: n,
          }
        );
      }
    },
    397035: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var l = t(192379),
        i = t(835473),
        r = t(81063),
        a = t(591759),
        o = t(561308),
        s = t(206583),
        c = t(701488),
        u = t(388032);
      function d(e) {
        let n,
          { entry: t, baseEntryData: d } = e,
          m = (0, i.q)(t.extra.application_id),
          f = null == m ? void 0 : m.getIconURL(128),
          p = (0, r.getAssetImage)(
            t.extra.application_id,
            t.extra.media_assets_large_image,
            [c.Si.LARGE, c.Si.LARGE],
          ),
          h = t.extra.media_title,
          x = t.extra.media_subtitle,
          v = (0, o.Jg)(t) ? u.t["LH+Z39"] : u.t.YuKgmp,
          _ = { type: s.kG.CRUNCHYROLL },
          C = l.useMemo(() => {
            if (null == t.extra.url) return;
            let e = a.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [t.extra.url]);
        return (
          null != C &&
            (n = {
              href: a.Z.format(C),
              ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3t, {
                title: h,
              }),
            }),
          {
            ...d,
            thumbnailUrl: null != p ? p : f,
            title: h,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: x,
            userDescription: v,
            providerIconProps: _,
          }
        );
      }
    },
    410441: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(330997);
      function a(e) {
        let { onClick: n, Icon: t, "aria-label": a } = e,
          o = (0, i.useToken)(
            i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          s = (0, l.jsx)(t, {
            color: o.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, l.jsx)("div", {
              className: r.container,
              "aria-label": a,
              children: s,
            })
          : (0, l.jsx)(i.Tooltip, {
              text: a,
              children: (e) =>
                (0, l.jsx)(i.Clickable, {
                  className: r.container,
                  ...e,
                  onClick: n,
                  children: s,
                }),
            });
      }
    },
    870456: function (e, n, t) {
      t.d(n, {
        u: function () {
          return l;
        },
      });
      let l = {
        allowList: !0,
        allowHeading: !0,
        allowLinks: !0,
        previewLinkTarget: !0,
      };
    },
    811654: function (e, n, t) {
      t.d(n, {
        HI: function () {
          return f;
        },
        _H: function () {
          return p;
        },
        af: function () {
          return h;
        },
        tx: function () {
          return x;
        },
      }),
        t(47120);
      var l = t(524846),
        i = t(911969),
        r = t(592125),
        a = t(271383),
        o = t(430824),
        s = t(594174),
        c = t(483360),
        u = t(823379),
        d = t(5192),
        m = t(280501);
      t(892902);
      let f = 1e3;
      function p(e, n, t) {
        let l = r.Z.getChannel(t);
        if (null == l) return [];
        let a = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
          o = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
          { users: s, roles: u } = c.ZP.queryMentionResults({
            query: n,
            channel: l,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: a,
            canMentionRoles: o,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
          }),
          f = s.map((e) => {
            var n;
            let i = d.ZP.getNickname(l.getGuildId(), t, e.user);
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
          ...f,
          ...u.map((e) => ({ type: m.tM.ROLE, value: e.id, label: e.name })),
        ];
      }
      function h(e, n, t) {
        let l = r.Z.getChannel(n);
        return null == l
          ? []
          : c.ZP.queryApplicationCommandChannelResults({
              query: e,
              channel: l,
              channelTypes: t,
              limit: 15,
            }).channels.map((e) => ({
              type: m.tM.CHANNEL,
              value: e.id,
              label: e.name,
            }));
      }
      function x(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let i = o.Z.getGuild(n);
        return e
          .map((e) => {
            switch (e.type) {
              case l.$.USER: {
                var n;
                let t = s.default.getUser(e.id);
                if (null == t) return null;
                let l = null != i ? a.ZP.getNick(i.id, t.id) : void 0;
                return {
                  type: m.tM.USER,
                  value: t.id,
                  label:
                    null !== (n = null != l ? l : t.globalName) && void 0 !== n
                      ? n
                      : t.username,
                };
              }
              case l.$.ROLE: {
                if (null == i) return null;
                let n = o.Z.getRole(i.id, e.id);
                if (null == n) return null;
                return { type: m.tM.ROLE, value: n.id, label: n.name };
              }
              case l.$.CHANNEL: {
                if (null == i) return null;
                let n = r.Z.getChannel(e.id);
                if (
                  null == n ||
                  n.guild_id !== i.id ||
                  (t.length > 0 && !t.includes(n.type))
                )
                  return null;
                return { type: m.tM.CHANNEL, value: n.id, label: n.name };
              }
            }
          })
          .filter(u.lm);
      }
    },
    954654: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return g;
        },
        xX: function () {
          return C;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(911969),
        o = t(970184),
        s = t(987106),
        c = t(927057),
        u = t(574597),
        d = t(378975),
        m = t(732586),
        f = t(12067),
        p = t(676149),
        h = t(861529),
        x = t(770009),
        v = t(889515),
        _ = t(382396);
      function C(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case a.re.ACTION_ROW:
                return (0, l.jsx)(v.Z, { ...e, renderComponents: C }, n);
              case a.re.BUTTON:
                return (0, l.jsx)(s.Z, { ...e }, n);
              case a.re.STRING_SELECT:
                return (0, l.jsx)(d.Z, { ...e }, n);
              case a.re.CHANNEL_SELECT:
                return (0, l.jsx)(c.Z, { ...e }, n);
              case a.re.USER_SELECT:
              case a.re.ROLE_SELECT:
              case a.re.MENTIONABLE_SELECT:
                return (0, l.jsx)(u.Z, { ...e }, n);
              case a.re.TEXT_INPUT:
                return (0, l.jsx)(m.Z, { ...e }, n);
              case a.re.TEXT_DISPLAY:
                return (0, l.jsx)(h.Z, { ...e }, n);
              case a.re.MEDIA_GALLERY:
                return (0, l.jsx)(f.Z, { ...e }, n);
              case a.re.SEPARATOR:
                return (0, l.jsx)(p.Z, { ...e }, n);
              case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, l.jsx)(x.Z, { ...e }, n);
            }
          })(e, n.toString()),
        );
      }
      function g(e) {
        let { message: n } = e,
          { components: t } = n;
        return 0 === t.length
          ? null
          : (0, l.jsx)("div", {
              className: r()([
                _.container,
                { [_.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, l.jsx)(o.Il, { message: n, children: C(t) }),
            });
      }
    },
    987106: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(392711),
        o = t(481060),
        s = t(239091),
        c = t(596454),
        u = t(911969),
        d = t(744969),
        m = t(572004),
        f = t(49012),
        p = t(970184),
        h = t(280501),
        x = t(388032),
        v = t(912817);
      function _(e) {
        let { url: n, onSelect: t } = e;
        return m.wS && null != n
          ? (0, l.jsx)(o.Menu, {
              navId: "component-button",
              onClose: s.Zy,
              "aria-label": x.intl.string(x.t.tvTXy8),
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                children: (0, l.jsx)(o.MenuItem, {
                  id: "copy",
                  label: x.intl.string(x.t.uHhnfX),
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function C(e) {
        let n;
        let { label: t, style: i, disabled: m, emoji: x, url: C, skuId: g } = e,
          {
            executeStateUpdate: I,
            visualState: b,
            isDisabled: j,
          } = (0, p.Ee)(e),
          S = (0, d.s)(g),
          N = null != g && i === u.ZJ.PREMIUM,
          E = N && (null == S ? void 0 : S.disabled),
          T = N ? (null == S ? void 0 : S.label) : t,
          y = null != x,
          Z = null != T && T.length > 0,
          k = i === u.ZJ.LINK && null != C && C.length > 0,
          L = b === h.gH.LOADING || (N && null == S);
        return (
          (n = k
            ? () => {
                (0, f.q)({ href: null != C ? C : "", shouldConfirm: !0 });
              }
            : N
              ? null != S && !1 === S.disabled
                ? S.onClick
                : a.noop
              : () => I()),
          (0, l.jsxs)(o.Button, {
            color: (function (e) {
              switch (e) {
                case u.ZJ.PRIMARY:
                case u.ZJ.PREMIUM:
                  return o.Button.Colors.BRAND;
                case u.ZJ.SUCCESS:
                  return o.Button.Colors.GREEN;
                case u.ZJ.DESTRUCTIVE:
                  return o.Button.Colors.RED;
                default:
                  return o.Button.Colors.PRIMARY;
              }
            })(i),
            size: o.Button.Sizes.SMALL,
            disabled: m || b === h.gH.DISABLED || j || E,
            onClick: n,
            onContextMenu: (e) => {
              k && (0, s.vq)(e, (e) => (0, l.jsx)(_, { ...e, url: C }));
            },
            role: k ? "link" : "button",
            children: [
              (0, l.jsxs)("div", {
                className: r()(v.content, { [v.hidden]: L, [v.premium]: N }),
                "aria-hidden": L,
                children: [
                  N
                    ? (0, l.jsx)("div", {
                        className: v.shopIcon,
                        children: (0, l.jsx)(o.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  y
                    ? (0, l.jsx)(c.Z, {
                        className: r()({ [v.textEmoji]: Z }),
                        src: x.src,
                        emojiId: x.id,
                        emojiName: x.name,
                        animated: x.animated,
                      })
                    : null,
                  Z
                    ? (0, l.jsx)("div", { className: v.label, children: T })
                    : null,
                  k
                    ? (0, l.jsx)(o.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.launchIcon,
                      })
                    : null,
                ],
              }),
              L
                ? (0, l.jsx)("div", {
                    className: v.loading,
                    children: (0, l.jsx)(o.Dots, {
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
    927057: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(471445),
        o = t(592125),
        s = t(430824),
        c = t(970184),
        u = t(811654),
        d = t(344991),
        m = t(981631),
        f = t(688860);
      function p(e) {
        var n;
        let { channelTypes: t } = e,
          p = (0, c.CJ)(),
          h =
            null == p
              ? void 0
              : null === (n = p.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          x = o.Z.getChannel(h),
          v = s.Z.getGuild(null == x ? void 0 : x.getGuildId()),
          _ = i.useMemo(
            () => (0, u.tx)(e.defaultValues, null == v ? void 0 : v.id, t),
            [e.defaultValues, v, t],
          );
        return (0, l.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, u.af)(e, h, t),
          renderIcon: (e, n) => {
            let t = o.Z.getChannel(null == e ? void 0 : e.value);
            if (null == t) return null;
            let i =
              t.type === m.d4z.GUILD_CATEGORY ? r.FolderIcon : (0, a.KS)(t);
            return null != i
              ? (0, l.jsx)(i, {
                  size: "custom",
                  color: "currentColor",
                  width: n,
                  height: n,
                })
              : null;
          },
          renderOptionLabel: (e) =>
            (0, l.jsx)("span", { className: f.label, children: e.label }),
          defaultValues: _,
        });
      }
    },
    574597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(866442),
        a = t(481060),
        o = t(129861),
        s = t(91218),
        c = t(829883),
        u = t(518738),
        d = t(14263),
        m = t(592125),
        f = t(430824),
        p = t(158776),
        h = t(594174),
        x = t(970184),
        v = t(280501),
        _ = t(811654),
        C = t(344991),
        g = t(981631),
        I = t(688860);
      function b(e) {
        var n;
        let t = (0, x.CJ)(),
          b =
            null == t
              ? void 0
              : null === (n = t.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          j = m.Z.getChannel(b),
          S = f.Z.getGuild(null == j ? void 0 : j.getGuildId()),
          N = (0, d.Z)(null == S ? void 0 : S.id, _.HI),
          E = i.useMemo(
            () => (0, _.tx)(e.defaultValues, null == S ? void 0 : S.id),
            [e.defaultValues, S],
          );
        return (0, l.jsx)(C.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, _._H)(e.type, n, b),
          renderIcon: (e, n) => {
            let t = n === C.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === v.tM.USER) {
              let i = h.default.getUser(e.value);
              if (null == i) return;
              return (0, l.jsx)(a.Avatar, {
                size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                src: i.getAvatarURL(null == S ? void 0 : S.id, n),
                status: t ? null : p.Z.getStatus(i.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === v.tM.ROLE) {
              var i;
              let t = null != S ? f.Z.getRole(S.id, e.value) : void 0;
              if (null == t || null == S) return;
              let o = (0, c._b)(S, t) ? (0, u.Kz)(t, n) : null;
              return null != o
                ? (0, l.jsx)(s.Z, { ...o })
                : (0, l.jsx)(a.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (i = t.colorString) && void 0 !== i
                        ? i
                        : (0, r.Rf)(g.p6O),
                    height: n,
                    width: n,
                  });
            }
          },
          renderOptionLabel: (e) => {
            let n = null;
            if (e.type === v.tM.USER) {
              let t = h.default.getUser(e.value);
              null != t &&
                (n = (0, l.jsx)(o.Z, {
                  className: I.tag,
                  usernameClass: I.username,
                  discriminatorClass: I.discriminator,
                  botClass: I.bot,
                  user: t,
                  forceUsername: !0,
                }));
            } else if (e.type === v.tM.ROLE) {
              let t = null != S ? f.Z.getRole(S.id, e.value) : void 0,
                i = null == t ? null : null == N ? void 0 : N[t.id];
              null != i &&
                (n = (0, l.jsxs)("div", {
                  className: I.roleCountContainer,
                  children: [
                    (0, l.jsx)(a.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: I.roleCountIcon,
                    }),
                    (0, l.jsx)("span", {
                      className: I.roleCountText,
                      children: i,
                    }),
                  ],
                }));
            }
            return (0, l.jsxs)("span", {
              className: I.label,
              children: [
                (0, l.jsx)("span", {
                  className: I.labelText,
                  children: e.label,
                }),
                n,
              ],
            });
          },
          defaultValues: E,
        });
      }
    },
    344991: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return _;
        },
        tE: function () {
          return l;
        },
      }),
        t(47120);
      var l,
        i,
        r = t(200651),
        a = t(192379),
        o = t(120356),
        s = t.n(o),
        c = t(481060),
        u = t(911969),
        d = t(739754),
        m = t(970184),
        f = t(280501),
        p = t(388032),
        h = t(851796),
        x = t(503738);
      function v(e) {
        let { icon: n, iconSize: t } = e;
        return (0, r.jsx)("div", {
          className: h.iconContainer,
          style: { height: t, width: t },
          children: n,
        });
      }
      function _(e) {
        let {
            selectActionComponent: n,
            queryOptions: t,
            renderIcon: l,
            renderOptionLabel: i,
            defaultValues: o,
          } = e,
          { type: _, placeholder: C, maxValues: g, disabled: I } = n,
          [b, j] = a.useState(!1),
          [S, N] = a.useState(!1),
          [E, T] = a.useState(
            new Map(null == o ? void 0 : o.map((e) => [e.value, e])),
          ),
          [y, Z] = a.useState(new Set(E.keys())),
          [k, L] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
          [R, O] = a.useState(0);
        a.useEffect(() => {
          let e = (null != o ? o : []).map((e) => e.value);
          if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n)))
            return;
          L(e);
          let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
          T(n), Z(new Set(n.keys())), O((e) => e + 1);
        }, [o, k]);
        let {
            state: P,
            executeStateUpdate: M,
            visualState: A,
            isDisabled: B,
            error: w,
          } = (0, m.Ee)(n, {
            type: _,
            selectedOptions: Array.from(E.values()),
          }),
          U = A === f.gH.LOADING;
        a.useEffect(() => {
          if (
            (null == P ? void 0 : P.type) === u.re.USER_SELECT ||
            (null == P ? void 0 : P.type) === u.re.ROLE_SELECT ||
            (null == P ? void 0 : P.type) === u.re.MENTIONABLE_SELECT ||
            (null == P ? void 0 : P.type) === u.re.CHANNEL_SELECT
          ) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            T(e), Z(new Set(e.keys()));
          }
        }, [P]);
        let G = a.useCallback(() => {
          M({ type: _, selectedOptions: Array.from(E.values()) }) &&
            Z(new Set(E.keys()));
        }, [M, _, E]);
        a.useEffect(() => {
          if (
            !(
              b ||
              S ||
              (E.size === y.size && Array.from(E.keys()).every((e) => y.has(e)))
            )
          )
            G();
        }, [b, S, y, E, G]);
        let D = 0 === E.size || b,
          F = {
            isDisabled: I || B,
            wrapperClassName: h.select,
            options: (e) =>
              new Promise((n) => {
                n(t(e));
              }),
            placeholder: D
              ? null != C
                ? C
                : p.intl.string(p.t.Otr6W1)
              : void 0,
            onClose: () => j(!1),
            onOpen: () => j(!0),
            onBlur: () => N(!1),
            maxVisibleItems: 5,
            optionClassName: h.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
              let { inPill: t } = n,
                i = t ? 16 : 24,
                a = l(e, i);
              return null != a ? (0, r.jsx)(v, { icon: a, iconSize: i }) : null;
            },
            renderOptionLabel: i,
          };
        return (0, r.jsxs)(a.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: h.container,
              children: [
                g > 1
                  ? (0, r.jsx)(
                      c.SearchableSelect,
                      {
                        className: h.badges,
                        value: Array.from(E.values()),
                        onChange: (e) => {
                          !b && N(!0), T(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: s()({
                          [h.soloInput]: 0 === E.size,
                          [h.inlineInput]: E.size > 0,
                          [h.hidden]: !D,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...F,
                      },
                      R,
                    )
                  : (0, r.jsx)(
                      c.SearchableSelect,
                      {
                        className: (h.badges, h.singleSelect),
                        value: [...E.values()][0],
                        onChange: (e) =>
                          T(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...F,
                      },
                      R,
                    ),
                U
                  ? (0, r.jsx)("div", {
                      className: h.loading,
                      children: (0, r.jsx)(c.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != w
              ? (0, r.jsx)(d.st, { ...(0, d.c4)(w), className: x.error })
              : null,
          ],
        });
      }
      ((i = l || (l = {}))[(i.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"),
        (i[(i.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE");
    },
    378975: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        s = t(596454),
        c = t(911969),
        u = t(739754),
        d = t(970184),
        m = t(280501),
        f = t(388032),
        p = t(503738);
      function h(e) {
        let {
            emoji: n,
            label: t,
            description: i,
            isDisabled: r,
            isOffset: o,
          } = e,
          c = a()(p.labelContainer, {
            [p.disabled]: r,
            [p.offset]: null == n && o,
          });
        return (0, l.jsxs)("div", {
          className: p.option,
          children: [
            null != n
              ? (0, l.jsx)(s.Z, {
                  className: p.emoji,
                  emojiId: n.id,
                  emojiName: n.name,
                  animated: n.animated,
                })
              : null,
            (0, l.jsxs)("div", {
              className: c,
              children: [
                (0, l.jsx)("strong", { className: p.label, children: t }),
                null != i
                  ? (0, l.jsx)("span", {
                      className: p.description,
                      children: i,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function x(e) {
        let { emoji: n, label: t } = e;
        return (0, l.jsx)("div", {
          className: p.option,
          children: (0, l.jsxs)("div", {
            className: a()(p.value, p.singleValue),
            children: [
              null != n
                ? (0, l.jsx)(s.Z, {
                    className: p.emoji,
                    src: n.src,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: n.animated,
                  })
                : null,
              (0, l.jsx)("span", {
                className: p.singleValueLabel,
                children: t,
              }),
            ],
          }),
        });
      }
      function v(e) {
        let { options: n } = e;
        return (0, l.jsx)("div", {
          className: p.option,
          children: (0, l.jsx)("div", {
            className: p.value,
            children: n.map((e, n) =>
              (0, l.jsxs)(
                "div",
                {
                  className: p.optionTag,
                  children: [
                    null != e.emoji
                      ? (0, l.jsx)(s.Z, {
                          className: p.smallEmoji,
                          src: e.emoji.src,
                          emojiId: e.emoji.id,
                          emojiName: e.emoji.name,
                          animated: e.emoji.animated,
                        })
                      : null,
                    (0, l.jsx)(
                      "span",
                      { className: p.tag, children: e.label },
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
      function _(e) {
        let {
            type: n,
            options: t,
            id: r,
            placeholder: a,
            maxValues: s,
            minValues: _,
            disabled: C,
          } = e,
          g = i.useMemo(
            () => t.filter((e) => e.default).map((e) => e.value),
            [t],
          ),
          {
            state: I,
            executeStateUpdate: b,
            visualState: j,
            isDisabled: S,
            error: N,
          } = (0, d.Ee)(e, { type: n, values: g }),
          E = s > 1,
          T = j === m.gH.LOADING,
          [y, Z] = i.useState(!1),
          [k, L] = i.useState(
            () => new Set(t.filter((e) => e.default).map((e) => e.value)),
          ),
          [R, O] = i.useState(k),
          P = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
        i.useEffect(() => {
          if ((null == I ? void 0 : I.type) === c.re.STRING_SELECT) {
            let e = new Set(I.values);
            L(e), O(e);
          } else {
            let e = new Set(g);
            L(e), O(e);
          }
        }, [r, g, I]);
        let M = i.useCallback(() => {
          if (R !== k)
            b({ type: c.re.STRING_SELECT, values: Array.from(k) }) && O(k);
        }, [k, R, O, b]);
        i.useEffect(() => {
          if (
            !(y || (k.size === R.size && Array.from(R).every((e) => k.has(e))))
          )
            M();
        }, [y, k, R, M]);
        let A = o.singleSelect;
        E ? (A = o.multiSelect) : 0 === _ && (A = o.toggleSelect);
        let B = (0, o.useVariableSelect)({
          value: k,
          onChange: (e) => L(e),
          onSelectInteraction: A,
        });
        return (0, l.jsxs)(i.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: p.container,
              children: [
                (0, l.jsx)(o.Select, {
                  isDisabled: C || S,
                  className: p.select,
                  options: t.map((e) => ({
                    ...e,
                    disabled: E && !k.has(e.value) && k.size === s,
                  })),
                  placeholder: null != a ? a : f.intl.string(f.t.Otr6W1),
                  onClose: () => Z(!1),
                  onOpen: () => Z(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !E,
                  optionClassName: p.selectOption,
                  renderOptionLabel: (e) =>
                    (0, l.jsx)(h, {
                      ...e,
                      isDisabled: E && !k.has(e.value) && k.size === s,
                      isOffset: P,
                    }),
                  renderOptionValue: (e) =>
                    E
                      ? (0, l.jsx)(v, { options: e })
                      : (0, l.jsx)(x, { ...e[0] }),
                  ...B,
                }),
                T
                  ? (0, l.jsx)("div", {
                      className: p.__invalid_loading,
                      children: (0, l.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != N
              ? (0, l.jsx)(u.st, { ...(0, u.c4)(N), className: p.error })
              : null,
          ],
        });
      }
    },
    732586: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(911969),
        o = t(970184),
        s = t(293979),
        c = t(438978);
      function u(e) {
        let n;
        let {
            type: t,
            style: u,
            label: d,
            placeholder: m,
            minLength: f,
            maxLength: p,
            required: h,
            value: x,
          } = e,
          [v, _] = i.useState(null != x ? x : ""),
          {
            state: C,
            executeStateUpdate: g,
            error: I,
          } = (0, o.Ee)(e, null != x ? { type: t, value: x } : void 0),
          b = (0, s.hz)(e.id);
        i.useEffect(() => {
          (null == C ? void 0 : C.type) === t && _(C.value);
        }, [t, C]);
        let j = {
          name: d,
          value: v,
          placeholder: m,
          minLength: f,
          maxLength: p,
          required: h,
          onChange: (e) => {
            _(e), g({ type: t, value: e });
          },
          autoFocus: b,
        };
        switch (u) {
          case a.PT.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...j });
            break;
          case a.PT.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, { autosize: !0, ...j });
        }
        return (0, l.jsx)(r.FormItem, {
          title: d,
          required: h,
          className: c.formItem,
          error: I,
          children: n,
        });
      }
    },
    12067: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(768494),
        a = t(169525),
        o = t(499376),
        s = t(611170),
        c = t(128854),
        u = t(884182),
        d = t(94396),
        m = t(592125),
        f = t(52824),
        p = t(970184),
        h = t(981631);
      function x(e) {
        let { message: n } = (0, p.CJ)(),
          t = (0, i.e7)([m.Z], () =>
            m.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: x,
            shouldRedactExplicitContent: v,
            gifAutoPlay: _,
            getGifFavButton: C,
            getOnMediaItemContextMenu: g,
          } = (0, c.c)();
        if (null == n || null == t) return null;
        let I = e.items
            .map((e) => ({
              ...(0, r.y_)(e.media),
              original: e.media.url,
              srcIsAnimated: e.media.srcIsAnimated,
            }))
            .filter((e) => "INVALID" !== e.type),
          b = {
            source: "Media Mosaic",
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
          },
          j =
            I.length > 1
              ? (0, d._)(
                  I,
                  { shouldHideMediaOptions: x, shouldRedactExplicitContent: v },
                  b,
                )
              : {};
        function S(e, n) {
          let t = e.originalItem;
          return (0, a.lK)(t.media, n, t.spoiler);
        }
        let N = e.items.map((e, t) => {
          let l = e.media,
            i = null == g ? void 0 : g(l),
            r = {
              message: n,
              item: {
                uniqueId: "".concat(l.proxyUrl, "--").concat(t),
                originalItem: e,
                type: (0, o.pU)(l),
                downloadUrl: l.url,
                height: l.height,
                width: l.width,
                spoiler: e.spoiler,
                contentType: l.contentType,
                srcIsAnimated: l.srcIsAnimated,
              },
              onContextMenu: i,
              autoPlayGif: _,
              getObscureReason: S,
              renderImageComponent: s.aB,
              renderVideoComponent: s.rJ,
              renderVisualPlaceholderComponent: s.yF,
              renderAudioComponent: h.dG4,
              renderPlaintextFilePreview: h.dG4,
              renderGenericFileComponent: h.dG4,
              renderMosaicItemFooter: h.dG4,
              gifFavoriteButton: C(l),
              onPlay: (e, n, t) => {},
              canRemoveItem: !1,
              onRemoveItem: h.dG4,
            },
            a = (0, f.q)({ proxyURL: l.proxyUrl, url: l.url });
          return a in j && (r.onClick = j[a]), r;
        });
        return (0, l.jsx)("div", { children: (0, l.jsx)(u.Z, { items: N }) });
      }
    },
    676149: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(911969),
        o = t(600984);
      function s(e) {
        let { divider: n, spacing: t } = e;
        return (0, l.jsx)("div", {
          className: r()({
            [o.spacingLarge]: t === a.US.LARGE,
            [o.divider]: n,
          }),
        });
      }
    },
    861529: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(454585),
        s = t(937889),
        c = t(970184),
        u = t(870456),
        d = t(712293),
        m = t(882530);
      function f(e) {
        let { content: n, className: t } = e,
          r = (function (e) {
            let n = (0, c.CJ)();
            return (0, i.useMemo)(() => {
              let t;
              return null === n
                ? null
                : ((t =
                    null != n.message
                      ? (0, s.rs)(n.message, u.u)
                      : (0, s.p6)({
                          channelId: n.channelId,
                          renderOptions: u.u,
                        })),
                  o.Z.parse(e, !0, t));
            }, [e, n]);
          })(n);
        return (0, l.jsx)("div", {
          className: a()([t, m.markup, d.markdownContainer]),
          children: r,
        });
      }
    },
    770009: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(512722),
        r = t.n(i),
        a = t(442837),
        o = t(52396),
        s = t(592125),
        c = t(970184),
        u = t(151200),
        d = t(96513);
      function m(e) {
        let { contentInventoryEntry: n, channel: t } = e,
          { parsedEntry: i } = (0, o.B)();
        return (0, l.jsx)(u.Z, { ...i, entry: n, channel: t });
      }
      function f(e) {
        let n = (0, c.CJ)();
        r()(
          null != n,
          "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
        );
        let { channelId: t } = n,
          i = (0, a.e7)([s.Z], () => s.Z.getChannel(t));
        return (
          r()(null != i, "channel must be defined"),
          (0, l.jsx)(o.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: i,
            errorFallback: null,
            children: (0, l.jsx)(m, { ...e, channel: i }),
          })
        );
      }
    },
    151200: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(481060),
        o = t(328731),
        s = t(442550),
        c = t(435439),
        u = t(206295),
        d = t(297781),
        m = t(313201),
        f = t(231338),
        p = t(388032),
        h = t(346615),
        x = t(40305);
      function v(e) {
        let {
            className: n,
            clickableClassName: t,
            clickable: i,
            children: o,
          } = e,
          s = (0, m.Dt)();
        if (null != i && "href" in i) {
          let { ariaDescription: e, href: c } = i;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(a.HiddenVisually, { id: s, children: e }),
              (0, l.jsx)(a.Anchor, {
                className: r()(n, t),
                href: c,
                "aria-describedby": s,
                children: o,
              }),
            ],
          });
        }
        let { onClick: c, ariaDescription: u } = null != i ? i : {};
        return (0, l.jsxs)(a.BlockInteractionsContext.Provider, {
          value: null == c,
          children: [
            null != c &&
              null != u &&
              (0, l.jsx)(a.HiddenVisually, { id: s, children: u }),
            (0, l.jsx)(a.Clickable, {
              onClick: c,
              "aria-describedby": null == c ? void 0 : s,
              className: r()(n, null != c && t),
              children: o,
            }),
          ],
        });
      }
      function _(e) {
        let { clickable: n, ...t } = e;
        return (0, l.jsx)(v, {
          ...t,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: x.clickable,
        });
      }
      function C(e) {
        let {
            entry: n,
            channel: t,
            title: i,
            subtitle: x,
            thumbnailUrl: C,
            titleClickable: g,
            subtitleClickable: I,
            thumbnailClickable: b,
            providerIconProps: j,
            style: S = {},
          } = e,
          N = (0, m.Dt)(),
          { primaryColor: E, secondaryColor: T } = (0, u.Z)(C);
        return (
          null != C &&
            (S.background = "linear-gradient(45deg, "
              .concat(E, ", ")
              .concat(T, ")")),
          (0, l.jsx)(a.ThemeProvider, {
            theme: f.BR.DARK,
            children: (e) =>
              (0, l.jsxs)("figure", {
                "aria-roledescription": p.intl.string(p.t.zFfUhI),
                "aria-labelledby": N,
                "data-disable-adaptive-theme": !0,
                className: r()(h.container, e),
                style: S,
                children: [
                  (0, l.jsx)(v, {
                    className: h.thumbnailContainer,
                    clickableClassName: h.clickable,
                    clickable: b,
                    children: (0, l.jsx)(s.f, {
                      src: C,
                      constrain: "width",
                      size: 64,
                      "aria-hidden": !0,
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: h.infoContainer,
                    children: [
                      (0, l.jsx)(o.Z, {
                        channel: t,
                        entry: n,
                        className: h.users,
                      }),
                      (0, l.jsx)(a.Spacer, { size: 2 }),
                      (0, l.jsx)(_, {
                        clickable: g,
                        className: h.clickableText,
                        children: (0, l.jsx)(a.Heading, {
                          id: N,
                          variant: "heading-md/medium",
                          lineClamp: 1,
                          className: r()(h.textPrimary, h.truncatedText),
                          scaleFontToUserSetting: !0,
                          children: i,
                        }),
                      }),
                      null != x
                        ? (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(a.Spacer, { size: 2 }),
                              (0, l.jsx)(_, {
                                clickable: I,
                                className: h.clickableText,
                                children: (0, l.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  className: r()(
                                    h.textSecondary,
                                    h.truncatedText,
                                  ),
                                  lineClamp: 1,
                                  scaleFontToUserSetting: !0,
                                  children: x,
                                }),
                              }),
                            ],
                          })
                        : null,
                      (0, l.jsx)(d.PZ, {
                        className: h.badges,
                        entry: n,
                        location: d.Gt.EMBED,
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: h.headerIcons,
                    children: null != j ? (0, l.jsx)(c.Z, { ...j }) : null,
                  }),
                ],
              }),
          })
        );
      }
    },
    889515: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(739754),
        r = t(970184),
        a = t(587745);
      function o(e) {
        let { components: n, renderComponents: t } = e,
          { message: o } = (0, r.CJ)();
        return null == n || 0 === n.length
          ? null
          : (0, l.jsxs)("div", {
              className: a.container,
              children: [
                (0, l.jsx)("div", { className: a.children, children: t(n) }),
                null != o
                  ? (0, l.jsx)(i.ZP, {
                      className: a.error,
                      message: o,
                      component: e,
                    })
                  : null,
              ],
            });
      }
    },
    611170: function (e, n, t) {
      t.d(n, {
        aB: function () {
          return h;
        },
        rJ: function () {
          return x;
        },
        yF: function () {
          return p;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(916616),
        a = t(981729),
        o = t(911969),
        s = t(558522),
        c = t(591759),
        u = t(524444),
        d = t(981631),
        m = t(388032),
        f = t(634530);
      function p(e) {
        let n = i.useRef(null),
          t = e.item.originalItem.media;
        if (t.loadingState === o.f.LOADED_NOT_FOUND)
          return (0, l.jsx)(a.u, {
            text: m.intl.string(m.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: n,
            children: (e) =>
              (0, l.jsx)("div", {
                ...e,
                className: f.notFoundPlaceholder,
                role: "img",
                children: (0, l.jsx)(s.Z, {
                  ref: n,
                  className: f.brokenImageIcon,
                }),
              }),
          });
        let c = t.loadingState === o.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
        return (0, l.jsx)(r.E, {
          readyState: c,
          src: "",
          width: 350,
          height: 350,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          mediaLayoutType: e.mediaLayoutType,
          useFullWidth: e.useFullWidth,
          zoomable: !1,
        });
      }
      function h(e) {
        let n = e.item.originalItem.media;
        return (0, u.Yi)({
          ...e,
          alt: e.item.originalItem.description,
          src: n.proxyUrl,
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholderVersion,
          sourceMetadata: { message: e.message },
        });
      }
      function x(e) {
        let n = e.item.originalItem.media,
          t = c.Z.toURLSafe(n.proxyUrl);
        return null == t
          ? null
          : (t.searchParams.append("format", "webp"),
            (0, u.lV)({
              ...e,
              poster: t.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              sourceMetadata: { message: e.message },
            }));
      }
    },
    128854: function (e, n, t) {
      t.d(n, {
        F: function () {
          return o;
        },
        c: function () {
          return a;
        },
      }),
        t(411104);
      var l = t(200651),
        i = t(192379);
      let r = i.createContext(null);
      function a() {
        let e = i.useContext(r);
        if (null == e)
          throw Error(
            "Could not find context for useMessageAccessoriesComponentContext.",
          );
        return e;
      }
      function o(e) {
        let { children: n, ...t } = e;
        return (0, l.jsx)(r.Provider, { value: t, children: n });
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(558381),
        r = t(551428);
      let a = (0, l.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    558522: function (e, n, t) {
      var l = t(200651),
        i = t(192379),
        r = t(325767);
      n.Z = i.forwardRef(function (e, n) {
        let {
          width: t = 24,
          height: i = 24,
          color: a = "currentColor",
          foreground: o,
          ...s
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, r.Z)(s),
          ref: n,
          width: t,
          height: i,
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            className: o,
            fill: a,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      });
    },
    908841: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(325767);
      function r(e) {
        let {
          width: n = 20,
          height: t = 20,
          color: r = "currentColor",
          ...a
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, i.Z)(a),
          width: n,
          height: t,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: r,
          }),
        });
      }
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(409794),
        r = t(777207),
        a = t(541822),
        o = t(330711),
        s = t(476818);
      function c(e) {
        let {
            benefits: n,
            description: t,
            imgSrc: c,
            title: u,
            tag: d,
            FallbackIcon: m,
          } = e,
          f =
            null != c
              ? { "--custom-background-url": "url(".concat(c.toString(), ")") }
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
                        null != c
                          ? (0, l.jsx)("img", { src: c.toString(), alt: "" })
                          : (0, l.jsx)(m, {
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
                          children: u,
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
                    null != n &&
                      (0, l.jsxs)("div", {
                        className: s.benefits,
                        children: [
                          (0, l.jsx)(r.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: o.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
          return d;
        },
        Z: function () {
          return u;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(628028),
        r = t(220427),
        a = t(777207),
        o = t(692547),
        s = t(330711),
        c = t(124370);
      function u(e) {
        let { type: n } = e;
        return (0, l.jsx)(d, {
          icon:
            "user" === n
              ? (0, l.jsx)(r.t, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: c.container,
          children: [
            n,
            (0, l.jsx)(a.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: t,
            }),
          ],
        });
      }
    },
    524846: function (e, n, t) {
      var l, i;
      t.d(n, {
        $: function () {
          return l;
        },
      }),
        ((i = l || (l = {})).USER = "user"),
        (i.ROLE = "role"),
        (i.CHANNEL = "channel");
    },
    775012: function (e, n, t) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
        scrollerWrapper: "scrollerWrapper_c5ad85",
        scroller: "scroller_c5ad85",
      };
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
    968629: function (e, n, t) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    266377: function (e, n, t) {
      e.exports = { text: "text_b628d6" };
    },
    40305: function (e, n, t) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    719181: function (e, n, t) {
      e.exports = {
        stackedAvatar: "stackedAvatar_bf3a3d",
        clickable: "clickable_bf3a3d",
        container: "container_bf3a3d",
        truncatedText: "truncatedText_bf3a3d",
        usersHeader: "usersHeader_bf3a3d",
      };
    },
    846921: function (e, n, t) {
      e.exports = { popout: "popout_e40224" };
    },
    330997: function (e, n, t) {
      e.exports = { container: "container_b11148" };
    },
    382396: function (e, n, t) {
      e.exports = {
        container: "container_e426aa",
        containerUikit: "containerUikit_e426aa",
      };
    },
    912817: function (e, n, t) {
      e.exports = {
        content: "content_acadc1",
        loading: "loading_acadc1",
        textEmoji: "textEmoji_acadc1",
        premium: "premium_acadc1",
        shopIcon: "shopIcon_acadc1",
        launchIcon: "launchIcon_acadc1",
        hidden: "hidden_acadc1",
        label: "label_acadc1",
      };
    },
    688860: function (e, n, t) {
      e.exports = {
        username: "username_d090f5",
        discriminator: "discriminator_d090f5",
        tag: "tag_d090f5",
        bot: "bot_d090f5",
        label: "label_d090f5",
        labelText: "labelText_d090f5",
        roleCountContainer: "roleCountContainer_d090f5",
        roleCountIcon: "roleCountIcon_d090f5",
        roleCountText: "roleCountText_d090f5",
      };
    },
    851796: function (e, n, t) {
      e.exports = {
        container: "container_dc6e19",
        select: "select_dc6e19",
        loading: "loading_dc6e19",
        iconContainer: "iconContainer_dc6e19",
        badges: "badges_dc6e19",
        soloInput: "soloInput_dc6e19",
        inlineInput: "inlineInput_dc6e19",
        singleSelect: "singleSelect_dc6e19",
        hidden: "hidden_dc6e19",
      };
    },
    503738: function (e, n, t) {
      e.exports = {
        container: "container_f49825",
        select: "select_f49825",
        selectOption: "selectOption_f49825",
        disabled: "disabled_f49825",
        emoji: "emoji_f49825",
        smallEmoji: "smallEmoji_f49825",
        offset: "offset_f49825",
        optionTag: "optionTag_f49825",
        labelContainer: "labelContainer_f49825",
        label: "label_f49825",
        description: "description_f49825",
        tag: "tag_f49825",
        singleValueLabel: "singleValueLabel_f49825",
        option: "option_f49825",
        value: "value_f49825",
        singleValue: "singleValue_f49825",
        error: "error_f49825",
      };
    },
    438978: function (e, n, t) {
      e.exports = { formItem: "formItem_d459dd" };
    },
    600984: function (e, n, t) {
      e.exports = {
        divider: "divider_d0ecce",
        spacingLarge: "spacingLarge_d0ecce",
      };
    },
    712293: function (e, n, t) {
      e.exports = { markdownContainer: "markdownContainer_b6273d" };
    },
    346615: function (e, n, t) {
      e.exports = {
        textPrimary: "textPrimary_e13591",
        textSecondary: "textSecondary_e13591",
        headerIcons: "headerIcons_e13591",
        container: "container_e13591",
        clickable: "clickable_e13591",
        badges: "badges_e13591",
        clickableText: "clickableText_e13591",
        truncatedText: "truncatedText_e13591",
        infoContainer: "infoContainer_e13591",
        users: "users_e13591",
        thumbnailContainer: "thumbnailContainer_e13591",
      };
    },
    587745: function (e, n, t) {
      e.exports = {
        container: "container_f08cd0",
        children: "children_f08cd0",
        error: "error_f08cd0",
      };
    },
    634530: function (e, n, t) {
      e.exports = {
        notFoundPlaceholder: "notFoundPlaceholder_a447fe",
        brokenImageIcon: "brokenImageIcon_a447fe",
      };
    },
    421502: function (e, n, t) {
      e.exports = {
        oneByOneGrid: "oneByOneGrid_cda674",
        oneByOneGridSingle: "oneByOneGridSingle_cda674",
        oneByOneGridMosaic: "oneByOneGridMosaic_cda674",
        oneByTwoGrid: "oneByTwoGrid_cda674",
        oneByTwoLayoutThreeGrid: "oneByTwoLayoutThreeGrid_cda674",
        oneByTwoGridItem: "oneByTwoGridItem_cda674",
        itemContentContainer: "itemContentContainer_cda674",
        lazyImg: "lazyImg_cda674",
        oneByTwoSoloItem: "oneByTwoSoloItem_cda674",
        oneByTwoDuoItem: "oneByTwoDuoItem_cda674",
        twoByOneGrid: "twoByOneGrid_cda674",
        twoByOneGridItem: "twoByOneGridItem_cda674",
        threeByThreeGrid: "threeByThreeGrid_cda674",
        lazyImgContainer: "lazyImgContainer_cda674",
        twoByTwoGrid: "twoByTwoGrid_cda674",
        visualMediaItemContainer: "visualMediaItemContainer_cda674",
        nonVisualMediaItemContainer: "nonVisualMediaItemContainer_cda674",
        nonVisualMediaItem: "nonVisualMediaItem_cda674",
        hasFooter: "hasFooter_cda674",
        mosaicContainer: "mosaicContainer_cda674",
        single: "single_cda674",
      };
    },
    166353: function (e, n, t) {
      e.exports = {
        inline: "inline_e5c1dc",
        hiddenMosaicItem: "hiddenMosaicItem_e5c1dc",
        obscured: "obscured_e5c1dc",
        hiddenSpoiler: "hiddenSpoiler_e5c1dc",
        hiddenExplicit: "hiddenExplicit_e5c1dc",
        obscureVideoSpacing: "obscureVideoSpacing_e5c1dc",
        mosaicItemContent: "mosaicItemContent_e5c1dc",
        removeMosaicItemButton: "removeMosaicItemButton_e5c1dc",
        spoilerRemoveMosaicItemButton:
          "spoilerRemoveMosaicItemButton_e5c1dc removeMosaicItemButton_e5c1dc",
        mosaicItem: "mosaicItem_e5c1dc",
        mosaicItemNoJustify: "mosaicItemNoJustify_e5c1dc",
        mosaicItemFullWidth: "mosaicItemFullWidth_e5c1dc",
        mosaicItemMediaMosaic: "mosaicItemMediaMosaic_e5c1dc",
        hasFooter: "hasFooter_e5c1dc",
        mosaicItemWithFooter: "mosaicItemWithFooter_e5c1dc",
        hideOverflow: "hideOverflow_e5c1dc",
        removeMosaicItemHoverButton: "removeMosaicItemHoverButton_e5c1dc",
        downloadHoverButtonIcon: "downloadHoverButtonIcon_e5c1dc",
      };
    },
    875804: function (e, n, t) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
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
    377199: function (e, n, t) {
      e.exports = {
        container: "container_f91bb7",
        image: "image_f91bb7",
        description: "description_f91bb7",
        card: "card_f91bb7",
        body: "body_f91bb7",
        purchaseBtn: "purchaseBtn_f91bb7",
        benefits: "benefits_f91bb7",
        benefitsContainer: "benefitsContainer_f91bb7",
        benefitsList: "benefitsList_f91bb7",
        cardBenefit: "cardBenefit_f91bb7",
        cardBenefitIcon: "cardBenefitIcon_f91bb7",
        benefitsSummary: "benefitsSummary_f91bb7",
      };
    },
    124370: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
    847987: function (e, n, t) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=8a1451caa91086f59e79.js.map
