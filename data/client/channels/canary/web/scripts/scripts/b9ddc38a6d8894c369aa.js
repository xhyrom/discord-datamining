"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98350"],
  {
    211739: function (n, t, e) {
      e.d(t, {
        N5: function () {
          return l;
        },
        c4: function () {
          return a;
        },
        lc: function () {
          return u;
        },
        mJ: function () {
          return r;
        },
      });
      var i = e(570140);
      function a(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function r(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: n });
      }
      function l(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: n });
      }
      function u(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: n });
      }
    },
    323597: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = e(200651);
      e(192379);
      var a = e(442837),
        r = e(481060),
        l = e(787014),
        u = e(904245),
        o = e(787263),
        c = e(660189),
        d = e(144140),
        s = e(314897),
        f = e(496675),
        E = e(709054),
        g = e(981631),
        _ = e(388032);
      function v(n) {
        let t = n.isForumPost(),
          e = (0, a.e7)([s.default], () => n.isOwner(s.default.getId()), [n]),
          { canManageChannel: v, canAccessChannel: C } = (0, a.cj)(
            [f.Z],
            () => ({
              canAccessChannel: f.Z.can(n.accessPermissions, n),
              canManageChannel: f.Z.can(
                n.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS,
                n,
              ),
            }),
            [n],
          ),
          p = (0, a.e7)(
            [d.Z],
            () => {
              var t;
              return null !== (t = d.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id],
          ),
          { firstMessage: h } = (0, a.e7)([c.Z], () => c.Z.getMessage(n.id), [
            n.id,
          ]),
          A = t && (v || (e && p < 1)),
          O = t && e && !v && p > 0 && null != h;
        return C && (v || A || O)
          ? (0, i.jsx)(r.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (n.type === g.d4z.GUILD_CATEGORY)
                  return _.intl.string(_.t.ifbXnJ);
                if (n.isForumPost())
                  return A
                    ? _.intl.string(_.t.nEOg1N)
                    : _.intl.string(_.t.xwMqDw);
                if (n.isThread()) return _.intl.string(_.t.H7vTe3);
                return _.intl.string(_.t["8D8Rsb"]);
              })(),
              color: "danger",
              action: () => {
                (0, o.w)(n, function () {
                  O
                    ? u.Z.deleteMessage(
                        n.id,
                        E.default.castChannelIdAsMessageId(n.id),
                      )
                    : l.ZP.deleteChannel(n.id);
                });
              },
            })
          : null;
      }
    },
    776568: function (n, t, e) {
      e.d(t, {
        ZP: function () {
          return A;
        },
        k: function () {
          return p;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var a = e(913527),
        r = e.n(a),
        l = e(442837),
        u = e(481060),
        o = e(211739),
        c = e(87051),
        d = e(496729),
        s = e(777861),
        f = e(9156),
        E = e(621600),
        g = e(933557),
        _ = e(981631),
        v = e(969943),
        C = e(388032);
      let p = () => [
          { value: v.Oe.MINUTES_15, label: C.intl.string(C.t["8ot6go"]) },
          { value: v.Oe.HOURS_1, label: C.intl.string(C.t.UMWBZm) },
          { value: v.Oe.HOURS_3, label: C.intl.string(C.t.QmYWtr) },
          { value: v.Oe.HOURS_8, label: C.intl.string(C.t.EpAXPD) },
          { value: v.Oe.HOURS_24, label: C.intl.string(C.t["755t4u"]) },
          { value: v.Oe.ALWAYS, label: C.intl.string(C.t.r3LawM) },
        ],
        h = (n) => {
          let t = n > 0 ? r()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function A(n, t) {
        let [e, a] = (0, l.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          r = (0, s.U)(a),
          v = (0, g.ZP)(n, !0);
        function A(t) {
          t && n.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            c.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              E.UE.muted(t),
            );
        }
        let O = C.intl.string(C.t.tbeRRE),
          R = C.intl.string(C.t.OYefmZ);
        switch (n.type) {
          case _.d4z.GUILD_CATEGORY:
            (O = C.intl.string(C.t.pNMCg4)), (R = C.intl.string(C.t.olaBeH));
            break;
          case _.d4z.GROUP_DM:
            (O = C.intl.string(C.t.LO3kaG)), (R = C.intl.string(C.t["s5/5fn"]));
            break;
          case _.d4z.DM:
            (O = C.intl.format(C.t.byjuJi, { name: v })),
              (R = C.intl.format(C.t["eC+9rq"], { name: v }));
            break;
          default:
            (O = C.intl.string(C.t.tbeRRE)), (R = C.intl.string(C.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(u.MenuItem, {
              id: "unmute-channel",
              label: R,
              subtext: r,
              action: () => A(!1),
            })
          : (0, i.jsx)(u.MenuItem, {
              id: "mute-channel",
              label: O,
              action: () => {
                A(!0),
                  (0, d.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: p().map((e) => {
                let { value: a, label: r } = e;
                return (0, i.jsx)(
                  u.MenuItem,
                  {
                    id: "".concat(a),
                    label: r,
                    action: () =>
                      (function (e) {
                        n.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                        let i = h(e);
                        c.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          E.ZB.Muted,
                          t,
                        );
                      })(a),
                  },
                  a,
                );
              }),
            });
      }
    },
    787263: function (n, t, e) {
      e.d(t, {
        w: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var a = e(481060);
      function r(n, t) {
        return (0, a.openModalLazy)(async () => {
          let { default: a } = await e.e("79521").then(e.bind(e, 207540));
          return (e) =>
            (0, i.jsx)(a, {
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
          return _;
        },
        UT: function () {
          return g;
        },
        _Z: function () {
          return h;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return E;
        },
        s3: function () {
          return C;
        },
        uA: function () {
          return p;
        },
        xh: function () {
          return v;
        },
      }),
        e(47120);
      var i = e(524437),
        a = e(675478),
        r = e(592125),
        l = e(496675),
        u = e(709054),
        o = e(853856),
        c = e(231338);
      function d() {
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
          let a = r.Z.getChannel(t);
          if (null == a) {
            delete n[t];
            continue;
          }
          if (!a.isPrivate()) {
            if (!l.Z.can(c.Pl.VIEW_CHANNEL, a)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function f(n, t) {
        if (!o.Z.isFavorite(n))
          a.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : "0",
              })),
                s(e.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION,
          );
      }
      function E(n) {
        let t = o.Z.getFavorite(n);
        if (null != t)
          a.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              s(e.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function g(n, t) {
        if (!!o.Z.isFavorite(n))
          a.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            a.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(n) {
        let t = u.default.fromTimestamp(Date.now());
        a.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: d(),
              parentId: "0",
            });
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function v(n) {
        E(n);
      }
      function C(n) {
        a.hW.updateAsync(
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
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function p(n, t) {
        a.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          a.fy.FREQUENT_USER_ACTION,
        );
      }
      function h() {
        a.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          a.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    916069: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = e(442837),
        a = e(914010),
        r = e(981631);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.getGuildId()) === r.I_8;
      }
    },
    423589: function (n, t, e) {
      e.d(t, {
        Mn: function () {
          return v;
        },
        OD: function () {
          return _;
        },
        W9: function () {
          return E;
        },
      }),
        e(47120),
        e(789020);
      var i = e(442837),
        a = e(798140),
        r = e(9156),
        l = e(630388),
        u = e(709054),
        o = e(312400),
        c = e(981631),
        d = e(969943),
        s = e(526761),
        f = e(388032);
      function E() {
        return [
          { label: f.intl.string(f.t["8ot6go"]), value: d.Oe.MINUTES_15 },
          { label: f.intl.string(f.t.UMWBZm), value: d.Oe.HOURS_1 },
          { label: f.intl.string(f.t.QmYWtr), value: d.Oe.HOURS_3 },
          { label: f.intl.string(f.t.EpAXPD), value: d.Oe.HOURS_8 },
          { label: f.intl.string(f.t["755t4u"]), value: d.Oe.HOURS_24 },
          { label: f.intl.string(f.t.r3LawM), value: d.Oe.ALWAYS },
        ];
      }
      let g = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function _(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return u.default.keys(n).filter((e) => {
          var i, r;
          let u = n[e].message_notifications !== c.bL.NULL,
            o =
              l.yE(
                null !== (i = n[e].flags) && void 0 !== i ? i : 0,
                s.ic.UNREADS_ALL_MESSAGES,
              ) ||
              l.yE(
                null !== (r = n[e].flags) && void 0 !== r ? r : 0,
                s.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && o) ||
            (!t.ignoreNotificationSetting && u) ||
            (!t.ignoreMute && (0, a.m$)(n[e]))
          );
        });
      }
      function v(n) {
        let t = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: n }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    305587: function (n, t, e) {
      e.d(t, {
        Xs: function () {
          return a;
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
      function a(n) {
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
          return d;
        },
      });
      var i = e(200651),
        a = e(704215),
        r = e(481060),
        l = e(570140),
        u = e(605236),
        o = e(592125),
        c = e(305587);
      function d(n) {
        let { channelId: t, location: e } = n,
          i = o.Z.getChannel(t),
          r = (0, u.un)(a.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !r)
          (0, c.Xs)(e) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function s() {
        (0, r.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
  },
]);
//# sourceMappingURL=b9ddc38a6d8894c369aa.js.map
