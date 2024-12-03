"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5704"],
  {
    701098: function (e, n, t) {
      t.d(n, {
        G: function () {
          return m;
        },
      });
      var l = t(200651),
        r = t(192379),
        i = t(442837),
        o = t(481060),
        a = t(569545),
        u = t(352954),
        c = t(277642),
        s = t(441894),
        d = t(199902),
        g = t(388032);
      function m(e) {
        let { stream: n, channelId: t, location: m } = e,
          f = (0, s.J)({ channelId: t, location: m }),
          h = (0, i.e7)(
            [d.Z],
            () => null != d.Z.getActiveStreamForApplicationStream(n),
          ),
          C = (0, a.V9)(n),
          I = (0, c.t)(C),
          Z = r.useCallback(() => {
            u.Z.openSecureFramesStreamVerification(C, t);
          }, [t, C]);
        return f && h && !I
          ? (0, l.jsx)(o.MenuItem, {
              id: "secure-frames-stream-verification",
              label: g.intl.string(g.t.tjbJbW),
              action: Z,
            })
          : null;
      }
    },
    607783: function (e, n, t) {
      t.d(n, {
        B: function () {
          return m;
        },
      });
      var l = t(200651),
        r = t(192379),
        i = t(442837),
        o = t(481060),
        a = t(40851),
        u = t(352954),
        c = t(630759),
        s = t(441894),
        d = t(314897),
        g = t(388032);
      function m(e) {
        let { userId: n, channelId: t, guildId: m, location: f } = e,
          h = (0, s.J)({ channelId: t, location: f }),
          C = (0, i.e7)([d.default], () => d.default.getId() === n),
          I = (0, a.bp)(),
          Z = r.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
              n,
              t,
              () => (0, c.fz)({ userId: n, channelId: t, guildId: m }),
              I,
            );
          }, [I, t, m, n]);
        return !h || C
          ? null
          : (0, l.jsx)(o.MenuItem, {
              id: "secure-frames-user-verification",
              label: g.intl.string(g.t["8ErYvb"]),
              action: Z,
            });
      }
    },
    360429: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        });
      var l = t(200651);
      t(192379);
      var r = t(442837),
        i = t(481060),
        o = t(846027),
        a = t(239091),
        u = t(287734),
        c = t(872810),
        s = t(410575),
        d = t(418469),
        g = t(701098),
        m = t(607783),
        f = t(435064),
        h = t(779618),
        C = t(39604),
        I = t(258609),
        Z = t(569545),
        x = t(352978),
        p = t(111672),
        M = t(441167),
        S = t(700994),
        b = t(199902),
        j = t(314897),
        v = t(592125),
        E = t(131951),
        V = t(594174),
        k = t(358085),
        w = t(1226),
        A = t(981631),
        T = t(65154),
        G = t(388032);
      function L(e) {
        return (0, r.e7)([b.Z], () => {
          let n = b.Z.getActiveStreamForApplicationStream(e);
          return null != n && (0, Z.V9)(n) === (0, Z.V9)(e);
        });
      }
      function N(e) {
        let {
            stream: n,
            analyticsContext: t,
            appContext: b,
            exitFullscreen: N,
            onSelect: U,
          } = e,
          J = (function (e) {
            let n = L(e),
              t = (0, h.Z)(E.Z),
              o = f.Z.getSettings().clipsEnabled,
              a = e.ownerId === j.default.getId(),
              { enableViewerClipping: u, ignoreSenderPreference: c } =
                M.Z.useExperiment(
                  { location: "StreamContextMenu" },
                  { autoTrackExposure: !1 },
                ),
              s = (0, r.e7)([f.Z], () => f.Z.getIsAtMaxSaveClipOperations()),
              d =
                (0, r.e7)([f.Z], () =>
                  f.Z.isViewerClippingAllowedForUser(e.ownerId),
                ) || c;
            return t && u && n
              ? (0, l.jsx)(i.MenuItem, {
                  id: "clip-stream",
                  disabled: !o || !(a || d) || s,
                  label: G.intl.string(G.t.U4URzM),
                  action: () => (a ? (0, C.C1)() : (0, C.C1)((0, Z.V9)(e))),
                })
              : null;
          })(n),
          O = L(n),
          R = (function (e) {
            let n = L(e),
              t = (0, S.Z)(e.ownerId, T.Yn.STREAM);
            return n ? t : null;
          })(n),
          B = (function (e) {
            let n;
            let t = (0, r.e7)([I.Z], () => null != I.Z.getRemoteSessionId()),
              o = (0, r.e7)([v.Z], () => v.Z.getChannel(e.channelId), [
                e.channelId,
              ]),
              a = L(e),
              s = V.default.getCurrentUser(),
              d = null != s && e.ownerId === s.id;
            return ((n = d
              ? G.intl.string(G.t.S5anIS)
              : a
                ? G.intl.string(G.t.q3O3Jy)
                : G.intl.string(G.t["7Xq/nZ"])),
            t || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
              ? null
              : (0, l.jsx)(i.MenuItem, {
                  id: "watch",
                  label: n,
                  action: a
                    ? function () {
                        (0, c.g)((0, Z.V9)(e));
                      }
                    : function () {
                        u.default.selectVoiceChannel(e.channelId), (0, c.rn)(e);
                      },
                });
          })(n),
          F = (function (e) {
            let n = L(e),
              t = (0, r.e7)([E.Z], () =>
                E.Z.isLocalMute(e.ownerId, T.Yn.STREAM),
              ),
              a = V.default.getCurrentUser(),
              u = null != a && e.ownerId === a.id;
            return !n || u
              ? null
              : (0, l.jsx)(i.MenuCheckboxItem, {
                  id: "mute",
                  label: G.intl.string(G.t.sWmtIy),
                  action: function () {
                    o.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM);
                  },
                  checked: t,
                });
          })(n),
          Y = (function (e) {
            let n = L(e),
              t = e.ownerId === j.default.getId(),
              { sidechainAvailable: a } = p.Z.getCurrentConfig({
                location: "StreamContextMenu",
              }),
              u = (0, r.e7)([E.Z], () => E.Z.getSidechainCompression()),
              c = (0, r.e7)([E.Z], () => E.Z.getSidechainCompressionStrength());
            return t || !n || !a || (0, k.isWeb)()
              ? null
              : (0, l.jsxs)(i.MenuGroup, {
                  children: [
                    (0, l.jsx)(i.MenuCheckboxItem, {
                      id: "sidechain-compression",
                      label: G.intl.string(G.t["/jwMtr"]),
                      action: () => o.Z.setSidechainCompression(!u),
                      checked: u,
                    }),
                    (0, l.jsx)(i.MenuControlItem, {
                      id: "sidechain-parameters",
                      label: G.intl.string(G.t.fhEzfn),
                      control: (e, n) =>
                        (0, l.jsx)(i.MenuSliderControl, {
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
          z = (0, d.Z)(n, b, N),
          q = (0, g.G)({
            stream: n,
            channelId: n.channelId,
            location: "StreamContextMenu",
          }),
          y = (0, m.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: "StreamContextMenu",
          }),
          D = (function (e) {
            let n = (n) => {
                (0, w.cq)(e, n);
              },
              t = (0, w.BO)(e);
            return (0, l.jsx)(i.MenuControlItem, {
              id: "stream-zoom",
              label: G.intl.string(G.t.B3kEDg),
              control: (e, r) =>
                (0, l.jsx)(i.MenuSliderControl, {
                  ...e,
                  ref: r,
                  value: t,
                  maxValue: 300,
                  onChange: n,
                  minValue: 100,
                  "aria-label": G.intl.string(G.t.B3kEDg),
                }),
            });
          })(n),
          W = (function (e) {
            let n = (0, w.xN)(e);
            return (0, l.jsx)(i.MenuCheckboxItem, {
              id: "fit",
              label: G.intl.string(G.t.mpnvra),
              action: () => {
                (0, w.gI)(e, n === x.L.CONTAIN ? x.L.COVER : x.L.CONTAIN);
              },
              checked: n === x.L.COVER,
            });
          })(n);
        return (0, l.jsx)(s.Z, {
          context: t,
          object: A.qAy.CONTEXT_MENU,
          children: (0, l.jsxs)(i.Menu, {
            navId: "stream-context",
            onClose: a.Zy,
            "aria-label": G.intl.string(G.t.Gl3Q39),
            onSelect: U,
            children: [
              (0, l.jsxs)(i.MenuGroup, { children: [B, J, F, q, y] }),
              (0, l.jsx)(i.MenuGroup, { children: R }),
              (0, l.jsxs)(i.MenuGroup, { children: [D, W] }),
              Y,
              (0, l.jsx)(i.MenuGroup, { children: O && z }),
            ],
          }),
        });
      }
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var l = t(200651);
      t(192379);
      var r = t(442837),
        i = t(481060),
        o = t(846027),
        a = t(131951),
        u = t(594174),
        c = t(36703),
        s = t(358085),
        d = t(65154),
        g = t(388032);
      function m(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : d.Yn.DEFAULT,
          m = (0, r.e7)([a.Z], () => a.Z.getLocalVolume(e, t), [e, t]),
          f =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          h = t === d.Yn.STREAM;
        return f
          ? null
          : (0, l.jsx)(i.MenuControlItem, {
              id: "user-volume",
              label: h ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
              control: (n, r) =>
                (0, l.jsx)(i.MenuSliderControl, {
                  ...n,
                  ref: r,
                  value: (0, c.P)(m),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, c.A)(n), t),
                  "aria-label": h
                    ? g.intl.string(g.t.t4JBnJ)
                    : g.intl.string(g.t.m7TNdH),
                }),
            });
      }
    },
  },
]);
//# sourceMappingURL=9e1da1b8d0f761d398b5.js.map
