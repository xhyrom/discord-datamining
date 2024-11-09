"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57358"],
  {
    902294: function (n) {
      n.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    34674: function (n, t, e) {
      e.d(t, {
        $_: function () {
          return L;
        },
        KQ: function () {
          return m;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return T;
        },
        m0: function () {
          return f;
        },
        rf: function () {
          return A;
        },
        tu: function () {
          return g;
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
        { API_ENDPOINT: h, CDN_HOST: I } = window.GLOBAL_ENV;
      function f(n) {
        return n.id === p;
      }
      function m() {
        return { id: p, name: d.intl.string(d.t.E407b2) };
      }
      function g(n) {
        switch (n.id) {
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
      function L(n) {
        let { itemId: t, hash: e } = n,
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
              .concat(t, "/")
              .concat(e, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(h)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, e, o),
                "?",
              )
              .concat(r);
      }
      function A() {
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let e in n) {
          let r = n[e];
          t.searchParams.set(e, r);
        }
        let e = t.pathname + t.search,
          i = (0, r.Ui)(e, !1);
        (0, u.uL)(i);
      }
      let E = (n) => {
        if (null == n) return null;
        let t = n.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function T(n) {
        switch (n.type) {
          case l.ee.MEDIA_PROXY:
            var t;
            let e = null !== (t = n.proxy_url) && void 0 !== t ? t : n.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: e };
          case l.ee.YOUTUBE:
            let r = E(n.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", n), null;
      }
    },
    924489: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
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
        h = e(706454),
        I = e(768581),
        f = e(624138),
        m = e(388032),
        g = e(488107);
      ((i = r || (r = {}))[
        (i.SMALL = (0, f.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (i[(i.LARGE = (0, f.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let L = { [r.SMALL]: g.moreGuildsSmall, [r.LARGE]: g.moreGuildsLarge },
        A = { [r.SMALL]: g.iconSmall, [r.LARGE]: g.iconLarge };
      function E(n) {
        var t, e, i;
        let {
            application: c,
            mutualGuilds: s,
            mutualGuildShownMax: f = 4,
            className: E,
            textVariant: T = "text-sm/normal",
            compact: _,
            guildIconSize: R = r.LARGE,
            guildsClassName: O,
          } = n,
          w = (0, a.e7)([h.default], () => h.default.locale),
          C = new Intl.ListFormat(w),
          N =
            null !==
              (e =
                null === (t = c.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== e
              ? e
              : 0,
          P =
            null !== (i = null == s ? void 0 : s.length) && void 0 !== i
              ? i
              : 0,
          v = Math.max(0, N - P),
          { shownMutualGuilds: S, hiddenMutualGuilds: D } = l.useMemo(() => {
            let n = [],
              t = [];
            return (
              null == s ||
                s.forEach((e) => {
                  n.length < f && null != e.icon ? n.push(e) : t.push(e);
                }),
              n.length === f &&
                t.length > 0 &&
                (t.push(n[f - 1]), (n = n.slice(0, f - 1))),
              { shownMutualGuilds: n, hiddenMutualGuilds: t }
            );
          }, [s, f]),
          G = D.length,
          y = (function (n, t, e, r, i) {
            if (0 === t && 0 === n) return null;
            if (t > 0 && 0 === e)
              return m.intl.formatToPlainString(m.t.pnzE1t, {
                mutualGuildCount: t,
              });
            let o = t > 0 ? m.t.YR8PSE : m.t.GQjq6e,
              l = new Intl.NumberFormat(r, {
                notation: i ? "compact" : "standard",
                compactDisplay: "short",
              });
            return m.intl.formatToPlainString(o, {
              guildCount: l.format(n),
              mutualGuildCount: t,
              nonMutualGuildCount: l.format(e),
            });
          })(N, P, v, w, _);
        return 0 === S.length && null == y
          ? null
          : (0, o.jsxs)("div", {
              className: u()(E, g.wrapper),
              children: [
                (0, o.jsx)("div", {
                  className: u()(g.icons, O),
                  children:
                    S.length > 0
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            S.map((n, t) => {
                              let e = t === S.length - 1 && 0 === G,
                                r = I.ZP.getGuildIconURL({
                                  id: n.id,
                                  icon: n.icon,
                                  size: R,
                                  canAnimate: !1,
                                }),
                                i = (0, o.jsx)(d.Tooltip, {
                                  text: n.name,
                                  position: "top",
                                  children: (n) =>
                                    (0, o.jsx)("img", {
                                      ...n,
                                      className: u()(g.icon, A[R]),
                                      src: r,
                                      alt: "",
                                    }),
                                });
                              return e
                                ? (0, o.jsx)(l.Fragment, { children: i }, n.id)
                                : (0, o.jsx)(
                                    p.ZP,
                                    {
                                      className: g.iconMask,
                                      height: R,
                                      width: R,
                                      mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: i,
                                    },
                                    n.id,
                                  );
                            }),
                            G > 0
                              ? (0, o.jsx)(d.Tooltip, {
                                  text: m.intl.formatToPlainString(m.t.m6oRrK, {
                                    appNames: C.format(D.map((n) => n.name)),
                                  }),
                                  position: "top",
                                  children: (n) =>
                                    (0, o.jsxs)("div", {
                                      ...n,
                                      className: u()(g.moreGuilds, L[R]),
                                      children: ["+", G],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, o.jsx)(d.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: R,
                          height: R,
                          className: g.defaultIcon,
                        }),
                }),
                null != y
                  ? (0, o.jsx)(d.Text, {
                      variant: T,
                      color: "header-secondary",
                      children: y,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (n, t, e) {
      e.d(t, {
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
      function u(n) {
        let { loading: t, children: e } = n;
        return (0, r.jsxs)("div", {
          className: c.container,
          children: [
            t
              ? (0, r.jsx)("div", {
                  className: c.spinnerContainer,
                  children: (0, r.jsx)(l.Spinner, {
                    className: c.spinner,
                    type: l.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, r.jsx)("div", {
              className: o()({ [c.loading]: t }),
              children: e,
            }),
          ],
        });
      }
    },
    147890: function (n, t, e) {
      e.r(t),
        e.d(t, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return I;
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
            return h;
          },
          goToCategory: function () {
            return f;
          },
          replaceAppDirectoryURLWith: function () {
            return m;
          },
        }),
        e(610138),
        e(216116),
        e(78328),
        e(815648),
        e(47120);
      var r = e(703656),
        i = e(626135),
        o = e(34674),
        l = e(132871),
        c = e(272242),
        u = e(981631);
      let a = (n) => {
          let {
              view: t = l.ApplicationDirectoryViews.HOME,
              guildId: e,
              applicationId: r,
              applicationSection: o,
              entrypoint: a,
              skuId: f,
            } = n,
            m = { ...a, pathname: window.location.pathname };
          switch (
            (i.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == m ? void 0 : m.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(m),
            null != e && (0, l.setGuildId)(e),
            t === l.ApplicationDirectoryViews.APPLICATION &&
              null == r &&
              (t = l.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              s();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              I();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != o) {
                  if (
                    o === c.ApplicationDirectoryProfileSections.STORE &&
                    null != f
                  ) {
                    h({ applicationId: r, skuId: f });
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
          let n = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: n });
        },
        d = (n) => {
          let { applicationId: t } = n,
            e = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: e });
        },
        p = (n) => {
          let { applicationId: t, section: e } = n,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, e), {
            state: i,
          });
        },
        h = (n) => {
          let { applicationId: t, skuId: e } = n,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, e), {
            state: i,
          });
        },
        I = function () {
          let {
              query: n,
              categoryId: t,
              page: e,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            i = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
          null != n && i.set("q", n),
            null != t && i.set("category_id", t.toString()),
            null != e && i.set("page", e.toString()),
            (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: i.toString(),
              state: o,
            });
        },
        f = (n) => {
          let { categoryId: t } = n;
          I({ categoryId: null != t ? t : o.MU });
        },
        m = (n) => {
          let {
            location: { state: t },
          } = (0, r.s1)();
          (0, r.dL)(n, t);
        };
    },
    824606: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      }),
        e(653041),
        e(47120);
      var r = e(192379),
        i = e(442837),
        o = e(430824),
        l = e(973001);
      function c(n) {
        let { application: t, showMutualGuilds: e = !0 } = n,
          c = (0, i.e7)(
            [l.Z],
            () => l.Z.getGuildIdsForApplication(null == t ? void 0 : t.id),
            [t],
          ),
          u = (0, i.e7)([o.Z], () => o.Z.isLoaded());
        return r.useMemo(() => {
          let n = [];
          if (!u || !e || null == c || null == t) return n;
          for (let t of c) {
            let e = o.Z.getGuild(t);
            null != e && n.push(e);
          }
          return n;
        }, [u, c, t, e]);
      }
    },
    671533: function (n, t, e) {
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
      let s = (n) => {
        let {
          width: t = 24,
          height: e = 24,
          color: r = "currentColor",
          direction: i,
          foreground: l,
          className: s,
          title: d,
          ...p
        } = n;
        return (0, o.jsxs)("svg", {
          ...(0, u.Z)(p),
          width: t,
          height: e,
          className: c()(
            s,
            (function (n) {
              switch (n) {
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
                  throw Error("Invalid Direction ".concat(n));
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
      (s.Directions = r), (t.Z = s);
    },
  },
]);
//# sourceMappingURL=a09607a827ca0aec7b9e.js.map
