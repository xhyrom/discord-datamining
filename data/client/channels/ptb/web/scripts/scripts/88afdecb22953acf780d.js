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
          modalType: "voice",
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
          return N;
        },
        Z: function () {
          return I;
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
        m = o(626135),
        O = o(63063),
        h = o(957115),
        C = o(871364),
        A = o(531578),
        p = o(981631),
        f = o(689938),
        g = o(940256);
      let L = [
        {
          className: g.emojiSad,
          rating: A.aZ.BAD,
          classNameSelected: g.selected,
        },
        {
          className: g.emojiNeutral,
          rating: A.aZ.NEUTRAL,
          classNameSelected: g.selected,
        },
        {
          className: g.emojiHappy,
          rating: A.aZ.GOOD,
          classNameSelected: g.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: o,
          ratingConfigs: a,
          onChangeRating: s,
        } = e;
        return (0, n.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(g.ratingsSelector, t),
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
          className: g.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: f.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: O.Z.getSubmitRequestURL(),
          }),
        });
      }
      function I(e) {
        let {
            modalType: t,
            header: o,
            body: s,
            problemTitle: i,
            problems: O,
            transitionState: L,
            ratingConfigs: I,
            feedbackProblems: v = [],
            otherKey: x,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: B,
            startRating: S = null,
            onSubmit: T,
            onClose: j,
          } = e,
          k = (0, c.Z)(O),
          [M, R] = a.useState(!1),
          [F, K] = a.useState(S),
          [H, P] = a.useState(null),
          [U, y] = a.useState(r().shuffle(O)),
          [w, G] = a.useState(""),
          V = (0, _.Dt)(),
          z = (0, b.Z)(F),
          Y = (0, b.Z)(M),
          q = (0, b.Z)(H),
          W = (0, b.Z)(T),
          J = (0, b.Z)(w),
          Q = null != H && v.includes(H),
          { renderSkipButton: X } = C.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(k, O) && y((0, h.B)(O, x));
          }, [O, k, x]),
          a.useEffect(
            () => (
              m.default.track(p.rMx.OPEN_MODAL, {
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
            className: g.__invalid_modalRoot,
            "aria-labelledby": V,
            children: [
              (0, n.jsxs)(u.ModalHeader, {
                separator: !1,
                className: g.headerContainer,
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
                    className: g.ratingBody,
                    children: s,
                  }),
                  Q
                    ? null
                    : (0, n.jsx)(N, {
                        className: l()(g.emojis, Z),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          K(e), e === A.aZ.GOOD && j();
                        },
                        ratingConfigs: I,
                      }),
                ],
              }),
              (0, n.jsxs)(u.ModalContent, {
                className: g.__invalid_content,
                children: [
                  null == F || F === A.aZ.GOOD || Q
                    ? null
                    : (0, n.jsx)(u.FormItem, {
                        title: i,
                        className: g.problemInfo,
                        children: (0, n.jsx)(E.Z, {
                          options: U,
                          onClick: function (e) {
                            let { value: t } = e;
                            P(t), !v.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !v.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, n.jsxs)(u.FormItem, {
                        title: f.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: g.problemInfo,
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
                  className: g.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              P(null), G("");
                            },
                            children: f.Z.Messages.BACK,
                          }),
                          (0, n.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: j,
                            children: f.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => R(!M),
                            children: (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: f.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          X &&
                            null != F &&
                            F !== A.aZ.GOOD &&
                            (0, n.jsx)(u.Button, {
                              type: "submit",
                              size: u.Button.Sizes.SMALL,
                              onClick: j,
                              children: f.Z.Messages.SKIP,
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
//# sourceMappingURL=88afdecb22953acf780d.js.map
