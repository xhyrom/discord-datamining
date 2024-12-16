"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96888"],
  {
    829302: function (e) {
      e.exports = "/assets/0b3b85ccbde560fed689.svg";
    },
    900564: function (e) {
      e.exports = "/assets/a8315da78d79c09bb24e.svg";
    },
    670903: function (e) {
      e.exports = "/assets/b2ae62e3f77efa49ca11.svg";
    },
    144535: function (e, t, n) {
      n.d(t, {
        I: function () {
          return i;
        },
      });
      var o = n(969090);
      let i = function (e) {
        let { intl: t, t: i } = n(388032),
          l = i[(0, o.runtimeHashMessageKey)(e)],
          a = t.currentLocale;
        t.currentLocale = "en-US";
        let s = t.string(l);
        return (t.currentLocale = a), s;
      };
    },
    988645: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var o = n(200651);
      n(192379);
      var i = n(481060),
        l = n(144535),
        a = n(332664),
        s = n(142497),
        r = n(774378),
        u = n(445102),
        c = n(190378),
        d = n(388032);
      function m(e) {
        let { onClose: t, transitionState: m, analyticsData: b } = e,
          h = (0, l.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, o.jsx)(a.Z, {
          modalType: "voice",
          header: d.intl.string(d.t.Ss6tlZ),
          body: d.intl.string(d.t.tLi4cX),
          problemTitle: d.intl.string(d.t.FJmoxM),
          problems: (0, r.Z)(!1),
          feedbackProblems: [h],
          onSubmit: function (e) {
            var t, l, a;
            let { rating: m, problem: h, dontShowAgain: _, feedback: g } = e;
            if ((_ && (0, s.Kw)(c.v.VOICE_CALL_FEEDBACK), null != m))
              (0, u.Z)(
                m,
                ((t = h),
                null !==
                  (a =
                    null === (l = (0, r.Z)(!1).find((e) => e.label === t)) ||
                    void 0 === l
                      ? void 0
                      : l.code) && void 0 !== a
                  ? a
                  : null),
                h,
                g,
                b,
              ),
                null != h &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, o.jsx)(e, {
                        body: d.intl.string(d.t["d9+vQ0"]),
                        ...t,
                      });
                  });
          },
          onClose: t,
          transitionState: m,
          otherKey: h,
        });
      }
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return l;
        },
      }),
        n(653041);
      var o = n(392711),
        i = n.n(o);
      let l = (e, t) => {
        let n = i().shuffle(e),
          o = n.findIndex((e) => e.value === t);
        if (o > -1) {
          let e = n[o];
          n.splice(o, 1), n.push(e);
        }
        return n;
      };
    },
    332664: function (e, t, n) {
      n.d(t, {
        L: function () {
          return O;
        },
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var o = n(200651),
        i = n(192379),
        l = n(120356),
        a = n.n(l),
        s = n(392711),
        r = n.n(s),
        u = n(481060),
        c = n(110924),
        d = n(600164),
        m = n(313201),
        b = n(237617),
        h = n(572539),
        _ = n(626135),
        g = n(63063),
        p = n(957115),
        f = n(531578),
        v = n(981631),
        x = n(388032),
        j = n(720816);
      let C = [
        {
          className: j.emojiSad,
          rating: f.aZ.BAD,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiNeutral,
          rating: f.aZ.NEUTRAL,
          classNameSelected: j.selected,
        },
        {
          className: j.emojiHappy,
          rating: f.aZ.GOOD,
          classNameSelected: j.selected,
        },
      ];
      function O(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: i,
          onChangeRating: l,
        } = e;
        return (0, o.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: a()(j.ratingsSelector, t),
          children: (null != i ? i : C).map((e) => {
            let { rating: t, className: i, classNameSelected: s } = e;
            return (0, o.jsx)(
              u.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, o.jsx)("div", {
                  className: a()(i, n === t ? s : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function Z() {
        return (0, o.jsx)(u.Text, {
          className: j.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.intl.format(x.t.ybi2tL, {
            helpdeskURL: g.Z.getSubmitRequestURL(),
          }),
        });
      }
      function N(e) {
        let {
            modalType: t,
            header: n,
            body: l,
            problemTitle: s,
            problems: g,
            transitionState: C,
            ratingConfigs: N,
            feedbackProblems: k = [],
            otherKey: E,
            ratingsSelectorClassName: L,
            hideDontShowCheckbox: S,
            startRating: A = null,
            hideHelpDeskLink: I = !1,
            onSubmit: D,
            onClose: y,
          } = e,
          B = (0, c.Z)(g),
          [R, T] = i.useState(!1),
          [w, M] = i.useState(A),
          [U, H] = i.useState(null),
          [F, K] = i.useState(r().shuffle(g)),
          [G, P] = i.useState(""),
          V = (0, m.Dt)(),
          z = (0, b.Z)(w),
          q = (0, b.Z)(R),
          W = (0, b.Z)(U),
          J = (0, b.Z)(D),
          Q = (0, b.Z)(G),
          X = null != U && k.includes(U);
        return (
          i.useEffect(() => {
            !r().isEqual(B, g) && K((0, p.B)(g, E));
          }, [g, B, E]),
          i.useEffect(
            () => (
              _.default.track(v.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: z.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: Q.current,
                });
              }
            ),
            [],
          ),
          (0, o.jsxs)(u.ModalRoot, {
            transitionState: C,
            className: j.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, o.jsxs)(u.ModalHeader, {
                separator: !1,
                className: j.headerContainer,
                children: [
                  (0, o.jsx)(u.Heading, {
                    id: V,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, o.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: j.ratingBody,
                    children: l,
                  }),
                  X
                    ? null
                    : (0, o.jsx)(O, {
                        className: a()(j.emojis, L),
                        selectedRating: w,
                        onChangeRating: function (e) {
                          M(e), e === f.aZ.GOOD && y();
                        },
                        ratingConfigs: N,
                      }),
                ],
              }),
              (0, o.jsxs)(u.ModalContent, {
                className: j.__invalid_content,
                children: [
                  null == w || w === f.aZ.GOOD || X
                    ? null
                    : (0, o.jsx)(u.FormItem, {
                        title: s,
                        className: j.problemInfo,
                        children: (0, o.jsx)(h.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !k.includes(t) && y();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !k.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, o.jsxs)(u.FormItem, {
                        title: x.intl.string(x.t.h95hcn),
                        className: j.problemInfo,
                        children: [
                          (0, o.jsx)(u.TextArea, {
                            value: G,
                            maxLength: f.iF,
                            onChange: P,
                          }),
                          !I && (0, o.jsx)(Z, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !S) &&
                (0, o.jsx)(u.ModalFooter, {
                  className: j.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), P("");
                            },
                            children: x.intl.string(x.t["13/7kZ"]),
                          }),
                          (0, o.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: y,
                            children: x.intl.string(x.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: () => T(!R),
                            children: (0, o.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: x.intl.string(x.t["5E9SBw"]),
                            }),
                          }),
                          null != w &&
                            w !== f.aZ.GOOD &&
                            (0, o.jsx)(u.Button, {
                              type: "submit",
                              size: u.Button.Sizes.SMALL,
                              onClick: y,
                              children: x.intl.string(x.t["5WxrcX"]),
                            }),
                        ],
                      }),
                }),
            ],
          })
        );
      }
    },
    572539: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(200651);
      n(192379);
      var i = n(120356),
        l = n.n(i),
        a = n(481060),
        s = n(259580),
        r = n(995181);
      function u(e) {
        let {
          options: t,
          onClick: n,
          className: i,
          optionClassName: u,
          hideCaret: c,
        } = e;
        return (0, o.jsx)("div", {
          className: l()(r.root, i),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              a.Clickable,
              {
                onClick: () => n(e),
                className: l()(r.option, u),
                children: [
                  (0, o.jsx)(a.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == c ? void 0 : c(e)) &&
                    (0, o.jsx)(s.Z, {
                      className: r.caret,
                      direction: s.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    774378: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(653041);
      var o,
        i,
        l = n(388032);
      function a(e) {
        let t = [
          {
            label: l.intl.string(l.t["UqD/9f"]),
            code: 2,
            value: "I couldn't hear audio at all",
          },
          {
            label: l.intl.string(l.t.DVEGuL),
            code: 3,
            value: "Nobody could hear me",
          },
          {
            label: l.intl.string(l.t["2nWcBw"]),
            code: 4,
            value: "Audio had echos or feedback",
          },
          {
            label: l.intl.string(l.t.K3E4Dw),
            code: 5,
            value: "Audio was robotic or distorted",
          },
          {
            label: l.intl.string(l.t.Dpm2U1),
            code: 6,
            value: "Audio cut in and out",
          },
          {
            label: l.intl.string(l.t.kuGsi4),
            code: 7,
            value: "Volume was too low or high",
          },
          {
            label: l.intl.string(l.t.PkiFCQ),
            code: 8,
            value: "Background noise was too loud",
          },
        ];
        return (
          e &&
            t.push({
              label: l.intl.string(l.t.hvIDwc),
              code: 9,
              value: "Issues with speakerphone",
            }),
          t.push(
            {
              label: l.intl.string(l.t["+gUm1t"]),
              code: 10,
              value: "Issues with headset/bluetooth",
            },
            { label: l.intl.string(l.t["emlT9/"]), code: 1, value: "Other" },
          ),
          t
        );
      }
      ((i = o || (o = {})).COULD_NOT_HEAR_AUDIO =
        "I couldn't hear audio at all"),
        (i.NOBODY_COULD_HEAR_ME = "Nobody could hear me"),
        (i.AUDIO_ECHOS = "Audio had echos or feedback"),
        (i.AUDIO_ROBOTIC = "Audio was robotic or distorted"),
        (i.AUDIO_CUT = "Audio cut in and out"),
        (i.BAD_VOLUME = "Volume was too low or high"),
        (i.BACKGROUND_NOISE = "Background noise was too loud"),
        (i.SPEAKERPHONE = "Issues with speakerphone"),
        (i.HEADSET = "Issues with headset/bluetooth"),
        (i.OTHER = "Other");
    },
    445102: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = n(131951),
        i = n(626135),
        l = n(981631);
      function a(e, t, n, a, s) {
        let r = o.Z.getSettings(),
          u = o.Z.getInputDeviceId(),
          c = o.Z.getInputDevices()[u],
          d = o.Z.getOutputDeviceId(),
          m = o.Z.getOutputDevices()[d],
          b = o.Z.getVideoDeviceId(),
          h = o.Z.getVideoDevices()[b],
          _ = o.Z.getNoiseCancellation(),
          g = o.Z.getMediaEngine().getAudioSubsystem(),
          p = o.Z.getMediaEngine().getAudioLayer();
        i.default.track(l.rMx.CALL_REPORT_PROBLEM, {
          rating: null != e ? e : "no response",
          reason_code: t,
          reason_description: n,
          feedback: a,
          audio_input_mode: r.mode,
          automatic_audio_input_sensitivity_enabled:
            r.modeOptions.autoThreshold,
          audio_input_sensitivity: r.modeOptions.threshold,
          echo_cancellation_enabled: r.echoCancellation,
          noise_suppression_enabled: r.noiseSuppression,
          automatic_gain_control_enabled: r.automaticGainControl,
          voice_output_volume: r.outputVolume,
          noise_cancellation_enabled: _,
          input_device_name: null == c ? void 0 : c.name,
          output_device_name: null == m ? void 0 : m.name,
          video_device_name: null == h ? void 0 : h.name,
          audio_subsystem: g,
          audio_layer: p,
          automatic_audio_subsystem: r.automaticAudioSubsystem,
          ...s,
        });
      }
    },
    720816: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_b58b14",
        modalCloseButton: "modalCloseButton_b58b14",
        helpdeskLink: "helpdeskLink_b58b14",
        header: "header_b58b14",
        ratingBody: "ratingBody_b58b14",
        footer: "footer_b58b14",
        ratingsSelector: "ratingsSelector_b58b14",
        emojis: "emojis_b58b14",
        problemInfo: "problemInfo_b58b14",
        selected: "selected_b58b14",
        emojiSad: "emojiSad_b58b14 emoji_b58b14",
        emojiNeutral: "emojiNeutral_b58b14 emoji_b58b14",
        emojiHappy: "emojiHappy_b58b14 emoji_b58b14",
      };
    },
    995181: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=10454176105e3b23e00b.js.map
