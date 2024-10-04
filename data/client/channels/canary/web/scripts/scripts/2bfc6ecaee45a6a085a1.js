(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88904"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, u, l, o) {
        var a = -1,
          s = t.length;
        for (u || (u = i), o || (o = []); ++a < s; ) {
          var c = t[a];
          n > 0 && u(c)
            ? n > 1
              ? e(c, n - 1, u, l, o)
              : r(o, c)
            : !l && (o[o.length] = c);
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
    653255: function (e, t, n) {
      "use strict";
      var r,
        i,
        u,
        l,
        o = n(442837),
        a = n(570140),
        s = n(358085),
        c = n(998502),
        d = n(869614),
        f = n(281083),
        v = n(672598);
      let p = !1,
        h = !0,
        g = !1;
      class m extends (l = o.ZP.Store) {
        initialize() {
          !(!s.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, v.Z)(e)),
                (h = (0, d.Z)(e)),
                (g = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return p;
        }
        get canUseHardwareAcceleration() {
          return h;
        }
        get problematicGPUDriver() {
          return g;
        }
        getState() {
          return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: g,
          };
        }
      }
      (u = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = m)
          ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = u),
        (t.Z = new m(a.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (h = t.canUseHardwareAcceleration);
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
          return a;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        u = n(90757),
        l = n.n(u),
        o = n(65154);
      function a(e, t, n) {
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
//# sourceMappingURL=2bfc6ecaee45a6a085a1.js.map
