"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69213"],
  {
    211739: function (e, n, t) {
      t.d(n, {
        N5: function () {
          return r;
        },
        c4: function () {
          return u;
        },
        lc: function () {
          return l;
        },
        mJ: function () {
          return a;
        },
      });
      var i = t(570140);
      function u(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function a(e) {
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
      var i = t(735250);
      t(470079);
      var u = t(852229),
        a = t(399606),
        r = t(481060),
        l = t(228392),
        d = t(592125),
        s = t(934415),
        o = t(981631),
        c = t(689938);
      function _(e, n, t) {
        let _ = (0, a.e7)([d.Z], () => d.Z.getChannel(e.parent_id));
        return (0, i.jsx)(r.MenuItem, {
          id: "channel-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, l.B)({
                postId: e.id,
                location: { section: o.jXE.CONTEXT_MENU },
              }),
              (0, u.J)((0, s.EO)(e, _, n, t));
          },
        });
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return I;
        },
        k: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var u = t(913527),
        a = t.n(u),
        r = t(442837),
        l = t(481060),
        d = t(211739),
        s = t(87051),
        o = t(401412),
        c = t(777861),
        _ = t(9156),
        E = t(621600),
        f = t(933557),
        T = t(981631),
        A = t(969943),
        M = t(689938);
      let O = () => [
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
        N = (e) => {
          let n = e > 0 ? a()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function I(e, n) {
        let [t, u] = (0, r.Wu)([_.ZP], () => [
            _.ZP.isChannelMuted(e.guild_id, e.id),
            _.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          a = (0, c.U)(u),
          A = (0, f.ZP)(e, !0);
        function I(n) {
          n && e.type === T.d4z.GUILD_CATEGORY && (0, d.c4)(e.id),
            s.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              E.UE.muted(n),
            );
        }
        let S = M.Z.Messages.MUTE_CHANNEL_GENERIC,
          g = M.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case T.d4z.GUILD_CATEGORY:
            (S = M.Z.Messages.MUTE_CATEGORY),
              (g = M.Z.Messages.UNMUTE_CATEGORY);
            break;
          case T.d4z.GROUP_DM:
            (S = M.Z.Messages.MUTE_CONVERSATION),
              (g = M.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case T.d4z.DM:
            (S = M.Z.Messages.MUTE_CHANNEL.format({ name: A })),
              (g = M.Z.Messages.UNMUTE_CHANNEL.format({ name: A }));
            break;
          default:
            (S = M.Z.Messages.MUTE_CHANNEL_GENERIC),
              (g = M.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: g,
              subtext: a,
              action: () => I(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: S,
              action: () => {
                I(!0),
                  (0, o.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: O().map((t) => {
                let { value: u, label: a } = t;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(u),
                    label: a,
                    action: () =>
                      (function (t) {
                        e.type === T.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
                        let i = N(t);
                        s.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          E.ZB.Muted,
                          n,
                        );
                      })(u),
                  },
                  u,
                );
              }),
            });
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
      var i = t(470079),
        u = t(106351),
        a = t(442837);
      t(592125);
      var r = t(984933),
        l = t(914010);
      t(709054);
      var d = t(853856),
        s = t(362658),
        o = t(434065),
        c = t(981631);
      function _(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, s.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, a.e7)([d.Z], () => d.Z.isFavorite(e.id)),
          u = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!u || t);
      }
      function E(e) {
        return (0, a.e7)([d.Z], () => d.Z.getFavorite(e));
      }
      function f() {
        return (0, a.e7)([r.ZP], () => r.ZP.getChannels(c.I_8))[
          u.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function T() {
        return (0, a.e7)([l.Z], () => l.Z.getGuildId()) === c.I_8;
      }
      function A() {
        let { isFavoritesPerk: e } = (0, s.z)("useFavoriteAdded"),
          n = (0, o.r)(),
          t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          u = i.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: u,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return a;
        },
      });
      var i = t(652874),
        u = t(731965);
      let a = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, u.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, u.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return u;
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
      function u(e) {
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
          return d;
        },
      });
      var i = t(704215),
        u = t(570140),
        a = t(605236),
        r = t(592125),
        l = t(305587);
      function d(e) {
        let { channelId: n, location: t } = e,
          d = r.Z.getChannel(n),
          s = (0, a.un)(i.z.USER_DM_MUTE_FEEDBACK);
        if (null != d && !!d.isDM() && !s)
          (0, l.Xs)(t) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: d });
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return g;
        },
        Ef: function () {
          return p;
        },
        HO: function () {
          return R;
        },
        NZ: function () {
          return U;
        },
        Pq: function () {
          return h;
        },
        Q1: function () {
          return O;
        },
        RK: function () {
          return I;
        },
        _0: function () {
          return N;
        },
        hz: function () {
          return C;
        },
        yi: function () {
          return S;
        },
      });
      var i = t(512722),
        u = t.n(i),
        a = t(149765),
        r = t(544891),
        l = t(493683);
      t(749210);
      var d = t(911969),
        s = t(367907),
        o = t(944486),
        c = t(979651),
        _ = t(700785),
        E = t(922482),
        f = t(192079),
        T = t(706058),
        A = t(590415),
        M = t(981631);
      function O(e, n) {
        let t = e.getGuildId();
        return (
          u()(null != t, "This channel cannot be guildless."),
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
      function N(e, n) {
        let t = e.getGuildId();
        return (
          u()(null != t, "This channel cannot be guildless."),
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
      function I(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        u()(null != i, "This channel cannot be guildless.");
        let a = c.Z.getVoiceStateForChannel(e.id);
        return (
          (0, A.gf)(a) === A.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
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
      function S(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          u()(null != n, "This channel cannot be guildless."),
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
      function g(e, n, t) {
        let i = e.getGuildId();
        return (
          u()(null != i, "This channel cannot be guildless."),
          r.tn.patch({
            url: M.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function C(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          u()(null != t, "This channel cannot be guildless."),
          g(n, e.id, !0),
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
      function h(e, n, t) {
        let i = e.getGuildId();
        u()(null != i, "Channel cannot be guildless");
        let r = e.permissionOverwrites[i],
          s = { id: i, type: d.BN.ROLE, allow: _.Hn, deny: _.Hn, ...r };
        t
          ? ((s.allow = a.IH(s.allow, n)), (s.deny = a.Od(s.deny, n)))
          : ((s.allow = a.Od(s.allow, n)), (s.deny = a.IH(s.deny, n))),
          l.Z.updatePermissionOverwrite(e.id, s);
      }
      async function R(e, n, t, i) {
        if ("" === n) return;
        o.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
        let u = await (0, T.me)(e.id, n, t, i);
        return I(e, !1, !0), u;
      }
      async function p(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function U(e) {
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
        u = t(5192),
        a = t(700785),
        r = t(427679),
        l = t(157925),
        d = t(981631),
        s = t(71080),
        o = t(689938);
      function c(e, n, t, i) {
        let a = n[0],
          r = u.ZP.getName(e, t, a),
          l = null != i ? i : n.length;
        return 1 === l && null != a
          ? r
          : null == a
            ? o.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : o.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: r,
                count: l - 1,
              });
      }
      function _(e, n) {
        switch (e) {
          case s.aC.OWNER:
            return o.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case s.aC.ADMINISTRATOR:
            return o.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case s.aC.MEMBER:
          case s.aC.ROLE:
            return n
              ? o.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : o.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
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
          request_to_speak_state: a.Uu(d.Plq.REQUEST_TO_SPEAK, e)
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
          return a;
        },
      });
      var i = t(544891),
        u = t(981631);
      async function a(e, n, t, a, r) {
        return (
          await i.tn.post({
            url: u.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: r,
              send_start_notification: a,
            },
          })
        ).body;
      }
      async function r(e, n, t) {
        return (
          await i.tn.patch({
            url: u.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function l(e) {
        return i.tn.del(u.ANM.STAGE_INSTANCE(e));
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
//# sourceMappingURL=dd7454f9a936bbddc5a0.js.map
