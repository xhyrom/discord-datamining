"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70583"],
  {
    99981: function (e, n, t) {
      t.d(n, {
        q: function () {
          return c;
        },
      });
      var l = t(481060),
        a = t(522474),
        i = t(592125),
        r = t(403404),
        o = t(701488),
        s = t(981631);
      async function c(e) {
        let {
          analyticsLocations: n,
          channelId: t,
          guildId: c,
          locationObject: u,
          initialSlide: d = o.ag.DIRECTORY,
          initialSelectedApplicationId: m,
        } = e;
        if ((0, l.hasModalOpen)(o.AC)) return;
        let _ = i.Z.getChannel(t),
          f = a.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT);
        await (0, r.Z)({
          analyticsLocations: n,
          channel: _,
          guildId: c,
          openInPopout: f,
          initialSlide: d,
          initialSelectedApplicationId: m,
          locationObject: null != u ? u : {},
        });
      }
    },
    574399: function (e, n, t) {
      t.d(n, {
        I: function () {
          return T;
        },
      });
      var l = t(735250),
        a = t(470079),
        i = t(442837),
        r = t(481060),
        o = t(16084),
        s = t(558381),
        c = t(821849),
        u = t(106976),
        d = t(488915),
        m = t(171246),
        _ = t(509545),
        f = t(55563),
        p = t(551428),
        E = t(937615),
        I = t(147496),
        C = t(519896),
        h = t(981631),
        N = t(689938);
      function T(e) {
        a.useEffect(() => {
          if (null != e) (0, o.$N)("", e), (0, s.km)(e);
        }, [e]);
        let n = (0, i.e7)([f.Z], () => (null != e ? f.Z.get(e) : void 0), [e]);
        a.useEffect(() => {
          (null == n ? void 0 : n.type) === h.epS.SUBSCRIPTION &&
            (0, c.GZ)(n.id);
        }, [n]);
        let t = (0, i.Wu)([_.Z], () => (null != e ? _.Z.getForSKU(e) : []), [
            e,
          ]),
          T = a.useMemo(
            () => (null != t ? t.map((e) => e.id)[0] : void 0),
            [t],
          ),
          x = (0, i.e7)([p.Z], () => (null != e ? p.Z.getForSKU(e) : void 0), [
            e,
          ]);
        a.useEffect(() => {
          if (null != T) (0, u.vY)(T);
        }, [T]);
        let v = null == n ? void 0 : n.applicationId,
          g = (0, i.e7)(
            [d.Z],
            () =>
              null != v
                ? d.Z.getSubscriptionGroupListingForApplication(v)
                : null,
            [v],
          ),
          b = a.useCallback(() => {
            if (
              (null == n ? void 0 : n.applicationId) == null ||
              (null == n ? void 0 : n.id) == null ||
              (null == g ? void 0 : g.id) == null ||
              (null == g ? void 0 : g.sku_flags) == null
            )
              return null;
            (0, r.openModal)((e) => {
              let { onClose: t, transitionState: a } = e;
              return (0, l.jsx)(C.SubscriptionDetailsModal, {
                appId: n.applicationId,
                groupListingId: g.id,
                groupListingType: (0, m.KW)(g.sku_flags) ? "user" : "guild",
                onClose: t,
                skuId: n.id,
                transitionState: a,
              });
            });
          }, [
            null == n ? void 0 : n.applicationId,
            null == n ? void 0 : n.id,
            null == g ? void 0 : g.id,
            null == g ? void 0 : g.sku_flags,
          ]),
          S = a.useCallback(() => {
            if (null == n) return null;
            (0, r.openModal)((e) => {
              let { onClose: t, transitionState: a } = e;
              return (0, l.jsx)(I.ItemDetailsModal, {
                appId: n.applicationId,
                skuId: n.id,
                onClose: t,
                transitionState: a,
              });
            });
          }, [n]);
        if (
          null != n &&
          null != x &&
          (null == n || n.type !== h.epS.SUBSCRIPTION || null != g)
        ) {
          if (null == e || (null != n && !n.available))
            return {
              disabled: !0,
              label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
            };
          if (n.type === h.epS.SUBSCRIPTION) {
            if (null == t || 0 === t.length)
              return {
                disabled: !0,
                label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              };
            let e = t[0];
            return {
              disabled: !1,
              label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                skuName: n.name,
                price: (0, E.T4)(e.price, e.currency),
              }),
              onClick: b,
            };
          }
          return null == n.price
            ? {
                disabled: !0,
                label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              }
            : {
                disabled: !1,
                label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                  skuName: n.name,
                  price: (0, E.T4)(n.price.amount, n.price.currency),
                }),
                onClick: S,
              };
        }
      }
    },
    328731: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = t(735250),
        a = t(120356),
        i = t.n(a),
        r = t(481060),
        o = t(318374),
        s = t(5192),
        c = t(192918),
        u = t(256139),
        d = t(91907),
        m = t(866040),
        _ = t(689938),
        f = t(182408);
      function p(e) {
        let { entry: n, channel: t, className: a } = e,
          {
            displayParticipants: p,
            participant1: E,
            participant2: I,
            numOtherParticipants: C,
            orderedParticipants: h,
          } = (0, c.Z)(n),
          N = [E, I];
        return (0, l.jsxs)("div", {
          className: i()(f.container, a),
          children: [
            p.length > 0
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(m.Z, {
                      participants: h,
                      channel: t,
                      children: (e) =>
                        (0, l.jsx)(r.Clickable, {
                          className: f.clickable,
                          ...e,
                          children: (0, l.jsx)(o.Z, {
                            maxUsers: 3,
                            users: p,
                            size: r.AvatarSizes.SIZE_20,
                            avatarClassName: f.stackedAvatar,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0,
                          }),
                        }),
                    }),
                    (0, l.jsx)(r.Spacer, { size: 6, horizontal: !0 }),
                  ],
                })
              : null,
            (0, l.jsx)(r.Heading, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              className: i()(f.truncatedText, f.usersHeader),
              scaleFontToUserSetting: !0,
              children: _.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                user0: s.ZP.getName(t.guild_id, t.id, N[0]),
                user1: s.ZP.getName(t.guild_id, t.id, N[1]),
                countOthers: C,
                name0Hook: (e, n) =>
                  (0, l.jsx)(d.Z, { text: e, user: N[0], channel: t }, n),
                name1Hook: (e, n) =>
                  (0, l.jsx)(d.Z, { text: e, user: N[1], channel: t }, n),
                countOthersHook: (e, n) =>
                  (0, l.jsx)(
                    m.Z,
                    {
                      participants: h,
                      channel: t,
                      children: (n) =>
                        (0, l.jsx)(u.Z, {
                          ...n,
                          tag: "span",
                          children: (0, l.jsx)(r.Text, {
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
    435439: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = t(735250),
        a = t(481060),
        i = t(374129),
        r = t(639351),
        o = t(908841),
        s = t(410441),
        c = t(206583),
        u = t(689938);
      let d = {
          [c.kG.SPOTIFY]: o.Z,
          [c.kG.CRUNCHYROLL]: a.CrunchyrollNeutralIcon,
          [c.kG.XBOX]: r.Z,
          [c.kG.PLAYSTATION]: i.Z,
        },
        m = {
          [c.kG.SPOTIFY]: () => u.Z.Messages.SPOTIFY,
          [c.kG.CRUNCHYROLL]: () => u.Z.Messages.CRUNCHYROLL,
          [c.kG.XBOX]: () => u.Z.Messages.XBOX,
          [c.kG.PLAYSTATION]: () => u.Z.Messages.PLAYSTATION,
        };
      function _(e) {
        var n;
        let { type: t, "aria-label": a, ...i } = e,
          r = d[t];
        if (null == r) return null;
        let o =
          null != a
            ? a
            : null === (n = m[t]) || void 0 === n
              ? void 0
              : n.call(m);
        return (0, l.jsx)(s.Z, { Icon: r, ...i, "aria-label": o });
      }
    },
    96513: function (e, n, t) {
      var l, a;
      t.d(n, {
        _: function () {
          return l;
        },
      }),
        ((a = l || (l = {}))[(a.EMBED = 1)] = "EMBED");
    },
    52396: function (e, n, t) {
      t.d(n, {
        B: function () {
          return E;
        },
        r: function () {
          return C;
        },
      }),
        t(411104);
      var l = t(735250),
        a = t(470079),
        i = t(512722),
        r = t.n(i),
        o = t(876215),
        s = t(775379),
        c = t(879046),
        u = t(214597),
        d = t(498187),
        m = t(482417),
        _ = t(301419),
        f = t(397035);
      let p = a.createContext(void 0);
      function E() {
        let e = a.useContext(p);
        return (
          r()(
            null != e,
            "useEntryDataContext must be used within a EntryDataContextProvider",
          ),
          e
        );
      }
      function I(e) {
        let { entry: n, ...t } = e,
          a = {
            baseEntryData: (0, u.Z)({ entry: n, channel: t.channel }),
            ...t,
          };
        switch (n.content_type) {
          case o.s.TOP_ARTIST:
            return (0, l.jsx)(N, { entry: n, ...a });
          case o.s.TOP_GAME:
            return (0, l.jsx)(T, { entry: n, ...a });
          case o.s.PLAYED_GAME:
            return (0, l.jsx)(x, { entry: n, ...a });
          case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(v, { entry: n, ...a });
          case o.s.LISTENED_SESSION:
            return (0, l.jsx)(g, { entry: n, ...a });
          case o.s.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(h, { entry: n, ...a });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function C(e) {
        let { errorFallback: n, ...t } = e;
        return (0, l.jsx)(s.S, {
          fallback: n,
          children: (0, l.jsx)(I, { ...t }),
        });
      }
      function h(e) {
        let { entry: n, children: t, ...a } = e,
          i = (0, c.Z)({ entry: n, ...a });
        return (0, l.jsx)(p.Provider, {
          value: { parsedEntry: i, ...a },
          children: t,
        });
      }
      function N(e) {
        let { entry: n, children: t, ...a } = e,
          i = (0, _.Z)({ entry: n, ...a });
        return (0, l.jsx)(p.Provider, {
          value: { parsedEntry: i, ...a },
          children: t,
        });
      }
      function T(e) {
        let { entry: n, children: t, ...a } = e,
          i = (0, d.Z)({ entry: n, ...a });
        return (0, l.jsx)(p.Provider, {
          value: { parsedEntry: i, ...a },
          children: t,
        });
      }
      function x(e) {
        let { entry: n, children: t, ...a } = e,
          i = (0, d.Z)({ entry: n, ...a });
        return (0, l.jsx)(p.Provider, {
          value: { parsedEntry: i, ...a },
          children: t,
        });
      }
      function v(e) {
        let { entry: n, children: t, ...a } = e,
          i = (0, f.Z)({ entry: n, ...a });
        return (0, l.jsx)(p.Provider, {
          value: { parsedEntry: i, ...a },
          children: t,
        });
      }
      function g(e) {
        let { entry: n, children: t, ...a } = e,
          i = (0, m.Z)({ entry: n, ...a });
        return (0, l.jsx)(p.Provider, {
          value: { parsedEntry: i, ...a },
          children: t,
        });
      }
    },
    775379: function (e, n, t) {
      t.d(n, {
        S: function () {
          return a;
        },
      }),
        t(47120);
      var l = t(470079);
      class a extends l.PureComponent {
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
          return m;
        },
      });
      var l = t(442837),
        a = t(2052),
        i = t(99981),
        r = t(906732),
        o = t(835473),
        s = t(914010),
        c = t(561308),
        u = t(701488),
        d = t(689938);
      function m(e) {
        let { entry: n } = e,
          t = (0, o.q)(n.extra.application_id),
          m = null == t ? void 0 : t.getIconURL(u.Si.LARGE),
          _ = (0, l.e7)([s.Z], () => s.Z.getGuildId()),
          f = n.extra.activity_name,
          p = (0, a.O)(),
          { analyticsLocations: E } = (0, r.ZP)(),
          I =
            (0, c.kr)(n) && !(0, c.n2)(n)
              ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
          C = {
            onClick: () => {
              null != _ &&
                (0, i.q)({
                  guildId: _,
                  channelId: void 0,
                  locationObject: p.location,
                  initialSelectedApplicationId: n.extra.application_id,
                  initialSlide: u.ag.SELECT_CHANNEL,
                  analyticsLocations: E,
                });
            },
            ariaDescription:
              d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format(
                { title: f },
              ),
          };
        return {
          thumbnailUrl: m,
          title: f,
          titleClickable: C,
          thumbnailClickable: C,
          userDescription: I,
        };
      }
    },
    214597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(470079),
        a = t(902704),
        i = t(232567),
        r = t(720202),
        o = t(594174);
      function s(e) {
        let { entry: n, channel: t } = e,
          s = l.useRef([]);
        return (
          l.useEffect(() => {
            if (!(0, a.E)(s.current, n.participants))
              (s.current = n.participants),
                n.participants
                  .filter((e) => null == o.default.getUser(e))
                  .forEach((e) => {
                    null == t.guild_id
                      ? (0, i.PR)(e)
                      : r.Z.requestMember(t.guild_id, e);
                  });
          }, [n, t.guild_id]),
          {}
        );
      }
    },
    498187: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = t(876215),
        a = t(758713),
        i = t(835473),
        r = t(810568),
        o = t(168524),
        s = t(561308),
        c = t(206583),
        u = t(96513),
        d = t(701488),
        m = t(689938);
      let _ = { [a.z.XBOX]: c.kG.XBOX, [a.z.PLAYSTATION]: c.kG.PLAYSTATION },
        f = { [u._.EMBED]: r.m1.Embed };
      function p(e) {
        let n,
          t,
          { entry: a, location: r, baseEntryData: c } = e,
          u = (0, i.q)(a.extra.application_id),
          p = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
          E = a.extra.game_name;
        if (null != a.extra.platform) {
          let e = _[a.extra.platform];
          null != e && (n = { type: e });
        }
        t =
          a.content_type === l.s.PLAYED_GAME
            ? (0, s.kr)(a) && !(0, s.n2)(a)
              ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2
            : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
        let I = f[r],
          C = {
            onClick: (0, o.Z)({
              location: I,
              applicationId: a.extra.application_id,
              source: I,
              trackEntryPointImpression: !0,
              sourceUserId: a.author_id,
            }),
            ariaDescription:
              m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format(
                { gameName: E },
              ),
          };
        return {
          ...c,
          thumbnailUrl: p,
          title: E,
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
        a = t(740605),
        i = t(206583),
        r = t(616922),
        o = t(689938);
      function s(e) {
        let n,
          { entry: t, baseEntryData: s } = e,
          c = t.extra.entries[0].media,
          u = c.artists[0],
          { title: d, provider: m, image_url: _ } = c,
          f = u.name,
          p = {
            onClick: () => (0, a.o)(r.Hw.TRACK, c.external_id),
            ariaDescription:
              o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          },
          E = {
            onClick: () => (0, a.o)(r.Hw.ARTIST, u.external_id),
            ariaDescription:
              o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: f },
              ),
          };
        return (
          m === l.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
          {
            ...s,
            title: d,
            subtitle: f,
            thumbnailUrl: _,
            titleClickable: p,
            subtitleClickable: E,
            thumbnailClickable: p,
            userDescription:
              o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
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
        a = t(740605),
        i = t(206583),
        r = t(616922),
        o = t(689938);
      function s(e) {
        let n,
          { entry: t, baseEntryData: s } = e,
          { provider: c, image_url: u } = t.extra.media,
          d = t.extra.artist.name,
          m = {
            onClick: () =>
              (0, a.o)(r.Hw.ALBUM, t.extra.media.external_parent_id),
            ariaDescription:
              o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: t.extra.media.parent_title },
              ),
          },
          _ = {
            onClick: () => (0, a.o)(r.Hw.ARTIST, t.extra.artist.external_id),
            ariaDescription:
              o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          };
        return (
          c === l.p.SPOTIFY && (n = { type: i.kG.SPOTIFY }),
          {
            ...s,
            title: d,
            thumbnailUrl: u,
            titleClickable: _,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription:
              o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
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
      var l = t(470079),
        a = t(835473),
        i = t(81063),
        r = t(591759),
        o = t(561308),
        s = t(206583),
        c = t(701488),
        u = t(689938);
      function d(e) {
        let n,
          { entry: t, baseEntryData: d } = e,
          m = (0, a.q)(t.extra.application_id),
          _ = null == m ? void 0 : m.getIconURL(128),
          f = (0, i.getAssetImage)(
            t.extra.application_id,
            t.extra.media_assets_large_image,
            [c.Si.LARGE, c.Si.LARGE],
          ),
          p = t.extra.media_title,
          E = t.extra.media_subtitle,
          I =
            (0, o.kr)(t) && !(0, o.n2)(t)
              ? u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
              : u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
          C = { type: s.kG.CRUNCHYROLL },
          h = l.useMemo(() => {
            if (null == t.extra.url) return;
            let e = r.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [t.extra.url]);
        return (
          null != h &&
            (n = {
              href: r.Z.format(h),
              ariaDescription:
                u.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format(
                  { title: p },
                ),
            }),
          {
            ...d,
            thumbnailUrl: null != f ? f : _,
            title: p,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: E,
            userDescription: I,
            providerIconProps: C,
          }
        );
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
          return _;
        },
        _H: function () {
          return f;
        },
        af: function () {
          return p;
        },
        tx: function () {
          return E;
        },
      }),
        t(47120);
      var l = t(524846),
        a = t(911969),
        i = t(592125),
        r = t(271383),
        o = t(430824),
        s = t(594174),
        c = t(483360),
        u = t(823379),
        d = t(5192),
        m = t(280501);
      t(892902);
      let _ = 1e3;
      function f(e, n, t) {
        let l = i.Z.getChannel(t);
        if (null == l) return [];
        let r = e === a.re.USER_SELECT || e === a.re.MENTIONABLE_SELECT,
          o = e === a.re.ROLE_SELECT || e === a.re.MENTIONABLE_SELECT,
          { users: s, roles: u } = c.ZP.queryMentionResults({
            query: n,
            channel: l,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: r,
            canMentionRoles: o,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
          }),
          _ = s.map((e) => {
            var n;
            let a = d.ZP.getNickname(l.getGuildId(), t, e.user);
            return {
              type: m.tM.USER,
              value: e.user.id,
              label:
                null !== (n = null != a ? a : e.user.globalName) && void 0 !== n
                  ? n
                  : e.user.username,
            };
          });
        return [
          ..._,
          ...u.map((e) => ({ type: m.tM.ROLE, value: e.id, label: e.name })),
        ];
      }
      function p(e, n, t) {
        let l = i.Z.getChannel(n);
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
      function E(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let a = o.Z.getGuild(n);
        return e
          .map((e) => {
            switch (e.type) {
              case l.$.USER: {
                var n;
                let t = s.default.getUser(e.id);
                if (null == t) return null;
                let l = null != a ? r.ZP.getNick(a.id, t.id) : void 0;
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
                if (null == a) return null;
                let n = o.Z.getRole(a.id, e.id);
                if (null == n) return null;
                return { type: m.tM.ROLE, value: n.id, label: n.name };
              }
              case l.$.CHANNEL: {
                if (null == a) return null;
                let n = i.Z.getChannel(e.id);
                if (
                  null == n ||
                  n.guild_id !== a.id ||
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
          return N;
        },
        xX: function () {
          return h;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        r = t(911969),
        o = t(970184),
        s = t(987106),
        c = t(927057),
        u = t(574597),
        d = t(378975),
        m = t(413991),
        _ = t(12067),
        f = t(676149),
        p = t(861529),
        E = t(770009),
        I = t(889515),
        C = t(751319);
      function h(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case r.re.ACTION_ROW:
                return (0, l.jsx)(I.Z, { ...e, renderComponents: h }, n);
              case r.re.BUTTON:
                return (0, l.jsx)(s.Z, { ...e }, n);
              case r.re.STRING_SELECT:
                return (0, l.jsx)(d.Z, { ...e }, n);
              case r.re.CHANNEL_SELECT:
                return (0, l.jsx)(c.Z, { ...e }, n);
              case r.re.USER_SELECT:
              case r.re.ROLE_SELECT:
              case r.re.MENTIONABLE_SELECT:
                return (0, l.jsx)(u.Z, { ...e }, n);
              case r.re.INPUT_TEXT:
                return (0, l.jsx)(m.Z, { ...e }, n);
              case r.re.TEXT:
                return (0, l.jsx)(p.Z, { ...e }, n);
              case r.re.MEDIA_GALLERY:
                return (0, l.jsx)(_.Z, { ...e }, n);
              case r.re.SEPARATOR:
                return (0, l.jsx)(f.Z, { ...e }, n);
              case r.re.CONTENT_INVENTORY_ENTRY:
                return (0, l.jsx)(E.Z, { ...e }, n);
            }
          })(e, n.toString()),
        );
      }
      function N(e) {
        let { message: n } = e,
          { components: t } = n;
        return 0 === t.length
          ? null
          : (0, l.jsx)("div", {
              className: i()([
                C.container,
                { [C.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, l.jsx)(o.Il, { message: n, children: h(t) }),
            });
      }
    },
    987106: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        r = t(392711),
        o = t(481060),
        s = t(239091),
        c = t(596454),
        u = t(911969),
        d = t(574399),
        m = t(572004),
        _ = t(49012),
        f = t(970184),
        p = t(280501),
        E = t(689938),
        I = t(880609);
      function C(e) {
        let { url: n, onSelect: t } = e;
        return m.wS && null != n
          ? (0, l.jsx)(o.Menu, {
              navId: "component-button",
              onClose: s.Zy,
              "aria-label":
                E.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: t,
              children: (0, l.jsx)(o.MenuGroup, {
                children: (0, l.jsx)(o.MenuItem, {
                  id: "copy",
                  label:
                    E.Z.Messages
                      .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function h(e) {
        let n;
        let { label: t, style: a, disabled: m, emoji: E, url: h, skuId: N } = e,
          {
            executeStateUpdate: T,
            visualState: x,
            isDisabled: v,
          } = (0, f.Ee)(e),
          g = (0, d.I)(N),
          b = null != N && a === u.ZJ.PREMIUM,
          S = b && (null == g ? void 0 : g.disabled),
          O = b ? (null == g ? void 0 : g.label) : t,
          j = null != E,
          M = null != O && O.length > 0,
          Z = a === u.ZJ.LINK && null != h && h.length > 0,
          y = x === p.gH.LOADING || (b && null == g);
        return (
          (n = Z
            ? () => {
                (0, _.q)({ href: null != h ? h : "", shouldConfirm: !0 });
              }
            : b
              ? null != g && !1 === g.disabled
                ? g.onClick
                : r.noop
              : () => T()),
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
            })(a),
            size: o.Button.Sizes.SMALL,
            disabled: m || x === p.gH.DISABLED || v || S,
            onClick: n,
            onContextMenu: (e) => {
              Z && (0, s.vq)(e, (e) => (0, l.jsx)(C, { ...e, url: h }));
            },
            role: Z ? "link" : "button",
            children: [
              (0, l.jsxs)("div", {
                className: i()(I.content, { [I.hidden]: y, [I.premium]: b }),
                "aria-hidden": y,
                children: [
                  b
                    ? (0, l.jsx)("div", {
                        className: I.shopIcon,
                        children: (0, l.jsx)(o.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  j
                    ? (0, l.jsx)(c.Z, {
                        className: i()({ [I.textEmoji]: M }),
                        src: E.src,
                        emojiId: E.id,
                        emojiName: E.name,
                        animated: E.animated,
                      })
                    : null,
                  M
                    ? (0, l.jsx)("div", { className: I.label, children: O })
                    : null,
                  Z
                    ? (0, l.jsx)(o.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: I.launchIcon,
                      })
                    : null,
                ],
              }),
              y
                ? (0, l.jsx)("div", {
                    className: I.loading,
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
          return f;
        },
      });
      var l = t(735250),
        a = t(470079),
        i = t(481060),
        r = t(471445),
        o = t(592125),
        s = t(430824),
        c = t(970184),
        u = t(811654),
        d = t(344991),
        m = t(981631),
        _ = t(296555);
      function f(e) {
        var n;
        let { channelTypes: t } = e,
          f = (0, c.CJ)(),
          p =
            null == f
              ? void 0
              : null === (n = f.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          E = o.Z.getChannel(p),
          I = s.Z.getGuild(null == E ? void 0 : E.getGuildId()),
          C = a.useMemo(
            () => (0, u.tx)(e.defaultValues, null == I ? void 0 : I.id, t),
            [e.defaultValues, I, t],
          );
        return (0, l.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, u.af)(e, p, t),
          renderIcon: (e, n) => {
            let t = o.Z.getChannel(null == e ? void 0 : e.value);
            if (null == t) return null;
            let a =
              t.type === m.d4z.GUILD_CATEGORY ? i.FolderIcon : (0, r.KS)(t);
            return null != a
              ? (0, l.jsx)(a, {
                  size: "custom",
                  color: "currentColor",
                  width: n,
                  height: n,
                })
              : null;
          },
          renderOptionLabel: (e) =>
            (0, l.jsx)("span", { className: _.label, children: e.label }),
          defaultValues: C,
        });
      }
    },
    574597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(735250),
        a = t(470079),
        i = t(866442),
        r = t(481060),
        o = t(129861),
        s = t(91218),
        c = t(829883),
        u = t(518738),
        d = t(14263),
        m = t(592125),
        _ = t(430824),
        f = t(158776),
        p = t(594174),
        E = t(970184),
        I = t(280501),
        C = t(811654),
        h = t(344991),
        N = t(981631),
        T = t(296555);
      function x(e) {
        var n;
        let t = (0, E.CJ)(),
          x =
            null == t
              ? void 0
              : null === (n = t.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          v = m.Z.getChannel(x),
          g = _.Z.getGuild(null == v ? void 0 : v.getGuildId()),
          b = (0, d.Z)(null == g ? void 0 : g.id, C.HI),
          S = a.useMemo(
            () => (0, C.tx)(e.defaultValues, null == g ? void 0 : g.id),
            [e.defaultValues, g],
          );
        return (0, l.jsx)(h.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, C._H)(e.type, n, x),
          renderIcon: (e, n) => {
            let t = n === h.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === I.tM.USER) {
              let a = p.default.getUser(e.value);
              if (null == a) return;
              return (0, l.jsx)(r.Avatar, {
                size: t ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                src: a.getAvatarURL(null == g ? void 0 : g.id, n),
                status: t ? null : f.Z.getStatus(a.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === I.tM.ROLE) {
              var a;
              let t = null != g ? _.Z.getRole(g.id, e.value) : void 0;
              if (null == t || null == g) return;
              let o = (0, c._b)(g, t) ? (0, u.Kz)(t, n) : null;
              return null != o
                ? (0, l.jsx)(s.Z, { ...o })
                : (0, l.jsx)(r.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (a = t.colorString) && void 0 !== a
                        ? a
                        : (0, i.Rf)(N.p6O),
                    height: n,
                    width: n,
                  });
            }
          },
          renderOptionLabel: (e) => {
            let n = null;
            if (e.type === I.tM.USER) {
              let t = p.default.getUser(e.value);
              null != t &&
                (n = (0, l.jsx)(o.Z, {
                  className: T.tag,
                  usernameClass: T.username,
                  discriminatorClass: T.discriminator,
                  botClass: T.bot,
                  user: t,
                  forceUsername: !0,
                }));
            } else if (e.type === I.tM.ROLE) {
              let t = null != g ? _.Z.getRole(g.id, e.value) : void 0,
                a = null == t ? null : null == b ? void 0 : b[t.id];
              null != a &&
                (n = (0, l.jsxs)("div", {
                  className: T.roleCountContainer,
                  children: [
                    (0, l.jsx)(r.UserIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: T.roleCountIcon,
                    }),
                    (0, l.jsx)("span", {
                      className: T.roleCountText,
                      children: a,
                    }),
                  ],
                }));
            }
            return (0, l.jsxs)("span", {
              className: T.label,
              children: [
                (0, l.jsx)("span", {
                  className: T.labelText,
                  children: e.label,
                }),
                n,
              ],
            });
          },
          defaultValues: S,
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
        a,
        i = t(735250),
        r = t(470079),
        o = t(120356),
        s = t.n(o),
        c = t(481060),
        u = t(911969),
        d = t(868819),
        m = t(970184),
        _ = t(280501),
        f = t(689938),
        p = t(758183),
        E = t(252443);
      function I(e) {
        let { icon: n, iconSize: t } = e;
        return (0, i.jsx)("div", {
          className: p.iconContainer,
          style: { height: t, width: t },
          children: n,
        });
      }
      function C(e) {
        let {
            selectActionComponent: n,
            queryOptions: t,
            renderIcon: l,
            renderOptionLabel: a,
            defaultValues: o,
          } = e,
          { type: C, placeholder: h, maxValues: N, disabled: T } = n,
          [x, v] = r.useState(!1),
          [g, b] = r.useState(!1),
          [S, O] = r.useState(
            new Map(null == o ? void 0 : o.map((e) => [e.value, e])),
          ),
          [j, M] = r.useState(new Set(S.keys())),
          [Z, y] = r.useState(() => (null != o ? o : []).map((e) => e.value)),
          [R, L] = r.useState(0);
        r.useEffect(() => {
          let e = (null != o ? o : []).map((e) => e.value);
          if (e.every((e) => Z.includes(e)) && Z.every((n) => e.includes(n)))
            return;
          y(e);
          let n = new Map(null == o ? void 0 : o.map((e) => [e.value, e]));
          O(n), M(new Set(n.keys())), L((e) => e + 1);
        }, [o, Z]);
        let {
            state: A,
            executeStateUpdate: P,
            visualState: k,
            isDisabled: U,
            error: B,
          } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(S.values()),
          }),
          G = k === _.gH.LOADING;
        r.useEffect(() => {
          if (
            (null == A ? void 0 : A.type) === u.re.USER_SELECT ||
            (null == A ? void 0 : A.type) === u.re.ROLE_SELECT ||
            (null == A ? void 0 : A.type) === u.re.MENTIONABLE_SELECT ||
            (null == A ? void 0 : A.type) === u.re.CHANNEL_SELECT
          ) {
            let e = new Map(A.selectedOptions.map((e) => [e.value, e]));
            O(e), M(new Set(e.keys()));
          }
        }, [A]);
        let w = r.useCallback(() => {
          P({ type: C, selectedOptions: Array.from(S.values()) }) &&
            M(new Set(S.keys()));
        }, [P, C, S]);
        r.useEffect(() => {
          if (
            !(
              x ||
              g ||
              (S.size === j.size && Array.from(S.keys()).every((e) => j.has(e)))
            )
          )
            w();
        }, [x, g, j, S, w]);
        let D = 0 === S.size || x,
          V = {
            isDisabled: T || U,
            wrapperClassName: p.select,
            options: (e) =>
              new Promise((n) => {
                n(t(e));
              }),
            placeholder: D
              ? null != h
                ? h
                : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER
              : void 0,
            onClose: () => v(!1),
            onOpen: () => v(!0),
            onBlur: () => b(!1),
            maxVisibleItems: 5,
            optionClassName: p.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
              let { inPill: t } = n,
                a = t ? 16 : 24,
                r = l(e, a);
              return null != r ? (0, i.jsx)(I, { icon: r, iconSize: a }) : null;
            },
            renderOptionLabel: a,
          };
        return (0, i.jsxs)(r.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: p.container,
              children: [
                N > 1
                  ? (0, i.jsx)(
                      c.SearchableSelect,
                      {
                        className: p.badges,
                        value: Array.from(S.values()),
                        onChange: (e) => {
                          !x && b(!0), O(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: s()({
                          [p.soloInput]: 0 === S.size,
                          [p.inlineInput]: S.size > 0,
                          [p.hidden]: !D,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...V,
                      },
                      R,
                    )
                  : (0, i.jsx)(
                      c.SearchableSelect,
                      {
                        className: (p.badges, p.singleSelect),
                        value: [...S.values()][0],
                        onChange: (e) =>
                          O(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...V,
                      },
                      R,
                    ),
                G
                  ? (0, i.jsx)("div", {
                      className: p.loading,
                      children: (0, i.jsx)(c.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != B
              ? (0, i.jsx)(d.st, { ...(0, d.c4)(B), className: E.error })
              : null,
          ],
        });
      }
      ((a = l || (l = {}))[(a.PILL_ICON_SIZE = 16)] = "PILL_ICON_SIZE"),
        (a[(a.ROW_ICON_SIZE = 24)] = "ROW_ICON_SIZE");
    },
    378975: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        r = t.n(i),
        o = t(481060),
        s = t(596454),
        c = t(911969),
        u = t(868819),
        d = t(970184),
        m = t(280501),
        _ = t(689938),
        f = t(252443);
      function p(e) {
        let {
            emoji: n,
            label: t,
            description: a,
            isDisabled: i,
            isOffset: o,
          } = e,
          c = r()(f.labelContainer, {
            [f.disabled]: i,
            [f.offset]: null == n && o,
          });
        return (0, l.jsxs)("div", {
          className: f.option,
          children: [
            null != n
              ? (0, l.jsx)(s.Z, {
                  className: f.emoji,
                  emojiId: n.id,
                  emojiName: n.name,
                  animated: n.animated,
                })
              : null,
            (0, l.jsxs)("div", {
              className: c,
              children: [
                (0, l.jsx)("strong", { className: f.label, children: t }),
                null != a
                  ? (0, l.jsx)("span", {
                      className: f.description,
                      children: a,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { emoji: n, label: t } = e;
        return (0, l.jsx)("div", {
          className: f.option,
          children: (0, l.jsxs)("div", {
            className: r()(f.value, f.singleValue),
            children: [
              null != n
                ? (0, l.jsx)(s.Z, {
                    className: f.emoji,
                    src: n.src,
                    emojiId: n.id,
                    emojiName: n.name,
                    animated: n.animated,
                  })
                : null,
              (0, l.jsx)("span", {
                className: f.singleValueLabel,
                children: t,
              }),
            ],
          }),
        });
      }
      function I(e) {
        let { options: n } = e;
        return (0, l.jsx)("div", {
          className: f.option,
          children: (0, l.jsx)("div", {
            className: f.value,
            children: n.map((e, n) =>
              (0, l.jsxs)(
                "div",
                {
                  className: f.optionTag,
                  children: [
                    null != e.emoji
                      ? (0, l.jsx)(s.Z, {
                          className: f.smallEmoji,
                          src: e.emoji.src,
                          emojiId: e.emoji.id,
                          emojiName: e.emoji.name,
                          animated: e.emoji.animated,
                        })
                      : null,
                    (0, l.jsx)(
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
            options: t,
            id: i,
            placeholder: r,
            maxValues: s,
            minValues: C,
            disabled: h,
          } = e,
          N = a.useMemo(
            () => t.filter((e) => e.default).map((e) => e.value),
            [t],
          ),
          {
            state: T,
            executeStateUpdate: x,
            visualState: v,
            isDisabled: g,
            error: b,
          } = (0, d.Ee)(e, { type: n, values: N }),
          S = s > 1,
          O = v === m.gH.LOADING,
          [j, M] = a.useState(!1),
          [Z, y] = a.useState(
            () => new Set(t.filter((e) => e.default).map((e) => e.value)),
          ),
          [R, L] = a.useState(Z),
          A = a.useMemo(() => t.some((e) => null != e.emoji), [t]);
        a.useEffect(() => {
          if ((null == T ? void 0 : T.type) === c.re.STRING_SELECT) {
            let e = new Set(T.values);
            y(e), L(e);
          } else {
            let e = new Set(N);
            y(e), L(e);
          }
        }, [i, N, T]);
        let P = a.useCallback(() => {
          if (R !== Z)
            x({ type: c.re.STRING_SELECT, values: Array.from(Z) }) && L(Z);
        }, [Z, R, L, x]);
        a.useEffect(() => {
          if (
            !(j || (Z.size === R.size && Array.from(R).every((e) => Z.has(e))))
          )
            P();
        }, [j, Z, R, P]);
        let k = o.singleSelect;
        S ? (k = o.multiSelect) : 0 === C && (k = o.toggleSelect);
        let U = (0, o.useVariableSelect)({
          value: Z,
          onChange: (e) => y(e),
          onSelectInteraction: k,
        });
        return (0, l.jsxs)(a.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: f.container,
              children: [
                (0, l.jsx)(o.Select, {
                  isDisabled: h || g,
                  className: f.select,
                  options: t.map((e) => ({
                    ...e,
                    disabled: S && !Z.has(e.value) && Z.size === s,
                  })),
                  placeholder:
                    null != r
                      ? r
                      : _.Z.Messages
                          .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                  onClose: () => M(!1),
                  onOpen: () => M(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !S,
                  optionClassName: f.selectOption,
                  renderOptionLabel: (e) =>
                    (0, l.jsx)(p, {
                      ...e,
                      isDisabled: S && !Z.has(e.value) && Z.size === s,
                      isOffset: A,
                    }),
                  renderOptionValue: (e) =>
                    S
                      ? (0, l.jsx)(I, { options: e })
                      : (0, l.jsx)(E, { ...e[0] }),
                  ...U,
                }),
                O
                  ? (0, l.jsx)("div", {
                      className: f.__invalid_loading,
                      children: (0, l.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != b
              ? (0, l.jsx)(u.st, { ...(0, u.c4)(b), className: f.error })
              : null,
          ],
        });
      }
    },
    413991: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        i = t(481060),
        r = t(911969),
        o = t(970184),
        s = t(293979),
        c = t(203079);
      function u(e) {
        let n;
        let {
            type: t,
            style: u,
            label: d,
            placeholder: m,
            minLength: _,
            maxLength: f,
            required: p,
            value: E,
          } = e,
          [I, C] = a.useState(null != E ? E : ""),
          {
            state: h,
            executeStateUpdate: N,
            error: T,
          } = (0, o.Ee)(e, null != E ? { type: t, value: E } : void 0),
          x = (0, s.hz)(e.id);
        a.useEffect(() => {
          (null == h ? void 0 : h.type) === t && C(h.value);
        }, [t, h]);
        let v = {
          name: d,
          value: I,
          placeholder: m,
          minLength: _,
          maxLength: f,
          required: p,
          onChange: (e) => {
            C(e), N({ type: t, value: e });
          },
          autoFocus: x,
        };
        switch (u) {
          case r.FO.SMALL:
            n = (0, l.jsx)(i.TextInput, { ...v });
            break;
          case r.FO.PARAGRAPH:
            n = (0, l.jsx)(i.TextArea, { ...v });
        }
        return (0, l.jsx)(i.FormItem, {
          title: d,
          required: p,
          className: c.formItem,
          error: T,
          children: n,
        });
      }
    },
    12067: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(442837),
        i = t(169525),
        r = t(611170),
        o = t(128854),
        s = t(884182),
        c = t(546432),
        u = t(780088),
        d = t(592125),
        m = t(52824),
        _ = t(823379),
        f = t(970184),
        p = t(981631);
      function E(e) {
        let { message: n } = (0, f.CJ)(),
          t = (0, a.e7)([d.Z], () =>
            d.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: E,
            shouldRedactExplicitContent: I,
            gifAutoPlay: C,
            getGifFavButton: h,
            getOnMediaItemContextMenu: N,
          } = (0, o.c)();
        if (null == n || null == t) return null;
        let T = e.items
            .map((e) => (0, u.j0)(e.media, p.VqG, E, I))
            .filter(_.lm),
          x = {
            source: "Media Mosaic",
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type,
          },
          v = T.length > 1 ? (0, u.Cx)(T, x) : {};
        function g(e, n) {
          let t = e.originalItem;
          return (0, i.lK)(t.media, n, t.spoiler);
        }
        let b = e.items.map((e) => {
          let t = e.media,
            l = null == N ? void 0 : N(t),
            a = {
              message: n,
              item: {
                uniqueId: t.proxyUrl,
                originalItem: e,
                type: (0, c.pU)(t, !0),
                downloadUrl: t.url,
                height: t.height,
                width: t.width,
                spoiler: e.spoiler,
                contentType: t.contentType,
              },
              onContextMenu: l,
              autoPlayGif: C,
              getObscureReason: g,
              renderImageComponent: r.a,
              renderVideoComponent: r.r,
              renderAudioComponent: p.dG4,
              renderPlaintextFilePreview: p.dG4,
              renderGenericFileComponent: p.dG4,
              renderMosaicItemFooter: p.dG4,
              gifFavoriteButton: h(t),
              onPlay: (e, n, t) => {},
              canRemoveItem: !1,
              onRemoveItem: p.dG4,
            },
            i = (0, m.q)({ proxyURL: t.proxyUrl, url: t.url });
          return i in v && (a.onClick = v[i]), a;
        });
        return (0, l.jsx)("div", { children: (0, l.jsx)(s.Z, { items: b }) });
      }
    },
    676149: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        r = t(911969),
        o = t(178519);
      function s(e) {
        let { divider: n, spacing: t } = e;
        return (0, l.jsx)("div", {
          className: i()({
            [o.spacingLarge]: t === r.US.LARGE,
            [o.divider]: n,
          }),
        });
      }
    },
    861529: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        r = t.n(i),
        o = t(454585),
        s = t(937889),
        c = t(970184),
        u = t(870456),
        d = t(869261),
        m = t(910212);
      function _(e) {
        let { content: n, className: t } = e,
          i = (function (e) {
            let n = (0, c.CJ)();
            return (0, a.useMemo)(() => {
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
          className: r()([t, m.markup, d.markdownContainer]),
          children: i,
        });
      }
    },
    770009: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(512722),
        i = t.n(a),
        r = t(442837),
        o = t(52396),
        s = t(592125),
        c = t(970184),
        u = t(151200),
        d = t(96513);
      function m(e) {
        let { contentInventoryEntry: n, channel: t } = e,
          { parsedEntry: a } = (0, o.B)();
        return (0, l.jsx)(u.Z, { ...a, entry: n, channel: t });
      }
      function _(e) {
        let n = (0, c.CJ)();
        i()(
          null != n,
          "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
        );
        let { channelId: t } = n,
          a = (0, r.e7)([s.Z], () => s.Z.getChannel(t));
        return (
          i()(null != a, "channel must be defined"),
          (0, l.jsx)(o.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: a,
            errorFallback: null,
            children: (0, l.jsx)(m, { ...e, channel: a }),
          })
        );
      }
    },
    151200: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        r = t(481060),
        o = t(328731),
        s = t(442550),
        c = t(435439),
        u = t(206295),
        d = t(297781),
        m = t(313201),
        _ = t(792125),
        f = t(231338),
        p = t(689938),
        E = t(917056),
        I = t(671656);
      function C(e) {
        let {
            className: n,
            clickableClassName: t,
            clickable: a,
            children: o,
          } = e,
          s = (0, m.Dt)();
        if (null != a && "href" in a) {
          let { ariaDescription: e, href: c } = a;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(r.HiddenVisually, { id: s, children: e }),
              (0, l.jsx)(r.Anchor, {
                className: i()(n, t),
                href: c,
                "aria-describedby": s,
                children: o,
              }),
            ],
          });
        }
        let { onClick: c, ariaDescription: u } = null != a ? a : {};
        return (0, l.jsxs)(r.BlockInteractionsContext.Provider, {
          value: null == c,
          children: [
            null != c &&
              null != u &&
              (0, l.jsx)(r.HiddenVisually, { id: s, children: u }),
            (0, l.jsx)(r.Clickable, {
              onClick: c,
              "aria-describedby": null == c ? void 0 : s,
              className: i()(n, null != c && t),
              children: o,
            }),
          ],
        });
      }
      function h(e) {
        let { clickable: n, ...t } = e;
        return (0, l.jsx)(C, {
          ...t,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: I.clickable,
        });
      }
      function N(e) {
        let {
            entry: n,
            channel: t,
            title: a,
            subtitle: I,
            thumbnailUrl: N,
            titleClickable: T,
            subtitleClickable: x,
            thumbnailClickable: v,
            providerIconProps: g,
            style: b = {},
          } = e,
          S = (0, m.Dt)(),
          { primaryColor: O, secondaryColor: j } = (0, u.Z)(N);
        return (
          null != N &&
            (b.background = "linear-gradient(45deg, "
              .concat(O, ", ")
              .concat(j, ")")),
          (0, l.jsx)(r.ThemeContextProvider, {
            theme: f.BR.DARK,
            children: (0, l.jsxs)("figure", {
              "aria-roledescription":
                p.Z.Messages
                  .CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
              "aria-labelledby": S,
              "data-disable-adaptive-theme": !0,
              className: i()(E.container, (0, _.Q)(f.BR.DARK)),
              style: b,
              children: [
                (0, l.jsx)(C, {
                  className: E.thumbnailContainer,
                  clickableClassName: E.clickable,
                  clickable: v,
                  children: (0, l.jsx)(s.f, {
                    src: N,
                    constrain: "width",
                    size: 64,
                    "aria-hidden": !0,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: E.infoContainer,
                  children: [
                    (0, l.jsx)(o.Z, {
                      channel: t,
                      entry: n,
                      className: E.users,
                    }),
                    (0, l.jsx)(r.Spacer, { size: 2 }),
                    (0, l.jsx)(h, {
                      clickable: T,
                      className: E.clickableText,
                      children: (0, l.jsx)(r.Heading, {
                        id: S,
                        variant: "heading-md/medium",
                        lineClamp: 1,
                        className: i()(E.textPrimary, E.truncatedText),
                        scaleFontToUserSetting: !0,
                        children: a,
                      }),
                    }),
                    null != I
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(r.Spacer, { size: 2 }),
                            (0, l.jsx)(h, {
                              clickable: x,
                              className: E.clickableText,
                              children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                className: i()(
                                  E.textSecondary,
                                  E.truncatedText,
                                ),
                                lineClamp: 1,
                                scaleFontToUserSetting: !0,
                                children: I,
                              }),
                            }),
                          ],
                        })
                      : null,
                    (0, l.jsx)(d.PZ, {
                      className: E.badges,
                      entry: n,
                      location: d.Gt.EMBED,
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: E.headerIcons,
                  children: null != g ? (0, l.jsx)(c.Z, { ...g }) : null,
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
      var l = t(735250);
      t(470079);
      var a = t(868819),
        i = t(970184),
        r = t(53887);
      function o(e) {
        let { components: n, renderComponents: t } = e,
          { message: o } = (0, i.CJ)();
        return null == n || 0 === n.length
          ? null
          : (0, l.jsxs)("div", {
              className: r.container,
              children: [
                (0, l.jsx)("div", { className: r.children, children: t(n) }),
                null != o
                  ? (0, l.jsx)(a.ZP, {
                      className: r.error,
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
        a: function () {
          return r;
        },
        r: function () {
          return o;
        },
      });
      var l = t(591759),
        a = t(524444),
        i = t(231338);
      function r(e) {
        let n = e.item.originalItem.media;
        return (0, a.Yi)({
          ...e,
          alt: e.item.originalItem.description,
          src: n.proxyUrl,
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholderVersion,
          renderForwardComponent: i.Vq,
        });
      }
      function o(e) {
        let n = e.item.originalItem.media,
          t = l.Z.toURLSafe(n.proxyUrl);
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
              renderForwardComponent: i.Vq,
            }));
      }
    },
    128854: function (e, n, t) {
      t.d(n, {
        F: function () {
          return o;
        },
        c: function () {
          return r;
        },
      }),
        t(411104);
      var l = t(735250),
        a = t(470079);
      let i = a.createContext(null);
      function r() {
        let e = a.useContext(i);
        if (null == e)
          throw Error(
            "Could not find context for useMessageAccessoriesComponentContext.",
          );
        return e;
      }
      function o(e) {
        let { children: n, ...t } = e;
        return (0, l.jsx)(i.Provider, { value: t, children: n });
      }
    },
    524846: function (e, n, t) {
      var l, a;
      t.d(n, {
        $: function () {
          return l;
        },
      }),
        ((a = l || (l = {})).USER = "user"),
        (a.ROLE = "role"),
        (a.CHANNEL = "channel");
    },
    437561: function (e, n, t) {
      e.exports = {
        modal: "modal_c5ad85",
        modalHeader: "modalHeader_c5ad85",
        modalTitle: "modalTitle_c5ad85",
        modalHeaderLinks: "modalHeaderLinks_c5ad85",
        containerScrollGradient: "containerScrollGradient_c5ad85",
        modalCloseBtn: "modalCloseBtn_c5ad85",
      };
    },
    27399: function (e, n, t) {
      e.exports = {
        modal: "modal_c48629",
        footer: "footer_c48629",
        footerButtons: "footerButtons_c48629",
        linkButton: "linkButton_c48629",
        appIcon: "appIcon_c48629",
      };
    },
    986357: function (e, n, t) {
      e.exports = { btnContent: "btnContent_cdaed4" };
    },
    671656: function (e, n, t) {
      e.exports = { clickable: "clickable_bffa11" };
    },
    182408: function (e, n, t) {
      e.exports = {
        stackedAvatar: "stackedAvatar_bf3a3d",
        clickable: "clickable_bf3a3d",
        container: "container_bf3a3d",
        truncatedText: "truncatedText_bf3a3d",
        usersHeader: "usersHeader_bf3a3d",
      };
    },
    303540: function (e, n, t) {
      e.exports = { popout: "popout_e40224" };
    },
    76927: function (e, n, t) {
      e.exports = { container: "container_b11148" };
    },
    751319: function (e, n, t) {
      e.exports = {
        container: "container_e426aa",
        containerUikit: "containerUikit_e426aa",
      };
    },
    880609: function (e, n, t) {
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
    296555: function (e, n, t) {
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
    758183: function (e, n, t) {
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
    252443: function (e, n, t) {
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
    203079: function (e, n, t) {
      e.exports = { formItem: "formItem_f3e5f0" };
    },
    178519: function (e, n, t) {
      e.exports = {
        divider: "divider_d0ecce",
        spacingLarge: "spacingLarge_d0ecce",
      };
    },
    869261: function (e, n, t) {
      e.exports = { markdownContainer: "markdownContainer_b6273d" };
    },
    917056: function (e, n, t) {
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
    53887: function (e, n, t) {
      e.exports = {
        container: "container_f08cd0",
        children: "children_f08cd0",
        error: "error_f08cd0",
      };
    },
    159696: function (e, n, t) {
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
      };
    },
    670347: function (e, n, t) {
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
    415858: function (e, n, t) {
      e.exports = { containerScrollGradient: "containerScrollGradient_c2f634" };
    },
    689498: function (e, n, t) {
      e.exports = {
        container: "container_e8df26",
        header: "header_e8df26",
        headerBackground: "headerBackground_e8df26",
        headerTop: "headerTop_e8df26",
        headerImage: "headerImage_e8df26",
        scroll: "scroll_e8df26",
        scrollContent: "scrollContent_e8df26",
        details: "details_e8df26",
        benefits: "benefits_e8df26",
        description: "description_e8df26",
      };
    },
    772421: function (e, n, t) {
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
    33937: function (e, n, t) {
      e.exports = { container: "container_c99f26" };
    },
    778342: function (e, n, t) {
      e.exports = { hoverCard: "hoverCard_d991d3" };
    },
  },
]);
//# sourceMappingURL=e407dcd480f6e1a6d5e5.js.map
