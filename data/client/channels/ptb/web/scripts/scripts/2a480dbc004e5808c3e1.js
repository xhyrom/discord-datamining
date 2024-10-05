"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88578"],
  {
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      });
      var i = n(735250);
      n(470079);
      var u = n(913527),
        a = n.n(u),
        l = n(442837),
        o = n(481060),
        r = n(87051),
        c = n(776568),
        s = n(777861),
        d = n(9156),
        _ = n(621600),
        f = n(689938);
      function M(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: u, muteConfig: M } = (0, l.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          S = (0, s.U)(M);
        return null == n
          ? null
          : u
            ? (0, i.jsx)(o.MenuItem, {
                id: "unmute-guild",
                label: f.Z.Messages.UNMUTE_SERVER,
                subtext: S,
                action: () =>
                  r.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    _.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(o.MenuItem, {
                id: "mute-guild",
                label: f.Z.Messages.MUTE_SERVER,
                action: () =>
                  r.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    _.ZB.Muted,
                  ),
                children: (0, c.k)().map((e) => {
                  let { value: u, label: l } = e;
                  return (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: "".concat(u),
                      label: l,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? a()().add(e, "second").toISOString() : null;
                          r.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            _.ZB.Muted,
                            t,
                          );
                        })(u),
                    },
                    u,
                  );
                }),
              });
      }
    },
    518756: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(442837),
        u = n(357156),
        a = n(984933),
        l = n(430824),
        o = n(496675),
        r = n(981631);
      function c(e, t) {
        return (0, i.e7)(
          [l.Z, a.ZP, o.Z],
          () => {
            let n = l.Z.getGuild(e);
            if (
              o.Z.can(r.Plq.ADMINISTRATOR, n) ||
              o.Z.can(r.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of a.ZP.getChannels(e)[a.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, u.Ob)(n);
                if (o.Z.can(e, n)) return !0;
              }
            return !1;
          },
          [e, t],
        );
      }
    },
    334877: function (e, t, n) {
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var i = n(652874),
        u = n(731965);
      let a = (0, i.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, u.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var i = n(481060),
        u = n(40851),
        a = n(334877),
        l = n(981631);
      let o = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, u.bp)() === l.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: o,
          contextKey: e,
          onCloseRequest: () => {
            a.l.getState().canCloseModal && (0, i.closeModal)(o, e);
          },
        };
      };
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return E;
        },
        OD: function () {
          return S;
        },
        W9: function () {
          return f;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        u = n(798140),
        a = n(9156),
        l = n(630388),
        o = n(709054),
        r = n(312400),
        c = n(981631),
        s = n(969943),
        d = n(526761),
        _ = n(689938);
      function f() {
        return [
          {
            label: _.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: s.Oe.MINUTES_15,
          },
          { label: _.Z.Messages.MUTE_DURATION_1_HOUR, value: s.Oe.HOURS_1 },
          { label: _.Z.Messages.MUTE_DURATION_3_HOURS, value: s.Oe.HOURS_3 },
          { label: _.Z.Messages.MUTE_DURATION_8_HOURS, value: s.Oe.HOURS_8 },
          { label: _.Z.Messages.MUTE_DURATION_24_HOURS, value: s.Oe.HOURS_24 },
          { label: _.Z.Messages.MUTE_DURATION_ALWAYS, value: s.Oe.ALWAYS },
        ];
      }
      let M = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
        return o.default.keys(e).filter((n) => {
          var i, a;
          let o = e[n].message_notifications !== c.bL.NULL,
            r =
              l.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              l.yE(
                null !== (a = e[n].flags) && void 0 !== a ? a : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && r) ||
            (!t.ignoreNotificationSetting && o) ||
            (!t.ignoreMute && (0, u.m$)(e[n]))
          );
        });
      }
      function E(e) {
        let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
        return (
          r.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return a;
        },
        YF: function () {
          return l;
        },
        pq: function () {
          return o;
        },
      });
      var i = n(630388),
        u = n(526761);
      function a(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, u.vc.UNREADS_ALL_MESSAGES, u.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let l = (e) =>
        i.M1(e, u.ic.UNREADS_ALL_MESSAGES, u.ic.UNREADS_ONLY_MENTIONS);
      function o(e, t) {
        return i.pj(l(e), t);
      }
    },
    214201: function (e, t, n) {
      e.exports = {};
    },
    745974: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    100210: function (e, t, n) {
      e.exports = {
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
    507815: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
  },
]);
//# sourceMappingURL=2a480dbc004e5808c3e1.js.map
