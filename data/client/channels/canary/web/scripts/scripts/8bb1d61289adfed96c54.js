(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["75116"],
  {
    785902: function (e) {
      e.exports = function (e, t, s, n) {
        for (var l = -1, i = null == e ? 0 : e.length; ++l < i; ) {
          var a = e[l];
          t(n, a, s(a), e);
        }
        return n;
      };
    },
    800128: function (e, t, s) {
      var n = s(543744);
      e.exports = function (e, t, s, l) {
        return (
          n(e, function (e, n, i) {
            t(l, e, s(e), i);
          }),
          l
        );
      };
    },
    757009: function (e, t, s) {
      var n = s(785902),
        l = s(800128),
        i = s(256098),
        a = s(290677);
      e.exports = function (e, t) {
        return function (s, r) {
          var o = a(s) ? n : l,
            c = t ? t() : {};
          return o(s, e, i(r, 2), c);
        };
      };
    },
    790333: function (e, t, s) {
      var n = s(757009)(
        function (e, t, s) {
          e[s ? 0 : 1].push(t);
        },
        function () {
          return [[], []];
        },
      );
      e.exports = n;
    },
    309095: function (e) {
      "use strict";
      e.exports = "/assets/a221ecd0f9f14fe4d0b1.svg";
    },
    316491: function (e) {
      "use strict";
      e.exports = "/assets/490943c0bf8c5298a2a5.svg";
    },
    925442: function (e) {
      "use strict";
      e.exports = "/assets/ec411ddc89957ad4437f.svg";
    },
    301358: function (e) {
      "use strict";
      e.exports = "/assets/8bd0c5b096e166c5857f.svg";
    },
    677374: function (e) {
      "use strict";
      e.exports = "/assets/fd1cb3327bd32ffe9857.svg";
    },
    230608: function (e) {
      "use strict";
      e.exports = "/assets/6f359ddf39030653583f.svg";
    },
    776226: function (e) {
      "use strict";
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      "use strict";
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    514811: function (e) {
      "use strict";
      e.exports = "/assets/ee13a11e73ea9186983a.svg";
    },
    27377: function (e) {
      "use strict";
      e.exports = "/assets/0d535049ff35afa34f01.svg";
    },
    299603: function (e) {
      "use strict";
      e.exports = "/assets/44cb292e6456da9c4afc.svg";
    },
    521715: function (e) {
      "use strict";
      e.exports = "/assets/728b7f566154f33cc8d9.svg";
    },
    225433: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(120356),
        i = s.n(l),
        a = s(481060),
        r = s(689938),
        o = s(60179);
      let c = Object.freeze({ DEFAULT: o.default, FILLED: o.filled });
      function d(e) {
        let {
          className: t,
          onClick: s,
          "aria-label": l,
          look: d = c.DEFAULT,
        } = e;
        return (0, n.jsx)(a.Clickable, {
          "aria-label": null != l ? l : r.Z.Messages.REMOVE,
          className: i()(o.button, d, t),
          onClick: s,
        });
      }
      d.Looks = c;
    },
    668390: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return E;
        },
      }),
        s(47120);
      var n = s(735250),
        l = s(470079),
        i = s(120356),
        a = s.n(i),
        r = s(780384),
        o = s(481060),
        c = s(239091),
        d = s(741247),
        u = s(75464),
        h = s(689938),
        m = s(244430);
      function g(e) {
        let { role: t, guild: i } = e,
          [r, u] = l.useState(!1);
        return (0, d.useHasGuildRoleItems)(i, t)
          ? (0, n.jsx)(o.Clickable, {
              onClick: (e) => {
                u(!0),
                  (0, c.jW)(
                    e,
                    async () => {
                      let { default: e } = await Promise.resolve().then(
                        s.bind(s, 741247),
                      );
                      return (s) => (0, n.jsx)(e, { ...s, role: t, guild: i });
                    },
                    { onClose: () => u(!1) },
                  );
              },
              className: a()(m.roleOverflow, { [m.open]: r }),
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
            id: i,
            role: a,
            guild: d,
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
              (0, c.jW)(e, async () => {
                let { default: e } = await s.e("5396").then(s.bind(s, 731646));
                return (t) =>
                  (0, n.jsx)(e, {
                    ...t,
                    id: i,
                    label: h.Z.Messages.COPY_ID_ROLE,
                  });
              });
            },
            [i],
          );
        return T
          ? (0, n.jsx)("div", { className: m.dragged })
          : (0, n.jsx)(o.TabBar.Item, {
              className: m.role,
              id: i,
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
                  f && null != a ? (0, n.jsx)(g, { guild: d, role: a }) : null,
                ],
              }),
            });
      }
    },
    852860: function (e, t, s) {
      "use strict";
      s(47120);
      var n = s(735250),
        l = s(470079),
        i = s(526629),
        a = s(692547),
        r = s(481060),
        o = s(585483),
        c = s(981631),
        d = s(689938),
        u = s(147768);
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
            C({ spring: 1, config: i.config.gentle }),
              C({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            o.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              o.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [C]);
        let M = f.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, r.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          I = f.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, r.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          R = f.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, r.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, n.jsx)(i.animated.div, {
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
                  children: (0, n.jsx)(i.animated.div, {
                    className: u.message,
                    style: { color: null != h ? R : M },
                    children:
                      null !== (t = null != h ? h : s) && void 0 !== t
                        ? t
                        : d.Z.Messages.SETTINGS_NOTICE_MESSAGE,
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
                        children: (0, n.jsx)(i.animated.span, {
                          style: { color: M },
                          children: null != p ? p : d.Z.Messages.RESET,
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
                                null != T ? T : d.Z.Messages.SAVE_CHANGES,
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
      "use strict";
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
      "use strict";
      s(653041), s(47120), s(724458);
      var n,
        l = s(735250),
        i = s(470079),
        a = s(120356),
        r = s.n(a),
        o = s(442837),
        c = s(481060),
        d = s(607070),
        u = s(251625),
        h = s(226951),
        m = s(981631),
        g = s(689938),
        E = s(714845);
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
      class p extends (n = i.Component) {
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
          return (0, l.jsxs)(c.Dialog, {
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
                children: (0, l.jsx)(c.List, {
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
            T(this, "inputRef", i.createRef()),
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
                { selectedRow: i } = this.state;
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
              let a = this.getRows(),
                o = this.getSelectedSection(a),
                d = null === (t = a[s]) || void 0 === t ? void 0 : t[n];
              return (0, l.jsx)(
                c.Clickable,
                {
                  onClick: this.handleClick.bind(this, s, n),
                  onMouseEnter: this.handleMouseEnter.bind(this, s, n),
                  className: r()(E.row, { [E.selected]: o === s && i === n }),
                  children: (0, l.jsx)("div", {
                    className: E.rowInner,
                    children: this.props.onRenderResult(d, s),
                  }),
                },
                "".concat(s, "-").concat(n),
              );
            });
        }
      }
      T(p, "defaultProps", { sections: [null] }),
        (t.Z = o.ZP.connectStores([d.Z], () => ({
          keyboardModeEnabled: d.Z.keyboardModeEnabled,
        }))(p));
    },
    27544: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return g;
        },
      }),
        s(47120);
      var n = s(735250),
        l = s(470079),
        i = s(748780),
        a = s(442837),
        r = s(481060),
        o = s(741361),
        c = s(856606),
        d = s(277053),
        u = s(259580),
        h = s(689938),
        m = s(724129);
      function g() {
        let e = (0, a.e7)([d.Z], () => d.Z.advancedMode),
          [t] = l.useState(new i.Z.Value(e ? 1 : 0));
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(r.FormDivider, { className: m.advancedModeDivider }),
            (0, n.jsx)(r.HeadingLevel, {
              component: (0, n.jsx)(r.Button, {
                look: r.Button.Looks.BLANK,
                color: r.Button.Colors.TRANSPARENT,
                onClick: function () {
                  e
                    ? i.Z.timing(t, { toValue: 0, duration: 250 }).start(() => {
                        (0, o.d$)(!1);
                      })
                    : ((0, o.d$)(!0),
                      i.Z.timing(t, { toValue: 1, duration: 250 }).start());
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
                (0, n.jsx)(i.Z.div, {
                  style: { opacity: t },
                  children: (0, n.jsx)(c.Z, {}),
                }),
            }),
          ],
        });
      }
    },
    351123: function (e, t, s) {
      "use strict";
      s(47120), s(724458);
      var n = s(735250),
        l = s(470079),
        i = s(120356),
        a = s.n(i),
        r = s(442837),
        o = s(481060),
        c = s(668781),
        d = s(493683),
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
        F = s(94255);
      function B(e) {
        let {
          channel: t,
          roles: s,
          members: l,
          disabledReason: i,
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
            let M = !f && null == i && null != p.id;
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
                      text: null != i ? i : r(p.rowType, p.disabled),
                      children: (0, n.jsx)(o.Clickable, {
                        onClick: () => {
                          var e, s, n;
                          return (
                            M &&
                            null != p &&
                            ((e = p.id),
                            (s = p.name),
                            (n = p.rowType),
                            void c.Z.show({
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
                                      ? d.Z.clearPermissionOverwrite(t.id, n.id)
                                      : (0, h.hw)(t.id, [n]);
                                  } else d.Z.clearPermissionOverwrite(t.id, e);
                                })(e, n),
                            }))
                          );
                        },
                        "aria-disabled": !M,
                        "aria-label": P.Z.Messages.REMOVE,
                        children: (0, n.jsx)(o.CircleXIcon, {
                          size: "md",
                          color: "currentColor",
                          className: a()(F.removeIcon, {
                            [F.disabledRemoveIcon]: f || i,
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
        let { guild: t, channel: l, permissionUpdates: i } = e,
          c = (0, r.e7)([I.Z], () => I.Z.getRoles(t.id)),
          d = O.RZ(t, c, l, x.yP, i),
          u = (0, r.e7)([M.ZP], () =>
            O.cR(M.ZP.getMemberIds(t.id), l, t, x.yP, i),
          ),
          h = (0, S.nG)(l.id);
        function m() {
          (0, o.openModalLazy)(async () => {
            let { default: e } = await s.e("82961").then(s.bind(s, 388131));
            return (t) => (0, n.jsx)(e, { ...t, channelId: l.id });
          });
        }
        return (0, n.jsxs)("div", {
          className: a()(F.settingCard, F.active),
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
                  roles: d,
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
            isPrivateGuildChannel: i,
            roles: c,
            members: d,
          } = e,
          u = (0, r.e7)([R.Z], () => R.Z.can(w.Pl.ADMINISTRATOR, t)),
          h = A.Uu(w.Pl.VIEW_CHANNEL, t),
          m = A.Uu(w.Pl.ADMINISTRATOR, t);
        async function g() {
          let e = l.accessPermissions,
            a = Z.default.getCurrentUser();
          if (!i && null != (await (0, N.T)(t.id, l.id))) {
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
          O.$e(l, e, i), !i && null != a && !u && O.Yh(l, e);
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
            className: a()(F.settingCard, { [F.active]: i }),
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
                value: i,
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
                    !i &&
                    (0, n.jsx)("div", {
                      className: F.adminWarning,
                      children: (0, n.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.WARNING,
                        children:
                          P.Z.Messages
                            .CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING,
                      }),
                    }),
                  i &&
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
                          roles: c,
                          members: d,
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
              className: a()(F.folderTitle, F.sectionTitle),
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
          i = {},
          a = !1;
        if (null != t) {
          e = I.Z.getGuild(t.getGuildId());
          let s = M.ZP.getMemberIds(null == e ? void 0 : e.id);
          if (null != e) {
            let r = I.Z.getRoles(e.id);
            (i = C.Z.editedPermissionIds.reduce((e, t) => {
              let s = C.Z.getPermissionOverwrite(t);
              return null != s && (e[t] = s), e;
            }, {})),
              (n = O.kA(e, r, t, t.accessPermissions, i)),
              (l = O.cR(s, t, e, t.accessPermissions, i)),
              (a = O.Yk(t, i));
          }
        }
        return {
          canSyncChannel: null != s && R.Z.can(w.Pl.MANAGE_ROLES, s),
          category: s,
          channel: t,
          filteredMembers: l,
          filteredRoles: n,
          guild: e,
          isPrivateGuildChannel: a,
          locked: C.Z.locked,
          permissionUpdates: i,
        };
      })(function (e) {
        let {
            canSyncChannel: t,
            category: i,
            channel: a,
            filteredMembers: r,
            filteredRoles: c,
            guild: d,
            isPrivateGuildChannel: h,
            locked: m,
            permissionUpdates: g,
          } = e,
          [E, T] = l.useState(!A.Uu(w.Pl.SEND_MESSAGES, a));
        if (null == a || null == d) return null;
        function N() {
          O.$e(a, w.Pl.SEND_MESSAGES, E), T(!E);
        }
        function _() {
          if (null != i)
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.resolve().then(
                s.bind(s, 170509),
              );
              return (t) =>
                (0, n.jsx)(e, {
                  ...t,
                  channel: a,
                  category: i,
                  onConfirm: async () => {
                    let { guild_id: e } = i,
                      t = { ...i.permissionOverwrites };
                    null != e && null == t[e] && (t[e] = A.we(e)),
                      (await (0, p.u)(a, t[e].deny, t[e].allow)) &&
                        (0, u.wk)(a.id, {
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
          a.isCategory() &&
            ((S.title = P.Z.Messages.CATEGORY_SETTINGS),
            (S.subtitle = P.Z.Messages.CATEGORY_PERMISSIONS_SUBTITLE)),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.FormTitle, { tag: "h1", children: S.title }),
              (0, n.jsx)(o.FormText, { children: S.subtitle }),
              null != i && t
                ? m
                  ? (0, n.jsx)(b.Z, {
                      canSync: !1,
                      icon: o.RefreshIcon,
                      noticeText:
                        P.Z.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
                          categoryName: i.name,
                        }),
                    })
                  : (0, n.jsx)(b.Z, {
                      buttonText: P.Z.Messages.SYNC_NOW,
                      canSync: !0,
                      icon: (0, o.makeIconCompat)(v.Z),
                      noticeText: P.Z.Messages.PERMISSIONS_UNSYNCED.format({
                        categoryName: i.name,
                      }),
                      onClick: _,
                    })
                : null,
              a.isGuildStageVoice()
                ? (0, n.jsx)(H, { guild: d, channel: a, permissionUpdates: g })
                : null,
              (0, n.jsx)(U, {
                channel: a,
                guild: d,
                isPrivateGuildChannel: h,
                roles: c,
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
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(481060),
        i = s(600164),
        a = s(973156);
      function r(e) {
        let {
          description: t,
          icon: s,
          id: r,
          label: o,
          onChange: c,
          value: d,
        } = e;
        return (0, n.jsxs)("div", {
          className: a.cardContent,
          children: [
            (0, n.jsxs)(i.Z, {
              justify: i.Z.Justify.BETWEEN,
              align: i.Z.Align.CENTER,
              children: [
                s,
                (0, n.jsx)(i.Z.Child, {
                  grow: 1,
                  children: (0, n.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: o,
                  }),
                }),
                null != c &&
                  null != d &&
                  (0, n.jsx)(l.Switch, { id: r, checked: d, onChange: c }),
              ],
            }),
            (0, n.jsx)(l.Text, {
              variant: "text-xs/normal",
              color: "text-normal",
              className: a.cardDescription,
              children: t,
            }),
          ],
        });
      }
    },
    182905: function (e, t, s) {
      "use strict";
      var n = s(735250);
      s(470079);
      var l = s(120356),
        i = s.n(l),
        a = s(692547),
        r = s(481060),
        o = s(600164),
        c = s(670494);
      t.Z = (e) => {
        let {
          className: t,
          icon: s,
          noticeText: l,
          buttonText: d,
          onClick: u,
          canSync: h,
        } = e;
        return (0, n.jsx)(r.Card, {
          className: i()(t, c.card),
          children: (0, n.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
              (0, n.jsx)(s, {
                width: 20,
                height: 20,
                size: "custom",
                color: a.Z.unsafe_rawColors.YELLOW_300.css,
              }),
              (0, n.jsx)("div", {
                className: c.label,
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
                  children: d,
                }),
            ],
          }),
        });
      };
    },
    257017: function (e, t, s) {
      "use strict";
      s.d(t, {
        X: function () {
          return r;
        },
      });
      var n = s(668781),
        l = s(63063),
        i = s(981631),
        a = s(689938);
      function r(e) {
        n.Z.show({
          title: a.Z.Messages.SELF_DENY_PERMISSION_TITLE,
          body: a.Z.Messages.SELF_DENY_PERMISSION_BODY.format({ name: e }),
          cancelText: a.Z.Messages.HELP_DESK,
          onCancel() {
            window.open(l.Z.getArticleURL(i.BhN.PERMISSIONS_LOCKOUT));
          },
        });
      }
    },
    188857: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return h;
        },
      }),
        s(47120);
      var n = s(470079),
        l = s(790333),
        i = s.n(l),
        a = s(442837),
        r = s(749210),
        o = s(911969),
        c = s(271383),
        d = s(594174),
        u = s(823379);
      function h(e, t) {
        let s = (0, a.Wu)([c.ZP], () => c.ZP.getMemberIds(e), [e]),
          [l, h] = n.useMemo(() => {
            var e;
            return i()(
              null == (e = t)
                ? []
                : Object.values(e)
                    .filter((e) => e.type === o.BN.MEMBER)
                    .map((e) => e.id),
              (e) => s.includes(e),
            );
          }, [t, s]);
        return (
          n.useEffect(() => {
            h.length > 0 && null != e && r.Z.requestMembersById(e, h, !1);
          }, [h, e]),
          (0, a.Wu)([d.default], () => l.map(d.default.getUser).filter(u.lm), [
            l,
          ])
        );
      }
    },
    869779: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return F;
          },
        });
      var n = s(735250),
        l = s(470079),
        i = s(442837),
        a = s(481060),
        r = s(570140),
        o = s(787014),
        c = s(37234),
        d = s(503089),
        u = s(493544),
        h = s(367907),
        m = s(933557),
        g = s(471445),
        E = s(351123),
        T = s(685929),
        p = s(665906),
        N = s(210887),
        _ = s(131704),
        S = s(533947),
        x = s(277053),
        f = s(388610),
        C = s(592125),
        M = s(496675),
        I = s(699516),
        R = s(594174),
        Z = s(585483),
        v = s(787263),
        A = s(975316),
        O = s(428813),
        L = s(2147),
        j = s(856606),
        b = s(981631),
        D = s(689938),
        y = s(8677);
      function w(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          s = arguments.length > 2 ? arguments[2] : void 0;
        h.ZP.trackWithMetadata(b.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "channel",
          origin_pane: t,
          destination_pane: e,
          location: s,
        });
      }
      class P extends l.PureComponent {
        componentDidMount() {
          w(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          r.Z.wait(() => (0, o.xv)());
        }
        componentDidUpdate(e) {
          let { formState: t, section: s } = e,
            {
              formState: n,
              section: l,
              canManageRoles: i,
              canManageChannels: a,
              canManageWebhooks: r,
            } = this.props;
          (a || i || r) &&
          (n !== b.QZA.CLOSED || n === t) &&
          (i || l !== b.CoT.PERMISSIONS) &&
          (r || l !== b.CoT.INTEGRATIONS)
            ? l !== s && w(l, s)
            : (0, c.xf)();
        }
        render() {
          let {
            theme: e,
            sidebarTheme: t,
            section: s,
            channel: l,
            category: i,
            canManageRoles: r,
            canManageChannels: h,
            canDeleteChannels: T,
            canManageWebhooks: p,
            canUnlinkChannel: N,
          } = this.props;
          return null == l
            ? null
            : (0, n.jsx)(d.ZP, {
                theme: e,
                sidebarTheme: t,
                section: null != s ? s : b.CoT.OVERVIEW,
                onSetSection: o.zc,
                onClose: c.xf,
                sections: (function (e) {
                  let {
                      channel: t,
                      category: s,
                      canManageRoles: l,
                      canManageChannels: i,
                      canDeleteChannels: r,
                      canManageWebhooks: d,
                      canUnlinkChannel: h,
                    } = e,
                    T = (0, g.KS)(t),
                    { GUILD_CATEGORY: p } = b.d4z,
                    N = _.Ec.has(t.type),
                    C =
                      t.type === p
                        ? D.Z.Messages.DELETE_CATEGORY
                        : N
                          ? t.isForumPost()
                            ? D.Z.Messages.DELETE_FORUM_POST
                            : D.Z.Messages.DELETE_THREAD
                          : D.Z.Messages.DELETE_CHANNEL;
                  return [
                    {
                      section: u.ID.HEADER,
                      label:
                        null != t
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                null != T
                                  ? (0, n.jsx)(T, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: y.channelIcon,
                                    })
                                  : null,
                                (0, m.F6)(t, R.default, I.Z),
                                null != s
                                  ? (0, n.jsx)(a.Text, {
                                      tag: "span",
                                      variant: "text-xs/semibold",
                                      color: "header-secondary",
                                      lineClamp: 1,
                                      className: y.category,
                                      children: (0, m.F6)(s, R.default, I.Z),
                                    })
                                  : null,
                              ],
                            })
                          : D.Z.Messages.CHANNEL_SETTINGS,
                    },
                    {
                      section: b.CoT.OVERVIEW,
                      label: D.Z.Messages.OVERVIEW,
                      ariaLabel: D.Z.Messages.OVERVIEW,
                      element: L.Z,
                      notice: { element: L.G, stores: [f.Z] },
                    },
                    {
                      section: b.CoT.PERMISSIONS,
                      label: D.Z.Messages.PERMISSIONS,
                      element: E.Z,
                      notice: { element: j.n, stores: [x.Z] },
                      predicate: () => l && !N,
                    },
                    {
                      section: b.CoT.INSTANT_INVITES,
                      label: D.Z.Messages.INVITES,
                      element: O.Z,
                      type: u.bT.CUSTOM,
                      predicate: () => t.type !== p && i && !N,
                    },
                    {
                      section: b.CoT.INTEGRATIONS,
                      label: D.Z.Messages.INTEGRATIONS_OVERVIEW,
                      ariaLabel: D.Z.Messages.INTEGRATIONS_OVERVIEW,
                      element: A.Z,
                      notice: { stores: [S.Z], element: A.B },
                      predicate: () => (!!d || !!h) && _.Ti.has(t.type),
                    },
                    { section: u.ID.DIVIDER },
                    {
                      section: b.CoT.DELETE,
                      onClick() {
                        (0, v.w)(t, function () {
                          Z.S.subscribeOnce(b.CkL.LAYER_POP_COMPLETE, () => {
                            (0, o.zz)(t.id);
                          }),
                            (0, c.xf)();
                        });
                      },
                      label: C,
                      ariaLabel: C,
                      icon: (0, n.jsx)(a.TrashIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                      predicate: () => r,
                    },
                  ];
                })({
                  channel: l,
                  category: i,
                  canManageRoles: r,
                  canManageChannels: h,
                  canDeleteChannels: T,
                  canManageWebhooks: p,
                  canUnlinkChannel: N,
                }),
              });
        }
      }
      function F() {
        let { channel: e, analyticsLocation: t } = (0, i.cj)([f.Z], () =>
            f.Z.getProps(),
          ),
          s = (0, i.e7)([f.Z], () => f.Z.getFormState()),
          l = (0, i.e7)([f.Z], () => f.Z.getSection()),
          a = (0, i.e7)([N.Z], () => N.Z.theme),
          r = (0, i.e7)([N.Z], () => (N.Z.darkSidebar ? b.BRd.DARK : void 0)),
          o = (0, p.C7)(e),
          c = (0, T.Y)(e),
          d = (0, p.Xb)(e),
          {
            canManageChannels: u,
            canManageRoles: h,
            canManageWebhooks: m,
          } = (0, i.cj)([M.Z], () => ({
            canManageChannels: M.Z.can(b.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && M.Z.can(b.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && M.Z.can(b.Plq.MANAGE_WEBHOOKS, e),
          })),
          g = (0, i.e7)([C.Z], () =>
            C.Z.getChannel(null == e ? void 0 : e.parent_id),
          );
        return (0, n.jsx)(P, {
          channel: e,
          category: g,
          canManageChannels: (null == e ? void 0 : e.isThread()) ? o : u,
          canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : u,
          canManageRoles: h,
          canManageWebhooks: m,
          canUnlinkChannel: c,
          formState: s,
          theme: a,
          sidebarTheme: r,
          section: l,
          analyticsLocation: t,
        });
      }
    },
    975316: function (e, t, s) {
      "use strict";
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
        i = s(139387),
        a = s(852860),
        r = s(490655),
        o = s(533947),
        c = s(388610),
        d = s(430824);
      function u(e) {
        let { refToScroller: t } = e,
          s = (0, l.e7)([c.Z], () => c.Z.getChannel(), []),
          i = (0, l.e7)(
            [d.Z],
            () => (null != s ? d.Z.getGuild(s.getGuildId()) : null),
            [s],
          ),
          {
            section: a,
            sectionId: u,
            webhooks: h,
            editedWebhook: m,
            isFetching: g,
            errors: E,
          } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
        return null == i || null == s
          ? null
          : (0, n.jsx)(r.Z, {
              guild: i,
              channel: s,
              section: a,
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
        let { channel: e, submitting: t } = (0, l.cj)([c.Z], () =>
            c.Z.getProps(),
          ),
          s = (0, l.e7)([o.Z], () => o.Z.editedWebhook),
          r = (0, l.e7)(
            [d.Z],
            () => (null != e ? d.Z.getGuild(e.getGuildId()) : null),
            [e],
          );
        return (0, n.jsx)(a.Z, {
          submitting: t,
          onReset: () => {
            i.Z.init();
          },
          onSave: () => {
            if (null != r) null != s && i.Z.saveWebhook(r.id, s);
          },
        });
      }
    },
    428813: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(442837),
        i = s(270394),
        a = s(388610),
        r = s(430824),
        o = s(496675),
        c = s(246946),
        d = s(981631);
      function u() {
        let e = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites),
          { channel: t, guild: s } = (0, l.cj)(
            [a.Z, r.Z],
            () => {
              let { channel: e } = a.Z.getProps(),
                t = null != e ? r.Z.getGuild(e.getGuildId()) : null;
              return { channel: e, guild: t };
            },
            [],
          ),
          u = (0, l.e7)(
            [o.Z],
            () => null != t && o.Z.can(d.Plq.CREATE_INSTANT_INVITE, t),
            [t],
          ),
          { invites: h, loading: m } = (0, l.cj)(
            [a.Z],
            () => a.Z.getInvites(),
            [],
          );
        return (0, n.jsx)(i.Z, {
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
      "use strict";
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
        i = s(120356),
        a = s.n(i),
        r = s(313361),
        o = s(683860),
        c = s(442837),
        d = s(692547),
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
        et = s(720180),
        es = s(113207);
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
        ei = (0, M.hQ)(),
        ea = (0, M.hQ)(),
        er = (0, M.hQ)(),
        eo = (0, M.hQ)(),
        ec = (0, M.hQ)(),
        ed = (0, M.hQ)(),
        eu = (0, M.hQ)(),
        eh = (0, M.hQ)(),
        em = (0, M.hQ)(),
        eg = (0, M.hQ)(),
        eE = (0, y.kt)({ id: "1", type: q.d4z.DM }),
        eT = "AUTOMATIC_RTC_REGION",
        ep = c.ZP.connectStores([P.Z], () => {
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
                userLimit: i,
                nsfw: a,
                flags: r,
                rateLimitPerUser: o,
                defaultThreadRateLimitPerUser: c,
                threadMetadata: d,
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
                  userLimit: i,
                  nsfw: a,
                  flags: r,
                  rateLimitPerUser: o,
                  defaultThreadRateLimitPerUser: c,
                  autoArchiveDuration:
                    null == d ? void 0 : d.autoArchiveDuration,
                  locked: null == d ? void 0 : d.locked,
                  invitable: null == d ? void 0 : d.invitable,
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
        let { channel: t, onChange: s } = e,
          [i, a] = l.useState(null),
          r = t.rateLimitPerUser,
          o = l.useMemo(() => {
            let e = [...(null != i ? i : q.BiE)];
            return (
              !e.includes(r) && e.unshift(r),
              e.map((e) => ({ label: (0, z.A)(e, !1), value: e }))
            );
          }, [i, r]),
          c = l.useCallback(
            (e) => {
              s(e), a(null);
            },
            [s],
          ),
          d = l.useCallback((e) => {
            if ("" === e) {
              a(null);
              return;
            }
            let t = [],
              s = parseInt(e, 10);
            if (Number.isNaN(s)) {
              a(null);
              return;
            }
            s <= q.GI0 && t.push(s);
            let n = s * k.Z.Seconds.MINUTE;
            n <= q.GI0 && t.push(n);
            let l = s * k.Z.Seconds.HOUR;
            l <= q.GI0 && t.push(l), a(t);
          }, []),
          u = l.useCallback(() => {
            a(null);
          }, []);
        return (0, n.jsx)(h.SearchableSelect, {
          className: es.marginBottom8,
          value: r,
          onChange: c,
          onSearchChange: d,
          options: o,
          onBlur: u,
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
          let i =
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
            : "") !== i &&
            i !== this.state.textTopicValue &&
            this.setState({ textTopicValue: i, richTopicValue: (0, x.JM)(i) });
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
          var s, l, i, c, u, m;
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
                            null !== (i = e.template) && void 0 !== i ? i : "",
                          ),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: $.Vb,
                          disabled: !p,
                          autosize: !0,
                        }),
                      }),
                      (0, n.jsx)(h.FormDivider, {
                        className: a()(es.marginTop40, es.marginBottom40),
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
                          id: ei,
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
                          className: a()(
                            et.settingsLeft,
                            et.settingsDefaultReaction,
                          ),
                          children: [
                            (0, n.jsx)(h.FormTitle, {
                              id: ea,
                              className: et.formTitle,
                              children: ee.Z.Messages.FORUM_DEFAULT_REACTION,
                            }),
                            (0, n.jsx)(h.FormText, {
                              id: ei,
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
                          className: a()(
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
                                  null !== (c = e.defaultForumLayout) &&
                                  void 0 !== c
                                    ? c
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
            ec = y.ov.has(e.type)
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
            ed =
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
                      className: a()(es.marginTop40, es.marginBottom40),
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
                        color: d.Z.colors.BG_BRAND.css,
                      }),
                    ],
                  }),
                })
              : null,
            em = e.isMediaChannel()
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(h.FormDivider, {
                      className: a()(es.marginTop40, es.marginBottom40),
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
                  className: a()(es.marginTop40, es.marginBottom40),
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
                ec,
                ed,
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
            i = this.getError("bitrate");
          return (0, n.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: es.marginBottom40,
            children: [
              (0, n.jsx)(h.FormTitle, {
                id: ec,
                children: ee.Z.Messages.FORM_LABEL_BITRATE,
              }),
              "" !== i &&
                (0, n.jsx)(h.FormText, {
                  id: ed,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  className: es.marginBottom8,
                  children: i,
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
                "aria-labelledby": ec,
                "aria-describedby": null != i && "" !== i ? ed : eu,
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
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
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
          let { regions: s, canManageChannels: l, guild: i } = this.props;
          if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice())
            return null;
          let a = [];
          null != s &&
            (a = s
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
                options: a,
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
                        className: a()(es.marginTop40, es.marginBottom40),
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
            subsection: i,
          } = (0, c.cj)([P.Z], () => P.Z.getProps()),
          a = (0, c.e7)([H.Z], () => {
            var e;
            return H.Z.getRegions(
              null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e
                ? e
                : null,
            );
          }),
          r = (0, c.e7)([D.Z], () => D.Z.theme),
          o = (0, c.e7)([F.Z], () =>
            F.Z.getGuild(null == t ? void 0 : t.getGuildId()),
          ),
          d = (0, L.C7)(t),
          u = (0, L.Xb)(t),
          { canManageChannels: h, canSendMessages: m } = (0, c.cj)(
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
          regions: a,
          theme: r,
          guild: o,
          canManageChannels: (null == t ? void 0 : t.isThread()) ? d : h,
          canSendMessages: m,
          isThreadModerator: u,
          canManageThread: d,
          subsection: i,
          isForumPost: null != t && t.isForumPost(),
          isOwner: null == t ? void 0 : t.isOwner(E),
          handleSetDefaultLayout: C,
          showChannelSummariesSettings: x,
          showAdvancedSlowModeSetting: f,
        });
      }
    },
    856606: function (e, t, s) {
      "use strict";
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
        i = s(392711),
        a = s.n(i),
        r = s(149765),
        o = s(442837),
        c = s(780384),
        d = s(481060),
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
        U = s(942648);
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
          i = (0, o.e7)([Z.Z], () => (null != l ? Z.Z.getRoles(l.id) : void 0));
        if (null == s || null == l || null == t) return null;
        let { guild_id: a, id: c } = s,
          { id: g } = t,
          T = () => {
            var e;
            if (null == Z.Z.getGuild(a) || null == i) return "";
            let t = i[g],
              s = A.default.getUser(g),
              n =
                null !== (e = null == s ? void 0 : s.username) && void 0 !== e
                  ? e
                  : "";
            return null != t ? t.name : n;
          },
          N = (e, n) => {
            if ("boolean" == typeof n) throw Error("Unexpected boolean action");
            let { allow: l, deny: i } = t;
            switch (((i = r.Od(i, e)), (l = r.Od(l, e)), n)) {
              case "ALLOW":
                l = r.IH(l, e);
                break;
              case "DENY":
                i = r.IH(i, e);
            }
            if (v.Z.can(e, s, { [g]: { ...t, allow: l, deny: i } }))
              (0, m.kY)(s, g, l, i);
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
              onConfirm: () => h.Z.clearPermissionOverwrite(c, g),
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
          C = g === a,
          I = s.isForumLikeChannel() && r.e$(t.deny, B.Plq.SEND_MESSAGES),
          R = r.e$(t.deny, B.Plq.SEND_MESSAGES),
          O = r.e$(t.deny, B.Plq.READ_MESSAGE_HISTORY),
          L = D.Z.generateChannelPermissionSpec(a, s, C, {
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
            a === g
              ? null
              : (0, n.jsx)(d.Button, {
                  look: d.Button.Looks.OUTLINED,
                  color: d.Button.Colors.RED,
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
          i = l.getAvatarURL(t, 32),
          a = b.ZP.getNickname(t, s, l),
          r = w.ZP.useUserTag(l),
          o = null,
          c = null;
        return (
          (o = null != a ? a : l.hasAvatarForGuild(t) ? l.username : r),
          (null != a || l.hasAvatarForGuild(t)) &&
            (c = (0, n.jsxs)("div", {
              className: U.userRowSubText,
              children: [
                l.hasAvatarForGuild(t)
                  ? (0, n.jsx)(d.Avatar, {
                      className: U.userRowSubAvatar,
                      size: d.AvatarSizes.SIZE_16,
                      src: l.getAvatarURL(void 0, 16),
                      "aria-label": l.username,
                    })
                  : null,
                (0, n.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: r,
                }),
              ],
            })),
          (0, n.jsxs)("div", {
            className: U.inline,
            children: [
              (0, n.jsx)(d.Avatar, {
                size: d.AvatarSizes.SIZE_32,
                src: i,
                "aria-label": l.username,
                className: U.userRowAvatar,
              }),
              (0, n.jsxs)("div", {
                className: U.userRowText,
                children: [
                  (0, n.jsx)(d.Text, {
                    className: U.userRowText,
                    variant: "text-md/normal",
                    children: o,
                  }),
                  c,
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
            onClose: i,
            onSelect: r,
            position: c,
          } = e,
          d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
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
              ? a()(d)
                  .filter((t) => null == l[t.id] && e(t.name))
                  .sortBy((e) => -e.position)
                  .value()
              : a()(u)
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
          onClose: i,
          position: c,
        });
      }
      function Y() {
        let {
            channel: e,
            permissionOverwrites: t,
            selectedOverwriteId: i,
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
            let { position: l, closePopout: i } = s;
            return (0, n.jsx)(z, {
              guild: u,
              channel: e,
              permissionOverwrites: t,
              position: null != l ? l : "bottom",
              onSelect: I,
              onClose: i,
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
        let R = a()(t)
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
                "".concat(i, "-").concat(e.id),
              ),
            )
            .value(),
          v = a()(T)
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
                      (0, n.jsx)(d.Avatar, {
                        size: d.AvatarSizes.SIZE_20,
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
                "".concat(i, "-").concat(e.id),
              );
            })
            .value();
        return (0, n.jsx)(x.ZP.Sidebar, {
          className: U.layoutStyle,
          scrollable: !0,
          children: (0, n.jsxs)(d.TabBar, {
            onItemSelect: m.Aj,
            selectedItem: i,
            orientation: "vertical",
            children: [
              (() => {
                let e = (0, c.wj)(S) ? s(521715) : s(299603);
                return (0, n.jsx)(d.Popout, {
                  renderPopout: C,
                  position: "bottom",
                  autoInvert: !1,
                  closeOnScroll: !0,
                  children: (t) =>
                    (0, n.jsx)(d.TabBar.Header, {
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
                  (0, n.jsx)(d.TabBar.Separator, {
                    style: { marginTop: 20, marginBottom: 14 },
                  }),
                  (0, n.jsx)(d.FormText, {
                    type: d.FormTextTypes.DESCRIPTION,
                    children: (0, n.jsx)(d.Anchor, {
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
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(325767);
      function i(e) {
        let {
          color: t = "currentColor",
          foreground: s,
          backgroundColor: i = "none",
          ...a
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.Z)(a),
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
              fill: i,
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
              fill: i,
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
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(325767);
      function i(e) {
        let {
          color: t = "currentColor",
          foreground: s,
          backgroundColor: i = "none",
          ...a
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, l.Z)(a),
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
              fill: i,
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
      "use strict";
      s.d(t, {
        Z: function () {
          return _;
        },
      });
      var n = s(735250),
        l = s(470079),
        i = s(120356),
        a = s.n(i),
        r = s(442837),
        o = s(692547),
        c = s(481060),
        d = s(787014),
        u = s(659388),
        h = s(710344),
        m = s(496675),
        g = s(479099),
        E = s(710352),
        T = s(981631),
        p = s(689938),
        N = s(311475);
      function _(e) {
        let { channel: t } = e,
          i = (0, r.e7)([m.Z], () => m.Z.can(T.Plq.MANAGE_CHANNELS, t), [t]),
          u = t.availableTags.length >= E.pC,
          g = t.availableTags.length > 0,
          _ = l.useCallback(() => {
            let e = t.availableTags.length >= E.pC;
            i &&
              !e &&
              (0, c.openModalLazy)(async () => {
                let { default: e } = await s.e("21971").then(s.bind(s, 201049));
                return (s) =>
                  (0, n.jsx)(e, { ...s, channelId: t.id, guildId: t.guild_id });
              });
          }, [t, i]),
          x = l.useCallback(
            (e) => {
              i &&
                (0, c.openModalLazy)(async () => {
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
            [i, t],
          ),
          {
            handleDragStart: f,
            handleDragReset: C,
            handleDragComplete: M,
          } = (0, h.Z)(t.availableTags, (e) => {
            (0, d.pW)({ availableTags: e });
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
                      canManageChannels: i,
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
              ? (0, n.jsx)(c.Clickable, {
                  onClick: _,
                  className: a()(N.addTags, { [N.disabled]: !i || u }),
                  children: (0, n.jsx)(c.PlusSmallIcon, {
                    size: "custom",
                    "aria-label": p.Z.Messages.FORUM_TAG_CREATE,
                    color: o.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                  }),
                })
              : (0, n.jsx)(c.Button, {
                  disabled: !i,
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
            onTagClick: i,
            onDragComplete: r,
            onDragStart: o,
            onDragReset: c,
          } = e,
          d = s.findIndex((e) => e.id === t.id),
          {
            drag: h,
            dragSourcePosition: m,
            drop: E,
            setIsDraggable: T,
          } = (0, u.Z)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: d,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: c,
          });
        return (0, n.jsx)("div", {
          className: a()(N.container, {
            [N.dropIndicatorBefore]: null != m && d < m,
            [N.dropIndicatorAfter]: null != m && d > m,
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
            onClick: l ? () => i(t) : void 0,
          }),
        });
      }
    },
    946458: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(735250);
      s(470079);
      var l = s(442837),
        i = s(481060),
        a = s(596454),
        r = s(339085),
        o = s(259605);
      function c(e) {
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
                    (0, n.jsx)(d, { width: "100%", marginBottom: 8 }),
                    (0, n.jsx)(d, { width: "80%", marginBottom: 16 }),
                    (0, n.jsx)(d, { width: "50%", marginBottom: 8 }),
                    (0, n.jsx)(d, { width: "60%", marginBottom: 16 }),
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
                      ? (0, n.jsx)(a.Z, {
                          className: o.reactionEmote,
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: !!(null == s ? void 0 : s.animated),
                        })
                      : (0, n.jsx)(i.ReactionIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: o.reactionEmote,
                        }),
                    (0, n.jsx)(i.Text, {
                      variant: "text-sm/semibold",
                      color: "interactive-normal",
                      children: 17,
                    }),
                  ],
                }),
                (0, n.jsx)(d, { width: "24px", marginBottom: 0 }),
                (0, n.jsx)("div", { className: o.dot }),
                (0, n.jsx)(d, { width: "24px", marginBottom: 0 }),
              ],
            }),
          ],
        });
      }
      function d(e) {
        let { width: t, marginBottom: s } = e;
        return (0, n.jsx)("div", {
          className: o.placeholderLine,
          style: { width: t, marginBottom: s },
        });
      }
    },
    693196: function (e, t, s) {
      "use strict";
      s.d(t, {
        T: function () {
          return r;
        },
      });
      var n = s(526120),
        l = s(563534),
        i = s(734893),
        a = s(931261);
      async function r(e, t) {
        if (null == e || !(0, a.s)(e)) return;
        let s = l.Z.getSettings(e);
        return (s === l.P && (await (0, n.cP)(e), (s = l.Z.getSettings(e))),
        s === l.P || null == s)
          ? void 0
          : null != s.newMemberActions &&
              null != s.newMemberActions.find((e) => e.channelId === t)
            ? i.j.TODO
            : null != s.resourceChannels &&
                null != s.resourceChannels.find((e) => e.channelId === t)
              ? i.j.RESOURCE
              : void 0;
      }
    },
    75464: function (e, t, s) {
      "use strict";
      s(47120);
      var n,
        l = s(735250),
        i = s(470079),
        a = s(120356),
        r = s.n(a),
        o = s(153066),
        c = s(577064);
      function d(e, t, s) {
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
          XSMALL: c.xsmall,
          SMALL: c.small,
          MEDIUM: c.medium,
          LARGE: c.large,
        },
        h = { DEFAULT: "default", STATIC: "static" };
      class m extends (n = i.PureComponent) {
        render() {
          let { size: e, src: t, srcHover: s, className: n, ...i } = this.props,
            { hovered: a } = this.state,
            d = this.getMode();
          return (0, l.jsx)("button", {
            className: r()((0, o.l)(c, "iconButton", d), n, e),
            style: {
              backgroundImage: "url('".concat(a && null != s ? s : t, "')"),
            },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...i,
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "state", { hovered: !1 }),
            d(this, "getMode", () =>
              null != this.props.srcHover ? h.STATIC : h.DEFAULT,
            ),
            d(this, "handleHover", (e) => {
              let { onMouseEnter: t } = this.props;
              null == t || t(e),
                !this.state.hovered && this.setState({ hovered: !0 });
            }),
            d(this, "handleBlur", (e) => {
              let { onMouseLeave: t } = this.props;
              null == t || t(e),
                this.state.hovered && this.setState({ hovered: !1 });
            });
        }
      }
      d(m, "Sizes", u),
        d(m, "defaultProps", { size: u.MEDIUM, disabled: !1 }),
        (t.Z = m);
    },
    747212: function (e, t, s) {
      "use strict";
      s(47120);
      var n = s(735250);
      s(470079);
      var l = s(120356),
        i = s.n(l),
        a = s(481060),
        r = s(968437),
        o = s(689938),
        c = s(469017);
      t.Z = (e) => {
        let { autoArchiveDuration: t, onChange: s, isDisabled: l } = e,
          d = (0, r.nt)(),
          u = (e, t) =>
            (0, n.jsx)("span", {
              className: i()(c.optionLabel, { [c.dropdownOption]: t }),
              children: e.label,
            });
        return (0, n.jsx)(a.FormSection, {
          title: o.Z.Messages.FORM_THREAD_AUTO_ARCHIVE_SECTION_LABEL,
          className: c.formSection,
          children: (0, n.jsx)(a.SingleSelect, {
            isDisabled: l,
            options: d,
            value: t,
            maxVisibleItems: d.length,
            onChange: s,
            optionClassName: c.dropdownOption,
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
      "use strict";
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
          foreground: i,
          background: a,
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
                className: a,
              }),
              (0, n.jsx)("path", {
                d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                fill: l,
                className: i,
              }),
            ],
          }),
        });
      }
      s(470079);
    },
    129724: function (e, t, s) {
      "use strict";
      s.d(t, {
        A: function () {
          return a;
        },
      });
      var n = s(913527),
        l = s.n(n),
        i = s(689938);
      function a(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : i.Z.Messages.FORM_LABEL_OFF,
          n = l().duration(e, "seconds");
        if (n.days() > 0)
          return (
            t ? i.Z.Messages.DURATION_DAYS_SHORT : i.Z.Messages.DURATION_DAYS
          ).format({ days: n.days() });
        if (n.hours() > 0)
          return (
            t ? i.Z.Messages.DURATION_HOURS_SHORT : i.Z.Messages.DURATION_HOURS
          ).format({ hours: n.hours() });
        if (n.minutes() > 0)
          return (
            t
              ? i.Z.Messages.DURATION_MINUTES_SHORT
              : i.Z.Messages.DURATION_MINUTES
          ).format({ minutes: n.minutes() });
        else if (e > 0)
          return (
            t
              ? i.Z.Messages.DURATION_SECONDS_SHORT
              : i.Z.Messages.DURATION_SECONDS
          ).format({ seconds: n.seconds() });
        else return t ? i.Z.Messages.FORM_LABEL_OFF : s;
      }
    },
    244430: function (e, t, s) {
      "use strict";
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
    714845: function (e, t, s) {
      "use strict";
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
    724129: function (e, t, s) {
      "use strict";
      e.exports = {
        advancedModeDivider: "advancedModeDivider_cd9517",
        advancedTitle: "advancedTitle_cd9517",
        titleCaret: "titleCaret_cd9517",
      };
    },
    94255: function (e, t, s) {
      "use strict";
      e.exports = {
        settingCard: "settingCard_dd864e",
        active: "active_dd864e",
        shield: "shield_dd864e " + s("403600").desaturateUserColors,
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
    973156: function (e, t, s) {
      "use strict";
      e.exports = {
        cardContent: "cardContent_eaaaea",
        cardDescription: "cardDescription_eaaaea",
      };
    },
    670494: function (e, t, s) {
      "use strict";
      e.exports = { card: "card_ac370c", label: "label_ac370c" };
    },
    8677: function (e, t, s) {
      "use strict";
      e.exports = {
        category: "category_c394c4",
        channelIcon: "channelIcon_c394c4",
      };
    },
    720180: function (e, t, s) {
      "use strict";
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
    942648: function (e, t, s) {
      "use strict";
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
    311475: function (e, t, s) {
      "use strict";
      e.exports = {
        tags: "tags_faaca1",
        addTags: "addTags_faaca1",
        disabled: "disabled_faaca1",
        container: "container_faaca1",
        dropIndicatorBefore: "dropIndicatorBefore_faaca1",
        dropIndicatorAfter: "dropIndicatorAfter_faaca1",
      };
    },
    259605: function (e, t, s) {
      "use strict";
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
    577064: function (e, t, s) {
      "use strict";
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
    469017: function (e, t, s) {
      "use strict";
      e.exports = {
        formSection: "formSection_b9db9f",
        dropdownOption: "dropdownOption_b9db9f",
        optionLabel: "optionLabel_b9db9f",
      };
    },
  },
]);
//# sourceMappingURL=8bb1d61289adfed96c54.js.map
