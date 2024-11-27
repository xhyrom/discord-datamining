(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96533"],
  {
    544140: function (e, n, t) {
      var r = t(796581),
        i = t(149912);
      e.exports = function e(n, t, l, u, o) {
        var a = -1,
          s = n.length;
        for (l || (l = i), o || (o = []); ++a < s; ) {
          var c = n[a];
          t > 0 && l(c)
            ? t > 1
              ? e(c, t - 1, l, u, o)
              : r(o, c)
            : !u && (o[o.length] = c);
        }
        return o;
      };
    },
    149912: function (e, n, t) {
      var r = t(466293),
        i = t(443735),
        l = t(402428),
        u = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return l(e) || i(e) || !!(u && e && e[u]);
      };
    },
    90757: function (e, n, t) {
      var r = t(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    461195: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r,
        i,
        l = t(200651);
      t(192379);
      var u = t(120356),
        o = t.n(u),
        a = t(410030),
        s = t(231338),
        c = t(388032),
        d = t(40690);
      function f(e) {
        let { className: n, size: t = "md" } = e,
          r =
            (0, a.ZP)() === s.BR.LIGHT
              ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png"
              : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
        return (0, l.jsx)("img", {
          className: o()(n, { [d.sm]: "sm" === t, [d.md]: "md" === t }),
          src: r,
          alt: c.intl.string(c.t.htEhYm),
        });
      }
      ((r = i || (i = {})).SMALL = "sm"), (r.MEDIUM = "md");
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
          return o;
        },
      }),
        t(47120);
      var r = t(553813),
        i = t.n(r),
        l = t(358085);
      let u = {
        [l.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function o(e) {
        let n = u[(0, l.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            l = n[t];
          if (null == r || null == l || null != r.error) continue;
          let u = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!i().satisfies(u, l)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      var r = t(553813),
        i = t.n(r),
        l = t(358085);
      let u = { [l.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function o(e) {
        let n = u[(0, l.getPlatform)()];
        if (null == n) return !1;
        for (let t of Object.keys(e)) {
          let r = e[t],
            l = n[t];
          if (null == r || null == l || null != r.error) continue;
          let u = (function (e) {
            var n, t;
            return ""
              .concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".")
              .concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0");
          })(r);
          if (!i().satisfies(u, l)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, n, t) {
      "use strict";
      var r,
        i,
        l,
        u,
        o = t(442837),
        a = t(570140),
        s = t(358085),
        c = t(998502),
        d = t(869614),
        f = t(281083),
        m = t(672598);
      let v = !1,
        p = !0,
        h = !1;
      class g extends (u = o.ZP.Store) {
        initialize() {
          !(!s.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
              (v = (0, m.Z)(e)),
                (p = (0, d.Z)(e)),
                (h = (0, f.Z)(e)),
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
          return h;
        }
        getState() {
          return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: h,
          };
        }
      }
      (l = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = g)
          ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = l),
        (n.Z = new g(a.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (v = n.GPUDriversOutdated), (p = n.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, n, t) {
      "use strict";
      let r;
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(145597);
      function l(e, n) {
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
    942951: function (e, n, t) {
      "use strict";
      t.d(n, {
        l: function () {
          return f;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(481060),
        u = t(100527),
        o = t(906732),
        a = t(184301),
        s = t(347475),
        c = t(592125),
        d = t(91047);
      function f(e) {
        var n, t;
        let {
            user: f,
            channelId: m,
            guildId: v,
            messageId: p,
            stopPropagation: h = !1,
            ariaLabel: g,
          } = e,
          { analyticsLocations: b } = (0, o.ZP)(u.Z.USERNAME);
        let x =
          ((n = f),
          (t = m),
          i.useCallback(
            (e) => {
              let r = c.Z.getChannel(t);
              null != r && null != n && (0, d.Pv)(e, n, r);
            },
            [n, t],
          ));
        return i.useCallback(
          (e) => (n, t) => {
            let i = (t) =>
                (0, r.jsx)(l.NameWithRoleAnchor, {
                  ...(null != t ? t : {}),
                  onContextMenu: x,
                  name: n,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": g,
                }),
              u = (e) => (n) => {
                h && n.stopPropagation(), e(n);
              };
            return (0, r.jsx)(
              o.Gt,
              {
                value: b,
                children:
                  null != f
                    ? (0, r.jsx)(l.Popout, {
                        position: "right",
                        preload: () =>
                          (0, a.Z)(f.id, f.getAvatarURL(v, 80), {
                            guildId: v,
                            channelId: m,
                          }),
                        renderPopout: (n) =>
                          (0, r.jsx)(s.Z, {
                            ...n,
                            userId: f.id,
                            guildId: v,
                            channelId: m,
                            messageId: p,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: n, ...t } = e;
                          return i({ onClick: u(n), ...t });
                        },
                      })
                    : i(void 0),
              },
              t,
            );
          },
          [b, f, m, v, p, x, h, g],
        );
      }
    },
    977059: function (e, n, t) {
      "use strict";
      t.d(n, {
        R: function () {
          return l;
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
      function l(e) {
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
        l = t(200651);
      t(192379);
      var u = t(120356),
        o = t.n(u),
        a = t(481060),
        s = t(312403);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let c = { info: s.info, warning: s.warning },
        d = { info: a.CircleInformationIcon, warning: a.CircleWarningIcon };
      function f(e) {
        let { children: n, className: t, look: r = "info" } = e,
          i = d[r];
        return (0, l.jsxs)("div", {
          className: o()(s.root, t, c[r]),
          children: [
            (0, l.jsx)(i, { className: s.icon, color: "currentColor" }),
            (0, l.jsx)(a.Text, {
              className: s.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    91047: function (e, n, t) {
      "use strict";
      t.d(n, {
        Pv: function () {
          return l;
        },
        _j: function () {
          return u;
        },
        nm: function () {
          return o;
        },
        xS: function () {
          return a;
        },
      }),
        t(411104);
      var r = t(200651);
      t(192379);
      var i = t(239091);
      function l(e, n, l) {
        l.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("50506"),
                t.e("79695"),
                t.e("51269"),
                t.e("13351"),
                t.e("50050"),
                t.e("92453"),
                t.e("62507"),
              ]).then(t.bind(t, 354589));
              return (t) => (0, r.jsx)(e, { ...t, user: n, channel: l });
            })
          : l.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  t.e("50506"),
                  t.e("79695"),
                  t.e("51269"),
                  t.e("90508"),
                  t.e("13351"),
                  t.e("50050"),
                  t.e("92453"),
                  t.e("70205"),
                  t.e("56826"),
                  t.e("10510"),
                ]).then(t.bind(t, 131404));
                return (t) =>
                  (0, r.jsx)(e, {
                    ...t,
                    user: n,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("50506"),
                    t.e("79695"),
                    t.e("51269"),
                    t.e("13351"),
                    t.e("50050"),
                    t.e("92453"),
                    t.e("13125"),
                    t.e("54492"),
                  ]).then(t.bind(t, 757387));
                  return (t) =>
                    (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("79695"),
                    t.e("69220"),
                    t.e("351"),
                  ]).then(t.bind(t, 881351));
                  return (t) => (0, r.jsx)(e, { ...t, user: n });
                });
      }
      function u(e, n) {
        let { user: l, channel: u, moderationAlertId: o, guildId: a, ...s } = n;
        if (
          (null == u ? void 0 : u.isGroupDM()) ||
          (null == u ? void 0 : u.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == u ? void 0 : u.getGuildId();
        null != c &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              t.e("13125"),
              t.e("9124"),
            ]).then(t.bind(t, 833737));
            return (n) =>
              (0, r.jsx)(e, {
                ...n,
                user: l,
                channelId: null == u ? void 0 : u.id,
                guildId: c,
                moderationAlertId: o,
                ...s,
              });
          });
      }
      function o(e, n) {
        let {
          user: l,
          guildId: u,
          analyticsLocations: o,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = n;
        (0, i.jW)(e, async () => {
          let { default: e } = await t.e("45130").then(t.bind(t, 246389));
          return (n) =>
            (0, r.jsx)(e, {
              ...n,
              user: l,
              guildId: u,
              analyticsLocations: o,
              onCloseContextMenu: a,
              isViewOnly: s,
            });
        });
      }
      function a(e, n, l) {
        null != l &&
          (0, i.jW)(e, async () => {
            let { default: e } = await t.e("50331").then(t.bind(t, 158195));
            return (n) => (0, r.jsx)(e, { ...n, guildId: l });
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
        l = t(90757),
        u = t.n(l),
        o = t(65154);
      function a(e, n, t) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (n = null != n ? n : [o.vA.WINDOW, o.vA.SCREEN]),
          (t = null != t ? t : { width: 150, height: 150 });
        let l = [];
        return (
          n.includes(o.vA.SCREEN) &&
            e.supports(o.AN.SCREEN_PREVIEWS) &&
            (l.push(e.getScreenPreviews(t.width, t.height)),
            (n = n.filter((e) => e !== o.vA.SCREEN))),
          n.includes(o.vA.WINDOW) &&
            e.supports(o.AN.WINDOW_PREVIEWS) &&
            (l.push(e.getWindowPreviews(t.width, t.height)),
            (n = n.filter((e) => e !== o.vA.WINDOW))),
          0 !== n.length &&
            l.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: n,
                thumbnailSize: t,
              }),
            ),
          Promise.all(l).then((e) => u()(e))
        );
      }
    },
    40690: function (e, n, t) {
      "use strict";
      e.exports = { sm: "sm_bbdae8", md: "md_bbdae8" };
    },
    312403: function (e, n, t) {
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
//# sourceMappingURL=3a5f75d67501f4551103.js.map
