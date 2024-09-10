"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65851"],
  {
    24722: function (e, t, o) {
      o.r(t),
        o.d(t, {
          AddRoleMembersModalContent: function () {
            return S;
          },
          default: function () {
            return g;
          },
        }),
        o(47120);
      var a = o(735250),
        r = o(470079),
        s = o(866442),
        l = o(442837),
        n = o(481060),
        c = o(461745),
        i = o(185413),
        d = o(971628),
        u = o(600164),
        b = o(892880),
        _ = o(51144),
        m = o(480608),
        R = o(434404),
        h = o(946724),
        M = o(130341),
        x = o(981631),
        C = o(71080),
        f = o(377668),
        L = o(689938),
        B = o(391882);
      function S(e) {
        var t;
        let {
            onClose: o,
            roleId: S,
            guildId: g,
            onBack: E,
            isCreateRoleFlow: k,
            focusSearchAfterReady: p,
            isReady: v,
          } = e,
          w = (0, l.e7)([h.Z], () => h.Z.getRole(S), [S]),
          [A, T] = r.useState(""),
          [j, I] = r.useState({}),
          [N, y] = r.useState(!1);
        r.useEffect(() => {
          b.Z.requestMembers(g, A.trim().toLowerCase(), M._4);
        }, [g, A]);
        let Z = r.useCallback((e) => !e.roles.includes(S), [S]),
          D = (0, M.lJ)(g, Z),
          O = r.useMemo(() => D.filter((e) => (0, M.eg)(A, e)), [A, D]);
        O = O.filter((e) => e.id !== f.fL);
        let z = r.useCallback(async () => {
            let e = Object.values(j).map((e) => e.row.id);
            y(!0);
            try {
              await R.Z.bulkAddMemberRoles(g, S, e), (0, m.H)(g, S, !1), o();
            } catch (e) {
              y(!1);
            }
          }, [g, S, j, o]),
          U = r.useCallback((e) => {
            I((t) => {
              let o = { ...t },
                a = (0, d.G)(e);
              return a in o
                ? (delete o[a], o)
                : ((o[a] = {
                    display: {
                      type: c.Fj.MEMBER,
                      label: e.name,
                      avatar: e.avatarURL,
                    },
                    row: e,
                  }),
                  o);
            });
          }, []),
          H = r.useCallback((e) => {
            I((t) => {
              let { [e]: o, ...a } = t;
              return a;
            });
          }, []),
          P = r.useMemo(
            () =>
              O.map((e) => {
                var t;
                let o = _.ZP.getUserTag(e.user);
                return {
                  rowType: C.aC.MEMBER,
                  name: null !== (t = e.name) && void 0 !== t ? t : o,
                  nickname: e.name,
                  username: o,
                  id: e.id,
                  avatarURL: e.avatarURL,
                  bot: e.bot,
                  verifiedBot: e.verifiedBot,
                  disabled: !1,
                  key: e.id,
                };
              }),
            [O],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(n.ModalHeader, {
              className: B.header,
              separator: !1,
              direction: u.Z.Direction.VERTICAL,
              children: [
                (0, a.jsx)(n.Heading, {
                  variant: "heading-xl/semibold",
                  children: L.Z.Messages.ROLE_ADD_MEMBERS_TITLE,
                }),
                k
                  ? (0, a.jsx)(n.Text, {
                      className: B.subtitle,
                      color: "text-normal",
                      variant: "text-md/normal",
                      children: L.Z.Messages.ROLE_CREATE_ADD_MEMBERS_SUBTITLE,
                    })
                  : (0, a.jsxs)("div", {
                      className: B.roleContainer,
                      children: [
                        (0, a.jsx)(n.ShieldUserIcon, {
                          size: "xs",
                          color:
                            null !== (t = null == w ? void 0 : w.colorString) &&
                            void 0 !== t
                              ? t
                              : (0, s.Rf)(x.p6O),
                        }),
                        (0, a.jsx)(n.Text, {
                          className: B.roleName,
                          color: "text-normal",
                          variant: "text-md/normal",
                          children: null == w ? void 0 : w.name,
                        }),
                      ],
                    }),
              ],
            }),
            (0, a.jsx)(i.MemberRoleSelector, {
              listClassName: B.list,
              pendingAdditions: j,
              query: A,
              onQueryChange: T,
              onClickRow: U,
              onRemovePendingAddition: H,
              roles: [],
              members: P,
              placeholderText: L.Z.Messages.ROLE_ADD_MEMBERS_SEARCH,
              renderEmptyText: (e) =>
                L.Z.Messages.ROLE_EDIT_MEMBERS_NO_RESULTS.format({ query: e }),
              focusSearchAfterReady: p,
              isReady: v,
            }),
            (0, a.jsxs)(n.ModalFooter, {
              className: B.footer,
              children: [
                (0, a.jsxs)("div", {
                  className: B.buttonsRight,
                  children: [
                    k && 0 === Object.keys(j).length
                      ? (0, a.jsx)(n.Button, {
                          onClick: o,
                          color: n.Button.Colors.PRIMARY,
                          children: L.Z.Messages.ROLE_CREATION_SKIP,
                        })
                      : (0, a.jsx)(n.Button, {
                          onClick: z,
                          submitting: N,
                          children: L.Z.Messages.ADD,
                        }),
                    !k &&
                      (0, a.jsx)(n.Button, {
                        look: n.Button.Looks.LINK,
                        color: n.Button.Colors.PRIMARY,
                        size: n.Button.Sizes.SMALL,
                        onClick: o,
                        children: L.Z.Messages.CANCEL,
                      }),
                  ],
                }),
                null != E &&
                  (0, a.jsx)(n.Button, {
                    color: n.Button.Colors.PRIMARY,
                    look: n.Button.Looks.LINK,
                    size: n.Button.Sizes.TINY,
                    onClick: E,
                    className: B.backButton,
                    children: L.Z.Messages.BACK,
                  }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { transitionState: t, onClose: o, roleId: r, guildId: s } = e;
        return (0, a.jsx)(n.ModalRoot, {
          transitionState: t,
          size: n.ModalSize.SMALL,
          children: (0, a.jsx)(S, { onClose: o, roleId: r, guildId: s }),
        });
      }
    },
    194419: function (e, t, o) {
      e.exports = {
        modalRoot: "modalRoot_a0cc0d",
        button: "button_a0cc0d",
        header: "header_a0cc0d",
        headerSubtitle: "headerSubtitle_a0cc0d",
        alignCenter: "alignCenter_a0cc0d",
        headerSubtitleIcon: "headerSubtitleIcon_a0cc0d",
        content: "content_a0cc0d",
        searchBox: "searchBox_a0cc0d",
        roleMemberList: "roleMemberList_a0cc0d",
        addMemberRow: "addMemberRow_a0cc0d",
        selectedRow: "selectedRow_a0cc0d",
        rowBody: "rowBody_a0cc0d",
        checkboxLabel: "checkboxLabel_a0cc0d",
        rowHeight: "rowHeight_a0cc0d",
        rowLabel: "rowLabel_a0cc0d",
        rowLabelSubText: "rowLabelSubText_a0cc0d",
        sectionTitle: "sectionTitle_a0cc0d",
        noResultIcon: "noResultIcon_a0cc0d",
        description: "description_a0cc0d",
        scrollSeparator: "scrollSeparator_a0cc0d",
      };
    },
    631155: function (e, t, o) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    391882: function (e, t, o) {
      e.exports = {
        header: "header_a6018f",
        subtitle: "subtitle_a6018f",
        roleContainer: "roleContainer_a6018f",
        roleName: "roleName_a6018f",
        list: "list_a6018f",
        footer: "footer_a6018f",
        buttonsRight: "buttonsRight_a6018f",
        backButton: "backButton_a6018f",
      };
    },
  },
]);
//# sourceMappingURL=f936e1acbb964df09e01.js.map
