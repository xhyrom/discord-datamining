"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80284"],
  {
    333848: function (e, t, l) {
      l(411104);
      var n = l(990547),
        a = l(283693),
        r = l(570140),
        s = l(408987),
        o = l(9156),
        i = l(621600),
        u = l(573261),
        c = l(87051),
        p = l(981631),
        h = l(526761);
      t.Z = {
        createChannel(e) {
          let {
            guildId: t,
            type: l,
            name: d,
            permissionOverwrites: g = [],
            bitrate: f,
            userLimit: v,
            parentId: E,
            skuId: y,
            branchId: C,
          } = e;
          r.Z.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
          let b = { type: l, name: d, permission_overwrites: g };
          if (
            (null != f && f !== p.epw && (b.bitrate = f),
            null != v && v > 0 && (b.user_limit = v),
            null != E && (b.parent_id = E),
            l === p.d4z.GUILD_STORE)
          ) {
            if (null == y) throw Error("Unexpected missing SKU");
            (b.sku_id = y), (b.branch_id = C);
          }
          return u.Z.post({
            url: p.ANM.GUILD_CHANNELS(t),
            body: b,
            oldFormErrors: !0,
            trackedActionData: {
              event: n.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) => {
                var t, l;
                return (0, a.iG)({
                  is_private: g.length > 0,
                  channel_id:
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.id,
                  channel_type:
                    null == e
                      ? void 0
                      : null === (l = e.body) || void 0 === l
                        ? void 0
                        : l.type,
                });
              },
            },
            rejectWithError: !1,
          }).then(
            (e) => (
              o.ZP.isOptInEnabled(t) &&
                c.Z.updateChannelOverrideSettings(
                  t,
                  e.body.id,
                  { flags: h.ic.OPT_IN_ENABLED },
                  i.ZB.OptedIn,
                ),
              s.Z.checkGuildTemplateDirty(t),
              e
            ),
            (e) => {
              throw (
                (r.Z.dispatch({
                  type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e)
              );
            },
          );
        },
        createRoleSubscriptionTemplateChannel: (e, t, l, r) =>
          u.Z.post({
            url: p.ANM.GUILD_CHANNELS(e),
            body: { name: t, type: l, topic: r },
            oldFormErrors: !0,
            trackedActionData: {
              event: n.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) => {
                var t, l;
                return (0, a.iG)({
                  is_private: !0,
                  channel_id:
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.id,
                  channel_type:
                    null == e
                      ? void 0
                      : null === (l = e.body) || void 0 === l
                        ? void 0
                        : l.type,
                });
              },
            },
            rejectWithError: !1,
          }),
      };
    },
    461745: function (e, t, l) {
      l.d(t, {
        BK: function () {
          return E;
        },
        Fj: function () {
          return n;
        },
      }),
        l(653041),
        l(47120);
      var n,
        a,
        r,
        s = l(200651),
        o = l(192379),
        i = l(120356),
        u = l.n(i),
        c = l(481060),
        p = l(565138),
        h = l(981631),
        d = l(388032),
        g = l(272786);
      function f(e, t, l) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = l),
          e
        );
      }
      let v = Object.freeze({
        SMALL: g.small,
        MEDIUM: g.medium,
        LARGE: g.large,
      });
      ((r = n || (n = {})).MEMBER = "MEMBER"),
        (r.ROLE = "ROLE"),
        (r.CHANNEL = "CHANNEL"),
        (r.GUILD = "GUILD"),
        (r.USER = "USER");
      let E = (e) => {
        let {
          hasContent: t,
          onClear: l,
          className: n,
          themeOverride: a,
          size: r = v.SMALL,
        } = e;
        return (0, s.jsx)(c.ThemeProvider, {
          theme: a,
          children: (e) =>
            (0, s.jsx)(c.Clickable, {
              className: u()(n, g.iconLayout, r, e, { [g.clear]: t }),
              onClick: (e) => {
                e.stopPropagation(), null != l && l(e);
              },
              onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
              },
              tabIndex: t ? 0 : -1,
              "aria-hidden": !t,
              "aria-label": d.intl.string(d.t["78fJND"]),
              focusProps: { offset: 4 },
              children: (0, s.jsxs)("div", {
                className: g.iconContainer,
                children: [
                  (0, s.jsx)(c.MagnifyingGlassIcon, {
                    size: "md",
                    color: "currentColor",
                    className: u()({ [g.icon]: !0, [g.visible]: !t }),
                  }),
                  (0, s.jsx)(c.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: u()({ [g.icon]: !0, [g.visible]: t }),
                  }),
                ],
              }),
            }),
        });
      };
      class y extends (a = o.Component) {
        componentDidUpdate(e) {
          let { focusAfterReady: t, isReady: l } = this.props;
          t && !e.isReady && l && this.focus();
        }
        handleKeyDownGrid(e) {
          let {
            selectedRow: t,
            selectedColumn: l,
            sections: n,
            query: a,
            tags: r,
            onSelectionChange: s,
            onSelect: o,
            onRemoveTag: i,
            preventEscapePropagation: u,
          } = this.props;
          if (0 !== n.length) {
            switch (e.keyCode) {
              case h.yXg.BACKSPACE:
                (null == a || 0 === a.length) &&
                  null != r &&
                  r.length > 0 &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  null == i || i(r.length - 1));
                break;
              case h.yXg.ARROW_DOWN:
                e.preventDefault(),
                  e.stopPropagation(),
                  -1 === t
                    ? ((t = 0), (l = 0))
                    : ((t += 1) >= n.length && (t = n.length - 1),
                      l >= n[t] && (l = n[t] - 1));
                break;
              case h.yXg.ARROW_UP:
                e.preventDefault(),
                  e.stopPropagation(),
                  (t -= 1) < 0
                    ? ((t = 0), (l = 0))
                    : l >= n[t] && (l = n[t] - 1);
                break;
              case h.yXg.ARROW_LEFT:
                e.preventDefault(),
                  e.stopPropagation(),
                  -1 === t && (t = 0),
                  (l -= 1) < 0 &&
                    ((t -= 1) >= 0
                      ? (l = n[t] - 1)
                      : t < 0 && ((t = 0), (l = 0)));
                break;
              case h.yXg.ARROW_RIGHT:
                e.preventDefault(),
                  e.stopPropagation(),
                  -1 === t && (t = 0),
                  (l += 1) >= n[t] &&
                    ((l = 0),
                    (t += 1) >= n.length &&
                      ((t = n.length - 1), (l = n[t] - 1)));
                break;
              case h.yXg.ENTER:
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  -1 === t && (t = 0),
                  -1 === l && (l = 0),
                  t >= n.length || l >= n[t])
                )
                  return;
                null != o && o(t, l, e);
                return;
              case h.yXg.ESCAPE:
                e.preventDefault(),
                  u && e.stopPropagation(),
                  null != o && o(null, null, e);
                return;
              default:
                return;
            }
            null != s && s(t, l);
          }
        }
        handleKeyDownList(e) {
          let {
              sections: t,
              selectedSection: l,
              selectedRow: n,
              onSelect: a,
              onSelectionChange: r,
              query: s,
              tags: o,
              preventEscapePropagation: i,
            } = this.props,
            { current: u } = this.ref;
          if (null != u)
            switch (e.keyCode) {
              case h.yXg.BACKSPACE:
                if (
                  (null == s || 0 === s.length) &&
                  null != o &&
                  o.length > 0
                ) {
                  var c, p;
                  e.preventDefault(),
                    e.stopPropagation(),
                    null === (c = (p = this.props).onRemoveTag) ||
                      void 0 === c ||
                      c.call(p, o.length - 1);
                }
                break;
              case h.yXg.ARROW_DOWN:
                e.preventDefault(),
                  e.stopPropagation(),
                  t.length > l &&
                    ++n >= t[l] &&
                    (++l >= t.length && (l = 0), (n = 0)),
                  null == r || r(l, n);
                break;
              case h.yXg.ARROW_UP:
                e.preventDefault(),
                  e.stopPropagation(),
                  --n < 0 && (--l < 0 && (l = t.length - 1), (n = t[l] - 1)),
                  null == r || r(l, n);
                break;
              case h.yXg.ENTER:
                e.preventDefault(),
                  e.stopPropagation(),
                  t.length > l && t[l] > n && (null == a || a(l, n, e));
                break;
              case h.yXg.ESCAPE:
                e.preventDefault(),
                  i && e.stopPropagation(),
                  null == a || a(null, null, e),
                  u.blur();
            }
        }
        render() {
          let {
              autoFocus: e,
              query: t,
              placeholder: l = d.intl.string(d.t.LzcpeX),
              themeOverride: n,
              disabled: a,
              onClear: r,
              size: o,
              maxHeight: i,
              tags: h,
              onActivate: f,
              className: v,
              inputProps: y,
              focusAfterReady: C,
            } = this.props,
            b = null != t && t.length > 0,
            m = !1,
            R = [];
          return (
            null != h &&
              h.length > 0 &&
              ("string" == typeof h[0]
                ? h.forEach((e, t) =>
                    R.push(
                      (0, s.jsxs)(
                        c.Anchor,
                        {
                          focusProps: { offset: 4 },
                          className: g.tag,
                          onClick: this.handleRemoveTag.bind(this, t),
                          children: [
                            e,
                            (0, s.jsx)(c.XSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: g.close,
                              "aria-label": d.intl.string(d.t.N86XcH),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  )
                : ((m = !0),
                  h.forEach((e, t) =>
                    R.push(
                      (0, s.jsxs)(
                        c.Anchor,
                        {
                          className: u()(g.tag, g.richTag),
                          onClick: this.handleRemoveTag.bind(this, t),
                          children: [
                            ("MEMBER" === e.type || "USER" === e.type) &&
                              null != e.avatar &&
                              (0, s.jsx)(c.Avatar, {
                                src: e.avatar,
                                "aria-hidden": !0,
                                size: c.AvatarSizes.SIZE_16,
                              }),
                            "ROLE" === e.type &&
                              null != e.color &&
                              (0, s.jsx)("span", {
                                className: g.tagRoleColor,
                                style: { backgroundColor: e.color },
                              }),
                            "GUILD" === e.type &&
                              null != e.guild &&
                              (0, s.jsx)(p.Z, {
                                guild: e.guild,
                                active: !0,
                                size: p.Z.Sizes.SMOL,
                              }),
                            (0, s.jsx)("span", {
                              className: g.tagLabel,
                              children: e.label,
                            }),
                            (0, s.jsx)(c.XSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: g.close,
                              "aria-label": d.intl.string(d.t.N86XcH),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  ))),
            (0, s.jsx)(c.FocusRing, {
              focusTarget: this.ref,
              ringTarget: this.containerRef,
              children: (0, s.jsx)(c.ThemeProvider, {
                theme: n,
                children: (p) =>
                  (0, s.jsx)("div", {
                    ref: this.containerRef,
                    className: u()(v, g.container, o, p, { [g.disabled]: a }),
                    children: (0, s.jsxs)(c.ScrollerThin, {
                      className: g.inner,
                      style: { maxHeight: i },
                      children: [
                        R,
                        (0, s.jsx)("input", {
                          className: u()(g.input, { [g.richTagInput]: m }),
                          type: "text",
                          ref: this.ref,
                          spellCheck: "false",
                          placeholder: l,
                          value: t,
                          onChange: this.handleChange,
                          onKeyDown: this.handleKeyDown,
                          onFocus: this.handleFocus,
                          disabled: a,
                          "aria-disabled": a,
                          autoFocus: !C && e,
                          onMouseDown: f,
                          ...this.defaultInputProps,
                          ...y,
                        }),
                        null != r
                          ? (0, s.jsx)(E, {
                              size: o,
                              themeOverride: n,
                              hasContent: b,
                              onClear: this.handleClear,
                            })
                          : null,
                      ],
                    }),
                  }),
              }),
            })
          );
        }
        constructor(...e) {
          super(...e),
            f(this, "defaultInputProps", {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-autocomplete": "list",
            }),
            f(this, "ref", o.createRef()),
            f(this, "containerRef", o.createRef()),
            f(this, "handleKeyDown", (e) => {
              let {
                onActivate: t,
                onKeyDown: l,
                onQueryChange: n,
                useKeyboardNavigation: a,
              } = this.props;
              null != l && l(e);
              let { current: r } = this.ref;
              if (null == r || null != t) {
                e.keyCode !== h.yXg.TAB && null != t && t(e);
                return;
              }
              if (
                e.keyCode === h.yXg.ESCAPE &&
                null != r.value &&
                "" !== r.value &&
                r.value.length > 0
              ) {
                (r.value = ""), null != n && n("");
                return;
              }
              a &&
                (this.props.gridResults
                  ? this.handleKeyDownGrid(e)
                  : this.handleKeyDownList(e));
            }),
            f(this, "handleChange", (e) => {
              let { onQueryChange: t } = this.props;
              null != t && t(e.currentTarget.value);
            }),
            f(this, "handleFocus", (e) => {
              let { onFocus: t } = this.props;
              null != t && t(e);
            }),
            f(this, "handleClear", () => {
              let { onClear: e } = this.props,
                { current: t } = this.ref;
              null != e && e(), null != t && t.focus();
            }),
            f(this, "handleRemoveTag", (e) => {
              let { onRemoveTag: t } = this.props;
              null == t || t(e);
            }),
            f(this, "focus", () => {
              let { current: e } = this.ref;
              null != e && e.focus();
            });
        }
      }
      f(y, "Sizes", v),
        f(y, "defaultProps", {
          size: v.SMALL,
          query: "",
          sections: [],
          selectedSection: 0,
          selectedRow: -1,
          selectedColumn: -1,
          gridResults: !1,
          disabled: !1,
          autoFocus: !1,
          preventEscapePropagation: !0,
          useKeyboardNavigation: !0,
        }),
        (t.ZP = y);
    },
  },
]);
//# sourceMappingURL=7ef1cb86a794b3e683c0.js.map
