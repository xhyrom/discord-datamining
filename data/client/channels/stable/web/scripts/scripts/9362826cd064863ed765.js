"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46746"],
  {
    863942: function (e, t, n) {
      var l = n(22092);
      (0, n(192291).exportTypedArrayStaticMethod)("from", n(12367), l);
    },
    856901: function (e, t) {
      var n;
      (t.stringSimilarity = void 0),
        (t.stringSimilarity = function (e, t, n, l) {
          if (
            (void 0 === n && (n = 2),
            void 0 === l && (l = !1),
            !l && ((e = e.toLowerCase()), (t = t.toLowerCase())),
            e.length < n || t.length < n)
          )
            return 0;
          for (var i = new Map(), r = 0; r < e.length - (n - 1); r++) {
            var s = e.substr(r, n);
            i.set(s, i.has(s) ? i.get(s) + 1 : 1);
          }
          for (var a = 0, o = 0; o < t.length - (n - 1); o++) {
            var c = t.substr(o, n),
              d = i.has(c) ? i.get(c) : 0;
            d > 0 && (i.set(c, d - 1), a++);
          }
          return (2 * a) / (e.length + t.length - (n - 1) * 2);
        }),
        t.stringSimilarity;
    },
    430401: function (e) {
      e.exports = "/assets/7ea7ef7cc3a376745fbd.svg";
    },
    345976: function (e) {
      e.exports = "/assets/60392030f78874e08161.svg";
    },
    152708: function (e, t, n) {
      var l,
        i,
        r,
        s = n(200651),
        a = n(192379),
        o = n(120356),
        c = n.n(o),
        d = n(600164),
        u = n(903993);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((l = i || (i = {})).WRAP = "wrap"), (l.STACK = "stack");
      class h extends (r = a.PureComponent) {
        renderChildren() {
          let e;
          let { children: t, layout: n, columns: l } = this.props;
          switch (n) {
            case "stack":
              e = "100%";
              break;
            case "wrap":
              e = "".concat((1 / l) * 100, "%");
          }
          return t.map((t, n) =>
            (0, s.jsx)(
              d.Z.Child,
              { className: u.tile, basis: e, grow: 0, children: t },
              n,
            ),
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, s.jsx)(d.Z, {
            className: c()(e, u.grid),
            wrap: d.Z.Wrap.WRAP,
            children: this.renderChildren(),
          });
        }
      }
      f(h, "Layout", i),
        f(h, "defaultProps", { children: [], layout: "wrap", columns: 4 }),
        (t.Z = h);
    },
    463727: function (e, t, n) {
      let l = (0, n(818083).B)({
        kind: "user",
        id: "2023-06_golive_capture_card",
        label: "GoLive Capture Card Support",
        defaultConfig: { enableGoLiveCaptureCard: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable go live capture card support",
            config: { enableGoLiveCaptureCard: !0 },
          },
        ],
      });
      t.Z = l;
    },
    537413: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(451467),
        i = n(37113);
      function r(e, t, n) {
        for (let r of i.no[e])
          if ((0, l.Z)(e, r.resolution, r.fps, t, n))
            return [r.resolution, r.fps];
        return null;
      }
    },
    618407: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(553813),
        i = n.n(l),
        r = n(579806),
        s = n(131951),
        a = n(358085),
        o = n(70722),
        c = n(65154),
        d = n(388032);
      function u() {
        if (!s.Z.supports(c.AN.SOUNDSHARE)) return d.intl.string(d.t["1b0Gm5"]);
        if (
          (0, a.isWindows)() &&
          !i().satisfies(
            null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release,
            o.I9,
          )
        )
          return d.intl.string(d.t.voRPTE);
        if (
          (0, a.isMac)() &&
          !i().satisfies(
            null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release,
            o.Ec,
          )
        )
          return d.intl.string(d.t.v2y9PT);
        return null;
      }
    },
    586290: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(724458),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(512722),
        s = n.n(r),
        a = n(392711),
        o = n.n(a),
        c = n(856901),
        d = n(442837),
        u = n(481060),
        f = n(131951),
        h = n(537135),
        m = n(176940),
        x = n(388032),
        g = n(836471),
        p = n(410894),
        v = n(113207);
      function j(e) {
        let {
          selectedSource: t,
          onChangeVideoDeviceSource: n,
          onChangeAudioDevice: r,
        } = e;
        s()(null != t, "Camera capture device cannot be null");
        let a = (0, m.Z)(),
          j = (0, d.e7)([f.Z], () => f.Z.getInputDevices()),
          [C, S] = i.useState(
            (function (e, t, n) {
              if (null != t && null != n) {
                let l = t.find((t) => t.id === e);
                if (null == l) return;
                let i = o().reduce(n, (e, t) =>
                  (0, c.stringSimilarity)(l.name, t.name) >
                  (0, c.stringSimilarity)(l.name, e.name)
                    ? t
                    : e,
                );
                if (null != i) return i.id;
              }
            })(t.id, a, j),
          );
        return (
          null != C && r(C),
          (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(u.FormItem, {
              title: "Capture Device",
              className: p.modalContent,
              children: [
                (0, l.jsx)(u.FormItem, {
                  className: v.marginTop8,
                  children: (0, l.jsxs)(h.Z, {
                    children: [
                      (0, l.jsx)("span", {
                        className: g.ellipsisText,
                        children: t.name,
                      }),
                      (0, l.jsx)(u.Button, {
                        className: g.changeButton,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.SMALL,
                        onClick: n,
                        children: x.intl.string(x.t.GEgsAw),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(u.FormItem, {
                  className: v.marginTop8,
                  title: x.intl.string(x.t.y4ooen),
                  children: (0, l.jsx)(u.SingleSelect, {
                    value: C,
                    className: v.__invalid_marginaTop8,
                    onChange: (e) => {
                      S(e), r(e);
                    },
                    options: o().map(j, (e) => {
                      let { id: t, name: n } = e;
                      return { value: t, label: n };
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    233037: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(442837),
        r = n(481060),
        s = n(984933),
        a = n(430824),
        o = n(496675),
        c = n(594174),
        d = n(938475),
        u = n(102172),
        f = n(499596),
        h = n(148381),
        m = n(388032),
        x = n(884127);
      function g(e) {
        let {
            selectedChannelId: t,
            guildId: n,
            onChangeSelectedChannelId: g,
          } = e,
          p = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
          v = (0, i.e7)([a.Z, s.ZP, o.Z], () =>
            (0, u.h_)(s.ZP.getChannels(n), a.Z, o.Z),
          ),
          j = (0, i.e7)([d.ZP], () => d.ZP.getVoiceStates(n)),
          C = v.map((e) => {
            var n;
            return {
              name: (0, l.jsx)(f.Z, {
                channel: e,
                users:
                  null === (n = j[e.id]) || void 0 === n
                    ? void 0
                    : n
                        .filter((e) => {
                          let { user: t } = e;
                          return t.id !== (null == p ? void 0 : p.id);
                        })
                        .map((e) => {
                          let { user: t } = e;
                          return t;
                        }),
                selected: e.id === t,
              }),
              value: e.id,
            };
          });
        return (0, l.jsx)(h.Z, {
          title: m.intl.string(m.t["eg7R/v"]),
          scrollerInnerClassName: x.channelSelectScrollerInner,
          children: (0, l.jsx)(r.RadioGroup, {
            options: C,
            value: t,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
              let { value: t } = e;
              return g(t);
            },
          }),
        });
      }
    },
    399299: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return q;
        },
      });
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(442837),
        o = n(481060),
        c = n(230711),
        d = n(812206),
        u = n(605436),
        f = n(600164),
        h = n(594190),
        m = n(925329),
        x = n(565138),
        g = n(977059),
        p = n(695346),
        v = n(494620),
        j = n(592125),
        C = n(650774),
        S = n(430824),
        Z = n(131951),
        _ = n(944486),
        I = n(594174),
        T = n(449224),
        N = n(626135),
        b = n(823379),
        w = n(63063),
        E = n(358085),
        y = n(653255),
        R = n(989941),
        M = n(618407),
        P = n(586290),
        k = n(233037),
        A = n(810013),
        B = n(537135),
        L = n(641115),
        G = n(143135),
        D = n(70722),
        O = n(981631),
        U = n(526761),
        F = n(388032),
        H = n(264954),
        W = n(410894);
      function V(e) {
        let {
            selectedSource: t,
            selectSource: n,
            sourceChanged: i,
            onChangeSource: r,
          } = e,
          s = (0, a.e7)([h.ZP, T.Z], () =>
            (0, E.isWindows)() ? (0, R.Z)(h.ZP, T.Z) : null,
          ),
          c = (0, a.e7)([d.Z], () =>
            (null == s ? void 0 : s.id) != null
              ? d.Z.getApplication(s.id)
              : null,
          ),
          u = (0, a.e7)([h.ZP], () => h.ZP.getRunningGames()),
          f = (0, a.Wu)(
            [d.Z],
            () =>
              u
                .map((e) => (null != e.id ? d.Z.getApplication(e.id) : null))
                .filter(b.lm),
            [u],
          ),
          x = null;
        if ((null != t ? (x = t.name) : null != s && (x = s.name), null == x))
          return null;
        let g = (0, G.Z)(s, t, u),
          p = i
            ? f.find((e) => {
                let { id: t } = e;
                return t === (null == g ? void 0 : g.id);
              })
            : c,
          v =
            null != t && t.id.startsWith("screen")
              ? o.ScreenIcon
              : o.BrowserIcon;
        return (0, l.jsx)(o.FormItem, {
          title: F.intl.string(F.t.TC7Ev7),
          className: W.modalContent,
          titleClassName: W.formItemTitleVerySlim,
          children: (0, l.jsxs)(B.Z, {
            children: [
              null != p
                ? (0, l.jsx)(m.Z, {
                    game: p,
                    size: m.Z.Sizes.XSMALL,
                    className: H.selectedIcon,
                  })
                : (0, l.jsx)(v, { className: H.selectedIcon }),
              (0, l.jsx)("span", { className: H.ellipsisText, children: x }),
              n
                ? (0, l.jsx)(o.Button, {
                    className: H.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: r,
                    children: F.intl.string(F.t.GEgsAw),
                  })
                : null,
            ],
          }),
        });
      }
      function z(e) {
        let { onChange: t, guildId: n } = e,
          i = (0, a.e7)([S.Z], () => S.Z.getGuild(n));
        return null == i
          ? (t(), null)
          : (0, l.jsx)(o.FormItem, {
              title: F.intl.string(F.t.WC3u3t),
              className: W.modalContent,
              titleClassName: W.formItemTitle,
              children: (0, l.jsxs)(B.Z, {
                children: [
                  (0, l.jsx)(x.Z, {
                    guild: i,
                    size: x.Z.Sizes.SMALLER,
                    className: H.selectedIcon,
                  }),
                  (0, l.jsx)("span", {
                    className: H.ellipsisText,
                    children: i.toString(),
                  }),
                  (0, l.jsx)(o.Button, {
                    className: H.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: t,
                    children: F.intl.string(F.t.GEgsAw),
                  }),
                ],
              }),
            });
      }
      function K(e) {
        let { text: t } = e;
        return (0, l.jsxs)(f.Z, {
          align: f.Z.Align.CENTER,
          className: H.warning,
          children: [
            (0, l.jsx)(o.CircleWarningIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: H.warningIcon,
            }),
            (0, l.jsx)(o.Text, {
              color: "none",
              variant: "text-xs/normal",
              children: t,
            }),
          ],
        });
      }
      function Y(e) {
        let { guildId: t } = e,
          n = (0, a.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount(t)) && void 0 !== e ? e : 0;
          }),
          r = p.eo.useSetting(),
          c = i.useCallback((e, t) => {
            p.eo.updateSetting(t),
              N.default.track(O.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
          }, []);
        return n >= 2 && n <= D.tB
          ? (0, l.jsx)(o.FormItem, {
              className: s()(W.modalContent, H.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                value: !!r,
                type: o.Checkbox.Types.INVERTED,
                onChange: c,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: F.intl.string(F.t.Cef4t7),
                }),
              }),
            })
          : null;
      }
      function X(e) {
        let { enabled: t, onChange: n, screen: r } = e,
          a = i.useCallback(
            (e, t) => {
              n(t);
            },
            [n],
          );
        return (0, l.jsx)(o.FormItem, {
          className: s()(W.modalContent, H.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: r
                ? F.intl.string(F.t["5Adrtb"])
                : F.intl.string(F.t.gRpbRE),
            }),
          }),
        });
      }
      function J(e) {
        let { enabled: t, onChange: n } = e,
          r = i.useCallback(
            (e, t) => {
              n(t);
            },
            [n],
          );
        return (0, l.jsx)(o.FormItem, {
          className: s()(W.modalContent, H.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: r,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: F.intl.string(F.t.JE73jI),
            }),
          }),
        });
      }
      function q(e) {
        let {
            selectedSource: t,
            selectedFPS: n,
            selectedChannelId: r,
            selectedPreset: s,
            selectedResolution: o,
            sourceChanged: d,
            selectedGuildId: f,
            targetGuildPremiumTier: h,
            selectSource: m,
            selectGuild: x,
            sound: p,
            previewDisabled: C,
            onClose: S,
            onChangeSelectedFPS: T,
            onChangeSelectedResolution: N,
            onChangeSelectedPreset: b,
            onChangeSelectedChannelId: E,
            onChangeSource: R,
            onChangeAudioDevice: B,
            onChangeGuild: G,
            onChangeSound: D,
            onChangePreviewDisabled: W,
          } = e,
          q = (0, a.e7)([_.Z, j.Z], () =>
            j.Z.getChannel(_.Z.getVoiceChannelId()),
          ),
          Q = (0, a.e7)([y.Z], () => y.Z.GPUDriversOutdated),
          $ = (0, a.e7)([y.Z], () => y.Z.problematicGPUDriver),
          ee = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
          et = (0, M.Z)();
        null != t &&
          t.id.startsWith("screen") &&
          !Z.Z.supportsScreenSoundshare() &&
          (et = F.intl.string(F.t["1b0Gm5"]));
        let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
          el = null != ee && ee.verified && !ee.bot,
          ei = null != q && !(0, u.Yk)(q),
          er = !(0, a.e7)([Z.Z], () => Z.Z.getHardwareEncoding()),
          { enabled: es } = (0, g.S)({ location: "GoLiveModal_Confirm" });
        return (0, l.jsxs)(i.Fragment, {
          children: [
            en
              ? (0, l.jsx)(P.Z, {
                  selectedSource: t,
                  onChangeVideoDeviceSource: R,
                  onChangeAudioDevice: B,
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(V, {
                      selectSource: m,
                      sourceChanged: d,
                      onChangeSource: R,
                      selectedSource: t,
                    }),
                    null != et ? (0, l.jsx)(K, { text: et }) : null,
                    null != t && null == et
                      ? (0, l.jsx)(X, {
                          enabled: p,
                          onChange: D,
                          screen: t.id.startsWith("screen"),
                        })
                      : null,
                  ],
                }),
            x && null != f ? (0, l.jsx)(z, { guildId: f, onChange: G }) : null,
            null != q
              ? (0, l.jsx)(A.Z, { channel: q })
              : (0, l.jsx)(k.Z, {
                  guildId: f,
                  selectedChannelId: r,
                  onChangeSelectedChannelId: E,
                }),
            null != f && el && ei ? (0, l.jsx)(Y, { guildId: f }) : null,
            Q ? (0, l.jsx)(K, { text: F.intl.string(F.t.q65tS0) }) : null,
            $
              ? (0, l.jsx)(K, {
                  text: F.intl.format(F.t.RrLvub, {
                    helpCenterLink: w.Z.getArticleURL(
                      O.BhN.NVIDIA_DRIVER_ISSUES,
                    ),
                  }),
                })
              : null,
            er &&
              (0, l.jsx)(v.Z, {
                look: v.z.WARNING,
                className: H.hardwareWarning,
                children: F.intl.format(F.t.zCLXws, {
                  onClick: () => {
                    S(),
                      c.Z.open(O.oAB.VOICE, null, {
                        scrollPosition:
                          U.KQ.VoiceAndVideoScrollPositions
                            .HARDWARE_ACCELERATION,
                      });
                  },
                }),
              }),
            (0, l.jsx)(L.Z, {
              selectedPreset: s,
              selectedFPS: n,
              selectedResolution: o,
              targetGuildPremiumTier: h,
              onClose: S,
              onFPSChange: T,
              onResolutionChange: N,
              onPresetChange: b,
              captureDeviceSelected: en,
            }),
            es && (0, l.jsx)(J, { enabled: C, onChange: W }),
          ],
        });
      }
    },
    810013: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(442837),
        r = n(481060),
        s = n(314897),
        a = n(938475),
        o = n(499596),
        c = n(537135),
        d = n(388032),
        u = n(410894);
      function f(e) {
        let { channel: t } = e,
          n = (0, i.e7)([s.default], () => s.default.getId()),
          f = (0, i.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(t), [t]);
        return (0, l.jsx)(r.FormItem, {
          title: d.intl.string(d.t.KPuWsr),
          className: u.modalContent,
          titleClassName: u.formItemTitle,
          children: (0, l.jsx)(c.Z, {
            children: (0, l.jsx)(o.Z, {
              channel: t,
              users: f
                .filter((e) => {
                  let { user: t } = e;
                  return t.id !== n;
                })
                .map((e) => {
                  let { user: t } = e;
                  return t;
                }),
            }),
          }),
        });
      }
    },
    958707: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        s = n(263846);
      function a(e) {
        let { separator: t = !1 } = e;
        return (0, l.jsx)("div", {
          className: r()(s.divider, { [s.separator]: t }),
        });
      }
    },
    60594: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return eo;
          },
        }),
        n(47120),
        n(653041);
      var l,
        i,
        r = n(200651),
        s = n(192379),
        a = n(512722),
        o = n.n(a),
        c = n(100621),
        d = n(553813),
        u = n.n(d),
        f = n(442837),
        h = n(704215),
        m = n(481060),
        x = n(668781),
        g = n(872810),
        p = n(410575),
        v = n(579806),
        j = n(317381),
        C = n(316253),
        S = n(89425),
        Z = n(812206),
        _ = n(835473),
        I = n(215339),
        T = n(600164),
        N = n(313201),
        b = n(243778),
        w = n(594190),
        E = n(998594),
        y = n(751571),
        R = n(970731),
        M = n(695346),
        P = n(396995),
        k = n(361291),
        A = n(592125),
        B = n(430824),
        L = n(131951),
        G = n(944486),
        D = n(594174),
        O = n(449224),
        U = n(626135),
        F = n(63063),
        H = n(358085),
        W = n(998502),
        V = n(451467),
        z = n(537413),
        K = n(299570),
        Y = n(960861),
        X = n(989941),
        J = n(399299),
        q = n(351152),
        Q = n(567126),
        $ = n(143135),
        ee = n(70722),
        et = n(37113),
        en = n(981631),
        el = n(921944),
        ei = n(761274),
        er = n(388032),
        es = n(410894);
      ((i = l || (l = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.NATIVE_PICKER_SOURCE = 1)] = "NATIVE_PICKER_SOURCE"),
        (i[(i.SOURCE = 2)] = "SOURCE"),
        (i[(i.CONFIRM = 3)] = "CONFIRM");
      let ea = (e) => {
        let { visibleContent: t, markAsDismissed: n } = e;
        return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
          ? (0, r.jsx)(R.ZP, {
              content: er.intl.string(er.t.sFyFJy),
              buttonCTA: er.intl.string(er.t["NX+WJC"]),
              onClick: () => {},
              onSecondaryClick: () => {
                open(F.Z.getArticleURL(en.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: er.intl.string(er.t.hvVgAQ),
              caretPosition: R.DF.LEFT_CENTER,
              markAsDismissed: n,
            })
          : null;
      };
      function eo(e) {
        var t, l, i, a, d, R, F;
        let {
            selectGuild: eo = !1,
            selectSource: ec = !0,
            guildId: ed,
            analyticsLocation: eu,
            onClose: ef,
            transitionState: eh,
          } = e,
          {
            preset: em,
            resolution: ex,
            fps: eg,
            soundshareEnabled: ep,
          } = (0, f.cj)([k.Z], () => k.Z.getState()),
          ev = (0, f.e7)([G.Z, A.Z], () =>
            A.Z.getChannel(G.Z.getVoiceChannelId()),
          ),
          ej = (0, f.e7)([w.ZP, O.Z], () =>
            (0, H.isWindows)() ? (0, X.Z)(w.ZP, O.Z) : null,
          ),
          eC = (0, f.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
          eS = (0, _.q)(null == eC ? void 0 : eC.applicationId),
          [eZ, e_] = s.useState(null);
        s.useEffect(() => {
          (0, C.Z)() &&
            (async () => {
              var e;
              e_(
                await (null === v.Z || void 0 === v.Z
                  ? void 0
                  : null === (e = v.Z.window) || void 0 === e
                    ? void 0
                    : e.getMediaSourceId("DISCORD_ACTIVITY_POPOUT")),
              );
            })();
        }, []);
        let eI = (0, f.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return o()(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          eT =
            null !== (t = null == ev ? void 0 : ev.getGuildId()) && void 0 !== t
              ? t
              : ed,
          eN = (0, f.e7)([B.Z], () => {
            var e;
            return null != eT
              ? null === (e = B.Z.getGuild(eT)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [eb, ew] =
            null !== (l = (0, z.Z)(em, eI, eN)) && void 0 !== l
              ? l
              : [et.LY.RESOLUTION_720, et.ws.FPS_30],
          { lastPickerAction: eE } = (0, f.e7)([Y.ZP], () =>
            Y.ZP.getPickerState(),
          ),
          ey = L.Z.getUseSystemScreensharePicker();
        (0, Y.UB)();
        let eR =
            ey &&
            (0, H.isMac)() &&
            u().satisfies(
              null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release,
              ee.jR,
            ),
          eM = [];
        eh === m.ModalTransitionState.ENTERED &&
          ey &&
          (0, H.isMac)() &&
          eM.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
        let [eP, ek] = (0, b.US)(eM, void 0, !0);
        em !== et.tI.PRESET_CUSTOM && ((ex = eb), (eg = ew)),
          !(0, V.Z)(em, ex, eg, eI, eN) && ((ex = eb), (eg = ew));
        let eA = (0, N.Dt)();
        let [eB, eL] = s.useState(
            ((R = eo), (F = ec && !eR), R ? 0 : F ? 2 : 3),
          ),
          [eG, eD] = s.useState(eR),
          [eO, eU] = s.useState(null),
          [eF, eH] = s.useState(
            eR
              ? {
                  id: "prepicked:",
                  name: er.intl.string(er.t["KKcy9/"]),
                  url: "",
                }
              : null,
          ),
          [eW, eV] = s.useState(null),
          [ez, eK] = s.useState(em),
          [eY, eX] = s.useState(ex),
          [eJ, eq] = s.useState(eg),
          [eQ, e$] = s.useState(ep),
          [e1, e0] = s.useState(
            null !== (i = M.I0.getSetting()) && void 0 !== i && i,
          ),
          [e2, e5] = s.useState(null != ed ? ed : null),
          e3 =
            null !== (a = null == ev ? void 0 : ev.id) && void 0 !== a ? a : eO;
        async function e7() {
          var e, t;
          o()(
            null != ej || null != eF || (null != eC && null != eZ),
            "got nothing to stream",
          );
          let n =
            null !== (e = null == ev ? void 0 : ev.id) && void 0 !== e ? e : eO;
          o()(null != n, "Received null target channel ID");
          let l = A.Z.getChannel(n),
            i =
              null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t
                ? t
                : ed;
          if (null == ev && !(await (0, S.Z)({ channelId: n }))) return;
          let r = ez,
            s = eY,
            a = eJ;
          !(0, V.Z)(r, s, a, eI, eN, l) &&
            ((r = et.tI.PRESET_VIDEO),
            (s = et.LY.RESOLUTION_720),
            (a = et.ws.FPS_30)),
            (0, g.Rc)({
              preset: r,
              resolution: s,
              frameRate: a,
              soundshareEnabled: eQ,
            });
          let c = (0, $.Z)(ej, eF, w.ZP.getRunningGames()),
            d =
              !(0, H.isWindows)() ||
              null == c ||
              (null == eF ? void 0 : eF.id.startsWith("camera:")) ||
              null == c
                ? null
                : c.pid,
            u = null,
            f = null;
          null == d &&
            (null != eF
              ? ((u = eF.id), (f = eF.name))
              : null != eZ && ((u = eZ), (f = null == eS ? void 0 : eS.name))),
            (0, g.WH)(i, n, {
              pid: d,
              sourceId: u,
              sourceName: f,
              audioSourceId: eW,
              sound: eQ,
              previewDisabled: e1,
            }),
            null != eP && ek(el.L.AUTO_DISMISS),
            !ey &&
              (async () => {
                !(await y.Z.hasPermission(ei.Eu.SCREEN_RECORDING, {
                  showAuthorizationError: !1,
                })) &&
                  x.Z.show({
                    title: er.intl.string(er.t["X+mXen"]),
                    body: er.intl.string(er.t.MIJCzs),
                  });
              })();
        }
        function e4() {
          e7(), ef();
        }
        s.useEffect(() => {
          let e = (0, H.isWindows)() ? (0, X.Z)(w.ZP, O.Z) : null,
            t =
              (null == e ? void 0 : e.id) != null
                ? Z.Z.getApplication(e.id)
                : null;
          U.default.track(en.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eu,
          }),
            E.Z.trackExposure({ location: "GoLiveModal" });
        }, [eu]);
        let e9 = s.useCallback(
            (e, t, n) => {
              var l;
              let i = (0, z.Z)(e, eI, eN),
                [r, s] = null != i ? i : [t, n];
              e !== ez && ((t = r), (n = s));
              let a =
                null !== (l = null == ev ? void 0 : ev.id) && void 0 !== l
                  ? l
                  : eO;
              o()(null != a, "Received null target channel ID");
              let c = A.Z.getChannel(a);
              if (!(0, V.Z)(e, t, n, eI, eN, c)) {
                let [e, l] = (0, z.Z)(et.tI.PRESET_VIDEO, eI, eN);
                (t = e), (n = l);
              }
              n !== eJ && eq(n),
                t !== eY && eX(t),
                r !== t || s !== n
                  ? eK(et.tI.PRESET_CUSTOM)
                  : e !== ez && eK(e);
            },
            [ev, eO, eI, eN, eJ, eY, ez],
          ),
          [e8, e6] = s.useState(eR ? "" : void 0),
          te = s.useCallback(
            (e) => {
              (0, K.t)(), (0, K.T)(null != e ? e : e8);
            },
            [e8],
          );
        function tt(e) {
          if ((e.preventDefault(), 1 === eB)) return te();
          if (2 === eB) return eL(3);
          if (null != e8) return eL(1);
          let t = (0, $.Z)(ej, eF, w.ZP.getRunningGames());
          W.ZP.supportsFeature(en.eRX.ELEVATED_HOOK) &&
          (null == t ? void 0 : t.elevated)
            ? !(function () {
                var e;
                let t =
                  null !== (e = null == ej ? void 0 : ej.pid) && void 0 !== e
                    ? e
                    : null;
                (0, m.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("74300")
                    .then(n.bind(n, 566852));
                  return (n) =>
                    (0, r.jsx)(e, { ...n, handleStream: e4, pid: t });
                });
              })()
            : e4();
        }
        let tn = s.useCallback(
            (e) => {
              eH(e),
                null != e &&
                  (ey &&
                  (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                    ? e6(e.id.split(":")[1])
                    : e6(void 0),
                  eL(3),
                  eD(!0));
            },
            [ey],
          ),
          tl = s.useCallback(
            (e) => {
              e5(e);
              var t = 3;
              eL((t = ec ? 2 : 3));
            },
            [ec],
          ),
          ti = !(1 === eB && ey && eE === Y.Uc.Error),
          tr = (function (e) {
            switch (e) {
              case 2:
                return er.intl.string(er.t["aC4/Zm"]);
              case 1:
                return er.intl.formatToPlainString(er.t.sbbPhY, {
                  buttonName: er.intl.string(er.t.FiBjwc),
                });
              case 3:
                return null;
              default:
                return er.intl.string(er.t["1hKIam"]);
            }
          })(eB),
          ts = (0, r.jsx)(m.ModalHeader, {
            className: es.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(T.Z, {
              direction: T.Z.Direction.VERTICAL,
              align: T.Z.Align.CENTER,
              className: es.header,
              children: [
                (0, r.jsx)(m.Heading, {
                  variant: "heading-xl/semibold",
                  id: eA,
                  className: es.headerText,
                  children: er.intl.string(er.t.RDkJQ0),
                }),
                ti && null != tr
                  ? (0, r.jsx)(m.Text, {
                      className: es.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: tr,
                    })
                  : null,
              ],
            }),
          }),
          ta = s.useCallback(() => {
            ey && (0, K.t)(), eL(2);
          }, [ey]),
          to = (0, I.j)("GoLiveModal"),
          tc = (0, f.e7)([B.Z], () => B.Z.getGuild(ed)),
          td =
            (null == ev ? void 0 : ev.type) === en.d4z.GUILD_VOICE &&
            to &&
            null != tc &&
            tc.premiumTier === en.Eu4.NONE &&
            !(null == ev ? void 0 : ev.isHDStreamSplashed),
          tu = (function (e, t, n, l) {
            switch (e) {
              case 2:
                return t ? 0 : null;
              case 1:
                return 3;
              case 3:
                if (l) return 2;
                if (!n && t) return 0;
                return null;
              default:
                return null;
            }
          })(eB, eo, ec, eG),
          tf =
            1 !== eB &&
            (3 !== eB ||
              (null == eF && null == ej && null == eZ) ||
              null == e3),
          th = s.useCallback(() => {
            null != tu && eL(tu);
          }, [tu]),
          tm = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(m.Slides, {
                springConfig: { ...c.config.stiff, clamp: !0 },
                activeSlide: eB,
                width: 480,
                children: [
                  (0, r.jsx)(m.Slide, {
                    id: 0,
                    children: (0, r.jsx)("div", {
                      className: es.modalSize,
                      children: (0, r.jsx)(q.Z, { onSelectGuild: tl }),
                    }),
                  }),
                  (0, r.jsx)(m.Slide, {
                    id: 2,
                    children: (0, r.jsx)("div", {
                      className: es.modalSize,
                      children: ey
                        ? (0, r.jsx)(Q.se, { onSourceSelect: tn })
                        : (0, r.jsx)(Q.oA, {
                            selectedSource: eF,
                            onChangeSelectedSource: tn,
                          }),
                    }),
                  }),
                  (0, r.jsx)(m.Slide, {
                    id: 3,
                    children: (0, r.jsx)("div", {
                      className: es.modalSize,
                      children: (0, r.jsx)(J.Z, {
                        selectedChannelId:
                          null !== (d = null == ev ? void 0 : ev.id) &&
                          void 0 !== d
                            ? d
                            : eO,
                        selectedPreset: ez,
                        selectedResolution: eY,
                        selectedSource: eF,
                        selectedFPS: eJ,
                        sound: eQ,
                        previewDisabled: e1,
                        sourceChanged: eG,
                        selectSource: ec,
                        onChangeSelectedFPS: (e) => e9(ez, eY, e),
                        onChangeSelectedResolution: (e) => e9(ez, e, eJ),
                        onChangeSelectedPreset: (e) => e9(e, eY, eJ),
                        onChangeSelectedChannelId: eU,
                        onChangeSelectedSource: tn,
                        onChangeSource: () => ta(),
                        onChangeAudioDevice: (e) => eV(e),
                        onChangeGuild: () => eL(0),
                        onChangeSound: (e) => e$(e),
                        onChangePreviewDisabled: (e) => e0(e),
                        onClose: ef,
                        selectedGuildId: e2,
                        targetGuildPremiumTier: eN,
                        selectGuild: eo,
                      }),
                    }),
                  }),
                  (0, r.jsx)(m.Slide, {
                    id: 1,
                    children: (0, r.jsx)("div", {
                      className: es.modalSize,
                      children: (0, r.jsx)(Q.Hu, {
                        onSourceSelect: e4,
                        onCancel: th,
                        pickerType: e8,
                      }),
                    }),
                  }),
                ],
              }),
              td && (0, r.jsx)(P.Z, { channel: ev }),
            ],
          }),
          tx =
            1 === eB || (eR && 3 === eB)
              ? er.intl.string(er.t.FiBjwc)
              : ey && (3 !== eB || null != e8)
                ? er.intl.string(er.t.PDTjLC)
                : er.intl.string(er.t["UE/rPz"]),
          tg = (0, r.jsxs)(m.ModalFooter, {
            justify: null == tu ? T.Z.Justify.START : T.Z.Justify.BETWEEN,
            children: [
              (0, r.jsx)(m.Button, {
                type: "submit",
                size: m.Button.Sizes.SMALL,
                disabled: tf,
                autoFocus: !0,
                children: tx,
              }),
              null == tu
                ? (0, r.jsx)(m.Button, {
                    className: es.cancelButton,
                    look: m.Button.Looks.LINK,
                    size: m.Button.Sizes.SMALL,
                    color: m.ButtonColors.PRIMARY,
                    onClick: ef,
                    children: er.intl.string(er.t["ETE/oK"]),
                  })
                : (0, r.jsx)(m.Button, {
                    size: m.Button.Sizes.SMALL,
                    color: m.ButtonColors.PRIMARY,
                    onClick: th,
                    children: er.intl.string(er.t["13/7kZ"]),
                  }),
            ],
          });
        return (0, r.jsx)(p.Z, {
          page: en.ZY5.GO_LIVE_MODAL,
          children: (0, r.jsxs)(m.ModalRoot, {
            "aria-labelledby": eA,
            transitionState: eh,
            size: m.ModalSize.DYNAMIC,
            className: es.modalSize,
            children: [
              (0, r.jsx)(m.ModalCloseButton, {
                onClick: ef,
                className: es.modalCloseButton,
              }),
              (0, r.jsx)("div", { className: es.art }),
              (0, r.jsx)(m.Popout, {
                position: "right",
                align: "center",
                shouldShow: null != eP,
                spacing: 18,
                renderPopout: () =>
                  (0, r.jsx)(ea, { visibleContent: eP, markAsDismissed: ek }),
                children: () =>
                  (0, r.jsxs)("form", { onSubmit: tt, children: [ts, tm, tg] }),
              }),
            ],
          }),
        });
      }
    },
    351152: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(390547);
      var l = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        s = n(392711),
        a = n.n(s),
        o = n(442837),
        c = n(481060),
        d = n(565138),
        u = n(984933),
        f = n(430824),
        h = n(496675),
        m = n(771845),
        x = n(259580),
        g = n(102172),
        p = n(148381),
        v = n(388032),
        j = n(410894),
        C = n(939525);
      function S(e) {
        let { guildId: t, onClick: n } = e,
          i = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
          r = (0, o.e7)([u.ZP, f.Z, h.Z], () =>
            u.ZP.getChannels(t)[u.Zb].some((e) => {
              let { channel: t } = e;
              return (0, g.JL)(t, f.Z, h.Z);
            }),
          );
        return null != i && r
          ? (0, l.jsxs)(c.Clickable, {
              onClick: () => n(t),
              className: C.guildRow,
              children: [
                (0, l.jsx)(d.Z, {
                  guild: i,
                  size: d.Z.Sizes.SMALL,
                  className: C.guildIcon,
                }),
                (0, l.jsx)(c.Text, {
                  variant: "text-md/normal",
                  className: C.guildName,
                  children: i.toString(),
                }),
                (0, l.jsx)(x.Z, {
                  direction: x.Z.Directions.RIGHT,
                  className: C.guildArrow,
                }),
              ],
            })
          : null;
      }
      function Z(e) {
        let { onSelectGuild: t } = e,
          n = (0, o.e7)([m.ZP], () => m.ZP.getGuildFolders());
        return (0, l.jsx)(p.Z, {
          title: v.intl.string(v.t.JsqeEh),
          scrollerClassName: r()(C.guildScroller, j.marginBottom),
          children: a().flatMap(n, (e) => {
            let { guildIds: n } = e;
            return n.map((e) => (0, l.jsx)(S, { guildId: e, onClick: t }, e));
          }),
        });
      }
    },
    152165: function (e, t, n) {
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(442837),
        o = n(607070),
        c = n(817730);
      t.Z = i.memo(function (e) {
        let { className: t, animated: n = !1 } = e,
          r = i.useId();
        function d(e) {
          return "".concat(r, "-").concat(e);
        }
        function u(e) {
          return "url(#".concat(d(e), ")");
        }
        let f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
        return (0, l.jsx)("svg", {
          className: s()(c.nativePickerGuide, t),
          width: "392",
          height: "254",
          viewBox: "0 0 392 254",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children:
            !0 !== n || f
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("g", {
                      clipPath: u("clip0"),
                      children: [
                        (0, l.jsx)("rect", {
                          width: "392",
                          height: "254",
                          rx: "8",
                          fill: "#1A1C37",
                          fillOpacity: "0.8",
                        }),
                        (0, l.jsx)("g", {
                          filter: u("filter0"),
                          children: (0, l.jsx)("rect", {
                            x: "21",
                            y: "-0.21051",
                            width: "241.861",
                            height: "148.887",
                            rx: "8",
                            fill: "#F47FFF",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: u("filter1"),
                          children: (0, l.jsx)("rect", {
                            x: "57.8317",
                            y: "47.8552",
                            width: "335.168",
                            height: "206.331",
                            rx: "8",
                            fill: "#5865F2",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: u("filter2"),
                          children: (0, l.jsx)("rect", {
                            x: "223.574",
                            y: "11.5128",
                            width: "154.693",
                            height: "101.993",
                            rx: "8",
                            fill: "#FFD836",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: u("filter3"),
                          children: (0, l.jsx)("rect", {
                            x: "142.545",
                            y: "67.785",
                            width: "232.04",
                            height: "143.025",
                            rx: "8",
                            fill: "#AEC7FF",
                          }),
                        }),
                        (0, l.jsx)("g", {
                          filter: u("filter4"),
                          children: (0, l.jsx)("rect", {
                            x: "152.558",
                            y: "84",
                            width: "86",
                            height: "86",
                            rx: "24",
                            fill: u("paint0"),
                          }),
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M171.907 114.1C171.907 110.538 174.795 107.65 178.357 107.65H212.757C216.319 107.65 219.207 110.538 219.207 114.1V118.4C219.207 119.587 218.244 120.55 217.057 120.55H174.057C172.869 120.55 171.907 119.587 171.907 118.4V114.1ZM178.357 116.25C179.544 116.25 180.507 115.287 180.507 114.1C180.507 112.913 179.544 111.95 178.357 111.95C177.169 111.95 176.207 112.913 176.207 114.1C176.207 115.287 177.169 116.25 178.357 116.25ZM186.957 114.1C186.957 115.287 185.994 116.25 184.807 116.25C183.619 116.25 182.657 115.287 182.657 114.1C182.657 112.913 183.619 111.95 184.807 111.95C185.994 111.95 186.957 112.913 186.957 114.1ZM191.257 116.25C192.444 116.25 193.407 115.287 193.407 114.1C193.407 112.913 192.444 111.95 191.257 111.95C190.069 111.95 189.107 112.913 189.107 114.1C189.107 115.287 190.069 116.25 191.257 116.25Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          d: "M171.907 127C171.907 125.813 172.869 124.85 174.057 124.85H217.057C218.244 124.85 219.207 125.813 219.207 127V139.9C219.207 143.462 216.319 146.35 212.757 146.35H178.357C174.795 146.35 171.907 143.462 171.907 139.9V127Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("rect", {
                          x: "44",
                          y: "84",
                          width: "86",
                          height: "86",
                          rx: "24",
                          fill: "white",
                          fillOpacity: "0.2",
                        }),
                        (0, l.jsx)("path", {
                          d: "M71.9512 105.5C68.389 105.5 65.5012 108.388 65.5012 111.95V129.15C65.5012 132.712 68.389 135.6 71.9512 135.6H102.051C105.613 135.6 108.501 132.712 108.501 129.15V111.95C108.501 108.388 105.613 105.5 102.051 105.5H71.9512Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          d: "M90.2262 144.2C89.6325 144.2 89.1512 143.719 89.1512 143.125V138.825C89.1512 138.231 88.6699 137.75 88.0762 137.75H85.9262C85.3325 137.75 84.8512 138.231 84.8512 138.825V143.125C84.8512 143.719 84.3699 144.2 83.7762 144.2H80.5512C79.3638 144.2 78.4012 145.163 78.4012 146.35C78.4012 147.537 79.3638 148.5 80.5512 148.5H93.4512C94.6386 148.5 95.6012 147.537 95.6012 146.35C95.6012 145.163 94.6386 144.2 93.4512 144.2H90.2262Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("rect", {
                          x: "261",
                          y: "84",
                          width: "86",
                          height: "86",
                          rx: "24",
                          fill: "white",
                          fillOpacity: "0.2",
                        }),
                        (0, l.jsx)("path", {
                          d: "M320.425 111.461C317.273 109.993 313.95 108.959 310.542 108.371C310.077 109.222 309.651 110.094 309.275 110.985C305.648 110.438 301.952 110.438 298.324 110.985C297.938 110.094 297.514 109.222 297.049 108.381C293.629 108.969 290.307 110.003 287.154 111.472C280.888 120.863 279.197 130.032 280.048 139.059C283.715 141.804 287.815 143.891 292.175 145.229C293.155 143.891 294.024 142.463 294.767 140.973C293.351 140.437 291.979 139.778 290.673 138.988C291.02 138.735 291.356 138.481 291.681 138.198C299.361 141.865 308.238 141.865 315.919 138.198C316.245 138.471 316.58 138.735 316.916 138.988C315.613 139.768 314.238 140.437 312.825 140.973C313.577 142.463 314.437 143.881 315.414 145.218C319.773 143.881 323.874 141.794 327.541 139.049H327.553C328.55 128.593 325.853 119.516 320.425 111.461ZM295.84 133.505C293.476 133.505 291.528 131.306 291.528 128.632C291.528 125.957 293.428 123.759 295.84 123.759C298.252 123.759 300.187 125.957 300.149 128.632C300.149 131.306 298.24 133.505 295.84 133.505ZM311.754 133.505C309.39 133.505 307.442 131.306 307.442 128.632C307.442 125.957 309.351 123.759 311.754 123.759C314.154 123.759 316.101 125.957 316.063 128.632C316.063 131.306 314.154 133.505 311.754 133.505Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M194 187.542V153L219 178.06H204.374L203.488 178.328L194 187.542Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M213.594 188.996L205.818 192.307L195.72 168.39L203.67 165.04L213.594 188.996Z",
                          fill: "white",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M210.718 187.528L206.741 189.197L200.054 173.293L204.025 171.621L210.718 187.528Z",
                          fill: "black",
                        }),
                        (0, l.jsx)("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M196.157 158.192V182.323L202.561 176.141L203.484 175.841H213.768L196.157 158.192Z",
                          fill: "black",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("defs", {
                      children: [
                        (0, l.jsxs)("filter", {
                          id: d("filter0"),
                          x: "-99",
                          y: "-120.211",
                          width: "481.861",
                          height: "388.887",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter1"),
                          x: "-62.1683",
                          y: "-72.1448",
                          width: "575.168",
                          height: "446.331",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter2"),
                          x: "103.574",
                          y: "-108.487",
                          width: "394.693",
                          height: "341.993",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter3"),
                          x: "22.5446",
                          y: "-52.215",
                          width: "472.04",
                          height: "383.025",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "60",
                              result: "effect1_foregroundBlur_7254_10733",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter4"),
                          x: "132.558",
                          y: "72.6",
                          width: "126",
                          height: "126",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, l.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, l.jsx)("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                              result: "hardAlpha",
                            }),
                            (0, l.jsx)("feOffset", { dy: "8.6" }),
                            (0, l.jsx)("feGaussianBlur", {
                              stdDeviation: "10",
                            }),
                            (0, l.jsx)("feComposite", {
                              in2: "hardAlpha",
                              operator: "out",
                            }),
                            (0, l.jsx)("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0.0870551 0 0 0 0 0.112803 0 0 0 0 0.392074 0 0 0 0.2 0",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in2: "BackgroundImageFix",
                              result: "effect1_dropShadow_7254_10733",
                            }),
                            (0, l.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_dropShadow_7254_10733",
                              result: "shape",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("paint0"),
                          x1: "238.558",
                          y1: "170",
                          x2: "152.558",
                          y2: "84",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, l.jsx)("stop", { stopColor: "#4752C4" }),
                            (0, l.jsx)("stop", {
                              offset: "1",
                              stopColor: "#6571F3",
                            }),
                          ],
                        }),
                        (0, l.jsx)("clipPath", {
                          id: d("clip0"),
                          children: (0, l.jsx)("rect", {
                            width: "392",
                            height: "254",
                            rx: "8",
                            fill: "white",
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("defs", {
                      children: [
                        (0, l.jsx)("filter", {
                          id: d("filter0"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsx)("filter", {
                          id: d("filter1"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsx)("filter", {
                          id: d("filter2"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsx)("filter", {
                          id: d("filter3"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: "60,60",
                            result: "result",
                          }),
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter4"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: [
                            (0, l.jsx)("feGaussianBlur", {
                              in: "SourceAlpha",
                              stdDeviation: "10,10",
                            }),
                            (0, l.jsx)("feOffset", {
                              dx: "0",
                              dy: "8.6",
                              result: "tmp",
                            }),
                            (0, l.jsx)("feFlood", {
                              floodColor: "rgba(22,29,100,0.2)",
                            }),
                            (0, l.jsx)("feComposite", {
                              operator: "in",
                              in2: "tmp",
                            }),
                            (0, l.jsxs)("feMerge", {
                              result: "result",
                              children: [
                                (0, l.jsx)("feMergeNode", {}),
                                (0, l.jsx)("feMergeNode", {
                                  in: "SourceGraphic",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("screenIconHighlight-fill"),
                          x1: "0.059738",
                          y1: "0.059805",
                          x2: "0.900088",
                          y2: "0.912265",
                          spreadMethod: "pad",
                          gradientUnits: "objectBoundingBox",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              className: c.screenIconHighlight_fill_g1_0,
                              offset: "0%",
                              stopColor: "#5f6be9",
                            }),
                            (0, l.jsx)("stop", {
                              className: c.screenIconHighlight_fill_g1_1,
                              offset: "100%",
                              stopColor: "#4d58ce",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter5"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: [
                            (0, l.jsx)("feGaussianBlur", {
                              in: "SourceAlpha",
                              stdDeviation: "8,8",
                            }),
                            (0, l.jsx)("feOffset", {
                              dx: "0",
                              dy: "16",
                              result: "tmp",
                            }),
                            (0, l.jsx)("feFlood", {
                              floodColor: "rgba(19,25,93,0.23)",
                            }),
                            (0, l.jsx)("feComposite", {
                              operator: "in",
                              in2: "tmp",
                            }),
                            (0, l.jsxs)("feMerge", {
                              result: "result",
                              children: [
                                (0, l.jsx)("feMergeNode", {}),
                                (0, l.jsx)("feMergeNode", {
                                  in: "SourceGraphic",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("fill0"),
                          x1: "86.2913",
                          y1: "141.923",
                          x2: "173.989",
                          y2: "89.1545",
                          spreadMethod: "pad",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#3e70dd",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "60%",
                              stopColor: "#6089f4",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#7196ff",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("fill1"),
                          x1: "1900.86",
                          y1: "1361.52",
                          x2: "1343.93",
                          y2: "1903.75",
                          spreadMethod: "pad",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#3e70dd",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "60%",
                              stopColor: "#6089f4",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#7196ff",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("fill2"),
                          x1: "6091.83",
                          y1: "1378.91",
                          x2: "6962.32",
                          y2: "-423.639",
                          spreadMethod: "pad",
                          gradientUnits: "userSpaceOnUse",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              offset: "0%",
                              stopColor: "#3e70dd",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "60%",
                              stopColor: "#6089f4",
                            }),
                            (0, l.jsx)("stop", {
                              offset: "100%",
                              stopColor: "#7196ff",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("filter", {
                          id: d("filter6"),
                          x: "-150%",
                          width: "400%",
                          y: "-150%",
                          height: "400%",
                          children: [
                            (0, l.jsx)("feGaussianBlur", {
                              in: "SourceAlpha",
                              stdDeviation: "8,8",
                            }),
                            (0, l.jsx)("feOffset", {
                              dx: "0",
                              dy: "16",
                              result: "tmp",
                            }),
                            (0, l.jsx)("feFlood", {
                              floodColor: "rgba(19,25,93,0.23)",
                            }),
                            (0, l.jsx)("feComposite", {
                              operator: "in",
                              in2: "tmp",
                            }),
                            (0, l.jsxs)("feMerge", {
                              result: "result",
                              children: [
                                (0, l.jsx)("feMergeNode", {}),
                                (0, l.jsx)("feMergeNode", {
                                  in: "SourceGraphic",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("linearGradient", {
                          id: d("buttonOverWindowHighlight-fill"),
                          x1: "0.109232",
                          y1: "0.072144",
                          x2: "0.888615",
                          y2: "0.947629",
                          spreadMethod: "pad",
                          gradientUnits: "objectBoundingBox",
                          gradientTransform: "translate(0 0)",
                          children: [
                            (0, l.jsx)("stop", {
                              className: c.buttonOverWindowHighlight_fill_g1_0,
                              offset: "0%",
                              stopColor: "#606ceb",
                            }),
                            (0, l.jsx)("stop", {
                              className: c.buttonOverWindowHighlight_fill_g1_1,
                              offset: "100%",
                              stopColor: "#4b56cb",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("g", {
                      children: [
                        (0, l.jsx)("rect", {
                          width: "392",
                          height: "254",
                          rx: "0",
                          ry: "0",
                          fill: "#1a1c37",
                        }),
                        (0, l.jsxs)("g", {
                          opacity: "0.7",
                          children: [
                            (0, l.jsx)("g", {
                              filter: u("filter0"),
                              children: (0, l.jsx)("rect", {
                                width: "241.861",
                                height: "148.887",
                                rx: "8",
                                ry: "8",
                                transform: "translate(21-.21051)",
                                fill: "#f47fff",
                              }),
                            }),
                            (0, l.jsx)("g", {
                              filter: u("filter1"),
                              children: (0, l.jsx)("rect", {
                                width: "335.168",
                                height: "206.331",
                                rx: "8",
                                ry: "8",
                                transform: "translate(57.8317 47.8552)",
                                fill: "#5865f2",
                              }),
                            }),
                            (0, l.jsx)("g", {
                              filter: u("filter2"),
                              children: (0, l.jsx)("rect", {
                                width: "154.693",
                                height: "101.993",
                                rx: "8",
                                ry: "8",
                                transform: "translate(223.574 11.5128)",
                                fill: "#ffd836",
                              }),
                            }),
                            (0, l.jsx)("g", {
                              filter: u("filter3"),
                              children: (0, l.jsx)("rect", {
                                width: "232.04",
                                height: "143.025",
                                rx: "8",
                                ry: "8",
                                transform: "translate(142.545 67.785)",
                                fill: "#aec7ff",
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsx)("g", {
                          className: c.windowIcon_to,
                          transform: "translate(195.557999,127)",
                          children: (0, l.jsx)("g", {
                            className: c.windowIcon_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: c.windowIcon,
                              transform: "translate(-195.557999,-127)",
                              filter: u("filter4"),
                              children: [
                                (0, l.jsx)("rect", {
                                  width: "86",
                                  height: "86",
                                  rx: "24",
                                  ry: "24",
                                  transform: "translate(152.558 84)",
                                  fill: "rgba(255,255,255,0.2)",
                                  fillOpacity: "0.967277",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M171.907,127c0-1.187.962-2.15,2.15-2.15h43c1.187,0,2.15.963,2.15,2.15v12.9c0,3.562-2.888,6.45-6.45,6.45h-34.4c-3.562,0-6.45-2.888-6.45-6.45v-12.9Z",
                                  fill: "#fff",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M171.907,114.1c0-3.562,2.888-6.45,6.45-6.45h34.4c3.562,0,6.45,2.888,6.45,6.45v4.3c0,1.187-.963,2.15-2.15,2.15h-43c-1.188,0-2.15-.963-2.15-2.15v-4.3Zm6.45,2.15c1.187,0,2.15-.963,2.15-2.15s-.963-2.15-2.15-2.15c-1.188,0-2.15.963-2.15,2.15s.962,2.15,2.15,2.15Zm8.6-2.15c0,1.187-.963,2.15-2.15,2.15-1.188,0-2.15-.963-2.15-2.15s.962-2.15,2.15-2.15c1.187,0,2.15.963,2.15,2.15Zm4.3,2.15c1.187,0,2.15-.963,2.15-2.15s-.963-2.15-2.15-2.15c-1.188,0-2.15.963-2.15,2.15s.962,2.15,2.15,2.15Z",
                                  clipRule: "evenodd",
                                  fill: "#fff",
                                  fillRule: "evenodd",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: c.clydeIcon_to,
                          transform: "translate(87,127)",
                          children: (0, l.jsx)("g", {
                            className: c.clydeIcon_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: c.clydeIcon,
                              transform: "translate(-87,-127)",
                              children: [
                                (0, l.jsx)("rect", {
                                  width: "86",
                                  height: "86",
                                  rx: "24",
                                  ry: "24",
                                  transform: "translate(44 84)",
                                  fill: "#fff",
                                  fillOpacity: "0.2",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M320.425,111.461c-3.152-1.468-6.475-2.502-9.883-3.09-.465.851-.891,1.723-1.267,2.614-3.627-.547-7.323-.547-10.951,0-.386-.891-.81-1.763-1.275-2.604-3.42.588-6.742,1.622-9.895,3.091-6.266,9.391-7.957,18.56-7.106,27.587c3.667,2.745,7.767,4.832,12.127,6.17.98-1.338,1.849-2.766,2.592-4.256-1.416-.536-2.788-1.195-4.094-1.985.347-.253.683-.507,1.008-.79c7.68,3.667,16.557,3.667,24.238,0c.326.273.661.537.997.79-1.303.78-2.678,1.449-4.091,1.985.752,1.49,1.612,2.908,2.589,4.245c4.359-1.337,8.46-3.424,12.127-6.169h.012c.997-10.456-1.7-19.533-7.128-27.588ZM295.84,133.505c-2.364,0-4.312-2.199-4.312-4.873c0-2.675,1.9-4.873,4.312-4.873s4.347,2.198,4.309,4.873c0,2.674-1.909,4.873-4.309,4.873Zm15.914,0c-2.364,0-4.312-2.199-4.312-4.873c0-2.675,1.909-4.873,4.312-4.873c2.4,0,4.347,2.198,4.309,4.873c0,2.674-1.909,4.873-4.309,4.873Z",
                                  transform: "translate(-216.043403 0)",
                                  fill: "#fff",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: c.screenIcon_to,
                          transform: "translate(304,127)",
                          children: (0, l.jsx)("g", {
                            className: c.screenIcon_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: c.screenIcon,
                              transform: "translate(-304,-127)",
                              children: [
                                (0, l.jsx)("rect", {
                                  className: c.screenIconHighlight,
                                  width: "86",
                                  height: "86",
                                  rx: "24",
                                  ry: "24",
                                  transform: "translate(261 84)",
                                  fill: u("screenIconHighlight-fill"),
                                  fillOpacity: "0.2",
                                }),
                                (0, l.jsxs)("g", {
                                  transform: "translate(217.000001 0)",
                                  children: [
                                    (0, l.jsx)("path", {
                                      d: "M71.9512,105.5c-3.5622,0-6.45,2.888-6.45,6.45v17.2c0,3.562,2.8878,6.45,6.45,6.45h30.0998c3.562,0,6.45-2.888,6.45-6.45v-17.2c0-3.562-2.888-6.45-6.45-6.45h-30.0998Z",
                                      fill: "#fff",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M90.2262,144.2c-.5937,0-1.075-.481-1.075-1.075v-4.3c0-.594-.4813-1.075-1.075-1.075h-2.15c-.5937,0-1.075.481-1.075,1.075v4.3c0,.594-.4813,1.075-1.075,1.075h-3.225c-1.1874,0-2.15.963-2.15,2.15s.9626,2.15,2.15,2.15h12.9c1.1874,0,2.15-.963,2.15-2.15s-.9626-2.15-2.15-2.15h-3.225Z",
                                      fill: "#fff",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: c.windowCard_ts,
                          transform:
                            "translate(194.2121,124.850005) scale(0.5,0.5)",
                          children: (0, l.jsxs)("g", {
                            className: c.windowCard,
                            transform: "translate(-109,-73.046998)",
                            opacity: "0",
                            children: [
                              (0, l.jsxs)("g", {
                                clipPath: u("windowCard-clip"),
                                children: [
                                  (0, l.jsxs)("g", {
                                    children: [
                                      (0, l.jsx)("g", {
                                        filter: u("filter5"),
                                        children: (0, l.jsx)("rect", {
                                          width: "218",
                                          height: "150",
                                          rx: "16",
                                          ry: "16",
                                          fill: "#fff",
                                        }),
                                      }),
                                      (0, l.jsxs)("g", {
                                        opacity: "0.4",
                                        children: [
                                          (0, l.jsx)("path", {
                                            d: "M173.774,75.7111l1.235-7.2965c-2.097.1074-4.142.6951-5.974,1.7174-1.832,1.0222-3.404,2.4515-4.592,4.177-7.414,11.7126-17.41,21.5865-29.228,28.871-2.955,3.383-6.746,5.937-10.996,7.411l1.722,7.068l4.537,18.57.459-.143c28.711-12.647,43.239-27.755,56.044-46.5831.173-.2289.316-.4864.46-.7153.871-1.4703,1.456-3.0916,1.722-4.7785l-10.824-1.8313c-1.449-.2855-2.733-1.1169-3.583-2.3213s-1.202-2.6892-.982-4.1454Z",
                                            fill: u("fill0"),
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M21.319,122.295c-1.1695-.128-2.3297-.329-3.4741-.601-.4737.269-.9249.575-1.3494.915-9.85782,7.969-18.49529,17.329-25.63905,27.785h26.44295l2.3543-16.31l1.6653-11.789Z",
                                            fill: u("fill1"),
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M19.6537,134.083l-2.3256,16.31h116.5959l-3.445-14.049-4.537-18.571-106.2883,16.31Z",
                                            fill: "#6a94ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M26.8024,122.266c-1.8232.186-3.6606.186-5.4838,0l-1.6653,11.789l106.2307-16.31-1.722-7.068c-1.854.673-3.782,1.124-5.742,1.345L26.8024,122.266Z",
                                            fill: u("fill2"),
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M117.041,19.7425l-2.325.2576c3.708.5198,7.261,1.8289,10.416,3.8384c3.156,2.0094,5.841,4.6722,7.873,7.8074c5.35.4964,10.453,2.4792,14.729,5.7228-1.981-7.8825-6.768-14.7792-13.47-19.4062-6.703-4.6269-14.864-6.6688-22.965-5.7454L12.9922,23.3193L108.141,12.6749c2.118-.2257,4.24.3896,5.906,1.7126s2.742,3.247,2.994,5.355v0Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M137.053,42.8912l4.45,39.5443c2.278-2.5498,4.209-5.388,5.743-8.441.721-1.3954,1.345-2.8391,1.866-4.3207.23-.6009.43-1.2018.631-1.8313v-.1431l.173-.7153c.295-1.0013.507-2.0254.631-3.0617.46-4.149,6.862-3.1189,6.403,1.0015-.209,1.4544-.536,2.8897-.976,4.2921-.988,3.4033-2.376,6.6785-4.135,9.7573c3.479-3.9599,5.794-8.7991,6.691-13.9854.897-5.1862.341-10.5186-1.605-15.4107-1.947-4.892-5.21-9.1542-9.43-12.3178-4.22-3.1635-9.234-5.1059-14.49-5.6134c2.215,3.3803,3.602,7.2324,4.048,11.2452v0Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M-6.73351,49.5297c.25761-.0286.5176-.0286.77521,0c1.3094-5.1229,4.15403-9.7265,8.15492-13.1975c4.00089-3.4711,8.96808-5.6447,14.23978-6.2313L108.14,19.8571c2.183-.2729,4.392-.2729,6.575,0l2.325-.2575c-.252-2.1191-1.336-4.0525-3.015-5.377-1.678-1.3246-3.815-1.9324-5.943-1.6906L12.991,23.3194l-3.21561.3434c-7.25704.7992-14.05693,3.9272-19.3752,8.9126s-8.86689,11.5583-10.11109,18.7283c3.7744-2.5168,8.094-4.1054,12.60415-4.6354l.37324,2.8614Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M21.3185,122.295c1.8232.185,3.6607.185,5.4839,0l91.6746-10.244c1.961-.221,3.888-.673,5.742-1.345c4.202-1.474,7.958-3.989,10.916-7.307c2.958-3.319,5.021-7.3325,5.995-11.664-9.635,7.4631-21.232,11.985-33.391,13.019-.819.031-1.619-.248-2.239-.781-.621-.533-1.017-1.28-1.108-2.091-.09-.812.13-1.627.618-2.2833.487-.6561,1.206-1.1041,2.011-1.2539c7.706-.755,15.208-2.9078,22.137-6.3523c4.643-2.4035,8.8-5.6439,12.259-9.557l-4.364-39.5444c-.446-4.0128-1.833-7.8649-4.048-11.2452-2.032-3.1352-4.717-5.798-7.872-7.8074-3.156-2.0095-6.709-3.3186-10.417-3.8384-2.183-.2729-4.392-.2729-6.575,0L16.4376,30.1008C11.166,30.6874,6.19878,32.861,2.19789,36.332s-6.84552,8.0747-8.15492,13.1976C0.072305,49.7871,6.10164,60.9751,7.70946,75.282c1.69396,14.9364-2.0672,27.584-8.354937,28.299h-.717783c1.296534,4.429,3.74569,8.438,7.09894,11.619s7.49122,5.421,11.99392,6.494c1.1822.276,2.381.477,3.5889.601v0ZM88.1868,93.6807L61.6002,96.5421c-5.8859.6593-11.7936-1.0382-16.424-4.7192-4.6303-3.681-7.6042-9.0441-8.2675-14.9099L34.8128,58.3712c-.2422-2.2035.4013-4.413,1.7894-6.145s3.4082-2.8456,5.618-3.0972l52.6562-5.8659c2.2111-.2413,4.428.3999,6.1656,1.7834c1.738,1.3835,2.856,3.3966,3.108,5.599l2.268,20.2014c.312,2.693.087,5.4209-.661,8.0272s-2.005,5.0398-3.699,7.1611c-1.694,2.1212-3.7907,3.8885-6.171,5.2004s-4.9971,2.1429-7.7002,2.4451v0ZM122.095,65.9825c-1.551.1793-3.119-.105-4.507-.8166-1.387-.7116-2.531-1.8184-3.286-3.1797s-1.086-2.9155-.952-4.465.727-3.0243,1.705-4.2368c.977-1.2124,2.294-2.1078,3.784-2.5723c1.489-.4644,3.083-.4769,4.58-.0359c1.496.4411,2.827,1.3157,3.824,2.5127.996,1.197,1.613,2.6623,1.771,4.2095.21,2.0499-.398,4.0999-1.693,5.7063-1.295,1.6065-3.173,2.6403-5.226,2.8778ZM12.5042,71.133c-.1799-1.5449.1054-3.1082.8194-4.4911s1.8246-2.5229,3.1905-3.275s2.9255-1.0824,4.4802-.9488c1.5548.1335,3.0346.725,4.2512,1.699s2.115,2.2866,2.581,3.7709.4786,3.0731.036,4.5646c-.4425,1.4914-1.3201,2.8179-2.5211,3.8109s-2.6714,1.6075-4.2238,1.7654c-2.057.2093-4.1139-.3969-5.7258-1.6874s-2.6492-3.1616-2.8876-5.2085v0Z",
                                            fill: "#7196ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M104.15,50.7315c-.252-2.2024-1.37-4.2155-3.108-5.5989-1.7376-1.3835-3.9546-2.0247-6.1656-1.7834L42.2202,49.215c-2.2099.2516-4.2299,1.3652-5.618,3.0973-1.3882,1.732-2.0316,3.9414-1.7895,6.145L36.9086,76.999c.6634,5.8658,3.6372,11.2289,8.2676,14.9099c4.6303,3.681,10.538,5.3785,16.424,4.7192l26.5865-2.8614c5.4428-.611,10.4198-3.3498,13.8383-7.6149c3.418-4.2651,4.998-9.7078,4.393-15.1331L104.15,50.7315ZM71.7927,82.8076l-11.4845,1.259c-.9556.1063-1.9145-.1702-2.6656-.7685s-1.233-1.4695-1.3396-2.4219.1708-1.908.7711-2.6566s1.4745-1.2288,2.4302-1.335L69.6106,75.74c.9576-.0968,1.9152.1846,2.6668.7839s1.2374,1.4685,1.3528,2.4209c.2584,1.9743.1435,3.6625-1.8375,3.8628ZM93.0389,80.776l-7.2352.8012c-.4899.0839-.9919.0671-1.4751-.0494-.4831-.1166-.9373-.3303-1.3345-.6282s-.7291-.6734-.9754-1.1038c-.2462-.4304-.4015-.9064-.4564-1.3988s-.0082-.9907.1372-1.4644c.1455-.4738.3865-.9129.7085-1.2903.3219-.3775.7179-.6854,1.1636-.9048s.9317-.3456,1.4282-.3709l7.2352-.8012c.9283-.0474,1.8397.2603,2.548.8603.7082.5999,1.1598,1.4468,1.2625,2.3676.1026.9207-.1514,1.8457-.7103,2.586s-1.3802,1.2399-2.2963,1.3967v0Z",
                                            fill: "#a9c7ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M120.401,50.5311c-1.551.1572-3.021.7704-4.222,1.7617s-2.079,2.316-2.523,3.8059-.434,3.0775.029,4.5616c.464,1.484,1.359,2.7973,2.573,3.7731c1.213.9757,2.691,1.57,4.244,1.7073c1.554.1372,3.113-.1888,4.48-.9365c1.367-.7478,2.48-1.8836,3.198-3.2633.718-1.3796,1.009-2.9408.835-4.4852-.246-2.046-1.284-3.9153-2.893-5.209-1.61-1.2937-3.662-1.9093-5.721-1.7156v0Z",
                                            fill: "#202225",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M21.2034,78.0291c1.5438-.1627,3.0044-.7786,4.1965-1.7697c1.1921-.991,2.0621-2.3126,2.4997-3.797s.4229-3.0649-.0421-4.5411-1.3592-2.7814-2.5695-3.7504-2.682-1.5579-4.2285-1.6922-3.0984.1922-4.4585.9379c-1.3602.7458-2.4675,1.8773-3.1816,3.2511s-1.0027,2.9279-.8294,4.4654c.2312,2.05,1.2666,3.9257,2.8803,5.2176s3.6747,1.8953,5.7331,1.6784v0Z",
                                            fill: "#202225",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M92.2341,73.5653l-7.2352.8012c-.4965.0253-.9825.1516-1.4282.371s-.8417.5272-1.1636.9047c-.322.3775-.563.8166-.7085,1.2903-.1454.4737-.1921.9721-.1372,1.4645s.2102.9684.4564,1.3987c.2463.4304.5782.806.9754,1.1039.3972.2978.8514.5116,1.3345.6281.4832.1165.9852.1334,1.4751.0495l7.2352-.8012c.9161-.1569,1.7375-.6565,2.2963-1.3968.5589-.7402.8129-1.6653.7103-2.586-.1027-.9207-.5543-1.7676-1.2625-2.3676s-1.6197-.9077-2.548-.8603Z",
                                            fill: "#7196ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M69.6688,75.7397L59.5625,76.8843c-.4732.0526-.9313.1976-1.3483.4267-.417.229-.7846.5377-1.0818.9084s-.5184.796-.6507,1.2518-.1733.9332-.1205,1.4047.1983.9282.4281,1.3438c.2299.4155.5396.7819.9115,1.0781.3719.2963.7988.5167,1.2561.6485.4574.1319.9363.1727,1.4095.1201l11.4845-1.259c1.981-.2003,2.0959-1.8886,1.8949-3.8629-.1151-.9634-.609-1.842-1.3734-2.4428s-1.7367-.8749-2.7036-.762Z",
                                            fill: "#7196ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M-6.73361,49.5295c-6.28779.6868-10.04889,13.3627-8.38369,28.2705c1.6366,14.3069,7.75204,25.752,13.86752,25.752h.602926C5.64089,102.837,9.40204,90.1898,7.70809,75.2534C6.10026,60.9465,0.070929,49.7871,-5.95841,49.5009c-.2576-.0286-.5176-.0286-.7752,0v.0286Z",
                                            fill: "#f47fff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M225.455,25.4939l-36.377-6.152c-.749-.1354-1.518-.1211-2.261.0422-.744.1633-1.447.4722-2.069.9089-.623.4367-1.152.9923-1.557,1.6347-.405.6423-.678,1.3585-.803,2.1069l-7.551,44.3801-1.062,7.2965c-.25,1.4905.102,3.019.979,4.252.876,1.233,2.207,2.0702,3.701,2.3292l10.824,1.8312l31.582,5.3794c.805.1297,1.628.0871,2.416-.1251.787-.2121,1.519-.5889,2.149-1.1053l.029-62.7787Z",
                                            fill: "#d4e4ff",
                                          }),
                                          (0, l.jsx)("path", {
                                            d: "M198.237,35.5948c3.614,3.2179,6.238,7.3908,7.57,12.0348c1.331,4.644,1.315,9.569-.048,14.204-.301,1.0466-.823,2.0169-1.531,2.846s-1.586,1.4977-2.575,1.9612c-.828.395-1.758.5299-2.666.3868-.907-.143-1.749-.5573-2.415-1.188-.623-.9681-.904-2.1149-.8-3.2598s.587-2.2228,1.374-3.0639c1.403-1.7183,3.249-3.0238,5.34-3.777c2.387-.8759,4.96-1.128,7.473-.7323s4.882,1.426,6.883,2.9928c2.124,1.7454,5.168-1.259,3.043-3.0331-2.393-1.9775-5.23-3.3487-8.27-3.9964-3.04-.6478-6.191-.5529-9.186.2766-5.743,1.6596-12.03,6.896-10.939,13.563s9.13,8.1835,14.011,4.521c4.881-3.6626,6-11.6745,5.311-17.712-.699-7.3159-4.107-14.1099-9.561-19.0568-2.095-1.8027-5.168,1.2304-3.072,3.0331h.058Z",
                                            fill: "#3e70dd",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("g", {
                                        filter: u("filter6"),
                                        children: (0, l.jsx)("rect", {
                                          width: "218",
                                          height: "150",
                                          rx: "16",
                                          ry: "16",
                                          fill: "#5865f2",
                                          fillOpacity: "0.36",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("clipPath", {
                                    id: d("windowCard-clip"),
                                    children: (0, l.jsx)("rect", {
                                      width: "218",
                                      height: "150",
                                      rx: "16",
                                      ry: "16",
                                      fill: "#fff",
                                    }),
                                  }),
                                ],
                              }),
                              (0, l.jsx)("ellipse", {
                                rx: "3.9077",
                                ry: "4",
                                transform: "translate(15.9077 16)",
                                fill: "#2e2f32",
                                fillOpacity: "0.74",
                              }),
                              (0, l.jsx)("ellipse", {
                                rx: "3.9077",
                                ry: "4",
                                transform: "translate(28 16)",
                                fill: "#2e2f32",
                                fillOpacity: "0.74",
                              }),
                              (0, l.jsx)("ellipse", {
                                rx: "3.9077",
                                ry: "4",
                                transform: "translate(40.0923 16)",
                                fill: "#2e2f32",
                                fillOpacity: "0.74",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: c.buttonOverWindow_ts,
                          transform: "translate(197,127) scale(0.8,0.8)",
                          children: (0, l.jsxs)("g", {
                            className: c.buttonOverWindow,
                            transform: "translate(-87,-127)",
                            opacity: "0",
                            children: [
                              (0, l.jsx)("rect", {
                                className: c.buttonOverWindowHighlight,
                                width: "86",
                                height: "86",
                                rx: "24",
                                ry: "24",
                                transform: "translate(44 84)",
                                fill: u("buttonOverWindowHighlight-fill"),
                                fillOpacity: "0.2",
                              }),
                              (0, l.jsxs)("g", {
                                transform: "translate(.750001 0)",
                                children: [
                                  (0, l.jsx)("path", {
                                    d: "M71.9512,105.5c-3.5622,0-6.45,2.888-6.45,6.45v17.2c0,3.562,2.8878,6.45,6.45,6.45h30.0998c3.562,0,6.45-2.888,6.45-6.45v-17.2c0-3.562-2.888-6.45-6.45-6.45h-30.0998Z",
                                    fill: "#fff",
                                  }),
                                  (0, l.jsx)("path", {
                                    d: "M90.2262,144.2c-.5937,0-1.075-.481-1.075-1.075v-4.3c0-.594-.4813-1.075-1.075-1.075h-2.15c-.5937,0-1.075.481-1.075,1.075v4.3c0,.594-.4813,1.075-1.075,1.075h-3.225c-1.1874,0-2.15.963-2.15,2.15s.9626,2.15,2.15,2.15h12.9c1.1874,0,2.15-.963,2.15-2.15s-.9626-2.15-2.15-2.15h-3.225Z",
                                    fill: "#fff",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("g", {
                          className: c.cursor_to,
                          transform: "translate(206.707,213.525767)",
                          children: (0, l.jsx)("g", {
                            className: c.cursor_ts,
                            transform: "scale(1,1)",
                            children: (0, l.jsxs)("g", {
                              className: c.cursor,
                              transform: "translate(-206.5,-172.653503)",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M194,187.542L194,153l25,25.06h-14.626l-.886.268L194,187.542Z",
                                  clipRule: "evenodd",
                                  fill: "#fff",
                                  fillRule: "evenodd",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M213.594,188.996l-7.776,3.311L195.72,168.39l7.95-3.35l9.924,23.956Z",
                                  clipRule: "evenodd",
                                  fill: "#fff",
                                  fillRule: "evenodd",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M210.718,187.528l-3.977,1.669-6.687-15.904l3.971-1.672l6.693,15.907Z",
                                  clipRule: "evenodd",
                                  fill: "#000",
                                  fillRule: "evenodd",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M196.157,158.192v24.131l6.404-6.182.923-.3h10.284l-17.611-17.649Z",
                                  clipRule: "evenodd",
                                  fill: "#000",
                                  fillRule: "evenodd",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
        });
      });
    },
    499596: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        s = n(481060),
        a = n(884338),
        o = n(933557),
        c = n(471445),
        d = n(5192),
        u = n(388032),
        f = n(532036);
      function h(e) {
        let { channel: t, users: n, selected: i = !1 } = e,
          h = (0, o.ZP)(t),
          m = null;
        null != n &&
          n.length > 0 &&
          (m = (0, l.jsx)(a.Z, {
            guildId: t.guild_id,
            className: f.voiceUserList,
            users: n,
            renderUser: (e) => {
              if (null == e) return null;
              let n = d.ZP.getName(t.guild_id, t.id, e),
                i = e.getAvatarURL(t.guild_id, 24);
              return (0, l.jsx)(s.TooltipContainer, {
                text: n,
                children: (0, l.jsx)("img", {
                  src: null != i ? i : void 0,
                  "aria-label": e.username,
                  alt: "",
                  className: f.avatar,
                }),
              });
            },
            renderMoreUsers: (e) => {
              let i = (function (e, t) {
                let n = t.id,
                  l = t.guild_id;
                return e.length <= 1
                  ? null
                  : 2 === e.length
                    ? u.intl.formatToPlainString(u.t.MlgLFx, {
                        nickname0: d.ZP.getName(l, n, e[0]),
                        nickname1: d.ZP.getName(l, n, e[1]),
                      })
                    : 3 === e.length
                      ? u.intl.formatToPlainString(u.t.sihix8, {
                          nickname0: d.ZP.getName(l, n, e[0]),
                          nickname1: d.ZP.getName(l, n, e[1]),
                          nickname2: d.ZP.getName(l, n, e[2]),
                        })
                      : u.intl.formatToPlainString(u.t["824IXV"], {
                          nickname0: d.ZP.getName(l, n, e[0]),
                          nickname1: d.ZP.getName(l, n, e[1]),
                          remainingCount: e.length - 2,
                        });
              })(n.slice(4), t);
              return (0, l.jsx)("div", {
                children: (0, l.jsx)(s.TooltipContainer, {
                  text: i,
                  children: (0, l.jsx)("div", {
                    className: f.userListOverflow,
                    children: e,
                  }),
                }),
              });
            },
            max: 5,
            showUserPopout: !1,
          }));
        let x = (0, c.KS)(t);
        return (0, l.jsxs)("div", {
          className: r()(f.channelInfo, { [f.selected]: i }),
          children: [
            (0, l.jsx)(x, { className: f.channelIcon }),
            (0, l.jsx)("div", { className: f.channelName, children: h }),
            m,
          ],
        });
      }
    },
    537135: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(383029);
      function r(e) {
        let { children: t } = e;
        return (0, l.jsx)("div", { className: i.card, children: t });
      }
    },
    148381: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(481060),
        o = n(958707),
        c = n(410894),
        d = n(317732);
      function u(e) {
        let {
            title: t,
            scrollerClassName: n,
            scrollerInnerClassName: r,
            children: u,
          } = e,
          f = i.useRef(null),
          [h, m] = i.useState(!1),
          [x, g] = i.useState(!1),
          p = i.useCallback(() => {
            let { current: e } = f;
            null != e && (m(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
          }, []);
        return (
          i.useLayoutEffect(() => p(), []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: s()(d.title, d.scrollWrapper),
                children: [
                  (0, l.jsx)(a.FormTitle, {
                    className: c.formItemTitle,
                    children: t,
                  }),
                  (0, l.jsx)(o.Z, { separator: h }),
                ],
              }),
              (0, l.jsx)("div", {
                className: n,
                children: (0, l.jsx)(a.AdvancedScroller, {
                  ref: f,
                  className: s()(d.scrollerInner, r, {
                    [d.bottomSeparator]: x,
                  }),
                  onScroll: p,
                  children: u,
                }),
              }),
            ],
          })
        );
      }
    },
    567126: function (e, t, n) {
      n.d(t, {
        Hu: function () {
          return X;
        },
        oA: function () {
          return V;
        },
        se: function () {
          return Y;
        },
      }),
        n(47120),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(863942),
        n(642549),
        n(653041),
        n(724458);
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(553813),
        o = n.n(a),
        c = n(788900),
        d = n(268146),
        u = n(442837),
        f = n(141038),
        h = n(846519),
        m = n(481060),
        x = n(224706),
        g = n(579806),
        p = n(600164),
        v = n(152708),
        j = n(594190),
        C = n(751571),
        S = n(569984),
        Z = n(918701),
        _ = n(977156),
        I = n(28798),
        T = n(131951),
        N = n(449224),
        b = n(358085),
        w = n(463727),
        E = n(855403),
        y = n(299570),
        R = n(960861),
        M = n(989941),
        P = n(958707),
        k = n(152165),
        A = n(133179),
        B = n(70722),
        L = n(761274),
        G = n(46140),
        D = n(65154),
        O = n(388032),
        U = n(24548);
      async function F() {
        let e = T.Z.getVideoDevices(),
          t = (0, f.Z)(T.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99,
          }),
          n = H(),
          l = await n,
          i = await t,
          r = i
            .filter((e) => e.id.startsWith(d.vA.SCREEN))
            .map((e) => {
              let t = e.name;
              return (
                "Entire screen" === t
                  ? (t = O.intl.string(O.t.R4wpLC))
                  : /^Screen \d+$/.test(t) &&
                    (t = O.intl.formatToPlainString(O.t["y/R7n5"], {
                      index: parseInt(t.split(" ")[1]),
                    })),
                { ...e, name: t }
              );
            }),
          s = (function (e, t) {
            let n = {};
            return (
              t.forEach((e) => {
                n[e.id] = e;
              }),
              e.forEach((e) => {
                n[e.id] = e;
              }),
              Object.values(n)
            );
          })(
            i.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            l,
          ),
          a = [
            "GQgGHISKZ5aYqYeYhX9isDUHGw",
            "bAgKFITWhoVvmHVRuokCdjVQaA",
            "XAgGDIJ/ipadd3iCiYUcWpCZBA",
            "HRkGDIT5aXRneomGdlvUawB7qA",
            "I9gNDISmlqqPmHiKd3isTp/5lg",
            "XxgGBIIwT2ZGpneUeZev6fWLXQ",
            "KzsKNIZDeYmfd3ihe1bXfr8Jxg",
            "J9cRDIJ6iHd/d4h4eIUJf5LyRw",
            "DggKFIQwtndKe3hVfXnAWQmddQ",
            "WggKDILeh3ePZpd6l4jln1b5SQ",
            "4PgJJIJVl3eAaod2iJeHj7tE8Q",
          ];
        return {
          windowSources: s,
          screenSources: r,
          cameraSources: Object.entries(e)
            .filter((e) => {
              let [t, n] = e;
              return !n.disabled;
            })
            .map((e, t) => {
              let [n, l] = e,
                i = a[t % a.length],
                r = Uint8Array.from(atob(i), (e) => e.charCodeAt(0)),
                s = (0, c.xS)(r);
              return { id: "camera:" + l.id, name: l.name, url: s };
            }),
        };
      }
      async function H() {
        let e = j.ZP.getRunningGames();
        return (
          await Promise.all(
            e.map(async (e) => {
              let t;
              if (null == e.name) return null;
              try {
                t = await x.Z.identifyGame(e.pid, e.name);
              } catch (e) {
                return null;
              }
              let n = e.windowHandle,
                l = e.name,
                i = t.icon;
              return null != n && null != l && null != i
                ? {
                    id: "window:".concat(n),
                    name: l,
                    url: "data:image/bmp;base64,".concat(i),
                  }
                : null;
            }),
          )
        ).filter((e) => null !== e);
      }
      function W(e) {
        let t = (0, b.isWindows)() ? (0, M.Z)(j.ZP, N.Z) : null,
          n = j.ZP.getRunningGames();
        return null != t && (0, E.Z)(e.id, t.windowHandle)
          ? 2
          : null != n.find((t) => (0, E.Z)(e.id, t.windowHandle))
            ? 1
            : 0;
      }
      function V(e) {
        let { selectedSource: t, onChangeSelectedSource: n } = e,
          { enableGoLiveCaptureCard: r } = w.Z.useExperiment({
            location: "GoLive_Source_Select",
          }),
          a = T.Z.supports(D.AN.GO_LIVE_HARDWARE),
          [o, c] = i.useState(null),
          [f, x] = i.useState(null),
          [g, N] = i.useState(null),
          b = null != g && g.length > 0,
          [y, R] = i.useState(d.vA.WINDOW),
          [M, k] = i.useState(!1),
          B = i.useRef(null),
          H = i.useRef(new h.Xp()),
          V = (0, u.e7)([j.ZP], () => j.ZP.getRunningGames()),
          z = (function (e, t, n) {
            let l = (0, _.Zy)({ location: G.dr.STREAM_SOURCE_SELECT });
            return i.useMemo(() => {
              if (null == n || !l) return null;
              for (let l of n) {
                var i, r;
                let n = t.find((e) => (0, E.Z)(l.id, e.windowHandle));
                if ((null == n ? void 0 : n.id) == null) continue;
                let s = (0, Z.lQ)(e, n.id);
                if (
                  null != s &&
                  (null === (i = s.userStatus) || void 0 === i
                    ? void 0
                    : i.enrolledAt) != null &&
                  (null === (r = s.userStatus) || void 0 === r
                    ? void 0
                    : r.completedAt) == null
                )
                  return { source: l, quest: s };
              }
              return null;
            }, [l, e, t, n]);
          })(
            (0, u.e7)([S.Z], () => S.Z.quests),
            V,
            f,
          ),
          K = i.useMemo(
            () =>
              null == f
                ? null
                : [...f].sort((e, t) =>
                    (null == z ? void 0 : z.source.id) === e.id
                      ? -1
                      : (null == z ? void 0 : z.source.id) === t.id
                        ? 1
                        : W(t) - W(e),
                  ),
            [z, f],
          );
        i.useEffect(() => {
          let e = H.current;
          return (
            F().then((e) => {
              let { screenSources: t, windowSources: n, cameraSources: l } = e;
              c(t), x(n), N(l);
            }),
            e.start(1e3, async () => {
              let {
                screenSources: e,
                windowSources: t,
                cameraSources: n,
              } = await F();
              c(e), x(t), N(n);
            }),
            () => {
              e.stop();
            }
          );
        }, []);
        let Y = i.useCallback((e) => {
            null !== e && ((B.current = e), k(!e.isScrolledToTop()));
          }, []),
          [X, J] = i.useState(void 0);
        i.useEffect(() => {
          C.Z.hasPermission(L.Eu.SCREEN_RECORDING, {
            showAuthorizationError: !1,
          }).then(J);
        }, []);
        let q = (function (e) {
          switch (e) {
            case d.vA.WINDOW:
              return K;
            case d.vA.SCREEN:
              return o;
            case d.vA.CAMERA:
              return g;
          }
        })(y);
        if (null == q)
          return !1 === X
            ? (0, l.jsxs)(m.Text, {
                className: U.errorMessage,
                variant: "text-md/normal",
                color: "text-danger",
                children: [
                  O.intl.string(O.t["kW5h/f"]),
                  (0, l.jsx)("br", {}),
                  O.intl.string(O.t["5Jvu1d"]),
                ],
              })
            : (0, l.jsx)(p.Z, {
                className: U.spinner,
                justify: p.Z.Justify.CENTER,
                align: p.Z.Align.CENTER,
                children: (0, l.jsx)(m.Spinner, {}),
              });
        let Q = q.map((e) => {
          let { id: i } = e,
            r = (null == t ? void 0 : t.id) === i;
          return (0, l.jsx)(
            m.Clickable,
            {
              className: s()(U.tile, { [U.selected]: r }),
              onClick: () => n(e, null),
              children: (0, l.jsx)(A.Z, { source: e, selectedSource: t }, e.id),
            },
            i,
          );
        });
        function $() {
          let e = B.current;
          null != e && k(!e.isScrolledToTop());
        }
        return (0, l.jsxs)(i.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: U.segmentContainer,
              children: [
                (0, l.jsx)(P.Z, { separator: M }),
                (0, l.jsx)(m.SegmentedControl, {
                  options: (function () {
                    let e = [
                      { name: O.intl.string(O.t.tHoi7u), value: d.vA.WINDOW },
                      {
                        name: O.intl.string(O.t["/iX8u7"]),
                        value: d.vA.SCREEN,
                      },
                    ];
                    return (
                      r &&
                        a &&
                        b &&
                        e.push({
                          name: O.intl.string(O.t.cWt5Ul),
                          value: d.vA.CAMERA,
                        }),
                      e
                    );
                  })(),
                  value: y,
                  onChange: (e) => {
                    let { value: t } = e;
                    return R(t);
                  },
                  className: U.segmentControl,
                  optionClassName: U.segmentControlOption,
                }),
              ],
            }),
            y === d.vA.CAMERA
              ? (0, l.jsx)("div", {
                  className: U.sourceContainer,
                  children: (0, l.jsx)(m.AdvancedScroller, {
                    ref: Y,
                    className: U.sourceScroller,
                    onScroll: $,
                    children: (0, l.jsx)(v.Z, {
                      layout: v.Z.Layout.WRAP,
                      columns: 2,
                      className: U.sourceContainer,
                      children: Q,
                    }),
                  }),
                })
              : (0, l.jsxs)(m.AdvancedScroller, {
                  ref: Y,
                  className: U.sourceScroller,
                  onScroll: $,
                  children: [
                    y === d.vA.WINDOW &&
                      null != z &&
                      (0, l.jsx)(I.Z, { quest: z.quest }),
                    (0, l.jsx)(v.Z, {
                      layout: v.Z.Layout.WRAP,
                      columns: 2,
                      className: U.sourceContainer,
                      children: Q,
                    }),
                  ],
                }),
          ],
        });
      }
      function z(e) {
        let { onSelect: t } = e,
          n = i.useCallback(() => {
            t({
              id: "prepicked:",
              name: O.intl.string(O.t["KKcy9/"]),
              url: "",
            });
          }, [t]);
        return (0, l.jsx)(m.Clickable, {
          role: "radio",
          "aria-checked": !1,
          onClick: n,
          tabIndex: 0,
          className: s()(
            U.nativeSourceSingleTypeButton,
            U.nativePickerRadioItem,
          ),
          children: (0, l.jsxs)("div", {
            className: U.nativeSourceSingleTypeButtonInner,
            children: [
              (0, l.jsx)(k.Z, { className: U.nativeSourceSingleTypeImage }),
              (0, l.jsx)(m.Text, {
                variant: "text-md/medium",
                color: "none",
                children: O.intl.string(O.t.Yp6h5e),
              }),
            ],
          }),
        });
      }
      function K(e) {
        let { id: t, name: n, text: r, icon: a, onSelect: o } = e,
          c = i.useCallback(() => {
            o({ id: "prepicked:" + t, name: n, url: "" });
          }, [t, n, o]);
        return (0, l.jsx)(m.Clickable, {
          role: "radio",
          "aria-checked": !1,
          onClick: c,
          tabIndex: 0,
          className: s()(U.nativeSourceTypeButton, U.nativePickerRadioItem),
          children: (0, l.jsxs)("div", {
            className: U.nativeSourceTypeButtonInner,
            children: [
              (0, l.jsx)(a, { size: "lg" }),
              (0, l.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: r,
              }),
            ],
          }),
        });
      }
      function Y(e) {
        let { onSourceSelect: t } = e,
          [n, r] = i.useState([]),
          [a, c] = i.useState({}),
          d = i.useRef(new h.Xp());
        i.useEffect(() => {
          let e = d.current,
            t = () => {
              let e = Object.entries(T.Z.getVideoDevices()).filter((e) => {
                let [t, n] = e;
                return !n.disabled;
              });
              r(e),
                c({
                  ...e.reduce((e, t) => {
                    let [n, l] = t;
                    return { ...e, ["camera:" + n]: l.name };
                  }, {}),
                });
            };
          return (
            t(),
            e.start(1e3, t),
            () => {
              e.stop();
            }
          );
        }, []);
        let u = i.useCallback(
            (e) => {
              var n;
              let { value: l } = e;
              t({
                id: l,
                name: null !== (n = a[l]) && void 0 !== n ? n : "",
                url: "",
              });
            },
            [t, a],
          ),
          f =
            (0, b.isMac)() &&
            o().satisfies(
              null === g.Z || void 0 === g.Z ? void 0 : g.Z.os.release,
              B.jR,
            ),
          x = (0, b.isMac)(),
          [p, v] = i.useState(!1),
          j = i.useCallback(() => {
            v(!p);
          }, [p]),
          C = f
            ? (0, l.jsx)(z, { onSelect: t })
            : (0, l.jsxs)("div", {
                className: U.nativePickerTypes,
                children: [
                  (0, l.jsx)(K, {
                    onSelect: t,
                    id: "screen",
                    name: O.intl.string(O.t.R4wpLC),
                    text: O.intl.string(O.t.cVUFXV),
                    icon: m.ScreenIcon,
                  }),
                  (0, l.jsx)(K, {
                    onSelect: t,
                    id: "window",
                    name: O.intl.string(O.t["+SLJCg"]),
                    text: O.intl.string(O.t.dG2A1N),
                    icon: m.BrowserIcon,
                  }),
                  x
                    ? (0, l.jsx)(K, {
                        onSelect: t,
                        id: "app",
                        name: O.intl.string(O.t.ct7AKS),
                        text: O.intl.string(O.t["8lQwf3"]),
                        icon: m.ClydeIcon,
                      })
                    : null,
                ],
              });
        return (0, l.jsxs)("div", {
          className: U.nativePickerScroll,
          children: [
            (0, l.jsx)(m.Text, {
              className: U.nativePickerLabel,
              variant: "text-md/semibold",
              color: "interactive-normal",
              children: O.intl.string(O.t.XyYoFR),
            }),
            C,
            0 === n.length
              ? null
              : (0, l.jsxs)("div", {
                  className: s()(
                    U.nativePickerCaptureSection,
                    p ? null : U.nativePickerCollapsed,
                  ),
                  children: [
                    (0, l.jsxs)(m.Clickable, {
                      onClick: j,
                      className: s()(U.nativePickerLabel),
                      children: [
                        (0, l.jsx)(m.Text, {
                          className: U.nativeCaptureDevicesText,
                          variant: "text-md/semibold",
                          color: "interactive-normal",
                          children: O.intl.string(O.t.rO0Vi4),
                        }),
                        (0, l.jsx)(m.ChevronSmallDownIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: U.captureDevicesToggleIndicator,
                        }),
                      ],
                    }),
                    (0, l.jsx)(m.RadioGroup, {
                      className: U.nativePickerCaptureList,
                      onChange: u,
                      radioItemClassName: U.nativePickerRadioItem,
                      options: n.map((e) => {
                        let [t, n] = e;
                        return {
                          name: n.name,
                          value: "camera:" + n.id,
                          icon: m.VideoIcon,
                          radioItemIconClassName: U.hideRadioCheckbox,
                        };
                      }),
                    }),
                  ],
                }),
          ],
        });
      }
      function X(e) {
        let { onSourceSelect: t, onCancel: n, pickerType: r } = e,
          { lastPickerAction: s, lastPickerError: a } = (0, u.e7)([R.ZP], () =>
            R.ZP.getPickerState(),
          ),
          [o, c] = i.useState(!1);
        return (
          (0, R.kE)(),
          i.useEffect(() => {
            "" === r ? (0, y.T)(r) : (0, y.t)();
          }, [r]),
          i.useEffect(() => {
            o
              ? s === R.Uc.Update
                ? t()
                : s === R.Uc.Cancel && ((0, y.t)(), n())
              : (null == s || s === R.Uc.Present) && c(!0);
          }, [o, s, t, n]),
          s === R.Uc.Error
            ? (0, l.jsx)(m.Text, {
                className: U.errorMessage,
                variant: "text-md/normal",
                color: "text-danger",
                children:
                  null != a && a.length > 0 ? a : O.intl.string(O.t.CKsXk5),
              })
            : (0, l.jsx)(k.Z, { animated: !0, className: U.nativePickerGuide })
        );
      }
    },
    133179: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        s = n(481060),
        a = n(600164),
        o = n(24548);
      function c(e) {
        let { source: t, selectedSource: n } = e,
          { id: i, name: c, url: d } = t,
          u = (null == n ? void 0 : n.id) === i;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            justify: a.Z.Justify.CENTER,
            align: a.Z.Align.CENTER,
            children: [
              (0, l.jsx)(a.Z, {
                justify: a.Z.Justify.CENTER,
                align: a.Z.Align.CENTER,
                children: (0, l.jsx)("div", {
                  style: { backgroundImage: "url(".concat(d, ")") },
                  className: r()(o.sourceThumbnail, { [o.selected]: u }),
                }),
              }),
              (0, l.jsx)(s.Text, {
                className: r()(o.sourceName, { [o.selected]: u }),
                variant: "text-sm/normal",
                children: c,
              }),
            ],
          }),
        });
      }
    },
    641115: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(512722),
        o = n.n(a),
        c = n(848246),
        d = n(442837),
        u = n(481060),
        f = n(410575),
        h = n(2052),
        m = n(924557),
        x = n(600164),
        g = n(436774),
        p = n(933843),
        v = n(140465),
        j = n(1163),
        C = n(774026),
        S = n(592125),
        Z = n(944486),
        _ = n(594174),
        I = n(74538),
        T = n(451467),
        N = n(122186),
        b = n(37113),
        w = n(981631),
        E = n(474936),
        y = n(388032),
        R = n(410894),
        M = n(13458),
        P = n(113207);
      function k(e) {
        let { analyticsLocation: t, onClose: i } = e;
        (0, u.openModalLazy)(async () => {
          let { default: e } = await n.e("28479").then(n.bind(n, 78865));
          return (n) =>
            (0, l.jsx)(e, { ...n, onCloseParent: i, analyticsSource: t });
        });
      }
      function A() {
        return (0, l.jsxs)("div", {
          className: M.toolTipTextContainer,
          children: [
            (0, l.jsx)(u.NitroWheelIcon, {
              size: "md",
              color: g.JX.PREMIUM_TIER_2,
              className: s()(M.premiumIcon),
            }),
            (0, l.jsx)(u.Text, {
              className: M.upsellText,
              variant: "text-sm/medium",
              children: y.intl.string(y.t.sEAnVF),
            }),
          ],
        });
      }
      function B(e) {
        let t,
          n,
          {
            type: i,
            selected: r,
            needsPremium: a,
            needsDemo: o,
            analyticsLocation: c,
            onClick: d,
            onClose: f,
            setIsHovering: h,
          } = e,
          { value: m, label: x } = i;
        return (
          a
            ? ((t = (0, l.jsx)(u.TooltipContainer, {
                tooltipClassName: M.tooltip,
                spacing: 6,
                "aria-label": y.intl.string(y.t.sEAnVF),
                text: (0, l.jsx)(A, {}),
                children: (0, l.jsx)("div", {
                  className: M.textContainer,
                  onMouseEnter: () => h(!0),
                  onMouseLeave: () => h(!1),
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-xs/bold",
                    className: s()(
                      M.selectorNitroText,
                      M.enhancedSelectorNitroText,
                    ),
                    children: x,
                  }),
                }),
              })),
              (n = () => k({ analyticsLocation: c, onClose: f })))
            : ((t = (0, l.jsx)("div", {
                className: M.textContainer,
                children: (0, l.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  className: s()(M.selectorText, {
                    [M.enhancedSelectorNitroText]: o,
                  }),
                  children: x,
                }),
              })),
              (n = () => d(m))),
          {
            content: t,
            className: s()(M.selectorButton, {
              [M.selectorButtonSelected]: r,
              [M.perksDemo]: o,
              [M.premiumUpsell]: a,
            }),
            onClick: n,
          }
        );
      }
      function L(e) {
        let {
            onClose: t,
            selectedPreset: n,
            selectedResolution: r,
            selectedFPS: s,
            onResolutionChange: a,
            onFPSChange: g,
            onPresetChange: A,
            targetGuildPremiumTier: L,
            captureDeviceSelected: G,
          } = e,
          D = (0, d.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return (
              o()(null != e, "StreamSettings: user cannot be undefined"), e
            );
          }),
          O = (0, d.e7)([Z.Z, S.Z], () =>
            S.Z.getChannel(Z.Z.getVoiceChannelId()),
          ),
          U = I.ZP.canStreamQuality(I.U2.MID, D),
          { location: F } = (0, h.O)(),
          H = (0, m.Zq)({ autoTrackExposure: !1 }),
          W = (0, I.I5)(D, E.p9.TIER_1);
        j.Z.useExperiment(
          { location: "Go Live Modal" },
          { autoTrackExposure: !0, disable: W },
        );
        let V = (0, v.x8)("StreamSettings"),
          z = _.default.getUser(null == O ? void 0 : O.hdStreamingBuyerId),
          K =
            null != O &&
            null != O.hdStreamingUntil &&
            new Date(O.hdStreamingUntil) > new Date() &&
            null != z,
          Y = (0, p.So)(c.q.STREAM_HIGH_QUALITY),
          X = (!U && !H) || Y,
          [J, q] = i.useState(!1),
          Q = G ? b.z8 : b.WC,
          $ = { ...F, section: w.jXE.STREAM_SETTINGS },
          ee = (0, l.jsx)(u.ButtonGroup, {
            buttons: Q.map((e) =>
              B({
                type: e,
                selected: e.value === r,
                needsPremium: !(0, T.Z)(n, e.value, s, D, L, O),
                needsDemo: (Y || V) && e.value !== b.LY.RESOLUTION_720,
                analyticsLocation: $,
                onClick: () => a(e.value),
                onClose: t,
                setIsHovering: q,
              }),
            ),
          }),
          et = (0, l.jsx)(u.ButtonGroup, {
            buttons: b.k0.map((e) =>
              B({
                type: e,
                selected: e.value === s,
                needsPremium: !(0, T.Z)(n, r, e.value, D, L, O),
                needsDemo: (Y || V) && e.value === b.ws.FPS_60,
                analyticsLocation: $,
                onClick: () => g(e.value),
                onClose: t,
                setIsHovering: q,
              }),
            ),
          }),
          en = [
            { value: b.tI.PRESET_VIDEO, label: y.intl.string(y.t.HcwHc3) },
            ...(G
              ? []
              : [
                  {
                    value: b.tI.PRESET_DOCUMENTS,
                    label: y.intl.string(y.t["/RfohI"]),
                  },
                ]),
            { value: b.tI.PRESET_CUSTOM, label: y.intl.string(y.t["+eOtrK"]) },
          ],
          el =
            n === b.tI.PRESET_DOCUMENTS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(x.Z, {
                      children: (0, l.jsx)(u.FormItem, {
                        title: y.intl.string(y.t.rHyPXl),
                        titleClassName: R.formItemTitleSlim,
                        className: M.documentModeGroup,
                        children: (0, l.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          children: y.intl.format(y.t["U+hmam"], { fps: s }),
                        }),
                      }),
                    }),
                    X
                      ? (0, l.jsx)(N.Z, {
                          message: y.intl.string(y.t.deDogI),
                          onClose: t,
                          openStreamUpsellModal: k,
                        })
                      : null,
                    V && (0, l.jsx)(N.c, {}),
                    K &&
                      null != O.hdStreamingUntil &&
                      (0, l.jsx)(C.Z, {
                        streamingUntil: O.hdStreamingUntil,
                        user: z,
                        channel: O,
                      }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(x.Z, {
                      children: [
                        (0, l.jsx)(u.FormItem, {
                          title: y.intl.string(y.t.rHyPXl),
                          className: M.settingsGroup,
                          titleClassName: R.formItemTitleSlim,
                          children: ee,
                        }),
                        (0, l.jsx)(u.FormItem, {
                          title: y.intl.string(y.t.SkkeIi),
                          className: M.settingsGroup,
                          titleClassName: R.formItemTitleSlim,
                          children: et,
                        }),
                      ],
                    }),
                    X
                      ? (0, l.jsx)(N.Z, {
                          onClose: t,
                          openStreamUpsellModal: k,
                          glow: J,
                        })
                      : null,
                    V && (0, l.jsx)(N.c, {}),
                    K &&
                      null != O.hdStreamingUntil &&
                      (0, l.jsx)(C.Z, {
                        streamingUntil: null == O ? void 0 : O.hdStreamingUntil,
                        user: z,
                        channel: O,
                      }),
                  ],
                });
        return (0, l.jsx)(f.Z, {
          ...$,
          children: (0, l.jsx)(u.FormItem, {
            title: y.intl.string(y.t.ax4FnZ),
            titleClassName: R.formItemTitle,
            className: R.modalContent,
            children: (0, l.jsxs)("div", {
              className: M.qualitySettingsContainer,
              children: [
                (0, l.jsx)(u.SingleSelect, {
                  value: n,
                  className: P.marginTop8,
                  options: en,
                  onChange: (e) => A(e),
                }),
                el,
              ],
            }),
          }),
        });
      }
    },
    122186: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
        c: function () {
          return T;
        },
      });
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(848246),
        o = n(442837),
        c = n(481060),
        d = n(607070),
        u = n(436774),
        f = n(933843),
        h = n(1163),
        m = n(846401),
        x = n(48125),
        g = n(639119),
        p = n(197115),
        v = n(74538),
        j = n(981631),
        C = n(474936),
        S = n(388032),
        Z = n(742769);
      function _(e) {
        let { location: t, ...n } = e,
          r = (0, g.N)(),
          a = null != r,
          o = x.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner.NitroButton" },
            { autoTrackExposure: a, disable: !a },
          ).enabled,
          d = i.useCallback(() => {
            if (o) {
              var e;
              return null !== (e = (0, v.fr)(r)) && void 0 !== e
                ? e
                : S.intl.string(S.t.Y2WKTk);
            }
            return S.intl.string(S.t.Y2WKTk);
          }, [o, r]);
        return (0, l.jsx)(p.Z, {
          className: s()(Z.enhancedCTA, Z.ctaGradientBackground),
          iconClassName: Z.premiumIcon,
          subscriptionTier: C.Si.TIER_2,
          buttonText: d(),
          size: c.Button.Sizes.TINY,
          premiumModalAnalyticsLocation: t,
          ...n,
        });
      }
      function I() {
        let e = (0, m.Z)();
        return (0, l.jsxs)("div", {
          className: Z.extendedDemoContainer,
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: Z.extendedDemoContainer,
                  children: [
                    (0, l.jsx)(c.Text, {
                      variant: "text-xs/bold",
                      color: "status-warning",
                      className: Z.extendedDemoDurationText,
                      children: e.toUpperCase(),
                    }),
                    (0, l.jsx)(c.Text, {
                      variant: "text-xs/bold",
                      children: S.intl.string(S.t.bbRRNT).toUpperCase(),
                    }),
                  ],
                }),
                (0, l.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  children: S.intl.string(S.t["1swibW"]),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: Z.extendedDemoButton,
              children: (0, l.jsx)(_, { size: c.Button.Sizes.SMALL }),
            }),
          ],
        });
      }
      function T() {
        let e = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, l.jsxs)("div", {
          className: s()(Z.reverseTrialEducationBannerContainer, {
            [Z.reducedMotion]: e,
          }),
          children: [
            (0, l.jsx)(c.LottieAnimation, {
              className: s()(Z.unlockAnimation, { [Z.reducedMotion]: e }),
              loop: !1,
              shouldAnimate: !e,
              pauseAtFrame: e ? 149 : void 0,
              importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
            }),
            (0, l.jsx)(c.Text, {
              variant: "text-xs/medium",
              className: Z.reverseTrialEducationText,
              children: S.intl.format(S.t.GimLpa, {}),
            }),
          ],
        });
      }
      function N(e) {
        let {
            message: t,
            onClose: n,
            openStreamUpsellModal: i,
            glow: r = !1,
          } = e,
          o = {
            section: j.jXE.STREAM_SETTINGS,
            object: j.qAy.PREMIUM_UPSELL_BANNER,
            objectType: j.Qqv.BUY,
          },
          d = (0, f.So)(a.q.STREAM_HIGH_QUALITY),
          m = h.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration;
        return (0, l.jsx)("div", {
          className: s()(Z.upsellBanner, Z.enhancedBanner, {
            [Z.gradientGlow]: r,
          }),
          children:
            d && m
              ? (0, l.jsx)(I, {})
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: Z.iconTextContainer,
                      children: [
                        (0, l.jsx)(c.NitroWheelIcon, {
                          size: "md",
                          color: u.JX.PREMIUM_TIER_2,
                        }),
                        (0, l.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          className: s()(Z.upsellText, Z.enhancedUpsellText),
                          children:
                            null != t
                              ? t
                              : d
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      S.intl.string(S.t.zuZ2ws),
                                      " ",
                                      S.intl.format(S.t.fjSvsL, {
                                        onClick: () =>
                                          i({
                                            analyticsLocation: o,
                                            onClose: n,
                                          }),
                                      }),
                                    ],
                                  })
                                : S.intl.format(S.t["L/zCtr"], {
                                    onClick: () =>
                                      i({ analyticsLocation: o, onClose: n }),
                                  }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: Z.enhancedCTAs,
                      children: (0, l.jsx)(_, { location: o }),
                    }),
                  ],
                }),
        });
      }
    },
    176940: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var l = n(131951);
      function i() {
        return Object.entries(l.Z.getVideoDevices()).map((e) => {
          let [t, n] = e;
          return { id: "camera:" + n.id, name: n.name, url: "" };
        });
      }
    },
    143135: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = n(855403);
      function i(e, t, n) {
        return null == t ? e : n.find((e) => (0, l.Z)(t.id, e.windowHandle));
      }
    },
    846401: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var l = n(192379),
        i = n(913527),
        r = n.n(i),
        s = n(848246),
        a = n(442837),
        o = n(846519),
        c = n(114064),
        d = n(388032);
      function u(e) {
        return e.toString().padStart(2, "0");
      }
      function f(e) {
        let t = r().duration(e.diff(r()()));
        return ""
          .concat(u(t.hours()), ":")
          .concat(u(t.minutes()), ":")
          .concat(u(t.seconds()));
      }
      function h() {
        let [e, t] = l.useState(
            f(r()(c.Z.activatedEndTime(s.q.STREAM_HIGH_QUALITY))),
          ),
          n = (0, a.e7)([c.Z], () =>
            c.Z.activatedEndTime(s.q.STREAM_HIGH_QUALITY),
          ),
          i = l.useMemo(() => r()(n), [n]),
          u = l.useRef(new o.Xp()),
          h = l.useCallback(() => {
            t(f(i));
          }, [i]);
        return (
          l.useEffect(() => {
            let e = r().duration(i.diff(r()()));
            1 > e.seconds()
              ? (t("00:00:00"), u.current.stop())
              : 1 > e.days()
                ? (h(), u.current.start(1e3, h))
                : (t(
                    d.intl.formatToPlainString(d.t["x+Dvys"], {
                      time: Math.floor(e.asDays()),
                    }),
                  ),
                  u.current.stop());
          }, [i, h]),
          e
        );
      }
    },
    28798: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var i = n(442837),
        r = n(780384),
        s = n(481060),
        a = n(210887),
        o = n(475595),
        c = n(231338),
        d = n(388032),
        u = n(971704);
      t.Z = function (e) {
        let { quest: t } = e,
          n = (0, i.e7)([a.Z], () => a.Z.getState().theme),
          f = (0, r.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
        return (0, l.jsx)("div", {
          className: u.wrapper,
          children: (0, l.jsxs)("div", {
            className: u.content,
            children: [
              (0, l.jsx)("img", {
                src: (0, o.fh)(t, o.eC.GAME_TILE, f).url,
                alt: "",
                className: u.gameTile,
              }),
              (0, l.jsxs)("div", {
                className: u.copy,
                children: [
                  (0, l.jsx)(s.Heading, {
                    color: "always-white",
                    variant: "text-sm/medium",
                    children: d.intl.format(d.t["5nMfBQ"], {
                      gameTitle: t.config.messages.gameTitle,
                    }),
                  }),
                  (0, l.jsx)(s.Text, {
                    className: u.subheading,
                    color: "always-white",
                    variant: "text-xs/medium",
                    children: d.intl.string(d.t.mjbPtb),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    396995: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(481060),
        r = n(461195),
        s = n(688465),
        a = n(447564),
        o = n(207126),
        c = n(388032),
        d = n(371275);
      function u(e) {
        let { channel: t } = e;
        return (0, l.jsxs)("div", {
          className: d.bar,
          children: [
            (0, l.jsxs)("div", {
              className: d.top,
              children: [
                (0, l.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  children: c.intl.string(c.t["6XV1IC"]),
                }),
                (0, l.jsx)(s.Z, {}),
              ],
            }),
            (0, l.jsxs)(i.Clickable, {
              onClick: () =>
                (0, a.openHDPotionModal)(t, "HDStreamingPotionGoLiveModalBar"),
              className: d.button,
              children: [
                (0, l.jsxs)("div", {
                  className: d.buttonLeft,
                  children: [
                    (0, l.jsx)(r.Z, { size: r.n.SMALL }),
                    (0, l.jsx)(i.Text, {
                      className: d.text,
                      variant: "text-md/normal",
                      children: c.intl.string(c.t.Qwq08P),
                    }),
                  ],
                }),
                (0, l.jsx)(o.Z, { channel: t }),
              ],
            }),
          ],
        });
      }
    },
    774026: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(913527),
        r = n.n(i),
        s = n(793030),
        a = n(461195),
        o = n(739566),
        c = n(942951),
        d = n(63063),
        u = n(981631),
        f = n(388032),
        h = n(469054);
      function m(e) {
        var t;
        let { streamingUntil: n, user: i, channel: m } = e,
          x = (0, o.JZ)(i, m),
          g = (0, c.l)({
            user: i,
            channelId: m.id,
            guildId: m.guild_id,
            messageId: void 0,
          })(x),
          p = r()(n).diff(r()(), "hours");
        return p <= 0
          ? null
          : (0, l.jsxs)("div", {
              className: h.attribution,
              children: [
                (0, l.jsx)(a.Z, { className: h.img }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(s.X6, {
                      variant: "heading-sm/bold",
                      children: f.intl.string(f.t.K04rOD),
                    }),
                    (0, l.jsx)(s.xv, {
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children: f.intl.format(f.t.NZDuBg, {
                        actorName:
                          null !== (t = i.globalName) && void 0 !== t
                            ? t
                            : i.username,
                        actorHook: g,
                        num: p,
                        helpCenterLink: d.Z.getArticleURL(
                          u.BhN.HD_STREAMING_POTION,
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    903993: function (e, t, n) {
      e.exports = { grid: "grid_b500ad", tile: "tile_b500ad" };
    },
    836471: function (e, t, n) {
      e.exports = {
        changeButton: "changeButton_c67245",
        ellipsisText: "ellipsisText_c67245",
      };
    },
    884127: function (e, t, n) {
      e.exports = {
        channelInfoWrapper: "channelInfoWrapper_f68b0b",
        channelTitleWrapper: "channelTitleWrapper_f68b0b",
        channelSelectScrollerInner: "channelSelectScrollerInner_f68b0b",
      };
    },
    264954: function (e, t, n) {
      e.exports = {
        selectedIcon: "selectedIcon_da7eaa",
        ellipsisText: "ellipsisText_da7eaa",
        changeButton: "changeButton_da7eaa",
        warningIcon: "warningIcon_da7eaa",
        warning: "warning_da7eaa",
        checkboxRow: "checkboxRow_da7eaa",
        hardwareWarning: "hardwareWarning_da7eaa",
      };
    },
    263846: function (e, t, n) {
      e.exports = { divider: "divider_bcb954", separator: "separator_bcb954" };
    },
    410894: function (e, t, n) {
      n.r(
        (e.exports = {
          modalSize: "modalSize_e1cc86",
          modalCloseButton: "modalCloseButton_e1cc86",
          modalBody: "modalBody_e1cc86",
          formItemTitleVerySlim: "formItemTitleVerySlim_e1cc86",
          formItemTitleSlim: "formItemTitleSlim_e1cc86",
          modalContent: "modalContent_e1cc86",
          modalHeader: "modalHeader_e1cc86",
          marginBottom: "marginBottom_e1cc86",
          sourceSpinner: "sourceSpinner_e1cc86",
          formItemTitle: "formItemTitle_e1cc86",
          headerText: "headerText_e1cc86",
          headerDescription: "headerDescription_e1cc86",
          header: "header_e1cc86",
          flexGrow: "flexGrow_e1cc86",
          cancelButton: "cancelButton_e1cc86",
          art: "art_e1cc86",
        }),
      );
    },
    939525: function (e, t, n) {
      e.exports = {
        guildScroller: "guildScroller_f29418",
        guildRow: "guildRow_f29418",
        guildIcon: "guildIcon_f29418",
        guildName: "guildName_f29418",
        guildArrow: "guildArrow_f29418",
      };
    },
    817730: function (e, t, n) {
      e.exports = {
        nativePickerGuide: "nativePickerGuide_b2ca72",
        windowIcon_to: "windowIcon_to_b2ca72",
        windowIcon_ts: "windowIcon_ts_b2ca72",
        windowIcon: "windowIcon_b2ca72",
        clydeIcon_to: "clydeIcon_to_b2ca72",
        clydeIcon_ts: "clydeIcon_ts_b2ca72",
        clydeIcon: "clydeIcon_b2ca72",
        screenIcon_to: "screenIcon_to_b2ca72",
        screenIcon_ts: "screenIcon_ts_b2ca72",
        screenIcon: "screenIcon_b2ca72",
        screenIconHighlight_fill_g1_0: "screenIconHighlight_fill_g1_0_b2ca72",
        screenIconHighlight_fill_g1_1: "screenIconHighlight_fill_g1_1_b2ca72",
        screenIconHighlight: "screenIconHighlight_b2ca72",
        windowCard_ts: "windowCard_ts_b2ca72",
        windowCard: "windowCard_b2ca72",
        buttonOverWindow_ts: "buttonOverWindow_ts_b2ca72",
        buttonOverWindow: "buttonOverWindow_b2ca72",
        buttonOverWindowHighlight_fill_g1_0:
          "buttonOverWindowHighlight_fill_g1_0_b2ca72",
        buttonOverWindowHighlight_fill_g1_1:
          "buttonOverWindowHighlight_fill_g1_1_b2ca72",
        buttonOverWindowHighlight: "buttonOverWindowHighlight_b2ca72",
        cursor_to: "cursor_to_b2ca72",
        cursor_ts: "cursor_ts_b2ca72",
        cursor: "cursor_b2ca72",
      };
    },
    532036: function (e, t, n) {
      e.exports = {
        avatar: "avatar_c32699",
        userListOverflow: "userListOverflow_c32699",
        voiceUserList: "voiceUserList_c32699",
        channelIcon: "channelIcon_c32699",
        selected: "selected_c32699",
        channelInfo: "channelInfo_c32699",
        channelName: "channelName_c32699",
      };
    },
    383029: function (e, t, n) {
      e.exports = { card: "card_f30ffe" };
    },
    317732: function (e, t, n) {
      e.exports = {
        title: "title_b70be6 " + n("410894").modalContent,
        scrollerInner: "scrollerInner_b70be6",
        bottomSeparator: "bottomSeparator_b70be6",
        scrollWrapper: "scrollWrapper_b70be6",
      };
    },
    24548: function (e, t, n) {
      e.exports = {
        spinner: "spinner_d7ec26",
        tile: "tile_d7ec26",
        sourceThumbnail: "sourceThumbnail_d7ec26",
        sourceScroller: "sourceScroller_d7ec26",
        sourceContainer: "sourceContainer_d7ec26",
        selected: "selected_d7ec26",
        sourceName: "sourceName_d7ec26",
        segmentContainer: "segmentContainer_d7ec26",
        segmentControl: "segmentControl_d7ec26",
        segmentControlOption: "segmentControlOption_d7ec26",
        errorMessage: "errorMessage_d7ec26",
        nativePickerScroll: "nativePickerScroll_d7ec26",
        nativeCaptureDevicesText: "nativeCaptureDevicesText_d7ec26",
        captureDevicesToggleIndicator: "captureDevicesToggleIndicator_d7ec26",
        nativePickerCollapsed: "nativePickerCollapsed_d7ec26",
        nativePickerCaptureList: "nativePickerCaptureList_d7ec26",
        nativePickerRadioItem: "nativePickerRadioItem_d7ec26",
        nativePickerGuide: "nativePickerGuide_d7ec26",
        nativePickerLabel: "nativePickerLabel_d7ec26",
        nativePickerCaptureSection: "nativePickerCaptureSection_d7ec26",
        nativeSourceSingleTypeButton: "nativeSourceSingleTypeButton_d7ec26",
        nativeSourceSingleTypeButtonInner:
          "nativeSourceSingleTypeButtonInner_d7ec26",
        nativeSourceSingleTypeImage: "nativeSourceSingleTypeImage_d7ec26",
        nativePickerTypes: "nativePickerTypes_d7ec26",
        nativeSourceTypeButton: "nativeSourceTypeButton_d7ec26",
        nativeSourceTypeButtonInner: "nativeSourceTypeButtonInner_d7ec26",
        hideRadioCheckbox: "hideRadioCheckbox_d7ec26",
      };
    },
    13458: function (e, t, n) {
      e.exports = {
        selectorButton: "selectorButton_a78967",
        selectorButtonSelected: "selectorButtonSelected_a78967",
        selectorText: "selectorText_a78967",
        premiumUpsell: "premiumUpsell_a78967",
        perksDemo: "perksDemo_a78967",
        textContainer: "textContainer_a78967",
        selectorNitroText: "selectorNitroText_a78967",
        enhancedSelectorNitroText: "enhancedSelectorNitroText_a78967",
        settingsGroup: "settingsGroup_a78967",
        documentModeGroup: "documentModeGroup_a78967",
        qualitySettingsContainer: "qualitySettingsContainer_a78967",
        toolTipTextContainer: "toolTipTextContainer_a78967",
        upsellText: "upsellText_a78967",
        tooltip: "tooltip_a78967",
        premiumIcon: "premiumIcon_a78967 logoPrimary_a78967",
      };
    },
    742769: function (e, t, n) {
      e.exports = {
        upsellBanner: "upsellBanner_f59576",
        enhancedBanner: "enhancedBanner_f59576",
        gradientGlow: "gradientGlow_f59576",
        enhancedCTAs: "enhancedCTAs_f59576",
        enhancedCTA: "enhancedCTA_f59576",
        ctaGradientBackground: "ctaGradientBackground_f59576",
        premiumIcon: "premiumIcon_f59576",
        iconTextContainer: "iconTextContainer_f59576",
        upsellText: "upsellText_f59576",
        enhancedUpsellText: "enhancedUpsellText_f59576",
        extendedDemoContainer: "extendedDemoContainer_f59576",
        extendedDemoDurationText: "extendedDemoDurationText_f59576",
        extendedDemoButton: "extendedDemoButton_f59576",
        reverseTrialEducationBannerContainer:
          "reverseTrialEducationBannerContainer_f59576",
        reducedMotion: "reducedMotion_f59576",
        unlockAnimation: "unlockAnimation_f59576",
        reverseTrialEducationText: "reverseTrialEducationText_f59576",
      };
    },
    971704: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b3936e",
        content: "content_b3936e",
        gameTile: "gameTile_b3936e",
        copy: "copy_b3936e",
        subheading: "subheading_b3936e",
      };
    },
    371275: function (e, t, n) {
      e.exports = {
        bar: "bar_f80bcd",
        top: "top_f80bcd",
        button: "button_f80bcd",
        buttonLeft: "buttonLeft_f80bcd",
        text: "text_f80bcd",
      };
    },
    469054: function (e, t, n) {
      e.exports = { attribution: "attribution_e4fd9f", img: "img_e4fd9f" };
    },
    788900: function (e, t, n) {
      n.d(t, {
        xS: function () {
          return l;
        },
      });
      function l(e) {
        let t = (function (e) {
          let { PI: t, min: n, max: l, cos: i, round: r } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            a = e[3] | (e[4] << 8),
            o = (63 & s) / 63,
            c = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            u = s >> 23,
            f = a >> 15,
            h = l(3, f ? (u ? 5 : 7) : 7 & a),
            m = l(3, f ? 7 & a : u ? 5 : 7),
            x = u ? (15 & e[5]) / 15 : 1,
            g = (e[5] >> 4) / 15,
            p = u ? 6 : 5,
            v = 0,
            j = (t, n, l) => {
              let i = [];
              for (let r = 0; r < n; r++)
                for (let s = r ? 0 : 1; s * n < t * (n - r); s++)
                  i.push(
                    (((e[p + (v >> 1)] >> ((1 & v++) << 2)) & 15) / 7.5 - 1) *
                      l,
                  );
              return i;
            },
            C = j(h, m, ((s >> 18) & 31) / 31),
            S = j(3, 3, (((a >> 3) & 63) / 63) * 1.25),
            Z = j(3, 3, (((a >> 9) & 63) / 63) * 1.25),
            _ = u && j(5, 5, g),
            I = (function (e) {
              let t = e[3],
                n = 128 & e[2],
                l = 128 & e[4];
              return (l ? (n ? 5 : 7) : 7 & t) / (l ? 7 & t : n ? 5 : 7);
            })(e),
            T = r(I > 1 ? 32 : 32 * I),
            N = r(I > 1 ? 32 / I : 32),
            b = new Uint8Array(T * N * 4),
            w = [],
            E = [];
          for (let e = 0, r = 0; e < N; e++)
            for (let s = 0; s < T; s++, r += 4) {
              let a = o,
                f = c,
                g = d,
                p = x;
              for (let e = 0, n = l(h, u ? 5 : 3); e < n; e++)
                w[e] = i((t / T) * (s + 0.5) * e);
              for (let n = 0, r = l(m, u ? 5 : 3); n < r; n++)
                E[n] = i((t / N) * (e + 0.5) * n);
              for (let e = 0, t = 0; e < m; e++)
                for (
                  let n = e ? 0 : 1, l = 2 * E[e];
                  n * m < h * (m - e);
                  n++, t++
                )
                  a += C[t] * w[n] * l;
              for (let e = 0, t = 0; e < 3; e++)
                for (let n = e ? 0 : 1, l = 2 * E[e]; n < 3 - e; n++, t++) {
                  let e = w[n] * l;
                  (f += S[t] * e), (g += Z[t] * e);
                }
              if (u)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let n = e ? 0 : 1, l = 2 * E[e]; n < 5 - e; n++, t++)
                    p += _[t] * w[n] * l;
              let v = a - (2 / 3) * f,
                j = (3 * a - v + g) / 2,
                I = j - g;
              (b[r] = l(0, 255 * n(1, j))),
                (b[r + 1] = l(0, 255 * n(1, I))),
                (b[r + 2] = l(0, 255 * n(1, v))),
                (b[r + 3] = l(0, 255 * n(1, p)));
            }
          return { w: T, h: N, rgba: b };
        })(e);
        return (function (e, t, n) {
          let l = 4 * e + 1,
            i = 6 + t * (5 + l),
            r = [
              137,
              80,
              78,
              71,
              13,
              10,
              26,
              10,
              0,
              0,
              0,
              13,
              73,
              72,
              68,
              82,
              0,
              0,
              e >> 8,
              255 & e,
              0,
              0,
              t >> 8,
              255 & t,
              8,
              6,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              i >>> 24,
              (i >> 16) & 255,
              (i >> 8) & 255,
              255 & i,
              73,
              68,
              65,
              84,
              120,
              1,
            ],
            s = [
              0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
              1303535960, 1342533948, -306674912, -267414716, -690576408,
              -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
            ],
            a = 1,
            o = 0;
          for (let e = 0, i = 0, s = l - 1; e < t; e++, s += l - 1)
            for (
              r.push(
                e + 1 < t ? 0 : 1,
                255 & l,
                l >> 8,
                255 & ~l,
                (l >> 8) ^ 255,
                0,
              ),
                o = (o + a) % 65521;
              i < s;
              i++
            ) {
              let e = 255 & n[i];
              r.push(e), (o = (o + (a = (a + e) % 65521)) % 65521);
            }
          for (let [e, t] of (r.push(
            o >> 8,
            255 & o,
            a >> 8,
            255 & a,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            73,
            69,
            78,
            68,
            174,
            66,
            96,
            130,
          ),
          [
            [12, 29],
            [37, 41 + i],
          ])) {
            let n = -1;
            for (let l = e; l < t; l++)
              (n ^= r[l]),
                (n = ((n = (n >>> 4) ^ s[15 & n]) >>> 4) ^ s[15 & n]);
            (n = ~n),
              (r[t++] = n >>> 24),
              (r[t++] = (n >> 16) & 255),
              (r[t++] = (n >> 8) & 255),
              (r[t++] = 255 & n);
          }
          return "data:image/png;base64," + btoa(String.fromCharCode(...r));
        })(t.w, t.h, t.rgba);
      }
    },
  },
]);
//# sourceMappingURL=9362826cd064863ed765.js.map
