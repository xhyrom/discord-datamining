"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79107"],
  {
    718629: function (t, n, e) {
      var r = e(570140),
        i = e(668781),
        u = e(287734),
        o = e(881052),
        a = e(314897),
        l = e(592125),
        c = e(979651),
        s = e(352954),
        d = e(630759),
        E = e(760373),
        f = e(981631),
        _ = e(388032);
      async function S(t, n) {
        if (t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: t,
          });
          try {
            await (0, d.om)(E.GB), null == n || n();
          } catch (n) {
            var e;
            let t = new o.Hx(n);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              i.Z.show({
                title: _.intl.string(_.t.R0RpRU),
                body:
                  null !== (e = t.getAnyErrorMessage()) && void 0 !== e
                    ? e
                    : _.intl.string(_.t.eAn6z8),
              });
          }
        } else
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: t,
          }),
            null == n || n();
      }
      async function h(t) {
        let n = (function () {
          let t = c.Z.getVoiceStateForUser(a.default.getId()),
            n = l.Z.getChannel(null == t ? void 0 : t.channelId);
          return a.default.getSessionId() ===
            (null == t ? void 0 : t.sessionId) &&
            null != n &&
            n.type !== f.d4z.GUILD_STAGE_VOICE
            ? n.id
            : null;
        })();
        null != n
          ? s.Z.openSecureFramesUpdateConfirmation({
              title: t ? _.intl.string(_.t.DRFN1N) : _.intl.string(_.t.q29xJy),
              subtitle: t
                ? _.intl.string(_.t.y015ZW)
                : _.intl.string(_.t.E66FQk),
              confirmText: _.intl.string(_.t.aTuFYW),
              onConfirm: async () => {
                await S(t, () => {
                  u.default.disconnect(), u.default.selectVoiceChannel(n);
                });
              },
            })
          : await S(t);
      }
      n.Z = {
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
        createSecureFramesVerifiedKey: function (t, n) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: t,
            key: n,
          });
        },
        deleteSecureFramesVerifiedKey: function (t, n) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: t,
            serializedKey: n,
          });
        },
        deleteSecureFramesUserVerifiedKeys: function (t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: t,
          });
        },
        createSecureFramesTransientKey: function (t, n) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: t,
            key: n,
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
    760373: function (t, n, e) {
      var r, i, u, o;
      e.d(n, {
        Eg: function () {
          return f;
        },
        GB: function () {
          return _;
        },
        KN: function () {
          return d;
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
          return l;
        },
        ak: function () {
          return E;
        },
        iQ: function () {
          return s;
        },
        tu: function () {
          return i;
        },
        y6: function () {
          return a;
        },
      });
      let a = 5,
        l = 30,
        c = 3,
        s = 5,
        d = 45,
        E = 3;
      ((u = r || (r = {})).MATCH = "match"),
        (u.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
        (u.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys"),
        (u.FINGERPRINT_MISMATCH = "fingerprint_mismatch"),
        (u.UNABLE_TO_VERIFY = "unable_to_verify"),
        (u.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
        (u.CURRENT_USER_DISCONNECTED = "current_user_disconnected");
      let f = 0;
      ((o = i || (i = {})).RTC_DEBUG_PANEL = "rtc_debug_panel"),
        (o.RTC_SECURE_FRAMES = "rtc_secure_frames");
      let _ = 1,
        S = 0;
    },
    352954: function (t, n, e) {
      e(411104);
      var r = e(200651);
      e(192379);
      var i = e(481060),
        u = e(981631),
        o = e(388032);
      n.Z = {
        openSecureFramesStreamVerification: function (t, n) {
          (0, i.openModalLazy)(async () => {
            let i = (await e.e("94904").then(e.bind(e, 660250))).default;
            return (e) => (0, r.jsx)(i, { streamKey: t, channelId: n, ...e });
          });
        },
        openSecureFramesUserVerificationModal: function (t, n, o, a) {
          o() &&
            (0, i.openModalLazy)(
              async () => {
                let i = (await e.e("33397").then(e.bind(e, 963410))).default;
                return (e) => (0, r.jsx)(i, { userId: t, channelId: n, ...e });
              },
              {
                contextKey:
                  a === u.IlC.POPOUT
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              },
            );
        },
        openSecureFramesUpdateConfirmation: function (t) {
          let {
            title: n,
            subtitle: u,
            confirmText: a = o.intl.string(o.t["cY+Ooa"]),
            onConfirm: l,
          } = t;
          (0, i.openModalLazy)(async () => {
            let { ConfirmModal: t } = await Promise.resolve().then(
              e.bind(e, 481060),
            );
            return (e) =>
              (0, r.jsx)(t, {
                header: n,
                confirmText: a,
                cancelText: o.intl.string(o.t["ETE/oK"]),
                onConfirm: l,
                ...e,
                children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: u,
                }),
              });
          });
        },
        handleSecureFramesUserVerificationLink: function (t) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    571826: function (t, n, e) {
      e.d(n, {
        CW: function () {
          return E;
        },
        DF: function () {
          return h;
        },
        KA: function () {
          return y;
        },
        M1: function () {
          return d;
        },
        PM: function () {
          return _;
        },
        Pn: function () {
          return T;
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
      var r = e(367907),
        i = e(221292),
        u = e(592125),
        o = e(626135),
        a = e(981631);
      function l(t) {
        var n;
        return null === (n = u.Z.getChannel(t)) || void 0 === n
          ? void 0
          : n.guild_id;
      }
      function c(t) {
        let { channelId: n, selectedTab: e } = t;
        r.ZP.trackWithMetadata(a.rMx.RTC_PANEL_VIEWED, {
          channel_id: n,
          guild_id: l(n),
          selected_tab: e,
        });
      }
      function s(t) {
        let { channelId: n, userId: e } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: n,
          guild_id: l(n),
          ...(0, i.QN)({ userId: e }),
        });
      }
      function d(t) {
        let { channelId: n, userId: e, analyticsLocation: u } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFIED, {
          channel_id: n,
          guild_id: l(n),
          location: u,
          ...(0, i.QN)({ userId: e }),
        });
      }
      function E(t) {
        let { channelId: n, userId: e, keyVersion: u, reason: o } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_FAILED, {
          channel_id: n,
          guild_id: l(n),
          failure_reason: o,
          key_version: "".concat(u),
          ...(0, i.QN)({ userId: e }),
        });
      }
      function f(t) {
        let { channelId: n, userId: e } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: n,
          guild_id: l(n),
          ...(0, i.QN)({ userId: e }),
        });
      }
      function _(t) {
        let { channelId: n } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: n,
          guild_id: l(n),
        });
      }
      function S(t) {
        let { channelId: n } = t;
        r.ZP.trackWithMetadata(a.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
          channel_id: n,
          guild_id: l(n),
        });
      }
      function h() {
        o.default.track(a.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function T() {
        o.default.track(a.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function y(t) {
        o.default.track(a.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(t),
        });
      }
    },
    630759: function (t, n, e) {
      e.d(n, {
        J6: function () {
          return v;
        },
        LO: function () {
          return P;
        },
        TQ: function () {
          return O;
        },
        UB: function () {
          return B;
        },
        ZU: function () {
          return w;
        },
        Zn: function () {
          return F;
        },
        aZ: function () {
          return D;
        },
        bo: function () {
          return b;
        },
        fz: function () {
          return H;
        },
        kK: function () {
          return V;
        },
        lg: function () {
          return W;
        },
        om: function () {
          return Y;
        },
        pL: function () {
          return Z;
        },
        uV: function () {
          return M;
        },
        uX: function () {
          return G;
        },
      }),
        e(518263),
        e(970173),
        e(520712),
        e(268111),
        e(941497),
        e(32026),
        e(480839),
        e(744285),
        e(492257),
        e(873817),
        e(47120);
      var r = e(250683),
        i = e(512722),
        u = e.n(i),
        o = e(913527),
        a = e.n(o),
        l = e(544891),
        c = e(253135),
        s = e(668781),
        d = e(314897),
        E = e(131951),
        f = e(19780),
        _ = e(959457),
        S = e(594174),
        h = e(70956),
        T = e(63063),
        y = e(5192),
        g = e(960048),
        A = e(51144),
        I = e(718629),
        p = e(615830),
        C = e(352954),
        N = e(571826),
        R = e(760373),
        m = e(981631),
        U = e(388032);
      function M() {
        return T.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
      }
      function D() {
        return T.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
      }
      function Z() {
        return T.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
      }
      function O(t, n, e, r, i) {
        e
          ? I.Z.createSecureFramesVerifiedKey(t, n)
          : I.Z.createSecureFramesTransientKey(t, n),
          (0, N.M1)({ channelId: r, userId: t, analyticsLocation: i });
      }
      function P(t, n, e) {
        if (e) {
          let e = (0, c.MK)(new Uint8Array(n));
          I.Z.deleteSecureFramesVerifiedKey(t, e);
        } else I.Z.deleteSecureFramesTransientKey(t);
      }
      function w(t, n) {
        C.Z.openSecureFramesUpdateConfirmation({
          title: U.intl.string(U.t["hdL15+"]),
          subtitle: U.intl.string(U.t["8VGYKi"]),
          onConfirm: () => {
            I.Z.deleteSecureFramesVerifiedKey(t, n), (0, N.Pn)();
          },
        });
      }
      function F(t) {
        let n = S.default.getUser(t),
          e = A.ZP.getName(n);
        C.Z.openSecureFramesUpdateConfirmation({
          title: U.intl.formatToPlainString(U.t.K6NGBw, { username: e }),
          subtitle: U.intl.string(U.t.F1BQKy),
          onConfirm: () => {
            I.Z.deleteSecureFramesUserVerifiedKeys(t), (0, N.DF)();
          },
        });
      }
      function b(t) {
        let n = a()(t),
          e = a()().diff(n, "s");
        if (e > 12 * h.Z.Seconds.DAYS_30) {
          let t = Math.round(e / (12 * h.Z.Seconds.DAYS_30));
          return U.intl.formatToPlainString(U.t.F1wqkJ, { count: t });
        }
        if (e > h.Z.Seconds.DAYS_30) {
          let t = Math.round(e / h.Z.Seconds.DAYS_30);
          return U.intl.formatToPlainString(U.t["iT+b+/"], { count: t });
        }
        if (e > 7 * h.Z.Seconds.DAY) {
          let t = Math.round(e / (7 * h.Z.Seconds.DAY));
          return U.intl.formatToPlainString(U.t.dLurKS, { count: t });
        } else if (e > h.Z.Seconds.DAY) {
          let t = Math.round(e / h.Z.Seconds.DAY);
          return U.intl.formatToPlainString(U.t.LE8a2N, { count: t });
        } else if (e > h.Z.Seconds.HOUR) {
          let t = Math.round(e / h.Z.Seconds.HOUR);
          return U.intl.formatToPlainString(U.t.KULxVV, { count: t });
        } else {
          if (!(e > h.Z.Seconds.MINUTE))
            return U.intl.formatToPlainString(U.t["/w0Qp6"], { count: e });
          let t = Math.round(e / h.Z.Seconds.MINUTE);
          return U.intl.formatToPlainString(U.t.ws6rWl, { count: t });
        }
      }
      function V(t) {
        let {
          isCurrentUserKeyPersistent: n,
          isOtherUserKeyPersistent: e,
          otherUserNickname: r,
        } = t;
        if (n && e) return U.intl.format(U.t["FJN+kp"], { helpArticle: M() });
        if (n)
          return U.intl.format(U.t["p/9PGh"], {
            username: r,
            helpArticle: M(),
          });
        if (e) return U.intl.format(U.t["qT5z8/"], { helpArticle: M() });
        else return U.intl.format(U.t["6JLy+v"], { helpArticle: M() });
      }
      async function K(t) {
        let n = d.default.getStaticAuthSessionId();
        return (
          u()(
            null != n,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await E.Z.getMLSSigningKey(n, t)
        );
      }
      function L(t) {
        let n = r.fromByteArray(new Uint8Array(t));
        return "data:application/octet-stream;base64,".concat(n);
      }
      async function v(t, n, e) {
        try {
          return (
            await l.tn.post({
              url: m.ANM.VOICE_MATCH_PUBLIC_KEY(t),
              body: { public_key: L(n), key_version: e },
            })
          ).body.is_match;
        } catch (t) {
          throw (g.Z.captureException(t), t);
        }
      }
      async function k(t) {
        let { key: n, signature: e } = await K(t);
        try {
          await l.tn.put({
            url: m.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: L(n), signature: L(e), key_version: t },
          }),
            I.Z.addUploadedKeyVersion(t);
        } catch (t) {
          throw (g.Z.captureException(t), t);
        }
      }
      function x(t) {
        return p.Z.getUploadedKeyVersionsCached().includes(t);
      }
      async function Y(t) {
        !x(t) && (await k(t));
      }
      async function G(t) {
        if (!x(t)) return await k(t), !0;
        let n = d.default.getId(),
          { key: e } = await K(t),
          r = await v(n, e, t);
        return !r && (0, N.KA)(t), r;
      }
      function B(t, n) {
        let [e, r] = n;
        if (!e.isUserConnected(t)) return !1;
        let i = e.getSecureFramesRosterMapEntry(t);
        if (null == i) return !1;
        let u = new Uint8Array(i);
        for (let n of r.getAllActiveStreamKeys()) {
          if (!r.isUserConnected(n, t)) continue;
          let e = _.Z.getSecureFramesRosterMapEntry(n, t);
          if (null == e) return !0;
          let i = new Uint8Array(e);
          for (let t = 0; t < u.length; t++) if (u[t] !== i[t]) return !0;
        }
        return !1;
      }
      function W(t) {
        let { userId: n, channelId: e, nickname: r } = t;
        (0, N.CW)({
          userId: n,
          channelId: e,
          keyVersion: R.GB,
          reason: R.Xe.OTHER_USER_INCONSISTENT_KEYS,
        }),
          s.Z.show({
            title: U.intl.string(U.t.mznLyc),
            body: U.intl.format(U.t.WY6IKS, { username: r }),
          });
      }
      function H(t) {
        let { userId: n, guildId: e, channelId: r } = t;
        if (!B(n, [f.Z, _.Z])) return !0;
        {
          let t = S.default.getUser(n),
            i = y.ZP.getName(e, r, t);
          return W({ userId: n, channelId: r, nickname: i }), !1;
        }
      }
    },
    471253: function (t, n, e) {
      e.d(n, {
        DT: function () {
          return p;
        },
        Ef: function () {
          return m;
        },
        HO: function () {
          return R;
        },
        NZ: function () {
          return U;
        },
        Pq: function () {
          return N;
        },
        Q1: function () {
          return y;
        },
        RK: function () {
          return A;
        },
        _0: function () {
          return g;
        },
        hz: function () {
          return C;
        },
        yi: function () {
          return I;
        },
      });
      var r = e(512722),
        i = e.n(r),
        u = e(149765),
        o = e(544891),
        a = e(493683);
      e(749210);
      var l = e(911969),
        c = e(367907),
        s = e(944486),
        d = e(979651),
        E = e(700785),
        f = e(922482),
        _ = e(192079),
        S = e(706058),
        h = e(590415),
        T = e(981631);
      function y(t, n) {
        let e = t.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          n && (0, c.yw)(T.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, _.s$)(t) }),
          o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: t.id,
            },
          })
        );
      }
      function g(t, n) {
        let e = t.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(e, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: t.id,
            },
          })
        );
      }
      function A(t, n) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null == t ? void 0 : t.getGuildId();
        i()(null != r, "This channel cannot be guildless.");
        let u = d.Z.getVoiceStateForChannel(t.id);
        return (
          (0, h.gf)(u) === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, c.yw)(T.rMx.PROMOTED_TO_SPEAKER, { ...(0, _.s$)(t) }),
          o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(r),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: t.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function I(t) {
        let n = null == t ? void 0 : t.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function p(t, n, e) {
        let r = t.getGuildId();
        return (
          i()(null != r, "This channel cannot be guildless."),
          o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(r, n),
            body: { suppress: e, channel_id: t.id },
          })
        );
      }
      function C(t, n) {
        if (null == n || null == t) return;
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          p(n, t.id, !0),
          o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(e, t.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(t, n, e) {
        let r = t.getGuildId();
        i()(null != r, "Channel cannot be guildless");
        let o = t.permissionOverwrites[r],
          c = { id: r, type: l.BN.ROLE, allow: E.Hn, deny: E.Hn, ...o };
        e
          ? ((c.allow = u.IH(c.allow, n)), (c.deny = u.Od(c.deny, n)))
          : ((c.allow = u.Od(c.allow, n)), (c.deny = u.IH(c.deny, n))),
          a.Z.updatePermissionOverwrite(t.id, c);
      }
      async function R(t, n, e, r) {
        if ("" === n) return;
        s.Z.getVoiceChannelId() !== t.id && (0, f.TM)(t);
        let i = await (0, S.me)(t.id, n, e, r);
        return A(t, !1, !0), i;
      }
      async function m(t, n, e) {
        if ("" !== n) return await (0, S.Dk)(t.id, n, e);
      }
      async function U(t) {
        await (0, S.Ix)(t.id);
      }
    },
    192079: function (t, n, e) {
      e.d(n, {
        ER: function () {
          return d;
        },
        kk: function () {
          return E;
        },
        s$: function () {
          return f;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var r = e(19780),
        i = e(5192),
        u = e(700785),
        o = e(427679),
        a = e(157925),
        l = e(981631),
        c = e(71080),
        s = e(388032);
      function d(t, n, e, r) {
        let u = n[0],
          o = i.ZP.getName(t, e, u),
          a = null != r ? r : n.length;
        return 1 === a && null != u
          ? o
          : null == u
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: a })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: o, count: a - 1 });
      }
      function E(t, n) {
        switch (t) {
          case c.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case c.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case c.aC.MEMBER:
          case c.aC.ROLE:
            return n ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case c.aC.EMPTY_STATE:
        }
        return null;
      }
      function f(t) {
        let n = o.Z.getStageInstanceByChannel(t.id);
        return {
          channel_id: t.id,
          guild_id: t.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: r.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(l.Plq.REQUEST_TO_SPEAK, t)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (t, n, e) {
      e.d(n, {
        Dk: function () {
          return o;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return u;
        },
      });
      var r = e(544891),
        i = e(981631);
      async function u(t, n, e, u, o) {
        return (
          await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: t,
              topic: n,
              privacy_level: e,
              guild_scheduled_event_id: o,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function o(t, n, e) {
        return (
          await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(t),
            body: { topic: n, privacy_level: e },
          })
        ).body;
      }
      function a(t) {
        return r.tn.del(i.ANM.STAGE_INSTANCE(t));
      }
    },
    623633: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = e(442837),
        i = e(592125),
        u = e(944486);
      function o() {
        return (0, r.e7)([u.Z, i.Z], () => {
          let t = u.Z.getVoiceChannelId();
          if (null != t) {
            let n = i.Z.getChannel(t);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
          }
          return null;
        });
      }
    },
    438882: function (t, n, e) {
      e.d(n, {
        D: function () {
          return r;
        },
      }),
        e(411104);
      function r(t, n, e) {
        if (t.byteLength < n)
          throw Error(
            "data.byteLength must be greater than or equal to desiredLength",
          );
        if (n % e != 0)
          throw Error("desiredLength must be a multiple of groupSize");
        if (e > 8)
          throw Error("groupSize must be less than or equal to ".concat(8));
        let r = BigInt(10 ** e),
          i = "";
        for (let u = 0; u < n; u += e) {
          let n = BigInt(0);
          for (let r = e; r > 0; --r) n = (n << 8n) | BigInt(t[u + (e - r)]);
          (n %= r), (i += n.toString().padStart(e, "0"));
        }
        return i;
      }
    },
    309651: function (t, n, e) {
      e.d(n, {
        x: function () {
          return r;
        },
      }),
        e(411104),
        e(518263),
        e(970173),
        e(520712),
        e(268111),
        e(941497),
        e(32026),
        e(480839),
        e(744285),
        e(492257),
        e(873817);
      async function r(t, n, e) {
        if (0 !== t) throw Error("unsupported fingerprint format version");
        if (0 === n.byteLength) throw Error("zero-length key");
        if (0 === e.length) throw Error("zero-length user ID");
        let r = BigInt(e);
        if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
        let i = new Uint8Array(2 + n.byteLength + 8);
        i.set(n, 2);
        let u = new DataView(i.buffer);
        return u.setUint16(0, t), u.setBigUint64(2 + n.byteLength, r), i;
      }
    },
    256147: function (t, n, e) {
      e.d(n, {
        M: function () {
          return i;
        },
      });
      var r = e(250683);
      function i(t) {
        return r.fromByteArray(t);
      }
    },
    926188: function (t, n, e) {
      e.d(n, {
        I: function () {
          return l;
        },
      }),
        e(518263),
        e(970173),
        e(520712),
        e(268111),
        e(941497),
        e(32026),
        e(480839),
        e(744285),
        e(492257),
        e(873817),
        e(963458),
        e(47120);
      var r = e(309651),
        i = e(802667);
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
        o = { N: 16384, r: 8, p: 2, dkLen: 64 };
      function a(t, n) {
        for (let e = 0; e < t.length && e < n.length; e++)
          if (t[e] != n[e]) return t[e] - n[e];
        return t.length - n.length;
      }
      async function l(t, n, e, l, c) {
        let s = await Promise.all([(0, r.x)(t, n, e), (0, r.x)(t, l, c)]);
        s.sort(a);
        let d = new Uint8Array(s[0].byteLength + s[1].byteLength);
        return (
          d.set(s[0], 0),
          d.set(s[1], s[0].byteLength),
          new Uint8Array(await (0, i.E)(d, u, o))
        );
      }
    },
    253135: function (t, n, e) {
      e.d(n, {
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
      var r = e(438882);
      e(309651);
      var i = e(926188),
        u = e(256147);
    },
  },
]);
//# sourceMappingURL=1ee001930ad8067a0d41.js.map
