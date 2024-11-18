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
          return I;
        },
        KQ: function () {
          return m;
        },
        MU: function () {
          return T;
        },
        RF: function () {
          return f;
        },
        m0: function () {
          return p;
        },
        rf: function () {
          return N;
        },
        tu: function () {
          return _;
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
        r = n(481060),
        a = n(911969),
        o = n(134432),
        i = n(703656),
        u = n(768581),
        s = n(981631),
        d = n(388032);
      let T = 0,
        { API_ENDPOINT: E, CDN_HOST: A } = window.GLOBAL_ENV;
      function p(e) {
        return e.id === T;
      }
      function m() {
        return { id: T, name: d.intl.string(d.t.E407b2) };
      }
      function _(e) {
        switch (e.id) {
          case 0:
            return r.GlobeEarthIcon;
          case 4:
            return r.TvIcon;
          case 5:
            return r.AnalyticsIcon;
          case 6:
            return r.GameControllerIcon;
          case 8:
            break;
          case 9:
            return r.FriendsIcon;
          case 10:
            return r.WrenchIcon;
        }
        return r.AsteriskIcon;
      }
      function I(e) {
        let { itemId: t, hash: n } = e,
          c = new URLSearchParams({
            size: (0, o.oO)(
              parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, o.x_)(),
            ).toString(),
          }).toString(),
          r = u.$k ? "webp" : "png";
        return null != A
          ? ""
              .concat(location.protocol, "//")
              .concat(A, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(r, "?")
              .concat(c)
          : ""
              .concat(location.protocol)
              .concat(E)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
                "?",
              )
              .concat(c);
      }
      function N() {
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
      let h = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function f(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case a.ee.YOUTUBE:
            let c = h(e.url);
            if (null != c)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: c };
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
            return _;
          },
          goToAppDirectory: function () {
            return T;
          },
          goToApplication: function () {
            return A;
          },
          goToApplicationSection: function () {
            return p;
          },
          goToApplicationStoreSku: function () {
            return m;
          },
          goToCategory: function () {
            return I;
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
        r = n(703656),
        a = n(626135),
        o = n(34674),
        i = n(132871),
        u = n(272242),
        s = n(981631),
        d = n(49898);
      let T = (e) => {
          let {
            view: t = i.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: r,
            applicationSection: o,
            entrypoint: T,
            skuId: I,
          } = e;
          if ((0, l.r)({ location: T.name })) {
            (0, c.u)({ tab: d.F$.APPS, applicationId: r });
            return;
          }
          let N = { ...T, pathname: window.location.pathname };
          switch (
            (a.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == N ? void 0 : N.name,
            }),
            (0, i.resetApplicationDirectoryHistory)(),
            (0, i.setEntrypoint)(N),
            null != n && (0, i.setGuildId)(n),
            t === i.ApplicationDirectoryViews.APPLICATION &&
              null == r &&
              (t = i.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case i.ApplicationDirectoryViews.HOME:
              E();
              break;
            case i.ApplicationDirectoryViews.SEARCH:
              _();
              break;
            case i.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != o) {
                  if (
                    o === u.ApplicationDirectoryProfileSections.STORE &&
                    null != I
                  ) {
                    m({ applicationId: r, skuId: I });
                    break;
                  }
                  p({ applicationId: r, section: o });
                  break;
                }
                A({ applicationId: r });
              }
          }
        },
        E = () => {
          let e = { previousView: (0, i.getCurrentView)() };
          (0, r.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        A = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, i.getCurrentView)() };
          (0, r.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        p = (e) => {
          let { applicationId: t, section: n } = e,
            c = { previousView: (0, i.getCurrentView)() };
          (0, r.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: c,
          });
        },
        m = (e) => {
          let { applicationId: t, skuId: n } = e,
            c = { previousView: (0, i.getCurrentView)() };
          (0, r.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: c,
          });
        },
        _ = function () {
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
            (0, r.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: c.toString(),
              state: l,
            });
        },
        I = (e) => {
          let { categoryId: t } = e;
          _({ categoryId: null != t ? t : o.MU });
        },
        N = (e) => {
          let {
            location: { state: t },
          } = (0, r.s1)();
          (0, r.dL)(e, t);
        };
    },
    888496: function (e, t, n) {
      n.d(t, {
        Dq: function () {
          return m;
        },
        hf: function () {
          return N;
        },
        li: function () {
          return _;
        },
        oP: function () {
          return A;
        },
        rJ: function () {
          return p;
        },
        rm: function () {
          return h;
        },
        ul: function () {
          return I;
        },
      }),
        n(653041),
        n(47120);
      var c = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(392711),
        o = n.n(a),
        i = n(481060),
        u = n(930153),
        s = n(275759),
        d = n(856651),
        T = n(388032),
        E = n(272673);
      function A(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          r = Number(
            null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1,
          ),
          a = "1" === e[d.PC.REDDIT_GOLD],
          o = "1" === e[d.PC.REDDIT_MOD];
        return (
          r > -1 &&
            l.push(
              (0, c.jsx)(
                f,
                { className: n, count: r, label: T.t.SbCNo6 },
                d.PC.REDDIT_TOTAL_KARMA,
              ),
            ),
          a &&
            l.push(
              (0, c.jsx)(
                v,
                { className: n, label: T.intl.string(T.t["06rDHR"]) },
                d.PC.REDDIT_GOLD,
              ),
            ),
          o &&
            l.push(
              (0, c.jsx)(
                v,
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
          r = [],
          a = Number(
            null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t
              ? t
              : -1,
          ),
          o = Number(
            null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n
              ? n
              : -1,
          );
        return (
          a > -1 &&
            r.push(
              (0, c.jsx)(
                f,
                { className: l, count: a, label: T.t.llwqqa },
                d.PC.TWITTER_STATUSES_COUNT,
              ),
            ),
          o > -1 &&
            r.push(
              (0, c.jsx)(
                f,
                { className: l, count: o, label: T.t.LMNOUV },
                d.PC.TWITTER_FOLLOWERS_COUNT,
              ),
            ),
          r
        );
      }
      function m(e) {
        var t, l, r;
        let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          o = [],
          i = Number(
            null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1,
          ),
          u = Number(
            null !== (l = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l
              ? l
              : -1,
          ),
          s = Number(
            null !== (r = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== r
              ? r
              : -1,
          );
        return (
          i > -1 &&
            o.push(
              (0, c.jsx)(
                f,
                { className: a, count: i, label: T.t.ppXMu7 },
                d.PC.STEAM_GAME_COUNT,
              ),
            ),
          u > -1 &&
            o.push(
              (0, c.jsx)(
                O,
                {
                  className: a,
                  label: T.intl.format(T.t["Y88M5+"], { count: u }),
                  imageSrc: n(738535),
                  imageAlt: T.intl.string(T.t.HKUEZm),
                },
                d.PC.STEAM_ITEM_COUNT_DOTA2,
              ),
            ),
          s > -1 &&
            o.push(
              (0, c.jsx)(
                O,
                {
                  className: a,
                  label: T.intl.format(T.t["Y88M5+"], { count: s }),
                  imageSrc: n(80730),
                  imageAlt: T.intl.string(T.t.C8p1Sk),
                },
                d.PC.STEAM_ITEM_COUNT_TF2,
              ),
            ),
          o
        );
      }
      function _(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n = [];
        return (
          "1" === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
              (0, c.jsx)(
                v,
                {
                  className: r()(t, E.paypalVerifiedTag),
                  label: T.intl.string(T.t.IhXLy8),
                },
                d.PC.PAYPAL_VERIFIED,
              ),
            ),
          n
        );
      }
      function I(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          l = [],
          r = Number(
            null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) &&
              void 0 !== t
              ? t
              : -1,
          ),
          a = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
        return (
          r > 0 &&
            l.push(
              (0, c.jsx)(
                f,
                { className: n, count: r, label: T.t.YmL22d, percent: !0 },
                d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
              ),
            ),
          a &&
            l.push(
              (0, c.jsx)(
                v,
                { className: n, label: T.intl.string(T.t.TEEYwc) },
                d.PC.EBAY_TOP_RATED_SELLER,
              ),
            ),
          l
        );
      }
      function N(e) {
        var t, n, l;
        let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          a = [],
          o = "1" === e[d.PC.TIKTOK_VERIFIED],
          i = Number(
            null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t
              ? t
              : -1,
          ),
          u = Number(
            null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n
              ? n
              : -1,
          ),
          s = Number(
            null !== (l = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1,
          );
        return (
          i > -1 &&
            a.push(
              (0, c.jsx)(
                f,
                { className: r, count: i, label: T.t["Mpm/BQ"] },
                d.PC.TIKTOK_FOLLOWER_COUNT,
              ),
            ),
          u > -1 &&
            a.push(
              (0, c.jsx)(
                f,
                { className: r, count: u, label: T.t.ftf12t },
                d.PC.TIKTOK_FOLLOWING_COUNT,
              ),
            ),
          s > -1 &&
            a.push(
              (0, c.jsx)(
                f,
                { className: r, count: s, label: T.t.Qwhe5u },
                d.PC.TIKTOK_LIKES_COUNT,
              ),
            ),
          o &&
            a.push(
              (0, c.jsx)(
                v,
                { className: r, label: T.intl.string(T.t.QHHwRU) },
                d.PC.TIKTOK_VERIFIED,
              ),
            ),
          a
        );
      }
      function h(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          l = [],
          r = Object.keys(e.metadata);
        if (
          null == e.application_metadata ||
          0 === Object.keys(e.application_metadata).length ||
          0 === r.length
        )
          return l;
        for (let a of o().sortBy(r, (t) => {
          var n, c;
          return null === (c = e.application_metadata) || void 0 === c
            ? void 0
            : null === (n = c[t]) || void 0 === n
              ? void 0
              : n.name;
        })) {
          let r = e.application_metadata[a];
          if (null == r) continue;
          let o = e.metadata[a];
          try {
            switch (r.type) {
              case d.xn.BOOLEAN_EQUAL:
              case d.xn.BOOLEAN_NOT_EQUAL:
                ((r.type === d.xn.BOOLEAN_EQUAL && "1" === o) ||
                  (r.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== o)) &&
                  l.push((0, c.jsx)(v, { className: t, label: r.name }, r.key));
                break;
              case d.xn.DATETIME_GREATER_THAN_EQUAL:
              case d.xn.DATETIME_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    C,
                    { className: t, date: o, locale: n, label: r.name },
                    r.key,
                  ),
                );
                break;
              case d.xn.INTEGER_EQUAL:
              case d.xn.INTEGER_NOT_EQUAL:
              case d.xn.INTEGER_GREATER_THAN_EQUAL:
              case d.xn.INTEGER_LESS_THAN_EQUAL:
                l.push(
                  (0, c.jsx)(
                    f,
                    { className: t, count: Number(o), label: r.name },
                    r.key,
                  ),
                );
            }
          } catch (e) {}
        }
        return l;
      }
      function f(e) {
        let t,
          { count: n, label: l, className: a, percent: o } = e,
          s = (0, u.$U)(n) + (o ? "%" : "");
        return (
          (t =
            "string" == typeof l
              ? T.intl.format(T.t.HLoinJ, { name: l, value: s })
              : T.intl.format(l, { value: s })),
          (0, c.jsx)(i.Text, {
            className: r()(E.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: t,
          })
        );
      }
      function C(e) {
        let { date: t, locale: n, label: l, className: a } = e;
        return (0, c.jsx)(i.Text, {
          className: r()(E.connectedAccountVanityMetadata, a),
          variant: "text-xs/normal",
          color: "interactive-active",
          children: T.intl.format(T.t.HLoinJ, {
            value: (0, s.FI)(t, n),
            name: l,
          }),
        });
      }
      function O(e) {
        let { label: t, imageSrc: n, imageAlt: l, className: a } = e;
        return (0, c.jsxs)("div", {
          className: r()(
            E.connectedAccountVanityMetadata,
            E.connectedAccountVanityMetadataItem,
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
                  className: E.connectedAccountVanityMetadataItemIcon,
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
      function v(e) {
        let { label: t, className: n } = e;
        return (0, c.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "interactive-active",
          className: r()(
            E.connectedAccountVanityMetadata,
            E.connectedAccountVanityMetadataTag,
            n,
          ),
          children: t,
        });
      }
    },
    749681: function (e, t, n) {
      n.d(t, {
        u: function () {
          return s;
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
        r = n(703656),
        a = n(836768),
        o = n(49898),
        i = n(981631),
        u = n(128449);
      function s(e) {
        let t = e.tab;
        switch ((a.Z.setState({ selectedTab: t }), t)) {
          case o.F$.SERVERS:
            var n, s;
            let d = e.selectedServersTab;
            return (
              null != d
                ? c.Z.setState({
                    selectedTab: d,
                    entrypoint:
                      null !== (n = e.entrypoint) && void 0 !== n
                        ? n
                        : u.Qq.UNKNOWN,
                  })
                : c.Z.setState({
                    entrypoint:
                      null !== (s = e.entrypoint) && void 0 !== s
                        ? s
                        : u.Qq.UNKNOWN,
                  }),
              (0, r.uL)(i.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
          case o.F$.APPS:
            if (null != e.applicationId)
              return (0, r.uL)(
                i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                t.set("q", e.query),
                null != e.categoryId &&
                  t.set("category_id", e.categoryId.toString()),
                null != e.page && t.set("page", e.page.toString()),
                (0, r.uL)(i.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: t.toString(),
                })
              );
            } else if (null != e.categoryId)
              return (0, r.uL)(
                i.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()),
              );
            else return (0, r.uL)(i.Z5c.GLOBAL_DISCOVERY_APPS);
          case o.F$.QUESTS:
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
    352057: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
        r: function () {
          return r;
        },
      });
      let c = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function l(e) {
        let { location: t, autoTrackExposure: n = !0 } = e,
          { enabled: l } = c.useExperiment(
            { location: t },
            { autoTrackExposure: n },
          );
        return l;
      }
      function r(e) {
        let { location: t } = e;
        return c.getCurrentConfig({ location: t }, { autoTrackExposure: !1 })
          .enabled;
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
        }),
        r = (0, c.H)(() => l);
      function a() {
        r.setState(l);
      }
      t.Z = r;
    },
    819602: function (e, t, n) {
      n.d(t, {
        E3: function () {
          return P;
        },
        OA: function () {
          return R;
        },
        tH: function () {
          return L;
        },
      }),
        n(653041);
      var c = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(692547),
        i = n(780384),
        u = n(481060),
        s = n(99690),
        d = n(726542),
        T = n(367907),
        E = n(132871),
        A = n(147890),
        p = n(122021),
        m = n(275759),
        _ = n(888496),
        I = n(753194),
        N = n(598077),
        h = n(671533),
        f = n(49012),
        C = n(981631),
        O = n(856651),
        v = n(388032),
        x = n(179588);
      function P(e) {
        var t, n;
        let l,
          r,
          s,
          {
            connectedAccount: E,
            theme: A,
            locale: N,
            userId: P,
            className: L,
            showMetadata: R,
            showInvisibleIcon: g,
          } = e;
        null == R && (R = !0);
        let S = null !== (n = E.metadata) && void 0 !== n ? n : {},
          b = R ? (0, m.FI)(S[O.PC.CREATED_AT], N) : null,
          D = (0, u.useToken)(o.Z.unsafe_rawColors.TWITTER).hex(),
          y = v.intl.string(v.t["6H6h1t"]);
        if (R)
          switch (E.type) {
            case C.ABu.REDDIT:
              l = (0, _.oP)(S);
              break;
            case C.ABu.STEAM:
              l = (0, _.Dq)(S);
              break;
            case C.ABu.TWITTER:
              (l = (0, _.rJ)(S)),
                "1" === S[O.PC.TWITTER_VERIFIED] &&
                  ((r = D), (y = v.intl.string(v.t.Jebrw8)));
              break;
            case C.ABu.PAYPAL:
              l = (0, _.li)(S);
              break;
            case C.ABu.EBAY:
              l = (0, _.ul)(S);
              break;
            case C.ABu.TIKTOK:
              l = (0, _.hf)(S);
          }
        let j = d.Z.get((0, p.rR)(E.type)),
          U =
            null == j
              ? void 0
              : null === (t = j.getPlatformUserUrl) || void 0 === t
                ? void 0
                : t.call(j, E);
        null != g && g
          ? (s = (0, c.jsx)(u.EyeSlashIcon, {
              size: "md",
              color: "currentColor",
              className: a()(
                x.__invalid_connectedAccountOpenIconContainer,
                x.connectedAccountHideIcon,
              ),
            }))
          : null != U &&
            (s = (0, c.jsx)(u.Anchor, {
              href: U,
              onClick: (e) => {
                var t, n;
                (t = E.type),
                  (n = P),
                  (0, T.yw)(C.rMx.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: t,
                    other_user_id: n,
                  }),
                  (0, f.q)(
                    {
                      href: U,
                      trusted: (null == j ? void 0 : j.type) !== C.ABu.DOMAIN,
                    },
                    e,
                  );
              },
              children: (0, c.jsx)(h.Z, {
                className: x.connectedAccountOpenIcon,
                direction: h.Z.Directions.RIGHT,
              }),
            }));
        let w = (0, u.useToken)(o.Z.colors.INTERACTIVE_MUTED).hex(),
          V = (0, u.useToken)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
          M = E.verified
            ? (0, c.jsx)(I.Z, {
                className: x.connectedAccountVerifiedIcon,
                color: null != r ? r : w,
                forcedIconColor: V,
                size: 16,
                tooltipText: y,
              })
            : null;
        return (0, c.jsxs)("div", {
          className: a()(
            x.connectedAccountContainer,
            (null != l && l.length > 0) || null != b
              ? x.connectedAccountContainerWithMetadata
              : null,
            L,
          ),
          children: [
            (0, c.jsxs)("div", {
              className: x.connectedAccount,
              children: [
                (0, c.jsx)(u.Tooltip, {
                  text: null == j ? void 0 : j.name,
                  children: (e) =>
                    (0, c.jsx)("img", {
                      ...e,
                      alt: v.intl.formatToPlainString(v.t.rtm15O, {
                        name: null == j ? void 0 : j.name,
                      }),
                      className: x.connectedAccountIcon,
                      src: (0, i.wj)(A)
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
                            (0, c.jsx)(u.Tooltip, {
                              overflowOnly: !0,
                              text: E.name,
                              children: (e) =>
                                (0, c.jsx)(u.Text, {
                                  ...e,
                                  variant: "text-md/semibold",
                                  color: "interactive-active",
                                  className: x.connectedAccountNameText,
                                  children: E.name,
                                }),
                            }),
                            M,
                          ],
                        }),
                        s,
                      ],
                    }),
                    null != b
                      ? (0, c.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: v.intl.format(v.t["9rfonp"], { date: b }),
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
      function L(e) {
        let {
            applicationRoleConnection: t,
            className: n,
            locale: l,
            onApplicationClicked: r,
            selectedGuildId: o,
          } = e,
          i = (0, _.rm)(t, void 0, l),
          d = () => {
            null == r || r(),
              (0, A.goToAppDirectory)({
                view: E.ApplicationDirectoryViews.APPLICATION,
                applicationId: t.application.id,
                guildId: o,
                entrypoint: {
                  name: E.ApplicationDirectoryEntrypointNames
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
              children: (0, c.jsxs)(u.Clickable, {
                className: a()(
                  x.connectedAccountNameContainer,
                  x.connectedAccountNameContainerClickable,
                ),
                onClick: d,
                children: [
                  null != t.platform_name
                    ? (0, c.jsx)(u.Text, {
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
                          children: (0, c.jsx)(u.Text, {
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
              children: (0, c.jsx)(u.Clickable, {
                className: x.connectedAccountPoweredBy,
                onClick: d,
                children: (0, c.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: v.intl.format(v.t.zIT9YG, {
                    applicationHook: () =>
                      (0, c.jsxs)("div", {
                        className: x.connectedAccountPoweredByText,
                        children: [
                          null != t.application.bot
                            ? (0, c.jsx)(s.Z, {
                                user: new N.Z(t.application.bot),
                                size: u.AvatarSizes.SIZE_16,
                              })
                            : null,
                          (0, c.jsx)(u.Text, {
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
          locale: r,
          className: o,
          userId: i,
        } = e;
        if (null == n || 0 === n.length) return null;
        let u = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
              (0, c.jsx)(
                P,
                { connectedAccount: e, theme: l, locale: r, userId: i },
                "".concat(e.type, ":").concat(e.id),
              ),
            ),
          s = [],
          T = [];
        for (let e = 0; e < u.length; e++) {
          let t = u[e];
          e % 2 == 0 ? s.push(t) : T.push(t);
        }
        return (0, c.jsxs)("div", {
          ref: t,
          className: a()(x.connectedAccounts, o),
          children: [
            (0, c.jsx)("div", {
              className: x.connectedAccountsColumn,
              children: s,
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
        r = n(200651);
      n(192379);
      var a = n(120356),
        o = n.n(a),
        i = n(325767),
        u = n(785798);
      ((l = c || (c = {})).LEFT = "LEFT"),
        (l.RIGHT = "RIGHT"),
        (l.UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.UP_LEFT = "UP_LEFT"),
        (l.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: c = "currentColor",
          direction: l,
          foreground: a,
          className: s,
          title: d,
          ...T
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, i.Z)(T),
          width: t,
          height: n,
          className: o()(
            s,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return u.left;
                case "RIGHT":
                  return u.right;
                case "UP":
                  return null;
                case "DOWN":
                  return u.down;
                case "UP_LEFT":
                  return u.upLeft;
                case "DOWN_RIGHT":
                  return u.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(l),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
              className: a,
              fill: c,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = c), (t.Z = s);
    },
  },
]);
//# sourceMappingURL=7ef2f646065fa5bd9778.js.map
