"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22183"],
  {
    701098: function (e, n, t) {
      t.d(n, {
        G: function () {
          return M;
        },
      });
      var a = t(735250),
        r = t(470079),
        l = t(442837),
        o = t(481060),
        i = t(569545),
        s = t(352954),
        u = t(441894),
        c = t(199902),
        d = t(689938);
      function M(e) {
        let { stream: n, channelId: t, location: M } = e,
          S = (0, u.J)({ channelId: t, location: M }),
          Z = (0, l.e7)(
            [c.Z],
            () => null != c.Z.getActiveStreamForApplicationStream(n),
          ),
          m = (0, i.V9)(n),
          h = r.useCallback(() => {
            s.Z.openSecureFramesStreamVerification(m, t);
          }, [t, m]);
        return S && Z
          ? (0, a.jsx)(o.MenuItem, {
              id: "secure-frames-stream-verification",
              label: d.Z.Messages.E2EE_VIEW_STREAM_PRIVACY_CODE,
              action: h,
            })
          : null;
      }
    },
    987281: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return U;
          },
        });
      var a = t(735250);
      t(470079);
      var r = t(442837),
        l = t(481060),
        o = t(846027),
        i = t(239091),
        s = t(287734),
        u = t(872810),
        c = t(410575),
        d = t(441061),
        M = t(431368),
        S = t(418469),
        Z = t(701098),
        m = t(435064),
        h = t(779618),
        C = t(39604),
        I = t(258609),
        f = t(111672),
        g = t(441167),
        E = t(700994),
        p = t(199902),
        x = t(314897),
        A = t(592125),
        T = t(131951),
        V = t(594174),
        _ = t(569545),
        v = t(981631),
        b = t(65154),
        j = t(689938);
      function R(e) {
        return (0, r.e7)([p.Z], () => {
          let n = p.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, _.V9)(n) === (0, _.V9)(e);
        });
      }
      function U(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: p,
            exitFullscreen: U,
            onSelect: w,
          } = e,
          L = (function (e) {
            let n = R(e),
              t = (0, h.Z)(T.Z),
              o = m.Z.getSettings().clipsEnabled,
              i = e.ownerId === x.default.getId(),
              { enableViewerClipping: s, ignoreSenderPreference: u } =
                g.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              c = (0, r.e7)([m.Z], () => m.Z.getIsAtMaxSaveClipOperations()),
              d =
                (0, r.e7)([m.Z], () =>
                  m.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || u;
            return t && s && n
              ? (0, a.jsx)(l.MenuItem, {
                  id: "clip-stream",
                  disabled: !o || !(i || d) || c,
                  label: j.Z.Messages.CLIPS_SAVE,
                  action: () => (i ? (0, C.C1)() : (0, C.C1)((0, _.V9)(e))),
                })
              : null;
          })(n),
          O = R(n),
          N = (function (e) {
            let n = R(e),
              t = (0, E.Z)(e.ownerId, b.Yn.STREAM);
            return n ? t : null;
          })(n),
          k = (function (e) {
            let n;
            let t = (0, r.e7)([I.Z], () => null != I.Z.getRemoteSessionId()),
              o = (0, r.e7)([A.Z], () => A.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              i = R(e),
              c = V.default.getCurrentUser(),
              d = null != c && e.ownerId === c.id;
            return ((n = d
              ? j.Z.Messages.STOP_STREAMING
              : i
                ? j.Z.Messages.STOP_WATCHING
                : j.Z.Messages.WATCH_STREAM),
            t || (!d && i && (null == o ? void 0 : o.isGuildStageVoice())))
              ? null
              : (0, a.jsx)(l.MenuItem, {
                  id: "watch",
                  label: n,
                  action: i
                    ? function () {
                        (0, u.g)((0, _.V9)(e));
                      }
                    : function () {
                        s.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                      },
                });
          })(n),
          G = (function (e) {
            let n = R(e),
              t = (0, r.e7)([T.Z], () =>
                T.Z.isLocalMute(e.ownerId, b.Yn.STREAM),
              ),
              i = V.default.getCurrentUser(),
              s = null != i && e.ownerId === i.id;
            return !n || s
              ? null
              : (0, a.jsx)(l.MenuCheckboxItem, {
                  id: "mute",
                  label: j.Z.Messages.SOUND_MUTE,
                  action: function () {
                    o.Z.toggleLocalMute(e.ownerId, b.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          P = (function (e) {
            let n = R(e),
              t = e.ownerId === x.default.getId(),
              { sidechainAvailable: i } = f.Z.getCurrentConfig({
                location: "StreamContextMenu",
              }),
              s = (0, r.e7)([T.Z], () => T.Z.getSidechainCompression()),
              u = (0, r.e7)([T.Z], () => T.Z.getSidechainCompressionStrength());
            return !t && n && i
              ? (0, a.jsxs)(l.MenuGroup, {
                  children: [
                    (0, a.jsx)(l.MenuCheckboxItem, {
                      id: "sidechain-compression",
                      label: j.Z.Messages.SIDECHAIN_COMPRESSION,
                      action: () => o.Z.setSidechainCompression(!s),
                      checked: s,
                    }),
                    (0, a.jsx)(l.MenuControlItem, {
                      id: "sidechain-parameters",
                      label: j.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                      control: (e, n) =>
                        (0, a.jsx)(l.MenuSliderControl, {
                          ...e,
                          ref: n,
                          value: u,
                          maxValue: 100,
                          onChange: (e) =>
                            o.Z.setSidechainCompressionStrength(e),
                          "aria-label":
                            j.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                        }),
                    }),
                  ],
                })
              : null;
          })(n),
          F = (0, S.Z)(n, p, U),
          y = (0, M.Z)(n.channelId, n.ownerId),
          H = (0, d.Z)(n.channelId),
          D = (0, r.e7)([A.Z], () => A.Z.getChannel(n.channelId), [
            n.channelId,
          ]),
          Y = (0, Z.G)({
            stream: n,
            channelId: n.channelId,
            location: "StreamContextMenu",
          });
        return (0, a.jsx)(c.Z, {
          context: t,
          object: v.qAy.CONTEXT_MENU,
          children: (0, a.jsxs)(l.Menu, {
            navId: "stream-context",
            onClose: i.Zy,
            "aria-label": j.Z.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: w,
            children: [
              (0, a.jsxs)(l.MenuGroup, { children: [k, L, G, Y] }),
              (0, a.jsx)(l.MenuGroup, { children: N }),
              P,
              (0, a.jsxs)(l.MenuGroup, {
                children: [
                  (null == D ? void 0 : D.isGuildStageVoice()) ? null : H,
                  y,
                  O && F,
                ],
              }),
            ],
          }),
        });
      }
    },
    352954: function (e, n, t) {
      t(411104);
      var a = t(735250);
      t(470079);
      var r = t(481060),
        l = t(689938);
      n.Z = {
        openSecureFramesStreamVerification: function (e, n) {
          (0, r.openModalLazy)(async () => {
            let r = (
              await Promise.all([t.e("36034"), t.e("98330")]).then(
                t.bind(t, 660250),
              )
            ).default;
            return (t) => (0, a.jsx)(r, { streamKey: e, channelId: n, ...t });
          });
        },
        openSecureFramesUserVerificationModal: function (e, n) {
          (0, r.openModalLazy)(async () => {
            let r = (
              await Promise.all([t.e("36034"), t.e("3708")]).then(
                t.bind(t, 963410),
              )
            ).default;
            return (t) => (0, a.jsx)(r, { userId: e, channelId: n, ...t });
          });
        },
        openSecureFramesUpdateConfirmation: function (e) {
          let {
            title: n,
            subtitle: o,
            confirmText: i = l.Z.Messages.CONFIRM,
            onConfirm: s,
          } = e;
          (0, r.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(
              t.bind(t, 481060),
            );
            return (t) =>
              (0, a.jsx)(e, {
                header: n,
                confirmText: i,
                cancelText: l.Z.Messages.CANCEL,
                onConfirm: s,
                ...t,
                children: (0, a.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: o,
                }),
              });
          });
        },
        handleSecureFramesUserVerificationLink: function (e) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(442837),
        l = t(481060),
        o = t(846027),
        i = t(131951),
        s = t(594174),
        u = t(36703),
        c = t(358085),
        d = t(65154),
        M = t(689938);
      function S(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          S = (0, r.e7)([i.Z], () => i.Z.getLocalVolume(e, t), [e, t]),
          Z =
            e ===
            (null === (n = s.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          m = t === d.Yn.STREAM;
        return Z
          ? null
          : (0, a.jsx)(l.MenuControlItem, {
              id: "user-volume",
              label: m ? M.Z.Messages.STREAM_VOLUME : M.Z.Messages.USER_VOLUME,
              control: (n, r) =>
                (0, a.jsx)(l.MenuSliderControl, {
                  ...n,
                  ref: r,
                  value: (0, u.P)(S),
                  maxValue: c.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, u.A)(n), t),
                  "aria-label": m
                    ? M.Z.Messages.STREAM_VOLUME
                    : M.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=d948f7739854077e4c12.js.map
