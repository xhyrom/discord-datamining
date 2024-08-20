"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30243"],
  {
    99981: function (e, n, l) {
      l.d(n, {
        q: function () {
          return o;
        },
      });
      var t = l(481060),
        r = l(522474),
        i = l(592125),
        a = l(403404),
        s = l(701488),
        u = l(981631);
      async function o(e) {
        let {
          analyticsLocations: n,
          channelId: l,
          guildId: o,
          locationObject: c,
          initialSlide: d = s.ag.DIRECTORY,
          initialSelectedApplicationId: m,
        } = e;
        if ((0, t.hasModalOpen)(s.AC)) return;
        let f = i.Z.getChannel(l),
          E = r.Z.getWindowOpen(u.KJ3.CHANNEL_CALL_POPOUT);
        await (0, a.Z)({
          analyticsLocations: n,
          channel: f,
          guildId: o,
          openInPopout: E,
          initialSlide: d,
          initialSelectedApplicationId: m,
          locationObject: null != c ? c : {},
        });
      }
    },
    403404: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(481060),
        i = l(424602),
        a = l(397698),
        s = l(776862),
        u = l(701488),
        o = l(981631);
      function c(e) {
        let {
            channel: n,
            guildId: c,
            locationObject: d,
            openInPopout: m,
            initialSelectedApplicationId: f,
            initialSlide: E = u.ag.DIRECTORY,
            enableSelectedTextChannelInvite: p = !1,
            analyticsLocations: C,
            opensAppLauncherModal: N = !1,
          } = e,
          v = C.length > 0 ? C[C.length - 1] : "open-activity-shelf",
          { enabled: _ } = i.m1.getCurrentConfig(
            { location: v },
            { autoTrackExposure: !1 },
          );
        if (N && _) {
          null != n &&
            (0, a.Z)({ openInPopout: m, channel: n, analyticsLocation: v });
          return;
        }
        m && (0, s.Z)(o.KJ3.CHANNEL_CALL_POPOUT);
        let T = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        return (0, r.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              l.e("64714"),
              l.e("64430"),
            ]).then(l.bind(l, 471840));
            return (l) =>
              (0, t.jsx)(e, {
                ...l,
                channel: n,
                guildId: c,
                locationObject: d,
                initialSlide: E,
                initialSelectedApplicationId: f,
                enableSelectedTextChannelInvite: p,
                analyticsLocations: C,
              });
          },
          { modalKey: u.AC, contextKey: T },
        );
      }
    },
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
      function r(e, n) {
        t.Z.dispatch({
          type: "APP_LAUNCHER_SHOW",
          entrypoint: e,
          activeViewType: n,
        });
      }
      function i(e) {
        t.Z.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
      }
    },
    314734: function (e, n, l) {
      var t, r;
      l.d(n, {
        Gy: function () {
          return u;
        },
        Jh: function () {
          return i;
        },
        K7: function () {
          return o;
        },
        bS: function () {
          return t;
        },
        e9: function () {
          return a;
        },
        lv: function () {
          return c;
        },
        t4: function () {
          return s;
        },
        u$: function () {
          return d;
        },
      }),
        ((r = t || (t = {}))[(r.POPULAR = 0)] = "POPULAR"),
        (r[(r.ALPHABETICAL = 1)] = "ALPHABETICAL");
      let i = "app-launcher-element",
        a = "app-launcher-modal",
        s = "app-launcher-entrypoint",
        u = 500,
        o = 668,
        c = "min(100vh, ".concat(o, "px)"),
        d = {
          "--custom-app-launcher-width": "".concat(u, "px"),
          "--custom-app-launcher-height": c,
        };
    },
    397698: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(481060),
        i = l(776862),
        a = l(306680),
        s = l(626135),
        u = l(499254),
        o = l(827498),
        c = l(314734),
        d = l(981631);
      function m(e) {
        let { channel: n, openInPopout: m, analyticsLocation: f } = e;
        m && (0, i.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
        let E = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        (0, u.y)(o.ti.DISMISSED), (0, u._)(o._b.VOICE);
        let p = n.id,
          C = a.ZP.hasUnread(p) || a.ZP.getMentionCount(p) > 0;
        return (
          s.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: f,
            source: o._b.VOICE,
            is_chat_badged: C,
          }),
          (0, r.openModalLazy)(
            async () => {
              let { default: e } = await Promise.all([
                l.e("64714"),
                l.e("21351"),
                l.e("38536"),
              ]).then(l.bind(l, 743161));
              return (l) => (0, t.jsx)(e, { channel: n, ...l });
            },
            { modalKey: c.e9, contextKey: E },
          )
        );
      }
    },
    574399: function (e, n, l) {
      l.d(n, {
        I: function () {
          return h;
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
        f = l(509545),
        E = l(55563),
        p = l(551428),
        C = l(937615),
        N = l(147496),
        v = l(519896),
        _ = l(981631),
        T = l(689938);
      function h(e) {
        r.useEffect(() => {
          if (null != e) (0, s.$N)("", e), (0, u.km)(e);
        }, [e]);
        let n = (0, i.e7)([E.Z], () => (null != e ? E.Z.get(e) : void 0), [e]);
        r.useEffect(() => {
          (null == n ? void 0 : n.type) === _.epS.SUBSCRIPTION &&
            (0, o.GZ)(n.id);
        }, [n]);
        let l = (0, i.Wu)([f.Z], () => (null != e ? f.Z.getForSKU(e) : []), [
            e,
          ]),
          h = r.useMemo(
            () => (null != l ? l.map((e) => e.id)[0] : void 0),
            [l],
          ),
          I = (0, i.e7)([p.Z], () => (null != e ? p.Z.getForSKU(e) : void 0), [
            e,
          ]);
        r.useEffect(() => {
          if (null != h) (0, c.vY)(h);
        }, [h]);
        let x = null == n ? void 0 : n.applicationId,
          O = (0, i.e7)(
            [d.Z],
            () =>
              null != x
                ? d.Z.getSubscriptionGroupListingForApplication(x)
                : null,
            [x],
          ),
          S = r.useCallback(() => {
            if (
              (null == n ? void 0 : n.applicationId) == null ||
              (null == n ? void 0 : n.id) == null ||
              (null == O ? void 0 : O.id) == null ||
              (null == O ? void 0 : O.sku_flags) == null
            )
              return null;
            (0, a.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(v.SubscriptionDetailsModal, {
                appId: n.applicationId,
                groupListingId: O.id,
                groupListingType: (0, m.KW)(O.sku_flags) ? "user" : "guild",
                onClose: l,
                skuId: n.id,
                transitionState: r,
              });
            });
          }, [
            null == n ? void 0 : n.applicationId,
            null == n ? void 0 : n.id,
            null == O ? void 0 : O.id,
            null == O ? void 0 : O.sku_flags,
          ]),
          g = r.useCallback(() => {
            if (null == n) return null;
            (0, a.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(N.ItemDetailsModal, {
                appId: n.applicationId,
                skuId: n.id,
                onClose: l,
                transitionState: r,
              });
            });
          }, [n]);
        if (
          null != n &&
          null != I &&
          (null == n || n.type !== _.epS.SUBSCRIPTION || null != O)
        ) {
          if (null == e || (null != n && !n.available))
            return {
              disabled: !0,
              label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
            };
          if (n.type === _.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
              return {
                disabled: !0,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              };
            let e = l[0];
            return {
              disabled: !1,
              label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                skuName: n.name,
                price: (0, C.T4)(e.price, e.currency),
              }),
              onClick: S,
            };
          }
          return null == n.price
            ? {
                disabled: !0,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              }
            : {
                disabled: !1,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                  skuName: n.name,
                  price: (0, C.T4)(n.price.amount, n.price.currency),
                }),
                onClick: g,
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
          return E;
        },
      });
      var t = l(735250),
        r = l(120356),
        i = l.n(r),
        a = l(481060),
        s = l(318374),
        u = l(171368),
        o = l(5192),
        c = l(192918),
        d = l(256139),
        m = l(689938),
        f = l(182408);
      function E(e) {
        let { entry: n, channel: l, className: r } = e,
          {
            displayParticipants: E,
            participant1: p,
            participant2: C,
            numOtherParticipants: N,
          } = (0, c.Z)(n, 3),
          v = [p, C];
        return (0, t.jsxs)("div", {
          className: i()(f.container, r),
          children: [
            E.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(s.Z, {
                      maxUsers: 3,
                      users: E,
                      size: a.AvatarSizes.SIZE_20,
                      avatarClassName: f.stackedAvatar,
                      hideOverflowCount: !0,
                      disableUsernameTooltip: !0,
                    }),
                    (0, t.jsx)(a.Spacer, { size: 6, horizontal: !0 }),
                  ],
                })
              : null,
            (0, t.jsx)(a.Heading, {
              variant: "text-sm/semibold",
              className: i()(f.textSecondary, f.truncatedText, f.usersHeader),
              scaleFontToUserSetting: !0,
              children: m.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
                user1: o.ZP.getName(l.guild_id, l.id, v[0]),
                user2: o.ZP.getName(l.guild_id, l.id, v[1]),
                countOthers: N,
                nameHook: (e, n) =>
                  (0, t.jsx)(d.Z, {
                    tag: "span",
                    onClick: () =>
                      (0, u.openUserProfileModal)({
                        userId: v[parseInt(n)].id,
                      }),
                    children: (0, t.jsx)(
                      a.Text,
                      {
                        variant: "text-sm/semibold",
                        className: i()(f.textPrimary, f.truncatedText),
                        lineClamp: 1,
                        scaleFontToUserSetting: !0,
                        children: e,
                      },
                      n,
                    ),
                  }),
              }),
            }),
          ],
        });
      }
    },
    435439: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
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
      function f(e) {
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
          return C;
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
        f = l(301419),
        E = l(397035);
      let p = r.createContext(void 0);
      function C() {
        let e = r.useContext(p);
        return (
          a()(
            null != e,
            "useEntryDataContext must be used within a EntryDataContextProvider",
          ),
          e
        );
      }
      function N(e) {
        let { entry: n, ...l } = e,
          r = {
            baseEntryData: (0, c.Z)({ entry: n, channel: l.channel }),
            ...l,
          };
        switch (n.content_type) {
          case s.s.TOP_ARTIST:
            return (0, t.jsx)(T, { entry: n, ...r });
          case s.s.TOP_GAME:
            return (0, t.jsx)(h, { entry: n, ...r });
          case s.s.PLAYED_GAME:
            return (0, t.jsx)(I, { entry: n, ...r });
          case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(x, { entry: n, ...r });
          case s.s.LISTENED_SESSION:
            return (0, t.jsx)(O, { entry: n, ...r });
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
          children: (0, t.jsx)(N, { ...l }),
        });
      }
      function _(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, o.Z)({ entry: n, ...r });
        return (0, t.jsx)(p.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function T(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, f.Z)({ entry: n, ...r });
        return (0, t.jsx)(p.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function h(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(p.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function I(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(p.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function x(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, E.Z)({ entry: n, ...r });
        return (0, t.jsx)(p.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function O(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, m.Z)({ entry: n, ...r });
        return (0, t.jsx)(p.Provider, {
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
          return m;
        },
      });
      var t = l(442837),
        r = l(2052),
        i = l(99981),
        a = l(906732),
        s = l(835473),
        u = l(914010),
        o = l(561308),
        c = l(701488),
        d = l(689938);
      function m(e) {
        let { entry: n } = e,
          l = (0, s.q)(n.extra.application_id),
          m = null == l ? void 0 : l.getIconURL(c.Si.LARGE),
          f = (0, t.e7)([u.Z], () => u.Z.getGuildId()),
          E = n.extra.activity_name,
          p = (0, r.O)(),
          { analyticsLocations: C } = (0, a.ZP)(),
          N =
            (0, o.kr)(n) && !(0, o.n2)(n)
              ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
              : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
          v = {
            onClick: () => {
              null != f &&
                (0, i.q)({
                  guildId: f,
                  channelId: void 0,
                  locationObject: p.location,
                  initialSelectedApplicationId: n.extra.application_id,
                  initialSlide: c.ag.SELECT_CHANNEL,
                  analyticsLocations: C,
                });
            },
            ariaDescription:
              d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format(
                { title: E },
              ),
          };
        return {
          thumbnailUrl: m,
          title: E,
          titleClickable: v,
          thumbnailClickable: v,
          userDescription: N,
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
          return p;
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
      let f = { [r.z.XBOX]: o.kG.XBOX, [r.z.PLAYSTATION]: o.kG.PLAYSTATION },
        E = { [c._.EMBED]: a.m1.Embed };
      function p(e) {
        let n,
          l,
          { entry: r, location: a, baseEntryData: o } = e,
          c = (0, i.q)(r.extra.application_id),
          p = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
          C = r.extra.game_name;
        if (null != r.extra.platform) {
          let e = f[r.extra.platform];
          null != e && (n = { type: e });
        }
        l =
          r.content_type === t.s.PLAYED_GAME
            ? (0, u.kr)(r) && !(0, u.n2)(r)
              ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
              : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED
            : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED;
        let N = E[a],
          v = {
            onClick: (0, s.Z)({
              location: N,
              applicationId: r.extra.application_id,
              source: N,
              trackEntryPointImpression: !0,
              sourceUserId: r.author_id,
            }),
            ariaDescription:
              m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format(
                { gameName: C },
              ),
          };
        return {
          ...o,
          thumbnailUrl: p,
          title: C,
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
          { title: d, provider: m, image_url: f } = o,
          E = c.name,
          p = {
            onClick: () => (0, r.o)(a.Hw.TRACK, o.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          },
          C = {
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
            thumbnailUrl: f,
            titleClickable: p,
            subtitleClickable: C,
            thumbnailClickable: p,
            userDescription:
              s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
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
          f = {
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
            titleClickable: f,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription:
              s.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
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
          f = null == m ? void 0 : m.getIconURL(128),
          E = (0, i.getAssetImage)(
            l.extra.application_id,
            l.extra.media_assets_large_image,
            [o.Si.LARGE, o.Si.LARGE],
          ),
          p = l.extra.media_title,
          C = l.extra.media_subtitle,
          N =
            (0, s.kr)(l) && !(0, s.n2)(l)
              ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING
              : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
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
                  { title: p },
                ),
            }),
          {
            ...d,
            thumbnailUrl: null != E ? E : f,
            title: p,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: C,
            userDescription: N,
            providerIconProps: v,
          }
        );
      }
    },
    206295: function (e, n, l) {
      l.d(n, {
        w: function () {
          return E;
        },
      }),
        l(47120);
      var t = l(470079),
        r = l(688619),
        i = l.n(r),
        a = l(979590),
        s = l.n(a),
        u = l(442837),
        o = l(866442),
        c = l(607070),
        d = l(220082),
        m = l(981631);
      let f = (e, n) => {
          let l = c.Z.desaturateUserColors ? c.Z.saturation : 1,
            t = d.SR.getState().palette[e],
            r =
              null == t
                ? void 0
                : t.map((e) => {
                    let [n, t, r] = e,
                      { h: i, s: a, l: u } = s()({ r: n, g: t, b: r }).toHsl();
                    return s()({ h: i, s: a * l, l: u }).toHexString();
                  });
          return null != r ? r : [n, n];
        },
        E = (e) => {
          var n, t, r, a, s, u;
          let d;
          d = l(481060).tokens;
          let E = c.Z.saturation,
            [p, C] = f(
              e,
              null !==
                (u =
                  null == d
                    ? void 0
                    : null === (s = d.colors) || void 0 === s
                      ? void 0
                      : null === (a = s.BACKGROUND_FLOATING) || void 0 === a
                        ? void 0
                        : null === (r = a.resolve) || void 0 === r
                          ? void 0
                          : null ===
                                (t = r.call(a, {
                                  theme: m.BRd.DARK,
                                  saturation: E,
                                })) || void 0 === t
                            ? void 0
                            : null === (n = t.hex) || void 0 === n
                              ? void 0
                              : n.call(t)) && void 0 !== u
                ? u
                : "#000",
            ),
            N = (0, o._i)(p),
            v = (0, o._i)(C);
          for (let e = 1; e < 8 && !((0, o.Bd)(N) >= 0.725); e++) {
            N = i()(N).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(v) >= 0.725); e++) {
            v = i()(v).darken(0.5).num();
          }
          let _ = (0, o.Rf)(N);
          return { primaryColor: _, secondaryColor: (0, o.Rf)(v) };
        };
      n.Z = (e) => {
        var n, r, a, s, f, E;
        let p;
        p = l(481060).tokens;
        let C = (0, u.e7)([c.Z], () => c.Z.saturation),
          [N, v] = (0, d.Cf)(
            e,
            null !==
              (E =
                null == p
                  ? void 0
                  : null === (f = p.colors) || void 0 === f
                    ? void 0
                    : null === (s = f.BACKGROUND_FLOATING) || void 0 === s
                      ? void 0
                      : null === (a = s.resolve) || void 0 === a
                        ? void 0
                        : null ===
                              (r = a.call(s, {
                                theme: m.BRd.DARK,
                                saturation: C,
                              })) || void 0 === r
                          ? void 0
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== E
              ? E
              : "#000",
          );
        return t.useMemo(() => {
          let e = (0, o._i)(N),
            n = (0, o._i)(v);
          for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = i()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = i()(n).darken(0.5).num();
          }
          let l = (0, o.Rf)(e);
          return { primaryColor: l, secondaryColor: (0, o.Rf)(n) };
        }, [N, v]);
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
          return f;
        },
        _H: function () {
          return E;
        },
        af: function () {
          return p;
        },
        tx: function () {
          return C;
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
      let f = 1e3;
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
          f = u.map((e) => {
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
          ...f,
          ...c.map((e) => ({ type: m.tM.ROLE, value: e.id, label: e.name })),
        ];
      }
      function p(e, n, l) {
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
      function C(e, n) {
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
          return T;
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
        f = l(12067),
        E = l(676149),
        p = l(861529),
        C = l(770009),
        N = l(889515),
        v = l(751319);
      function _(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case a.re.ACTION_ROW:
                return (0, t.jsx)(N.Z, { ...e, renderComponents: _ }, n);
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
                return (0, t.jsx)(p.Z, { ...e }, n);
              case a.re.MEDIA_GALLERY:
                return (0, t.jsx)(f.Z, { ...e }, n);
              case a.re.SEPARATOR:
                return (0, t.jsx)(E.Z, { ...e }, n);
              case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, t.jsx)(C.Z, { ...e }, n);
            }
          })(e, n.toString()),
        );
      }
      function T(e) {
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
        f = l(49012),
        E = l(970184),
        p = l(280501),
        C = l(689938),
        N = l(880609);
      function v(e) {
        let { url: n, onSelect: l } = e;
        return m.wS && null != n
          ? (0, t.jsx)(s.Menu, {
              navId: "component-button",
              onClose: u.Zy,
              "aria-label":
                C.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                children: (0, t.jsx)(s.MenuItem, {
                  id: "copy",
                  label:
                    C.Z.Messages
                      .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function _(e) {
        let n;
        let { label: l, style: r, disabled: m, emoji: C, url: _, skuId: T } = e,
          {
            executeStateUpdate: h,
            visualState: I,
            isDisabled: x,
          } = (0, E.Ee)(e),
          O = (0, d.I)(T),
          S = null != T && r === c.ZJ.PREMIUM,
          g = S && (null == O ? void 0 : O.disabled),
          Z = S ? (null == O ? void 0 : O.label) : l,
          A = null != C,
          R = null != Z && Z.length > 0,
          j = r === c.ZJ.LINK && null != _ && _.length > 0,
          L = I === p.gH.LOADING || (S && null == O);
        return (
          (n = j
            ? () => {
                (0, f.q)({ href: null != _ ? _ : "", shouldConfirm: !0 });
              }
            : S
              ? null != O && !1 === O.disabled
                ? O.onClick
                : a.noop
              : () => h()),
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
            disabled: m || I === p.gH.DISABLED || x || g,
            onClick: n,
            onContextMenu: (e) => {
              j && (0, u.vq)(e, (e) => (0, t.jsx)(v, { ...e, url: _ }));
            },
            role: j ? "link" : "button",
            children: [
              (0, t.jsxs)("div", {
                className: i()(N.content, { [N.hidden]: L, [N.premium]: S }),
                "aria-hidden": L,
                children: [
                  S
                    ? (0, t.jsx)("div", {
                        className: N.shopIcon,
                        children: (0, t.jsx)(s.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  A
                    ? (0, t.jsx)(o.Z, {
                        className: i()({ [N.textEmoji]: R }),
                        src: C.src,
                        emojiId: C.id,
                        emojiName: C.name,
                        animated: C.animated,
                      })
                    : null,
                  R
                    ? (0, t.jsx)("div", { className: N.label, children: Z })
                    : null,
                  j
                    ? (0, t.jsx)(s.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: N.launchIcon,
                      })
                    : null,
                ],
              }),
              L
                ? (0, t.jsx)("div", {
                    className: N.loading,
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
        f = l(296555);
      function E(e) {
        var n;
        let { channelTypes: l } = e,
          E = (0, o.CJ)(),
          p =
            null == E
              ? void 0
              : null === (n = E.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          C = s.Z.getChannel(p),
          N = u.Z.getGuild(null == C ? void 0 : C.getGuildId()),
          v = r.useMemo(
            () => (0, c.tx)(e.defaultValues, null == N ? void 0 : N.id, l),
            [e.defaultValues, N, l],
          );
        return (0, t.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, c.af)(e, p, l),
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
            (0, t.jsx)("span", { className: f.label, children: e.label }),
          defaultValues: v,
        });
      }
    },
    574597: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return I;
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
        f = l(430824),
        E = l(158776),
        p = l(594174),
        C = l(970184),
        N = l(280501),
        v = l(811654),
        _ = l(344991),
        T = l(981631),
        h = l(296555);
      function I(e) {
        var n;
        let l = (0, C.CJ)(),
          I =
            null == l
              ? void 0
              : null === (n = l.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          x = m.Z.getChannel(I),
          O = f.Z.getGuild(null == x ? void 0 : x.getGuildId()),
          S = (0, d.Z)(null == O ? void 0 : O.id, v.HI),
          g = r.useMemo(
            () => (0, v.tx)(e.defaultValues, null == O ? void 0 : O.id),
            [e.defaultValues, O],
          );
        return (0, t.jsx)(_.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, v._H)(e.type, n, I),
          renderIcon: (e, n) => {
            let l = n === _.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === N.tM.USER) {
              let r = p.default.getUser(e.value);
              if (null == r) return;
              return (0, t.jsx)(a.Avatar, {
                size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                src: r.getAvatarURL(null == O ? void 0 : O.id, n),
                status: l ? null : E.Z.getStatus(r.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === N.tM.ROLE) {
              var r;
              let l = null != O ? f.Z.getRole(O.id, e.value) : void 0;
              if (null == l || null == O) return;
              let s = (0, o._b)(O, l) ? (0, c.Kz)(l, n) : null;
              return null != s
                ? (0, t.jsx)(u.Z, { ...s })
                : (0, t.jsx)(a.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (r = l.colorString) && void 0 !== r
                        ? r
                        : (0, i.Rf)(T.p6O),
                    height: n,
                    width: n,
                  });
            }
          },
          renderOptionLabel: (e) => {
            let n = null;
            if (e.type === N.tM.USER) {
              let l = p.default.getUser(e.value);
              null != l &&
                (n = (0, t.jsx)(s.Z, {
                  className: h.tag,
                  usernameClass: h.username,
                  discriminatorClass: h.discriminator,
                  botClass: h.bot,
                  user: l,
                  forceUsername: !0,
                }));
            } else if (e.type === N.tM.ROLE) {
              let l = null != O ? f.Z.getRole(O.id, e.value) : void 0,
                r = null == l ? null : null == S ? void 0 : S[l.id];
              null != r &&
                (n = (0, t.jsxs)("div", {
                  className: h.roleCountContainer,
                  children: [
                    (0, t.jsx)(a.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: h.roleCountIcon,
                    }),
                    (0, t.jsx)("span", {
                      className: h.roleCountText,
                      children: r,
                    }),
                  ],
                }));
            }
            return (0, t.jsxs)("span", {
              className: h.label,
              children: [
                (0, t.jsx)("span", {
                  className: h.labelText,
                  children: e.label,
                }),
                n,
              ],
            });
          },
          defaultValues: g,
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
        f = l(280501),
        E = l(689938),
        p = l(758183),
        C = l(252443);
      function N(e) {
        let { icon: n, iconSize: l } = e;
        return (0, i.jsx)("div", {
          className: p.iconContainer,
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
          { type: v, placeholder: _, maxValues: T, disabled: h } = n,
          [I, x] = a.useState(!1),
          [O, S] = a.useState(!1),
          [g, Z] = a.useState(
            new Map(null == s ? void 0 : s.map((e) => [e.value, e])),
          ),
          [A, R] = a.useState(new Set(g.keys())),
          [j, L] = a.useState(() => (null != s ? s : []).map((e) => e.value)),
          [M, P] = a.useState(0);
        a.useEffect(() => {
          let e = (null != s ? s : []).map((e) => e.value);
          if (e.every((e) => j.includes(e)) && j.every((n) => e.includes(n)))
            return;
          L(e);
          let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
          Z(n), R(new Set(n.keys())), P((e) => e + 1);
        }, [s, j]);
        let {
            state: b,
            executeStateUpdate: y,
            visualState: U,
            isDisabled: k,
            error: D,
          } = (0, m.Ee)(n, {
            type: v,
            selectedOptions: Array.from(g.values()),
          }),
          B = U === f.gH.LOADING;
        a.useEffect(() => {
          if (
            (null == b ? void 0 : b.type) === c.re.USER_SELECT ||
            (null == b ? void 0 : b.type) === c.re.ROLE_SELECT ||
            (null == b ? void 0 : b.type) === c.re.MENTIONABLE_SELECT ||
            (null == b ? void 0 : b.type) === c.re.CHANNEL_SELECT
          ) {
            let e = new Map(b.selectedOptions.map((e) => [e.value, e]));
            Z(e), R(new Set(e.keys()));
          }
        }, [b]);
        let G = a.useCallback(() => {
          y({ type: v, selectedOptions: Array.from(g.values()) }) &&
            R(new Set(g.keys()));
        }, [y, v, g]);
        a.useEffect(() => {
          if (
            !(
              I ||
              O ||
              (g.size === A.size && Array.from(g.keys()).every((e) => A.has(e)))
            )
          )
            G();
        }, [I, O, A, g, G]);
        let w = 0 === g.size || I,
          Y = {
            isDisabled: h || k,
            wrapperClassName: p.select,
            options: (e) =>
              new Promise((n) => {
                n(l(e));
              }),
            placeholder: w
              ? null != _
                ? _
                : E.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER
              : void 0,
            onClose: () => x(!1),
            onOpen: () => x(!0),
            onBlur: () => S(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
              let { inPill: l } = n,
                r = l ? 16 : 24,
                a = t(e, r);
              return null != a ? (0, i.jsx)(N, { icon: a, iconSize: r }) : null;
            },
            renderOptionLabel: r,
          };
        return (0, i.jsxs)(a.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: p.container,
              children: [
                T > 1
                  ? (0, i.jsx)(
                      o.SearchableSelect,
                      {
                        className: p.badges,
                        value: Array.from(g.values()),
                        onChange: (e) => {
                          !I && S(!0), Z(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: u()({
                          [p.soloInput]: 0 === g.size,
                          [p.inlineInput]: g.size > 0,
                          [p.hidden]: !w,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...Y,
                      },
                      M,
                    )
                  : (0, i.jsx)(
                      o.SearchableSelect,
                      {
                        className: (p.badges, p.singleSelect),
                        value: [...g.values()][0],
                        onChange: (e) =>
                          Z(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...Y,
                      },
                      M,
                    ),
                B
                  ? (0, i.jsx)("div", {
                      className: p.loading,
                      children: (0, i.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != D
              ? (0, i.jsx)(d.st, { ...(0, d.c4)(D), className: C.error })
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
        f = l(689938),
        E = l(252443);
      function p(e) {
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
      function C(e) {
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
      function N(e) {
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
          T = r.useMemo(
            () => l.filter((e) => e.default).map((e) => e.value),
            [l],
          ),
          {
            state: h,
            executeStateUpdate: I,
            visualState: x,
            isDisabled: O,
            error: S,
          } = (0, d.Ee)(e, { type: n, values: T }),
          g = u > 1,
          Z = x === m.gH.LOADING,
          [A, R] = r.useState(!1),
          [j, L] = r.useState(
            () => new Set(l.filter((e) => e.default).map((e) => e.value)),
          ),
          [M, P] = r.useState(j),
          b = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
        r.useEffect(() => {
          if ((null == h ? void 0 : h.type) === o.re.STRING_SELECT) {
            let e = new Set(h.values);
            L(e), P(e);
          } else {
            let e = new Set(T);
            L(e), P(e);
          }
        }, [i, T, h]);
        let y = r.useCallback(() => {
          if (M !== j)
            I({ type: o.re.STRING_SELECT, values: Array.from(j) }) && P(j);
        }, [j, M, P, I]);
        r.useEffect(() => {
          if (
            !(A || (j.size === M.size && Array.from(M).every((e) => j.has(e))))
          )
            y();
        }, [A, j, M, y]);
        let U = s.singleSelect;
        g ? (U = s.multiSelect) : 0 === v && (U = s.toggleSelect);
        let k = (0, s.useVariableSelect)({
          value: j,
          onChange: (e) => L(e),
          onSelectInteraction: U,
        });
        return (0, t.jsxs)(r.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: E.container,
              children: [
                (0, t.jsx)(s.Select, {
                  isDisabled: _ || O,
                  className: E.select,
                  options: l.map((e) => ({
                    ...e,
                    disabled: g && !j.has(e.value) && j.size === u,
                  })),
                  placeholder:
                    null != a
                      ? a
                      : f.Z.Messages
                          .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                  onClose: () => R(!1),
                  onOpen: () => R(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !g,
                  optionClassName: E.selectOption,
                  renderOptionLabel: (e) =>
                    (0, t.jsx)(p, {
                      ...e,
                      isDisabled: g && !j.has(e.value) && j.size === u,
                      isOffset: b,
                    }),
                  renderOptionValue: (e) =>
                    g
                      ? (0, t.jsx)(N, { options: e })
                      : (0, t.jsx)(C, { ...e[0] }),
                  ...k,
                }),
                Z
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
            minLength: f,
            maxLength: E,
            required: p,
            value: C,
          } = e,
          [N, v] = r.useState(null != C ? C : ""),
          {
            state: _,
            executeStateUpdate: T,
            error: h,
          } = (0, s.Ee)(e, null != C ? { type: l, value: C } : void 0),
          I = (0, u.hz)(e.id);
        r.useEffect(() => {
          (null == _ ? void 0 : _.type) === l && v(_.value);
        }, [l, _]);
        let x = {
          name: d,
          value: N,
          placeholder: m,
          minLength: f,
          maxLength: E,
          required: p,
          onChange: (e) => {
            v(e), T({ type: l, value: e });
          },
          autoFocus: I,
        };
        switch (c) {
          case a.FO.SMALL:
            n = (0, t.jsx)(i.TextInput, { ...x });
            break;
          case a.FO.PARAGRAPH:
            n = (0, t.jsx)(i.TextArea, { ...x });
        }
        return (0, t.jsx)(i.FormItem, {
          title: d,
          required: p,
          className: o.formItem,
          error: h,
          children: n,
        });
      }
    },
    12067: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return C;
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
        f = l(823379),
        E = l(970184),
        p = l(981631);
      function C(e) {
        let { message: n } = (0, E.CJ)(),
          l = (0, r.e7)([d.Z], () =>
            d.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: C,
            shouldRedactExplicitContent: N,
            gifAutoPlay: v,
            getGifFavButton: _,
            getOnMediaItemContextMenu: T,
          } = (0, s.c)();
        if (null == n || null == l) return null;
        let h = e.items
            .map((e) => (0, c.j0)(e.media, p.VqG, C, N))
            .filter(f.lm),
          I = {
            source: "Media Mosaic",
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type,
          },
          x = h.length > 1 ? (0, c.Cx)(h, I) : {};
        function O(e, n) {
          let l = e.originalItem;
          return (0, i.lK)(l.media, n, l.spoiler);
        }
        let S = e.items.map((e) => {
          let l = e.media,
            t = null == T ? void 0 : T(l),
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
              getObscureReason: O,
              renderImageComponent: a.a,
              renderVideoComponent: a.r,
              renderAudioComponent: p.dG4,
              renderPlaintextFilePreview: p.dG4,
              renderGenericFileComponent: p.dG4,
              renderMosaicItemFooter: p.dG4,
              gifFavoriteButton: _(l),
              onPlay: (e, n, l) => {},
              canRemoveItem: !1,
              onRemoveItem: p.dG4,
            },
            i = (0, m.q)({ proxyURL: l.proxyUrl, url: l.url });
          return i in x && (r.onClick = x[i]), r;
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
          return f;
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
      function f(e) {
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
          return f;
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
      function f(e) {
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
          return T;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(481060),
        s = l(328731),
        u = l(435439),
        o = l(206295),
        c = l(297781),
        d = l(43205),
        m = l(313201),
        f = l(792125),
        E = l(231338),
        p = l(689938),
        C = l(917056),
        N = l(671656);
      function v(e) {
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
      function _(e) {
        let { clickable: n, ...l } = e;
        return (0, t.jsx)(v, {
          ...l,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: N.clickable,
        });
      }
      function T(e) {
        let {
            entry: n,
            channel: l,
            title: r,
            subtitle: N,
            thumbnailUrl: T,
            titleClickable: h,
            subtitleClickable: I,
            thumbnailClickable: x,
            providerIconProps: O,
            style: S = {},
          } = e,
          g = (0, m.Dt)(),
          { primaryColor: Z, secondaryColor: A } = (0, o.Z)(T);
        return (
          null != T &&
            (S.background = "linear-gradient(45deg, "
              .concat(Z, ", ")
              .concat(A, ")")),
          (0, t.jsx)(a.ThemeContextProvider, {
            theme: E.BR.DARK,
            children: (0, t.jsxs)("figure", {
              "aria-roledescription":
                p.Z.Messages
                  .CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
              "aria-labelledby": g,
              "data-disable-adaptive-theme": !0,
              className: i()(C.container, (0, f.Q)(E.BR.DARK)),
              style: S,
              children: [
                (0, t.jsx)(v, {
                  className: C.thumbnailContainer,
                  clickableClassName: C.clickable,
                  clickable: x,
                  children: (0, t.jsx)(d.f, {
                    src: T,
                    constrain: "width",
                    size: 64,
                    "aria-hidden": !0,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: C.infoContainer,
                  children: [
                    (0, t.jsx)(s.Z, {
                      channel: l,
                      entry: n,
                      className: C.users,
                    }),
                    (0, t.jsx)(a.Spacer, { size: 2 }),
                    (0, t.jsx)(_, {
                      clickable: h,
                      children: (0, t.jsx)(a.Heading, {
                        id: g,
                        variant: "heading-md/medium",
                        lineClamp: 1,
                        className: i()(C.textPrimary, C.truncatedText),
                        scaleFontToUserSetting: !0,
                        children: r,
                      }),
                    }),
                    null != N
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(a.Spacer, { size: 2 }),
                            (0, t.jsx)(_, {
                              clickable: I,
                              children: (0, t.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                className: i()(
                                  C.textSecondary,
                                  C.truncatedText,
                                ),
                                lineClamp: 1,
                                scaleFontToUserSetting: !0,
                                children: N,
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, t.jsx)(c.PZ, {
                      className: C.badges,
                      entry: n,
                      location: c.Gt.EMBED,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: C.headerIcons,
                  children: null != O ? (0, t.jsx)(u.Z, { ...O }) : null,
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
//# sourceMappingURL=89a02daf0e7c348a1f7a.js.map
