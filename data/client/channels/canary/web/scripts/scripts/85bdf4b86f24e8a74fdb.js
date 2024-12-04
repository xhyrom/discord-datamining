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
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return m;
        },
        KQ: function () {
          return _;
        },
        MU: function () {
          return T;
        },
        RF: function () {
          return v;
        },
        m0: function () {
          return p;
        },
        rf: function () {
          return O;
        },
        tu: function () {
          return I;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var c = n(860911),
        l = n(477690),
        o = n(481060),
        a = n(911969),
        r = n(134432),
        i = n(703656),
        s = n(768581),
        u = n(981631),
        d = n(388032);
      let T = 0,
        { API_ENDPOINT: A, CDN_HOST: E } = window.GLOBAL_ENV;
      function p(e) {
        return e.id === T;
      }
      function _() {
        return { id: T, name: d.intl.string(d.t.E407b2) };
      }
      function I(e) {
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
      function m(e) {
        let { itemId: t, hash: n } = e,
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
              .concat(t, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(c)
          : ""
              .concat(location.protocol)
              .concat(A)
              .concat(
                u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, o),
                "?",
              )
              .concat(c);
      }
      function O() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let c = e[n];
          t.searchParams.set(n, c);
        }
        let n = t.pathname + t.search,
          l = (0, c.Ui)(n, !1);
        (0, i.uL)(l);
      }
      let N = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function v(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: u.s9s.IMG, width: 0, height: 0, src: n };
          case a.ee.YOUTUBE:
            let c = N(e.url);
            if (null != c)
              return { type: u.s9s.YOUTUBE_VIDEO, youtubeVideoId: c };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return E;
          },
          goSearch: function () {
            return m;
          },
          goToAppDirectory: function () {
            return A;
          },
          goToApplication: function () {
            return p;
          },
          goToApplicationSection: function () {
            return _;
          },
          goToApplicationStoreSku: function () {
            return I;
          },
          goToCategory: function () {
            return O;
          },
          replaceAppDirectoryURLWith: function () {
            return N;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var c = n(749681),
        l = n(352057),
        o = n(703656),
        a = n(626135),
        r = n(34674),
        i = n(132871),
        s = n(272242),
        u = n(981631),
        d = n(49898),
        T = n(979007);
      let A = (e) => {
          let {
            view: t = i.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: o,
            applicationSection: r,
            entrypoint: A,
            skuId: O,
          } = e;
          if ((0, l.K)({ location: A.name })) {
            let e =
              null == o
                ? void 0
                : r === s.ApplicationDirectoryProfileSections.STORE
                  ? T.GlobalDiscoveryAppsSections.STORE
                  : T.GlobalDiscoveryAppsSections.ABOUT;
            (0, c.transitionToGlobalDiscovery)({
              tab: d.GlobalDiscoveryTab.APPS,
              applicationId: o,
              section: e,
              skuId: e === T.GlobalDiscoveryAppsSections.STORE ? O : void 0,
            });
            return;
          }
          let N = { ...A, pathname: window.location.pathname };
          switch (
            (a.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == N ? void 0 : N.name,
            }),
            (0, i.resetApplicationDirectoryHistory)(),
            (0, i.setEntrypoint)(N),
            null != n && (0, i.setGuildId)(n),
            t === i.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (t = i.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case i.ApplicationDirectoryViews.HOME:
              E();
              break;
            case i.ApplicationDirectoryViews.SEARCH:
              m();
              break;
            case i.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != r) {
                  if (
                    r === s.ApplicationDirectoryProfileSections.STORE &&
                    null != O
                  ) {
                    I({ applicationId: o, skuId: O });
                    break;
                  }
                  _({ applicationId: o, section: r });
                  break;
                }
                p({ applicationId: o });
              }
          }
        },
        E = () => {
          let e = { previousView: (0, i.getCurrentView)() };
          (0, o.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        p = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, i.getCurrentView)() };
          (0, o.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        _ = (e) => {
          let { applicationId: t, section: n } = e,
            c = { previousView: (0, i.getCurrentView)() };
          (0, o.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: c,
          });
        },
        I = (e) => {
          let { applicationId: t, skuId: n } = e,
            c = { previousView: (0, i.getCurrentView)() };
          (0, o.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: c,
          });
        },
        m = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            c = new URLSearchParams(),
            l = { previousView: (0, i.getCurrentView)() };
          null != e && c.set("q", e),
            null != t && c.set("category_id", t.toString()),
            null != n && c.set("page", n.toString()),
            (0, o.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: c.toString(),
              state: l,
            });
        },
        O = (e) => {
          let { categoryId: t } = e;
          m({ categoryId: null != t ? t : r.MU });
        },
        N = (e) => {
          let {
            location: { state: t },
          } = (0, o.s1)();
          (0, o.dL)(e, t);
        };
    },
    888496: function (e, t, n) {
      n.d(t, {
        Dq: function () {
          return _;
        },
        hf: function () {
          return O;
        },
        li: function () {
          return I;
        },
        oP: function () {
          return E;
        },
        rJ: function () {
          return p;
        },
        rm: function () {
          return N;
        },
        ul: function () {
          return m;
        },
      }),
        n(653041),
        n(47120);
      var c = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        a = n(392711),
        r = n.n(a),
        i = n(481060),
        s = n(930153),
        u = n(275759),
        d = n(856651),
        T = n(388032),
        A = n(119028);
      function E(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          o = Number(
            null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1,
          ),
          a = "1" === e[d.PC.REDDIT_GOLD],
          r = "1" === e[d.PC.REDDIT_MOD];
        return (
          o > -1 &&
            l.push(
              (0, c.jsx)(
                v,
                { className: n, count: o, label: T.t.SbCNo6 },
                d.PC.REDDIT_TOTAL_KARMA,
              ),
            ),
          a &&
            l.push(
              (0, c.jsx)(
                f,
                { className: n, label: T.intl.string(T.t["06rDHR"]) },
                d.PC.REDDIT_GOLD,
              ),
            ),
          r &&
            l.push(
              (0, c.jsx)(
                f,
                { className: n, label: T.intl.string(T.t.oWM95O) },
                d.PC.REDDIT_MOD,
              ),
            ),
          l
        );
      }
      function p(e) {
        var t, n;
        let l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          o = [],
          a = Number(
            null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t
              ? t
              : -1,
          ),
          r = Number(
            null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n
              ? n
              : -1,
          );
        return (
          a > -1 &&
            o.push(
              (0, c.jsx)(
                v,
                { className: l, count: a, label: T.t.llwqqa },
                d.PC.TWITTER_STATUSES_COUNT,
              ),
            ),
          r > -1 &&
            o.push(
              (0, c.jsx)(
                v,
                { className: l, count: r, label: T.t.LMNOUV },
                d.PC.TWITTER_FOLLOWERS_COUNT,
              ),
            ),
          o
        );
      }
      function _(e) {
        var t, l, o;
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          r = [],
          i = Number(
            null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1,
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
                v,
                { className: a, count: i, label: T.t.ppXMu7 },
                d.PC.STEAM_GAME_COUNT,
              ),
            ),
          s > -1 &&
            r.push(
              (0, c.jsx)(
                C,
                {
                  className: a,
                  label: T.intl.format(T.t["Y88M5+"], { count: s }),
                  imageSrc: n(738535),
                  imageAlt: T.intl.string(T.t.HKUEZm),
                },
                d.PC.STEAM_ITEM_COUNT_DOTA2,
              ),
            ),
          u > -1 &&
            r.push(
              (0, c.jsx)(
                C,
                {
                  className: a,
                  label: T.intl.format(T.t["Y88M5+"], { count: u }),
                  imageSrc: n(80730),
                  imageAlt: T.intl.string(T.t.C8p1Sk),
                },
                d.PC.STEAM_ITEM_COUNT_TF2,
              ),
            ),
          r
        );
      }
      function I(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n = [];
        return (
          "1" === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
              (0, c.jsx)(
                f,
                {
                  className: o()(t, A.paypalVerifiedTag),
                  label: T.intl.string(T.t.IhXLy8),
                },
                d.PC.PAYPAL_VERIFIED,
              ),
            ),
          n
        );
      }
      function m(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          o = Number(
            null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) &&
              void 0 !== t
              ? t
              : -1,
          ),
          a = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
        return (
          o > 0 &&
            l.push(
              (0, c.jsx)(
                v,
                { className: n, count: o, label: T.t.YmL22d, percent: !0 },
                d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
              ),
            ),
          a &&
            l.push(
              (0, c.jsx)(
                f,
                { className: n, label: T.intl.string(T.t.TEEYwc) },
                d.PC.EBAY_TOP_RATED_SELLER,
              ),
            ),
          l
        );
      }
      function O(e) {
        var t, n, l;
        let o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          a = [],
          r = "1" === e[d.PC.TIKTOK_VERIFIED],
          i = Number(
            null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t
              ? t
              : -1,
          ),
          s = Number(
            null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          u = Number(
            null !== (l = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1,
          );
        return (
          i > -1 &&
            a.push(
              (0, c.jsx)(
                v,
                { className: o, count: i, label: T.t["Mpm/BQ"] },
                d.PC.TIKTOK_FOLLOWER_COUNT,
              ),
            ),
          s > -1 &&
            a.push(
              (0, c.jsx)(
                v,
                { className: o, count: s, label: T.t.ftf12t },
                d.PC.TIKTOK_FOLLOWING_COUNT,
              ),
            ),
          u > -1 &&
            a.push(
              (0, c.jsx)(
                v,
                { className: o, count: u, label: T.t.Qwhe5u },
                d.PC.TIKTOK_LIKES_COUNT,
              ),
            ),
          r &&
            a.push(
              (0, c.jsx)(
                f,
                { className: o, label: T.intl.string(T.t.QHHwRU) },
                d.PC.TIKTOK_VERIFIED,
              ),
            ),
          a
        );
      }
      function N(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n =
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
        for (let a of r().sortBy(o, (t) => {
          var n, c;
          return null === (c = e.application_metadata) || void 0 === c
            ? void 0
            : null === (n = c[t]) || void 0 === n
              ? void 0
              : n.name;
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
                  l.push((0, c.jsx)(f, { className: t, label: o.name }, o.key));
                break;
              case d.xn.DATETIME_GREATER_THAN_EQUAL:
              case d.xn.DATETIME_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    h,
                    { className: t, date: r, locale: n, label: o.name },
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
                    v,
                    { className: t, count: Number(r), label: o.name },
                    o.key,
                  ),
                );
            }
          } catch (e) {}
        }
        return l;
      }
      function v(e) {
        let t,
          { count: n, label: l, className: a, percent: r } = e,
          u = (0, s.$U)(n) + (r ? "%" : "");
        return (
          (t =
            "string" == typeof l
              ? T.intl.format(T.t.HLoinJ, { name: l, value: u })
              : T.intl.format(l, { value: u })),
          (0, c.jsx)(i.Text, {
            className: o()(A.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: t,
          })
        );
      }
      function h(e) {
        let { date: t, locale: n, label: l, className: a } = e;
        return (0, c.jsx)(i.Text, {
          className: o()(A.connectedAccountVanityMetadata, a),
          variant: "text-xs/normal",
          color: "interactive-active",
          children: T.intl.format(T.t.HLoinJ, {
            value: (0, u.FI)(t, n),
            name: l,
          }),
        });
      }
      function C(e) {
        let { label: t, imageSrc: n, imageAlt: l, className: a } = e;
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
                  src: n,
                  alt: l,
                  className: A.connectedAccountVanityMetadataItemIcon,
                }),
            }),
            (0, c.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "interactive-active",
              children: t,
            }),
          ],
        });
      }
      function f(e) {
        let { label: t, className: n } = e;
        return (0, c.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "interactive-active",
          className: o()(
            A.connectedAccountVanityMetadata,
            A.connectedAccountVanityMetadataTag,
            n,
          ),
          children: t,
        });
      }
    },
    749681: function (e, t, n) {
      n.r(t),
        n.d(t, {
          transitionToGlobalDiscovery: function () {
            return d;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var c = n(859921),
        l = n(341907),
        o = n(703656),
        a = n(836768),
        r = n(49898),
        i = n(981631),
        s = n(979007),
        u = n(128449);
      function d(e) {
        let t = e.tab;
        switch ((a.Z.setState({ selectedTab: t }), t)) {
          case r.GlobalDiscoveryTab.SERVERS:
            var n, d;
            let T = e.selectedServersTab;
            return (
              null != T
                ? c.Z.setState({
                    selectedTab: T,
                    entrypoint:
                      null !== (n = e.entrypoint) && void 0 !== n
                        ? n
                        : u.Qq.UNKNOWN,
                  })
                : c.Z.setState({
                    entrypoint:
                      null !== (d = e.entrypoint) && void 0 !== d
                        ? d
                        : u.Qq.UNKNOWN,
                  }),
              (0, o.uL)(i.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
          case r.GlobalDiscoveryTab.APPS:
            if (null != e.applicationId) {
              if (e.section === s.GlobalDiscoveryAppsSections.STORE) {
                if (null != e.skuId)
                  return (0, o.uL)(
                    i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      e.applicationId,
                      e.skuId,
                    ),
                  );
                return (0, o.uL)(
                  i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    e.applicationId,
                    s.GlobalDiscoveryAppsSections.STORE,
                  ),
                );
              }
              return (0, o.uL)(
                i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            }
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                "" !== e.query && t.set("q", e.query),
                null != e.categoryId &&
                  t.set("category_id", e.categoryId.toString()),
                null != e.page && t.set("page", e.page.toString()),
                (0, o.uL)(i.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: t.toString(),
                })
              );
            } else if (null != e.categoryId)
              return (0, o.uL)(
                i.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()),
              );
            else return (0, o.uL)(i.Z5c.GLOBAL_DISCOVERY_APPS);
          case r.GlobalDiscoveryTab.QUESTS:
            return (0, l.navigateToQuestHome)(
              e.location,
              e.questContent,
              e.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(t),
            );
        }
      }
    },
    859921: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var c = n(972959);
      let l = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        o = (0, c.H)(() => l);
      function a() {
        o.setState(l);
      }
      t.Z = o;
    },
    819602: function (e, t, n) {
      n.d(t, {
        E3: function () {
          return L;
        },
        OA: function () {
          return R;
        },
        tH: function () {
          return P;
        },
      }),
        n(653041);
      var c = n(200651),
        l = n(192379),
        o = n(120356),
        a = n.n(o),
        r = n(692547),
        i = n(780384),
        s = n(481060),
        u = n(99690),
        d = n(726542),
        T = n(367907),
        A = n(132871),
        E = n(147890),
        p = n(122021),
        _ = n(275759),
        I = n(888496),
        m = n(753194),
        O = n(598077),
        N = n(671533),
        v = n(49012),
        h = n(981631),
        C = n(856651),
        f = n(388032),
        x = n(196161);
      function L(e) {
        var t, n;
        let l,
          o,
          u,
          {
            connectedAccount: A,
            theme: E,
            locale: O,
            userId: L,
            className: P,
            showMetadata: R,
            showInvisibleIcon: S,
          } = e;
        null == R && (R = !0);
        let D = null !== (n = A.metadata) && void 0 !== n ? n : {},
          y = R ? (0, _.FI)(D[C.PC.CREATED_AT], O) : null,
          b = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
          g = f.intl.string(f.t["6H6h1t"]);
        if (R)
          switch (A.type) {
            case h.ABu.REDDIT:
              l = (0, I.oP)(D);
              break;
            case h.ABu.STEAM:
              l = (0, I.Dq)(D);
              break;
            case h.ABu.BLUESKY:
            case h.ABu.MASTODON:
            case h.ABu.TWITTER:
              (l = (0, I.rJ)(D)),
                "1" === D[C.PC.TWITTER_VERIFIED] &&
                  ((o = b), (g = f.intl.string(f.t.Jebrw8)));
              break;
            case h.ABu.PAYPAL:
              l = (0, I.li)(D);
              break;
            case h.ABu.EBAY:
              l = (0, I.ul)(D);
              break;
            case h.ABu.TIKTOK:
              l = (0, I.hf)(D);
          }
        let j = d.Z.get((0, p.rR)(A.type)),
          U =
            null == j
              ? void 0
              : null === (t = j.getPlatformUserUrl) || void 0 === t
                ? void 0
                : t.call(j, A);
        null != S && S
          ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: "md",
              color: "currentColor",
              className: a()(
                x.__invalid_connectedAccountOpenIconContainer,
                x.connectedAccountHideIcon,
              ),
            }))
          : null != U &&
            (u = (0, c.jsx)(s.Anchor, {
              href: U,
              onClick: (e) => {
                var t, n;
                (t = A.type),
                  (n = L),
                  (0, T.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: t,
                    other_user_id: n,
                  }),
                  (0, v.q)(
                    {
                      href: U,
                      trusted: (null == j ? void 0 : j.type) !== h.ABu.DOMAIN,
                    },
                    e,
                  );
              },
              children: (0, c.jsx)(N.Z, {
                className: x.connectedAccountOpenIcon,
                direction: N.Z.Directions.RIGHT,
              }),
            }));
        let w = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
          V = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
          G = A.verified
            ? (0, c.jsx)(m.Z, {
                className: x.connectedAccountVerifiedIcon,
                color: null != o ? o : w,
                forcedIconColor: V,
                size: 16,
                tooltipText: g,
              })
            : null;
        return (0, c.jsxs)("div", {
          className: a()(
            x.connectedAccountContainer,
            (null != l && l.length > 0) || null != y
              ? x.connectedAccountContainerWithMetadata
              : null,
            P,
          ),
          children: [
            (0, c.jsxs)("div", {
              className: x.connectedAccount,
              children: [
                (0, c.jsx)(s.Tooltip, {
                  text: null == j ? void 0 : j.name,
                  children: (e) =>
                    (0, c.jsx)("img", {
                      ...e,
                      alt: f.intl.formatToPlainString(f.t.rtm15O, {
                        name: null == j ? void 0 : j.name,
                      }),
                      className: x.connectedAccountIcon,
                      src: (0, i.wj)(E)
                        ? null == j
                          ? void 0
                          : j.icon.darkSVG
                        : null == j
                          ? void 0
                          : j.icon.lightSVG,
                    }),
                }),
                (0, c.jsxs)("div", {
                  className: x.connectedAccountNameContainer,
                  children: [
                    (0, c.jsxs)("div", {
                      className: x.connectedAccountName,
                      children: [
                        (0, c.jsxs)("div", {
                          className: x.connectedAccountNameTextContainer,
                          children: [
                            (0, c.jsx)(s.Tooltip, {
                              overflowOnly: !0,
                              text: A.name,
                              children: (e) =>
                                (0, c.jsx)(s.Text, {
                                  ...e,
                                  variant: "text-md/semibold",
                                  color: "interactive-active",
                                  className: x.connectedAccountNameText,
                                  children: A.name,
                                }),
                            }),
                            G,
                          ],
                        }),
                        u,
                      ],
                    }),
                    null != y
                      ? (0, c.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: f.intl.format(f.t["9rfonp"], { date: y }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            null != l && l.length > 0
              ? (0, c.jsx)("div", {
                  className: x.connectedAccountChildren,
                  children: l,
                })
              : null,
          ],
        });
      }
      function P(e) {
        let {
            applicationRoleConnection: t,
            className: n,
            locale: l,
            onApplicationClicked: o,
            selectedGuildId: r,
          } = e,
          i = (0, I.rm)(t, void 0, l),
          d = () => {
            null == o || o(),
              (0, E.goToAppDirectory)({
                view: A.ApplicationDirectoryViews.APPLICATION,
                applicationId: t.application.id,
                guildId: r,
                entrypoint: {
                  name: A.ApplicationDirectoryEntrypointNames
                    .APPLICATION_DIRECTORY_URL,
                },
              });
          };
        return (0, c.jsxs)("div", {
          className: a()(
            x.connectedAccountContainer,
            null != i && i.length > 0
              ? x.connectedAccountContainerWithMetadata
              : null,
            n,
          ),
          children: [
            (0, c.jsx)("div", {
              className: x.connectedAccount,
              children: (0, c.jsxs)(s.Clickable, {
                className: a()(
                  x.connectedAccountNameContainer,
                  x.connectedAccountNameContainerClickable,
                ),
                onClick: d,
                children: [
                  null != t.platform_name
                    ? (0, c.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        children: t.platform_name,
                      })
                    : null,
                  null != t.platform_username
                    ? (0, c.jsx)("div", {
                        className: x.connectedAccountName,
                        children: (0, c.jsx)("div", {
                          className: x.connectedAccountNameTextContainer,
                          children: (0, c.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            className: x.connectedAccountNameText,
                            children: t.platform_username,
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
                    x.connectedAccountChildren,
                    x.connectedAccountChildrenNoIcon,
                  ),
                  children: i,
                })
              : null,
            (0, c.jsx)("div", {
              children: (0, c.jsx)(s.Clickable, {
                className: x.connectedAccountPoweredBy,
                onClick: d,
                children: (0, c.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: f.intl.format(f.t.zIT9YG, {
                    applicationHook: () =>
                      (0, c.jsxs)("div", {
                        className: x.connectedAccountPoweredByText,
                        children: [
                          null != t.application.bot
                            ? (0, c.jsx)(u.Z, {
                                user: new O.Z(t.application.bot),
                                size: s.AvatarSizes.SIZE_16,
                              })
                            : null,
                          (0, c.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            children: t.application.name,
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
      let R = l.forwardRef(function (e, t) {
        let {
          connectedAccounts: n,
          theme: l,
          locale: o,
          className: r,
          userId: i,
        } = e;
        if (null == n || 0 === n.length) return null;
        let s = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
              (0, c.jsx)(
                L,
                { connectedAccount: e, theme: l, locale: o, userId: i },
                "".concat(e.type, ":").concat(e.id),
              ),
            ),
          u = [],
          T = [];
        for (let e = 0; e < s.length; e++) {
          let t = s[e];
          e % 2 == 0 ? u.push(t) : T.push(t);
        }
        return (0, c.jsxs)("div", {
          ref: t,
          className: a()(x.connectedAccounts, r),
          children: [
            (0, c.jsx)("div", {
              className: x.connectedAccountsColumn,
              children: u,
            }),
            (0, c.jsx)("div", {
              className: x.connectedAccountsColumn,
              children: T,
            }),
          ],
        });
      });
    },
    671533: function (e, t, n) {
      n(411104);
      var c,
        l,
        o = n(200651);
      n(192379);
      var a = n(120356),
        r = n.n(a),
        i = n(325767),
        s = n(485270);
      ((l = c || (c = {})).LEFT = "LEFT"),
        (l.RIGHT = "RIGHT"),
        (l.UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.UP_LEFT = "UP_LEFT"),
        (l.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: c = "currentColor",
          direction: l,
          foreground: a,
          className: u,
          title: d,
          ...T
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, i.Z)(T),
          width: t,
          height: n,
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
      (u.Directions = c), (t.Z = u);
    },
  },
]);
//# sourceMappingURL=85bdf4b86f24e8a74fdb.js.map
