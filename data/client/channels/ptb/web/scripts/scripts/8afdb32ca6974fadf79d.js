"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50350"],
  {
    701098: function (e, n, t) {
      t.d(n, {
        G: function () {
          return f;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        o = t(481060),
        a = t(569545),
        u = t(352954),
        c = t(277642),
        s = t(441894),
        d = t(199902),
        g = t(388032);
      function f(e) {
        let { stream: n, channelId: t, location: f } = e,
          h = (0, s.J)({ channelId: t, location: f }),
          m = (0, r.e7)(
            [d.Z],
            () => null != d.Z.getActiveStreamForApplicationStream(n),
          ),
          Z = (0, a.V9)(n),
          I = (0, c.t)(Z),
          C = i.useCallback(() => {
            u.Z.openSecureFramesStreamVerification(Z, t);
          }, [t, Z]);
        return h && m && !I
          ? (0, l.jsx)(o.MenuItem, {
              id: "secure-frames-stream-verification",
              label: g.intl.string(g.t.tjbJbW),
              action: C,
            })
          : null;
      }
    },
    607783: function (e, n, t) {
      t.d(n, {
        B: function () {
          return f;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        o = t(481060),
        a = t(40851),
        u = t(352954),
        c = t(630759),
        s = t(441894),
        d = t(314897),
        g = t(388032);
      function f(e) {
        let { userId: n, channelId: t, guildId: f, location: h } = e,
          m = (0, s.J)({ channelId: t, location: h }),
          Z = (0, r.e7)([d.default], () => d.default.getId() === n),
          I = (0, a.bp)(),
          C = i.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
              n,
              t,
              () => (0, c.fz)({ userId: n, channelId: t, guildId: f }),
              I,
            );
          }, [I, t, f, n]);
        return !m || Z
          ? null
          : (0, l.jsx)(o.MenuItem, {
              id: "secure-frames-user-verification",
              label: g.intl.string(g.t["8ErYvb"]),
              action: C,
            });
      }
    },
    987281: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return J;
          },
        });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        o = t(846027),
        a = t(239091),
        u = t(287734),
        c = t(872810),
        s = t(410575),
        d = t(441061),
        g = t(431368),
        f = t(418469),
        h = t(701098),
        m = t(607783),
        Z = t(435064),
        I = t(779618),
        C = t(39604),
        p = t(258609),
        S = t(111672),
        M = t(441167),
        x = t(700994),
        b = t(199902),
        v = t(314897),
        j = t(592125),
        w = t(131951),
        V = t(594174),
        E = t(358085),
        A = t(569545),
        k = t(981631),
        T = t(65154),
        G = t(388032);
      function U(e) {
        return (0, i.e7)([b.Z], () => {
          let n = b.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, A.V9)(n) === (0, A.V9)(e);
        });
      }
      function J(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: b,
            exitFullscreen: J,
            onSelect: F,
          } = e,
          R = (function (e) {
            let n = U(e),
              t = (0, I.Z)(w.Z),
              o = Z.Z.getSettings().clipsEnabled,
              a = e.ownerId === v.default.getId(),
              { enableViewerClipping: u, ignoreSenderPreference: c } =
                M.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              s = (0, i.e7)([Z.Z], () => Z.Z.getIsAtMaxSaveClipOperations()),
              d =
                (0, i.e7)([Z.Z], () =>
                  Z.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || c;
            return t && u && n
              ? (0, l.jsx)(r.MenuItem, {
                  id: "clip-stream",
                  disabled: !o || !(a || d) || s,
                  label: G.intl.string(G.t.U4URzM),
                  action: () => (a ? (0, C.C1)() : (0, C.C1)((0, A.V9)(e))),
                })
              : null;
          })(n),
          Y = U(n),
          L = (function (e) {
            let n = U(e),
              t = (0, x.Z)(e.ownerId, T.Yn.STREAM);
            return n ? t : null;
          })(n),
          y = (function (e) {
            let n;
            let t = (0, i.e7)([p.Z], () => null != p.Z.getRemoteSessionId()),
              o = (0, i.e7)([j.Z], () => j.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              a = U(e),
              s = V.default.getCurrentUser(),
              d = null != s && e.ownerId === s.id;
            return ((n = d
              ? G.intl.string(G.t.S5anIS)
              : a
                ? G.intl.string(G.t.q3O3Jy)
                : G.intl.string(G.t["7Xq/nZ"])),
            t || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
              ? null
              : (0, l.jsx)(r.MenuItem, {
                  id: "watch",
                  label: n,
                  action: a
                    ? function () {
                        (0, c.g)((0, A.V9)(e));
                      }
                    : function () {
                        u.default.selectVoiceChannel(e.channelId), (0, c.rn)(e);
                      },
                });
          })(n),
          z = (function (e) {
            let n = U(e),
              t = (0, i.e7)([w.Z], () =>
                w.Z.isLocalMute(e.ownerId, T.Yn.STREAM),
              ),
              a = V.default.getCurrentUser(),
              u = null != a && e.ownerId === a.id;
            return !n || u
              ? null
              : (0, l.jsx)(r.MenuCheckboxItem, {
                  id: "mute",
                  label: G.intl.string(G.t.sWmtIy),
                  action: function () {
                    o.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          B = (function (e) {
            let n = U(e),
              t = e.ownerId === v.default.getId(),
              { sidechainAvailable: a } = S.Z.getCurrentConfig({
                location: "StreamContextMenu",
              }),
              u = (0, i.e7)([w.Z], () => w.Z.getSidechainCompression()),
              c = (0, i.e7)([w.Z], () => w.Z.getSidechainCompressionStrength());
            return t || !n || !a || (0, E.isWeb)()
              ? null
              : (0, l.jsxs)(r.MenuGroup, {
                  children: [
                    (0, l.jsx)(r.MenuCheckboxItem, {
                      id: "sidechain-compression",
                      label: G.intl.string(G.t["/jwMtr"]),
                      action: () => o.Z.setSidechainCompression(!u),
                      checked: u,
                    }),
                    (0, l.jsx)(r.MenuControlItem, {
                      id: "sidechain-parameters",
                      label: G.intl.string(G.t.fhEzfn),
                      control: (e, n) =>
                        (0, l.jsx)(r.MenuSliderControl, {
                          ...e,
                          ref: n,
                          value: c,
                          maxValue: 100,
                          onChange: (e) =>
                            o.Z.setSidechainCompressionStrength(e),
                          "aria-label": G.intl.string(G.t.fhEzfn),
                        }),
                    }),
                  ],
                });
          })(n),
          N = (0, f.Z)(n, b, J),
          q = (0, g.Z)(n.channelId, n.ownerId),
          O = (0, d.Z)(n.channelId),
          W = (0, i.e7)([j.Z], () => j.Z.getChannel(n.channelId), [
            n.channelId,
          ]),
          _ = (0, h.G)({
            stream: n,
            channelId: n.channelId,
            location: "StreamContextMenu",
          }),
          H = (0, m.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: "StreamContextMenu",
          });
        return (0, l.jsx)(s.Z, {
          context: t,
          object: k.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(r.Menu, {
            navId: "stream-context",
            onClose: a.Zy,
            "aria-label": G.intl.string(G.t.Gl3Q39),
            onSelect: F,
            children: [
              (0, l.jsxs)(r.MenuGroup, { children: [y, R, z, _, H] }),
              (0, l.jsx)(r.MenuGroup, { children: L }),
              B,
              (0, l.jsxs)(r.MenuGroup, {
                children: [
                  (null == W ? void 0 : W.isGuildStageVoice()) ? null : O,
                  q,
                  Y && N,
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
          return f;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        o = t(846027),
        a = t(131951),
        u = t(594174),
        c = t(36703),
        s = t(358085),
        d = t(65154),
        g = t(388032);
      function f(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          f = (0, i.e7)([a.Z], () => a.Z.getLocalVolume(e, t), [e, t]),
          h =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          m = t === d.Yn.STREAM;
        return h
          ? null
          : (0, l.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: m ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
              control: (n, i) =>
                (0, l.jsx)(r.MenuSliderControl, {
                  ...n,
                  ref: i,
                  value: (0, c.P)(f),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, c.A)(n), t),
                  "aria-label": m
                    ? g.intl.string(g.t.t4JBnJ)
                    : g.intl.string(g.t.m7TNdH),
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=8afdb32ca6974fadf79d.js.map
