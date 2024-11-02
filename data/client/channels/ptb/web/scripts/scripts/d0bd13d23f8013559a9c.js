"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4030"],
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
    323597: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        u = e(787014),
        l = e(904245),
        o = e(787263),
        c = e(660189),
        f = e(144140),
        d = e(314897),
        s = e(496675),
        E = e(709054),
        _ = e(981631),
        g = e(388032);
      function v(n) {
        let t = n.isForumPost(),
          e = (0, r.e7)([d.default], () => n.isOwner(d.default.getId()), [n]),
          { canManageChannel: v, canAccessChannel: A } = (0, r.cj)(
            [s.Z],
            () => ({
              canAccessChannel: s.Z.can(n.accessPermissions, n),
              canManageChannel: s.Z.can(
                n.isThread() ? _.Plq.MANAGE_THREADS : _.Plq.MANAGE_CHANNELS,
                n,
              ),
            }),
            [n],
          ),
          p = (0, r.e7)(
            [f.Z],
            () => {
              var t;
              return null !== (t = f.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id],
          ),
          { firstMessage: C } = (0, r.e7)([c.Z], () => c.Z.getMessage(n.id), [
            n.id,
          ]),
          O = t && (v || (e && p < 1)),
          h = t && e && !v && p > 0 && null != C;
        return A && (v || O || h)
          ? (0, i.jsx)(a.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (n.type === _.d4z.GUILD_CATEGORY)
                  return g.intl.string(g.t.ifbXnJ);
                if (n.isForumPost())
                  return O
                    ? g.intl.string(g.t.nEOg1N)
                    : g.intl.string(g.t.xwMqDw);
                if (n.isThread()) return g.intl.string(g.t.H7vTe3);
                return g.intl.string(g.t["8D8Rsb"]);
              })(),
              color: "danger",
              action: () => {
                (0, o.w)(n, function () {
                  h
                    ? l.Z.deleteMessage(
                        n.id,
                        E.default.castChannelIdAsMessageId(n.id),
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
          return O;
        },
        k: function () {
          return p;
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
        c = e(87051),
        f = e(496729),
        d = e(777861),
        s = e(9156),
        E = e(621600),
        _ = e(933557),
        g = e(981631),
        v = e(969943),
        A = e(388032);
      let p = () => [
          { value: v.Oe.MINUTES_15, label: A.intl.string(A.t["8ot6go"]) },
          { value: v.Oe.HOURS_1, label: A.intl.string(A.t.UMWBZm) },
          { value: v.Oe.HOURS_3, label: A.intl.string(A.t.QmYWtr) },
          { value: v.Oe.HOURS_8, label: A.intl.string(A.t.EpAXPD) },
          { value: v.Oe.HOURS_24, label: A.intl.string(A.t["755t4u"]) },
          { value: v.Oe.ALWAYS, label: A.intl.string(A.t.r3LawM) },
        ],
        C = (n) => {
          let t = n > 0 ? a()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function O(n, t) {
        let [e, r] = (0, u.Wu)([s.ZP], () => [
            s.ZP.isChannelMuted(n.guild_id, n.id),
            s.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          a = (0, d.U)(r),
          v = (0, _.ZP)(n, !0);
        function O(t) {
          t && n.type === g.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            c.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              E.UE.muted(t),
            );
        }
        let h = A.intl.string(A.t.tbeRRE),
          S = A.intl.string(A.t.OYefmZ);
        switch (n.type) {
          case g.d4z.GUILD_CATEGORY:
            (h = A.intl.string(A.t.pNMCg4)), (S = A.intl.string(A.t.olaBeH));
            break;
          case g.d4z.GROUP_DM:
            (h = A.intl.string(A.t.LO3kaG)), (S = A.intl.string(A.t["s5/5fn"]));
            break;
          case g.d4z.DM:
            (h = A.intl.format(A.t.byjuJi, { name: v })),
              (S = A.intl.format(A.t["eC+9rq"], { name: v }));
            break;
          default:
            (h = A.intl.string(A.t.tbeRRE)), (S = A.intl.string(A.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(l.MenuItem, {
              id: "unmute-channel",
              label: S,
              subtext: a,
              action: () => O(!1),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "mute-channel",
              label: h,
              action: () => {
                O(!0),
                  (0, f.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: p().map((e) => {
                let { value: r, label: a } = e;
                return (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "".concat(r),
                    label: a,
                    action: () =>
                      (function (e) {
                        n.type === g.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                        let i = C(e);
                        c.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          E.ZB.Muted,
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
          return g;
        },
        UT: function () {
          return _;
        },
        _Z: function () {
          return C;
        },
        kj: function () {
          return s;
        },
        oC: function () {
          return E;
        },
        s3: function () {
          return A;
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
        r = e(675478),
        a = e(592125),
        u = e(496675),
        l = e(709054),
        o = e(853856),
        c = e(231338);
      function f() {
        let n = o.Z.getFavoriteChannels(),
          t = 1;
        for (let e in n) t = Math.max(t, n[e].order);
        return t + 1;
      }
      function d(n) {
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
            if (!u.Z.can(c.Pl.VIEW_CHANNEL, r)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function s(n, t) {
        if (!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: f(),
                parentId: null != t ? t : "0",
              })),
                d(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function E(n) {
        let t = o.Z.getFavorite(n);
        if (null != t)
          r.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              d(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(n, t) {
        if (!!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function g(n) {
        let t = l.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: f(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function v(n) {
        E(n);
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
      function p(n, t) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function C() {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    916069: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(914010),
        a = e(981631);
      function u() {
        return (0, i.e7)([r.Z], () => r.Z.getGuildId()) === a.I_8;
      }
    },
    423589: function (n, t, e) {
      e.d(t, {
        Mn: function () {
          return v;
        },
        OD: function () {
          return g;
        },
        W9: function () {
          return E;
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
        c = e(981631),
        f = e(969943),
        d = e(526761),
        s = e(388032);
      function E() {
        return [
          { label: s.intl.string(s.t["8ot6go"]), value: f.Oe.MINUTES_15 },
          { label: s.intl.string(s.t.UMWBZm), value: f.Oe.HOURS_1 },
          { label: s.intl.string(s.t.QmYWtr), value: f.Oe.HOURS_3 },
          { label: s.intl.string(s.t.EpAXPD), value: f.Oe.HOURS_8 },
          { label: s.intl.string(s.t["755t4u"]), value: f.Oe.HOURS_24 },
          { label: s.intl.string(s.t.r3LawM), value: f.Oe.ALWAYS },
        ];
      }
      let _ = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function g(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
        return l.default.keys(n).filter((e) => {
          var i, a;
          let l = n[e].message_notifications !== c.bL.NULL,
            o =
              u.yE(
                null !== (i = n[e].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              u.yE(
                null !== (a = n[e].flags) && void 0 !== a ? a : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && o) ||
            (!t.ignoreNotificationSetting && l) ||
            (!t.ignoreMute && (0, r.m$)(n[e]))
          );
        });
      }
      function v(n) {
        let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: n }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (n, t, e) {
      e.d(t, {
        Q4: function () {
          return a;
        },
        YF: function () {
          return u;
        },
        pq: function () {
          return l;
        },
      });
      var i = e(630388),
        r = e(526761);
      function a(n, t) {
        var e;
        return i.pj(
          ((e = n),
          i.M1(e, r.vc.UNREADS_ALL_MESSAGES, r.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let u = (n) =>
        i.M1(n, r.ic.UNREADS_ALL_MESSAGES, r.ic.UNREADS_ONLY_MENTIONS);
      function l(n, t) {
        return i.pj(u(n), t);
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
          return d;
        },
        s: function () {
          return f;
        },
      });
      var i = e(200651),
        r = e(704215),
        a = e(481060),
        u = e(570140),
        l = e(605236),
        o = e(592125),
        c = e(305587);
      function f(n) {
        let { channelId: t, location: e } = n,
          i = o.Z.getChannel(t),
          a = (0, l.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !a)
          (0, c.Xs)(e) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function d() {
        (0, a.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
  },
]);
//# sourceMappingURL=d0bd13d23f8013559a9c.js.map
