"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41456"],
  {
    806223: function (e, t, n) {
      let r = (0, n(818083).B)({
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
      t.Z = r;
    },
    599263: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n(47120);
      var r = n(200651),
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        i = n(208404),
        a = n(442837),
        d = n(481060),
        c = n(749210),
        u = n(830064),
        m = n(393238),
        p = n(877604),
        h = n(480608),
        x = n(160404),
        g = n(703656),
        f = n(430824),
        b = n(768581),
        _ = n(302221),
        v = n(956664),
        C = n(549817),
        N = n(45966),
        j = n(819553),
        I = n(548473),
        E = n(15320),
        B = n(973051),
        Z = n(981631),
        T = n(388032),
        k = n(650413);
      async function D(e) {
        let t = await new Promise((t, n) => {
          let r = new Image();
          (r.crossOrigin = "Anonymous"),
            (r.onerror = (e) => {
              n(e), (r.onerror = r.onload = null), (r = null);
            }),
            (r.onload = () => {
              t((0, v.XN)(r, 2, 10)), (r.onerror = r.onload = null), (r = null);
            }),
            (r.src = e);
        });
        return null == t
          ? void 0
          : t.map((e) => {
              let [t, n, r] = e;
              return (0, _.vq)(t, n, r);
            });
      }
      function P(e) {
        let { guildId: t } = e,
          { ref: n, width: o, height: v } = (0, m.Z)(),
          [P, O] = l.useState(),
          w = (0, a.Wu)([N.Z], () => N.Z.getOnboardingPromptsForOnboarding(t)),
          R = (0, a.e7)([N.Z], () => N.Z.getEnabled(t)),
          L = l.useCallback(
            (e, n, r) => {
              C.Z.selectOption(t, e, n, r);
            },
            [t],
          ),
          M = l.useCallback(() => {
            C.Z.completeOnboarding(t, w);
          }, [t, w]),
          S = (0, a.e7)([f.Z], () => f.Z.getGuild(t)),
          A = l.useMemo(
            () =>
              null == S
                ? null
                : b.ZP.getGuildSplashURL({ id: S.id, splash: S.splash }),
            [S],
          ),
          F = (0, a.e7)([j.ZP], () => j.ZP.getCurrentOnboardingStep(t)),
          [U, q] = l.useState(null != A ? null : "cover");
        null != A &&
          null == P &&
          D(A).then((e) => {
            O(e[0]);
          });
        let V = l.useCallback(
            (e) => {
              q(F), C.Z.setUserOnboardingStep(t, e);
            },
            [t, F],
          ),
          y = (0, a.e7)([x.Z], () => x.Z.isFullServerPreview(t)),
          H = (0, a.e7)([j.ZP], () => j.ZP.getOnboardingStatus(t)),
          G = null != w && w.length > 0,
          z = l.useCallback(() => {
            (0, j.kp)(H) && R && G ? V(0) : M();
          }, [H, R, G, V, M]);
        l.useEffect(() => {
          if (!j.ZP.shouldShowOnboarding(t))
            return c.Z.escapeToDefaultChannel(t);
          (0, h.E)(t);
        }, [t]);
        let W = (0, d.useTransition)(
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
          Y = j.ZP.shouldShowOnboarding(t),
          X = null == S;
        if (
          (l.useEffect(() => {
            if (!Y || X) {
              let e = setTimeout(() => {
                (0, g.uL)(Z.Z5c.CHANNEL(t));
              }, 1e3);
              return () => clearTimeout(e);
            }
          }, [Y, X, t]),
          !j.ZP.shouldShowOnboarding(t) || null == S)
        )
          return null;
        let K = () => {
          switch (F) {
            case "cover":
              return (0, r.jsx)(I.ZP, {
                guild: S,
                onboardingStatus: j.uX.READY,
                onStart: z,
                disableTracking: y,
              });
            case "rules":
              return (0, r.jsx)(B.Z, {
                setCurrentStep: V,
                previousPromptIndex: w.length - 1,
                guild: S,
                prompts: w,
                completeOnboarding: M,
                disableTracking: y,
              });
            case null:
              return null;
            default:
              return (0, r.jsx)(E.Z, {
                guild: S,
                prompts: w,
                step: F,
                selectOption: L,
                completeOnboarding: M,
                setCurrentStep: V,
                disableTracking: y,
              });
          }
        };
        return (0, r.jsxs)("div", {
          className: k.main,
          ref: n,
          children: [
            null != A
              ? (0, r.jsx)(p.Z, {
                  className: s()(k.artwork),
                  src: A,
                  width: o,
                  height: v,
                  imageClassName: k.cover,
                })
              : (0, r.jsx)(u.Z, {
                  className: k.artwork,
                  preserveAspectRatio: "xMinYMin slice",
                }),
            null != P &&
              (0, r.jsx)("div", {
                className: k.gradient,
                style: {
                  background: "linear-gradient(180deg, "
                    .concat((0, _.aD)(P, 0.16), " 0%, ")
                    .concat((0, _.aD)(P, 1), " 100%)"),
                },
              }),
            (0, r.jsx)("div", { className: k.gradient }),
            W((e, t, n) => {
              let { key: l } = n;
              return (0, r.jsx)(i.animated.div, { style: e, children: K() }, l);
            }),
            "cover" === F &&
              (0, r.jsx)("div", {
                className: k.bottomCenterContent,
                children: (0, r.jsx)(d.Heading, {
                  variant: "heading-sm/normal",
                  color: "header-secondary",
                  children: T.intl.format(T.t.kI6UoK, {
                    privacyLink: Z.EYA.PRIVACY,
                  }),
                }),
              }),
          ],
        });
      }
    },
    15320: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      });
      var r = n(200651),
        l = n(192379),
        o = n(399606),
        s = n(481060),
        i = n(367907),
        a = n(863249),
        d = n(944163),
        c = n(14263),
        u = n(768762),
        m = n(626135),
        p = n(823379),
        h = n(806223),
        x = n(45966),
        g = n(637853),
        f = n(968644),
        b = n(104265),
        _ = n(588632),
        v = n(290511),
        C = n(981631),
        N = n(388032),
        j = n(925741);
      function I(e, t) {
        return (0, r.jsx)(
          "span",
          { className: j.helpTextItem, children: e },
          t,
        );
      }
      function E(e) {
        return (
          null != e &&
          h.Z.getCurrentConfig(
            { location: "ba216b_1" },
            { autoTrackExposure: !0 },
          ).includeRules
        );
      }
      function B(e) {
        let {
            headerId: t,
            guild: n,
            step: l,
            lastPrompt: i,
            questionCount: a,
            currentPrompt: d,
            selectOption: m,
            gotoPrevPrompt: p,
            gotoNextPrompt: h,
            completeOnboarding: b,
          } = e,
          v = (0, o.Wu)([x.Z], () =>
            x.Z.getOnboardingResponsesForPrompt(n.id, d.id),
          ),
          C = 0 === v.length && (null == d ? void 0 : d.required),
          E = null == d ? void 0 : d.options.filter((e) => v.includes(e.id)),
          B = (0, g.L6)(E),
          Z = (0, g.dX)(E),
          T = 0 === v.length,
          { helpText: k, helpTextAdditional: D } = (0, f.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: B,
            selectedChannelIds: Z,
            itemHook: I,
          }),
          P = (0, c.Z)(n.id, 1e3),
          O = d.options.map((e) => ({ value: e.id, ...e })),
          w = d.options.filter((e) => v.includes(e.id)).map((e) => e.id);
        return (0, r.jsx)("div", {
          className: j.prompt,
          children: (0, r.jsxs)("div", {
            className: j.promptContent,
            children: [
              (0, r.jsxs)(s.ScrollerThin, {
                className: j.scrollerContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: j.questionHeader,
                    children: [
                      (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: N.intl.format(N.t.isV0NT, {
                          currentQuestion: l + 1,
                          questionCount: a,
                        }),
                      }),
                      d.required
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                className: j.headerSeparator,
                                children: "\xb7",
                              }),
                              (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children: N.intl.string(N.t.Ur8Vrq),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, r.jsx)(s.Heading, {
                    className: j.title,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    id: t,
                    children: d.title,
                  }),
                  (0, r.jsx)(_.Z, {
                    options: O,
                    value: w,
                    onChange: (e) => {
                      let t = e.find((e) => !v.includes(e.id)),
                        n = e.map((e) => e.id);
                      if (null != t) m(d.id, t.id, !0);
                      else {
                        let e = v.filter((e) => !n.includes(e));
                        d.options
                          .filter((t) => e.includes(t.id))
                          .forEach((e) => {
                            m(d.id, e.id, !1);
                          });
                      }
                    },
                    memberCounts: P,
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: j.navButtons,
                children: [
                  (0, r.jsx)("div", {
                    className: j.leftButtons,
                    children:
                      l > 0 &&
                      (0, r.jsxs)(s.Button, {
                        className: j.button,
                        innerClassName: j.buttonInner,
                        onClick: () => p(v.length),
                        size: s.Button.Sizes.MEDIUM,
                        look: s.Button.Looks.OUTLINED,
                        grow: !1,
                        color: s.Button.Colors.PRIMARY,
                        children: [
                          (0, r.jsx)(u.Z, {
                            className: j.arrow,
                            direction: u.Z.Directions.LEFT,
                          }),
                          N.intl.string(N.t["13/7kZ"]),
                        ],
                      }),
                  }),
                  (0, r.jsxs)("div", {
                    className: j.rightButtons,
                    children: [
                      (0, r.jsxs)(s.Text, {
                        className: j.helpText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [k, " ", D],
                      }),
                      (0, r.jsx)(s.Tooltip, {
                        text: C ? N.intl.string(N.t.dA1dSU) : null,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: n } = e;
                          return (0, r.jsx)(s.Button, {
                            className: j.button,
                            innerClassName: j.buttonInner,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            onClick: () => (i ? b() : h(v.length)),
                            disabled: C,
                            size: s.Button.Sizes.MEDIUM,
                            look: s.Button.Looks.FILLED,
                            grow: !1,
                            color: T
                              ? s.Button.Colors.PRIMARY
                              : s.Button.Colors.BRAND,
                            children: i
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    N.intl.string(N.t["8SuVoK"]),
                                    (0, r.jsx)("span", {
                                      className: j.finishEmoji,
                                      role: "img",
                                      "aria-hidden": !0,
                                      children: "\uD83C\uDF89",
                                    }),
                                  ],
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    T
                                      ? N.intl.string(N.t["5WxrcX"])
                                      : N.intl.string(N.t.PDTjLC),
                                    (0, r.jsx)(u.Z, {
                                      className: j.arrow,
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
            step: l,
            lastPrompt: i,
            questionCount: a,
            currentPrompt: d,
            selectOption: c,
            gotoPrevPrompt: m,
            gotoNextPrompt: p,
            completeOnboarding: h,
          } = e,
          _ = (0, o.Wu)([x.Z], () =>
            x.Z.getOnboardingResponsesForPrompt(n.id, d.id),
          ),
          v = 0 === _.length && (null == d ? void 0 : d.required),
          C = null == d ? void 0 : d.options.filter((e) => _.includes(e.id)),
          E = (0, g.L6)(C),
          B = (0, g.dX)(C),
          Z = 0 === _.length,
          { helpText: T, helpTextAdditional: k } = (0, f.Z)({
            guild: n,
            prompt: d,
            selectedRoleIds: E,
            selectedChannelIds: B,
            itemHook: I,
          });
        return (0, r.jsx)("div", {
          className: j.prompt,
          children: (0, r.jsxs)("div", {
            className: j.promptContent,
            children: [
              (0, r.jsxs)(s.ScrollerThin, {
                className: j.scrollerContent,
                children: [
                  (0, r.jsxs)("div", {
                    className: j.questionHeader,
                    children: [
                      (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: N.intl.format(N.t.isV0NT, {
                          currentQuestion: l + 1,
                          questionCount: a,
                        }),
                      }),
                      d.required
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                className: j.headerSeparator,
                                children: "\xb7",
                              }),
                              (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children: N.intl.string(N.t.Ur8Vrq),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, r.jsx)(s.Heading, {
                    className: j.title,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    id: t,
                    children: d.title,
                  }),
                  (0, r.jsx)("div", {
                    className: j.promptOptions,
                    children: d.options.map((e) =>
                      (0, r.jsx)(
                        b.Z,
                        {
                          guildId: n.id,
                          option: e,
                          onSelect: (t) => c(d.id, e.id, null != t && t),
                          selected: _.includes(e.id),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: j.navButtons,
                children: [
                  (0, r.jsx)("div", {
                    className: j.leftButtons,
                    children:
                      l > 0 &&
                      (0, r.jsxs)(s.Button, {
                        className: j.button,
                        innerClassName: j.buttonInner,
                        onClick: () => m(_.length),
                        size: s.Button.Sizes.MEDIUM,
                        look: s.Button.Looks.OUTLINED,
                        grow: !1,
                        color: s.Button.Colors.PRIMARY,
                        children: [
                          (0, r.jsx)(u.Z, {
                            className: j.arrow,
                            direction: u.Z.Directions.LEFT,
                          }),
                          N.intl.string(N.t["13/7kZ"]),
                        ],
                      }),
                  }),
                  (0, r.jsxs)("div", {
                    className: j.rightButtons,
                    children: [
                      (0, r.jsxs)(s.Text, {
                        className: j.helpText,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [T, " ", k],
                      }),
                      (0, r.jsx)(s.Tooltip, {
                        text: v ? N.intl.string(N.t.dA1dSU) : null,
                        children: (e) => {
                          let { onMouseEnter: t, onMouseLeave: n } = e;
                          return (0, r.jsx)(s.Button, {
                            className: j.button,
                            innerClassName: j.buttonInner,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            onClick: () => (i ? h() : p(_.length)),
                            disabled: v,
                            size: s.Button.Sizes.MEDIUM,
                            look: s.Button.Looks.FILLED,
                            grow: !1,
                            color: Z
                              ? s.Button.Colors.PRIMARY
                              : s.Button.Colors.BRAND,
                            children: i
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    N.intl.string(N.t["8SuVoK"]),
                                    (0, r.jsx)("span", {
                                      className: j.finishEmoji,
                                      role: "img",
                                      "aria-hidden": !0,
                                      children: "\uD83C\uDF89",
                                    }),
                                  ],
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    Z
                                      ? N.intl.string(N.t["5WxrcX"])
                                      : N.intl.string(N.t.PDTjLC),
                                    (0, r.jsx)(u.Z, {
                                      className: j.arrow,
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
      function T(e) {
        let {
            guild: t,
            prompts: n,
            step: s,
            selectOption: c,
            completeOnboarding: u,
            setCurrentStep: h,
            headerId: x,
            disableTracking: g,
          } = e,
          f = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id));
        l.useEffect(() => {
          a.ZP.fetchVerificationForm(t.id);
        }, [t.id]);
        let b = n[s],
          _ = s + 1 >= n.length && !E(f),
          N = n[0].required;
        l.useEffect(() => {
          if (!g)
            m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
              ...(0, i.hH)(t.id),
              step: 0,
              required: N,
            });
        }, [t.id, N, g]);
        let j = (e) => {
            !g &&
              (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, i.hH)(t.id),
                step: s,
                options_selected: e,
                skipped: 0 === e,
                back: !1,
                in_onboarding: !0,
                is_final_step: !1,
              }),
              s < n.length - 1 &&
                m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                  ...(0, i.hH)(t.id),
                  step: s,
                  required: n[s + 1].required,
                })),
              s + 1 < n.length ? h(s + 1) : E(f) && h("rules");
          },
          I = (e) => {
            !g &&
              (m.default.track(C.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, i.hH)(t.id),
                step: s,
                skipped: !1,
                back: !0,
                options_selected: e,
                in_onboarding: !0,
                is_final_step: !1,
              }),
              s > 0 &&
                m.default.track(C.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                  ...(0, i.hH)(t.id),
                  step: s - 1,
                  required: n[s - 1].required,
                })),
              h(Math.max(0, s - 1));
          };
        if (null == b) return null;
        switch (b.type) {
          case v.FN.MULTIPLE_CHOICE:
            return (0, r.jsx)(Z, {
              guild: t,
              headerId: x,
              step: s,
              questionCount: n.length,
              currentPrompt: b,
              lastPrompt: _,
              selectOption: c,
              gotoPrevPrompt: I,
              gotoNextPrompt: j,
              completeOnboarding: u,
            });
          case v.FN.DROPDOWN:
            return (0, r.jsx)(B, {
              guild: t,
              headerId: x,
              step: s,
              questionCount: n.length,
              currentPrompt: b,
              lastPrompt: _,
              selectOption: c,
              gotoPrevPrompt: I,
              gotoNextPrompt: j,
              completeOnboarding: u,
            });
          default:
            (0, p.vE)(b.type);
        }
      }
    },
    973051: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var r = n(200651),
        l = n(192379),
        o = n(399606),
        s = n(780384),
        i = n(481060),
        a = n(410030),
        d = n(367907),
        c = n(863249),
        u = n(944163),
        m = n(768762),
        p = n(454585),
        h = n(626135),
        x = n(981631),
        g = n(388032),
        f = n(925741);
      function b(e) {
        var t;
        let {
            guild: n,
            prompts: b,
            completeOnboarding: _,
            setCurrentStep: v,
            disableTracking: C,
            previousPromptIndex: N,
          } = e,
          j = l.useRef(null),
          I = (0, o.e7)([u.Z], () => u.Z.getRulesPrompt(n.id)),
          [E, B] = l.useState(
            null !== (t = null == I ? void 0 : I.response) && void 0 !== t && t,
          ),
          Z = (0, o.e7)([u.Z], () => u.Z.get(n.id)),
          T = (0, a.ZP)(),
          k = l.useRef(null),
          D = l.useRef(null),
          P = (0, s.wj)(T)
            ? "linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))"
            : "linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))",
          O = l.useCallback(async () => {
            if (null != Z && null != I) {
              try {
                await c.ZP.submitVerificationForm(n.id, {
                  ...Z,
                  formFields: [{ ...I, response: E }],
                });
              } catch {}
              _();
            }
          }, [n.id, Z, I, E, _]);
        function w(e) {
          let [t] = e;
          t.isIntersecting && B(!0);
        }
        return (l.useEffect(() => {
          let e = new IntersectionObserver(w, {
              root: k.current,
              rootMargin: "0px",
              threshold: 0,
            }),
            t = D.current;
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
        }, [D, k]),
        null == I)
          ? null
          : (0, r.jsx)("div", {
              className: f.prompt,
              children: (0, r.jsxs)("div", {
                className: f.promptContent,
                ref: k,
                children: [
                  (0, r.jsxs)(i.AdvancedScrollerThin, {
                    className: f.scrollerContent,
                    ref: j,
                    children: [
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: g.intl.string(g.t["b1JC+v"]),
                      }),
                      (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: g.intl.string(g.t.prJqwc),
                      }),
                      (0, r.jsx)("div", {
                        className: f.termsFieldBody,
                        ref: D,
                        children: I.values.map((e, t) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className: f.termsRow,
                              children: [
                                (0, r.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: "".concat(t + 1, "."),
                                }),
                                (0, r.jsx)(i.Text, {
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
                  (0, r.jsx)("div", {
                    className: f.overlay,
                    style: { background: P },
                  }),
                  (0, r.jsxs)("div", {
                    className: f.navButtons,
                    children: [
                      (0, r.jsx)("div", {
                        className: f.leftButtons,
                        children:
                          -1 !== N &&
                          (0, r.jsxs)(i.Button, {
                            innerClassName: f.buttonInner,
                            onClick: () => {
                              !C &&
                                (h.default.track(
                                  x.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
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
                                N >= 0 &&
                                  h.default.track(
                                    x.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                    {
                                      ...(0, d.hH)(n.id),
                                      step: N,
                                      required: b[N].required,
                                    },
                                  )),
                                v(N);
                            },
                            size: i.Button.Sizes.MEDIUM,
                            look: i.Button.Looks.OUTLINED,
                            grow: !1,
                            color: i.Button.Colors.PRIMARY,
                            children: [
                              (0, r.jsx)(m.Z, {
                                className: f.arrow,
                                direction: m.Z.Directions.LEFT,
                              }),
                              g.intl.string(g.t["13/7kZ"]),
                            ],
                          }),
                      }),
                      (0, r.jsxs)("div", {
                        className: f.rightButtons,
                        children: [
                          (0, r.jsx)(i.Text, {
                            className: f.helpText,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: E
                              ? g.intl.string(g.t.arAe3N)
                              : g.intl.string(g.t.D0CVAQ),
                          }),
                          (0, r.jsxs)(i.Button, {
                            innerClassName: f.buttonInner,
                            onClick: O,
                            disabled: !E,
                            size: i.Button.Sizes.MEDIUM,
                            look: i.Button.Looks.FILLED,
                            grow: !1,
                            color: i.Button.Colors.BRAND,
                            children: [
                              g.intl.string(g.t["8SuVoK"]),
                              (0, r.jsx)("span", {
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
    808786: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    490266: function (e, t, n) {
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
    650413: function (e, t, n) {
      e.exports = {
        main: "main_d8215a",
        artwork: "artwork_d8215a",
        gradient: "gradient_d8215a",
        bottomCenterContent: "bottomCenterContent_d8215a",
        cover: "cover_d8215a",
      };
    },
    925741: function (e, t, n) {
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
    268280: function (e, t, n) {
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
    52609: function (e, t, n) {
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
//# sourceMappingURL=8261dbdf89f033bc90ab.js.map
