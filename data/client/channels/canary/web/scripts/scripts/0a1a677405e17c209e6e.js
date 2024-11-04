"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13351"],
  {
    718629: function (t, e, n) {
      var r = n(570140),
        i = n(668781),
        o = n(287734),
        u = n(881052),
        a = n(314897),
        c = n(592125),
        l = n(979651),
        E = n(352954),
        s = n(630759),
        f = n(760373),
        d = n(981631),
        _ = n(388032);
      async function S(t, e) {
        if (t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: t,
          });
          try {
            await (0, s.om)(f.GB), null == e || e();
          } catch (e) {
            var n;
            let t = new u.Hx(e);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              i.Z.show({
                title: _.intl.string(_.t.R0RpRU),
                body:
                  null !== (n = t.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : _.intl.string(_.t.eAn6z8),
              });
          }
        } else
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: t,
          }),
            null == e || e();
      }
      async function h(t) {
        let e = (function () {
          let t = l.Z.getVoiceStateForUser(a.default.getId()),
            e = c.Z.getChannel(null == t ? void 0 : t.channelId);
          return a.default.getSessionId() ===
            (null == t ? void 0 : t.sessionId) &&
            null != e &&
            e.type !== d.d4z.GUILD_STAGE_VOICE
            ? e.id
            : null;
        })();
        null != e
          ? E.Z.openSecureFramesUpdateConfirmation({
              title: t ? _.intl.string(_.t.DRFN1N) : _.intl.string(_.t.q29xJy),
              subtitle: t
                ? _.intl.string(_.t.y015ZW)
                : _.intl.string(_.t.E66FQk),
              confirmText: _.intl.string(_.t.aTuFYW),
              onConfirm: async () => {
                await S(t, () => {
                  o.default.disconnect(), o.default.selectVoiceChannel(e);
                });
              },
            })
          : await S(t);
      }
      e.Z = {
        clearUploadedKeyVersions: function () {
          r.Z.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
        },
        updatePersistentCodesEnabled: h,
        addUploadedKeyVersion: function (t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
            keyVersion: t,
          });
        },
        createSecureFramesVerifiedKey: function (t, e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: t,
            key: e,
          });
        },
        deleteSecureFramesVerifiedKey: function (t, e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: t,
            serializedKey: e,
          });
        },
        deleteSecureFramesUserVerifiedKeys: function (t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: t,
          });
        },
        createSecureFramesTransientKey: function (t, e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: t,
            key: e,
          });
        },
        deleteSecureFramesTransientKey: function (t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
            userId: t,
          });
        },
      };
    },
    760373: function (t, e, n) {
      var r, i, o, u;
      n.d(e, {
        Eg: function () {
          return d;
        },
        GB: function () {
          return _;
        },
        KN: function () {
          return s;
        },
        WK: function () {
          return l;
        },
        Xe: function () {
          return r;
        },
        Xj: function () {
          return S;
        },
        YP: function () {
          return c;
        },
        ak: function () {
          return f;
        },
        iQ: function () {
          return E;
        },
        tu: function () {
          return i;
        },
        y6: function () {
          return a;
        },
      });
      let a = 5,
        c = 30,
        l = 3,
        E = 5,
        s = 45,
        f = 3;
      ((o = r || (r = {})).MATCH = "match"),
        (o.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (o.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys"),
        (o.FINGERPRINT_MISMATCH = "fingerprint_mismatch"),
        (o.UNABLE_TO_VERIFY = "unable_to_verify"),
        (o.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (o.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let d = 0;
      ((u = i || (i = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (u.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let _ = 1,
        S = 0;
    },
    352954: function (t, e, n) {
      n(411104);
      var r = n(200651);
      n(192379);
      var i = n(481060),
        o = n(981631),
        u = n(388032);
      e.Z = {
        openSecureFramesStreamVerification: function (t, e) {
          (0, i.openModalLazy)(async () => {
            let i = (await n.e("94904").then(n.bind(n, 660250))).default;
            return (n) => (0, r.jsx)(i, { streamKey: t, channelId: e, ...n });
          });
        },
        openSecureFramesUserVerificationModal: function (t, e, u, a) {
          u() &&
            (0, i.openModalLazy)(
              async () => {
                let i = (await n.e("33397").then(n.bind(n, 963410))).default;
                return (n) => (0, r.jsx)(i, { userId: t, channelId: e, ...n });
              },
              {
                contextKey:
                  a === o.IlC.POPOUT
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              },
            );
        },
        openSecureFramesUpdateConfirmation: function (t) {
          let {
            title: e,
            subtitle: o,
            confirmText: a = u.intl.string(u.t["cY+Ooa"]),
            onConfirm: c,
          } = t;
          (0, i.openModalLazy)(async () => {
            let { ConfirmModal: t } = await Promise.resolve().then(
              n.bind(n, 481060),
            );
            return (n) =>
              (0, r.jsx)(t, {
                header: e,
                confirmText: a,
                cancelText: u.intl.string(u.t["ETE/oK"]),
                onConfirm: c,
                ...n,
                children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o,
                }),
              });
          });
        },
        handleSecureFramesUserVerificationLink: function (t) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    571826: function (t, e, n) {
      n.d(e, {
        CW: function () {
          return f;
        },
        DF: function () {
          return h;
        },
        KA: function () {
          return g;
        },
        M1: function () {
          return s;
        },
        PM: function () {
          return _;
        },
        Pn: function () {
          return y;
        },
        Rq: function () {
          return E;
        },
        ih: function () {
          return S;
        },
        s$: function () {
          return d;
        },
        sN: function () {
          return l;
        },
      });
      var r = n(367907),
        i = n(221292),
        o = n(592125),
        u = n(626135),
        a = n(981631);
      function c(t) {
        var e;
        return null === (e = o.Z.getChannel(t)) || void 0 === e
          ? void 0
          : e.guild_id;
      }
      function l(t) {
        let { channelId: e, selectedTab: n } = t;
        r.ZP.trackWithMetadata(a.rMx.RTC_PANEL_VIEWED, {
          channel_id: e,
          guild_id: c(e),
          selected_tab: n,
        });
      }
      function E(t) {
        let { channelId: e, userId: n } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: e,
          guild_id: c(e),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function s(t) {
        let { channelId: e, userId: n, analyticsLocation: o } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
          channel_id: e,
          guild_id: c(e),
          location: o,
          ...(0, i.QN)({ userId: n }),
        });
      }
      function f(t) {
        let { channelId: e, userId: n, keyVersion: o, reason: u } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
          channel_id: e,
          guild_id: c(e),
          failure_reason: u,
          key_version: "".concat(o),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function d(t) {
        let { channelId: e, userId: n } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: e,
          guild_id: c(e),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function _(t) {
        let { channelId: e } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: e,
          guild_id: c(e),
        });
      }
      function S(t) {
        let { channelId: e } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
          channel_id: e,
          guild_id: c(e),
        });
      }
      function h() {
        u.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function y() {
        u.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function g(t) {
        u.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(t),
        });
      }
    },
    630759: function (t, e, n) {
      n.d(e, {
        J6: function () {
          return k;
        },
        LO: function () {
          return L;
        },
        TQ: function () {
          return F;
        },
        UB: function () {
          return W;
        },
        ZU: function () {
          return K;
        },
        Zn: function () {
          return P;
        },
        aZ: function () {
          return M;
        },
        bo: function () {
          return O;
        },
        fz: function () {
          return z;
        },
        kK: function () {
          return w;
        },
        lg: function () {
          return G;
        },
        om: function () {
          return x;
        },
        pL: function () {
          return Z;
        },
        uV: function () {
          return D;
        },
        uX: function () {
          return B;
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
        i = n(512722),
        o = n.n(i),
        u = n(913527),
        a = n.n(u),
        c = n(544891),
        l = n(253135),
        E = n(668781),
        s = n(314897),
        f = n(131951),
        d = n(19780),
        _ = n(959457),
        S = n(594174),
        h = n(70956),
        y = n(63063),
        g = n(5192),
        T = n(960048),
        I = n(51144),
        p = n(718629),
        R = n(615830),
        A = n(352954),
        U = n(571826),
        C = n(760373),
        m = n(981631),
        N = n(388032);
      function D() {
        return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
      }
      function M() {
        return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
      }
      function Z() {
        return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
      }
      function F(t, e, n, r, i) {
        n
          ? p.Z.createSecureFramesVerifiedKey(t, e)
          : p.Z.createSecureFramesTransientKey(t, e),
          (0, U.M1)({ channelId: r, userId: t, analyticsLocation: i });
      }
      function L(t, e, n) {
        if (n) {
          let n = (0, l.MK)(new Uint8Array(e));
          p.Z.deleteSecureFramesVerifiedKey(t, n);
        } else p.Z.deleteSecureFramesTransientKey(t);
      }
      function K(t, e) {
        A.Z.openSecureFramesUpdateConfirmation({
          title: N.intl.string(N.t["hdL15+"]),
          subtitle: N.intl.string(N.t["8VGYKi"]),
          onConfirm: () => {
            p.Z.deleteSecureFramesVerifiedKey(t, e), (0, U.Pn)();
          },
        });
      }
      function P(t) {
        let e = S.default.getUser(t),
          n = I.ZP.getName(e);
        A.Z.openSecureFramesUpdateConfirmation({
          title: N.intl.formatToPlainString(N.t.K6NGBw, { username: n }),
          subtitle: N.intl.string(N.t.F1BQKy),
          onConfirm: () => {
            p.Z.deleteSecureFramesUserVerifiedKeys(t), (0, U.DF)();
          },
        });
      }
      function O(t) {
        let e = a()(t),
          n = a()().diff(e, "s");
        if (n > 12 * h.Z.Seconds.DAYS_30) {
          let t = Math.round(n / (12 * h.Z.Seconds.DAYS_30));
          return N.intl.formatToPlainString(N.t.F1wqkJ, { count: t });
        }
        if (n > h.Z.Seconds.DAYS_30) {
          let t = Math.round(n / h.Z.Seconds.DAYS_30);
          return N.intl.formatToPlainString(N.t["iT+b+/"], { count: t });
        }
        if (n > 7 * h.Z.Seconds.DAY) {
          let t = Math.round(n / (7 * h.Z.Seconds.DAY));
          return N.intl.formatToPlainString(N.t.dLurKS, { count: t });
        } else if (n > h.Z.Seconds.DAY) {
          let t = Math.round(n / h.Z.Seconds.DAY);
          return N.intl.formatToPlainString(N.t.LE8a2N, { count: t });
        } else if (n > h.Z.Seconds.HOUR) {
          let t = Math.round(n / h.Z.Seconds.HOUR);
          return N.intl.formatToPlainString(N.t.KULxVV, { count: t });
        } else {
          if (!(n > h.Z.Seconds.MINUTE))
            return N.intl.formatToPlainString(N.t["/w0Qp6"], { count: n });
          let t = Math.round(n / h.Z.Seconds.MINUTE);
          return N.intl.formatToPlainString(N.t.ws6rWl, { count: t });
        }
      }
      function w(t) {
        let {
          isCurrentUserKeyPersistent: e,
          isOtherUserKeyPersistent: n,
          otherUserNickname: r,
        } = t;
        if (e && n) return N.intl.format(N.t["FJN+kp"], { helpArticle: D() });
        if (e)
          return N.intl.format(N.t["p/9PGh"], {
            username: r,
            helpArticle: D(),
          });
        if (n) return N.intl.format(N.t["qT5z8/"], { helpArticle: D() });
        else return N.intl.format(N.t["6JLy+v"], { helpArticle: D() });
      }
      async function V(t) {
        let e = s.default.getStaticAuthSessionId();
        return (
          o()(
            null != e,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await f.Z.getMLSSigningKey(e, t)
        );
      }
      function b(t) {
        let e = r.fromByteArray(new Uint8Array(t));
        return "data:application/octet-stream;base64,".concat(e);
      }
      async function k(t, e, n) {
        try {
          return (
            await c.tn.post({
              url: m.ANM.VOICE_MATCH_PUBLIC_KEY(t),
              body: { public_key: b(e), key_version: n },
            })
          ).body.is_match;
        } catch (t) {
          throw (T.Z.captureException(t), t);
        }
      }
      async function Y(t) {
        let { key: e, signature: n } = await V(t);
        try {
          await c.tn.put({
            url: m.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: b(e), signature: b(n), key_version: t },
          }),
            p.Z.addUploadedKeyVersion(t);
        } catch (t) {
          throw (T.Z.captureException(t), t);
        }
      }
      function v(t) {
        return R.Z.getUploadedKeyVersionsCached().includes(t);
      }
      async function x(t) {
        !v(t) && (await Y(t));
      }
      async function B(t) {
        if (!v(t)) return await Y(t), !0;
        let e = s.default.getId(),
          { key: n } = await V(t),
          r = await k(e, n, t);
        return !r && (0, U.KA)(t), r;
      }
      function W(t, e) {
        let [n, r] = e;
        if (!n.isUserConnected(t)) return !1;
        let i = n.getSecureFramesRosterMapEntry(t);
        if (null == i) return !1;
        let o = new Uint8Array(i);
        for (let e of r.getAllActiveStreamKeys()) {
          if (!r.isUserConnected(e, t)) continue;
          let n = _.Z.getSecureFramesRosterMapEntry(e, t);
          if (null == n) return !0;
          let i = new Uint8Array(n);
          for (let t = 0; t < o.length; t++) if (o[t] !== i[t]) return !0;
        }
        return !1;
      }
      function G(t) {
        let { userId: e, channelId: n, nickname: r } = t;
        (0, U.CW)({
          userId: e,
          channelId: n,
          keyVersion: C.GB,
          reason: C.Xe.OTHER_USER_INCONSISTENT_KEYS,
        }),
          E.Z.show({
            title: N.intl.string(N.t.mznLyc),
            body: N.intl.format(N.t.WY6IKS, { username: r }),
          });
      }
      function z(t) {
        let { userId: e, guildId: n, channelId: r } = t;
        if (!W(e, [d.Z, _.Z])) return !0;
        {
          let t = S.default.getUser(e),
            i = g.ZP.getName(n, r, t);
          return G({ userId: e, channelId: r, nickname: i }), !1;
        }
      }
    },
    438882: function (t, e, n) {
      n.d(e, {
        D: function () {
          return r;
        },
      }),
        n(411104);
      function r(t, e, n) {
        if (t.byteLength < e)
          throw Error(
            "data.byteLength must be greater than or equal to desiredLength",
          );
        if (e % n != 0)
          throw Error("desiredLength must be a multiple of groupSize");
        if (n > 8)
          throw Error("groupSize must be less than or equal to ".concat(8));
        let r = BigInt(10 ** n),
          i = "";
        for (let o = 0; o < e; o += n) {
          let e = BigInt(0);
          for (let r = n; r > 0; --r) e = (e << 8n) | BigInt(t[o + (n - r)]);
          (e %= r), (i += e.toString().padStart(n, "0"));
        }
        return i;
      }
    },
    309651: function (t, e, n) {
      n.d(e, {
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
      async function r(t, e, n) {
        if (0 !== t) throw Error("unsupported fingerprint format version");
        if (0 === e.byteLength) throw Error("zero-length key");
        if (0 === n.length) throw Error("zero-length user ID");
        let r = BigInt(n);
        if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
        let i = new Uint8Array(2 + e.byteLength + 8);
        i.set(e, 2);
        let o = new DataView(i.buffer);
        return o.setUint16(0, t), o.setBigUint64(2 + e.byteLength, r), i;
      }
    },
    256147: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      });
      var r = n(250683);
      function i(t) {
        return r.fromByteArray(t);
      }
    },
    926188: function (t, e, n) {
      n.d(e, {
        I: function () {
          return c;
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
        i = n(802667);
      let o = Uint8Array.of(
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
      function a(t, e) {
        for (let n = 0; n < t.length && n < e.length; n++)
          if (t[n] != e[n]) return t[n] - e[n];
        return t.length - e.length;
      }
      async function c(t, e, n, c, l) {
        let E = await Promise.all([(0, r.x)(t, e, n), (0, r.x)(t, c, l)]);
        E.sort(a);
        let s = new Uint8Array(E[0].byteLength + E[1].byteLength);
        return (
          s.set(E[0], 0),
          s.set(E[1], E[0].byteLength),
          new Uint8Array(await (0, i.E)(s, o, u))
        );
      }
    },
    253135: function (t, e, n) {
      n.d(e, {
        Dq: function () {
          return r.D;
        },
        Il: function () {
          return i.I;
        },
        MK: function () {
          return o.M;
        },
      });
      var r = n(438882);
      n(309651);
      var i = n(926188),
        o = n(256147);
    },
  },
]);
//# sourceMappingURL=0a1a677405e17c209e6e.js.map
