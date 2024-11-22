"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11794"],
  {
    902294: function (t) {
      t.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return h;
        },
        KQ: function () {
          return S;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return A;
        },
        m0: function () {
          return E;
        },
        rf: function () {
          return O;
        },
        tu: function () {
          return f;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var r = n(860911),
        i = n(477690),
        o = n(481060),
        l = n(911969),
        c = n(134432),
        a = n(703656),
        u = n(768581),
        s = n(981631),
        d = n(388032);
      let p = 0,
        { API_ENDPOINT: I, CDN_HOST: L } = window.GLOBAL_ENV;
      function E(t) {
        return t.id === p;
      }
      function S() {
        return { id: p, name: d.intl.string(d.t.E407b2) };
      }
      function f(t) {
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
      function h(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          o = u.$k ? "webp" : "png";
        return null != L
          ? ""
              .concat(location.protocol, "//")
              .concat(L, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(I)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, o),
                "?",
              )
              .concat(r);
      }
      function O() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          i = (0, r.Ui)(n, !1);
        (0, a.uL)(i);
      }
      let _ = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function A(t) {
        switch (t.type) {
          case l.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = _(t.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    924489: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
        },
        x: function () {
          return r;
        },
      }),
        n(653041);
      var r,
        i,
        o = n(200651),
        l = n(192379),
        c = n(120356),
        a = n.n(c),
        u = n(442837),
        s = n(477690),
        d = n(481060),
        p = n(686546),
        I = n(706454),
        L = n(768581),
        E = n(624138),
        S = n(388032),
        f = n(488107);
      ((i = r || (r = {}))[
        (i.SMALL = (0, E.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (i[(i.LARGE = (0, E.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let h = { [r.SMALL]: f.moreGuildsSmall, [r.LARGE]: f.moreGuildsLarge },
        O = { [r.SMALL]: f.iconSmall, [r.LARGE]: f.iconLarge };
      function _(t) {
        var e, n, i;
        let {
            application: c,
            mutualGuilds: s,
            mutualGuildShownMax: E = 4,
            className: _,
            textVariant: A = "text-sm/normal",
            compact: R,
            guildIconSize: T = r.LARGE,
            guildsClassName: g,
          } = t,
          P = (0, u.e7)([I.default], () => I.default.locale),
          m = new Intl.ListFormat(P),
          C =
            null !==
              (n =
                null === (e = c.directory_entry) || void 0 === e
                  ? void 0
                  : e.guild_count) && void 0 !== n
              ? n
              : 0,
          N =
            null !== (i = null == s ? void 0 : s.length) && void 0 !== i
              ? i
              : 0,
          w = Math.max(0, C - N),
          { shownMutualGuilds: v, hiddenMutualGuilds: y } = l.useMemo(() => {
            let t = [],
              e = [];
            return (
              null == s ||
                s.forEach((n) => {
                  t.length < E && null != n.icon ? t.push(n) : e.push(n);
                }),
              t.length === E &&
                e.length > 0 &&
                (e.push(t[E - 1]), (t = t.slice(0, E - 1))),
              { shownMutualGuilds: t, hiddenMutualGuilds: e }
            );
          }, [s, E]),
          D = y.length,
          G = (function (t, e, n, r, i) {
            if (0 === e && 0 === t) return null;
            if (e > 0 && 0 === n)
              return S.intl.formatToPlainString(S.t.pnzE1t, {
                mutualGuildCount: e,
              });
            let o = e > 0 ? S.t.YR8PSE : S.t.GQjq6e,
              l = new Intl.NumberFormat(r, {
                notation: i ? "compact" : "standard",
                compactDisplay: "short",
              });
            return S.intl.formatToPlainString(o, {
              guildCount: l.format(t),
              mutualGuildCount: e,
              nonMutualGuildCount: l.format(n),
            });
          })(C, N, w, P, R);
        return 0 === v.length && null == G
          ? null
          : (0, o.jsxs)("div", {
              className: a()(_, f.wrapper),
              children: [
                (0, o.jsx)("div", {
                  className: a()(f.icons, g),
                  children:
                    v.length > 0
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            v.map((t, e) => {
                              let n = e === v.length - 1 && 0 === D,
                                r = L.ZP.getGuildIconURL({
                                  id: t.id,
                                  icon: t.icon,
                                  size: T,
                                  canAnimate: !1,
                                }),
                                i = (0, o.jsx)(d.Tooltip, {
                                  text: t.name,
                                  position: "top",
                                  children: (t) =>
                                    (0, o.jsx)("img", {
                                      ...t,
                                      className: a()(f.icon, O[T]),
                                      src: r,
                                      alt: "",
                                    }),
                                });
                              return n
                                ? (0, o.jsx)(l.Fragment, { children: i }, t.id)
                                : (0, o.jsx)(
                                    p.ZP,
                                    {
                                      className: f.iconMask,
                                      height: T,
                                      width: T,
                                      mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: i,
                                    },
                                    t.id,
                                  );
                            }),
                            D > 0
                              ? (0, o.jsx)(d.Tooltip, {
                                  text: S.intl.formatToPlainString(S.t.m6oRrK, {
                                    appNames: m.format(y.map((t) => t.name)),
                                  }),
                                  position: "top",
                                  children: (t) =>
                                    (0, o.jsxs)("div", {
                                      ...t,
                                      className: a()(f.moreGuilds, h[T]),
                                      children: ["+", D],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, o.jsx)(d.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: T,
                          height: T,
                          className: f.defaultIcon,
                        }),
                }),
                null != G
                  ? (0, o.jsx)(d.Text, {
                      variant: A,
                      color: "header-secondary",
                      children: G,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        o = n.n(i),
        l = n(481060),
        c = n(507716);
      function a(t) {
        let { loading: e, children: n } = t;
        return (0, r.jsxs)("div", {
          className: c.container,
          children: [
            e
              ? (0, r.jsx)("div", {
                  className: c.spinnerContainer,
                  children: (0, r.jsx)(l.Spinner, {
                    className: c.spinner,
                    type: l.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, r.jsx)("div", {
              className: o()({ [c.loading]: e }),
              children: n,
            }),
          ],
        });
      }
    },
    147890: function (t, e, n) {
      n.r(e),
        n.d(e, {
          goHome: function () {
            return L;
          },
          goSearch: function () {
            return h;
          },
          goToAppDirectory: function () {
            return I;
          },
          goToApplication: function () {
            return E;
          },
          goToApplicationSection: function () {
            return S;
          },
          goToApplicationStoreSku: function () {
            return f;
          },
          goToCategory: function () {
            return O;
          },
          replaceAppDirectoryURLWith: function () {
            return _;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(749681),
        i = n(352057),
        o = n(703656),
        l = n(626135),
        c = n(34674),
        a = n(132871),
        u = n(272242),
        s = n(981631),
        d = n(49898),
        p = n(979007);
      let I = (t) => {
          let {
            view: e = a.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: o,
            applicationSection: c,
            entrypoint: I,
            skuId: O,
          } = t;
          if ((0, i.r)({ location: I.name })) {
            let t =
              c === u.ApplicationDirectoryProfileSections.STORE
                ? p.Wc.STORE
                : p.Wc.ABOUT;
            (0, r.u)({
              tab: d.F$.APPS,
              applicationId: o,
              section: t,
              skuId: t === p.Wc.STORE ? O : void 0,
            });
            return;
          }
          let _ = { ...I, pathname: window.location.pathname };
          switch (
            (l.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == _ ? void 0 : _.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(_),
            null != n && (0, a.setGuildId)(n),
            e === a.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (e = a.ApplicationDirectoryViews.HOME),
            e)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              L();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              h();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != c) {
                  if (
                    c === u.ApplicationDirectoryProfileSections.STORE &&
                    null != O
                  ) {
                    f({ applicationId: o, skuId: O });
                    break;
                  }
                  S({ applicationId: o, section: c });
                  break;
                }
                E({ applicationId: o });
              }
          }
        },
        L = () => {
          let t = { previousView: (0, a.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        E = (t) => {
          let { applicationId: e } = t,
            n = { previousView: (0, a.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: n });
        },
        S = (t) => {
          let { applicationId: e, section: n } = t,
            r = { previousView: (0, a.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
            state: r,
          });
        },
        f = (t) => {
          let { applicationId: e, skuId: n } = t,
            r = { previousView: (0, a.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: r,
          });
        },
        h = function () {
          let {
              query: t,
              categoryId: e,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            i = { previousView: (0, a.getCurrentView)() };
          null != t && r.set("q", t),
            null != e && r.set("category_id", e.toString()),
            null != n && r.set("page", n.toString()),
            (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: i,
            });
        },
        O = (t) => {
          let { categoryId: e } = t;
          h({ categoryId: null != e ? e : c.MU });
        },
        _ = (t) => {
          let {
            location: { state: e },
          } = (0, o.s1)();
          (0, o.dL)(t, e);
        };
    },
    749681: function (t, e, n) {
      n.d(e, {
        u: function () {
          return d;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var r = n(859921),
        i = n(341907),
        o = n(703656),
        l = n(836768),
        c = n(49898),
        a = n(981631),
        u = n(979007),
        s = n(128449);
      function d(t) {
        let e = t.tab;
        switch ((l.Z.setState({ selectedTab: e }), e)) {
          case c.F$.SERVERS:
            var n, d;
            let p = t.selectedServersTab;
            return (
              null != p
                ? r.Z.setState({
                    selectedTab: p,
                    entrypoint:
                      null !== (n = t.entrypoint) && void 0 !== n
                        ? n
                        : s.Qq.UNKNOWN,
                  })
                : r.Z.setState({
                    entrypoint:
                      null !== (d = t.entrypoint) && void 0 !== d
                        ? d
                        : s.Qq.UNKNOWN,
                  }),
              (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case c.F$.APPS:
            if (null != t.applicationId) {
              if (t.section === u.Wc.STORE) {
                if (null != t.skuId)
                  return (0, o.uL)(
                    a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      t.applicationId,
                      t.skuId,
                    ),
                  );
                return (0, o.uL)(
                  a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    t.applicationId,
                    u.Wc.STORE,
                  ),
                );
              }
              return (0, o.uL)(
                a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
              );
            }
            if (null != t.query) {
              let e = new URLSearchParams();
              return (
                "" !== t.query && e.set("q", t.query),
                null != t.categoryId &&
                  e.set("category_id", t.categoryId.toString()),
                null != t.page && e.set("page", t.page.toString()),
                (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: e.toString(),
                })
              );
            } else if (null != t.categoryId)
              return (0, o.uL)(
                a.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()),
              );
            else return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS);
          case c.F$.QUESTS:
            return (0, i.navigateToQuestHome)(
              t.location,
              t.questContent,
              t.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(e),
            );
        }
      }
    },
    859921: function (t, e, n) {
      n.d(e, {
        O: function () {
          return l;
        },
      });
      var r = n(972959);
      let i = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
        }),
        o = (0, r.H)(() => i);
      function l() {
        o.setState(i);
      }
      e.Z = o;
    },
    671533: function (t, e, n) {
      n(411104);
      var r,
        i,
        o = n(200651);
      n(192379);
      var l = n(120356),
        c = n.n(l),
        a = n(325767),
        u = n(865244);
      ((i = r || (r = {})).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (t) => {
        let {
          width: e = 24,
          height: n = 24,
          color: r = "currentColor",
          direction: i,
          foreground: l,
          className: s,
          title: d,
          ...p
        } = t;
        return (0, o.jsxs)("svg", {
          ...(0, a.Z)(p),
          width: e,
          height: n,
          className: c()(
            s,
            (function (t) {
              switch (t) {
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
      (s.Directions = r), (e.Z = s);
    },
  },
]);
//# sourceMappingURL=62deb1c052d028feb213.js.map
