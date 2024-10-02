"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38359"],
  {
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        v: function () {
          return g;
        },
      }),
        t(47120);
      var r,
        o,
        a,
        l = t(735250),
        i = t(470079),
        s = t(120356),
        c = t.n(s),
        u = t(536640),
        d = t(481060),
        m = t(981631),
        h = t(689938),
        v = t(404934);
      function p(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((a = r || (r = {})).TOP = "top"), (a.BOTTOM = "bottom");
      let g = {
        container: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: r } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: t ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: t ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: t ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, n) => {
          let { isSelected: t, isFocused: r } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : r
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
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class x extends (o = i.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: r,
              valueRenderer: o,
              optionRenderer: a,
              multiValueRenderer: i,
              options: s,
              value: m,
              autofocus: p,
              disabled: x,
              clearable: f,
              searchable: C,
              styleOverrides: b,
              isMulti: O,
              placeholder: N,
              filterOption: j,
              closeMenuOnSelect: _ = !0,
              ...M
            } = this.props,
            k = { ...M };
          null != p && (k.autoFocus = p),
            null != x && (k.isDisabled = x),
            null != f && (k.isClearable = f),
            null != C && (k.isSearchable = C);
          let Z = { IndicatorSeparator: () => null };
          null != a &&
            (Z.Option = (e) =>
              (0, l.jsx)(u.wx.Option, { ...e, children: a(e.data) })),
            null != o &&
              (Z.SingleValue = (e) =>
                (0, l.jsx)(u.wx.SingleValue, { ...e, children: o(e.data) })),
            null != i && (Z.MultiValue = (e) => i(e.data));
          if (O && Array.isArray(m)) {
            let n = {};
            s.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = m.map((e) => n[String(e)]));
          } else e = null != m ? s.find((e) => e.value === m) : null;
          return (0, l.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)("div", {
              className: c()(v.select, n, { [v.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, l.jsx)(u.ZP, {
                  ...k,
                  className: t,
                  ref: this._selectRef,
                  isMulti: O,
                  components: Z,
                  options: s,
                  styles: null != b ? b : g,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: _,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != N ? N : h.Z.Messages.SELECT,
                  noOptionsMessage: () => h.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: j,
                }),
                null != r
                  ? (0, l.jsx)("div", {
                      className: v.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "_selectRef", i.createRef()),
            p(this, "_containerRef", i.createRef()),
            p(this, "state", { isFocused: !1, isOpen: !1 }),
            p(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            p(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            p(this, "handleKeyDown", (e) => {
              e.which === m.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            p(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            p(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      p(x, "MenuPlacements", r);
    },
    968644: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        p: function () {
          return h;
        },
      });
      var r = t(442837),
        o = t(933557),
        a = t(592125),
        l = t(430824),
        i = t(699516),
        s = t(594174),
        c = t(823379),
        u = t(689938);
      function d(e, n, t) {
        return 0 === e.length
          ? ""
          : (t
              ? u.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO
              : u.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES
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
          p = (0, r.e7)([l.Z], () => (null != n ? l.Z.getRoles(n.id) : void 0)),
          g = (0, r.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(h)
              .map((e) => a.Z.getChannel(e))
              .filter(c.lm)
              .map((e) => (0, o.F6)(e, s.default, i.Z, !0)),
          ),
          x = Array.from(m)
            .map((e) => {
              var n;
              return null === (n = (null != p ? p : {})[e]) || void 0 === n
                ? void 0
                : n.name;
            })
            .filter(c.lm)
            .map((e) => "@".concat(e)),
          f = (null == t ? void 0 : t.singleSelect)
            ? ""
            : u.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS,
          C = "";
        if (0 === g.length && x.length > 0) f = d(x, v);
        else if (g.length > 0) {
          var b, O;
          (b = g),
            (O = v),
            (f =
              0 === b.length
                ? ""
                : u.Z.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                    count: b.length,
                    extraCount: Math.max(b.length - 2, 0),
                    channel1: b[0],
                    channel2: b[1],
                    itemHook: O,
                  })),
            x.length > 0 && (C = d(x, v, !0));
        }
        return { helpText: f, helpTextAdditional: C };
      }
      function h(e) {
        let {
            guild: n,
            prompt: t,
            selectedRoleIds: d,
            selectedChannelIds: m,
            itemHook: h,
          } = e,
          v = (0, r.e7)([l.Z], () => (null != n ? l.Z.getRoles(n.id) : void 0)),
          p = (0, r.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(m)
              .map((e) => a.Z.getChannel(e))
              .filter(c.lm)
              .map((e) => (0, o.F6)(e, s.default, i.Z, !0)),
          ),
          g = Array.from(d)
            .map((e) => {
              var n;
              return null === (n = (null != v ? v : {})[e]) || void 0 === n
                ? void 0
                : n.name;
            })
            .filter(c.lm)
            .map((e) => "@".concat(e)),
          x = (null == t ? void 0 : t.singleSelect)
            ? ""
            : u.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
        return (
          0 === p.length && g.length > 0
            ? (x = u.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                count: g.length,
                extraCount: Math.max(g.length - 2, 0),
                role1: g[0],
                role2: g[1],
                itemHook: h,
              }))
            : p.length > 0 && 0 === g.length
              ? (x = u.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
                  count: p.length,
                  extraCount: Math.max(p.length - 2, 0),
                  channel1: p[0],
                  channel2: p[1],
                  itemHook: h,
                }))
              : p.length > 0 &&
                g.length > 0 &&
                (x =
                  u.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format(
                    {
                      channelCount: p.length,
                      extraChannelCount: Math.max(p.length - 2, 0),
                      channel1: p[0],
                      channel2: p[1],
                      itemHook: h,
                      roleCount: g.length,
                      extraRoleCount: Math.max(g.length - 2, 0),
                      role1: g[0],
                      role2: g[1],
                    },
                  )),
          { helpText: x, helpTextAdditional: "" }
        );
      }
    },
    104265: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var r = t(735250),
        o = t(470079),
        a = t(120356),
        l = t.n(a),
        i = t(212433),
        s = t(399606),
        c = t(692547),
        u = t(780384),
        d = t(481060),
        m = t(596454),
        h = t(410030),
        v = t(339085),
        p = t(14263),
        g = t(689938),
        x = t(695352);
      function f(e) {
        let {
            guildId: n,
            option: t,
            selected: a,
            onSelect: f,
            hideMemberCount: C,
            canBeNew: b,
          } = e,
          O = (0, u.wj)((0, h.ZP)()),
          [N, j] = o.useState(!1),
          _ = N && !C,
          M = o.useRef(null),
          { reducedMotion: k } = o.useContext(
            d.AccessibilityPreferencesContext,
          ),
          Z = (0, s.e7)([v.ZP], () => {
            var e, n, r, o;
            return (
              (null === (e = t.emoji) || void 0 === e ? void 0 : e.id) !=
                null &&
              null !==
                (o =
                  null ===
                    (n = v.ZP.getCustomEmojiById(
                      null === (r = t.emoji) || void 0 === r ? void 0 : r.id,
                    )) || void 0 === n
                    ? void 0
                    : n.animated) &&
              void 0 !== o &&
              o
            );
          }),
          y = (0, p.Z)(n, 1e3),
          T =
            null == y || null == t.roleIds
              ? 0
              : Math.max(...t.roleIds.map((e) => y[e])),
          S = b && !a && t.isUnseen,
          w = (0, d.useSpring)(
            {
              transform: a || k.enabled ? "scale(1)" : "scale(0.7)",
              opacity: a ? 1 : 0,
              config: { duration: 150 },
            },
            "animate-always",
          ),
          I = (0, d.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
          R = (0, d.useToken)(c.Z.unsafe_rawColors.BRAND_500),
          E = (0, d.useSpring)(
            {
              from: { color: R.spring() },
              color: I.spring({ opacity: O ? 0.5 : 0.25 }),
              config: { duration: 300 },
              delay: 500,
            },
            "animate-always",
          ),
          A = (0, d.useTransition)(
            _,
            {
              from: {
                transform: k.enabled ? "translateX(0)" : "translateX(8px)",
                opacity: 0,
              },
              enter: { transform: "translateX(0)", opacity: 1 },
              leave: { opacity: 0 },
              trail: 400,
              config: { duration: 150 },
            },
            "animate-always",
          ),
          [D, B] = o.useState(!1);
        o.useEffect(() => {
          if (_)
            return (
              (M.current = setTimeout(() => {
                j(!1), (M.current = null);
              }, 3e3)),
              () => {
                null != M.current && clearTimeout(M.current);
              }
            );
        }, [_]);
        let L = l()(x.optionButtonWrapper, { [x.selected]: a, [x.pressed]: D }),
          P = S ? { borderColor: E.color } : {};
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(i.animated.div, {
            style: P,
            className: L,
            children: (0, r.jsxs)(d.Clickable, {
              className: l()(x.optionButton),
              onClick: () => {
                j(!a), f(!a);
              },
              onMouseDown: () => B(!0),
              onMouseUp: () => B(!1),
              children: [
                null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                  ? (0, r.jsx)(m.Z, {
                      animated: t.emoji.animated || Z,
                      className: x.buttonEmoji,
                      emojiId: t.emoji.id,
                      emojiName: t.emoji.name,
                    })
                  : null,
                (0, r.jsxs)("div", {
                  className: x.buttonText,
                  children: [
                    (0, r.jsx)(d.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: t.title,
                    }),
                    t.description.length > 0
                      ? (0, r.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: t.description,
                        })
                      : null,
                  ],
                }),
                (0, r.jsx)(i.animated.div, {
                  className: x.checkIcon,
                  style: w,
                  children: (0, r.jsx)(d.CheckmarkLargeIcon, {
                    size: "custom",
                    width: 10,
                    height: 10,
                    color: c.Z.unsafe_rawColors.WHITE_500.css,
                  }),
                }),
                A(
                  (e, n) =>
                    T > 0 &&
                    n &&
                    (0, r.jsx)(i.animated.div, {
                      className: x.memberCount,
                      style: e,
                      children: (0, r.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children:
                          g.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                            memberCount: T,
                          }),
                      }),
                    }),
                ),
                S &&
                  (0, r.jsx)(d.TextBadge, {
                    color: c.Z.unsafe_rawColors.BRAND_260.css,
                    text: g.Z.Messages.NEW,
                    className: x.newBadge,
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
          return p;
        },
      }),
        t(47120);
      var r = t(735250),
        o = t(470079),
        a = t(658722),
        l = t.n(a),
        i = t(692547),
        s = t(481060),
        c = t(596454),
        u = t(285888),
        d = t(689938),
        m = t(481455);
      function h(e) {
        return null != e && (null != e.id || null != e.name);
      }
      let v = {
        ...u.v,
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: r } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "8px 8px 0 0" : "8px",
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
          let { isSelected: t, isFocused: r } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : r
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
      function p(e) {
        let {
            options: n,
            value: t,
            onChange: a,
            canBeNew: p,
            memberCounts: g,
          } = e,
          x = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          f = o.useCallback(
            (e) => {
              var o, l, i, u;
              return (0, r.jsxs)("div", {
                className: m.selectValuePill,
                onMouseDown: x,
                children: [
                  h(e.emoji) &&
                    (0, r.jsx)(c.Z, {
                      emojiId:
                        null === (o = e.emoji) || void 0 === o ? void 0 : o.id,
                      emojiName:
                        null === (l = e.emoji) || void 0 === l
                          ? void 0
                          : l.name,
                      animated:
                        null !==
                          (u =
                            null === (i = e.emoji) || void 0 === i
                              ? void 0
                              : i.animated) &&
                        void 0 !== u &&
                        u,
                    }),
                  (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: e.title,
                  }),
                  (0, r.jsx)(s.Clickable, {
                    className: m.selectValuePillClose,
                    onClick: () => {
                      a(n.filter((n) => t.includes(n.id) && n.id !== e.id));
                    },
                    children: (0, r.jsx)(s.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                      className: m.selectValuePillCloseIcon,
                    }),
                  }),
                ],
              });
            },
            [a, n, t],
          ),
          C = o.useCallback(
            (e) => {
              var n, t, o, a;
              let l =
                  null == g || null == e.roleIds
                    ? 0
                    : Math.max(...e.roleIds.map((e) => g[e])),
                u = null != g && l > 0;
              return (0, r.jsxs)("div", {
                className: m.selectOption,
                children: [
                  (0, r.jsxs)("div", {
                    className: m.selectOptionTitle,
                    children: [
                      h(e.emoji) &&
                        (0, r.jsx)(c.Z, {
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
                              (a =
                                null === (o = e.emoji) || void 0 === o
                                  ? void 0
                                  : o.animated) &&
                            void 0 !== a &&
                            a,
                        }),
                      (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.title,
                      }),
                    ],
                  }),
                  p &&
                    e.isUnseen &&
                    (0, r.jsx)(s.TextBadge, {
                      color: i.Z.unsafe_rawColors.BRAND_260.css,
                      text: d.Z.Messages.NEW,
                      className: m.optionNewBadge,
                    }),
                  u &&
                    (0, r.jsx)("div", {
                      className: m.selectOptionMemberCount,
                      "data-hover": !0,
                      children: (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children:
                          d.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
                            memberCount: l,
                          }),
                      }),
                    }),
                ],
              });
            },
            [p, g],
          ),
          b = o.useCallback((e, n) => {
            let { data: t } = e;
            return (
              0 === n.length || l()(n.toLowerCase(), t.title.toLowerCase())
            );
          }, []);
        return (0, r.jsx)(u.Z, {
          styleOverrides: v,
          clearable: !1,
          isMulti: !0,
          options: n,
          onChange: a,
          value: t,
          closeMenuOnSelect: !1,
          multiValueRenderer: f,
          optionRenderer: C,
          filterOption: b,
        });
      }
    },
  },
]);
//# sourceMappingURL=4b39524720e584ed0181.js.map
