"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62635"],
  {
    564232: function (e, n, d) {
      d.r(n),
        d.d(n, {
          default: function () {
            return Z;
          },
        }),
        d(47120);
      var t = d(200651),
        i = d(192379),
        r = d(392711),
        s = d.n(r),
        l = d(442837),
        a = d(481060),
        u = d(239091),
        o = d(276264),
        c = d(600164),
        m = d(313201),
        h = d(184301),
        g = d(347475),
        p = d(271383),
        f = d(699516),
        I = d(594174),
        j = d(709054),
        x = d(432496),
        M = d(981631),
        b = d(388032),
        S = d(409810);
      function Z(e) {
        let { guild: n, transitionState: r, onClose: Z } = e,
          k = (0, m.Dt)(),
          w = i.useMemo(() => {
            let e = f.Z.getRelationships();
            return j.default.keys(e).filter((n) => e[n] === M.OGo.FRIEND);
          }, []);
        i.useEffect(() => {
          x.Z.fetchFriendMembersIfNotFetched(n.id, w);
        }, [n.id, w]);
        let F = (0, l.e7)([p.ZP], () => p.ZP.getMembers(n.id)),
          N = i.useMemo(
            () =>
              s()(F)
                .filter(
                  (e) =>
                    !!w.includes(e.userId) &&
                    null != I.default.getUser(e.userId),
                )
                .sortBy((e) => {
                  var n;
                  let d = I.default.getUser(e.userId);
                  return (
                    null != d
                      ? null !== (n = e.nick) && void 0 !== n
                        ? n
                        : d.username
                      : ""
                  ).toLocaleLowerCase();
                })
                .map((e) => {
                  let i = I.default.getUser(e.userId);
                  return (0, t.jsx)(
                    a.Popout,
                    {
                      preload: () =>
                        (0, h.Z)(i.id, i.getAvatarURL(n.id, 80), {
                          guildId: n.id,
                        }),
                      renderPopout: (d) =>
                        (0, t.jsx)(g.Z, {
                          ...d,
                          userId: e.userId,
                          guildId: n.id,
                        }),
                      spacing: 14,
                      children: (r, s) => {
                        let { isShown: l } = s;
                        return (0, t.jsx)(
                          o.Z,
                          {
                            className: S.member,
                            selected: l,
                            colorString: e.colorString,
                            user: i,
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
                                  d.e("38869"),
                                ]).then(d.bind(d, 415118));
                                return (d) =>
                                  (0, t.jsx)(e, {
                                    ...d,
                                    user: i,
                                    guildId: n.id,
                                    showMediaItems: !0,
                                  });
                              });
                            },
                            ...r,
                          },
                          e.userId,
                        );
                      },
                    },
                    i.id,
                  );
                })
                .value(),
            [w, n.id, n.ownerId, F],
          ),
          v = x.Z.isFetchingFriendsForGuild(n.id);
        return (0, t.jsxs)(a.ModalRoot, {
          transitionState: r,
          size: a.ModalSize.SMALL,
          "aria-labelledby": k,
          children: [
            (0, t.jsxs)(a.ModalHeader, {
              separator: !1,
              justify: c.Z.Justify.BETWEEN,
              children: [
                (0, t.jsxs)("div", {
                  className: S.heading,
                  children: [
                    (0, t.jsx)("span", {
                      children: (0, t.jsx)(a.FriendsIcon, {}),
                    }),
                    (0, t.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: b.intl.format(v ? b.t.EtQnZm : b.t.OgMdNT, {
                        guildName: n.name,
                        numFriends: N.length,
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)(a.ModalCloseButton, { onClick: Z }),
              ],
            }),
            (0, t.jsxs)(a.ModalContent, {
              className: S.content,
              children: [
                v && (0, t.jsx)(a.Spinner, {}),
                (0, t.jsx)(a.Scroller, { children: N }),
              ],
            }),
          ],
        });
      }
    },
    409810: function (e, n, d) {
      e.exports = {
        member: "member_dd4e91",
        heading: "heading_dd4e91",
        content: "content_dd4e91",
      };
    },
  },
]);
//# sourceMappingURL=55f9d94e7b976bbec5a4.js.map
