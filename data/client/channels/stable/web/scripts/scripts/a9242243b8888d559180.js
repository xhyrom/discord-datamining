"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89943"],
  {
    370370: function (e, n, l) {
      l.d(n, {
        j: function () {
          return c;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(379357),
        a = l(442550),
        s = l(297781),
        d = l(443487),
        u = l(494399);
      let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
      n.Z = i.memo((e) => {
        let { entry: n, channel: l, selected: i, hovered: o } = e,
          { largeImage: h } = (0, r.rv)({ entry: n, showCoverImage: !1 });
        return (0, t.jsxs)(d.Zb, {
          selected: i,
          children: [
            (0, t.jsxs)(d.e$, {
              children: [
                (0, t.jsx)(d.F9, {
                  entry: n,
                  channelId: l.id,
                  guildId: l.guild_id,
                }),
                (0, t.jsx)(d.ll, { children: n.extra.activity_name }),
                (0, t.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: c.map((e, l) =>
                    (0, t.jsx)(e, { entry: n, hovered: o }, l),
                  ),
                }),
              ],
            }),
            (0, t.jsx)(a.f, {
              alt: null == h ? void 0 : h.alt,
              src: null == h ? void 0 : h.src,
              size: 48,
              className: u.thumbnail,
            }),
          ],
        });
      });
    },
    91140: function (e, n, l) {
      l.d(n, {
        W: function () {
          return c;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(379357),
        a = l(442550),
        s = l(297781),
        d = l(443487),
        u = l(494399);
      let c = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ];
      n.Z = i.memo((e) => {
        var n;
        let { entry: l, channel: i, selected: o, hovered: h } = e,
          { largeImage: m } = (0, r.rv)({ entry: l, showCoverImage: !1 });
        return (0, t.jsxs)(d.Zb, {
          selected: o,
          children: [
            (0, t.jsxs)(d.e$, {
              children: [
                (0, t.jsx)(d.F9, {
                  entry: l,
                  channelId: i.id,
                  guildId: i.guild_id,
                }),
                (0, t.jsx)(d.ll, { children: l.extra.game_name }),
                (0, t.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: c.map((e, n) =>
                    (0, t.jsx)(e, { entry: l, hovered: h }, n),
                  ),
                }),
              ],
            }),
            (0, t.jsx)(a.f, {
              alt:
                null !== (n = null == m ? void 0 : m.text) && void 0 !== n
                  ? n
                  : null == m
                    ? void 0
                    : m.alt,
              src: null == m ? void 0 : m.src,
              size: 48,
              className: u.thumbnail,
              showTooltip: (null == m ? void 0 : m.text) != null,
            }),
          ],
        });
      });
    },
    551228: function (e, n, l) {
      l.d(n, {
        pi: function () {
          return x;
        },
        te: function () {
          return m;
        },
      }),
        l(47120);
      var t = l(200651),
        i = l(192379),
        r = l(442837),
        a = l(594174),
        s = l(379357),
        d = l(719247),
        u = l(442550),
        c = l(297781),
        o = l(443487),
        h = l(494399);
      let m = [c.XF];
      function x(e) {
        var n, l, t, i;
        let s = (0, r.e7)([d.Z], () => d.Z.getMatchingActivity(e)),
          u = (0, r.e7)([a.default], () => a.default.getUser(e.author_id));
        if (null == s || null == u) return {};
        let c = e.extra.entries[0],
          o =
            null !==
              (t =
                null !== (l = s.state) && void 0 !== l
                  ? l
                  : null === (n = c.media.artists[0]) || void 0 === n
                    ? void 0
                    : n.name) && void 0 !== t
              ? t
              : c.media.title,
          h = null !== (i = s.details) && void 0 !== i ? i : c.media.title;
        return { activity: s, artist: o, currentEntry: c, title: h, user: u };
      }
      n.ZP = i.memo(function (e) {
        let { entry: n, channel: l, selected: i } = e,
          { activity: r, artist: a } = x(n),
          { largeImage: d } = (0, s.rv)({ entry: n });
        return null == r
          ? (0, t.jsx)(o.cA, {})
          : (0, t.jsxs)(o.Zb, {
              selected: i,
              children: [
                (0, t.jsxs)(o.e$, {
                  children: [
                    (0, t.jsx)(o.F9, {
                      entry: n,
                      channelId: l.id,
                      guildId: l.guild_id,
                    }),
                    (0, t.jsx)(o.ll, { children: a }),
                    (0, t.jsx)(c.Gk, {
                      location: c.Gt.CARD,
                      children: m.map((e, l) => (0, t.jsx)(e, { entry: n }, l)),
                    }),
                  ],
                }),
                (0, t.jsx)(u.f, {
                  src: null == d ? void 0 : d.src,
                  size: 48,
                  className: h.thumbnail,
                }),
              ],
            });
      });
    },
    278399: function (e, n, l) {
      l.d(n, {
        Ho: function () {
          return m;
        },
        y9: function () {
          return x;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(317261),
        a = l(823379),
        s = l(379357),
        d = l(442550),
        u = l(561308),
        c = l(297781),
        o = l(443487),
        h = l(494399);
      let m = [c.An],
        x = [r._.WEEK];
      n.ZP = i.memo((e) => {
        let { entry: n, channel: l, selected: i } = e,
          { largeImage: r } = (0, s.rv)({ entry: n }),
          v = (0, u.Nq)(n);
        return null != v && (0, a.Hi)(v, x)
          ? (0, t.jsxs)(o.Zb, {
              selected: i,
              children: [
                (0, t.jsxs)(o.e$, {
                  children: [
                    (0, t.jsx)(o.F9, {
                      entry: n,
                      channelId: l.id,
                      guildId: l.guild_id,
                    }),
                    (0, t.jsx)(o.ll, { children: n.extra.artist.name }),
                    (0, t.jsx)(c.Gk, {
                      location: c.Gt.CARD,
                      children: m.map((e, l) => (0, t.jsx)(e, { entry: n }, l)),
                    }),
                  ],
                }),
                (0, t.jsx)(d.f, {
                  src: null == r ? void 0 : r.src,
                  size: 48,
                  className: h.thumbnail,
                }),
              ],
            })
          : null;
      });
    },
    555672: function (e, n, l) {
      l.d(n, {
        Hs: function () {
          return h;
        },
        qy: function () {
          return x;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(317261),
        a = l(379357),
        s = l(442550),
        d = l(561308),
        u = l(297781),
        c = l(443487),
        o = l(494399);
      let h = [u.E6],
        m = [r._.WEEK];
      function x(e) {
        return null != e && m.includes(e);
      }
      n.ZP = i.memo((e) => {
        let { entry: n, channel: l, selected: i } = e,
          { largeImage: r } = (0, a.rv)({ entry: n }),
          m = (0, d.Nq)(n);
        return null != m && x(m)
          ? (0, t.jsxs)(c.Zb, {
              selected: i,
              children: [
                (0, t.jsxs)(c.e$, {
                  children: [
                    (0, t.jsx)(c.F9, {
                      entry: n,
                      channelId: l.id,
                      guildId: l.guild_id,
                    }),
                    (0, t.jsx)(c.ll, { children: n.extra.game_name }),
                    (0, t.jsx)(u.Gk, {
                      location: u.Gt.CARD,
                      children: h.map((e, l) => (0, t.jsx)(e, { entry: n }, l)),
                    }),
                  ],
                }),
                (0, t.jsx)(s.f, {
                  src: null == r ? void 0 : r.src,
                  size: 48,
                  className: o.thumbnail,
                  alt: null == r ? void 0 : r.alt,
                }),
              ],
            })
          : null;
      });
    },
    335326: function (e, n, l) {
      l.d(n, {
        t: function () {
          return c;
        },
      });
      var t = l(200651),
        i = l(192379),
        r = l(379357),
        a = l(442550),
        s = l(297781),
        d = l(443487),
        u = l(494399);
      let c = [s.Yl, s.Rg];
      n.Z = i.memo((e) => {
        let { entry: n, channel: l, selected: i } = e,
          { largeImage: o } = (0, r.rv)({ entry: n });
        return (0, t.jsxs)(d.Zb, {
          selected: i,
          children: [
            (0, t.jsxs)(d.e$, {
              children: [
                (0, t.jsx)(d.F9, {
                  entry: n,
                  channelId: l.id,
                  guildId: l.guild_id,
                }),
                (0, t.jsx)(d.ll, { children: n.extra.media_title }),
                (0, t.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: c.map((e, l) => (0, t.jsx)(e, { entry: n }, l)),
                }),
              ],
            }),
            (0, t.jsx)(a.f, {
              src: null == o ? void 0 : o.src,
              size: 48,
              className: u.thumbnail,
              alt: null == o ? void 0 : o.alt,
            }),
          ],
        });
      });
    },
    443487: function (e, n, l) {
      l.d(n, {
        F9: function () {
          return _;
        },
        Zb: function () {
          return f;
        },
        cA: function () {
          return j;
        },
        e$: function () {
          return g;
        },
        ll: function () {
          return E;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(120356),
        r = l.n(i),
        a = l(442837),
        s = l(481060),
        d = l(686546),
        u = l(271383),
        c = l(430824),
        o = l(594174),
        h = l(5192),
        m = l(192918),
        x = l(689938),
        v = l(494399);
      function j() {
        return (0, t.jsx)("div", { className: v.container, "aria-hidden": !0 });
      }
      function f(e) {
        let { children: n, selected: l } = e;
        return (0, t.jsx)("div", {
          className: r()(v.container, v.openOnHover, { [v.selected]: l }),
          children: n,
        });
      }
      function g(e) {
        let { children: n } = e;
        return (0, t.jsx)("div", { className: v.infoSection, children: n });
      }
      function N(e) {
        let { users: n, guildId: l, "aria-hidden": i } = e;
        return (0, t.jsx)("div", {
          className: v.facePile,
          children: n.map((e, r) => {
            let a = (0, t.jsx)(s.Avatar, {
              src: e.getAvatarURL(l, 80),
              size: s.AvatarSizes.SIZE_16,
              "aria-label": i ? void 0 : e.username,
              "aria-hidden": i,
            });
            return r === n.length - 1
              ? (0, t.jsx)(
                  "div",
                  { className: v.facePileItem, children: a },
                  e.id,
                )
              : (0, t.jsx)(
                  d.ZP,
                  {
                    width: 16,
                    height: 16,
                    className: v.facePileItem,
                    mask: d.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                    children: a,
                  },
                  e.id,
                );
          }),
        });
      }
      function _(e) {
        let { guildId: n, channelId: l, entry: i, maxAvatars: r = 3 } = e,
          d = i.author_id,
          j = (0, a.e7)([o.default], () => o.default.getUser(d)),
          {
            displayParticipants: f,
            participant1: g,
            participant2: _,
            numOtherParticipants: E,
          } = (0, m.Z)(i, r),
          p = (0, a.e7)([u.ZP], () => u.ZP.getMember(n, d)),
          Z = (0, a.e7)(
            [c.Z],
            () => {
              var e;
              return (null == p ? void 0 : p.colorRoleId) != null
                ? null === (e = c.Z.getRole(n, p.colorRoleId)) || void 0 === e
                  ? void 0
                  : e.name
                : void 0;
            },
            [n, p],
          );
        if (null == j) return null;
        let I = null == p ? void 0 : p.colorString,
          A = h.ZP.getName(n, l, j);
        return (0, t.jsxs)("div", {
          className: v.userSection,
          children: [
            (0, t.jsx)(N, { users: f, guildId: n, "aria-hidden": !0 }),
            (0, t.jsx)(s.NameWithRole, {
              color: null != I ? I : void 0,
              roleName: Z,
              name: A,
              className: v.userName,
              "aria-hidden": !0,
            }),
            E > 0
              ? (0, t.jsx)("div", {
                  className: v.additionalParticipantBadge,
                  "aria-hidden": !0,
                  children: (0, t.jsxs)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-normal",
                    className: v.additionalParticipantBadgeText,
                    children: ["+", E],
                  }),
                })
              : null,
            (0, t.jsx)(s.HiddenVisually, {
              children: x.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS_V2.format({
                user0: h.ZP.getName(n, l, g),
                user1: h.ZP.getName(n, l, _),
                countOthers: E,
                name0Hook: (e, n) => (0, t.jsx)("span", { children: e }, n),
                name1Hook: (e, n) => (0, t.jsx)("span", { children: e }, n),
                countOthersHook: (e, n) =>
                  (0, t.jsx)("span", { children: e }, n),
              }),
            }),
          ],
        });
      }
      function E(e) {
        let { children: n } = e;
        return (0, t.jsx)(s.Heading, {
          color: "text-normal",
          variant: "heading-sm/medium",
          className: v.contentTitle,
          lineClamp: 1,
          children: n,
        });
      }
    },
    192918: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return d;
        },
      }),
        l(47120);
      var t = l(192379),
        i = l(442837),
        r = l(594174),
        a = l(823379);
      let s = [];
      function d(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          l = (0, i.Wu)(
            [r.default],
            () => {
              let n = e.participants
                  .map((e) => r.default.getUser(e))
                  .filter(a.lm),
                l = n.find((n) => n.id === e.author_id),
                t = n.filter((n) => n.id !== e.author_id);
              return null == l ? s : [...t, l];
            },
            [e],
          ),
          d = t.useMemo(() => l.slice(-n), [n, l]),
          u = d[d.length - 1],
          c = d[d.length - 2],
          o = Math.max(l.length - 1, 0);
        return {
          orderedParticipants: l,
          displayParticipants: d,
          participant1: u,
          participant2: c,
          numOtherParticipants: o,
        };
      }
    },
    317261: function (e, n, l) {
      var t, i;
      l.d(n, {
        _: function () {
          return t;
        },
      }),
        ((i = t || (t = {}))[(i.AGGREGATE_RANGE_UNSPECIFIED = 0)] =
          "AGGREGATE_RANGE_UNSPECIFIED"),
        (i[(i.WEEK = 1)] = "WEEK");
    },
  },
]);
//# sourceMappingURL=a9242243b8888d559180.js.map
