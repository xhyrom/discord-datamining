"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38359"],
  {
    968644: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        p: function () {
          return h;
        },
      });
      var l = t(442837),
        a = t(933557),
        o = t(592125),
        r = t(430824),
        i = t(699516),
        s = t(594174),
        c = t(823379),
        d = t(689938);
      function u(e, n, t) {
        return 0 === e.length
          ? ""
          : (t
              ? d.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO
              : d.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES
            ).format({
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: n,
            });
      }
      function m(e) {
        let {
            guild: n,
            prompt: t,
            selectedRoleIds: m,
            selectedChannelIds: h,
            itemHook: v,
          } = e,
          g = (0, l.e7)([r.Z], () => (null != n ? r.Z.getRoles(n.id) : void 0)),
          x = (0, l.Wu)([o.Z, s.default, i.Z], () =>
            Array.from(h)
              .map((e) => o.Z.getChannel(e))
              .filter(c.lm)
              .map((e) => (0, a.F6)(e, s.default, i.Z, !0)),
          ),
          p = Array.from(m)
            .map((e) => {
              var n;
              return null === (n = (null != g ? g : {})[e]) || void 0 === n
                ? void 0
                : n.name;
            })
            .filter(c.lm)
            .map((e) => "@".concat(e)),
          C = (null == t ? void 0 : t.singleSelect)
            ? ""
            : d.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS,
          f = "";
        if (0 === x.length && p.length > 0) C = u(p, v);
        else if (x.length > 0) {
          var N, j;
          (N = x),
            (j = v),
            (C =
              0 === N.length
                ? ""
                : d.Z.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                    count: N.length,
                    extraCount: Math.max(N.length - 2, 0),
                    channel1: N[0],
                    channel2: N[1],
                    itemHook: j,
                  })),
            p.length > 0 && (f = u(p, v, !0));
        }
        return { helpText: C, helpTextAdditional: f };
      }
      function h(e) {
        let {
            guild: n,
            prompt: t,
            selectedRoleIds: u,
            selectedChannelIds: m,
            itemHook: h,
          } = e,
          v = (0, l.e7)([r.Z], () => (null != n ? r.Z.getRoles(n.id) : void 0)),
          g = (0, l.Wu)([o.Z, s.default, i.Z], () =>
            Array.from(m)
              .map((e) => o.Z.getChannel(e))
              .filter(c.lm)
              .map((e) => (0, a.F6)(e, s.default, i.Z, !0)),
          ),
          x = Array.from(u)
            .map((e) => {
              var n;
              return null === (n = (null != v ? v : {})[e]) || void 0 === n
                ? void 0
                : n.name;
            })
            .filter(c.lm)
            .map((e) => "@".concat(e)),
          p = (null == t ? void 0 : t.singleSelect)
            ? ""
            : d.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
        return (
          0 === g.length && x.length > 0
            ? (p = d.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                count: x.length,
                extraCount: Math.max(x.length - 2, 0),
                role1: x[0],
                role2: x[1],
                itemHook: h,
              }))
            : g.length > 0 && 0 === x.length
              ? (p = d.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
                  count: g.length,
                  extraCount: Math.max(g.length - 2, 0),
                  channel1: g[0],
                  channel2: g[1],
                  itemHook: h,
                }))
              : g.length > 0 &&
                x.length > 0 &&
                (p =
                  d.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format(
                    {
                      channelCount: g.length,
                      extraChannelCount: Math.max(g.length - 2, 0),
                      channel1: g[0],
                      channel2: g[1],
                      itemHook: h,
                      roleCount: x.length,
                      extraRoleCount: Math.max(x.length - 2, 0),
                      role1: x[0],
                      role2: x[1],
                    },
                  )),
          { helpText: p, helpTextAdditional: "" }
        );
      }
    },
    104265: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        o = t(120356),
        r = t.n(o),
        i = t(212433),
        s = t(399606),
        c = t(692547),
        d = t(780384),
        u = t(481060),
        m = t(596454),
        h = t(410030),
        v = t(339085),
        g = t(14263),
        x = t(689938),
        p = t(695352);
      function C(e) {
        let {
            guildId: n,
            option: t,
            selected: o,
            onSelect: C,
            hideMemberCount: f,
            canBeNew: N,
          } = e,
          j = (0, d.wj)((0, h.ZP)()),
          [O, _] = a.useState(!1),
          Z = O && !f,
          T = a.useRef(null),
          { reducedMotion: M } = a.useContext(
            u.AccessibilityPreferencesContext,
          ),
          I = (0, s.e7)([v.ZP], () => {
            var e, n, l, a;
            return (
              (null === (e = t.emoji) || void 0 === e ? void 0 : e.id) !=
                null &&
              null !==
                (a =
                  null ===
                    (n = v.ZP.getCustomEmojiById(
                      null === (l = t.emoji) || void 0 === l ? void 0 : l.id,
                    )) || void 0 === n
                    ? void 0
                    : n.animated) &&
              void 0 !== a &&
              a
            );
          }),
          b = (0, g.Z)(n, 1e3),
          A =
            null == b || null == t.roleIds
              ? 0
              : Math.max(...t.roleIds.map((e) => b[e])),
          D = N && !o && t.isUnseen,
          E = (0, u.useSpring)(
            {
              transform: o || M.enabled ? "scale(1)" : "scale(0.7)",
              opacity: o ? 1 : 0,
              config: { duration: 150 },
            },
            "animate-always",
          ),
          k = (0, u.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
          y = (0, u.useToken)(c.Z.unsafe_rawColors.BRAND_500),
          S = (0, u.useSpring)(
            {
              from: { color: y.spring() },
              color: k.spring({ opacity: j ? 0.5 : 0.25 }),
              config: { duration: 300 },
              delay: 500,
            },
            "animate-always",
          ),
          R = (0, u.useTransition)(
            Z,
            {
              from: {
                transform: M.enabled ? "translateX(0)" : "translateX(8px)",
                opacity: 0,
              },
              enter: { transform: "translateX(0)", opacity: 1 },
              leave: { opacity: 0 },
              trail: 400,
              config: { duration: 150 },
            },
            "animate-always",
          ),
          [w, L] = a.useState(!1);
        a.useEffect(() => {
          if (Z)
            return (
              (T.current = setTimeout(() => {
                _(!1), (T.current = null);
              }, 3e3)),
              () => {
                null != T.current && clearTimeout(T.current);
              }
            );
        }, [Z]);
        let B = r()(p.optionButtonWrapper, { [p.selected]: o, [p.pressed]: w }),
          P = D ? { borderColor: S.color } : {};
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(i.animated.div, {
            style: P,
            className: B,
            children: (0, l.jsxs)(u.Clickable, {
              className: r()(p.optionButton),
              onClick: () => {
                _(!o), C(!o);
              },
              onMouseDown: () => L(!0),
              onMouseUp: () => L(!1),
              children: [
                null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                  ? (0, l.jsx)(m.Z, {
                      animated: t.emoji.animated || I,
                      className: p.buttonEmoji,
                      emojiId: t.emoji.id,
                      emojiName: t.emoji.name,
                    })
                  : null,
                (0, l.jsxs)("div", {
                  className: p.buttonText,
                  children: [
                    (0, l.jsx)(u.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: t.title,
                    }),
                    t.description.length > 0
                      ? (0, l.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: t.description,
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(i.animated.div, {
                  className: p.checkIcon,
                  style: E,
                  children: (0, l.jsx)(u.CheckmarkLargeIcon, {
                    size: "custom",
                    width: 10,
                    height: 10,
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                  }),
                }),
                R(
                  (e, n) =>
                    A > 0 &&
                    n &&
                    (0, l.jsx)(i.animated.div, {
                      className: p.memberCount,
                      style: e,
                      children: (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children:
                          x.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                            memberCount: A,
                          }),
                      }),
                    }),
                ),
                D &&
                  (0, l.jsx)(u.TextBadge, {
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: x.Z.Messages.NEW,
                    className: p.newBadge,
                  }),
              ],
            }),
          }),
        });
      }
    },
    588632: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        o = t(658722),
        r = t.n(o),
        i = t(692547),
        s = t(481060),
        c = t(596454),
        d = t(285888),
        u = t(689938),
        m = t(481455);
      function h(e) {
        return null != e && (null != e.id || null != e.name);
      }
      let v = {
        ...d.v,
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: l } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: l ? "8px 8px 0 0" : "8px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        valueContainer: (e) => ({
          ...e,
          padding: "8px",
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          cursor: "text",
        }),
        indicatorsContainer: (e) => ({
          ...e,
          alignItems: "flex-start",
          paddingTop: 4,
        }),
        option: (e, n) => {
          let { isSelected: t, isFocused: l } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : l
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
            "&:hover [data-hover=true]": { opacity: 1 },
          };
        },
      };
      function g(e) {
        let {
            options: n,
            value: t,
            onChange: o,
            canBeNew: g,
            memberCounts: x,
          } = e,
          p = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          C = a.useCallback(
            (e) => {
              var a, r, i, d;
              return (0, l.jsxs)("div", {
                className: m.selectValuePill,
                onMouseDown: p,
                children: [
                  h(e.emoji) &&
                    (0, l.jsx)(c.Z, {
                      emojiId:
                        null === (a = e.emoji) || void 0 === a ? void 0 : a.id,
                      emojiName:
                        null === (r = e.emoji) || void 0 === r
                          ? void 0
                          : r.name,
                      animated:
                        null !==
                          (d =
                            null === (i = e.emoji) || void 0 === i
                              ? void 0
                              : i.animated) &&
                        void 0 !== d &&
                        d,
                    }),
                  (0, l.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: e.title,
                  }),
                  (0, l.jsx)(s.Clickable, {
                    className: m.selectValuePillClose,
                    onClick: () => {
                      o(n.filter((n) => t.includes(n.id) && n.id !== e.id));
                    },
                    children: (0, l.jsx)(s.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: m.selectValuePillCloseIcon,
                    }),
                  }),
                ],
              });
            },
            [o, n, t],
          ),
          f = a.useCallback(
            (e) => {
              var n, t, a, o;
              let r =
                  null == x || null == e.roleIds
                    ? 0
                    : Math.max(...e.roleIds.map((e) => x[e])),
                d = null != x && r > 0;
              return (0, l.jsxs)("div", {
                className: m.selectOption,
                children: [
                  (0, l.jsxs)("div", {
                    className: m.selectOptionTitle,
                    children: [
                      h(e.emoji) &&
                        (0, l.jsx)(c.Z, {
                          emojiId:
                            null === (n = e.emoji) || void 0 === n
                              ? void 0
                              : n.id,
                          emojiName:
                            null === (t = e.emoji) || void 0 === t
                              ? void 0
                              : t.name,
                          animated:
                            null !==
                              (o =
                                null === (a = e.emoji) || void 0 === a
                                  ? void 0
                                  : a.animated) &&
                            void 0 !== o &&
                            o,
                        }),
                      (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.title,
                      }),
                    ],
                  }),
                  g &&
                    e.isUnseen &&
                    (0, l.jsx)(s.TextBadge, {
                      color: i.Z.unsafe_rawColors.BRAND_260.css,
                      text: u.Z.Messages.NEW,
                      className: m.optionNewBadge,
                    }),
                  d &&
                    (0, l.jsx)("div", {
                      className: m.selectOptionMemberCount,
                      "data-hover": !0,
                      children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children:
                          u.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                            memberCount: r,
                          }),
                      }),
                    }),
                ],
              });
            },
            [g, x],
          ),
          N = a.useCallback((e, n) => {
            let { data: t } = e;
            return (
              0 === n.length || r()(n.toLowerCase(), t.title.toLowerCase())
            );
          }, []);
        return (0, l.jsx)(d.Z, {
          styleOverrides: v,
          clearable: !1,
          isMulti: !0,
          options: n,
          onChange: o,
          value: t,
          closeMenuOnSelect: !1,
          multiValueRenderer: C,
          optionRenderer: f,
          filterOption: N,
        });
      }
    },
  },
]);
//# sourceMappingURL=0ba8b020f477002bfbf9.js.map
