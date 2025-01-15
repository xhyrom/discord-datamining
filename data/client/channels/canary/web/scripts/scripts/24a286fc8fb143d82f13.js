"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21395"],
  {
    296507: function (t) {
      t.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (t) {
      t.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    241155: function (t, n, e) {
      e(47120);
      var i,
        l,
        r,
        d,
        a = e(392711),
        s = e.n(a),
        u = e(442837),
        _ = e(570140),
        E = e(924301),
        c = e(601964),
        o = e(486527);
      let I = !1,
        p = {},
        g = {},
        T = {},
        U = (t) => (
          (T[t.guild_scheduled_event.id] = new c.ZP(
            t.guild_scheduled_event.guild,
          )),
          (g[t.guild_scheduled_event.id] = t.guild_scheduled_event),
          {
            channelId: t.directory_channel_id,
            scheduledEventId: t.entity_id,
            type: o.C2.GUILD_SCHEDULED_EVENT,
            authorId: t.author_id,
            createdAt: t.created_at,
          }
        );
      class m extends (i = u.ZP.Store) {
        isFetching() {
          return I;
        }
        getEventDirectoryEntries(t) {
          if (null != t) return p[t];
        }
        getCachedGuildByEventId(t) {
          var n;
          return null !== (n = T[t]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(t) {
          var n;
          return null !== (n = g[t]) && void 0 !== n ? n : void 0;
        }
      }
      (d = "EventDirectoryStore"),
        (r = "displayName") in (l = m)
          ? Object.defineProperty(l, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = d),
        (n.Z = new m(_.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            I = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
            let { channelId: n, entries: e } = t;
            I = !1;
            let i = s().sortBy(
                [...e],
                [
                  function (t) {
                    return (0, E.CQ)(t.guild_scheduled_event);
                  },
                ],
              ),
              l = s().map(i, U);
            p[n] = l;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            I = !1;
          },
        }));
    },
    486527: function (t, n, e) {
      e.d(n, {
        AR: function () {
          return _;
        },
        C2: function () {
          return a;
        },
        Pp: function () {
          return g;
        },
        VX: function () {
          return s;
        },
        b7: function () {
          return p;
        },
        sE: function () {
          return u;
        },
      });
      var i,
        l,
        r,
        d,
        a,
        s,
        u,
        _,
        E = e(149765),
        c = e(700785),
        o = e(981631),
        I = e(388032);
      ((i = a || (a = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((l = s || (s = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (l.CHOOSE_GUILD = "choose-guild"),
        (l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (l.CONFIRMATION = "confirmation"),
        ((r = u || (u = {})).CREATE = "CREATE"),
        (r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (r.HUB_STUDY = "HUB_STUDY"),
        (r.HUB_CLASS = "HUB_CLASS"),
        (r.HUB_SOCIAL = "HUB_SOCIAL"),
        (r.HUB_MAJOR = "HUB_MAJOR"),
        (r.HUB_DORM = "HUB_DORM"),
        ((d = _ || (_ = {}))[(d.ALL = -1)] = "ALL"),
        (d[(d.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (d[(d.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (d[(d.CLASS = 2)] = "CLASS"),
        (d[(d.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (d[(d.MISC = 5)] = "MISC");
      function p(t) {
        return "883060064561299456" === t
          ? [
              { value: 1, label: I.intl.string(I.t["Z+MPNz"]) },
              { value: 2, label: I.intl.string(I.t.dV9uBg) },
              { value: 3, label: I.intl.string(I.t.xoHQcn) },
              { value: 5, label: I.intl.string(I.t.Ao41rq) },
            ]
          : [
              { value: 1, label: I.intl.string(I.t.oNHFUF), idealSize: 100 },
              { value: 2, label: I.intl.string(I.t.V1i8nZ) },
              { value: 3, label: I.intl.string(I.t.Z2ygQk), idealSize: 50 },
              { value: 5, label: I.intl.string(I.t["0Bg9LS"]) },
            ];
      }
      function g() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: I.intl.string(I.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: I.intl.string(I.t["mmFA5+"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["VCAA/f"]),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.GHQoER),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.nSsoSE),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: I.intl.string(I.t.yZCzMT),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.mobYpK),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.hi1Ykp),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.vw8oaW),
                type: o.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: c.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: E.$e(
                  c.TP,
                  o.Plq.MANAGE_ROLES,
                  o.Plq.MANAGE_CHANNELS,
                  o.Plq.KICK_MEMBERS,
                  o.Plq.BAN_MEMBERS,
                  o.Plq.MANAGE_NICKNAMES,
                  o.Plq.MANAGE_GUILD_EXPRESSIONS,
                  o.Plq.MANAGE_MESSAGES,
                  o.Plq.SEND_TTS_MESSAGES,
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: I.intl.string(I.t.fYwSi4),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["3eM+Li"]),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: o.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: I.intl.string(I.t.e5gFS0),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["710tNj"]),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: o.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: I.intl.string(I.t.oOj7Ii),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.pIOigI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.ao2wxs),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: I.intl.string(I.t.AIszv7),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: I.intl.string(I.t.d4F8gI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.CLWKNj),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.g3qPRk),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.yQZpe3),
                type: o.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: I.intl.string(I.t["9kly4e"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.yZCzMT),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: o.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: I.intl.string(I.t["ppGw/P"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["b2+FCQ"]),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: o.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: o.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.g3qPRk),
                type: o.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.string(I.t.CLWKNj),
                type: o.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
    658041: function (t, n, e) {
      e.d(n, {
        M: function () {
          return a;
        },
      });
      var i = e(913527),
        l = e.n(i),
        r = e(709054),
        d = e(765305);
      function a(t, n, e, i) {
        let a = l()(),
          s = new Date(t.scheduled_start_time).getTime(),
          u = { start: s - d.VF, end: s };
        if (a.isBetween(u.start, u.end)) {
          if (null != n) {
            let t = l()(n),
              e = t.isBetween(u.start, u.end),
              r = t.isBetween(l()(s).subtract(d.zV, "days"), s);
            return e || (r && !i) ? void 0 : d.X_.EVENT_STARTING_SOON;
          }
          return d.X_.EVENT_STARTING_SOON;
        }
        let _ = r.default.extractTimestamp(t.id),
          E = Math.min((null != e ? e : _) + d.Fc, s);
        if (a.isBetween(_, E) && null == n && !i) return d.X_.NEW_EVENT;
      }
    },
    835184: function (t, n, e) {
      var i,
        l = e(442837),
        r = e(570140),
        d = e(314897),
        a = e(924301),
        s = e(658041),
        u = e(765305);
      function _(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let E = {},
        c = {};
      function o(t) {
        let n = { ...E };
        delete n[t], (E = n);
        let e = { ...c };
        delete e[t], (c = e);
      }
      class I extends (i = l.ZP.PersistedStore) {
        initialize(t) {
          if (null != t) {
            var n, e;
            (E =
              null !== (n = t.upcomingEventDismissals) && void 0 !== n
                ? n
                : {}),
              (c =
                null !== (e = t.upcomingEventSeenTimestamps) && void 0 !== e
                  ? e
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(t) {
          return E[t];
        }
        getAllEventDismissals() {
          return E;
        }
        getUpcomingNoticeSeenTime(t) {
          return c[t];
        }
        getAllUpcomingNoticeSeenTimes() {
          return c;
        }
        getState() {
          return { upcomingEventDismissals: E, upcomingEventSeenTimestamps: c };
        }
      }
      _(I, "displayName", "UpcomingEventNoticesStore"),
        _(I, "persistKey", "UpcomingEventNotices"),
        (n.Z = new I(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
            let { eventId: n } = t,
              e = { ...E };
            (e[n] = Date.now()), (E = e);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
            let { guildScheduledEvent: n } = t;
            (n.status === u.p1.CANCELED || n.status === u.p1.COMPLETED) &&
              o(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (t) {
            let { guildScheduledEvent: n } = t;
            o(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
            let { userId: n, guildEventId: e } = t;
            if (n !== d.default.getId()) return;
            let i = a.ZP.getGuildScheduledEvent(e);
            if (null == i || i.status !== u.p1.SCHEDULED || null != E[e])
              return;
            let l = c[e];
            if ((0, s.M)(i, void 0, l, !1) === u.X_.NEW_EVENT) {
              let t = { ...E };
              (t[e] = Date.now()), (E = t);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
            let { guildEventId: n } = t,
              e = { ...c };
            (e[n] = Date.now()), (c = e);
          },
        }));
    },
    554747: function (t, n, e) {
      e.d(n, {
        Vm: function () {
          return N;
        },
        ZP: function () {
          return L;
        },
        eF: function () {
          return y;
        },
        gM: function () {
          return G;
        },
        k5: function () {
          return S;
        },
        qY: function () {
          return C;
        },
        sz: function () {
          return O;
        },
        u1: function () {
          return f;
        },
      }),
        e(47120),
        e(724458);
      var i = e(192379),
        l = e(442837),
        r = e(241155),
        d = e(592125),
        a = e(984933),
        s = e(430824),
        u = e(496675),
        _ = e(70956),
        E = e(823379),
        c = e(924301),
        o = e(658041),
        I = e(835184),
        p = e(79874),
        g = e(854698),
        T = e(765305),
        U = e(981631);
      let m = [],
        D = 15 * _.Z.Millis.MINUTE;
      function L(t, n) {
        return (0, l.Wu)(
          [s.Z, r.Z, c.ZP, u.Z, d.Z, a.ZP],
          () => {
            let e = s.Z.getGuild(t);
            if (null == e) return m;
            if (e.hasFeature(U.oNc.HUB)) {
              var i, l;
              let t =
                null === (i = a.ZP.getDefaultChannel(e.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (l = r.Z.getEventDirectoryEntries(t)) && void 0 !== l
                  ? l
                  : []
              )
                .map((t) => {
                  let n = t.scheduledEventId,
                    e = c.ZP.getGuildScheduledEvent(n);
                  return null != e
                    ? e
                    : r.Z.getCachedGuildScheduledEventById(n);
                })
                .filter(E.lm);
            }
            return c.ZP.getGuildScheduledEventsByIndex(
              null != n ? n : c.bN.GUILD_EVENT_UPCOMING(e.id),
            ).filter((t) => {
              let n = t.channel_id;
              if (null == n) return !0;
              let e = d.Z.getChannel(n);
              return u.Z.can(U.Plq.VIEW_CHANNEL, e);
            });
          },
          [n, t],
        );
      }
      function C(t) {
        return (0, l.e7)(
          [c.ZP, d.Z, u.Z],
          () => {
            let n = d.Z.getChannel(t);
            if (
              !u.Z.can(U.Plq.VIEW_CHANNEL, n) ||
              null == (null == n ? void 0 : n.guild_id)
            )
              return null;
            let e = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.CHANNEL_EVENT_ACTIVE(t),
            );
            return e.length > 0 ? e[0] : null;
          },
          [t],
        );
      }
      function G(t) {
        let n = (0, l.Wu)(
          [c.ZP],
          () => c.ZP.getGuildScheduledEventsForGuild(t),
          [t],
        );
        return i.useMemo(() => {
          let t = new Map();
          return (
            n.forEach((n) => {
              let e = n.channel_id;
              null != e && t.set(e, n);
            }),
            t
          );
        }, [n]);
      }
      function N(t) {
        var n, e;
        let i =
            ((n = t),
            (0, l.Wu)(
              [c.ZP, d.Z, u.Z],
              () =>
                c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((t) => {
                  if (
                    t.entity_type === T.WX.NONE ||
                    t.status !== T.p1.SCHEDULED
                  )
                    return !1;
                  if (null == t.channel_id) return !0;
                  let n = d.Z.getChannel(t.channel_id);
                  return u.Z.can(U.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          r = (0, l.cj)([I.Z], () => I.Z.getAllEventDismissals()),
          a = (0, l.cj)([I.Z], () => I.Z.getAllUpcomingNoticeSeenTimes()),
          _ = (0, l.cj)(
            [c.ZP],
            () =>
              null == i
                ? {}
                : i.reduce((t, n) => {
                    let e = (0, g.DK)(n);
                    return {
                      ...t,
                      [n.id]: c.ZP.isInterestedInEventRecurrence(n.id, e),
                    };
                  }, {}),
            [i],
          ),
          E = (0, l.e7)([s.Z], () => s.Z.getGuild(t)),
          p =
            null != E &&
            !E.hasFeature(U.oNc.COMMUNITY) &&
            E.hasFeature(U.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != _ && p)
          for (let t = 0; t < i.length; t++) {
            let n = i[t],
              l = r[n.id],
              d = a[n.id],
              s = null !== (e = _[n.id]) && void 0 !== e && e,
              u = (0, o.M)(n, l, d, s);
            if (null != u) return { upcomingEvent: n, noticeType: u };
          }
      }
      function S(t) {
        return (0, l.e7)(
          [c.ZP, d.Z, u.Z],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => {
              if (t.entity_type === T.WX.NONE || !(0, c.xt)(t)) return !1;
              if (null == t.channel_id) return !0;
              let n = d.Z.getChannel(t.channel_id);
              return u.Z.can(U.Plq.VIEW_CHANNEL, n);
            }),
          [t],
        );
      }
      function f(t) {
        return (0, l.e7)(
          [c.ZP],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t)),
          [t],
        );
      }
      function y(t) {
        return (0, l.e7)(
          [d.Z, c.ZP],
          () => {
            let n = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => null != d.Z.getChannel(t.channel_id));
            return d.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [t],
        );
      }
      function O(t) {
        let [n, e] = i.useState(() => Date.now());
        i.useEffect(() => {
          let t = setInterval(() => {
            e(Date.now());
          }, D);
          return () => clearInterval(t);
        }, []);
        let r = (0, l.e7)(
          [c.ZP],
          () =>
            null == t
              ? []
              : c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.CHANNEL_EVENT_UPCOMING(t),
                ),
          [t, n],
        );
        return i.useMemo(
          () =>
            r.filter((t) => {
              let { startTime: n, endTime: e } = (0, p.Kq)(t),
                { withinStartWindow: i, diffMinutes: l } = (0, g.ub)(
                  n.toISOString(),
                  null == e ? void 0 : e.toISOString(),
                );
              return t.status !== T.p1.ACTIVE && i && l < 15;
            }),
          [r],
        );
      }
    },
    312757: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var i = e(200651);
      e(192379);
      var l = e(481060),
        r = e(287734),
        d = e(313201),
        a = e(939863),
        s = e(482241),
        u = e(554747),
        _ = e(388032),
        E = e(877924);
      function c(t) {
        let { channel: n, transitionState: e, onClose: c } = t,
          o = (0, d.Dt)(),
          I = (0, u.qY)(n.id);
        if (null == I) return null;
        let p = () => {
          r.default.selectVoiceChannel(null), c();
        };
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: e,
          "aria-labelledby": o,
          size: l.ModalSize.SMALL,
          children: [
            (0, i.jsxs)(l.ModalContent, {
              className: E.content,
              children: [
                (0, i.jsx)(a.Z, {
                  children: (0, i.jsx)("div", {
                    className: E.iconBackground,
                    children: (0, i.jsx)(l.CalendarIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 40,
                      width: 40,
                      className: E.icon,
                    }),
                  }),
                }),
                (0, i.jsx)(l.Heading, {
                  id: o,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: E.title,
                  children: _.intl.string(_.t["4Ao8LC"]),
                }),
                (0, i.jsx)(l.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: E.subtitle,
                  children: _.intl.string(_.t["0I0B8f"]),
                }),
              ],
            }),
            (0, i.jsxs)(l.ModalFooter, {
              children: [
                (0, i.jsx)(l.Button, {
                  color: l.Button.Colors.RED,
                  onClick: () => {
                    s.Z.endEvent(I.id, I.guild_id), p();
                  },
                  children: _.intl.string(_.t.mjB9pa),
                }),
                (0, i.jsx)(l.Button, {
                  color: l.Button.Colors.PRIMARY,
                  className: E.cancelButton,
                  onClick: p,
                  children: _.intl.string(_.t.P60OAQ),
                }),
              ],
            }),
          ],
        });
      }
    },
    939863: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(120356),
        r = e.n(l),
        d = e(388032),
        a = e(730995),
        s = e(296507),
        u = e(866402);
      function _(t) {
        let { className: n, children: e } = t;
        return (0, i.jsxs)("div", {
          className: r()(a.container, n),
          children: [
            (0, i.jsx)("img", {
              alt: d.intl.string(d.t.VoB8OT),
              src: u,
              className: r()(a.sparkleIcon, a.sparkleBottom),
            }),
            e,
            (0, i.jsx)("img", {
              alt: d.intl.string(d.t.VoB8OT),
              src: s,
              className: r()(a.sparkleIcon, a.sparkleTop),
            }),
          ],
        });
      }
    },
    877924: function (t, n, e) {
      t.exports = {
        content: "content_f142a5",
        title: "title_f142a5",
        subtitle: "subtitle_f142a5",
        icon: "icon_f142a5",
        iconBackground: "iconBackground_f142a5",
        cancelButton: "cancelButton_f142a5",
      };
    },
    730995: function (t, n, e) {
      t.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=24a286fc8fb143d82f13.js.map
