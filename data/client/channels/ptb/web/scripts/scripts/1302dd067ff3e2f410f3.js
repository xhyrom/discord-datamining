(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45945"],
  {
    785902: function (n) {
      n.exports = function (n, t, e, i) {
        for (var a = -1, l = null == n ? 0 : n.length; ++a < l; ) {
          var o = n[a];
          t(i, o, e(o), n);
        }
        return i;
      };
    },
    800128: function (n, t, e) {
      var i = e(543744);
      n.exports = function (n, t, e, a) {
        return (
          i(n, function (n, i, l) {
            t(a, n, e(n), l);
          }),
          a
        );
      };
    },
    757009: function (n, t, e) {
      var i = e(785902),
        a = e(800128),
        l = e(256098),
        o = e(290677);
      n.exports = function (n, t) {
        return function (e, s) {
          var c = o(e) ? i : a,
            u = t ? t() : {};
          return c(e, n, l(s, 2), u);
        };
      };
    },
    979079: function (n, t, e) {
      var i = e(685347),
        a = e(757009)(function (n, t, e) {
          i(n, e, t);
        });
      n.exports = a;
    },
    103879: function (n, t, e) {
      "use strict";
      e.d(t, {
        NA: function () {
          return r;
        },
        uR: function () {
          return d;
        },
        yq: function () {
          return u;
        },
      });
      var i = e(544891),
        a = e(570140),
        l = e(406432),
        o = e(314897),
        s = e(788080),
        c = e(981631);
      async function u() {
        a.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let n = o.default.getSuspendedUserToken(),
          t = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          e =
            null != n
              ? i.tn.post({ url: t, body: { token: n } })
              : i.tn.get({ url: t });
        await e
          .then((n) => {
            let { body: t } = n,
              {
                classifications: e,
                guild_classifications: i,
                account_standing: l,
                is_dsa_eligible: o,
                username: s,
                is_appeal_eligible: c,
              } = t,
              u = e.map((n) => (_(n), n));
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: u.concat(null != i ? i : []),
              accountStanding: l,
              isDsaEligible: o,
              username: s,
              isAppealEligible: c,
            });
          })
          .catch((n) => {
            var t, e;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (e =
                    null == n
                      ? void 0
                      : null === (t = n.body) || void 0 === t
                        ? void 0
                        : t.message) && void 0 !== e
                  ? e
                  : "Unknown error",
            });
          });
      }
      async function r(n) {
        a.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: n,
        });
        let t = o.default.getSuspendedUserToken(),
          e = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          l =
            null != t
              ? i.tn.post({ url: e, body: { token: t } })
              : i.tn.get({ url: e });
        await l
          .then((t) => {
            let { body: e } = t,
              {
                classifications: i,
                account_standing: l,
                is_dsa_eligible: o,
                username: s,
                is_appeal_eligible: c,
              } = e,
              u = i.find((t) => t.id === n);
            null != u
              ? (_(u),
                a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: u,
                  accountStanding: l,
                  isDsaEligible: o,
                  username: s,
                  isAppealEligible: c,
                }))
              : a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: n,
                });
          })
          .catch((t) => {
            var e, i;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (i =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.message) && void 0 !== i
                  ? i
                  : "Unknown error",
              classificationId: n,
            });
          });
      }
      function _(n) {
        if (null != n.flagged_content && n.flagged_content.length > 0) {
          let t = n.flagged_content[0];
          (t.attachments = t.attachments.filter((n) => {
            let { filename: t } = n;
            return (0, l.CO)(t) || (0, l.NU)(t);
          })),
            (n.flagged_content = (0, s.Vt)(t) ? [] : [t]);
        }
      }
      async function d(n, t, e) {
        let l = o.default.getSuspendedUserToken(),
          s =
            null != l
              ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(n)
              : c.ANM.SAFETY_HUB_REQUEST_REVIEW(n),
          u =
            null != l
              ? i.tn.put({
                  url: s,
                  body: { signal: t, user_input: e, token: l },
                })
              : i.tn.put({ url: s, body: { signal: t, user_input: e } });
        a.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await u
            .then(() => {
              a.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: n,
              });
            })
            .catch((n) => {
              var t, e;
              throw (
                (a.Z.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (e =
                        null == n
                          ? void 0
                          : null === (t = n.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== e
                      ? e
                      : "Unknown error",
                }),
                n)
              );
            });
      }
    },
    219230: function (n, t, e) {
      "use strict";
      e.d(t, {
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
      function a(n) {
        return !!i.useExperiment({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (n, t, e) {
      "use strict";
      e.d(t, {
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
      function a(n) {
        return !!i.useExperiment({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (n, t, e) {
      "use strict";
      e.d(t, {
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
      function a(n) {
        return !!i.useExperiment({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (n, t, e) {
      "use strict";
      var i,
        a,
        l,
        o,
        s = e(979079),
        c = e.n(s),
        u = e(442837),
        r = e(570140),
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
        R = "";
      class v extends (o = u.ZP.Store) {
        isFetching() {
          return S;
        }
        getClassifications() {
          return Object.values(f);
        }
        getClassification(n) {
          return f[n];
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
        getClassificationRequestState(n) {
          return E[n];
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
          return R;
        }
      }
      (l = "SafetyHubStore"),
        (a = "displayName") in (i = v)
          ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = l),
        (t.Z = new v(r.Z, {
          SAFETY_HUB_FETCH_START: function (n) {
            S = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (n) {
            let {
              classifications: t,
              accountStanding: e,
              isDsaEligible: i,
              isAppealEligible: a,
              username: l,
            } = n;
            (f = c()(t, "id")),
              (p = e),
              (C = i),
              (b = a),
              (S = !1),
              (A = !0),
              (T = null),
              (R = l);
          },
          SAFETY_HUB_FETCH_FAILURE: function (n) {
            let { error: t } = n;
            (S = !1), (A = !1), (T = t);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (n) {
            (E[n.classificationId] = _.OY.PENDING), (S = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (n) {
            let {
              classification: t,
              accountStanding: e,
              isDsaEligible: i,
              username: a,
              isAppealEligible: l,
            } = n;
            (f[t.id] = t),
              (E[t.id] = _.OY.SUCCESS),
              (p = e),
              (S = !1),
              (T = null),
              (C = i),
              (b = l),
              (A = !0),
              (R = a);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (n) {
            let { error: t, classificationId: e } = n;
            (S = !1), (T = t), (E[e] = _.OY.FAILED), (A = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (n) {
            let { classificationId: t } = n;
            g = t;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (F = d.bK.DIDNT_VIOLATE_POLICY), (H = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (n) {
            let { signal: t } = n;
            F = t;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (n) {
            let { userInput: t } = n;
            H = t;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (n) {
            let {} = n;
            (U = !0), (I = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (n) {
            let { classificationId: t } = n;
            (U = !1),
              (I = null),
              (f[t].appeal_status = { status: _.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (n) {
            let { error: t } = n;
            (U = !1), (I = t);
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
    451284: function (n, t, e) {
      "use strict";
      e.d(t, {
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
    613734: function (n, t, e) {
      "use strict";
      e.d(t, {
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
        u = e(531441),
        r = e(236289),
        _ = e(788080),
        d = e(800530);
      function f() {
        return (0, a.Wu)([r.Z], () => r.Z.getClassifications()).sort(
          (n, t) =>
            l.default.extractTimestamp(t.id) - l.default.extractTimestamp(n.id),
        );
      }
      function E(n) {
        let t;
        let e = (0, a.e7)([r.Z], () => r.Z.getClassification(n)),
          l = (0, a.e7)([r.Z], () => r.Z.getClassificationRequestState(n)),
          f = (0, a.e7)([r.Z], () => r.Z.getIsDsaEligible()),
          E = (0, a.e7)([r.Z], () => r.Z.getIsAppealEligible()),
          p = (0, s.A)("classification_detail"),
          S = (0, c.V)("classification_detail");
        if ((0, _.FB)(e)) {
          var A;
          t =
            (null === (A = e.guild_metadata) || void 0 === A
              ? void 0
              : A.member_type) === u.wO.OWNER
              ? d.qS.GUILD_OWNER
              : d.qS.GUILD_MEMBER;
        } else t = d.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === e && null == l && o.NA(n);
          }, [n, e, l]),
          {
            classification: e,
            classificationRequestState: l,
            isDsaEligible: f,
            isAppealEligible:
              (S || E) &&
              null != e &&
              null == e.appeal_status &&
              (!(0, _.FB)(e) || p),
            violationType: t,
          }
        );
      }
      function p() {
        let n = f(),
          t = new Date();
        return n.filter((n) => new Date(n.max_expiration_time) > t);
      }
      function S() {
        let n = f(),
          t = new Date();
        return n.filter((n) => new Date(n.max_expiration_time) <= t);
      }
      function A() {
        return (0, a.e7)([r.Z], () => r.Z.getAppealSignal());
      }
    },
    846488: function (n, t, e) {
      "use strict";
      e.d(t, {
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
    181211: function (n, t, e) {
      "use strict";
      e.d(t, {
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
    300106: function (n, t, e) {
      "use strict";
      n.exports = {
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
    105548: function (n, t, e) {
      "use strict";
      n.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    246697: function (n, t, e) {
      "use strict";
      n.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    530124: function (n, t, e) {
      "use strict";
      n.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=1302dd067ff3e2f410f3.js.map
