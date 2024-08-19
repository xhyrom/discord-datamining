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
            var c = n.substr(o, t),
              u = s.has(c) ? s.get(c) : 0;
            u > 0 && (s.set(c, u - 1), i++);
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
    954564: function (e, n, t) {
      var l = t(735250),
        s = t(470079),
        a = t(481060),
        r = t(2052),
        i = t(906732),
        o = t(963249),
        c = t(626135),
        u = t(981631),
        d = t(474936),
        m = t(689938),
        E = t(38457),
        _ = t(458623);
      n.Z = () => {
        let e = (0, r.O)(),
          { analyticsLocations: n } = (0, i.ZP)();
        return (
          s.useEffect(() => {
            c.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
              type: d.cd.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
              location: e.location,
              location_stack: n,
            });
          }, []),
          (0, l.jsx)(a.FormItem, {
            className: _.modalContent,
            children: (0, l.jsxs)("div", {
              className: E.nitroUpsellContainer,
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(a.Heading, {
                      variant: "heading-lg/bold",
                      color: "always-white",
                      className: E.nitroUpsellTitle,
                      children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE,
                    }),
                    (0, l.jsx)(a.Text, {
                      className: E.nitroUpsellSubtitle,
                      variant: "text-sm/normal",
                      color: "always-white",
                      children:
                        m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format(),
                    }),
                  ],
                }),
                (0, l.jsx)(a.Button, {
                  color: a.Button.Colors.BRAND_INVERTED,
                  onClick: () => {
                    (0, o.Z)({
                      subscriptionTier: d.Si.TIER_2,
                      analyticsLocations: n,
                    });
                  },
                  children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA,
                }),
              ],
            }),
          })
        );
      };
    },
    98131: function (e, n, t) {
      t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(512722),
        r = t.n(a),
        i = t(442837),
        o = t(704215),
        c = t(481060),
        u = t(605236),
        d = t(706140),
        m = t(765585),
        E = t(556296),
        _ = t(63063),
        S = t(13140),
        g = t(435064),
        h = t(894694),
        C = t(39604),
        I = t(981631),
        N = t(921944),
        x = t(689938),
        Z = t(759041),
        f = t(458623);
      let R = (e) => {
        let {
            clipsEnabled: n,
            isAnimationDone: t,
            guildId: a,
            children: r,
          } = e,
          E = (0, i.e7)([g.Z], () => g.Z.getHardwareClassification()),
          S = E === h.x.MEETS_MINIMUM || E === h.x.UNKNOWN,
          f = E === h.x.BELOW_MINIMUM,
          R = t && (S || f) && !n,
          [A, T] = (0, d.cv)(R ? [o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []),
          v = A === o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
        s.useEffect(() => {
          n &&
            (0, u.EW)(o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
              forceTrack: !0,
            });
        }, [n]);
        let L = (e, n) => {
          e.stopPropagation(),
            e.preventDefault(),
            null == n || n(),
            T(N.L.UNKNOWN);
        };
        return (0, l.jsx)(c.Popout, {
          shouldShow: v,
          position: "right",
          align: "center",
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(m.Z, {
              dismissibleContent: o.z.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
              shouldUseHorizontalButtons: !0,
              inlineArt: !0,
              artClassName: Z.clipsEducationArt,
              position: "right",
              header:
                x.Z.Messages
                  .CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
              headerClassName: Z.clipsEducationHeader,
              body: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    children:
                      x.Z.Messages
                        .CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY,
                  }),
                  f
                    ? (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: Z.warningText,
                        children:
                          x.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format(
                            { url: _.Z.getArticleURL(I.BhN.CLIPS) },
                          ),
                      })
                    : null,
                ],
              }),
              tryItText: x.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
              onTryFeature: (e) => {
                (0, C.em)({ clipsEnabled: !0, guildId: a, trackAnalytics: !0 }),
                  L(e);
              },
              onClose: (e) => {
                L(e, n);
              },
            });
          },
          children: () => r,
        });
      };
      n.Z = function (e) {
        let { isAnimationDone: n, guildId: t } = e,
          s = (0, i.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
          a = (0, i.e7)([E.Z], () => E.Z.getKeybindForAction(I.kg4.SAVE_CLIP));
        r()(null != a, "Clips keybind should be set");
        let o = S.BB(a.shortcut, !0);
        return (0, l.jsx)(c.FormItem, {
          title: x.Z.Messages.CLIPS_SETTINGS,
          titleClassName: f.formItemTitle,
          className: f.modalContent,
          children: (0, l.jsxs)("div", {
            className: Z.container,
            children: [
              (0, l.jsx)(R, {
                clipsEnabled: s,
                guildId: t,
                isAnimationDone: n,
                children: (0, l.jsx)(c.FormSwitch, {
                  className: Z.formSwitch,
                  value: s,
                  onChange: (e) =>
                    (0, C.em)({
                      clipsEnabled: e,
                      guildId: t,
                      trackAnalytics: !0,
                    }),
                  hideBorder: !0,
                  children: x.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                }),
              }),
              (0, l.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "interactive-normal",
                className: Z.description,
                children:
                  x.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
                    keybind: o,
                    keybindHook: () =>
                      (0, l.jsx)("span", {
                        className: Z.keybindHintKeys,
                        children: (0, l.jsx)(c.KeyCombo, {
                          className: Z.keybindShortcut,
                          shortcut: o,
                        }),
                      }),
                  }),
              }),
            ],
          }),
        });
      };
    },
    152708: function (e, n, t) {
      var l,
        s,
        a,
        r = t(735250),
        i = t(470079),
        o = t(120356),
        c = t.n(o),
        u = t(600164),
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
              u.Z.Child,
              { className: d.tile, basis: e, grow: 0, children: n },
              t,
            ),
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsx)(u.Z, {
            className: c()(e, d.grid),
            wrap: u.Z.Wrap.WRAP,
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
        c = t(70722),
        u = t(65154),
        d = t(689938);
      function m() {
        if (!i.Z.supports(u.AN.SOUNDSHARE))
          return a.GO_LIVE_SCREENSHARE_NO_SOUND;
        if (
          (0, o.isWindows)() &&
          !s().satisfies(
            null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release,
            c.I9,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
        if (
          (0, o.isMac)() &&
          !s().satisfies(
            null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release,
            c.Ec,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
        return null;
      }
    },
    586290: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
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
        c = t(856901),
        u = t(442837),
        d = t(481060),
        m = t(131951),
        E = t(537135),
        _ = t(176940),
        S = t(689938),
        g = t(51449),
        h = t(458623),
        C = t(224499);
      function I(e) {
        let {
          selectedSource: n,
          onChangeVideoDeviceSource: t,
          onChangeAudioDevice: a,
        } = e;
        r()(null != n, "Camera capture device cannot be null");
        let i = (0, _.Z)(),
          I = (0, u.e7)([m.Z], () => m.Z.getInputDevices()),
          [N, x] = s.useState(
            (function (e, n, t) {
              if (null != n && null != t) {
                let l = n.find((n) => n.id === e);
                if (null == l) return;
                let s = o().reduce(t, (e, n) =>
                  (0, c.stringSimilarity)(l.name, n.name) >
                  (0, c.stringSimilarity)(l.name, e.name)
                    ? n
                    : e,
                );
                if (null != s) return s.id;
              }
            })(n.id, i, I),
          );
        return (
          null != N && a(N),
          (0, l.jsx)(s.Fragment, {
            children: (0, l.jsxs)(d.FormItem, {
              title: "Capture Device",
              className: h.modalContent,
              children: [
                (0, l.jsx)(d.FormItem, {
                  className: C.marginTop8,
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
                        children: S.Z.Messages.CHANGE,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(d.FormItem, {
                  className: C.marginTop8,
                  title: S.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                  children: (0, l.jsx)(d.SingleSelect, {
                    value: N,
                    className: C.__invalid_marginaTop8,
                    onChange: (e) => {
                      x(e), a(e);
                    },
                    options: o().map(I, (e) => {
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
        c = t(594174),
        u = t(938475),
        d = t(382182),
        m = t(499596),
        E = t(148381),
        _ = t(689938),
        S = t(787422);
      function g(e) {
        let {
            selectedChannelId: n,
            guildId: t,
            onChangeSelectedChannelId: g,
          } = e,
          h = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
          C = (0, s.e7)([i.Z, r.ZP, o.Z], () =>
            (0, d.h_)(r.ZP.getChannels(t), i.Z, o.Z),
          ),
          I = (0, s.e7)([u.ZP], () => u.ZP.getVoiceStates(t)),
          N = C.map((e) => {
            var t;
            return {
              name: (0, l.jsx)(m.Z, {
                channel: e,
                users:
                  null === (t = I[e.id]) || void 0 === t
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
          title: _.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
          scrollerInnerClassName: S.channelSelectScrollerInner,
          children: (0, l.jsx)(a.RadioGroup, {
            options: N,
            value: n,
            itemInfoClassName: S.channelInfoWrapper,
            itemTitleClassName: S.channelTitleWrapper,
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
        c = t(230711),
        u = t(812206),
        d = t(605436),
        m = t(924557),
        E = t(954564),
        _ = t(98131),
        S = t(600164),
        g = t(594190),
        h = t(925329),
        C = t(565138),
        I = t(695346),
        N = t(494620),
        x = t(592125),
        Z = t(650774),
        f = t(430824),
        R = t(131951),
        A = t(944486),
        T = t(594174),
        v = t(449224),
        L = t(626135),
        M = t(823379),
        p = t(63063),
        O = t(358085),
        j = t(653255),
        P = t(989941),
        D = t(618407),
        G = t(586290),
        U = t(233037),
        b = t(810013),
        w = t(537135),
        k = t(641115),
        B = t(143135),
        V = t(70722),
        y = t(981631),
        H = t(526761),
        W = t(689938),
        F = t(85586),
        z = t(458623);
      function K(e) {
        let {
            selectedSource: n,
            selectSource: t,
            sourceChanged: s,
            onChangeSource: a,
          } = e,
          r = (0, i.e7)([g.ZP, v.Z], () =>
            (0, O.isWindows)() ? (0, P.Z)(g.ZP, v.Z) : null,
          ),
          c = (0, i.e7)([u.Z], () =>
            (null == r ? void 0 : r.id) != null
              ? u.Z.getApplication(r.id)
              : null,
          ),
          d = (0, i.e7)([g.ZP], () => g.ZP.getRunningGames()),
          m = (0, i.Wu)(
            [u.Z],
            () =>
              d
                .map((e) => (null != e.id ? u.Z.getApplication(e.id) : null))
                .filter(M.lm),
            [d],
          ),
          E = null;
        if ((null != n ? (E = n.name) : null != r && (E = r.name), null == E))
          return null;
        let _ = (0, B.Z)(r, n, d),
          S = s
            ? m.find((e) => {
                let { id: n } = e;
                return n === (null == _ ? void 0 : _.id);
              })
            : c,
          C =
            null != n && n.id.startsWith("screen")
              ? o.ScreenIcon
              : o.BrowserIcon;
        return (0, l.jsx)(o.FormItem, {
          title: W.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
          className: z.modalContent,
          titleClassName: z.formItemTitleVerySlim,
          children: (0, l.jsxs)(w.Z, {
            children: [
              null != S
                ? (0, l.jsx)(h.Z, {
                    game: S,
                    size: h.Z.Sizes.XSMALL,
                    className: F.selectedIcon,
                  })
                : (0, l.jsx)(C, { className: F.selectedIcon }),
              (0, l.jsx)("span", { className: F.ellipsisText, children: E }),
              t
                ? (0, l.jsx)(o.Button, {
                    className: F.changeButton,
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
      function Y(e) {
        let { onChange: n, guildId: t } = e,
          s = (0, i.e7)([f.Z], () => f.Z.getGuild(t));
        return null == s
          ? (n(), null)
          : (0, l.jsx)(o.FormItem, {
              title: W.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: z.modalContent,
              titleClassName: z.formItemTitle,
              children: (0, l.jsxs)(w.Z, {
                children: [
                  (0, l.jsx)(C.Z, {
                    guild: s,
                    size: C.Z.Sizes.SMALLER,
                    className: F.selectedIcon,
                  }),
                  (0, l.jsx)("span", {
                    className: F.ellipsisText,
                    children: s.toString(),
                  }),
                  (0, l.jsx)(o.Button, {
                    className: F.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: n,
                    children: W.Z.Messages.CHANGE,
                  }),
                ],
              }),
            });
      }
      function Q(e) {
        let { text: n } = e;
        return (0, l.jsxs)(S.Z, {
          align: S.Z.Align.CENTER,
          className: F.warning,
          children: [
            (0, l.jsx)(o.CircleWarningIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: F.warningIcon,
            }),
            (0, l.jsx)(o.Text, {
              color: "none",
              variant: "text-xs/normal",
              children: n,
            }),
          ],
        });
      }
      function X(e) {
        let { guildId: n } = e,
          t = (0, i.e7)([Z.Z], () => {
            var e;
            return null !== (e = Z.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
          }),
          a = I.eo.useSetting(),
          c = s.useCallback((e, n) => {
            I.eo.updateSetting(n),
              L.default.track(y.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
          }, []);
        return t >= 2 && t <= V.tB
          ? (0, l.jsx)(o.FormItem, {
              className: r()(z.modalContent, F.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                value: !!a,
                type: o.Checkbox.Types.INVERTED,
                onChange: c,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    W.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL,
                }),
              }),
            })
          : null;
      }
      function q(e) {
        let { enabled: n, onChange: t, screen: a } = e,
          i = s.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: r()(z.modalContent, F.checkboxRow),
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
      function J(e) {
        let {
            selectedSource: n,
            selectedFPS: t,
            selectedChannelId: a,
            selectedPreset: r,
            selectedResolution: o,
            sourceChanged: u,
            selectedGuildId: S,
            targetGuildPremiumTier: g,
            selectSource: h,
            selectGuild: C,
            sound: I,
            onClose: Z,
            onChangeSelectedFPS: f,
            onChangeSelectedResolution: v,
            onChangeSelectedPreset: L,
            onChangeSelectedChannelId: M,
            onChangeSource: O,
            onChangeAudioDevice: P,
            onChangeGuild: w,
            onChangeSound: B,
            isAnimationDone: V,
          } = e,
          z = (0, i.e7)([A.Z, x.Z], () =>
            x.Z.getChannel(A.Z.getVoiceChannelId()),
          ),
          J = (0, i.e7)([j.Z], () => j.Z.GPUDriversOutdated),
          $ = (0, i.e7)([j.Z], () => j.Z.problematicGPUDriver),
          ee = (0, i.e7)([T.default], () => T.default.getCurrentUser()),
          en = (0, m.Go)(),
          et = (0, m.Zq)({ autoTrackExposure: !en }),
          el = (0, D.Z)();
        null != n &&
          n.id.startsWith("screen") &&
          !R.Z.supportsScreenSoundshare() &&
          (el = W.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
        let es = en
            ? (0, l.jsx)(_.Z, { guildId: S, isAnimationDone: V })
            : et
              ? (0, l.jsx)(E.Z, {})
              : void 0,
          ea = !!(null == n ? void 0 : n.id.startsWith("camera")),
          er = null != ee && ee.verified && !ee.bot,
          ei = null != z && !(0, d.Yk)(z),
          eo = !(0, i.e7)([R.Z], () => R.Z.getHardwareH264());
        return (0, l.jsxs)(s.Fragment, {
          children: [
            ea
              ? (0, l.jsx)(G.Z, {
                  selectedSource: n,
                  onChangeVideoDeviceSource: O,
                  onChangeAudioDevice: P,
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(K, {
                      selectSource: h,
                      sourceChanged: u,
                      onChangeSource: O,
                      selectedSource: n,
                    }),
                    null != el ? (0, l.jsx)(Q, { text: el }) : null,
                    null != n && null == el
                      ? (0, l.jsx)(q, {
                          enabled: I,
                          onChange: B,
                          screen: n.id.startsWith("screen"),
                        })
                      : null,
                  ],
                }),
            C && null != S ? (0, l.jsx)(Y, { guildId: S, onChange: w }) : null,
            null != z
              ? (0, l.jsx)(b.Z, { channel: z })
              : (0, l.jsx)(U.Z, {
                  guildId: S,
                  selectedChannelId: a,
                  onChangeSelectedChannelId: M,
                }),
            null != S && er && ei ? (0, l.jsx)(X, { guildId: S }) : null,
            J
              ? (0, l.jsx)(Q, {
                  text: W.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED,
                })
              : null,
            $
              ? (0, l.jsx)(Q, {
                  text: W.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                    helpCenterLink: p.Z.getArticleURL(
                      y.BhN.NVIDIA_DRIVER_ISSUES,
                    ),
                  }),
                })
              : null,
            eo &&
              (0, l.jsx)(N.Z, {
                look: N.z.WARNING,
                className: F.hardwareWarning,
                children:
                  W.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                    onClick: () => {
                      Z(),
                        c.Z.open(y.oAB.VOICE, null, {
                          scrollPosition:
                            H.KQ.VoiceAndVideoScrollPositions
                              .HARDWARE_ACCELERATION,
                        });
                    },
                  }),
              }),
            (0, l.jsx)(k.Z, {
              selectedPreset: r,
              selectedFPS: t,
              selectedResolution: o,
              targetGuildPremiumTier: g,
              onClose: Z,
              onFPSChange: f,
              onResolutionChange: v,
              onPresetChange: L,
              captureDeviceSelected: ea,
            }),
            es,
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
        c = t(537135),
        u = t(689938),
        d = t(458623);
      function m(e) {
        let { channel: n } = e,
          t = (0, s.e7)([r.default], () => r.default.getId()),
          m = (0, s.e7)([i.ZP], () => i.ZP.getVoiceStatesForChannel(n), [n]);
        return (0, l.jsx)(a.FormItem, {
          title: u.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
          className: d.modalContent,
          titleClassName: d.formItemTitle,
          children: (0, l.jsx)(c.Z, {
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
            return F;
          },
        }),
        t(47120);
      var l,
        s,
        a = t(735250),
        r = t(470079),
        i = t(512722),
        o = t.n(i),
        c = t(567526),
        u = t(442837),
        d = t(481060),
        m = t(668781),
        E = t(287734),
        _ = t(872810),
        S = t(410575),
        g = t(812206),
        h = t(600164),
        C = t(313201),
        I = t(594190),
        N = t(998594),
        x = t(751571),
        Z = t(361291),
        f = t(592125),
        R = t(430824),
        A = t(131951),
        T = t(944486),
        v = t(594174),
        L = t(449224),
        M = t(626135),
        p = t(358085),
        O = t(998502),
        j = t(451467),
        P = t(537413),
        D = t(960861),
        G = t(989941),
        U = t(399299),
        b = t(351152),
        w = t(567126),
        k = t(143135),
        B = t(37113),
        V = t(981631),
        y = t(761274),
        H = t(689938),
        W = t(458623);
      ((s = l || (l = {}))[(s.GUILD = 0)] = "GUILD"),
        (s[(s.NATIVE_PICKER_SOURCE = 1)] = "NATIVE_PICKER_SOURCE"),
        (s[(s.SOURCE = 2)] = "SOURCE"),
        (s[(s.CONFIRM = 3)] = "CONFIRM");
      function F(e) {
        var n, l, s, i, F, z;
        let {
            selectGuild: K = !1,
            selectSource: Y = !0,
            guildId: Q,
            analyticsLocation: X,
            onClose: q,
            transitionState: J,
          } = e,
          {
            preset: $,
            resolution: ee,
            fps: en,
            soundshareEnabled: et,
          } = (0, u.cj)([Z.Z], () => Z.Z.getState()),
          el = (0, u.e7)([T.Z, f.Z], () =>
            f.Z.getChannel(T.Z.getVoiceChannelId()),
          ),
          es = (0, u.e7)([I.ZP, L.Z], () =>
            (0, p.isWindows)() ? (0, G.Z)(I.ZP, L.Z) : null,
          ),
          ea = (0, u.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return o()(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          er =
            null !== (n = null == el ? void 0 : el.getGuildId()) && void 0 !== n
              ? n
              : Q,
          ei = (0, u.e7)([R.Z], () => {
            var e;
            return null != er
              ? null === (e = R.Z.getGuild(er)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [eo, ec] =
            null !== (l = (0, P.Z)($, ea, ei)) && void 0 !== l
              ? l
              : [B.LY.RESOLUTION_720, B.ws.FPS_30],
          eu = (0, u.e7)([D.ZP], () => D.ZP.supported()),
          { lastPickerAction: ed, lastPickerError: em } = (0, u.e7)(
            [D.ZP],
            () => D.ZP.getPickerState(),
          ),
          eE = N.Z.useExperiment(
            { location: "GoLiveModal" },
            { disable: !eu, autoTrackExposure: !0 },
          ).enableSystemPicker;
        (0, D.UB)(),
          $ !== B.tI.PRESET_CUSTOM && ((ee = eo), (en = ec)),
          !(0, j.Z)($, ee, en, ea, ei) && ((ee = eo), (en = ec));
        let e_ = (0, C.Dt)();
        let [eS, eg] = r.useState(((F = K), (z = Y), F ? 0 : z ? 2 : 3)),
          [eh, eC] = r.useState(null),
          [eI, eN] = r.useState(!1),
          [ex, eZ] = r.useState(null),
          [ef, eR] = r.useState(null),
          [eA, eT] = r.useState(null),
          [ev, eL] = r.useState($),
          [eM, ep] = r.useState(ee),
          [eO, ej] = r.useState(en),
          [eP, eD] = r.useState(et),
          [eG, eU] = r.useState(null != Q ? Q : null),
          eb =
            null !== (s = null == el ? void 0 : el.id) && void 0 !== s ? s : ex;
        r.useEffect(() => {
          let e = (0, p.isWindows)() ? (0, G.Z)(I.ZP, L.Z) : null,
            n =
              (null == e ? void 0 : e.id) != null
                ? g.Z.getApplication(e.id)
                : null;
          M.default.track(V.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: X,
          });
        }, [X]);
        function ew() {
          !(function () {
            var e, n;
            o()(null != es || null != ef, "got nothing to stream");
            let t =
              null !== (e = null == el ? void 0 : el.id) && void 0 !== e
                ? e
                : ex;
            o()(null != t, "Received null target channel ID");
            let l = f.Z.getChannel(t),
              s =
                null !== (n = null == l ? void 0 : l.getGuildId()) &&
                void 0 !== n
                  ? n
                  : Q;
            null == el && E.default.selectVoiceChannel(t);
            let a = ev,
              r = eM,
              i = eO;
            !(0, j.Z)(a, r, i, ea, ei) &&
              ((a = B.tI.PRESET_VIDEO),
              (r = B.LY.RESOLUTION_720),
              (i = B.ws.FPS_30)),
              (0, _.Rc)({
                preset: a,
                resolution: r,
                frameRate: i,
                soundshareEnabled: eP,
              });
            let c = (0, k.Z)(es, ef, I.ZP.getRunningGames()),
              u =
                !(0, p.isWindows)() ||
                null == c ||
                (null == ef ? void 0 : ef.id.startsWith("camera:")) ||
                null == c
                  ? null
                  : c.pid;
            (0, _.WH)(s, t, {
              pid: u,
              sourceId: null == u && null != ef ? ef.id : null,
              sourceName: null == u && null != ef ? ef.name : null,
              audioSourceId: eA,
              sound: eP,
            }),
              !eE &&
                (async () => {
                  !(await x.Z.hasPermission(y.Eu.SCREEN_RECORDING, {
                    showAuthorizationError: !1,
                  })) &&
                    m.Z.show({
                      title:
                        H.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                      body: H.Z.Messages
                        .WARNING_SCREEN_RECORDING_PERMISSION_BODY,
                    });
                })();
          })(),
            q();
        }
        let ek = r.useCallback(
          (e, n, t) => {
            let l = (0, P.Z)(e, ea, ei),
              [s, a] = null != l ? l : [n, t];
            if ((e !== ev && ((n = s), (t = a)), !(0, j.Z)(e, n, t, ea, ei))) {
              let [e, l] = (0, P.Z)(B.tI.PRESET_VIDEO, ea, ei);
              (n = e), (t = l);
            }
            t !== eO && ej(t),
              n !== eM && ep(n),
              s !== n || a !== t ? eL(B.tI.PRESET_CUSTOM) : e !== ev && eL(e);
          },
          [ea, ei, eO, eM, ev],
        );
        async function eB(e) {
          var n, l, s;
          if ((e.preventDefault(), 2 === eS || 1 === eS)) return eg(3);
          let r = (0, k.Z)(es, ef, I.ZP.getRunningGames()),
            i =
              O.ZP.supportsFeature(V.eRX.ELEVATED_HOOK) &&
              (null == r ? void 0 : r.elevated);
          if (
            (0, p.isMac)() &&
            null != ef &&
            (null === (n = ef.id) || void 0 === n
              ? void 0
              : n.startsWith("screen"))
          ) {
            let e = await A.Z.getMediaEngine().getDesktopSources(),
              n = ef.id;
            if (e.length > 0 && !e.some((e) => e.includes(n))) {
              (l = n),
                (s = e),
                M.default.track(V.rMx.SCREENSHARE_FAILED, {
                  source_id: l,
                  screens: s.length,
                }),
                (0, d.openModal)((e) =>
                  (0, a.jsx)(d.ConfirmModal, {
                    header: H.Z.Messages.SCREENSHARE_RELAUNCH,
                    confirmText: H.Z.Messages.OKAY,
                    cancelText: H.Z.Messages.CANCEL,
                    onConfirm: () => O.ZP.relaunch(),
                    ...e,
                    children: (0, a.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: H.Z.Messages.SCREENSHARE_RELAUNCH_BODY,
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
                  null !== (e = null == es ? void 0 : es.pid) && void 0 !== e
                    ? e
                    : null;
                (0, d.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("74300")
                    .then(t.bind(t, 566852));
                  return (t) =>
                    (0, a.jsx)(e, { ...t, handleStream: ew, pid: n });
                });
              })()
            : ew();
        }
        let [eV, ey] = r.useState(void 0),
          eH = r.useCallback(
            (e) => {
              D.ZP.releasePickerStream(),
                D.ZP.presentPicker(null != e ? e : eV);
            },
            [eV],
          ),
          eW = r.useCallback(
            (e) => {
              if ((eR(e), null != e)) {
                if (
                  eE &&
                  (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                ) {
                  let n = e.id.split(":")[1];
                  ey(n), eH(n), eg(1);
                } else eg(3);
                eN(!0);
              }
            },
            [eE, eH],
          ),
          eF = r.useCallback(
            (e) => {
              eU(e);
              var n = 3;
              eg((n = Y ? 2 : 3));
            },
            [Y],
          );
        1 === eS &&
          eE &&
          (ed === D.Uc.Update ? eg(3) : ed === D.Uc.Cancel && eg(2));
        let ez = !(1 === eS && eE && ed === D.Uc.Error),
          eK = (function (e) {
            switch (e) {
              case 2:
              case 1:
                return H.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
              case 3:
                return null;
              default:
                return H.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
          })(eS),
          eY = (0, a.jsx)(d.ModalHeader, {
            className: W.modalHeader,
            separator: !1,
            children: (0, a.jsxs)(h.Z, {
              direction: h.Z.Direction.VERTICAL,
              align: h.Z.Align.CENTER,
              className: W.header,
              children: [
                (0, a.jsx)(d.Heading, {
                  variant: "heading-xl/semibold",
                  id: e_,
                  className: W.headerText,
                  children: H.Z.Messages.GO_LIVE_MODAL_TITLE,
                }),
                ez && null != eK
                  ? (0, a.jsx)(d.Text, {
                      className: W.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: eK,
                    })
                  : null,
              ],
            }),
          }),
          eQ = r.useCallback(() => {
            eE && D.ZP.releasePickerStream(), eg(2);
          }, [eg, eE]),
          eX = (0, a.jsxs)(d.Slides, {
            springConfig: { ...c.config.stiff, clamp: !0 },
            activeSlide: eS,
            width: 480,
            onSlideReady: eC,
            children: [
              (0, a.jsx)(d.Slide, {
                id: 0,
                children: (0, a.jsx)("div", {
                  className: W.modalSize,
                  children: (0, a.jsx)(b.Z, { onSelectGuild: eF }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 2,
                children: (0, a.jsx)("div", {
                  className: W.modalSize,
                  children: eE
                    ? (0, a.jsx)(w.H, { onSourceSelect: eW })
                    : (0, a.jsx)(w.o, {
                        selectedSource: ef,
                        onChangeSelectedSource: eW,
                      }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 1,
                children: (0, a.jsx)("div", {
                  className: W.modalSize,
                  children:
                    ed === D.Uc.Error
                      ? (0, a.jsx)(d.Text, {
                          className: W.errorMessage,
                          variant: "text-md/normal",
                          color: "text-danger",
                          children:
                            null != em && em.length > 0
                              ? em
                              : H.Z.Messages.ERROR_ANOTHER_TRY,
                        })
                      : (0, a.jsx)("div", { className: W.nativePickerSpacing }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 3,
                children: (0, a.jsx)("div", {
                  className: W.modalSize,
                  children: (0, a.jsx)(U.Z, {
                    selectedChannelId:
                      null !== (i = null == el ? void 0 : el.id) && void 0 !== i
                        ? i
                        : ex,
                    selectedPreset: ev,
                    selectedResolution: eM,
                    selectedSource: ef,
                    selectedFPS: eO,
                    sound: eP,
                    sourceChanged: eI,
                    selectSource: Y,
                    onChangeSelectedFPS: (e) => ek(ev, eM, e),
                    onChangeSelectedResolution: (e) => ek(ev, e, eO),
                    onChangeSelectedPreset: (e) => ek(e, eM, eO),
                    onChangeSelectedChannelId: eZ,
                    onChangeSelectedSource: eW,
                    onChangeSource: () => eQ(),
                    onChangeAudioDevice: (e) => eT(e),
                    onChangeGuild: () => eg(0),
                    onChangeSound: (e) => eD(e),
                    onClose: q,
                    selectedGuildId: eG,
                    targetGuildPremiumTier: ei,
                    selectGuild: K,
                    isAnimationDone:
                      3 === eh && J === d.ModalTransitionState.ENTERED,
                  }),
                }),
              }),
            ],
          }),
          eq = (function (e, n, t, l) {
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
          })(eS, K, Y, eI),
          eJ = 3 !== eS || (null == ef && null == es) || null == eb,
          e$ = r.useCallback(() => {
            null != eq && (D.ZP.releasePickerStream(), eg(eq));
          }, [eg, eq]),
          e0 = (0, a.jsxs)(d.ModalFooter, {
            justify: null == eq ? h.Z.Justify.START : h.Z.Justify.BETWEEN,
            children: [
              (0, a.jsx)(d.Button, {
                type: "submit",
                size: d.Button.Sizes.SMALL,
                disabled: eJ,
                autoFocus: !0,
                children: H.Z.Messages.GO_LIVE_MODAL_CTA,
              }),
              eE && 1 === eS
                ? (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: () => eH(),
                    children: H.Z.Messages.RETRY,
                  })
                : null,
              null == eq
                ? (0, a.jsx)(d.Button, {
                    className: W.cancelButton,
                    look: d.Button.Looks.LINK,
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: q,
                    children: H.Z.Messages.CANCEL,
                  })
                : (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: e$,
                    children: H.Z.Messages.BACK,
                  }),
            ],
          });
        return (0, a.jsx)(S.Z, {
          page: V.ZY5.GO_LIVE_MODAL,
          children: (0, a.jsxs)(d.ModalRoot, {
            "aria-labelledby": e_,
            transitionState: J,
            size: d.ModalSize.DYNAMIC,
            className: W.modalSize,
            children: [
              (0, a.jsx)(d.ModalCloseButton, {
                onClick: q,
                className: W.modalCloseButton,
              }),
              (0, a.jsx)("div", { className: W.art }),
              (0, a.jsxs)("form", { onSubmit: eB, children: [eY, eX, e0] }),
            ],
          }),
        });
      }
    },
    351152: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
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
        c = t(481060),
        u = t(565138),
        d = t(984933),
        m = t(430824),
        E = t(496675),
        _ = t(771845),
        S = t(259580),
        g = t(382182),
        h = t(148381),
        C = t(689938),
        I = t(458623),
        N = t(544347);
      function x(e) {
        let { guildId: n, onClick: t } = e,
          s = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
          a = (0, o.e7)([d.ZP, m.Z, E.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
              let { channel: n } = e;
              return (0, g.JL)(n, m.Z, E.Z);
            }),
          );
        return null != s && a
          ? (0, l.jsxs)(c.Clickable, {
              onClick: () => t(n),
              className: N.guildRow,
              children: [
                (0, l.jsx)(u.Z, {
                  guild: s,
                  size: u.Z.Sizes.SMALL,
                  className: N.guildIcon,
                }),
                (0, l.jsx)(c.Text, {
                  variant: "text-md/normal",
                  className: N.guildName,
                  children: s.toString(),
                }),
                (0, l.jsx)(S.Z, {
                  direction: S.Z.Directions.RIGHT,
                  className: N.guildArrow,
                }),
              ],
            })
          : null;
      }
      function Z(e) {
        let { onSelectGuild: n } = e,
          t = (0, o.e7)([_.ZP], () => _.ZP.getGuildFolders());
        return (0, l.jsx)(h.Z, {
          title: C.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
          scrollerClassName: a()(N.guildScroller, I.marginBottom),
          children: i().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) => (0, l.jsx)(x, { guildId: e, onClick: n }, e));
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
        c = t(471445),
        u = t(5192),
        d = t(689938),
        m = t(640436);
      function E(e) {
        let { channel: n, users: t, selected: s = !1 } = e,
          E = (0, o.ZP)(n),
          _ = null;
        null != t &&
          t.length > 0 &&
          (_ = (0, l.jsx)(i.Z, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: t,
            renderUser: (e) => {
              if (null == e) return null;
              let t = u.ZP.getName(n.guild_id, n.id, e),
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
                        nickname0: u.ZP.getName(l, t, e[0]),
                        nickname1: u.ZP.getName(l, t, e[1]),
                      })
                    : 3 === e.length
                      ? d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                          nickname0: u.ZP.getName(l, t, e[0]),
                          nickname1: u.ZP.getName(l, t, e[1]),
                          nickname2: u.ZP.getName(l, t, e[2]),
                        })
                      : d.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format(
                          {
                            nickname0: u.ZP.getName(l, t, e[0]),
                            nickname1: u.ZP.getName(l, t, e[1]),
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
        let S = (0, c.KS)(n);
        return (0, l.jsxs)("div", {
          className: a()(m.channelInfo, { [m.selected]: s }),
          children: [
            (0, l.jsx)(S, { className: m.channelIcon }),
            (0, l.jsx)("div", { className: m.channelName, children: E }),
            _,
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
        c = t(458623),
        u = t(523022);
      function d(e) {
        let {
            title: n,
            scrollerClassName: t,
            scrollerInnerClassName: a,
            children: d,
          } = e,
          m = s.useRef(null),
          [E, _] = s.useState(!1),
          [S, g] = s.useState(!1),
          h = s.useCallback(() => {
            let { current: e } = m;
            null != e && (_(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
          }, []);
        return (
          s.useLayoutEffect(() => h(), []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: r()(u.title, u.scrollWrapper),
                children: [
                  (0, l.jsx)(i.FormTitle, {
                    className: c.formItemTitle,
                    children: n,
                  }),
                  (0, l.jsx)(o.Z, { separator: E }),
                ],
              }),
              (0, l.jsx)("div", {
                className: t,
                children: (0, l.jsx)(i.AdvancedScroller, {
                  ref: m,
                  className: r()(u.scrollerInner, a, {
                    [u.bottomSeparator]: S,
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
        c = t(442837),
        u = t(141038),
        d = t(846519),
        m = t(481060),
        E = t(224706),
        _ = t(600164),
        S = t(152708),
        g = t(594190),
        h = t(569984),
        C = t(918701),
        I = t(977156),
        N = t(28798),
        x = t(131951),
        Z = t(449224),
        f = t(358085),
        R = t(463727),
        A = t(855403),
        T = t(989941),
        v = t(958707),
        L = t(133179),
        M = t(46140),
        p = t(65154),
        O = t(689938),
        j = t(624743);
      async function P() {
        let e = x.Z.getVideoDevices(),
          n = (0, u.Z)(x.Z.getMediaEngine(), [o.vA.WINDOW, o.vA.SCREEN], {
            width: 176,
            height: 99,
          }),
          t = D(),
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
          c = [
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
                s = c[n % c.length],
                a = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                r = (0, i.xS)(a);
              return { id: "camera:" + l.id, name: l.name, url: r };
            }),
        };
      }
      async function D() {
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
        let n = (0, f.isWindows)() ? (0, T.Z)(g.ZP, Z.Z) : null,
          t = g.ZP.getRunningGames();
        return null != n && (0, A.Z)(e.id, n.windowHandle)
          ? 2
          : null != t.find((n) => (0, A.Z)(e.id, n.windowHandle))
            ? 1
            : 0;
      }
      function U(e) {
        let { selectedSource: n, onChangeSelectedSource: t } = e,
          { enableGoLiveCaptureCard: a } = R.Z.useExperiment({
            location: "GoLive_Source_Select",
          }),
          i = x.Z.supports(p.AN.GO_LIVE_HARDWARE),
          [u, E] = s.useState(null),
          [Z, f] = s.useState(null),
          [T, D] = s.useState(null),
          U = null != T && T.length > 0,
          [b, w] = s.useState(o.vA.WINDOW),
          [k, B] = s.useState(!1),
          V = s.useRef(null),
          y = s.useRef(new d.Xp()),
          H = (0, c.e7)([g.ZP], () => g.ZP.getRunningGames()),
          W = (function (e, n, t) {
            let l = (0, I.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
              if (null == t || !l) return null;
              for (let l of t) {
                var s, a;
                let t = n.find((e) => (0, A.Z)(l.id, e.windowHandle));
                if ((null == t ? void 0 : t.id) == null) continue;
                let r = (0, C.lQ)(e, t.id);
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
            (0, c.e7)([h.Z], () => h.Z.quests),
            H,
            Z,
          ),
          F = s.useMemo(
            () =>
              null == Z
                ? null
                : [...Z].sort((e, n) =>
                    (null == W ? void 0 : W.source.id) === e.id
                      ? -1
                      : (null == W ? void 0 : W.source.id) === n.id
                        ? 1
                        : G(n) - G(e),
                  ),
            [W, Z],
          );
        s.useEffect(() => {
          let e = y.current;
          return (
            P().then((e) => {
              let { screenSources: n, windowSources: t, cameraSources: l } = e;
              E(n), f(t), D(l);
            }),
            e.start(1e3, async () => {
              let {
                screenSources: e,
                windowSources: n,
                cameraSources: t,
              } = await P();
              E(e), f(n), D(t);
            }),
            () => {
              e.stop();
            }
          );
        }, []);
        let z = s.useCallback((e) => {
            null !== e && ((V.current = e), B(!e.isScrolledToTop()));
          }, []),
          K = (function (e) {
            switch (e) {
              case o.vA.WINDOW:
                return F;
              case o.vA.SCREEN:
                return u;
              case o.vA.CAMERA:
                return T;
            }
          })(b);
        if (null == K)
          return (0, l.jsx)(_.Z, {
            className: j.spinner,
            justify: _.Z.Justify.CENTER,
            align: _.Z.Align.CENTER,
            children: (0, l.jsx)(m.Spinner, {}),
          });
        let Y = K.map((e) => {
          let { id: s } = e,
            a = (null == n ? void 0 : n.id) === s;
          return (0, l.jsx)(
            m.Clickable,
            {
              className: r()(j.tile, { [j.selected]: a }),
              onClick: () => t(e, null),
              children: (0, l.jsx)(L.Z, { source: e, selectedSource: n }, e.id),
            },
            s,
          );
        });
        function Q() {
          let e = V.current;
          null != e && B(!e.isScrolledToTop());
        }
        return (0, l.jsxs)(s.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: j.segmentContainer,
              children: [
                (0, l.jsx)(v.Z, { separator: k }),
                (0, l.jsx)(m.SegmentedControl, {
                  options: (function () {
                    let e = [
                      {
                        name: O.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                        value: o.vA.WINDOW,
                      },
                      {
                        name: O.Z.Messages.GO_LIVE_MODAL_SCREENS,
                        value: o.vA.SCREEN,
                      },
                    ];
                    return (
                      a &&
                        i &&
                        U &&
                        e.push({
                          name: O.Z.Messages.GO_LIVE_MODAL_CAPTURE,
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
                  className: j.segmentControl,
                  optionClassName: j.segmentControlOption,
                }),
              ],
            }),
            b === o.vA.CAMERA
              ? (0, l.jsx)("div", {
                  className: j.sourceContainer,
                  children: (0, l.jsx)(m.AdvancedScroller, {
                    ref: z,
                    className: j.sourceScroller,
                    onScroll: Q,
                    children: (0, l.jsx)(S.Z, {
                      layout: S.Z.Layout.WRAP,
                      columns: 2,
                      className: j.sourceContainer,
                      children: Y,
                    }),
                  }),
                })
              : (0, l.jsxs)(m.AdvancedScroller, {
                  ref: z,
                  className: j.sourceScroller,
                  onScroll: Q,
                  children: [
                    b === o.vA.WINDOW &&
                      null != W &&
                      (0, l.jsx)(N.Z, { quest: W.quest }),
                    (0, l.jsx)(S.Z, {
                      layout: S.Z.Layout.WRAP,
                      columns: 2,
                      className: j.sourceContainer,
                      children: Y,
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
              "prepicked:window": O.Z.Messages.GO_LIVE_MODAL_WINDOW,
              "prepicked:screen": O.Z.Messages.GO_LIVE_MODAL_SCREEN,
            }),
            [],
          ),
          [a, i] = s.useState([]),
          [o, c] = s.useState(t),
          u = s.useRef(new d.Xp());
        s.useEffect(() => {
          let e = u.current,
            n = () => {
              let e = Object.entries(x.Z.getVideoDevices()).filter((e) => {
                let [n, t] = e;
                return !t.disabled;
              });
              i(e),
                c({
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
          _ = s.useCallback(
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
            "prepicked:window": O.Z.Messages.GO_LIVE_MODAL_WINDOW,
            "prepicked:screen": O.Z.Messages.GO_LIVE_MODAL_SCREEN,
            ...a,
          }),
          (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(m.RadioGroup, {
                className: j.nativePickerContainer,
                onChange: _,
                options: [
                  {
                    name: O.Z.Messages.GO_LIVE_MODAL_WINDOW,
                    value: "prepicked:window",
                    icon: m.BrowserIcon,
                    radioItemIconClassName: r()(j.hideRadioCheckbox),
                  },
                  {
                    name: O.Z.Messages.GO_LIVE_MODAL_SCREEN,
                    value: "prepicked:screen",
                    icon: m.ScreenIcon,
                    radioItemIconClassName: r()(j.hideRadioCheckbox),
                  },
                ],
              }),
              0 === a.length
                ? null
                : (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(m.Text, {
                        className: j.nativePickerLabel,
                        variant: "text-sm/bold",
                        color: "interactive-normal",
                        children: O.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                      }),
                      (0, l.jsx)(m.RadioGroup, {
                        className: j.nativePickerContainer,
                        onChange: _,
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
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(481060),
        i = t(600164),
        o = t(624743);
      function c(e) {
        let { source: n, selectedSource: t } = e,
          { id: s, name: c, url: u } = n,
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
                  style: { backgroundImage: "url(".concat(u, ")") },
                  className: a()(o.sourceThumbnail, { [o.selected]: d }),
                }),
              }),
              (0, l.jsx)(r.Text, {
                className: a()(o.sourceName, { [o.selected]: d }),
                variant: "text-sm/normal",
                children: c,
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
        c = t(848246),
        u = t(442837),
        d = t(481060),
        m = t(410575),
        E = t(2052),
        _ = t(924557),
        S = t(600164),
        g = t(436774),
        h = t(933843),
        C = t(1163),
        I = t(594174),
        N = t(74538),
        x = t(451467),
        Z = t(122186),
        f = t(37113),
        R = t(981631),
        A = t(474936),
        T = t(689938),
        v = t(458623),
        L = t(782765),
        M = t(224499);
      function p(e) {
        let { analyticsLocation: n, onClose: s } = e;
        (0, d.openModalLazy)(async () => {
          let { default: e } = await t.e("28479").then(t.bind(t, 78865));
          return (t) =>
            (0, l.jsx)(e, { ...t, onCloseParent: s, analyticsSource: n });
        });
      }
      function O() {
        return (0, l.jsxs)("div", {
          className: L.toolTipTextContainer,
          children: [
            (0, l.jsx)(d.NitroWheelIcon, {
              size: "md",
              color: g.JX.PREMIUM_TIER_2,
              className: r()(L.premiumIcon),
            }),
            (0, l.jsx)(d.Text, {
              className: L.upsellText,
              variant: "text-sm/medium",
              children: T.Z.Messages.UNLOCK_WITH_NITRO,
            }),
          ],
        });
      }
      function j(e) {
        let n,
          t,
          {
            type: s,
            selected: a,
            needsPremium: i,
            needsDemo: o,
            analyticsLocation: c,
            onClick: u,
            onClose: m,
            setIsHovering: E,
          } = e,
          { value: _, label: S } = s;
        return (
          i
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                tooltipClassName: L.tooltip,
                spacing: 6,
                "aria-label": T.Z.Messages.UNLOCK_WITH_NITRO,
                text: (0, l.jsx)(O, {}),
                children: (0, l.jsx)("div", {
                  className: L.textContainer,
                  onMouseEnter: () => E(!0),
                  onMouseLeave: () => E(!1),
                  children: (0, l.jsx)(d.Text, {
                    variant: "text-xs/bold",
                    className: r()(
                      L.selectorNitroText,
                      L.enhancedSelectorNitroText,
                    ),
                    children: S,
                  }),
                }),
              })),
              (t = () => p({ analyticsLocation: c, onClose: m })))
            : ((n = (0, l.jsx)("div", {
                className: L.textContainer,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  className: r()(L.selectorText, {
                    [L.enhancedSelectorNitroText]: o,
                  }),
                  children: S,
                }),
              })),
              (t = () => u(_))),
          {
            content: n,
            className: r()(L.selectorButton, {
              [L.selectorButtonSelected]: a,
              [L.perksDemo]: o,
              [L.premiumUpsell]: i,
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
            captureDeviceSelected: D,
          } = e,
          G = (0, u.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return (
              o()(null != e, "StreamSettings: user cannot be undefined"), e
            );
          }),
          U = N.ZP.canStreamQuality(N.U2.MID, G),
          { location: b } = (0, E.O)(),
          w = (0, _.Zq)({ autoTrackExposure: !1 }),
          k = (0, N.I5)(G, A.p9.TIER_1);
        C.Z.useExperiment(
          { location: "Go Live Modal" },
          { autoTrackExposure: !0, disable: k },
        );
        let B = (0, h.So)(c.q.STREAM_HIGH_QUALITY),
          V = (!U && !w) || B,
          [y, H] = s.useState(!1),
          W = D ? f.z8 : f.WC,
          F = { ...b, section: R.jXE.STREAM_SETTINGS },
          z = (0, l.jsx)(d.ButtonGroup, {
            buttons: W.map((e) =>
              j({
                type: e,
                selected: e.value === a,
                needsPremium: !(0, x.Z)(t, e.value, r, G, P),
                needsDemo: B && e.value !== f.LY.RESOLUTION_720,
                analyticsLocation: F,
                onClick: () => i(e.value),
                onClose: n,
                setIsHovering: H,
              }),
            ),
          }),
          K = (0, l.jsx)(d.ButtonGroup, {
            buttons: f.k0.map((e) =>
              j({
                type: e,
                selected: e.value === r,
                needsPremium: !(0, x.Z)(t, a, e.value, G, P),
                needsDemo: B && e.value === f.ws.FPS_60,
                analyticsLocation: F,
                onClick: () => g(e.value),
                onClose: n,
                setIsHovering: H,
              }),
            ),
          }),
          Y = [
            {
              value: f.tI.PRESET_VIDEO,
              label: T.Z.Messages.STREAM_PRESET_VIDEO,
            },
            ...(D
              ? []
              : [
                  {
                    value: f.tI.PRESET_DOCUMENTS,
                    label: T.Z.Messages.STREAM_PRESET_DOCUMENTS,
                  },
                ]),
            {
              value: f.tI.PRESET_CUSTOM,
              label: T.Z.Messages.STREAM_PRESET_CUSTOM,
            },
          ],
          Q =
            t === f.tI.PRESET_DOCUMENTS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(S.Z, {
                      children: (0, l.jsx)(d.FormItem, {
                        title: T.Z.Messages.STREAM_RESOLUTION,
                        titleClassName: v.formItemTitleSlim,
                        className: L.documentModeGroup,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          children:
                            T.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format(
                              { fps: r },
                            ),
                        }),
                      }),
                    }),
                    V
                      ? (0, l.jsx)(Z.Z, {
                          message:
                            T.Z.Messages
                              .STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                          onClose: n,
                          openStreamUpsellModal: p,
                        })
                      : null,
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(S.Z, {
                      children: [
                        (0, l.jsx)(d.FormItem, {
                          title: T.Z.Messages.STREAM_RESOLUTION,
                          className: L.settingsGroup,
                          titleClassName: v.formItemTitleSlim,
                          children: z,
                        }),
                        (0, l.jsx)(d.FormItem, {
                          title: T.Z.Messages.SCREENSHARE_FRAME_RATE,
                          className: L.settingsGroup,
                          titleClassName: v.formItemTitleSlim,
                          children: K,
                        }),
                      ],
                    }),
                    V
                      ? (0, l.jsx)(Z.Z, {
                          onClose: n,
                          openStreamUpsellModal: p,
                          glow: y,
                        })
                      : null,
                  ],
                });
        return (0, l.jsx)(m.Z, {
          ...F,
          children: (0, l.jsx)(d.FormItem, {
            title: T.Z.Messages.STREAM_QUALITY,
            titleClassName: v.formItemTitle,
            className: v.modalContent,
            children: (0, l.jsxs)("div", {
              className: L.qualitySettingsContainer,
              children: [
                (0, l.jsx)(d.SingleSelect, {
                  value: t,
                  className: M.marginTop8,
                  options: Y,
                  onChange: (e) => O(e),
                }),
                Q,
              ],
            }),
          }),
        });
      }
    },
    122186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        r = t(848246),
        i = t(481060),
        o = t(436774),
        c = t(933843),
        u = t(1163),
        d = t(846401),
        m = t(197115),
        E = t(981631),
        _ = t(474936),
        S = t(689938),
        g = t(304095);
      function h(e) {
        let { location: n, ...t } = e;
        return (0, l.jsx)(m.Z, {
          className: a()(g.enhancedCTA, g.ctaGradientBackground),
          iconClassName: g.premiumIcon,
          subscriptionTier: _.Si.TIER_2,
          buttonText: S.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
          size: i.Button.Sizes.TINY,
          premiumModalAnalyticsLocation: n,
          ...t,
        });
      }
      function C() {
        let e = (0, d.Z)();
        return (0, l.jsxs)("div", {
          className: g.extendedDemoContainer,
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: g.extendedDemoContainer,
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-xs/bold",
                      color: "status-warning",
                      className: g.extendedDemoDurationText,
                      children: e.toUpperCase(),
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-xs/bold",
                      children:
                        S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase(),
                    }),
                  ],
                }),
                (0, l.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  children:
                    S.Z.Messages
                      .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY,
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: g.extendedDemoButton,
              children: (0, l.jsx)(h, { size: i.Button.Sizes.SMALL }),
            }),
          ],
        });
      }
      function I(e) {
        let {
            message: n,
            onClose: t,
            openStreamUpsellModal: s,
            glow: d = !1,
          } = e,
          m = {
            section: E.jXE.STREAM_SETTINGS,
            object: E.qAy.PREMIUM_UPSELL_BANNER,
            objectType: E.Qqv.BUY,
          },
          _ = (0, c.So)(r.q.STREAM_HIGH_QUALITY),
          I = u.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration;
        return (0, l.jsx)("div", {
          className: a()(g.upsellBanner, g.enhancedBanner, {
            [g.gradientGlow]: d,
          }),
          children:
            _ && I
              ? (0, l.jsx)(C, {})
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: g.iconTextContainer,
                      children: [
                        (0, l.jsx)(i.NitroWheelIcon, {
                          size: "md",
                          color: o.JX.PREMIUM_TIER_2,
                        }),
                        (0, l.jsx)(i.Text, {
                          variant: "text-sm/medium",
                          className: a()(g.upsellText, g.enhancedUpsellText),
                          children:
                            null != n
                              ? n
                              : _
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      S.Z.Messages
                                        .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                      " ",
                                      S.Z.Messages.LEARN_MORE_CLICK.format({
                                        onClick: () =>
                                          s({
                                            analyticsLocation: m,
                                            onClose: t,
                                          }),
                                      }),
                                    ],
                                  })
                                : S.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format(
                                    {
                                      onClick: () =>
                                        s({ analyticsLocation: m, onClose: t }),
                                    },
                                  ),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: g.enhancedCTAs,
                      children: (0, l.jsx)(h, {}),
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
        c = t(114064),
        u = t(689938);
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
            m(a()(c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY))),
          ),
          t = (0, i.e7)([c.Z], () =>
            c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY),
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
                    u.Z.Messages.HUMANIZE_DURATION_DAYS.format({
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
        c = t(231338),
        u = t(689938),
        d = t(814605);
      n.Z = function (e) {
        let { quest: n } = e,
          t = (0, s.e7)([i.Z], () => i.Z.getState().theme),
          m = (0, a.wj)(t) ? c.BR.DARK : c.BR.LIGHT;
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
                      u.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format(
                        { gameTitle: n.config.messages.gameTitle },
                      ),
                  }),
                  (0, l.jsx)(r.Text, {
                    className: d.subheading,
                    color: "always-white",
                    variant: "text-xs/medium",
                    children:
                      u.Z.Messages
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
        c = t(151876);
      ((l = s || (s = {})).INFO = "info"), (l.WARNING = "warning");
      let u = { info: c.info, warning: c.warning },
        d = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function m(e) {
        let { children: n, className: t, look: l = "info" } = e,
          s = d[l];
        return (0, a.jsxs)("div", {
          className: i()(c.root, t, u[l]),
          children: [
            (0, a.jsx)(s, { className: c.icon }),
            (0, a.jsx)(o.Text, {
              className: c.text,
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
            c = ((r >> 6) & 63) / 31.5 - 1,
            u = ((r >> 12) & 63) / 31.5 - 1,
            d = r >> 23,
            m = i >> 15,
            E = l(3, m ? (d ? 5 : 7) : 7 & i),
            _ = l(3, m ? 7 & i : d ? 5 : 7),
            S = d ? (15 & e[5]) / 15 : 1,
            g = (e[5] >> 4) / 15,
            h = d ? 6 : 5,
            C = 0,
            I = (n, t, l) => {
              let s = [];
              for (let a = 0; a < t; a++)
                for (let r = a ? 0 : 1; r * t < n * (t - a); r++)
                  s.push(
                    (((e[h + (C >> 1)] >> ((1 & C++) << 2)) & 15) / 7.5 - 1) *
                      l,
                  );
              return s;
            },
            N = I(E, _, ((r >> 18) & 31) / 31),
            x = I(3, 3, (((i >> 3) & 63) / 63) * 1.25),
            Z = I(3, 3, (((i >> 9) & 63) / 63) * 1.25),
            f = d && I(5, 5, g),
            R = (function (e) {
              let n = e[3],
                t = 128 & e[2],
                l = 128 & e[4];
              return (l ? (t ? 5 : 7) : 7 & n) / (l ? 7 & n : t ? 5 : 7);
            })(e),
            A = a(R > 1 ? 32 : 32 * R),
            T = a(R > 1 ? 32 / R : 32),
            v = new Uint8Array(A * T * 4),
            L = [],
            M = [];
          for (let e = 0, a = 0; e < T; e++)
            for (let r = 0; r < A; r++, a += 4) {
              let i = o,
                m = c,
                g = u,
                h = S;
              for (let e = 0, t = l(E, d ? 5 : 3); e < t; e++)
                L[e] = s((n / A) * (r + 0.5) * e);
              for (let t = 0, a = l(_, d ? 5 : 3); t < a; t++)
                M[t] = s((n / T) * (e + 0.5) * t);
              for (let e = 0, n = 0; e < _; e++)
                for (
                  let t = e ? 0 : 1, l = 2 * M[e];
                  t * _ < E * (_ - e);
                  t++, n++
                )
                  i += N[n] * L[t] * l;
              for (let e = 0, n = 0; e < 3; e++)
                for (let t = e ? 0 : 1, l = 2 * M[e]; t < 3 - e; t++, n++) {
                  let e = L[t] * l;
                  (m += x[n] * e), (g += Z[n] * e);
                }
              if (d)
                for (let e = 0, n = 0; e < 5; e++)
                  for (let t = e ? 0 : 1, l = 2 * M[e]; t < 5 - e; t++, n++)
                    h += f[n] * L[t] * l;
              let C = i - (2 / 3) * m,
                I = (3 * i - C + g) / 2,
                R = I - g;
              (v[a] = l(0, 255 * t(1, I))),
                (v[a + 1] = l(0, 255 * t(1, R))),
                (v[a + 2] = l(0, 255 * t(1, C))),
                (v[a + 3] = l(0, 255 * t(1, h)));
            }
          return { w: A, h: T, rgba: v };
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
//# sourceMappingURL=fa96b2c7b8e151274021.js.map
