"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7590"],
  {
    185413: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AddMembersBody: function () {
            return w;
          },
          MemberRoleSelector: function () {
            return C;
          },
          default: function () {
            return M;
          },
        }),
        n(47120),
        n(653041);
      var l = n(200651),
        i = n(192379),
        r = n(442837),
        s = n(481060),
        a = n(741361),
        o = n(461745),
        c = n(600164),
        d = n(313201),
        u = n(131704),
        m = n(592125),
        h = n(271383),
        x = n(430824),
        g = n(626135),
        b = n(934415),
        T = n(892880),
        E = n(226951),
        f = n(605436),
        S = n(971628),
        y = n(71080),
        j = n(981631),
        p = n(388032),
        R = n(194419);
      let v = (0, d.hQ)();
      function L(e, t) {
        return t ? e.slice(1) : e;
      }
      function w(e) {
        let t,
          {
            guild: n,
            channel: s,
            permission: a,
            pendingAdditions: c,
            setPendingAdditions: d,
            isStageChannel: u = null != s && s.isGuildStageVoice(),
            description: m,
          } = e,
          [g, b] = i.useState(!1),
          [j, R] = i.useState(""),
          v = (0, r.e7)([x.Z], () => x.Z.getRoles(n.id));
        function w(e) {
          let t = L(j.trim(), g);
          return RegExp("".concat(E.Z.escape(t)), "i").test(e);
        }
        let M = (0, r.Wu)([h.ZP], () => h.ZP.getMemberIds(n.id));
        g
          ? (t = [])
          : u
            ? (t = f.Wx(n, v, s, a, w))
            : 0 === (t = f.ik(n, v, s, a, w)).length &&
              "" === j.trim() &&
              !f.RD(n, v) &&
              (t = f.aq());
        let A = f.iI(M, s, n, a, w),
          {
            placeholderText: N,
            hintText: k,
            renderEmptyText: Z,
          } = (function () {
            return {
              placeholderText: p.intl.string(p.t.iezLLi),
              hintText: p.intl.string(p.t["rwFx8/"]),
              renderEmptyText: (e) => p.intl.format(p.t.ErpIY2, { query: e }),
            };
          })();
        return (0, l.jsx)(C, {
          pendingAdditions: c,
          query: j,
          onQueryChange: function (e) {
            let t = e.trim(),
              l = "@" === t.charAt(0);
            T.Z.requestMembers(n.id, L(t, l), y.EQ), R(e), b(l);
          },
          onClickRow: function (e) {
            let t = (0, S.G)(e);
            d((n) => {
              let l = { ...n };
              if (t in l) delete l[t];
              else {
                let n;
                e.rowType === y.aC.ROLE || e.rowType === y.aC.ADMINISTRATOR
                  ? (n = {
                      type: o.Fj.ROLE,
                      label: e.name,
                      color: e.colorString,
                    })
                  : (e.rowType === y.aC.MEMBER || e.rowType === y.aC.OWNER) &&
                    (n = {
                      type: o.Fj.MEMBER,
                      label: e.name,
                      avatar: e.avatarURL,
                    }),
                  null != n && (l[t] = { display: n, row: e });
              }
              return l;
            });
          },
          onRemovePendingAddition: function (e) {
            d((t) => {
              let { [e]: n, ...l } = t;
              return l;
            });
          },
          roles: t,
          members: A,
          placeholderText: N,
          hintText: k,
          renderEmptyText: Z,
          isStageChannel: u,
          description: m,
        });
      }
      function C(e) {
        let t,
          {
            listClassName: n,
            pendingAdditions: i,
            query: r,
            onQueryChange: a,
            onClickRow: o,
            onRemovePendingAddition: c,
            roles: d,
            members: u,
            placeholderText: m,
            hintText: h,
            renderEmptyText: x,
            isStageChannel: g,
            focusSearchAfterReady: b,
            isReady: T,
            description: E,
          } = e;
        return (0, l.jsxs)("div", {
          className: R.content,
          children: [
            (null == (t = E) && g && (t = p.intl.string(p.t.f7VbhI)),
            null == t || "" === t)
              ? null
              : (0, l.jsx)(s.Text, {
                  color: "header-secondary",
                  className: R.description,
                  variant: "text-sm/normal",
                  children: t,
                }),
            (0, l.jsx)(S.Z, {
              listClassName: n,
              pendingAdditions: i,
              query: r,
              onQueryChange: a,
              onClickRow: o,
              onRemovePendingAddition: c,
              roles: d,
              members: u,
              placeholderText: m,
              hintText: h,
              renderEmptyText: x,
              disabledText: g ? p.intl.string(p.t.MVVOCg) : null,
              focusSearchAfterReady: b,
              isReady: T,
            }),
          ],
        });
      }
      function M(e) {
        let {
            transitionState: t,
            onClose: n,
            channelId: o,
            newChannel: d,
            inSettings: h,
          } = e,
          [T, E] = i.useState(!1),
          [f, S] = i.useState({}),
          L = (0, r.e7)([m.Z], () => m.Z.getChannel(o), [o]),
          C = (0, r.e7)([x.Z], () =>
            x.Z.getGuild(null == L ? void 0 : L.getGuildId()),
          );
        if (
          (i.useEffect(() => {
            g.default.track(j.rMx.OPEN_MODAL, { type: "Grant Channel Access" });
          }, []),
          null == L || null == C)
        )
          return null;
        let M = d && 0 === Object.keys(f).length;
        async function A() {
          if (null == L || 0 === Object.keys(f).length) {
            n();
            return;
          }
          E(!0);
          try {
            await (function (e, t, n) {
              let l = [];
              return (
                Object.values(t).forEach((t) => {
                  let { row: n } = t;
                  null != n.id &&
                    "" !== n.id &&
                    (n.rowType === y.aC.ROLE
                      ? l.push((0, b.rX)(n.id, e.type))
                      : n.rowType === y.aC.MEMBER &&
                        l.push((0, b.jZ)(n.id, e.type)));
                }),
                (0, a.hw)(e.id, l, n)
              );
            })(L, f, h),
              n(),
              E(!1);
          } catch (e) {
            E(!1);
          }
        }
        let N = (0, u.zi)(L.type) ? s.TextLockIcon : s.VoiceLockIcon;
        return (0, l.jsxs)(s.ModalRoot, {
          transitionState: t,
          size: s.ModalSize.SMALL,
          "aria-labelledby": v,
          className: R.modalRoot,
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              separator: !1,
              direction: c.Z.Direction.VERTICAL,
              align: c.Z.Align.CENTER,
              className: R.header,
              children: [
                (0, l.jsx)(s.Heading, {
                  id: v,
                  variant: "heading-xl/semibold",
                  children: p.intl.string(p.t.dMJ3Y2),
                }),
                (0, l.jsxs)(s.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: R.headerSubtitle,
                  children: [
                    (0, l.jsx)(N, {
                      size: "xs",
                      color: "currentColor",
                      className: R.headerSubtitleIcon,
                    }),
                    L.name,
                  ],
                }),
              ],
            }),
            (0, l.jsx)(w, {
              guild: C,
              channel: L,
              permission: L.accessPermissions,
              pendingAdditions: f,
              setPendingAdditions: S,
            }),
            (0, l.jsxs)(s.ModalFooter, {
              children: [
                !M &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(s.Button, {
                        onClick: A,
                        look: s.Button.Looks.FILLED,
                        size: s.Button.Sizes.SMALL,
                        className: R.button,
                        submitting: T,
                        children: p.intl.string(p.t.i4jeWV),
                      }),
                      (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.TRANSPARENT,
                        onClick: n,
                        size: s.Button.Sizes.SMALL,
                        children: p.intl.string(p.t["ETE/oK"]),
                      }),
                    ],
                  }),
                M &&
                  (0, l.jsx)(s.Button, {
                    look: s.Button.Looks.FILLED,
                    color: s.Button.Colors.PRIMARY,
                    onClick: n,
                    size: s.Button.Sizes.SMALL,
                    children: p.intl.string(p.t.u46sxc),
                  }),
              ],
            }),
          ],
        });
      }
    },
    971628: function (e, t, n) {
      n.d(t, {
        G: function () {
          return y;
        },
        Z: function () {
          return R;
        },
      }),
        n(47120),
        n(724458);
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(91192),
        o = n(481060),
        c = n(385499),
        d = n(600164),
        u = n(313201),
        m = n(565138),
        h = n(631969),
        x = n(605436),
        g = n(537383),
        b = n(71080),
        T = n(388032),
        E = n(194419);
      let f = (0, u.hQ)(),
        S = (0, u.hQ)();
      function y(e) {
        return "".concat(e.rowType, ":").concat(e.id);
      }
      function j(e) {
        return (0, l.jsx)(
          o.FormTitle,
          {
            tag: "h5",
            className: s()(E.sectionTitle, E.rowHeight),
            children: e,
          },
          e,
        );
      }
      function p(e) {
        let {
            id: t,
            children: n,
            rowLabel: i,
            checked: r,
            onSelect: c,
            disabled: u,
            showCheckbox: m,
            selected: h,
            onMouseEnter: x,
            "aria-posinset": g,
            "aria-setsize": b,
          } = e,
          T = (0, a.JA)(t);
        return (0, l.jsx)(o.Clickable, {
          ...T,
          id: t,
          className: s()(E.addMemberRow, { [E.selectedRow]: h }),
          onClick: (e) => {
            !u && (e.preventDefault(), c());
          },
          onMouseEnter: x,
          role: "option",
          "aria-disabled": u,
          "aria-selected": r,
          "aria-setsize": b,
          "aria-posinset": g,
          children: (0, l.jsxs)(d.Z, {
            justify: d.Z.Justify.BETWEEN,
            align: d.Z.Align.CENTER,
            children: [
              m
                ? (0, l.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 18,
                    value: r,
                    type: o.Checkbox.Types.INVERTED,
                    disabled: u,
                    children: (0, l.jsx)("div", {
                      className: E.checkboxLabel,
                      children: n,
                    }),
                  })
                : n,
              null != i
                ? (0, l.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: i,
                  })
                : null,
            ],
          }),
        });
      }
      function R(e) {
        let {
            listClassName: t,
            pendingAdditions: n,
            query: r,
            onQueryChange: a,
            onClickRow: u,
            onRemovePendingAddition: R,
            roles: v = [],
            members: L = [],
            users: w = [],
            guilds: C = [],
            placeholderText: M,
            disabledText: A,
            hintText: N,
            searchTitleText: k,
            renderEmptyText: Z,
            focusSearchAfterReady: B,
            isReady: I,
            maxCount: z,
            hideRowLabel: O = !1,
          } = e,
          P = i.useRef(null),
          D = i.useRef(null),
          $ = [v.length, L.length, w.length, C.length],
          [F, U] = i.useState(!1),
          [_, G] = i.useState(0),
          [Q, V] = i.useState(-1);
        i.useEffect(() => {
          var e;
          null === (e = P.current) || void 0 === e || e.focus();
        }, []);
        let q = i.useCallback(function (e, t) {
            let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if ((G(e), V(t), n)) {
              var l;
              null === (l = D.current) ||
                void 0 === l ||
                l.scrollToIndex({
                  section: null != e ? e : 0,
                  row: null != t ? t : 0,
                  padding: 8,
                });
            }
          }, []),
          H = i.useCallback(
            (e, t) => {
              if (null == t) return;
              a("");
              let n = (e === b.m$.ROLES ? v : [])[t];
              n.rowType !== b.aC.EMPTY_STATE && u(n);
            },
            [v, u, a],
          ),
          Y = i.useCallback(
            (e) => {
              var t;
              if (null != e && e.rowType !== b.aC.EMPTY_STATE)
                u(e),
                  a(""),
                  null === (t = P.current) || void 0 === t || t.focus();
            },
            [u, a],
          ),
          J = i.useMemo(() => Object.keys(n), [n]),
          W =
            i.useMemo(
              () =>
                L.some((e) => !e.disabled) ||
                v.some((e) => !e.disabled) ||
                w.some((e) => !e.disabled) ||
                C.some((e) => !e.disabled),
              [L, v, w, C],
            ) || "" === r.trim();
        function K() {
          var e;
          U(
            !(null === (e = D.current) || void 0 === e
              ? void 0
              : e.isScrolledToTop()) && W,
          );
        }
        return (
          i.useEffect(() => {
            K();
          }),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: s()(E.searchBox, { [E.scrollSeparator]: F }),
                children: [
                  null != k &&
                    (0, l.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H5,
                      children: k,
                    }),
                  (0, l.jsx)(g.Z, {
                    ref: P,
                    query: r,
                    onQueryChange: a,
                    selectedSection: _,
                    selectedRow: Q,
                    onSelectionChange: q,
                    onSelect: H,
                    tags: J.map((e) => n[e].display),
                    sections: $,
                    onRemoveTag: function (e) {
                      R(J[e]);
                    },
                    placeholder: M,
                    focusAfterReady: B,
                    isReady: I,
                    "aria-labelledby": f,
                    "aria-controls": S,
                  }),
                  null != N
                    ? (0, l.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        children: N,
                      })
                    : null,
                ],
              }),
              W
                ? (0, l.jsx)(o.List, {
                    ref: D,
                    className: s()(E.roleMemberList, t),
                    sections: $,
                    renderRow: (e) => {
                      let t,
                        i,
                        { section: r, row: a } = e,
                        d = null,
                        u = !1,
                        h = !1,
                        g = !1,
                        T = null != z && Object.keys(n).length >= z;
                      switch (r) {
                        case b.m$.ROLES:
                          (u = (i = y((d = v[a]))) in n || d.disabled),
                            (h = d.disabled || T),
                            (g = _ === b.m$.ROLES && Q === a),
                            (t = (0, l.jsxs)("div", {
                              className: E.rowBody,
                              children: [
                                (0, l.jsx)("div", {
                                  className: s()(E.rowHeight, E.alignCenter),
                                  children: (0, l.jsx)(o.ShieldUserIcon, {
                                    size: "custom",
                                    color: d.colorString,
                                    height: 20,
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: E.rowLabel,
                                  children: [
                                    (0, l.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      className: E.__invalid_rowTitle,
                                      color:
                                        d.rowType === b.aC.EMPTY_STATE
                                          ? "text-muted"
                                          : "text-normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != A
                                      ? (0, l.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: A,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case b.m$.MEMBERS:
                          (u = (i = y((d = L[a]))) in n || d.disabled),
                            (h = d.disabled || T),
                            (g = _ === b.m$.MEMBERS && Q === a),
                            (t = (0, l.jsxs)("div", {
                              className: E.rowBody,
                              children: [
                                (0, l.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, l.jsx)(o.Text, {
                                  className: E.rowLabel,
                                  variant: "text-sm/normal",
                                  children: d.name,
                                }),
                                null != d.nickname
                                  ? (0, l.jsx)(o.Text, {
                                      color: "text-muted",
                                      className: E.rowLabelSubText,
                                      variant: "text-sm/normal",
                                      "aria-hidden": !0,
                                      children: d.username,
                                    })
                                  : null,
                                d.bot &&
                                  (0, l.jsx)(c.Z, { verified: d.verifiedBot }),
                              ],
                            }));
                          break;
                        case b.m$.USERS:
                          (u = (i = y((d = w[a]))) in n || d.disabled),
                            (h = d.disabled || T),
                            (g = _ === b.m$.USERS && Q === a),
                            (t = (0, l.jsxs)("div", {
                              className: E.rowBody,
                              children: [
                                (0, l.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, l.jsxs)("div", {
                                  className: E.rowLabel,
                                  children: [
                                    (0, l.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != A
                                      ? (0, l.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: A,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case b.m$.GUILDS:
                          (u = (i = y((d = C[a]))) in n || d.disabled),
                            (h = d.disabled || T),
                            (g = _ === b.m$.GUILDS && Q === a),
                            (t = (0, l.jsxs)("div", {
                              className: E.rowBody,
                              children: [
                                (0, l.jsx)(m.Z, {
                                  guild: d.guild,
                                  active: !0,
                                  size: m.Z.Sizes.SMALLER,
                                }),
                                (0, l.jsx)("div", {
                                  className: E.rowLabel,
                                  children: (0, l.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: d.name,
                                  }),
                                }),
                              ],
                            }));
                      }
                      return null == d
                        ? null
                        : (0, l.jsx)(
                            p,
                            {
                              id: "user-row-".concat(a),
                              rowLabel: O ? null : x.zB(d.rowType),
                              checked: u,
                              disabled: h,
                              onSelect: () => Y(d),
                              showCheckbox: d.rowType !== b.aC.EMPTY_STATE,
                              onMouseEnter: () => q(r, a, !1),
                              selected: g,
                              "aria-posinset": a + 1,
                              "aria-setsize": $.reduce((e, t) => e + t, 0),
                              children: t,
                            },
                            i,
                          );
                    },
                    rowHeight: 40,
                    renderSection: (e) => {
                      let { section: t } = e;
                      switch (t) {
                        case b.m$.ROLES:
                          return j(T.intl.string(T.t.LPJmLy));
                        case b.m$.MEMBERS:
                          return j(T.intl.string(T.t["9Oq93t"]));
                        case b.m$.USERS:
                          return j(T.intl.string(T.t.nqDUBQ));
                        case b.m$.GUILDS:
                          return j(T.intl.string(T.t["7hB4kp"]));
                      }
                    },
                    sectionHeight: 32,
                    onScroll: K,
                    role: void 0,
                    innerRole: "listbox",
                    innerId: S,
                    innerAriaMultiselectable: !0,
                    innerAriaOrientation: "vertical",
                  })
                : (0, l.jsxs)(d.Z, {
                    className: t,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    direction: d.Z.Direction.VERTICAL,
                    children: [
                      (0, l.jsx)(h.Z, { className: E.noResultIcon }),
                      (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: Z(r),
                      }),
                    ],
                  }),
            ],
          })
        );
      }
    },
    537383: function (e, t, n) {
      var l = n(200651),
        i = n(192379),
        r = n(461745),
        s = n(631155);
      let a = i.forwardRef(function (e, t) {
        let {
          query: n,
          onQueryChange: i,
          onRemoveTag: a,
          onSelect: o,
          onSelectionChange: c,
          selectedSection: d,
          selectedRow: u,
          tags: m,
          sections: h,
          placeholder: x = "",
          focusAfterReady: g,
          isReady: b,
          "aria-labelledby": T,
          "aria-controls": E,
        } = e;
        return (0, l.jsx)(r.ZP, {
          autoFocus: !0,
          className: s.searchBar,
          maxHeight: 100,
          onQueryChange: i,
          onRemoveTag: a,
          selectedSection: d,
          selectedRow: u,
          onSelect: o,
          onSelectionChange: c,
          placeholder: 0 === m.length ? x : "",
          query: n,
          ref: t,
          size: r.ZP.Sizes.MEDIUM,
          tags: m,
          sections: h,
          focusAfterReady: g,
          isReady: b,
          inputProps: {
            "aria-labelledby": T,
            "aria-controls": E,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(u),
          },
        });
      });
      t.Z = a;
    },
  },
]);
//# sourceMappingURL=a7b297d61bb5fc5fe569.js.map
