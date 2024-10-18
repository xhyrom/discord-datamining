"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69729"],
  {
    969728: function (t) {
      t.exports = "/assets/368a2969db80ee62ac23.svg";
    },
    147865: function (t, e, n) {
      n.d(e, {
        ZP: function () {
          return o;
        },
        lY: function () {
          return r;
        },
      });
      var a = n(689938);
      function o(t) {
        return t > 0
          ? a.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
              count: t,
            })
          : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
      }
      function r(t) {
        return t > 0
          ? "1-".concat(t)
          : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
      }
    },
    778569: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(470079),
        o = n(81063);
      let r = ["embedded_cover", "embedded_background"];
      function c(t) {
        let { applicationId: e, size: n, names: c = r } = t,
          [i, u] = a.useState(null),
          [l, s] = a.useState(!0),
          E = (0, o.getAssetImage)(e, i, n);
        return (
          a.useEffect(() => {
            (0, o.getAssets)(e).then((t) => {
              for (let [e, n] of (s(!1), Object.entries(t)))
                if (null != n && "" !== n.id && c.includes(n.name)) {
                  u(n.id);
                  return;
                }
            });
          }, [e]),
          { url: E, state: l ? "loading" : null != E ? "fetched" : "not-found" }
        );
      }
    },
    182906: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var a = n(735250),
        o = n(470079),
        r = n(558522),
        c = n(941958);
      function i(t) {
        let {
            imageBackground: e,
            applicationName: n,
            imageClassName: i,
            imageNotFoundClassName: u,
          } = t,
          [l, s] = o.useState(!1);
        return "not-found" === e.state || l
          ? (0, a.jsx)("div", {
              className: u,
              children: (0, a.jsx)(r.Z, { className: c.brokenImageIcon }),
            })
          : "loading" === e.state
            ? null
            : (0, a.jsx)("img", {
                alt: n,
                className: i,
                src: e.url,
                onError: () => s(!0),
              });
      }
    },
    743161: function (t, e, n) {
      n.r(e);
      var a = n(735250),
        o = n(470079),
        r = n(442837),
        c = n(481060),
        i = n(541099),
        u = n(827498),
        l = n(421591),
        s = n(314734),
        E = n(689938),
        d = n(574455);
      e.default = o.memo(function (t) {
        let { channel: e, ...n } = t,
          C = (0, r.e7)([i.Z], () => i.Z.shouldShowModal());
        return (
          o.useEffect(() => {
            !C && (0, c.closeModalInAllContexts)(s.e9);
          }),
          (0, a.jsx)("span", {
            style: s.u$,
            children: (0, a.jsx)(c.ModalRoot, {
              className: d.root,
              "aria-label": E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...n,
              children: (0, a.jsx)(l.Z, { channel: e, entrypoint: u._b.VOICE }),
            }),
          })
        );
      });
    },
    399654: function (t, e, n) {
      n.d(e, {
        a: function () {
          return s;
        },
      });
      var a = n(544891),
        o = n(570140),
        r = n(706454),
        c = n(70956),
        i = n(844439),
        u = n(981631);
      let l = 10 * c.Z.Millis.MINUTE;
      async function s(t) {
        let { channelId: e, location: n, withCommands: c } = t,
          s = Date.now(),
          E = i.ZP.getFetchState({
            location: n,
            channelId: e,
            withCommands: c,
          }),
          d = i.ZP.getLastFetchTimeMs({
            location: n,
            channelId: e,
            withCommands: c,
          });
        if (E !== i.M.FETCHING && (null == d || !(d + l > s))) {
          o.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: e,
            withCommands: c,
          });
          try {
            var C;
            let t = await a.tn.get({
              url: u.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: r.default.locale,
                channel_id: e,
                location: n,
                with_commands: c,
              },
            });
            o.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: n,
              channelId: e,
              recommendations: null !== (C = t.body) && void 0 !== C ? C : [],
              withCommands: c,
            });
          } catch (t) {
            o.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
              location: n,
              channelId: e,
              withCommands: c,
            });
          }
        }
      }
    },
    844439: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      var a,
        o,
        r,
        c,
        i,
        u,
        l = n(442837),
        s = n(570140);
      ((a = i || (i = {}))[(a.FETCHING = 0)] = "FETCHING"),
        (a[(a.FETCHED = 1)] = "FETCHED"),
        (a[(a.ERROR = 2)] = "ERROR");
      let E = {},
        d = {},
        C = {};
      function T(t) {
        let { location: e, channelId: n, withCommands: a } = t;
        return "location:"
          .concat(e, " channelId:")
          .concat("0", " withCommands:")
          .concat(a);
      }
      let _ = Object.freeze([]);
      class f extends (u = l.ZP.Store) {
        getLastFetchTimeMs(t) {
          let { location: e, channelId: n, withCommands: a } = t;
          return C[T({ location: e, channelId: n, withCommands: a })];
        }
        getFetchState(t) {
          let { location: e, channelId: n, withCommands: a } = t;
          return d[T({ location: e, channelId: n, withCommands: a })];
        }
        getRecommendations(t) {
          var e;
          let { location: n, channelId: a, withCommands: o } = t;
          return null !==
            (e = E[T({ location: n, channelId: a, withCommands: o })]) &&
            void 0 !== e
            ? e
            : _;
        }
      }
      (c = void 0),
        (r = "displayName") in (o = f)
          ? Object.defineProperty(o, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[r] = c),
        (e.ZP = new f(s.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (t) {
            let { location: e, channelId: n, withCommands: a } = t;
            d = {
              ...d,
              [T({ location: e, channelId: n, withCommands: a })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (t) {
            let {
                recommendations: e,
                location: n,
                channelId: a,
                withCommands: o,
              } = t,
              r = T({ location: n, channelId: a, withCommands: o });
            (E = { ...E, [r]: e }), (d = { ...d, [r]: 1 });
            let c = Date.now();
            C = { ...C, [r]: c };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (t) {
            let { location: e, channelId: n, withCommands: a } = t;
            d = {
              ...d,
              [T({ location: e, channelId: n, withCommands: a })]: 2,
            };
          },
        }));
    },
    583027: function (t, e, n) {
      n.d(e, {
        Mo: function () {
          return i;
        },
        SC: function () {
          return l;
        },
        _U: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(652874),
        o = n(868888),
        r = n(731965);
      let c = (0, a.Z)(
        (0, o.XR)(() => ({ commandAnalyticsContext: new Map() })),
      );
      function i(t) {
        let { command: e, location: n, sectionName: a } = t,
          { commandAnalyticsContext: o } = c.getState(),
          i = o.get(e);
        if (null == i || i.location !== n || i.sectionName !== a) {
          let t = new Map(o);
          t.set(e, { location: n, sectionName: a }),
            (0, r.j)(() => c.setState({ commandAnalyticsContext: t }));
        }
      }
      function u(t) {
        let { commandAnalyticsContext: e } = c.getState();
        return e.get(t);
      }
      function l(t) {
        let { commandAnalyticsContext: e } = c.getState();
        if (e.has(t)) {
          let n = new Map(e);
          n.delete(t),
            (0, r.j)(() => c.setState({ commandAnalyticsContext: n }));
        }
      }
    },
    881998: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      var a,
        o,
        r,
        c,
        i,
        u,
        l = n(442837),
        s = n(570140),
        E = n(592125),
        d = n(757266),
        C = n(375954);
      ((a = i || (i = {})).NOT_FETCHED = "NOT_FETCHED"),
        (a.FETCHING = "FETCHING"),
        (a.FETCHED = "FETCHED");
      let T = null,
        _ = "NOT_FETCHED";
      class f extends (u = l.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, d.Z, C.Z);
        }
        getApps() {
          return T;
        }
        getFetchState() {
          return _;
        }
      }
      (c = "AuthorizedAppsStore"),
        (r = "displayName") in (o = f)
          ? Object.defineProperty(o, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[r] = c),
        (e.Z = new f(s.Z, {
          USER_AUTHORIZED_APPS_REQUEST: function () {
            _ = "FETCHING";
          },
          USER_AUTHORIZED_APPS_UPDATE: function (t) {
            (_ = "FETCHED"), (T = t.apps);
          },
        }));
    },
    558522: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(325767);
      function r(t) {
        let {
          width: e = 24,
          height: n = 24,
          color: r = "currentColor",
          foreground: c,
          ...i
        } = t;
        return (0, a.jsx)("svg", {
          ...(0, o.Z)(i),
          width: e,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            className: c,
            fill: r,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    892814: function (t, e, n) {
      var a, o;
      n.d(e, {
        I: function () {
          return a;
        },
      }),
        ((o = a || (a = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (o.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (o.CONTEXTUAL_IMAGE = "contextual_image");
    },
    941958: function (t, e, n) {
      t.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
    },
    574455: function (t, e, n) {
      t.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=6c758e84336fc201b759.js.map
