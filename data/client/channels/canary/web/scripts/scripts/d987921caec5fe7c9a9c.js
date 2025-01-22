"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62507"],
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
        r = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        d = t(481060),
        u = t(37234),
        s = t(230711),
        c = t(981631),
        f = t(388032),
        p = t(261121);
      function m(n, e, t) {
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
      class h extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: p.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: p.streamerModeEnabledImage }),
              (0, r.jsx)(d.Clickable, {
                className: o()(p.streamerModeEnabledBtn, {
                  [p.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...n) {
          super(...n),
            m(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, u.jN)(c.S9g.USER_SETTINGS),
                s.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      m(h, "defaultProps", { disableButton: !1 }), (e.Z = h);
    },
    394059: function (n, e, t) {
      var i, r;
      t.d(e, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    985588: function (n, e, t) {
      t.d(e, {
        s: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(314897),
        l = t(699516);
      function a(n) {
        return (0, i.e7)([l.Z, r.default], () => {
          let e = l.Z.isFriend(n.id),
            t = r.default.getId() === n.id;
          return e && !t && !n.bot && !n.system && !n.isProvisional;
        });
      }
    },
    27584: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(442837),
        r = t(846027),
        l = t(314897),
        a = t(131951),
        o = t(981631),
        d = t(65154);
      function u(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          t = (0, i.e7)([l.default], () => l.default.getId()),
          u = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(d.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, e), [t, e]),
          c = null == n || n === t;
        return [
          c && (u || s),
          s,
          (n) => {
            let i = n ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, e);
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
      var r = t(153867),
        l = t(468026),
        a = t(394059),
        o = t(388032);
      function d(n) {
        let { type: e, onConfirm: t, ...d } = n,
          u =
            e === a.K.STREAM
              ? o.intl.string(o.t["/lFMWl"])
              : o.intl.string(o.t.xzxhZW),
          s =
            e === a.K.STREAM
              ? o.intl.string(o.t.xaOX7e)
              : o.intl.string(o.t.oU1p9P);
        return (0, i.jsx)(l.default, {
          confirmText: o.intl.string(o.t["cY+Ooa"]),
          secondaryConfirmText: o.intl.string(o.t["JdIQ/f"]),
          title: u,
          cancelText: o.intl.string(o.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
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
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(475179),
        o = t(358221),
        d = t(388032);
      function u(n) {
        let e = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: d.intl.string(d.t.BL8ss7),
          checked: !e,
          action: () => a.Z.toggleVoiceParticipantsHidden(n, !e),
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
      var r = t(442837),
        l = t(481060),
        a = t(740492),
        o = t(27584),
        d = t(295510),
        u = t(394059),
        s = t(65154),
        c = t(388032);
      function f(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, f, p] = (0, o.Z)(n, e),
          m = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                if (m || f) return p(!f);
                (0, l.openModal)((n) =>
                  (0, i.jsx)(d.Z, {
                    ...n,
                    type: u.K.VIDEO,
                    onConfirm: () => p(!f),
                  }),
                );
              },
            })
          : null;
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
        r = t(192379),
        l = t(442837),
        a = t(481060),
        o = t(139387),
        d = t(230711),
        u = t(213459),
        s = t(434404),
        c = t(795594),
        f = t(430824),
        p = t(496675),
        m = t(981631),
        h = t(388032);
      function g(n) {
        var e;
        let {
            user: g,
            application: _,
            guildId: v,
            context: E,
            onItemClick: Z,
          } = n,
          x =
            null !== (e = null == _ ? void 0 : _.id) && void 0 !== e
              ? e
              : null == g
                ? void 0
                : g.id,
          I = f.Z.getGuild(v),
          T = (0, l.e7)([p.Z], () =>
            null != I ? p.Z.can(m.Plq.MANAGE_GUILD, I) : null,
          ),
          b = (0, u.LD)(v, !0),
          M = (0, u.PL)(!0, !0),
          { isUserApp: A, isGuildApp: C } = r.useMemo(() => {
            var n, e, t, i;
            if (null == x) return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (t =
                    null === (n = b.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              l = Object.values(
                null !==
                  (i =
                    null === (e = M.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: r.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === x
                );
              }),
              isUserApp: l.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === x
                );
              }),
            };
          }, [b, M, x]);
        r.useEffect(() => {
          t(360606);
        }, []);
        let S = r.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              s.Z.open(I.id, m.pNK.INTEGRATIONS),
                o.Z.setSection(m.b4C.APPLICATION, x),
                null == Z || Z();
          }, [x, null == I ? void 0 : I.id, Z]),
          j = r.useCallback(() => {
            d.Z.open(m.oAB.AUTHORIZED_APPS);
            let n = "";
            null != _ ? (n = _.name) : null != g && (n = g.username),
              "" !== n && c.J.setState({ searchQuery: n }),
              null == Z || Z();
          }, [_, Z, g]);
        if (E === m.IlC.POPOUT) return null;
        let y = [];
        return (
          C &&
            T &&
            y.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-server-integration",
                  label: h.intl.string(h.t.IuSJT0),
                  action: S,
                },
                "manage-server-integration",
              ),
            ),
          A &&
            y.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: h.intl.string(h.t.V8ruv7),
                  action: j,
                },
                "manage-authorized-app",
              ),
            ),
          y
        );
      }
    },
    978983: function (n, e, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(303511);
      e.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (n, e, t) {
      t.d(e, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(n) {
        let { location: e } = n;
        return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
      }
      function l(n) {
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
        r = t(592125),
        l = t(19780),
        a = t(977059),
        o = t(760373);
      function d(n) {
        let { channelId: e, location: t } = n,
          { enabled: d } = (0, a.S)({ location: t });
        return (0, i.e7)(
          [l.Z, r.Z],
          () =>
            (function (n, e) {
              var t;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [l.Z, r.Z];
              if (!e || null == n || i.getChannelId() !== n) return !1;
              let d = a.getChannel(n);
              if (null == d || d.isGuildStageVoice()) return !1;
              let u =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != u && u !== o.Eg;
            })(e, d, [l.Z, r.Z]),
          [e, d],
        );
      }
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return I;
        },
        Ef: function () {
          return A;
        },
        HO: function () {
          return M;
        },
        NZ: function () {
          return C;
        },
        Pq: function () {
          return b;
        },
        Q1: function () {
          return v;
        },
        RK: function () {
          return Z;
        },
        _0: function () {
          return E;
        },
        hz: function () {
          return T;
        },
        yi: function () {
          return x;
        },
      });
      var i = t(512722),
        r = t.n(i),
        l = t(149765),
        a = t(544891),
        o = t(493683);
      t(749210);
      var d = t(911969),
        u = t(367907),
        s = t(944486),
        c = t(979651),
        f = t(700785),
        p = t(922482),
        m = t(192079),
        h = t(706058),
        g = t(590415),
        _ = t(981631);
      function v(n, e) {
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          e && (0, u.yw)(_.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, m.s$)(n) }),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function E(n, e) {
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function Z(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, g.gf)(l) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, u.yw)(_.rMx.PROMOTED_TO_SPEAKER, { ...(0, m.s$)(n) }),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(i),
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
      function x(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(e),
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
      function I(n, e, t) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function T(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          I(e, n.id, !0),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, n.id),
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
      function b(n, e, t) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          u = { id: i, type: d.BN.ROLE, allow: f.Hn, deny: f.Hn, ...a };
        t
          ? ((u.allow = l.IH(u.allow, e)), (u.deny = l.Od(u.deny, e)))
          : ((u.allow = l.Od(u.allow, e)), (u.deny = l.IH(u.deny, e))),
          o.Z.updatePermissionOverwrite(n.id, u);
      }
      async function M(n, e, t, i) {
        if ("" === e) return;
        s.Z.getVoiceChannelId() !== n.id && (0, p.TM)(n);
        let r = await (0, h.me)(n.id, e, t, i);
        return Z(n, !1, !0), r;
      }
      async function A(n, e, t) {
        if ("" !== e) return await (0, h.Dk)(n.id, e, t);
      }
      async function C(n) {
        await (0, h.Ix)(n.id);
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
          return p;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        r = t(5192),
        l = t(700785),
        a = t(427679),
        o = t(157925),
        d = t(981631),
        u = t(71080),
        s = t(388032);
      function c(n, e, t, i) {
        let l = e[0],
          a = r.ZP.getName(n, t, l),
          o = null != i ? i : e.length;
        return 1 === o && null != l
          ? a
          : null == l
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: o })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: a, count: o - 1 });
      }
      function f(n, e) {
        switch (n) {
          case u.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case u.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case u.aC.MEMBER:
          case u.aC.ROLE:
            return e ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case u.aC.EMPTY_STATE:
        }
        return null;
      }
      function p(n) {
        let e = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(d.Plq.REQUEST_TO_SPEAK, n)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return o;
        },
        me: function () {
          return l;
        },
      });
      var i = t(544891),
        r = t(981631);
      async function l(n, e, t, l, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: l,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function a(n, e, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function o(n) {
        return i.tn.del({ url: r.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    623633: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(592125),
        l = t(944486);
      function a() {
        return (0, i.e7)([l.Z, r.Z], () => {
          let n = l.Z.getVoiceChannelId();
          if (null != n) {
            let e = r.Z.getChannel(n);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
          }
          return null;
        });
      }
    },
    354589: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(239091),
        a = t(883385),
        o = t(108843),
        d = t(911969),
        u = t(947440),
        s = t(100527),
        c = t(441061),
        f = t(167675),
        p = t(737013),
        m = t(607783),
        h = t(299206),
        g = t(819403),
        _ = t(777658),
        v = t(858488),
        E = t(185457),
        Z = t(570870),
        x = t(389052),
        I = t(24311),
        T = t(915193),
        b = t(332576),
        M = t(158508),
        A = t(710631),
        C = t(297047),
        S = t(88966),
        j = t(397616),
        y = t(558924),
        N = t(991307),
        O = t(37258),
        P = t(700994),
        w = t(332031),
        k = t(981631),
        U = t(388032);
      e.default = (0, o.Z)(
        (0, a.Z)(
          function (n) {
            var e;
            let {
                user: t,
                channel: a,
                context: o,
                showChatItems: s = !0,
                showMediaItems: k = !1,
                showChannelCallItems: D = !1,
                showModalItems: R = !0,
                onSelect: G,
                onHeightUpdate: W,
              } = n,
              B = (0, O.Z)({ userId: t.id, guildId: null }),
              V = (0, C.Z)(t, null, o),
              L = (0, y.Z)(t, a.id),
              H = (0, S.Z)(t.id, o),
              K = (0, I.Z)({ user: t, context: o }),
              z = (0, E.Z)({ user: t, channelId: a.id, context: o }),
              q = (0, v.Z)({ user: t }),
              F = (0, P.Z)(t.id),
              Y = (0, j.Z)(t.id, a.id),
              J = (0, N.Z)(t.id),
              Q = (0, m.B)({
                userId: t.id,
                channelId: a.id,
                guildId: a.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              X = (0, b.Z)(t.id, a.id),
              $ = (0, A.Z)({ user: t }),
              nn = (0, u.Z)(null, t),
              ne = (0, _.Z)(t),
              nt = (0, x.Z)({ user: t, location: "GroupDMUserContextMenu" }),
              ni = (0, M.Z)({ user: t, location: "GroupDMUserContextMenu" }),
              nr = (0, h.Z)({ id: t.id, label: U.intl.string(U.t["/AXYnJ"]) }),
              nl = (0, w.Z)(t.id),
              na = (0, f.Z)(t.id),
              no = (0, c.Z)(a.id),
              nd = (0, g.Z)(t),
              nu = (0, p.Z)(t.id),
              ns = (0, Z.Z)({
                commandType: d.yU.USER,
                commandTargetId: t.id,
                channel: a,
                guildId: void 0,
                onHeightUpdate: W,
              }),
              nc = (0, T.Z)(t, a),
              nf = t.isNonUserBot(),
              np = a.isManaged(),
              nm =
                null === (e = a.recipients) || void 0 === e
                  ? void 0
                  : e.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": U.intl.string(U.t.liqwPD),
              onSelect: G,
              children: [
                !nf &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: nd }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          R && B,
                          s && V,
                          H,
                          K,
                          !np && L,
                          R && z,
                          R && q,
                          nl,
                        ],
                      }),
                      k && (0, i.jsx)(r.MenuGroup, { children: F }),
                      nm &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!np && Y, nc] }),
                      (0, i.jsx)(r.MenuGroup, { children: R && nn }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          k && J,
                          k && Q,
                          k && X,
                          ns,
                          R && $,
                          ne,
                          R && ni,
                          R && nt,
                          k && nu,
                        ],
                      }),
                      D && (0, i.jsxs)(r.MenuGroup, { children: [no, na] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: nr }),
              ],
            });
          },
          { object: k.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (n, e, t) {
      var i = t(200651),
        r = t(192379),
        l = t(512722),
        a = t.n(l),
        o = t(442837),
        d = t(481060),
        u = t(10718),
        s = t(667204),
        c = t(826298),
        f = t(276022),
        p = t(978983),
        m = t(430824),
        h = t(594174),
        g = t(981631),
        _ = t(689079),
        v = t(388032),
        E = t(148562);
      e.Z = (n) => {
        let e,
          {
            commandType: t,
            commandTargetId: l,
            channel: Z,
            guildId: x,
            onHeightUpdate: I,
            context: T,
          } = n,
          b = (0, o.e7)([m.Z], () => m.Z.getGuild(null != x ? x : Z.guild_id)),
          M = (0, o.e7)([h.default], () => h.default.getUser(l)),
          A = (0, f.Z)({
            user: M,
            guildId: null == b ? void 0 : b.id,
            context: T,
          }),
          {
            commands: C,
            sectionDescriptors: S,
            loading: j,
          } = u.wi({
            channel: Z,
            filters: { commandTypes: [t] },
            options: { limit: _.lr },
            allowFetch: !0,
          }),
          { sections: y } = r.useMemo(() => {
            let n = {};
            return (
              S.forEach((e) => {
                n[e.id] = e;
              }),
              { sections: n }
            );
          }, [S]),
          N = r.useRef(j.current);
        r.useEffect(() => {
          j.current !== N.current &&
            ((N.current = j.current), null == I || I());
        }, [j, I]);
        let O = r.useCallback(
          (n) => {
            a()(null != Z, "menu item should not show if channel is null");
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
                        channel: Z,
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
                    context: { channel: Z, guild: b },
                    commandTargetId: l,
                  });
                },
              },
              n.id,
            );
          },
          [Z, b, l, y],
        );
        if (
          (j.current
            ? (e = (0, i.jsx)(
                d.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(p.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((e =
                0 === C.length
                  ? (0, i.jsx)(
                      d.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: v.intl.string(v.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : C.map(O)),
              null != A &&
                A.length > 0 &&
                (e = (0, i.jsxs)(i.Fragment, {
                  children: [
                    e,
                    (0, i.jsx)(d.MenuSeparator, {}, "separator"),
                    A,
                  ],
                }))),
          !g.TPd.TEXTUAL.has(Z.type))
        ) {
          if (null == A) return null;
          e = A;
        }
        return (0, i.jsx)(d.MenuItem, {
          id: "apps",
          label: v.intl.string(v.t.PHjkRE),
          listClassName: E.list,
          children: e,
        });
      };
    },
    915193: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(692547),
        a = t(481060),
        o = t(493683),
        d = t(129861),
        u = t(700582),
        s = t(594174),
        c = t(388032),
        f = t(597539);
      function p(n) {
        let { color: e, className: t } = n;
        return (0, i.jsx)("svg", {
          className: t,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, i.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, i.jsxs)("g", {
                stroke: e,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, i.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, i.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, i.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, i.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function m(n, e) {
        let t = (0, r.e7)([s.default], () => s.default.getCurrentUser());
        return null == t || e.ownerId !== t.id || n.id === t.id
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.intl.string(c.t["6t3CyM"]),
              action: () => {
                var r;
                return (
                  (r = t),
                  void (0, a.openModal)((t) =>
                    (0, i.jsxs)(a.ConfirmModal, {
                      bodyClassName: f.confirmModal,
                      header: c.intl.string(c.t.WZoUsr),
                      confirmText: c.intl.string(c.t["cY+Ooa"]),
                      cancelText: c.intl.string(c.t["ETE/oK"]),
                      onConfirm: () => o.Z.setDMOwner(e.id, n.id),
                      ...t,
                      children: [
                        (0, i.jsx)(p, {
                          color: l.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: f.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: f.from,
                              children: (0, i.jsx)(u.Z, {
                                user: r,
                                size: a.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: f.to,
                              children: (0, i.jsx)(u.Z, {
                                user: n,
                                size: a.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (e, t) =>
                              (0, i.jsx)(
                                d.Z,
                                {
                                  usernameIcon: (0, i.jsx)(a.Avatar, {
                                    className: f.avatarIcon,
                                    src: n.getAvatarURL(void 0, 16),
                                    size: a.AvatarSizes.SIZE_16,
                                    "aria-hidden": !0,
                                  }),
                                  className: f.discordTag,
                                  usernameClass: f.username,
                                  discriminatorClass: f.discriminator,
                                  user: n,
                                },
                                t,
                              ),
                          }),
                        }),
                      ],
                    }),
                  )
                );
              },
            });
      }
    },
    88966: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(493683),
        o = t(40851),
        d = t(314897),
        u = t(981631),
        s = t(388032);
      function c(n, e) {
        let t = (0, o.Aq)();
        return (0, r.e7)([d.default], () => d.default.getId() === n) ||
          e === u.IlC.POPOUT
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                a.Z.openPrivateChannel(n),
                  t.dispatch(u.CkL.POPOUT_CLOSE),
                  (0, l.closeAllModals)();
              },
            });
      }
    },
    397616: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(493683),
        o = t(592125),
        d = t(594174),
        u = t(388032);
      function s(n, e) {
        var t;
        let s = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
          c = (0, r.e7)([o.Z], () => o.Z.getChannel(e), [e]);
        return null == c ||
          c.isOwner(n) ||
          null == s ||
          !c.isOwner(s.id) ||
          !(null === (t = c.recipients) || void 0 === t
            ? void 0
            : t.includes(n))
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "remove",
              label: u.intl.string(u.t.n5zMIy),
              action: () => a.Z.removeRecipient(e, n),
              color: "danger",
            });
      }
    },
    558924: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(26151),
        o = t(358221),
        d = t(985588),
        u = t(354459),
        s = t(388032);
      function c(n, e) {
        let [t, c] = (0, r.Wu)(
          [o.Z],
          () => [o.Z.getParticipants(e), o.Z.getParticipant(e, n.id)],
          [e, n.id],
        );
        return (0, d.s)(n) && 0 !== t.length
          ? null == c
            ? (0, i.jsx)(l.MenuItem, {
                id: "ring",
                label: s.intl.string(s.t.bHa9kJ),
                action: () => a.Z.ring(e, [n.id]),
              })
            : c.type === u.fO.USER && c.ringing
              ? (0, i.jsx)(l.MenuItem, {
                  id: "stop-ringing",
                  label: s.intl.string(s.t.ygslb2),
                  action: () => a.Z.stopRinging(e, [n.id]),
                })
              : null
          : null;
      }
    },
    261121: function (n, e, t) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    303511: function (n, e, t) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    148562: function (n, e, t) {
      n.exports = { list: "list_fd4745" };
    },
    597539: function (n, e, t) {
      n.exports = {
        confirmModal: "confirmModal_a9fa9a",
        discordTag: "discordTag_a9fa9a",
        avatarIcon: "avatarIcon_a9fa9a",
        username: "username_a9fa9a",
        discriminator: "discriminator_a9fa9a",
        fromToWrapper: "fromToWrapper_a9fa9a",
        from: "from_a9fa9a",
        to: "to_a9fa9a",
      };
    },
    705197: function (n, e, t) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
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
//# sourceMappingURL=d987921caec5fe7c9a9c.js.map
