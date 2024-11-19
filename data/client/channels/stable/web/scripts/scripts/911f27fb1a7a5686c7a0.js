(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69683"],
  {
    785902: function (t) {
      t.exports = function (t, n, i, e) {
        for (var a = -1, l = null == t ? 0 : t.length; ++a < l; ) {
          var o = t[a];
          n(e, o, i(o), t);
        }
        return e;
      };
    },
    800128: function (t, n, i) {
      var e = i(543744);
      t.exports = function (t, n, i, a) {
        return (
          e(t, function (t, e, l) {
            n(a, t, i(t), l);
          }),
          a
        );
      };
    },
    757009: function (t, n, i) {
      var e = i(785902),
        a = i(800128),
        l = i(256098),
        o = i(290677);
      t.exports = function (t, n) {
        return function (i, s) {
          var c = o(i) ? e : a,
            r = n ? n() : {};
          return c(i, t, l(s, 2), r);
        };
      };
    },
    979079: function (t, n, i) {
      var e = i(685347),
        a = i(757009)(function (t, n, i) {
          e(t, i, n);
        });
      t.exports = a;
    },
    103879: function (t, n, i) {
      "use strict";
      i.d(n, {
        NA: function () {
          return u;
        },
        uR: function () {
          return d;
        },
        yq: function () {
          return r;
        },
      });
      var e = i(544891),
        a = i(570140),
        l = i(406432),
        o = i(314897),
        s = i(788080),
        c = i(981631);
      async function r() {
        a.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = o.default.getSuspendedUserToken(),
          n = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          i =
            null != t
              ? e.tn.post({ url: n, body: { token: t }, rejectWithError: !1 })
              : e.tn.get({ url: n, rejectWithError: !1 });
        await i
          .then((t) => {
            let { body: n } = t,
              {
                classifications: i,
                guild_classifications: e,
                account_standing: l,
                is_dsa_eligible: o,
                username: s,
                is_appeal_eligible: c,
                appeal_eligibility: r,
              } = n,
              u = i.map((t) => (_(t), t));
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: u.concat(null != e ? e : []),
              accountStanding: l,
              isDsaEligible: o,
              username: s,
              isAppealEligible: c,
              appealEligibility: null != r ? r : [],
            });
          })
          .catch((t) => {
            var n, i;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
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
            });
          });
      }
      async function u(t) {
        a.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let n = o.default.getSuspendedUserToken(),
          i = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          l =
            null != n
              ? e.tn.post({ url: i, body: { token: n }, rejectWithError: !1 })
              : e.tn.get({ url: i, rejectWithError: !1 });
        await l
          .then((n) => {
            let { body: i } = n,
              {
                classifications: e,
                account_standing: l,
                is_dsa_eligible: o,
                username: s,
                is_appeal_eligible: c,
              } = i,
              r = e.find((n) => n.id === t);
            null != r
              ? (_(r),
                a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: r,
                  accountStanding: l,
                  isDsaEligible: o,
                  username: s,
                  isAppealEligible: c,
                }))
              : a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: t,
                });
          })
          .catch((n) => {
            var i, e;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (e =
                    null == n
                      ? void 0
                      : null === (i = n.body) || void 0 === i
                        ? void 0
                        : i.message) && void 0 !== e
                  ? e
                  : "Unknown error",
              classificationId: t,
            });
          });
      }
      function _(t) {
        if (null != t.flagged_content && t.flagged_content.length > 0) {
          let n = t.flagged_content[0];
          (n.attachments = n.attachments.filter((t) => {
            let { filename: n } = t;
            return (0, l.CO)(n) || (0, l.NU)(n);
          })),
            (t.flagged_content = (0, s.Vt)(n) ? [] : [n]);
        }
      }
      async function d(t, n, i) {
        let l = o.default.getSuspendedUserToken(),
          s =
            null != l
              ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : c.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          r =
            null != l
              ? e.tn.put({
                  url: s,
                  body: { signal: n, user_input: i, token: l },
                  rejectWithError: !1,
                })
              : e.tn.put({
                  url: s,
                  body: { signal: n, user_input: i },
                  rejectWithError: !1,
                });
        a.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await r
            .then(() => {
              a.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: t,
              });
            })
            .catch((t) => {
              var n, i;
              throw (
                (a.Z.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
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
                }),
                t)
              );
            });
      }
    },
    219230: function (t, n, i) {
      "use strict";
      i.d(n, {
        B: function () {
          return a;
        },
      });
      let e = (0, i(818083).B)({
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
      function a(t) {
        return !!e.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (t, n, i) {
      "use strict";
      i.d(n, {
        A: function () {
          return a;
        },
      });
      let e = (0, i(818083).B)({
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
      function a(t) {
        return !!e.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (t, n, i) {
      "use strict";
      i.d(n, {
        V: function () {
          return a;
        },
      });
      let e = (0, i(818083).B)({
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
      function a(t) {
        return !!e.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (t, n, i) {
      "use strict";
      var e,
        a,
        l,
        o,
        s = i(979079),
        c = i.n(s),
        r = i(442837),
        u = i(570140),
        _ = i(531441),
        d = i(800530);
      let f = {},
        E = {},
        p = { state: _.Sn.ALL_GOOD },
        S = !1,
        A = !1,
        T = null,
        g = null,
        C = !1,
        b = !1,
        U = [],
        I = !1,
        F = null,
        H = d.bK.DIDNT_VIOLATE_POLICY,
        y = "",
        h = "";
      class R extends (o = r.ZP.Store) {
        isFetching() {
          return S;
        }
        getClassifications() {
          return Object.values(f);
        }
        getClassification(t) {
          return f[t];
        }
        getAccountStanding() {
          return p;
        }
        getFetchError() {
          return T;
        }
        isInitialized() {
          return A;
        }
        getClassificationRequestState(t) {
          return E[t];
        }
        getAppealClassificationId() {
          return g;
        }
        getIsDsaEligible() {
          return C;
        }
        getIsAppealEligible() {
          return b;
        }
        getAppealEligibility() {
          return U;
        }
        getAppealSignal() {
          return H;
        }
        getFreeTextAppealReason() {
          return y;
        }
        getIsSubmitting() {
          return I;
        }
        getSubmitError() {
          return F;
        }
        getUsername() {
          return h;
        }
      }
      (l = "SafetyHubStore"),
        (a = "displayName") in (e = R)
          ? Object.defineProperty(e, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = l),
        (n.Z = new R(u.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            S = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: n,
              accountStanding: i,
              isDsaEligible: e,
              isAppealEligible: a,
              username: l,
              appealEligibility: o,
            } = t;
            (f = c()(n, "id")),
              (p = i),
              (C = e),
              (b = a),
              (S = !1),
              (A = !0),
              (T = null),
              (h = l),
              (U = o);
          },
          SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: n } = t;
            (S = !1), (A = !1), (T = n);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (E[t.classificationId] = _.OY.PENDING), (S = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let {
              classification: n,
              accountStanding: i,
              isDsaEligible: e,
              username: a,
              isAppealEligible: l,
            } = t;
            (f[n.id] = n),
              (E[n.id] = _.OY.SUCCESS),
              (p = i),
              (S = !1),
              (T = null),
              (C = e),
              (b = l),
              (A = !0),
              (h = a);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: n, classificationId: i } = t;
            (S = !1), (T = n), (E[i] = _.OY.FAILED), (A = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: n } = t;
            g = n;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (H = d.bK.DIDNT_VIOLATE_POLICY), (y = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: n } = t;
            H = n;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: n } = t;
            y = n;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (F = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: n } = t;
            (I = !1),
              (F = null),
              (f[n].appeal_status = { status: _.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: n } = t;
            (I = !1), (F = n);
          },
          LOGOUT: function () {
            (S = !1),
              (f = {}),
              (p = { state: _.Sn.ALL_GOOD }),
              (g = null),
              (H = d.bK.DIDNT_VIOLATE_POLICY),
              (y = ""),
              (U = []);
          },
        }));
    },
    451284: function (t, n, i) {
      "use strict";
      i.d(n, {
        P: function () {
          return l;
        },
      });
      var e = i(442837),
        a = i(236289);
      function l() {
        return (0, e.e7)([a.Z], () => a.Z.getAccountStanding());
      }
    },
    613734: function (t, n, i) {
      "use strict";
      i.d(n, {
        KM: function () {
          return S;
        },
        U0: function () {
          return A;
        },
        YG: function () {
          return E;
        },
        y9: function () {
          return p;
        },
      });
      var e = i(192379),
        a = i(442837),
        l = i(709054),
        o = i(103879),
        s = i(364226),
        c = i(48484),
        r = i(531441),
        u = i(236289),
        _ = i(788080),
        d = i(800530);
      function f() {
        return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort(
          (t, n) =>
            l.default.extractTimestamp(n.id) - l.default.extractTimestamp(t.id),
        );
      }
      function E(t) {
        let n;
        let i = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
          l = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
          f = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
          E = (0, a.e7)([u.Z], () => u.Z.getIsAppealEligible()),
          p = (0, s.A)("classification_detail"),
          S = (0, c.V)("classification_detail");
        if ((0, _.FB)(i)) {
          var A;
          n =
            (null === (A = i.guild_metadata) || void 0 === A
              ? void 0
              : A.member_type) === r.wO.OWNER
              ? d.qS.GUILD_OWNER
              : d.qS.GUILD_MEMBER;
        } else n = d.qS.USER;
        return (
          e.useEffect(() => {
            void 0 === i && null == l && o.NA(t);
          }, [t, i, l]),
          {
            classification: i,
            classificationRequestState: l,
            isDsaEligible: f,
            isAppealEligible:
              (S || E) &&
              null != i &&
              null == i.appeal_status &&
              (!(0, _.FB)(i) || p),
            violationType: n,
          }
        );
      }
      function p() {
        let t = f(),
          n = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) > n);
      }
      function S() {
        let t = f(),
          n = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) <= n);
      }
      function A() {
        return (0, a.e7)([u.Z], () => u.Z.getAppealSignal());
      }
    },
    846488: function (t, n, i) {
      "use strict";
      i.d(n, {
        e: function () {
          return l;
        },
      });
      var e = i(442837),
        a = i(236289);
      function l() {
        return (0, e.e7)([a.Z], () => a.Z.isInitialized());
      }
    },
    181211: function (t, n, i) {
      "use strict";
      i.d(n, {
        Z: function () {
          return l;
        },
      });
      var e = i(442837),
        a = i(236289);
      function l() {
        return (0, e.e7)([a.Z], () => a.Z.isFetching());
      }
    },
    540654: function (t, n, i) {
      "use strict";
      t.exports = {
        classificationContainer: "classificationContainer_dedf6b",
        classificationHeader: "classificationHeader_dedf6b",
        classificationActionsTakenContainer:
          "classificationActionsTakenContainer_dedf6b",
        classificationActionsTakenRow: "classificationActionsTakenRow_dedf6b",
        classificationActionsTakenList: "classificationActionsTakenList_dedf6b",
        classificationActionExplanationContainer:
          "classificationActionExplanationContainer_dedf6b",
        guidelinesExplanation: "guidelinesExplanation_dedf6b",
        classificationLetUsKnowContainer:
          "classificationLetUsKnowContainer_dedf6b",
        classificationPolicyCard: "classificationPolicyCard_dedf6b",
        classificationPolicyCardIcon: "classificationPolicyCardIcon_dedf6b",
        classificationPolicyDescriptionContainer:
          "classificationPolicyDescriptionContainer_dedf6b",
        classificationPolicyLinkIcon: "classificationPolicyLinkIcon_dedf6b",
      };
    },
    289178: function (t, n, i) {
      "use strict";
      t.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    388330: function (t, n, i) {
      "use strict";
      t.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    639334: function (t, n, i) {
      "use strict";
      t.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=911f27fb1a7a5686c7a0.js.map
