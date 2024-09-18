"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79107"],
  {
    718629: function (e, n, t) {
      var r = t(570140),
        i = t(668781),
        E = t(287734),
        u = t(881052),
        a = t(314897),
        o = t(592125),
        s = t(979651),
        c = t(352954),
        _ = t(630759),
        l = t(760373),
        d = t(981631),
        f = t(689938);
      async function S(e, n) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, _.om)(l.GB), null == n || n();
          } catch (n) {
            var t;
            let e = new u.Hx(n);
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
                  E.default.disconnect(), E.default.selectVoiceChannel(n);
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
      var r, i, E, u;
      t.d(n, {
        Eg: function () {
          return d;
        },
        GB: function () {
          return f;
        },
        KN: function () {
          return _;
        },
        WK: function () {
          return s;
        },
        Xe: function () {
          return r;
        },
        Xj: function () {
          return S;
        },
        YP: function () {
          return o;
        },
        ak: function () {
          return l;
        },
        iQ: function () {
          return c;
        },
        tu: function () {
          return i;
        },
        y6: function () {
          return a;
        },
      });
      let a = 5,
        o = 30,
        s = 3,
        c = 5,
        _ = 45,
        l = 3;
      ((E = r || (r = {})).MATCH = "match"),
        (E.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (E.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys"),
        (E.FINGERPRINT_MISMATCH = "fingerprint_mismatch"),
        (E.UNABLE_TO_VERIFY = "unable_to_verify"),
        (E.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (E.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let d = 0;
      ((u = i || (i = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (u.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let f = 1,
        S = 0;
    },
    352954: function (e, n, t) {
      t(411104);
      var r = t(735250);
      t(470079);
      var i = t(481060),
        E = t(981631),
        u = t(689938);
      n.Z = {
        openSecureFramesStreamVerification: function (e, n) {
          (0, i.openModalLazy)(async () => {
            let i = (await t.e("94904").then(t.bind(t, 660250))).default;
            return (t) => (0, r.jsx)(i, { streamKey: e, channelId: n, ...t });
          });
        },
        openSecureFramesUserVerificationModal: function (e, n, u, a) {
          u() &&
            (0, i.openModalLazy)(
              async () => {
                let i = (await t.e("33397").then(t.bind(t, 963410))).default;
                return (t) => (0, r.jsx)(i, { userId: e, channelId: n, ...t });
              },
              {
                contextKey:
                  a === E.IlC.POPOUT
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              },
            );
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
          return l;
        },
        DF: function () {
          return I;
        },
        KA: function () {
          return R;
        },
        M1: function () {
          return _;
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
        E = t(592125),
        u = t(626135),
        a = t(981631);
      function o(e) {
        var n;
        return null === (n = E.Z.getChannel(e)) || void 0 === n
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
      function _(e) {
        let { channelId: n, userId: t, analyticsLocation: E } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
          channel_id: n,
          guild_id: o(n),
          location: E,
          ...(0, i.QN)({ userId: t }),
        });
      }
      function l(e) {
        let { channelId: n, userId: t, keyVersion: E, reason: u } = e;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
          channel_id: n,
          guild_id: o(n),
          failure_reason: u,
          key_version: "".concat(E),
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
        u.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function T() {
        u.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function R(e) {
        u.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(e),
        });
      }
    },
    630759: function (e, n, t) {
      t.d(n, {
        J6: function () {
          return v;
        },
        LO: function () {
          return F;
        },
        TQ: function () {
          return m;
        },
        UB: function () {
          return x;
        },
        ZU: function () {
          return L;
        },
        Zn: function () {
          return P;
        },
        aZ: function () {
          return Z;
        },
        bo: function () {
          return V;
        },
        fz: function () {
          return W;
        },
        kK: function () {
          return w;
        },
        lg: function () {
          return H;
        },
        om: function () {
          return B;
        },
        pL: function () {
          return D;
        },
        uV: function () {
          return p;
        },
        uX: function () {
          return G;
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
        E = t.n(i),
        u = t(913527),
        a = t.n(u),
        o = t(544891),
        s = t(253135),
        c = t(668781),
        _ = t(314897),
        l = t(131951),
        d = t(19780),
        f = t(959457),
        S = t(594174),
        I = t(70956),
        T = t(63063),
        R = t(5192),
        N = t(960048),
        A = t(51144),
        C = t(718629),
        M = t(615830),
        h = t(352954),
        g = t(571826),
        O = t(760373),
        y = t(981631),
        U = t(689938);
      function p() {
        return T.Z.getArticleURL(y.BhN.END_TO_END_ENCRYPTION);
      }
      function Z() {
        return T.Z.getArticleURL(y.BhN.END_TO_END_ENCRYPTION);
      }
      function D() {
        return T.Z.getArticleURL(y.BhN.END_TO_END_ENCRYPTION);
      }
      function m(e, n, t, r, i) {
        t
          ? C.Z.createSecureFramesVerifiedKey(e, n)
          : C.Z.createSecureFramesTransientKey(e, n),
          (0, g.M1)({ channelId: r, userId: e, analyticsLocation: i });
      }
      function F(e, n, t) {
        if (t) {
          let t = (0, s.MK)(new Uint8Array(n));
          C.Z.deleteSecureFramesVerifiedKey(e, t);
        } else C.Z.deleteSecureFramesTransientKey(e);
      }
      function L(e, n) {
        h.Z.openSecureFramesUpdateConfirmation({
          title: U.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: U.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            C.Z.deleteSecureFramesVerifiedKey(e, n), (0, g.Pn)();
          },
        });
      }
      function P(e) {
        let n = S.default.getUser(e),
          t = A.ZP.getName(n);
        h.Z.openSecureFramesUpdateConfirmation({
          title: U.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: t },
          ),
          subtitle: U.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            C.Z.deleteSecureFramesUserVerifiedKeys(e), (0, g.DF)();
          },
        });
      }
      function V(e) {
        let n = a()(e),
          t = a()().diff(n, "s");
        if (t > 12 * I.Z.Seconds.DAYS_30) {
          let e = Math.round(t / (12 * I.Z.Seconds.DAYS_30));
          return U.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (t > I.Z.Seconds.DAYS_30) {
          let e = Math.round(t / I.Z.Seconds.DAYS_30);
          return U.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (t > 7 * I.Z.Seconds.DAY) {
          let e = Math.round(t / (7 * I.Z.Seconds.DAY));
          return U.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (t > I.Z.Seconds.DAY) {
          let e = Math.round(t / I.Z.Seconds.DAY);
          return U.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (t > I.Z.Seconds.HOUR) {
          let e = Math.round(t / I.Z.Seconds.HOUR);
          return U.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(t > I.Z.Seconds.MINUTE))
            return U.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: t,
            });
          let e = Math.round(t / I.Z.Seconds.MINUTE);
          return U.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function w(e) {
        let {
          isCurrentUserKeyPersistent: n,
          isOtherUserKeyPersistent: t,
          otherUserNickname: r,
        } = e;
        if (n && t)
          return U.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: p(),
          });
        if (n)
          return U.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: p() },
          );
        if (t)
          return U.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: p() },
          );
        else
          return U.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: p(),
          });
      }
      async function b(e) {
        let n = _.default.getStaticAuthSessionId();
        return (
          E()(
            null != n,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await l.Z.getMLSSigningKey(n, e)
        );
      }
      function K(e) {
        let n = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(n);
      }
      async function v(e, n, t) {
        try {
          return (
            await o.tn.post({
              url: y.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: K(n), key_version: t },
            })
          ).body.is_match;
        } catch (e) {
          throw (N.Z.captureException(e), e);
        }
      }
      async function Y(e) {
        let { key: n, signature: t } = await b(e);
        try {
          await o.tn.put({
            url: y.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: K(n), signature: K(t), key_version: e },
          }),
            C.Z.addUploadedKeyVersion(e);
        } catch (e) {
          throw (N.Z.captureException(e), e);
        }
      }
      function k(e) {
        return M.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function B(e) {
        !k(e) && (await Y(e));
      }
      async function G(e) {
        if (!k(e)) return await Y(e), !0;
        let n = _.default.getId(),
          { key: t } = await b(e),
          r = await v(n, t, e);
        return !r && (0, g.KA)(e), r;
      }
      function x(e, n) {
        let [t, r] = n;
        if (!t.isUserConnected(e)) return !1;
        let i = t.getSecureFramesRosterMapEntry(e);
        if (null == i) return !1;
        let E = new Uint8Array(i);
        for (let n of r.getAllActiveStreamKeys()) {
          if (!r.isUserConnected(n, e)) continue;
          let t = f.Z.getSecureFramesRosterMapEntry(n, e);
          if (null == t) return !0;
          let i = new Uint8Array(t);
          for (let e = 0; e < E.length; e++) if (E[e] !== i[e]) return !0;
        }
        return !1;
      }
      function H(e) {
        let { userId: n, channelId: t, nickname: r } = e;
        (0, g.CW)({
          userId: n,
          channelId: t,
          keyVersion: O.GB,
          reason: O.Xe.OTHER_USER_INCONSISTENT_KEYS,
        }),
          c.Z.show({
            title: U.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_TITLE,
            body: U.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_SUBTITLE.format({
              username: r,
            }),
          });
      }
      function W(e) {
        let { userId: n, guildId: t, channelId: r } = e;
        if (!x(n, [d.Z, f.Z])) return !0;
        {
          let e = S.default.getUser(n),
            i = R.ZP.getName(t, r, e);
          return H({ userId: n, channelId: r, nickname: i }), !1;
        }
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return M;
        },
        Ef: function () {
          return y;
        },
        HO: function () {
          return O;
        },
        NZ: function () {
          return U;
        },
        Pq: function () {
          return g;
        },
        Q1: function () {
          return R;
        },
        RK: function () {
          return A;
        },
        _0: function () {
          return N;
        },
        hz: function () {
          return h;
        },
        yi: function () {
          return C;
        },
      });
      var r = t(512722),
        i = t.n(r),
        E = t(149765),
        u = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        s = t(367907),
        c = t(944486),
        _ = t(979651),
        l = t(700785),
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
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function N(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function A(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null == e ? void 0 : e.getGuildId();
        i()(null != r, "This channel cannot be guildless.");
        let E = _.Z.getVoiceStateForChannel(e.id);
        return (
          (0, I.gf)(E) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, s.yw)(T.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
          u.tn.patch({
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
      function C(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          u.tn.patch({
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
      function M(e, n, t) {
        let r = e.getGuildId();
        return (
          i()(null != r, "This channel cannot be guildless."),
          u.tn.patch({
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
          M(n, e.id, !0),
          u.tn.patch({
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
        let u = e.permissionOverwrites[r],
          s = { id: r, type: o.BN.ROLE, allow: l.Hn, deny: l.Hn, ...u };
        t
          ? ((s.allow = E.IH(s.allow, n)), (s.deny = E.Od(s.deny, n)))
          : ((s.allow = E.Od(s.allow, n)), (s.deny = E.IH(s.deny, n))),
          a.Z.updatePermissionOverwrite(e.id, s);
      }
      async function O(e, n, t, r) {
        if ("" === n) return;
        c.Z.getVoiceChannelId() !== e.id && (0, d.TM)(e);
        let i = await (0, S.me)(e.id, n, t, r);
        return A(e, !1, !0), i;
      }
      async function y(e, n, t) {
        if ("" !== n) return await (0, S.Dk)(e.id, n, t);
      }
      async function U(e) {
        await (0, S.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return _;
        },
        kk: function () {
          return l;
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
        E = t(700785),
        u = t(427679),
        a = t(157925),
        o = t(981631),
        s = t(71080),
        c = t(689938);
      function _(e, n, t, r) {
        let E = n[0],
          u = i.ZP.getName(e, t, E),
          a = null != r ? r : n.length;
        return 1 === a && null != E
          ? u
          : null == E
            ? c.Z.Messages.SPEAKING_COUNT.format({ count: a })
            : c.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: u,
                count: a - 1,
              });
      }
      function l(e, n) {
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
        let n = u.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: r.Z.getMediaSessionId(),
          request_to_speak_state: E.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return u;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return E;
        },
      });
      var r = t(544891),
        i = t(981631);
      async function E(e, n, t, E, u) {
        return (
          await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: u,
              send_start_notification: E,
            },
          })
        ).body;
      }
      async function u(e, n, t) {
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
          return u;
        },
      });
      var r = t(442837),
        i = t(592125),
        E = t(944486);
      function u() {
        return (0, r.e7)([E.Z, i.Z], () => {
          let e = E.Z.getVoiceChannelId();
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
        for (let E = 0; E < n; E += t) {
          let n = BigInt(0);
          for (let r = t; r > 0; --r) n = (n << 8n) | BigInt(e[E + (t - r)]);
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
        let i = new Uint8Array(2 + n.byteLength + 8);
        i.set(n, 2);
        let E = new DataView(i.buffer);
        return E.setUint16(0, e), E.setBigUint64(2 + n.byteLength, r), i;
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
          return o;
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
        i = t(802667);
      let E = Uint8Array.of(
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
        u = { N: 16384, r: 8, p: 2, dkLen: 64 };
      function a(e, n) {
        for (let t = 0; t < e.length && t < n.length; t++)
          if (e[t] != n[t]) return e[t] - n[t];
        return e.length - n.length;
      }
      async function o(e, n, t, o, s) {
        let c = await Promise.all([(0, r.x)(e, n, t), (0, r.x)(e, o, s)]);
        c.sort(a);
        let _ = new Uint8Array(c[0].byteLength + c[1].byteLength);
        return (
          _.set(c[0], 0),
          _.set(c[1], c[0].byteLength),
          new Uint8Array(await (0, i.E)(_, E, u))
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
          return E.M;
        },
      });
      var r = t(438882);
      t(309651);
      var i = t(926188),
        E = t(256147);
    },
  },
]);
//# sourceMappingURL=2cc07b156289861c40e7.js.map
