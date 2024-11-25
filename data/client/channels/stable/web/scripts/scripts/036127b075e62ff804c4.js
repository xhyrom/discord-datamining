"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78786"],
  {
    50474: function (e, i, o) {
      o.r(i),
        o.d(i, {
          default: function () {
            return y;
          },
        }),
        o(47120);
      var s = o(200651),
        t = o(192379),
        n = o(392711),
        r = o.n(n),
        a = o(481060),
        l = o(139387),
        d = o(479531),
        c = o(895924),
        m = o(581364),
        u = o(768581),
        p = o(821864),
        h = o(399860),
        x = o(995390),
        v = o(665578),
        E = o(388032),
        j = o(416510);
      function y(e) {
        let {
            applicationIcon: i,
            applicationId: o,
            applicationName: n,
            command: u,
            guildId: y,
            onClose: f,
            transitionState: C,
          } = e,
          [g, k] = t.useState(null),
          [B, I] = t.useState(!1),
          {
            originalApplicationPermissions: M,
            originalCommandPermissions: N,
            editedTargetPermissions: P,
            hasChanges: R,
            selectedPermissionCount: w,
          } = (0, x.Z)(y, o, u.id),
          A = t.useCallback(async () => {
            var e, i, s, t, n;
            if (!R) {
              f();
              return;
            }
            let a = r().difference(
                Object.keys(
                  null !== (s = u.permissions) && void 0 !== s ? s : {},
                ),
                Object.keys(P),
              ),
              l = r().omit({ ...P }, a),
              x = (0, m.bD)(y),
              v = (0, h.rE)(y, c.Kw.ROLE),
              E = (0, h.rE)(x, c.Kw.CHANNEL),
              j =
                null ===
                  (t =
                    null === (e = M[v]) || void 0 === e
                      ? void 0
                      : e.permission) ||
                void 0 === t ||
                t,
              b =
                null ===
                  (n =
                    null === (i = M[E]) || void 0 === i
                      ? void 0
                      : i.permission) ||
                void 0 === n ||
                n,
              C = Object.values(l).map((e) => ({
                id: e.id,
                permission: e.permission,
                type: e.type,
              }));
            k(null), I(!0);
            try {
              await p.U3({
                defaultEveryoneValue: j,
                defaultEverywhereValue: b,
                applicationId: o,
                commandId: u.id,
                guildId: y,
                permissions: C,
              }),
                I(!1),
                f();
            } catch (e) {
              k(new d.Z(e));
            }
            I(!1);
          }, [o, M, u.id, u.permissions, y, R, f, P, k, I]);
        t.useEffect(
          () => () => {
            p.Ui(u.id), l.Z.stopEditingCommandPermissions(u.id);
          },
          [u.id],
        );
        let _ = (0, h.gw)(u.type, u.displayName);
        return (0, s.jsxs)(a.ModalRoot, {
          "aria-label": E.intl.string(E.t["N+InBQ"]),
          size: a.ModalSize.MEDIUM,
          transitionState: C,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              separator: !1,
              className: j.modalHeader,
              children: [
                (0, s.jsx)(b, { icon: i, id: o, name: n }),
                (0, s.jsxs)("div", {
                  className: j.headerDescription,
                  children: [
                    (0, s.jsx)(a.Text, {
                      variant: "text-md/semibold",
                      children: _,
                    }),
                    (0, s.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: u.displayDescription,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(a.ModalContent, {
              className: j.modalBody,
              children: [
                null == g || g.hasFieldErrors()
                  ? null
                  : (0, s.jsx)(a.FormErrorBlock, {
                      children: g.getAnyErrorMessage(),
                    }),
                (0, s.jsx)(v.Z, {
                  applicationId: o,
                  commandId: u.id,
                  guildId: y,
                  inModal: !0,
                  originalApplicationPermissions: M,
                  originalCommandPermissions: N,
                  editedTargetPermissions: P,
                  selectedPermissionCount: w,
                }),
              ],
            }),
            (0, s.jsxs)(a.ModalFooter, {
              className: j.modalFooter,
              children: [
                (0, s.jsx)(a.Button, {
                  type: "submit",
                  disabled: B,
                  onClick: A,
                  color:
                    !0 === R ? a.Button.Colors.GREEN : a.Button.Colors.PRIMARY,
                  children: E.intl.string(E.t.R3BPHx),
                }),
                (0, s.jsx)(a.Button, {
                  onClick: f,
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.PRIMARY,
                  children: E.intl.string(E.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        let { icon: i, id: o } = e,
          t = u.ZP.getApplicationIconURL({ id: o, icon: i, size: 40 });
        return (0, s.jsx)(a.Avatar, {
          src: t,
          size: a.AvatarSizes.SIZE_40,
          "aria-hidden": !0,
        });
      }
    },
    416510: function (e, i, o) {
      e.exports = {
        headerDescription: "headerDescription_b5918e",
        modalBody: "modalBody_b5918e",
        modalFooter: "modalFooter_b5918e",
        modalHeader: "modalHeader_b5918e",
      };
    },
  },
]);
//# sourceMappingURL=036127b075e62ff804c4.js.map
