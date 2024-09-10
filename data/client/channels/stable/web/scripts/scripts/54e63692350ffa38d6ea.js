"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7590"],
  {
    185413: function (e, t, n) {
      n.r(t),
        n.d(t, {
          AddMembersBody: function () {
            return p;
          },
          MemberRoleSelector: function () {
            return N;
          },
          default: function () {
            return v;
          },
        }),
        n(47120),
        n(653041);
      var s = n(735250),
        l = n(470079),
        a = n(442837),
        r = n(481060),
        i = n(741361),
        o = n(461745),
        c = n(600164),
        d = n(313201),
        u = n(131704),
        m = n(592125),
        h = n(271383),
        x = n(430824),
        E = n(626135),
        S = n(934415),
        R = n(892880),
        T = n(226951),
        M = n(605436),
        g = n(971628),
        b = n(71080),
        f = n(981631),
        A = n(689938),
        L = n(194419);
      let y = (0, d.hQ)();
      function j(e, t) {
        return t ? e.slice(1) : e;
      }
      function p(e) {
        let t,
          {
            guild: n,
            channel: r,
            permission: i,
            pendingAdditions: c,
            setPendingAdditions: d,
            isStageChannel: u = null != r && r.isGuildStageVoice(),
            description: m,
          } = e,
          [E, S] = l.useState(!1),
          [f, L] = l.useState(""),
          y = (0, a.e7)([x.Z], () => x.Z.getRoles(n.id));
        function p(e) {
          let t = j(f.trim(), E);
          return RegExp("".concat(T.Z.escape(t)), "i").test(e);
        }
        let v = (0, a.Wu)([h.ZP], () => h.ZP.getMemberIds(n.id));
        E
          ? (t = [])
          : u
            ? (t = M.Wx(n, y, r, i, p))
            : 0 === (t = M.ik(n, y, r, i, p)).length &&
              "" === f.trim() &&
              !M.RD(n, y) &&
              (t = M.aq());
        let C = M.iI(v, r, n, i, p),
          {
            placeholderText: w,
            hintText: Z,
            renderEmptyText: _,
          } = (function () {
            return {
              placeholderText:
                A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,
              hintText: A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,
              renderEmptyText: (e) =>
                A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format(
                  { query: e },
                ),
            };
          })();
        return (0, s.jsx)(N, {
          pendingAdditions: c,
          query: f,
          onQueryChange: function (e) {
            let t = e.trim(),
              s = "@" === t.charAt(0);
            R.Z.requestMembers(n.id, j(t, s), b.EQ), L(e), S(s);
          },
          onClickRow: function (e) {
            let t = (0, g.G)(e);
            d((n) => {
              let s = { ...n };
              if (t in s) delete s[t];
              else {
                let n;
                e.rowType === b.aC.ROLE || e.rowType === b.aC.ADMINISTRATOR
                  ? (n = {
                      type: o.Fj.ROLE,
                      label: e.name,
                      color: e.colorString,
                    })
                  : (e.rowType === b.aC.MEMBER || e.rowType === b.aC.OWNER) &&
                    (n = {
                      type: o.Fj.MEMBER,
                      label: e.name,
                      avatar: e.avatarURL,
                    }),
                  null != n && (s[t] = { display: n, row: e });
              }
              return s;
            });
          },
          onRemovePendingAddition: function (e) {
            d((t) => {
              let { [e]: n, ...s } = t;
              return s;
            });
          },
          roles: t,
          members: C,
          placeholderText: w,
          hintText: Z,
          renderEmptyText: _,
          isStageChannel: u,
          description: m,
        });
      }
      function N(e) {
        let t,
          {
            listClassName: n,
            pendingAdditions: l,
            query: a,
            onQueryChange: i,
            onClickRow: o,
            onRemovePendingAddition: c,
            roles: d,
            members: u,
            placeholderText: m,
            hintText: h,
            renderEmptyText: x,
            isStageChannel: E,
            focusSearchAfterReady: S,
            isReady: R,
            description: T,
          } = e;
        return (0, s.jsxs)("div", {
          className: L.content,
          children: [
            (null == (t = T) &&
              E &&
              (t = A.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION),
            null == t || "" === t)
              ? null
              : (0, s.jsx)(r.Text, {
                  color: "header-secondary",
                  className: L.description,
                  variant: "text-sm/normal",
                  children: t,
                }),
            (0, s.jsx)(g.Z, {
              listClassName: n,
              pendingAdditions: l,
              query: a,
              onQueryChange: i,
              onClickRow: o,
              onRemovePendingAddition: c,
              roles: d,
              members: u,
              placeholderText: m,
              hintText: h,
              renderEmptyText: x,
              disabledText: E
                ? A.Z.Messages.CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS
                : null,
              focusSearchAfterReady: S,
              isReady: R,
            }),
          ],
        });
      }
      function v(e) {
        let {
            transitionState: t,
            onClose: n,
            channelId: o,
            newChannel: d,
            inSettings: h,
          } = e,
          [R, T] = l.useState(!1),
          [M, g] = l.useState({}),
          j = (0, a.e7)([m.Z], () => m.Z.getChannel(o), [o]),
          N = (0, a.e7)([x.Z], () =>
            x.Z.getGuild(null == j ? void 0 : j.getGuildId()),
          );
        if (
          (l.useEffect(() => {
            E.default.track(f.rMx.OPEN_MODAL, { type: "Grant Channel Access" });
          }, []),
          null == j || null == N)
        )
          return null;
        let v = d && 0 === Object.keys(M).length;
        async function C() {
          if (null == j || 0 === Object.keys(M).length) {
            n();
            return;
          }
          T(!0);
          try {
            await (function (e, t, n) {
              let s = [];
              return (
                Object.values(t).forEach((t) => {
                  let { row: n } = t;
                  null != n.id &&
                    "" !== n.id &&
                    (n.rowType === b.aC.ROLE
                      ? s.push((0, S.rX)(n.id, e.type))
                      : n.rowType === b.aC.MEMBER &&
                        s.push((0, S.jZ)(n.id, e.type)));
                }),
                (0, i.hw)(e.id, s, n)
              );
            })(j, M, h),
              n(),
              T(!1);
          } catch (e) {
            T(!1);
          }
        }
        let w = (0, u.zi)(j.type) ? r.TextLockIcon : r.VoiceLockIcon;
        return (0, s.jsxs)(r.ModalRoot, {
          transitionState: t,
          size: r.ModalSize.SMALL,
          "aria-labelledby": y,
          className: L.modalRoot,
          children: [
            (0, s.jsxs)(r.ModalHeader, {
              separator: !1,
              direction: c.Z.Direction.VERTICAL,
              align: c.Z.Align.CENTER,
              className: L.header,
              children: [
                (0, s.jsx)(r.Heading, {
                  id: y,
                  variant: "heading-xl/semibold",
                  children: A.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                }),
                (0, s.jsxs)(r.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: L.headerSubtitle,
                  children: [
                    (0, s.jsx)(w, {
                      size: "xs",
                      color: "currentColor",
                      className: L.headerSubtitleIcon,
                    }),
                    j.name,
                  ],
                }),
              ],
            }),
            (0, s.jsx)(p, {
              guild: N,
              channel: j,
              permission: j.accessPermissions,
              pendingAdditions: M,
              setPendingAdditions: g,
            }),
            (0, s.jsxs)(r.ModalFooter, {
              children: [
                !v &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(r.Button, {
                        onClick: C,
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.SMALL,
                        className: L.button,
                        submitting: R,
                        children: A.Z.Messages.DONE,
                      }),
                      (0, s.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.TRANSPARENT,
                        onClick: n,
                        size: r.Button.Sizes.SMALL,
                        children: A.Z.Messages.CANCEL,
                      }),
                    ],
                  }),
                v &&
                  (0, s.jsx)(r.Button, {
                    look: r.Button.Looks.FILLED,
                    color: r.Button.Colors.PRIMARY,
                    onClick: n,
                    size: r.Button.Sizes.SMALL,
                    children:
                      A.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP,
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
          return b;
        },
        Z: function () {
          return L;
        },
      }),
        n(47120),
        n(724458);
      var s = n(735250),
        l = n(470079),
        a = n(120356),
        r = n.n(a),
        i = n(91192),
        o = n(481060),
        c = n(385499),
        d = n(600164),
        u = n(313201),
        m = n(565138),
        h = n(631969),
        x = n(605436),
        E = n(537383),
        S = n(71080),
        R = n(689938),
        T = n(194419);
      let M = (0, u.hQ)(),
        g = (0, u.hQ)();
      function b(e) {
        return "".concat(e.rowType, ":").concat(e.id);
      }
      function f(e) {
        return (0, s.jsx)(
          o.FormTitle,
          {
            tag: "h5",
            className: r()(T.sectionTitle, T.rowHeight),
            children: e,
          },
          e,
        );
      }
      function A(e) {
        let {
            id: t,
            children: n,
            rowLabel: l,
            checked: a,
            onSelect: c,
            disabled: u,
            showCheckbox: m,
            selected: h,
            onMouseEnter: x,
            "aria-posinset": E,
            "aria-setsize": S,
          } = e,
          R = (0, i.JA)(t);
        return (0, s.jsx)(o.Clickable, {
          ...R,
          id: t,
          className: r()(T.addMemberRow, { [T.selectedRow]: h }),
          onClick: (e) => {
            !u && (e.preventDefault(), c());
          },
          onMouseEnter: x,
          role: "option",
          "aria-disabled": u,
          "aria-selected": a,
          "aria-setsize": S,
          "aria-posinset": E,
          children: (0, s.jsxs)(d.Z, {
            justify: d.Z.Justify.BETWEEN,
            align: d.Z.Align.CENTER,
            children: [
              m
                ? (0, s.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 18,
                    value: a,
                    type: o.Checkbox.Types.INVERTED,
                    disabled: u,
                    children: (0, s.jsx)("div", {
                      className: T.checkboxLabel,
                      children: n,
                    }),
                  })
                : n,
              null != l
                ? (0, s.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: l,
                  })
                : null,
            ],
          }),
        });
      }
      function L(e) {
        let {
            listClassName: t,
            pendingAdditions: n,
            query: a,
            onQueryChange: i,
            onClickRow: u,
            onRemovePendingAddition: L,
            roles: y = [],
            members: j = [],
            users: p = [],
            guilds: N = [],
            placeholderText: v,
            disabledText: C,
            hintText: w,
            searchTitleText: Z,
            renderEmptyText: _,
            focusSearchAfterReady: I,
            isReady: k,
            maxCount: B,
            hideRowLabel: O = !1,
          } = e,
          D = l.useRef(null),
          P = l.useRef(null),
          z = [y.length, j.length, p.length, N.length],
          [H, U] = l.useState(!1),
          [$, F] = l.useState(0),
          [V, G] = l.useState(-1);
        l.useEffect(() => {
          var e;
          null === (e = D.current) || void 0 === e || e.focus();
        }, []);
        let Q = l.useCallback(function (e, t) {
            let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if ((F(e), G(t), n)) {
              var s;
              null === (s = P.current) ||
                void 0 === s ||
                s.scrollToIndex({
                  section: null != e ? e : 0,
                  row: null != t ? t : 0,
                  padding: 8,
                });
            }
          }, []),
          q = l.useCallback(
            (e, t) => {
              if (null == t) return;
              i("");
              let n = (e === S.m$.ROLES ? y : [])[t];
              n.rowType !== S.aC.EMPTY_STATE && u(n);
            },
            [y, u, i],
          ),
          Y = l.useCallback(
            (e) => {
              var t;
              if (null != e && e.rowType !== S.aC.EMPTY_STATE)
                u(e),
                  i(""),
                  null === (t = D.current) || void 0 === t || t.focus();
            },
            [u, i],
          ),
          W = l.useMemo(() => Object.keys(n), [n]),
          J =
            l.useMemo(
              () =>
                j.some((e) => !e.disabled) ||
                y.some((e) => !e.disabled) ||
                p.some((e) => !e.disabled) ||
                N.some((e) => !e.disabled),
              [j, y, p, N],
            ) || "" === a.trim();
        function K() {
          var e;
          U(
            !(null === (e = P.current) || void 0 === e
              ? void 0
              : e.isScrolledToTop()) && J,
          );
        }
        return (
          l.useEffect(() => {
            K();
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: r()(T.searchBox, { [T.scrollSeparator]: H }),
                children: [
                  null != Z &&
                    (0, s.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H5,
                      children: Z,
                    }),
                  (0, s.jsx)(E.Z, {
                    ref: D,
                    query: a,
                    onQueryChange: i,
                    selectedSection: $,
                    selectedRow: V,
                    onSelectionChange: Q,
                    onSelect: q,
                    tags: W.map((e) => n[e].display),
                    sections: z,
                    onRemoveTag: function (e) {
                      L(W[e]);
                    },
                    placeholder: v,
                    focusAfterReady: I,
                    isReady: k,
                    "aria-labelledby": M,
                    "aria-controls": g,
                  }),
                  null != w
                    ? (0, s.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        children: w,
                      })
                    : null,
                ],
              }),
              J
                ? (0, s.jsx)(o.List, {
                    ref: P,
                    className: r()(T.roleMemberList, t),
                    sections: z,
                    renderRow: (e) => {
                      let t,
                        l,
                        { section: a, row: i } = e,
                        d = null,
                        u = !1,
                        h = !1,
                        E = !1,
                        R = null != B && Object.keys(n).length >= B;
                      switch (a) {
                        case S.m$.ROLES:
                          (u = (l = b((d = y[i]))) in n || d.disabled),
                            (h = d.disabled || R),
                            (E = $ === S.m$.ROLES && V === i),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)("div", {
                                  className: r()(T.rowHeight, T.alignCenter),
                                  children: (0, s.jsx)(o.ShieldUserIcon, {
                                    size: "custom",
                                    color: d.colorString,
                                    height: 20,
                                  }),
                                }),
                                (0, s.jsxs)("div", {
                                  className: T.rowLabel,
                                  children: [
                                    (0, s.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      className: T.__invalid_rowTitle,
                                      color:
                                        d.rowType === S.aC.EMPTY_STATE
                                          ? "text-muted"
                                          : "text-normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != C
                                      ? (0, s.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: C,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case S.m$.MEMBERS:
                          (u = (l = b((d = j[i]))) in n || d.disabled),
                            (h = d.disabled || R),
                            (E = $ === S.m$.MEMBERS && V === i),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, s.jsx)(o.Text, {
                                  className: T.rowLabel,
                                  variant: "text-sm/normal",
                                  children: d.name,
                                }),
                                null != d.nickname
                                  ? (0, s.jsx)(o.Text, {
                                      color: "text-muted",
                                      className: T.rowLabelSubText,
                                      variant: "text-sm/normal",
                                      "aria-hidden": !0,
                                      children: d.username,
                                    })
                                  : null,
                                d.bot &&
                                  (0, s.jsx)(c.Z, { verified: d.verifiedBot }),
                              ],
                            }));
                          break;
                        case S.m$.USERS:
                          (u = (l = b((d = p[i]))) in n || d.disabled),
                            (h = d.disabled || R),
                            (E = $ === S.m$.USERS && V === i),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, s.jsxs)("div", {
                                  className: T.rowLabel,
                                  children: [
                                    (0, s.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != C
                                      ? (0, s.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: C,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case S.m$.GUILDS:
                          (u = (l = b((d = N[i]))) in n || d.disabled),
                            (h = d.disabled || R),
                            (E = $ === S.m$.GUILDS && V === i),
                            (t = (0, s.jsxs)("div", {
                              className: T.rowBody,
                              children: [
                                (0, s.jsx)(m.Z, {
                                  guild: d.guild,
                                  active: !0,
                                  size: m.Z.Sizes.SMALLER,
                                }),
                                (0, s.jsx)("div", {
                                  className: T.rowLabel,
                                  children: (0, s.jsx)(o.Text, {
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
                        : (0, s.jsx)(
                            A,
                            {
                              id: "user-row-".concat(i),
                              rowLabel: O ? null : x.zB(d.rowType),
                              checked: u,
                              disabled: h,
                              onSelect: () => Y(d),
                              showCheckbox: d.rowType !== S.aC.EMPTY_STATE,
                              onMouseEnter: () => Q(a, i, !1),
                              selected: E,
                              "aria-posinset": i + 1,
                              "aria-setsize": z.reduce((e, t) => e + t, 0),
                              children: t,
                            },
                            l,
                          );
                    },
                    rowHeight: 40,
                    renderSection: (e) => {
                      let { section: t } = e;
                      switch (t) {
                        case S.m$.ROLES:
                          return f(R.Z.Messages.ROLES);
                        case S.m$.MEMBERS:
                          return f(R.Z.Messages.MEMBERS);
                        case S.m$.USERS:
                          return f(R.Z.Messages.USERS);
                        case S.m$.GUILDS:
                          return f(R.Z.Messages.SERVERS);
                      }
                    },
                    sectionHeight: 32,
                    onScroll: K,
                    role: void 0,
                    innerRole: "listbox",
                    innerId: g,
                    innerAriaMultiselectable: !0,
                    innerAriaOrientation: "vertical",
                  })
                : (0, s.jsxs)(d.Z, {
                    className: t,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    direction: d.Z.Direction.VERTICAL,
                    children: [
                      (0, s.jsx)(h.Z, { className: T.noResultIcon }),
                      (0, s.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: _(a),
                      }),
                    ],
                  }),
            ],
          })
        );
      }
    },
    537383: function (e, t, n) {
      var s = n(735250),
        l = n(470079),
        a = n(461745),
        r = n(631155);
      let i = l.forwardRef(function (e, t) {
        let {
          query: n,
          onQueryChange: l,
          onRemoveTag: i,
          onSelect: o,
          onSelectionChange: c,
          selectedSection: d,
          selectedRow: u,
          tags: m,
          sections: h,
          placeholder: x = "",
          focusAfterReady: E,
          isReady: S,
          "aria-labelledby": R,
          "aria-controls": T,
        } = e;
        return (0, s.jsx)(a.ZP, {
          autoFocus: !0,
          className: r.searchBar,
          maxHeight: 100,
          onQueryChange: l,
          onRemoveTag: i,
          selectedSection: d,
          selectedRow: u,
          onSelect: o,
          onSelectionChange: c,
          placeholder: 0 === m.length ? x : "",
          query: n,
          ref: t,
          size: a.ZP.Sizes.MEDIUM,
          tags: m,
          sections: h,
          focusAfterReady: E,
          isReady: S,
          inputProps: {
            "aria-labelledby": R,
            "aria-controls": T,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(u),
          },
        });
      });
      t.Z = i;
    },
  },
]);
//# sourceMappingURL=54e63692350ffa38d6ea.js.map
