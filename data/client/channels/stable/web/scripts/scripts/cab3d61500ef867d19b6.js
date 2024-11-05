"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62880"],
  {
    527790: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return X;
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
        j = a(379357),
        h = a(26033),
        v = a(358696),
        u = a(740605),
        _ = a(370370),
        E = a(91140),
        Z = a(551228),
        y = a(278399),
        S = a(555672),
        I = a(335326),
        N = a(297781),
        P = a(797342),
        p = a(810568),
        g = a(168524),
        R = a(592125),
        T = a(944486),
        O = a(960870),
        C = a(139793),
        b = a(502762),
        k = a(652853),
        A = a(194811),
        L = a(373826),
        U = a(582123),
        f = a(290274),
        F = a(228168),
        G = a(701488),
        z = a(616922),
        w = a(388032),
        H = a(676411);
      function M(e) {
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: c } = (0, k.z)(),
          o = { [H.fullSize]: c === F.y0.FULL_SIZE },
          { largeImage: x } = (0, j.rv)({ entry: a, showCoverImage: !1 }),
          { appName: h } = (0, P.n)(a),
          u = (0, g.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: a.extra.application_id,
            source: p.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0,
          }),
          { analyticsLocations: _ } = (0, m.ZP)(),
          Z = (0, O.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: _,
          }),
          y = (0, C.Z)({ userId: s.id, onAction: Z }),
          I = () =>
            a.content_type === r.s.TOP_GAME
              ? S.Hs.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                )
              : E.W.map((e, s) =>
                  (0, i.jsx)(e, { entry: a }, "entry-".concat(s)),
                );
        return null == u
          ? (0, i.jsxs)(b.Z.Overlay, {
              className: n()(H.card, l),
              ref: y,
              children: [
                t,
                (0, i.jsx)("div", {
                  className: H.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(H.content, o),
                    children: [
                      (0, i.jsx)(v.E, { image: x, size: v.J.SIZE_60 }),
                      (0, i.jsxs)("div", {
                        className: H.details,
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(L.Z, {
                              variant: "heading-sm/semibold",
                              text: h,
                            }),
                          }),
                          (0, i.jsx)(N.Gk, {
                            location: N.Gt.USER_PROFILE,
                            className: H.badges,
                            children: I(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, i.jsxs)(b.Z.Overlay, {
              className: n()(H.card, l),
              ref: y,
              children: [
                t,
                (0, i.jsx)("div", {
                  className: H.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(H.content, o),
                    children: [
                      (0, i.jsx)(v.E, {
                        image: x,
                        onClick: (e) => {
                          Z({ action: "PRESS_IMAGE" }), u(e);
                        },
                        size: v.J.SIZE_60,
                      }),
                      (0, i.jsxs)("div", {
                        className: H.details,
                        children: [
                          (0, i.jsx)(d.Clickable, {
                            className: H.clickable,
                            onClick: (e) => {
                              Z({ action: "PRESS_TEXT" }), u(e);
                            },
                            children: (0, i.jsx)(L.Z, {
                              variant: "heading-sm/semibold",
                              text: h,
                            }),
                          }),
                          (0, i.jsx)(N.Gk, {
                            location: N.Gt.USER_PROFILE,
                            className: H.badges,
                            children: I(),
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
          { profileType: r } = (0, k.z)(),
          c = { [H.fullSize]: r === F.y0.FULL_SIZE },
          { largeImage: o } = (0, j.rv)({ entry: a }),
          { url: x } = a.extra,
          { analyticsLocations: h } = (0, m.ZP)(),
          _ = (0, O.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: h,
          }),
          E = (0, C.Z)({ userId: s.id, onAction: _ });
        return (0, i.jsxs)(b.Z.Overlay, {
          className: n()(H.card, l),
          ref: E,
          children: [
            t,
            (0, i.jsx)("div", {
              className: H.body,
              children: (0, i.jsxs)("div", {
                className: n()(H.content, c),
                children: [
                  (0, i.jsx)(v.E, {
                    aspectRatio: "crunchyroll",
                    image: o,
                    size: v.J.SIZE_60,
                    onClick:
                      null == x || "" === x
                        ? void 0
                        : () => {
                            _({ action: "PRESS_IMAGE" }), (0, u.Y)(x);
                          },
                  }),
                  (0, i.jsxs)("div", {
                    className: H.details,
                    children: [
                      null == x || "" === x
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
                        : (0, i.jsxs)(d.Clickable, {
                            className: H.clickable,
                            onClick: () => {
                              _({ action: "PRESS_TEXT" }), (0, u.Y)(x);
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
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: H.badges,
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
      function J(e) {
        var s, a;
        let { user: t, entry: l, header: r, className: c } = e,
          { profileType: d } = (0, k.z)(),
          o = { [H.fullSize]: d === F.y0.FULL_SIZE },
          { largeImage: x } = (0, j.rv)({ entry: l }),
          { analyticsLocations: h } = (0, m.ZP)(),
          _ = (0, O.Z)({
            display: "recent",
            user: t,
            entry: l,
            analyticsLocations: h,
          }),
          E = (0, C.Z)({ userId: t.id, onAction: _ }),
          y =
            null === (s = l.extra.entries[0]) || void 0 === s
              ? void 0
              : s.media;
        return null == y
          ? null
          : (0, i.jsxs)(b.Z.Overlay, {
              className: n()(H.card, c),
              ref: E,
              children: [
                r,
                (0, i.jsx)("div", {
                  className: H.body,
                  children: (0, i.jsxs)("div", {
                    className: n()(H.content, o),
                    children: [
                      (0, i.jsx)(v.E, {
                        image: x,
                        size: v.J.SIZE_60,
                        onClick: () => {
                          _({ action: "OPEN_SPOTIFY_ALBUM" }),
                            (0, u.o)(z.Hw.ALBUM, y.external_parent_id);
                        },
                      }),
                      (0, i.jsxs)("div", {
                        className: H.details,
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)(L.Z, {
                                variant: "heading-sm/semibold",
                                text: y.title,
                                onClick: () => {
                                  _({ action: "OPEN_SPOTIFY_TRACK" }),
                                    (0, u.o)(z.Hw.TRACK, y.external_id);
                                },
                              }),
                              (0, i.jsx)(L.Z, {
                                variant: "text-xs/normal",
                                text:
                                  null === (a = y.artists[0]) || void 0 === a
                                    ? void 0
                                    : a.name,
                                onClick: () => {
                                  var e;
                                  _({ action: "OPEN_SPOTIFY_ARTIST" }),
                                    (0, u.o)(
                                      z.Hw.ARTIST,
                                      null === (e = y.artists[0]) ||
                                        void 0 === e
                                        ? void 0
                                        : e.external_id,
                                    );
                                },
                              }),
                            ],
                          }),
                          (0, i.jsx)(N.Gk, {
                            location: N.Gt.USER_PROFILE,
                            className: H.badges,
                            children: Z.te.map((e, s) =>
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
      function K(e) {
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, k.z)(),
          c = { [H.fullSize]: r === F.y0.FULL_SIZE },
          { largeImage: d } = (0, j.rv)({ entry: a }),
          { analyticsLocations: o } = (0, m.ZP)(),
          x = (0, O.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: o,
          }),
          h = (0, C.Z)({ userId: s.id, onAction: x });
        return (0, i.jsxs)(b.Z.Overlay, {
          className: n()(H.card, l),
          ref: h,
          children: [
            t,
            (0, i.jsx)("div", {
              className: H.body,
              children: (0, i.jsxs)("div", {
                className: n()(H.content, c),
                children: [
                  (0, i.jsx)(v.E, {
                    image: d,
                    size: v.J.SIZE_60,
                    onClick: () => {
                      x({ action: "OPEN_SPOTIFY_ALBUM" }),
                        (0, u.o)(z.Hw.ALBUM, a.extra.media.external_parent_id);
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: H.details,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(L.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media.title,
                            onClick: () => {
                              x({ action: "OPEN_SPOTIFY_TRACK" }),
                                (0, u.o)(z.Hw.TRACK, a.extra.media.external_id);
                            },
                          }),
                          (0, i.jsx)(L.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.artist.name,
                            onClick: () => {
                              x({ action: "OPEN_SPOTIFY_ARTIST" }),
                                (0, u.o)(
                                  z.Hw.ARTIST,
                                  a.extra.artist.external_id,
                                );
                            },
                          }),
                        ],
                      }),
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: H.badges,
                        children: y.Ho.map((e, s) =>
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
      function B(e) {
        let { user: s, entry: a, header: t, className: l } = e,
          { profileType: r } = (0, k.z)(),
          d = { [H.fullSize]: r === F.y0.FULL_SIZE },
          { largeImage: x } = (0, j.rv)({ entry: a }),
          h = (0, c.e7)([R.Z, T.Z], () => R.Z.getChannel(T.Z.getChannelId())),
          { analyticsLocations: u } = (0, m.ZP)(),
          E = (0, O.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: u,
          }),
          Z = (0, C.Z)({ userId: s.id, onAction: E }),
          y = () => {
            var e;
            (0, o.Z)({
              channel: h,
              guildId:
                null !== (e = null == h ? void 0 : h.getGuildId()) &&
                void 0 !== e
                  ? e
                  : void 0,
              analyticsLocations: u,
              locationObject: {},
              openInPopout: !1,
              initialSelectedApplicationId: a.extra.application_id,
              initialSlide: G.ag.DETAIL_PAGE,
            });
          };
        return (0, i.jsxs)(b.Z.Overlay, {
          className: n()(H.card, l),
          ref: Z,
          children: [
            t,
            (0, i.jsx)("div", {
              className: H.body,
              children: (0, i.jsxs)("div", {
                className: n()(H.content, d),
                children: [
                  (0, i.jsx)(v.E, {
                    image: x,
                    size: v.J.SIZE_60,
                    onClick: () => {
                      E({ action: "PRESS_IMAGE" }), y();
                    },
                  }),
                  (0, i.jsxs)("div", {
                    className: H.details,
                    children: [
                      (0, i.jsx)("div", {
                        children: (0, i.jsx)(L.Z, {
                          variant: "heading-sm/semibold",
                          text: a.extra.activity_name,
                          onClick: () => {
                            E({ action: "PRESS_TEXT" }), y();
                          },
                        }),
                      }),
                      (0, i.jsx)(N.Gk, {
                        location: N.Gt.USER_PROFILE,
                        className: H.badges,
                        children: _.j.map((e, s) =>
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
      function X(e) {
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
        return (0, h.LP)(a)
          ? (0, i.jsx)(m.Gt, {
              value: d,
              children: (0, i.jsx)(U.Z, {
                user: s,
                onClose: n,
                children: (e) => {
                  let { onAutoDismiss: d } = e,
                    o = (e) =>
                      (0, i.jsx)(A.Z, {
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
                    .when(h.dX, (e) =>
                      (0, i.jsx)(M, {
                        header: o(w.intl.string(w.t["/+HOSU"])),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(h.y0, (e) =>
                      (0, i.jsx)(Y, {
                        header: o(w.intl.string(w.t.KLzzAg)),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(h.dU, (e) =>
                      (0, i.jsx)(J, {
                        header: o(w.intl.string(w.t.TdtyAg)),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(h.KF, (e) =>
                      (0, i.jsx)(K, {
                        header: o(w.intl.string(w.t.TdtyAg)),
                        user: s,
                        entry: e,
                        className: t,
                      }),
                    )
                    .when(h.Mq, (e) =>
                      (0, i.jsx)(B, {
                        header: o(w.intl.string(w.t["/+HOSU"])),
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
//# sourceMappingURL=cab3d61500ef867d19b6.js.map
