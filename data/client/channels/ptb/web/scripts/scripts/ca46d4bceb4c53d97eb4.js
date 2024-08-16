"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41127"],
  {
    863750: function (e, n, t) {
      t(47120);
      var a,
        i = t(442837),
        l = t(570140);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let o = {
          disable_alpha_voice_panel:
            "Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It's not feature complete so if there's something you are missing, or you find a problem, you can disable it here.",
          enable_recently_active: "Enable recently active channels",
          happening_main_tab: "Enable Happening tab containing summaries",
          enable_recently_active_summaries:
            "Enable summaries in recently active view",
          disable_theme_key:
            "Disable reloading the entire app when the theme changes",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          cozy_header: "Cozy header",
          mobile_profile_effect_debug_controls:
            "mobile_profile_effect_debug_controls",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          nav_experiment_server_drawer_no_activity:
            "[NavI] Hide activity in server drawer",
          nav_experiment_you_bar_grounded: "[NavI] Grounded you bar",
          nav_experiment_you_bar_large_buttons:
            "[NavI] Small buttons in you bar",
          nav_experiment_you_bar_large_messages:
            "[NavI] Large avatars in messages",
          force_channel_list_v2: "Force channel list V2",
          shop_include_unpublished: "[Shop] show unpublished items in shop",
          disable_channel_list:
            "Disable channel list -- for performance testing. You probably don't want to turn this on, lol",
          show_icymi_debug_scores: "Show ICYMI debug scores",
          only_channel_screen:
            "Down with PanelsView, rely on only ChannelScreen!",
        },
        u = {};
      class s extends (a = i.ZP.DeviceSettingsStore) {
        getUserAgnosticState() {
          return { toggleStates: u };
        }
        initialize(e) {
          for (var n in o) {
            var t, a;
            let i =
              null !==
                (a =
                  null == e
                    ? void 0
                    : null === (t = e.toggleStates) || void 0 === t
                      ? void 0
                      : t[n]) &&
              void 0 !== a &&
              a;
            u[n] = i;
          }
        }
        get(e) {
          var n;
          return null !== (n = u[e]) && void 0 !== n && n;
        }
        set(e, n) {
          return (u[e] = n), n;
        }
        all() {
          return u;
        }
        allWithDescriptions() {
          return Object.entries(u).map((e) => {
            let [n, t] = e;
            return [n, t, o[n]];
          });
        }
      }
      r(s, "displayName", "DevToolsDesignTogglesStore"),
        r(s, "persistKey", "DevToolsDesignTogglesStore"),
        (n.Z = new s(l.Z, {
          DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            u[e.toggle] = e.value;
          },
        }));
    },
    238428: function (e, n, t) {
      t(442837), t(863750);
    },
    858822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(913527),
        l = t.n(i),
        r = t(442837),
        o = t(481060),
        u = t(92114),
        s = t(776568),
        _ = t(777861),
        c = t(9156),
        d = t(621600),
        g = t(689938);
      function f(e, n) {
        let t = null == e ? void 0 : e.id,
          { muted: i, muteConfig: f } = (0, r.cj)(
            [c.ZP],
            () => ({
              muted: null != t ? c.ZP.isMuted(t) : void 0,
              muteConfig: null != t ? c.ZP.getMuteConfig(t) : void 0,
            }),
            [t],
          ),
          v = (0, _.U)(f);
        return null == t
          ? null
          : i
            ? (0, a.jsx)(o.MenuItem, {
                id: "unmute-guild",
                label: g.Z.Messages.UNMUTE_SERVER,
                subtext: v,
                action: () =>
                  u.Z.updateGuildNotificationSettings(
                    t,
                    { muted: !1 },
                    d.ZB.Unmuted,
                  ),
              })
            : (0, a.jsx)(o.MenuItem, {
                id: "mute-guild",
                label: g.Z.Messages.MUTE_SERVER,
                action: () =>
                  u.Z.updateGuildNotificationSettings(
                    t,
                    { muted: !0 },
                    d.ZB.Muted,
                  ),
                children: (0, s.k)().map((e) => {
                  let { value: i, label: r } = e;
                  return (0, a.jsx)(
                    o.MenuItem,
                    {
                      id: "".concat(i),
                      label: r,
                      action: () =>
                        (function (e) {
                          if (null == t) return;
                          let a =
                            e > 0 ? l()().add(e, "second").toISOString() : null;
                          u.Z.updateGuildNotificationSettings(
                            t,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: a,
                              },
                            },
                            d.ZB.Muted,
                            n,
                          );
                        })(i),
                    },
                    i,
                  );
                }),
              });
      }
    },
    518756: function (e, n, t) {
      t(47120);
      var a = t(470079),
        i = t(442837),
        l = t(889161),
        r = t(984933),
        o = t(430824),
        u = t(496675),
        s = t(981631);
      n.Z = (e, n) => {
        let t = (0, i.e7)([o.Z], () => o.Z.getGuild(e), [e]),
          { canCreateGuildEvent: _ } = (0, l.XJ)(t),
          c = (0, i.e7)([r.ZP], () => r.ZP.getChannels(e)[r.Zb], [e]),
          d = a.useMemo(
            () =>
              null != n
                ? c.filter((e) => {
                    let { channel: t } = e;
                    return t.type === n;
                  })
                : c,
            [c, n],
          );
        return (0, i.e7)(
          [u.Z],
          () => {
            if (u.Z.can(s.Plq.ADMINISTRATOR, t) || _) return !0;
            for (let { channel: e } of d) {
              let { canCreateGuildEvent: n } = (0, l.Gw)(e);
              if (n) return !0;
            }
            return !1;
          },
          [d, t, _],
        );
      };
    },
    334877: function (e, n, t) {
      t.d(n, {
        l: function () {
          return l;
        },
      });
      var a = t(652874),
        i = t(731965);
      let l = (0, a.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(n) {
          (0, i.j)(() => e({ canCloseModal: n }));
        },
      }));
    },
    576749: function (e, n, t) {
      var a = t(481060),
        i = t(40851),
        l = t(334877),
        r = t(981631);
      let o = "guild-event-modal";
      n.Z = () => {
        let e =
          (0, i.bp)() === r.IlC.POPOUT
            ? a.POPOUT_MODAL_CONTEXT
            : a.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: o,
          contextKey: e,
          onCloseRequest: () => {
            l.l.getState().canCloseModal && (0, a.closeModal)(o, e);
          },
        };
      };
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return b;
        },
        OD: function () {
          return v;
        },
        W9: function () {
          return g;
        },
      }),
        t(47120),
        t(789020);
      var a = t(442837),
        i = t(798140),
        l = t(9156),
        r = t(630388),
        o = t(709054),
        u = t(312400),
        s = t(981631),
        _ = t(969943),
        c = t(526761),
        d = t(689938);
      function g() {
        return [
          {
            label: d.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: _.Oe.MINUTES_15,
          },
          { label: d.Z.Messages.MUTE_DURATION_1_HOUR, value: _.Oe.HOURS_1 },
          { label: d.Z.Messages.MUTE_DURATION_3_HOURS, value: _.Oe.HOURS_3 },
          { label: d.Z.Messages.MUTE_DURATION_8_HOURS, value: _.Oe.HOURS_8 },
          { label: d.Z.Messages.MUTE_DURATION_24_HOURS, value: _.Oe.HOURS_24 },
          { label: d.Z.Messages.MUTE_DURATION_ALWAYS, value: _.Oe.ALWAYS },
        ];
      }
      let f = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function v(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
        return o.default.keys(e).filter((t) => {
          var a, l;
          let o = e[t].message_notifications !== s.bL.NULL,
            u =
              r.yE(
                null !== (a = e[t].flags) && void 0 !== a ? a : 0,
                c.ic.UNREADS_ALL_MESSAGES,
              ) ||
              r.yE(
                null !== (l = e[t].flags) && void 0 !== l ? l : 0,
                c.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && u) ||
            (!n.ignoreNotificationSetting && o) ||
            (!n.ignoreMute && (0, i.m$)(e[t]))
          );
        });
      }
      function b(e) {
        let n = (0, a.e7)([l.ZP], () => l.ZP.useNewNotifications);
        return (
          u.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (e, n, t) {
      t.d(n, {
        Q4: function () {
          return l;
        },
        YF: function () {
          return r;
        },
        pq: function () {
          return o;
        },
      });
      var a = t(630388),
        i = t(526761);
      function l(e, n) {
        var t;
        return a.pj(
          ((t = e),
          a.M1(t, i.vc.UNREADS_ALL_MESSAGES, i.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let r = (e) =>
        a.M1(e, i.ic.UNREADS_ALL_MESSAGES, i.ic.UNREADS_ONLY_MENTIONS);
      function o(e, n) {
        return a.pj(r(e), n);
      }
    },
    591822: function (e, n, t) {
      e.exports = {};
    },
    936124: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    465094: function (e, n, t) {
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
    100535: function (e, n, t) {
      e.exports = { text: "text_b953a6" };
    },
  },
]);
//# sourceMappingURL=ca46d4bceb4c53d97eb4.js.map
