"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34842"],
  {
    103879: function (t, e, n) {
      n.d(e, {
        FN: function () {
          return T;
        },
        NA: function () {
          return s;
        },
        _w: function () {
          return U;
        },
        uR: function () {
          return S;
        },
        yq: function () {
          return A;
        },
      });
      var i = n(544891),
        l = n(570140),
        E = n(406432),
        _ = n(314897),
        a = n(236289),
        r = n(788080),
        u = n(800530),
        o = n(981631);
      async function A() {
        l.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = _.default.getSuspendedUserToken(),
          e = null != t ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
          n =
            null != t
              ? i.tn.post({ url: e, body: { token: t }, rejectWithError: !1 })
              : i.tn.get({ url: e, rejectWithError: !1 });
        await n
          .then((t) => {
            let { body: e } = t,
              {
                classifications: n,
                guild_classifications: i,
                account_standing: E,
                is_dsa_eligible: _,
                username: a,
                is_appeal_eligible: r,
                appeal_eligibility: u,
              } = e,
              o = n.map((t) => (c(t), t));
            l.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: o.concat(null != i ? i : []),
              accountStanding: E,
              isDsaEligible: _,
              username: a,
              isAppealEligible: r,
              appealEligibility: null != u ? u : [],
            });
          })
          .catch((t) => {
            var e, n;
            l.Z.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (n =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.message) && void 0 !== n
                  ? n
                  : "Unknown error",
            });
          });
      }
      async function s(t) {
        l.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let e = _.default.getSuspendedUserToken(),
          n = null != e ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
          E =
            null != e
              ? i.tn.post({ url: n, body: { token: e }, rejectWithError: !1 })
              : i.tn.get({ url: n, rejectWithError: !1 });
        await E.then((e) => {
          let { body: n } = e,
            {
              classifications: i,
              account_standing: E,
              is_dsa_eligible: _,
              username: a,
              is_appeal_eligible: r,
            } = n,
            u = i.find((e) => e.id === t);
          null != u
            ? (c(u),
              l.Z.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                classification: u,
                accountStanding: E,
                isDsaEligible: _,
                username: a,
                isAppealEligible: r,
              }))
            : l.Z.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                error: "Classification not found.",
                classificationId: t,
              });
        }).catch((e) => {
          var n, i;
          l.Z.dispatch({
            type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
            error:
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (n = e.body) || void 0 === n
                      ? void 0
                      : n.message) && void 0 !== i
                ? i
                : "Unknown error",
            classificationId: t,
          });
        });
      }
      function c(t) {
        if (null != t.flagged_content && t.flagged_content.length > 0) {
          let e = t.flagged_content[0];
          (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, E.CO)(e) || (0, E.NU)(e);
          })),
            (t.flagged_content = (0, r.Vt)(e) ? [] : [e]);
        }
      }
      async function S(t, e, n) {
        let E = _.default.getSuspendedUserToken(),
          a =
            null != E
              ? o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : o.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          r =
            null != E
              ? i.tn.put({
                  url: a,
                  body: { signal: e, user_input: n, token: E },
                  rejectWithError: !1,
                })
              : i.tn.put({
                  url: a,
                  body: { signal: e, user_input: n },
                  rejectWithError: !1,
                });
        l.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await r
            .then(() => {
              l.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: t,
              });
            })
            .catch((t) => {
              var e, n;
              throw (
                (l.Z.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (n =
                        null == t
                          ? void 0
                          : null === (e = t.body) || void 0 === e
                            ? void 0
                            : e.message) && void 0 !== n
                      ? n
                      : "Unknown error",
                }),
                t)
              );
            });
      }
      async function T() {
        l.Z.dispatch({
          type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START",
        });
        let t = _.default.getSuspendedUserToken(),
          e = o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
          n = i.tn.post({ url: e, body: { token: t }, rejectWithError: !1 });
        await n
          .then((t) => {
            let { body: e } = t,
              { verification_request_id: n, verification_webview_url: i } = e;
            l.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
              verificationRequestId: n,
              verificationWebviewUrl: i,
            });
          })
          .catch((t) => {
            var e, n;
            l.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
              error:
                null !==
                  (n =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.message) && void 0 !== n
                  ? n
                  : "Unknown error",
            });
          });
      }
      async function U() {
        l.Z.dispatch({
          type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START",
        });
        let t = _.default.getSuspendedUserToken(),
          e = a.Z.getAgeCheckAttempts(),
          n = o.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
          E = i.tn.post({ url: n, body: { token: t }, rejectWithError: !1 });
        await E.then((t) => {
          let { body: n } = t,
            { success: i } = n;
          !i && e < u.o6 && setTimeout(() => U(), u.Cp),
            l.Z.dispatch({
              type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
              success: i,
            });
        }).catch((t) => {
          var e, n;
          l.Z.dispatch({
            type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
            error:
              null !==
                (n =
                  null == t
                    ? void 0
                    : null === (e = t.body) || void 0 === e
                      ? void 0
                      : e.message) && void 0 !== n
                ? n
                : "Unknown error",
          });
        });
      }
    },
    219230: function (t, e, n) {
      n.d(e, {
        B: function () {
          return l;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-01_safety_hub_display_guild_violations",
        label: "Safety Hub Display Guild Violations",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Display guild violations in account standing",
            config: { enabled: !0 },
          },
        ],
      });
      function l(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (t, e, n) {
      n.d(e, {
        A: function () {
          return l;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-02_safety_hub_guild_violation_in_app_appeals",
        label: "Safety Hub Guild Violation In App Appeals",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Allow guild violations to be applied using the new appeals ingestion flow",
            config: { enabled: !0 },
          },
        ],
      });
      function l(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (t, e, n) {
      n.d(e, {
        V: function () {
          return l;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2023-11_safety_hub_inapp_appeal_ingestion",
        label: "Safety Hub In App Appeals Ingestion",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Allow users to interact with the new In-App appeals ingestion flow",
            config: { enabled: !0 },
          },
          { id: 2, label: "DSA Testser", config: { enabled: !0 } },
        ],
      });
      function l(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (t, e, n) {
      var i,
        l,
        E,
        _,
        a = n(979079),
        r = n.n(a),
        u = n(442837),
        o = n(570140),
        A = n(531441),
        s = n(800530);
      let c = {},
        S = {},
        T = { state: A.Sn.ALL_GOOD },
        U = !1,
        d = !1,
        p = null,
        f = null,
        g = !1,
        C = !1,
        F = [],
        I = !1,
        R = null,
        D = s.bK.DIDNT_VIOLATE_POLICY,
        H = "",
        b = "",
        L = "",
        N = 0,
        O = null,
        h = !1,
        P = s.oE.NONE,
        B = null;
      function Y(t) {
        let {} = t;
        (L = ""), (O = null), (h = !1);
      }
      class y extends (_ = u.ZP.Store) {
        isFetching() {
          return U;
        }
        getClassifications() {
          return Object.values(c);
        }
        getClassification(t) {
          return c[t];
        }
        getAccountStanding() {
          return T;
        }
        getFetchError() {
          return p;
        }
        isInitialized() {
          return d;
        }
        getClassificationRequestState(t) {
          return S[t];
        }
        getAppealClassificationId() {
          return f;
        }
        getIsDsaEligible() {
          return g;
        }
        getIsAppealEligible() {
          return C;
        }
        getAppealEligibility() {
          return F;
        }
        getAppealSignal() {
          return D;
        }
        getFreeTextAppealReason() {
          return H;
        }
        getIsSubmitting() {
          return I;
        }
        getSubmitError() {
          return R;
        }
        getUsername() {
          return b;
        }
        getAgeVerificationWebviewUrl() {
          return L;
        }
        getAgeVerificationError() {
          return O;
        }
        getIsLoadingAgeVerification() {
          return h;
        }
        getAgeCheckStatus() {
          return P;
        }
        getAgeCheckError() {
          return B;
        }
        getAgeCheckAttempts() {
          return N;
        }
      }
      (E = "SafetyHubStore"),
        (l = "displayName") in (i = y)
          ? Object.defineProperty(i, l, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = E),
        (e.Z = new y(o.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            U = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: e,
              accountStanding: n,
              isDsaEligible: i,
              isAppealEligible: l,
              username: E,
              appealEligibility: _,
            } = t;
            (c = r()(e, "id")),
              (T = n),
              (g = i),
              (C = l),
              (U = !1),
              (d = !0),
              (p = null),
              (b = E),
              (F = _);
          },
          SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (U = !1), (d = !1), (p = e);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (S[t.classificationId] = A.OY.PENDING), (U = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let {
              classification: e,
              accountStanding: n,
              isDsaEligible: i,
              username: l,
              isAppealEligible: E,
            } = t;
            (c[e.id] = e),
              (S[e.id] = A.OY.SUCCESS),
              (T = n),
              (U = !1),
              (p = null),
              (g = i),
              (C = E),
              (d = !0),
              (b = l);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (U = !1), (p = e), (S[n] = A.OY.FAILED), (d = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            f = e;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (f = null), (D = s.bK.DIDNT_VIOLATE_POLICY), (H = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: e } = t;
            D = e;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: e } = t;
            H = e;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (R = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: e } = t;
            (I = !1),
              (R = null),
              (c[e].appeal_status = { status: A.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (I = !1), (R = e);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (L = ""), (O = null), (h = !0);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { verificationWebviewUrl: e } = t;
            (L = e), (O = null), (h = !1);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (L = ""), (O = e), (h = !1);
          },
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: Y,
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: Y,
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
            let {} = t;
            for (let t in ((P = s.oE.LOADING), c))
              c[t].is_coppa &&
                (c[t].appeal_status = { status: A.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
            let {} = t;
            (P = s.oE.LOADING), (B = null);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (P = s.oE.LOADING), (B = null), (N += 1);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { success: e } = t;
            (P = e ? s.oE.SUCCESS : N < s.o6 ? s.oE.LOADING : s.oE.FAILURE),
              (B = null);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (P = s.oE.ERROR), (B = e);
          },
          LOGOUT: function () {
            (U = !1),
              (c = {}),
              (T = { state: A.Sn.ALL_GOOD }),
              (f = null),
              (D = s.bK.DIDNT_VIOLATE_POLICY),
              (H = ""),
              (F = []);
          },
        }));
    },
    451284: function (t, e, n) {
      n.d(e, {
        P: function () {
          return E;
        },
      });
      var i = n(442837),
        l = n(236289);
      function E() {
        return (0, i.e7)([l.Z], () => l.Z.getAccountStanding());
      }
    },
    613734: function (t, e, n) {
      n.d(e, {
        KM: function () {
          return U;
        },
        U0: function () {
          return d;
        },
        YG: function () {
          return S;
        },
        y9: function () {
          return T;
        },
      });
      var i = n(192379),
        l = n(442837),
        E = n(709054),
        _ = n(103879),
        a = n(364226),
        r = n(48484),
        u = n(531441),
        o = n(236289),
        A = n(788080),
        s = n(800530);
      function c() {
        return (0, l.Wu)([o.Z], () => o.Z.getClassifications()).sort(
          (t, e) =>
            E.default.extractTimestamp(e.id) - E.default.extractTimestamp(t.id),
        );
      }
      function S(t) {
        let e;
        let n = (0, l.e7)([o.Z], () => o.Z.getClassification(t)),
          E = (0, l.e7)([o.Z], () => o.Z.getClassificationRequestState(t)),
          c = (0, l.e7)([o.Z], () => o.Z.getIsDsaEligible()),
          S = (0, l.e7)([o.Z], () => o.Z.getIsAppealEligible()),
          T = (0, a.A)("classification_detail"),
          U = (0, r.V)("classification_detail");
        if ((0, A.FB)(n)) {
          var d;
          e =
            (null === (d = n.guild_metadata) || void 0 === d
              ? void 0
              : d.member_type) === u.wO.OWNER
              ? s.qS.GUILD_OWNER
              : s.qS.GUILD_MEMBER;
        } else e = s.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === n && null == E && _.NA(t);
          }, [t, n, E]),
          {
            classification: n,
            classificationRequestState: E,
            isDsaEligible: c,
            isAppealEligible:
              (U || S) &&
              null != n &&
              null == n.appeal_status &&
              (!(0, A.FB)(n) || T),
            violationType: e,
          }
        );
      }
      function T() {
        let t = c(),
          e = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) > e);
      }
      function U() {
        let t = c(),
          e = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) <= e);
      }
      function d() {
        return (0, l.e7)([o.Z], () => o.Z.getAppealSignal());
      }
    },
    846488: function (t, e, n) {
      n.d(e, {
        e: function () {
          return E;
        },
      });
      var i = n(442837),
        l = n(236289);
      function E() {
        return (0, i.e7)([l.Z], () => l.Z.isInitialized());
      }
    },
    181211: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return E;
        },
      });
      var i = n(442837),
        l = n(236289);
      function E() {
        return (0, i.e7)([l.Z], () => l.Z.isFetching());
      }
    },
  },
]);
//# sourceMappingURL=23a9109e9f831ba2f550.js.map
