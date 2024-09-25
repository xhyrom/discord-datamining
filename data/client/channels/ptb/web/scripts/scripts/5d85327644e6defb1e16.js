"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41720"],
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
          return c;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        l = n(358085);
      let u = {
        [l.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function c(e) {
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
          return c;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        l = n(358085);
      let u = { [l.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function c(e) {
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
    299570: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
        t: function () {
          return u;
        },
      });
      var r = n(570140),
        i = n(131951);
      function l(e) {
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
      function u() {
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
      n.d(t, {
        UB: function () {
          return V;
        },
        Uc: function () {
          return c;
        },
        kE: function () {
          return y;
        },
      });
      var r,
        i,
        l,
        u,
        c,
        o,
        a = n(470079),
        E = n(442837),
        f = n(570140),
        s = n(872810),
        d = n(998594),
        S = n(592125),
        P = n(430824),
        Z = n(131951),
        _ = n(496675),
        v = n(944486),
        R = n(382182),
        p = n(74299),
        A = n(299570),
        N = n(65154);
      ((r = c || (c = {}))[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error");
      let C = !1,
        k = 0,
        I = 0,
        g = !1,
        b = {};
      function h() {
        return Z.Z.supports(N.AN.NATIVE_SCREENSHARE_PICKER);
      }
      function m() {
        return (
          h() &&
          d.Z.getCurrentConfig(
            { location: "NativeScreenSharePickerStore_enabled" },
            { autoTrackExposure: !1 },
          ).enableSystemPicker
        );
      }
      function T() {
        let e = m() && (I > 0 || (C && 0 === k));
        if (e !== g) {
          var t, n;
          (g = e),
            null === (n = Z.Z.getMediaEngine()) ||
              void 0 === n ||
              null === (t = n.setNativeDesktopVideoSourcePickerActive) ||
              void 0 === t ||
              t.call(n, g);
        }
      }
      function V() {
        return (0, a.useEffect)(
          () => (
            k++,
            T(),
            () => {
              0 == --k && T();
            }
          ),
          [],
        );
      }
      function y() {
        return (0, a.useEffect)(
          () => (
            I++,
            T(),
            () => {
              --I, T();
            }
          ),
          [],
        );
      }
      function O() {
        let e = S.Z.getChannel(v.Z.getVoiceChannelId());
        return (
          (C = null != e && (0, p.Z)(Z.Z) && (0, R.JL)(e, P.Z, _.Z, !1)),
          T(),
          !1
        );
      }
      class H extends (o = E.ZP.Store) {
        initialize() {
          this.syncWith([Z.Z, v.Z, S.Z, P.Z, _.Z], O),
            d.Z.subscribe(
              { location: "NativeScreenSharePickerStore_initialize" },
              T,
            ),
            O();
        }
        supported() {
          return h();
        }
        enabled() {
          return m();
        }
        releasePickerStream() {
          (0, A.t)();
        }
        getPickerState() {
          return b;
        }
      }
      (u = "NativeScreenSharePickerStore"),
        (l = "displayName") in (i = H)
          ? Object.defineProperty(i, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = u);
      t.ZP = new H(f.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
          let { existing: t } = e;
          if (((b = { lastPickerAction: 1 }), 0 === k && !t)) {
            let e = S.Z.getChannel(v.Z.getVoiceChannelId());
            null != e &&
              (0, p.Z)(Z.Z) &&
              (0, R.JL)(e, P.Z, _.Z, !1) &&
              (0, s.WH)(e.getGuildId(), e.id, { sourceId: "prepicked:0" });
          }
        },
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
          b = { lastPickerAction: 2 };
        },
        NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
          let { error: t } = e;
          b = { lastPickerAction: 3, lastPickerError: t };
        },
        NATIVE_SCREEN_SHARE_PICKER_PRESENT: function () {
          b = { lastPickerAction: 0 };
        },
        NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
          b = {};
        },
      });
    },
    653255: function (e, t, n) {
      var r,
        i,
        l,
        u,
        c = n(442837),
        o = n(570140),
        a = n(358085),
        E = n(998502),
        f = n(869614),
        s = n(281083),
        d = n(672598);
      let S = !1,
        P = !0,
        Z = !1;
      class _ extends (u = c.ZP.Store) {
        initialize() {
          !(!a.isPlatformEmbedded || __OVERLAY__) &&
            E.ZP.getGPUDriverVersions().then((e) => {
              (S = (0, d.Z)(e)),
                (P = (0, f.Z)(e)),
                (Z = (0, s.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return S;
        }
        get canUseHardwareAcceleration() {
          return P;
        }
        get problematicGPUDriver() {
          return Z;
        }
        getState() {
          return {
            GPUDriversOutdated: S,
            canUseHardwareAcceleration: P,
            problematicGPUDriver: Z,
          };
        }
      }
      (l = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = _)
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (t.Z = new _(o.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (S = t.GPUDriversOutdated), (P = t.canUseHardwareAcceleration);
          },
        }));
    },
  },
]);
//# sourceMappingURL=5d85327644e6defb1e16.js.map
