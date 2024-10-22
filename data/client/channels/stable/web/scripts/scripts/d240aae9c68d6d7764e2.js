"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49398"],
  {
    211739: function (e, n, t) {
      t.d(n, {
        N5: function () {
          return r;
        },
        c4: function () {
          return a;
        },
        lc: function () {
          return l;
        },
        mJ: function () {
          return u;
        },
      });
      var i = t(570140);
      function a(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function u(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function r(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function l(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    109764: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(852229),
        u = t(399606),
        r = t(481060),
        l = t(228392),
        o = t(592125),
        s = t(934415),
        d = t(981631),
        c = t(689938);
      function _(e, n, t) {
        let _ = (0, u.e7)([o.Z], () => o.Z.getChannel(e.parent_id));
        return (0, i.jsx)(r.MenuItem, {
          id: "channel-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, l.B)({
                postId: e.id,
                location: { section: d.jXE.CONTEXT_MENU },
              }),
              (0, a.J)((0, s.EO)(e, _, n, t));
          },
        });
      }
    },
    323597: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(442837),
        u = t(481060),
        r = t(787014),
        l = t(904245),
        o = t(787263),
        s = t(660189),
        d = t(144140),
        c = t(314897),
        _ = t(496675),
        E = t(709054),
        f = t(981631),
        T = t(689938);
      function A(e) {
        let n = e.isForumPost(),
          t = (0, a.e7)([c.default], () => e.isOwner(c.default.getId()), [e]),
          { canManageChannel: A, canAccessChannel: M } = (0, a.cj)(
            [_.Z],
            () => ({
              canAccessChannel: _.Z.can(e.accessPermissions, e),
              canManageChannel: _.Z.can(
                e.isThread() ? f.Plq.MANAGE_THREADS : f.Plq.MANAGE_CHANNELS,
                e,
              ),
            }),
            [e],
          ),
          N = (0, a.e7)(
            [d.Z],
            () => {
              var n;
              return null !== (n = d.Z.getCount(e.id)) && void 0 !== n ? n : 0;
            },
            [e.id],
          ),
          { firstMessage: C } = (0, a.e7)([s.Z], () => s.Z.getMessage(e.id), [
            e.id,
          ]),
          O = n && (A || (t && N < 1)),
          I = n && t && !A && N > 0 && null != C;
        return M && (A || O || I)
          ? (0, i.jsx)(u.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (e.type === f.d4z.GUILD_CATEGORY)
                  return T.Z.Messages.DELETE_CATEGORY;
                if (e.isForumPost())
                  return O
                    ? T.Z.Messages.DELETE_FORUM_POST
                    : T.Z.Messages.DELETE_MESSAGE;
                if (e.isThread()) return T.Z.Messages.DELETE_THREAD;
                return T.Z.Messages.DELETE_CHANNEL;
              })(),
              color: "danger",
              action: () => {
                (0, o.w)(e, function () {
                  I
                    ? l.Z.deleteMessage(
                        e.id,
                        E.default.castChannelIdAsMessageId(e.id),
                      )
                    : r.ZP.deleteChannel(e.id);
                });
              },
            })
          : null;
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return O;
        },
        k: function () {
          return N;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var a = t(913527),
        u = t.n(a),
        r = t(442837),
        l = t(481060),
        o = t(211739),
        s = t(87051),
        d = t(401412),
        c = t(777861),
        _ = t(9156),
        E = t(621600),
        f = t(933557),
        T = t(981631),
        A = t(969943),
        M = t(689938);
      let N = () => [
          {
            value: A.Oe.MINUTES_15,
            label: M.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: A.Oe.HOURS_1, label: M.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: A.Oe.HOURS_3, label: M.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: A.Oe.HOURS_8, label: M.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: A.Oe.HOURS_24, label: M.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: A.Oe.ALWAYS, label: M.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        C = (e) => {
          let n = e > 0 ? u()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function O(e, n) {
        let [t, a] = (0, r.Wu)([_.ZP], () => [
            _.ZP.isChannelMuted(e.guild_id, e.id),
            _.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          u = (0, c.U)(a),
          A = (0, f.ZP)(e, !0);
        function O(n) {
          n && e.type === T.d4z.GUILD_CATEGORY && (0, o.c4)(e.id),
            s.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              E.UE.muted(n),
            );
        }
        let I = M.Z.Messages.MUTE_CHANNEL_GENERIC,
          h = M.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case T.d4z.GUILD_CATEGORY:
            (I = M.Z.Messages.MUTE_CATEGORY),
              (h = M.Z.Messages.UNMUTE_CATEGORY);
            break;
          case T.d4z.GROUP_DM:
            (I = M.Z.Messages.MUTE_CONVERSATION),
              (h = M.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case T.d4z.DM:
            (I = M.Z.Messages.MUTE_CHANNEL.format({ name: A })),
              (h = M.Z.Messages.UNMUTE_CHANNEL.format({ name: A }));
            break;
          default:
            (I = M.Z.Messages.MUTE_CHANNEL_GENERIC),
              (h = M.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: h,
              subtext: u,
              action: () => O(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: I,
              action: () => {
                O(!0),
                  (0, d.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: N().map((t) => {
                let { value: a, label: u } = t;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(a),
                    label: u,
                    action: () =>
                      (function (t) {
                        e.type === T.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
                        let i = C(t);
                        s.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          E.ZB.Muted,
                          n,
                        );
                      })(a),
                  },
                  a,
                );
              }),
            });
      }
    },
    787263: function (e, n, t) {
      t.d(n, {
        w: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060);
      function u(e, n) {
        return (0, a.openModalLazy)(async () => {
          let { default: a } = await Promise.all([
            t.e("53115"),
            t.e("79521"),
          ]).then(t.bind(t, 207540));
          return (t) =>
            (0, i.jsx)(a, {
              ...t,
              onConfirm: () => {
                t.onClose(), n();
              },
              channel: e,
            });
        });
      }
    },
    117984: function (e, n, t) {
      t.d(n, {
        CM: function () {
          return T;
        },
        UT: function () {
          return f;
        },
        _Z: function () {
          return C;
        },
        kj: function () {
          return _;
        },
        oC: function () {
          return E;
        },
        s3: function () {
          return M;
        },
        uA: function () {
          return N;
        },
        xh: function () {
          return A;
        },
      }),
        t(47120);
      var i = t(524437),
        a = t(675478),
        u = t(592125),
        r = t(496675),
        l = t(709054),
        o = t(853856),
        s = t(231338);
      function d() {
        let e = o.Z.getFavoriteChannels(),
          n = 1;
        for (let t in e) n = Math.max(n, e[t].order);
        return n + 1;
      }
      function c(e) {
        for (let n in e) {
          let t = e[n];
          if (null == t) {
            delete e[n];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let a = u.Z.getChannel(n);
          if (null == a) {
            delete e[n];
            continue;
          }
          if (!a.isPrivate()) {
            if (!r.Z.can(s.Pl.VIEW_CHANNEL, a)) {
              delete e[n];
              continue;
            }
          }
        }
      }
      function _(e, n) {
        if (!o.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[e] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != n ? n : "0",
              })),
                c(t.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
          );
      }
      function E(e) {
        let n = o.Z.getFavorite(e);
        if (null != n)
          a.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[e], n.type === i.Dd.CATEGORY))
                for (let n in t.favoriteChannels)
                  t.favoriteChannels[n].parentId === e &&
                    (t.favoriteChannels[n].parentId = "0");
              c(t.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function f(e, n) {
        if (!!o.Z.isFavorite(e))
          a.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[e].nickname = null != n ? n : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function T(e) {
        let n = l.default.fromTimestamp(Date.now());
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n] = i.aV.create({
              nickname: e,
              type: i.Dd.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function A(e) {
        E(e);
      }
      function M(e) {
        a.hW.updateAsync(
          "favorites",
          (n) => {
            for (let i of e)
              if (
                (null != i.position &&
                  (n.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var t;
                n.favoriteChannels[i.id].parentId =
                  null !== (t = i.parent_id) && void 0 !== t ? t : "0";
              }
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function N(e, n) {
        a.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e].parentId = null != n ? n : "0";
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function C() {
        a.hW.updateAsync(
          "favorites",
          (e) => {
            e.muted = !e.muted;
          },
          a.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return T;
        },
        li: function () {
          return _;
        },
        s4: function () {
          return E;
        },
        up: function () {
          return A;
        },
        zv: function () {
          return f;
        },
      }),
        t(47120),
        t(653041);
      var i = t(192379),
        a = t(106351),
        u = t(442837);
      t(592125);
      var r = t(984933),
        l = t(914010);
      t(709054);
      var o = t(853856),
        s = t(362658),
        d = t(434065),
        c = t(981631);
      function _(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, s.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, u.e7)([o.Z], () => o.Z.isFavorite(e.id)),
          a = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!a || t);
      }
      function E(e) {
        return (0, u.e7)([o.Z], () => o.Z.getFavorite(e));
      }
      function f() {
        return (0, u.e7)([r.ZP], () => r.ZP.getChannels(c.I_8))[
          a.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function T() {
        return (0, u.e7)([l.Z], () => l.Z.getGuildId()) === c.I_8;
      }
      function A() {
        let { isFavoritesPerk: e } = (0, s.z)("useFavoriteAdded"),
          n = (0, d.r)(),
          t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          a = i.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: a,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return u;
        },
      });
      var i = t(903797),
        a = t(731965);
      let u = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return a;
        },
      });
      let i = (0, t(818083).B)({
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
      function a(e) {
        let { enabled: n } = i.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return n;
      }
    },
    401412: function (e, n, t) {
      t.d(n, {
        s: function () {
          return o;
        },
      });
      var i = t(704215),
        a = t(570140),
        u = t(605236),
        r = t(592125),
        l = t(305587);
      function o(e) {
        let { channelId: n, location: t } = e,
          o = r.Z.getChannel(n),
          s = (0, u.un)(i.z.USER_DM_MUTE_FEEDBACK);
        if (null != o && !!o.isDM() && !s)
          (0, l.Xs)(t) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: o });
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return h;
        },
        Ef: function () {
          return S;
        },
        HO: function () {
          return g;
        },
        NZ: function () {
          return v;
        },
        Pq: function () {
          return p;
        },
        Q1: function () {
          return N;
        },
        RK: function () {
          return O;
        },
        _0: function () {
          return C;
        },
        hz: function () {
          return R;
        },
        yi: function () {
          return I;
        },
      });
      var i = t(512722),
        a = t.n(i),
        u = t(149765),
        r = t(544891),
        l = t(493683);
      t(749210);
      var o = t(911969),
        s = t(367907),
        d = t(944486),
        c = t(979651),
        _ = t(700785),
        E = t(922482),
        f = t(192079),
        T = t(706058),
        A = t(590415),
        M = t(981631);
      function N(e, n) {
        let t = e.getGuildId();
        return (
          a()(null != t, "This channel cannot be guildless."),
          n && (0, s.yw)(M.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function C(e, n) {
        let t = e.getGuildId();
        return (
          a()(null != t, "This channel cannot be guildless."),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function O(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        a()(null != i, "This channel cannot be guildless.");
        let u = c.Z.getVoiceStateForChannel(e.id);
        return (
          (0, A.gf)(u) === A.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, s.yw)(M.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function I(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          a()(null != n, "This channel cannot be guildless."),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function h(e, n, t) {
        let i = e.getGuildId();
        return (
          a()(null != i, "This channel cannot be guildless."),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function R(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          a()(null != t, "This channel cannot be guildless."),
          h(n, e.id, !0),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function p(e, n, t) {
        let i = e.getGuildId();
        a()(null != i, "Channel cannot be guildless");
        let r = e.permissionOverwrites[i],
          s = { id: i, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...r };
        t
          ? ((s.allow = u.IH(s.allow, n)), (s.deny = u.Od(s.deny, n)))
          : ((s.allow = u.Od(s.allow, n)), (s.deny = u.IH(s.deny, n))),
          l.Z.updatePermissionOverwrite(e.id, s);
      }
      async function g(e, n, t, i) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
        let a = await (0, T.me)(e.id, n, t, i);
        return O(e, !1, !0), a;
      }
      async function S(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function v(e) {
        await (0, T.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return c;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return E;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        a = t(5192),
        u = t(700785),
        r = t(427679),
        l = t(157925),
        o = t(981631),
        s = t(71080),
        d = t(689938);
      function c(e, n, t, i) {
        let u = n[0],
          r = a.ZP.getName(e, t, u),
          l = null != i ? i : n.length;
        return 1 === l && null != u
          ? r
          : null == u
            ? d.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : d.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: r,
                count: l - 1,
              });
      }
      function _(e, n) {
        switch (e) {
          case s.aC.OWNER:
            return d.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case s.aC.ADMINISTRATOR:
            return d.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case s.aC.MEMBER:
          case s.aC.ROLE:
            return n
              ? d.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case s.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let n = r.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? l.BM.EVERYONE
            : l.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return r;
        },
        Ix: function () {
          return l;
        },
        me: function () {
          return u;
        },
      });
      var i = t(544891),
        a = t(981631);
      async function u(e, n, t, u, r) {
        return (
          await i.tn.post({
            url: a.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: r,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function r(e, n, t) {
        return (
          await i.tn.patch({
            url: a.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function l(e) {
        return i.tn.del(a.ANM.STAGE_INSTANCE(e));
      }
    },
    897232: function (e, n, t) {
      e.exports = {
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
//# sourceMappingURL=d240aae9c68d6d7764e2.js.map
