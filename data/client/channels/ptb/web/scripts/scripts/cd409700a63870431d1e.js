"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4775"],
  {
    292824: function (t) {
      t.exports = "/assets/00fe8a6557e204eb9503.svg";
    },
    231239: function (t, e, n) {
      var r = n(990547),
        i = n(283693),
        l = n(570140),
        u = n(573261),
        o = n(981631);
      e.Z = {
        signup: (t, e) =>
          u.Z.post({
            url: o.ANM.HUB_WAITLIST_SIGNUP,
            body: { email: t, school: e },
            trackedActionData: {
              event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
              properties: (t) => {
                var e;
                let n = !1,
                  r =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.email_domain;
                return (
                  null != r && (n = -1 !== r.split(".").indexOf("edu")),
                  (0, i.iG)({ is_edu_email: n })
                );
              },
            },
            rejectWithError: !1,
          }),
        sendVerificationEmail: async (t, e, n) =>
          (
            await u.Z.post({
              url: o.ANM.HUB_EMAIL_VERIFY_SEND,
              body: {
                email: t,
                guild_id: n,
                allow_multiple_guilds: e,
                use_verification_code: !0,
              },
              trackedActionData: {
                event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                properties: (t) => {
                  var e;
                  let n =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.has_matching_guild;
                  return (0, i.iG)({ has_matching_guild: n });
                },
              },
              rejectWithError: !1,
            })
          ).body,
        async verify(t) {
          if (null != t)
            try {
              var e;
              let n = await u.Z.post({
                  url: o.ANM.HUB_EMAIL_VERIFY,
                  body: { token: t },
                  trackedActionData: {
                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY,
                  },
                  rejectWithError: !1,
                }),
                i = null === (e = n.body.guild) || void 0 === e ? void 0 : e.id;
              l.Z.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: i });
            } catch (t) {
              l.Z.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: t.body,
              });
            }
        },
        async verifyCode(t, e, n) {
          if (null != t)
            try {
              var i;
              let a = await u.Z.post({
                  url: o.ANM.HUB_EMAIL_VERIFY_CODE,
                  body: { code: t, guild_id: e, email: n },
                  trackedActionData: {
                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY,
                  },
                  rejectWithError: !1,
                }),
                c = null === (i = a.body.guild) || void 0 === i ? void 0 : i.id;
              return (
                l.Z.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: c }),
                a.body
              );
            } catch (t) {
              throw (
                (l.Z.dispatch({
                  type: "HUB_VERIFY_EMAIL_FAILURE",
                  errors: t.body,
                }),
                t)
              );
            }
        },
      };
    },
    857458: function (t, e, n) {
      n.d(e, {
        M: function () {
          return a;
        },
      });
      var r = n(200651);
      if ((n(192379), 12633 == n.j)) var i = n(512969);
      var l = n(860911),
        u = n(981631),
        o = n(188785);
      function a() {
        let t = location.pathname + location.search;
        return o.a ? u.Z5c.REGISTER : (0, l.Ui)(t, !1);
      }
      e.Z =
        12633 == n.j
          ? function () {
              return (0, r.jsx)(i.l_, { to: a() });
            }
          : null;
    },
    962220: function (t, e, n) {
      var r = n(39612),
        i = n(271579),
        l = n(756647),
        u = n(625128),
        o = n(626135),
        a = n(954824),
        c = n(751189),
        s = n(981631);
      let _ = "template";
      e.Z = {
        ...c.Z,
        openNativeAppModal(t) {
          u.Z.openNativeAppModal(t, s.Etm.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(t, e) {
          if (
            null != platform.ua &&
            platform.ua.toLowerCase().indexOf("googlebot") > -1
          )
            return;
          let n = null != t ? (0, r.Oh)(t) : (0, r.Gk)(),
            u = (0, i.WS)(),
            c = (0, i.ZP)(n, { utmSource: _, fingerprint: e, attemptId: u });
          o.default.track(s.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(e),
            attempt_id: u,
            source: _,
            guild_template_code: t,
          }),
            a.Z.launch(c, () => {});
        },
      };
    },
    480387: function (t, e, n) {
      n.d(e, {
        HJ: function () {
          return E;
        },
        Zd: function () {
          return f;
        },
        yD: function () {
          return d;
        },
      });
      var r = n(213919),
        i = n(544891),
        l = n(570140),
        u = n(893776),
        o = n(710845),
        a = n(314897),
        c = n(726745),
        s = n(981631);
      let _ = new o.Z("MultiAccountActionCreators");
      function E() {
        let t = a.default.getId();
        c.Z.getUsers().forEach(async (e) => {
          let n,
            { id: u } = e,
            o = r.getToken(u);
          if (null == o || "" === o) {
            l.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: u,
            });
            return;
          }
          l.Z.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: u,
          });
          try {
            n = await i.tn.get({
              url: s.ANM.ME,
              headers: { authorization: o },
              retries: 3,
              rejectWithError: !1,
            });
          } catch (e) {
            let t =
              (null == e ? void 0 : e.status) === 401 ||
              (null == e ? void 0 : e.status) === 403;
            l.Z.dispatch({
              type: t
                ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE"
                : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: u,
            });
            return;
          }
          l.Z.dispatch({
            type: t === u ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
          }),
            l.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: u,
            });
        });
      }
      function d(t, e) {
        _.log("Switching account to ".concat(t), { switchSynchronously: e });
        let n = r.getToken(t);
        return null == n
          ? (_.log("Switching accounts failed because there was no token"),
            l.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: t,
            }),
            Promise.resolve())
          : u.Z.switchAccountToken(n, e);
      }
      function f(t) {
        l.Z.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
      }
    },
    251423: function (t, e, n) {
      n.d(e, {
        L: function () {
          return a;
        },
      });
      var r = n(192379),
        i = n(442837),
        l = n(570140),
        u = n(480387),
        o = n(726745);
      function a() {
        let t = (0, i.cj)([o.Z], () => ({
          isLoading: o.Z.getIsValidatingUsers(),
          multiAccountUsers: o.Z.getUsers(),
        }));
        return (
          r.useEffect(() => {
            l.Z.wait(() => {
              u.HJ();
            });
          }, []),
          t
        );
      }
    },
    929809: function (t, e, n) {
      n.d(e, {
        H: function () {
          return l;
        },
        c: function () {
          return i;
        },
      });
      var r = n(570140);
      function i(t) {
        r.Z.wait(() => r.Z.dispatch({ type: "NUF_NEW_USER", newUserType: t }));
      }
      function l() {
        r.Z.wait(() => r.Z.dispatch({ type: "NUF_COMPLETE" }));
      }
    },
    701476: function (t, e, n) {
      var r, i;
      n.d(e, {
        M5: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.MARKETING_UNCLAIMED = 0)] =
          "MARKETING_UNCLAIMED"),
        (i[(i.INVITE_UNCLAIMED = 1)] = "INVITE_UNCLAIMED"),
        (i[(i.ORGANIC_REGISTERED = 2)] = "ORGANIC_REGISTERED"),
        (i[(i.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3)] =
          "ORGANIC_REGISTERED_GUILD_TEMPLATE");
    },
    179645: function (t, e, n) {
      var r,
        i = n(442837),
        l = n(570140);
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let o = null;
      class a extends (r = i.ZP.PersistedStore) {
        initialize(t) {
          var e;
          o =
            null !== (e = null == t ? void 0 : t.type) && void 0 !== e
              ? e
              : null;
        }
        getType() {
          return o;
        }
        getState() {
          return { type: o };
        }
      }
      u(a, "displayName", "NewUserStore"),
        u(a, "persistKey", "nuf"),
        (e.Z = new a(l.Z, {
          NUF_NEW_USER: function (t) {
            let { newUserType: e } = t;
            o = e;
          },
          NUF_COMPLETE: function () {
            o = null;
          },
        }));
    },
    541692: function (t, e, n) {
      let r;
      var i,
        l = n(442837),
        u = n(570140),
        o = n(133080);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let c = (0, o.K4)();
      function s(t) {
        var e;
        let { countryCode: n } = t;
        if (null != n)
          c = null !== (e = (0, o.Zz)(n)) && void 0 !== e ? e : (0, o.K4)();
      }
      class _ extends (i = l.ZP.DeviceSettingsStore) {
        initialize(t) {
          if (null != t) r = t.selectedCountryCode;
        }
        getUserAgnosticState() {
          return { selectedCountryCode: r };
        }
        getCountryCode() {
          return null != r ? r : c;
        }
      }
      a(_, "displayName", "PhoneStore"),
        a(_, "persistKey", "PhoneStore"),
        (e.Z = new _(u.Z, {
          PHONE_SET_COUNTRY_CODE: function (t) {
            let { countryCode: e } = t;
            r = e;
          },
          CONNECTION_OPEN: s,
          SET_LOCATION_METADATA: s,
        }));
    },
    630724: function (t, e, n) {
      var r, i, l, u, o, a, c, s, _, E;
      n.d(e, {
        EW: function () {
          return o;
        },
        FF: function () {
          return i;
        },
        MK: function () {
          return r;
        },
        X2: function () {
          return u;
        },
        mx: function () {
          return l;
        },
      }),
        ((a = r || (r = {})).UNKNOWN = "unknown"),
        (a.ANY = "any"),
        (a.INVITE = "invite"),
        (a.ORGANIC = "organic_registration"),
        (a.ORGANIC_MARKETING = "organic_marketing"),
        (a.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (a.CREATE_GUILD = "create_guild"),
        ((c = i || (i = {})).AGE_GATE = "age_gate"),
        (c.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((s = l || (l = {})).CLAIM_ACCOUNT = "claim_account"),
        (s.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((_ = u || (u = {})).GUILD_TEMPLATES = "guild_templates"),
        (_.GUILD_CREATE = "guild_create"),
        (_.CREATION_INTENT = "creation_intent"),
        (_.CHANNEL_PROMPT = "channel_prompt"),
        (_.JOIN_GUILD = "join_guild"),
        (_.SUCCESS = "create_success"),
        ((E = o || (o = {})).NUF_STARTED = "nuf_started"),
        (E.AGE_GATE = "age_gate"),
        (E.NUF_COMPLETE = "nuf_complete"),
        (E.HUB_CONNECTION = "hub_connection");
    },
    390885: function (t, e, n) {
      var r = n(15729),
        i = n(877124),
        l = n(731965),
        u = n(433517),
        o = n(710845),
        a = n(626135),
        c = n(630724),
        s = n(981631);
      let _ = "UserFlowAnalyticsStore_current",
        E = "UserFlowAnalyticsStore";
      function d(t) {
        if (t === c.MK.UNKNOWN) return null;
        let e = u.K.get("".concat(E, "-").concat(t));
        if (null == e) return null;
        let { version: n, ...r } = e;
        return 1 !== n ? null : r;
      }
      new o.Z("UserFlowAnalytics");
      let f = (0, r.U)()(
        (0, i.XR)((t, e) => ({
          flows: {},
          currentFlow: null,
          activeFlow: () => {
            var t;
            let n =
              null !== (t = e().currentFlow) && void 0 !== t ? t : u.K.get(_);
            if (null == n) return null;
            let { [n]: r } = e().flows,
              i = null != r ? r : d(n);
            return (null == i ? void 0 : i.currentStep) != null ? n : null;
          },
        })),
      );
      function p(t, e) {
        let { [t]: n, ...r } = f.getState().flows,
          i = null != n ? n : d(t);
        if ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== e)
          (0, l.j)(() => {
            f.setState({
              flows: {
                ...r,
                [t]: {
                  type: t,
                  lastStep: null,
                  lastTimestamp: null,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  skipped: !1,
                },
              },
              currentFlow: t,
            });
          });
      }
      function A(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = t;
        if (t === c.MK.ANY) {
          var i;
          r =
            null !== (i = f.getState().activeFlow()) && void 0 !== i
              ? i
              : c.MK.UNKNOWN;
        }
        let { [r]: u, ...o } = f.getState().flows,
          a = null != u ? u : d(r);
        if (null != a && null != a.currentStep && a.currentStep !== e)
          (0, l.j)(() => {
            f.setState({
              flows: {
                ...o,
                [r]: {
                  ...a,
                  lastStep: a.currentStep,
                  lastTimestamp: a.currentTimestamp,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: r,
            });
          });
      }
      f.subscribe(
        (t) => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0),
        (t) => {
          var e;
          if (null != t) {
            if (
              (!(function (t) {
                if (t.type === c.MK.UNKNOWN) return;
                let e = "".concat(E, "-").concat(t.type);
                t.ended
                  ? (u.K.remove(e), u.K.remove(_))
                  : (u.K.set("".concat(E, "-").concat(t.type), {
                      ...t,
                      version: 1,
                    }),
                    u.K.set(_, t.type));
              })(t),
              a.default.track(
                s.rMx.NUO_TRANSITION,
                {
                  flow_type: t.type,
                  from_step: t.lastStep,
                  to_step: t.currentStep,
                  seconds_on_from_step:
                    "function" !=
                    typeof (null === (e = t.lastTimestamp) || void 0 === e
                      ? void 0
                      : e.getTime)
                      ? 0
                      : (t.currentTimestamp.getTime() -
                          t.lastTimestamp.getTime()) /
                        1e3,
                },
                { flush: !0 },
              ),
              t.ended)
            ) {
              let e = { ...f.getState().flows };
              delete e[t.type],
                (0, l.j)(() => {
                  f.setState({ flows: e, currentFlow: null });
                });
            }
          }
        },
      );
      function N() {
        return null != f.getState().activeFlow();
      }
      e.Z = {
        flowStart: p,
        flowStepOrStart: function (t, e) {
          N() ? A(t, e) : p(t, e);
        },
        flowStep: A,
        hasActiveFlow: N,
      };
    },
    3570: function (t, e, n) {
      n.d(e, {
        T: function () {
          return a;
        },
        s: function () {
          return c;
        },
      });
      var r = n(536285),
        i = n(703656),
        l = n(314897),
        u = n(358085),
        o = n(981631);
      let a = u.isPlatformEmbedded
          ? o.dG4
          : (t, e) => {
              if (!(0, i.DB)())
                return r.default.request(o.Etm.DEEP_LINK, {
                  type: t,
                  params: e,
                });
            },
        c = u.isPlatformEmbedded
          ? o.dG4
          : (t, e) => {
              if (!l.default.isAuthenticated())
                return a(t, {
                  ...(e || {}),
                  fingerprint: l.default.getFingerprint(),
                });
            };
    },
  },
]);
//# sourceMappingURL=cd409700a63870431d1e.js.map
