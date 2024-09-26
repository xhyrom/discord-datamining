"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2460"],
  {
    797671: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return R;
          },
        }),
        a(653041),
        a(47120),
        a(773603);
      var o = a(735250),
        n = a(470079),
        r = a(990547),
        i = a(442837),
        d = a(283693),
        s = a(481060),
        l = a(218613),
        c = a(911969),
        _ = a(600164),
        u = a(313201),
        b = a(456269),
        p = a(408987),
        E = a(312146),
        h = a(60222),
        m = a(131704),
        N = a(324067),
        C = a(430824),
        I = a(259580),
        L = a(934415),
        x = a(700785),
        T = a(573261),
        A = a(981631),
        M = a(231338),
        g = a(689938),
        B = a(941465);
      function R(e) {
        var t, a;
        let { guildId: R, transitionState: v, onSubmit: S, onClose: D } = e,
          f = (0, u.Dt)(),
          j = (0, u.Dt)(),
          H = (0, u.Dt)(),
          Z = (0, u.Dt)(),
          [y, O] = n.useState(A.Sc2),
          [w, P] = n.useState(A.d4z.GUILD_TEXT),
          [k, G] = n.useState(""),
          [F, U] = n.useState(!1),
          W = (0, i.e7)([C.Z], () => C.Z.getGuild(R), [R]),
          V = (0, h.m)(R),
          Y = (0, b.W3)(R),
          z = (0, E.Ui)(W),
          X = n.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: t,
                    canCreateForumChannel: a,
                    canCreateMediaChannel: n,
                  } = e,
                  r = [
                    {
                      icon: s.TextIcon,
                      label: g.Z.Messages.TEXT_CHANNEL_TYPE,
                      value: A.d4z.GUILD_TEXT,
                      description: g.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION,
                    },
                    {
                      icon: s.VoiceNormalIcon,
                      label: g.Z.Messages.VOICE_CHANNEL_TYPE,
                      value: A.d4z.GUILD_VOICE,
                      description:
                        g.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION,
                    },
                  ];
                return (
                  t &&
                    r.push({
                      icon: s.StageIcon,
                      label: g.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                      value: A.d4z.GUILD_STAGE_VOICE,
                      description:
                        g.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION,
                    }),
                  a &&
                    (r.push({
                      icon: s.ForumIcon,
                      label: g.Z.Messages.FORUM_CHANNEL_TYPE,
                      value: A.d4z.GUILD_FORUM,
                      description: g.Z.Messages.FORUM_CHANNEL_DESCRIPTION,
                    }),
                    n &&
                      r.push({
                        icon: s.ImageIcon,
                        label: g.Z.Messages.MEDIA_CHANNEL_TYPE,
                        value: A.d4z.GUILD_MEDIA,
                        description:
                          g.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                        isBeta: !0,
                      })),
                  r.map((e) => {
                    let {
                      icon: t,
                      label: a,
                      value: n,
                      description: r,
                      isBeta: i,
                    } = e;
                    return {
                      name: (0, o.jsxs)("div", {
                        className: B.channelOptionWrapper,
                        children: [
                          (0, o.jsx)(t, { className: B.icon }),
                          (0, o.jsxs)("div", {
                            children: [
                              (0, o.jsxs)(s.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  a,
                                  (0, o.jsx)(l.ChannelTypeBadge, { isBeta: i }),
                                ],
                              }),
                              (0, o.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: n,
                      channelIcon: t,
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
          q = (0, i.e7)([N.Z], () => N.Z.getCategories(R)._categories, [R]),
          K = n.useMemo(
            () =>
              q.map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: t.name };
              }),
            [q],
          ),
          J =
            null !==
              (a =
                null === (t = X.find((e) => e.value === w)) || void 0 === t
                  ? void 0
                  : t.channelIcon) && void 0 !== a
              ? a
              : M.Vq,
          Q = "" !== k;
        return (0, o.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !Q)) return;
            U(!0);
            let t = {
              type: w,
              name: k,
              parent_id: "null" !== y ? y : void 0,
              permission_overwrites: [
                {
                  id: R,
                  type: c.BN.ROLE,
                  allow: x.Hn,
                  deny: A.Plq.VIEW_CHANNEL,
                },
              ],
            };
            T.Z.post({
              url: A.ANM.GUILD_CHANNELS(R),
              body: t,
              oldFormErrors: !0,
              trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                  var t, a;
                  return (0, d.iG)({
                    is_private: !0,
                    channel_id:
                      null == e
                        ? void 0
                        : null === (t = e.body) || void 0 === t
                          ? void 0
                          : t.id,
                    channel_type:
                      null == e
                        ? void 0
                        : null === (a = e.body) || void 0 === a
                          ? void 0
                          : a.type,
                  });
                },
              },
            })
              .then(
                (e) => {
                  p.Z.checkGuildTemplateDirty(R), S(e.body.id), D();
                },
                (e) => {},
              )
              .finally(() => {
                U(!1);
              });
          },
          children: (0, o.jsxs)(s.ModalRoot, {
            transitionState: v,
            "aria-labelledby": f,
            children: [
              (0, o.jsxs)(s.ModalHeader, {
                children: [
                  (0, o.jsx)(s.Heading, {
                    id: f,
                    variant: "heading-md/semibold",
                    children: g.Z.Messages.CREATE_CHANNEL,
                  }),
                  (0, o.jsx)(s.ModalCloseButton, {
                    className: B.closeButton,
                    onClick: D,
                  }),
                ],
              }),
              (0, o.jsxs)(s.ModalContent, {
                className: B.modalContent,
                children: [
                  (0, o.jsx)(s.FormItem, {
                    title: g.Z.Messages.CATEGORY,
                    titleId: j,
                    children: (0, o.jsx)(s.SingleSelect, {
                      placeholder:
                        g.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                      value: y,
                      options: K,
                      onChange: (e) => O(e),
                      "aria-labelledby": j,
                    }),
                  }),
                  (0, o.jsx)("div", { className: B.spacer }),
                  (0, o.jsx)(s.FormItem, {
                    title: g.Z.Messages.CHANNEL_TYPE,
                    titleId: H,
                    children: (0, o.jsx)(s.RadioGroup, {
                      options: X,
                      value: w,
                      onChange: (e) => {
                        let { value: t } = e;
                        return P(t);
                      },
                      "aria-labelledby": H,
                    }),
                  }),
                  (0, o.jsx)("div", { className: B.spacer }),
                  (0, o.jsx)(s.FormItem, {
                    title: g.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                    titleId: Z,
                    children: (0, o.jsx)(s.TextInput, {
                      value: k,
                      onChange: function (e) {
                        (0, m.zi)(w) && (e = (0, L.Nj)(e)), G(e);
                      },
                      maxLength: A.HN8,
                      placeholder: g.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
                      className: B.inputWrapper,
                      inputClassName: B.inputInner,
                      prefixElement: (0, o.jsx)(J, {
                        className: B.inputPrefix,
                        color: "currentColor",
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": Z,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(s.ModalFooter, {
                justify: _.Z.Justify.BETWEEN,
                children: [
                  (0, o.jsx)(s.Button, {
                    type: "submit",
                    submitting: F,
                    disabled: !Q,
                    children: g.Z.Messages.SAVE,
                  }),
                  (0, o.jsxs)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: s.Button.Colors.PRIMARY,
                    className: B.backButton,
                    innerClassName: B.backButtonInner,
                    onClick: D,
                    children: [
                      (0, o.jsx)(I.Z, { direction: I.Z.Directions.LEFT }),
                      g.Z.Messages.BACK,
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    886974: function (e, t, a) {
      e.exports = {
        modal: "modal_b545d5 " + a("112864").scrollbarGhostHairline,
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
    194419: function (e, t, a) {
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
    631155: function (e, t, a) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    941465: function (e, t, a) {
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
    456573: function (e, t, a) {
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
//# sourceMappingURL=5f92da47833555330379.js.map
