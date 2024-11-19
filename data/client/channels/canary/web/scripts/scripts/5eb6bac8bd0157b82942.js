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
        c = a(481060),
        d = a(100527),
        o = a(906732),
        x = a(499254),
        m = a(827498),
        j = a(541716),
        h = a(379357),
        v = a(26033),
        _ = a(358696),
        u = a(740605),
        E = a(370370),
        Z = a(91140),
        y = a(551228),
        S = a(278399),
        N = a(555672),
        I = a(335326),
        P = a(297781),
        R = a(797342),
        p = a(810568),
        C = a(168524),
        T = a(960870),
        O = a(139793),
        b = a(502762),
        g = a(652853),
        k = a(194811),
        L = a(373826),
        A = a(582123),
        U = a(290274),
        f = a(228168),
        F = a(616922),
        z = a(388032),
        G = a(676411);
      function w(e) {
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: d } = (0, g.z)(),
          x = { [G.fullSize]: d === f.y0.FULL_SIZE },
          { largeImage: m } = (0, h.rv)({ entry: a, showCoverImage: !1 }),
          { appName: j } = (0, R.n)(a),
          v = (0, C.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: a.extra.application_id,
            source: p.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0,
          }),
          { analyticsLocations: u } = (0, o.ZP)(),
          E = (0, T.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: u,
          }),
          y = (0, O.Z)({ userId: s.id, onAction: E }),
          S = () =>
            a.content_type === r.s.TOP_GAME
              ? N.Hs.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                )
              : Z.W.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                );
        return null == v
          ? (0, i.jsxs)(b.Z.Overlay, {
              className: n()(G.card, l),
              ref: y,
              children: [
                t,
                (0, i.jsx)("div", {
                  className: G.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(G.content, x),
                    children: [
                      (0, i.jsx)(_.E, { image: m, size: _.J.SIZE_60 }),
                      (0, i.jsxs)("div", {
                        className: G.details,
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(L.Z, {
                              variant: "heading-sm/semibold",
                              text: j,
                            }),
                          }),
                          (0, i.jsx)(P.Gk, {
                            location: P.Gt.USER_PROFILE,
                            className: G.badges,
                            children: S(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, i.jsxs)(b.Z.Overlay, {
              className: n()(G.card, l),
              ref: y,
              children: [
                t,
                (0, i.jsx)("div", {
                  className: G.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(G.content, x),
                    children: [
                      (0, i.jsx)(_.E, {
                        image: m,
                        onClick: (e) => {
                          E({ action: "PRESS_IMAGE" }), v(e);
                        },
                        size: _.J.SIZE_60,
                      }),
                      (0, i.jsxs)("div", {
                        className: G.details,
                        children: [
                          (0, i.jsx)(c.Clickable, {
                            className: G.clickable,
                            onClick: (e) => {
                              E({ action: "PRESS_TEXT" }), v(e);
                            },
                            children: (0, i.jsx)(L.Z, {
                              variant: "heading-sm/semibold",
                              text: j,
                            }),
                          }),
                          (0, i.jsx)(P.Gk, {
                            location: P.Gt.USER_PROFILE,
                            className: G.badges,
                            children: S(),
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
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, g.z)(),
          d = { [G.fullSize]: r === f.y0.FULL_SIZE },
          { largeImage: x } = (0, h.rv)({ entry: a }),
          { url: m } = a.extra,
          { analyticsLocations: j } = (0, o.ZP)(),
          v = (0, T.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: j,
          }),
          E = (0, O.Z)({ userId: s.id, onAction: v });
        return (0, i.jsxs)(b.Z.Overlay, {
          className: n()(G.card, l),
          ref: E,
          children: [
            t,
            (0, i.jsx)("div", {
              className: G.body,
              children: (0, i.jsxs)("div", {
                className: n()(G.content, d),
                children: [
                  (0, i.jsx)(_.E, {
                    aspectRatio: "crunchyroll",
                    image: x,
                    size: _.J.SIZE_60,
                    onClick:
                      null == m || "" === m
                        ? void 0
                        : () => {
                            v({ action: "PRESS_IMAGE" }), (0, u.Y)(m);
                          },
                  }),
                  (0, i.jsxs)("div", {
                    className: G.details,
                    children: [
                      null == m || "" === m
                        ? (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)(L.Z, {
                                variant: "heading-sm/semibold",
                                text: a.extra.media_title,
                              }),
                              (0, i.jsx)(L.Z, {
                                variant: "text-xs/normal",
                                text: a.extra.media_subtitle,
                              }),
                            ],
                          })
                        : (0, i.jsxs)(c.Clickable, {
                            className: G.clickable,
                            onClick: () => {
                              v({ action: "PRESS_TEXT" }), (0, u.Y)(m);
                            },
                            children: [
                              (0, i.jsx)(L.Z, {
                                variant: "heading-sm/semibold",
                                text: a.extra.media_title,
                              }),
                              (0, i.jsx)(L.Z, {
                                variant: "text-xs/normal",
                                text: a.extra.media_subtitle,
                              }),
                            ],
                          }),
                      (0, i.jsx)(P.Gk, {
                        location: P.Gt.USER_PROFILE,
                        className: G.badges,
                        children: I.t.map((e, s) =>
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
      function H(e) {
        var s, a;
        let { user: t, entry: l, header: r, className: c } = e,
          { profileType: d } = (0, g.z)(),
          x = { [G.fullSize]: d === f.y0.FULL_SIZE },
          { largeImage: m } = (0, h.rv)({ entry: l }),
          { analyticsLocations: j } = (0, o.ZP)(),
          v = (0, T.Z)({
            display: "recent",
            user: t,
            entry: l,
            analyticsLocations: j,
          }),
          E = (0, O.Z)({ userId: t.id, onAction: v }),
          Z =
            null === (s = l.extra.entries[0]) || void 0 === s
              ? void 0
              : s.media;
        return null == Z
          ? null
          : (0, i.jsxs)(b.Z.Overlay, {
              className: n()(G.card, c),
              ref: E,
              children: [
                r,
                (0, i.jsx)("div", {
                  className: G.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(G.content, x),
                    children: [
                      (0, i.jsx)(_.E, {
                        image: m,
                        size: _.J.SIZE_60,
                        onClick: () => {
                          v({ action: "OPEN_SPOTIFY_ALBUM" }),
                            (0, u.o)(F.Hw.ALBUM, Z.external_parent_id);
                        },
                      }),
                      (0, i.jsxs)("div", {
                        className: G.details,
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)(L.Z, {
                                variant: "heading-sm/semibold",
                                text: Z.title,
                                onClick: () => {
                                  v({ action: "OPEN_SPOTIFY_TRACK" }),
                                    (0, u.o)(F.Hw.TRACK, Z.external_id);
                                },
                              }),
                              (0, i.jsx)(L.Z, {
                                variant: "text-xs/normal",
                                text:
                                  null === (a = Z.artists[0]) || void 0 === a
                                    ? void 0
                                    : a.name,
                                onClick: () => {
                                  var e;
                                  v({ action: "OPEN_SPOTIFY_ARTIST" }),
                                    (0, u.o)(
                                      F.Hw.ARTIST,
                                      null === (e = Z.artists[0]) ||
                                        void 0 === e
                                        ? void 0
                                        : e.external_id,
                                    );
                                },
                              }),
                            ],
                          }),
                          (0, i.jsx)(P.Gk, {
                            location: P.Gt.USER_PROFILE,
                            className: G.badges,
                            children: y.te.map((e, s) =>
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
      function Y(e) {
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, g.z)(),
          c = { [G.fullSize]: r === f.y0.FULL_SIZE },
          { largeImage: d } = (0, h.rv)({ entry: a }),
          { analyticsLocations: x } = (0, o.ZP)(),
          m = (0, T.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: x,
          }),
          j = (0, O.Z)({ userId: s.id, onAction: m });
        return (0, i.jsxs)(b.Z.Overlay, {
          className: n()(G.card, l),
          ref: j,
          children: [
            t,
            (0, i.jsx)("div", {
              className: G.body,
              children: (0, i.jsxs)("div", {
                className: n()(G.content, c),
                children: [
                  (0, i.jsx)(_.E, {
                    image: d,
                    size: _.J.SIZE_60,
                    onClick: () => {
                      m({ action: "OPEN_SPOTIFY_ALBUM" }),
                        (0, u.o)(F.Hw.ALBUM, a.extra.media.external_parent_id);
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: G.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(L.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media.title,
                            onClick: () => {
                              m({ action: "OPEN_SPOTIFY_TRACK" }),
                                (0, u.o)(F.Hw.TRACK, a.extra.media.external_id);
                            },
                          }),
                          (0, i.jsx)(L.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.artist.name,
                            onClick: () => {
                              m({ action: "OPEN_SPOTIFY_ARTIST" }),
                                (0, u.o)(
                                  F.Hw.ARTIST,
                                  a.extra.artist.external_id,
                                );
                            },
                          }),
                        ],
                      }),
                      (0, i.jsx)(P.Gk, {
                        location: P.Gt.USER_PROFILE,
                        className: G.badges,
                        children: S.Ho.map((e, s) =>
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
        let { user: s, entry: a, header: t, onClose: l, className: r } = e,
          { profileType: c } = (0, g.z)(),
          d = { [G.fullSize]: c === f.y0.FULL_SIZE },
          { largeImage: v } = (0, h.rv)({ entry: a }),
          { analyticsLocations: u } = (0, o.ZP)(),
          Z = (0, T.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: u,
          }),
          y = (0, O.Z)({ userId: s.id, onAction: Z }),
          S = () => {
            null == l || l(),
              (0, x.__)(m._b.TEXT, j.I.NORMAL, {
                applicationId: a.extra.application_id,
              });
          };
        return (0, i.jsxs)(b.Z.Overlay, {
          className: n()(G.card, r),
          ref: y,
          children: [
            t,
            (0, i.jsx)("div", {
              className: G.body,
              children: (0, i.jsxs)("div", {
                className: n()(G.content, d),
                children: [
                  (0, i.jsx)(_.E, {
                    image: v,
                    size: _.J.SIZE_60,
                    onClick: () => {
                      Z({ action: "PRESS_IMAGE" }), S();
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: G.details,
                    children: [
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(L.Z, {
                          variant: "heading-sm/semibold",
                          text: a.extra.activity_name,
                          onClick: () => {
                            Z({ action: "PRESS_TEXT" }), S();
                          },
                        }),
                      }),
                      (0, i.jsx)(P.Gk, {
                        location: P.Gt.USER_PROFILE,
                        className: G.badges,
                        children: E.j.map((e, s) =>
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
          { analyticsLocations: x } = (0, o.ZP)(
            d.Z.USER_PROFILE_RECENT_ACTIVITY_CARD,
          );
        return (0, v.LP)(a)
          ? (0, i.jsx)(o.Gt, {
              value: x,
              children: (0, i.jsx)(A.Z, {
                user: s,
                onClose: n,
                children: (e) => {
                  let { onAutoDismiss: d } = e,
                    o = (e) =>
                      (0, i.jsx)(k.Z, {
                        text: r ? void 0 : e,
                        contextMenu: c
                          ? null
                          : (0, i.jsx)(U.Z, {
                              display: "recent",
                              entry: a,
                              user: s,
                              onClose: n,
                              onRequestOpen: d,
                            }),
                      });
                  return (0, l.EQ)(a)
                    .when(v.dX, (e) =>
                      (0, i.jsx)(w, {
                        header: o(z.intl.string(z.t["/+HOSU"])),
                        user: s,
                        entry: e,
                        className: t,
                        onClose: n,
                      }),
                    )
                    .when(v.y0, (e) =>
                      (0, i.jsx)(M, {
                        header: o(z.intl.string(z.t.KLzzAg)),
                        user: s,
                        entry: e,
                        className: t,
                        onClose: n,
                      }),
                    )
                    .when(v.dU, (e) =>
                      (0, i.jsx)(H, {
                        header: o(z.intl.string(z.t.TdtyAg)),
                        user: s,
                        entry: e,
                        className: t,
                        onClose: n,
                      }),
                    )
                    .when(v.KF, (e) =>
                      (0, i.jsx)(Y, {
                        header: o(z.intl.string(z.t.TdtyAg)),
                        user: s,
                        entry: e,
                        className: t,
                        onClose: n,
                      }),
                    )
                    .when(v.Mq, (e) =>
                      (0, i.jsx)(J, {
                        header: o(z.intl.string(z.t["/+HOSU"])),
                        user: s,
                        entry: e,
                        className: t,
                        onClose: n,
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
//# sourceMappingURL=5eb6bac8bd0157b82942.js.map
