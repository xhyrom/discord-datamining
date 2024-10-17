"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82412"],
  {
    448238: function (e) {
      e.exports = "/assets/7accf9569e9f6ef904ca.png";
    },
    80730: function (e) {
      e.exports = "/assets/d958d0f2bf29e9947cb9.png";
    },
    34674: function (e, n, t) {
      t.d(n, {
        $_: function () {
          return A;
        },
        KQ: function () {
          return I;
        },
        MU: function () {
          return E;
        },
        RF: function () {
          return p;
        },
        m0: function () {
          return _;
        },
        rf: function () {
          return C;
        },
        tu: function () {
          return O;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(315314);
      var c = t(860911),
        a = t(477690),
        l = t(481060),
        o = t(911969),
        r = t(134432),
        i = t(703656),
        s = t(768581),
        u = t(981631),
        T = t(689938);
      let E = 0,
        { API_ENDPOINT: d, CDN_HOST: N } = window.GLOBAL_ENV;
      function _(e) {
        return e.id === E;
      }
      function I() {
        return { id: E, name: T.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function O(e) {
        switch (e.id) {
          case 0:
            return l.GlobeEarthIcon;
          case 4:
            return l.TvIcon;
          case 5:
            return l.AnalyticsIcon;
          case 6:
            return l.GameControllerIcon;
          case 8:
            break;
          case 9:
            return l.FriendsIcon;
          case 10:
            return l.WrenchIcon;
        }
        return l.AsteriskIcon;
      }
      function A(e) {
        let { itemId: n, hash: t } = e,
          c = new URLSearchParams({
            size: (0, r.oO)(
              parseFloat(a.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, r.x_)(),
            ).toString(),
          }).toString(),
          l = s.$k ? "webp" : "png";
        return null != N
          ? ""
              .concat(location.protocol, "//")
              .concat(N, "/app-assets/application-directory/collection-items/")
              .concat(n, "/")
              .concat(t, ".")
              .concat(l, "?")
              .concat(c)
          : ""
              .concat(location.protocol)
              .concat(d)
              .concat(
                u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, l),
                "?",
              )
              .concat(c);
      }
      function C() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let t in e) {
          let c = e[t];
          n.searchParams.set(t, c);
        }
        let t = n.pathname + n.search,
          a = (0, c.Ui)(t, !1);
        (0, i.uL)(a);
      }
      let m = (e) => {
        if (null == e) return null;
        let n = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != n ? n[1] : null;
      };
      function p(e) {
        switch (e.type) {
          case o.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: u.s9s.IMG, width: 0, height: 0, src: t };
          case o.ee.YOUTUBE:
            let c = m(e.url);
            if (null != c)
              return { type: u.s9s.YOUTUBE_VIDEO, youtubeVideoId: c };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, n, t) {
      t.r(n),
        t.d(n, {
          goHome: function () {
            return u;
          },
          goSearch: function () {
            return N;
          },
          goToAppDirectory: function () {
            return s;
          },
          goToApplication: function () {
            return T;
          },
          goToApplicationSection: function () {
            return E;
          },
          goToApplicationStoreSku: function () {
            return d;
          },
          goToCategory: function () {
            return _;
          },
          replaceAppDirectoryURLWith: function () {
            return I;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var c = t(703656),
        a = t(626135),
        l = t(34674),
        o = t(132871),
        r = t(272242),
        i = t(981631);
      let s = (e) => {
          let {
              view: n = o.ApplicationDirectoryViews.HOME,
              guildId: t,
              applicationId: c,
              applicationSection: l,
              entrypoint: s,
              skuId: _,
            } = e,
            I = { ...s, pathname: window.location.pathname };
          switch (
            (a.default.track(i.rMx.APP_DIRECTORY_OPENED, {
              source: null == I ? void 0 : I.name,
            }),
            (0, o.resetApplicationDirectoryHistory)(),
            (0, o.setEntrypoint)(I),
            null != t && (0, o.setGuildId)(t),
            n === o.ApplicationDirectoryViews.APPLICATION &&
              null == c &&
              (n = o.ApplicationDirectoryViews.HOME),
            n)
          ) {
            case o.ApplicationDirectoryViews.HOME:
              u();
              break;
            case o.ApplicationDirectoryViews.SEARCH:
              N();
              break;
            case o.ApplicationDirectoryViews.APPLICATION:
              if (null != c) {
                if (null != l) {
                  if (
                    l === r.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    d({ applicationId: c, skuId: _ });
                    break;
                  }
                  E({ applicationId: c, section: l });
                  break;
                }
                T({ applicationId: c });
              }
          }
        },
        u = () => {
          let e = { previousView: (0, o.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        T = (e) => {
          let { applicationId: n } = e,
            t = { previousView: (0, o.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
        },
        E = (e) => {
          let { applicationId: n, section: t } = e,
            a = { previousView: (0, o.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), {
            state: a,
          });
        },
        d = (e) => {
          let { applicationId: n, skuId: t } = e,
            a = { previousView: (0, o.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), {
            state: a,
          });
        },
        N = function () {
          let {
              query: e,
              categoryId: n,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            a = new URLSearchParams(),
            l = { previousView: (0, o.getCurrentView)() };
          null != e && a.set("q", e),
            null != n && a.set("category_id", n.toString()),
            null != t && a.set("page", t.toString()),
            (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: a.toString(),
              state: l,
            });
        },
        _ = (e) => {
          let { categoryId: n } = e;
          N({ categoryId: null != n ? n : l.MU });
        },
        I = (e) => {
          let {
            location: { state: n },
          } = (0, c.s1)();
          (0, c.dL)(e, n);
        };
    },
    888496: function (e, n, t) {
      t.d(n, {
        Dq: function () {
          return I;
        },
        hf: function () {
          return C;
        },
        li: function () {
          return O;
        },
        oP: function () {
          return N;
        },
        rJ: function () {
          return _;
        },
        rm: function () {
          return m;
        },
        ul: function () {
          return A;
        },
      }),
        t(653041),
        t(47120);
      var c = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        o = t(392711),
        r = t.n(o),
        i = t(481060),
        s = t(930153),
        u = t(275759),
        T = t(856651),
        E = t(689938),
        d = t(473522);
      function N(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          a = [],
          l = Number(
            null !== (n = e[T.PC.REDDIT_TOTAL_KARMA]) && void 0 !== n ? n : -1,
          ),
          o = "1" === e[T.PC.REDDIT_GOLD],
          r = "1" === e[T.PC.REDDIT_MOD];
        return (
          l > -1 &&
            a.push(
              (0, c.jsx)(
                p,
                {
                  className: t,
                  count: l,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA,
                },
                T.PC.REDDIT_TOTAL_KARMA,
              ),
            ),
          o &&
            a.push(
              (0, c.jsx)(
                x,
                { className: t, label: E.Z.Messages.CONNECTIONS_REDDIT_GOLD },
                T.PC.REDDIT_GOLD,
              ),
            ),
          r &&
            a.push(
              (0, c.jsx)(
                x,
                { className: t, label: E.Z.Messages.CONNECTIONS_REDDIT_MOD },
                T.PC.REDDIT_MOD,
              ),
            ),
          a
        );
      }
      function _(e) {
        var n, t;
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          o = Number(
            null !== (n = e[T.PC.TWITTER_STATUSES_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          r = Number(
            null !== (t = e[T.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t
              ? t
              : -1,
          );
        return (
          o > -1 &&
            l.push(
              (0, c.jsx)(
                p,
                {
                  className: a,
                  count: o,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES,
                },
                T.PC.TWITTER_STATUSES_COUNT,
              ),
            ),
          r > -1 &&
            l.push(
              (0, c.jsx)(
                p,
                {
                  className: a,
                  count: r,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS,
                },
                T.PC.TWITTER_FOLLOWERS_COUNT,
              ),
            ),
          l
        );
      }
      function I(e) {
        var n, a, l;
        let o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          r = [],
          i = Number(
            null !== (n = e[T.PC.STEAM_GAME_COUNT]) && void 0 !== n ? n : -1,
          ),
          s = Number(
            null !== (a = e[T.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a
              ? a
              : -1,
          ),
          u = Number(
            null !== (l = e[T.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== l
              ? l
              : -1,
          );
        return (
          i > -1 &&
            r.push(
              (0, c.jsx)(
                p,
                {
                  className: o,
                  count: i,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES,
                },
                T.PC.STEAM_GAME_COUNT,
              ),
            ),
          s > -1 &&
            r.push(
              (0, c.jsx)(
                R,
                {
                  className: o,
                  label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
                    count: s,
                  }),
                  imageSrc: t(448238),
                  imageAlt: E.Z.Messages.CONNECTIONS_STEAM_DOTA2,
                },
                T.PC.STEAM_ITEM_COUNT_DOTA2,
              ),
            ),
          u > -1 &&
            r.push(
              (0, c.jsx)(
                R,
                {
                  className: o,
                  label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({
                    count: u,
                  }),
                  imageSrc: t(80730),
                  imageAlt: E.Z.Messages.CONNECTIONS_STEAM_TF2,
                },
                T.PC.STEAM_ITEM_COUNT_TF2,
              ),
            ),
          r
        );
      }
      function O(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          t = [];
        return (
          "1" === e[T.PC.PAYPAL_VERIFIED] &&
            t.push(
              (0, c.jsx)(
                x,
                {
                  className: l()(n, d.paypalVerifiedTag),
                  label: E.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED,
                },
                T.PC.PAYPAL_VERIFIED,
              ),
            ),
          t
        );
      }
      function A(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          a = [],
          l = Number(
            null !== (n = e[T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) &&
              void 0 !== n
              ? n
              : -1,
          ),
          o = "1" === e[T.PC.EBAY_TOP_RATED_SELLER];
        return (
          l > 0 &&
            a.push(
              (0, c.jsx)(
                p,
                {
                  className: t,
                  count: l,
                  label:
                    E.Z.Messages
                      .CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                  percent: !0,
                },
                T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
              ),
            ),
          o &&
            a.push(
              (0, c.jsx)(
                x,
                {
                  className: t,
                  label: E.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER,
                },
                T.PC.EBAY_TOP_RATED_SELLER,
              ),
            ),
          a
        );
      }
      function C(e) {
        var n, t, a;
        let l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          o = [],
          r = "1" === e[T.PC.TIKTOK_VERIFIED],
          i = Number(
            null !== (n = e[T.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          s = Number(
            null !== (t = e[T.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t
              ? t
              : -1,
          ),
          u = Number(
            null !== (a = e[T.PC.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1,
          );
        return (
          i > -1 &&
            o.push(
              (0, c.jsx)(
                p,
                {
                  className: l,
                  count: i,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS,
                },
                T.PC.TIKTOK_FOLLOWER_COUNT,
              ),
            ),
          s > -1 &&
            o.push(
              (0, c.jsx)(
                p,
                {
                  className: l,
                  count: s,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING,
                },
                T.PC.TIKTOK_FOLLOWING_COUNT,
              ),
            ),
          u > -1 &&
            o.push(
              (0, c.jsx)(
                p,
                {
                  className: l,
                  count: u,
                  label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES,
                },
                T.PC.TIKTOK_LIKES_COUNT,
              ),
            ),
          r &&
            o.push(
              (0, c.jsx)(
                x,
                {
                  className: l,
                  label: E.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED,
                },
                T.PC.TIKTOK_VERIFIED,
              ),
            ),
          o
        );
      }
      function m(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          a = [],
          l = Object.keys(e.metadata);
        if (
          null == e.application_metadata ||
          0 === Object.keys(e.application_metadata).length ||
          0 === l.length
        )
          return a;
        for (let o of r().sortBy(l, (n) => {
          var t, c;
          return null === (c = e.application_metadata) || void 0 === c
            ? void 0
            : null === (t = c[n]) || void 0 === t
              ? void 0
              : t.name;
        })) {
          let l = e.application_metadata[o];
          if (null == l) continue;
          let r = e.metadata[o];
          try {
            switch (l.type) {
              case T.xn.BOOLEAN_EQUAL:
              case T.xn.BOOLEAN_NOT_EQUAL:
                ((l.type === T.xn.BOOLEAN_EQUAL && "1" === r) ||
                  (l.type === T.xn.BOOLEAN_NOT_EQUAL && "1" !== r)) &&
                  a.push((0, c.jsx)(x, { className: n, label: l.name }, l.key));
                break;
              case T.xn.DATETIME_GREATER_THAN_EQUAL:
              case T.xn.DATETIME_LESS_THAN_EQUAL:
                a.push(
                  (0, c.jsx)(
                    h,
                    { className: n, date: r, locale: t, label: l.name },
                    l.key,
                  ),
                );
                break;
              case T.xn.INTEGER_EQUAL:
              case T.xn.INTEGER_NOT_EQUAL:
              case T.xn.INTEGER_GREATER_THAN_EQUAL:
              case T.xn.INTEGER_LESS_THAN_EQUAL:
                a.push(
                  (0, c.jsx)(
                    p,
                    { className: n, count: Number(r), label: l.name },
                    l.key,
                  ),
                );
            }
          } catch (e) {}
        }
        return a;
      }
      function p(e) {
        let n,
          { count: t, label: a, className: o, percent: r } = e,
          u = (0, s.$U)(t) + (r ? "%" : "");
        return (
          (n =
            "string" == typeof a
              ? E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                  name: a,
                  value: u,
                })
              : a.format({ value: u })),
          (0, c.jsx)(i.Text, {
            className: l()(d.connectedAccountVanityMetadata, o),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: n,
          })
        );
      }
      function h(e) {
        let { date: n, locale: t, label: a, className: o } = e;
        return (0, c.jsx)(i.Text, {
          className: l()(d.connectedAccountVanityMetadata, o),
          variant: "text-xs/normal",
          color: "interactive-active",
          children:
            E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
              value: (0, u.FI)(n, t),
              name: a,
            }),
        });
      }
      function R(e) {
        let { label: n, imageSrc: t, imageAlt: a, className: o } = e;
        return (0, c.jsxs)("div", {
          className: l()(
            d.connectedAccountVanityMetadata,
            d.connectedAccountVanityMetadataItem,
            o,
          ),
          children: [
            (0, c.jsx)(i.Tooltip, {
              text: a,
              children: (e) =>
                (0, c.jsx)("img", {
                  ...e,
                  src: t,
                  alt: a,
                  className: d.connectedAccountVanityMetadataItemIcon,
                }),
            }),
            (0, c.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "interactive-active",
              children: n,
            }),
          ],
        });
      }
      function x(e) {
        let { label: n, className: t } = e;
        return (0, c.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "interactive-active",
          className: l()(
            d.connectedAccountVanityMetadata,
            d.connectedAccountVanityMetadataTag,
            t,
          ),
          children: n,
        });
      }
    },
    819602: function (e, n, t) {
      t.d(n, {
        E3: function () {
          return f;
        },
        OA: function () {
          return L;
        },
        tH: function () {
          return P;
        },
      }),
        t(653041);
      var c = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(692547),
        i = t(780384),
        s = t(481060),
        u = t(99690),
        T = t(726542),
        E = t(367907),
        d = t(132871),
        N = t(147890),
        _ = t(122021),
        I = t(275759),
        O = t(888496),
        A = t(753194),
        C = t(598077),
        m = t(671533),
        p = t(49012),
        h = t(981631),
        R = t(856651),
        x = t(689938),
        v = t(962586);
      function f(e) {
        var n, t;
        let a,
          l,
          u,
          {
            connectedAccount: d,
            theme: N,
            locale: C,
            userId: f,
            className: P,
            showMetadata: L,
            showInvisibleIcon: D,
          } = e;
        null == L && (L = !0);
        let S = null !== (t = d.metadata) && void 0 !== t ? t : {},
          g = L ? (0, I.FI)(S[R.PC.CREATED_AT], C) : null,
          M = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
          j = x.Z.Messages.CONNECTION_VERIFIED;
        if (L)
          switch (d.type) {
            case h.ABu.REDDIT:
              a = (0, O.oP)(S);
              break;
            case h.ABu.STEAM:
              a = (0, O.Dq)(S);
              break;
            case h.ABu.TWITTER:
              (a = (0, O.rJ)(S)),
                "1" === S[R.PC.TWITTER_VERIFIED] &&
                  ((l = M), (j = x.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER));
              break;
            case h.ABu.PAYPAL:
              a = (0, O.li)(S);
              break;
            case h.ABu.EBAY:
              a = (0, O.ul)(S);
              break;
            case h.ABu.TIKTOK:
              a = (0, O.hf)(S);
          }
        let y = T.Z.get((0, _.rR)(d.type)),
          b =
            null == y
              ? void 0
              : null === (n = y.getPlatformUserUrl) || void 0 === n
                ? void 0
                : n.call(y, d);
        null != D && D
          ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: "md",
              color: "currentColor",
              className: o()(
                v.__invalid_connectedAccountOpenIconContainer,
                v.connectedAccountHideIcon,
              ),
            }))
          : null != b &&
            (u = (0, c.jsx)(s.Anchor, {
              href: b,
              onClick: (e) => {
                var n, t;
                (n = d.type),
                  (t = f),
                  (0, E.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: n,
                    other_user_id: t,
                  }),
                  (0, p.q)(
                    {
                      href: b,
                      trusted: (null == y ? void 0 : y.type) !== h.ABu.DOMAIN,
                    },
                    e,
                  );
              },
              children: (0, c.jsx)(m.Z, {
                className: v.connectedAccountOpenIcon,
                direction: m.Z.Directions.RIGHT,
              }),
            }));
        let U = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
          w = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
          F = d.verified
            ? (0, c.jsx)(A.Z, {
                className: v.connectedAccountVerifiedIcon,
                color: null != l ? l : U,
                forcedIconColor: w,
                size: 16,
                tooltipText: j,
              })
            : null;
        return (0, c.jsxs)("div", {
          className: o()(
            v.connectedAccountContainer,
            (null != a && a.length > 0) || null != g
              ? v.connectedAccountContainerWithMetadata
              : null,
            P,
          ),
          children: [
            (0, c.jsxs)("div", {
              className: v.connectedAccount,
              children: [
                (0, c.jsx)(s.Tooltip, {
                  text: null == y ? void 0 : y.name,
                  children: (e) =>
                    (0, c.jsx)("img", {
                      ...e,
                      alt: x.Z.Messages.IMG_ALT_LOGO.format({
                        name: null == y ? void 0 : y.name,
                      }),
                      className: v.connectedAccountIcon,
                      src: (0, i.wj)(N)
                        ? null == y
                          ? void 0
                          : y.icon.darkSVG
                        : null == y
                          ? void 0
                          : y.icon.lightSVG,
                    }),
                }),
                (0, c.jsxs)("div", {
                  className: v.connectedAccountNameContainer,
                  children: [
                    (0, c.jsxs)("div", {
                      className: v.connectedAccountName,
                      children: [
                        (0, c.jsxs)("div", {
                          className: v.connectedAccountNameTextContainer,
                          children: [
                            (0, c.jsx)(s.Tooltip, {
                              overflowOnly: !0,
                              text: d.name,
                              children: (e) =>
                                (0, c.jsx)(s.Text, {
                                  ...e,
                                  variant: "text-md/semibold",
                                  color: "interactive-active",
                                  className: v.connectedAccountNameText,
                                  children: d.name,
                                }),
                            }),
                            F,
                          ],
                        }),
                        u,
                      ],
                    }),
                    null != g
                      ? (0, c.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children:
                            x.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format(
                              { date: g },
                            ),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            null != a && a.length > 0
              ? (0, c.jsx)("div", {
                  className: v.connectedAccountChildren,
                  children: a,
                })
              : null,
          ],
        });
      }
      function P(e) {
        let {
            applicationRoleConnection: n,
            className: t,
            locale: a,
            onApplicationClicked: l,
            selectedGuildId: r,
          } = e,
          i = (0, O.rm)(n, void 0, a),
          T = () => {
            null == l || l(),
              (0, N.goToAppDirectory)({
                view: d.ApplicationDirectoryViews.APPLICATION,
                applicationId: n.application.id,
                guildId: r,
                entrypoint: {
                  name: d.ApplicationDirectoryEntrypointNames
                    .APPLICATION_DIRECTORY_URL,
                },
              });
          };
        return (0, c.jsxs)("div", {
          className: o()(
            v.connectedAccountContainer,
            null != i && i.length > 0
              ? v.connectedAccountContainerWithMetadata
              : null,
            t,
          ),
          children: [
            (0, c.jsx)("div", {
              className: v.connectedAccount,
              children: (0, c.jsxs)(s.Clickable, {
                className: o()(
                  v.connectedAccountNameContainer,
                  v.connectedAccountNameContainerClickable,
                ),
                onClick: T,
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
                        className: v.connectedAccountName,
                        children: (0, c.jsx)("div", {
                          className: v.connectedAccountNameTextContainer,
                          children: (0, c.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            className: v.connectedAccountNameText,
                            children: n.platform_username,
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            }),
            null != i && i.length > 0
              ? (0, c.jsx)("div", {
                  className: o()(
                    v.connectedAccountChildren,
                    v.connectedAccountChildrenNoIcon,
                  ),
                  children: i,
                })
              : null,
            (0, c.jsx)("div", {
              children: (0, c.jsx)(s.Clickable, {
                className: v.connectedAccountPoweredBy,
                onClick: T,
                children: (0, c.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: x.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                    applicationHook: () =>
                      (0, c.jsxs)("div", {
                        className: v.connectedAccountPoweredByText,
                        children: [
                          null != n.application.bot
                            ? (0, c.jsx)(u.Z, {
                                user: new C.Z(n.application.bot),
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
      let L = a.forwardRef(function (e, n) {
        let {
          connectedAccounts: t,
          theme: a,
          locale: l,
          className: r,
          userId: i,
        } = e;
        if (null == t || 0 === t.length) return null;
        let s = t
            .filter((e) => T.Z.isSupported(e.type))
            .map((e) =>
              (0, c.jsx)(
                f,
                { connectedAccount: e, theme: a, locale: l, userId: i },
                "".concat(e.type, ":").concat(e.id),
              ),
            ),
          u = [],
          E = [];
        for (let e = 0; e < s.length; e++) {
          let n = s[e];
          e % 2 == 0 ? u.push(n) : E.push(n);
        }
        return (0, c.jsxs)("div", {
          ref: n,
          className: o()(v.connectedAccounts, r),
          children: [
            (0, c.jsx)("div", {
              className: v.connectedAccountsColumn,
              children: u,
            }),
            (0, c.jsx)("div", {
              className: v.connectedAccountsColumn,
              children: E,
            }),
          ],
        });
      });
    },
    671533: function (e, n, t) {
      t(411104);
      var c,
        a,
        l = t(735250);
      t(470079);
      var o = t(120356),
        r = t.n(o),
        i = t(325767),
        s = t(865244);
      ((a = c || (c = {})).LEFT = "LEFT"),
        (a.RIGHT = "RIGHT"),
        (a.UP = "UP"),
        (a.DOWN = "DOWN"),
        (a.UP_LEFT = "UP_LEFT"),
        (a.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: n = 24,
          height: t = 24,
          color: c = "currentColor",
          direction: a,
          foreground: o,
          className: u,
          title: T,
          ...E
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.Z)(E),
          width: n,
          height: t,
          className: r()(
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
            })(a),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != T ? (0, l.jsx)("title", { children: T }) : null,
            (0, l.jsx)("polygon", {
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
//# sourceMappingURL=63401e791e71cc262f3f.js.map
