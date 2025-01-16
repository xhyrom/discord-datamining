"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22862"],
  {
    646202: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n(47120);
      var l,
        i,
        s = n(200651),
        a = n(192379),
        r = n(120356),
        c = n.n(r),
        o = n(108131),
        d = n.n(o),
        u = n(476183),
        m = n(481060),
        x = n(442837),
        h = n(607070),
        p = n(313201),
        j = n(594174),
        v = n(626135),
        k = n(547280),
        g = n(678513),
        y = n(445507),
        C = n(981631),
        N = n(388032),
        b = n(605453);
      function T(e) {
        let {
            selectedOption: t,
            targetKey: n,
            dismissibleContent: l,
            data: i,
            handleGoToNextFormGroup: r,
          } = e,
          [c, o] = a.useState(""),
          [d, u] = a.useState(null),
          [x, h] = a.useState(null),
          [p, j] = a.useState(!1),
          [v, g] = a.useState(!1),
          C = a.useCallback(
            (e) => {
              let { value: t } = e;
              null != i.current && ((i.current.playstyle = t), h(t), r(6));
            },
            [i, h, r],
          ),
          T = a.useCallback(() => {
            if (null != i.current) {
              let e = !p;
              j(e), (i.current.acknowledgeCap = e), e && v && r(8);
            }
          }, [v, p, j, i, r]),
          f = a.useCallback(() => {
            if (null != i.current) {
              let e = !v;
              g(e), (i.current.acknowledgeScreen = e), e && p && r(8);
            }
          }, [p, v, g, i, r]),
          O = a.useCallback(
            (e) => {
              null != i.current && ((i.current.email = e), o(e), u(null));
            },
            [i, u],
          ),
          I = a.useCallback(() => {
            if (null != t && null != i.current) {
              if (c.length < 3 || -1 === c.indexOf("@")) {
                u(N.intl.string(N.t["3dVrwc"]));
                return;
              }
              (0, k.o)({
                targetKey: n,
                dismissibleContent: l,
                data: i.current,
                completed: !0,
              });
            }
          }, [n, l, c, t, u, i]);
        return null == t
          ? null
          : "email" === t.type
            ? (0, s.jsxs)("div", {
                className: b.emailContainer,
                children: [
                  (0, s.jsx)(m.Text, {
                    variant: "text-lg/medium",
                    color: "header-primary",
                    children: N.intl.string(N.t.NVeQW1),
                  }),
                  (0, s.jsxs)("div", {
                    className: b.emailForm,
                    children: [
                      (0, s.jsx)(m.TextInput, {
                        className: b.emailInput,
                        value: c,
                        onChange: O,
                        placeholder: N.intl.string(N.t.e6OPgY),
                        error: d,
                      }),
                      (0, s.jsx)(m.Button, {
                        onClick: I,
                        children: (0, s.jsx)(m.Text, {
                          variant: "text-sm/medium",
                          color: "interactive-active",
                          children: N.intl.string(N.t.mhisXl),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : "clan" === t.type
              ? (0, s.jsxs)("div", {
                  className: b.form,
                  children: [
                    (0, s.jsxs)("div", {
                      className: b.formGroup,
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(m.Text, {
                              variant: "text-lg/medium",
                              color: "header-primary",
                              children: N.intl.string(N.t.jhUGT0),
                            }),
                            (0, s.jsx)(m.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: N.intl.string(N.t.DuYera),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: b.options,
                          children: (0, y.z5)().map((e) =>
                            (0, s.jsx)(
                              S,
                              {
                                option: e,
                                isSelected: e.value === x,
                                onOptionSelected: C,
                              },
                              e.value,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: b.formGroup,
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(m.Text, {
                              variant: "text-lg/medium",
                              color: "header-primary",
                              children: N.intl.string(N.t.RpkTY2),
                            }),
                            (0, s.jsx)(m.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: N.intl.string(N.t.lsZPgI),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: b.acknowledgements,
                          children: [
                            (0, s.jsxs)(m.Clickable, {
                              className: b.acknowledgement,
                              onClick: T,
                              children: [
                                (0, s.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "interactive-active",
                                  children: N.intl.string(N.t.suxlQk),
                                }),
                                (0, s.jsx)("div", {
                                  className: b.checkboxWrapper,
                                  children: (0, s.jsx)(m.Checkbox, {
                                    displayOnly: !0,
                                    type: m.Checkbox.Types.INVERTED,
                                    value: p,
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)(m.Clickable, {
                              className: b.acknowledgement,
                              onClick: f,
                              children: [
                                (0, s.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "interactive-active",
                                  children: N.intl.string(N.t.TjPvzM),
                                }),
                                (0, s.jsx)("div", {
                                  className: b.checkboxWrapper,
                                  children: (0, s.jsx)(m.Checkbox, {
                                    displayOnly: !0,
                                    type: m.Checkbox.Types.INVERTED,
                                    value: v,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: b.formGroup,
                      children: [
                        (0, s.jsx)(m.Text, {
                          variant: "text-lg/medium",
                          color: "header-primary",
                          children: N.intl.string(N.t.NVeQW1),
                        }),
                        (0, s.jsxs)("div", {
                          className: b.emailForm,
                          children: [
                            (0, s.jsx)(m.TextInput, {
                              className: b.emailInput,
                              value: c,
                              onChange: O,
                              placeholder: N.intl.string(N.t.e6OPgY),
                              error: d,
                            }),
                            (0, s.jsx)(m.Button, {
                              onClick: I,
                              children: (0, s.jsx)(m.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-active",
                                children: N.intl.string(N.t.mhisXl),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, s.jsx)("div", {});
      }
      function f(e) {
        let { iconName: t } = e,
          n = null;
        switch (t) {
          case "compass":
            n = (0, s.jsx)(m.CompassIcon, { className: b.icon });
            break;
          case "gamepad":
            n = (0, s.jsx)(m.DpadIcon, {
              size: "xs",
              color: "currentColor",
              className: b.icon,
            });
            break;
          case "controller":
            n = (0, s.jsx)(m.GameControllerIcon, { className: b.icon });
            break;
          case "microphone":
            n = (0, s.jsx)(m.MicrophoneIcon, { className: b.icon });
            break;
          default:
            n = null;
        }
        return (0, s.jsx)("div", { className: b.iconContainer, children: n });
      }
      function S(e) {
        let { option: t, icon: n, isSelected: l, onOptionSelected: i } = e,
          [r, o] = a.useState(!1),
          d = (0, m.useToken)(m.tokens.colors.BACKGROUND_TERTIARY).hsl({
            opacity: r && !l ? 0.9 : 0.8,
          }),
          u = a.useCallback(() => {
            i(t);
          }, [i, t]);
        return (0, s.jsxs)(m.Clickable, {
          className: c()(b.option, { [b.selectedOption]: l }),
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          style: { backgroundColor: d },
          onClick: u,
          children: [
            n,
            (0, s.jsxs)("div", {
              className: b.optionContent,
              children: [
                (0, s.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: t.title,
                }),
                (0, s.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: t.description,
                }),
              ],
            }),
          ],
        });
      }
      function O(e) {
        let { option: t, selectedOption: n, setSelectedOption: l } = e,
          i = t.key === (null == n ? void 0 : n.key);
        return (0, s.jsx)(S, {
          option: t,
          icon: (0, s.jsx)(f, { iconName: t.icon }),
          isSelected: i,
          onOptionSelected: l,
        });
      }
      function I(e) {
        let {
            target: t,
            selectedOption: n,
            handleSetSelectedOption: l,
            data: i,
          } = e,
          r = (0, x.e7)([h.Z], () => h.Z.useReducedMotion),
          [{ state: c }, o] = (0, m.useSpring)(
            () => ({ state: 0 }),
            "respect-motion-settings",
            [],
          ),
          p = (0, x.e7)([j.default], () => j.default.getCurrentUser()),
          v = c.to({ range: [0, 1], output: [1, 0] }),
          k = c.to({ range: [0, 1], output: [0, 1] }),
          g = c.to({ range: [0, 10], output: [0, -700] }),
          y = a.useCallback(
            (e) => {
              l(e), o({ state: "email" === e.type ? 2 : 3, immediate: r });
            },
            [l, o, r],
          ),
          C = a.useCallback(
            (e) => {
              o({ state: e, immediate: r });
            },
            [o, r],
          );
        return null == p
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)(u.animated.div, {
                  className: b.header,
                  style: { opacity: v },
                  children: [
                    (0, s.jsxs)("div", {
                      className: b.eyebrow,
                      children: [
                        (0, s.jsx)(m.EnvelopeIcon, {
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, s.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          children: N.intl.string(N.t.hhKpxs),
                        }),
                      ],
                    }),
                    (0, s.jsx)(m.Heading, {
                      variant: "heading-xxl/medium",
                      color: "header-primary",
                      children: t.title,
                    }),
                    (0, s.jsx)(m.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children: t.subtitle,
                    }),
                  ],
                }),
                (0, s.jsxs)(u.animated.div, {
                  className: b.question,
                  style: {
                    transform: g.to((e) => "translateY(".concat(e, "px)")),
                    marginTop: t.questionMargin,
                  },
                  children: [
                    (0, s.jsx)(m.Text, {
                      variant: "text-lg/medium",
                      color: "header-primary",
                      children: t.question,
                    }),
                    (0, s.jsx)("div", {
                      className: b.options,
                      children: (function (e, t) {
                        let n = e.slice();
                        return (
                          n.sort((e, n) => {
                            let l = d().v3("".concat(e.key).concat(t));
                            return l - d().v3("".concat(n.key).concat(t));
                          }),
                          n
                        );
                      })(t.options, p.id).map((e) =>
                        (0, s.jsx)(
                          O,
                          {
                            option: e,
                            selectedOption: n,
                            setSelectedOption: y,
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, s.jsx)(u.animated.div, {
                  style: {
                    transform: g.to((e) => "translateY(".concat(e, "px)")),
                    opacity: k,
                  },
                  children: (0, s.jsx)(T, {
                    selectedOption: n,
                    targetKey: t.key,
                    dismissibleContent: t.dismissibleContent,
                    data: i,
                    handleGoToNextFormGroup: C,
                  }),
                }),
              ],
            });
      }
      function w(e) {
        let { target: t, guildId: n, transitionState: l, onClose: i } = e,
          r = (0, p.Dt)(),
          o = a.useRef({ guildId: n }),
          [d, u] = a.useState(null),
          h = (0, x.e7)([g.Z], () => g.Z.hasCompletedTarget(t.key)) ? 1 : 0;
        a.useEffect(() => {
          v.default.track(C.rMx.SIGNUP_VIEWED, {
            target_key: t.key,
            guild_id: n,
          });
          let e = o.current;
          return () => {
            (0, k.o)({
              targetKey: t.key,
              dismissibleContent: t.dismissibleContent,
              data: e,
              completed: !1,
            });
          };
        }, [t.key, t.dismissibleContent, o, n]);
        let j = a.useCallback(
            (e) => {
              null != o.current &&
                ((o.current.selectedOptionKey = e.key), u(e));
            },
            [u, o],
          ),
          y = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat",
          ),
          T = null;
        switch (h) {
          case 0:
            T = (0, s.jsx)(I, {
              target: t,
              selectedOption: d,
              handleSetSelectedOption: j,
              data: o,
            });
            break;
          case 1:
            T = (0, s.jsxs)("div", {
              className: b.completedContainer,
              children: [
                (0, s.jsx)(m.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  children: N.intl.string(N.t.n2NmuL),
                }),
                (0, s.jsx)(m.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: N.intl.string(N.t.SNYnLS),
                }),
                (0, s.jsx)("div", {
                  children: (0, s.jsx)(m.Button, {
                    onClick: i,
                    children: (0, s.jsx)(m.Text, {
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: N.intl.string(N.t.cpT0Cg),
                    }),
                  }),
                }),
              ],
            });
        }
        return (0, s.jsx)(m.ThemeProvider, {
          theme: C.BRd.DARK,
          children: (e) =>
            (0, s.jsxs)(m.ModalRoot, {
              transitionState: l,
              "aria-labelledby": r,
              size: m.ModalSize.LARGE,
              className: c()(b.modal, e),
              children: [
                (0, s.jsxs)(m.Scroller, {
                  className: b.content,
                  children: [
                    (0, s.jsx)("div", {
                      style: {
                        background: y,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                      },
                    }),
                    (0, s.jsx)("div", {
                      className: b.contentInner,
                      children: (0, s.jsx)(m.Sequencer, {
                        animationMotionType: "lift",
                        fillParent: !0,
                        step: h,
                        steps: [0, 1],
                        children: T,
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: b.closeButtonContainer,
                  children: (0, s.jsx)(m.ModalCloseButton, { onClick: i }),
                }),
              ],
            }),
        });
      }
      ((i = l || (l = {}))[(i.OPTIONS = 0)] = "OPTIONS"),
        (i[(i.COMPLETED = 1)] = "COMPLETED");
    },
  },
]);
//# sourceMappingURL=243e89f10e26cb22bdbb.js.map
