"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87031"],
  {
    211739: function (n, t, e) {
      e.d(t, {
        N5: function () {
          return u;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return l;
        },
        mJ: function () {
          return a;
        },
      });
      var i = e(570140);
      function r(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function a(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: n });
      }
      function u(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: n });
      }
      function l(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: n });
      }
    },
    109764: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(852229),
        a = e(399606),
        u = e(481060),
        l = e(228392),
        o = e(592125),
        d = e(934415),
        c = e(981631),
        s = e(388032);
      function f(n, t, e) {
        let f = (0, a.e7)([o.Z], () => o.Z.getChannel(n.parent_id));
        return (0, i.jsx)(u.MenuItem, {
          id: "channel-copy-link",
          label: s.intl.string(s.t.WqhZsr),
          action: () => {
            n.isForumPost() &&
              (0, l.B)({
                postId: n.id,
                location: { section: c.jXE.CONTEXT_MENU },
              }),
              (0, r.J)((0, d.EO)(n, f, t, e));
          },
        });
      }
    },
    323597: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        u = e(787014),
        l = e(904245),
        o = e(787263),
        d = e(660189),
        c = e(144140),
        s = e(314897),
        f = e(496675),
        _ = e(709054),
        E = e(981631),
        h = e(388032);
      function g(n) {
        let t = n.isForumPost(),
          e = (0, r.e7)([s.default], () => n.isOwner(s.default.getId()), [n]),
          { canManageChannel: g, canAccessChannel: A } = (0, r.cj)(
            [f.Z],
            () => ({
              canAccessChannel: f.Z.can(n.accessPermissions, n),
              canManageChannel: f.Z.can(
                n.isThread() ? E.Plq.MANAGE_THREADS : E.Plq.MANAGE_CHANNELS,
                n,
              ),
            }),
            [n],
          ),
          v = (0, r.e7)(
            [c.Z],
            () => {
              var t;
              return null !== (t = c.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id],
          ),
          { firstMessage: p } = (0, r.e7)([d.Z], () => d.Z.getMessage(n.id), [
            n.id,
          ]),
          T = t && (g || (e && v < 1)),
          C = t && e && !g && v > 0 && null != p;
        return A && (g || T || C)
          ? (0, i.jsx)(a.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (n.type === E.d4z.GUILD_CATEGORY)
                  return h.intl.string(h.t.ifbXnJ);
                if (n.isForumPost())
                  return T
                    ? h.intl.string(h.t.nEOg1N)
                    : h.intl.string(h.t.xwMqDw);
                if (n.isThread()) return h.intl.string(h.t.H7vTe3);
                return h.intl.string(h.t["8D8Rsb"]);
              })(),
              color: "danger",
              action: () => {
                (0, o.w)(n, function () {
                  C
                    ? l.Z.deleteMessage(
                        n.id,
                        _.default.castChannelIdAsMessageId(n.id),
                      )
                    : u.ZP.deleteChannel(n.id);
                });
              },
            })
          : null;
      }
    },
    776568: function (n, t, e) {
      e.d(t, {
        ZP: function () {
          return T;
        },
        k: function () {
          return v;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(913527),
        a = e.n(r),
        u = e(442837),
        l = e(481060),
        o = e(211739),
        d = e(87051),
        c = e(496729),
        s = e(777861),
        f = e(9156),
        _ = e(621600),
        E = e(933557),
        h = e(981631),
        g = e(969943),
        A = e(388032);
      let v = () => [
          { value: g.Oe.MINUTES_15, label: A.intl.string(A.t["8ot6go"]) },
          { value: g.Oe.HOURS_1, label: A.intl.string(A.t.UMWBZm) },
          { value: g.Oe.HOURS_3, label: A.intl.string(A.t.QmYWtr) },
          { value: g.Oe.HOURS_8, label: A.intl.string(A.t.EpAXPD) },
          { value: g.Oe.HOURS_24, label: A.intl.string(A.t["755t4u"]) },
          { value: g.Oe.ALWAYS, label: A.intl.string(A.t.r3LawM) },
        ],
        p = (n) => {
          let t = n > 0 ? a()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function T(n, t) {
        let [e, r] = (0, u.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          a = (0, s.U)(r),
          g = (0, E.ZP)(n, !0);
        function T(t) {
          t && n.type === h.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            d.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              _.UE.muted(t),
            );
        }
        let C = A.intl.string(A.t.tbeRRE),
          O = A.intl.string(A.t.OYefmZ);
        switch (n.type) {
          case h.d4z.GUILD_CATEGORY:
            (C = A.intl.string(A.t.pNMCg4)), (O = A.intl.string(A.t.olaBeH));
            break;
          case h.d4z.GROUP_DM:
            (C = A.intl.string(A.t.LO3kaG)), (O = A.intl.string(A.t["s5/5fn"]));
            break;
          case h.d4z.DM:
            (C = A.intl.format(A.t.byjuJi, { name: g })),
              (O = A.intl.format(A.t["eC+9rq"], { name: g }));
            break;
          default:
            (C = A.intl.string(A.t.tbeRRE)), (O = A.intl.string(A.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: O,
              subtext: a,
              action: () => T(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: C,
              action: () => {
                T(!0),
                  (0, c.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: v().map((e) => {
                let { value: r, label: a } = e;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(r),
                    label: a,
                    action: () =>
                      (function (e) {
                        n.type === h.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                        let i = p(e);
                        d.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          _.ZB.Muted,
                          t,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    787263: function (n, t, e) {
      e.d(t, {
        w: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060);
      function a(n, t) {
        return (0, r.openModalLazy)(async () => {
          let { default: r } = await e.e("79521").then(e.bind(e, 207540));
          return (e) =>
            (0, i.jsx)(r, {
              ...e,
              onConfirm: () => {
                e.onClose(), t();
              },
              channel: n,
            });
        });
      }
    },
    117984: function (n, t, e) {
      e.d(t, {
        CM: function () {
          return h;
        },
        UT: function () {
          return E;
        },
        _Z: function () {
          return p;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return _;
        },
        s3: function () {
          return A;
        },
        uA: function () {
          return v;
        },
        xh: function () {
          return g;
        },
      }),
        e(47120);
      var i = e(524437),
        r = e(675478),
        a = e(592125),
        u = e(496675),
        l = e(709054),
        o = e(853856),
        d = e(231338);
      function c() {
        let n = o.Z.getFavoriteChannels(),
          t = 1;
        for (let e in n) t = Math.max(t, n[e].order);
        return t + 1;
      }
      function s(n) {
        for (let t in n) {
          let e = n[t];
          if (null == e) {
            delete n[t];
            continue;
          }
          if (e.type === i.Dd.CATEGORY) continue;
          let r = a.Z.getChannel(t);
          if (null == r) {
            delete n[t];
            continue;
          }
          if (!r.isPrivate()) {
            if (!u.Z.can(d.Pl.VIEW_CHANNEL, r)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function f(n, t) {
        if (!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: c(),
                parentId: null != t ? t : "0",
              })),
                s(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function _(n) {
        let t = o.Z.getFavorite(n);
        if (null != t)
          r.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              s(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function E(n, t) {
        if (!!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function h(n) {
        let t = l.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: c(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function g(n) {
        _(n);
      }
      function A(n) {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            for (let i of n)
              if (
                (null != i.position &&
                  (t.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var e;
                t.favoriteChannels[i.id].parentId =
                  null !== (e = i.parent_id) && void 0 !== e ? e : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function v(n, t) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function p() {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (n, t, e) {
      e.d(t, {
        Mt: function () {
          return h;
        },
        li: function () {
          return f;
        },
        s4: function () {
          return _;
        },
        up: function () {
          return g;
        },
        zv: function () {
          return E;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(106351),
        a = e(442837);
      e(592125);
      var u = e(984933),
        l = e(914010);
      e(709054);
      var o = e(853856),
        d = e(362658),
        c = e(434065),
        s = e(981631);
      function f(n) {
        let { favoritesEnabled: t, hasStaffPrivileges: e } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, a.e7)([o.Z], () => o.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !i && (!r || e);
      }
      function _(n) {
        return (0, a.e7)([o.Z], () => o.Z.getFavorite(n));
      }
      function E() {
        return (0, a.e7)([u.ZP], () => u.ZP.getChannels(s.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function h() {
        return (0, a.e7)([l.Z], () => l.Z.getGuildId()) === s.I_8;
      }
      function g() {
        let { isFavoritesPerk: n } = (0, d.z)("useFavoriteAdded"),
          t = (0, c.r)(),
          e = i.useCallback(() => {
            n && t.notifyFavoriteAdded();
          }, [t, n]),
          r = i.useCallback(() => {
            n && t.clearFavoriteAdded();
          }, [t, n]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: e,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (n, t, e) {
      e.d(t, {
        r: function () {
          return a;
        },
      });
      var i = e(15729),
        r = e(731965);
      let a = (0, i.U)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
    423589: function (n, t, e) {
      e.d(t, {
        Mn: function () {
          return g;
        },
        OD: function () {
          return h;
        },
        W9: function () {
          return _;
        },
      }),
        e(47120),
        e(789020);
      var i = e(442837),
        r = e(798140),
        a = e(9156),
        u = e(630388),
        l = e(709054),
        o = e(312400),
        d = e(981631),
        c = e(969943),
        s = e(526761),
        f = e(388032);
      function _() {
        return [
          { label: f.intl.string(f.t["8ot6go"]), value: c.Oe.MINUTES_15 },
          { label: f.intl.string(f.t.UMWBZm), value: c.Oe.HOURS_1 },
          { label: f.intl.string(f.t.QmYWtr), value: c.Oe.HOURS_3 },
          { label: f.intl.string(f.t.EpAXPD), value: c.Oe.HOURS_8 },
          { label: f.intl.string(f.t["755t4u"]), value: c.Oe.HOURS_24 },
          { label: f.intl.string(f.t.r3LawM), value: c.Oe.ALWAYS },
        ];
      }
      let E = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function h(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
        return l.default.keys(n).filter((e) => {
          var i, a;
          let l = n[e].message_notifications !== d.bL.NULL,
            o =
              u.yE(
                null !== (i = n[e].flags) && void 0 !== i ? i : 0,
                s.ic.UNREADS_ALL_MESSAGES,
              ) ||
              u.yE(
                null !== (a = n[e].flags) && void 0 !== a ? a : 0,
                s.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && o) ||
            (!t.ignoreNotificationSetting && l) ||
            (!t.ignoreMute && (0, r.m$)(n[e]))
          );
        });
      }
      function g(n) {
        let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: n }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    305587: function (n, t, e) {
      e.d(t, {
        Xs: function () {
          return r;
        },
      });
      let i = (0, e(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function r(n) {
        let { enabled: t } = i.getCurrentConfig(
          { location: n },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    496729: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
        s: function () {
          return c;
        },
      });
      var i = e(200651),
        r = e(704215),
        a = e(481060),
        u = e(570140),
        l = e(605236),
        o = e(592125),
        d = e(305587);
      function c(n) {
        let { channelId: t, location: e } = n,
          i = o.Z.getChannel(t),
          a = (0, l.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !a)
          (0, d.Xs)(e) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function s() {
        (0, a.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return O;
        },
        Ef: function () {
          return N;
        },
        HO: function () {
          return m;
        },
        NZ: function () {
          return b;
        },
        Pq: function () {
          return S;
        },
        Q1: function () {
          return v;
        },
        RK: function () {
          return T;
        },
        _0: function () {
          return p;
        },
        hz: function () {
          return I;
        },
        yi: function () {
          return C;
        },
      });
      var i = e(512722),
        r = e.n(i),
        a = e(149765),
        u = e(544891),
        l = e(493683);
      e(749210);
      var o = e(911969),
        d = e(367907),
        c = e(944486),
        s = e(979651),
        f = e(700785),
        _ = e(922482),
        E = e(192079),
        h = e(706058),
        g = e(590415),
        A = e(981631);
      function v(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(A.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function p(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          u.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let a = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, g.gf)(a) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(A.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function C(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function O(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          u.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function I(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          O(t, n.id, !0),
          u.tn.patch({
            url: A.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function S(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let u = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...u };
        e
          ? ((d.allow = a.IH(d.allow, t)), (d.deny = a.Od(d.deny, t)))
          : ((d.allow = a.Od(d.allow, t)), (d.deny = a.IH(d.deny, t))),
          l.Z.updatePermissionOverwrite(n.id, d);
      }
      async function m(n, t, e, i) {
        if ("" === t) return;
        c.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let r = await (0, h.me)(n.id, t, e, i);
        return T(n, !1, !0), r;
      }
      async function N(n, t, e) {
        if ("" !== t) return await (0, h.Dk)(n.id, t, e);
      }
      async function b(n) {
        await (0, h.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return s;
        },
        kk: function () {
          return f;
        },
        s$: function () {
          return _;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        a = e(700785),
        u = e(427679),
        l = e(157925),
        o = e(981631),
        d = e(71080),
        c = e(388032);
      function s(n, t, e, i) {
        let a = t[0],
          u = r.ZP.getName(n, e, a),
          l = null != i ? i : t.length;
        return 1 === l && null != a
          ? u
          : null == a
            ? c.intl.formatToPlainString(c.t.chmM9P, { count: l })
            : c.intl.formatToPlainString(c.t.GhkJ29, { name: u, count: l - 1 });
      }
      function f(n, t) {
        switch (n) {
          case d.aC.OWNER:
            return c.intl.string(c.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return c.intl.string(c.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return t ? c.intl.string(c.t.Hw3XW1) : c.intl.string(c.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(n) {
        let t = u.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: a.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return u;
        },
        Ix: function () {
          return l;
        },
        me: function () {
          return a;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function a(n, t, e, a, u) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: u,
              send_start_notification: a,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function u(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function l(n) {
        return i.tn.del({ url: r.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    752670: function (n, t, e) {
      n.exports = {
        form: "form_ab60f4",
        modalHeader: "modalHeader_ab60f4",
        closeButton: "closeButton_ab60f4",
        headerImage: "headerImage_ab60f4",
        inputSection: "inputSection_ab60f4",
        title: "title_ab60f4",
        textArea: "textArea_ab60f4",
        error: "error_ab60f4",
        button: "button_ab60f4",
      };
    },
  },
]);
//# sourceMappingURL=96d95af0319a2c8f4bc4.js.map
