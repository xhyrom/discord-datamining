"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16838"],
  {
    211739: function (n, t, e) {
      e.d(t, {
        N5: function () {
          return a;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return l;
        },
        mJ: function () {
          return u;
        },
      });
      var i = e(570140);
      function r(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function u(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: n });
      }
      function a(n) {
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
        u = e(399606),
        a = e(481060),
        l = e(228392),
        o = e(592125),
        d = e(934415),
        c = e(981631),
        s = e(388032);
      function f(n, t, e) {
        let f = (0, u.e7)([o.Z], () => o.Z.getChannel(n.parent_id));
        return (0, i.jsx)(a.MenuItem, {
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
        u = e(481060),
        a = e(787014),
        l = e(904245),
        o = e(787263),
        d = e(660189),
        c = e(144140),
        s = e(314897),
        f = e(496675),
        _ = e(709054),
        E = e(981631),
        A = e(388032);
      function g(n) {
        let t = n.isForumPost(),
          e = (0, r.e7)([s.default], () => n.isOwner(s.default.getId()), [n]),
          { canManageChannel: g, canAccessChannel: h } = (0, r.cj)(
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
          O = t && e && !g && v > 0 && null != p;
        return h && (g || T || O)
          ? (0, i.jsx)(u.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (n.type === E.d4z.GUILD_CATEGORY)
                  return A.intl.string(A.t.ifbXnJ);
                if (n.isForumPost())
                  return T
                    ? A.intl.string(A.t.nEOg1N)
                    : A.intl.string(A.t.xwMqDw);
                if (n.isThread()) return A.intl.string(A.t.H7vTe3);
                return A.intl.string(A.t["8D8Rsb"]);
              })(),
              color: "danger",
              action: () => {
                (0, o.w)(n, function () {
                  O
                    ? l.Z.deleteMessage(
                        n.id,
                        _.default.castChannelIdAsMessageId(n.id),
                      )
                    : a.ZP.deleteChannel(n.id);
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
        u = e.n(r),
        a = e(442837),
        l = e(481060),
        o = e(211739),
        d = e(87051),
        c = e(496729),
        s = e(777861),
        f = e(9156),
        _ = e(621600),
        E = e(933557),
        A = e(981631),
        g = e(969943),
        h = e(388032);
      let v = () => [
          { value: g.Oe.MINUTES_15, label: h.intl.string(h.t["8ot6go"]) },
          { value: g.Oe.HOURS_1, label: h.intl.string(h.t.UMWBZm) },
          { value: g.Oe.HOURS_3, label: h.intl.string(h.t.QmYWtr) },
          { value: g.Oe.HOURS_8, label: h.intl.string(h.t.EpAXPD) },
          { value: g.Oe.HOURS_24, label: h.intl.string(h.t["755t4u"]) },
          { value: g.Oe.ALWAYS, label: h.intl.string(h.t.r3LawM) },
        ],
        p = (n) => {
          let t = n > 0 ? u()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function T(n, t) {
        let [e, r] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          u = (0, s.U)(r),
          g = (0, E.ZP)(n, !0);
        function T(t) {
          t && n.type === A.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            d.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              _.UE.muted(t),
            );
        }
        let O = h.intl.string(h.t.tbeRRE),
          C = h.intl.string(h.t.OYefmZ);
        switch (n.type) {
          case A.d4z.GUILD_CATEGORY:
            (O = h.intl.string(h.t.pNMCg4)), (C = h.intl.string(h.t.olaBeH));
            break;
          case A.d4z.GROUP_DM:
            (O = h.intl.string(h.t.LO3kaG)), (C = h.intl.string(h.t["s5/5fn"]));
            break;
          case A.d4z.DM:
            (O = h.intl.format(h.t.byjuJi, { name: g })),
              (C = h.intl.format(h.t["eC+9rq"], { name: g }));
            break;
          default:
            (O = h.intl.string(h.t.tbeRRE)), (C = h.intl.string(h.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: u,
              action: () => T(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: O,
              action: () => {
                T(!0),
                  (0, c.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: v().map((e) => {
                let { value: r, label: u } = e;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(r),
                    label: u,
                    action: () =>
                      (function (e) {
                        n.type === A.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
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
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060);
      function u(n, t) {
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
          return A;
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
          return h;
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
        u = e(592125),
        a = e(496675),
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
          let r = u.Z.getChannel(t);
          if (null == r) {
            delete n[t];
            continue;
          }
          if (!r.isPrivate()) {
            if (!a.Z.can(d.Pl.VIEW_CHANNEL, r)) {
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
      function A(n) {
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
      function h(n) {
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
          return A;
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
        u = e(442837);
      e(592125);
      var a = e(984933),
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
          i = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !i && (!r || e);
      }
      function _(n) {
        return (0, u.e7)([o.Z], () => o.Z.getFavorite(n));
      }
      function E() {
        return (0, u.e7)([a.ZP], () => a.ZP.getChannels(s.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function A() {
        return (0, u.e7)([l.Z], () => l.Z.getGuildId()) === s.I_8;
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
          return u;
        },
      });
      var i = e(905837),
        r = e(731965);
      let u = (0, i.Ue)((n) => ({
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
          return A;
        },
        W9: function () {
          return _;
        },
      }),
        e(47120),
        e(789020);
      var i = e(442837),
        r = e(798140),
        u = e(9156),
        a = e(630388),
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
      function A(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
        return l.default.keys(n).filter((e) => {
          var i, u;
          let l = n[e].message_notifications !== d.bL.NULL,
            o =
              a.yE(
                null !== (i = n[e].flags) && void 0 !== i ? i : 0,
                s.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (u = n[e].flags) && void 0 !== u ? u : 0,
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
        let t = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: n }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (n, t, e) {
      e.d(t, {
        Q4: function () {
          return u;
        },
        YF: function () {
          return a;
        },
        pq: function () {
          return l;
        },
      });
      var i = e(630388),
        r = e(526761);
      function u(n, t) {
        var e;
        return i.pj(
          ((e = n),
          i.M1(e, r.vc.UNREADS_ALL_MESSAGES, r.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let a = (n) =>
        i.M1(n, r.ic.UNREADS_ALL_MESSAGES, r.ic.UNREADS_ONLY_MENTIONS);
      function l(n, t) {
        return i.pj(a(n), t);
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
        u = e(481060),
        a = e(570140),
        l = e(605236),
        o = e(592125),
        d = e(305587);
      function c(n) {
        let { channelId: t, location: e } = n,
          i = o.Z.getChannel(t),
          u = (0, l.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !u)
          (0, d.Xs)(e) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function s() {
        (0, u.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return C;
        },
        Ef: function () {
          return m;
        },
        HO: function () {
          return I;
        },
        NZ: function () {
          return M;
        },
        Pq: function () {
          return N;
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
          return S;
        },
        yi: function () {
          return O;
        },
      });
      var i = e(512722),
        r = e.n(i),
        u = e(149765),
        a = e(544891),
        l = e(493683);
      e(749210);
      var o = e(911969),
        d = e(367907),
        c = e(944486),
        s = e(979651),
        f = e(700785),
        _ = e(922482),
        E = e(192079),
        A = e(706058),
        g = e(590415),
        h = e(981631);
      function v(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          a.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function p(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          a.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function T(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let u = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, g.gf)(u) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          a.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function O(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function S(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          C(t, n.id, !0),
          a.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...a };
        e
          ? ((d.allow = u.IH(d.allow, t)), (d.deny = u.Od(d.deny, t)))
          : ((d.allow = u.Od(d.allow, t)), (d.deny = u.IH(d.deny, t))),
          l.Z.updatePermissionOverwrite(n.id, d);
      }
      async function I(n, t, e, i) {
        if ("" === t) return;
        c.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let r = await (0, A.me)(n.id, t, e, i);
        return T(n, !1, !0), r;
      }
      async function m(n, t, e) {
        if ("" !== t) return await (0, A.Dk)(n.id, t, e);
      }
      async function M(n) {
        await (0, A.Ix)(n.id);
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
        u = e(700785),
        a = e(427679),
        l = e(157925),
        o = e(981631),
        d = e(71080),
        c = e(388032);
      function s(n, t, e, i) {
        let u = t[0],
          a = r.ZP.getName(n, e, u),
          l = null != i ? i : t.length;
        return 1 === l && null != u
          ? a
          : null == u
            ? c.intl.formatToPlainString(c.t.chmM9P, { count: l })
            : c.intl.formatToPlainString(c.t.GhkJ29, { name: a, count: l - 1 });
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
        let t = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return l;
        },
        me: function () {
          return u;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function u(n, t, e, u, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: a,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function a(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function l(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
      }
    },
    897232: function (n, t, e) {
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
//# sourceMappingURL=385a10995ffe94b978f7.js.map
