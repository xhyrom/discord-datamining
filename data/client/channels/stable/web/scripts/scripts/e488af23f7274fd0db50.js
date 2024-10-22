"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62880"],
  {
    527790: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return K;
        },
      }),
        a(47120);
      var i = a(200651);
      a(192379);
      var n = a(120356),
        t = a.n(n),
        l = a(278074),
        r = a(876215),
        c = a(442837),
        d = a(481060),
        o = a(403404),
        x = a(100527),
        E = a(906732),
        _ = a(379357),
        m = a(26033),
        j = a(358696),
        h = a(740605),
        v = a(370370),
        u = a(91140),
        I = a(551228),
        Z = a(278399),
        N = a(555672),
        y = a(335326),
        S = a(297781),
        P = a(797342),
        T = a(810568),
        R = a(168524),
        C = a(592125),
        p = a(944486),
        A = a(960870),
        L = a(139793),
        O = a(502762),
        g = a(652853),
        U = a(194811),
        b = a(373826),
        k = a(582123),
        f = a(290274),
        F = a(228168),
        G = a(701488),
        Y = a(616922),
        z = a(689938),
        M = a(676411);
      function w(e) {
        let { user: s, entry: a, header: n, className: l, onClose: c } = e,
          { profileType: o } = (0, g.z)(),
          x = { [M.fullSize]: o === F.y0.FULL_SIZE },
          { largeImage: m } = (0, _.rv)({ entry: a, showCoverImage: !1 }),
          { appName: h } = (0, P.n)(a),
          v = (0, R.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: a.extra.application_id,
            source: T.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0,
          }),
          { analyticsLocations: I } = (0, E.ZP)(),
          Z = (0, A.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: I,
          }),
          y = (0, L.Z)({ userId: s.id, onAction: Z }),
          C = () =>
            a.content_type === r.s.TOP_GAME
              ? N.Hs.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                )
              : u.W.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                );
        return null == v
          ? (0, i.jsxs)(O.Z.Overlay, {
              className: t()(M.card, l),
              ref: y,
              children: [
                n,
                (0, i.jsx)("div", {
                  className: M.body,
                  children: (0, i.jsxs)("div", {
                    className: t()(M.content, x),
                    children: [
                      (0, i.jsx)(j.E, { image: m, size: j.J.SIZE_60 }),
                      (0, i.jsxs)("div", {
                        className: M.details,
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(b.Z, {
                              variant: "heading-sm/semibold",
                              text: h,
                            }),
                          }),
                          (0, i.jsx)(S.Gk, {
                            location: S.Gt.USER_PROFILE,
                            className: M.badges,
                            children: C(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, i.jsxs)(O.Z.Overlay, {
              className: t()(M.card, l),
              ref: y,
              children: [
                n,
                (0, i.jsx)("div", {
                  className: M.body,
                  children: (0, i.jsxs)("div", {
                    className: t()(M.content, x),
                    children: [
                      (0, i.jsx)(j.E, {
                        image: m,
                        onClick: () => {
                          Z({ action: "PRESS_GAME_IMAGE" }), v();
                        },
                        size: j.J.SIZE_60,
                      }),
                      (0, i.jsxs)("div", {
                        className: M.details,
                        children: [
                          (0, i.jsx)(d.Clickable, {
                            className: M.clickable,
                            onClick: () => {
                              Z({ action: "OPEN_GAME_PROFILE" }),
                                v(),
                                null == c || c();
                            },
                            children: (0, i.jsx)(b.Z, {
                              variant: "heading-sm/semibold",
                              text: h,
                            }),
                          }),
                          (0, i.jsx)(S.Gk, {
                            location: S.Gt.USER_PROFILE,
                            className: M.badges,
                            children: C(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function H(e) {
        let { user: s, entry: a, header: n, className: l } = e,
          { profileType: r } = (0, g.z)(),
          c = { [M.fullSize]: r === F.y0.FULL_SIZE },
          { largeImage: d } = (0, _.rv)({ entry: a }),
          { analyticsLocations: o } = (0, E.ZP)(),
          x = (0, A.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: o,
          }),
          m = (0, L.Z)({ userId: s.id, onAction: x });
        return (0, i.jsxs)(O.Z.Overlay, {
          className: t()(M.card, l),
          ref: m,
          children: [
            n,
            (0, i.jsx)("div", {
              className: M.body,
              children: (0, i.jsxs)("div", {
                className: t()(M.content, c),
                children: [
                  (0, i.jsx)(j.E, {
                    aspectRatio: "crunchyroll",
                    image: d,
                    size: j.J.SIZE_60,
                  }),
                  (0, i.jsxs)("div", {
                    className: M.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(b.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media_title,
                          }),
                          (0, i.jsx)(b.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.media_subtitle,
                          }),
                        ],
                      }),
                      (0, i.jsx)(S.Gk, {
                        location: S.Gt.USER_PROFILE,
                        className: M.badges,
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
      function D(e) {
        var s, a;
        let { user: n, entry: l, header: r, className: c } = e,
          { profileType: d } = (0, g.z)(),
          o = { [M.fullSize]: d === F.y0.FULL_SIZE },
          { largeImage: x } = (0, _.rv)({ entry: l }),
          { analyticsLocations: m } = (0, E.ZP)(),
          v = (0, A.Z)({
            display: "recent",
            user: n,
            entry: l,
            analyticsLocations: m,
          }),
          u = (0, L.Z)({ userId: n.id, onAction: v }),
          Z =
            null === (s = l.extra.entries[0]) || void 0 === s
              ? void 0
              : s.media;
        return null == Z
          ? null
          : (0, i.jsxs)(O.Z.Overlay, {
              className: t()(M.card, c),
              ref: u,
              children: [
                r,
                (0, i.jsx)("div", {
                  className: M.body,
                  children: (0, i.jsxs)("div", {
                    className: t()(M.content, o),
                    children: [
                      (0, i.jsx)(j.E, {
                        image: x,
                        size: j.J.SIZE_60,
                        onClick: () => {
                          v({ action: "OPEN_SPOTIFY_ALBUM" }),
                            (0, h.o)(Y.Hw.ALBUM, Z.external_parent_id);
                        },
                      }),
                      (0, i.jsxs)("div", {
                        className: M.details,
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)(b.Z, {
                                variant: "heading-sm/semibold",
                                text: Z.title,
                                onClick: () => {
                                  v({ action: "OPEN_SPOTIFY_TRACK" }),
                                    (0, h.o)(Y.Hw.TRACK, Z.external_id);
                                },
                              }),
                              (0, i.jsx)(b.Z, {
                                variant: "text-xs/normal",
                                text:
                                  null === (a = Z.artists[0]) || void 0 === a
                                    ? void 0
                                    : a.name,
                                onClick: () => {
                                  var e;
                                  v({ action: "OPEN_SPOTIFY_ARTIST" }),
                                    (0, h.o)(
                                      Y.Hw.ARTIST,
                                      null === (e = Z.artists[0]) ||
                                        void 0 === e
                                        ? void 0
                                        : e.external_id,
                                    );
                                },
                              }),
                            ],
                          }),
                          (0, i.jsx)(S.Gk, {
                            location: S.Gt.USER_PROFILE,
                            className: M.badges,
                            children: I.te.map((e, s) =>
                              (0, i.jsx)(e, { entry: l }, "entry-".concat(s)),
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
        let { user: s, entry: a, header: n, className: l } = e,
          { profileType: r } = (0, g.z)(),
          c = { [M.fullSize]: r === F.y0.FULL_SIZE },
          { largeImage: d } = (0, _.rv)({ entry: a }),
          { analyticsLocations: o } = (0, E.ZP)(),
          x = (0, A.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: o,
          }),
          m = (0, L.Z)({ userId: s.id, onAction: x });
        return (0, i.jsxs)(O.Z.Overlay, {
          className: t()(M.card, l),
          ref: m,
          children: [
            n,
            (0, i.jsx)("div", {
              className: M.body,
              children: (0, i.jsxs)("div", {
                className: t()(M.content, c),
                children: [
                  (0, i.jsx)(j.E, {
                    image: d,
                    size: j.J.SIZE_60,
                    onClick: () => {
                      x({ action: "OPEN_SPOTIFY_ALBUM" }),
                        (0, h.o)(Y.Hw.ALBUM, a.extra.media.external_parent_id);
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: M.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(b.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media.title,
                            onClick: () => {
                              x({ action: "OPEN_SPOTIFY_TRACK" }),
                                (0, h.o)(Y.Hw.TRACK, a.extra.media.external_id);
                            },
                          }),
                          (0, i.jsx)(b.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.artist.name,
                            onClick: () => {
                              x({ action: "OPEN_SPOTIFY_ARTIST" }),
                                (0, h.o)(
                                  Y.Hw.ARTIST,
                                  a.extra.artist.external_id,
                                );
                            },
                          }),
                        ],
                      }),
                      (0, i.jsx)(S.Gk, {
                        location: S.Gt.USER_PROFILE,
                        className: M.badges,
                        children: Z.Ho.map((e, s) =>
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
        let { user: s, entry: a, header: n, className: l } = e,
          { profileType: r } = (0, g.z)(),
          d = { [M.fullSize]: r === F.y0.FULL_SIZE },
          { largeImage: x } = (0, _.rv)({ entry: a }),
          m = (0, c.e7)([C.Z, p.Z], () => C.Z.getChannel(p.Z.getChannelId())),
          { analyticsLocations: h } = (0, E.ZP)(),
          u = (0, A.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: h,
          }),
          I = (0, L.Z)({ userId: s.id, onAction: u }),
          Z = () => {
            var e;
            (0, o.Z)({
              channel: m,
              guildId:
                null !== (e = null == m ? void 0 : m.getGuildId()) &&
                void 0 !== e
                  ? e
                  : void 0,
              analyticsLocations: h,
              locationObject: {},
              openInPopout: !1,
              initialSelectedApplicationId: a.extra.application_id,
              initialSlide: G.ag.DETAIL_PAGE,
            });
          };
        return (0, i.jsxs)(O.Z.Overlay, {
          className: t()(M.card, l),
          ref: I,
          children: [
            n,
            (0, i.jsx)("div", {
              className: M.body,
              children: (0, i.jsxs)("div", {
                className: t()(M.content, d),
                children: [
                  (0, i.jsx)(j.E, {
                    image: x,
                    size: j.J.SIZE_60,
                    onClick: () => {
                      u({ action: "PRESS_APP_IMAGE" }), Z();
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: M.details,
                    children: [
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(b.Z, {
                          variant: "heading-sm/semibold",
                          text: a.extra.activity_name,
                          onClick: () => {
                            u({ action: "OPEN_APP_LAUNCHER" }), Z();
                          },
                        }),
                      }),
                      (0, i.jsx)(S.Gk, {
                        location: S.Gt.USER_PROFILE,
                        className: M.badges,
                        children: v.j.map((e, s) =>
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
      function K(e) {
        let {
            user: s,
            entry: a,
            className: n,
            onClose: t,
            hideHeader: r = !1,
            hideContextMenu: c = !1,
          } = e,
          { analyticsLocations: d } = (0, E.ZP)(
            x.Z.USER_PROFILE_RECENT_ACTIVITY_CARD,
          );
        return (0, m.LP)(a)
          ? (0, i.jsx)(E.Gt, {
              value: d,
              children: (0, i.jsx)(k.Z, {
                user: s,
                onClose: t,
                children: (e) => {
                  let { onAutoDismiss: d } = e,
                    o = (e) =>
                      (0, i.jsx)(U.Z, {
                        text: r ? null : e,
                        contextMenu: c
                          ? null
                          : (0, i.jsx)(f.Z, {
                              display: "recent",
                              entry: a,
                              user: s,
                              onClose: t,
                              onRequestOpen: d,
                            }),
                      });
                  return (0, l.EQ)(a)
                    .when(m.dX, (e) =>
                      (0, i.jsx)(w, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(m.y0, (e) =>
                      (0, i.jsx)(H, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(m.dU, (e) =>
                      (0, i.jsx)(D, {
                        header: o(
                          z.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                        ),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(m.KF, (e) =>
                      (0, i.jsx)(J, {
                        header: o(
                          z.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                        ),
                        user: s,
                        entry: e,
                        className: n,
                      }),
                    )
                    .when(m.Mq, (e) =>
                      (0, i.jsx)(V, {
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
//# sourceMappingURL=e488af23f7274fd0db50.js.map
