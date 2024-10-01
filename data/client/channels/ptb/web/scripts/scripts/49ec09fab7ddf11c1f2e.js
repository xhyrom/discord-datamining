"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22862"],
  {
    646202: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        }),
        s(47120);
      var a,
        l,
        n = s(735250),
        r = s(470079),
        i = s(120356),
        c = s.n(i),
        o = s(108131),
        d = s.n(o),
        u = s(212433),
        m = s(481060),
        x = s(442837),
        h = s(607070),
        p = s(313201),
        C = s(594174),
        N = s(626135),
        j = s(547280),
        v = s(678513),
        T = s(445507),
        k = s(981631),
        E = s(689938),
        g = s(470597);
      function y(e) {
        let {
            selectedOption: t,
            targetKey: s,
            dismissibleContent: a,
            data: l,
            handleGoToNextFormGroup: i,
          } = e,
          [c, o] = r.useState(""),
          [d, u] = r.useState(null),
          [x, h] = r.useState(null),
          [p, C] = r.useState(!1),
          [N, v] = r.useState(!1),
          k = r.useCallback(
            (e) => {
              let { value: t } = e;
              null != l.current && ((l.current.playstyle = t), h(t), i(6));
            },
            [l, h, i],
          ),
          y = r.useCallback(() => {
            if (null != l.current) {
              let e = !p;
              C(e), (l.current.acknowledgeCap = e), e && N && i(8);
            }
          }, [N, p, C, l, i]),
          I = r.useCallback(() => {
            if (null != l.current) {
              let e = !N;
              v(e), (l.current.acknowledgeScreen = e), e && p && i(8);
            }
          }, [p, N, v, l, i]),
          M = r.useCallback(
            (e) => {
              null != l.current && ((l.current.email = e), o(e), u(null));
            },
            [l, u],
          ),
          _ = r.useCallback(() => {
            if (null != t && null != l.current) {
              if (c.length < 3 || -1 === c.indexOf("@")) {
                u(E.Z.Messages.SIGNUP_EMAIL_ERROR);
                return;
              }
              (0, j.o)({
                targetKey: s,
                dismissibleContent: a,
                data: l.current,
                completed: !0,
              });
            }
          }, [s, a, c, t, u, l]);
        return null == t
          ? null
          : "email" === t.type
            ? (0, n.jsxs)("div", {
                className: g.emailContainer,
                children: [
                  (0, n.jsx)(m.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: E.Z.Messages.SIGNUP_EMAIL_PROMPT,
                  }),
                  (0, n.jsxs)("div", {
                    className: g.emailForm,
                    children: [
                      (0, n.jsx)(m.TextInput, {
                        className: g.emailInput,
                        value: c,
                        onChange: M,
                        placeholder: E.Z.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                        error: d,
                      }),
                      (0, n.jsx)(m.Button, {
                        onClick: _,
                        children: (0, n.jsx)(m.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children: E.Z.Messages.SIGNUP_COMPLETE_CTA,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : "clan" === t.type
              ? (0, n.jsxs)("div", {
                  className: g.form,
                  children: [
                    (0, n.jsxs)("div", {
                      className: g.formGroup,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(m.Text, {
                              variant: "text-lg/medium",
                              color: "header-primary",
                              children:
                                E.Z.Messages.SIGNUP_CLAN_PLAYSTYLE_TITLE,
                            }),
                            (0, n.jsx)(m.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children:
                                E.Z.Messages.SIGNUP_CLAN_PLAYSTYLE_DESCRIPTION,
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: g.options,
                          children: (0, T.z5)(E.Z).map((e) =>
                            (0, n.jsx)(
                              S,
                              {
                                option: e,
                                isSelected: e.value === x,
                                onOptionSelected: k,
                              },
                              e.value,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: g.formGroup,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)(m.Text, {
                              variant: "text-lg/medium",
                              color: "header-primary",
                              children:
                                E.Z.Messages.SIGNUP_CLAN_ACKNOWLEDGEMENTS_TITLE,
                            }),
                            (0, n.jsx)(m.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children:
                                E.Z.Messages
                                  .SIGNUP_CLAN_ACKNOWLEDGEMENTS_DESCRIPTION,
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: g.acknowledgements,
                          children: [
                            (0, n.jsxs)(m.Clickable, {
                              className: g.acknowledgement,
                              onClick: y,
                              children: [
                                (0, n.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "interactive-active",
                                  children:
                                    E.Z.Messages
                                      .SIGNUP_CLAN_ACKNOWLEDGEMENT_CAP,
                                }),
                                (0, n.jsx)("div", {
                                  className: g.checkboxWrapper,
                                  children: (0, n.jsx)(m.Checkbox, {
                                    displayOnly: !0,
                                    type: m.Checkbox.Types.INVERTED,
                                    value: p,
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)(m.Clickable, {
                              className: g.acknowledgement,
                              onClick: I,
                              children: [
                                (0, n.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "interactive-active",
                                  children:
                                    E.Z.Messages
                                      .SIGNUP_CLAN_ACKNOWLEDGEMENT_APPROVAL,
                                }),
                                (0, n.jsx)("div", {
                                  className: g.checkboxWrapper,
                                  children: (0, n.jsx)(m.Checkbox, {
                                    displayOnly: !0,
                                    type: m.Checkbox.Types.INVERTED,
                                    value: N,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: g.formGroup,
                      children: [
                        (0, n.jsx)(m.Text, {
                          variant: "text-lg/medium",
                          color: "header-primary",
                          children: E.Z.Messages.SIGNUP_EMAIL_PROMPT,
                        }),
                        (0, n.jsxs)("div", {
                          className: g.emailForm,
                          children: [
                            (0, n.jsx)(m.TextInput, {
                              className: g.emailInput,
                              value: c,
                              onChange: M,
                              placeholder:
                                E.Z.Messages.SIGNUP_EMAIL_PLACEHOLDER,
                              error: d,
                            }),
                            (0, n.jsx)(m.Button, {
                              onClick: _,
                              children: (0, n.jsx)(m.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-active",
                                children: E.Z.Messages.SIGNUP_COMPLETE_CTA,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsx)("div", {});
      }
      function I(e) {
        let { iconName: t } = e,
          s = null;
        switch (t) {
          case "compass":
            s = (0, n.jsx)(m.CompassIcon, { className: g.icon });
            break;
          case "gamepad":
            s = (0, n.jsx)(m.DpadIcon, {
              size: "xs",
              color: "currentColor",
              className: g.icon,
            });
            break;
          case "controller":
            s = (0, n.jsx)(m.GameControllerIcon, { className: g.icon });
            break;
          case "microphone":
            s = (0, n.jsx)(m.MicrophoneIcon, { className: g.icon });
            break;
          default:
            s = null;
        }
        return (0, n.jsx)("div", { className: g.iconContainer, children: s });
      }
      function S(e) {
        let { option: t, icon: s, isSelected: a, onOptionSelected: l } = e,
          [i, o] = r.useState(!1),
          d = (0, m.useToken)(m.tokens.colors.BACKGROUND_TERTIARY).hsl({
            opacity: i && !a ? 0.9 : 0.8,
          }),
          u = r.useCallback(() => {
            l(t);
          }, [l, t]);
        return (0, n.jsxs)(m.Clickable, {
          className: c()(g.option, { [g.selectedOption]: a }),
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          style: { backgroundColor: d },
          onClick: u,
          children: [
            s,
            (0, n.jsxs)("div", {
              className: g.optionContent,
              children: [
                (0, n.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, n.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: t.description,
                }),
              ],
            }),
          ],
        });
      }
      function M(e) {
        let { option: t, selectedOption: s, setSelectedOption: a } = e,
          l = t.key === (null == s ? void 0 : s.key);
        return (0, n.jsx)(S, {
          option: t,
          icon: (0, n.jsx)(I, { iconName: t.icon }),
          isSelected: l,
          onOptionSelected: a,
        });
      }
      function _(e) {
        let {
            target: t,
            selectedOption: s,
            handleSetSelectedOption: a,
            data: l,
          } = e,
          i = (0, x.e7)([h.Z], () => h.Z.useReducedMotion),
          [{ state: c }, o] = (0, m.useSpring)(
            () => ({ state: 0 }),
            "respect-motion-settings",
            [],
          ),
          p = (0, x.e7)([C.default], () => C.default.getCurrentUser()),
          N = c.to({ range: [0, 1], output: [1, 0] }),
          j = c.to({ range: [0, 1], output: [0, 1] }),
          v = c.to({ range: [0, 10], output: [0, -700] }),
          T = r.useCallback(
            (e) => {
              a(e), o({ state: "email" === e.type ? 2 : 3, immediate: i });
            },
            [a, o, i],
          ),
          k = r.useCallback(
            (e) => {
              o({ state: e, immediate: i });
            },
            [o, i],
          );
        return null == p
          ? null
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)(u.animated.div, {
                  className: g.header,
                  style: { opacity: N },
                  children: [
                    (0, n.jsxs)("div", {
                      className: g.eyebrow,
                      children: [
                        (0, n.jsx)(m.EnvelopeIcon, {
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, n.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          children: E.Z.Messages.SIGNUP_NOTICE_EYEBROW,
                        }),
                      ],
                    }),
                    (0, n.jsx)(m.Heading, {
                      variant: "heading-xxl/medium",
                      color: "header-primary",
                      children: t.title,
                    }),
                    (0, n.jsx)(m.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children: t.subtitle,
                    }),
                  ],
                }),
                (0, n.jsxs)(u.animated.div, {
                  className: g.question,
                  style: {
                    transform: v.to((e) => "translateY(".concat(e, "px)")),
                    marginTop: t.questionMargin,
                  },
                  children: [
                    (0, n.jsx)(m.Text, {
                      variant: "text-lg/medium",
                      color: "header-primary",
                      children: t.question,
                    }),
                    (0, n.jsx)("div", {
                      className: g.options,
                      children: (function (e, t) {
                        let s = e.slice();
                        return (
                          s.sort((e, s) => {
                            let a = d().v3("".concat(e.key).concat(t));
                            return a - d().v3("".concat(s.key).concat(t));
                          }),
                          s
                        );
                      })(t.options, p.id).map((e) =>
                        (0, n.jsx)(
                          M,
                          {
                            option: e,
                            selectedOption: s,
                            setSelectedOption: T,
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, n.jsx)(u.animated.div, {
                  style: {
                    transform: v.to((e) => "translateY(".concat(e, "px)")),
                    opacity: j,
                  },
                  children: (0, n.jsx)(y, {
                    selectedOption: s,
                    targetKey: t.key,
                    dismissibleContent: t.dismissibleContent,
                    data: l,
                    handleGoToNextFormGroup: k,
                  }),
                }),
              ],
            });
      }
      function b(e) {
        let { target: t, guildId: s, transitionState: a, onClose: l } = e,
          i = (0, p.Dt)(),
          o = r.useRef({ guildId: s }),
          [d, u] = r.useState(null),
          h = (0, x.e7)([v.Z], () => v.Z.hasCompletedTarget(t.key)) ? 1 : 0;
        r.useEffect(() => {
          N.default.track(k.rMx.SIGNUP_VIEWED, {
            target_key: t.key,
            guild_id: s,
          });
          let e = o.current;
          return () => {
            (0, j.o)({
              targetKey: t.key,
              dismissibleContent: t.dismissibleContent,
              data: e,
              completed: !1,
            });
          };
        }, [t.key, t.dismissibleContent, o, s]);
        let C = r.useCallback(
            (e) => {
              null != o.current &&
                ((o.current.selectedOptionKey = e.key), u(e));
            },
            [u, o],
          ),
          T = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat",
          ),
          y = null;
        switch (h) {
          case 0:
            y = (0, n.jsx)(_, {
              target: t,
              selectedOption: d,
              handleSetSelectedOption: C,
              data: o,
            });
            break;
          case 1:
            y = (0, n.jsxs)("div", {
              className: g.completedContainer,
              children: [
                (0, n.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: E.Z.Messages.SIGNUP_COMPLETED_TITLE,
                }),
                (0, n.jsx)(m.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: E.Z.Messages.SIGNUP_COMPLETED_DESCRIPTION,
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(m.Button, {
                    onClick: l,
                    children: (0, n.jsx)(m.Text, {
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: E.Z.Messages.CLOSE,
                    }),
                  }),
                }),
              ],
            });
        }
        return (0, n.jsx)(m.ThemeProvider, {
          theme: k.BRd.DARK,
          children: (e) =>
            (0, n.jsxs)(m.ModalRoot, {
              transitionState: a,
              "aria-labelledby": i,
              size: m.ModalSize.LARGE,
              className: c()(g.modal, e),
              children: [
                (0, n.jsxs)(m.Scroller, {
                  className: g.content,
                  children: [
                    (0, n.jsx)("div", {
                      style: {
                        background: T,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                      },
                    }),
                    (0, n.jsx)("div", {
                      className: g.contentInner,
                      children: (0, n.jsx)(m.Sequencer, {
                        animationMotionType: "lift",
                        fillParent: !0,
                        step: h,
                        steps: [0, 1],
                        children: y,
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: g.closeButtonContainer,
                  children: (0, n.jsx)(m.ModalCloseButton, { onClick: l }),
                }),
              ],
            }),
        });
      }
      ((l = a || (a = {}))[(l.OPTIONS = 0)] = "OPTIONS"),
        (l[(l.COMPLETED = 1)] = "COMPLETED");
    },
  },
]);
//# sourceMappingURL=49ec09fab7ddf11c1f2e.js.map
