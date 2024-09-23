"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22183"],
  {
    701098: function (e, n, t) {
      t.d(n, {
        G: function () {
          return I;
        },
      });
      var l = t(735250),
        a = t(470079),
        r = t(442837),
        s = t(481060),
        i = t(569545),
        o = t(352954),
        u = t(277642),
        c = t(441894),
        d = t(199902),
        M = t(689938);
      function I(e) {
        let { stream: n, channelId: t, location: I } = e,
          Z = (0, c.J)({ channelId: t, location: I }),
          S = (0, r.e7)(
            [d.Z],
            () => null != d.Z.getActiveStreamForApplicationStream(n),
          ),
          C = (0, i.V9)(n),
          g = (0, u.t)(C),
          E = a.useCallback(() => {
            o.Z.openSecureFramesStreamVerification(C, t);
          }, [t, C]);
        return Z && S && !g
          ? (0, l.jsx)(s.MenuItem, {
              id: "secure-frames-stream-verification",
              label: M.Z.Messages.E2EE_VIEW_STREAM_PRIVACY_CODE,
              action: E,
            })
          : null;
      }
    },
    607783: function (e, n, t) {
      t.d(n, {
        B: function () {
          return I;
        },
      });
      var l = t(735250),
        a = t(470079),
        r = t(442837),
        s = t(481060),
        i = t(40851),
        o = t(352954),
        u = t(630759),
        c = t(441894),
        d = t(314897),
        M = t(689938);
      function I(e) {
        let { userId: n, channelId: t, guildId: I, location: Z } = e,
          S = (0, c.J)({ channelId: t, location: Z }),
          C = (0, r.e7)([d.default], () => d.default.getId() === n),
          g = (0, i.bp)(),
          E = a.useCallback(() => {
            o.Z.openSecureFramesUserVerificationModal(
              n,
              t,
              () => (0, u.fz)({ userId: n, channelId: t, guildId: I }),
              g,
            );
          }, [g, t, I, n]);
        return !S || C
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "secure-frames-user-verification",
              label: M.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: E,
            });
      }
    },
    987281: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return U;
          },
        });
      var l = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        s = t(846027),
        i = t(239091),
        o = t(287734),
        u = t(872810),
        c = t(410575),
        d = t(441061),
        M = t(431368),
        I = t(418469),
        Z = t(701098),
        S = t(607783),
        C = t(435064),
        g = t(779618),
        E = t(39604),
        f = t(258609),
        h = t(111672),
        m = t(441167),
        p = t(700994),
        x = t(199902),
        A = t(314897),
        _ = t(592125),
        T = t(131951),
        V = t(594174),
        b = t(358085),
        v = t(569545),
        R = t(981631),
        O = t(65154),
        j = t(689938);
      function N(e) {
        return (0, a.e7)([x.Z], () => {
          let n = x.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, v.V9)(n) === (0, v.V9)(e);
        });
      }
      function U(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: x,
            exitFullscreen: U,
            onSelect: w,
          } = e,
          G = (function (e) {
            let n = N(e),
              t = (0, g.Z)(T.Z),
              s = C.Z.getSettings().clipsEnabled,
              i = e.ownerId === A.default.getId(),
              { enableViewerClipping: o, ignoreSenderPreference: u } =
                m.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              c = (0, a.e7)([C.Z], () => C.Z.getIsAtMaxSaveClipOperations()),
              d =
                (0, a.e7)([C.Z], () =>
                  C.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || u;
            return t && o && n
              ? (0, l.jsx)(r.MenuItem, {
                  id: "clip-stream",
                  disabled: !s || !(i || d) || c,
                  label: j.Z.Messages.CLIPS_SAVE,
                  action: () => (i ? (0, E.C1)() : (0, E.C1)((0, v.V9)(e))),
                })
              : null;
          })(n),
          L = N(n),
          k = (function (e) {
            let n = N(e),
              t = (0, p.Z)(e.ownerId, O.Yn.STREAM);
            return n ? t : null;
          })(n),
          P = (function (e) {
            let n;
            let t = (0, a.e7)([f.Z], () => null != f.Z.getRemoteSessionId()),
              s = (0, a.e7)([_.Z], () => _.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              i = N(e),
              c = V.default.getCurrentUser(),
              d = null != c && e.ownerId === c.id;
            return ((n = d
              ? j.Z.Messages.STOP_STREAMING
              : i
                ? j.Z.Messages.STOP_WATCHING
                : j.Z.Messages.WATCH_STREAM),
            t || (!d && i && (null == s ? void 0 : s.isGuildStageVoice())))
              ? null
              : (0, l.jsx)(r.MenuItem, {
                  id: "watch",
                  label: n,
                  action: i
                    ? function () {
                        (0, u.g)((0, v.V9)(e));
                      }
                    : function () {
                        o.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                      },
                });
          })(n),
          D = (function (e) {
            let n = N(e),
              t = (0, a.e7)([T.Z], () =>
                T.Z.isLocalMute(e.ownerId, O.Yn.STREAM),
              ),
              i = V.default.getCurrentUser(),
              o = null != i && e.ownerId === i.id;
            return !n || o
              ? null
              : (0, l.jsx)(r.MenuCheckboxItem, {
                  id: "mute",
                  label: j.Z.Messages.SOUND_MUTE,
                  action: function () {
                    s.Z.toggleLocalMute(e.ownerId, O.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          F = (function (e) {
            let n = N(e),
              t = e.ownerId === A.default.getId(),
              { sidechainAvailable: i } = h.Z.getCurrentConfig({
                location: "StreamContextMenu",
              }),
              o = (0, a.e7)([T.Z], () => T.Z.getSidechainCompression()),
              u = (0, a.e7)([T.Z], () => T.Z.getSidechainCompressionStrength());
            return t || !n || !i || (0, b.isWeb)()
              ? null
              : (0, l.jsxs)(r.MenuGroup, {
                  children: [
                    (0, l.jsx)(r.MenuCheckboxItem, {
                      id: "sidechain-compression",
                      label: j.Z.Messages.SIDECHAIN_COMPRESSION,
                      action: () => s.Z.setSidechainCompression(!o),
                      checked: o,
                    }),
                    (0, l.jsx)(r.MenuControlItem, {
                      id: "sidechain-parameters",
                      label: j.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                      control: (e, n) =>
                        (0, l.jsx)(r.MenuSliderControl, {
                          ...e,
                          ref: n,
                          value: u,
                          maxValue: 100,
                          onChange: (e) =>
                            s.Z.setSidechainCompressionStrength(e),
                          "aria-label":
                            j.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                        }),
                    }),
                  ],
                });
          })(n),
          H = (0, I.Z)(n, x, U),
          Y = (0, M.Z)(n.channelId, n.ownerId),
          W = (0, d.Z)(n.channelId),
          B = (0, a.e7)([_.Z], () => _.Z.getChannel(n.channelId), [
            n.channelId,
          ]),
          y = (0, Z.G)({
            stream: n,
            channelId: n.channelId,
            location: "StreamContextMenu",
          }),
          J = (0, S.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: "StreamContextMenu",
          });
        return (0, l.jsx)(c.Z, {
          context: t,
          object: R.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(r.Menu, {
            navId: "stream-context",
            onClose: i.Zy,
            "aria-label": j.Z.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: w,
            children: [
              (0, l.jsxs)(r.MenuGroup, { children: [P, G, D, y, J] }),
              (0, l.jsx)(r.MenuGroup, { children: k }),
              F,
              (0, l.jsxs)(r.MenuGroup, {
                children: [
                  (null == B ? void 0 : B.isGuildStageVoice()) ? null : W,
                  Y,
                  L && H,
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
          return I;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(442837),
        r = t(481060),
        s = t(846027),
        i = t(131951),
        o = t(594174),
        u = t(36703),
        c = t(358085),
        d = t(65154),
        M = t(689938);
      function I(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          I = (0, a.e7)([i.Z], () => i.Z.getLocalVolume(e, t), [e, t]),
          Z =
            e ===
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          S = t === d.Yn.STREAM;
        return Z
          ? null
          : (0, l.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: S ? M.Z.Messages.STREAM_VOLUME : M.Z.Messages.USER_VOLUME,
              control: (n, a) =>
                (0, l.jsx)(r.MenuSliderControl, {
                  ...n,
                  ref: a,
                  value: (0, u.P)(I),
                  maxValue: c.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => s.Z.setLocalVolume(e, (0, u.A)(n), t),
                  "aria-label": S
                    ? M.Z.Messages.STREAM_VOLUME
                    : M.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=cb258a1e35cdc089b15a.js.map
