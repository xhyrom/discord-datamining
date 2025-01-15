"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99990"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(906732);
      function l(n, e) {
        return function (t) {
          let { analyticsLocations: l } = (0, r.ZP)(e);
          return (0, i.jsx)(r.Gt, {
            value: l,
            children: (0, i.jsx)(n, { ...t }),
          });
        };
      }
    },
    422200: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(239091),
        a = t(108843),
        u = t(100527),
        o = t(299206),
        d = t(895563),
        c = t(32750),
        s = t(109764),
        h = t(323597),
        f = t(461535),
        Z = t(438536),
        p = t(251746),
        M = t(193987),
        j = t(933793),
        m = t(13736),
        x = t(732393),
        G = t(214906),
        _ = t(612856),
        g = t(137591),
        v = t(388032);
      e.default = (0, a.Z)(
        function (n) {
          let { channel: e, onSelect: t } = n,
            a = (0, s.Z)(e),
            u = (0, f.Z)(e),
            C = (0, G.Z)(e),
            b = (0, c.Z)(e),
            P = (0, M.Z)(e),
            I = (0, h.Z)(e),
            E = (0, o.Z)({ id: e.id, label: v.intl.string(v.t.DQ797u) }),
            U = (0, Z.Z)(e, "Context Menu"),
            O = (0, j.Z)(e),
            T = (0, _.Z)(e),
            k = (0, m.Z)(e),
            y = (0, x.Z)(e.id),
            D = (0, p.Z)(e),
            L = (0, g.Z)(e),
            w = (0, d.l)(e),
            z = (0, d.P)(e);
          return (0, i.jsxs)(r.Menu, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": v.intl.string(v.t["1NBjqa"]),
            onSelect: t,
            children: [
              (0, i.jsxs)(
                r.MenuGroup,
                { children: [u, w] },
                "mark-as-read-or-favorite",
              ),
              (0, i.jsxs)(
                r.MenuGroup,
                { children: [U, D, b, P, k, y, a] },
                "thread-actions",
              ),
              (0, i.jsxs)(r.MenuGroup, { children: [C, T] }, "notifications"),
              (0, i.jsx)(r.MenuGroup, { children: z }),
              (0, i.jsxs)(
                r.MenuGroup,
                { children: [L, O, I] },
                "admin-actions",
              ),
              (0, i.jsx)(r.MenuGroup, { children: E }, "developer-actions"),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU],
      );
    },
    461535: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(45114),
        u = t(456269),
        o = t(344185),
        d = t(569471),
        c = t(131704),
        s = t(324067),
        h = t(306680),
        f = t(981631),
        Z = t(388032);
      function p(n) {
        let e = (function (n) {
          let e = (0, u.n2)(n.guild_id, n.id),
            t = (0, r.e7)(
              [h.ZP, s.Z, o.Z, d.Z],
              () => {
                if (n.isForumPost()) return h.ZP.isForumPostUnread(n.id);
                if (n.type !== f.d4z.GUILD_CATEGORY)
                  return h.ZP.hasUnreadOrMentions(n.id);
                {
                  let e = s.Z.getCategories(n.getGuildId());
                  if (null == e[n.id]) return !1;
                  if (
                    e[n.id].some((n) => {
                      let { channel: e } = n;
                      return (
                        (0, c.Em)(e.type) && h.ZP.hasUnreadOrMentions(e.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(e[n.id].map((n) => n.channel.id)),
                    i = o.Z.getThreadsForGuild(n.guild_id);
                  for (let n in i)
                    if (t.has(n)) {
                      for (let e in i[n])
                        if (
                          d.Z.hasJoined(e) &&
                          !d.Z.isMuted(e) &&
                          h.ZP.hasUnreadOrMentions(e)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [n],
            );
          return n.isForumLikeChannel() ? e > 0 : t;
        })(n);
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: Z.intl.string(Z.t.e6RscX),
          action: function () {
            (0, a.U6)(n);
          },
          disabled: !e,
        });
      }
    },
    895563: function (n, e, t) {
      t.d(e, {
        P: function () {
          return j;
        },
        l: function () {
          return M;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(392711),
        l = t.n(r),
        a = t(442837),
        u = t(481060),
        o = t(984933),
        d = t(853856),
        c = t(117984),
        s = t(593214),
        h = t(362658),
        f = t(981631),
        Z = t(388032);
      function p(n, e) {
        return n.type === f.d4z.GROUP_DM
          ? e
            ? Z.intl.string(Z.t["0BWmSE"])
            : Z.intl.string(Z.t.uuVTOD)
          : n.type === f.d4z.DM
            ? e
              ? Z.intl.string(Z.t["2wfKGh"])
              : Z.intl.string(Z.t.wPbAsb)
            : e
              ? Z.intl.string(Z.t.Bou7lZ)
              : Z.intl.string(Z.t["4wcdEx"]);
      }
      function M(n) {
        let e = (0, a.e7)([o.ZP], () => o.ZP.getChannels(f.I_8))[
            f.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, h.z)("58e21a_1"),
          { notifyFavoriteAdded: r } = (0, s.up)();
        if (!(0, s.li)(n)) return null;
        let [[d], Z] = l().partition(e, (n) => "null" === n.channel.id);
        function M(e) {
          r(), (0, c.kj)(n.id, e);
        }
        return 0 === Z.length
          ? (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: p(n, !1),
              action: () => M(null),
            })
          : (0, i.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: p(n, !1),
              action: () => M(null),
              children: [
                t &&
                  (0, i.jsx)(u.MenuGroup, {
                    children: (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(d.channel.id),
                        label: d.channel.name,
                        action: () =>
                          M("null" === d.channel.id ? null : d.channel.id),
                      },
                      d.channel.id,
                    ),
                  }),
                (0, i.jsx)(u.MenuGroup, {
                  children: Z.map((n) =>
                    (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => M(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function j(n) {
        let e = (0, a.e7)([d.Z], () => d.Z.isFavorite(n.id));
        return __OVERLAY__ || !e
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: p(n, !0),
              color: "danger",
              action: () =>
                n.type === f.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, i.jsx)(e, {
                          ...t,
                          onConfirm: () => {
                            t.onClose(), (0, c.oC)(n.id);
                          },
                          channel: n,
                        });
                    })
                  : (0, c.oC)(n.id),
            });
      }
    },
    806206: function (n, e, t) {
      n.exports = { emoji: "emoji_eb856f" };
    },
  },
]);
//# sourceMappingURL=803bd94c712be1065c28.js.map
