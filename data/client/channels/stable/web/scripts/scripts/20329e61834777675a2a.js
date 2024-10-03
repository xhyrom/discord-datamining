"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89746"],
  {
    776226: function (e) {
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    225433: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = a(735250);
      a(470079);
      var c = a(120356),
        i = a.n(c),
        o = a(481060),
        r = a(689938),
        l = a(60179);
      let s = Object.freeze({ DEFAULT: l.default, FILLED: l.filled });
      function d(e) {
        let {
          className: n,
          onClick: a,
          "aria-label": c,
          look: d = s.DEFAULT,
        } = e;
        return (0, t.jsx)(o.Clickable, {
          "aria-label": null != c ? c : r.Z.Messages.REMOVE,
          className: i()(l.button, d, n),
          onClick: a,
        });
      }
      d.Looks = s;
    },
    690221: function (e, n, a) {
      var t = a(735250),
        c = a(470079),
        i = a(481060),
        o = a(703656),
        r = a(981631);
      n.Z = c.forwardRef(function (e, n) {
        let {
            href: a,
            children: l,
            onClick: s,
            onKeyPress: d,
            focusProps: _,
            ...u
          } = e,
          b = c.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != a && (0, o.uL)(a),
                  null == s || s()),
                  null == d || d(e);
            },
            [a, d, s],
          ),
          h = c.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != a && (0, o.uL)(a),
                  null == s || s();
            },
            [a, s],
          ),
          f = (0, t.jsx)("a", {
            ref: n,
            href: a,
            onClick: h,
            onKeyPress: b,
            ...u,
            children: l,
          });
        return (0, t.jsx)(i.FocusRing, { ..._, children: f });
      });
    },
    748756: function (e, n, a) {
      a.d(n, {
        V: function () {
          return d;
        },
      }),
        a(399606);
      var t = a(87051),
        c = a(9156),
        i = a(621600),
        o = a(113449),
        r = a(686660),
        l = a(981631),
        s = a(526761);
      function d(e, n) {
        let a = c.ZP.getGuildFlags(e);
        n === r.s8.ALL_MESSAGES
          ? t.Z.updateGuildNotificationSettings(
              e,
              {
                message_notifications: l.bL.ALL_MESSAGES,
                flags: (0, o.Q4)(a, s.vc.UNREADS_ALL_MESSAGES),
              },
              i.ZB.PresetAll,
            )
          : n === r.s8.MENTIONS
            ? t.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: l.bL.ONLY_MENTIONS,
                  flags: (0, o.Q4)(a, s.vc.UNREADS_ONLY_MENTIONS),
                },
                i.ZB.PresetMentions,
              )
            : n === r.s8.NOTHING &&
              t.Z.updateGuildNotificationSettings(
                e,
                {
                  message_notifications: l.bL.NO_MESSAGES,
                  flags: (0, o.Q4)(a, s.vc.UNREADS_ONLY_MENTIONS),
                },
                i.ZB.PresetNothing,
              );
      }
    },
    60179: function (e, n, a) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    736475: function (e, n, a) {
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
    202370: function (e, n, a) {
      e.exports = {
        advanceSetting: "advanceSetting_c82c09",
        advanceSettingTitle: "advanceSettingTitle_c82c09",
        settingTitleIcon: "settingTitleIcon_c82c09",
      };
    },
    805747: function (e, n, a) {
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
    647200: function (e, n, a) {
      e.exports = { input: "input_eb7a62" };
    },
    235968: function (e, n, a) {
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
    871839: function (e, n, a) {
      e.exports = { mutedConfig: "mutedConfig_f7fdc7" };
    },
    942748: function (e, n, a) {
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
    364966: function (e, n, a) {
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
    618900: function (e, n, a) {
      e.exports = {
        container: "container_ff235c",
        containerActive: "containerActive_ff235c",
        playButton: "playButton_ff235c",
        textContainer: "textContainer_ff235c",
      };
    },
    999317: function (e, n, a) {
      e.exports = {
        container: "container_b118e0",
        nitroWheel: "nitroWheel_b118e0",
        text: "text_b118e0",
        nitroButton: "nitroButton_b118e0",
      };
    },
  },
]);
//# sourceMappingURL=20329e61834777675a2a.js.map
