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
    388032: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getAvailableLocales: function () {
            return r.u;
          },
          international: function () {
            return u;
          },
          intl: function () {
            return c;
          },
          t: function () {
            return u;
          },
          untranslated: function () {
            return u;
          },
        }),
        n(47120);
      var o = n(735250),
        a = n(470079),
        s = n(65084),
        i = n(302454),
        l = n.n(i),
        r = n(424395);
      let u = {},
        c = new s.IntlManager("en-US").withFormatters({
          format: (0, s.makeReactFormatter)({
            $_: () => "",
            $i: (e, t) => (0, o.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, o.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, o.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, o.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, o.jsx)("code", { children: e }, t),
            $link: (e, t) => {
              let [o, ...s] = e,
                { Anchor: i } = n(756715),
                r = {};
              switch (typeof o) {
                case "string":
                  r.href = l().sanitizeUrl(o);
                  break;
                case "object":
                  var u;
                  (r.onClick =
                    null !== (u = o.onClick) && void 0 !== u ? u : o),
                    (r.onContextMenu = o.onContextMenu);
                  break;
                default:
                  r.onClick = o;
              }
              return (0, a.createElement)(i, { ...r, key: t }, s);
            },
          }),
          formatToPlainString: s.stringFormatter,
          formatToMarkdownString: s.markdownFormatter,
          formatToParts: s.astFormatter,
        });
    },
    144535: function (e, t, n) {
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var o = n(65084),
        a = n(424395);
      let s = a.v
        ? function (e) {
            let { t } = n(388032);
            return (0, t[(0, o.runtimeHashMessageKey)(e)])("en-US");
          }
        : function (e) {
            return n(375964)[e];
          };
    },
    424395: function (e, t, n) {
      n.d(t, {
        u: function () {
          return a;
        },
        v: function () {
          return o;
        },
      });
      let o = "1" === n(444675).env.USE_NEW_INTL_SYSTEM;
      function a() {
        return n(515297)
          .filter((e) => {
            let { enabled: t } = e;
            return t;
          })
          .map((e) => {
            let { code: t, name: n } = e;
            return { value: t, name: n, localizedName: t };
          })
          .sort((e, t) => {
            let { name: n } = e,
              { name: o } = t;
            return (
              (n = n.toLowerCase()),
              n < (o = o.toLowerCase()) ? -1 : n > o ? 1 : 0
            );
          });
      }
    },
    988645: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var o = n(735250);
      n(470079);
      var a = n(481060),
        s = n(144535),
        i = n(332664),
        l = n(142497),
        r = n(774378),
        u = n(445102),
        c = n(190378),
        d = n(689938);
      function _(e) {
        let { onClose: t, transitionState: _, analyticsData: m } = e,
          b = (0, s.I)("CALL_FEEDBACK_OPTION_OTHER");
        return (0, o.jsx)(i.Z, {
          modalType: "voice",
          header: d.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
          body: d.Z.Messages.CALL_FEEDBACK_PROMPT,
          problemTitle: d.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
          problems: (0, r.Z)(!1),
          feedbackProblems: [b],
          onSubmit: function (e) {
            var t, s, i;
            let { rating: _, problem: b, dontShowAgain: E, feedback: h } = e;
            if ((E && (0, l.Kw)(c.v.VOICE_CALL_FEEDBACK), null != _))
              (0, u.Z)(
                _,
                ((t = b),
                null !==
                  (i =
                    null === (s = (0, r.Z)(!1).find((e) => e.label === t)) ||
                    void 0 === s
                      ? void 0
                      : s.code) && void 0 !== i
                  ? i
                  : null),
                b,
                h,
                m,
              ),
                null != b &&
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, o.jsx)(e, {
                        body: d.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                        ...t,
                      });
                  });
          },
          onClose: t,
          transitionState: _,
          otherKey: b,
        });
      }
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
      }),
        n(653041);
      var o = n(392711),
        a = n.n(o);
      let s = (e, t) => {
        let n = a().shuffle(e),
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
          return v;
        },
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var o = n(735250),
        a = n(470079),
        s = n(120356),
        i = n.n(s),
        l = n(392711),
        r = n.n(l),
        u = n(481060),
        c = n(110924),
        d = n(600164),
        _ = n(313201),
        m = n(237617),
        b = n(572539),
        E = n(626135),
        h = n(63063),
        f = n(957115),
        C = n(871364),
        O = n(531578),
        A = n(981631),
        g = n(689938),
        p = n(214859);
      let L = [
        {
          className: p.emojiSad,
          rating: O.aZ.BAD,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiNeutral,
          rating: O.aZ.NEUTRAL,
          classNameSelected: p.selected,
        },
        {
          className: p.emojiHappy,
          rating: O.aZ.GOOD,
          classNameSelected: p.selected,
        },
      ];
      function v(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: s,
        } = e;
        return (0, o.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: i()(p.ratingsSelector, t),
          children: (null != a ? a : L).map((e) => {
            let { rating: t, className: a, classNameSelected: l } = e;
            return (0, o.jsx)(
              u.Clickable,
              {
                onClick: () => s(t),
                "aria-label": t,
                children: (0, o.jsx)("div", {
                  className: i()(a, n === t ? l : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function x() {
        return (0, o.jsx)(u.Text, {
          className: p.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function N(e) {
        let {
            modalType: t,
            header: n,
            body: s,
            problemTitle: l,
            problems: h,
            transitionState: L,
            ratingConfigs: N,
            feedbackProblems: I = [],
            otherKey: Z,
            ratingsSelectorClassName: D,
            hideDontShowCheckbox: S,
            startRating: k = null,
            onSubmit: B,
            onClose: j,
          } = e,
          M = (0, c.Z)(h),
          [T, R] = a.useState(!1),
          [y, F] = a.useState(k),
          [K, U] = a.useState(null),
          [w, P] = a.useState(r().shuffle(h)),
          [H, z] = a.useState(""),
          G = (0, _.Dt)(),
          V = (0, m.Z)(y),
          $ = (0, m.Z)(T),
          Y = (0, m.Z)(K),
          W = (0, m.Z)(B),
          q = (0, m.Z)(H),
          J = null != K && I.includes(K),
          { renderSkipButton: Q } = C.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(M, h) && P((0, f.B)(h, Z));
          }, [h, M, Z]),
          a.useEffect(
            () => (
              E.default.track(A.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                W.current({
                  rating: V.current,
                  problem: Y.current,
                  dontShowAgain: $.current,
                  feedback: q.current,
                });
              }
            ),
            [],
          ),
          (0, o.jsxs)(u.ModalRoot, {
            transitionState: L,
            className: p.__invalid_modalRoot,
            "aria-labelledby": G,
            children: [
              (0, o.jsxs)(u.ModalHeader, {
                separator: !1,
                className: p.headerContainer,
                children: [
                  (0, o.jsx)(u.Heading, {
                    id: G,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, o.jsx)(u.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: p.ratingBody,
                    children: s,
                  }),
                  J
                    ? null
                    : (0, o.jsx)(v, {
                        className: i()(p.emojis, D),
                        selectedRating: y,
                        onChangeRating: function (e) {
                          F(e), e === O.aZ.GOOD && j();
                        },
                        ratingConfigs: N,
                      }),
                ],
              }),
              (0, o.jsxs)(u.ModalContent, {
                className: p.__invalid_content,
                children: [
                  null == y || y === O.aZ.GOOD || J
                    ? null
                    : (0, o.jsx)(u.FormItem, {
                        title: l,
                        className: p.problemInfo,
                        children: (0, o.jsx)(b.Z, {
                          options: w,
                          onClick: function (e) {
                            let { value: t } = e;
                            U(t), !I.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !I.includes(t);
                          },
                        }),
                      }),
                  J
                    ? (0, o.jsxs)(u.FormItem, {
                        title: g.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: p.problemInfo,
                        children: [
                          (0, o.jsx)(u.TextArea, {
                            value: H,
                            maxLength: O.iF,
                            onChange: z,
                          }),
                          (0, o.jsx)(x, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (J || !S) &&
                (0, o.jsx)(u.ModalFooter, {
                  className: p.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: J
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: () => {
                              U(null), z("");
                            },
                            children: g.Z.Messages.BACK,
                          }),
                          (0, o.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            onClick: j,
                            children: g.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 18,
                            value: T,
                            onChange: () => R(!T),
                            children: (0, o.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              children: g.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          Q &&
                            null != y &&
                            y !== O.aZ.GOOD &&
                            (0, o.jsx)(u.Button, {
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
    871364: function (e, t, n) {
      n.d(t, {
        w: function () {
          return o;
        },
      });
      let o = (0, n(818083).B)({
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
    572539: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(735250);
      n(470079);
      var a = n(120356),
        s = n.n(a),
        i = n(481060),
        l = n(259580),
        r = n(20535);
      function u(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: u,
          hideCaret: c,
        } = e;
        return (0, o.jsx)("div", {
          className: s()(r.root, a),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              i.Clickable,
              {
                onClick: () => n(e),
                className: s()(r.option, u),
                children: [
                  (0, o.jsx)(i.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == c ? void 0 : c(e)) &&
                    (0, o.jsx)(l.Z, {
                      className: r.caret,
                      direction: l.Z.Directions.RIGHT,
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
          return i;
        },
      }),
        n(653041);
      var o,
        a,
        s = n(689938);
      function i(e) {
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
      ((a = o || (o = {})).COULD_NOT_HEAR_AUDIO =
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
    445102: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(131951),
        a = n(626135),
        s = n(981631);
      function i(e, t, n, i, l) {
        let r = o.Z.getSettings(),
          u = o.Z.getInputDeviceId(),
          c = o.Z.getInputDevices()[u],
          d = o.Z.getOutputDeviceId(),
          _ = o.Z.getOutputDevices()[d],
          m = o.Z.getVideoDeviceId(),
          b = o.Z.getVideoDevices()[m],
          E = o.Z.getNoiseCancellation(),
          h = o.Z.getMediaEngine().getAudioSubsystem(),
          f = o.Z.getMediaEngine().getAudioLayer();
        a.default.track(s.rMx.CALL_REPORT_PROBLEM, {
          rating: null != e ? e : "no response",
          reason_code: t,
          reason_description: n,
          feedback: i,
          audio_input_mode: r.mode,
          automatic_audio_input_sensitivity_enabled:
            r.modeOptions.autoThreshold,
          audio_input_sensitivity: r.modeOptions.threshold,
          echo_cancellation_enabled: r.echoCancellation,
          noise_suppression_enabled: r.noiseSuppression,
          automatic_gain_control_enabled: r.automaticGainControl,
          voice_output_volume: r.outputVolume,
          noise_cancellation_enabled: E,
          input_device_name: null == c ? void 0 : c.name,
          output_device_name: null == _ ? void 0 : _.name,
          video_device_name: null == b ? void 0 : b.name,
          audio_subsystem: h,
          audio_layer: f,
          automatic_audio_subsystem: r.automaticAudioSubsystem,
          ...l,
        });
      }
    },
    214859: function (e, t, n) {
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
    20535: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=418145a445eed71a73df.js.map
