"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3940"],
  {
    103879: function (t, e, n) {
      n.d(e, {
        FN: function () {
          return c;
        },
        NA: function () {
          return A;
        },
        uR: function () {
          return S;
        },
        yq: function () {
          return u;
        },
      });
      var i = n(544891),
        E = n(570140),
        l = n(406432),
        _ = n(314897);
      n(236289);
      var r = n(788080);
      n(800530);
      var a = n(981631);
      async function u() {
        E.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = _.default.getSuspendedUserToken(),
          e = null != t ? a.ANM.SAFETY_HUB_SUSPENDED : a.ANM.SAFETY_HUB,
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
                account_standing: l,
                is_dsa_eligible: _,
                username: r,
                is_appeal_eligible: a,
                appeal_eligibility: u,
              } = e,
              A = n.map((t) => (o(t), t));
            E.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: A.concat(null != i ? i : []),
              accountStanding: l,
              isDsaEligible: _,
              username: r,
              isAppealEligible: a,
              appealEligibility: null != u ? u : [],
            });
          })
          .catch((t) => {
            var e, n;
            E.Z.dispatch({
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
      async function A(t) {
        E.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let e = _.default.getSuspendedUserToken(),
          n = null != e ? a.ANM.SAFETY_HUB_SUSPENDED : a.ANM.SAFETY_HUB,
          l =
            null != e
              ? i.tn.post({ url: n, body: { token: e }, rejectWithError: !1 })
              : i.tn.get({ url: n, rejectWithError: !1 });
        await l
          .then((e) => {
            let { body: n } = e,
              {
                classifications: i,
                account_standing: l,
                is_dsa_eligible: _,
                username: r,
                is_appeal_eligible: a,
              } = n,
              u = i.find((e) => e.id === t);
            null != u
              ? (o(u),
                E.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: u,
                  accountStanding: l,
                  isDsaEligible: _,
                  username: r,
                  isAppealEligible: a,
                }))
              : E.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: t,
                });
          })
          .catch((e) => {
            var n, i;
            E.Z.dispatch({
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
      function o(t) {
        if (null != t.flagged_content && t.flagged_content.length > 0) {
          let e = t.flagged_content[0];
          (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, l.CO)(e) || (0, l.NU)(e);
          })),
            (t.flagged_content = (0, r.Vt)(e) ? [] : [e]);
        }
      }
      async function S(t, e, n) {
        let l = _.default.getSuspendedUserToken(),
          r =
            null != l
              ? a.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : a.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          u =
            null != l
              ? i.tn.put({
                  url: r,
                  body: { signal: e, user_input: n, token: l },
                  rejectWithError: !1,
                })
              : i.tn.put({
                  url: r,
                  body: { signal: e, user_input: n },
                  rejectWithError: !1,
                });
        E.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await u
            .then(() => {
              E.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: t,
              });
            })
            .catch((t) => {
              var e, n;
              throw (
                (E.Z.dispatch({
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
      async function c() {
        E.Z.dispatch({
          type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START",
        });
        let t = _.default.getSuspendedUserToken(),
          e = a.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
          n = i.tn.post({ url: e, body: { token: t }, rejectWithError: !1 });
        await n
          .then((t) => {
            let { body: e } = t,
              { verification_request_id: n, verification_webview_url: i } = e;
            E.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
              verificationRequestId: n,
              verificationWebviewUrl: i,
            });
          })
          .catch((t) => {
            var e, n;
            E.Z.dispatch({
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
    },
    364226: function (t, e, n) {
      n.d(e, {
        A: function () {
          return E;
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
      function E(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (t, e, n) {
      var i,
        E,
        l,
        _,
        r = n(979079),
        a = n.n(r),
        u = n(442837),
        A = n(570140),
        o = n(531441),
        S = n(800530);
      let c = {},
        s = {},
        T = { state: o.Sn.ALL_GOOD },
        U = !1,
        d = !1,
        f = null,
        p = null,
        g = !1,
        F = !1,
        C = [],
        I = !1,
        R = null,
        D = S.bK.DIDNT_VIOLATE_POLICY,
        L = "",
        H = "",
        N = "",
        O = 0,
        b = null,
        P = !1,
        Y = S.oE.NONE,
        B = null;
      function h(t) {
        let {} = t;
        (N = ""), (b = null), (P = !1);
      }
      class v extends (_ = u.ZP.Store) {
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
          return f;
        }
        isInitialized() {
          return d;
        }
        getClassificationRequestState(t) {
          return s[t];
        }
        getAppealClassificationId() {
          return p;
        }
        getIsDsaEligible() {
          return g;
        }
        getIsAppealEligible() {
          return F;
        }
        getAppealEligibility() {
          return C;
        }
        getAppealSignal() {
          return D;
        }
        getFreeTextAppealReason() {
          return L;
        }
        getIsSubmitting() {
          return I;
        }
        getSubmitError() {
          return R;
        }
        getUsername() {
          return H;
        }
        getAgeVerificationWebviewUrl() {
          return N;
        }
        getAgeVerificationError() {
          return b;
        }
        getIsLoadingAgeVerification() {
          return P;
        }
        getAgeCheckStatus() {
          return Y;
        }
        getAgeCheckError() {
          return B;
        }
        getAgeCheckAttempts() {
          return O;
        }
      }
      (l = "SafetyHubStore"),
        (E = "displayName") in (i = v)
          ? Object.defineProperty(i, E, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[E] = l),
        (e.Z = new v(A.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            U = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: e,
              accountStanding: n,
              isDsaEligible: i,
              isAppealEligible: E,
              username: l,
              appealEligibility: _,
            } = t;
            (c = a()(e, "id")),
              (T = n),
              (g = i),
              (F = E),
              (U = !1),
              (d = !0),
              (f = null),
              (H = l),
              (C = _);
          },
          SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (U = !1), (d = !1), (f = e);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (s[t.classificationId] = o.OY.PENDING), (U = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let {
              classification: e,
              accountStanding: n,
              isDsaEligible: i,
              username: E,
              isAppealEligible: l,
            } = t;
            (c[e.id] = e),
              (s[e.id] = o.OY.SUCCESS),
              (T = n),
              (U = !1),
              (f = null),
              (g = i),
              (F = l),
              (d = !0),
              (H = E);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (U = !1), (f = e), (s[n] = o.OY.FAILED), (d = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            p = e;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (p = null), (D = S.bK.DIDNT_VIOLATE_POLICY), (L = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: e } = t;
            D = e;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: e } = t;
            L = e;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (R = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: e } = t;
            (I = !1),
              (R = null),
              (c[e].appeal_status = { status: o.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (I = !1), (R = e);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (N = ""), (b = null), (P = !0);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { verificationWebviewUrl: e } = t;
            (N = e), (b = null), (P = !1);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (N = ""), (b = e), (P = !1);
          },
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: h,
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: h,
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
            let {} = t;
            for (let t in ((Y = S.oE.LOADING), c))
              c[t].is_coppa &&
                (c[t].appeal_status = { status: o.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
            let {} = t;
            (Y = S.oE.LOADING), (B = null);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (Y = S.oE.LOADING), (B = null), (O += 1);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { success: e } = t;
            (Y = e ? S.oE.SUCCESS : O < S.o6 ? S.oE.LOADING : S.oE.FAILURE),
              (B = null);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (Y = S.oE.ERROR), (B = e);
          },
          LOGOUT: function () {
            (U = !1),
              (c = {}),
              (T = { state: o.Sn.ALL_GOOD }),
              (p = null),
              (D = S.bK.DIDNT_VIOLATE_POLICY),
              (L = ""),
              (C = []);
          },
        }));
    },
    451284: function (t, e, n) {
      n.d(e, {
        P: function () {
          return l;
        },
      });
      var i = n(442837),
        E = n(236289);
      function l() {
        return (0, i.e7)([E.Z], () => E.Z.getAccountStanding());
      }
    },
    613734: function (t, e, n) {
      n.d(e, {
        KM: function () {
          return T;
        },
        U0: function () {
          return U;
        },
        YG: function () {
          return c;
        },
        y9: function () {
          return s;
        },
      });
      var i = n(192379),
        E = n(442837),
        l = n(709054),
        _ = n(103879),
        r = n(364226),
        a = n(531441),
        u = n(236289),
        A = n(788080),
        o = n(800530);
      function S() {
        return (0, E.Wu)([u.Z], () => u.Z.getClassifications()).sort(
          (t, e) =>
            l.default.extractTimestamp(e.id) - l.default.extractTimestamp(t.id),
        );
      }
      function c(t) {
        let e;
        let n = (0, E.e7)([u.Z], () => u.Z.getClassification(t)),
          l = (0, E.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
          S = (0, E.e7)([u.Z], () => u.Z.getIsDsaEligible()),
          c = (0, E.e7)([u.Z], () => u.Z.getIsAppealEligible()),
          s = (0, r.A)("classification_detail");
        if ((0, A.FB)(n)) {
          var T;
          e =
            (null === (T = n.guild_metadata) || void 0 === T
              ? void 0
              : T.member_type) === a.wO.OWNER
              ? o.qS.GUILD_OWNER
              : o.qS.GUILD_MEMBER;
        } else e = o.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === n && null == l && _.NA(t);
          }, [t, n, l]),
          {
            classification: n,
            classificationRequestState: l,
            isDsaEligible: S,
            isAppealEligible:
              c && null != n && null == n.appeal_status && (!(0, A.FB)(n) || s),
            violationType: e,
          }
        );
      }
      function s() {
        let t = S(),
          e = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) > e);
      }
      function T() {
        let t = S(),
          e = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) <= e);
      }
      function U() {
        return (0, E.e7)([u.Z], () => u.Z.getAppealSignal());
      }
    },
    846488: function (t, e, n) {
      n.d(e, {
        e: function () {
          return l;
        },
      });
      var i = n(442837),
        E = n(236289);
      function l() {
        return (0, i.e7)([E.Z], () => E.Z.isInitialized());
      }
    },
    181211: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(442837),
        E = n(236289);
      function l() {
        return (0, i.e7)([E.Z], () => E.Z.isFetching());
      }
    },
  },
]);
//# sourceMappingURL=857a2e5eca29c9241bc6.js.map
