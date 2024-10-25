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
      var t = a(120356),
        n = a.n(t),
        l = a(278074),
        r = a(876215),
        c = a(442837),
        d = a(481060),
        o = a(403404),
        x = a(100527),
        m = a(906732),
        E = a(379357),
        _ = a(26033),
        j = a(358696),
        h = a(740605),
        v = a(370370),
        u = a(91140),
        I = a(551228),
        Z = a(278399),
        S = a(555672),
        N = a(335326),
        T = a(297781),
        y = a(797342),
        R = a(810568),
        C = a(168524),
        P = a(592125),
        p = a(944486),
        L = a(960870),
        g = a(139793),
        A = a(502762),
        O = a(652853),
        b = a(194811),
        k = a(373826),
        U = a(582123),
        f = a(290274),
        Y = a(228168),
        F = a(701488),
        G = a(616922),
        z = a(689938),
        M = a(676411);
      function w(e) {
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: c } = (0, O.z)(),
          o = { [M.fullSize]: c === Y.y0.FULL_SIZE },
          { largeImage: x } = (0, E.rv)({ entry: a, showCoverImage: !1 }),
          { appName: _ } = (0, y.n)(a),
          h = (0, C.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: a.extra.application_id,
            source: R.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0,
          }),
          { analyticsLocations: v } = (0, m.ZP)(),
          I = (0, L.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: v,
          }),
          Z = (0, g.Z)({ userId: s.id, onAction: I }),
          N = () =>
            a.content_type === r.s.TOP_GAME
              ? S.Hs.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                )
              : u.W.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                );
        return null == h
          ? (0, i.jsxs)(A.Z.Overlay, {
              className: n()(M.card, l),
              ref: Z,
              children: [
                t,
                (0, i.jsx)("div", {
                  className: M.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(M.content, o),
                    children: [
                      (0, i.jsx)(j.E, { image: x, size: j.J.SIZE_60 }),
                      (0, i.jsxs)("div", {
                        className: M.details,
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(k.Z, {
                              variant: "heading-sm/semibold",
                              text: _,
                            }),
                          }),
                          (0, i.jsx)(T.Gk, {
                            location: T.Gt.USER_PROFILE,
                            className: M.badges,
                            children: N(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, i.jsxs)(A.Z.Overlay, {
              className: n()(M.card, l),
              ref: Z,
              children: [
                t,
                (0, i.jsx)("div", {
                  className: M.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(M.content, o),
                    children: [
                      (0, i.jsx)(j.E, {
                        image: x,
                        onClick: (e) => {
                          I({ action: "PRESS_IMAGE" }), h(e);
                        },
                        size: j.J.SIZE_60,
                      }),
                      (0, i.jsxs)("div", {
                        className: M.details,
                        children: [
                          (0, i.jsx)(d.Clickable, {
                            className: M.clickable,
                            onClick: (e) => {
                              I({ action: "PRESS_TEXT" }), h(e);
                            },
                            children: (0, i.jsx)(k.Z, {
                              variant: "heading-sm/semibold",
                              text: _,
                            }),
                          }),
                          (0, i.jsx)(T.Gk, {
                            location: T.Gt.USER_PROFILE,
                            className: M.badges,
                            children: N(),
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
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, O.z)(),
          c = { [M.fullSize]: r === Y.y0.FULL_SIZE },
          { largeImage: o } = (0, E.rv)({ entry: a }),
          { url: x } = a.extra,
          { analyticsLocations: _ } = (0, m.ZP)(),
          v = (0, L.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: _,
          }),
          u = (0, g.Z)({ userId: s.id, onAction: v });
        return (0, i.jsxs)(A.Z.Overlay, {
          className: n()(M.card, l),
          ref: u,
          children: [
            t,
            (0, i.jsx)("div", {
              className: M.body,
              children: (0, i.jsxs)("div", {
                className: n()(M.content, c),
                children: [
                  (0, i.jsx)(j.E, {
                    aspectRatio: "crunchyroll",
                    image: o,
                    size: j.J.SIZE_60,
                    onClick:
                      null == x || "" === x
                        ? void 0
                        : () => {
                            v({ action: "PRESS_IMAGE" }), (0, h.Y)(x);
                          },
                  }),
                  (0, i.jsxs)("div", {
                    className: M.details,
                    children: [
                      null == x || "" === x
                        ? (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)(k.Z, {
                                variant: "heading-sm/semibold",
                                text: a.extra.media_title,
                              }),
                              (0, i.jsx)(k.Z, {
                                variant: "text-xs/normal",
                                text: a.extra.media_subtitle,
                              }),
                            ],
                          })
                        : (0, i.jsxs)(d.Clickable, {
                            className: M.clickable,
                            onClick: () => {
                              v({ action: "PRESS_TEXT" }), (0, h.Y)(x);
                            },
                            children: [
                              (0, i.jsx)(k.Z, {
                                variant: "heading-sm/semibold",
                                text: a.extra.media_title,
                              }),
                              (0, i.jsx)(k.Z, {
                                variant: "text-xs/normal",
                                text: a.extra.media_subtitle,
                              }),
                            ],
                          }),
                      (0, i.jsx)(T.Gk, {
                        location: T.Gt.USER_PROFILE,
                        className: M.badges,
                        children: N.t.map((e, s) =>
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
        let { user: t, entry: l, header: r, className: c } = e,
          { profileType: d } = (0, O.z)(),
          o = { [M.fullSize]: d === Y.y0.FULL_SIZE },
          { largeImage: x } = (0, E.rv)({ entry: l }),
          { analyticsLocations: _ } = (0, m.ZP)(),
          v = (0, L.Z)({
            display: "recent",
            user: t,
            entry: l,
            analyticsLocations: _,
          }),
          u = (0, g.Z)({ userId: t.id, onAction: v }),
          Z =
            null === (s = l.extra.entries[0]) || void 0 === s
              ? void 0
              : s.media;
        return null == Z
          ? null
          : (0, i.jsxs)(A.Z.Overlay, {
              className: n()(M.card, c),
              ref: u,
              children: [
                r,
                (0, i.jsx)("div", {
                  className: M.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(M.content, o),
                    children: [
                      (0, i.jsx)(j.E, {
                        image: x,
                        size: j.J.SIZE_60,
                        onClick: () => {
                          v({ action: "OPEN_SPOTIFY_ALBUM" }),
                            (0, h.o)(G.Hw.ALBUM, Z.external_parent_id);
                        },
                      }),
                      (0, i.jsxs)("div", {
                        className: M.details,
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)(k.Z, {
                                variant: "heading-sm/semibold",
                                text: Z.title,
                                onClick: () => {
                                  v({ action: "OPEN_SPOTIFY_TRACK" }),
                                    (0, h.o)(G.Hw.TRACK, Z.external_id);
                                },
                              }),
                              (0, i.jsx)(k.Z, {
                                variant: "text-xs/normal",
                                text:
                                  null === (a = Z.artists[0]) || void 0 === a
                                    ? void 0
                                    : a.name,
                                onClick: () => {
                                  var e;
                                  v({ action: "OPEN_SPOTIFY_ARTIST" }),
                                    (0, h.o)(
                                      G.Hw.ARTIST,
                                      null === (e = Z.artists[0]) ||
                                        void 0 === e
                                        ? void 0
                                        : e.external_id,
                                    );
                                },
                              }),
                            ],
                          }),
                          (0, i.jsx)(T.Gk, {
                            location: T.Gt.USER_PROFILE,
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
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, O.z)(),
          c = { [M.fullSize]: r === Y.y0.FULL_SIZE },
          { largeImage: d } = (0, E.rv)({ entry: a }),
          { analyticsLocations: o } = (0, m.ZP)(),
          x = (0, L.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: o,
          }),
          _ = (0, g.Z)({ userId: s.id, onAction: x });
        return (0, i.jsxs)(A.Z.Overlay, {
          className: n()(M.card, l),
          ref: _,
          children: [
            t,
            (0, i.jsx)("div", {
              className: M.body,
              children: (0, i.jsxs)("div", {
                className: n()(M.content, c),
                children: [
                  (0, i.jsx)(j.E, {
                    image: d,
                    size: j.J.SIZE_60,
                    onClick: () => {
                      x({ action: "OPEN_SPOTIFY_ALBUM" }),
                        (0, h.o)(G.Hw.ALBUM, a.extra.media.external_parent_id);
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: M.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(k.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media.title,
                            onClick: () => {
                              x({ action: "OPEN_SPOTIFY_TRACK" }),
                                (0, h.o)(G.Hw.TRACK, a.extra.media.external_id);
                            },
                          }),
                          (0, i.jsx)(k.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.artist.name,
                            onClick: () => {
                              x({ action: "OPEN_SPOTIFY_ARTIST" }),
                                (0, h.o)(
                                  G.Hw.ARTIST,
                                  a.extra.artist.external_id,
                                );
                            },
                          }),
                        ],
                      }),
                      (0, i.jsx)(T.Gk, {
                        location: T.Gt.USER_PROFILE,
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
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, O.z)(),
          d = { [M.fullSize]: r === Y.y0.FULL_SIZE },
          { largeImage: x } = (0, E.rv)({ entry: a }),
          _ = (0, c.e7)([P.Z, p.Z], () => P.Z.getChannel(p.Z.getChannelId())),
          { analyticsLocations: h } = (0, m.ZP)(),
          u = (0, L.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: h,
          }),
          I = (0, g.Z)({ userId: s.id, onAction: u }),
          Z = () => {
            var e;
            (0, o.Z)({
              channel: _,
              guildId:
                null !== (e = null == _ ? void 0 : _.getGuildId()) &&
                void 0 !== e
                  ? e
                  : void 0,
              analyticsLocations: h,
              locationObject: {},
              openInPopout: !1,
              initialSelectedApplicationId: a.extra.application_id,
              initialSlide: F.ag.DETAIL_PAGE,
            });
          };
        return (0, i.jsxs)(A.Z.Overlay, {
          className: n()(M.card, l),
          ref: I,
          children: [
            t,
            (0, i.jsx)("div", {
              className: M.body,
              children: (0, i.jsxs)("div", {
                className: n()(M.content, d),
                children: [
                  (0, i.jsx)(j.E, {
                    image: x,
                    size: j.J.SIZE_60,
                    onClick: () => {
                      u({ action: "PRESS_IMAGE" }), Z();
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: M.details,
                    children: [
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(k.Z, {
                          variant: "heading-sm/semibold",
                          text: a.extra.activity_name,
                          onClick: () => {
                            u({ action: "PRESS_TEXT" }), Z();
                          },
                        }),
                      }),
                      (0, i.jsx)(T.Gk, {
                        location: T.Gt.USER_PROFILE,
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
            className: t,
            onClose: n,
            hideHeader: r = !1,
            hideContextMenu: c = !1,
          } = e,
          { analyticsLocations: d } = (0, m.ZP)(
            x.Z.USER_PROFILE_RECENT_ACTIVITY_CARD,
          );
        return (0, _.LP)(a)
          ? (0, i.jsx)(m.Gt, {
              value: d,
              children: (0, i.jsx)(U.Z, {
                user: s,
                onClose: n,
                children: (e) => {
                  let { onAutoDismiss: d } = e,
                    o = (e) =>
                      (0, i.jsx)(b.Z, {
                        text: r ? void 0 : e,
                        contextMenu: c
                          ? null
                          : (0, i.jsx)(f.Z, {
                              display: "recent",
                              entry: a,
                              user: s,
                              onClose: n,
                              onRequestOpen: d,
                            }),
                      });
                  return (0, l.EQ)(a)
                    .when(_.dX, (e) =>
                      (0, i.jsx)(w, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(_.y0, (e) =>
                      (0, i.jsx)(H, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(_.dU, (e) =>
                      (0, i.jsx)(D, {
                        header: o(
                          z.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                        ),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(_.KF, (e) =>
                      (0, i.jsx)(J, {
                        header: o(
                          z.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                        ),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(_.Mq, (e) =>
                      (0, i.jsx)(V, {
                        header: o(z.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                        user: s,
                        entry: e,
                        className: t,
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
//# sourceMappingURL=c02dbed35ce4a258abf3.js.map
