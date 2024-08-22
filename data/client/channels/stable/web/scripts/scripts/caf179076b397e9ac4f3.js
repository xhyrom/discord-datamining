"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41127"],
  {
    863750: function (e, t, n) {
      n(47120);
      var i,
        l = n(442837),
        a = n(570140);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let r = {
          enable_recently_active: "Enable recently active channels",
          happening_main_tab: "Enable Happening tab containing summaries",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          cozy_header: "Cozy header",
          mobile_profile_effect_debug_controls:
            "mobile_profile_effect_debug_controls",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          shop_include_unpublished: "[Shop] show unpublished items in shop",
          disable_channel_list:
            "Disable channel list -- for performance testing. You probably don't want to turn this on, lol",
          show_icymi_debug_scores: "Show ICYMI debug scores",
          only_channel_screen:
            "Down with PanelsView, rely on only ChannelScreen!",
        },
        u = {};
      class s extends (i = l.ZP.DeviceSettingsStore) {
        getUserAgnosticState() {
          return { toggleStates: u };
        }
        initialize(e) {
          for (var t in r) {
            var n, i;
            let l =
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (n = e.toggleStates) || void 0 === n
                      ? void 0
                      : n[t]) &&
              void 0 !== i &&
              i;
            u[t] = l;
          }
        }
        get(e) {
          var t;
          return null !== (t = u[e]) && void 0 !== t && t;
        }
        set(e, t) {
          return (u[e] = t), t;
        }
        all() {
          return u;
        }
        allWithDescriptions() {
          return Object.entries(u).map((e) => {
            let [t, n] = e;
            return [t, n, r[t]];
          });
        }
      }
      o(s, "displayName", "DevToolsDesignTogglesStore"),
        o(s, "persistKey", "DevToolsDesignTogglesStore"),
        (t.Z = new s(a.Z, {
          DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            u[e.toggle] = e.value;
          },
        }));
    },
    238428: function (e, t, n) {
      n(442837), n(863750);
    },
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(913527),
        a = n.n(l),
        o = n(442837),
        r = n(481060),
        u = n(92114),
        s = n(776568),
        c = n(777861),
        _ = n(9156),
        d = n(621600),
        g = n(689938);
      function f(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: l, muteConfig: f } = (0, o.cj)(
            [_.ZP],
            () => ({
              muted: null != n ? _.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? _.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          S = (0, c.U)(f);
        return null == n
          ? null
          : l
            ? (0, i.jsx)(r.MenuItem, {
                id: "unmute-guild",
                label: g.Z.Messages.UNMUTE_SERVER,
                subtext: S,
                action: () =>
                  u.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    d.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "mute-guild",
                label: g.Z.Messages.MUTE_SERVER,
                action: () =>
                  u.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    d.ZB.Muted,
                  ),
                children: (0, s.k)().map((e) => {
                  let { value: l, label: o } = e;
                  return (0, i.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(l),
                      label: o,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? a()().add(e, "second").toISOString() : null;
                          u.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            d.ZB.Muted,
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
      n(47120);
      var i = n(470079),
        l = n(442837),
        a = n(889161),
        o = n(984933),
        r = n(430824),
        u = n(496675),
        s = n(981631);
      t.Z = (e, t) => {
        let n = (0, l.e7)([r.Z], () => r.Z.getGuild(e), [e]),
          { canCreateGuildEvent: c } = (0, a.XJ)(n),
          _ = (0, l.e7)([o.ZP], () => o.ZP.getChannels(e)[o.Zb], [e]),
          d = i.useMemo(
            () =>
              null != t
                ? _.filter((e) => {
                    let { channel: n } = e;
                    return n.type === t;
                  })
                : _,
            [_, t],
          );
        return (0, l.e7)(
          [u.Z],
          () => {
            if (u.Z.can(s.Plq.ADMINISTRATOR, n) || c) return !0;
            for (let { channel: e } of d) {
              let { canCreateGuildEvent: t } = (0, a.Gw)(e);
              if (t) return !0;
            }
            return !1;
          },
          [d, n, c],
        );
      };
    },
    334877: function (e, t, n) {
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var i = n(652874),
        l = n(731965);
      let a = (0, i.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, l.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var i = n(481060),
        l = n(40851),
        a = n(334877),
        o = n(981631);
      let r = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, l.bp)() === o.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: r,
          contextKey: e,
          onCloseRequest: () => {
            a.l.getState().canCloseModal && (0, i.closeModal)(r, e);
          },
        };
      };
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return b;
        },
        OD: function () {
          return S;
        },
        W9: function () {
          return g;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        l = n(798140),
        a = n(9156),
        o = n(630388),
        r = n(709054),
        u = n(312400),
        s = n(981631),
        c = n(969943),
        _ = n(526761),
        d = n(689938);
      function g() {
        return [
          {
            label: d.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: c.Oe.MINUTES_15,
          },
          { label: d.Z.Messages.MUTE_DURATION_1_HOUR, value: c.Oe.HOURS_1 },
          { label: d.Z.Messages.MUTE_DURATION_3_HOURS, value: c.Oe.HOURS_3 },
          { label: d.Z.Messages.MUTE_DURATION_8_HOURS, value: c.Oe.HOURS_8 },
          { label: d.Z.Messages.MUTE_DURATION_24_HOURS, value: c.Oe.HOURS_24 },
          { label: d.Z.Messages.MUTE_DURATION_ALWAYS, value: c.Oe.ALWAYS },
        ];
      }
      let f = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function S(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
        return r.default.keys(e).filter((n) => {
          var i, a;
          let r = e[n].message_notifications !== s.bL.NULL,
            u =
              o.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                _.ic.UNREADS_ALL_MESSAGES,
              ) ||
              o.yE(
                null !== (a = e[n].flags) && void 0 !== a ? a : 0,
                _.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && u) ||
            (!t.ignoreNotificationSetting && r) ||
            (!t.ignoreMute && (0, l.m$)(e[n]))
          );
        });
      }
      function b(e) {
        let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
        return (
          u.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
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
          return o;
        },
        pq: function () {
          return r;
        },
      });
      var i = n(630388),
        l = n(526761);
      function a(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, l.vc.UNREADS_ALL_MESSAGES, l.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let o = (e) =>
        i.M1(e, l.ic.UNREADS_ALL_MESSAGES, l.ic.UNREADS_ONLY_MENTIONS);
      function r(e, t) {
        return i.pj(o(e), t);
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
//# sourceMappingURL=caf179076b397e9ac4f3.js.map
