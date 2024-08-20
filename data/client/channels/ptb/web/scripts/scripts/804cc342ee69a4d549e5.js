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
        u = l(701488),
        s = l(981631);
      async function o(e) {
        let {
          analyticsLocations: n,
          channelId: l,
          guildId: o,
          locationObject: c,
          initialSlide: d = u.ag.DIRECTORY,
          initialSelectedApplicationId: m,
        } = e;
        if ((0, t.hasModalOpen)(u.AC)) return;
        let f = i.Z.getChannel(l),
          p = r.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT);
        await (0, a.Z)({
          analyticsLocations: n,
          channel: f,
          guildId: o,
          openInPopout: p,
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
        u = l(776862),
        s = l(701488),
        o = l(981631);
      function c(e) {
        let {
            channel: n,
            guildId: c,
            locationObject: d,
            openInPopout: m,
            initialSelectedApplicationId: f,
            initialSlide: p = s.ag.DIRECTORY,
            enableSelectedTextChannelInvite: E = !1,
            analyticsLocations: v,
            opensAppLauncherModal: C = !1,
          } = e,
          h = v.length > 0 ? v[v.length - 1] : "open-activity-shelf",
          { enabled: N } = i.m1.getCurrentConfig(
            { location: h },
            { autoTrackExposure: !1 },
          );
        if (C && N) {
          null != n &&
            (0, a.Z)({ openInPopout: m, channel: n, analyticsLocation: h });
          return;
        }
        m && (0, u.Z)(o.KJ3.CHANNEL_CALL_POPOUT);
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
                initialSlide: p,
                initialSelectedApplicationId: f,
                enableSelectedTextChannelInvite: E,
                analyticsLocations: v,
              });
          },
          { modalKey: s.AC, contextKey: T },
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
          return s;
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
          return u;
        },
        u$: function () {
          return d;
        },
      }),
        ((r = t || (t = {}))[(r.POPULAR = 0)] = "POPULAR"),
        (r[(r.ALPHABETICAL = 1)] = "ALPHABETICAL");
      let i = "app-launcher-element",
        a = "app-launcher-modal",
        u = "app-launcher-entrypoint",
        s = 500,
        o = 668,
        c = "min(100vh, ".concat(o, "px)"),
        d = {
          "--custom-app-launcher-width": "".concat(s, "px"),
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
        u = l(626135),
        s = l(499254),
        o = l(827498),
        c = l(314734),
        d = l(981631);
      function m(e) {
        let { channel: n, openInPopout: m, analyticsLocation: f } = e;
        m && (0, i.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
        let p = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        (0, s.y)(o.ti.DISMISSED), (0, s._)(o._b.VOICE);
        let E = n.id,
          v = a.ZP.hasUnread(E) || a.ZP.getMentionCount(E) > 0;
        return (
          u.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: f,
            source: o._b.VOICE,
            is_chat_badged: v,
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
            { modalKey: c.e9, contextKey: p },
          )
        );
      }
    },
    574399: function (e, n, l) {
      l.d(n, {
        I: function () {
          return _;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(442837),
        a = l(481060),
        u = l(16084),
        s = l(558381),
        o = l(821849),
        c = l(106976),
        d = l(488915),
        m = l(171246),
        f = l(509545),
        p = l(55563),
        E = l(551428),
        v = l(937615),
        C = l(147496),
        h = l(519896),
        N = l(981631),
        T = l(689938);
      function _(e) {
        r.useEffect(() => {
          if (null != e) (0, u.$N)("", e), (0, s.km)(e);
        }, [e]);
        let n = (0, i.e7)([p.Z], () => (null != e ? p.Z.get(e) : void 0), [e]);
        r.useEffect(() => {
          (null == n ? void 0 : n.type) === N.epS.SUBSCRIPTION &&
            (0, o.GZ)(n.id);
        }, [n]);
        let l = (0, i.Wu)([f.Z], () => (null != e ? f.Z.getForSKU(e) : []), [
            e,
          ]),
          _ = r.useMemo(
            () => (null != l ? l.map((e) => e.id)[0] : void 0),
            [l],
          ),
          x = (0, i.e7)([E.Z], () => (null != e ? E.Z.getForSKU(e) : void 0), [
            e,
          ]);
        r.useEffect(() => {
          if (null != _) (0, c.vY)(_);
        }, [_]);
        let I = null == n ? void 0 : n.applicationId,
          S = (0, i.e7)(
            [d.Z],
            () =>
              null != I
                ? d.Z.getSubscriptionGroupListingForApplication(I)
                : null,
            [I],
          ),
          g = r.useCallback(() => {
            if (
              (null == n ? void 0 : n.applicationId) == null ||
              (null == n ? void 0 : n.id) == null ||
              (null == S ? void 0 : S.id) == null ||
              (null == S ? void 0 : S.sku_flags) == null
            )
              return null;
            (0, a.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(h.SubscriptionDetailsModal, {
                appId: n.applicationId,
                groupListingId: S.id,
                groupListingType: (0, m.KW)(S.sku_flags) ? "user" : "guild",
                onClose: l,
                skuId: n.id,
                transitionState: r,
              });
            });
          }, [
            null == n ? void 0 : n.applicationId,
            null == n ? void 0 : n.id,
            null == S ? void 0 : S.id,
            null == S ? void 0 : S.sku_flags,
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
          null != x &&
          (null == n || n.type !== N.epS.SUBSCRIPTION || null != S)
        ) {
          if (null == e || (null != n && !n.available))
            return {
              disabled: !0,
              label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
            };
          if (n.type === N.epS.SUBSCRIPTION) {
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
                price: (0, v.T4)(e.price, e.currency),
              }),
              onClick: g,
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
                  price: (0, v.T4)(n.price.amount, n.price.currency),
                }),
                onClick: O,
              };
        }
      }
    },
    256139: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = l(735250),
        r = l(120356),
        i = l.n(r),
        a = l(481060),
        u = l(671656);
      function s(e) {
        let { className: n, onClick: l, ...r } = e,
          s = (0, t.jsx)(a.Clickable, {
            ...r,
            className: i()(null != l && u.clickable, n),
            onClick: l,
          });
        return null == l ? (0, t.jsx)(a.BlockInteractions, { children: s }) : s;
      }
    },
    328731: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = l(735250),
        r = l(120356),
        i = l.n(r),
        a = l(481060),
        u = l(318374),
        s = l(171368),
        o = l(5192),
        c = l(192918),
        d = l(256139),
        m = l(689938),
        f = l(182408);
      function p(e) {
        let { entry: n, channel: l, className: r } = e,
          {
            displayParticipants: p,
            participant1: E,
            participant2: v,
            numOtherParticipants: C,
          } = (0, c.Z)(n, 3),
          h = [E, v];
        return (0, t.jsxs)("div", {
          className: i()(f.container, r),
          children: [
            p.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(u.Z, {
                      maxUsers: 3,
                      users: p,
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
                user1: o.ZP.getName(l.guild_id, l.id, h[0]),
                user2: o.ZP.getName(l.guild_id, l.id, h[1]),
                countOthers: C,
                nameHook: (e, n) =>
                  (0, t.jsx)(d.Z, {
                    tag: "span",
                    onClick: () =>
                      (0, s.openUserProfileModal)({
                        userId: h[parseInt(n)].id,
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
          return d;
        },
      });
      var t = l(735250),
        r = l(481060),
        i = l(374129),
        a = l(639351),
        u = l(908841),
        s = l(410441),
        o = l(206583);
      let c = {
        [o.kG.SPOTIFY]: u.Z,
        [o.kG.CRUNCHYROLL]: r.CrunchyrollNeutralIcon,
        [o.kG.XBOX]: a.Z,
        [o.kG.PLAYSTATION]: i.Z,
      };
      function d(e) {
        let { type: n, ...l } = e,
          r = c[n];
        return null == r ? null : (0, t.jsx)(s.Z, { Icon: r, ...l });
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
          return v;
        },
        r: function () {
          return h;
        },
      }),
        l(411104);
      var t = l(735250),
        r = l(470079),
        i = l(512722),
        a = l.n(i),
        u = l(876215),
        s = l(775379),
        o = l(879046),
        c = l(214597),
        d = l(498187),
        m = l(482417),
        f = l(301419),
        p = l(397035);
      let E = r.createContext(void 0);
      function v() {
        let e = r.useContext(E);
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
          case u.s.TOP_ARTIST:
            return (0, t.jsx)(T, { entry: n, ...r });
          case u.s.TOP_GAME:
            return (0, t.jsx)(_, { entry: n, ...r });
          case u.s.PLAYED_GAME:
            return (0, t.jsx)(x, { entry: n, ...r });
          case u.s.WATCHED_MEDIA:
            return (0, t.jsx)(I, { entry: n, ...r });
          case u.s.LISTENED_SESSION:
            return (0, t.jsx)(S, { entry: n, ...r });
          case u.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(N, { entry: n, ...r });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function h(e) {
        let { errorFallback: n, ...l } = e;
        return (0, t.jsx)(s.S, {
          fallback: n,
          children: (0, t.jsx)(C, { ...l }),
        });
      }
      function N(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, o.Z)({ entry: n, ...r });
        return (0, t.jsx)(E.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function T(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, f.Z)({ entry: n, ...r });
        return (0, t.jsx)(E.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function _(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(E.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function x(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(E.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function I(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, p.Z)({ entry: n, ...r });
        return (0, t.jsx)(E.Provider, {
          value: { parsedEntry: i, ...r },
          children: l,
        });
      }
      function S(e) {
        let { entry: n, children: l, ...r } = e,
          i = (0, m.Z)({ entry: n, ...r });
        return (0, t.jsx)(E.Provider, {
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
        u = l(835473),
        s = l(914010),
        o = l(561308),
        c = l(701488),
        d = l(689938);
      function m(e) {
        let { entry: n } = e,
          l = (0, u.q)(n.extra.application_id),
          m = null == l ? void 0 : l.getIconURL(c.Si.LARGE),
          f = (0, t.e7)([s.Z], () => s.Z.getGuildId()),
          p = (0, r.O)(),
          { analyticsLocations: E } = (0, a.ZP)(),
          v =
            (0, o.kr)(n) && !(0, o.n2)(n)
              ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
              : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
          C = () => {
            null != f &&
              (0, i.q)({
                guildId: f,
                channelId: void 0,
                locationObject: p.location,
                initialSelectedApplicationId: n.extra.application_id,
                initialSlide: c.ag.SELECT_CHANNEL,
                analyticsLocations: E,
              });
          };
        return {
          thumbnailUrl: m,
          title: n.extra.activity_name,
          onClickTitle: C,
          onClickThumbnail: C,
          userDescription: v,
        };
      }
    },
    214597: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = l(470079),
        r = l(902704),
        i = l(232567),
        a = l(720202),
        u = l(594174);
      function s(e) {
        let { entry: n, channel: l } = e,
          s = t.useRef([]);
        return (
          t.useEffect(() => {
            if (!(0, r.E)(s.current, n.participants))
              (s.current = n.participants),
                n.participants
                  .filter((e) => null == u.default.getUser(e))
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
          return E;
        },
      });
      var t = l(876215),
        r = l(758713),
        i = l(835473),
        a = l(810568),
        u = l(168524),
        s = l(561308),
        o = l(206583),
        c = l(96513),
        d = l(701488),
        m = l(689938);
      let f = { [r.z.XBOX]: o.kG.XBOX, [r.z.PLAYSTATION]: o.kG.PLAYSTATION },
        p = { [c._.EMBED]: a.m1.Embed };
      function E(e) {
        let n,
          l,
          { entry: r, location: a, baseEntryData: o } = e,
          c = (0, i.q)(r.extra.application_id),
          E = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
          v = r.extra.game_name;
        if (null != r.extra.platform) {
          let e = f[r.extra.platform];
          null != e &&
            (n = {
              type: e,
              "aria-label": m.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
            });
        }
        l =
          r.content_type === t.s.PLAYED_GAME
            ? (0, s.kr)(r) && !(0, s.n2)(r)
              ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
              : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED
            : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED;
        let C = p[a],
          h = (0, u.Z)({
            location: C,
            applicationId: r.extra.application_id,
            source: C,
            trackEntryPointImpression: !0,
            sourceUserId: r.author_id,
          });
        return {
          ...o,
          thumbnailUrl: E,
          title: v,
          onClickTitle: h,
          onClickThumbnail: h,
          userDescription: l,
          providerIconProps: n,
        };
      }
    },
    482417: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      }),
        l(47120);
      var t = l(423875),
        r = l(740605),
        i = l(206583),
        a = l(616922),
        u = l(689938);
      function s(e) {
        let n,
          { entry: l, baseEntryData: s } = e,
          o = l.extra.entries[0].media,
          c = o.artists[0],
          { title: d, provider: m, image_url: f } = o,
          p = c.name,
          E = () => (0, r.o)(a.Hw.TRACK, o.external_id);
        return (
          m === t.p.SPOTIFY &&
            (n = { type: i.kG.SPOTIFY, "aria-label": u.Z.Messages.SPOTIFY }),
          {
            ...s,
            title: d,
            subtitle: p,
            thumbnailUrl: f,
            onClickTitle: E,
            onClickSubtitle: () => (0, r.o)(a.Hw.ARTIST, c.external_id),
            onClickThumbnail: E,
            userDescription:
              u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
            providerIconProps: n,
          }
        );
      }
    },
    301419: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = l(423875),
        r = l(740605),
        i = l(206583),
        a = l(616922),
        u = l(689938);
      function s(e) {
        let n,
          { entry: l, baseEntryData: s } = e,
          { provider: o, image_url: c } = l.extra.media,
          d = l.extra.artist.name,
          m = () => (0, r.o)(a.Hw.ALBUM, l.extra.media.external_parent_id);
        return (
          o === t.p.SPOTIFY &&
            (n = { type: i.kG.SPOTIFY, "aria-label": u.Z.Messages.SPOTIFY }),
          {
            ...s,
            title: d,
            thumbnailUrl: c,
            onClickTitle: () =>
              (0, r.o)(a.Hw.ARTIST, l.extra.artist.external_id),
            onClickSubtitle: m,
            onClickThumbnail: m,
            userDescription:
              u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
            providerIconProps: n,
          }
        );
      }
    },
    397035: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = l(470079),
        r = l(835473),
        i = l(81063),
        a = l(49012),
        u = l(591759),
        s = l(561308),
        o = l(206583),
        c = l(701488),
        d = l(689938);
      function m(e) {
        let n,
          { entry: l, baseEntryData: m } = e,
          f = (0, r.q)(l.extra.application_id),
          p = null == f ? void 0 : f.getIconURL(128),
          E = (0, i.getAssetImage)(
            l.extra.application_id,
            l.extra.media_assets_large_image,
            [c.Si.LARGE, c.Si.LARGE],
          ),
          v = l.extra.media_subtitle,
          C =
            (0, s.kr)(l) && !(0, s.n2)(l)
              ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING
              : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
          h = {
            type: o.kG.CRUNCHYROLL,
            "aria-label": d.Z.Messages.CRUNCHYROLL,
          },
          N = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = u.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [l.extra.url]);
        return (
          null != N &&
            (n = () => (0, a.q)({ href: u.Z.format(N), trusted: !0 })),
          {
            ...m,
            thumbnailUrl: null != E ? E : p,
            title: l.extra.media_title,
            onClickTitle: n,
            onClickThumbnail: n,
            subtitle: v,
            userDescription: C,
            providerIconProps: h,
          }
        );
      }
    },
    206295: function (e, n, l) {
      l.d(n, {
        w: function () {
          return p;
        },
      }),
        l(47120);
      var t = l(470079),
        r = l(688619),
        i = l.n(r),
        a = l(979590),
        u = l.n(a),
        s = l(442837),
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
                      { h: i, s: a, l: s } = u()({ r: n, g: t, b: r }).toHsl();
                    return u()({ h: i, s: a * l, l: s }).toHexString();
                  });
          return null != r ? r : [n, n];
        },
        p = (e) => {
          var n, t, r, a, u, s;
          let d;
          d = l(481060).tokens;
          let p = c.Z.saturation,
            [E, v] = f(
              e,
              null !==
                (s =
                  null == d
                    ? void 0
                    : null === (u = d.colors) || void 0 === u
                      ? void 0
                      : null === (a = u.BACKGROUND_FLOATING) || void 0 === a
                        ? void 0
                        : null === (r = a.resolve) || void 0 === r
                          ? void 0
                          : null ===
                                (t = r.call(a, {
                                  theme: m.BRd.DARK,
                                  saturation: p,
                                })) || void 0 === t
                            ? void 0
                            : null === (n = t.hex) || void 0 === n
                              ? void 0
                              : n.call(t)) && void 0 !== s
                ? s
                : "#000",
            ),
            C = (0, o._i)(E),
            h = (0, o._i)(v);
          for (let e = 1; e < 8 && !((0, o.Bd)(C) >= 0.725); e++) {
            C = i()(C).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(h) >= 0.725); e++) {
            h = i()(h).darken(0.5).num();
          }
          let N = (0, o.Rf)(C);
          return { primaryColor: N, secondaryColor: (0, o.Rf)(h) };
        };
      n.Z = (e) => {
        var n, r, a, u, f, p;
        let E;
        E = l(481060).tokens;
        let v = (0, s.e7)([c.Z], () => c.Z.saturation),
          [C, h] = (0, d.Cf)(
            e,
            null !==
              (p =
                null == E
                  ? void 0
                  : null === (f = E.colors) || void 0 === f
                    ? void 0
                    : null === (u = f.BACKGROUND_FLOATING) || void 0 === u
                      ? void 0
                      : null === (a = u.resolve) || void 0 === a
                        ? void 0
                        : null ===
                              (r = a.call(u, {
                                theme: m.BRd.DARK,
                                saturation: v,
                              })) || void 0 === r
                          ? void 0
                          : null === (n = r.hex) || void 0 === n
                            ? void 0
                            : n.call(r)) && void 0 !== p
              ? p
              : "#000",
          );
        return t.useMemo(() => {
          let e = (0, o._i)(C),
            n = (0, o._i)(h);
          for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = i()(e).darken(0.5).num();
          }
          for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = i()(n).darken(0.5).num();
          }
          let l = (0, o.Rf)(e);
          return { primaryColor: l, secondaryColor: (0, o.Rf)(n) };
        }, [C, h]);
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
          u = (0, r.useToken)(
            r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          s = (0, t.jsx)(l, {
            color: u.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == n
          ? (0, t.jsx)("div", {
              className: i.container,
              "aria-label": a,
              children: s,
            })
          : (0, t.jsx)(r.Tooltip, {
              text: a,
              children: (e) =>
                (0, t.jsx)(r.Clickable, {
                  className: i.container,
                  ...e,
                  onClick: n,
                  children: s,
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
          return p;
        },
        af: function () {
          return E;
        },
        tx: function () {
          return v;
        },
      }),
        l(47120);
      var t = l(524846),
        r = l(911969),
        i = l(592125),
        a = l(271383),
        u = l(430824),
        s = l(594174),
        o = l(483360),
        c = l(823379),
        d = l(5192),
        m = l(280501);
      l(892902);
      let f = 1e3;
      function p(e, n, l) {
        let t = i.Z.getChannel(l);
        if (null == t) return [];
        let a = e === r.re.USER_SELECT || e === r.re.MENTIONABLE_SELECT,
          u = e === r.re.ROLE_SELECT || e === r.re.MENTIONABLE_SELECT,
          { users: s, roles: c } = o.ZP.queryMentionResults({
            query: n,
            channel: t,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: a,
            canMentionRoles: u,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
          }),
          f = s.map((e) => {
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
      function E(e, n, l) {
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
      function v(e, n) {
        let l =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let r = u.Z.getGuild(n);
        return e
          .map((e) => {
            switch (e.type) {
              case t.$.USER: {
                var n;
                let l = s.default.getUser(e.id);
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
                let n = u.Z.getRole(r.id, e.id);
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
          return N;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(911969),
        u = l(970184),
        s = l(987106),
        o = l(927057),
        c = l(574597),
        d = l(378975),
        m = l(413991),
        f = l(12067),
        p = l(676149),
        E = l(861529),
        v = l(770009),
        C = l(889515),
        h = l(751319);
      function N(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case a.re.ACTION_ROW:
                return (0, t.jsx)(C.Z, { ...e, renderComponents: N }, n);
              case a.re.BUTTON:
                return (0, t.jsx)(s.Z, { ...e }, n);
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
                return (0, t.jsx)(E.Z, { ...e }, n);
              case a.re.MEDIA_GALLERY:
                return (0, t.jsx)(f.Z, { ...e }, n);
              case a.re.SEPARATOR:
                return (0, t.jsx)(p.Z, { ...e }, n);
              case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, t.jsx)(v.Z, { ...e }, n);
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
                h.container,
                { [h.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, t.jsx)(u.Il, { message: n, children: N(l) }),
            });
      }
    },
    987106: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return N;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(392711),
        u = l(481060),
        s = l(239091),
        o = l(596454),
        c = l(911969),
        d = l(574399),
        m = l(572004),
        f = l(49012),
        p = l(970184),
        E = l(280501),
        v = l(689938),
        C = l(880609);
      function h(e) {
        let { url: n, onSelect: l } = e;
        return m.wS && null != n
          ? (0, t.jsx)(u.Menu, {
              navId: "component-button",
              onClose: s.Zy,
              "aria-label":
                v.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(u.MenuGroup, {
                children: (0, t.jsx)(u.MenuItem, {
                  id: "copy",
                  label:
                    v.Z.Messages
                      .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function N(e) {
        let n;
        let { label: l, style: r, disabled: m, emoji: v, url: N, skuId: T } = e,
          {
            executeStateUpdate: _,
            visualState: x,
            isDisabled: I,
          } = (0, p.Ee)(e),
          S = (0, d.I)(T),
          g = null != T && r === c.ZJ.PREMIUM,
          O = g && (null == S ? void 0 : S.disabled),
          Z = g ? (null == S ? void 0 : S.label) : l,
          j = null != v,
          L = null != Z && Z.length > 0,
          A = r === c.ZJ.LINK && null != N && N.length > 0,
          R = x === E.gH.LOADING || (g && null == S);
        return (
          (n = A
            ? () => {
                (0, f.q)({ href: null != N ? N : "", shouldConfirm: !0 });
              }
            : g
              ? null != S && !1 === S.disabled
                ? S.onClick
                : a.noop
              : () => _()),
          (0, t.jsxs)(u.Button, {
            color: (function (e) {
              switch (e) {
                case c.ZJ.PRIMARY:
                case c.ZJ.PREMIUM:
                  return u.Button.Colors.BRAND;
                case c.ZJ.SUCCESS:
                  return u.Button.Colors.GREEN;
                case c.ZJ.DESTRUCTIVE:
                  return u.Button.Colors.RED;
                default:
                  return u.Button.Colors.PRIMARY;
              }
            })(r),
            size: u.Button.Sizes.SMALL,
            disabled: m || x === E.gH.DISABLED || I || O,
            onClick: n,
            onContextMenu: (e) => {
              A && (0, s.vq)(e, (e) => (0, t.jsx)(h, { ...e, url: N }));
            },
            role: A ? "link" : "button",
            children: [
              (0, t.jsxs)("div", {
                className: i()(C.content, { [C.hidden]: R, [C.premium]: g }),
                "aria-hidden": R,
                children: [
                  g
                    ? (0, t.jsx)("div", {
                        className: C.shopIcon,
                        children: (0, t.jsx)(u.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  j
                    ? (0, t.jsx)(o.Z, {
                        className: i()({ [C.textEmoji]: L }),
                        src: v.src,
                        emojiId: v.id,
                        emojiName: v.name,
                        animated: v.animated,
                      })
                    : null,
                  L
                    ? (0, t.jsx)("div", { className: C.label, children: Z })
                    : null,
                  A
                    ? (0, t.jsx)(u.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: C.launchIcon,
                      })
                    : null,
                ],
              }),
              R
                ? (0, t.jsx)("div", {
                    className: C.loading,
                    children: (0, t.jsx)(u.Dots, {
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
          return p;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(481060),
        a = l(471445),
        u = l(592125),
        s = l(430824),
        o = l(970184),
        c = l(811654),
        d = l(344991),
        m = l(981631),
        f = l(296555);
      function p(e) {
        var n;
        let { channelTypes: l } = e,
          p = (0, o.CJ)(),
          E =
            null == p
              ? void 0
              : null === (n = p.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          v = u.Z.getChannel(E),
          C = s.Z.getGuild(null == v ? void 0 : v.getGuildId()),
          h = r.useMemo(
            () => (0, c.tx)(e.defaultValues, null == C ? void 0 : C.id, l),
            [e.defaultValues, C, l],
          );
        return (0, t.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, c.af)(e, E, l),
          renderIcon: (e, n) => {
            let l = u.Z.getChannel(null == e ? void 0 : e.value);
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
          defaultValues: h,
        });
      }
    },
    574597: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return x;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(866442),
        a = l(481060),
        u = l(129861),
        s = l(91218),
        o = l(829883),
        c = l(518738),
        d = l(14263),
        m = l(592125),
        f = l(430824),
        p = l(158776),
        E = l(594174),
        v = l(970184),
        C = l(280501),
        h = l(811654),
        N = l(344991),
        T = l(981631),
        _ = l(296555);
      function x(e) {
        var n;
        let l = (0, v.CJ)(),
          x =
            null == l
              ? void 0
              : null === (n = l.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          I = m.Z.getChannel(x),
          S = f.Z.getGuild(null == I ? void 0 : I.getGuildId()),
          g = (0, d.Z)(null == S ? void 0 : S.id, h.HI),
          O = r.useMemo(
            () => (0, h.tx)(e.defaultValues, null == S ? void 0 : S.id),
            [e.defaultValues, S],
          );
        return (0, t.jsx)(N.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, h._H)(e.type, n, x),
          renderIcon: (e, n) => {
            let l = n === N.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === C.tM.USER) {
              let r = E.default.getUser(e.value);
              if (null == r) return;
              return (0, t.jsx)(a.Avatar, {
                size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                src: r.getAvatarURL(null == S ? void 0 : S.id, n),
                status: l ? null : p.Z.getStatus(r.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
              var r;
              let l = null != S ? f.Z.getRole(S.id, e.value) : void 0;
              if (null == l || null == S) return;
              let u = (0, o._b)(S, l) ? (0, c.Kz)(l, n) : null;
              return null != u
                ? (0, t.jsx)(s.Z, { ...u })
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
            if (e.type === C.tM.USER) {
              let l = E.default.getUser(e.value);
              null != l &&
                (n = (0, t.jsx)(u.Z, {
                  className: _.tag,
                  usernameClass: _.username,
                  discriminatorClass: _.discriminator,
                  botClass: _.bot,
                  user: l,
                  forceUsername: !0,
                }));
            } else if (e.type === C.tM.ROLE) {
              let l = null != S ? f.Z.getRole(S.id, e.value) : void 0,
                r = null == l ? null : null == g ? void 0 : g[l.id];
              null != r &&
                (n = (0, t.jsxs)("div", {
                  className: _.roleCountContainer,
                  children: [
                    (0, t.jsx)(a.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: _.roleCountIcon,
                    }),
                    (0, t.jsx)("span", {
                      className: _.roleCountText,
                      children: r,
                    }),
                  ],
                }));
            }
            return (0, t.jsxs)("span", {
              className: _.label,
              children: [
                (0, t.jsx)("span", {
                  className: _.labelText,
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
          return h;
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
        u = l(120356),
        s = l.n(u),
        o = l(481060),
        c = l(911969),
        d = l(868819),
        m = l(970184),
        f = l(280501),
        p = l(689938),
        E = l(758183),
        v = l(252443);
      function C(e) {
        let { icon: n, iconSize: l } = e;
        return (0, i.jsx)("div", {
          className: E.iconContainer,
          style: { height: l, width: l },
          children: n,
        });
      }
      function h(e) {
        let {
            selectActionComponent: n,
            queryOptions: l,
            renderIcon: t,
            renderOptionLabel: r,
            defaultValues: u,
          } = e,
          { type: h, placeholder: N, maxValues: T, disabled: _ } = n,
          [x, I] = a.useState(!1),
          [S, g] = a.useState(!1),
          [O, Z] = a.useState(
            new Map(null == u ? void 0 : u.map((e) => [e.value, e])),
          ),
          [j, L] = a.useState(new Set(O.keys())),
          [A, R] = a.useState(() => (null != u ? u : []).map((e) => e.value)),
          [M, P] = a.useState(0);
        a.useEffect(() => {
          let e = (null != u ? u : []).map((e) => e.value);
          if (e.every((e) => A.includes(e)) && A.every((n) => e.includes(n)))
            return;
          R(e);
          let n = new Map(null == u ? void 0 : u.map((e) => [e.value, e]));
          Z(n), L(new Set(n.keys())), P((e) => e + 1);
        }, [u, A]);
        let {
            state: b,
            executeStateUpdate: y,
            visualState: U,
            isDisabled: k,
            error: D,
          } = (0, m.Ee)(n, {
            type: h,
            selectedOptions: Array.from(O.values()),
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
            Z(e), L(new Set(e.keys()));
          }
        }, [b]);
        let w = a.useCallback(() => {
          y({ type: h, selectedOptions: Array.from(O.values()) }) &&
            L(new Set(O.keys()));
        }, [y, h, O]);
        a.useEffect(() => {
          if (
            !(
              x ||
              S ||
              (O.size === j.size && Array.from(O.keys()).every((e) => j.has(e)))
            )
          )
            w();
        }, [x, S, j, O, w]);
        let G = 0 === O.size || x,
          H = {
            isDisabled: _ || k,
            wrapperClassName: E.select,
            options: (e) =>
              new Promise((n) => {
                n(l(e));
              }),
            placeholder: G
              ? null != N
                ? N
                : p.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER
              : void 0,
            onClose: () => I(!1),
            onOpen: () => I(!0),
            onBlur: () => g(!1),
            maxVisibleItems: 5,
            optionClassName: E.__invalid_selectOption,
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
              className: E.container,
              children: [
                T > 1
                  ? (0, i.jsx)(
                      o.SearchableSelect,
                      {
                        className: E.badges,
                        value: Array.from(O.values()),
                        onChange: (e) => {
                          !x && g(!0), Z(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: s()({
                          [E.soloInput]: 0 === O.size,
                          [E.inlineInput]: O.size > 0,
                          [E.hidden]: !G,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...H,
                      },
                      M,
                    )
                  : (0, i.jsx)(
                      o.SearchableSelect,
                      {
                        className: (E.badges, E.singleSelect),
                        value: [...O.values()][0],
                        onChange: (e) =>
                          Z(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...H,
                      },
                      M,
                    ),
                B
                  ? (0, i.jsx)("div", {
                      className: E.loading,
                      children: (0, i.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != D
              ? (0, i.jsx)(d.st, { ...(0, d.c4)(D), className: v.error })
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
          return h;
        },
      }),
        l(47120);
      var t = l(735250),
        r = l(470079),
        i = l(120356),
        a = l.n(i),
        u = l(481060),
        s = l(596454),
        o = l(911969),
        c = l(868819),
        d = l(970184),
        m = l(280501),
        f = l(689938),
        p = l(252443);
      function E(e) {
        let {
            emoji: n,
            label: l,
            description: r,
            isDisabled: i,
            isOffset: u,
          } = e,
          o = a()(p.labelContainer, {
            [p.disabled]: i,
            [p.offset]: null == n && u,
          });
        return (0, t.jsxs)("div", {
          className: p.option,
          children: [
            null != n
              ? (0, t.jsx)(s.Z, {
                  className: p.emoji,
                  emojiId: n.id,
                  emojiName: n.name,
                  animated: n.animated,
                })
              : null,
            (0, t.jsxs)("div", {
              className: o,
              children: [
                (0, t.jsx)("strong", { className: p.label, children: l }),
                null != r
                  ? (0, t.jsx)("span", {
                      className: p.description,
                      children: r,
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
          className: p.option,
          children: (0, t.jsxs)("div", {
            className: a()(p.value, p.singleValue),
            children: [
              null != n
                ? (0, t.jsx)(s.Z, {
                    className: p.emoji,
                    src: n.src,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: n.animated,
                  })
                : null,
              (0, t.jsx)("span", {
                className: p.singleValueLabel,
                children: l,
              }),
            ],
          }),
        });
      }
      function C(e) {
        let { options: n } = e;
        return (0, t.jsx)("div", {
          className: p.option,
          children: (0, t.jsx)("div", {
            className: p.value,
            children: n.map((e, n) =>
              (0, t.jsxs)(
                "div",
                {
                  className: p.optionTag,
                  children: [
                    null != e.emoji
                      ? (0, t.jsx)(s.Z, {
                          className: p.smallEmoji,
                          src: e.emoji.src,
                          emojiId: e.emoji.id,
                          emojiName: e.emoji.name,
                          animated: e.emoji.animated,
                        })
                      : null,
                    (0, t.jsx)(
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
      function h(e) {
        let {
            type: n,
            options: l,
            id: i,
            placeholder: a,
            maxValues: s,
            minValues: h,
            disabled: N,
          } = e,
          T = r.useMemo(
            () => l.filter((e) => e.default).map((e) => e.value),
            [l],
          ),
          {
            state: _,
            executeStateUpdate: x,
            visualState: I,
            isDisabled: S,
            error: g,
          } = (0, d.Ee)(e, { type: n, values: T }),
          O = s > 1,
          Z = I === m.gH.LOADING,
          [j, L] = r.useState(!1),
          [A, R] = r.useState(
            () => new Set(l.filter((e) => e.default).map((e) => e.value)),
          ),
          [M, P] = r.useState(A),
          b = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
        r.useEffect(() => {
          if ((null == _ ? void 0 : _.type) === o.re.STRING_SELECT) {
            let e = new Set(_.values);
            R(e), P(e);
          } else {
            let e = new Set(T);
            R(e), P(e);
          }
        }, [i, T, _]);
        let y = r.useCallback(() => {
          if (M !== A)
            x({ type: o.re.STRING_SELECT, values: Array.from(A) }) && P(A);
        }, [A, M, P, x]);
        r.useEffect(() => {
          if (
            !(j || (A.size === M.size && Array.from(M).every((e) => A.has(e))))
          )
            y();
        }, [j, A, M, y]);
        let U = u.singleSelect;
        O ? (U = u.multiSelect) : 0 === h && (U = u.toggleSelect);
        let k = (0, u.useVariableSelect)({
          value: A,
          onChange: (e) => R(e),
          onSelectInteraction: U,
        });
        return (0, t.jsxs)(r.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: p.container,
              children: [
                (0, t.jsx)(u.Select, {
                  isDisabled: N || S,
                  className: p.select,
                  options: l.map((e) => ({
                    ...e,
                    disabled: O && !A.has(e.value) && A.size === s,
                  })),
                  placeholder:
                    null != a
                      ? a
                      : f.Z.Messages
                          .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                  onClose: () => L(!1),
                  onOpen: () => L(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !O,
                  optionClassName: p.selectOption,
                  renderOptionLabel: (e) =>
                    (0, t.jsx)(E, {
                      ...e,
                      isDisabled: O && !A.has(e.value) && A.size === s,
                      isOffset: b,
                    }),
                  renderOptionValue: (e) =>
                    O
                      ? (0, t.jsx)(C, { options: e })
                      : (0, t.jsx)(v, { ...e[0] }),
                  ...k,
                }),
                Z
                  ? (0, t.jsx)("div", {
                      className: p.__invalid_loading,
                      children: (0, t.jsx)(u.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != g
              ? (0, t.jsx)(c.st, { ...(0, c.c4)(g), className: p.error })
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
        u = l(970184),
        s = l(293979),
        o = l(203079);
      function c(e) {
        let n;
        let {
            type: l,
            style: c,
            label: d,
            placeholder: m,
            minLength: f,
            maxLength: p,
            required: E,
            value: v,
          } = e,
          [C, h] = r.useState(null != v ? v : ""),
          {
            state: N,
            executeStateUpdate: T,
            error: _,
          } = (0, u.Ee)(e, null != v ? { type: l, value: v } : void 0),
          x = (0, s.hz)(e.id);
        r.useEffect(() => {
          (null == N ? void 0 : N.type) === l && h(N.value);
        }, [l, N]);
        let I = {
          name: d,
          value: C,
          placeholder: m,
          minLength: f,
          maxLength: p,
          required: E,
          onChange: (e) => {
            h(e), T({ type: l, value: e });
          },
          autoFocus: x,
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
          required: E,
          className: o.formItem,
          error: _,
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
      var t = l(735250);
      l(470079);
      var r = l(442837),
        i = l(169525),
        a = l(611170),
        u = l(128854),
        s = l(884182),
        o = l(546432),
        c = l(780088),
        d = l(592125),
        m = l(52824),
        f = l(823379),
        p = l(970184),
        E = l(981631);
      function v(e) {
        let { message: n } = (0, p.CJ)(),
          l = (0, r.e7)([d.Z], () =>
            d.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: v,
            shouldRedactExplicitContent: C,
            gifAutoPlay: h,
            getGifFavButton: N,
            getOnMediaItemContextMenu: T,
          } = (0, u.c)();
        if (null == n || null == l) return null;
        let _ = e.items
            .map((e) => (0, c.j0)(e.media, E.VqG, v, C))
            .filter(f.lm),
          x = {
            source: "Media Mosaic",
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type,
          },
          I = _.length > 1 ? (0, c.Cx)(_, x) : {};
        function S(e, n) {
          let l = e.originalItem;
          return (0, i.lK)(l.media, n, l.spoiler);
        }
        let g = e.items.map((e) => {
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
              autoPlayGif: h,
              getObscureReason: S,
              renderImageComponent: a.a,
              renderVideoComponent: a.r,
              renderAudioComponent: E.dG4,
              renderPlaintextFilePreview: E.dG4,
              renderGenericFileComponent: E.dG4,
              renderMosaicItemFooter: E.dG4,
              gifFavoriteButton: N(l),
              onPlay: (e, n, l) => {},
              canRemoveItem: !1,
              onRemoveItem: E.dG4,
            },
            i = (0, m.q)({ proxyURL: l.proxyUrl, url: l.url });
          return i in I && (r.onClick = I[i]), r;
        });
        return (0, t.jsx)("div", { children: (0, t.jsx)(s.Z, { items: g }) });
      }
    },
    676149: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(911969),
        u = l(178519);
      function s(e) {
        let { divider: n, spacing: l } = e;
        return (0, t.jsx)("div", {
          className: i()({
            [u.spacingLarge]: l === a.US.LARGE,
            [u.divider]: n,
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
        u = l(454585),
        s = l(937889),
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
                      ? (0, s.rs)(n.message, c.u)
                      : (0, s.p6)({
                          channelId: n.channelId,
                          renderOptions: c.u,
                        })),
                  u.Z.parse(e, !0, l));
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
        u = l(52396),
        s = l(592125),
        o = l(970184),
        c = l(151200),
        d = l(96513);
      function m(e) {
        let { contentInventoryEntry: n, channel: l } = e,
          { parsedEntry: r } = (0, u.B)();
        return (0, t.jsx)(c.Z, { ...r, entry: n, channel: l });
      }
      function f(e) {
        let n = (0, o.CJ)();
        i()(
          null != n,
          "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
        );
        let { channelId: l } = n,
          r = (0, a.e7)([s.Z], () => s.Z.getChannel(l));
        return (
          i()(null != r, "channel must be defined"),
          (0, t.jsx)(u.r, {
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
          return h;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        i = l.n(r),
        a = l(481060),
        u = l(256139),
        s = l(328731),
        o = l(435439),
        c = l(206295),
        d = l(297781),
        m = l(43205),
        f = l(313201),
        p = l(792125),
        E = l(231338),
        v = l(689938),
        C = l(917056);
      function h(e) {
        let {
            entry: n,
            channel: l,
            title: r,
            subtitle: h,
            thumbnailUrl: N,
            onClickTitle: T,
            onClickSubtitle: _,
            onClickThumbnail: x,
            providerIconProps: I,
            style: S = {},
          } = e,
          g = (0, f.Dt)(),
          { primaryColor: O, secondaryColor: Z } = (0, c.Z)(N);
        return (
          null != N &&
            (S.background = "linear-gradient(45deg, "
              .concat(O, ", ")
              .concat(Z, ")")),
          (0, t.jsx)(a.ThemeContextProvider, {
            theme: E.BR.DARK,
            children: (0, t.jsxs)("figure", {
              "aria-roledescription":
                v.Z.Messages
                  .CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
              "aria-labelledby": g,
              "data-disable-adaptive-theme": !0,
              className: i()(C.container, (0, p.Q)(E.BR.DARK)),
              style: S,
              children: [
                (0, t.jsx)(a.Clickable, {
                  onClick: x,
                  className: i()(
                    C.thumbnailContainer,
                    null != x && C.clickable,
                  ),
                  children: (0, t.jsx)(m.f, {
                    src: N,
                    constrain: "width",
                    size: 64,
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
                    (0, t.jsx)(u.Z, {
                      onClick: T,
                      children: (0, t.jsx)(a.Heading, {
                        id: g,
                        variant: "heading-md/medium",
                        lineClamp: 1,
                        className: i()(C.textPrimary, C.truncatedText),
                        scaleFontToUserSetting: !0,
                        children: r,
                      }),
                    }),
                    null != h
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(a.Spacer, { size: 2 }),
                            (0, t.jsx)(u.Z, {
                              onClick: _,
                              children: (0, t.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                className: i()(
                                  C.textSecondary,
                                  C.truncatedText,
                                ),
                                lineClamp: 1,
                                scaleFontToUserSetting: !0,
                                children: h,
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, t.jsx)(d.PZ, {
                      className: C.badges,
                      entry: n,
                      location: d.Gt.EMBED,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: C.headerIcons,
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
          return u;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(868819),
        i = l(970184),
        a = l(53887);
      function u(e) {
        let { components: n, renderComponents: l } = e,
          { message: u } = (0, i.CJ)();
        return null == n || 0 === n.length
          ? null
          : (0, t.jsxs)("div", {
              className: a.container,
              children: [
                (0, t.jsx)("div", { className: a.children, children: l(n) }),
                null != u
                  ? (0, t.jsx)(r.ZP, {
                      className: a.error,
                      message: u,
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
          return u;
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
      function u(e) {
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
          return u;
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
      function u(e) {
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
//# sourceMappingURL=804cc342ee69a4d549e5.js.map
