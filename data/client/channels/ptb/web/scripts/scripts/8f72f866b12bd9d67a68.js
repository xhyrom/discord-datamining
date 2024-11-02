"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40157"],
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
        d = t(299206),
        o = t(895563),
        c = t(32750),
        s = t(109764),
        h = t(323597),
        f = t(461535),
        Z = t(438536),
        p = t(251746),
        M = t(193987),
        x = t(933793),
        j = t(13736),
        m = t(732393),
        G = t(214906),
        g = t(612856),
        v = t(137591),
        _ = t(388032);
      e.default = (0, a.Z)(
        function (n) {
          let { channel: e, onSelect: t } = n,
            a = (0, s.Z)(e),
            u = (0, f.Z)(e),
            C = (0, G.Z)(e),
            b = (0, c.Z)(e),
            P = (0, M.Z)(e),
            I = (0, h.Z)(e),
            E = (0, d.Z)({ id: e.id, label: _.intl.string(_.t.DQ797u) }),
            U = (0, Z.Z)(e, "Context Menu"),
            O = (0, x.Z)(e),
            T = (0, g.Z)(e),
            k = (0, j.Z)(e),
            y = (0, m.Z)(e.id),
            D = (0, p.Z)(e),
            L = (0, v.Z)(e),
            w = (0, o.l)(e),
            z = (0, o.P)(e);
          return (0, i.jsxs)(r.Menu, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": _.intl.string(_.t["1NBjqa"]),
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
        d = t(344185),
        o = t(569471),
        c = t(131704),
        s = t(324067),
        h = t(306680),
        f = t(981631),
        Z = t(388032);
      function p(n) {
        let e = (function (n) {
          let e = (0, u.n2)(n.guild_id, n.id),
            t = (0, r.e7)(
              [h.ZP, s.Z, d.Z, o.Z],
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
                    i = d.Z.getThreadsForGuild(n.guild_id);
                  for (let n in i)
                    if (t.has(n)) {
                      for (let e in i[n])
                        if (
                          o.Z.hasJoined(e) &&
                          !o.Z.isMuted(e) &&
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
          return x;
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
        d = t(984933),
        o = t(853856),
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
        let e = (0, a.e7)([d.ZP], () => d.ZP.getChannels(f.I_8))[
            f.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, h.z)("58e21a_1"),
          { notifyFavoriteAdded: r } = (0, s.up)();
        if (!(0, s.li)(n)) return null;
        let [[o], Z] = l().partition(e, (n) => "null" === n.channel.id);
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
                        id: "favorite-".concat(o.channel.id),
                        label: o.channel.name,
                        action: () =>
                          M("null" === o.channel.id ? null : o.channel.id),
                      },
                      o.channel.id,
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
      function x(n) {
        let e = (0, a.e7)([o.Z], () => o.Z.isFavorite(n.id));
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
  },
]);
//# sourceMappingURL=8f72f866b12bd9d67a68.js.map
