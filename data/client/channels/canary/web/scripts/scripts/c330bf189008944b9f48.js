"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79477"],
  {
    863942: function (e, n, t) {
      var l = t(22092);
      (0, t(192291).exportTypedArrayStaticMethod)("from", t(12367), l);
    },
    856901: function (e, n) {
      var t;
      (n.stringSimilarity = void 0),
        (n.stringSimilarity = function (e, n, t, l) {
          if (
            (void 0 === t && (t = 2),
            void 0 === l && (l = !1),
            !l && ((e = e.toLowerCase()), (n = n.toLowerCase())),
            e.length < t || n.length < t)
          )
            return 0;
          for (var s = new Map(), a = 0; a < e.length - (t - 1); a++) {
            var r = e.substr(a, t);
            s.set(r, s.has(r) ? s.get(r) + 1 : 1);
          }
          for (var i = 0, o = 0; o < n.length - (t - 1); o++) {
            var u = n.substr(o, t),
              c = s.has(u) ? s.get(u) : 0;
            c > 0 && (s.set(u, c - 1), i++);
          }
          return (2 * i) / (e.length + n.length - (t - 1) * 2);
        }),
        n.stringSimilarity;
    },
    430401: function (e) {
      e.exports = "/assets/7ea7ef7cc3a376745fbd.svg";
    },
    345976: function (e) {
      e.exports = "/assets/60392030f78874e08161.svg";
    },
    152708: function (e, n, t) {
      var l,
        s,
        a,
        r = t(735250),
        i = t(470079),
        o = t(120356),
        u = t.n(o),
        c = t(600164),
        d = t(951381);
      function m(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((l = s || (s = {})).WRAP = "wrap"), (l.STACK = "stack");
      class E extends (a = i.PureComponent) {
        renderChildren() {
          let e;
          let { children: n, layout: t, columns: l } = this.props;
          switch (t) {
            case "stack":
              e = "100%";
              break;
            case "wrap":
              e = "".concat((1 / l) * 100, "%");
          }
          return n.map((n, t) =>
            (0, r.jsx)(
              c.Z.Child,
              { className: d.tile, basis: e, grow: 0, children: n },
              t,
            ),
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsx)(c.Z, {
            className: u()(e, d.grid),
            wrap: c.Z.Wrap.WRAP,
            children: this.renderChildren(),
          });
        }
      }
      m(E, "Layout", s),
        m(E, "defaultProps", { children: [], layout: "wrap", columns: 4 }),
        (n.Z = E);
    },
    463727: function (e, n, t) {
      let l = (0, t(818083).B)({
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
      n.Z = l;
    },
    537413: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(47120);
      var l = t(451467),
        s = t(37113);
      function a(e, n, t) {
        for (let a of s.no[e])
          if ((0, l.Z)(e, a.resolution, a.fps, n, t))
            return [a.resolution, a.fps];
        return null;
      }
    },
    618407: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var l = t(553813),
        s = t.n(l),
        a = t(375964),
        r = t(579806),
        i = t(131951),
        o = t(358085),
        u = t(70722),
        c = t(65154),
        d = t(689938);
      function m() {
        if (!i.Z.supports(c.AN.SOUNDSHARE))
          return a.GO_LIVE_SCREENSHARE_NO_SOUND;
        if (
          (0, o.isWindows)() &&
          !s().satisfies(
            null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release,
            u.I9,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
        if (
          (0, o.isMac)() &&
          !s().satisfies(
            null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release,
            u.Ec,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
        return null;
      }
    },
    586290: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      }),
        t(724458),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(512722),
        r = t.n(a),
        i = t(392711),
        o = t.n(i),
        u = t(856901),
        c = t(442837),
        d = t(481060),
        m = t(131951),
        E = t(537135),
        S = t(176940),
        _ = t(689938),
        g = t(51449),
        h = t(458623),
        x = t(224499);
      function Z(e) {
        let {
          selectedSource: n,
          onChangeVideoDeviceSource: t,
          onChangeAudioDevice: a,
        } = e;
        r()(null != n, "Camera capture device cannot be null");
        let i = (0, S.Z)(),
          Z = (0, c.e7)([m.Z], () => m.Z.getInputDevices()),
          [f, C] = s.useState(
            (function (e, n, t) {
              if (null != n && null != t) {
                let l = n.find((n) => n.id === e);
                if (null == l) return;
                let s = o().reduce(t, (e, n) =>
                  (0, u.stringSimilarity)(l.name, n.name) >
                  (0, u.stringSimilarity)(l.name, e.name)
                    ? n
                    : e,
                );
                if (null != s) return s.id;
              }
            })(n.id, i, Z),
          );
        return (
          null != f && a(f),
          (0, l.jsx)(s.Fragment, {
            children: (0, l.jsxs)(d.FormItem, {
              title: "Capture Device",
              className: h.modalContent,
              children: [
                (0, l.jsx)(d.FormItem, {
                  className: x.marginTop8,
                  children: (0, l.jsxs)(E.Z, {
                    children: [
                      (0, l.jsx)("span", {
                        className: g.ellipsisText,
                        children: n.name,
                      }),
                      (0, l.jsx)(d.Button, {
                        className: g.changeButton,
                        color: d.Button.Colors.PRIMARY,
                        size: d.Button.Sizes.SMALL,
                        onClick: t,
                        children: _.Z.Messages.CHANGE,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(d.FormItem, {
                  className: x.marginTop8,
                  title: _.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                  children: (0, l.jsx)(d.SingleSelect, {
                    value: f,
                    className: x.__invalid_marginaTop8,
                    onChange: (e) => {
                      C(e), a(e);
                    },
                    options: o().map(Z, (e) => {
                      let { id: n, name: t } = e;
                      return { value: n, label: t };
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    233037: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(442837),
        a = t(481060),
        r = t(984933),
        i = t(430824),
        o = t(496675),
        u = t(594174),
        c = t(938475),
        d = t(382182),
        m = t(499596),
        E = t(148381),
        S = t(689938),
        _ = t(787422);
      function g(e) {
        let {
            selectedChannelId: n,
            guildId: t,
            onChangeSelectedChannelId: g,
          } = e,
          h = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
          x = (0, s.e7)([i.Z, r.ZP, o.Z], () =>
            (0, d.h_)(r.ZP.getChannels(t), i.Z, o.Z),
          ),
          Z = (0, s.e7)([c.ZP], () => c.ZP.getVoiceStates(t)),
          f = x.map((e) => {
            var t;
            return {
              name: (0, l.jsx)(m.Z, {
                channel: e,
                users:
                  null === (t = Z[e.id]) || void 0 === t
                    ? void 0
                    : t
                        .filter((e) => {
                          let { user: n } = e;
                          return n.id !== (null == h ? void 0 : h.id);
                        })
                        .map((e) => {
                          let { user: n } = e;
                          return n;
                        }),
                selected: e.id === n,
              }),
              value: e.id,
            };
          });
        return (0, l.jsx)(E.Z, {
          title: S.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
          scrollerInnerClassName: _.channelSelectScrollerInner,
          children: (0, l.jsx)(a.RadioGroup, {
            options: f,
            value: n,
            itemInfoClassName: _.channelInfoWrapper,
            itemTitleClassName: _.channelTitleWrapper,
            onChange: (e) => {
              let { value: n } = e;
              return g(n);
            },
          }),
        });
      }
    },
    399299: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return J;
        },
      });
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        r = t.n(a),
        i = t(442837),
        o = t(481060),
        u = t(230711),
        c = t(812206),
        d = t(605436),
        m = t(600164),
        E = t(594190),
        S = t(925329),
        _ = t(565138),
        g = t(977059),
        h = t(695346),
        x = t(494620),
        Z = t(592125),
        f = t(650774),
        C = t(430824),
        N = t(131951),
        I = t(944486),
        R = t(594174),
        v = t(449224),
        T = t(626135),
        A = t(823379),
        p = t(63063),
        M = t(358085),
        j = t(653255),
        L = t(989941),
        O = t(618407),
        D = t(586290),
        P = t(233037),
        G = t(810013),
        U = t(537135),
        b = t(641115),
        w = t(143135),
        k = t(70722),
        V = t(981631),
        B = t(526761),
        W = t(689938),
        H = t(85586),
        y = t(458623);
      function F(e) {
        let {
            selectedSource: n,
            selectSource: t,
            sourceChanged: s,
            onChangeSource: a,
          } = e,
          r = (0, i.e7)([E.ZP, v.Z], () =>
            (0, M.isWindows)() ? (0, L.Z)(E.ZP, v.Z) : null,
          ),
          u = (0, i.e7)([c.Z], () =>
            (null == r ? void 0 : r.id) != null
              ? c.Z.getApplication(r.id)
              : null,
          ),
          d = (0, i.e7)([E.ZP], () => E.ZP.getRunningGames()),
          m = (0, i.Wu)(
            [c.Z],
            () =>
              d
                .map((e) => (null != e.id ? c.Z.getApplication(e.id) : null))
                .filter(A.lm),
            [d],
          ),
          _ = null;
        if ((null != n ? (_ = n.name) : null != r && (_ = r.name), null == _))
          return null;
        let g = (0, w.Z)(r, n, d),
          h = s
            ? m.find((e) => {
                let { id: n } = e;
                return n === (null == g ? void 0 : g.id);
              })
            : u,
          x =
            null != n && n.id.startsWith("screen")
              ? o.ScreenIcon
              : o.BrowserIcon;
        return (0, l.jsx)(o.FormItem, {
          title: W.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
          className: y.modalContent,
          titleClassName: y.formItemTitleVerySlim,
          children: (0, l.jsxs)(U.Z, {
            children: [
              null != h
                ? (0, l.jsx)(S.Z, {
                    game: h,
                    size: S.Z.Sizes.XSMALL,
                    className: H.selectedIcon,
                  })
                : (0, l.jsx)(x, { className: H.selectedIcon }),
              (0, l.jsx)("span", { className: H.ellipsisText, children: _ }),
              t
                ? (0, l.jsx)(o.Button, {
                    className: H.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: a,
                    children: W.Z.Messages.CHANGE,
                  })
                : null,
            ],
          }),
        });
      }
      function z(e) {
        let { onChange: n, guildId: t } = e,
          s = (0, i.e7)([C.Z], () => C.Z.getGuild(t));
        return null == s
          ? (n(), null)
          : (0, l.jsx)(o.FormItem, {
              title: W.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: y.modalContent,
              titleClassName: y.formItemTitle,
              children: (0, l.jsxs)(U.Z, {
                children: [
                  (0, l.jsx)(_.Z, {
                    guild: s,
                    size: _.Z.Sizes.SMALLER,
                    className: H.selectedIcon,
                  }),
                  (0, l.jsx)("span", {
                    className: H.ellipsisText,
                    children: s.toString(),
                  }),
                  (0, l.jsx)(o.Button, {
                    className: H.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: n,
                    children: W.Z.Messages.CHANGE,
                  }),
                ],
              }),
            });
      }
      function Y(e) {
        let { text: n } = e;
        return (0, l.jsxs)(m.Z, {
          align: m.Z.Align.CENTER,
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
              children: n,
            }),
          ],
        });
      }
      function K(e) {
        let { guildId: n } = e,
          t = (0, i.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
          }),
          a = h.eo.useSetting(),
          u = s.useCallback((e, n) => {
            h.eo.updateSetting(n),
              T.default.track(V.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
          }, []);
        return t >= 2 && t <= k.tB
          ? (0, l.jsx)(o.FormItem, {
              className: r()(y.modalContent, H.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                value: !!a,
                type: o.Checkbox.Types.INVERTED,
                onChange: u,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    W.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL,
                }),
              }),
            })
          : null;
      }
      function Q(e) {
        let { enabled: n, onChange: t, screen: a } = e,
          i = s.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(y.modalContent, H.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: i,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: a
                ? W.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
                : W.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL,
            }),
          }),
        });
      }
      function X(e) {
        let { enabled: n, onChange: t } = e,
          a = s.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(y.modalContent, H.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: W.Z.Messages.GO_LIVE_MODAL_DISABLE_STREAM_PREVIEWS,
            }),
          }),
        });
      }
      function J(e) {
        let {
            selectedSource: n,
            selectedFPS: t,
            selectedChannelId: a,
            selectedPreset: r,
            selectedResolution: o,
            sourceChanged: c,
            selectedGuildId: m,
            targetGuildPremiumTier: E,
            selectSource: S,
            selectGuild: _,
            sound: h,
            previewDisabled: f,
            onClose: C,
            onChangeSelectedFPS: v,
            onChangeSelectedResolution: T,
            onChangeSelectedPreset: A,
            onChangeSelectedChannelId: M,
            onChangeSource: L,
            onChangeAudioDevice: U,
            onChangeGuild: w,
            onChangeSound: k,
            onChangePreviewDisabled: y,
          } = e,
          J = (0, i.e7)([I.Z, Z.Z], () =>
            Z.Z.getChannel(I.Z.getVoiceChannelId()),
          ),
          q = (0, i.e7)([j.Z], () => j.Z.GPUDriversOutdated),
          $ = (0, i.e7)([j.Z], () => j.Z.problematicGPUDriver),
          ee = (0, i.e7)([R.default], () => R.default.getCurrentUser()),
          en = (0, O.Z)();
        null != n &&
          n.id.startsWith("screen") &&
          !N.Z.supportsScreenSoundshare() &&
          (en = W.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
        let et = !!(null == n ? void 0 : n.id.startsWith("camera")),
          el = null != ee && ee.verified && !ee.bot,
          es = null != J && !(0, d.Yk)(J),
          ea = !(0, i.e7)([N.Z], () => N.Z.getHardwareH264()),
          { enabled: er } = (0, g.S)({ location: "GoLiveModal_Confirm" });
        return (0, l.jsxs)(s.Fragment, {
          children: [
            et
              ? (0, l.jsx)(D.Z, {
                  selectedSource: n,
                  onChangeVideoDeviceSource: L,
                  onChangeAudioDevice: U,
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(F, {
                      selectSource: S,
                      sourceChanged: c,
                      onChangeSource: L,
                      selectedSource: n,
                    }),
                    null != en ? (0, l.jsx)(Y, { text: en }) : null,
                    null != n && null == en
                      ? (0, l.jsx)(Q, {
                          enabled: h,
                          onChange: k,
                          screen: n.id.startsWith("screen"),
                        })
                      : null,
                  ],
                }),
            _ && null != m ? (0, l.jsx)(z, { guildId: m, onChange: w }) : null,
            null != J
              ? (0, l.jsx)(G.Z, { channel: J })
              : (0, l.jsx)(P.Z, {
                  guildId: m,
                  selectedChannelId: a,
                  onChangeSelectedChannelId: M,
                }),
            null != m && el && es ? (0, l.jsx)(K, { guildId: m }) : null,
            q
              ? (0, l.jsx)(Y, {
                  text: W.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED,
                })
              : null,
            $
              ? (0, l.jsx)(Y, {
                  text: W.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                    helpCenterLink: p.Z.getArticleURL(
                      V.BhN.NVIDIA_DRIVER_ISSUES,
                    ),
                  }),
                })
              : null,
            ea &&
              (0, l.jsx)(x.Z, {
                look: x.z.WARNING,
                className: H.hardwareWarning,
                children:
                  W.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                    onClick: () => {
                      C(),
                        u.Z.open(V.oAB.VOICE, null, {
                          scrollPosition:
                            B.KQ.VoiceAndVideoScrollPositions
                              .HARDWARE_ACCELERATION,
                        });
                    },
                  }),
              }),
            (0, l.jsx)(b.Z, {
              selectedPreset: r,
              selectedFPS: t,
              selectedResolution: o,
              targetGuildPremiumTier: E,
              onClose: C,
              onFPSChange: v,
              onResolutionChange: T,
              onPresetChange: A,
              captureDeviceSelected: et,
            }),
            er && (0, l.jsx)(X, { enabled: f, onChange: y }),
          ],
        });
      }
    },
    810013: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(442837),
        a = t(481060),
        r = t(314897),
        i = t(938475),
        o = t(499596),
        u = t(537135),
        c = t(689938),
        d = t(458623);
      function m(e) {
        let { channel: n } = e,
          t = (0, s.e7)([r.default], () => r.default.getId()),
          m = (0, s.e7)([i.ZP], () => i.ZP.getVoiceStatesForChannel(n), [n]);
        return (0, l.jsx)(a.FormItem, {
          title: c.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
          className: d.modalContent,
          titleClassName: d.formItemTitle,
          children: (0, l.jsx)(u.Z, {
            children: (0, l.jsx)(o.Z, {
              channel: n,
              users: m
                .filter((e) => {
                  let { user: n } = e;
                  return n.id !== t;
                })
                .map((e) => {
                  let { user: n } = e;
                  return n;
                }),
            }),
          }),
        });
      }
    },
    958707: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(127788);
      function i(e) {
        let { separator: n = !1 } = e;
        return (0, l.jsx)("div", {
          className: a()(r.divider, { [r.separator]: n }),
        });
      }
    },
    60594: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return z;
          },
        }),
        t(47120);
      var l,
        s,
        a = t(735250),
        r = t(470079),
        i = t(512722),
        o = t.n(i),
        u = t(567526),
        c = t(442837),
        d = t(481060),
        m = t(668781),
        E = t(287734),
        S = t(872810),
        _ = t(410575),
        g = t(812206),
        h = t(600164),
        x = t(313201),
        Z = t(594190),
        f = t(998594),
        C = t(751571),
        N = t(695346),
        I = t(361291),
        R = t(592125),
        v = t(430824),
        T = t(131951),
        A = t(944486),
        p = t(594174),
        M = t(449224),
        j = t(626135),
        L = t(358085),
        O = t(998502),
        D = t(451467),
        P = t(537413),
        G = t(960861),
        U = t(989941),
        b = t(399299),
        w = t(351152),
        k = t(567126),
        V = t(143135),
        B = t(37113),
        W = t(981631),
        H = t(761274),
        y = t(689938),
        F = t(458623);
      ((s = l || (l = {}))[(s.GUILD = 0)] = "GUILD"),
        (s[(s.NATIVE_PICKER_SOURCE = 1)] = "NATIVE_PICKER_SOURCE"),
        (s[(s.SOURCE = 2)] = "SOURCE"),
        (s[(s.CONFIRM = 3)] = "CONFIRM");
      function z(e) {
        var n, l, s, i, z, Y, K;
        let {
            selectGuild: Q = !1,
            selectSource: X = !0,
            guildId: J,
            analyticsLocation: q,
            onClose: $,
            transitionState: ee,
          } = e,
          {
            preset: en,
            resolution: et,
            fps: el,
            soundshareEnabled: es,
          } = (0, c.cj)([I.Z], () => I.Z.getState()),
          ea = (0, c.e7)([A.Z, R.Z], () =>
            R.Z.getChannel(A.Z.getVoiceChannelId()),
          ),
          er = (0, c.e7)([Z.ZP, M.Z], () =>
            (0, L.isWindows)() ? (0, U.Z)(Z.ZP, M.Z) : null,
          ),
          ei = (0, c.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return o()(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          eo =
            null !== (n = null == ea ? void 0 : ea.getGuildId()) && void 0 !== n
              ? n
              : J,
          eu = (0, c.e7)([v.Z], () => {
            var e;
            return null != eo
              ? null === (e = v.Z.getGuild(eo)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [ec, ed] =
            null !== (l = (0, P.Z)(en, ei, eu)) && void 0 !== l
              ? l
              : [B.LY.RESOLUTION_720, B.ws.FPS_30],
          em = (0, c.e7)([G.ZP], () => G.ZP.supported()),
          { lastPickerAction: eE, lastPickerError: eS } = (0, c.e7)(
            [G.ZP],
            () => G.ZP.getPickerState(),
          ),
          e_ = f.Z.useExperiment(
            { location: "GoLiveModal" },
            { disable: !em, autoTrackExposure: !0 },
          ).enableSystemPicker;
        (0, G.UB)(),
          en !== B.tI.PRESET_CUSTOM && ((et = ec), (el = ed)),
          !(0, D.Z)(en, et, el, ei, eu) && ((et = ec), (el = ed));
        let eg = (0, x.Dt)();
        let [eh, ex] = r.useState(((Y = Q), (K = X), Y ? 0 : K ? 2 : 3)),
          [eZ, ef] = r.useState(!1),
          [eC, eN] = r.useState(null),
          [eI, eR] = r.useState(null),
          [ev, eT] = r.useState(null),
          [eA, ep] = r.useState(en),
          [eM, ej] = r.useState(et),
          [eL, eO] = r.useState(el),
          [eD, eP] = r.useState(es),
          [eG, eU] = r.useState(
            null !== (s = N.I0.getSetting()) && void 0 !== s && s,
          ),
          [eb, ew] = r.useState(null != J ? J : null),
          ek =
            null !== (i = null == ea ? void 0 : ea.id) && void 0 !== i ? i : eC;
        r.useEffect(() => {
          let e = (0, L.isWindows)() ? (0, U.Z)(Z.ZP, M.Z) : null,
            n =
              (null == e ? void 0 : e.id) != null
                ? g.Z.getApplication(e.id)
                : null;
          j.default.track(W.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: q,
          });
        }, [q]);
        function eV() {
          !(function () {
            var e, n;
            o()(null != er || null != eI, "got nothing to stream");
            let t =
              null !== (e = null == ea ? void 0 : ea.id) && void 0 !== e
                ? e
                : eC;
            o()(null != t, "Received null target channel ID");
            let l = R.Z.getChannel(t),
              s =
                null !== (n = null == l ? void 0 : l.getGuildId()) &&
                void 0 !== n
                  ? n
                  : J;
            null == ea && E.default.selectVoiceChannel(t);
            let a = eA,
              r = eM,
              i = eL;
            !(0, D.Z)(a, r, i, ei, eu) &&
              ((a = B.tI.PRESET_VIDEO),
              (r = B.LY.RESOLUTION_720),
              (i = B.ws.FPS_30)),
              (0, S.Rc)({
                preset: a,
                resolution: r,
                frameRate: i,
                soundshareEnabled: eD,
              });
            let u = (0, V.Z)(er, eI, Z.ZP.getRunningGames()),
              c =
                !(0, L.isWindows)() ||
                null == u ||
                (null == eI ? void 0 : eI.id.startsWith("camera:")) ||
                null == u
                  ? null
                  : u.pid;
            (0, S.WH)(s, t, {
              pid: c,
              sourceId: null == c && null != eI ? eI.id : null,
              sourceName: null == c && null != eI ? eI.name : null,
              audioSourceId: ev,
              sound: eD,
              previewDisabled: eG,
            }),
              !e_ &&
                (async () => {
                  !(await C.Z.hasPermission(H.Eu.SCREEN_RECORDING, {
                    showAuthorizationError: !1,
                  })) &&
                    m.Z.show({
                      title:
                        y.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                      body: y.Z.Messages
                        .WARNING_SCREEN_RECORDING_PERMISSION_BODY,
                    });
                })();
          })(),
            $();
        }
        let eB = r.useCallback(
          (e, n, t) => {
            let l = (0, P.Z)(e, ei, eu),
              [s, a] = null != l ? l : [n, t];
            if ((e !== eA && ((n = s), (t = a)), !(0, D.Z)(e, n, t, ei, eu))) {
              let [e, l] = (0, P.Z)(B.tI.PRESET_VIDEO, ei, eu);
              (n = e), (t = l);
            }
            t !== eL && eO(t),
              n !== eM && ej(n),
              s !== n || a !== t ? ep(B.tI.PRESET_CUSTOM) : e !== eA && ep(e);
          },
          [ei, eu, eL, eM, eA],
        );
        async function eW(e) {
          var n, l, s;
          if ((e.preventDefault(), 2 === eh || 1 === eh)) return ex(3);
          let r = (0, V.Z)(er, eI, Z.ZP.getRunningGames()),
            i =
              O.ZP.supportsFeature(W.eRX.ELEVATED_HOOK) &&
              (null == r ? void 0 : r.elevated);
          if (
            (0, L.isMac)() &&
            null != eI &&
            (null === (n = eI.id) || void 0 === n
              ? void 0
              : n.startsWith("screen"))
          ) {
            let e = await T.Z.getMediaEngine().getDesktopSources(),
              n = eI.id;
            if (e.length > 0 && !e.some((e) => e.includes(n))) {
              (l = n),
                (s = e),
                j.default.track(W.rMx.SCREENSHARE_FAILED, {
                  source_id: l,
                  screens: s.length,
                }),
                (0, d.openModal)((e) =>
                  (0, a.jsx)(d.ConfirmModal, {
                    header: y.Z.Messages.SCREENSHARE_RELAUNCH,
                    confirmText: y.Z.Messages.OKAY,
                    cancelText: y.Z.Messages.CANCEL,
                    onConfirm: () => O.ZP.relaunch(),
                    ...e,
                    children: (0, a.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: y.Z.Messages.SCREENSHARE_RELAUNCH_BODY,
                    }),
                  }),
                );
              return;
            }
          }
          i
            ? !(function () {
                var e;
                let n =
                  null !== (e = null == er ? void 0 : er.pid) && void 0 !== e
                    ? e
                    : null;
                (0, d.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("74300")
                    .then(t.bind(t, 566852));
                  return (t) =>
                    (0, a.jsx)(e, { ...t, handleStream: eV, pid: n });
                });
              })()
            : eV();
        }
        let [eH, ey] = r.useState(void 0),
          eF = r.useCallback(
            (e) => {
              G.ZP.releasePickerStream(),
                G.ZP.presentPicker(null != e ? e : eH);
            },
            [eH],
          ),
          ez = r.useCallback(
            (e) => {
              if ((eR(e), null != e)) {
                if (
                  e_ &&
                  (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                ) {
                  let n = e.id.split(":")[1];
                  ey(n), eF(n), ex(1);
                } else ex(3);
                ef(!0);
              }
            },
            [e_, eF],
          ),
          eY = r.useCallback(
            (e) => {
              ew(e);
              var n = 3;
              ex((n = X ? 2 : 3));
            },
            [X],
          );
        1 === eh &&
          e_ &&
          (eE === G.Uc.Update ? ex(3) : eE === G.Uc.Cancel && ex(2));
        let eK = !(1 === eh && e_ && eE === G.Uc.Error),
          eQ = (function (e) {
            switch (e) {
              case 2:
              case 1:
                return y.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
              case 3:
                return null;
              default:
                return y.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
          })(eh),
          eX = (0, a.jsx)(d.ModalHeader, {
            className: F.modalHeader,
            separator: !1,
            children: (0, a.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              align: h.Z.Align.CENTER,
              className: F.header,
              children: [
                (0, a.jsx)(d.Heading, {
                  variant: "heading-xl/semibold",
                  id: eg,
                  className: F.headerText,
                  children: y.Z.Messages.GO_LIVE_MODAL_TITLE,
                }),
                eK && null != eQ
                  ? (0, a.jsx)(d.Text, {
                      className: F.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: eQ,
                    })
                  : null,
              ],
            }),
          }),
          eJ = r.useCallback(() => {
            e_ && G.ZP.releasePickerStream(), ex(2);
          }, [ex, e_]),
          eq = (0, a.jsxs)(d.Slides, {
            springConfig: { ...u.config.stiff, clamp: !0 },
            activeSlide: eh,
            width: 480,
            children: [
              (0, a.jsx)(d.Slide, {
                id: 0,
                children: (0, a.jsx)("div", {
                  className: F.modalSize,
                  children: (0, a.jsx)(w.Z, { onSelectGuild: eY }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 2,
                children: (0, a.jsx)("div", {
                  className: F.modalSize,
                  children: e_
                    ? (0, a.jsx)(k.H, { onSourceSelect: ez })
                    : (0, a.jsx)(k.o, {
                        selectedSource: eI,
                        onChangeSelectedSource: ez,
                      }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 1,
                children: (0, a.jsx)("div", {
                  className: F.modalSize,
                  children:
                    eE === G.Uc.Error
                      ? (0, a.jsx)(d.Text, {
                          className: F.errorMessage,
                          variant: "text-md/normal",
                          color: "text-danger",
                          children:
                            null != eS && eS.length > 0
                              ? eS
                              : y.Z.Messages.ERROR_ANOTHER_TRY,
                        })
                      : (0, a.jsx)("div", { className: F.nativePickerSpacing }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 3,
                children: (0, a.jsx)("div", {
                  className: F.modalSize,
                  children: (0, a.jsx)(b.Z, {
                    selectedChannelId:
                      null !== (z = null == ea ? void 0 : ea.id) && void 0 !== z
                        ? z
                        : eC,
                    selectedPreset: eA,
                    selectedResolution: eM,
                    selectedSource: eI,
                    selectedFPS: eL,
                    sound: eD,
                    previewDisabled: eG,
                    sourceChanged: eZ,
                    selectSource: X,
                    onChangeSelectedFPS: (e) => eB(eA, eM, e),
                    onChangeSelectedResolution: (e) => eB(eA, e, eL),
                    onChangeSelectedPreset: (e) => eB(e, eM, eL),
                    onChangeSelectedChannelId: eN,
                    onChangeSelectedSource: ez,
                    onChangeSource: () => eJ(),
                    onChangeAudioDevice: (e) => eT(e),
                    onChangeGuild: () => ex(0),
                    onChangeSound: (e) => eP(e),
                    onChangePreviewDisabled: (e) => eU(e),
                    onClose: $,
                    selectedGuildId: eb,
                    targetGuildPremiumTier: eu,
                    selectGuild: Q,
                  }),
                }),
              }),
            ],
          }),
          e$ = (function (e, n, t, l) {
            switch (e) {
              case 2:
                return n ? 0 : null;
              case 1:
                return 2;
              case 3:
                if (l) return 2;
                if (!t && n) return 0;
                return null;
              default:
                return null;
            }
          })(eh, Q, X, eZ),
          e0 = 3 !== eh || (null == eI && null == er) || null == ek,
          e1 = r.useCallback(() => {
            null != e$ && (G.ZP.releasePickerStream(), ex(e$));
          }, [ex, e$]),
          e5 = (0, a.jsxs)(d.ModalFooter, {
            justify: null == e$ ? h.Z.Justify.START : h.Z.Justify.BETWEEN,
            children: [
              (0, a.jsx)(d.Button, {
                type: "submit",
                size: d.Button.Sizes.SMALL,
                disabled: e0,
                autoFocus: !0,
                children: y.Z.Messages.GO_LIVE_MODAL_CTA,
              }),
              e_ && 1 === eh
                ? (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: () => eF(),
                    children: y.Z.Messages.RETRY,
                  })
                : null,
              null == e$
                ? (0, a.jsx)(d.Button, {
                    className: F.cancelButton,
                    look: d.Button.Looks.LINK,
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: $,
                    children: y.Z.Messages.CANCEL,
                  })
                : (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: e1,
                    children: y.Z.Messages.BACK,
                  }),
            ],
          });
        return (0, a.jsx)(_.Z, {
          page: W.ZY5.GO_LIVE_MODAL,
          children: (0, a.jsxs)(d.ModalRoot, {
            "aria-labelledby": eg,
            transitionState: ee,
            size: d.ModalSize.DYNAMIC,
            className: F.modalSize,
            children: [
              (0, a.jsx)(d.ModalCloseButton, {
                onClick: $,
                className: F.modalCloseButton,
              }),
              (0, a.jsx)("div", { className: F.art }),
              (0, a.jsxs)("form", { onSubmit: eW, children: [eX, eq, e5] }),
            ],
          }),
        });
      }
    },
    351152: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(390547);
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(392711),
        i = t.n(r),
        o = t(442837),
        u = t(481060),
        c = t(565138),
        d = t(984933),
        m = t(430824),
        E = t(496675),
        S = t(771845),
        _ = t(259580),
        g = t(382182),
        h = t(148381),
        x = t(689938),
        Z = t(458623),
        f = t(544347);
      function C(e) {
        let { guildId: n, onClick: t } = e,
          s = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
          a = (0, o.e7)([d.ZP, m.Z, E.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
              let { channel: n } = e;
              return (0, g.JL)(n, m.Z, E.Z);
            }),
          );
        return null != s && a
          ? (0, l.jsxs)(u.Clickable, {
              onClick: () => t(n),
              className: f.guildRow,
              children: [
                (0, l.jsx)(c.Z, {
                  guild: s,
                  size: c.Z.Sizes.SMALL,
                  className: f.guildIcon,
                }),
                (0, l.jsx)(u.Text, {
                  variant: "text-md/normal",
                  className: f.guildName,
                  children: s.toString(),
                }),
                (0, l.jsx)(_.Z, {
                  direction: _.Z.Directions.RIGHT,
                  className: f.guildArrow,
                }),
              ],
            })
          : null;
      }
      function N(e) {
        let { onSelectGuild: n } = e,
          t = (0, o.e7)([S.ZP], () => S.ZP.getGuildFolders());
        return (0, l.jsx)(h.Z, {
          title: x.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
          scrollerClassName: a()(f.guildScroller, Z.marginBottom),
          children: i().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) => (0, l.jsx)(C, { guildId: e, onClick: n }, e));
          }),
        });
      }
    },
    499596: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(481060),
        i = t(884338),
        o = t(933557),
        u = t(471445),
        c = t(5192),
        d = t(689938),
        m = t(640436);
      function E(e) {
        let { channel: n, users: t, selected: s = !1 } = e,
          E = (0, o.ZP)(n),
          S = null;
        null != t &&
          t.length > 0 &&
          (S = (0, l.jsx)(i.Z, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: t,
            renderUser: (e) => {
              if (null == e) return null;
              let t = c.ZP.getName(n.guild_id, n.id, e),
                s = e.getAvatarURL(n.guild_id, 24);
              return (0, l.jsx)(r.TooltipContainer, {
                text: t,
                children: (0, l.jsx)("img", {
                  src: null != s ? s : void 0,
                  "aria-label": e.username,
                  alt: "",
                  className: m.avatar,
                }),
              });
            },
            renderMoreUsers: (e) => {
              let s = (function (e, n) {
                let t = n.id,
                  l = n.guild_id;
                return e.length <= 1
                  ? null
                  : 2 === e.length
                    ? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                        nickname0: c.ZP.getName(l, t, e[0]),
                        nickname1: c.ZP.getName(l, t, e[1]),
                      })
                    : 3 === e.length
                      ? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                          nickname0: c.ZP.getName(l, t, e[0]),
                          nickname1: c.ZP.getName(l, t, e[1]),
                          nickname2: c.ZP.getName(l, t, e[2]),
                        })
                      : d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format(
                          {
                            nickname0: c.ZP.getName(l, t, e[0]),
                            nickname1: c.ZP.getName(l, t, e[1]),
                            remainingCount: e.length - 2,
                          },
                        );
              })(t.slice(4), n);
              return (0, l.jsx)("div", {
                children: (0, l.jsx)(r.TooltipContainer, {
                  text: s,
                  children: (0, l.jsx)("div", {
                    className: m.userListOverflow,
                    children: e,
                  }),
                }),
              });
            },
            max: 5,
            showUserPopout: !1,
          }));
        let _ = (0, u.KS)(n);
        return (0, l.jsxs)("div", {
          className: a()(m.channelInfo, { [m.selected]: s }),
          children: [
            (0, l.jsx)(_, { className: m.channelIcon }),
            (0, l.jsx)("div", { className: m.channelName, children: E }),
            S,
          ],
        });
      }
    },
    537135: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(907261);
      function a(e) {
        let { children: n } = e;
        return (0, l.jsx)("div", { className: s.card, children: n });
      }
    },
    148381: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        r = t.n(a),
        i = t(481060),
        o = t(958707),
        u = t(458623),
        c = t(523022);
      function d(e) {
        let {
            title: n,
            scrollerClassName: t,
            scrollerInnerClassName: a,
            children: d,
          } = e,
          m = s.useRef(null),
          [E, S] = s.useState(!1),
          [_, g] = s.useState(!1),
          h = s.useCallback(() => {
            let { current: e } = m;
            null != e && (S(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
          }, []);
        return (
          s.useLayoutEffect(() => h(), []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: r()(c.title, c.scrollWrapper),
                children: [
                  (0, l.jsx)(i.FormTitle, {
                    className: u.formItemTitle,
                    children: n,
                  }),
                  (0, l.jsx)(o.Z, { separator: E }),
                ],
              }),
              (0, l.jsx)("div", {
                className: t,
                children: (0, l.jsx)(i.AdvancedScroller, {
                  ref: m,
                  className: r()(c.scrollerInner, a, {
                    [c.bottomSeparator]: _,
                  }),
                  onScroll: h,
                  children: d,
                }),
              }),
            ],
          })
        );
      }
    },
    567126: function (e, n, t) {
      t.d(n, {
        H: function () {
          return b;
        },
        o: function () {
          return U;
        },
      }),
        t(47120),
        t(518263),
        t(970173),
        t(520712),
        t(268111),
        t(941497),
        t(32026),
        t(480839),
        t(744285),
        t(492257),
        t(873817),
        t(863942),
        t(642549),
        t(653041),
        t(724458);
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        r = t.n(a),
        i = t(788900),
        o = t(268146),
        u = t(442837),
        c = t(141038),
        d = t(846519),
        m = t(481060),
        E = t(224706),
        S = t(600164),
        _ = t(152708),
        g = t(594190),
        h = t(569984),
        x = t(918701),
        Z = t(977156),
        f = t(28798),
        C = t(131951),
        N = t(449224),
        I = t(358085),
        R = t(463727),
        v = t(855403),
        T = t(989941),
        A = t(958707),
        p = t(133179),
        M = t(46140),
        j = t(65154),
        L = t(689938),
        O = t(624743);
      async function D() {
        let e = C.Z.getVideoDevices(),
          n = (0, c.Z)(C.Z.getMediaEngine(), [o.vA.WINDOW, o.vA.SCREEN], {
            width: 176,
            height: 99,
          }),
          t = P(),
          l = await t,
          s = await n,
          a = s.filter((e) => e.id.startsWith(o.vA.SCREEN)),
          r = (function (e, n) {
            let t = {};
            return (
              n.forEach((e) => {
                t[e.id] = e;
              }),
              e.forEach((e) => {
                t[e.id] = e;
              }),
              Object.values(t)
            );
          })(
            s.filter((e) => e.id.startsWith(o.vA.WINDOW)),
            l,
          ),
          u = [
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
          screenSources: a,
          cameraSources: Object.entries(e)
            .filter((e) => {
              let [n, t] = e;
              return !t.disabled;
            })
            .map((e, n) => {
              let [t, l] = e,
                s = u[n % u.length],
                a = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                r = (0, i.xS)(a);
              return { id: "camera:" + l.id, name: l.name, url: r };
            }),
        };
      }
      async function P() {
        let e = g.ZP.getRunningGames();
        return (
          await Promise.all(
            e.map(async (e) => {
              let n;
              if (null == e.name) return null;
              try {
                n = await E.Z.identifyGame(e.pid, e.name);
              } catch (e) {
                return null;
              }
              let t = e.windowHandle,
                l = e.name,
                s = n.icon;
              return null != t && null != l && null != s
                ? {
                    id: "window:".concat(t),
                    name: l,
                    url: "data:image/bmp;base64,".concat(s),
                  }
                : null;
            }),
          )
        ).filter((e) => null !== e);
      }
      function G(e) {
        let n = (0, I.isWindows)() ? (0, T.Z)(g.ZP, N.Z) : null,
          t = g.ZP.getRunningGames();
        return null != n && (0, v.Z)(e.id, n.windowHandle)
          ? 2
          : null != t.find((n) => (0, v.Z)(e.id, n.windowHandle))
            ? 1
            : 0;
      }
      function U(e) {
        let { selectedSource: n, onChangeSelectedSource: t } = e,
          { enableGoLiveCaptureCard: a } = R.Z.useExperiment({
            location: "GoLive_Source_Select",
          }),
          i = C.Z.supports(j.AN.GO_LIVE_HARDWARE),
          [c, E] = s.useState(null),
          [N, I] = s.useState(null),
          [T, P] = s.useState(null),
          U = null != T && T.length > 0,
          [b, w] = s.useState(o.vA.WINDOW),
          [k, V] = s.useState(!1),
          B = s.useRef(null),
          W = s.useRef(new d.Xp()),
          H = (0, u.e7)([g.ZP], () => g.ZP.getRunningGames()),
          y = (function (e, n, t) {
            let l = (0, Z.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
              if (null == t || !l) return null;
              for (let l of t) {
                var s, a;
                let t = n.find((e) => (0, v.Z)(l.id, e.windowHandle));
                if ((null == t ? void 0 : t.id) == null) continue;
                let r = (0, x.lQ)(e, t.id);
                if (
                  null != r &&
                  (null === (s = r.userStatus) || void 0 === s
                    ? void 0
                    : s.enrolledAt) != null &&
                  (null === (a = r.userStatus) || void 0 === a
                    ? void 0
                    : a.completedAt) == null
                )
                  return { source: l, quest: r };
              }
              return null;
            }, [l, e, n, t]);
          })(
            (0, u.e7)([h.Z], () => h.Z.quests),
            H,
            N,
          ),
          F = s.useMemo(
            () =>
              null == N
                ? null
                : [...N].sort((e, n) =>
                    (null == y ? void 0 : y.source.id) === e.id
                      ? -1
                      : (null == y ? void 0 : y.source.id) === n.id
                        ? 1
                        : G(n) - G(e),
                  ),
            [y, N],
          );
        s.useEffect(() => {
          let e = W.current;
          return (
            D().then((e) => {
              let { screenSources: n, windowSources: t, cameraSources: l } = e;
              E(n), I(t), P(l);
            }),
            e.start(1e3, async () => {
              let {
                screenSources: e,
                windowSources: n,
                cameraSources: t,
              } = await D();
              E(e), I(n), P(t);
            }),
            () => {
              e.stop();
            }
          );
        }, []);
        let z = s.useCallback((e) => {
            null !== e && ((B.current = e), V(!e.isScrolledToTop()));
          }, []),
          Y = (function (e) {
            switch (e) {
              case o.vA.WINDOW:
                return F;
              case o.vA.SCREEN:
                return c;
              case o.vA.CAMERA:
                return T;
            }
          })(b);
        if (null == Y)
          return (0, l.jsx)(S.Z, {
            className: O.spinner,
            justify: S.Z.Justify.CENTER,
            align: S.Z.Align.CENTER,
            children: (0, l.jsx)(m.Spinner, {}),
          });
        let K = Y.map((e) => {
          let { id: s } = e,
            a = (null == n ? void 0 : n.id) === s;
          return (0, l.jsx)(
            m.Clickable,
            {
              className: r()(O.tile, { [O.selected]: a }),
              onClick: () => t(e, null),
              children: (0, l.jsx)(p.Z, { source: e, selectedSource: n }, e.id),
            },
            s,
          );
        });
        function Q() {
          let e = B.current;
          null != e && V(!e.isScrolledToTop());
        }
        return (0, l.jsxs)(s.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: O.segmentContainer,
              children: [
                (0, l.jsx)(A.Z, { separator: k }),
                (0, l.jsx)(m.SegmentedControl, {
                  options: (function () {
                    let e = [
                      {
                        name: L.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                        value: o.vA.WINDOW,
                      },
                      {
                        name: L.Z.Messages.GO_LIVE_MODAL_SCREENS,
                        value: o.vA.SCREEN,
                      },
                    ];
                    return (
                      a &&
                        i &&
                        U &&
                        e.push({
                          name: L.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                          value: o.vA.CAMERA,
                        }),
                      e
                    );
                  })(),
                  value: b,
                  onChange: (e) => {
                    let { value: n } = e;
                    return w(n);
                  },
                  className: O.segmentControl,
                  optionClassName: O.segmentControlOption,
                }),
              ],
            }),
            b === o.vA.CAMERA
              ? (0, l.jsx)("div", {
                  className: O.sourceContainer,
                  children: (0, l.jsx)(m.AdvancedScroller, {
                    ref: z,
                    className: O.sourceScroller,
                    onScroll: Q,
                    children: (0, l.jsx)(_.Z, {
                      layout: _.Z.Layout.WRAP,
                      columns: 2,
                      className: O.sourceContainer,
                      children: K,
                    }),
                  }),
                })
              : (0, l.jsxs)(m.AdvancedScroller, {
                  ref: z,
                  className: O.sourceScroller,
                  onScroll: Q,
                  children: [
                    b === o.vA.WINDOW &&
                      null != y &&
                      (0, l.jsx)(f.Z, { quest: y.quest }),
                    (0, l.jsx)(_.Z, {
                      layout: _.Z.Layout.WRAP,
                      columns: 2,
                      className: O.sourceContainer,
                      children: K,
                    }),
                  ],
                }),
          ],
        });
      }
      function b(e) {
        let { onSourceSelect: n } = e,
          t = s.useMemo(
            () => ({
              "prepicked:window": L.Z.Messages.GO_LIVE_MODAL_WINDOW,
              "prepicked:screen": L.Z.Messages.GO_LIVE_MODAL_SCREEN,
            }),
            [],
          ),
          [a, i] = s.useState([]),
          [o, u] = s.useState(t),
          c = s.useRef(new d.Xp());
        s.useEffect(() => {
          let e = c.current,
            n = () => {
              let e = Object.entries(C.Z.getVideoDevices()).filter((e) => {
                let [n, t] = e;
                return !t.disabled;
              });
              i(e),
                u({
                  ...t,
                  ...e.reduce((e, n) => {
                    let [t, l] = n;
                    return { ...e, ["camera:" + t]: l.name };
                  }, {}),
                });
            };
          return (
            n(),
            e.start(1e3, n),
            () => {
              e.stop();
            }
          );
        }, [t]);
        let E = s.useRef({}),
          S = s.useCallback(
            (e) => {
              var t;
              let { value: l } = e;
              n({
                id: l,
                name: null !== (t = o[l]) && void 0 !== t ? t : "",
                url: "",
              });
            },
            [n, o],
          );
        return (
          (E.current = {
            "prepicked:window": L.Z.Messages.GO_LIVE_MODAL_WINDOW,
            "prepicked:screen": L.Z.Messages.GO_LIVE_MODAL_SCREEN,
            ...a,
          }),
          (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(m.RadioGroup, {
                className: O.nativePickerContainer,
                onChange: S,
                options: [
                  {
                    name: L.Z.Messages.GO_LIVE_MODAL_WINDOW,
                    value: "prepicked:window",
                    icon: m.BrowserIcon,
                    radioItemIconClassName: r()(O.hideRadioCheckbox),
                  },
                  {
                    name: L.Z.Messages.GO_LIVE_MODAL_SCREEN,
                    value: "prepicked:screen",
                    icon: m.ScreenIcon,
                    radioItemIconClassName: r()(O.hideRadioCheckbox),
                  },
                ],
              }),
              0 === a.length
                ? null
                : (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(m.Text, {
                        className: O.nativePickerLabel,
                        variant: "text-sm/bold",
                        color: "interactive-normal",
                        children: L.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                      }),
                      (0, l.jsx)(m.RadioGroup, {
                        className: O.nativePickerContainer,
                        onChange: S,
                        options: a.map((e) => {
                          let [n, t] = e;
                          return {
                            name: t.name,
                            value: "camera:" + t.id,
                            icon: m.VideoIcon,
                          };
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      }
    },
    133179: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(481060),
        i = t(600164),
        o = t(624743);
      function u(e) {
        let { source: n, selectedSource: t } = e,
          { id: s, name: u, url: c } = n,
          d = (null == t ? void 0 : t.id) === s;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(i.Z, {
            direction: i.Z.Direction.VERTICAL,
            justify: i.Z.Justify.CENTER,
            align: i.Z.Align.CENTER,
            children: [
              (0, l.jsx)(i.Z, {
                justify: i.Z.Justify.CENTER,
                align: i.Z.Align.CENTER,
                children: (0, l.jsx)("div", {
                  style: { backgroundImage: "url(".concat(c, ")") },
                  className: a()(o.sourceThumbnail, { [o.selected]: d }),
                }),
              }),
              (0, l.jsx)(r.Text, {
                className: a()(o.sourceName, { [o.selected]: d }),
                variant: "text-sm/normal",
                children: u,
              }),
            ],
          }),
        });
      }
    },
    641115: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return P;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        r = t.n(a),
        i = t(512722),
        o = t.n(i),
        u = t(848246),
        c = t(442837),
        d = t(481060),
        m = t(410575),
        E = t(2052),
        S = t(924557),
        _ = t(600164),
        g = t(436774),
        h = t(933843),
        x = t(1163),
        Z = t(594174),
        f = t(78839),
        C = t(74538),
        N = t(451467),
        I = t(122186),
        R = t(37113),
        v = t(981631),
        T = t(474936),
        A = t(689938),
        p = t(458623),
        M = t(782765),
        j = t(224499);
      function L(e) {
        let { analyticsLocation: n, onClose: s } = e;
        (0, d.openModalLazy)(async () => {
          let { default: e } = await t.e("28479").then(t.bind(t, 78865));
          return (t) =>
            (0, l.jsx)(e, { ...t, onCloseParent: s, analyticsSource: n });
        });
      }
      function O() {
        return (0, l.jsxs)("div", {
          className: M.toolTipTextContainer,
          children: [
            (0, l.jsx)(d.NitroWheelIcon, {
              size: "md",
              color: g.JX.PREMIUM_TIER_2,
              className: r()(M.premiumIcon),
            }),
            (0, l.jsx)(d.Text, {
              className: M.upsellText,
              variant: "text-sm/medium",
              children: A.Z.Messages.UNLOCK_WITH_NITRO,
            }),
          ],
        });
      }
      function D(e) {
        let n,
          t,
          {
            type: s,
            selected: a,
            needsPremium: i,
            needsDemo: o,
            analyticsLocation: u,
            onClick: c,
            onClose: m,
            setIsHovering: E,
          } = e,
          { value: S, label: _ } = s;
        return (
          i
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                tooltipClassName: M.tooltip,
                spacing: 6,
                "aria-label": A.Z.Messages.UNLOCK_WITH_NITRO,
                text: (0, l.jsx)(O, {}),
                children: (0, l.jsx)("div", {
                  className: M.textContainer,
                  onMouseEnter: () => E(!0),
                  onMouseLeave: () => E(!1),
                  children: (0, l.jsx)(d.Text, {
                    variant: "text-xs/bold",
                    className: r()(
                      M.selectorNitroText,
                      M.enhancedSelectorNitroText,
                    ),
                    children: _,
                  }),
                }),
              })),
              (t = () => L({ analyticsLocation: u, onClose: m })))
            : ((n = (0, l.jsx)("div", {
                className: M.textContainer,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  className: r()(M.selectorText, {
                    [M.enhancedSelectorNitroText]: o,
                  }),
                  children: _,
                }),
              })),
              (t = () => c(S))),
          {
            content: n,
            className: r()(M.selectorButton, {
              [M.selectorButtonSelected]: a,
              [M.perksDemo]: o,
              [M.premiumUpsell]: i,
            }),
            onClick: t,
          }
        );
      }
      function P(e) {
        let {
            onClose: n,
            selectedPreset: t,
            selectedResolution: a,
            selectedFPS: r,
            onResolutionChange: i,
            onFPSChange: g,
            onPresetChange: O,
            targetGuildPremiumTier: P,
            captureDeviceSelected: G,
          } = e,
          U = (0, c.e7)([Z.default], () => {
            let e = Z.default.getCurrentUser();
            return (
              o()(null != e, "StreamSettings: user cannot be undefined"), e
            );
          }),
          b = C.ZP.canStreamQuality(C.U2.MID, U),
          { location: w } = (0, E.O)(),
          k = (0, S.Zq)({ autoTrackExposure: !1 }),
          V = (0, C.I5)(U, T.p9.TIER_1);
        x.Z.useExperiment(
          { location: "Go Live Modal" },
          { autoTrackExposure: !0, disable: V },
        );
        let B = (0, c.e7)([f.ZP], () => f.ZP.inReverseTrial()),
          W = (0, h.So)(u.q.STREAM_HIGH_QUALITY),
          H = (!b && !k) || W,
          [y, F] = s.useState(!1),
          z = G ? R.z8 : R.WC,
          Y = { ...w, section: v.jXE.STREAM_SETTINGS },
          K = (0, l.jsx)(d.ButtonGroup, {
            buttons: z.map((e) =>
              D({
                type: e,
                selected: e.value === a,
                needsPremium: !(0, N.Z)(t, e.value, r, U, P),
                needsDemo: (W || B) && e.value !== R.LY.RESOLUTION_720,
                analyticsLocation: Y,
                onClick: () => i(e.value),
                onClose: n,
                setIsHovering: F,
              }),
            ),
          }),
          Q = (0, l.jsx)(d.ButtonGroup, {
            buttons: R.k0.map((e) =>
              D({
                type: e,
                selected: e.value === r,
                needsPremium: !(0, N.Z)(t, a, e.value, U, P),
                needsDemo: W && e.value === R.ws.FPS_60,
                analyticsLocation: Y,
                onClick: () => g(e.value),
                onClose: n,
                setIsHovering: F,
              }),
            ),
          }),
          X = [
            {
              value: R.tI.PRESET_VIDEO,
              label: A.Z.Messages.STREAM_PRESET_VIDEO,
            },
            ...(G
              ? []
              : [
                  {
                    value: R.tI.PRESET_DOCUMENTS,
                    label: A.Z.Messages.STREAM_PRESET_DOCUMENTS,
                  },
                ]),
            {
              value: R.tI.PRESET_CUSTOM,
              label: A.Z.Messages.STREAM_PRESET_CUSTOM,
            },
          ],
          J =
            t === R.tI.PRESET_DOCUMENTS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(_.Z, {
                      children: (0, l.jsx)(d.FormItem, {
                        title: A.Z.Messages.STREAM_RESOLUTION,
                        titleClassName: p.formItemTitleSlim,
                        className: M.documentModeGroup,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          children:
                            A.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format(
                              { fps: r },
                            ),
                        }),
                      }),
                    }),
                    H
                      ? (0, l.jsx)(I.Z, {
                          message:
                            A.Z.Messages
                              .STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                          onClose: n,
                          openStreamUpsellModal: L,
                        })
                      : null,
                    B && (0, l.jsx)(I.c, {}),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(_.Z, {
                      children: [
                        (0, l.jsx)(d.FormItem, {
                          title: A.Z.Messages.STREAM_RESOLUTION,
                          className: M.settingsGroup,
                          titleClassName: p.formItemTitleSlim,
                          children: K,
                        }),
                        (0, l.jsx)(d.FormItem, {
                          title: A.Z.Messages.SCREENSHARE_FRAME_RATE,
                          className: M.settingsGroup,
                          titleClassName: p.formItemTitleSlim,
                          children: Q,
                        }),
                      ],
                    }),
                    H
                      ? (0, l.jsx)(I.Z, {
                          onClose: n,
                          openStreamUpsellModal: L,
                          glow: y,
                        })
                      : null,
                    B && (0, l.jsx)(I.c, {}),
                  ],
                });
        return (0, l.jsx)(m.Z, {
          ...Y,
          children: (0, l.jsx)(d.FormItem, {
            title: A.Z.Messages.STREAM_QUALITY,
            titleClassName: p.formItemTitle,
            className: p.modalContent,
            children: (0, l.jsxs)("div", {
              className: M.qualitySettingsContainer,
              children: [
                (0, l.jsx)(d.SingleSelect, {
                  value: t,
                  className: j.marginTop8,
                  options: X,
                  onChange: (e) => O(e),
                }),
                J,
              ],
            }),
          }),
        });
      }
    },
    122186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
        c: function () {
          return C;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(848246),
        i = t(442837),
        o = t(481060),
        u = t(607070),
        c = t(436774),
        d = t(933843),
        m = t(1163),
        E = t(846401),
        S = t(197115),
        _ = t(981631),
        g = t(474936),
        h = t(689938),
        x = t(304095);
      function Z(e) {
        let { location: n, ...t } = e;
        return (0, l.jsx)(S.Z, {
          className: a()(x.enhancedCTA, x.ctaGradientBackground),
          iconClassName: x.premiumIcon,
          subscriptionTier: g.Si.TIER_2,
          buttonText: h.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
          size: o.Button.Sizes.TINY,
          premiumModalAnalyticsLocation: n,
          ...t,
        });
      }
      function f() {
        let e = (0, E.Z)();
        return (0, l.jsxs)("div", {
          className: x.extendedDemoContainer,
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: x.extendedDemoContainer,
                  children: [
                    (0, l.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      color: "status-warning",
                      className: x.extendedDemoDurationText,
                      children: e.toUpperCase(),
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      children:
                        h.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase(),
                    }),
                  ],
                }),
                (0, l.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children:
                    h.Z.Messages
                      .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY,
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: x.extendedDemoButton,
              children: (0, l.jsx)(Z, { size: o.Button.Sizes.SMALL }),
            }),
          ],
        });
      }
      function C() {
        let e = (0, i.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, l.jsxs)("div", {
          className: a()(x.reverseTrialEducationBannerContainer, {
            [x.reducedMotion]: e,
          }),
          children: [
            (0, l.jsx)(o.LottieAnimation, {
              className: a()(x.unlockAnimation, { [x.reducedMotion]: e }),
              loop: !1,
              shouldAnimate: !e,
              pauseAtFrame: e ? 149 : void 0,
              importData: () => t.e("21812").then(t.t.bind(t, 741855, 19)),
            }),
            (0, l.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: x.reverseTrialEducationText,
              children:
                h.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format(),
            }),
          ],
        });
      }
      function N(e) {
        let {
            message: n,
            onClose: t,
            openStreamUpsellModal: s,
            glow: i = !1,
          } = e,
          u = {
            section: _.jXE.STREAM_SETTINGS,
            object: _.qAy.PREMIUM_UPSELL_BANNER,
            objectType: _.Qqv.BUY,
          },
          E = (0, d.So)(r.q.STREAM_HIGH_QUALITY),
          S = m.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration;
        return (0, l.jsx)("div", {
          className: a()(x.upsellBanner, x.enhancedBanner, {
            [x.gradientGlow]: i,
          }),
          children:
            E && S
              ? (0, l.jsx)(f, {})
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: x.iconTextContainer,
                      children: [
                        (0, l.jsx)(o.NitroWheelIcon, {
                          size: "md",
                          color: c.JX.PREMIUM_TIER_2,
                        }),
                        (0, l.jsx)(o.Text, {
                          variant: "text-sm/medium",
                          className: a()(x.upsellText, x.enhancedUpsellText),
                          children:
                            null != n
                              ? n
                              : E
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      h.Z.Messages
                                        .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                      " ",
                                      h.Z.Messages.LEARN_MORE_CLICK.format({
                                        onClick: () =>
                                          s({
                                            analyticsLocation: u,
                                            onClose: t,
                                          }),
                                      }),
                                    ],
                                  })
                                : h.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format(
                                    {
                                      onClick: () =>
                                        s({ analyticsLocation: u, onClose: t }),
                                    },
                                  ),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: x.enhancedCTAs,
                      children: (0, l.jsx)(Z, {}),
                    }),
                  ],
                }),
        });
      }
    },
    176940: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var l = t(131951);
      function s() {
        return Object.entries(l.Z.getVideoDevices()).map((e) => {
          let [n, t] = e;
          return { id: "camera:" + t.id, name: t.name, url: "" };
        });
      }
    },
    143135: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(855403);
      function s(e, n, t) {
        return null == n ? e : t.find((e) => (0, l.Z)(n.id, e.windowHandle));
      }
    },
    846401: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var l = t(470079),
        s = t(913527),
        a = t.n(s),
        r = t(848246),
        i = t(442837),
        o = t(846519),
        u = t(114064),
        c = t(689938);
      function d(e) {
        return e.toString().padStart(2, "0");
      }
      function m(e) {
        let n = a().duration(e.diff(a()()));
        return ""
          .concat(d(n.hours()), ":")
          .concat(d(n.minutes()), ":")
          .concat(d(n.seconds()));
      }
      function E() {
        let [e, n] = l.useState(
            m(a()(u.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY))),
          ),
          t = (0, i.e7)([u.Z], () =>
            u.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY),
          ),
          s = l.useMemo(() => a()(t), [t]),
          d = l.useRef(new o.Xp()),
          E = l.useCallback(() => {
            n(m(s));
          }, [s]);
        return (
          l.useEffect(() => {
            let e = a().duration(s.diff(a()()));
            1 > e.seconds()
              ? (n("00:00:00"), d.current.stop())
              : 1 > e.days()
                ? (E(), d.current.start(1e3, E))
                : (n(
                    c.Z.Messages.HUMANIZE_DURATION_DAYS.format({
                      time: Math.floor(e.asDays()),
                    }),
                  ),
                  d.current.stop());
          }, [s, E]),
          e
        );
      }
    },
    28798: function (e, n, t) {
      var l = t(735250);
      t(470079);
      var s = t(442837),
        a = t(780384),
        r = t(481060),
        i = t(210887),
        o = t(918701),
        u = t(231338),
        c = t(689938),
        d = t(814605);
      n.Z = function (e) {
        let { quest: n } = e,
          t = (0, s.e7)([i.Z], () => i.Z.getState().theme),
          m = (0, a.wj)(t) ? u.BR.DARK : u.BR.LIGHT;
        return (0, l.jsx)("div", {
          className: d.wrapper,
          children: (0, l.jsxs)("div", {
            className: d.content,
            children: [
              (0, l.jsx)("img", {
                src: (0, o.uo)(n, m),
                alt: "",
                className: d.gameTile,
              }),
              (0, l.jsxs)("div", {
                className: d.copy,
                children: [
                  (0, l.jsx)(r.Heading, {
                    color: "always-white",
                    variant: "text-sm/medium",
                    children:
                      c.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format(
                        { gameTitle: n.config.messages.gameTitle },
                      ),
                  }),
                  (0, l.jsx)(r.Text, {
                    className: d.subheading,
                    color: "always-white",
                    variant: "text-xs/medium",
                    children:
                      c.Z.Messages
                        .QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    494620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        z: function () {
          return s;
        },
      });
      var l,
        s,
        a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        o = t(481060),
        u = t(151876);
      ((l = s || (s = {})).INFO = "info"), (l.WARNING = "warning");
      let c = { info: u.info, warning: u.warning },
        d = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function m(e) {
        let { children: n, className: t, look: l = "info" } = e,
          s = d[l];
        return (0, a.jsxs)("div", {
          className: i()(u.root, t, c[l]),
          children: [
            (0, a.jsx)(s, { className: u.icon }),
            (0, a.jsx)(o.Text, {
              className: u.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: n,
            }),
          ],
        });
      }
    },
    788900: function (e, n, t) {
      t.d(n, {
        xS: function () {
          return l;
        },
      });
      function l(e) {
        let n = (function (e) {
          let { PI: n, min: t, max: l, cos: s, round: a } = Math,
            r = e[0] | (e[1] << 8) | (e[2] << 16),
            i = e[3] | (e[4] << 8),
            o = (63 & r) / 63,
            u = ((r >> 6) & 63) / 31.5 - 1,
            c = ((r >> 12) & 63) / 31.5 - 1,
            d = r >> 23,
            m = i >> 15,
            E = l(3, m ? (d ? 5 : 7) : 7 & i),
            S = l(3, m ? 7 & i : d ? 5 : 7),
            _ = d ? (15 & e[5]) / 15 : 1,
            g = (e[5] >> 4) / 15,
            h = d ? 6 : 5,
            x = 0,
            Z = (n, t, l) => {
              let s = [];
              for (let a = 0; a < t; a++)
                for (let r = a ? 0 : 1; r * t < n * (t - a); r++)
                  s.push(
                    (((e[h + (x >> 1)] >> ((1 & x++) << 2)) & 15) / 7.5 - 1) *
                      l,
                  );
              return s;
            },
            f = Z(E, S, ((r >> 18) & 31) / 31),
            C = Z(3, 3, (((i >> 3) & 63) / 63) * 1.25),
            N = Z(3, 3, (((i >> 9) & 63) / 63) * 1.25),
            I = d && Z(5, 5, g),
            R = (function (e) {
              let n = e[3],
                t = 128 & e[2],
                l = 128 & e[4];
              return (l ? (t ? 5 : 7) : 7 & n) / (l ? 7 & n : t ? 5 : 7);
            })(e),
            v = a(R > 1 ? 32 : 32 * R),
            T = a(R > 1 ? 32 / R : 32),
            A = new Uint8Array(v * T * 4),
            p = [],
            M = [];
          for (let e = 0, a = 0; e < T; e++)
            for (let r = 0; r < v; r++, a += 4) {
              let i = o,
                m = u,
                g = c,
                h = _;
              for (let e = 0, t = l(E, d ? 5 : 3); e < t; e++)
                p[e] = s((n / v) * (r + 0.5) * e);
              for (let t = 0, a = l(S, d ? 5 : 3); t < a; t++)
                M[t] = s((n / T) * (e + 0.5) * t);
              for (let e = 0, n = 0; e < S; e++)
                for (
                  let t = e ? 0 : 1, l = 2 * M[e];
                  t * S < E * (S - e);
                  t++, n++
                )
                  i += f[n] * p[t] * l;
              for (let e = 0, n = 0; e < 3; e++)
                for (let t = e ? 0 : 1, l = 2 * M[e]; t < 3 - e; t++, n++) {
                  let e = p[t] * l;
                  (m += C[n] * e), (g += N[n] * e);
                }
              if (d)
                for (let e = 0, n = 0; e < 5; e++)
                  for (let t = e ? 0 : 1, l = 2 * M[e]; t < 5 - e; t++, n++)
                    h += I[n] * p[t] * l;
              let x = i - (2 / 3) * m,
                Z = (3 * i - x + g) / 2,
                R = Z - g;
              (A[a] = l(0, 255 * t(1, Z))),
                (A[a + 1] = l(0, 255 * t(1, R))),
                (A[a + 2] = l(0, 255 * t(1, x))),
                (A[a + 3] = l(0, 255 * t(1, h)));
            }
          return { w: v, h: T, rgba: A };
        })(e);
        return (function (e, n, t) {
          let l = 4 * e + 1,
            s = 6 + n * (5 + l),
            a = [
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
              n >> 8,
              255 & n,
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
            i = 1,
            o = 0;
          for (let e = 0, s = 0, r = l - 1; e < n; e++, r += l - 1)
            for (
              a.push(
                e + 1 < n ? 0 : 1,
                255 & l,
                l >> 8,
                255 & ~l,
                (l >> 8) ^ 255,
                0,
              ),
                o = (o + i) % 65521;
              s < r;
              s++
            ) {
              let e = 255 & t[s];
              a.push(e), (o = (o + (i = (i + e) % 65521)) % 65521);
            }
          for (let [e, n] of (a.push(
            o >> 8,
            255 & o,
            i >> 8,
            255 & i,
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
            let t = -1;
            for (let l = e; l < n; l++)
              (t ^= a[l]),
                (t = ((t = (t >>> 4) ^ r[15 & t]) >>> 4) ^ r[15 & t]);
            (t = ~t),
              (a[n++] = t >>> 24),
              (a[n++] = (t >> 16) & 255),
              (a[n++] = (t >> 8) & 255),
              (a[n++] = 255 & t);
          }
          return "data:image/png;base64," + btoa(String.fromCharCode(...a));
        })(n.w, n.h, n.rgba);
      }
    },
  },
]);
//# sourceMappingURL=c330bf189008944b9f48.js.map
