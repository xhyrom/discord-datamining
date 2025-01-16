"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82412"],
  {
    738535: function (e) {
      e.exports = "/assets/7accf9569e9f6ef904ca.png";
    },
    80730: function (e) {
      e.exports = "/assets/d958d0f2bf29e9947cb9.png";
    },
    888496: function (e, n, t) {
      t.d(n, {
        Dq: function () {
          return N;
        },
        hf: function () {
          return h;
        },
        li: function () {
          return x;
        },
        oP: function () {
          return E;
        },
        rJ: function () {
          return A;
        },
        rm: function () {
          return v;
        },
        ul: function () {
          return _;
        },
      }),
        t(653041),
        t(47120);
      var c = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        o = t(392711),
        i = t.n(o),
        r = t(481060),
        s = t(930153),
        u = t(275759),
        d = t(856651),
        T = t(388032),
        m = t(119028);
      function E(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          a = Number(
            null !== (n = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== n ? n : -1,
          ),
          o = "1" === e[d.PC.REDDIT_GOLD],
          i = "1" === e[d.PC.REDDIT_MOD];
        return (
          a > -1 &&
            l.push(
              (0, c.jsx)(
                p,
                { className: t, count: a, label: T.t.SbCNo6 },
                d.PC.REDDIT_TOTAL_KARMA,
              ),
            ),
          o &&
            l.push(
              (0, c.jsx)(
                O,
                { className: t, label: T.intl.string(T.t["06rDHR"]) },
                d.PC.REDDIT_GOLD,
              ),
            ),
          i &&
            l.push(
              (0, c.jsx)(
                O,
                { className: t, label: T.intl.string(T.t.oWM95O) },
                d.PC.REDDIT_MOD,
              ),
            ),
          l
        );
      }
      function A(e) {
        var n, t;
        let l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          a = [],
          o = Number(
            null !== (n = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          i = Number(
            null !== (t = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t
              ? t
              : -1,
          );
        return (
          o > -1 &&
            a.push(
              (0, c.jsx)(
                p,
                { className: l, count: o, label: T.t.llwqqa },
                d.PC.TWITTER_STATUSES_COUNT,
              ),
            ),
          i > -1 &&
            a.push(
              (0, c.jsx)(
                p,
                { className: l, count: i, label: T.t.LMNOUV },
                d.PC.TWITTER_FOLLOWERS_COUNT,
              ),
            ),
          a
        );
      }
      function N(e) {
        var n, l, a;
        let o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          i = [],
          r = Number(
            null !== (n = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== n ? n : -1,
          ),
          s = Number(
            null !== (l = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l
              ? l
              : -1,
          ),
          u = Number(
            null !== (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== a
              ? a
              : -1,
          );
        return (
          r > -1 &&
            i.push(
              (0, c.jsx)(
                p,
                { className: o, count: r, label: T.t.ppXMu7 },
                d.PC.STEAM_GAME_COUNT,
              ),
            ),
          s > -1 &&
            i.push(
              (0, c.jsx)(
                I,
                {
                  className: o,
                  label: T.intl.format(T.t["Y88M5+"], { count: s }),
                  imageSrc: t(738535),
                  imageAlt: T.intl.string(T.t.HKUEZm),
                },
                d.PC.STEAM_ITEM_COUNT_DOTA2,
              ),
            ),
          u > -1 &&
            i.push(
              (0, c.jsx)(
                I,
                {
                  className: o,
                  label: T.intl.format(T.t["Y88M5+"], { count: u }),
                  imageSrc: t(80730),
                  imageAlt: T.intl.string(T.t.C8p1Sk),
                },
                d.PC.STEAM_ITEM_COUNT_TF2,
              ),
            ),
          i
        );
      }
      function x(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          t = [];
        return (
          "1" === e[d.PC.PAYPAL_VERIFIED] &&
            t.push(
              (0, c.jsx)(
                O,
                {
                  className: a()(n, m.paypalVerifiedTag),
                  label: T.intl.string(T.t.IhXLy8),
                },
                d.PC.PAYPAL_VERIFIED,
              ),
            ),
          t
        );
      }
      function _(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          a = Number(
            null !== (n = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) &&
              void 0 !== n
              ? n
              : -1,
          ),
          o = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
        return (
          a > 0 &&
            l.push(
              (0, c.jsx)(
                p,
                { className: t, count: a, label: T.t.YmL22d, percent: !0 },
                d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
              ),
            ),
          o &&
            l.push(
              (0, c.jsx)(
                O,
                { className: t, label: T.intl.string(T.t.TEEYwc) },
                d.PC.EBAY_TOP_RATED_SELLER,
              ),
            ),
          l
        );
      }
      function h(e) {
        var n, t, l;
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          o = [],
          i = "1" === e[d.PC.TIKTOK_VERIFIED],
          r = Number(
            null !== (n = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          s = Number(
            null !== (t = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t
              ? t
              : -1,
          ),
          u = Number(
            null !== (l = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1,
          );
        return (
          r > -1 &&
            o.push(
              (0, c.jsx)(
                p,
                { className: a, count: r, label: T.t["Mpm/BQ"] },
                d.PC.TIKTOK_FOLLOWER_COUNT,
              ),
            ),
          s > -1 &&
            o.push(
              (0, c.jsx)(
                p,
                { className: a, count: s, label: T.t.ftf12t },
                d.PC.TIKTOK_FOLLOWING_COUNT,
              ),
            ),
          u > -1 &&
            o.push(
              (0, c.jsx)(
                p,
                { className: a, count: u, label: T.t.Qwhe5u },
                d.PC.TIKTOK_LIKES_COUNT,
              ),
            ),
          i &&
            o.push(
              (0, c.jsx)(
                O,
                { className: a, label: T.intl.string(T.t.QHHwRU) },
                d.PC.TIKTOK_VERIFIED,
              ),
            ),
          o
        );
      }
      function v(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          l = [],
          a = Object.keys(e.metadata);
        if (
          null == e.application_metadata ||
          0 === Object.keys(e.application_metadata).length ||
          0 === a.length
        )
          return l;
        for (let o of i().sortBy(a, (n) => {
          var t, c;
          return null === (c = e.application_metadata) || void 0 === c
            ? void 0
            : null === (t = c[n]) || void 0 === t
              ? void 0
              : t.name;
        })) {
          let a = e.application_metadata[o];
          if (null == a) continue;
          let i = e.metadata[o];
          try {
            switch (a.type) {
              case d.xn.BOOLEAN_EQUAL:
              case d.xn.BOOLEAN_NOT_EQUAL:
                ((a.type === d.xn.BOOLEAN_EQUAL && "1" === i) ||
                  (a.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== i)) &&
                  l.push((0, c.jsx)(O, { className: n, label: a.name }, a.key));
                break;
              case d.xn.DATETIME_GREATER_THAN_EQUAL:
              case d.xn.DATETIME_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    C,
                    { className: n, date: i, locale: t, label: a.name },
                    a.key,
                  ),
                );
                break;
              case d.xn.INTEGER_EQUAL:
              case d.xn.INTEGER_NOT_EQUAL:
              case d.xn.INTEGER_GREATER_THAN_EQUAL:
              case d.xn.INTEGER_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    p,
                    { className: n, count: Number(i), label: a.name },
                    a.key,
                  ),
                );
            }
          } catch (e) {}
        }
        return l;
      }
      function p(e) {
        let n,
          { count: t, label: l, className: o, percent: i } = e,
          u = (0, s.$U)(t) + (i ? "%" : "");
        return (
          (n =
            "string" == typeof l
              ? T.intl.format(T.t.HLoinJ, { name: l, value: u })
              : T.intl.format(l, { value: u })),
          (0, c.jsx)(r.Text, {
            className: a()(m.connectedAccountVanityMetadata, o),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: n,
          })
        );
      }
      function C(e) {
        let { date: n, locale: t, label: l, className: o } = e;
        return (0, c.jsx)(r.Text, {
          className: a()(m.connectedAccountVanityMetadata, o),
          variant: "text-xs/normal",
          color: "interactive-active",
          children: T.intl.format(T.t.HLoinJ, {
            value: (0, u.FI)(n, t),
            name: l,
          }),
        });
      }
      function I(e) {
        let { label: n, imageSrc: t, imageAlt: l, className: o } = e;
        return (0, c.jsxs)("div", {
          className: a()(
            m.connectedAccountVanityMetadata,
            m.connectedAccountVanityMetadataItem,
            o,
          ),
          children: [
            (0, c.jsx)(r.Tooltip, {
              text: l,
              children: (e) =>
                (0, c.jsx)("img", {
                  ...e,
                  src: t,
                  alt: l,
                  className: m.connectedAccountVanityMetadataItemIcon,
                }),
            }),
            (0, c.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "interactive-active",
              children: n,
            }),
          ],
        });
      }
      function O(e) {
        let { label: n, className: t } = e;
        return (0, c.jsx)(r.Text, {
          variant: "text-xs/semibold",
          color: "interactive-active",
          className: a()(
            m.connectedAccountVanityMetadata,
            m.connectedAccountVanityMetadataTag,
            t,
          ),
          children: n,
        });
      }
    },
    819602: function (e, n, t) {
      t.d(n, {
        E3: function () {
          return j;
        },
        OA: function () {
          return R;
        },
        tH: function () {
          return P;
        },
      }),
        t(653041);
      var c = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        i = t(692547),
        r = t(780384),
        s = t(481060),
        u = t(99690),
        d = t(726542),
        T = t(367907),
        m = t(132871),
        E = t(147890),
        A = t(122021),
        N = t(275759),
        x = t(888496),
        _ = t(753194),
        h = t(598077),
        v = t(671533),
        p = t(49012),
        C = t(981631),
        I = t(856651),
        O = t(388032),
        f = t(196161);
      function j(e) {
        var n, t;
        let l,
          a,
          u,
          {
            connectedAccount: m,
            theme: E,
            locale: h,
            userId: j,
            className: P,
            showMetadata: R,
            showInvisibleIcon: L,
          } = e;
        null == R && (R = !0);
        let D = null !== (t = m.metadata) && void 0 !== t ? t : {},
          b = R ? (0, N.FI)(D[I.PC.CREATED_AT], h) : null,
          g = (0, s.useToken)(i.Z.unsafe_rawColors.TWITTER).hex(),
          U = O.intl.string(O.t["6H6h1t"]);
        if (R)
          switch (m.type) {
            case C.ABu.REDDIT:
              l = (0, x.oP)(D);
              break;
            case C.ABu.STEAM:
              l = (0, x.Dq)(D);
              break;
            case C.ABu.BLUESKY:
            case C.ABu.MASTODON:
            case C.ABu.TWITTER:
              (l = (0, x.rJ)(D)),
                "1" === D[I.PC.TWITTER_VERIFIED] &&
                  ((a = g), (U = O.intl.string(O.t.Jebrw8)));
              break;
            case C.ABu.PAYPAL:
              l = (0, x.li)(D);
              break;
            case C.ABu.EBAY:
              l = (0, x.ul)(D);
              break;
            case C.ABu.TIKTOK:
              l = (0, x.hf)(D);
          }
        let y = d.Z.get((0, A.rR)(m.type)),
          M =
            null == y
              ? void 0
              : null === (n = y.getPlatformUserUrl) || void 0 === n
                ? void 0
                : n.call(y, m);
        null != L && L
          ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: "md",
              color: "currentColor",
              className: o()(
                f.__invalid_connectedAccountOpenIconContainer,
                f.connectedAccountHideIcon,
              ),
            }))
          : null != M &&
            (u = (0, c.jsx)(s.Anchor, {
              href: M,
              onClick: (e) => {
                var n, t;
                (n = m.type),
                  (t = j),
                  (0, T.yw)(C.rMx.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: n,
                    other_user_id: t,
                  }),
                  (0, p.q)(
                    {
                      href: M,
                      trusted: (null == y ? void 0 : y.type) !== C.ABu.DOMAIN,
                    },
                    e,
                  );
              },
              children: (0, c.jsx)(v.Z, {
                className: f.connectedAccountOpenIcon,
                direction: v.Z.Directions.RIGHT,
              }),
            }));
        let S = (0, s.useToken)(i.Z.colors.INTERACTIVE_MUTED).hex(),
          k = (0, s.useToken)(i.Z.colors.INTERACTIVE_ACTIVE).hex(),
          w = m.verified
            ? (0, c.jsx)(_.Z, {
                className: f.connectedAccountVerifiedIcon,
                color: null != a ? a : S,
                forcedIconColor: k,
                size: 16,
                tooltipText: U,
              })
            : null;
        return (0, c.jsxs)("div", {
          className: o()(
            f.connectedAccountContainer,
            (null != l && l.length > 0) || null != b
              ? f.connectedAccountContainerWithMetadata
              : null,
            P,
          ),
          children: [
            (0, c.jsxs)("div", {
              className: f.connectedAccount,
              children: [
                (0, c.jsx)(s.Tooltip, {
                  text: null == y ? void 0 : y.name,
                  children: (e) =>
                    (0, c.jsx)("img", {
                      ...e,
                      alt: O.intl.formatToPlainString(O.t.rtm15O, {
                        name: null == y ? void 0 : y.name,
                      }),
                      className: f.connectedAccountIcon,
                      src: (0, r.wj)(E)
                        ? null == y
                          ? void 0
                          : y.icon.darkSVG
                        : null == y
                          ? void 0
                          : y.icon.lightSVG,
                    }),
                }),
                (0, c.jsxs)("div", {
                  className: f.connectedAccountNameContainer,
                  children: [
                    (0, c.jsxs)("div", {
                      className: f.connectedAccountName,
                      children: [
                        (0, c.jsxs)("div", {
                          className: f.connectedAccountNameTextContainer,
                          children: [
                            (0, c.jsx)(s.Tooltip, {
                              overflowOnly: !0,
                              text: m.name,
                              children: (e) =>
                                (0, c.jsx)(s.Text, {
                                  ...e,
                                  variant: "text-sm/medium",
                                  color: "interactive-active",
                                  className: f.connectedAccountNameText,
                                  children: m.name,
                                }),
                            }),
                            w,
                          ],
                        }),
                        u,
                      ],
                    }),
                    null != b
                      ? (0, c.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: O.intl.format(O.t["9rfonp"], { date: b }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            null != l && l.length > 0
              ? (0, c.jsx)("div", {
                  className: f.connectedAccountChildren,
                  children: l,
                })
              : null,
          ],
        });
      }
      function P(e) {
        let {
            applicationRoleConnection: n,
            className: t,
            locale: l,
            onApplicationClicked: a,
            selectedGuildId: i,
          } = e,
          r = (0, x.rm)(n, void 0, l),
          d = () => {
            null == a || a(),
              (0, E.goToAppDirectory)({
                view: m.ApplicationDirectoryViews.APPLICATION,
                applicationId: n.application.id,
                guildId: i,
                entrypoint: {
                  name: m.ApplicationDirectoryEntrypointNames
                    .APPLICATION_DIRECTORY_URL,
                },
              });
          };
        return (0, c.jsxs)("div", {
          className: o()(
            f.connectedAccountContainer,
            null != r && r.length > 0
              ? f.connectedAccountContainerWithMetadata
              : null,
            t,
          ),
          children: [
            (0, c.jsx)("div", {
              className: f.connectedAccount,
              children: (0, c.jsxs)(s.Clickable, {
                className: o()(
                  f.connectedAccountNameContainer,
                  f.connectedAccountNameContainerClickable,
                ),
                onClick: d,
                children: [
                  null != n.platform_name
                    ? (0, c.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        children: n.platform_name,
                      })
                    : null,
                  null != n.platform_username
                    ? (0, c.jsx)("div", {
                        className: f.connectedAccountName,
                        children: (0, c.jsx)("div", {
                          className: f.connectedAccountNameTextContainer,
                          children: (0, c.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            className: f.connectedAccountNameText,
                            children: n.platform_username,
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            }),
            null != r && r.length > 0
              ? (0, c.jsx)("div", {
                  className: o()(
                    f.connectedAccountChildren,
                    f.connectedAccountChildrenNoIcon,
                  ),
                  children: r,
                })
              : null,
            (0, c.jsx)("div", {
              children: (0, c.jsx)(s.Clickable, {
                className: f.connectedAccountPoweredBy,
                onClick: d,
                children: (0, c.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: O.intl.format(O.t.zIT9YG, {
                    applicationHook: () =>
                      (0, c.jsxs)("div", {
                        className: f.connectedAccountPoweredByText,
                        children: [
                          null != n.application.bot
                            ? (0, c.jsx)(u.Z, {
                                user: new h.Z(n.application.bot),
                                size: s.AvatarSizes.SIZE_16,
                              })
                            : null,
                          (0, c.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            children: n.application.name,
                          }),
                        ],
                      }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      let R = l.forwardRef(function (e, n) {
        let {
          connectedAccounts: t,
          theme: l,
          locale: a,
          className: i,
          userId: r,
        } = e;
        if (null == t || 0 === t.length) return null;
        let s = t
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
              (0, c.jsx)(
                j,
                { connectedAccount: e, theme: l, locale: a, userId: r },
                "".concat(e.type, ":").concat(e.id),
              ),
            ),
          u = [],
          T = [];
        for (let e = 0; e < s.length; e++) {
          let n = s[e];
          e % 2 == 0 ? u.push(n) : T.push(n);
        }
        return (0, c.jsxs)("div", {
          ref: n,
          className: o()(f.connectedAccounts, i),
          children: [
            (0, c.jsx)("div", {
              className: f.connectedAccountsColumn,
              children: u,
            }),
            (0, c.jsx)("div", {
              className: f.connectedAccountsColumn,
              children: T,
            }),
          ],
        });
      });
    },
    671533: function (e, n, t) {
      t(411104);
      var c,
        l,
        a = t(200651);
      t(192379);
      var o = t(120356),
        i = t.n(o),
        r = t(331595),
        s = t(485270);
      ((l = c || (c = {})).LEFT = "LEFT"),
        (l.RIGHT = "RIGHT"),
        (l.UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.UP_LEFT = "UP_LEFT"),
        (l.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: n = 24,
          height: t = 24,
          color: c = "currentColor",
          direction: l,
          foreground: o,
          className: u,
          title: d,
          ...T
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, r.Z)(T),
          width: n,
          height: t,
          className: i()(
            u,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return s.left;
                case "RIGHT":
                  return s.right;
                case "UP":
                  return null;
                case "DOWN":
                  return s.down;
                case "UP_LEFT":
                  return s.upLeft;
                case "DOWN_RIGHT":
                  return s.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(l),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, a.jsx)("title", { children: d }) : null,
            (0, a.jsx)("polygon", {
              className: o,
              fill: c,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = c), (n.Z = u);
    },
  },
]);
//# sourceMappingURL=a4eb1369d4308102f943.js.map
