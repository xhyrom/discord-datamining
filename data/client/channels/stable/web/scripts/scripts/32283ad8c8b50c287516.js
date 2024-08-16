"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33397"],
  {
    718629: function (e, t, n) {
      var r = n(570140),
        i = n(668781),
        a = n(881052),
        s = n(352954),
        o = n(630759),
        E = n(651941),
        u = n(760373),
        c = n(689938);
      async function l(e) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, o.om)(u.GB);
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
          E.Z.getUserIds().length > 0
            ? s.Z.openSecureFramesUpdateConfirmation({
                title: c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
                subtitle:
                  c.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
                onConfirm: t,
              })
            : t();
        }
      }
      t.Z = {
        updatePersistentCodesEnabled: l,
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
          return f;
        },
        KA: function () {
          return S;
        },
        M1: function () {
          return l;
        },
        PM: function () {
          return _;
        },
        Pn: function () {
          return I;
        },
        Rq: function () {
          return c;
        },
        s$: function () {
          return d;
        },
        sN: function () {
          return u;
        },
      });
      var r = n(367907),
        i = n(221292),
        a = n(592125),
        s = n(626135),
        o = n(981631);
      function E(e) {
        var t;
        return null === (t = a.Z.getChannel(e)) || void 0 === t
          ? void 0
          : t.guild_id;
      }
      function u(e) {
        let { channelId: t, selectedTab: n } = e;
        r.ZP.trackWithMetadata(o.rMx.RTC_PANEL_VIEWED, {
          channel_id: t,
          guild_id: E(t),
          selected_tab: n,
        });
      }
      function c(e) {
        let { channelId: t, userId: n } = e;
        r.ZP.trackWithMetadata(o.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: t,
          guild_id: E(t),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function l(e) {
        let { channelId: t, userId: n, analyticsLocation: a } = e;
        r.ZP.trackWithMetadata(o.rMx.E2EE_USER_VERIFIED, {
          channel_id: t,
          guild_id: E(t),
          location: a,
          ...(0, i.QN)({ userId: n }),
        });
      }
      function d(e) {
        let { channelId: t, userId: n } = e;
        r.ZP.trackWithMetadata(o.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: E(t),
          ...(0, i.QN)({ userId: n }),
        });
      }
      function _(e) {
        let { channelId: t } = e;
        r.ZP.trackWithMetadata(o.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: E(t),
        });
      }
      function f() {
        s.default.track(o.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function I() {
        s.default.track(o.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function S(e) {
        s.default.track(o.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(e),
        });
      }
    },
    630759: function (e, t, n) {
      n.d(t, {
        J6: function () {
          return F;
        },
        LO: function () {
          return T;
        },
        TQ: function () {
          return M;
        },
        ZU: function () {
          return Z;
        },
        Zn: function () {
          return p;
        },
        bo: function () {
          return m;
        },
        kK: function () {
          return N;
        },
        om: function () {
          return x;
        },
        uX: function () {
          return V;
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
        s = n(913527),
        o = n.n(s),
        E = n(544891),
        u = n(253135),
        c = n(314897),
        l = n(131951),
        d = n(594174),
        _ = n(70956),
        f = n(960048),
        I = n(51144),
        S = n(718629),
        R = n(615830),
        h = n(352954),
        C = n(571826),
        A = n(760373),
        g = n(981631),
        y = n(689938);
      function M(e, t, n, r, i) {
        n
          ? S.Z.createVerifiedKey(e, t)
          : S.Z.createSecureFramesTransientKey(e, t),
          (0, C.M1)({ channelId: r, userId: e, analyticsLocation: i });
      }
      function T(e, t, n) {
        if (n) {
          let n = (0, u.MK)(new Uint8Array(t));
          S.Z.deleteVerifiedKey(e, n);
        } else S.Z.deleteSecureFramesTransientKey(e);
      }
      function Z(e, t) {
        h.Z.openSecureFramesUpdateConfirmation({
          title: y.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: y.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            S.Z.deleteVerifiedKey(e, t), (0, C.Pn)();
          },
        });
      }
      function p(e) {
        let t = d.default.getUser(e),
          n = I.ZP.getName(t);
        h.Z.openSecureFramesUpdateConfirmation({
          title: y.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: n },
          ),
          subtitle: y.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            S.Z.deleteAllUserVerifiedKeys(e), (0, C.DF)();
          },
        });
      }
      function m(e) {
        let t = o()(e),
          n = o()().diff(t, "s");
        if (n > 12 * _.Z.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * _.Z.Seconds.DAYS_30));
          return y.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (n > _.Z.Seconds.DAYS_30) {
          let e = Math.round(n / _.Z.Seconds.DAYS_30);
          return y.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (n > 7 * _.Z.Seconds.DAY) {
          let e = Math.round(n / (7 * _.Z.Seconds.DAY));
          return y.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (n > _.Z.Seconds.DAY) {
          let e = Math.round(n / _.Z.Seconds.DAY);
          return y.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (n > _.Z.Seconds.HOUR) {
          let e = Math.round(n / _.Z.Seconds.HOUR);
          return y.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(n > _.Z.Seconds.MINUTE))
            return y.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: n,
            });
          let e = Math.round(n / _.Z.Seconds.MINUTE);
          return y.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function N(e) {
        let {
          isCurrentUserPersistent: t,
          isOtherUserPersistent: n,
          otherUserNickname: r,
        } = e;
        if (t && n)
          return y.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: A.l4,
          });
        if (t)
          return y.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: A.l4 },
          );
        if (n)
          return y.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: A.l4 },
          );
        else
          return y.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: A.l4,
          });
      }
      async function U(e) {
        let t = c.default.getStaticAuthSessionId();
        return (
          a()(
            null != t,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await l.Z.getMLSSigningKey(t, e)
        );
      }
      function D(e) {
        let t = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(t);
      }
      async function F(e, t, n) {
        try {
          return (
            await E.tn.post({
              url: g.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: D(t), key_version: n },
            })
          ).body.is_match;
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      async function L(e) {
        let { key: t, signature: n } = await U(e);
        try {
          await E.tn.put({
            url: g.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: D(t), signature: D(n), key_version: e },
          }),
            S.Z.addCurrentUserUploadedKeyVersionCached(e);
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      function b(e) {
        return R.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function x(e) {
        !b(e) && (await L(e));
      }
      async function V(e) {
        if (!b(e)) return await L(e), !0;
        let t = c.default.getId(),
          { key: n } = await U(e),
          r = await F(t, n, e);
        return !r && (0, C.KA)(e), r;
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
        s = n(570140),
        o = n(709054);
      function E(e, t, n) {
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
      let u = {};
      class c extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          u =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: u };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, a.MK)(t);
          return null === (n = u[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return o.default.keys(u);
        }
        getUserVerifiedKeys(e) {
          return u[e];
        }
      }
      E(c, "displayName", "VerifiedKeyStore"),
        E(c, "persistKey", "VerifiedKeyStore"),
        (t.Z = new c(s.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = u[e]) && void 0 !== t ? t : {};
                return (u[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, a.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = u[t];
            if (null == r) return !1;
            let i = delete r[n],
              a = !1;
            return (
              0 === Object.keys(r).length && (delete u[t], (a = !0)), i || a
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != u[t] && delete u[t];
          },
          SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: function () {
            u = {};
          },
        }));
    },
    539067: function (e, t, n) {
      n.d(t, {
        y: function () {
          return u;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(442837),
        a = n(19780),
        s = n(615830),
        o = n(630759),
        E = n(760373);
      function u(e) {
        let { userId: t } = e,
          n = (0, i.e7)([a.Z], () => a.Z.getSecureFramesRosterMapEntry(t)),
          u = (0, i.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()),
          [c, l] = r.useState(!0),
          [d, _] = r.useState(!1),
          [f, I] = r.useState(!1),
          S = r.useCallback(async (e, t) => {
            l(!0);
            try {
              let n = E.GB,
                r = await (0, o.uX)(n),
                i = await (0, o.J6)(e, t, n);
              _(r), I(i);
            } catch (e) {
              _(!1), I(!1);
            } finally {
              l(!1);
            }
          }, []);
        return (
          r.useEffect(() => {
            u && null != n ? S(t, n) : (_(!1), I(!1), l(!1));
          }, [u, n, S, t]),
          {
            loading: c,
            isCurrentUserPersistent: d,
            isOtherUserPersistent: f,
            isPersistentCode: d && f,
          }
        );
      }
    },
    301107: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
      }),
        n(411104);
      var r = n(470079),
        i = n(250683),
        a = n(253135);
      function s(e) {
        let { fingerprintBase64: t, chunkSize: n, desiredLength: s } = e,
          o = r.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = i.toByteArray(t),
              r = (0, a.Dq)(e, s, n);
            if (null == r) return null;
            let o = RegExp(".{1,".concat(n, "}"), "g"),
              E = r.match(o);
            return null == E ? null : Array.from(E);
          }, [n, t, s]);
        if (null != t && "" !== t && null == o)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return o;
      }
    },
    65692: function (e, t, n) {
      n.d(t, {
        q: function () {
          return l;
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
        i = n(512722),
        a = n.n(i),
        s = n(442837),
        o = n(253135),
        E = n(314897),
        u = n(19780),
        c = n(760373);
      function l(e) {
        let { userId: t } = e,
          n = (0, s.e7)([E.default], () => E.default.getId());
        a()(
          n !== t,
          "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
        );
        let [i, l] = r.useState(null),
          [d, _] = r.useState(!1),
          f = (0, s.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)),
          I = (0, s.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(n)),
          S = r.useCallback(async (e, t, n, r) => {
            _(!0),
              l(
                await (0, o.Il)(
                  c.Xj,
                  new Uint8Array(t),
                  e,
                  new Uint8Array(r),
                  n,
                  c.KN,
                  c.iQ,
                ),
              ),
              _(!1);
          }, []);
        return (
          r.useEffect(() => {
            null != f && null != I && S(n, I, t, f);
          }, [n, I, S, t, f]),
          r.useMemo(
            () => ({ fingerprint: i, userKey: f, loading: d }),
            [i, d, f],
          )
        );
      }
    },
    785792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return u;
        },
      });
      var r = n(735250),
        i = n(470079),
        a = n(120356),
        s = n.n(a),
        o = n(481060),
        E = n(481022);
      function u(e) {
        let { chunks: t, columns: n, className: a } = e,
          u = i.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, r.jsx)("div", {
              className: E.loading,
              children: (0, r.jsx)(o.Spinner, {}),
            })
          : (0, r.jsx)("div", {
              style: u,
              className: s()(E.code, a),
              children: t.map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: s()(E.chunk, { [E.divider]: t > n - 1 }),
                    children: (0, r.jsx)(o.Text, {
                      className: E.codeText,
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
          return l;
        },
      }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        a = n(120356),
        s = n.n(a),
        o = n(481060),
        E = n(572004),
        u = n(689938),
        c = n(205962);
      function l(e) {
        let { chunks: t, className: n, onCopy: a, ...l } = e,
          d = i.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [_, f] = i.useState(!1),
          I = i.useCallback(() => {
            f(!0), (0, E.JG)(d), null == a || a();
          }, [a, d]),
          S = _ ? o.CircleCheckIcon : o.CopyIcon;
        return (0, r.jsx)(o.Clickable, {
          className: s()(c.container, n),
          onClick: I,
          children: (0, r.jsx)(o.Tooltip, {
            text: _ ? u.Z.Messages.COPIED : u.Z.Messages.COPY,
            children: (e) =>
              (0, r.jsx)(S, {
                ...l,
                ...e,
                size: "xxs",
                color: _
                  ? o.tokens.colors.TEXT_POSITIVE
                  : o.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    963410: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Z;
          },
        }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        a = n(442837),
        s = n(481060),
        o = n(377171),
        E = n(313201),
        u = n(592125),
        c = n(594174),
        l = n(5192),
        d = n(571826),
        _ = n(630759),
        f = n(539067),
        I = n(210975),
        S = n(301107),
        R = n(65692),
        h = n(785792),
        C = n(190054),
        A = n(760373),
        g = n(981631),
        y = n(689938),
        M = n(958153);
      function T(e) {
        let { badgeText: t, badgeColor: n } = e,
          a = i.useRef(t),
          o = i.useRef(n);
        return (0, r.jsx)(s.TextBadge, { text: a.current, color: o.current });
      }
      function Z(e) {
        let { transitionState: t, userId: n, channelId: Z, onClose: p } = e,
          m = (0, E.Dt)(),
          N = (0, a.e7)([c.default], () => c.default.getUser(n)),
          U = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getChannel(Z)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          D = l.ZP.useName(U, null, N),
          { fingerprint: F, userKey: L, loading: b } = (0, R.q)({ userId: n }),
          x = (0, S.W)({
            fingerprintBase64: F,
            chunkSize: A.iQ,
            desiredLength: A.KN,
          }),
          V = i.useCallback(() => {
            (0, d.s$)({ userId: n, channelId: Z });
          }, [Z, n]),
          v = (0, I.wV)({
            userId: n,
            channelId: Z,
            location: "WebSecureFramesUserVerificationModal",
          }),
          {
            isPersistentCode: O,
            isCurrentUserPersistent: k,
            isOtherUserPersistent: K,
            loading: w,
          } = (0, f.y)({ userId: n }),
          B = i.useCallback(() => {
            null != L &&
              ((0, _.TQ)(n, L, O, Z, g.Sbl.E2EE_USER_VERIFY_MODAL), p());
          }, [L, n, O, Z, p]),
          P = i.useCallback(() => {
            null != L && ((0, _.LO)(n, L, O), p());
          }, [L, n, O, p]),
          [Y, j] = i.useMemo(
            () =>
              v
                ? [y.Z.Messages.E2EE_VERIFIED, o.Z.BG_BRAND]
                : [y.Z.Messages.NEW, o.Z.STATUS_DANGER],
            [v],
          ),
          G = i.useMemo(
            () =>
              (0, _.kK)({
                isCurrentUserPersistent: k,
                isOtherUserPersistent: K,
                otherUserNickname: D,
              }),
            [k, K, D],
          );
        return (
          i.useEffect(() => {
            (0, d.Rq)({ userId: n, channelId: Z });
          }, [Z, n]),
          (0, r.jsxs)(s.ModalRoot, {
            transitionState: t,
            "aria-labelledby": m,
            children: [
              (0, r.jsx)("div", {
                className: M.shieldIconContainer,
                children: (0, r.jsx)("div", {
                  className: M.shieldIcon,
                  children: (0, r.jsx)(s.ShieldLockIcon, {
                    size: "custom",
                    width: 55,
                    height: 55,
                    color: s.tokens.colors.HEADER_SECONDARY,
                  }),
                }),
              }),
              (0, r.jsxs)(s.ModalContent, {
                className: M.content,
                children: [
                  (0, r.jsx)(s.Heading, {
                    className: M.title,
                    variant: "heading-lg/bold",
                    color: "header-primary",
                    children: y.Z.Messages.E2EE_VERIFICATION_CODE,
                  }),
                  (0, r.jsx)(s.Text, {
                    className: M.subtitle,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      y.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
                        username: D,
                      }),
                  }),
                  (0, r.jsxs)("div", {
                    className: M.verification,
                    children: [
                      (0, r.jsxs)("div", {
                        className: M.header,
                        children: [
                          (0, r.jsx)(s.Heading, {
                            variant: "text-sm/bold",
                            color: "header-primary",
                            children: y.Z.Messages.E2EE_VERIFICATION_CODE,
                          }),
                          null != x &&
                            (0, r.jsx)(C.H, {
                              className: M.copyIcon,
                              chunks: x,
                              color: s.tokens.colors.INTERACTIVE_NORMAL,
                              onCopy: V,
                            }),
                          w || b
                            ? (0, r.jsx)(s.Spinner, {
                                className: M.spinner,
                                type: s.SpinnerTypes.SPINNING_CIRCLE,
                              })
                            : (0, r.jsx)(T, { badgeText: Y, badgeColor: j }),
                        ],
                      }),
                      (0, r.jsx)(h.b, {
                        className: M.code,
                        chunks: x,
                        columns: A.ak,
                      }),
                    ],
                  }),
                  (0, r.jsx)(s.Text, {
                    className: M.details,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: G,
                  }),
                  (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    className: M.verifiedButton,
                    color: s.ButtonColors.BRAND,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    disabled: null == F || w || b,
                    onClick: v ? P : B,
                    children: v
                      ? y.Z.Messages.E2EE_CLEAR_VERIFICATION
                      : y.Z.Messages.E2EE_MARK_AS_VERIFIED,
                  }),
                  (0, r.jsx)(s.Button, {
                    fullWidth: !0,
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.MEDIUM,
                    look: s.ButtonLooks.FILLED,
                    onClick: p,
                    children: y.Z.Messages.CANCEL,
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
        let s = new DataView(a.buffer);
        s.setUint16(0, e), s.setBigUint64(2 + t.byteLength, r);
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
          return a;
        },
      }),
        n(47120);
      var r = n(438882),
        i = n(309651);
      async function a(e, t, n, a, s, o, E) {
        let u = await Promise.all([(0, i.x)(e, t, n), (0, i.x)(e, a, s)]);
        return u.sort(), (0, r.D)(u[0], o, E) + (0, r.D)(u[1], o, E);
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
  },
]);
//# sourceMappingURL=32283ad8c8b50c287516.js.map
