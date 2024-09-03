"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30243"],
  {
    499254: function (e, n, l) {
      l.d(n, {
        _: function () {
          return r;
        },
        y: function () {
          return i;
        },
      });
      var t = l(570140);
      function r(e, n, l) {
        t.Z.dispatch({
          type: "APP_LAUNCHER_SHOW",
          entrypoint: e,
          activeViewType: n,
          initialState: l,
        });
      }
      function i(e) {
        t.Z.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
      }
    },
    574399: function (e, n, l) {
      l.d(n, {
        I: function () {
          return x;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(442837),
        a = l(481060),
        s = l(16084),
        u = l(558381),
        o = l(821849),
        c = l(106976),
        d = l(488915),
        m = l(171246),
        p = l(509545),
        E = l(55563),
        f = l(551428),
        N = l(937615),
        C = l(147496),
        v = l(519896),
        _ = l(981631),
        h = l(689938);
      function x(e) {
        r.useEffect(() => {
          if (null != e) (0, s.$N)("", e), (0, u.km)(e);
        }, [e]);
        let n = (0, i.e7)([E.Z], () => (null != e ? E.Z.get(e) : void 0), [e]);
        r.useEffect(() => {
          (null == n ? void 0 : n.type) === _.epS.SUBSCRIPTION &&
            (0, o.GZ)(n.id);
        }, [n]);
        let l = (0, i.Wu)([p.Z], () => (null != e ? p.Z.getForSKU(e) : []), [
            e,
          ]),
          x = r.useMemo(
            () => (null != l ? l.map((e) => e.id)[0] : void 0),
            [l],
          ),
          T = (0, i.e7)([f.Z], () => (null != e ? f.Z.getForSKU(e) : void 0), [
            e,
          ]);
        r.useEffect(() => {
          if (null != x) (0, c.vY)(x);
        }, [x]);
        let I = null == n ? void 0 : n.applicationId,
          g = (0, i.e7)(
            [d.Z],
            () =>
              null != I
                ? d.Z.getSubscriptionGroupListingForApplication(I)
                : null,
            [I],
          ),
          S = r.useCallback(() => {
            if (
              (null == n ? void 0 : n.applicationId) == null ||
              (null == n ? void 0 : n.id) == null ||
              (null == g ? void 0 : g.id) == null ||
              (null == g ? void 0 : g.sku_flags) == null
            )
              return null;
            (0, a.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(v.SubscriptionDetailsModal, {
                appId: n.applicationId,
                groupListingId: g.id,
                groupListingType: (0, m.KW)(g.sku_flags) ? "user" : "guild",
                onClose: l,
                skuId: n.id,
                transitionState: r,
              });
            });
          }, [
            null == n ? void 0 : n.applicationId,
            null == n ? void 0 : n.id,
            null == g ? void 0 : g.id,
            null == g ? void 0 : g.sku_flags,
          ]),
          O = r.useCallback(() => {
            if (null == n) return null;
            (0, a.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(C.ItemDetailsModal, {
                appId: n.applicationId,
                skuId: n.id,
                onClose: l,
                transitionState: r,
              });
            });
          }, [n]);
        if (
          null != n &&
          null != T &&
          (null == n || n.type !== _.epS.SUBSCRIPTION || null != g)
        ) {
          if (null == e || (null != n && !n.available))
            return {
              disabled: !0,
              label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
            };
          if (n.type === _.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
              return {
                disabled: !0,
                label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              };
            let e = l[0];
            return {
              disabled: !1,
              label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                skuName: n.name,
                price: (0, N.T4)(e.price, e.currency),
              }),
              onClick: S,
            };
          }
          return null == n.price
            ? {
                disabled: !0,
                label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              }
            : {
                disabled: !1,
                label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                  skuName: n.name,
                  price: (0, N.T4)(n.price.amount, n.price.currency),
                }),
                onClick: O,
              };
        }
      }
    },
    256139: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      });
      var t = l(735250),
        r = l(120356),
        i = l.n(r),
        a = l(481060),
        s = l(671656);
      function u(e) {
        let { className: n, onClick: l, ...r } = e,
          u = (0, t.jsx)(a.Clickable, {
            ...r,
            className: i()(null != l && s.clickable, n),
            onClick: l,
          });
        return null == l ? (0, t.jsx)(a.BlockInteractions, { children: u }) : u;
      }
    },
    328731: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = l(735250),
        r = l(120356),
        i = l.n(r),
        a = l(481060),
        s = l(318374),
        u = l(5192),
        o = l(192918),
        c = l(256139),
        d = l(91907),
        m = l(866040),
        p = l(689938),
        E = l(182408);
      function f(e) {
        let { entry: n, channel: l, className: r } = e,
          {
            displayParticipants: f,
            participant1: N,
            participant2: C,
            numOtherParticipants: v,
            orderedParticipants: _,
          } = (0, o.Z)(n),
          h = [N, C];
        return (0, t.jsxs)("div", {
          className: i()(E.container, r),
          children: [
            f.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(m.Z, {
                      participants: _,
                      channel: l,
                      children: (e) =>
                        (0, t.jsx)(a.Clickable, {
                          className: E.clickable,
                          ...e,
                          children: (0, t.jsx)(s.Z, {
                            maxUsers: 3,
                            users: f,
                            size: a.AvatarSizes.SIZE_20,
                            avatarClassName: E.stackedAvatar,
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
              className: i()(E.truncatedText, E.usersHeader),
              scaleFontToUserSetting: !0,
              children: p.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                user0: u.ZP.getName(l.guild_id, l.id, h[0]),
                user1: u.ZP.getName(l.guild_id, l.id, h[1]),
                countOthers: v,
                name0Hook: (e, n) =>
                  (0, t.jsx)(d.Z, { text: e, user: h[0], channel: l }, n),
                name1Hook: (e, n) =>
                  (0, t.jsx)(d.Z, { text: e, user: h[1], channel: l }, n),
                countOthersHook: (e, n) =>
                  (0, t.jsx)(
                    m.Z,
                    {
                      participants: _,
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
          return u;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(793030),
        a = l(256139),
        s = l(866040);
      function u(e) {
        let { user: n, text: l, channel: u, textClassName: o } = e,
          c = (0, r.useMemo)(() => [n], [n]);
        return (0, t.jsx)(s.Z, {
          participants: c,
          channel: u,
          children: (e) =>
            (0, t.jsx)(a.Z, {
              ...e,
              tag: "span",
              children: (0, t.jsx)(i.x, {
                className: o,
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
          return N;
        },
      }),
        l(411104);
      var t = l(735250),
        r = l(470079),
        i = l(442837),
        a = l(481060),
        s = l(239091),
        u = l(751688),
        o = l(184301),
        c = l(103575),
        d = l(210887),
        m = l(5192),
        p = l(981631),
        E = l(303540);
      function f(e) {
        let { participants: n, channel: r } = e;
        return (0, t.jsx)(a.Scroller, {
          className: E.popout,
          children: n.map((e) =>
            (0, t.jsx)(
              u.Z,
              {
                guildId: null == r ? void 0 : r.guild_id,
                user: e,
                nick: m.ZP.getNickname(
                  null == r ? void 0 : r.guild_id,
                  null == r ? void 0 : r.id,
                  e,
                ),
                onContextMenu: (n) => {
                  (0, s.jW)(n, async () => {
                    let { default: n } = await Promise.all([
                      l.e("79695"),
                      l.e("69220"),
                      l.e("46611"),
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
      function N(e) {
        let { children: n, participants: l, channel: s } = e,
          u = (0, i.e7)([d.Z], () => d.Z.theme),
          m = 1 === l.length ? l[0] : null,
          E = (0, r.useCallback)(
            (e) => {
              if (null != m)
                return (0, t.jsx)(c.Z, {
                  ...e,
                  location: "Content Inventory Embed",
                  userId: m.id,
                  guildId: null == s ? void 0 : s.guild_id,
                  channelId: null == s ? void 0 : s.id,
                  analyticsParams: {
                    location: {
                      page: p.ZY5.GUILD_CHANNEL,
                      section: p.jXE.CONTENT_INVENTORY_EMBED,
                    },
                  },
                });
              if (null != l)
                return (0, t.jsx)(f, { participants: l, channel: s });
              throw Error("One of participant or participants is required");
            },
            [s, l, m],
          );
        return (0, t.jsx)(a.ThemeContextProvider, {
          theme: u,
          children: (0, t.jsx)(a.Popout, {
            renderPopout: E,
            preload: () =>
              null != m
                ? (0, o.Z)(m, {
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
      var t = l(735250),
        r = l(481060),
        i = l(374129),
        a = l(639351),
        s = l(908841),
        u = l(410441),
        o = l(206583),
        c = l(689938);
      let d = {
          [o.kG.SPOTIFY]: s.Z,
          [o.kG.CRUNCHYROLL]: r.CrunchyrollNeutralIcon,
          [o.kG.XBOX]: a.Z,
          [o.kG.PLAYSTATION]: i.Z,
        },
        m = {
          [o.kG.SPOTIFY]: () => c.Z.Messages.SPOTIFY,
          [o.kG.CRUNCHYROLL]: () => c.Z.Messages.CRUNCHYROLL,
          [o.kG.XBOX]: () => c.Z.Messages.XBOX,
          [o.kG.PLAYSTATION]: () => c.Z.Messages.PLAYSTATION,
        };
      function p(e) {
        var n;
        let { type: l, "aria-label": r, ...i } = e,
          a = d[l];
        if (null == a) return null;
        let s =
          null != r
            ? r
            : null === (n = m[l]) || void 0 === n
              ? void 0
              : n.call(m);
        return (0, t.jsx)(u.Z, { Icon: a, ...i, "aria-label": s });
      }
    },
    96513: function (e, n, l) {
      var t, r;
      l.d(n, {
        _: function () {
          return t;
        },
      }),
        ((r = t || (t = {}))[(r.EMBED = 1)] = "EMBED");
    },
    52396: function (e, n, l) {
      l.d(n, {
        B: function () {
          return N;
        },
        r: function () {
          return v;
        },
      }),
        l(411104);
      var t = l(735250),
        r = l(470079),
        i = l(512722),
        a = l.n(i),
        s = l(876215),
        u = l(775379),
        o = l(879046),
        c = l(214597),
        d = l(498187),
        m = l(482417),
        p = l(301419),
        E = l(397035);
      let f = r.createContext(void 0);
      function N() {
        let e = r.useContext(f);
        return (
          a()(
            null != e,
            "useEntryDataContext must be used within a EntryDataContextProvider",
          ),
          e
        );
      }
      function C(e) {
        let { entry: n, ...l } = e,
          r = {
            baseEntryData: (0, c.Z)({ entry: n, channel: l.channel }),
            ...l,
          };
        switch (n.content_type) {
          case s.s.TOP_ARTIST:
            return (0, t.jsx)(h, { entry: n, ...r });
          case s.s.TOP_GAME:
            return (0, t.jsx)(x, { entry: n, ...r });
          case s.s.PLAYED_GAME:
            return (0, t.jsx)(T, { entry: n, ...r });
          case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(I, { entry: n, ...r });
          case s.s.LISTENED_SESSION:
            return (0, t.jsx)(g, { entry: n, ...r });
          case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(_, { entry: n, ...r });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function v(e) {
        let { errorFallback: n, ...l } = e;
        return (0, t.jsx)(u.S, {
          fallback: n,
          children: (0, t.jsx)(C, { ...l }),
        });
      }
      function _(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, o.Z)({ entry: n, ...r });
        return (0, t.jsx)(f.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function h(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, p.Z)({ entry: n, ...r });
        return (0, t.jsx)(f.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function x(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(f.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function T(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(f.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function I(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, E.Z)({ entry: n, ...r });
        return (0, t.jsx)(f.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function g(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, m.Z)({ entry: n, ...r });
        return (0, t.jsx)(f.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
    },
    775379: function (e, n, l) {
      l.d(n, {
        S: function () {
          return r;
        },
      }),
        l(47120);
      var t = l(470079);
      class r extends t.PureComponent {
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
        r = l(827498),
        i = l(835473),
        a = l(541716),
        s = l(561308),
        u = l(701488),
        o = l(689938);
      function c(e) {
        let { entry: n } = e,
          l = (0, i.q)(n.extra.application_id),
          c = null == l ? void 0 : l.getIconURL(u.Si.LARGE),
          d = n.extra.activity_name,
          m =
            (0, s.kr)(n) && !(0, s.n2)(n)
              ? o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
          p = {
            onClick: () => {
              t._(r._b.TEXT, a.I.NORMAL, {
                applicationId: n.extra.application_id,
              });
            },
            ariaDescription:
              o.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format(
                { title: d },
              ),
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
          return u;
        },
      });
      var t = l(470079),
        r = l(902704),
        i = l(232567),
        a = l(720202),
        s = l(594174);
      function u(e) {
        let { entry: n, channel: l } = e,
          u = t.useRef([]);
        return (
          t.useEffect(() => {
            if (!(0, r.E)(u.current, n.participants))
              (u.current = n.participants),
                n.participants
                  .filter((e) => null == s.default.getUser(e))
                  .forEach((e) => {
                    null == l.guild_id
                      ? (0, i.PR)(e)
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
          return f;
        },
      });
      var t = l(876215),
        r = l(758713),
        i = l(835473),
        a = l(810568),
        s = l(168524),
        u = l(561308),
        o = l(206583),
        c = l(96513),
        d = l(701488),
        m = l(689938);
      let p = { [r.z.XBOX]: o.kG.XBOX, [r.z.PLAYSTATION]: o.kG.PLAYSTATION },
        E = { [c._.EMBED]: a.m1.Embed };
      function f(e) {
        let n,
          l,
          { entry: r, location: a, baseEntryData: o } = e,
          c = (0, i.q)(r.extra.application_id),
          f = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
          N = r.extra.game_name;
        if (null != r.extra.platform) {
          let e = p[r.extra.platform];
          null != e && (n = { type: e });
        }
        l =
          r.content_type === t.s.PLAYED_GAME
            ? (0, u.kr)(r) && !(0, u.n2)(r)
              ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2
            : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
        let C = E[a],
          v = {
            onClick: (0, s.Z)({
              location: C,
              applicationId: r.extra.application_id,
              source: C,
              trackEntryPointImpression: !0,
              sourceUserId: r.author_id,
            }),
            ariaDescription:
              m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format(
                { gameName: N },
              ),
          };
        return {
          ...o,
          thumbnailUrl: f,
          title: N,
          titleClickable: v,
          thumbnailClickable: v,
          userDescription: l,
          providerIconProps: n,
        };
      }
    },
    482417: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      }),
        l(47120);
      var t = l(423875),
        r = l(740605),
        i = l(206583),
        a = l(616922),
        s = l(689938);
      function u(e) {
        let n,
          { entry: l, baseEntryData: u } = e,
          o = l.extra.entries[0].media,
          c = o.artists[0],
          { title: d, provider: m, image_url: p } = o,
          E = c.name,
          f = {
            onClick: () => (0, r.o)(a.Hw.TRACK, o.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          },
          N = {
            onClick: () => (0, r.o)(a.Hw.ARTIST, c.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: E },
              ),
          };
        return (
          m === t.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
          {
            ...u,
            title: d,
            subtitle: E,
            thumbnailUrl: p,
            titleClickable: f,
            subtitleClickable: N,
            thumbnailClickable: f,
            userDescription:
              s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: n,
          }
        );
      }
    },
    301419: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      });
      var t = l(423875),
        r = l(740605),
        i = l(206583),
        a = l(616922),
        s = l(689938);
      function u(e) {
        let n,
          { entry: l, baseEntryData: u } = e,
          { provider: o, image_url: c } = l.extra.media,
          d = l.extra.artist.name,
          m = {
            onClick: () =>
              (0, r.o)(a.Hw.ALBUM, l.extra.media.external_parent_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: l.extra.media.parent_title },
              ),
          },
          p = {
            onClick: () => (0, r.o)(a.Hw.ARTIST, l.extra.artist.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          };
        return (
          o === t.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
          {
            ...u,
            title: d,
            thumbnailUrl: c,
            titleClickable: p,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription:
              s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
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
      var t = l(470079),
        r = l(835473),
        i = l(81063),
        a = l(591759),
        s = l(561308),
        u = l(206583),
        o = l(701488),
        c = l(689938);
      function d(e) {
        let n,
          { entry: l, baseEntryData: d } = e,
          m = (0, r.q)(l.extra.application_id),
          p = null == m ? void 0 : m.getIconURL(128),
          E = (0, i.getAssetImage)(
            l.extra.application_id,
            l.extra.media_assets_large_image,
            [o.Si.LARGE, o.Si.LARGE],
          ),
          f = l.extra.media_title,
          N = l.extra.media_subtitle,
          C =
            (0, s.kr)(l) && !(0, s.n2)(l)
              ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
              : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
          v = { type: u.kG.CRUNCHYROLL },
          _ = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = a.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [l.extra.url]);
        return (
          null != _ &&
            (n = {
              href: a.Z.format(_),
              ariaDescription:
                c.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format(
                  { title: f },
                ),
            }),
          {
            ...d,
            thumbnailUrl: null != E ? E : p,
            title: f,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: N,
            userDescription: C,
            providerIconProps: v,
          }
        );
      }
    },
    206295: function (e, n, l) {
      l(47120);
      var t = l(470079),
        r = l(688619),
        i = l.n(r);
      l(979590);
      var a = l(442837),
        s = l(866442),
        u = l(607070),
        o = l(220082),
        c = l(981631);
      n.Z = (e) => {
        var n, r, d, m, p, E;
        let f;
        f = l(481060).tokens;
        let N = (0, a.e7)([u.Z], () => u.Z.saturation),
          [C, v] = (0, o.Cf)(
            e,
            null !==
              (E =
                null == f
                  ? void 0
                  : null === (p = f.colors) || void 0 === p
                    ? void 0
                    : null === (m = p.BACKGROUND_FLOATING) || void 0 === m
                      ? void 0
                      : null === (d = m.resolve) || void 0 === d
                        ? void 0
                        : null ===
                              (r = d.call(m, {
                                theme: c.BRd.DARK,
                                saturation: N,
                              })) || void 0 === r
                          ? void 0
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== E
              ? E
              : "#000",
          );
        return t.useMemo(() => {
          let e = (0, s._i)(C),
            n = (0, s._i)(v);
          for (let n = 1; n < 8 && !((0, s.Bd)(e) >= 0.725); n++) {
            e = i()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, s.Bd)(n) >= 0.725); e++) {
            n = i()(n).darken(0.5).num();
          }
          let l = (0, s.Rf)(e);
          return { primaryColor: l, secondaryColor: (0, s.Rf)(n) };
        }, [C, v]);
      };
    },
    410441: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(481060),
        i = l(76927);
      function a(e) {
        let { onClick: n, Icon: l, "aria-label": a } = e,
          s = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          u = (0, t.jsx)(l, {
            color: s.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, t.jsx)("div", {
              className: i.container,
              "aria-label": a,
              children: u,
            })
          : (0, t.jsx)(r.Tooltip, {
              text: a,
              children: (e) =>
                (0, t.jsx)(r.Clickable, {
                  className: i.container,
                  ...e,
                  onClick: n,
                  children: u,
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
          return E;
        },
        af: function () {
          return f;
        },
        tx: function () {
          return N;
        },
      }),
        l(47120);
      var t = l(524846),
        r = l(911969),
        i = l(592125),
        a = l(271383),
        s = l(430824),
        u = l(594174),
        o = l(483360),
        c = l(823379),
        d = l(5192),
        m = l(280501);
      l(892902);
      let p = 1e3;
      function E(e, n, l) {
        let t = i.Z.getChannel(l);
        if (null == t) return [];
        let a = e === r.re.USER_SELECT || e === r.re.MENTIONABLE_SELECT,
          s = e === r.re.ROLE_SELECT || e === r.re.MENTIONABLE_SELECT,
          { users: u, roles: c } = o.ZP.queryMentionResults({
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
          p = u.map((e) => {
            var n;
            let r = d.ZP.getNickname(t.getGuildId(), l, e.user);
            return {
              type: m.tM.USER,
              value: e.user.id,
              label:
                null !== (n = null != r ? r : e.user.globalName) && void 0 !== n
                  ? n
                  : e.user.username,
            };
          });
        return [
          ...p,
          ...c.map((e) => ({ type: m.tM.ROLE, value: e.id, label: e.name })),
        ];
      }
      function f(e, n, l) {
        let t = i.Z.getChannel(n);
        return null == t
          ? []
          : o.ZP.queryApplicationCommandChannelResults({
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
      function N(e, n) {
        let l =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let r = s.Z.getGuild(n);
        return e
          .map((e) => {
            switch (e.type) {
              case t.$.USER: {
                var n;
                let l = u.default.getUser(e.id);
                if (null == l) return null;
                let t = null != r ? a.ZP.getNick(r.id, l.id) : void 0;
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
                if (null == r) return null;
                let n = s.Z.getRole(r.id, e.id);
                if (null == n) return null;
                return { type: m.tM.ROLE, value: n.id, label: n.name };
              }
              case t.$.CHANNEL: {
                if (null == r) return null;
                let n = i.Z.getChannel(e.id);
                if (
                  null == n ||
                  n.guild_id !== r.id ||
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
          return h;
        },
        xX: function () {
          return _;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(911969),
        s = l(970184),
        u = l(987106),
        o = l(927057),
        c = l(574597),
        d = l(378975),
        m = l(413991),
        p = l(12067),
        E = l(676149),
        f = l(861529),
        N = l(770009),
        C = l(889515),
        v = l(751319);
      function _(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case a.re.ACTION_ROW:
                return (0, t.jsx)(C.Z, { ...e, renderComponents: _ }, n);
              case a.re.BUTTON:
                return (0, t.jsx)(u.Z, { ...e }, n);
              case a.re.STRING_SELECT:
                return (0, t.jsx)(d.Z, { ...e }, n);
              case a.re.CHANNEL_SELECT:
                return (0, t.jsx)(o.Z, { ...e }, n);
              case a.re.USER_SELECT:
              case a.re.ROLE_SELECT:
              case a.re.MENTIONABLE_SELECT:
                return (0, t.jsx)(c.Z, { ...e }, n);
              case a.re.INPUT_TEXT:
                return (0, t.jsx)(m.Z, { ...e }, n);
              case a.re.TEXT:
                return (0, t.jsx)(f.Z, { ...e }, n);
              case a.re.MEDIA_GALLERY:
                return (0, t.jsx)(p.Z, { ...e }, n);
              case a.re.SEPARATOR:
                return (0, t.jsx)(E.Z, { ...e }, n);
              case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, t.jsx)(N.Z, { ...e }, n);
            }
          })(e, n.toString()),
        );
      }
      function h(e) {
        let { message: n } = e,
          { components: l } = n;
        return 0 === l.length
          ? null
          : (0, t.jsx)("div", {
              className: i()([
                v.container,
                { [v.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, t.jsx)(s.Il, { message: n, children: _(l) }),
            });
      }
    },
    987106: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(392711),
        s = l(481060),
        u = l(239091),
        o = l(596454),
        c = l(911969),
        d = l(574399),
        m = l(572004),
        p = l(49012),
        E = l(970184),
        f = l(280501),
        N = l(689938),
        C = l(880609);
      function v(e) {
        let { url: n, onSelect: l } = e;
        return m.wS && null != n
          ? (0, t.jsx)(s.Menu, {
              navId: "component-button",
              onClose: u.Zy,
              "aria-label":
                N.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                children: (0, t.jsx)(s.MenuItem, {
                  id: "copy",
                  label:
                    N.Z.Messages
                      .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function _(e) {
        let n;
        let { label: l, style: r, disabled: m, emoji: N, url: _, skuId: h } = e,
          {
            executeStateUpdate: x,
            visualState: T,
            isDisabled: I,
          } = (0, E.Ee)(e),
          g = (0, d.I)(h),
          S = null != h && r === c.ZJ.PREMIUM,
          O = S && (null == g ? void 0 : g.disabled),
          j = S ? (null == g ? void 0 : g.label) : l,
          Z = null != N,
          R = null != j && j.length > 0,
          M = r === c.ZJ.LINK && null != _ && _.length > 0,
          b = T === f.gH.LOADING || (S && null == g);
        return (
          (n = M
            ? () => {
                (0, p.q)({ href: null != _ ? _ : "", shouldConfirm: !0 });
              }
            : S
              ? null != g && !1 === g.disabled
                ? g.onClick
                : a.noop
              : () => x()),
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
            })(r),
            size: s.Button.Sizes.SMALL,
            disabled: m || T === f.gH.DISABLED || I || O,
            onClick: n,
            onContextMenu: (e) => {
              M && (0, u.vq)(e, (e) => (0, t.jsx)(v, { ...e, url: _ }));
            },
            role: M ? "link" : "button",
            children: [
              (0, t.jsxs)("div", {
                className: i()(C.content, { [C.hidden]: b, [C.premium]: S }),
                "aria-hidden": b,
                children: [
                  S
                    ? (0, t.jsx)("div", {
                        className: C.shopIcon,
                        children: (0, t.jsx)(s.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  Z
                    ? (0, t.jsx)(o.Z, {
                        className: i()({ [C.textEmoji]: R }),
                        src: N.src,
                        emojiId: N.id,
                        emojiName: N.name,
                        animated: N.animated,
                      })
                    : null,
                  R
                    ? (0, t.jsx)("div", { className: C.label, children: j })
                    : null,
                  M
                    ? (0, t.jsx)(s.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: C.launchIcon,
                      })
                    : null,
                ],
              }),
              b
                ? (0, t.jsx)("div", {
                    className: C.loading,
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
          return E;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(481060),
        a = l(471445),
        s = l(592125),
        u = l(430824),
        o = l(970184),
        c = l(811654),
        d = l(344991),
        m = l(981631),
        p = l(296555);
      function E(e) {
        var n;
        let { channelTypes: l } = e,
          E = (0, o.CJ)(),
          f =
            null == E
              ? void 0
              : null === (n = E.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          N = s.Z.getChannel(f),
          C = u.Z.getGuild(null == N ? void 0 : N.getGuildId()),
          v = r.useMemo(
            () => (0, c.tx)(e.defaultValues, null == C ? void 0 : C.id, l),
            [e.defaultValues, C, l],
          );
        return (0, t.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, c.af)(e, f, l),
          renderIcon: (e, n) => {
            let l = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == l) return null;
            let r =
              l.type === m.d4z.GUILD_CATEGORY ? i.FolderIcon : (0, a.KS)(l);
            return null != r
              ? (0, t.jsx)(r, {
                  size: "custom",
                  color: "currentColor",
                  width: n,
                  height: n,
                })
              : null;
          },
          renderOptionLabel: (e) =>
            (0, t.jsx)("span", { className: p.label, children: e.label }),
          defaultValues: v,
        });
      }
    },
    574597: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return T;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(866442),
        a = l(481060),
        s = l(129861),
        u = l(91218),
        o = l(829883),
        c = l(518738),
        d = l(14263),
        m = l(592125),
        p = l(430824),
        E = l(158776),
        f = l(594174),
        N = l(970184),
        C = l(280501),
        v = l(811654),
        _ = l(344991),
        h = l(981631),
        x = l(296555);
      function T(e) {
        var n;
        let l = (0, N.CJ)(),
          T =
            null == l
              ? void 0
              : null === (n = l.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          I = m.Z.getChannel(T),
          g = p.Z.getGuild(null == I ? void 0 : I.getGuildId()),
          S = (0, d.Z)(null == g ? void 0 : g.id, v.HI),
          O = r.useMemo(
            () => (0, v.tx)(e.defaultValues, null == g ? void 0 : g.id),
            [e.defaultValues, g],
          );
        return (0, t.jsx)(_.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, v._H)(e.type, n, T),
          renderIcon: (e, n) => {
            let l = n === _.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === C.tM.USER) {
              let r = f.default.getUser(e.value);
              if (null == r) return;
              return (0, t.jsx)(a.Avatar, {
                size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                src: r.getAvatarURL(null == g ? void 0 : g.id, n),
                status: l ? null : E.Z.getStatus(r.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
              var r;
              let l = null != g ? p.Z.getRole(g.id, e.value) : void 0;
              if (null == l || null == g) return;
              let s = (0, o._b)(g, l) ? (0, c.Kz)(l, n) : null;
              return null != s
                ? (0, t.jsx)(u.Z, { ...s })
                : (0, t.jsx)(a.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (r = l.colorString) && void 0 !== r
                        ? r
                        : (0, i.Rf)(h.p6O),
                    height: n,
                    width: n,
                  });
            }
          },
          renderOptionLabel: (e) => {
            let n = null;
            if (e.type === C.tM.USER) {
              let l = f.default.getUser(e.value);
              null != l &&
                (n = (0, t.jsx)(s.Z, {
                  className: x.tag,
                  usernameClass: x.username,
                  discriminatorClass: x.discriminator,
                  botClass: x.bot,
                  user: l,
                  forceUsername: !0,
                }));
            } else if (e.type === C.tM.ROLE) {
              let l = null != g ? p.Z.getRole(g.id, e.value) : void 0,
                r = null == l ? null : null == S ? void 0 : S[l.id];
              null != r &&
                (n = (0, t.jsxs)("div", {
                  className: x.roleCountContainer,
                  children: [
                    (0, t.jsx)(a.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: x.roleCountIcon,
                    }),
                    (0, t.jsx)("span", {
                      className: x.roleCountText,
                      children: r,
                    }),
                  ],
                }));
            }
            return (0, t.jsxs)("span", {
              className: x.label,
              children: [
                (0, t.jsx)("span", {
                  className: x.labelText,
                  children: e.label,
                }),
                n,
              ],
            });
          },
          defaultValues: O,
        });
      }
    },
    344991: function (e, n, l) {
      l.d(n, {
        ZP: function () {
          return v;
        },
        tE: function () {
          return t;
        },
      }),
        l(47120);
      var t,
        r,
        i = l(735250),
        a = l(470079),
        s = l(120356),
        u = l.n(s),
        o = l(481060),
        c = l(911969),
        d = l(868819),
        m = l(970184),
        p = l(280501),
        E = l(689938),
        f = l(758183),
        N = l(252443);
      function C(e) {
        let { icon: n, iconSize: l } = e;
        return (0, i.jsx)("div", {
          className: f.iconContainer,
          style: { height: l, width: l },
          children: n,
        });
      }
      function v(e) {
        let {
            selectActionComponent: n,
            queryOptions: l,
            renderIcon: t,
            renderOptionLabel: r,
            defaultValues: s,
          } = e,
          { type: v, placeholder: _, maxValues: h, disabled: x } = n,
          [T, I] = a.useState(!1),
          [g, S] = a.useState(!1),
          [O, j] = a.useState(
            new Map(null == s ? void 0 : s.map((e) => [e.value, e])),
          ),
          [Z, R] = a.useState(new Set(O.keys())),
          [M, b] = a.useState(() => (null != s ? s : []).map((e) => e.value)),
          [A, L] = a.useState(0);
        a.useEffect(() => {
          let e = (null != s ? s : []).map((e) => e.value);
          if (e.every((e) => M.includes(e)) && M.every((n) => e.includes(n)))
            return;
          b(e);
          let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
          j(n), R(new Set(n.keys())), L((e) => e + 1);
        }, [s, M]);
        let {
            state: P,
            executeStateUpdate: y,
            visualState: k,
            isDisabled: U,
            error: D,
          } = (0, m.Ee)(n, {
            type: v,
            selectedOptions: Array.from(O.values()),
          }),
          G = k === p.gH.LOADING;
        a.useEffect(() => {
          if (
            (null == P ? void 0 : P.type) === c.re.USER_SELECT ||
            (null == P ? void 0 : P.type) === c.re.ROLE_SELECT ||
            (null == P ? void 0 : P.type) === c.re.MENTIONABLE_SELECT ||
            (null == P ? void 0 : P.type) === c.re.CHANNEL_SELECT
          ) {
            let e = new Map(P.selectedOptions.map((e) => [e.value, e]));
            j(e), R(new Set(e.keys()));
          }
        }, [P]);
        let Y = a.useCallback(() => {
          y({ type: v, selectedOptions: Array.from(O.values()) }) &&
            R(new Set(O.keys()));
        }, [y, v, O]);
        a.useEffect(() => {
          if (
            !(
              T ||
              g ||
              (O.size === Z.size && Array.from(O.keys()).every((e) => Z.has(e)))
            )
          )
            Y();
        }, [T, g, Z, O, Y]);
        let w = 0 === O.size || T,
          B = {
            isDisabled: x || U,
            wrapperClassName: f.select,
            options: (e) =>
              new Promise((n) => {
                n(l(e));
              }),
            placeholder: w
              ? null != _
                ? _
                : E.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER
              : void 0,
            onClose: () => I(!1),
            onOpen: () => I(!0),
            onBlur: () => S(!1),
            maxVisibleItems: 5,
            optionClassName: f.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
              let { inPill: l } = n,
                r = l ? 16 : 24,
                a = t(e, r);
              return null != a ? (0, i.jsx)(C, { icon: a, iconSize: r }) : null;
            },
            renderOptionLabel: r,
          };
        return (0, i.jsxs)(a.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: f.container,
              children: [
                h > 1
                  ? (0, i.jsx)(
                      o.SearchableSelect,
                      {
                        className: f.badges,
                        value: Array.from(O.values()),
                        onChange: (e) => {
                          !T && S(!0), j(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: u()({
                          [f.soloInput]: 0 === O.size,
                          [f.inlineInput]: O.size > 0,
                          [f.hidden]: !w,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...B,
                      },
                      A,
                    )
                  : (0, i.jsx)(
                      o.SearchableSelect,
                      {
                        className: (f.badges, f.singleSelect),
                        value: [...O.values()][0],
                        onChange: (e) =>
                          j(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...B,
                      },
                      A,
                    ),
                G
                  ? (0, i.jsx)("div", {
                      className: f.loading,
                      children: (0, i.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != D
              ? (0, i.jsx)(d.st, { ...(0, d.c4)(D), className: N.error })
              : null,
          ],
        });
      }
      ((r = t || (t = {}))[(r.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"),
        (r[(r.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE");
    },
    378975: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return v;
        },
      }),
        l(47120);
      var t = l(735250),
        r = l(470079),
        i = l(120356),
        a = l.n(i),
        s = l(481060),
        u = l(596454),
        o = l(911969),
        c = l(868819),
        d = l(970184),
        m = l(280501),
        p = l(689938),
        E = l(252443);
      function f(e) {
        let {
            emoji: n,
            label: l,
            description: r,
            isDisabled: i,
            isOffset: s,
          } = e,
          o = a()(E.labelContainer, {
            [E.disabled]: i,
            [E.offset]: null == n && s,
          });
        return (0, t.jsxs)("div", {
          className: E.option,
          children: [
            null != n
              ? (0, t.jsx)(u.Z, {
                  className: E.emoji,
                  emojiId: n.id,
                  emojiName: n.name,
                  animated: n.animated,
                })
              : null,
            (0, t.jsxs)("div", {
              className: o,
              children: [
                (0, t.jsx)("strong", { className: E.label, children: l }),
                null != r
                  ? (0, t.jsx)("span", {
                      className: E.description,
                      children: r,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function N(e) {
        let { emoji: n, label: l } = e;
        return (0, t.jsx)("div", {
          className: E.option,
          children: (0, t.jsxs)("div", {
            className: a()(E.value, E.singleValue),
            children: [
              null != n
                ? (0, t.jsx)(u.Z, {
                    className: E.emoji,
                    src: n.src,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: n.animated,
                  })
                : null,
              (0, t.jsx)("span", {
                className: E.singleValueLabel,
                children: l,
              }),
            ],
          }),
        });
      }
      function C(e) {
        let { options: n } = e;
        return (0, t.jsx)("div", {
          className: E.option,
          children: (0, t.jsx)("div", {
            className: E.value,
            children: n.map((e, n) =>
              (0, t.jsxs)(
                "div",
                {
                  className: E.optionTag,
                  children: [
                    null != e.emoji
                      ? (0, t.jsx)(u.Z, {
                          className: E.smallEmoji,
                          src: e.emoji.src,
                          emojiId: e.emoji.id,
                          emojiName: e.emoji.name,
                          animated: e.emoji.animated,
                        })
                      : null,
                    (0, t.jsx)(
                      "span",
                      { className: E.tag, children: e.label },
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
      function v(e) {
        let {
            type: n,
            options: l,
            id: i,
            placeholder: a,
            maxValues: u,
            minValues: v,
            disabled: _,
          } = e,
          h = r.useMemo(
            () => l.filter((e) => e.default).map((e) => e.value),
            [l],
          ),
          {
            state: x,
            executeStateUpdate: T,
            visualState: I,
            isDisabled: g,
            error: S,
          } = (0, d.Ee)(e, { type: n, values: h }),
          O = u > 1,
          j = I === m.gH.LOADING,
          [Z, R] = r.useState(!1),
          [M, b] = r.useState(
            () => new Set(l.filter((e) => e.default).map((e) => e.value)),
          ),
          [A, L] = r.useState(M),
          P = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
        r.useEffect(() => {
          if ((null == x ? void 0 : x.type) === o.re.STRING_SELECT) {
            let e = new Set(x.values);
            b(e), L(e);
          } else {
            let e = new Set(h);
            b(e), L(e);
          }
        }, [i, h, x]);
        let y = r.useCallback(() => {
          if (A !== M)
            T({ type: o.re.STRING_SELECT, values: Array.from(M) }) && L(M);
        }, [M, A, L, T]);
        r.useEffect(() => {
          if (
            !(Z || (M.size === A.size && Array.from(A).every((e) => M.has(e))))
          )
            y();
        }, [Z, M, A, y]);
        let k = s.singleSelect;
        O ? (k = s.multiSelect) : 0 === v && (k = s.toggleSelect);
        let U = (0, s.useVariableSelect)({
          value: M,
          onChange: (e) => b(e),
          onSelectInteraction: k,
        });
        return (0, t.jsxs)(r.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: E.container,
              children: [
                (0, t.jsx)(s.Select, {
                  isDisabled: _ || g,
                  className: E.select,
                  options: l.map((e) => ({
                    ...e,
                    disabled: O && !M.has(e.value) && M.size === u,
                  })),
                  placeholder:
                    null != a
                      ? a
                      : p.Z.Messages
                          .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                  onClose: () => R(!1),
                  onOpen: () => R(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !O,
                  optionClassName: E.selectOption,
                  renderOptionLabel: (e) =>
                    (0, t.jsx)(f, {
                      ...e,
                      isDisabled: O && !M.has(e.value) && M.size === u,
                      isOffset: P,
                    }),
                  renderOptionValue: (e) =>
                    O
                      ? (0, t.jsx)(C, { options: e })
                      : (0, t.jsx)(N, { ...e[0] }),
                  ...U,
                }),
                j
                  ? (0, t.jsx)("div", {
                      className: E.__invalid_loading,
                      children: (0, t.jsx)(s.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != S
              ? (0, t.jsx)(c.st, { ...(0, c.c4)(S), className: E.error })
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
      var t = l(735250),
        r = l(470079),
        i = l(481060),
        a = l(911969),
        s = l(970184),
        u = l(293979),
        o = l(203079);
      function c(e) {
        let n;
        let {
            type: l,
            style: c,
            label: d,
            placeholder: m,
            minLength: p,
            maxLength: E,
            required: f,
            value: N,
          } = e,
          [C, v] = r.useState(null != N ? N : ""),
          {
            state: _,
            executeStateUpdate: h,
            error: x,
          } = (0, s.Ee)(e, null != N ? { type: l, value: N } : void 0),
          T = (0, u.hz)(e.id);
        r.useEffect(() => {
          (null == _ ? void 0 : _.type) === l && v(_.value);
        }, [l, _]);
        let I = {
          name: d,
          value: C,
          placeholder: m,
          minLength: p,
          maxLength: E,
          required: f,
          onChange: (e) => {
            v(e), h({ type: l, value: e });
          },
          autoFocus: T,
        };
        switch (c) {
          case a.FO.SMALL:
            n = (0, t.jsx)(i.TextInput, { ...I });
            break;
          case a.FO.PARAGRAPH:
            n = (0, t.jsx)(i.TextArea, { ...I });
        }
        return (0, t.jsx)(i.FormItem, {
          title: d,
          required: f,
          className: o.formItem,
          error: x,
          children: n,
        });
      }
    },
    12067: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return N;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(442837),
        i = l(169525),
        a = l(611170),
        s = l(128854),
        u = l(884182),
        o = l(546432),
        c = l(780088),
        d = l(592125),
        m = l(52824),
        p = l(823379),
        E = l(970184),
        f = l(981631);
      function N(e) {
        let { message: n } = (0, E.CJ)(),
          l = (0, r.e7)([d.Z], () =>
            d.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: N,
            shouldRedactExplicitContent: C,
            gifAutoPlay: v,
            getGifFavButton: _,
            getOnMediaItemContextMenu: h,
          } = (0, s.c)();
        if (null == n || null == l) return null;
        let x = e.items
            .map((e) => (0, c.j0)(e.media, f.VqG, N, C))
            .filter(p.lm),
          T = {
            source: "Media Mosaic",
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type,
          },
          I = x.length > 1 ? (0, c.Cx)(x, T) : {};
        function g(e, n) {
          let l = e.originalItem;
          return (0, i.lK)(l.media, n, l.spoiler);
        }
        let S = e.items.map((e) => {
          let l = e.media,
            t = null == h ? void 0 : h(l),
            r = {
              message: n,
              item: {
                uniqueId: l.proxyUrl,
                originalItem: e,
                type: (0, o.pU)(l, !0),
                downloadUrl: l.url,
                height: l.height,
                width: l.width,
                spoiler: e.spoiler,
                contentType: l.contentType,
              },
              onContextMenu: t,
              autoPlayGif: v,
              getObscureReason: g,
              renderImageComponent: a.a,
              renderVideoComponent: a.r,
              renderAudioComponent: f.dG4,
              renderPlaintextFilePreview: f.dG4,
              renderGenericFileComponent: f.dG4,
              renderMosaicItemFooter: f.dG4,
              gifFavoriteButton: _(l),
              onPlay: (e, n, l) => {},
              canRemoveItem: !1,
              onRemoveItem: f.dG4,
            },
            i = (0, m.q)({ proxyURL: l.proxyUrl, url: l.url });
          return i in I && (r.onClick = I[i]), r;
        });
        return (0, t.jsx)("div", { children: (0, t.jsx)(u.Z, { items: S }) });
      }
    },
    676149: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(911969),
        s = l(178519);
      function u(e) {
        let { divider: n, spacing: l } = e;
        return (0, t.jsx)("div", {
          className: i()({
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
      var t = l(735250),
        r = l(470079),
        i = l(120356),
        a = l.n(i),
        s = l(454585),
        u = l(937889),
        o = l(970184),
        c = l(870456),
        d = l(869261),
        m = l(910212);
      function p(e) {
        let { content: n, className: l } = e,
          i = (function (e) {
            let n = (0, o.CJ)();
            return (0, r.useMemo)(() => {
              let l;
              return null === n
                ? null
                : ((l =
                    null != n.message
                      ? (0, u.rs)(n.message, c.u)
                      : (0, u.p6)({
                          channelId: n.channelId,
                          renderOptions: c.u,
                        })),
                  s.Z.parse(e, !0, l));
            }, [e, n]);
          })(n);
        return (0, t.jsx)("div", {
          className: a()([l, m.markup, d.markdownContainer]),
          children: i,
        });
      }
    },
    770009: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(512722),
        i = l.n(r),
        a = l(442837),
        s = l(52396),
        u = l(592125),
        o = l(970184),
        c = l(151200),
        d = l(96513);
      function m(e) {
        let { contentInventoryEntry: n, channel: l } = e,
          { parsedEntry: r } = (0, s.B)();
        return (0, t.jsx)(c.Z, { ...r, entry: n, channel: l });
      }
      function p(e) {
        let n = (0, o.CJ)();
        i()(
          null != n,
          "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
        );
        let { channelId: l } = n,
          r = (0, a.e7)([u.Z], () => u.Z.getChannel(l));
        return (
          i()(null != r, "channel must be defined"),
          (0, t.jsx)(s.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: r,
            errorFallback: null,
            children: (0, t.jsx)(m, { ...e, channel: r }),
          })
        );
      }
    },
    151200: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(481060),
        s = l(328731),
        u = l(442550),
        o = l(435439),
        c = l(206295),
        d = l(297781),
        m = l(313201),
        p = l(231338),
        E = l(689938),
        f = l(917056),
        N = l(671656);
      function C(e) {
        let {
            className: n,
            clickableClassName: l,
            clickable: r,
            children: s,
          } = e,
          u = (0, m.Dt)();
        if (null != r && "href" in r) {
          let { ariaDescription: e, href: o } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(a.HiddenVisually, { id: u, children: e }),
              (0, t.jsx)(a.Anchor, {
                className: i()(n, l),
                href: o,
                "aria-describedby": u,
                children: s,
              }),
            ],
          });
        }
        let { onClick: o, ariaDescription: c } = null != r ? r : {};
        return (0, t.jsxs)(a.BlockInteractionsContext.Provider, {
          value: null == o,
          children: [
            null != o &&
              null != c &&
              (0, t.jsx)(a.HiddenVisually, { id: u, children: c }),
            (0, t.jsx)(a.Clickable, {
              onClick: o,
              "aria-describedby": null == o ? void 0 : u,
              className: i()(n, null != o && l),
              children: s,
            }),
          ],
        });
      }
      function v(e) {
        let { clickable: n, ...l } = e;
        return (0, t.jsx)(C, {
          ...l,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: N.clickable,
        });
      }
      function _(e) {
        let {
            entry: n,
            channel: l,
            title: r,
            subtitle: N,
            thumbnailUrl: _,
            titleClickable: h,
            subtitleClickable: x,
            thumbnailClickable: T,
            providerIconProps: I,
            style: g = {},
          } = e,
          S = (0, m.Dt)(),
          { primaryColor: O, secondaryColor: j } = (0, c.Z)(_);
        return (
          null != _ &&
            (g.background = "linear-gradient(45deg, "
              .concat(O, ", ")
              .concat(j, ")")),
          (0, t.jsx)(a.ThemeProvider, {
            theme: p.BR.DARK,
            children: (e) =>
              (0, t.jsxs)("figure", {
                "aria-roledescription":
                  E.Z.Messages
                    .CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                "aria-labelledby": S,
                "data-disable-adaptive-theme": !0,
                className: i()(f.container, e),
                style: g,
                children: [
                  (0, t.jsx)(C, {
                    className: f.thumbnailContainer,
                    clickableClassName: f.clickable,
                    clickable: T,
                    children: (0, t.jsx)(u.f, {
                      src: _,
                      constrain: "width",
                      size: 64,
                      "aria-hidden": !0,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: f.infoContainer,
                    children: [
                      (0, t.jsx)(s.Z, {
                        channel: l,
                        entry: n,
                        className: f.users,
                      }),
                      (0, t.jsx)(a.Spacer, { size: 2 }),
                      (0, t.jsx)(v, {
                        clickable: h,
                        className: f.clickableText,
                        children: (0, t.jsx)(a.Heading, {
                          id: S,
                          variant: "heading-md/medium",
                          lineClamp: 1,
                          className: i()(f.textPrimary, f.truncatedText),
                          scaleFontToUserSetting: !0,
                          children: r,
                        }),
                      }),
                      null != N
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(a.Spacer, { size: 2 }),
                              (0, t.jsx)(v, {
                                clickable: x,
                                className: f.clickableText,
                                children: (0, t.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  className: i()(
                                    f.textSecondary,
                                    f.truncatedText,
                                  ),
                                  lineClamp: 1,
                                  scaleFontToUserSetting: !0,
                                  children: N,
                                }),
                              }),
                            ],
                          })
                        : null,
                      (0, t.jsx)(d.PZ, {
                        className: f.badges,
                        entry: n,
                        location: d.Gt.EMBED,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: f.headerIcons,
                    children: null != I ? (0, t.jsx)(o.Z, { ...I }) : null,
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
      var t = l(735250);
      l(470079);
      var r = l(868819),
        i = l(970184),
        a = l(53887);
      function s(e) {
        let { components: n, renderComponents: l } = e,
          { message: s } = (0, i.CJ)();
        return null == n || 0 === n.length
          ? null
          : (0, t.jsxs)("div", {
              className: a.container,
              children: [
                (0, t.jsx)("div", { className: a.children, children: l(n) }),
                null != s
                  ? (0, t.jsx)(r.ZP, {
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
          return a;
        },
        r: function () {
          return s;
        },
      });
      var t = l(591759),
        r = l(524444),
        i = l(231338);
      function a(e) {
        let n = e.item.originalItem.media;
        return (0, r.Yi)({
          ...e,
          alt: e.item.originalItem.description,
          src: n.proxyUrl,
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholderVersion,
          renderForwardComponent: i.Vq,
        });
      }
      function s(e) {
        let n = e.item.originalItem.media,
          l = t.Z.toURLSafe(n.proxyUrl);
        return null == l
          ? null
          : (l.searchParams.append("format", "webp"),
            (0, r.lV)({
              ...e,
              poster: l.toString(),
              alt: e.item.originalItem.description,
              src: n.proxyUrl,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholderVersion,
              renderForwardComponent: i.Vq,
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
      var t = l(735250),
        r = l(470079);
      let i = r.createContext(null);
      function a() {
        let e = r.useContext(i);
        if (null == e)
          throw Error(
            "Could not find context for useMessageAccessoriesComponentContext.",
          );
        return e;
      }
      function s(e) {
        let { children: n, ...l } = e;
        return (0, t.jsx)(i.Provider, { value: l, children: n });
      }
    },
    908841: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(325767);
      function i(e) {
        let {
          width: n = 20,
          height: l = 20,
          color: i = "currentColor",
          ...a
        } = e;
        return (0, t.jsx)("svg", {
          ...(0, r.Z)(a),
          width: n,
          height: l,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: i,
          }),
        });
      }
    },
    524846: function (e, n, l) {
      var t, r;
      l.d(n, {
        $: function () {
          return t;
        },
      }),
        ((r = t || (t = {})).USER = "user"),
        (r.ROLE = "role"),
        (r.CHANNEL = "channel");
    },
  },
]);
//# sourceMappingURL=5542e38d0e784dc5519b.js.map
