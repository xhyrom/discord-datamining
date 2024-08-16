"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85342"],
  {
    733469: function (e) {
      e.exports = "/assets/abe0f213583fe641df56.png";
    },
    849399: function (e) {
      e.exports = "/assets/fbde336e8e7bab0fef0a.png";
    },
    839973: function (e) {
      e.exports = "/assets/202a8a13c8bc1368be84.svg";
    },
    551556: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(692547),
        i = a(325767);
      function r(e) {
        let {
          width: t = 24,
          height: a = 24,
          color: r = s.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: o = s.Z.unsafe_rawColors.BRAND_500.css,
          ...l
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, i.Z)(l),
          width: t,
          height: a,
          viewBox: "0 0 14 14",
          children: [
            (0, n.jsx)("path", {
              fill: o,
              d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, n.jsx)("path", {
              d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
              fill: r,
            }),
          ],
        });
      }
    },
    986197: function (e, t, a) {
      var n = a(990547),
        s = a(544891),
        i = a(570140),
        r = a(881052),
        o = a(626135),
        l = a(573261),
        u = a(545851),
        d = a(109488),
        c = a(794099),
        E = a(981631),
        _ = a(689938);
      a(135200);
      t.Z = {
        resetSuggestions: () =>
          i.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if (!!(0, c.vc)()) {
            i.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var a;
              let n = await s.tn.get({
                url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                n.ok &&
                (null === (a = n.body) || void 0 === a ? void 0 : a.username) !=
                  null
              )
                return i.Z.dispatch({
                  type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                  suggestion: n.body,
                  source: e,
                });
            } catch (e) {
              return;
            }
          }
        },
        async fetchSuggestions(e) {
          if (!!(0, d.P)())
            try {
              var t;
              i.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let a = await s.tn.get({
                url: E.ANM.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                a.ok &&
                (null === (t = a.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return i.Z.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: a.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, a;
          let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let m =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
              : t.includes("..")
                ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                : t.length < 2 || t.length > 32
                  ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != m)
            return (
              o.default.track(E.rMx.POMELO_ERRORS, {
                reason: m,
                username_error: !0,
                location: s,
                one_click_flow: c,
              }),
              i.Z.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: m,
              })
            );
          if (!!(0, u.E)())
            try {
              let t = await l.Z.post({
                url: d ? E.ANM.POMELO_ATTEMPT_UNAUTHED : E.ANM.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: n.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                o.default.track(E.rMx.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: s,
                  one_click_flow: c,
                }),
                i.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (l) {
              let t = new r.Hx(l),
                n =
                  null !== (a = t.getAnyErrorMessage()) && void 0 !== a
                    ? a
                    : void 0;
              o.default.track(E.rMx.POMELO_ERRORS, {
                reason: n,
                username_error: !0,
                location: s,
                one_click_flow: c,
              }),
                i.Z.dispatch({
                  username: e,
                  type: "POMELO_ATTEMPT_FAILURE",
                  error:
                    null != t.status && t.status < 500 && 401 !== t.status
                      ? n
                      : void 0,
                  statusCode: t.status,
                  retryAfter: t.retryAfter,
                });
            }
        },
        async createPomelo(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = await l.Z.post({
              body: e,
              url: E.ANM.POMELO_CREATE,
              trackedActionData: {
                event: n.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            i.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: a.body }), a.body
          );
        },
      };
    },
    545851: function (e, t, a) {
      a.d(t, {
        E: function () {
          return s;
        },
      });
      let n = (0, a(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        s = () =>
          n.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, a) {
      a.d(t, {
        c: function () {
          return s;
        },
      });
      let n = (0, a(818083).B)({
          kind: "user",
          label: "Pomelo Debounce Delay",
          id: "2023-03_pomelo_debounce_delay",
          defaultConfig: { delay: 600 },
          treatments: [
            { id: 1, label: "600ms", config: { delay: 600 } },
            { id: 2, label: "700ms", config: { delay: 700 } },
            { id: 3, label: "800ms", config: { delay: 800 } },
            { id: 4, label: "900ms", config: { delay: 900 } },
            { id: 5, label: "1000ms", config: { delay: 1e3 } },
          ],
        }),
        s = () =>
          n.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, a) {
      var n,
        s,
        i,
        r,
        o = a(31775),
        l = a.n(o),
        u = a(442837),
        d = a(570140),
        c = a(70956);
      let E = { taken: null, error: void 0, rateLimited: !0 },
        _ = {
          validations: new (l())({ max: 100, maxAge: 6e4 }),
          currentUsernameInvalid: !1,
          retryAfterTime: null,
          suggestions: {
            migration: {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            },
            registration: {
              suggestion: { username: void 0 },
              source: void 0,
              fetched: !1,
            },
          },
        };
      class m extends (r = u.ZP.Store) {
        isRateLimited() {
          return null != _.retryAfterTime && Date.now() < _.retryAfterTime;
        }
        validate(e) {
          let t = _.validations.get(e);
          if (this.isRateLimited() && (null == t || t.rateLimited)) return E;
          if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
        }
        registrationUsernameSuggestion() {
          return _.suggestions.registration.suggestion.username;
        }
        usernameSuggestion() {
          return _.suggestions.migration.suggestion.username;
        }
        usernameSuggestionLoading() {
          return _.suggestions.migration.usernameSuggestionLoading;
        }
        isCurrentUsernameInvalid() {
          return _.currentUsernameInvalid;
        }
        wasRegistrationSuggestionFetched(e) {
          return (
            _.suggestions.registration.source === e &&
            _.suggestions.registration.fetched
          );
        }
        wasSuggestionsFetched() {
          return _.suggestions.migration.fetched;
        }
      }
      (i = "PomeloStore"),
        (s = "displayName") in (n = m)
          ? Object.defineProperty(n, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[s] = i),
        (t.Z = new m(d.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: a } = e;
            _.validations.set(t, { taken: a });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: a, statusCode: n, retryAfter: s } = e;
            429 === n
              ? _.validations.set(
                  t,
                  { taken: null, error: a, rateLimited: !0 },
                  (null != s ? s : 7) * c.Z.Millis.SECOND,
                )
              : _.validations.set(t, { taken: null, error: a }),
              null != s &&
                (_.retryAfterTime = Date.now() + s * c.Z.Millis.SECOND);
          },
          POMELO_SUGGESTIONS_RESET: function () {
            (_.suggestions.migration = {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            }),
              (_.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1,
              });
          },
          POMELO_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t } = e;
            (_.suggestions.migration = {
              suggestion: t,
              fetched: !0,
              usernameSuggestionLoading: !1,
            }),
              (null == t ? void 0 : t.invalid_current_username) === !0 &&
                (_.currentUsernameInvalid = !0);
          },
          POMELO_SUGGESTIONS_FETCH: function (e) {
            let { usernameSuggestionLoading: t } = e;
            _.suggestions.migration.usernameSuggestionLoading = t;
          },
          POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t, source: a } = e;
            (_.suggestions.registration = {
              suggestion: t,
              source: a,
              fetched: !0,
            }),
              (null == t ? void 0 : t.username) != null &&
                _.validations.set(t.username, { taken: !1 });
          },
        }));
    },
    109488: function (e, t, a) {
      a.d(t, {
        P: function () {
          return s;
        },
      });
      let n = (0, a(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        s = () =>
          n.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, a) {
      a.d(t, {
        F4: function () {
          return s;
        },
        vc: function () {
          return i;
        },
      });
      let n = (0, a(818083).B)({
          kind: "user",
          id: "2023-06_unique_username_registration",
          label: "Unique Username Registration",
          defaultConfig: { livecheckEnabled: !0, suggestions: !0 },
          treatments: [
            {
              id: 1,
              label:
                "Unique Username Registration enabled -livecheck -suggestions",
              config: { livecheckEnabled: !1, suggestions: !1 },
            },
            {
              id: 2,
              label:
                "Unique Username Registration enabled -livecheck +suggestions",
              config: { livecheckEnabled: !1, suggestions: !0 },
            },
            {
              id: 3,
              label:
                "Unique Username Registration enabled +livecheck -suggestions",
              config: { livecheckEnabled: !0, suggestions: !1 },
            },
            {
              id: 4,
              label:
                "Unique Username Registration enabled +livecheck +suggestions",
              config: { livecheckEnabled: !0, suggestions: !0 },
            },
          ],
        }),
        s = () =>
          n.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        i = () =>
          n.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    363577: function (e, t, a) {
      a.d(t, {
        M: function () {
          return d;
        },
      });
      var n = a(470079),
        s = a(392711),
        i = a(399606),
        r = a(986197),
        o = a(654344),
        l = a(135200),
        u = a(346585);
      let d = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, i.e7)([l.Z], () => l.Z.validate(e), [e]),
          E = (0, i.e7)([l.Z], () => l.Z.isRateLimited()),
          _ = (0, o.c)(),
          m = n.useMemo(
            () =>
              (0, s.debounce)(
                (e) => r.Z.attemptPomelo(e, a ? "registration" : "modal", a, d),
                _,
              ),
            [_, a, d],
          );
        return (
          n.useEffect(() => {
            t && !E && null == c && "" !== e && m(e);
          }, [t, E, c, e, m]),
          n.useMemo(() => (null != c ? (0, u.ti)(c) : void 0), [c])
        );
      };
    },
    361117: function (e, t, a) {
      a.d(t, {
        G: function () {
          return l;
        },
      }),
        a(47120),
        a(773603);
      var n = a(470079),
        s = a(399606),
        i = a(570140),
        r = a(986197),
        o = a(135200);
      let l = (e) => {
        let [t, a] = (0, s.Wu)([o.Z], () => [
          o.Z.usernameSuggestion(),
          o.Z.usernameSuggestionLoading(),
        ]);
        return (
          n.useEffect(
            () => (
              o.Z.wasSuggestionsFetched()
                ? i.Z.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !1,
                  })
                : r.Z.fetchSuggestions(e).finally(() => {
                    i.Z.dispatch({
                      type: "POMELO_SUGGESTIONS_FETCH",
                      usernameSuggestionLoading: !1,
                    });
                  }),
              () => {
                r.Z.resetSuggestions();
              }
            ),
            [],
          ),
          { usernameSuggestion: t, usernameSuggestionLoading: a }
        );
      };
    },
    773446: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(325767);
      function i(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: i = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, s.Z)(o),
          width: t,
          height: a,
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("g", {
              clipPath: "url(#clip0_3283_145261)",
              children: (0, n.jsx)("path", {
                d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                fill: i,
                className: r,
              }),
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_3283_145261",
                children: (0, n.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
    },
    572264: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(325767);
      function i(e) {
        let {
          width: t = 16,
          height: a = 16,
          color: i = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, s.Z)(o),
          width: t,
          height: a,
          viewBox: "0 0 23 23",
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
            fill: i,
            className: r,
          }),
        });
      }
    },
    193049: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        i = a(512722),
        r = a.n(i),
        o = a(990547),
        l = a(399606),
        u = a(481060),
        d = a(232567),
        c = a(809206),
        E = a(479531),
        _ = a(484459),
        m = a(594174),
        g = a(626135),
        f = a(51144),
        S = a(986197),
        I = a(135200),
        T = a(346585),
        N = a(347649),
        h = a(361117),
        O = a(108793),
        M = a(635774),
        v = a(387955),
        P = a(801461),
        L = a(448624),
        C = a(981631),
        x = a(689938),
        A = a(962830);
      function p(e) {
        let t,
          {
            source: a,
            transitionState: i,
            onClose: p,
            oneClickFlow: y = !1,
          } = e,
          [Z, U] = s.useState(y ? L.A.SUGGESTIONS : L.A.INFO),
          [b, G] = s.useState(!1),
          [k, W] = s.useState(null),
          [D, j] = s.useState(y ? P.Wq.SUGGESTION : P.Wq.NONE),
          [B, F] = s.useState(!1),
          [w, H] = s.useState(!1),
          q = s.useRef(null),
          z = (0, l.e7)([I.Z], () => I.Z.isCurrentUsernameInvalid()),
          V = (0, l.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return r()(null != e, "PomeloModal: user cannot be undefined"), e;
          }),
          X = (0, N.CC)(),
          { usernameSuggestion: Y, usernameSuggestionLoading: K } = (0, h.G)(
            y ? P.en : void 0,
          );
        s.useEffect(() => {
          D === P.Wq.EDIT_USERNAME && H(!0),
            g.default.track(C.rMx.POMELO_EDIT_STEP_VIEWED, {
              source: a,
              step: D,
            });
        }, [D, a]),
          s.useEffect(() => {
            !w &&
              !B &&
              null != Y &&
              Y.length > 0 &&
              $((e) => ({ ...e, username: Y }));
          }, [Y, w, B]);
        let [Q, $] = s.useState({
            username: (0, T.e$)(V),
            globalName: f.ZP.getName(V),
          }),
          J = (e) => {
            W(null), null != e.username && F(!0), $((t) => ({ ...t, ...e }));
          },
          ee = s.useMemo(
            () => [
              {
                slideId: L.A.INFO,
                next: L.A.EDIT_SCREEN,
                footerButtons: ["REMIND_ME_LATER", "GET_STARTED"],
              },
              {
                slideId: L.A.EDIT_SCREEN,
                next: L.A.FINISH_LATER,
                back: L.A.INFO,
                footerButtons: [
                  D === P.Wq.PREVIEW ? "GOT_IT" : "BACK",
                  D === P.Wq.PREVIEW
                    ? "GOT_IT"
                    : D === P.Wq.EDIT_USERNAME
                      ? "SUBMIT"
                      : "NEXT",
                ],
              },
              { slideId: L.A.FINISH_LATER, back: L.A.EDIT_SCREEN },
              {
                slideId: L.A.SUGGESTIONS,
                footerButtons: [D === P.Wq.PREVIEW ? "GOT_IT" : "UPDATE"],
              },
              { slideId: L.A.FINISH_LATER },
            ],
            [D],
          ),
          et = ee.length,
          ea = s.useCallback(async () => {
            if (Q.globalName.length <= 0) {
              let e = x.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                minNum: 1,
                maxNum: 32,
              });
              W(e),
                g.default.track(C.rMx.POMELO_ERRORS, {
                  reason: e,
                  display_name_error: !0,
                  location: "modal",
                });
              return;
            }
            if (f.ZP.getGlobalName(V) === Q.globalName) {
              j(P.Wq.EDIT_USERNAME);
              return;
            }
            try {
              W(null),
                G(!0),
                await (0, c.S2)({ global_name: Q.globalName }),
                j(P.Wq.EDIT_USERNAME);
            } catch (t) {
              let e = new E.Z(t).getAnyErrorMessage();
              g.default.track(C.rMx.POMELO_ERRORS, {
                reason: e,
                display_name_error: !0,
                location: "modal",
              }),
                W(e);
            } finally {
              G(!1);
            }
          }, [V, Q]),
          en = s.useCallback(async () => {
            try {
              W(null),
                G(!0),
                await S.Z.createPomelo({ username: (0, T.R_)(Q.username) }, y),
                await (0, d.In)(V.id),
                j(P.Wq.PREVIEW);
            } catch (a) {
              let e = new E.Z(a),
                t =
                  (null == e ? void 0 : e.status) != null &&
                  e.status >= 400 &&
                  e.status < 500
                    ? e.getAnyErrorMessage()
                    : x.Z.Messages.ERROR_GENERIC_TITLE;
              W(t),
                g.default.track(C.rMx.POMELO_ERRORS, {
                  reason: t,
                  username_error: !0,
                  location: "modal",
                  one_click_flow: y,
                });
            } finally {
              G(!1);
            }
          }, [Q, V.id, y]),
          es = z || (0, T.NX)(V),
          ei = s.useCallback(() => {
            j(es ? P.Wq.EDIT_USERNAME : P.Wq.EDIT_DISPLAY_NAME),
              U(ee[Math.min(et - 1, Z + 1)].slideId);
          }, [Z, ee, et, es]),
          er = s.useCallback(() => {
            W(null),
              Z === L.A.EDIT_SCREEN
                ? D === P.Wq.EDIT_USERNAME
                  ? es
                    ? (j(P.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId))
                    : j(P.Wq.EDIT_DISPLAY_NAME)
                  : D === P.Wq.EDIT_DISPLAY_NAME
                    ? (j(P.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId))
                    : D === P.Wq.PREVIEW && j(P.Wq.EDIT_USERNAME)
                : U(ee[Math.max(0, Z - 1)].slideId);
          }, [ee, Z, D, es]),
          eo = s.useCallback(() => {
            U(L.A.FINISH_LATER);
          }, []),
          el = s.useCallback(() => {
            y
              ? (U(L.A.SUGGESTIONS), j(P.Wq.SUGGESTION))
              : (U(L.A.INFO), j(P.Wq.NONE));
          }, [y]),
          eu = s.useMemo(() => {
            if (Z === L.A.EDIT_SCREEN && D === P.Wq.EDIT_DISPLAY_NAME)
              return ea;
            if (Z === L.A.EDIT_SCREEN && D === P.Wq.EDIT_USERNAME) return en;
            if (Z === L.A.SUGGESTIONS && D === P.Wq.SUGGESTION) return en;
            else return ei;
          }, [Z, D, ea, en, ei]),
          ed = s.useMemo(() => {
            var e, t;
            return R(
              null !==
                (t =
                  null === (e = ee.find((e) => e.slideId === Z)) || void 0 === e
                    ? void 0
                    : e.footerButtons) && void 0 !== t
                ? t
                : [],
              {
                handleNext: eu,
                handleBack: er,
                handleRemindMeLater: eo,
                onClose: p,
              },
              b,
              K,
              B,
            );
          }, [er, eo, eu, p, ee, Z, b, K, B]),
          ec = s.useMemo(() => (0, T.zV)(V), [V]);
        s.useLayoutEffect(() => {
          (0, _.Z)(V.id, ec);
        }, [V, ec]),
          s.useEffect(() => {
            var e, t;
            switch (D) {
              case P.Wq.EDIT_DISPLAY_NAME:
                null === (e = q.current) ||
                  void 0 === e ||
                  e.focusDisplayName();
                break;
              case P.Wq.EDIT_USERNAME:
              case P.Wq.SUGGESTION:
                null === (t = q.current) || void 0 === t || t.focusUsername();
            }
          }, [D]);
        return (
          !B &&
            null == k &&
            (D === P.Wq.EDIT_USERNAME
              ? (t = x.Z.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                  source: V.username,
                }))
              : D === P.Wq.SUGGESTION &&
                (K || null != Y) &&
                (t = x.Z.Messages.POMELO_SUGGESTIONS_OCF)),
          (0, n.jsxs)(u.ModalRoot, {
            className: A.modalRoot,
            impression: {
              impressionName: o.ImpressionNames.POMELO_LANDING,
              impressionProperties: {
                source: a,
                impression_group: o.ImpressionGroups.POMELO_FLOW,
                one_click_flow: y,
              },
            },
            transitionState: i,
            size: u.ModalSize.DYNAMIC,
            children: [
              (0, n.jsx)(u.Button, {
                onClick: () => {
                  X && (Z === L.A.SUGGESTIONS || Z === L.A.EDIT_SCREEN)
                    ? U(L.A.FINISH_LATER)
                    : p();
                },
                size: u.Button.Sizes.MIN,
                look: u.Button.Looks.BLANK,
                className: A.closeContainer,
                "aria-label": x.Z.Messages.CLOSE,
                children: (0, n.jsx)(u.XSmallIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 15,
                  height: 15,
                  className: A.close,
                }),
              }),
              (0, n.jsx)(u.ModalContent, {
                className: A.contentContainer,
                children: (0, n.jsxs)(u.Slides, {
                  activeSlide: Z,
                  width: 480,
                  children: [
                    (0, n.jsx)(u.Slide, {
                      id: L.A.INFO,
                      children: (0, n.jsx)(v.Z, { user: V }),
                    }),
                    (0, n.jsx)(u.Slide, {
                      id: L.A.EDIT_SCREEN,
                      children: (0, n.jsx)(O.Z, {
                        user: V,
                        error: k,
                        editState: D,
                        userRef: q,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: J,
                        onFocusUsername: () => j(P.Wq.EDIT_USERNAME),
                        onFocusDisplayName: () => j(P.Wq.EDIT_DISPLAY_NAME),
                        onClose: p,
                      }),
                    }),
                    (0, n.jsx)(u.Slide, {
                      id: L.A.FINISH_LATER,
                      children: (0, n.jsx)(M.Z, {
                        onClose: p,
                        handleStartFlow: el,
                      }),
                    }),
                    (0, n.jsx)(u.Slide, {
                      id: L.A.SUGGESTIONS,
                      children: (0, n.jsx)(O.Z, {
                        user: V,
                        error: k,
                        editState: D,
                        userRef: q,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: J,
                        onFocusUsername: () => j(P.Wq.SUGGESTION),
                        onFocusDisplayName: () => j(P.Wq.EDIT_DISPLAY_NAME),
                        onClose: p,
                        usernameSuggestionLoading: K,
                        oneClickFlow: y,
                      }),
                    }),
                  ],
                }),
              }),
              ed,
            ],
          })
        );
      }
      let R = (e, t, a, s, i) =>
        0 === e.length
          ? null
          : (0, n.jsxs)(u.ModalFooter, {
              className: A.footer,
              children: [
                (0, n.jsxs)("div", {
                  className: A.inline,
                  children: [
                    e.includes("REMIND_ME_LATER") &&
                      (0, n.jsx)(u.Button, {
                        className: A.unfilledButton,
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        color: u.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children:
                          x.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA,
                      }),
                    e.includes("NEXT") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.Z.Messages.NEXT,
                      }),
                    e.includes("SUBMIT") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.Z.Messages.SUBMIT,
                      }),
                    e.includes("GET_STARTED") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: x.Z.Messages.GET_STARTED,
                      }),
                    e.includes("GOT_IT") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: x.Z.Messages.GOT_IT,
                      }),
                    e.includes("UPDATE") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        disabled: s && !i,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.Z.Messages.UPDATE,
                      }),
                  ],
                }),
                e.includes("BACK") &&
                  (0, n.jsx)(u.Button, {
                    className: A.unfilledButton,
                    type: "button",
                    size: u.Button.Sizes.SMALL,
                    look: u.Button.Looks.BLANK,
                    color: u.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: x.Z.Messages.BACK,
                  }),
              ],
            });
    },
    81259: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      }),
        a(627341);
      var n = a(735250);
      a(470079);
      var s = a(120356),
        i = a.n(s),
        r = a(278074),
        o = a(692547),
        l = a(481060),
        u = a(551556),
        d = a(740080);
      let c = () =>
          (0, n.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: o.Z.colors.TEXT_POSITIVE.css,
          }),
        E = () =>
          (0, n.jsx)(l.CircleXIcon, {
            size: "custom",
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_DANGER.css,
          }),
        _ = () =>
          (0, n.jsx)(l.CircleXIcon, {
            size: "custom",
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_WARNING.css,
          });
      function m(e) {
        let t = (0, r.EQ)(e.type)
          .with("info", () => (0, n.jsx)(_, {}))
          .with("error", () => (0, n.jsx)(E, {}))
          .with("success", () => (0, n.jsx)(c, {}))
          .otherwise(() => null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t,
            (0, n.jsx)(l.Text, {
              variant: "text-sm/medium",
              className: i()(d.formMessage, {
                [d.formMessageNegative]: "error" === e.type,
                [d.formMessagePositive]: "success" === e.type,
              }),
              children: e.children,
            }),
          ],
        });
      }
    },
    108793: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return f;
        },
      }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        i = a(338545),
        r = a(481060),
        o = a(230711),
        l = a(318661),
        u = a(63063),
        d = a(51144),
        c = a(544508),
        E = a(801461),
        _ = a(981631),
        m = a(689938),
        g = a(740080);
      function f(e) {
        let {
            userRef: t,
            usernameSuggestionLoading: a = !1,
            oneClickFlow: f = !1,
            ...S
          } = e,
          { user: I, editState: T, onClose: N } = S,
          h = (0, l.ZP)(I.id),
          O = (function (e, t, a) {
            switch (e) {
              case E.Wq.EDIT_USERNAME:
                return {
                  header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                  subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE,
                };
              case E.Wq.EDIT_DISPLAY_NAME:
                return {
                  header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
                  subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE,
                };
              case E.Wq.PREVIEW:
                return {
                  header:
                    m.Z.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
                      displayName: t,
                    }),
                  subtitle:
                    m.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                      onClick: () => {
                        a(), o.Z.open(_.oAB.ACCOUNT);
                      },
                    }),
                };
              case E.Wq.SUGGESTION:
                return {
                  header: m.Z.Messages.POMELO_ACTION_LABEL_OCF,
                  subtitle:
                    m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
                  link: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                    helpdeskArticle: u.Z.getArticleURL(_.BhN.POMELO_FAQ),
                  }),
                };
              default:
                return {
                  header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                  subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE,
                };
            }
          })(T, d.ZP.getName(I), N),
          [M, v] = (0, r.useSpring)(() => ({ opacity: 0, y: 10 }));
        return (
          s.useEffect(() => {
            v({ y: 0, opacity: 1, from: { y: 10, opacity: 0 } });
          }, [v, T]),
          (0, n.jsxs)("div", {
            className: g.displayNameContainer,
            children: [
              (0, n.jsxs)(i.animated.div, {
                style: { opacity: M.opacity, y: M.y },
                children: [
                  (0, n.jsx)(r.Heading, {
                    className: g.title,
                    color: "header-primary",
                    variant: "heading-xl/extrabold",
                    children: O.header,
                  }),
                  (0, n.jsxs)("div", {
                    className: g.subtitle,
                    children: [
                      (0, n.jsx)(r.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: O.subtitle,
                      }),
                      null != O.link &&
                        (0, n.jsx)(r.Text, {
                          className: g.link,
                          color: "header-secondary",
                          variant: "text-sm/medium",
                          children: O.link,
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(c.Z, {
                ...S,
                displayProfile: h,
                ref: t,
                usernameSuggestionLoading: a,
                oneClickFlow: f,
              }),
            ],
          })
        );
      }
    },
    544508: function (e, t, a) {
      a(47120), a(757143);
      var n = a(735250),
        s = a(470079),
        i = a(120356),
        r = a.n(i),
        o = a(338545),
        l = a(399606),
        u = a(481060),
        d = a(607070),
        c = a(745510),
        E = a(735336),
        _ = a(131640),
        m = a(51144),
        g = a(346585),
        f = a(81259),
        S = a(119848),
        I = a(801461),
        T = a(228168),
        N = a(689938),
        h = a(740080),
        O = a(733469);
      let M = s.forwardRef(function (e, t) {
        let {
          style: a,
          value: s,
          placeholder: i,
          maxLength: o,
          onFocus: l,
          onChange: d,
        } = e;
        return (0, n.jsx)(u.TextArea, {
          className: r()(h.userCardInput, a),
          autosize: !0,
          error: null,
          showCharacterCount: !1,
          spellCheck: !1,
          showRemainingCharacterCount: !1,
          value: s,
          placeholder: i,
          rows: 1,
          maxLength: o,
          onChange: d,
          onFocus: l,
          onKeyDown: (e) => {
            "Enter" === e.key && e.preventDefault();
          },
          inputRef: t,
        });
      });
      t.Z = s.forwardRef(function (e, t) {
        let {
            user: a,
            error: i,
            formValues: v,
            displayProfile: P,
            onChangeFormValue: L,
            onFocusDisplayName: C,
            onFocusUsername: x,
            editState: A,
            footerNotice: p,
            usernameSuggestionLoading: R,
            oneClickFlow: y,
          } = e,
          { username: Z, globalName: U } = v,
          b = s.useRef(null),
          G = s.useRef(null),
          k = s.useMemo(() => a.merge({ discriminator: "0000" }), [a]),
          [W, D] = (0, u.useSpring)(() => ({ opacity: 0, y: 5 }));
        s.useEffect(() => {
          D({ y: 0, opacity: 1, from: { y: 5, opacity: 0 } });
        }, [D, A]),
          s.useImperativeHandle(
            t,
            () => ({
              focusDisplayName: () => {
                var e, t, a;
                null === (t = G.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = G.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (a = G.current) || void 0 === a || a.focus();
              },
              focusUsername: () => {
                var e, t, a;
                null === (t = b.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = b.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (a = b.current) || void 0 === a || a.focus();
              },
            }),
            [],
          );
        let j = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
          { createMultipleConfettiAt: B } = s.useContext(c.h),
          F = null == P ? void 0 : P.getLegacyUsername();
        return (
          s.useEffect(() => {
            if (!j && A === I.Wq.PREVIEW && !!a.username.includes(I.nA))
              B(
                window.innerWidth / 2 + 150,
                0,
                {
                  velocity: {
                    type: "static-random",
                    minValue: { x: 0, y: -180 },
                    maxValue: { x: 500, y: 180 },
                  },
                },
                15,
              ),
                B(
                  window.innerWidth / 2 - 150,
                  0,
                  {
                    velocity: {
                      type: "static-random",
                      minValue: { x: -500, y: -180 },
                      maxValue: { x: 0, y: 180 },
                    },
                  },
                  15,
                );
          }, [B, A, a, j]),
          (0, n.jsxs)("div", {
            className: r()(h.userCardContainer, {
              [h.shinyCard]: A === I.Wq.PREVIEW,
            }),
            children: [
              (0, n.jsxs)("div", {
                className: h.profileCard,
                children: [
                  (0, n.jsx)(E.Z, {
                    displayProfile: P,
                    user: k,
                    allowEdit: !1,
                    guildId: void 0,
                    profileType: T.y0.POMELO_POPOUT,
                    showPremiumBadgeUpsell: !1,
                  }),
                  (0, n.jsx)(_.tZ, {
                    user: k,
                    displayProfile: P,
                    isMobile: !1,
                    status: null,
                    onClose: void 0,
                    disableUserProfileLink: !0,
                    hasBanner: !1,
                    profileType: T.y0.POMELO_POPOUT,
                    animateOnHover: !1,
                  }),
                  A === I.Wq.PREVIEW &&
                    null != F &&
                    (0, n.jsx)("div", {
                      className: h.legacyUsernameBadgeContainer,
                      children: (0, n.jsx)(u.Tooltip, {
                        position: "top",
                        text: N.Z.Messages.ORIGINALLY_KNOWN_AS.format({
                          legacyUsername: F,
                        }),
                        spacing: 12,
                        children: (e) =>
                          (0, n.jsx)(u.Anchor, {
                            ...e,
                            onClick: e.onClick,
                            children: (0, n.jsx)("img", {
                              className: h.legacyUsernameBadge,
                              alt: "",
                              src: O,
                            }),
                          }),
                      }),
                    }),
                ],
              }),
              A !== I.Wq.PREVIEW &&
                (0, n.jsxs)(o.animated.div, {
                  style: { opacity: W.opacity, y: W.y },
                  className: h.inputContainer,
                  children: [
                    A === I.Wq.EDIT_DISPLAY_NAME &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Text, {
                            className: h.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: N.Z.Messages.DISPLAY_NAME,
                          }),
                          (0, n.jsx)(M, {
                            style: r()(
                              h.displayNameHeight,
                              h["heading-xl/bold"],
                            ),
                            value: null != U ? U : "",
                            placeholder: m.ZP.getName(a),
                            maxLength: I.hy,
                            onChange: (e) => L({ globalName: e }),
                            onFocus: C,
                            ref: G,
                          }),
                        ],
                      }),
                    (A === I.Wq.EDIT_USERNAME || A === I.Wq.SUGGESTION) &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Text, {
                            className: h.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: N.Z.Messages.USERNAME,
                          }),
                          (0, n.jsx)(M, {
                            style: r()(
                              h.userCardHeight,
                              h.lowercaseUsername,
                              h["heading-lg/medium"],
                            ),
                            value: null != Z ? Z : "",
                            placeholder: a.username,
                            maxLength: I.hy,
                            onChange: (e) =>
                              L({ username: e.replace("@", "") }),
                            onFocus: x,
                            ref: b,
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: h.messageContainer,
                      children: (() => {
                        if (null != i)
                          return (0, n.jsx)(f.Z, {
                            type: "error",
                            children: i,
                          });
                        if (null != p) {
                          if (A !== I.Wq.SUGGESTION)
                            return (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: p,
                            });
                          if (!R)
                            return (0, n.jsx)(f.Z, {
                              type: "success",
                              children: p,
                            });
                        }
                        return null == p &&
                          null == i &&
                          (A === I.Wq.EDIT_USERNAME || A === I.Wq.SUGGESTION)
                          ? (0, n.jsx)(S.Z, { username: Z, oneClickFlow: y })
                          : null;
                      })(),
                    }),
                  ],
                }),
              A === I.Wq.PREVIEW &&
                (0, n.jsxs)("div", {
                  className: h.userCard,
                  children: [
                    (0, n.jsx)(u.Heading, {
                      color: "header-primary",
                      variant: "heading-xl/bold",
                      children: m.ZP.getName(a),
                    }),
                    (0, n.jsx)(u.Heading, {
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: a.username,
                    }),
                    (0, n.jsx)(u.Text, {
                      className: h.memberText,
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children:
                        N.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                          date: (0, g.K9)(a.id),
                        }),
                    }),
                  ],
                }),
            ],
          })
        );
      });
    },
    635774: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(120356),
        i = a.n(s),
        r = a(442837),
        o = a(481060),
        l = a(230711),
        u = a(706454),
        d = a(346585),
        c = a(347649),
        E = a(981631),
        _ = a(689938),
        m = a(740080);
      function g(e) {
        let { onClose: t, handleStartFlow: a } = e,
          s = (0, c.CC)(),
          g = (0, r.e7)([u.default], () => u.default.locale);
        return (0, n.jsxs)("div", {
          className: m.infoContainer,
          children: [
            (0, n.jsx)(o.Heading, {
              className: i()(m.finishTitle, { [m.finishTitlePadding]: s }),
              color: "header-primary",
              variant: "heading-xl/bold",
              children: s
                ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format(
                    { date: (0, d.IE)(g) },
                  )
                : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE,
            }),
            (0, n.jsx)(o.Text, {
              className: m.subtitleFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children: s
                ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format(
                    { date: (0, d.IE)(g) },
                  )
                : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1,
            }),
            (0, n.jsx)(o.Text, {
              className: m.promptFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children:
                _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                  onClick: () => {
                    t(), l.Z.open(E.oAB.ACCOUNT);
                  },
                }),
            }),
            (0, n.jsx)(o.Button, {
              className: m.button,
              type: "button",
              size: o.Button.Sizes.SMALL,
              onClick: s ? a : t,
              children: s
                ? _.Z.Messages
                    .PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                : _.Z.Messages.INVITES_DISABLED_CONFIRMATION,
            }),
          ],
        });
      }
    },
    387955: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(120356),
        i = a.n(s),
        r = a(481060),
        o = a(63063),
        l = a(773446),
        u = a(572264),
        d = a(981631),
        c = a(689938),
        E = a(740080),
        _ = a(849399);
      function m(e) {
        let { user: t } = e;
        return (0, n.jsxs)("div", {
          className: E.infoContainer,
          children: [
            (0, n.jsx)("img", { className: E.infoPicture, alt: "", src: _ }),
            (0, n.jsx)(r.Heading, {
              className: E.title,
              color: "header-primary",
              variant: "heading-xl/bold",
              children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                n: t.tag,
              }),
            }),
            (0, n.jsx)(r.Text, {
              className: E.subtitleInfo,
              color: "header-secondary",
              variant: "text-md/medium",
              children:
                c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format(),
            }),
            (0, n.jsx)(r.Text, {
              className: E.prompt,
              color: "header-secondary",
              variant: "text-sm/medium",
              children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                helpdeskArticle: o.Z.getArticleURL(d.BhN.POMELO_FAQ),
              }),
            }),
            (0, n.jsxs)("div", {
              className: i()([E.infoItem, E.infoItemSpacing]),
              children: [
                (0, n.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, n.jsx)(r.FriendsIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
                (0, n.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format(),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: i()([E.infoItem, E.infoItemSpacing]),
              children: [
                (0, n.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, n.jsx)(l.Z, { width: 20, height: 20 }),
                }),
                (0, n.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format(),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: E.infoItem,
              children: [
                (0, n.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, n.jsx)(u.Z, { width: 20, height: 20 }),
                }),
                (0, n.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    c.Z.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format(
                      { username: t.tag },
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
    448624: function (e, t, a) {
      var n, s;
      a.d(t, {
        A: function () {
          return n;
        },
      }),
        ((s = n || (n = {}))[(s.INFO = 0)] = "INFO"),
        (s[(s.EDIT_SCREEN = 1)] = "EDIT_SCREEN"),
        (s[(s.FINISH_LATER = 2)] = "FINISH_LATER"),
        (s[(s.SUGGESTIONS = 3)] = "SUGGESTIONS");
    },
    119848: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u;
        },
      }),
        a(627341);
      var n = a(735250);
      a(470079);
      var s = a(278074),
        i = a(219496),
        r = a(346585),
        o = a(363577),
        l = a(81259);
      function u(e) {
        let { username: t, oneClickFlow: a = !1 } = e,
          u = (0, o.M)((0, r.R_)(t), !0, !1, a);
        if (null == u) return null;
        let d = (0, s.EQ)(u.type)
          .with(i.K.RATE_LIMIT, () => "info")
          .with(i.K.ERROR, () => "error")
          .with(i.K.AVAILABLE, () => "success")
          .with(i.K.INTERNAL_ERROR, () => null)
          .exhaustive();
        return null == d
          ? null
          : (0, n.jsx)(l.Z, { type: d, children: u.message });
      }
    },
    184325: function (e, t, a) {
      var n, s;
      a(653041),
        a(735250),
        a(470079),
        a(120356),
        a(481060),
        a(315263),
        a(100527),
        a(906732),
        a(688465),
        a(617136),
        a(497505),
        a(626135),
        a(785717),
        a(221292),
        a(290421),
        a(318661),
        a(228168),
        a(981631),
        a(689938),
        a(36548),
        a(839973),
        ((s = n || (n = {}))[(s.SIZE_24 = 0)] = "SIZE_24"),
        (s[(s.SIZE_22 = 1)] = "SIZE_22"),
        (s[(s.SIZE_20 = 2)] = "SIZE_20"),
        (s[(s.SIZE_18 = 3)] = "SIZE_18");
    },
    131640: function (e, t, a) {
      a.d(t, {
        tZ: function () {
          return A;
        },
      }),
        a(627341);
      var n = a(735250),
        s = a(470079),
        i = a(120356),
        r = a.n(i),
        o = a(278074);
      a(442837), a(692547);
      var l = a(481060),
        u = a(906732),
        d = a(1585);
      a(797610);
      var c = a(686546),
        E = a(233440);
      a(680295), a(430824);
      var _ = a(626135),
        m = a(74538),
        g = a(998502),
        f = a(785717);
      a(621853);
      var S = a(204197);
      a(735336);
      var I = a(793397);
      a(184325);
      var T = a(652853),
        N = a(171368),
        h = a(228168),
        O = a(981631),
        M = a(474936),
        v = a(689938),
        P = a(753875);
      let L = l.AvatarSizes.SIZE_80,
        C = (0, d.y9)(L),
        x = g.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
      function A(e) {
        let {
            user: t,
            displayProfile: a,
            avatarSrc: i,
            hasBanner: d,
            status: g,
            isMobile: A,
            guildId: p,
            channelId: R,
            onClose: y,
            disableUserProfileLink: Z,
            profileType: U,
            animateOnHover: b,
            hasProfileEffect: G,
            statusTooltipDelay: k,
          } = e,
          { theme: W } = (0, T.z)(),
          D = s.useContext(_.AnalyticsContext),
          j = t.isNonUserBot() && !t.isClyde(),
          B = m.ZP.isPremiumAtLeast(
            null == a ? void 0 : a.premiumType,
            M.p9.TIER_2,
          ),
          F = s.useMemo(() => (0, E.W)(t, R), [t, R]),
          { analyticsLocations: w } = (0, u.ZP)(),
          { context: H, trackUserProfileAction: q } = (0, f.KZ)(),
          z = Z || t.isClyde(),
          {
            avatarDecorationSrc: V,
            avatarSrc: X,
            eventHandlers: Y,
          } = (0, S.Z)({ user: t, guildId: p, size: L, animateOnHover: b }),
          K = (0, n.jsx)("div", {
            className: P.avatarHoverTarget,
            ...Y,
            children: (0, n.jsx)(x, {
              src: null != i ? i : X,
              avatarDecoration: V,
              size: L,
              "aria-label": t.username,
              status: F ? O.Skl.UNKNOWN : g,
              statusBackdropColor:
                B && !F ? (0, l.getStatusBackdropColor)(W) : void 0,
              isMobile: A,
              statusTooltip: !0,
              statusTooltipDelay: k,
            }),
          }),
          Q = (0, o.EQ)(U)
            .with(h.y0.POPOUT, () =>
              (0, I.zW)({
                premiumUserWithBanner: P.avatarPositionPremiumBanner,
                premiumUserWithoutBanner: P.avatarPositionPremiumNoBanner,
                default: P.avatarPositionNormal,
              })({ isPremium: B, hasBanner: d, hasProfileEffect: G }),
            )
            .with(h.y0.POMELO_POPOUT, () => P.avatarPositionPomelo)
            .with(h.y0.PANEL, () => P.avatarPositionPanel)
            .with(h.y0.BITE_SIZE, () => P.avatarPositionBiteSize)
            .exhaustive();
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(l.Clickable, {
            className: r()(
              {
                [P.clickable]: !z,
                [P.avatarWrapperNonUserBot]: j,
                [P.avatarWrapperNormal]: !j,
              },
              Q,
            ),
            onClick:
              j || z
                ? void 0
                : function () {
                    q({ action: "PRESS_VIEW_PROFILE" }),
                      (0, N.openUserProfileModal)({
                        ...H,
                        userId: t.id,
                        sourceAnalyticsLocations: w,
                        analyticsLocation: D.location,
                      }),
                      null == y || y();
                  },
            children: [
              K,
              !z &&
                (function () {
                  let e = null != V,
                    t = e ? C : (0, l.getAvatarSize)(L);
                  return (0, n.jsx)(c.ZP, {
                    mask:
                      null == g || g === O.Skl.UNKNOWN || F
                        ? c.ZP.Masks.AVATAR_DEFAULT
                        : (0, o.EQ)([e, A])
                            .with(
                              [!0, !0],
                              () =>
                                c.ZP.Masks
                                  .AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80,
                            )
                            .with(
                              [!0, !1],
                              () =>
                                c.ZP.Masks
                                  .AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80,
                            )
                            .with(
                              [!1, !0],
                              () => c.ZP.Masks.AVATAR_STATUS_MOBILE_80,
                            )
                            .with(
                              [!1, !1],
                              () => c.ZP.Masks.AVATAR_STATUS_ROUND_80,
                            )
                            .exhaustive(),
                    className: e ? P.avatarDecorationHint : P.avatarHint,
                    style: e ? { borderRadius: 0.4 * t } : void 0,
                    width: t,
                    height: t,
                    children: (0, n.jsx)("div", {
                      className: P.avatarHintInner,
                      children: v.Z.Messages.VIEW_PROFILE,
                    }),
                  });
                })(),
            ],
          }),
        });
      }
    },
    962830: function (e, t, a) {
      e.exports = {
        footer: "footer_b55f45",
        closeContainer: "closeContainer_b55f45",
        contentContainer: "contentContainer_b55f45",
        close: "close_b55f45",
        inline: "inline_b55f45",
        unfilledButton: "unfilledButton_b55f45",
        modalRoot: "modalRoot_b55f45",
      };
    },
    740080: function (e, t, a) {
      e.exports = {
        title: "title_f9d828",
        subtitle: "subtitle_f9d828",
        link: "link_f9d828",
        subtitleFinish: "subtitleFinish_f9d828",
        subtitleInfo: "subtitleInfo_f9d828",
        prompt: "prompt_f9d828",
        promptFinish: "promptFinish_f9d828",
        finishTitle: "finishTitle_f9d828",
        finishTitlePadding: "finishTitlePadding_f9d828",
        button: "button_f9d828",
        infoContainer: "infoContainer_f9d828",
        infoItem: "infoItem_f9d828",
        infoItemSpacing: "infoItemSpacing_f9d828",
        infoIcon: "infoIcon_f9d828",
        infoPicture: "infoPicture_f9d828",
        userCardContainer: "userCardContainer_f9d828",
        userCard: "userCard_f9d828",
        userCardHeight: "userCardHeight_f9d828",
        displayNameHeight: "displayNameHeight_f9d828",
        userCardInput: "userCardInput_f9d828",
        lowercaseUsername: "lowercaseUsername_f9d828",
        profileCard: "profileCard_f9d828",
        displayNameContainer: "displayNameContainer_f9d828",
        formMessage: "formMessage_f9d828",
        formMessageNegative: "formMessageNegative_f9d828",
        formMessagePositive: "formMessagePositive_f9d828",
        messageContainer: "messageContainer_f9d828",
        inputContainer: "inputContainer_f9d828",
        textPadding: "textPadding_f9d828",
        memberText: "memberText_f9d828",
        shinyCard: "shinyCard_f9d828",
        legacyUsernameBadgeContainer: "legacyUsernameBadgeContainer_f9d828",
        legacyUsernameBadge: "legacyUsernameBadge_f9d828",
      };
    },
    36548: function (e, t, a) {
      e.exports = {};
    },
    753875: function (e, t, a) {
      e.exports = {
        avatarHint: "avatarHint_f89da9",
        avatarDecorationHint: "avatarDecorationHint_f89da9",
        avatarHintInner: "avatarHintInner_f89da9",
        avatarWrapperNormal: "avatarWrapperNormal_f89da9 avatarWrapper_f89da9",
        clickable: "clickable_f89da9",
        avatarWrapperNonUserBot:
          "avatarWrapperNonUserBot_f89da9 avatarWrapper_f89da9",
        avatarPositionNormal: "avatarPositionNormal_f89da9",
        avatarPositionPremiumBanner: "avatarPositionPremiumBanner_f89da9",
        avatarPositionPremiumNoBanner: "avatarPositionPremiumNoBanner_f89da9",
        avatarPositionPanel: "avatarPositionPanel_f89da9",
        avatarPositionPomelo: "avatarPositionPomelo_f89da9",
        avatarPositionBiteSize: "avatarPositionBiteSize_f89da9",
        avatarHoverTarget: "avatarHoverTarget_f89da9",
      };
    },
  },
]);
//# sourceMappingURL=7c63344dcf774c8b7fc7.js.map
