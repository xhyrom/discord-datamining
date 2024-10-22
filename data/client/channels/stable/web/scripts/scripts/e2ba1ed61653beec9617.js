"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81463"],
  {
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return w;
        },
        KQ: function () {
          return A;
        },
        MU: function () {
          return I;
        },
        RF: function () {
          return E;
        },
        m0: function () {
          return _;
        },
        rf: function () {
          return R;
        },
        tu: function () {
          return O;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var r = n(860911),
        o = n(477690),
        i = n(481060),
        c = n(911969),
        u = n(134432),
        l = n(703656),
        a = n(768581),
        s = n(981631),
        p = n(689938);
      let I = 0,
        { API_ENDPOINT: T, CDN_HOST: f } = window.GLOBAL_ENV;
      function _(t) {
        return t.id === I;
      }
      function A() {
        return { id: I, name: p.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function O(t) {
        switch (t.id) {
          case 0:
            return i.GlobeEarthIcon;
          case 4:
            return i.TvIcon;
          case 5:
            return i.AnalyticsIcon;
          case 6:
            return i.GameControllerIcon;
          case 8:
            break;
          case 9:
            return i.FriendsIcon;
          case 10:
            return i.WrenchIcon;
        }
        return i.AsteriskIcon;
      }
      function w(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, u.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, u.x_)(),
            ).toString(),
          }).toString(),
          i = a.$k ? "webp" : "png";
        return null != f
          ? ""
              .concat(location.protocol, "//")
              .concat(f, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(i, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(T)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, i),
                "?",
              )
              .concat(r);
      }
      function R() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          o = (0, r.Ui)(n, !1);
        (0, l.uL)(o);
      }
      let h = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function E(t) {
        switch (t.type) {
          case c.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case c.ee.YOUTUBE:
            let r = h(t.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    147890: function (t, e, n) {
      n.r(e),
        n.d(e, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return f;
          },
          goToAppDirectory: function () {
            return a;
          },
          goToApplication: function () {
            return p;
          },
          goToApplicationSection: function () {
            return I;
          },
          goToApplicationStoreSku: function () {
            return T;
          },
          goToCategory: function () {
            return _;
          },
          replaceAppDirectoryURLWith: function () {
            return A;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(703656),
        o = n(626135),
        i = n(34674),
        c = n(132871),
        u = n(272242),
        l = n(981631);
      let a = (t) => {
          let {
              view: e = c.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: r,
              applicationSection: i,
              entrypoint: a,
              skuId: _,
            } = t,
            A = { ...a, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == A ? void 0 : A.name,
            }),
            (0, c.resetApplicationDirectoryHistory)(),
            (0, c.setEntrypoint)(A),
            null != n && (0, c.setGuildId)(n),
            e === c.ApplicationDirectoryViews.APPLICATION &&
              null == r &&
              (e = c.ApplicationDirectoryViews.HOME),
            e)
          ) {
            case c.ApplicationDirectoryViews.HOME:
              s();
              break;
            case c.ApplicationDirectoryViews.SEARCH:
              f();
              break;
            case c.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != i) {
                  if (
                    i === u.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    T({ applicationId: r, skuId: _ });
                    break;
                  }
                  I({ applicationId: r, section: i });
                  break;
                }
                p({ applicationId: r });
              }
          }
        },
        s = () => {
          let t = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        p = (t) => {
          let { applicationId: e } = t,
            n = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: n });
        },
        I = (t) => {
          let { applicationId: e, section: n } = t,
            o = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
            state: o,
          });
        },
        T = (t) => {
          let { applicationId: e, skuId: n } = t,
            o = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: o,
          });
        },
        f = function () {
          let {
              query: t,
              categoryId: e,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = new URLSearchParams(),
            i = { previousView: (0, c.getCurrentView)() };
          null != t && o.set("q", t),
            null != e && o.set("category_id", e.toString()),
            null != n && o.set("page", n.toString()),
            (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: o.toString(),
              state: i,
            });
        },
        _ = (t) => {
          let { categoryId: e } = t;
          f({ categoryId: null != e ? e : i.MU });
        },
        A = (t) => {
          let {
            location: { state: e },
          } = (0, r.s1)();
          (0, r.dL)(t, e);
        };
    },
    671533: function (t, e, n) {
      n(411104);
      var r,
        o,
        i = n(200651);
      n(192379);
      var c = n(120356),
        u = n.n(c),
        l = n(325767),
        a = n(865244);
      ((o = r || (r = {})).LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.UP = "UP"),
        (o.DOWN = "DOWN"),
        (o.UP_LEFT = "UP_LEFT"),
        (o.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (t) => {
        let {
          width: e = 24,
          height: n = 24,
          color: r = "currentColor",
          direction: o,
          foreground: c,
          className: s,
          title: p,
          ...I
        } = t;
        return (0, i.jsxs)("svg", {
          ...(0, l.Z)(I),
          width: e,
          height: n,
          className: u()(
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
            })(o),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != p ? (0, i.jsx)("title", { children: p }) : null,
            (0, i.jsx)("polygon", {
              className: c,
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
    865244: function (t, e, n) {
      t.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=e2ba1ed61653beec9617.js.map
