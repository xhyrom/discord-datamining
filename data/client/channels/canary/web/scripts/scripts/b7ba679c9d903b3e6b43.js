"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66847"],
  {
    776226: function (e) {
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    225433: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        c = t.n(a),
        o = t(481060),
        r = t(388032),
        s = t(744149);
      let l = Object.freeze({ DEFAULT: s.default, FILLED: s.filled });
      function d(e) {
        let {
          className: n,
          onClick: t,
          "aria-label": a,
          look: d = l.DEFAULT,
        } = e;
        return (0, i.jsx)(o.Clickable, {
          "aria-label": null != a ? a : r.intl.string(r.t.N86XcH),
          className: c()(s.button, d, n),
          onClick: t,
        });
      }
      d.Looks = l;
    },
    775666: function (e, n, t) {
      t.d(n, {
        EQ: function () {
          return N;
        },
        T5: function () {
          return p;
        },
        ZP: function () {
          return b;
        },
      }),
        t(47120),
        t(789020);
      var i = t(200651),
        a = t(192379),
        c = t(442837),
        o = t(481060),
        r = t(87051),
        s = t(221259),
        l = t(113449),
        d = t(686660),
        u = t(9156),
        _ = t(621600),
        g = t(981631),
        S = t(490897),
        h = t(526761),
        f = t(388032);
      function b(e) {
        let n = N(e);
        return e.type === g.d4z.GUILD_VOICE
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "channel_notification_settings",
              label: f.intl.string(f.t.HcoRu7),
              children: n,
            });
      }
      function N(e) {
        let n = (0, s.ZA)(e),
          t = (0, s.yN)(e),
          l = n.preset === d.s8.CUSTOM && !t.inherited,
          [_, S] = a.useState(l),
          [h, b] = a.useState(!1),
          N = h ? d.s8.CUSTOM : n.preset,
          L = p(e, () => b(!1)),
          E = (0, c.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(e)),
          m =
            "parent" === t.inheritedFrom
              ? f.intl.string(f.t.wlrV1d)
              : f.intl.string(f.t["1Wn2Mz"]);
        return e.type === g.d4z.GUILD_STAGE_VOICE
          ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_default",
                  label: m,
                  checked: t.inherited,
                  group: "channel_notification_settings",
                  subtext:
                    n.notification === g.bL.NO_MESSAGES
                      ? f.intl.string(f.t.CtVGyc)
                      : f.intl.string(f.t["BENn//"]),
                  action: () => (0, s.JK)(e.guild_id, e.id),
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_only_mention",
                  group: "channel_notification_settings",
                  checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                  label: f.intl.string(f.t["BENn//"]),
                  action: () => (0, s.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_no_message",
                  group: "channel_notification_settings",
                  label: f.intl.string(f.t.CtVGyc),
                  checked: !t.inherited && n.notification === g.bL.NO_MESSAGES,
                  action: () => (0, s.ft)(e.guild_id, e.id, g.bL.NO_MESSAGES),
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: f.intl.string(f.t.Rkgjpq),
                          checked: E,
                          action: () => r.Z.setForumThreadsCreated(e, !E),
                        }),
                        (0, i.jsx)(o.MenuSeparator, {}),
                      ],
                    })
                  : null,
                (0, i.jsxs)(o.MenuGroup, {
                  children: [
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_default",
                      label: m,
                      group: "channel_notification_settings",
                      checked: t.inherited && !h,
                      subtext: t.inheritedPreset,
                      action: () => ((0, s.JK)(e.guild_id, e.id), b(!1)),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_everything",
                      group: "channel_notification_settings",
                      label: f.intl.string(f.t.hZrr6u),
                      checked: !t.inherited && N === d.s8.ALL_MESSAGES,
                      action: () => (
                        (0, s._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), b(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_essentials",
                      group: "channel_notification_settings",
                      label: f.intl.string(f.t.y59NJi),
                      checked: !t.inherited && N === d.s8.MENTIONS,
                      action: () => (
                        (0, s._m)(e.guild_id, e.id, d.s8.MENTIONS), b(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_nothing",
                      group: "channel_notification_settings",
                      label: f.intl.string(f.t["pGn/bG"]),
                      checked: !t.inherited && N === d.s8.NOTHING,
                      action: () => (
                        (0, s._m)(e.guild_id, e.id, d.s8.NOTHING), b(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_custom",
                      group: "channel_notification_settings",
                      label: f.intl.string(f.t["32yow8"]),
                      checked: h || (!t.inherited && N === d.s8.CUSTOM),
                      action: () => (S(!0), b(!0)),
                    }),
                  ],
                }),
                (_ || l) && L,
              ],
            });
      }
      function p(e, n) {
        let { notification: t, unread: a } = (0, s.ZA)(e),
          c = (e) => {
            e(), n();
          },
          d = (n) => {
            let t = { message_notifications: n };
            n === g.bL.ALL_MESSAGES &&
              a !== S.i.ALL_MESSAGES &&
              (t.flags = (0, l.pq)(
                u.ZP.getChannelIdFlags(e.guild_id, e.id),
                h.ic.UNREADS_ALL_MESSAGES,
              )),
              r.Z.updateChannelOverrideSettings(
                e.guild_id,
                e.id,
                t,
                _.UE.notifications(n),
              );
          };
        return (0, i.jsxs)(o.MenuGroup, {
          children: [
            (0, i.jsxs)(
              o.MenuItem,
              {
                id: "unread_setting",
                label: "Unread Badges",
                children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                    id: "unread_setting_all_messages",
                    group: "unread_setting",
                    checked: a === S.i.ALL_MESSAGES,
                    label: f.intl.string(f.t["HVah//"]),
                    action: () =>
                      c(() => (0, s.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    id: "unread_setting_mention_only",
                    group: "unread_setting",
                    checked: a === S.i.ONLY_MENTIONS,
                    label: f.intl.string(f.t["tu+ZWF"]),
                    disabled:
                      a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                    subtext:
                      a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES
                        ? f.intl.string(f.t.eP8yWV)
                        : void 0,
                    action: () =>
                      c(() => (0, s.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS)),
                  }),
                ],
              },
              "unread_setting",
            ),
            (0, i.jsxs)(
              o.MenuItem,
              {
                id: "push_settings",
                label: f.intl.string(f.t.HcoRu7),
                children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything",
                    label: f.intl.string(f.t["HVah//"]),
                    checked: t === g.bL.ALL_MESSAGES,
                    subtext:
                      a !== S.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES
                        ? f.intl.string(f.t.idXSbG)
                        : void 0,
                    action: () => c(() => d(g.bL.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_mention",
                    checked: t === g.bL.ONLY_MENTIONS,
                    label: f.intl.string(f.t["tu+ZWF"]),
                    action: () => c(() => d(g.bL.ONLY_MENTIONS)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_nothing",
                    label: f.intl.string(f.t.X4wWUl),
                    checked: t === g.bL.NO_MESSAGES,
                    action: () => c(() => d(g.bL.NO_MESSAGES)),
                  }),
                ],
              },
              "push_settings",
            ),
          ],
        });
      }
    },
    690221: function (e, n, t) {
      var i = t(200651),
        a = t(192379),
        c = t(481060),
        o = t(703656),
        r = t(981631);
      n.Z = a.forwardRef(function (e, n) {
        let {
            href: t,
            children: s,
            onClick: l,
            onKeyPress: d,
            focusProps: u,
            ..._
          } = e,
          g = a.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != t && (0, o.uL)(t),
                  null == l || l()),
                  null == d || d(e);
            },
            [t, d, l],
          ),
          S = a.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, o.uL)(t),
                  null == l || l();
            },
            [t, l],
          ),
          h = (0, i.jsx)("a", {
            ref: n,
            href: t,
            onClick: S,
            onKeyPress: g,
            ..._,
            children: s,
          });
        return (0, i.jsx)(c.FocusRing, { ...u, children: h });
      });
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return f;
        },
        OD: function () {
          return h;
        },
        W9: function () {
          return g;
        },
      }),
        t(47120),
        t(789020);
      var i = t(442837),
        a = t(798140),
        c = t(9156),
        o = t(630388),
        r = t(709054),
        s = t(312400),
        l = t(981631),
        d = t(969943),
        u = t(526761),
        _ = t(388032);
      function g() {
        return [
          { label: _.intl.string(_.t["8ot6go"]), value: d.Oe.MINUTES_15 },
          { label: _.intl.string(_.t.UMWBZm), value: d.Oe.HOURS_1 },
          { label: _.intl.string(_.t.QmYWtr), value: d.Oe.HOURS_3 },
          { label: _.intl.string(_.t.EpAXPD), value: d.Oe.HOURS_8 },
          { label: _.intl.string(_.t["755t4u"]), value: d.Oe.HOURS_24 },
          { label: _.intl.string(_.t.r3LawM), value: d.Oe.ALWAYS },
        ];
      }
      let S = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function h(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
        return r.default.keys(e).filter((t) => {
          var i, c;
          let r = e[t].message_notifications !== l.bL.NULL,
            s =
              o.yE(
                null !== (i = e[t].flags) && void 0 !== i ? i : 0,
                u.ic.UNREADS_ALL_MESSAGES,
              ) ||
              o.yE(
                null !== (c = e[t].flags) && void 0 !== c ? c : 0,
                u.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && s) ||
            (!n.ignoreNotificationSetting && r) ||
            (!n.ignoreMute && (0, a.m$)(e[t]))
          );
        });
      }
      function f(e) {
        let n = (0, i.e7)([c.ZP], () => c.ZP.useNewNotifications);
        return (
          s.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    221259: function (e, n, t) {
      t.d(n, {
        IG: function () {
          return N;
        },
        JK: function () {
          return b;
        },
        ZA: function () {
          return S;
        },
        _m: function () {
          return f;
        },
        ft: function () {
          return p;
        },
        yN: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(399606),
        a = t(87051),
        c = t(592125),
        o = t(9156),
        r = t(621600),
        s = t(423589),
        l = t(113449),
        d = t(686660),
        u = t(981631),
        _ = t(490897),
        g = t(526761);
      function S(e) {
        let n = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
          t = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
        return { unread: n, notification: t, preset: (0, d.gs)(n, t) };
      }
      function h(e) {
        let n = (0, i.Wu)([o.ZP], () =>
            (0, s.OD)(o.ZP.getChannelOverrides(e.guild_id), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            }),
          ),
          [t, a] = (0, i.Wu)(
            [o.ZP, c.Z],
            () => {
              let t = c.Z.getChannel(e.parent_id);
              return null != t && n.includes(t.id)
                ? [
                    "parent",
                    (0, d.p1)(
                      (0, d.gs)(
                        o.ZP.resolveUnreadSetting(t),
                        o.ZP.resolvedMessageNotifications(t),
                      ),
                    ),
                  ]
                : [
                    "guild",
                    (0, d.p1)(
                      (0, d.gs)(
                        o.ZP.getGuildUnreadSetting(e.guild_id),
                        o.ZP.getMessageNotifications(e.guild_id),
                      ),
                    ),
                  ];
            },
            [e.guild_id, e.parent_id, n],
          );
        return {
          inherited: !n.includes(e.id),
          inheritedFrom: t,
          inheritedPreset: a,
        };
      }
      function f(e, n, t) {
        let i = o.ZP.getChannelIdFlags(e, n);
        t === d.s8.ALL_MESSAGES
          ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                message_notifications: u.bL.ALL_MESSAGES,
                flags: (0, l.pq)(i, g.ic.UNREADS_ALL_MESSAGES),
              },
              r.ZB.PresetAll,
            )
          : t === d.s8.MENTIONS
            ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: u.bL.ONLY_MENTIONS,
                  flags: (0, l.pq)(i, g.ic.UNREADS_ONLY_MENTIONS),
                },
                r.ZB.PresetMentions,
              )
            : t === d.s8.NOTHING &&
              a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: u.bL.NO_MESSAGES,
                  flags: (0, l.pq)(i, g.ic.UNREADS_ONLY_MENTIONS),
                },
                r.ZB.PresetNothing,
              );
      }
      function b(e, n) {
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            message_notifications: u.bL.NULL,
            flags: (0, l.YF)(o.ZP.getChannelIdFlags(e, n)),
          },
          r.ZB.PresetDefault,
        );
      }
      function N(e, n, t) {
        let i = o.ZP.getChannelIdFlags(e, n);
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            flags: (0, l.pq)(
              i,
              t === _.i.ALL_MESSAGES
                ? g.ic.UNREADS_ALL_MESSAGES
                : g.ic.UNREADS_ONLY_MENTIONS,
            ),
          },
          r.UE.unreads(t),
        );
      }
      function p(e, n, t) {
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          { message_notifications: t },
          r.UE.notifications(t),
        );
      }
    },
    748756: function (e, n, t) {
      t.d(n, {
        V: function () {
          return d;
        },
      }),
        t(399606);
      var i = t(87051),
        a = t(9156),
        c = t(621600),
        o = t(113449),
        r = t(686660),
        s = t(981631),
        l = t(526761);
      function d(e, n) {
        let t = a.ZP.getGuildFlags(e);
        n === r.s8.ALL_MESSAGES
          ? i.Z.updateGuildNotificationSettings(
              e,
              {
                message_notifications: s.bL.ALL_MESSAGES,
                flags: (0, o.Q4)(t, l.vc.UNREADS_ALL_MESSAGES),
              },
              c.ZB.PresetAll,
            )
          : n === r.s8.MENTIONS
            ? i.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: s.bL.ONLY_MENTIONS,
                  flags: (0, o.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS),
                },
                c.ZB.PresetMentions,
              )
            : n === r.s8.NOTHING &&
              i.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: s.bL.NO_MESSAGES,
                  flags: (0, o.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS),
                },
                c.ZB.PresetNothing,
              );
      }
    },
    744149: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    777138: function (e, n, t) {
      e.exports = {
        spacing: "spacing_cacc4c",
        smallSpacing: "smallSpacing_cacc4c",
        largeSpacing: "largeSpacing_cacc4c",
        checkboxContainer: "checkboxContainer_cacc4c",
        checkboxMute: "checkboxMute_cacc4c",
        checkboxContainerMuted:
          "checkboxContainerMuted_cacc4c checkboxContainer_cacc4c",
        muteUntilTitle: "muteUntilTitle_cacc4c",
        muteUntilText: "muteUntilText_cacc4c",
        muteTimeSelector: "muteTimeSelector_cacc4c",
        checkboxGroup: "checkboxGroup_cacc4c",
        overrideList: "overrideList_cacc4c",
        override: "override_cacc4c",
        overrideHighlight: "overrideHighlight_cacc4c",
        removeOverride: "removeOverride_cacc4c",
        overridePlaceholder: "overridePlaceholder_cacc4c",
        nameContainer: "nameContainer_cacc4c",
        icon: "icon_cacc4c lighten_cacc4c",
        overrideHeader: "overrideHeader_cacc4c lighten_cacc4c",
        headerName: "headerName_cacc4c header_cacc4c",
        headerOption: "headerOption_cacc4c header_cacc4c",
        channelNameContainer: "channelNameContainer_cacc4c",
        channelName: "channelName_cacc4c",
        channelNameByline: "channelNameByline_cacc4c lighten_cacc4c",
        highlightsLink: "highlightsLink_cacc4c",
        customNotificationSoundsDivider:
          "customNotificationSoundsDivider_cacc4c",
        guildName: "guildName_cacc4c",
        modalHeader: "modalHeader_cacc4c",
      };
    },
    773307: function (e, n, t) {
      e.exports = {
        advanceSetting: "advanceSetting_c82c09",
        advanceSettingTitle: "advanceSettingTitle_c82c09",
        settingTitleIcon: "settingTitleIcon_c82c09",
      };
    },
    532868: function (e, n, t) {
      e.exports = {
        table: "table_b3d000",
        row: "row_b3d000",
        rowName: "rowName_b3d000",
        rowOption: "rowOption_b3d000",
        icon: "icon_b3d000",
        channels: "channels_b3d000",
        channelRow: "channelRow_b3d000",
        modColor: "modColor_b3d000",
        removeButton: "removeButton_b3d000",
        channel: "channel_b3d000",
        separator: "separator_b3d000",
      };
    },
    539673: function (e, n, t) {
      e.exports = { input: "input_eb7a62" };
    },
    752863: function (e, n, t) {
      e.exports = {
        header: "header_da6bd8",
        headerLeft: "headerLeft_da6bd8",
        headerBell: "headerBell_da6bd8",
        sectionContent: "sectionContent_da6bd8",
        sectionContentPadding: "sectionContentPadding_da6bd8",
        sectionHeader: "sectionHeader_da6bd8",
        sectionHeaderTitle: "sectionHeaderTitle_da6bd8",
        content: "content_da6bd8",
      };
    },
    401387: function (e, n, t) {
      e.exports = { mutedConfig: "mutedConfig_f7fdc7" };
    },
    249704: function (e, n, t) {
      e.exports = {
        segmentedControlsContainer: "segmentedControlsContainer_f0a004",
        presetSeparator: "presetSeparator_f0a004",
        segmentedControl: "segmentedControl_f0a004",
        customPresetsContainer: "customPresetsContainer_f0a004",
        input: "input_f0a004",
        grid: "grid_f0a004",
        channeList: "channeList_f0a004",
        channelListChannel: "channelListChannel_f0a004",
        channelListChannelIcon: "channelListChannelIcon_f0a004",
        channelListChannelName: "channelListChannelName_f0a004",
        muted: "muted_f0a004",
        unread: "unread_f0a004",
        unreadMuted: "unreadMuted_f0a004",
        hidden: "hidden_f0a004",
        badge: "badge_f0a004",
        mockMessageDisabled: "mockMessageDisabled_f0a004",
        mockMessage: "mockMessage_f0a004",
        mockMessageAvatar: "mockMessageAvatar_f0a004",
      };
    },
    609388: function (e, n, t) {
      e.exports = {
        header: "header_ab73ba",
        nitroWheelContainer: "nitroWheelContainer_ab73ba",
        nitroWheel: "nitroWheel_ab73ba",
        newBadge: "newBadge_ab73ba",
        subheader: "subheader_ab73ba",
        warningContainer: "warningContainer_ab73ba",
        warningLabel: "warningLabel_ab73ba",
        optionsContainer: "optionsContainer_ab73ba",
        options: "options_ab73ba",
        option: "option_ab73ba",
        optionRedesign: "optionRedesign_ab73ba",
        optionPlaying: "optionPlaying_ab73ba",
        playableOption: "playableOption_ab73ba",
      };
    },
    270207: function (e, n, t) {
      e.exports = {
        container: "container_ff235c",
        containerActive: "containerActive_ff235c",
        playButton: "playButton_ff235c",
        textContainer: "textContainer_ff235c",
      };
    },
    205459: function (e, n, t) {
      e.exports = {
        container: "container_b118e0",
        nitroWheel: "nitroWheel_b118e0",
        text: "text_b118e0",
        nitroButton: "nitroButton_b118e0",
      };
    },
  },
]);
//# sourceMappingURL=b7ba679c9d903b3e6b43.js.map
