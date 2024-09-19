"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74277"],
  {
    806223: function (e, t, n) {
      let s = (0, n(818083).B)({
        kind: "user",
        id: "2023-01_guild_onboarding_includes_rules",
        label: "Guild Onboarding includes rules experience",
        defaultConfig: { includeRules: !1 },
        treatments: [
          {
            id: 1,
            label: "Last page of onboarding is rules",
            config: { includeRules: !0 },
          },
        ],
      });
      t.Z = s;
    },
    599263: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        }),
        n(47120);
      var s = n(735250),
        r = n(470079),
        o = n(120356),
        l = n.n(o),
        i = n(526629),
        a = n(442837),
        d = n(481060),
        c = n(749210),
        u = n(830064),
        m = n(393238),
        p = n(877604),
        h = n(480608),
        g = n(160404),
        x = n(703656),
        f = n(430824),
        _ = n(768581),
        N = n(302221),
        I = n(956664),
        b = n(549817),
        C = n(45966),
        E = n(819553),
        v = n(548473),
        j = n(15320),
        O = n(973051),
        Z = n(981631),
        B = n(689938),
        R = n(878432);
      async function T(e) {
        let t = await new Promise((t, n) => {
          let s = new Image();
          (s.crossOrigin = "Anonymous"),
            (s.onerror = (e) => {
              n(e), (s.onerror = s.onload = null), (s = null);
            }),
            (s.onload = () => {
              t((0, I.XN)(s, 2, 10)), (s.onerror = s.onload = null), (s = null);
            }),
            (s.src = e);
        });
        return null == t
          ? void 0
          : t.map((e) => {
              let [t, n, s] = e;
              return (0, N.vq)(t, n, s);
            });
      }
      function D(e) {
        let { guildId: t } = e,
          { ref: n, width: o, height: I } = (0, m.Z)(),
          [D, M] = r.useState(),
          P = (0, a.Wu)([C.Z], () => C.Z.getOnboardingPromptsForOnboarding(t)),
          k = (0, a.e7)([C.Z], () => C.Z.getEnabled(t)),
          S = r.useCallback(
            (e, n, s) => {
              b.Z.selectOption(t, e, n, s);
            },
            [t],
          ),
          L = r.useCallback(() => {
            b.Z.completeOnboarding(t, P);
          }, [t, P]),
          A = (0, a.e7)([f.Z], () => f.Z.getGuild(t)),
          w = r.useMemo(
            () =>
              null == A
                ? null
                : _.ZP.getGuildSplashURL({ id: A.id, splash: A.splash }),
            [A],
          ),
          F = (0, a.e7)([E.ZP], () => E.ZP.getCurrentOnboardingStep(t)),
          [U, G] = r.useState(null != w ? null : "cover");
        null != w &&
          null == D &&
          T(w).then((e) => {
            M(e[0]);
          });
        let H = r.useCallback(
            (e) => {
              G(F), b.Z.setUserOnboardingStep(t, e);
            },
            [t, F],
          ),
          y = (0, a.e7)([g.Z], () => g.Z.isFullServerPreview(t)),
          q = (0, a.e7)([E.ZP], () => E.ZP.getOnboardingStatus(t)),
          V = null != P && P.length > 0,
          z = r.useCallback(() => {
            (0, E.kp)(q) && k && V ? H(0) : L();
          }, [q, k, V, H, L]);
        r.useEffect(() => {
          if (!E.ZP.shouldShowOnboarding(t))
            return c.Z.escapeToDefaultChannel(t);
          (0, h.E)(t);
        }, [t]);
        let Y = (0, d.useTransition)(
            F,
            {
              config: i.config.default,
              from: { scale: 0.8, opacity: 0 },
              enter: { scale: 1, opacity: 1 },
            },
            "cover" !== U && null !== U
              ? "animate-never"
              : "respect-motion-settings",
          ),
          Q = E.ZP.shouldShowOnboarding(t),
          W = null == A;
        if (
          (r.useEffect(() => {
            if (!Q || W) {
              let e = setTimeout(() => {
                (0, x.uL)(Z.Z5c.CHANNEL(t));
              }, 1e3);
              return () => clearTimeout(e);
            }
          }, [Q, W, t]),
          !E.ZP.shouldShowOnboarding(t) || null == A)
        )
          return null;
        let X = () => {
          switch (F) {
            case "cover":
              return (0, s.jsx)(v.ZP, {
                guild: A,
                onboardingStatus: E.uX.READY,
                onStart: z,
                disableTracking: y,
              });
            case "rules":
              return (0, s.jsx)(O.Z, {
                setCurrentStep: H,
                previousPromptIndex: P.length - 1,
                guild: A,
                prompts: P,
                completeOnboarding: L,
                disableTracking: y,
              });
            case null:
              return null;
            default:
              return (0, s.jsx)(j.Z, {
                guild: A,
                prompts: P,
                step: F,
                selectOption: S,
                completeOnboarding: L,
                setCurrentStep: H,
                disableTracking: y,
              });
          }
        };
        return (0, s.jsxs)("div", {
          className: R.main,
          ref: n,
          children: [
            null != w
              ? (0, s.jsx)(p.Z, {
                  className: l()(R.artwork),
                  src: w,
                  width: o,
                  height: I,
                  imageClassName: R.cover,
                })
              : (0, s.jsx)(u.Z, {
                  className: R.artwork,
                  preserveAspectRatio: "xMinYMin slice",
                }),
            null != D &&
              (0, s.jsx)("div", {
                className: R.gradient,
                style: {
                  background: "linear-gradient(180deg, "
                    .concat((0, N.aD)(D, 0.16), " 0%, ")
                    .concat((0, N.aD)(D, 1), " 100%)"),
                },
              }),
            (0, s.jsx)("div", { className: R.gradient }),
            Y((e, t, n) => {
              let { key: r } = n;
              return (0, s.jsx)(i.animated.div, { style: e, children: X() }, r);
            }),
            "cover" === F &&
              (0, s.jsx)("div", {
                className: R.bottomCenterContent,
                children: (0, s.jsx)(d.Heading, {
                  variant: "heading-sm/normal",
                  color: "header-secondary",
                  children: B.Z.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format(
                    { privacyLink: Z.EYA.PRIVACY },
                  ),
                }),
              }),
          ],
        });
      }
    },
    15320: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return B;
        },
      });
      var s = n(735250),
        r = n(470079),
        o = n(399606),
        l = n(481060),
        i = n(367907),
        a = n(863249),
        d = n(944163),
        c = n(14263),
        u = n(768762),
        m = n(626135),
        p = n(823379),
        h = n(806223),
        g = n(45966),
        x = n(637853),
        f = n(968644),
        _ = n(104265),
        N = n(588632),
        I = n(290511),
        b = n(981631),
        C = n(689938),
        E = n(275211);
      function v(e, t) {
        return (0, s.jsx)(
          "span",
          { className: E.helpTextItem, children: e },
          t,
        );
      }
      function j(e) {
        return (
          null != e &&
          h.Z.getCurrentConfig(
            { location: "ba216b_1" },
            { autoTrackExposure: !0 },
          ).includeRules
        );
      }
      function O(e) {
        let {
            headerId: t,
            guild: n,
            step: r,
            lastPrompt: i,
            questionCount: a,
            currentPrompt: d,
            selectOption: m,
            gotoPrevPrompt: p,
            gotoNextPrompt: h,
            completeOnboarding: _,
          } = e,
          I = (0, o.Wu)([g.Z], () =>
            g.Z.getOnboardingResponsesForPrompt(n.id, d.id),
          ),
          b = 0 === I.length && (null == d ? void 0 : d.required),
          j = null == d ? void 0 : d.options.filter((e) => I.includes(e.id)),
          O = (0, x.L6)(j),
          Z = (0, x.dX)(j),
          B = 0 === I.length,
          { helpText: R, helpTextAdditional: T } = (0, f.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: O,
            selectedChannelIds: Z,
            itemHook: v,
          }),
          D = (0, c.Z)(n.id, 1e3),
          M = d.options.map((e) => ({ value: e.id, ...e })),
          P = d.options.filter((e) => I.includes(e.id)).map((e) => e.id);
        return (0, s.jsx)("div", {
          className: E.prompt,
          children: (0, s.jsxs)("div", {
            className: E.promptContent,
            children: [
              (0, s.jsxs)(l.ScrollerThin, {
                className: E.scrollerContent,
                children: [
                  (0, s.jsxs)("div", {
                    className: E.questionHeader,
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: C.Z.Messages.ONBOARDING_QUESTION_COUNT.format(
                          { currentQuestion: r + 1, questionCount: a },
                        ),
                      }),
                      d.required
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                className: E.headerSeparator,
                                children: "\xb7",
                              }),
                              (0, s.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children:
                                  C.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, s.jsx)(l.Heading, {
                    className: E.title,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    id: t,
                    children: d.title,
                  }),
                  (0, s.jsx)(N.Z, {
                    options: M,
                    value: P,
                    onChange: (e) => {
                      let t = e.find((e) => !I.includes(e.id)),
                        n = e.map((e) => e.id);
                      if (null != t) m(d.id, t.id, !0);
                      else {
                        let e = I.filter((e) => !n.includes(e));
                        d.options
                          .filter((t) => e.includes(t.id))
                          .forEach((e) => {
                            m(d.id, e.id, !1);
                          });
                      }
                    },
                    memberCounts: D,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: E.navButtons,
                children: [
                  (0, s.jsx)("div", {
                    className: E.leftButtons,
                    children:
                      r > 0 &&
                      (0, s.jsxs)(l.Button, {
                        className: E.button,
                        innerClassName: E.buttonInner,
                        onClick: () => p(I.length),
                        size: l.Button.Sizes.MEDIUM,
                        look: l.Button.Looks.OUTLINED,
                        grow: !1,
                        color: l.Button.Colors.PRIMARY,
                        children: [
                          (0, s.jsx)(u.Z, {
                            className: E.arrow,
                            direction: u.Z.Directions.LEFT,
                          }),
                          C.Z.Messages.BACK,
                        ],
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: E.rightButtons,
                    children: [
                      (0, s.jsxs)(l.Text, {
                        className: E.helpText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [R, " ", T],
                      }),
                      (0, s.jsx)(l.Tooltip, {
                        text: b
                          ? C.Z.Messages.ONBOARDING_REQUIRED_QUESTION
                          : null,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: n } = e;
                          return (0, s.jsx)(l.Button, {
                            className: E.button,
                            innerClassName: E.buttonInner,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            onClick: () => (i ? _() : h(I.length)),
                            disabled: b,
                            size: l.Button.Sizes.MEDIUM,
                            look: l.Button.Looks.FILLED,
                            grow: !1,
                            color: B
                              ? l.Button.Colors.PRIMARY
                              : l.Button.Colors.BRAND,
                            children: i
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    C.Z.Messages.FINISH,
                                    (0, s.jsx)("span", {
                                      className: E.finishEmoji,
                                      role: "img",
                                      "aria-hidden": !0,
                                      children: "\uD83C\uDF89",
                                    }),
                                  ],
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    B ? C.Z.Messages.SKIP : C.Z.Messages.NEXT,
                                    (0, s.jsx)(u.Z, {
                                      className: E.arrow,
                                      direction: u.Z.Directions.RIGHT,
                                    }),
                                  ],
                                }),
                          });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Z(e) {
        let {
            headerId: t,
            guild: n,
            step: r,
            lastPrompt: i,
            questionCount: a,
            currentPrompt: d,
            selectOption: c,
            gotoPrevPrompt: m,
            gotoNextPrompt: p,
            completeOnboarding: h,
          } = e,
          N = (0, o.Wu)([g.Z], () =>
            g.Z.getOnboardingResponsesForPrompt(n.id, d.id),
          ),
          I = 0 === N.length && (null == d ? void 0 : d.required),
          b = null == d ? void 0 : d.options.filter((e) => N.includes(e.id)),
          j = (0, x.L6)(b),
          O = (0, x.dX)(b),
          Z = 0 === N.length,
          { helpText: B, helpTextAdditional: R } = (0, f.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: j,
            selectedChannelIds: O,
            itemHook: v,
          });
        return (0, s.jsx)("div", {
          className: E.prompt,
          children: (0, s.jsxs)("div", {
            className: E.promptContent,
            children: [
              (0, s.jsxs)(l.ScrollerThin, {
                className: E.scrollerContent,
                children: [
                  (0, s.jsxs)("div", {
                    className: E.questionHeader,
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: C.Z.Messages.ONBOARDING_QUESTION_COUNT.format(
                          { currentQuestion: r + 1, questionCount: a },
                        ),
                      }),
                      d.required
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                className: E.headerSeparator,
                                children: "\xb7",
                              }),
                              (0, s.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children:
                                  C.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, s.jsx)(l.Heading, {
                    className: E.title,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    id: t,
                    children: d.title,
                  }),
                  (0, s.jsx)("div", {
                    className: E.promptOptions,
                    children: d.options.map((e) =>
                      (0, s.jsx)(
                        _.Z,
                        {
                          guildId: n.id,
                          option: e,
                          onSelect: (t) => c(d.id, e.id, null != t && t),
                          selected: N.includes(e.id),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: E.navButtons,
                children: [
                  (0, s.jsx)("div", {
                    className: E.leftButtons,
                    children:
                      r > 0 &&
                      (0, s.jsxs)(l.Button, {
                        className: E.button,
                        innerClassName: E.buttonInner,
                        onClick: () => m(N.length),
                        size: l.Button.Sizes.MEDIUM,
                        look: l.Button.Looks.OUTLINED,
                        grow: !1,
                        color: l.Button.Colors.PRIMARY,
                        children: [
                          (0, s.jsx)(u.Z, {
                            className: E.arrow,
                            direction: u.Z.Directions.LEFT,
                          }),
                          C.Z.Messages.BACK,
                        ],
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: E.rightButtons,
                    children: [
                      (0, s.jsxs)(l.Text, {
                        className: E.helpText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [B, " ", R],
                      }),
                      (0, s.jsx)(l.Tooltip, {
                        text: I
                          ? C.Z.Messages.ONBOARDING_REQUIRED_QUESTION
                          : null,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: n } = e;
                          return (0, s.jsx)(l.Button, {
                            className: E.button,
                            innerClassName: E.buttonInner,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            onClick: () => (i ? h() : p(N.length)),
                            disabled: I,
                            size: l.Button.Sizes.MEDIUM,
                            look: l.Button.Looks.FILLED,
                            grow: !1,
                            color: Z
                              ? l.Button.Colors.PRIMARY
                              : l.Button.Colors.BRAND,
                            children: i
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    C.Z.Messages.FINISH,
                                    (0, s.jsx)("span", {
                                      className: E.finishEmoji,
                                      role: "img",
                                      "aria-hidden": !0,
                                      children: "\uD83C\uDF89",
                                    }),
                                  ],
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    Z ? C.Z.Messages.SKIP : C.Z.Messages.NEXT,
                                    (0, s.jsx)(u.Z, {
                                      className: E.arrow,
                                      direction: u.Z.Directions.RIGHT,
                                    }),
                                  ],
                                }),
                          });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function B(e) {
        let {
            guild: t,
            prompts: n,
            step: l,
            selectOption: c,
            completeOnboarding: u,
            setCurrentStep: h,
            headerId: g,
            disableTracking: x,
          } = e,
          f = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
        r.useEffect(() => {
          a.ZP.fetchVerificationForm(t.id);
        }, [t.id]);
        let _ = n[l],
          N = l + 1 >= n.length && !j(f),
          C = n[0].required;
        r.useEffect(() => {
          if (!x)
            m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
              ...(0, i.hH)(t.id),
              step: 0,
              required: C,
            });
        }, [t.id, C, x]);
        let E = (e) => {
            !x &&
              (m.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, i.hH)(t.id),
                step: l,
                options_selected: e,
                skipped: 0 === e,
                back: !1,
                in_onboarding: !0,
                is_final_step: !1,
              }),
              l < n.length - 1 &&
                m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                  ...(0, i.hH)(t.id),
                  step: l,
                  required: n[l + 1].required,
                })),
              l + 1 < n.length ? h(l + 1) : j(f) && h("rules");
          },
          v = (e) => {
            !x &&
              (m.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, i.hH)(t.id),
                step: l,
                skipped: !1,
                back: !0,
                options_selected: e,
                in_onboarding: !0,
                is_final_step: !1,
              }),
              l > 0 &&
                m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                  ...(0, i.hH)(t.id),
                  step: l - 1,
                  required: n[l - 1].required,
                })),
              h(Math.max(0, l - 1));
          };
        if (null == _) return null;
        switch (_.type) {
          case I.FN.MULTIPLE_CHOICE:
            return (0, s.jsx)(Z, {
              guild: t,
              headerId: g,
              step: l,
              questionCount: n.length,
              currentPrompt: _,
              lastPrompt: N,
              selectOption: c,
              gotoPrevPrompt: v,
              gotoNextPrompt: E,
              completeOnboarding: u,
            });
          case I.FN.DROPDOWN:
            return (0, s.jsx)(O, {
              guild: t,
              headerId: g,
              step: l,
              questionCount: n.length,
              currentPrompt: _,
              lastPrompt: N,
              selectOption: c,
              gotoPrevPrompt: v,
              gotoNextPrompt: E,
              completeOnboarding: u,
            });
          default:
            (0, p.vE)(_.type);
        }
      }
    },
    973051: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var s = n(735250),
        r = n(470079),
        o = n(399606),
        l = n(780384),
        i = n(481060),
        a = n(410030),
        d = n(367907),
        c = n(863249),
        u = n(944163),
        m = n(768762),
        p = n(454585),
        h = n(626135),
        g = n(981631),
        x = n(689938),
        f = n(275211);
      function _(e) {
        var t;
        let {
            guild: n,
            prompts: _,
            completeOnboarding: N,
            setCurrentStep: I,
            disableTracking: b,
            previousPromptIndex: C,
          } = e,
          E = r.useRef(null),
          v = (0, o.e7)([u.Z], () => u.Z.getRulesPrompt(n.id)),
          [j, O] = r.useState(
            null !== (t = null == v ? void 0 : v.response) && void 0 !== t && t,
          ),
          Z = (0, o.e7)([u.Z], () => u.Z.get(n.id)),
          B = (0, a.ZP)(),
          R = r.useRef(null),
          T = r.useRef(null),
          D = (0, l.wj)(B)
            ? "linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))"
            : "linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))",
          M = r.useCallback(async () => {
            if (null != Z && null != v) {
              try {
                await c.ZP.submitVerificationForm(n.id, {
                  ...Z,
                  formFields: [{ ...v, response: j }],
                });
              } catch {}
              N();
            }
          }, [n.id, Z, v, j, N]);
        function P(e) {
          let [t] = e;
          t.isIntersecting && O(!0);
        }
        return (r.useEffect(() => {
          let e = new IntersectionObserver(P, {
              root: R.current,
              rootMargin: "0px",
              threshold: 0,
            }),
            t = T.current;
          return (
            null != t &&
              null != t.lastElementChild &&
              e.observe(t.lastElementChild),
            () => {
              null != t &&
                null != t.lastElementChild &&
                e.unobserve(t.lastElementChild);
            }
          );
        }, [T, R]),
        null == v)
          ? null
          : (0, s.jsx)("div", {
              className: f.prompt,
              children: (0, s.jsxs)("div", {
                className: f.promptContent,
                ref: R,
                children: [
                  (0, s.jsxs)(i.AdvancedScrollerThin, {
                    className: f.scrollerContent,
                    ref: E,
                    children: [
                      (0, s.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: x.Z.Messages.ONBOARDING_RULES_STEP,
                      }),
                      (0, s.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: x.Z.Messages.ONBOARDING_RULES_TITLE,
                      }),
                      (0, s.jsx)("div", {
                        className: f.termsFieldBody,
                        ref: T,
                        children: v.values.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className: f.termsRow,
                              children: [
                                (0, s.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: "".concat(t + 1, "."),
                                }),
                                (0, s.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  className: f.termsRowContent,
                                  children: p.Z.parseGuildVerificationFormRule(
                                    e,
                                    !0,
                                    { channelId: n.rulesChannelId },
                                  ),
                                }),
                              ],
                            },
                            "term-".concat(t),
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: f.overlay,
                    style: { background: D },
                  }),
                  (0, s.jsxs)("div", {
                    className: f.navButtons,
                    children: [
                      (0, s.jsx)("div", {
                        className: f.leftButtons,
                        children:
                          -1 !== C &&
                          (0, s.jsxs)(i.Button, {
                            innerClassName: f.buttonInner,
                            onClick: () => {
                              !b &&
                                (h.default.track(
                                  g.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                  {
                                    ...(0, d.hH)(n.id),
                                    step: -1,
                                    skipped: !1,
                                    back: !0,
                                    options_selected: 0,
                                    in_onboarding: !0,
                                    is_final_step: !1,
                                  },
                                ),
                                C >= 0 &&
                                  h.default.track(
                                    g.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                    {
                                      ...(0, d.hH)(n.id),
                                      step: C,
                                      required: _[C].required,
                                    },
                                  )),
                                I(C);
                            },
                            size: i.Button.Sizes.MEDIUM,
                            look: i.Button.Looks.OUTLINED,
                            grow: !1,
                            color: i.Button.Colors.PRIMARY,
                            children: [
                              (0, s.jsx)(m.Z, {
                                className: f.arrow,
                                direction: m.Z.Directions.LEFT,
                              }),
                              x.Z.Messages.BACK,
                            ],
                          }),
                      }),
                      (0, s.jsxs)("div", {
                        className: f.rightButtons,
                        children: [
                          (0, s.jsx)(i.Text, {
                            className: f.helpText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: j
                              ? x.Z.Messages
                                  .MEMBER_VERIFICATION_READ_AGREE_RULES
                              : x.Z.Messages
                                  .MEMBER_VERIFICATION_MUST_READ_RULES,
                          }),
                          (0, s.jsxs)(i.Button, {
                            innerClassName: f.buttonInner,
                            onClick: M,
                            disabled: !j,
                            size: i.Button.Sizes.MEDIUM,
                            look: i.Button.Looks.FILLED,
                            grow: !1,
                            color: i.Button.Colors.BRAND,
                            children: [
                              x.Z.Messages.FINISH,
                              (0, s.jsx)("span", {
                                className: f.finishEmoji,
                                role: "img",
                                "aria-hidden": !0,
                                children: "\uD83C\uDF89",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    288617: function (e, t, n) {
      e.exports = {
        coverContainer: "coverContainer_f130a3",
        centerArt: "centerArt_f130a3",
        mainIsland: "mainIsland_f130a3",
        balloonDog: "balloonDog_f130a3",
        leftArt: "leftArt_f130a3",
        grillingIsland: "grillingIsland_f130a3",
        rightArt: "rightArt_f130a3",
        waffleIsland: "waffleIsland_f130a3",
        float: "float_f130a3",
        altFloat: "altFloat_f130a3",
        centerContent: "centerContent_f130a3",
        coverContent: "coverContent_f130a3",
        coverTitle: "coverTitle_f130a3",
      };
    },
    878432: function (e, t, n) {
      e.exports = {
        main: "main_d8215a",
        artwork: "artwork_d8215a",
        gradient: "gradient_d8215a",
        bottomCenterContent: "bottomCenterContent_d8215a",
        cover: "cover_d8215a",
      };
    },
    275211: function (e, t, n) {
      e.exports = {
        prompt: "prompt_cd377c",
        promptContent: "promptContent_cd377c",
        scrollerContent: "scrollerContent_cd377c",
        questionHeader: "questionHeader_cd377c",
        title: "title_cd377c",
        headerSeparator: "headerSeparator_cd377c",
        promptOptions: "promptOptions_cd377c",
        helpText: "helpText_cd377c",
        helpTextItem: "helpTextItem_cd377c",
        navButtons: "navButtons_cd377c",
        finishEmoji: "finishEmoji_cd377c",
        termsFieldBody: "termsFieldBody_cd377c",
        termsRow: "termsRow_cd377c",
        termsRowContent: "termsRowContent_cd377c",
        leftButtons: "leftButtons_cd377c",
        rightButtons: "rightButtons_cd377c",
        button: "button_cd377c",
        buttonInner: "buttonInner_cd377c",
        arrow: "arrow_cd377c",
        overlay: "overlay_cd377c",
      };
    },
    695352: function (e, t, n) {
      e.exports = {
        optionButtonWrapper: "optionButtonWrapper_bd5e1f",
        selected: "selected_bd5e1f",
        pressed: "pressed_bd5e1f",
        optionButton: "optionButton_bd5e1f",
        checkIcon: "checkIcon_bd5e1f",
        memberCount: "memberCount_bd5e1f",
        buttonEmoji: "buttonEmoji_bd5e1f",
        buttonText: "buttonText_bd5e1f",
        newBadge: "newBadge_bd5e1f",
      };
    },
    481455: function (e, t, n) {
      e.exports = {
        selectValuePill: "selectValuePill_e25377",
        selectOption: "selectOption_e25377",
        selectOptionTitle: "selectOptionTitle_e25377",
        optionNewBadge: "optionNewBadge_e25377",
        selectValuePillClose: "selectValuePillClose_e25377",
        selectValuePillCloseIcon: "selectValuePillCloseIcon_e25377",
        selectOptionMemberCount: "selectOptionMemberCount_e25377",
      };
    },
  },
]);
//# sourceMappingURL=8e9951487be2d1289521.js.map
