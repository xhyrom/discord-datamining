(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92236"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, u, l, o) {
        var c = -1,
          a = t.length;
        for (u || (u = i), o || (o = []); ++c < a; ) {
          var s = t[c];
          n > 0 && u(s)
            ? n > 1
              ? e(s, n - 1, u, l, o)
              : r(o, s)
            : !l && (o[o.length] = s);
        }
        return o;
      };
    },
    149912: function (e, t, n) {
      var r = n(466293),
        i = n(443735),
        u = n(402428),
        l = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return u(e) || i(e) || !!(l && e && e[l]);
      };
    },
    90757: function (e, t, n) {
      var r = n(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    869614: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      let r = new Set(["nvidia"]);
      function i(e) {
        for (let t of Object.keys(e)) {
          let n = e[t];
          if (null != n && null == n.error && r.has(t)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        u = n(358085);
      let l = {
        [u.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function o(e) {
        let t = l[(0, u.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            u = t[n];
          if (null == r || null == u || null != r.error) continue;
          let l = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(l, u)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        u = n(358085);
      let l = { [u.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function o(e) {
        let t = l[(0, u.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            u = t[n];
          if (null == r || null == u || null != r.error) continue;
          let l = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(l, u)) return !0;
        }
        return !1;
      }
    },
    299570: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return u;
        },
        t: function () {
          return l;
        },
      });
      var r = n(570140),
        i = n(131951);
      function u(e) {
        var t, n;
        null === (n = i.Z.getMediaEngine()) ||
          void 0 === n ||
          null === (t = n.presentNativeScreenSharePicker) ||
          void 0 === t ||
          t.call(n, e),
          r.Z.dispatch({
            type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT",
            style: e,
          });
      }
      function l() {
        var e, t;
        null === (t = i.Z.getMediaEngine()) ||
          void 0 === t ||
          null === (e = t.releaseNativeDesktopVideoSourcePickerStream) ||
          void 0 === e ||
          e.call(t),
          r.Z.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" });
      }
    },
    960861: function (e, t, n) {
      "use strict";
      n.d(t, {
        UB: function () {
          return T;
        },
        Uc: function () {
          return o;
        },
        kE: function () {
          return V;
        },
      });
      var r,
        i,
        u,
        l,
        o,
        c,
        a = n(470079),
        s = n(442837),
        d = n(570140),
        f = n(872810),
        E = n(998594),
        v = n(592125),
        p = n(430824),
        S = n(131951),
        P = n(496675),
        _ = n(944486),
        N = n(382182),
        g = n(74299),
        R = n(299570),
        Z = n(65154);
      ((r = o || (o = {}))[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error");
      let h = !1,
        C = 0,
        A = 0,
        I = !1,
        k = {};
      function m() {
        return S.Z.supports(Z.AN.NATIVE_SCREENSHARE_PICKER);
      }
      function b() {
        return (
          m() &&
          E.Z.getCurrentConfig(
            { location: "NativeScreenSharePickerStore_enabled" },
            { autoTrackExposure: !1 },
          ).enableSystemPicker
        );
      }
      function w() {
        let e = b() && (A > 0 || (h && 0 === C));
        if (e !== I) {
          var t, n;
          (I = e),
            null === (n = S.Z.getMediaEngine()) ||
              void 0 === n ||
              null === (t = n.setNativeDesktopVideoSourcePickerActive) ||
              void 0 === t ||
              t.call(n, I);
        }
      }
      function T() {
        return (0, a.useEffect)(
          () => (
            C++,
            w(),
            () => {
              0 == --C && w();
            }
          ),
          [],
        );
      }
      function V() {
        return (0, a.useEffect)(
          () => (
            A++,
            w(),
            () => {
              --A, w();
            }
          ),
          [],
        );
      }
      function O() {
        let e = v.Z.getChannel(_.Z.getVoiceChannelId());
        return (
          (h = null != e && (0, g.Z)(S.Z) && (0, N.JL)(e, p.Z, P.Z, !1)),
          w(),
          !1
        );
      }
      class W extends (c = s.ZP.Store) {
        initialize() {
          this.syncWith([S.Z, _.Z, v.Z, p.Z, P.Z], O),
            E.Z.subscribe(
              { location: "NativeScreenSharePickerStore_initialize" },
              w,
            ),
            O();
        }
        supported() {
          return m();
        }
        enabled() {
          return b();
        }
        releasePickerStream() {
          (0, R.t)();
        }
        getPickerState() {
          return k;
        }
      }
      (l = "NativeScreenSharePickerStore"),
        (u = "displayName") in (i = W)
          ? Object.defineProperty(i, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = l);
      t.ZP = new W(d.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
          let { existing: t } = e;
          if (((k = { lastPickerAction: 1 }), 0 === C && !t)) {
            let e = v.Z.getChannel(_.Z.getVoiceChannelId());
            null != e &&
              (0, g.Z)(S.Z) &&
              (0, N.JL)(e, p.Z, P.Z, !1) &&
              (0, f.WH)(e.getGuildId(), e.id, { sourceId: "prepicked:0" });
          }
        },
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
          k = { lastPickerAction: 2 };
        },
        NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
          let { error: t } = e;
          k = { lastPickerAction: 3, lastPickerError: t };
        },
        NATIVE_SCREEN_SHARE_PICKER_PRESENT: function () {
          k = { lastPickerAction: 0 };
        },
        NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
          k = {};
        },
      });
    },
    653255: function (e, t, n) {
      "use strict";
      var r,
        i,
        u,
        l,
        o = n(442837),
        c = n(570140),
        a = n(358085),
        s = n(998502),
        d = n(869614),
        f = n(281083),
        E = n(672598);
      let v = !1,
        p = !0,
        S = !1;
      class P extends (l = o.ZP.Store) {
        initialize() {
          !(!a.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
              (v = (0, E.Z)(e)),
                (p = (0, d.Z)(e)),
                (S = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return v;
        }
        get canUseHardwareAcceleration() {
          return p;
        }
        get problematicGPUDriver() {
          return S;
        }
        getState() {
          return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: S,
          };
        }
      }
      (u = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = P)
          ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = u),
        (t.Z = new P(c.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (p = t.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(145597);
      function u(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, i.QF)();
          return null == e || null == n
            ? null
            : (null == r ? void 0 : r.id) === e.id &&
                (null == r ? void 0 : r.pid) === n
              ? r
              : (r = {
                  id: e.id,
                  pid: n,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
      }
    },
    977059: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return u;
        },
        S: function () {
          return i;
        },
      });
      let r = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function u(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        u = n(90757),
        l = n.n(u),
        o = n(65154);
      function c(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [o.vA.WINDOW, o.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let u = [];
        return (
          t.includes(o.vA.SCREEN) &&
            e.supports(o.AN.SCREEN_PREVIEWS) &&
            (u.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== o.vA.SCREEN))),
          t.includes(o.vA.WINDOW) &&
            e.supports(o.AN.WINDOW_PREVIEWS) &&
            (u.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== o.vA.WINDOW))),
          0 !== t.length &&
            u.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: n,
              }),
            ),
          Promise.all(u).then((e) => l()(e))
        );
      }
    },
  },
]);
//# sourceMappingURL=e6eab916d411fa426260.js.map
