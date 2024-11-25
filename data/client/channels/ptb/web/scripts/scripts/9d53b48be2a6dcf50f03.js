"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86962"],
  {
    333848: function (e, n, c) {
      c(411104);
      var i = c(990547),
        r = c(283693),
        t = c(570140),
        a = c(408987),
        o = c(9156),
        d = c(621600),
        l = c(573261),
        _ = c(87051),
        p = c(981631),
        s = c(526761);
      n.Z = {
        createChannel(e) {
          let {
            guildId: n,
            type: c,
            name: u,
            permissionOverwrites: h = [],
            bitrate: v,
            userLimit: b,
            parentId: C,
            skuId: E,
            branchId: g,
          } = e;
          t.Z.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
          let A = { type: c, name: u, permission_overwrites: h };
          if (
            (null != v && v !== p.epw && (A.bitrate = v),
            null != b && b > 0 && (A.user_limit = b),
            null != C && (A.parent_id = C),
            c === p.d4z.GUILD_STORE)
          ) {
            if (null == E) throw Error("Unexpected missing SKU");
            (A.sku_id = E), (A.branch_id = g);
          }
          return l.Z.post({
            url: p.ANM.GUILD_CHANNELS(n),
            body: A,
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) => {
                var n, c;
                return (0, r.iG)({
                  is_private: h.length > 0,
                  channel_id:
                    null == e
                      ? void 0
                      : null === (n = e.body) || void 0 === n
                        ? void 0
                        : n.id,
                  channel_type:
                    null == e
                      ? void 0
                      : null === (c = e.body) || void 0 === c
                        ? void 0
                        : c.type,
                });
              },
            },
            rejectWithError: !1,
          }).then(
            (e) => (
              o.ZP.isOptInEnabled(n) &&
                _.Z.updateChannelOverrideSettings(
                  n,
                  e.body.id,
                  { flags: s.ic.OPT_IN_ENABLED },
                  d.ZB.OptedIn,
                ),
              a.Z.checkGuildTemplateDirty(n),
              e
            ),
            (e) => {
              throw (
                (t.Z.dispatch({
                  type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e)
              );
            },
          );
        },
        createRoleSubscriptionTemplateChannel: (e, n, c, t) =>
          l.Z.post({
            url: p.ANM.GUILD_CHANNELS(e),
            body: { name: n, type: c, topic: t },
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) => {
                var n, c;
                return (0, r.iG)({
                  is_private: !0,
                  channel_id:
                    null == e
                      ? void 0
                      : null === (n = e.body) || void 0 === n
                        ? void 0
                        : n.id,
                  channel_type:
                    null == e
                      ? void 0
                      : null === (c = e.body) || void 0 === c
                        ? void 0
                        : c.type,
                });
              },
            },
            rejectWithError: !1,
          }),
      };
    },
    596622: function (e, n, c) {
      e.exports = {
        card: "card_cc2c09",
        lurking: "lurking_cc2c09",
        padding: "padding_cc2c09",
        isRecurring: "isRecurring_cc2c09",
        joined: "joined_cc2c09",
        inline: "inline_cc2c09",
        guildIcon: "guildIcon_cc2c09",
        channelContainer: "channelContainer_cc2c09",
        channelContainerEnabled: "channelContainerEnabled_cc2c09",
        channelContainerDisabled: "channelContainerDisabled_cc2c09",
        icon: "icon_cc2c09",
        spacing: "spacing_cc2c09",
        divider: "divider_cc2c09",
        footer: "footer_cc2c09",
        channelLocation: "channelLocation_cc2c09 label_cc2c09",
        externalLocation: "externalLocation_cc2c09 label_cc2c09",
      };
    },
    184617: function (e, n, c) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    393219: function (e, n, c) {
      e.exports = {
        content: "content_dec63a",
        previewCard: "previewCard_dec63a",
        inline: "inline_dec63a",
        header: "header_dec63a",
        privacyLevel: "privacyLevel_dec63a inline_dec63a",
        buttons: "buttons_dec63a",
        button: "button_dec63a",
        publicIcon: "publicIcon_dec63a",
        spacing: "spacing_dec63a",
        verticalSpacing: "verticalSpacing_dec63a",
        errorMessage: "errorMessage_dec63a",
      };
    },
  },
]);
//# sourceMappingURL=9d53b48be2a6dcf50f03.js.map
