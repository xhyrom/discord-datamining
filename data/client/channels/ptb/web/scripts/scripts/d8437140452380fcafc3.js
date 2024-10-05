"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42769"],
  {
    775666: function (e, n, t) {
      t.d(n, {
        EQ: function () {
          return b;
        },
        T5: function () {
          return L;
        },
        ZP: function () {
          return E;
        },
      }),
        t(47120),
        t(789020);
      var i = t(735250),
        a = t(470079),
        c = t(442837),
        o = t(481060),
        s = t(87051),
        r = t(221259),
        d = t(113449),
        _ = t(686660),
        l = t(9156),
        u = t(621600),
        g = t(981631),
        S = t(490897),
        h = t(526761),
        N = t(689938);
      function E(e) {
        let n = b(e);
        return e.type === g.d4z.GUILD_VOICE
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "channel_notification_settings",
              label: N.Z.Messages.NOTIFICATIONS,
              children: n,
            });
      }
      function b(e) {
        let n = (0, r.ZA)(e),
          t = (0, r.yN)(e),
          d = n.preset === _.s8.CUSTOM && !t.inherited,
          [u, S] = a.useState(d),
          [h, E] = a.useState(!1),
          b = h ? _.s8.CUSTOM : n.preset,
          M = L(e, () => E(!1)),
          f = (0, c.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
          I =
            "parent" === t.inheritedFrom
              ? N.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY
              : N.Z.Messages.FORM_LABEL_DEFAULT;
        return e.type === g.d4z.GUILD_STAGE_VOICE
          ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_default",
                  label: I,
                  checked: t.inherited,
                  group: "channel_notification_settings",
                  subtext:
                    n.notification === g.bL.NO_MESSAGES
                      ? N.Z.Messages.FORM_LABEL_NOTHING
                      : N.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                  action: () => (0, r.JK)(e.guild_id, e.id),
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_only_mention",
                  group: "channel_notification_settings",
                  checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                  label: N.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                  action: () => (0, r.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "cns_no_message",
                  group: "channel_notification_settings",
                  label: N.Z.Messages.FORM_LABEL_NOTHING,
                  checked: !t.inherited && n.notification === g.bL.NO_MESSAGES,
                  action: () => (0, r.ft)(e.guild_id, e.id, g.bL.NO_MESSAGES),
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
                          label: N.Z.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: f,
                          action: () => s.Z.setForumThreadsCreated(e, !f),
                        }),
                        (0, i.jsx)(o.MenuSeparator, {}),
                      ],
                    })
                  : null,
                (0, i.jsxs)(o.MenuGroup, {
                  children: [
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_default",
                      label: I,
                      group: "channel_notification_settings",
                      checked: t.inherited && !h,
                      subtext: t.inheritedPreset,
                      action: () => ((0, r.JK)(e.guild_id, e.id), E(!1)),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_everything",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_1,
                      checked: !t.inherited && b === _.s8.ALL_MESSAGES,
                      action: () => (
                        (0, r._m)(e.guild_id, e.id, _.s8.ALL_MESSAGES), E(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_essentials",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_2,
                      checked: !t.inherited && b === _.s8.MENTIONS,
                      action: () => (
                        (0, r._m)(e.guild_id, e.id, _.s8.MENTIONS), E(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_nothing",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_3,
                      checked: !t.inherited && b === _.s8.NOTHING,
                      action: () => (
                        (0, r._m)(e.guild_id, e.id, _.s8.NOTHING), E(!1)
                      ),
                    }),
                    (0, i.jsx)(o.MenuRadioItem, {
                      id: "cns_custom",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                      checked: h || (!t.inherited && b === _.s8.CUSTOM),
                      action: () => (S(!0), E(!0)),
                    }),
                  ],
                }),
                (u || d) && M,
              ],
            });
      }
      function L(e, n) {
        let { notification: t, unread: a } = (0, r.ZA)(e),
          c = (e) => {
            e(), n();
          },
          _ = (n) => {
            let t = { message_notifications: n };
            n === g.bL.ALL_MESSAGES &&
              a !== S.i.ALL_MESSAGES &&
              (t.flags = (0, d.pq)(
                l.ZP.getChannelIdFlags(e.guild_id, e.id),
                h.ic.UNREADS_ALL_MESSAGES,
              )),
              s.Z.updateChannelOverrideSettings(
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
                    checked: a === S.i.ALL_MESSAGES,
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    action: () =>
                      c(() => (0, r.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    id: "unread_setting_mention_only",
                    group: "unread_setting",
                    checked: a === S.i.ONLY_MENTIONS,
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled:
                      a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                    subtext:
                      a !== S.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES
                        ? N.Z.Messages
                            .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED
                        : void 0,
                    action: () =>
                      c(() => (0, r.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS)),
                  }),
                ],
              },
              "unread_setting",
            ),
            (0, i.jsxs)(
              o.MenuItem,
              {
                id: "push_settings",
                label: N.Z.Messages.NOTIFICATIONS,
                children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything",
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    checked: t === g.bL.ALL_MESSAGES,
                    subtext:
                      a !== S.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES
                        ? N.Z.Messages
                            .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING
                        : void 0,
                    action: () => c(() => _(g.bL.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_mention",
                    checked: t === g.bL.ONLY_MENTIONS,
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    action: () => c(() => _(g.bL.ONLY_MENTIONS)),
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_nothing",
                    label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    checked: t === g.bL.NO_MESSAGES,
                    action: () => c(() => _(g.bL.NO_MESSAGES)),
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
          return b;
        },
        JK: function () {
          return E;
        },
        ZA: function () {
          return S;
        },
        _m: function () {
          return N;
        },
        ft: function () {
          return L;
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
        s = t(621600),
        r = t(423589),
        d = t(113449),
        _ = t(686660),
        l = t(981631),
        u = t(490897),
        g = t(526761);
      function S(e) {
        let n = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
          t = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
        return { unread: n, notification: t, preset: (0, _.gs)(n, t) };
      }
      function h(e) {
        let n = (0, i.Wu)([o.ZP], () =>
            (0, r.OD)(o.ZP.getChannelOverrides(e.guild_id), {
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
                    (0, _.p1)(
                      (0, _.gs)(
                        o.ZP.resolveUnreadSetting(t),
                        o.ZP.resolvedMessageNotifications(t),
                      ),
                    ),
                  ]
                : [
                    "guild",
                    (0, _.p1)(
                      (0, _.gs)(
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
      function N(e, n, t) {
        let i = o.ZP.getChannelIdFlags(e, n);
        t === _.s8.ALL_MESSAGES
          ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                message_notifications: l.bL.ALL_MESSAGES,
                flags: (0, d.pq)(i, g.ic.UNREADS_ALL_MESSAGES),
              },
              s.ZB.PresetAll,
            )
          : t === _.s8.MENTIONS
            ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: l.bL.ONLY_MENTIONS,
                  flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS),
                },
                s.ZB.PresetMentions,
              )
            : t === _.s8.NOTHING &&
              a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: l.bL.NO_MESSAGES,
                  flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS),
                },
                s.ZB.PresetNothing,
              );
      }
      function E(e, n) {
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            message_notifications: l.bL.NULL,
            flags: (0, d.YF)(o.ZP.getChannelIdFlags(e, n)),
          },
          s.ZB.PresetDefault,
        );
      }
      function b(e, n, t) {
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
          s.UE.unreads(t),
        );
      }
      function L(e, n, t) {
        a.Z.updateChannelOverrideSettings(
          e,
          n,
          { message_notifications: t },
          s.UE.notifications(t),
        );
      }
    },
    736475: function (e, n, t) {
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
    202370: function (e, n, t) {
      e.exports = {
        advanceSetting: "advanceSetting_c82c09",
        advanceSettingTitle: "advanceSettingTitle_c82c09",
        settingTitleIcon: "settingTitleIcon_c82c09",
      };
    },
    805747: function (e, n, t) {
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
    647200: function (e, n, t) {
      e.exports = { input: "input_eb7a62" };
    },
    235968: function (e, n, t) {
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
    871839: function (e, n, t) {
      e.exports = { mutedConfig: "mutedConfig_f7fdc7" };
    },
    942748: function (e, n, t) {
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
    364966: function (e, n, t) {
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
    618900: function (e, n, t) {
      e.exports = {
        container: "container_ff235c",
        containerActive: "containerActive_ff235c",
        playButton: "playButton_ff235c",
        textContainer: "textContainer_ff235c",
      };
    },
    999317: function (e, n, t) {
      e.exports = {
        container: "container_b118e0",
        nitroWheel: "nitroWheel_b118e0",
        text: "text_b118e0",
        nitroButton: "nitroButton_b118e0",
      };
    },
  },
]);
//# sourceMappingURL=d8437140452380fcafc3.js.map
