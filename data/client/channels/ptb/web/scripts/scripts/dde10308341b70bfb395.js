"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77389"],
  {
    797671: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n(653041),
        n(47120),
        n(773603);
      var r = n(200651),
        o = n(192379),
        i = n(990547),
        a = n(442837),
        l = n(283693),
        d = n(481060),
        c = n(218613),
        s = n(911969),
        u = n(600164),
        b = n(313201),
        p = n(456269),
        _ = n(408987),
        m = n(312146),
        h = n(60222),
        x = n(131704),
        g = n(324067),
        I = n(430824),
        f = n(259580),
        v = n(934415),
        B = n(700785),
        C = n(573261),
        N = n(981631),
        E = n(231338),
        L = n(388032),
        j = n(570190);
      function w(e) {
        var t, n;
        let { guildId: w, transitionState: S, onSubmit: y, onClose: k } = e,
          T = (0, b.Dt)(),
          D = (0, b.Dt)(),
          M = (0, b.Dt)(),
          R = (0, b.Dt)(),
          [G, U] = o.useState(N.Sc2),
          [F, H] = o.useState(N.d4z.GUILD_TEXT),
          [P, W] = o.useState(""),
          [Z, A] = o.useState(!1),
          O = (0, a.e7)([I.Z], () => I.Z.getGuild(w), [w]),
          V = (0, h.m)(w),
          z = (0, p.W3)(w),
          X = (0, m.Ui)(O),
          q = o.useMemo(
            () =>
              (function (e) {
                let {
                    canCreateStageChannel: t,
                    canCreateForumChannel: n,
                    canCreateMediaChannel: o,
                  } = e,
                  i = [
                    {
                      icon: d.TextIcon,
                      label: L.intl.string(L.t.pnuRXF),
                      value: N.d4z.GUILD_TEXT,
                      description: L.intl.string(L.t.Hf5Lb2),
                    },
                    {
                      icon: d.VoiceNormalIcon,
                      label: L.intl.string(L.t.Sx55Oj),
                      value: N.d4z.GUILD_VOICE,
                      description: L.intl.string(L.t.pqfkoK),
                    },
                  ];
                return (
                  t &&
                    i.push({
                      icon: d.StageIcon,
                      label: L.intl.string(L.t.pNWst7),
                      value: N.d4z.GUILD_STAGE_VOICE,
                      description: L.intl.string(L.t.VPAwgo),
                    }),
                  n &&
                    (i.push({
                      icon: d.ForumIcon,
                      label: L.intl.string(L.t.eAVIDw),
                      value: N.d4z.GUILD_FORUM,
                      description: L.intl.string(L.t.iZ5pgo),
                    }),
                    o &&
                      i.push({
                        icon: d.ImageIcon,
                        label: L.intl.string(L.t["6x6fVl"]),
                        value: N.d4z.GUILD_MEDIA,
                        description: L.intl.string(L.t.JyCrwc),
                        isBeta: !0,
                      })),
                  i.map((e) => {
                    let {
                      icon: t,
                      label: n,
                      value: o,
                      description: i,
                      isBeta: a,
                    } = e;
                    return {
                      name: (0, r.jsxs)("div", {
                        className: j.channelOptionWrapper,
                        children: [
                          (0, r.jsx)(t, { className: j.icon }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                color: "header-primary",
                                children: [
                                  n,
                                  (0, r.jsx)(c.ChannelTypeBadge, { isBeta: a }),
                                ],
                              }),
                              (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: i,
                              }),
                            ],
                          }),
                        ],
                      }),
                      value: o,
                      channelIcon: t,
                    };
                  })
                );
              })({
                canCreateStageChannel: V,
                canCreateForumChannel: z,
                canCreateMediaChannel: X,
              }),
            [V, z, X],
          ),
          J = (0, a.e7)([g.Z], () => g.Z.getCategories(w)._categories, [w]),
          K = o.useMemo(
            () =>
              J.map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: t.name };
              }),
            [J],
          ),
          Y =
            null !==
              (n =
                null === (t = q.find((e) => e.value === F)) || void 0 === t
                  ? void 0
                  : t.channelIcon) && void 0 !== n
              ? n
              : E.Vq,
          $ = "" !== P;
        return (0, r.jsx)("form", {
          onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            A(!0);
            let t = {
              type: F,
              name: P,
              parent_id: "null" !== G ? G : void 0,
              permission_overwrites: [
                {
                  id: w,
                  type: s.BN.ROLE,
                  allow: B.Hn,
                  deny: N.Plq.VIEW_CHANNEL,
                },
              ],
            };
            C.Z.post({
              url: N.ANM.GUILD_CHANNELS(w),
              body: t,
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                  var t, n;
                  return (0, l.iG)({
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
                        : null === (n = e.body) || void 0 === n
                          ? void 0
                          : n.type,
                  });
                },
              },
              rejectWithError: !0,
            })
              .then(
                (e) => {
                  _.Z.checkGuildTemplateDirty(w), y(e.body.id), k();
                },
                (e) => {},
              )
              .finally(() => {
                A(!1);
              });
          },
          children: (0, r.jsxs)(d.ModalRoot, {
            transitionState: S,
            "aria-labelledby": T,
            children: [
              (0, r.jsxs)(d.ModalHeader, {
                children: [
                  (0, r.jsx)(d.Heading, {
                    id: T,
                    variant: "heading-md/semibold",
                    children: L.intl.string(L.t["fUYU+v"]),
                  }),
                  (0, r.jsx)(d.ModalCloseButton, {
                    className: j.closeButton,
                    onClick: k,
                  }),
                ],
              }),
              (0, r.jsxs)(d.ModalContent, {
                className: j.modalContent,
                children: [
                  (0, r.jsx)(d.FormItem, {
                    title: L.intl.string(L.t.vHCZws),
                    titleId: D,
                    children: (0, r.jsx)(d.SingleSelect, {
                      placeholder: L.intl.string(L.t["g/Rr2d"]),
                      value: G,
                      options: K,
                      onChange: (e) => U(e),
                      "aria-labelledby": D,
                    }),
                  }),
                  (0, r.jsx)("div", { className: j.spacer }),
                  (0, r.jsx)(d.FormItem, {
                    title: L.intl.string(L.t["7ZcXGx"]),
                    titleId: M,
                    children: (0, r.jsx)(d.RadioGroup, {
                      options: q,
                      value: F,
                      onChange: (e) => {
                        let { value: t } = e;
                        return H(t);
                      },
                      "aria-labelledby": M,
                    }),
                  }),
                  (0, r.jsx)("div", { className: j.spacer }),
                  (0, r.jsx)(d.FormItem, {
                    title: L.intl.string(L.t.PVbHDg),
                    titleId: R,
                    children: (0, r.jsx)(d.TextInput, {
                      value: P,
                      onChange: function (e) {
                        (0, x.zi)(F) && (e = (0, v.Nj)(e)), W(e);
                      },
                      maxLength: N.HN8,
                      placeholder: L.intl.string(L.t["bw/b8P"]),
                      className: j.inputWrapper,
                      inputClassName: j.inputInner,
                      prefixElement: (0, r.jsx)(Y, {
                        className: j.inputPrefix,
                        color: "currentColor",
                        "aria-hidden": !0,
                      }),
                      "aria-labelledby": R,
                      autoFocus: !0,
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(d.ModalFooter, {
                justify: u.Z.Justify.BETWEEN,
                children: [
                  (0, r.jsx)(d.Button, {
                    type: "submit",
                    submitting: Z,
                    disabled: !$,
                    children: L.intl.string(L.t.R3BPHx),
                  }),
                  (0, r.jsxs)(d.Button, {
                    look: d.Button.Looks.LINK,
                    color: d.Button.Colors.PRIMARY,
                    className: j.backButton,
                    innerClassName: j.backButtonInner,
                    onClick: k,
                    children: [
                      (0, r.jsx)(f.Z, { direction: f.Z.Directions.LEFT }),
                      L.intl.string(L.t["13/7kZ"]),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    312146: function (e, t, n) {
      n.d(t, {
        Ui: function () {
          return a;
        },
        p$: function () {
          return d;
        },
      });
      var r = n(818083),
        o = n(981631);
      let i = (0, r.B)({
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
      function a(e) {
        var t;
        let { enabled: n } = i.useExperiment(
          {
            guildId:
              null !== (t = null == e ? void 0 : e.id) && void 0 !== t
                ? t
                : o.lds,
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
    570190: function (e, t, n) {
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
//# sourceMappingURL=dde10308341b70bfb395.js.map
