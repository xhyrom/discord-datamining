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
    551556: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(735250);
      n(470079);
      var i = n(692547),
        a = n(325767);
      function r(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: r = i.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: o = i.Z.unsafe_rawColors.BRAND_500.css,
          ...l
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: [
            (0, s.jsx)("path", {
              fill: o,
              d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, s.jsx)("path", {
              d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
              fill: r,
            }),
          ],
        });
      }
    },
    986197: function (e, t, n) {
      var s = n(990547),
        i = n(544891),
        a = n(570140),
        r = n(881052),
        o = n(626135),
        l = n(573261),
        u = n(545851),
        d = n(109488),
        c = n(794099),
        E = n(981631),
        _ = n(689938);
      n(135200);
      t.Z = {
        resetSuggestions: () =>
          a.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if (!!(0, c.vc)()) {
            a.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var n;
              let s = await i.tn.get({
                url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                s.ok &&
                (null === (n = s.body) || void 0 === n ? void 0 : n.username) !=
                  null
              )
                return a.Z.dispatch({
                  type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                  suggestion: s.body,
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
              a.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let n = await i.tn.get({
                url: E.ANM.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                n.ok &&
                (null === (t = n.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return a.Z.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: n.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, n;
          let i =
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
                location: i,
                one_click_flow: c,
              }),
              a.Z.dispatch({
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
                  event: s.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                o.default.track(E.rMx.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: i,
                  one_click_flow: c,
                }),
                a.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (l) {
              let t = new r.Hx(l),
                s =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              o.default.track(E.rMx.POMELO_ERRORS, {
                reason: s,
                username_error: !0,
                location: i,
                one_click_flow: c,
              }),
                a.Z.dispatch({
                  username: e,
                  type: "POMELO_ATTEMPT_FAILURE",
                  error:
                    null != t.status && t.status < 500 && 401 !== t.status
                      ? s
                      : void 0,
                  statusCode: t.status,
                  retryAfter: t.retryAfter,
                });
            }
        },
        async createPomelo(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await l.Z.post({
              body: e,
              url: E.ANM.POMELO_CREATE,
              trackedActionData: {
                event: s.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            a.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }), n.body
          );
        },
      };
    },
    545851: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
      });
      let s = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          s.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, n) {
      n.d(t, {
        c: function () {
          return i;
        },
      });
      let s = (0, n(818083).B)({
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
          s.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, n) {
      var s,
        i,
        a,
        r,
        o = n(31775),
        l = n.n(o),
        u = n(442837),
        d = n(570140),
        c = n(70956);
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
      (a = "PomeloStore"),
        (i = "displayName") in (s = m)
          ? Object.defineProperty(s, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[i] = a),
        (t.Z = new m(d.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            _.validations.set(t, { taken: n });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: s, retryAfter: i } = e;
            429 === s
              ? _.validations.set(
                  t,
                  { taken: null, error: n, rateLimited: !0 },
                  (null != i ? i : 7) * c.Z.Millis.SECOND,
                )
              : _.validations.set(t, { taken: null, error: n }),
              null != i &&
                (_.retryAfterTime = Date.now() + i * c.Z.Millis.SECOND);
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
            let { suggestion: t, source: n } = e;
            (_.suggestions.registration = {
              suggestion: t,
              source: n,
              fetched: !0,
            }),
              (null == t ? void 0 : t.username) != null &&
                _.validations.set(t.username, { taken: !1 });
          },
        }));
    },
    109488: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      let s = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        i = () =>
          s.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, n) {
      n.d(t, {
        F4: function () {
          return i;
        },
        vc: function () {
          return a;
        },
      });
      let s = (0, n(818083).B)({
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
          s.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        a = () =>
          s.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    363577: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var s = n(470079),
        i = n(392711),
        a = n(399606),
        r = n(986197),
        o = n(654344),
        l = n(135200),
        u = n(346585);
      let d = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, a.e7)([l.Z], () => l.Z.validate(e), [e]),
          E = (0, a.e7)([l.Z], () => l.Z.isRateLimited()),
          _ = (0, o.c)(),
          m = s.useMemo(
            () =>
              (0, i.debounce)(
                (e) => r.Z.attemptPomelo(e, n ? "registration" : "modal", n, d),
                _,
              ),
            [_, n, d],
          );
        return (
          s.useEffect(() => {
            t && !E && null == c && "" !== e && m(e);
          }, [t, E, c, e, m]),
          s.useMemo(() => (null != c ? (0, u.ti)(c) : void 0), [c])
        );
      };
    },
    361117: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      }),
        n(47120),
        n(773603);
      var s = n(470079),
        i = n(399606),
        a = n(570140),
        r = n(986197),
        o = n(135200);
      let l = (e) => {
        let [t, n] = (0, i.Wu)([o.Z], () => [
          o.Z.usernameSuggestion(),
          o.Z.usernameSuggestionLoading(),
        ]);
        return (
          s.useEffect(
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
          { usernameSuggestion: t, usernameSuggestionLoading: n }
        );
      };
    },
    773446: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(735250);
      n(470079);
      var i = n(325767);
      function a(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: a = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, i.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("g", {
              clipPath: "url(#clip0_3283_145261)",
              children: (0, s.jsx)("path", {
                d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                fill: a,
                className: r,
              }),
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_3283_145261",
                children: (0, s.jsx)("rect", {
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
    572264: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(735250);
      n(470079);
      var i = n(325767);
      function a(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: a = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, i.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 23 23",
          children: (0, s.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
            fill: a,
            className: r,
          }),
        });
      }
    },
    193049: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n(47120);
      var s = n(735250),
        i = n(470079),
        a = n(512722),
        r = n.n(a),
        o = n(990547),
        l = n(399606),
        u = n(481060),
        d = n(232567),
        c = n(809206),
        E = n(479531),
        _ = n(484459),
        m = n(594174),
        g = n(626135),
        f = n(51144),
        I = n(986197),
        S = n(135200),
        T = n(346585),
        h = n(347649),
        N = n(361117),
        O = n(108793),
        M = n(635774),
        C = n(387955),
        L = n(801461),
        x = n(448624),
        R = n(981631),
        p = n(689938),
        A = n(168534);
      function P(e) {
        let t,
          {
            source: n,
            transitionState: a,
            onClose: P,
            oneClickFlow: y = !1,
          } = e,
          [Z, b] = i.useState(y ? x.A.SUGGESTIONS : x.A.INFO),
          [U, G] = i.useState(!1),
          [j, D] = i.useState(null),
          [W, k] = i.useState(y ? L.Wq.SUGGESTION : L.Wq.NONE),
          [F, B] = i.useState(!1),
          [w, q] = i.useState(!1),
          H = i.useRef(null),
          X = (0, l.e7)([S.Z], () => S.Z.isCurrentUsernameInvalid()),
          V = (0, l.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return r()(null != e, "PomeloModal: user cannot be undefined"), e;
          }),
          z = (0, h.CC)(),
          { usernameSuggestion: Y, usernameSuggestionLoading: K } = (0, N.G)(
            y ? L.en : void 0,
          );
        i.useEffect(() => {
          W === L.Wq.EDIT_USERNAME && q(!0),
            g.default.track(R.rMx.POMELO_EDIT_STEP_VIEWED, {
              source: n,
              step: W,
            });
        }, [W, n]),
          i.useEffect(() => {
            !w &&
              !F &&
              null != Y &&
              Y.length > 0 &&
              $((e) => ({ ...e, username: Y }));
          }, [Y, w, F]);
        let [Q, $] = i.useState({
            username: (0, T.e$)(V),
            globalName: f.ZP.getName(V),
          }),
          J = (e) => {
            D(null), null != e.username && B(!0), $((t) => ({ ...t, ...e }));
          },
          ee = i.useMemo(
            () => [
              {
                slideId: x.A.INFO,
                next: x.A.EDIT_SCREEN,
                footerButtons: ["REMIND_ME_LATER", "GET_STARTED"],
              },
              {
                slideId: x.A.EDIT_SCREEN,
                next: x.A.FINISH_LATER,
                back: x.A.INFO,
                footerButtons: [
                  W === L.Wq.PREVIEW ? "GOT_IT" : "BACK",
                  W === L.Wq.PREVIEW
                    ? "GOT_IT"
                    : W === L.Wq.EDIT_USERNAME
                      ? "SUBMIT"
                      : "NEXT",
                ],
              },
              { slideId: x.A.FINISH_LATER, back: x.A.EDIT_SCREEN },
              {
                slideId: x.A.SUGGESTIONS,
                footerButtons: [W === L.Wq.PREVIEW ? "GOT_IT" : "UPDATE"],
              },
              { slideId: x.A.FINISH_LATER },
            ],
            [W],
          ),
          et = ee.length,
          en = i.useCallback(async () => {
            if (Q.globalName.length <= 0) {
              let e = p.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                minNum: 1,
                maxNum: 32,
              });
              D(e),
                g.default.track(R.rMx.POMELO_ERRORS, {
                  reason: e,
                  display_name_error: !0,
                  location: "modal",
                });
              return;
            }
            if (f.ZP.getGlobalName(V) === Q.globalName) {
              k(L.Wq.EDIT_USERNAME);
              return;
            }
            try {
              D(null),
                G(!0),
                await (0, c.S2)({ global_name: Q.globalName }),
                k(L.Wq.EDIT_USERNAME);
            } catch (t) {
              let e = new E.Z(t).getAnyErrorMessage();
              g.default.track(R.rMx.POMELO_ERRORS, {
                reason: e,
                display_name_error: !0,
                location: "modal",
              }),
                D(e);
            } finally {
              G(!1);
            }
          }, [V, Q]),
          es = i.useCallback(async () => {
            try {
              D(null),
                G(!0),
                await I.Z.createPomelo({ username: (0, T.R_)(Q.username) }, y),
                await (0, d.In)(V.id),
                k(L.Wq.PREVIEW);
            } catch (n) {
              let e = new E.Z(n),
                t =
                  (null == e ? void 0 : e.status) != null &&
                  e.status >= 400 &&
                  e.status < 500
                    ? e.getAnyErrorMessage()
                    : p.Z.Messages.ERROR_GENERIC_TITLE;
              D(t),
                g.default.track(R.rMx.POMELO_ERRORS, {
                  reason: t,
                  username_error: !0,
                  location: "modal",
                  one_click_flow: y,
                });
            } finally {
              G(!1);
            }
          }, [Q, V.id, y]),
          ei = X || (0, T.NX)(V),
          ea = i.useCallback(() => {
            k(ei ? L.Wq.EDIT_USERNAME : L.Wq.EDIT_DISPLAY_NAME),
              b(ee[Math.min(et - 1, Z + 1)].slideId);
          }, [Z, ee, et, ei]),
          er = i.useCallback(() => {
            D(null),
              Z === x.A.EDIT_SCREEN
                ? W === L.Wq.EDIT_USERNAME
                  ? ei
                    ? (k(L.Wq.NONE), b(ee[Math.max(0, Z - 1)].slideId))
                    : k(L.Wq.EDIT_DISPLAY_NAME)
                  : W === L.Wq.EDIT_DISPLAY_NAME
                    ? (k(L.Wq.NONE), b(ee[Math.max(0, Z - 1)].slideId))
                    : W === L.Wq.PREVIEW && k(L.Wq.EDIT_USERNAME)
                : b(ee[Math.max(0, Z - 1)].slideId);
          }, [ee, Z, W, ei]),
          eo = i.useCallback(() => {
            b(x.A.FINISH_LATER);
          }, []),
          el = i.useCallback(() => {
            y
              ? (b(x.A.SUGGESTIONS), k(L.Wq.SUGGESTION))
              : (b(x.A.INFO), k(L.Wq.NONE));
          }, [y]),
          eu = i.useMemo(() => {
            if (Z === x.A.EDIT_SCREEN && W === L.Wq.EDIT_DISPLAY_NAME)
              return en;
            if (Z === x.A.EDIT_SCREEN && W === L.Wq.EDIT_USERNAME) return es;
            if (Z === x.A.SUGGESTIONS && W === L.Wq.SUGGESTION) return es;
            else return ea;
          }, [Z, W, en, es, ea]),
          ed = i.useMemo(() => {
            var e, t;
            return v(
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
              U,
              K,
              F,
            );
          }, [er, eo, eu, P, ee, Z, U, K, F]),
          ec = i.useMemo(() => (0, T.zV)(V), [V]);
        i.useLayoutEffect(() => {
          (0, _.Z)(V.id, ec);
        }, [V, ec]),
          i.useEffect(() => {
            var e, t;
            switch (W) {
              case L.Wq.EDIT_DISPLAY_NAME:
                null === (e = H.current) ||
                  void 0 === e ||
                  e.focusDisplayName();
                break;
              case L.Wq.EDIT_USERNAME:
              case L.Wq.SUGGESTION:
                null === (t = H.current) || void 0 === t || t.focusUsername();
            }
          }, [W]);
        return (
          !F &&
            null == j &&
            (W === L.Wq.EDIT_USERNAME
              ? (t = p.Z.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                  source: V.username,
                }))
              : W === L.Wq.SUGGESTION &&
                (K || null != Y) &&
                (t = p.Z.Messages.POMELO_SUGGESTIONS_OCF)),
          (0, s.jsxs)(u.ModalRoot, {
            className: A.modalRoot,
            impression: {
              impressionName: o.ImpressionNames.POMELO_LANDING,
              impressionProperties: {
                source: n,
                impression_group: o.ImpressionGroups.POMELO_FLOW,
                one_click_flow: y,
              },
            },
            transitionState: a,
            size: u.ModalSize.DYNAMIC,
            children: [
              (0, s.jsx)(u.Button, {
                onClick: () => {
                  z && (Z === x.A.SUGGESTIONS || Z === x.A.EDIT_SCREEN)
                    ? b(x.A.FINISH_LATER)
                    : P();
                },
                size: u.Button.Sizes.MIN,
                look: u.Button.Looks.BLANK,
                className: A.closeContainer,
                "aria-label": p.Z.Messages.CLOSE,
                children: (0, s.jsx)(u.XSmallIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 15,
                  height: 15,
                  className: A.close,
                }),
              }),
              (0, s.jsx)(u.ModalContent, {
                className: A.contentContainer,
                children: (0, s.jsxs)(u.Slides, {
                  activeSlide: Z,
                  width: 480,
                  children: [
                    (0, s.jsx)(u.Slide, {
                      id: x.A.INFO,
                      children: (0, s.jsx)(C.Z, { user: V }),
                    }),
                    (0, s.jsx)(u.Slide, {
                      id: x.A.EDIT_SCREEN,
                      children: (0, s.jsx)(O.Z, {
                        user: V,
                        error: j,
                        editState: W,
                        userRef: H,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: J,
                        onFocusUsername: () => k(L.Wq.EDIT_USERNAME),
                        onFocusDisplayName: () => k(L.Wq.EDIT_DISPLAY_NAME),
                        onClose: P,
                      }),
                    }),
                    (0, s.jsx)(u.Slide, {
                      id: x.A.FINISH_LATER,
                      children: (0, s.jsx)(M.Z, {
                        onClose: P,
                        handleStartFlow: el,
                      }),
                    }),
                    (0, s.jsx)(u.Slide, {
                      id: x.A.SUGGESTIONS,
                      children: (0, s.jsx)(O.Z, {
                        user: V,
                        error: j,
                        editState: W,
                        userRef: H,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: J,
                        onFocusUsername: () => k(L.Wq.SUGGESTION),
                        onFocusDisplayName: () => k(L.Wq.EDIT_DISPLAY_NAME),
                        onClose: P,
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
      let v = (e, t, n, i, a) =>
        0 === e.length
          ? null
          : (0, s.jsxs)(u.ModalFooter, {
              className: A.footer,
              children: [
                (0, s.jsxs)("div", {
                  className: A.inline,
                  children: [
                    e.includes("REMIND_ME_LATER") &&
                      (0, s.jsx)(u.Button, {
                        className: A.unfilledButton,
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        color: u.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children:
                          p.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA,
                      }),
                    e.includes("NEXT") &&
                      (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: n,
                        onClick: t.handleNext,
                        children: p.Z.Messages.NEXT,
                      }),
                    e.includes("SUBMIT") &&
                      (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: n,
                        onClick: t.handleNext,
                        children: p.Z.Messages.SUBMIT,
                      }),
                    e.includes("GET_STARTED") &&
                      (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: p.Z.Messages.GET_STARTED,
                      }),
                    e.includes("GOT_IT") &&
                      (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: p.Z.Messages.GOT_IT,
                      }),
                    e.includes("UPDATE") &&
                      (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        disabled: i && !a,
                        submitting: n,
                        onClick: t.handleNext,
                        children: p.Z.Messages.UPDATE,
                      }),
                  ],
                }),
                e.includes("BACK") &&
                  (0, s.jsx)(u.Button, {
                    className: A.unfilledButton,
                    type: "button",
                    size: u.Button.Sizes.SMALL,
                    look: u.Button.Looks.BLANK,
                    color: u.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: p.Z.Messages.BACK,
                  }),
              ],
            });
    },
    81259: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(627341);
      var s = n(735250);
      n(470079);
      var i = n(120356),
        a = n.n(i),
        r = n(278074),
        o = n(692547),
        l = n(481060),
        u = n(551556),
        d = n(923112);
      let c = () =>
          (0, s.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: o.Z.colors.TEXT_POSITIVE.css,
          }),
        E = () =>
          (0, s.jsx)(l.CircleXIcon, {
            size: "custom",
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_DANGER.css,
          }),
        _ = () =>
          (0, s.jsx)(l.CircleXIcon, {
            size: "custom",
            width: 13,
            height: 13,
            color: o.Z.colors.TEXT_WARNING.css,
          });
      function m(e) {
        let t = (0, r.EQ)(e.type)
          .with("info", () => (0, s.jsx)(_, {}))
          .with("error", () => (0, s.jsx)(E, {}))
          .with("success", () => (0, s.jsx)(c, {}))
          .otherwise(() => null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            t,
            (0, s.jsx)(l.Text, {
              variant: "text-sm/medium",
              className: a()(d.formMessage, {
                [d.formMessageNegative]: "error" === e.type,
                [d.formMessagePositive]: "success" === e.type,
              }),
              children: e.children,
            }),
          ],
        });
      }
    },
    108793: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var s = n(735250),
        i = n(470079),
        a = n(526629),
        r = n(481060),
        o = n(230711),
        l = n(687158),
        u = n(63063),
        d = n(51144),
        c = n(544508),
        E = n(801461),
        _ = n(981631),
        m = n(689938),
        g = n(923112);
      function f(e) {
        let {
            userRef: t,
            usernameSuggestionLoading: n = !1,
            oneClickFlow: f = !1,
            ...I
          } = e,
          { user: S, editState: T, onClose: h } = I,
          N = (0, l.ZP)(S.id),
          O = (function (e, t, n) {
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
                        n(), o.Z.open(_.oAB.ACCOUNT);
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
          })(T, d.ZP.getName(S), h),
          [M, C] = (0, r.useSpring)(() => ({ opacity: 0, y: 10 }));
        return (
          i.useEffect(() => {
            C({ y: 0, opacity: 1, from: { y: 10, opacity: 0 } });
          }, [C, T]),
          (0, s.jsxs)("div", {
            className: g.displayNameContainer,
            children: [
              (0, s.jsxs)(a.animated.div, {
                style: { opacity: M.opacity, y: M.y },
                children: [
                  (0, s.jsx)(r.Heading, {
                    className: g.title,
                    color: "header-primary",
                    variant: "heading-xl/extrabold",
                    children: O.header,
                  }),
                  (0, s.jsxs)("div", {
                    className: g.subtitle,
                    children: [
                      (0, s.jsx)(r.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: O.subtitle,
                      }),
                      null != O.link &&
                        (0, s.jsx)(r.Text, {
                          className: g.link,
                          color: "header-secondary",
                          variant: "text-sm/medium",
                          children: O.link,
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(c.Z, {
                ...I,
                displayProfile: N,
                ref: t,
                usernameSuggestionLoading: n,
                oneClickFlow: f,
              }),
            ],
          })
        );
      }
    },
    544508: function (e, t, n) {
      n(47120), n(757143);
      var s = n(735250),
        i = n(470079),
        a = n(120356),
        r = n.n(a),
        o = n(526629),
        l = n(399606),
        u = n(481060),
        d = n(607070),
        c = n(745510),
        E = n(899007),
        _ = n(867176),
        m = n(51144),
        g = n(346585),
        f = n(81259),
        I = n(119848),
        S = n(801461),
        T = n(228168),
        h = n(689938),
        N = n(923112),
        O = n(733469);
      let M = i.forwardRef(function (e, t) {
        let {
          style: n,
          value: i,
          placeholder: a,
          maxLength: o,
          onFocus: l,
          onChange: d,
        } = e;
        return (0, s.jsx)(u.TextArea, {
          className: r()(N.userCardInput, n),
          autosize: !0,
          error: null,
          showCharacterCount: !1,
          spellCheck: !1,
          showRemainingCharacterCount: !1,
          value: i,
          placeholder: a,
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
      t.Z = i.forwardRef(function (e, t) {
        let {
            user: n,
            error: a,
            formValues: C,
            displayProfile: L,
            onChangeFormValue: x,
            onFocusDisplayName: R,
            onFocusUsername: p,
            editState: A,
            footerNotice: P,
            usernameSuggestionLoading: v,
            oneClickFlow: y,
          } = e,
          { username: Z, globalName: b } = C,
          U = i.useRef(null),
          G = i.useRef(null),
          j = i.useMemo(() => n.merge({ discriminator: "0000" }), [n]),
          [D, W] = (0, u.useSpring)(() => ({ opacity: 0, y: 5 }));
        i.useEffect(() => {
          W({ y: 0, opacity: 1, from: { y: 5, opacity: 0 } });
        }, [W, A]),
          i.useImperativeHandle(
            t,
            () => ({
              focusDisplayName: () => {
                var e, t, n;
                null === (t = G.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = G.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (n = G.current) || void 0 === n || n.focus();
              },
              focusUsername: () => {
                var e, t, n;
                null === (t = U.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = U.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (n = U.current) || void 0 === n || n.focus();
              },
            }),
            [],
          );
        let k = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
          { createMultipleConfettiAt: F } = i.useContext(c.h),
          B = null == L ? void 0 : L.getLegacyUsername();
        return (
          i.useEffect(() => {
            if (!k && A === S.Wq.PREVIEW && !!n.username.includes(S.nA))
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
          }, [F, A, n, k]),
          (0, s.jsxs)("div", {
            className: r()(N.userCardContainer, {
              [N.shinyCard]: A === S.Wq.PREVIEW,
            }),
            children: [
              (0, s.jsxs)("div", {
                className: N.profileCard,
                children: [
                  (0, s.jsx)(_.Z, {
                    user: j,
                    displayProfile: L,
                    profileType: T.y0.PANEL,
                  }),
                  (0, s.jsx)(E.Z, {
                    user: j,
                    displayProfile: L,
                    profileType: T.y0.PANEL,
                  }),
                  A === S.Wq.PREVIEW &&
                    null != B &&
                    (0, s.jsx)("div", {
                      className: N.legacyUsernameBadgeContainer,
                      children: (0, s.jsx)(u.Tooltip, {
                        position: "top",
                        text: h.Z.Messages.ORIGINALLY_KNOWN_AS.format({
                          legacyUsername: B,
                        }),
                        spacing: 12,
                        children: (e) =>
                          (0, s.jsx)(u.Anchor, {
                            ...e,
                            onClick: e.onClick,
                            children: (0, s.jsx)("img", {
                              className: N.legacyUsernameBadge,
                              alt: "",
                              src: O,
                            }),
                          }),
                      }),
                    }),
                ],
              }),
              A !== S.Wq.PREVIEW &&
                (0, s.jsxs)(o.animated.div, {
                  style: { opacity: D.opacity, y: D.y },
                  className: N.inputContainer,
                  children: [
                    A === S.Wq.EDIT_DISPLAY_NAME &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(u.Text, {
                            className: N.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: h.Z.Messages.DISPLAY_NAME,
                          }),
                          (0, s.jsx)(M, {
                            style: r()(
                              N.displayNameHeight,
                              N["heading-xl/bold"],
                            ),
                            value: null != b ? b : "",
                            placeholder: m.ZP.getName(n),
                            maxLength: S.hy,
                            onChange: (e) => x({ globalName: e }),
                            onFocus: R,
                            ref: G,
                          }),
                        ],
                      }),
                    (A === S.Wq.EDIT_USERNAME || A === S.Wq.SUGGESTION) &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(u.Text, {
                            className: N.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: h.Z.Messages.USERNAME,
                          }),
                          (0, s.jsx)(M, {
                            style: r()(
                              N.userCardHeight,
                              N.lowercaseUsername,
                              N["heading-lg/medium"],
                            ),
                            value: null != Z ? Z : "",
                            placeholder: n.username,
                            maxLength: S.hy,
                            onChange: (e) =>
                              x({ username: e.replace("@", "") }),
                            onFocus: p,
                            ref: U,
                          }),
                        ],
                      }),
                    (0, s.jsx)("div", {
                      className: N.messageContainer,
                      children: (() => {
                        if (null != a)
                          return (0, s.jsx)(f.Z, {
                            type: "error",
                            children: a,
                          });
                        if (null != P) {
                          if (A !== S.Wq.SUGGESTION)
                            return (0, s.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: P,
                            });
                          if (!v)
                            return (0, s.jsx)(f.Z, {
                              type: "success",
                              children: P,
                            });
                        }
                        return null == P &&
                          null == a &&
                          (A === S.Wq.EDIT_USERNAME || A === S.Wq.SUGGESTION)
                          ? (0, s.jsx)(I.Z, { username: Z, oneClickFlow: y })
                          : null;
                      })(),
                    }),
                  ],
                }),
              A === S.Wq.PREVIEW &&
                (0, s.jsxs)("div", {
                  className: N.userCard,
                  children: [
                    (0, s.jsx)(u.Heading, {
                      color: "header-primary",
                      variant: "heading-xl/bold",
                      children: m.ZP.getName(n),
                    }),
                    (0, s.jsx)(u.Heading, {
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: n.username,
                    }),
                    (0, s.jsx)(u.Text, {
                      className: N.memberText,
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children:
                        h.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                          date: (0, g.K9)(n.id),
                        }),
                    }),
                  ],
                }),
            ],
          })
        );
      });
    },
    635774: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var s = n(735250);
      n(470079);
      var i = n(120356),
        a = n.n(i),
        r = n(442837),
        o = n(481060),
        l = n(230711),
        u = n(706454),
        d = n(346585),
        c = n(347649),
        E = n(981631),
        _ = n(689938),
        m = n(923112);
      function g(e) {
        let { onClose: t, handleStartFlow: n } = e,
          i = (0, c.CC)(),
          g = (0, r.e7)([u.default], () => u.default.locale);
        return (0, s.jsxs)("div", {
          className: m.infoContainer,
          children: [
            (0, s.jsx)(o.Heading, {
              className: a()(m.finishTitle, { [m.finishTitlePadding]: i }),
              color: "header-primary",
              variant: "heading-xl/bold",
              children: i
                ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format(
                    { date: (0, d.IE)(g) },
                  )
                : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE,
            }),
            (0, s.jsx)(o.Text, {
              className: m.subtitleFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children: i
                ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format(
                    { date: (0, d.IE)(g) },
                  )
                : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1,
            }),
            (0, s.jsx)(o.Text, {
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
            (0, s.jsx)(o.Button, {
              className: m.button,
              type: "button",
              size: o.Button.Sizes.SMALL,
              onClick: i ? n : t,
              children: i
                ? _.Z.Messages
                    .PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                : _.Z.Messages.INVITES_DISABLED_CONFIRMATION,
            }),
          ],
        });
      }
    },
    387955: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = n(735250);
      n(470079);
      var i = n(120356),
        a = n.n(i),
        r = n(481060),
        o = n(63063),
        l = n(773446),
        u = n(572264),
        d = n(981631),
        c = n(689938),
        E = n(923112),
        _ = n(849399);
      function m(e) {
        let { user: t } = e;
        return (0, s.jsxs)("div", {
          className: E.infoContainer,
          children: [
            (0, s.jsx)("img", { className: E.infoPicture, alt: "", src: _ }),
            (0, s.jsx)(r.Heading, {
              className: E.title,
              color: "header-primary",
              variant: "heading-xl/bold",
              children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                n: t.tag,
              }),
            }),
            (0, s.jsx)(r.Text, {
              className: E.subtitleInfo,
              color: "header-secondary",
              variant: "text-md/medium",
              children:
                c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format(),
            }),
            (0, s.jsx)(r.Text, {
              className: E.prompt,
              color: "header-secondary",
              variant: "text-sm/medium",
              children: c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                helpdeskArticle: o.Z.getArticleURL(d.BhN.POMELO_FAQ),
              }),
            }),
            (0, s.jsxs)("div", {
              className: a()([E.infoItem, E.infoItemSpacing]),
              children: [
                (0, s.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, s.jsx)(r.FriendsIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
                (0, s.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: a()([E.infoItem, E.infoItemSpacing]),
              children: [
                (0, s.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, s.jsx)(l.Z, { width: 20, height: 20 }),
                }),
                (0, s.jsx)(r.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children:
                    c.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: E.infoItem,
              children: [
                (0, s.jsx)("div", {
                  className: E.infoIcon,
                  children: (0, s.jsx)(u.Z, { width: 20, height: 20 }),
                }),
                (0, s.jsx)(r.Text, {
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
    448624: function (e, t, n) {
      var s, i;
      n.d(t, {
        A: function () {
          return s;
        },
      }),
        ((i = s || (s = {}))[(i.INFO = 0)] = "INFO"),
        (i[(i.EDIT_SCREEN = 1)] = "EDIT_SCREEN"),
        (i[(i.FINISH_LATER = 2)] = "FINISH_LATER"),
        (i[(i.SUGGESTIONS = 3)] = "SUGGESTIONS");
    },
    119848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(627341);
      var s = n(735250);
      n(470079);
      var i = n(278074),
        a = n(219496),
        r = n(346585),
        o = n(363577),
        l = n(81259);
      function u(e) {
        let { username: t, oneClickFlow: n = !1 } = e,
          u = (0, o.M)((0, r.R_)(t), !0, !1, n);
        if (null == u) return null;
        let d = (0, i.EQ)(u.type)
          .with(a.K.RATE_LIMIT, () => "info")
          .with(a.K.ERROR, () => "error")
          .with(a.K.AVAILABLE, () => "success")
          .with(a.K.INTERNAL_ERROR, () => null)
          .exhaustive();
        return null == d
          ? null
          : (0, s.jsx)(l.Z, { type: d, children: u.message });
      }
    },
    168534: function (e, t, n) {
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
    923112: function (e, t, n) {
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
  },
]);
//# sourceMappingURL=16983deb871b906392d8.js.map
