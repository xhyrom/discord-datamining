"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31072"],
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
      var l = t(735250),
        a = t(470079),
        i = t(442837),
        r = t(481060),
        s = t(239091),
        o = t(561472),
        c = t(36311),
        d = t(367907),
        u = t(188471),
        h = t(541716),
        m = t(526120),
        _ = t(563534),
        f = t(736052),
        C = t(665149),
        p = t(442336),
        x = t(910611),
        g = t(41776),
        N = t(703656),
        I = t(6025),
        E = t(592125),
        b = t(703558),
        Z = t(731290),
        v = t(430824),
        T = t(375954),
        j = t(594174),
        S = t(933557),
        R = t(287746),
        A = t(981631),
        O = t(689938),
        B = t(868912);
      function L(e) {
        let {
            channelId: n,
            baseChannelId: L,
            channelViewSource: M = "Split View",
            isResourceChannelView: w,
          } = e,
          P = (0, i.e7)([E.Z], () => E.Z.getChannel(n)),
          y = (0, i.e7)([v.Z], () =>
            v.Z.getGuild(null == P ? void 0 : P.getGuildId()),
          ),
          k = (0, i.e7)([j.default], () => j.default.getCurrentUser()),
          H = (0, i.e7)([Z.Z], () =>
            Z.Z.didAgree(null == P ? void 0 : P.guild_id),
          ),
          D = (null == k ? void 0 : k.nsfwAllowed) === !0,
          U = (0, S.ZP)(P),
          W = (0, i.e7)(
            [g.Z],
            () => (null == y ? void 0 : y.id) != null && g.Z.isLurking(y.id),
            [y],
          ),
          G = (0, f.Z)(n),
          F = (0, i.e7)([_.Z], () => {
            var e;
            return null ===
              (e = _.Z.getResourceForChannel(null == y ? void 0 : y.id, n)) ||
              void 0 === e
              ? void 0
              : e.title;
          }),
          z = a.useRef(!1);
        if (
          (a.useEffect(() => {
            null != P &&
              !z.current &&
              ((z.current = !0),
              (0, d.yw)(A.rMx.CHANNEL_OPENED, {
                ...(0, d.$H)(P.id),
                channel_view: M,
              }),
              (0, u.a)(A.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: P.id }));
          }, [P, M]),
          null == P || null == y)
        )
          return null;
        let V = [];
        return (!W && V.push((0, l.jsx)(p.Z, { channel: P }, "notifications")),
        V.push(
          (0, l.jsx)(
            C.ZP.Icon,
            {
              icon: r.XSmallIcon,
              tooltip: O.Z.Messages.CLOSE,
              onClick: () => I.Z.closeChannelSidebar(L),
            },
            "close",
          ),
        ),
        !P.isNSFW() || (D && H))
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(o.Z, { channel: P, draftType: b.d.ChannelMessage }),
                (0, l.jsx)(C.ZP, {
                  toolbar: V,
                  "aria-label": O.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                  children: (0, x.ud)({
                    channel: P,
                    channelName: G ? F : U,
                    guild: y,
                    inSidebar: !0,
                    handleContextMenu: (e) => {
                      (0, s.jW)(e, async () => {
                        let { default: e } = await t
                          .e("24783")
                          .then(t.bind(t, 439635));
                        return (n) =>
                          (0, l.jsx)(e, { ...n, channel: P, guild: y });
                      });
                    },
                    handleClick: () => {
                      let e = T.Z.getMessages(P.id);
                      if (w) {
                        (0, N.uL)(A.Z5c.CHANNEL(P.guild_id, P.id)),
                          (0, m.C3)(P.guild_id, null);
                        return;
                      }
                      (0, N.XU)(P.guild_id, P.id, e.jumpTargetId);
                    },
                  }),
                }),
                (0, l.jsx)("div", {
                  className: B.chat,
                  children: (0, l.jsx)(
                    R.Z,
                    { channel: P, guild: y, chatInputType: h.I.SIDEBAR },
                    n,
                  ),
                }),
              ],
            })
          : (0, l.jsx)(c.Z, { guild: y });
      }
    },
    905204: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(536091),
        t(653041),
        t(47120),
        t(724458);
      var l = t(470079),
        a = t(392711),
        i = t.n(a),
        r = t(442837),
        s = t(570140),
        o = t(724213),
        c = t(9156),
        d = t(630388),
        u = t(823379),
        h = t(549817),
        m = t(45966),
        _ = t(526761);
      function f(e) {
        s.Z.dispatch({
          type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
          guildId: e,
        });
      }
      let C = {};
      function p(e) {
        let n = (0, r.e7)(
          [m.Z],
          () => {
            var n;
            return null !== (n = m.Z.getPendingResponseOptions(e)) &&
              void 0 !== n
              ? n
              : C;
          },
          [e],
        );
        return (
          l.useEffect(() => (f(e), () => f(e)), [e]),
          l.useEffect(() => {
            null != n &&
              0 !== Object.keys(n).length &&
              h.Z.updateOnboardingResponses(e);
          }, [e, n]),
          {
            handleSelectOption: l.useCallback(
              (n, t, l) => {
                let a = m.Z.getOnboardingResponses(e),
                  { addedRoleIds: r, removedRoleIds: f } = (function (
                    e,
                    n,
                    t,
                    l,
                  ) {
                    var a, r, s, o, c;
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
                          null !== (s = null == t ? void 0 : t.roleIds) &&
                            void 0 !== s
                            ? s
                            : [],
                          null !== (o = n.roleIds) && void 0 !== o ? o : [],
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
                        s = a
                          .map((e) => e.roleIds)
                          .flat()
                          .filter(u.lm);
                      (d = []), (h = i().difference(r, s));
                    }
                    return { addedRoleIds: d, removedRoleIds: h };
                  })(n, t, l, a),
                  { addedChannelIds: C, removedChannelIds: p } = (function (e) {
                    var n, t, l, a, r;
                    let {
                        guildId: s,
                        prompt: c,
                        option: d,
                        selected: h,
                        responses: _,
                      } = e,
                      f = [],
                      C = [];
                    if (c.singleSelect && h) {
                      let e = c.options.find((e) => _.includes(e.id));
                      (f = i().difference(
                        null !== (n = d.channelIds) && void 0 !== n ? n : [],
                        null !== (t = null == e ? void 0 : e.channelIds) &&
                          void 0 !== t
                          ? t
                          : [],
                      )),
                        (C = i().difference(
                          null !== (l = null == e ? void 0 : e.channelIds) &&
                            void 0 !== l
                            ? l
                            : [],
                          null !== (a = d.channelIds) && void 0 !== a ? a : [],
                        ));
                    } else if (h)
                      (f =
                        null !== (r = d.channelIds) && void 0 !== r ? r : []),
                        (C = []);
                    else {
                      let e = c.options.filter((e) => _.includes(e.id)),
                        n = e.filter((e) => d.id !== e.id),
                        t = e
                          .map((e) => e.channelIds)
                          .flat()
                          .filter(u.lm),
                        l = n
                          .map((e) => e.channelIds)
                          .flat()
                          .filter(u.lm);
                      (f = []), (C = i().difference(t, l));
                    }
                    return (
                      (0, o.hi)(s) && f.push(...m.Z.getDefaultChannelIds(s)),
                      { addedChannelIds: f, removedChannelIds: C }
                    );
                  })({
                    guildId: e,
                    prompt: n,
                    option: t,
                    selected: l,
                    responses: a,
                  }),
                  x = C.reduce((n, t) => {
                    let l = c.ZP.getChannelIdFlags(e, t);
                    return (
                      (n[t] = { flags: (0, d.mB)(l, _.ic.OPT_IN_ENABLED, !0) }),
                      n
                    );
                  }, {}),
                  g = p.reduce((n, t) => {
                    let l = c.ZP.getChannelIdFlags(e, t);
                    return (
                      (n[t] = { flags: (0, d.mB)(l, _.ic.OPT_IN_ENABLED, !1) }),
                      n
                    );
                  }, {}),
                  N = { ...x, ...g };
                h.Z.selectOption(e, n.id, t.id, l),
                  s.Z.dispatch({
                    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                    guildId: e,
                    overrides: N,
                  }),
                  h.Z.updateRolesLocal(e, r, f);
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
      var l = t(470079),
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
            let s = n[r];
            s.isNew
              ? t.push(s)
              : s.hasNewAnswers
                ? (l.push(s), (e += s.options.filter((e) => e.isUnseen).length))
                : s.inOnboarding
                  ? i.push(s)
                  : a.push(s);
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
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(442837),
        o = t(704215),
        c = t(692547),
        d = t(481060),
        u = t(111028),
        h = t(252618),
        m = t(605236),
        _ = t(473403),
        f = t(984370),
        C = t(216306),
        p = t(104155),
        x = t(22082),
        g = t(703656),
        N = t(433355),
        I = t(592125),
        E = t(430824),
        b = t(944486),
        Z = t(31445),
        v = t(59350),
        T = t(290511),
        j = t(176505),
        S = t(921944),
        R = t(689938),
        A = t(312223),
        O = t(784237);
      function B(e) {
        let { guild: n, previousChannel: t } = e,
          i = (0, Z.Z)(n);
        a.useEffect(() => {
          (0, m.EW)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
            dismissAction: S.L.DISMISS,
          });
        });
        let r = i
            ? R.Z.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
                guildName: n.name,
              })
            : R.Z.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
                guildName: n.name,
              }),
          s = i
            ? R.Z.Messages.CHANNELS_AND_ROLES
            : R.Z.Messages.CHANNEL_BROWSER_TITLE;
        return (
          (0, h.Tt)({ location: r }),
          (0, l.jsxs)(f.Z, {
            className: A.header,
            innerClassname: A.innerHeader,
            hideSearch: !0,
            channelId: j.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
              null != t
                ? (0, l.jsx)(d.Button, {
                    className: A.returnButton,
                    size: d.Button.Sizes.SMALL,
                    look: d.Button.Looks.OUTLINED,
                    color: d.Button.Colors.PRIMARY,
                    onClick: () => {
                      null != t && (0, g.XU)(n.id, t.id);
                    },
                    children: (0, l.jsx)(d.Text, {
                      className: A.returnButtonText,
                      variant: "text-xs/medium",
                      color: "none",
                      children: R.Z.Messages.RETURN_TO_CHANNEL.format({
                        channelNameHook: () =>
                          null == t
                            ? null
                            : (0, l.jsxs)(
                                a.Fragment,
                                {
                                  children: [
                                    (0, l.jsx)(_._, {
                                      className: A.returnIcon,
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
              (0, l.jsx)(f.Z.Icon, {
                icon: d.ChannelListMagnifyingGlassIcon,
                "aria-hidden": !0,
              }),
              (0, l.jsx)(f.Z.Title, { children: s }),
            ],
          })
        );
      }
      function L(e) {
        let { guildId: n, selectedSection: t } = e,
          i = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
          o = (0, Z.Z)(i),
          [u, h] = a.useState(null != t ? t : T.l7.CUSTOMIZE);
        a.useEffect(() => {
          null != t && h(t);
        }, [t]);
        let m = (0, s.e7)([b.Z], () => b.Z.getLastSelectedChannelId(n)),
          _ = (0, s.e7)([N.ZP], () =>
            N.ZP.getCurrentSidebarChannelId(j.oC.CHANNEL_BROWSER),
          ),
          f = null != _ && u === T.l7.BROWSE,
          g = (0, s.e7)([I.Z], () => I.Z.getChannel(m)),
          S = (0, s.e7)([x.Z], () => x.Z.getNewChannelIds(n).size > 0),
          L = (0, C.fU)(n);
        return null == i
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  className: r()(O.chat, { [O.threadSidebarOpen]: f }),
                  children: [
                    (0, l.jsx)(B, { guild: i, previousChannel: g }),
                    (0, l.jsxs)("div", {
                      className: r()(O.content, A.container),
                      children: [
                        o &&
                          (0, l.jsxs)(d.TabBar, {
                            className: A.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: u,
                            onItemSelect: (e) => h(e),
                            children: [
                              (0, l.jsx)(
                                d.TabBar.Item,
                                {
                                  className: A.tabBarItem,
                                  id: T.l7.CUSTOMIZE,
                                  children:
                                    R.Z.Messages.OPT_IN_GUILD_NOTICE_CTA,
                                },
                                T.l7.CUSTOMIZE,
                              ),
                              (0, l.jsxs)(
                                d.TabBar.Item,
                                {
                                  className: A.tabBarItem,
                                  id: T.l7.BROWSE,
                                  "aria-label":
                                    R.Z.Messages.CHANNEL_BROWSER_TITLE,
                                  children: [
                                    R.Z.Messages.CHANNEL_BROWSER_TITLE,
                                    (0, l.jsx)(d.TextBadge, {
                                      text: S
                                        ? R.Z.Messages.CHANNEL_TYPE_NEW
                                        : L,
                                      color: S
                                        ? c.Z.unsafe_rawColors.BRAND_260.css
                                        : c.Z.colors.BACKGROUND_ACCENT.css,
                                      className: r()({ [A.newBadge]: S }),
                                    }),
                                  ],
                                },
                                T.l7.BROWSE,
                              ),
                            ],
                          }),
                        (() => {
                          switch (u) {
                            case T.l7.CUSTOMIZE:
                              return (0, l.jsx)(v.Z, {
                                guildId: n,
                                onBrowseChannels: () => h(T.l7.BROWSE),
                              });
                            case T.l7.BROWSE:
                            default:
                              return (0, l.jsx)(p.Z, { guildId: n });
                          }
                        })(),
                      ],
                    }),
                  ],
                }),
                f && (0, l.jsx)(p.I, { channelId: _ }),
              ],
            });
      }
    },
    59350: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return el;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(392711),
        o = t.n(s),
        c = t(526629),
        d = t(866442),
        u = t(442837),
        h = t(692547),
        m = t(780384),
        _ = t(481060),
        f = t(45114),
        C = t(131388),
        p = t(410030),
        x = t(1585),
        g = t(125988),
        N = t(44315),
        I = t(160404),
        E = t(240991),
        b = t(703656),
        Z = t(687158),
        v = t(287008),
        T = t(484459),
        j = t(271383),
        S = t(430824),
        R = t(306680),
        A = t(594174),
        O = t(823379),
        B = t(51144),
        L = t(998502),
        M = t(549817),
        w = t(745752),
        P = t(45966),
        y = t(637853),
        k = t(905204),
        H = t(968644),
        D = t(521941),
        U = t(614328),
        W = t(104265),
        G = t(588632),
        F = t(290511),
        z = t(981631),
        V = t(176505),
        Y = t(490897),
        q = t(689938),
        X = t(302137),
        Q = t(784237),
        K = t(554034);
      let J = _.AvatarSizes.SIZE_80,
        $ = "required";
      function ee(e) {
        var n;
        let { guild: t, user: i } = e,
          {
            avatarSrc: s,
            eventHandlers: c,
            isAvatarAnimating: h,
          } = (0, v.Z)({ user: i, guildId: t.id, size: 120 }),
          { avatarDecorationSrc: m } = (0, g.Z)({
            user: i,
            size: (0, x.y9)(J),
            onlyAnimateOnHover: !h,
          }),
          f = (0, u.e7)([j.ZP], () => j.ZP.getSelfMember(t.id)),
          C = (0, u.Wu)([j.ZP], () =>
            j.ZP.getMemberRoleWithPendingUpdates(t.id, i.id),
          ),
          p = (0, u.e7)([S.Z], () => S.Z.getRoles(t.id)),
          N = o()(C)
            .filter((e) => p.hasOwnProperty(e))
            .map((e) => p[e])
            .orderBy("position", "desc")
            .value(),
          I = (0, Z.ZP)(i.id, t.id);
        a.useEffect(() => {
          (0, T.Z)(i.id, i.getAvatarURL(t.id, (0, _.getAvatarSize)(J)), {
            guildId: t.id,
          });
        }, []);
        let b = (0, E.YP)(null == I ? void 0 : I.bio),
          R = L.ZP.getEnableHardwareAcceleration()
            ? _.AnimatedAvatar
            : _.Avatar;
        return (0, l.jsxs)("div", {
          className: X.profile,
          children: [
            (0, l.jsx)(_.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: q.Z.Messages.CUSTOMIZE_COMMUNITY_PROFILE,
            }),
            (0, l.jsx)(_.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: q.Z.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION,
            }),
            (0, l.jsxs)("div", {
              className: X.profileCard,
              children: [
                (0, l.jsx)("div", {
                  ...c,
                  children: (0, l.jsx)(R, {
                    src: s,
                    avatarDecoration: m,
                    size: J,
                    "aria-label": i.username,
                  }),
                }),
                (0, l.jsx)(_.Text, {
                  variant: "text-lg/medium",
                  color: "header-primary",
                  className: X.username,
                  children:
                    null !== (n = null == f ? void 0 : f.nick) && void 0 !== n
                      ? n
                      : B.ZP.getName(i),
                }),
                (0, l.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: r()(K.markup, X.bio),
                  children: b,
                }),
                null != N &&
                  N.length > 0 &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("hr", { className: X.separator }),
                      (0, l.jsx)(_.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        className: X.title,
                        children: q.Z.Messages.ROLES,
                      }),
                      (0, l.jsx)("div", {
                        className: X.roles,
                        children:
                          null == N
                            ? void 0
                            : N.map((e) => {
                                var n;
                                return (0, l.jsxs)(
                                  "div",
                                  {
                                    className: X.role,
                                    children: [
                                      (0, l.jsx)(_.RoleCircle, {
                                        color:
                                          null !== (n = e.colorString) &&
                                          void 0 !== n
                                            ? n
                                            : (0, d.Rf)(z.p6O),
                                        className: X.roleDot,
                                      }),
                                      (0, l.jsx)(_.Text, {
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
      function en(e) {
        var n;
        let { prompt: t, guild: i } = e,
          [s, o] = a.useState(null),
          [d, m] = a.useState(new Set()),
          f =
            null == t
              ? void 0
              : null === (n = t.options) || void 0 === n
                ? void 0
                : n.filter((e) => d.has(e.id)),
          C = (0, y.L6)(f),
          p = (0, y.dX)(f),
          x = (0, u.Wu)([P.Z], () =>
            P.Z.getOnboardingResponsesForPrompt(i.id, t.id),
          ),
          { helpText: g, helpTextAdditional: I } = (0, H.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: C,
            selectedChannelIds: p,
            itemHook: (e, n) =>
              (0, l.jsx)(
                _.Text,
                {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                },
                n,
              ),
          }),
          { handleSelectOption: E } = (0, k.Z)(i.id),
          b = (0, _.useToken)(h.Z.unsafe_rawColors.BRAND_500),
          Z = (0, _.useSpring)(
            {
              from: {
                color: t.isNew ? b.hex({ opacity: 1 }) : b.hex({ opacity: 0 }),
              },
              color: b.hex({ opacity: 0 }),
              config: { duration: 300 },
              delay: 500,
            },
            "animate-always",
          ),
          v = t.options.map((e) => ({ value: e.id, ...e })),
          T = t.options.filter((e) => x.includes(e.id)).map((e) => e.id);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(c.animated.div, {
            className: X.prompt,
            style: { borderColor: Z.color },
            children: [
              t.isNew &&
                (0, l.jsx)(_.TextBadge, {
                  color: (0, N.Lq)(z.Ilk.BRAND_260),
                  text: q.Z.Messages.NEW,
                  className: X.newBadge,
                }),
              (0, l.jsxs)(_.Heading, {
                className: X.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                  t.title,
                  t.required
                    ? (0, l.jsx)("span", {
                        className: r()(X.required, {
                          [X.error]: (null == s ? void 0 : s.type) === $,
                        }),
                        children: "*",
                      })
                    : null,
                ],
              }),
              (0, l.jsx)(G.Z, {
                options: v,
                value: T,
                onChange: (e) => {
                  let n = e.find((e) => !x.includes(e.id)),
                    l = e.map((e) => e.id);
                  if (null != n)
                    E(t, n, !0),
                      t.singleSelect &&
                        t.options.forEach((e) => d.delete(e.id)),
                      d.add(n.id);
                  else {
                    let e = x.filter((e) => !l.includes(e)),
                      n = t.options.filter((n) => e.includes(n.id));
                    if (x.length <= n.length && t.required) {
                      o({ type: $ });
                      return;
                    }
                    n.forEach((e) => {
                      E(t, e, !1), d.delete(e.id);
                    });
                  }
                  m(new Set(d)), o(null);
                },
                canBeNew: !t.isNew,
              }),
              (0, l.jsxs)(_.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.helpText,
                children: [g, " ", I],
              }),
            ],
          }),
        });
      }
      function et(e) {
        var n;
        let { prompt: t, guild: i } = e,
          [s, o] = a.useState(null),
          [d, m] = a.useState(new Set()),
          f =
            null == t
              ? void 0
              : null === (n = t.options) || void 0 === n
                ? void 0
                : n.filter((e) => d.has(e.id)),
          C = (0, y.L6)(f),
          p = (0, y.dX)(f),
          x = (0, u.Wu)([P.Z], () =>
            P.Z.getOnboardingResponsesForPrompt(i.id, t.id),
          ),
          { helpText: g, helpTextAdditional: I } = (0, H.p)({
            guild: i,
            prompt: t,
            selectedRoleIds: C,
            selectedChannelIds: p,
            itemHook: (e, n) =>
              (0, l.jsx)(
                _.Text,
                {
                  variant: "text-xs/medium",
                  color: "header-primary",
                  children: e,
                },
                n,
              ),
          }),
          { handleSelectOption: E } = (0, k.Z)(i.id),
          b = (e, n) => {
            if (!n && 1 === x.length && t.required) {
              o({ type: $ });
              return;
            }
            E(t, e, null != n && n),
              t.singleSelect && n && t.options.forEach((e) => d.delete(e.id)),
              n ? d.add(e.id) : d.delete(e.id),
              m(new Set(d)),
              o(null);
          },
          Z = (0, _.useToken)(h.Z.unsafe_rawColors.BRAND_500),
          v = (0, _.useSpring)(
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
            className: X.prompt,
            style: { borderColor: v.color },
            children: [
              t.isNew &&
                (0, l.jsx)(_.TextBadge, {
                  color: (0, N.Lq)(z.Ilk.BRAND_260),
                  text: q.Z.Messages.NEW,
                  className: X.newBadge,
                }),
              (0, l.jsxs)(_.Heading, {
                className: X.promptTitle,
                variant: "heading-md/semibold",
                color: "header-primary",
                children: [
                  t.title,
                  t.required
                    ? (0, l.jsx)("span", {
                        className: r()(X.required, {
                          [X.error]: (null == s ? void 0 : s.type) === $,
                        }),
                        children: "*",
                      })
                    : null,
                ],
              }),
              (0, l.jsx)("div", {
                className: X.promptOptions,
                children: t.options.map((e) =>
                  (0, l.jsx)(
                    W.Z,
                    {
                      hideMemberCount: !0,
                      guildId: i.id,
                      option: e,
                      onSelect: (n) => b(e, n),
                      selected: x.includes(e.id),
                      canBeNew: !t.isNew,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, l.jsxs)(_.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.helpText,
                children: [g, " ", I],
              }),
            ],
          }),
        });
      }
      function el(e) {
        let { guildId: n, onBrowseChannels: t } = e,
          i = (0, m.wj)((0, p.ZP)()),
          s = (0, u.e7)([S.Z], () => S.Z.getGuild(n)),
          o = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
          c = (0, C.Z)("(min-width: 1344px)") && null != o,
          d = a.useCallback(() => {
            (0, b.uL)(z.Z5c.CHANNEL(n, V.oC.CHANNEL_BROWSER)), null == t || t();
          }, [n, t]),
          h = (0, u.e7)([R.ZP], () =>
            R.ZP.hasUnread(n, Y.W.GUILD_ONBOARDING_QUESTION),
          ),
          {
            onboardingPromptsRaw: x,
            newOnboardingPrompts: g,
            onboardingPromptsWithNewAnswers: E,
            newAnswersCount: Z,
            onboardingPrompts: v,
          } = (0, D.Z)(n);
        a.useEffect(() => {
          if ((null == s ? void 0 : s.id) != null)
            !I.Z.isFullServerPreview(s.id) &&
              (P.Z.shouldFetchPrompts(s.id) || h) &&
              (0, w.eM)(s.id);
        }, [null == s ? void 0 : s.id, h]),
          a.useEffect(() => {
            if ((null == s ? void 0 : s.id) != null) {
              if (!I.Z.isFullServerPreview(s.id))
                return () => {
                  (0, f.Ju)(
                    s.id,
                    Y.W.GUILD_ONBOARDING_QUESTION,
                    P.Z.ackIdForGuild(s.id),
                  ),
                    M.Z.updateOnboardingResponses(s.id);
                };
            }
          }, [null == s ? void 0 : s.id]);
        let T = a.useCallback(
          (e) => {
            if (null == s) return null;
            switch (e.type) {
              case F.FN.MULTIPLE_CHOICE:
                return (0, l.jsx)(et, { prompt: e, guild: s }, e.id);
              case F.FN.DROPDOWN:
                return (0, l.jsx)(en, { prompt: e, guild: s }, e.id);
              default:
                (0, O.vE)(e.type);
            }
          },
          [s],
        );
        if (null == s) return null;
        if (0 === x.length) {
          let e = (0, N.Lq)(i ? z.Ilk.PRIMARY_300 : z.Ilk.PRIMARY_500),
            n = (0, N.Lq)(i ? z.Ilk.PRIMARY_700 : z.Ilk.PRIMARY_230);
          return (0, l.jsx)("div", {
            className: r()(Q.content, X.emptyPage),
            children: (0, l.jsxs)("div", {
              className: X.emptyContainer,
              children: [
                (0, l.jsx)(U.Z, {
                  className: X.emptyIcon,
                  foregroundColor: e,
                  backgroundColor: n,
                }),
                (0, l.jsx)(_.Heading, {
                  className: X.emptyHeader,
                  variant: "heading-md/semibold",
                  children: q.Z.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER,
                }),
                (0, l.jsx)(_.Text, {
                  variant: "text-sm/medium",
                  children:
                    q.Z.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
                      onBrowseChannels: d,
                    }),
                }),
              ],
            }),
          });
        }
        return (0, l.jsxs)(_.AdvancedScroller, {
          className: X.scroller,
          fade: !0,
          children: [
            (0, l.jsxs)("div", {
              className: X.pageBody,
              children: [
                (g.length > 0 || E.length > 0) &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        children: (0, l.jsx)(_.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          children:
                            q.Z.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                              count: g.length + Z,
                            }),
                        }),
                      }),
                      g.map(T),
                      E.map(T),
                      (0, l.jsx)("div", { className: X.sectionSeparator }),
                    ],
                  }),
                v.length > 0 &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)(_.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children:
                              q.Z.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format(
                                { count: v.length },
                              ),
                          }),
                          (0, l.jsx)(_.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children:
                              q.Z.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION,
                          }),
                        ],
                      }),
                      v.map(T),
                    ],
                  }),
              ],
            }),
            c && (0, l.jsx)(ee, { guild: s, user: o }),
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
      var l = t(735250);
      t(470079);
      var a = t(325767);
      function i(e) {
        let {
          width: n = 120,
          height: t = 80,
          backgroundColor: i,
          foregroundColor: r,
          ...s
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, a.Z)(s),
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
        s = t(630388),
        o = t(152376),
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
          o = (0, s.yE)(a, d.q.COMPLETED_ONBOARDING),
          u = r.ZP.getOptedInChannels(e).size > 0;
        return !l && !o && !u;
      }
      function h(e) {
        if (u(e)) {
          m(e);
          return;
        }
        {
          let n = (0, c.r1)(e);
          (0, o.QG)(e, !n);
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
      var l = t(470079),
        a = t(442837),
        i = t(570140),
        r = t(211739),
        s = t(680089),
        o = t(9156),
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
        let n = (0, a.e7)([o.ZP], () => o.ZP.getPendingChannelUpdates(e));
        return (
          l.useEffect(() => (h(e), () => h(e)), [e]),
          l.useEffect(() => {
            null != n && (0, c.C1)(e, n);
          }, [e, n]),
          {
            onChannelClick: l.useCallback((e, n, t) => {
              let l = o.ZP.isChannelOptedIn(e, n),
                a = n === t;
              !l && s.Z.isCollapsed(t) && null != t && (0, r.mJ)(t),
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
          return E;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        i = t(442837),
        r = t(481060),
        s = t(325708),
        o = t(213557),
        c = t(433355),
        d = t(324067),
        u = t(984933),
        h = t(430824),
        m = t(496675),
        _ = t(626135),
        f = t(216306),
        C = t(775028),
        p = t(981631),
        x = t(176505),
        g = t(689938),
        N = t(921213);
      function I(e) {
        let { channelId: n } = e;
        return (0, l.jsx)(s.Z, {
          sidebarType: s.y.ThreadSidebar,
          maxWidth: 600,
          children: (0, l.jsx)(o.Z, {
            channelId: n,
            baseChannelId: x.oC.CHANNEL_BROWSER,
          }),
        });
      }
      function E(e) {
        let { guildId: n } = e,
          [s, o] = a.useState(""),
          I = (0, i.e7)([h.Z], () => h.Z.getGuild(n)),
          E = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
          b = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
          Z = (0, f.Fo)(n, b, E, s),
          v = (0, i.e7)([m.Z], () =>
            m.Z.canWithPartialContext(p.Plq.MANAGE_CHANNELS, { guildId: n }),
          ),
          T = (0, i.e7)(
            [c.ZP],
            () => null != c.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER),
          ),
          j = a.useCallback(() => o(""), [o]),
          S = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                t.e("45094"),
                t.e("5324"),
              ]).then(t.bind(t, 218613));
              return (t) =>
                (0, l.jsx)(e, { ...t, channelType: null, guildId: n });
            });
          }, [n]);
        return null == I
          ? null
          : (0, l.jsxs)("div", {
              className: N.pageBody,
              children: [
                (0, l.jsxs)("div", {
                  className: N.header,
                  children: [
                    (0, l.jsx)(r.SearchBar, {
                      className: N.search,
                      size: r.SearchBar.Sizes.MEDIUM,
                      query: s,
                      onChange: (e) => {
                        "" === s &&
                          "" !== e &&
                          _.default.track(p.rMx.SEARCH_STARTED, {
                            search_type: "channel browser",
                          }),
                          o(e.toLowerCase());
                      },
                      onClear: j,
                      placeholder:
                        g.Z.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER,
                    }),
                    v
                      ? (0, l.jsxs)(r.Button, {
                          className: N.createButton,
                          innerClassName: N.createButtonInner,
                          onClick: S,
                          children: [
                            (0, l.jsx)(r.PlusSmallIcon, {
                              size: "sm",
                              color: "currentColor",
                              className: N.createIcon,
                            }),
                            g.Z.Messages.CREATE,
                          ],
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(C.Z, {
                  className: N.browser,
                  channels: E,
                  categories: Z,
                  guild: I,
                  hasSidebar: T,
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
          return s;
        },
        t4: function () {
          return o;
        },
      });
      var l = t(442837),
        a = t(9156),
        i = t(724213),
        r = t(689938);
      function s(e, n, t) {
        return (0, l.e7)([a.ZP], () => {
          var l, r, s;
          if (n === t) return a.ZP.isChannelOptedIn(e, n, !0);
          return (
            (l = e),
            (r = n),
            (s = a.ZP),
            !!(0, i.hi)(l) ||
              s.isChannelOptedIn(l, r, !0) ||
              (null != t && a.ZP.isChannelOptedIn(e, t, !0))
          );
        });
      }
      function o(e, n, t) {
        return (0, l.e7)(
          [a.ZP],
          () => n !== t && null != t && a.ZP.isChannelOptedIn(e, t, !0),
        );
      }
      function c(e, n) {
        return (0, l.e7)([a.ZP], () => {
          if (null != n && a.ZP.isChannelOptedIn(e, n, !0))
            return r.Z.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY;
        });
      }
    },
    775028: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(47120),
        t(653041),
        t(536091);
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        r = t.n(i),
        s = t(442837),
        o = t(704215),
        c = t(692547),
        d = t(481060),
        u = t(239091),
        h = t(111028),
        m = t(605236),
        _ = t(66999),
        f = t(549631),
        C = t(473403),
        p = t(454585),
        x = t(22082),
        g = t(703656),
        N = t(6025),
        I = t(922482),
        E = t(601070),
        b = t(216306),
        Z = t(163),
        v = t(753540),
        T = t(70297),
        j = t(981631),
        S = t(176505),
        R = t(689938),
        A = t(456944);
      let O = new Set([j.d4z.GUILD_FORUM, j.d4z.GUILD_MEDIA]),
        B = new Set([j.d4z.GUILD_VOICE, j.d4z.GUILD_STAGE_VOICE]);
      function L(e) {
        let { guild: n, channel: a, onCategoryClick: i } = e,
          s = (0, v.Mf)(n.id, a.id, a.id),
          o = (0, v.t4)(n.id, a.id, a.id);
        return (0, l.jsxs)("div", {
          className: r()(A.categoryRow, { [A.uncategorized]: "null" === a.id }),
          onContextMenu: (e) => {
            (0, u.jW)(e, async () => {
              let { default: e } = await t.e("8965").then(t.bind(t, 139035));
              return (t) => (0, l.jsx)(e, { ...t, channel: a, guild: n });
            });
          },
          children: [
            (0, l.jsx)(d.Text, {
              className: A.categoryText,
              color: "text-muted",
              variant: "text-xs/semibold",
              lineClamp: 1,
              children: a.name,
            }),
            "null" !== a.id &&
              !o &&
              (0, l.jsxs)(d.Clickable, {
                className: A.selectAll,
                onClick: () => {
                  !o && i(n.id, a.id, a.id);
                },
                children: [
                  (0, l.jsx)(d.Checkbox, {
                    className: A.selectAllCheckbox,
                    size: 14,
                    shape: d.Checkbox.Shapes.SMALL_BOX,
                    value: s,
                    type: d.Checkbox.Types.INVERTED,
                    displayOnly: !0,
                  }),
                  (0, l.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: R.Z.Messages.CHANNEL_BROWSER_SELECT_ALL,
                  }),
                ],
              }),
          ],
        });
      }
      let M = a.memo(function () {
          return (0, l.jsx)("div", { className: A.separator });
        }),
        w = a.memo(function (e) {
          let { index: n } = e;
          return (0, l.jsx)(
            d.Text,
            {
              variant: "text-xs/normal",
              className: A.subtitleSeparator,
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
              isFirstChannel: o,
              isLastChannel: m,
              onChannelClick: Z,
              tooltipDirection: T = "right",
            } = e,
            { isSubscriptionGated: L } = (0, _.Z)(n.id),
            P = (0, v.Mf)(i.id, n.id, a.id),
            y = (0, v.t4)(i.id, n.id, a.id),
            k = (0, v.EH)(i.id, a.id),
            H = (0, s.e7)([E.Z], () => E.Z.getActiveThreadCount(i.id, n.id)),
            D = (0, s.e7)([x.Z], () =>
              x.Z.shouldIndicateNewChannel(i.id, n.id),
            ),
            U = (e) => {
              if (!y) return e.stopPropagation(), Z(i.id, n.id, a.id), !0;
            },
            W = (e) => {
              n.isGuildVocal()
                ? (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      t.e("79695"),
                      t.e("18320"),
                      t.e("83331"),
                    ]).then(t.bind(t, 213202));
                    return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
                  })
                : (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      t.e("79695"),
                      t.e("18320"),
                      t.e("54310"),
                    ]).then(t.bind(t, 373651));
                    return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
                  });
            },
            G = (function (e, n) {
              let t = [];
              return (
                j.TPd.GUILD_THREADS_ONLY.has(e.type) &&
                  n >= 1 &&
                  t.push(
                    (0, l.jsx)(
                      d.Text,
                      {
                        variant: "text-xs/normal",
                        className: A.channelSubtitle,
                        children: R.Z.Messages.ACTIVE_FORUM_POST_COUNT.format({
                          count: n,
                        }),
                      },
                      "thread-count",
                    ),
                  ),
                !B.has(e.type) &&
                  t.push(
                    (0, l.jsx)(
                      d.Text,
                      {
                        variant: "text-xs/normal",
                        className: A.channelSubtitle,
                        children: (0, b.qw)(e.id),
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
                          className: A.topic,
                          variant: "text-xs/normal",
                          children: p.Z.parseTopic(e.topic, !0, {
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
                      w,
                      { index: n },
                      "subtitle-separator-".concat(n),
                    ),
                  ]),
                ]
                  .flat(2)
                  .slice(0, -1)
              );
            })(n, H),
            F = (e) =>
              (e.stopPropagation(), O.has(n.type) || e.shiftKey)
                ? ((0, g.XU)(i.id, n.id), !0)
                : n.isGuildStageVoice() || n.isGuildVoice()
                  ? ((0, I.Cq)(n), !0)
                  : (N.Z.openChannelAsSidebar({
                      guildId: n.guild_id,
                      channelId: n.id,
                      baseChannelId: S.oC.CHANNEL_BROWSER,
                    }),
                    !0),
            z = R.Z.Messages.CHANNEL_BROWSER_VIEW;
          n.isGuildStageVoice() || n.isGuildVoice()
            ? (z = R.Z.Messages.JOIN)
            : n.isForumLikeChannel() && (z = R.Z.Messages.OPEN);
          let V = y ? "text-muted" : "text-normal",
            Y = (0, d.useToken)(
              y ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_NORMAL,
            ).hex();
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(d.Tooltip, {
                text: k,
                delay: 500,
                position: T,
                children: (e) =>
                  (0, l.jsxs)(d.Clickable, {
                    className: r()(A.channelRow, {
                      [A.firstChannel]: o,
                      [A.lastChannel]: m,
                      [A.disabled]: y,
                    }),
                    ...e,
                    onClick: U,
                    onContextMenu: W,
                    children: [
                      (0, l.jsxs)("div", {
                        className: A.channelInfo,
                        children: [
                          (0, l.jsxs)("div", {
                            className: A.channelName,
                            children: [
                              (0, l.jsx)(C._, { channel: n, guild: i }),
                              (0, l.jsx)(h.Z, {
                                className: A.__invalid_name,
                                children: (0, l.jsx)(d.Text, {
                                  className: A.channelText,
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  color: V,
                                  children: n.name,
                                }),
                              }),
                              L
                                ? (0, l.jsx)(f.Z, {
                                    color: Y,
                                    className: A.premiumIcon,
                                  })
                                : null,
                              D
                                ? (0, l.jsx)(d.TextBadge, {
                                    text: R.Z.Messages.NEW,
                                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                                    className: A.titleBadge,
                                  })
                                : null,
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: A.channelSubtitles,
                            children: G,
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: A.channelActions,
                        children: [
                          (0, l.jsx)(d.Button, {
                            look: d.ButtonLooks.OUTLINED,
                            color: d.ButtonColors.PRIMARY,
                            size: d.ButtonSizes.SMALL,
                            className: A.viewChannelButton,
                            onClick: F,
                            children: z,
                          }),
                          (0, l.jsx)(d.Checkbox, {
                            "aria-checked": P,
                            value: P,
                            type: d.Checkbox.Types.INVERTED,
                            disabled: y,
                            innerClassName: A.checkboxInner,
                            displayOnly: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              !m && (0, l.jsx)(M, {}),
            ],
          });
        });
      function y(e) {
        let {
            categories: n,
            guild: t,
            className: i,
            innerClassName: s,
            hasSidebar: c,
          } = e,
          { onChannelClick: u } = (0, Z.Z)(t.id),
          h = (0, m.wE)(o.z.CHANNEL_BROWSER_NUX) ? 0 : -1,
          _ = a.useCallback(
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
          f = a.useCallback(
            (e) => {
              let { section: a, row: i } = e;
              if (0 === a && -1 === h) return (0, l.jsx)(T.Z, { guild: t });
              let r = n._categories[a + h],
                s = n[r.channel.id][i];
              return null == s
                ? null
                : (0, l.jsx)(
                    P,
                    {
                      category: r.channel,
                      channel: s.channel,
                      guild: t,
                      isFirstChannel: 0 === i,
                      isLastChannel: n[r.channel.id].length - 1 === i,
                      tooltipDirection: c ? "right" : "top",
                      onChannelClick: u,
                    },
                    s.channel.id,
                  );
            },
            [n, t, h, c, u],
          ),
          C = (0, T.q)(t.id),
          p = (0, b.tn)(t.id, n, 64, C);
        return (0, l.jsx)(
          d.ListAuto,
          {
            className: i,
            innerClassName: r()(s, A.scrollerInner),
            sectionHeight: 48,
            rowHeight: (e) => p[e].rowHeight,
            renderSection: _,
            renderRow: f,
            sections: p.map((e) => e.rowCount),
          },
          "channel-browser-list",
        );
      }
    },
    70297: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        q: function () {
          return p;
        },
      });
      var l = t(735250);
      t(470079);
      var a = t(120356),
        i = t.n(a),
        r = t(704215),
        s = t(481060),
        o = t(605236),
        c = t(434404),
        d = t(707076),
        u = t(398758),
        h = t(981631),
        m = t(921944),
        _ = t(689938),
        f = t(454868),
        C = t(697611);
      function p(e) {
        return (0, u.te)(e) ? 250 : 152;
      }
      function x(e) {
        let { guild: n } = e,
          t = (0, u.te)(n.id),
          a = (0, o.wE)(r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
          p =
            t && !a
              ? r.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL
              : r.z.CHANNEL_BROWSER_NUX;
        (0, o.kk)(p);
        let x = t
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(s.Heading, {
                      className: f.heading,
                      color: "always-white",
                      variant: "heading-lg/semibold",
                      children: _.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE,
                    }),
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "always-white",
                      children:
                        _.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION,
                    }),
                    (0, l.jsx)(s.Button, {
                      className: f.checkItOut,
                      onClick: () => {
                        c.Z.open(n.id, h.pNK.ONBOARDING),
                          (0, o.EW)(p, { dismissAction: m.L.PRIMARY });
                      },
                      color: s.Button.Colors.BRAND_INVERTED,
                      children: (0, l.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "none",
                        children: _.Z.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(d.j, { isTooltip: !0 }),
              ],
            })
          : (0, l.jsxs)("div", {
              className: f.nuxContent,
              children: [
                (0, l.jsx)("img", {
                  width: 180,
                  className: f.image,
                  src: C,
                  alt: "",
                  "aria-hidden": !0,
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(s.Heading, {
                      className: f.heading,
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: _.Z.Messages.CHANNEL_BROWSER_NUX_TITLE,
                    }),
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: _.Z.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION,
                    }),
                    (0, l.jsx)(s.Text, {
                      className: f.tip,
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children:
                        _.Z.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format(),
                    }),
                  ],
                }),
              ],
            });
        return (0, l.jsxs)("div", {
          className: i()(f.container, { [f.adminUpsell]: t }),
          children: [
            (0, l.jsx)(s.Clickable, {
              className: f.closeButton,
              onClick: () => {
                (0, o.EW)(p, { dismissAction: m.L.DISMISS });
              },
              children: (0, l.jsx)(s.XSmallIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            x,
          ],
        });
      }
    },
    404934: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    312223: function (e, n, t) {
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
    302137: function (e, n, t) {
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
    288617: function (e, n, t) {
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
    695352: function (e, n, t) {
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
    481455: function (e, n, t) {
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
    689937: function (e, n, t) {
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
    571413: function (e, n, t) {
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
    36766: function (e, n, t) {
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
    248641: function (e, n, t) {
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
    921213: function (e, n, t) {
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
    456944: function (e, n, t) {
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
    454868: function (e, n, t) {
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
//# sourceMappingURL=b5844036c8b4c6996b43.js.map
