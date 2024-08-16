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
        c = o(774378),
        u = o(445102),
        d = o(190378),
        _ = o(689938);
      let b = [l().CALL_FEEDBACK_OPTION_OTHER];
      function E(e) {
        let { onClose: t, transitionState: s, analyticsData: E } = e;
        return (0, n.jsx)(i.Z, {
          header: _.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
          body: _.Z.Messages.CALL_FEEDBACK_PROMPT,
          problemTitle: _.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
          problems: (0, c.Z)(!1),
          feedbackProblems: b,
          onSubmit: function (e) {
            var t, s, l;
            let { rating: i, problem: b, dontShowAgain: m, feedback: O } = e;
            if ((m && (0, r.Kw)(d.v.VOICE_CALL_FEEDBACK), null != i))
              (0, u.Z)(
                i,
                ((t = b),
                null !==
                  (l =
                    null === (s = (0, c.Z)(!1).find((e) => e.label === t)) ||
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
          return L;
        },
      }),
        o(47120);
      var n = o(735250),
        a = o(470079),
        s = o(120356),
        l = o.n(s),
        i = o(392711),
        r = o.n(i),
        c = o(481060),
        u = o(110924),
        d = o(600164),
        _ = o(313201),
        b = o(237617),
        E = o(572539),
        m = o(63063),
        O = o(957115),
        C = o(531578),
        h = o(689938),
        A = o(940256);
      let p = [
        {
          className: A.emojiSad,
          rating: C.aZ.BAD,
          classNameSelected: A.selected,
        },
        {
          className: A.emojiNeutral,
          rating: C.aZ.NEUTRAL,
          classNameSelected: A.selected,
        },
        {
          className: A.emojiHappy,
          rating: C.aZ.GOOD,
          classNameSelected: A.selected,
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
          className: l()(A.ratingsSelector, t),
          children: (null != a ? a : p).map((e) => {
            let { rating: t, className: a, classNameSelected: i } = e;
            return (0, n.jsx)(
              c.Clickable,
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
      function f() {
        return (0, n.jsx)(c.Text, {
          className: A.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function L(e) {
        let {
            header: t,
            body: o,
            problemTitle: s,
            problems: i,
            transitionState: m,
            ratingConfigs: p,
            feedbackProblems: L = [],
            otherKey: N,
            ratingsSelectorClassName: D,
            hideDontShowCheckbox: I,
            startRating: v = null,
            onSubmit: Z,
            onClose: x,
          } = e,
          B = (0, u.Z)(i),
          [T, j] = a.useState(!1),
          [S, M] = a.useState(v),
          [R, k] = a.useState(null),
          [K, F] = a.useState(r().shuffle(i)),
          [H, U] = a.useState(""),
          P = (0, _.Dt)(),
          y = (0, b.Z)(S),
          w = (0, b.Z)(T),
          V = (0, b.Z)(R),
          G = (0, b.Z)(Z),
          z = (0, b.Z)(H),
          Y = null != R && L.includes(R);
        return (
          a.useEffect(() => {
            !r().isEqual(B, i) && F((0, O.B)(i, N));
          }, [i, B, N]),
          a.useEffect(
            () => () => {
              G.current({
                rating: y.current,
                problem: V.current,
                dontShowAgain: w.current,
                feedback: z.current,
              });
            },
            [],
          ),
          (0, n.jsxs)(c.ModalRoot, {
            transitionState: m,
            className: A.__invalid_modalRoot,
            "aria-labelledby": P,
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                separator: !1,
                className: A.headerContainer,
                children: [
                  (0, n.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: A.ratingBody,
                    children: o,
                  }),
                  Y
                    ? null
                    : (0, n.jsx)(g, {
                        className: l()(A.emojis, D),
                        selectedRating: S,
                        onChangeRating: function (e) {
                          M(e), e === C.aZ.GOOD && x();
                        },
                        ratingConfigs: p,
                      }),
                ],
              }),
              (0, n.jsxs)(c.ModalContent, {
                className: A.__invalid_content,
                children: [
                  null == S || S === C.aZ.GOOD || Y
                    ? null
                    : (0, n.jsx)(c.FormItem, {
                        title: s,
                        className: A.problemInfo,
                        children: (0, n.jsx)(E.Z, {
                          options: K,
                          onClick: function (e) {
                            let { value: t } = e;
                            k(t), !L.includes(t) && x();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !L.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, n.jsxs)(c.FormItem, {
                        title: h.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: A.problemInfo,
                        children: [
                          (0, n.jsx)(c.TextArea, {
                            value: H,
                            maxLength: C.iF,
                            onChange: U,
                          }),
                          (0, n.jsx)(f, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !I) &&
                (0, n.jsx)(c.ModalFooter, {
                  className: A.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: Y
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              k(null), U("");
                            },
                            children: h.Z.Messages.BACK,
                          }),
                          (0, n.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: x,
                            children: h.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: T,
                        onChange: () => j(!T),
                        children: (0, n.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: h.Z.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    572539: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = o(735250);
      o(470079);
      var a = o(120356),
        s = o.n(a),
        l = o(481060),
        i = o(259580),
        r = o(373521);
      function c(e) {
        let {
          options: t,
          onClick: o,
          className: a,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, n.jsx)("div", {
          className: s()(r.root, a),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              l.Clickable,
              {
                onClick: () => o(e),
                className: s()(r.option, c),
                children: [
                  (0, n.jsx)(l.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
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
          c = n.Z.getInputDeviceId(),
          u = n.Z.getInputDevices()[c],
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
          input_device_name: null == u ? void 0 : u.name,
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
//# sourceMappingURL=bfbede2012fb3de4b118.js.map
