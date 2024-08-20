"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3708"],
  {
    718629: function (e, t, n) {
      var r = n(570140),
        s = n(668781),
        E = n(881052),
        i = n(352954),
        a = n(630759),
        o = n(651941),
        u = n(760373),
        l = n(689938);
      async function c(e) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, a.om)(u.GB);
          } catch (n) {
            var t;
            let e = new E.Hx(n);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              s.Z.show({
                title: l.Z.Messages.ERROR_GENERIC_TITLE,
                body:
                  null !== (t = e.getAnyErrorMessage()) && void 0 !== t
                    ? t
                    : l.Z.Messages.GENERIC_ERROR_BODY,
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
          o.Z.getUserIds().length > 0
            ? i.Z.openSecureFramesUpdateConfirmation({
                title: l.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
                subtitle:
                  l.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
                onConfirm: t,
              })
            : t();
        }
      }
      t.Z = {
        updatePersistentCodesEnabled: c,
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
    630759: function (e, t, n) {
      n.d(t, {
        J6: function () {
          return D;
        },
        LO: function () {
          return p;
        },
        TQ: function () {
          return M;
        },
        ZU: function () {
          return U;
        },
        Zn: function () {
          return g;
        },
        bo: function () {
          return h;
        },
        kK: function () {
          return F;
        },
        om: function () {
          return O;
        },
        uX: function () {
          return L;
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
        s = n(512722),
        E = n.n(s),
        i = n(913527),
        a = n.n(i),
        o = n(544891),
        u = n(253135),
        l = n(314897),
        c = n(131951),
        _ = n(594174),
        d = n(70956),
        f = n(960048),
        S = n(51144),
        I = n(718629),
        R = n(615830),
        A = n(352954),
        C = n(571826),
        T = n(760373),
        Z = n(981631),
        y = n(689938);
      function M(e, t, n, r, s) {
        n
          ? I.Z.createVerifiedKey(e, t)
          : I.Z.createSecureFramesTransientKey(e, t),
          (0, C.M1)({ channelId: r, userId: e, analyticsLocation: s });
      }
      function p(e, t, n) {
        if (n) {
          let n = (0, u.MK)(new Uint8Array(t));
          I.Z.deleteVerifiedKey(e, n);
        } else I.Z.deleteSecureFramesTransientKey(e);
      }
      function U(e, t) {
        A.Z.openSecureFramesUpdateConfirmation({
          title: y.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: y.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            I.Z.deleteVerifiedKey(e, t), (0, C.Pn)();
          },
        });
      }
      function g(e) {
        let t = _.default.getUser(e),
          n = S.ZP.getName(t);
        A.Z.openSecureFramesUpdateConfirmation({
          title: y.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: n },
          ),
          subtitle: y.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            I.Z.deleteAllUserVerifiedKeys(e), (0, C.DF)();
          },
        });
      }
      function h(e) {
        let t = a()(e),
          n = a()().diff(t, "s");
        if (n > 12 * d.Z.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * d.Z.Seconds.DAYS_30));
          return y.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (n > d.Z.Seconds.DAYS_30) {
          let e = Math.round(n / d.Z.Seconds.DAYS_30);
          return y.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (n > 7 * d.Z.Seconds.DAY) {
          let e = Math.round(n / (7 * d.Z.Seconds.DAY));
          return y.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (n > d.Z.Seconds.DAY) {
          let e = Math.round(n / d.Z.Seconds.DAY);
          return y.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (n > d.Z.Seconds.HOUR) {
          let e = Math.round(n / d.Z.Seconds.HOUR);
          return y.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(n > d.Z.Seconds.MINUTE))
            return y.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: n,
            });
          let e = Math.round(n / d.Z.Seconds.MINUTE);
          return y.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function F(e) {
        let {
          isCurrentUserPersistent: t,
          isOtherUserPersistent: n,
          otherUserNickname: r,
        } = e;
        if (t && n)
          return y.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: T.l4,
          });
        if (t)
          return y.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: T.l4 },
          );
        if (n)
          return y.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: T.l4 },
          );
        else
          return y.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: T.l4,
          });
      }
      async function N(e) {
        let t = l.default.getStaticAuthSessionId();
        return (
          E()(
            null != t,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await c.Z.getMLSSigningKey(t, e)
        );
      }
      function m(e) {
        let t = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(t);
      }
      async function D(e, t, n) {
        try {
          return (
            await o.tn.post({
              url: Z.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: m(t), key_version: n },
            })
          ).body.is_match;
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      async function V(e) {
        let { key: t, signature: n } = await N(e);
        try {
          await o.tn.put({
            url: Z.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: m(t), signature: m(n), key_version: e },
          }),
            I.Z.addCurrentUserUploadedKeyVersionCached(e);
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      function K(e) {
        return R.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function O(e) {
        !K(e) && (await V(e));
      }
      async function L(e) {
        if (!K(e)) return await V(e), !0;
        let t = l.default.getId(),
          { key: n } = await N(e),
          r = await D(t, n, e);
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
        s = n(442837),
        E = n(253135),
        i = n(570140),
        a = n(709054);
      function o(e, t, n) {
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
      class l extends (r = s.ZP.PersistedStore) {
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
          let r = (0, E.MK)(t);
          return null === (n = u[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return a.default.keys(u);
        }
        getUserVerifiedKeys(e) {
          return u[e];
        }
      }
      o(l, "displayName", "VerifiedKeyStore"),
        o(l, "persistKey", "VerifiedKeyStore"),
        (t.Z = new l(i.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = u[e]) && void 0 !== t ? t : {};
                return (u[e] = n), n;
              })(t),
              s = new Uint8Array(n);
            r[(0, E.MK)(s)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = u[t];
            if (null == r) return !1;
            let s = delete r[n],
              E = !1;
            return (
              0 === Object.keys(r).length && (delete u[t], (E = !0)), s || E
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
        s = n(442837),
        E = n(19780),
        i = n(615830),
        a = n(630759),
        o = n(760373);
      function u(e) {
        let { userId: t } = e,
          n = (0, s.e7)([E.Z], () => E.Z.getSecureFramesRosterMapEntry(t)),
          u = (0, s.e7)([i.Z], () => i.Z.getPersistentCodesEnabled()),
          [l, c] = r.useState(!0),
          [_, d] = r.useState(!1),
          [f, S] = r.useState(!1),
          I = r.useCallback(async (e, t) => {
            c(!0);
            try {
              let n = o.GB,
                r = await (0, a.uX)(n),
                s = await (0, a.J6)(e, t, n);
              d(r), S(s);
            } catch (e) {
              d(!1), S(!1);
            } finally {
              c(!1);
            }
          }, []);
        return (
          r.useEffect(() => {
            u && null != n ? I(t, n) : (d(!1), S(!1), c(!1));
          }, [u, n, I, t]),
          {
            loading: l,
            isCurrentUserPersistent: _,
            isOtherUserPersistent: f,
            isPersistentCode: _ && f,
          }
        );
      }
    },
    65692: function (e, t, n) {
      n.d(t, {
        q: function () {
          return _;
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
        s = n(250683),
        E = n(512722),
        i = n.n(E),
        a = n(442837),
        o = n(253135),
        u = n(314897),
        l = n(19780),
        c = n(760373);
      function _(e) {
        let { userId: t } = e,
          n = (0, a.e7)([u.default], () => u.default.getId());
        i()(
          n !== t,
          "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
        );
        let [E, _] = r.useState(null),
          [d, f] = r.useState(!1),
          S = (0, a.e7)([l.Z], () => l.Z.getSecureFramesRosterMapEntry(t)),
          I = (0, a.e7)([l.Z], () => l.Z.getSecureFramesRosterMapEntry(n)),
          R = r.useCallback(async (e, t, n, r) => {
            f(!0);
            let E = await (0, o.Il)(
              c.Xj,
              new Uint8Array(t),
              e,
              new Uint8Array(r),
              n,
            );
            _(s.fromByteArray(E)), f(!1);
          }, []);
        return (
          r.useEffect(() => {
            null != S && null != I && R(n, I, t, S);
          }, [n, I, R, t, S]),
          r.useMemo(
            () => ({ fingerprint: E, userKey: S, loading: d }),
            [E, d, S],
          )
        );
      }
    },
    963410: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        }),
        n(47120);
      var r = n(735250),
        s = n(470079),
        E = n(442837),
        i = n(481060),
        a = n(377171),
        o = n(592125),
        u = n(594174),
        l = n(5192),
        c = n(571826),
        _ = n(630759),
        d = n(539067),
        f = n(210975),
        S = n(301107),
        I = n(65692),
        R = n(785792),
        A = n(190054),
        C = n(245581),
        T = n(760373),
        Z = n(981631),
        y = n(689938),
        M = n(756843);
      function p(e) {
        let { badgeText: t, badgeColor: n } = e,
          E = s.useRef(t),
          a = s.useRef(n);
        return (0, r.jsx)(i.TextBadge, { text: E.current, color: a.current });
      }
      function U(e) {
        let { transitionState: t, userId: n, channelId: U, onClose: g } = e,
          h = (0, E.e7)([u.default], () => u.default.getUser(n)),
          F = (0, E.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(U)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          N = l.ZP.useName(F, null, h),
          { fingerprint: m, userKey: D, loading: V } = (0, I.q)({ userId: n }),
          K = (0, S.W)({
            fingerprintBase64: m,
            chunkSize: T.iQ,
            desiredLength: T.KN,
          }),
          O = s.useCallback(() => {
            (0, c.s$)({ userId: n, channelId: U });
          }, [U, n]),
          L = (0, f.wV)({
            userId: n,
            channelId: U,
            location: "WebSecureFramesUserVerificationModal",
          }),
          {
            isPersistentCode: b,
            isCurrentUserPersistent: k,
            isOtherUserPersistent: v,
            loading: B,
          } = (0, d.y)({ userId: n }),
          w = s.useCallback(() => {
            null != D &&
              ((0, _.TQ)(n, D, b, U, Z.Sbl.E2EE_USER_VERIFY_MODAL), g());
          }, [D, n, b, U, g]),
          x = s.useCallback(() => {
            null != D && ((0, _.LO)(n, D, b), g());
          }, [D, n, b, g]),
          [Y, P] = s.useMemo(
            () =>
              L
                ? [y.Z.Messages.E2EE_VERIFIED, a.Z.BG_BRAND]
                : [y.Z.Messages.NEW, a.Z.STATUS_DANGER],
            [L],
          ),
          G = s.useMemo(
            () =>
              (0, _.kK)({
                isCurrentUserPersistent: k,
                isOtherUserPersistent: v,
                otherUserNickname: N,
              }),
            [k, v, N],
          );
        return (
          s.useEffect(() => {
            (0, c.Rq)({ userId: n, channelId: U });
          }, [U, n]),
          (0, r.jsxs)(C.Z, {
            transitionState: t,
            title: y.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: y.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
              username: N,
            }),
            children: [
              (0, r.jsxs)("div", {
                className: M.verification,
                children: [
                  (0, r.jsxs)("div", {
                    className: M.header,
                    children: [
                      (0, r.jsx)(i.Heading, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: y.Z.Messages.E2EE_VERIFICATION_CODE,
                      }),
                      null != K &&
                        (0, r.jsx)(A.H, {
                          className: M.copyIcon,
                          chunks: K,
                          color: i.tokens.colors.INTERACTIVE_NORMAL,
                          onCopy: O,
                        }),
                      B || V
                        ? (0, r.jsx)(i.Spinner, {
                            className: M.spinner,
                            type: i.SpinnerTypes.SPINNING_CIRCLE,
                          })
                        : (0, r.jsx)(p, { badgeText: Y, badgeColor: P }),
                    ],
                  }),
                  (0, r.jsx)(R.b, {
                    className: M.code,
                    chunks: K,
                    columns: T.ak,
                  }),
                ],
              }),
              (0, r.jsx)(i.Text, {
                className: M.footer,
                variant: "text-sm/normal",
                color: "text-muted",
                children: G,
              }),
              (0, r.jsx)(i.Button, {
                fullWidth: !0,
                className: M.verifiedButton,
                color: i.ButtonColors.BRAND,
                size: i.ButtonSizes.MEDIUM,
                look: i.ButtonLooks.FILLED,
                disabled: null == m || B || V,
                onClick: L ? x : w,
                children: L
                  ? y.Z.Messages.E2EE_CLEAR_VERIFICATION
                  : y.Z.Messages.E2EE_MARK_AS_VERIFIED,
              }),
              (0, r.jsx)(i.Button, {
                fullWidth: !0,
                color: i.ButtonColors.PRIMARY,
                size: i.ButtonSizes.MEDIUM,
                look: i.ButtonLooks.FILLED,
                onClick: g,
                children: y.Z.Messages.CANCEL,
              }),
            ],
          })
        );
      }
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
    756843: function (e, t, n) {
      e.exports = {
        content: "content_efee60",
        title: "title_efee60",
        subtitle: "subtitle_efee60",
        shieldIconContainer: "shieldIconContainer_efee60",
        shieldIcon: "shieldIcon_efee60",
        verification: "verification_efee60",
        header: "header_efee60",
        copyIcon: "copyIcon_efee60",
        code: "code_efee60",
        footer: "footer_efee60",
        verifiedButton: "verifiedButton_efee60",
        spinner: "spinner_efee60",
      };
    },
  },
]);
//# sourceMappingURL=c575c193653fcf51e5a9.js.map
