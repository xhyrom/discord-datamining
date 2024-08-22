"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36774"],
  {
    718629: function (e, n, t) {
      var r = t(570140),
        i = t(668781),
        u = t(287734),
        E = t(881052),
        a = t(314897),
        o = t(592125),
        s = t(979651),
        c = t(352954),
        l = t(630759),
        _ = t(760373),
        d = t(981631),
        f = t(689938);
      async function S(e, n) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, l.om)(_.GB), null == n || n();
          } catch (n) {
            var t;
            let e = new E.Hx(n);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              i.Z.show({
                title: f.Z.Messages.ERROR_GENERIC_TITLE,
                body:
                  null !== (t = e.getAnyErrorMessage()) && void 0 !== t
                    ? t
                    : f.Z.Messages.GENERIC_ERROR_BODY,
              });
          }
        } else
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          }),
            null == n || n();
      }
      async function I(e) {
        let n = (function () {
          let e = s.Z.getVoiceStateForUser(a.default.getId()),
            n = o.Z.getChannel(null == e ? void 0 : e.channelId);
          return a.default.getSessionId() ===
            (null == e ? void 0 : e.sessionId) &&
            null != n &&
            n.type !== d.d4z.GUILD_STAGE_VOICE
            ? n.id
            : null;
        })();
        null != n
          ? c.Z.openSecureFramesUpdateConfirmation({
              title: e
                ? f.Z.Messages
                    .E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE
                : f.Z.Messages
                    .E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE,
              subtitle: e
                ? f.Z.Messages
                    .E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE
                : f.Z.Messages
                    .E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE,
              confirmText: f.Z.Messages.E2EE_PERSISTENT_KEYS_RECONNECT_CONFIRM,
              onConfirm: async () => {
                await S(e, () => {
                  u.default.disconnect(), u.default.selectVoiceChannel(n);
                });
              },
            })
          : await S(e);
      }
      n.Z = {
        clearUploadedKeyVersions: function () {
          r.Z.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
        },
        updatePersistentCodesEnabled: I,
        addUploadedKeyVersion: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
            keyVersion: e,
          });
        },
        createSecureFramesVerifiedKey: function (e, n) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: n,
          });
        },
        deleteSecureFramesVerifiedKey: function (e, n) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: n,
          });
        },
        deleteSecureFramesUserVerifiedKeys: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: e,
          });
        },
        createSecureFramesTransientKey: function (e, n) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: e,
            key: n,
          });
        },
        deleteSecureFramesTransientKey: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
            userId: e,
          });
        },
      };
    },
    760373: function (e, n, t) {
      var r, i, u, E;
      t.d(n, {
        $J: function () {
          return o;
        },
        GB: function () {
          return T;
        },
        HK: function () {
          return I;
        },
        KN: function () {
          return f;
        },
        WK: function () {
          return _;
        },
        Xe: function () {
          return r;
        },
        Xj: function () {
          return R;
        },
        YP: function () {
          return l;
        },
        ak: function () {
          return S;
        },
        iQ: function () {
          return d;
        },
        l4: function () {
          return a;
        },
        s9: function () {
          return s;
        },
        tu: function () {
          return i;
        },
        y6: function () {
          return c;
        },
      });
      let a = "",
        o = "",
        s = "",
        c = 5,
        l = 30,
        _ = 3,
        d = 5,
        f = 60,
        S = 4;
      ((u = r || (r = {})).MATCH = "match"),
        (u.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (u.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys"),
        (u.FINGERPRINT_MISMATCH = "fingerprint_mismatch"),
        (u.UNABLE_TO_VERIFY = "unable_to_verify"),
        (u.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (u.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let I = 100;
      ((E = i || (i = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (E.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let T = 1,
        R = 0;
    },
    352954: function (e, n, t) {
      t(411104);
      var r = t(735250);
      t(470079);
      var i = t(481060),
        u = t(689938);
      n.Z = {
        openSecureFramesStreamVerification: function (e, n) {
          (0, i.openModalLazy)(async () => {
            let i = (await t.e("94904").then(t.bind(t, 660250))).default;
            return (t) => (0, r.jsx)(i, { streamKey: e, channelId: n, ...t });
          });
        },
        openSecureFramesUserVerificationModal: function (e, n, u) {
          u() &&
            (0, i.openModalLazy)(async () => {
              let i = (await t.e("33397").then(t.bind(t, 963410))).default;
              return (t) => (0, r.jsx)(i, { userId: e, channelId: n, ...t });
            });
        },
        openSecureFramesUpdateConfirmation: function (e) {
          let {
            title: n,
            subtitle: E,
            confirmText: a = u.Z.Messages.CONFIRM,
            onConfirm: o,
          } = e;
          (0, i.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(
              t.bind(t, 481060),
            );
            return (t) =>
              (0, r.jsx)(e, {
                header: n,
                confirmText: a,
                cancelText: u.Z.Messages.CANCEL,
                onConfirm: o,
                ...t,
                children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: E,
                }),
              });
          });
        },
        handleSecureFramesUserVerificationLink: function (e) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    571826: function (e, n, t) {
      t.d(n, {
        CW: function () {
          return _;
        },
        DF: function () {
          return I;
        },
        KA: function () {
          return R;
        },
        M1: function () {
          return l;
        },
        PM: function () {
          return f;
        },
        Pn: function () {
          return T;
        },
        Rq: function () {
          return c;
        },
        ih: function () {
          return S;
        },
        s$: function () {
          return d;
        },
        sN: function () {
          return s;
        },
      });
      var r = t(367907),
        i = t(221292),
        u = t(592125),
        E = t(626135),
        a = t(981631);
      function o(e) {
        var n;
        return null === (n = u.Z.getChannel(e)) || void 0 === n
          ? void 0
          : n.guild_id;
      }
      function s(e) {
        let { channelId: n, selectedTab: t } = e;
        r.ZP.trackWithMetadata(a.rMx.RTC_PANEL_VIEWED, {
          channel_id: n,
          guild_id: o(n),
          selected_tab: t,
        });
      }
      function c(e) {
        let { channelId: n, userId: t } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: n,
          guild_id: o(n),
          ...(0, i.QN)({ userId: t }),
        });
      }
      function l(e) {
        let { channelId: n, userId: t, analyticsLocation: u } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
          channel_id: n,
          guild_id: o(n),
          location: u,
          ...(0, i.QN)({ userId: t }),
        });
      }
      function _(e) {
        let { channelId: n, userId: t, keyVersion: u, reason: E } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
          channel_id: n,
          guild_id: o(n),
          failure_reason: E,
          key_version: "".concat(u),
          ...(0, i.QN)({ userId: t }),
        });
      }
      function d(e) {
        let { channelId: n, userId: t } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: n,
          guild_id: o(n),
          ...(0, i.QN)({ userId: t }),
        });
      }
      function f(e) {
        let { channelId: n } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: n,
          guild_id: o(n),
        });
      }
      function S(e) {
        let { channelId: n } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
          channel_id: n,
          guild_id: o(n),
        });
      }
      function I() {
        E.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function T() {
        E.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function R(e) {
        E.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(e),
        });
      }
    },
    977059: function (e, n, t) {
      t.d(n, {
        c: function () {
          return r;
        },
      });
      let r = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
    },
    630759: function (e, n, t) {
      t.d(n, {
        J6: function () {
          return b;
        },
        LO: function () {
          return U;
        },
        MA: function () {
          return k;
        },
        TQ: function () {
          return p;
        },
        ZU: function () {
          return Z;
        },
        Zn: function () {
          return m;
        },
        bo: function () {
          return D;
        },
        fz: function () {
          return G;
        },
        kK: function () {
          return F;
        },
        lg: function () {
          return Y;
        },
        om: function () {
          return K;
        },
        uX: function () {
          return v;
        },
      }),
        t(518263),
        t(970173),
        t(520712),
        t(268111),
        t(941497),
        t(32026),
        t(480839),
        t(744285),
        t(492257),
        t(873817),
        t(47120);
      var r = t(250683),
        i = t(512722),
        u = t.n(i),
        E = t(913527),
        a = t.n(E),
        o = t(544891),
        s = t(253135),
        c = t(668781),
        l = t(314897),
        _ = t(131951),
        d = t(19780),
        f = t(959457),
        S = t(594174),
        I = t(70956),
        T = t(5192),
        R = t(960048),
        A = t(51144),
        N = t(718629),
        M = t(615830),
        C = t(352954),
        h = t(571826),
        g = t(760373),
        y = t(981631),
        O = t(689938);
      function p(e, n, t, r, i) {
        t
          ? N.Z.createSecureFramesVerifiedKey(e, n)
          : N.Z.createSecureFramesTransientKey(e, n),
          (0, h.M1)({ channelId: r, userId: e, analyticsLocation: i });
      }
      function U(e, n, t) {
        if (t) {
          let t = (0, s.MK)(new Uint8Array(n));
          N.Z.deleteSecureFramesVerifiedKey(e, t);
        } else N.Z.deleteSecureFramesTransientKey(e);
      }
      function Z(e, n) {
        C.Z.openSecureFramesUpdateConfirmation({
          title: O.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: O.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            N.Z.deleteSecureFramesVerifiedKey(e, n), (0, h.Pn)();
          },
        });
      }
      function m(e) {
        let n = S.default.getUser(e),
          t = A.ZP.getName(n);
        C.Z.openSecureFramesUpdateConfirmation({
          title: O.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: t },
          ),
          subtitle: O.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            N.Z.deleteSecureFramesUserVerifiedKeys(e), (0, h.DF)();
          },
        });
      }
      function D(e) {
        let n = a()(e),
          t = a()().diff(n, "s");
        if (t > 12 * I.Z.Seconds.DAYS_30) {
          let e = Math.round(t / (12 * I.Z.Seconds.DAYS_30));
          return O.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (t > I.Z.Seconds.DAYS_30) {
          let e = Math.round(t / I.Z.Seconds.DAYS_30);
          return O.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (t > 7 * I.Z.Seconds.DAY) {
          let e = Math.round(t / (7 * I.Z.Seconds.DAY));
          return O.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (t > I.Z.Seconds.DAY) {
          let e = Math.round(t / I.Z.Seconds.DAY);
          return O.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (t > I.Z.Seconds.HOUR) {
          let e = Math.round(t / I.Z.Seconds.HOUR);
          return O.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(t > I.Z.Seconds.MINUTE))
            return O.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: t,
            });
          let e = Math.round(t / I.Z.Seconds.MINUTE);
          return O.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function F(e) {
        let {
          isCurrentUserKeyPersistent: n,
          isOtherUserKeyPersistent: t,
          otherUserNickname: r,
        } = e;
        if (n && t)
          return O.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: g.l4,
          });
        if (n)
          return O.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: g.l4 },
          );
        if (t)
          return O.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: g.l4 },
          );
        else
          return O.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: g.l4,
          });
      }
      async function L(e) {
        let n = l.default.getStaticAuthSessionId();
        return (
          u()(
            null != n,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await _.Z.getMLSSigningKey(n, e)
        );
      }
      function V(e) {
        let n = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(n);
      }
      async function b(e, n, t) {
        try {
          return (
            await o.tn.post({
              url: y.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: V(n), key_version: t },
            })
          ).body.is_match;
        } catch (e) {
          throw (R.Z.captureException(e), e);
        }
      }
      async function w(e) {
        let { key: n, signature: t } = await L(e);
        try {
          await o.tn.put({
            url: y.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: V(n), signature: V(t), key_version: e },
          }),
            N.Z.addUploadedKeyVersion(e);
        } catch (e) {
          throw (R.Z.captureException(e), e);
        }
      }
      function P(e) {
        return M.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function K(e) {
        !P(e) && (await w(e));
      }
      async function v(e) {
        if (!P(e)) return await w(e), !0;
        let n = l.default.getId(),
          { key: t } = await L(e),
          r = await b(n, t, e);
        return !r && (0, h.KA)(e), r;
      }
      function k(e, n) {
        let [t, r] = n,
          i = t.getSecureFramesRosterMapEntry(e);
        if (null == i) return !1;
        let u = new Uint8Array(i);
        return r
          .getAllActiveStreamKeys()
          .filter((n) => r.isUserConnected(n, e))
          .every((n) => {
            let t = f.Z.getSecureFramesRosterMapEntry(n, e);
            if (null == t) return !1;
            let r = new Uint8Array(t);
            for (let e = 0; e < u.length; e++) if (u[e] !== r[e]) return !1;
            return !0;
          });
      }
      function Y(e) {
        let { userId: n, channelId: t, nickname: r } = e;
        (0, h.CW)({
          userId: n,
          channelId: t,
          keyVersion: g.GB,
          reason: g.Xe.OTHER_USER_INCONSISTENT_KEYS,
        }),
          c.Z.show({
            title: O.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_TITLE,
            body: O.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_SUBTITLE.format({
              username: r,
            }),
          });
      }
      function G(e) {
        let { userId: n, guildId: t, channelId: r } = e;
        if (k(n, [d.Z, f.Z])) return !0;
        let i = S.default.getUser(n),
          u = T.ZP.getName(t, r, i);
        return Y({ userId: n, channelId: r, nickname: u }), !1;
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return C;
        },
        Ef: function () {
          return O;
        },
        HO: function () {
          return y;
        },
        NZ: function () {
          return p;
        },
        Pq: function () {
          return g;
        },
        Q1: function () {
          return R;
        },
        RK: function () {
          return N;
        },
        _0: function () {
          return A;
        },
        hz: function () {
          return h;
        },
        yi: function () {
          return M;
        },
      });
      var r = t(512722),
        i = t.n(r),
        u = t(149765),
        E = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        s = t(367907),
        c = t(944486),
        l = t(979651),
        _ = t(700785),
        d = t(922482),
        f = t(192079),
        S = t(706058),
        I = t(590415),
        T = t(981631);
      function R(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, s.yw)(T.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
          E.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function A(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          E.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function N(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null == e ? void 0 : e.getGuildId();
        i()(null != r, "This channel cannot be guildless.");
        let u = l.Z.getVoiceStateForChannel(e.id);
        return (
          (0, I.gf)(u) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, s.yw)(T.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
          E.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(r),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function M(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          E.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(e, n, t) {
        let r = e.getGuildId();
        return (
          i()(null != r, "This channel cannot be guildless."),
          E.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(r, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function h(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          C(n, e.id, !0),
          E.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function g(e, n, t) {
        let r = e.getGuildId();
        i()(null != r, "Channel cannot be guildless");
        let E = e.permissionOverwrites[r],
          s = { id: r, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...E };
        t
          ? ((s.allow = u.IH(s.allow, n)), (s.deny = u.Od(s.deny, n)))
          : ((s.allow = u.Od(s.allow, n)), (s.deny = u.IH(s.deny, n))),
          a.Z.updatePermissionOverwrite(e.id, s);
      }
      async function y(e, n, t, r) {
        if ("" === n) return;
        c.Z.getVoiceChannelId() !== e.id && (0, d.TM)(e);
        let i = await (0, S.me)(e.id, n, t, r);
        return N(e, !1, !0), i;
      }
      async function O(e, n, t) {
        if ("" !== n) return await (0, S.Dk)(e.id, n, t);
      }
      async function p(e) {
        await (0, S.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return l;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return d;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var r = t(19780),
        i = t(5192),
        u = t(700785),
        E = t(427679),
        a = t(157925),
        o = t(981631),
        s = t(71080),
        c = t(689938);
      function l(e, n, t, r) {
        let u = n[0],
          E = i.ZP.getName(e, t, u),
          a = null != r ? r : n.length;
        return 1 === a && null != u
          ? E
          : null == u
            ? c.Z.Messages.SPEAKING_COUNT.format({ count: a })
            : c.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: E,
                count: a - 1,
              });
      }
      function _(e, n) {
        switch (e) {
          case s.aC.OWNER:
            return c.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case s.aC.ADMINISTRATOR:
            return c.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case s.aC.MEMBER:
          case s.aC.ROLE:
            return n
              ? c.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : c.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case s.aC.EMPTY_STATE:
        }
        return null;
      }
      function d(e) {
        let n = E.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: r.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return E;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return u;
        },
      });
      var r = t(544891),
        i = t(981631);
      async function u(e, n, t, u, E) {
        return (
          await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: E,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function E(e, n, t) {
        return (
          await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function a(e) {
        return r.tn.del(i.ANM.STAGE_INSTANCE(e));
      }
    },
    623633: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var r = t(442837),
        i = t(592125),
        u = t(944486);
      function E() {
        return (0, r.e7)([u.Z, i.Z], () => {
          let e = u.Z.getVoiceChannelId();
          if (null != e) {
            let n = i.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
    438882: function (e, n, t) {
      t.d(n, {
        D: function () {
          return r;
        },
      }),
        t(411104);
      function r(e, n, t) {
        if (e.byteLength < n)
          throw Error(
            "data.byteLength must be greater than or equal to desiredLength",
          );
        if (n % t != 0)
          throw Error("desiredLength must be a multiple of groupSize");
        if (t > 8)
          throw Error("groupSize must be less than or equal to ".concat(8));
        let r = BigInt(10 ** t),
          i = "";
        for (let u = 0; u < n; u += t) {
          let n = BigInt(0);
          for (let r = t; r > 0; --r) n = (n << 8n) | BigInt(e[u + (t - r)]);
          (n %= r), (i += n.toString().padStart(t, "0"));
        }
        return i;
      }
    },
    309651: function (e, n, t) {
      t.d(n, {
        x: function () {
          return r;
        },
      }),
        t(411104),
        t(518263),
        t(970173),
        t(520712),
        t(268111),
        t(941497),
        t(32026),
        t(480839),
        t(744285),
        t(492257),
        t(873817);
      async function r(e, n, t) {
        if (0 !== e) throw Error("unsupported fingerprint format version");
        if (0 === n.byteLength) throw Error("zero-length key");
        if (0 === t.length) throw Error("zero-length user ID");
        let r = BigInt(t);
        if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
        let i = new Uint8Array(),
          u = new Uint8Array(2 + n.byteLength + 8);
        u.set(n, 2);
        let E = new DataView(u.buffer);
        E.setUint16(0, e), E.setBigUint64(2 + n.byteLength, r);
        for (let e = 0; e < 5200; e++) {
          let e = u.byteLength + n.byteLength;
          i.byteLength !== e && (i = new Uint8Array(e)),
            i.set(u, 0),
            i.set(n, u.byteLength),
            (u = new Uint8Array(
              await window.crypto.subtle.digest("SHA-512", i),
            ));
        }
        return u;
      }
    },
    256147: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      });
      var r = t(250683);
      function i(e) {
        return r.fromByteArray(e);
      }
    },
    926188: function (e, n, t) {
      t.d(n, {
        I: function () {
          return a;
        },
      }),
        t(518263),
        t(970173),
        t(520712),
        t(268111),
        t(941497),
        t(32026),
        t(480839),
        t(744285),
        t(492257),
        t(873817),
        t(963458),
        t(47120);
      var r = t(309651),
        i = t(259137);
      let u = Uint8Array.of(
          36,
          202,
          177,
          122,
          122,
          248,
          236,
          43,
          130,
          180,
          18,
          185,
          45,
          171,
          25,
          46,
        ),
        E = { N: 16384, r: 8, p: 2 };
      async function a(e, n, t, a, o) {
        let s = await Promise.all([(0, r.x)(e, n, t), (0, r.x)(e, a, o)]);
        s.sort();
        let c = new Uint8Array(s[0].byteLength + s[1].byteLength);
        return (
          c.set(s[0], 0),
          c.set(s[1], s[0].byteLength),
          new Uint8Array(await (0, i.f3)(c, u, 64, E))
        );
      }
    },
    253135: function (e, n, t) {
      t.d(n, {
        Dq: function () {
          return r.D;
        },
        Il: function () {
          return i.I;
        },
        MK: function () {
          return u.M;
        },
      });
      var r = t(438882);
      t(309651);
      var i = t(926188),
        u = t(256147);
    },
  },
]);
//# sourceMappingURL=776c044c7796a10128eb.js.map
