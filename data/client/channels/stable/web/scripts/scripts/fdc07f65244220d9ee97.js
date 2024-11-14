"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13441"],
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
        d = t(481060),
        o = t(37234),
        s = t(230711),
        c = t(981631),
        f = t(388032),
        _ = t(243014);
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
              (0, l.jsx)(d.Clickable, {
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
                ((0, o.jN)(c.S9g.USER_SETTINGS),
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
          return o;
        },
      });
      var i = t(442837),
        l = t(846027),
        r = t(314897),
        u = t(131951),
        a = t(981631),
        d = t(65154);
      function o(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          t = (0, i.e7)([r.default], () => r.default.getId()),
          o = (0, i.e7)(
            [u.Z],
            () => u.Z.supports(d.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, e), [t, e]),
          c = null == n || n === t;
        return [
          c && (o || s),
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
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(153867),
        r = t(468026),
        u = t(394059),
        a = t(388032);
      function d(n) {
        let { type: e, onConfirm: t, ...d } = n,
          o =
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
          title: o,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            l.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: s,
          ...d,
        });
      }
    },
    441061: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(475179),
        a = t(358221),
        d = t(388032);
      function o(n) {
        let e = (0, l.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(r.MenuCheckboxItem, {
          id: "no-video-hide",
          label: d.intl.string(d.t.BL8ss7),
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
        d = t(295510),
        o = t(394059),
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
                  (0, i.jsx)(d.Z, {
                    ...n,
                    type: o.K.VIDEO,
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
        d = t(40851),
        o = t(300284),
        s = t(484459),
        c = t(314897),
        f = t(271383),
        _ = t(430824),
        E = t(496675),
        p = t(594174),
        g = t(981631),
        h = t(388032),
        A = t(745974);
      function m(n) {
        let {
            guildId: e,
            userId: m,
            analyticsLocation: M,
            analyticsLocations: I,
            context: Z,
            icon: T,
          } = n,
          v = _.Z.getGuild(e),
          b = c.default.getId(),
          C = (0, r.e7)([p.default], () => p.default.getUser(m)),
          S = (0, r.e7)([f.ZP], () => f.ZP.isGuestOrLurker(e, m), [e, m]);
        (0, r.e7)([E.Z], () => E.Z.getGuildVersion(e), [e]);
        let x = l.useMemo(() => ({ [e]: [m] }), [e, m]);
        (0, a.$)(x);
        let N = Z === g.IlC.POPOUT,
          y = (0, o.Z)({ guild: v, analyticsLocation: M }),
          O = (0, d.Aq)();
        if (null == v || N) return null;
        let P =
            b === m &&
            (E.Z.can(g.Plq.CHANGE_NICKNAME, v) ||
              E.Z.can(g.Plq.MANAGE_NICKNAMES, v)),
          U = b === m,
          D = E.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, m, v);
        if (!(P || D || U) || null == C || S) return null;
        let R = v.hasFeature(g.oNc.HUB)
            ? h.intl.string(h.t["+MWrWl"])
            : h.intl.string(h.t["PKQB/P"]),
          k = U ? R : h.intl.string(h.t.dilOFx);
        return (0, i.jsx)(u.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: A.labelWrapper,
            children: (0, i.jsx)("span", { className: A.label, children: k }),
          }),
          icon: T,
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
                      analyticsLocations: I,
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
        d = t(230711),
        o = t(213459),
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
          I =
            null !== (e = null == h ? void 0 : h.id) && void 0 !== e
              ? e
              : null == g
                ? void 0
                : g.id,
          Z = f.Z.getGuild(A),
          T = (0, r.e7)([_.Z], () =>
            null != Z ? _.Z.can(E.Plq.MANAGE_GUILD, Z) : null,
          ),
          v = (0, o.LD)(A, !0),
          b = (0, o.PL)(!0, !0),
          { isUserApp: C, isGuildApp: S } = l.useMemo(() => {
            var n, e, t, i;
            if (null == I) return { isGuildApp: !1, isUserApp: !1 };
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
                    : e.id) === I
                );
              }),
              isUserApp: r.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === I
                );
              }),
            };
          }, [v, b, I]);
        l.useEffect(() => {
          t(360606);
        }, []);
        let x = l.useCallback(() => {
            if ((null == Z ? void 0 : Z.id) != null)
              s.Z.open(Z.id, E.pNK.INTEGRATIONS),
                a.Z.setSection(E.b4C.APPLICATION, I),
                null == M || M();
          }, [I, null == Z ? void 0 : Z.id, M]),
          N = l.useCallback(() => {
            d.Z.open(E.oAB.AUTHORIZED_APPS);
            let n = "";
            null != h ? (n = h.name) : null != g && (n = g.username),
              "" !== n && c.J.setState({ searchQuery: n }),
              null == M || M();
          }, [h, M, g]);
        if (m === E.IlC.POPOUT) return null;
        let y = [];
        return (
          S &&
            T &&
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
        d = t(100527),
        o = t(367907),
        s = t(314897),
        c = t(626135),
        f = t(981631);
      function _(n, e, t) {
        var i;
        let l = {
          ...e,
          ...(0, o.hH)(null !== (i = e.guild_id) && void 0 !== i ? i : t),
        };
        c.default.track(n, l);
      }
      function E(n) {
        return a.useCallback(
          (e) => {
            !(function (n) {
              let e = { guild_id: n, location: d.Z.MEMBER_SAFETY_PAGE };
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
                location: d.Z.MEMBER_SAFETY_PAGE,
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
                location: d.Z.MEMBER_SAFETY_PAGE,
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
        r = t(53304);
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
          return d;
        },
      }),
        t(47120);
      var i = t(442837),
        l = t(592125),
        r = t(19780),
        u = t(977059),
        a = t(760373);
      function d(n) {
        let { channelId: e, location: t } = n,
          { enabled: d } = (0, u.S)({ location: t });
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
              let d = u.getChannel(n);
              if (null == d || d.isGuildStageVoice()) return !1;
              let o =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != o && o !== a.Eg;
            })(e, d, [r.Z, l.Z]),
          [e, d],
        );
      }
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return Z;
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
          return T;
        },
        yi: function () {
          return I;
        },
      });
      var i = t(512722),
        l = t.n(i),
        r = t(149765),
        u = t(544891),
        a = t(493683);
      t(749210);
      var d = t(911969),
        o = t(367907),
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
          e && (0, o.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
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
            (0, o.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function I(n) {
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
          })
        );
      }
      function Z(n, e, t) {
        let i = n.getGuildId();
        return (
          l()(null != i, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function T(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          Z(e, n.id, !0),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function v(n, e, t) {
        let i = n.getGuildId();
        l()(null != i, "Channel cannot be guildless");
        let u = n.permissionOverwrites[i],
          o = { id: i, type: d.BN.ROLE, allow: f.Hn, deny: f.Hn, ...u };
        t
          ? ((o.allow = r.IH(o.allow, e)), (o.deny = r.Od(o.deny, e)))
          : ((o.allow = r.Od(o.allow, e)), (o.deny = r.IH(o.deny, e))),
          a.Z.updatePermissionOverwrite(n.id, o);
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
        d = t(981631),
        o = t(71080),
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
          case o.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case o.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case o.aC.MEMBER:
          case o.aC.ROLE:
            return e ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case o.aC.EMPTY_STATE:
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
          request_to_speak_state: r.Uu(d.Plq.REQUEST_TO_SPEAK, n)
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
          })
        ).body;
      }
      async function u(n, e, t) {
        return (
          await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function a(n) {
        return i.tn.del(l.ANM.STAGE_INSTANCE(n));
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
        d = t(496675),
        o = t(594174),
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
            (null === (E = o.default.getCurrentUser()) || void 0 === E
              ? void 0
              : E.id) === n.id,
          m = (0, l.e7)(
            [d.Z],
            () =>
              null != t &&
              d.Z.canWithPartialContext(f.Plq.MUTE_MEMBERS, { channelId: t }),
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
        d = t(108843),
        o = t(911969),
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
        I = t(777658),
        Z = t(858488),
        T = t(185457),
        v = t(933409),
        b = t(570870),
        C = t(389052),
        S = t(24311),
        x = t(332576),
        N = t(158508),
        y = t(710631),
        O = t(297047),
        P = t(88966),
        U = t(712301),
        D = t(991307),
        R = t(37258),
        k = t(931617),
        G = t(700994),
        j = t(332031),
        L = t(981631),
        w = t(388032);
      e.default = (0, d.Z)(
        (0, a.Z)(
          function (n) {
            let {
                user: e,
                guildId: t,
                channel: a,
                showMediaItems: d = !1,
                showChatItems: c = !0,
                showChannelCallItems: B = !1,
                showModalItems: V = !0,
                showStageChannelItems: H = !1,
                context: W,
                onSelect: K,
                onHeightUpdate: F,
                viewingChannelId: q,
              } = n,
              Y = {
                page: L.ZY5.GUILD_CHANNEL,
                section: L.jXE.CHAT_USERNAME,
                object: L.qAy.CONTEXT_MENU_ITEM,
              },
              z = (0, R.Z)({ userId: e.id, guildId: t, channelId: a.id }),
              Q = (0, O.Z)(e, t, W),
              X = (0, P.Z)(e.id, W),
              J = (0, j.Z)(e.id),
              $ = (0, S.Z)({ user: e, context: W }),
              nn = (0, T.Z)({
                user: e,
                guildId: t,
                channelId: a.id,
                context: W,
              }),
              ne = (0, Z.Z)({ user: e }),
              nt = (0, G.Z)(e.id),
              ni = (0, D.Z)(e.id),
              nl = (0, p.B)({
                userId: e.id,
                channelId: a.id,
                guildId: a.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              nr = (0, h.Z)({
                guildId: t,
                userId: e.id,
                analyticsLocation: Y,
                context: W,
              }),
              nu = (0, y.Z)({ user: e, guildId: t }),
              na = (0, s.Z)(null, e),
              nd = (0, I.Z)(e),
              no = (0, C.Z)({ user: e }),
              ns = (0, N.Z)({ user: e }),
              nc = (0, v.Z)(e, t, a.id),
              nf = (0, k.Z)(e.id, t),
              n_ = (0, U.Z)(e, t),
              nE = (0, g.Z)({ id: e.id, label: w.intl.string(w.t["/AXYnJ"]) }),
              np = (0, x.Z)(e.id, a.id),
              ng = (0, _.Z)(e.id),
              nh = (0, f.Z)(a.id),
              nA = (0, A.Z)(e),
              nm = (0, m.Z)(e, t, a.id),
              nM = (0, l.e7)([M.Z], () =>
                null != q ? M.Z.getChannel(q) : null,
              ),
              nI = (0, b.Z)({
                commandType: o.yU.USER,
                commandTargetId: e.id,
                channel: null != nM ? nM : a,
                guildId: t,
                onHeightUpdate: F,
                context: W,
              }),
              nZ = (0, E.Z)(e.id),
              nT = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: u.Zy,
              "aria-label": w.intl.string(w.t.liqwPD),
              onSelect: K,
              children: [
                !nT &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [nA, H && nm] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [V && z, c && Q, X, $, V && nn, V && ne, J],
                      }),
                      d && (0, i.jsx)(r.MenuGroup, { children: nt }),
                      (0, i.jsx)(r.MenuGroup, { children: V && na }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          d && ni,
                          d && nl,
                          d && np,
                          V && nr,
                          nI,
                          V && nu,
                          nd,
                          V && ns,
                          V && no,
                          B && nZ,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: nc }),
                      (0, i.jsxs)(r.MenuGroup, { children: [nf, n_] }),
                      B && (0, i.jsxs)(r.MenuGroup, { children: [nh, ng] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: nE }),
              ],
            });
          },
          { object: L.qAy.CONTEXT_MENU },
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
        d = t(481060),
        o = t(10718),
        s = t(667204),
        c = t(826298),
        f = t(276022),
        _ = t(978983),
        E = t(430824),
        p = t(594174),
        g = t(981631),
        h = t(689079),
        A = t(388032),
        m = t(62352);
      e.Z = (n) => {
        let e,
          {
            commandType: t,
            commandTargetId: r,
            channel: M,
            guildId: I,
            onHeightUpdate: Z,
            context: T,
          } = n,
          v = (0, a.e7)([E.Z], () => E.Z.getGuild(null != I ? I : M.guild_id)),
          b = (0, a.e7)([p.default], () => p.default.getUser(r)),
          C = (0, f.Z)({
            user: b,
            guildId: null == v ? void 0 : v.id,
            context: T,
          }),
          {
            commands: S,
            sectionDescriptors: x,
            loading: N,
          } = o.wi({
            channel: M,
            filters: { commandTypes: [t] },
            options: { limit: h.lr },
            allowFetch: !0,
          }),
          { sections: y } = l.useMemo(() => {
            let n = {};
            return (
              x.forEach((e) => {
                n[e.id] = e;
              }),
              { sections: n }
            );
          }, [x]),
          O = l.useRef(N.current);
        l.useEffect(() => {
          N.current !== O.current &&
            ((O.current = N.current), null == Z || Z());
        }, [N, Z]);
        let P = l.useCallback(
          (n) => {
            u()(null != M, "menu item should not show if channel is null");
            let e = y[n.applicationId],
              t = null != e ? (0, c.ky)(e) : void 0;
            return (0, i.jsx)(
              d.MenuItem,
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
          [M, v, r, y],
        );
        if (
          (N.current
            ? (e = (0, i.jsx)(
                d.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((e =
                0 === S.length
                  ? (0, i.jsx)(
                      d.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: A.intl.string(A.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : S.map(P)),
              null != C &&
                (e = (0, i.jsxs)(i.Fragment, {
                  children: [
                    e,
                    (0, i.jsx)(d.MenuSeparator, {}, "separator"),
                    C,
                  ],
                }))),
          !g.TPd.TEXTUAL.has(M.type))
        ) {
          if (null == C) return null;
          e = C;
        }
        return (0, i.jsx)(d.MenuItem, {
          id: "apps",
          label: A.intl.string(A.t.PHjkRE),
          listClassName: m.list,
          children: e,
        });
      };
    },
    243014: function (n, e, t) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    745974: function (n, e, t) {
      n.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    53304: function (n, e, t) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (n, e, t) {
      n.exports = { list: "list_fd4745" };
    },
    201683: function (n, e, t) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (n, e, t) {
      n.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
    179840: function (n, e, t) {
      n.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    822352: function (n, e, t) {
      n.exports = {
        authedApp: "authedApp_f0135d",
        header: "header_f0135d",
        headerText: "headerText_f0135d",
        headerTextContainer: "headerTextContainer_f0135d",
        appAvatar: "appAvatar_f0135d",
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
//# sourceMappingURL=fdc07f65244220d9ee97.js.map
