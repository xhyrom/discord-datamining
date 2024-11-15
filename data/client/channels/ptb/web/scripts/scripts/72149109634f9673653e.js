"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42758"],
  {
    986197: function (e, t, n) {
      var i = n(990547),
        a = n(544891),
        o = n(570140),
        s = n(881052),
        r = n(626135),
        l = n(573261),
        u = n(545851),
        d = n(109488),
        c = n(794099),
        g = n(981631);
      n(135200);
      var m = n(388032);
      t.Z = {
        resetSuggestions: () =>
          o.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" }),
        async fetchSuggestionsRegistration(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1500;
          if (!!(0, c.vc)()) {
            o.Z.dispatch({ type: "POMELO_SUGGESTIONS_RESET" });
            try {
              var n;
              let i = await a.tn.get({
                url: g.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
              });
              if (
                i.ok &&
                (null === (n = i.body) || void 0 === n ? void 0 : n.username) !=
                  null
              )
                return o.Z.dispatch({
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
          if (!!(0, d.P)())
            try {
              var t;
              o.Z.dispatch({
                type: "POMELO_SUGGESTIONS_FETCH",
                usernameSuggestionLoading: !0,
              });
              let n = await a.tn.get({
                url: g.ANM.POMELO_SUGGESTIONS,
                timeout: e,
              });
              if (
                n.ok &&
                (null === (t = n.body) || void 0 === t ? void 0 : t.username) !=
                  null
              )
                return o.Z.dispatch({
                  type: "POMELO_SUGGESTIONS_SUCCESS",
                  suggestion: n.body,
                });
            } catch (e) {
              return;
            }
        },
        async attemptPomelo(e) {
          var t, n;
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "modal",
            d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          let f =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
              ? m.intl.string(m.t.z7c4bG)
              : t.includes("..")
                ? m.intl.string(m.t["C7G+go"])
                : t.length < 2 || t.length > 32
                  ? m.intl.formatToPlainString(m.t.IpijXF, {
                      maxNum: 32,
                      minNum: 2,
                    })
                  : void 0);
          if (null != f)
            return (
              r.default.track(g.rMx.POMELO_ERRORS, {
                reason: f,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
              o.Z.dispatch({
                type: "POMELO_ATTEMPT_FAILURE",
                username: e,
                error: f,
              })
            );
          if (!!(0, u.E)())
            try {
              let t = await l.Z.post({
                url: d ? g.ANM.POMELO_ATTEMPT_UNAUTHED : g.ANM.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                  event: i.NetworkActionNames.POMELO_ATTEMPT,
                  properties: { requested_username: e },
                },
              });
              t.body.taken &&
                r.default.track(g.rMx.POMELO_ERRORS, {
                  reason: "already_taken",
                  username_error: !0,
                  location: a,
                  one_click_flow: c,
                }),
                o.Z.dispatch({
                  type: "POMELO_ATTEMPT_SUCCESS",
                  username: e,
                  taken: t.body.taken,
                });
            } catch (l) {
              let t = new s.Hx(l),
                i =
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : void 0;
              r.default.track(g.rMx.POMELO_ERRORS, {
                reason: i,
                username_error: !0,
                location: a,
                one_click_flow: c,
              }),
                o.Z.dispatch({
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
            n = await l.Z.post({
              body: e,
              url: g.ANM.POMELO_CREATE,
              trackedActionData: {
                event: i.NetworkActionNames.POMELO_CREATE,
                properties: { one_click_flow: t },
              },
            });
          return (
            o.Z.dispatch({ type: "CURRENT_USER_UPDATE", user: n.body }), n.body
          );
        },
      };
    },
    545851: function (e, t, n) {
      n.d(t, {
        E: function () {
          return a;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Attempt",
          id: "2023-04_pomelo_attempt",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        a = () =>
          i.getCurrentConfig(
            { location: "c22166_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    654344: function (e, t, n) {
      n.d(t, {
        c: function () {
          return a;
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
        a = () =>
          i.useExperiment({ location: "52560d_1" }, { autoTrackExposure: !1 })
            .delay;
    },
    135200: function (e, t, n) {
      var i,
        a,
        o,
        s,
        r = n(31775),
        l = n.n(r),
        u = n(442837),
        d = n(570140),
        c = n(70956);
      let g = { taken: null, error: void 0, rateLimited: !0 },
        m = {
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
      class f extends (s = u.ZP.Store) {
        isRateLimited() {
          return null != m.retryAfterTime && Date.now() < m.retryAfterTime;
        }
        validate(e) {
          let t = m.validations.get(e);
          if (this.isRateLimited() && (null == t || t.rateLimited)) return g;
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
      (o = "PomeloStore"),
        (a = "displayName") in (i = f)
          ? Object.defineProperty(i, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = o),
        (t.Z = new f(d.Z, {
          POMELO_ATTEMPT_SUCCESS: function (e) {
            let { username: t, taken: n } = e;
            m.validations.set(t, { taken: n });
          },
          POMELO_ATTEMPT_FAILURE: function (e) {
            let { username: t, error: n, statusCode: i, retryAfter: a } = e;
            429 === i
              ? m.validations.set(
                  t,
                  { taken: null, error: n, rateLimited: !0 },
                  (null != a ? a : 7) * c.Z.Millis.SECOND,
                )
              : m.validations.set(t, { taken: null, error: n }),
              null != a &&
                (m.retryAfterTime = Date.now() + a * c.Z.Millis.SECOND);
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
          return a;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          label: "Pomelo Suggestions",
          id: "2023-04_pomelo_suggestions",
          defaultConfig: { enabled: !1 },
          treatments: [{ id: 1, label: "enabled", config: { enabled: !0 } }],
        }),
        a = () =>
          i.getCurrentConfig(
            { location: "1907ae_1" },
            { autoTrackExposure: !1 },
          ).enabled;
    },
    794099: function (e, t, n) {
      n.d(t, {
        F4: function () {
          return a;
        },
        vc: function () {
          return o;
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
        a = () =>
          i.useExperiment({ location: "83ca1a_3" }, { autoTrackExposure: !1 }),
        o = () =>
          i.getCurrentConfig(
            { location: "83ca1a_4" },
            { autoTrackExposure: !1 },
          ).suggestions;
    },
    575681: function (e, t, n) {
      n.d(t, {
        n: function () {
          return a;
        },
      });
      let i = (0, n(818083).B)({
          kind: "user",
          id: "2023-06_unique_username_live_check_in_settings",
          label: "Username Livecheck in Settings",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 1, label: "Livecheck enabled", config: { enabled: !0 } },
          ],
        }),
        a = () => {
          let { enabled: e } = i.useExperiment(
            { location: "7e1108_1" },
            { autoTrackExposure: !0 },
          );
          return e;
        };
    },
    363577: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var i = n(192379),
        a = n(392711),
        o = n(399606),
        s = n(986197),
        r = n(654344),
        l = n(135200),
        u = n(346585);
      let d = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          c = (0, o.e7)([l.Z], () => l.Z.validate(e), [e]),
          g = (0, o.e7)([l.Z], () => l.Z.isRateLimited()),
          m = (0, r.c)(),
          f = i.useMemo(
            () =>
              (0, a.debounce)(
                (e) => s.Z.attemptPomelo(e, n ? "registration" : "modal", n, d),
                m,
              ),
            [m, n, d],
          );
        return (
          i.useEffect(() => {
            t && !g && null == c && "" !== e && f(e);
          }, [t, g, c, e, f]),
          i.useMemo(() => (null != c ? (0, u.ti)(c) : void 0), [c])
        );
      };
    },
    807369: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        a = n(363577);
      let o = function (e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          s = (0, a.M)(e, t, n),
          [r, l] = i.useState(void 0);
        return (
          i.useEffect(() => {
            "" === e || e === o ? l(void 0) : null != s && l(s);
          }, [s, e, o]),
          r
        );
      };
    },
    180529: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        o = n(100621),
        s = n(849146),
        r = n(481060);
      let l = () => {
        let e = a.useRef(null),
          [t, n] = a.useState(0),
          i = a.useMemo(
            () =>
              new s.Z((e) => {
                let [t] = e;
                return n(t.contentRect.height);
              }),
            [],
          );
        return (
          a.useLayoutEffect(
            () => (
              null != e.current && i.observe(e.current), () => i.disconnect()
            ),
            [i],
          ),
          { ref: e, height: t }
        );
      };
      function u(e) {
        let { show: t, children: n, top: a = 0, bottom: s = 0 } = e,
          { ref: u, height: d } = l(),
          c = (0, r.useSpring)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: {
              height: t ? d : 0,
              paddingBottom: t ? "".concat(s, "px") : "0px",
              marginTop: t ? "".concat(a, "px") : "0px",
            },
            config: { tension: 170, friction: 26 },
          }),
          g = (0, r.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
              duration: 200,
              easing: t ? (e) => e ** 4 : (e) => e * (2 - e),
            },
          });
        return (0, i.jsx)(o.animated.div, {
          style: {
            overflow: "hidden",
            height: c.height,
            paddingBottom: c.paddingBottom,
            marginTop: c.marginTop,
          },
          children: (0, i.jsx)(o.animated.div, {
            style: { opacity: g.opacity },
            ref: u,
            children: n,
          }),
        });
      }
    },
    2702: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n(627341),
        n(47120);
      var i = n(200651),
        a = n(192379),
        o = n(120356),
        s = n.n(o),
        r = n(512722),
        l = n.n(r),
        u = n(954955),
        d = n.n(u),
        c = n(278074),
        g = n(442837),
        m = n(481060),
        f = n(809206),
        E = n(118012),
        h = n(219496),
        p = n(575681),
        v = n(807369),
        _ = n(180529),
        S = n(25990),
        b = n(594174),
        T = n(74538),
        O = n(981631),
        x = n(388032),
        M = n(219857),
        y = n(311133);
      let C = (e) => {
        let { usernameStatus: t, showHint: n } = e;
        return (0, c.EQ)(t)
          .with({ type: h.K.ERROR, message: c.P.select() }, (e) =>
            (0, i.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: e,
            }),
          )
          .with({ type: h.K.AVAILABLE, message: c.P.select() }, (e) =>
            (0, i.jsx)(m.Text, {
              variant: "text-sm/normal",
              color: "text-positive",
              children: e,
            }),
          )
          .otherwise(() =>
            n
              ? (0, i.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  children: x.intl.string(x.t.z7c4bG),
                })
              : null,
          );
      };
      function P(e) {
        var t;
        let { transitionState: n, onClose: o } = e,
          r = (0, g.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return (
              l()(
                null != e,
                "ChangeUsernameModal: currentUser cannot be undefined",
              ),
              e
            );
          }),
          u = a.useMemo(
            () => T.ZP.canEditDiscriminator(r) && !r.isPomelo(),
            [r],
          ),
          [c, P] = a.useState(!1),
          [L, R] = a.useState(r.username),
          [k, U] = a.useState(r.discriminator),
          [I, N] = a.useState(""),
          [A, w] = a.useState(!1),
          Z = (0, g.e7)([S.Z], () => S.Z.getErrors()),
          G = (0, p.n)(),
          j = r.isPomelo() && G,
          B = (0, v.a)(L, j, !1, r.username),
          F = a.useRef(null),
          D = a.useMemo(() => {
            var e, t, n;
            return null !==
              (n =
                null == Z
                  ? void 0
                  : null === (e = Z.username) || void 0 === e
                    ? void 0
                    : e[0]) && void 0 !== n
              ? n
              : null == Z
                ? void 0
                : null === (t = Z.discriminator) || void 0 === t
                  ? void 0
                  : t[0];
          }, [Z]);
        a.useEffect(() => {
          if (n === m.ModalTransitionState.ENTERED) {
            var e;
            null === (e = F.current) || void 0 === e || e.focus();
          }
        }, [n]);
        let q = k !== r.discriminator;
        async function z(e) {
          e.preventDefault(), w(!0);
          let t = await (0, f.Mn)({
            username: L,
            discriminator: u ? k : void 0,
            password: I,
          });
          w(!1), (null == t ? void 0 : t.ok) && o();
        }
        let H = a.useMemo(() => d()(P, 50), []);
        return (0, i.jsxs)(m.ModalRoot, {
          transitionState: n,
          children: [
            (0, i.jsxs)(m.ModalHeader, {
              separator: !1,
              className: M.header,
              children: [
                (0, i.jsx)(E.Z, {
                  color: E.Z.Colors.HEADER_PRIMARY,
                  size: E.Z.Sizes.SIZE_24,
                  className: M.title,
                  children: x.intl.string(x.t["m5or5+"]),
                }),
                (0, i.jsx)(m.Text, {
                  color: "header-secondary",
                  variant: "text-md/normal",
                  className: M.subtitle,
                  children: x.intl.string(x.t.SLJvy8),
                }),
                (0, i.jsx)(m.ModalCloseButton, {
                  onClick: o,
                  className: M.modalCloseButton,
                }),
              ],
            }),
            (0, i.jsxs)("form", {
              onSubmit: z,
              children: [
                (0, i.jsxs)(m.ModalContent, {
                  className: M.content,
                  children: [
                    (0, i.jsx)(m.FormItem, {
                      title: x.intl.string(x.t.TWzdWl),
                      error: D,
                      children: (0, i.jsxs)("div", {
                        className: s()(y.input, M.multiInput, {
                          [y.error]: null != D,
                          [y.focused]: c,
                        }),
                        children: [
                          (0, i.jsx)(m.TextInput, {
                            name: "username",
                            "aria-label": x.intl.string(x.t.qqhR3N),
                            value: L,
                            maxLength: O.l$U,
                            onChange: R,
                            onFocus: () => H(!0),
                            onBlur: () => H(!1),
                            inputRef: F,
                            className: M.multiInputFirst,
                            inputClassName: s()(M.multiInputField, {
                              [M.lowercase]: r.isPomelo(),
                            }),
                          }),
                          !r.isPomelo() &&
                            (0, i.jsx)(m.TextInput, {
                              name: "discriminator",
                              "aria-label": x.intl.string(x.t.ozumaG),
                              maxLength: 4,
                              value: k,
                              onChange: U,
                              onFocus: () => H(!0),
                              onBlur: () => H(!1),
                              inputPrefix: "#",
                              disabled: !u,
                              className: M.multiInputLast,
                              inputClassName: M.multiInputField,
                            }),
                        ],
                      }),
                    }),
                    q
                      ? (0, i.jsx)(m.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          className: M.discriminatorChangeWarning,
                          children: x.intl.string(x.t.mConUV),
                        })
                      : null,
                    j
                      ? (0, i.jsx)(_.Z, {
                          show:
                            (null == B ? void 0 : B.type) === h.K.ERROR || c,
                          top: 8,
                          bottom: 4,
                          children: (0, i.jsx)(C, {
                            usernameStatus: B,
                            showHint: r.isPomelo(),
                          }),
                        })
                      : null,
                    (0, i.jsx)(m.FormItem, {
                      className: M.password,
                      title: x.intl.string(x.t.TmdnJy),
                      error:
                        null == Z
                          ? void 0
                          : null === (t = Z.password) || void 0 === t
                            ? void 0
                            : t[0],
                      children: (0, i.jsx)(m.TextInput, {
                        type: "password",
                        value: I,
                        onChange: N,
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(m.ModalFooter, {
                  children: [
                    (0, i.jsx)(m.Button, {
                      type: "submit",
                      color: m.Button.Colors.BRAND,
                      size: m.Button.Sizes.MEDIUM,
                      submitting: A,
                      children: x.intl.string(x.t.i4jeWV),
                    }),
                    (0, i.jsx)(m.Button, {
                      className: M.cancel,
                      look: m.Button.Looks.LINK,
                      color: m.Button.Colors.PRIMARY,
                      onClick: o,
                      children: x.intl.string(x.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    219857: function (e, t, n) {
      e.exports = {
        header: "header_aefbba",
        title: "title_aefbba",
        subtitle: "subtitle_aefbba",
        modalCloseButton: "modalCloseButton_aefbba",
        content: "content_aefbba",
        password: "password_aefbba",
        cancel: "cancel_aefbba",
        multiInput: "multiInput_aefbba",
        multiInputFirst: "multiInputFirst_aefbba",
        lowercase: "lowercase_aefbba",
        multiInputField: "multiInputField_aefbba",
        multiInputLast: "multiInputLast_aefbba",
        discriminatorChangeWarning: "discriminatorChangeWarning_aefbba",
      };
    },
  },
]);
//# sourceMappingURL=72149109634f9673653e.js.map
