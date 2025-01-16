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
          a = i[(0, o.runtimeHashMessageKey)(e)],
          l = t.currentLocale;
        t.currentLocale = "en-US";
        let s = t.string(a);
        return (t.currentLocale = l), s;
      };
    },
    988645: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var o = n(200651);
      n(192379);
      var i = n(481060),
        a = n(144535),
        l = n(332664),
        s = n(142497),
        r = n(774378),
        u = n(445102),
        c = n(190378),
        d = n(388032);
      function b(e) {
        let { onClose: t, transitionState: b, analyticsData: m } = e,
          h = (0, a.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, o.jsx)(l.Z, {
          modalType: "voice",
          header: d.intl.string(d.t.Ss6tlZ),
          body: d.intl.string(d.t.tLi4cX),
          problemTitle: d.intl.string(d.t.FJmoxM),
          problems: (0, r.Z)(!1),
          feedbackProblems: [h],
          onSubmit: function (e) {
            var t, a, l;
            let { rating: b, problem: h, dontShowAgain: _, feedback: g } = e;
            if ((_ && (0, s.Kw)(c.v.VOICE_CALL_FEEDBACK), null != b))
              (0, u.Z)(
                b,
                ((t = h),
                null !==
                  (l =
                    null === (a = (0, r.Z)(!1).find((e) => e.label === t)) ||
                    void 0 === a
                      ? void 0
                      : a.code) && void 0 !== l
                  ? l
                  : null),
                h,
                g,
                m,
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
          transitionState: b,
          otherKey: h,
        });
      }
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      }),
        n(653041);
      var o = n(392711),
        i = n.n(o);
      let a = (e, t) => {
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
          return N;
        },
        Z: function () {
          return k;
        },
      }),
        n(47120);
      var o = n(200651),
        i = n(192379),
        a = n(120356),
        l = n.n(a),
        s = n(392711),
        r = n.n(s),
        u = n(481060),
        c = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        h = n(237617),
        _ = n(572539),
        g = n(626135),
        p = n(63063),
        f = n(957115),
        v = n(531578),
        x = n(981631),
        j = n(388032),
        C = n(720816);
      let Z = [
        {
          className: C.emojiSad,
          rating: v.aZ.BAD,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiNeutral,
          rating: v.aZ.NEUTRAL,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiHappy,
          rating: v.aZ.GOOD,
          classNameSelected: C.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: i,
          onChangeRating: a,
        } = e;
        return (0, o.jsx)(b.Z, {
          justify: b.Z.Justify.BETWEEN,
          align: b.Z.Align.CENTER,
          className: l()(C.ratingsSelector, t),
          children: (null != i ? i : Z).map((e) => {
            let { rating: t, className: i, classNameSelected: s } = e;
            return (0, o.jsx)(
              u.Clickable,
              {
                onClick: () => a(t),
                "aria-label": t,
                children: (0, o.jsx)("div", {
                  className: l()(i, n === t ? s : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function O() {
        return (0, o.jsx)(u.Text, {
          className: C.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.ybi2tL, {
            helpdeskURL: p.Z.getSubmitRequestURL(),
          }),
        });
      }
      function k(e) {
        let {
            modalType: t,
            header: n,
            body: a,
            problemTitle: s,
            problems: p,
            transitionState: Z,
            ratingConfigs: k,
            feedbackProblems: E = [],
            otherKey: A,
            ratingsSelectorClassName: I,
            hideDontShowCheckbox: L,
            startRating: S = null,
            hideHelpDeskLink: D = !1,
            onSubmit: y,
            onClose: B,
          } = e,
          R = (0, d.Z)(p),
          [T, w] = i.useState(!1),
          [M, U] = i.useState(S),
          [H, F] = i.useState(null),
          [K, P] = i.useState(r().shuffle(p)),
          [V, G] = i.useState(""),
          z = (0, m.Dt)(),
          q = (0, h.Z)(M),
          J = (0, h.Z)(T),
          Q = (0, h.Z)(H),
          W = (0, h.Z)(y),
          Y = (0, h.Z)(V),
          X = null != H && E.includes(H);
        return (
          i.useEffect(() => {
            !r().isEqual(R, p) && P((0, f.B)(p, A));
          }, [p, R, A]),
          (0, c.Z)(
            () => (
              g.default.track(x.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                W.current({
                  rating: q.current,
                  problem: Q.current,
                  dontShowAgain: J.current,
                  feedback: Y.current,
                });
              }
            ),
          ),
          (0, o.jsxs)(u.ModalRoot, {
            transitionState: Z,
            className: C.__invalid_modalRoot,
            "aria-labelledby": z,
            children: [
              (0, o.jsxs)(u.ModalHeader, {
                separator: !1,
                className: C.headerContainer,
                children: [
                  (0, o.jsx)(u.Heading, {
                    id: z,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, o.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: C.ratingBody,
                    children: a,
                  }),
                  X
                    ? null
                    : (0, o.jsx)(N, {
                        className: l()(C.emojis, I),
                        selectedRating: M,
                        onChangeRating: function (e) {
                          U(e), e === v.aZ.GOOD && B();
                        },
                        ratingConfigs: k,
                      }),
                ],
              }),
              (0, o.jsxs)(u.ModalContent, {
                className: C.__invalid_content,
                children: [
                  null == M || M === v.aZ.GOOD || X
                    ? null
                    : (0, o.jsx)(u.FormItem, {
                        title: s,
                        className: C.problemInfo,
                        children: (0, o.jsx)(_.Z, {
                          options: K,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !E.includes(t) && B();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !E.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, o.jsxs)(u.FormItem, {
                        title: j.intl.string(j.t.h95hcn),
                        className: C.problemInfo,
                        children: [
                          (0, o.jsx)(u.TextArea, {
                            value: V,
                            maxLength: v.iF,
                            onChange: G,
                          }),
                          !D && (0, o.jsx)(O, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !L) &&
                (0, o.jsx)(u.ModalFooter, {
                  className: C.footer,
                  direction: b.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              F(null), G("");
                            },
                            children: j.intl.string(j.t["13/7kZ"]),
                          }),
                          (0, o.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: B,
                            children: j.intl.string(j.t.geKm7u),
                          }),
                        ],
                      })
                    : (0, o.jsx)(u.Checkbox, {
                        type: u.Checkbox.Types.INVERTED,
                        size: 18,
                        value: T,
                        onChange: () => w(!T),
                        children: (0, o.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          children: j.intl.string(j.t["5E9SBw"]),
                        }),
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
        a = n.n(i),
        l = n(481060),
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
          className: a()(r.root, i),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: a()(r.option, u),
                children: [
                  (0, o.jsx)(l.Text, {
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
          return l;
        },
      }),
        n(653041);
      var o,
        i,
        a = n(388032);
      function l(e) {
        let t = [
          {
            label: a.intl.string(a.t["UqD/9f"]),
            code: 2,
            value: "I couldn't hear audio at all",
          },
          {
            label: a.intl.string(a.t.DVEGuL),
            code: 3,
            value: "Nobody could hear me",
          },
          {
            label: a.intl.string(a.t["2nWcBw"]),
            code: 4,
            value: "Audio had echos or feedback",
          },
          {
            label: a.intl.string(a.t.K3E4Dw),
            code: 5,
            value: "Audio was robotic or distorted",
          },
          {
            label: a.intl.string(a.t.Dpm2U1),
            code: 6,
            value: "Audio cut in and out",
          },
          {
            label: a.intl.string(a.t.kuGsi4),
            code: 7,
            value: "Volume was too low or high",
          },
          {
            label: a.intl.string(a.t.PkiFCQ),
            code: 8,
            value: "Background noise was too loud",
          },
        ];
        return (
          e &&
            t.push({
              label: a.intl.string(a.t.hvIDwc),
              code: 9,
              value: "Issues with speakerphone",
            }),
          t.push(
            {
              label: a.intl.string(a.t["+gUm1t"]),
              code: 10,
              value: "Issues with headset/bluetooth",
            },
            { label: a.intl.string(a.t["emlT9/"]), code: 1, value: "Other" },
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
          return l;
        },
      });
      var o = n(131951),
        i = n(626135),
        a = n(981631);
      function l(e, t, n, l, s) {
        let r = o.Z.getSettings(),
          u = o.Z.getInputDeviceId(),
          c = o.Z.getInputDevices()[u],
          d = o.Z.getOutputDeviceId(),
          b = o.Z.getOutputDevices()[d],
          m = o.Z.getVideoDeviceId(),
          h = o.Z.getVideoDevices()[m],
          _ = o.Z.getNoiseCancellation(),
          g = o.Z.getMediaEngine().getAudioSubsystem(),
          p = o.Z.getMediaEngine().getAudioLayer();
        i.default.track(a.rMx.CALL_REPORT_PROBLEM, {
          rating: null != e ? e : "no response",
          reason_code: t,
          reason_description: n,
          feedback: l,
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
          output_device_name: null == b ? void 0 : b.name,
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
//# sourceMappingURL=6fd8bff4716b52831af5.js.map
