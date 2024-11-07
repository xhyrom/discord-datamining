"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82719"],
  {
    776568: function (t, e, n) {
      n.d(e, {
        ZP: function () {
          return E;
        },
        k: function () {
          return S;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(913527),
        u = n.n(l),
        a = n(442837),
        r = n(481060),
        o = n(211739),
        d = n(87051),
        c = n(496729),
        s = n(777861),
        f = n(9156),
        g = n(621600),
        _ = n(933557),
        b = n(981631),
        M = n(969943),
        O = n(388032);
      let S = () => [
          { value: M.Oe.MINUTES_15, label: O.intl.string(O.t["8ot6go"]) },
          { value: M.Oe.HOURS_1, label: O.intl.string(O.t.UMWBZm) },
          { value: M.Oe.HOURS_3, label: O.intl.string(O.t.QmYWtr) },
          { value: M.Oe.HOURS_8, label: O.intl.string(O.t.EpAXPD) },
          { value: M.Oe.HOURS_24, label: O.intl.string(O.t["755t4u"]) },
          { value: M.Oe.ALWAYS, label: O.intl.string(O.t.r3LawM) },
        ],
        m = (t) => {
          let e = t > 0 ? u()().add(t, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: t, end_time: e },
          };
        };
      function E(t, e) {
        let [n, l] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(t.guild_id, t.id),
            f.ZP.getChannelMuteConfig(t.guild_id, t.id),
          ]),
          u = (0, s.U)(l),
          M = (0, _.ZP)(t, !0);
        function E(e) {
          e && t.type === b.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            d.Z.updateChannelOverrideSettings(
              t.guild_id,
              t.id,
              { muted: e },
              g.UE.muted(e),
            );
        }
        let p = O.intl.string(O.t.tbeRRE),
          v = O.intl.string(O.t.OYefmZ);
        switch (t.type) {
          case b.d4z.GUILD_CATEGORY:
            (p = O.intl.string(O.t.pNMCg4)), (v = O.intl.string(O.t.olaBeH));
            break;
          case b.d4z.GROUP_DM:
            (p = O.intl.string(O.t.LO3kaG)), (v = O.intl.string(O.t["s5/5fn"]));
            break;
          case b.d4z.DM:
            (p = O.intl.format(O.t.byjuJi, { name: M })),
              (v = O.intl.format(O.t["eC+9rq"], { name: M }));
            break;
          default:
            (p = O.intl.string(O.t.tbeRRE)), (v = O.intl.string(O.t.OYefmZ));
        }
        return n
          ? (0, i.jsx)(r.MenuItem, {
              id: "unmute-channel",
              label: v,
              subtext: u,
              action: () => E(!1),
            })
          : (0, i.jsx)(r.MenuItem, {
              id: "mute-channel",
              label: p,
              action: () => {
                E(!0),
                  (0, c.s)({
                    channelId: t.id,
                    location: "channel_context_menu",
                  });
              },
              children: S().map((n) => {
                let { value: l, label: u } = n;
                return (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "".concat(l),
                    label: u,
                    action: () =>
                      (function (n) {
                        t.type === b.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                        let i = m(n);
                        d.Z.updateChannelOverrideSettings(
                          t.guild_id,
                          t.id,
                          i,
                          g.ZB.Muted,
                          e,
                        );
                      })(l),
                  },
                  l,
                );
              }),
            });
      }
    },
    858822: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(913527),
        u = n.n(l),
        a = n(442837),
        r = n(481060),
        o = n(87051),
        d = n(776568),
        c = n(777861),
        s = n(9156),
        f = n(621600),
        g = n(388032);
      function _(t, e) {
        let n = null == t ? void 0 : t.id,
          { muted: l, muteConfig: _ } = (0, a.cj)(
            [s.ZP],
            () => ({
              muted: null != n ? s.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? s.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          b = (0, c.U)(_);
        return null == n
          ? null
          : l
            ? (0, i.jsx)(r.MenuItem, {
                id: "unmute-guild",
                label: g.intl.string(g.t.De0BTE),
                subtext: b,
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "mute-guild",
                label: g.intl.string(g.t.vRzp7O),
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.ZB.Muted,
                  ),
                children: (0, d.k)().map((t) => {
                  let { value: l, label: a } = t;
                  return (0, i.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(l),
                      label: a,
                      action: () =>
                        (function (t) {
                          if (null == n) return;
                          let i =
                            t > 0 ? u()().add(t, "second").toISOString() : null;
                          o.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: t,
                                end_time: i,
                              },
                            },
                            f.ZB.Muted,
                            e,
                          );
                        })(l),
                    },
                    l,
                  );
                }),
              });
      }
    },
    518756: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(442837),
        l = n(357156),
        u = n(984933),
        a = n(430824),
        r = n(496675),
        o = n(981631);
      function d(t, e) {
        return (0, i.e7)(
          [a.Z, u.ZP, r.Z],
          () => {
            let n = a.Z.getGuild(t);
            if (
              r.Z.can(o.Plq.ADMINISTRATOR, n) ||
              r.Z.can(o.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of u.ZP.getChannels(t)[u.Zb])
              if (null == e || n.type === e) {
                let [t] = (0, l.Ob)(n);
                if (r.Z.can(t, n)) return !0;
              }
            return !1;
          },
          [t, e],
        );
      }
    },
    334877: function (t, e, n) {
      n.d(e, {
        l: function () {
          return u;
        },
      });
      var i = n(903797),
        l = n(731965);
      let u = (0, i.Z)((t) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(e) {
          (0, l.j)(() => t({ canCloseModal: e }));
        },
      }));
    },
    576749: function (t, e, n) {
      var i = n(481060),
        l = n(40851),
        u = n(334877),
        a = n(981631);
      let r = "guild-event-modal";
      e.Z = () => {
        let t =
          (0, l.bp)() === a.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: r,
          contextKey: t,
          onCloseRequest: () => {
            u.l.getState().canCloseModal && (0, i.closeModal)(r, t);
          },
        };
      };
    },
    423589: function (t, e, n) {
      n.d(e, {
        Mn: function () {
          return M;
        },
        OD: function () {
          return b;
        },
        W9: function () {
          return g;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        l = n(798140),
        u = n(9156),
        a = n(630388),
        r = n(709054),
        o = n(312400),
        d = n(981631),
        c = n(969943),
        s = n(526761),
        f = n(388032);
      function g() {
        return [
          { label: f.intl.string(f.t["8ot6go"]), value: c.Oe.MINUTES_15 },
          { label: f.intl.string(f.t.UMWBZm), value: c.Oe.HOURS_1 },
          { label: f.intl.string(f.t.QmYWtr), value: c.Oe.HOURS_3 },
          { label: f.intl.string(f.t.EpAXPD), value: c.Oe.HOURS_8 },
          { label: f.intl.string(f.t["755t4u"]), value: c.Oe.HOURS_24 },
          { label: f.intl.string(f.t.r3LawM), value: c.Oe.ALWAYS },
        ];
      }
      let _ = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function b(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
        return r.default.keys(t).filter((n) => {
          var i, u;
          let r = t[n].message_notifications !== d.bL.NULL,
            o =
              a.yE(
                null !== (i = t[n].flags) && void 0 !== i ? i : 0,
                s.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (u = t[n].flags) && void 0 !== u ? u : 0,
                s.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!e.ignoreUnreadSetting && o) ||
            (!e.ignoreNotificationSetting && r) ||
            (!e.ignoreMute && (0, l.m$)(t[n]))
          );
        });
      }
      function M(t) {
        let e = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 })
            .enabled && e
        );
      }
    },
    113449: function (t, e, n) {
      n.d(e, {
        Q4: function () {
          return u;
        },
        YF: function () {
          return a;
        },
        pq: function () {
          return r;
        },
      });
      var i = n(630388),
        l = n(526761);
      function u(t, e) {
        var n;
        return i.pj(
          ((n = t),
          i.M1(n, l.vc.UNREADS_ALL_MESSAGES, l.vc.UNREADS_ONLY_MENTIONS)),
          e,
        );
      }
      let a = (t) =>
        i.M1(t, l.ic.UNREADS_ALL_MESSAGES, l.ic.UNREADS_ONLY_MENTIONS);
      function r(t, e) {
        return i.pj(a(t), e);
      }
    },
    759198: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        u = n.n(l),
        a = n(481060),
        r = n(507815);
      function o(t) {
        let { className: e, color: n, ...l } = t;
        return (0, i.jsx)(a.Text, {
          className: u()({ [r.text]: null == n }, e),
          color: n,
          ...l,
        });
      }
    },
    305587: function (t, e, n) {
      n.d(e, {
        Xs: function () {
          return l;
        },
      });
      let i = (0, n(818083).B)({
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
      function l(t) {
        let { enabled: e } = i.getCurrentConfig(
          { location: t },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    496729: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
        s: function () {
          return c;
        },
      });
      var i = n(200651),
        l = n(704215),
        u = n(481060),
        a = n(570140),
        r = n(605236),
        o = n(592125),
        d = n(305587);
      function c(t) {
        let { channelId: e, location: n } = t,
          i = o.Z.getChannel(e),
          u = (0, r.un)(l.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !u)
          (0, d.Xs)(n) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function s() {
        (0, u.openModalLazy)(async () => {
          let { default: t } = await n.e("87995").then(n.bind(n, 180970));
          return (e) => (0, i.jsx)(t, { ...e });
        });
      }
    },
    214201: function (t, e, n) {
      t.exports = {};
    },
    745974: function (t, e, n) {
      t.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    100210: function (t, e, n) {
      t.exports = {
        rootContainer: "rootContainer_e45ea8",
        headerContainer: "headerContainer_e45ea8",
        text: "text_e45ea8",
        newBadge: "newBadge_e45ea8",
        nitroWheel: "nitroWheel_e45ea8",
        labelContainer: "labelContainer_e45ea8",
        playButton: "playButton_e45ea8",
        mutedLabel: "mutedLabel_e45ea8",
      };
    },
    507815: function (t, e, n) {
      t.exports = { text: "text_b953a6" };
    },
  },
]);
//# sourceMappingURL=2b108bb2267dd8e2bf3b.js.map
