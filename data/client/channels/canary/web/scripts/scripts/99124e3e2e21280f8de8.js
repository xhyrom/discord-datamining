"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24391"],
  {
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
        var n, t, v, C;
        let {
            onClose: g,
            transitionState: _,
            skuId: b,
            appId: I,
            onHeaderTitleClick: S,
          } = e,
          j = (0, r.e7)([s.Z], () => s.Z.getForSKU(b), [b]),
          y = (0, r.e7)([o.Z], () => o.Z.get(b), [b]),
          T = (0, d.M)(b);
        if (null == y) return null;
        let N = null !== (t = y.name) && void 0 !== t ? t : "",
          E =
            null !==
              (v =
                null == j
                  ? void 0
                  : null === (n = j.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== v
              ? v
              : void 0,
          Z =
            (null == j ? void 0 : j.headerBackground) != null &&
            null !==
              (C = u.Z.toURLSafe((0, c._W)(I, j.headerBackground, 256))) &&
            void 0 !== C
              ? C
              : void 0,
          k = y.type === h.epS.DURABLE && T,
          L =
            y.type === h.epS.DURABLE
              ? k
                ? x.intl.string(x.t.bm82mp)
                : x.intl.string(x.t["6gprwc"])
              : void 0,
          { price: O } = y;
        return null == O
          ? null
          : (0, l.jsx)(m.A, {
              appId: I,
              skuId: y.id,
              transitionState: _,
              onHeaderTitleClick: null != S ? S : g,
              onClose: g,
              footer: (0, l.jsx)(f.YG, { appId: I, sku: y }),
              children: (0, l.jsx)(p.i, {
                appId: I,
                skuId: y.id,
                title: N,
                description: E,
                imgSrc: Z,
                tag: null != L ? (0, l.jsx)(i.V, { text: L }) : void 0,
                FallbackIcon: a.TicketIcon,
              }),
            });
      }
    },
    744969: function (e, n, t) {
      t.d(n, {
        s: function () {
          return _;
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
        C = t(388032);
      let g = (0, r.Kb)([d.Z, u.Z, m.Z], {
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
      function _(e) {
        let { data: n } = g(e),
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
            return { disabled: !0, label: C.intl.string(C.t.CHa0vL) };
          if (r.type === v.epS.SUBSCRIPTION) {
            if (null == s || 0 === s.length)
              return { disabled: !0, label: C.intl.string(C.t.CHa0vL) };
            let e = s[0],
              n = (0, f.aS)(e.id);
            return {
              disabled: !1,
              label: C.intl.formatToPlainString(C.t["c6Q+Bw"], {
                skuName: r.name,
                price: (0, p.T4)(n.amount, n.currency),
              }),
              onClick: u,
            };
          }
          return null == r.price
            ? { disabled: !0, label: C.intl.string(C.t.CHa0vL) }
            : {
                disabled: !1,
                label: C.intl.formatToPlainString(C.t["c6Q+Bw"], {
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
        o = t(750386);
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
        p = t(633942);
      function h(e) {
        let { entry: n, channel: t, className: i } = e,
          {
            displayParticipants: h,
            participant1: x,
            participant2: v,
            numOtherParticipants: C,
            orderedParticipants: g,
          } = (0, c.Z)(n),
          _ = [x, v];
        return (0, l.jsxs)("div", {
          className: r()(p.container, i),
          children: [
            h.length > 0
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(m.Z, {
                      participants: g,
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
                user0: s.ZP.getName(t.guild_id, t.id, _[0]),
                user1: s.ZP.getName(t.guild_id, t.id, _[1]),
                countOthers: C,
                name0Hook: (e, n) =>
                  (0, l.jsx)(d.Z, { text: e, user: _[0], channel: t }, n),
                name1Hook: (e, n) =>
                  (0, l.jsx)(d.Z, { text: e, user: _[1], channel: t }, n),
                countOthersHook: (e, n) =>
                  (0, l.jsx)(
                    m.Z,
                    {
                      participants: g,
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
        f = t(217248);
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
                      t.e("351"),
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
          return C;
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
            return (0, l.jsx)(_, { entry: n, ...i });
          case o.s.TOP_GAME:
            return (0, l.jsx)(b, { entry: n, ...i });
          case o.s.PLAYED_GAME:
            return (0, l.jsx)(I, { entry: n, ...i });
          case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(S, { entry: n, ...i });
          case o.s.LISTENED_SESSION:
            return (0, l.jsx)(j, { entry: n, ...i });
          case o.s.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(g, { entry: n, ...i });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function C(e) {
        let { errorFallback: n, ...t } = e;
        return (0, l.jsx)(s.S, {
          fallback: n,
          children: (0, l.jsx)(v, { ...t }),
        });
      }
      function g(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, c.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function _(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, f.Z)({ entry: n, ...i });
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
      function I(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, d.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function S(e) {
        let { entry: n, children: t, ...i } = e,
          r = (0, p.Z)({ entry: n, ...i });
        return (0, l.jsx)(h.Provider, {
          value: { parsedEntry: r, ...i },
          children: t,
        });
      }
      function j(e) {
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
              l.__(i._b.TEXT, a.Ie.NORMAL, {
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
          C = {
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
          titleClickable: C,
          thumbnailClickable: C,
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
          C = { type: s.kG.CRUNCHYROLL },
          g = l.useMemo(() => {
            if (null == t.extra.url) return;
            let e = a.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [t.extra.url]);
        return (
          null != g &&
            (n = {
              href: a.Z.format(g),
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
            providerIconProps: C,
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
        r = t(392681);
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
    215256: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
        f: function () {
          return l;
        },
      });
      let l = (0, t(818083).B)({
        kind: "user",
        id: "2024-12_global_discovery_apps_logged_out",
        label: "Global Discovery Apps - Logged Out",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: n } = e;
        return l.useExperiment({ location: n }, { autoTrackExposure: !1 })
          .enabled;
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
          return j;
        },
        xX: function () {
          return S;
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
        f = t(988075),
        p = t(12067),
        h = t(676149),
        x = t(861529),
        v = t(568248),
        C = t(770009),
        g = t(889515),
        _ = t(985184),
        b = t(892519),
        I = t(785225);
      function S(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case a.re.ACTION_ROW:
                return (0, l.jsx)(g.Z, { ...e, renderComponents: S }, n);
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
              case a.re.SECTION:
                return (0, l.jsx)(b.Z, { ...e }, n);
              case a.re.TEXT_DISPLAY:
                return (0, l.jsx)(x.Z, { ...e }, n);
              case a.re.MEDIA_GALLERY:
                return (0, l.jsx)(p.Z, { ...e }, n);
              case a.re.THUMBNAIL:
                return (0, l.jsx)(v.Z, { ...e }, n);
              case a.re.FILE:
                return (0, l.jsx)(f.Z, { ...e }, n);
              case a.re.SEPARATOR:
                return (0, l.jsx)(h.Z, { ...e }, n);
              case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, l.jsx)(C.Z, { ...e }, n);
              case a.re.CONTAINER:
                return (0, l.jsx)(_.ZP, { ...e, renderComponents: S }, n);
            }
          })(e, n.toString()),
        );
      }
      function j(e) {
        let { message: n } = e,
          { components: t } = n;
        return 0 === t.length
          ? null
          : (0, l.jsx)("div", {
              className: r()([
                I.container,
                { [I.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, l.jsx)(o.Il, { message: n, children: S(t) }),
            });
      }
    },
    987106: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
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
        v = t(647927);
      function C(e) {
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
      function g(e) {
        let n;
        let { label: t, style: i, disabled: m, emoji: x, url: g, skuId: _ } = e,
          {
            executeStateUpdate: b,
            visualState: I,
            isDisabled: S,
          } = (0, p.Ee)(e),
          j = (0, d.s)(_),
          y = null != _ && i === u.ZJ.PREMIUM,
          T = y && (null == j ? void 0 : j.disabled),
          N = y ? (null == j ? void 0 : j.label) : t,
          E = null != x,
          Z = null != N && N.length > 0,
          k = i === u.ZJ.LINK && null != g && g.length > 0,
          L = I === h.gH.LOADING || (y && null == j);
        return (
          (n = k
            ? () => {
                (0, f.q)({ href: null != g ? g : "", shouldConfirm: !0 });
              }
            : y
              ? null != j && !1 === j.disabled
                ? j.onClick
                : a.noop
              : () => b()),
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
            disabled: m || I === h.gH.DISABLED || S || T,
            onClick: n,
            onContextMenu: (e) => {
              k && (0, s.vq)(e, (e) => (0, l.jsx)(C, { ...e, url: g }));
            },
            role: k ? "link" : "button",
            children: [
              (0, l.jsxs)("div", {
                className: r()(v.content, { [v.hidden]: L, [v.premium]: y }),
                "aria-hidden": L,
                children: [
                  y
                    ? (0, l.jsx)("div", {
                        className: v.shopIcon,
                        children: (0, l.jsx)(o.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  E
                    ? (0, l.jsx)(c.Z, {
                        className: r()({ [v.textEmoji]: Z }),
                        src: x.src,
                        emojiId: x.id,
                        emojiName: x.name,
                        animated: x.animated,
                      })
                    : null,
                  Z
                    ? (0, l.jsx)("div", { className: v.label, children: N })
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
        f = t(826987);
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
          C = i.useMemo(
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
          defaultValues: C,
        });
      }
    },
    574597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
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
        C = t(811654),
        g = t(344991),
        _ = t(981631),
        b = t(826987);
      function I(e) {
        var n;
        let t = (0, x.CJ)(),
          I =
            null == t
              ? void 0
              : null === (n = t.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          S = m.Z.getChannel(I),
          j = f.Z.getGuild(null == S ? void 0 : S.getGuildId()),
          y = (0, d.Z)(null == j ? void 0 : j.id, C.HI),
          T = i.useMemo(
            () => (0, C.tx)(e.defaultValues, null == j ? void 0 : j.id),
            [e.defaultValues, j],
          );
        return (0, l.jsx)(g.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, C._H)(e.type, n, I),
          renderIcon: (e, n) => {
            let t = n === g.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === v.tM.USER) {
              let i = h.default.getUser(e.value);
              if (null == i) return;
              return (0, l.jsx)(a.Avatar, {
                size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                src: i.getAvatarURL(null == j ? void 0 : j.id, n),
                status: t ? null : p.Z.getStatus(i.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === v.tM.ROLE) {
              var i;
              let t = null != j ? f.Z.getRole(j.id, e.value) : void 0;
              if (null == t || null == j) return;
              let o = (0, c._b)(j, t) ? (0, u.Kz)(t, n) : null;
              return null != o
                ? (0, l.jsx)(s.Z, { ...o })
                : (0, l.jsx)(a.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (i = t.colorString) && void 0 !== i
                        ? i
                        : (0, r.Rf)(_.p6O),
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
                  className: b.tag,
                  usernameClass: b.username,
                  discriminatorClass: b.discriminator,
                  botClass: b.bot,
                  user: t,
                  forceUsername: !0,
                }));
            } else if (e.type === v.tM.ROLE) {
              let t = null != j ? f.Z.getRole(j.id, e.value) : void 0,
                i = null == t ? null : null == y ? void 0 : y[t.id];
              null != i &&
                (n = (0, l.jsxs)("div", {
                  className: b.roleCountContainer,
                  children: [
                    (0, l.jsx)(a.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: b.roleCountIcon,
                    }),
                    (0, l.jsx)("span", {
                      className: b.roleCountText,
                      children: i,
                    }),
                  ],
                }));
            }
            return (0, l.jsxs)("span", {
              className: b.label,
              children: [
                (0, l.jsx)("span", {
                  className: b.labelText,
                  children: e.label,
                }),
                n,
              ],
            });
          },
          defaultValues: T,
        });
      }
    },
    344991: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return C;
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
        h = t(591580),
        x = t(844592);
      function v(e) {
        let { icon: n, iconSize: t } = e;
        return (0, r.jsx)("div", {
          className: h.iconContainer,
          style: { height: t, width: t },
          children: n,
        });
      }
      function C(e) {
        let {
            selectActionComponent: n,
            queryOptions: t,
            renderIcon: l,
            renderOptionLabel: i,
            defaultValues: o,
          } = e,
          { type: C, placeholder: g, maxValues: _, disabled: b } = n,
          [I, S] = a.useState(!1),
          [j, y] = a.useState(!1),
          [T, N] = a.useState(
            new Map(null == o ? void 0 : o.map((e) => [e.value, e])),
          ),
          [E, Z] = a.useState(new Set(T.keys())),
          [k, L] = a.useState(() => (null != o ? o : []).map((e) => e.value)),
          [O, A] = a.useState(0);
        a.useEffect(() => {
          let e = (null != o ? o : []).map((e) => e.value);
          if (e.every((e) => k.includes(e)) && k.every((n) => e.includes(n)))
            return;
          L(e);
          let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
          N(n), Z(new Set(n.keys())), A((e) => e + 1);
        }, [o, k]);
        let {
            state: M,
            executeStateUpdate: P,
            visualState: R,
            isDisabled: w,
            error: B,
          } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(T.values()),
          }),
          U = R === f.gH.LOADING;
        a.useEffect(() => {
          if (
            (null == M ? void 0 : M.type) === u.re.USER_SELECT ||
            (null == M ? void 0 : M.type) === u.re.ROLE_SELECT ||
            (null == M ? void 0 : M.type) === u.re.MENTIONABLE_SELECT ||
            (null == M ? void 0 : M.type) === u.re.CHANNEL_SELECT
          ) {
            let e = new Map(M.selectedOptions.map((e) => [e.value, e]));
            N(e), Z(new Set(e.keys()));
          }
        }, [M]);
        let G = a.useCallback(() => {
          P({ type: C, selectedOptions: Array.from(T.values()) }) &&
            Z(new Set(T.keys()));
        }, [P, C, T]);
        a.useEffect(() => {
          if (
            !(
              I ||
              j ||
              (T.size === E.size && Array.from(T.keys()).every((e) => E.has(e)))
            )
          )
            G();
        }, [I, j, E, T, G]);
        let H = 0 === T.size || I,
          D = {
            isDisabled: b || w,
            wrapperClassName: h.select,
            options: (e) =>
              new Promise((n) => {
                n(t(e));
              }),
            placeholder: H
              ? null != g
                ? g
                : p.intl.string(p.t.Otr6W1)
              : void 0,
            onClose: () => S(!1),
            onOpen: () => S(!0),
            onBlur: () => y(!1),
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
                _ > 1
                  ? (0, r.jsx)(
                      c.SearchableSelect,
                      {
                        className: h.badges,
                        value: Array.from(T.values()),
                        onChange: (e) => {
                          !I && y(!0), N(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: s()({
                          [h.soloInput]: 0 === T.size,
                          [h.inlineInput]: T.size > 0,
                          [h.hidden]: !H,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...D,
                      },
                      O,
                    )
                  : (0, r.jsx)(
                      c.SearchableSelect,
                      {
                        className: (h.badges, h.singleSelect),
                        value: [...T.values()][0],
                        onChange: (e) =>
                          N(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...D,
                      },
                      O,
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
            null != B
              ? (0, r.jsx)(d.st, { ...(0, d.c4)(B), className: x.error })
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
          return C;
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
        p = t(844592);
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
      function C(e) {
        let {
            type: n,
            options: t,
            id: r,
            placeholder: a,
            maxValues: s,
            minValues: C,
            disabled: g,
          } = e,
          _ = i.useMemo(
            () => t.filter((e) => e.default).map((e) => e.value),
            [t],
          ),
          {
            state: b,
            executeStateUpdate: I,
            visualState: S,
            isDisabled: j,
            error: y,
          } = (0, d.Ee)(e, { type: n, values: _ }),
          T = s > 1,
          N = S === m.gH.LOADING,
          [E, Z] = i.useState(!1),
          [k, L] = i.useState(
            () => new Set(t.filter((e) => e.default).map((e) => e.value)),
          ),
          [O, A] = i.useState(k),
          M = i.useMemo(() => t.some((e) => null != e.emoji), [t]);
        i.useEffect(() => {
          if ((null == b ? void 0 : b.type) === c.re.STRING_SELECT) {
            let e = new Set(b.values);
            L(e), A(e);
          } else {
            let e = new Set(_);
            L(e), A(e);
          }
        }, [r, _, b]);
        let P = i.useCallback(() => {
          if (O !== k)
            I({ type: c.re.STRING_SELECT, values: Array.from(k) }) && A(k);
        }, [k, O, A, I]);
        i.useEffect(() => {
          if (
            !(E || (k.size === O.size && Array.from(O).every((e) => k.has(e))))
          )
            P();
        }, [E, k, O, P]);
        let R = o.singleSelect;
        T ? (R = o.multiSelect) : 0 === C && (R = o.toggleSelect);
        let w = (0, o.useVariableSelect)({
          value: k,
          onChange: (e) => L(e),
          onSelectInteraction: R,
        });
        return (0, l.jsxs)(i.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: p.container,
              children: [
                (0, l.jsx)(o.Select, {
                  isDisabled: g || j,
                  className: p.select,
                  options: t.map((e) => ({
                    ...e,
                    disabled: T && !k.has(e.value) && k.size === s,
                  })),
                  placeholder: null != a ? a : f.intl.string(f.t.Otr6W1),
                  onClose: () => Z(!1),
                  onOpen: () => Z(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !T,
                  optionClassName: p.selectOption,
                  renderOptionLabel: (e) =>
                    (0, l.jsx)(h, {
                      ...e,
                      isDisabled: T && !k.has(e.value) && k.size === s,
                      isOffset: M,
                    }),
                  renderOptionValue: (e) =>
                    T
                      ? (0, l.jsx)(v, { options: e })
                      : (0, l.jsx)(x, { ...e[0] }),
                  ...w,
                }),
                N
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
            null != y
              ? (0, l.jsx)(u.st, { ...(0, u.c4)(y), className: p.error })
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
        c = t(234175);
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
          [v, C] = i.useState(null != x ? x : ""),
          {
            state: g,
            executeStateUpdate: _,
            error: b,
          } = (0, o.Ee)(e, null != x ? { type: t, value: x } : void 0),
          I = (0, s.hz)(e.id);
        i.useEffect(() => {
          (null == g ? void 0 : g.type) === t && C(g.value);
        }, [t, g]);
        let S = {
          name: d,
          value: v,
          placeholder: m,
          minLength: f,
          maxLength: p,
          required: h,
          onChange: (e) => {
            C(e), _({ type: t, value: e });
          },
          autoFocus: I,
        };
        switch (u) {
          case a.PT.SMALL:
            n = (0, l.jsx)(r.TextInput, { ...S });
            break;
          case a.PT.PARAGRAPH:
            n = (0, l.jsx)(r.TextArea, { autosize: !0, ...S });
        }
        return (0, l.jsx)(r.FormItem, {
          title: d,
          required: h,
          className: c.formItem,
          error: b,
          children: n,
        });
      }
    },
    988075: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(442837),
        s = t(40330),
        c = t(95398),
        u = t(169525),
        d = t(546432),
        m = t(944486),
        f = t(388032),
        p = t(116803);
      function h(e) {
        let { file: n, name: t, size: r, spoiler: h } = e,
          x = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
          v = i.useMemo(
            () =>
              null != n.contentType && -1 !== n.contentType.indexOf("/")
                ? n.contentType.split("/")
                : ["unknown", "unknown"],
            [n.contentType],
          ),
          [C, g] = i.useState(h),
          _ = i.useMemo(
            () => () =>
              (0, l.jsx)(d.mz, {
                mimeType: v,
                downloadURL: n.url,
                showDownload: !0,
                showImageAppPicker: !1,
                isVisualMediaType: !1,
                channelId: x,
              }),
            [n, v, x],
          ),
          b = (e) =>
            (0, l.jsx)(s.Z, {
              className: a()({ [p.fileHidden]: e }),
              url: n.url,
              fileName: null != t ? t : f.intl.string(f.t.GnuJ5u),
              fileSize: null != r ? r : 0,
              renderAdjacentContent: _,
            });
        return (0, l.jsx)("div", {
          className: p.fileDisplayContainer,
          children: h
            ? (0, l.jsx)(c.Z, {
                type: c.Z.Types.ATTACHMENT,
                reason: u.wk.SPOILER,
                obscured: C,
                onToggleObscurity: () => g((e) => !e),
                children: (e) => b(e),
              })
            : b(!1),
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
            gifAutoPlay: C,
            getGifFavButton: g,
            getOnMediaItemContextMenu: _,
          } = (0, c.c)();
        if (null == n || null == t) return null;
        let b = e.items
            .map((e) => ({
              ...(0, r.y_)(e.media),
              original: e.media.url,
              srcIsAnimated: e.media.srcIsAnimated,
            }))
            .filter((e) => "INVALID" !== e.type),
          I =
            b.length > 1
              ? (0, d._)(
                  b,
                  { shouldHideMediaOptions: x, shouldRedactExplicitContent: v },
                  "Media Mosaic",
                )
              : {};
        function S(e, n) {
          let t = e.originalItem;
          return (0, a.lK)(t.media, n, t.spoiler);
        }
        let j = e.items.map((e, t) => {
          let l = e.media,
            i = null == _ ? void 0 : _(l),
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
              autoPlayGif: C,
              getObscureReason: S,
              renderImageComponent: s.aB,
              renderVideoComponent: s.rJ,
              renderVisualPlaceholderComponent: s.yF,
              renderAudioComponent: h.dG4,
              renderPlaintextFilePreview: h.dG4,
              renderGenericFileComponent: h.dG4,
              renderMosaicItemFooter: h.dG4,
              gifFavoriteButton: g(l),
              onPlay: (e, n, t) => {},
              canRemoveItem: !1,
              onRemoveItem: h.dG4,
            },
            a = (0, f.q)({ proxyURL: l.proxyUrl, url: l.url });
          return a in I && (r.onClick = I[a]), r;
        });
        return (0, l.jsx)("div", { children: (0, l.jsx)(u.Z, { items: j }) });
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
        o = t(991021);
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
          return p;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(454585),
        s = t(937889),
        c = t(970184),
        u = t(985184),
        d = t(870456),
        m = t(841129),
        f = t(665162);
      function p(e) {
        let { content: n, className: t } = e,
          r = (function (e) {
            let n = (0, c.CJ)();
            return (0, i.useMemo)(() => {
              let t;
              return null === n
                ? null
                : ((t =
                    null != n.message
                      ? (0, s.rs)(n.message, d.u)
                      : (0, s.p6)({
                          channelId: n.channelId,
                          renderOptions: d.u,
                        })),
                  o.Z.parse(e, !0, t));
            }, [e, n]);
          })(n),
          p = (0, u.Gt)();
        return (0, l.jsx)("div", {
          className: a()(t, f.markup, m.markdownContainer, {
            [m.containerSizedText]: p,
          }),
          children: r,
        });
      }
    },
    568248: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(95398),
        a = t(169525),
        o = t(499376),
        s = t(128854),
        c = t(524444),
        u = t(295435),
        d = t(793400);
      function m(e) {
        let { image: n, spoiler: t, description: m } = e,
          f = (0, o.pU)(n),
          { gifAutoPlay: p } = (0, s.c)(),
          [h, x] = i.useState(t),
          v = (e) => {
            var t, i;
            return "IMAGE" !== f
              ? (0, l.jsx)(u.S, {
                  className: d.imgContainer,
                  media: n,
                  placeholderWidth: 85,
                  placeholderHeight: 85,
                  maxWidth: 85,
                  maxHeight: 85,
                  hiddenSpoilers: e,
                })
              : (0, l.jsx)(c.Yi, {
                  containerClassName: d.imgContainer,
                  imageClassName: d.img,
                  src: n.proxyUrl,
                  alt: m,
                  original: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholderVersion,
                  width: null !== (t = n.width) && void 0 !== t ? t : 0,
                  height: null !== (i = n.height) && void 0 !== i ? i : 0,
                  hiddenSpoilers: e,
                  maxWidth: 85,
                  maxHeight: 85,
                  minWidth: 85,
                  minHeight: 85,
                  autoPlay: p && !e,
                });
          };
        return t
          ? (0, l.jsx)(r.Z, {
              type: r.Z.Types.ATTACHMENT,
              reason: a.wk.SPOILER,
              obscured: h,
              onToggleObscurity: () => x((e) => !e),
              children: (e) => v(e),
            })
          : v(!1);
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
          return g;
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
        h = t(965940),
        x = t(750386);
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
      function C(e) {
        let { clickable: n, ...t } = e;
        return (0, l.jsx)(v, {
          ...t,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: x.clickable,
        });
      }
      function g(e) {
        let {
            entry: n,
            channel: t,
            title: i,
            subtitle: x,
            thumbnailUrl: g,
            titleClickable: _,
            subtitleClickable: b,
            thumbnailClickable: I,
            providerIconProps: S,
            style: j = {},
          } = e,
          y = (0, m.Dt)(),
          { primaryColor: T, secondaryColor: N } = (0, u.Z)(g);
        return (
          null != g &&
            (j.background = "linear-gradient(45deg, "
              .concat(T, ", ")
              .concat(N, ")")),
          (0, l.jsx)(a.ThemeProvider, {
            theme: f.BR.DARK,
            children: (e) =>
              (0, l.jsxs)("figure", {
                "aria-roledescription": p.intl.string(p.t.zFfUhI),
                "aria-labelledby": y,
                "data-disable-adaptive-theme": !0,
                className: r()(h.container, e),
                style: j,
                children: [
                  (0, l.jsx)(v, {
                    className: h.thumbnailContainer,
                    clickableClassName: h.clickable,
                    clickable: I,
                    children: (0, l.jsx)(s.f, {
                      src: g,
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
                      (0, l.jsx)(C, {
                        clickable: _,
                        className: h.clickableText,
                        children: (0, l.jsx)(a.Heading, {
                          id: y,
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
                              (0, l.jsx)(C, {
                                clickable: b,
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
                    children: null != S ? (0, l.jsx)(c.Z, { ...S }) : null,
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
        a = t(792436);
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
    985184: function (e, n, t) {
      t.d(n, {
        Gt: function () {
          return f;
        },
        ZP: function () {
          return p;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(95398),
        s = t(169525),
        c = t(541964);
      let u = { isInContainer: !0 },
        d = i.createContext({ isInContainer: !1 });
      function m(e) {
        let { children: n } = e;
        return (0, l.jsx)(d.Provider, { value: u, children: n });
      }
      function f() {
        let { isInContainer: e } = i.useContext(d);
        return e;
      }
      function p(e) {
        let {
            components: n,
            accentColor: t,
            spoiler: r,
            renderComponents: u,
          } = e,
          [d, f] = i.useState(r),
          p = (e) =>
            (0, l.jsx)("div", {
              className: a()(c.container, {
                [c.isHidden]: e,
                [c.withAccentColor]: null != t,
              }),
              style: { "--__accent-color": t },
              children: (0, l.jsx)(m, { children: u(n) }),
            });
        return null == n || 0 === n.length
          ? null
          : r
            ? (0, l.jsx)(o.Z, {
                type: o.Z.Types.ATTACHMENT,
                reason: s.wk.SPOILER,
                obscured: d,
                onToggleObscurity: () => f((e) => !e),
                children: (e) => p(e),
              })
            : p(!1);
      }
    },
    892519: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(911969),
        r = t(861529),
        a = t(568248),
        o = t(510368);
      function s(e) {
        let { components: n, accessory: t } = e;
        return (0, l.jsx)("div", {
          children: (0, l.jsxs)("div", {
            className: o.children,
            children: [
              (0, l.jsx)("div", {
                className: o.textChildren,
                children: n.map((e) => (0, l.jsx)(r.Z, { ...e }, e.id)),
              }),
              (0, l.jsx)("div", {
                children: (function (e) {
                  if (e.type === i.re.THUMBNAIL)
                    return (0, l.jsx)(a.Z, { ...e });
                })(t),
              }),
            ],
          }),
        });
      }
    },
    295435: function (e, n, t) {
      t.d(n, {
        S: function () {
          return p;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(916616),
        s = t(981729),
        c = t(911969),
        u = t(558522),
        d = t(981631),
        m = t(388032),
        f = t(211417);
      function p(e) {
        let n = i.useRef(null),
          t = e.media;
        if (t.loadingState === c.f.LOADED_NOT_FOUND)
          return (0, l.jsx)(s.u, {
            text: m.intl.string(m.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: n,
            children: (t) =>
              (0, l.jsx)("div", {
                ...t,
                className: a()(e.className, f.notFoundPlaceholder, {
                  [f.hiddenSpoilers]: e.hiddenSpoilers,
                }),
                style: {
                  width: e.placeholderWidth,
                  height: e.placeholderHeight,
                },
                role: "img",
                children: (0, l.jsx)(u.Z, {
                  ref: n,
                  className: f.brokenImageIcon,
                }),
              }),
          });
        let r = t.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
        return (0, l.jsx)(o.E, {
          className: a()(e.className, { [f.hiddenSpoilers]: e.hiddenSpoilers }),
          readyState: r,
          src: "",
          width: e.placeholderWidth,
          height: e.placeholderHeight,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          mediaLayoutType: e.mediaLayoutType,
          useFullWidth: e.useFullWidth,
          zoomable: !1,
        });
      }
    },
    611170: function (e, n, t) {
      t.d(n, {
        aB: function () {
          return s;
        },
        rJ: function () {
          return c;
        },
        yF: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(295435),
        r = t(591759),
        a = t(524444);
      function o(e) {
        let n = e.item.originalItem.media;
        return (0, l.jsx)(i.S, {
          media: n,
          placeholderWidth: 350,
          placeholderHeight: 350,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          useFullWidth: e.useFullWidth,
          mediaLayoutType: e.mediaLayoutType,
        });
      }
      function s(e) {
        let n = e.item.originalItem.media;
        return (0, a.Yi)({
          ...e,
          alt: e.item.originalItem.description,
          src: n.proxyUrl,
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholderVersion,
          sourceMetadata: { message: e.message },
          analyticsSource: "renderImageComponentForGalleryItem",
        });
      }
      function c(e) {
        let n = e.item.originalItem.media,
          t = r.Z.toURLSafe(n.proxyUrl);
        return null == t
          ? null
          : (t.searchParams.append("format", "webp"),
            (0, a.lV)({
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
    558522: function (e, n, t) {
      var l = t(200651),
        i = t(192379),
        r = t(331595);
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
      var i = t(331595);
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
    671702: function (e, n, t) {
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
    689762: function (e, n, t) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        innerLinkButton: "innerLinkButton_c48629",
        appIcon: "appIcon_c48629",
        content: "content_c48629",
        unavailableTitle: "unavailableTitle_c48629",
        unavailableBody: "unavailableBody_c48629",
        button: "button_c48629",
      };
    },
    978733: function (e, n, t) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    83909: function (e, n, t) {
      e.exports = { text: "text_b628d6" };
    },
    750386: function (e, n, t) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    633942: function (e, n, t) {
      e.exports = {
        stackedAvatar: "stackedAvatar_bf3a3d",
        clickable: "clickable_bf3a3d",
        container: "container_bf3a3d",
        truncatedText: "truncatedText_bf3a3d",
        usersHeader: "usersHeader_bf3a3d",
      };
    },
    217248: function (e, n, t) {
      e.exports = { popout: "popout_e40224" };
    },
    392681: function (e, n, t) {
      e.exports = { container: "container_b11148" };
    },
    785225: function (e, n, t) {
      e.exports = {
        container: "container_e426aa",
        containerUikit: "containerUikit_e426aa",
      };
    },
    647927: function (e, n, t) {
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
    826987: function (e, n, t) {
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
    591580: function (e, n, t) {
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
    844592: function (e, n, t) {
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
    234175: function (e, n, t) {
      e.exports = { formItem: "formItem_d459dd" };
    },
    116803: function (e, n, t) {
      e.exports = {
        fileDisplayContainer: "fileDisplayContainer_f0fcf9",
        fileHidden: "fileHidden_f0fcf9",
      };
    },
    991021: function (e, n, t) {
      e.exports = {
        divider: "divider_d0ecce",
        spacingLarge: "spacingLarge_d0ecce",
      };
    },
    841129: function (e, n, t) {
      e.exports = {
        markdownContainer: "markdownContainer_b6273d",
        containerSizedText: "containerSizedText_b6273d",
      };
    },
    793400: function (e, n, t) {
      e.exports = { imgContainer: "imgContainer_a07dcf", img: "img_a07dcf" };
    },
    965940: function (e, n, t) {
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
    792436: function (e, n, t) {
      e.exports = {
        container: "container_f08cd0",
        children: "children_f08cd0",
        error: "error_f08cd0",
      };
    },
    541964: function (e, n, t) {
      e.exports = {
        container: "container_de3e02",
        isHidden: "isHidden_de3e02",
        withAccentColor: "withAccentColor_de3e02",
      };
    },
    510368: function (e, n, t) {
      e.exports = {
        children: "children_c05dfc",
        textChildren: "textChildren_c05dfc",
      };
    },
    211417: function (e, n, t) {
      e.exports = {
        notFoundPlaceholder: "notFoundPlaceholder_ec5bd9",
        brokenImageIcon: "brokenImageIcon_ec5bd9",
        hiddenSpoilers: "hiddenSpoilers_ec5bd9",
      };
    },
    665817: function (e, n, t) {
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
    157029: function (e, n, t) {
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
    366481: function (e, n, t) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
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
    789864: function (e, n, t) {
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
    103665: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
    717729: function (e, n, t) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=99124e3e2e21280f8de8.js.map
