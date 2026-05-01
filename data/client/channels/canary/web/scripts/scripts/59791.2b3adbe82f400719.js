"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59791"],
  {
    39634(e, t, r) {
      r.d(t, {
        JO: () => C,
        Cm: () => D,
        dN: () => h,
        $b: () => k,
        mf: () => p,
        h6: () => f,
      });
      var i = r(554146),
        n = r(367727),
        s = r(994500),
        o = r(954571),
        a = r(927813),
        l = r(609415),
        u = r(17928),
        E = r(228366);
      let _ = d();
      function d() {
        return { ignoreTimestamps: {} };
      }
      class c extends u.Ay.PersistedStore {
        static displayName = "IgnoreNoticeStore";
        static persistKey = "IgnoreNoticeStore";
        initialize(e) {
          let t = e?.ignoreTimestamps ?? {};
          _ = { ...d(), ignoreTimestamps: t };
        }
        getState() {
          return _;
        }
        getIgnoreTimestamps() {
          return _.ignoreTimestamps;
        }
      }
      let g = new c(E.h, {
          RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: r } = e;
            _.ignoreTimestamps[t] = r;
          },
        }),
        I = (0, r(600975).C)({
          kind: "user",
          id: "2025-04_ignore_user_feedback",
          label: "Ignore User Feedback Experiment",
          defaultConfig: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
          treatments: [
            {
              id: 1,
              label: "Enable Ignore User Feedback Survey",
              config: { enabled: !0, shouldGetShorterIgnoreDuration: !1 },
            },
            {
              id: 2,
              label:
                "Enable Ignore User Feedback Survey w/ shorter duration for testing",
              config: { enabled: !0, shouldGetShorterIgnoreDuration: !0 },
            },
          ],
        });
      var A = r(14594),
        S = r(652215);
      let m = 3 * a.A.Millis.DAY,
        T = a.A.Millis.WEEK,
        b = a.A.Millis.DAYS_30,
        D = () => {
          if (!(0, l.Bv)("block_user_feedback_utils")) return !1;
          let e = s.A.getSinces();
          return Object.keys(e).some((t) => {
            let r = Date.now() - Date.parse(e[t]);
            return s.A.isBlocked(t) && r > T && r < b;
          });
        },
        k = (e, t, r, i) => {
          o.default.track(S.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: i,
          });
        },
        f = () => {
          let { enabled: e, shouldGetShorterIgnoreDuration: t } =
            I.getCurrentConfig(
              { location: "ignore_user_feedback_utils" },
              { autoTrackExposure: !0 },
            );
          if (!e) return !1;
          let { isDismissed: r } = (0, n.FZ)(
            i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK,
            { cooldownDurationMs: A.aH },
          );
          if (r) return !1;
          let o = t ? m : T,
            a = g.getIgnoreTimestamps();
          return Object.keys(a).some((e) => {
            let t = Date.now() - Number(a[e]);
            return s.A.isIgnored(e) && t > o && t < b;
          });
        },
        p = (e, t, r, i) => {
          o.default.track(S.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: i,
          });
        },
        C = (e) =>
          e === i.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE
            ? A.mg.KID_STARTED
            : A.mg.GET_STARTED,
        h = (e, t, r, i, n) => {
          o.default.track(S.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: i,
            entrypoint: n,
          });
        };
    },
  },
]);
//# sourceMappingURL=59791.2b3adbe82f400719.js.map
