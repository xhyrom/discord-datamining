"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22183"],
  {
    394059: function (e, n, t) {
      var i, r;
      t.d(n, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    984014: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(442837),
        r = t(872810),
        l = t(199902),
        o = t(314897);
      function a(e, n) {
        let t = (0, i.e7)([o.default], () => o.default.getId()),
          a = (0, i.e7)(
            [l.Z],
            () => {
              let n = l.Z.getCurrentUserActiveStream();
              return null != n && n.channelId === e;
            },
            [e],
          ),
          u = (0, i.e7)([l.Z], () => l.Z.isSelfStreamHidden(e), [e]);
        return [
          (null == n || n === t) && a,
          u,
          (n) => {
            (0, r.pR)(e, n);
          },
        ];
      }
    },
    295510: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(153867),
        l = t(468026),
        o = t(394059),
        a = t(388032);
      function u(e) {
        let { type: n, onConfirm: t, ...u } = e,
          c =
            n === o.K.STREAM
              ? a.intl.string(a.t["/lFMWl"])
              : a.intl.string(a.t.xzxhZW),
          d =
            n === o.K.STREAM
              ? a.intl.string(a.t.xaOX7e)
              : a.intl.string(a.t.oU1p9P);
        return (0, i.jsx)(l.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: c,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: d,
          ...u,
        });
      }
    },
    441061: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        o = t(475179),
        a = t(358221),
        u = t(388032);
      function c(e) {
        let n = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: u.intl.string(u.t.BL8ss7),
          checked: !n,
          action: () => o.Z.toggleVoiceParticipantsHidden(e, !n),
        });
      }
    },
    431368: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        o = t(740492),
        a = t(984014),
        u = t(295510),
        c = t(394059),
        d = t(388032);
      function s(e, n) {
        let [t, s, f] = (0, a.Z)(e, n),
          g = (0, r.e7)(
            [o.ZP],
            () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-stream-hide",
              label: d.intl.string(d.t.aol7iY),
              checked: !s,
              action: () => {
                if (g || s) return f(!s);
                (0, l.openModal)((e) =>
                  (0, i.jsx)(u.Z, {
                    ...e,
                    type: c.K.STREAM,
                    onConfirm: () => f(!s),
                  }),
                );
              },
            })
          : null;
      }
    },
    701098: function (e, n, t) {
      t.d(n, {
        G: function () {
          return g;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        o = t(481060),
        a = t(569545),
        u = t(352954),
        c = t(277642),
        d = t(441894),
        s = t(199902),
        f = t(388032);
      function g(e) {
        let { stream: n, channelId: t, location: g } = e,
          Z = (0, d.J)({ channelId: t, location: g }),
          m = (0, l.e7)(
            [s.Z],
            () => null != s.Z.getActiveStreamForApplicationStream(n),
          ),
          h = (0, a.V9)(n),
          I = (0, c.t)(h),
          S = r.useCallback(() => {
            u.Z.openSecureFramesStreamVerification(h, t);
          }, [t, h]);
        return Z && m && !I
          ? (0, i.jsx)(o.MenuItem, {
              id: "secure-frames-stream-verification",
              label: f.intl.string(f.t.tjbJbW),
              action: S,
            })
          : null;
      }
    },
    607783: function (e, n, t) {
      t.d(n, {
        B: function () {
          return g;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        o = t(481060),
        a = t(40851),
        u = t(352954),
        c = t(630759),
        d = t(441894),
        s = t(314897),
        f = t(388032);
      function g(e) {
        let { userId: n, channelId: t, guildId: g, location: Z } = e,
          m = (0, d.J)({ channelId: t, location: Z }),
          h = (0, l.e7)([s.default], () => s.default.getId() === n),
          I = (0, a.bp)(),
          S = r.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
              n,
              t,
              () => (0, c.fz)({ userId: n, channelId: t, guildId: g }),
              I,
            );
          }, [I, t, g, n]);
        return !m || h
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "secure-frames-user-verification",
              label: f.intl.string(f.t["8ErYvb"]),
              action: S,
            });
      }
    },
    987281: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return y;
          },
        });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        o = t(846027),
        a = t(239091),
        u = t(287734),
        c = t(872810),
        d = t(410575),
        s = t(441061),
        f = t(431368),
        g = t(418469),
        Z = t(701098),
        m = t(607783),
        h = t(435064),
        I = t(779618),
        S = t(39604),
        C = t(258609),
        x = t(111672),
        p = t(441167),
        M = t(700994),
        b = t(199902),
        v = t(314897),
        j = t(592125),
        A = t(131951),
        E = t(594174),
        V = t(358085),
        T = t(569545),
        w = t(981631),
        k = t(65154),
        R = t(388032);
      function U(e) {
        return (0, r.e7)([b.Z], () => {
          let n = b.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, T.V9)(n) === (0, T.V9)(e);
        });
      }
      function y(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: b,
            exitFullscreen: y,
            onSelect: G,
          } = e,
          J = (function (e) {
            let n = U(e),
              t = (0, I.Z)(A.Z),
              o = h.Z.getSettings().clipsEnabled,
              a = e.ownerId === v.default.getId(),
              { enableViewerClipping: u, ignoreSenderPreference: c } =
                p.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              d = (0, r.e7)([h.Z], () => h.Z.getIsAtMaxSaveClipOperations()),
              s =
                (0, r.e7)([h.Z], () =>
                  h.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || c;
            return t && u && n
              ? (0, i.jsx)(l.MenuItem, {
                  id: "clip-stream",
                  disabled: !o || !(a || s) || d,
                  label: R.intl.string(R.t.U4URzM),
                  action: () => (a ? (0, S.C1)() : (0, S.C1)((0, T.V9)(e))),
                })
              : null;
          })(n),
          P = U(n),
          Y = (function (e) {
            let n = U(e),
              t = (0, M.Z)(e.ownerId, k.Yn.STREAM);
            return n ? t : null;
          })(n),
          F = (function (e) {
            let n;
            let t = (0, r.e7)([C.Z], () => null != C.Z.getRemoteSessionId()),
              o = (0, r.e7)([j.Z], () => j.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              a = U(e),
              d = E.default.getCurrentUser(),
              s = null != d && e.ownerId === d.id;
            return ((n = s
              ? R.intl.string(R.t.S5anIS)
              : a
                ? R.intl.string(R.t.q3O3Jy)
                : R.intl.string(R.t["7Xq/nZ"])),
            t || (!s && a && (null == o ? void 0 : o.isGuildStageVoice())))
              ? null
              : (0, i.jsx)(l.MenuItem, {
                  id: "watch",
                  label: n,
                  action: a
                    ? function () {
                        (0, c.g)((0, T.V9)(e));
                      }
                    : function () {
                        u.default.selectVoiceChannel(e.channelId), (0, c.rn)(e);
                      },
                });
          })(n),
          H = (function (e) {
            let n = U(e),
              t = (0, r.e7)([A.Z], () =>
                A.Z.isLocalMute(e.ownerId, k.Yn.STREAM),
              ),
              a = E.default.getCurrentUser(),
              u = null != a && e.ownerId === a.id;
            return !n || u
              ? null
              : (0, i.jsx)(l.MenuCheckboxItem, {
                  id: "mute",
                  label: R.intl.string(R.t.sWmtIy),
                  action: function () {
                    o.Z.toggleLocalMute(e.ownerId, k.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          O = (function (e) {
            let n = U(e),
              t = e.ownerId === v.default.getId(),
              { sidechainAvailable: a } = x.Z.getCurrentConfig({
                location: "StreamContextMenu",
              }),
              u = (0, r.e7)([A.Z], () => A.Z.getSidechainCompression()),
              c = (0, r.e7)([A.Z], () => A.Z.getSidechainCompressionStrength());
            return t || !n || !a || (0, V.isWeb)()
              ? null
              : (0, i.jsxs)(l.MenuGroup, {
                  children: [
                    (0, i.jsx)(l.MenuCheckboxItem, {
                      id: "sidechain-compression",
                      label: R.intl.string(R.t["/jwMtr"]),
                      action: () => o.Z.setSidechainCompression(!u),
                      checked: u,
                    }),
                    (0, i.jsx)(l.MenuControlItem, {
                      id: "sidechain-parameters",
                      label: R.intl.string(R.t.fhEzfn),
                      control: (e, n) =>
                        (0, i.jsx)(l.MenuSliderControl, {
                          ...e,
                          ref: n,
                          value: c,
                          maxValue: 100,
                          onChange: (e) =>
                            o.Z.setSidechainCompressionStrength(e),
                          "aria-label": R.intl.string(R.t.fhEzfn),
                        }),
                    }),
                  ],
                });
          })(n),
          L = (0, g.Z)(n, b, y),
          z = (0, f.Z)(n.channelId, n.ownerId),
          B = (0, s.Z)(n.channelId),
          K = (0, r.e7)([j.Z], () => j.Z.getChannel(n.channelId), [
            n.channelId,
          ]),
          W = (0, Z.G)({
            stream: n,
            channelId: n.channelId,
            location: "StreamContextMenu",
          }),
          N = (0, m.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: "StreamContextMenu",
          });
        return (0, i.jsx)(d.Z, {
          context: t,
          object: w.qAy.CONTEXT_MENU,
          children: (0, i.jsxs)(l.Menu, {
            navId: "stream-context",
            onClose: a.Zy,
            "aria-label": R.intl.string(R.t.Gl3Q39),
            onSelect: G,
            children: [
              (0, i.jsxs)(l.MenuGroup, { children: [F, J, H, W, N] }),
              (0, i.jsx)(l.MenuGroup, { children: Y }),
              O,
              (0, i.jsxs)(l.MenuGroup, {
                children: [
                  (null == K ? void 0 : K.isGuildStageVoice()) ? null : B,
                  z,
                  P && L,
                ],
              }),
            ],
          }),
        });
      }
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        o = t(846027),
        a = t(131951),
        u = t(594174),
        c = t(36703),
        d = t(358085),
        s = t(65154),
        f = t(388032);
      function g(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          g = (0, r.e7)([a.Z], () => a.Z.getLocalVolume(e, t), [e, t]),
          Z =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          m = t === s.Yn.STREAM;
        return Z
          ? null
          : (0, i.jsx)(l.MenuControlItem, {
              id: "user-volume",
              label: m ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH),
              control: (n, r) =>
                (0, i.jsx)(l.MenuSliderControl, {
                  ...n,
                  ref: r,
                  value: (0, c.P)(g),
                  maxValue: d.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, c.A)(n), t),
                  "aria-label": m
                    ? f.intl.string(f.t.t4JBnJ)
                    : f.intl.string(f.t.m7TNdH),
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=b2095ff52b9357457cdd.js.map
