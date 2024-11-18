"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60673"],
  {
    292824: function (t) {
      t.exports = "/assets/00fe8a6557e204eb9503.svg";
    },
    231239: function (t, e, n) {
      var l = n(990547),
        r = n(283693),
        i = n(570140),
        a = n(573261),
        u = n(981631);
      e.Z = {
        signup: (t, e) =>
          a.Z.post({
            url: u.ANM.HUB_WAITLIST_SIGNUP,
            body: { email: t, school: e },
            trackedActionData: {
              event: l.NetworkActionNames.HUB_WAITLIST_SIGNUP,
              properties: (t) => {
                var e;
                let n = !1,
                  l =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.email_domain;
                return (
                  null != l && (n = -1 !== l.split(".").indexOf("edu")),
                  (0, r.iG)({ is_edu_email: n })
                );
              },
            },
            rejectWithError: !1,
          }),
        sendVerificationEmail: async (t, e, n) =>
          (
            await a.Z.post({
              url: u.ANM.HUB_EMAIL_VERIFY_SEND,
              body: {
                email: t,
                guild_id: n,
                allow_multiple_guilds: e,
                use_verification_code: !0,
              },
              trackedActionData: {
                event: l.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                properties: (t) => {
                  var e;
                  let n =
                    null == t
                      ? void 0
                      : null === (e = t.body) || void 0 === e
                        ? void 0
                        : e.has_matching_guild;
                  return (0, r.iG)({ has_matching_guild: n });
                },
              },
              rejectWithError: !1,
            })
          ).body,
        async verify(t) {
          if (null != t)
            try {
              var e;
              let n = await a.Z.post({
                  url: u.ANM.HUB_EMAIL_VERIFY,
                  body: { token: t },
                  trackedActionData: {
                    event: l.NetworkActionNames.HUB_EMAIL_VERIFY,
                  },
                  rejectWithError: !1,
                }),
                r = null === (e = n.body.guild) || void 0 === e ? void 0 : e.id;
              i.Z.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: r });
            } catch (t) {
              i.Z.dispatch({
                type: "HUB_VERIFY_EMAIL_FAILURE",
                errors: t.body,
              });
            }
        },
        async verifyCode(t, e, n) {
          if (null != t)
            try {
              var r;
              let o = await a.Z.post({
                  url: u.ANM.HUB_EMAIL_VERIFY_CODE,
                  body: { code: t, guild_id: e, email: n },
                  trackedActionData: {
                    event: l.NetworkActionNames.HUB_EMAIL_VERIFY,
                  },
                  rejectWithError: !1,
                }),
                s = null === (r = o.body.guild) || void 0 === r ? void 0 : r.id;
              return (
                i.Z.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: s }),
                o.body
              );
            } catch (t) {
              throw (
                (i.Z.dispatch({
                  type: "HUB_VERIFY_EMAIL_FAILURE",
                  errors: t.body,
                }),
                t)
              );
            }
        },
      };
    },
    588705: function (t, e, n) {
      n.d(e, {
        R: function () {
          return U;
        },
      }),
        n(411104);
      var l = n(200651),
        r = n(192379),
        i = n(442837),
        a = n(481060),
        u = n(388905),
        o = n(686546),
        s = n(925329),
        c = n(372769),
        d = n(726745),
        _ = n(973616),
        E = n(131704),
        p = n(601964),
        f = n(598077),
        N = n(594174),
        I = n(51144),
        A = n(981631),
        m = n(888592),
        T = n(245335),
        g = n(388032),
        S = n(823433);
      let U = () =>
          (0, l.jsxs)(r.Fragment, {
            children: [
              (0, l.jsx)(u.qE, {
                src: null,
                size: a.AvatarSizes.DEPRECATED_SIZE_100,
                className: S.avatar,
              }),
              (0, l.jsx)(u.DK, { children: g.intl.string(g.t["3rE1Pz"]) }),
              (0, l.jsx)(u.Dx, {
                className: S.inviteResolvingGuildName,
                children: g.intl.string(g.t.ZTNur6),
              }),
            ],
          }),
        C = (t) => {
          let { guild: e, user: n, application: r, compact: i } = t;
          if (null != r)
            return (0, l.jsx)(s.Z, {
              className: S.appIcon,
              game: r,
              size: S.appIconSize,
            });
          if (null != n)
            return (0, l.jsx)(u.qE, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: a.AvatarSizes.SIZE_80,
              className: i ? S.compactAvatar : S.avatar,
            });
          if (null != e)
            return (0, l.jsx)(o.ZP, {
              mask: o.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: S.guildIcon,
              children: (0, l.jsx)(u.Vj, {
                guild: e,
                size: u.Vj.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      e.Z = (t) => {
        var e;
        let n,
          r,
          o,
          {
            invite: s,
            disableUser: U = !1,
            error: v,
            flatActivityCount: L = !1,
            isRegister: M = !1,
          } = t,
          { currentUser: h, multiAccounts: O } = (0, i.cj)(
            [d.Z, N.default],
            () => ({
              currentUser: N.default.getCurrentUser(),
              multiAccounts: d.Z.getUsers(),
            }),
          );
        if (null == s) return null;
        let R = null != s.guild ? new p.ZP(s.guild) : null,
          y = null != s.channel ? (0, E.jD)(s.channel) : null,
          Z =
            null != s.target_application ? new _.Z(s.target_application) : null,
          D = U || null == s.inviter ? null : new f.Z(s.inviter),
          w =
            !(
              (null != s.approximate_member_count &&
                s.approximate_member_count > 100) ||
              (null != R && R.hasFeature(A.oNc.COMMUNITY))
            ) && null != D,
          F = null,
          P = !1;
        if (null != R)
          (F =
            null == D
              ? g.intl.string(g.t["3rE1Pz"])
              : g.intl.formatToPlainString(g.t["5u47vb"], {
                  username: I.ZP.getFormattedName(D),
                })),
            s.target_type === T.Iq.STREAM &&
              null != s.target_user &&
              (F = g.intl.formatToPlainString(g.t.x2L32d, {
                username: I.ZP.getFormattedName(s.target_user),
              })),
            s.target_type === T.Iq.EMBEDDED_APPLICATION &&
              null != s.target_application &&
              (F =
                null != D
                  ? g.intl.formatToPlainString(g.t.UW1Cam, {
                      username: I.ZP.getFormattedName(D),
                    })
                  : g.intl.string(g.t.ENSuNz)),
            w &&
              null == Z &&
              (n = (0, l.jsx)(u.Vj, {
                className: S.icon,
                guild: R,
                size: u.Vj.Sizes.SMALL,
              })),
            (r = R.name),
            null != Z &&
              ((r = Z.name),
              (o = (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(u.DK, {
                    className: S.appIn,
                    children: g.intl.string(g.t["3gg9fH"]),
                  }),
                  (0, l.jsxs)("div", {
                    className: S.guildContainer,
                    children: [
                      (0, l.jsx)(u.Vj, { guild: R, size: u.Vj.Sizes.SMALL }),
                      (0, l.jsx)(a.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: S.appGuildName,
                        children: R.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != y) {
          if (null == D) throw Error("no inviter in group DM invite");
          let t = I.ZP.getFormattedName(D);
          null != y.name && "" !== y.name
            ? ((F = g.intl.formatToPlainString(g.t["5u47vb"], { username: t })),
              (r = y.name),
              null != y.icon &&
                (n = (0, l.jsx)(u.MC, {
                  channel: y,
                  size: a.AvatarSizes.SIZE_32,
                })))
            : ((F = g.intl.string(g.t.OsdY8P)), (r = t));
        } else if (null != D) {
          let t = I.ZP.getFormattedName(D, !0);
          (r = g.intl.formatToPlainString(g.t["4aF92d"], { username: t })),
            (P = !0),
            (o =
              null != v
                ? null
                : (0, l.jsx)(u.DK, {
                    className: S.directInviteSubTitle,
                    children: M
                      ? g.intl.format(g.t["6r4JiY"], { username: t })
                      : g.intl.format(g.t.Quj7HR, { username: t }),
                  }));
        }
        return (0, l.jsxs)("div", {
          className: S.container,
          children: [
            (0, l.jsx)(C, {
              application: Z,
              guild: R,
              user: w ? D : null,
              compact: P,
            }),
            null != v
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(u.DK, { children: g.intl.string(g.t.mDFGFh) }),
                    (0, l.jsx)(u.Dx, { children: v }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(u.DK, { children: F }),
                    (0, l.jsxs)(u.Dx, {
                      className: S.title,
                      children: [
                        null != R
                          ? (0, l.jsx)(c.Z, {
                              guild: R,
                              className: S.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        r,
                      ],
                    }),
                  ],
                }),
            o,
            null != Z ||
            P ||
            (null == s
              ? void 0
              : null === (e = s.guild) || void 0 === e
                ? void 0
                : e.id) === m.fQ
              ? null
              : (0, l.jsx)(u.EJ, {
                  className: S.activityCount,
                  online: s.approximate_presence_count,
                  total: s.approximate_member_count,
                  flat: L,
                }),
            O.length > 1 ? (0, l.jsx)(u.jQ, { user: h }) : null,
          ],
        });
      };
    },
    857458: function (t, e, n) {
      n.d(e, {
        M: function () {
          return o;
        },
      });
      var l = n(200651);
      if ((n(192379), 12633 == n.j)) var r = n(512969);
      var i = n(860911),
        a = n(981631),
        u = n(188785);
      function o() {
        let t = location.pathname + location.search;
        return u.a ? a.Z5c.REGISTER : (0, i.Ui)(t, !1);
      }
      e.Z =
        12633 == n.j
          ? function () {
              return (0, l.jsx)(r.l_, { to: o() });
            }
          : null;
    },
    962220: function (t, e, n) {
      var l = n(39612),
        r = n(271579),
        i = n(756647),
        a = n(625128),
        u = n(626135),
        o = n(954824),
        s = n(751189),
        c = n(981631);
      let d = "template";
      e.Z = {
        ...s.Z,
        openNativeAppModal(t) {
          a.Z.openNativeAppModal(t, c.Etm.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(t, e) {
          if (
            null != platform.ua &&
            platform.ua.toLowerCase().indexOf("googlebot") > -1
          )
            return;
          let n = null != t ? (0, l.Oh)(t) : (0, l.Gk)(),
            a = (0, r.WS)(),
            s = (0, r.ZP)(n, { utmSource: d, fingerprint: e, attemptId: a });
          u.default.track(c.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, i.K)(e),
            attempt_id: a,
            source: d,
            guild_template_code: t,
          }),
            o.Z.launch(s, () => {});
        },
      };
    },
    888592: function (t, e, n) {
      var l, r;
      n.d(e, {
        fQ: function () {
          return i;
        },
        tF: function () {
          return l;
        },
      }),
        ((r = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (r.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (r.VERIFY_PIN = "VERIFY_PIN"),
        (r.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (r.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (r.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (r.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (r.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let i = "884924873015689226";
    },
    480387: function (t, e, n) {
      n.d(e, {
        HJ: function () {
          return _;
        },
        Zd: function () {
          return p;
        },
        yD: function () {
          return E;
        },
      });
      var l = n(213919),
        r = n(544891),
        i = n(570140),
        a = n(893776),
        u = n(710845),
        o = n(314897),
        s = n(726745),
        c = n(981631);
      let d = new u.Z("MultiAccountActionCreators");
      function _() {
        let t = o.default.getId();
        s.Z.getUsers().forEach(async (e) => {
          let n,
            { id: a } = e,
            u = l.getToken(a);
          if (null == u || "" === u) {
            i.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: a,
            });
            return;
          }
          i.Z.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: a,
          });
          try {
            n = await r.tn.get({
              url: c.ANM.ME,
              headers: { authorization: u },
              retries: 3,
              rejectWithError: !1,
            });
          } catch (e) {
            let t =
              (null == e ? void 0 : e.status) === 401 ||
              (null == e ? void 0 : e.status) === 403;
            i.Z.dispatch({
              type: t
                ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE"
                : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: a,
            });
            return;
          }
          i.Z.dispatch({
            type: t === a ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body,
          }),
            i.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
              userId: a,
            });
        });
      }
      function E(t, e) {
        d.log("Switching account to ".concat(t), { switchSynchronously: e });
        let n = l.getToken(t);
        return null == n
          ? (d.log("Switching accounts failed because there was no token"),
            i.Z.dispatch({
              type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
              userId: t,
            }),
            Promise.resolve())
          : a.Z.switchAccountToken(n, e);
      }
      function p(t) {
        i.Z.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId: t });
      }
    },
    251423: function (t, e, n) {
      n.d(e, {
        L: function () {
          return o;
        },
      });
      var l = n(192379),
        r = n(442837),
        i = n(570140),
        a = n(480387),
        u = n(726745);
      function o() {
        let t = (0, r.cj)([u.Z], () => ({
          isLoading: u.Z.getIsValidatingUsers(),
          multiAccountUsers: u.Z.getUsers(),
        }));
        return (
          l.useEffect(() => {
            i.Z.wait(() => {
              a.HJ();
            });
          }, []),
          t
        );
      }
    },
    929809: function (t, e, n) {
      n.d(e, {
        H: function () {
          return i;
        },
        c: function () {
          return r;
        },
      });
      var l = n(570140);
      function r(t) {
        l.Z.wait(() => l.Z.dispatch({ type: "NUF_NEW_USER", newUserType: t }));
      }
      function i() {
        l.Z.wait(() => l.Z.dispatch({ type: "NUF_COMPLETE" }));
      }
    },
    701476: function (t, e, n) {
      var l, r;
      n.d(e, {
        M5: function () {
          return l;
        },
      }),
        ((r = l || (l = {}))[(r.MARKETING_UNCLAIMED = 0)] =
          "MARKETING_UNCLAIMED"),
        (r[(r.INVITE_UNCLAIMED = 1)] = "INVITE_UNCLAIMED"),
        (r[(r.ORGANIC_REGISTERED = 2)] = "ORGANIC_REGISTERED"),
        (r[(r.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3)] =
          "ORGANIC_REGISTERED_GUILD_TEMPLATE");
    },
    179645: function (t, e, n) {
      var l,
        r = n(442837),
        i = n(570140);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let u = null;
      class o extends (l = r.ZP.PersistedStore) {
        initialize(t) {
          var e;
          u =
            null !== (e = null == t ? void 0 : t.type) && void 0 !== e
              ? e
              : null;
        }
        getType() {
          return u;
        }
        getState() {
          return { type: u };
        }
      }
      a(o, "displayName", "NewUserStore"),
        a(o, "persistKey", "nuf"),
        (e.Z = new o(i.Z, {
          NUF_NEW_USER: function (t) {
            let { newUserType: e } = t;
            u = e;
          },
          NUF_COMPLETE: function () {
            u = null;
          },
        }));
    },
    541692: function (t, e, n) {
      let l;
      var r,
        i = n(442837),
        a = n(570140),
        u = n(133080);
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let s = (0, u.K4)();
      function c(t) {
        var e;
        let { countryCode: n } = t;
        if (null != n)
          s = null !== (e = (0, u.Zz)(n)) && void 0 !== e ? e : (0, u.K4)();
      }
      class d extends (r = i.ZP.DeviceSettingsStore) {
        initialize(t) {
          if (null != t) l = t.selectedCountryCode;
        }
        getUserAgnosticState() {
          return { selectedCountryCode: l };
        }
        getCountryCode() {
          return null != l ? l : s;
        }
      }
      o(d, "displayName", "PhoneStore"),
        o(d, "persistKey", "PhoneStore"),
        (e.Z = new d(a.Z, {
          PHONE_SET_COUNTRY_CODE: function (t) {
            let { countryCode: e } = t;
            l = e;
          },
          CONNECTION_OPEN: c,
          SET_LOCATION_METADATA: c,
        }));
    },
    630724: function (t, e, n) {
      var l, r, i, a, u, o, s, c, d, _;
      n.d(e, {
        EW: function () {
          return u;
        },
        FF: function () {
          return r;
        },
        MK: function () {
          return l;
        },
        X2: function () {
          return a;
        },
        mx: function () {
          return i;
        },
      }),
        ((o = l || (l = {})).UNKNOWN = "unknown"),
        (o.ANY = "any"),
        (o.INVITE = "invite"),
        (o.ORGANIC = "organic_registration"),
        (o.ORGANIC_MARKETING = "organic_marketing"),
        (o.ORGANIC_GUILD_TEMPLATES = "organic_guild_template"),
        (o.CREATE_GUILD = "create_guild"),
        ((s = r || (r = {})).AGE_GATE = "age_gate"),
        (s.AGE_GATE_UNDERAGE = "age_gate_underage"),
        ((c = i || (i = {})).CLAIM_ACCOUNT = "claim_account"),
        (c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success"),
        ((d = a || (a = {})).GUILD_TEMPLATES = "guild_templates"),
        (d.GUILD_CREATE = "guild_create"),
        (d.CREATION_INTENT = "creation_intent"),
        (d.CHANNEL_PROMPT = "channel_prompt"),
        (d.JOIN_GUILD = "join_guild"),
        (d.SUCCESS = "create_success"),
        ((_ = u || (u = {})).NUF_STARTED = "nuf_started"),
        (_.AGE_GATE = "age_gate"),
        (_.NUF_COMPLETE = "nuf_complete"),
        (_.HUB_CONNECTION = "hub_connection");
    },
    390885: function (t, e, n) {
      var l = n(905837),
        r = n(280836),
        i = n(731965),
        a = n(433517),
        u = n(710845),
        o = n(626135),
        s = n(630724),
        c = n(981631);
      let d = "UserFlowAnalyticsStore_current",
        _ = "UserFlowAnalyticsStore";
      function E(t) {
        if (t === s.MK.UNKNOWN) return null;
        let e = a.K.get("".concat(_, "-").concat(t));
        if (null == e) return null;
        let { version: n, ...l } = e;
        return 1 !== n ? null : l;
      }
      new u.Z("UserFlowAnalytics");
      let p = (0, l.Ue)()(
        (0, r.XR)((t, e) => ({
          flows: {},
          currentFlow: null,
          activeFlow: () => {
            var t;
            let n =
              null !== (t = e().currentFlow) && void 0 !== t ? t : a.K.get(d);
            if (null == n) return null;
            let { [n]: l } = e().flows,
              r = null != l ? l : E(n);
            return (null == r ? void 0 : r.currentStep) != null ? n : null;
          },
        })),
      );
      function f(t, e) {
        let { [t]: n, ...l } = p.getState().flows,
          r = null != n ? n : E(t);
        if ((null == r ? void 0 : r.currentStep) == null || r.currentStep !== e)
          (0, i.j)(() => {
            p.setState({
              flows: {
                ...l,
                [t]: {
                  type: t,
                  lastStep: null,
                  lastTimestamp: null,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  skipped: !1,
                },
              },
              currentFlow: t,
            });
          });
      }
      function N(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = t;
        if (t === s.MK.ANY) {
          var r;
          l =
            null !== (r = p.getState().activeFlow()) && void 0 !== r
              ? r
              : s.MK.UNKNOWN;
        }
        let { [l]: a, ...u } = p.getState().flows,
          o = null != a ? a : E(l);
        if (null != o && null != o.currentStep && o.currentStep !== e)
          (0, i.j)(() => {
            p.setState({
              flows: {
                ...u,
                [l]: {
                  ...o,
                  lastStep: o.currentStep,
                  lastTimestamp: o.currentTimestamp,
                  currentStep: e,
                  currentTimestamp: new Date(),
                  ended: n,
                },
              },
              currentFlow: l,
            });
          });
      }
      p.subscribe(
        (t) => (null != t.currentFlow ? t.flows[t.currentFlow] : void 0),
        (t) => {
          var e;
          if (null != t) {
            if (
              (!(function (t) {
                if (t.type === s.MK.UNKNOWN) return;
                let e = "".concat(_, "-").concat(t.type);
                t.ended
                  ? (a.K.remove(e), a.K.remove(d))
                  : (a.K.set("".concat(_, "-").concat(t.type), {
                      ...t,
                      version: 1,
                    }),
                    a.K.set(d, t.type));
              })(t),
              o.default.track(
                c.rMx.NUO_TRANSITION,
                {
                  flow_type: t.type,
                  from_step: t.lastStep,
                  to_step: t.currentStep,
                  seconds_on_from_step:
                    "function" !=
                    typeof (null === (e = t.lastTimestamp) || void 0 === e
                      ? void 0
                      : e.getTime)
                      ? 0
                      : (t.currentTimestamp.getTime() -
                          t.lastTimestamp.getTime()) /
                        1e3,
                },
                { flush: !0 },
              ),
              t.ended)
            ) {
              let e = { ...p.getState().flows };
              delete e[t.type],
                (0, i.j)(() => {
                  p.setState({ flows: e, currentFlow: null });
                });
            }
          }
        },
      );
      function I() {
        return null != p.getState().activeFlow();
      }
      e.Z = {
        flowStart: f,
        flowStepOrStart: function (t, e) {
          I() ? N(t, e) : f(t, e);
        },
        flowStep: N,
        hasActiveFlow: I,
      };
    },
    3570: function (t, e, n) {
      n.d(e, {
        T: function () {
          return o;
        },
        s: function () {
          return s;
        },
      });
      var l = n(536285),
        r = n(703656),
        i = n(314897),
        a = n(358085),
        u = n(981631);
      let o = a.isPlatformEmbedded
          ? u.dG4
          : (t, e) => {
              if (!(0, r.DB)())
                return l.default.request(u.Etm.DEEP_LINK, {
                  type: t,
                  params: e,
                });
            },
        s = a.isPlatformEmbedded
          ? u.dG4
          : (t, e) => {
              if (!i.default.isAuthenticated())
                return o(t, {
                  ...(e || {}),
                  fingerprint: i.default.getFingerprint(),
                });
            };
    },
  },
]);
//# sourceMappingURL=bc55ff31ff4594036971.js.map
