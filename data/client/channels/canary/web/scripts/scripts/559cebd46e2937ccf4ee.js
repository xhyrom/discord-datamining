"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39627"],
  {
    193845: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return f;
          },
        }),
        t(653041);
      var n = t(200651),
        i = t(192379),
        r = t(149765),
        a = t(481060),
        l = t(422559),
        o = t(430824),
        d = t(768581),
        c = t(700785),
        m = t(764260),
        x = t(981631),
        u = t(135899),
        b = t(388032),
        h = t(979962);
      function p(e) {
        let { guild: s } = e,
          t = d.ZP.getGuildIconURL({ id: s.id, icon: s.icon, size: 120 });
        return (0, n.jsxs)(a.ModalHeader, {
          className: h.header,
          children: [
            (0, n.jsx)("div", {
              className: h.headerIconContainer,
              children:
                null != t
                  ? (0, n.jsx)(a.Avatar, {
                      src: t,
                      "aria-label": s.name,
                      size: a.AvatarSizes.SIZE_120,
                      className: h.__invalid_guildIcon,
                    })
                  : (0, n.jsx)("div", {
                      className: h.acronym,
                      children: s.acronym,
                    }),
            }),
            (0, n.jsxs)("div", {
              className: h.headerText,
              children: [
                (0, n.jsx)(a.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  children: b.intl.string(b.t.MatO7O),
                }),
                (0, n.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children: b.intl.string(b.t.VyPIen),
                }),
              ],
            }),
          ],
        });
      }
      let j = (e) => {
        if (e.toString() === x.Plq.MENTION_EVERYONE.toString())
          return b.intl.string(b.t.yCpsQ0);
        return (0, l.wt)(e);
      };
      function v(e) {
        let { permissions: s } = e;
        return (0, n.jsxs)("div", {
          className: h.tableContainer,
          children: [
            (0, n.jsx)(a.Text, {
              className: h.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children: b.intl.string(b.t["0WZKIy"]),
            }),
            (0, n.jsx)("div", {
              className: h.permissionsTable,
              children: s.map((e, s) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: h.permissionRow,
                    children: [
                      (0, n.jsx)("div", { className: h.bulletWarning }),
                      (0, n.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: j(e),
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
      function N(e) {
        let { permissions: s } = e;
        return (0, n.jsxs)("div", {
          className: h.tableContainer,
          children: [
            (0, n.jsx)(a.Text, {
              className: h.tableHeader,
              variant: "text-xs/semibold",
              color: "text-muted",
              children: b.intl.string(b.t.Yo5qlp),
            }),
            (0, n.jsx)("div", {
              className: h.permissionsTable,
              children: s.map((e, s) =>
                (0, n.jsxs)(
                  "div",
                  {
                    className: h.permissionRow,
                    children: [
                      (0, n.jsx)("div", { className: h.bullet }),
                      (0, n.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: j(e),
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
      function g(e) {
        let { permissions: s } = e,
          { enabledPermissions: t, disabledPermissions: i } = s;
        return (0, n.jsx)(a.ModalContent, {
          children: (0, n.jsxs)("div", {
            className: h.table,
            children: [
              (0, n.jsx)(v, { permissions: t }),
              (0, n.jsx)(N, { permissions: i }),
            ],
          }),
        });
      }
      function _(e) {
        let { onConfirm: s, onDismiss: t } = e;
        return (0, n.jsxs)(a.ModalFooter, {
          className: h.footer,
          children: [
            (0, n.jsx)(a.Button, {
              onClick: s,
              children: b.intl.string(b.t.iOSdAQ),
            }),
            (0, n.jsx)(a.Button, {
              look: a.Button.Looks.LINK,
              onClick: t,
              color: a.Button.Colors.PRIMARY,
              children: (0, n.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "header-primary",
                children: b.intl.string(b.t.gWQZvr),
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { guild: s, transitionState: t, onClose: l } = e,
          d = i.useMemo(() => {
            let e = [],
              t = [];
            return (
              u.$X.map((n) => {
                c.oz(n, s) ? e.push(n) : t.push(n);
              }),
              { enabledPermissions: e, disabledPermissions: t }
            );
          }, [s]);
        if (null == s) return null;
        let x = async () => {
          let e = null != s ? o.Z.getRole(s.id, s.getEveryoneRoleId()) : void 0;
          if (null == e) return;
          let t = r.Od(e.permissions, u.mu);
          await (0, m.Gf)(s.id, [{ ...e, permissions: t }]), l();
        };
        return (0, n.jsxs)(a.ModalRoot, {
          transitionState: t,
          size: a.ModalSize.SMALL,
          className: h.modal,
          children: [
            (0, n.jsx)(p, { guild: s }),
            (0, n.jsx)(g, { permissions: d }),
            (0, n.jsx)(_, {
              onConfirm: x,
              onDismiss: () => {
                l();
              },
            }),
          ],
        });
      }
    },
    979962: function (e, s, t) {
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
//# sourceMappingURL=559cebd46e2937ccf4ee.js.map
