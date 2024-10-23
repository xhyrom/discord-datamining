"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57358"],
  {
    902294: function (e) {
      e.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    34674: function (e, n, t) {
      t.d(n, {
        $_: function () {
          return T;
        },
        KQ: function () {
          return f;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return m;
        },
        m0: function () {
          return _;
        },
        rf: function () {
          return A;
        },
        tu: function () {
          return L;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(315314);
      var r = t(860911),
        i = t(477690),
        o = t(481060),
        l = t(911969),
        c = t(134432),
        u = t(703656),
        a = t(768581),
        s = t(981631),
        d = t(689938);
      let p = 0,
        { API_ENDPOINT: I, CDN_HOST: h } = window.GLOBAL_ENV;
      function _(e) {
        return e.id === p;
      }
      function f() {
        return { id: p, name: d.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function L(e) {
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
      function T(e) {
        let { itemId: n, hash: t } = e,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          o = a.$k ? "webp" : "png";
        return null != h
          ? ""
              .concat(location.protocol, "//")
              .concat(h, "/app-assets/application-directory/collection-items/")
              .concat(n, "/")
              .concat(t, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(I)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, o),
                "?",
              )
              .concat(r);
      }
      function A() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let t in e) {
          let r = e[t];
          n.searchParams.set(t, r);
        }
        let t = n.pathname + n.search,
          i = (0, r.Ui)(t, !1);
        (0, u.uL)(i);
      }
      let g = (e) => {
        if (null == e) return null;
        let n = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != n ? n[1] : null;
      };
      function m(e) {
        switch (e.type) {
          case l.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: t };
          case l.ee.YOUTUBE:
            let r = g(e.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    924489: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
        x: function () {
          return r;
        },
      }),
        t(653041);
      var r,
        i,
        o = t(200651),
        l = t(192379),
        c = t(120356),
        u = t.n(c),
        a = t(442837),
        s = t(477690),
        d = t(481060),
        p = t(686546),
        I = t(706454),
        h = t(768581),
        _ = t(624138),
        f = t(689938),
        L = t(488107);
      ((i = r || (r = {}))[
        (i.SMALL = (0, _.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (i[(i.LARGE = (0, _.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let T = { [r.SMALL]: L.moreGuildsSmall, [r.LARGE]: L.moreGuildsLarge },
        A = { [r.SMALL]: L.iconSmall, [r.LARGE]: L.iconLarge };
      function g(e) {
        var n, t, i;
        let {
            application: c,
            mutualGuilds: s,
            mutualGuildShownMax: _ = 4,
            className: g,
            textVariant: m = "text-sm/normal",
            compact: O,
            guildIconSize: E = r.LARGE,
            guildsClassName: R,
          } = e,
          C = (0, a.e7)([I.default], () => I.default.locale),
          P = new Intl.ListFormat(C),
          N =
            null !==
              (t =
                null === (n = c.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== t
              ? t
              : 0,
          w =
            null !== (i = null == s ? void 0 : s.length) && void 0 !== i
              ? i
              : 0,
          D = Math.max(0, N - w),
          { shownMutualGuilds: U, hiddenMutualGuilds: v } = l.useMemo(() => {
            let e = [],
              n = [];
            return (
              null == s ||
                s.forEach((t) => {
                  e.length < _ && null != t.icon ? e.push(t) : n.push(t);
                }),
              e.length === _ &&
                n.length > 0 &&
                (n.push(e[_ - 1]), (e = e.slice(0, _ - 1))),
              { shownMutualGuilds: e, hiddenMutualGuilds: n }
            );
          }, [s, _]),
          M = v.length,
          S = (function (e, n, t, r, i) {
            if (0 === n && 0 === e) return null;
            if (n > 0 && 0 === t)
              return f.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
                mutualGuildCount: n,
              });
            let o =
                n > 0
                  ? f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS
                  : f.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
              l = new Intl.NumberFormat(r, {
                notation: i ? "compact" : "standard",
                compactDisplay: "short",
              });
            return o.format({
              guildCount: l.format(e),
              mutualGuildCount: n,
              nonMutualGuildCount: l.format(t),
            });
          })(N, w, D, C, O);
        return 0 === U.length && null == S
          ? null
          : (0, o.jsxs)("div", {
              className: u()(g, L.wrapper),
              children: [
                (0, o.jsx)("div", {
                  className: u()(L.icons, R),
                  children:
                    U.length > 0
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            U.map((e, n) => {
                              let t = n === U.length - 1 && 0 === M,
                                r = h.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  size: E,
                                  canAnimate: !1,
                                }),
                                i = (0, o.jsx)(d.Tooltip, {
                                  text: e.name,
                                  position: "top",
                                  children: (e) =>
                                    (0, o.jsx)("img", {
                                      ...e,
                                      className: u()(L.icon, A[E]),
                                      src: r,
                                      alt: "",
                                    }),
                                });
                              return t
                                ? (0, o.jsx)(l.Fragment, { children: i }, e.id)
                                : (0, o.jsx)(
                                    p.ZP,
                                    {
                                      className: L.iconMask,
                                      height: E,
                                      width: E,
                                      mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: i,
                                    },
                                    e.id,
                                  );
                            }),
                            M > 0
                              ? (0, o.jsx)(d.Tooltip, {
                                  text: f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format(
                                    {
                                      appNames: P.format(v.map((e) => e.name)),
                                    },
                                  ),
                                  position: "top",
                                  children: (e) =>
                                    (0, o.jsxs)("div", {
                                      ...e,
                                      className: u()(L.moreGuilds, T[E]),
                                      children: ["+", M],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, o.jsx)(d.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: E,
                          height: E,
                          className: L.defaultIcon,
                        }),
                }),
                null != S
                  ? (0, o.jsx)(d.Text, {
                      variant: m,
                      color: "header-secondary",
                      children: S,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(120356),
        o = t.n(i),
        l = t(481060),
        c = t(507716);
      function u(e) {
        let { loading: n, children: t } = e;
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
              children: t,
            }),
          ],
        });
      }
    },
    147890: function (e, n, t) {
      t.r(n),
        t.d(n, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return h;
          },
          goToAppDirectory: function () {
            return a;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return p;
          },
          goToApplicationStoreSku: function () {
            return I;
          },
          goToCategory: function () {
            return _;
          },
          replaceAppDirectoryURLWith: function () {
            return f;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var r = t(703656),
        i = t(626135),
        o = t(34674),
        l = t(132871),
        c = t(272242),
        u = t(981631);
      let a = (e) => {
          let {
              view: n = l.ApplicationDirectoryViews.HOME,
              guildId: t,
              applicationId: r,
              applicationSection: o,
              entrypoint: a,
              skuId: _,
            } = e,
            f = { ...a, pathname: window.location.pathname };
          switch (
            (i.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == f ? void 0 : f.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(f),
            null != t && (0, l.setGuildId)(t),
            n === l.ApplicationDirectoryViews.APPLICATION &&
              null == r &&
              (n = l.ApplicationDirectoryViews.HOME),
            n)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              s();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              h();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != o) {
                  if (
                    o === c.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    I({ applicationId: r, skuId: _ });
                    break;
                  }
                  p({ applicationId: r, section: o });
                  break;
                }
                d({ applicationId: r });
              }
          }
        },
        s = () => {
          let e = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: n } = e,
            t = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
        },
        p = (e) => {
          let { applicationId: n, section: t } = e,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), {
            state: i,
          });
        },
        I = (e) => {
          let { applicationId: n, skuId: t } = e,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), {
            state: i,
          });
        },
        h = function () {
          let {
              query: e,
              categoryId: n,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            i = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
          null != e && i.set("q", e),
            null != n && i.set("category_id", n.toString()),
            null != t && i.set("page", t.toString()),
            (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: i.toString(),
              state: o,
            });
        },
        _ = (e) => {
          let { categoryId: n } = e;
          h({ categoryId: null != n ? n : o.MU });
        },
        f = (e) => {
          let {
            location: { state: n },
          } = (0, r.s1)();
          (0, r.dL)(e, n);
        };
    },
    824606: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(653041),
        t(47120);
      var r = t(192379),
        i = t(442837),
        o = t(430824),
        l = t(973001);
      function c(e) {
        let { application: n, showMutualGuilds: t = !0 } = e,
          c = (0, i.e7)(
            [l.Z],
            () => l.Z.getGuildIdsForApplication(null == n ? void 0 : n.id),
            [n],
          ),
          u = (0, i.e7)([o.Z], () => o.Z.isLoaded());
        return r.useMemo(() => {
          let e = [];
          if (!u || !t || null == c || null == n) return e;
          for (let n of c) {
            let t = o.Z.getGuild(n);
            null != t && e.push(t);
          }
          return e;
        }, [u, c, n, t]);
      }
    },
    671533: function (e, n, t) {
      t(411104);
      var r,
        i,
        o = t(200651);
      t(192379);
      var l = t(120356),
        c = t.n(l),
        u = t(325767),
        a = t(865244);
      ((i = r || (r = {})).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (e) => {
        let {
          width: n = 24,
          height: t = 24,
          color: r = "currentColor",
          direction: i,
          foreground: l,
          className: s,
          title: d,
          ...p
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, u.Z)(p),
          width: n,
          height: t,
          className: c()(
            s,
            (function (e) {
              switch (e) {
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
                  throw Error("Invalid Direction ".concat(e));
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
//# sourceMappingURL=60902ee8cbd6c200c6a7.js.map
