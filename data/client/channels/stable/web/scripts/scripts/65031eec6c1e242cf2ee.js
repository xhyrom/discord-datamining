"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73806"],
  {
    384275: function (e, t, n) {
      var r = n(544891),
        o = n(570140),
        a = n(981631);
      t.Z = {
        fetch() {
          r.tn.get({ url: a.ANM.OAUTH2_TOKENS, oldFormErrors: !0 }).then(
            (e) =>
              o.Z.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                apps: e.body,
              }),
            () =>
              o.Z.dispatch({ type: "USER_AUTHORIZED_APPS_UPDATE", apps: [] }),
          );
        },
        delete(e) {
          r.tn
            .del({ url: a.ANM.OAUTH2_TOKEN(e), oldFormErrors: !0 })
            .then(() => {
              this.fetch();
            });
        },
      };
    },
    147865: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return o;
        },
        lY: function () {
          return a;
        },
      });
      var r = n(689938);
      function o(e) {
        return e > 0
          ? r.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
              count: e,
            })
          : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
      }
      function a(e) {
        return e > 0
          ? "1-".concat(e)
          : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
      }
    },
    778569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(470079),
        o = n(81063);
      let a = ["embedded_cover", "embedded_background"];
      function c(e) {
        let { applicationId: t, size: n, names: c = a } = e,
          [i, l] = r.useState(null),
          [u, s] = r.useState(!0),
          E = (0, o.getAssetImage)(t, i, n);
        return (
          r.useEffect(() => {
            (0, o.getAssets)(t).then((e) => {
              for (let [t, n] of (s(!1), Object.entries(e)))
                if (null != n && "" !== n.id && c.includes(n.name)) {
                  l(n.id);
                  return;
                }
            });
          }, [t]),
          { url: E, state: u ? "loading" : null != E ? "fetched" : "not-found" }
        );
      }
    },
    182906: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(735250),
        o = n(470079),
        a = n(558522),
        c = n(175778);
      function i(e) {
        let {
            imageBackground: t,
            applicationName: n,
            imageClassName: i,
            imageNotFoundClassName: l,
          } = e,
          [u, s] = o.useState(!1);
        return "not-found" === t.state || u
          ? (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(a.Z, { className: c.brokenImageIcon }),
            })
          : "loading" === t.state
            ? null
            : (0, r.jsx)("img", {
                alt: n,
                className: i,
                src: t.url,
                onError: () => s(!0),
              });
      }
    },
    743161: function (e, t, n) {
      n.r(t);
      var r = n(735250),
        o = n(470079),
        a = n(442837),
        c = n(481060),
        i = n(541099),
        l = n(827498),
        u = n(421591),
        s = n(314734),
        E = n(689938),
        d = n(551397);
      t.default = o.memo(function (e) {
        let { channel: t, ...n } = e,
          _ = (0, a.e7)([i.Z], () => i.Z.shouldShowModal());
        return (
          o.useEffect(() => {
            !_ && (0, c.closeModal)(s.e9);
          }),
          (0, r.jsx)("span", {
            style: s.u$,
            children: (0, r.jsx)(c.ModalRoot, {
              className: d.root,
              "aria-label": E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...n,
              children: (0, r.jsx)(u.Z, { channel: t, entrypoint: l._b.VOICE }),
            }),
          })
        );
      });
    },
    399654: function (e, t, n) {
      n.d(t, {
        a: function () {
          return s;
        },
      });
      var r = n(544891),
        o = n(570140),
        a = n(706454),
        c = n(70956),
        i = n(844439),
        l = n(981631);
      let u = 10 * c.Z.Millis.MINUTE;
      async function s(e) {
        let { channelId: t, location: n, withCommands: c } = e,
          s = Date.now(),
          E = i.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: c,
          }),
          d = i.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: c,
          });
        if (E !== i.M.FETCHING && (null == d || !(d + u > s))) {
          o.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: t,
            withCommands: c,
          });
          try {
            let e = await r.tn.get({
              url: l.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: a.default.locale,
                channel_id: t,
                location: n,
                with_commands: c,
              },
            });
            o.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: n,
              channelId: t,
              recommendations: e.body,
              withCommands: c,
            });
          } catch (e) {
            o.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
              location: n,
              channelId: t,
              withCommands: c,
            });
          }
        }
      }
    },
    844439: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      });
      var r,
        o,
        a,
        c,
        i,
        l,
        u = n(442837),
        s = n(570140);
      ((r = i || (i = {}))[(r.FETCHING = 0)] = "FETCHING"),
        (r[(r.FETCHED = 1)] = "FETCHED"),
        (r[(r.ERROR = 2)] = "ERROR");
      let E = {},
        d = {},
        _ = {};
      function T(e) {
        let { location: t, channelId: n, withCommands: r } = e;
        return "location:"
          .concat(t, " channelId:")
          .concat("0", " withCommands:")
          .concat(r);
      }
      let A = Object.freeze([]);
      class I extends (l = u.ZP.Store) {
        getLastFetchTimeMs(e) {
          let { location: t, channelId: n, withCommands: r } = e;
          return _[T({ location: t, channelId: n, withCommands: r })];
        }
        getFetchState(e) {
          let { location: t, channelId: n, withCommands: r } = e;
          return d[T({ location: t, channelId: n, withCommands: r })];
        }
        getRecommendations(e) {
          var t;
          let { location: n, channelId: r, withCommands: o } = e;
          return null !==
            (t = E[T({ location: n, channelId: r, withCommands: o })]) &&
            void 0 !== t
            ? t
            : A;
        }
      }
      (c = void 0),
        (a = "displayName") in (o = I)
          ? Object.defineProperty(o, a, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[a] = c),
        (t.ZP = new I(s.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: t, channelId: n, withCommands: r } = e;
            d = {
              ...d,
              [T({ location: t, channelId: n, withCommands: r })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let {
                recommendations: t,
                location: n,
                channelId: r,
                withCommands: o,
              } = e,
              a = T({ location: n, channelId: r, withCommands: o });
            (E = { ...E, [a]: t }), (d = { ...d, [a]: 1 });
            let c = Date.now();
            _ = { ..._, [a]: c };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: t, channelId: n, withCommands: r } = e;
            d = {
              ...d,
              [T({ location: t, channelId: n, withCommands: r })]: 2,
            };
          },
        }));
    },
    881998: function (e, t, n) {
      var r,
        o,
        a,
        c,
        i = n(442837),
        l = n(570140),
        u = n(592125),
        s = n(757266),
        E = n(375954);
      let d = null;
      class _ extends (c = i.ZP.Store) {
        initialize() {
          this.waitFor(u.Z, s.Z, E.Z);
        }
        getApps() {
          return d;
        }
      }
      (a = "AuthorizedAppsStore"),
        (o = "displayName") in (r = _)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
        (t.Z = new _(l.Z, {
          USER_AUTHORIZED_APPS_UPDATE: function (e) {
            d = e.apps;
          },
        }));
    },
    558522: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(735250);
      n(470079);
      var o = n(325767);
      function a(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: a = "currentColor",
          foreground: c,
          ...i
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, o.Z)(i),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            className: c,
            fill: a,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    892814: function (e, t, n) {
      var r, o;
      n.d(t, {
        I: function () {
          return r;
        },
      }),
        ((o = r || (r = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (o.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (o.CONTEXTUAL_IMAGE = "contextual_image");
    },
    175778: function (e, t, n) {
      e.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
    },
    551397: function (e, t, n) {
      e.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=65031eec6c1e242cf2ee.js.map
