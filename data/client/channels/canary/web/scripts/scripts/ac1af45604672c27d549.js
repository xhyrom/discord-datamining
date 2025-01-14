"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35566"],
  {
    697611: function (e) {
      e.exports = "/assets/b392b4fafd8762dd165f.svg";
    },
    213557: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      }),
        t(653041);
      var l = t(200651),
        a = t(192379),
        i = t(442837),
        r = t(481060),
        o = t(239091),
        s = t(561472),
        c = t(36311),
        d = t(367907),
        u = t(188471),
        h = t(541716),
        m = t(526120),
        f = t(563534),
        p = t(736052),
        x = t(665149),
        C = t(442336),
        g = t(910611),
        _ = t(41776),
        b = t(703656),
        I = t(6025),
        N = t(592125),
        v = t(703558),
        Z = t(731290),
        j = t(430824),
        B = t(375954),
        E = t(594174),
        S = t(933557),
        T = t(287746),
        w = t(981631),
        A = t(388032),
        y = t(837199);
      function L(e) {
        let {
            channelId: n,
            baseChannelId: L,
            channelViewSource: k = "Split View",
            isResourceChannelView: O,
          } = e,
          P = (0, i.e7)([N.Z], () => N.Z.getChannel(n)),
          R = (0, i.e7)([j.Z], () =>
            j.Z.getGuild(null == P ? void 0 : P.getGuildId()),
          ),
          M = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
          D = (0, i.e7)([Z.Z], () =>
            Z.Z.didAgree(null == P ? void 0 : P.guild_id),
          ),
          H = (null == M ? void 0 : M.nsfwAllowed) === !0,
          U = (0, S.ZP)(P),
          G = (0, i.e7)(
            [_.Z],
            () => (null == R ? void 0 : R.id) != null && _.Z.isLurking(R.id),
            [R],
          ),
          W = (0, p.Z)(n),
          z = (0, i.e7)([f.Z], () => {
            var e;
            return null ===
              (e = f.Z.getResourceForChannel(null == R ? void 0 : R.id, n)) ||
              void 0 === e
              ? void 0
              : e.title;
          }),
          F = a.useRef(!1);
        if (
          (a.useEffect(() => {
            null != P &&
              !F.current &&
              ((F.current = !0),
              (0, d.yw)(w.rMx.CHANNEL_OPENED, {
                ...(0, d.$H)(P.id),
                channel_view: k,
              }),
              (0, u.a)(w.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: P.id }));
          }, [P, k]),
          null == P || null == R)
        )
          return null;
        let q = [];
        return (!G && q.push((0, l.jsx)(C.Z, { channel: P }, "notifications")),
        q.push(
          (0, l.jsx)(
            x.ZP.Icon,
            {
              icon: r.XSmallIcon,
              tooltip: A.intl.string(A.t.cpT0Cg),
              onClick: () => I.Z.closeChannelSidebar(L),
            },
            "close",
          ),
        ),
        !P.isNSFW() || (H && D))
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(s.Z, { channel: P, draftType: v.d.ChannelMessage }),
                (0, l.jsx)(x.ZP, {
                  toolbar: q,
                  "aria-label": A.intl.string(A.t.BIYAqa),
                  children: (0, g.ud)({
                    channel: P,
                    channelName: W ? z : U,
                    guild: R,
                    inSidebar: !0,
                    handleContextMenu: (e) => {
                      (0, o.jW)(e, async () => {
                        let { default: e } = await t
                          .e("24783")
                          .then(t.bind(t, 439635));
                        return (n) =>
                          (0, l.jsx)(e, { ...n, channel: P, guild: R });
                      });
                    },
                    handleClick: () => {
                      let e = B.Z.getMessages(P.id);
                      if (O) {
                        (0, b.uL)(w.Z5c.CHANNEL(P.guild_id, P.id)),
                          (0, m.C3)(P.guild_id, null);
                        return;
                      }
                      (0, b.XU)(P.guild_id, P.id, e.jumpTargetId);
                    },
                  }),
                }),
                (0, l.jsx)("div", {
                  className: y.chat,
                  children: (0, l.jsx)(
                    T.Z,
                    { channel: P, guild: R, chatInputType: h.Ie.SIDEBAR },
                    n,
                  ),
                }),
              ],
            })
          : (0, l.jsx)(c.Z, { guild: R });
      }
    },
    905204: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(536091),
        t(653041),
        t(47120),
        t(724458);
      var l = t(192379),
        a = t(392711),
        i = t.n(a),
        r = t(442837),
        o = t(570140),
        s = t(724213),
        c = t(9156),
        d = t(630388),
        u = t(823379),
        h = t(549817),
        m = t(45966),
        f = t(526761);
      function p(e) {
        o.Z.dispatch({
          type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
          guildId: e,
        });
      }
      let x = {};
      function C(e) {
        let n = (0, r.e7)(
          [m.Z],
          () => {
            var n;
            return null !== (n = m.Z.getPendingResponseOptions(e)) &&
              void 0 !== n
              ? n
              : x;
          },
          [e],
        );
        return (
          l.useEffect(() => (p(e), () => p(e)), [e]),
          l.useEffect(() => {
            null != n &&
              0 !== Object.keys(n).length &&
              h.Z.updateOnboardingResponses(e);
          }, [e, n]),
          {
            handleSelectOption: l.useCallback(
              (n, t, l) => {
                let a = m.Z.getOnboardingResponses(e),
                  { addedRoleIds: r, removedRoleIds: p } = (function (
                    e,
                    n,
                    t,
                    l,
                  ) {
                    var a, r, o, s, c;
                    let d = [],
                      h = [];
                    if (e.singleSelect && t) {
                      let t = e.options.find((e) => l.includes(e.id));
                      (d = i().difference(
                        null !== (a = n.roleIds) && void 0 !== a ? a : [],
                        null !== (r = null == t ? void 0 : t.roleIds) &&
                          void 0 !== r
                          ? r
                          : [],
                      )),
                        (h = i().difference(
                          null !== (o = null == t ? void 0 : t.roleIds) &&
                            void 0 !== o
                            ? o
                            : [],
                          null !== (s = n.roleIds) && void 0 !== s ? s : [],
                        ));
                    } else if (t)
                      (d = null !== (c = n.roleIds) && void 0 !== c ? c : []),
                        (h = []);
                    else {
                      let t = e.options.filter((e) => l.includes(e.id)),
                        a = t.filter((e) => n.id !== e.id),
                        r = t
                          .map((e) => e.roleIds)
                          .flat()
                          .filter(u.lm),
                        o = a
                          .map((e) => e.roleIds)
                          .flat()
                          .filter(u.lm);
                      (d = []), (h = i().difference(r, o));
                    }
                    return { addedRoleIds: d, removedRoleIds: h };
                  })(n, t, l, a),
                  { addedChannelIds: x, removedChannelIds: C } = (function (e) {
                    var n, t, l, a, r;
                    let {
                        guildId: o,
                        prompt: c,
                        option: d,
                        selected: h,
                        responses: f,
                      } = e,
                      p = [],
                      x = [];
                    if (c.singleSelect && h) {
                      let e = c.options.find((e) => f.includes(e.id));
                      (p = i().difference(
                        null !== (n = d.channelIds) && void 0 !== n ? n : [],
                        null !== (t = null == e ? void 0 : e.channelIds) &&
                          void 0 !== t
                          ? t
                          : [],
                      )),
                        (x = i().difference(
                          null !== (l = null == e ? void 0 : e.channelIds) &&
                            void 0 !== l
                            ? l
                            : [],
                          null !== (a = d.channelIds) && void 0 !== a ? a : [],
                        ));
                    } else if (h)
                      (p =
                        null !== (r = d.channelIds) && void 0 !== r ? r : []),
                        (x = []);
                    else {
                      let e = c.options.filter((e) => f.includes(e.id)),
                        n = e.filter((e) => d.id !== e.id),
                        t = e
                          .map((e) => e.channelIds)
                          .flat()
                          .filter(u.lm),
                        l = n
                          .map((e) => e.channelIds)
                          .flat()
                          .filter(u.lm);
                      (p = []), (x = i().difference(t, l));
                    }
                    return (
                      (0, s.hi)(o) && p.push(...m.Z.getDefaultChannelIds(o)),
                      { addedChannelIds: p, removedChannelIds: x }
                    );
                  })({
                    guildId: e,
                    prompt: n,
                    option: t,
                    selected: l,
                    responses: a,
                  }),
                  g = x.reduce((n, t) => {
                    let l = c.ZP.getChannelIdFlags(e, t);
                    return (
                      (n[t] = { flags: (0, d.mB)(l, f.ic.OPT_IN_ENABLED, !0) }),
                      n
                    );
                  }, {}),
                  _ = C.reduce((n, t) => {
                    let l = c.ZP.getChannelIdFlags(e, t);
                    return (
                      (n[t] = { flags: (0, d.mB)(l, f.ic.OPT_IN_ENABLED, !1) }),
                      n
                    );
                  }, {}),
                  b = { ...g, ..._ };
                h.Z.selectOption(e, n.id, t.id, l),
                  o.Z.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                    guildId: e,
                    overrides: b,
                  }),
                  h.Z.updateRolesLocal(e, r, p);
              },
              [e],
            ),
          }
        );
      }
    },
    521941: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(653041);
      var l = t(192379),
        a = t(399606),
        i = t(45966);
      function r(e) {
        let n = (0, a.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
        return l.useMemo(() => {
          let e = 0,
            t = [],
            l = [],
            a = [],
            i = [];
          for (var r = 0; r < n.length; r++) {
            let o = n[r];
            o.isNew
              ? t.push(o)
              : o.hasNewAnswers
                ? (l.push(o), (e += o.options.filter((e) => e.isUnseen).length))
                : o.inOnboarding
                  ? i.push(o)
                  : a.push(o);
          }
          return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: a.concat(i),
          };
        }, [n]);
      }
    },
    603072: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return L;
          },
        }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        o = t(442837),
        s = t(704215),
        c = t(692547),
        d = t(481060),
        u = t(111028),
        h = t(252618),
        m = t(605236),
        f = t(473403),
        p = t(984370),
        x = t(216306),
        C = t(104155),
        g = t(22082),
        _ = t(703656),
        b = t(433355),
        I = t(592125),
        N = t(430824),
        v = t(944486),
        Z = t(31445),
        j = t(59350),
        B = t(290511),
        E = t(176505),
        S = t(921944),
        T = t(388032),
        w = t(824104),
        A = t(247627);
      function y(e) {
        let { guild: n, previousChannel: t } = e,
          i = (0, Z.Z)(n);
        a.useEffect(() => {
          (0, m.EW)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
            dismissAction: S.L.DISMISS,
          });
        });
        let r = i
            ? T.intl.formatToPlainString(T.t.uqZgYW, { guildName: n.name })
            : T.intl.formatToPlainString(T.t.velJeX, { guildName: n.name }),
          o = i ? T.intl.string(T.t.h9mGOD) : T.intl.string(T.t.et6wam);
        return (
          (0, h.Tt)({ location: r }),
          (0, l.jsxs)(p.Z, {
            className: w.header,
            innerClassname: w.innerHeader,
            hideSearch: !0,
            channelId: E.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
              null != t
                ? (0, l.jsx)(d.Button, {
                    className: w.returnButton,
                    size: d.Button.Sizes.SMALL,
                    look: d.Button.Looks.OUTLINED,
                    color: d.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, _.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(d.Text, {
                      className: w.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: T.intl.format(T.t.IX7oWl, {
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                a.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(f._, {
                                      className: w.returnIcon,
                                      guild: n,
                                      channel: t,
                                    }),
                                    (0, l.jsx)(u.Z, {
                                      children: (0, l.jsx)(d.Text, {
                                        variant: "text-xs/medium",
                                        color: "none",
                                        children: t.name,
                                      }),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                      }),
                    }),
                  })
                : [],
            children: [
              (0, l.jsx)(p.Z.Icon, {
                icon: d.ChannelListMagnifyingGlassIcon,
                "aria-hidden": !0,
              }),
              (0, l.jsx)(p.Z.Title, { children: o }),
            ],
          })
        );
      }
      function L(e) {
        let { guildId: n, selectedSection: t } = e,
          i = (0, o.e7)([N.Z], () => N.Z.getGuild(n)),
          s = (0, Z.Z)(i),
          [u, h] = a.useState(null != t ? t : B.l7.CUSTOMIZE);
        a.useEffect(() => {
          null != t && h(t);
        }, [t]);
        let m = (0, o.e7)([v.Z], () => v.Z.getLastSelectedChannelId(n)),
          f = (0, o.e7)([b.ZP], () =>
            b.ZP.getCurrentSidebarChannelId(E.oC.CHANNEL_BROWSER),
          ),
          p = null != f && u === B.l7.BROWSE,
          _ = (0, o.e7)([I.Z], () => I.Z.getChannel(m)),
          S = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
          L = (0, x.fU)(n);
        return null == i
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  className: r()(A.chat, { [A.threadSidebarOpen]: p }),
                  children: [
                    (0, l.jsx)(y, { guild: i, previousChannel: _ }),
                    (0, l.jsxs)("div", {
                      className: r()(A.content, w.container),
                      children: [
                        s &&
                          (0, l.jsxs)(d.TabBar, {
                            className: w.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: u,
                            onItemSelect: (e) => h(e),
                            children: [
                              (0, l.jsx)(
                                d.TabBar.Item,
                                {
                                  className: w.tabBarItem,
                                  id: B.l7.CUSTOMIZE,
                                  children: T.intl.string(T.t.H2cICQ),
                                },
                                B.l7.CUSTOMIZE,
                              ),
                              (0, l.jsxs)(
                                d.TabBar.Item,
                                {
                                  className: w.tabBarItem,
                                  id: B.l7.BROWSE,
                                  "aria-label": T.intl.string(T.t.et6wam),
                                  children: [
                                    T.intl.string(T.t.et6wam),
                                    (0, l.jsx)(d.TextBadge, {
                                      text: S ? T.intl.string(T.t.psHMa2) : L,
                                      color: S
                                        ? c.Z.unsafe_rawColors.BRAND_260.css
                                        : c.Z.colors.BACKGROUND_ACCENT.css,
                                      className: r()({ [w.newBadge]: S }),
                                    }),
                                  ],
                                },
                                B.l7.BROWSE,
                              ),
                            ],
                          }),
                        (() => {
                          switch (u) {
                            case B.l7.CUSTOMIZE:
                              return (0, l.jsx)(j.Z, {
                                guildId: n,
                                onBrowseChannels: () => h(B.l7.BROWSE),
                              });
                            case B.l7.BROWSE:
                            default:
                              return (0, l.jsx)(C.Z, { guildId: n });
                          }
                        })(),
                      ],
                    }),
                  ],
                }),
                p && (0, l.jsx)(C.I, { channelId: f }),
              ],
            });
      }
    },
    59350: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ea;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        o = t(392711),
        s = t.n(o),
        c = t(476183),
        d = t(866442),
        u = t(442837),
        h = t(692547),
        m = t(780384),
        f = t(481060),
        p = t(45114),
        x = t(131388),
        C = t(493773),
        g = t(410030),
        _ = t(1585),
        b = t(125988),
        I = t(44315),
        N = t(160404),
        v = t(240991),
        Z = t(703656),
        j = t(687158),
        B = t(287008),
        E = t(484459),
        S = t(271383),
        T = t(430824),
        w = t(306680),
        A = t(594174),
        y = t(823379),
        L = t(51144),
        k = t(998502),
        O = t(549817),
        P = t(745752),
        R = t(45966),
        M = t(637853),
        D = t(905204),
        H = t(968644),
        U = t(521941),
        G = t(614328),
        W = t(104265),
        z = t(588632),
        F = t(290511),
        q = t(981631),
        V = t(176505),
        X = t(490897),
        Y = t(388032),
        Q = t(44975),
        J = t(247627),
        K = t(665162);
      let $ = f.AvatarSizes.SIZE_80,
        ee = "required";
      function en(e) {
        var n;
        let { guild: t, user: a } = e,
          {
            avatarSrc: i,
            eventHandlers: o,
            isAvatarAnimating: c,
          } = (0, B.Z)({ user: a, guildId: t.id, size: 120 }),
          { avatarDecorationSrc: h } = (0, b.Z)({
            user: a,
            size: (0, _.y9)($),
            onlyAnimateOnHover: !c,
          }),
          m = (0, u.e7)([S.ZP], () => S.ZP.getSelfMember(t.id)),
          p = (0, u.Wu)([S.ZP], () =>
            S.ZP.getMemberRoleWithPendingUpdates(t.id, a.id),
          ),
          x = (0, u.e7)([T.Z], () => T.Z.getRoles(t.id)),
          g = s()(p)
            .filter((e) => x.hasOwnProperty(e))
            .map((e) => x[e])
            .orderBy("position", "desc")
            .value(),
          I = (0, j.ZP)(a.id, t.id);
        (0, C.Z)(() => {
          (0, E.Z)(a.id, a.getAvatarURL(t.id, (0, f.getAvatarSize)($)), {
            guildId: t.id,
          });
        });
        let N = (0, v.parseBioReact)(null == I ? void 0 : I.bio),
          Z = k.ZP.getEnableHardwareAcceleration()
            ? f.AnimatedAvatar
            : f.Avatar;
        return (0, l.jsxs)("div", {
          className: Q.profile,
          children: [
            (0, l.jsx)(f.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: Y.intl.string(Y.t.diTbFx),
            }),
            (0, l.jsx)(f.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: Y.intl.string(Y.t["+8um3N"]),
            }),
            (0, l.jsxs)("div", {
              className: Q.profileCard,
              children: [
                (0, l.jsx)("div", {
                  ...o,
                  children: (0, l.jsx)(Z, {
                    src: i,
                    avatarDecoration: h,
                    size: $,
                    "aria-label": a.username,
                  }),
                }),
                (0, l.jsx)(f.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  className: Q.username,
                  children:
                    null !== (n = null == m ? void 0 : m.nick) && void 0 !== n
                      ? n
                      : L.ZP.getName(a),
                }),
                (0, l.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: r()(K.markup, Q.bio),
                  children: N,
                }),
                null != g &&
                  g.length > 0 &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("hr", { className: Q.separator }),
                      (0, l.jsx)(f.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        className: Q.title,
                        children: Y.intl.string(Y.t.LPJmLy),
                      }),
                      (0, l.jsx)("div", {
                        className: Q.roles,
                        children:
                          null == g
                            ? void 0
                            : g.map((e) => {
                                var n;
                                return (0, l.jsxs)(
                                  "div",
                                  {
                                    className: Q.role,
                                    children: [
                                      (0, l.jsx)(f.RoleCircle, {
                                        color:
                                          null !== (n = e.colorString) &&
                                          void 0 !== n
                                            ? n
                                            : (0, d.Rf)(q.p6O),
                                        className: Q.roleDot,
                                      }),
                                      (0, l.jsx)(f.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-primary",
                                        children: e.name,
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function et(e) {
        var n;
        let { prompt: t, guild: i } = e,
          [o, s] = a.useState(null),
          [d, m] = a.useState(new Set()),
          p =
            null == t
              ? void 0
              : null === (n = t.options) || void 0 === n
                ? void 0
                : n.filter((e) => d.has(e.id)),
          x = (0, M.L6)(p),
          C = (0, M.dX)(p),
          g = (0, u.Wu)([R.Z], () =>
            R.Z.getOnboardingResponsesForPrompt(i.id, t.id),
          ),
          { helpText: _, helpTextAdditional: b } = (0, H.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: C,
            itemHook: (e, n) =>
              (0, l.jsx)(
                f.Text,
                {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                },
                n,
              ),
          }),
          { handleSelectOption: N } = (0, D.Z)(i.id),
          v = (0, f.useToken)(h.Z.unsafe_rawColors.BRAND_500),
          Z = (0, f.useSpring)(
            {
              from: {
                color: t.isNew ? v.hex({ opacity: 1 }) : v.hex({ opacity: 0 }),
              },
              color: v.hex({ opacity: 0 }),
              config: { duration: 300 },
              delay: 500,
            },
            "animate-always",
          ),
          j = t.options.map((e) => ({ value: e.id, ...e })),
          B = t.options.filter((e) => g.includes(e.id)).map((e) => e.id);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(c.animated.div, {
            className: Q.prompt,
            style: { borderColor: Z.color },
            children: [
              t.isNew &&
                (0, l.jsx)(f.TextBadge, {
                  color: (0, I.Lq)(q.Ilk.BRAND_260),
                  text: Y.intl.string(Y.t.y2b7CA),
                  className: Q.newBadge,
                }),
              (0, l.jsxs)(f.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                  t.title,
                  t.required
                    ? (0, l.jsx)("span", {
                        className: r()(Q.required, {
                          [Q.error]: (null == o ? void 0 : o.type) === ee,
                        }),
                        children: "*",
                      })
                    : null,
                ],
              }),
              (0, l.jsx)(z.Z, {
                options: j,
                value: B,
                onChange: (e) => {
                  let n = e.find((e) => !g.includes(e.id)),
                    l = e.map((e) => e.id);
                  if (null != n)
                    N(t, n, !0),
                      t.singleSelect &&
                        t.options.forEach((e) => d.delete(e.id)),
                      d.add(n.id);
                  else {
                    let e = g.filter((e) => !l.includes(e)),
                      n = t.options.filter((n) => e.includes(n.id));
                    if (g.length <= n.length && t.required) {
                      s({ type: ee });
                      return;
                    }
                    n.forEach((e) => {
                      N(t, e, !1), d.delete(e.id);
                    });
                  }
                  m(new Set(d)), s(null);
                },
                canBeNew: !t.isNew,
              }),
              (0, l.jsxs)(f.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.helpText,
                children: [_, " ", b],
              }),
            ],
          }),
        });
      }
      function el(e) {
        var n;
        let { prompt: t, guild: i } = e,
          [o, s] = a.useState(null),
          [d, m] = a.useState(new Set()),
          p =
            null == t
              ? void 0
              : null === (n = t.options) || void 0 === n
                ? void 0
                : n.filter((e) => d.has(e.id)),
          x = (0, M.L6)(p),
          C = (0, M.dX)(p),
          g = (0, u.Wu)([R.Z], () =>
            R.Z.getOnboardingResponsesForPrompt(i.id, t.id),
          ),
          { helpText: _, helpTextAdditional: b } = (0, H.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: x,
            selectedChannelIds: C,
            itemHook: (e, n) =>
              (0, l.jsx)(
                f.Text,
                {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                },
                n,
              ),
          }),
          { handleSelectOption: N } = (0, D.Z)(i.id),
          v = (e, n) => {
            if (!n && 1 === g.length && t.required) {
              s({ type: ee });
              return;
            }
            N(t, e, null != n && n),
              t.singleSelect && n && t.options.forEach((e) => d.delete(e.id)),
              n ? d.add(e.id) : d.delete(e.id),
              m(new Set(d)),
              s(null);
          },
          Z = (0, f.useToken)(h.Z.unsafe_rawColors.BRAND_500),
          j = (0, f.useSpring)(
            {
              from: {
                color: t.isNew ? Z.hex({ opacity: 1 }) : Z.hex({ opacity: 0 }),
              },
              color: Z.hex({ opacity: 0 }),
              config: { duration: 300 },
              delay: 500,
            },
            "animate-always",
          );
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(c.animated.div, {
            className: Q.prompt,
            style: { borderColor: j.color },
            children: [
              t.isNew &&
                (0, l.jsx)(f.TextBadge, {
                  color: (0, I.Lq)(q.Ilk.BRAND_260),
                  text: Y.intl.string(Y.t.y2b7CA),
                  className: Q.newBadge,
                }),
              (0, l.jsxs)(f.Heading, {
                className: Q.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                  t.title,
                  t.required
                    ? (0, l.jsx)("span", {
                        className: r()(Q.required, {
                          [Q.error]: (null == o ? void 0 : o.type) === ee,
                        }),
                        children: "*",
                      })
                    : null,
                ],
              }),
              (0, l.jsx)("div", {
                className: Q.promptOptions,
                children: t.options.map((e) =>
                  (0, l.jsx)(
                    W.Z,
                    {
                      hideMemberCount: !0,
                      guildId: i.id,
                      option: e,
                      onSelect: (n) => v(e, n),
                      selected: g.includes(e.id),
                      canBeNew: !t.isNew,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, l.jsxs)(f.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: Q.helpText,
                children: [_, " ", b],
              }),
            ],
          }),
        });
      }
      function ea(e) {
        let { guildId: n, onBrowseChannels: t } = e,
          i = (0, m.wj)((0, g.ZP)()),
          o = (0, u.e7)([T.Z], () => T.Z.getGuild(n)),
          s = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
          c = (0, x.Z)("(min-width: 1344px)") && null != s,
          d = a.useCallback(() => {
            (0, Z.uL)(q.Z5c.CHANNEL(n, V.oC.CHANNEL_BROWSER)), null == t || t();
          }, [n, t]),
          h = (0, u.e7)([w.ZP], () =>
            w.ZP.hasUnread(n, X.W.GUILD_ONBOARDING_QUESTION),
          ),
          {
            onboardingPromptsRaw: C,
            newOnboardingPrompts: _,
            onboardingPromptsWithNewAnswers: b,
            newAnswersCount: v,
            onboardingPrompts: j,
          } = (0, U.Z)(n);
        a.useEffect(() => {
          if ((null == o ? void 0 : o.id) != null)
            !N.Z.isFullServerPreview(o.id) &&
              (R.Z.shouldFetchPrompts(o.id) || h) &&
              (0, P.eM)(o.id);
        }, [null == o ? void 0 : o.id, h]),
          a.useEffect(() => {
            if ((null == o ? void 0 : o.id) != null) {
              if (!N.Z.isFullServerPreview(o.id))
                return () => {
                  (0, p.Ju)(
                    o.id,
                    X.W.GUILD_ONBOARDING_QUESTION,
                    R.Z.ackIdForGuild(o.id),
                  ),
                    O.Z.updateOnboardingResponses(o.id);
                };
            }
          }, [null == o ? void 0 : o.id]);
        let B = a.useCallback(
          (e) => {
            if (null == o) return null;
            switch (e.type) {
              case F.FN.MULTIPLE_CHOICE:
                return (0, l.jsx)(el, { prompt: e, guild: o }, e.id);
              case F.FN.DROPDOWN:
                return (0, l.jsx)(et, { prompt: e, guild: o }, e.id);
              default:
                (0, y.vE)(e.type);
            }
          },
          [o],
        );
        if (null == o) return null;
        if (0 === C.length) {
          let e = (0, I.Lq)(i ? q.Ilk.PRIMARY_300 : q.Ilk.PRIMARY_500),
            n = (0, I.Lq)(i ? q.Ilk.PRIMARY_700 : q.Ilk.PRIMARY_230);
          return (0, l.jsx)("div", {
            className: r()(J.content, Q.emptyPage),
            children: (0, l.jsxs)("div", {
              className: Q.emptyContainer,
              children: [
                (0, l.jsx)(G.Z, {
                  className: Q.emptyIcon,
                  foregroundColor: e,
                  backgroundColor: n,
                }),
                (0, l.jsx)(f.Heading, {
                  className: Q.emptyHeader,
                  variant: "heading-md/semibold",
                  children: Y.intl.string(Y.t.leKHQ0),
                }),
                (0, l.jsx)(f.Text, {
                  variant: "text-sm/medium",
                  children: Y.intl.format(Y.t["jH+ktL"], {
                    onBrowseChannels: d,
                  }),
                }),
              ],
            }),
          });
        }
        return (0, l.jsxs)(f.AdvancedScroller, {
          className: Q.scroller,
          fade: !0,
          children: [
            (0, l.jsxs)("div", {
              className: Q.pageBody,
              children: [
                (_.length > 0 || b.length > 0) &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        children: (0, l.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          children: Y.intl.format(Y.t.iB5Gqa, {
                            count: _.length + v,
                          }),
                        }),
                      }),
                      _.map(B),
                      b.map(B),
                      (0, l.jsx)("div", { className: Q.sectionSeparator }),
                    ],
                  }),
                j.length > 0 &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)(f.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: Y.intl.format(Y.t["8IV8Ky"], {
                              count: j.length,
                            }),
                          }),
                          (0, l.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: Y.intl.string(Y.t.Ecz7T0),
                          }),
                        ],
                      }),
                      j.map(B),
                    ],
                  }),
              ],
            }),
            c && (0, l.jsx)(en, { guild: o, user: s }),
          ],
        });
      }
    },
    614328: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(331595);
      function i(e) {
        let {
          width: n = 120,
          height: t = 80,
          backgroundColor: i,
          foregroundColor: r,
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.Z)(o),
          width: n,
          height: t,
          viewBox: "0 0 120 80",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, l.jsx)("circle", { cx: "60", cy: "40", r: "32", fill: i }),
            (0, l.jsx)("path", {
              d: "M75.0832 29.8546L75.0835 29.8548C75.1362 29.884 75.1683 29.9391 75.1683 29.9983C75.1683 30.5369 75.1197 37.4409 73.0784 44.1629C71.005 50.9907 67.1615 56.8317 60.0016 56.8317C52.8418 56.8317 48.9982 50.9907 46.9248 44.1629C44.8836 37.4409 44.835 30.5369 44.835 29.9983C44.835 29.9391 44.8671 29.884 44.9197 29.8548L44.9201 29.8546L59.919 21.5218C59.9191 21.5218 59.9193 21.5217 59.9194 21.5216C59.9718 21.4928 60.0316 21.4928 60.0839 21.5217C60.084 21.5217 60.0842 21.5218 60.0843 21.5218L75.0832 29.8546ZM52.2516 46.6667V48.1667H53.7516H66.2516H67.7516V46.6667C67.7516 44.43 67.0409 42.4584 65.6254 41.0429C64.7687 40.1861 63.7082 39.5876 62.5086 39.2485C64.3809 38.3237 65.6683 36.3949 65.6683 34.165C65.6683 31.0349 63.1317 28.4983 60.0016 28.4983C56.8715 28.4983 54.335 31.0349 54.335 34.165C54.335 36.3949 55.6224 38.3237 57.4947 39.2485C56.295 39.5876 55.2346 40.1861 54.3778 41.0429C52.9623 42.4584 52.2516 44.43 52.2516 46.6667Z",
              fill: r,
              stroke: r,
              strokeWidth: "3",
            }),
            (0, l.jsx)("path", {
              d: "M103.67 1.80634C103.67 0.808724 102.862 0 101.864 0C100.866 0 100.058 0.808724 100.058 1.80634V3.64278C100.058 4.64039 100.866 5.44911 101.864 5.44911C102.862 5.44911 103.67 4.64039 103.67 3.64278V1.80634Z",
              fill: "#58F287",
            }),
            (0, l.jsx)("path", {
              d: "M103.67 16.3574C103.67 15.3597 102.862 14.551 101.864 14.551C100.866 14.551 100.058 15.3597 100.058 16.3574V18.1938C100.058 19.1914 100.866 20.0001 101.864 20.0001C102.862 20.0001 103.67 19.1914 103.67 18.1938V16.3574Z",
              fill: "#58F287",
            }),
            (0, l.jsx)("path", {
              d: "M110.194 11.8412C111.191 11.8412 112 11.0325 112 10.0349C112 9.03724 111.191 8.22852 110.194 8.22852H108.357C107.36 8.22852 106.551 9.03724 106.551 10.0349C106.551 11.0325 107.36 11.8412 108.357 11.8412H110.194Z",
              fill: "#58F287",
            }),
            (0, l.jsx)("path", {
              d: "M95.6429 11.7413C96.6405 11.7413 97.4492 10.9326 97.4492 9.935C97.4492 8.93739 96.6405 8.12866 95.6429 8.12866H93.8064C92.8088 8.12866 92.0001 8.93739 92.0001 9.935C92.0001 10.9326 92.8088 11.7413 93.8064 11.7413H95.6429Z",
              fill: "#58F287",
            }),
            (0, l.jsx)("path", {
              d: "M19.1501 74.4573L23.3147 73.0684C23.5192 72.9747 23.6925 72.8241 23.814 72.6347C23.9354 72.4454 24 72.225 24 72C24 71.775 23.9354 71.5546 23.814 71.3653C23.6925 71.1759 23.5192 71.0253 23.3147 70.9316L19.1501 69.5427C18.8657 69.4142 18.6378 69.1862 18.5094 68.9016L17.0145 64.7348C16.9442 64.521 16.8083 64.3349 16.6262 64.203C16.444 64.071 16.2249 64 16 64C15.7751 64 15.556 64.071 15.3738 64.203C15.1917 64.3349 15.0558 64.521 14.9855 64.7348L13.4906 68.9016C13.3622 69.1862 13.1343 69.4142 12.8499 69.5427L8.68528 70.9316C8.4808 71.0253 8.30752 71.1759 8.18604 71.3653C8.06457 71.5546 8 71.775 8 72C8 72.225 8.06457 72.4454 8.18604 72.6347C8.30752 72.8241 8.4808 72.9747 8.68528 73.0684L12.8499 74.4573C13.0011 74.5032 13.1387 74.5858 13.2505 74.6976C13.3622 74.8094 13.4447 74.9471 13.4906 75.0984L14.9855 79.2652C15.0558 79.479 15.1917 79.6651 15.3738 79.797C15.556 79.929 15.7751 80 16 80C16.2249 80 16.444 79.929 16.6262 79.797C16.8083 79.6651 16.9442 79.479 17.0145 79.2652L18.5094 75.0984C18.5553 74.9471 18.6378 74.8094 18.7495 74.6976C18.8613 74.5858 18.9989 74.5032 19.1501 74.4573Z",
              fill: "#FFD01A",
            }),
          ],
        });
      }
    },
    724213: function (e, n, t) {
      t.d(n, {
        hi: function () {
          return u;
        },
        kH: function () {
          return h;
        },
        rz: function () {
          return m;
        },
      }),
        t(789020),
        t(47120),
        t(653041),
        t(524437);
      var l = t(549817);
      t(581883);
      var a = t(984933),
        i = t(271383),
        r = t(9156),
        o = t(630388),
        s = t(152376),
        c = t(398758),
        d = t(372897);
      function u(e) {
        var n, t;
        let l = (0, c.r1)(e),
          a =
            null !==
              (t =
                null === (n = i.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          s = (0, o.yE)(a, d.q.COMPLETED_ONBOARDING),
          u = r.ZP.getOptedInChannels(e).size > 0;
        return !l && !s && !u;
      }
      function h(e) {
        if (u(e)) {
          m(e);
          return;
        }
        {
          let n = (0, c.r1)(e);
          (0, s.QG)(e, !n);
        }
      }
      function m(e) {
        let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = a.ZP.getChannels(e),
          r = [...i[a.sH], ...i[a.Zb]]
            .filter((e) => {
              let { channel: n } = e;
              return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
              let { channel: n } = e;
              return n.id;
            });
        n.forEach((e) => r.push(e)), l.Z.onboardExistingMember(e, new Set(r));
      }
    },
    163: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120);
      var l = t(192379),
        a = t(442837),
        i = t(570140),
        r = t(211739),
        o = t(680089),
        s = t(9156),
        c = t(152376),
        d = t(724213),
        u = t(981631);
      function h(e) {
        i.Z.dispatch({
          type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
          guildId: e,
        });
      }
      function m(e) {
        let n = (0, a.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
        return (
          l.useEffect(() => (h(e), () => h(e)), [e]),
          l.useEffect(() => {
            null != n && (0, c.C1)(e, n);
          }, [e, n]),
          {
            onChannelClick: l.useCallback((e, n, t) => {
              let l = s.ZP.isChannelOptedIn(e, n),
                a = n === t;
              !l && o.Z.isCollapsed(t) && null != t && (0, r.mJ)(t),
                (0, d.hi)(e)
                  ? a
                    ? (0, d.rz)(e, { include: new Set([n]) })
                    : (0, d.rz)(e, { exclude: new Set([n]) })
                  : (0, c.k$)(e, n, !l, { section: u.jXE.CHANNEL_BROWSER });
            }, []),
          }
        );
      }
    },
    104155: function (e, n, t) {
      t.d(n, {
        I: function () {
          return I;
        },
        Z: function () {
          return N;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(442837),
        r = t(481060),
        o = t(325708),
        s = t(213557),
        c = t(433355),
        d = t(324067),
        u = t(984933),
        h = t(430824),
        m = t(496675),
        f = t(626135),
        p = t(216306),
        x = t(775028),
        C = t(981631),
        g = t(176505),
        _ = t(388032),
        b = t(206378);
      function I(e) {
        let { channelId: n } = e;
        return (0, l.jsx)(o.Z, {
          sidebarType: o.y.ThreadSidebar,
          maxWidth: 600,
          children: (0, l.jsx)(s.Z, {
            channelId: n,
            baseChannelId: g.oC.CHANNEL_BROWSER,
          }),
        });
      }
      function N(e) {
        let { guildId: n } = e,
          [o, s] = a.useState(""),
          I = (0, i.e7)([h.Z], () => h.Z.getGuild(n)),
          N = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
          v = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
          Z = (0, p.Fo)(n, v, N, o),
          j = (0, i.e7)([m.Z], () =>
            m.Z.canWithPartialContext(C.Plq.MANAGE_CHANNELS, { guildId: n }),
          ),
          B = (0, i.e7)(
            [c.ZP],
            () => null != c.ZP.getCurrentSidebarChannelId(g.oC.CHANNEL_BROWSER),
          ),
          E = a.useCallback(() => s(""), [s]),
          S = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                t.e("45094"),
                t.e("5506"),
              ]).then(t.bind(t, 218613));
              return (t) =>
                (0, l.jsx)(e, { ...t, channelType: null, guildId: n });
            });
          }, [n]);
        return null == I
          ? null
          : (0, l.jsxs)("div", {
              className: b.pageBody,
              children: [
                (0, l.jsxs)("div", {
                  className: b.header,
                  children: [
                    (0, l.jsx)(r.SearchBar, {
                      className: b.search,
                      size: r.SearchBar.Sizes.MEDIUM,
                      query: o,
                      onChange: (e) => {
                        "" === o &&
                          "" !== e &&
                          f.default.track(C.rMx.SEARCH_STARTED, {
                            search_type: "channel browser",
                          }),
                          s(e.toLowerCase());
                      },
                      onClear: E,
                      placeholder: _.intl.string(_.t.s5MnmJ),
                    }),
                    j
                      ? (0, l.jsxs)(r.Button, {
                          className: b.createButton,
                          innerClassName: b.createButtonInner,
                          onClick: S,
                          children: [
                            (0, l.jsx)(r.PlusSmallIcon, {
                              size: "sm",
                              color: "currentColor",
                              className: b.createIcon,
                            }),
                            _.intl.string(_.t.CumH4u),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(x.Z, {
                  className: b.browser,
                  channels: N,
                  categories: Z,
                  guild: I,
                  hasSidebar: B,
                }),
              ],
            });
      }
    },
    753540: function (e, n, t) {
      t.d(n, {
        EH: function () {
          return c;
        },
        Mf: function () {
          return o;
        },
        t4: function () {
          return s;
        },
      });
      var l = t(442837),
        a = t(9156),
        i = t(724213),
        r = t(388032);
      function o(e, n, t) {
        return (0, l.e7)([a.ZP], () => {
          var l, r, o;
          if (n === t) return a.ZP.isChannelOptedIn(e, n, !0);
          return (
            (l = e),
            (r = n),
            (o = a.ZP),
            !!(0, i.hi)(l) ||
              o.isChannelOptedIn(l, r, !0) ||
              (null != t && a.ZP.isChannelOptedIn(e, t, !0))
          );
        });
      }
      function s(e, n, t) {
        return (0, l.e7)(
          [a.ZP],
          () => n !== t && null != t && a.ZP.isChannelOptedIn(e, t, !0),
        );
      }
      function c(e, n) {
        return (0, l.e7)([a.ZP], () => {
          if (null != n && a.ZP.isChannelOptedIn(e, n, !0))
            return r.intl.string(r.t.Lz94y8);
        });
      }
    },
    775028: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(47120),
        t(653041),
        t(536091);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        o = t(442837),
        s = t(704215),
        c = t(692547),
        d = t(481060),
        u = t(239091),
        h = t(111028),
        m = t(605236),
        f = t(66999),
        p = t(549631),
        x = t(473403),
        C = t(454585),
        g = t(22082),
        _ = t(703656),
        b = t(6025),
        I = t(922482),
        N = t(601070),
        v = t(216306),
        Z = t(163),
        j = t(753540),
        B = t(70297),
        E = t(981631),
        S = t(176505),
        T = t(388032),
        w = t(397405);
      let A = new Set([E.d4z.GUILD_FORUM, E.d4z.GUILD_MEDIA]),
        y = new Set([E.d4z.GUILD_VOICE, E.d4z.GUILD_STAGE_VOICE]);
      function L(e) {
        let { guild: n, channel: a, onCategoryClick: i } = e,
          o = (0, j.Mf)(n.id, a.id, a.id),
          s = (0, j.t4)(n.id, a.id, a.id);
        return (0, l.jsxs)("div", {
          className: r()(w.categoryRow, { [w.uncategorized]: "null" === a.id }),
          onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("8965"),
                t.e("14280"),
              ]).then(t.bind(t, 139035));
              return (t) => (0, l.jsx)(e, { ...t, channel: a, guild: n });
            });
          },
          children: [
            (0, l.jsx)(d.Text, {
              className: w.categoryText,
              color: "text-muted",
              variant: "text-xs/semibold",
              lineClamp: 1,
              children: a.name,
            }),
            "null" !== a.id &&
              !s &&
              (0, l.jsxs)(d.Clickable, {
                className: w.selectAll,
                onClick: () => {
                  !s && i(n.id, a.id, a.id);
                },
                children: [
                  (0, l.jsx)(d.Checkbox, {
                    className: w.selectAllCheckbox,
                    size: 14,
                    shape: d.Checkbox.Shapes.SMALL_BOX,
                    value: o,
                    type: d.Checkbox.Types.INVERTED,
                    displayOnly: !0,
                  }),
                  (0, l.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: T.intl.string(T.t.mSQwnZ),
                  }),
                ],
              }),
          ],
        });
      }
      let k = a.memo(function () {
          return (0, l.jsx)("div", { className: w.separator });
        }),
        O = a.memo(function (e) {
          let { index: n } = e;
          return (0, l.jsx)(
            d.Text,
            {
              variant: "text-xs/normal",
              className: w.subtitleSeparator,
              children: "\xb7",
            },
            "separator-".concat(n),
          );
        }),
        P = a.memo(function (e) {
          let {
              channel: n,
              category: a,
              guild: i,
              isFirstChannel: s,
              isLastChannel: m,
              onChannelClick: Z,
              tooltipDirection: B = "right",
            } = e,
            { isSubscriptionGated: L } = (0, f.Z)(n.id),
            P = (0, j.Mf)(i.id, n.id, a.id),
            R = (0, j.t4)(i.id, n.id, a.id),
            M = (0, j.EH)(i.id, a.id),
            D = (0, o.e7)([N.Z], () => N.Z.getActiveThreadCount(i.id, n.id)),
            H = (0, o.e7)([g.Z], () =>
              g.Z.shouldIndicateNewChannel(i.id, n.id),
            ),
            U = (e) => {
              if (!R) return e.stopPropagation(), Z(i.id, n.id, a.id), !0;
            },
            G = (e) => {
              n.isGuildVocal()
                ? (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      t.e("79695"),
                      t.e("18320"),
                      t.e("83331"),
                      t.e("81070"),
                    ]).then(t.bind(t, 213202));
                    return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
                  })
                : (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      t.e("79695"),
                      t.e("18320"),
                      t.e("44011"),
                    ]).then(t.bind(t, 373651));
                    return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
                  });
            },
            W = (function (e, n) {
              let t = [];
              return (
                E.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                  n >= 1 &&
                  t.push(
                    (0, l.jsx)(
                      d.Text,
                      {
                        variant: "text-xs/normal",
                        className: w.channelSubtitle,
                        children: T.intl.format(T.t.z0qMLy, { count: n }),
                      },
                      "thread-count",
                    ),
                  ),
                !y.has(e.type) &&
                  t.push(
                    (0, l.jsx)(
                      d.Text,
                      {
                        variant: "text-xs/normal",
                        className: w.channelSubtitle,
                        children: (0, v.qw)(e.id),
                      },
                      "active",
                    ),
                  ),
                null != e.topic &&
                  e.topic.length > 0 &&
                  t.push(
                    (0, l.jsx)(
                      h.Z,
                      {
                        children: (0, l.jsx)(d.Text, {
                          className: w.topic,
                          variant: "text-xs/normal",
                          children: C.Z.parseTopic(e.topic, !0, {
                            channelId: e.id,
                          }),
                        }),
                      },
                      "topic",
                    ),
                  ),
                [
                  t.map((e, n) => [
                    e,
                    (0, l.jsx)(
                      O,
                      { index: n },
                      "subtitle-separator-".concat(n),
                    ),
                  ]),
                ]
                  .flat(2)
                  .slice(0, -1)
              );
            })(n, D),
            z = (e) =>
              (e.stopPropagation(), A.has(n.type) || e.shiftKey)
                ? ((0, _.XU)(i.id, n.id), !0)
                : n.isGuildStageVoice() || n.isGuildVoice()
                  ? ((0, I.Cq)(n), !0)
                  : (b.Z.openChannelAsSidebar({
                      guildId: n.guild_id,
                      channelId: n.id,
                      baseChannelId: S.oC.CHANNEL_BROWSER,
                    }),
                    !0),
            F = T.intl.string(T.t.vetGQk);
          n.isGuildStageVoice() || n.isGuildVoice()
            ? (F = T.intl.string(T.t.VJlc0d))
            : n.isForumLikeChannel() && (F = T.intl.string(T.t["3xjX0d"]));
          let q = R ? "text-muted" : "text-normal",
            V = (0, d.useToken)(
              R ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_NORMAL,
            ).hex();
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(d.Tooltip, {
                text: M,
                delay: 500,
                position: B,
                children: (e) =>
                  (0, l.jsxs)(d.Clickable, {
                    className: r()(w.channelRow, {
                      [w.firstChannel]: s,
                      [w.lastChannel]: m,
                      [w.disabled]: R,
                    }),
                    ...e,
                    onClick: U,
                    onContextMenu: G,
                    children: [
                      (0, l.jsxs)("div", {
                        className: w.channelInfo,
                        children: [
                          (0, l.jsxs)("div", {
                            className: w.channelName,
                            children: [
                              (0, l.jsx)(x._, { channel: n, guild: i }),
                              (0, l.jsx)(h.Z, {
                                className: w.__invalid_name,
                                children: (0, l.jsx)(d.Text, {
                                  className: w.channelText,
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  color: q,
                                  children: n.name,
                                }),
                              }),
                              L
                                ? (0, l.jsx)(p.Z, {
                                    color: V,
                                    className: w.premiumIcon,
                                  })
                                : null,
                              H
                                ? (0, l.jsx)(d.TextBadge, {
                                    text: T.intl.string(T.t.y2b7CA),
                                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                                    className: w.titleBadge,
                                  })
                                : null,
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: w.channelSubtitles,
                            children: W,
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: w.channelActions,
                        children: [
                          (0, l.jsx)(d.Button, {
                            look: d.ButtonLooks.OUTLINED,
                            color: d.ButtonColors.PRIMARY,
                            size: d.ButtonSizes.SMALL,
                            className: w.viewChannelButton,
                            onClick: z,
                            children: F,
                          }),
                          (0, l.jsx)(d.Checkbox, {
                            "aria-checked": P,
                            value: P,
                            type: d.Checkbox.Types.INVERTED,
                            disabled: R,
                            innerClassName: w.checkboxInner,
                            displayOnly: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              !m && (0, l.jsx)(k, {}),
            ],
          });
        });
      function R(e) {
        let {
            categories: n,
            guild: t,
            className: i,
            innerClassName: o,
            hasSidebar: c,
          } = e,
          { onChannelClick: u } = (0, Z.Z)(t.id),
          h = (0, m.wE)(s.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
          f = a.useCallback(
            (e) => {
              let { section: a } = e;
              if (0 === a && -1 === h) return null;
              let i = n._categories[a + h];
              return (0, l.jsx)(
                L,
                { channel: i.channel, guild: t, onCategoryClick: u },
                i.channel.id,
              );
            },
            [n, t, h, u],
          ),
          p = a.useCallback(
            (e) => {
              let { section: a, row: i } = e;
              if (0 === a && -1 === h) return (0, l.jsx)(B.Z, { guild: t });
              let r = n._categories[a + h],
                o = n[r.channel.id][i];
              return null == o
                ? null
                : (0, l.jsx)(
                    P,
                    {
                      category: r.channel,
                      channel: o.channel,
                      guild: t,
                      isFirstChannel: 0 === i,
                      isLastChannel: n[r.channel.id].length - 1 === i,
                      tooltipDirection: c ? "right" : "top",
                      onChannelClick: u,
                    },
                    o.channel.id,
                  );
            },
            [n, t, h, c, u],
          ),
          x = (0, B.q)(t.id),
          C = (0, v.tn)(t.id, n, 64, x);
        return (0, l.jsx)(
          d.ListAuto,
          {
            className: i,
            innerClassName: r()(o, w.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => C[e].rowHeight,
            renderSection: f,
            renderRow: p,
            sections: C.map((e) => e.rowCount),
          },
          "channel-browser-list",
        );
      }
    },
    70297: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
        q: function () {
          return C;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        r = t(704215),
        o = t(481060),
        s = t(605236),
        c = t(434404),
        d = t(707076),
        u = t(398758),
        h = t(981631),
        m = t(921944),
        f = t(388032),
        p = t(549522),
        x = t(697611);
      function C(e) {
        return (0, u.te)(e) ? 250 : 152;
      }
      function g(e) {
        let { guild: n } = e,
          t = (0, u.te)(n.id),
          a = (0, s.wE)(r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
          C =
            t && !a
              ? r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL
              : r.z.CHANNEL_BROWSER_NUX;
        (0, s.kk)(C);
        let g = t
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(o.Heading, {
                      className: p.heading,
                      color: "always-white",
                      variant: "heading-lg/semibold",
                      children: f.intl.string(f.t.AalzkJ),
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children: f.intl.string(f.t.CXh95e),
                    }),
                    (0, l.jsx)(o.Button, {
                      className: p.checkItOut,
                      onClick: () => {
                        c.Z.open(n.id, h.pNK.ONBOARDING),
                          (0, s.EW)(C, { dismissAction: m.L.PRIMARY });
                      },
                      color: o.Button.Colors.BRAND_INVERTED,
                      children: (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "none",
                        children: f.intl.string(f.t["+OtO4e"]),
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(d.j, { isTooltip: !0 }),
              ],
            })
          : (0, l.jsxs)("div", {
              className: p.nuxContent,
              children: [
                (0, l.jsx)("img", {
                  width: 180,
                  className: p.image,
                  src: x,
                  alt: "",
                  "aria-hidden": !0,
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(o.Heading, {
                      className: p.heading,
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: f.intl.string(f.t.utqWEB),
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: f.intl.string(f.t["+9etcH"]),
                    }),
                    (0, l.jsx)(o.Text, {
                      className: p.tip,
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: f.intl.format(f.t.Z0axjo, {}),
                    }),
                  ],
                }),
              ],
            });
        return (0, l.jsxs)("div", {
          className: i()(p.container, { [p.adminUpsell]: t }),
          children: [
            (0, l.jsx)(o.Clickable, {
              className: p.closeButton,
              onClick: () => {
                (0, s.EW)(C, { dismissAction: m.L.DISMISS });
              },
              children: (0, l.jsx)(o.XSmallIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            g,
          ],
        });
      }
    },
    808786: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    824104: function (e, n, t) {
      e.exports = {
        returnButton: "returnButton_f1fd9c",
        returnButtonText: "returnButtonText_f1fd9c",
        returnIcon: "returnIcon_f1fd9c",
        container: "container_f1fd9c",
        tabBar: "tabBar_f1fd9c",
        tabBarItem: "tabBarItem_f1fd9c",
        newBadge: "newBadge_f1fd9c",
        header: "header_f1fd9c",
        innerHeader: "innerHeader_f1fd9c",
      };
    },
    44975: function (e, n, t) {
      e.exports = {
        scroller: "scroller_c6b11b",
        pageBody: "pageBody_c6b11b",
        prompt: "prompt_c6b11b",
        newBadge: "newBadge_c6b11b",
        promptTitle: "promptTitle_c6b11b",
        required: "required_c6b11b",
        error: "error_c6b11b",
        promptOptions: "promptOptions_c6b11b",
        sectionSeparator: "sectionSeparator_c6b11b",
        emptyPage: "emptyPage_c6b11b",
        emptyContainer: "emptyContainer_c6b11b",
        emptyIcon: "emptyIcon_c6b11b",
        emptyHeader: "emptyHeader_c6b11b",
        helpText: "helpText_c6b11b",
        profile: "profile_c6b11b",
        profileCard: "profileCard_c6b11b",
        separator: "separator_c6b11b",
        username: "username_c6b11b",
        bio: "bio_c6b11b",
        title: "title_c6b11b",
        roles: "roles_c6b11b",
        role: "role_c6b11b",
        roleDot: "roleDot_c6b11b",
      };
    },
    490266: function (e, n, t) {
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
    268280: function (e, n, t) {
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
    52609: function (e, n, t) {
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
    957589: function (e, n, t) {
      e.exports = {
        userContainer: "userContainer_d3081b",
        heroQuotes: "heroQuotes_d3081b quotes_d3081b",
        testimonialHeroContainer: "testimonialHeroContainer_d3081b",
        animatedContainer: "animatedContainer_d3081b",
        testimonial: "testimonial_d3081b",
        testimonialsControls: "testimonialsControls_d3081b",
        testimonialControl: "testimonialControl_d3081b",
        testimonialControlInner: "testimonialControlInner_d3081b",
        testimonialControlIcon: "testimonialControlIcon_d3081b",
      };
    },
    51979: function (e, n, t) {
      e.exports = {
        container: "container_e3f878",
        action: "action_e3f878",
        clickableAction: "clickableAction_e3f878",
        actionInfo: "actionInfo_e3f878",
        channelIcon: "channelIcon_e3f878",
        tagIconContainer: "tagIconContainer_e3f878",
        channelIconContainer: "channelIconContainer_e3f878",
        rulesIconContainer: "rulesIconContainer_e3f878",
        rulesIcon: "rulesIcon_e3f878",
        checkCircle: "checkCircle_e3f878",
        checkCircleCompleted: "checkCircleCompleted_e3f878",
        icon: "icon_e3f878",
      };
    },
    240249: function (e, n, t) {
      e.exports = {
        welcomeMessageContainer: "welcomeMessageContainer_a1289e",
        welcomeMessageProfileContainer: "welcomeMessageProfileContainer_a1289e",
        avatar: "avatar_a1289e",
        avatarBackground: "avatarBackground_a1289e",
        avatarBorder: "avatarBorder_a1289e",
        adminUsernameContainer: "adminUsernameContainer_a1289e",
        welcomeMessageContent: "welcomeMessageContent_a1289e",
        ownerIcon: "ownerIcon_a1289e",
      };
    },
    798623: function (e, n, t) {
      e.exports = {
        upsellHeader: "upsellHeader_aa7c25",
        islands: "islands_aa7c25",
        mainIsland: "mainIsland_aa7c25",
        balloonDog: "balloonDog_aa7c25",
        upsellHeaderText: "upsellHeaderText_aa7c25",
        upsellButtons: "upsellButtons_aa7c25",
        valuesContainer: "valuesContainer_aa7c25",
        valueContainer: "valueContainer_aa7c25",
        valueText: "valueText_aa7c25",
        upsellContainer: "upsellContainer_aa7c25",
        upsellPreview: "upsellPreview_aa7c25",
        previewListItem: "previewListItem_aa7c25",
        selected: "selected_aa7c25",
        spacingSmall: "spacingSmall_aa7c25",
        spacingLarge: "spacingLarge_aa7c25",
        channelIcon: "channelIcon_aa7c25",
        channel: "channel_aa7c25",
        spaceBetween: "spaceBetween_aa7c25",
        checkbox: "checkbox_aa7c25",
        checkmark: "checkmark_aa7c25",
        checkboxCircle: "checkboxCircle_aa7c25",
        tooltip: "tooltip_aa7c25",
      };
    },
    206378: function (e, n, t) {
      e.exports = {
        pageBody: "pageBody_c2efea",
        header: "header_c2efea",
        search: "search_c2efea",
        createButton: "createButton_c2efea",
        createButtonInner: "createButtonInner_c2efea",
        createIcon: "createIcon_c2efea",
        browser: "browser_c2efea",
      };
    },
    397405: function (e, n, t) {
      e.exports = {
        categoryRow: "categoryRow_f04d06",
        uncategorized: "uncategorized_f04d06",
        categoryText: "categoryText_f04d06",
        channelText: "channelText_f04d06",
        titleBadge: "titleBadge_f04d06",
        premiumIcon: "premiumIcon_f04d06",
        selectAll: "selectAll_f04d06",
        selectAllCheckbox: "selectAllCheckbox_f04d06",
        channelRow: "channelRow_f04d06",
        disabled: "disabled_f04d06",
        firstChannel: "firstChannel_f04d06",
        lastChannel: "lastChannel_f04d06",
        channelInfo: "channelInfo_f04d06",
        channelActions: "channelActions_f04d06",
        channelSubtitles: "channelSubtitles_f04d06",
        channelSubtitle: "channelSubtitle_f04d06",
        subtitleSeparator: "subtitleSeparator_f04d06",
        topic: "topic_f04d06",
        channelName: "channelName_f04d06",
        separator: "separator_f04d06",
        viewChannelButton: "viewChannelButton_f04d06",
        checkboxInner: "checkboxInner_f04d06",
        scrollerInner: "scrollerInner_f04d06",
      };
    },
    549522: function (e, n, t) {
      e.exports = {
        container: "container_b55df8",
        nuxContent: "nuxContent_b55df8",
        adminUpsell: "adminUpsell_b55df8",
        closeButton: "closeButton_b55df8",
        image: "image_b55df8",
        heading: "heading_b55df8",
        tip: "tip_b55df8",
        checkItOut: "checkItOut_b55df8",
      };
    },
  },
]);
//# sourceMappingURL=ac1af45604672c27d549.js.map
