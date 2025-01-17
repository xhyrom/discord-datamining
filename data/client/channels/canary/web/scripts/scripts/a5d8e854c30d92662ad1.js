"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79477"],
  {
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
          for (var i = new Map(), s = 0; s < e.length - (t - 1); s++) {
            var r = e.substr(s, t);
            i.set(r, i.has(r) ? i.get(r) + 1 : 1);
          }
          for (var a = 0, o = 0; o < n.length - (t - 1); o++) {
            var u = n.substr(o, t),
              c = i.has(u) ? i.get(u) : 0;
            c > 0 && (i.set(u, c - 1), a++);
          }
          return (2 * a) / (e.length + n.length - (t - 1) * 2);
        }),
        n.stringSimilarity;
    },
    430401: function (e) {
      e.exports = "/assets/7ea7ef7cc3a376745fbd.svg";
    },
    345976: function (e) {
      e.exports = "/assets/60392030f78874e08161.svg";
    },
    618407: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var l = t(209739),
        i = t.n(l),
        s = t(579806),
        r = t(131951),
        a = t(358085),
        o = t(70722),
        u = t(65154),
        c = t(388032);
      function d() {
        if (!r.Z.supports(u.AN.SOUNDSHARE)) return c.intl.string(c.t["1b0Gm5"]);
        if (
          (0, a.isWindows)() &&
          !i().satisfies(
            null === s.Z || void 0 === s.Z ? void 0 : s.Z.os.release,
            o.I9,
          )
        )
          return c.intl.string(c.t.voRPTE);
        if (
          (0, a.isMac)() &&
          !i().satisfies(
            null === s.Z || void 0 === s.Z ? void 0 : s.Z.os.release,
            o.Ec,
          )
        )
          return c.intl.string(c.t.v2y9PT);
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
      var l = t(200651),
        i = t(192379),
        s = t(512722),
        r = t.n(s),
        a = t(392711),
        o = t.n(a),
        u = t(856901),
        c = t(481060),
        d = t(687058),
        m = t(537135),
        g = t(176940),
        h = t(388032),
        x = t(378967),
        S = t(456963),
        v = t(232186);
      function Z(e) {
        let {
          selectedSource: n,
          onChangeVideoDeviceSource: t,
          onChangeAudioDevice: s,
        } = e;
        r()(null != n, "Camera capture device cannot be null");
        let a = (0, g.Z)(),
          Z = (0, d.Z)(),
          [C, f] = i.useState(
            (function (e, n, t) {
              if (null != n && null != t) {
                let l = n.find((n) => n.id === e);
                if (null == l) return;
                let i = o().reduce(t, (e, n) =>
                  (0, u.stringSimilarity)(l.name, n.name) >
                  (0, u.stringSimilarity)(l.name, e.name)
                    ? n
                    : e,
                );
                if (null != i) return i.id;
              }
            })(n.id, a, Z),
          );
        return (
          null != C && s(C),
          (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(c.FormItem, {
              title: "Capture Device",
              className: S.modalContent,
              children: [
                (0, l.jsx)(c.FormItem, {
                  className: v.marginTop8,
                  children: (0, l.jsxs)(m.Z, {
                    children: [
                      (0, l.jsx)("span", {
                        className: x.ellipsisText,
                        children: n.name,
                      }),
                      (0, l.jsx)(c.Button, {
                        className: x.changeButton,
                        color: c.Button.Colors.PRIMARY,
                        size: c.Button.Sizes.SMALL,
                        onClick: t,
                        children: h.intl.string(h.t.GEgsAw),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(c.FormItem, {
                  className: v.marginTop8,
                  title: h.intl.string(h.t.y4ooen),
                  children: (0, l.jsx)(c.SingleSelect, {
                    value: C,
                    className: v.__invalid_marginaTop8,
                    onChange: (e) => {
                      f(e), s(e);
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
          return S;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        s = t(481060),
        r = t(984933),
        a = t(430824),
        o = t(496675),
        u = t(594174),
        c = t(938475),
        d = t(102172),
        m = t(499596),
        g = t(148381),
        h = t(388032),
        x = t(838332);
      function S(e) {
        let {
            selectedChannelId: n,
            guildId: t,
            onChangeSelectedChannelId: S,
          } = e,
          v = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
          Z = (0, i.e7)([a.Z, r.ZP, o.Z], () =>
            (0, d.h_)(r.ZP.getChannels(t), a.Z, o.Z),
          ),
          C = (0, i.e7)([c.ZP], () => c.ZP.getVoiceStates(t)),
          f = Z.map((e) => {
            var t;
            return {
              name: (0, l.jsx)(m.Z, {
                channel: e,
                users:
                  null === (t = C[e.id]) || void 0 === t
                    ? void 0
                    : t
                        .filter((e) => {
                          let { user: n } = e;
                          return n.id !== (null == v ? void 0 : v.id);
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
        return (0, l.jsx)(g.Z, {
          title: h.intl.string(h.t["eg7R/v"]),
          scrollerInnerClassName: x.channelSelectScrollerInner,
          children: (0, l.jsx)(s.RadioGroup, {
            options: f,
            value: n,
            itemInfoClassName: x.channelInfoWrapper,
            itemTitleClassName: x.channelTitleWrapper,
            onChange: (e) => {
              let { value: n } = e;
              return S(n);
            },
          }),
        });
      }
    },
    399299: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return q;
        },
      });
      var l = t(200651),
        i = t(192379),
        s = t(120356),
        r = t.n(s),
        a = t(442837),
        o = t(481060),
        u = t(230711),
        c = t(812206),
        d = t(605436),
        m = t(600164),
        g = t(594190),
        h = t(925329),
        x = t(565138),
        S = t(977059),
        v = t(695346),
        Z = t(494620),
        C = t(592125),
        f = t(650774),
        j = t(430824),
        p = t(131951),
        N = t(944486),
        I = t(594174),
        T = t(449224),
        E = t(626135),
        R = t(823379),
        P = t(63063),
        A = t(358085),
        b = t(653255),
        M = t(989941),
        _ = t(618407),
        k = t(586290),
        L = t(233037),
        D = t(810013),
        U = t(537135),
        w = t(641115),
        B = t(143135),
        G = t(70722),
        y = t(981631),
        F = t(526761),
        O = t(388032),
        z = t(949949),
        V = t(456963);
      function W(e) {
        let {
            selectedSource: n,
            selectSource: t,
            sourceChanged: i,
            onChangeSource: s,
          } = e,
          r = (0, a.e7)([g.ZP, T.Z], () =>
            (0, A.isWindows)() ? (0, M.Z)(g.ZP, T.Z) : null,
          ),
          u = (0, a.e7)([c.Z], () =>
            (null == r ? void 0 : r.id) != null
              ? c.Z.getApplication(r.id)
              : null,
          ),
          d = (0, a.e7)([g.ZP], () => g.ZP.getRunningGames()),
          m = (0, a.Wu)(
            [c.Z],
            () =>
              d
                .map((e) => (null != e.id ? c.Z.getApplication(e.id) : null))
                .filter(R.lm),
            [d],
          ),
          x = null;
        if ((null != n ? (x = n.name) : null != r && (x = r.name), null == x))
          return null;
        let S = (0, B.Z)(r, n, d),
          v = i
            ? m.find((e) => {
                let { id: n } = e;
                return n === (null == S ? void 0 : S.id);
              })
            : u,
          Z =
            null != n && n.id.startsWith("screen")
              ? o.ScreenIcon
              : o.BrowserIcon;
        return (0, l.jsx)(o.FormItem, {
          title: O.intl.string(O.t.TC7Ev7),
          className: V.modalContent,
          titleClassName: V.formItemTitleVerySlim,
          children: (0, l.jsxs)(U.Z, {
            children: [
              null != v
                ? (0, l.jsx)(h.Z, {
                    game: v,
                    size: h.Z.Sizes.XSMALL,
                    className: z.selectedIcon,
                  })
                : (0, l.jsx)(Z, { className: z.selectedIcon }),
              (0, l.jsx)("span", { className: z.ellipsisText, children: x }),
              t
                ? (0, l.jsx)(o.Button, {
                    className: z.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: s,
                    children: O.intl.string(O.t.GEgsAw),
                  })
                : null,
            ],
          }),
        });
      }
      function H(e) {
        let { onChange: n, guildId: t } = e,
          i = (0, a.e7)([j.Z], () => j.Z.getGuild(t));
        return null == i
          ? (n(), null)
          : (0, l.jsx)(o.FormItem, {
              title: O.intl.string(O.t.WC3u3t),
              className: V.modalContent,
              titleClassName: V.formItemTitle,
              children: (0, l.jsxs)(U.Z, {
                children: [
                  (0, l.jsx)(x.Z, {
                    guild: i,
                    size: x.Z.Sizes.SMALLER,
                    className: z.selectedIcon,
                  }),
                  (0, l.jsx)("span", {
                    className: z.ellipsisText,
                    children: i.toString(),
                  }),
                  (0, l.jsx)(o.Button, {
                    className: z.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: n,
                    children: O.intl.string(O.t.GEgsAw),
                  }),
                ],
              }),
            });
      }
      function Y(e) {
        let { text: n } = e;
        return (0, l.jsxs)(m.Z, {
          align: m.Z.Align.CENTER,
          className: z.warning,
          children: [
            (0, l.jsx)(o.CircleWarningIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: z.warningIcon,
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
          t = (0, a.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
          }),
          s = v.eo.useSetting(),
          u = i.useCallback((e, n) => {
            v.eo.updateSetting(n),
              E.default.track(y.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
          }, []);
        return t >= 2 && t <= G.tB
          ? (0, l.jsx)(o.FormItem, {
              className: r()(V.modalContent, z.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                value: !!s,
                type: o.Checkbox.Types.INVERTED,
                onChange: u,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: O.intl.string(O.t.Cef4t7),
                }),
              }),
            })
          : null;
      }
      function X(e) {
        let { enabled: n, onChange: t, screen: s } = e,
          a = i.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(V.modalContent, z.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: s
                ? O.intl.string(O.t["5Adrtb"])
                : O.intl.string(O.t.gRpbRE),
            }),
          }),
        });
      }
      function J(e) {
        let { enabled: n, onChange: t } = e,
          s = i.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(V.modalContent, z.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: s,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: O.intl.string(O.t.JE73jI),
            }),
          }),
        });
      }
      function q(e) {
        let {
            selectedSource: n,
            selectedFPS: t,
            selectedChannelId: s,
            selectedPreset: r,
            selectedResolution: o,
            sourceChanged: c,
            selectedGuildId: m,
            targetGuildPremiumTier: g,
            selectSource: h,
            selectGuild: x,
            sound: v,
            previewDisabled: f,
            onClose: j,
            onChangeSelectedFPS: T,
            onChangeSelectedResolution: E,
            onChangeSelectedPreset: R,
            onChangeSelectedChannelId: A,
            onChangeSource: M,
            onChangeAudioDevice: U,
            onChangeGuild: B,
            onChangeSound: G,
            onChangePreviewDisabled: V,
          } = e,
          q = (0, a.e7)([N.Z, C.Z], () =>
            C.Z.getChannel(N.Z.getVoiceChannelId()),
          ),
          Q = (0, a.e7)([b.Z], () => b.Z.GPUDriversOutdated),
          $ = (0, a.e7)([b.Z], () => b.Z.problematicGPUDriver),
          ee = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
          en = (0, _.Z)();
        null != n &&
          n.id.startsWith("screen") &&
          !p.Z.supportsScreenSoundshare() &&
          (en = O.intl.string(O.t["1b0Gm5"]));
        let et = !!(null == n ? void 0 : n.id.startsWith("camera")),
          el = null != ee && ee.verified && !ee.bot,
          ei = null != q && !(0, d.Yk)(q),
          es = !(0, a.e7)([p.Z], () => p.Z.getHardwareEncoding()),
          { enabled: er } = (0, S.S)({ location: "GoLiveModal_Confirm" });
        return (0, l.jsxs)(i.Fragment, {
          children: [
            et
              ? (0, l.jsx)(k.Z, {
                  selectedSource: n,
                  onChangeVideoDeviceSource: M,
                  onChangeAudioDevice: U,
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(W, {
                      selectSource: h,
                      sourceChanged: c,
                      onChangeSource: M,
                      selectedSource: n,
                    }),
                    null != en ? (0, l.jsx)(Y, { text: en }) : null,
                    null != n && null == en
                      ? (0, l.jsx)(X, {
                          enabled: v,
                          onChange: G,
                          screen: n.id.startsWith("screen"),
                        })
                      : null,
                  ],
                }),
            x && null != m ? (0, l.jsx)(H, { guildId: m, onChange: B }) : null,
            null != q
              ? (0, l.jsx)(D.Z, { channel: q })
              : (0, l.jsx)(L.Z, {
                  guildId: m,
                  selectedChannelId: s,
                  onChangeSelectedChannelId: A,
                }),
            null != m && el && ei ? (0, l.jsx)(K, { guildId: m }) : null,
            Q ? (0, l.jsx)(Y, { text: O.intl.string(O.t.q65tS0) }) : null,
            $
              ? (0, l.jsx)(Y, {
                  text: O.intl.format(O.t.RrLvub, {
                    helpCenterLink: P.Z.getArticleURL(
                      y.BhN.NVIDIA_DRIVER_ISSUES,
                    ),
                  }),
                })
              : null,
            es &&
              (0, l.jsx)(Z.Z, {
                look: Z.z.WARNING,
                className: z.hardwareWarning,
                children: O.intl.format(O.t.zCLXws, {
                  onClick: () => {
                    j(),
                      u.Z.open(y.oAB.VOICE, null, {
                        scrollPosition:
                          F.KQ.VoiceAndVideoScrollPositions
                            .HARDWARE_ACCELERATION,
                      });
                  },
                }),
              }),
            (0, l.jsx)(w.Z, {
              selectedPreset: r,
              selectedFPS: t,
              selectedResolution: o,
              targetGuildPremiumTier: g,
              onClose: j,
              onFPSChange: T,
              onResolutionChange: E,
              onPresetChange: R,
              captureDeviceSelected: et,
            }),
            er && (0, l.jsx)(J, { enabled: f, onChange: V }),
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
      var l = t(200651);
      t(192379);
      var i = t(442837),
        s = t(481060),
        r = t(314897),
        a = t(938475),
        o = t(499596),
        u = t(537135),
        c = t(388032),
        d = t(456963);
      function m(e) {
        let { channel: n } = e,
          t = (0, i.e7)([r.default], () => r.default.getId()),
          m = (0, i.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(n), [n]);
        return (0, l.jsx)(s.FormItem, {
          title: c.intl.string(c.t.KPuWsr),
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
    60594: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return er;
          },
        }),
        t(47120),
        t(653041);
      var l,
        i,
        s = t(200651),
        r = t(192379),
        a = t(512722),
        o = t.n(a),
        u = t(642128),
        c = t(209739),
        d = t.n(c),
        m = t(442837),
        g = t(704215),
        h = t(481060),
        x = t(668781),
        S = t(872810),
        v = t(410575),
        Z = t(579806),
        C = t(636449),
        f = t(317381),
        j = t(89425),
        p = t(812206),
        N = t(835473),
        I = t(600164),
        T = t(313201),
        E = t(243778),
        R = t(594190),
        P = t(998594),
        A = t(751571),
        b = t(970731),
        M = t(695346),
        _ = t(361291),
        k = t(592125),
        L = t(430824),
        D = t(131951),
        U = t(944486),
        w = t(594174),
        B = t(449224),
        G = t(626135),
        y = t(63063),
        F = t(358085),
        O = t(998502),
        z = t(451467),
        V = t(537413),
        W = t(299570),
        H = t(960861),
        Y = t(989941),
        K = t(399299),
        X = t(351152),
        J = t(567126),
        q = t(143135),
        Q = t(70722),
        $ = t(37113),
        ee = t(981631),
        en = t(921944),
        et = t(761274),
        el = t(388032),
        ei = t(456963);
      ((i = l || (l = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.NATIVE_PICKER_SOURCE = 1)] = "NATIVE_PICKER_SOURCE"),
        (i[(i.SOURCE = 2)] = "SOURCE"),
        (i[(i.CONFIRM = 3)] = "CONFIRM");
      let es = (e) => {
        let { visibleContent: n, markAsDismissed: t } = e;
        return n === g.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
          ? (0, s.jsx)(b.ZP, {
              content: el.intl.string(el.t.sFyFJy),
              buttonCTA: el.intl.string(el.t["NX+WJC"]),
              onClick: () => {},
              onSecondaryClick: () => {
                open(y.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: el.intl.string(el.t.hvVgAQ),
              caretPosition: b.DF.LEFT_CENTER,
              markAsDismissed: t,
            })
          : null;
      };
      function er(e) {
        var n, l, i, a, c, b, y;
        let {
            selectGuild: er = !1,
            selectSource: ea = !0,
            guildId: eo,
            analyticsLocation: eu,
            onClose: ec,
            transitionState: ed,
          } = e,
          {
            preset: em,
            resolution: eg,
            fps: eh,
            soundshareEnabled: ex,
          } = (0, m.cj)([_.Z], () => _.Z.getState()),
          eS = (0, m.e7)([U.Z, k.Z], () =>
            k.Z.getChannel(U.Z.getVoiceChannelId()),
          ),
          ev = (0, m.e7)([R.ZP, B.Z], () =>
            (0, F.isWindows)() ? (0, Y.Z)(R.ZP, B.Z) : null,
          ),
          eZ = (0, m.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity()),
          eC = (0, N.q)(null == eZ ? void 0 : eZ.applicationId),
          [ef, ej] = r.useState(null);
        r.useEffect(() => {
          (0, C.R)() &&
            (async () => {
              var e;
              ej(
                await (null === Z.Z || void 0 === Z.Z
                  ? void 0
                  : null === (e = Z.Z.window) || void 0 === e
                    ? void 0
                    : e.getMediaSourceId("DISCORD_ACTIVITY_POPOUT")),
              );
            })();
        }, []);
        let ep = (0, m.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return o()(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          eN =
            null !== (n = null == eS ? void 0 : eS.getGuildId()) && void 0 !== n
              ? n
              : eo,
          eI = (0, m.e7)([L.Z], () => {
            var e;
            return null != eN
              ? null === (e = L.Z.getGuild(eN)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [eT, eE] =
            null !== (l = (0, V.Z)(em, ep, eI)) && void 0 !== l
              ? l
              : [$.LY.RESOLUTION_720, $.ws.FPS_30],
          { lastPickerAction: eR } = (0, m.e7)([H.ZP], () =>
            H.ZP.getPickerState(),
          ),
          eP = D.Z.getUseSystemScreensharePicker();
        (0, H.UB)();
        let eA =
            eP &&
            (0, F.isMac)() &&
            d().satisfies(
              null === Z.Z || void 0 === Z.Z ? void 0 : Z.Z.os.release,
              Q.jR,
            ),
          eb = [];
        ed === h.ModalTransitionState.ENTERED &&
          eP &&
          (0, F.isMac)() &&
          eb.push(g.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
        let [eM, e_] = (0, E.US)(eb, void 0, !0);
        em !== $.tI.PRESET_CUSTOM && ((eg = eT), (eh = eE)),
          !(0, z.Z)(em, eg, eh, ep, eI) && ((eg = eT), (eh = eE));
        let ek = (0, T.Dt)();
        let [eL, eD] = r.useState(
            ((b = er), (y = ea && !eA), b ? 0 : y ? 2 : 3),
          ),
          [eU, ew] = r.useState(eA),
          [eB, eG] = r.useState(null),
          [ey, eF] = r.useState(
            eA
              ? {
                  id: "prepicked:",
                  name: el.intl.string(el.t["KKcy9/"]),
                  url: "",
                }
              : null,
          ),
          [eO, ez] = r.useState(null),
          [eV, eW] = r.useState(em),
          [eH, eY] = r.useState(eg),
          [eK, eX] = r.useState(eh),
          [eJ, eq] = r.useState(ex),
          [eQ, e$] = r.useState(
            null !== (i = M.I0.getSetting()) && void 0 !== i && i,
          ),
          [e0, e1] = r.useState(null != eo ? eo : null),
          e3 =
            null !== (a = null == eS ? void 0 : eS.id) && void 0 !== a ? a : eB;
        async function e4() {
          var e, n;
          o()(
            null != ev || null != ey || (null != eZ && null != ef),
            "got nothing to stream",
          );
          let t =
            null !== (e = null == eS ? void 0 : eS.id) && void 0 !== e ? e : eB;
          o()(null != t, "Received null target channel ID");
          let l = k.Z.getChannel(t),
            i =
              null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n
                ? n
                : eo;
          if (null == eS && !(await (0, j.Z)({ channelId: t }))) return;
          let s = eV,
            r = eH,
            a = eK;
          !(0, z.Z)(s, r, a, ep, eI, l) &&
            ((s = $.tI.PRESET_VIDEO),
            (r = $.LY.RESOLUTION_720),
            (a = $.ws.FPS_30)),
            (0, S.Rc)({
              preset: s,
              resolution: r,
              frameRate: a,
              soundshareEnabled: eJ,
            });
          let u = (0, q.Z)(ev, ey, R.ZP.getRunningGames()),
            c =
              !(0, F.isWindows)() ||
              null == u ||
              (null == ey ? void 0 : ey.id.startsWith("camera:")) ||
              null == u
                ? null
                : u.pid,
            d = null,
            m = null;
          null == c &&
            (null != ey
              ? ((d = ey.id), (m = ey.name))
              : null != ef && ((d = ef), (m = null == eC ? void 0 : eC.name))),
            (0, S.WH)(i, t, {
              pid: c,
              sourceId: d,
              sourceName: m,
              audioSourceId: eO,
              sound: eJ,
              previewDisabled: eQ,
            }),
            null != eM && e_(en.L.AUTO_DISMISS),
            !eP &&
              (async () => {
                !(await A.Z.hasPermission(et.Eu.SCREEN_RECORDING, {
                  showAuthorizationError: !1,
                })) &&
                  x.Z.show({
                    title: el.intl.string(el.t["X+mXen"]),
                    body: el.intl.string(el.t.MIJCzs),
                  });
              })();
        }
        function e2() {
          e4(), ec();
        }
        r.useEffect(() => {
          let e = (0, F.isWindows)() ? (0, Y.Z)(R.ZP, B.Z) : null,
            n =
              (null == e ? void 0 : e.id) != null
                ? p.Z.getApplication(e.id)
                : null;
          G.default.track(ee.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: eu,
          }),
            P.Z.trackExposure({ location: "GoLiveModal" });
        }, [eu]);
        let e7 = r.useCallback(
            (e, n, t) => {
              var l;
              let i = (0, V.Z)(e, ep, eI),
                [s, r] = null != i ? i : [n, t];
              e !== eV && ((n = s), (t = r));
              let a =
                null !== (l = null == eS ? void 0 : eS.id) && void 0 !== l
                  ? l
                  : eB;
              o()(null != a, "Received null target channel ID");
              let u = k.Z.getChannel(a);
              if (!(0, z.Z)(e, n, t, ep, eI, u)) {
                let [e, l] = (0, V.Z)($.tI.PRESET_VIDEO, ep, eI);
                (n = e), (t = l);
              }
              t !== eK && eX(t),
                n !== eH && eY(n),
                s !== n || r !== t ? eW($.tI.PRESET_CUSTOM) : e !== eV && eW(e);
            },
            [eS, eB, ep, eI, eK, eH, eV],
          ),
          [e9, e6] = r.useState(eA ? "" : void 0),
          e5 = r.useCallback(
            (e) => {
              (0, W.t)(), (0, W.T)(null != e ? e : e9);
            },
            [e9],
          );
        function e8(e) {
          if ((e.preventDefault(), 1 === eL)) return e5();
          if (2 === eL) return eD(3);
          if (null != e9) return eD(1);
          let n = (0, q.Z)(ev, ey, R.ZP.getRunningGames());
          O.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) &&
          (null == n ? void 0 : n.elevated)
            ? !(function () {
                var e;
                let n =
                  null !== (e = null == ev ? void 0 : ev.pid) && void 0 !== e
                    ? e
                    : null;
                (0, h.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("74300")
                    .then(t.bind(t, 566852));
                  return (t) =>
                    (0, s.jsx)(e, { ...t, handleStream: e2, pid: n });
                });
              })()
            : e2();
        }
        let ne = r.useCallback(
            (e) => {
              eF(e),
                null != e &&
                  (eP &&
                  (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                    ? e6(e.id.split(":")[1])
                    : e6(void 0),
                  eD(3),
                  ew(!0));
            },
            [eP],
          ),
          nn = r.useCallback(
            (e) => {
              e1(e);
              var n = 3;
              eD((n = ea ? 2 : 3));
            },
            [ea],
          ),
          nt = !(1 === eL && eP && eR === H.Uc.Error),
          nl = (function (e) {
            switch (e) {
              case 2:
                return el.intl.string(el.t["aC4/Zm"]);
              case 1:
                return el.intl.formatToPlainString(el.t.sbbPhY, {
                  buttonName: el.intl.string(el.t.FiBjwc),
                });
              case 3:
                return null;
              default:
                return el.intl.string(el.t["1hKIam"]);
            }
          })(eL),
          ni = (0, s.jsx)(h.ModalHeader, {
            className: ei.modalHeader,
            separator: !1,
            children: (0, s.jsxs)(I.Z, {
              direction: I.Z.Direction.VERTICAL,
              align: I.Z.Align.CENTER,
              className: ei.header,
              children: [
                (0, s.jsx)(h.Heading, {
                  variant: "heading-xl/semibold",
                  id: ek,
                  className: ei.headerText,
                  children: el.intl.string(el.t.RDkJQ0),
                }),
                nt && null != nl
                  ? (0, s.jsx)(h.Text, {
                      className: ei.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: nl,
                    })
                  : null,
              ],
            }),
          }),
          ns = r.useCallback(() => {
            eP && (0, W.t)(), eD(2);
          }, [eP]),
          nr = (function (e, n, t, l) {
            switch (e) {
              case 2:
                return n ? 0 : null;
              case 1:
                return 3;
              case 3:
                if (l) return 2;
                if (!t && n) return 0;
                return null;
              default:
                return null;
            }
          })(eL, er, ea, eU),
          na =
            1 !== eL &&
            (3 !== eL ||
              (null == ey && null == ev && null == ef) ||
              null == e3),
          no = r.useCallback(() => {
            null != nr && eD(nr);
          }, [nr]),
          nu = (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(h.Slides, {
              springConfig: { ...u.config.stiff, clamp: !0 },
              activeSlide: eL,
              width: 480,
              children: [
                (0, s.jsx)(h.Slide, {
                  id: 0,
                  children: (0, s.jsx)("div", {
                    className: ei.modalSize,
                    children: (0, s.jsx)(X.Z, { onSelectGuild: nn }),
                  }),
                }),
                (0, s.jsx)(h.Slide, {
                  id: 2,
                  children: (0, s.jsx)("div", {
                    className: ei.modalSize,
                    children: eP
                      ? (0, s.jsx)(J.se, { onSourceSelect: ne })
                      : (0, s.jsx)(J.oA, {
                          selectedSource: ey,
                          onChangeSelectedSource: ne,
                        }),
                  }),
                }),
                (0, s.jsx)(h.Slide, {
                  id: 3,
                  children: (0, s.jsx)("div", {
                    className: ei.modalSize,
                    children: (0, s.jsx)(K.Z, {
                      selectedChannelId:
                        null !== (c = null == eS ? void 0 : eS.id) &&
                        void 0 !== c
                          ? c
                          : eB,
                      selectedPreset: eV,
                      selectedResolution: eH,
                      selectedSource: ey,
                      selectedFPS: eK,
                      sound: eJ,
                      previewDisabled: eQ,
                      sourceChanged: eU,
                      selectSource: ea,
                      onChangeSelectedFPS: (e) => e7(eV, eH, e),
                      onChangeSelectedResolution: (e) => e7(eV, e, eK),
                      onChangeSelectedPreset: (e) => e7(e, eH, eK),
                      onChangeSelectedChannelId: eG,
                      onChangeSelectedSource: ne,
                      onChangeSource: () => ns(),
                      onChangeAudioDevice: (e) => ez(e),
                      onChangeGuild: () => eD(0),
                      onChangeSound: (e) => eq(e),
                      onChangePreviewDisabled: (e) => e$(e),
                      onClose: ec,
                      selectedGuildId: e0,
                      targetGuildPremiumTier: eI,
                      selectGuild: er,
                    }),
                  }),
                }),
                (0, s.jsx)(h.Slide, {
                  id: 1,
                  children: (0, s.jsx)("div", {
                    className: ei.modalSize,
                    children: (0, s.jsx)(J.Hu, {
                      onSourceSelect: e2,
                      onCancel: no,
                      pickerType: e9,
                    }),
                  }),
                }),
              ],
            }),
          }),
          nc =
            1 === eL || (eA && 3 === eL)
              ? el.intl.string(el.t.FiBjwc)
              : eP && (3 !== eL || null != e9)
                ? el.intl.string(el.t.PDTjLC)
                : el.intl.string(el.t["UE/rPz"]),
          nd = (0, s.jsxs)(h.ModalFooter, {
            justify: null == nr ? I.Z.Justify.START : I.Z.Justify.BETWEEN,
            children: [
              (0, s.jsx)(h.Button, {
                type: "submit",
                size: h.Button.Sizes.SMALL,
                disabled: na,
                autoFocus: !0,
                children: nc,
              }),
              null == nr
                ? (0, s.jsx)(h.Button, {
                    className: ei.cancelButton,
                    look: h.Button.Looks.LINK,
                    size: h.Button.Sizes.SMALL,
                    color: h.ButtonColors.PRIMARY,
                    onClick: ec,
                    children: el.intl.string(el.t["ETE/oK"]),
                  })
                : (0, s.jsx)(h.Button, {
                    size: h.Button.Sizes.SMALL,
                    color: h.ButtonColors.PRIMARY,
                    onClick: no,
                    children: el.intl.string(el.t["13/7kZ"]),
                  }),
            ],
          });
        return (0, s.jsx)(v.Z, {
          page: ee.ZY5.GO_LIVE_MODAL,
          children: (0, s.jsxs)(h.ModalRoot, {
            "aria-labelledby": ek,
            transitionState: ed,
            size: h.ModalSize.DYNAMIC,
            className: ei.modalSize,
            children: [
              (0, s.jsx)(h.ModalCloseButton, {
                onClick: ec,
                className: ei.modalCloseButton,
              }),
              (0, s.jsx)("div", { className: ei.art }),
              (0, s.jsx)(h.Popout, {
                position: "right",
                align: "center",
                shouldShow: null != eM,
                spacing: 18,
                renderPopout: () =>
                  (0, s.jsx)(es, { visibleContent: eM, markAsDismissed: e_ }),
                children: () =>
                  (0, s.jsxs)("form", { onSubmit: e8, children: [ni, nu, nd] }),
              }),
            ],
          }),
        });
      }
    },
    351152: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(390547);
      var l = t(200651);
      t(192379);
      var i = t(120356),
        s = t.n(i),
        r = t(392711),
        a = t.n(r),
        o = t(442837),
        u = t(481060),
        c = t(565138),
        d = t(984933),
        m = t(430824),
        g = t(496675),
        h = t(771845),
        x = t(259580),
        S = t(102172),
        v = t(148381),
        Z = t(388032),
        C = t(456963),
        f = t(754246);
      function j(e) {
        let { guildId: n, onClick: t } = e,
          i = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
          s = (0, o.e7)([d.ZP, m.Z, g.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
              let { channel: n } = e;
              return (0, S.JL)(n, m.Z, g.Z);
            }),
          );
        return null != i && s
          ? (0, l.jsxs)(u.Clickable, {
              onClick: () => t(n),
              className: f.guildRow,
              children: [
                (0, l.jsx)(c.Z, {
                  guild: i,
                  size: c.Z.Sizes.SMALL,
                  className: f.guildIcon,
                }),
                (0, l.jsx)(u.Text, {
                  variant: "text-md/normal",
                  className: f.guildName,
                  children: i.toString(),
                }),
                (0, l.jsx)(x.Z, {
                  direction: x.Z.Directions.RIGHT,
                  className: f.guildArrow,
                }),
              ],
            })
          : null;
      }
      function p(e) {
        let { onSelectGuild: n } = e,
          t = (0, o.e7)([h.ZP], () => h.ZP.getGuildFolders());
        return (0, l.jsx)(v.Z, {
          title: Z.intl.string(Z.t.JsqeEh),
          scrollerClassName: s()(f.guildScroller, C.marginBottom),
          children: a().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) => (0, l.jsx)(j, { guildId: e, onClick: n }, e));
          }),
        });
      }
    },
    499596: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        s = t.n(i),
        r = t(481060),
        a = t(884338),
        o = t(933557),
        u = t(471445),
        c = t(5192),
        d = t(388032),
        m = t(381515);
      function g(e) {
        let { channel: n, users: t, selected: i = !1 } = e,
          g = (0, o.ZP)(n),
          h = null;
        null != t &&
          t.length > 0 &&
          (h = (0, l.jsx)(a.Z, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: t,
            renderUser: (e) => {
              if (null == e) return null;
              let t = c.ZP.getName(n.guild_id, n.id, e),
                i = e.getAvatarURL(n.guild_id, 24);
              return (0, l.jsx)(r.TooltipContainer, {
                text: t,
                children: (0, l.jsx)("img", {
                  src: null != i ? i : void 0,
                  "aria-label": e.username,
                  alt: "",
                  className: m.avatar,
                }),
              });
            },
            renderMoreUsers: (e) => {
              let i = (function (e, n) {
                let t = n.id,
                  l = n.guild_id;
                return e.length <= 1
                  ? null
                  : 2 === e.length
                    ? d.intl.formatToPlainString(d.t.MlgLFx, {
                        nickname0: c.ZP.getName(l, t, e[0]),
                        nickname1: c.ZP.getName(l, t, e[1]),
                      })
                    : 3 === e.length
                      ? d.intl.formatToPlainString(d.t.sihix8, {
                          nickname0: c.ZP.getName(l, t, e[0]),
                          nickname1: c.ZP.getName(l, t, e[1]),
                          nickname2: c.ZP.getName(l, t, e[2]),
                        })
                      : d.intl.formatToPlainString(d.t["824IXV"], {
                          nickname0: c.ZP.getName(l, t, e[0]),
                          nickname1: c.ZP.getName(l, t, e[1]),
                          remainingCount: e.length - 2,
                        });
              })(t.slice(4), n);
              return (0, l.jsx)("div", {
                children: (0, l.jsx)(r.TooltipContainer, {
                  text: i,
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
        let x = (0, u.KS)(n);
        return (0, l.jsxs)("div", {
          className: s()(m.channelInfo, { [m.selected]: i }),
          children: [
            (0, l.jsx)(x, { className: m.channelIcon }),
            (0, l.jsx)("div", { className: m.channelName, children: g }),
            h,
          ],
        });
      }
    },
    537135: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(783301);
      function s(e) {
        let { children: n } = e;
        return (0, l.jsx)("div", { className: i.card, children: n });
      }
    },
    148381: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        s = t(120356),
        r = t.n(s),
        a = t(481060),
        o = t(493773),
        u = t(958707),
        c = t(456963),
        d = t(864073);
      function m(e) {
        let {
            title: n,
            scrollerClassName: t,
            scrollerInnerClassName: s,
            children: m,
          } = e,
          g = i.useRef(null),
          [h, x] = i.useState(!1),
          [S, v] = i.useState(!1),
          Z = i.useCallback(() => {
            let { current: e } = g;
            null != e && (x(!e.isScrolledToTop()), v(!e.isScrolledToBottom()));
          }, []);
        return (
          (0, o.N)(() => Z()),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: r()(d.title, d.scrollWrapper),
                children: [
                  (0, l.jsx)(a.FormTitle, {
                    className: c.formItemTitle,
                    children: n,
                  }),
                  (0, l.jsx)(u.Z, { separator: h }),
                ],
              }),
              (0, l.jsx)("div", {
                className: t,
                children: (0, l.jsx)(a.AdvancedScroller, {
                  ref: g,
                  className: r()(d.scrollerInner, s, {
                    [d.bottomSeparator]: S,
                  }),
                  onScroll: Z,
                  children: m,
                }),
              }),
            ],
          })
        );
      }
    },
    641115: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        s = t(120356),
        r = t.n(s),
        a = t(512722),
        o = t.n(a),
        u = t(848246),
        c = t(442837),
        d = t(481060),
        m = t(410575),
        g = t(2052),
        h = t(924557),
        x = t(600164),
        S = t(436774),
        v = t(933843),
        Z = t(140465),
        C = t(1163),
        f = t(774026),
        j = t(592125),
        p = t(944486),
        N = t(594174),
        I = t(74538),
        T = t(451467),
        E = t(122186),
        R = t(37113),
        P = t(981631),
        A = t(474936),
        b = t(388032),
        M = t(456963),
        _ = t(998139),
        k = t(232186);
      function L(e) {
        let { analyticsLocation: n, onClose: i } = e;
        (0, d.openModalLazy)(async () => {
          let { default: e } = await t.e("28479").then(t.bind(t, 78865));
          return (t) =>
            (0, l.jsx)(e, { ...t, onCloseParent: i, analyticsSource: n });
        });
      }
      function D() {
        return (0, l.jsxs)("div", {
          className: _.toolTipTextContainer,
          children: [
            (0, l.jsx)(d.NitroWheelIcon, {
              size: "md",
              color: S.JX.PREMIUM_TIER_2,
              className: r()(_.premiumIcon),
            }),
            (0, l.jsx)(d.Text, {
              className: _.upsellText,
              variant: "text-sm/medium",
              children: b.intl.string(b.t.sEAnVF),
            }),
          ],
        });
      }
      function U(e) {
        let n,
          t,
          {
            type: i,
            selected: s,
            needsPremium: a,
            needsDemo: o,
            analyticsLocation: u,
            onClick: c,
            onClose: m,
            setIsHovering: g,
          } = e,
          { value: h, label: x } = i;
        return (
          a
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                tooltipClassName: _.tooltip,
                spacing: 6,
                "aria-label": b.intl.string(b.t.sEAnVF),
                text: (0, l.jsx)(D, {}),
                children: (0, l.jsx)("div", {
                  className: _.textContainer,
                  onMouseEnter: () => g(!0),
                  onMouseLeave: () => g(!1),
                  children: (0, l.jsx)(d.Text, {
                    variant: "text-xs/bold",
                    className: r()(
                      _.selectorNitroText,
                      _.enhancedSelectorNitroText,
                    ),
                    children: x,
                  }),
                }),
              })),
              (t = () => L({ analyticsLocation: u, onClose: m })))
            : ((n = (0, l.jsx)("div", {
                className: _.textContainer,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  className: r()(_.selectorText, {
                    [_.enhancedSelectorNitroText]: o,
                  }),
                  children: x,
                }),
              })),
              (t = () => c(h))),
          {
            content: n,
            className: r()(_.selectorButton, {
              [_.selectorButtonSelected]: s,
              [_.perksDemo]: o,
              [_.premiumUpsell]: a,
            }),
            onClick: t,
          }
        );
      }
      function w(e) {
        let {
            onClose: n,
            selectedPreset: t,
            selectedResolution: s,
            selectedFPS: r,
            onResolutionChange: a,
            onFPSChange: S,
            onPresetChange: D,
            targetGuildPremiumTier: w,
            captureDeviceSelected: B,
          } = e,
          G = (0, c.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return (
              o()(null != e, "StreamSettings: user cannot be undefined"), e
            );
          }),
          y = (0, c.e7)([p.Z, j.Z], () =>
            j.Z.getChannel(p.Z.getVoiceChannelId()),
          ),
          F = I.ZP.canStreamQuality(I.U2.MID, G),
          { location: O } = (0, g.O)(),
          z = (0, h.Zq)({ autoTrackExposure: !1 }),
          V = (0, I.I5)(G, A.p9.TIER_1);
        C.Z.useExperiment(
          { location: "Go Live Modal" },
          { autoTrackExposure: !0, disable: V },
        );
        let W = (0, Z.B4)({ location: "StreamSettings" }),
          H = N.default.getUser(null == y ? void 0 : y.hdStreamingBuyerId),
          Y =
            null != y &&
            null != y.hdStreamingUntil &&
            new Date(y.hdStreamingUntil) > new Date() &&
            null != H,
          K = (0, v.So)(u.q.STREAM_HIGH_QUALITY),
          X = (!F && !z) || K,
          [J, q] = i.useState(!1),
          Q = B ? R.z8 : R.WC,
          $ = { ...O, section: P.jXE.STREAM_SETTINGS },
          ee = (0, l.jsx)(d.ButtonGroup, {
            buttons: Q.map((e) =>
              U({
                type: e,
                selected: e.value === s,
                needsPremium: !(0, T.Z)(t, e.value, r, G, w, y),
                needsDemo: (K || W) && e.value !== R.LY.RESOLUTION_720,
                analyticsLocation: $,
                onClick: () => a(e.value),
                onClose: n,
                setIsHovering: q,
              }),
            ),
          }),
          en = (0, l.jsx)(d.ButtonGroup, {
            buttons: R.k0.map((e) =>
              U({
                type: e,
                selected: e.value === r,
                needsPremium: !(0, T.Z)(t, s, e.value, G, w, y),
                needsDemo: (K || W) && e.value === R.ws.FPS_60,
                analyticsLocation: $,
                onClick: () => S(e.value),
                onClose: n,
                setIsHovering: q,
              }),
            ),
          }),
          et = [
            { value: R.tI.PRESET_VIDEO, label: b.intl.string(b.t.HcwHc3) },
            ...(B
              ? []
              : [
                  {
                    value: R.tI.PRESET_DOCUMENTS,
                    label: b.intl.string(b.t["/RfohI"]),
                  },
                ]),
            { value: R.tI.PRESET_CUSTOM, label: b.intl.string(b.t["+eOtrK"]) },
          ],
          el =
            t === R.tI.PRESET_DOCUMENTS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(x.Z, {
                      children: (0, l.jsx)(d.FormItem, {
                        title: b.intl.string(b.t.rHyPXl),
                        titleClassName: M.formItemTitleSlim,
                        className: _.documentModeGroup,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          children: b.intl.format(b.t["U+hmam"], { fps: r }),
                        }),
                      }),
                    }),
                    X
                      ? (0, l.jsx)(E.Z, {
                          message: b.intl.string(b.t.deDogI),
                          onClose: n,
                          openStreamUpsellModal: L,
                        })
                      : null,
                    W && (0, l.jsx)(E.c, {}),
                    Y &&
                      null != y.hdStreamingUntil &&
                      (0, l.jsx)(f.Z, {
                        streamingUntil: y.hdStreamingUntil,
                        user: H,
                        channel: y,
                      }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(x.Z, {
                      children: [
                        (0, l.jsx)(d.FormItem, {
                          title: b.intl.string(b.t.rHyPXl),
                          className: _.settingsGroup,
                          titleClassName: M.formItemTitleSlim,
                          children: ee,
                        }),
                        (0, l.jsx)(d.FormItem, {
                          title: b.intl.string(b.t.SkkeIi),
                          className: _.settingsGroup,
                          titleClassName: M.formItemTitleSlim,
                          children: en,
                        }),
                      ],
                    }),
                    X
                      ? (0, l.jsx)(E.Z, {
                          onClose: n,
                          openStreamUpsellModal: L,
                          glow: J,
                        })
                      : null,
                    W && (0, l.jsx)(E.c, {}),
                    Y &&
                      null != y.hdStreamingUntil &&
                      (0, l.jsx)(f.Z, {
                        streamingUntil: null == y ? void 0 : y.hdStreamingUntil,
                        user: H,
                        channel: y,
                      }),
                  ],
                });
        return (0, l.jsx)(m.Z, {
          ...$,
          children: (0, l.jsx)(d.FormItem, {
            title: b.intl.string(b.t.ax4FnZ),
            titleClassName: M.formItemTitle,
            className: M.modalContent,
            children: (0, l.jsxs)("div", {
              className: _.qualitySettingsContainer,
              children: [
                (0, l.jsx)(d.SingleSelect, {
                  value: t,
                  className: k.marginTop8,
                  options: et,
                  onChange: (e) => D(e),
                }),
                el,
              ],
            }),
          }),
        });
      }
    },
    122186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
        c: function () {
          return I;
        },
      });
      var l = t(200651),
        i = t(192379),
        s = t(120356),
        r = t.n(s),
        a = t(848246),
        o = t(442837),
        u = t(481060),
        c = t(607070),
        d = t(436774),
        m = t(933843),
        g = t(1163),
        h = t(846401),
        x = t(639119),
        S = t(197115),
        v = t(74538),
        Z = t(981631),
        C = t(474936),
        f = t(388032),
        j = t(468888);
      function p(e) {
        let { location: n, ...t } = e,
          s = (0, x.N)(),
          a = i.useCallback(() => {
            if (null != s) {
              var e;
              return null !== (e = (0, v.fr)(s)) && void 0 !== e
                ? e
                : f.intl.string(f.t.Y2WKTk);
            }
            return f.intl.string(f.t.Y2WKTk);
          }, [s]);
        return (0, l.jsx)(S.Z, {
          className: r()(j.enhancedCTA, j.ctaGradientBackground),
          iconClassName: j.premiumIcon,
          subscriptionTier: C.Si.TIER_2,
          buttonText: a(),
          size: u.Button.Sizes.TINY,
          premiumModalAnalyticsLocation: n,
          ...t,
        });
      }
      function N() {
        let e = (0, h.Z)();
        return (0, l.jsxs)("div", {
          className: j.extendedDemoContainer,
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: j.extendedDemoContainer,
                  children: [
                    (0, l.jsx)(u.Text, {
                      variant: "text-xs/bold",
                      color: "status-warning",
                      className: j.extendedDemoDurationText,
                      children: e.toUpperCase(),
                    }),
                    (0, l.jsx)(u.Text, {
                      variant: "text-xs/bold",
                      children: f.intl.string(f.t.bbRRNT).toUpperCase(),
                    }),
                  ],
                }),
                (0, l.jsx)(u.Text, {
                  variant: "text-sm/medium",
                  children: f.intl.string(f.t["1swibW"]),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: j.extendedDemoButton,
              children: (0, l.jsx)(p, { size: u.Button.Sizes.SMALL }),
            }),
          ],
        });
      }
      function I() {
        let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, l.jsxs)("div", {
          className: r()(j.reverseTrialEducationBannerContainer, {
            [j.reducedMotion]: e,
          }),
          children: [
            (0, l.jsx)(u.LottieAnimation, {
              className: r()(j.unlockAnimation, { [j.reducedMotion]: e }),
              loop: !1,
              shouldAnimate: !e,
              pauseAtFrame: e ? 149 : void 0,
              importData: () => t.e("21812").then(t.t.bind(t, 741855, 19)),
            }),
            (0, l.jsx)(u.Text, {
              variant: "text-xs/medium",
              className: j.reverseTrialEducationText,
              children: f.intl.format(f.t.GimLpa, {}),
            }),
          ],
        });
      }
      function T(e) {
        let {
            message: n,
            onClose: t,
            openStreamUpsellModal: i,
            glow: s = !1,
          } = e,
          o = {
            section: Z.jXE.STREAM_SETTINGS,
            object: Z.qAy.PREMIUM_UPSELL_BANNER,
            objectType: Z.Qqv.BUY,
          },
          c = (0, m.So)(a.q.STREAM_HIGH_QUALITY),
          h = g.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration;
        return (0, l.jsx)("div", {
          className: r()(j.upsellBanner, j.enhancedBanner, {
            [j.gradientGlow]: s,
          }),
          children:
            c && h
              ? (0, l.jsx)(N, {})
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: j.iconTextContainer,
                      children: [
                        (0, l.jsx)(u.NitroWheelIcon, {
                          size: "md",
                          color: d.JX.PREMIUM_TIER_2,
                        }),
                        (0, l.jsx)(u.Text, {
                          variant: "text-sm/medium",
                          className: r()(j.upsellText, j.enhancedUpsellText),
                          children:
                            null != n
                              ? n
                              : c
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      f.intl.string(f.t.zuZ2ws),
                                      " ",
                                      f.intl.format(f.t.fjSvsL, {
                                        onClick: () =>
                                          i({
                                            analyticsLocation: o,
                                            onClose: t,
                                          }),
                                      }),
                                    ],
                                  })
                                : f.intl.format(f.t["L/zCtr"], {
                                    onClick: () =>
                                      i({ analyticsLocation: o, onClose: t }),
                                  }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: j.enhancedCTAs,
                      children: (0, l.jsx)(p, { location: o }),
                    }),
                  ],
                }),
        });
      }
    },
    176940: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      var l = t(131951);
      function i() {
        return Object.entries(l.Z.getVideoDevices()).map((e) => {
          let [n, t] = e;
          return { id: "camera:" + t.id, name: t.name, url: "" };
        });
      }
    },
    846401: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(913527),
        s = t.n(i),
        r = t(848246),
        a = t(442837),
        o = t(846519),
        u = t(114064),
        c = t(388032);
      function d(e) {
        return e.toString().padStart(2, "0");
      }
      function m(e) {
        let n = s().duration(e.diff(s()()));
        return ""
          .concat(d(n.hours()), ":")
          .concat(d(n.minutes()), ":")
          .concat(d(n.seconds()));
      }
      function g() {
        let [e, n] = l.useState(
            m(s()(u.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY))),
          ),
          t = (0, a.e7)([u.Z], () =>
            u.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY),
          ),
          i = l.useMemo(() => s()(t), [t]),
          d = l.useRef(new o.Xp()),
          g = l.useCallback(() => {
            n(m(i));
          }, [i]);
        return (
          l.useEffect(() => {
            let e = s().duration(i.diff(s()()));
            1 > e.seconds()
              ? (n("00:00:00"), d.current.stop())
              : 1 > e.days()
                ? (g(), d.current.start(1e3, g))
                : (n(
                    c.intl.formatToPlainString(c.t["x+Dvys"], {
                      time: Math.floor(e.asDays()),
                    }),
                  ),
                  d.current.stop());
          }, [i, g]),
          e
        );
      }
    },
    774026: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(913527),
        s = t.n(i),
        r = t(793030),
        a = t(739566),
        o = t(942951),
        u = t(67390),
        c = t(63063),
        d = t(981631),
        m = t(388032),
        g = t(417859);
      function h(e) {
        var n;
        let { streamingUntil: t, user: i, channel: h } = e,
          x = (0, a.JZ)(i, h),
          S = (0, o.l)({
            user: i,
            channelId: h.id,
            guildId: h.guild_id,
            messageId: void 0,
          })(x),
          v = s()(t).diff(s()(), "hours");
        return v <= 0
          ? null
          : (0, l.jsxs)("div", {
              className: g.attribution,
              children: [
                (0, l.jsx)(u.Z, { className: g.img }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(r.X6, {
                      variant: "heading-sm/bold",
                      children: m.intl.string(m.t.K04rOD),
                    }),
                    (0, l.jsx)(r.xv, {
                      color: "text-muted",
                      variant: "text-sm/medium",
                      children: m.intl.format(m.t.NZDuBg, {
                        actorName:
                          null !== (n = i.globalName) && void 0 !== n
                            ? n
                            : i.username,
                        actorHook: S,
                        num: v,
                        helpCenterLink: c.Z.getArticleURL(
                          d.BhN.HD_STREAMING_POTION,
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=a5d8e854c30d92662ad1.js.map
