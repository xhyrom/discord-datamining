"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58227"],
  {
    107862: function (e, n, t) {
      t.d(n, {
        RM: function () {
          return r;
        },
        Ug: function () {
          return l;
        },
      });
      let i = (0, t(818083).B)({
        kind: "guild",
        id: "2023-02_onboardingdropdowns",
        label: "Enables dropdown selections from onboarding prompts",
        defaultConfig: { dropdownsAllowed: !1 },
        treatments: [{ id: 1, label: "On", config: { dropdownsAllowed: !0 } }],
      });
      function l(e) {
        return i.useExperiment(
          { guildId: e, location: "a12ce7_1" },
          { autoTrackExposure: !1 },
        );
      }
      function r(e) {
        return i.getCurrentConfig({ guildId: e, location: "a12ce7_2" });
      }
    },
    721012: function (e, n, t) {
      t.d(n, {
        i: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379);
      t(120356);
      var r = t(476183),
        s = t(481060),
        a = t(671533),
        o = t(388032),
        c = t(957589);
      function d(e) {
        let { testimonial: n, className: t } = e,
          {
            message: l,
            profilePic: r,
            adminTitle: a,
            emphasisColor: d = "interactive-normal",
          } = n;
        return (0, i.jsxs)("div", {
          className: t,
          children: [
            (0, i.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: o.intl.format(l, {
                testimonialHook: (e, n) =>
                  (0, i.jsx)(
                    s.Text,
                    {
                      tag: "span",
                      variant: "text-sm/bold",
                      color: d,
                      children: e,
                    },
                    n,
                  ),
              }),
            }),
            (0, i.jsxs)("div", {
              className: c.userContainer,
              children: [
                (0, i.jsx)(s.Avatar, {
                  src: r,
                  size: s.AvatarSizes.SIZE_16,
                  "aria-hidden": !0,
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      function u(e) {
        let { testimonials: n } = e,
          [[t, r], d] = l.useState([0, "right"]),
          u = l.useCallback(() => {
            d((e) => {
              let [t] = e;
              return 0 === t ? [n.length - 1, "left"] : [t - 1, "left"];
            });
          }, [d, n.length]),
          I = l.useCallback(() => {
            d((e) => {
              let [t] = e;
              return [(t + 1) % n.length, "right"];
            });
          }, [d, n.length]),
          h = n[t],
          N = l.useCallback(
            (e, n, t, l) =>
              (0, i.jsx)(m, { item: n, state: t, cleanup: l, direction: r }, e),
            [r],
          );
        return (0, i.jsxs)("div", {
          className: c.testimonialHeroContainer,
          children: [
            (0, i.jsx)("div", {
              className: c.animatedContainer,
              children: (0, i.jsx)(s.TransitionGroup, {
                items: [h],
                renderItem: N,
                getItemKey: (e) => e.adminTitle,
              }),
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-lg/bold",
              className: c.heroQuotes,
              children: "“",
            }),
            (0, i.jsxs)("div", {
              className: c.testimonialsControls,
              children: [
                (0, i.jsxs)(s.Button, {
                  className: c.testimonialControl,
                  innerClassName: c.testimonialControlInner,
                  onClick: u,
                  size: s.Button.Sizes.MIN,
                  color: s.Button.Colors.PRIMARY,
                  children: [
                    (0, i.jsx)(a.Z, {
                      className: c.testimonialControlIcon,
                      direction: a.Z.Directions.LEFT,
                    }),
                    (0, i.jsx)(s.HiddenVisually, {
                      children: o.intl.string(o.t["13/7kZ"]),
                    }),
                  ],
                }),
                (0, i.jsxs)(s.Button, {
                  className: c.testimonialControl,
                  innerClassName: c.testimonialControlInner,
                  onClick: I,
                  size: s.Button.Sizes.MIN,
                  color: s.Button.Colors.PRIMARY,
                  children: [
                    (0, i.jsx)(a.Z, {
                      className: c.testimonialControlIcon,
                      direction: a.Z.Directions.RIGHT,
                    }),
                    (0, i.jsx)(s.HiddenVisually, {
                      children: o.intl.string(o.t.PDTjLC),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function m(e) {
        let { item: n, state: t, cleanup: l, direction: a } = e,
          [o] = (0, s.useSpring)(
            () => {
              switch (t) {
                case s.TransitionStates.ENTERED:
                  return {
                    from: {
                      transform:
                        "right" === a ? "translateX(150%)" : "translate(-150%)",
                    },
                    to: { transform: "translateX(0%)" },
                  };
                case s.TransitionStates.YEETED:
                  return {
                    from: { transform: "translateX(0%)" },
                    to: {
                      transform:
                        "right" === a ? "translateX(-150%)" : "translate(150%)",
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
        return (0, i.jsx)(r.animated.div, {
          style: o,
          children: (0, i.jsx)(d, { className: c.testimonial, testimonial: n }),
        });
      }
    },
    869764: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
        k: function () {
          return G;
        },
      }),
        t(789020);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        s = t(481060),
        a = t(933557),
        o = t(471445),
        c = t(905362),
        d = t(353093),
        u = t(979264),
        m = t(937111),
        I = t(592125),
        h = t(271383),
        N = t(430824),
        g = t(496675),
        T = t(186523),
        f = t(768581),
        S = t(630388),
        x = t(526120),
        E = t(563534),
        _ = t(846121),
        v = t(216701),
        p = t(981631),
        C = t(308083),
        j = t(372897),
        D = t(388032),
        O = t(51979);
      function G(e) {
        let {
            title: n,
            emojiId: t,
            emojiName: l,
            icon: r,
            completed: a,
            Icon: o,
            ...c
          } = e,
          d = "channel" === c.variant ? c.channelId : null,
          u = "static" === c.variant ? c.subtitle : c.channelName,
          m =
            null != d
              ? f.ZP.getNewMemberActionIconURL({ channelId: d, icon: r })
              : null;
        return (0, i.jsxs)("div", {
          className: O.action,
          children: [
            null != m
              ? (0, i.jsx)("img", {
                  src: m,
                  className: O.icon,
                  width: 32,
                  height: 32,
                  alt: "",
                  "aria-hidden": !0,
                })
              : (0, i.jsx)(v.Z, {
                  emojiId: t,
                  emojiName: l,
                  size: v.R.LARGE,
                  defaultComponent: (0, i.jsx)("div", {
                    className: O.channelIconContainer,
                    children: (0, i.jsx)(o, {
                      className: O.channelIcon,
                      color: "currentColor",
                    }),
                  }),
                }),
            (0, i.jsxs)("div", {
              className: O.actionInfo,
              children: [
                (0, i.jsx)(s.Text, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: n,
                }),
                null != u
                  ? (0, i.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: u,
                    })
                  : null,
              ],
            }),
            a
              ? (0, i.jsx)(s.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  secondaryColor: "#fff",
                  className: O.checkCircleCompleted,
                })
              : (0, i.jsx)(T.Z, {
                  className: O.checkCircle,
                  width: 24,
                  height: 24,
                }),
          ],
        });
      }
      function A(e) {
        var n;
        let { action: t, completed: c } = e,
          { channelId: d, title: u, emoji: m, icon: h } = t,
          { id: N, name: T } = null != m ? m : {},
          f = (0, r.e7)([I.Z], () => I.Z.getChannel(d)),
          S = (0, a.ZP)(f, !0),
          E = (0, r.e7)([g.Z], () => g.Z.can(p.Plq.VIEW_CHANNEL, f)),
          _ = l.useCallback(() => {
            if (null == f) return null;
            (0, x.gp)(f.guild_id, f.id);
          }, [f]);
        if (null == f || !E) return null;
        let v = null !== (n = (0, o.KS)(f)) && void 0 !== n ? n : s.TextIcon;
        return (0, i.jsx)(s.Clickable, {
          className: O.clickableAction,
          onClick: _,
          children: (0, i.jsx)(G, {
            variant: "channel",
            channelId: d,
            title: u,
            channelName: S,
            emojiId: N,
            emojiName: T,
            icon: h,
            completed: c,
            Icon: v,
          }),
        });
      }
      function Z(e) {
        var n;
        let { guildId: t } = e,
          a = (0, r.e7)([E.Z], () => E.Z.getNewMemberActions(t), [t]),
          o = (0, r.e7)([_.Z], () => _.Z.getCompletedActions(t)),
          I = (0, r.e7)([h.ZP], () => h.ZP.getSelfMember(t)),
          g = (0, r.e7)([N.Z], () => N.Z.getGuild(t)),
          T =
            null != g
              ? (0, d.ky)(
                  g.id,
                  null === (n = g.profile) || void 0 === n ? void 0 : n.badge,
                  C.NC.SIZE_16,
                )
              : null,
          f = (0, r.e7)([m.Z], () => m.Z.getRequest(t));
        l.useEffect(() => {
          var e;
          null == o &&
            (null == I ? void 0 : I.flags) != null &&
            (0, S.yE)(
              null !== (e = I.flags) && void 0 !== e ? e : 0,
              j.q.STARTED_HOME_ACTIONS,
            ) &&
            (0, x.Fg)(t);
        }, [o, t, null == I ? void 0 : I.flags]);
        let v = l.useCallback(() => {
          null != g &&
            null != g.rulesChannelId &&
            (0, x.gp)(g.id, g.rulesChannelId);
        }, [g]);
        return null == I || null == a || 0 === a.length
          ? null
          : (0, i.jsxs)("div", {
              className: O.container,
              children: [
                (0, i.jsx)(s.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: D.intl.string(D.t.LhlgY2),
                }),
                (null == g ? void 0 : g.hasFeature(p.oNc.CLAN)) &&
                  null != T &&
                  (0, i.jsx)(s.Clickable, {
                    className: O.clickableAction,
                    onClick: () =>
                      (0, c.CK)(t, null == f ? void 0 : f.joinRequestId),
                    children: (0, i.jsxs)("div", {
                      className: O.action,
                      children: [
                        (0, i.jsx)("div", {
                          className: O.tagIconContainer,
                          children: (0, i.jsx)(u.KQ, {
                            src: T,
                            size: C.NC.SIZE_16,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: O.actionInfo,
                          children: (0, i.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: D.intl.string(D.t.MNhFER),
                          }),
                        }),
                      ],
                    }),
                  }),
                a.map((e) =>
                  (0, i.jsx)(
                    A,
                    {
                      action: e,
                      completed: (null == o ? void 0 : o[e.channelId]) === !0,
                      guildId: t,
                    },
                    e.channelId,
                  ),
                ),
                (null == g ? void 0 : g.rulesChannelId) != null &&
                  (0, i.jsxs)(s.Clickable, {
                    className: O.action,
                    onClick: v,
                    children: [
                      (0, i.jsx)("div", {
                        className: O.rulesIconContainer,
                        children: (0, i.jsx)(s.BookCheckIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: O.rulesIcon,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: O.actionInfo,
                        children: (0, i.jsx)(s.Text, {
                          variant: "text-md/semibold",
                          color: "header-primary",
                          children: D.intl.string(D.t["K/i3iY"]),
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
          return p;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        s = t.n(r),
        a = t(866442),
        o = t(399606),
        c = t(481060),
        d = t(749210),
        u = t(410030),
        m = t(607070),
        I = t(603368),
        h = t(903518),
        N = t(687158),
        g = t(576635),
        T = t(484459),
        f = t(502762),
        S = t(430824),
        x = t(594174),
        E = t(5192),
        _ = t(51144),
        v = t(240249);
      function p(e) {
        var n;
        let { guildId: t, welcomeMessage: r, className: p } = e,
          C = (0, o.e7)([S.Z], () => S.Z.getGuild(t)),
          j = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
          D = (0, o.e7)([x.default], () =>
            x.default.getUser(null == r ? void 0 : r.authorIds[0]),
          ),
          O = l.useMemo(
            () => (null != C && null != D && (0, h.Y)(C, D) ? D : null),
            [C, D],
          ),
          G = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
          A = (0, N.ZP)(
            null !== (n = null == O ? void 0 : O.id) && void 0 !== n ? n : "0",
            t,
          ),
          { theme: Z, primaryColor: L } = (0, g.Z)({
            user: null != O ? O : void 0,
            displayProfile: A,
          }),
          b = (0, u.ZP)(),
          R = (0, c.useToken)(c.tokens.colors.BACKGROUND_SECONDARY, Z).hex(),
          P = l.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.authorIds) &&
              void 0 !== e
              ? e
              : [];
          }, [r]);
        l.useEffect(() => {
          d.Z.requestMembersById(t, P);
        }, [t, P]),
          l.useEffect(() => {
            null != O && (0, T.Z)(O.id, O.getAvatarURL(t, 48), { guildId: t });
          }, [O, t]);
        let U = (0, _._T)(G),
          M = null != L ? (0, a.br)(L, 1) : R,
          y = (0, I.$0)(M);
        if (null == O || null == G || null == r) return null;
        let w = null != C && C.ownerId === O.id;
        return (0, i.jsx)("div", {
          className: s()(v.welcomeMessageContainer, p),
          children: (0, i.jsxs)(f.Z, {
            className: v.welcomeMessageProfileContainer,
            user: O,
            displayProfile: A,
            profileType: null,
            themeOverride: b,
            forceShowPremium: !0,
            children: [
              (0, i.jsx)("div", { className: v.avatarBackground }),
              j
                ? (0, i.jsx)(c.Avatar, {
                    src: O.getAvatarURL(t, 48),
                    size: c.AvatarSizes.SIZE_48,
                    className: v.avatar,
                    "aria-label": O.username,
                  })
                : (0, i.jsx)(c.AnimatedAvatar, {
                    src: O.getAvatarURL(t, 48),
                    size: c.AvatarSizes.SIZE_48,
                    className: v.avatar,
                    "aria-label": O.username,
                  }),
              (0, i.jsx)("div", {
                className: v.avatarBorder,
                style: { backgroundColor: M },
              }),
              (0, i.jsxs)("div", {
                className: v.welcomeMessageContent,
                style: { color: y.hex() },
                children: [
                  (0, i.jsxs)("div", {
                    className: v.adminUsernameContainer,
                    children: [
                      (0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "currentColor",
                        children: E.ZP.getName(t, null, O),
                      }),
                      w
                        ? (0, i.jsx)(c.CrownIcon, {
                            size: "md",
                            color: "currentColor",
                            className: v.ownerIcon,
                          })
                        : null,
                    ],
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: (function (e, n) {
                      let t = e.split(/\[@username\]/g);
                      return (0, i.jsx)("span", {
                        children: t.map((e, r) =>
                          (0, i.jsxs)(
                            l.Fragment,
                            {
                              children: [
                                e,
                                r < t.length - 1
                                  ? (0, i.jsx)(c.Text, {
                                      tag: "span",
                                      variant: "text-md/semibold",
                                      children: "@".concat(n),
                                    })
                                  : null,
                              ],
                            },
                            "username-".concat(r),
                          ),
                        ),
                      });
                    })(
                      null == r ? void 0 : r.message,
                      null != U ? U : G.username,
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
      var i,
        l,
        r,
        s,
        a = t(392711),
        o = t.n(a),
        c = t(442837),
        d = t(570140),
        u = t(45966),
        m = t(999382),
        I = t(981631);
      let h = !1,
        N = null,
        g = new Set();
      function T() {
        (function () {
          (h = !1), (N = null);
        })(),
          null != (N = m.Z.getGuildId()) &&
            m.Z.getSection() === I.pNK.ONBOARDING &&
            (g = new Set(u.Z.getDefaultChannelIds(N)));
      }
      class f extends (i = c.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, u.Z);
        }
        hasChanges() {
          if (null == N) return !1;
          let e = u.Z.getDefaultChannelIds(N).sort(),
            n = Array.from(g).sort();
          return !o().isEqual(e, n);
        }
        get guildId() {
          return N;
        }
        get submitting() {
          return h;
        }
        get editedDefaultChannelIds() {
          return g;
        }
      }
      (s = "GuildSettingsDefaultChannelsStore"),
        (r = "displayName") in (l = f)
          ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = s),
        (n.Z = new f(d.Z, {
          GUILD_SETTINGS_INIT: T,
          GUILD_SETTINGS_SET_SECTION: T,
          GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: T,
          GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: T,
          GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: T,
          GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
            h = !1;
          },
          GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
            let { channelId: n } = e;
            (g = new Set(g)).has(n) ? g.delete(n) : g.add(n);
          },
          GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
            h = !0;
          },
        }));
    },
    983135: function (e, n, t) {
      t.d(n, {
        $K: function () {
          return v;
        },
        IG: function () {
          return j;
        },
        Nb: function () {
          return p;
        },
        Ts: function () {
          return C;
        },
        Wy: function () {
          return D;
        },
        di: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(570140),
        l = t(668781),
        r = t(479531),
        s = t(983736),
        a = t(45966),
        o = t(819553),
        c = t(637853),
        d = t(17181),
        u = t(962086),
        m = t(225675),
        I = t(592125),
        h = t(430824),
        N = t(823379),
        g = t(434404),
        T = t(889369),
        f = t(570961),
        S = t(84658),
        x = t(176505),
        E = t(290511),
        _ = t(388032);
      function v(e) {
        i.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: e });
      }
      function p(e) {
        null != e &&
          i.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
            upsellType: e,
          });
      }
      async function C(e, n) {
        let t = a.Z.getEnabled(e),
          s = Array.from(T.Z.editedDefaultChannelIds).filter(
            (e) => null != I.Z.getChannel(e),
          ),
          [o, d] = (0, c.d9)(e, [...s]);
        if (
          t &&
          n === E.Un.ONBOARDING_DEFAULT &&
          (d.length < E.md || o.length < E.X)
        ) {
          l.Z.show({
            title: _.intl.string(_.t.iLdiqa),
            body: _.intl.string(_.t.JOT74e),
          });
          return;
        }
        try {
          await (0, f.n_)(e, { mode: n });
        } catch (t) {
          var u;
          let { fieldName: e, error: n } =
            null !== (u = new r.Z(t).getAnyErrorMessageAndField()) &&
            void 0 !== u
              ? u
              : {};
          l.Z.show({
            title: _.intl.string(_.t.iLdiqa),
            body: [e, n].filter(N.lm).join(": "),
          });
        }
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
          guildId: e,
          mode: n,
        });
      }
      function j(e, n) {
        let t = S.xh.findIndex((e) => e === n);
        if (-1 !== t && t !== S.xh.length - 1) v(S.xh[t + 1]);
      }
      function D(e, n) {
        let t = S.xh.findIndex((e) => e === n);
        if (-1 !== t && 0 !== t) v(S.xh[t - 1]);
      }
      async function O(e) {
        let n = h.Z.getGuild(e);
        null != n &&
          (g.Z.close(),
          (0, u.iD)(n.id, {
            type: m.z.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: { isPending: (0, s.Dc)(n), flags: 0 },
          }),
          o.ZP.resetOnboardingStatus(n.id),
          (0, d.discardOnboardingPromise)(n.id),
          await (0, d.default)({
            guildId: n.id,
            isPreview: !0,
            returnChannelId: x.oC.GUILD_HOME,
          }));
      }
    },
    570961: function (e, n, t) {
      t.d(n, {
        $y: function () {
          return E;
        },
        Kk: function () {
          return T;
        },
        NB: function () {
          return g;
        },
        en: function () {
          return p;
        },
        fi: function () {
          return f;
        },
        n_: function () {
          return _;
        },
        rS: function () {
          return x;
        },
        tS: function () {
          return S;
        },
      }),
        t(411104),
        t(47120);
      var i = t(544891),
        l = t(570140),
        r = t(668781),
        s = t(881052),
        a = t(339085),
        o = t(107862),
        c = t(592125),
        d = t(430824),
        u = t(823379),
        m = t(208665),
        I = t(981631),
        h = t(290511),
        N = t(388032);
      function g() {
        l.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
      }
      function T(e, n, t) {
        S(
          e,
          m.Z.editedOnboardingPrompts.map((e) =>
            e.id === n ? { ...e, ...t } : e,
          ),
        );
      }
      function f(e, n) {
        S(
          e,
          m.Z.editedOnboardingPrompts.filter((e) => e.id !== n),
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
          let t = n.map((t) => v(e, n, t));
          l.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
            errors: t,
          });
        }
      }
      async function x(e, n) {
        let { dropdownsAllowed: t } = (0, o.RM)(e.id);
        if (!m.Z.hasChanges()) return;
        let i = m.Z.editedOnboardingPrompts;
        null != n &&
          n.ignoreDefaultPrompt &&
          1 === i.length &&
          (0, h.RF)(i[0]) &&
          (i = []);
        let I = i.map((n) => {
            let i = n.options.map((n) => {
              let t =
                  null == n.roleIds
                    ? n.roleIds
                    : n.roleIds.filter((n) => null != d.Z.getRole(e.id, n)),
                i =
                  null == n.channelIds
                    ? n.channelIds
                    : n.channelIds.filter((e) => null != c.Z.getChannel(e));
              return {
                ...n,
                roleIds: t,
                channelIds: i,
                emoji: (function (e) {
                  var n;
                  if (null == e) return;
                  if (
                    (null === (n = e.emoji) || void 0 === n ? void 0 : n.id) ==
                    null
                  )
                    return e.emoji;
                  if (null != a.ZP.getCustomEmojiById(e.emoji.id))
                    return e.emoji;
                })(n),
              };
            });
            return {
              ...n,
              options: i,
              type:
                i.length >= h.fY && t ? h.FN.DROPDOWN : h.FN.MULTIPLE_CHOICE,
            };
          }),
          g = I.filter((e) => e.inOnboarding),
          T = I.filter((e) => !0 !== e.inOnboarding),
          f = I.map((n) => v(e, I, n));
        if (f.filter(u.lm).length > 0)
          throw (
            (l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
              errors: f,
            }),
            Error("failed to locally validate prompts"))
          );
        if (g.length > h.b3)
          throw (
            (r.Z.show({
              title: N.intl.string(N.t.iLdiqa),
              body: N.intl.formatToPlainString(N.t["cTb/rq"], {
                numQuestions: h.b3,
              }),
            }),
            l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
              errors: f,
            }),
            Error("too many prompts in onboarding"))
          );
        let S = [...g, ...T];
        l.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT" });
        try {
          await _(e.id, { prompts: S.map(h.dr) }),
            l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
              guildId: e.id,
              updates: { prompts: S },
            });
        } catch (t) {
          var x;
          let { fieldName: e, error: n } =
            null !== (x = new s.Hx(t).getAnyErrorMessageAndField()) &&
            void 0 !== x
              ? x
              : {};
          throw (
            (r.Z.show({
              title: N.intl.string(N.t.iLdiqa),
              body: [e, n].filter(u.lm).join(": "),
            }),
            l.Z.dispatch({
              type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
            }),
            Error("failed to save prompts"))
          );
        }
      }
      async function E(e, n) {
        l.Z.dispatch({
          type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
          guildId: e,
          updates: { enabled: n },
        });
        try {
          await _(e, { enabled: n });
        } catch (i) {
          var t;
          let { fieldName: e, error: n } =
            null !== (t = new s.Hx(i).getAnyErrorMessageAndField()) &&
            void 0 !== t
              ? t
              : {};
          r.Z.show({
            title: N.intl.string(N.t.iLdiqa),
            body: [e, n].filter(u.lm).join(": "),
          });
        }
      }
      async function _(e, n) {
        await i.tn.put({
          url: I.ANM.GUILD_ONBOARDING(e),
          body: n,
          rejectWithError: !1,
        });
      }
      function v(e, n, t) {
        let i = { optionErrors: [] },
          l = !1;
        return (
          t.title.length <= 0 &&
            ((i.title = N.intl.string(N.t.h8Hg1d)), (l = !0)),
          t.options.length <= 0 &&
            ((i.options = N.intl.string(N.t["64tF+f"])), (l = !0)),
          t.inOnboarding &&
            n.filter((e) => e.inOnboarding).length > h.b3 &&
            ((i.config = N.intl.formatToPlainString(N.t["cTb/rq"], {
              numQuestions: h.b3,
            })),
            (l = !0)),
          (i.optionErrors = t.options.map((i) => p(e, n, t, i))),
          (l = l || i.optionErrors.some((e) => null != e)) ? i : null
        );
      }
      function p(e, n, t, i) {
        var l, r, s;
        if (t.singleSelect) {
          let e = new Set(null !== (l = i.roleIds) && void 0 !== l ? l : []);
          for (let i of n)
            if (i.id !== t.id) {
              for (let n of i.options)
                if (null != n.roleIds && n.roleIds.some((n) => e.has(n)))
                  return N.intl.string(N.t.rKxyvb);
            }
        }
        let a = (null !== (r = i.roleIds) && void 0 !== r ? r : []).filter(
            (n) => null != d.Z.getRole(e.id, n),
          ),
          o = (null !== (s = i.channelIds) && void 0 !== s ? s : []).filter(
            (e) => null != c.Z.getChannel(e),
          );
        return 0 === a.length && 0 === o.length
          ? N.intl.string(N.t.F6SUWF)
          : null;
      }
    },
    208665: function (e, n, t) {
      var i,
        l,
        r,
        s,
        a = t(392711),
        o = t.n(a),
        c = t(442837),
        d = t(570140),
        u = t(45966),
        m = t(999382),
        I = t(981631),
        h = t(290511);
      let N = !1,
        g = null,
        T = [],
        f = !1,
        S = [];
      function x() {
        (function () {
          (N = !1), (g = null), (S = []), (f = !1);
        })(),
          null != (g = m.Z.getGuildId()) &&
            m.Z.getSection() === I.pNK.ONBOARDING &&
            ((T = u.Z.getOnboardingPrompts(g)), (f = u.Z.isAdvancedMode(g)));
      }
      class E extends (s = c.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, u.Z);
        }
        hasChanges() {
          return null != g && !o().isEqual(u.Z.getOnboardingPrompts(g), T);
        }
        get guildId() {
          return g;
        }
        get submitting() {
          return N;
        }
        get errors() {
          return S;
        }
        get editedOnboardingPrompts() {
          return T;
        }
        get advancedMode() {
          return f;
        }
      }
      (r = "GuildSettingsOnboardingPromptsStore"),
        (l = "displayName") in (i = E)
          ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = r),
        (n.Z = new E(d.Z, {
          GUILD_SETTINGS_INIT: x,
          GUILD_SETTINGS_SET_SECTION: x,
          GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: x,
          GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: x,
          GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: x,
          GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: x,
          GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
            var n;
            (S = null !== (n = e.errors) && void 0 !== n ? n : []), (N = !1);
          },
          GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
            let { prompts: n } = e;
            T = n;
          },
          GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
            (N = !0), (S = []);
          },
          GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
            var n;
            S = null !== (n = e.errors) && void 0 !== n ? n : [];
          },
          GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
            let { mode: n } = e;
            f = n === h.Un.ONBOARDING_ADVANCED;
          },
        }));
    },
    84658: function (e, n, t) {
      var i, l, r, s;
      t.d(n, {
        PG: function () {
          return i;
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
          return a;
        },
      }),
        ((r = i || (i = {}))[(r.LANDING = 0)] = "LANDING"),
        (r[(r.SAFETY_CHECK = 1)] = "SAFETY_CHECK"),
        (r[(r.DEFAULT_CHANNELS = 2)] = "DEFAULT_CHANNELS"),
        (r[(r.WELCOME_CARD = 3)] = "WELCOME_CARD"),
        (r[(r.CUSTOMIZATION_QUESTIONS = 4)] = "CUSTOMIZATION_QUESTIONS"),
        (r[(r.REVIEW = 5)] = "REVIEW"),
        (r[(r.HOME_SETTINGS = 6)] = "HOME_SETTINGS");
      let a = [0, 1, 2, 4, 6, 5];
      ((s = l || (l = {}))[(s.TOGGLE_ENABLED = 0)] = "TOGGLE_ENABLED"),
        (s[(s.TOGGLE_DISABLED = 1)] = "TOGGLE_DISABLED"),
        (s[(s.PREVIEW = 2)] = "PREVIEW"),
        (s[(s.EDIT_DEFAULT_CHANNELS = 3)] = "EDIT_DEFAULT_CHANNELS"),
        (s[(s.EDIT_CUSTOMIZATION_QUESTIONS = 4)] =
          "EDIT_CUSTOMIZATION_QUESTIONS"),
        (s[(s.EDIT_HOME_SETTINGS = 5)] = "EDIT_HOME_SETTINGS");
      let o = a.filter((e) => 0 !== e);
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
    903518: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return r;
        },
      });
      var i = t(700785),
        l = t(981631);
      function r(e, n) {
        return (
          !!(
            e.isOwner(n) ||
            i.BT({ permission: l.Plq.ADMINISTRATOR, context: e, user: n })
          ) ||
          (i.BT({ permission: l.Plq.MANAGE_GUILD, context: e, user: n }) &&
            i.BT({ permission: l.Plq.MANAGE_ROLES, context: e, user: n }))
        );
      }
    },
    707076: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
        },
        j: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        s = t(442837),
        a = t(481060),
        o = t(367907),
        c = t(548473),
        d = t(721012),
        u = t(869764),
        m = t(150512),
        I = t(430824),
        h = t(594174),
        N = t(626135),
        g = t(999382),
        T = t(983135),
        f = t(84658),
        S = t(981631),
        x = t(388032),
        E = t(798623);
      let _ = () => [
          {
            emoji: "\uD83E\uDDD9",
            emojiDescription: x.intl.string(x.t.Jh9uiY),
            title: x.intl.string(x.t.ATF45u),
            selected: !0,
          },
          {
            emoji: "\uD83C\uDFA4",
            emojiDescription: x.intl.string(x.t["nGt+MT"]),
            title: x.intl.string(x.t["30uo7O"]),
            selected: !1,
          },
          {
            emoji: "\uD83D\uDC40",
            emojiDescription: x.intl.string(x.t.hOMH5u),
            title: x.intl.string(x.t["5Z5sgo"]),
            selected: !1,
          },
        ],
        v = () => [
          {
            channelIcon: () =>
              (0, i.jsx)(a.AnnouncementsIcon, {
                size: "xs",
                color: "currentColor",
                className: E.channelIcon,
              }),
            channel: x.intl.string(x.t.MXJozM),
            selected: !0,
          },
          {
            channelIcon: () =>
              (0, i.jsx)(a.TextIcon, {
                size: "md",
                color: "currentColor",
                className: E.channelIcon,
              }),
            channel: x.intl.string(x.t.Pkj0f3),
            selected: !0,
          },
          {
            channelIcon: () =>
              (0, i.jsx)(a.TextIcon, {
                size: "md",
                color: "currentColor",
                className: E.channelIcon,
              }),
            channel: x.intl.string(x.t["imVD+v"]),
            selected: !1,
          },
          {
            channelIcon: () =>
              (0, i.jsx)(a.ForumIcon, {
                size: "md",
                color: "currentColor",
                className: E.channelIcon,
              }),
            channel: x.intl.string(x.t["Pj/Wpq"]),
            selected: !0,
          },
        ];
      function p(e) {
        let { isTooltip: n = !1 } = e,
          t = _();
        n && t.pop();
        let l = n
            ? (0, i.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children: x.intl.string(x.t.nTI2mZ),
              })
            : (0, i.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                children: x.intl.string(x.t.g1OQtr),
              }),
          s = n
            ? (0, i.jsx)(a.Text, {
                variant: "text-xxs/normal",
                children: x.intl.format(x.t.hGwDPT, {}),
              })
            : (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                children: x.intl.format(x.t["8XLD3t"], {}),
              });
        return (0, i.jsxs)("div", {
          className: r()(E.upsellPreview, E.spacingLarge, { [E.tooltip]: n }),
          children: [
            l,
            (0, i.jsx)("div", {
              className: E.spacingSmall,
              children: t.map((e, n) => {
                let {
                  emoji: t,
                  emojiDescription: l,
                  title: s,
                  selected: o,
                } = e;
                return (0, i.jsxs)(
                  "div",
                  {
                    className: r()(E.previewListItem, { [E.selected]: o }),
                    children: [
                      (0, i.jsx)("span", {
                        role: "img",
                        "aria-label": l,
                        children: t,
                      }),
                      (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        children: s,
                      }),
                      o &&
                        (0, i.jsx)("div", {
                          className: E.checkboxCircle,
                          children: (0, i.jsx)(a.CheckmarkLargeIcon, {
                            size: "md",
                            color: "currentColor",
                            className: E.checkmark,
                          }),
                        }),
                    ],
                  },
                  n,
                );
              }),
            }),
            s,
          ],
        });
      }
      function C() {
        let e = [
          {
            message: x.t.FUUXXl,
            profilePic:
              "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: x.intl.string(x.t.RZVpur),
          },
          {
            message: x.t.JAXvDQ,
            profilePic:
              "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: x.intl.string(x.t.xyrlg4),
          },
          {
            message: x.t.Wj9Djo,
            profilePic:
              "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: x.intl.string(x.t["o/LQMj"]),
          },
          {
            message: x.t.ALsMNT,
            profilePic:
              "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: x.intl.string(x.t["uvM+xc"]),
          },
        ];
        return (0, i.jsx)(d.i, { testimonials: e });
      }
      function j() {
        let e = (0, s.e7)([g.Z], () => g.Z.getGuildId()),
          n = (0, s.e7)([I.Z], () => I.Z.getGuild(e)),
          t = (0, s.e7)([h.default], () => h.default.getCurrentUser());
        return null == e || null == n || null == t
          ? null
          : (0, i.jsxs)("div", {
              className: E.upsellContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: E.upsellHeader,
                  children: [
                    (0, i.jsxs)("div", {
                      className: E.islands,
                      children: [
                        (0, i.jsx)(c.xm, {}),
                        (0, i.jsx)(c._I, {
                          guild: n,
                          mainIslandClassName: E.mainIsland,
                          balloonDogClassName: E.balloonDog,
                        }),
                        (0, i.jsx)(c.B0, {}),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: E.upsellHeaderText,
                      children: [
                        (0, i.jsx)(a.Heading, {
                          variant: "heading-xl/semibold",
                          children: x.intl.string(x.t.GnKOAw),
                        }),
                        (0, i.jsx)(a.Text, {
                          variant: "text-md/normal",
                          children: x.intl.string(x.t.SJRFJi),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: E.upsellButtons,
                      children: (0, i.jsx)(a.Button, {
                        onClick: function () {
                          null != e &&
                            (N.default.track(
                              S.rMx
                                .GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                              {
                                ...(0, o.hH)(e),
                                step: f.PG[f.PG.LANDING],
                                back: !1,
                                skip: !1,
                              },
                            ),
                            (0, T.IG)(e, f.PG.LANDING));
                        },
                        color: a.Button.Colors.BRAND,
                        disabled: !1,
                        children: x.intl.string(x.t.RzWDqa),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(a.FormDivider, {}),
                (0, i.jsx)(C, {}),
                (0, i.jsx)(a.FormDivider, {}),
                (0, i.jsxs)("div", {
                  className: E.valuesContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: E.valueContainer,
                      children: [
                        (0, i.jsx)(p, {}),
                        (0, i.jsxs)("div", {
                          className: E.valueText,
                          children: [
                            (0, i.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              children: x.intl.string(x.t.Z7kqKS),
                            }),
                            (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              children: x.intl.string(x.t.di3UCw),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsxs)("div", {
                        className: E.valueContainer,
                        children: [
                          (0, i.jsxs)("div", {
                            className: E.valueText,
                            children: [
                              (0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: x.intl.string(x.t.O4jYEh),
                              }),
                              (0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: x.intl.string(x.t["l/l/Gx"]),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: r()(E.upsellPreview, E.spacingLarge),
                            children: [
                              (0, i.jsx)(m.Z, {
                                guildId: e,
                                welcomeMessage: {
                                  authorIds: [t.id],
                                  message: x.intl.string(x.t.hIWAfn),
                                },
                              }),
                              (0, i.jsx)(u.k, {
                                title: x.intl.string(x.t["47zu7O"]),
                                subtitle: x.intl.string(x.t.amoSNz),
                                completed: !0,
                                Icon: a.TextIcon,
                                variant: "static",
                              }),
                              (0, i.jsx)(u.k, {
                                title: x.intl.string(x.t.EZfTKC),
                                subtitle: x.intl.string(x.t["/sYelZ"]),
                                completed: !0,
                                Icon: a.TextIcon,
                                variant: "static",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: E.valueContainer,
                      children: [
                        (0, i.jsx)("div", {
                          className: r()(E.upsellPreview, E.spacingLarge),
                          children: v().map((e, n) => {
                            let { channelIcon: t, channel: l, selected: s } = e;
                            return (0, i.jsxs)(
                              "div",
                              {
                                className: r()(
                                  E.previewListItem,
                                  E.spaceBetween,
                                  { [E.selected]: s },
                                ),
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: E.channel,
                                    children: [
                                      t(),
                                      (0, i.jsx)(a.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className: r()(E.checkbox, {
                                      [E.selected]: s,
                                    }),
                                    children:
                                      s &&
                                      (0, i.jsx)(a.CheckmarkLargeIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: E.checkmark,
                                      }),
                                  }),
                                ],
                              },
                              n,
                            );
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: E.valueText,
                          children: [
                            (0, i.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              children: x.intl.string(x.t["3T9aHB"]),
                            }),
                            (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              children: x.intl.string(x.t.dA7Cam),
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
//# sourceMappingURL=f31241931aa8b8b0f0e7.js.map
