"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84967"],
  {
    409626(e, i, t) {
      t.d(i, {
        HV: () => u,
        K6: () => C,
        Ob: () => d,
        Tn: () => S,
        V_: () => L,
        Ws: () => m,
        rw: () => p,
        u9: () => k,
      });
      var a,
        n,
        o,
        l = t(132500),
        r = t(99753),
        s = t(954571),
        _ = t(652215),
        c = t(424994),
        m =
          (((a = {})[(a.FollowGame = 0)] = "FollowGame"),
          (a[(a.UnfollowGame = 1)] = "UnfollowGame"),
          (a[(a.ClickMessageUser = 2)] = "ClickMessageUser"),
          (a[(a.SendMessageUser = 3)] = "SendMessageUser"),
          (a[(a.JoinVC = 4)] = "JoinVC"),
          (a[(a.WatchStream = 5)] = "WatchStream"),
          (a[(a.ClickSimilarGame = 6)] = "ClickSimilarGame"),
          (a[(a.WebsiteLink = 7)] = "WebsiteLink"),
          (a[(a.XLink = 8)] = "XLink"),
          (a[(a.YouTubeLink = 9)] = "YouTubeLink"),
          (a[(a.ShowMore = 10)] = "ShowMore"),
          (a[(a.ShowLess = 11)] = "ShowLess"),
          (a[(a.JoinOfficialServer = 12)] = "JoinOfficialServer"),
          (a[(a.ClickImage = 13)] = "ClickImage"),
          (a[(a.GameShop = 14)] = "GameShop"),
          (a[(a.LinkAccount = 15)] = "LinkAccount"),
          (a[(a.ClaimGame = 16)] = "ClaimGame"),
          (a[(a.FacebookLink = 17)] = "FacebookLink"),
          (a[(a.InstagramLink = 18)] = "InstagramLink"),
          (a[(a.BlueskyLink = 19)] = "BlueskyLink"),
          (a[(a.RedditLink = 20)] = "RedditLink"),
          (a[(a.TwitchLink = 21)] = "TwitchLink"),
          (a[(a.SteamStoreLink = 22)] = "SteamStoreLink"),
          (a[(a.EpicStoreLink = 23)] = "EpicStoreLink"),
          (a[(a.RobloxStoreLink = 24)] = "RobloxStoreLink"),
          (a[(a.BattlenetStoreLink = 25)] = "BattlenetStoreLink"),
          (a[(a.RiotStoreLink = 26)] = "RiotStoreLink"),
          (a[(a.MinecraftStoreLink = 27)] = "MinecraftStoreLink"),
          (a[(a.DiscordCollectiblesShop = 28)] = "DiscordCollectiblesShop"),
          (a[(a.DiscordCollectiblesShopItem = 29)] =
            "DiscordCollectiblesShopItem"),
          (a[(a.GameShopItem = 30)] = "GameShopItem"),
          (a[(a.SteamReviews = 31)] = "SteamReviews"),
          (a[(a.OpenCriticReviews = 32)] = "OpenCriticReviews"),
          (a[(a.Announcements = 33)] = "Announcements"),
          (a[(a.AnnouncementsItem = 34)] = "AnnouncementsItem"),
          (a[(a.CloudPlay = 35)] = "CloudPlay"),
          (a[(a.ClickTrailer = 36)] = "ClickTrailer"),
          (a[(a.Feedback = 37)] = "Feedback"),
          a),
        d =
          (((n = {}).ActivityCard = "activity_card"),
          (n.ActivityCardContextMenu = "activity_card_context_menu"),
          (n.UserProfile = "user_profile"),
          (n.UserProfileCardContextMenu = "user_profile_card_context_menu"),
          (n.SimilarGames = "similar_games"),
          (n.DevTools = "dev_tools"),
          (n.Embed = "embed"),
          (n.RtcPanel = "rtc_panel"),
          (n.FriendsActivityFeed = "friends_activity_feed"),
          (n.MiniGameProfile = "mini_game_profile"),
          (n.GameMention = "game_mention"),
          (n.GameSheet = "game_sheet"),
          (n.QuestBar = "quest_bar"),
          (n.QuestHome = "quest_home_desktop"),
          (n.QuestActivityPanel = "quest_activity_panel"),
          (n.QuestEmbed = "quest_embed"),
          (n.QuestLiveStream = "quest_live_stream"),
          (n.ClipEmbed = "clip_embed"),
          (n.AnnouncementChannelReturn = "announcement_channel_return"),
          (n.CallTile = "call_tile"),
          (n.InAppBrowserReturn = "in_app_browser_return"),
          n),
        u =
          (((o = {}).FullProfile = "full_profile"),
          (o.MiniProfile = "mini_profile"),
          o);
      let k = () => (0, l.A)(),
        p = (e) => {
          let {
            viewId: i,
            source: t,
            gameName: a,
            gameId: n,
            authorId: o,
            profileType: l,
          } = e;
          return (
            s.default.track(_.HAw.GAME_PROFILE_OPEN, {
              view_id: i,
              source: t,
              game_name: a,
              application_id: n,
              author_id: o,
              request_id: r.A.getFeedRequestId(c.X1.GLOBAL_FEED),
              profile_type: l,
            }),
            i
          );
        },
        L = (e) => {
          let {
            viewId: i,
            gameName: t,
            gameId: a,
            playedFriendIds: n,
            playedFriendsData: o,
            similarGames: l,
            officialGuildId: m,
          } = e;
          s.default.track(_.HAw.GAME_PROFILE_CLOSE, {
            view_id: i,
            game_name: t,
            application_id: a,
            played_friend_ids: n,
            played_friends_data: o,
            similar_games: l,
            request_id: r.A.getFeedRequestId(c.X1.GLOBAL_FEED),
            official_guild_id: m,
          });
        },
        S = (e) => {
          let {
            gameName: i,
            gameId: t,
            action: a,
            recipientUserId: n,
            similarGameId: o,
            viewId: l,
            officialGuildId: r,
            source: c,
          } = e;
          s.default.track(_.HAw.GAME_PROFILE_ACTION, {
            game_name: i,
            application_id: t,
            action: a,
            recipient_user_id: n,
            similar_game_id: o,
            view_id: l,
            official_guild_id: r,
            source: c,
          });
        },
        C = (e) => {
          let {
            viewId: i,
            applicationId: t,
            suggestedGameName: a,
            suggestedGameApplicationId: n,
            feedback: o,
            submitted: l,
          } = e;
          return s.default.track(_.HAw.GAME_PROFILE_FEEDBACK, {
            view_id: i,
            application_id: t,
            suggested_game_name: a,
            suggested_game_application_id: n,
            feedback: o,
            submitted: l,
          });
        };
    },
  },
]);
//# sourceMappingURL=84967.595851db356e7e57.js.map
