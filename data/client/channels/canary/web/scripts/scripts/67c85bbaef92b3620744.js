"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31673"],
  {
    24722: function (e, t, o) {
      o.r(t),
        o.d(t, {
          AddRoleMembersModalContent: function () {
            return B;
          },
          default: function () {
            return L;
          },
        }),
        o(47120);
      var a = o(200651),
        r = o(192379),
        l = o(866442),
        n = o(442837),
        i = o(481060),
        s = o(461745),
        c = o(185413),
        d = o(971628),
        u = o(600164),
        b = o(892880),
        m = o(51144),
        h = o(480608),
        x = o(434404),
        f = o(946724),
        R = o(130341),
        _ = o(494831),
        g = o(981631),
        k = o(71080),
        C = o(377668),
        M = o(388032),
        p = o(240568);
      function B(e) {
        var t;
        let {
            onClose: o,
            roleId: B,
            guildId: L,
            onBack: S,
            isCreateRoleFlow: v,
            focusSearchAfterReady: w,
            isReady: j,
          } = e,
          y = (0, n.e7)([f.Z], () => f.Z.getRole(B), [B]),
          [I, N] = r.useState(""),
          [T, A] = r.useState({}),
          [E, Z] = r.useState(!1);
        r.useEffect(() => {
          b.Z.requestMembers(L, I.trim().toLowerCase(), R._4);
        }, [L, I]);
        let z = r.useCallback((e) => !e.roles.includes(B), [B]),
          P = (0, R.lJ)(L, z),
          O = r.useMemo(() => P.filter((e) => (0, R.eg)(I, e)), [I, P]);
        O = O.filter((e) => e.id !== C.fL);
        let Y = r.useCallback(async () => {
            let e = Object.values(T).map((e) => e.row.id);
            Z(!0);
            try {
              await x.Z.bulkAddMemberRoles(L, B, e), (0, h.H)(L, B, !1), o();
            } catch (e) {
              Z(!1);
            }
          }, [L, B, T, o]),
          H = r.useCallback((e) => {
            A((t) => {
              let o = { ...t },
                a = (0, d.G)(e);
              return a in o
                ? (delete o[a], o)
                : ((o[a] = {
                    display: {
                      type: s.Fj.MEMBER,
                      label: e.name,
                      avatar: e.avatarURL,
                    },
                    row: e,
                  }),
                  o);
            });
          }, []),
          U = r.useCallback((e) => {
            A((t) => {
              let { [e]: o, ...a } = t;
              return a;
            });
          }, []),
          K = r.useMemo(
            () =>
              O.map((e) => {
                var t;
                let o = m.ZP.getUserTag(e.user);
                return {
                  rowType: k.aC.MEMBER,
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
          ),
          q = r.useMemo(() => Object.keys(T).length, [T]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i.ModalHeader, {
              className: p.header,
              separator: !1,
              direction: u.Z.Direction.VERTICAL,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: M.intl.string(M.t["ZYOK4+"]),
                }),
                v
                  ? (0, a.jsx)(i.Text, {
                      className: p.subtitle,
                      color: "text-normal",
                      variant: "text-md/normal",
                      children: M.intl.string(M.t.AMsxa2),
                    })
                  : (0, a.jsxs)("div", {
                      className: p.roleContainer,
                      children: [
                        (0, a.jsx)(i.ShieldUserIcon, {
                          size: "xs",
                          color:
                            null !== (t = null == y ? void 0 : y.colorString) &&
                            void 0 !== t
                              ? t
                              : (0, l.Rf)(g.p6O),
                        }),
                        (0, a.jsx)(i.Text, {
                          className: p.roleName,
                          color: "text-normal",
                          variant: "text-md/normal",
                          children: null == y ? void 0 : y.name,
                        }),
                      ],
                    }),
              ],
            }),
            (0, a.jsx)(c.MemberRoleSelector, {
              listClassName: p.list,
              pendingAdditions: T,
              query: I,
              onQueryChange: N,
              onClickRow: H,
              onRemovePendingAddition: U,
              roles: [],
              members: K,
              placeholderText: M.intl.string(M.t.vMiCaW),
              renderEmptyText: (e) => M.intl.format(M.t.eq8a8f, { query: e }),
              focusSearchAfterReady: w,
              isReady: j,
              description: M.intl.formatToPlainString(M.t["3OxP4u"], {
                numMembers: _.ey,
              }),
            }),
            (0, a.jsxs)(i.ModalFooter, {
              className: p.footer,
              children: [
                (0, a.jsxs)("div", {
                  className: p.buttonsRight,
                  children: [
                    v && 0 === q
                      ? (0, a.jsx)(i.Button, {
                          onClick: o,
                          color: i.Button.Colors.PRIMARY,
                          children: M.intl.string(M.t.CJm5V1),
                        })
                      : (0, a.jsx)(i.Button, {
                          onClick: Y,
                          submitting: E,
                          disabled: 0 === q || q > _.ey,
                          children: M.intl.string(M.t.OYkgVl),
                        }),
                    !v &&
                      (0, a.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        onClick: o,
                        children: M.intl.string(M.t["ETE/oK"]),
                      }),
                  ],
                }),
                null != S &&
                  (0, a.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    size: i.Button.Sizes.TINY,
                    onClick: S,
                    className: p.backButton,
                    children: M.intl.string(M.t["13/7kZ"]),
                  }),
              ],
            }),
          ],
        });
      }
      function L(e) {
        let { transitionState: t, onClose: o, roleId: r, guildId: l } = e;
        return (0, a.jsx)(i.ModalRoot, {
          transitionState: t,
          size: i.ModalSize.SMALL,
          children: (0, a.jsx)(B, { onClose: o, roleId: r, guildId: l }),
        });
      }
    },
    233707: function (e, t, o) {
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
    179995: function (e, t, o) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    240568: function (e, t, o) {
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
//# sourceMappingURL=67c85bbaef92b3620744.js.map
