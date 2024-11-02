"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65851"],
  {
    24722: function (e, t, o) {
      o.r(t),
        o.d(t, {
          AddRoleMembersModalContent: function () {
            return p;
          },
          default: function () {
            return B;
          },
        }),
        o(47120);
      var a = o(200651),
        r = o(192379),
        l = o(866442),
        n = o(442837),
        i = o(481060),
        c = o(461745),
        s = o(185413),
        d = o(971628),
        u = o(600164),
        b = o(892880),
        m = o(51144),
        h = o(480608),
        x = o(434404),
        R = o(946724),
        f = o(130341),
        _ = o(981631),
        g = o(71080),
        k = o(377668),
        C = o(388032),
        M = o(391882);
      function p(e) {
        var t;
        let {
            onClose: o,
            roleId: p,
            guildId: B,
            onBack: L,
            isCreateRoleFlow: v,
            focusSearchAfterReady: S,
            isReady: w,
          } = e,
          j = (0, n.e7)([R.Z], () => R.Z.getRole(p), [p]),
          [y, I] = r.useState(""),
          [N, T] = r.useState({}),
          [A, E] = r.useState(!1);
        r.useEffect(() => {
          b.Z.requestMembers(B, y.trim().toLowerCase(), f._4);
        }, [B, y]);
        let Z = r.useCallback((e) => !e.roles.includes(p), [p]),
          z = (0, f.lJ)(B, Z),
          Y = r.useMemo(() => z.filter((e) => (0, f.eg)(y, e)), [y, z]);
        Y = Y.filter((e) => e.id !== k.fL);
        let H = r.useCallback(async () => {
            let e = Object.values(N).map((e) => e.row.id);
            E(!0);
            try {
              await x.Z.bulkAddMemberRoles(B, p, e), (0, h.H)(B, p, !1), o();
            } catch (e) {
              E(!1);
            }
          }, [B, p, N, o]),
          O = r.useCallback((e) => {
            T((t) => {
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
          P = r.useCallback((e) => {
            T((t) => {
              let { [e]: o, ...a } = t;
              return a;
            });
          }, []),
          U = r.useMemo(
            () =>
              Y.map((e) => {
                var t;
                let o = m.ZP.getUserTag(e.user);
                return {
                  rowType: g.aC.MEMBER,
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
            [Y],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i.ModalHeader, {
              className: M.header,
              separator: !1,
              direction: u.Z.Direction.VERTICAL,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: C.intl.string(C.t["ZYOK4+"]),
                }),
                v
                  ? (0, a.jsx)(i.Text, {
                      className: M.subtitle,
                      color: "text-normal",
                      variant: "text-md/normal",
                      children: C.intl.string(C.t.AMsxa2),
                    })
                  : (0, a.jsxs)("div", {
                      className: M.roleContainer,
                      children: [
                        (0, a.jsx)(i.ShieldUserIcon, {
                          size: "xs",
                          color:
                            null !== (t = null == j ? void 0 : j.colorString) &&
                            void 0 !== t
                              ? t
                              : (0, l.Rf)(_.p6O),
                        }),
                        (0, a.jsx)(i.Text, {
                          className: M.roleName,
                          color: "text-normal",
                          variant: "text-md/normal",
                          children: null == j ? void 0 : j.name,
                        }),
                      ],
                    }),
              ],
            }),
            (0, a.jsx)(s.MemberRoleSelector, {
              listClassName: M.list,
              pendingAdditions: N,
              query: y,
              onQueryChange: I,
              onClickRow: O,
              onRemovePendingAddition: P,
              roles: [],
              members: U,
              placeholderText: C.intl.string(C.t.vMiCaW),
              renderEmptyText: (e) => C.intl.format(C.t.eq8a8f, { query: e }),
              focusSearchAfterReady: S,
              isReady: w,
            }),
            (0, a.jsxs)(i.ModalFooter, {
              className: M.footer,
              children: [
                (0, a.jsxs)("div", {
                  className: M.buttonsRight,
                  children: [
                    v && 0 === Object.keys(N).length
                      ? (0, a.jsx)(i.Button, {
                          onClick: o,
                          color: i.Button.Colors.PRIMARY,
                          children: C.intl.string(C.t.CJm5V1),
                        })
                      : (0, a.jsx)(i.Button, {
                          onClick: H,
                          submitting: A,
                          children: C.intl.string(C.t.OYkgVl),
                        }),
                    !v &&
                      (0, a.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        onClick: o,
                        children: C.intl.string(C.t["ETE/oK"]),
                      }),
                  ],
                }),
                null != L &&
                  (0, a.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    size: i.Button.Sizes.TINY,
                    onClick: L,
                    className: M.backButton,
                    children: C.intl.string(C.t["13/7kZ"]),
                  }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        let { transitionState: t, onClose: o, roleId: r, guildId: l } = e;
        return (0, a.jsx)(i.ModalRoot, {
          transitionState: t,
          size: i.ModalSize.SMALL,
          children: (0, a.jsx)(p, { onClose: o, roleId: r, guildId: l }),
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
//# sourceMappingURL=1e9c96fb7b520e787b77.js.map
