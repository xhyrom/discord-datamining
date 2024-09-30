"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62635"],
  {
    564232: function (e, n, d) {
      d.r(n),
        d.d(n, {
          default: function () {
            return _;
          },
        }),
        d(47120);
      var r = d(735250),
        s = d(470079),
        i = d(392711),
        t = d.n(i),
        l = d(442837),
        a = d(481060),
        u = d(239091),
        o = d(276264),
        c = d(600164),
        m = d(313201),
        g = d(184301),
        h = d(347475),
        I = d(271383),
        p = d(699516),
        f = d(594174),
        j = d(709054),
        x = d(432496),
        M = d(981631),
        D = d(689938),
        S = d(179161);
      function _(e) {
        let { guild: n, transitionState: i, onClose: _ } = e,
          b = (0, m.Dt)(),
          E = s.useMemo(() => {
            let e = p.Z.getRelationships();
            return j.default.keys(e).filter((n) => e[n] === M.OGo.FRIEND);
          }, []);
        s.useEffect(() => {
          x.Z.fetchFriendMembersIfNotFetched(n.id, E);
        }, [n.id, E]);
        let Z = (0, l.e7)([I.ZP], () => I.ZP.getMembers(n.id)),
          F = s.useMemo(
            () =>
              t()(Z)
                .filter(
                  (e) =>
                    !!E.includes(e.userId) &&
                    null != f.default.getUser(e.userId),
                )
                .sortBy((e) => {
                  var n;
                  let d = f.default.getUser(e.userId);
                  return (
                    null != d
                      ? null !== (n = e.nick) && void 0 !== n
                        ? n
                        : d.username
                      : ""
                  ).toLocaleLowerCase();
                })
                .map((e) => {
                  let s = f.default.getUser(e.userId);
                  return (0, r.jsx)(
                    a.Popout,
                    {
                      preload: () =>
                        (0, g.Z)(s.id, s.getAvatarURL(n.id, 80), {
                          guildId: n.id,
                        }),
                      renderPopout: (d) =>
                        (0, r.jsx)(h.Z, {
                          ...d,
                          userId: e.userId,
                          guildId: n.id,
                        }),
                      spacing: 14,
                      children: (i, t) => {
                        let { isShown: l } = t;
                        return (0, r.jsx)(
                          o.Z,
                          {
                            className: S.member,
                            selected: l,
                            colorString: e.colorString,
                            user: s,
                            isOwner: e.userId === n.ownerId,
                            nick: e.nick,
                            premiumSince:
                              null == e.premiumSince
                                ? null
                                : new Date(e.premiumSince),
                            guildId: n.id,
                            onContextMenu: (e) => {
                              (0, u.jW)(e, async () => {
                                let { default: e } = await Promise.all([
                                  d.e("79695"),
                                  d.e("13125"),
                                  d.e("26976"),
                                  d.e("88405"),
                                ]).then(d.bind(d, 415118));
                                return (d) =>
                                  (0, r.jsx)(e, {
                                    ...d,
                                    user: s,
                                    guildId: n.id,
                                    showMediaItems: !0,
                                  });
                              });
                            },
                            ...i,
                          },
                          e.userId,
                        );
                      },
                    },
                    s.id,
                  );
                })
                .value(),
            [E, n.id, n.ownerId, Z],
          ),
          L = x.Z.isFetchingFriendsForGuild(n.id);
        return (0, r.jsxs)(a.ModalRoot, {
          transitionState: i,
          size: a.ModalSize.SMALL,
          "aria-labelledby": b,
          children: [
            (0, r.jsxs)(a.ModalHeader, {
              separator: !1,
              justify: c.Z.Justify.BETWEEN,
              children: [
                (0, r.jsxs)("div", {
                  className: S.heading,
                  children: [
                    (0, r.jsx)("span", {
                      children: (0, r.jsx)(a.FriendsIcon, {}),
                    }),
                    (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: (L
                        ? D.Z.Messages.GUILD_FRIENDS_MODAL_HEADER_LOADING
                        : D.Z.Messages.GUILD_FRIENDS_MODAL_HEADER
                      ).format({ guildName: n.name, numFriends: F.length }),
                    }),
                  ],
                }),
                (0, r.jsx)(a.ModalCloseButton, { onClick: _ }),
              ],
            }),
            (0, r.jsxs)(a.ModalContent, {
              className: S.content,
              children: [
                L && (0, r.jsx)(a.Spinner, {}),
                (0, r.jsx)(a.Scroller, { children: F }),
              ],
            }),
          ],
        });
      }
    },
    179161: function (e, n, d) {
      e.exports = {
        member: "member_dd4e91",
        heading: "heading_dd4e91",
        content: "content_dd4e91",
      };
    },
  },
]);
//# sourceMappingURL=1d1e69921e8c3e860f27.js.map
