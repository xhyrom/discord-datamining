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
          return N;
        },
        KQ: function () {
          return p;
        },
        MU: function () {
          return T;
        },
        RF: function () {
          return C;
        },
        m0: function () {
          return m;
        },
        rf: function () {
          return I;
        },
        tu: function () {
          return _;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(315314);
      var c = t(860911),
        l = t(477690),
        o = t(481060),
        a = t(911969),
        r = t(134432),
        i = t(703656),
        s = t(768581),
        u = t(981631),
        d = t(388032);
      let T = 0,
        { API_ENDPOINT: A, CDN_HOST: E } = window.GLOBAL_ENV;
      function m(e) {
        return e.id === T;
      }
      function p() {
        return { id: T, name: d.intl.string(d.t.E407b2) };
      }
      function _(e) {
        switch (e.id) {
          case 0:
            return o.GlobeEarthIcon;
          case 4:
            return o.TvIcon;
          case 5:
            return o.AnalyticsIcon;
          case 6:
            return o.GameControllerIcon;
          case 8:
            break;
          case 9:
            return o.FriendsIcon;
          case 10:
            return o.WrenchIcon;
        }
        return o.AsteriskIcon;
      }
      function N(e) {
        let { itemId: n, hash: t } = e,
          c = new URLSearchParams({
            size: (0, r.oO)(
              parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, r.x_)(),
            ).toString(),
          }).toString(),
          o = s.$k ? "webp" : "png";
        return null != E
          ? ""
              .concat(location.protocol, "//")
              .concat(E, "/app-assets/application-directory/collection-items/")
              .concat(n, "/")
              .concat(t, ".")
              .concat(o, "?")
              .concat(c)
          : ""
              .concat(location.protocol)
              .concat(A)
              .concat(
                u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, o),
                "?",
              )
              .concat(c);
      }
      function I() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let t in e) {
          let c = e[t];
          n.searchParams.set(t, c);
        }
        let t = n.pathname + n.search,
          l = (0, c.Ui)(t, !1);
        (0, i.uL)(l);
      }
      let h = (e) => {
        if (null == e) return null;
        let n = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != n ? n[1] : null;
      };
      function C(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: u.s9s.IMG, width: 0, height: 0, src: t };
          case a.ee.YOUTUBE:
            let c = h(e.url);
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
            return E;
          },
          goToAppDirectory: function () {
            return s;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return T;
          },
          goToApplicationStoreSku: function () {
            return A;
          },
          goToCategory: function () {
            return m;
          },
          replaceAppDirectoryURLWith: function () {
            return p;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var c = t(703656),
        l = t(626135),
        o = t(34674),
        a = t(132871),
        r = t(272242),
        i = t(981631);
      let s = (e) => {
          let {
              view: n = a.ApplicationDirectoryViews.HOME,
              guildId: t,
              applicationId: c,
              applicationSection: o,
              entrypoint: s,
              skuId: m,
            } = e,
            p = { ...s, pathname: window.location.pathname };
          switch (
            (l.default.track(i.rMx.APP_DIRECTORY_OPENED, {
              source: null == p ? void 0 : p.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(p),
            null != t && (0, a.setGuildId)(t),
            n === a.ApplicationDirectoryViews.APPLICATION &&
              null == c &&
              (n = a.ApplicationDirectoryViews.HOME),
            n)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              u();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              E();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != c) {
                if (null != o) {
                  if (
                    o === r.ApplicationDirectoryProfileSections.STORE &&
                    null != m
                  ) {
                    A({ applicationId: c, skuId: m });
                    break;
                  }
                  T({ applicationId: c, section: o });
                  break;
                }
                d({ applicationId: c });
              }
          }
        },
        u = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: n } = e,
            t = { previousView: (0, a.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
        },
        T = (e) => {
          let { applicationId: n, section: t } = e,
            l = { previousView: (0, a.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), {
            state: l,
          });
        },
        A = (e) => {
          let { applicationId: n, skuId: t } = e,
            l = { previousView: (0, a.getCurrentView)() };
          (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), {
            state: l,
          });
        },
        E = function () {
          let {
              query: e,
              categoryId: n,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            l = new URLSearchParams(),
            o = { previousView: (0, a.getCurrentView)() };
          null != e && l.set("q", e),
            null != n && l.set("category_id", n.toString()),
            null != t && l.set("page", t.toString()),
            (0, c.uL)(i.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: l.toString(),
              state: o,
            });
        },
        m = (e) => {
          let { categoryId: n } = e;
          E({ categoryId: null != n ? n : o.MU });
        },
        p = (e) => {
          let {
            location: { state: n },
          } = (0, c.s1)();
          (0, c.dL)(e, n);
        };
    },
    888496: function (e, n, t) {
      t.d(n, {
        Dq: function () {
          return p;
        },
        hf: function () {
          return I;
        },
        li: function () {
          return _;
        },
        oP: function () {
          return E;
        },
        rJ: function () {
          return m;
        },
        rm: function () {
          return h;
        },
        ul: function () {
          return N;
        },
      }),
        t(653041),
        t(47120);
      var c = t(200651);
      t(192379);
      var l = t(120356),
        o = t.n(l),
        a = t(392711),
        r = t.n(a),
        i = t(481060),
        s = t(930153),
        u = t(275759),
        d = t(856651),
        T = t(388032),
        A = t(473522);
      function E(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          o = Number(
            null !== (n = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== n ? n : -1,
          ),
          a = "1" === e[d.PC.REDDIT_GOLD],
          r = "1" === e[d.PC.REDDIT_MOD];
        return (
          o > -1 &&
            l.push(
              (0, c.jsx)(
                C,
                { className: t, count: o, label: T.t.SbCNo6 },
                d.PC.REDDIT_TOTAL_KARMA,
              ),
            ),
          a &&
            l.push(
              (0, c.jsx)(
                O,
                { className: t, label: T.intl.string(T.t["06rDHR"]) },
                d.PC.REDDIT_GOLD,
              ),
            ),
          r &&
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
      function m(e) {
        var n, t;
        let l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          o = [],
          a = Number(
            null !== (n = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          r = Number(
            null !== (t = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t
              ? t
              : -1,
          );
        return (
          a > -1 &&
            o.push(
              (0, c.jsx)(
                C,
                { className: l, count: a, label: T.t.llwqqa },
                d.PC.TWITTER_STATUSES_COUNT,
              ),
            ),
          r > -1 &&
            o.push(
              (0, c.jsx)(
                C,
                { className: l, count: r, label: T.t.LMNOUV },
                d.PC.TWITTER_FOLLOWERS_COUNT,
              ),
            ),
          o
        );
      }
      function p(e) {
        var n, l, o;
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          r = [],
          i = Number(
            null !== (n = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== n ? n : -1,
          ),
          s = Number(
            null !== (l = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l
              ? l
              : -1,
          ),
          u = Number(
            null !== (o = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== o
              ? o
              : -1,
          );
        return (
          i > -1 &&
            r.push(
              (0, c.jsx)(
                C,
                { className: a, count: i, label: T.t.ppXMu7 },
                d.PC.STEAM_GAME_COUNT,
              ),
            ),
          s > -1 &&
            r.push(
              (0, c.jsx)(
                v,
                {
                  className: a,
                  label: T.intl.format(T.t["Y88M5+"], { count: s }),
                  imageSrc: t(448238),
                  imageAlt: T.intl.string(T.t.HKUEZm),
                },
                d.PC.STEAM_ITEM_COUNT_DOTA2,
              ),
            ),
          u > -1 &&
            r.push(
              (0, c.jsx)(
                v,
                {
                  className: a,
                  label: T.intl.format(T.t["Y88M5+"], { count: u }),
                  imageSrc: t(80730),
                  imageAlt: T.intl.string(T.t.C8p1Sk),
                },
                d.PC.STEAM_ITEM_COUNT_TF2,
              ),
            ),
          r
        );
      }
      function _(e) {
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
                  className: o()(n, A.paypalVerifiedTag),
                  label: T.intl.string(T.t.IhXLy8),
                },
                d.PC.PAYPAL_VERIFIED,
              ),
            ),
          t
        );
      }
      function N(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          o = Number(
            null !== (n = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) &&
              void 0 !== n
              ? n
              : -1,
          ),
          a = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
        return (
          o > 0 &&
            l.push(
              (0, c.jsx)(
                C,
                { className: t, count: o, label: T.t.YmL22d, percent: !0 },
                d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
              ),
            ),
          a &&
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
      function I(e) {
        var n, t, l;
        let o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          a = [],
          r = "1" === e[d.PC.TIKTOK_VERIFIED],
          i = Number(
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
          i > -1 &&
            a.push(
              (0, c.jsx)(
                C,
                { className: o, count: i, label: T.t["Mpm/BQ"] },
                d.PC.TIKTOK_FOLLOWER_COUNT,
              ),
            ),
          s > -1 &&
            a.push(
              (0, c.jsx)(
                C,
                { className: o, count: s, label: T.t.ftf12t },
                d.PC.TIKTOK_FOLLOWING_COUNT,
              ),
            ),
          u > -1 &&
            a.push(
              (0, c.jsx)(
                C,
                { className: o, count: u, label: T.t.Qwhe5u },
                d.PC.TIKTOK_LIKES_COUNT,
              ),
            ),
          r &&
            a.push(
              (0, c.jsx)(
                O,
                { className: o, label: T.intl.string(T.t.QHHwRU) },
                d.PC.TIKTOK_VERIFIED,
              ),
            ),
          a
        );
      }
      function h(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          l = [],
          o = Object.keys(e.metadata);
        if (
          null == e.application_metadata ||
          0 === Object.keys(e.application_metadata).length ||
          0 === o.length
        )
          return l;
        for (let a of r().sortBy(o, (n) => {
          var t, c;
          return null === (c = e.application_metadata) || void 0 === c
            ? void 0
            : null === (t = c[n]) || void 0 === t
              ? void 0
              : t.name;
        })) {
          let o = e.application_metadata[a];
          if (null == o) continue;
          let r = e.metadata[a];
          try {
            switch (o.type) {
              case d.xn.BOOLEAN_EQUAL:
              case d.xn.BOOLEAN_NOT_EQUAL:
                ((o.type === d.xn.BOOLEAN_EQUAL && "1" === r) ||
                  (o.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== r)) &&
                  l.push((0, c.jsx)(O, { className: n, label: o.name }, o.key));
                break;
              case d.xn.DATETIME_GREATER_THAN_EQUAL:
              case d.xn.DATETIME_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    x,
                    { className: n, date: r, locale: t, label: o.name },
                    o.key,
                  ),
                );
                break;
              case d.xn.INTEGER_EQUAL:
              case d.xn.INTEGER_NOT_EQUAL:
              case d.xn.INTEGER_GREATER_THAN_EQUAL:
              case d.xn.INTEGER_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    C,
                    { className: n, count: Number(r), label: o.name },
                    o.key,
                  ),
                );
            }
          } catch (e) {}
        }
        return l;
      }
      function C(e) {
        let n,
          { count: t, label: l, className: a, percent: r } = e,
          u = (0, s.$U)(t) + (r ? "%" : "");
        return (
          (n =
            "string" == typeof l
              ? T.intl.format(T.t.HLoinJ, { name: l, value: u })
              : T.intl.format(l, { value: u })),
          (0, c.jsx)(i.Text, {
            className: o()(A.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: n,
          })
        );
      }
      function x(e) {
        let { date: n, locale: t, label: l, className: a } = e;
        return (0, c.jsx)(i.Text, {
          className: o()(A.connectedAccountVanityMetadata, a),
          variant: "text-xs/normal",
          color: "interactive-active",
          children: T.intl.format(T.t.HLoinJ, {
            value: (0, u.FI)(n, t),
            name: l,
          }),
        });
      }
      function v(e) {
        let { label: n, imageSrc: t, imageAlt: l, className: a } = e;
        return (0, c.jsxs)("div", {
          className: o()(
            A.connectedAccountVanityMetadata,
            A.connectedAccountVanityMetadataItem,
            a,
          ),
          children: [
            (0, c.jsx)(i.Tooltip, {
              text: l,
              children: (e) =>
                (0, c.jsx)("img", {
                  ...e,
                  src: t,
                  alt: l,
                  className: A.connectedAccountVanityMetadataItemIcon,
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
      function O(e) {
        let { label: n, className: t } = e;
        return (0, c.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "interactive-active",
          className: o()(
            A.connectedAccountVanityMetadata,
            A.connectedAccountVanityMetadataTag,
            t,
          ),
          children: n,
        });
      }
    },
    819602: function (e, n, t) {
      t.d(n, {
        E3: function () {
          return P;
        },
        OA: function () {
          return L;
        },
        tH: function () {
          return R;
        },
      }),
        t(653041);
      var c = t(200651),
        l = t(192379),
        o = t(120356),
        a = t.n(o),
        r = t(692547),
        i = t(780384),
        s = t(481060),
        u = t(99690),
        d = t(726542),
        T = t(367907),
        A = t(132871),
        E = t(147890),
        m = t(122021),
        p = t(275759),
        _ = t(888496),
        N = t(753194),
        I = t(598077),
        h = t(671533),
        C = t(49012),
        x = t(981631),
        v = t(856651),
        O = t(388032),
        f = t(962586);
      function P(e) {
        var n, t;
        let l,
          o,
          u,
          {
            connectedAccount: A,
            theme: E,
            locale: I,
            userId: P,
            className: R,
            showMetadata: L,
            showInvisibleIcon: D,
          } = e;
        null == L && (L = !0);
        let g = null !== (t = A.metadata) && void 0 !== t ? t : {},
          j = L ? (0, p.FI)(g[v.PC.CREATED_AT], I) : null,
          b = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
          y = O.intl.string(O.t["6H6h1t"]);
        if (L)
          switch (A.type) {
            case x.ABu.REDDIT:
              l = (0, _.oP)(g);
              break;
            case x.ABu.STEAM:
              l = (0, _.Dq)(g);
              break;
            case x.ABu.TWITTER:
              (l = (0, _.rJ)(g)),
                "1" === g[v.PC.TWITTER_VERIFIED] &&
                  ((o = b), (y = O.intl.string(O.t.Jebrw8)));
              break;
            case x.ABu.PAYPAL:
              l = (0, _.li)(g);
              break;
            case x.ABu.EBAY:
              l = (0, _.ul)(g);
              break;
            case x.ABu.TIKTOK:
              l = (0, _.hf)(g);
          }
        let w = d.Z.get((0, m.rR)(A.type)),
          U =
            null == w
              ? void 0
              : null === (n = w.getPlatformUserUrl) || void 0 === n
                ? void 0
                : n.call(w, A);
        null != D && D
          ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: "md",
              color: "currentColor",
              className: a()(
                f.__invalid_connectedAccountOpenIconContainer,
                f.connectedAccountHideIcon,
              ),
            }))
          : null != U &&
            (u = (0, c.jsx)(s.Anchor, {
              href: U,
              onClick: (e) => {
                var n, t;
                (n = A.type),
                  (t = P),
                  (0, T.yw)(x.rMx.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: n,
                    other_user_id: t,
                  }),
                  (0, C.q)(
                    {
                      href: U,
                      trusted: (null == w ? void 0 : w.type) !== x.ABu.DOMAIN,
                    },
                    e,
                  );
              },
              children: (0, c.jsx)(h.Z, {
                className: f.connectedAccountOpenIcon,
                direction: h.Z.Directions.RIGHT,
              }),
            }));
        let S = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
          M = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
          V = A.verified
            ? (0, c.jsx)(N.Z, {
                className: f.connectedAccountVerifiedIcon,
                color: null != o ? o : S,
                forcedIconColor: M,
                size: 16,
                tooltipText: y,
              })
            : null;
        return (0, c.jsxs)("div", {
          className: a()(
            f.connectedAccountContainer,
            (null != l && l.length > 0) || null != j
              ? f.connectedAccountContainerWithMetadata
              : null,
            R,
          ),
          children: [
            (0, c.jsxs)("div", {
              className: f.connectedAccount,
              children: [
                (0, c.jsx)(s.Tooltip, {
                  text: null == w ? void 0 : w.name,
                  children: (e) =>
                    (0, c.jsx)("img", {
                      ...e,
                      alt: O.intl.formatToPlainString(O.t.rtm15O, {
                        name: null == w ? void 0 : w.name,
                      }),
                      className: f.connectedAccountIcon,
                      src: (0, i.wj)(E)
                        ? null == w
                          ? void 0
                          : w.icon.darkSVG
                        : null == w
                          ? void 0
                          : w.icon.lightSVG,
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
                              text: A.name,
                              children: (e) =>
                                (0, c.jsx)(s.Text, {
                                  ...e,
                                  variant: "text-md/semibold",
                                  color: "interactive-active",
                                  className: f.connectedAccountNameText,
                                  children: A.name,
                                }),
                            }),
                            V,
                          ],
                        }),
                        u,
                      ],
                    }),
                    null != j
                      ? (0, c.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: O.intl.format(O.t["9rfonp"], { date: j }),
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
      function R(e) {
        let {
            applicationRoleConnection: n,
            className: t,
            locale: l,
            onApplicationClicked: o,
            selectedGuildId: r,
          } = e,
          i = (0, _.rm)(n, void 0, l),
          d = () => {
            null == o || o(),
              (0, E.goToAppDirectory)({
                view: A.ApplicationDirectoryViews.APPLICATION,
                applicationId: n.application.id,
                guildId: r,
                entrypoint: {
                  name: A.ApplicationDirectoryEntrypointNames
                    .APPLICATION_DIRECTORY_URL,
                },
              });
          };
        return (0, c.jsxs)("div", {
          className: a()(
            f.connectedAccountContainer,
            null != i && i.length > 0
              ? f.connectedAccountContainerWithMetadata
              : null,
            t,
          ),
          children: [
            (0, c.jsx)("div", {
              className: f.connectedAccount,
              children: (0, c.jsxs)(s.Clickable, {
                className: a()(
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
                            variant: "text-md/semibold",
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
            null != i && i.length > 0
              ? (0, c.jsx)("div", {
                  className: a()(
                    f.connectedAccountChildren,
                    f.connectedAccountChildrenNoIcon,
                  ),
                  children: i,
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
                                user: new I.Z(n.application.bot),
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
      let L = l.forwardRef(function (e, n) {
        let {
          connectedAccounts: t,
          theme: l,
          locale: o,
          className: r,
          userId: i,
        } = e;
        if (null == t || 0 === t.length) return null;
        let s = t
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
              (0, c.jsx)(
                P,
                { connectedAccount: e, theme: l, locale: o, userId: i },
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
          className: a()(f.connectedAccounts, r),
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
        o = t(200651);
      t(192379);
      var a = t(120356),
        r = t.n(a),
        i = t(325767),
        s = t(865244);
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
          foreground: a,
          className: u,
          title: d,
          ...T
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, i.Z)(T),
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
            })(l),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, o.jsx)("title", { children: d }) : null,
            (0, o.jsx)("polygon", {
              className: a,
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
//# sourceMappingURL=e594132c101ca64d375c.js.map
