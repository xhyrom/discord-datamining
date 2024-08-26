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
            var i = e.substr(a, t);
            s.set(i, s.has(i) ? s.get(i) + 1 : 1);
          }
          for (var r = 0, o = 0; o < n.length - (t - 1); o++) {
            var c = n.substr(o, t),
              u = s.has(c) ? s.get(c) : 0;
            u > 0 && (s.set(c, u - 1), r++);
          }
          return (2 * r) / (e.length + n.length - (t - 1) * 2);
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
        i = t(2052),
        r = t(906732),
        o = t(963249),
        c = t(626135),
        u = t(981631),
        d = t(474936),
        m = t(689938),
        E = t(38457),
        _ = t(458623);
      n.Z = () => {
        let e = (0, i.O)(),
          { analyticsLocations: n } = (0, r.ZP)();
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
        i = t.n(a),
        r = t(442837),
        o = t(704215),
        c = t(481060),
        u = t(605236),
        d = t(706140),
        m = t(765585),
        E = t(556296),
        _ = t(63063),
        S = t(13140),
        h = t(435064),
        x = t(894694),
        C = t(39604),
        g = t(981631),
        I = t(921944),
        N = t(689938),
        Z = t(759041),
        f = t(458623);
      let R = (e) => {
        let {
            clipsEnabled: n,
            isAnimationDone: t,
            guildId: a,
            children: i,
          } = e,
          E = (0, r.e7)([h.Z], () => h.Z.getHardwareClassification()),
          S = E === x.x.MEETS_MINIMUM || E === x.x.UNKNOWN,
          f = E === x.x.BELOW_MINIMUM,
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
            T(I.L.UNKNOWN);
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
                N.Z.Messages
                  .CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
              headerClassName: Z.clipsEducationHeader,
              body: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "always-white",
                    children:
                      N.Z.Messages
                        .CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY,
                  }),
                  f
                    ? (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: Z.warningText,
                        children:
                          N.Z.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format(
                            { url: _.Z.getArticleURL(g.BhN.CLIPS) },
                          ),
                      })
                    : null,
                ],
              }),
              tryItText: N.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
              onTryFeature: (e) => {
                (0, C.em)({ clipsEnabled: !0, guildId: a, trackAnalytics: !0 }),
                  L(e);
              },
              onClose: (e) => {
                L(e, n);
              },
            });
          },
          children: () => i,
        });
      };
      n.Z = function (e) {
        let { isAnimationDone: n, guildId: t } = e,
          s = (0, r.e7)([h.Z], () => h.Z.getSettings().clipsEnabled),
          a = (0, r.e7)([E.Z], () => E.Z.getKeybindForAction(g.kg4.SAVE_CLIP));
        i()(null != a, "Clips keybind should be set");
        let o = S.BB(a.shortcut, !0);
        return (0, l.jsx)(c.FormItem, {
          title: N.Z.Messages.CLIPS_SETTINGS,
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
                  children: N.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
                }),
              }),
              (0, l.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "interactive-normal",
                className: Z.description,
                children:
                  N.Z.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
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
        i = t(735250),
        r = t(470079),
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
      class E extends (a = r.PureComponent) {
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
            (0, i.jsx)(
              u.Z.Child,
              { className: d.tile, basis: e, grow: 0, children: n },
              t,
            ),
          );
        }
        render() {
          let { className: e } = this.props;
          return (0, i.jsx)(u.Z, {
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
        i = t(579806),
        r = t(131951),
        o = t(358085),
        c = t(70722),
        u = t(65154),
        d = t(689938);
      function m() {
        if (!r.Z.supports(u.AN.SOUNDSHARE))
          return a.GO_LIVE_SCREENSHARE_NO_SOUND;
        if (
          (0, o.isWindows)() &&
          !s().satisfies(
            null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release,
            c.I9,
          )
        )
          return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
        if (
          (0, o.isMac)() &&
          !s().satisfies(
            null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release,
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
          return g;
        },
      }),
        t(724458),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(512722),
        i = t.n(a),
        r = t(392711),
        o = t.n(r),
        c = t(856901),
        u = t(442837),
        d = t(481060),
        m = t(131951),
        E = t(537135),
        _ = t(176940),
        S = t(689938),
        h = t(51449),
        x = t(458623),
        C = t(224499);
      function g(e) {
        let {
          selectedSource: n,
          onChangeVideoDeviceSource: t,
          onChangeAudioDevice: a,
        } = e;
        i()(null != n, "Camera capture device cannot be null");
        let r = (0, _.Z)(),
          g = (0, u.e7)([m.Z], () => m.Z.getInputDevices()),
          [I, N] = s.useState(
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
            })(n.id, r, g),
          );
        return (
          null != I && a(I),
          (0, l.jsx)(s.Fragment, {
            children: (0, l.jsxs)(d.FormItem, {
              title: "Capture Device",
              className: x.modalContent,
              children: [
                (0, l.jsx)(d.FormItem, {
                  className: C.marginTop8,
                  children: (0, l.jsxs)(E.Z, {
                    children: [
                      (0, l.jsx)("span", {
                        className: h.ellipsisText,
                        children: n.name,
                      }),
                      (0, l.jsx)(d.Button, {
                        className: h.changeButton,
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
                    value: I,
                    className: C.__invalid_marginaTop8,
                    onChange: (e) => {
                      N(e), a(e);
                    },
                    options: o().map(g, (e) => {
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
          return h;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(442837),
        a = t(481060),
        i = t(984933),
        r = t(430824),
        o = t(496675),
        c = t(594174),
        u = t(938475),
        d = t(382182),
        m = t(499596),
        E = t(148381),
        _ = t(689938),
        S = t(787422);
      function h(e) {
        let {
            selectedChannelId: n,
            guildId: t,
            onChangeSelectedChannelId: h,
          } = e,
          x = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
          C = (0, s.e7)([r.Z, i.ZP, o.Z], () =>
            (0, d.h_)(i.ZP.getChannels(t), r.Z, o.Z),
          ),
          g = (0, s.e7)([u.ZP], () => u.ZP.getVoiceStates(t)),
          I = C.map((e) => {
            var t;
            return {
              name: (0, l.jsx)(m.Z, {
                channel: e,
                users:
                  null === (t = g[e.id]) || void 0 === t
                    ? void 0
                    : t
                        .filter((e) => {
                          let { user: n } = e;
                          return n.id !== (null == x ? void 0 : x.id);
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
            options: I,
            value: n,
            itemInfoClassName: S.channelInfoWrapper,
            itemTitleClassName: S.channelTitleWrapper,
            onChange: (e) => {
              let { value: n } = e;
              return h(n);
            },
          }),
        });
      }
    },
    399299: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ee;
        },
      });
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        i = t.n(a),
        r = t(442837),
        o = t(481060),
        c = t(230711),
        u = t(812206),
        d = t(605436),
        m = t(924557),
        E = t(954564),
        _ = t(98131),
        S = t(600164),
        h = t(594190),
        x = t(925329),
        C = t(565138),
        g = t(977059),
        I = t(695346),
        N = t(494620),
        Z = t(592125),
        f = t(650774),
        R = t(430824),
        A = t(131951),
        T = t(944486),
        v = t(594174),
        L = t(449224),
        M = t(626135),
        p = t(823379),
        O = t(63063),
        j = t(358085),
        P = t(653255),
        D = t(989941),
        G = t(618407),
        U = t(586290),
        b = t(233037),
        w = t(810013),
        k = t(537135),
        B = t(641115),
        V = t(143135),
        y = t(70722),
        H = t(981631),
        W = t(526761),
        F = t(689938),
        z = t(85586),
        K = t(458623);
      function Y(e) {
        let {
            selectedSource: n,
            selectSource: t,
            sourceChanged: s,
            onChangeSource: a,
          } = e,
          i = (0, r.e7)([h.ZP, L.Z], () =>
            (0, j.isWindows)() ? (0, D.Z)(h.ZP, L.Z) : null,
          ),
          c = (0, r.e7)([u.Z], () =>
            (null == i ? void 0 : i.id) != null
              ? u.Z.getApplication(i.id)
              : null,
          ),
          d = (0, r.e7)([h.ZP], () => h.ZP.getRunningGames()),
          m = (0, r.Wu)(
            [u.Z],
            () =>
              d
                .map((e) => (null != e.id ? u.Z.getApplication(e.id) : null))
                .filter(p.lm),
            [d],
          ),
          E = null;
        if ((null != n ? (E = n.name) : null != i && (E = i.name), null == E))
          return null;
        let _ = (0, V.Z)(i, n, d),
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
          title: F.Z.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
          className: K.modalContent,
          titleClassName: K.formItemTitleVerySlim,
          children: (0, l.jsxs)(k.Z, {
            children: [
              null != S
                ? (0, l.jsx)(x.Z, {
                    game: S,
                    size: x.Z.Sizes.XSMALL,
                    className: z.selectedIcon,
                  })
                : (0, l.jsx)(C, { className: z.selectedIcon }),
              (0, l.jsx)("span", { className: z.ellipsisText, children: E }),
              t
                ? (0, l.jsx)(o.Button, {
                    className: z.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: a,
                    children: F.Z.Messages.CHANGE,
                  })
                : null,
            ],
          }),
        });
      }
      function Q(e) {
        let { onChange: n, guildId: t } = e,
          s = (0, r.e7)([R.Z], () => R.Z.getGuild(t));
        return null == s
          ? (n(), null)
          : (0, l.jsx)(o.FormItem, {
              title: F.Z.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
              className: K.modalContent,
              titleClassName: K.formItemTitle,
              children: (0, l.jsxs)(k.Z, {
                children: [
                  (0, l.jsx)(C.Z, {
                    guild: s,
                    size: C.Z.Sizes.SMALLER,
                    className: z.selectedIcon,
                  }),
                  (0, l.jsx)("span", {
                    className: z.ellipsisText,
                    children: s.toString(),
                  }),
                  (0, l.jsx)(o.Button, {
                    className: z.changeButton,
                    color: o.Button.Colors.PRIMARY,
                    size: o.Button.Sizes.SMALL,
                    onClick: n,
                    children: F.Z.Messages.CHANGE,
                  }),
                ],
              }),
            });
      }
      function X(e) {
        let { text: n } = e;
        return (0, l.jsxs)(S.Z, {
          align: S.Z.Align.CENTER,
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
      function q(e) {
        let { guildId: n } = e,
          t = (0, r.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
          }),
          a = I.eo.useSetting(),
          c = s.useCallback((e, n) => {
            I.eo.updateSetting(n),
              M.default.track(H.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
          }, []);
        return t >= 2 && t <= y.tB
          ? (0, l.jsx)(o.FormItem, {
              className: i()(K.modalContent, z.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                value: !!a,
                type: o.Checkbox.Types.INVERTED,
                onChange: c,
                children: (0, l.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children:
                    F.Z.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL,
                }),
              }),
            })
          : null;
      }
      function J(e) {
        let { enabled: n, onChange: t, screen: a } = e,
          r = s.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: i()(K.modalContent, z.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: r,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: a
                ? F.Z.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
                : F.Z.Messages.GO_LIVE_MODAL_ENABLE_APP_SOUNDSHARE_LABEL,
            }),
          }),
        });
      }
      function $(e) {
        let { enabled: n, onChange: t } = e,
          a = s.useCallback(
            (e, n) => {
              t(n);
            },
            [t],
          );
        return (0, l.jsx)(o.FormItem, {
          className: i()(K.modalContent, z.checkboxRow),
          children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: F.Z.Messages.GO_LIVE_MODAL_DISABLE_STREAM_PREVIEWS,
            }),
          }),
        });
      }
      function ee(e) {
        let {
            selectedSource: n,
            selectedFPS: t,
            selectedChannelId: a,
            selectedPreset: i,
            selectedResolution: o,
            sourceChanged: u,
            selectedGuildId: S,
            targetGuildPremiumTier: h,
            selectSource: x,
            selectGuild: C,
            sound: I,
            previewDisabled: f,
            onClose: R,
            onChangeSelectedFPS: L,
            onChangeSelectedResolution: M,
            onChangeSelectedPreset: p,
            onChangeSelectedChannelId: j,
            onChangeSource: D,
            onChangeAudioDevice: k,
            onChangeGuild: V,
            onChangeSound: y,
            onChangePreviewDisabled: K,
            isAnimationDone: ee,
          } = e,
          en = (0, r.e7)([T.Z, Z.Z], () =>
            Z.Z.getChannel(T.Z.getVoiceChannelId()),
          ),
          et = (0, r.e7)([P.Z], () => P.Z.GPUDriversOutdated),
          el = (0, r.e7)([P.Z], () => P.Z.problematicGPUDriver),
          es = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
          ea = (0, m.Go)(),
          ei = (0, m.Zq)({ autoTrackExposure: !ea }),
          er = (0, G.Z)();
        null != n &&
          n.id.startsWith("screen") &&
          !A.Z.supportsScreenSoundshare() &&
          (er = F.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND);
        let eo = ea
            ? (0, l.jsx)(_.Z, { guildId: S, isAnimationDone: ee })
            : ei
              ? (0, l.jsx)(E.Z, {})
              : void 0,
          ec = !!(null == n ? void 0 : n.id.startsWith("camera")),
          eu = null != es && es.verified && !es.bot,
          ed = null != en && !(0, d.Yk)(en),
          em = !(0, r.e7)([A.Z], () => A.Z.getHardwareH264()),
          { enabled: eE } = (0, g.S)({ location: "GoLiveModal_Confirm" });
        return (0, l.jsxs)(s.Fragment, {
          children: [
            ec
              ? (0, l.jsx)(U.Z, {
                  selectedSource: n,
                  onChangeVideoDeviceSource: D,
                  onChangeAudioDevice: k,
                })
              : (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(Y, {
                      selectSource: x,
                      sourceChanged: u,
                      onChangeSource: D,
                      selectedSource: n,
                    }),
                    null != er ? (0, l.jsx)(X, { text: er }) : null,
                    null != n && null == er
                      ? (0, l.jsx)(J, {
                          enabled: I,
                          onChange: y,
                          screen: n.id.startsWith("screen"),
                        })
                      : null,
                  ],
                }),
            C && null != S ? (0, l.jsx)(Q, { guildId: S, onChange: V }) : null,
            null != en
              ? (0, l.jsx)(w.Z, { channel: en })
              : (0, l.jsx)(b.Z, {
                  guildId: S,
                  selectedChannelId: a,
                  onChangeSelectedChannelId: j,
                }),
            null != S && eu && ed ? (0, l.jsx)(q, { guildId: S }) : null,
            et
              ? (0, l.jsx)(X, {
                  text: F.Z.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED,
                })
              : null,
            el
              ? (0, l.jsx)(X, {
                  text: F.Z.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                    helpCenterLink: O.Z.getArticleURL(
                      H.BhN.NVIDIA_DRIVER_ISSUES,
                    ),
                  }),
                })
              : null,
            em &&
              (0, l.jsx)(N.Z, {
                look: N.z.WARNING,
                className: z.hardwareWarning,
                children:
                  F.Z.Messages.GO_LIVE_MODAL_HARDWARE_WARNING_INFOBOX.format({
                    onClick: () => {
                      R(),
                        c.Z.open(H.oAB.VOICE, null, {
                          scrollPosition:
                            W.KQ.VoiceAndVideoScrollPositions
                              .HARDWARE_ACCELERATION,
                        });
                    },
                  }),
              }),
            (0, l.jsx)(B.Z, {
              selectedPreset: i,
              selectedFPS: t,
              selectedResolution: o,
              targetGuildPremiumTier: h,
              onClose: R,
              onFPSChange: L,
              onResolutionChange: M,
              onPresetChange: p,
              captureDeviceSelected: ec,
            }),
            eE && (0, l.jsx)($, { enabled: f, onChange: K }),
            eo,
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
        i = t(314897),
        r = t(938475),
        o = t(499596),
        c = t(537135),
        u = t(689938),
        d = t(458623);
      function m(e) {
        let { channel: n } = e,
          t = (0, s.e7)([i.default], () => i.default.getId()),
          m = (0, s.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(n), [n]);
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
          return r;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        i = t(127788);
      function r(e) {
        let { separator: n = !1 } = e;
        return (0, l.jsx)("div", {
          className: a()(i.divider, { [i.separator]: n }),
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
        i = t(470079),
        r = t(512722),
        o = t.n(r),
        c = t(338545),
        u = t(442837),
        d = t(481060),
        m = t(668781),
        E = t(287734),
        _ = t(872810),
        S = t(410575),
        h = t(812206),
        x = t(600164),
        C = t(313201),
        g = t(594190),
        I = t(998594),
        N = t(751571),
        Z = t(695346),
        f = t(361291),
        R = t(592125),
        A = t(430824),
        T = t(131951),
        v = t(944486),
        L = t(594174),
        M = t(449224),
        p = t(626135),
        O = t(358085),
        j = t(998502),
        P = t(451467),
        D = t(537413),
        G = t(960861),
        U = t(989941),
        b = t(399299),
        w = t(351152),
        k = t(567126),
        B = t(143135),
        V = t(37113),
        y = t(981631),
        H = t(761274),
        W = t(689938),
        F = t(458623);
      ((s = l || (l = {}))[(s.GUILD = 0)] = "GUILD"),
        (s[(s.NATIVE_PICKER_SOURCE = 1)] = "NATIVE_PICKER_SOURCE"),
        (s[(s.SOURCE = 2)] = "SOURCE"),
        (s[(s.CONFIRM = 3)] = "CONFIRM");
      function z(e) {
        var n, l, s, r, z, K, Y;
        let {
            selectGuild: Q = !1,
            selectSource: X = !0,
            guildId: q,
            analyticsLocation: J,
            onClose: $,
            transitionState: ee,
          } = e,
          {
            preset: en,
            resolution: et,
            fps: el,
            soundshareEnabled: es,
          } = (0, u.cj)([f.Z], () => f.Z.getState()),
          ea = (0, u.e7)([v.Z, R.Z], () =>
            R.Z.getChannel(v.Z.getVoiceChannelId()),
          ),
          ei = (0, u.e7)([g.ZP, M.Z], () =>
            (0, O.isWindows)() ? (0, U.Z)(g.ZP, M.Z) : null,
          ),
          er = (0, u.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, "GoLiveModal: user cannot be undefined"), e;
          }),
          eo =
            null !== (n = null == ea ? void 0 : ea.getGuildId()) && void 0 !== n
              ? n
              : q,
          ec = (0, u.e7)([A.Z], () => {
            var e;
            return null != eo
              ? null === (e = A.Z.getGuild(eo)) || void 0 === e
                ? void 0
                : e.premiumTier
              : null;
          }),
          [eu, ed] =
            null !== (l = (0, D.Z)(en, er, ec)) && void 0 !== l
              ? l
              : [V.LY.RESOLUTION_720, V.ws.FPS_30],
          em = (0, u.e7)([G.ZP], () => G.ZP.supported()),
          { lastPickerAction: eE, lastPickerError: e_ } = (0, u.e7)(
            [G.ZP],
            () => G.ZP.getPickerState(),
          ),
          eS = I.Z.useExperiment(
            { location: "GoLiveModal" },
            { disable: !em, autoTrackExposure: !0 },
          ).enableSystemPicker;
        (0, G.UB)(),
          en !== V.tI.PRESET_CUSTOM && ((et = eu), (el = ed)),
          !(0, P.Z)(en, et, el, er, ec) && ((et = eu), (el = ed));
        let eh = (0, C.Dt)();
        let [ex, eC] = i.useState(((K = Q), (Y = X), K ? 0 : Y ? 2 : 3)),
          [eg, eI] = i.useState(null),
          [eN, eZ] = i.useState(!1),
          [ef, eR] = i.useState(null),
          [eA, eT] = i.useState(null),
          [ev, eL] = i.useState(null),
          [eM, ep] = i.useState(en),
          [eO, ej] = i.useState(et),
          [eP, eD] = i.useState(el),
          [eG, eU] = i.useState(es),
          [eb, ew] = i.useState(
            null !== (s = Z.I0.getSetting()) && void 0 !== s && s,
          ),
          [ek, eB] = i.useState(null != q ? q : null),
          eV =
            null !== (r = null == ea ? void 0 : ea.id) && void 0 !== r ? r : ef;
        i.useEffect(() => {
          let e = (0, O.isWindows)() ? (0, U.Z)(g.ZP, M.Z) : null,
            n =
              (null == e ? void 0 : e.id) != null
                ? h.Z.getApplication(e.id)
                : null;
          p.default.track(y.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: J,
          });
        }, [J]);
        function ey() {
          !(function () {
            var e, n;
            o()(null != ei || null != eA, "got nothing to stream");
            let t =
              null !== (e = null == ea ? void 0 : ea.id) && void 0 !== e
                ? e
                : ef;
            o()(null != t, "Received null target channel ID");
            let l = R.Z.getChannel(t),
              s =
                null !== (n = null == l ? void 0 : l.getGuildId()) &&
                void 0 !== n
                  ? n
                  : q;
            null == ea && E.default.selectVoiceChannel(t);
            let a = eM,
              i = eO,
              r = eP;
            !(0, P.Z)(a, i, r, er, ec) &&
              ((a = V.tI.PRESET_VIDEO),
              (i = V.LY.RESOLUTION_720),
              (r = V.ws.FPS_30)),
              (0, _.Rc)({
                preset: a,
                resolution: i,
                frameRate: r,
                soundshareEnabled: eG,
              });
            let c = (0, B.Z)(ei, eA, g.ZP.getRunningGames()),
              u =
                !(0, O.isWindows)() ||
                null == c ||
                (null == eA ? void 0 : eA.id.startsWith("camera:")) ||
                null == c
                  ? null
                  : c.pid;
            (0, _.WH)(s, t, {
              pid: u,
              sourceId: null == u && null != eA ? eA.id : null,
              sourceName: null == u && null != eA ? eA.name : null,
              audioSourceId: ev,
              sound: eG,
              previewDisabled: eb,
            }),
              !eS &&
                (async () => {
                  !(await N.Z.hasPermission(H.Eu.SCREEN_RECORDING, {
                    showAuthorizationError: !1,
                  })) &&
                    m.Z.show({
                      title:
                        W.Z.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                      body: W.Z.Messages
                        .WARNING_SCREEN_RECORDING_PERMISSION_BODY,
                    });
                })();
          })(),
            $();
        }
        let eH = i.useCallback(
          (e, n, t) => {
            let l = (0, D.Z)(e, er, ec),
              [s, a] = null != l ? l : [n, t];
            if ((e !== eM && ((n = s), (t = a)), !(0, P.Z)(e, n, t, er, ec))) {
              let [e, l] = (0, D.Z)(V.tI.PRESET_VIDEO, er, ec);
              (n = e), (t = l);
            }
            t !== eP && eD(t),
              n !== eO && ej(n),
              s !== n || a !== t ? ep(V.tI.PRESET_CUSTOM) : e !== eM && ep(e);
          },
          [er, ec, eP, eO, eM],
        );
        async function eW(e) {
          var n, l, s;
          if ((e.preventDefault(), 2 === ex || 1 === ex)) return eC(3);
          let i = (0, B.Z)(ei, eA, g.ZP.getRunningGames()),
            r =
              j.ZP.supportsFeature(y.eRX.ELEVATED_HOOK) &&
              (null == i ? void 0 : i.elevated);
          if (
            (0, O.isMac)() &&
            null != eA &&
            (null === (n = eA.id) || void 0 === n
              ? void 0
              : n.startsWith("screen"))
          ) {
            let e = await T.Z.getMediaEngine().getDesktopSources(),
              n = eA.id;
            if (e.length > 0 && !e.some((e) => e.includes(n))) {
              (l = n),
                (s = e),
                p.default.track(y.rMx.SCREENSHARE_FAILED, {
                  source_id: l,
                  screens: s.length,
                }),
                (0, d.openModal)((e) =>
                  (0, a.jsx)(d.ConfirmModal, {
                    header: W.Z.Messages.SCREENSHARE_RELAUNCH,
                    confirmText: W.Z.Messages.OKAY,
                    cancelText: W.Z.Messages.CANCEL,
                    onConfirm: () => j.ZP.relaunch(),
                    ...e,
                    children: (0, a.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: W.Z.Messages.SCREENSHARE_RELAUNCH_BODY,
                    }),
                  }),
                );
              return;
            }
          }
          r
            ? !(function () {
                var e;
                let n =
                  null !== (e = null == ei ? void 0 : ei.pid) && void 0 !== e
                    ? e
                    : null;
                (0, d.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("74300")
                    .then(t.bind(t, 566852));
                  return (t) =>
                    (0, a.jsx)(e, { ...t, handleStream: ey, pid: n });
                });
              })()
            : ey();
        }
        let [eF, ez] = i.useState(void 0),
          eK = i.useCallback(
            (e) => {
              G.ZP.releasePickerStream(),
                G.ZP.presentPicker(null != e ? e : eF);
            },
            [eF],
          ),
          eY = i.useCallback(
            (e) => {
              if ((eT(e), null != e)) {
                if (
                  eS &&
                  (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                ) {
                  let n = e.id.split(":")[1];
                  ez(n), eK(n), eC(1);
                } else eC(3);
                eZ(!0);
              }
            },
            [eS, eK],
          ),
          eQ = i.useCallback(
            (e) => {
              eB(e);
              var n = 3;
              eC((n = X ? 2 : 3));
            },
            [X],
          );
        1 === ex &&
          eS &&
          (eE === G.Uc.Update ? eC(3) : eE === G.Uc.Cancel && eC(2));
        let eX = !(1 === ex && eS && eE === G.Uc.Error),
          eq = (function (e) {
            switch (e) {
              case 2:
              case 1:
                return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
              case 3:
                return null;
              default:
                return W.Z.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC;
            }
          })(ex),
          eJ = (0, a.jsx)(d.ModalHeader, {
            className: F.modalHeader,
            separator: !1,
            children: (0, a.jsxs)(x.Z, {
              direction: x.Z.Direction.VERTICAL,
              align: x.Z.Align.CENTER,
              className: F.header,
              children: [
                (0, a.jsx)(d.Heading, {
                  variant: "heading-xl/semibold",
                  id: eh,
                  className: F.headerText,
                  children: W.Z.Messages.GO_LIVE_MODAL_TITLE,
                }),
                eX && null != eq
                  ? (0, a.jsx)(d.Text, {
                      className: F.headerDescription,
                      variant: "text-md/normal",
                      color: "text-normal",
                      children: eq,
                    })
                  : null,
              ],
            }),
          }),
          e$ = i.useCallback(() => {
            eS && G.ZP.releasePickerStream(), eC(2);
          }, [eC, eS]),
          e0 = (0, a.jsxs)(d.Slides, {
            springConfig: { ...c.config.stiff, clamp: !0 },
            activeSlide: ex,
            width: 480,
            onSlideReady: eI,
            children: [
              (0, a.jsx)(d.Slide, {
                id: 0,
                children: (0, a.jsx)("div", {
                  className: F.modalSize,
                  children: (0, a.jsx)(w.Z, { onSelectGuild: eQ }),
                }),
              }),
              (0, a.jsx)(d.Slide, {
                id: 2,
                children: (0, a.jsx)("div", {
                  className: F.modalSize,
                  children: eS
                    ? (0, a.jsx)(k.H, { onSourceSelect: eY })
                    : (0, a.jsx)(k.o, {
                        selectedSource: eA,
                        onChangeSelectedSource: eY,
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
                            null != e_ && e_.length > 0
                              ? e_
                              : W.Z.Messages.ERROR_ANOTHER_TRY,
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
                        : ef,
                    selectedPreset: eM,
                    selectedResolution: eO,
                    selectedSource: eA,
                    selectedFPS: eP,
                    sound: eG,
                    previewDisabled: eb,
                    sourceChanged: eN,
                    selectSource: X,
                    onChangeSelectedFPS: (e) => eH(eM, eO, e),
                    onChangeSelectedResolution: (e) => eH(eM, e, eP),
                    onChangeSelectedPreset: (e) => eH(e, eO, eP),
                    onChangeSelectedChannelId: eR,
                    onChangeSelectedSource: eY,
                    onChangeSource: () => e$(),
                    onChangeAudioDevice: (e) => eL(e),
                    onChangeGuild: () => eC(0),
                    onChangeSound: (e) => eU(e),
                    onChangePreviewDisabled: (e) => ew(e),
                    onClose: $,
                    selectedGuildId: ek,
                    targetGuildPremiumTier: ec,
                    selectGuild: Q,
                    isAnimationDone:
                      3 === eg && ee === d.ModalTransitionState.ENTERED,
                  }),
                }),
              }),
            ],
          }),
          e1 = (function (e, n, t, l) {
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
          })(ex, Q, X, eN),
          e4 = 3 !== ex || (null == eA && null == ei) || null == eV,
          e5 = i.useCallback(() => {
            null != e1 && (G.ZP.releasePickerStream(), eC(e1));
          }, [eC, e1]),
          e3 = (0, a.jsxs)(d.ModalFooter, {
            justify: null == e1 ? x.Z.Justify.START : x.Z.Justify.BETWEEN,
            children: [
              (0, a.jsx)(d.Button, {
                type: "submit",
                size: d.Button.Sizes.SMALL,
                disabled: e4,
                autoFocus: !0,
                children: W.Z.Messages.GO_LIVE_MODAL_CTA,
              }),
              eS && 1 === ex
                ? (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: () => eK(),
                    children: W.Z.Messages.RETRY,
                  })
                : null,
              null == e1
                ? (0, a.jsx)(d.Button, {
                    className: F.cancelButton,
                    look: d.Button.Looks.LINK,
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: $,
                    children: W.Z.Messages.CANCEL,
                  })
                : (0, a.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    color: d.ButtonColors.PRIMARY,
                    onClick: e5,
                    children: W.Z.Messages.BACK,
                  }),
            ],
          });
        return (0, a.jsx)(S.Z, {
          page: y.ZY5.GO_LIVE_MODAL,
          children: (0, a.jsxs)(d.ModalRoot, {
            "aria-labelledby": eh,
            transitionState: ee,
            size: d.ModalSize.DYNAMIC,
            className: F.modalSize,
            children: [
              (0, a.jsx)(d.ModalCloseButton, {
                onClick: $,
                className: F.modalCloseButton,
              }),
              (0, a.jsx)("div", { className: F.art }),
              (0, a.jsxs)("form", { onSubmit: eW, children: [eJ, e0, e3] }),
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
        i = t(392711),
        r = t.n(i),
        o = t(442837),
        c = t(481060),
        u = t(565138),
        d = t(984933),
        m = t(430824),
        E = t(496675),
        _ = t(771845),
        S = t(259580),
        h = t(382182),
        x = t(148381),
        C = t(689938),
        g = t(458623),
        I = t(544347);
      function N(e) {
        let { guildId: n, onClick: t } = e,
          s = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
          a = (0, o.e7)([d.ZP, m.Z, E.Z], () =>
            d.ZP.getChannels(n)[d.Zb].some((e) => {
              let { channel: n } = e;
              return (0, h.JL)(n, m.Z, E.Z);
            }),
          );
        return null != s && a
          ? (0, l.jsxs)(c.Clickable, {
              onClick: () => t(n),
              className: I.guildRow,
              children: [
                (0, l.jsx)(u.Z, {
                  guild: s,
                  size: u.Z.Sizes.SMALL,
                  className: I.guildIcon,
                }),
                (0, l.jsx)(c.Text, {
                  variant: "text-md/normal",
                  className: I.guildName,
                  children: s.toString(),
                }),
                (0, l.jsx)(S.Z, {
                  direction: S.Z.Directions.RIGHT,
                  className: I.guildArrow,
                }),
              ],
            })
          : null;
      }
      function Z(e) {
        let { onSelectGuild: n } = e,
          t = (0, o.e7)([_.ZP], () => _.ZP.getGuildFolders());
        return (0, l.jsx)(x.Z, {
          title: C.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
          scrollerClassName: a()(I.guildScroller, g.marginBottom),
          children: r().flatMap(t, (e) => {
            let { guildIds: t } = e;
            return t.map((e) => (0, l.jsx)(N, { guildId: e, onClick: n }, e));
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
        i = t(481060),
        r = t(884338),
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
          (_ = (0, l.jsx)(r.Z, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: t,
            renderUser: (e) => {
              if (null == e) return null;
              let t = u.ZP.getName(n.guild_id, n.id, e),
                s = e.getAvatarURL(n.guild_id, 24);
              return (0, l.jsx)(i.TooltipContainer, {
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
                children: (0, l.jsx)(i.TooltipContainer, {
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
        i = t.n(a),
        r = t(481060),
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
          [S, h] = s.useState(!1),
          x = s.useCallback(() => {
            let { current: e } = m;
            null != e && (_(!e.isScrolledToTop()), h(!e.isScrolledToBottom()));
          }, []);
        return (
          s.useLayoutEffect(() => x(), []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: i()(u.title, u.scrollWrapper),
                children: [
                  (0, l.jsx)(r.FormTitle, {
                    className: c.formItemTitle,
                    children: n,
                  }),
                  (0, l.jsx)(o.Z, { separator: E }),
                ],
              }),
              (0, l.jsx)("div", {
                className: t,
                children: (0, l.jsx)(r.AdvancedScroller, {
                  ref: m,
                  className: i()(u.scrollerInner, a, {
                    [u.bottomSeparator]: S,
                  }),
                  onScroll: x,
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
        i = t.n(a),
        r = t(788900),
        o = t(268146),
        c = t(442837),
        u = t(141038),
        d = t(846519),
        m = t(481060),
        E = t(224706),
        _ = t(600164),
        S = t(152708),
        h = t(594190),
        x = t(569984),
        C = t(918701),
        g = t(977156),
        I = t(28798),
        N = t(131951),
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
        let e = N.Z.getVideoDevices(),
          n = (0, u.Z)(N.Z.getMediaEngine(), [o.vA.WINDOW, o.vA.SCREEN], {
            width: 176,
            height: 99,
          }),
          t = D(),
          l = await t,
          s = await n,
          a = s.filter((e) => e.id.startsWith(o.vA.SCREEN)),
          i = (function (e, n) {
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
          windowSources: i,
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
                i = (0, r.xS)(a);
              return { id: "camera:" + l.id, name: l.name, url: i };
            }),
        };
      }
      async function D() {
        let e = h.ZP.getRunningGames();
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
        let n = (0, f.isWindows)() ? (0, T.Z)(h.ZP, Z.Z) : null,
          t = h.ZP.getRunningGames();
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
          r = N.Z.supports(p.AN.GO_LIVE_HARDWARE),
          [u, E] = s.useState(null),
          [Z, f] = s.useState(null),
          [T, D] = s.useState(null),
          U = null != T && T.length > 0,
          [b, w] = s.useState(o.vA.WINDOW),
          [k, B] = s.useState(!1),
          V = s.useRef(null),
          y = s.useRef(new d.Xp()),
          H = (0, c.e7)([h.ZP], () => h.ZP.getRunningGames()),
          W = (function (e, n, t) {
            let l = (0, g.Zy)({ location: M.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
              if (null == t || !l) return null;
              for (let l of t) {
                var s, a;
                let t = n.find((e) => (0, A.Z)(l.id, e.windowHandle));
                if ((null == t ? void 0 : t.id) == null) continue;
                let i = (0, C.lQ)(e, t.id);
                if (
                  null != i &&
                  (null === (s = i.userStatus) || void 0 === s
                    ? void 0
                    : s.enrolledAt) != null &&
                  (null === (a = i.userStatus) || void 0 === a
                    ? void 0
                    : a.completedAt) == null
                )
                  return { source: l, quest: i };
              }
              return null;
            }, [l, e, n, t]);
          })(
            (0, c.e7)([x.Z], () => x.Z.quests),
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
              className: i()(j.tile, { [j.selected]: a }),
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
                        r &&
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
                      (0, l.jsx)(I.Z, { quest: W.quest }),
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
          [a, r] = s.useState([]),
          [o, c] = s.useState(t),
          u = s.useRef(new d.Xp());
        s.useEffect(() => {
          let e = u.current,
            n = () => {
              let e = Object.entries(N.Z.getVideoDevices()).filter((e) => {
                let [n, t] = e;
                return !t.disabled;
              });
              r(e),
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
                    radioItemIconClassName: i()(j.hideRadioCheckbox),
                  },
                  {
                    name: O.Z.Messages.GO_LIVE_MODAL_SCREEN,
                    value: "prepicked:screen",
                    icon: m.ScreenIcon,
                    radioItemIconClassName: i()(j.hideRadioCheckbox),
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
        i = t(481060),
        r = t(600164),
        o = t(624743);
      function c(e) {
        let { source: n, selectedSource: t } = e,
          { id: s, name: c, url: u } = n,
          d = (null == t ? void 0 : t.id) === s;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(r.Z, {
            direction: r.Z.Direction.VERTICAL,
            justify: r.Z.Justify.CENTER,
            align: r.Z.Align.CENTER,
            children: [
              (0, l.jsx)(r.Z, {
                justify: r.Z.Justify.CENTER,
                align: r.Z.Align.CENTER,
                children: (0, l.jsx)("div", {
                  style: { backgroundImage: "url(".concat(u, ")") },
                  className: a()(o.sourceThumbnail, { [o.selected]: d }),
                }),
              }),
              (0, l.jsx)(i.Text, {
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
          return D;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        i = t.n(a),
        r = t(512722),
        o = t.n(r),
        c = t(848246),
        u = t(442837),
        d = t(481060),
        m = t(410575),
        E = t(2052),
        _ = t(924557),
        S = t(600164),
        h = t(436774),
        x = t(933843),
        C = t(1163),
        g = t(594174),
        I = t(78839),
        N = t(74538),
        Z = t(451467),
        f = t(122186),
        R = t(37113),
        A = t(981631),
        T = t(474936),
        v = t(689938),
        L = t(458623),
        M = t(782765),
        p = t(224499);
      function O(e) {
        let { analyticsLocation: n, onClose: s } = e;
        (0, d.openModalLazy)(async () => {
          let { default: e } = await t.e("28479").then(t.bind(t, 78865));
          return (t) =>
            (0, l.jsx)(e, { ...t, onCloseParent: s, analyticsSource: n });
        });
      }
      function j() {
        return (0, l.jsxs)("div", {
          className: M.toolTipTextContainer,
          children: [
            (0, l.jsx)(d.NitroWheelIcon, {
              size: "md",
              color: h.JX.PREMIUM_TIER_2,
              className: i()(M.premiumIcon),
            }),
            (0, l.jsx)(d.Text, {
              className: M.upsellText,
              variant: "text-sm/medium",
              children: v.Z.Messages.UNLOCK_WITH_NITRO,
            }),
          ],
        });
      }
      function P(e) {
        let n,
          t,
          {
            type: s,
            selected: a,
            needsPremium: r,
            needsDemo: o,
            analyticsLocation: c,
            onClick: u,
            onClose: m,
            setIsHovering: E,
          } = e,
          { value: _, label: S } = s;
        return (
          r
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                tooltipClassName: M.tooltip,
                spacing: 6,
                "aria-label": v.Z.Messages.UNLOCK_WITH_NITRO,
                text: (0, l.jsx)(j, {}),
                children: (0, l.jsx)("div", {
                  className: M.textContainer,
                  onMouseEnter: () => E(!0),
                  onMouseLeave: () => E(!1),
                  children: (0, l.jsx)(d.Text, {
                    variant: "text-xs/bold",
                    className: i()(
                      M.selectorNitroText,
                      M.enhancedSelectorNitroText,
                    ),
                    children: S,
                  }),
                }),
              })),
              (t = () => O({ analyticsLocation: c, onClose: m })))
            : ((n = (0, l.jsx)("div", {
                className: M.textContainer,
                children: (0, l.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  className: i()(M.selectorText, {
                    [M.enhancedSelectorNitroText]: o,
                  }),
                  children: S,
                }),
              })),
              (t = () => u(_))),
          {
            content: n,
            className: i()(M.selectorButton, {
              [M.selectorButtonSelected]: a,
              [M.perksDemo]: o,
              [M.premiumUpsell]: r,
            }),
            onClick: t,
          }
        );
      }
      function D(e) {
        let {
            onClose: n,
            selectedPreset: t,
            selectedResolution: a,
            selectedFPS: i,
            onResolutionChange: r,
            onFPSChange: h,
            onPresetChange: j,
            targetGuildPremiumTier: D,
            captureDeviceSelected: G,
          } = e,
          U = (0, u.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return (
              o()(null != e, "StreamSettings: user cannot be undefined"), e
            );
          }),
          b = N.ZP.canStreamQuality(N.U2.MID, U),
          { location: w } = (0, E.O)(),
          k = (0, _.Zq)({ autoTrackExposure: !1 }),
          B = (0, N.I5)(U, T.p9.TIER_1);
        C.Z.useExperiment(
          { location: "Go Live Modal" },
          { autoTrackExposure: !0, disable: B },
        );
        let V = (0, u.e7)([I.ZP], () => I.ZP.inReverseTrial()),
          y = (0, x.So)(c.q.STREAM_HIGH_QUALITY),
          H = (!b && !k) || y,
          [W, F] = s.useState(!1),
          z = G ? R.z8 : R.WC,
          K = { ...w, section: A.jXE.STREAM_SETTINGS },
          Y = (0, l.jsx)(d.ButtonGroup, {
            buttons: z.map((e) =>
              P({
                type: e,
                selected: e.value === a,
                needsPremium: !(0, Z.Z)(t, e.value, i, U, D),
                needsDemo: (y || V) && e.value !== R.LY.RESOLUTION_720,
                analyticsLocation: K,
                onClick: () => r(e.value),
                onClose: n,
                setIsHovering: F,
              }),
            ),
          }),
          Q = (0, l.jsx)(d.ButtonGroup, {
            buttons: R.k0.map((e) =>
              P({
                type: e,
                selected: e.value === i,
                needsPremium: !(0, Z.Z)(t, a, e.value, U, D),
                needsDemo: y && e.value === R.ws.FPS_60,
                analyticsLocation: K,
                onClick: () => h(e.value),
                onClose: n,
                setIsHovering: F,
              }),
            ),
          }),
          X = [
            {
              value: R.tI.PRESET_VIDEO,
              label: v.Z.Messages.STREAM_PRESET_VIDEO,
            },
            ...(G
              ? []
              : [
                  {
                    value: R.tI.PRESET_DOCUMENTS,
                    label: v.Z.Messages.STREAM_PRESET_DOCUMENTS,
                  },
                ]),
            {
              value: R.tI.PRESET_CUSTOM,
              label: v.Z.Messages.STREAM_PRESET_CUSTOM,
            },
          ],
          q =
            t === R.tI.PRESET_DOCUMENTS
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(S.Z, {
                      children: (0, l.jsx)(d.FormItem, {
                        title: v.Z.Messages.STREAM_RESOLUTION,
                        titleClassName: L.formItemTitleSlim,
                        className: M.documentModeGroup,
                        children: (0, l.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          children:
                            v.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format(
                              { fps: i },
                            ),
                        }),
                      }),
                    }),
                    H
                      ? (0, l.jsx)(f.Z, {
                          message:
                            v.Z.Messages
                              .STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
                          onClose: n,
                          openStreamUpsellModal: O,
                        })
                      : null,
                    V && (0, l.jsx)(f.c, {}),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(S.Z, {
                      children: [
                        (0, l.jsx)(d.FormItem, {
                          title: v.Z.Messages.STREAM_RESOLUTION,
                          className: M.settingsGroup,
                          titleClassName: L.formItemTitleSlim,
                          children: Y,
                        }),
                        (0, l.jsx)(d.FormItem, {
                          title: v.Z.Messages.SCREENSHARE_FRAME_RATE,
                          className: M.settingsGroup,
                          titleClassName: L.formItemTitleSlim,
                          children: Q,
                        }),
                      ],
                    }),
                    H
                      ? (0, l.jsx)(f.Z, {
                          onClose: n,
                          openStreamUpsellModal: O,
                          glow: W,
                        })
                      : null,
                    V && (0, l.jsx)(f.c, {}),
                  ],
                });
        return (0, l.jsx)(m.Z, {
          ...K,
          children: (0, l.jsx)(d.FormItem, {
            title: v.Z.Messages.STREAM_QUALITY,
            titleClassName: L.formItemTitle,
            className: L.modalContent,
            children: (0, l.jsxs)("div", {
              className: M.qualitySettingsContainer,
              children: [
                (0, l.jsx)(d.SingleSelect, {
                  value: t,
                  className: p.marginTop8,
                  options: X,
                  onChange: (e) => j(e),
                }),
                q,
              ],
            }),
          }),
        });
      }
    },
    122186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
        c: function () {
          return N;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        i = t(848246),
        r = t(442837),
        o = t(481060),
        c = t(607070),
        u = t(436774),
        d = t(933843),
        m = t(1163),
        E = t(846401),
        _ = t(197115),
        S = t(981631),
        h = t(474936),
        x = t(689938),
        C = t(304095);
      function g(e) {
        let { location: n, ...t } = e;
        return (0, l.jsx)(_.Z, {
          className: a()(C.enhancedCTA, C.ctaGradientBackground),
          iconClassName: C.premiumIcon,
          subscriptionTier: h.Si.TIER_2,
          buttonText: x.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
          size: o.Button.Sizes.TINY,
          premiumModalAnalyticsLocation: n,
          ...t,
        });
      }
      function I() {
        let e = (0, E.Z)();
        return (0, l.jsxs)("div", {
          className: C.extendedDemoContainer,
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsxs)("div", {
                  className: C.extendedDemoContainer,
                  children: [
                    (0, l.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      color: "status-warning",
                      className: C.extendedDemoDurationText,
                      children: e.toUpperCase(),
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      children:
                        x.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase(),
                    }),
                  ],
                }),
                (0, l.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  children:
                    x.Z.Messages
                      .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY,
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: C.extendedDemoButton,
              children: (0, l.jsx)(g, { size: o.Button.Sizes.SMALL }),
            }),
          ],
        });
      }
      function N() {
        let e = (0, r.e7)([c.Z], () => c.Z.useReducedMotion);
        return (0, l.jsxs)("div", {
          className: a()(C.reverseTrialEducationBannerContainer, {
            [C.reducedMotion]: e,
          }),
          children: [
            (0, l.jsx)(o.LottieAnimation, {
              className: a()(C.unlockAnimation, { [C.reducedMotion]: e }),
              loop: !1,
              shouldAnimate: !e,
              pauseAtFrame: e ? 149 : void 0,
              importData: () => t.e("21812").then(t.t.bind(t, 741855, 19)),
            }),
            (0, l.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: C.reverseTrialEducationText,
              children:
                x.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format(),
            }),
          ],
        });
      }
      function Z(e) {
        let {
            message: n,
            onClose: t,
            openStreamUpsellModal: s,
            glow: r = !1,
          } = e,
          c = {
            section: S.jXE.STREAM_SETTINGS,
            object: S.qAy.PREMIUM_UPSELL_BANNER,
            objectType: S.Qqv.BUY,
          },
          E = (0, d.So)(i.q.STREAM_HIGH_QUALITY),
          _ = m.Z.useExperiment(
            { location: "StreamSettingsUpsellBanner" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration;
        return (0, l.jsx)("div", {
          className: a()(C.upsellBanner, C.enhancedBanner, {
            [C.gradientGlow]: r,
          }),
          children:
            E && _
              ? (0, l.jsx)(I, {})
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: C.iconTextContainer,
                      children: [
                        (0, l.jsx)(o.NitroWheelIcon, {
                          size: "md",
                          color: u.JX.PREMIUM_TIER_2,
                        }),
                        (0, l.jsx)(o.Text, {
                          variant: "text-sm/medium",
                          className: a()(C.upsellText, C.enhancedUpsellText),
                          children:
                            null != n
                              ? n
                              : E
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      x.Z.Messages
                                        .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                      " ",
                                      x.Z.Messages.LEARN_MORE_CLICK.format({
                                        onClick: () =>
                                          s({
                                            analyticsLocation: c,
                                            onClose: t,
                                          }),
                                      }),
                                    ],
                                  })
                                : x.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format(
                                    {
                                      onClick: () =>
                                        s({ analyticsLocation: c, onClose: t }),
                                    },
                                  ),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: C.enhancedCTAs,
                      children: (0, l.jsx)(g, {}),
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
        i = t(848246),
        r = t(442837),
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
            m(a()(c.Z.activatedEndTime(i.q.STREAM_HIGH_QUALITY))),
          ),
          t = (0, r.e7)([c.Z], () =>
            c.Z.activatedEndTime(i.q.STREAM_HIGH_QUALITY),
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
        i = t(481060),
        r = t(210887),
        o = t(918701),
        c = t(231338),
        u = t(689938),
        d = t(814605);
      n.Z = function (e) {
        let { quest: n } = e,
          t = (0, s.e7)([r.Z], () => r.Z.getState().theme),
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
                  (0, l.jsx)(i.Heading, {
                    color: "always-white",
                    variant: "text-sm/medium",
                    children:
                      u.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format(
                        { gameTitle: n.config.messages.gameTitle },
                      ),
                  }),
                  (0, l.jsx)(i.Text, {
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
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        c = t(151876);
      ((l = s || (s = {})).INFO = "info"), (l.WARNING = "warning");
      let u = { info: c.info, warning: c.warning },
        d = { info: o.CircleInformationIcon, warning: o.CircleWarningIcon };
      function m(e) {
        let { children: n, className: t, look: l = "info" } = e,
          s = d[l];
        return (0, a.jsxs)("div", {
          className: r()(c.root, t, u[l]),
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
            i = e[0] | (e[1] << 8) | (e[2] << 16),
            r = e[3] | (e[4] << 8),
            o = (63 & i) / 63,
            c = ((i >> 6) & 63) / 31.5 - 1,
            u = ((i >> 12) & 63) / 31.5 - 1,
            d = i >> 23,
            m = r >> 15,
            E = l(3, m ? (d ? 5 : 7) : 7 & r),
            _ = l(3, m ? 7 & r : d ? 5 : 7),
            S = d ? (15 & e[5]) / 15 : 1,
            h = (e[5] >> 4) / 15,
            x = d ? 6 : 5,
            C = 0,
            g = (n, t, l) => {
              let s = [];
              for (let a = 0; a < t; a++)
                for (let i = a ? 0 : 1; i * t < n * (t - a); i++)
                  s.push(
                    (((e[x + (C >> 1)] >> ((1 & C++) << 2)) & 15) / 7.5 - 1) *
                      l,
                  );
              return s;
            },
            I = g(E, _, ((i >> 18) & 31) / 31),
            N = g(3, 3, (((r >> 3) & 63) / 63) * 1.25),
            Z = g(3, 3, (((r >> 9) & 63) / 63) * 1.25),
            f = d && g(5, 5, h),
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
            for (let i = 0; i < A; i++, a += 4) {
              let r = o,
                m = c,
                h = u,
                x = S;
              for (let e = 0, t = l(E, d ? 5 : 3); e < t; e++)
                L[e] = s((n / A) * (i + 0.5) * e);
              for (let t = 0, a = l(_, d ? 5 : 3); t < a; t++)
                M[t] = s((n / T) * (e + 0.5) * t);
              for (let e = 0, n = 0; e < _; e++)
                for (
                  let t = e ? 0 : 1, l = 2 * M[e];
                  t * _ < E * (_ - e);
                  t++, n++
                )
                  r += I[n] * L[t] * l;
              for (let e = 0, n = 0; e < 3; e++)
                for (let t = e ? 0 : 1, l = 2 * M[e]; t < 3 - e; t++, n++) {
                  let e = L[t] * l;
                  (m += N[n] * e), (h += Z[n] * e);
                }
              if (d)
                for (let e = 0, n = 0; e < 5; e++)
                  for (let t = e ? 0 : 1, l = 2 * M[e]; t < 5 - e; t++, n++)
                    x += f[n] * L[t] * l;
              let C = r - (2 / 3) * m,
                g = (3 * r - C + h) / 2,
                R = g - h;
              (v[a] = l(0, 255 * t(1, g))),
                (v[a + 1] = l(0, 255 * t(1, R))),
                (v[a + 2] = l(0, 255 * t(1, C))),
                (v[a + 3] = l(0, 255 * t(1, x)));
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
            i = [
              0, 498536548, 997073096, 651767980, 1994146192, 1802195444,
              1303535960, 1342533948, -306674912, -267414716, -690576408,
              -882789492, -1687895376, -2032938284, -1609899400, -1111625188,
            ],
            r = 1,
            o = 0;
          for (let e = 0, s = 0, i = l - 1; e < n; e++, i += l - 1)
            for (
              a.push(
                e + 1 < n ? 0 : 1,
                255 & l,
                l >> 8,
                255 & ~l,
                (l >> 8) ^ 255,
                0,
              ),
                o = (o + r) % 65521;
              s < i;
              s++
            ) {
              let e = 255 & t[s];
              a.push(e), (o = (o + (r = (r + e) % 65521)) % 65521);
            }
          for (let [e, n] of (a.push(
            o >> 8,
            255 & o,
            r >> 8,
            255 & r,
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
                (t = ((t = (t >>> 4) ^ i[15 & t]) >>> 4) ^ i[15 & t]);
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
//# sourceMappingURL=16bf7a5da6963679d483.js.map
