"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54492"],
  {
    511293: function (n) {
      n.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (n) {
      n.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (n, e, t) {
      t(47120);
      var i,
        l = t(200651),
        r = t(192379),
        u = t(120356),
        a = t.n(u),
        o = t(481060),
        d = t(37234),
        s = t(230711),
        c = t(981631),
        f = t(388032),
        _ = t(261121);
      function E(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      class p extends (i = r.Component) {
        render() {
          return (0, l.jsxs)("div", {
            className: _.streamerModeEnabled,
            children: [
              (0, l.jsx)("div", { className: _.streamerModeEnabledImage }),
              (0, l.jsx)(o.Clickable, {
                className: a()(_.streamerModeEnabledBtn, {
                  [_.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...n) {
          super(...n),
            E(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, d.jN)(c.S9g.USER_SETTINGS),
                s.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      E(p, "defaultProps", { disableButton: !1 }), (e.Z = p);
    },
    394059: function (n, e, t) {
      var i, l;
      t.d(e, {
        K: function () {
          return i;
        },
      }),
        ((l = i || (i = {}))[(l.STREAM = 0)] = "STREAM"),
        (l[(l.VIDEO = 1)] = "VIDEO");
    },
    27584: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(442837),
        l = t(846027),
        r = t(314897),
        u = t(131951),
        a = t(981631),
        o = t(65154);
      function d(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          t = (0, i.e7)([r.default], () => r.default.getId()),
          d = (0, i.e7)(
            [u.Z],
            () => u.Z.supports(o.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, e), [t, e]),
          c = null == n || n === t;
        return [
          c && (d || s),
          s,
          (n) => {
            let i = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(t, i, e);
          },
        ];
      }
    },
    295510: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(153867),
        r = t(468026),
        u = t(394059),
        a = t(388032);
      function o(n) {
        let { type: e, onConfirm: t, ...o } = n,
          d =
            e === u.K.STREAM
              ? a.intl.string(a.t["/lFMWl"])
              : a.intl.string(a.t.xzxhZW),
          s =
            e === u.K.STREAM
              ? a.intl.string(a.t.xaOX7e)
              : a.intl.string(a.t.oU1p9P);
        return (0, i.jsx)(r.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: d,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: s,
          ...o,
        });
      }
    },
    441061: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(475179),
        a = t(358221),
        o = t(388032);
      function d(n) {
        let e = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(r.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.intl.string(o.t.BL8ss7),
          checked: !e,
          action: () => u.Z.toggleVoiceParticipantsHidden(n, !e),
        });
      }
    },
    167675: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(740492),
        a = t(27584),
        o = t(295510),
        d = t(394059),
        s = t(65154),
        c = t(388032);
      function f(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, f, _] = (0, a.Z)(n, e),
          E = (0, l.e7)(
            [u.ZP],
            () => u.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(r.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                if (E || f) return _(!f);
                (0, r.openModal)((n) =>
                  (0, i.jsx)(o.Z, {
                    ...n,
                    type: d.K.VIDEO,
                    onConfirm: () => _(!f),
                  }),
                );
              },
            })
          : null;
      }
    },
    976192: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        u = t(481060),
        a = t(616780),
        o = t(40851),
        d = t(300284),
        s = t(484459),
        c = t(314897),
        f = t(271383),
        _ = t(430824),
        E = t(496675),
        p = t(594174),
        g = t(981631),
        h = t(388032),
        A = t(497523);
      function m(n) {
        let {
            guildId: e,
            userId: m,
            analyticsLocation: M,
            analyticsLocations: Z,
            context: T,
            icon: I,
          } = n,
          v = _.Z.getGuild(e),
          b = c.default.getId(),
          C = (0, r.e7)([p.default], () => p.default.getUser(m)),
          S = (0, r.e7)([f.ZP], () => f.ZP.isGuestOrLurker(e, m), [e, m]);
        (0, r.e7)([E.Z], () => E.Z.getGuildVersion(e), [e]);
        let x = l.useMemo(() => ({ [e]: [m] }), [e, m]);
        (0, a.$)(x);
        let N = T === g.IlC.POPOUT,
          y = (0, d.Z)({ guild: v, analyticsLocation: M }),
          O = (0, o.Aq)();
        if (null == v || N) return null;
        let P =
            b === m &&
            (E.Z.can(g.Plq.CHANGE_NICKNAME, v) ||
              E.Z.can(g.Plq.MANAGE_NICKNAMES, v)),
          U = b === m,
          j = E.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, m, v);
        if (!(P || j || U) || null == C || S) return null;
        let D = v.hasFeature(g.oNc.HUB)
            ? h.intl.string(h.t["+MWrWl"])
            : h.intl.string(h.t["PKQB/P"]),
          G = U ? D : h.intl.string(h.t.dilOFx);
        return (0, i.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: A.labelWrapper,
            children: (0, i.jsx)("span", { className: A.label, children: G }),
          }),
          icon: I,
          action: () => {
            U
              ? ((0, s.Z)(C.id, C.getAvatarURL(e, 80), { guildId: e }),
                y(),
                O.dispatch(g.CkL.POPOUT_CLOSE),
                (0, u.closeAllModals)())
              : (0, u.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, i.jsx)(n, {
                      ...t,
                      guildId: e,
                      user: C,
                      analyticsSource: M,
                      analyticsLocations: Z,
                    });
                });
          },
        });
      }
    },
    276022: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return g;
        },
      }),
        t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        u = t(481060),
        a = t(139387),
        o = t(230711),
        d = t(213459),
        s = t(434404),
        c = t(795594),
        f = t(430824),
        _ = t(496675),
        E = t(981631),
        p = t(388032);
      function g(n) {
        var e;
        let {
            user: g,
            application: h,
            guildId: A,
            context: m,
            onItemClick: M,
          } = n,
          Z =
            null !== (e = null == h ? void 0 : h.id) && void 0 !== e
              ? e
              : null == g
                ? void 0
                : g.id,
          T = f.Z.getGuild(A),
          I = (0, r.e7)([_.Z], () =>
            null != T ? _.Z.can(E.Plq.MANAGE_GUILD, T) : null,
          ),
          v = (0, d.LD)(A, !0),
          b = (0, d.PL)(!0, !0),
          { isUserApp: C, isGuildApp: S } = l.useMemo(() => {
            var n, e, t, i;
            if (null == Z) return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (t =
                    null === (n = v.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              r = Object.values(
                null !==
                  (i =
                    null === (e = b.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: l.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === Z
                );
              }),
              isUserApp: r.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === Z
                );
              }),
            };
          }, [v, b, Z]);
        l.useEffect(() => {
          t(360606);
        }, []);
        let x = l.useCallback(() => {
            if ((null == T ? void 0 : T.id) != null)
              s.Z.open(T.id, E.pNK.INTEGRATIONS),
                a.Z.setSection(E.b4C.APPLICATION, Z),
                null == M || M();
          }, [Z, null == T ? void 0 : T.id, M]),
          N = l.useCallback(() => {
            o.Z.open(E.oAB.AUTHORIZED_APPS);
            let n = "";
            null != h ? (n = h.name) : null != g && (n = g.username),
              "" !== n && c.J.setState({ searchQuery: n }),
              null == M || M();
          }, [h, M, g]);
        if (m === E.IlC.POPOUT) return null;
        let y = [];
        return (
          S &&
            I &&
            y.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-server-integration",
                  label: p.intl.string(p.t.IuSJT0),
                  action: x,
                },
                "manage-server-integration",
              ),
            ),
          C &&
            y.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: p.intl.string(p.t.V8ruv7),
                  action: N,
                },
                "manage-authorized-app",
              ),
            ),
          y
        );
      }
    },
    251794: function (n, e, t) {
      t.d(e, {
        q: function () {
          return u;
        },
        z: function () {
          return r;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060);
      function r(n) {
        let { guildId: e, userId: r, anaylticsLocations: u } = n;
        (0, l.openModalLazy)(async () => {
          let { default: n } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, i.jsx)(n, {
              guildId: e,
              userId: r,
              anaylticsLocations: u,
              ...t,
            });
        });
      }
      function u(n) {
        let { guildId: e, userId: r, anaylticsLocations: u } = n;
        (0, l.openModalLazy)(async () => {
          let { default: n } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, i.jsx)(n, {
              guildId: e,
              userId: r,
              anaylticsLocations: u,
              ...t,
            });
        });
      }
    },
    910693: function (n, e, t) {
      t.d(e, {
        BG: function () {
          return p;
        },
        aY: function () {
          return r;
        },
        dW: function () {
          return g;
        },
        gm: function () {
          return E;
        },
        h1: function () {
          return A;
        },
        jQ: function () {
          return u;
        },
        sE: function () {
          return h;
        },
      });
      var i,
        l,
        r,
        u,
        a = t(192379),
        o = t(100527),
        d = t(367907),
        s = t(314897),
        c = t(626135),
        f = t(981631);
      function _(n, e, t) {
        var i;
        let l = {
          ...e,
          ...(0, d.hH)(null !== (i = e.guild_id) && void 0 !== i ? i : t),
        };
        c.default.track(n, l);
      }
      function E(n) {
        return a.useCallback(
          (e) => {
            !(function (n) {
              let e = { guild_id: n, location: o.Z.MEMBER_SAFETY_PAGE };
              _(f.rMx.MOD_DASH_SEARCH_MEMBERS, e);
            })(n);
          },
          [n],
        );
      }
      function p(n) {
        return a.useCallback(
          (e) => {
            !(function (n, e) {
              let t = {
                selected_role_count: e.size,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              _(f.rMx.MOD_DASH_FILTER_ROLES, t);
            })(n, e);
          },
          [n],
        );
      }
      ((i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined");
      function g(n) {
        return a.useCallback(
          (e) => {
            !(function (n, e) {
              let t = {
                flag_type: e,
                guild_id: n,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              _(f.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(n, e);
          },
          [n],
        );
      }
      function h(n, e) {
        let { location: t, targetUserId: i, targets: l, locations: r } = e;
        return a.useCallback(
          (e) => {
            let u = {
              action_type: e,
              mod_user_id: s.default.getId(),
              guild_id: n,
              location: t,
              locations: r,
              target_user_id: null != i ? i : void 0,
              targets: null != l ? l : void 0,
            };
            _(f.rMx.MODERATION_ACTION, u);
          },
          [n, t, i, l, r],
        );
      }
      function A(n, e) {
        _(f.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: n, location: e });
      }
      ((l = u || (u = {})).BAN = "ban"),
        (l.KICK = "kick"),
        (l.MUTE = "mute"),
        (l.TIMEOUT = "timeout"),
        (l.ADD_ROLE = "add_role"),
        (l.REMOVE_ROLE = "remove_role"),
        (l.COPY_ID = "copy_id"),
        (l.CHANGE_NICKNAME = "change_nickname");
    },
    978983: function (n, e, t) {
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(303511);
      e.Z = () =>
        (0, i.jsx)("div", {
          className: r.loadingWrapper,
          children: (0, i.jsx)(l.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (n, e, t) {
      t.d(e, {
        R: function () {
          return r;
        },
        S: function () {
          return l;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function l(n) {
        let { location: e } = n;
        return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
      }
      function r(n) {
        let { location: e } = n;
        return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, e, t) {
      t.d(e, {
        J: function () {
          return o;
        },
      }),
        t(47120);
      var i = t(442837),
        l = t(592125),
        r = t(19780),
        u = t(977059),
        a = t(760373);
      function o(n) {
        let { channelId: e, location: t } = n,
          { enabled: o } = (0, u.S)({ location: t });
        return (0, i.e7)(
          [r.Z, l.Z],
          () =>
            (function (n, e) {
              var t;
              let [i, u] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [r.Z, l.Z];
              if (!e || null == n || i.getChannelId() !== n) return !1;
              let o = u.getChannel(n);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != d && d !== a.Eg;
            })(e, o, [r.Z, l.Z]),
          [e, o],
        );
      }
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return T;
        },
        Ef: function () {
          return C;
        },
        HO: function () {
          return b;
        },
        NZ: function () {
          return S;
        },
        Pq: function () {
          return v;
        },
        Q1: function () {
          return A;
        },
        RK: function () {
          return M;
        },
        _0: function () {
          return m;
        },
        hz: function () {
          return I;
        },
        yi: function () {
          return Z;
        },
      });
      var i = t(512722),
        l = t.n(i),
        r = t(149765),
        u = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        d = t(367907),
        s = t(944486),
        c = t(979651),
        f = t(700785),
        _ = t(922482),
        E = t(192079),
        p = t(706058),
        g = t(590415),
        h = t(981631);
      function A(n, e) {
        let t = n.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          e && (0, d.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function m(n, e) {
        let t = n.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function M(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        l()(null != i, "This channel cannot be guildless.");
        let r = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, g.gf)(r) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, d.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function Z(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          l()(null != e, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(n, e, t) {
        let i = n.getGuildId();
        return (
          l()(null != i, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function I(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          T(e, n.id, !0),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function v(n, e, t) {
        let i = n.getGuildId();
        l()(null != i, "Channel cannot be guildless");
        let u = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...u };
        t
          ? ((d.allow = r.IH(d.allow, e)), (d.deny = r.Od(d.deny, e)))
          : ((d.allow = r.Od(d.allow, e)), (d.deny = r.IH(d.deny, e))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function b(n, e, t, i) {
        if ("" === e) return;
        s.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let l = await (0, p.me)(n.id, e, t, i);
        return M(n, !1, !0), l;
      }
      async function C(n, e, t) {
        if ("" !== e) return await (0, p.Dk)(n.id, e, t);
      }
      async function S(n) {
        await (0, p.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return c;
        },
        kk: function () {
          return f;
        },
        s$: function () {
          return _;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        l = t(5192),
        r = t(700785),
        u = t(427679),
        a = t(157925),
        o = t(981631),
        d = t(71080),
        s = t(388032);
      function c(n, e, t, i) {
        let r = e[0],
          u = l.ZP.getName(n, t, r),
          a = null != i ? i : e.length;
        return 1 === a && null != r
          ? u
          : null == r
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: a })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: u, count: a - 1 });
      }
      function f(n, e) {
        switch (n) {
          case d.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return e ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(n) {
        let e = u.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return u;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return r;
        },
      });
      var i = t(544891),
        l = t(981631);
      async function r(n, e, t, r, u) {
        return (
          await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: u,
              send_start_notification: r,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function u(n, e, t) {
        return (
          await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function a(n) {
        return i.tn.del({ url: l.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    623633: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(442837),
        l = t(592125),
        r = t(944486);
      function u() {
        return (0, i.e7)([r.Z, l.Z], () => {
          let n = r.Z.getVoiceChannelId();
          if (null != n) {
            let e = l.Z.getChannel(n);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
          }
          return null;
        });
      }
    },
    286694: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return E;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(592125),
        a = t(430824),
        o = t(496675),
        d = t(594174),
        s = t(471253),
        c = t(88751),
        f = t(981631),
        _ = t(388032);
      function E(n, e, t) {
        var E;
        let p = u.Z.getChannel(t),
          g = (0, l.e7)([a.Z], () => a.Z.getGuild(e), [e]),
          h = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(n.id, t), [
            t,
            n.id,
          ]),
          A =
            (null === (E = d.default.getCurrentUser()) || void 0 === E
              ? void 0
              : E.id) === n.id,
          m = (0, l.e7)(
            [o.Z],
            () =>
              null != t &&
              o.Z.canWithPartialContext(f.Plq.MUTE_MEMBERS, { channelId: t }),
            [t],
          );
        return null != p && null != g && (m || A) && h.speaker
          ? (0, i.jsx)(r.MenuItem, {
              id: "audience",
              label: A
                ? _.intl.string(_.t["6C6PJy"])
                : _.intl.string(_.t.VK3vQ0),
              action: () => {
                A ? (0, s.yi)(p) : (0, s.hz)(n, p);
              },
            })
          : null;
      }
    },
    757387: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(239091),
        a = t(883385),
        o = t(108843),
        d = t(911969),
        s = t(947440),
        c = t(100527),
        f = t(441061),
        _ = t(167675),
        E = t(737013),
        p = t(607783),
        g = t(299206),
        h = t(976192),
        A = t(819403),
        m = t(286694),
        M = t(592125),
        Z = t(944486),
        T = t(777658),
        I = t(858488),
        v = t(185457),
        b = t(933409),
        C = t(570870),
        S = t(389052),
        x = t(24311),
        N = t(332576),
        y = t(158508),
        O = t(710631),
        P = t(297047),
        U = t(88966),
        j = t(712301),
        D = t(558924),
        G = t(991307),
        R = t(37258),
        k = t(931617),
        L = t(700994),
        w = t(332031),
        B = t(981631),
        V = t(388032);
      e.default = (0, o.Z)(
        (0, a.Z)(
          function (n) {
            let {
                user: e,
                guildId: t,
                channel: a,
                showMediaItems: o = !1,
                showChatItems: c = !0,
                showChannelCallItems: W = !1,
                showModalItems: H = !0,
                showStageChannelItems: K = !1,
                context: F,
                onSelect: q,
                onHeightUpdate: Y,
                viewingChannelId: z,
              } = n,
              Q = a.id,
              X = {
                page: B.ZY5.GUILD_CHANNEL,
                section: B.jXE.CHAT_USERNAME,
                object: B.qAy.CONTEXT_MENU_ITEM,
              },
              J = (0, R.Z)({
                userId: e.id,
                guildId: t,
                channelId: Q,
                showGuildProfile: !0,
              }),
              $ = (0, P.Z)(e, t, F),
              nn = (0, U.Z)(e.id, F),
              ne = (0, w.Z)(e.id),
              nt = (0, x.Z)({ user: e, context: F }),
              ni = (0, v.Z)({ user: e, guildId: t, channelId: Q, context: F }),
              nl = (0, I.Z)({ user: e }),
              nr = (0, L.Z)(e.id),
              nu = (0, G.Z)(e.id),
              na = (0, p.B)({
                userId: e.id,
                channelId: Q,
                guildId: a.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              no = (0, h.Z)({
                guildId: t,
                userId: e.id,
                analyticsLocation: X,
                context: F,
              }),
              nd = (0, O.Z)({ user: e, guildId: t }),
              ns = (0, s.Z)(null, e),
              nc = (0, T.Z)(e),
              nf = (0, S.Z)({
                user: e,
                guildId: t,
                channelId: Q,
                location: "GuildChannelUserContextMenu",
              }),
              n_ = (0, y.Z)({
                user: e,
                guildId: t,
                channelId: Q,
                location: "GuildChannelUserContextMenu",
              }),
              nE = (0, b.Z)(e, t, Q),
              np = (0, k.Z)(e.id, t),
              ng = (0, j.Z)(e, t),
              nh = (0, g.Z)({ id: e.id, label: V.intl.string(V.t["/AXYnJ"]) }),
              nA = (0, N.Z)(e.id, Q),
              nm = (0, _.Z)(e.id),
              nM = (0, f.Z)(Q),
              nZ = (0, A.Z)(e),
              nT = (0, m.Z)(e, t, Q),
              nI = (0, l.e7)([M.Z], () =>
                null != z ? M.Z.getChannel(z) : null,
              ),
              nv = (0, C.Z)({
                commandType: d.yU.USER,
                commandTargetId: e.id,
                channel: null != nI ? nI : a,
                guildId: t,
                onHeightUpdate: Y,
                context: F,
              }),
              nb = (0, E.Z)(e.id),
              nC = (0, l.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
              nS = (0, D.Z)(e, nC),
              nx = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: u.Zy,
              "aria-label": V.intl.string(V.t.liqwPD),
              onSelect: q,
              children: [
                !nx &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [nZ, K && nT] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          H && J,
                          c && $,
                          nn,
                          nt,
                          nS,
                          H && ni,
                          H && nl,
                          ne,
                        ],
                      }),
                      o && (0, i.jsx)(r.MenuGroup, { children: nr }),
                      (0, i.jsx)(r.MenuGroup, { children: H && ns }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          o && nu,
                          o && na,
                          o && nA,
                          H && no,
                          nv,
                          H && nd,
                          nc,
                          H && n_,
                          H && nf,
                          W && nb,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: nE }),
                      (0, i.jsxs)(r.MenuGroup, { children: [np, ng] }),
                      W && (0, i.jsxs)(r.MenuGroup, { children: [nM, nm] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: nh }),
              ],
            });
          },
          { object: B.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    570870: function (n, e, t) {
      var i = t(200651),
        l = t(192379),
        r = t(512722),
        u = t.n(r),
        a = t(442837),
        o = t(481060),
        d = t(10718),
        s = t(667204),
        c = t(826298),
        f = t(276022),
        _ = t(978983),
        E = t(430824),
        p = t(594174),
        g = t(981631),
        h = t(689079),
        A = t(388032),
        m = t(148562);
      e.Z = (n) => {
        let e,
          {
            commandType: t,
            commandTargetId: r,
            channel: M,
            guildId: Z,
            onHeightUpdate: T,
            context: I,
          } = n,
          v = (0, a.e7)([E.Z], () => E.Z.getGuild(null != Z ? Z : M.guild_id)),
          b = (0, a.e7)([p.default], () => p.default.getUser(r)),
          C = (0, f.Z)({
            user: b,
            guildId: null == v ? void 0 : v.id,
            context: I,
          }),
          S = l.useMemo(() => ({ channel: M, type: "channel" }), [M]),
          {
            commands: x,
            sectionDescriptors: N,
            loading: y,
          } = d.wi({
            context: S,
            filters: { commandTypes: [t] },
            options: { limit: h.lr },
            allowFetch: !0,
          }),
          { sections: O } = l.useMemo(() => {
            let n = {};
            return (
              N.forEach((e) => {
                n[e.id] = e;
              }),
              { sections: n }
            );
          }, [N]),
          P = l.useRef(y.current);
        l.useEffect(() => {
          y.current !== P.current &&
            ((P.current = y.current), null == T || T());
        }, [y, T]);
        let U = l.useCallback(
          (n) => {
            u()(null != M, "menu item should not show if channel is null");
            let e = O[n.applicationId],
              t = null != e ? (0, c.ky)(e) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: n.id,
                label: n.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: M,
                        section: e,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: n,
                    optionValues: {},
                    context: { channel: M, guild: v },
                    commandTargetId: r,
                  });
                },
              },
              n.id,
            );
          },
          [M, v, r, O],
        );
        if (
          (y.current
            ? (e = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((e =
                0 === x.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: A.intl.string(A.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : x.map(U)),
              null != C &&
                C.length > 0 &&
                (e = (0, i.jsxs)(i.Fragment, {
                  children: [
                    e,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    C,
                  ],
                }))),
          !g.TPd.TEXTUAL.has(M.type))
        ) {
          if (null == C) return null;
          e = C;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: A.intl.string(A.t.PHjkRE),
          listClassName: m.list,
          children: e,
        });
      };
    },
    261121: function (n, e, t) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    497523: function (n, e, t) {
      n.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    303511: function (n, e, t) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    148562: function (n, e, t) {
      n.exports = { list: "list_fd4745" };
    },
    705197: function (n, e, t) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    849324: function (n, e, t) {
      n.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
    312403: function (n, e, t) {
      n.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    728513: function (n, e, t) {
      n.exports = {
        authedApp: "authedApp_f0135d",
        header: "header_f0135d",
        headerText: "headerText_f0135d",
        headerTextContainer: "headerTextContainer_f0135d",
        appAvatar: "appAvatar_f0135d",
        reportButton: "reportButton_f0135d",
        permission: "permission_f0135d",
        permissionCheckmark: "permissionCheckmark_f0135d",
        disclosureIcon: "disclosureIcon_f0135d",
        infoBox: "infoBox_f0135d",
        twoWayWarning: "twoWayWarning_f0135d",
        twoWayWarningIcon: "twoWayWarningIcon_f0135d",
        searchContainer: "searchContainer_f0135d",
        tosPrivacy: "tosPrivacy_f0135d",
        tos: "tos_f0135d",
        privacy: "privacy_f0135d",
        externalLinkIcon: "externalLinkIcon_f0135d",
        divider: "divider_f0135d",
        link: "link_f0135d",
      };
    },
  },
]);
//# sourceMappingURL=00fb641c5e9779987803.js.map
