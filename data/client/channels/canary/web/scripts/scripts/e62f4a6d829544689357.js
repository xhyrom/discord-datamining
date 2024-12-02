"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2958"],
  {
    526232: function (e) {
      e.exports = "/assets/a30f1f73b76c0a00e345.svg";
    },
    818276: function (e) {
      e.exports = "/assets/645fa840d8b2b6da92a5.svg";
    },
    494831: function (e, t, n) {
      n.d(t, {
        Cl: function () {
          return s;
        },
        ey: function () {
          return _;
        },
      });
      var r,
        i,
        a = n(149765),
        o = n(692547),
        l = n(700785),
        d = n(981631),
        c = n(388032);
      let s = 371,
        _ = 30;
      ((r = i || (i = {}))[(r.COSMETIC = 0)] = "COSMETIC"),
        (r[(r.MEMBER = 1)] = "MEMBER"),
        (r[(r.MODERATOR = 2)] = "MODERATOR"),
        (r[(r.MANAGER = 3)] = "MANAGER");
      let b = l.TP;
      a.Od(b, d.Plq.MENTION_EVERYONE);
      let u = a.$e(
          b,
          d.Plq.VIEW_AUDIT_LOG,
          d.Plq.MANAGE_NICKNAMES,
          d.Plq.KICK_MEMBERS,
          d.Plq.BAN_MEMBERS,
          d.Plq.MANAGE_MESSAGES,
          d.Plq.MUTE_MEMBERS,
          d.Plq.DEAFEN_MEMBERS,
          d.Plq.MOVE_MEMBERS,
          d.Plq.PRIORITY_SPEAKER,
          d.Plq.MODERATE_MEMBERS,
        ),
        f = a.$e(
          u,
          d.Plq.MANAGE_CHANNELS,
          d.Plq.MANAGE_THREADS,
          d.Plq.MANAGE_ROLES,
          d.Plq.MANAGE_GUILD_EXPRESSIONS,
          d.Plq.MANAGE_GUILD,
          d.Plq.MANAGE_WEBHOOKS,
          d.Plq.SEND_TTS_MESSAGES,
        );
      a.IH(f, d.Plq.VIEW_GUILD_ANALYTICS),
        o.Z.unsafe_rawColors.BRAND_500.css,
        l.Hn,
        o.Z.unsafe_rawColors.GREEN_360.css,
        o.Z.unsafe_rawColors.YELLOW_300.css,
        o.Z.unsafe_rawColors.RED_400.css,
        () => c.intl.string(c.t["7Dkb6+"]);
    },
    631969: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        o = n(348604);
      function l(e) {
        let { className: t } = e;
        return (0, r.jsx)("div", { className: a()(o.image, t) });
      }
    },
    312146: function (e, t, n) {
      n.d(t, {
        Ui: function () {
          return o;
        },
        p$: function () {
          return d;
        },
      });
      var r = n(818083),
        i = n(981631);
      let a = (0, r.B)({
        kind: "guild",
        id: "2023-03_guild_media_channel",
        label: "Media Channel",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables guild to create a media channel",
            config: { enabled: !0 },
          },
        ],
      });
      function o(e) {
        var t;
        let { enabled: n } = a.useExperiment(
          {
            guildId:
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : i.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && n;
      }
      let l = (0, r.B)({
        kind: "user",
        id: "2023-04_guild_media_channel_post_preview_embed_users",
        label: "Guild Role Subscription Users",
        defaultConfig: { enabledForUser: !1 },
        treatments: [
          {
            id: 1,
            label: "Enables for users Guild Media Post Preview Embeds",
            config: { enabledForUser: !0 },
          },
        ],
      });
      function d() {
        let { enabledForUser: e } = l.useExperiment(
          { location: "96e84c_2" },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    60222: function (e, t, n) {
      n.d(t, {
        A: function () {
          return o;
        },
        m: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(442837),
        i = n(430824),
        a = n(981631);
      function o(e) {
        var t;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [i.Z];
        return !!(null === (t = n.getGuild(e)) || void 0 === t
          ? void 0
          : t.hasFeature(a.oNc.COMMUNITY));
      }
      function l(e) {
        return (0, r.e7)([i.Z], () => o(e, [i.Z]), [e]);
      }
    },
    272786: function (e, t, n) {
      e.exports = {
        container: "container_effbe2",
        inner: "inner_effbe2",
        disabled: "disabled_effbe2",
        input: "input_effbe2",
        tag: "tag_effbe2",
        small: "small_effbe2",
        medium: "medium_effbe2",
        large: "large_effbe2",
        richTag: "richTag_effbe2",
        richTagInput: "richTagInput_effbe2",
        tagLabel: "tagLabel_effbe2",
        tagRoleColor: "tagRoleColor_effbe2",
        close: "close_effbe2",
        iconLayout: "iconLayout_effbe2",
        iconContainer: "iconContainer_effbe2",
        icon: "icon_effbe2",
        visible: "visible_effbe2",
        clear: "clear_effbe2",
      };
    },
    355069: function (e, t, n) {
      e.exports = {
        modal: "modal_b545d5 " + n("763971").scrollbarGhostHairline,
        modalContent: "modalContent_b545d5",
        modalFooter: "modalFooter_b545d5",
        name: "name_b545d5",
        type: "type_b545d5",
        channelNameNote: "channelNameNote_b545d5",
        icon: "icon_b545d5",
        error: "error_b545d5",
        header: "header_b545d5",
        title: "title_b545d5",
        subtitle: "subtitle_b545d5",
        subtitleIcon: "subtitleIcon_b545d5",
        closeButton: "closeButton_b545d5",
        sectionTitle: "sectionTitle_b545d5",
        foreground: "foreground_b545d5",
        inputWrapper: "inputWrapper_b545d5",
        inputInner: "inputInner_b545d5",
        inputPrefix: "inputPrefix_b545d5",
        switchIcon: "switchIcon_b545d5",
        storeChannelOptionSelector: "storeChannelOptionSelector_b545d5",
        channelTypeDescription: "channelTypeDescription_b545d5",
        addMembersContainer: "addMembersContainer_b545d5",
        addMemberError: "addMemberError_b545d5",
        createError: "createError_b545d5",
        radioLabelName: "radioLabelName_b545d5",
        radioLabelDescription: "radioLabelDescription_b545d5",
        newBadge: "newBadge_b545d5",
        radioBar: "radioBar_b545d5",
        radioBarLabel: "radioBarLabel_b545d5",
        radioBarIcon: "radioBarIcon_b545d5",
        radioItemName: "radioItemName_b545d5",
      };
    },
    612432: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_a0cc0d",
        button: "button_a0cc0d",
        header: "header_a0cc0d",
        headerSubtitle: "headerSubtitle_a0cc0d",
        alignCenter: "alignCenter_a0cc0d",
        headerSubtitleIcon: "headerSubtitleIcon_a0cc0d",
        content: "content_a0cc0d",
        searchBox: "searchBox_a0cc0d",
        roleMemberList: "roleMemberList_a0cc0d",
        addMemberRow: "addMemberRow_a0cc0d",
        selectedRow: "selectedRow_a0cc0d",
        rowBody: "rowBody_a0cc0d",
        checkboxLabel: "checkboxLabel_a0cc0d",
        rowHeight: "rowHeight_a0cc0d",
        rowLabel: "rowLabel_a0cc0d",
        rowLabelSubText: "rowLabelSubText_a0cc0d",
        sectionTitle: "sectionTitle_a0cc0d",
        noResultIcon: "noResultIcon_a0cc0d",
        description: "description_a0cc0d",
        scrollSeparator: "scrollSeparator_a0cc0d",
      };
    },
    259597: function (e, t, n) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    348604: function (e, t, n) {
      e.exports = { image: "image_fea561" };
    },
    105167: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_d3497c",
        header: "header_d3497c",
        headerSubtitle: "headerSubtitle_d3497c",
        headerSubtitleIcon: "headerSubtitleIcon_d3497c",
        error: "error_d3497c",
      };
    },
  },
]);
//# sourceMappingURL=e62f4a6d829544689357.js.map
