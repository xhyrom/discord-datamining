"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58227"],
  {
    107862: function (e, n, t) {
      t.d(n, {
        RM: function () {
          return a;
        },
        Ug: function () {
          return l;
        },
      });
      let s = (0, t(818083).B)({
        kind: "guild",
        id: "2023-02_onboardingdropdowns",
        label: "Enables dropdown selections from onboarding prompts",
        defaultConfig: { dropdownsAllowed: !1 },
        treatments: [{ id: 1, label: "On", config: { dropdownsAllowed: !0 } }],
      });
      function l(e) {
        return s.useExperiment(
          { guildId: e, location: "a12ce7_1" },
          { autoTrackExposure: !1 },
        );
      }
      function a(e) {
        return s.getCurrentConfig({ guildId: e, location: "a12ce7_2" });
      }
    },
    721012: function (e, n, t) {
      t.d(n, {
        i: function () {
          return I;
        },
      }),
        t(47120);
      var s = t(735250),
        l = t(470079);
      t(120356);
      var a = t(212433),
        i = t(481060),
        r = t(671533),
        o = t(689938),
        c = t(689937);
      function d(e) {
        let { testimonial: n, className: t } = e,
          {
            message: l,
            profilePic: a,
            adminTitle: r,
            emphasisColor: o = "interactive-normal",
          } = n;
        return (0, s.jsxs)("div", {
          className: t,
          children: [
            (0, s.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: l.format({
                testimonialHook: (e, n) =>
                  (0, s.jsx)(
                    i.Text,
                    {
                      tag: "span",
                      variant: "text-sm/bold",
                      color: o,
                      children: e,
                    },
                    n,
                  ),
              }),
            }),
            (0, s.jsxs)("div", {
              className: c.userContainer,
              children: [
                (0, s.jsx)(i.Avatar, {
                  src: a,
                  size: i.AvatarSizes.SIZE_16,
                  "aria-hidden": !0,
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: r,
                }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        let { testimonials: n } = e,
          [[t, a], d] = l.useState([0, "right"]),
          I = l.useCallback(() => {
            d((e) => {
              let [t] = e;
              return 0 === t ? [n.length - 1, "left"] : [t - 1, "left"];
            });
          }, [d, n.length]),
          _ = l.useCallback(() => {
            d((e) => {
              let [t] = e;
              return [(t + 1) % n.length, "right"];
            });
          }, [d, n.length]),
          u = n[t],
          E = l.useCallback(
            (e, n, t, l) =>
              (0, s.jsx)(N, { item: n, state: t, cleanup: l, direction: a }, e),
            [a],
          );
        return (0, s.jsxs)("div", {
          className: c.testimonialHeroContainer,
          children: [
            (0, s.jsx)("div", {
              className: c.animatedContainer,
              children: (0, s.jsx)(i.TransitionGroup, {
                items: [u],
                renderItem: E,
                getItemKey: (e) => e.adminTitle,
              }),
            }),
            (0, s.jsx)(i.Text, {
              variant: "text-lg/bold",
              className: c.heroQuotes,
              children: "“",
            }),
            (0, s.jsxs)("div", {
              className: c.testimonialsControls,
              children: [
                (0, s.jsxs)(i.Button, {
                  className: c.testimonialControl,
                  innerClassName: c.testimonialControlInner,
                  onClick: I,
                  size: i.Button.Sizes.MIN,
                  color: i.Button.Colors.PRIMARY,
                  children: [
                    (0, s.jsx)(r.Z, {
                      className: c.testimonialControlIcon,
                      direction: r.Z.Directions.LEFT,
                    }),
                    (0, s.jsx)(i.HiddenVisually, {
                      children: o.Z.Messages.BACK,
                    }),
                  ],
                }),
                (0, s.jsxs)(i.Button, {
                  className: c.testimonialControl,
                  innerClassName: c.testimonialControlInner,
                  onClick: _,
                  size: i.Button.Sizes.MIN,
                  color: i.Button.Colors.PRIMARY,
                  children: [
                    (0, s.jsx)(r.Z, {
                      className: c.testimonialControlIcon,
                      direction: r.Z.Directions.RIGHT,
                    }),
                    (0, s.jsx)(i.HiddenVisually, {
                      children: o.Z.Messages.NEXT,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        let { item: n, state: t, cleanup: l, direction: r } = e,
          [o] = (0, i.useSpring)(
            () => {
              switch (t) {
                case i.TransitionStates.ENTERED:
                  return {
                    from: {
                      transform:
                        "right" === r ? "translateX(150%)" : "translate(-150%)",
                    },
                    to: { transform: "translateX(0%)" },
                  };
                case i.TransitionStates.YEETED:
                  return {
                    from: { transform: "translateX(0%)" },
                    to: {
                      transform:
                        "right" === r ? "translateX(-150%)" : "translate(150%)",
                    },
                    onRest: l,
                  };
                default:
                  return {};
              }
            },
            "respect-motion-settings",
            [t],
          );
        return (0, s.jsx)(a.animated.div, {
          style: o,
          children: (0, s.jsx)(d, { className: c.testimonial, testimonial: n }),
        });
      }
    },
    869764: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
        k: function () {
          return C;
        },
      }),
        t(789020);
      var s = t(735250),
        l = t(470079),
        a = t(442837),
        i = t(481060),
        r = t(933557),
        o = t(471445),
        c = t(905362),
        d = t(353093),
        I = t(979264),
        N = t(937111),
        _ = t(592125),
        u = t(271383),
        E = t(430824),
        T = t(496675),
        m = t(186523),
        O = t(768581),
        S = t(630388),
        D = t(526120),
        A = t(563534),
        G = t(846121),
        h = t(305762),
        L = t(981631),
        g = t(308083),
        f = t(372897),
        x = t(689938),
        R = t(571413);
      function C(e) {
        let {
            title: n,
            emojiId: t,
            emojiName: l,
            icon: a,
            completed: r,
            Icon: o,
            ...c
          } = e,
          d = "channel" === c.variant ? c.channelId : null,
          I = "static" === c.variant ? c.subtitle : c.channelName,
          N =
            null != d
              ? O.ZP.getNewMemberActionIconURL({ channelId: d, icon: a })
              : null;
        return (0, s.jsxs)("div", {
          className: R.action,
          children: [
            null != N
              ? (0, s.jsx)("img", {
                  src: N,
                  className: R.icon,
                  width: 32,
                  height: 32,
                  alt: "",
                  "aria-hidden": !0,
                })
              : (0, s.jsx)(h.Z, {
                  emojiId: t,
                  emojiName: l,
                  size: h.R.LARGE,
                  defaultComponent: (0, s.jsx)("div", {
                    className: R.channelIconContainer,
                    children: (0, s.jsx)(o, {
                      className: R.channelIcon,
                      color: "currentColor",
                    }),
                  }),
                }),
            (0, s.jsxs)("div", {
              className: R.actionInfo,
              children: [
                (0, s.jsx)(i.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: n,
                }),
                null != I
                  ? (0, s.jsx)(i.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: I,
                    })
                  : null,
              ],
            }),
            r
              ? (0, s.jsx)(i.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  secondaryColor: "#fff",
                  className: R.checkCircleCompleted,
                })
              : (0, s.jsx)(m.Z, {
                  className: R.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function U(e) {
        var n;
        let { action: t, completed: c } = e,
          { channelId: d, title: I, emoji: N, icon: u } = t,
          { id: E, name: m } = null != N ? N : {},
          O = (0, a.e7)([_.Z], () => _.Z.getChannel(d)),
          S = (0, r.ZP)(O, !0),
          A = (0, a.e7)([T.Z], () => T.Z.can(L.Plq.VIEW_CHANNEL, O)),
          G = l.useCallback(() => {
            if (null == O) return null;
            (0, D.gp)(O.guild_id, O.id);
          }, [O]);
        if (null == O || !A) return null;
        let h = null !== (n = (0, o.KS)(O)) && void 0 !== n ? n : i.TextIcon;
        return (0, s.jsx)(i.Clickable, {
          className: R.clickableAction,
          onClick: G,
          children: (0, s.jsx)(C, {
            variant: "channel",
            channelId: d,
            title: I,
            channelName: S,
            emojiId: E,
            emojiName: m,
            icon: u,
            completed: c,
            Icon: h,
          }),
        });
      }
      function p(e) {
        var n;
        let { guildId: t } = e,
          r = (0, a.e7)([A.Z], () => A.Z.getNewMemberActions(t), [t]),
          o = (0, a.e7)([G.Z], () => G.Z.getCompletedActions(t)),
          _ = (0, a.e7)([u.ZP], () => u.ZP.getSelfMember(t)),
          T = (0, a.e7)([E.Z], () => E.Z.getGuild(t)),
          m =
            null != T
              ? (0, d.ky)(
                  T.id,
                  null === (n = T.clan) || void 0 === n ? void 0 : n.badge,
                  g.NC.SIZE_16,
                )
              : null,
          O = (0, a.e7)([N.Z], () => N.Z.getRequest(t));
        l.useEffect(() => {
          var e;
          null == o &&
            (null == _ ? void 0 : _.flags) != null &&
            (0, S.yE)(
              null !== (e = _.flags) && void 0 !== e ? e : 0,
              f.q.STARTED_HOME_ACTIONS,
            ) &&
            (0, D.Fg)(t);
        }, [o, t, null == _ ? void 0 : _.flags]);
        let h = l.useCallback(() => {
          null != T &&
            null != T.rulesChannelId &&
            (0, D.gp)(T.id, T.rulesChannelId);
        }, [T]);
        return null == _ || null == r || 0 === r.length
          ? null
          : (0, s.jsxs)("div", {
              className: R.container,
              children: [
                (0, s.jsx)(i.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: x.Z.Messages.GET_STARTED,
                }),
                (null == T ? void 0 : T.hasFeature(L.oNc.CLAN)) &&
                  null != m &&
                  (0, s.jsx)(i.Clickable, {
                    className: R.clickableAction,
                    onClick: () =>
                      (0, c.CK)(t, null == O ? void 0 : O.joinRequestId),
                    children: (0, s.jsxs)("div", {
                      className: R.action,
                      children: [
                        (0, s.jsx)("div", {
                          className: R.tagIconContainer,
                          children: (0, s.jsx)(I.KQ, {
                            src: m,
                            size: g.NC.SIZE_16,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: R.actionInfo,
                          children: (0, s.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children:
                              x.Z.Messages.RAPIDASH_ONBOARDING_ACTION_ITEM,
                          }),
                        }),
                      ],
                    }),
                  }),
                r.map((e) =>
                  (0, s.jsx)(
                    U,
                    {
                      action: e,
                      completed: (null == o ? void 0 : o[e.channelId]) === !0,
                      guildId: t,
                    },
                    e.channelId,
                  ),
                ),
                (null == T ? void 0 : T.rulesChannelId) != null &&
                  (0, s.jsxs)(i.Clickable, {
                    className: R.action,
                    onClick: h,
                    children: [
                      (0, s.jsx)("div", {
                        className: R.rulesIconContainer,
                        children: (0, s.jsx)(i.BookCheckIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: R.rulesIcon,
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: R.actionInfo,
                        children: (0, s.jsx)(i.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children:
                            x.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION,
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    150512: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var s = t(735250),
        l = t(470079),
        a = t(120356),
        i = t.n(a),
        r = t(866442),
        o = t(399606),
        c = t(481060),
        d = t(749210),
        I = t(410030),
        N = t(607070),
        _ = t(603368),
        u = t(687158),
        E = t(576635),
        T = t(484459),
        m = t(502762),
        O = t(430824),
        S = t(594174),
        D = t(5192),
        A = t(51144),
        G = t(228168),
        h = t(36766);
      function L(e) {
        let { guildId: n, welcomeMessage: t, className: a } = e,
          L = (0, o.e7)([O.Z], () => O.Z.getGuild(n)),
          g = (0, o.e7)([N.Z], () => N.Z.useReducedMotion),
          f = (0, o.e7)([S.default], () =>
            S.default.getUser(null == t ? void 0 : t.authorIds[0]),
          ),
          x = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
          R = (0, u.ZP)(null == f ? void 0 : f.id, n),
          { theme: C, primaryColor: U } = (0, E.Z)({
            user: f,
            displayProfile: R,
          }),
          p = (0, I.ZP)(),
          v = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, C).hex(),
          P = l.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [t]);
        l.useEffect(() => {
          d.Z.requestMembersById(n, P);
        }, [n, P]),
          l.useEffect(() => {
            null != f && (0, T.Z)(f.id, f.getAvatarURL(n, 48), { guildId: n });
          }, [f, n]);
        let Z = (0, A._T)(x),
          M = null != U ? (0, r.br)(U, 1) : v,
          j = (0, _.$0)(M);
        if (null == f || null == x || null == t) return null;
        let B = null != L && L.ownerId === f.id;
        return (0, s.jsx)("div", {
          className: i()(h.welcomeMessageContainer, a),
          children: (0, s.jsxs)(m.Z, {
            className: h.welcomeMessageProfileContainer,
            user: f,
            displayProfile: R,
            profileType: G.y0.CARD,
            themeOverride: p,
            forceShowPremium: !0,
            children: [
              (0, s.jsx)("div", { className: h.avatarBackground }),
              g
                ? (0, s.jsx)(c.Avatar, {
                    src: f.getAvatarURL(n, 48),
                    size: c.AvatarSizes.SIZE_48,
                    className: h.avatar,
                    "aria-label": f.username,
                  })
                : (0, s.jsx)(c.AnimatedAvatar, {
                    src: f.getAvatarURL(n, 48),
                    size: c.AvatarSizes.SIZE_48,
                    className: h.avatar,
                    "aria-label": f.username,
                  }),
              (0, s.jsx)("div", {
                className: h.avatarBorder,
                style: { backgroundColor: M },
              }),
              (0, s.jsxs)("div", {
                className: h.welcomeMessageContent,
                style: { color: j.hex() },
                children: [
                  (0, s.jsxs)("div", {
                    className: h.adminUsernameContainer,
                    children: [
                      (0, s.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "currentColor",
                        children: D.ZP.getName(n, null, f),
                      }),
                      B
                        ? (0, s.jsx)(c.CrownIcon, {
                            size: "md",
                            color: "currentColor",
                            className: h.ownerIcon,
                          })
                        : null,
                    ],
                  }),
                  (0, s.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: (function (e, n) {
                      let t = e.split(/\[@username\]/g);
                      return (0, s.jsx)("span", {
                        children: t.map((e, a) =>
                          (0, s.jsxs)(
                            l.Fragment,
                            {
                              children: [
                                e,
                                a < t.length - 1
                                  ? (0, s.jsx)(c.Text, {
                                      tag: "span",
                                      variant: "text-md/semibold",
                                      children: "@".concat(n),
                                    })
                                  : null,
                              ],
                            },
                            "username-".concat(a),
                          ),
                        ),
                      });
                    })(
                      null == t ? void 0 : t.message,
                      null != Z ? Z : x.username,
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    889369: function (e, n, t) {
      t(47120);
      var s,
        l,
        a,
        i,
        r = t(392711),
        o = t.n(r),
        c = t(442837),
        d = t(570140),
        I = t(45966),
        N = t(999382),
        _ = t(981631);
      let u = !1,
        E = null,
        T = new Set();
      function m() {
        (function () {
          (u = !1), (E = null);
        })(),
          null != (E = N.Z.getGuildId()) &&
            N.Z.getSection() === _.pNK.ONBOARDING &&
            (T = new Set(I.Z.getDefaultChannelIds(E)));
      }
      class O extends (s = c.ZP.Store) {
        initialize() {
          this.waitFor(N.Z, I.Z);
        }
        hasChanges() {
          if (null == E) return !1;
          let e = I.Z.getDefaultChannelIds(E).sort(),
            n = Array.from(T).sort();
          return !o().isEqual(e, n);
        }
        get guildId() {
          return E;
        }
        get submitting() {
          return u;
        }
        get editedDefaultChannelIds() {
          return T;
        }
      }
      (i = "GuildSettingsDefaultChannelsStore"),
        (a = "displayName") in (l = O)
          ? Object.defineProperty(l, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = i),
        (n.Z = new O(d.Z, {
          GUILD_SETTINGS_INIT: m,
          GUILD_SETTINGS_SET_SECTION: m,
          GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
          GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: m,
          GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: m,
          GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
            u = !1;
          },
          GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
            let { channelId: n } = e;
            (T = new Set(T)).has(n) ? T.delete(n) : T.add(n);
          },
          GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
            u = !0;
          },
        }));
    },
    983135: function (e, n, t) {
      t.d(n, {
        $K: function () {
          return h;
        },
        IG: function () {
          return f;
        },
        Nb: function () {
          return L;
        },
        Ts: function () {
          return g;
        },
        Wy: function () {
          return x;
        },
        di: function () {
          return R;
        },
      }),
        t(47120);
      var s = t(570140),
        l = t(668781),
        a = t(479531),
        i = t(45966),
        r = t(819553),
        o = t(637853),
        c = t(17181),
        d = t(621923),
        I = t(962086),
        N = t(225675),
        _ = t(592125),
        u = t(430824),
        E = t(823379),
        T = t(434404),
        m = t(889369),
        O = t(570961),
        S = t(84658),
        D = t(176505),
        A = t(290511),
        G = t(689938);
      function h(e) {
        s.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: e });
      }
      function L(e) {
        null != e &&
          s.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
            upsellType: e,
          });
      }
      async function g(e, n) {
        let t = i.Z.getEnabled(e),
          r = Array.from(m.Z.editedDefaultChannelIds).filter(
            (e) => null != _.Z.getChannel(e),
          ),
          [c, d] = (0, o.d9)(e, [...r]);
        if (
          t &&
          n === A.Un.ONBOARDING_DEFAULT &&
          (d.length < A.md || c.length < A.X)
        ) {
          l.Z.show({
            title: G.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
            body: G.Z.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS,
          });
          return;
        }
        try {
          await (0, O.n_)(e, { mode: n });
        } catch (t) {
          var I;
          let { fieldName: e, error: n } =
            null !== (I = new a.Z(t).getAnyErrorMessageAndField()) &&
            void 0 !== I
              ? I
              : {};
          l.Z.show({
            title: G.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
            body: [e, n].filter(E.lm).join(": "),
          });
        }
        s.Z.dispatch({
          type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
          guildId: e,
          mode: n,
        });
      }
      function f(e, n) {
        let { homeSettingsEnabled: t } = (0, d.l6)(e),
          s = S.xh.findIndex((e) => e === n);
        if (-1 !== s && s !== S.xh.length - 1) {
          if (!t && S.xh[s + 1] === S.PG.HOME_SETTINGS) {
            h(S.xh[s + 2]);
            return;
          }
          h(S.xh[s + 1]);
        }
      }
      function x(e, n) {
        let { homeSettingsEnabled: t } = (0, d.l6)(e),
          s = S.xh.findIndex((e) => e === n);
        if (-1 !== s && 0 !== s) {
          if (!t && S.xh[s - 1] === S.PG.HOME_SETTINGS) {
            h(S.xh[s - 2]);
            return;
          }
          h(S.xh[s - 1]);
        }
      }
      async function R(e) {
        let n = u.Z.getGuild(e);
        null != n &&
          (T.Z.close(),
          (0, I.iD)(n.id, {
            type: N.z.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: { isPending: n.hasVerificationGate(), flags: 0 },
          }),
          r.ZP.resetOnboardingStatus(n.id),
          (0, c.discardOnboardingPromise)(n.id),
          await (0, c.default)({
            guildId: n.id,
            isPreview: !0,
            returnChannelId: D.oC.GUILD_HOME,
          }));
      }
    },
    570961: function (e, n, t) {
      t.d(n, {
        $y: function () {
          return A;
        },
        Kk: function () {
          return m;
        },
        NB: function () {
          return T;
        },
        en: function () {
          return L;
        },
        fi: function () {
          return O;
        },
        n_: function () {
          return G;
        },
        rS: function () {
          return D;
        },
        tS: function () {
          return S;
        },
      }),
        t(411104),
        t(47120);
      var s = t(544891),
        l = t(570140),
        a = t(668781),
        i = t(881052),
        r = t(339085),
        o = t(107862),
        c = t(592125),
        d = t(430824),
        I = t(823379),
        N = t(208665),
        _ = t(981631),
        u = t(290511),
        E = t(689938);
      function T() {
        l.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
      }
      function m(e, n, t) {
        S(
          e,
          N.Z.editedOnboardingPrompts.map((e) =>
            e.id === n ? { ...e, ...t } : e,
          ),
        );
      }
      function O(e, n) {
        S(
          e,
          N.Z.editedOnboardingPrompts.filter((e) => e.id !== n),
        );
      }
      function S(e, n) {
        let t =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (
          (l.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
            prompts: n,
          }),
          t)
        ) {
          let t = n.map((t) => h(e, n, t));
          l.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
            errors: t,
          });
        }
      }
      async function D(e, n) {
        let { dropdownsAllowed: t } = (0, o.RM)(e.id);
        if (!N.Z.hasChanges()) return;
        let s = N.Z.editedOnboardingPrompts;
        null != n &&
          n.ignoreDefaultPrompt &&
          1 === s.length &&
          (0, u.RF)(s[0]) &&
          (s = []);
        let _ = s.map((n) => {
            let s = n.options.map((n) => {
              let t =
                  null == n.roleIds
                    ? n.roleIds
                    : n.roleIds.filter((n) => null != d.Z.getRole(e.id, n)),
                s =
                  null == n.channelIds
                    ? n.channelIds
                    : n.channelIds.filter((e) => null != c.Z.getChannel(e));
              return {
                ...n,
                roleIds: t,
                channelIds: s,
                emoji: (function (e) {
                  var n;
                  if (null == e) return;
                  if (
                    (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) ==
                    null
                  )
                    return e.emoji;
                  if (null != r.ZP.getCustomEmojiById(e.emoji.id))
                    return e.emoji;
                })(n),
              };
            });
            return {
              ...n,
              options: s,
              type:
                s.length >= u.fY && t ? u.FN.DROPDOWN : u.FN.MULTIPLE_CHOICE,
            };
          }),
          T = _.filter((e) => e.inOnboarding),
          m = _.filter((e) => !0 !== e.inOnboarding),
          O = _.map((n) => h(e, _, n));
        if (O.filter(I.lm).length > 0)
          throw (
            (l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
              errors: O,
            }),
            Error("failed to locally validate prompts"))
          );
        if (T.length > u.b3)
          throw (
            (a.Z.show({
              title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
              body: E.Z.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format(
                { numQuestions: u.b3 },
              ),
            }),
            l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
              errors: O,
            }),
            Error("too many prompts in onboarding"))
          );
        let S = [...T, ...m];
        l.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT" });
        try {
          await G(e.id, { prompts: S.map(u.dr) }),
            l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
              guildId: e.id,
              updates: { prompts: S },
            });
        } catch (t) {
          var D;
          let { fieldName: e, error: n } =
            null !== (D = new i.Hx(t).getAnyErrorMessageAndField()) &&
            void 0 !== D
              ? D
              : {};
          throw (
            (a.Z.show({
              title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
              body: [e, n].filter(I.lm).join(": "),
            }),
            l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
            }),
            Error("failed to save prompts"))
          );
        }
      }
      async function A(e, n) {
        l.Z.dispatch({
          type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
          guildId: e,
          updates: { enabled: n },
        });
        try {
          await G(e, { enabled: n });
        } catch (s) {
          var t;
          let { fieldName: e, error: n } =
            null !== (t = new i.Hx(s).getAnyErrorMessageAndField()) &&
            void 0 !== t
              ? t
              : {};
          a.Z.show({
            title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
            body: [e, n].filter(I.lm).join(": "),
          });
        }
      }
      async function G(e, n) {
        await s.tn.put({ url: _.ANM.GUILD_ONBOARDING(e), body: n });
      }
      function h(e, n, t) {
        let s = { optionErrors: [] },
          l = !1;
        return (
          t.title.length <= 0 &&
            ((s.title = E.Z.Messages.ONBOARDING_PROMPT_TITLE_REQUIRED),
            (l = !0)),
          t.options.length <= 0 &&
            ((s.options = E.Z.Messages.ONBOARDING_PROMPT_ANSWER_REQUIRED),
            (l = !0)),
          t.inOnboarding &&
            n.filter((e) => e.inOnboarding).length > u.b3 &&
            ((s.config =
              E.Z.Messages.ONBOARDING_PROMPT_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format(
                { numQuestions: u.b3 },
              )),
            (l = !0)),
          (s.optionErrors = t.options.map((s) => L(e, n, t, s))),
          (l = l || s.optionErrors.some((e) => null != e)) ? s : null
        );
      }
      function L(e, n, t, s) {
        var l, a, i;
        if (t.singleSelect) {
          let e = new Set(null !== (l = s.roleIds) && void 0 !== l ? l : []);
          for (let s of n)
            if (s.id !== t.id) {
              for (let n of s.options)
                if (null != n.roleIds && n.roleIds.some((n) => e.has(n)))
                  return E.Z.Messages
                    .ONBOARDING_PROMPT_SINGLE_SELECT_UNIQUE_ROLES;
            }
        }
        let r = (null !== (a = s.roleIds) && void 0 !== a ? a : []).filter(
            (n) => null != d.Z.getRole(e.id, n),
          ),
          o = (null !== (i = s.channelIds) && void 0 !== i ? i : []).filter(
            (e) => null != c.Z.getChannel(e),
          );
        return 0 === r.length && 0 === o.length
          ? E.Z.Messages.ONBOARDING_PROMPT_OPTION_ROLES_REQUIRED
          : null;
      }
    },
    208665: function (e, n, t) {
      var s,
        l,
        a,
        i,
        r = t(392711),
        o = t.n(r),
        c = t(442837),
        d = t(570140),
        I = t(45966),
        N = t(999382),
        _ = t(981631),
        u = t(290511);
      let E = !1,
        T = null,
        m = [],
        O = !1,
        S = [];
      function D() {
        (function () {
          (E = !1), (T = null), (S = []), (O = !1);
        })(),
          null != (T = N.Z.getGuildId()) &&
            N.Z.getSection() === _.pNK.ONBOARDING &&
            ((m = I.Z.getOnboardingPrompts(T)), (O = I.Z.isAdvancedMode(T)));
      }
      class A extends (i = c.ZP.Store) {
        initialize() {
          this.waitFor(N.Z, I.Z);
        }
        hasChanges() {
          return null != T && !o().isEqual(I.Z.getOnboardingPrompts(T), m);
        }
        get guildId() {
          return T;
        }
        get submitting() {
          return E;
        }
        get errors() {
          return S;
        }
        get editedOnboardingPrompts() {
          return m;
        }
        get advancedMode() {
          return O;
        }
      }
      (a = "GuildSettingsOnboardingPromptsStore"),
        (l = "displayName") in (s = A)
          ? Object.defineProperty(s, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[l] = a),
        (n.Z = new A(d.Z, {
          GUILD_SETTINGS_INIT: D,
          GUILD_SETTINGS_SET_SECTION: D,
          GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: D,
          GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: D,
          GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: D,
          GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: D,
          GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
            var n;
            (S = null !== (n = e.errors) && void 0 !== n ? n : []), (E = !1);
          },
          GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
            let { prompts: n } = e;
            m = n;
          },
          GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
            (E = !0), (S = []);
          },
          GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
            var n;
            S = null !== (n = e.errors) && void 0 !== n ? n : [];
          },
          GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
            let { mode: n } = e;
            O = n === u.Un.ONBOARDING_ADVANCED;
          },
        }));
    },
    84658: function (e, n, t) {
      var s, l, a, i;
      t.d(n, {
        PG: function () {
          return s;
        },
        W$: function () {
          return l;
        },
        lg: function () {
          return c;
        },
        ug: function () {
          return o;
        },
        xh: function () {
          return r;
        },
      }),
        ((a = s || (s = {}))[(a.LANDING = 0)] = "LANDING"),
        (a[(a.SAFETY_CHECK = 1)] = "SAFETY_CHECK"),
        (a[(a.DEFAULT_CHANNELS = 2)] = "DEFAULT_CHANNELS"),
        (a[(a.WELCOME_CARD = 3)] = "WELCOME_CARD"),
        (a[(a.CUSTOMIZATION_QUESTIONS = 4)] = "CUSTOMIZATION_QUESTIONS"),
        (a[(a.REVIEW = 5)] = "REVIEW"),
        (a[(a.HOME_SETTINGS = 6)] = "HOME_SETTINGS");
      let r = [0, 1, 2, 4, 6, 5];
      ((i = l || (l = {}))[(i.TOGGLE_ENABLED = 0)] = "TOGGLE_ENABLED"),
        (i[(i.TOGGLE_DISABLED = 1)] = "TOGGLE_DISABLED"),
        (i[(i.PREVIEW = 2)] = "PREVIEW"),
        (i[(i.EDIT_DEFAULT_CHANNELS = 3)] = "EDIT_DEFAULT_CHANNELS"),
        (i[(i.EDIT_CUSTOMIZATION_QUESTIONS = 4)] =
          "EDIT_CUSTOMIZATION_QUESTIONS"),
        (i[(i.EDIT_HOME_SETTINGS = 5)] = "EDIT_HOME_SETTINGS");
      let o = r.filter((e) => 0 !== e);
      function c(e) {
        switch (e) {
          case 1:
            return "Safety Check";
          case 2:
            return "Default Channels";
          case 4:
            return "Customization Questions";
          case 6:
            return "Home Settings";
          default:
            return null;
        }
      }
    },
    707076: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        j: function () {
          return g;
        },
      });
      var s = t(735250);
      t(470079);
      var l = t(120356),
        a = t.n(l),
        i = t(442837),
        r = t(481060),
        o = t(367907),
        c = t(548473),
        d = t(721012),
        I = t(621923),
        N = t(869764),
        _ = t(150512),
        u = t(430824),
        E = t(594174),
        T = t(626135),
        m = t(999382),
        O = t(983135),
        S = t(84658),
        D = t(981631),
        A = t(689938),
        G = t(248641);
      let h = () => [
          {
            emoji: "\uD83E\uDDD9",
            emojiDescription:
              A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1_EMOJI,
            title: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_1,
            selected: !0,
          },
          {
            emoji: "\uD83C\uDFA4",
            emojiDescription:
              A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2_EMOJI,
            title: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_2,
            selected: !1,
          },
          {
            emoji: "\uD83D\uDC40",
            emojiDescription:
              A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3_EMOJI,
            title: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_3,
            selected: !1,
          },
        ],
        L = () => [
          {
            channelIcon: () =>
              (0, s.jsx)(r.AnnouncementsIcon, {
                size: "xs",
                color: "currentColor",
                className: G.channelIcon,
              }),
            channel: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_1,
            selected: !0,
          },
          {
            channelIcon: () =>
              (0, s.jsx)(r.TextIcon, {
                size: "md",
                color: "currentColor",
                className: G.channelIcon,
              }),
            channel: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_2,
            selected: !0,
          },
          {
            channelIcon: () =>
              (0, s.jsx)(r.TextIcon, {
                size: "md",
                color: "currentColor",
                className: G.channelIcon,
              }),
            channel: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_3,
            selected: !1,
          },
          {
            channelIcon: () =>
              (0, s.jsx)(r.ForumIcon, {
                size: "md",
                color: "currentColor",
                className: G.channelIcon,
              }),
            channel: A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_LANDING_4,
            selected: !0,
          },
        ];
      function g(e) {
        let { isTooltip: n = !1 } = e,
          t = h();
        n && t.pop();
        let l = n
            ? (0, s.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children:
                  A.Z.Messages
                    .GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE_TOOLTIP,
              })
            : (0, s.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                children:
                  A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_TITLE,
              }),
          i = n
            ? (0, s.jsx)(r.Text, {
                variant: "text-xxs/normal",
                children:
                  A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE_TOOLTIP.format(),
              })
            : (0, s.jsx)(r.Text, {
                variant: "text-xs/normal",
                children:
                  A.Z.Messages.GUILD_ONBOARDING_UPSELL_PREVIEW_CHANNELS_SUBTITLE.format(),
              });
        return (0, s.jsxs)("div", {
          className: a()(G.upsellPreview, G.spacingLarge, { [G.tooltip]: n }),
          children: [
            l,
            (0, s.jsx)("div", {
              className: G.spacingSmall,
              children: t.map((e, n) => {
                let {
                  emoji: t,
                  emojiDescription: l,
                  title: i,
                  selected: o,
                } = e;
                return (0, s.jsxs)(
                  "div",
                  {
                    className: a()(G.previewListItem, { [G.selected]: o }),
                    children: [
                      (0, s.jsx)("span", {
                        role: "img",
                        "aria-label": l,
                        children: t,
                      }),
                      (0, s.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: i,
                      }),
                      o &&
                        (0, s.jsx)("div", {
                          className: G.checkboxCircle,
                          children: (0, s.jsx)(r.CheckmarkLargeIcon, {
                            size: "md",
                            color: "currentColor",
                            className: G.checkmark,
                          }),
                        }),
                    ],
                  },
                  n,
                );
              }),
            }),
            i,
          ],
        });
      }
      function f() {
        let e = [
          {
            message: A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_HARRY_POTTER,
            profilePic:
              "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle:
              A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_HARRY_POTTER,
          },
          {
            message: A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
            profilePic:
              "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle:
              A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
          },
          {
            message: A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
            profilePic:
              "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle:
              A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
          },
          {
            message: A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DUNGEON_SLIMES,
            profilePic:
              "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle:
              A.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DUNGEON_SLIMES,
          },
        ];
        return (0, s.jsx)(d.i, { testimonials: e });
      }
      function x() {
        let e = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
          n = (0, i.e7)([u.Z], () => u.Z.getGuild(e)),
          t = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
          { homeSettingsEnabled: l } = (0, I.kZ)(null != e ? e : D.lds);
        return null == e || null == n || null == t
          ? null
          : (0, s.jsxs)("div", {
              className: G.upsellContainer,
              children: [
                (0, s.jsxs)("div", {
                  className: G.upsellHeader,
                  children: [
                    (0, s.jsxs)("div", {
                      className: G.islands,
                      children: [
                        (0, s.jsx)(c.xm, {}),
                        (0, s.jsx)(c._I, {
                          guild: n,
                          mainIslandClassName: G.mainIsland,
                          balloonDogClassName: G.balloonDog,
                        }),
                        (0, s.jsx)(c.B0, {}),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: G.upsellHeaderText,
                      children: [
                        (0, s.jsx)(r.Heading, {
                          variant: "heading-xl/semibold",
                          children:
                            A.Z.Messages.GUILD_ONBOARDING_SETUP_LANDING_TITLE,
                        }),
                        (0, s.jsx)(r.Text, {
                          variant: "text-md/normal",
                          children:
                            A.Z.Messages
                              .GUILD_ONBOARDING_SETUP_LANDING_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: G.upsellButtons,
                      children: (0, s.jsx)(r.Button, {
                        onClick: function () {
                          null != e &&
                            (T.default.track(
                              D.rMx
                                .GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                              {
                                ...(0, o.hH)(e),
                                step: S.PG[S.PG.LANDING],
                                back: !1,
                                skip: !1,
                              },
                            ),
                            (0, O.IG)(e, S.PG.LANDING));
                        },
                        color: r.Button.Colors.BRAND,
                        disabled: !1,
                        children: A.Z.Messages.CHECK_IT_OUT,
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(r.FormDivider, {}),
                (0, s.jsx)(f, {}),
                (0, s.jsx)(r.FormDivider, {}),
                (0, s.jsxs)("div", {
                  className: G.valuesContainer,
                  children: [
                    (0, s.jsxs)("div", {
                      className: G.valueContainer,
                      children: [
                        (0, s.jsx)(g, {}),
                        (0, s.jsxs)("div", {
                          className: G.valueText,
                          children: [
                            (0, s.jsx)(r.Heading, {
                              variant: "heading-md/semibold",
                              children:
                                A.Z.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_TITLE,
                            }),
                            (0, s.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              children:
                                A.Z.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_CHANNELS_SUBTITLE,
                            }),
                          ],
                        }),
                      ],
                    }),
                    l &&
                      (0, s.jsxs)("div", {
                        className: G.valueContainer,
                        children: [
                          (0, s.jsxs)("div", {
                            className: G.valueText,
                            children: [
                              (0, s.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                children:
                                  A.Z.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TITLE,
                              }),
                              (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children:
                                  A.Z.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_SUBTITLE,
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: a()(G.upsellPreview, G.spacingLarge),
                            children: [
                              (0, s.jsx)(_.Z, {
                                guildId: e,
                                welcomeMessage: {
                                  authorIds: [t.id],
                                  message:
                                    A.Z.Messages
                                      .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_WELCOME_MESSAGE,
                                },
                              }),
                              (0, s.jsx)(N.k, {
                                title:
                                  A.Z.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_TITLE,
                                subtitle:
                                  A.Z.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_1_CHANNEL_NAME,
                                completed: !0,
                                Icon: r.TextIcon,
                                variant: "static",
                              }),
                              (0, s.jsx)(N.k, {
                                title:
                                  A.Z.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_TITLE,
                                subtitle:
                                  A.Z.Messages
                                    .GUILD_ONBOARDING_SETUP_LANDING_GUIDE_TODO_2_CHANNEL_NAME,
                                completed: !0,
                                Icon: r.TextIcon,
                                variant: "static",
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, s.jsxs)("div", {
                      className: G.valueContainer,
                      children: [
                        (0, s.jsx)("div", {
                          className: a()(G.upsellPreview, G.spacingLarge),
                          children: L().map((e, n) => {
                            let { channelIcon: t, channel: l, selected: i } = e;
                            return (0, s.jsxs)(
                              "div",
                              {
                                className: a()(
                                  G.previewListItem,
                                  G.spaceBetween,
                                  { [G.selected]: i },
                                ),
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: G.channel,
                                    children: [
                                      t(),
                                      (0, s.jsx)(r.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: a()(G.checkbox, {
                                      [G.selected]: i,
                                    }),
                                    children:
                                      i &&
                                      (0, s.jsx)(r.CheckmarkLargeIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: G.checkmark,
                                      }),
                                  }),
                                ],
                              },
                              n,
                            );
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: G.valueText,
                          children: [
                            (0, s.jsx)(r.Heading, {
                              variant: "heading-md/semibold",
                              children:
                                A.Z.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_TITLE,
                            }),
                            (0, s.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              children:
                                A.Z.Messages
                                  .GUILD_ONBOARDING_SETUP_LANDING_ONBOARDING_SUBTITLE,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
    },
  },
]);
//# sourceMappingURL=f40f945399881562d8bf.js.map
