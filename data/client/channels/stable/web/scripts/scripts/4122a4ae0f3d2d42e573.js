(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3572"],
  {
    544140: function (e, n, t) {
      var r = t(796581),
        i = t(149912);
      e.exports = function e(n, t, o, u, l) {
        var a = -1,
          c = n.length;
        for (o || (o = i), l || (l = []); ++a < c; ) {
          var s = n[a];
          t > 0 && o(s)
            ? t > 1
              ? e(s, t - 1, o, u, l)
              : r(l, s)
            : !u && (l[l.length] = s);
        }
        return l;
      };
    },
    149912: function (e, n, t) {
      var r = t(466293),
        i = t(443735),
        o = t(402428),
        u = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(u && e && e[u]);
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
        o = t(358085);
      let u = {
        [o.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function l(e) {
        let n = u[(0, o.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            o = n[t];
          if (null == r || null == o || null != r.error) continue;
          let u = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!i().satisfies(u, o)) return !0;
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
        o = t(358085);
      let u = { [o.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function l(e) {
        let n = u[(0, o.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            o = n[t];
          if (null == r || null == o || null != r.error) continue;
          let u = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!i().satisfies(u, o)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, n, t) {
      "use strict";
      var r,
        i,
        o,
        u,
        l = t(442837),
        a = t(570140),
        c = t(358085),
        s = t(998502),
        d = t(869614),
        f = t(281083),
        v = t(672598);
      let p = !1,
        h = !0,
        m = !1;
      class g extends (u = l.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
              (p = (0, v.Z)(e)),
                (h = (0, d.Z)(e)),
                (m = (0, f.Z)(e)),
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
          return m;
        }
        getState() {
          return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: m,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = g)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (n.Z = new g(a.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (p = n.GPUDriversOutdated), (h = n.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, n, t) {
      "use strict";
      let r;
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(145597);
      function o(e, n) {
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
        o = t(200651);
      t(192379);
      var u = t(120356),
        l = t.n(u),
        a = t(481060),
        c = t(505965);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let s = { info: c.info, warning: c.warning },
        d = { info: a.CircleInformationIcon, warning: a.CircleWarningIcon };
      function f(e) {
        let { children: n, className: t, look: r = "info" } = e,
          i = d[r];
        return (0, o.jsxs)("div", {
          className: l()(c.root, t, s[r]),
          children: [
            (0, o.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, o.jsx)(a.Text, {
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
        o = t(90757),
        u = t.n(o),
        l = t(65154);
      function a(e, n, t) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (n = null != n ? n : [l.vA.WINDOW, l.vA.SCREEN]),
          (t = null != t ? t : { width: 150, height: 150 });
        let o = [];
        return (
          n.includes(l.vA.SCREEN) &&
            e.supports(l.AN.SCREEN_PREVIEWS) &&
            (o.push(e.getScreenPreviews(t.width, t.height)),
            (n = n.filter((e) => e !== l.vA.SCREEN))),
          n.includes(l.vA.WINDOW) &&
            e.supports(l.AN.WINDOW_PREVIEWS) &&
            (o.push(e.getWindowPreviews(t.width, t.height)),
            (n = n.filter((e) => e !== l.vA.WINDOW))),
          0 !== n.length &&
            o.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: n,
                thumbnailSize: t,
              }),
            ),
          Promise.all(o).then((e) => u()(e))
        );
      }
    },
    505965: function (e, n, t) {
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
//# sourceMappingURL=4122a4ae0f3d2d42e573.js.map
