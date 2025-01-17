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
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(692547),
        r = n(331595);
      function a(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: a = s.Z.unsafe_rawColors.WHITE_500.css,
          backgroundColor: l = s.Z.unsafe_rawColors.BRAND_500.css,
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: [
            (0, i.jsx)("path", {
              fill: l,
              d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166",
            }),
            (0, i.jsx)("path", {
              d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
              fill: a,
            }),
          ],
        });
      }
    },
    986197: function (e, t, n) {
      var i = n(990547),
        s = n(544891),
        r = n(570140),
        a = n(881052),
        l = n(626135),
        o = n(573261),
        u = n(545851),
        c = n(109488),
        d = n(794099),
        m = n(981631);
      n(135200);
      var g = n(388032);
      t.Z = {
        resetSuggestions: () =>
          r.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if (!!(0, d.vc)()) {
            r.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var n;
              let i = await s.tn.get({
                url: m.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
                rejectWithError: !0,
              });
              if (
                i.ok &&
                (null === (n = i.body) || void 0 === n ? void 0 : n.username) !=
                  null
              )
                return r.Z.dispatch({
                  type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                  suggestion: i.body,
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
              r.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let n = await s.tn.get({
                url: m.ANM.POMELO_SUGGESTIONS,
                timeout: e,
                rejectWithError: !0,
              });
              if (
                n.ok &&
                (null === (t = n.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return r.Z.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: n.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, n;
          let s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let E =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? g.intl.string(g.t.z7c4bG)
              : t.includes("..")
                ? g.intl.string(g.t["C7G+go"])
                : t.length < 2 || t.length > 32
                  ? g.intl.formatToPlainString(g.t.IpijXF, {
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != E)
            return (
              l.default.track(m.rMx.POMELO_ERRORS, {
                reason: E,
                username_error: !0,
                location: s,
                one_click_flow: d,
              }),
              r.Z.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: E,
              })
            );
          if (!!(0, u.E)())
            try {
              let t = await o.Z.post({
                url: c ? m.ANM.POMELO_ATTEMPT_UNAUTHED : m.ANM.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: i.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
                rejectWithError: !1,
              });
              t.body.taken &&
                l.default.track(m.rMx.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: s,
                  one_click_flow: d,
                }),
                r.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (o) {
              let t = new a.Hx(o),
                i =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              l.default.track(m.rMx.POMELO_ERRORS, {
                reason: i,
                username_error: !0,
                location: s,
                one_click_flow: d,
              }),
                r.Z.dispatch({
                  username: e,
                  type: "POMELO_ATTEMPT_FAILURE",
                  error:
                    null != t.status && t.status < 500 && 401 !== t.status
                      ? i
                      : void 0,
                  statusCode: t.status,
                  retryAfter: t.retryAfter,
                });
            }
        },
        async createPomelo(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.Z.post({
              body: e,
              url: m.ANM.POMELO_CREATE,
              trackedActionData: {
                event: i.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
              rejectWithError: !1,
            });
          return (
            r.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }), n.body
          );
        },
      };
    },
    545851: function (e, t, n) {
      n.d(t, {
        E: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        s = () =>
          i.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
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
          i.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, n) {
      var i,
        s,
        r,
        a,
        l = n(31775),
        o = n.n(l),
        u = n(442837),
        c = n(570140),
        d = n(70956);
      let m = { taken: null, error: void 0, rateLimited: !0 },
        g = {
          validations: new (o())({ max: 100, maxAge: 6e4 }),
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
      class E extends (a = u.ZP.Store) {
        isRateLimited() {
          return null != g.retryAfterTime && Date.now() < g.retryAfterTime;
        }
        validate(e) {
          let t = g.validations.get(e);
          if (this.isRateLimited() && (null == t || t.rateLimited)) return m;
          if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
        }
        registrationUsernameSuggestion() {
          return g.suggestions.registration.suggestion.username;
        }
        usernameSuggestion() {
          return g.suggestions.migration.suggestion.username;
        }
        usernameSuggestionLoading() {
          return g.suggestions.migration.usernameSuggestionLoading;
        }
        isCurrentUsernameInvalid() {
          return g.currentUsernameInvalid;
        }
        wasRegistrationSuggestionFetched(e) {
          return (
            g.suggestions.registration.source === e &&
            g.suggestions.registration.fetched
          );
        }
        wasSuggestionsFetched() {
          return g.suggestions.migration.fetched;
        }
      }
      (r = "PomeloStore"),
        (s = "displayName") in (i = E)
          ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = r),
        (t.Z = new E(c.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            g.validations.set(t, { taken: n });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: i, retryAfter: s } = e;
            429 === i
              ? g.validations.set(
                  t,
                  { taken: null, error: n, rateLimited: !0 },
                  (null != s ? s : 7) * d.Z.Millis.SECOND,
                )
              : g.validations.set(t, { taken: null, error: n }),
              null != s &&
                (g.retryAfterTime = Date.now() + s * d.Z.Millis.SECOND);
          },
          POMELO_SUGGESTIONS_RESET: function () {
            (g.suggestions.migration = {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            }),
              (g.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1,
              });
          },
          POMELO_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t } = e;
            (g.suggestions.migration = {
              suggestion: t,
              fetched: !0,
              usernameSuggestionLoading: !1,
            }),
              (null == t ? void 0 : t.invalid_current_username) === !0 &&
                (g.currentUsernameInvalid = !0);
          },
          POMELO_SUGGESTIONS_FETCH: function (e) {
            let { usernameSuggestionLoading: t } = e;
            g.suggestions.migration.usernameSuggestionLoading = t;
          },
          POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t, source: n } = e;
            (g.suggestions.registration = {
              suggestion: t,
              source: n,
              fetched: !0,
            }),
              (null == t ? void 0 : t.username) != null &&
                g.validations.set(t.username, { taken: !1 });
          },
        }));
    },
    109488: function (e, t, n) {
      n.d(t, {
        P: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        s = () =>
          i.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, n) {
      n.d(t, {
        F4: function () {
          return s;
        },
        vc: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
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
          i.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        r = () =>
          i.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    363577: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var i = n(192379),
        s = n(392711),
        r = n(399606),
        a = n(986197),
        l = n(654344),
        o = n(135200),
        u = n(346585);
      let c = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          d = (0, r.e7)([o.Z], () => o.Z.validate(e), [e]),
          m = (0, r.e7)([o.Z], () => o.Z.isRateLimited()),
          g = (0, l.c)(),
          E = i.useMemo(
            () =>
              (0, s.debounce)(
                (e) => a.Z.attemptPomelo(e, n ? "registration" : "modal", n, c),
                g,
              ),
            [g, n, c],
          );
        return (
          i.useEffect(() => {
            t && !m && null == d && "" !== e && E(e);
          }, [t, m, d, e, E]),
          i.useMemo(() => (null != d ? (0, u.ti)(d) : void 0), [d])
        );
      };
    },
    361117: function (e, t, n) {
      n.d(t, {
        G: function () {
          return o;
        },
      }),
        n(47120),
        n(773603);
      var i = n(399606),
        s = n(570140),
        r = n(493773),
        a = n(986197),
        l = n(135200);
      let o = (e) => {
        let [t, n] = (0, i.Wu)([l.Z], () => [
          l.Z.usernameSuggestion(),
          l.Z.usernameSuggestionLoading(),
        ]);
        return (
          (0, r.Z)(
            () => (
              l.Z.wasSuggestionsFetched()
                ? s.Z.dispatch({
                    type: "POMELO_SUGGESTIONS_FETCH",
                    usernameSuggestionLoading: !1,
                  })
                : a.Z.fetchSuggestions(e).finally(() => {
                    s.Z.dispatch({
                      type: "POMELO_SUGGESTIONS_FETCH",
                      usernameSuggestionLoading: !1,
                    });
                  }),
              () => {
                a.Z.resetSuggestions();
              }
            ),
          ),
          { usernameSuggestion: t, usernameSuggestionLoading: n }
        );
      };
    },
    773446: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(331595);
      function r(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: r = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, s.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("g", {
              clipPath: "url(#clip0_3283_145261)",
              children: (0, i.jsx)("path", {
                d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                fill: r,
                className: a,
              }),
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsx)("clipPath", {
                id: "clip0_3283_145261",
                children: (0, i.jsx)("rect", {
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
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(331595);
      function r(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: r = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, s.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 23 23",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
            fill: r,
            className: a,
          }),
        });
      }
    },
    193049: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return L;
          },
        }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(512722),
        a = n.n(r),
        l = n(990547),
        o = n(399606),
        u = n(481060),
        c = n(232567),
        d = n(809206),
        m = n(479531),
        g = n(484459),
        E = n(594174),
        h = n(626135),
        f = n(51144),
        S = n(986197),
        N = n(135200),
        T = n(346585),
        x = n(347649),
        _ = n(361117),
        I = n(108793),
        C = n(635774),
        v = n(387955),
        p = n(801461),
        A = n(448624),
        y = n(981631),
        O = n(388032),
        M = n(617083);
      function L(e) {
        let t,
          {
            source: n,
            transitionState: r,
            onClose: L,
            oneClickFlow: b = !1,
          } = e,
          [P, j] = s.useState(b ? A.A.SUGGESTIONS : A.A.INFO),
          [U, k] = s.useState(!1),
          [Z, G] = s.useState(null),
          [W, D] = s.useState(b ? p.Wq.SUGGESTION : p.Wq.NONE),
          [w, q] = s.useState(!1),
          [B, F] = s.useState(!1),
          H = s.useRef(null),
          z = (0, o.e7)([N.Z], () => N.Z.isCurrentUsernameInvalid()),
          V = (0, o.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return a()(null != e, "PomeloModal: user cannot be undefined"), e;
          }),
          X = (0, x.CC)(),
          { usernameSuggestion: K, usernameSuggestionLoading: Y } = (0, _.G)(
            b ? p.en : void 0,
          );
        s.useEffect(() => {
          W === p.Wq.EDIT_USERNAME && F(!0),
            h.default.track(y.rMx.POMELO_EDIT_STEP_VIEWED, {
              source: n,
              step: W,
            });
        }, [W, n]),
          s.useEffect(() => {
            !B &&
              !w &&
              null != K &&
              K.length > 0 &&
              J((e) => ({ ...e, username: K }));
          }, [K, B, w]);
        let [Q, J] = s.useState({
            username: (0, T.e$)(V),
            globalName: f.ZP.getName(V),
          }),
          $ = (e) => {
            G(null), null != e.username && q(!0), J((t) => ({ ...t, ...e }));
          },
          ee = s.useMemo(
            () => [
              {
                slideId: A.A.INFO,
                next: A.A.EDIT_SCREEN,
                footerButtons: ["REMIND_ME_LATER", "GET_STARTED"],
              },
              {
                slideId: A.A.EDIT_SCREEN,
                next: A.A.FINISH_LATER,
                back: A.A.INFO,
                footerButtons: [
                  W === p.Wq.PREVIEW ? "GOT_IT" : "BACK",
                  W === p.Wq.PREVIEW
                    ? "GOT_IT"
                    : W === p.Wq.EDIT_USERNAME
                      ? "SUBMIT"
                      : "NEXT",
                ],
              },
              { slideId: A.A.FINISH_LATER, back: A.A.EDIT_SCREEN },
              {
                slideId: A.A.SUGGESTIONS,
                footerButtons: [W === p.Wq.PREVIEW ? "GOT_IT" : "UPDATE"],
              },
              { slideId: A.A.FINISH_LATER },
            ],
            [W],
          ),
          et = ee.length,
          en = s.useCallback(async () => {
            if (Q.globalName.length <= 0) {
              let e = O.intl.formatToPlainString(O.t.IpijXF, {
                minNum: 1,
                maxNum: 32,
              });
              G(e),
                h.default.track(y.rMx.POMELO_ERRORS, {
                  reason: e,
                  display_name_error: !0,
                  location: "modal",
                });
              return;
            }
            if (f.ZP.getGlobalName(V) === Q.globalName) {
              D(p.Wq.EDIT_USERNAME);
              return;
            }
            try {
              G(null),
                k(!0),
                await (0, d.S2)({ global_name: Q.globalName }),
                D(p.Wq.EDIT_USERNAME);
            } catch (t) {
              let e = new m.Z(t).getAnyErrorMessage();
              h.default.track(y.rMx.POMELO_ERRORS, {
                reason: e,
                display_name_error: !0,
                location: "modal",
              }),
                G(e);
            } finally {
              k(!1);
            }
          }, [V, Q]),
          ei = s.useCallback(async () => {
            try {
              G(null),
                k(!0),
                await S.Z.createPomelo({ username: (0, T.R_)(Q.username) }, b),
                await (0, c.In)(V.id),
                D(p.Wq.PREVIEW);
            } catch (n) {
              let e = new m.Z(n),
                t =
                  (null == e ? void 0 : e.status) != null &&
                  e.status >= 400 &&
                  e.status < 500
                    ? e.getAnyErrorMessage()
                    : O.intl.string(O.t.R0RpRU);
              G(t),
                h.default.track(y.rMx.POMELO_ERRORS, {
                  reason: t,
                  username_error: !0,
                  location: "modal",
                  one_click_flow: b,
                });
            } finally {
              k(!1);
            }
          }, [Q, V.id, b]),
          es = z || (0, T.NX)(V),
          er = s.useCallback(() => {
            D(es ? p.Wq.EDIT_USERNAME : p.Wq.EDIT_DISPLAY_NAME),
              j(ee[Math.min(et - 1, P + 1)].slideId);
          }, [P, ee, et, es]),
          ea = s.useCallback(() => {
            G(null),
              P === A.A.EDIT_SCREEN
                ? W === p.Wq.EDIT_USERNAME
                  ? es
                    ? (D(p.Wq.NONE), j(ee[Math.max(0, P - 1)].slideId))
                    : D(p.Wq.EDIT_DISPLAY_NAME)
                  : W === p.Wq.EDIT_DISPLAY_NAME
                    ? (D(p.Wq.NONE), j(ee[Math.max(0, P - 1)].slideId))
                    : W === p.Wq.PREVIEW && D(p.Wq.EDIT_USERNAME)
                : j(ee[Math.max(0, P - 1)].slideId);
          }, [ee, P, W, es]),
          el = s.useCallback(() => {
            j(A.A.FINISH_LATER);
          }, []),
          eo = s.useCallback(() => {
            b
              ? (j(A.A.SUGGESTIONS), D(p.Wq.SUGGESTION))
              : (j(A.A.INFO), D(p.Wq.NONE));
          }, [b]),
          eu = s.useMemo(() => {
            if (P === A.A.EDIT_SCREEN && W === p.Wq.EDIT_DISPLAY_NAME)
              return en;
            if (P === A.A.EDIT_SCREEN && W === p.Wq.EDIT_USERNAME) return ei;
            if (P === A.A.SUGGESTIONS && W === p.Wq.SUGGESTION) return ei;
            else return er;
          }, [P, W, en, ei, er]),
          ec = s.useMemo(() => {
            var e, t;
            return R(
              null !==
                (t =
                  null === (e = ee.find((e) => e.slideId === P)) || void 0 === e
                    ? void 0
                    : e.footerButtons) && void 0 !== t
                ? t
                : [],
              {
                handleNext: eu,
                handleBack: ea,
                handleRemindMeLater: el,
                onClose: L,
              },
              U,
              Y,
              w,
            );
          }, [ea, el, eu, L, ee, P, U, Y, w]),
          ed = s.useMemo(() => (0, T.zV)(V), [V]);
        s.useLayoutEffect(() => {
          (0, g.Z)(V.id, ed);
        }, [V, ed]),
          s.useEffect(() => {
            var e, t;
            switch (W) {
              case p.Wq.EDIT_DISPLAY_NAME:
                null === (e = H.current) ||
                  void 0 === e ||
                  e.focusDisplayName();
                break;
              case p.Wq.EDIT_USERNAME:
              case p.Wq.SUGGESTION:
                null === (t = H.current) || void 0 === t || t.focusUsername();
            }
          }, [W]);
        return (
          !w &&
            null == Z &&
            (W === p.Wq.EDIT_USERNAME
              ? (t = O.intl.formatToPlainString(O.t.AJh8BQ, {
                  source: V.username,
                }))
              : W === p.Wq.SUGGESTION &&
                (Y || null != K) &&
                (t = O.intl.string(O.t["i/2SgI"]))),
          (0, i.jsxs)(u.ModalRoot, {
            className: M.modalRoot,
            impression: {
              impressionName: l.ImpressionNames.POMELO_LANDING,
              impressionProperties: {
                source: n,
                impression_group: l.ImpressionGroups.POMELO_FLOW,
                one_click_flow: b,
              },
            },
            transitionState: r,
            size: u.ModalSize.DYNAMIC,
            children: [
              (0, i.jsx)(u.Button, {
                onClick: () => {
                  X && (P === A.A.SUGGESTIONS || P === A.A.EDIT_SCREEN)
                    ? j(A.A.FINISH_LATER)
                    : L();
                },
                size: u.Button.Sizes.MIN,
                look: u.Button.Looks.BLANK,
                className: M.closeContainer,
                "aria-label": O.intl.string(O.t.cpT0Cg),
                children: (0, i.jsx)(u.XSmallIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 15,
                  height: 15,
                  className: M.close,
                }),
              }),
              (0, i.jsx)(u.ModalContent, {
                className: M.contentContainer,
                children: (0, i.jsxs)(u.Slides, {
                  activeSlide: P,
                  width: 480,
                  children: [
                    (0, i.jsx)(u.Slide, {
                      id: A.A.INFO,
                      children: (0, i.jsx)(v.Z, { user: V }),
                    }),
                    (0, i.jsx)(u.Slide, {
                      id: A.A.EDIT_SCREEN,
                      children: (0, i.jsx)(I.Z, {
                        user: V,
                        error: Z,
                        editState: W,
                        userRef: H,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: $,
                        onFocusUsername: () => D(p.Wq.EDIT_USERNAME),
                        onFocusDisplayName: () => D(p.Wq.EDIT_DISPLAY_NAME),
                        onClose: L,
                      }),
                    }),
                    (0, i.jsx)(u.Slide, {
                      id: A.A.FINISH_LATER,
                      children: (0, i.jsx)(C.Z, {
                        onClose: L,
                        handleStartFlow: eo,
                      }),
                    }),
                    (0, i.jsx)(u.Slide, {
                      id: A.A.SUGGESTIONS,
                      children: (0, i.jsx)(I.Z, {
                        user: V,
                        error: Z,
                        editState: W,
                        userRef: H,
                        formValues: Q,
                        footerNotice: t,
                        onChangeFormValue: $,
                        onFocusUsername: () => D(p.Wq.SUGGESTION),
                        onFocusDisplayName: () => D(p.Wq.EDIT_DISPLAY_NAME),
                        onClose: L,
                        usernameSuggestionLoading: Y,
                        oneClickFlow: b,
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
      let R = (e, t, n, s, r) =>
        0 === e.length
          ? null
          : (0, i.jsxs)(u.ModalFooter, {
              className: M.footer,
              children: [
                (0, i.jsxs)("div", {
                  className: M.inline,
                  children: [
                    e.includes("REMIND_ME_LATER") &&
                      (0, i.jsx)(u.Button, {
                        className: M.unfilledButton,
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        color: u.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children: O.intl.string(O.t["1mGbXF"]),
                      }),
                    e.includes("NEXT") &&
                      (0, i.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: n,
                        onClick: t.handleNext,
                        children: O.intl.string(O.t.PDTjLC),
                      }),
                    e.includes("SUBMIT") &&
                      (0, i.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: n,
                        onClick: t.handleNext,
                        children: O.intl.string(O.t.geKm7u),
                      }),
                    e.includes("GET_STARTED") &&
                      (0, i.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: O.intl.string(O.t.LhlgY2),
                      }),
                    e.includes("GOT_IT") &&
                      (0, i.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: O.intl.string(O.t["NX+WJC"]),
                      }),
                    e.includes("UPDATE") &&
                      (0, i.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        disabled: s && !r,
                        submitting: n,
                        onClick: t.handleNext,
                        children: O.intl.string(O.t.VZANAA),
                      }),
                  ],
                }),
                e.includes("BACK") &&
                  (0, i.jsx)(u.Button, {
                    className: M.unfilledButton,
                    type: "button",
                    size: u.Button.Sizes.SMALL,
                    look: u.Button.Looks.BLANK,
                    color: u.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: O.intl.string(O.t["13/7kZ"]),
                  }),
              ],
            });
    },
    81259: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(627341);
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(278074),
        l = n(692547),
        o = n(481060),
        u = n(551556),
        c = n(579532);
      let d = () =>
          (0, i.jsx)(u.Z, {
            width: 13,
            height: 13,
            backgroundColor: l.Z.colors.TEXT_POSITIVE.css,
          }),
        m = () =>
          (0, i.jsx)(o.CircleXIcon, {
            size: "custom",
            width: 13,
            height: 13,
            color: l.Z.colors.TEXT_DANGER.css,
          }),
        g = () =>
          (0, i.jsx)(o.CircleXIcon, {
            size: "custom",
            width: 13,
            height: 13,
            color: l.Z.colors.TEXT_WARNING.css,
          });
      function E(e) {
        let t = (0, a.EQ)(e.type)
          .with("info", () => (0, i.jsx)(g, {}))
          .with("error", () => (0, i.jsx)(m, {}))
          .with("success", () => (0, i.jsx)(d, {}))
          .otherwise(() => null);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            t,
            (0, i.jsx)(o.Text, {
              variant: "text-sm/medium",
              className: r()(c.formMessage, {
                [c.formMessageNegative]: "error" === e.type,
                [c.formMessagePositive]: "success" === e.type,
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
      var i = n(200651),
        s = n(192379),
        r = n(642128),
        a = n(481060),
        l = n(230711),
        o = n(687158),
        u = n(63063),
        c = n(51144),
        d = n(544508),
        m = n(801461),
        g = n(981631),
        E = n(388032),
        h = n(579532);
      function f(e) {
        let {
            userRef: t,
            usernameSuggestionLoading: n = !1,
            oneClickFlow: f = !1,
            ...S
          } = e,
          { user: N, editState: T, onClose: x } = S,
          _ = (0, o.ZP)(N.id),
          I = (function (e, t, n) {
            switch (e) {
              case m.Wq.EDIT_USERNAME:
                return {
                  header: E.intl.string(E.t["a/zCWl"]),
                  subtitle: E.intl.string(E.t.gGz0sb),
                };
              case m.Wq.EDIT_DISPLAY_NAME:
                return {
                  header: E.intl.string(E.t.SRDNcH),
                  subtitle: E.intl.string(E.t["940AS0"]),
                };
              case m.Wq.PREVIEW:
                return {
                  header: E.intl.formatToPlainString(E.t.XDHrcn, {
                    displayName: t,
                  }),
                  subtitle: E.intl.format(E.t.bWE0ZG, {
                    onClick: () => {
                      n(), l.Z.open(g.oAB.ACCOUNT);
                    },
                  }),
                };
              case m.Wq.SUGGESTION:
                return {
                  header: E.intl.string(E.t.F7T4dX),
                  subtitle: E.intl.formatToPlainString(E.t.Z8F83d, {}),
                  link: E.intl.format(E.t["i2vB8/"], {
                    helpdeskArticle: u.Z.getArticleURL(g.BhN.POMELO_FAQ),
                  }),
                };
              default:
                return {
                  header: E.intl.string(E.t["a/zCWl"]),
                  subtitle: E.intl.string(E.t.gGz0sb),
                };
            }
          })(T, c.ZP.getName(N), x),
          [C, v] = (0, a.useSpring)(() => ({ opacity: 0, y: 10 }));
        return (
          s.useEffect(() => {
            v({ y: 0, opacity: 1, from: { y: 10, opacity: 0 } });
          }, [v, T]),
          (0, i.jsxs)("div", {
            className: h.displayNameContainer,
            children: [
              (0, i.jsxs)(r.animated.div, {
                style: { opacity: C.opacity, y: C.y },
                children: [
                  (0, i.jsx)(a.Heading, {
                    className: h.title,
                    color: "header-primary",
                    variant: "heading-xl/extrabold",
                    children: I.header,
                  }),
                  (0, i.jsxs)("div", {
                    className: h.subtitle,
                    children: [
                      (0, i.jsx)(a.Heading, {
                        color: "header-secondary",
                        variant: "heading-sm/medium",
                        children: I.subtitle,
                      }),
                      null != I.link &&
                        (0, i.jsx)(a.Text, {
                          className: h.link,
                          color: "header-secondary",
                          variant: "text-sm/medium",
                          children: I.link,
                        }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(d.Z, {
                ...S,
                displayProfile: _,
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
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(642128),
        o = n(399606),
        u = n(481060),
        c = n(607070),
        d = n(745510),
        m = n(899007),
        g = n(867176),
        E = n(51144),
        h = n(346585),
        f = n(81259),
        S = n(119848),
        N = n(801461),
        T = n(228168),
        x = n(388032),
        _ = n(579532),
        I = n(733469);
      let C = s.forwardRef(function (e, t) {
        let {
          style: n,
          value: s,
          placeholder: r,
          maxLength: l,
          onFocus: o,
          onChange: c,
        } = e;
        return (0, i.jsx)(u.TextArea, {
          className: a()(_.userCardInput, n),
          autosize: !0,
          error: null,
          showCharacterCount: !1,
          spellCheck: !1,
          showRemainingCharacterCount: !1,
          value: s,
          placeholder: r,
          rows: 1,
          maxLength: l,
          onChange: c,
          onFocus: o,
          onKeyDown: (e) => {
            "Enter" === e.key && e.preventDefault();
          },
          inputRef: t,
        });
      });
      t.Z = s.forwardRef(function (e, t) {
        let {
            user: n,
            error: r,
            formValues: v,
            displayProfile: p,
            onChangeFormValue: A,
            onFocusDisplayName: y,
            onFocusUsername: O,
            editState: M,
            footerNotice: L,
            usernameSuggestionLoading: R,
            oneClickFlow: b,
          } = e,
          { username: P, globalName: j } = v,
          U = s.useRef(null),
          k = s.useRef(null),
          Z = s.useMemo(() => n.merge({ discriminator: "0000" }), [n]),
          [G, W] = (0, u.useSpring)(() => ({ opacity: 0, y: 5 }));
        s.useEffect(() => {
          W({ y: 0, opacity: 1, from: { y: 5, opacity: 0 } });
        }, [W, M]),
          s.useImperativeHandle(
            t,
            () => ({
              focusDisplayName: () => {
                var e, t, n;
                null === (t = k.current) ||
                  void 0 === t ||
                  t.setSelection(
                    0,
                    null === (e = k.current) || void 0 === e
                      ? void 0
                      : e.value.length,
                  ),
                  null === (n = k.current) || void 0 === n || n.focus();
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
        let D = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
          { createMultipleConfettiAt: w } = s.useContext(d.h),
          q = null == p ? void 0 : p.getLegacyUsername();
        return (
          s.useEffect(() => {
            if (!D && M === N.Wq.PREVIEW && !!n.username.includes(N.nA))
              w(
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
                w(
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
          }, [w, M, n, D]),
          (0, i.jsxs)("div", {
            className: a()(_.userCardContainer, {
              [_.shinyCard]: M === N.Wq.PREVIEW,
            }),
            children: [
              (0, i.jsxs)("div", {
                className: _.profileCard,
                children: [
                  (0, i.jsx)(g.Z, {
                    user: Z,
                    displayProfile: p,
                    profileType: T.y0.PANEL,
                  }),
                  (0, i.jsx)(m.Z, {
                    user: Z,
                    displayProfile: p,
                    profileType: T.y0.PANEL,
                  }),
                  M === N.Wq.PREVIEW &&
                    null != q &&
                    (0, i.jsx)("div", {
                      className: _.legacyUsernameBadgeContainer,
                      children: (0, i.jsx)(u.Tooltip, {
                        position: "top",
                        text: x.intl.formatToPlainString(x.t.bhrgkJ, {
                          legacyUsername: q,
                        }),
                        spacing: 12,
                        children: (e) =>
                          (0, i.jsx)(u.Anchor, {
                            ...e,
                            onClick: e.onClick,
                            children: (0, i.jsx)("img", {
                              className: _.legacyUsernameBadge,
                              alt: "",
                              src: I,
                            }),
                          }),
                      }),
                    }),
                ],
              }),
              M !== N.Wq.PREVIEW &&
                (0, i.jsxs)(l.animated.div, {
                  style: { opacity: G.opacity, y: G.y },
                  className: _.inputContainer,
                  children: [
                    M === N.Wq.EDIT_DISPLAY_NAME &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(u.Text, {
                            className: _.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: x.intl.string(x.t["9AjdkJ"]),
                          }),
                          (0, i.jsx)(C, {
                            style: a()(
                              _.displayNameHeight,
                              _["heading-xl/bold"],
                            ),
                            value: null != j ? j : "",
                            placeholder: E.ZP.getName(n),
                            maxLength: N.hy,
                            onChange: (e) => A({ globalName: e }),
                            onFocus: y,
                            ref: k,
                          }),
                        ],
                      }),
                    (M === N.Wq.EDIT_USERNAME || M === N.Wq.SUGGESTION) &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(u.Text, {
                            className: _.textPadding,
                            color: "text-muted",
                            variant: "text-sm/semibold",
                            children: x.intl.string(x.t.IEpCBQ),
                          }),
                          (0, i.jsx)(C, {
                            style: a()(
                              _.userCardHeight,
                              _.lowercaseUsername,
                              _["heading-lg/medium"],
                            ),
                            value: null != P ? P : "",
                            placeholder: n.username,
                            maxLength: N.hy,
                            onChange: (e) =>
                              A({ username: e.replace("@", "") }),
                            onFocus: O,
                            ref: U,
                          }),
                        ],
                      }),
                    (0, i.jsx)("div", {
                      className: _.messageContainer,
                      children: (() => {
                        if (null != r)
                          return (0, i.jsx)(f.Z, {
                            type: "error",
                            children: r,
                          });
                        if (null != L) {
                          if (M !== N.Wq.SUGGESTION)
                            return (0, i.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: L,
                            });
                          if (!R)
                            return (0, i.jsx)(f.Z, {
                              type: "success",
                              children: L,
                            });
                        }
                        return null == L &&
                          null == r &&
                          (M === N.Wq.EDIT_USERNAME || M === N.Wq.SUGGESTION)
                          ? (0, i.jsx)(S.Z, { username: P, oneClickFlow: b })
                          : null;
                      })(),
                    }),
                  ],
                }),
              M === N.Wq.PREVIEW &&
                (0, i.jsxs)("div", {
                  className: _.userCard,
                  children: [
                    (0, i.jsx)(u.Heading, {
                      color: "header-primary",
                      variant: "heading-xl/bold",
                      children: E.ZP.getName(n),
                    }),
                    (0, i.jsx)(u.Heading, {
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: n.username,
                    }),
                    (0, i.jsx)(u.Text, {
                      className: _.memberText,
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children: x.intl.format(x.t["9rfonp"], {
                        date: (0, h.K9)(n.id),
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
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(442837),
        l = n(481060),
        o = n(230711),
        u = n(706454),
        c = n(346585),
        d = n(347649),
        m = n(981631),
        g = n(388032),
        E = n(579532);
      function h(e) {
        let { onClose: t, handleStartFlow: n } = e,
          s = (0, d.CC)(),
          h = (0, a.e7)([u.default], () => u.default.locale);
        return (0, i.jsxs)("div", {
          className: E.infoContainer,
          children: [
            (0, i.jsx)(l.Heading, {
              className: r()(E.finishTitle, { [E.finishTitlePadding]: s }),
              color: "header-primary",
              variant: "heading-xl/bold",
              children: s
                ? g.intl.formatToPlainString(g.t.XOWfNj, { date: (0, c.IE)(h) })
                : g.intl.string(g.t["3C+rbG"]),
            }),
            (0, i.jsx)(l.Text, {
              className: E.subtitleFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children: s
                ? g.intl.formatToPlainString(g.t["g/gkAw"], {
                    date: (0, c.IE)(h),
                  })
                : g.intl.string(g.t.TS1L09),
            }),
            (0, i.jsx)(l.Text, {
              className: E.promptFinish,
              color: "header-secondary",
              variant: "text-md/medium",
              children: g.intl.format(g.t.bWE0ZG, {
                onClick: () => {
                  t(), o.Z.open(m.oAB.ACCOUNT);
                },
              }),
            }),
            (0, i.jsx)(l.Button, {
              className: E.button,
              type: "button",
              size: l.Button.Sizes.SMALL,
              onClick: s ? n : t,
              children: s
                ? g.intl.string(g.t["Zpd+Ym"])
                : g.intl.string(g.t["yD/zkp"]),
            }),
          ],
        });
      }
    },
    387955: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(481060),
        l = n(63063),
        o = n(773446),
        u = n(572264),
        c = n(981631),
        d = n(388032),
        m = n(579532),
        g = n(849399);
      function E(e) {
        let { user: t } = e;
        return (0, i.jsxs)("div", {
          className: m.infoContainer,
          children: [
            (0, i.jsx)("img", { className: m.infoPicture, alt: "", src: g }),
            (0, i.jsx)(a.Heading, {
              className: m.title,
              color: "header-primary",
              variant: "heading-xl/bold",
              children: d.intl.format(d.t["au+lPj"], { n: t.tag }),
            }),
            (0, i.jsx)(a.Text, {
              className: m.subtitleInfo,
              color: "header-secondary",
              variant: "text-md/medium",
              children: d.intl.format(d.t["5fwX5+"], {}),
            }),
            (0, i.jsx)(a.Text, {
              className: m.prompt,
              color: "header-secondary",
              variant: "text-sm/medium",
              children: d.intl.format(d.t["i2vB8/"], {
                helpdeskArticle: l.Z.getArticleURL(c.BhN.POMELO_FAQ),
              }),
            }),
            (0, i.jsxs)("div", {
              className: r()([m.infoItem, m.infoItemSpacing]),
              children: [
                (0, i.jsx)("div", {
                  className: m.infoIcon,
                  children: (0, i.jsx)(a.FriendsIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                  }),
                }),
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: d.intl.format(d.t.SzUaZ2, {}),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: r()([m.infoItem, m.infoItemSpacing]),
              children: [
                (0, i.jsx)("div", {
                  className: m.infoIcon,
                  children: (0, i.jsx)(o.Z, { width: 20, height: 20 }),
                }),
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: d.intl.format(d.t["UwPc+P"], {}),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: m.infoItem,
              children: [
                (0, i.jsx)("div", {
                  className: m.infoIcon,
                  children: (0, i.jsx)(u.Z, { width: 20, height: 20 }),
                }),
                (0, i.jsx)(a.Text, {
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: d.intl.format(d.t.okLjjo, { username: t.tag }),
                }),
              ],
            }),
          ],
        });
      }
    },
    448624: function (e, t, n) {
      var i, s;
      n.d(t, {
        A: function () {
          return i;
        },
      }),
        ((s = i || (i = {}))[(s.INFO = 0)] = "INFO"),
        (s[(s.EDIT_SCREEN = 1)] = "EDIT_SCREEN"),
        (s[(s.FINISH_LATER = 2)] = "FINISH_LATER"),
        (s[(s.SUGGESTIONS = 3)] = "SUGGESTIONS");
    },
    119848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(627341);
      var i = n(200651);
      n(192379);
      var s = n(278074),
        r = n(219496),
        a = n(346585),
        l = n(363577),
        o = n(81259);
      function u(e) {
        let { username: t, oneClickFlow: n = !1 } = e,
          u = (0, l.M)((0, a.R_)(t), !0, !1, n);
        if (null == u) return null;
        let c = (0, s.EQ)(u.type)
          .with(r.K.RATE_LIMIT, () => "info")
          .with(r.K.ERROR, () => "error")
          .with(r.K.AVAILABLE, () => "success")
          .with(r.K.INTERNAL_ERROR, () => null)
          .exhaustive();
        return null == c
          ? null
          : (0, i.jsx)(o.Z, { type: c, children: u.message });
      }
    },
  },
]);
//# sourceMappingURL=8eaa941141bcfbae5c53.js.map
