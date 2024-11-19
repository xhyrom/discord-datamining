"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34842"],
  {
    103879: function (e, t, n) {
      n.d(t, {
        NA: function () {
          return E;
        },
        pU: function () {
          return S;
        },
        uR: function () {
          return c;
        },
        yq: function () {
          return o;
        },
      });
      var i = n(544891),
        l = n(570140),
        a = n(406432),
        r = n(314897),
        u = n(788080),
        _ = n(981631);
      async function o() {
        l.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let e = r.default.getSuspendedUserToken(),
          t = null != e ? _.ANM.SAFETY_HUB_SUSPENDED : _.ANM.SAFETY_HUB,
          n =
            null != e
              ? i.tn.post({ url: t, body: { token: e }, rejectWithError: !1 })
              : i.tn.get({ url: t, rejectWithError: !1 });
        await n
          .then((e) => {
            let { body: t } = e,
              {
                classifications: n,
                guild_classifications: i,
                account_standing: a,
                is_dsa_eligible: r,
                username: u,
                is_appeal_eligible: _,
                appeal_eligibility: o,
              } = t,
              E = n.map((e) => (s(e), e));
            l.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: E.concat(null != i ? i : []),
              accountStanding: a,
              isDsaEligible: r,
              username: u,
              isAppealEligible: _,
              appealEligibility: null != o ? o : [],
            });
          })
          .catch((e) => {
            var t, n;
            l.Z.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message) && void 0 !== n
                  ? n
                  : "Unknown error",
            });
          });
      }
      async function E(e) {
        l.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: e,
        });
        let t = r.default.getSuspendedUserToken(),
          n = null != t ? _.ANM.SAFETY_HUB_SUSPENDED : _.ANM.SAFETY_HUB,
          a =
            null != t
              ? i.tn.post({ url: n, body: { token: t }, rejectWithError: !1 })
              : i.tn.get({ url: n, rejectWithError: !1 });
        await a
          .then((t) => {
            let { body: n } = t,
              {
                classifications: i,
                account_standing: a,
                is_dsa_eligible: r,
                username: u,
                is_appeal_eligible: _,
              } = n,
              o = i.find((t) => t.id === e);
            null != o
              ? (s(o),
                l.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: o,
                  accountStanding: a,
                  isDsaEligible: r,
                  username: u,
                  isAppealEligible: _,
                }))
              : l.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: e,
                });
          })
          .catch((t) => {
            var n, i;
            l.Z.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (i =
                    null == t
                      ? void 0
                      : null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.message) && void 0 !== i
                  ? i
                  : "Unknown error",
              classificationId: e,
            });
          });
      }
      function s(e) {
        if (null != e.flagged_content && e.flagged_content.length > 0) {
          let t = e.flagged_content[0];
          (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, a.CO)(t) || (0, a.NU)(t);
          })),
            (e.flagged_content = (0, u.Vt)(t) ? [] : [t]);
        }
      }
      async function c(e, t, n) {
        let a = r.default.getSuspendedUserToken(),
          u =
            null != a
              ? _.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e)
              : _.ANM.SAFETY_HUB_REQUEST_REVIEW(e),
          o =
            null != a
              ? i.tn.put({
                  url: u,
                  body: { signal: t, user_input: n, token: a },
                  rejectWithError: !1,
                })
              : i.tn.put({
                  url: u,
                  body: { signal: t, user_input: n },
                  rejectWithError: !1,
                });
        l.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await o
            .then(() => {
              l.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: e,
              });
            })
            .catch((e) => {
              var t, n;
              throw (
                (l.Z.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (n =
                        null == e
                          ? void 0
                          : null === (t = e.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== n
                      ? n
                      : "Unknown error",
                }),
                e)
              );
            });
      }
      async function S() {
        l.Z.dispatch({ type: "SAFETY_HUB_REQUEST_AGE_VERIFICATION_START" });
        let e = r.default.getSuspendedUserToken(),
          t = _.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
          n = i.tn.post({ url: t, body: { token: e }, rejectWithError: !1 });
        await n
          .then((e) => {
            let { body: t } = e,
              { verification_request_id: n, verification_webview_url: i } = t;
            l.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_AGE_VERIFICATION_SUCCESS",
              verificationRequestId: n,
              verificationWebviewUrl: i,
            });
          })
          .catch((e) => {
            var t, n;
            l.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_AGE_VERIFICATION_FAILURE",
              error:
                null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.message) && void 0 !== n
                  ? n
                  : "Unknown error",
            });
          });
      }
    },
    219230: function (e, t, n) {
      n.d(t, {
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
      function l(e) {
        return !!i.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (e, t, n) {
      n.d(t, {
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
      function l(e) {
        return !!i.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (e, t, n) {
      n.d(t, {
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
      function l(e) {
        return !!i.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (e, t, n) {
      var i,
        l,
        a,
        r,
        u = n(979079),
        _ = n.n(u),
        o = n(442837),
        E = n(570140),
        s = n(531441),
        c = n(800530);
      let S = {},
        A = {},
        d = { state: s.Sn.ALL_GOOD },
        T = !1,
        p = !1,
        f = null,
        I = null,
        U = !1,
        g = !1,
        F = [],
        C = !1,
        b = null,
        R = c.bK.DIDNT_VIOLATE_POLICY,
        H = "",
        h = "",
        N = "",
        y = null,
        B = !1;
      function Y(e) {
        let {} = e;
        (N = ""), (y = null), (B = !1);
      }
      class O extends (r = o.ZP.Store) {
        isFetching() {
          return T;
        }
        getClassifications() {
          return Object.values(S);
        }
        getClassification(e) {
          return S[e];
        }
        getAccountStanding() {
          return d;
        }
        getFetchError() {
          return f;
        }
        isInitialized() {
          return p;
        }
        getClassificationRequestState(e) {
          return A[e];
        }
        getAppealClassificationId() {
          return I;
        }
        getIsDsaEligible() {
          return U;
        }
        getIsAppealEligible() {
          return g;
        }
        getAppealEligibility() {
          return F;
        }
        getAppealSignal() {
          return R;
        }
        getFreeTextAppealReason() {
          return H;
        }
        getIsSubmitting() {
          return C;
        }
        getSubmitError() {
          return b;
        }
        getUsername() {
          return h;
        }
        getAgeVerificationWebviewUrl() {
          return N;
        }
        getAgeVerificationError() {
          return y;
        }
        getIsLoadingAgeVerification() {
          return B;
        }
      }
      (a = "SafetyHubStore"),
        (l = "displayName") in (i = O)
          ? Object.defineProperty(i, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = a),
        (t.Z = new O(E.Z, {
          SAFETY_HUB_FETCH_START: function (e) {
            T = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (e) {
            let {
              classifications: t,
              accountStanding: n,
              isDsaEligible: i,
              isAppealEligible: l,
              username: a,
              appealEligibility: r,
            } = e;
            (S = _()(t, "id")),
              (d = n),
              (U = i),
              (g = l),
              (T = !1),
              (p = !0),
              (f = null),
              (h = a),
              (F = r);
          },
          SAFETY_HUB_FETCH_FAILURE: function (e) {
            let { error: t } = e;
            (T = !1), (p = !1), (f = t);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
            (A[e.classificationId] = s.OY.PENDING), (T = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
            let {
              classification: t,
              accountStanding: n,
              isDsaEligible: i,
              username: l,
              isAppealEligible: a,
            } = e;
            (S[t.id] = t),
              (A[t.id] = s.OY.SUCCESS),
              (d = n),
              (T = !1),
              (f = null),
              (U = i),
              (g = a),
              (p = !0),
              (h = l);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
            let { error: t, classificationId: n } = e;
            (T = !1), (f = t), (A[n] = s.OY.FAILED), (p = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (e) {
            let { classificationId: t } = e;
            I = t;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (I = null), (R = c.bK.DIDNT_VIOLATE_POLICY), (H = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
            let { signal: t } = e;
            R = t;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
            let { userInput: t } = e;
            H = t;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
            let {} = e;
            (C = !0), (b = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
            let { classificationId: t } = e;
            (C = !1),
              (b = null),
              (S[t].appeal_status = { status: s.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
            let { error: t } = e;
            (C = !1), (b = t);
          },
          SAFETY_HUB_REQUEST_AGE_VERIFICATION_START: function (e) {
            let {} = e;
            (N = ""), (y = null), (B = !0);
          },
          SAFETY_HUB_REQUEST_AGE_VERIFICATION_SUCCESS: function (e) {
            let { verificationWebviewUrl: t } = e;
            (N = t), (y = null), (B = !1);
          },
          SAFETY_HUB_REQUEST_AGE_VERIFICATION_FAILURE: function (e) {
            let { error: t } = e;
            (N = ""), (y = t), (B = !1);
          },
          SAFETY_HUB_REQUEST_AGE_VERIFICATION_MODAL_OPEN: Y,
          SAFETY_HUB_REQUEST_AGE_VERIFICATION_MODAL_CLOSE: Y,
          LOGOUT: function () {
            (T = !1),
              (S = {}),
              (d = { state: s.Sn.ALL_GOOD }),
              (I = null),
              (R = c.bK.DIDNT_VIOLATE_POLICY),
              (H = ""),
              (F = []);
          },
        }));
    },
    451284: function (e, t, n) {
      n.d(t, {
        P: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(236289);
      function a() {
        return (0, i.e7)([l.Z], () => l.Z.getAccountStanding());
      }
    },
    613734: function (e, t, n) {
      n.d(t, {
        KM: function () {
          return T;
        },
        U0: function () {
          return p;
        },
        YG: function () {
          return A;
        },
        y9: function () {
          return d;
        },
      });
      var i = n(192379),
        l = n(442837),
        a = n(709054),
        r = n(103879),
        u = n(364226),
        _ = n(48484),
        o = n(531441),
        E = n(236289),
        s = n(788080),
        c = n(800530);
      function S() {
        return (0, l.Wu)([E.Z], () => E.Z.getClassifications()).sort(
          (e, t) =>
            a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id),
        );
      }
      function A(e) {
        let t;
        let n = (0, l.e7)([E.Z], () => E.Z.getClassification(e)),
          a = (0, l.e7)([E.Z], () => E.Z.getClassificationRequestState(e)),
          S = (0, l.e7)([E.Z], () => E.Z.getIsDsaEligible()),
          A = (0, l.e7)([E.Z], () => E.Z.getIsAppealEligible()),
          d = (0, u.A)("classification_detail"),
          T = (0, _.V)("classification_detail");
        if ((0, s.FB)(n)) {
          var p;
          t =
            (null === (p = n.guild_metadata) || void 0 === p
              ? void 0
              : p.member_type) === o.wO.OWNER
              ? c.qS.GUILD_OWNER
              : c.qS.GUILD_MEMBER;
        } else t = c.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === n && null == a && r.NA(e);
          }, [e, n, a]),
          {
            classification: n,
            classificationRequestState: a,
            isDsaEligible: S,
            isAppealEligible:
              (T || A) &&
              null != n &&
              null == n.appeal_status &&
              (!(0, s.FB)(n) || d),
            violationType: t,
          }
        );
      }
      function d() {
        let e = S(),
          t = new Date();
        return e.filter((e) => new Date(e.max_expiration_time) > t);
      }
      function T() {
        let e = S(),
          t = new Date();
        return e.filter((e) => new Date(e.max_expiration_time) <= t);
      }
      function p() {
        return (0, l.e7)([E.Z], () => E.Z.getAppealSignal());
      }
    },
    846488: function (e, t, n) {
      n.d(t, {
        e: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(236289);
      function a() {
        return (0, i.e7)([l.Z], () => l.Z.isInitialized());
      }
    },
    181211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(236289);
      function a() {
        return (0, i.e7)([l.Z], () => l.Z.isFetching());
      }
    },
  },
]);
//# sourceMappingURL=afad7849b9a0e0341ec3.js.map
