"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38718"],
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
        d = t.n(a),
        o = t(481060),
        u = t(37234),
        s = t(230711),
        c = t(981631),
        f = t(388032),
        m = t(243014);
      function p(n, e, t) {
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
      class g extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: m.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: m.streamerModeEnabledImage }),
              (0, r.jsx)(o.Clickable, {
                className: d()(m.streamerModeEnabledBtn, {
                  [m.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...n) {
          super(...n),
            p(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, u.jN)(c.S9g.USER_SETTINGS),
                s.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      p(g, "defaultProps", { disableButton: !1 }), (e.Z = g);
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
        d = t(981631),
        o = t(65154);
      function u(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          t = (0, i.e7)([l.default], () => l.default.getId()),
          u = (0, i.e7)(
            [a.Z],
            () => a.Z.supports(o.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, e), [t, e]),
          c = null == n || n === t;
        return [
          c && (u || s),
          s,
          (n) => {
            let i = n ? d.ZUi.DISABLED : d.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, e);
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
      var r = t(153867),
        l = t(468026),
        a = t(394059),
        d = t(388032);
      function o(n) {
        let { type: e, onConfirm: t, ...o } = n,
          u =
            e === a.K.STREAM
              ? d.intl.string(d.t["/lFMWl"])
              : d.intl.string(d.t.xzxhZW),
          s =
            e === a.K.STREAM
              ? d.intl.string(d.t.xaOX7e)
              : d.intl.string(d.t.oU1p9P);
        return (0, i.jsx)(l.default, {
          confirmText: d.intl.string(d.t["cY+Ooa"]),
          secondaryConfirmText: d.intl.string(d.t["JdIQ/f"]),
          title: u,
          cancelText: d.intl.string(d.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
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
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(475179),
        d = t(358221),
        o = t(388032);
      function u(n) {
        let e = (0, r.e7)([d.Z], () => d.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.intl.string(o.t.BL8ss7),
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
        d = t(27584),
        o = t(295510),
        u = t(394059),
        s = t(65154),
        c = t(388032);
      function f(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, f, m] = (0, d.Z)(n, e),
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
                (0, l.openModal)((n) =>
                  (0, i.jsx)(o.Z, {
                    ...n,
                    type: u.K.VIDEO,
                    onConfirm: () => m(!f),
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
          return h;
        },
      }),
        t(653041);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        a = t(481060),
        d = t(139387),
        o = t(230711),
        u = t(213459),
        s = t(434404),
        c = t(795594),
        f = t(430824),
        m = t(496675),
        p = t(981631),
        g = t(388032);
      function h(n) {
        var e;
        let {
            user: h,
            application: v,
            guildId: _,
            context: E,
            onItemClick: Z,
          } = n,
          x =
            null !== (e = null == v ? void 0 : v.id) && void 0 !== e
              ? e
              : null == h
                ? void 0
                : h.id,
          I = f.Z.getGuild(_),
          T = (0, l.e7)([m.Z], () =>
            null != I ? m.Z.can(p.Plq.MANAGE_GUILD, I) : null,
          ),
          b = (0, u.LD)(_, !0),
          A = (0, u.PL)(!0, !0),
          { isUserApp: M, isGuildApp: S } = r.useMemo(() => {
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
                    null === (e = A.result) || void 0 === e
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
          }, [b, A, x]);
        r.useEffect(() => {
          t(360606);
        }, []);
        let C = r.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              s.Z.open(I.id, p.pNK.INTEGRATIONS),
                d.Z.setSection(p.b4C.APPLICATION, x),
                null == Z || Z();
          }, [x, null == I ? void 0 : I.id, Z]),
          j = r.useCallback(() => {
            o.Z.open(p.oAB.AUTHORIZED_APPS);
            let n = "";
            null != v ? (n = v.name) : null != h && (n = h.username),
              "" !== n && c.J.setState({ searchQuery: n }),
              null == Z || Z();
          }, [v, Z, h]);
        if (E === p.IlC.POPOUT) return null;
        let y = [];
        return (
          S &&
            T &&
            y.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-server-integration",
                  label: g.intl.string(g.t.IuSJT0),
                  action: C,
                },
                "manage-server-integration",
              ),
            ),
          M &&
            y.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: g.intl.string(g.t.V8ruv7),
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
        l = t(53304);
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
          return o;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        l = t(19780),
        a = t(977059),
        d = t(760373);
      function o(n) {
        let { channelId: e, location: t } = n,
          { enabled: o } = (0, a.S)({ location: t });
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
              let o = a.getChannel(n);
              if (null == o || o.isGuildStageVoice()) return !1;
              let u =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != u && u !== d.Eg;
            })(e, o, [l.Z, r.Z]),
          [e, o],
        );
      }
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return I;
        },
        Ef: function () {
          return M;
        },
        HO: function () {
          return A;
        },
        NZ: function () {
          return S;
        },
        Pq: function () {
          return b;
        },
        Q1: function () {
          return _;
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
        d = t(493683);
      t(749210);
      var o = t(911969),
        u = t(367907),
        s = t(944486),
        c = t(979651),
        f = t(700785),
        m = t(922482),
        p = t(192079),
        g = t(706058),
        h = t(590415),
        v = t(981631);
      function _(n, e) {
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          e && (0, u.yw)(v.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, p.s$)(n) }),
          a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function E(n, e) {
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function Z(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, h.gf)(l) === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, u.yw)(v.rMx.PROMOTED_TO_SPEAKER, { ...(0, p.s$)(n) }),
          a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function x(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function I(n, e, t) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
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
            url: v.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function b(n, e, t) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let a = n.permissionOverwrites[i],
          u = { id: i, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...a };
        t
          ? ((u.allow = l.IH(u.allow, e)), (u.deny = l.Od(u.deny, e)))
          : ((u.allow = l.Od(u.allow, e)), (u.deny = l.IH(u.deny, e))),
          d.Z.updatePermissionOverwrite(n.id, u);
      }
      async function A(n, e, t, i) {
        if ("" === e) return;
        s.Z.getVoiceChannelId() !== n.id && (0, m.TM)(n);
        let r = await (0, g.me)(n.id, e, t, i);
        return Z(n, !1, !0), r;
      }
      async function M(n, e, t) {
        if ("" !== e) return await (0, g.Dk)(n.id, e, t);
      }
      async function S(n) {
        await (0, g.Ix)(n.id);
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
        d = t(157925),
        o = t(981631),
        u = t(71080),
        s = t(388032);
      function c(n, e, t, i) {
        let l = e[0],
          a = r.ZP.getName(n, t, l),
          d = null != i ? i : e.length;
        return 1 === d && null != l
          ? a
          : null == l
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: d })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: a, count: d - 1 });
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
      function m(n) {
        let e = a.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? d.BM.EVERYONE
            : d.BM.NO_ONE,
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
          return d;
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
          })
        ).body;
      }
      async function a(n, e, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function d(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
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
        d = t(108843),
        o = t(911969),
        u = t(947440),
        s = t(100527),
        c = t(441061),
        f = t(167675),
        m = t(737013),
        p = t(607783),
        g = t(299206),
        h = t(819403),
        v = t(777658),
        _ = t(858488),
        E = t(185457),
        Z = t(570870),
        x = t(389052),
        I = t(24311),
        T = t(915193),
        b = t(332576),
        A = t(710631),
        M = t(297047),
        S = t(88966),
        C = t(397616),
        j = t(558924),
        y = t(991307),
        N = t(37258),
        O = t(700994),
        P = t(332031),
        w = t(981631),
        k = t(388032);
      e.default = (0, d.Z)(
        (0, a.Z)(
          function (n) {
            var e;
            let {
                user: t,
                channel: a,
                context: d,
                showChatItems: s = !0,
                showMediaItems: w = !1,
                showChannelCallItems: U = !1,
                showModalItems: R = !0,
                onSelect: D,
                onHeightUpdate: G,
              } = n,
              V = (0, N.Z)({ userId: t.id, guildId: null }),
              B = (0, M.Z)(t, null, d),
              L = (0, j.Z)(t, a.id),
              W = (0, S.Z)(t.id, d),
              H = (0, I.Z)({ user: t, context: d }),
              K = (0, E.Z)({ user: t, channelId: a.id, context: d }),
              z = (0, _.Z)({ user: t }),
              q = (0, O.Z)(t.id),
              F = (0, C.Z)(t.id, a.id),
              Y = (0, y.Z)(t.id),
              J = (0, p.B)({
                userId: t.id,
                channelId: a.id,
                guildId: a.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              Q = (0, b.Z)(t.id, a.id),
              X = (0, A.Z)({ user: t }),
              $ = (0, u.Z)(null, t),
              nn = (0, v.Z)(t),
              ne = (0, x.Z)({ user: t }),
              nt = (0, g.Z)({ id: t.id, label: k.intl.string(k.t["/AXYnJ"]) }),
              ni = (0, P.Z)(t.id),
              nr = (0, f.Z)(t.id),
              nl = (0, c.Z)(a.id),
              na = (0, h.Z)(t),
              nd = (0, m.Z)(t.id),
              no = (0, Z.Z)({
                commandType: o.yU.USER,
                commandTargetId: t.id,
                channel: a,
                guildId: void 0,
                onHeightUpdate: G,
              }),
              nu = (0, T.Z)(t, a),
              ns = t.isNonUserBot(),
              nc = a.isManaged(),
              nf =
                null === (e = a.recipients) || void 0 === e
                  ? void 0
                  : e.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": k.intl.string(k.t.liqwPD),
              onSelect: D,
              children: [
                !ns &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: na }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          R && V,
                          s && B,
                          W,
                          H,
                          !nc && L,
                          R && K,
                          R && z,
                          ni,
                        ],
                      }),
                      w && (0, i.jsx)(r.MenuGroup, { children: q }),
                      nf &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!nc && F, nu] }),
                      (0, i.jsx)(r.MenuGroup, { children: R && $ }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          w && Y,
                          w && J,
                          w && Q,
                          no,
                          R && X,
                          nn,
                          R && ne,
                          w && nd,
                        ],
                      }),
                      U && (0, i.jsxs)(r.MenuGroup, { children: [nl, nr] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: nt }),
              ],
            });
          },
          { object: w.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU],
      );
    },
    570870: function (n, e, t) {
      var i = t(200651),
        r = t(192379),
        l = t(512722),
        a = t.n(l),
        d = t(442837),
        o = t(481060),
        u = t(10718),
        s = t(667204),
        c = t(826298),
        f = t(276022),
        m = t(978983),
        p = t(430824),
        g = t(594174),
        h = t(981631),
        v = t(689079),
        _ = t(388032),
        E = t(62352);
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
          b = (0, d.e7)([p.Z], () => p.Z.getGuild(null != x ? x : Z.guild_id)),
          A = (0, d.e7)([g.default], () => g.default.getUser(l)),
          M = (0, f.Z)({
            user: A,
            guildId: null == b ? void 0 : b.id,
            context: T,
          }),
          {
            commands: S,
            sectionDescriptors: C,
            loading: j,
          } = u.wi({
            channel: Z,
            filters: { commandTypes: [t] },
            options: { limit: v.lr },
            allowFetch: !0,
          }),
          { sections: y } = r.useMemo(() => {
            let n = {};
            return (
              C.forEach((e) => {
                n[e.id] = e;
              }),
              { sections: n }
            );
          }, [C]),
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
              o.MenuItem,
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
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(m.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((e =
                0 === S.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: _.intl.string(_.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : S.map(O)),
              null != M &&
                (e = (0, i.jsxs)(i.Fragment, {
                  children: [
                    e,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    M,
                  ],
                }))),
          !h.TPd.TEXTUAL.has(Z.type))
        ) {
          if (null == M) return null;
          e = M;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: _.intl.string(_.t.PHjkRE),
          listClassName: E.list,
          children: e,
        });
      };
    },
    915193: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(692547),
        a = t(481060),
        d = t(493683),
        o = t(129861),
        u = t(700582),
        s = t(594174),
        c = t(388032),
        f = t(346411);
      function m(n) {
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
      function p(n, e) {
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
                      onConfirm: () => d.Z.setDMOwner(e.id, n.id),
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
                                o.Z,
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
        d = t(40851),
        o = t(314897),
        u = t(981631),
        s = t(388032);
      function c(n, e) {
        let t = (0, d.Aq)();
        return (0, r.e7)([o.default], () => o.default.getId() === n) ||
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
        d = t(592125),
        o = t(594174),
        u = t(388032);
      function s(n, e) {
        var t;
        let s = (0, r.e7)([o.default], () => o.default.getCurrentUser(), []),
          c = (0, r.e7)([d.Z], () => d.Z.getChannel(e), [e]);
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
        d = t(358221),
        o = t(985588),
        u = t(354459),
        s = t(388032);
      function c(n, e) {
        let [t, c] = (0, r.Wu)(
          [d.Z],
          () => [d.Z.getParticipants(e), d.Z.getParticipant(e, n.id)],
          [e, n.id],
        );
        return (0, o.s)(n) && 0 !== t.length
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
    243014: function (n, e, t) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    53304: function (n, e, t) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    62352: function (n, e, t) {
      n.exports = { list: "list_fd4745" };
    },
    346411: function (n, e, t) {
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
    201683: function (n, e, t) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
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
//# sourceMappingURL=a43412ea714b7b5b3e72.js.map
