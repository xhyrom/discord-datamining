"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3202"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    241155: function (e, n, t) {
      t(47120);
      var i,
        a,
        l,
        r,
        d = t(392711),
        o = t.n(d),
        c = t(442837),
        s = t(570140),
        u = t(924301),
        _ = t(601964),
        g = t(486527);
      let p = !1,
        m = {},
        I = {},
        v = {},
        h = (e) => (
          (v[e.guild_scheduled_event.id] = new _.ZP(
            e.guild_scheduled_event.guild,
          )),
          (I[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: g.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class f extends (i = c.ZP.Store) {
        isFetching() {
          return p;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return m[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = v[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : void 0;
        }
      }
      (r = "EventDirectoryStore"),
        (l = "displayName") in (a = f)
          ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = r),
        (n.Z = new f(s.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            p = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            p = !1;
            let i = o().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, u.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              a = o().map(i, h);
            m[n] = a;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            p = !1;
          },
        }));
    },
    486527: function (e, n, t) {
      t.d(n, {
        AR: function () {
          return s;
        },
        C2: function () {
          return d;
        },
        Pp: function () {
          return I;
        },
        VX: function () {
          return o;
        },
        b7: function () {
          return m;
        },
        sE: function () {
          return c;
        },
      });
      var i,
        a,
        l,
        r,
        d,
        o,
        c,
        s,
        u = t(149765),
        _ = t(700785),
        g = t(981631),
        p = t(388032);
      ((i = d || (d = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((a = o || (o = {})).GUILD_TEMPLATES = "guild-templates"),
        (a.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (a.CHOOSE_GUILD = "choose-guild"),
        (a.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (a.CONFIRMATION = "confirmation"),
        ((l = c || (c = {})).CREATE = "CREATE"),
        (l.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (l.HUB_STUDY = "HUB_STUDY"),
        (l.HUB_CLASS = "HUB_CLASS"),
        (l.HUB_SOCIAL = "HUB_SOCIAL"),
        (l.HUB_MAJOR = "HUB_MAJOR"),
        (l.HUB_DORM = "HUB_DORM"),
        ((r = s || (s = {}))[(r.ALL = -1)] = "ALL"),
        (r[(r.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (r[(r.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (r[(r.CLASS = 2)] = "CLASS"),
        (r[(r.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (r[(r.MISC = 5)] = "MISC");
      function m(e) {
        return "883060064561299456" === e
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
      function I() {
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
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t.GHQoER),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.nSsoSE),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: p.intl.string(p.t.yZCzMT),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.mobYpK),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.string(p.t.hi1Ykp),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.string(p.t.vw8oaW),
                type: g.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: _.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: u.$e(
                  _.TP,
                  g.Plq.MANAGE_ROLES,
                  g.Plq.MANAGE_CHANNELS,
                  g.Plq.KICK_MEMBERS,
                  g.Plq.BAN_MEMBERS,
                  g.Plq.MANAGE_NICKNAMES,
                  g.Plq.MANAGE_GUILD_EXPRESSIONS,
                  g.Plq.MANAGE_MESSAGES,
                  g.Plq.SEND_TTS_MESSAGES,
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
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t["3eM+Li"]),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.Qi0D7e),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                type: g.d4z.GUILD_VOICE,
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
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t["710tNj"]),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.Qi0D7e),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                type: g.d4z.GUILD_VOICE,
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
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t.pIOigI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.ao2wxs),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: p.intl.string(p.t.AIszv7),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: p.intl.string(p.t.d4F8gI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.CLWKNj),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.g3qPRk),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.yQZpe3),
                type: g.d4z.GUILD_VOICE,
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
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t.yZCzMT),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: p.intl.string(p.t.Qi0D7e),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                type: g.d4z.GUILD_VOICE,
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
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: p.intl.string(p.t["b2+FCQ"]),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: p.intl.string(p.t.yZIUV1),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: p.intl.string(p.t.pIOigI),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: p.intl.string(p.t.ao2wxs),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: p.intl.string(p.t.AIszv7),
                type: g.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: p.intl.string(p.t.vcKDMj),
                type: g.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: p.intl.string(p.t.XS6gcH),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: p.intl.string(p.t.g3qPRk),
                type: g.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: p.intl.string(p.t.CLWKNj),
                type: g.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
    951539: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return I;
        },
        so: function () {
          return m;
        },
        wg: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(442837),
        a = t(159300),
        l = t(427679),
        r = t(592125),
        d = t(984933),
        o = t(430824),
        c = t(496675),
        s = t(700785),
        u = t(924301),
        _ = t(765305),
        g = t(981631);
      function p(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.Z];
        let { entityType: i, channelId: a } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (i === _.WX.EXTERNAL) return !0;
        let l = t.getChannel(a);
        return null != l && s.Uu(g.Plq.VIEW_CHANNEL, l);
      }
      function m(e) {
        let [n, t, i, s] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [d.ZP, r.Z, o.Z, l.Z];
        if ((0, u.Z2)(e)) return !1;
        let { guild_id: g, channel_id: m } = e,
          I =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(m),
          v = i.getGuild(g),
          h = s.getStageInstanceByChannel(m);
        return !!(0, a.b)(c.Z, v, I, h) && null != I && p(e, [t]);
      }
      function I(e) {
        return (0, i.e7)(
          [d.ZP, r.Z, o.Z, l.Z],
          () => m(e, [d.ZP, r.Z, o.Z, l.Z]),
          [e],
        );
      }
    },
    592126: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(241155),
        l = t(430824);
      function r(e, n) {
        return (0, i.cj)(
          [l.Z, a.Z],
          () => {
            let t = l.Z.getGuild(e),
              i = null != t;
            return (
              null == t && null != n && (t = a.Z.getCachedGuildByEventId(n)),
              { isMember: i, guild: t }
            );
          },
          [e, n],
        );
      }
    },
    711373: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(724458),
        t(47120),
        t(653041);
      var i = t(192379),
        a = t(442837),
        l = t(924301),
        r = t(765305);
      function d(e, n) {
        let t = (0, a.Wu)(
            [l.ZP],
            () => Object.values(l.ZP.getUsersForGuildEvent(e, null)),
            [e],
          ),
          d = (0, a.Wu)(
            [l.ZP],
            () => Object.values(l.ZP.getUsersForGuildEvent(e, n)),
            [e, n],
          );
        return (0, i.useMemo)(() => {
          let e = d.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
              let t = e[n.user_id];
              return null == t || t.response === r.gv.INTERESTED;
            }),
            i = d.filter((e) => e.response === r.gv.INTERESTED),
            a = new Set(),
            l = [],
            o = (e) => {
              !a.has(e.user_id) && (l.push(e), a.add(e.user_id));
            };
          return n.forEach(o), i.forEach(o), l;
        }, [t, d]);
      }
    },
    118998: function (e, n, t) {
      t.d(n, {
        H: function () {
          return i;
        },
      });
      let i = (e) => {
        let { guildId: n, guildEventId: t } = e;
        return "https://discord.com/events/".concat(n, "/").concat(t);
      };
    },
    697849: function (e, n, t) {
      t.r(n), t(47120);
      var i = t(200651),
        a = t(192379),
        l = t(442837),
        r = t(481060),
        d = t(100527),
        o = t(906732),
        c = t(313201),
        s = t(540059),
        u = t(724912),
        _ = t(41776),
        g = t(592125),
        p = t(626135),
        m = t(981888),
        I = t(897285),
        v = t(924301),
        h = t(951539),
        f = t(592126),
        E = t(315416),
        C = t(711373),
        T = t(274311),
        b = t(854698),
        L = t(405613),
        x = t(285784),
        S = t(95291),
        D = t(187443),
        U = t(464766),
        y = t(724278),
        N = t(462747),
        G = t(462179),
        Z = t(765305),
        j = t(981631),
        O = t(706773);
      function A(e) {
        let {
            guildEvent: n,
            guild: t,
            channel: a,
            onActionTaken: r,
            isHub: d,
            isMember: o,
            recurrenceId: c,
          } = e,
          s = (0, v.xt)(n),
          u = (0, l.e7)(
            [v.ZP],
            () => v.ZP.isInterestedInEventRecurrence(n.id, c),
            [c, n],
          ),
          g = (0, h.ZP)(n),
          p = (0, l.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
          m = (0, T.T)(null == a ? void 0 : a.id, n.id),
          I = (0, G.Z)({
            guild: t,
            channel: a,
            guildScheduledEvent: n,
            isActive: s,
            recurrenceId: c,
            onActionTaken: r,
          }),
          { entity_type: f } = n;
        return d
          ? (0, i.jsx)(D.Z, {
              isActive: s,
              isUserLurking: p,
              rsvped: u,
              isMember: o,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: m,
              canInvite: g,
              ...I,
            })
          : (0, i.jsx)(x.ZP, {
              isActive: s,
              isUserLurking: p,
              rsvped: u,
              isChannelPublic: m,
              canInvite: g,
              entityType: f,
              ...I,
            });
      }
      n.default = (e) => {
        let {
            guildScheduledEventId: n,
            parentGuildId: t,
            transitionState: _,
            initialRecurrenceId: h,
            onClose: T,
          } = e,
          x = (0, s.Q3)("GuildScheduledEventModal"),
          { analyticsLocations: D } = (0, o.ZP)(d.Z.GUILD_EVENT_MODAL),
          [G, z] = a.useState(h),
          B = (0, l.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(n), [n]),
          R = null == B ? void 0 : B.id,
          P = null == B ? void 0 : B.guild_id,
          { guild: k, isMember: H } = (0, f.Z)(P, R),
          M = (0, u.Z)(t),
          w = null == B ? void 0 : B.channel_id,
          V = (0, l.e7)([g.Z], () => g.Z.getChannel(w), [w]),
          X = (0, c.Dt)(),
          [Y, F] = a.useState(Z.fL.EVENT_INFO),
          W = (0, C.Z)(R, G),
          q = (0, E.Z)(P, R, G),
          [K, { loading: J, error: Q }] = (0, m.Z)(() =>
            I.Z.getGuildEventUsers(null == B ? void 0 : B.id, G, P),
          );
        a.useEffect(() => {
          null == B
            ? T()
            : p.default.track(j.rMx.OPEN_MODAL, {
                type: Z.zw,
                guild_id: B.guild_id,
              });
        }, [B, T]);
        let $ = a.useRef(null),
          [ee, en] = a.useState(0);
        if (
          (a.useLayoutEffect(() => {
            var e, n;
            let t = (null == B ? void 0 : B.recurrence_rule) != null ? 16 : 0;
            en(
              (null !==
                (n =
                  null == $
                    ? void 0
                    : null === (e = $.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) && void 0 !== n
                ? n
                : 0) + t,
            );
          }, [$, null == B ? void 0 : B.recurrence_rule]),
          null == B || null == k || (!H && !M))
        )
          return null;
        let et = (e) => {
            if (e !== Y) e === Z.fL.RSVP_LIST && K(), F(e);
          },
          ei = null != G ? G : (0, b.DK)(B);
        return (0, i.jsx)(o.Gt, {
          value: D,
          children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.MEDIUM,
            transitionState: _,
            "aria-labelledby": X,
            className: O.root,
            children: [
              (null == B ? void 0 : B.image) != null &&
                (0, i.jsx)(S.Z, { source: (0, L.Z)(B), className: O.banner }),
              (0, i.jsx)(U.Z, {
                onClose: T,
                selectedTab: Y,
                onTabSelected: et,
                userCount: q,
                hasBanner: (null == B ? void 0 : B.image) != null,
                isHub: M,
              }),
              (0, i.jsx)("div", {
                className: O.container,
                children: (0, i.jsx)(r.ModalContent, {
                  className: O.contentContainer,
                  style: { height: ee },
                  children: (0, i.jsxs)(r.Slides, {
                    activeSlide: Y,
                    width: x ? 552 : 600,
                    centered: !1,
                    children: [
                      (0, i.jsx)(r.Slide, {
                        id: Z.fL.EVENT_INFO,
                        children: (0, i.jsx)(y.Z, {
                          guildEvent: B,
                          guild: k,
                          channel: V,
                          headerId: X,
                          onClose: T,
                          onClickInterestedCount: () => et(Z.fL.RSVP_LIST),
                          isHub: M,
                          containerRef: $,
                          recurrenceId: ei,
                          setRecurrenceId: z,
                        }),
                      }),
                      (0, i.jsx)(r.Slide, {
                        id: Z.fL.RSVP_LIST,
                        children: (0, i.jsx)(N.Z, {
                          guildEvent: B,
                          recurrenceId: ei,
                          eventUsers: W,
                          loading: J,
                          containerHeight: ee,
                          error: Q,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)(r.ModalFooter, {
                className: O.footer,
                children: (0, i.jsx)(A, {
                  guildEvent: B,
                  isHub: M,
                  isMember: H,
                  guild: k,
                  channel: V,
                  onActionTaken: T,
                  recurrenceId: ei,
                }),
              }),
            ],
          }),
        });
      };
    },
    464766: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(653041);
      var i = t(200651),
        a = t(192379),
        l = t(120356),
        r = t.n(l),
        d = t(481060),
        o = t(765305),
        c = t(388032),
        s = t(571933);
      function u(e) {
        let {
            onClose: n,
            selectedTab: t,
            onTabSelected: l,
            userCount: u,
            hasBanner: _,
            isHub: g = !1,
          } = e,
          p = a.useRef(null);
        a.useEffect(() => {
          var e, n, t;
          return null === (t = p.current) || void 0 === t
            ? void 0
            : null === (n = t.ref) || void 0 === n
              ? void 0
              : null === (e = n.blur) || void 0 === e
                ? void 0
                : e.call(n);
        }, []);
        let m = c.intl.formatToPlainString(c.t["ZrTT/P"], { userCount: u }),
          I = [
            (0, i.jsx)(
              d.TabBar.Item,
              {
                className: s.tabBarItem,
                id: o.fL.EVENT_INFO,
                children: c.intl.string(c.t.iW6Xur),
              },
              "event-details",
            ),
          ];
        return (
          !g &&
            I.push(
              (0, i.jsx)(
                d.TabBar.Item,
                { className: s.tabBarItem, id: o.fL.RSVP_LIST, children: m },
                "is-hub",
              ),
            ),
          (0, i.jsxs)("div", {
            className: s.container,
            children: [
              (0, i.jsx)(d.Clickable, {
                ref: p,
                onClick: n,
                className: s.closeButton,
                "aria-label": c.intl.string(c.t.cpT0Cg),
                children: (0, i.jsx)(d.XSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: r()(s.closeIcon, _ && s.closeIconBanner),
                }),
              }),
              (0, i.jsx)(d.TabBar, {
                className: s.tabBar,
                "aria-label": c.intl.string(c.t["+1H47u"]),
                selectedItem: t,
                type: "top",
                onItemSelect: l,
                children: I,
              }),
            ],
          })
        );
      }
    },
    724278: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      });
      var i = t(200651),
        a = t(192379),
        l = t(120356),
        r = t.n(l),
        d = t(442837),
        o = t(481060),
        c = t(447543),
        s = t(906732),
        u = t(565138),
        _ = t(372769),
        g = t(171368),
        p = t(271383),
        m = t(430824),
        I = t(51144),
        v = t(897285),
        h = t(978227),
        f = t(894017),
        E = t(79874),
        C = t(315416),
        T = t(236373),
        b = t(854698),
        L = t(391174),
        x = t(810561),
        S = t(390966),
        D = t(390072),
        U = t(981631),
        y = t(388032),
        N = t(295267);
      function G(e) {
        var n;
        let { creator: t, guildId: a, channelId: l } = e,
          { analyticsLocations: r } = (0, s.ZP)(),
          c = (0, d.e7)([p.ZP], () => p.ZP.getMember(a, t.id), [t, a]);
        return (0, i.jsxs)("div", {
          className: N.row,
          children: [
            (0, i.jsx)(o.Avatar, {
              size: o.AvatarSizes.SIZE_20,
              src: t.getAvatarURL(a, 20),
              "aria-label":
                null !== (n = null == c ? void 0 : c.nick) && void 0 !== n
                  ? n
                  : I.ZP.getName(t),
              className: N.icon,
            }),
            (0, i.jsx)(o.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: y.intl.format(y.t["66DLFh"], {
                usernameHook: function () {
                  var e, n;
                  return (0, i.jsx)(
                    o.Clickable,
                    {
                      onClick: () =>
                        (0, g.openUserProfileModal)({
                          guildId: a,
                          channelId: l,
                          userId: t.id,
                          roleId: null == c ? void 0 : c.colorRoleId,
                          sourceAnalyticsLocations: r,
                          analyticsLocation: {
                            section:
                              U.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG,
                          },
                        }),
                      className: N.creator,
                      tag: "span",
                      role: "link",
                      children: (0, i.jsx)(o.NameWithRole, {
                        name:
                          null !== (e = null == c ? void 0 : c.nick) &&
                          void 0 !== e
                            ? e
                            : I.ZP.getName(t),
                        color:
                          null !== (n = null == c ? void 0 : c.colorString) &&
                          void 0 !== n
                            ? n
                            : void 0,
                      }),
                    },
                    "open-user-profile",
                  );
                },
              }),
            }),
          ],
        });
      }
      function Z(e) {
        let { guild: n, onClick: t, onClose: l } = e,
          d = a.useCallback(
            (e) => {
              null == t || t(e), null != t && (null == l || l(e));
            },
            [t, l],
          ),
          c = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {
                guild: n,
                size: u.Z.Sizes.MINI,
                active: !0,
                className: r()(N.guildIcon, N.icon),
              }),
              (0, i.jsx)(_.Z, {
                guild: n,
                tooltipPosition: "top",
                tooltipColor: o.Tooltip.Colors.PRIMARY,
                size: 16,
                className: N.guildBadge,
              }),
              (0, i.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: N.linkText,
                children: n.name,
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: N.row,
          children:
            null != t
              ? (0, i.jsx)(o.Clickable, {
                  onClick: d,
                  className: N.clickable,
                  role: "link",
                  children: c,
                })
              : c,
        });
      }
      function j(e) {
        let { userCount: n, onClick: t } = e;
        return (0, i.jsxs)("div", {
          className: N.row,
          children: [
            (0, i.jsx)(o.GroupIcon, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20,
              className: N.icon,
            }),
            (0, i.jsx)(o.Clickable, {
              onClick: t,
              className: N.interestedCount,
              children: (0, i.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: y.intl.format(y.t["+DLsDw"], { count: n }),
              }),
            }),
          ],
        });
      }
      function O(e) {
        let {
            guildEvent: n,
            guild: t,
            channel: l,
            headerId: r,
            onClose: s,
            onClickInterestedCount: u,
            isHub: _ = !1,
            containerRef: g,
            recurrenceId: p,
            setRecurrenceId: I,
          } = e,
          U = (0, d.e7)([m.Z], () => null != m.Z.getGuild(t.id), [t.id]),
          { startTime: y, endTime: O } = (0, E.ZP)(n, p),
          A = (0, C.Z)(n.guild_id, n.id, p),
          z = a.useCallback(
            (e) => {
              e.stopPropagation(), null != n && (0, c.B)(n);
            },
            [n],
          ),
          B = (0, f.Z)(p, n.id),
          R = (0, h.Z)(n);
        a.useEffect(() => {
          v.Z.getGuildEventUserCounts(t.id, n.id, null != p ? [p] : []),
            v.Z.getGuildEventsForCurrentUser(t.id);
        }, [t.id, n.id, p]);
        let P = (0, T.KV)(n.recurrence_rule),
          k =
            (null == n ? void 0 : n.scheduled_start_time) != null
              ? (0, b.lh)(
                  B,
                  y,
                  new Date(null == n ? void 0 : n.scheduled_start_time),
                )
              : null;
        return (0, i.jsxs)("div", {
          ref: g,
          children: [
            (0, i.jsxs)("div", {
              className: N.header,
              children: [
                (0, i.jsx)(S.z, {
                  startTime: y.toISOString(),
                  endTime: null == O ? void 0 : O.toISOString(),
                  status: null != k ? k : n.status,
                  eventType: n.entity_type,
                  guildEventId: n.id,
                  recurrenceId: p,
                }),
                (0, i.jsx)(o.Heading, {
                  id: r,
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  className: N.title,
                  children: n.name,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: N.body,
              children: [
                (0, i.jsx)(Z, {
                  guild: t,
                  onClick: U ? z : void 0,
                  onClose: s,
                }),
                (0, i.jsx)(D.Z, {
                  guildScheduledEvent: n,
                  channel: l,
                  onClose: s,
                }),
                null != A && (0, i.jsx)(j, { userCount: A, onClick: u }),
                !_ &&
                  null != R &&
                  (0, i.jsx)(
                    G,
                    {
                      creator: R,
                      guildId: t.id,
                      channelId: null == l ? void 0 : l.id,
                    },
                    R.id,
                  ),
                null != n.description &&
                  (0, i.jsx)("div", {
                    className: N.description,
                    children: (0, i.jsx)(L.Z, {
                      description: n.description,
                      truncate: !1,
                      guildId: t.id,
                    }),
                  }),
              ],
            }),
            null != P && (0, i.jsx)("hr", { className: N.divider }),
            null != P &&
              (0, i.jsx)(x.Z, {
                guildId: t.id,
                recurrenceRule: P,
                guildEventId: n.id,
                onRecurrenceClick: I,
                hideScroller: !0,
                activeRecurrenceId: p,
              }),
          ],
        });
      }
    },
    390072: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651),
        a = t(192379),
        l = t(481060),
        r = t(725436),
        d = t(997321),
        o = t(217804),
        c = t(765305),
        s = t(295267);
      function u(e) {
        let { guildScheduledEvent: n, channel: t, onClose: u } = e,
          _ = n.entity_type === c.WX.EXTERNAL,
          g = a.useCallback((e) => (0, d.Qt)(n, u)(e), [n, u]),
          p = (0, o.u)(n, t);
        if (null == p) return null;
        let { IconComponent: m, locationName: I } = p,
          v = (0, i.jsxs)(i.Fragment, {
            children: [
              null != m &&
                (0, i.jsx)(m, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  className: s.channelIcon,
                }),
              (0, i.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: s.locationText,
                children: (0, r.m)(I, !0),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: s.row,
          children:
            null != g
              ? (0, i.jsx)(l.Clickable, {
                  className: _ ? s.externalLocation : s.channelLocation,
                  onClick: g,
                  children: v,
                })
              : v,
        });
      }
    },
    462747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        l = t.n(a),
        r = t(442837),
        d = t(481060),
        o = t(239091),
        c = t(129861),
        s = t(939863),
        u = t(184301),
        _ = t(347475),
        g = t(314897),
        p = t(158776),
        m = t(885110),
        I = t(594174),
        v = t(315416),
        h = t(765305),
        f = t(388032),
        E = t(938760);
      function C(e) {
        let { children: n } = e;
        return (0, i.jsxs)("div", {
          className: E.emptyContainer,
          children: [
            (0, i.jsx)(s.Z, {
              children: (0, i.jsx)("div", {
                className: E.circle,
                children: (0, i.jsx)(d.GroupIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 40,
                  width: 40,
                  className: E.icon,
                }),
              }),
            }),
            n,
          ],
        });
      }
      function T() {
        return (0, i.jsx)(C, {
          children: (0, i.jsx)(d.Heading, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: E.title,
            children: f.intl.string(f.t.hW0mBQ),
          }),
        });
      }
      function b() {
        return (0, i.jsx)(C, {
          children: (0, i.jsx)(d.Heading, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: E.errorTitle,
            children: f.intl.string(f.t.obChXl),
          }),
        });
      }
      function L(e) {
        let { count: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: E.listRow,
            children: [
              (0, i.jsx)("div", {
                className: l()(E.listRowCircle, E.listAvatar),
                children: (0, i.jsx)(d.GroupIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 14,
                  width: 14,
                  className: E.icon,
                }),
              }),
              (0, i.jsx)(d.Text, {
                color: "text-normal",
                variant: "text-md/normal",
                children: f.intl.format(f.t.BdQTfX, { userRemainCount: n }),
              }),
            ],
          }),
        });
      }
      function x(e) {
        let { eventUser: n, guildId: t, onContextMenu: a } = e,
          o = (0, r.e7)([I.default], () => I.default.getUser(n.user_id)),
          s = (0, r.e7)(
            [m.Z, p.Z, g.default],
            () =>
              n.user_id === g.default.getId()
                ? m.Z.getStatus()
                : p.Z.getStatus(n.user_id, t),
            [n.user_id, t],
          );
        return null == o
          ? null
          : (0, i.jsx)(d.Popout, {
              preload: () =>
                (0, u.Z)(o.id, o.getAvatarURL(t, 80), { guildId: t }),
              renderPopout: (e) =>
                (0, i.jsx)(_.Z, { ...e, userId: n.user_id, guildId: t }),
              position: "left",
              spacing: 16,
              children: (e, r) => {
                var u;
                let { isShown: _ } = r;
                return (0, i.jsxs)(d.Clickable, {
                  className: l()(E.listRow, E.interactiveRow, {
                    [E.selected]: _,
                  }),
                  onContextMenu: (e) => a(e, o),
                  ...e,
                  children: [
                    (0, i.jsx)(d.Avatar, {
                      src: o.getAvatarURL(t, 24),
                      "aria-label": o.username,
                      size: d.AvatarSizes.SIZE_24,
                      className: E.listAvatar,
                      status: s,
                    }),
                    (0, i.jsx)(c.Z, {
                      user: o,
                      className: E.listName,
                      discriminatorClass: E.listDiscriminator,
                      nick:
                        null === (u = n.member) || void 0 === u
                          ? void 0
                          : u.nick,
                    }),
                  ],
                });
              },
            });
      }
      function S(e) {
        let {
          eventUsers: n,
          guildId: t,
          usersNotShownCount: a = 0,
          onContextMenu: l,
        } = e;
        return (0, i.jsxs)(d.ScrollerThin, {
          className: E.listScroller,
          children: [
            n.map((e) =>
              (0, i.jsx)(
                x,
                { guildId: t, eventUser: e, onContextMenu: l },
                e.user_id,
              ),
            ),
            a > 0 && (0, i.jsx)(L, { count: a }),
          ],
        });
      }
      function D(e) {
        let { children: n, style: t } = e;
        return (0, i.jsx)("div", {
          className: E.container,
          style: null != t ? t : {},
          children: n,
        });
      }
      function U(e) {
        let { children: n, height: t } = e;
        return (0, i.jsx)(D, { style: { height: t }, children: n });
      }
      function y(e) {
        let {
            guildEvent: n,
            recurrenceId: a,
            eventUsers: l,
            loading: r,
            error: c,
            containerHeight: s,
          } = e,
          u = (0, v.Z)(n.guild_id, n.id, a);
        if (r && 0 === l.length)
          return (0, i.jsx)(U, {
            height: s,
            children: (0, i.jsx)(d.Spinner, {
              type: d.Spinner.Type.SPINNING_CIRCLE,
              className: E.spinner,
            }),
          });
        if (null != c && 0 === l.length)
          return (0, i.jsx)(U, { height: s, children: (0, i.jsx)(b, {}) });
        let _ = 0;
        return (
          l.length >= h.rC && u > h.rC && (_ = Math.max(u - l.length, 0)),
          0 === l.length
            ? (0, i.jsx)(U, { height: s, children: (0, i.jsx)(T, {}) })
            : (0, i.jsx)(D, {
                children: (0, i.jsx)(S, {
                  eventUsers: l,
                  guildId: n.guild_id,
                  onContextMenu: function (e, n) {
                    (0, o.jW)(e, async () => {
                      let { default: e } = await Promise.all([
                        t.e("79695"),
                        t.e("69220"),
                        t.e("351"),
                      ]).then(t.bind(t, 881351));
                      return (t) => (0, i.jsx)(e, { ...t, user: n });
                    });
                  },
                  usersNotShownCount: _,
                }),
              })
        );
      }
    },
    462179: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return U;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(442837),
        l = t(481060),
        r = t(239091),
        d = t(749210),
        o = t(305325),
        c = t(281956),
        s = t(357156),
        u = t(703656),
        _ = t(922482),
        g = t(984933),
        p = t(430824),
        m = t(496675),
        I = t(626135),
        v = t(572004),
        h = t(482241),
        f = t(951539),
        E = t(894017),
        C = t(274311),
        T = t(854698),
        b = t(118998),
        L = t(139712),
        x = t(765305),
        S = t(981631),
        D = t(388032);
      function U(e) {
        let {
            guild: n,
            channel: U,
            guildScheduledEvent: y,
            isActive: N,
            recurrenceId: G,
            onActionTaken: Z,
          } = e,
          { scheduled_start_time: j, id: O, entity_type: A, guild_id: z } = y,
          { canManageGuildEvent: B } = (0, s.XJ)(null != U ? U : n),
          R = B(y),
          P = (0, f.ZP)(y),
          k = (0, C.T)(null == U ? void 0 : U.id, y.id),
          { withinStartWindow: H } = (0, T.ub)(j),
          M = (0, a.e7)(
            [m.Z],
            () =>
              (null == U ? !void 0 : !U.isGuildVocal()) ||
              m.Z.can(S.Plq.CONNECT, U),
            [U],
          ),
          w = (0, c.J)(z),
          V = (0, E.Z)(G, O);
        function X(e) {
          e.stopPropagation(), (0, L.Z)(O, G, z);
        }
        async function Y(e) {
          e.stopPropagation(),
            await d.Z.joinGuild(z),
            p.Z.addConditionalChangeListener(
              () => null == p.Z.getGuild(z) || (!N && X(e), F(e), !1),
            );
        }
        function F(e) {
          e.stopPropagation();
          let n = g.ZP.getDefaultChannel(z);
          (0, l.closeAllModals)(), (0, u.XU)(z, null == n ? void 0 : n.id);
        }
        return {
          onDeleteClick: R
            ? function (e) {
                if ((e.stopPropagation(), !!R && !N))
                  (0, l.openModal)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                      ...e,
                      header: D.intl.string(D.t.R5bpio),
                      confirmText: D.intl.string(D.t.oyYWHB),
                      cancelText: D.intl.string(D.t["ETE/oK"]),
                      onConfirm: () => h.Z.deleteGuildEvent(O, z),
                      children: (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: D.intl.string(D.t.v2GWNT),
                      }),
                    }),
                  );
              }
            : void 0,
          onContextMenu: function (e) {
            e.stopPropagation(),
              null != n &&
                (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("15450"),
                    t.e("37133"),
                  ]).then(t.bind(t, 215269));
                  return (t) =>
                    (0, i.jsx)(e, {
                      guildEventId: O,
                      recurrenceId: G,
                      channel: U,
                      guild: n,
                      ...t,
                    });
                });
          },
          onJoinClick:
            M || w
              ? function (e) {
                  if ((e.stopPropagation(), w)) {
                    null == Z || Z(), (0, o.hk)(z);
                    return;
                  }
                  (null == U ? void 0 : U.isGuildStageVoice())
                    ? ((0, _.Cq)(U), null == Z || Z())
                    : (null == U ? void 0 : U.isGuildVoice()) &&
                      (h.Z.joinVoiceEvent(U.guild_id, U.id), null == Z || Z());
                }
              : void 0,
          onRsvpClick: X,
          onStartClick:
            R && H && !(null == V ? void 0 : V.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                        t.e("84722"),
                        t.e("83033"),
                      ]).then(t.bind(t, 296864));
                      return (n) =>
                        (0, i.jsx)(e, { ...n, event: y, onSuccess: Z });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
              if (!P || !k) {
                let e = (0, b.H)({ guildId: z, guildEventId: O });
                (0, v.JG)(e),
                  I.default.track(S.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                    guild_id: z,
                    guild_scheduled_event_id: O,
                  });
                return;
              }
              (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  t.e("7654"),
                  t.e("1187"),
                  t.e("20554"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    guild: n,
                    channel: U,
                    guildScheduledEvent: y,
                    source: S.t4x.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            R && A === x.WX.EXTERNAL && N
              ? function (e) {
                  if ((e.stopPropagation(), !R)) return;
                  let n = () => {
                    h.Z.endEvent(O, z), (0, l.closeAllModals)();
                  };
                  (0, l.openModal)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                      ...e,
                      header: D.intl.string(D.t.qaYzPD),
                      confirmText: D.intl.string(D.t.mjB9pa),
                      cancelText: D.intl.string(D.t["ETE/oK"]),
                      onConfirm: n,
                      children: (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: D.intl.string(D.t.bnDQ7O),
                      }),
                    }),
                  );
                }
              : void 0,
          onJoinGuildClick: Y,
          onGoToGuildClick: F,
        };
      }
    },
    724912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(430824),
        l = t(981631);
      function r(e) {
        return (0, i.e7)(
          [a.Z],
          () => {
            var n;
            if (null == e) return !1;
            let t = a.Z.getGuild(e);
            return (
              null !== (n = null == t ? void 0 : t.hasFeature(l.oNc.HUB)) &&
              void 0 !== n &&
              n
            );
          },
          [e],
        );
      }
    },
    939863: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        l = t.n(a),
        r = t(388032),
        d = t(443644),
        o = t(296507),
        c = t(866402);
      function s(e) {
        let { className: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: l()(d.container, n),
          children: [
            (0, i.jsx)("img", {
              alt: r.intl.string(r.t.VoB8OT),
              src: c,
              className: l()(d.sparkleIcon, d.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: r.intl.string(r.t.VoB8OT),
              src: o,
              className: l()(d.sparkleIcon, d.sparkleTop),
            }),
          ],
        });
      }
    },
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(192379),
        a = t(881052);
      function l(e, n) {
        let [t, l] = i.useState(!1),
          [r, d] = i.useState(null);
        return [
          async () => {
            l(!0), d(null);
            try {
              let n = await e();
              return l(!1), d(null), n;
            } catch (t) {
              let e = new a.Hx(t);
              return null == n || n(e), d(e), l(!1), null;
            }
          },
          { loading: t, error: r },
        ];
      }
    },
    54670: function (e, n, t) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
      };
    },
    77257: function (e, n, t) {
      e.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    818974: function (e, n, t) {
      e.exports = { container: "container_f87f77" };
    },
    166710: function (e, n, t) {
      e.exports = {
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
    37232: function (e, n, t) {
      e.exports = {
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
    671933: function (e, n, t) {
      e.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    98764: function (e, n, t) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
      };
    },
    101241: function (e, n, t) {
      e.exports = {
        inviteDetailsContainer: "inviteDetailsContainer_a75489",
        clickable: "clickable_a75489",
        guildChannelInfoContainer: "guildChannelInfoContainer_a75489",
        verticalContainer: "verticalContainer_a75489",
        footerContainer: "footerContainer_a75489",
        button: "button_a75489",
        innerButton: "innerButton_a75489",
        buttonIcon: "buttonIcon_a75489",
        eventDescription: "eventDescription_a75489",
        channelDescription: "channelDescription_a75489",
        guildBadge: "guildBadge_a75489",
        guildName: "guildName_a75489",
        guildNameClickable: "guildNameClickable_a75489",
        guildNameLinkable: "guildNameLinkable_a75489 guildName_a75489",
        channelIcon: "channelIcon_a75489",
        channelInfoContainer: "channelInfoContainer_a75489",
        channelLocationLink: "channelLocationLink_a75489",
        banner: "banner_a75489",
      };
    },
    706773: function (e, n, t) {
      e.exports = {
        root: "root_b747e2",
        banner: "banner_b747e2",
        container: "container_b747e2",
        contentContainer: "contentContainer_b747e2",
        footer: "footer_b747e2",
      };
    },
    935602: function (e, n, t) {
      e.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    571933: function (e, n, t) {
      e.exports = {
        tabBar: "tabBar_a31cc1",
        tabBarItem: "tabBarItem_a31cc1",
        container: "container_a31cc1",
        closeIcon: "closeIcon_a31cc1",
        closeIconBanner: "closeIconBanner_a31cc1",
        closeButton: "closeButton_a31cc1",
      };
    },
    295267: function (e, n, t) {
      e.exports = {
        header: "header_ecbdaf",
        title: "title_ecbdaf",
        description: "description_ecbdaf",
        guildBadge: "guildBadge_ecbdaf",
        row: "row_ecbdaf",
        guildIcon: "guildIcon_ecbdaf",
        body: "body_ecbdaf",
        divider: "divider_ecbdaf",
        icon: "icon_ecbdaf",
        channelIcon: "channelIcon_ecbdaf",
        clickable: "clickable_ecbdaf",
        linkText: "linkText_ecbdaf",
        channelLocation: "channelLocation_ecbdaf",
        locationText: "locationText_ecbdaf",
        externalLocation: "externalLocation_ecbdaf",
        interestedCount: "interestedCount_ecbdaf",
        creator: "creator_ecbdaf",
      };
    },
    938760: function (e, n, t) {
      e.exports = {
        container: "container_b5365d",
        emptyContainer: "emptyContainer_b5365d",
        title: "title_b5365d",
        errorTitle: "errorTitle_b5365d",
        icon: "icon_b5365d",
        circle: "circle_b5365d",
        listRowCircle: "listRowCircle_b5365d",
        listRow: "listRow_b5365d",
        interactiveRow: "interactiveRow_b5365d",
        listName: "listName_b5365d",
        listAvatar: "listAvatar_b5365d",
        listDiscriminator: "listDiscriminator_b5365d",
        spinner: "spinner_b5365d",
        listScroller: "listScroller_b5365d",
        selected: "selected_b5365d",
      };
    },
    917493: function (e, n, t) {
      e.exports = { responseOptions: "responseOptions_ff8b0a" };
    },
    88584: function (e, n, t) {
      t.r(
        (e.exports = {
          wrapper: "wrapper_a71a1c",
          header: "header_a71a1c",
          content: "content_a71a1c",
          guildIcon: "guildIcon_a71a1c",
          applicationIcon: "applicationIcon_a71a1c",
          guildIconJoined: "guildIconJoined_a71a1c guildIcon_a71a1c",
          guildIconImage: "guildIconImage_a71a1c guildIcon_a71a1c",
          guildIconImageJoined:
            "guildIconImageJoined_a71a1c guildIconImage_a71a1c guildIcon_a71a1c",
          inviteDestination: "inviteDestination_a71a1c",
          inviteDestinationJoined:
            "inviteDestinationJoined_a71a1c inviteDestination_a71a1c",
          channel: "channel_a71a1c",
          channelName: "channelName_a71a1c",
          channelIcon: "channelIcon_a71a1c",
          status: "status_a71a1c",
          statusWrapper: "statusWrapper_a71a1c",
          statusOnline: "statusOnline_a71a1c status_a71a1c",
          statusOffline: "statusOffline_a71a1c status_a71a1c",
          count: "count_a71a1c",
          guildNameWrapper: "guildNameWrapper_a71a1c",
          guildName: "guildName_a71a1c",
          guildBadge: "guildBadge_a71a1c",
          guildInfo: "guildInfo_a71a1c",
          guildDetail: "guildDetail_a71a1c",
          statusCounts: "statusCounts_a71a1c",
          inviteSplash: "inviteSplash_a71a1c",
          inviteSplashImage: "inviteSplashImage_a71a1c",
          inviteSplashBadge: "inviteSplashBadge_a71a1c",
          inviteSplashImageLoaded: "inviteSplashImageLoaded_a71a1c",
          button: "button_a71a1c",
          buttonSize: "buttonSize_a71a1c",
          guildIconExpired: "guildIconExpired_a71a1c guildIcon_a71a1c",
          inviteDestinationExpired: "inviteDestinationExpired_a71a1c",
          buttonForNonMember: "buttonForNonMember_a71a1c",
          "invite-button-resolving": "invite-button-resolving_a71a1c",
          resolvingWrapper: "resolvingWrapper_a71a1c",
          resolving: "resolving_a71a1c",
          resolvingBackground: "resolvingBackground_a71a1c",
          resolvingFakeButton: "resolvingFakeButton_a71a1c",
        }),
      );
    },
    443644: function (e, n, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=ea4975c884ae3f84c83b.js.map
