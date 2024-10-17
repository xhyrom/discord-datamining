"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2928"],
  {
    545505: function (e) {
      e.exports = "/assets/691c0b9237eebf2df1e5.svg";
    },
    184269: function (e) {
      e.exports = "/assets/18433a47992348f39c32.svg";
    },
    769928: function (e) {
      e.exports = "/assets/5a539d8a63649052172a.svg";
    },
    12e3: function (e) {
      e.exports = "/assets/dba60598ea89725ccc0b.svg";
    },
    98021: function (e) {
      e.exports = "/assets/3e6e1d634be03ec9a5c4.svg";
    },
    661745: function (e) {
      e.exports = "/assets/d471416be79dc0e5b746.svg";
    },
    900927: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return j;
        },
      });
      var t = a(735250);
      a(470079);
      var i = a(399606),
        l = a(481060),
        n = a(275759),
        r = a(565138),
        c = a(706454),
        d = a(271383),
        o = a(430824),
        x = a(709054),
        u = a(689938),
        m = a(45844);
      function j(e) {
        let { userId: s, guildId: a, textClassName: j, tooltipDelay: v } = e,
          h = (0, i.e7)([c.default], () => c.default.locale),
          N = (0, i.e7)([o.Z], () => (null != a ? o.Z.getGuild(a) : null)),
          Z = (0, i.e7)([d.ZP], () =>
            null != a ? d.ZP.getMember(a, s) : null,
          ),
          E = (0, n.FI)(x.default.extractTimestamp(s), h),
          I = (0, n.FI)(null == Z ? void 0 : Z.joinedAt, h);
        return null == N || null == Z
          ? (0, t.jsx)(l.Text, {
              variant: "text-sm/normal",
              className: j,
              children: E,
            })
          : (0, t.jsxs)("div", {
              className: m.memberSinceWrapper,
              children: [
                (0, t.jsxs)("div", {
                  className: m.memberSince,
                  children: [
                    (0, t.jsx)(l.Tooltip, {
                      text: u.Z.Messages.DISCORD_NAME,
                      delay: v,
                      children: (e) =>
                        (0, t.jsx)(l.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: m.discordIcon,
                        }),
                    }),
                    (0, t.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      className: j,
                      children: E,
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: m.divider }),
                (0, t.jsxs)("div", {
                  className: m.memberSince,
                  children: [
                    (0, t.jsx)(l.Tooltip, {
                      text: N.name,
                      delay: v,
                      children: (e) =>
                        (0, t.jsx)(r.Z, {
                          ...e,
                          guild: N,
                          size: r.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, t.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      className: j,
                      children: I,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    527790: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return O;
        },
      }),
        a(47120);
      var t = a(735250);
      a(470079);
      var i = a(120356),
        l = a.n(i),
        n = a(876215),
        r = a(481060),
        c = a(100527),
        d = a(906732),
        o = a(379357),
        x = a(26033),
        u = a(358696),
        m = a(91140),
        j = a(551228),
        v = a(278399),
        h = a(555672),
        N = a(335326),
        Z = a(297781),
        E = a(797342),
        I = a(810568),
        S = a(168524),
        _ = a(960870),
        f = a(139793),
        y = a(579264),
        p = a(502762),
        g = a(652853),
        R = a(194811),
        b = a(373826),
        T = a(582123),
        A = a(290274),
        L = a(228168),
        C = a(689938),
        U = a(676411);
      function P(e) {
        let { user: s, entry: a, header: i, className: c, onClose: x } = e,
          { profileType: j } = (0, g.z)(),
          v = { [U.fullSize]: j === L.y0.FULL_SIZE },
          { largeImage: N } = (0, o.rv)({ entry: a, showCoverImage: !1 }),
          { appName: y } = (0, E.n)(a),
          R = (0, S.Z)({
            location: "UserProfileRecentActivityCard",
            applicationId: a.extra.application_id,
            source: I.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0,
          }),
          { analyticsLocations: T } = (0, d.ZP)(),
          A = (0, _.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: T,
          }),
          C = (0, f.Z)({ userId: s.id, onAction: A }),
          P = () =>
            a.content_type === n.s.TOP_GAME
              ? h.Hs.map((e, s) =>
                  (0, t.jsx)(e, { entry: a }, "entry-".concat(s)),
                )
              : m.W.map((e, s) =>
                  (0, t.jsx)(e, { entry: a }, "entry-".concat(s)),
                );
        return null == R
          ? (0, t.jsxs)(p.Z.Overlay, {
              className: l()(U.card, c),
              ref: C,
              children: [
                i,
                (0, t.jsx)("div", {
                  className: U.body,
                  children: (0, t.jsxs)("div", {
                    className: l()(U.content, v),
                    children: [
                      (0, t.jsx)(u.E, { image: N, size: u.J.SIZE_60 }),
                      (0, t.jsxs)("div", {
                        className: U.details,
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)(b.Z, {
                              variant: "heading-sm/semibold",
                              text: y,
                            }),
                          }),
                          (0, t.jsx)(Z.Gk, {
                            location: Z.Gt.USER_PROFILE,
                            className: U.badges,
                            children: P(),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, t.jsxs)(p.Z.Overlay, {
              className: l()(U.card, c),
              ref: C,
              children: [
                i,
                (0, t.jsx)("div", {
                  className: U.body,
                  children: (0, t.jsxs)("div", {
                    className: l()(U.content, v),
                    children: [
                      (0, t.jsx)(u.E, {
                        image: N,
                        onClick: () => {
                          A({ action: "PRESS_GAME_IMAGE" }), R();
                        },
                        size: u.J.SIZE_60,
                      }),
                      (0, t.jsxs)("div", {
                        className: U.details,
                        children: [
                          (0, t.jsx)(r.Clickable, {
                            className: U.clickable,
                            onClick: () => {
                              A({ action: "OPEN_GAME_PROFILE" }),
                                R(),
                                null == x || x();
                            },
                            children: (0, t.jsx)(b.Z, {
                              variant: "heading-sm/semibold",
                              text: y,
                            }),
                          }),
                          (0, t.jsx)(Z.Gk, {
                            location: Z.Gt.USER_PROFILE,
                            className: U.badges,
                            children: P(),
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
        let { user: s, entry: a, header: i, className: n } = e,
          { profileType: r } = (0, g.z)(),
          c = { [U.fullSize]: r === L.y0.FULL_SIZE },
          { largeImage: x } = (0, o.rv)({ entry: a }),
          { analyticsLocations: m } = (0, d.ZP)(),
          j = (0, _.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: m,
          }),
          v = (0, f.Z)({ userId: s.id, onAction: j });
        return (0, t.jsxs)(p.Z.Overlay, {
          className: l()(U.card, n),
          ref: v,
          children: [
            i,
            (0, t.jsx)("div", {
              className: U.body,
              children: (0, t.jsxs)("div", {
                className: l()(U.content, c),
                children: [
                  (0, t.jsx)(u.E, {
                    aspectRatio: "crunchyroll",
                    image: x,
                    size: u.J.SIZE_60,
                  }),
                  (0, t.jsxs)("div", {
                    className: U.details,
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(b.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media_title,
                          }),
                          (0, t.jsx)(b.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.media_subtitle,
                          }),
                        ],
                      }),
                      (0, t.jsx)(Z.Gk, {
                        location: Z.Gt.USER_PROFILE,
                        className: U.badges,
                        children: N.t.map((e, s) =>
                          (0, t.jsx)(e, { entry: a }, "entry-".concat(s)),
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
      function z(e) {
        var s, a, i;
        let { user: n, entry: r, header: c, className: x } = e,
          { profileType: m } = (0, g.z)(),
          v = { [U.fullSize]: m === L.y0.FULL_SIZE },
          { largeImage: h } = (0, o.rv)({ entry: r }),
          { analyticsLocations: N } = (0, d.ZP)(),
          E = (0, _.Z)({
            display: "recent",
            user: n,
            entry: r,
            analyticsLocations: N,
          }),
          I = (0, f.Z)({ userId: n.id, onAction: E }),
          S =
            null === (s = r.extra.entries[0]) || void 0 === s
              ? void 0
              : s.media;
        if (null == S) return null;
        let y =
          null !==
            (i =
              null === (a = S.artists[0]) || void 0 === a ? void 0 : a.name) &&
          void 0 !== i
            ? i
            : S.title;
        return (0, t.jsxs)(p.Z.Overlay, {
          className: l()(U.card, x),
          ref: I,
          children: [
            c,
            (0, t.jsx)("div", {
              className: U.body,
              children: (0, t.jsxs)("div", {
                className: l()(U.content, v),
                children: [
                  (0, t.jsx)(u.E, { image: h, size: u.J.SIZE_60 }),
                  (0, t.jsxs)("div", {
                    className: U.details,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)(b.Z, {
                          variant: "heading-sm/semibold",
                          text: y,
                        }),
                      }),
                      (0, t.jsx)(Z.Gk, {
                        location: Z.Gt.USER_PROFILE,
                        className: U.badges,
                        children: j.te.map((e, s) =>
                          (0, t.jsx)(e, { entry: r }, "entry-".concat(s)),
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
      function k(e) {
        let { user: s, entry: a, header: i, className: n } = e,
          { profileType: r } = (0, g.z)(),
          c = { [U.fullSize]: r === L.y0.FULL_SIZE },
          { largeImage: x } = (0, o.rv)({ entry: a }),
          { analyticsLocations: m } = (0, d.ZP)(),
          j = (0, _.Z)({
            display: "recent",
            user: s,
            entry: a,
            analyticsLocations: m,
          }),
          h = (0, f.Z)({ userId: s.id, onAction: j });
        return (0, t.jsxs)(p.Z.Overlay, {
          className: l()(U.card, n),
          ref: h,
          children: [
            i,
            (0, t.jsx)("div", {
              className: U.body,
              children: (0, t.jsxs)("div", {
                className: l()(U.content, c),
                children: [
                  (0, t.jsx)(u.E, { image: x, size: u.J.SIZE_60 }),
                  (0, t.jsxs)("div", {
                    className: U.details,
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(b.Z, {
                            variant: "heading-sm/semibold",
                            text: a.extra.media.title,
                          }),
                          (0, t.jsx)(b.Z, {
                            variant: "text-xs/normal",
                            text: a.extra.artist.name,
                          }),
                        ],
                      }),
                      (0, t.jsx)(Z.Gk, {
                        location: Z.Gt.USER_PROFILE,
                        className: U.badges,
                        children: v.Ho.map((e, s) =>
                          (0, t.jsx)(e, { entry: a }, "entry-".concat(s)),
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
      function O(e) {
        let {
            user: s,
            entry: a,
            className: i,
            onClose: l,
            hideHeader: n = !1,
            hideContextMenu: r = !1,
          } = e,
          { analyticsLocations: o } = (0, d.ZP)(
            c.Z.USER_PROFILE_RECENT_ACTIVITY_CARD,
          );
        return (0, y.Z)(a)
          ? (0, t.jsx)(d.Gt, {
              value: o,
              children: (0, t.jsx)(T.Z, {
                user: s,
                onClose: l,
                children: (e) => {
                  let { onAutoDismiss: c } = e,
                    d = (e) =>
                      (0, t.jsx)(R.Z, {
                        text: n ? null : e,
                        contextMenu: r
                          ? null
                          : (0, t.jsx)(A.Z, {
                              display: "recent",
                              entry: a,
                              user: s,
                              onClose: l,
                              onRequestOpen: c,
                            }),
                      });
                  return (0, x.dX)(a)
                    ? (0, t.jsx)(P, {
                        header: d(C.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                        user: s,
                        entry: a,
                        className: i,
                      })
                    : (0, x.y0)(a)
                      ? (0, t.jsx)(M, {
                          header: d(
                            C.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED,
                          ),
                          user: s,
                          entry: a,
                          className: i,
                        })
                      : (0, x.dU)(a)
                        ? (0, t.jsx)(z, {
                            header: d(
                              C.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                            ),
                            user: s,
                            entry: a,
                            className: i,
                          })
                        : (0, x.KF)(a)
                          ? (0, t.jsx)(k, {
                              header: d(
                                C.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO,
                              ),
                              user: s,
                              entry: a,
                              className: i,
                            })
                          : null;
                },
              }),
            })
          : null;
      }
    },
    389190: function (e, s, a) {
      a.d(s, {
        T: function () {
          return N;
        },
        Z: function () {
          return Z;
        },
      });
      var t = a(735250);
      a(470079);
      var i = a(442837),
        l = a(481060),
        n = a(239091),
        r = a(129861),
        c = a(906732),
        d = a(158776),
        o = a(785717),
        x = a(697927),
        u = a(171368),
        m = a(981631),
        j = a(689938),
        v = a(519294);
      let h = (0, l.getAvatarSize)(l.AvatarSizes.SIZE_40);
      function N(e) {
        let { user: s, status: c, onSelect: o } = e,
          x = (0, i.e7)([d.Z], () => d.Z.isMobileOnline(s.id));
        return (0, t.jsxs)(l.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: v.listRow,
          onClick: o,
          onContextMenu: (e) => {
            (0, n.jW)(e, async () => {
              let { default: e } = await Promise.all([
                a.e("79695"),
                a.e("69220"),
                a.e("50261"),
              ]).then(a.bind(a, 881351));
              return (a) => (0, t.jsx)(e, { ...a, user: s });
            });
          },
          children: [
            (0, t.jsx)(l.Avatar, {
              src: s.getAvatarURL(void 0, h),
              "aria-label": s.username,
              size: l.AvatarSizes.SIZE_40,
              status: c,
              isMobile: x,
              className: v.listAvatar,
            }),
            (0, t.jsx)(r.Z, {
              user: s,
              className: v.listName,
              discriminatorClass: v.listDiscriminator,
            }),
          ],
        });
      }
      function Z(e) {
        let { user: s, onClose: a } = e,
          { mutualFriends: i } = (0, x.Z)(s.id),
          { analyticsLocations: n } = (0, c.ZP)(),
          { context: r, trackUserProfileAction: d } = (0, o.KZ)(),
          h = (e) => {
            a(),
              (0, u.openUserProfileModal)({
                ...r,
                userId: e,
                sourceAnalyticsLocations: n,
                analyticsLocation: {
                  section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS,
                },
              });
          };
        return (0, t.jsx)(l.ScrollerThin, {
          className: v.listScroller,
          fade: !0,
          children:
            null == i
              ? (0, t.jsx)("div", {
                  className: v.empty,
                  children: (0, t.jsx)(l.Spinner, {}),
                })
              : 0 === i.length
                ? (0, t.jsxs)("div", {
                    className: v.empty,
                    children: [
                      (0, t.jsx)("div", { className: v.emptyIconFriends }),
                      (0, t.jsx)("div", {
                        className: v.emptyText,
                        children: j.Z.Messages.NO_MUTUAL_FRIENDS,
                      }),
                    ],
                  })
                : i.map((e) => {
                    let { key: s, user: a, status: i } = e;
                    return (0, t.jsx)(
                      N,
                      {
                        user: a,
                        status: i,
                        onSelect: () => {
                          d({ action: "PRESS_MUTUAL_FRIEND" }), h(a.id);
                        },
                      },
                      s,
                    );
                  }),
        });
      }
    },
    428927: function (e, s, a) {
      a.d(s, {
        D: function () {
          return f;
        },
        Z: function () {
          return y;
        },
      });
      var t = a(735250);
      a(470079);
      var i = a(120356),
        l = a.n(i),
        n = a(780384),
        r = a(481060),
        c = a(239091),
        d = a(37234),
        o = a(410030),
        x = a(44315),
        u = a(565138),
        m = a(769654),
        j = a(51144),
        v = a(785717),
        h = a(200634),
        N = a(228168),
        Z = a(981631),
        E = a(689938),
        I = a(519294),
        S = a(581958);
      let _ = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function f(e) {
        let { user: s, guild: i, nick: d, theme: o, onSelect: m } = e,
          v = s.hasAvatarForGuild(i.id);
        return (0, t.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: I.listRow,
          onClick: m,
          onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                a.e("96427"),
                a.e("23755"),
                a.e("11751"),
                a.e("33053"),
                a.e("15669"),
                a.e("65840"),
                a.e("7654"),
                a.e("90508"),
                a.e("52373"),
                a.e("44156"),
                a.e("59743"),
                a.e("35994"),
                a.e("85552"),
                a.e("50104"),
                a.e("58227"),
                a.e("1187"),
                a.e("28377"),
                a.e("22036"),
                a.e("92557"),
                a.e("64679"),
                a.e("79220"),
                a.e("17423"),
                a.e("33213"),
                a.e("88578"),
              ]).then(a.bind(a, 545135));
              return (s) => (0, t.jsx)(e, { ...s, guild: i });
            });
          },
          children: [
            (0, t.jsx)(u.Z, {
              tabIndex: -1,
              guild: i,
              showBadge: !0,
              className: l()(
                I.listAvatar,
                null == i.icon ? S.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, x.Lq)(
                (0, n.wj)(o) ? Z.Ilk.PRIMARY_600 : Z.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: N.vB,
              size: u.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, t.jsxs)("div", {
              className: I.listRowContent,
              children: [
                (0, t.jsx)("div", {
                  className: I.listName,
                  children: i.toString(),
                }),
                v || null != d
                  ? (0, t.jsxs)("div", {
                      className: S.guildNick,
                      children: [
                        v &&
                          (0, t.jsx)(r.Avatar, {
                            src: s.getAvatarURL(i.id, _),
                            size: r.AvatarSizes.SIZE_16,
                            className: S.guildAvatar,
                            "aria-hidden": !0,
                          }),
                        null != d ? d : j.ZP.getName(s),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function y(e) {
        let { user: s, onClose: a } = e,
          { trackUserProfileAction: i } = (0, v.KZ)(),
          { mutualGuilds: l } = (0, h.Z)(s.id),
          n = (0, o.ZP)(),
          c = (e) => {
            (0, m.X)(e), a(), (0, d.xf)();
          };
        return (0, t.jsx)(r.ScrollerThin, {
          className: I.listScroller,
          fade: !0,
          children:
            null == l
              ? (0, t.jsx)("div", {
                  className: I.empty,
                  children: (0, t.jsx)(r.Spinner, {}),
                })
              : 0 === l.length
                ? (0, t.jsxs)("div", {
                    className: I.empty,
                    children: [
                      (0, t.jsx)("div", { className: I.emptyIconGuilds }),
                      (0, t.jsx)("div", {
                        className: I.emptyText,
                        children: E.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : l.map((e) => {
                    let { guild: a, nick: l } = e;
                    return (0, t.jsx)(
                      f,
                      {
                        user: s,
                        guild: a,
                        nick: l,
                        theme: n,
                        onSelect: () => {
                          i({ action: "PRESS_MUTUAL_GUILD" }), c(a.id);
                        },
                      },
                      a.id,
                    );
                  }),
        });
      }
    },
  },
]);
//# sourceMappingURL=f57e840df2b3aca98804.js.map
