"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13351"],
  {
    718629: function (e, t, n) {
      var r = n(570140),
        E = n(668781),
        i = n(287734),
        a = n(881052),
        u = n(314897),
        o = n(592125),
        c = n(979651),
        s = n(352954),
        _ = n(630759),
        l = n(760373),
        f = n(981631),
        d = n(689938);
      async function S(e, t) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, _.om)(l.GB), null == t || t();
          } catch (t) {
            var n;
            let e = new a.Hx(t);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              E.Z.show({
                title: d.Z.Messages.ERROR_GENERIC_TITLE,
                body:
                  null !== (n = e.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : d.Z.Messages.GENERIC_ERROR_BODY,
              });
          }
        } else
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          }),
            null == t || t();
      }
      async function I(e) {
        let t = (function () {
          let e = c.Z.getVoiceStateForUser(u.default.getId()),
            t = o.Z.getChannel(null == e ? void 0 : e.channelId);
          return u.default.getSessionId() ===
            (null == e ? void 0 : e.sessionId) &&
            null != t &&
            t.type !== f.d4z.GUILD_STAGE_VOICE
            ? t.id
            : null;
        })();
        null != t
          ? s.Z.openSecureFramesUpdateConfirmation({
              title: e
                ? d.Z.Messages
                    .E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE
                : d.Z.Messages
                    .E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE,
              subtitle: e
                ? d.Z.Messages
                    .E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE
                : d.Z.Messages
                    .E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE,
              confirmText: d.Z.Messages.E2EE_PERSISTENT_KEYS_RECONNECT_CONFIRM,
              onConfirm: async () => {
                await S(e, () => {
                  i.default.disconnect(), i.default.selectVoiceChannel(t);
                });
              },
            })
          : await S(e);
      }
      t.Z = {
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
        createSecureFramesVerifiedKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: t,
          });
        },
        deleteSecureFramesVerifiedKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: t,
          });
        },
        deleteSecureFramesUserVerifiedKeys: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: e,
          });
        },
        createSecureFramesTransientKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: e,
            key: t,
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
    760373: function (e, t, n) {
      var r, E, i, a;
      n.d(t, {
        Eg: function () {
          return f;
        },
        GB: function () {
          return d;
        },
        KN: function () {
          return _;
        },
        WK: function () {
          return c;
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
          return s;
        },
        tu: function () {
          return E;
        },
        y6: function () {
          return u;
        },
      });
      let u = 5,
        o = 30,
        c = 3,
        s = 5,
        _ = 45,
        l = 3;
      ((i = r || (r = {})).MATCH = "match"),
        (i.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (i.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys"),
        (i.FINGERPRINT_MISMATCH = "fingerprint_mismatch"),
        (i.UNABLE_TO_VERIFY = "unable_to_verify"),
        (i.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (i.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let f = 0;
      ((a = E || (E = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (a.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let d = 1,
        S = 0;
    },
    352954: function (e, t, n) {
      n(411104);
      var r = n(735250);
      n(470079);
      var E = n(481060),
        i = n(981631),
        a = n(689938);
      t.Z = {
        openSecureFramesStreamVerification: function (e, t) {
          (0, E.openModalLazy)(async () => {
            let E = (await n.e("94904").then(n.bind(n, 660250))).default;
            return (n) => (0, r.jsx)(E, { streamKey: e, channelId: t, ...n });
          });
        },
        openSecureFramesUserVerificationModal: function (e, t, a, u) {
          a() &&
            (0, E.openModalLazy)(
              async () => {
                let E = (await n.e("33397").then(n.bind(n, 963410))).default;
                return (n) => (0, r.jsx)(E, { userId: e, channelId: t, ...n });
              },
              {
                contextKey:
                  u === i.IlC.POPOUT
                    ? E.POPOUT_MODAL_CONTEXT
                    : E.DEFAULT_MODAL_CONTEXT,
              },
            );
        },
        openSecureFramesUpdateConfirmation: function (e) {
          let {
            title: t,
            subtitle: i,
            confirmText: u = a.Z.Messages.CONFIRM,
            onConfirm: o,
          } = e;
          (0, E.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(
              n.bind(n, 481060),
            );
            return (n) =>
              (0, r.jsx)(e, {
                header: t,
                confirmText: u,
                cancelText: a.Z.Messages.CANCEL,
                onConfirm: o,
                ...n,
                children: (0, r.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: i,
                }),
              });
          });
        },
        handleSecureFramesUserVerificationLink: function (e) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    571826: function (e, t, n) {
      n.d(t, {
        CW: function () {
          return l;
        },
        DF: function () {
          return I;
        },
        KA: function () {
          return T;
        },
        M1: function () {
          return _;
        },
        PM: function () {
          return d;
        },
        Pn: function () {
          return R;
        },
        Rq: function () {
          return s;
        },
        ih: function () {
          return S;
        },
        s$: function () {
          return f;
        },
        sN: function () {
          return c;
        },
      });
      var r = n(367907),
        E = n(221292),
        i = n(592125),
        a = n(626135),
        u = n(981631);
      function o(e) {
        var t;
        return null === (t = i.Z.getChannel(e)) || void 0 === t
          ? void 0
          : t.guild_id;
      }
      function c(e) {
        let { channelId: t, selectedTab: n } = e;
        r.ZP.trackWithMetadata(u.rMx.RTC_PANEL_VIEWED, {
          channel_id: t,
          guild_id: o(t),
          selected_tab: n,
        });
      }
      function s(e) {
        let { channelId: t, userId: n } = e;
        r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: t,
          guild_id: o(t),
          ...(0, E.QN)({ userId: n }),
        });
      }
      function _(e) {
        let { channelId: t, userId: n, analyticsLocation: i } = e;
        r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFIED, {
          channel_id: t,
          guild_id: o(t),
          location: i,
          ...(0, E.QN)({ userId: n }),
        });
      }
      function l(e) {
        let { channelId: t, userId: n, keyVersion: i, reason: a } = e;
        r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFICATION_FAILED, {
          channel_id: t,
          guild_id: o(t),
          failure_reason: a,
          key_version: "".concat(i),
          ...(0, E.QN)({ userId: n }),
        });
      }
      function f(e) {
        let { channelId: t, userId: n } = e;
        r.ZP.trackWithMetadata(u.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: o(t),
          ...(0, E.QN)({ userId: n }),
        });
      }
      function d(e) {
        let { channelId: t } = e;
        r.ZP.trackWithMetadata(u.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: o(t),
        });
      }
      function S(e) {
        let { channelId: t } = e;
        r.ZP.trackWithMetadata(u.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: o(t),
        });
      }
      function I() {
        a.default.track(u.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function R() {
        a.default.track(u.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function T(e) {
        a.default.track(u.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(e),
        });
      }
    },
    630759: function (e, t, n) {
      n.d(t, {
        J6: function () {
          return Y;
        },
        LO: function () {
          return m;
        },
        TQ: function () {
          return F;
        },
        UB: function () {
          return G;
        },
        ZU: function () {
          return L;
        },
        Zn: function () {
          return V;
        },
        aZ: function () {
          return D;
        },
        bo: function () {
          return K;
        },
        fz: function () {
          return W;
        },
        kK: function () {
          return P;
        },
        lg: function () {
          return H;
        },
        om: function () {
          return v;
        },
        pL: function () {
          return p;
        },
        uV: function () {
          return O;
        },
        uX: function () {
          return x;
        },
      }),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(47120);
      var r = n(250683),
        E = n(512722),
        i = n.n(E),
        a = n(913527),
        u = n.n(a),
        o = n(544891),
        c = n(253135),
        s = n(668781),
        _ = n(314897),
        l = n(131951),
        f = n(19780),
        d = n(959457),
        S = n(594174),
        I = n(70956),
        R = n(63063),
        T = n(5192),
        C = n(960048),
        N = n(51144),
        A = n(718629),
        M = n(615830),
        h = n(352954),
        U = n(571826),
        y = n(760373),
        g = n(981631),
        Z = n(689938);
      function O() {
        return R.Z.getArticleURL(g.BhN.END_TO_END_ENCRYPTION);
      }
      function D() {
        return R.Z.getArticleURL(g.BhN.END_TO_END_ENCRYPTION);
      }
      function p() {
        return R.Z.getArticleURL(g.BhN.END_TO_END_ENCRYPTION);
      }
      function F(e, t, n, r, E) {
        n
          ? A.Z.createSecureFramesVerifiedKey(e, t)
          : A.Z.createSecureFramesTransientKey(e, t),
          (0, U.M1)({ channelId: r, userId: e, analyticsLocation: E });
      }
      function m(e, t, n) {
        if (n) {
          let n = (0, c.MK)(new Uint8Array(t));
          A.Z.deleteSecureFramesVerifiedKey(e, n);
        } else A.Z.deleteSecureFramesTransientKey(e);
      }
      function L(e, t) {
        h.Z.openSecureFramesUpdateConfirmation({
          title: Z.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: Z.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            A.Z.deleteSecureFramesVerifiedKey(e, t), (0, U.Pn)();
          },
        });
      }
      function V(e) {
        let t = S.default.getUser(e),
          n = N.ZP.getName(t);
        h.Z.openSecureFramesUpdateConfirmation({
          title: Z.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: n },
          ),
          subtitle: Z.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            A.Z.deleteSecureFramesUserVerifiedKeys(e), (0, U.DF)();
          },
        });
      }
      function K(e) {
        let t = u()(e),
          n = u()().diff(t, "s");
        if (n > 12 * I.Z.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * I.Z.Seconds.DAYS_30));
          return Z.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (n > I.Z.Seconds.DAYS_30) {
          let e = Math.round(n / I.Z.Seconds.DAYS_30);
          return Z.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (n > 7 * I.Z.Seconds.DAY) {
          let e = Math.round(n / (7 * I.Z.Seconds.DAY));
          return Z.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (n > I.Z.Seconds.DAY) {
          let e = Math.round(n / I.Z.Seconds.DAY);
          return Z.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (n > I.Z.Seconds.HOUR) {
          let e = Math.round(n / I.Z.Seconds.HOUR);
          return Z.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(n > I.Z.Seconds.MINUTE))
            return Z.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: n,
            });
          let e = Math.round(n / I.Z.Seconds.MINUTE);
          return Z.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function P(e) {
        let {
          isCurrentUserKeyPersistent: t,
          isOtherUserKeyPersistent: n,
          otherUserNickname: r,
        } = e;
        if (t && n)
          return Z.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: O(),
          });
        if (t)
          return Z.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: O() },
          );
        if (n)
          return Z.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: O() },
          );
        else
          return Z.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: O(),
          });
      }
      async function w(e) {
        let t = _.default.getStaticAuthSessionId();
        return (
          i()(
            null != t,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await l.Z.getMLSSigningKey(t, e)
        );
      }
      function b(e) {
        let t = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(t);
      }
      async function Y(e, t, n) {
        try {
          return (
            await o.tn.post({
              url: g.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: b(t), key_version: n },
            })
          ).body.is_match;
        } catch (e) {
          throw (C.Z.captureException(e), e);
        }
      }
      async function k(e) {
        let { key: t, signature: n } = await w(e);
        try {
          await o.tn.put({
            url: g.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: b(t), signature: b(n), key_version: e },
          }),
            A.Z.addUploadedKeyVersion(e);
        } catch (e) {
          throw (C.Z.captureException(e), e);
        }
      }
      function B(e) {
        return M.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function v(e) {
        !B(e) && (await k(e));
      }
      async function x(e) {
        if (!B(e)) return await k(e), !0;
        let t = _.default.getId(),
          { key: n } = await w(e),
          r = await Y(t, n, e);
        return !r && (0, U.KA)(e), r;
      }
      function G(e, t) {
        let [n, r] = t;
        if (!n.isUserConnected(e)) return !1;
        let E = n.getSecureFramesRosterMapEntry(e);
        if (null == E) return !1;
        let i = new Uint8Array(E);
        for (let t of r.getAllActiveStreamKeys()) {
          if (!r.isUserConnected(t, e)) continue;
          let n = d.Z.getSecureFramesRosterMapEntry(t, e);
          if (null == n) return !0;
          let E = new Uint8Array(n);
          for (let e = 0; e < i.length; e++) if (i[e] !== E[e]) return !0;
        }
        return !1;
      }
      function H(e) {
        let { userId: t, channelId: n, nickname: r } = e;
        (0, U.CW)({
          userId: t,
          channelId: n,
          keyVersion: y.GB,
          reason: y.Xe.OTHER_USER_INCONSISTENT_KEYS,
        }),
          s.Z.show({
            title: Z.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_TITLE,
            body: Z.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_SUBTITLE.format({
              username: r,
            }),
          });
      }
      function W(e) {
        let { userId: t, guildId: n, channelId: r } = e;
        if (!G(t, [f.Z, d.Z])) return !0;
        {
          let e = S.default.getUser(t),
            E = T.ZP.getName(n, r, e);
          return H({ userId: t, channelId: r, nickname: E }), !1;
        }
      }
    },
    438882: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      }),
        n(411104);
      function r(e, t, n) {
        if (e.byteLength < t)
          throw Error(
            "data.byteLength must be greater than or equal to desiredLength",
          );
        if (t % n != 0)
          throw Error("desiredLength must be a multiple of groupSize");
        if (n > 8)
          throw Error("groupSize must be less than or equal to ".concat(8));
        let r = BigInt(10 ** n),
          E = "";
        for (let i = 0; i < t; i += n) {
          let t = BigInt(0);
          for (let r = n; r > 0; --r) t = (t << 8n) | BigInt(e[i + (n - r)]);
          (t %= r), (E += t.toString().padStart(n, "0"));
        }
        return E;
      }
    },
    309651: function (e, t, n) {
      n.d(t, {
        x: function () {
          return r;
        },
      }),
        n(411104),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817);
      async function r(e, t, n) {
        if (0 !== e) throw Error("unsupported fingerprint format version");
        if (0 === t.byteLength) throw Error("zero-length key");
        if (0 === n.length) throw Error("zero-length user ID");
        let r = BigInt(n);
        if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
        let E = new Uint8Array(2 + t.byteLength + 8);
        E.set(t, 2);
        let i = new DataView(E.buffer);
        return i.setUint16(0, e), i.setBigUint64(2 + t.byteLength, r), E;
      }
    },
    256147: function (e, t, n) {
      n.d(t, {
        M: function () {
          return E;
        },
      });
      var r = n(250683);
      function E(e) {
        return r.fromByteArray(e);
      }
    },
    926188: function (e, t, n) {
      n.d(t, {
        I: function () {
          return o;
        },
      }),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(963458),
        n(47120);
      var r = n(309651),
        E = n(802667);
      let i = Uint8Array.of(
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
        a = { N: 16384, r: 8, p: 2, dkLen: 64 };
      function u(e, t) {
        for (let n = 0; n < e.length && n < t.length; n++)
          if (e[n] != t[n]) return e[n] - t[n];
        return e.length - t.length;
      }
      async function o(e, t, n, o, c) {
        let s = await Promise.all([(0, r.x)(e, t, n), (0, r.x)(e, o, c)]);
        s.sort(u);
        let _ = new Uint8Array(s[0].byteLength + s[1].byteLength);
        return (
          _.set(s[0], 0),
          _.set(s[1], s[0].byteLength),
          new Uint8Array(await (0, E.E)(_, i, a))
        );
      }
    },
    253135: function (e, t, n) {
      n.d(t, {
        Dq: function () {
          return r.D;
        },
        Il: function () {
          return E.I;
        },
        MK: function () {
          return i.M;
        },
      });
      var r = n(438882);
      n(309651);
      var E = n(926188),
        i = n(256147);
    },
  },
]);
//# sourceMappingURL=f942a8d3eb205034118c.js.map
