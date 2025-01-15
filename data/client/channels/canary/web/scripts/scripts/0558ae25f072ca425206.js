(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87768"],
  {
    790333: function (e, t, n) {
      var i = n(757009)(
        function (e, t, n) {
          e[n ? 0 : 1].push(t);
        },
        function () {
          return [[], []];
        },
      );
      e.exports = i;
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
    668390: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(780384),
        o = n(481060),
        d = n(239091),
        c = n(741247),
        u = n(75464),
        h = n(388032),
        m = n(413174);
      function g(e) {
        let { role: t, guild: s } = e,
          [a, u] = l.useState(!1);
        return (0, c.useHasGuildRoleItems)(s, t)
          ? (0, i.jsx)(o.Clickable, {
              onClick: (e) => {
                u(!0),
                  (0, d.jW)(
                    e,
                    async () => {
                      let { default: e } = await Promise.resolve().then(
                        n.bind(n, 741247),
                      );
                      return (n) => (0, i.jsx)(e, { ...n, role: t, guild: s });
                    },
                    { onClose: () => u(!1) },
                  );
              },
              className: r()(m.roleOverflow, { [m.open]: a }),
              children: (0, i.jsx)(o.MoreHorizontalIcon, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
              }),
            })
          : null;
      }
      function p(e) {
        let {
            color: t,
            id: s,
            role: r,
            guild: c,
            children: p,
            isDragging: x,
            selectedItem: f,
            onItemSelect: v,
            itemType: j,
            locked: C,
            lockTooltip: b,
            showContextMenu: T,
            theme: N,
            roleStyle: S,
            "aria-label": Z,
          } = e,
          E = l.useCallback(
            (e) => {
              (0, d.jW)(e, async () => {
                let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    id: s,
                    label: h.intl.string(h.t.sMsaLi),
                  });
              });
            },
            [s],
          );
        return x
          ? (0, i.jsx)("div", { className: m.dragged })
          : (0, i.jsx)(o.TabBar.Item, {
              className: m.role,
              id: s,
              selectedItem: f,
              onItemSelect: v,
              itemType: j,
              "aria-label": null != b ? "".concat(Z, ", ").concat(b) : Z,
              children: (0, i.jsxs)("div", {
                className: m.roleContent,
                children: [
                  "dot" === S
                    ? (0, i.jsx)(o.RoleDot, {
                        color: null != t ? t : void 0,
                        className: m.roleDot,
                        background: !1,
                        tooltip: !1,
                      })
                    : (0, i.jsx)(o.RoleCircle, {
                        color: null != t ? t : void 0,
                        className: m.roleCircle,
                      }),
                  (function () {
                    if (!C) return null;
                    let e = (0, a.wj)(N) ? n(27377) : n(514811);
                    return (0, i.jsx)(o.Tooltip, {
                      text: b,
                      color: o.Tooltip.Colors.RED,
                      children: (t) =>
                        (0, i.jsx)(u.Z, { className: m.lock, src: e, ...t }),
                    });
                  })(),
                  (0, i.jsx)("div", {
                    className: m.roleInner,
                    onContextMenu: E,
                    children: p,
                  }),
                  T && null != r ? (0, i.jsx)(g, { guild: c, role: r }) : null,
                ],
              }),
            });
      }
    },
    129865: function (e, t, n) {
      "use strict";
      var i = n(818083);
      t.Z = (0, i.B)({
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
    940639: function (e, t, n) {
      "use strict";
      n(653041), n(47120), n(724458);
      var i,
        l = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(442837),
        d = n(481060),
        c = n(607070),
        u = n(251625),
        h = n(226951),
        m = n(981631),
        g = n(388032),
        p = n(922112);
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class f extends (i = s.Component) {
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
            n = [];
          if (this.isEmpty()) n.push(1);
          else for (let e of t) n.push(e.length);
          return (0, l.jsxs)(d.Dialog, {
            className: a()(
              p.container,
              (function (e) {
                if ("bottom" === e) return p.positionBottom;
                return p.positionTop;
              })(e),
            ),
            "aria-label": this.props["aria-label"],
            children: [
              (0, l.jsx)("div", { className: p.autocompleteShadow }),
              (0, l.jsx)("div", {
                className: p.autocompleteArrowWrapper,
                children: (0, l.jsx)("div", { className: p.autocompleteArrow }),
              }),
              (0, l.jsxs)("header", {
                className: p.header,
                children: [
                  (0, l.jsx)("div", {
                    className: p.autocompleteHeaderBackground,
                  }),
                  (0, l.jsx)("div", {
                    className: p.headerText,
                    children: this.props.label,
                  }),
                  (0, l.jsx)("input", {
                    type: "text",
                    className: p.input,
                    placeholder: this.props.placeholder,
                    ref: this.inputRef,
                    onChange: this.handleChange,
                    onKeyDown: this.handleKeyDown,
                  }),
                ],
              }),
              (0, l.jsx)("section", {
                className: p.sectionTag,
                children: (0, l.jsx)(d.List, {
                  className: p.autocompleteScroller,
                  fade: !0,
                  sections: n,
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
            x(this, "inputRef", s.createRef()),
            x(this, "state", {
              query: null,
              selectedSection: null,
              selectedRow: 0,
            }),
            x(
              this,
              "memoizedGetRows",
              (0, u.oH)((e, t, n) => {
                let i = RegExp(
                    "^".concat(h.Z.escape(null != e ? e.trim() : "")),
                    "i",
                  ),
                  l = (e) => i.test(e);
                return n.map((e, n) => t(l, n));
              }),
            ),
            x(this, "getRows", () => {
              let { onFilterResults: e, sections: t } = this.props,
                { query: n } = this.state;
              return this.memoizedGetRows(n, e, t);
            }),
            x(this, "handleChange", (e) => {
              var t, n;
              let i = e.target.value;
              null === (t = (n = this.props).onQueryChange) ||
                void 0 === t ||
                t.call(n, i),
                this.setState({
                  query: i,
                  selectedSection: null,
                  selectedRow: 0,
                });
            }),
            x(this, "handleMouseEnter", (e, t) => {
              this.setState({ selectedSection: e, selectedRow: t });
            }),
            x(this, "handleClick", (e, t) => {
              let n = this.getRows();
              this.props.onSelect(n[e][t], e), this.props.onClose();
            }),
            x(this, "handleKeyDown", (e) => {
              let { keyboardModeEnabled: t } = this.props,
                { selectedRow: n } = this.state,
                i = this.getRows(),
                l = this.getSelectedSection(i);
              switch (e.keyCode) {
                case m.yXg.TAB:
                  if (t) break;
                case m.yXg.ARROW_DOWN:
                  e.preventDefault(),
                    this.props.sections.length > l &&
                      ++n >= i[l].length &&
                      (++l >= this.props.sections.length && (l = 0), (n = 0)),
                    this.setState({ selectedSection: l, selectedRow: n });
                  break;
                case m.yXg.ARROW_UP:
                  e.preventDefault(),
                    --n < 0 &&
                      (--l < 0 && (l = this.props.sections.length - 1),
                      (n = i[l].length - 1)),
                    this.setState({ selectedSection: l, selectedRow: n });
                  break;
                case m.yXg.ENTER:
                  e.preventDefault(),
                    this.props.sections.length > l &&
                      i[l].length > n &&
                      (this.props.onSelect(i[l][n], l), this.props.onClose());
                  break;
                case m.yXg.ESCAPE:
                  e.preventDefault(),
                    this.props.onSelect(null, null),
                    this.props.onClose();
              }
            }),
            x(
              this,
              "isEmpty",
              () => 0 === this.getRows().reduce((e, t) => e + t.length, 0),
            ),
            x(this, "getSectionHeight", (e) => {
              let t = this.props.sections[e];
              return this.isEmpty() || null == t ? 0 : 44;
            }),
            x(this, "renderSection", (e) => {
              let { section: t } = e,
                n = this.props.sections[t];
              return this.isEmpty() || null == n
                ? null
                : (0, l.jsx)("div", { className: p.section, children: n }, t);
            }),
            x(this, "renderRow", (e) => {
              var t;
              let { section: n, row: i } = e,
                { selectedRow: s } = this.state;
              if (this.isEmpty())
                return (0, l.jsxs)(
                  "div",
                  {
                    className: p.empty,
                    children: [
                      (0, l.jsx)("p", {
                        className: p.noResultsHeader,
                        children: g.intl.string(g.t["4o4z3d"]),
                      }),
                      (0, l.jsx)("p", { children: g.intl.string(g.t.QwSXv7) }),
                    ],
                  },
                  "empty",
                );
              let r = this.getRows(),
                o = this.getSelectedSection(r),
                c = null === (t = r[n]) || void 0 === t ? void 0 : t[i];
              return (0, l.jsx)(
                d.Clickable,
                {
                  onClick: this.handleClick.bind(this, n, i),
                  onMouseEnter: this.handleMouseEnter.bind(this, n, i),
                  className: a()(p.row, { [p.selected]: o === n && s === i }),
                  children: (0, l.jsx)("div", {
                    className: p.rowInner,
                    children: this.props.onRenderResult(c, n),
                  }),
                },
                "".concat(n, "-").concat(i),
              );
            });
        }
      }
      x(f, "defaultProps", { sections: [null] }),
        (t.Z = o.ZP.connectStores([c.Z], () => ({
          keyboardModeEnabled: c.Z.keyboardModeEnabled,
        }))(f));
    },
    27544: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        s = n(748780),
        r = n(442837),
        a = n(481060),
        o = n(741361),
        d = n(856606),
        c = n(277053),
        u = n(259580),
        h = n(388032),
        m = n(589794);
      function g() {
        let e = (0, r.e7)([c.Z], () => c.Z.advancedMode),
          [t] = l.useState(new s.Z.Value(e ? 1 : 0));
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.FormDivider, { className: m.advancedModeDivider }),
            (0, i.jsx)(a.HeadingLevel, {
              component: (0, i.jsx)(a.Button, {
                look: a.Button.Looks.BLANK,
                color: a.Button.Colors.TRANSPARENT,
                onClick: function () {
                  e
                    ? s.Z.timing(t, { toValue: 0, duration: 250 }).start(() => {
                        (0, o.d$)(!1);
                      })
                    : ((0, o.d$)(!0),
                      s.Z.timing(t, { toValue: 1, duration: 250 }).start());
                },
                children: (0, i.jsxs)(a.FormTitle, {
                  tag: "h1",
                  className: m.advancedTitle,
                  children: [
                    h.intl.string(h.t.dYRsrq),
                    (0, i.jsx)(u.Z, {
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
                (0, i.jsx)(s.Z.div, {
                  style: { opacity: t },
                  children: (0, i.jsx)(d.Z, {}),
                }),
            }),
          ],
        });
      }
    },
    351123: function (e, t, n) {
      "use strict";
      n(47120), n(724458);
      var i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(442837),
        o = n(481060),
        d = n(668781),
        c = n(493683),
        u = n(787014),
        h = n(741361),
        m = n(911969),
        g = n(385499),
        p = n(134433),
        x = n(600164),
        f = n(156699),
        v = n(693196),
        j = n(434404),
        C = n(200498),
        b = n(146085),
        T = n(192079),
        N = n(277053),
        S = n(271383),
        Z = n(430824),
        E = n(496675),
        y = n(594174),
        I = n(903386),
        R = n(700785),
        w = n(605436),
        _ = n(27544),
        L = n(415236),
        A = n(182905),
        M = n(71080),
        D = n(981631),
        B = n(231338),
        P = n(388032),
        O = n(599234);
      function F(e) {
        let {
          channel: t,
          roles: n,
          members: l,
          disabledReason: s,
          getRemoveTooltipHint: a,
        } = e;
        return (0, i.jsx)(o.List, {
          className: O.roleMemberList,
          sections: [n.length, l.length],
          renderRow: function (e) {
            let u,
              f,
              v,
              { section: j, row: b } = e,
              T = !1;
            switch (j) {
              case M.m$.ROLES:
                var N;
                (v =
                  (f = n[b]).rowType === M.aC.ROLE &&
                  (null === (N = f.tags) || void 0 === N
                    ? void 0
                    : N.guild_connections) === null
                    ? (0, i.jsx)(p.Z, {
                        className: O.shield,
                        color: f.colorString,
                        size: 20,
                      })
                    : (0, i.jsx)(o.ShieldUserIcon, {
                        size: "custom",
                        className: O.shield,
                        color: f.colorString,
                        height: 20,
                      })),
                  (u = (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: O.rowHeight,
                        children: v,
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: O.rowLabel,
                        color: f.disabled ? "text-muted" : "text-normal",
                        children: f.name,
                      }),
                    ],
                  })),
                  (T = f.disabled);
                break;
              case M.m$.MEMBERS:
                (f = l[b]),
                  (u = (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(o.Avatar, {
                        src: f.avatarURL,
                        size: o.AvatarSizes.SIZE_24,
                        "aria-hidden": !0,
                      }),
                      (0, i.jsx)(o.Text, {
                        className: O.rowLabel,
                        variant: "text-sm/normal",
                        children: f.name,
                      }),
                      f.bot &&
                        (0, i.jsx)(g.Z, {
                          verified: f.verifiedBot,
                          className: O.rowBotTag,
                        }),
                      null != f.nickname &&
                        (0, i.jsx)(o.Text, {
                          color: "text-muted",
                          className: O.rowLabelSubText,
                          variant: "text-sm/normal",
                          children: f.username,
                        }),
                    ],
                  })),
                  (T = f.disabled);
                break;
              default:
                f = null;
            }
            if (null == f) return null;
            let S = !T && null == s && null != f.id;
            return (0, i.jsxs)(
              x.Z,
              {
                justify: x.Z.Justify.BETWEEN,
                align: x.Z.Align.CENTER,
                className: O.memberRow,
                children: [
                  (0, i.jsx)(x.Z, {
                    justify: x.Z.Justify.START,
                    align: x.Z.Align.CENTER,
                    className: O.__invalid_memberRowBody,
                    children: u,
                  }),
                  (0, i.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: w.zB(f.rowType),
                  }),
                  f.rowType !== M.aC.EMPTY_STATE &&
                    (0, i.jsx)(o.TooltipContainer, {
                      className: O.removeIconContainer,
                      text: null != s ? s : a(f.rowType, f.disabled),
                      children: (0, i.jsx)(o.Clickable, {
                        onClick: () => {
                          var e, n, i;
                          return (
                            S &&
                            null != f &&
                            ((e = f.id),
                            (n = f.name),
                            (i = f.rowType),
                            void d.Z.show({
                              title: P.intl.string(P.t.GuPYQE),
                              body: P.intl.format(P.t.xERCnZ, { name: n }),
                              cancelText: P.intl.string(P.t["ETE/oK"]),
                              onConfirm: () =>
                                (function (e, n) {
                                  if (t.isGuildStageVoice()) {
                                    let i = (0, C._L)(
                                      e,
                                      n === M.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER,
                                      t,
                                    );
                                    (0, C.Os)(i)
                                      ? c.Z.clearPermissionOverwrite(t.id, i.id)
                                      : (0, h.hw)(t.id, [i]);
                                  } else c.Z.clearPermissionOverwrite(t.id, e);
                                })(e, i),
                            }))
                          );
                        },
                        "aria-disabled": !S,
                        "aria-label": P.intl.string(P.t.N86XcH),
                        children: (0, i.jsx)(o.CircleXIcon, {
                          size: "md",
                          color: "currentColor",
                          className: r()(O.removeIcon, {
                            [O.disabledRemoveIcon]: T || s,
                          }),
                        }),
                      }),
                    }),
                ],
              },
              f.id,
            );
          },
          rowHeight: 40,
          renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
              case M.m$.ROLES:
                return (0, i.jsx)(
                  G,
                  { title: P.intl.string(P.t.LPJmLy) },
                  "roles-title",
                );
              case M.m$.MEMBERS:
                return (0, i.jsx)(
                  G,
                  { title: P.intl.string(P.t["9Oq93t"]) },
                  "members-title",
                );
            }
          },
          sectionHeight: 49,
        });
      }
      function k(e) {
        let { guild: t, channel: l, permissionUpdates: s } = e,
          d = (0, a.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
          c = w.RZ(t, d, l, b.yP, s),
          u = (0, a.e7)([S.ZP], () =>
            w.cR(S.ZP.getMemberIds(t.id), l, t, b.yP, s),
          ),
          h = (0, C.nG)(l.id);
        function m() {
          (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e("46786").then(n.bind(n, 388131));
            return (t) => (0, i.jsx)(e, { ...t, channelId: l.id });
          });
        }
        return (0, i.jsxs)("div", {
          className: r()(O.settingCard, O.active),
          children: [
            (0, i.jsx)(L.Z, {
              label: P.intl.string(P.t.StpcFR),
              description: P.intl.string(P.t.f7VbhI),
              icon: (0, i.jsx)(o.StageIcon, {
                size: "custom",
                color: "currentColor",
                className: O.cardIcon,
                height: 20,
                width: 20,
              }),
              id: "StageModeratorSettingCard",
            }),
            (0, i.jsxs)("div", {
              className: O.cardFolder,
              children: [
                (0, i.jsxs)(x.Z, {
                  justify: x.Z.Justify.BETWEEN,
                  align: x.Z.Align.CENTER,
                  className: O.folderHeader,
                  children: [
                    (0, i.jsx)(o.FormTitle, {
                      tag: "h5",
                      className: O.folderTitle,
                      children: P.intl.string(P.t["7BWDRU"]),
                    }),
                    (0, i.jsx)(o.Tooltip, {
                      text: P.intl.string(P.t.arRuER),
                      shouldShow: !h,
                      children: (e) =>
                        (0, i.jsx)(o.Button, {
                          ...e,
                          size: o.Button.Sizes.SMALL,
                          color: o.Button.Colors.BRAND,
                          onClick: m,
                          disabled: !h,
                          children: P.intl.string(P.t.dMJ3Y2),
                        }),
                    }),
                  ],
                }),
                (0, i.jsx)(F, {
                  channel: l,
                  roles: c,
                  members: u,
                  disabledReason: h ? null : P.intl.string(P.t.arRuER),
                  getRemoveTooltipHint: T.kk,
                }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let {
            guild: t,
            channel: l,
            isPrivateGuildChannel: s,
            roles: d,
            members: c,
          } = e,
          u = (0, a.e7)([E.Z], () => E.Z.can(B.Pl.ADMINISTRATOR, t)),
          h = R.Uu(B.Pl.VIEW_CHANNEL, t),
          m = R.Uu(B.Pl.ADMINISTRATOR, t);
        async function g() {
          let e = l.accessPermissions,
            r = y.default.getCurrentUser();
          if (!s && null != (await (0, v.T)(t.id, l.id))) {
            (0, o.openModalLazy)(async () => {
              let { ConfirmModal: e } = await Promise.resolve().then(
                n.bind(n, 878678),
              );
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  confirmButtonColor: o.ButtonColors.BRAND,
                  header: P.intl.string(P.t.ZzdgUl),
                  confirmText: P.intl.string(P.t.BddRzc),
                  children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: P.intl.format(P.t.DwY2vL, {
                      onClick: () => {
                        j.Z.open(t.id, D.pNK.ONBOARDING), n.onClose();
                      },
                    }),
                  }),
                });
            });
            return;
          }
          w.$e(l, e, s), !s && null != r && !u && w.Yh(l, e);
        }
        let p = {
          title: P.intl.string(P.t.aUI70t),
          subtitle: P.intl.string(P.t.hfbjIC),
          formLabel: P.intl.string(P.t.P6eCbG),
        };
        return (
          l.isCategory()
            ? ((p.title = P.intl.string(P.t.lEPAZ2)),
              (p.subtitle = P.intl.string(P.t["RQUk6+"])),
              (p.formLabel = P.intl.string(P.t["8VIxJi"])))
            : l.type === D.d4z.GUILD_VOICE &&
              (p.subtitle = P.intl.string(P.t.cLjvKi)),
          (0, i.jsxs)("div", {
            className: r()(O.settingCard, { [O.active]: s }),
            children: [
              (0, i.jsx)(L.Z, {
                description: p.subtitle,
                icon: (0, i.jsx)(o.LockIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: O.cardIcon,
                  height: 20,
                  width: 20,
                }),
                id: "PrivateChannelSettingCard",
                label: p.title,
                onChange: g,
                value: s,
              }),
              (0, i.jsxs)("div", {
                className: O.cardFolder,
                children: [
                  m &&
                    (0, i.jsx)("div", {
                      className: O.adminWarning,
                      children: (0, i.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.WARNING,
                        children: P.intl.string(P.t["5f3HIC"]),
                      }),
                    }),
                  !h &&
                    !m &&
                    !s &&
                    (0, i.jsx)("div", {
                      className: O.adminWarning,
                      children: (0, i.jsx)(o.HelpMessage, {
                        messageType: o.HelpMessageTypes.WARNING,
                        children: P.intl.string(P.t.ZAk4Q0),
                      }),
                    }),
                  s &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsxs)(x.Z, {
                          justify: x.Z.Justify.BETWEEN,
                          align: x.Z.Align.CENTER,
                          className: O.folderHeader,
                          children: [
                            (0, i.jsx)(o.FormTitle, {
                              tag: "h5",
                              className: O.folderTitle,
                              children: p.formLabel,
                            }),
                            (0, i.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              color: o.Button.Colors.BRAND,
                              onClick: function () {
                                (0, o.openModalLazy)(async () => {
                                  let { default: e } =
                                    await Promise.resolve().then(
                                      n.bind(n, 185413),
                                    );
                                  return (t) =>
                                    (0, i.jsx)(e, {
                                      ...t,
                                      channelId: l.id,
                                      inSettings: !0,
                                    });
                                });
                              },
                              children: P.intl.string(P.t.dMJ3Y2),
                            }),
                          ],
                        }),
                        (0, i.jsx)(F, {
                          channel: l,
                          roles: d,
                          members: c,
                          getRemoveTooltipHint: w.yv,
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
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.FormDivider, { className: O.divider }),
            (0, i.jsx)(o.FormTitle, {
              className: r()(O.folderTitle, O.sectionTitle),
              tag: "h5",
              children: t,
            }),
          ],
        });
      }
      t.Z = a.ZP.connectStores([N.Z, E.Z, S.ZP, Z.Z], () => {
        let e;
        let t = N.Z.channel,
          n = N.Z.category,
          i = [],
          l = [],
          s = {},
          r = !1;
        if (null != t) {
          e = Z.Z.getGuild(t.getGuildId());
          let n = S.ZP.getMemberIds(null == e ? void 0 : e.id);
          if (null != e) {
            let a = Z.Z.getRoles(e.id);
            (s = N.Z.editedPermissionIds.reduce((e, t) => {
              let n = N.Z.getPermissionOverwrite(t);
              return null != n && (e[t] = n), e;
            }, {})),
              (i = w.kA(e, a, t, t.accessPermissions, s)),
              (l = w.cR(n, t, e, t.accessPermissions, s)),
              (r = w.Yk(t, s));
          }
        }
        return {
          canSyncChannel: null != n && E.Z.can(B.Pl.MANAGE_ROLES, n),
          category: n,
          channel: t,
          filteredMembers: l,
          filteredRoles: i,
          guild: e,
          isPrivateGuildChannel: r,
          locked: N.Z.locked,
          permissionUpdates: s,
        };
      })(function (e) {
        let {
            canSyncChannel: t,
            category: s,
            channel: r,
            filteredMembers: a,
            filteredRoles: d,
            guild: c,
            isPrivateGuildChannel: h,
            locked: m,
            permissionUpdates: g,
          } = e,
          [p, x] = l.useState(!R.Uu(B.Pl.SEND_MESSAGES, r));
        if (null == r || null == c) return null;
        function v() {
          w.$e(r, B.Pl.SEND_MESSAGES, p), x(!p);
        }
        function j() {
          if (null != s)
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.resolve().then(
                n.bind(n, 170509),
              );
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  channel: r,
                  category: s,
                  onConfirm: async () => {
                    let { guild_id: e } = s,
                      t = { ...s.permissionOverwrites };
                    null != e && null == t[e] && (t[e] = R.we(e)),
                      (await (0, f.u)(r, t[e].deny, t[e].allow)) &&
                        (0, u.wk)(r.id, {
                          permissionOverwrites: Object.values(t),
                        });
                  },
                });
            });
        }
        let C = {
          title: P.intl.string(P.t.BAZMBg),
          subtitle: P.intl.string(P.t.XLrZys),
        };
        return (
          r.isCategory() &&
            ((C.title = P.intl.string(P.t["/uELTk"])),
            (C.subtitle = P.intl.string(P.t["8iAg3d"]))),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(o.FormTitle, { tag: "h1", children: C.title }),
              (0, i.jsx)(o.FormText, { children: C.subtitle }),
              null != s && t
                ? m
                  ? (0, i.jsx)(A.Z, {
                      canSync: !1,
                      icon: o.RefreshIcon,
                      noticeText: P.intl.format(P.t.ETJqLi, {
                        categoryName: s.name,
                      }),
                    })
                  : (0, i.jsx)(A.Z, {
                      buttonText: P.intl.string(P.t.NVwuHh),
                      canSync: !0,
                      icon: (0, o.makeIconCompat)(I.Z),
                      noticeText: P.intl.format(P.t.OIhm0N, {
                        categoryName: s.name,
                      }),
                      onClick: j,
                    })
                : null,
              r.isGuildStageVoice()
                ? (0, i.jsx)(k, { guild: c, channel: r, permissionUpdates: g })
                : null,
              (0, i.jsx)(V, {
                channel: r,
                guild: c,
                isPrivateGuildChannel: h,
                roles: d,
                members: a,
              }),
              !1,
              (0, i.jsx)(_.Z, {}),
            ],
          })
        );
      });
    },
    415236: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        s = n(600164),
        r = n(715209);
      function a(e) {
        let {
          description: t,
          icon: n,
          id: a,
          label: o,
          onChange: d,
          value: c,
        } = e;
        return (0, i.jsxs)("div", {
          className: r.cardContent,
          children: [
            (0, i.jsxs)(s.Z, {
              justify: s.Z.Justify.BETWEEN,
              align: s.Z.Align.CENTER,
              children: [
                n,
                (0, i.jsx)(s.Z.Child, {
                  grow: 1,
                  children: (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: o,
                  }),
                }),
                null != d &&
                  null != c &&
                  (0, i.jsx)(l.Switch, { id: a, checked: c, onChange: d }),
              ],
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-xs/normal",
              color: "text-normal",
              className: r.cardDescription,
              children: t,
            }),
          ],
        });
      }
    },
    182905: function (e, t, n) {
      "use strict";
      var i = n(200651);
      n(192379);
      var l = n(120356),
        s = n.n(l),
        r = n(692547),
        a = n(481060),
        o = n(600164),
        d = n(307416);
      t.Z = (e) => {
        let {
          className: t,
          icon: n,
          noticeText: l,
          buttonText: c,
          onClick: u,
          canSync: h,
        } = e;
        return (0, i.jsx)(a.Card, {
          className: s()(t, d.card),
          children: (0, i.jsxs)(o.Z, {
            justify: o.Z.Justify.BETWEEN,
            align: o.Z.Align.CENTER,
            children: [
              (0, i.jsx)(n, {
                width: 20,
                height: 20,
                size: "custom",
                color: r.Z.unsafe_rawColors.YELLOW_300.css,
              }),
              (0, i.jsx)("div", {
                className: d.label,
                children: (0, i.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: l,
                }),
              }),
              h &&
                (0, i.jsx)(a.Button, {
                  size: a.Button.Sizes.SMALL,
                  color: a.Button.Colors.PRIMARY,
                  onClick: u,
                  children: c,
                }),
            ],
          }),
        });
      };
    },
    257017: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var i = n(668781),
        l = n(63063),
        s = n(981631),
        r = n(388032);
      function a(e) {
        i.Z.show({
          title: r.intl.string(r.t.vElC9f),
          body: r.intl.format(r.t.yslqFB, { name: e }),
          cancelText: r.intl.string(r.t.psXQHB),
          onCancel() {
            window.open(l.Z.getArticleURL(s.BhN.PERMISSIONS_LOCKOUT));
          },
        });
      }
    },
    188857: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(790333),
        s = n.n(l),
        r = n(442837),
        a = n(749210),
        o = n(911969),
        d = n(271383),
        c = n(594174),
        u = n(823379);
      function h(e, t) {
        let n = (0, r.Wu)([d.ZP], () => d.ZP.getMemberIds(e), [e]),
          [l, h] = i.useMemo(() => {
            var e;
            return s()(
              null == (e = t)
                ? []
                : Object.values(e)
                    .filter((e) => e.type === o.BN.MEMBER)
                    .map((e) => e.id),
              (e) => n.includes(e),
            );
          }, [t, n]);
        return (
          i.useEffect(() => {
            h.length > 0 && null != e && a.Z.requestMembersById(e, h, !1);
          }, [h, e]),
          (0, r.Wu)([c.default], () => l.map(c.default.getUser).filter(u.lm), [
            l,
          ])
        );
      }
    },
    869779: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var i = n(200651),
        l = n(192379),
        s = n(442837),
        r = n(481060),
        a = n(570140),
        o = n(787014),
        d = n(37234),
        c = n(503089),
        u = n(493544),
        h = n(367907),
        m = n(933557),
        g = n(471445),
        p = n(351123),
        x = n(685929),
        f = n(665906),
        v = n(210887),
        j = n(131704),
        C = n(533947),
        b = n(277053),
        T = n(388610),
        N = n(592125),
        S = n(496675),
        Z = n(699516),
        E = n(594174),
        y = n(585483),
        I = n(787263),
        R = n(975316),
        w = n(428813),
        _ = n(2147),
        L = n(856606),
        A = n(981631),
        M = n(388032),
        D = n(359238);
      function B(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = arguments.length > 2 ? arguments[2] : void 0;
        h.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
          settings_type: "channel",
          origin_pane: t,
          destination_pane: e,
          location: n,
        });
      }
      class P extends l.PureComponent {
        componentDidMount() {
          B(this.props.section, null, this.props.analyticsLocation);
        }
        componentWillUnmount() {
          a.Z.wait(() => (0, o.xv)());
        }
        componentDidUpdate(e) {
          let { formState: t, section: n } = e,
            {
              formState: i,
              section: l,
              canManageRoles: s,
              canManageChannels: r,
              canManageWebhooks: a,
              canUnlinkChannel: o,
            } = this.props;
          (r || s || a || o) &&
          (i !== A.QZA.CLOSED || i === t) &&
          (s || l !== A.CoT.PERMISSIONS) &&
          (a || o || l !== A.CoT.INTEGRATIONS)
            ? l !== n && B(l, n)
            : (0, d.xf)();
        }
        render() {
          let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: l,
            category: s,
            canManageRoles: a,
            canManageChannels: h,
            canDeleteChannels: x,
            canManageWebhooks: f,
            canUnlinkChannel: v,
          } = this.props;
          return null == l
            ? null
            : (0, i.jsx)(c.ZP, {
                theme: e,
                sidebarTheme: t,
                section: null != n ? n : A.CoT.OVERVIEW,
                onSetSection: o.zc,
                onClose: d.xf,
                sections: (function (e) {
                  let {
                      channel: t,
                      category: n,
                      canManageRoles: l,
                      canManageChannels: s,
                      canDeleteChannels: a,
                      canManageWebhooks: c,
                      canUnlinkChannel: h,
                    } = e,
                    x = (0, g.KS)(t),
                    { GUILD_CATEGORY: f } = A.d4z,
                    v = j.Ec.has(t.type),
                    N =
                      t.type === f
                        ? M.intl.string(M.t.ifbXnJ)
                        : v
                          ? t.isForumPost()
                            ? M.intl.string(M.t.nEOg1N)
                            : M.intl.string(M.t.H7vTe3)
                          : M.intl.string(M.t["8D8Rsb"]);
                  return [
                    {
                      section: u.ID.HEADER,
                      label:
                        null != t
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                null != x
                                  ? (0, i.jsx)(x, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: D.channelIcon,
                                    })
                                  : null,
                                (0, m.F6)(t, E.default, Z.Z),
                                null != n
                                  ? (0, i.jsx)(r.Text, {
                                      tag: "span",
                                      variant: "text-xs/semibold",
                                      color: "header-secondary",
                                      lineClamp: 1,
                                      className: D.category,
                                      children: (0, m.F6)(n, E.default, Z.Z),
                                    })
                                  : null,
                              ],
                            })
                          : M.intl.string(M.t.XPDhcX),
                    },
                    {
                      section: A.CoT.OVERVIEW,
                      label: M.intl.string(M.t["/dp6yc"]),
                      ariaLabel: M.intl.string(M.t["/dp6yc"]),
                      element: _.Z,
                      notice: { element: _.G, stores: [T.Z] },
                    },
                    {
                      section: A.CoT.PERMISSIONS,
                      label: M.intl.string(M.t.xrmhRU),
                      element: p.Z,
                      notice: { element: L.n, stores: [b.Z] },
                      predicate: () => l && !v,
                    },
                    {
                      section: A.CoT.INSTANT_INVITES,
                      label: M.intl.string(M.t["9F90iY"]),
                      element: w.Z,
                      type: u.bT.CUSTOM,
                      predicate: () => t.type !== f && s && !v,
                    },
                    {
                      section: A.CoT.INTEGRATIONS,
                      label: M.intl.string(M.t.s69NLC),
                      ariaLabel: M.intl.string(M.t.s69NLC),
                      element: R.Z,
                      notice: { stores: [C.Z], element: R.B },
                      predicate: () => (!!c || !!h) && j.Ti.has(t.type),
                    },
                    { section: u.ID.DIVIDER },
                    {
                      section: A.CoT.DELETE,
                      onClick() {
                        (0, I.w)(t, function () {
                          y.S.subscribeOnce(A.CkL.LAYER_POP_COMPLETE, () => {
                            (0, o.zz)(t.id);
                          }),
                            (0, d.xf)();
                        });
                      },
                      label: N,
                      ariaLabel: N,
                      icon: (0, i.jsx)(r.TrashIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                      predicate: () => a,
                    },
                  ];
                })({
                  channel: l,
                  category: s,
                  canManageRoles: a,
                  canManageChannels: h,
                  canDeleteChannels: x,
                  canManageWebhooks: f,
                  canUnlinkChannel: v,
                }),
              });
        }
      }
      function O() {
        let { channel: e, analyticsLocation: t } = (0, s.cj)([T.Z], () =>
            T.Z.getProps(),
          ),
          n = (0, s.e7)([T.Z], () => T.Z.getFormState()),
          l = (0, s.e7)([T.Z], () => T.Z.getSection()),
          r = (0, s.e7)([v.Z], () => v.Z.theme),
          a = (0, s.e7)([v.Z], () => (v.Z.darkSidebar ? A.BRd.DARK : void 0)),
          o = (0, f.C7)(e),
          d = (0, f.Xb)(e),
          {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: m,
          } = (0, s.cj)([S.Z], () => ({
            canManageChannels: S.Z.can(A.Plq.MANAGE_CHANNELS, e),
            canManageRoles: null != e && S.Z.can(A.Plq.MANAGE_ROLES, e),
            canManageWebhooks: null != e && S.Z.can(A.Plq.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, x.C)(e, S.Z),
          })),
          g = (0, s.e7)([N.Z], () =>
            N.Z.getChannel(null == e ? void 0 : e.parent_id),
          );
        return (0, i.jsx)(P, {
          channel: e,
          category: g,
          canManageChannels: (null == e ? void 0 : e.isThread()) ? o : c,
          canDeleteChannels: (null == e ? void 0 : e.isThread()) ? d : c,
          canManageRoles: u,
          canManageWebhooks: h,
          canUnlinkChannel: m,
          formState: n,
          theme: r,
          sidebarTheme: a,
          section: l,
          analyticsLocation: t,
        });
      }
    },
    975316: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return h;
        },
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        s = n(139387),
        r = n(852860),
        a = n(490655),
        o = n(533947),
        d = n(388610),
        c = n(430824);
      function u(e) {
        let { refToScroller: t } = e,
          n = (0, l.e7)([d.Z], () => d.Z.getChannel(), []),
          s = (0, l.e7)(
            [c.Z],
            () => (null != n ? c.Z.getGuild(n.getGuildId()) : null),
            [n],
          ),
          {
            section: r,
            sectionId: u,
            webhooks: h,
            editedWebhook: m,
            isFetching: g,
            errors: p,
          } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
        return null == s || null == n
          ? null
          : (0, i.jsx)(a.Z, {
              guild: s,
              channel: n,
              section: r,
              sectionId: u,
              webhooks: h,
              editedWebhook: m,
              isFetchingWebhooks: g,
              hasChanges: o.Z.hasChanges,
              errors: p,
              refToScroller: t,
            });
      }
      function h() {
        let { channel: e, submitting: t } = (0, l.cj)([d.Z], () =>
            d.Z.getProps(),
          ),
          n = (0, l.e7)([o.Z], () => o.Z.editedWebhook),
          a = (0, l.e7)(
            [c.Z],
            () => (null != e ? c.Z.getGuild(e.getGuildId()) : null),
            [e],
          );
        return (0, i.jsx)(r.Z, {
          submitting: t,
          onReset: () => {
            s.Z.init();
          },
          onSave: () => {
            if (null != a) null != n && s.Z.saveWebhook(a.id, n);
          },
        });
      }
    },
    428813: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        s = n(270394),
        r = n(388610),
        a = n(430824),
        o = n(496675),
        d = n(246946),
        c = n(981631);
      function u() {
        let e = (0, l.e7)([d.Z], () => d.Z.hideInstantInvites),
          { channel: t, guild: n } = (0, l.cj)(
            [r.Z, a.Z],
            () => {
              let { channel: e } = r.Z.getProps(),
                t = null != e ? a.Z.getGuild(e.getGuildId()) : null;
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
            [r.Z],
            () => r.Z.getInvites(),
            [],
          );
        return (0, i.jsx)(s.Z, {
          invites: h,
          loading: m,
          guild: n,
          channel: t,
          canCreateInvites: u,
          hide: e,
        });
      }
    },
    2147: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return ef;
        },
        Z: function () {
          return eC;
        },
      }),
        n(789020),
        n(47120),
        n(733860),
        n(653041);
      var i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(313361),
        o = n(683860),
        d = n(442837),
        c = n(692547),
        u = n(780384),
        h = n(481060),
        m = n(787014),
        g = n(771340),
        p = n(410575),
        x = n(852860),
        f = n(129865),
        v = n(902840),
        j = n(933557),
        C = n(541716),
        b = n(752305),
        T = n(893718),
        N = n(600164),
        S = n(313201),
        Z = n(907040),
        E = n(633302),
        y = n(109434),
        I = n(162389),
        R = n(946458),
        w = n(968437),
        _ = n(665906),
        L = n(456077),
        A = n(747212),
        M = n(210887),
        D = n(131704),
        B = n(314897),
        P = n(388610),
        O = n(430824),
        F = n(496675),
        k = n(903223),
        V = n(594174),
        G = n(934415),
        U = n(70956),
        H = n(630388),
        W = n(63063),
        z = n(129724),
        X = n(296146),
        Q = n(564735),
        Y = n(981631),
        q = n(176505),
        J = n(185923),
        K = n(710352),
        $ = n(124368),
        ee = n(388032),
        et = n(35446),
        en = n(275477);
      function ei(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let el = (0, S.hQ)(),
        es = (0, S.hQ)(),
        er = (0, S.hQ)(),
        ea = (0, S.hQ)(),
        eo = (0, S.hQ)(),
        ed = (0, S.hQ)(),
        ec = (0, S.hQ)(),
        eu = (0, S.hQ)(),
        eh = (0, S.hQ)(),
        em = (0, S.hQ)(),
        eg = (0, S.hQ)(),
        ep = (0, D.kt)({ id: "1", type: Y.d4z.DM }),
        ex = "AUTOMATIC_RTC_REGION",
        ef = d.ZP.connectStores([P.Z], () => {
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
                type: n,
                topic: i,
                bitrate: l,
                userLimit: s,
                nsfw: r,
                flags: a,
                rateLimitPerUser: o,
                defaultThreadRateLimitPerUser: d,
                threadMetadata: c,
                defaultAutoArchiveDuration: u,
                template: h,
                rtcRegion: g,
                videoQualityMode: p,
                defaultReactionEmoji: x,
                availableTags: f,
                defaultSortOrder: v,
                defaultForumLayout: j,
              } = e;
              e.isThread() && (t = (0, L.Z)(t, !0)),
                (0, m.wk)(e.id, {
                  name: t,
                  type: n,
                  topic: i,
                  bitrate: l,
                  userLimit: s,
                  nsfw: r,
                  flags: a,
                  rateLimitPerUser: o,
                  defaultThreadRateLimitPerUser: d,
                  autoArchiveDuration:
                    null == c ? void 0 : c.autoArchiveDuration,
                  locked: null == c ? void 0 : c.locked,
                  invitable: null == c ? void 0 : c.invitable,
                  defaultAutoArchiveDuration: u,
                  template: h,
                  rtcRegion: g,
                  videoQualityMode: p,
                  defaultReactionEmoji: x,
                  availableTags: f,
                  defaultSortOrder: v,
                  defaultForumLayout: j,
                });
            },
          };
        })(x.Z);
      function ev(e) {
        let { channel: t, onChange: n } = e,
          [s, r] = l.useState(null),
          a = t.rateLimitPerUser,
          o = l.useMemo(() => {
            let e = [...(null != s ? s : Y.BiE)];
            return (
              !e.includes(a) && e.unshift(a),
              e.map((e) => ({ label: (0, z.A)(e, !1), value: e }))
            );
          }, [s, a]),
          d = l.useCallback(
            (e) => {
              n(e), r(null);
            },
            [n],
          ),
          c = l.useCallback((e) => {
            if ("" === e) {
              r(null);
              return;
            }
            let t = [],
              n = parseInt(e, 10);
            if (Number.isNaN(n)) {
              r(null);
              return;
            }
            n <= Y.GI0 && t.push(n);
            let i = n * U.Z.Seconds.MINUTE;
            i <= Y.GI0 && t.push(i);
            let l = n * U.Z.Seconds.HOUR;
            l <= Y.GI0 && t.push(l), r(t);
          }, []),
          u = l.useCallback(() => {
            r(null);
          }, []);
        return (0, i.jsx)(h.SearchableSelect, {
          className: en.marginBottom8,
          value: a,
          onChange: d,
          onSearchChange: c,
          options: o,
          onBlur: u,
          placeholder: ee.intl.string(ee.t.dBqQu7),
        });
      }
      class ej extends l.PureComponent {
        componentDidMount() {
          null == this.props.regions &&
            null != this.props.guild &&
            g.Z.fetchRegions(this.props.guild.id);
        }
        componentDidUpdate(e) {
          var t, n, i, l;
          let s =
            null !==
              (i =
                null === (t = this.props.channel) || void 0 === t
                  ? void 0
                  : t.topic) && void 0 !== i
              ? i
              : "";
          (null !==
            (l = null === (n = e.channel) || void 0 === n ? void 0 : n.topic) &&
          void 0 !== l
            ? l
            : "") !== s &&
            s !== this.state.textTopicValue &&
            this.setState({ textTopicValue: s, richTopicValue: (0, b.JM)(s) });
        }
        getError(e) {
          let { errors: t } = this.props;
          return null == t ? void 0 : t[e];
        }
        getCooldownSliderMarker(e) {
          return (0, z.A)(e, !0);
        }
        getAutoArchiveDurationSliderMarker(e) {
          return (0, z.A)(e * U.Z.Seconds.MINUTE, !0);
        }
        renderChannelInfo(e, t) {
          var n, l, s, d, u, m;
          let g, x;
          let {
              canManageChannels: f,
              canSendMessages: v,
              isThreadModerator: j,
              canManageThread: b,
              guild: N,
              isForumPost: S,
              isOwner: Z,
              showAdvancedSlowModeSetting: y,
            } = this.props,
            _ = D.Ec.has(e.type),
            L = e.isForumLikeChannel(),
            M =
              L &&
              (null === (n = e.availableTags) || void 0 === n
                ? void 0
                : n.every((e) => e.moderated)),
            B =
              (null === (l = V.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.isStaff()) === !0,
            P = D.TK.has(e.type)
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(h.FormItem, {
                      title: L
                        ? ee.intl.string(ee.t.yR6Hwc)
                        : ee.intl.string(ee.t.X8jMDg),
                      className: en.marginTop20,
                      children: L
                        ? (0, i.jsx)(T.Z, {
                            innerClassName: et.forumGuidelines,
                            characterCountClassName:
                              et.forumGuidelinesCharacterCount,
                            maxCharacterCount: q.Z7,
                            onChange: this.handleChangeRichTopic,
                            placeholder: ee.intl.string(ee.t["71fbmp"]),
                            channel: ep,
                            textValue: this.state.textTopicValue,
                            richValue: this.state.richTopicValue,
                            type: C.Ie.FORUM_CHANNEL_GUIDELINES,
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
                        : (0, i.jsx)(h.TextArea, {
                            autoFocus: this.props.subsection === Y.ZfP.TOPIC,
                            placeholder: ee.intl.string(ee.t["71fbmp"]),
                            value: E.ZP.translateSurrogatesToInlineEmoji(
                              e.topic,
                            ),
                            onChange: this.handleChangeTopic,
                            error: this.getError("topic"),
                            maxLength: q.$x,
                            disabled: !f,
                            autosize: !0,
                          }),
                    }),
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                  ],
                })
              : null,
            O =
              L && B
                ? (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(h.FormItem, {
                        title: ee.intl.string(ee.t.qk2jdX),
                        className: en.marginTop20,
                        children: (0, i.jsx)(h.TextArea, {
                          placeholder: ee.intl.string(ee.t.DDjD1N),
                          value: E.ZP.translateSurrogatesToInlineEmoji(
                            null !== (s = e.template) && void 0 !== s ? s : "",
                          ),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: K.Vb,
                          disabled: !f,
                          autosize: !0,
                        }),
                      }),
                      (0, i.jsx)(h.FormDivider, {
                        className: r()(en.marginTop40, en.marginBottom40),
                      }),
                    ],
                  })
                : null,
            F = e.isForumLikeChannel()
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)(h.FormItem, {
                      children: [
                        (0, i.jsx)(h.FormTitle, {
                          id: el,
                          className: et.formTitle,
                          children: ee.intl.string(ee.t["P/y+sr"]),
                        }),
                        (0, i.jsx)(h.FormText, {
                          id: es,
                          type: h.FormText.Types.DESCRIPTION,
                          className: et.description,
                          children: ee.intl.string(ee.t["/oQQ39"]),
                        }),
                        (0, i.jsx)(I.Z, { channel: e }),
                      ],
                    }),
                    (0, i.jsx)(h.Checkbox, {
                      disabled: !f || M,
                      value: e.hasFlag(q.zZ.REQUIRE_TAG),
                      type: h.Checkbox.Types.INVERTED,
                      onChange: (e, t) => this.handleRequireTagChanged(t),
                      children: (0, i.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        children: ee.intl.string(ee.t["9g2Zys"]),
                      }),
                    }),
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                  ],
                })
              : null,
            k = e.isForumLikeChannel()
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)("div", {
                      className: et.twoColumnSettings,
                      children: [
                        (0, i.jsxs)(h.FormItem, {
                          className: r()(
                            et.settingsLeft,
                            et.settingsDefaultReaction,
                          ),
                          children: [
                            (0, i.jsx)(h.FormTitle, {
                              id: er,
                              className: et.formTitle,
                              children: ee.intl.string(ee.t["8ao1+P"]),
                            }),
                            (0, i.jsx)(h.FormText, {
                              id: es,
                              type: h.FormText.Types.DESCRIPTION,
                              className: et.description,
                              children: ee.intl.string(ee.t.SdbF0t),
                            }),
                            (0, i.jsxs)("div", {
                              className: et.buttonRow,
                              children: [
                                (0, i.jsx)(h.Popout, {
                                  renderPopout: this.renderEmojiPicker,
                                  position: "right",
                                  animation: h.Popout.Animation.NONE,
                                  align: "center",
                                  children: (e) =>
                                    (0, i.jsx)(h.Button, {
                                      ...e,
                                      disabled: !f,
                                      onClick: (t) => {
                                        var n;
                                        null === (n = e.onClick) ||
                                          void 0 === n ||
                                          n.call(e, t);
                                      },
                                      children: ee.intl.string(ee.t["59QgaG"]),
                                    }),
                                }),
                                null != e.defaultReactionEmoji
                                  ? (0, i.jsx)(h.Button, {
                                      className: et.removeButton,
                                      onClick: () =>
                                        this.handleChangeDefaultReactionEmoji(
                                          null,
                                        ),
                                      size: h.Button.Sizes.MIN,
                                      look: h.Button.Looks.LINK,
                                      color: h.Button.Colors.RED,
                                      children: ee.intl.string(ee.t.N86XcH),
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(R.Z, {
                          reactionEmoji: e.defaultReactionEmoji,
                        }),
                      ],
                    }),
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                  ],
                })
              : null,
            G = e.isForumChannel()
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)("div", {
                      className: et.twoColumnSettings,
                      children: [
                        (0, i.jsxs)(h.FormItem, {
                          className: r()(
                            et.settingsLeft,
                            et.settingsDefaultView,
                          ),
                          children: [
                            (0, i.jsx)(h.FormSection, {
                              title: ee.intl.string(ee.t.kQvoCw),
                              children: (0, i.jsx)(h.SingleSelect, {
                                options: [
                                  {
                                    label: ee.intl.string(ee.t["4HXEZG"]),
                                    value: a.X.LIST,
                                  },
                                  {
                                    label: ee.intl.string(ee.t["8RswJC"]),
                                    value: a.X.GRID,
                                  },
                                ],
                                value:
                                  null !== (d = e.defaultForumLayout) &&
                                  void 0 !== d
                                    ? d
                                    : a.X.LIST,
                                onChange: this.handleChangeDefaultForumLayout,
                              }),
                            }),
                            (0, i.jsx)(h.FormText, {
                              className: en.marginTop8,
                              type: h.FormText.Types.DESCRIPTION,
                              children: ee.intl.string(ee.t.mOSViY),
                            }),
                          ],
                        }),
                        e.defaultForumLayout === a.X.GRID
                          ? (0, i.jsx)(X.Z, { className: et.defaultImageView })
                          : (0, i.jsx)(Q.Z, { className: et.defaultImageView }),
                      ],
                    }),
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                  ],
                })
              : null,
            U = e.isForumLikeChannel()
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(h.FormItem, {
                      children: (0, i.jsx)(h.FormSection, {
                        title: ee.intl.string(ee.t.gePre3),
                        children: (0, i.jsx)(h.SingleSelect, {
                          options: [
                            {
                              label: ee.intl.string(ee.t.ElZtzs),
                              value: o.z.LATEST_ACTIVITY,
                            },
                            {
                              label: ee.intl.string(ee.t.w28f3N),
                              value: o.z.CREATION_DATE,
                            },
                          ],
                          value: e.getDefaultSortOrder(),
                          onChange: this.handleChangeDefaultSortOrder,
                        }),
                      }),
                    }),
                    (0, i.jsx)(h.FormText, {
                      className: en.marginTop8,
                      type: h.FormText.Types.DESCRIPTION,
                      children: ee.intl.string(ee.t["165cVV"]),
                    }),
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                  ],
                })
              : null,
            H = _ ? j : f,
            z = D.X_.has(e.type)
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)(h.FormItem, {
                      children: [
                        (0, i.jsx)(h.FormTitle, {
                          id: ea,
                          className: en.marginBottom8,
                          children: ee.intl.string(ee.t["tTHx9/"]),
                        }),
                        L
                          ? (0, i.jsx)(h.FormTitle, {
                              className: en.marginTop20,
                              children: ee.intl.string(ee.t.O1c02t),
                            })
                          : null,
                        !0 === y
                          ? (0, i.jsx)(ev, {
                              channel: e,
                              onChange: this.handleChangeSlowmode,
                            })
                          : (0, i.jsx)(h.Slider, {
                              className: en.marginTop20,
                              initialValue: e.rateLimitPerUser,
                              markers: Y.BiE,
                              stickToMarkers: !0,
                              onValueChange: this.handleChangeSlowmode,
                              onMarkerRender: this.getCooldownSliderMarker,
                              disabled: !H,
                              equidistant: !0,
                              "aria-labelledby": ea,
                              "aria-describedby": eo,
                            }),
                        (0, i.jsx)(h.FormText, {
                          id: eo,
                          type: h.FormText.Types.DESCRIPTION,
                          children: L
                            ? ee.intl.string(ee.t["a+1pdH"])
                            : _
                              ? ee.intl.string(ee.t.OMmNCg)
                              : ee.intl.string(ee.t["HEA/DQ"]),
                        }),
                        L
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(h.FormTitle, {
                                  className: en.marginTop20,
                                  children: ee.intl.string(ee.t["fkY5+v"]),
                                }),
                                (0, i.jsx)(h.Slider, {
                                  className: en.marginTop20,
                                  initialValue:
                                    null !==
                                      (u = e.defaultThreadRateLimitPerUser) &&
                                    void 0 !== u
                                      ? u
                                      : 0,
                                  markers: Y.BiE,
                                  stickToMarkers: !0,
                                  onValueChange:
                                    this.handleChangeThreadMessageSlowmode,
                                  onMarkerRender: this.getCooldownSliderMarker,
                                  disabled: !H,
                                  equidistant: !0,
                                  "aria-labelledby": ea,
                                  "aria-describedby": eo,
                                }),
                                (0, i.jsx)(h.FormText, {
                                  type: h.FormText.Types.DESCRIPTION,
                                  children: ee.intl.string(ee.t.kdZU6O),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                  ],
                })
              : null,
            J =
              _ && null != e.threadMetadata
                ? (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(h.FormItem, {
                        children: (0, i.jsx)(p.Z, {
                          page: Y.ZY5.CHANNEL_SETTINGS,
                          children: (0, i.jsx)(A.Z, {
                            autoArchiveDuration:
                              null !==
                                (m = e.threadMetadata.autoArchiveDuration) &&
                              void 0 !== m
                                ? m
                                : $.AX,
                            guild: N,
                            channel: e,
                            onChange: this.handleAutoArchiveDurationChanged,
                            isDisabled: !b,
                          }),
                        }),
                      }),
                      (0, i.jsx)(h.FormText, {
                        className: en.marginTop8,
                        type: h.FormText.Types.DESCRIPTION,
                        children: S
                          ? ee.intl.string(ee.t["3aJN9P"])
                          : ee.intl.string(ee.t.YUXr4e),
                      }),
                    ],
                  })
                : null,
            ei =
              e.type === Y.d4z.PRIVATE_THREAD && null != e.threadMetadata
                ? (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.FormSwitch, {
                      note: ee.intl.string(ee.t.cSyXJi),
                      onChange: this.handleInvitableChanged,
                      value: e.threadMetadata.invitable,
                      hideBorder: !0,
                      disabled: !b,
                      children: ee.intl.string(ee.t.s2rpNT),
                    }),
                  })
                : null,
            ed = D.ov.has(e.type)
              ? (0, i.jsx)("div", {
                  children: (0, i.jsx)(h.FormSwitch, {
                    note: ee.intl.string(ee.t["9eUgwc"]),
                    onChange: this.handleNSFWChange,
                    value: e.isNSFW(),
                    hideBorder: !0,
                    disabled: !f || null != e.linkedLobby,
                    disabledText:
                      null != e.linkedLobby
                        ? ee.intl.string(ee.t.l6uSVV)
                        : null,
                    children: ee.intl.string(ee.t.Es25YW),
                  }),
                })
              : null,
            ec =
              D.Y0.has(e.type) &&
              null != N &&
              N.hasFeature(Y.oNc.NEWS) &&
              e.id !== (null == N ? void 0 : N.rulesChannelId) &&
              e.id !== (null == N ? void 0 : N.publicUpdatesChannelId)
                ? (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.FormSwitch, {
                      note: ee.intl.format(ee.t.tI7KNT, {
                        documentationLink: W.Z.getArticleURL(
                          Y.BhN.ANNOUNCEMENT_CHANNELS,
                        ),
                      }),
                      onChange: this.handleNewsChange,
                      value: e.type === Y.d4z.GUILD_ANNOUNCEMENT,
                      hideBorder: !0,
                      disabled: !f,
                      children: ee.intl.string(ee.t.Au2b7u),
                    }),
                  })
                : null,
            eu = D.uC.has(e.type)
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                    (0, i.jsx)(p.Z, {
                      page: Y.ZY5.CHANNEL_SETTINGS,
                      children: (0, i.jsx)(A.Z, {
                        autoArchiveDuration: (0, w.WD)(e, null),
                        guild: N,
                        channel: e,
                        onChange: this.handleChangeDefaultAutoArchiveDuration,
                        isDisabled: !f,
                      }),
                    }),
                    (0, i.jsx)(h.FormText, {
                      className: en.marginTop8,
                      type: h.FormText.Types.DESCRIPTION,
                      children: e.isForumLikeChannel()
                        ? ee.intl.string(ee.t.fyXclZ)
                        : ee.intl.string(ee.t.W3Noi4),
                    }),
                  ],
                })
              : null,
            eh = this.props.showChannelSummariesSettings
              ? (0, i.jsx)(h.FormSwitch, {
                  note: ee.intl.format(ee.t.feJW19, {
                    helpdeskArticle: W.Z.getArticleURL(
                      Y.BhN.CONVERSATION_SUMMARIES,
                    ),
                  }),
                  onChange: this.handleChannelSummariesToggled,
                  value:
                    !e.hasFlag(q.zZ.SUMMARIES_DISABLED) &&
                    (null == N
                      ? void 0
                      : N.hasFeature(Y.oNc.SUMMARIES_ENABLED_BY_USER)),
                  hideBorder: !0,
                  disabled:
                    !f ||
                    !(null == N
                      ? void 0
                      : N.hasFeature(Y.oNc.SUMMARIES_ENABLED_BY_USER)),
                  children: (0, i.jsxs)("div", {
                    className: et.badgedItem,
                    children: [
                      ee.intl.string(ee.t.id3ozs),
                      (0, i.jsx)(h.TextBadge, {
                        text: ee.intl.string(ee.t.oW0eUV),
                        color: c.Z.colors.BG_BRAND.css,
                      }),
                    ],
                  }),
                })
              : null,
            em = e.isMediaChannel()
              ? (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(h.FormDivider, {
                      className: r()(en.marginTop40, en.marginBottom40),
                    }),
                    (0, i.jsx)(h.FormSwitch, {
                      onChange: this.handleShowMediaOptionsToggled,
                      value: !e.hasFlag(q.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      note: ee.intl.string(ee.t.J4wCc3),
                      hideBorder: !0,
                      disabled: !f,
                      children: ee.intl.string(ee.t.u8LZOj),
                    }),
                  ],
                })
              : null;
          return (
            e.type === Y.d4z.GUILD_CATEGORY
              ? ((x = ee.intl.string(ee.t.OCAkGB)), (g = "category-name"))
              : e.isForumPost()
                ? ((x = ee.intl.string(ee.t.uyVrTE)), (g = "post-title"))
                : _
                  ? ((x = ee.intl.string(ee.t.j3XWjI)), (g = "thread-name"))
                  : ((x = ee.intl.string(ee.t.PVbHDg)), (g = "channel-name")),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(h.FormItem, {
                  title: x,
                  children: (0, i.jsx)(h.TextInput, {
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: g,
                    autoFocus: !0,
                    disabled: Z ? !v : !f,
                    maxLength: Y.HN8,
                  }),
                }),
                (0, i.jsx)(h.FormDivider, {
                  className: r()(en.marginTop40, en.marginBottom40),
                }),
                P,
                O,
                F,
                k,
                z,
                J,
                G,
                U,
                ei,
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
          let { canManageChannels: n } = this.props;
          if (!this.showVoiceSettings()) return null;
          let l = (0, G.g7)(t, e),
            s = this.getError("bitrate");
          return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
              (0, i.jsx)(h.FormTitle, {
                id: ed,
                children: ee.intl.string(ee.t.w2d0vb),
              }),
              "" !== s &&
                (0, i.jsx)(h.FormText, {
                  id: ec,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: c.Z.unsafe_rawColors.RED_400.css },
                  className: en.marginBottom8,
                  children: s,
                }),
              (0, i.jsx)(h.Slider, {
                initialValue: Math.min(e.bitrate, l),
                onValueChange: this.handleChangeBitrate,
                onValueRender: this.renderBitrate,
                onMarkerRender: this.renderBitrate,
                markers: [Y.Fc, Y.epw, l],
                minValue: Y.Fc,
                maxValue: l,
                keyboardStep: Y.V7H,
                disabled: !n,
                "aria-labelledby": ed,
                "aria-describedby": null != s && "" !== s ? ec : eu,
              }),
              l > Y.epw
                ? (0, i.jsx)(h.FormText, {
                    id: eu,
                    type: h.FormTextTypes.DESCRIPTION,
                    children: ee.intl.format(ee.t.SbQJk5, {
                      bitrate: Y.epw / 1e3,
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
            D.vg.has(e.type) &&
            (e.isGuildVocal() ||
              _.tM.getCurrentConfig({
                guildId: e.guild_id,
                location: "9b50bd_1",
              }).enabled)
          );
        }
        renderVideoQualityMode(e) {
          var t;
          let { canManageChannels: n } = this.props;
          if (!this.showVoiceSettings()) return null;
          let l = [
            { value: Y.Ucd.AUTO, name: ee.intl.string(ee.t.jjKYpq) },
            { value: Y.Ucd.FULL, name: ee.intl.string(ee.t["7jOoJC"]) },
          ];
          return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
              (0, i.jsx)(h.FormItem, {
                title: ee.intl.string(ee.t.jhJEJi),
                children: (0, i.jsx)(h.RadioGroup, {
                  onChange: (e) => {
                    let { value: t } = e;
                    return this.handleVideoQualityModeChange(t);
                  },
                  options: l,
                  value:
                    null !== (t = e.videoQualityMode) && void 0 !== t
                      ? t
                      : Y.Ucd.AUTO,
                  disabled: !n,
                }),
              }),
              (0, i.jsx)(h.FormText, {
                type: h.FormTextTypes.DESCRIPTION,
                children: ee.intl.format(ee.t.c5W7Sk, {}),
              }),
            ],
          });
        }
        onRenderUserLimit(e) {
          return 0 === (e = Math.round(e))
            ? ee.intl.string(ee.t.XX5ciY)
            : ee.intl.formatToPlainString(ee.t["3uHFUV"], { num: e });
        }
        renderUserLimit(e) {
          let { canManageChannels: t } = this.props;
          if (!this.showVoiceSettings()) return null;
          let n = this.getError("user_limit"),
            l = e.isGuildStageVoice() ? Y.xGv : Y.$pe;
          return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            className: en.marginBottom40,
            children: [
              (0, i.jsx)(h.FormTitle, {
                id: eh,
                children: ee.intl.string(ee.t["/AoSGB"]),
              }),
              "" !== n &&
                (0, i.jsx)(h.FormText, {
                  id: em,
                  type: h.FormTextTypes.DESCRIPTION,
                  style: { color: c.Z.unsafe_rawColors.RED_400.css },
                  className: en.marginBottom8,
                  children: n,
                }),
              (0, i.jsx)(h.Slider, {
                initialValue: Math.min(e.userLimit, l),
                onValueChange: this.handleUserLimitChange,
                onValueRender: this.onRenderUserLimit,
                onMarkerRender: (e) => (0 === Math.round(e) ? "∞" : e),
                markers: [0, l],
                minValue: 0,
                maxValue: l,
                disabled: !t,
                "aria-labelledby": eh,
                "aria-describedby": null != n && "" !== n ? em : eg,
              }),
              (0, i.jsx)(h.FormText, {
                id: eg,
                type: h.FormTextTypes.DESCRIPTION,
                children: ee.intl.format(
                  e.isGuildStageVoice() ? ee.t.OqZI8P : ee.t["8yb3JS"],
                  {},
                ),
              }),
            ],
          });
        }
        renderRegionOverride(e) {
          var t;
          let { regions: n, canManageChannels: l, guild: s } = this.props;
          if (null == s || !this.showVoiceSettings() || e.isGuildStageVoice())
            return null;
          let r = [];
          null != n &&
            (r = n
              .filter((e) => !e.deprecated && !e.hidden)
              .map((e) => ({ label: e.name, value: e.id }))).unshift({
              label: ee.intl.string(ee.t.JEmsam),
              value: ex,
            });
          let a = null !== (t = e.rtcRegion) && void 0 !== t ? t : ex;
          return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
              (0, i.jsx)(h.FormTitle, {
                children: ee.intl.string(ee.t.Ms8bX1),
              }),
              (0, i.jsx)(h.SingleSelect, {
                options: r,
                value: a,
                onChange: this.handleRegionChange,
                isDisabled: !l,
              }),
              (0, i.jsx)(h.FormText, {
                type: h.FormTextTypes.DESCRIPTION,
                children: ee.intl.string(ee.t["dbTs+/"]),
              }),
            ],
          });
        }
        renderJuiceImage(e) {
          let t;
          let { theme: l } = this.props;
          return (
            (t =
              e.type === Y.d4z.GUILD_CATEGORY
                ? (0, u.wj)(l)
                  ? n(309095)
                  : n(925442)
                : (0, u.wj)(l)
                  ? n(316491)
                  : n(301358)),
            (0, i.jsx)(N.Z, {
              justify: N.Z.Justify.CENTER,
              className: en.marginTop60,
              children: (0, i.jsx)("img", {
                alt: "",
                width: 280,
                height: 165,
                src: t,
              }),
            })
          );
        }
        render() {
          let { channel: e, channelName: t, guild: n } = this.props;
          return null == e || null == t || null == n
            ? null
            : (0, i.jsxs)(h.FormSection, {
                className: "channel-settings-overview",
                tag: h.FormTitleTags.H1,
                title: ee.intl.string(ee.t["/dp6yc"]),
                children: [
                  this.renderChannelInfo(e, t),
                  this.showVoiceSettings()
                    ? (0, i.jsx)(h.FormDivider, {
                        className: r()(en.marginTop40, en.marginBottom40),
                      })
                    : null,
                  this.renderVoiceBitrate(e, n),
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
          var t, n;
          super(e),
            ei(this, "renderEmojiPicker", (e) => {
              let { closePopout: t } = e,
                { channel: n } = this.props;
              return (0, i.jsx)(Z.Z, {
                guildId: null == n ? void 0 : n.guild_id,
                closePopout: t,
                onSelectEmoji: (e, n) => {
                  this.handleChangeDefaultReactionEmoji(e), n && t();
                },
                pickerIntention: J.Hz.COMMUNITY_CONTENT,
                channel: n,
              });
            }),
            ei(this, "handleRequireTagChanged", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let n = (0, H.mB)(t.flags, q.zZ.REQUIRE_TAG, e);
              (0, m.pW)({ flags: n });
            }),
            ei(this, "handleChangeName", (e) => {
              let { channel: t } = this.props;
              if (null != t)
                t.isThread()
                  ? (e = (0, L.Z)(e, !1))
                  : Y.TPd.LIMITED_CHANNEL_NAME.has(t.type) &&
                    (e = (0, G.Nj)(e)),
                  (0, m.pW)({ name: e });
            }),
            ei(this, "handleBlurName", () => {
              let { channel: e, channelName: t } = this.props;
              if ((null == e ? void 0 : e.isThread()) && null != t) {
                let e = (0, L.Z)(t, !0);
                e !== t && (0, m.pW)({ name: e });
              }
            }),
            ei(this, "handleChangeTopic", (e) => {
              (0, m.pW)({ topic: E.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, "handleChangeRichTopic", (e, t, n) => {
              this.setState({ textTopicValue: t, richTopicValue: n }),
                this.handleChangeTopic(t);
            }),
            ei(this, "handleChangeTemplate", (e) => {
              (0, m.pW)({ template: E.ZP.translateInlineEmojiToSurrogates(e) });
            }),
            ei(this, "handleChangeDefaultReactionEmoji", (e) => {
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
            ei(this, "handleChangeDefaultForumLayout", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              (0, m.pW)({ defaultForumLayout: e }),
                this.props.handleSetDefaultLayout(e);
            }),
            ei(this, "handleChangeDefaultSortOrder", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              (0, m.pW)({ defaultSortOrder: e });
            }),
            ei(this, "handleChangeBitrate", (e) => {
              (0, m.pW)({ bitrate: 1e3 * Math.round(e / 1e3) });
            }),
            ei(this, "handleUserLimitChange", (e) => {
              (0, m.pW)({ userLimit: Math.round(e) });
            }),
            ei(this, "handleNSFWChange", (e) => {
              (0, m.pW)({ nsfw: e });
            }),
            ei(this, "handleActiveChannelsRemovedChange", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let n = (0, H.mB)(t.flags, q.zZ.ACTIVE_CHANNELS_REMOVED, !e);
              (0, m.pW)({ flags: n });
            }),
            ei(this, "handleNewsChange", (e) => {
              (0, m.pW)({
                type: e ? Y.d4z.GUILD_ANNOUNCEMENT : Y.d4z.GUILD_TEXT,
              });
            }),
            ei(this, "handleChangeSlowmode", (e) => {
              (0, m.pW)({ rateLimitPerUser: e });
            }),
            ei(this, "handleChangeThreadMessageSlowmode", (e) => {
              (0, m.pW)({ defaultThreadRateLimitPerUser: e });
            }),
            ei(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
              (0, m.pW)({ defaultAutoArchiveDuration: e });
            }),
            ei(this, "handleRegionChange", (e) => {
              (0, m.pW)({ rtcRegion: e === ex ? null : e });
            }),
            ei(this, "handleVideoQualityModeChange", (e) => {
              (0, m.pW)({ videoQualityMode: e });
            }),
            ei(this, "handleAutoArchiveDurationChanged", (e) => {
              (0, m.pW)({ autoArchiveDuration: e });
            }),
            ei(this, "handleInvitableChanged", (e) => {
              (0, m.pW)({ invitable: e });
            }),
            ei(this, "handleChannelSummariesToggled", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let n = (0, H.mB)(t.flags, q.zZ.SUMMARIES_DISABLED, !e);
              (0, m.pW)({ flags: n });
            }),
            ei(this, "handleShowMediaOptionsToggled", (e) => {
              let { channel: t } = this.props;
              if (null == t) return null;
              let n = (0, H.mB)(t.flags, q.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
              (0, m.pW)({ flags: n });
            });
          let l =
            null !==
              (n =
                null === (t = this.props.channel) || void 0 === t
                  ? void 0
                  : t.topic) && void 0 !== n
              ? n
              : "";
          this.state = {
            textTopicValue: l,
            richTopicValue: (0, b.JM)(l),
            topicFocused: !1,
          };
        }
      }
      function eC() {
        let {
            errors: e,
            channel: t,
            submitting: n,
            subsection: s,
          } = (0, d.cj)([P.Z], () => P.Z.getProps()),
          r = (0, d.e7)([k.Z], () => {
            var e;
            return k.Z.getRegions(
              null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e
                ? e
                : null,
            );
          }),
          a = (0, d.e7)([M.Z], () => M.Z.theme),
          o = (0, d.e7)([O.Z], () =>
            O.Z.getGuild(null == t ? void 0 : t.getGuildId()),
          ),
          c = (0, _.C7)(t),
          u = (0, _.Xb)(t),
          { canManageChannels: h, canSendMessages: m } = (0, d.cj)(
            [F.Z],
            () => ({
              canManageChannels: F.Z.can(Y.Plq.MANAGE_CHANNELS, t),
              canSendMessages: F.Z.can(Y.Plq.SEND_MESSAGES, t),
            }),
          ),
          g = (0, j.ZP)(t),
          p = B.default.getId(),
          x = (0, y.v)(),
          C = null == t ? void 0 : t.id,
          b = (0, v.ts)(t, !1, !0),
          T = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
          }).enabled,
          N = l.useCallback(
            (e) => {
              null != C && x.getState().setLayoutType(C, e);
            },
            [C, x],
          );
        return (0, i.jsx)(ej, {
          errors: e,
          channel: t,
          channelName: g,
          submitting: n,
          regions: r,
          theme: a,
          guild: o,
          canManageChannels: (null == t ? void 0 : t.isThread()) ? c : h,
          canSendMessages: m,
          isThreadModerator: u,
          canManageThread: c,
          subsection: s,
          isForumPost: null != t && t.isForumPost(),
          isOwner: null == t ? void 0 : t.isOwner(p),
          handleSetDefaultLayout: N,
          showChannelSummariesSettings: b,
          showAdvancedSlowModeSetting: T,
        });
      }
    },
    856606: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Q;
        },
        n: function () {
          return G;
        },
      }),
        n(724458),
        n(653041),
        n(411104);
      var i = n(200651),
        l = n(192379),
        s = n(392711),
        r = n.n(s),
        a = n(149765),
        o = n(442837),
        d = n(780384),
        c = n(481060),
        u = n(668781),
        h = n(493683),
        m = n(741361),
        g = n(668390),
        p = n(144991),
        x = n(852860),
        f = n(911969),
        v = n(410030),
        j = n(607070),
        C = n(940639),
        b = n(325476),
        T = n(146085),
        N = n(598077),
        S = n(277053),
        Z = n(388610),
        E = n(271383),
        y = n(430824),
        I = n(496675),
        R = n(594174),
        w = n(823379),
        _ = n(892880),
        L = n(63063),
        A = n(5192),
        M = n(233608),
        D = n(700785),
        B = n(51144),
        P = n(257017),
        O = n(188857),
        F = n(981631),
        k = n(388032),
        V = n(962193);
      let G = o.ZP.connectStores([S.Z, Z.Z], () => {
        let e = Z.Z.getChannel();
        return {
          submitting: S.Z.formState === F.QZA.SUBMITTING,
          onReset() {
            (0, m.S1)();
          },
          onSave() {
            if (null == e) return;
            let t = S.Z.editedPermissionIds.reduce((e, t) => {
              let n = S.Z.getPermissionOverwrite(t);
              return null != n && e.push(n), e;
            }, []);
            (0, m.hw)(e.id, t);
          },
        };
      })(x.Z);
      function U(e) {
        let { overwrite: t } = e,
          n = (0, o.e7)([S.Z], () => S.Z.channel),
          l = (0, o.e7)([y.Z], () =>
            null != n ? y.Z.getGuild(n.getGuildId()) : null,
          ),
          s = (0, o.e7)([y.Z], () => (null != l ? y.Z.getRoles(l.id) : void 0));
        if (null == n || null == l || null == t) return null;
        let { guild_id: r, id: d } = n,
          { id: g } = t,
          x = () => {
            var e;
            if (null == y.Z.getGuild(r) || null == s) return "";
            let t = s[g],
              n = R.default.getUser(g),
              i =
                null !== (e = null == n ? void 0 : n.username) && void 0 !== e
                  ? e
                  : "";
            return null != t ? t.name : i;
          },
          v = (e, i) => {
            if ("boolean" == typeof i) throw Error("Unexpected boolean action");
            let { allow: l, deny: s } = t;
            switch (((s = a.Od(s, e)), (l = a.Od(l, e)), i)) {
              case "ALLOW":
                l = a.IH(l, e);
                break;
              case "DENY":
                s = a.IH(s, e);
            }
            if (I.Z.can(e, n, { [g]: { ...t, allow: l, deny: s } }))
              (0, m.kY)(n, g, l, s);
            else {
              let e;
              if (t.type === f.BN.MEMBER) {
                let n = R.default.getUser(t.id);
                null != n && (e = B.ZP.getName(n));
              } else if (t.type === f.BN.ROLE) {
                let i = y.Z.getGuild(n.getGuildId());
                if (null != i) {
                  let n = y.Z.getRole(i.id, t.id);
                  null != n && (e = n.name);
                }
              }
              P.X(e);
            }
          },
          j = () => {
            let e = x();
            u.Z.show({
              title: k.intl.string(k.t.GuPYQE),
              body: k.intl.format(k.t.xERCnZ, { name: e }),
              cancelText: k.intl.string(k.t["ETE/oK"]),
              onConfirm: () => h.Z.clearPermissionOverwrite(d, g),
            });
          },
          C = (e) => {
            let t =
              I.Z.can(F.Plq.ADMINISTRATOR, l) ||
              I.Z.can(F.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && T.xS.has(e)
              ? k.intl.string(k.t.bTS5lZ)
              : !(
                  (!a.fS(e, F.Plq.MANAGE_ROLES) || t) &&
                  (null == e || I.Z.can(e, l) || t)
                ) && k.intl.string(k.t.nOtPMD);
          },
          N = g === r,
          Z = n.isForumLikeChannel() && a.e$(t.deny, F.Plq.SEND_MESSAGES),
          E = a.e$(t.deny, F.Plq.SEND_MESSAGES),
          w = a.e$(t.deny, F.Plq.READ_MESSAGE_HISTORY),
          _ = M.Z.generateChannelPermissionSpec(r, n, N, {
            createPostsDisabled: Z,
            sendMessagesDisabled: E,
            readMessageHistoryDisabled: w,
          });
        return (0, i.jsxs)(b.ZP.Content, {
          className: V.layoutStyle,
          children: [
            _.map((e, n) =>
              (0, i.jsx)(
                p.Z,
                {
                  spec: e,
                  allow: t.allow,
                  deny: t.deny,
                  onChange: v,
                  permissionRender: C,
                  className: V.permissionsForm,
                },
                n,
              ),
            ),
            r === g
              ? null
              : (0, i.jsx)(c.Button, {
                  look: c.Button.Looks.OUTLINED,
                  color: c.Button.Colors.RED,
                  onClick: j,
                  children: k.intl.format(k.t.txPV7u, { name: x() }),
                }),
          ],
        });
      }
      function H(e) {
        let { guildId: t, channelId: n, user: l } = e,
          s = l.getAvatarURL(t, 32),
          r = A.ZP.getNickname(t, n, l),
          a = B.ZP.useUserTag(l),
          o = null,
          d = null;
        return (
          (o = null != r ? r : l.hasAvatarForGuild(t) ? l.username : a),
          (null != r || l.hasAvatarForGuild(t)) &&
            (d = (0, i.jsxs)("div", {
              className: V.userRowSubText,
              children: [
                l.hasAvatarForGuild(t)
                  ? (0, i.jsx)(c.Avatar, {
                      className: V.userRowSubAvatar,
                      size: c.AvatarSizes.SIZE_16,
                      src: l.getAvatarURL(void 0, 16),
                      "aria-label": l.username,
                    })
                  : null,
                (0, i.jsx)(c.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: a,
                }),
              ],
            })),
          (0, i.jsxs)("div", {
            className: V.inline,
            children: [
              (0, i.jsx)(c.Avatar, {
                size: c.AvatarSizes.SIZE_32,
                src: s,
                "aria-label": l.username,
                className: V.userRowAvatar,
              }),
              (0, i.jsxs)("div", {
                className: V.userRowText,
                children: [
                  (0, i.jsx)(c.Text, {
                    className: V.userRowText,
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
            channel: n,
            permissionOverwrites: l,
            onClose: s,
            onSelect: a,
            position: d,
          } = e,
          c = (0, o.e7)([y.Z], () => y.Z.getRoles(t.id)),
          u = (0, o.Wu)([E.ZP], () => E.ZP.getMemberIds(t.id));
        return (0, i.jsx)(C.Z, {
          label: k.intl.string(k.t.lT5Ztr),
          placeholder: k.intl.string(k.t.V2pZRk),
          "aria-label": k.intl.string(k.t["Uvt+p6"]),
          sections: [k.intl.string(k.t.LPJmLy), k.intl.string(k.t["9Oq93t"])],
          onRenderResult: (e) => {
            if (W(e)) {
              let t;
              return (
                null != e.colorString && (t = { color: e.colorString }),
                (0, i.jsx)("span", { style: t, children: e.name })
              );
            }
            if (e instanceof N.Z)
              return (0, i.jsx)(H, { guildId: t.id, channelId: n.id, user: e });
          },
          onFilterResults: (e, t) =>
            0 === t
              ? r()(c)
                  .filter((t) => null == l[t.id] && e(t.name))
                  .sortBy((e) => -e.position)
                  .value()
              : r()(u)
                  .map(R.default.getUser)
                  .filter(w.lm)
                  .filter((e) => !e.isClyde())
                  .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                  .sortBy((e) => e.username.toLowerCase())
                  .value(),
          onQueryChange: (e) => {
            _.Z.requestMembers(t.id, e, 20);
          },
          onSelect: (e) => {
            if (null != e)
              W(e)
                ? a(e.id, f.BN.ROLE)
                : e instanceof N.Z && a(e.id, f.BN.MEMBER);
          },
          onClose: s,
          position: d,
        });
      }
      function X() {
        let {
            channel: e,
            permissionOverwrites: t,
            selectedOverwriteId: s,
          } = (0, o.cj)([S.Z], () => S.Z),
          a = null == e ? void 0 : e.getGuildId(),
          { guild: u, guildRoles: p } = (0, o.cj)(
            [y.Z],
            () => {
              let e = null != a ? y.Z.getGuild(a) : void 0,
                t = null != e ? y.Z.getRoles(e.id) : void 0;
              return { guild: e, guildRoles: t };
            },
            [a],
          ),
          x = (0, O.Z)(a, t),
          C = (0, v.ZP)(),
          T = (0, o.e7)([j.Z], () => j.Z.roleStyle);
        if (null == u || null == p || null == e || null == t) return null;
        let N = (n) => {
            let { position: l, closePopout: s } = n;
            return (0, i.jsx)(z, {
              guild: u,
              channel: e,
              permissionOverwrites: t,
              position: null != l ? l : "bottom",
              onSelect: Z,
              onClose: s,
            });
          },
          Z = (t, n) => {
            h.Z.updatePermissionOverwrite(e.id, {
              id: t,
              type: n,
              allow: D.Hn,
              deny: D.Hn,
            }).then(() => (0, m.Aj)(t));
          };
        null != t && null == t[u.id] && (t[u.id] = D.we(u.id));
        let E = r()(t)
            .filter((e) => e.type === f.BN.ROLE)
            .map((e) => p[e.id])
            .filter(w.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
              (0, i.jsx)(
                g.Z,
                {
                  theme: C,
                  roleStyle: T,
                  id: e.id,
                  role: e,
                  guild: u,
                  color: e.colorString,
                  "aria-label": e.name,
                  children: e.name,
                },
                "".concat(s, "-").concat(e.id),
              ),
            )
            .value(),
          I = r()(x)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
              let t = e.getAvatarURL(u.id, 24);
              return (0, i.jsx)(
                g.Z,
                {
                  id: e.id,
                  guild: u,
                  theme: C,
                  roleStyle: T,
                  "aria-label": B.ZP.getUserTag(e, { decoration: "never" }),
                  children: (0, i.jsxs)("div", {
                    className: V.inline,
                    children: [
                      (0, i.jsx)(c.Avatar, {
                        size: c.AvatarSizes.SIZE_20,
                        src: t,
                        "aria-label": e.username,
                        className: V.xsmallAvatar,
                      }),
                      (0, i.jsx)("span", {
                        className: V.username,
                        children: B.ZP.getUserTag(e),
                      }),
                    ],
                  }),
                },
                "".concat(s, "-").concat(e.id),
              );
            })
            .value();
        return (0, i.jsx)(b.ZP.Sidebar, {
          className: V.layoutStyle,
          scrollable: !0,
          children: (0, i.jsxs)(c.TabBar, {
            onItemSelect: m.Aj,
            selectedItem: s,
            orientation: "vertical",
            children: [
              (() => {
                let e = (0, d.wj)(C) ? n(521715) : n(299603);
                return (0, i.jsx)(c.Popout, {
                  renderPopout: N,
                  position: "bottom",
                  autoInvert: !1,
                  children: (t) =>
                    (0, i.jsx)(c.TabBar.Header, {
                      ...t,
                      children: (0, i.jsxs)("div", {
                        className: V.sidebarHeaderDefault,
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              k.intl.string(k.t.LPJmLy),
                              "/",
                              k.intl.string(k.t["9Oq93t"]),
                            ],
                          }),
                          (0, i.jsx)("img", {
                            alt: "",
                            className: V.sidebarHeader,
                            src: e,
                          }),
                        ],
                      }),
                    }),
                });
              })(),
              E,
              I,
              (0, i.jsxs)(l.Fragment, {
                children: [
                  (0, i.jsx)(c.TabBar.Separator, {
                    style: { marginTop: 20, marginBottom: 14 },
                  }),
                  (0, i.jsx)(c.FormText, {
                    type: c.FormTextTypes.DESCRIPTION,
                    children: (0, i.jsx)(c.Anchor, {
                      href: L.Z.getArticleURL(F.BhN.PERMISSIONS_TUTORIAL),
                      target: "_blank",
                      children: k.intl.string(k.t["pfoA8/"]),
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
          selectedOverwriteId: n,
        } = (0, o.cj)([S.Z], () => S.Z);
        if (
          null ==
            (0, o.e7)([y.Z], () =>
              null != e ? y.Z.getGuild(e.getGuildId()) : null,
            ) ||
          null == e ||
          null == t ||
          null == n
        )
          return null;
        let l = t[n];
        return (0, i.jsxs)(b.ZP, {
          className: V.container,
          children: [(0, i.jsx)(X, {}), (0, i.jsx)(U, { overwrite: l })],
        });
      }
    },
    296146: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(331595);
      function s(e) {
        let {
          color: t = "currentColor",
          foreground: n,
          backgroundColor: s = "none",
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.Z)(r),
          width: "272",
          height: "143",
          viewBox: "0 0 272 143",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("rect", {
              className: n,
              width: "130",
              height: "143",
              rx: "12",
              fill: s,
            }),
            (0, i.jsx)("path", {
              className: n,
              opacity: "0.5",
              d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
              fill: t,
            }),
            (0, i.jsx)("path", {
              className: n,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
              fill: "#C4C4C4",
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "99",
              width: "106",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "123",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("circle", {
              className: n,
              opacity: "0.5",
              cx: "54",
              cy: "127",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "64",
              y: "123",
              width: "54",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              x: "0.5",
              y: "0.5",
              width: "129",
              height: "142",
              rx: "11.5",
              stroke: t,
              strokeOpacity: "0.3",
            }),
            (0, i.jsx)("rect", {
              className: n,
              x: "142",
              width: "130",
              height: "143",
              rx: "12",
              fill: s,
            }),
            (0, i.jsx)("path", {
              className: n,
              opacity: "0.5",
              d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
              fill: t,
            }),
            (0, i.jsx)("path", {
              className: n,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
              fill: "#C4C4C4",
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "154",
              y: "99",
              width: "106",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "154",
              y: "123",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("circle", {
              className: n,
              opacity: "0.5",
              cx: "196",
              cy: "127",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "206",
              y: "123",
              width: "54",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
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
    564735: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(331595);
      function s(e) {
        let {
          color: t = "currentColor",
          foreground: n,
          backgroundColor: s = "none",
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.Z)(r),
          width: "272",
          height: "143",
          viewBox: "0 0 272 143",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("rect", {
              className: n,
              y: "15.5",
              width: "272",
              height: "112",
              rx: "12",
              fill: s,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "27.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "43.5",
              width: "96",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "67.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "83.5",
              width: "168",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "196",
              y: "27.5",
              width: "64",
              height: "64",
              rx: "8",
              fill: t,
            }),
            (0, i.jsx)("path", {
              className: n,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
              fill: "#C4C4C4",
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "12",
              y: "107.5",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("circle", {
              className: n,
              opacity: "0.5",
              cx: "54",
              cy: "111.5",
              r: "2",
              fill: t,
              fillOpacity: "0.48",
            }),
            (0, i.jsx)("rect", {
              className: n,
              opacity: "0.5",
              x: "64",
              y: "107.5",
              width: "32",
              height: "8",
              rx: "4",
              fill: t,
            }),
            (0, i.jsx)("rect", {
              className: n,
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
    162389: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var i = n(200651),
        l = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(442837),
        o = n(692547),
        d = n(481060),
        c = n(787014),
        u = n(603211),
        h = n(710344),
        m = n(496675),
        g = n(479099),
        p = n(710352),
        x = n(981631),
        f = n(388032),
        v = n(359930);
      function j(e) {
        let { channel: t } = e,
          s = (0, a.e7)([m.Z], () => m.Z.can(x.Plq.MANAGE_CHANNELS, t), [t]),
          u = t.availableTags.length >= p.pC,
          g = t.availableTags.length > 0,
          j = l.useCallback(() => {
            let e = t.availableTags.length >= p.pC;
            s &&
              !e &&
              (0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("21971").then(n.bind(n, 915774));
                return (n) =>
                  (0, i.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
              });
          }, [t, s]),
          b = l.useCallback(
            (e) => {
              s &&
                (0, d.openModalLazy)(async () => {
                  let { default: l } = await n
                    .e("21971")
                    .then(n.bind(n, 915774));
                  return (n) =>
                    (0, i.jsx)(l, {
                      ...n,
                      channelId: t.id,
                      guildId: t.guild_id,
                      tag: e,
                    });
                });
            },
            [s, t],
          ),
          {
            handleDragStart: T,
            handleDragReset: N,
            handleDragComplete: S,
          } = (0, h.Z)(t.availableTags, (e) => {
            (0, c.pW)({ availableTags: e });
          });
        return (0, i.jsxs)("div", {
          className: v.tags,
          children: [
            g
              ? t.availableTags.map((e) =>
                  (0, i.jsx)(
                    C,
                    {
                      tag: e,
                      availableTags: t.availableTags,
                      canManageChannels: s,
                      onTagClick: b,
                      onDragComplete: S,
                      onDragReset: N,
                      onDragStart: T,
                    },
                    e.id,
                  ),
                )
              : null,
            g
              ? (0, i.jsx)(d.Clickable, {
                  onClick: j,
                  className: r()(v.addTags, { [v.disabled]: !s || u }),
                  children: (0, i.jsx)(d.PlusSmallIcon, {
                    size: "custom",
                    "aria-label": f.intl.string(f.t["/jubeH"]),
                    color: o.Z.unsafe_rawColors.WHITE_500.css,
                    width: 20,
                    height: 20,
                  }),
                })
              : (0, i.jsx)(d.Button, {
                  disabled: !s,
                  onClick: j,
                  children: f.intl.string(f.t["/jubeH"]),
                }),
          ],
        });
      }
      function C(e) {
        let {
            tag: t,
            availableTags: n,
            canManageChannels: l,
            onTagClick: s,
            onDragComplete: a,
            onDragStart: o,
            onDragReset: d,
          } = e,
          c = n.findIndex((e) => e.id === t.id),
          {
            drag: h,
            dragSourcePosition: m,
            drop: p,
            setIsDraggable: x,
          } = (0, u.Z)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: o,
            onDragComplete: a,
            onDragReset: d,
          });
        return (0, i.jsx)("div", {
          className: r()(v.container, {
            [v.dropIndicatorBefore]: null != m && c < m,
            [v.dropIndicatorAfter]: null != m && c > m,
          }),
          ref: (e) => h(p(e)),
          onMouseEnter: () => x(l),
          onMouseLeave: () => x(!1),
          children: (0, i.jsx)(g.Z, {
            tag: t,
            disabled: !l,
            ariaLabel: f.intl.formatToPlainString(f.t.jhSvBw, { name: t.name }),
            onClick: l ? () => s(t) : void 0,
          }),
        });
      }
    },
    946458: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        s = n(481060),
        r = n(596454),
        a = n(339085),
        o = n(59200);
      function d(e) {
        let { reactionEmoji: t } = e,
          n = (0, l.e7)([a.ZP], () =>
            (null == t ? void 0 : t.emojiId) != null
              ? a.ZP.getUsableCustomEmojiById(t.emojiId)
              : null,
          );
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            (0, i.jsxs)("div", {
              className: o.body,
              children: [
                (0, i.jsxs)("div", {
                  className: o.placeholderLines,
                  children: [
                    (0, i.jsx)(c, { width: "100%", marginBottom: 8 }),
                    (0, i.jsx)(c, { width: "80%", marginBottom: 16 }),
                    (0, i.jsx)(c, { width: "50%", marginBottom: 8 }),
                    (0, i.jsx)(c, { width: "60%", marginBottom: 16 }),
                  ],
                }),
                (0, i.jsx)("div", { className: o.placeholderMedia }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: o.footer,
              children: [
                (0, i.jsxs)("div", {
                  className: o.reaction,
                  children: [
                    null != t
                      ? (0, i.jsx)(r.Z, {
                          className: o.reactionEmote,
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          animated: !!(null == n ? void 0 : n.animated),
                        })
                      : (0, i.jsx)(s.ReactionIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: o.reactionEmote,
                        }),
                    (0, i.jsx)(s.Text, {
                      variant: "text-sm/semibold",
                      color: "interactive-normal",
                      children: 17,
                    }),
                  ],
                }),
                (0, i.jsx)(c, { width: "24px", marginBottom: 0 }),
                (0, i.jsx)("div", { className: o.dot }),
                (0, i.jsx)(c, { width: "24px", marginBottom: 0 }),
              ],
            }),
          ],
        });
      }
      function c(e) {
        let { width: t, marginBottom: n } = e;
        return (0, i.jsx)("div", {
          className: o.placeholderLine,
          style: { width: t, marginBottom: n },
        });
      }
    },
    693196: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var i = n(526120),
        l = n(563534),
        s = n(734893),
        r = n(931261);
      async function a(e, t) {
        if (null == e || !(0, r.s)(e)) return;
        let n = l.Z.getSettings(e);
        return (n === l.P && (await (0, i.cP)(e), (n = l.Z.getSettings(e))),
        n === l.P || null == n)
          ? void 0
          : null != n.newMemberActions &&
              null != n.newMemberActions.find((e) => e.channelId === t)
            ? s.j.TODO
            : null != n.resourceChannels &&
                null != n.resourceChannels.find((e) => e.channelId === t)
              ? s.j.RESOURCE
              : void 0;
      }
    },
    75464: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        l = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(153066),
        d = n(740282);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
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
      class m extends (i = s.PureComponent) {
        render() {
          let { size: e, src: t, srcHover: n, className: i, ...s } = this.props,
            { hovered: r } = this.state,
            c = this.getMode();
          return (0, l.jsx)("button", {
            className: a()((0, o.l)(d, "iconButton", c), i, e),
            style: {
              backgroundImage: "url('".concat(r && null != n ? n : t, "')"),
            },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s,
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
    747212: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        s = n.n(l),
        r = n(481060),
        a = n(968437),
        o = n(388032),
        d = n(75001);
      t.Z = (e) => {
        let { autoArchiveDuration: t, onChange: n, isDisabled: l } = e,
          c = (0, a.nt)(),
          u = (e, t) =>
            (0, i.jsx)("span", {
              className: s()(d.optionLabel, { [d.dropdownOption]: t }),
              children: e.label,
            });
        return (0, i.jsx)(r.FormSection, {
          title: o.intl.string(o.t.FGjMZW),
          className: d.formSection,
          children: (0, i.jsx)(r.SingleSelect, {
            isDisabled: l,
            options: c,
            value: t,
            maxVisibleItems: c.length,
            onChange: n,
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
    903386: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      function l(e) {
        let {
          width: t = 18,
          height: n = 18,
          color: l = "currentColor",
          foreground: s,
          background: r,
          className: a,
        } = e;
        return (0, i.jsx)("svg", {
          width: t,
          height: n,
          className: a,
          viewBox: "0 0 18 18",
          children: (0, i.jsxs)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, i.jsx)("polygon", { points: "0 0 18 0 18 18 0 18" }),
              (0, i.jsx)("path", {
                d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
                fillOpacity: "0.3",
                fill: l,
                fillRule: "nonzero",
                className: r,
              }),
              (0, i.jsx)("path", {
                d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                fill: l,
                className: s,
              }),
            ],
          }),
        });
      }
      n(192379);
    },
    129724: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var i = n(913527),
        l = n.n(i),
        s = n(388032);
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : s.intl.string(s.t["Yl1D8/"]),
          i = l().duration(e, "seconds");
        if (i.days() > 0)
          return s.intl.formatToPlainString(t ? s.t.GBLpQ0 : s.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return s.intl.formatToPlainString(t ? s.t.rhY1Rk : s.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return s.intl.formatToPlainString(t ? s.t["XIGt+f"] : s.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return s.intl.formatToPlainString(t ? s.t.pyvjRk : s.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return t ? s.intl.string(s.t["Yl1D8/"]) : n;
      }
    },
    413174: function (e, t, n) {
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
    922112: function (e, t, n) {
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
    589794: function (e, t, n) {
      "use strict";
      e.exports = {
        advancedModeDivider: "advancedModeDivider_cd9517",
        advancedTitle: "advancedTitle_cd9517",
        titleCaret: "titleCaret_cd9517",
      };
    },
    599234: function (e, t, n) {
      "use strict";
      e.exports = {
        settingCard: "settingCard_dd864e",
        active: "active_dd864e",
        shield: "shield_dd864e " + n("619347").desaturateUserColors,
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
    715209: function (e, t, n) {
      "use strict";
      e.exports = {
        cardContent: "cardContent_eaaaea",
        cardDescription: "cardDescription_eaaaea",
      };
    },
    307416: function (e, t, n) {
      "use strict";
      e.exports = { card: "card_ac370c", label: "label_ac370c" };
    },
    359238: function (e, t, n) {
      "use strict";
      e.exports = {
        category: "category_c394c4",
        channelIcon: "channelIcon_c394c4",
      };
    },
    35446: function (e, t, n) {
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
    962193: function (e, t, n) {
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
    359930: function (e, t, n) {
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
    59200: function (e, t, n) {
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
    740282: function (e, t, n) {
      "use strict";
      n.r(
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
    75001: function (e, t, n) {
      "use strict";
      e.exports = {
        formSection: "formSection_b9db9f",
        dropdownOption: "dropdownOption_b9db9f",
        optionLabel: "optionLabel_b9db9f",
      };
    },
  },
]);
//# sourceMappingURL=0558ae25f072ca425206.js.map
