"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37690"],
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
        u = t(481060),
        d = t(37234),
        s = t(230711),
        c = t(981631),
        f = t(388032),
        p = t(261121);
      function _(e, n, t) {
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
            className: p.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: p.streamerModeEnabledImage }),
              (0, r.jsx)(u.Clickable, {
                className: o()(p.streamerModeEnabledBtn, {
                  [p.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, d.jN)(c.S9g.USER_SETTINGS),
                s.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      _(h, "defaultProps", { disableButton: !1 }), (n.Z = h);
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
          return d;
        },
      });
      var i = t(442837),
        r = t(846027),
        l = t(314897),
        a = t(131951),
        o = t(981631),
        u = t(65154);
      function d(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          t = (0, i.e7)([l.default], () => l.default.getId()),
          d = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(u.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
          c = null == e || e === t;
        return [
          c && (d || s),
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
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(153867),
        l = t(468026),
        a = t(394059),
        o = t(388032);
      function u(e) {
        let { type: n, onConfirm: t, ...u } = e,
          d =
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
          title: d,
          cancelText: o.intl.string(o.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: s,
          ...u,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(475179),
        o = t(358221),
        u = t(388032);
      function d(e) {
        let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: u.intl.string(u.t.BL8ss7),
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
        u = t(295510),
        d = t(394059),
        s = t(65154),
        c = t(388032);
      function f(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, f, p] = (0, o.Z)(e, n),
          _ = (0, r.e7)(
            [a.ZP],
            () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                if (_ || f) return p(!f);
                (0, l.openModal)((e) =>
                  (0, i.jsx)(u.Z, {
                    ...e,
                    type: d.K.VIDEO,
                    onConfirm: () => p(!f),
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
          return m;
        },
      }),
        t(653041);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        a = t(481060),
        o = t(139387),
        u = t(230711),
        d = t(213459),
        s = t(434404),
        c = t(795594),
        f = t(430824),
        p = t(496675),
        _ = t(981631),
        h = t(388032);
      function m(e) {
        var n;
        let {
            user: m,
            application: E,
            guildId: g,
            context: v,
            onItemClick: T,
          } = e,
          b =
            null !== (n = null == E ? void 0 : E.id) && void 0 !== n
              ? n
              : null == m
                ? void 0
                : m.id,
          A = f.Z.getGuild(g),
          I = (0, l.e7)([p.Z], () =>
            null != A ? p.Z.can(_.Plq.MANAGE_GUILD, A) : null,
          ),
          S = (0, d.LD)(g, !0),
          x = (0, d.PL)(!0, !0),
          { isUserApp: Z, isGuildApp: C } = r.useMemo(() => {
            var e, n, t, i;
            if (null == b) return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (t =
                    null === (e = S.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              l = Object.values(
                null !==
                  (i =
                    null === (n = x.result) || void 0 === n
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
                    : n.id) === b
                );
              }),
              isUserApp: l.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === b
                );
              }),
            };
          }, [S, x, b]);
        r.useEffect(() => {
          t(360606);
        }, []);
        let M = r.useCallback(() => {
            if ((null == A ? void 0 : A.id) != null)
              s.Z.open(A.id, _.pNK.INTEGRATIONS),
                o.Z.setSection(_.b4C.APPLICATION, b),
                null == T || T();
          }, [b, null == A ? void 0 : A.id, T]),
          y = r.useCallback(() => {
            u.Z.open(_.oAB.AUTHORIZED_APPS);
            let e = "";
            null != E ? (e = E.name) : null != m && (e = m.username),
              "" !== e && c.J.setState({ searchQuery: e }),
              null == T || T();
          }, [E, T, m]);
        if (v === _.IlC.POPOUT) return null;
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
                  action: M,
                },
                "manage-server-integration",
              ),
            ),
          Z &&
            N.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: h.intl.string(h.t.V8ruv7),
                  action: y,
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
          return u;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        l = t(19780),
        a = t(977059),
        o = t(760373);
      function u(e) {
        let { channelId: n, location: t } = e,
          { enabled: u } = (0, a.S)({ location: t });
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
              let u = a.getChannel(e);
              if (null == u || u.isGuildStageVoice()) return !1;
              let d =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != d && d !== o.Eg;
            })(n, u, [l.Z, r.Z]),
          [n, u],
        );
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return A;
        },
        Ef: function () {
          return Z;
        },
        HO: function () {
          return x;
        },
        NZ: function () {
          return C;
        },
        Pq: function () {
          return S;
        },
        Q1: function () {
          return g;
        },
        RK: function () {
          return T;
        },
        _0: function () {
          return v;
        },
        hz: function () {
          return I;
        },
        yi: function () {
          return b;
        },
      });
      var i = t(512722),
        r = t.n(i),
        l = t(149765),
        a = t(544891),
        o = t(493683);
      t(749210);
      var u = t(911969),
        d = t(367907),
        s = t(944486),
        c = t(979651),
        f = t(700785),
        p = t(922482),
        _ = t(192079),
        h = t(706058),
        m = t(590415),
        E = t(981631);
      function g(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          n && (0, d.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, _.s$)(e) }),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function v(e, n) {
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = c.Z.getVoiceStateForChannel(e.id);
        return (
          (0, m.gf)(l) === m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, d.yw)(E.rMx.PROMOTED_TO_SPEAKER, { ...(0, _.s$)(e) }),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i),
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
      function b(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          r()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(n),
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
      function A(e, n, t) {
        let i = e.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(i, n),
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
          A(n, e.id, !0),
          a.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t, e.id),
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
      function S(e, n, t) {
        let i = e.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = e.permissionOverwrites[i],
          d = { id: i, type: u.BN.ROLE, allow: f.Hn, deny: f.Hn, ...a };
        t
          ? ((d.allow = l.IH(d.allow, n)), (d.deny = l.Od(d.deny, n)))
          : ((d.allow = l.Od(d.allow, n)), (d.deny = l.IH(d.deny, n))),
          o.Z.updatePermissionOverwrite(e.id, d);
      }
      async function x(e, n, t, i) {
        if ("" === n) return;
        s.Z.getVoiceChannelId() !== e.id && (0, p.TM)(e);
        let r = await (0, h.me)(e.id, n, t, i);
        return T(e, !1, !0), r;
      }
      async function Z(e, n, t) {
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
        u = t(981631),
        d = t(71080),
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
          case d.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return n ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function p(e) {
        let n = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(u.Plq.REQUEST_TO_SPEAK, e)
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
    570870: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        l = t(512722),
        a = t.n(l),
        o = t(442837),
        u = t(481060),
        d = t(10718),
        s = t(667204),
        c = t(826298),
        f = t(276022),
        p = t(978983),
        _ = t(430824),
        h = t(594174),
        m = t(981631),
        E = t(689079),
        g = t(388032),
        v = t(148562);
      n.Z = (e) => {
        let n,
          {
            commandType: t,
            commandTargetId: l,
            channel: T,
            guildId: b,
            onHeightUpdate: A,
            context: I,
          } = e,
          S = (0, o.e7)([_.Z], () => _.Z.getGuild(null != b ? b : T.guild_id)),
          x = (0, o.e7)([h.default], () => h.default.getUser(l)),
          Z = (0, f.Z)({
            user: x,
            guildId: null == S ? void 0 : S.id,
            context: I,
          }),
          C = r.useMemo(() => ({ channel: T, type: "channel" }), [T]),
          {
            commands: M,
            sectionDescriptors: y,
            loading: N,
          } = d.wi({
            context: C,
            filters: { commandTypes: [t] },
            options: { limit: E.lr },
            allowFetch: !0,
          }),
          { sections: O } = r.useMemo(() => {
            let e = {};
            return (
              y.forEach((n) => {
                e[n.id] = n;
              }),
              { sections: e }
            );
          }, [y]),
          P = r.useRef(N.current);
        r.useEffect(() => {
          N.current !== P.current &&
            ((P.current = N.current), null == A || A());
        }, [N, A]);
        let k = r.useCallback(
          (e) => {
            a()(null != T, "menu item should not show if channel is null");
            let n = O[e.applicationId],
              t = null != n ? (0, c.ky)(n) : void 0;
            return (0, i.jsx)(
              u.MenuItem,
              {
                id: e.id,
                label: e.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: T,
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
                    context: { channel: T, guild: S },
                    commandTargetId: l,
                  });
                },
              },
              e.id,
            );
          },
          [T, S, l, O],
        );
        if (
          (N.current
            ? (n = (0, i.jsx)(
                u.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(p.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((n =
                0 === M.length
                  ? (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: g.intl.string(g.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : M.map(k)),
              null != Z &&
                Z.length > 0 &&
                (n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    n,
                    (0, i.jsx)(u.MenuSeparator, {}, "separator"),
                    Z,
                  ],
                }))),
          !m.TPd.TEXTUAL.has(T.type))
        ) {
          if (null == Z) return null;
          n = Z;
        }
        return (0, i.jsx)(u.MenuItem, {
          id: "apps",
          label: g.intl.string(g.t.PHjkRE),
          listClassName: v.list,
          children: n,
        });
      };
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
    960897: function (e, n, t) {
      e.exports = { subtext: "subtext_ffa9b9" };
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
//# sourceMappingURL=346b4e92e944f0b7ba7d.js.map
