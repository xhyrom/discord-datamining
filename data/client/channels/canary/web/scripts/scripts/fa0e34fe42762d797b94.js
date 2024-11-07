"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35593"],
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
          return o;
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
      function o(n) {
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
        o = e(228392),
        l = e(592125),
        d = e(934415),
        c = e(981631),
        s = e(388032);
      function f(n, t, e) {
        let f = (0, a.e7)([l.Z], () => l.Z.getChannel(n.parent_id));
        return (0, i.jsx)(u.MenuItem, {
          id: "channel-copy-link",
          label: s.intl.string(s.t.WqhZsr),
          action: () => {
            n.isForumPost() &&
              (0, o.B)({
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
          return h;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        u = e(787014),
        o = e(904245),
        l = e(787263),
        d = e(660189),
        c = e(144140),
        s = e(314897),
        f = e(496675),
        _ = e(709054),
        E = e(981631),
        A = e(388032);
      function h(n) {
        let t = n.isForumPost(),
          e = (0, r.e7)([s.default], () => n.isOwner(s.default.getId()), [n]),
          { canManageChannel: h, canAccessChannel: T } = (0, r.cj)(
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
          p = (0, r.e7)(
            [c.Z],
            () => {
              var t;
              return null !== (t = c.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id],
          ),
          { firstMessage: v } = (0, r.e7)([d.Z], () => d.Z.getMessage(n.id), [
            n.id,
          ]),
          C = t && (h || (e && p < 1)),
          I = t && e && !h && p > 0 && null != v;
        return T && (h || C || I)
          ? (0, i.jsx)(a.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (n.type === E.d4z.GUILD_CATEGORY)
                  return A.intl.string(A.t.ifbXnJ);
                if (n.isForumPost())
                  return C
                    ? A.intl.string(A.t.nEOg1N)
                    : A.intl.string(A.t.xwMqDw);
                if (n.isThread()) return A.intl.string(A.t.H7vTe3);
                return A.intl.string(A.t["8D8Rsb"]);
              })(),
              color: "danger",
              action: () => {
                (0, l.w)(n, function () {
                  I
                    ? o.Z.deleteMessage(
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
          return A;
        },
        UT: function () {
          return E;
        },
        _Z: function () {
          return v;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return _;
        },
        s3: function () {
          return T;
        },
        uA: function () {
          return p;
        },
        xh: function () {
          return h;
        },
      }),
        e(47120);
      var i = e(524437),
        r = e(675478),
        a = e(592125),
        u = e(496675),
        o = e(709054),
        l = e(853856),
        d = e(231338);
      function c() {
        let n = l.Z.getFavoriteChannels(),
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
        if (!l.Z.isFavorite(n))
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
        let t = l.Z.getFavorite(n);
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
        if (!!l.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function A(n) {
        let t = o.default.fromTimestamp(Date.now());
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
      function h(n) {
        _(n);
      }
      function T(n) {
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
      function p(n, t) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function v() {
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
          return h;
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
        o = e(914010);
      e(709054);
      var l = e(853856),
        d = e(362658),
        c = e(434065),
        s = e(981631);
      function f(n) {
        let { favoritesEnabled: t, hasStaffPrivileges: e } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, a.e7)([l.Z], () => l.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !i && (!r || e);
      }
      function _(n) {
        return (0, a.e7)([l.Z], () => l.Z.getFavorite(n));
      }
      function E() {
        return (0, a.e7)([u.ZP], () => u.ZP.getChannels(s.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function A() {
        return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === s.I_8;
      }
      function h() {
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
      var i = e(905837),
        r = e(731965);
      let a = (0, i.ZP)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return g;
        },
        Ef: function () {
          return m;
        },
        HO: function () {
          return O;
        },
        NZ: function () {
          return S;
        },
        Pq: function () {
          return y;
        },
        Q1: function () {
          return p;
        },
        RK: function () {
          return C;
        },
        _0: function () {
          return v;
        },
        hz: function () {
          return N;
        },
        yi: function () {
          return I;
        },
      });
      var i = e(512722),
        r = e.n(i),
        a = e(149765),
        u = e(544891),
        o = e(493683);
      e(749210);
      var l = e(911969),
        d = e(367907),
        c = e(944486),
        s = e(979651),
        f = e(700785),
        _ = e(922482),
        E = e(192079),
        A = e(706058),
        h = e(590415),
        T = e(981631);
      function p(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(T.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function v(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function C(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let a = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, h.gf)(a) === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(T.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function I(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function g(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function N(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          g(t, n.id, !0),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function y(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let u = n.permissionOverwrites[i],
          d = { id: i, type: l.BN.ROLE, allow: f.Hn, deny: f.Hn, ...u };
        e
          ? ((d.allow = a.IH(d.allow, t)), (d.deny = a.Od(d.deny, t)))
          : ((d.allow = a.Od(d.allow, t)), (d.deny = a.IH(d.deny, t))),
          o.Z.updatePermissionOverwrite(n.id, d);
      }
      async function O(n, t, e, i) {
        if ("" === t) return;
        c.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let r = await (0, A.me)(n.id, t, e, i);
        return C(n, !1, !0), r;
      }
      async function m(n, t, e) {
        if ("" !== t) return await (0, A.Dk)(n.id, t, e);
      }
      async function S(n) {
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
        a = e(700785),
        u = e(427679),
        o = e(157925),
        l = e(981631),
        d = e(71080),
        c = e(388032);
      function s(n, t, e, i) {
        let a = t[0],
          u = r.ZP.getName(n, e, a),
          o = null != i ? i : t.length;
        return 1 === o && null != a
          ? u
          : null == a
            ? c.intl.formatToPlainString(c.t.chmM9P, { count: o })
            : c.intl.formatToPlainString(c.t.GhkJ29, { name: u, count: o - 1 });
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
          request_to_speak_state: a.Uu(l.Plq.REQUEST_TO_SPEAK, n)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
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
          return o;
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
          })
        ).body;
      }
      async function u(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function o(n) {
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
//# sourceMappingURL=fa0e34fe42762d797b94.js.map
