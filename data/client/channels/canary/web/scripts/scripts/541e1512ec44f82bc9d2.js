"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62507"],
  {
    511293: function (e) {
      e.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (e) {
      e.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (e, n, t) {
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
        m = t(261121);
      function p(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class h extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: m.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: m.streamerModeEnabledImage }),
              (0, r.jsx)(d.Clickable, {
                className: o()(m.streamerModeEnabledBtn, {
                  [m.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, u.jN)(c.S9g.USER_SETTINGS),
                s.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      p(h, "defaultProps", { disableButton: !1 }), (n.Z = h);
    },
    394059: function (e, n, t) {
      var i, r;
      t.d(n, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    27584: function (e, n, t) {
      t.d(n, {
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
      function u(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          t = (0, i.e7)([l.default], () => l.default.getId()),
          u = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(d.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
          c = null == e || e === t;
        return [
          c && (u || s),
          s,
          (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
          },
        ];
      }
    },
    295510: function (e, n, t) {
      t.d(n, {
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
      function d(e) {
        let { type: n, onConfirm: t, ...d } = e,
          u =
            n === a.K.STREAM
              ? o.intl.string(o.t["/lFMWl"])
              : o.intl.string(o.t.xzxhZW),
          s =
            n === a.K.STREAM
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
    441061: function (e, n, t) {
      t.d(n, {
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
      function u(e) {
        let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: d.intl.string(d.t.BL8ss7),
          checked: !n,
          action: () => a.Z.toggleVoiceParticipantsHidden(e, !n),
        });
      }
    },
    167675: function (e, n, t) {
      t.d(n, {
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
      function f(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, f, m] = (0, o.Z)(e, n),
          p = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                if (p || f) return m(!f);
                (0, l.openModal)((e) =>
                  (0, i.jsx)(d.Z, {
                    ...e,
                    type: u.K.VIDEO,
                    onConfirm: () => m(!f),
                  }),
                );
              },
            })
          : null;
      }
    },
    276022: function (e, n, t) {
      t.d(n, {
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
        m = t(496675),
        p = t(981631),
        h = t(388032);
      function g(e) {
        var n;
        let {
            user: g,
            application: _,
            guildId: v,
            context: E,
            onItemClick: Z,
          } = e,
          x =
            null !== (n = null == _ ? void 0 : _.id) && void 0 !== n
              ? n
              : null == g
                ? void 0
                : g.id,
          T = f.Z.getGuild(v),
          I = (0, l.e7)([m.Z], () =>
            null != T ? m.Z.can(p.Plq.MANAGE_GUILD, T) : null,
          ),
          A = (0, u.LD)(v, !0),
          M = (0, u.PL)(!0, !0),
          { isUserApp: b, isGuildApp: C } = r.useMemo(() => {
            var e, n, t, i;
            if (null == x) return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (t =
                    null === (e = A.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              l = Object.values(
                null !==
                  (i =
                    null === (n = M.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: r.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === x
                );
              }),
              isUserApp: l.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === x
                );
              }),
            };
          }, [A, M, x]);
        r.useEffect(() => {
          t(360606);
        }, []);
        let S = r.useCallback(() => {
            if ((null == T ? void 0 : T.id) != null)
              s.Z.open(T.id, p.pNK.INTEGRATIONS),
                o.Z.setSection(p.b4C.APPLICATION, x),
                null == Z || Z();
          }, [x, null == T ? void 0 : T.id, Z]),
          j = r.useCallback(() => {
            d.Z.open(p.oAB.AUTHORIZED_APPS);
            let e = "";
            null != _ ? (e = _.name) : null != g && (e = g.username),
              "" !== e && c.J.setState({ searchQuery: e }),
              null == Z || Z();
          }, [_, Z, g]);
        if (E === p.IlC.POPOUT) return null;
        let N = [];
        return (
          C &&
            I &&
            N.push(
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
          b &&
            N.push(
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
          N
        );
      }
    },
    978983: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(303511);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    977059: function (e, n, t) {
      t.d(n, {
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
      function r(e) {
        let { location: n } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    441894: function (e, n, t) {
      t.d(n, {
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
      function d(e) {
        let { channelId: n, location: t } = e,
          { enabled: d } = (0, a.S)({ location: t });
        return (0, i.e7)(
          [l.Z, r.Z],
          () =>
            (function (e, n) {
              var t;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [l.Z, r.Z];
              if (!n || null == e || i.getChannelId() !== e) return !1;
              let d = a.getChannel(e);
              if (null == d || d.isGuildStageVoice()) return !1;
              let u =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != u && u !== o.Eg;
            })(n, d, [l.Z, r.Z]),
          [n, d],
        );
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return T;
        },
        Ef: function () {
          return b;
        },
        HO: function () {
          return M;
        },
        NZ: function () {
          return C;
        },
        Pq: function () {
          return A;
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
          return I;
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
        m = t(922482),
        p = t(192079),
        h = t(706058),
        g = t(590415),
        _ = t(981631);
      function v(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          n && (0, u.yw)(_.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, p.s$)(e) }),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function E(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function Z(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = c.Z.getVoiceStateForChannel(e.id);
        return (
          (0, g.gf)(l) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, u.yw)(_.rMx.PROMOTED_TO_SPEAKER, { ...(0, p.s$)(e) }),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function x(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(n),
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
      function T(e, n, t) {
        let i = e.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
            rejectWithError: !1,
          })
        );
      }
      function I(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          T(n, e.id, !0),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, e.id),
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
      function A(e, n, t) {
        let i = e.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = e.permissionOverwrites[i],
          u = { id: i, type: d.BN.ROLE, allow: f.Hn, deny: f.Hn, ...a };
        t
          ? ((u.allow = l.IH(u.allow, n)), (u.deny = l.Od(u.deny, n)))
          : ((u.allow = l.Od(u.allow, n)), (u.deny = l.IH(u.deny, n))),
          o.Z.updatePermissionOverwrite(e.id, u);
      }
      async function M(e, n, t, i) {
        if ("" === n) return;
        s.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
        let r = await (0, h.me)(e.id, n, t, i);
        return Z(e, !1, !0), r;
      }
      async function b(e, n, t) {
        if ("" !== n) return await (0, h.Dk)(e.id, n, t);
      }
      async function C(e) {
        await (0, h.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return c;
        },
        kk: function () {
          return f;
        },
        s$: function () {
          return m;
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
      function c(e, n, t, i) {
        let l = n[0],
          a = r.ZP.getName(e, t, l),
          o = null != i ? i : n.length;
        return 1 === o && null != l
          ? a
          : null == l
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: o })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: a, count: o - 1 });
      }
      function f(e, n) {
        switch (e) {
          case u.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case u.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case u.aC.MEMBER:
          case u.aC.ROLE:
            return n ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case u.aC.EMPTY_STATE:
        }
        return null;
      }
      function m(e) {
        let n = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(d.Plq.REQUEST_TO_SPEAK, e)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
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
      async function l(e, n, t, l, a) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: l,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function a(e, n, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function o(e) {
        return i.tn.del({ url: r.ANM.STAGE_INSTANCE(e), rejectWithError: !1 });
      }
    },
    623633: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(592125),
        l = t(944486);
      function a() {
        return (0, i.e7)([l.Z, r.Z], () => {
          let e = l.Z.getVoiceChannelId();
          if (null != e) {
            let n = r.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
    354589: function (e, n, t) {
      t.r(n);
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
        m = t(737013),
        p = t(607783),
        h = t(299206),
        g = t(819403),
        _ = t(777658),
        v = t(858488),
        E = t(185457),
        Z = t(570870),
        x = t(389052),
        T = t(24311),
        I = t(915193),
        A = t(332576),
        M = t(158508),
        b = t(710631),
        C = t(297047),
        S = t(88966),
        j = t(397616),
        N = t(558924),
        y = t(991307),
        O = t(37258),
        P = t(700994),
        w = t(332031),
        k = t(981631),
        U = t(388032);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            var n;
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
              } = e,
              B = (0, O.Z)({ userId: t.id, guildId: null }),
              V = (0, C.Z)(t, null, o),
              L = (0, N.Z)(t, a.id),
              H = (0, S.Z)(t.id, o),
              K = (0, T.Z)({ user: t, context: o }),
              z = (0, E.Z)({ user: t, channelId: a.id, context: o }),
              q = (0, v.Z)({ user: t }),
              Y = (0, P.Z)(t.id),
              F = (0, j.Z)(t.id, a.id),
              J = (0, y.Z)(t.id),
              Q = (0, p.B)({
                userId: t.id,
                channelId: a.id,
                guildId: a.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              X = (0, A.Z)(t.id, a.id),
              $ = (0, b.Z)({ user: t }),
              ee = (0, u.Z)(null, t),
              en = (0, _.Z)(t),
              et = (0, x.Z)({ user: t, location: "GroupDMUserContextMenu" }),
              ei = (0, M.Z)({ user: t, location: "GroupDMUserContextMenu" }),
              er = (0, h.Z)({ id: t.id, label: U.intl.string(U.t["/AXYnJ"]) }),
              el = (0, w.Z)(t.id),
              ea = (0, f.Z)(t.id),
              eo = (0, c.Z)(a.id),
              ed = (0, g.Z)(t),
              eu = (0, m.Z)(t.id),
              es = (0, Z.Z)({
                commandType: d.yU.USER,
                commandTargetId: t.id,
                channel: a,
                guildId: void 0,
                onHeightUpdate: W,
              }),
              ec = (0, I.Z)(t, a),
              ef = t.isNonUserBot(),
              em = a.isManaged(),
              ep =
                null === (n = a.recipients) || void 0 === n
                  ? void 0
                  : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": U.intl.string(U.t.liqwPD),
              onSelect: G,
              children: [
                !ef &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: ed }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          R && B,
                          s && V,
                          H,
                          K,
                          !em && L,
                          R && z,
                          R && q,
                          el,
                        ],
                      }),
                      k && (0, i.jsx)(r.MenuGroup, { children: Y }),
                      ep &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!em && F, ec] }),
                      (0, i.jsx)(r.MenuGroup, { children: R && ee }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          k && J,
                          k && Q,
                          k && X,
                          es,
                          R && $,
                          en,
                          R && ei,
                          R && et,
                          k && eu,
                        ],
                      }),
                      D && (0, i.jsxs)(r.MenuGroup, { children: [eo, ea] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: er }),
              ],
            });
          },
          { object: k.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (e, n, t) {
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
        m = t(978983),
        p = t(430824),
        h = t(594174),
        g = t(981631),
        _ = t(689079),
        v = t(388032),
        E = t(148562);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: l,
            channel: Z,
            guildId: x,
            onHeightUpdate: T,
            context: I,
          } = e,
          A = (0, o.e7)([p.Z], () => p.Z.getGuild(null != x ? x : Z.guild_id)),
          M = (0, o.e7)([h.default], () => h.default.getUser(l)),
          b = (0, f.Z)({
            user: M,
            guildId: null == A ? void 0 : A.id,
            context: I,
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
          { sections: N } = r.useMemo(() => {
            let e = {};
            return (
              S.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [S]),
          y = r.useRef(j.current);
        r.useEffect(() => {
          j.current !== y.current &&
            ((y.current = j.current), null == T || T());
        }, [j, T]);
        let O = r.useCallback(
          (e) => {
            a()(null != Z, "menu item should not show if channel is null");
            let n = N[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              d.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: Z,
                        section: n,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: e,
                    optionValues: {},
                    context: { channel: Z, guild: A },
                    commandTargetId: l,
                  });
                },
              },
              e.id,
            );
          },
          [Z, A, l, N],
        );
        if (
          (j.current
            ? (n = (0, i.jsx)(
                d.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(m.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
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
              null != b &&
                b.length > 0 &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(d.MenuSeparator, {}, "separator"),
                    b,
                  ],
                }))),
          !g.TPd.TEXTUAL.has(Z.type))
        ) {
          if (null == b) return null;
          n = b;
        }
        return (0, i.jsx)(d.MenuItem, {
          id: "apps",
          label: v.intl.string(v.t.PHjkRE),
          listClassName: E.list,
          children: n,
        });
      };
    },
    915193: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
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
      function m(e) {
        let { color: n, className: t } = e;
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
                stroke: n,
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
      function p(e, n) {
        let t = (0, r.e7)([s.default], () => s.default.getCurrentUser());
        return null == t || n.ownerId !== t.id || e.id === t.id
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
                      onConfirm: () => o.Z.setDMOwner(n.id, e.id),
                      ...t,
                      children: [
                        (0, i.jsx)(m, {
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
                                user: e,
                                size: a.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (n, t) =>
                              (0, i.jsx)(
                                d.Z,
                                {
                                  usernameIcon: (0, i.jsx)(a.Avatar, {
                                    className: f.avatarIcon,
                                    src: e.getAvatarURL(void 0, 16),
                                    size: a.AvatarSizes.SIZE_16,
                                    "aria-hidden": !0,
                                  }),
                                  className: f.discordTag,
                                  usernameClass: f.username,
                                  discriminatorClass: f.discriminator,
                                  user: e,
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
    88966: function (e, n, t) {
      t.d(n, {
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
      function c(e, n) {
        let t = (0, o.Aq)();
        return (0, r.e7)([d.default], () => d.default.getId() === e) ||
          n === u.IlC.POPOUT
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                a.Z.openPrivateChannel(e),
                  t.dispatch(u.CkL.POPOUT_CLOSE),
                  (0, l.closeAllModals)();
              },
            });
      }
    },
    397616: function (e, n, t) {
      t.d(n, {
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
      function s(e, n) {
        var t;
        let s = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
          c = (0, r.e7)([o.Z], () => o.Z.getChannel(n), [n]);
        return null == c ||
          c.isOwner(e) ||
          null == s ||
          !c.isOwner(s.id) ||
          !(null === (t = c.recipients) || void 0 === t
            ? void 0
            : t.includes(e))
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "remove",
              label: u.intl.string(u.t.n5zMIy),
              action: () => a.Z.removeRecipient(n, e),
              color: "danger",
            });
      }
    },
    261121: function (e, n, t) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    303511: function (e, n, t) {
      e.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    148562: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
    597539: function (e, n, t) {
      e.exports = {
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
    705197: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    312403: function (e, n, t) {
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    728513: function (e, n, t) {
      e.exports = {
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
//# sourceMappingURL=541e1512ec44f82bc9d2.js.map
