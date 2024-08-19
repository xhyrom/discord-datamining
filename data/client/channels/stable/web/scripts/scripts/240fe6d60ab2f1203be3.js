"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33397"],
  {
    963458: function (e, t, n) {
      var r = n(192291),
        i = n(22092),
        a = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var e = 0, t = arguments.length, n = new (a(this))(t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        i,
      );
    },
    718629: function (e, t, n) {
      var r = n(570140),
        i = n(668781),
        a = n(881052),
        o = n(352954),
        s = n(630759),
        u = n(651941),
        l = n(760373),
        c = n(689938);
      async function E(e) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, s.om)(l.GB);
          } catch (n) {
            var t;
            let e = new a.Hx(n);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              i.Z.show({
                title: c.Z.Messages.ERROR_GENERIC_TITLE,
                body:
                  null !== (t = e.getAnyErrorMessage()) && void 0 !== t
                    ? t
                    : c.Z.Messages.GENERIC_ERROR_BODY,
              });
          }
        } else {
          let t = () => {
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: e,
            }),
              r.Z.dispatch({ type: "SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE" });
          };
          u.Z.getUserIds().length > 0
            ? o.Z.openSecureFramesUpdateConfirmation({
                title: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
                subtitle:
                  c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
                onConfirm: t,
              })
            : t();
        }
      }
      t.Z = {
        updatePersistentCodesEnabled: E,
        addCurrentUserUploadedKeyVersionCached: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS",
            keyVersion: e,
          });
        },
        createVerifiedKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: t,
          });
        },
        deleteVerifiedKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: t,
          });
        },
        deleteAllUserVerifiedKeys: function (e) {
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
    571826: function (e, t, n) {
      n.d(t, {
        DF: function () {
          return _;
        },
        KA: function () {
          return y;
        },
        M1: function () {
          return E;
        },
        PM: function () {
          return f;
        },
        Pn: function () {
          return h;
        },
        Rq: function () {
          return c;
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
        a = n(592125),
        o = n(626135),
        s = n(981631);
      function u(e) {
        var t;
        return null === (t = a.Z.getChannel(e)) || void 0 === t
          ? void 0
          : t.guild_id;
      }
      function l(e) {
        let { channelId: t, selectedTab: n } = e;
        r.ZP.trackWithMetadata(s.rMx.RTC_PANEL_VIEWED, {
          channel_id: t,
          guild_id: u(t),
          selected_tab: n,
        });
      }
      function c(e) {
        let { channelId: t, userId: n } = e;
        r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: t,
          guild_id: u(t),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function E(e) {
        let { channelId: t, userId: n, analyticsLocation: a } = e;
        r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFIED, {
          channel_id: t,
          guild_id: u(t),
          location: a,
          ...(0, i.QN)({ userId: n }),
        });
      }
      function d(e) {
        let { channelId: t, userId: n } = e;
        r.ZP.trackWithMetadata(s.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function f(e) {
        let { channelId: t } = e;
        r.ZP.trackWithMetadata(s.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
        });
      }
      function _() {
        o.default.track(s.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function h() {
        o.default.track(s.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function y(e) {
        o.default.track(s.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(e),
        });
      }
    },
    630759: function (e, t, n) {
      n.d(t, {
        J6: function () {
          return Z;
        },
        LO: function () {
          return T;
        },
        TQ: function () {
          return C;
        },
        ZU: function () {
          return M;
        },
        Zn: function () {
          return m;
        },
        bo: function () {
          return U;
        },
        kK: function () {
          return w;
        },
        om: function () {
          return F;
        },
        uX: function () {
          return v;
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
        n(873817);
      var r = n(250683),
        i = n(512722),
        a = n.n(i),
        o = n(913527),
        s = n.n(o),
        u = n(544891),
        l = n(253135),
        c = n(314897),
        E = n(131951),
        d = n(594174),
        f = n(70956),
        _ = n(960048),
        h = n(51144),
        y = n(718629),
        I = n(615830),
        S = n(352954),
        g = n(571826),
        A = n(760373),
        R = n(981631),
        p = n(689938);
      function C(e, t, n, r, i) {
        n
          ? y.Z.createVerifiedKey(e, t)
          : y.Z.createSecureFramesTransientKey(e, t),
          (0, g.M1)({ channelId: r, userId: e, analyticsLocation: i });
      }
      function T(e, t, n) {
        if (n) {
          let n = (0, l.MK)(new Uint8Array(t));
          y.Z.deleteVerifiedKey(e, n);
        } else y.Z.deleteSecureFramesTransientKey(e);
      }
      function M(e, t) {
        S.Z.openSecureFramesUpdateConfirmation({
          title: p.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: p.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            y.Z.deleteVerifiedKey(e, t), (0, g.Pn)();
          },
        });
      }
      function m(e) {
        let t = d.default.getUser(e),
          n = h.ZP.getName(t);
        S.Z.openSecureFramesUpdateConfirmation({
          title: p.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: n },
          ),
          subtitle: p.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            y.Z.deleteAllUserVerifiedKeys(e), (0, g.DF)();
          },
        });
      }
      function U(e) {
        let t = s()(e),
          n = s()().diff(t, "s");
        if (n > 12 * f.Z.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * f.Z.Seconds.DAYS_30));
          return p.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (n > f.Z.Seconds.DAYS_30) {
          let e = Math.round(n / f.Z.Seconds.DAYS_30);
          return p.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (n > 7 * f.Z.Seconds.DAY) {
          let e = Math.round(n / (7 * f.Z.Seconds.DAY));
          return p.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (n > f.Z.Seconds.DAY) {
          let e = Math.round(n / f.Z.Seconds.DAY);
          return p.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (n > f.Z.Seconds.HOUR) {
          let e = Math.round(n / f.Z.Seconds.HOUR);
          return p.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(n > f.Z.Seconds.MINUTE))
            return p.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: n,
            });
          let e = Math.round(n / f.Z.Seconds.MINUTE);
          return p.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function w(e) {
        let {
          isCurrentUserPersistent: t,
          isOtherUserPersistent: n,
          otherUserNickname: r,
        } = e;
        if (t && n)
          return p.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: A.l4,
          });
        if (t)
          return p.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: A.l4 },
          );
        if (n)
          return p.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: A.l4 },
          );
        else
          return p.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: A.l4,
          });
      }
      async function b(e) {
        let t = c.default.getStaticAuthSessionId();
        return (
          a()(
            null != t,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await E.Z.getMLSSigningKey(t, e)
        );
      }
      function N(e) {
        let t = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(t);
      }
      async function Z(e, t, n) {
        try {
          return (
            await u.tn.post({
              url: R.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: N(t), key_version: n },
            })
          ).body.is_match;
        } catch (e) {
          throw (_.Z.captureException(e), e);
        }
      }
      async function D(e) {
        let { key: t, signature: n } = await b(e);
        try {
          await u.tn.put({
            url: R.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: N(t), signature: N(n), key_version: e },
          }),
            y.Z.addCurrentUserUploadedKeyVersionCached(e);
        } catch (e) {
          throw (_.Z.captureException(e), e);
        }
      }
      function L(e) {
        return I.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function F(e) {
        !L(e) && (await D(e));
      }
      async function v(e) {
        if (!L(e)) return await D(e), !0;
        let t = c.default.getId(),
          { key: n } = await b(e),
          r = await Z(t, n, e);
        return !r && (0, g.KA)(e), r;
      }
    },
    651941: function (e, t, n) {
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
      var r,
        i = n(442837),
        a = n(253135),
        o = n(570140),
        s = n(709054);
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let l = {};
      class c extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          l =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: l };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, a.MK)(t);
          return null === (n = l[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return s.default.keys(l);
        }
        getUserVerifiedKeys(e) {
          return l[e];
        }
      }
      u(c, "displayName", "VerifiedKeyStore"),
        u(c, "persistKey", "VerifiedKeyStore"),
        (t.Z = new c(o.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = l[e]) && void 0 !== t ? t : {};
                return (l[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, a.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = l[t];
            if (null == r) return !1;
            let i = delete r[n],
              a = !1;
            return (
              0 === Object.keys(r).length && (delete l[t], (a = !0)), i || a
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != l[t] && delete l[t];
          },
          SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: function () {
            l = {};
          },
        }));
    },
    539067: function (e, t, n) {
      n.d(t, {
        y: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(442837),
        a = n(19780),
        o = n(615830),
        s = n(630759),
        u = n(760373);
      function l(e) {
        let { userId: t } = e,
          n = (0, i.e7)([a.Z], () => a.Z.getSecureFramesRosterMapEntry(t)),
          l = (0, i.e7)([o.Z], () => o.Z.getPersistentCodesEnabled()),
          [c, E] = r.useState(!0),
          [d, f] = r.useState(!1),
          [_, h] = r.useState(!1),
          y = r.useCallback(async (e, t) => {
            E(!0);
            try {
              let n = u.GB,
                r = await (0, s.uX)(n),
                i = await (0, s.J6)(e, t, n);
              f(r), h(i);
            } catch (e) {
              f(!1), h(!1);
            } finally {
              E(!1);
            }
          }, []);
        return (
          r.useEffect(() => {
            l && null != n ? y(t, n) : (f(!1), h(!1), E(!1));
          }, [l, n, y, t]),
          {
            loading: c,
            isCurrentUserPersistent: d,
            isOtherUserPersistent: _,
            isPersistentCode: d && _,
          }
        );
      }
    },
    301107: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      }),
        n(411104);
      var r = n(470079),
        i = n(250683),
        a = n(253135);
      function o(e) {
        let { fingerprintBase64: t, chunkSize: n, desiredLength: o } = e,
          s = r.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = i.toByteArray(t),
              r = (0, a.Dq)(e, o, n);
            if (null == r) return null;
            let s = RegExp(".{1,".concat(n, "}"), "g"),
              u = r.match(s);
            return null == u ? null : Array.from(u);
          }, [n, t, o]);
        if (null != t && "" !== t && null == s)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return s;
      }
    },
    65692: function (e, t, n) {
      n.d(t, {
        q: function () {
          return d;
        },
      }),
        n(47120),
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
      var r = n(470079),
        i = n(250683),
        a = n(512722),
        o = n.n(a),
        s = n(442837),
        u = n(253135),
        l = n(314897),
        c = n(19780),
        E = n(760373);
      function d(e) {
        let { userId: t } = e,
          n = (0, s.e7)([l.default], () => l.default.getId());
        o()(
          n !== t,
          "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
        );
        let [a, d] = r.useState(null),
          [f, _] = r.useState(!1),
          h = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(t)),
          y = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(n)),
          I = r.useCallback(async (e, t, n, r) => {
            _(!0);
            let a = await (0, u.Il)(
              E.Xj,
              new Uint8Array(t),
              e,
              new Uint8Array(r),
              n,
            );
            d(i.fromByteArray(a)), _(!1);
          }, []);
        return (
          r.useEffect(() => {
            null != h && null != y && I(n, y, t, h);
          }, [n, y, I, t, h]),
          r.useMemo(
            () => ({ fingerprint: a, userKey: h, loading: f }),
            [a, f, h],
          )
        );
      }
    },
    785792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return l;
        },
      });
      var r = n(735250),
        i = n(470079),
        a = n(120356),
        o = n.n(a),
        s = n(481060),
        u = n(481022);
      function l(e) {
        let { chunks: t, columns: n, className: a } = e,
          l = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, r.jsx)("div", {
              className: u.loading,
              children: (0, r.jsx)(s.Spinner, {}),
            })
          : (0, r.jsx)("div", {
              style: l,
              className: o()(u.code, a),
              children: t.map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: o()(u.chunk, { [u.divider]: t > n - 1 }),
                    children: (0, r.jsx)(s.Text, {
                      className: u.codeText,
                      variant: "code",
                      color: "text-normal",
                      children: e,
                    }),
                  },
                  "".concat(e, "-").concat(t),
                ),
              ),
            });
      }
    },
    190054: function (e, t, n) {
      n.d(t, {
        H: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        a = n(120356),
        o = n.n(a),
        s = n(481060),
        u = n(572004),
        l = n(689938),
        c = n(205962);
      function E(e) {
        let { chunks: t, className: n, onCopy: a, ...E } = e,
          d = i.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [f, _] = i.useState(!1),
          h = i.useCallback(() => {
            _(!0), (0, u.JG)(d), null == a || a();
          }, [a, d]),
          y = f ? s.CircleCheckIcon : s.CopyIcon;
        return (0, r.jsx)(s.Clickable, {
          className: o()(c.container, n),
          onClick: h,
          children: (0, r.jsx)(s.Tooltip, {
            text: f ? l.Z.Messages.COPIED : l.Z.Messages.COPY,
            children: (e) =>
              (0, r.jsx)(y, {
                ...E,
                ...e,
                size: "xxs",
                color: f
                  ? s.tokens.colors.TEXT_POSITIVE
                  : s.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    963410: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        a = n(442837),
        o = n(481060),
        s = n(377171),
        u = n(313201),
        l = n(592125),
        c = n(594174),
        E = n(5192),
        d = n(571826),
        f = n(630759),
        _ = n(539067),
        h = n(210975),
        y = n(301107),
        I = n(65692),
        S = n(785792),
        g = n(190054),
        A = n(760373),
        R = n(981631),
        p = n(689938),
        C = n(958153);
      function T(e) {
        let { badgeText: t, badgeColor: n } = e,
          a = i.useRef(t),
          s = i.useRef(n);
        return (0, r.jsx)(o.TextBadge, { text: a.current, color: s.current });
      }
      function M(e) {
        let { transitionState: t, userId: n, channelId: M, onClose: m } = e,
          U = (0, u.Dt)(),
          w = (0, a.e7)([c.default], () => c.default.getUser(n)),
          b = (0, a.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getChannel(M)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          N = E.ZP.useName(b, null, w),
          { fingerprint: Z, userKey: D, loading: L } = (0, I.q)({ userId: n }),
          F = (0, y.W)({
            fingerprintBase64: Z,
            chunkSize: A.iQ,
            desiredLength: A.KN,
          }),
          v = i.useCallback(() => {
            (0, d.s$)({ userId: n, channelId: M });
          }, [M, n]),
          V = (0, h.wV)({
            userId: n,
            channelId: M,
            location: "WebSecureFramesUserVerificationModal",
          }),
          {
            isPersistentCode: x,
            isCurrentUserPersistent: k,
            isOtherUserPersistent: O,
            loading: B,
          } = (0, _.y)({ userId: n }),
          K = i.useCallback(() => {
            null != D &&
              ((0, f.TQ)(n, D, x, M, R.Sbl.E2EE_USER_VERIFY_MODAL), m());
          }, [D, n, x, M, m]),
          P = i.useCallback(() => {
            null != D && ((0, f.LO)(n, D, x), m());
          }, [D, n, x, m]),
          [j, Y] = i.useMemo(
            () =>
              V
                ? [p.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND]
                : [p.Z.Messages.NEW, s.Z.STATUS_DANGER],
            [V],
          ),
          G = i.useMemo(
            () =>
              (0, f.kK)({
                isCurrentUserPersistent: k,
                isOtherUserPersistent: O,
                otherUserNickname: N,
              }),
            [k, O, N],
          );
        return (
          i.useEffect(() => {
            (0, d.Rq)({ userId: n, channelId: M });
          }, [M, n]),
          (0, r.jsxs)(o.ModalRoot, {
            transitionState: t,
            "aria-labelledby": U,
            children: [
              (0, r.jsx)("div", {
                className: C.shieldIconContainer,
                children: (0, r.jsx)("div", {
                  className: C.shieldIcon,
                  children: (0, r.jsx)(o.ShieldLockIcon, {
                    size: "custom",
                    width: 55,
                    height: 55,
                    color: o.tokens.colors.HEADER_SECONDARY,
                  }),
                }),
              }),
              (0, r.jsxs)(o.ModalContent, {
                className: C.content,
                children: [
                  (0, r.jsx)(o.Heading, {
                    className: C.title,
                    variant: "heading-lg/bold",
                    color: "header-primary",
                    children: p.Z.Messages.E2EE_VERIFICATION_CODE,
                  }),
                  (0, r.jsx)(o.Text, {
                    className: C.subtitle,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      p.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
                        username: N,
                      }),
                  }),
                  (0, r.jsxs)("div", {
                    className: C.verification,
                    children: [
                      (0, r.jsxs)("div", {
                        className: C.header,
                        children: [
                          (0, r.jsx)(o.Heading, {
                            variant: "text-sm/bold",
                            color: "header-primary",
                            children: p.Z.Messages.E2EE_VERIFICATION_CODE,
                          }),
                          null != F &&
                            (0, r.jsx)(g.H, {
                              className: C.copyIcon,
                              chunks: F,
                              color: o.tokens.colors.INTERACTIVE_NORMAL,
                              onCopy: v,
                            }),
                          B || L
                            ? (0, r.jsx)(o.Spinner, {
                                className: C.spinner,
                                type: o.SpinnerTypes.SPINNING_CIRCLE,
                              })
                            : (0, r.jsx)(T, { badgeText: j, badgeColor: Y }),
                        ],
                      }),
                      (0, r.jsx)(S.b, {
                        className: C.code,
                        chunks: F,
                        columns: A.ak,
                      }),
                    ],
                  }),
                  (0, r.jsx)(o.Text, {
                    className: C.details,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: G,
                  }),
                  (0, r.jsx)(o.Button, {
                    fullWidth: !0,
                    className: C.verifiedButton,
                    color: o.ButtonColors.BRAND,
                    size: o.ButtonSizes.MEDIUM,
                    look: o.ButtonLooks.FILLED,
                    disabled: null == Z || B || L,
                    onClick: V ? P : K,
                    children: V
                      ? p.Z.Messages.E2EE_CLEAR_VERIFICATION
                      : p.Z.Messages.E2EE_MARK_AS_VERIFIED,
                  }),
                  (0, r.jsx)(o.Button, {
                    fullWidth: !0,
                    color: o.ButtonColors.PRIMARY,
                    size: o.ButtonSizes.MEDIUM,
                    look: o.ButtonLooks.FILLED,
                    onClick: m,
                    children: p.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
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
          i = "";
        for (let a = 0; a < t; a += n) {
          let t = BigInt(0);
          for (let r = n; r > 0; --r) t = (t << 8n) | BigInt(e[a + (n - r)]);
          (t %= r), (i += t.toString().padStart(n, "0"));
        }
        return i;
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
        let i = new Uint8Array(),
          a = new Uint8Array(2 + t.byteLength + 8);
        a.set(t, 2);
        let o = new DataView(a.buffer);
        o.setUint16(0, e), o.setBigUint64(2 + t.byteLength, r);
        for (let e = 0; e < 5200; e++) {
          let e = a.byteLength + t.byteLength;
          i.byteLength !== e && (i = new Uint8Array(e)),
            i.set(a, 0),
            i.set(t, a.byteLength),
            (a = new Uint8Array(
              await window.crypto.subtle.digest("SHA-512", i),
            ));
        }
        return a;
      }
    },
    256147: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      });
      var r = n(250683);
      function i(e) {
        return r.fromByteArray(e);
      }
    },
    926188: function (e, t, n) {
      n.d(t, {
        I: function () {
          return s;
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
        i = n(259137);
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
        o = { N: 16384, r: 8, p: 2 };
      async function s(e, t, n, s, u) {
        let l = await Promise.all([(0, r.x)(e, t, n), (0, r.x)(e, s, u)]);
        l.sort();
        let c = new Uint8Array(l[0].byteLength + l[1].byteLength);
        return (
          c.set(l[0], 0),
          c.set(l[1], l[0].byteLength),
          new Uint8Array(await (0, i.f3)(c, a, 64, o))
        );
      }
    },
    253135: function (e, t, n) {
      n.d(t, {
        Dq: function () {
          return r.D;
        },
        Il: function () {
          return i.I;
        },
        MK: function () {
          return a.M;
        },
      });
      var r = n(438882);
      n(309651);
      var i = n(926188),
        a = n(256147);
    },
    481022: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    205962: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    958153: function (e, t, n) {
      e.exports = {
        content: "content_e96cae",
        title: "title_e96cae",
        subtitle: "subtitle_e96cae",
        shieldIconContainer: "shieldIconContainer_e96cae",
        shieldIcon: "shieldIcon_e96cae",
        verification: "verification_e96cae",
        header: "header_e96cae",
        copyIcon: "copyIcon_e96cae",
        code: "code_e96cae",
        details: "details_e96cae",
        verifiedButton: "verifiedButton_e96cae",
        spinner: "spinner_e96cae",
      };
    },
    892816: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      let r = {
        "SHA-1": { outputLength: 20, blockSize: 64 },
        "SHA-256": { outputLength: 32, blockSize: 64 },
        "SHA-384": { outputLength: 48, blockSize: 128 },
        "SHA-512": { outputLength: 64, blockSize: 128 },
      };
      function i(e, t, n, i, o = "SHA-256") {
        return new Promise((s, u) => {
          o in r ||
            u(
              RangeError(
                `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
              ),
            ),
            "string" == typeof e
              ? (e = new TextEncoder().encode(e))
              : e instanceof ArrayBuffer
                ? (e = new Uint8Array(e))
                : ArrayBuffer.isView(e) ||
                  u(
                    RangeError(
                      "P should be string, ArrayBuffer, TypedArray, DataView",
                    ),
                  ),
            "string" == typeof t
              ? (t = new TextEncoder().encode(t))
              : t instanceof ArrayBuffer
                ? (t = new Uint8Array(t))
                : ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : u(
                      RangeError(
                        "S should be string, ArrayBuffer, TypedArray, DataView",
                      ),
                    ),
            crypto.subtle
              .importKey("raw", e, "PBKDF2", !1, ["deriveBits"])
              .then(
                (l) => {
                  let c = { name: "PBKDF2", hash: o, salt: t, iterations: n };
                  crypto.subtle.deriveBits(c, l, 8 * i).then(
                    (e) => s(e),
                    (l) => {
                      (async function (e, t, n, i, o) {
                        if (!(o in r))
                          throw RangeError(
                            `Valid hash algorithm values are any of ${Object.keys(r).toString()}`,
                          );
                        if (!Number.isInteger(n) || n <= 0)
                          throw RangeError("c must be a positive integer");
                        let s = r[o].outputLength;
                        if (
                          !Number.isInteger(i) ||
                          i <= 0 ||
                          i >= (4294967296 - 1) * s
                        )
                          throw RangeError(
                            "dkLen must be a positive integer < (2 ** 32 - 1) * hLen",
                          );
                        let u = Math.ceil(i / s),
                          l = i - (u - 1) * s,
                          c = Array(u);
                        0 === e.byteLength &&
                          (e = new Uint8Array(r[o].blockSize));
                        let E = await crypto.subtle.importKey(
                            "raw",
                            e,
                            { name: "HMAC", hash: { name: o } },
                            !0,
                            ["sign"],
                          ),
                          d = async function (e, t) {
                            return new Uint8Array(
                              await crypto.subtle.sign("HMAC", e, t),
                            );
                          };
                        for (let e = 0; e < u; e++)
                          c[e] = await f(E, t, n, e + 1);
                        async function f(e, t, n, r) {
                          let i = await d(
                              e,
                              a(
                                t,
                                (function (e) {
                                  let t = new ArrayBuffer(4);
                                  return (
                                    new DataView(t).setUint32(0, e, !1),
                                    new Uint8Array(t)
                                  );
                                })(r),
                              ),
                            ),
                            o = i;
                          for (let t = 1; t < n; t++)
                            (function (e, t) {
                              for (let n = 0; n < e.length; n++) e[n] ^= t[n];
                            })(i, (o = await d(e, o)));
                          return i;
                        }
                        return (
                          (c[u - 1] = c[u - 1].slice(0, l)), a(...c).buffer
                        );
                      })(e, t, n, i, o).then(
                        (e) => s(e),
                        (e) => u(e),
                      );
                    },
                  );
                },
                (e) => u(e),
              );
        });
      }
      function a(...e) {
        let t = e.reduce((e, t) => e + t.length, 0);
        if (0 === e.length) throw RangeError("Cannot concat no arrays");
        let n = new Uint8Array(t),
          r = 0;
        for (let t of e) n.set(t, r), (r += t.length);
        return n;
      }
    },
    259137: function (e, t, n) {
      n.d(t, {
        f3: function () {
          return u;
        },
      });
      var r = n(892816);
      let i = function (e) {
          function t(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          let n = e.slice(0);
          for (let e = 8; e > 0; e -= 2)
            (n[4] ^= t(n[0] + n[12], 7)),
              (n[8] ^= t(n[4] + n[0], 9)),
              (n[12] ^= t(n[8] + n[4], 13)),
              (n[0] ^= t(n[12] + n[8], 18)),
              (n[9] ^= t(n[5] + n[1], 7)),
              (n[13] ^= t(n[9] + n[5], 9)),
              (n[1] ^= t(n[13] + n[9], 13)),
              (n[5] ^= t(n[1] + n[13], 18)),
              (n[14] ^= t(n[10] + n[6], 7)),
              (n[2] ^= t(n[14] + n[10], 9)),
              (n[6] ^= t(n[2] + n[14], 13)),
              (n[10] ^= t(n[6] + n[2], 18)),
              (n[3] ^= t(n[15] + n[11], 7)),
              (n[7] ^= t(n[3] + n[15], 9)),
              (n[11] ^= t(n[7] + n[3], 13)),
              (n[15] ^= t(n[11] + n[7], 18)),
              (n[1] ^= t(n[0] + n[3], 7)),
              (n[2] ^= t(n[1] + n[0], 9)),
              (n[3] ^= t(n[2] + n[1], 13)),
              (n[0] ^= t(n[3] + n[2], 18)),
              (n[6] ^= t(n[5] + n[4], 7)),
              (n[7] ^= t(n[6] + n[5], 9)),
              (n[4] ^= t(n[7] + n[6], 13)),
              (n[5] ^= t(n[4] + n[7], 18)),
              (n[11] ^= t(n[10] + n[9], 7)),
              (n[8] ^= t(n[11] + n[10], 9)),
              (n[9] ^= t(n[8] + n[11], 13)),
              (n[10] ^= t(n[9] + n[8], 18)),
              (n[12] ^= t(n[15] + n[14], 7)),
              (n[13] ^= t(n[12] + n[15], 9)),
              (n[14] ^= t(n[13] + n[12], 13)),
              (n[15] ^= t(n[14] + n[13], 18));
          for (let t = 0; t < 16; t++) e[t] = n[t] + e[t];
        },
        a = function (e, t) {
          for (let n = 0; n < e.length; n++) e[n] ^= t[n];
        },
        o = function (e) {
          let t = e.byteLength / 128,
            n = 16 * (2 * t - 1),
            r = e.slice(n, n + 16),
            o = new Uint32Array(e.length / 2),
            s = !0;
          for (let n = 0; n < 2 * t; n++) {
            let t = 16 * n;
            a(r, e.subarray(t, t + 16)), i(r);
            let u = 16 * (n >> 1);
            if (s) for (let t = 0; t < 16; t++) e[u + t] = r[t];
            else for (let e = 0; e < 16; e++) o[u + e] = r[e];
            s = !s;
          }
          let u = 16 * t;
          for (let t = 0; t < u; t++) e[u + t] = o[t];
        },
        s = function (e, t) {
          let n = e.byteLength / 128,
            r = Array(t);
          for (let n = 0; n < t; n++) (r[n] = e.slice(0)), o(e);
          for (let i = 0; i < t; i++) {
            let i =
              new DataView(e.buffer, 64 * (2 * n - 1), 64).getUint32(0, !0) % t;
            a(e, r[i]), o(e);
          }
        },
        u = async function (e, t, n, i) {
          if ("string" == typeof e) e = new TextEncoder().encode(e);
          else if (e instanceof ArrayBuffer) e = new Uint8Array(e);
          else if (!ArrayBuffer.isView(e))
            throw RangeError(
              "P should be string, ArrayBuffer, TypedArray, DataView",
            );
          if ("string" == typeof t) t = new TextEncoder().encode(t);
          else if (t instanceof ArrayBuffer) t = new Uint8Array(t);
          else if (!ArrayBuffer.isView(t))
            throw RangeError(
              "S should be string, ArrayBuffer, TypedArray, DataView",
            );
          if (!Number.isInteger(n) || n <= 0 || n > 137438953440)
            throw RangeError(
              "dkLen is the intended output length in octets of the derived key; a positive integer less than or equal to (2^32 - 1) * hLen where hLen is 32",
            );
          let a = void 0 !== i && void 0 !== i.N ? i.N : 131072,
            o = void 0 !== i && void 0 !== i.r ? i.r : 8,
            u = void 0 !== i && void 0 !== i.p ? i.p : 1;
          if (!Number.isInteger(a) || a <= 0 || 0 != (a & (a - 1)))
            throw RangeError("N must be a power of 2");
          if (
            !Number.isInteger(o) ||
            o <= 0 ||
            !Number.isInteger(u) ||
            u <= 0 ||
            u * o > 1073741823.75
          )
            throw RangeError(
              "Parallelization parameter p and blocksize parameter r must be positive integers satisfying p ≤ (2^32− 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.",
            );
          let l = new Uint32Array(await (0, r.Z)(e, t, 1, 128 * u * o));
          for (let e = 0; e < u; e++) {
            let t = 32 * o,
              n = e * t,
              r = l.slice(n, n + t);
            s(r, a);
            for (let e = 0; e < 32 * o; e++) l[n + e] = r[e];
          }
          return await (0, r.Z)(e, l, 1, n);
        };
    },
  },
]);
//# sourceMappingURL=240fe6d60ab2f1203be3.js.map
