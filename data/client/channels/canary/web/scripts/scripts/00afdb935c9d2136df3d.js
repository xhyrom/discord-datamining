"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88578"],
  {
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(913527),
        u = n.n(l),
        a = n(442837),
        r = n(481060),
        o = n(87051),
        c = n(776568),
        d = n(777861),
        f = n(9156),
        s = n(621600),
        _ = n(388032);
      function g(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: l, muteConfig: g } = (0, a.cj)(
            [f.ZP],
            () => ({
              muted: null != n ? f.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? f.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          S = (0, d.U)(g);
        return null == n
          ? null
          : l
            ? (0, i.jsx)(r.MenuItem, {
                id: "unmute-guild",
                label: _.intl.string(_.t.De0BTE),
                subtext: S,
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    s.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "mute-guild",
                label: _.intl.string(_.t.vRzp7O),
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    s.ZB.Muted,
                  ),
                children: (0, c.k)().map((e) => {
                  let { value: l, label: a } = e;
                  return (0, i.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(l),
                      label: a,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? u()().add(e, "second").toISOString() : null;
                          o.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            s.ZB.Muted,
                            t,
                          );
                        })(l),
                    },
                    l,
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
        l = n(357156),
        u = n(984933),
        a = n(430824),
        r = n(496675),
        o = n(981631);
      function c(e, t) {
        return (0, i.e7)(
          [a.Z, u.ZP, r.Z],
          () => {
            let n = a.Z.getGuild(e);
            if (
              r.Z.can(o.Plq.ADMINISTRATOR, n) ||
              r.Z.can(o.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of u.ZP.getChannels(e)[u.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, l.Ob)(n);
                if (r.Z.can(e, n)) return !0;
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
          return u;
        },
      });
      var i = n(903797),
        l = n(731965);
      let u = (0, i.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, l.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var i = n(481060),
        l = n(40851),
        u = n(334877),
        a = n(981631);
      let r = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, l.bp)() === a.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: r,
          contextKey: e,
          onCloseRequest: () => {
            u.l.getState().canCloseModal && (0, i.closeModal)(r, e);
          },
        };
      };
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return p;
        },
        OD: function () {
          return S;
        },
        W9: function () {
          return _;
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
        c = n(981631),
        d = n(969943),
        f = n(526761),
        s = n(388032);
      function _() {
        return [
          { label: s.intl.string(s.t["8ot6go"]), value: d.Oe.MINUTES_15 },
          { label: s.intl.string(s.t.UMWBZm), value: d.Oe.HOURS_1 },
          { label: s.intl.string(s.t.QmYWtr), value: d.Oe.HOURS_3 },
          { label: s.intl.string(s.t.EpAXPD), value: d.Oe.HOURS_8 },
          { label: s.intl.string(s.t["755t4u"]), value: d.Oe.HOURS_24 },
          { label: s.intl.string(s.t.r3LawM), value: d.Oe.ALWAYS },
        ];
      }
      let g = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return r.default.keys(e).filter((n) => {
          var i, u;
          let r = e[n].message_notifications !== c.bL.NULL,
            o =
              a.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                f.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (u = e[n].flags) && void 0 !== u ? u : 0,
                f.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && o) ||
            (!t.ignoreNotificationSetting && r) ||
            (!t.ignoreMute && (0, l.m$)(e[n]))
          );
        });
      }
      function p(e) {
        let t = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
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
      function u(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, l.vc.UNREADS_ALL_MESSAGES, l.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let a = (e) =>
        i.M1(e, l.ic.UNREADS_ALL_MESSAGES, l.ic.UNREADS_ONLY_MENTIONS);
      function r(e, t) {
        return i.pj(a(e), t);
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
//# sourceMappingURL=00afdb935c9d2136df3d.js.map
