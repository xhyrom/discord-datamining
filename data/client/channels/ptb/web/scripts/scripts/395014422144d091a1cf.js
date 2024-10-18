"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62880"],
  {
    527790: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return V;
        },
      }),
        a(47120);
      var i = a(735250);
      a(470079);
      var n = a(120356),
        l = a.n(n),
        t = a(278074),
        r = a(876215),
        c = a(442837),
        d = a(481060),
        o = a(403404),
        x = a(100527),
        m = a(906732),
        E = a(379357),
        j = a(26033),
        h = a(358696),
        u = a(370370),
        v = a(91140),
        Z = a(551228),
        _ = a(278399),
        I = a(555672),
        y = a(335326),
        N = a(297781),
        S = a(797342),
        p = a(810568),
        R = a(168524),
        P = a(592125),
        L = a(944486),
        g = a(960870),
        C = a(139793),
        T = a(502762),
        b = a(652853),
        f = a(194811),
        A = a(373826),
        U = a(582123),
        O = a(290274),
        G = a(228168),
        k = a(701488),
        z = a(689938),
        F = a(676411);
      function Y(e) {
        let { user: s, entry: a, header: n, className: t, onClose: c } = e,
          { profileType: o } = (0, b.z)(),
          x = { [F.fullSize]: o === G.y0.FULL_SIZE },
          { largeImage: j } = (0, E.rv)({ entry: a, showCoverImage: !1 }),
          { appName: u } = (0, S.n)(a),
          Z = (0, R.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: a.extra.application_id,
            source: p.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0,
          }),
          { analyticsLocations: _ } = (0, m.ZP)(),
          y = (0, g.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: _,
          }),
          P = (0, C.Z)({ userId: s.id, onAction: y }),
          L = () =>
            a.content_type === r.s.TOP_GAME
              ? I.Hs.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                )
              : v.W.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                );
        return null == Z
          ? (0, i.jsxs)(T.Z.Overlay, {
              className: l()(F.card, t),
              ref: P,
              children: [
                n,
                (0, i.jsx)("div", {
                  className: F.body,
                  children: (0, i.jsxs)("div", {
                    className: l()(F.content, x),
                    children: [
                      (0, i.jsx)(h.E, { image: j, size: h.J.SIZE_60 }),
                      (0, i.jsxs)("div", {
                        className: F.details,
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(A.Z, {
                              variant: "heading-sm/semibold",
                              text: u,
                            }),
                          }),
                          (0, i.jsx)(N.Gk, {
                            location: N.Gt.USER_PROFILE,
                            className: F.badges,
                            children: L(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, i.jsxs)(T.Z.Overlay, {
              className: l()(F.card, t),
              ref: P,
              children: [
                n,
                (0, i.jsx)("div", {
                  className: F.body,
                  children: (0, i.jsxs)("div", {
                    className: l()(F.content, x),
                    children: [
                      (0, i.jsx)(h.E, {
                        image: j,
                        onClick: () => {
                          y({ action: "PRESS_GAME_IMAGE" }), Z();
                        },
                        size: h.J.SIZE_60,
                      }),
                      (0, i.jsxs)("div", {
                        className: F.details,
                        children: [
                          (0, i.jsx)(d.Clickable, {
                            className: F.clickable,
                            onClick: () => {
                              y({ action: "OPEN_GAME_PROFILE" }),
                                Z(),
                                null == c || c();
                            },
                            children: (0, i.jsx)(A.Z, {
                              variant: "heading-sm/semibold",
                              text: u,
                            }),
                          }),
                          (0, i.jsx)(N.Gk, {
                            location: N.Gt.USER_PROFILE,
                            className: F.badges,
                            children: L(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function M(e) {
        let { user: s, entry: a, header: n, className: t } = e,
          { profileType: r } = (0, b.z)(),
          c = { [F.fullSize]: r === G.y0.FULL_SIZE },
          { largeImage: d } = (0, E.rv)({ entry: a }),
          { analyticsLocations: o } = (0, m.ZP)(),
          x = (0, g.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: o,
          }),
          j = (0, C.Z)({ userId: s.id, onAction: x });
        return (0, i.jsxs)(T.Z.Overlay, {
          className: l()(F.card, t),
          ref: j,
          children: [
            n,
            (0, i.jsx)("div", {
              className: F.body,
              children: (0, i.jsxs)("div", {
                className: l()(F.content, c),
                children: [
                  (0, i.jsx)(h.E, {
                    aspectRatio: "crunchyroll",
                    image: d,
                    size: h.J.SIZE_60,
                  }),
                  (0, i.jsxs)("div", {
                    className: F.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(A.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media_title,
                          }),
                          (0, i.jsx)(A.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.media_subtitle,
                          }),
                        ],
                      }),
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: F.badges,
                        children: y.t.map((e, s) =>
                          (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function w(e) {
        var s, a, n;
        let { user: t, entry: r, header: c, className: d } = e,
          { profileType: o } = (0, b.z)(),
          x = { [F.fullSize]: o === G.y0.FULL_SIZE },
          { largeImage: j } = (0, E.rv)({ entry: r }),
          { analyticsLocations: u } = (0, m.ZP)(),
          v = (0, g.Z)({
            display: "recent",
            user: t,
            entry: r,
            analyticsLocations: u,
          }),
          _ = (0, C.Z)({ userId: t.id, onAction: v }),
          I =
            null === (s = r.extra.entries[0]) || void 0 === s
              ? void 0
              : s.media;
        if (null == I) return null;
        let y =
          null !==
            (n =
              null === (a = I.artists[0]) || void 0 === a ? void 0 : a.name) &&
          void 0 !== n
            ? n
            : I.title;
        return (0, i.jsxs)(T.Z.Overlay, {
          className: l()(F.card, d),
          ref: _,
          children: [
            c,
            (0, i.jsx)("div", {
              className: F.body,
              children: (0, i.jsxs)("div", {
                className: l()(F.content, x),
                children: [
                  (0, i.jsx)(h.E, { image: j, size: h.J.SIZE_60 }),
                  (0, i.jsxs)("div", {
                    className: F.details,
                    children: [
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(A.Z, {
                          variant: "heading-sm/semibold",
                          text: y,
                        }),
                      }),
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: F.badges,
                        children: Z.te.map((e, s) =>
                          (0, i.jsx)(e, { entry: r }, "entry-".concat(s)),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function D(e) {
        let { user: s, entry: a, header: n, className: t } = e,
          { profileType: r } = (0, b.z)(),
          c = { [F.fullSize]: r === G.y0.FULL_SIZE },
          { largeImage: d } = (0, E.rv)({ entry: a }),
          { analyticsLocations: o } = (0, m.ZP)(),
          x = (0, g.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: o,
          }),
          j = (0, C.Z)({ userId: s.id, onAction: x });
        return (0, i.jsxs)(T.Z.Overlay, {
          className: l()(F.card, t),
          ref: j,
          children: [
            n,
            (0, i.jsx)("div", {
              className: F.body,
              children: (0, i.jsxs)("div", {
                className: l()(F.content, c),
                children: [
                  (0, i.jsx)(h.E, { image: d, size: h.J.SIZE_60 }),
                  (0, i.jsxs)("div", {
                    className: F.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(A.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media.title,
                          }),
                          (0, i.jsx)(A.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.artist.name,
                          }),
                        ],
                      }),
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: F.badges,
                        children: _.Ho.map((e, s) =>
                          (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function J(e) {
        let { user: s, entry: a, header: n, className: t } = e,
          { profileType: r } = (0, b.z)(),
          d = { [F.fullSize]: r === G.y0.FULL_SIZE },
          { largeImage: x } = (0, E.rv)({ entry: a }),
          j = (0, c.e7)([P.Z, L.Z], () => P.Z.getChannel(L.Z.getChannelId())),
          { analyticsLocations: v } = (0, m.ZP)(),
          Z = (0, g.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: v,
          }),
          _ = (0, C.Z)({ userId: s.id, onAction: Z }),
          I = () => {
            var e;
            (0, o.Z)({
              channel: j,
              guildId:
                null !== (e = null == j ? void 0 : j.getGuildId()) &&
                void 0 !== e
                  ? e
                  : void 0,
              analyticsLocations: v,
              locationObject: {},
              openInPopout: !1,
              initialSelectedApplicationId: a.extra.application_id,
              initialSlide: k.ag.DETAIL_PAGE,
            });
          };
        return (0, i.jsxs)(T.Z.Overlay, {
          className: l()(F.card, t),
          ref: _,
          children: [
            n,
            (0, i.jsx)("div", {
              className: F.body,
              children: (0, i.jsxs)("div", {
                className: l()(F.content, d),
                children: [
                  (0, i.jsx)(h.E, {
                    image: x,
                    size: h.J.SIZE_60,
                    onClick: () => {
                      Z({ action: "PRESS_APP_IMAGE" }), I();
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: F.details,
                    children: [
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(A.Z, {
                          variant: "heading-sm/semibold",
                          text: a.extra.activity_name,
                          onClick: () => {
                            Z({ action: "OPEN_APP_LAUNCHER" }), I();
                          },
                        }),
                      }),
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: F.badges,
                        children: u.j.map((e, s) =>
                          (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function V(e) {
        let {
            user: s,
            entry: a,
            className: n,
            onClose: l,
            hideHeader: r = !1,
            hideContextMenu: c = !1,
          } = e,
          { analyticsLocations: d } = (0, m.ZP)(
            x.Z.USER_PROFILE_RECENT_ACTIVITY_CARD,
          );
        return (0, j.LP)(a)
          ? (0, i.jsx)(m.Gt, {
              value: d,
              children: (0, i.jsx)(U.Z, {
                user: s,
                onClose: l,
                children: (e) => {
                  let { onAutoDismiss: d } = e,
                    o = (e) =>
                      (0, i.jsx)(f.Z, {
                        text: r ? null : e,
                        contextMenu: c
                          ? null
                          : (0, i.jsx)(O.Z, {
                              display: "recent",
                              entry: a,
                              user: s,
                              onClose: l,
                              onRequestOpen: d,
                            }),
                      });
                  return (0, t.EQ)(a)
                    .when(j.dX, (e) =>
                      (0, i.jsx)(Y, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(j.y0, (e) =>
                      (0, i.jsx)(M, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(j.dU, (e) =>
                      (0, i.jsx)(w, {
                        header: o(
                          z.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                        ),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(j.KF, (e) =>
                      (0, i.jsx)(D, {
                        header: o(
                          z.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                        ),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(j.Mq, (e) =>
                      (0, i.jsx)(J, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .exhaustive();
                },
              }),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=395014422144d091a1cf.js.map
