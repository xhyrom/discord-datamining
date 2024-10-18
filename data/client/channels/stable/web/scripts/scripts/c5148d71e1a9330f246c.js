"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57358"],
  {
    902294: function (n) {
      n.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
    34674: function (n, e, t) {
      t.d(e, {
        $_: function () {
          return f;
        },
        KQ: function () {
          return L;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return g;
        },
        m0: function () {
          return _;
        },
        rf: function () {
          return A;
        },
        tu: function () {
          return T;
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
      function _(n) {
        return n.id === p;
      }
      function L() {
        return { id: p, name: d.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function T(n) {
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
      function f(n) {
        let { itemId: e, hash: t } = n,
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
              .concat(e, "/")
              .concat(t, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(I)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, t, o),
                "?",
              )
              .concat(r);
      }
      function A() {
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let t in n) {
          let r = n[t];
          e.searchParams.set(t, r);
        }
        let t = e.pathname + e.search,
          i = (0, r.Ui)(t, !1);
        (0, u.uL)(i);
      }
      let m = (n) => {
        if (null == n) return null;
        let e = n.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function g(n) {
        switch (n.type) {
          case l.ee.MEDIA_PROXY:
            var e;
            let t = null !== (e = n.proxy_url) && void 0 !== e ? e : n.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: t };
          case l.ee.YOUTUBE:
            let r = m(n.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", n), null;
      }
    },
    924489: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
        x: function () {
          return r;
        },
      }),
        t(653041);
      var r,
        i,
        o = t(735250),
        l = t(470079),
        c = t(120356),
        u = t.n(c),
        a = t(477690),
        s = t(481060),
        d = t(686546),
        p = t(768581),
        I = t(624138),
        h = t(689938),
        _ = t(488107);
      ((i = r || (r = {}))[
        (i.SMALL = (0, I.Mg)(a.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (i[(i.LARGE = (0, I.Mg)(a.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let L = { [r.SMALL]: _.moreGuildsSmall, [r.LARGE]: _.moreGuildsLarge },
        T = { [r.SMALL]: _.iconSmall, [r.LARGE]: _.iconLarge };
      function f(n) {
        var e, t, i;
        let {
            application: c,
            mutualGuilds: a,
            mutualGuildShownMax: I = 4,
            className: f,
            textVariant: A = "text-sm/normal",
            compact: m,
            guildIconSize: g = r.LARGE,
          } = n,
          O = new Intl.ListFormat("en-US"),
          E =
            null !==
              (t =
                null === (e = c.directory_entry) || void 0 === e
                  ? void 0
                  : e.guild_count) && void 0 !== t
              ? t
              : 0,
          R =
            null !== (i = null == a ? void 0 : a.length) && void 0 !== i
              ? i
              : 0,
          C = Math.max(0, E - R),
          { shownMutualGuilds: P, hiddenMutualGuilds: N } = l.useMemo(() => {
            let n = [],
              e = [];
            return (
              null == a ||
                a.forEach((t) => {
                  n.length < I && null != t.icon ? n.push(t) : e.push(t);
                }),
              n.length === I &&
                e.length > 0 &&
                (e.push(n[I - 1]), (n = n.slice(0, I - 1))),
              { shownMutualGuilds: n, hiddenMutualGuilds: e }
            );
          }, [a, I]),
          w = N.length,
          U = (function (n, e, t, r) {
            if (0 === e && 0 === n) return null;
            if (e > 0 && 0 === t)
              return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
                mutualGuildCount: e,
              });
            let i =
                e > 0
                  ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS
                  : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
              o = new Intl.NumberFormat("en-US", {
                notation: r ? "compact" : "standard",
                compactDisplay: "short",
              });
            return i.format({
              guildCount: o.format(n),
              mutualGuildCount: e,
              nonMutualGuildCount: o.format(t),
            });
          })(E, R, C, m);
        return 0 === P.length && null == U
          ? null
          : (0, o.jsxs)("div", {
              className: u()(f, _.wrapper),
              children: [
                (0, o.jsx)("div", {
                  className: _.icons,
                  children:
                    P.length > 0
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            P.map((n, e) => {
                              let t = e === P.length - 1 && 0 === w,
                                r = p.ZP.getGuildIconURL({
                                  id: n.id,
                                  icon: n.icon,
                                  size: g,
                                  canAnimate: !1,
                                }),
                                i = (0, o.jsx)(s.Tooltip, {
                                  text: n.name,
                                  position: "top",
                                  children: (n) =>
                                    (0, o.jsx)("img", {
                                      ...n,
                                      className: u()(_.icon, T[g]),
                                      src: r,
                                      alt: "",
                                    }),
                                });
                              return t
                                ? (0, o.jsx)(l.Fragment, { children: i }, n.id)
                                : (0, o.jsx)(
                                    d.ZP,
                                    {
                                      className: _.iconMask,
                                      height: g,
                                      width: g,
                                      mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: i,
                                    },
                                    n.id,
                                  );
                            }),
                            w > 0
                              ? (0, o.jsx)(s.Tooltip, {
                                  text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format(
                                    {
                                      appNames: O.format(N.map((n) => n.name)),
                                    },
                                  ),
                                  position: "top",
                                  children: (n) =>
                                    (0, o.jsxs)("div", {
                                      ...n,
                                      className: u()(_.moreGuilds, L[g]),
                                      children: ["+", w],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, o.jsx)(s.CompassIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: g,
                          height: g,
                          className: _.defaultIcon,
                        }),
                }),
                null != U
                  ? (0, o.jsx)(s.Text, {
                      variant: A,
                      color: "header-secondary",
                      children: U,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        l = t(481060),
        c = t(507716);
      function u(n) {
        let { loading: e, children: t } = n;
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
              children: t,
            }),
          ],
        });
      }
    },
    147890: function (n, e, t) {
      t.r(e),
        t.d(e, {
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
            return L;
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
      let a = (n) => {
          let {
              view: e = l.ApplicationDirectoryViews.HOME,
              guildId: t,
              applicationId: r,
              applicationSection: o,
              entrypoint: a,
              skuId: _,
            } = n,
            L = { ...a, pathname: window.location.pathname };
          switch (
            (i.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == L ? void 0 : L.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(L),
            null != t && (0, l.setGuildId)(t),
            e === l.ApplicationDirectoryViews.APPLICATION &&
              null == r &&
              (e = l.ApplicationDirectoryViews.HOME),
            e)
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
          let n = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: n });
        },
        d = (n) => {
          let { applicationId: e } = n,
            t = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: t });
        },
        p = (n) => {
          let { applicationId: e, section: t } = n,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, t), {
            state: i,
          });
        },
        I = (n) => {
          let { applicationId: e, skuId: t } = n,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, t), {
            state: i,
          });
        },
        h = function () {
          let {
              query: n,
              categoryId: e,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            i = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
          null != n && i.set("q", n),
            null != e && i.set("category_id", e.toString()),
            null != t && i.set("page", t.toString()),
            (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: i.toString(),
              state: o,
            });
        },
        _ = (n) => {
          let { categoryId: e } = n;
          h({ categoryId: null != e ? e : o.MU });
        },
        L = (n) => {
          let {
            location: { state: e },
          } = (0, r.s1)();
          (0, r.dL)(n, e);
        };
    },
    491576: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      }),
        t(653041),
        t(47120);
      var r = t(470079),
        i = t(442837),
        o = t(430824),
        l = t(973001);
      function c(n) {
        let { application: e, showMutualGuilds: t = !0 } = n,
          c = (0, i.e7)(
            [l.Z],
            () => l.Z.getGuildIdsForApplication(null == e ? void 0 : e.id),
            [e],
          ),
          u = (0, i.e7)([o.Z], () => o.Z.isLoaded());
        return r.useMemo(() => {
          let n = [];
          if (!u || !t || null == c || null == e) return n;
          for (let e of c) {
            let t = o.Z.getGuild(e);
            null != t && n.push(t);
          }
          return n;
        }, [u, c, e, t]);
      }
    },
    671533: function (n, e, t) {
      t(411104);
      var r,
        i,
        o = t(735250);
      t(470079);
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
      let s = (n) => {
        let {
          width: e = 24,
          height: t = 24,
          color: r = "currentColor",
          direction: i,
          foreground: l,
          className: s,
          title: d,
          ...p
        } = n;
        return (0, o.jsxs)("svg", {
          ...(0, u.Z)(p),
          width: e,
          height: t,
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
      (s.Directions = r), (e.Z = s);
    },
  },
]);
//# sourceMappingURL=c5148d71e1a9330f246c.js.map
