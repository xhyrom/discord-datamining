(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45945"],
  {
    785902: function (n) {
      n.exports = function (n, t, i, e) {
        for (var a = -1, o = null == n ? 0 : n.length; ++a < o; ) {
          var l = n[a];
          t(e, l, i(l), n);
        }
        return e;
      };
    },
    800128: function (n, t, i) {
      var e = i(543744);
      n.exports = function (n, t, i, a) {
        return (
          e(n, function (n, e, o) {
            t(a, n, i(n), o);
          }),
          a
        );
      };
    },
    757009: function (n, t, i) {
      var e = i(785902),
        a = i(800128),
        o = i(256098),
        l = i(290677);
      n.exports = function (n, t) {
        return function (i, s) {
          var c = l(i) ? e : a,
            u = t ? t() : {};
          return c(i, n, o(s, 2), u);
        };
      };
    },
    979079: function (n, t, i) {
      var e = i(685347),
        a = i(757009)(function (n, t, i) {
          e(n, i, t);
        });
      n.exports = a;
    },
    103879: function (n, t, i) {
      "use strict";
      i.d(t, {
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
      var e = i(544891),
        a = i(570140),
        o = i(406432),
        l = i(314897),
        s = i(788080),
        c = i(981631);
      async function u() {
        a.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let n = l.default.getSuspendedUserToken(),
          t = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          i =
            null != n
              ? e.tn.post({ url: t, body: { token: n } })
              : e.tn.get({ url: t });
        await i
          .then((n) => {
            let { body: t } = n,
              {
                classifications: i,
                guild_classifications: e,
                account_standing: o,
                is_dsa_eligible: l,
              } = t,
              s = i.map((n) => (_(n), n));
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: s.concat(null != e ? e : []),
              accountStanding: o,
              isDsaEligible: l,
            });
          })
          .catch((n) => {
            var t, i;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_FAILURE",
              error:
                null !==
                  (i =
                    null == n
                      ? void 0
                      : null === (t = n.body) || void 0 === t
                        ? void 0
                        : t.message) && void 0 !== i
                  ? i
                  : "Unknown error",
            });
          });
      }
      async function r(n) {
        a.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: n,
        });
        let t = l.default.getSuspendedUserToken(),
          i = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
          o =
            null != t
              ? e.tn.post({ url: i, body: { token: t } })
              : e.tn.get({ url: i });
        await o
          .then((t) => {
            let { body: i } = t,
              {
                classifications: e,
                account_standing: o,
                is_dsa_eligible: l,
              } = i,
              s = e.find((t) => t.id === n);
            null != s
              ? (_(s),
                a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: s,
                  accountStanding: o,
                  isDsaEligible: l,
                }))
              : a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: n,
                });
          })
          .catch((t) => {
            var i, e;
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (e =
                    null == t
                      ? void 0
                      : null === (i = t.body) || void 0 === i
                        ? void 0
                        : i.message) && void 0 !== e
                  ? e
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
            return (0, o.CO)(t) || (0, o.NU)(t);
          })),
            (n.flagged_content = (0, s.Vt)(t) ? [] : [t]);
        }
      }
      async function d(n, t, i) {
        let o = l.default.getSuspendedUserToken(),
          s =
            null != o
              ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(n)
              : c.ANM.SAFETY_HUB_REQUEST_REVIEW(n),
          u =
            null != o
              ? e.tn.put({
                  url: s,
                  body: { signal: t, user_input: i, token: o },
                })
              : e.tn.put({ url: s, body: { signal: t, user_input: i } });
        a.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await u
            .then(() => {
              a.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: n,
              });
            })
            .catch((n) => {
              var t, i;
              throw (
                (a.Z.dispatch({
                  type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                  error:
                    null !==
                      (i =
                        null == n
                          ? void 0
                          : null === (t = n.body) || void 0 === t
                            ? void 0
                            : t.message) && void 0 !== i
                      ? i
                      : "Unknown error",
                }),
                n)
              );
            });
      }
    },
    219230: function (n, t, i) {
      "use strict";
      i.d(t, {
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
      function a(n) {
        return !!e.useExperiment({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (n, t, i) {
      "use strict";
      i.d(t, {
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
      function a(n) {
        return !!e.useExperiment({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (n, t, i) {
      "use strict";
      i.d(t, {
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
      function a(n) {
        return !!e.useExperiment({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (n, t, i) {
      "use strict";
      var e,
        a,
        o,
        l,
        s = i(979079),
        c = i.n(s),
        u = i(442837),
        r = i(570140),
        _ = i(531441),
        d = i(800530);
      let f = {},
        E = {},
        S = { state: _.Sn.ALL_GOOD },
        A = !1,
        p = !1,
        T = null,
        C = null,
        g = !1,
        b = !1,
        U = null,
        I = d.bK.DIDNT_VIOLATE_POLICY,
        F = "";
      class H extends (l = u.ZP.Store) {
        isFetching() {
          return A;
        }
        getClassifications() {
          return Object.values(f);
        }
        getClassification(n) {
          return f[n];
        }
        getAccountStanding() {
          return S;
        }
        getFetchError() {
          return T;
        }
        isInitialized() {
          return p;
        }
        getClassificationRequestState(n) {
          return E[n];
        }
        getAppealClassificationId() {
          return C;
        }
        getIsDsaEligible() {
          return g;
        }
        getAppealSignal() {
          return I;
        }
        getFreeTextAppealReason() {
          return F;
        }
        getIsSubmitting() {
          return b;
        }
        getSubmitError() {
          return U;
        }
      }
      (o = "SafetyHubStore"),
        (a = "displayName") in (e = H)
          ? Object.defineProperty(e, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = o),
        (t.Z = new H(r.Z, {
          SAFETY_HUB_FETCH_START: function (n) {
            A = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (n) {
            let {
              classifications: t,
              accountStanding: i,
              isDsaEligible: e,
            } = n;
            (f = c()(t, "id")),
              (S = i),
              (g = e),
              (A = !1),
              (p = !0),
              (T = null);
          },
          SAFETY_HUB_FETCH_FAILURE: function (n) {
            let { error: t } = n;
            (A = !1), (p = !1), (T = t);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (n) {
            (E[n.classificationId] = _.OY.PENDING), (A = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (n) {
            let { classification: t, accountStanding: i, isDsaEligible: e } = n;
            (f[t.id] = t),
              (E[t.id] = _.OY.SUCCESS),
              (S = i),
              (A = !1),
              (T = null),
              (g = e),
              (p = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (n) {
            let { error: t, classificationId: i } = n;
            (A = !1), (T = t), (E[i] = _.OY.FAILED), (p = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (n) {
            let { classificationId: t } = n;
            C = t;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (C = null), (I = d.bK.DIDNT_VIOLATE_POLICY), (F = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (n) {
            let { signal: t } = n;
            I = t;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (n) {
            let { userInput: t } = n;
            F = t;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (n) {
            let {} = n;
            (b = !0), (U = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (n) {
            let { classificationId: t } = n;
            (b = !1),
              (U = null),
              (f[t].appeal_status = { status: _.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (n) {
            let { error: t } = n;
            (b = !1), (U = t);
          },
          LOGOUT: function () {
            (A = !1),
              (f = {}),
              (S = { state: _.Sn.ALL_GOOD }),
              (C = null),
              (I = d.bK.DIDNT_VIOLATE_POLICY),
              (F = "");
          },
        }));
    },
    451284: function (n, t, i) {
      "use strict";
      i.d(t, {
        P: function () {
          return o;
        },
      });
      var e = i(442837),
        a = i(236289);
      function o() {
        return (0, e.e7)([a.Z], () => a.Z.getAccountStanding());
      }
    },
    613734: function (n, t, i) {
      "use strict";
      i.d(t, {
        KM: function () {
          return A;
        },
        U0: function () {
          return p;
        },
        YG: function () {
          return E;
        },
        y9: function () {
          return S;
        },
      });
      var e = i(470079),
        a = i(442837),
        o = i(709054),
        l = i(103879),
        s = i(364226),
        c = i(48484),
        u = i(531441),
        r = i(236289),
        _ = i(788080),
        d = i(800530);
      function f() {
        return (0, a.Wu)([r.Z], () => r.Z.getClassifications()).sort(
          (n, t) =>
            o.default.extractTimestamp(t.id) - o.default.extractTimestamp(n.id),
        );
      }
      function E(n) {
        let t;
        let i = (0, a.e7)([r.Z], () => r.Z.getClassification(n)),
          o = (0, a.e7)([r.Z], () => r.Z.getClassificationRequestState(n)),
          f = (0, a.e7)([r.Z], () => r.Z.getIsDsaEligible()),
          E = (0, s.A)("classification_detail"),
          S = (0, c.V)("classification_detail");
        if ((0, _.FB)(i)) {
          var A;
          t =
            (null === (A = i.guild_metadata) || void 0 === A
              ? void 0
              : A.member_type) === u.wO.OWNER
              ? d.qS.GUILD_OWNER
              : d.qS.GUILD_MEMBER;
        } else t = d.qS.USER;
        return (
          e.useEffect(() => {
            void 0 === i && null == o && l.NA(n);
          }, [n, i, o]),
          {
            classification: i,
            classificationRequestState: o,
            isDsaEligible: f,
            isAppealEligible:
              S && null != i && null == i.appeal_status && (!(0, _.FB)(i) || E),
            violationType: t,
          }
        );
      }
      function S() {
        let n = f(),
          t = new Date();
        return n.filter((n) => new Date(n.max_expiration_time) > t);
      }
      function A() {
        let n = f(),
          t = new Date();
        return n.filter((n) => new Date(n.max_expiration_time) <= t);
      }
      function p() {
        return (0, a.e7)([r.Z], () => r.Z.getAppealSignal());
      }
    },
    846488: function (n, t, i) {
      "use strict";
      i.d(t, {
        e: function () {
          return o;
        },
      });
      var e = i(442837),
        a = i(236289);
      function o() {
        return (0, e.e7)([a.Z], () => a.Z.isInitialized());
      }
    },
    181211: function (n, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var e = i(442837),
        a = i(236289);
      function o() {
        return (0, e.e7)([a.Z], () => a.Z.isFetching());
      }
    },
    300106: function (n, t, i) {
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
    105548: function (n, t, i) {
      "use strict";
      n.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    246697: function (n, t, i) {
      "use strict";
      n.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    530124: function (n, t, i) {
      "use strict";
      n.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=ea86bce5a012b387e6dc.js.map
