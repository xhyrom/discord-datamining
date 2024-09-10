"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39627"],
  {
    193845: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return j;
          },
        }),
        a(653041);
      var r = a(735250),
        n = a(470079),
        i = a(149765),
        t = a(481060),
        l = a(422559),
        o = a(430824),
        d = a(768581),
        c = a(700785),
        m = a(764260),
        _ = a(981631),
        x = a(135899),
        u = a(689938),
        E = a(517130);
      function N(e) {
        let { guild: s } = e,
          a = d.ZP.getGuildIconURL({ id: s.id, icon: s.icon, size: 120 });
        return (0, r.jsxs)(t.ModalHeader, {
          className: E.header,
          children: [
            (0, r.jsx)("div", {
              className: E.headerIconContainer,
              children:
                null != a
                  ? (0, r.jsx)(t.Avatar, {
                      src: a,
                      "aria-label": s.name,
                      size: t.AvatarSizes.SIZE_120,
                      className: E.__invalid_guildIcon,
                    })
                  : (0, r.jsx)("div", {
                      className: E.acronym,
                      children: s.acronym,
                    }),
            }),
            (0, r.jsxs)("div", {
              className: E.headerText,
              children: [
                (0, r.jsx)(t.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  children: u.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_TITLE,
                }),
                (0, r.jsx)(t.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children:
                    u.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_SUBTITLE,
                }),
              ],
            }),
          ],
        });
      }
      let b = (e) => {
        if (e.toString() === _.Plq.MENTION_EVERYONE.toString())
          return u.Z.Messages
            .ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
        return (0, l.wt)(e);
      };
      function h(e) {
        let { permissions: s } = e;
        return (0, r.jsxs)("div", {
          className: E.tableContainer,
          children: [
            (0, r.jsx)(t.Text, {
              className: E.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                u.Z.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS,
            }),
            (0, r.jsx)("div", {
              className: E.permissionsTable,
              children: s.map((e, s) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: E.permissionRow,
                    children: [
                      (0, r.jsx)("div", { className: E.bulletWarning }),
                      (0, r.jsx)(t.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: b(e),
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
      }
      function I(e) {
        let { permissions: s } = e;
        return (0, r.jsxs)("div", {
          className: E.tableContainer,
          children: [
            (0, r.jsx)(t.Text, {
              className: E.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children:
                u.Z.Messages
                  .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS,
            }),
            (0, r.jsx)("div", {
              className: E.permissionsTable,
              children: s.map((e, s) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: E.permissionRow,
                    children: [
                      (0, r.jsx)("div", { className: E.bullet }),
                      (0, r.jsx)(t.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: b(e),
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
      }
      function S(e) {
        let { permissions: s } = e,
          { enabledPermissions: a, disabledPermissions: n } = s;
        return (0, r.jsx)(t.ModalContent, {
          children: (0, r.jsxs)("div", {
            className: E.table,
            children: [
              (0, r.jsx)(h, { permissions: a }),
              (0, r.jsx)(I, { permissions: n }),
            ],
          }),
        });
      }
      function M(e) {
        let { onConfirm: s, onDismiss: a } = e;
        return (0, r.jsxs)(t.ModalFooter, {
          className: E.footer,
          children: [
            (0, r.jsx)(t.Button, {
              onClick: s,
              children:
                u.Z.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION,
            }),
            (0, r.jsx)(t.Button, {
              look: t.Button.Looks.LINK,
              onClick: a,
              color: t.Button.Colors.PRIMARY,
              children: (0, r.jsx)(t.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children:
                  u.Z.Messages
                    .DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS,
              }),
            }),
          ],
        });
      }
      function j(e) {
        let { guild: s, transitionState: a, onClose: l } = e,
          d = n.useMemo(() => {
            let e = [],
              a = [];
            return (
              x.$X.map((r) => {
                c.oz(r, s) ? e.push(r) : a.push(r);
              }),
              { enabledPermissions: e, disabledPermissions: a }
            );
          }, [s]);
        if (null == s) return null;
        let _ = async () => {
          let e = null != s ? o.Z.getRole(s.id, s.getEveryoneRoleId()) : void 0;
          if (null == e) return;
          let a = i.Od(e.permissions, x.mu);
          await (0, m.Gf)(s.id, [{ ...e, permissions: a }]), l();
        };
        return (0, r.jsxs)(t.ModalRoot, {
          transitionState: a,
          size: t.ModalSize.SMALL,
          className: E.modal,
          children: [
            (0, r.jsx)(N, { guild: s }),
            (0, r.jsx)(S, { permissions: d }),
            (0, r.jsx)(M, {
              onConfirm: _,
              onDismiss: () => {
                l();
              },
            }),
          ],
        });
      }
    },
    517130: function (e, s, a) {
      e.exports = {
        modal: "modal_d38cb2",
        header: "header_d38cb2",
        headerIconContainer: "headerIconContainer_d38cb2",
        acronym: "acronym_d38cb2",
        headerText: "headerText_d38cb2",
        table: "table_d38cb2",
        tableContainer: "tableContainer_d38cb2",
        tableHeader: "tableHeader_d38cb2",
        permissionsTable: "permissionsTable_d38cb2",
        permissionRow: "permissionRow_d38cb2",
        bullet: "bullet_d38cb2",
        bulletWarning: "bulletWarning_d38cb2 bullet_d38cb2",
        footer: "footer_d38cb2",
      };
    },
  },
]);
//# sourceMappingURL=d76ec3391f0c3c08da09.js.map
