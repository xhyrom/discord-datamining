"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30045"],
  {
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      });
      var i = n(735250);
      n(470079);
      var a = n(913527),
        l = n.n(a),
        u = n(442837),
        o = n(481060),
        r = n(92114),
        s = n(776568),
        c = n(777861),
        d = n(9156),
        _ = n(621600),
        f = n(689938);
      function M(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: a, muteConfig: M } = (0, u.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          S = (0, c.U)(M);
        return null == n
          ? null
          : a
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
                children: (0, s.k)().map((e) => {
                  let { value: a, label: u } = e;
                  return (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: "".concat(a),
                      label: u,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? l()().add(e, "second").toISOString() : null;
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
                        })(a),
                    },
                    a,
                  );
                }),
              });
      }
    },
    518756: function (e, t, n) {
      n(47120);
      var i = n(470079),
        a = n(442837),
        l = n(357156),
        u = n(984933),
        o = n(430824),
        r = n(496675),
        s = n(981631);
      t.Z = (e, t) => {
        let n = (0, a.e7)([o.Z], () => o.Z.getGuild(e), [e]),
          { canCreateGuildEvent: c } = (0, l.X)(n),
          d = (0, a.e7)([u.ZP], () => u.ZP.getChannels(e)[u.Zb], [e]),
          _ = i.useMemo(
            () =>
              null != t
                ? d.filter((e) => {
                    let { channel: n } = e;
                    return n.type === t;
                  })
                : d,
            [d, t],
          );
        return (0, a.e7)(
          [r.Z],
          () => {
            if (r.Z.can(s.Plq.ADMINISTRATOR, n) || c) return !0;
            for (let { channel: e } of _) {
              let { canCreateGuildEvent: t } = (0, l.G)(e);
              if (t) return !0;
            }
            return !1;
          },
          [_, n, c],
        );
      };
    },
    334877: function (e, t, n) {
      n.d(t, {
        l: function () {
          return l;
        },
      });
      var i = n(652874),
        a = n(731965);
      let l = (0, i.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, a.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var i = n(481060),
        a = n(40851),
        l = n(334877),
        u = n(981631);
      let o = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, a.bp)() === u.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: o,
          contextKey: e,
          onCloseRequest: () => {
            l.l.getState().canCloseModal && (0, i.closeModal)(o, e);
          },
        };
      };
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return U;
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
        a = n(798140),
        l = n(9156),
        u = n(630388),
        o = n(709054),
        r = n(312400),
        s = n(981631),
        c = n(969943),
        d = n(526761),
        _ = n(689938);
      function f() {
        return [
          {
            label: _.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: c.Oe.MINUTES_15,
          },
          { label: _.Z.Messages.MUTE_DURATION_1_HOUR, value: c.Oe.HOURS_1 },
          { label: _.Z.Messages.MUTE_DURATION_3_HOURS, value: c.Oe.HOURS_3 },
          { label: _.Z.Messages.MUTE_DURATION_8_HOURS, value: c.Oe.HOURS_8 },
          { label: _.Z.Messages.MUTE_DURATION_24_HOURS, value: c.Oe.HOURS_24 },
          { label: _.Z.Messages.MUTE_DURATION_ALWAYS, value: c.Oe.ALWAYS },
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
          var i, l;
          let o = e[n].message_notifications !== s.bL.NULL,
            r =
              u.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              u.yE(
                null !== (l = e[n].flags) && void 0 !== l ? l : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && r) ||
            (!t.ignoreNotificationSetting && o) ||
            (!t.ignoreMute && (0, a.m$)(e[n]))
          );
        });
      }
      function U(e) {
        let t = (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
        return (
          r.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return l;
        },
        YF: function () {
          return u;
        },
        pq: function () {
          return o;
        },
      });
      var i = n(630388),
        a = n(526761);
      function l(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, a.vc.UNREADS_ALL_MESSAGES, a.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let u = (e) =>
        i.M1(e, a.ic.UNREADS_ALL_MESSAGES, a.ic.UNREADS_ONLY_MENTIONS);
      function o(e, t) {
        return i.pj(u(e), t);
      }
    },
    591822: function (e, t, n) {
      e.exports = {};
    },
    936124: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    465094: function (e, t, n) {
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
    100535: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
  },
]);
//# sourceMappingURL=c7abd9ce5825faddb47b.js.map
