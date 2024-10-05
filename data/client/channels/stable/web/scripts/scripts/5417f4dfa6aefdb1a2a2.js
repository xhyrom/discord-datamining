"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56630"],
  {
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return _;
        },
        KQ: function () {
          return O;
        },
        MU: function () {
          return p;
        },
        m0: function () {
          return C;
        },
        rf: function () {
          return f;
        },
        tu: function () {
          return T;
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
        c = n(134432),
        a = n(703656),
        u = n(768581),
        l = n(981631),
        s = n(689938);
      let p = 0,
        { API_ENDPOINT: I, CDN_HOST: A } = window.GLOBAL_ENV;
      function C(t) {
        return t.id === p;
      }
      function O() {
        return { id: p, name: s.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function T(t) {
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
      function _(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          i = u.$k ? "webp" : "png";
        return null != A
          ? ""
              .concat(location.protocol, "//")
              .concat(A, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(i, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(I)
              .concat(
                l.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, i),
                "?",
              )
              .concat(r);
      }
      function f() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          o = (0, r.Ui)(n, !1);
        (0, a.uL)(o);
      }
    },
    147890: function (t, e, n) {
      n.r(e),
        n.d(e, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return C;
          },
          goToAppDirectory: function () {
            return l;
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
            return O;
          },
          replaceAppDirectoryURLWith: function () {
            return T;
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
        a = n(272242),
        u = n(981631);
      let l = (t) => {
          let {
              view: e = c.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: r,
              applicationSection: i,
              entrypoint: l,
              skuId: O,
            } = t,
            T = { ...l, pathname: window.location.pathname };
          switch (
            (o.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == T ? void 0 : T.name,
            }),
            (0, c.resetApplicationDirectoryHistory)(),
            (0, c.setEntrypoint)(T),
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
              C();
              break;
            case c.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != i) {
                  if (
                    i === a.ApplicationDirectoryProfileSections.STORE &&
                    null != O
                  ) {
                    A({ applicationId: r, skuId: O });
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
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        p = (t) => {
          let { applicationId: e } = t,
            n = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: n });
        },
        I = (t) => {
          let { applicationId: e, section: n } = t,
            o = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
            state: o,
          });
        },
        A = (t) => {
          let { applicationId: e, skuId: n } = t,
            o = { previousView: (0, c.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: o,
          });
        },
        C = function () {
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
            (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: o.toString(),
              state: i,
            });
        },
        O = (t) => {
          let { categoryId: e } = t;
          C({ categoryId: null != e ? e : i.MU });
        },
        T = (t) => {
          let {
            location: { state: e },
          } = (0, r.s1)();
          (0, r.dL)(t, e);
        };
    },
  },
]);
//# sourceMappingURL=5417f4dfa6aefdb1a2a2.js.map
