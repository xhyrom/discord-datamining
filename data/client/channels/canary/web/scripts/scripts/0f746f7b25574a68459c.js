"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10540"],
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
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(852229),
        u = t(399606),
        r = t(481060),
        l = t(228392),
        d = t(592125),
        s = t(934415),
        o = t(981631),
        _ = t(689938);
      function c(e, n, t) {
        let c = (0, u.e7)([d.Z], () => d.Z.getChannel(e.parent_id));
        return (0, i.jsx)(r.MenuItem, {
          id: "channel-copy-link",
          label: _.Z.Messages.COPY_LINK,
          action: () => {
            e.isForumPost() &&
              (0, l.B)({
                postId: e.id,
                location: { section: o.jXE.CONTEXT_MENU },
              }),
              (0, a.J)((0, s.EO)(e, c, n, t));
          },
        });
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return N;
        },
        k: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(913527),
        u = t.n(a),
        r = t(442837),
        l = t(481060),
        d = t(211739),
        s = t(92114),
        o = t(777861),
        _ = t(9156),
        c = t(621600),
        E = t(933557),
        f = t(981631),
        T = t(969943),
        A = t(689938);
      let O = () => [
          {
            value: T.Oe.MINUTES_15,
            label: A.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: T.Oe.HOURS_1, label: A.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: T.Oe.HOURS_3, label: A.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: T.Oe.HOURS_8, label: A.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: T.Oe.HOURS_24, label: A.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: T.Oe.ALWAYS, label: A.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        M = (e) => {
          let n = e > 0 ? u()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function N(e, n) {
        let [t, a] = (0, r.Wu)([_.ZP], () => [
            _.ZP.isChannelMuted(e.guild_id, e.id),
            _.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          u = (0, o.U)(a),
          T = (0, E.ZP)(e, !0);
        function N(n) {
          n && e.type === f.d4z.GUILD_CATEGORY && (0, d.c4)(e.id),
            s.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              c.UE.muted(n),
            );
        }
        let I = A.Z.Messages.MUTE_CHANNEL_GENERIC,
          S = A.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case f.d4z.GUILD_CATEGORY:
            (I = A.Z.Messages.MUTE_CATEGORY),
              (S = A.Z.Messages.UNMUTE_CATEGORY);
            break;
          case f.d4z.GROUP_DM:
            (I = A.Z.Messages.MUTE_CONVERSATION),
              (S = A.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case f.d4z.DM:
            (I = A.Z.Messages.MUTE_CHANNEL.format({ name: T })),
              (S = A.Z.Messages.UNMUTE_CHANNEL.format({ name: T }));
            break;
          default:
            (I = A.Z.Messages.MUTE_CHANNEL_GENERIC),
              (S = A.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: S,
              subtext: u,
              action: () => N(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: I,
              action: () => N(!0),
              children: O().map((t) => {
                let { value: a, label: u } = t;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(a),
                    label: u,
                    action: () =>
                      (function (t) {
                        e.type === f.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
                        let i = M(t);
                        s.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          c.ZB.Muted,
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
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return T;
        },
        li: function () {
          return c;
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
        a = t(106351),
        u = t(442837);
      t(592125);
      var r = t(984933),
        l = t(914010);
      t(709054);
      var d = t(853856),
        s = t(362658),
        o = t(434065),
        _ = t(981631);
      function c(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, s.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, u.e7)([d.Z], () => d.Z.isFavorite(e.id)),
          a = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!a || t);
      }
      function E(e) {
        return (0, u.e7)([d.Z], () => d.Z.getFavorite(e));
      }
      function f() {
        return (0, u.e7)([r.ZP], () => r.ZP.getChannels(_.I_8))[
          a.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function T() {
        return (0, u.e7)([l.Z], () => l.Z.getGuildId()) === _.I_8;
      }
      function A() {
        let { isFavoritesPerk: e } = (0, s.z)("useFavoriteAdded"),
          n = (0, o.r)(),
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
      var i = t(652874),
        a = t(731965);
      let u = (0, i.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, a.j)(() => e({ favoriteAdded: !1 })),
      }));
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
          return h;
        },
        NZ: function () {
          return U;
        },
        Pq: function () {
          return R;
        },
        Q1: function () {
          return M;
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
        a = t.n(i),
        u = t(149765),
        r = t(544891),
        l = t(493683);
      t(749210);
      var d = t(911969),
        s = t(367907),
        o = t(944486),
        _ = t(979651),
        c = t(700785),
        E = t(922482),
        f = t(192079),
        T = t(706058),
        A = t(590415),
        O = t(981631);
      function M(e, n) {
        let t = e.getGuildId();
        return (
          a()(null != t, "This channel cannot be guildless."),
          n && (0, s.yw)(O.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
          r.tn.patch({
            url: O.ANM.UPDATE_VOICE_STATE(t),
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
          a()(null != t, "This channel cannot be guildless."),
          r.tn.patch({
            url: O.ANM.UPDATE_VOICE_STATE(t, n),
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
        a()(null != i, "This channel cannot be guildless.");
        let u = _.Z.getVoiceStateForChannel(e.id);
        return (
          (0, A.gf)(u) === A.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, s.yw)(O.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
          r.tn.patch({
            url: O.ANM.UPDATE_VOICE_STATE(i),
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
          a()(null != n, "This channel cannot be guildless."),
          r.tn.patch({
            url: O.ANM.UPDATE_VOICE_STATE(n),
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
          a()(null != i, "This channel cannot be guildless."),
          r.tn.patch({
            url: O.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function C(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          a()(null != t, "This channel cannot be guildless."),
          g(n, e.id, !0),
          r.tn.patch({
            url: O.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function R(e, n, t) {
        let i = e.getGuildId();
        a()(null != i, "Channel cannot be guildless");
        let r = e.permissionOverwrites[i],
          s = { id: i, type: d.BN.ROLE, allow: c.Hn, deny: c.Hn, ...r };
        t
          ? ((s.allow = u.IH(s.allow, n)), (s.deny = u.Od(s.deny, n)))
          : ((s.allow = u.Od(s.allow, n)), (s.deny = u.IH(s.deny, n))),
          l.Z.updatePermissionOverwrite(e.id, s);
      }
      async function h(e, n, t, i) {
        if ("" === n) return;
        o.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
        let a = await (0, T.me)(e.id, n, t, i);
        return I(e, !1, !0), a;
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
          return _;
        },
        kk: function () {
          return c;
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
        d = t(981631),
        s = t(71080),
        o = t(689938);
      function _(e, n, t, i) {
        let u = n[0],
          r = a.ZP.getName(e, t, u),
          l = null != i ? i : n.length;
        return 1 === l && null != u
          ? r
          : null == u
            ? o.Z.Messages.SPEAKING_COUNT.format({ count: l })
            : o.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: r,
                count: l - 1,
              });
      }
      function c(e, n) {
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
          request_to_speak_state: u.Uu(d.Plq.REQUEST_TO_SPEAK, e)
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
    764954: function (e, n, t) {
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
//# sourceMappingURL=0f746f7b25574a68459c.js.map
