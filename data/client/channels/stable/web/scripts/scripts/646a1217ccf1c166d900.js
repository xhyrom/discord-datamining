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
    988645: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return m;
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
        d = o(445102),
        c = o(190378),
        _ = o(689938);
      let b = [l().CALL_FEEDBACK_OPTION_OTHER];
      function m(e) {
        let { onClose: t, transitionState: s, analyticsData: m } = e;
        return (0, n.jsx)(i.Z, {
          modalType: "voice",
          header: _.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
          body: _.Z.Messages.CALL_FEEDBACK_PROMPT,
          problemTitle: _.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
          problems: (0, u.Z)(!1),
          feedbackProblems: b,
          onSubmit: function (e) {
            var t, s, l;
            let { rating: i, problem: b, dontShowAgain: E, feedback: O } = e;
            if ((E && (0, r.Kw)(c.v.VOICE_CALL_FEEDBACK), null != i))
              (0, d.Z)(
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
                m,
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
          return N;
        },
        Z: function () {
          return Z;
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
        d = o(110924),
        c = o(600164),
        _ = o(313201),
        b = o(237617),
        m = o(572539),
        E = o(626135),
        O = o(63063),
        h = o(957115),
        C = o(871364),
        A = o(531578),
        p = o(981631),
        g = o(689938),
        f = o(214859);
      let L = [
        {
          className: f.emojiSad,
          rating: A.aZ.BAD,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiNeutral,
          rating: A.aZ.NEUTRAL,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiHappy,
          rating: A.aZ.GOOD,
          classNameSelected: f.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: o,
          ratingConfigs: a,
          onChangeRating: s,
        } = e;
        return (0, n.jsx)(c.Z, {
          justify: c.Z.Justify.BETWEEN,
          align: c.Z.Align.CENTER,
          className: l()(f.ratingsSelector, t),
          children: (null != a ? a : L).map((e) => {
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
      function D() {
        return (0, n.jsx)(u.Text, {
          className: f.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: O.Z.getSubmitRequestURL(),
          }),
        });
      }
      function Z(e) {
        let {
            modalType: t,
            header: o,
            body: s,
            problemTitle: i,
            problems: O,
            transitionState: L,
            ratingConfigs: Z,
            feedbackProblems: I = [],
            otherKey: v,
            ratingsSelectorClassName: x,
            hideDontShowCheckbox: B,
            startRating: S = null,
            onSubmit: T,
            onClose: j,
          } = e,
          M = (0, d.Z)(O),
          [k, R] = a.useState(!1),
          [y, F] = a.useState(S),
          [K, H] = a.useState(null),
          [P, U] = a.useState(r().shuffle(O)),
          [w, G] = a.useState(""),
          V = (0, _.Dt)(),
          z = (0, b.Z)(y),
          Y = (0, b.Z)(k),
          q = (0, b.Z)(K),
          W = (0, b.Z)(T),
          J = (0, b.Z)(w),
          Q = null != K && I.includes(K),
          { renderSkipButton: X } = C.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(M, O) && U((0, h.B)(O, v));
          }, [O, M, v]),
          a.useEffect(
            () => (
              E.default.track(p.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                W.current({
                  rating: z.current,
                  problem: q.current,
                  dontShowAgain: Y.current,
                  feedback: J.current,
                });
              }
            ),
            [],
          ),
          (0, n.jsxs)(u.ModalRoot, {
            transitionState: L,
            className: f.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, n.jsxs)(u.ModalHeader, {
                separator: !1,
                className: f.headerContainer,
                children: [
                  (0, n.jsx)(u.Heading, {
                    id: V,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: o,
                  }),
                  (0, n.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: f.ratingBody,
                    children: s,
                  }),
                  Q
                    ? null
                    : (0, n.jsx)(N, {
                        className: l()(f.emojis, x),
                        selectedRating: y,
                        onChangeRating: function (e) {
                          F(e), e === A.aZ.GOOD && j();
                        },
                        ratingConfigs: Z,
                      }),
                ],
              }),
              (0, n.jsxs)(u.ModalContent, {
                className: f.__invalid_content,
                children: [
                  null == y || y === A.aZ.GOOD || Q
                    ? null
                    : (0, n.jsx)(u.FormItem, {
                        title: i,
                        className: f.problemInfo,
                        children: (0, n.jsx)(m.Z, {
                          options: P,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !I.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !I.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, n.jsxs)(u.FormItem, {
                        title: g.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: f.problemInfo,
                        children: [
                          (0, n.jsx)(u.TextArea, {
                            value: w,
                            maxLength: A.iF,
                            onChange: G,
                          }),
                          (0, n.jsx)(D, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !B) &&
                (0, n.jsx)(u.ModalFooter, {
                  className: f.footer,
                  direction: c.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), G("");
                            },
                            children: g.Z.Messages.BACK,
                          }),
                          (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: j,
                            children: g.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: k,
                            onChange: () => R(!k),
                            children: (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: g.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          X &&
                            null != y &&
                            y !== A.aZ.GOOD &&
                            (0, n.jsx)(u.Button, {
                              type: "submit",
                              size: u.Button.Sizes.SMALL,
                              onClick: j,
                              children: g.Z.Messages.SKIP,
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
        r = o(20535);
      function u(e) {
        let {
          options: t,
          onClick: o,
          className: a,
          optionClassName: u,
          hideCaret: d,
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
                  !(null == d ? void 0 : d(e)) &&
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
          d = n.Z.getInputDevices()[u],
          c = n.Z.getOutputDeviceId(),
          _ = n.Z.getOutputDevices()[c],
          b = n.Z.getVideoDeviceId(),
          m = n.Z.getVideoDevices()[b],
          E = n.Z.getNoiseCancellation(),
          O = n.Z.getMediaEngine().getAudioSubsystem(),
          h = n.Z.getMediaEngine().getAudioLayer();
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
          noise_cancellation_enabled: E,
          input_device_name: null == d ? void 0 : d.name,
          output_device_name: null == _ ? void 0 : _.name,
          video_device_name: null == m ? void 0 : m.name,
          audio_subsystem: O,
          audio_layer: h,
          automatic_audio_subsystem: r.automaticAudioSubsystem,
          ...i,
        });
      }
    },
    214859: function (e, t, o) {
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
    20535: function (e, t, o) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=646a1217ccf1c166d900.js.map
