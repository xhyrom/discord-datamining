"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2367"],
  {
    797671: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return f;
          },
        }),
        t(653041),
        t(47120),
        t(773603);
      var n = t(735250),
        o = t(470079),
        r = t(990547),
        i = t(442837),
        l = t(283693),
        d = t(481060),
        s = t(218613),
        c = t(911969),
        u = t(600164),
        _ = t(313201),
        b = t(456269),
        p = t(408987),
        E = t(312146),
        m = t(60222),
        h = t(131704),
        N = t(324067),
        C = t(430824),
        I = t(259580),
        x = t(934415),
        L = t(700785),
        g = t(573261),
        T = t(981631),
        M = t(231338),
        A = t(689938),
        v = t(856748);
      function f(e) {
        var a, t;
        let { guildId: f, transitionState: B, onSubmit: R, onClose: S } = e,
          D = (0, _.Dt)(),
          j = (0, _.Dt)(),
          H = (0, _.Dt)(),
          Z = (0, _.Dt)(),
          [y, O] = o.useState(T.Sc2),
          [k, w] = o.useState(T.d4z.GUILD_TEXT),
          [P, G] = o.useState(""),
          [F, U] = o.useState(!1),
          W = (0, i.e7)([C.Z], () => C.Z.getGuild(f), [f]),
          V = (0, m.m)(f),
          Y = (0, b.W3)(f),
          z = (0, E.Ui)(W),
          X = o.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: a,
                    canCreateForumChannel: t,
                    canCreateMediaChannel: o,
                  } = e,
                  r = [
                    {
                      icon: d.TextIcon,
                      label: A.Z.Messages.TEXT_CHANNEL_TYPE,
                      value: T.d4z.GUILD_TEXT,
                      description: A.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION,
                    },
                    {
                      icon: d.VoiceNormalIcon,
                      label: A.Z.Messages.VOICE_CHANNEL_TYPE,
                      value: T.d4z.GUILD_VOICE,
                      description:
                        A.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION,
                    },
                  ];
                return (
                  a &&
                    r.push({
                      icon: d.StageIcon,
                      label: A.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                      value: T.d4z.GUILD_STAGE_VOICE,
                      description:
                        A.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION,
                    }),
                  t &&
                    (r.push({
                      icon: d.ForumIcon,
                      label: A.Z.Messages.FORUM_CHANNEL_TYPE,
                      value: T.d4z.GUILD_FORUM,
                      description: A.Z.Messages.FORUM_CHANNEL_DESCRIPTION,
                    }),
                    o &&
                      r.push({
                        icon: d.ImageIcon,
                        label: A.Z.Messages.MEDIA_CHANNEL_TYPE,
                        value: T.d4z.GUILD_MEDIA,
                        description:
                          A.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                        isBeta: !0,
                      })),
                  r.map((e) => {
                    let {
                      icon: a,
                      label: t,
                      value: o,
                      description: r,
                      isBeta: i,
                    } = e;
                    return {
                      name: (0, n.jsxs)("div", {
                        className: v.channelOptionWrapper,
                        children: [
                          (0, n.jsx)(a, { className: v.icon }),
                          (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  t,
                                  (0, n.jsx)(s.ChannelTypeBadge, { isBeta: i }),
                                ],
                              }),
                              (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: o,
                      channelIcon: a,
                    };
                  })
                );
              })({
                canCreateStageChannel: V,
                canCreateForumChannel: Y,
                canCreateMediaChannel: z,
              }),
            [V, Y, z],
          ),
          q = (0, i.e7)([N.Z], () => N.Z.getCategories(f)._categories, [f]),
          K = o.useMemo(
            () =>
              q.map((e) => {
                let { channel: a } = e;
                return { value: a.id, label: a.name };
              }),
            [q],
          ),
          J =
            null !==
              (t =
                null === (a = X.find((e) => e.value === k)) || void 0 === a
                  ? void 0
                  : a.channelIcon) && void 0 !== t
              ? t
              : M.Vq,
          $ = "" !== P;
        return (0, n.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            U(!0);
            let a = {
              type: k,
              name: P,
              parent_id: "null" !== y ? y : void 0,
              permission_overwrites: [
                {
                  id: f,
                  type: c.BN.ROLE,
                  allow: L.Hn,
                  deny: T.Plq.VIEW_CHANNEL,
                },
              ],
            };
            g.Z.post({
              url: T.ANM.GUILD_CHANNELS(f),
              body: a,
              oldFormErrors: !0,
              trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                  var a, t;
                  return (0, l.iG)({
                    is_private: !0,
                    channel_id:
                      null == e
                        ? void 0
                        : null === (a = e.body) || void 0 === a
                          ? void 0
                          : a.id,
                    channel_type:
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.type,
                  });
                },
              },
            })
              .then(
                (e) => {
                  p.Z.checkGuildTemplateDirty(f), R(e.body.id), S();
                },
                (e) => {},
              )
              .finally(() => {
                U(!1);
              });
          },
          children: (0, n.jsxs)(d.ModalRoot, {
            transitionState: B,
            "aria-labelledby": D,
            children: [
              (0, n.jsxs)(d.ModalHeader, {
                children: [
                  (0, n.jsx)(d.Heading, {
                    id: D,
                    variant: "heading-md/semibold",
                    children: A.Z.Messages.CREATE_CHANNEL,
                  }),
                  (0, n.jsx)(d.ModalCloseButton, {
                    className: v.closeButton,
                    onClick: S,
                  }),
                ],
              }),
              (0, n.jsxs)(d.ModalContent, {
                className: v.modalContent,
                children: [
                  (0, n.jsx)(d.FormItem, {
                    title: A.Z.Messages.CATEGORY,
                    titleId: j,
                    children: (0, n.jsx)(d.SingleSelect, {
                      placeholder:
                        A.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                      value: y,
                      options: K,
                      onChange: (e) => O(e),
                      "aria-labelledby": j,
                    }),
                  }),
                  (0, n.jsx)("div", { className: v.spacer }),
                  (0, n.jsx)(d.FormItem, {
                    title: A.Z.Messages.CHANNEL_TYPE,
                    titleId: H,
                    children: (0, n.jsx)(d.RadioGroup, {
                      options: X,
                      value: k,
                      onChange: (e) => {
                        let { value: a } = e;
                        return w(a);
                      },
                      "aria-labelledby": H,
                    }),
                  }),
                  (0, n.jsx)("div", { className: v.spacer }),
                  (0, n.jsx)(d.FormItem, {
                    title: A.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                    titleId: Z,
                    children: (0, n.jsx)(d.TextInput, {
                      value: P,
                      onChange: function (e) {
                        (0, h.zi)(k) && (e = (0, x.Nj)(e)), G(e);
                      },
                      maxLength: T.HN8,
                      placeholder: A.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
                      className: v.inputWrapper,
                      inputClassName: v.inputInner,
                      prefixElement: (0, n.jsx)(J, {
                        className: v.inputPrefix,
                        color: "currentColor",
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": Z,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(d.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                children: [
                  (0, n.jsx)(d.Button, {
                    type: "submit",
                    submitting: F,
                    disabled: !$,
                    children: A.Z.Messages.SAVE,
                  }),
                  (0, n.jsxs)(d.Button, {
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    className: v.backButton,
                    innerClassName: v.backButtonInner,
                    onClick: S,
                    children: [
                      (0, n.jsx)(I.Z, { direction: I.Z.Directions.LEFT }),
                      A.Z.Messages.BACK,
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    312146: function (e, a, t) {
      t.d(a, {
        Ui: function () {
          return i;
        },
        p$: function () {
          return d;
        },
      });
      var n = t(818083),
        o = t(981631);
      let r = (0, n.B)({
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
      function i(e) {
        var a;
        let { enabled: t } = r.useExperiment(
          {
            guildId:
              null !== (a = null == e ? void 0 : e.id) && void 0 !== a
                ? a
                : o.lds,
            location: "96e84c_1",
          },
          { autoTrackExposure: !0 },
        );
        return (null == e ? void 0 : e.id) != null && t;
      }
      let l = (0, n.B)({
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
    866957: function (e, a, t) {
      e.exports = {
        modal: "modal_b545d5 " + t("594402").scrollbarGhostHairline,
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
    779077: function (e, a, t) {
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
    990801: function (e, a, t) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    856748: function (e, a, t) {
      e.exports = {
        closeButton: "closeButton_b82088",
        modalContent: "modalContent_b82088",
        channelOptionWrapper: "channelOptionWrapper_b82088",
        spacer: "spacer_b82088",
        icon: "icon_b82088",
        inputWrapper: "inputWrapper_b82088",
        inputInner: "inputInner_b82088",
        inputPrefix: "inputPrefix_b82088",
        backButton: "backButton_b82088",
        backButtonInner: "backButtonInner_b82088",
      };
    },
    888112: function (e, a, t) {
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
//# sourceMappingURL=24cae519072e8e9567e0.js.map
