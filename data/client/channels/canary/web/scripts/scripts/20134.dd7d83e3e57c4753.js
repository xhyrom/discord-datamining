"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20134"],
  {
    936388(e, t, n) {
      n.d(t, { A: () => A });
      var r = n(228366),
        i = n(157559),
        a = n(956793),
        o = n(845584),
        l = n(495544),
        u = n(734057),
        c = n(977997),
        E = n(144485),
        s = n(814278);
      n(603266);
      var d = n(652215),
        _ = n(985018);
      async function f(e, t) {
        if (e) {
          r.h.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, s.to)(1), t?.();
          } catch (t) {
            let e = new o.LG(t);
            r.h.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              i.A.show({
                title: _.intl.string(_.t.R0RpRX),
                body: e.getAnyErrorMessage() ?? _.intl.string(_.t.eAn6z2),
              });
          }
        } else
          r.h.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          }),
            t?.();
      }
      let A = {
        clearUploadedKeyVersions: function () {
          r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
        },
        updatePersistentCodesEnabled: async function e(e) {
          let t,
            n,
            r =
              ((t = c.A.getVoiceStateForUser(l.default.getId())),
              (n = u.A.getChannel(t?.channelId)),
              l.default.getSessionId() === t?.sessionId &&
              null != n &&
              n.type !== d.rbe.GUILD_STAGE_VOICE
                ? n.id
                : null);
          null != r
            ? E.A.openSecureFramesUpdateConfirmation({
                title: e
                  ? _.intl.string(_.t.DRFN1B)
                  : _.intl.string(_.t.q29xJz),
                subtitle: e
                  ? _.intl.string(_.t.y015ZY)
                  : _.intl.string(_.t.E66FQn),
                confirmText: _.intl.string(_.t.aTuFYT),
                onConfirm: async () => {
                  await f(e, () => {
                    a.default.disconnect(), a.default.selectVoiceChannel(r);
                  });
                },
              })
            : await f(e);
        },
        addUploadedKeyVersion: function (e) {
          r.h.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
            keyVersion: e,
          });
        },
        createSecureFramesVerifiedKey: function (e, t) {
          r.h.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: t,
          });
        },
        deleteSecureFramesVerifiedKey: function (e, t) {
          r.h.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: t,
          });
        },
        deleteSecureFramesUserVerifiedKeys: function (e) {
          r.h.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: e,
          });
        },
        createSecureFramesTransientKey: function (e, t) {
          r.h.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: e,
            key: t,
          });
        },
        deleteSecureFramesTransientKey: function (e) {
          r.h.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
            userId: e,
          });
        },
      };
    },
    603266(e, t, n) {
      n.d(t, { Rj: () => o, m4: () => a });
      var r,
        i,
        a =
          (((r = {}).MATCH = "match"),
          (r.OTHER_USER_ALREADY_VERIFIED = "other_user_already_verified"),
          (r.OTHER_USER_INCONSISTENT_KEYS = "other_user_inconsistent_keys"),
          (r.FINGERPRINT_MISMATCH = "fingerprint_mismatch"),
          (r.UNABLE_TO_VERIFY = "unable_to_verify"),
          (r.OTHER_USER_DISCONNECTED = "other_user_disconnected"),
          (r.CURRENT_USER_DISCONNECTED = "current_user_disconnected"),
          r),
        o =
          (((i = {}).RTC_DEBUG_PANEL = "rtc_debug_panel"),
          (i.RTC_SECURE_FRAMES = "rtc_secure_frames"),
          i);
    },
    144485(e, t, n) {
      n.d(t, { A: () => c });
      var r = n(627968);
      n(64700);
      var i = n(314116),
        a = n(192308),
        o = n(231723),
        l = n(652215),
        u = n(985018);
      let c = {
        openSecureFramesStreamVerification: function (e, t) {
          (0, a.openModalLazy)(async () => {
            let i = (
              await Promise.all([
                n.e("86024"),
                n.e("60142"),
                n.e("91589"),
                n.e("46115"),
              ]).then(n.bind(n, 773262))
            ).default;
            return (n) => (0, r.jsx)(i, { streamKey: e, channelId: t, ...n });
          });
        },
        openSecureFramesUserVerificationModal: function (e, t, i, u) {
          i() &&
            (0, a.openModalLazy)(
              async () => {
                let i = (
                  await Promise.all([
                    n.e("86024"),
                    n.e("60142"),
                    n.e("17487"),
                    n.e("91589"),
                    n.e("44264"),
                    n.e("30936"),
                    n.e("40623"),
                  ]).then(n.bind(n, 912018))
                ).default;
                return (n) => (0, r.jsx)(i, { userId: e, channelId: t, ...n });
              },
              { contextKey: u === l.BRT.POPOUT ? o.KX : o.SY },
            );
        },
        openSecureFramesUpdateConfirmation: function (e) {
          let {
            title: t,
            subtitle: n,
            confirmText: r = u.intl.string(u.t["cY+Oob"]),
            onConfirm: a,
          } = e;
          (0, i.A)({ title: t, subtitle: n, confirmText: r, onConfirm: a });
        },
        handleSecureFramesUserVerificationLink: function (e) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    798286(e, t, n) {
      n.d(t, {
        HJ: () => E,
        Hb: () => _,
        Hg: () => c,
        Jk: () => h,
        XS: () => y,
        YT: () => S,
        cw: () => s,
        k0: () => f,
        kF: () => d,
        y5: () => A,
      });
      var r = n(58149),
        i = n(47675),
        a = n(734057),
        o = n(954571),
        l = n(652215);
      function u(e) {
        return a.A.getChannel(e)?.guild_id;
      }
      function c(e) {
        let { channelId: t, selectedTab: n } = e;
        r.Ay.trackWithMetadata(l.HAw.RTC_PANEL_VIEWED, {
          channel_id: t,
          guild_id: u(t),
          selected_tab: n,
        });
      }
      function E(e) {
        let { channelId: t, userId: n } = e;
        r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: t,
          guild_id: u(t),
          ...(0, i.UI)({ userId: n }),
        });
      }
      function s(e) {
        let { channelId: t, userId: n, analyticsLocation: a } = e;
        r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFIED, {
          channel_id: t,
          guild_id: u(t),
          location: a,
          ...(0, i.UI)({ userId: n }),
        });
      }
      function d(e) {
        let { channelId: t, userId: n, keyVersion: a, reason: o } = e;
        r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_FAILED, {
          channel_id: t,
          guild_id: u(t),
          failure_reason: o,
          key_version: `${a}`,
          ...(0, i.UI)({ userId: n }),
        });
      }
      function _(e) {
        let { channelId: t, userId: n } = e;
        r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
          ...(0, i.UI)({ userId: n }),
        });
      }
      function f(e) {
        let { channelId: t } = e;
        r.Ay.trackWithMetadata(l.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
        });
      }
      function A(e) {
        let { channelId: t } = e;
        r.Ay.trackWithMetadata(l.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
        });
      }
      function S() {
        o.default.track(l.HAw.E2EE_SETTINGS_USER_DELETE);
      }
      function h() {
        o.default.track(l.HAw.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function y(e) {
        o.default.track(l.HAw.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: `${e}`,
        });
      }
    },
    814278(e, t, n) {
      n.d(t, {
        A5: () => G,
        Dh: () => b,
        Lu: () => F,
        Vw: () => z,
        W0: () => V,
        Z1: () => K,
        aW: () => w,
        bk: () => L,
        dc: () => N,
        iO: () => Y,
        kj: () => M,
        m8: () => W,
        tC: () => O,
        to: () => B,
        z4: () => x,
      }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var r = n(827762),
        i = n(284009),
        a = n.n(i),
        o = n(989349),
        l = n.n(o),
        u = n(636537),
        c = n(149597),
        E = n(157559),
        s = n(495544),
        d = n(51760),
        _ = n(763827),
        f = n(116956),
        A = n(287809),
        S = n(927813),
        h = n(975571),
        y = n(562153),
        g = n(38405),
        I = n(427262),
        R = n(936388),
        T = n(714763),
        p = n(144485),
        U = n(798286),
        m = n(603266),
        C = n(652215),
        D = n(985018);
      function w() {
        return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
      }
      function F() {
        return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
      }
      function N() {
        return h.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION);
      }
      function L(e, t, n, r, i) {
        n
          ? R.A.createSecureFramesVerifiedKey(e, t)
          : R.A.createSecureFramesTransientKey(e, t),
          (0, U.cw)({ channelId: r, userId: e, analyticsLocation: i });
      }
      function b(e, t, n) {
        if (n) {
          let n = (0, c.uo)(new Uint8Array(t));
          R.A.deleteSecureFramesVerifiedKey(e, n);
        } else R.A.deleteSecureFramesTransientKey(e);
      }
      function V(e, t) {
        p.A.openSecureFramesUpdateConfirmation({
          title: D.intl.string(D.t.hdL152),
          subtitle: D.intl.string(D.t["8VGYKg"]),
          onConfirm: () => {
            R.A.deleteSecureFramesVerifiedKey(e, t), (0, U.Jk)();
          },
        });
      }
      function M(e) {
        let t = A.default.getUser(e),
          n = I.Ay.getName(t);
        p.A.openSecureFramesUpdateConfirmation({
          title: D.intl.formatToPlainString(D.t.K6NGBy, { username: n }),
          subtitle: D.intl.string(D.t.F1BQK3),
          onConfirm: () => {
            R.A.deleteSecureFramesUserVerifiedKeys(e), (0, U.YT)();
          },
        });
      }
      function O(e) {
        let t = l()(e),
          n = l()().diff(t, "s");
        if (n > 12 * S.A.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * S.A.Seconds.DAYS_30));
          return D.intl.formatToPlainString(D.t.F1wqkD, { count: e });
        }
        if (n > S.A.Seconds.DAYS_30) {
          let e = Math.round(n / S.A.Seconds.DAYS_30);
          return D.intl.formatToPlainString(D.t["iT+b+2"], { count: e });
        }
        if (n > 7 * S.A.Seconds.DAY) {
          let e = Math.round(n / (7 * S.A.Seconds.DAY));
          return D.intl.formatToPlainString(D.t.dLurKZ, { count: e });
        }
        if (n > S.A.Seconds.DAY) {
          let e = Math.round(n / S.A.Seconds.DAY);
          return D.intl.formatToPlainString(D.t.LE8a2H, { count: e });
        }
        if (n > S.A.Seconds.HOUR) {
          let e = Math.round(n / S.A.Seconds.HOUR);
          return D.intl.formatToPlainString(D.t.KULxVS, { count: e });
        } else {
          if (!(n > S.A.Seconds.MINUTE))
            return D.intl.formatToPlainString(D.t["/w0Qpw"], { count: n });
          let e = Math.round(n / S.A.Seconds.MINUTE);
          return D.intl.formatToPlainString(D.t.ws6rWq, { count: e });
        }
      }
      function K(e) {
        let {
          isCurrentUserKeyPersistent: t,
          isOtherUserKeyPersistent: n,
          otherUserNickname: r,
        } = e;
        return t && n
          ? D.intl.format(D.t["FJN+kh"], { helpArticle: w() })
          : t
            ? D.intl.format(D.t["p/9PGp"], { username: r, helpArticle: w() })
            : n
              ? D.intl.format(D.t.qT5z87, { helpArticle: w() })
              : D.intl.format(D.t["6JLy+i"], { helpArticle: w() });
      }
      async function k(e) {
        let t = s.default.getStaticAuthSessionId();
        return (
          a()(
            null != t,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await d.Ay.getMLSSigningKey(t, e)
        );
      }
      function P(e) {
        let t = r.fromByteArray(new Uint8Array(e));
        return `data:application/octet-stream;base64,${t}`;
      }
      async function Y(e, t, n) {
        try {
          return (
            await u.Bo.post({
              url: C.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: P(t), key_version: n },
              rejectWithError: !1,
            })
          ).body.is_match;
        } catch (e) {
          throw (g.A.captureException(e), e);
        }
      }
      async function H(e) {
        let { key: t, signature: n } = await k(e);
        try {
          await u.Bo.put({
            url: C.Rsh.VOICE_PUBLIC_KEYS(),
            body: { public_key: P(t), signature: P(n), key_version: e },
            rejectWithError: !1,
          }),
            R.A.addUploadedKeyVersion(e);
        } catch (e) {
          throw (g.A.captureException(e), e);
        }
      }
      function v(e) {
        return T.A.getUploadedKeyVersionsCached().includes(e);
      }
      async function B(e) {
        v(e) || (await H(e));
      }
      async function G(e) {
        if (!v(e)) return await H(e), !0;
        let t = s.default.getId(),
          { key: n } = await k(e),
          r = await Y(t, n, e);
        return r || (0, U.XS)(e), r;
      }
      function W(e, t) {
        let [n, r] = t;
        if (!n.isUserConnected(e)) return !1;
        let i = n.getSecureFramesRosterMapEntry(e);
        if (null == i) return !1;
        let a = new Uint8Array(i);
        for (let t of r.getAllActiveStreamKeys()) {
          if (!r.isUserConnected(t, e)) continue;
          let n = f.A.getSecureFramesRosterMapEntry(t, e);
          if (null == n) return !0;
          let i = new Uint8Array(n);
          for (let e = 0; e < a.length; e++) if (a[e] !== i[e]) return !0;
        }
        return !1;
      }
      function z(e) {
        let { userId: t, channelId: n, nickname: r } = e;
        (0, U.kF)({
          userId: t,
          channelId: n,
          keyVersion: 1,
          reason: m.m4.OTHER_USER_INCONSISTENT_KEYS,
        }),
          E.A.show({
            title: D.intl.string(D.t.mznLyR),
            body: D.intl.format(D.t.WY6IKb, { username: r }),
          });
      }
      function x(e) {
        let { userId: t, guildId: n, channelId: r } = e;
        if (!W(t, [_.A, f.A])) return !0;
        {
          let e = A.default.getUser(t),
            i = y.Ay.getName(n, r, e);
          return z({ userId: t, channelId: r, nickname: i }), !1;
        }
      }
    },
    259374(e, t, n) {
      n.d(t, { k: () => o });
      var r = n(17928),
        i = n(734057),
        a = n(763827);
      function o(e) {
        let { channelId: t } = e;
        return (0, r.bG)(
          [a.A, i.A],
          () =>
            (function (e) {
              let [t, n] =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [a.A, i.A];
              if (null == e || t.getChannelId() !== e) return !1;
              let r = n.getChannel(e);
              if (null == r || r.isGuildStageVoice()) return !1;
              let o = t.getSecureFramesState()?.version;
              return null != o && 0 !== o;
            })(t, [a.A, i.A]),
          [t],
        );
      }
      n(603266);
    },
    149597(e, t, n) {
      n.d(t, { DB: () => r.DB, _x: () => r._x, uo: () => r.uo });
      var r = n(864507);
    },
    243826(e, t, n) {
      n.d(t, { D: () => r });
      function r(e, t, n) {
        if (e.byteLength < t)
          throw Error(
            "data.byteLength must be greater than or equal to desiredLength",
          );
        if (t % n != 0)
          throw Error("desiredLength must be a multiple of groupSize");
        if (n > 8) throw Error("groupSize must be less than or equal to 8");
        let r = BigInt(10 ** n),
          i = "";
        for (let a = 0; a < t; a += n) {
          let t = BigInt(0);
          for (let r = n; r > 0; --r) {
            let i = e[a + (n - r)];
            if (void 0 === i)
              throw Error("Out of bounds access from data array");
            t = (t << 8n) | BigInt(i);
          }
          (t %= r), (i += t.toString().padStart(n, "0"));
        }
        return i;
      }
    },
    510036(e, t, n) {
      n.d(t, { X: () => r }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      async function r(e, t, n) {
        if (0 !== e) throw Error("unsupported fingerprint format version");
        if (0 === t.byteLength) throw Error("zero-length key");
        if (0 === n.length) throw Error("zero-length user ID");
        let r = BigInt(n);
        if (r < 0n || r >= 2n ** 64n) throw Error("user ID out of range");
        let i = new Uint8Array(2 + t.byteLength + 8);
        i.set(t, 2);
        let a = new DataView(i.buffer);
        return a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, r), i;
      }
    },
    601557(e, t, n) {
      n.d(t, { _: () => u }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var r = n(510036),
        i = n(495142);
      let a = Uint8Array.of(
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
      function l(e, t) {
        for (let n = 0; n < e.length && n < t.length; n++)
          if (e[n] != t[n]) return e[n] - t[n];
        return e.length - t.length;
      }
      async function u(e, t, n, u, c) {
        let E = await Promise.all([(0, r.X)(e, t, n), (0, r.X)(e, u, c)]);
        E.sort(l);
        let s = new Uint8Array(E[0].byteLength + E[1].byteLength);
        return (
          s.set(E[0], 0),
          s.set(E[1], E[0].byteLength),
          new Uint8Array(await (0, i.Q)(s, a, o))
        );
      }
    },
  },
]);
//# sourceMappingURL=20134.dd7d83e3e57c4753.js.map
