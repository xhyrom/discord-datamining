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
    551556: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(735250);
      s(470079);
      var i = s(692547),
        a = s(325767);
      function r(e) {
        let {
          width: t = 24,
          height: s = 24,
          color: r = i.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: o = i.Z.unsafe_rawColors.BRAND_500.css,
          ...l
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, a.Z)(l),
          width: t,
          height: s,
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
    986197: function (e, t, s) {
      var n = s(990547),
        i = s(544891),
        a = s(570140),
        r = s(881052),
        o = s(626135),
        l = s(573261),
        u = s(545851),
        c = s(109488),
        d = s(794099),
        E = s(981631),
        _ = s(689938);
      s(135200);
      t.Z = {
        resetSuggestions: () =>
          a.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if (!!(0, d.vc)()) {
            a.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var s;
              let n = await i.tn.get({
                url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                n.ok &&
                (null === (s = n.body) || void 0 === s ? void 0 : s.username) !=
                  null
              )
                return a.Z.dispatch({
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
          if (!!(0, c.P)())
            try {
              var t;
              a.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let s = await i.tn.get({
                url: E.ANM.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                s.ok &&
                (null === (t = s.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return a.Z.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: s.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, s;
          let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let g =
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
          if (null != g)
            return (
              o.default.track(E.rMx.POMELO_ERRORS, {
                reason: g,
                username_error: !0,
                location: i,
                one_click_flow: d,
              }),
              a.Z.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: g,
              })
            );
          if (!!(0, u.E)())
            try {
              let t = await l.Z.post({
                url: c ? E.ANM.POMELO_ATTEMPT_UNAUTHED : E.ANM.POMELO_ATTEMPT,
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
                  location: i,
                  one_click_flow: d,
                }),
                a.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (l) {
              let t = new r.Hx(l),
                n =
                  null !== (s = t.getAnyErrorMessage()) && void 0 !== s
                    ? s
                    : void 0;
              o.default.track(E.rMx.POMELO_ERRORS, {
                reason: n,
                username_error: !0,
                location: i,
                one_click_flow: d,
              }),
                a.Z.dispatch({
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
            s = await l.Z.post({
              body: e,
              url: E.ANM.POMELO_CREATE,
              trackedActionData: {
                event: n.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            a.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: s.body }), s.body
          );
        },
      };
    },
    545851: function (e, t, s) {
      s.d(t, {
        E: function () {
          return i;
        },
      });
      let n = (0, s(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          n.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, s) {
      s.d(t, {
        c: function () {
          return i;
        },
      });
      let n = (0, s(818083).B)({
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
        i = () =>
          n.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, s) {
      var n,
        i,
        a,
        r,
        o = s(31775),
        l = s.n(o),
        u = s(442837),
        c = s(570140),
        d = s(70956);
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
      class g extends (r = u.ZP.Store) {
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
      (a = "PomeloStore"),
        (i = "displayName") in (n = g)
          ? Object.defineProperty(n, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[i] = a),
        (t.Z = new g(c.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: s } = e;
            _.validations.set(t, { taken: s });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: s, statusCode: n, retryAfter: i } = e;
            429 === n
              ? _.validations.set(
                  t,
                  { taken: null, error: s, rateLimited: !0 },
                  (null != i ? i : 7) * d.Z.Millis.SECOND,
                )
              : _.validations.set(t, { taken: null, error: s }),
              null != i &&
                (_.retryAfterTime = Date.now() + i * d.Z.Millis.SECOND);
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
            let { suggestion: t, source: s } = e;
            (_.suggestions.registration = {
              suggestion: t,
              source: s,
              fetched: !0,
            }),
              (null == t ? void 0 : t.username) != null &&
                _.validations.set(t.username, { taken: !1 });
          },
        }));
    },
    109488: function (e, t, s) {
      s.d(t, {
        P: function () {
          return i;
        },
      });
      let n = (0, s(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          n.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, s) {
      s.d(t, {
        F4: function () {
          return i;
        },
        vc: function () {
          return a;
        },
      });
      let n = (0, s(818083).B)({
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
        i = () =>
          n.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        a = () =>
          n.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    363577: function (e, t, s) {
      s.d(t, {
        M: function () {
          return c;
        },
      });
      var n = s(470079),
        i = s(392711),
        a = s(399606),
        r = s(986197),
        o = s(654344),
        l = s(135200),
        u = s(346585);
      let c = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          d = (0, a.e7)([l.Z], () => l.Z.validate(e), [e]),
          E = (0, a.e7)([l.Z], () => l.Z.isRateLimited()),
          _ = (0, o.c)(),
          g = n.useMemo(
            () =>
              (0, i.debounce)(
                (e) => r.Z.attemptPomelo(e, s ? "registration" : "modal", s, c),
                _,
              ),
            [_, s, c],
          );
        return (
          n.useEffect(() => {
            t && !E && null == d && "" !== e && g(e);
          }, [t, E, d, e, g]),
          n.useMemo(() => (null != d ? (0, u.ti)(d) : void 0), [d])
        );
      };
    },
    361117: function (e, t, s) {
      s.d(t, {
        G: function () {
          return l;
        },
      }),
        s(47120),
        s(773603);
      var n = s(470079),
        i = s(399606),
        a = s(570140),
        r = s(986197),
        o = s(135200);
      let l = (e) => {
        let [t, s] = (0, i.Wu)([o.Z], () => [
          o.Z.usernameSuggestion(),
          o.Z.usernameSuggestionLoading(),
        ]);
        return (
          n.useEffect(
            () => (
              o.Z.wasSuggestionsFetched()
                ? a.Z.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !1,
                  })
                : r.Z.fetchSuggestions(e).finally(() => {
                    a.Z.dispatch({
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
          { usernameSuggestion: t, usernameSuggestionLoading: s }
        );
      };
    },
    773446: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(735250);
      s(470079);
      var i = s(325767);
      function a(e) {
        let {
          width: t = 16,
          height: s = 16,
          color: a = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, i.Z)(o),
          width: t,
          height: s,
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("g", {
              clipPath: "url(#clip0_3283_145261)",
              children: (0, n.jsx)("path", {
                d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                fill: a,
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
    572264: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(735250);
      s(470079);
      var i = s(325767);
      function a(e) {
        let {
          width: t = 16,
          height: s = 16,
          color: a = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, n.jsx)("svg", {
          ...(0, i.Z)(o),
          width: t,
          height: s,
          viewBox: "0 0 23 23",
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
            fill: a,
            className: r,
          }),
        });
      }
    },
    193049: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return P;
          },
        }),
        s(47120);
      var n = s(735250),
        i = s(470079),
        a = s(512722),
        r = s.n(a),
        o = s(990547),
        l = s(399606),
        u = s(481060),
        c = s(232567),
        d = s(809206),
        E = s(479531),
        _ = s(484459),
        g = s(594174),
        m = s(626135),
        S = s(51144),
        I = s(986197),
        T = s(135200),
        N = s(346585),
        O = s(347649),
        h = s(361117),
        f = s(108793),
        M = s(635774),
        L = s(387955),
        x = s(801461),
        C = s(448624),
        R = s(981631),
        A = s(689938),
        v = s(168534);
      function P(e) {
        let t,
          {
            source: s,
            transitionState: a,
            onClose: P,
            oneClickFlow: y = !1,
          } = e,
          [Z, U] = i.useState(y ? C.A.SUGGESTIONS : C.A.INFO),
          [G, b] = i.useState(!1),
          [j, D] = i.useState(null),
          [W, k] = i.useState(y ? x.Wq.SUGGESTION : x.Wq.NONE),
          [F, w] = i.useState(!1),
          [B, q] = i.useState(!1),
          H = i.useRef(null),
          X = (0, l.e7)([T.Z], () => T.Z.isCurrentUsernameInvalid()),
          V = (0, l.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return r()(null != e, "PomeloModal: user cannot be undefined"), e;
          }),
          z = (0, O.CC)(),
          { usernameSuggestion: Y, usernameSuggestionLoading: K } = (0, h.G)(
            y ? x.en : void 0,
          );
        i.useEffect(() => {
          W === x.Wq.EDIT_USERNAME && q(!0),
            m.default.track(R.rMx.POMELO_EDIT_STEP_VIEWED, {
              source: s,
              step: W,
            });
        }, [W, s]),
          i.useEffect(() => {
            !B &&
              !F &&
              null != Y &&
              Y.length > 0 &&
              $((e) => ({ ...e, username: Y }));
          }, [Y, B, F]);
        let [Q, $] = i.useState({
            username: (0, N.e$)(V),
            globalName: S.ZP.getName(V),
          }),
          J = (e) => {
            D(null), null != e.username && w(!0), $((t) => ({ ...t, ...e }));
          },
          ee = i.useMemo(
            () => [
              {
                slideId: C.A.INFO,
                next: C.A.EDIT_SCREEN,
                footerButtons: ["REMIND_ME_LATER", "GET_STARTED"],
              },
              {
                slideId: C.A.EDIT_SCREEN,
                next: C.A.FINISH_LATER,
                back: C.A.INFO,
                footerButtons: [
                  W === x.Wq.PREVIEW ? "GOT_IT" : "BACK",
                  W === x.Wq.PREVIEW
                    ? "GOT_IT"
                    : W === x.Wq.EDIT_USERNAME
                      ? "SUBMIT"
                      : "NEXT",
                ],
              },
              { slideId: C.A.FINISH_LATER, back: C.A.EDIT_SCREEN },
              {
                slideId: C.A.SUGGESTIONS,
                footerButtons: [W === x.Wq.PREVIEW ? "GOT_IT" : "UPDATE"],
              },
              { slideId: C.A.FINISH_LATER },
            ],
            [W],
          ),
          et = ee.length,
          es = i.useCallback(async () => {
            if (Q.globalName.length <= 0) {
              let e = A.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                minNum: 1,
                maxNum: 32,
              });
              D(e),
                m.default.track(R.rMx.POMELO_ERRORS, {
                  reason: e,
                  display_name_error: !0,
                  location: "modal",
                });
              return;
            }
            if (S.ZP.getGlobalName(V) === Q.globalName) {
              k(x.Wq.EDIT_USERNAME);
              return;
            }
            try {
              D(null),
                b(!0),
                await (0, d.S2)({ global_name: Q.globalName }),
                k(x.Wq.EDIT_USERNAME);
            } catch (t) {
              let e = new E.Z(t).getAnyErrorMessage();
              m.default.track(R.rMx.POMELO_ERRORS, {
                reason: e,
                display_name_error: !0,
                location: "modal",
              }),
                D(e);
            } finally {
              b(!1);
            }
          }, [V, Q]),
          en = i.useCallback(async () => {
            try {
              D(null),
                b(!0),
                await I.Z.createPomelo({ username: (0, N.R_)(Q.username) }, y),
                await (0, c.In)(V.id),
                k(x.Wq.PREVIEW);
            } catch (s) {
              let e = new E.Z(s),
                t =
                  (null == e ? void 0 : e.status) != null &&
                  e.status >= 400 &&
                  e.status < 500
                    ? e.getAnyErrorMessage()
                    : A.Z.Messages.ERROR_GENERIC_TITLE;
              D(t),
                m.default.track(R.rMx.POMELO_ERRORS, {
                  reason: t,
                  username_error: !0,
                  location: "modal",
                  one_click_flow: y,
                });
            } finally {
              b(!1);
            }
          }, [Q, V.id, y]),
          ei = X || (0, N.NX)(V),
          ea = i.useCallback(() => {
            k(ei ? x.Wq.EDIT_USERNAME : x.Wq.EDIT_DISPLAY_NAME),
              U(ee[Math.min(et - 1, Z + 1)].slideId);
          }, [Z, ee, et, ei]),
          er = i.useCallback(() => {
            D(null),
              Z === C.A.EDIT_SCREEN
                ? W === x.Wq.EDIT_USERNAME
                  ? ei
                    ? (k(x.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId))
                    : k(x.Wq.EDIT_DISPLAY_NAME)
                  : W === x.Wq.EDIT_DISPLAY_NAME
                    ? (k(x.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId))
                    : W === x.Wq.PREVIEW && k(x.Wq.EDIT_USERNAME)
                : U(ee[Math.max(0, Z - 1)].slideId);
          }, [ee, Z, W, ei]),
          eo = i.useCallback(() => {
            U(C.A.FINISH_LATER);
          }, []),
          el = i.useCallback(() => {
            y
              ? (U(C.A.SUGGESTIONS), k(x.Wq.SUGGESTION))
              : (U(C.A.INFO), k(x.Wq.NONE));
          }, [y]),
          eu = i.useMemo(() => {
            if (Z === C.A.EDIT_SCREEN && W === x.Wq.EDIT_DISPLAY_NAME)
              return es;
            if (Z === C.A.EDIT_SCREEN && W === x.Wq.EDIT_USERNAME) return en;
            if (Z === C.A.SUGGESTIONS && W === x.Wq.SUGGESTION) return en;
            else return ea;
          }, [Z, W, es, en, ea]),
          ec = i.useMemo(() => {
            var e, t;
            return p(
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
                onClose: P,
              },
              G,
              K,
              F,
            );
          }, [er, eo, eu, P, ee, Z, G, K, F]),
          ed = i.useMemo(() => (0, N.zV)(V), [V]);
        i.useLayoutEffect(() => {
          (0, _.Z)(V.id, ed);
        }, [V, ed]),
          i.useEffect(() => {
            var e, t;
            switch (W) {
              case x.Wq.EDIT_DISPLAY_NAME:
                null === (e = H.current) ||
                  void 0 === e ||
                  e.focusDisplayName();
                break;
              case x.Wq.EDIT_USERNAME:
              case x.Wq.SUGGESTION:
                null === (t = H.current) || void 0 === t || t.focusUsername();
            }
          }, [W]);
        return (
          !F &&
            null == j &&
            (W === x.Wq.EDIT_USERNAME
              ? (t = A.Z.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                  source: V.username,
                }))
              : W === x.Wq.SUGGESTION &&
                (K || null != Y) &&
                (t = A.Z.Messages.POMELO_SUGGESTIONS_OCF)),
          (0, n.jsxs)(u.ModalRoot, {
            className: v.modalRoot,
            impression: {
              impressionName: o.ImpressionNames.POMELO_LANDING,
              impressionProperties: {
                source: s,
                impression_group: o.ImpressionGroups.POMELO_FLOW,
                one_click_flow: y,
              },
            },
            transitionState: a,
            size: u.ModalSize.DYNAMIC,
            children: [
              (0, n.jsx)(u.Button, {
                onClick: () => {
                  z && (Z === C.A.SUGGESTIONS || Z === C.A.EDIT_SCREEN)
                    ? U(C.A.FINISH_LATER)
                    : P();
                },
                size: u.Button.Sizes.MIN,
                look: u.Button.Looks.BLANK,
                className: v.closeContainer,
                "aria-label": A.Z.Messages.CLOSE,
                children: (0, n.jsx)(u.XSmallIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 15,
                  height: 15,
                  className: v.close,
                }),
              }),
              (0, n.jsx)(u.ModalContent, {
                className: v.contentContainer,
                children: (0, n.jsxs)(u.Slides, {
                  activeSlide: Z,
                  width: 480,
                  children: [
                    (0, n.jsx)(u.Slide, {
                      id: C.A.INFO,
                      children: (0, n.jsx)(L.Z, { user: V }),
                    }),
                    (0, n.jsx)(u.Slide, {
                      id: C.A.EDIT_SCREEN,
                      children: (0, n.jsx)(f.Z, {
                        user: V,
                        error: j,
                        editState: W,
                        userRef: H,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: J,
                        onFocusUsername: () => k(x.Wq.EDIT_USERNAME),
                        onFocusDisplayName: () => k(x.Wq.EDIT_DISPLAY_NAME),
                        onClose: P,
                      }),
                    }),
                    (0, n.jsx)(u.Slide, {
                      id: C.A.FINISH_LATER,
                      children: (0, n.jsx)(M.Z, {
                        onClose: P,
                        handleStartFlow: el,
                      }),
                    }),
                    (0, n.jsx)(u.Slide, {
                      id: C.A.SUGGESTIONS,
                      children: (0, n.jsx)(f.Z, {
                        user: V,
                        error: j,
                        editState: W,
                        userRef: H,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: J,
                        onFocusUsername: () => k(x.Wq.SUGGESTION),
                        onFocusDisplayName: () => k(x.Wq.EDIT_DISPLAY_NAME),
                        onClose: P,
                        usernameSuggestionLoading: K,
                        oneClickFlow: y,
                      }),
                    }),
                  ],
                }),
              }),
              ec,
            ],
          })
        );
      }
      let p = (e, t, s, i, a) =>
        0 === e.length
          ? null
          : (0, n.jsxs)(u.ModalFooter, {
              className: v.footer,
              children: [
                (0, n.jsxs)("div", {
                  className: v.inline,
                  children: [
                    e.includes("REMIND_ME_LATER") &&
                      (0, n.jsx)(u.Button, {
                        className: v.unfilledButton,
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        color: u.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children:
                          A.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA,
                      }),
                    e.includes("NEXT") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: s,
                        onClick: t.handleNext,
                        children: A.Z.Messages.NEXT,
                      }),
                    e.includes("SUBMIT") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: s,
                        onClick: t.handleNext,
                        children: A.Z.Messages.SUBMIT,
                      }),
                    e.includes("GET_STARTED") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: A.Z.Messages.GET_STARTED,
                      }),
                    e.includes("GOT_IT") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: A.Z.Messages.GOT_IT,
                      }),
                    e.includes("UPDATE") &&
                      (0, n.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        disabled: i && !a,
                        submitting: s,
                        onClick: t.handleNext,
                        children: A.Z.Messages.UPDATE,
                      }),
                  ],
                }),
                e.includes("BACK") &&
                  (0, n.jsx)(u.Button, {
                    className: v.unfilledButton,
                    type: "button",
                    size: u.Button.Sizes.SMALL,
                    look: u.Button.Looks.BLANK,
                    color: u.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: A.Z.Messages.BACK,
                  }),
              ],
            });
    },
    81259: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return g;
        },
      }),
        s(627341);
      var n = s(735250);
      s(470079);
      var i = s(120356),
        a = s.n(i),
        r = s(278074),
        o = s(692547),
        l = s(481060),
        u = s(551556),
        c = s(923112);
      let d = () =>
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
      function g(e) {
        let t = (0, r.EQ)(e.type)
          .with("info", () => (0, n.jsx)(_, {}))
          .with("error", () => (0, n.jsx)(E, {}))
          .with("success", () => (0, n.jsx)(d, {}))
          .otherwise(() => null);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t,
            (0, n.jsx)(l.Text, {
              variant: "text-sm/medium",
              className: a()(c.formMessage, {
                [c.formMessageNegative]: "error" === e.type,
                [c.formMessagePositive]: "success" === e.type,
              }),
              children: e.children,
            }),
          ],
        });
      }
    },
    108793: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return S;
        },
      }),
        s(47120);
      var n = s(735250),
        i = s(470079),
        a = s(212433),
        r = s(481060),
        o = s(230711),
        l = s(687158),
        u = s(63063),
        c = s(51144),
        d = s(544508),
        E = s(801461),
        _ = s(981631),
        g = s(689938),
        m = s(923112);
      function S(e) {
        let {
            userRef: t,
            usernameSuggestionLoading: s = !1,
            oneClickFlow: S = !1,
            ...I
          } = e,
          { user: T, editState: N, onClose: O } = I,
          h = (0, l.ZP)(T.id),
          f = (function (e, t, s) {
            switch (e) {
              case E.Wq.EDIT_USERNAME:
                return {
                  header: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                  subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE,
                };
              case E.Wq.EDIT_DISPLAY_NAME:
                return {
                  header: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
                  subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE,
                };
              case E.Wq.PREVIEW:
                return {
                  header:
                    g.Z.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
                      displayName: t,
                    }),
                  subtitle:
                    g.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                      onClick: () => {
                        s(), o.Z.open(_.oAB.ACCOUNT);
                      },
                    }),
                };
              case E.Wq.SUGGESTION:
                return {
                  header: g.Z.Messages.POMELO_ACTION_LABEL_OCF,
                  subtitle:
                    g.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
                  link: g.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                    helpdeskArticle: u.Z.getArticleURL(_.BhN.POMELO_FAQ),
                  }),
                };
              default:
                return {
                  header: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                  subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE,
                };
            }
          })(N, c.ZP.getName(T), O),
          [M, L] = (0, r.useSpring)(() => ({ opacity: 0, y: 10 }));
        return (
          i.useEffect(() => {
            L({ y: 0, opacity: 1, from: { y: 10, opacity: 0 } });
          }, [L, N]),
          (0, n.jsxs)("div", {
            className: m.displayNameContainer,
            children: [
              (0, n.jsxs)(a.animated.div, {
                style: { opacity: M.opacity, y: M.y },
                children: [
                  (0, n.jsx)(r.Heading, {
                    className: m.title,
                    color: "header-primary",
                    variant: "heading-xl/extrabold",
                    children: f.header,
                  }),
                  (0, n.jsxs)("div", {
                    className: m.subtitle,
                    children: [
                      (0, n.jsx)(r.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: f.subtitle,
                      }),
                      null != f.link &&
                        (0, n.jsx)(r.Text, {
                          className: m.link,
                          color: "header-secondary",
                          variant: "text-sm/medium",
                          children: f.link,
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(d.Z, {
                ...I,
                displayProfile: h,
                ref: t,
                usernameSuggestionLoading: s,
                oneClickFlow: S,
              }),
            ],
          })
        );
      }
    },
    544508: function (e, t, s) {
      s(47120), s(757143);
      var n = s(735250),
        i = s(470079),
        a = s(120356),
        r = s.n(a),
        o = s(212433),
        l = s(399606),
        u = s(481060),
        c = s(607070),
        d = s(745510),
        E = s(899007),
        _ = s(867176),
        g = s(51144),
        m = s(346585),
        S = s(81259),
        I = s(119848),
        T = s(801461),
        N = s(228168),
        O = s(689938),
        h = s(923112),
        f = s(733469);
      let M = i.forwardRef(function (e, t) {
        let {
          style: s,
          value: i,
          placeholder: a,
          maxLength: o,
          onFocus: l,
          onChange: c,
        } = e;
        return (0, n.jsx)(u.TextArea, {
          className: r()(h.userCardInput, s),
          autosize: !0,
          error: null,
          showCharacterCount: !1,
          spellCheck: !1,
          showRemainingCharacterCount: !1,
          value: i,
          placeholder: a,
          rows: 1,
          maxLength: o,
          onChange: c,
          onFocus: l,
          onKeyDown: (e) => {
            "Enter" === e.key && e.preventDefault();
          },
          inputRef: t,
        });
      });
      t.Z = i.forwardRef(function (e, t) {
        let {
            user: s,
            error: a,
            formValues: L,
            displayProfile: x,
            onChangeFormValue: C,
            onFocusDisplayName: R,
            onFocusUsername: A,
            editState: v,
            footerNotice: P,
            usernameSuggestionLoading: p,
            oneClickFlow: y,
          } = e,
          { username: Z, globalName: U } = L,
          G = i.useRef(null),
          b = i.useRef(null),
          j = i.useMemo(() => s.merge({ discriminator: "0000" }), [s]),
          [D, W] = (0, u.useSpring)(() => ({ opacity: 0, y: 5 }));
        i.useEffect(() => {
          W({ y: 0, opacity: 1, from: { y: 5, opacity: 0 } });
        }, [W, v]),
          i.useImperativeHandle(
            t,
            () => ({
              focusDisplayName: () => {
                var e, t, s;
                null === (t = b.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = b.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (s = b.current) || void 0 === s || s.focus();
              },
              focusUsername: () => {
                var e, t, s;
                null === (t = G.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = G.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (s = G.current) || void 0 === s || s.focus();
              },
            }),
            [],
          );
        let k = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
          { createMultipleConfettiAt: F } = i.useContext(d.h),
          w = null == x ? void 0 : x.getLegacyUsername();
        return (
          i.useEffect(() => {
            if (!k && v === T.Wq.PREVIEW && !!s.username.includes(T.nA))
              F(
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
                F(
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
          }, [F, v, s, k]),
          (0, n.jsxs)("div", {
            className: r()(h.userCardContainer, {
              [h.shinyCard]: v === T.Wq.PREVIEW,
            }),
            children: [
              (0, n.jsxs)("div", {
                className: h.profileCard,
                children: [
                  (0, n.jsx)(_.Z, {
                    user: j,
                    displayProfile: x,
                    profileType: N.y0.PANEL,
                  }),
                  (0, n.jsx)(E.Z, {
                    user: j,
                    displayProfile: x,
                    profileType: N.y0.PANEL,
                  }),
                  v === T.Wq.PREVIEW &&
                    null != w &&
                    (0, n.jsx)("div", {
                      className: h.legacyUsernameBadgeContainer,
                      children: (0, n.jsx)(u.Tooltip, {
                        position: "top",
                        text: O.Z.Messages.ORIGINALLY_KNOWN_AS.format({
                          legacyUsername: w,
                        }),
                        spacing: 12,
                        children: (e) =>
                          (0, n.jsx)(u.Anchor, {
                            ...e,
                            onClick: e.onClick,
                            children: (0, n.jsx)("img", {
                              className: h.legacyUsernameBadge,
                              alt: "",
                              src: f,
                            }),
                          }),
                      }),
                    }),
                ],
              }),
              v !== T.Wq.PREVIEW &&
                (0, n.jsxs)(o.animated.div, {
                  style: { opacity: D.opacity, y: D.y },
                  className: h.inputContainer,
                  children: [
                    v === T.Wq.EDIT_DISPLAY_NAME &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Text, {
                            className: h.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: O.Z.Messages.DISPLAY_NAME,
                          }),
                          (0, n.jsx)(M, {
                            style: r()(
                              h.displayNameHeight,
                              h["heading-xl/bold"],
                            ),
                            value: null != U ? U : "",
                            placeholder: g.ZP.getName(s),
                            maxLength: T.hy,
                            onChange: (e) => C({ globalName: e }),
                            onFocus: R,
                            ref: b,
                          }),
                        ],
                      }),
                    (v === T.Wq.EDIT_USERNAME || v === T.Wq.SUGGESTION) &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Text, {
                            className: h.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: O.Z.Messages.USERNAME,
                          }),
                          (0, n.jsx)(M, {
                            style: r()(
                              h.userCardHeight,
                              h.lowercaseUsername,
                              h["heading-lg/medium"],
                            ),
                            value: null != Z ? Z : "",
                            placeholder: s.username,
                            maxLength: T.hy,
                            onChange: (e) =>
                              C({ username: e.replace("@", "") }),
                            onFocus: A,
                            ref: G,
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: h.messageContainer,
                      children: (() => {
                        if (null != a)
                          return (0, n.jsx)(S.Z, {
                            type: "error",
                            children: a,
                          });
                        if (null != P) {
                          if (v !== T.Wq.SUGGESTION)
                            return (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: P,
                            });
                          if (!p)
                            return (0, n.jsx)(S.Z, {
                              type: "success",
                              children: P,
                            });
                        }
                        return null == P &&
                          null == a &&
                          (v === T.Wq.EDIT_USERNAME || v === T.Wq.SUGGESTION)
                          ? (0, n.jsx)(I.Z, { username: Z, oneClickFlow: y })
                          : null;
                      })(),
                    }),
                  ],
                }),
              v === T.Wq.PREVIEW &&
                (0, n.jsxs)("div", {
                  className: h.userCard,
                  children: [
                    (0, n.jsx)(u.Heading, {
                      color: "header-primary",
                      variant: "heading-xl/bold",
                      children: g.ZP.getName(s),
                    }),
                    (0, n.jsx)(u.Heading, {
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: s.username,
                    }),
                    (0, n.jsx)(u.Text, {
                      className: h.memberText,
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children:
                        O.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                          date: (0, m.K9)(s.id),
                        }),
                    }),
                  ],
                }),
            ],
          })
        );
      });
    },
    635774: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = s(735250);
      s(470079);
      var i = s(120356),
        a = s.n(i),
        r = s(442837),
        o = s(481060),
        l = s(230711),
        u = s(706454),
        c = s(346585),
        d = s(347649),
        E = s(981631),
        _ = s(689938),
        g = s(923112);
      function m(e) {
        let { onClose: t, handleStartFlow: s } = e,
          i = (0, d.CC)(),
          m = (0, r.e7)([u.default], () => u.default.locale);
        return (0, n.jsxs)("div", {
          className: g.infoContainer,
          children: [
            (0, n.jsx)(o.Heading, {
              className: a()(g.finishTitle, { [g.finishTitlePadding]: i }),
              color: "header-primary",
              variant: "heading-xl/bold",
              children: i
                ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format(
                    { date: (0, c.IE)(m) },
                  )
                : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE,
            }),
            (0, n.jsx)(o.Text, {
              className: g.subtitleFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children: i
                ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format(
                    { date: (0, c.IE)(m) },
                  )
                : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1,
            }),
            (0, n.jsx)(o.Text, {
              className: g.promptFinish,
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
              className: g.button,
              type: "button",
              size: o.Button.Sizes.SMALL,
              onClick: i ? s : t,
              children: i
                ? _.Z.Messages
                    .PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                : _.Z.Messages.INVITES_DISABLED_CONFIRMATION,
            }),
          ],
        });
      }
    },
    387955: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = s(735250);
      s(470079);
      var i = s(120356),
        a = s.n(i),
        r = s(481060),
        o = s(63063),
        l = s(773446),
        u = s(572264),
        c = s(981631),
        d = s(689938),
        E = s(923112),
        _ = s(849399);
      function g(e) {
        let { user: t } = e;
        return (0, n.jsxs)("div", {
          className: E.infoContainer,
          children: [
            (0, n.jsx)("img", { className: E.infoPicture, alt: "", src: _ }),
            (0, n.jsx)(r.Heading, {
              className: E.title,
              color: "header-primary",
              variant: "heading-xl/bold",
              children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                n: t.tag,
              }),
            }),
            (0, n.jsx)(r.Text, {
              className: E.subtitleInfo,
              color: "header-secondary",
              variant: "text-md/medium",
              children:
                d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format(),
            }),
            (0, n.jsx)(r.Text, {
              className: E.prompt,
              color: "header-secondary",
              variant: "text-sm/medium",
              children: d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                helpdeskArticle: o.Z.getArticleURL(c.BhN.POMELO_FAQ),
              }),
            }),
            (0, n.jsxs)("div", {
              className: a()([E.infoItem, E.infoItemSpacing]),
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
                    d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format(),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: a()([E.infoItem, E.infoItemSpacing]),
              children: [
                (0, n.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, n.jsx)(l.Z, { width: 20, height: 20 }),
                }),
                (0, n.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    d.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format(),
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
                    d.Z.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format(
                      { username: t.tag },
                    ),
                }),
              ],
            }),
          ],
        });
      }
    },
    448624: function (e, t, s) {
      var n, i;
      s.d(t, {
        A: function () {
          return n;
        },
      }),
        ((i = n || (n = {}))[(i.INFO = 0)] = "INFO"),
        (i[(i.EDIT_SCREEN = 1)] = "EDIT_SCREEN"),
        (i[(i.FINISH_LATER = 2)] = "FINISH_LATER"),
        (i[(i.SUGGESTIONS = 3)] = "SUGGESTIONS");
    },
    119848: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return u;
        },
      }),
        s(627341);
      var n = s(735250);
      s(470079);
      var i = s(278074),
        a = s(219496),
        r = s(346585),
        o = s(363577),
        l = s(81259);
      function u(e) {
        let { username: t, oneClickFlow: s = !1 } = e,
          u = (0, o.M)((0, r.R_)(t), !0, !1, s);
        if (null == u) return null;
        let c = (0, i.EQ)(u.type)
          .with(a.K.RATE_LIMIT, () => "info")
          .with(a.K.ERROR, () => "error")
          .with(a.K.AVAILABLE, () => "success")
          .with(a.K.INTERNAL_ERROR, () => null)
          .exhaustive();
        return null == c
          ? null
          : (0, n.jsx)(l.Z, { type: c, children: u.message });
      }
    },
  },
]);
//# sourceMappingURL=c2480e96ec7b2bc06a73.js.map
