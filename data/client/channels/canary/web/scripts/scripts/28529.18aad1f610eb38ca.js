"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28529"],
  {
    304296(e, t, r) {
      r.d(t, { A: () => g });
      var n = r(17928),
        i = r(228366),
        l = r(723702),
        a = r(19575);
      let s = new Set(["nvidia"]);
      var u = r(299855),
        o = r.n(u);
      let c = {
          [l.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
        },
        f = { [l.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } },
        d = !1,
        m = !0,
        p = !1;
      class h extends n.Ay.Store {
        static displayName = "StreamingCapabilitiesStore";
        initialize() {
          !l.isPlatformEmbedded ||
            __OVERLAY__ ||
            a.Ay.getGPUDriverVersions().then((e) => {
              (d = (function (e) {
                let t = f[(0, l.getPlatform)()];
                if (null == t) return !1;
                for (let r of Object.keys(e)) {
                  let n = e[r],
                    i = t[r];
                  if (null == n || null == i || null != n.error) continue;
                  let l = `${n.major ?? 0}.${n.minor ?? 0}.0`;
                  if (!o().satisfies(l, i)) return !0;
                }
                return !1;
              })(e)),
                (m = (function (e) {
                  for (let t of Object.keys(e)) {
                    let r = e[t];
                    if (null != r && null == r.error && s.has(t)) return !0;
                  }
                  return !1;
                })(e)),
                (p = (function (e) {
                  let t = c[(0, l.getPlatform)()];
                  if (null == t) return !1;
                  for (let r of Object.keys(e)) {
                    let n = e[r],
                      i = t[r];
                    if (null == n || null == i || null != n.error) continue;
                    let l = `${n.major ?? 0}.${n.minor ?? 0}.0`;
                    if (!o().satisfies(l, i)) return !0;
                  }
                  return !1;
                })(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return d;
        }
        get canUseHardwareAcceleration() {
          return m;
        }
        get problematicGPUDriver() {
          return p;
        }
        getState() {
          return {
            GPUDriversOutdated: d,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: p,
          };
        }
      }
      let g = new h(i.h, {
        OVERLAY_INITIALIZE: function (e) {
          let { streamingCapabilitiesStoreState: t } = e;
          (d = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
        },
      });
    },
  },
]);
//# sourceMappingURL=28529.18aad1f610eb38ca.js.map
