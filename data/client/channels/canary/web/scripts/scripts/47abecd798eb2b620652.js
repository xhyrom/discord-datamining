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
        a = l(592125),
        i = l(403404),
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
        let E = a.Z.getChannel(l),
          p = r.Z.getWindowOpen(u.KJ3.CHANNEL_CALL_POPOUT);
        await (0, i.Z)({
          analyticsLocations: n,
          channel: E,
          guildId: o,
          openInPopout: p,
          initialSlide: d,
          initialSelectedApplicationId: m,
          locationObject: null != c ? c : {},
        });
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
        a = l(442837),
        i = l(481060),
        s = l(16084),
        u = l(558381),
        o = l(821849),
        c = l(106976),
        d = l(488915),
        m = l(171246),
        E = l(509545),
        p = l(55563),
        N = l(551428),
        f = l(937615),
        _ = l(147496),
        C = l(519896),
        T = l(981631),
        v = l(689938);
      function h(e) {
        r.useEffect(() => {
          if (null != e) (0, s.$N)("", e), (0, u.km)(e);
        }, [e]);
        let n = (0, a.e7)([p.Z], () => (null != e ? p.Z.get(e) : void 0), [e]);
        r.useEffect(() => {
          (null == n ? void 0 : n.type) === T.epS.SUBSCRIPTION &&
            (0, o.GZ)(n.id);
        }, [n]);
        let l = (0, a.Wu)([E.Z], () => (null != e ? E.Z.getForSKU(e) : []), [
            e,
          ]),
          h = r.useMemo(
            () => (null != l ? l.map((e) => e.id)[0] : void 0),
            [l],
          ),
          x = (0, a.e7)([N.Z], () => (null != e ? N.Z.getForSKU(e) : void 0), [
            e,
          ]);
        r.useEffect(() => {
          if (null != h) (0, c.vY)(h);
        }, [h]);
        let I = null == n ? void 0 : n.applicationId,
          S = (0, a.e7)(
            [d.Z],
            () =>
              null != I
                ? d.Z.getSubscriptionGroupListingForApplication(I)
                : null,
            [I],
          ),
          O = r.useCallback(() => {
            if (
              (null == n ? void 0 : n.applicationId) == null ||
              (null == n ? void 0 : n.id) == null ||
              (null == S ? void 0 : S.id) == null ||
              (null == S ? void 0 : S.sku_flags) == null
            )
              return null;
            (0, i.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(C.SubscriptionDetailsModal, {
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
          g = r.useCallback(() => {
            if (null == n) return null;
            (0, i.openModal)((e) => {
              let { onClose: l, transitionState: r } = e;
              return (0, t.jsx)(_.ItemDetailsModal, {
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
          (null == n || n.type !== T.epS.SUBSCRIPTION || null != S)
        ) {
          if (null == e || (null != n && !n.available))
            return {
              disabled: !0,
              label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
            };
          if (n.type === T.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
              return {
                disabled: !0,
                label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              };
            let e = l[0];
            return {
              disabled: !1,
              label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                skuName: n.name,
                price: (0, f.T4)(e.price, e.currency),
              }),
              onClick: O,
            };
          }
          return null == n.price
            ? {
                disabled: !0,
                label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE,
              }
            : {
                disabled: !1,
                label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                  skuName: n.name,
                  price: (0, f.T4)(n.price.amount, n.price.currency),
                }),
                onClick: g,
              };
        }
      }
    },
    328731: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return N;
        },
      });
      var t = l(735250),
        r = l(120356),
        a = l.n(r),
        i = l(481060),
        s = l(318374),
        u = l(5192),
        o = l(192918),
        c = l(256139),
        d = l(91907),
        m = l(866040),
        E = l(689938),
        p = l(182408);
      function N(e) {
        let { entry: n, channel: l, className: r } = e,
          {
            displayParticipants: N,
            participant1: f,
            participant2: _,
            numOtherParticipants: C,
            orderedParticipants: T,
          } = (0, o.Z)(n),
          v = [f, _];
        return (0, t.jsxs)("div", {
          className: a()(p.container, r),
          children: [
            N.length > 0
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(m.Z, {
                      participants: T,
                      channel: l,
                      children: (e) =>
                        (0, t.jsx)(i.Clickable, {
                          className: p.clickable,
                          ...e,
                          children: (0, t.jsx)(s.Z, {
                            maxUsers: 3,
                            users: N,
                            size: i.AvatarSizes.SIZE_20,
                            avatarClassName: p.stackedAvatar,
                            hideOverflowCount: !0,
                            disableUsernameTooltip: !0,
                          }),
                        }),
                    }),
                    (0, t.jsx)(i.Spacer, { size: 6, horizontal: !0 }),
                  ],
                })
              : null,
            (0, t.jsx)(i.Heading, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              className: a()(p.truncatedText, p.usersHeader),
              scaleFontToUserSetting: !0,
              children: E.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                user0: u.ZP.getName(l.guild_id, l.id, v[0]),
                user1: u.ZP.getName(l.guild_id, l.id, v[1]),
                countOthers: C,
                name0Hook: (e, n) =>
                  (0, t.jsx)(d.Z, { text: e, user: v[0], channel: l }, n),
                name1Hook: (e, n) =>
                  (0, t.jsx)(d.Z, { text: e, user: v[1], channel: l }, n),
                countOthersHook: (e, n) =>
                  (0, t.jsx)(
                    m.Z,
                    {
                      participants: T,
                      channel: l,
                      children: (n) =>
                        (0, t.jsx)(c.Z, {
                          ...n,
                          tag: "span",
                          children: (0, t.jsx)(i.Text, {
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
    435439: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return E;
        },
      });
      var t = l(735250),
        r = l(481060),
        a = l(374129),
        i = l(639351),
        s = l(908841),
        u = l(410441),
        o = l(206583),
        c = l(689938);
      let d = {
          [o.kG.SPOTIFY]: s.Z,
          [o.kG.CRUNCHYROLL]: r.CrunchyrollNeutralIcon,
          [o.kG.XBOX]: i.Z,
          [o.kG.PLAYSTATION]: a.Z,
        },
        m = {
          [o.kG.SPOTIFY]: () => c.Z.Messages.SPOTIFY,
          [o.kG.CRUNCHYROLL]: () => c.Z.Messages.CRUNCHYROLL,
          [o.kG.XBOX]: () => c.Z.Messages.XBOX,
          [o.kG.PLAYSTATION]: () => c.Z.Messages.PLAYSTATION,
        };
      function E(e) {
        var n;
        let { type: l, "aria-label": r, ...a } = e,
          i = d[l];
        if (null == i) return null;
        let s =
          null != r
            ? r
            : null === (n = m[l]) || void 0 === n
              ? void 0
              : n.call(m);
        return (0, t.jsx)(u.Z, { Icon: i, ...a, "aria-label": s });
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
          return f;
        },
        r: function () {
          return C;
        },
      }),
        l(411104);
      var t = l(735250),
        r = l(470079),
        a = l(512722),
        i = l.n(a),
        s = l(876215),
        u = l(775379),
        o = l(879046),
        c = l(214597),
        d = l(498187),
        m = l(482417),
        E = l(301419),
        p = l(397035);
      let N = r.createContext(void 0);
      function f() {
        let e = r.useContext(N);
        return (
          i()(
            null != e,
            "useEntryDataContext must be used within a EntryDataContextProvider",
          ),
          e
        );
      }
      function _(e) {
        let { entry: n, ...l } = e,
          r = {
            baseEntryData: (0, c.Z)({ entry: n, channel: l.channel }),
            ...l,
          };
        switch (n.content_type) {
          case s.s.TOP_ARTIST:
            return (0, t.jsx)(v, { entry: n, ...r });
          case s.s.TOP_GAME:
            return (0, t.jsx)(h, { entry: n, ...r });
          case s.s.PLAYED_GAME:
            return (0, t.jsx)(x, { entry: n, ...r });
          case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(I, { entry: n, ...r });
          case s.s.LISTENED_SESSION:
            return (0, t.jsx)(S, { entry: n, ...r });
          case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(T, { entry: n, ...r });
          default:
            throw Error("Unsupported content type: ".concat(n.content_type));
        }
      }
      function C(e) {
        let { errorFallback: n, ...l } = e;
        return (0, t.jsx)(u.S, {
          fallback: n,
          children: (0, t.jsx)(_, { ...l }),
        });
      }
      function T(e) {
        let { entry: n, children: l, ...r } = e,
          a = (0, o.Z)({ entry: n, ...r });
        return (0, t.jsx)(N.Provider, {
          value: { parsedEntry: a, ...r },
          children: l,
        });
      }
      function v(e) {
        let { entry: n, children: l, ...r } = e,
          a = (0, E.Z)({ entry: n, ...r });
        return (0, t.jsx)(N.Provider, {
          value: { parsedEntry: a, ...r },
          children: l,
        });
      }
      function h(e) {
        let { entry: n, children: l, ...r } = e,
          a = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(N.Provider, {
          value: { parsedEntry: a, ...r },
          children: l,
        });
      }
      function x(e) {
        let { entry: n, children: l, ...r } = e,
          a = (0, d.Z)({ entry: n, ...r });
        return (0, t.jsx)(N.Provider, {
          value: { parsedEntry: a, ...r },
          children: l,
        });
      }
      function I(e) {
        let { entry: n, children: l, ...r } = e,
          a = (0, p.Z)({ entry: n, ...r });
        return (0, t.jsx)(N.Provider, {
          value: { parsedEntry: a, ...r },
          children: l,
        });
      }
      function S(e) {
        let { entry: n, children: l, ...r } = e,
          a = (0, m.Z)({ entry: n, ...r });
        return (0, t.jsx)(N.Provider, {
          value: { parsedEntry: a, ...r },
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
        a = l(99981),
        i = l(906732),
        s = l(835473),
        u = l(914010),
        o = l(561308),
        c = l(701488),
        d = l(689938);
      function m(e) {
        let { entry: n } = e,
          l = (0, s.q)(n.extra.application_id),
          m = null == l ? void 0 : l.getIconURL(c.Si.LARGE),
          E = (0, t.e7)([u.Z], () => u.Z.getGuildId()),
          p = n.extra.activity_name,
          N = (0, r.O)(),
          { analyticsLocations: f } = (0, i.ZP)(),
          _ =
            (0, o.kr)(n) && !(0, o.n2)(n)
              ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
          C = {
            onClick: () => {
              null != E &&
                (0, a.q)({
                  guildId: E,
                  channelId: void 0,
                  locationObject: N.location,
                  initialSelectedApplicationId: n.extra.application_id,
                  initialSlide: c.ag.SELECT_CHANNEL,
                  analyticsLocations: f,
                });
            },
            ariaDescription:
              d.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format(
                { title: p },
              ),
          };
        return {
          thumbnailUrl: m,
          title: p,
          titleClickable: C,
          thumbnailClickable: C,
          userDescription: _,
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
        a = l(232567),
        i = l(720202),
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
                      ? (0, a.PR)(e)
                      : i.Z.requestMember(l.guild_id, e);
                  });
          }, [n, l.guild_id]),
          {}
        );
      }
    },
    498187: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return N;
        },
      });
      var t = l(876215),
        r = l(758713),
        a = l(835473),
        i = l(810568),
        s = l(168524),
        u = l(561308),
        o = l(206583),
        c = l(96513),
        d = l(701488),
        m = l(689938);
      let E = { [r.z.XBOX]: o.kG.XBOX, [r.z.PLAYSTATION]: o.kG.PLAYSTATION },
        p = { [c._.EMBED]: i.m1.Embed };
      function N(e) {
        let n,
          l,
          { entry: r, location: i, baseEntryData: o } = e,
          c = (0, a.q)(r.extra.application_id),
          N = null == c ? void 0 : c.getIconURL(d.Si.LARGE),
          f = r.extra.game_name;
        if (null != r.extra.platform) {
          let e = E[r.extra.platform];
          null != e && (n = { type: e });
        }
        l =
          r.content_type === t.s.PLAYED_GAME
            ? (0, u.kr)(r) && !(0, u.n2)(r)
              ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2
            : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
        let _ = p[i],
          C = {
            onClick: (0, s.Z)({
              location: _,
              applicationId: r.extra.application_id,
              source: _,
              trackEntryPointImpression: !0,
              sourceUserId: r.author_id,
            }),
            ariaDescription:
              m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format(
                { gameName: f },
              ),
          };
        return {
          ...o,
          thumbnailUrl: N,
          title: f,
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
          return u;
        },
      }),
        l(47120);
      var t = l(423875),
        r = l(740605),
        a = l(206583),
        i = l(616922),
        s = l(689938);
      function u(e) {
        let n,
          { entry: l, baseEntryData: u } = e,
          o = l.extra.entries[0].media,
          c = o.artists[0],
          { title: d, provider: m, image_url: E } = o,
          p = c.name,
          N = {
            onClick: () => (0, r.o)(i.Hw.TRACK, o.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          },
          f = {
            onClick: () => (0, r.o)(i.Hw.ARTIST, c.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: p },
              ),
          };
        return (
          m === t.p.SPOTIFY && (n = { type: a.kG.SPOTIFY }),
          {
            ...u,
            title: d,
            subtitle: p,
            thumbnailUrl: E,
            titleClickable: N,
            subtitleClickable: f,
            thumbnailClickable: N,
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
        a = l(206583),
        i = l(616922),
        s = l(689938);
      function u(e) {
        let n,
          { entry: l, baseEntryData: u } = e,
          { provider: o, image_url: c } = l.extra.media,
          d = l.extra.artist.name,
          m = {
            onClick: () =>
              (0, r.o)(i.Hw.ALBUM, l.extra.media.external_parent_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: l.extra.media.parent_title },
              ),
          },
          E = {
            onClick: () => (0, r.o)(i.Hw.ARTIST, l.extra.artist.external_id),
            ariaDescription:
              s.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format(
                { itemName: d },
              ),
          };
        return (
          o === t.p.SPOTIFY && (n = { type: a.kG.SPOTIFY }),
          {
            ...u,
            title: d,
            thumbnailUrl: c,
            titleClickable: E,
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
        a = l(81063),
        i = l(591759),
        s = l(561308),
        u = l(206583),
        o = l(701488),
        c = l(689938);
      function d(e) {
        let n,
          { entry: l, baseEntryData: d } = e,
          m = (0, r.q)(l.extra.application_id),
          E = null == m ? void 0 : m.getIconURL(128),
          p = (0, a.getAssetImage)(
            l.extra.application_id,
            l.extra.media_assets_large_image,
            [o.Si.LARGE, o.Si.LARGE],
          ),
          N = l.extra.media_title,
          f = l.extra.media_subtitle,
          _ =
            (0, s.kr)(l) && !(0, s.n2)(l)
              ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
              : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
          C = { type: u.kG.CRUNCHYROLL },
          T = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = i.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
          }, [l.extra.url]);
        return (
          null != T &&
            (n = {
              href: i.Z.format(T),
              ariaDescription:
                c.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format(
                  { title: N },
                ),
            }),
          {
            ...d,
            thumbnailUrl: null != p ? p : E,
            title: N,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: f,
            userDescription: _,
            providerIconProps: C,
          }
        );
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
          return E;
        },
        _H: function () {
          return p;
        },
        af: function () {
          return N;
        },
        tx: function () {
          return f;
        },
      }),
        l(47120);
      var t = l(524846),
        r = l(911969),
        a = l(592125),
        i = l(271383),
        s = l(430824),
        u = l(594174),
        o = l(483360),
        c = l(823379),
        d = l(5192),
        m = l(280501);
      l(892902);
      let E = 1e3;
      function p(e, n, l) {
        let t = a.Z.getChannel(l);
        if (null == t) return [];
        let i = e === r.re.USER_SELECT || e === r.re.MENTIONABLE_SELECT,
          s = e === r.re.ROLE_SELECT || e === r.re.MENTIONABLE_SELECT,
          { users: u, roles: c } = o.ZP.queryMentionResults({
            query: n,
            channel: t,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: i,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15,
          }),
          E = u.map((e) => {
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
          ...E,
          ...c.map((e) => ({ type: m.tM.ROLE, value: e.id, label: e.name })),
        ];
      }
      function N(e, n, l) {
        let t = a.Z.getChannel(n);
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
      function f(e, n) {
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
                let t = null != r ? i.ZP.getNick(r.id, l.id) : void 0;
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
                let n = a.Z.getChannel(e.id);
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
          return v;
        },
        xX: function () {
          return T;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        a = l.n(r),
        i = l(911969),
        s = l(970184),
        u = l(987106),
        o = l(927057),
        c = l(574597),
        d = l(378975),
        m = l(413991),
        E = l(12067),
        p = l(676149),
        N = l(861529),
        f = l(770009),
        _ = l(889515),
        C = l(751319);
      function T(e) {
        return e.map((e, n) =>
          (function (e, n) {
            switch (e.type) {
              case i.re.ACTION_ROW:
                return (0, t.jsx)(_.Z, { ...e, renderComponents: T }, n);
              case i.re.BUTTON:
                return (0, t.jsx)(u.Z, { ...e }, n);
              case i.re.STRING_SELECT:
                return (0, t.jsx)(d.Z, { ...e }, n);
              case i.re.CHANNEL_SELECT:
                return (0, t.jsx)(o.Z, { ...e }, n);
              case i.re.USER_SELECT:
              case i.re.ROLE_SELECT:
              case i.re.MENTIONABLE_SELECT:
                return (0, t.jsx)(c.Z, { ...e }, n);
              case i.re.INPUT_TEXT:
                return (0, t.jsx)(m.Z, { ...e }, n);
              case i.re.TEXT:
                return (0, t.jsx)(N.Z, { ...e }, n);
              case i.re.MEDIA_GALLERY:
                return (0, t.jsx)(E.Z, { ...e }, n);
              case i.re.SEPARATOR:
                return (0, t.jsx)(p.Z, { ...e }, n);
              case i.re.CONTENT_INVENTORY_ENTRY:
                return (0, t.jsx)(f.Z, { ...e }, n);
            }
          })(e, n.toString()),
        );
      }
      function v(e) {
        let { message: n } = e,
          { components: l } = n;
        return 0 === l.length
          ? null
          : (0, t.jsx)("div", {
              className: a()([
                C.container,
                { [C.containerUikit]: n.isUIKitComponents() },
              ]),
              children: (0, t.jsx)(s.Il, { message: n, children: T(l) }),
            });
      }
    },
    987106: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return T;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        a = l.n(r),
        i = l(392711),
        s = l(481060),
        u = l(239091),
        o = l(596454),
        c = l(911969),
        d = l(574399),
        m = l(572004),
        E = l(49012),
        p = l(970184),
        N = l(280501),
        f = l(689938),
        _ = l(880609);
      function C(e) {
        let { url: n, onSelect: l } = e;
        return m.wS && null != n
          ? (0, t.jsx)(s.Menu, {
              navId: "component-button",
              onClose: u.Zy,
              "aria-label":
                f.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
              onSelect: l,
              children: (0, t.jsx)(s.MenuGroup, {
                children: (0, t.jsx)(s.MenuItem, {
                  id: "copy",
                  label:
                    f.Z.Messages
                      .MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                  action: () => (0, m.JG)(n),
                }),
              }),
            })
          : null;
      }
      function T(e) {
        let n;
        let { label: l, style: r, disabled: m, emoji: f, url: T, skuId: v } = e,
          {
            executeStateUpdate: h,
            visualState: x,
            isDisabled: I,
          } = (0, p.Ee)(e),
          S = (0, d.I)(v),
          O = null != v && r === c.ZJ.PREMIUM,
          g = O && (null == S ? void 0 : S.disabled),
          j = O ? (null == S ? void 0 : S.label) : l,
          Z = null != f,
          R = null != j && j.length > 0,
          M = r === c.ZJ.LINK && null != T && T.length > 0,
          b = x === N.gH.LOADING || (O && null == S);
        return (
          (n = M
            ? () => {
                (0, E.q)({ href: null != T ? T : "", shouldConfirm: !0 });
              }
            : O
              ? null != S && !1 === S.disabled
                ? S.onClick
                : i.noop
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
            disabled: m || x === N.gH.DISABLED || I || g,
            onClick: n,
            onContextMenu: (e) => {
              M && (0, u.vq)(e, (e) => (0, t.jsx)(C, { ...e, url: T }));
            },
            role: M ? "link" : "button",
            children: [
              (0, t.jsxs)("div", {
                className: a()(_.content, { [_.hidden]: b, [_.premium]: O }),
                "aria-hidden": b,
                children: [
                  O
                    ? (0, t.jsx)("div", {
                        className: _.shopIcon,
                        children: (0, t.jsx)(s.ShopIcon, {
                          size: "xs",
                          color: "white",
                        }),
                      })
                    : null,
                  Z
                    ? (0, t.jsx)(o.Z, {
                        className: a()({ [_.textEmoji]: R }),
                        src: f.src,
                        emojiId: f.id,
                        emojiName: f.name,
                        animated: f.animated,
                      })
                    : null,
                  R
                    ? (0, t.jsx)("div", { className: _.label, children: j })
                    : null,
                  M
                    ? (0, t.jsx)(s.WindowLaunchIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: _.launchIcon,
                      })
                    : null,
                ],
              }),
              b
                ? (0, t.jsx)("div", {
                    className: _.loading,
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
          return p;
        },
      });
      var t = l(735250),
        r = l(470079),
        a = l(481060),
        i = l(471445),
        s = l(592125),
        u = l(430824),
        o = l(970184),
        c = l(811654),
        d = l(344991),
        m = l(981631),
        E = l(296555);
      function p(e) {
        var n;
        let { channelTypes: l } = e,
          p = (0, o.CJ)(),
          N =
            null == p
              ? void 0
              : null === (n = p.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          f = s.Z.getChannel(N),
          _ = u.Z.getGuild(null == f ? void 0 : f.getGuildId()),
          C = r.useMemo(
            () => (0, c.tx)(e.defaultValues, null == _ ? void 0 : _.id, l),
            [e.defaultValues, _, l],
          );
        return (0, t.jsx)(d.ZP, {
          selectActionComponent: e,
          queryOptions: (e) => (0, c.af)(e, N, l),
          renderIcon: (e, n) => {
            let l = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == l) return null;
            let r =
              l.type === m.d4z.GUILD_CATEGORY ? a.FolderIcon : (0, i.KS)(l);
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
            (0, t.jsx)("span", { className: E.label, children: e.label }),
          defaultValues: C,
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
        a = l(866442),
        i = l(481060),
        s = l(129861),
        u = l(91218),
        o = l(829883),
        c = l(518738),
        d = l(14263),
        m = l(592125),
        E = l(430824),
        p = l(158776),
        N = l(594174),
        f = l(970184),
        _ = l(280501),
        C = l(811654),
        T = l(344991),
        v = l(981631),
        h = l(296555);
      function x(e) {
        var n;
        let l = (0, f.CJ)(),
          x =
            null == l
              ? void 0
              : null === (n = l.message) || void 0 === n
                ? void 0
                : n.getChannelId(),
          I = m.Z.getChannel(x),
          S = E.Z.getGuild(null == I ? void 0 : I.getGuildId()),
          O = (0, d.Z)(null == S ? void 0 : S.id, C.HI),
          g = r.useMemo(
            () => (0, C.tx)(e.defaultValues, null == S ? void 0 : S.id),
            [e.defaultValues, S],
          );
        return (0, t.jsx)(T.ZP, {
          selectActionComponent: e,
          queryOptions: (n) => (0, C._H)(e.type, n, x),
          renderIcon: (e, n) => {
            let l = n === T.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === _.tM.USER) {
              let r = N.default.getUser(e.value);
              if (null == r) return;
              return (0, t.jsx)(i.Avatar, {
                size: l ? i.AvatarSizes.SIZE_16 : i.AvatarSizes.SIZE_24,
                src: r.getAvatarURL(null == S ? void 0 : S.id, n),
                status: l ? null : p.Z.getStatus(r.id),
                "aria-hidden": !0,
              });
            }
            if ((null == e ? void 0 : e.type) === _.tM.ROLE) {
              var r;
              let l = null != S ? E.Z.getRole(S.id, e.value) : void 0;
              if (null == l || null == S) return;
              let s = (0, o._b)(S, l) ? (0, c.Kz)(l, n) : null;
              return null != s
                ? (0, t.jsx)(u.Z, { ...s })
                : (0, t.jsx)(i.ShieldUserIcon, {
                    size: "custom",
                    color:
                      null !== (r = l.colorString) && void 0 !== r
                        ? r
                        : (0, a.Rf)(v.p6O),
                    height: n,
                    width: n,
                  });
            }
          },
          renderOptionLabel: (e) => {
            let n = null;
            if (e.type === _.tM.USER) {
              let l = N.default.getUser(e.value);
              null != l &&
                (n = (0, t.jsx)(s.Z, {
                  className: h.tag,
                  usernameClass: h.username,
                  discriminatorClass: h.discriminator,
                  botClass: h.bot,
                  user: l,
                  forceUsername: !0,
                }));
            } else if (e.type === _.tM.ROLE) {
              let l = null != S ? E.Z.getRole(S.id, e.value) : void 0,
                r = null == l ? null : null == O ? void 0 : O[l.id];
              null != r &&
                (n = (0, t.jsxs)("div", {
                  className: h.roleCountContainer,
                  children: [
                    (0, t.jsx)(i.UserIcon, {
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
          return C;
        },
        tE: function () {
          return t;
        },
      }),
        l(47120);
      var t,
        r,
        a = l(735250),
        i = l(470079),
        s = l(120356),
        u = l.n(s),
        o = l(481060),
        c = l(911969),
        d = l(868819),
        m = l(970184),
        E = l(280501),
        p = l(689938),
        N = l(758183),
        f = l(252443);
      function _(e) {
        let { icon: n, iconSize: l } = e;
        return (0, a.jsx)("div", {
          className: N.iconContainer,
          style: { height: l, width: l },
          children: n,
        });
      }
      function C(e) {
        let {
            selectActionComponent: n,
            queryOptions: l,
            renderIcon: t,
            renderOptionLabel: r,
            defaultValues: s,
          } = e,
          { type: C, placeholder: T, maxValues: v, disabled: h } = n,
          [x, I] = i.useState(!1),
          [S, O] = i.useState(!1),
          [g, j] = i.useState(
            new Map(null == s ? void 0 : s.map((e) => [e.value, e])),
          ),
          [Z, R] = i.useState(new Set(g.keys())),
          [M, b] = i.useState(() => (null != s ? s : []).map((e) => e.value)),
          [L, A] = i.useState(0);
        i.useEffect(() => {
          let e = (null != s ? s : []).map((e) => e.value);
          if (e.every((e) => M.includes(e)) && M.every((n) => e.includes(n)))
            return;
          b(e);
          let n = new Map(null == s ? void 0 : s.map((e) => [e.value, e]));
          j(n), R(new Set(n.keys())), A((e) => e + 1);
        }, [s, M]);
        let {
            state: P,
            executeStateUpdate: y,
            visualState: U,
            isDisabled: k,
            error: D,
          } = (0, m.Ee)(n, {
            type: C,
            selectedOptions: Array.from(g.values()),
          }),
          G = U === E.gH.LOADING;
        i.useEffect(() => {
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
        let Y = i.useCallback(() => {
          y({ type: C, selectedOptions: Array.from(g.values()) }) &&
            R(new Set(g.keys()));
        }, [y, C, g]);
        i.useEffect(() => {
          if (
            !(
              x ||
              S ||
              (g.size === Z.size && Array.from(g.keys()).every((e) => Z.has(e)))
            )
          )
            Y();
        }, [x, S, Z, g, Y]);
        let B = 0 === g.size || x,
          w = {
            isDisabled: h || k,
            wrapperClassName: N.select,
            options: (e) =>
              new Promise((n) => {
                n(l(e));
              }),
            placeholder: B
              ? null != T
                ? T
                : p.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER
              : void 0,
            onClose: () => I(!1),
            onOpen: () => I(!0),
            onBlur: () => O(!1),
            maxVisibleItems: 5,
            optionClassName: N.__invalid_selectOption,
            renderOptionPrefix: (e, n) => {
              let { inPill: l } = n,
                r = l ? 16 : 24,
                i = t(e, r);
              return null != i ? (0, a.jsx)(_, { icon: i, iconSize: r }) : null;
            },
            renderOptionLabel: r,
          };
        return (0, a.jsxs)(i.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: N.container,
              children: [
                v > 1
                  ? (0, a.jsx)(
                      o.SearchableSelect,
                      {
                        className: N.badges,
                        value: Array.from(g.values()),
                        onChange: (e) => {
                          !x && O(!0), j(new Map(e.map((e) => [e.value, e])));
                        },
                        multi: !0,
                        inputClassNames: u()({
                          [N.soloInput]: 0 === g.size,
                          [N.inlineInput]: g.size > 0,
                          [N.hidden]: !B,
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...w,
                      },
                      L,
                    )
                  : (0, a.jsx)(
                      o.SearchableSelect,
                      {
                        className: (N.badges, N.singleSelect),
                        value: [...g.values()][0],
                        onChange: (e) =>
                          j(null != e ? new Map([[e.value, e]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...w,
                      },
                      L,
                    ),
                G
                  ? (0, a.jsx)("div", {
                      className: N.loading,
                      children: (0, a.jsx)(o.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != D
              ? (0, a.jsx)(d.st, { ...(0, d.c4)(D), className: f.error })
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
          return C;
        },
      }),
        l(47120);
      var t = l(735250),
        r = l(470079),
        a = l(120356),
        i = l.n(a),
        s = l(481060),
        u = l(596454),
        o = l(911969),
        c = l(868819),
        d = l(970184),
        m = l(280501),
        E = l(689938),
        p = l(252443);
      function N(e) {
        let {
            emoji: n,
            label: l,
            description: r,
            isDisabled: a,
            isOffset: s,
          } = e,
          o = i()(p.labelContainer, {
            [p.disabled]: a,
            [p.offset]: null == n && s,
          });
        return (0, t.jsxs)("div", {
          className: p.option,
          children: [
            null != n
              ? (0, t.jsx)(u.Z, {
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
      function f(e) {
        let { emoji: n, label: l } = e;
        return (0, t.jsx)("div", {
          className: p.option,
          children: (0, t.jsxs)("div", {
            className: i()(p.value, p.singleValue),
            children: [
              null != n
                ? (0, t.jsx)(u.Z, {
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
      function _(e) {
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
                      ? (0, t.jsx)(u.Z, {
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
      function C(e) {
        let {
            type: n,
            options: l,
            id: a,
            placeholder: i,
            maxValues: u,
            minValues: C,
            disabled: T,
          } = e,
          v = r.useMemo(
            () => l.filter((e) => e.default).map((e) => e.value),
            [l],
          ),
          {
            state: h,
            executeStateUpdate: x,
            visualState: I,
            isDisabled: S,
            error: O,
          } = (0, d.Ee)(e, { type: n, values: v }),
          g = u > 1,
          j = I === m.gH.LOADING,
          [Z, R] = r.useState(!1),
          [M, b] = r.useState(
            () => new Set(l.filter((e) => e.default).map((e) => e.value)),
          ),
          [L, A] = r.useState(M),
          P = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
        r.useEffect(() => {
          if ((null == h ? void 0 : h.type) === o.re.STRING_SELECT) {
            let e = new Set(h.values);
            b(e), A(e);
          } else {
            let e = new Set(v);
            b(e), A(e);
          }
        }, [a, v, h]);
        let y = r.useCallback(() => {
          if (L !== M)
            x({ type: o.re.STRING_SELECT, values: Array.from(M) }) && A(M);
        }, [M, L, A, x]);
        r.useEffect(() => {
          if (
            !(Z || (M.size === L.size && Array.from(L).every((e) => M.has(e))))
          )
            y();
        }, [Z, M, L, y]);
        let U = s.singleSelect;
        g ? (U = s.multiSelect) : 0 === C && (U = s.toggleSelect);
        let k = (0, s.useVariableSelect)({
          value: M,
          onChange: (e) => b(e),
          onSelectInteraction: U,
        });
        return (0, t.jsxs)(r.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: p.container,
              children: [
                (0, t.jsx)(s.Select, {
                  isDisabled: T || S,
                  className: p.select,
                  options: l.map((e) => ({
                    ...e,
                    disabled: g && !M.has(e.value) && M.size === u,
                  })),
                  placeholder:
                    null != i
                      ? i
                      : E.Z.Messages
                          .MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                  onClose: () => R(!1),
                  onOpen: () => R(!0),
                  maxVisibleItems: 5,
                  closeOnSelect: !g,
                  optionClassName: p.selectOption,
                  renderOptionLabel: (e) =>
                    (0, t.jsx)(N, {
                      ...e,
                      isDisabled: g && !M.has(e.value) && M.size === u,
                      isOffset: P,
                    }),
                  renderOptionValue: (e) =>
                    g
                      ? (0, t.jsx)(_, { options: e })
                      : (0, t.jsx)(f, { ...e[0] }),
                  ...k,
                }),
                j
                  ? (0, t.jsx)("div", {
                      className: p.__invalid_loading,
                      children: (0, t.jsx)(s.Dots, {
                        dotRadius: 3.5,
                        themed: !0,
                      }),
                    })
                  : null,
              ],
            }),
            null != O
              ? (0, t.jsx)(c.st, { ...(0, c.c4)(O), className: p.error })
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
        a = l(481060),
        i = l(911969),
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
            minLength: E,
            maxLength: p,
            required: N,
            value: f,
          } = e,
          [_, C] = r.useState(null != f ? f : ""),
          {
            state: T,
            executeStateUpdate: v,
            error: h,
          } = (0, s.Ee)(e, null != f ? { type: l, value: f } : void 0),
          x = (0, u.hz)(e.id);
        r.useEffect(() => {
          (null == T ? void 0 : T.type) === l && C(T.value);
        }, [l, T]);
        let I = {
          name: d,
          value: _,
          placeholder: m,
          minLength: E,
          maxLength: p,
          required: N,
          onChange: (e) => {
            C(e), v({ type: l, value: e });
          },
          autoFocus: x,
        };
        switch (c) {
          case i.FO.SMALL:
            n = (0, t.jsx)(a.TextInput, { ...I });
            break;
          case i.FO.PARAGRAPH:
            n = (0, t.jsx)(a.TextArea, { ...I });
        }
        return (0, t.jsx)(a.FormItem, {
          title: d,
          required: N,
          className: o.formItem,
          error: h,
          children: n,
        });
      }
    },
    12067: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(442837),
        a = l(169525),
        i = l(611170),
        s = l(128854),
        u = l(884182),
        o = l(546432),
        c = l(780088),
        d = l(592125),
        m = l(52824),
        E = l(823379),
        p = l(970184),
        N = l(981631);
      function f(e) {
        let { message: n } = (0, p.CJ)(),
          l = (0, r.e7)([d.Z], () =>
            d.Z.getChannel(null == n ? void 0 : n.channel_id),
          ),
          {
            shouldHideMediaOptions: f,
            shouldRedactExplicitContent: _,
            gifAutoPlay: C,
            getGifFavButton: T,
            getOnMediaItemContextMenu: v,
          } = (0, s.c)();
        if (null == n || null == l) return null;
        let h = e.items
            .map((e) => (0, c.j0)(e.media, N.VqG, f, _))
            .filter(E.lm),
          x = {
            source: "Media Mosaic",
            guild_id: l.guild_id,
            channel_id: l.id,
            channel_type: l.type,
          },
          I = h.length > 1 ? (0, c.Cx)(h, x) : {};
        function S(e, n) {
          let l = e.originalItem;
          return (0, a.lK)(l.media, n, l.spoiler);
        }
        let O = e.items.map((e) => {
          let l = e.media,
            t = null == v ? void 0 : v(l),
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
              autoPlayGif: C,
              getObscureReason: S,
              renderImageComponent: i.a,
              renderVideoComponent: i.r,
              renderAudioComponent: N.dG4,
              renderPlaintextFilePreview: N.dG4,
              renderGenericFileComponent: N.dG4,
              renderMosaicItemFooter: N.dG4,
              gifFavoriteButton: T(l),
              onPlay: (e, n, l) => {},
              canRemoveItem: !1,
              onRemoveItem: N.dG4,
            },
            a = (0, m.q)({ proxyURL: l.proxyUrl, url: l.url });
          return a in I && (r.onClick = I[a]), r;
        });
        return (0, t.jsx)("div", { children: (0, t.jsx)(u.Z, { items: O }) });
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
        a = l.n(r),
        i = l(911969),
        s = l(178519);
      function u(e) {
        let { divider: n, spacing: l } = e;
        return (0, t.jsx)("div", {
          className: a()({
            [s.spacingLarge]: l === i.US.LARGE,
            [s.divider]: n,
          }),
        });
      }
    },
    861529: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return E;
        },
      });
      var t = l(735250),
        r = l(470079),
        a = l(120356),
        i = l.n(a),
        s = l(454585),
        u = l(937889),
        o = l(970184),
        c = l(870456),
        d = l(869261),
        m = l(910212);
      function E(e) {
        let { content: n, className: l } = e,
          a = (function (e) {
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
          className: i()([l, m.markup, d.markdownContainer]),
          children: a,
        });
      }
    },
    770009: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return E;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(512722),
        a = l.n(r),
        i = l(442837),
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
      function E(e) {
        let n = (0, o.CJ)();
        a()(
          null != n,
          "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
        );
        let { channelId: l } = n,
          r = (0, i.e7)([u.Z], () => u.Z.getChannel(l));
        return (
          a()(null != r, "channel must be defined"),
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
          return v;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(120356),
        a = l.n(r),
        i = l(481060),
        s = l(328731),
        u = l(442550),
        o = l(435439),
        c = l(206295),
        d = l(297781),
        m = l(313201),
        E = l(792125),
        p = l(231338),
        N = l(689938),
        f = l(917056),
        _ = l(671656);
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
              (0, t.jsx)(i.HiddenVisually, { id: u, children: e }),
              (0, t.jsx)(i.Anchor, {
                className: a()(n, l),
                href: o,
                "aria-describedby": u,
                children: s,
              }),
            ],
          });
        }
        let { onClick: o, ariaDescription: c } = null != r ? r : {};
        return (0, t.jsxs)(i.BlockInteractionsContext.Provider, {
          value: null == o,
          children: [
            null != o &&
              null != c &&
              (0, t.jsx)(i.HiddenVisually, { id: u, children: c }),
            (0, t.jsx)(i.Clickable, {
              onClick: o,
              "aria-describedby": null == o ? void 0 : u,
              className: a()(n, null != o && l),
              children: s,
            }),
          ],
        });
      }
      function T(e) {
        let { clickable: n, ...l } = e;
        return (0, t.jsx)(C, {
          ...l,
          clickable: { ...n, ariaDescription: "" },
          clickableClassName: _.clickable,
        });
      }
      function v(e) {
        let {
            entry: n,
            channel: l,
            title: r,
            subtitle: _,
            thumbnailUrl: v,
            titleClickable: h,
            subtitleClickable: x,
            thumbnailClickable: I,
            providerIconProps: S,
            style: O = {},
          } = e,
          g = (0, m.Dt)(),
          { primaryColor: j, secondaryColor: Z } = (0, c.Z)(v);
        return (
          null != v &&
            (O.background = "linear-gradient(45deg, "
              .concat(j, ", ")
              .concat(Z, ")")),
          (0, t.jsx)(i.ThemeContextProvider, {
            theme: p.BR.DARK,
            children: (0, t.jsxs)("figure", {
              "aria-roledescription":
                N.Z.Messages
                  .CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
              "aria-labelledby": g,
              "data-disable-adaptive-theme": !0,
              className: a()(f.container, (0, E.Q)(p.BR.DARK)),
              style: O,
              children: [
                (0, t.jsx)(C, {
                  className: f.thumbnailContainer,
                  clickableClassName: f.clickable,
                  clickable: I,
                  children: (0, t.jsx)(u.f, {
                    src: v,
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
                    (0, t.jsx)(i.Spacer, { size: 2 }),
                    (0, t.jsx)(T, {
                      clickable: h,
                      className: f.clickableText,
                      children: (0, t.jsx)(i.Heading, {
                        id: g,
                        variant: "heading-md/medium",
                        lineClamp: 1,
                        className: a()(f.textPrimary, f.truncatedText),
                        scaleFontToUserSetting: !0,
                        children: r,
                      }),
                    }),
                    null != _
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(i.Spacer, { size: 2 }),
                            (0, t.jsx)(T, {
                              clickable: x,
                              className: f.clickableText,
                              children: (0, t.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                className: a()(
                                  f.textSecondary,
                                  f.truncatedText,
                                ),
                                lineClamp: 1,
                                scaleFontToUserSetting: !0,
                                children: _,
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
                  children: null != S ? (0, t.jsx)(o.Z, { ...S }) : null,
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
        a = l(970184),
        i = l(53887);
      function s(e) {
        let { components: n, renderComponents: l } = e,
          { message: s } = (0, a.CJ)();
        return null == n || 0 === n.length
          ? null
          : (0, t.jsxs)("div", {
              className: i.container,
              children: [
                (0, t.jsx)("div", { className: i.children, children: l(n) }),
                null != s
                  ? (0, t.jsx)(r.ZP, {
                      className: i.error,
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
          return i;
        },
        r: function () {
          return s;
        },
      });
      var t = l(591759),
        r = l(524444),
        a = l(231338);
      function i(e) {
        let n = e.item.originalItem.media;
        return (0, r.Yi)({
          ...e,
          alt: e.item.originalItem.description,
          src: n.proxyUrl,
          original: n.url,
          placeholder: n.placeholder,
          placeholderVersion: n.placeholderVersion,
          renderForwardComponent: a.Vq,
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
              renderForwardComponent: a.Vq,
            }));
      }
    },
    128854: function (e, n, l) {
      l.d(n, {
        F: function () {
          return s;
        },
        c: function () {
          return i;
        },
      }),
        l(411104);
      var t = l(735250),
        r = l(470079);
      let a = r.createContext(null);
      function i() {
        let e = r.useContext(a);
        if (null == e)
          throw Error(
            "Could not find context for useMessageAccessoriesComponentContext.",
          );
        return e;
      }
      function s(e) {
        let { children: n, ...l } = e;
        return (0, t.jsx)(a.Provider, { value: l, children: n });
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
//# sourceMappingURL=47abecd798eb2b620652.js.map
