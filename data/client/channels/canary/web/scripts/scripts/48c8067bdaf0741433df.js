"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18824"],
  {
    103879: function (e, t, n) {
      n.d(t, {
        NA: function () {
          return _;
        },
        uR: function () {
          return d;
        },
        yq: function () {
          return c;
        },
      });
      var a = n(544891),
        i = n(570140),
        s = n(406432),
        l = n(314897),
        r = n(788080),
        o = n(981631);
      async function c() {
        i.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let e = l.default.getSuspendedUserToken(),
          t = null != e ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
          n =
            null != e
              ? a.tn.post({ url: t, body: { token: e } })
              : a.tn.get({ url: t });
        await n
          .then((e) => {
            let { body: t } = e,
              {
                classifications: n,
                guild_classifications: a,
                account_standing: s,
                is_dsa_eligible: l,
                username: r,
              } = t,
              o = n.map((e) => (u(e), e));
            i.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: o.concat(null != a ? a : []),
              accountStanding: s,
              isDsaEligible: l,
              username: r,
            });
          })
          .catch((e) => {
            var t, n;
            i.Z.dispatch({
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
      async function _(e) {
        i.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: e,
        });
        let t = l.default.getSuspendedUserToken(),
          n = null != t ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
          s =
            null != t
              ? a.tn.post({ url: n, body: { token: t } })
              : a.tn.get({ url: n });
        await s
          .then((t) => {
            let { body: n } = t,
              {
                classifications: a,
                account_standing: s,
                is_dsa_eligible: l,
                username: r,
              } = n,
              o = a.find((t) => t.id === e);
            null != o
              ? (u(o),
                i.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: o,
                  accountStanding: s,
                  isDsaEligible: l,
                  username: r,
                }))
              : i.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: e,
                });
          })
          .catch((t) => {
            var n, a;
            i.Z.dispatch({
              type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
              error:
                null !==
                  (a =
                    null == t
                      ? void 0
                      : null === (n = t.body) || void 0 === n
                        ? void 0
                        : n.message) && void 0 !== a
                  ? a
                  : "Unknown error",
              classificationId: e,
            });
          });
      }
      function u(e) {
        if (null != e.flagged_content && e.flagged_content.length > 0) {
          let t = e.flagged_content[0];
          (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, s.CO)(t) || (0, s.NU)(t);
          })),
            (e.flagged_content = (0, r.Vt)(t) ? [] : [t]);
        }
      }
      async function d(e, t, n) {
        let s = l.default.getSuspendedUserToken(),
          r =
            null != s
              ? o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e)
              : o.ANM.SAFETY_HUB_REQUEST_REVIEW(e),
          c =
            null != s
              ? a.tn.put({
                  url: r,
                  body: { signal: t, user_input: n, token: s },
                })
              : a.tn.put({ url: r, body: { signal: t, user_input: n } });
        i.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await c
            .then(() => {
              i.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: e,
              });
            })
            .catch((e) => {
              var t, n;
              throw (
                (i.Z.dispatch({
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
    },
    219230: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
      });
      let a = (0, n(818083).B)({
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
      function i(e) {
        return !!a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
      });
      let a = (0, n(818083).B)({
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
      function i(e) {
        return !!a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (e, t, n) {
      n.d(t, {
        V: function () {
          return i;
        },
      });
      let a = (0, n(818083).B)({
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
      function i(e) {
        return !!a.useExperiment({ location: e }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (e, t, n) {
      var a,
        i,
        s,
        l,
        r = n(979079),
        o = n.n(r),
        c = n(442837),
        _ = n(570140),
        u = n(531441),
        d = n(800530);
      let E = {},
        T = {},
        S = { state: u.Sn.ALL_GOOD },
        A = !1,
        I = !1,
        N = null,
        g = null,
        f = !1,
        C = !1,
        m = null,
        p = d.bK.DIDNT_VIOLATE_POLICY,
        U = "",
        h = "";
      class O extends (l = c.ZP.Store) {
        isFetching() {
          return A;
        }
        getClassifications() {
          return Object.values(E);
        }
        getClassification(e) {
          return E[e];
        }
        getAccountStanding() {
          return S;
        }
        getFetchError() {
          return N;
        }
        isInitialized() {
          return I;
        }
        getClassificationRequestState(e) {
          return T[e];
        }
        getAppealClassificationId() {
          return g;
        }
        getIsDsaEligible() {
          return f;
        }
        getAppealSignal() {
          return p;
        }
        getFreeTextAppealReason() {
          return U;
        }
        getIsSubmitting() {
          return C;
        }
        getSubmitError() {
          return m;
        }
        getUsername() {
          return h;
        }
      }
      (s = "SafetyHubStore"),
        (i = "displayName") in (a = O)
          ? Object.defineProperty(a, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = s),
        (t.Z = new O(_.Z, {
          SAFETY_HUB_FETCH_START: function (e) {
            A = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (e) {
            let {
              classifications: t,
              accountStanding: n,
              isDsaEligible: a,
              username: i,
            } = e;
            (E = o()(t, "id")),
              (S = n),
              (f = a),
              (A = !1),
              (I = !0),
              (N = null),
              (h = i);
          },
          SAFETY_HUB_FETCH_FAILURE: function (e) {
            let { error: t } = e;
            (A = !1), (I = !1), (N = t);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
            (T[e.classificationId] = u.OY.PENDING), (A = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
            let {
              classification: t,
              accountStanding: n,
              isDsaEligible: a,
              username: i,
            } = e;
            (E[t.id] = t),
              (T[t.id] = u.OY.SUCCESS),
              (S = n),
              (A = !1),
              (N = null),
              (f = a),
              (I = !0),
              (h = i);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
            let { error: t, classificationId: n } = e;
            (A = !1), (N = t), (T[n] = u.OY.FAILED), (I = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (e) {
            let { classificationId: t } = e;
            g = t;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (p = d.bK.DIDNT_VIOLATE_POLICY), (U = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
            let { signal: t } = e;
            p = t;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
            let { userInput: t } = e;
            U = t;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
            let {} = e;
            (C = !0), (m = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
            let { classificationId: t } = e;
            (C = !1),
              (m = null),
              (E[t].appeal_status = { status: u.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
            let { error: t } = e;
            (C = !1), (m = t);
          },
          LOGOUT: function () {
            (A = !1),
              (E = {}),
              (S = { state: u.Sn.ALL_GOOD }),
              (g = null),
              (p = d.bK.DIDNT_VIOLATE_POLICY),
              (U = "");
          },
        }));
    },
    467432: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var a = n(709054);
      let i = (e) =>
        864e5 >
        Math.abs(a.default.extractTimestamp(e.id) - new Date().getTime());
    },
    451284: function (e, t, n) {
      n.d(t, {
        P: function () {
          return s;
        },
      });
      var a = n(442837),
        i = n(236289);
      function s() {
        return (0, a.e7)([i.Z], () => i.Z.getAccountStanding());
      }
    },
    613734: function (e, t, n) {
      n.d(t, {
        KM: function () {
          return A;
        },
        U0: function () {
          return I;
        },
        YG: function () {
          return T;
        },
        y9: function () {
          return S;
        },
      });
      var a = n(192379),
        i = n(442837),
        s = n(709054),
        l = n(103879),
        r = n(364226),
        o = n(48484),
        c = n(531441),
        _ = n(236289),
        u = n(788080),
        d = n(800530);
      function E() {
        return (0, i.Wu)([_.Z], () => _.Z.getClassifications()).sort(
          (e, t) =>
            s.default.extractTimestamp(t.id) - s.default.extractTimestamp(e.id),
        );
      }
      function T(e) {
        let t;
        let n = (0, i.e7)([_.Z], () => _.Z.getClassification(e)),
          s = (0, i.e7)([_.Z], () => _.Z.getClassificationRequestState(e)),
          E = (0, i.e7)([_.Z], () => _.Z.getIsDsaEligible()),
          T = (0, r.A)("classification_detail"),
          S = (0, o.V)("classification_detail");
        if ((0, u.FB)(n)) {
          var A;
          t =
            (null === (A = n.guild_metadata) || void 0 === A
              ? void 0
              : A.member_type) === c.wO.OWNER
              ? d.qS.GUILD_OWNER
              : d.qS.GUILD_MEMBER;
        } else t = d.qS.USER;
        return (
          a.useEffect(() => {
            void 0 === n && null == s && l.NA(e);
          }, [e, n, s]),
          {
            classification: n,
            classificationRequestState: s,
            isDsaEligible: E,
            isAppealEligible:
              S && null != n && null == n.appeal_status && (!(0, u.FB)(n) || T),
            violationType: t,
          }
        );
      }
      function S() {
        let e = E(),
          t = new Date();
        return e.filter((e) => new Date(e.max_expiration_time) > t);
      }
      function A() {
        let e = E(),
          t = new Date();
        return e.filter((e) => new Date(e.max_expiration_time) <= t);
      }
      function I() {
        return (0, i.e7)([_.Z], () => _.Z.getAppealSignal());
      }
    },
    802429: function (e, t, n) {
      n.d(t, {
        i: function () {
          return s;
        },
      });
      var a = n(442837),
        i = n(236289);
      let s = () => (0, a.e7)([i.Z], () => i.Z.getFetchError());
    },
    846488: function (e, t, n) {
      n.d(t, {
        e: function () {
          return s;
        },
      });
      var a = n(442837),
        i = n(236289);
      function s() {
        return (0, a.e7)([i.Z], () => i.Z.isInitialized());
      }
    },
    181211: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(442837),
        i = n(236289);
      function s() {
        return (0, a.e7)([i.Z], () => i.Z.isFetching());
      }
    },
    811085: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        s = n(392711),
        l = n(442837),
        r = n(692547),
        o = n(481060),
        c = n(594174),
        _ = n(531441),
        u = n(451284),
        d = n(959562),
        E = n(800530),
        T = n(689938),
        S = n(596175);
      function A() {
        let e = (0, u.P)(),
          t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
          [n, A] = i.useState(36),
          I = i.useRef({
            [_.Sn.ALL_GOOD]: null,
            [_.Sn.LIMITED]: null,
            [_.Sn.VERY_LIMITED]: null,
            [_.Sn.AT_RISK]: null,
            [_.Sn.SUSPENDED]: null,
          }),
          N = i.useCallback(() => {
            A(
              Math.max(
                Math.max(
                  ...Object.values(I.current).map((e) => {
                    var t;
                    return null !==
                      (t =
                        null == e
                          ? void 0
                          : e.getBoundingClientRect().height) && void 0 !== t
                      ? t
                      : 36;
                  }),
                ),
                36,
              ),
            );
          }, []);
        i.useEffect(() => {
          N();
          let e = (0, s.debounce)(N, 100);
          window.addEventListener("resize", e);
        }, [N]);
        let g = {
            [_.Sn.ALL_GOOD]: {
              title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_TITLE_V2,
              description:
                T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_DESCRIPTION_V2.format(
                  {
                    termsOfService: E.sQ.TOS_LINK,
                    communityGuidelines: E.sQ.COMMUNITY_GUIDELINES,
                  },
                ),
              status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_ALL_GOOD_SHORT,
              Icon: o.CircleCheckIcon,
              color: r.Z.colors.STATUS_POSITIVE,
            },
            [_.Sn.LIMITED]: {
              title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_TITLE_V2,
              description:
                T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_DESCRIPTION_V2,
              status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_LIMITED_SHORT,
              Icon: o.CircleWarningIcon,
              color: r.Z.colors.STATUS_WARNING,
            },
            [_.Sn.VERY_LIMITED]: {
              title:
                T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_TITLE_V2,
              description:
                T.Z.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_DESCRIPTION_V2,
              status:
                T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_VERY_LIMITED_SHORT,
              Icon: o.CircleWarningIcon,
              color: r.Z.unsafe_rawColors.ORANGE_345,
            },
            [_.Sn.AT_RISK]: {
              title: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_TITLE_V2,
              description:
                T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_DESCRIPTION,
              status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_AT_RISK_SHORT,
              Icon: o.CircleWarningIcon,
              color: r.Z.colors.STATUS_DANGER,
            },
            [_.Sn.SUSPENDED]: {
              title:
                T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_TITLE_V2,
              description:
                T.Z.Messages
                  .SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_DESCRIPTION_V2,
              status: T.Z.Messages.SAFETY_HUB_ACCOUNT_STANDING_SUSPENDED_SHORT,
              Icon: o.CircleXIcon,
              color: r.Z.colors.ICON_MUTED,
            },
          },
          { title: f, description: C, color: m, Icon: p } = g[e.state],
          U = Object.keys(g).length;
        return (0, a.jsxs)(o.Card, {
          className: S.container,
          outline: !1,
          children: [
            (0, a.jsx)("div", {
              className: S.profile,
              children: (0, a.jsx)(d.Z, {
                user: t,
                size: o.AvatarSizes.SIZE_80,
              }),
            }),
            (0, a.jsxs)("div", {
              className: S.status,
              children: [
                (0, a.jsxs)("div", {
                  className: S.title,
                  children: [
                    (0, a.jsx)(o.Heading, {
                      color: "header-primary",
                      variant: "heading-lg/normal",
                      children: f.format({
                        hook: (e) =>
                          (0, a.jsx)(o.Text, {
                            style: { color: m.css },
                            variant: "heading-lg/bold",
                            tag: "span",
                            children: e,
                          }),
                      }),
                    }),
                    (0, a.jsx)(o.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      children: C,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: S.health,
                  style: { height: n },
                  children: [
                    (0, a.jsx)("div", { className: S.line }),
                    Object.entries(g).map((t, n) => {
                      let [i, s] = t,
                        l = parseInt(i) === e.state;
                      return (0, a.jsxs)(
                        "div",
                        {
                          className: S.statusOption,
                          ref: (e) => (I.current[parseInt(i)] = e),
                          children: [
                            l
                              ? (0, a.jsx)(p, {
                                  className: S.marker,
                                  color: s.color,
                                })
                              : (0, a.jsx)("div", {
                                  className: S.marker,
                                  style: {
                                    marginLeft: 0 === n ? -6 : 0,
                                    marginRight: n === U - 1 ? -6 : 0,
                                  },
                                  children: (0, a.jsx)("div", {
                                    className: S.empty,
                                  }),
                                }),
                            s.status.format({
                              hook: (e) =>
                                (0, a.jsx)(o.Text, {
                                  color: "text-normal",
                                  variant: "text-sm/normal",
                                  className: S.statusLabel,
                                  children: e,
                                }),
                            }),
                          ],
                        },
                        n,
                      );
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    959562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(200651);
      n(192379);
      var i = n(481060),
        s = n(371497),
        l = n(660097);
      function r(e) {
        let { user: t, size: n } = e,
          r = (0, i.getAvatarSpecs)(n),
          o = null != t ? t.getAvatarURL(null, r.size) : l;
        return (0, a.jsx)("div", {
          className: s.avatarBackground,
          children: (0, a.jsx)("div", {
            className: s.avatar,
            style: { width: r.size, height: r.size },
            children: (0, a.jsx)(i.Avatar, {
              src: o,
              "aria-hidden": !0,
              size: n,
            }),
          }),
        });
      }
    },
    518560: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var a = n(200651),
        i = n(192379),
        s = n(286379),
        l = n(481060),
        r = n(797614),
        o = n(626135),
        c = n(103879),
        _ = n(451284),
        u = n(802429),
        d = n(846488),
        E = n(181211),
        T = n(811085),
        S = n(967254),
        A = n(981631),
        I = n(689938),
        N = n(262714);
      function g() {
        let e = (0, E.Z)(),
          t = (0, d.e)(),
          n = (0, _.P)(),
          g = (0, u.i)();
        return (i.useEffect(() => {
          c.yq();
        }, []),
        i.useEffect(() => {
          t &&
            (o.default.track(A.rMx.SAFETY_HUB_VIEWED, {
              account_standing: n.state,
            }),
            r.Z.increment({ name: s.V.SAFETY_HUB_VIEW }));
        }, [t]),
        e)
          ? (0, a.jsx)("div", { children: (0, a.jsx)(l.Spinner, {}) })
          : null != g
            ? (0, a.jsxs)(l.Notice, {
                color: l.NoticeColors.DANGER,
                className: N.nagbar,
                children: [
                  I.Z.Messages.SAFETY_HUB_ERROR_MESSAGE,
                  (0, a.jsx)(l.NoticeButton, {
                    onClick: () => c.yq(),
                    children: I.Z.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON,
                  }),
                ],
              })
            : (0, a.jsxs)("div", {
                className: N.container,
                children: [(0, a.jsx)(T.Z, {}), (0, a.jsx)(S.N, {})],
              });
      }
    },
    967254: function (e, t, n) {
      n.d(t, {
        N: function () {
          return R;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        s = n(120356),
        l = n.n(s),
        r = n(442837),
        o = n(481060),
        c = n(259580),
        _ = n(499033),
        u = n(626135),
        d = n(709054),
        E = n(219230),
        T = n(531441),
        S = n(236289),
        A = n(788080),
        I = n(467432),
        N = n(451284),
        g = n(613734),
        f = n(800530),
        C = n(981631),
        m = n(689938),
        p = n(388690);
      let U = (e) => {
          let { status: t, onClick: n, opened: i, count: s } = e;
          return (0, a.jsxs)(o.Clickable, {
            className: p.header,
            onClick: n,
            children: [
              (0, a.jsx)("div", {
                className: p.headerIconWrapper,
                children: (0, a.jsx)(o.WarningIcon, {
                  size: "md",
                  color:
                    "active" === t
                      ? o.tokens.colors.INTERACTIVE_ACTIVE
                      : o.tokens.colors.INTERACTIVE_MUTED,
                }),
              }),
              (0, a.jsxs)("div", {
                className: p.title,
                children: [
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-normal",
                    children:
                      "active" === t
                        ? m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format(
                            { count: s.toString() },
                          )
                        : m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format(
                            { count: s.toString() },
                          ),
                  }),
                  (0, a.jsx)(o.Heading, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                      "active" === t
                        ? m.Z.Messages
                            .SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2
                        : m.Z.Messages
                            .SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2,
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: p.caret,
                children: (0, a.jsx)(c.Z, {
                  width: 18,
                  height: 18,
                  direction: i ? c.Z.Directions.UP : c.Z.Directions.DOWN,
                }),
              }),
            ],
          });
        },
        h = () =>
          (0, a.jsxs)("div", {
            className: p.emptyState,
            children: [
              (0, a.jsxs)("div", {
                className: p.iconContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: p.iconBackground,
                    children: (0, a.jsx)(o.TrophyIcon, {
                      size: "md",
                      color: "currentColor",
                      className: p.icon,
                    }),
                  }),
                  (0, a.jsx)(_.Z, { className: p.stars }),
                ],
              }),
              (0, a.jsx)(o.Heading, {
                variant: "heading-md/bold",
                className: p.emptyStateText,
                children:
                  m.Z.Messages
                    .SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE,
              }),
              (0, a.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: p.emptyStateSubtext,
                children:
                  m.Z.Messages
                    .SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE,
              }),
            ],
          }),
        O = () =>
          (0, a.jsx)("div", {
            className: p.emptyState,
            children: (0, a.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: p.emptyStateSubtext,
              children:
                m.Z.Messages
                  .SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED,
            }),
          }),
        x = (e) => {
          let { timestamp: t } = e;
          return (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: p.timestamp,
            children: (0, A.XX)(t),
          });
        },
        v = () =>
          (0, a.jsx)(o.Text, {
            variant: "text-xs/bold",
            className: p.newBadge,
            children: m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW,
          }),
        D = (e) => {
          let { classification: t } = e,
            { id: s, description: r } = t,
            c = d.default.extractTimestamp(s),
            _ = (0, I.e)(t),
            u = (0, E.B)("violations_container"),
            S = i.useMemo(() => {
              var e, n, i;
              let s = {
                description: r,
                descriptionHook: (e) =>
                  (0, a.jsx)(o.Text, {
                    tag: "span",
                    variant: "heading-lg/bold",
                    children: e,
                  }),
              };
              if (!(u && (0, A.FB)(t)))
                return m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format(
                  s,
                );
              return (null == t
                ? void 0
                : null === (e = t.guild_metadata) || void 0 === e
                  ? void 0
                  : e.member_type) === T.wO.OWNER
                ? m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format(
                    {
                      ...s,
                      guildName:
                        null == t
                          ? void 0
                          : null === (n = t.guild_metadata) || void 0 === n
                            ? void 0
                            : n.name,
                    },
                  )
                : m.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format(
                    {
                      guildName:
                        null == t
                          ? void 0
                          : null === (i = t.guild_metadata) || void 0 === i
                            ? void 0
                            : i.name,
                      classification_type: s.description,
                      classificationHook: s.descriptionHook,
                    },
                  );
            }, [t, r, u]);
          return (0, a.jsx)(
            o.Clickable,
            {
              onClick: () => {
                (0, o.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                    n.e("22878"),
                    n.e("25183"),
                    n.e("46097"),
                    n.e("18831"),
                    n.e("92999"),
                  ]).then(n.bind(n, 41164));
                  return (t) =>
                    (0, a.jsx)(e, {
                      classificationId: s,
                      source: f.s.StandingTab,
                      ...t,
                    });
                });
              },
              className: l()(p.itemDetail, { [p.itemDetailNew]: _ }),
              children: (0, a.jsxs)("div", {
                className: p.descriptionContainer,
                children: [
                  _ ? (0, a.jsx)(v, {}) : (0, a.jsx)(x, { timestamp: c }),
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-lg/normal",
                    children: S,
                  }),
                ],
              }),
            },
            s,
          );
        },
        F = (e) => {
          let { status: t, classifications: n } = e,
            [s, l] = i.useState(!1),
            [c, _] = i.useState(3),
            d = (0, N.P)(),
            E = (0, r.e7)([S.Z], () => S.Z.getIsDsaEligible()),
            T = i.useMemo(() => n.slice(0, c), [n, c]);
          i.useEffect(() => {
            s &&
              u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                action: f.n0.ViewViolationsDropdown,
                account_standing: d.state,
                classification_ids: T.map((e) => Number(e.id)),
                source: f.s.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: E,
              });
          }, [s, d.state, T, E]);
          let A = n.length - T.length > 3 ? 3 : n.length - T.length;
          return (0, a.jsxs)("div", {
            className: p.dropdown,
            children: [
              (0, a.jsx)(U, {
                status: t,
                onClick: () => l((e) => !e),
                opened: s,
                count: n.length,
              }),
              s &&
                (0, a.jsxs)("div", {
                  className: p.items,
                  children: [
                    (0, a.jsx)(o.TabBar.Separator, {
                      style: { height: "1px", width: "100%" },
                    }),
                    T.length > 0 &&
                      T.map((e) => (0, a.jsx)(D, { classification: e }, e.id)),
                    T.length < n.length &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(o.TabBar.Separator, {
                            style: { height: "1px", width: "100%" },
                          }),
                          (0, a.jsx)("button", {
                            className: p.paginationButton,
                            onClick: () => _((e) => e + A),
                            children:
                              m.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format(
                                { nextPageSize: A },
                              ),
                          }),
                        ],
                      }),
                    0 === T.length && "active" === t && (0, a.jsx)(h, {}),
                    0 === T.length && "expired" === t && (0, a.jsx)(O, {}),
                  ],
                }),
            ],
          });
        },
        R = () => {
          let e = (0, g.y9)(),
            t = (0, g.KM)();
          return 0 === e.length && 0 === t.length
            ? null
            : (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(F, { status: "active", classifications: e }),
                  (0, a.jsx)(F, { status: "expired", classifications: t }),
                ],
              });
        };
    },
  },
]);
//# sourceMappingURL=48c8067bdaf0741433df.js.map
