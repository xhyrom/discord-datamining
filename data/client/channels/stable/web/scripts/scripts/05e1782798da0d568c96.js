"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78786"],
  {
    50474: function (e, i, s) {
      s.r(i),
        s.d(i, {
          default: function () {
            return C;
          },
        }),
        s(47120);
      var o = s(735250),
        a = s(470079),
        t = s(392711),
        r = s.n(t),
        n = s(481060),
        d = s(139387),
        l = s(479531),
        c = s(895924),
        m = s(581364),
        u = s(768581),
        p = s(821864),
        h = s(399860),
        x = s(995390),
        E = s(665578),
        M = s(689938),
        v = s(519230);
      function C(e) {
        let {
            applicationIcon: i,
            applicationId: s,
            applicationName: t,
            command: u,
            guildId: C,
            onClose: j,
            transitionState: y,
          } = e,
          [b, N] = a.useState(null),
          [A, f] = a.useState(!1),
          {
            originalApplicationPermissions: g,
            originalCommandPermissions: k,
            editedTargetPermissions: P,
            hasChanges: S,
            selectedPermissionCount: _,
          } = (0, x.Z)(C, s, u.id),
          B = a.useCallback(async () => {
            var e, i, o, a, t;
            if (!S) {
              j();
              return;
            }
            let n = r().difference(
                Object.keys(
                  null !== (o = u.permissions) && void 0 !== o ? o : {},
                ),
                Object.keys(P),
              ),
              d = r().omit({ ...P }, n),
              x = (0, m.bD)(C),
              E = (0, h.rE)(C, c.Kw.ROLE),
              M = (0, h.rE)(x, c.Kw.CHANNEL),
              v =
                null ===
                  (a =
                    null === (e = g[E]) || void 0 === e
                      ? void 0
                      : e.permission) ||
                void 0 === a ||
                a,
              I =
                null ===
                  (t =
                    null === (i = g[M]) || void 0 === i
                      ? void 0
                      : i.permission) ||
                void 0 === t ||
                t,
              y = Object.values(d).map((e) => ({
                id: e.id,
                permission: e.permission,
                type: e.type,
              }));
            N(null), f(!0);
            try {
              await p.U3({
                defaultEveryoneValue: v,
                defaultEverywhereValue: I,
                applicationId: s,
                commandId: u.id,
                guildId: C,
                permissions: y,
              }),
                f(!1),
                j();
            } catch (e) {
              N(new l.Z(e));
            }
            f(!1);
          }, [s, g, u.id, u.permissions, C, S, j, P, N, f]);
        a.useEffect(
          () => () => {
            p.Ui(u.id), d.Z.stopEditingCommandPermissions(u.id);
          },
          [u.id],
        );
        let R = (0, h.gw)(u.type, u.displayName);
        return (0, o.jsxs)(n.ModalRoot, {
          "aria-label":
            M.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
          size: n.ModalSize.MEDIUM,
          transitionState: y,
          children: [
            (0, o.jsxs)(n.ModalHeader, {
              separator: !1,
              className: v.modalHeader,
              children: [
                (0, o.jsx)(I, { icon: i, id: s, name: t }),
                (0, o.jsxs)("div", {
                  className: v.headerDescription,
                  children: [
                    (0, o.jsx)(n.Text, {
                      variant: "text-md/semibold",
                      children: R,
                    }),
                    (0, o.jsx)(n.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: u.displayDescription,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(n.ModalContent, {
              className: v.modalBody,
              children: [
                null == b || b.hasFieldErrors()
                  ? null
                  : (0, o.jsx)(n.FormErrorBlock, {
                      children: b.getAnyErrorMessage(),
                    }),
                (0, o.jsx)(E.Z, {
                  applicationId: s,
                  commandId: u.id,
                  guildId: C,
                  inModal: !0,
                  originalApplicationPermissions: g,
                  originalCommandPermissions: k,
                  editedTargetPermissions: P,
                  selectedPermissionCount: _,
                }),
              ],
            }),
            (0, o.jsxs)(n.ModalFooter, {
              className: v.modalFooter,
              children: [
                (0, o.jsx)(n.Button, {
                  type: "submit",
                  disabled: A,
                  onClick: B,
                  color:
                    !0 === S ? n.Button.Colors.GREEN : n.Button.Colors.PRIMARY,
                  children: M.Z.Messages.SAVE,
                }),
                (0, o.jsx)(n.Button, {
                  onClick: j,
                  look: n.Button.Looks.LINK,
                  color: n.Button.Colors.PRIMARY,
                  children: M.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        let { icon: i, id: s } = e,
          a = u.ZP.getApplicationIconURL({ id: s, icon: i, size: 40 });
        return (0, o.jsx)(n.Avatar, {
          src: a,
          size: n.AvatarSizes.SIZE_40,
          "aria-hidden": !0,
        });
      }
    },
    519230: function (e, i, s) {
      e.exports = {
        headerDescription: "headerDescription_b5918e",
        modalBody: "modalBody_b5918e",
        modalFooter: "modalFooter_b5918e",
        modalHeader: "modalHeader_b5918e",
      };
    },
  },
]);
//# sourceMappingURL=05e1782798da0d568c96.js.map
