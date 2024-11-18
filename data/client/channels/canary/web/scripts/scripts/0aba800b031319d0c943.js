(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69683"],
  {
    785902: function (t) {
      t.exports = function (t, n, e, i) {
        for (var a = -1, l = null == t ? 0 : t.length; ++a < l; ) {
          var o = t[a];
          n(i, o, e(o), t);
        }
        return i;
      };
    },
    800128: function (t, n, e) {
      var i = e(543744);
      t.exports = function (t, n, e, a) {
        return (
          i(t, function (t, i, l) {
            n(a, t, e(t), l);
          }),
          a
        );
      };
    },
    757009: function (t, n, e) {
      var i = e(785902),
        a = e(800128),
        l = e(256098),
        o = e(290677);
      t.exports = function (t, n) {
        return function (e, s) {
          var c = o(e) ? i : a,
            r = n ? n() : {};
          return c(e, t, l(s, 2), r);
        };
      };
    },
    979079: function (t, n, e) {
      var i = e(685347),
        a = e(757009)(function (t, n, e) {
          i(t, e, n);
        });
      t.exports = a;
    },
    103879: function (t, n, e) {
      "use strict";
      e.d(n, {
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
      var i = e(544891),
        a = e(570140),
        l = e(406432),
        o = e(314897),
        s = e(788080),
        c = e(981631);
      async function r() {
        a.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = o.default.getSuspendedUserToken(),
          n = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          e =
            null != t
              ? i.tn.post({ url: n, body: { token: t }, rejectWithError: !1 })
              : i.tn.get({ url: n, rejectWithError: !1 });
        await e
          .then((t) => {
            let { body: n } = t,
              {
                classifications: e,
                guild_classifications: i,
                account_standing: l,
                is_dsa_eligible: o,
                username: s,
                is_appeal_eligible: c,
              } = n,
              r = e.map((t) => (_(t), t));
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: r.concat(null != i ? i : []),
              accountStanding: l,
              isDsaEligible: o,
              username: s,
              isAppealEligible: c,
            });
          })
          .catch((t) => {
            var n, e;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (e =
                    null == t
                      ? void 0
                      : null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.message) && void 0 !== e
                  ? e
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
          e = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          l =
            null != n
              ? i.tn.post({ url: e, body: { token: n }, rejectWithError: !1 })
              : i.tn.get({ url: e, rejectWithError: !1 });
        await l
          .then((n) => {
            let { body: e } = n,
              {
                classifications: i,
                account_standing: l,
                is_dsa_eligible: o,
                username: s,
                is_appeal_eligible: c,
              } = e,
              r = i.find((n) => n.id === t);
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
            var e, i;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (i =
                    null == n
                      ? void 0
                      : null === (e = n.body) || void 0 === e
                        ? void 0
                        : e.message) && void 0 !== i
                  ? i
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
      async function d(t, n, e) {
        let l = o.default.getSuspendedUserToken(),
          s =
            null != l
              ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : c.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          r =
            null != l
              ? i.tn.put({
                  url: s,
                  body: { signal: n, user_input: e, token: l },
                  rejectWithError: !1,
                })
              : i.tn.put({
                  url: s,
                  body: { signal: n, user_input: e },
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
              var n, e;
              throw (
                (a.Z.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (e =
                        null == t
                          ? void 0
                          : null === (n = t.body) || void 0 === n
                            ? void 0
                            : n.message) && void 0 !== e
                      ? e
                      : "Unknown error",
                }),
                t)
              );
            });
      }
    },
    219230: function (t, n, e) {
      "use strict";
      e.d(n, {
        B: function () {
          return a;
        },
      });
      let i = (0, e(818083).B)({
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
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (t, n, e) {
      "use strict";
      e.d(n, {
        A: function () {
          return a;
        },
      });
      let i = (0, e(818083).B)({
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
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (t, n, e) {
      "use strict";
      e.d(n, {
        V: function () {
          return a;
        },
      });
      let i = (0, e(818083).B)({
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
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (t, n, e) {
      "use strict";
      var i,
        a,
        l,
        o,
        s = e(979079),
        c = e.n(s),
        r = e(442837),
        u = e(570140),
        _ = e(531441),
        d = e(800530);
      let f = {},
        E = {},
        p = { state: _.Sn.ALL_GOOD },
        S = !1,
        A = !1,
        T = null,
        g = null,
        C = !1,
        b = !1,
        U = !1,
        I = null,
        F = d.bK.DIDNT_VIOLATE_POLICY,
        H = "",
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
        getAppealSignal() {
          return F;
        }
        getFreeTextAppealReason() {
          return H;
        }
        getIsSubmitting() {
          return U;
        }
        getSubmitError() {
          return I;
        }
        getUsername() {
          return h;
        }
      }
      (l = "SafetyHubStore"),
        (a = "displayName") in (i = R)
          ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = l),
        (n.Z = new R(u.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            S = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: n,
              accountStanding: e,
              isDsaEligible: i,
              isAppealEligible: a,
              username: l,
            } = t;
            (f = c()(n, "id")),
              (p = e),
              (C = i),
              (b = a),
              (S = !1),
              (A = !0),
              (T = null),
              (h = l);
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
              accountStanding: e,
              isDsaEligible: i,
              username: a,
              isAppealEligible: l,
            } = t;
            (f[n.id] = n),
              (E[n.id] = _.OY.SUCCESS),
              (p = e),
              (S = !1),
              (T = null),
              (C = i),
              (b = l),
              (A = !0),
              (h = a);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: n, classificationId: e } = t;
            (S = !1), (T = n), (E[e] = _.OY.FAILED), (A = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: n } = t;
            g = n;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (F = d.bK.DIDNT_VIOLATE_POLICY), (H = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: n } = t;
            F = n;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: n } = t;
            H = n;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (U = !0), (I = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: n } = t;
            (U = !1),
              (I = null),
              (f[n].appeal_status = { status: _.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: n } = t;
            (U = !1), (I = n);
          },
          LOGOUT: function () {
            (S = !1),
              (f = {}),
              (p = { state: _.Sn.ALL_GOOD }),
              (g = null),
              (F = d.bK.DIDNT_VIOLATE_POLICY),
              (H = "");
          },
        }));
    },
    451284: function (t, n, e) {
      "use strict";
      e.d(n, {
        P: function () {
          return l;
        },
      });
      var i = e(442837),
        a = e(236289);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.getAccountStanding());
      }
    },
    613734: function (t, n, e) {
      "use strict";
      e.d(n, {
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
      var i = e(192379),
        a = e(442837),
        l = e(709054),
        o = e(103879),
        s = e(364226),
        c = e(48484),
        r = e(531441),
        u = e(236289),
        _ = e(788080),
        d = e(800530);
      function f() {
        return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort(
          (t, n) =>
            l.default.extractTimestamp(n.id) - l.default.extractTimestamp(t.id),
        );
      }
      function E(t) {
        let n;
        let e = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
          l = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
          f = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
          E = (0, a.e7)([u.Z], () => u.Z.getIsAppealEligible()),
          p = (0, s.A)("classification_detail"),
          S = (0, c.V)("classification_detail");
        if ((0, _.FB)(e)) {
          var A;
          n =
            (null === (A = e.guild_metadata) || void 0 === A
              ? void 0
              : A.member_type) === r.wO.OWNER
              ? d.qS.GUILD_OWNER
              : d.qS.GUILD_MEMBER;
        } else n = d.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === e && null == l && o.NA(t);
          }, [t, e, l]),
          {
            classification: e,
            classificationRequestState: l,
            isDsaEligible: f,
            isAppealEligible:
              (S || E) &&
              null != e &&
              null == e.appeal_status &&
              (!(0, _.FB)(e) || p),
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
    846488: function (t, n, e) {
      "use strict";
      e.d(n, {
        e: function () {
          return l;
        },
      });
      var i = e(442837),
        a = e(236289);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.isInitialized());
      }
    },
    181211: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(442837),
        a = e(236289);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.isFetching());
      }
    },
    540654: function (t, n, e) {
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
    289178: function (t, n, e) {
      "use strict";
      t.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    388330: function (t, n, e) {
      "use strict";
      t.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    639334: function (t, n, e) {
      "use strict";
      t.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=0aba800b031319d0c943.js.map
