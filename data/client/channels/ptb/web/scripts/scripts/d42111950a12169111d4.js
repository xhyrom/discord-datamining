"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72106"],
  {
    969728: function (t) {
      t.exports = "/assets/368a2969db80ee62ac23.svg";
    },
    147865: function (t, e, n) {
      n.d(e, {
        ZP: function () {
          return a;
        },
        lY: function () {
          return r;
        },
      });
      var o = n(388032);
      function a(t) {
        return t > 0
          ? o.intl.formatToPlainString(o.t["p/YmkZ"], { count: t })
          : o.intl.string(o.t.s1vQIC);
      }
      function r(t) {
        return t > 0 ? "1-".concat(t) : o.intl.string(o.t.zMNEiI);
      }
    },
    778569: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var o = n(192379),
        a = n(81063);
      let r = ["embedded_cover", "embedded_background"];
      function c(t) {
        let { applicationId: e, size: n, names: c = r } = t,
          [i, u] = o.useState(null),
          [l, s] = o.useState(!0),
          E = (0, a.getAssetImage)(e, i, n);
        return (
          o.useEffect(() => {
            (0, a.getAssets)(e).then((t) => {
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
      var o = n(200651),
        a = n(192379),
        r = n(558522),
        c = n(941958);
      function i(t) {
        let {
            imageBackground: e,
            applicationName: n,
            imageClassName: i,
            imageNotFoundClassName: u,
          } = t,
          [l, s] = a.useState(!1);
        return "not-found" === e.state || l
          ? (0, o.jsx)("div", {
              className: u,
              children: (0, o.jsx)(r.Z, { className: c.brokenImageIcon }),
            })
          : "loading" === e.state
            ? null
            : (0, o.jsx)("img", {
                alt: n,
                className: i,
                src: e.url,
                onError: () => s(!0),
              });
      }
    },
    890280: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var o = n(192379),
        a = n(442837),
        r = n(110924),
        c = n(317381);
      function i(t) {
        let {
            applicationId: e,
            channelId: n,
            launchingComponentId: i,
            onSubmissionComplete: u,
          } = t,
          l = (0, a.e7)([c.ZP], () => c.ZP.getLaunchState(e, n)),
          s = null != l && l.isLaunching && l.componentId === i,
          E = (0, r.Z)(s);
        return (
          o.useEffect(() => {
            !s && E && (null == u || u());
          }, [s, E, u]),
          { submitting: s, wasSubmitting: E }
        );
      }
    },
    743161: function (t, e, n) {
      n.r(e);
      var o = n(200651),
        a = n(192379),
        r = n(442837),
        c = n(481060),
        i = n(541099),
        u = n(827498),
        l = n(421591),
        s = n(314734),
        E = n(388032),
        d = n(574455);
      e.default = a.memo(function (t) {
        let { channel: e, ...n } = t,
          f = (0, r.e7)([i.Z], () => i.Z.shouldShowModal());
        return (
          a.useEffect(() => {
            !f && (0, c.closeModalInAllContexts)(s.e9);
          }),
          (0, o.jsx)("span", {
            style: s.u$,
            children: (0, o.jsx)(c.ModalRoot, {
              className: d.root,
              "aria-label": E.intl.string(E.t.shUONj),
              ...n,
              children: (0, o.jsx)(l.Z, { channel: e, entrypoint: u._b.VOICE }),
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
      var o = n(544891),
        a = n(570140),
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
          a.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: e,
            withCommands: c,
          });
          try {
            var f;
            let t = await o.tn.get({
              url: u.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: r.default.locale,
                channel_id: e,
                location: n,
                with_commands: c,
              },
            });
            a.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: n,
              channelId: e,
              recommendations: null !== (f = t.body) && void 0 !== f ? f : [],
              withCommands: c,
            });
          } catch (t) {
            a.Z.dispatch({
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
      var o,
        a,
        r,
        c,
        i,
        u,
        l = n(442837),
        s = n(570140);
      ((o = i || (i = {}))[(o.FETCHING = 0)] = "FETCHING"),
        (o[(o.FETCHED = 1)] = "FETCHED"),
        (o[(o.ERROR = 2)] = "ERROR");
      let E = {},
        d = {},
        f = {};
      function C(t) {
        let { location: e, channelId: n, withCommands: o } = t;
        return "location:"
          .concat(e, " channelId:")
          .concat("0", " withCommands:")
          .concat(o);
      }
      let _ = Object.freeze([]);
      class N extends (u = l.ZP.Store) {
        getLastFetchTimeMs(t) {
          let { location: e, channelId: n, withCommands: o } = t;
          return f[C({ location: e, channelId: n, withCommands: o })];
        }
        getFetchState(t) {
          let { location: e, channelId: n, withCommands: o } = t;
          return d[C({ location: e, channelId: n, withCommands: o })];
        }
        getRecommendations(t) {
          var e;
          let { location: n, channelId: o, withCommands: a } = t;
          return null !==
            (e = E[C({ location: n, channelId: o, withCommands: a })]) &&
            void 0 !== e
            ? e
            : _;
        }
      }
      (c = void 0),
        (r = "displayName") in (a = N)
          ? Object.defineProperty(a, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = c),
        (e.ZP = new N(s.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (t) {
            let { location: e, channelId: n, withCommands: o } = t;
            d = {
              ...d,
              [C({ location: e, channelId: n, withCommands: o })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (t) {
            let {
                recommendations: e,
                location: n,
                channelId: o,
                withCommands: a,
              } = t,
              r = C({ location: n, channelId: o, withCommands: a });
            (E = { ...E, [r]: e }), (d = { ...d, [r]: 1 });
            let c = Date.now();
            f = { ...f, [r]: c };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (t) {
            let { location: e, channelId: n, withCommands: o } = t;
            d = {
              ...d,
              [C({ location: e, channelId: n, withCommands: o })]: 2,
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
      var o = n(903797),
        a = n(60071),
        r = n(731965);
      let c = (0, o.Z)(
        (0, a.XR)(() => ({ commandAnalyticsContext: new Map() })),
      );
      function i(t) {
        let { command: e, location: n, sectionName: o } = t,
          { commandAnalyticsContext: a } = c.getState(),
          i = a.get(e);
        if (null == i || i.location !== n || i.sectionName !== o) {
          let t = new Map(a);
          t.set(e, { location: n, sectionName: o }),
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
      var o,
        a,
        r,
        c,
        i,
        u,
        l = n(442837),
        s = n(570140),
        E = n(592125),
        d = n(757266),
        f = n(375954);
      ((o = i || (i = {})).NOT_FETCHED = "NOT_FETCHED"),
        (o.FETCHING = "FETCHING"),
        (o.FETCHED = "FETCHED");
      let C = null,
        _ = "NOT_FETCHED";
      class N extends (u = l.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, d.Z, f.Z);
        }
        getApps() {
          return C;
        }
        getFetchState() {
          return _;
        }
      }
      (c = "AuthorizedAppsStore"),
        (r = "displayName") in (a = N)
          ? Object.defineProperty(a, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = c),
        (e.Z = new N(s.Z, {
          USER_AUTHORIZED_APPS_REQUEST: function () {
            _ = "FETCHING";
          },
          USER_AUTHORIZED_APPS_UPDATE: function (t) {
            (_ = "FETCHED"), (C = t.apps);
          },
        }));
    },
    558522: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var o = n(200651);
      n(192379);
      var a = n(325767);
      function r(t) {
        let {
          width: e = 24,
          height: n = 24,
          color: r = "currentColor",
          foreground: c,
          ...i
        } = t;
        return (0, o.jsx)("svg", {
          ...(0, a.Z)(i),
          width: e,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, o.jsx)("path", {
            className: c,
            fill: r,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    892814: function (t, e, n) {
      var o, a;
      n.d(e, {
        I: function () {
          return o;
        },
      }),
        ((a = o || (o = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (a.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (a.CONTEXTUAL_IMAGE = "contextual_image");
    },
    941958: function (t, e, n) {
      t.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
    },
    574455: function (t, e, n) {
      t.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=d42111950a12169111d4.js.map
