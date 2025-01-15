"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73549"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    486527: function (e, n, t) {
      t.d(n, {
        AR: function () {
          return s;
        },
        C2: function () {
          return o;
        },
        Pp: function () {
          return f;
        },
        VX: function () {
          return d;
        },
        b7: function () {
          return I;
        },
        sE: function () {
          return l;
        },
      });
      var i,
        a,
        r,
        c,
        o,
        d,
        l,
        s,
        _ = t(149765),
        u = t(700785),
        p = t(981631),
        m = t(388032);
      ((i = o || (o = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((a = d || (d = {})).GUILD_TEMPLATES = "guild-templates"),
        (a.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (a.CHOOSE_GUILD = "choose-guild"),
        (a.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (a.CONFIRMATION = "confirmation"),
        ((r = l || (l = {})).CREATE = "CREATE"),
        (r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (r.HUB_STUDY = "HUB_STUDY"),
        (r.HUB_CLASS = "HUB_CLASS"),
        (r.HUB_SOCIAL = "HUB_SOCIAL"),
        (r.HUB_MAJOR = "HUB_MAJOR"),
        (r.HUB_DORM = "HUB_DORM"),
        ((c = s || (s = {}))[(c.ALL = -1)] = "ALL"),
        (c[(c.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (c[(c.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (c[(c.CLASS = 2)] = "CLASS"),
        (c[(c.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (c[(c.MISC = 5)] = "MISC");
      function I(e) {
        return "883060064561299456" === e
          ? [
              { value: 1, label: m.intl.string(m.t["Z+MPNz"]) },
              { value: 2, label: m.intl.string(m.t.dV9uBg) },
              { value: 3, label: m.intl.string(m.t.xoHQcn) },
              { value: 5, label: m.intl.string(m.t.Ao41rq) },
            ]
          : [
              { value: 1, label: m.intl.string(m.t.oNHFUF), idealSize: 100 },
              { value: 2, label: m.intl.string(m.t.V1i8nZ) },
              { value: 3, label: m.intl.string(m.t.Z2ygQk), idealSize: 50 },
              { value: 5, label: m.intl.string(m.t["0Bg9LS"]) },
            ];
      }
      function f() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: m.intl.string(m.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: m.intl.string(m.t["mmFA5+"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: m.intl.string(m.t["VCAA/f"]),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: m.intl.string(m.t.GHQoER),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: m.intl.string(m.t.nSsoSE),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: m.intl.string(m.t.yZCzMT),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: m.intl.string(m.t.mobYpK),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: m.intl.string(m.t.pIOigI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.ao2wxs),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: m.intl.string(m.t.AIszv7),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: m.intl.string(m.t.vcKDMj),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: m.intl.string(m.t.XS6gcH),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: m.intl.string(m.t.hi1Ykp),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: m.intl.string(m.t.vw8oaW),
                type: p.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: u.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: _.$e(
                  u.TP,
                  p.Plq.MANAGE_ROLES,
                  p.Plq.MANAGE_CHANNELS,
                  p.Plq.KICK_MEMBERS,
                  p.Plq.BAN_MEMBERS,
                  p.Plq.MANAGE_NICKNAMES,
                  p.Plq.MANAGE_GUILD_EXPRESSIONS,
                  p.Plq.MANAGE_MESSAGES,
                  p.Plq.SEND_TTS_MESSAGES,
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: m.intl.string(m.t.fYwSi4),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: m.intl.string(m.t["HY+vdH"]),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: m.intl.string(m.t["3eM+Li"]),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: m.intl.string(m.t.Qi0D7e),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: m.intl.string(m.t.yZIUV1),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: m.intl.string(m.t.pIOigI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.ao2wxs),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.AIszv7),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: m.intl.string(m.t.vcKDMj),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: m.intl.string(m.t.XS6gcH),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 1 }),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 2 }),
                type: p.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: m.intl.string(m.t.e5gFS0),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: m.intl.string(m.t["HY+vdH"]),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: m.intl.string(m.t["710tNj"]),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: m.intl.string(m.t.Qi0D7e),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: m.intl.string(m.t.yZIUV1),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: m.intl.string(m.t.pIOigI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.ao2wxs),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: m.intl.string(m.t.AIszv7),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: m.intl.string(m.t.vcKDMj),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: m.intl.string(m.t.XS6gcH),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 1 }),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 2 }),
                type: p.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: m.intl.string(m.t.oOj7Ii),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: m.intl.string(m.t.yZIUV1),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: m.intl.string(m.t.pIOigI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: m.intl.string(m.t.ao2wxs),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: m.intl.string(m.t.AIszv7),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: m.intl.string(m.t.d4F8gI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: m.intl.string(m.t.vcKDMj),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: m.intl.string(m.t.CLWKNj),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.g3qPRk),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: m.intl.string(m.t.yQZpe3),
                type: p.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: m.intl.string(m.t["9kly4e"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: m.intl.string(m.t["HY+vdH"]),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: m.intl.string(m.t.yZCzMT),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: m.intl.string(m.t.Qi0D7e),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: m.intl.string(m.t.yZIUV1),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: m.intl.string(m.t.pIOigI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.ao2wxs),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: m.intl.string(m.t.AIszv7),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: m.intl.string(m.t.vcKDMj),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: m.intl.string(m.t.XS6gcH),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 1 }),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 2 }),
                type: p.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: m.intl.string(m.t["ppGw/P"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: m.intl.string(m.t["HY+vdH"]),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: m.intl.string(m.t["b2+FCQ"]),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: m.intl.string(m.t.yZIUV1),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: m.intl.string(m.t.pIOigI),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: m.intl.string(m.t.ao2wxs),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: m.intl.string(m.t.AIszv7),
                type: p.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: m.intl.string(m.t.vcKDMj),
                type: p.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: m.intl.string(m.t.XS6gcH),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: m.intl.string(m.t.g3qPRk),
                type: p.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: m.intl.string(m.t.CLWKNj),
                type: p.d4z.GUILD_VOICE,
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
          return f;
        },
        so: function () {
          return I;
        },
        wg: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(442837),
        a = t(159300),
        r = t(427679),
        c = t(592125),
        o = t(984933),
        d = t(430824),
        l = t(496675),
        s = t(700785),
        _ = t(924301),
        u = t(765305),
        p = t(981631);
      function m(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [c.Z];
        let { entityType: i, channelId: a } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (i === u.WX.EXTERNAL) return !0;
        let r = t.getChannel(a);
        return null != r && s.Uu(p.Plq.VIEW_CHANNEL, r);
      }
      function I(e) {
        let [n, t, i, s] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.ZP, c.Z, d.Z, r.Z];
        if ((0, _.Z2)(e)) return !1;
        let { guild_id: p, channel_id: I } = e,
          f =
            e.entity_type === u.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(I),
          g = i.getGuild(p),
          C = s.getStageInstanceByChannel(I);
        return !!(0, a.b)(l.Z, g, f, C) && null != f && m(e, [t]);
      }
      function f(e) {
        return (0, i.e7)(
          [o.ZP, c.Z, d.Z, r.Z],
          () => I(e, [o.ZP, c.Z, d.Z, r.Z]),
          [e],
        );
      }
    },
    460838: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return a;
        },
        Z: function () {
          return A;
        },
      });
      var i,
        a,
        r = t(200651),
        c = t(192379),
        o = t(120356),
        d = t.n(o),
        l = t(442837),
        s = t(481060),
        _ = t(447003),
        u = t(471445),
        p = t(565138),
        m = t(357156),
        I = t(496675),
        f = t(725436),
        g = t(274311),
        C = t(854698),
        b = t(285784),
        v = t(95291),
        h = t(742593),
        T = t(810561),
        U = t(187443),
        E = t(131154),
        L = t(765305),
        x = t(981631),
        D = t(388032),
        G = t(662416);
      function S(e) {
        let { channel: n, onClick: t } = e,
          { canManageAllEvents: i } = (0, m.XJ)(n),
          a = (0, l.e7)(
            [I.Z],
            () => !n.isGuildVocal() || I.Z.can(x.Plq.CONNECT, n),
            [n],
          ),
          o = c.useMemo(() => (0, _.Z)(n), [n]),
          p = (0, u.KS)(n);
        return (0, r.jsx)(s.Tooltip, {
          text: D.intl.string(D.t.nHjY9P),
          shouldShow: !a && null != t,
          children: (e) =>
            (0, r.jsxs)(s.Clickable, {
              ...e,
              className: d()(G.inline, G.channelContainer, {
                [G.channelContainerEnabled]: a && null != t,
                [G.channelContainerDisabled]: !a && null != t,
              }),
              onClick: t,
              children: [
                (0, r.jsx)(s.Tooltip, {
                  text: D.intl.string(D.t["48WXaW"]),
                  shouldShow: i && o && a && null != t,
                  children: (e) =>
                    null != p
                      ? (0, r.jsx)(p, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: G.icon,
                        })
                      : null,
                }),
                (0, r.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: G.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function y(e) {
        let {
          guild: n,
          channel: t,
          onJoinClick: i,
          handleLocationClick: a,
          location: c,
          isExternal: o,
          isHub: l,
        } = e;
        if (l)
          return null == n
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                className: G.inline,
                children: [
                  (0, r.jsx)(p.Z, {
                    className: G.guildIcon,
                    size: p.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != t
          ? (0, r.jsx)(S, { channel: t, onClick: i })
          : (0, r.jsxs)(s.Clickable, {
              className: G.inline,
              onClick: a,
              children: [
                (0, r.jsx)(s.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: d()(G.channelContainer, G.icon),
                }),
                (0, r.jsx)(s.Text, {
                  className: o ? G.externalLocation : G.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, f.m)(c, !0),
                }),
              ],
            });
      }
      function A(e) {
        let {
            className: n,
            guild: t,
            channel: i,
            creator: a,
            name: c,
            entityType: o,
            description: l,
            imageLocation: _ = 0,
            imageSource: u,
            isActive: p,
            isUserLurking: m,
            isJoined: I = !1,
            isMember: f = !1,
            isHub: x = !1,
            speakers: D,
            speakerCount: S,
            rsvped: A,
            canInvite: N,
            location: z,
            truncate: O,
            onContextMenu: B,
            onJoinClick: H,
            onJoinGuildClick: R,
            onGoToGuildClick: k,
            onRsvpClick: w,
            onStartClick: M,
            onInviteClick: j,
            onEndClick: P,
            onClick: Z,
            isNew: X,
            guildEvent: V,
            eventPreview: Y,
            recurrenceRule: q,
            recurrenceId: F,
          } = e,
          W = (0, g.Q)(i, o),
          K = o === L.WX.EXTERNAL,
          J = K ? (e) => e.stopPropagation() : void 0,
          Q = [];
        if (null != q && null != event) {
          let e = (0, C.Ho)(q);
          Q = (0, C.PJ)(4, e, new Date(V.scheduled_start_time));
        }
        let $ = Q.length > 0;
        return (0, r.jsxs)(s.ClickableContainer, {
          "aria-label": c,
          onClick: () => (null == Z ? void 0 : Z(F)),
          onContextMenu: B,
          className: d()(G.card, { [G.joined]: I, [G.lurking]: m }, n),
          children: [
            (0, r.jsxs)("div", {
              className: d()(G.padding, { [G.isRecurring]: $ }),
              children: [
                0 === _ && (0, r.jsx)(v.Z, { source: u }),
                (0, r.jsx)(h.ZP, {
                  creator: a,
                  name: c,
                  description: l,
                  imageSource: 1 === _ ? u : null,
                  truncate: O,
                  guildId: null == t ? void 0 : t.id,
                  isHub: x,
                  isNew: X,
                  guildEvent: V,
                  eventPreview: Y,
                  recurrenceId: F,
                }),
                p &&
                  null != t &&
                  null != D &&
                  S > 0 &&
                  (0, r.jsx)(E.Z, {
                    guild: t,
                    speakers: D,
                    speakerCount: S,
                    className: G.spacing,
                  }),
                (0, r.jsx)("hr", { className: G.divider }),
                (0, r.jsxs)("div", {
                  className: d()(G.inline, G.footer),
                  children: [
                    (0, r.jsx)(y, {
                      guild: t,
                      channel: i,
                      onJoinClick: H,
                      handleLocationClick: J,
                      location: z,
                      isExternal: K,
                      isHub: x,
                    }),
                    x
                      ? (0, r.jsx)(U.Z, {
                          isActive: p,
                          isUserLurking: m,
                          isMember: f,
                          rsvped: A,
                          onRsvpClick: w,
                          onJoinGuildClick: R,
                          onGoToGuildClick: k,
                          guildName: null == t ? void 0 : t.name,
                          canInvite: N,
                          isChannelPublic: W,
                          onInviteClick: j,
                        })
                      : (0, r.jsx)(b.ZP, {
                          entityType: o,
                          isJoined: I,
                          isActive: p,
                          isUserLurking: m,
                          rsvped: A,
                          canInvite: N,
                          isChannelPublic: W,
                          onContextMenu: B,
                          onJoinClick: H,
                          onRsvpClick: w,
                          onStartClick: M,
                          onInviteClick: j,
                          onEndClick: P,
                        }),
                  ],
                }),
                $ && (0, r.jsx)("hr", { className: G.divider }),
              ],
            }),
            $ &&
              (0, r.jsx)(T.Z, {
                guildId: null == t ? void 0 : t.id,
                recurrenceRule: q,
                guildEventId: V.id,
                onRecurrenceClick: Z,
              }),
          ],
        });
      }
      ((i = a || (a = {}))[(i.BANNER = 0)] = "BANNER"),
        (i[(i.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        c = t(481060),
        o = t(388032),
        d = t(888110);
      function l(e) {
        let { guild: n, speakers: t, speakerCount: a, className: l } = e,
          s = t.slice(0, 5),
          _ = s.map((e) => {
            var t, a;
            return (0, i.jsxs)(
              "div",
              {
                className: d.speakerContainer,
                children: [
                  (0, i.jsx)(c.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: c.AvatarSizes.SIZE_20,
                    className: d.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className: d.textInGridContainer,
                    children: (0, i.jsx)(c.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: d.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (a = e.user) || void 0 === a
                  ? void 0
                  : a.id,
            );
          }),
          u = a - s.length;
        return (0, i.jsxs)("div", {
          className: r()(d.grid, l),
          children: [
            _,
            u > 0 &&
              (0, i.jsxs)("div", {
                className: d.speakerContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: d.iconMicrophone,
                    children: (0, i.jsx)(c.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, i.jsx)(c.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: d.textInGrid,
                    children: o.intl.format(o.t["185ggI"], { count: u }),
                  }),
                ],
              }),
          ],
        });
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
        r = t.n(a),
        c = t(388032),
        o = t(730995),
        d = t(296507),
        l = t(866402);
      function s(e) {
        let { className: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: r()(o.container, n),
          children: [
            (0, i.jsx)("img", {
              alt: c.intl.string(c.t.VoB8OT),
              src: l,
              className: r()(o.sparkleIcon, o.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: c.intl.string(c.t.VoB8OT),
              src: d,
              className: r()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(192379),
        a = t(881052);
      function r(e, n) {
        let [t, r] = i.useState(!1),
          [c, o] = i.useState(null);
        return [
          async () => {
            r(!0), o(null);
            try {
              let n = await e();
              return r(!1), o(null), n;
            } catch (t) {
              let e = new a.Hx(t);
              return null == n || n(e), o(e), r(!1), null;
            }
          },
          { loading: t, error: c },
        ];
      }
    },
    222403: function (e, n, t) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    662416: function (e, n, t) {
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
    617386: function (e, n, t) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
      };
    },
    426875: function (e, n, t) {
      e.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    571327: function (e, n, t) {
      e.exports = { container: "container_f87f77" };
    },
    11446: function (e, n, t) {
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
    962415: function (e, n, t) {
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
    560883: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    707102: function (e, n, t) {
      e.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    21394: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    374918: function (e, n, t) {
      e.exports = {
        blockedUsersContainer: "blockedUsersContainer_b229b0",
        form: "form_b229b0",
        formItem: "formItem_b229b0",
        topicFormItem: "topicFormItem_b229b0",
        textInput: "textInput_b229b0",
        warning: "warning_b229b0",
        broadcastInfoDescription: "broadcastInfoDescription_b229b0",
        broadcastInfoTooltip: "broadcastInfoTooltip_b229b0",
        addImageHint: "addImageHint_b229b0",
        imagePreview: "imagePreview_b229b0",
        imagePreviewInner: "imagePreviewInner_b229b0",
      };
    },
    931272: function (e, n, t) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
      };
    },
    566027: function (e, n, t) {
      e.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    736950: function (e, n, t) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    228315: function (e, n, t) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    363819: function (e, n, t) {
      e.exports = {
        content: "content_f9a98f",
        channelName: "channelName_f9a98f",
        icon: "icon_f9a98f",
        locationIcon: "locationIcon_f9a98f",
        textContainer: "textContainer_f9a98f",
        subheader: "subheader_f9a98f",
        previewCard: "previewCard_f9a98f",
      };
    },
    701961: function (e, n, t) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    909116: function (e, n, t) {
      e.exports = {
        container: "container_d7123a",
        close: "close_d7123a",
        iconContainer: "iconContainer_d7123a",
        icon: "icon_d7123a",
        header: "header_d7123a text_d7123a",
        body: "body_d7123a text_d7123a",
        invite: "invite_d7123a",
        inviteDetail: "inviteDetail_d7123a",
      };
    },
    888110: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    228593: function (e, n, t) {
      e.exports = {
        container: "container_c811f3",
        content: "content_c811f3",
        textContainer: "textContainer_c811f3",
        descriptionText: "descriptionText_c811f3",
        image: "image_c811f3",
        inlineText: "inlineText_c811f3",
        footer: "footer_c811f3",
        button: "button_c811f3",
      };
    },
    713046: function (e, n, t) {
      e.exports = {
        avatarUploader: "avatarUploader_e9b3be",
        avatarUploaderDisabled: "avatarUploaderDisabled_e9b3be",
        avatarUploaderInnerSquare: "avatarUploaderInnerSquare_e9b3be",
        avatarUploaderInnerSquareDisabled:
          "avatarUploaderInnerSquareDisabled_e9b3be",
        avatarUploadIcon: "avatarUploadIcon_e9b3be",
        hideDefaultIcon: "hideDefaultIcon_e9b3be",
      };
    },
    551071: function (e, n, t) {
      e.exports = {
        imageUploader: "imageUploader_de76e4",
        removeButton: "removeButton_de76e4",
        sizeInfo: "sizeInfo_de76e4",
        disabled: "disabled_de76e4",
        imageUploaderInner: "imageUploaderInner_de76e4",
        imageUploaderIconWrapper: "imageUploaderIconWrapper_de76e4",
        imageUploaderFileInput: "imageUploaderFileInput_de76e4",
        imageUploaderAcronym: "imageUploaderAcronym_de76e4",
        imageUploaderHint: "imageUploaderHint_de76e4",
        imageUploaderIcon: "imageUploaderIcon_de76e4",
        imageUploaderIconDisabled: "imageUploaderIconDisabled_de76e4",
      };
    },
    546820: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_cedfaf",
        scroller: "scroller_cedfaf",
        modal: "modal_cedfaf",
        closeButton: "closeButton_cedfaf",
        headerCloseButtonSpacing: "headerCloseButtonSpacing_cedfaf",
        header: "header_cedfaf",
        headerText: "headerText_cedfaf",
        headerChannelContainer: "headerChannelContainer_cedfaf",
        channelIcon: "channelIcon_cedfaf",
        searchBar: "searchBar_cedfaf",
        hubHeader: "hubHeader_cedfaf",
        hubInviteTitle: "hubInviteTitle_cedfaf",
        hubFriendSearch: "hubFriendSearch_cedfaf",
        inviteRow: "inviteRow_cedfaf",
        inviteRowAvatar: "inviteRowAvatar_cedfaf",
        inviteRowInfo: "inviteRowInfo_cedfaf",
        inviteRowName: "inviteRowName_cedfaf",
        inviteRowButton: "inviteRowButton_cedfaf",
        inviteRowEmptyState: "inviteRowEmptyState_cedfaf",
        warningContainer: "warningContainer_cedfaf",
        warningIcon: "warningIcon_cedfaf",
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        subText: "subText_cedfaf",
        temporaryMembershipContainerBackground:
          "temporaryMembershipContainerBackground_cedfaf",
        temporaryMembershipContainer: "temporaryMembershipContainer_cedfaf",
        noScroll: "noScroll_cedfaf",
        settingsFooter: "settingsFooter_cedfaf",
        footer: "footer_cedfaf",
        footerText: "footerText_cedfaf",
        headerContainer: "headerContainer_cedfaf",
        welcomeImage: "welcomeImage_cedfaf",
        welcomeHeading: "welcomeHeading_cedfaf",
        welcomeSubheading: "welcomeSubheading_cedfaf",
        errorMessage: "errorMessage_cedfaf",
        errorLink: "errorLink_cedfaf",
        acronym: "acronym_cedfaf",
        guestBody: "guestBody_cedfaf",
        guestSendInviteLinkHeader: "guestSendInviteLinkHeader_cedfaf",
        guestSelectChannelHeader: "guestSelectChannelHeader_cedfaf",
      };
    },
    305191: function (e, n, t) {
      e.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
    730995: function (e, n, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=e0dde061e810895f8318.js.map
