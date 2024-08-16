"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53115"],
  {
    486527: function (_, E, e) {
      e.d(E, {
        AR: function () {
          return d;
        },
        C2: function () {
          return a;
        },
        Pp: function () {
          return i;
        },
        VX: function () {
          return A;
        },
        b7: function () {
          return D;
        },
        sE: function () {
          return I;
        },
      });
      var T,
        s,
        L,
        M,
        a,
        A,
        I,
        d,
        U = e(149765),
        n = e(700785),
        G = e(981631),
        O = e(689938);
      ((T = a || (a = {}))[(T.GUILD = 0)] = "GUILD"),
        (T[(T.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((s = A || (A = {})).GUILD_TEMPLATES = "guild-templates"),
        (s.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (s.CHOOSE_GUILD = "choose-guild"),
        (s.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (s.CONFIRMATION = "confirmation"),
        ((L = I || (I = {})).CREATE = "CREATE"),
        (L.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (L.HUB_STUDY = "HUB_STUDY"),
        (L.HUB_CLASS = "HUB_CLASS"),
        (L.HUB_SOCIAL = "HUB_SOCIAL"),
        (L.HUB_MAJOR = "HUB_MAJOR"),
        (L.HUB_DORM = "HUB_DORM"),
        ((M = d || (d = {}))[(M.ALL = -1)] = "ALL"),
        (M[(M.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (M[(M.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (M[(M.CLASS = 2)] = "CLASS"),
        (M[(M.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (M[(M.MISC = 5)] = "MISC");
      function D(_) {
        return "883060064561299456" === _
          ? [
              { value: 1, label: O.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1 },
              { value: 2, label: O.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2 },
              { value: 3, label: O.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3 },
              { value: 5, label: O.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5 },
            ]
          : [
              {
                value: 1,
                label: O.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                idealSize: 100,
              },
              { value: 2, label: O.Z.Messages.DIRECTORY_CATEGORY_CLASS },
              {
                value: 3,
                label: O.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                idealSize: 50,
              },
              {
                value: 5,
                label: O.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS,
              },
            ];
      }
      function i() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                type: G.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: n.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: U.$e(
                  n.TP,
                  G.Plq.MANAGE_ROLES,
                  G.Plq.MANAGE_CHANNELS,
                  G.Plq.KICK_MEMBERS,
                  G.Plq.BAN_MEMBERS,
                  G.Plq.MANAGE_NICKNAMES,
                  G.Plq.MANAGE_GUILD_EXPRESSIONS,
                  G.Plq.MANAGE_MESSAGES,
                  G.Plq.SEND_TTS_MESSAGES,
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                  number: 1,
                }),
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                  number: 2,
                }),
                type: G.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                  number: 1,
                }),
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                  number: 2,
                }),
                type: G.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: O.Z.Messages
                  .GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                type: G.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                  number: 1,
                }),
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                  number: 2,
                }),
                type: G.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: O.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,
            channels: [
              {
                id: "00",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                type: G.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                type: G.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                type: G.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: O.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                type: G.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=c9132ad8e54d704a515e.js.map
