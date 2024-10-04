"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33641"],
  {
    869614: function (e, t, n) {
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
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        l = n(358085);
      let u = {
        [l.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function o(e) {
        let t = u[(0, l.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            l = t[n];
          if (null == r || null == l || null != r.error) continue;
          let u = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(u, l)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        l = n(358085);
      let u = { [l.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function o(e) {
        let t = u[(0, l.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            l = t[n];
          if (null == r || null == l || null != r.error) continue;
          let u = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(u, l)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, t, n) {
      var r,
        i,
        l,
        u,
        o = n(442837),
        a = n(570140),
        c = n(358085),
        f = n(998502),
        s = n(869614),
        d = n(281083),
        v = n(672598);
      let m = !1,
        p = !0,
        b = !1;
      class P extends (u = o.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            f.ZP.getGPUDriverVersions().then((e) => {
              (m = (0, v.Z)(e)),
                (p = (0, s.Z)(e)),
                (b = (0, d.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return m;
        }
        get canUseHardwareAcceleration() {
          return p;
        }
        get problematicGPUDriver() {
          return b;
        }
        getState() {
          return {
            GPUDriversOutdated: m,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: b,
          };
        }
      }
      (l = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = P)
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (t.Z = new P(a.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (m = t.GPUDriversOutdated), (p = t.canUseHardwareAcceleration);
          },
        }));
    },
  },
]);
//# sourceMappingURL=69dab882ca50eafdaa6e.js.map
