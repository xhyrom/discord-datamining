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
          for (var s = new Map(), i = 0; i < e.length - (n - 1); i++) {
            var r = e.substr(i, n);
            s.set(r, s.has(r) ? s.get(r) + 1 : 1);
          }
          for (var a = 0, o = 0; o < t.length - (n - 1); o++) {
            var c = t.substr(o, n),
              d = s.has(c) ? s.get(c) : 0;
            d > 0 && (s.set(c, d - 1), a++);
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
        s,
        i,
        r = n(735250),
        a = n(470079),
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
      ((l = s || (s = {})).WRAP = "wrap"), (l.STACK = "stack");
      class h extends (i = a.PureComponent) {
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
            (0, r.jsx)(
              d.Z.Child,
              { className: u.tile, basis: e, grow: 0, children: t },
              n,
            ),
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsx)(d.Z, {
            className: c()(e, u.grid),
            wrap: d.Z.Wrap.WRAP,
            children: this.renderChildren(),
          });
        }
      }
      f(h, "Layout", s),
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
          return i;
        },
      }),
        n(47120);
      var l = n(451467),
        s = n(37113);
      function i(e, t, n) {
        for (let i of s.no[e])
          if ((0, l.Z)(e, i.resolution, i.fps, t, n))
            return [i.resolution, i.fps];
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
        s = n.n(l),
        i = n(579806),
        r = n(131951),
        a = n(358085),
        o = n(70722),
        c = n(65154),
        d = n(689938);
      function u() {
        if (!r.Z.supports(c.AN.SOUNDSHARE))
          return d.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND;
        if (
          (0, a.isWindows)() &&
          !s().satisfies(
            null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release,
            o.I9,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
        if (
          (0, a.isMac)() &&
          !s().satisfies(
            null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release,
            o.Ec,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
        return null;
      }
    },
    586290: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(724458),
        n(47120);
      var l = n(735250),
        s = n(470079),
        i = n(512722),
        r = n.n(i),
        a = n(392711),
        o = n.n(a),
        c = n(856901),
        d = n(442837),
        u = n(481060),
        f = n(131951),
        h = n(537135),
        m = n(176940),
        x = n(689938),
        _ = n(836471),
        g = n(410894),
        p = n(113207);
      function C(e) {
        let {
          selectedSource: t,
          onChangeVideoDeviceSource: n,
          onChangeAudioDevice: i,
        } = e;
        r()(null != t, "Camera capture device cannot be null");
        let a = (0, m.Z)(),
          C = (0, d.e7)([f.Z], () => f.Z.getInputDevices()),
          [S, E] = s.useState(
            (function (e, t, n) {
              if (null != t && null != n) {
                let l = t.find((t) => t.id === e);
                if (null == l) return;
                let s = o().reduce(n, (e, t) =>
                  (0, c.stringSimilarity)(l.name, t.name) >
                  (0, c.stringSimilarity)(l.name, e.name)
                    ? t
                    : e,
                );
                if (null != s) return s.id;
              }
            })(t.id, a, C),
          );
        return (
          null != S && i(S),
          (0, l.jsx)(s.Fragment, {
            children: (0, l.jsxs)(u.FormItem, {
              title: "Capture Device",
              className: g.modalContent,
              children: [
                (0, l.jsx)(u.FormItem, {
                  className: p.marginTop8,
                  children: (0, l.jsxs)(h.Z, {
                    children: [
                      (0, l.jsx)("span", {
                        className: _.ellipsisText,
                        children: t.name,
                      }),
                      (0, l.jsx)(u.Button, {
                        className: _.changeButton,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.SMALL,
                        onClick: n,
                        children: x.Z.Messages.CHANGE,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(u.FormItem, {
                  className: p.marginTop8,
                  title: x.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                  children: (0, l.jsx)(u.SingleSelect, {
                    value: S,
                    className: p.__invalid_marginaTop8,
                    onChange: (e) => {
                      E(e), i(e);
                    },
                    options: o().map(C, (e) => {
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
          return _;
        },
      });
      var l = n(735250);
      n(470079);
      var s = n(442837),
        i = n(481060),
        r = n(984933),
        a = n(430824),
        o = n(496675),
        c = n(594174),
        d = n(938475),
        u = n(382182),
        f = n(499596),
        h = n(148381),
        m = n(689938),
        x = n(884127);
      function _(e) {
        let {
            selectedChannelId: t,
            guildId: n,
            onChangeSelectedChannelId: _,
          } = e,
          g = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
          p = (0, s.e7)([a.Z, r.ZP, o.Z], () =>
            (0, u.h_)(r.ZP.getChannels(n), a.Z, o.Z),
          ),
          C = (0, s.e7)([d.ZP], () => d.ZP.getVoiceStates(n)),
          S = p.map((e) => {
            var n;
            return {
              name: (0, l.jsx)(f.Z, {
                channel: e,
                users:
                  null === (n = C[e.id]) || void 0 === n
                    ? void 0
                    : n
                        .filter((e) => {
                          let { user: t } = e;
                          return t.id !== (null == g ? void 0 : g.id);
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
          title: m.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
          scrollerInnerClassName: x.channelSelectScrollerInner,
          children: (0, l.jsx)(i.RadioGroup, {
            options: S,
            value: t,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
              let { value: t } = e;
              return _(t);
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
      var l = n(735250),
        s = n(470079),
        i = n(120356),
        r = n.n(i),
        a = n(442837),
        o = n(481060),
        c = n(230711),
        d = n(812206),
        u = n(605436),
        f = n(600164),
        h = n(594190),
        m = n(925329),
        x = n(565138),
        _ = n(977059),
        g = n(695346),
        p = n(494620),
        C = n(592125),
        S = n(650774),
        E = n(430824),
        j = n(131951),
        v = n(944486),
        I = n(594174),
        Z = n(449224),
        T = n(626135),
        N = n(823379),
        M = n(63063),
        R = n(358085),
        A = n(653255),
        O = n(989941),
        L = n(618407),
        w = n(586290),
        b = n(233037),
        D = n(810013),
        P = n(537135),
        y = n(641115),
        G = n(143135),
        B = n(70722),
        k = n(981631),
        U = n(526761),
        H = n(689938),
        V = n(264954),
        F = n(410894);
      function W(e) {
        let {
            selectedSource: t,
            selectSource: n,
            sourceChanged: s,
            onChangeSource: i,
          } = e,
          r = (0, a.e7)([h.ZP, Z.Z], () =>
            (0, R.isWindows)() ? (0, O.Z)(h.ZP, Z.Z) : null,
          ),
          c = (0, a.e7)([d.Z], () =>
            (null == r ? void 0 : r.id) != null
              ? d.Z.getApplication(r.id)
              : null,
          ),
          u = (0, a.e7)([h.ZP], () => h.ZP.getRunningGames()),
          f = (0, a.Wu)(
            [d.Z],
            () =>
              u
                .map((e) => (null != e.id ? d.Z.getApplication(e.id) : null))
                .filter(N.lm),
            [u],
          ),
          x = null;
        if ((null != t ? (x = t.name) : null != r && (x = r.name), null == x))
          return null;
        let _ = (0, G.Z)(r, t, u),
          g = s
            ? f.find((e) => {
                let { id: t } = e;
                return t === (null == _ ? void 0 : _.id);
              })
            : c,
          p =
            null != t && t.id.startsWith("screen")
              ? o.ScreenIcon
              : o.BrowserIcon;
        return (0, l.jsx)(o.FormItem, {
          title: H.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
          className: F.modalContent,
          titleClassName: F.formItemTitleVerySlim,
          children: (0, l.jsxs)(P.Z, {
            children: [
              null != g
                ? (0, l.jsx)(m.Z, {
                    game: g,
                    size: m.Z.Sizes.XSMALL,
                    className: V.selectedIcon,
                  })
                : (0, l.jsx)(p, { className: V.selectedIcon }),
              (0, l.jsx)("span", { className: V.ellipsisText, children: x }),
              n
                ? (0, l.jsx)(o.Button, {
                    className: V.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: i,
                    children: H.Z.Messages.CHANGE,
                  })
                : null,
            ],
          }),
        });
      }
      function z(e) {
        let { onChange: t, guildId: n } = e,
          s = (0, a.e7)([E.Z], () => E.Z.getGuild(n));
        return null == s
          ? (t(), null)
          : (0, l.jsx)(o.FormItem, {
              title: H.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: F.modalContent,
              titleClassName: F.formItemTitle,
              children: (0, l.jsxs)(P.Z, {
                children: [
                  (0, l.jsx)(x.Z, {
                    guild: s,
                    size: x.Z.Sizes.SMALLER,
                    className: V.selectedIcon,
                  }),
                  (0, l.jsx)("span", {
                    className: V.ellipsisText,
                    children: s.toString(),
                  }),
                  (0, l.jsx)(o.Button, {
                    className: V.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: t,
                    children: H.Z.Messages.CHANGE,
                  }),
                ],
              }),
            });
      }
      function Y(e) {
        let { text: t } = e;
        return (0, l.jsxs)(f.Z, {
          align: f.Z.Align.CENTER,
          className: V.warning,
          children: [
            (0, l.jsx)(o.CircleWarningIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: V.warningIcon,
            }),
            (0, l.jsx)(o.Text, {
              color: "none",
              variant: "text-xs/normal",
              children: t,
            }),
          ],
        });
      }
      function K(e) {
        let { guildId: t } = e,
          n = (0, a.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getMemberCount(t)) && void 0 !== e ? e : 0;
          }),
          i = g.eo.useSetting(),
          c = s.useCallback((e, t) => {
            g.eo.updateSetting(t),
              T.default.track(k.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
          }, []);
        return n >= 2 && n <= B.tB
          ? (0, l.jsx)(o.FormItem, {
              className: r()(F.modalContent, V.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                value: !!i,
                type: o.Checkbox.Types.INVERTED,
                onChange: c,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    H.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL,
                }),
              }),
            })
          : null;
      }
      function Q(e) {
        let { enabled: t, onChange: n, screen: i } = e,
          a = s.useCallback(
            (e, t) => {
              n(t);
            },
            [n],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(F.modalContent, V.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: i
                ? H.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
                : H.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL,
            }),
          }),
        });
      }
      function X(e) {
        let { enabled: t, onChange: n } = e,
          i = s.useCallback(
            (e, t) => {
              n(t);
            },
            [n],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(F.modalContent, V.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: t,
            type: o.Checkbox.Types.INVERTED,
            onChange: i,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: H.Z.Messages.GO_LIVE_MODAL_DISABLE_STREAM_PREVIEWS,
            }),
          }),
        });
      }
      function q(e) {
        let {
            selectedSource: t,
            selectedFPS: n,
            selectedChannelId: i,
            selectedPreset: r,
            selectedResolution: o,
            sourceChanged: d,
            selectedGuildId: f,
            targetGuildPremiumTier: h,
            selectSource: m,
            selectGuild: x,
            sound: g,
            previewDisabled: S,
            onClose: E,
            onChangeSelectedFPS: Z,
            onChangeSelectedResolution: T,
            onChangeSelectedPreset: N,
            onChangeSelectedChannelId: R,
            onChangeSource: O,
            onChangeAudioDevice: P,
            onChangeGuild: G,
            onChangeSound: B,
            onChangePreviewDisabled: F,
          } = e,
          q = (0, a.e7)([v.Z, C.Z], () =>
            C.Z.getChannel(v.Z.getVoiceChannelId()),
          ),
          J = (0, a.e7)([A.Z], () => A.Z.GPUDriversOutdated),
          $ = (0, a.e7)([A.Z], () => A.Z.problematicGPUDriver),
          ee = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
          et = (0, L.Z)();
        null != t &&
          t.id.startsWith("screen") &&
          !j.Z.supportsScreenSoundshare() &&
          (et = H.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
        let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
          el = null != ee && ee.verified && !ee.bot,
          es = null != q && !(0, u.Yk)(q),
          ei = !(0, a.e7)([j.Z], () => j.Z.getHardwareEncoding()),
          { enabled: er } = (0, _.S)({ location: "GoLiveModal_Confirm" });
        return (0, l.jsxs)(s.Fragment, {
          children: [
            en
              ? (0, l.jsx)(w.Z, {
                  selectedSource: t,
                  onChangeVideoDeviceSource: O,
                  onChangeAudioDevice: P,
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(W, {
                      selectSource: m,
                      sourceChanged: d,
                      onChangeSource: O,
                      selectedSource: t,
                    }),
                    null != et ? (0, l.jsx)(Y, { text: et }) : null,
                    null != t && null == et
                      ? (0, l.jsx)(Q, {
                          enabled: g,
                          onChange: B,
                          screen: t.id.startsWith("screen"),
                        })
                      : null,
                  ],
                }),
            x && null != f ? (0, l.jsx)(z, { guildId: f, onChange: G }) : null,
            null != q
              ? (0, l.jsx)(D.Z, { channel: q })
              : (0, l.jsx)(b.Z, {
                  guildId: f,
                  selectedChannelId: i,
                  onChangeSelectedChannelId: R,
                }),
            null != f && el && es ? (0, l.jsx)(K, { guildId: f }) : null,
            J
              ? (0, l.jsx)(Y, {
                  text: H.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED,
                })
              : null,
            $
              ? (0, l.jsx)(Y, {
                  text: H.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                    helpCenterLink: M.Z.getArticleURL(
                      k.BhN.NVIDIA_DRIVER_ISSUES,
                    ),
                  }),
                })
              : null,
            ei &&
              (0, l.jsx)(p.Z, {
                look: p.z.WARNING,
                className: V.hardwareWarning,
                children:
                  H.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                    onClick: () => {
                      E(),
                        c.Z.open(k.oAB.VOICE, null, {
                          scrollPosition:
                            U.KQ.VoiceAndVideoScrollPositions
                              .HARDWARE_ACCELERATION,
                        });
                    },
                  }),
              }),
            (0, l.jsx)(y.Z, {
              selectedPreset: r,
              selectedFPS: n,
              selectedResolution: o,
              targetGuildPremiumTier: h,
              onClose: E,
              onFPSChange: Z,
              onResolutionChange: T,
              onPresetChange: N,
              captureDeviceSelected: en,
            }),
            er && (0, l.jsx)(X, { enabled: S, onChange: F }),
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
      var l = n(735250);
      n(470079);
      var s = n(442837),
        i = n(481060),
        r = n(314897),
        a = n(938475),
        o = n(499596),
        c = n(537135),
        d = n(689938),
        u = n(410894);
      function f(e) {
        let { channel: t } = e,
          n = (0, s.e7)([r.default], () => r.default.getId()),
          f = (0, s.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(t), [t]);
        return (0, l.jsx)(i.FormItem, {
          title: d.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
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
      var l = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        r = n(263846);
      function a(e) {
        let { separator: t = !1 } = e;
        return (0, l.jsx)("div", {
          className: i()(r.divider, { [r.separator]: t }),
        });
      }
    },
    60594: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return et;
          },
        }),
        n(47120),
        n(653041);
      var l,
        s,
        i = n(735250),
        r = n(470079),
        a = n(512722),
        o = n.n(a),
        c = n(526629),
        d = n(553813),
        u = n.n(d),
        f = n(442837),
        h = n(704215),
        m = n(481060),
        x = n(668781),
        _ = n(287734),
        g = n(872810),
        p = n(410575),
        C = n(579806),
        S = n(812206),
        E = n(600164),
        j = n(313201),
        v = n(243778),
        I = n(594190),
        Z = n(998594),
        T = n(751571),
        N = n(970731),
        M = n(695346),
        R = n(361291),
        A = n(592125),
        O = n(430824),
        L = n(944486),
        w = n(594174),
        b = n(449224),
        D = n(626135),
        P = n(63063),
        y = n(358085),
        G = n(998502),
        B = n(451467),
        k = n(537413),
        U = n(299570),
        H = n(960861),
        V = n(989941),
        F = n(399299),
        W = n(351152),
        z = n(567126),
        Y = n(143135),
        K = n(37113),
        Q = n(981631),
        X = n(921944),
        q = n(761274),
        J = n(689938),
        $ = n(410894);
      ((s = l || (l = {}))[(s.GUILD = 0)] = "GUILD"),
        (s[(s.NATIVE_PICKER_SOURCE = 1)] = "NATIVE_PICKER_SOURCE"),
        (s[(s.SOURCE = 2)] = "SOURCE"),
        (s[(s.CONFIRM = 3)] = "CONFIRM");
      let ee = (e) => {
        let { visibleContent: t, markAsDismissed: n } = e;
        return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
          ? (0, i.jsx)(N.ZP, {
              content:
                J.Z.Messages.GO_LIVE_MODAL_SYSTEM_PICKER_COACHMARK_CONTENT,
              buttonCTA: J.Z.Messages.GOT_IT,
              onClick: () => {},
              onSecondaryClick: () => {
                open(P.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: J.Z.Messages.LEARN_MORE,
              caretPosition: N.DF.LEFT_CENTER,
              markAsDismissed: n,
            })
          : null;
      };
      function et(e) {
        var t, l, s, a, d, N, P;
        let {
            selectGuild: et = !1,
            selectSource: en = !0,
            guildId: el,
            analyticsLocation: es,
            onClose: ei,
            transitionState: er,
          } = e,
          {
            preset: ea,
            resolution: eo,
            fps: ec,
            soundshareEnabled: ed,
          } = (0, f.cj)([R.Z], () => R.Z.getState()),
          eu = (0, f.e7)([L.Z, A.Z], () =>
            A.Z.getChannel(L.Z.getVoiceChannelId()),
          ),
          ef = (0, f.e7)([I.ZP, b.Z], () =>
            (0, y.isWindows)() ? (0, V.Z)(I.ZP, b.Z) : null,
          ),
          eh = (0, f.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return o()(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          em =
            null !== (t = null == eu ? void 0 : eu.getGuildId()) && void 0 !== t
              ? t
              : el,
          ex = (0, f.e7)([O.Z], () => {
            var e;
            return null != em
              ? null === (e = O.Z.getGuild(em)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [e_, eg] =
            null !== (l = (0, k.Z)(ea, eh, ex)) && void 0 !== l
              ? l
              : [K.LY.RESOLUTION_720, K.ws.FPS_30],
          ep = (0, f.e7)([H.ZP], () => H.ZP.supported()),
          { lastPickerAction: eC } = (0, f.e7)([H.ZP], () =>
            H.ZP.getPickerState(),
          ),
          eS = Z.Z.useExperiment(
            { location: "GoLiveModal" },
            { disable: !ep, autoTrackExposure: !0 },
          ).enableSystemPicker;
        (0, H.UB)();
        let eE = [];
        er === m.ModalTransitionState.ENTERED &&
          eS &&
          (0, y.isMac)() &&
          u().satisfies(
            null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release,
            ">=24.0.0",
          ) &&
          eE.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
        let [ej, ev] = (0, v.US)(eE, void 0, !0);
        ea !== K.tI.PRESET_CUSTOM && ((eo = e_), (ec = eg)),
          !(0, B.Z)(ea, eo, ec, eh, ex) && ((eo = e_), (ec = eg));
        let eI = (0, j.Dt)();
        let [eZ, eT] = r.useState(((N = et), (P = en), N ? 0 : P ? 2 : 3)),
          [eN, eM] = r.useState(!1),
          [eR, eA] = r.useState(null),
          [eO, eL] = r.useState(null),
          [ew, eb] = r.useState(null),
          [eD, eP] = r.useState(ea),
          [ey, eG] = r.useState(eo),
          [eB, ek] = r.useState(ec),
          [eU, eH] = r.useState(ed),
          [eV, eF] = r.useState(
            null !== (s = M.I0.getSetting()) && void 0 !== s && s,
          ),
          [eW, ez] = r.useState(null != el ? el : null),
          eY =
            null !== (a = null == eu ? void 0 : eu.id) && void 0 !== a ? a : eR;
        r.useEffect(() => {
          let e = (0, y.isWindows)() ? (0, V.Z)(I.ZP, b.Z) : null,
            t =
              (null == e ? void 0 : e.id) != null
                ? S.Z.getApplication(e.id)
                : null;
          D.default.track(Q.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: es,
          });
        }, [es]);
        function eK() {
          !(function () {
            var e, t;
            o()(null != ef || null != eO, "got nothing to stream");
            let n =
              null !== (e = null == eu ? void 0 : eu.id) && void 0 !== e
                ? e
                : eR;
            o()(null != n, "Received null target channel ID");
            let l = A.Z.getChannel(n),
              s =
                null !== (t = null == l ? void 0 : l.getGuildId()) &&
                void 0 !== t
                  ? t
                  : el;
            null == eu && _.default.selectVoiceChannel(n);
            let i = eD,
              r = ey,
              a = eB;
            !(0, B.Z)(i, r, a, eh, ex) &&
              ((i = K.tI.PRESET_VIDEO),
              (r = K.LY.RESOLUTION_720),
              (a = K.ws.FPS_30)),
              (0, g.Rc)({
                preset: i,
                resolution: r,
                frameRate: a,
                soundshareEnabled: eU,
              });
            let c = (0, Y.Z)(ef, eO, I.ZP.getRunningGames()),
              d =
                !(0, y.isWindows)() ||
                null == c ||
                (null == eO ? void 0 : eO.id.startsWith("camera:")) ||
                null == c
                  ? null
                  : c.pid;
            (0, g.WH)(s, n, {
              pid: d,
              sourceId: null == d && null != eO ? eO.id : null,
              sourceName: null == d && null != eO ? eO.name : null,
              audioSourceId: ew,
              sound: eU,
              previewDisabled: eV,
            }),
              null != ej && ev(X.L.AUTO_DISMISS),
              !eS &&
                (async () => {
                  !(await T.Z.hasPermission(q.Eu.SCREEN_RECORDING, {
                    showAuthorizationError: !1,
                  })) &&
                    x.Z.show({
                      title:
                        J.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                      body: J.Z.Messages
                        .WARNING_SCREEN_RECORDING_PERMISSION_BODY,
                    });
                })();
          })(),
            ei();
        }
        let eQ = r.useCallback(
            (e, t, n) => {
              let l = (0, k.Z)(e, eh, ex),
                [s, i] = null != l ? l : [t, n];
              if (
                (e !== eD && ((t = s), (n = i)), !(0, B.Z)(e, t, n, eh, ex))
              ) {
                let [e, l] = (0, k.Z)(K.tI.PRESET_VIDEO, eh, ex);
                (t = e), (n = l);
              }
              n !== eB && ek(n),
                t !== ey && eG(t),
                s !== t || i !== n ? eP(K.tI.PRESET_CUSTOM) : e !== eD && eP(e);
            },
            [eh, ex, eB, ey, eD],
          ),
          [eX, eq] = r.useState(void 0),
          eJ = r.useCallback(
            (e) => {
              (0, U.t)(), (0, U.T)(null != e ? e : eX);
            },
            [eX],
          );
        function e$(e) {
          if ((e.preventDefault(), 1 === eZ)) return eJ();
          if (2 === eZ) return eT(3);
          if (null != eX) return eT(1);
          let t = (0, Y.Z)(ef, eO, I.ZP.getRunningGames());
          G.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) &&
          (null == t ? void 0 : t.elevated)
            ? !(function () {
                var e;
                let t =
                  null !== (e = null == ef ? void 0 : ef.pid) && void 0 !== e
                    ? e
                    : null;
                (0, m.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("74300")
                    .then(n.bind(n, 566852));
                  return (n) =>
                    (0, i.jsx)(e, { ...n, handleStream: eK, pid: t });
                });
              })()
            : eK();
        }
        let e1 = r.useCallback(
            (e) => {
              eL(e),
                null != e &&
                  (eS &&
                  (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                    ? eq(e.id.split(":")[1])
                    : eq(void 0),
                  eT(3),
                  eM(!0));
            },
            [eS],
          ),
          e0 = r.useCallback(
            (e) => {
              ez(e);
              var t = 3;
              eT((t = en ? 2 : 3));
            },
            [en],
          ),
          e2 = !(1 === eZ && eS && eC === H.Uc.Error),
          e5 = (function (e) {
            switch (e) {
              case 2:
                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
              case 1:
                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_NATIVE_SOURCE.format(
                  { buttonName: J.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA },
                );
              case 3:
                return null;
              default:
                return J.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
          })(eZ),
          e3 = (0, i.jsx)(m.ModalHeader, {
            className: $.modalHeader,
            separator: !1,
            children: (0, i.jsxs)(E.Z, {
              direction: E.Z.Direction.VERTICAL,
              align: E.Z.Align.CENTER,
              className: $.header,
              children: [
                (0, i.jsx)(m.Heading, {
                  variant: "heading-xl/semibold",
                  id: eI,
                  className: $.headerText,
                  children: J.Z.Messages.GO_LIVE_MODAL_TITLE,
                }),
                e2 && null != e5
                  ? (0, i.jsx)(m.Text, {
                      className: $.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: e5,
                    })
                  : null,
              ],
            }),
          }),
          e7 = r.useCallback(() => {
            eS && (0, U.t)(), eT(2);
          }, [eS]),
          e4 = (function (e, t, n, l) {
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
          })(eZ, et, en, eN),
          e9 =
            1 !== eZ && (3 !== eZ || (null == eO && null == ef) || null == eY),
          e8 = r.useCallback(() => {
            null != e4 && eT(e4);
          }, [e4]),
          e6 = (0, i.jsxs)(m.Slides, {
            springConfig: { ...c.config.stiff, clamp: !0 },
            activeSlide: eZ,
            width: 480,
            children: [
              (0, i.jsx)(m.Slide, {
                id: 0,
                children: (0, i.jsx)("div", {
                  className: $.modalSize,
                  children: (0, i.jsx)(W.Z, { onSelectGuild: e0 }),
                }),
              }),
              (0, i.jsx)(m.Slide, {
                id: 2,
                children: (0, i.jsx)("div", {
                  className: $.modalSize,
                  children: eS
                    ? (0, i.jsx)(z.se, { onSourceSelect: e1 })
                    : (0, i.jsx)(z.oA, {
                        selectedSource: eO,
                        onChangeSelectedSource: e1,
                      }),
                }),
              }),
              (0, i.jsx)(m.Slide, {
                id: 3,
                children: (0, i.jsx)("div", {
                  className: $.modalSize,
                  children: (0, i.jsx)(F.Z, {
                    selectedChannelId:
                      null !== (d = null == eu ? void 0 : eu.id) && void 0 !== d
                        ? d
                        : eR,
                    selectedPreset: eD,
                    selectedResolution: ey,
                    selectedSource: eO,
                    selectedFPS: eB,
                    sound: eU,
                    previewDisabled: eV,
                    sourceChanged: eN,
                    selectSource: en,
                    onChangeSelectedFPS: (e) => eQ(eD, ey, e),
                    onChangeSelectedResolution: (e) => eQ(eD, e, eB),
                    onChangeSelectedPreset: (e) => eQ(e, ey, eB),
                    onChangeSelectedChannelId: eA,
                    onChangeSelectedSource: e1,
                    onChangeSource: () => e7(),
                    onChangeAudioDevice: (e) => eb(e),
                    onChangeGuild: () => eT(0),
                    onChangeSound: (e) => eH(e),
                    onChangePreviewDisabled: (e) => eF(e),
                    onClose: ei,
                    selectedGuildId: eW,
                    targetGuildPremiumTier: ex,
                    selectGuild: et,
                  }),
                }),
              }),
              (0, i.jsx)(m.Slide, {
                id: 1,
                children: (0, i.jsx)("div", {
                  className: $.modalSize,
                  children: (0, i.jsx)(z.Hu, {
                    onSourceSelect: eK,
                    onCancel: e8,
                  }),
                }),
              }),
            ],
          }),
          te =
            1 === eZ
              ? J.Z.Messages.GO_LIVE_MODAL_NATIVE_SELECT_CTA
              : eS && (3 !== eZ || null != eX)
                ? J.Z.Messages.NEXT
                : J.Z.Messages.GO_LIVE_MODAL_CTA,
          tt = (0, i.jsxs)(m.ModalFooter, {
            justify: null == e4 ? E.Z.Justify.START : E.Z.Justify.BETWEEN,
            children: [
              (0, i.jsx)(m.Button, {
                type: "submit",
                size: m.Button.Sizes.SMALL,
                disabled: e9,
                autoFocus: !0,
                children: te,
              }),
              null == e4
                ? (0, i.jsx)(m.Button, {
                    className: $.cancelButton,
                    look: m.Button.Looks.LINK,
                    size: m.Button.Sizes.SMALL,
                    color: m.ButtonColors.PRIMARY,
                    onClick: ei,
                    children: J.Z.Messages.CANCEL,
                  })
                : (0, i.jsx)(m.Button, {
                    size: m.Button.Sizes.SMALL,
                    color: m.ButtonColors.PRIMARY,
                    onClick: e8,
                    children: J.Z.Messages.BACK,
                  }),
            ],
          });
        return (0, i.jsx)(p.Z, {
          page: Q.ZY5.GO_LIVE_MODAL,
          children: (0, i.jsxs)(m.ModalRoot, {
            "aria-labelledby": eI,
            transitionState: er,
            size: m.ModalSize.DYNAMIC,
            className: $.modalSize,
            children: [
              (0, i.jsx)(m.ModalCloseButton, {
                onClick: ei,
                className: $.modalCloseButton,
              }),
              (0, i.jsx)("div", { className: $.art }),
              (0, i.jsx)(m.Popout, {
                position: "right",
                align: "center",
                shouldShow: null != ej,
                spacing: 18,
                renderPopout: () =>
                  (0, i.jsx)(ee, { visibleContent: ej, markAsDismissed: ev }),
                children: () =>
                  (0, i.jsxs)("form", { onSubmit: e$, children: [e3, e6, tt] }),
              }),
            ],
          }),
        });
      }
    },
    351152: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(390547);
      var l = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        r = n(392711),
        a = n.n(r),
        o = n(442837),
        c = n(481060),
        d = n(565138),
        u = n(984933),
        f = n(430824),
        h = n(496675),
        m = n(771845),
        x = n(259580),
        _ = n(382182),
        g = n(148381),
        p = n(689938),
        C = n(410894),
        S = n(939525);
      function E(e) {
        let { guildId: t, onClick: n } = e,
          s = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
          i = (0, o.e7)([u.ZP, f.Z, h.Z], () =>
            u.ZP.getChannels(t)[u.Zb].some((e) => {
              let { channel: t } = e;
              return (0, _.JL)(t, f.Z, h.Z);
            }),
          );
        return null != s && i
          ? (0, l.jsxs)(c.Clickable, {
              onClick: () => n(t),
              className: S.guildRow,
              children: [
                (0, l.jsx)(d.Z, {
                  guild: s,
                  size: d.Z.Sizes.SMALL,
                  className: S.guildIcon,
                }),
                (0, l.jsx)(c.Text, {
                  variant: "text-md/normal",
                  className: S.guildName,
                  children: s.toString(),
                }),
                (0, l.jsx)(x.Z, {
                  direction: x.Z.Directions.RIGHT,
                  className: S.guildArrow,
                }),
              ],
            })
          : null;
      }
      function j(e) {
        let { onSelectGuild: t } = e,
          n = (0, o.e7)([m.ZP], () => m.ZP.getGuildFolders());
        return (0, l.jsx)(g.Z, {
          title: p.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
          scrollerClassName: i()(S.guildScroller, C.marginBottom),
          children: a().flatMap(n, (e) => {
            let { guildIds: n } = e;
            return n.map((e) => (0, l.jsx)(E, { guildId: e, onClick: t }, e));
          }),
        });
      }
    },
    152165: function (e, t, n) {
      var l = n(735250),
        s = n(470079),
        i = n(120356),
        r = n.n(i),
        a = n(442837),
        o = n(607070),
        c = n(817730);
      t.Z = s.memo(function (e) {
        let { className: t, animated: n = !1 } = e,
          i = s.useId();
        function d(e) {
          return "".concat(i, "-").concat(e);
        }
        function u(e) {
          return "url(#".concat(d(e), ")");
        }
        let f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
        return (0, l.jsx)("svg", {
          className: r()(c.nativePickerGuide, t),
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
      var l = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        r = n(481060),
        a = n(884338),
        o = n(933557),
        c = n(471445),
        d = n(5192),
        u = n(689938),
        f = n(532036);
      function h(e) {
        let { channel: t, users: n, selected: s = !1 } = e,
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
                s = e.getAvatarURL(t.guild_id, 24);
              return (0, l.jsx)(r.TooltipContainer, {
                text: n,
                children: (0, l.jsx)("img", {
                  src: null != s ? s : void 0,
                  "aria-label": e.username,
                  alt: "",
                  className: f.avatar,
                }),
              });
            },
            renderMoreUsers: (e) => {
              let s = (function (e, t) {
                let n = t.id,
                  l = t.guild_id;
                return e.length <= 1
                  ? null
                  : 2 === e.length
                    ? u.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                        nickname0: d.ZP.getName(l, n, e[0]),
                        nickname1: d.ZP.getName(l, n, e[1]),
                      })
                    : 3 === e.length
                      ? u.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                          nickname0: d.ZP.getName(l, n, e[0]),
                          nickname1: d.ZP.getName(l, n, e[1]),
                          nickname2: d.ZP.getName(l, n, e[2]),
                        })
                      : u.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format(
                          {
                            nickname0: d.ZP.getName(l, n, e[0]),
                            nickname1: d.ZP.getName(l, n, e[1]),
                            remainingCount: e.length - 2,
                          },
                        );
              })(n.slice(4), t);
              return (0, l.jsx)("div", {
                children: (0, l.jsx)(r.TooltipContainer, {
                  text: s,
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
          className: i()(f.channelInfo, { [f.selected]: s }),
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
          return i;
        },
      });
      var l = n(735250);
      n(470079);
      var s = n(383029);
      function i(e) {
        let { children: t } = e;
        return (0, l.jsx)("div", { className: s.card, children: t });
      }
    },
    148381: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var l = n(735250),
        s = n(470079),
        i = n(120356),
        r = n.n(i),
        a = n(481060),
        o = n(958707),
        c = n(410894),
        d = n(317732);
      function u(e) {
        let {
            title: t,
            scrollerClassName: n,
            scrollerInnerClassName: i,
            children: u,
          } = e,
          f = s.useRef(null),
          [h, m] = s.useState(!1),
          [x, _] = s.useState(!1),
          g = s.useCallback(() => {
            let { current: e } = f;
            null != e && (m(!e.isScrolledToTop()), _(!e.isScrolledToBottom()));
          }, []);
        return (
          s.useLayoutEffect(() => g(), []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: r()(d.title, d.scrollWrapper),
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
                  className: r()(d.scrollerInner, i, {
                    [d.bottomSeparator]: x,
                  }),
                  onScroll: g,
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
          return Y;
        },
        oA: function () {
          return V;
        },
        se: function () {
          return z;
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
      var l = n(735250),
        s = n(470079),
        i = n(120356),
        r = n.n(i),
        a = n(553813),
        o = n.n(a),
        c = n(788900),
        d = n(268146),
        u = n(442837),
        f = n(141038),
        h = n(846519),
        m = n(481060),
        x = n(224706),
        _ = n(579806),
        g = n(600164),
        p = n(152708),
        C = n(594190),
        S = n(569984),
        E = n(918701),
        j = n(977156),
        v = n(28798),
        I = n(131951),
        Z = n(449224),
        T = n(358085),
        N = n(463727),
        M = n(855403),
        R = n(299570),
        A = n(960861),
        O = n(989941),
        L = n(958707),
        w = n(152165),
        b = n(133179),
        D = n(70722),
        P = n(46140),
        y = n(65154),
        G = n(689938),
        B = n(24548);
      async function k() {
        let e = I.Z.getVideoDevices(),
          t = (0, f.Z)(I.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99,
          }),
          n = U(),
          l = await n,
          s = await t,
          i = s.filter((e) => e.id.startsWith(d.vA.SCREEN)),
          r = (function (e, t) {
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
            s.filter((e) => e.id.startsWith(d.vA.WINDOW)),
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
          windowSources: r,
          screenSources: i,
          cameraSources: Object.entries(e)
            .filter((e) => {
              let [t, n] = e;
              return !n.disabled;
            })
            .map((e, t) => {
              let [n, l] = e,
                s = a[t % a.length],
                i = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                r = (0, c.xS)(i);
              return { id: "camera:" + l.id, name: l.name, url: r };
            }),
        };
      }
      async function U() {
        let e = C.ZP.getRunningGames();
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
                s = t.icon;
              return null != n && null != l && null != s
                ? {
                    id: "window:".concat(n),
                    name: l,
                    url: "data:image/bmp;base64,".concat(s),
                  }
                : null;
            }),
          )
        ).filter((e) => null !== e);
      }
      function H(e) {
        let t = (0, T.isWindows)() ? (0, O.Z)(C.ZP, Z.Z) : null,
          n = C.ZP.getRunningGames();
        return null != t && (0, M.Z)(e.id, t.windowHandle)
          ? 2
          : null != n.find((t) => (0, M.Z)(e.id, t.windowHandle))
            ? 1
            : 0;
      }
      function V(e) {
        let { selectedSource: t, onChangeSelectedSource: n } = e,
          { enableGoLiveCaptureCard: i } = N.Z.useExperiment({
            location: "GoLive_Source_Select",
          }),
          a = I.Z.supports(y.AN.GO_LIVE_HARDWARE),
          [o, c] = s.useState(null),
          [f, x] = s.useState(null),
          [_, Z] = s.useState(null),
          T = null != _ && _.length > 0,
          [R, A] = s.useState(d.vA.WINDOW),
          [O, w] = s.useState(!1),
          D = s.useRef(null),
          U = s.useRef(new h.Xp()),
          V = (0, u.e7)([C.ZP], () => C.ZP.getRunningGames()),
          F = (function (e, t, n) {
            let l = (0, j.Zy)({ location: P.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
              if (null == n || !l) return null;
              for (let l of n) {
                var s, i;
                let n = t.find((e) => (0, M.Z)(l.id, e.windowHandle));
                if ((null == n ? void 0 : n.id) == null) continue;
                let r = (0, E.lQ)(e, n.id);
                if (
                  null != r &&
                  (null === (s = r.userStatus) || void 0 === s
                    ? void 0
                    : s.enrolledAt) != null &&
                  (null === (i = r.userStatus) || void 0 === i
                    ? void 0
                    : i.completedAt) == null
                )
                  return { source: l, quest: r };
              }
              return null;
            }, [l, e, t, n]);
          })(
            (0, u.e7)([S.Z], () => S.Z.quests),
            V,
            f,
          ),
          W = s.useMemo(
            () =>
              null == f
                ? null
                : [...f].sort((e, t) =>
                    (null == F ? void 0 : F.source.id) === e.id
                      ? -1
                      : (null == F ? void 0 : F.source.id) === t.id
                        ? 1
                        : H(t) - H(e),
                  ),
            [F, f],
          );
        s.useEffect(() => {
          let e = U.current;
          return (
            k().then((e) => {
              let { screenSources: t, windowSources: n, cameraSources: l } = e;
              c(t), x(n), Z(l);
            }),
            e.start(1e3, async () => {
              let {
                screenSources: e,
                windowSources: t,
                cameraSources: n,
              } = await k();
              c(e), x(t), Z(n);
            }),
            () => {
              e.stop();
            }
          );
        }, []);
        let z = s.useCallback((e) => {
            null !== e && ((D.current = e), w(!e.isScrolledToTop()));
          }, []),
          Y = (function (e) {
            switch (e) {
              case d.vA.WINDOW:
                return W;
              case d.vA.SCREEN:
                return o;
              case d.vA.CAMERA:
                return _;
            }
          })(R);
        if (null == Y)
          return (0, l.jsx)(g.Z, {
            className: B.spinner,
            justify: g.Z.Justify.CENTER,
            align: g.Z.Align.CENTER,
            children: (0, l.jsx)(m.Spinner, {}),
          });
        let K = Y.map((e) => {
          let { id: s } = e,
            i = (null == t ? void 0 : t.id) === s;
          return (0, l.jsx)(
            m.Clickable,
            {
              className: r()(B.tile, { [B.selected]: i }),
              onClick: () => n(e, null),
              children: (0, l.jsx)(b.Z, { source: e, selectedSource: t }, e.id),
            },
            s,
          );
        });
        function Q() {
          let e = D.current;
          null != e && w(!e.isScrolledToTop());
        }
        return (0, l.jsxs)(s.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: B.segmentContainer,
              children: [
                (0, l.jsx)(L.Z, { separator: O }),
                (0, l.jsx)(m.SegmentedControl, {
                  options: (function () {
                    let e = [
                      {
                        name: G.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                        value: d.vA.WINDOW,
                      },
                      {
                        name: G.Z.Messages.GO_LIVE_MODAL_SCREENS,
                        value: d.vA.SCREEN,
                      },
                    ];
                    return (
                      i &&
                        a &&
                        T &&
                        e.push({
                          name: G.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                          value: d.vA.CAMERA,
                        }),
                      e
                    );
                  })(),
                  value: R,
                  onChange: (e) => {
                    let { value: t } = e;
                    return A(t);
                  },
                  className: B.segmentControl,
                  optionClassName: B.segmentControlOption,
                }),
              ],
            }),
            R === d.vA.CAMERA
              ? (0, l.jsx)("div", {
                  className: B.sourceContainer,
                  children: (0, l.jsx)(m.AdvancedScroller, {
                    ref: z,
                    className: B.sourceScroller,
                    onScroll: Q,
                    children: (0, l.jsx)(p.Z, {
                      layout: p.Z.Layout.WRAP,
                      columns: 2,
                      className: B.sourceContainer,
                      children: K,
                    }),
                  }),
                })
              : (0, l.jsxs)(m.AdvancedScroller, {
                  ref: z,
                  className: B.sourceScroller,
                  onScroll: Q,
                  children: [
                    R === d.vA.WINDOW &&
                      null != F &&
                      (0, l.jsx)(v.Z, { quest: F.quest }),
                    (0, l.jsx)(p.Z, {
                      layout: p.Z.Layout.WRAP,
                      columns: 2,
                      className: B.sourceContainer,
                      children: K,
                    }),
                  ],
                }),
          ],
        });
      }
      function F(e) {
        let { onSelect: t } = e,
          n = s.useCallback(() => {
            t({
              id: "prepicked:",
              name: G.Z.Messages.GO_LIVE_MODAL_ANY,
              url: "",
            });
          }, [t]);
        return (0, l.jsx)(m.Clickable, {
          role: "radio",
          "aria-checked": !1,
          onClick: n,
          tabIndex: 0,
          className: r()(
            B.nativeSourceSingleTypeButton,
            B.nativePickerRadioItem,
          ),
          children: (0, l.jsxs)("div", {
            className: B.nativeSourceSingleTypeButtonInner,
            children: [
              (0, l.jsx)(w.Z, { className: B.nativeSourceSingleTypeImage }),
              (0, l.jsx)(m.Text, {
                variant: "text-md/medium",
                color: "none",
                children: G.Z.Messages.GO_LIVE_MODAL_ANY_CTA,
              }),
            ],
          }),
        });
      }
      function W(e) {
        let { id: t, name: n, text: i, icon: a, onSelect: o } = e,
          c = s.useCallback(() => {
            o({ id: "prepicked:" + t, name: n, url: "" });
          }, [t, n, o]);
        return (0, l.jsx)(m.Clickable, {
          role: "radio",
          "aria-checked": !1,
          onClick: c,
          tabIndex: 0,
          className: r()(B.nativeSourceTypeButton, B.nativePickerRadioItem),
          children: (0, l.jsxs)("div", {
            className: B.nativeSourceTypeButtonInner,
            children: [
              (0, l.jsx)(a, { size: "lg" }),
              (0, l.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: i,
              }),
            ],
          }),
        });
      }
      function z(e) {
        let { onSourceSelect: t } = e,
          [n, i] = s.useState([]),
          [a, c] = s.useState({}),
          d = s.useRef(new h.Xp());
        s.useEffect(() => {
          let e = d.current,
            t = () => {
              let e = Object.entries(I.Z.getVideoDevices()).filter((e) => {
                let [t, n] = e;
                return !n.disabled;
              });
              i(e),
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
        let u = s.useCallback(
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
            (0, T.isMac)() &&
            o().satisfies(
              null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release,
              D.jR,
            ),
          x = (0, T.isMac)(),
          [g, p] = s.useState(!1),
          C = s.useCallback(() => {
            p(!g);
          }, [g]),
          S = f
            ? (0, l.jsx)(F, { onSelect: t })
            : (0, l.jsxs)("div", {
                className: B.nativePickerTypes,
                children: [
                  (0, l.jsx)(W, {
                    onSelect: t,
                    id: "screen",
                    name: G.Z.Messages.GO_LIVE_MODAL_SCREEN,
                    text: G.Z.Messages.GO_LIVE_MODAL_SCREEN_CTA,
                    icon: m.ScreenIcon,
                  }),
                  (0, l.jsx)(W, {
                    onSelect: t,
                    id: "window",
                    name: G.Z.Messages.GO_LIVE_MODAL_WINDOW,
                    text: G.Z.Messages.GO_LIVE_MODAL_WINDOW_CTA,
                    icon: m.BrowserIcon,
                  }),
                  x
                    ? (0, l.jsx)(W, {
                        onSelect: t,
                        id: "app",
                        name: G.Z.Messages.GO_LIVE_MODAL_APP,
                        text: G.Z.Messages.GO_LIVE_MODAL_APP_CTA,
                        icon: m.ClydeIcon,
                      })
                    : null,
                ],
              });
        return (0, l.jsxs)("div", {
          className: B.nativePickerScroll,
          children: [
            (0, l.jsx)(m.Text, {
              className: B.nativePickerLabel,
              variant: "text-md/semibold",
              color: "interactive-normal",
              children: G.Z.Messages.GO_LIVE_MODAL_SCREENSHARE_HEADER,
            }),
            S,
            0 === n.length
              ? null
              : (0, l.jsxs)("div", {
                  className: r()(
                    B.nativePickerCaptureSection,
                    g ? null : B.nativePickerCollapsed,
                  ),
                  children: [
                    (0, l.jsxs)(m.Clickable, {
                      onClick: C,
                      className: r()(B.nativePickerLabel),
                      children: [
                        (0, l.jsx)(m.Text, {
                          className: B.nativeCaptureDevicesText,
                          variant: "text-md/semibold",
                          color: "interactive-normal",
                          children: G.Z.Messages.GO_LIVE_MODAL_CAPTURE_HEADER,
                        }),
                        (0, l.jsx)(m.ChevronSmallDownIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: B.captureDevicesToggleIndicator,
                        }),
                      ],
                    }),
                    (0, l.jsx)(m.RadioGroup, {
                      className: B.nativePickerCaptureList,
                      onChange: u,
                      radioItemClassName: B.nativePickerRadioItem,
                      options: n.map((e) => {
                        let [t, n] = e;
                        return {
                          name: n.name,
                          value: "camera:" + n.id,
                          icon: m.VideoIcon,
                          radioItemIconClassName: B.hideRadioCheckbox,
                        };
                      }),
                    }),
                  ],
                }),
          ],
        });
      }
      function Y(e) {
        let { onSourceSelect: t, onCancel: n } = e,
          { lastPickerAction: i, lastPickerError: r } = (0, u.e7)([A.ZP], () =>
            A.ZP.getPickerState(),
          ),
          [a, o] = s.useState(!1);
        return (
          s.useEffect(() => {
            (0, R.t)();
          }, []),
          (0, A.kE)(),
          s.useEffect(() => {
            a
              ? i === A.Uc.Update
                ? t()
                : i === A.Uc.Cancel && ((0, R.t)(), n())
              : null == i && o(!0);
          }, [a, i, t, n]),
          i === A.Uc.Error
            ? (0, l.jsx)(m.Text, {
                className: B.errorMessage,
                variant: "text-md/normal",
                color: "text-danger",
                children:
                  null != r && r.length > 0
                    ? r
                    : G.Z.Messages.ERROR_ANOTHER_TRY,
              })
            : (0, l.jsx)(w.Z, { animated: !0, className: B.nativePickerGuide })
        );
      }
    },
    133179: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var l = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        r = n(481060),
        a = n(600164),
        o = n(24548);
      function c(e) {
        let { source: t, selectedSource: n } = e,
          { id: s, name: c, url: d } = t,
          u = (null == n ? void 0 : n.id) === s;
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
                  className: i()(o.sourceThumbnail, { [o.selected]: u }),
                }),
              }),
              (0, l.jsx)(r.Text, {
                className: i()(o.sourceName, { [o.selected]: u }),
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
          return b;
        },
      }),
        n(47120);
      var l = n(735250),
        s = n(470079),
        i = n(120356),
        r = n.n(i),
        a = n(512722),
        o = n.n(a),
        c = n(848246),
        d = n(442837),
        u = n(481060),
        f = n(410575),
        h = n(2052),
        m = n(924557),
        x = n(600164),
        _ = n(436774),
        g = n(933843),
        p = n(1163),
        C = n(594174),
        S = n(78839),
        E = n(74538),
        j = n(451467),
        v = n(122186),
        I = n(37113),
        Z = n(981631),
        T = n(474936),
        N = n(689938),
        M = n(410894),
        R = n(13458),
        A = n(113207);
      function O(e) {
        let { analyticsLocation: t, onClose: s } = e;
        (0, u.openModalLazy)(async () => {
          let { default: e } = await n.e("28479").then(n.bind(n, 78865));
          return (n) =>
            (0, l.jsx)(e, { ...n, onCloseParent: s, analyticsSource: t });
        });
      }
      function L() {
        return (0, l.jsxs)("div", {
          className: R.toolTipTextContainer,
          children: [
            (0, l.jsx)(u.NitroWheelIcon, {
              size: "md",
              color: _.JX.PREMIUM_TIER_2,
              className: r()(R.premiumIcon),
            }),
            (0, l.jsx)(u.Text, {
              className: R.upsellText,
              variant: "text-sm/medium",
              children: N.Z.Messages.UNLOCK_WITH_NITRO,
            }),
          ],
        });
      }
      function w(e) {
        let t,
          n,
          {
            type: s,
            selected: i,
            needsPremium: a,
            needsDemo: o,
            analyticsLocation: c,
            onClick: d,
            onClose: f,
            setIsHovering: h,
          } = e,
          { value: m, label: x } = s;
        return (
          a
            ? ((t = (0, l.jsx)(u.TooltipContainer, {
                tooltipClassName: R.tooltip,
                spacing: 6,
                "aria-label": N.Z.Messages.UNLOCK_WITH_NITRO,
                text: (0, l.jsx)(L, {}),
                children: (0, l.jsx)("div", {
                  className: R.textContainer,
                  onMouseEnter: () => h(!0),
                  onMouseLeave: () => h(!1),
                  children: (0, l.jsx)(u.Text, {
                    variant: "text-xs/bold",
                    className: r()(
                      R.selectorNitroText,
                      R.enhancedSelectorNitroText,
                    ),
                    children: x,
                  }),
                }),
              })),
              (n = () => O({ analyticsLocation: c, onClose: f })))
            : ((t = (0, l.jsx)("div", {
                className: R.textContainer,
                children: (0, l.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  className: r()(R.selectorText, {
                    [R.enhancedSelectorNitroText]: o,
                  }),
                  children: x,
                }),
              })),
              (n = () => d(m))),
          {
            content: t,
            className: r()(R.selectorButton, {
              [R.selectorButtonSelected]: i,
              [R.perksDemo]: o,
              [R.premiumUpsell]: a,
            }),
            onClick: n,
          }
        );
      }
      function b(e) {
        let {
            onClose: t,
            selectedPreset: n,
            selectedResolution: i,
            selectedFPS: r,
            onResolutionChange: a,
            onFPSChange: _,
            onPresetChange: L,
            targetGuildPremiumTier: b,
            captureDeviceSelected: D,
          } = e,
          P = (0, d.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (
              o()(null != e, "StreamSettings: user cannot be undefined"), e
            );
          }),
          y = E.ZP.canStreamQuality(E.U2.MID, P),
          { location: G } = (0, h.O)(),
          B = (0, m.Zq)({ autoTrackExposure: !1 }),
          k = (0, E.I5)(P, T.p9.TIER_1);
        p.Z.useExperiment(
          { location: "Go Live Modal" },
          { autoTrackExposure: !0, disable: k },
        );
        let U = (0, d.e7)([S.ZP], () => S.ZP.inReverseTrial()),
          H = (0, g.So)(c.q.STREAM_HIGH_QUALITY),
          V = (!y && !B) || H,
          [F, W] = s.useState(!1),
          z = D ? I.z8 : I.WC,
          Y = { ...G, section: Z.jXE.STREAM_SETTINGS },
          K = (0, l.jsx)(u.ButtonGroup, {
            buttons: z.map((e) =>
              w({
                type: e,
                selected: e.value === i,
                needsPremium: !(0, j.Z)(n, e.value, r, P, b),
                needsDemo: (H || U) && e.value !== I.LY.RESOLUTION_720,
                analyticsLocation: Y,
                onClick: () => a(e.value),
                onClose: t,
                setIsHovering: W,
              }),
            ),
          }),
          Q = (0, l.jsx)(u.ButtonGroup, {
            buttons: I.k0.map((e) =>
              w({
                type: e,
                selected: e.value === r,
                needsPremium: !(0, j.Z)(n, i, e.value, P, b),
                needsDemo: H && e.value === I.ws.FPS_60,
                analyticsLocation: Y,
                onClick: () => _(e.value),
                onClose: t,
                setIsHovering: W,
              }),
            ),
          }),
          X = [
            {
              value: I.tI.PRESET_VIDEO,
              label: N.Z.Messages.STREAM_PRESET_VIDEO,
            },
            ...(D
              ? []
              : [
                  {
                    value: I.tI.PRESET_DOCUMENTS,
                    label: N.Z.Messages.STREAM_PRESET_DOCUMENTS,
                  },
                ]),
            {
              value: I.tI.PRESET_CUSTOM,
              label: N.Z.Messages.STREAM_PRESET_CUSTOM,
            },
          ],
          q =
            n === I.tI.PRESET_DOCUMENTS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(x.Z, {
                      children: (0, l.jsx)(u.FormItem, {
                        title: N.Z.Messages.STREAM_RESOLUTION,
                        titleClassName: M.formItemTitleSlim,
                        className: R.documentModeGroup,
                        children: (0, l.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          children:
                            N.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format(
                              { fps: r },
                            ),
                        }),
                      }),
                    }),
                    V
                      ? (0, l.jsx)(v.Z, {
                          message:
                            N.Z.Messages
                              .STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                          onClose: t,
                          openStreamUpsellModal: O,
                        })
                      : null,
                    U && (0, l.jsx)(v.c, {}),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(x.Z, {
                      children: [
                        (0, l.jsx)(u.FormItem, {
                          title: N.Z.Messages.STREAM_RESOLUTION,
                          className: R.settingsGroup,
                          titleClassName: M.formItemTitleSlim,
                          children: K,
                        }),
                        (0, l.jsx)(u.FormItem, {
                          title: N.Z.Messages.SCREENSHARE_FRAME_RATE,
                          className: R.settingsGroup,
                          titleClassName: M.formItemTitleSlim,
                          children: Q,
                        }),
                      ],
                    }),
                    V
                      ? (0, l.jsx)(v.Z, {
                          onClose: t,
                          openStreamUpsellModal: O,
                          glow: F,
                        })
                      : null,
                    U && (0, l.jsx)(v.c, {}),
                  ],
                });
        return (0, l.jsx)(f.Z, {
          ...Y,
          children: (0, l.jsx)(u.FormItem, {
            title: N.Z.Messages.STREAM_QUALITY,
            titleClassName: M.formItemTitle,
            className: M.modalContent,
            children: (0, l.jsxs)("div", {
              className: R.qualitySettingsContainer,
              children: [
                (0, l.jsx)(u.SingleSelect, {
                  value: n,
                  className: A.marginTop8,
                  options: X,
                  onChange: (e) => L(e),
                }),
                q,
              ],
            }),
          }),
        });
      }
    },
    122186: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
        c: function () {
          return E;
        },
      });
      var l = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        r = n(848246),
        a = n(442837),
        o = n(481060),
        c = n(607070),
        d = n(436774),
        u = n(933843),
        f = n(1163),
        h = n(846401),
        m = n(197115),
        x = n(981631),
        _ = n(474936),
        g = n(689938),
        p = n(742769);
      function C(e) {
        let { location: t, ...n } = e;
        return (0, l.jsx)(m.Z, {
          className: i()(p.enhancedCTA, p.ctaGradientBackground),
          iconClassName: p.premiumIcon,
          subscriptionTier: _.Si.TIER_2,
          buttonText: g.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
          size: o.Button.Sizes.TINY,
          premiumModalAnalyticsLocation: t,
          ...n,
        });
      }
      function S() {
        let e = (0, h.Z)();
        return (0, l.jsxs)("div", {
          className: p.extendedDemoContainer,
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: p.extendedDemoContainer,
                  children: [
                    (0, l.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      color: "status-warning",
                      className: p.extendedDemoDurationText,
                      children: e.toUpperCase(),
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      children:
                        g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase(),
                    }),
                  ],
                }),
                (0, l.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children:
                    g.Z.Messages
                      .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY,
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: p.extendedDemoButton,
              children: (0, l.jsx)(C, { size: o.Button.Sizes.SMALL }),
            }),
          ],
        });
      }
      function E() {
        let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, l.jsxs)("div", {
          className: i()(p.reverseTrialEducationBannerContainer, {
            [p.reducedMotion]: e,
          }),
          children: [
            (0, l.jsx)(o.LottieAnimation, {
              className: i()(p.unlockAnimation, { [p.reducedMotion]: e }),
              loop: !1,
              shouldAnimate: !e,
              pauseAtFrame: e ? 149 : void 0,
              importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
            }),
            (0, l.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: p.reverseTrialEducationText,
              children:
                g.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format(),
            }),
          ],
        });
      }
      function j(e) {
        let {
            message: t,
            onClose: n,
            openStreamUpsellModal: s,
            glow: a = !1,
          } = e,
          c = {
            section: x.jXE.STREAM_SETTINGS,
            object: x.qAy.PREMIUM_UPSELL_BANNER,
            objectType: x.Qqv.BUY,
          },
          h = (0, u.So)(r.q.STREAM_HIGH_QUALITY),
          m = f.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration;
        return (0, l.jsx)("div", {
          className: i()(p.upsellBanner, p.enhancedBanner, {
            [p.gradientGlow]: a,
          }),
          children:
            h && m
              ? (0, l.jsx)(S, {})
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: p.iconTextContainer,
                      children: [
                        (0, l.jsx)(o.NitroWheelIcon, {
                          size: "md",
                          color: d.JX.PREMIUM_TIER_2,
                        }),
                        (0, l.jsx)(o.Text, {
                          variant: "text-sm/medium",
                          className: i()(p.upsellText, p.enhancedUpsellText),
                          children:
                            null != t
                              ? t
                              : h
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      g.Z.Messages
                                        .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                      " ",
                                      g.Z.Messages.LEARN_MORE_CLICK.format({
                                        onClick: () =>
                                          s({
                                            analyticsLocation: c,
                                            onClose: n,
                                          }),
                                      }),
                                    ],
                                  })
                                : g.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format(
                                    {
                                      onClick: () =>
                                        s({ analyticsLocation: c, onClose: n }),
                                    },
                                  ),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: p.enhancedCTAs,
                      children: (0, l.jsx)(C, {}),
                    }),
                  ],
                }),
        });
      }
    },
    176940: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var l = n(131951);
      function s() {
        return Object.entries(l.Z.getVideoDevices()).map((e) => {
          let [t, n] = e;
          return { id: "camera:" + n.id, name: n.name, url: "" };
        });
      }
    },
    143135: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(855403);
      function s(e, t, n) {
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
      var l = n(470079),
        s = n(913527),
        i = n.n(s),
        r = n(848246),
        a = n(442837),
        o = n(846519),
        c = n(114064),
        d = n(689938);
      function u(e) {
        return e.toString().padStart(2, "0");
      }
      function f(e) {
        let t = i().duration(e.diff(i()()));
        return ""
          .concat(u(t.hours()), ":")
          .concat(u(t.minutes()), ":")
          .concat(u(t.seconds()));
      }
      function h() {
        let [e, t] = l.useState(
            f(i()(c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY))),
          ),
          n = (0, a.e7)([c.Z], () =>
            c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY),
          ),
          s = l.useMemo(() => i()(n), [n]),
          u = l.useRef(new o.Xp()),
          h = l.useCallback(() => {
            t(f(s));
          }, [s]);
        return (
          l.useEffect(() => {
            let e = i().duration(s.diff(i()()));
            1 > e.seconds()
              ? (t("00:00:00"), u.current.stop())
              : 1 > e.days()
                ? (h(), u.current.start(1e3, h))
                : (t(
                    d.Z.Messages.HUMANIZE_DURATION_DAYS.format({
                      time: Math.floor(e.asDays()),
                    }),
                  ),
                  u.current.stop());
          }, [s, h]),
          e
        );
      }
    },
    28798: function (e, t, n) {
      var l = n(735250);
      n(470079);
      var s = n(442837),
        i = n(780384),
        r = n(481060),
        a = n(210887),
        o = n(918701),
        c = n(231338),
        d = n(689938),
        u = n(971704);
      t.Z = function (e) {
        let { quest: t } = e,
          n = (0, s.e7)([a.Z], () => a.Z.getState().theme),
          f = (0, i.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
        return (0, l.jsx)("div", {
          className: u.wrapper,
          children: (0, l.jsxs)("div", {
            className: u.content,
            children: [
              (0, l.jsx)("img", {
                src: (0, o.uo)(t, f),
                alt: "",
                className: u.gameTile,
              }),
              (0, l.jsxs)("div", {
                className: u.copy,
                children: [
                  (0, l.jsx)(r.Heading, {
                    color: "always-white",
                    variant: "text-sm/medium",
                    children:
                      d.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format(
                        { gameTitle: t.config.messages.gameTitle },
                      ),
                  }),
                  (0, l.jsx)(r.Text, {
                    className: u.subheading,
                    color: "always-white",
                    variant: "text-xs/medium",
                    children:
                      d.Z.Messages
                        .QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    494620: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
        z: function () {
          return s;
        },
      });
      var l,
        s,
        i = n(735250);
      n(470079);
      var r = n(120356),
        a = n.n(r),
        o = n(481060),
        c = n(179840);
      ((l = s || (s = {})).INFO = "info"), (l.WARNING = "warning");
      let d = { info: c.info, warning: c.warning },
        u = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function f(e) {
        let { children: t, className: n, look: l = "info" } = e,
          s = u[l];
        return (0, i.jsxs)("div", {
          className: a()(c.root, n, d[l]),
          children: [
            (0, i.jsx)(s, { className: c.icon, color: "currentColor" }),
            (0, i.jsx)(o.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
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
    179840: function (e, t, n) {
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    788900: function (e, t, n) {
      n.d(t, {
        xS: function () {
          return l;
        },
      });
      function l(e) {
        let t = (function (e) {
          let { PI: t, min: n, max: l, cos: s, round: i } = Math,
            r = e[0] | (e[1] << 8) | (e[2] << 16),
            a = e[3] | (e[4] << 8),
            o = (63 & r) / 63,
            c = ((r >> 6) & 63) / 31.5 - 1,
            d = ((r >> 12) & 63) / 31.5 - 1,
            u = r >> 23,
            f = a >> 15,
            h = l(3, f ? (u ? 5 : 7) : 7 & a),
            m = l(3, f ? 7 & a : u ? 5 : 7),
            x = u ? (15 & e[5]) / 15 : 1,
            _ = (e[5] >> 4) / 15,
            g = u ? 6 : 5,
            p = 0,
            C = (t, n, l) => {
              let s = [];
              for (let i = 0; i < n; i++)
                for (let r = i ? 0 : 1; r * n < t * (n - i); r++)
                  s.push(
                    (((e[g + (p >> 1)] >> ((1 & p++) << 2)) & 15) / 7.5 - 1) *
                      l,
                  );
              return s;
            },
            S = C(h, m, ((r >> 18) & 31) / 31),
            E = C(3, 3, (((a >> 3) & 63) / 63) * 1.25),
            j = C(3, 3, (((a >> 9) & 63) / 63) * 1.25),
            v = u && C(5, 5, _),
            I = (function (e) {
              let t = e[3],
                n = 128 & e[2],
                l = 128 & e[4];
              return (l ? (n ? 5 : 7) : 7 & t) / (l ? 7 & t : n ? 5 : 7);
            })(e),
            Z = i(I > 1 ? 32 : 32 * I),
            T = i(I > 1 ? 32 / I : 32),
            N = new Uint8Array(Z * T * 4),
            M = [],
            R = [];
          for (let e = 0, i = 0; e < T; e++)
            for (let r = 0; r < Z; r++, i += 4) {
              let a = o,
                f = c,
                _ = d,
                g = x;
              for (let e = 0, n = l(h, u ? 5 : 3); e < n; e++)
                M[e] = s((t / Z) * (r + 0.5) * e);
              for (let n = 0, i = l(m, u ? 5 : 3); n < i; n++)
                R[n] = s((t / T) * (e + 0.5) * n);
              for (let e = 0, t = 0; e < m; e++)
                for (
                  let n = e ? 0 : 1, l = 2 * R[e];
                  n * m < h * (m - e);
                  n++, t++
                )
                  a += S[t] * M[n] * l;
              for (let e = 0, t = 0; e < 3; e++)
                for (let n = e ? 0 : 1, l = 2 * R[e]; n < 3 - e; n++, t++) {
                  let e = M[n] * l;
                  (f += E[t] * e), (_ += j[t] * e);
                }
              if (u)
                for (let e = 0, t = 0; e < 5; e++)
                  for (let n = e ? 0 : 1, l = 2 * R[e]; n < 5 - e; n++, t++)
                    g += v[t] * M[n] * l;
              let p = a - (2 / 3) * f,
                C = (3 * a - p + _) / 2,
                I = C - _;
              (N[i] = l(0, 255 * n(1, C))),
                (N[i + 1] = l(0, 255 * n(1, I))),
                (N[i + 2] = l(0, 255 * n(1, p))),
                (N[i + 3] = l(0, 255 * n(1, g)));
            }
          return { w: Z, h: T, rgba: N };
        })(e);
        return (function (e, t, n) {
          let l = 4 * e + 1,
            s = 6 + t * (5 + l),
            i = [
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
              s >>> 24,
              (s >> 16) & 255,
              (s >> 8) & 255,
              255 & s,
              73,
              68,
              65,
              84,
              120,
              1,
            ],
            r = [
              0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
              1303535960, 1342533948, -306674912, -267414716, -690576408,
              -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
            ],
            a = 1,
            o = 0;
          for (let e = 0, s = 0, r = l - 1; e < t; e++, r += l - 1)
            for (
              i.push(
                e + 1 < t ? 0 : 1,
                255 & l,
                l >> 8,
                255 & ~l,
                (l >> 8) ^ 255,
                0,
              ),
                o = (o + a) % 65521;
              s < r;
              s++
            ) {
              let e = 255 & n[s];
              i.push(e), (o = (o + (a = (a + e) % 65521)) % 65521);
            }
          for (let [e, t] of (i.push(
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
            [37, 41 + s],
          ])) {
            let n = -1;
            for (let l = e; l < t; l++)
              (n ^= i[l]),
                (n = ((n = (n >>> 4) ^ r[15 & n]) >>> 4) ^ r[15 & n]);
            (n = ~n),
              (i[t++] = n >>> 24),
              (i[t++] = (n >> 16) & 255),
              (i[t++] = (n >> 8) & 255),
              (i[t++] = 255 & n);
          }
          return "data:image/png;base64," + btoa(String.fromCharCode(...i));
        })(t.w, t.h, t.rgba);
      }
    },
  },
]);
//# sourceMappingURL=d4e8c1a4bfd04601263e.js.map
