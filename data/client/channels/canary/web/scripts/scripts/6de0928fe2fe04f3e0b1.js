"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96888"],
  {
    936445: function (e) {
      e.exports = "/assets/0b3b85ccbde560fed689.svg";
    },
    900564: function (e) {
      e.exports = "/assets/a8315da78d79c09bb24e.svg";
    },
    670903: function (e) {
      e.exports = "/assets/b2ae62e3f77efa49ca11.svg";
    },
    988645: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return E;
          },
        });
      var n = o(735250);
      o(470079);
      var a = o(481060),
        s = o(375964),
        l = o.n(s),
        i = o(332664),
        r = o(142497),
        u = o(774378),
        c = o(445102),
        d = o(190378),
        _ = o(689938);
      let b = [l().CALL_FEEDBACK_OPTION_OTHER];
      function E(e) {
        let { onClose: t, transitionState: s, analyticsData: E } = e;
        return (0, n.jsx)(i.Z, {
          header: _.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
          body: _.Z.Messages.CALL_FEEDBACK_PROMPT,
          problemTitle: _.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
          problems: (0, u.Z)(!1),
          feedbackProblems: b,
          onSubmit: function (e) {
            var t, s, l;
            let { rating: i, problem: b, dontShowAgain: m, feedback: O } = e;
            if ((m && (0, r.Kw)(d.v.VOICE_CALL_FEEDBACK), null != i))
              (0, c.Z)(
                i,
                ((t = b),
                null !==
                  (l =
                    null === (s = (0, u.Z)(!1).find((e) => e.label === t)) ||
                    void 0 === s
                      ? void 0
                      : s.code) && void 0 !== l
                  ? l
                  : null),
                b,
                O,
                E,
              ),
                null != b &&
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await o
                      .e("14466")
                      .then(o.bind(o, 729328));
                    return (t) =>
                      (0, n.jsx)(e, {
                        body: _.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                        ...t,
                      });
                  });
          },
          onClose: t,
          transitionState: s,
          otherKey: l().CALL_FEEDBACK_OPTION_OTHER,
        });
      }
    },
    957115: function (e, t, o) {
      o.d(t, {
        B: function () {
          return s;
        },
      }),
        o(653041);
      var n = o(392711),
        a = o.n(n);
      let s = (e, t) => {
        let o = a().shuffle(e),
          n = o.findIndex((e) => e.value === t);
        if (n > -1) {
          let e = o[n];
          o.splice(n, 1), o.push(e);
        }
        return o;
      };
    },
    332664: function (e, t, o) {
      o.d(t, {
        L: function () {
          return g;
        },
        Z: function () {
          return N;
        },
      }),
        o(47120);
      var n = o(735250),
        a = o(470079),
        s = o(120356),
        l = o.n(s),
        i = o(392711),
        r = o.n(i),
        u = o(481060),
        c = o(110924),
        d = o(600164),
        _ = o(313201),
        b = o(237617),
        E = o(572539),
        m = o(63063),
        O = o(957115),
        h = o(871364),
        C = o(531578),
        A = o(689938),
        p = o(940256);
      let f = [
        {
          className: p.emojiSad,
          rating: C.aZ.BAD,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiNeutral,
          rating: C.aZ.NEUTRAL,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiHappy,
          rating: C.aZ.GOOD,
          classNameSelected: p.selected,
        },
      ];
      function g(e) {
        let {
          className: t,
          selectedRating: o,
          ratingConfigs: a,
          onChangeRating: s,
        } = e;
        return (0, n.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(p.ratingsSelector, t),
          children: (null != a ? a : f).map((e) => {
            let { rating: t, className: a, classNameSelected: i } = e;
            return (0, n.jsx)(
              u.Clickable,
              {
                onClick: () => s(t),
                "aria-label": t,
                children: (0, n.jsx)("div", {
                  className: l()(a, o === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function L() {
        return (0, n.jsx)(u.Text, {
          className: p.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function N(e) {
        let {
            header: t,
            body: o,
            problemTitle: s,
            problems: i,
            transitionState: m,
            ratingConfigs: f,
            feedbackProblems: N = [],
            otherKey: D,
            ratingsSelectorClassName: I,
            hideDontShowCheckbox: Z,
            startRating: v = null,
            onSubmit: x,
            onClose: B,
          } = e,
          S = (0, c.Z)(i),
          [T, j] = a.useState(!1),
          [k, M] = a.useState(v),
          [R, K] = a.useState(null),
          [F, H] = a.useState(r().shuffle(i)),
          [P, U] = a.useState(""),
          y = (0, _.Dt)(),
          w = (0, b.Z)(k),
          G = (0, b.Z)(T),
          V = (0, b.Z)(R),
          z = (0, b.Z)(x),
          Y = (0, b.Z)(P),
          q = null != R && N.includes(R),
          { renderSkipButton: W } = h.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(S, i) && H((0, O.B)(i, D));
          }, [i, S, D]),
          a.useEffect(
            () => () => {
              z.current({
                rating: w.current,
                problem: V.current,
                dontShowAgain: G.current,
                feedback: Y.current,
              });
            },
            [],
          ),
          (0, n.jsxs)(u.ModalRoot, {
            transitionState: m,
            className: p.__invalid_modalRoot,
            "aria-labelledby": y,
            children: [
              (0, n.jsxs)(u.ModalHeader, {
                separator: !1,
                className: p.headerContainer,
                children: [
                  (0, n.jsx)(u.Heading, {
                    id: y,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: p.ratingBody,
                    children: o,
                  }),
                  q
                    ? null
                    : (0, n.jsx)(g, {
                        className: l()(p.emojis, I),
                        selectedRating: k,
                        onChangeRating: function (e) {
                          M(e), e === C.aZ.GOOD && B();
                        },
                        ratingConfigs: f,
                      }),
                ],
              }),
              (0, n.jsxs)(u.ModalContent, {
                className: p.__invalid_content,
                children: [
                  null == k || k === C.aZ.GOOD || q
                    ? null
                    : (0, n.jsx)(u.FormItem, {
                        title: s,
                        className: p.problemInfo,
                        children: (0, n.jsx)(E.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            K(t), !N.includes(t) && B();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !N.includes(t);
                          },
                        }),
                      }),
                  q
                    ? (0, n.jsxs)(u.FormItem, {
                        title: A.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: p.problemInfo,
                        children: [
                          (0, n.jsx)(u.TextArea, {
                            value: P,
                            maxLength: C.iF,
                            onChange: U,
                          }),
                          (0, n.jsx)(L, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !Z) &&
                (0, n.jsx)(u.ModalFooter, {
                  className: p.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: q
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              K(null), U("");
                            },
                            children: A.Z.Messages.BACK,
                          }),
                          (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: B,
                            children: A.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: T,
                            onChange: () => j(!T),
                            children: (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: A.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          W &&
                            null != k &&
                            k !== C.aZ.GOOD &&
                            (0, n.jsx)(u.Button, {
                              type: "submit",
                              size: u.Button.Sizes.SMALL,
                              onClick: B,
                              children: A.Z.Messages.SKIP,
                            }),
                        ],
                      }),
                }),
            ],
          })
        );
      }
    },
    871364: function (e, t, o) {
      o.d(t, {
        w: function () {
          return n;
        },
      });
      let n = (0, o(818083).B)({
        kind: "user",
        id: "2024-09_feedbackskipbutton",
        label: "Add a skip button to the feedback modal",
        defaultConfig: { renderSkipButton: !1 },
        treatments: [
          {
            id: 1,
            label: "Show skip button",
            config: { renderSkipButton: !0 },
          },
        ],
      });
    },
    572539: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = o(735250);
      o(470079);
      var a = o(120356),
        s = o.n(a),
        l = o(481060),
        i = o(259580),
        r = o(373521);
      function u(e) {
        let {
          options: t,
          onClick: o,
          className: a,
          optionClassName: u,
          hideCaret: c,
        } = e;
        return (0, n.jsx)("div", {
          className: s()(r.root, a),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              l.Clickable,
              {
                onClick: () => o(e),
                className: s()(r.option, u),
                children: [
                  (0, n.jsx)(l.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == c ? void 0 : c(e)) &&
                    (0, n.jsx)(i.Z, {
                      className: r.caret,
                      direction: i.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    774378: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return l;
        },
      }),
        o(653041);
      var n,
        a,
        s = o(689938);
      function l(e) {
        let t = [
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_COULD_NOT_HEAR_AUDIO,
            code: 2,
            value: "I couldn't hear audio at all",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_NOBODY_COULD_HEAR_ME,
            code: 3,
            value: "Nobody could hear me",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_AUDIO_ECHOS,
            code: 4,
            value: "Audio had echos or feedback",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_AUDIO_ROBOTIC,
            code: 5,
            value: "Audio was robotic or distorted",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_AUDIO_CUT,
            code: 6,
            value: "Audio cut in and out",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_BAD_VOLUME,
            code: 7,
            value: "Volume was too low or high",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_BACKGROUND_NOISE,
            code: 8,
            value: "Background noise was too loud",
          },
        ];
        return (
          e &&
            t.push({
              label: s.Z.Messages.CALL_FEEDBACK_OPTION_SPEAKERPHONE,
              code: 9,
              value: "Issues with speakerphone",
            }),
          t.push(
            {
              label: s.Z.Messages.CALL_FEEDBACK_OPTION_HEADSET,
              code: 10,
              value: "Issues with headset/bluetooth",
            },
            {
              label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
              code: 1,
              value: "Other",
            },
          ),
          t
        );
      }
      ((a = n || (n = {})).COULD_NOT_HEAR_AUDIO =
        "I couldn't hear audio at all"),
        (a.NOBODY_COULD_HEAR_ME = "Nobody could hear me"),
        (a.AUDIO_ECHOS = "Audio had echos or feedback"),
        (a.AUDIO_ROBOTIC = "Audio was robotic or distorted"),
        (a.AUDIO_CUT = "Audio cut in and out"),
        (a.BAD_VOLUME = "Volume was too low or high"),
        (a.BACKGROUND_NOISE = "Background noise was too loud"),
        (a.SPEAKERPHONE = "Issues with speakerphone"),
        (a.HEADSET = "Issues with headset/bluetooth"),
        (a.OTHER = "Other");
    },
    445102: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = o(131951),
        a = o(626135),
        s = o(981631);
      function l(e, t, o, l, i) {
        let r = n.Z.getSettings(),
          u = n.Z.getInputDeviceId(),
          c = n.Z.getInputDevices()[u],
          d = n.Z.getOutputDeviceId(),
          _ = n.Z.getOutputDevices()[d],
          b = n.Z.getVideoDeviceId(),
          E = n.Z.getVideoDevices()[b],
          m = n.Z.getNoiseCancellation();
        a.default.track(s.rMx.CALL_REPORT_PROBLEM, {
          rating: null != e ? e : "no response",
          reason_code: t,
          reason_description: o,
          feedback: l,
          audio_input_mode: r.mode,
          automatic_audio_input_sensitivity_enabled:
            r.modeOptions.autoThreshold,
          audio_input_sensitivity: r.modeOptions.threshold,
          echo_cancellation_enabled: r.echoCancellation,
          noise_suppression_enabled: r.noiseSuppression,
          automatic_gain_control_enabled: r.automaticGainControl,
          voice_output_volume: r.outputVolume,
          noise_cancellation_enabled: m,
          input_device_name: null == c ? void 0 : c.name,
          output_device_name: null == _ ? void 0 : _.name,
          video_device_name: null == E ? void 0 : E.name,
          ...i,
        });
      }
    },
    940256: function (e, t, o) {
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
    373521: function (e, t, o) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=6de0928fe2fe04f3e0b1.js.map
