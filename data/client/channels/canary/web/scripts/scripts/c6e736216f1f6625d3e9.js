"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75116"],
  {
    309095: function (e) {
      e.exports = "/assets/a221ecd0f9f14fe4d0b1.svg";
    },
    316491: function (e) {
      e.exports = "/assets/490943c0bf8c5298a2a5.svg";
    },
    925442: function (e) {
      e.exports = "/assets/ec411ddc89957ad4437f.svg";
    },
    301358: function (e) {
      e.exports = "/assets/8bd0c5b096e166c5857f.svg";
    },
    677374: function (e) {
      e.exports = "/assets/fd1cb3327bd32ffe9857.svg";
    },
    230608: function (e) {
      e.exports = "/assets/6f359ddf39030653583f.svg";
    },
    776226: function (e) {
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    514811: function (e) {
      e.exports = "/assets/ee13a11e73ea9186983a.svg";
    },
    27377: function (e) {
      e.exports = "/assets/0d535049ff35afa34f01.svg";
    },
    299603: function (e) {
      e.exports = "/assets/44cb292e6456da9c4afc.svg";
    },
    521715: function (e) {
      e.exports = "/assets/728b7f566154f33cc8d9.svg";
    },
    225433: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(120356),
        a = s.n(l),
        i = s(481060),
        r = s(689938),
        o = s(642769);
      let d = Object.freeze({ DEFAULT: o.default, FILLED: o.filled });
      function c(e) {
        let {
          className: t,
          onClick: s,
          "aria-label": l,
          look: c = d.DEFAULT,
        } = e;
        return (0, n.jsx)(i.Clickable, {
          "aria-label": null != l ? l : r.Z.Messages.REMOVE,
          className: a()(o.button, c, t),
          onClick: s,
        });
      }
      c.Looks = d;
    },
    668390: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return E;
        },
      }),
        s(47120);
      var n = s(735250),
        l = s(470079),
        a = s(120356),
        i = s.n(a),
        r = s(780384),
        o = s(481060),
        d = s(239091),
        c = s(741247),
        u = s(75464),
        h = s(689938),
        m = s(160721);
      function g(e) {
        let { role: t, guild: a } = e,
          [r, u] = l.useState(!1);
        return (0, c.useHasGuildRoleItems)(a, t)
          ? (0, n.jsx)(o.Clickable, {
              onClick: (e) => {
                u(!0),
                  (0, d.jW)(
                    e,
                    async () => {
                      let { default: e } = await Promise.resolve().then(
                        s.bind(s, 741247),
                      );
                      return (s) => (0, n.jsx)(e, { ...s, role: t, guild: a });
                    },
                    { onClose: () => u(!1) },
                  );
              },
              className: i()(m.roleOverflow, { [m.open]: r }),
              children: (0, n.jsx)(o.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
              }),
            })
          : null;
      }
      function E(e) {
        let {
            color: t,
            id: a,
            role: i,
            guild: c,
            children: E,
            isDragging: T,
            selectedItem: p,
            onItemSelect: N,
            itemType: _,
            locked: S,
            lockTooltip: x,
            showContextMenu: f,
            theme: C,
            roleStyle: M,
            "aria-label": I,
          } = e,
          R = l.useCallback(
            (e) => {
              (0, d.jW)(e, async () => {
                let { default: e } = await s.e("5396").then(s.bind(s, 731646));
                return (t) =>
                  (0, n.jsx)(e, {
                    ...t,
                    id: a,
                    label: h.Z.Messages.COPY_ID_ROLE,
                  });
              });
            },
            [a],
          );
        return T
          ? (0, n.jsx)("div", { className: m.dragged })
          : (0, n.jsx)(o.TabBar.Item, {
              className: m.role,
              id: a,
              selectedItem: p,
              onItemSelect: N,
              itemType: _,
              "aria-label": null != x ? "".concat(I, ", ").concat(x) : I,
              children: (0, n.jsxs)("div", {
                className: m.roleContent,
                children: [
                  "dot" === M
                    ? (0, n.jsx)(o.RoleDot, {
                        color: null != t ? t : void 0,
                        className: m.roleDot,
                        background: !1,
                        tooltip: !1,
                      })
                    : (0, n.jsx)(o.RoleCircle, {
                        color: null != t ? t : void 0,
                        className: m.roleCircle,
                      }),
                  (function () {
                    if (!S) return null;
                    let e = (0, r.wj)(C) ? s(27377) : s(514811);
                    return (0, n.jsx)(o.Tooltip, {
                      text: x,
                      color: o.Tooltip.Colors.RED,
                      children: (t) =>
                        (0, n.jsx)(u.Z, { className: m.lock, src: e, ...t }),
                    });
                  })(),
                  (0, n.jsx)("div", {
                    className: m.roleInner,
                    onContextMenu: R,
                    children: E,
                  }),
                  f && null != i ? (0, n.jsx)(g, { guild: c, role: i }) : null,
                ],
              }),
            });
      }
    },
    852860: function (e, t, s) {
      s(47120);
      var n = s(735250),
        l = s(470079),
        a = s(567526),
        i = s(692547),
        r = s(481060),
        o = s(585483),
        d = s(981631),
        c = s(689938),
        u = s(591318);
      t.Z = function (e) {
        var t;
        let {
            message: s,
            errorMessage: h,
            submitting: m,
            onReset: g,
            onSave: E,
            onSaveText: T,
            onResetText: p,
            onSaveButtonColor: N,
            disabled: _,
            saveButtonTooltip: S,
          } = e,
          x = l.useRef(null),
          [{ spring: f }, C] = (0, r.useSpring)(() => ({ spring: 0 }));
        l.useEffect(() => {
          function e() {
            C({ spring: 1, config: a.config.gentle }),
              C({ spring: 0, config: a.config.gentle, delay: 1e3 });
          }
          return (
            o.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e),
            () => {
              o.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [C]);
        let M = f.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(i.Z.colors.TEXT_NORMAL).hex(),
              (0, r.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          I = f.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(i.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, r.useToken)(i.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          R = f.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(i.Z.colors.TEXT_DANGER).hex(),
              (0, r.useToken)(i.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, n.jsx)(a.animated.div, {
          className: u.container,
          style: { backgroundColor: I },
          children: (0, n.jsx)("div", {
            className: u.flexContainer,
            ref: x,
            children: (0, n.jsxs)(r.FocusRingScope, {
              containerRef: x,
              children: [
                (0, n.jsx)("div", {
                  className: u.shrinkingContainer,
                  children: (0, n.jsx)(a.animated.div, {
                    className: u.message,
                    style: { color: null != h ? R : M },
                    children:
                      null !== (t = null != h ? h : s) && void 0 !== t
                        ? t
                        : c.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: u.actions,
                  children: [
                    null != g &&
                      (0, n.jsx)(r.Button, {
                        className: u.resetButton,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: g,
                        children: (0, n.jsx)(a.animated.span, {
                          style: { color: M },
                          children: null != p ? p : c.Z.Messages.RESET,
                        }),
                      }),
                    null != E
                      ? (0, n.jsx)(r.Tooltip, {
                          text: S,
                          children: (e) =>
                            (0, n.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              color: null != N ? N : r.Button.Colors.GREEN,
                              submitting: m,
                              disabled: _,
                              onClick: E,
                              ...e,
                              children:
                                null != T ? T : c.Z.Messages.SAVE_CHANGES,
                            }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    129865: function (e, t, s) {
      var n = s(818083);
      t.Z = (0, n.B)({
        kind: "guild",
        id: "2024-03_advanced_slowmode_input",
        label: "advanced slowmode input",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "enable the advanced slowmode input",
            config: { enabled: !0 },
          },
        ],
      });
    },
    940639: function (e, t, s) {
      s(653041), s(47120), s(724458);
      var n,
        l = s(735250),
        a = s(470079),
        i = s(120356),
        r = s.n(i),
        o = s(442837),
        d = s(481060),
        c = s(607070),
        u = s(251625),
        h = s(226951),
        m = s(981631),
        g = s(689938),
        E = s(449730);
      function T(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class p extends (n = a.Component) {
        getSelectedSection(e) {
          let { selectedSection: t } = this.state;
          if (null != t) return t;
          for (let t = 0; t < e.length; t++) if (e[t].length > 0) return t;
          return 0;
        }
        componentDidMount() {
          this.focus();
        }
        render() {
          let { position: e } = this.props,
            t = this.getRows(),
            s = [];
          if (this.isEmpty()) s.push(1);
          else for (let e of t) s.push(e.length);
          return (0, l.jsxs)(d.Dialog, {
            className: r()(
              E.container,
              (function (e) {
                if ("bottom" === e) return E.positionBottom;
                return E.positionTop;
              })(e),
            ),
            "aria-label": this.props["aria-label"],
            children: [
              (0, l.jsx)("div", { className: E.autocompleteShadow }),
              (0, l.jsx)("div", {
                className: E.autocompleteArrowWrapper,
                children: (0, l.jsx)("div", { className: E.autocompleteArrow }),
              }),
              (0, l.jsxs)("header", {
                className: E.header,
                children: [
                  (0, l.jsx)("div", {
                    className: E.autocompleteHeaderBackground,
                  }),
                  (0, l.jsx)("div", {
                    className: E.headerText,
                    children: this.props.label,
                  }),
                  (0, l.jsx)("input", {
                    type: "text",
                    className: E.input,
                    placeholder: this.props.placeholder,
                    ref: this.inputRef,
                    onChange: this.handleChange,
                    onKeyDown: this.handleKeyDown,
                  }),
                ],
              }),
              (0, l.jsx)("section", {
                className: E.sectionTag,
                children: (0, l.jsx)(d.List, {
                  className: E.autocompleteScroller,
                  fade: !0,
                  sections: s,
                  sectionHeight: this.getSectionHeight,
                  rowHeight: 40,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                }),
              }),
            ],
          });
        }
        focus() {
          null != this.inputRef.current && this.inputRef.current.focus();
        }
        constructor(...e) {
          super(...e),
            T(this, "inputRef", a.createRef()),
            T(this, "state", {
              query: null,
              selectedSection: null,
              selectedRow: 0,
            }),
            T(
              this,
              "memoizedGetRows",
              (0, u.oH)((e, t, s) => {
                let n = RegExp(
                    "^".concat(h.Z.escape(null != e ? e.trim() : "")),
                    "i",
                  ),
                  l = (e) => n.test(e);
                return s.map((e, s) => t(l, s));
              }),
            ),
            T(this, "getRows", () => {
              let { onFilterResults: e, sections: t } = this.props,
                { query: s } = this.state;
              return this.memoizedGetRows(s, e, t);
            }),
            T(this, "handleChange", (e) => {
              var t, s;
              let n = e.target.value;
              null === (t = (s = this.props).onQueryChange) ||
                void 0 === t ||
                t.call(s, n),
                this.setState({
                  query: n,
                  selectedSection: null,
                  selectedRow: 0,
                });
            }),
            T(this, "handleMouseEnter", (e, t) => {
              this.setState({ selectedSection: e, selectedRow: t });
            }),
            T(this, "handleClick", (e, t) => {
              let s = this.getRows();
              this.props.onSelect(s[e][t], e), this.props.onClose();
            }),
            T(this, "handleKeyDown", (e) => {
              let { keyboardModeEnabled: t } = this.props,
                { selectedRow: s } = this.state,
                n = this.getRows(),
                l = this.getSelectedSection(n);
              switch (e.keyCode) {
                case m.yXg.TAB:
                  if (t) break;
                case m.yXg.ARROW_DOWN:
                  e.preventDefault(),
                    this.props.sections.length > l &&
                      ++s >= n[l].length &&
                      (++l >= this.props.sections.length && (l = 0), (s = 0)),
                    this.setState({ selectedSection: l, selectedRow: s });
                  break;
                case m.yXg.ARROW_UP:
                  e.preventDefault(),
                    --s < 0 &&
                      (--l < 0 && (l = this.props.sections.length - 1),
                      (s = n[l].length - 1)),
                    this.setState({ selectedSection: l, selectedRow: s });
                  break;
                case m.yXg.ENTER:
                  e.preventDefault(),
                    this.props.sections.length > l &&
                      n[l].length > s &&
                      (this.props.onSelect(n[l][s], l), this.props.onClose());
                  break;
                case m.yXg.ESCAPE:
                  e.preventDefault(),
                    this.props.onSelect(null, null),
                    this.props.onClose();
              }
            }),
            T(
              this,
              "isEmpty",
              () => 0 === this.getRows().reduce((e, t) => e + t.length, 0),
            ),
            T(this, "getSectionHeight", (e) => {
              let t = this.props.sections[e];
              return this.isEmpty() || null == t ? 0 : 44;
            }),
            T(this, "renderSection", (e) => {
              let { section: t } = e,
                s = this.props.sections[t];
              return this.isEmpty() || null == s
                ? null
                : (0, l.jsx)("div", { className: E.section, children: s }, t);
            }),
            T(this, "renderRow", (e) => {
              var t;
              let { section: s, row: n } = e,
                { selectedRow: a } = this.state;
              if (this.isEmpty())
                return (0, l.jsxs)(
                  "div",
                  {
                    className: E.empty,
                    children: [
                      (0, l.jsx)("p", {
                        className: E.noResultsHeader,
                        children: g.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER,
                      }),
                      (0, l.jsx)("p", {
                        children: g.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY,
                      }),
                    ],
                  },
                  "empty",
                );
              let i = this.getRows(),
                o = this.getSelectedSection(i),
                c = null === (t = i[s]) || void 0 === t ? void 0 : t[n];
              return (0, l.jsx)(
                d.Clickable,
                {
                  onClick: this.handleClick.bind(this, s, n),
                  onMouseEnter: this.handleMouseEnter.bind(this, s, n),
                  className: r()(E.row, { [E.selected]: o === s && a === n }),
                  children: (0, l.jsx)("div", {
                    className: E.rowInner,
                    children: this.props.onRenderResult(c, s),
                  }),
                },
                "".concat(s, "-").concat(n),
              );
            });
        }
      }
      T(p, "defaultProps", { sections: [null] }),
        (t.Z = o.ZP.connectStores([c.Z], () => ({
          keyboardModeEnabled: c.Z.keyboardModeEnabled,
        }))(p));
    },
    27544: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return g;
        },
      }),
        s(47120);
      var n = s(735250),
        l = s(470079),
        a = s(748780),
        i = s(442837),
        r = s(481060),
        o = s(741361),
        d = s(856606),
        c = s(277053),
        u = s(259580),
        h = s(689938),
        m = s(95317);
      function g() {
        let e = (0, i.e7)([c.Z], () => c.Z.advancedMode),
          [t] = l.useState(new a.Z.Value(e ? 1 : 0));
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(r.FormDivider, { className: m.advancedModeDivider }),
            (0, n.jsx)(r.HeadingLevel, {
              component: (0, n.jsx)(r.Button, {
                look: r.Button.Looks.BLANK,
                color: r.Button.Colors.TRANSPARENT,
                onClick: function () {
                  e
                    ? a.Z.timing(t, { toValue: 0, duration: 250 }).start(() => {
                        (0, o.d$)(!1);
                      })
                    : ((0, o.d$)(!0),
                      a.Z.timing(t, { toValue: 1, duration: 250 }).start());
                },
                children: (0, n.jsxs)(r.FormTitle, {
                  tag: "h1",
                  className: m.advancedTitle,
                  children: [
                    h.Z.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS,
                    (0, n.jsx)(u.Z, {
                      expanded: e,
                      className: m.titleCaret,
                      width: 20,
                      height: 20,
                    }),
                  ],
                }),
              }),
              children:
                e &&
                (0, n.jsx)(a.Z.div, {
                  style: { opacity: t },
                  children: (0, n.jsx)(d.Z, {}),
                }),
            }),
          ],
        });
      }
    },
    351123: function (e, t, s) {
      s(47120), s(724458);
      var n = s(735250),
        l = s(470079),
        a = s(120356),
        i = s.n(a),
        r = s(442837),
        o = s(481060),
        d = s(668781),
        c = s(493683),
        u = s(787014),
        h = s(741361),
        m = s(911969),
        g = s(385499),
        E = s(134433),
        T = s(600164),
        p = s(156699),
        N = s(693196),
        _ = s(434404),
        S = s(200498),
        x = s(146085),
        f = s(192079),
        C = s(277053),
        M = s(271383),
        I = s(430824),
        R = s(496675),
        Z = s(594174),
        v = s(903386),
        A = s(700785),
        O = s(605436),
        L = s(27544),
        j = s(415236),
        b = s(182905),
        D = s(71080),
        y = s(981631),
        w = s(231338),
        P = s(689938),
        F = s(343535);
      function B(e) {
        let {
          channel: t,
          roles: s,
          members: l,
          disabledReason: a,
          getRemoveTooltipHint: r,
        } = e;
        return (0, n.jsx)(o.List, {
          className: F.roleMemberList,
          sections: [s.length, l.length],
          renderRow: function (e) {
            let u,
              p,
              N,
              { section: _, row: x } = e,
              f = !1;
            switch (_) {
              case D.m$.ROLES:
                var C;
                (N =
                  (p = s[x]).rowType === D.aC.ROLE &&
                  (null === (C = p.tags) || void 0 === C
                    ? void 0
                    : C.guild_connections) === null
                    ? (0, n.jsx)(E.Z, {
                        className: F.shield,
                        color: p.colorString,
                        size: 20,
                      })
                    : (0, n.jsx)(o.ShieldUserIcon, {
                        size: "custom",
                        className: F.shield,
                        color: p.colorString,
                        height: 20,
                      })),
                  (u = (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: F.rowHeight,
                        children: N,
                      }),
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: F.rowLabel,
                        color: p.disabled ? "text-muted" : "text-normal",
                        children: p.name,
                      }),
                    ],
                  })),
                  (f = p.disabled);
                break;
              case D.m$.MEMBERS:
                (p = l[x]),
                  (u = (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(o.Avatar, {
                        src: p.avatarURL,
                        size: o.AvatarSizes.SIZE_24,
                        "aria-hidden": !0,
                      }),
                      (0, n.jsx)(o.Text, {
                        className: F.rowLabel,
                        variant: "text-sm/normal",
                        children: p.name,
                      }),
                      p.bot &&
                        (0, n.jsx)(g.Z, {
                          verified: p.verifiedBot,
                          className: F.rowBotTag,
                        }),
                      null != p.nickname &&
                        (0, n.jsx)(o.Text, {
                          color: "text-muted",
                          className: F.rowLabelSubText,
                          variant: "text-sm/normal",
                          children: p.username,
                        }),
                    ],
                  })),
                  (f = p.disabled);
                break;
              default:
                p = null;
            }
            if (null == p) return null;
            let M = !f && null == a && null != p.id;
            return (0, n.jsxs)(
              T.Z,
              {
                justify: T.Z.Justify.BETWEEN,
                align: T.Z.Align.CENTER,
                className: F.memberRow,
                children: [
                  (0, n.jsx)(T.Z, {
                    justify: T.Z.Justify.START,
                    align: T.Z.Align.CENTER,
                    className: F.__invalid_memberRowBody,
                    children: u,
                  }),
                  (0, n.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: O.zB(p.rowType),
                  }),
                  p.rowType !== D.aC.EMPTY_STATE &&
                    (0, n.jsx)(o.TooltipContainer, {
                      className: F.removeIconContainer,
                      text: null != a ? a : r(p.rowType, p.disabled),
                      children: (0, n.jsx)(o.Clickable, {
                        onClick: () => {
                          var e, s, n;
                          return (
                            M &&
                            null != p &&
                            ((e = p.id),
                            (s = p.name),
                            (n = p.rowType),
                            void d.Z.show({
                              title:
                                P.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                              body: P.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format(
                                { name: s },
                              ),
                              cancelText: P.Z.Messages.CANCEL,
                              onConfirm: () =>
                                (function (e, s) {
                                  if (t.isGuildStageVoice()) {
                                    let n = (0, S._L)(
                                      e,
                                      s === D.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER,
                                      t,
                                    );
                                    (0, S.Os)(n)
                                      ? c.Z.clearPermissionOverwrite(t.id, n.id)
                                      : (0, h.hw)(t.id, [n]);
                                  } else c.Z.clearPermissionOverwrite(t.id, e);
                                })(e, n),
                            }))
                          );
                        },
                        "aria-disabled": !M,
                        "aria-label": P.Z.Messages.REMOVE,
                        children: (0, n.jsx)(o.CircleXIcon, {
                          size: "md",
                          color: "currentColor",
                          className: i()(F.removeIcon, {
                            [F.disabledRemoveIcon]: f || a,
                          }),
                        }),
                      }),
                    }),
                ],
              },
              p.id,
            );
          },
          rowHeight: 40,
          renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
              case D.m$.ROLES:
                return (0, n.jsx)(
                  G,
                  { title: P.Z.Messages.ROLES },
                  "roles-title",
                );
              case D.m$.MEMBERS:
                return (0, n.jsx)(
                  G,
                  { title: P.Z.Messages.MEMBERS },
                  "members-title",
                );
            }
          },
          sectionHeight: 49,
        });
      }
      function H(e) {
        let { guild: t, channel: l, permissionUpdates: a } = e,
          d = (0, r.e7)([I.Z], () => I.Z.getRoles(t.id)),
          c = O.RZ(t, d, l, x.yP, a),
          u = (0, r.e7)([M.ZP], () =>
            O.cR(M.ZP.getMemberIds(t.id), l, t, x.yP, a),
          ),
          h = (0, S.nG)(l.id);
        function m() {
          (0, o.openModalLazy)(async () => {
            let { default: e } = await s.e("82961").then(s.bind(s, 388131));
            return (t) => (0, n.jsx)(e, { ...t, channelId: l.id });
          });
        }
        return (0, n.jsxs)("div", {
          className: i()(F.settingCard, F.active),
          children: [
            (0, n.jsx)(j.Z, {
              label: P.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
              description:
                P.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
              icon: (0, n.jsx)(o.StageIcon, {
                size: "custom",
                color: "currentColor",
                className: F.cardIcon,
                height: 20,
                width: 20,
              }),
              id: "StageModeratorSettingCard",
            }),
            (0, n.jsxs)("div", {
              className: F.cardFolder,
              children: [
                (0, n.jsxs)(T.Z, {
                  justify: T.Z.Justify.BETWEEN,
                  align: T.Z.Align.CENTER,
                  className: F.folderHeader,
                  children: [
                    (0, n.jsx)(o.FormTitle, {
                      tag: "h5",
                      className: F.folderTitle,
                      children:
                        P.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL,
                    }),
                    (0, n.jsx)(o.Tooltip, {
                      text: P.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                      shouldShow: !h,
                      children: (e) =>
                        (0, n.jsx)(o.Button, {
                          ...e,
                          size: o.Button.Sizes.SMALL,
                          color: o.Button.Colors.BRAND,
                          onClick: m,
                          disabled: !h,
                          children:
                            P.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                        }),
                    }),
                  ],
                }),
                (0, n.jsx)(B, {
                  channel: l,
                  roles: c,
                  members: u,
                  disabledReason: h
                    ? null
                    : P.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
                  getRemoveTooltipHint: f.kk,
                }),
              ],
            }),
          ],
        });
      }
      function U(e) {
        let {
            guild: t,
            channel: l,
            isPrivateGuildChannel: a,
            roles: d,
            members: c,
          } = e,
          u = (0, r.e7)([R.Z], () => R.Z.can(w.Pl.ADMINISTRATOR, t)),
          h = A.Uu(w.Pl.VIEW_CHANNEL, t),
          m = A.Uu(w.Pl.ADMINISTRATOR, t);
        async function g() {
          let e = l.accessPermissions,
            i = Z.default.getCurrentUser();
          if (!a && null != (await (0, N.T)(t.id, l.id))) {
            (0, o.openModalLazy)(async () => {
              let { ConfirmModal: e } = await Promise.resolve().then(
                s.bind(s, 878678),
              );
              return (s) =>
                (0, n.jsx)(e, {
                  ...s,
                  confirmButtonColor: o.ButtonColors.BRAND,
                  header: P.Z.Messages.CANNOT_PRIVATIZE_CHANNEL,
                  confirmText: P.Z.Messages.OKAY,
                  children: (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                      P.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING_PRIVATE.format(
                        {
                          onClick: () => {
                            _.Z.open(t.id, y.pNK.ONBOARDING), s.onClose();
                          },
                        },
                      ),
                  }),
                });
            });
            return;
          }
          O.$e(l, e, a), !a && null != i && !u && O.Yh(l, e);
        }
        let E = {
          title: P.Z.Messages.PRIVATE_CHANNEL,
          subtitle:
            P.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
          formLabel: P.Z.Messages.FORM_LABEL_CHANNEL_PERMISSIONS,
        };
        return (
          l.isCategory()
            ? ((E.title = P.Z.Messages.PRIVATE_CATEGORY),
              (E.subtitle =
                P.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION),
              (E.formLabel = P.Z.Messages.FORM_LABEL_CATEGORY_PERMISSIONS))
            : l.type === y.d4z.GUILD_VOICE &&
              (E.subtitle =
                P.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE),
          (0, n.jsxs)("div", {
            className: i()(F.settingCard, { [F.active]: a }),
            children: [
              (0, n.jsx)(j.Z, {
                description: E.subtitle,
                icon: (0, n.jsx)(o.LockIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: F.cardIcon,
                  height: 20,
                  width: 20,
                }),
                id: "PrivateChannelSettingCard",
                label: E.title,
                onChange: g,
                value: a,
              }),
              (0, n.jsxs)("div", {
                className: F.cardFolder,
                children: [
                  m &&
                    (0, n.jsx)("div", {
                      className: F.adminWarning,
                      children: (0, n.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.WARNING,
                        children:
                          P.Z.Messages
                            .CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING,
                      }),
                    }),
                  !h &&
                    !m &&
                    !a &&
                    (0, n.jsx)("div", {
                      className: F.adminWarning,
                      children: (0, n.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.WARNING,
                        children:
                          P.Z.Messages
                            .CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING,
                      }),
                    }),
                  a &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)(T.Z, {
                          justify: T.Z.Justify.BETWEEN,
                          align: T.Z.Align.CENTER,
                          className: F.folderHeader,
                          children: [
                            (0, n.jsx)(o.FormTitle, {
                              tag: "h5",
                              className: F.folderTitle,
                              children: E.formLabel,
                            }),
                            (0, n.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              color: o.Button.Colors.BRAND,
                              onClick: function () {
                                (0, o.openModalLazy)(async () => {
                                  let { default: e } =
                                    await Promise.resolve().then(
                                      s.bind(s, 185413),
                                    );
                                  return (t) =>
                                    (0, n.jsx)(e, {
                                      ...t,
                                      channelId: l.id,
                                      inSettings: !0,
                                    });
                                });
                              },
                              children:
                                P.Z.Messages
                                  .CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                            }),
                          ],
                        }),
                        (0, n.jsx)(B, {
                          channel: l,
                          roles: d,
                          members: c,
                          getRemoveTooltipHint: O.yv,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      function G(e) {
        let { title: t } = e;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(o.FormDivider, { className: F.divider }),
            (0, n.jsx)(o.FormTitle, {
              className: i()(F.folderTitle, F.sectionTitle),
              tag: "h5",
              children: t,
            }),
          ],
        });
      }
      t.Z = r.ZP.connectStores([C.Z, R.Z, M.ZP, I.Z], () => {
        let e;
        let t = C.Z.channel,
          s = C.Z.category,
          n = [],
          l = [],
          a = {},
          i = !1;
        if (null != t) {
          e = I.Z.getGuild(t.getGuildId());
          let s = M.ZP.getMemberIds(null == e ? void 0 : e.id);
          if (null != e) {
            let r = I.Z.getRoles(e.id);
            (a = C.Z.editedPermissionIds.reduce((e, t) => {
              let s = C.Z.getPermissionOverwrite(t);
              return null != s && (e[t] = s), e;
            }, {})),
              (n = O.kA(e, r, t, t.accessPermissions, a)),
              (l = O.cR(s, t, e, t.accessPermissions, a)),
              (i = O.Yk(t, a));
          }
        }
        return {
          canSyncChannel: null != s && R.Z.can(w.Pl.MANAGE_ROLES, s),
          category: s,
          channel: t,
          filteredMembers: l,
          filteredRoles: n,
          guild: e,
          isPrivateGuildChannel: i,
          locked: C.Z.locked,
          permissionUpdates: a,
        };
      })(function (e) {
        let {
            canSyncChannel: t,
            category: a,
            channel: i,
            filteredMembers: r,
            filteredRoles: d,
            guild: c,
            isPrivateGuildChannel: h,
            locked: m,
            permissionUpdates: g,
          } = e,
          [E, T] = l.useState(!A.Uu(w.Pl.SEND_MESSAGES, i));
        if (null == i || null == c) return null;
        function N() {
          O.$e(i, w.Pl.SEND_MESSAGES, E), T(!E);
        }
        function _() {
          if (null != a)
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.resolve().then(
                s.bind(s, 170509),
              );
              return (t) =>
                (0, n.jsx)(e, {
                  ...t,
                  channel: i,
                  category: a,
                  onConfirm: async () => {
                    let { guild_id: e } = a,
                      t = { ...a.permissionOverwrites };
                    null != e && null == t[e] && (t[e] = A.we(e)),
                      (await (0, p.u)(i, t[e].deny, t[e].allow)) &&
                        (0, u.wk)(i.id, {
                          permissionOverwrites: Object.values(t),
                        });
                  },
                });
            });
        }
        let S = {
          title: P.Z.Messages.CHANNEL_PERMISSIONS,
          subtitle: P.Z.Messages.CHANNEL_PERMISSIONS_SUBTITLE,
        };
        return (
          i.isCategory() &&
            ((S.title = P.Z.Messages.CATEGORY_SETTINGS),
            (S.subtitle = P.Z.Messages.CATEGORY_PERMISSIONS_SUBTITLE)),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.FormTitle, { tag: "h1", children: S.title }),
              (0, n.jsx)(o.FormText, { children: S.subtitle }),
              null != a && t
                ? m
                  ? (0, n.jsx)(b.Z, {
                      canSync: !1,
                      icon: o.RefreshIcon,
                      noticeText:
                        P.Z.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
                          categoryName: a.name,
                        }),
                    })
                  : (0, n.jsx)(b.Z, {
                      buttonText: P.Z.Messages.SYNC_NOW,
                      canSync: !0,
                      icon: (0, o.makeIconCompat)(v.Z),
                      noticeText: P.Z.Messages.PERMISSIONS_UNSYNCED.format({
                        categoryName: a.name,
                      }),
                      onClick: _,
                    })
                : null,
              i.isGuildStageVoice()
                ? (0, n.jsx)(H, { guild: c, channel: i, permissionUpdates: g })
                : null,
              (0, n.jsx)(U, {
                channel: i,
                guild: c,
                isPrivateGuildChannel: h,
                roles: d,
                members: r,
              }),
              !1,
              (0, n.jsx)(L.Z, {}),
            ],
          })
        );
      });
    },
    415236: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(481060),
        a = s(600164),
        i = s(291338);
      function r(e) {
        let {
          description: t,
          icon: s,
          id: r,
          label: o,
          onChange: d,
          value: c,
        } = e;
        return (0, n.jsxs)("div", {
          className: i.cardContent,
          children: [
            (0, n.jsxs)(a.Z, {
              justify: a.Z.Justify.BETWEEN,
              align: a.Z.Align.CENTER,
              children: [
                s,
                (0, n.jsx)(a.Z.Child, {
                  grow: 1,
                  children: (0, n.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: o,
                  }),
                }),
                null != d &&
                  null != c &&
                  (0, n.jsx)(l.Switch, { id: r, checked: c, onChange: d }),
              ],
            }),
            (0, n.jsx)(l.Text, {
              variant: "text-xs/normal",
              color: "text-normal",
              className: i.cardDescription,
              children: t,
            }),
          ],
        });
      }
    },
    182905: function (e, t, s) {
      var n = s(735250);
      s(470079);
      var l = s(120356),
        a = s.n(l),
        i = s(692547),
        r = s(481060),
        o = s(600164),
        d = s(13735);
      t.Z = (e) => {
        let {
          className: t,
          icon: s,
          noticeText: l,
          buttonText: c,
          onClick: u,
          canSync: h,
        } = e;
        return (0, n.jsx)(r.Card, {
          className: a()(t, d.card),
          children: (0, n.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
              (0, n.jsx)(s, {
                width: 20,
                height: 20,
                size: "custom",
                color: i.Z.unsafe_rawColors.YELLOW_300.css,
              }),
              (0, n.jsx)("div", {
                className: d.label,
                children: (0, n.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: l,
                }),
              }),
              h &&
                (0, n.jsx)(r.Button, {
                  size: r.Button.Sizes.SMALL,
                  color: r.Button.Colors.PRIMARY,
                  onClick: u,
                  children: c,
                }),
            ],
          }),
        });
      };
    },
    257017: function (e, t, s) {
      s.d(t, {
        X: function () {
          return r;
        },
      });
      var n = s(668781),
        l = s(63063),
        a = s(981631),
        i = s(689938);
      function r(e) {
        n.Z.show({
          title: i.Z.Messages.SELF_DENY_PERMISSION_TITLE,
          body: i.Z.Messages.SELF_DENY_PERMISSION_BODY.format({ name: e }),
          cancelText: i.Z.Messages.HELP_DESK,
          onCancel() {
            window.open(l.Z.getArticleURL(a.BhN.PERMISSIONS_LOCKOUT));
          },
        });
      }
    },
    188857: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return c;
        },
      }),
        s(47120),
        s(724458),
        s(653041);
      var n = s(470079),
        l = s(442837),
        a = s(749210),
        i = s(911969),
        r = s(271383),
        o = s(594174),
        d = s(823379);
      function c(e, t) {
        let [s, c] = (0, l.Wu)(
          [r.ZP],
          () =>
            null == t || null == e
              ? [[], []]
              : Object.values(t).reduce(
                  (t, s) => {
                    if (s.type !== i.BN.MEMBER) return t;
                    let n = s.id;
                    return r.ZP.isMember(e, n) ? t[0].push(n) : t[1].push(n), t;
                  },
                  [[], []],
                ),
          [e, t],
        );
        return (
          n.useEffect(() => {
            c.length > 0 && null != e && a.Z.requestMembersById(e, c, !1);
          }, [c, e]),
          (0, l.Wu)([o.default], () => s.map(o.default.getUser).filter(d.lm), [
            s,
          ])
        );
      }
    },
    869779: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return P;
          },
        });
      var n = s(735250),
        l = s(470079),
        a = s(442837),
        i = s(481060),
        r = s(570140),
        o = s(787014),
        d = s(37234),
        c = s(503089),
        u = s(493544),
        h = s(367907),
        m = s(933557),
        g = s(471445),
        E = s(351123),
        T = s(665906),
        p = s(210887),
        N = s(131704),
        _ = s(533947),
        S = s(277053),
        x = s(388610),
        f = s(592125),
        C = s(496675),
        M = s(699516),
        I = s(594174),
        R = s(585483),
        Z = s(787263),
        v = s(975316),
        A = s(428813),
        O = s(2147),
        L = s(856606),
        j = s(981631),
        b = s(689938),
        D = s(354657);
      function y(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          s = arguments.length > 2 ? arguments[2] : void 0;
        h.ZP.trackWithMetadata(j.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "channel",
          origin_pane: t,
          destination_pane: e,
          location: s,
        });
      }
      class w extends l.PureComponent {
        componentDidMount() {
          y(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          r.Z.wait(() => (0, o.xv)());
        }
        componentDidUpdate(e) {
          let { formState: t, section: s } = e,
            {
              formState: n,
              section: l,
              canManageRoles: a,
              canManageChannels: i,
              canManageWebhooks: r,
            } = this.props;
          (i || a || r) &&
          (n !== j.QZA.CLOSED || n === t) &&
          (a || l !== j.CoT.PERMISSIONS) &&
          (r || l !== j.CoT.INTEGRATIONS)
            ? l !== s && y(l, s)
            : (0, d.xf)();
        }
        render() {
          let {
            theme: e,
            sidebarTheme: t,
            section: s,
            channel: l,
            category: a,
            canManageRoles: r,
            canManageChannels: h,
            canDeleteChannels: T,
            canManageWebhooks: p,
          } = this.props;
          return null == l
            ? null
            : (0, n.jsx)(c.ZP, {
                theme: e,
                sidebarTheme: t,
                section: null != s ? s : j.CoT.OVERVIEW,
                onSetSection: o.zc,
                onClose: d.xf,
                sections: (function (e) {
                  let {
                      channel: t,
                      category: s,
                      canManageRoles: l,
                      canManageChannels: a,
                      canDeleteChannels: r,
                      canManageWebhooks: c,
                    } = e,
                    h = (0, g.KS)(t),
                    { GUILD_CATEGORY: T } = j.d4z,
                    p = N.Ec.has(t.type),
                    f =
                      t.type === T
                        ? b.Z.Messages.DELETE_CATEGORY
                        : p
                          ? t.isForumPost()
                            ? b.Z.Messages.DELETE_FORUM_POST
                            : b.Z.Messages.DELETE_THREAD
                          : b.Z.Messages.DELETE_CHANNEL;
                  return [
                    {
                      section: u.ID.HEADER,
                      label:
                        null != t
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                null != h
                                  ? (0, n.jsx)(h, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: D.channelIcon,
                                    })
                                  : null,
                                (0, m.F6)(t, I.default, M.Z),
                                null != s
                                  ? (0, n.jsx)(i.Text, {
                                      tag: "span",
                                      variant: "text-xs/semibold",
                                      color: "header-secondary",
                                      lineClamp: 1,
                                      className: D.category,
                                      children: (0, m.F6)(s, I.default, M.Z),
                                    })
                                  : null,
                              ],
                            })
                          : b.Z.Messages.CHANNEL_SETTINGS,
                    },
                    {
                      section: j.CoT.OVERVIEW,
                      label: b.Z.Messages.OVERVIEW,
                      ariaLabel: b.Z.Messages.OVERVIEW,
                      element: O.Z,
                      notice: { element: O.G, stores: [x.Z] },
                    },
                    {
                      section: j.CoT.PERMISSIONS,
                      label: b.Z.Messages.PERMISSIONS,
                      element: E.Z,
                      notice: { element: L.n, stores: [S.Z] },
                      predicate: () => l && !p,
                    },
                    {
                      section: j.CoT.INSTANT_INVITES,
                      label: b.Z.Messages.INVITES,
                      element: A.Z,
                      type: u.bT.CUSTOM,
                      predicate: () => t.type !== T && a && !p,
                    },
                    {
                      section: j.CoT.INTEGRATIONS,
                      label: b.Z.Messages.INTEGRATIONS_OVERVIEW,
                      ariaLabel: b.Z.Messages.INTEGRATIONS_OVERVIEW,
                      element: v.Z,
                      notice: { stores: [_.Z], element: v.B },
                      predicate: () => !!c && N.Ti.has(t.type),
                    },
                    { section: u.ID.DIVIDER },
                    {
                      section: j.CoT.DELETE,
                      onClick() {
                        (0, Z.w)(t, function () {
                          R.S.subscribeOnce(j.CkL.LAYER_POP_COMPLETE, () => {
                            (0, o.zz)(t.id);
                          }),
                            (0, d.xf)();
                        });
                      },
                      label: f,
                      ariaLabel: f,
                      icon: (0, n.jsx)(i.TrashIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                      predicate: () => r,
                    },
                  ];
                })({
                  channel: l,
                  category: a,
                  canManageRoles: r,
                  canManageChannels: h,
                  canDeleteChannels: T,
                  canManageWebhooks: p,
                }),
              });
        }
      }
      function P() {
        let { channel: e, analyticsLocation: t } = (0, a.cj)([x.Z], () =>
            x.Z.getProps(),
          ),
          s = (0, a.e7)([x.Z], () => x.Z.getFormState()),
          l = (0, a.e7)([x.Z], () => x.Z.getSection()),
          i = (0, a.e7)([p.Z], () => p.Z.theme),
          r = (0, a.e7)([p.Z], () => (p.Z.darkSidebar ? j.BRd.DARK : void 0)),
          o = (0, T.C7)(e),
          d = (0, T.Xb)(e),
          {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
          } = (0, a.cj)([C.Z], () => ({
            canManageChannels: C.Z.can(j.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && C.Z.can(j.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && C.Z.can(j.Plq.MANAGE_WEBHOOKS, e),
          })),
          m = (0, a.e7)([f.Z], () =>
            f.Z.getChannel(null == e ? void 0 : e.parent_id),
          );
        return (0, n.jsx)(w, {
          channel: e,
          category: m,
          canManageChannels: (null == e ? void 0 : e.isThread()) ? o : c,
          canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : c,
          canManageRoles: u,
          canManageWebhooks: h,
          formState: s,
          theme: i,
          sidebarTheme: r,
          section: l,
          analyticsLocation: t,
        });
      }
    },
    975316: function (e, t, s) {
      s.d(t, {
        B: function () {
          return h;
        },
        Z: function () {
          return u;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(442837),
        a = s(139387),
        i = s(852860),
        r = s(490655),
        o = s(533947),
        d = s(388610),
        c = s(430824);
      function u(e) {
        let { refToScroller: t } = e,
          { channel: s } = (0, l.e7)([d.Z], () => d.Z.getProps(), []),
          a = (0, l.e7)(
            [c.Z],
            () => (null != s ? c.Z.getGuild(s.getGuildId()) : null),
            [s],
          ),
          {
            section: i,
            sectionId: u,
            webhooks: h,
            editedWebhook: m,
            isFetching: g,
            errors: E,
          } = (0, l.e7)([o.Z], () => o.Z.getProps(), []);
        return null == a || null == s
          ? null
          : (0, n.jsx)(r.Z, {
              guild: a,
              channel: s,
              section: i,
              sectionId: u,
              webhooks: h,
              editedWebhook: m,
              isFetching: g,
              hasChanges: o.Z.hasChanges,
              errors: E,
              refToScroller: t,
            });
      }
      function h() {
        let { channel: e, submitting: t } = (0, l.e7)([d.Z], () =>
            d.Z.getProps(),
          ),
          s = (0, l.e7)(
            [c.Z],
            () => (null != e ? c.Z.getGuild(e.getGuildId()) : null),
            [e],
          );
        return (0, n.jsx)(i.Z, {
          submitting: t,
          onReset: () => {
            a.Z.init();
          },
          onSave: () => {
            if (null != s)
              null != o.Z.editedWebhook &&
                a.Z.saveWebhook(s.id, o.Z.editedWebhook);
          },
        });
      }
    },
    428813: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(442837),
        a = s(270394),
        i = s(388610),
        r = s(430824),
        o = s(496675),
        d = s(246946),
        c = s(981631);
      function u() {
        let e = (0, l.e7)([d.Z], () => d.Z.hideInstantInvites),
          { channel: t, guild: s } = (0, l.cj)(
            [i.Z, r.Z],
            () => {
              let { channel: e } = i.Z.getProps(),
                t = null != e ? r.Z.getGuild(e.getGuildId()) : null;
              return { channel: e, guild: t };
            },
            [],
          ),
          u = (0, l.e7)(
            [o.Z],
            () => null != t && o.Z.can(c.Plq.CREATE_INSTANT_INVITE, t),
            [t],
          ),
          { invites: h, loading: m } = (0, l.cj)(
            [i.Z],
            () => i.Z.getInvites(),
            [],
          );
        return (0, n.jsx)(a.Z, {
          invites: h,
          loading: m,
          guild: s,
          channel: t,
          canCreateInvites: u,
          hide: e,
        });
      }
    },
    2147: function (e, t, s) {
      s.d(t, {
        G: function () {
          return ep;
        },
        Z: function () {
          return eS;
        },
      }),
        s(789020),
        s(47120),
        s(733860),
        s(653041);
      var n = s(735250),
        l = s(470079),
        a = s(120356),
        i = s.n(a),
        r = s(313361),
        o = s(683860),
        d = s(442837),
        c = s(692547),
        u = s(780384),
        h = s(481060),
        m = s(787014),
        g = s(771340),
        E = s(410575),
        T = s(852860),
        p = s(129865),
        N = s(902840),
        _ = s(933557),
        S = s(541716),
        x = s(752305),
        f = s(893718),
        C = s(600164),
        M = s(313201),
        I = s(907040),
        R = s(633302),
        Z = s(109434),
        v = s(162389),
        A = s(946458),
        O = s(968437),
        L = s(665906),
        j = s(456077),
        b = s(747212),
        D = s(210887),
        y = s(131704),
        w = s(314897),
        P = s(388610),
        F = s(430824),
        B = s(496675),
        H = s(903223),
        U = s(594174),
        G = s(934415),
        k = s(70956),
        V = s(630388),
        W = s(63063),
        z = s(129724),
        Y = s(296146),
        Q = s(564735),
        q = s(981631),
        X = s(176505),
        K = s(185923),
        $ = s(710352),
        J = s(124368),
        ee = s(689938),
        et = s(963562),
        es = s(224499);
      function en(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let el = (0, M.hQ)(),
        ea = (0, M.hQ)(),
        ei = (0, M.hQ)(),
        er = (0, M.hQ)(),
        eo = (0, M.hQ)(),
        ed = (0, M.hQ)(),
        ec = (0, M.hQ)(),
        eu = (0, M.hQ)(),
        eh = (0, M.hQ)(),
        em = (0, M.hQ)(),
        eg = (0, M.hQ)(),
        eE = (0, y.kt)({ id: "1", type: q.d4z.DM }),
        eT = "AUTOMATIC_RTC_REGION",
        ep = d.ZP.connectStores([P.Z], () => {
          let { channel: e, submitting: t } = P.Z.getProps();
          return {
            channel: e,
            submitting: t,
            onReset() {
              null != e && (0, m.S1)(e.id);
            },
            onSave() {
              if (null == e) return;
              let {
                name: t,
                type: s,
                topic: n,
                bitrate: l,
                userLimit: a,
                nsfw: i,
                flags: r,
                rateLimitPerUser: o,
                defaultThreadRateLimitPerUser: d,
                threadMetadata: c,
                defaultAutoArchiveDuration: u,
                template: h,
                rtcRegion: g,
                videoQualityMode: E,
                defaultReactionEmoji: T,
                availableTags: p,
                defaultSortOrder: N,
                defaultForumLayout: _,
              } = e;
              e.isThread() && (t = (0, j.Z)(t, !0)),
                (0, m.wk)(e.id, {
                  name: t,
                  type: s,
                  topic: n,
                  bitrate: l,
                  userLimit: a,
                  nsfw: i,
                  flags: r,
                  rateLimitPerUser: o,
                  defaultThreadRateLimitPerUser: d,
                  autoArchiveDuration:
                    null == c ? void 0 : c.autoArchiveDuration,
                  locked: null == c ? void 0 : c.locked,
                  invitable: null == c ? void 0 : c.invitable,
                  defaultAutoArchiveDuration: u,
                  template: h,
                  rtcRegion: g,
                  videoQualityMode: E,
                  defaultReactionEmoji: T,
                  availableTags: p,
                  defaultSortOrder: N,
                  defaultForumLayout: _,
                });
            },
          };
        })(T.Z);
      function eN(e) {
        var t;
        let { channel: s, onChange: a } = e,
          [i, r] = l.useState(
            null !== (t = s.rateLimitPerUser) && void 0 !== t ? t : 0,
          ),
          [o, d] = l.useState(null),
          c = l.useMemo(() => {
            let e = [...(null != o ? o : q.BiE)];
            return (
              !e.includes(i) && e.unshift(i),
              e.map((e) => ({ label: (0, z.A)(e, !1), value: e }))
            );
          }, [o, i]),
          u = l.useCallback(
            (e) => {
              r(e), a(e), d(null);
            },
            [a],
          ),
          m = l.useCallback((e) => {
            if ("" === e) {
              d(null);
              return;
            }
            let t = [],
              s = parseInt(e, 10);
            if (Number.isNaN(s)) {
              d(null);
              return;
            }
            s <= q.GI0 && t.push(s);
            let n = s * k.Z.Seconds.MINUTE;
            n <= q.GI0 && t.push(n);
            let l = s * k.Z.Seconds.HOUR;
            l <= q.GI0 && t.push(l), d(t);
          }, []),
          g = l.useCallback(() => {
            d(null);
          }, []);
        return (0, n.jsx)(h.SearchableSelect, {
          className: es.marginBottom8,
          value: i,
          onChange: u,
          onSearchChange: m,
          options: c,
          onBlur: g,
          placeholder: ee.Z.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER,
        });
      }
      class e_ extends l.PureComponent {
        componentDidMount() {
          null == this.props.regions &&
            null != this.props.guild &&
            g.Z.fetchRegions(this.props.guild.id);
        }
        componentDidUpdate(e) {
          var t, s, n, l;
          let a =
            null !==
              (n =
                null === (t = this.props.channel) || void 0 === t
                  ? void 0
                  : t.topic) && void 0 !== n
              ? n
              : "";
          (null !==
            (l = null === (s = e.channel) || void 0 === s ? void 0 : s.topic) &&
          void 0 !== l
            ? l
            : "") !== a &&
            a !== this.state.textTopicValue &&
            this.setState({ textTopicValue: a, richTopicValue: (0, x.JM)(a) });
        }
        getError(e) {
          let { errors: t } = this.props;
          return null == t ? void 0 : t[e];
        }
        getCooldownSliderMarker(e) {
          return (0, z.A)(e, !0);
        }
        getAutoArchiveDurationSliderMarker(e) {
          return (0, z.A)(e * k.Z.Seconds.MINUTE, !0);
        }
        renderChannelInfo(e, t) {
          var s, l, a, d, u, m;
          let g, T;
          let {
              canManageChannels: p,
              canSendMessages: N,
              isThreadModerator: _,
              canManageThread: x,
              guild: C,
              isForumPost: M,
              isOwner: I,
              showAdvancedSlowModeSetting: Z,
            } = this.props,
            L = y.Ec.has(e.type),
            j = e.isForumLikeChannel(),
            D =
              j &&
              (null === (s = e.availableTags) || void 0 === s
                ? void 0
                : s.every((e) => e.moderated)),
            w =
              (null === (l = U.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.isStaff()) === !0,
            P = y.TK.has(e.type)
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(h.FormItem, {
                      title: j
                        ? ee.Z.Messages.FORM_LABEL_CHANNEL_GUIDELINES
                        : ee.Z.Messages.FORM_LABEL_CHANNEL_TOPIC,
                      className: es.marginTop20,
                      children: j
                        ? (0, n.jsx)(f.Z, {
                            innerClassName: et.forumGuidelines,
                            characterCountClassName:
                              et.forumGuidelinesCharacterCount,
                            maxCharacterCount: X.Z7,
                            onChange: this.handleChangeRichTopic,
                            placeholder: ee.Z.Messages.CHANNEL_TOPIC_EMPTY,
                            channel: eE,
                            textValue: this.state.textTopicValue,
                            richValue: this.state.richTopicValue,
                            type: S.I.FORUM_CHANNEL_GUIDELINES,
                            onBlur: () => {
                              this.setState({ topicFocused: !1 });
                            },
                            onFocus: () => {
                              this.setState({ topicFocused: !0 });
                            },
                            focused: this.state.topicFocused,
                            onSubmit: this.handleSubmit,
                            disableThemedBackground: !0,
                          })
                        : (0, n.jsx)(h.TextArea, {
                            autoFocus: this.props.subsection === q.ZfP.TOPIC,
                            placeholder: ee.Z.Messages.CHANNEL_TOPIC_EMPTY,
                            value: R.ZP.translateSurrogatesToInlineEmoji(
                              e.topic,
                            ),
                            onChange: this.handleChangeTopic,
                            error: this.getError("topic"),
                            maxLength: X.$x,
                            disabled: !p,
                            autosize: !0,
                          }),
                    }),
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                  ],
                })
              : null,
            F =
              j && w
                ? (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(h.FormItem, {
                        title: ee.Z.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
                        className: es.marginTop20,
                        children: (0, n.jsx)(h.TextArea, {
                          placeholder:
                            ee.Z.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
                          value: R.ZP.translateSurrogatesToInlineEmoji(
                            null !== (a = e.template) && void 0 !== a ? a : "",
                          ),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: $.Vb,
                          disabled: !p,
                          autosize: !0,
                        }),
                      }),
                      (0, n.jsx)(h.FormDivider, {
                        className: i()(es.marginTop40, es.marginBottom40),
                      }),
                    ],
                  })
                : null,
            B = e.isForumLikeChannel()
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)(h.FormItem, {
                      children: [
                        (0, n.jsx)(h.FormTitle, {
                          id: el,
                          className: et.formTitle,
                          children: ee.Z.Messages.FORUM_TAGS,
                        }),
                        (0, n.jsx)(h.FormText, {
                          id: ea,
                          type: h.FormText.Types.DESCRIPTION,
                          className: et.description,
                          children: ee.Z.Messages.FORM_HELP_FORUM_TAGS,
                        }),
                        (0, n.jsx)(v.Z, { channel: e }),
                      ],
                    }),
                    (0, n.jsx)(h.Checkbox, {
                      disabled: !p || D,
                      value: e.hasFlag(X.zZ.REQUIRE_TAG),
                      type: h.Checkbox.Types.INVERTED,
                      onChange: (e, t) => this.handleRequireTagChanged(t),
                      children: (0, n.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        children: ee.Z.Messages.FORUM_REQUIRE_TAG_NOTE,
                      }),
                    }),
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                  ],
                })
              : null,
            H = e.isForumLikeChannel()
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("div", {
                      className: et.twoColumnSettings,
                      children: [
                        (0, n.jsxs)(h.FormItem, {
                          className: i()(
                            et.settingsLeft,
                            et.settingsDefaultReaction,
                          ),
                          children: [
                            (0, n.jsx)(h.FormTitle, {
                              id: ei,
                              className: et.formTitle,
                              children: ee.Z.Messages.FORUM_DEFAULT_REACTION,
                            }),
                            (0, n.jsx)(h.FormText, {
                              id: ea,
                              type: h.FormText.Types.DESCRIPTION,
                              className: et.description,
                              children:
                                ee.Z.Messages
                                  .FORUM_DEFAULT_REACTION_DESCRIPTION,
                            }),
                            (0, n.jsxs)("div", {
                              className: et.buttonRow,
                              children: [
                                (0, n.jsx)(h.Popout, {
                                  renderPopout: this.renderEmojiPicker,
                                  position: "right",
                                  animation: h.Popout.Animation.NONE,
                                  align: "center",
                                  children: (e) =>
                                    (0, n.jsx)(h.Button, {
                                      ...e,
                                      disabled: !p,
                                      onClick: (t) => {
                                        var s;
                                        null === (s = e.onClick) ||
                                          void 0 === s ||
                                          s.call(e, t);
                                      },
                                      children: ee.Z.Messages.SELECT_EMOJI,
                                    }),
                                }),
                                null != e.defaultReactionEmoji
                                  ? (0, n.jsx)(h.Button, {
                                      className: et.removeButton,
                                      onClick: () =>
                                        this.handleChangeDefaultReactionEmoji(
                                          null,
                                        ),
                                      size: h.Button.Sizes.MIN,
                                      look: h.Button.Looks.LINK,
                                      color: h.Button.Colors.RED,
                                      children: ee.Z.Messages.REMOVE,
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)(A.Z, {
                          reactionEmoji: e.defaultReactionEmoji,
                        }),
                      ],
                    }),
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                  ],
                })
              : null,
            G = e.isForumChannel()
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("div", {
                      className: et.twoColumnSettings,
                      children: [
                        (0, n.jsxs)(h.FormItem, {
                          className: i()(
                            et.settingsLeft,
                            et.settingsDefaultView,
                          ),
                          children: [
                            (0, n.jsx)(h.FormSection, {
                              title:
                                ee.Z.Messages
                                  .FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
                              children: (0, n.jsx)(h.SingleSelect, {
                                options: [
                                  {
                                    label:
                                      ee.Z.Messages
                                        .FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                                    value: r.X.LIST,
                                  },
                                  {
                                    label:
                                      ee.Z.Messages
                                        .FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                                    value: r.X.GRID,
                                  },
                                ],
                                value:
                                  null !== (d = e.defaultForumLayout) &&
                                  void 0 !== d
                                    ? d
                                    : r.X.LIST,
                                onChange: this.handleChangeDefaultForumLayout,
                              }),
                            }),
                            (0, n.jsx)(h.FormText, {
                              className: es.marginTop8,
                              type: h.FormText.Types.DESCRIPTION,
                              children:
                                ee.Z.Messages
                                  .FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION,
                            }),
                          ],
                        }),
                        e.defaultForumLayout === r.X.GRID
                          ? (0, n.jsx)(Y.Z, { className: et.defaultImageView })
                          : (0, n.jsx)(Q.Z, { className: et.defaultImageView }),
                      ],
                    }),
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                  ],
                })
              : null,
            k = e.isForumLikeChannel()
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(h.FormItem, {
                      children: (0, n.jsx)(h.FormSection, {
                        title: ee.Z.Messages.FORUM_DEFAULT_SORT_ORDER,
                        children: (0, n.jsx)(h.SingleSelect, {
                          options: [
                            {
                              label: ee.Z.Messages.FORUM_SORT_ACTIVITY,
                              value: o.z.LATEST_ACTIVITY,
                            },
                            {
                              label: ee.Z.Messages.FORUM_SORT_CREATION,
                              value: o.z.CREATION_DATE,
                            },
                          ],
                          value: e.getDefaultSortOrder(),
                          onChange: this.handleChangeDefaultSortOrder,
                        }),
                      }),
                    }),
                    (0, n.jsx)(h.FormText, {
                      className: es.marginTop8,
                      type: h.FormText.Types.DESCRIPTION,
                      children:
                        ee.Z.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION,
                    }),
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                  ],
                })
              : null,
            V = L ? _ : p,
            z = y.X_.has(e.type)
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)(h.FormItem, {
                      children: [
                        (0, n.jsx)(h.FormTitle, {
                          id: er,
                          className: es.marginBottom8,
                          children: ee.Z.Messages.FORM_LABEL_SLOWMODE,
                        }),
                        j
                          ? (0, n.jsx)(h.FormTitle, {
                              className: es.marginTop20,
                              children:
                                ee.Z.Messages.FORUM_SETTING_SLOW_MODE_POSTS,
                            })
                          : null,
                        !0 === Z
                          ? (0, n.jsx)(eN, {
                              channel: e,
                              onChange: this.handleChangeSlowmode,
                            })
                          : (0, n.jsx)(h.Slider, {
                              className: es.marginTop20,
                              initialValue: e.rateLimitPerUser,
                              markers: q.BiE,
                              stickToMarkers: !0,
                              onValueChange: this.handleChangeSlowmode,
                              onMarkerRender: this.getCooldownSliderMarker,
                              disabled: !V,
                              equidistant: !0,
                              "aria-labelledby": er,
                              "aria-describedby": eo,
                            }),
                        (0, n.jsx)(h.FormText, {
                          id: eo,
                          type: h.FormText.Types.DESCRIPTION,
                          children: j
                            ? ee.Z.Messages.FORM_HELP_SLOWMODE_FORUM
                            : L
                              ? ee.Z.Messages.FORM_HELP_SLOWMODE_THREAD
                              : ee.Z.Messages.FORM_HELP_SLOWMODE,
                        }),
                        j
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(h.FormTitle, {
                                  className: es.marginTop20,
                                  children:
                                    ee.Z.Messages
                                      .FORUM_SETTING_SLOW_MODE_MESSAGES,
                                }),
                                (0, n.jsx)(h.Slider, {
                                  className: es.marginTop20,
                                  initialValue:
                                    null !==
                                      (u = e.defaultThreadRateLimitPerUser) &&
                                    void 0 !== u
                                      ? u
                                      : 0,
                                  markers: q.BiE,
                                  stickToMarkers: !0,
                                  onValueChange:
                                    this.handleChangeThreadMessageSlowmode,
                                  onMarkerRender: this.getCooldownSliderMarker,
                                  disabled: !V,
                                  equidistant: !0,
                                  "aria-labelledby": er,
                                  "aria-describedby": eo,
                                }),
                                (0, n.jsx)(h.FormText, {
                                  type: h.FormText.Types.DESCRIPTION,
                                  children:
                                    ee.Z.Messages
                                      .FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                  ],
                })
              : null,
            K =
              L && null != e.threadMetadata
                ? (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(h.FormItem, {
                        children: (0, n.jsx)(E.Z, {
                          page: q.ZY5.CHANNEL_SETTINGS,
                          children: (0, n.jsx)(b.Z, {
                            autoArchiveDuration:
                              null !==
                                (m = e.threadMetadata.autoArchiveDuration) &&
                              void 0 !== m
                                ? m
                                : J.AX,
                            guild: C,
                            channel: e,
                            onChange: this.handleAutoArchiveDurationChanged,
                            isDisabled: !x,
                          }),
                        }),
                      }),
                      (0, n.jsx)(h.FormText, {
                        className: es.marginTop8,
                        type: h.FormText.Types.DESCRIPTION,
                        children: M
                          ? ee.Z.Messages
                              .FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST
                          : ee.Z.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION,
                      }),
                    ],
                  })
                : null,
            en =
              e.type === q.d4z.PRIVATE_THREAD && null != e.threadMetadata
                ? (0, n.jsx)("div", {
                    children: (0, n.jsx)(h.FormSwitch, {
                      note: ee.Z.Messages.FORM_HELP_THREAD_INVITABLE,
                      onChange: this.handleInvitableChanged,
                      value: e.threadMetadata.invitable,
                      hideBorder: !0,
                      disabled: !x,
                      children: ee.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    }),
                  })
                : null,
            ed = y.ov.has(e.type)
              ? (0, n.jsx)("div", {
                  children: (0, n.jsx)(h.FormSwitch, {
                    note: ee.Z.Messages.FORM_HELP_NSFW,
                    onChange: this.handleNSFWChange,
                    value: e.isNSFW(),
                    hideBorder: !0,
                    disabled: !p || null != e.linkedLobby,
                    disabledText:
                      null != e.linkedLobby
                        ? ee.Z.Messages
                            .CHANNEL_LINKED_LOBBY_CHANNEL_NSFW_DISABLED_REASON
                        : null,
                    children: ee.Z.Messages.FORM_LABEL_NSFW_CHANNEL,
                  }),
                })
              : null,
            ec =
              y.Y0.has(e.type) &&
              null != C &&
              C.hasFeature(q.oNc.NEWS) &&
              e.id !== (null == C ? void 0 : C.rulesChannelId) &&
              e.id !== (null == C ? void 0 : C.publicUpdatesChannelId)
                ? (0, n.jsx)("div", {
                    children: (0, n.jsx)(h.FormSwitch, {
                      note: ee.Z.Messages.FORM_HELP_NEWS.format({
                        documentationLink: W.Z.getArticleURL(
                          q.BhN.ANNOUNCEMENT_CHANNELS,
                        ),
                      }),
                      onChange: this.handleNewsChange,
                      value: e.type === q.d4z.GUILD_ANNOUNCEMENT,
                      hideBorder: !0,
                      disabled: !p,
                      children: ee.Z.Messages.FORM_LABEL_NEWS_CHANNEL,
                    }),
                  })
                : null,
            eu = y.uC.has(e.type)
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                    (0, n.jsx)(E.Z, {
                      page: q.ZY5.CHANNEL_SETTINGS,
                      children: (0, n.jsx)(b.Z, {
                        autoArchiveDuration: (0, O.WD)(e, null),
                        guild: C,
                        channel: e,
                        onChange: this.handleChangeDefaultAutoArchiveDuration,
                        isDisabled: !p,
                      }),
                    }),
                    (0, n.jsx)(h.FormText, {
                      className: es.marginTop8,
                      type: h.FormText.Types.DESCRIPTION,
                      children: e.isForumLikeChannel()
                        ? ee.Z.Messages
                            .FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST
                        : ee.Z.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION,
                    }),
                  ],
                })
              : null,
            eh = this.props.showChannelSummariesSettings
              ? (0, n.jsx)(h.FormSwitch, {
                  note: ee.Z.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format(
                    {
                      helpdeskArticle: W.Z.getArticleURL(
                        q.BhN.CONVERSATION_SUMMARIES,
                      ),
                    },
                  ),
                  onChange: this.handleChannelSummariesToggled,
                  value:
                    !e.hasFlag(X.zZ.SUMMARIES_DISABLED) &&
                    (null == C
                      ? void 0
                      : C.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
                  hideBorder: !0,
                  disabled:
                    !p ||
                    !(null == C
                      ? void 0
                      : C.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
                  children: (0, n.jsxs)("div", {
                    className: et.badgedItem,
                    children: [
                      ee.Z.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE,
                      (0, n.jsx)(h.TextBadge, {
                        text: ee.Z.Messages.BETA,
                        color: c.Z.colors.BG_BRAND.css,
                      }),
                    ],
                  }),
                })
              : null,
            em = e.isMediaChannel()
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(h.FormDivider, {
                      className: i()(es.marginTop40, es.marginBottom40),
                    }),
                    (0, n.jsx)(h.FormSwitch, {
                      onChange: this.handleShowMediaOptionsToggled,
                      value: !e.hasFlag(X.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      note: ee.Z.Messages
                        .MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
                      hideBorder: !0,
                      disabled: !p,
                      children:
                        ee.Z.Messages
                          .MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL,
                    }),
                  ],
                })
              : null;
          return (
            e.type === q.d4z.GUILD_CATEGORY
              ? ((T = ee.Z.Messages.CATEGORY_NAME), (g = "category-name"))
              : e.isForumPost()
                ? ((T = ee.Z.Messages.FORUM_POST_TITLE), (g = "post-title"))
                : L
                  ? ((T = ee.Z.Messages.THREAD_NAME), (g = "thread-name"))
                  : ((T = ee.Z.Messages.FORM_LABEL_CHANNEL_NAME),
                    (g = "channel-name")),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(h.FormItem, {
                  title: T,
                  children: (0, n.jsx)(h.TextInput, {
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: g,
                    autoFocus: !0,
                    disabled: I ? !N : !p,
                    maxLength: q.HN8,
                  }),
                }),
                (0, n.jsx)(h.FormDivider, {
                  className: i()(es.marginTop40, es.marginBottom40),
                }),
                P,
                F,
                B,
                H,
                z,
                K,
                G,
                k,
                en,
                ed,
                ec,
                eh,
                eu,
                em,
              ],
            })
          );
        }
        renderBitrate(e) {
          return "".concat(Math.round(e / 1e3), "kbps");
        }
        renderVoiceBitrate(e, t) {
          let { canManageChannels: s } = this.props;
          if (!this.showVoiceSettings()) return null;
          let l = (0, G.g7)(t, e),
            a = this.getError("bitrate");
          return (0, n.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: es.marginBottom40,
            children: [
              (0, n.jsx)(h.FormTitle, {
                id: ed,
                children: ee.Z.Messages.FORM_LABEL_BITRATE,
              }),
              "" !== a &&
                (0, n.jsx)(h.FormText, {
                  id: ec,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: c.Z.unsafe_rawColors.RED_400.css },
                  className: es.marginBottom8,
                  children: a,
                }),
              (0, n.jsx)(h.Slider, {
                initialValue: Math.min(e.bitrate, l),
                onValueChange: this.handleChangeBitrate,
                onValueRender: this.renderBitrate,
                onMarkerRender: this.renderBitrate,
                markers: [q.Fc, q.epw, l],
                minValue: q.Fc,
                maxValue: l,
                keyboardStep: q.V7H,
                disabled: !s,
                "aria-labelledby": ed,
                "aria-describedby": null != a && "" !== a ? ec : eu,
              }),
              l > q.epw
                ? (0, n.jsx)(h.FormText, {
                    id: eu,
                    type: h.FormTextTypes.DESCRIPTION,
                    children: ee.Z.Messages.FORM_HELP_BITRATE.format({
                      bitrate: q.epw / 1e3,
                    }),
                  })
                : null,
            ],
          });
        }
        showVoiceSettings() {
          let { channel: e } = this.props;
          return (
            null != e &&
            null != e.guild_id &&
            y.vg.has(e.type) &&
            (e.isGuildVocal() ||
              L.tM.getCurrentConfig({
                guildId: e.guild_id,
                location: "9b50bd_1",
              }).enabled)
          );
        }
        renderVideoQualityMode(e) {
          var t;
          let { canManageChannels: s } = this.props;
          if (!this.showVoiceSettings()) return null;
          let l = [
            { value: q.Ucd.AUTO, name: ee.Z.Messages.VIDEO_QUALITY_MODE_AUTO },
            { value: q.Ucd.FULL, name: ee.Z.Messages.VIDEO_QUALITY_MODE_FULL },
          ];
          return (0, n.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: es.marginBottom40,
            children: [
              (0, n.jsx)(h.FormItem, {
                title: ee.Z.Messages.FORM_LABEL_VIDEO_QUALITY,
                children: (0, n.jsx)(h.RadioGroup, {
                  onChange: (e) => {
                    let { value: t } = e;
                    return this.handleVideoQualityModeChange(t);
                  },
                  options: l,
                  value:
                    null !== (t = e.videoQualityMode) && void 0 !== t
                      ? t
                      : q.Ucd.AUTO,
                  disabled: !s,
                }),
              }),
              (0, n.jsx)(h.FormText, {
                type: h.FormTextTypes.DESCRIPTION,
                children: ee.Z.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format(),
              }),
            ],
          });
        }
        onRenderUserLimit(e) {
          return 0 === (e = Math.round(e))
            ? ee.Z.Messages.NO_USER_LIMIT
            : ee.Z.Messages.NUM_USERS.format({ num: e });
        }
        renderUserLimit(e) {
          let { canManageChannels: t } = this.props;
          if (!this.showVoiceSettings()) return null;
          let s = this.getError("user_limit"),
            l = e.isGuildStageVoice() ? q.xGv : q.$pe;
          return (0, n.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: es.marginBottom40,
            children: [
              (0, n.jsx)(h.FormTitle, {
                id: eh,
                children: ee.Z.Messages.FORM_LABEL_USER_LIMIT,
              }),
              "" !== s &&
                (0, n.jsx)(h.FormText, {
                  id: em,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: c.Z.unsafe_rawColors.RED_400.css },
                  className: es.marginBottom8,
                  children: s,
                }),
              (0, n.jsx)(h.Slider, {
                initialValue: Math.min(e.userLimit, l),
                onValueChange: this.handleUserLimitChange,
                onValueRender: this.onRenderUserLimit,
                onMarkerRender: (e) => (0 === Math.round(e) ? "∞" : e),
                markers: [0, l],
                minValue: 0,
                maxValue: l,
                disabled: !t,
                "aria-labelledby": eh,
                "aria-describedby": null != s && "" !== s ? em : eg,
              }),
              (0, n.jsx)(h.FormText, {
                id: eg,
                type: h.FormTextTypes.DESCRIPTION,
                children: (e.isGuildStageVoice()
                  ? ee.Z.Messages.FORM_HELP_USER_LIMIT_STAGE
                  : ee.Z.Messages.FORM_HELP_USER_LIMIT
                ).format(),
              }),
            ],
          });
        }
        renderRegionOverride(e) {
          var t;
          let { regions: s, canManageChannels: l, guild: a } = this.props;
          if (null == a || !this.showVoiceSettings() || e.isGuildStageVoice())
            return null;
          let i = [];
          null != s &&
            (i = s
              .filter((e) => !e.deprecated && !e.hidden)
              .map((e) => ({ label: e.name, value: e.id }))).unshift({
              label: ee.Z.Messages.AUTOMATIC_REGION,
              value: eT,
            });
          let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eT;
          return (0, n.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            children: [
              (0, n.jsx)(h.FormTitle, {
                children: ee.Z.Messages.FORM_LABEL_REGION_OVERRIDE,
              }),
              (0, n.jsx)(h.SingleSelect, {
                options: i,
                value: r,
                onChange: this.handleRegionChange,
                isDisabled: !l,
              }),
              (0, n.jsx)(h.FormText, {
                type: h.FormTextTypes.DESCRIPTION,
                children: ee.Z.Messages.FORM_HELP_REGION_OVERRIDE,
              }),
            ],
          });
        }
        renderJuiceImage(e) {
          let t;
          let { theme: l } = this.props;
          return (
            (t =
              e.type === q.d4z.GUILD_CATEGORY
                ? (0, u.wj)(l)
                  ? s(309095)
                  : s(925442)
                : (0, u.wj)(l)
                  ? s(316491)
                  : s(301358)),
            (0, n.jsx)(C.Z, {
              justify: C.Z.Justify.CENTER,
              className: es.marginTop60,
              children: (0, n.jsx)("img", {
                alt: "",
                width: 280,
                height: 165,
                src: t,
              }),
            })
          );
        }
        render() {
          let { channel: e, channelName: t, guild: s } = this.props;
          return null == e || null == t || null == s
            ? null
            : (0, n.jsxs)(h.FormSection, {
                className: "channel-settings-overview",
                tag: h.FormTitleTags.H1,
                title: ee.Z.Messages.OVERVIEW,
                children: [
                  this.renderChannelInfo(e, t),
                  this.showVoiceSettings()
                    ? (0, n.jsx)(h.FormDivider, {
                        className: i()(es.marginTop40, es.marginBottom40),
                      })
                    : null,
                  this.renderVoiceBitrate(e, s),
                  this.renderVideoQualityMode(e),
                  this.renderUserLimit(e),
                  this.renderRegionOverride(e),
                  this.renderJuiceImage(e),
                ],
              });
        }
        handleSubmit() {
          return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
          });
        }
        constructor(e) {
          var t, s;
          super(e),
            en(this, "renderEmojiPicker", (e) => {
              let { closePopout: t } = e,
                { channel: s } = this.props;
              return (0, n.jsx)(I.Z, {
                guildId: null == s ? void 0 : s.guild_id,
                closePopout: t,
                onSelectEmoji: (e, s) => {
                  this.handleChangeDefaultReactionEmoji(e), s && t();
                },
                pickerIntention: K.Hz.COMMUNITY_CONTENT,
                channel: s,
              });
            }),
            en(this, "handleRequireTagChanged", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, V.mB)(t.flags, X.zZ.REQUIRE_TAG, e);
              (0, m.pW)({ flags: s });
            }),
            en(this, "handleChangeName", (e) => {
              let { channel: t } = this.props;
              if (null != t)
                t.isThread()
                  ? (e = (0, j.Z)(e, !1))
                  : q.TPd.LIMITED_CHANNEL_NAME.has(t.type) &&
                    (e = (0, G.Nj)(e)),
                  (0, m.pW)({ name: e });
            }),
            en(this, "handleBlurName", () => {
              let { channel: e, channelName: t } = this.props;
              if ((null == e ? void 0 : e.isThread()) && null != t) {
                let e = (0, j.Z)(t, !0);
                e !== t && (0, m.pW)({ name: e });
              }
            }),
            en(this, "handleChangeTopic", (e) => {
              (0, m.pW)({ topic: R.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            en(this, "handleChangeRichTopic", (e, t, s) => {
              this.setState({ textTopicValue: t, richTopicValue: s }),
                this.handleChangeTopic(t);
            }),
            en(this, "handleChangeTemplate", (e) => {
              (0, m.pW)({ template: R.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            en(this, "handleChangeDefaultReactionEmoji", (e) => {
              let t =
                null == e
                  ? null
                  : (null == e ? void 0 : e.id) != null
                    ? { emojiId: e.id, emojiName: void 0 }
                    : {
                        emojiId: void 0,
                        emojiName: e.optionallyDiverseSequence,
                      };
              (0, m.pW)({ defaultReactionEmoji: t });
            }),
            en(this, "handleChangeDefaultForumLayout", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              (0, m.pW)({ defaultForumLayout: e }),
                this.props.handleSetDefaultLayout(e);
            }),
            en(this, "handleChangeDefaultSortOrder", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              (0, m.pW)({ defaultSortOrder: e });
            }),
            en(this, "handleChangeBitrate", (e) => {
              (0, m.pW)({ bitrate: 1e3 * Math.round(e / 1e3) });
            }),
            en(this, "handleUserLimitChange", (e) => {
              (0, m.pW)({ userLimit: Math.round(e) });
            }),
            en(this, "handleNSFWChange", (e) => {
              (0, m.pW)({ nsfw: e });
            }),
            en(this, "handleActiveChannelsRemovedChange", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, V.mB)(t.flags, X.zZ.ACTIVE_CHANNELS_REMOVED, !e);
              (0, m.pW)({ flags: s });
            }),
            en(this, "handleNewsChange", (e) => {
              (0, m.pW)({
                type: e ? q.d4z.GUILD_ANNOUNCEMENT : q.d4z.GUILD_TEXT,
              });
            }),
            en(this, "handleChangeSlowmode", (e) => {
              (0, m.pW)({ rateLimitPerUser: e });
            }),
            en(this, "handleChangeThreadMessageSlowmode", (e) => {
              (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            en(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
              (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            en(this, "handleRegionChange", (e) => {
              (0, m.pW)({ rtcRegion: e === eT ? null : e });
            }),
            en(this, "handleVideoQualityModeChange", (e) => {
              (0, m.pW)({ videoQualityMode: e });
            }),
            en(this, "handleAutoArchiveDurationChanged", (e) => {
              (0, m.pW)({ autoArchiveDuration: e });
            }),
            en(this, "handleInvitableChanged", (e) => {
              (0, m.pW)({ invitable: e });
            }),
            en(this, "handleChannelSummariesToggled", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, V.mB)(t.flags, X.zZ.SUMMARIES_DISABLED, !e);
              (0, m.pW)({ flags: s });
            }),
            en(this, "handleShowMediaOptionsToggled", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let s = (0, V.mB)(t.flags, X.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
              (0, m.pW)({ flags: s });
            });
          let l =
            null !==
              (s =
                null === (t = this.props.channel) || void 0 === t
                  ? void 0
                  : t.topic) && void 0 !== s
              ? s
              : "";
          this.state = {
            textTopicValue: l,
            richTopicValue: (0, x.JM)(l),
            topicFocused: !1,
          };
        }
      }
      function eS() {
        let {
            errors: e,
            channel: t,
            submitting: s,
            subsection: a,
          } = (0, d.cj)([P.Z], () => P.Z.getProps()),
          i = (0, d.e7)([H.Z], () => {
            var e;
            return H.Z.getRegions(
              null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e
                ? e
                : null,
            );
          }),
          r = (0, d.e7)([D.Z], () => D.Z.theme),
          o = (0, d.e7)([F.Z], () =>
            F.Z.getGuild(null == t ? void 0 : t.getGuildId()),
          ),
          c = (0, L.C7)(t),
          u = (0, L.Xb)(t),
          { canManageChannels: h, canSendMessages: m } = (0, d.cj)(
            [B.Z],
            () => ({
              canManageChannels: B.Z.can(q.Plq.MANAGE_CHANNELS, t),
              canSendMessages: B.Z.can(q.Plq.SEND_MESSAGES, t),
            }),
          ),
          g = (0, _.ZP)(t),
          E = w.default.getId(),
          T = (0, Z.v)(),
          S = null == t ? void 0 : t.id,
          x = (0, N.ts)(t, !1, !0),
          f = p.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
          }).enabled,
          C = l.useCallback(
            (e) => {
              null != S && T.getState().setLayoutType(S, e);
            },
            [S, T],
          );
        return (0, n.jsx)(e_, {
          errors: e,
          channel: t,
          channelName: g,
          submitting: s,
          regions: i,
          theme: r,
          guild: o,
          canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
          canSendMessages: m,
          isThreadModerator: u,
          canManageThread: c,
          subsection: a,
          isForumPost: null != t && t.isForumPost(),
          isOwner: null == t ? void 0 : t.isOwner(E),
          handleSetDefaultLayout: C,
          showChannelSummariesSettings: x,
          showAdvancedSlowModeSetting: f,
        });
      }
    },
    856606: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return Q;
        },
        n: function () {
          return G;
        },
      }),
        s(724458),
        s(653041),
        s(411104);
      var n = s(735250),
        l = s(470079),
        a = s(392711),
        i = s.n(a),
        r = s(149765),
        o = s(442837),
        d = s(780384),
        c = s(481060),
        u = s(668781),
        h = s(493683),
        m = s(741361),
        g = s(668390),
        E = s(144991),
        T = s(852860),
        p = s(911969),
        N = s(410030),
        _ = s(607070),
        S = s(940639),
        x = s(325476),
        f = s(146085),
        C = s(598077),
        M = s(277053),
        I = s(388610),
        R = s(271383),
        Z = s(430824),
        v = s(496675),
        A = s(594174),
        O = s(823379),
        L = s(892880),
        j = s(63063),
        b = s(5192),
        D = s(233608),
        y = s(700785),
        w = s(51144),
        P = s(257017),
        F = s(188857),
        B = s(981631),
        H = s(689938),
        U = s(137580);
      let G = o.ZP.connectStores([M.Z, I.Z], () => {
        let e = I.Z.getChannel();
        return {
          submitting: M.Z.formState === B.QZA.SUBMITTING,
          onReset() {
            (0, m.S1)();
          },
          onSave() {
            if (null == e) return;
            let t = M.Z.editedPermissionIds.reduce((e, t) => {
              let s = M.Z.getPermissionOverwrite(t);
              return null != s && e.push(s), e;
            }, []);
            (0, m.hw)(e.id, t);
          },
        };
      })(T.Z);
      function k(e) {
        let { overwrite: t } = e,
          s = (0, o.e7)([M.Z], () => M.Z.channel),
          l = (0, o.e7)([Z.Z], () =>
            null != s ? Z.Z.getGuild(s.getGuildId()) : null,
          ),
          a = (0, o.e7)([Z.Z], () => (null != l ? Z.Z.getRoles(l.id) : void 0));
        if (null == s || null == l || null == t) return null;
        let { guild_id: i, id: d } = s,
          { id: g } = t,
          T = () => {
            var e;
            if (null == Z.Z.getGuild(i) || null == a) return "";
            let t = a[g],
              s = A.default.getUser(g),
              n =
                null !== (e = null == s ? void 0 : s.username) && void 0 !== e
                  ? e
                  : "";
            return null != t ? t.name : n;
          },
          N = (e, n) => {
            if ("boolean" == typeof n) throw Error("Unexpected boolean action");
            let { allow: l, deny: a } = t;
            switch (((a = r.Od(a, e)), (l = r.Od(l, e)), n)) {
              case "ALLOW":
                l = r.IH(l, e);
                break;
              case "DENY":
                a = r.IH(a, e);
            }
            if (v.Z.can(e, s, { [g]: { ...t, allow: l, deny: a } }))
              (0, m.kY)(s, g, l, a);
            else {
              let e;
              if (t.type === p.BN.MEMBER) {
                let s = A.default.getUser(t.id);
                null != s && (e = w.ZP.getName(s));
              } else if (t.type === p.BN.ROLE) {
                let n = Z.Z.getGuild(s.getGuildId());
                if (null != n) {
                  let s = Z.Z.getRole(n.id, t.id);
                  null != s && (e = s.name);
                }
              }
              P.X(e);
            }
          },
          _ = () => {
            let e = T();
            u.Z.show({
              title: H.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
              body: H.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                name: e,
              }),
              cancelText: H.Z.Messages.CANCEL,
              onConfirm: () => h.Z.clearPermissionOverwrite(d, g),
            });
          },
          S = (e) => {
            let t =
              v.Z.can(B.Plq.ADMINISTRATOR, l) ||
              v.Z.can(B.Plq.MANAGE_ROLES, s, void 0, void 0, !0);
            return s.isGuildStageVoice() && f.xS.has(e)
              ? H.Z.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION
              : !(
                  (!r.fS(e, B.Plq.MANAGE_ROLES) || t) &&
                  (null == e || v.Z.can(e, l) || t)
                ) && H.Z.Messages.HELP_MISSING_PERMISSION;
          },
          C = g === i,
          I = s.isForumLikeChannel() && r.e$(t.deny, B.Plq.SEND_MESSAGES),
          R = r.e$(t.deny, B.Plq.SEND_MESSAGES),
          O = r.e$(t.deny, B.Plq.READ_MESSAGE_HISTORY),
          L = D.Z.generateChannelPermissionSpec(i, s, C, {
            createPostsDisabled: I,
            sendMessagesDisabled: R,
            readMessageHistoryDisabled: O,
          });
        return (0, n.jsxs)(x.ZP.Content, {
          className: U.layoutStyle,
          children: [
            L.map((e, s) =>
              (0, n.jsx)(
                E.Z,
                {
                  spec: e,
                  allow: t.allow,
                  deny: t.deny,
                  onChange: N,
                  permissionRender: S,
                  className: U.permissionsForm,
                },
                s,
              ),
            ),
            i === g
              ? null
              : (0, n.jsx)(c.Button, {
                  look: c.Button.Looks.OUTLINED,
                  color: c.Button.Colors.RED,
                  onClick: _,
                  children: H.Z.Messages.REMOVE_ROLE_OR_USER.format({
                    name: T(),
                  }),
                }),
          ],
        });
      }
      function V(e) {
        let { guildId: t, channelId: s, user: l } = e,
          a = l.getAvatarURL(t, 32),
          i = b.ZP.getNickname(t, s, l),
          r = w.ZP.useUserTag(l),
          o = null,
          d = null;
        return (
          (o = null != i ? i : l.hasAvatarForGuild(t) ? l.username : r),
          (null != i || l.hasAvatarForGuild(t)) &&
            (d = (0, n.jsxs)("div", {
              className: U.userRowSubText,
              children: [
                l.hasAvatarForGuild(t)
                  ? (0, n.jsx)(c.Avatar, {
                      className: U.userRowSubAvatar,
                      size: c.AvatarSizes.SIZE_16,
                      src: l.getAvatarURL(void 0, 16),
                      "aria-label": l.username,
                    })
                  : null,
                (0, n.jsx)(c.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: r,
                }),
              ],
            })),
          (0, n.jsxs)("div", {
            className: U.inline,
            children: [
              (0, n.jsx)(c.Avatar, {
                size: c.AvatarSizes.SIZE_32,
                src: a,
                "aria-label": l.username,
                className: U.userRowAvatar,
              }),
              (0, n.jsxs)("div", {
                className: U.userRowText,
                children: [
                  (0, n.jsx)(c.Text, {
                    className: U.userRowText,
                    variant: "text-md/normal",
                    children: o,
                  }),
                  d,
                ],
              }),
            ],
          })
        );
      }
      function W(e) {
        return (
          "object" == typeof e && null != e && "colorString" in e && "name" in e
        );
      }
      function z(e) {
        let {
            guild: t,
            channel: s,
            permissionOverwrites: l,
            onClose: a,
            onSelect: r,
            position: d,
          } = e,
          c = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
          u = (0, o.Wu)([R.ZP], () => R.ZP.getMemberIds(t.id));
        return (0, n.jsx)(S.Z, {
          label: H.Z.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
          placeholder: H.Z.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
          "aria-label": H.Z.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
          sections: [H.Z.Messages.ROLES, H.Z.Messages.MEMBERS],
          onRenderResult: (e) => {
            if (W(e)) {
              let t;
              return (
                null != e.colorString && (t = { color: e.colorString }),
                (0, n.jsx)("span", { style: t, children: e.name })
              );
            }
            if (e instanceof C.Z)
              return (0, n.jsx)(V, { guildId: t.id, channelId: s.id, user: e });
          },
          onFilterResults: (e, t) =>
            0 === t
              ? i()(c)
                  .filter((t) => null == l[t.id] && e(t.name))
                  .sortBy((e) => -e.position)
                  .value()
              : i()(u)
                  .map(A.default.getUser)
                  .filter(O.lm)
                  .filter((e) => !e.isClyde())
                  .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                  .sortBy((e) => e.username.toLowerCase())
                  .value(),
          onQueryChange: (e) => {
            L.Z.requestMembers(t.id, e, 20);
          },
          onSelect: (e) => {
            if (null != e)
              W(e)
                ? r(e.id, p.BN.ROLE)
                : e instanceof C.Z && r(e.id, p.BN.MEMBER);
          },
          onClose: a,
          position: d,
        });
      }
      function Y() {
        let {
            channel: e,
            permissionOverwrites: t,
            selectedOverwriteId: a,
          } = (0, o.cj)([M.Z], () => M.Z),
          r = null == e ? void 0 : e.getGuildId(),
          { guild: u, guildRoles: E } = (0, o.cj)(
            [Z.Z],
            () => {
              let e = null != r ? Z.Z.getGuild(r) : void 0,
                t = null != e ? Z.Z.getRoles(e.id) : void 0;
              return { guild: e, guildRoles: t };
            },
            [r],
          ),
          T = (0, F.Z)(r, t),
          S = (0, N.ZP)(),
          f = (0, o.e7)([_.Z], () => _.Z.roleStyle);
        if (null == u || null == E || null == e || null == t) return null;
        let C = (s) => {
            let { position: l, closePopout: a } = s;
            return (0, n.jsx)(z, {
              guild: u,
              channel: e,
              permissionOverwrites: t,
              position: null != l ? l : "bottom",
              onSelect: I,
              onClose: a,
            });
          },
          I = (t, s) => {
            h.Z.updatePermissionOverwrite(e.id, {
              id: t,
              type: s,
              allow: y.Hn,
              deny: y.Hn,
            }).then(() => (0, m.Aj)(t));
          };
        null != t && null == t[u.id] && (t[u.id] = y.we(u.id));
        let R = i()(t)
            .filter((e) => e.type === p.BN.ROLE)
            .map((e) => E[e.id])
            .filter(O.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
              (0, n.jsx)(
                g.Z,
                {
                  theme: S,
                  roleStyle: f,
                  id: e.id,
                  role: e,
                  guild: u,
                  color: e.colorString,
                  "aria-label": e.name,
                  children: e.name,
                },
                "".concat(a, "-").concat(e.id),
              ),
            )
            .value(),
          v = i()(T)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
              let t = e.getAvatarURL(u.id, 24);
              return (0, n.jsx)(
                g.Z,
                {
                  id: e.id,
                  guild: u,
                  theme: S,
                  roleStyle: f,
                  "aria-label": w.ZP.getUserTag(e, { decoration: "never" }),
                  children: (0, n.jsxs)("div", {
                    className: U.inline,
                    children: [
                      (0, n.jsx)(c.Avatar, {
                        size: c.AvatarSizes.SIZE_20,
                        src: t,
                        "aria-label": e.username,
                        className: U.xsmallAvatar,
                      }),
                      (0, n.jsx)("span", {
                        className: U.username,
                        children: w.ZP.getUserTag(e),
                      }),
                    ],
                  }),
                },
                "".concat(a, "-").concat(e.id),
              );
            })
            .value();
        return (0, n.jsx)(x.ZP.Sidebar, {
          className: U.layoutStyle,
          scrollable: !0,
          children: (0, n.jsxs)(c.TabBar, {
            onItemSelect: m.Aj,
            selectedItem: a,
            orientation: "vertical",
            children: [
              (() => {
                let e = (0, d.wj)(S) ? s(521715) : s(299603);
                return (0, n.jsx)(c.Popout, {
                  renderPopout: C,
                  position: "bottom",
                  autoInvert: !1,
                  children: (t) =>
                    (0, n.jsx)(c.TabBar.Header, {
                      ...t,
                      children: (0, n.jsxs)("div", {
                        className: U.sidebarHeaderDefault,
                        children: [
                          (0, n.jsxs)("span", {
                            children: [
                              H.Z.Messages.ROLES,
                              "/",
                              H.Z.Messages.MEMBERS,
                            ],
                          }),
                          (0, n.jsx)("img", {
                            alt: "",
                            className: U.sidebarHeader,
                            src: e,
                          }),
                        ],
                      }),
                    }),
                });
              })(),
              R,
              v,
              (0, n.jsxs)(l.Fragment, {
                children: [
                  (0, n.jsx)(c.TabBar.Separator, {
                    style: { marginTop: 20, marginBottom: 14 },
                  }),
                  (0, n.jsx)(c.FormText, {
                    type: c.FormTextTypes.DESCRIPTION,
                    children: (0, n.jsx)(c.Anchor, {
                      href: j.Z.getArticleURL(B.BhN.PERMISSIONS_TUTORIAL),
                      target: "_blank",
                      children: H.Z.Messages.PERMISSION_HELPDESK,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Q() {
        let {
          channel: e,
          permissionOverwrites: t,
          selectedOverwriteId: s,
        } = (0, o.cj)([M.Z], () => M.Z);
        if (
          null ==
            (0, o.e7)([Z.Z], () =>
              null != e ? Z.Z.getGuild(e.getGuildId()) : null,
            ) ||
          null == e ||
          null == t ||
          null == s
        )
          return null;
        let l = t[s];
        return (0, n.jsxs)(x.ZP, {
          className: U.container,
          children: [(0, n.jsx)(Y, {}), (0, n.jsx)(k, { overwrite: l })],
        });
      }
    },
    296146: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(325767);
      function a(e) {
        let {
          color: t = "currentColor",
          foreground: s,
          backgroundColor: a = "none",
          ...i
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.Z)(i),
          width: "272",
          height: "143",
          viewBox: "0 0 272 143",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("rect", {
              className: s,
              width: "130",
              height: "143",
              rx: "12",
              fill: a,
            }),
            (0, n.jsx)("path", {
              className: s,
              opacity: "0.5",
              d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
              fill: t,
            }),
            (0, n.jsx)("path", {
              className: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
              fill: "#C4C4C4",
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "99",
              width: "106",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "123",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("circle", {
              className: s,
              opacity: "0.5",
              cx: "54",
              cy: "127",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "64",
              y: "123",
              width: "54",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              x: "0.5",
              y: "0.5",
              width: "129",
              height: "142",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
            (0, n.jsx)("rect", {
              className: s,
              x: "142",
              width: "130",
              height: "143",
              rx: "12",
              fill: a,
            }),
            (0, n.jsx)("path", {
              className: s,
              opacity: "0.5",
              d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
              fill: t,
            }),
            (0, n.jsx)("path", {
              className: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
              fill: "#C4C4C4",
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "154",
              y: "99",
              width: "106",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "154",
              y: "123",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("circle", {
              className: s,
              opacity: "0.5",
              cx: "196",
              cy: "127",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "206",
              y: "123",
              width: "54",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              x: "142.5",
              y: "0.5",
              width: "129",
              height: "142",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
          ],
        });
      }
    },
    564735: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(325767);
      function a(e) {
        let {
          color: t = "currentColor",
          foreground: s,
          backgroundColor: a = "none",
          ...i
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.Z)(i),
          width: "272",
          height: "143",
          viewBox: "0 0 272 143",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("rect", {
              className: s,
              y: "15.5",
              width: "272",
              height: "112",
              rx: "12",
              fill: a,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "27.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "43.5",
              width: "96",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "67.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "83.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "196",
              y: "27.5",
              width: "64",
              height: "64",
              rx: "8",
              fill: t,
            }),
            (0, n.jsx)("path", {
              className: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
              fill: "#C4C4C4",
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "12",
              y: "107.5",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("circle", {
              className: s,
              opacity: "0.5",
              cx: "54",
              cy: "111.5",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, n.jsx)("rect", {
              className: s,
              opacity: "0.5",
              x: "64",
              y: "107.5",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, n.jsx)("rect", {
              className: s,
              x: "0.5",
              y: "16",
              width: "271",
              height: "111",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
          ],
        });
      }
    },
    162389: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return _;
        },
      });
      var n = s(735250),
        l = s(470079),
        a = s(120356),
        i = s.n(a),
        r = s(442837),
        o = s(692547),
        d = s(481060),
        c = s(787014),
        u = s(603211),
        h = s(710344),
        m = s(496675),
        g = s(479099),
        E = s(710352),
        T = s(981631),
        p = s(689938),
        N = s(654244);
      function _(e) {
        let { channel: t } = e,
          a = (0, r.e7)([m.Z], () => m.Z.can(T.Plq.MANAGE_CHANNELS, t), [t]),
          u = t.availableTags.length >= E.pC,
          g = t.availableTags.length > 0,
          _ = l.useCallback(() => {
            let e = t.availableTags.length >= E.pC;
            a &&
              !e &&
              (0, d.openModalLazy)(async () => {
                let { default: e } = await s.e("21971").then(s.bind(s, 201049));
                return (s) =>
                  (0, n.jsx)(e, { ...s, channelId: t.id, guildId: t.guild_id });
              });
          }, [t, a]),
          x = l.useCallback(
            (e) => {
              a &&
                (0, d.openModalLazy)(async () => {
                  let { default: l } = await s
                    .e("21971")
                    .then(s.bind(s, 201049));
                  return (s) =>
                    (0, n.jsx)(l, {
                      ...s,
                      channelId: t.id,
                      guildId: t.guild_id,
                      tag: e,
                    });
                });
            },
            [a, t],
          ),
          {
            handleDragStart: f,
            handleDragReset: C,
            handleDragComplete: M,
          } = (0, h.Z)(t.availableTags, (e) => {
            (0, c.pW)({ availableTags: e });
          });
        return (0, n.jsxs)("div", {
          className: N.tags,
          children: [
            g
              ? t.availableTags.map((e) =>
                  (0, n.jsx)(
                    S,
                    {
                      tag: e,
                      availableTags: t.availableTags,
                      canManageChannels: a,
                      onTagClick: x,
                      onDragComplete: M,
                      onDragReset: C,
                      onDragStart: f,
                    },
                    e.id,
                  ),
                )
              : null,
            g
              ? (0, n.jsx)(d.Clickable, {
                  onClick: _,
                  className: i()(N.addTags, { [N.disabled]: !a || u }),
                  children: (0, n.jsx)(d.PlusSmallIcon, {
                    size: "custom",
                    "aria-label": p.Z.Messages.FORUM_TAG_CREATE,
                    color: o.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                  }),
                })
              : (0, n.jsx)(d.Button, {
                  disabled: !a,
                  onClick: _,
                  children: p.Z.Messages.FORUM_TAG_CREATE,
                }),
          ],
        });
      }
      function S(e) {
        let {
            tag: t,
            availableTags: s,
            canManageChannels: l,
            onTagClick: a,
            onDragComplete: r,
            onDragStart: o,
            onDragReset: d,
          } = e,
          c = s.findIndex((e) => e.id === t.id),
          {
            drag: h,
            dragSourcePosition: m,
            drop: E,
            setIsDraggable: T,
          } = (0, u.Z)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: d,
          });
        return (0, n.jsx)("div", {
          className: i()(N.container, {
            [N.dropIndicatorBefore]: null != m && c < m,
            [N.dropIndicatorAfter]: null != m && c > m,
          }),
          ref: (e) => h(E(e)),
          onMouseEnter: () => T(l),
          onMouseLeave: () => T(!1),
          children: (0, n.jsx)(g.Z, {
            tag: t,
            disabled: !l,
            ariaLabel: p.Z.Messages.FORUM_TAG_EDIT_LABEL.format({
              name: t.name,
            }),
            onClick: l ? () => a(t) : void 0,
          }),
        });
      }
    },
    946458: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(442837),
        a = s(481060),
        i = s(596454),
        r = s(339085),
        o = s(930528);
      function d(e) {
        let { reactionEmoji: t } = e,
          s = (0, l.e7)([r.ZP], () =>
            (null == t ? void 0 : t.emojiId) != null
              ? r.ZP.getUsableCustomEmojiById(t.emojiId)
              : null,
          );
        return (0, n.jsxs)("div", {
          className: o.container,
          children: [
            (0, n.jsxs)("div", {
              className: o.body,
              children: [
                (0, n.jsxs)("div", {
                  className: o.placeholderLines,
                  children: [
                    (0, n.jsx)(c, { width: "100%", marginBottom: 8 }),
                    (0, n.jsx)(c, { width: "80%", marginBottom: 16 }),
                    (0, n.jsx)(c, { width: "50%", marginBottom: 8 }),
                    (0, n.jsx)(c, { width: "60%", marginBottom: 16 }),
                  ],
                }),
                (0, n.jsx)("div", { className: o.placeholderMedia }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: o.footer,
              children: [
                (0, n.jsxs)("div", {
                  className: o.reaction,
                  children: [
                    null != t
                      ? (0, n.jsx)(i.Z, {
                          className: o.reactionEmote,
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: !!(null == s ? void 0 : s.animated),
                        })
                      : (0, n.jsx)(a.ReactionIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: o.reactionEmote,
                        }),
                    (0, n.jsx)(a.Text, {
                      variant: "text-sm/semibold",
                      color: "interactive-normal",
                      children: 17,
                    }),
                  ],
                }),
                (0, n.jsx)(c, { width: "24px", marginBottom: 0 }),
                (0, n.jsx)("div", { className: o.dot }),
                (0, n.jsx)(c, { width: "24px", marginBottom: 0 }),
              ],
            }),
          ],
        });
      }
      function c(e) {
        let { width: t, marginBottom: s } = e;
        return (0, n.jsx)("div", {
          className: o.placeholderLine,
          style: { width: t, marginBottom: s },
        });
      }
    },
    693196: function (e, t, s) {
      s.d(t, {
        T: function () {
          return r;
        },
      });
      var n = s(526120),
        l = s(563534),
        a = s(734893),
        i = s(931261);
      async function r(e, t) {
        if (null == e || !(0, i.s)(e)) return;
        let s = l.Z.getSettings(e);
        return (s === l.P && (await (0, n.cP)(e), (s = l.Z.getSettings(e))),
        s === l.P || null == s)
          ? void 0
          : null != s.newMemberActions &&
              null != s.newMemberActions.find((e) => e.channelId === t)
            ? a.j.TODO
            : null != s.resourceChannels &&
                null != s.resourceChannels.find((e) => e.channelId === t)
              ? a.j.RESOURCE
              : void 0;
      }
    },
    75464: function (e, t, s) {
      s(47120);
      var n,
        l = s(735250),
        a = s(470079),
        i = s(120356),
        r = s.n(i),
        o = s(153066),
        d = s(853270);
      function c(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      let u = {
          XSMALL: d.xsmall,
          SMALL: d.small,
          MEDIUM: d.medium,
          LARGE: d.large,
        },
        h = { DEFAULT: "default", STATIC: "static" };
      class m extends (n = a.PureComponent) {
        render() {
          let { size: e, src: t, srcHover: s, className: n, ...a } = this.props,
            { hovered: i } = this.state,
            c = this.getMode();
          return (0, l.jsx)("button", {
            className: r()((0, o.l)(d, "iconButton", c), n, e),
            style: {
              backgroundImage: "url('".concat(i && null != s ? s : t, "')"),
            },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...a,
          });
        }
        constructor(...e) {
          super(...e),
            c(this, "state", { hovered: !1 }),
            c(this, "getMode", () =>
              null != this.props.srcHover ? h.STATIC : h.DEFAULT,
            ),
            c(this, "handleHover", (e) => {
              let { onMouseEnter: t } = this.props;
              null == t || t(e),
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            c(this, "handleBlur", (e) => {
              let { onMouseLeave: t } = this.props;
              null == t || t(e),
                this.state.hovered && this.setState({ hovered: !1 });
            });
        }
      }
      c(m, "Sizes", u),
        c(m, "defaultProps", { size: u.MEDIUM, disabled: !1 }),
        (t.Z = m);
    },
    747212: function (e, t, s) {
      s(47120);
      var n = s(735250);
      s(470079);
      var l = s(120356),
        a = s.n(l),
        i = s(481060),
        r = s(968437),
        o = s(689938),
        d = s(822302);
      t.Z = (e) => {
        let { autoArchiveDuration: t, onChange: s, isDisabled: l } = e,
          c = (0, r.nt)(),
          u = (e, t) =>
            (0, n.jsx)("span", {
              className: a()(d.optionLabel, { [d.dropdownOption]: t }),
              children: e.label,
            });
        return (0, n.jsx)(i.FormSection, {
          title: o.Z.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
          className: d.formSection,
          children: (0, n.jsx)(i.SingleSelect, {
            isDisabled: l,
            options: c,
            value: t,
            maxVisibleItems: c.length,
            onChange: s,
            optionClassName: d.dropdownOption,
            renderOptionLabel: (e) => u(e, !0),
            renderOptionValue: (e) => {
              let [t] = e;
              return u(t, !1);
            },
          }),
        });
      };
    },
    903386: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(735250);
      function l(e) {
        let {
          width: t = 18,
          height: s = 18,
          color: l = "currentColor",
          foreground: a,
          background: i,
          className: r,
        } = e;
        return (0, n.jsx)("svg", {
          width: t,
          height: s,
          className: r,
          viewBox: "0 0 18 18",
          children: (0, n.jsxs)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, n.jsx)("polygon", { points: "0 0 18 0 18 18 0 18" }),
              (0, n.jsx)("path", {
                d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
                fillOpacity: "0.3",
                fill: l,
                fillRule: "nonzero",
                className: i,
              }),
              (0, n.jsx)("path", {
                d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                fill: l,
                className: a,
              }),
            ],
          }),
        });
      }
      s(470079);
    },
    129724: function (e, t, s) {
      s.d(t, {
        A: function () {
          return i;
        },
      });
      var n = s(913527),
        l = s.n(n),
        a = s(689938);
      function i(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : a.Z.Messages.FORM_LABEL_OFF,
          n = l().duration(e, "seconds");
        if (n.days() > 0)
          return (
            t ? a.Z.Messages.DURATION_DAYS_SHORT : a.Z.Messages.DURATION_DAYS
          ).format({ days: n.days() });
        if (n.hours() > 0)
          return (
            t ? a.Z.Messages.DURATION_HOURS_SHORT : a.Z.Messages.DURATION_HOURS
          ).format({ hours: n.hours() });
        if (n.minutes() > 0)
          return (
            t
              ? a.Z.Messages.DURATION_MINUTES_SHORT
              : a.Z.Messages.DURATION_MINUTES
          ).format({ minutes: n.minutes() });
        else if (e > 0)
          return (
            t
              ? a.Z.Messages.DURATION_SECONDS_SHORT
              : a.Z.Messages.DURATION_SECONDS
          ).format({ seconds: n.seconds() });
        else return t ? a.Z.Messages.FORM_LABEL_OFF : s;
      }
    },
    160721: function (e, t, s) {
      e.exports = {
        role: "role_f778a8",
        roleOverflow: "roleOverflow_f778a8",
        roleContent: "roleContent_f778a8",
        roleInner: "roleInner_f778a8",
        open: "open_f778a8",
        roleDot: "roleDot_f778a8",
        roleCircle: "roleCircle_f778a8",
        lock: "lock_f778a8",
        dragged: "dragged_f778a8",
      };
    },
    449730: function (e, t, s) {
      e.exports = {
        container: "container_cf6b7d",
        sectionTag: "sectionTag_cf6b7d",
        headerText: "headerText_cf6b7d",
        input: "input_cf6b7d",
        header: "header_cf6b7d",
        autocompleteShadow: "autocompleteShadow_cf6b7d",
        autocompleteArrowWrapper: "autocompleteArrowWrapper_cf6b7d",
        autocompleteArrow: "autocompleteArrow_cf6b7d",
        autocompleteHeaderBackground: "autocompleteHeaderBackground_cf6b7d",
        autocompleteScroller: "autocompleteScroller_cf6b7d",
        section: "section_cf6b7d",
        empty: "empty_cf6b7d",
        row: "row_cf6b7d",
        rowInner: "rowInner_cf6b7d",
        selected: "selected_cf6b7d",
        noResultsHeader: "noResultsHeader_cf6b7d",
        positionBottom: "positionBottom_cf6b7d",
        positionTop: "positionTop_cf6b7d",
      };
    },
    95317: function (e, t, s) {
      e.exports = {
        advancedModeDivider: "advancedModeDivider_cd9517",
        advancedTitle: "advancedTitle_cd9517",
        titleCaret: "titleCaret_cd9517",
      };
    },
    343535: function (e, t, s) {
      e.exports = {
        settingCard: "settingCard_dd864e",
        active: "active_dd864e",
        shield: "shield_dd864e " + s("212711").desaturateUserColors,
        cardIcon: "cardIcon_dd864e",
        cardFolder: "cardFolder_dd864e",
        adminWarning: "adminWarning_dd864e",
        folderHeader: "folderHeader_dd864e",
        folderTitle: "folderTitle_dd864e",
        sectionTitle: "sectionTitle_dd864e",
        roleMemberList: "roleMemberList_dd864e",
        divider: "divider_dd864e",
        memberRow: "memberRow_dd864e",
        rowHeight: "rowHeight_dd864e",
        rowLabel: "rowLabel_dd864e",
        rowBotTag: "rowBotTag_dd864e",
        rowLabelSubText: "rowLabelSubText_dd864e",
        removeIconContainer: "removeIconContainer_dd864e",
        removeIcon: "removeIcon_dd864e",
        disabledRemoveIcon: "disabledRemoveIcon_dd864e",
      };
    },
    291338: function (e, t, s) {
      e.exports = {
        cardContent: "cardContent_eaaaea",
        cardDescription: "cardDescription_eaaaea",
      };
    },
    13735: function (e, t, s) {
      e.exports = { card: "card_ac370c", label: "label_ac370c" };
    },
    354657: function (e, t, s) {
      e.exports = {
        category: "category_c394c4",
        channelIcon: "channelIcon_c394c4",
      };
    },
    963562: function (e, t, s) {
      e.exports = {
        formTitle: "formTitle_bc05bb",
        description: "description_bc05bb",
        forumGuidelines: "forumGuidelines_bc05bb",
        forumGuidelinesCharacterCount: "forumGuidelinesCharacterCount_bc05bb",
        badgedItem: "badgedItem_bc05bb",
        twoColumnSettings: "twoColumnSettings_bc05bb",
        settingsLeft: "settingsLeft_bc05bb",
        settingsDefaultReaction: "settingsDefaultReaction_bc05bb",
        settingsDefaultView: "settingsDefaultView_bc05bb",
        buttonRow: "buttonRow_bc05bb",
        removeButton: "removeButton_bc05bb",
        defaultImageView: "defaultImageView_bc05bb",
      };
    },
    137580: function (e, t, s) {
      e.exports = {
        container: "container_a49993",
        sidebarHeader: "sidebarHeader_a49993",
        layoutStyle: "layoutStyle_a49993",
        inline: "inline_a49993",
        xsmallAvatar: "xsmallAvatar_a49993",
        sidebarHeaderDefault:
          "sidebarHeaderDefault_a49993 sidebarHeader_a49993",
        username: "username_a49993",
        userRowAvatar: "userRowAvatar_a49993",
        userRowText: "userRowText_a49993",
        userRowSubText: "userRowSubText_a49993",
        userRowSubAvatar: "userRowSubAvatar_a49993",
        permissionsForm: "permissionsForm_a49993",
      };
    },
    654244: function (e, t, s) {
      e.exports = {
        tags: "tags_faaca1",
        addTags: "addTags_faaca1",
        disabled: "disabled_faaca1",
        container: "container_faaca1",
        dropIndicatorBefore: "dropIndicatorBefore_faaca1",
        dropIndicatorAfter: "dropIndicatorAfter_faaca1",
      };
    },
    930528: function (e, t, s) {
      e.exports = {
        container: "container_b36404",
        body: "body_b36404",
        footer: "footer_b36404",
        placeholderLines: "placeholderLines_b36404",
        placeholderLine: "placeholderLine_b36404",
        placeholderMedia: "placeholderMedia_b36404",
        reaction: "reaction_b36404",
        reactionEmote: "reactionEmote_b36404",
        dot: "dot_b36404",
      };
    },
    853270: function (e, t, s) {
      s.r(
        (e.exports = {
          iconButton: "iconButton_c24082",
          iconButtonDefault: "iconButtonDefault_c24082 iconButton_c24082",
          iconButtonStatic: "iconButtonStatic_c24082 iconButton_c24082",
          large: "large_c24082",
          medium: "medium_c24082",
          small: "small_c24082",
          xsmall: "xsmall_c24082",
        }),
      );
    },
    822302: function (e, t, s) {
      e.exports = {
        formSection: "formSection_b9db9f",
        dropdownOption: "dropdownOption_b9db9f",
        optionLabel: "optionLabel_b9db9f",
      };
    },
  },
]);
//# sourceMappingURL=c6e736216f1f6625d3e9.js.map
