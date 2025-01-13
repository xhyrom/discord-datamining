"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38359"],
  {
    968644: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
        p: function () {
          return h;
        },
      });
      var l = n(442837),
        o = n(933557),
        a = n(592125),
        r = n(430824),
        i = n(699516),
        s = n(594174),
        c = n(823379),
        d = n(388032);
      function u(e, t, n) {
        return 0 === e.length
          ? ""
          : d.intl.format(n ? d.t.cJZxWV : d.t.Kj5GIS, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t,
            });
      }
      function m(e) {
        let {
            guild: t,
            prompt: n,
            selectedRoleIds: m,
            selectedChannelIds: h,
            itemHook: v,
          } = e,
          x = (0, l.e7)([r.Z], () => (null != t ? r.Z.getRoles(t.id) : void 0)),
          g = (0, l.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(h)
              .map((e) => a.Z.getChannel(e))
              .filter(c.lm)
              .map((e) => (0, o.F6)(e, s.default, i.Z, !0)),
          ),
          p = Array.from(m)
            .map((e) => {
              var t;
              return null === (t = (null != x ? x : {})[e]) || void 0 === t
                ? void 0
                : t.name;
            })
            .filter(c.lm)
            .map((e) => "@".concat(e)),
          f = (null == n ? void 0 : n.singleSelect)
            ? ""
            : d.intl.string(d.t.JshhEh),
          j = "";
        if (0 === g.length && p.length > 0) f = u(p, v);
        else if (g.length > 0) {
          var C, b;
          (C = g),
            (b = v),
            (f =
              0 === C.length
                ? ""
                : d.intl.format(d.t.Rj841d, {
                    count: C.length,
                    extraCount: Math.max(C.length - 2, 0),
                    channel1: C[0],
                    channel2: C[1],
                    itemHook: b,
                  })),
            p.length > 0 && (j = u(p, v, !0));
        }
        return { helpText: f, helpTextAdditional: j };
      }
      function h(e) {
        let {
            guild: t,
            prompt: n,
            selectedRoleIds: u,
            selectedChannelIds: m,
            itemHook: h,
          } = e,
          v = (0, l.e7)([r.Z], () => (null != t ? r.Z.getRoles(t.id) : void 0)),
          x = (0, l.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(m)
              .map((e) => a.Z.getChannel(e))
              .filter(c.lm)
              .map((e) => (0, o.F6)(e, s.default, i.Z, !0)),
          ),
          g = Array.from(u)
            .map((e) => {
              var t;
              return null === (t = (null != v ? v : {})[e]) || void 0 === t
                ? void 0
                : t.name;
            })
            .filter(c.lm)
            .map((e) => "@".concat(e)),
          p = (null == n ? void 0 : n.singleSelect)
            ? ""
            : d.intl.string(d.t.JshhEh);
        return (
          0 === x.length && g.length > 0
            ? (p = d.intl.format(d.t.vdtNYW, {
                count: g.length,
                extraCount: Math.max(g.length - 2, 0),
                role1: g[0],
                role2: g[1],
                itemHook: h,
              }))
            : x.length > 0 && 0 === g.length
              ? (p = d.intl.format(d.t.ZKywGR, {
                  count: x.length,
                  extraCount: Math.max(x.length - 2, 0),
                  channel1: x[0],
                  channel2: x[1],
                  itemHook: h,
                }))
              : x.length > 0 &&
                g.length > 0 &&
                (p = d.intl.format(d.t.WewRHB, {
                  channelCount: x.length,
                  extraChannelCount: Math.max(x.length - 2, 0),
                  channel1: x[0],
                  channel2: x[1],
                  itemHook: h,
                  roleCount: g.length,
                  extraRoleCount: Math.max(g.length - 2, 0),
                  role1: g[0],
                  role2: g[1],
                })),
          { helpText: p, helpTextAdditional: "" }
        );
      }
    },
    104265: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var l = n(200651),
        o = n(192379),
        a = n(120356),
        r = n.n(a),
        i = n(208404),
        s = n(399606),
        c = n(692547),
        d = n(780384),
        u = n(481060),
        m = n(596454),
        h = n(410030),
        v = n(339085),
        x = n(14263),
        g = n(388032),
        p = n(268280);
      function f(e) {
        let {
            guildId: t,
            option: n,
            selected: a,
            onSelect: f,
            hideMemberCount: j,
            canBeNew: C,
          } = e,
          b = (0, d.wj)((0, h.ZP)()),
          [Z, y] = o.useState(!1),
          k = Z && !j,
          w = o.useRef(null),
          { reducedMotion: N } = o.useContext(
            u.AccessibilityPreferencesContext,
          ),
          T = (0, s.e7)([v.ZP], () => {
            var e, t, l, o;
            return (
              (null === (e = n.emoji) || void 0 === e ? void 0 : e.id) !=
                null &&
              null !==
                (o =
                  null ===
                    (t = v.ZP.getCustomEmojiById(
                      null === (l = n.emoji) || void 0 === l ? void 0 : l.id,
                    )) || void 0 === t
                    ? void 0
                    : t.animated) &&
              void 0 !== o &&
              o
            );
          }),
          I = (0, x.Z)(t, 1e3),
          M =
            null == I || null == n.roleIds
              ? 0
              : Math.max(...n.roleIds.map((e) => I[e])),
          R = C && !a && n.isUnseen,
          A = (0, u.useSpring)(
            {
              transform: a || N.enabled ? "scale(1)" : "scale(0.7)",
              opacity: a ? 1 : 0,
              config: { duration: 150 },
            },
            "animate-always",
          ),
          B = (0, u.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
          _ = (0, u.useToken)(c.Z.unsafe_rawColors.BRAND_500),
          E = (0, u.useSpring)(
            {
              from: { color: _.spring() },
              color: B.spring({ opacity: b ? 0.5 : 0.25 }),
              config: { duration: 300 },
              delay: 500,
            },
            "animate-always",
          ),
          S = (0, u.useTransition)(
            k,
            {
              from: {
                transform: N.enabled ? "translateX(0)" : "translateX(8px)",
                opacity: 0,
              },
              enter: { transform: "translateX(0)", opacity: 1 },
              leave: { opacity: 0 },
              trail: 400,
              config: { duration: 150 },
            },
            "animate-always",
          ),
          [D, O] = o.useState(!1);
        o.useEffect(() => {
          if (k)
            return (
              (w.current = setTimeout(() => {
                y(!1), (w.current = null);
              }, 3e3)),
              () => {
                null != w.current && clearTimeout(w.current);
              }
            );
        }, [k]);
        let P = r()(p.optionButtonWrapper, { [p.selected]: a, [p.pressed]: D }),
          W = R ? { borderColor: E.color } : {};
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(i.animated.div, {
            style: W,
            className: P,
            children: (0, l.jsxs)(u.Clickable, {
              className: r()(p.optionButton),
              onClick: () => {
                y(!a), f(!a);
              },
              onMouseDown: () => O(!0),
              onMouseUp: () => O(!1),
              children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                  ? (0, l.jsx)(m.Z, {
                      animated: n.emoji.animated || T,
                      className: p.buttonEmoji,
                      emojiId: n.emoji.id,
                      emojiName: n.emoji.name,
                    })
                  : null,
                (0, l.jsxs)("div", {
                  className: p.buttonText,
                  children: [
                    (0, l.jsx)(u.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: n.title,
                    }),
                    n.description.length > 0
                      ? (0, l.jsx)(u.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: n.description,
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(i.animated.div, {
                  className: p.checkIcon,
                  style: A,
                  children: (0, l.jsx)(u.CheckmarkLargeIcon, {
                    size: "custom",
                    width: 10,
                    height: 10,
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                  }),
                }),
                S(
                  (e, t) =>
                    M > 0 &&
                    t &&
                    (0, l.jsx)(i.animated.div, {
                      className: p.memberCount,
                      style: e,
                      children: (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: g.intl.format(g.t.EgKsZG, { memberCount: M }),
                      }),
                    }),
                ),
                R &&
                  (0, l.jsx)(u.TextBadge, {
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: g.intl.string(g.t.y2b7CA),
                    className: p.newBadge,
                  }),
              ],
            }),
          }),
        });
      }
    },
    588632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var l = n(200651),
        o = n(192379),
        a = n(658722),
        r = n.n(a),
        i = n(692547),
        s = n(481060),
        c = n(596454),
        d = n(285888),
        u = n(388032),
        m = n(52609);
      function h(e) {
        return null != e && (null != e.id || null != e.name);
      }
      let v = {
        ...d.v,
        control: (e, t) => {
          let { isDisabled: n, menuIsOpen: l } = t;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: l ? "8px 8px 0 0" : "8px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: n ? "not-allowed" : void 0,
            pointerEvents: n ? "none" : void 0,
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
        option: (e, t) => {
          let { isSelected: n, isFocused: l } = t;
          return {
            ...e,
            ...(n
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
      function x(e) {
        let {
            options: t,
            value: n,
            onChange: a,
            canBeNew: x,
            memberCounts: g,
          } = e,
          p = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          f = o.useCallback(
            (e) => {
              var o, r, i, d;
              return (0, l.jsxs)("div", {
                className: m.selectValuePill,
                onMouseDown: p,
                children: [
                  h(e.emoji) &&
                    (0, l.jsx)(c.Z, {
                      emojiId:
                        null === (o = e.emoji) || void 0 === o ? void 0 : o.id,
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
                      a(t.filter((t) => n.includes(t.id) && t.id !== e.id));
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
            [a, t, n],
          ),
          j = o.useCallback(
            (e) => {
              var t, n, o, a;
              let r =
                  null == g || null == e.roleIds
                    ? 0
                    : Math.max(...e.roleIds.map((e) => g[e])),
                d = null != g && r > 0;
              return (0, l.jsxs)("div", {
                className: m.selectOption,
                children: [
                  (0, l.jsxs)("div", {
                    className: m.selectOptionTitle,
                    children: [
                      h(e.emoji) &&
                        (0, l.jsx)(c.Z, {
                          emojiId:
                            null === (t = e.emoji) || void 0 === t
                              ? void 0
                              : t.id,
                          emojiName:
                            null === (n = e.emoji) || void 0 === n
                              ? void 0
                              : n.name,
                          animated:
                            null !==
                              (a =
                                null === (o = e.emoji) || void 0 === o
                                  ? void 0
                                  : o.animated) &&
                            void 0 !== a &&
                            a,
                        }),
                      (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.title,
                      }),
                    ],
                  }),
                  x &&
                    e.isUnseen &&
                    (0, l.jsx)(s.TextBadge, {
                      color: i.Z.unsafe_rawColors.BRAND_260.css,
                      text: u.intl.string(u.t.y2b7CA),
                      className: m.optionNewBadge,
                    }),
                  d &&
                    (0, l.jsx)("div", {
                      className: m.selectOptionMemberCount,
                      "data-hover": !0,
                      children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: u.intl.format(u.t.EgKsZG, { memberCount: r }),
                      }),
                    }),
                ],
              });
            },
            [x, g],
          ),
          C = o.useCallback((e, t) => {
            let { data: n } = e;
            return (
              0 === t.length || r()(t.toLowerCase(), n.title.toLowerCase())
            );
          }, []);
        return (0, l.jsx)(d.Z, {
          styleOverrides: v,
          clearable: !1,
          isMulti: !0,
          options: t,
          onChange: a,
          value: n,
          closeMenuOnSelect: !1,
          multiValueRenderer: f,
          optionRenderer: j,
          filterOption: C,
        });
      }
    },
  },
]);
//# sourceMappingURL=5150560e019ef8c795a8.js.map
