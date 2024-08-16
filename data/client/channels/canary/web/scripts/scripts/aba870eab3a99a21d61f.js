"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40157"],
  {
    108843: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      var t = i(735250);
      i(470079);
      var r = i(906732);
      function a(n, e) {
        return function (i) {
          let { analyticsLocations: a } = (0, r.ZP)(e);
          return (0, t.jsx)(r.Gt, {
            value: a,
            children: (0, t.jsx)(n, { ...i }),
          });
        };
      }
    },
    422200: function (n, e, i) {
      i.r(e);
      var t = i(735250);
      i(470079);
      var r = i(481060),
        a = i(239091),
        l = i(108843),
        u = i(100527),
        s = i(299206),
        d = i(895563),
        o = i(32750),
        c = i(109764),
        Z = i(323597),
        h = i(461535),
        M = i(438536),
        f = i(251746),
        _ = i(193987),
        p = i(933793),
        E = i(13736),
        A = i(732393),
        I = i(214906),
        x = i(612856),
        C = i(137591),
        G = i(689938);
      e.default = (0, l.Z)(
        function (n) {
          let { channel: e, onSelect: i } = n,
            l = (0, c.Z)(e),
            u = (0, h.Z)(e),
            j = (0, I.Z)(e),
            m = (0, o.Z)(e),
            g = (0, _.Z)(e),
            v = (0, Z.Z)(e),
            O = (0, s.Z)({ id: e.id, label: G.Z.Messages.COPY_ID_THREAD }),
            T = (0, M.Z)(e, "Context Menu"),
            R = (0, p.Z)(e),
            U = (0, x.Z)(e),
            D = (0, E.Z)(e),
            N = (0, A.Z)(e.id),
            P = (0, f.Z)(e),
            b = (0, C.Z)(e),
            L = (0, d.l)(e),
            F = (0, d.P)(e);
          return (0, t.jsxs)(r.Menu, {
            navId: "thread-context",
            onClose: a.Zy,
            "aria-label": G.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
            onSelect: i,
            children: [
              (0, t.jsxs)(
                r.MenuGroup,
                { children: [u, L] },
                "mark-as-read-or-favorite",
              ),
              (0, t.jsxs)(
                r.MenuGroup,
                { children: [T, P, m, g, D, N, l] },
                "thread-actions",
              ),
              (0, t.jsxs)(r.MenuGroup, { children: [j, U] }, "notifications"),
              (0, t.jsx)(r.MenuGroup, { children: F }),
              (0, t.jsxs)(
                r.MenuGroup,
                { children: [b, R, v] },
                "admin-actions",
              ),
              (0, t.jsx)(r.MenuGroup, { children: O }, "developer-actions"),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU],
      );
    },
    461535: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return f;
        },
      }),
        i(47120);
      var t = i(735250);
      i(470079);
      var r = i(442837),
        a = i(481060),
        l = i(45114),
        u = i(456269),
        s = i(344185),
        d = i(569471),
        o = i(131704),
        c = i(324067),
        Z = i(306680),
        h = i(981631),
        M = i(689938);
      function f(n) {
        let e = (function (n) {
          let e = (0, u.n2)(n.guild_id, n.id),
            i = (0, r.e7)(
              [Z.ZP, c.Z, s.Z, d.Z],
              () => {
                if (n.isForumPost()) return Z.ZP.isForumPostUnread(n.id);
                if (n.type !== h.d4z.GUILD_CATEGORY)
                  return Z.ZP.hasUnreadOrMentions(n.id);
                {
                  let e = c.Z.getCategories(n.getGuildId());
                  if (null == e[n.id]) return !1;
                  if (
                    e[n.id].some((n) => {
                      let { channel: e } = n;
                      return (
                        (0, o.Em)(e.type) && Z.ZP.hasUnreadOrMentions(e.id)
                      );
                    })
                  )
                    return !0;
                  let i = new Set(e[n.id].map((n) => n.channel.id)),
                    t = s.Z.getThreadsForGuild(n.guild_id);
                  for (let n in t)
                    if (i.has(n)) {
                      for (let e in t[n])
                        if (
                          d.Z.hasJoined(e) &&
                          !d.Z.isMuted(e) &&
                          Z.ZP.hasUnreadOrMentions(e)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [n],
            );
          return n.isForumLikeChannel() ? e > 0 : i;
        })(n);
        return (0, t.jsx)(a.MenuItem, {
          id: "mark-channel-read",
          label: M.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, l.U6)(n);
          },
          disabled: !e,
        });
      }
    },
    895563: function (n, e, i) {
      i.d(e, {
        P: function () {
          return p;
        },
        l: function () {
          return _;
        },
      }),
        i(47120);
      var t = i(735250);
      i(470079);
      var r = i(392711),
        a = i.n(r),
        l = i(442837),
        u = i(481060),
        s = i(984933),
        d = i(853856),
        o = i(117984),
        c = i(593214),
        Z = i(362658),
        h = i(981631),
        M = i(689938);
      function f(n, e) {
        return n.type === h.d4z.GROUP_DM
          ? e
            ? M.Z.Messages.UNFAVORITE_GDM
            : M.Z.Messages.FAVORITE_GDM
          : n.type === h.d4z.DM
            ? e
              ? M.Z.Messages.UNFAVORITE_DM
              : M.Z.Messages.FAVORITE_DM
            : e
              ? M.Z.Messages.UNFAVORITE_CHANNEL
              : M.Z.Messages.FAVORITE_CHANNEL;
      }
      function _(n) {
        let e = (0, l.e7)([s.ZP], () => s.ZP.getChannels(h.I_8))[
            h.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: i } = (0, Z.z)("58e21a_1"),
          { notifyFavoriteAdded: r } = (0, c.up)();
        if (!(0, c.li)(n)) return null;
        let [[d], M] = a().partition(e, (n) => "null" === n.channel.id);
        function _(e) {
          r(), (0, o.kj)(n.id, e);
        }
        return 0 === M.length
          ? (0, t.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: f(n, !1),
              action: () => _(null),
            })
          : (0, t.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: f(n, !1),
              action: () => _(null),
              children: [
                i &&
                  (0, t.jsx)(u.MenuGroup, {
                    children: (0, t.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(d.channel.id),
                        label: d.channel.name,
                        action: () =>
                          _("null" === d.channel.id ? null : d.channel.id),
                      },
                      d.channel.id,
                    ),
                  }),
                (0, t.jsx)(u.MenuGroup, {
                  children: M.map((n) =>
                    (0, t.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => _(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function p(n) {
        let e = (0, l.e7)([d.Z], () => d.Z.isFavorite(n.id));
        return __OVERLAY__ || !e
          ? null
          : (0, t.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: f(n, !0),
              color: "danger",
              action: () =>
                n.type === h.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: e } = await i
                        .e("37720")
                        .then(i.bind(i, 357632));
                      return (i) =>
                        (0, t.jsx)(e, {
                          ...i,
                          onConfirm: () => {
                            i.onClose(), (0, o.oC)(n.id);
                          },
                          channel: n,
                        });
                    })
                  : (0, o.oC)(n.id),
            });
      }
    },
  },
]);
//# sourceMappingURL=aba870eab3a99a21d61f.js.map
