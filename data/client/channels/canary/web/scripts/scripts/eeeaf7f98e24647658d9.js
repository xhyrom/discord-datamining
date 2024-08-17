"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22183"],
  {
    987281: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return O;
          },
        });
      var l = t(735250);
      t(470079);
      var s = t(442837),
        r = t(481060),
        a = t(846027),
        o = t(239091),
        i = t(287734),
        u = t(872810),
        c = t(410575),
        d = t(441061),
        M = t(431368),
        Z = t(418469),
        S = t(435064),
        g = t(779618),
        C = t(39604),
        I = t(258609),
        h = t(111672),
        E = t(441167),
        m = t(700994),
        p = t(199902),
        f = t(314897),
        x = t(592125),
        A = t(131951),
        T = t(594174),
        _ = t(569545),
        b = t(981631),
        R = t(65154),
        V = t(689938);
      function v(e) {
        return (0, s.e7)([p.Z], () => {
          let n = p.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, _.V9)(n) === (0, _.V9)(e);
        });
      }
      function O(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: p,
            exitFullscreen: O,
            onSelect: j,
          } = e,
          N = (function (e) {
            let n = v(e),
              t = (0, g.Z)(A.Z),
              a = S.Z.getSettings().clipsEnabled,
              o = e.ownerId === f.default.getId(),
              { enableViewerClipping: i, ignoreSenderPreference: u } =
                E.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              c = (0, s.e7)([S.Z], () => S.Z.getIsAtMaxSaveClipOperations()),
              d =
                (0, s.e7)([S.Z], () =>
                  S.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || u;
            return t && i && n
              ? (0, l.jsx)(r.MenuItem, {
                  id: "clip-stream",
                  disabled: !a || !(o || d) || c,
                  label: V.Z.Messages.CLIPS_SAVE,
                  action: () => (o ? (0, C.C1)() : (0, C.C1)((0, _.V9)(e))),
                })
              : null;
          })(n),
          U = v(n),
          w = (function (e) {
            let n = v(e),
              t = (0, m.Z)(e.ownerId, R.Yn.STREAM);
            return n ? t : null;
          })(n),
          L = (function (e) {
            let n;
            let t = (0, s.e7)([I.Z], () => null != I.Z.getRemoteSessionId()),
              a = (0, s.e7)([x.Z], () => x.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              o = v(e),
              c = T.default.getCurrentUser(),
              d = null != c && e.ownerId === c.id;
            return ((n = d
              ? V.Z.Messages.STOP_STREAMING
              : o
                ? V.Z.Messages.STOP_WATCHING
                : V.Z.Messages.WATCH_STREAM),
            t || (!d && o && (null == a ? void 0 : a.isGuildStageVoice())))
              ? null
              : (0, l.jsx)(r.MenuItem, {
                  id: "watch",
                  label: n,
                  action: o
                    ? function () {
                        (0, u.g)((0, _.V9)(e));
                      }
                    : function () {
                        i.default.selectVoiceChannel(e.channelId), (0, u.rn)(e);
                      },
                });
          })(n),
          G = (function (e) {
            let n = v(e),
              t = (0, s.e7)([A.Z], () =>
                A.Z.isLocalMute(e.ownerId, R.Yn.STREAM),
              ),
              o = T.default.getCurrentUser(),
              i = null != o && e.ownerId === o.id;
            return !n || i
              ? null
              : (0, l.jsx)(r.MenuCheckboxItem, {
                  id: "mute",
                  label: V.Z.Messages.SOUND_MUTE,
                  action: function () {
                    a.Z.toggleLocalMute(e.ownerId, R.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          k = (function (e) {
            let n = v(e),
              t = e.ownerId === f.default.getId(),
              { sidechainAvailable: o } = h.Z.getCurrentConfig({
                location: "StreamContextMenu",
              }),
              i = (0, s.e7)([A.Z], () => A.Z.getSidechainCompression()),
              u = (0, s.e7)([A.Z], () => A.Z.getSidechainCompressionStrength());
            return !t && n && o
              ? (0, l.jsxs)(r.MenuGroup, {
                  children: [
                    (0, l.jsx)(r.MenuCheckboxItem, {
                      id: "sidechain-compression",
                      label: V.Z.Messages.SIDECHAIN_COMPRESSION,
                      action: () => a.Z.setSidechainCompression(!i),
                      checked: i,
                    }),
                    (0, l.jsx)(r.MenuControlItem, {
                      id: "sidechain-parameters",
                      label: V.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                      control: (e, n) =>
                        (0, l.jsx)(r.MenuSliderControl, {
                          ...e,
                          ref: n,
                          value: u,
                          maxValue: 100,
                          onChange: (e) =>
                            a.Z.setSidechainCompressionStrength(e),
                          "aria-label":
                            V.Z.Messages.SIDECHAIN_COMPRESSION_STRENGTH,
                        }),
                    }),
                  ],
                })
              : null;
          })(n),
          P = (0, Z.Z)(n, p, O),
          H = (0, M.Z)(n.channelId, n.ownerId),
          D = (0, d.Z)(n.channelId),
          Y = (0, s.e7)([x.Z], () => x.Z.getChannel(n.channelId), [
            n.channelId,
          ]);
        return (0, l.jsx)(c.Z, {
          context: t,
          object: b.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(r.Menu, {
            navId: "stream-context",
            onClose: o.Zy,
            "aria-label": V.Z.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: j,
            children: [
              (0, l.jsxs)(r.MenuGroup, { children: [L, N, G] }),
              (0, l.jsx)(r.MenuGroup, { children: w }),
              k,
              (0, l.jsxs)(r.MenuGroup, {
                children: [
                  (null == Y ? void 0 : Y.isGuildStageVoice()) ? null : D,
                  H,
                  U && P,
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
          return Z;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(442837),
        r = t(481060),
        a = t(846027),
        o = t(131951),
        i = t(594174),
        u = t(36703),
        c = t(358085),
        d = t(65154),
        M = t(689938);
      function Z(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          Z = (0, s.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
          S =
            e ===
            (null === (n = i.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          g = t === d.Yn.STREAM;
        return S
          ? null
          : (0, l.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: g ? M.Z.Messages.STREAM_VOLUME : M.Z.Messages.USER_VOLUME,
              control: (n, s) =>
                (0, l.jsx)(r.MenuSliderControl, {
                  ...n,
                  ref: s,
                  value: (0, u.P)(Z),
                  maxValue: c.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, u.A)(n), t),
                  "aria-label": g
                    ? M.Z.Messages.STREAM_VOLUME
                    : M.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=eeeaf7f98e24647658d9.js.map
