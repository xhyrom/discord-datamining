(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45945"],
  {
    785902: function (t) {
      t.exports = function (t, n, i, e) {
        for (var a = -1, o = null == t ? 0 : t.length; ++a < o; ) {
          var l = t[a];
          n(e, l, i(l), t);
        }
        return e;
      };
    },
    800128: function (t, n, i) {
      var e = i(543744);
      t.exports = function (t, n, i, a) {
        return (
          e(t, function (t, e, o) {
            n(a, t, i(t), o);
          }),
          a
        );
      };
    },
    757009: function (t, n, i) {
      var e = i(785902),
        a = i(800128),
        o = i(256098),
        l = i(290677);
      t.exports = function (t, n) {
        return function (i, c) {
          var s = l(i) ? e : a,
            u = n ? n() : {};
          return s(i, t, o(c, 2), u);
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
        c = i(788080),
        s = i(981631);
      async function u() {
        a.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = l.default.getSuspendedUserToken(),
          n = null != t ? s.ANM.SAFETY_HUB_SUSPENDED : s.ANM.SAFETY_HUB,
          i =
            null != t
              ? e.tn.post({ url: n, body: { token: t } })
              : e.tn.get({ url: n });
        await i
          .then((t) => {
            let { body: n } = t,
              {
                classifications: i,
                guild_classifications: e,
                account_standing: o,
                is_dsa_eligible: l,
              } = n,
              c = i.map((t) => (_(t), t));
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: c.concat(null != e ? e : []),
              accountStanding: o,
              isDsaEligible: l,
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
      async function r(t) {
        a.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let n = l.default.getSuspendedUserToken(),
          i = null != n ? s.ANM.SAFETY_HUB_SUSPENDED : s.ANM.SAFETY_HUB,
          o =
            null != n
              ? e.tn.post({ url: i, body: { token: n } })
              : e.tn.get({ url: i });
        await o
          .then((n) => {
            let { body: i } = n,
              {
                classifications: e,
                account_standing: o,
                is_dsa_eligible: l,
              } = i,
              c = e.find((n) => n.id === t);
            null != c
              ? (_(c),
                a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: c,
                  accountStanding: o,
                  isDsaEligible: l,
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
            return (0, o.CO)(n) || (0, o.NU)(n);
          })),
            (t.flagged_content = (0, c.Vt)(n) ? [] : [n]);
        }
      }
      async function d(t, n, i) {
        let o = l.default.getSuspendedUserToken(),
          c =
            null != o
              ? s.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : s.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          u =
            null != o
              ? e.tn.put({
                  url: c,
                  body: { signal: n, user_input: i, token: o },
                })
              : e.tn.put({ url: c, body: { signal: n, user_input: i } });
        a.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await u
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
    236289: function (t, n, i) {
      "use strict";
      var e,
        a,
        o,
        l,
        c = i(979079),
        s = i.n(c),
        u = i(442837),
        r = i(570140),
        _ = i(531441),
        d = i(800530);
      let f = {},
        E = {},
        S = { state: _.Sn.ALL_GOOD },
        A = !1,
        T = !1,
        p = null,
        C = null,
        g = !1,
        U = !1,
        I = null,
        b = d.bK.DIDNT_VIOLATE_POLICY,
        F = "";
      class H extends (l = u.ZP.Store) {
        isFetching() {
          return A;
        }
        getClassifications() {
          return Object.values(f);
        }
        getClassification(t) {
          return f[t];
        }
        getAccountStanding() {
          return S;
        }
        getFetchError() {
          return p;
        }
        isInitialized() {
          return T;
        }
        getClassificationRequestState(t) {
          return E[t];
        }
        getAppealClassificationId() {
          return C;
        }
        getIsDsaEligible() {
          return g;
        }
        getAppealSignal() {
          return b;
        }
        getFreeTextAppealReason() {
          return F;
        }
        getIsSubmitting() {
          return U;
        }
        getSubmitError() {
          return I;
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
        (n.Z = new H(r.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            A = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: n,
              accountStanding: i,
              isDsaEligible: e,
            } = t;
            (f = s()(n, "id")),
              (S = i),
              (g = e),
              (A = !1),
              (T = !0),
              (p = null);
          },
          SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: n } = t;
            (A = !1), (T = !1), (p = n);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (E[t.classificationId] = _.OY.PENDING), (A = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: n, accountStanding: i, isDsaEligible: e } = t;
            (f[n.id] = n),
              (E[n.id] = _.OY.SUCCESS),
              (S = i),
              (A = !1),
              (p = null),
              (g = e),
              (T = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: n, classificationId: i } = t;
            (A = !1), (p = n), (E[i] = _.OY.FAILED), (T = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: n } = t;
            C = n;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (C = null), (b = d.bK.DIDNT_VIOLATE_POLICY), (F = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: n } = t;
            b = n;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: n } = t;
            F = n;
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
            (A = !1),
              (f = {}),
              (S = { state: _.Sn.ALL_GOOD }),
              (C = null),
              (b = d.bK.DIDNT_VIOLATE_POLICY),
              (F = "");
          },
        }));
    },
    451284: function (t, n, i) {
      "use strict";
      i.d(n, {
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
          return f;
        },
        y9: function () {
          return E;
        },
      });
      var e = i(470079),
        a = i(442837),
        o = i(709054),
        l = i(103879),
        c = i(364226),
        s = i(531441),
        u = i(236289),
        r = i(788080),
        _ = i(800530);
      function d() {
        return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort(
          (t, n) =>
            o.default.extractTimestamp(n.id) - o.default.extractTimestamp(t.id),
        );
      }
      function f(t) {
        let n;
        let i = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
          o = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
          d = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
          f = (0, c.A)("classification_detail");
        if ((0, r.FB)(i)) {
          var E;
          n =
            (null === (E = i.guild_metadata) || void 0 === E
              ? void 0
              : E.member_type) === s.wO.OWNER
              ? _.qS.GUILD_OWNER
              : _.qS.GUILD_MEMBER;
        } else n = _.qS.USER;
        return (
          e.useEffect(() => {
            void 0 === i && null == o && l.NA(t);
          }, [t, i, o]),
          {
            classification: i,
            classificationRequestState: o,
            isDsaEligible: d,
            isAppealEligible:
              null != i && null == i.appeal_status && (!(0, r.FB)(i) || f),
            violationType: n,
          }
        );
      }
      function E() {
        let t = d(),
          n = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) > n);
      }
      function S() {
        let t = d(),
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
          return o;
        },
      });
      var e = i(442837),
        a = i(236289);
      function o() {
        return (0, e.e7)([a.Z], () => a.Z.isInitialized());
      }
    },
    181211: function (t, n, i) {
      "use strict";
      i.d(n, {
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
    300106: function (t, n, i) {
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
    105548: function (t, n, i) {
      "use strict";
      t.exports = {
        image: "image_ceb0f1",
        modalRoot: "modalRoot_ceb0f1",
        modalContent: "modalContent_ceb0f1",
        modalHeader: "modalHeader_ceb0f1",
        modalClose: "modalClose_ceb0f1",
      };
    },
    246697: function (t, n, i) {
      "use strict";
      t.exports = {
        classificationEvidenceContainer:
          "classificationEvidenceContainer_e3b35e",
      };
    },
    530124: function (t, n, i) {
      "use strict";
      t.exports = {
        classificationEvidenceCard: "classificationEvidenceCard_b59990",
        classificationEvidenceMessageAttachment:
          "classificationEvidenceMessageAttachment_b59990",
      };
    },
  },
]);
//# sourceMappingURL=6b32894d6e02b2678b80.js.map
