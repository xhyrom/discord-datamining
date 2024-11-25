"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67913"],
  {
    775666: function (e, n, t) {
      t.d(n, {
        EQ: function () {
          return f;
        },
        T5: function () {
          return m;
        },
        ZP: function () {
          return p;
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
        d = t(113449),
        l = t(686660),
        _ = t(9156),
        u = t(621600),
        g = t(981631),
        h = t(490897),
        S = t(526761),
        b = t(388032);
      function p(e) {
        let n = f(e);
        return e.type === g.d4z.GUILD_VOICE
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "channel_notification_settings",
              label: b.intl.string(b.t.HcoRu7),
              children: n,
            });
      }
      function f(e) {
        let n = (0, s.ZA)(e),
          t = (0, s.yN)(e),
          d = n.preset === l.s8.CUSTOM && !t.inherited,
          [u, h] = a.useState(d),
          [S, p] = a.useState(!1),
          f = S ? l.s8.CUSTOM : n.preset,
          L = m(e, () => p(!1)),
          N = (0, c.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
          M =
            "parent" === t.inheritedFrom
              ? b.intl.string(b.t.wlrV1d)
              : b.intl.string(b.t["1Wn2Mz"]);
        return e.type === g.d4z.GUILD_STAGE_VOICE
          ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_default",
                  label: M,
                  checked: t.inherited,
                  group: "channel_notification_settings",
                  subtext:
                    n.notification === g.bL.NO_MESSAGES
                      ? b.intl.string(b.t.CtVGyc)
                      : b.intl.string(b.t["BENn//"]),
                  action: () => (0, s.JK)(e.guild_id, e.id),
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_only_mention",
                  group: "channel_notification_settings",
                  checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                  label: b.intl.string(b.t["BENn//"]),
                  action: () => (0, s.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_no_message",
                  group: "channel_notification_settings",
                  label: b.intl.string(b.t.CtVGyc),
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
                          label: b.intl.string(b.t.Rkgjpq),
                          checked: N,
                          action: () => r.Z.setForumThreadsCreated(e, !N),
                        }),
                        (0, i.jsx)(o.MenuSeparator, {}),
                      ],
                    })
                  : null,
                (0, i.jsxs)(o.MenuGroup, {
                  children: [
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_default",
                      label: M,
                      group: "channel_notification_settings",
                      checked: t.inherited && !S,
                      subtext: t.inheritedPreset,
                      action: () => ((0, s.JK)(e.guild_id, e.id), p(!1)),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_everything",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t.hZrr6u),
                      checked: !t.inherited && f === l.s8.ALL_MESSAGES,
                      action: () => (
                        (0, s._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), p(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_essentials",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t.y59NJi),
                      checked: !t.inherited && f === l.s8.MENTIONS,
                      action: () => (
                        (0, s._m)(e.guild_id, e.id, l.s8.MENTIONS), p(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_nothing",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t["pGn/bG"]),
                      checked: !t.inherited && f === l.s8.NOTHING,
                      action: () => (
                        (0, s._m)(e.guild_id, e.id, l.s8.NOTHING), p(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_custom",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t["32yow8"]),
                      checked: S || (!t.inherited && f === l.s8.CUSTOM),
                      action: () => (h(!0), p(!0)),
                    }),
                  ],
                }),
                (u || d) && L,
              ],
            });
      }
      function m(e, n) {
        let { notification: t, unread: a } = (0, s.ZA)(e),
          c = (e) => {
            e(), n();
          },
          l = (n) => {
            let t = { message_notifications: n };
            n === g.bL.ALL_MESSAGES &&
              a !== h.i.ALL_MESSAGES &&
              (t.flags = (0, d.pq)(
                _.ZP.getChannelIdFlags(e.guild_id, e.id),
                S.ic.UNREADS_ALL_MESSAGES,
              )),
              r.Z.updateChannelOverrideSettings(
                e.guild_id,
                e.id,
                t,
                u.UE.notifications(n),
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
                    checked: a === h.i.ALL_MESSAGES,
                    label: b.intl.string(b.t["HVah//"]),
                    action: () =>
                      c(() => (0, s.IG)(e.guild_id, e.id, h.i.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    id: "unread_setting_mention_only",
                    group: "unread_setting",
                    checked: a === h.i.ONLY_MENTIONS,
                    label: b.intl.string(b.t["tu+ZWF"]),
                    disabled:
                      a !== h.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                    subtext:
                      a !== h.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES
                        ? b.intl.string(b.t.eP8yWV)
                        : void 0,
                    action: () =>
                      c(() => (0, s.IG)(e.guild_id, e.id, h.i.ONLY_MENTIONS)),
                  }),
                ],
              },
              "unread_setting",
            ),
            (0, i.jsxs)(
              o.MenuItem,
              {
                id: "push_settings",
                label: b.intl.string(b.t.HcoRu7),
                children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything",
                    label: b.intl.string(b.t["HVah//"]),
                    checked: t === g.bL.ALL_MESSAGES,
                    subtext:
                      a !== h.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES
                        ? b.intl.string(b.t.idXSbG)
                        : void 0,
                    action: () => c(() => l(g.bL.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_mention",
                    checked: t === g.bL.ONLY_MENTIONS,
                    label: b.intl.string(b.t["tu+ZWF"]),
                    action: () => c(() => l(g.bL.ONLY_MENTIONS)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_nothing",
                    label: b.intl.string(b.t.X4wWUl),
                    checked: t === g.bL.NO_MESSAGES,
                    action: () => c(() => l(g.bL.NO_MESSAGES)),
                  }),
                ],
              },
              "push_settings",
            ),
          ],
        });
      }
    },
    221259: function (e, n, t) {
      t.d(n, {
        IG: function () {
          return f;
        },
        JK: function () {
          return p;
        },
        ZA: function () {
          return h;
        },
        _m: function () {
          return b;
        },
        ft: function () {
          return m;
        },
        yN: function () {
          return S;
        },
      }),
        t(47120);
      var i = t(399606),
        a = t(87051),
        c = t(592125),
        o = t(9156),
        r = t(621600),
        s = t(423589),
        d = t(113449),
        l = t(686660),
        _ = t(981631),
        u = t(490897),
        g = t(526761);
      function h(e) {
        let n = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
          t = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
        return { unread: n, notification: t, preset: (0, l.gs)(n, t) };
      }
      function S(e) {
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
                    (0, l.p1)(
                      (0, l.gs)(
                        o.ZP.resolveUnreadSetting(t),
                        o.ZP.resolvedMessageNotifications(t),
                      ),
                    ),
                  ]
                : [
                    "guild",
                    (0, l.p1)(
                      (0, l.gs)(
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
      function b(e, n, t) {
        let i = o.ZP.getChannelIdFlags(e, n);
        t === l.s8.ALL_MESSAGES
          ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                message_notifications: _.bL.ALL_MESSAGES,
                flags: (0, d.pq)(i, g.ic.UNREADS_ALL_MESSAGES),
              },
              r.ZB.PresetAll,
            )
          : t === l.s8.MENTIONS
            ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: _.bL.ONLY_MENTIONS,
                  flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS),
                },
                r.ZB.PresetMentions,
              )
            : t === l.s8.NOTHING &&
              a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: _.bL.NO_MESSAGES,
                  flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS),
                },
                r.ZB.PresetNothing,
              );
      }
      function p(e, n) {
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            message_notifications: _.bL.NULL,
            flags: (0, d.YF)(o.ZP.getChannelIdFlags(e, n)),
          },
          r.ZB.PresetDefault,
        );
      }
      function f(e, n, t) {
        let i = o.ZP.getChannelIdFlags(e, n);
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            flags: (0, d.pq)(
              i,
              t === u.i.ALL_MESSAGES
                ? g.ic.UNREADS_ALL_MESSAGES
                : g.ic.UNREADS_ONLY_MENTIONS,
            ),
          },
          r.UE.unreads(t),
        );
      }
      function m(e, n, t) {
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          { message_notifications: t },
          r.UE.notifications(t),
        );
      }
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
//# sourceMappingURL=40dddcc2caae2f561397.js.map
