"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39170"],
  {
    384275: function (n, e, t) {
      var r = t(544891),
        i = t(570140),
        o = t(981631);
      e.Z = {
        fetch() {
          r.tn.get({ url: o.ANM.OAUTH2_TOKENS, oldFormErrors: !0 }).then(
            (n) =>
              i.Z.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                apps: n.body,
              }),
            () =>
              i.Z.dispatch({ type: "USER_AUTHORIZED_APPS_UPDATE", apps: [] }),
          );
        },
        delete(n) {
          r.tn
            .del({ url: o.ANM.OAUTH2_TOKEN(n), oldFormErrors: !0 })
            .then(() => {
              this.fetch();
            });
        },
      };
    },
    147865: function (n, e, t) {
      t.d(e, {
        ZP: function () {
          return i;
        },
        lY: function () {
          return o;
        },
      });
      var r = t(689938);
      function i(n) {
        return n > 0
          ? r.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
              count: n,
            })
          : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
      }
      function o(n) {
        return n > 0
          ? "1-".concat(n)
          : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
      }
    },
    778569: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var r = t(470079),
        i = t(81063);
      let o = ["embedded_cover", "embedded_background"];
      function u(n) {
        let { applicationId: e, size: t, names: u = o } = n,
          [c, a] = r.useState(null),
          [s, l] = r.useState(!0),
          E = (0, i.getAssetImage)(e, c, t);
        return (
          r.useEffect(() => {
            (0, i.getAssets)(e).then((n) => {
              for (let [e, t] of (l(!1), Object.entries(n)))
                if (null != t && "" !== t.id && u.includes(t.name)) {
                  a(t.id);
                  return;
                }
            });
          }, [e]),
          { url: E, state: s ? "loading" : null != E ? "fetched" : "not-found" }
        );
      }
    },
    182906: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var r = t(735250),
        i = t(470079),
        o = t(558522),
        u = t(175778);
      function c(n) {
        let {
            imageBackground: e,
            applicationName: t,
            imageClassName: c,
            imageNotFoundClassName: a,
          } = n,
          [s, l] = i.useState(!1);
        return "not-found" === e.state || s
          ? (0, r.jsx)("div", {
              className: a,
              children: (0, r.jsx)(o.Z, { className: u.brokenImageIcon }),
            })
          : "loading" === e.state
            ? null
            : (0, r.jsx)("img", {
                alt: t,
                className: c,
                src: e.url,
                onError: () => l(!0),
              });
      }
    },
    783097: function (n, e, t) {
      t.d(e, {
        $d: function () {
          return I;
        },
        BQ: function () {
          return A;
        },
        Cb: function () {
          return S;
        },
        Hu: function () {
          return Z;
        },
        Wx: function () {
          return T;
        },
        XZ: function () {
          return m;
        },
        Y$: function () {
          return R;
        },
        Yn: function () {
          return D;
        },
        jD: function () {
          return N;
        },
        lf: function () {
          return O;
        },
        sl: function () {
          return p;
        },
        vJ: function () {
          return M;
        },
        yJ: function () {
          return P;
        },
        ye: function () {
          return C;
        },
      }),
        t(789020),
        t(627494),
        t(757143);
      var r = t(668781),
        i = t(904245),
        o = t(895924),
        u = t(667204),
        c = t(957730),
        a = t(973616),
        s = t(768581),
        l = t(630388),
        E = t(827498),
        _ = t(981631),
        d = t(689079),
        f = t(689938);
      let T = { id: d.bi.BUILT_IN };
      function A(n) {
        return n.id !== d.bi.BUILT_IN;
      }
      function I(n) {
        return A(n) ? n.name : f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME;
      }
      function N(n) {
        return A(n)
          ? n.description
          : f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION;
      }
      function C(n) {
        var e;
        return (
          A(n) &&
          (0, l.yE)(
            null !== (e = n.flags) && void 0 !== e ? e : 0,
            _.udG.EMBEDDED,
          )
        );
      }
      function M(n) {
        var e;
        return (
          A(n) &&
          (0, l.yE)(
            null !== (e = n.flags) && void 0 !== e ? e : 0,
            _.udG.PARTNER,
          )
        );
      }
      function O(n) {
        var e;
        return (
          A(n) &&
          (0, l.yE)(
            null !== (e = n.flags) && void 0 !== e ? e : 0,
            _.udG.PROMOTED,
          )
        );
      }
      function P(n) {
        return A(n) && C(n)
          ? n instanceof a.Z
            ? n.embeddedActivityConfig
            : n.embedded_activity_config
          : null;
      }
      function R(n) {
        let {
            command: e,
            optionValues: t,
            context: a,
            commandTargetId: s,
            maxSizeCallback: l,
            sectionName: E,
          } = n,
          { channel: _ } = a,
          d = async () => {
            try {
              let r = await (0, u.Z)({
                command: e,
                optionValues: t,
                context: a,
                commandTargetId: s,
                maxSizeCallback: l,
                commandOrigin: o.bB.APPLICATION_LAUNCHER,
                sectionName: E,
              });
              if (e.inputType === o.iw.BUILT_IN_TEXT && null != r) {
                var n;
                let e = c.ZP.parse(_, r.content);
                (e.tts = null !== (n = r.tts) && void 0 !== n && n),
                  i.Z.sendMessage(a.channel.id, e);
              }
            } catch (n) {
              throw (
                (r.Z.show({
                  title:
                    f.Z.Messages.APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_TITLE,
                  body: f.Z.Messages
                    .APP_LAUNCHER_UNKNOWN_COMMAND_ERROR_MODAL_BODY,
                  confirmText: f.Z.Messages.RETRY,
                  onConfirm: () => d(),
                }),
                n)
              );
            }
          };
        return d();
      }
      function p(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { fakeAppIconURL: t, ...r } = e;
        return A(n)
          ? {
              iconURL: s.ZP.getApplicationIconURL({
                ...r,
                id: n.id,
                icon: n.icon,
              }),
              name: n.name,
              description: n.description,
            }
          : {
              iconURL: null != t ? t : null,
              name: f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_NAME,
              description:
                f.Z.Messages.APP_LAUNCHER_BUILT_IN_SECTION_DESCRIPTION,
            };
      }
      function S(n) {
        return !!A(n) && ("is_monetized" in n ? n.is_monetized : n.isMonetized);
      }
      function Z(n) {
        let e = P(n);
        return null != e && e.displays_advertisements;
      }
      function D(n) {
        return n === E._b.TEXT;
      }
      function m(n) {
        return null == n
          ? ""
          : (n.charAt(0).toLocaleUpperCase() + n.slice(1)).replaceAll("_", " ");
      }
    },
    743161: function (n, e, t) {
      t.r(e);
      var r = t(735250),
        i = t(470079),
        o = t(442837),
        u = t(481060),
        c = t(541099),
        a = t(827498),
        s = t(421591),
        l = t(314734),
        E = t(689938),
        _ = t(551397);
      e.default = i.memo(function (n) {
        let { channel: e, ...t } = n,
          d = (0, o.e7)([c.Z], () => c.Z.shouldShowModal());
        return (
          i.useEffect(() => {
            !d && (0, u.closeModal)(l.e9);
          }),
          (0, r.jsx)("span", {
            style: l.u$,
            children: (0, r.jsx)(u.ModalRoot, {
              className: _.root,
              "aria-label": E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...t,
              children: (0, r.jsx)(s.Z, { channel: e, entrypoint: a._b.VOICE }),
            }),
          })
        );
      });
    },
    399654: function (n, e, t) {
      t.d(e, {
        a: function () {
          return l;
        },
      });
      var r = t(544891),
        i = t(570140),
        o = t(706454),
        u = t(70956),
        c = t(844439),
        a = t(981631);
      let s = 10 * u.Z.Millis.MINUTE;
      async function l(n) {
        let { channelId: e, location: t, withCommands: u } = n,
          l = Date.now(),
          E = c.ZP.getFetchState({
            location: t,
            channelId: e,
            withCommands: u,
          }),
          _ = c.ZP.getLastFetchTimeMs({
            location: t,
            channelId: e,
            withCommands: u,
          });
        if (E !== c.M.FETCHING && (null == _ || !(_ + s > l))) {
          i.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: t,
            channelId: e,
            withCommands: u,
          });
          try {
            let n = await r.tn.get({
              url: a.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: o.default.locale,
                channel_id: e,
                location: t,
                with_commands: u,
              },
            });
            i.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: t,
              channelId: e,
              recommendations: n.body,
              withCommands: u,
            });
          } catch (n) {
            i.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
              location: t,
              channelId: e,
              withCommands: u,
            });
          }
        }
      }
    },
    844439: function (n, e, t) {
      t.d(e, {
        M: function () {
          return c;
        },
      });
      var r,
        i,
        o,
        u,
        c,
        a,
        s = t(442837),
        l = t(570140);
      ((r = c || (c = {}))[(r.FETCHING = 0)] = "FETCHING"),
        (r[(r.FETCHED = 1)] = "FETCHED"),
        (r[(r.ERROR = 2)] = "ERROR");
      let E = {},
        _ = {},
        d = {};
      function f(n) {
        let { location: e, channelId: t, withCommands: r } = n;
        return "location:"
          .concat(e, " channelId:")
          .concat("0", " withCommands:")
          .concat(r);
      }
      let T = Object.freeze([]);
      class A extends (a = s.ZP.Store) {
        getLastFetchTimeMs(n) {
          let { location: e, channelId: t, withCommands: r } = n;
          return d[f({ location: e, channelId: t, withCommands: r })];
        }
        getFetchState(n) {
          let { location: e, channelId: t, withCommands: r } = n;
          return _[f({ location: e, channelId: t, withCommands: r })];
        }
        getRecommendations(n) {
          var e;
          let { location: t, channelId: r, withCommands: i } = n;
          return null !==
            (e = E[f({ location: t, channelId: r, withCommands: i })]) &&
            void 0 !== e
            ? e
            : T;
        }
      }
      (u = void 0),
        (o = "displayName") in (i = A)
          ? Object.defineProperty(i, o, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = u),
        (e.ZP = new A(l.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (n) {
            let { location: e, channelId: t, withCommands: r } = n;
            _ = {
              ..._,
              [f({ location: e, channelId: t, withCommands: r })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (n) {
            let {
                recommendations: e,
                location: t,
                channelId: r,
                withCommands: i,
              } = n,
              o = f({ location: t, channelId: r, withCommands: i });
            (E = { ...E, [o]: e }), (_ = { ..._, [o]: 1 });
            let u = Date.now();
            d = { ...d, [o]: u };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (n) {
            let { location: e, channelId: t, withCommands: r } = n;
            _ = {
              ..._,
              [f({ location: e, channelId: t, withCommands: r })]: 2,
            };
          },
        }));
    },
    881998: function (n, e, t) {
      var r,
        i,
        o,
        u,
        c = t(442837),
        a = t(570140),
        s = t(592125),
        l = t(757266),
        E = t(375954);
      let _ = null;
      class d extends (u = c.ZP.Store) {
        initialize() {
          this.waitFor(s.Z, l.Z, E.Z);
        }
        getApps() {
          return _;
        }
      }
      (o = "AuthorizedAppsStore"),
        (i = "displayName") in (r = d)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (e.Z = new d(a.Z, {
          USER_AUTHORIZED_APPS_UPDATE: function (n) {
            _ = n.apps;
          },
        }));
    },
    558522: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(325767);
      function o(n) {
        let {
          width: e = 24,
          height: t = 24,
          color: o = "currentColor",
          foreground: u,
          ...c
        } = n;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(c),
          width: e,
          height: t,
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            className: u,
            fill: o,
            d: "M21 5V11.59L18 8.59L14 12.59L10 8.59L6 12.59L3 9.59V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5ZM18 11.42L21 14.42V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12.42L6 15.42L10 11.42L14 15.42L18 11.42Z",
          }),
        });
      }
    },
    892814: function (n, e, t) {
      var r, i;
      t.d(e, {
        I: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (i.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (i.CONTEXTUAL_IMAGE = "contextual_image");
    },
    175778: function (n, e, t) {
      n.exports = { brokenImageIcon: "brokenImageIcon_b88265" };
    },
    551397: function (n, e, t) {
      n.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=57a0eba677ed2312e0ac.js.map
