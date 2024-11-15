"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11794"],
  {
    902294: function (t) {
      t.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    34674: function (t, n, e) {
      e.d(n, {
        $_: function () {
          return g;
        },
        KQ: function () {
          return h;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return T;
        },
        m0: function () {
          return E;
        },
        rf: function () {
          return A;
        },
        tu: function () {
          return L;
        },
      }),
        e(610138),
        e(216116),
        e(78328),
        e(815648),
        e(47120),
        e(315314);
      var r = e(860911),
        i = e(477690),
        o = e(481060),
        l = e(911969),
        c = e(134432),
        u = e(703656),
        a = e(768581),
        s = e(981631),
        d = e(388032);
      let p = 0,
        { API_ENDPOINT: f, CDN_HOST: I } = window.GLOBAL_ENV;
      function E(t) {
        return t.id === p;
      }
      function h() {
        return { id: p, name: d.intl.string(d.t.E407b2) };
      }
      function L(t) {
        switch (t.id) {
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
      function g(t) {
        let { itemId: n, hash: e } = t,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          o = a.$k ? "webp" : "png";
        return null != I
          ? ""
              .concat(location.protocol, "//")
              .concat(I, "/app-assets/application-directory/collection-items/")
              .concat(n, "/")
              .concat(e, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(f)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, e, o),
                "?",
              )
              .concat(r);
      }
      function A() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let e in t) {
          let r = t[e];
          n.searchParams.set(e, r);
        }
        let e = n.pathname + n.search,
          i = (0, r.Ui)(e, !1);
        (0, u.uL)(i);
      }
      let _ = (t) => {
        if (null == t) return null;
        let n = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != n ? n[1] : null;
      };
      function T(t) {
        switch (t.type) {
          case l.ee.MEDIA_PROXY:
            var n;
            let e = null !== (n = t.proxy_url) && void 0 !== n ? n : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: e };
          case l.ee.YOUTUBE:
            let r = _(t.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    924489: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return _;
        },
        x: function () {
          return r;
        },
      }),
        e(653041);
      var r,
        i,
        o = e(200651),
        l = e(192379),
        c = e(120356),
        u = e.n(c),
        a = e(442837),
        s = e(477690),
        d = e(481060),
        p = e(686546),
        f = e(706454),
        I = e(768581),
        E = e(624138),
        h = e(388032),
        L = e(488107);
      ((i = r || (r = {}))[
        (i.SMALL = (0, E.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (i[(i.LARGE = (0, E.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let g = { [r.SMALL]: L.moreGuildsSmall, [r.LARGE]: L.moreGuildsLarge },
        A = { [r.SMALL]: L.iconSmall, [r.LARGE]: L.iconLarge };
      function _(t) {
        var n, e, i;
        let {
            application: c,
            mutualGuilds: s,
            mutualGuildShownMax: E = 4,
            className: _,
            textVariant: T = "text-sm/normal",
            compact: S,
            guildIconSize: m = r.LARGE,
            guildsClassName: R,
          } = t,
          O = (0, a.e7)([f.default], () => f.default.locale),
          N = new Intl.ListFormat(O),
          P =
            null !==
              (e =
                null === (n = c.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== e
              ? e
              : 0,
          C =
            null !== (i = null == s ? void 0 : s.length) && void 0 !== i
              ? i
              : 0,
          v = Math.max(0, P - C),
          { shownMutualGuilds: w, hiddenMutualGuilds: y } = l.useMemo(() => {
            let t = [],
              n = [];
            return (
              null == s ||
                s.forEach((e) => {
                  t.length < E && null != e.icon ? t.push(e) : n.push(e);
                }),
              t.length === E &&
                n.length > 0 &&
                (n.push(t[E - 1]), (t = t.slice(0, E - 1))),
              { shownMutualGuilds: t, hiddenMutualGuilds: n }
            );
          }, [s, E]),
          D = y.length,
          G = (function (t, n, e, r, i) {
            if (0 === n && 0 === t) return null;
            if (n > 0 && 0 === e)
              return h.intl.formatToPlainString(h.t.pnzE1t, {
                mutualGuildCount: n,
              });
            let o = n > 0 ? h.t.YR8PSE : h.t.GQjq6e,
              l = new Intl.NumberFormat(r, {
                notation: i ? "compact" : "standard",
                compactDisplay: "short",
              });
            return h.intl.formatToPlainString(o, {
              guildCount: l.format(t),
              mutualGuildCount: n,
              nonMutualGuildCount: l.format(e),
            });
          })(P, C, v, O, S);
        return 0 === w.length && null == G
          ? null
          : (0, o.jsxs)("div", {
              className: u()(_, L.wrapper),
              children: [
                (0, o.jsx)("div", {
                  className: u()(L.icons, R),
                  children:
                    w.length > 0
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            w.map((t, n) => {
                              let e = n === w.length - 1 && 0 === D,
                                r = I.ZP.getGuildIconURL({
                                  id: t.id,
                                  icon: t.icon,
                                  size: m,
                                  canAnimate: !1,
                                }),
                                i = (0, o.jsx)(d.Tooltip, {
                                  text: t.name,
                                  position: "top",
                                  children: (t) =>
                                    (0, o.jsx)("img", {
                                      ...t,
                                      className: u()(L.icon, A[m]),
                                      src: r,
                                      alt: "",
                                    }),
                                });
                              return e
                                ? (0, o.jsx)(l.Fragment, { children: i }, t.id)
                                : (0, o.jsx)(
                                    p.ZP,
                                    {
                                      className: L.iconMask,
                                      height: m,
                                      width: m,
                                      mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: i,
                                    },
                                    t.id,
                                  );
                            }),
                            D > 0
                              ? (0, o.jsx)(d.Tooltip, {
                                  text: h.intl.formatToPlainString(h.t.m6oRrK, {
                                    appNames: N.format(y.map((t) => t.name)),
                                  }),
                                  position: "top",
                                  children: (t) =>
                                    (0, o.jsxs)("div", {
                                      ...t,
                                      className: u()(L.moreGuilds, g[m]),
                                      children: ["+", D],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, o.jsx)(d.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: m,
                          height: m,
                          className: L.defaultIcon,
                        }),
                }),
                null != G
                  ? (0, o.jsx)(d.Text, {
                      variant: T,
                      color: "header-secondary",
                      children: G,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(120356),
        o = e.n(i),
        l = e(481060),
        c = e(507716);
      function u(t) {
        let { loading: n, children: e } = t;
        return (0, r.jsxs)("div", {
          className: c.container,
          children: [
            n
              ? (0, r.jsx)("div", {
                  className: c.spinnerContainer,
                  children: (0, r.jsx)(l.Spinner, {
                    className: c.spinner,
                    type: l.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, r.jsx)("div", {
              className: o()({ [c.loading]: n }),
              children: e,
            }),
          ],
        });
      }
    },
    147890: function (t, n, e) {
      e.r(n),
        e.d(n, {
          goHome: function () {
            return f;
          },
          goSearch: function () {
            return L;
          },
          goToAppDirectory: function () {
            return p;
          },
          goToApplication: function () {
            return I;
          },
          goToApplicationSection: function () {
            return E;
          },
          goToApplicationStoreSku: function () {
            return h;
          },
          goToCategory: function () {
            return g;
          },
          replaceAppDirectoryURLWith: function () {
            return A;
          },
        }),
        e(610138),
        e(216116),
        e(78328),
        e(815648),
        e(47120);
      var r = e(749681),
        i = e(352057),
        o = e(703656),
        l = e(626135),
        c = e(34674),
        u = e(132871),
        a = e(272242),
        s = e(981631),
        d = e(49898);
      let p = (t) => {
          let {
            view: n = u.ApplicationDirectoryViews.HOME,
            guildId: e,
            applicationId: o,
            applicationSection: c,
            entrypoint: p,
            skuId: g,
          } = t;
          if ((0, i.r)({ location: p.name })) {
            (0, r.u)({ tab: d.F$.APPS, applicationId: o });
            return;
          }
          let A = { ...p, pathname: window.location.pathname };
          switch (
            (l.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == A ? void 0 : A.name,
            }),
            (0, u.resetApplicationDirectoryHistory)(),
            (0, u.setEntrypoint)(A),
            null != e && (0, u.setGuildId)(e),
            n === u.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (n = u.ApplicationDirectoryViews.HOME),
            n)
          ) {
            case u.ApplicationDirectoryViews.HOME:
              f();
              break;
            case u.ApplicationDirectoryViews.SEARCH:
              L();
              break;
            case u.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != c) {
                  if (
                    c === a.ApplicationDirectoryProfileSections.STORE &&
                    null != g
                  ) {
                    h({ applicationId: o, skuId: g });
                    break;
                  }
                  E({ applicationId: o, section: c });
                  break;
                }
                I({ applicationId: o });
              }
          }
        },
        f = () => {
          let t = { previousView: (0, u.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        I = (t) => {
          let { applicationId: n } = t,
            e = { previousView: (0, u.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: e });
        },
        E = (t) => {
          let { applicationId: n, section: e } = t,
            r = { previousView: (0, u.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, e), {
            state: r,
          });
        },
        h = (t) => {
          let { applicationId: n, skuId: e } = t,
            r = { previousView: (0, u.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, e), {
            state: r,
          });
        },
        L = function () {
          let {
              query: t,
              categoryId: n,
              page: e,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            i = { previousView: (0, u.getCurrentView)() };
          null != t && r.set("q", t),
            null != n && r.set("category_id", n.toString()),
            null != e && r.set("page", e.toString()),
            (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: i,
            });
        },
        g = (t) => {
          let { categoryId: n } = t;
          L({ categoryId: null != n ? n : c.MU });
        },
        A = (t) => {
          let {
            location: { state: n },
          } = (0, o.s1)();
          (0, o.dL)(t, n);
        };
    },
    749681: function (t, n, e) {
      e.d(n, {
        u: function () {
          return s;
        },
      }),
        e(610138),
        e(216116),
        e(78328),
        e(815648),
        e(47120),
        e(411104);
      var r = e(859921),
        i = e(341907),
        o = e(703656),
        l = e(836768),
        c = e(49898),
        u = e(981631),
        a = e(128449);
      function s(t) {
        let n = t.tab;
        switch ((l.Z.setState({ selectedTab: n }), n)) {
          case c.F$.SERVERS:
            var e, s;
            let d = t.selectedServersTab;
            return (
              null != d
                ? r.Z.setState({
                    selectedTab: d,
                    entrypoint:
                      null !== (e = t.entrypoint) && void 0 !== e
                        ? e
                        : a.Qq.UNKNOWN,
                  })
                : r.Z.setState({
                    entrypoint:
                      null !== (s = t.entrypoint) && void 0 !== s
                        ? s
                        : a.Qq.UNKNOWN,
                  }),
              (0, o.uL)(u.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case c.F$.APPS:
            if (null != t.applicationId)
              return (0, o.uL)(
                u.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
              );
            if (null != t.query) {
              let n = new URLSearchParams();
              return (
                n.set("q", t.query),
                null != t.categoryId &&
                  n.set("category_id", t.categoryId.toString()),
                null != t.page && n.set("page", t.page.toString()),
                (0, o.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: n.toString(),
                })
              );
            } else if (null != t.categoryId)
              return (0, o.uL)(
                u.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()),
              );
            else return (0, o.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS);
          case c.F$.QUESTS:
            return (0, i.navigateToQuestHome)(
              t.location,
              t.questContent,
              t.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(n),
            );
        }
      }
    },
    352057: function (t, n, e) {
      e.d(n, {
        h: function () {
          return i;
        },
        r: function () {
          return o;
        },
      });
      let r = (0, e(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(t) {
        let { location: n, autoTrackExposure: e = !0 } = t,
          { enabled: i } = r.useExperiment(
            { location: n },
            { autoTrackExposure: e },
          );
        return i;
      }
      function o(t) {
        let { location: n } = t;
        return r.getCurrentConfig({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    128449: function (t, n, e) {
      e.d(n, {
        AF: function () {
          return f;
        },
        BP: function () {
          return s;
        },
        KL: function () {
          return p;
        },
        MU: function () {
          return u;
        },
        Qq: function () {
          return i;
        },
        q5: function () {
          return a;
        },
        t0: function () {
          return d;
        },
        vf: function () {
          return r;
        },
      }),
        e(47120);
      var r,
        i,
        o,
        l,
        c = e(70956);
      e(731455),
        ((o = r || (r = {})).FEATURED = "featured"),
        (o.GAMING = "gaming"),
        (o.MUSIC = "music"),
        (o.ENTERTAINMENT = "entertainment"),
        (o.TECH = "tech"),
        (o.EDUCATION = "education"),
        (o.HUBS = "hubs"),
        ((l = i || (i = {})).UNKNOWN = "unknown"),
        (l.GUILDS_BAR = "guilds_bar"),
        (l.RTC_PANEL = "rtc_panel"),
        (l.PROFILE = "profile"),
        (l.GAME_LINK = "game_link"),
        (l.EMBED = "embed");
      let u = new Set(["hubs"]),
        a = [],
        s = "q",
        d = "c",
        p = "l",
        f = 10 * c.Z.Millis.MINUTE;
    },
    859921: function (t, n, e) {
      e.d(n, {
        O: function () {
          return l;
        },
      });
      var r = e(972959);
      let i = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
        }),
        o = (0, r.H)(() => i);
      function l() {
        o.setState(i);
      }
      n.Z = o;
    },
    671533: function (t, n, e) {
      e(411104);
      var r,
        i,
        o = e(200651);
      e(192379);
      var l = e(120356),
        c = e.n(l),
        u = e(325767),
        a = e(865244);
      ((i = r || (r = {})).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (t) => {
        let {
          width: n = 24,
          height: e = 24,
          color: r = "currentColor",
          direction: i,
          foreground: l,
          className: s,
          title: d,
          ...p
        } = t;
        return (0, o.jsxs)("svg", {
          ...(0, u.Z)(p),
          width: n,
          height: e,
          className: c()(
            s,
            (function (t) {
              switch (t) {
                case "LEFT":
                  return a.left;
                case "RIGHT":
                  return a.right;
                case "UP":
                  return null;
                case "DOWN":
                  return a.down;
                case "UP_LEFT":
                  return a.upLeft;
                case "DOWN_RIGHT":
                  return a.downRight;
                default:
                  throw Error("Invalid Direction ".concat(t));
              }
            })(i),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, o.jsx)("title", { children: d }) : null,
            (0, o.jsx)("polygon", {
              className: l,
              fill: r,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = r), (n.Z = s);
    },
  },
]);
//# sourceMappingURL=3e36d1ba3ca986ca7f1c.js.map
