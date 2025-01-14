"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3940"],
  {
    103879: function (t, e, n) {
      n.d(e, {
        FN: function () {
          return T;
        },
        NA: function () {
          return S;
        },
        _w: function () {
          return U;
        },
        uR: function () {
          return s;
        },
        yq: function () {
          return o;
        },
      });
      var i = n(544891),
        E = n(570140),
        _ = n(406432),
        l = n(314897),
        r = n(236289),
        A = n(788080),
        u = n(800530),
        a = n(981631);
      async function o() {
        E.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = l.default.getSuspendedUserToken(),
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
                account_standing: _,
                is_dsa_eligible: l,
                username: r,
                is_appeal_eligible: A,
                appeal_eligibility: u,
              } = e,
              a = n.map((t) => (c(t), t));
            E.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: a.concat(null != i ? i : []),
              accountStanding: _,
              isDsaEligible: l,
              username: r,
              isAppealEligible: A,
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
      async function S(t) {
        E.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let e = l.default.getSuspendedUserToken(),
          n = null != e ? a.ANM.SAFETY_HUB_SUSPENDED : a.ANM.SAFETY_HUB,
          _ =
            null != e
              ? i.tn.post({ url: n, body: { token: e }, rejectWithError: !1 })
              : i.tn.get({ url: n, rejectWithError: !1 });
        await _.then((e) => {
          let { body: n } = e,
            {
              classifications: i,
              account_standing: _,
              is_dsa_eligible: l,
              username: r,
              is_appeal_eligible: A,
            } = n,
            u = i.find((e) => e.id === t);
          null != u
            ? (c(u),
              E.Z.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                classification: u,
                accountStanding: _,
                isDsaEligible: l,
                username: r,
                isAppealEligible: A,
              }))
            : E.Z.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                error: "Classification not found.",
                classificationId: t,
              });
        }).catch((e) => {
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
      function c(t) {
        if (null != t.flagged_content && t.flagged_content.length > 0) {
          let e = t.flagged_content[0];
          (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, _.CO)(e) || (0, _.NU)(e);
          })),
            (t.flagged_content = (0, A.Vt)(e) ? [] : [e]);
        }
      }
      async function s(t, e, n) {
        let _ = l.default.getSuspendedUserToken(),
          r =
            null != _
              ? a.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : a.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          A =
            null != _
              ? i.tn.put({
                  url: r,
                  body: { signal: e, user_input: n, token: _ },
                  rejectWithError: !1,
                })
              : i.tn.put({
                  url: r,
                  body: { signal: e, user_input: n },
                  rejectWithError: !1,
                });
        E.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await A.then(() => {
            E.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
              classificationId: t,
            });
          }).catch((t) => {
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
      async function T() {
        E.Z.dispatch({
          type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START",
        });
        let t = l.default.getSuspendedUserToken(),
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
      async function U() {
        E.Z.dispatch({
          type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START",
        });
        let t = l.default.getSuspendedUserToken(),
          e = r.Z.getAgeCheckAttempts(),
          n = a.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
          _ = i.tn.post({ url: n, body: { token: t }, rejectWithError: !1 });
        await _.then((t) => {
          let { body: n } = t,
            { success: i } = n;
          !i && e < u.o6 && setTimeout(() => U(), u.Cp),
            E.Z.dispatch({
              type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
              success: i,
            });
        }).catch((t) => {
          var e, n;
          E.Z.dispatch({
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
        _,
        l,
        r = n(979079),
        A = n.n(r),
        u = n(442837),
        a = n(570140),
        o = n(531441),
        S = n(800530);
      let c = {},
        s = {},
        T = { state: o.Sn.ALL_GOOD },
        U = !1,
        d = !1,
        p = null,
        f = null,
        g = !1,
        C = !1,
        F = [],
        I = !1,
        R = null,
        D = S.bK.DIDNT_VIOLATE_POLICY,
        H = "",
        L = "",
        N = "",
        O = 0,
        P = null,
        h = !1,
        Y = S.oE.NONE,
        b = null;
      function B(t) {
        let {} = t;
        (N = ""), (P = null), (h = !1);
      }
      class y extends (l = u.ZP.Store) {
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
          return s[t];
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
          return L;
        }
        getAgeVerificationWebviewUrl() {
          return N;
        }
        getAgeVerificationError() {
          return P;
        }
        getIsLoadingAgeVerification() {
          return h;
        }
        getAgeCheckStatus() {
          return Y;
        }
        getAgeCheckError() {
          return b;
        }
        getAgeCheckAttempts() {
          return O;
        }
      }
      (_ = "SafetyHubStore"),
        (E = "displayName") in (i = y)
          ? Object.defineProperty(i, E, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[E] = _),
        (e.Z = new y(a.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            U = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: e,
              accountStanding: n,
              isDsaEligible: i,
              isAppealEligible: E,
              username: _,
              appealEligibility: l,
            } = t;
            (c = A()(e, "id")),
              (T = n),
              (g = i),
              (C = E),
              (U = !1),
              (d = !0),
              (p = null),
              (L = _),
              (F = l);
          },
          SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (U = !1), (d = !1), (p = e);
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
              isAppealEligible: _,
            } = t;
            (c[e.id] = e),
              (s[e.id] = o.OY.SUCCESS),
              (T = n),
              (U = !1),
              (p = null),
              (g = i),
              (C = _),
              (d = !0),
              (L = E);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (U = !1), (p = e), (s[n] = o.OY.FAILED), (d = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            f = e;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (f = null), (D = S.bK.DIDNT_VIOLATE_POLICY), (H = "");
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
              (c[e].appeal_status = { status: o.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (I = !1), (R = e);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (N = ""), (P = null), (h = !0);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { verificationWebviewUrl: e } = t;
            (N = e), (P = null), (h = !1);
          },
          SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (N = ""), (P = e), (h = !1);
          },
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: B,
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: B,
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
            let {} = t;
            for (let t in ((Y = S.oE.LOADING), c))
              c[t].is_coppa &&
                (c[t].appeal_status = { status: o.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
            let {} = t;
            (Y = S.oE.LOADING), (b = null);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (Y = S.oE.LOADING), (b = null), (O += 1);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { success: e } = t;
            (Y = e ? S.oE.SUCCESS : O < S.o6 ? S.oE.LOADING : S.oE.FAILURE),
              (b = null);
          },
          SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (Y = S.oE.ERROR), (b = e);
          },
          LOGOUT: function () {
            (U = !1),
              (c = {}),
              (T = { state: o.Sn.ALL_GOOD }),
              (f = null),
              (D = S.bK.DIDNT_VIOLATE_POLICY),
              (H = ""),
              (F = []);
          },
        }));
    },
    451284: function (t, e, n) {
      n.d(e, {
        P: function () {
          return _;
        },
      });
      var i = n(442837),
        E = n(236289);
      function _() {
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
        _ = n(709054),
        l = n(103879),
        r = n(364226),
        A = n(531441),
        u = n(236289),
        a = n(788080),
        o = n(800530);
      function S() {
        return (0, E.Wu)([u.Z], () => u.Z.getClassifications()).sort(
          (t, e) =>
            _.default.extractTimestamp(e.id) - _.default.extractTimestamp(t.id),
        );
      }
      function c(t) {
        let e;
        let n = (0, E.e7)([u.Z], () => u.Z.getClassification(t)),
          _ = (0, E.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
          S = (0, E.e7)([u.Z], () => u.Z.getIsDsaEligible()),
          c = (0, E.e7)([u.Z], () => u.Z.getIsAppealEligible()),
          s = (0, r.A)("classification_detail");
        if ((0, a.FB)(n)) {
          var T;
          e =
            (null === (T = n.guild_metadata) || void 0 === T
              ? void 0
              : T.member_type) === A.wO.OWNER
              ? o.qS.GUILD_OWNER
              : o.qS.GUILD_MEMBER;
        } else e = o.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === n && null == _ && l.NA(t);
          }, [t, n, _]),
          {
            classification: n,
            classificationRequestState: _,
            isDsaEligible: S,
            isAppealEligible:
              c && null != n && null == n.appeal_status && (!(0, a.FB)(n) || s),
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
          return _;
        },
      });
      var i = n(442837),
        E = n(236289);
      function _() {
        return (0, i.e7)([E.Z], () => E.Z.isInitialized());
      }
    },
    181211: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
        },
      });
      var i = n(442837),
        E = n(236289);
      function _() {
        return (0, i.e7)([E.Z], () => E.Z.isFetching());
      }
    },
  },
]);
//# sourceMappingURL=832eff676dbb60551e17.js.map
