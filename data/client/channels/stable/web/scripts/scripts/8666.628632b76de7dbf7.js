"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8666"],
  {
    569745(I, E, _) {
      _.d(E, { Q: () => i });
      var T = _(302495),
        B = _(334465),
        V = _(901123);
      let d = new Set([
        V.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
        V.BV.APP_WITH_GIFT_CODE(":giftCode"),
        V.BV.APP,
        V.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
        V.BV.SETTINGS(":section", ":subsection?"),
        V.BV.USER_GUILD_NOTIFICATION_SETTINGS(T.p.guildId()),
        V.BV.APPLICATION_LIBRARY_INVENTORY,
        V.BV.WELCOME(
          T.p.guildId({ optional: !0 }),
          T.p.channelId({ optional: !0 }),
        ),
        V.BV.GUILD_EVENT_DETAILS(
          T.p.guildId({ optional: !0 }),
          ":guildEventId",
        ),
        V.BV.GUILD_SETTINGS(T.p.guildId(), ":section?", ":subsection?"),
        V.BV.CHANNEL_THREAD_VIEW(
          T.p.guildId(),
          T.p.channelId(),
          ":threadId",
          ":messageId?",
        ),
        V.BV.CHANNEL(
          T.p.guildId(),
          T.p.channelId({ optional: !0 }),
          ":messageId?",
        ),
        V.BV.ACTIVITY,
        V.BV.ACTIVITIES,
        V.BV.ACTIVITIES_HAPPENING_NOW,
        V.BV.ACTIVITY_DETAILS(":applicationId"),
        V.BV.APPLICATION_LIBRARY,
        V.BV.APPLICATION_STORE,
        V.BV.MESSAGE_REQUESTS,
        V.BV.COLLECTIBLES_SHOP,
        V.BV.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
        V.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
        V.BV.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
        V.BV.GUILD_DISCOVERY,
        V.BV.QUEST_HOME_DEPRECATED,
        V.BV.QUEST_HOME,
        V.BV.ICYMI,
        V.BV.GLOBAL_DISCOVERY,
        V.BV.GUILD_MEMBER_VERIFICATION(T.p.guildId()),
        V.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(T.p.guildId(), ":inviteCode?"),
        V.BV.GUILD_BOOSTING_MARKETING(T.p.guildId()),
        V.BV.GUILD_FEATURE(":feature", T.p.guildId()),
        V.BV.FEATURE(":feature"),
        V.BV.FAMILY_CENTER,
        V.BV.APPLICATION_DIRECTORY,
        V.BV.GAME_SHOP(T.p.guildId(), ":shopSkuId?", ":shopSlug?"),
      ]);
      function i(I) {
        for (let E of d) if (null != (0, B.B)(I, { path: E })) return !0;
        return !1;
      }
    },
    368849(I, E, _) {
      _.d(E, { q: () => B });
      var T = _(264572).Buffer;
      function B(I) {
        try {
          return T.from(JSON.stringify(I)).toString("base64");
        } catch (I) {
          return null;
        }
      }
    },
  },
]);
//# sourceMappingURL=8666.628632b76de7dbf7.js.map
