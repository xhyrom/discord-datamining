"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91403"],
  {
    88658: function (e, n, t) {
      t.d(n, {
        $6: function () {
          return d;
        },
        YK: function () {
          return I;
        },
        _o: function () {
          return s;
        },
        ac: function () {
          return E;
        },
        bL: function () {
          return S;
        },
        g0: function () {
          return _;
        },
        gl: function () {
          return T;
        },
        rr: function () {
          return N;
        },
        xH: function () {
          return f;
        },
      });
      var c,
        _,
        i = t(695346),
        a = t(486472),
        r = t(430824);
      t(626135);
      var u = t(981631),
        o = t(689938);
      let l = 864e5 * u.eBq;
      function I() {
        let e = i.h2.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function T() {
        let e = i.zA.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function s() {
        let e = i.SE.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function N() {
        let e = i.iH.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != r.Z.getGuild(e))),
          e
        );
      }
      function S(e) {
        return (e & u.HGf) === u.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & u.SOq.MUTUAL_FRIENDS) === u.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & u.SOq.MUTUAL_GUILDS) === u.SOq.MUTUAL_GUILDS,
            };
      }
      function d(e, n) {
        return (
          !n.verified ||
          (null != e && l > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((c = _ || (_ = {}))[(c.UNDECIDED = 0)] = "UNDECIDED"),
        (c[(c.OPTIN = 1)] = "OPTIN"),
        (c[(c.OPTOUT = 2)] = "OPTOUT");
      let E = { 0: void 0, 1: !0, 2: !1 };
      function f() {
        return [
          {
            name: o.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: o.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: o.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: o.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: o.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: o.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    122967: function (e, n, t) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    900601: function (e, n, t) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
  },
]);
//# sourceMappingURL=39e24f65bbd2c05d8ece.js.map
