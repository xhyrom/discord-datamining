"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98125"],
  {
    84540(e, n, a) {
      a.d(n, { p: () => d });
      var i = a(228366),
        l = a(696451),
        o = a(287809),
        r = a(841595);
      let d = (e) => {
        let { guildId: n, ...a } = e,
          d = o.default.getCurrentUser();
        if (null == d) return;
        let t =
            null == n
              ? r.A.getUserProfile(d.id)
              : r.A.getGuildMemberProfile(d.id, n),
          p = null != n ? l.Ay.getMember(n, d.id) : null,
          s = {};
        "globalName" in a &&
          (a.globalName === d.globalName ||
          ("" === a.globalName && null === d.globalName)
            ? (s.pendingGlobalName = void 0)
            : (s.pendingGlobalName = a.globalName)),
          "nickname" in a &&
            (a.nickname === p?.nick || ("" === a.nickname && p?.nick === null)
              ? (s.pendingNickname = void 0)
              : (s.pendingNickname = a.nickname)),
          "displayNameStyles" in a &&
            (s.pendingDisplayNameStyles = a.displayNameStyles),
          "pronouns" in a &&
            (a.pronouns === t?.pronouns
              ? (s.pendingPronouns = void 0)
              : (s.pendingPronouns = a.pronouns)),
          "avatar" in a &&
            ((null != n && a.avatar?.imageUri === p?.avatar) ||
            (null == n && a.avatar?.imageUri === d.avatar)
              ? (s.pendingAvatar = void 0)
              : (s.pendingAvatar = a.avatar)),
          "avatarDecoration" in a &&
            ((null != n &&
              a.avatarDecoration?.skuId === p?.avatarDecoration?.skuId) ||
            (null == n &&
              a.avatarDecoration?.skuId === d.avatarDecoration?.skuId)
              ? (s.pendingAvatarDecoration = void 0)
              : (s.pendingAvatarDecoration = a.avatarDecoration)),
          "nameplate" in a &&
            ((null != n &&
              a.nameplate?.skuId === p?.collectibles?.nameplate?.skuId) ||
            (null == n &&
              a.nameplate?.skuId === d.collectibles?.nameplate?.skuId)
              ? (s.pendingNameplate = void 0)
              : (s.pendingNameplate = a.nameplate)),
          "profileEffect" in a &&
            (a.profileEffect?.skuId === t?.profileEffect?.skuId
              ? (s.pendingProfileEffect = void 0)
              : (s.pendingProfileEffect = a.profileEffect)),
          "profileFrame" in a &&
            (a.profileFrame?.skuId === t?.profileFrame?.skuId
              ? (s.pendingProfileFrame = void 0)
              : (s.pendingProfileFrame = a.profileFrame)),
          "banner" in a &&
            ((null != n && a.banner === p?.banner) ||
            (null == n && a.banner === d.banner)
              ? (s.pendingBanner = void 0)
              : (s.pendingBanner = a.banner)),
          "accentColor" in a && (s.pendingAccentColor = a.accentColor),
          "themeColors" in a &&
            ((a.themeColors?.[0] == null || a.themeColors?.[1] == null) &&
            t?.themeColors == null
              ? (s.pendingThemeColors = void 0)
              : (s.pendingThemeColors = a.themeColors)),
          "bio" in a &&
            (a.bio === t?.bio
              ? (s.pendingBio = void 0)
              : (s.pendingBio = a.bio)),
          "primaryGuildId" in a && (s.pendingPrimaryGuildId = a.primaryGuildId),
          "legacyUsernameDisabled" in a &&
            (s.pendingLegacyUsernameDisabled = a.legacyUsernameDisabled),
          i.h.dispatch({
            type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
            guildId: n,
            ...s,
          });
      };
    },
  },
]);
//# sourceMappingURL=98125.231c1180e736a956.js.map
