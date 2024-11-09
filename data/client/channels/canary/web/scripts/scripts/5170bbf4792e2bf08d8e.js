(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47711"],
  {
    544140: function (e, n, t) {
      var r = t(796581),
        i = t(149912);
      e.exports = function e(n, t, u, o, l) {
        var a = -1,
          c = n.length;
        for (u || (u = i), l || (l = []); ++a < c; ) {
          var s = n[a];
          t > 0 && u(s)
            ? t > 1
              ? e(s, t - 1, u, o, l)
              : r(l, s)
            : !o && (l[l.length] = s);
        }
        return l;
      };
    },
    149912: function (e, n, t) {
      var r = t(466293),
        i = t(443735),
        u = t(402428),
        o = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return u(e) || i(e) || !!(o && e && e[o]);
      };
    },
    90757: function (e, n, t) {
      var r = t(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    869614: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      let r = new Set(["nvidia"]);
      function i(e) {
        for (let n of Object.keys(e)) {
          let t = e[n];
          if (null != t && null == t.error && r.has(n)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var r = t(553813),
        i = t.n(r),
        u = t(358085);
      let o = {
        [u.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function l(e) {
        let n = o[(0, u.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            u = n[t];
          if (null == r || null == u || null != r.error) continue;
          let o = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!i().satisfies(o, u)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var r = t(553813),
        i = t.n(r),
        u = t(358085);
      let o = { [u.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function l(e) {
        let n = o[(0, u.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            u = n[t];
          if (null == r || null == u || null != r.error) continue;
          let o = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!i().satisfies(o, u)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, n, t) {
      "use strict";
      var r,
        i,
        u,
        o,
        l = t(442837),
        a = t(570140),
        c = t(358085),
        s = t(998502),
        d = t(869614),
        f = t(281083),
        v = t(672598);
      let p = !1,
        m = !0,
        g = !1;
      class h extends (o = l.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, v.Z)(e)),
                (m = (0, d.Z)(e)),
                (g = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return p;
        }
        get canUseHardwareAcceleration() {
          return m;
        }
        get problematicGPUDriver() {
          return g;
        }
        getState() {
          return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: g,
          };
        }
      }
      (u = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = h)
          ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = u),
        (n.Z = new h(a.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (p = n.GPUDriversOutdated), (m = n.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, n, t) {
      "use strict";
      let r;
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(145597);
      function u(e, n) {
        if (__OVERLAY__) {
          let e = n.getGame(),
            t = (0, i.QF)();
          return null == e || null == t
            ? null
            : (null == r ? void 0 : r.id) === e.id &&
                (null == r ? void 0 : r.pid) === t
              ? r
              : (r = {
                  id: e.id,
                  pid: t,
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
    977059: function (e, n, t) {
      "use strict";
      t.d(n, {
        R: function () {
          return u;
        },
        S: function () {
          return i;
        },
      });
      let r = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: n } = e;
        return r.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function u(e) {
        let { location: n } = e;
        return r.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    494620: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
        z: function () {
          return i;
        },
      });
      var r,
        i,
        u = t(200651);
      t(192379);
      var o = t(120356),
        l = t.n(o),
        a = t(481060),
        c = t(179840);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let s = { info: c.info, warning: c.warning },
        d = { info: a.CircleInformationIcon, warning: a.CircleWarningIcon };
      function f(e) {
        let { children: n, className: t, look: r = "info" } = e,
          i = d[r];
        return (0, u.jsxs)("div", {
          className: l()(c.root, t, s[r]),
          children: [
            (0, u.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, u.jsx)(a.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    141038: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(653041),
        t(47120);
      var r = t(512722),
        i = t.n(r),
        u = t(90757),
        o = t.n(u),
        l = t(65154);
      function a(e, n, t) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (n = null != n ? n : [l.vA.WINDOW, l.vA.SCREEN]),
          (t = null != t ? t : { width: 150, height: 150 });
        let u = [];
        return (
          n.includes(l.vA.SCREEN) &&
            e.supports(l.AN.SCREEN_PREVIEWS) &&
            (u.push(e.getScreenPreviews(t.width, t.height)),
            (n = n.filter((e) => e !== l.vA.SCREEN))),
          n.includes(l.vA.WINDOW) &&
            e.supports(l.AN.WINDOW_PREVIEWS) &&
            (u.push(e.getWindowPreviews(t.width, t.height)),
            (n = n.filter((e) => e !== l.vA.WINDOW))),
          0 !== n.length &&
            u.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: n,
                thumbnailSize: t,
              }),
            ),
          Promise.all(u).then((e) => o()(e))
        );
      }
    },
    179840: function (e, n, t) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
  },
]);
//# sourceMappingURL=5170bbf4792e2bf08d8e.js.map
