"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22183"],
  {
    987281: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        });
      var l = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        a = t(846027),
        s = t(239091),
        o = t(287734),
        i = t(872810),
        d = t(410575),
        c = t(441061),
        M = t(431368),
        Z = t(418469),
        g = t(435064),
        I = t(779618),
        S = t(39604),
        E = t(258609),
        h = t(441167),
        C = t(700994),
        f = t(199902),
        A = t(314897),
        p = t(592125),
        T = t(131951),
        m = t(594174),
        x = t(569545),
        V = t(981631),
        v = t(65154),
        U = t(689938);
      function _(e) {
        return (0, r.e7)([f.Z], () => {
          let n = f.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, x.V9)(n) === (0, x.V9)(e);
        });
      }
      function b(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: f,
            exitFullscreen: b,
            onSelect: w,
          } = e,
          L = (function (e) {
            let n = _(e),
              t = (0, I.Z)(T.Z),
              a = g.Z.getSettings().clipsEnabled,
              s = e.ownerId === A.default.getId(),
              { enableViewerClipping: o, ignoreSenderPreference: i } =
                h.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              d = (0, r.e7)([g.Z], () => g.Z.getIsAtMaxSaveClipOperations()),
              c =
                (0, r.e7)([g.Z], () =>
                  g.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || i;
            return t && o && n
              ? (0, l.jsx)(u.MenuItem, {
                  id: "clip-stream",
                  disabled: !a || !(s || c) || d,
                  label: U.Z.Messages.CLIPS_SAVE,
                  action: () => (s ? (0, S.C1)() : (0, S.C1)((0, x.V9)(e))),
                })
              : null;
          })(n),
          R = _(n),
          j = (function (e) {
            let n = _(e),
              t = (0, C.Z)(e.ownerId, v.Yn.STREAM);
            return n ? t : null;
          })(n),
          O = (function (e) {
            let n;
            let t = (0, r.e7)([E.Z], () => null != E.Z.getRemoteSessionId()),
              a = (0, r.e7)([p.Z], () => p.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              s = _(e),
              d = m.default.getCurrentUser(),
              c = null != d && e.ownerId === d.id;
            return ((n = c
              ? U.Z.Messages.STOP_STREAMING
              : s
                ? U.Z.Messages.STOP_WATCHING
                : U.Z.Messages.WATCH_STREAM),
            t || (!c && s && (null == a ? void 0 : a.isGuildStageVoice())))
              ? null
              : (0, l.jsx)(u.MenuItem, {
                  id: "watch",
                  label: n,
                  action: s
                    ? function () {
                        (0, i.g)((0, x.V9)(e));
                      }
                    : function () {
                        o.default.selectVoiceChannel(e.channelId), (0, i.rn)(e);
                      },
                });
          })(n),
          k = (function (e) {
            let n = _(e),
              t = (0, r.e7)([T.Z], () =>
                T.Z.isLocalMute(e.ownerId, v.Yn.STREAM),
              ),
              s = m.default.getCurrentUser(),
              o = null != s && e.ownerId === s.id;
            return !n || o
              ? null
              : (0, l.jsx)(u.MenuCheckboxItem, {
                  id: "mute",
                  label: U.Z.Messages.SOUND_MUTE,
                  action: function () {
                    a.Z.toggleLocalMute(e.ownerId, v.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          G = (0, Z.Z)(n, f, b),
          N = (0, M.Z)(n.channelId, n.ownerId),
          P = (0, c.Z)(n.channelId),
          Y = (0, r.e7)([p.Z], () => p.Z.getChannel(n.channelId), [
            n.channelId,
          ]);
        return (0, l.jsx)(d.Z, {
          context: t,
          object: V.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(u.Menu, {
            navId: "stream-context",
            onClose: s.Zy,
            "aria-label": U.Z.Messages.STREAM_ACTIONS_MENU_LABEL,
            onSelect: w,
            children: [
              (0, l.jsxs)(u.MenuGroup, { children: [O, L, k] }),
              (0, l.jsx)(u.MenuGroup, { children: j }),
              (0, l.jsxs)(u.MenuGroup, {
                children: [
                  (null == Y ? void 0 : Y.isGuildStageVoice()) ? null : P,
                  N,
                  R && G,
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
      var r = t(442837),
        u = t(481060),
        a = t(846027),
        s = t(131951),
        o = t(594174),
        i = t(36703),
        d = t(358085),
        c = t(65154),
        M = t(689938);
      function Z(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          Z = (0, r.e7)([s.Z], () => s.Z.getLocalVolume(e, t), [e, t]),
          g =
            e ===
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          I = t === c.Yn.STREAM;
        return g
          ? null
          : (0, l.jsx)(u.MenuControlItem, {
              id: "user-volume",
              label: I ? M.Z.Messages.STREAM_VOLUME : M.Z.Messages.USER_VOLUME,
              control: (n, r) =>
                (0, l.jsx)(u.MenuSliderControl, {
                  ...n,
                  ref: r,
                  value: (0, i.P)(Z),
                  maxValue: d.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, i.A)(n), t),
                  "aria-label": I
                    ? M.Z.Messages.STREAM_VOLUME
                    : M.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=ca89135657ab30271409.js.map
