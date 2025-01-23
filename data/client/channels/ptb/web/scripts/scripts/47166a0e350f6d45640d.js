"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50260"],
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
          return _;
        },
      });
      var i = e(954955),
        l = e.n(i),
        r = e(544891),
        d = e(570140),
        a = e(486527),
        c = e(981631);
      let _ = l()(async (n) => {
        try {
          d.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_START" });
          let t = await r.tn.get({
            url: c.ANM.DIRECTORY_CHANNEL_ENTRIES(n),
            query: { type: a.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0,
          });
          d.Z.dispatch({
            type: "EVENT_DIRECTORY_FETCH_SUCCESS",
            channelId: n,
            entries: t.body,
          });
        } catch (n) {
          d.Z.dispatch({ type: "EVENT_DIRECTORY_FETCH_FAILURE" });
        }
      }, 200);
    },
    241155: function (n, t, e) {
      e(47120);
      var i,
        l,
        r,
        d,
        a = e(392711),
        c = e.n(a),
        _ = e(442837),
        u = e(570140),
        o = e(924301),
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
      class U extends (i = _.ZP.Store) {
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
      (d = "EventDirectoryStore"),
        (r = "displayName") in (l = U)
          ? Object.defineProperty(l, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = d),
        (t.Z = new U(u.Z, {
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
                    return (0, o.CQ)(n.guild_scheduled_event);
                  },
                ],
              ),
              l = c().map(i, C);
            I[t] = l;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            p = !1;
          },
        }));
    },
    486527: function (n, t, e) {
      e.d(t, {
        AR: function () {
          return u;
        },
        C2: function () {
          return a;
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
          return _;
        },
      });
      var i,
        l,
        r,
        d,
        a,
        c,
        _,
        u,
        o = e(149765),
        s = e(700785),
        E = e(981631),
        p = e(388032);
      ((i = a || (a = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((l = c || (c = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (l.CHOOSE_GUILD = "choose-guild"),
        (l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (l.CONFIRMATION = "confirmation"),
        ((r = _ || (_ = {})).CREATE = "CREATE"),
        (r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (r.HUB_STUDY = "HUB_STUDY"),
        (r.HUB_CLASS = "HUB_CLASS"),
        (r.HUB_SOCIAL = "HUB_SOCIAL"),
        (r.HUB_MAJOR = "HUB_MAJOR"),
        (r.HUB_DORM = "HUB_DORM"),
        ((d = u || (u = {}))[(d.ALL = -1)] = "ALL"),
        (d[(d.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (d[(d.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (d[(d.CLASS = 2)] = "CLASS"),
        (d[(d.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (d[(d.MISC = 5)] = "MISC");
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
                permissions: o.$e(
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
          return a;
        },
      });
      var i = e(913527),
        l = e.n(i),
        r = e(709054),
        d = e(765305);
      function a(n, t, e, i) {
        let a = l()(),
          c = new Date(n.scheduled_start_time).getTime(),
          _ = { start: c - d.VF, end: c };
        if (a.isBetween(_.start, _.end)) {
          if (null != t) {
            let n = l()(t),
              e = n.isBetween(_.start, _.end),
              r = n.isBetween(l()(c).subtract(d.zV, "days"), c);
            return e || (r && !i) ? void 0 : d.X_.EVENT_STARTING_SOON;
          }
          return d.X_.EVENT_STARTING_SOON;
        }
        let u = r.default.extractTimestamp(n.id),
          o = Math.min((null != e ? e : u) + d.Fc, c);
        if (a.isBetween(u, o) && null == t && !i) return d.X_.NEW_EVENT;
      }
    },
    835184: function (n, t, e) {
      var i,
        l = e(442837),
        r = e(570140),
        d = e(314897),
        a = e(924301),
        c = e(658041),
        _ = e(765305);
      function u(n, t, e) {
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
      let o = {},
        s = {};
      function E(n) {
        let t = { ...o };
        delete t[n], (o = t);
        let e = { ...s };
        delete e[n], (s = e);
      }
      class p extends (i = l.ZP.PersistedStore) {
        initialize(n) {
          if (null != n) {
            var t, e;
            (o =
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
          return o[n];
        }
        getAllEventDismissals() {
          return o;
        }
        getUpcomingNoticeSeenTime(n) {
          return s[n];
        }
        getAllUpcomingNoticeSeenTimes() {
          return s;
        }
        getState() {
          return { upcomingEventDismissals: o, upcomingEventSeenTimestamps: s };
        }
      }
      u(p, "displayName", "UpcomingEventNoticesStore"),
        u(p, "persistKey", "UpcomingEventNotices"),
        (t.Z = new p(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (n) {
            let { eventId: t } = n,
              e = { ...o };
            (e[t] = Date.now()), (o = e);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (n) {
            let { guildScheduledEvent: t } = n;
            (t.status === _.p1.CANCELED || t.status === _.p1.COMPLETED) &&
              E(t.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (n) {
            let { guildScheduledEvent: t } = n;
            E(t.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (n) {
            let { userId: t, guildEventId: e } = n;
            if (t !== d.default.getId()) return;
            let i = a.ZP.getGuildScheduledEvent(e);
            if (null == i || i.status !== _.p1.SCHEDULED || null != o[e])
              return;
            let l = s[e];
            if ((0, c.M)(i, void 0, l, !1) === _.X_.NEW_EVENT) {
              let n = { ...o };
              (n[e] = Date.now()), (o = n);
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
          return _;
        },
      }),
        e(47120);
      var i = e(442837),
        l = e(357156),
        r = e(984933),
        d = e(430824),
        a = e(496675),
        c = e(981631);
      function _(n, t) {
        return (0, i.e7)(
          [d.Z, r.ZP, a.Z],
          () => {
            let e = d.Z.getGuild(n);
            if (
              a.Z.can(c.Plq.ADMINISTRATOR, e) ||
              a.Z.can(c.Plq.CREATE_EVENTS, e)
            )
              return !0;
            for (let { channel: e } of r.ZP.getChannels(n)[r.Zb])
              if (null == t || e.type === t) {
                let [n] = (0, l.Ob)(e);
                if (a.Z.can(n, e)) return !0;
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
          return m;
        },
        ZP: function () {
          return L;
        },
        eF: function () {
          return v;
        },
        gM: function () {
          return G;
        },
        k5: function () {
          return S;
        },
        qY: function () {
          return f;
        },
        sz: function () {
          return y;
        },
        u1: function () {
          return N;
        },
      }),
        e(47120),
        e(724458);
      var i = e(192379),
        l = e(442837),
        r = e(241155),
        d = e(592125),
        a = e(984933),
        c = e(430824),
        _ = e(496675),
        u = e(70956),
        o = e(823379),
        s = e(924301),
        E = e(658041),
        p = e(835184),
        I = e(79874),
        T = e(854698),
        g = e(765305),
        C = e(981631);
      let U = [],
        D = 15 * u.Z.Millis.MINUTE;
      function L(n, t) {
        return (0, l.Wu)(
          [c.Z, r.Z, s.ZP, _.Z, d.Z, a.ZP],
          () => {
            let e = c.Z.getGuild(n);
            if (null == e) return U;
            if (e.hasFeature(C.oNc.HUB)) {
              var i, l;
              let n =
                null === (i = a.ZP.getDefaultChannel(e.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (l = r.Z.getEventDirectoryEntries(n)) && void 0 !== l
                  ? l
                  : []
              )
                .map((n) => {
                  let t = n.scheduledEventId,
                    e = s.ZP.getGuildScheduledEvent(t);
                  return null != e
                    ? e
                    : r.Z.getCachedGuildScheduledEventById(t);
                })
                .filter(o.lm);
            }
            return s.ZP.getGuildScheduledEventsByIndex(
              null != t ? t : s.bN.GUILD_EVENT_UPCOMING(e.id),
            ).filter((n) => {
              let t = n.channel_id;
              if (null == t) return !0;
              let e = d.Z.getChannel(t);
              return _.Z.can(C.Plq.VIEW_CHANNEL, e);
            });
          },
          [t, n],
        );
      }
      function f(n) {
        return (0, l.e7)(
          [s.ZP, d.Z, _.Z],
          () => {
            let t = d.Z.getChannel(n);
            if (
              !_.Z.can(C.Plq.VIEW_CHANNEL, t) ||
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
      function G(n) {
        let t = (0, l.Wu)(
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
      function m(n) {
        var t, e;
        let i =
            ((t = n),
            (0, l.Wu)(
              [s.ZP, d.Z, _.Z],
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
                  let t = d.Z.getChannel(n.channel_id);
                  return _.Z.can(C.Plq.VIEW_CHANNEL, t);
                }),
              [t],
            )),
          r = (0, l.cj)([p.Z], () => p.Z.getAllEventDismissals()),
          a = (0, l.cj)([p.Z], () => p.Z.getAllUpcomingNoticeSeenTimes()),
          u = (0, l.cj)(
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
          o = (0, l.e7)([c.Z], () => c.Z.getGuild(n)),
          I =
            null != o &&
            !o.hasFeature(C.oNc.COMMUNITY) &&
            o.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != u && I)
          for (let n = 0; n < i.length; n++) {
            let t = i[n],
              l = r[t.id],
              d = a[t.id],
              c = null !== (e = u[t.id]) && void 0 !== e && e,
              _ = (0, E.M)(t, l, d, c);
            if (null != _) return { upcomingEvent: t, noticeType: _ };
          }
      }
      function S(n) {
        return (0, l.e7)(
          [s.ZP, d.Z, _.Z],
          () =>
            s.ZP.getGuildScheduledEventsByIndex(
              s.bN.GUILD_EVENT_ACTIVE(n),
            ).find((n) => {
              if (n.entity_type === g.WX.NONE || !(0, s.xt)(n)) return !1;
              if (null == n.channel_id) return !0;
              let t = d.Z.getChannel(n.channel_id);
              return _.Z.can(C.Plq.VIEW_CHANNEL, t);
            }),
          [n],
        );
      }
      function N(n) {
        return (0, l.e7)(
          [s.ZP],
          () =>
            s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(n)),
          [n],
        );
      }
      function v(n) {
        return (0, l.e7)(
          [d.Z, s.ZP],
          () => {
            let t = s.ZP.getGuildScheduledEventsByIndex(
              s.bN.GUILD_EVENT_ACTIVE(n),
            ).find((n) => null != d.Z.getChannel(n.channel_id));
            return d.Z.getChannel(null == t ? void 0 : t.channel_id);
          },
          [n],
        );
      }
      function y(n) {
        let [t, e] = i.useState(() => Date.now());
        i.useEffect(() => {
          let n = setInterval(() => {
            e(Date.now());
          }, D);
          return () => clearInterval(n);
        }, []);
        let r = (0, l.e7)(
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
            r.filter((n) => {
              let { startTime: t, endTime: e } = (0, I.Kq)(n),
                { withinStartWindow: i, diffMinutes: l } = (0, T.ub)(
                  t.toISOString(),
                  null == e ? void 0 : e.toISOString(),
                );
              return n.status !== g.p1.ACTIVE && i && l < 15;
            }),
          [r],
        );
      }
    },
    334877: function (n, t, e) {
      e.d(t, {
        l: function () {
          return r;
        },
      });
      var i = e(15729),
        l = e(731965);
      let r = (0, i.U)((n) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, l.j)(() => n({ canCloseModal: t }));
        },
      }));
    },
    576749: function (n, t, e) {
      var i = e(481060),
        l = e(40851),
        r = e(334877),
        d = e(981631);
      let a = "guild-event-modal";
      t.Z = () => {
        let n =
          (0, l.bp)() === d.IlC.POPOUT
            ? i.POPOUT_MODAL_CONTEXT
            : i.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: a,
          contextKey: n,
          onCloseRequest: () => {
            r.l.getState().canCloseModal && (0, i.closeModal)(a, n);
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
          return d;
        },
      });
      var i = e(442837),
        l = e(430824),
        r = e(981631);
      function d(n) {
        return (0, i.e7)(
          [l.Z],
          () => {
            var t;
            if (null == n) return !1;
            let e = l.Z.getGuild(n);
            return (
              null !== (t = null == e ? void 0 : e.hasFeature(r.oNc.HUB)) &&
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
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(120356),
        r = e.n(l),
        d = e(388032),
        a = e(443644),
        c = e(296507),
        _ = e(866402);
      function u(n) {
        let { className: t, children: e } = n;
        return (0, i.jsxs)("div", {
          className: r()(a.container, t),
          children: [
            (0, i.jsx)("img", {
              alt: d.intl.string(d.t.VoB8OT),
              src: _,
              className: r()(a.sparkleIcon, a.sparkleBottom),
            }),
            e,
            (0, i.jsx)("img", {
              alt: d.intl.string(d.t.VoB8OT),
              src: c,
              className: r()(a.sparkleIcon, a.sparkleTop),
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
    77257: function (n, t, e) {
      n.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
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
//# sourceMappingURL=47166a0e350f6d45640d.js.map
