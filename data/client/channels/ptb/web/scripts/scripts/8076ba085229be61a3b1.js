"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18824"],
  {
    103879: function (t, e, n) {
      n.d(e, {
        NA: function () {
          return u;
        },
        uR: function () {
          return _;
        },
        yq: function () {
          return c;
        },
      });
      var i = n(544891),
        a = n(570140),
        l = n(406432),
        s = n(314897),
        r = n(788080),
        o = n(981631);
      async function c() {
        a.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
        let t = s.default.getSuspendedUserToken(),
          e = null != t ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
          n =
            null != t
              ? i.tn.post({ url: e, body: { token: t } })
              : i.tn.get({ url: e });
        await n
          .then((t) => {
            let { body: e } = t,
              {
                classifications: n,
                guild_classifications: i,
                account_standing: l,
                is_dsa_eligible: s,
                username: r,
                is_appeal_eligible: o,
              } = e,
              c = n.map((t) => (d(t), t));
            a.Z.dispatch({
              type: "SAFETY_HUB_FETCH_SUCCESS",
              classifications: c.concat(null != i ? i : []),
              accountStanding: l,
              isDsaEligible: s,
              username: r,
              isAppealEligible: o,
            });
          })
          .catch((t) => {
            var e, n;
            a.Z.dispatch({
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
      async function u(t) {
        a.Z.dispatch({
          type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
          classificationId: t,
        });
        let e = s.default.getSuspendedUserToken(),
          n = null != e ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
          l =
            null != e
              ? i.tn.post({ url: n, body: { token: e } })
              : i.tn.get({ url: n });
        await l
          .then((e) => {
            let { body: n } = e,
              {
                classifications: i,
                account_standing: l,
                is_dsa_eligible: s,
                username: r,
                is_appeal_eligible: o,
              } = n,
              c = i.find((e) => e.id === t);
            null != c
              ? (d(c),
                a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: c,
                  accountStanding: l,
                  isDsaEligible: s,
                  username: r,
                  isAppealEligible: o,
                }))
              : a.Z.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: t,
                });
          })
          .catch((e) => {
            var n, i;
            a.Z.dispatch({
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
      function d(t) {
        if (null != t.flagged_content && t.flagged_content.length > 0) {
          let e = t.flagged_content[0];
          (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, l.CO)(e) || (0, l.NU)(e);
          })),
            (t.flagged_content = (0, r.Vt)(e) ? [] : [e]);
        }
      }
      async function _(t, e, n) {
        let l = s.default.getSuspendedUserToken(),
          r =
            null != l
              ? o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t)
              : o.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
          c =
            null != l
              ? i.tn.put({
                  url: r,
                  body: { signal: e, user_input: n, token: l },
                })
              : i.tn.put({ url: r, body: { signal: e, user_input: n } });
        a.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
          await c
            .then(() => {
              a.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                classificationId: t,
              });
            })
            .catch((t) => {
              var e, n;
              throw (
                (a.Z.dispatch({
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
    },
    219230: function (t, e, n) {
      n.d(e, {
        B: function () {
          return a;
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
      function a(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    364226: function (t, e, n) {
      n.d(e, {
        A: function () {
          return a;
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
      function a(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    48484: function (t, e, n) {
      n.d(e, {
        V: function () {
          return a;
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
      function a(t) {
        return !!i.useExperiment({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    236289: function (t, e, n) {
      var i,
        a,
        l,
        s,
        r = n(979079),
        o = n.n(r),
        c = n(442837),
        u = n(570140),
        d = n(531441),
        _ = n(800530);
      let E = {},
        S = {},
        g = { state: d.Sn.ALL_GOOD },
        f = !1,
        p = !1,
        m = null,
        T = null,
        h = !1,
        A = !1,
        x = !1,
        I = null,
        v = _.bK.DIDNT_VIOLATE_POLICY,
        N = "",
        C = "";
      class b extends (s = c.ZP.Store) {
        isFetching() {
          return f;
        }
        getClassifications() {
          return Object.values(E);
        }
        getClassification(t) {
          return E[t];
        }
        getAccountStanding() {
          return g;
        }
        getFetchError() {
          return m;
        }
        isInitialized() {
          return p;
        }
        getClassificationRequestState(t) {
          return S[t];
        }
        getAppealClassificationId() {
          return T;
        }
        getIsDsaEligible() {
          return h;
        }
        getIsAppealEligible() {
          return A;
        }
        getAppealSignal() {
          return v;
        }
        getFreeTextAppealReason() {
          return N;
        }
        getIsSubmitting() {
          return x;
        }
        getSubmitError() {
          return I;
        }
        getUsername() {
          return C;
        }
      }
      (l = "SafetyHubStore"),
        (a = "displayName") in (i = b)
          ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = l),
        (e.Z = new b(u.Z, {
          SAFETY_HUB_FETCH_START: function (t) {
            f = !0;
          },
          SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let {
              classifications: e,
              accountStanding: n,
              isDsaEligible: i,
              isAppealEligible: a,
              username: l,
            } = t;
            (E = o()(e, "id")),
              (g = n),
              (h = i),
              (A = a),
              (f = !1),
              (p = !0),
              (m = null),
              (C = l);
          },
          SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (f = !1), (p = !1), (m = e);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (S[t.classificationId] = d.OY.PENDING), (f = !0);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let {
              classification: e,
              accountStanding: n,
              isDsaEligible: i,
              username: a,
              isAppealEligible: l,
            } = t;
            (E[e.id] = e),
              (S[e.id] = d.OY.SUCCESS),
              (g = n),
              (f = !1),
              (m = null),
              (h = i),
              (A = l),
              (p = !0),
              (C = a);
          },
          SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (f = !1), (m = e), (S[n] = d.OY.FAILED), (p = !1);
          },
          SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            T = e;
          },
          SAFETY_HUB_APPEAL_CLOSE: function () {
            (T = null), (v = _.bK.DIDNT_VIOLATE_POLICY), (N = "");
          },
          SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: e } = t;
            v = e;
          },
          SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: e } = t;
            N = e;
          },
          SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (x = !0), (I = null);
          },
          SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: e } = t;
            (x = !1),
              (I = null),
              (E[e].appeal_status = { status: d.hQ.REVIEW_PENDING });
          },
          SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (x = !1), (I = e);
          },
          LOGOUT: function () {
            (f = !1),
              (E = {}),
              (g = { state: d.Sn.ALL_GOOD }),
              (T = null),
              (v = _.bK.DIDNT_VIOLATE_POLICY),
              (N = "");
          },
        }));
    },
    467432: function (t, e, n) {
      n.d(e, {
        e: function () {
          return a;
        },
      });
      var i = n(709054);
      let a = (t) =>
        864e5 >
        Math.abs(i.default.extractTimestamp(t.id) - new Date().getTime());
    },
    451284: function (t, e, n) {
      n.d(e, {
        P: function () {
          return l;
        },
      });
      var i = n(442837),
        a = n(236289);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.getAccountStanding());
      }
    },
    613734: function (t, e, n) {
      n.d(e, {
        KM: function () {
          return f;
        },
        U0: function () {
          return p;
        },
        YG: function () {
          return S;
        },
        y9: function () {
          return g;
        },
      });
      var i = n(192379),
        a = n(442837),
        l = n(709054),
        s = n(103879),
        r = n(364226),
        o = n(48484),
        c = n(531441),
        u = n(236289),
        d = n(788080),
        _ = n(800530);
      function E() {
        return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort(
          (t, e) =>
            l.default.extractTimestamp(e.id) - l.default.extractTimestamp(t.id),
        );
      }
      function S(t) {
        let e;
        let n = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
          l = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
          E = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
          S = (0, a.e7)([u.Z], () => u.Z.getIsAppealEligible()),
          g = (0, r.A)("classification_detail"),
          f = (0, o.V)("classification_detail");
        if ((0, d.FB)(n)) {
          var p;
          e =
            (null === (p = n.guild_metadata) || void 0 === p
              ? void 0
              : p.member_type) === c.wO.OWNER
              ? _.qS.GUILD_OWNER
              : _.qS.GUILD_MEMBER;
        } else e = _.qS.USER;
        return (
          i.useEffect(() => {
            void 0 === n && null == l && s.NA(t);
          }, [t, n, l]),
          {
            classification: n,
            classificationRequestState: l,
            isDsaEligible: E,
            isAppealEligible:
              (f || S) &&
              null != n &&
              null == n.appeal_status &&
              (!(0, d.FB)(n) || g),
            violationType: e,
          }
        );
      }
      function g() {
        let t = E(),
          e = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) > e);
      }
      function f() {
        let t = E(),
          e = new Date();
        return t.filter((t) => new Date(t.max_expiration_time) <= e);
      }
      function p() {
        return (0, a.e7)([u.Z], () => u.Z.getAppealSignal());
      }
    },
    802429: function (t, e, n) {
      n.d(e, {
        i: function () {
          return l;
        },
      });
      var i = n(442837),
        a = n(236289);
      let l = () => (0, i.e7)([a.Z], () => a.Z.getFetchError());
    },
    846488: function (t, e, n) {
      n.d(e, {
        e: function () {
          return l;
        },
      });
      var i = n(442837),
        a = n(236289);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.isInitialized());
      }
    },
    181211: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(442837),
        a = n(236289);
      function l() {
        return (0, i.e7)([a.Z], () => a.Z.isFetching());
      }
    },
    811085: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(392711),
        s = n(442837),
        r = n(692547),
        o = n(481060),
        c = n(594174),
        u = n(531441),
        d = n(451284),
        _ = n(959562),
        E = n(800530),
        S = n(388032),
        g = n(370422);
      function f() {
        let t = (0, d.P)(),
          e = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
          [n, f] = a.useState(36),
          p = a.useRef({
            [u.Sn.ALL_GOOD]: null,
            [u.Sn.LIMITED]: null,
            [u.Sn.VERY_LIMITED]: null,
            [u.Sn.AT_RISK]: null,
            [u.Sn.SUSPENDED]: null,
          }),
          m = a.useCallback(() => {
            f(
              Math.max(
                Math.max(
                  ...Object.values(p.current).map((t) => {
                    var e;
                    return null !==
                      (e =
                        null == t
                          ? void 0
                          : t.getBoundingClientRect().height) && void 0 !== e
                      ? e
                      : 36;
                  }),
                ),
                36,
              ),
            );
          }, []);
        a.useEffect(() => {
          m();
          let t = (0, l.debounce)(m, 100);
          window.addEventListener("resize", t);
        }, [m]);
        let T = {
            [u.Sn.ALL_GOOD]: {
              title: S.t.uaKrRk,
              description: S.intl.format(S.t.pEdBDw, {
                termsOfService: E.sQ.TOS_LINK,
                communityGuidelines: E.sQ.COMMUNITY_GUIDELINES,
              }),
              status: S.t["/Idfam"],
              Icon: o.CircleCheckIcon,
              color: r.Z.colors.STATUS_POSITIVE,
            },
            [u.Sn.LIMITED]: {
              title: S.t.epkcmZ,
              description: S.intl.string(S.t["774jub"]),
              status: S.t.umleq6,
              Icon: o.CircleWarningIcon,
              color: r.Z.colors.STATUS_WARNING,
            },
            [u.Sn.VERY_LIMITED]: {
              title: S.t.crzE2d,
              description: S.intl.string(S.t["T/Ufh4"]),
              status: S.t.WBtMHR,
              Icon: o.CircleWarningIcon,
              color: r.Z.unsafe_rawColors.ORANGE_345,
            },
            [u.Sn.AT_RISK]: {
              title: S.t.XRNVzM,
              description: S.intl.string(S.t["hbH+9f"]),
              status: S.t["7f+4Li"],
              Icon: o.CircleWarningIcon,
              color: r.Z.colors.STATUS_DANGER,
            },
            [u.Sn.SUSPENDED]: {
              title: S.t.MExFk5,
              description: S.intl.string(S.t["2liUvr"]),
              status: S.t["0OONGB"],
              Icon: o.CircleXIcon,
              color: r.Z.colors.ICON_MUTED,
            },
          },
          { title: h, description: A, color: x, Icon: I } = T[t.state],
          v = Object.keys(T).length;
        return (0, i.jsxs)(o.Card, {
          className: g.container,
          outline: !1,
          children: [
            (0, i.jsx)("div", {
              className: g.profile,
              children: (0, i.jsx)(_.Z, {
                user: e,
                size: o.AvatarSizes.SIZE_80,
              }),
            }),
            (0, i.jsxs)("div", {
              className: g.status,
              children: [
                (0, i.jsxs)("div", {
                  className: g.title,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      color: "header-primary",
                      variant: "heading-lg/normal",
                      children: S.intl.format(h, {
                        hook: (t) =>
                          (0, i.jsx)(o.Text, {
                            style: { color: x.css },
                            variant: "heading-lg/bold",
                            tag: "span",
                            children: t,
                          }),
                      }),
                    }),
                    (0, i.jsx)(o.Text, {
                      color: "text-normal",
                      variant: "text-sm/normal",
                      children: A,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: g.health,
                  style: { height: n },
                  children: [
                    (0, i.jsx)("div", { className: g.line }),
                    Object.entries(T).map((e, n) => {
                      let [a, l] = e,
                        s = parseInt(a) === t.state;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: g.statusOption,
                          ref: (t) => (p.current[parseInt(a)] = t),
                          children: [
                            s
                              ? (0, i.jsx)(I, {
                                  className: g.marker,
                                  color: l.color,
                                })
                              : (0, i.jsx)("div", {
                                  className: g.marker,
                                  style: {
                                    marginLeft: 0 === n ? -6 : 0,
                                    marginRight: n === v - 1 ? -6 : 0,
                                  },
                                  children: (0, i.jsx)("div", {
                                    className: g.empty,
                                  }),
                                }),
                            S.intl.format(l.status, {
                              hook: (t) =>
                                (0, i.jsx)(o.Text, {
                                  color: "text-normal",
                                  variant: "text-sm/normal",
                                  className: g.statusLabel,
                                  children: t,
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
    959562: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(38477),
        s = n(660097);
      function r(t) {
        let { user: e, size: n } = t,
          r = (0, a.getAvatarSpecs)(n),
          o = null != e ? e.getAvatarURL(null, r.size) : s;
        return (0, i.jsx)("div", {
          className: l.avatarBackground,
          children: (0, i.jsx)("div", {
            className: l.avatar,
            style: { width: r.size, height: r.size },
            children: (0, i.jsx)(a.Avatar, {
              src: o,
              "aria-hidden": !0,
              size: n,
            }),
          }),
        });
      }
    },
    518560: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return T;
        },
      });
      var i = n(200651),
        a = n(192379),
        l = n(286379),
        s = n(481060),
        r = n(797614),
        o = n(626135),
        c = n(103879),
        u = n(451284),
        d = n(802429),
        _ = n(846488),
        E = n(181211),
        S = n(811085),
        g = n(967254),
        f = n(981631),
        p = n(388032),
        m = n(394686);
      function T() {
        let t = (0, E.Z)(),
          e = (0, _.e)(),
          n = (0, u.P)(),
          T = (0, d.i)();
        return (a.useEffect(() => {
          c.yq();
        }, []),
        a.useEffect(() => {
          e &&
            (o.default.track(f.rMx.SAFETY_HUB_VIEWED, {
              account_standing: n.state,
            }),
            r.Z.increment({ name: l.V.SAFETY_HUB_VIEW }));
        }, [e]),
        t)
          ? (0, i.jsx)("div", { children: (0, i.jsx)(s.Spinner, {}) })
          : null != T
            ? (0, i.jsxs)(s.Notice, {
                color: s.NoticeColors.DANGER,
                className: m.nagbar,
                children: [
                  p.intl.string(p.t.TDRvqq),
                  (0, i.jsx)(s.NoticeButton, {
                    onClick: () => c.yq(),
                    children: p.intl.string(p.t.R1AN4O),
                  }),
                ],
              })
            : (0, i.jsxs)("div", {
                className: m.container,
                children: [(0, i.jsx)(S.Z, {}), (0, i.jsx)(g.N, {})],
              });
      }
    },
    967254: function (t, e, n) {
      n.d(e, {
        N: function () {
          return H;
        },
      }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        s = n.n(l),
        r = n(442837),
        o = n(481060),
        c = n(259580),
        u = n(499033),
        d = n(626135),
        _ = n(709054),
        E = n(219230),
        S = n(531441),
        g = n(236289),
        f = n(788080),
        p = n(467432),
        m = n(451284),
        T = n(613734),
        h = n(800530),
        A = n(981631),
        x = n(388032),
        I = n(15999);
      let v = (t) => {
          let { status: e, onClick: n, opened: a, count: l } = t;
          return (0, i.jsxs)(o.Clickable, {
            className: I.header,
            onClick: n,
            children: [
              (0, i.jsx)("div", {
                className: I.headerIconWrapper,
                children: (0, i.jsx)(o.WarningIcon, {
                  size: "md",
                  color:
                    "active" === e
                      ? o.tokens.colors.INTERACTIVE_ACTIVE
                      : o.tokens.colors.INTERACTIVE_MUTED,
                }),
              }),
              (0, i.jsxs)("div", {
                className: I.title,
                children: [
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-normal",
                    children:
                      "active" === e
                        ? x.intl.formatToPlainString(x.t.IeV2oa, {
                            count: l.toString(),
                          })
                        : x.intl.formatToPlainString(x.t.fZAHBQ, {
                            count: l.toString(),
                          }),
                  }),
                  (0, i.jsx)(o.Heading, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                      "active" === e
                        ? x.intl.string(x.t.XJ2YVV)
                        : x.intl.string(x.t.SzGV0t),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: I.caret,
                children: (0, i.jsx)(c.Z, {
                  width: 18,
                  height: 18,
                  direction: a ? c.Z.Directions.UP : c.Z.Directions.DOWN,
                }),
              }),
            ],
          });
        },
        N = () =>
          (0, i.jsxs)("div", {
            className: I.emptyState,
            children: [
              (0, i.jsxs)("div", {
                className: I.iconContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: I.iconBackground,
                    children: (0, i.jsx)(o.TrophyIcon, {
                      size: "md",
                      color: "currentColor",
                      className: I.icon,
                    }),
                  }),
                  (0, i.jsx)(u.Z, { className: I.stars }),
                ],
              }),
              (0, i.jsx)(o.Heading, {
                variant: "heading-md/bold",
                className: I.emptyStateText,
                children: x.intl.string(x.t.reLFaW),
              }),
              (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: I.emptyStateSubtext,
                children: x.intl.string(x.t.ERdH1t),
              }),
            ],
          }),
        C = () =>
          (0, i.jsx)("div", {
            className: I.emptyState,
            children: (0, i.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: I.emptyStateSubtext,
              children: x.intl.string(x.t.RV3AXV),
            }),
          }),
        b = (t) => {
          let { timestamp: e } = t;
          return (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: I.timestamp,
            children: (0, f.XX)(e),
          });
        },
        U = () =>
          (0, i.jsx)(o.Text, {
            variant: "text-xs/bold",
            className: I.newBadge,
            children: x.intl.string(x.t.QKMRCw),
          }),
        F = (t) => {
          let { classification: e } = t,
            { id: l, description: r } = e,
            c = _.default.extractTimestamp(l),
            u = (0, p.e)(e),
            d = (0, E.B)("violations_container"),
            g = a.useMemo(() => {
              var t, n, a;
              let l = {
                description: r,
                descriptionHook: (t) =>
                  (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "heading-lg/bold",
                    children: t,
                  }),
              };
              if (!(d && (0, f.FB)(e))) return x.intl.format(x.t.QY4g5u, l);
              return (null == e
                ? void 0
                : null === (t = e.guild_metadata) || void 0 === t
                  ? void 0
                  : t.member_type) === S.wO.OWNER
                ? x.intl.format(x.t.Lb0HVl, {
                    ...l,
                    guildName:
                      null == e
                        ? void 0
                        : null === (n = e.guild_metadata) || void 0 === n
                          ? void 0
                          : n.name,
                  })
                : x.intl.format(x.t.rmpEPD, {
                    guildName:
                      null == e
                        ? void 0
                        : null === (a = e.guild_metadata) || void 0 === a
                          ? void 0
                          : a.name,
                    classification_type: l.description,
                    classificationHook: l.descriptionHook,
                  });
            }, [e, r, d]);
          return (0, i.jsx)(
            o.Clickable,
            {
              onClick: () => {
                (0, o.openModalLazy)(async () => {
                  let { default: t } = await Promise.all([
                    n.e("40216"),
                    n.e("25183"),
                    n.e("46097"),
                    n.e("18831"),
                    n.e("75589"),
                  ]).then(n.bind(n, 41164));
                  return (e) =>
                    (0, i.jsx)(t, {
                      classificationId: l,
                      source: h.s.StandingTab,
                      ...e,
                    });
                });
              },
              className: s()(I.itemDetail, { [I.itemDetailNew]: u }),
              children: (0, i.jsxs)("div", {
                className: I.descriptionContainer,
                children: [
                  u ? (0, i.jsx)(U, {}) : (0, i.jsx)(b, { timestamp: c }),
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/normal",
                    children: g,
                  }),
                ],
              }),
            },
            l,
          );
        },
        j = (t) => {
          let { status: e, classifications: n } = t,
            [l, s] = a.useState(!1),
            [c, u] = a.useState(3),
            _ = (0, m.P)(),
            E = (0, r.e7)([g.Z], () => g.Z.getIsDsaEligible()),
            S = a.useMemo(() => n.slice(0, c), [n, c]);
          a.useEffect(() => {
            l &&
              d.default.track(A.rMx.SAFETY_HUB_ACTION, {
                action: h.n0.ViewViolationsDropdown,
                account_standing: _.state,
                classification_ids: S.map((t) => Number(t.id)),
                source: h.s.StandingTab,
                is_violative_content_shown: !1,
                is_dsa_eligible: E,
              });
          }, [l, _.state, S, E]);
          let f = n.length - S.length > 3 ? 3 : n.length - S.length;
          return (0, i.jsxs)("div", {
            className: I.dropdown,
            children: [
              (0, i.jsx)(v, {
                status: e,
                onClick: () => s((t) => !t),
                opened: l,
                count: n.length,
              }),
              l &&
                (0, i.jsxs)("div", {
                  className: I.items,
                  children: [
                    (0, i.jsx)(o.TabBar.Separator, {
                      style: { height: "1px", width: "100%" },
                    }),
                    S.length > 0 &&
                      S.map((t) => (0, i.jsx)(F, { classification: t }, t.id)),
                    S.length < n.length &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(o.TabBar.Separator, {
                            style: { height: "1px", width: "100%" },
                          }),
                          (0, i.jsx)("button", {
                            className: I.paginationButton,
                            onClick: () => u((t) => t + f),
                            children: x.intl.format(x.t["9Ml56O"], {
                              nextPageSize: f,
                            }),
                          }),
                        ],
                      }),
                    0 === S.length && "active" === e && (0, i.jsx)(N, {}),
                    0 === S.length && "expired" === e && (0, i.jsx)(C, {}),
                  ],
                }),
            ],
          });
        },
        H = () => {
          let t = (0, T.y9)(),
            e = (0, T.KM)();
          return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(j, { status: "active", classifications: t }),
                  (0, i.jsx)(j, { status: "expired", classifications: e }),
                ],
              });
        };
    },
  },
]);
//# sourceMappingURL=8076ba085229be61a3b1.js.map
