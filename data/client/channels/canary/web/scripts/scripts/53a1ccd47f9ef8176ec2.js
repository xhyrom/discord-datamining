"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98515"],
  {
    296507: function (n) {
      n.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (n) {
      n.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    597: function (n, t, e) {
      e.d(t, {
        c: function () {
          return u;
        },
      });
      var i = e(954955),
        r = e.n(i),
        l = e(544891),
        a = e(570140),
        d = e(486527),
        c = e(981631);
      let u = r()(async (n) => {
        try {
          a.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let t = await l.tn.get({
            url: c.ANM.DIRECTORY_CHANNEL_ENTRIES(n),
            query: { type: d.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0,
          });
          a.Z.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: n,
            entries: t.body,
          });
        } catch (n) {
          a.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
        }
      }, 200);
    },
    241155: function (n, t, e) {
      e(47120);
      var i,
        r,
        l,
        a,
        d = e(392711),
        c = e.n(d),
        u = e(442837),
        o = e(570140),
        _ = e(924301),
        s = e(601964),
        E = e(486527);
      let p = !1,
        I = {},
        T = {},
        g = {},
        C = (n) => (
          (g[n.guild_scheduled_event.id] = new s.ZP(
            n.guild_scheduled_event.guild,
          )),
          (T[n.guild_scheduled_event.id] = n.guild_scheduled_event),
          {
            channelId: n.directory_channel_id,
            scheduledEventId: n.entity_id,
            type: E.C2.GUILD_SCHEDULED_EVENT,
            authorId: n.author_id,
            createdAt: n.created_at,
          }
        );
      class f extends (i = u.ZP.Store) {
        isFetching() {
          return p;
        }
        getEventDirectoryEntries(n) {
          if (null != n) return I[n];
        }
        getCachedGuildByEventId(n) {
          var t;
          return null !== (t = g[n]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(n) {
          var t;
          return null !== (t = T[n]) && void 0 !== t ? t : void 0;
        }
      }
      (a = "EventDirectoryStore"),
        (l = "displayName") in (r = f)
          ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = a),
        (t.Z = new f(o.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            p = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (n) {
            let { channelId: t, entries: e } = n;
            p = !1;
            let i = c().sortBy(
                [...e],
                [
                  function (n) {
                    return (0, _.CQ)(n.guild_scheduled_event);
                  },
                ],
              ),
              r = c().map(i, C);
            I[t] = r;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            p = !1;
          },
        }));
    },
    486527: function (n, t, e) {
      e.d(t, {
        AR: function () {
          return o;
        },
        C2: function () {
          return d;
        },
        Pp: function () {
          return T;
        },
        VX: function () {
          return c;
        },
        b7: function () {
          return I;
        },
        sE: function () {
          return u;
        },
      });
      var i,
        r,
        l,
        a,
        d,
        c,
        u,
        o,
        _ = e(149765),
        s = e(700785),
        E = e(981631),
        p = e(388032);
      ((i = d || (d = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((r = c || (c = {})).GUILD_TEMPLATES = "guild-templates"),
        (r.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (r.CHOOSE_GUILD = "choose-guild"),
        (r.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (r.CONFIRMATION = "confirmation"),
        ((l = u || (u = {})).CREATE = "CREATE"),
        (l.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (l.HUB_STUDY = "HUB_STUDY"),
        (l.HUB_CLASS = "HUB_CLASS"),
        (l.HUB_SOCIAL = "HUB_SOCIAL"),
        (l.HUB_MAJOR = "HUB_MAJOR"),
        (l.HUB_DORM = "HUB_DORM"),
        ((a = o || (o = {}))[(a.ALL = -1)] = "ALL"),
        (a[(a.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (a[(a.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (a[(a.CLASS = 2)] = "CLASS"),
        (a[(a.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (a[(a.MISC = 5)] = "MISC");
      function I(n) {
        return "883060064561299456" === n
          ? [
              { value: 1, label: p.intl.string(p.t["Z+MPNz"]) },
              { value: 2, label: p.intl.string(p.t.dV9uBg) },
              { value: 3, label: p.intl.string(p.t.xoHQcn) },
              { value: 5, label: p.intl.string(p.t.Ao41rq) },
            ]
          : [
              { value: 1, label: p.intl.string(p.t.oNHFUF), idealSize: 100 },
              { value: 2, label: p.intl.string(p.t.V1i8nZ) },
              { value: 3, label: p.intl.string(p.t.Z2ygQk), idealSize: 50 },
              { value: 5, label: p.intl.string(p.t["0Bg9LS"]) },
            ];
      }
      function T() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: p.intl.string(p.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: p.intl.string(p.t["mmFA5+"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: p.intl.string(p.t["VCAA/f"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t.GHQoER),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.nSsoSE),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: p.intl.string(p.t.yZCzMT),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.mobYpK),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.string(p.t.hi1Ykp),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.string(p.t.vw8oaW),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: s.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: _.$e(
                  s.TP,
                  E.Plq.MANAGE_ROLES,
                  E.Plq.MANAGE_CHANNELS,
                  E.Plq.KICK_MEMBERS,
                  E.Plq.BAN_MEMBERS,
                  E.Plq.MANAGE_NICKNAMES,
                  E.Plq.MANAGE_GUILD_EXPRESSIONS,
                  E.Plq.MANAGE_MESSAGES,
                  E.Plq.SEND_TTS_MESSAGES,
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: p.intl.string(p.t.fYwSi4),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: p.intl.string(p.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t["3eM+Li"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: p.intl.string(p.t.e5gFS0),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: p.intl.string(p.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t["710tNj"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: p.intl.string(p.t.oOj7Ii),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: p.intl.string(p.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: p.intl.string(p.t.d4F8gI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.CLWKNj),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.g3qPRk),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.yQZpe3),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: p.intl.string(p.t["9kly4e"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: p.intl.string(p.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t.yZCzMT),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: p.intl.string(p.t["ppGw/P"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: p.intl.string(p.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t["b2+FCQ"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.string(p.t.g3qPRk),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.string(p.t.CLWKNj),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
    658041: function (n, t, e) {
      e.d(t, {
        M: function () {
          return d;
        },
      });
      var i = e(913527),
        r = e.n(i),
        l = e(709054),
        a = e(765305);
      function d(n, t, e, i) {
        let d = r()(),
          c = new Date(n.scheduled_start_time).getTime(),
          u = { start: c - a.VF, end: c };
        if (d.isBetween(u.start, u.end)) {
          if (null != t) {
            let n = r()(t),
              e = n.isBetween(u.start, u.end),
              l = n.isBetween(r()(c).subtract(a.zV, "days"), c);
            return e || (l && !i) ? void 0 : a.X_.EVENT_STARTING_SOON;
          }
          return a.X_.EVENT_STARTING_SOON;
        }
        let o = l.default.extractTimestamp(n.id),
          _ = Math.min((null != e ? e : o) + a.Fc, c);
        if (d.isBetween(o, _) && null == t && !i) return a.X_.NEW_EVENT;
      }
    },
    835184: function (n, t, e) {
      var i,
        r = e(442837),
        l = e(570140),
        a = e(314897),
        d = e(924301),
        c = e(658041),
        u = e(765305);
      function o(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      let _ = {},
        s = {};
      function E(n) {
        let t = { ..._ };
        delete t[n], (_ = t);
        let e = { ...s };
        delete e[n], (s = e);
      }
      class p extends (i = r.ZP.PersistedStore) {
        initialize(n) {
          if (null != n) {
            var t, e;
            (_ =
              null !== (t = n.upcomingEventDismissals) && void 0 !== t
                ? t
                : {}),
              (s =
                null !== (e = n.upcomingEventSeenTimestamps) && void 0 !== e
                  ? e
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(n) {
          return _[n];
        }
        getAllEventDismissals() {
          return _;
        }
        getUpcomingNoticeSeenTime(n) {
          return s[n];
        }
        getAllUpcomingNoticeSeenTimes() {
          return s;
        }
        getState() {
          return { upcomingEventDismissals: _, upcomingEventSeenTimestamps: s };
        }
      }
      o(p, "displayName", "UpcomingEventNoticesStore"),
        o(p, "persistKey", "UpcomingEventNotices"),
        (t.Z = new p(l.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (n) {
            let { eventId: t } = n,
              e = { ..._ };
            (e[t] = Date.now()), (_ = e);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (n) {
            let { guildScheduledEvent: t } = n;
            (t.status === u.p1.CANCELED || t.status === u.p1.COMPLETED) &&
              E(t.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (n) {
            let { guildScheduledEvent: t } = n;
            E(t.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (n) {
            let { userId: t, guildEventId: e } = n;
            if (t !== a.default.getId()) return;
            let i = d.ZP.getGuildScheduledEvent(e);
            if (null == i || i.status !== u.p1.SCHEDULED || null != _[e])
              return;
            let r = s[e];
            if ((0, c.M)(i, void 0, r, !1) === u.X_.NEW_EVENT) {
              let n = { ..._ };
              (n[e] = Date.now()), (_ = n);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (n) {
            let { guildEventId: t } = n,
              e = { ...s };
            (e[t] = Date.now()), (s = e);
          },
        }));
    },
    518756: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      }),
        e(47120);
      var i = e(442837),
        r = e(357156),
        l = e(984933),
        a = e(430824),
        d = e(496675),
        c = e(981631);
      function u(n, t) {
        return (0, i.e7)(
          [a.Z, l.ZP, d.Z],
          () => {
            let e = a.Z.getGuild(n);
            if (
              d.Z.can(c.Plq.ADMINISTRATOR, e) ||
              d.Z.can(c.Plq.CREATE_EVENTS, e)
            )
              return !0;
            for (let { channel: e } of l.ZP.getChannels(n)[l.Zb])
              if (null == t || e.type === t) {
                let [n] = (0, r.Ob)(e);
                if (d.Z.can(n, e)) return !0;
              }
            return !1;
          },
          [n, t],
        );
      }
    },
    554747: function (n, t, e) {
      e.d(t, {
        Vm: function () {
          return v;
        },
        ZP: function () {
          return D;
        },
        eF: function () {
          return N;
        },
        gM: function () {
          return m;
        },
        k5: function () {
          return G;
        },
        qY: function () {
          return L;
        },
        sz: function () {
          return O;
        },
        u1: function () {
          return S;
        },
      }),
        e(47120),
        e(724458);
      var i = e(192379),
        r = e(442837),
        l = e(241155),
        a = e(592125),
        d = e(984933),
        c = e(430824),
        u = e(496675),
        o = e(70956),
        _ = e(823379),
        s = e(924301),
        E = e(658041),
        p = e(835184),
        I = e(79874),
        T = e(854698),
        g = e(765305),
        C = e(981631);
      let f = [],
        U = 15 * o.Z.Millis.MINUTE;
      function D(n, t) {
        return (0, r.Wu)(
          [c.Z, l.Z, s.ZP, u.Z, a.Z, d.ZP],
          () => {
            let e = c.Z.getGuild(n);
            if (null == e) return f;
            if (e.hasFeature(C.oNc.HUB)) {
              var i, r;
              let n =
                null === (i = d.ZP.getDefaultChannel(e.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (r = l.Z.getEventDirectoryEntries(n)) && void 0 !== r
                  ? r
                  : []
              )
                .map((n) => {
                  let t = n.scheduledEventId,
                    e = s.ZP.getGuildScheduledEvent(t);
                  return null != e
                    ? e
                    : l.Z.getCachedGuildScheduledEventById(t);
                })
                .filter(_.lm);
            }
            return s.ZP.getGuildScheduledEventsByIndex(
              null != t ? t : s.bN.GUILD_EVENT_UPCOMING(e.id),
            ).filter((n) => {
              let t = n.channel_id;
              if (null == t) return !0;
              let e = a.Z.getChannel(t);
              return u.Z.can(C.Plq.VIEW_CHANNEL, e);
            });
          },
          [t, n],
        );
      }
      function L(n) {
        return (0, r.e7)(
          [s.ZP, a.Z, u.Z],
          () => {
            let t = a.Z.getChannel(n);
            if (
              !u.Z.can(C.Plq.VIEW_CHANNEL, t) ||
              null == (null == t ? void 0 : t.guild_id)
            )
              return null;
            let e = s.ZP.getGuildScheduledEventsByIndex(
              s.bN.CHANNEL_EVENT_ACTIVE(n),
            );
            return e.length > 0 ? e[0] : null;
          },
          [n],
        );
      }
      function m(n) {
        let t = (0, r.Wu)(
          [s.ZP],
          () => s.ZP.getGuildScheduledEventsForGuild(n),
          [n],
        );
        return i.useMemo(() => {
          let n = new Map();
          return (
            t.forEach((t) => {
              let e = t.channel_id;
              null != e && n.set(e, t);
            }),
            n
          );
        }, [t]);
      }
      function v(n) {
        var t, e;
        let i =
            ((t = n),
            (0, r.Wu)(
              [s.ZP, a.Z, u.Z],
              () =>
                s.ZP.getGuildScheduledEventsByIndex(
                  s.bN.GUILD_EVENT_UPCOMING(t),
                ).filter((n) => {
                  if (
                    n.entity_type === g.WX.NONE ||
                    n.status !== g.p1.SCHEDULED
                  )
                    return !1;
                  if (null == n.channel_id) return !0;
                  let t = a.Z.getChannel(n.channel_id);
                  return u.Z.can(C.Plq.VIEW_CHANNEL, t);
                }),
              [t],
            )),
          l = (0, r.cj)([p.Z], () => p.Z.getAllEventDismissals()),
          d = (0, r.cj)([p.Z], () => p.Z.getAllUpcomingNoticeSeenTimes()),
          o = (0, r.cj)(
            [s.ZP],
            () =>
              null == i
                ? {}
                : i.reduce((n, t) => {
                    let e = (0, T.DK)(t);
                    return {
                      ...n,
                      [t.id]: s.ZP.isInterestedInEventRecurrence(t.id, e),
                    };
                  }, {}),
            [i],
          ),
          _ = (0, r.e7)([c.Z], () => c.Z.getGuild(n)),
          I =
            null != _ &&
            !_.hasFeature(C.oNc.COMMUNITY) &&
            _.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != o && I)
          for (let n = 0; n < i.length; n++) {
            let t = i[n],
              r = l[t.id],
              a = d[t.id],
              c = null !== (e = o[t.id]) && void 0 !== e && e,
              u = (0, E.M)(t, r, a, c);
            if (null != u) return { upcomingEvent: t, noticeType: u };
          }
      }
      function G(n) {
        return (0, r.e7)(
          [s.ZP, a.Z, u.Z],
          () =>
            s.ZP.getGuildScheduledEventsByIndex(
              s.bN.GUILD_EVENT_ACTIVE(n),
            ).find((n) => {
              if (n.entity_type === g.WX.NONE || !(0, s.xt)(n)) return !1;
              if (null == n.channel_id) return !0;
              let t = a.Z.getChannel(n.channel_id);
              return u.Z.can(C.Plq.VIEW_CHANNEL, t);
            }),
          [n],
        );
      }
      function S(n) {
        return (0, r.e7)(
          [s.ZP],
          () =>
            s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(n)),
          [n],
        );
      }
      function N(n) {
        return (0, r.e7)(
          [a.Z, s.ZP],
          () => {
            let t = s.ZP.getGuildScheduledEventsByIndex(
              s.bN.GUILD_EVENT_ACTIVE(n),
            ).find((n) => null != a.Z.getChannel(n.channel_id));
            return a.Z.getChannel(null == t ? void 0 : t.channel_id);
          },
          [n],
        );
      }
      function O(n) {
        let [t, e] = i.useState(() => Date.now());
        i.useEffect(() => {
          let n = setInterval(() => {
            e(Date.now());
          }, U);
          return () => clearInterval(n);
        }, []);
        let l = (0, r.e7)(
          [s.ZP],
          () =>
            null == n
              ? []
              : s.ZP.getGuildScheduledEventsByIndex(
                  s.bN.CHANNEL_EVENT_UPCOMING(n),
                ),
          [n, t],
        );
        return i.useMemo(
          () =>
            l.filter((n) => {
              let { startTime: t, endTime: e } = (0, I.Kq)(n),
                { withinStartWindow: i, diffMinutes: r } = (0, T.ub)(
                  t.toISOString(),
                  null == e ? void 0 : e.toISOString(),
                );
              return n.status !== g.p1.ACTIVE && i && r < 15;
            }),
          [l],
        );
      }
    },
    334877: function (n, t, e) {
      e.d(t, {
        l: function () {
          return l;
        },
      });
      var i = e(15729),
        r = e(731965);
      let l = (0, i.U)((n) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, r.j)(() => n({ canCloseModal: t }));
        },
      }));
    },
    139712: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        l = e(481060),
        a = e(482241),
        d = e(124165),
        c = e(765305),
        u = e(388032),
        o = e(917493);
      function _(n) {
        let { event: t, recurrenceId: e, guildId: _, onRsvp: s, ...E } = n,
          [p, I] = r.useState(d.KX.SERIES),
          T = (0, d.X2)(t.id, null),
          g =
            (null == T ? void 0 : T.response) === c.gv.INTERESTED
              ? c.gv.UNINTERESTED
              : c.gv.INTERESTED,
          C =
            g === c.gv.INTERESTED
              ? u.intl.string(u.t.WtOReX)
              : u.intl.string(u.t["8MPCVl"]);
        return (0, i.jsx)(l.ConfirmModal, {
          ...E,
          header: C,
          confirmText: u.intl.string(u.t.TyCVIi),
          cancelText: u.intl.string(u.t["ETE/oK"]),
          onConfirm: () => {
            p === d.KX.SERIES
              ? a.Z.updateRsvp(t.id, null, _, g)
              : a.Z.updateRsvp(t.id, e, _, g),
              null == s || s(),
              E.onClose();
          },
          confirmButtonColor: l.Button.Colors.BRAND,
          children: (0, i.jsx)(l.RadioGroup, {
            className: o.responseOptions,
            value: p,
            options: (0, d.pF)(),
            onChange: (n) => I(n.value),
          }),
        });
      }
      function s(n, t, e, r) {
        (0, d.cg)({
          eventId: n,
          recurrenceId: t,
          guildId: e,
          updateRsvp: (t, i, r, l) => a.Z.updateRsvp(n, i, e, l),
          openRsvpPicker: (n, t) => {
            (0, l.openModalLazy)(() =>
              Promise.resolve((l) =>
                (0, i.jsx)(_, {
                  ...l,
                  event: n,
                  recurrenceId: t,
                  guildId: e,
                  onRsvp: r,
                }),
              ),
            );
          },
          onRsvp: r,
        });
      }
    },
    576749: function (n, t, e) {
      var i = e(481060),
        r = e(40851),
        l = e(334877),
        a = e(981631);
      let d = "guild-event-modal";
      t.Z = () => {
        let n =
          (0, r.bp)() === a.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: d,
          contextKey: n,
          onCloseRequest: () => {
            l.l.getState().canCloseModal && (0, i.closeModal)(d, n);
          },
        };
      };
    },
    147754: function (n, t, e) {
      var i = e(818083);
      t.Z = (0, i.B)({
        kind: "guild",
        id: "2021-11_hub_events",
        label: "Hub Events",
        defaultConfig: { showHubEventsList: !1 },
        treatments: [
          {
            id: 1,
            label: "Show Hub Events List",
            config: { showHubEventsList: !0 },
          },
        ],
      });
    },
    724912: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(442837),
        r = e(430824),
        l = e(981631);
      function a(n) {
        return (0, i.e7)(
          [r.Z],
          () => {
            var t;
            if (null == n) return !1;
            let e = r.Z.getGuild(n);
            return (
              null !== (t = null == e ? void 0 : e.hasFeature(l.oNc.HUB)) &&
              void 0 !== t &&
              t
            );
          },
          [n],
        );
      }
    },
    939863: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        a = e(388032),
        d = e(443644),
        c = e(296507),
        u = e(866402);
      function o(n) {
        let { className: t, children: e } = n;
        return (0, i.jsxs)("div", {
          className: l()(d.container, t),
          children: [
            (0, i.jsx)("img", {
              alt: a.intl.string(a.t.VoB8OT),
              src: u,
              className: l()(d.sparkleIcon, d.sparkleBottom),
            }),
            e,
            (0, i.jsx)("img", {
              alt: a.intl.string(a.t.VoB8OT),
              src: c,
              className: l()(d.sparkleIcon, d.sparkleTop),
            }),
          ],
        });
      }
    },
    596622: function (n, t, e) {
      n.exports = {
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
    54670: function (n, t, e) {
      n.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
      };
    },
    77257: function (n, t, e) {
      n.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    818974: function (n, t, e) {
      n.exports = { container: "container_f87f77" };
    },
    166710: function (n, t, e) {
      n.exports = {
        container: "container_a4ec62",
        eventName: "eventName_a4ec62",
        description: "description_a4ec62",
        descriptionWithThumbnail: "descriptionWithThumbnail_a4ec62",
        spacer: "spacer_a4ec62",
        rsvpCount: "rsvpCount_a4ec62",
        rsvpIcon: "rsvpIcon_a4ec62",
        creator: "creator_a4ec62",
        eventInfoStatusContainer: "eventInfoStatusContainer_a4ec62",
        statusContainer: "statusContainer_a4ec62",
        withThumbnail: "withThumbnail_a4ec62",
        thumbnailContainer: "thumbnailContainer_a4ec62",
        thumbnail: "thumbnail_a4ec62",
      };
    },
    37232: function (n, t, e) {
      n.exports = {
        container: "container_ee9d1a",
        canceled: "canceled_ee9d1a",
        active: "active_ee9d1a",
        timeStatus: "timeStatus_ee9d1a",
        icon: "icon_ee9d1a",
        iconButton: "iconButton_ee9d1a",
        canceledStatus: "canceledStatus_ee9d1a",
        clickable: "clickable_ee9d1a",
      };
    },
    671933: function (n, t, e) {
      n.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    98764: function (n, t, e) {
      n.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
      };
    },
    984226: function (n, t, e) {
      n.exports = {
        header: "header_fa4e6d",
        content: "content_fa4e6d",
        icon: "icon_fa4e6d",
        divider: "divider_fa4e6d",
        button: "button_fa4e6d",
        iconButton: "iconButton_fa4e6d",
      };
    },
    198394: function (n, t, e) {
      n.exports = {
        container: "container_c1cfd2",
        circle: "circle_c1cfd2",
        icon: "icon_c1cfd2",
        title: "title_c1cfd2",
        subtitle: "subtitle_c1cfd2",
        roleTip: "roleTip_c1cfd2",
      };
    },
    935602: function (n, t, e) {
      n.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    184617: function (n, t, e) {
      n.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    917493: function (n, t, e) {
      n.exports = { responseOptions: "responseOptions_ff8b0a" };
    },
    443644: function (n, t, e) {
      n.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=53a1ccd47f9ef8176ec2.js.map
