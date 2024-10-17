"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56630"],
  {
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return E;
        },
        KQ: function () {
          return f;
        },
        MU: function () {
          return I;
        },
        RF: function () {
          return R;
        },
        m0: function () {
          return T;
        },
        rf: function () {
          return _;
        },
        tu: function () {
          return C;
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
        { API_ENDPOINT: A, CDN_HOST: O } = window.GLOBAL_ENV;
      function T(t) {
        return t.id === I;
      }
      function f() {
        return { id: I, name: p.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function C(t) {
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
      function E(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, u.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, u.x_)(),
            ).toString(),
          }).toString(),
          i = a.$k ? "webp" : "png";
        return null != O
          ? ""
              .concat(location.protocol, "//")
              .concat(O, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(i, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(A)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, i),
                "?",
              )
              .concat(r);
      }
      function _() {
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
      let w = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function R(t) {
        switch (t.type) {
          case c.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case c.ee.YOUTUBE:
            let r = w(t.url);
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
            return O;
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
            return A;
          },
          goToCategory: function () {
            return T;
          },
          replaceAppDirectoryURLWith: function () {
            return f;
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
              skuId: T,
            } = t,
            f = { ...a, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == f ? void 0 : f.name,
            }),
            (0, c.resetApplicationDirectoryHistory)(),
            (0, c.setEntrypoint)(f),
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
              O();
              break;
            case c.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != i) {
                  if (
                    i === u.ApplicationDirectoryProfileSections.STORE &&
                    null != T
                  ) {
                    A({ applicationId: r, skuId: T });
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
        A = (t) => {
          let { applicationId: e, skuId: n } = t,
            o = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: o,
          });
        },
        O = function () {
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
        T = (t) => {
          let { categoryId: e } = t;
          O({ categoryId: null != e ? e : i.MU });
        },
        f = (t) => {
          let {
            location: { state: e },
          } = (0, r.s1)();
          (0, r.dL)(t, e);
        };
    },
  },
]);
//# sourceMappingURL=597cc6dd91eac7753dba.js.map
