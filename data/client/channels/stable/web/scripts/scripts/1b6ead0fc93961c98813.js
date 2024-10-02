"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84956"],
  {
    986197: function (e, t, n) {
      var i = n(990547),
        o = n(544891),
        a = n(570140),
        s = n(881052),
        r = n(626135),
        u = n(573261),
        l = n(545851),
        g = n(109488),
        d = n(794099),
        c = n(981631),
        m = n(689938);
      n(135200);
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
              var n;
              let i = await o.tn.get({
                url: c.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                i.ok &&
                (null === (n = i.body) || void 0 === n ? void 0 : n.username) !=
                  null
              )
                return a.Z.dispatch({
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
          if (!!(0, g.P)())
            try {
              var t;
              a.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let n = await o.tn.get({
                url: c.ANM.POMELO_SUGGESTIONS,
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
          let o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            g = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let E =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? m.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
              : t.includes("..")
                ? m.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                : t.length < 2 || t.length > 32
                  ? m.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != E)
            return (
              r.default.track(c.rMx.POMELO_ERRORS, {
                reason: E,
                username_error: !0,
                location: o,
                one_click_flow: d,
              }),
              a.Z.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: E,
              })
            );
          if (!!(0, l.E)())
            try {
              let t = await u.Z.post({
                url: g ? c.ANM.POMELO_ATTEMPT_UNAUTHED : c.ANM.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: i.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                r.default.track(c.rMx.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: o,
                  one_click_flow: d,
                }),
                a.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (u) {
              let t = new s.Hx(u),
                i =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              r.default.track(c.rMx.POMELO_ERRORS, {
                reason: i,
                username_error: !0,
                location: o,
                one_click_flow: d,
              }),
                a.Z.dispatch({
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
            n = await u.Z.post({
              body: e,
              url: c.ANM.POMELO_CREATE,
              trackedActionData: {
                event: i.NetworkActionNames.POMELO_CREATE,
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
          return o;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        o = () =>
          i.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, n) {
      n.d(t, {
        c: function () {
          return o;
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
        o = () =>
          i.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, n) {
      var i,
        o,
        a,
        s,
        r = n(31775),
        u = n.n(r),
        l = n(442837),
        g = n(570140),
        d = n(70956);
      let c = { taken: null, error: void 0, rateLimited: !0 },
        m = {
          validations: new (u())({ max: 100, maxAge: 6e4 }),
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
      class E extends (s = l.ZP.Store) {
        isRateLimited() {
          return null != m.retryAfterTime && Date.now() < m.retryAfterTime;
        }
        validate(e) {
          let t = m.validations.get(e);
          if (this.isRateLimited() && (null == t || t.rateLimited)) return c;
          if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
        }
        registrationUsernameSuggestion() {
          return m.suggestions.registration.suggestion.username;
        }
        usernameSuggestion() {
          return m.suggestions.migration.suggestion.username;
        }
        usernameSuggestionLoading() {
          return m.suggestions.migration.usernameSuggestionLoading;
        }
        isCurrentUsernameInvalid() {
          return m.currentUsernameInvalid;
        }
        wasRegistrationSuggestionFetched(e) {
          return (
            m.suggestions.registration.source === e &&
            m.suggestions.registration.fetched
          );
        }
        wasSuggestionsFetched() {
          return m.suggestions.migration.fetched;
        }
      }
      (a = "PomeloStore"),
        (o = "displayName") in (i = E)
          ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = a),
        (t.Z = new E(g.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            m.validations.set(t, { taken: n });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: i, retryAfter: o } = e;
            429 === i
              ? m.validations.set(
                  t,
                  { taken: null, error: n, rateLimited: !0 },
                  (null != o ? o : 7) * d.Z.Millis.SECOND,
                )
              : m.validations.set(t, { taken: null, error: n }),
              null != o &&
                (m.retryAfterTime = Date.now() + o * d.Z.Millis.SECOND);
          },
          POMELO_SUGGESTIONS_RESET: function () {
            (m.suggestions.migration = {
              suggestion: { username: void 0 },
              fetched: !1,
              usernameSuggestionLoading: !1,
            }),
              (m.suggestions.registration = {
                suggestion: { username: void 0 },
                source: void 0,
                fetched: !1,
              });
          },
          POMELO_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t } = e;
            (m.suggestions.migration = {
              suggestion: t,
              fetched: !0,
              usernameSuggestionLoading: !1,
            }),
              (null == t ? void 0 : t.invalid_current_username) === !0 &&
                (m.currentUsernameInvalid = !0);
          },
          POMELO_SUGGESTIONS_FETCH: function (e) {
            let { usernameSuggestionLoading: t } = e;
            m.suggestions.migration.usernameSuggestionLoading = t;
          },
          POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
            let { suggestion: t, source: n } = e;
            (m.suggestions.registration = {
              suggestion: t,
              source: n,
              fetched: !0,
            }),
              (null == t ? void 0 : t.username) != null &&
                m.validations.set(t.username, { taken: !1 });
          },
        }));
    },
    109488: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        o = () =>
          i.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, n) {
      n.d(t, {
        F4: function () {
          return o;
        },
        vc: function () {
          return a;
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
        o = () =>
          i.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        a = () =>
          i.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    363577: function (e, t, n) {
      n.d(t, {
        M: function () {
          return g;
        },
      });
      var i = n(470079),
        o = n(392711),
        a = n(399606),
        s = n(986197),
        r = n(654344),
        u = n(135200),
        l = n(346585);
      let g = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          d = (0, a.e7)([u.Z], () => u.Z.validate(e), [e]),
          c = (0, a.e7)([u.Z], () => u.Z.isRateLimited()),
          m = (0, r.c)(),
          E = i.useMemo(
            () =>
              (0, o.debounce)(
                (e) => s.Z.attemptPomelo(e, n ? "registration" : "modal", n, g),
                m,
              ),
            [m, n, g],
          );
        return (
          i.useEffect(() => {
            t && !c && null == d && "" !== e && E(e);
          }, [t, c, d, e, E]),
          i.useMemo(() => (null != d ? (0, l.ti)(d) : void 0), [d])
        );
      };
    },
    807369: function (e, t, n) {
      n.d(t, {
        a: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(470079),
        o = n(363577);
      let a = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          s = (0, o.M)(e, t, n),
          [r, u] = i.useState(void 0);
        return (
          i.useEffect(() => {
            "" === e || e === a ? u(void 0) : null != s && u(s);
          }, [s, e, a]),
          r
        );
      };
    },
    180529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(735250),
        o = n(470079),
        a = n(212433),
        s = n(849146),
        r = n(481060);
      let u = () => {
        let e = o.useRef(null),
          [t, n] = o.useState(0),
          i = o.useMemo(
            () =>
              new s.Z((e) => {
                let [t] = e;
                return n(t.contentRect.height);
              }),
            [],
          );
        return (
          o.useLayoutEffect(
            () => (
              null != e.current && i.observe(e.current), () => i.disconnect()
            ),
            [i],
          ),
          { ref: e, height: t }
        );
      };
      function l(e) {
        let { show: t, children: n, top: o = 0, bottom: s = 0 } = e,
          { ref: l, height: g } = u(),
          d = (0, r.useSpring)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: {
              height: t ? g : 0,
              paddingBottom: t ? "".concat(s, "px") : "0px",
              marginTop: t ? "".concat(o, "px") : "0px",
            },
            config: { tension: 170, friction: 26 },
          }),
          c = (0, r.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
              duration: 200,
              easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
          });
        return (0, i.jsx)(a.animated.div, {
          style: {
            overflow: "hidden",
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop,
          },
          children: (0, i.jsx)(a.animated.div, {
            style: { opacity: c.opacity },
            ref: l,
            children: n,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=1b6ead0fc93961c98813.js.map
