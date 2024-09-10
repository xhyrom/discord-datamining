"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40897"],
  {
    507294: function (e, l, i) {
      i.r(l),
        i.d(l, {
          openGuildRoleConnectionsConnectAccountModal: function () {
            return A;
          },
        }),
        i(47120),
        i(536091);
      var a = i(735250),
        o = i(470079),
        n = i(120356),
        r = i.n(n),
        t = i(442837),
        s = i(780384),
        d = i(481060),
        c = i(239091),
        u = i(749210),
        f = i(410030),
        m = i(726542),
        v = i(884338),
        p = i(367907),
        h = i(313201),
        N = i(598077),
        R = i(314897),
        _ = i(271383),
        x = i(430824),
        C = i(626135),
        b = i(63063),
        j = i(134433),
        g = i(225104),
        k = i(981631),
        Z = i(689938),
        E = i(140167),
        I = i(621925);
      function A(e, l) {
        (0, d.openModalLazy)(async () => {
          let { default: o } = await Promise.all([
            i.e("82412"),
            i.e("18993"),
          ]).then(i.bind(i, 107807));
          return (i) => (0, a.jsx)(o, { role: e, guildId: l, ...i });
        });
      }
      l.default = function (e) {
        let { guildId: l, transitionState: n, onClose: O } = e,
          M = (0, t.e7)([x.Z], () => x.Z.getRoles(l)),
          S = (0, t.e7)([R.default], () => R.default.getId()),
          L = (0, t.e7)([_.ZP], () => _.ZP.getMember(l, S)),
          [y, T] = o.useState([]),
          D = (0, f.ZP)(),
          H = (0, h.Dt)();
        if (
          (o.useEffect(() => {
            if (0 !== y.length)
              C.default.track(k.rMx.PASSPORT_ENTRY_VIEWED, {
                role_ids: y.map((e) => {
                  let { role_id: l } = e;
                  return l;
                }),
                ...(0, p.hH)(l),
              });
          }, [l, y]),
          o.useEffect(() => {
            u.Z.getGuildRoleConnectionsConfigurations(l).then((e) => T(e));
          }, [l]),
          null == L)
        )
          return null;
        let P = Object.values(M).filter((e) => {
          var l;
          return (
            (null === (l = e.tags) || void 0 === l
              ? void 0
              : l.guild_connections) === null
          );
        });
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: n,
          "aria-labelledby": H,
          className: E.modal,
          children: [
            (0, a.jsxs)(d.ModalHeader, {
              separator: !1,
              children: [
                (0, a.jsx)(j.Z, { className: E.headerIcon, size: 24 }),
                (0, a.jsx)(d.Heading, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: Z.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                }),
                (0, a.jsx)(d.ModalCloseButton, {
                  className: E.modalCloseButton,
                  onClick: O,
                }),
              ],
            }),
            (0, a.jsxs)(d.ModalContent, {
              className: E.container,
              children: [
                (0, a.jsx)(d.Heading, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children:
                    Z.Z.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format(
                      {
                        helpdeskArticleUrl: b.Z.getArticleURL(
                          k.BhN.CONNECTION_DETAILS,
                        ),
                      },
                    ),
                }),
                (0, a.jsx)("div", {
                  className: E.verifiedRoles,
                  children: P.map((e) => {
                    let n = L.roles.includes(e.id),
                      t = (function (e) {
                        let i = y.find((l) => {
                          let { role_id: i } = l;
                          return i === e;
                        });
                        if (null == i) return [];
                        let o = {};
                        for (let e of i.rules.flat()) {
                          let t;
                          if (null != e.application_id) {
                            var n;
                            let o =
                              null === (n = i.applications) || void 0 === n
                                ? void 0
                                : n[e.application_id];
                            t =
                              (null == o ? void 0 : o.bot) != null
                                ? (0, a.jsx)("img", {
                                    src: new N.Z(o.bot).getAvatarURL(l, 24),
                                    alt: "",
                                    className: r()(E.botAvatar, I.avatar),
                                  })
                                : null;
                          } else {
                            let l = m.Z.get(e.connection_type);
                            t = (0, a.jsx)("img", {
                              src: (0, s.ap)(D)
                                ? l.icon.lightSVG
                                : l.icon.darkSVG,
                              alt: "",
                              className: I.avatar,
                            });
                          }
                          if (null != t)
                            o[
                              ""
                                .concat(e.connection_type, ":")
                                .concat(e.application_id)
                            ] = t;
                        }
                        return Object.values(o);
                      })(e.id);
                    return (0, a.jsxs)(
                      d.Clickable,
                      {
                        className: r()(
                          E.verifiedRole,
                          n ? E.verifiedRoleHasRole : null,
                        ),
                        onClick: n ? void 0 : () => A(e, l),
                        onContextMenu: n
                          ? (o) => {
                              var n, r, t;
                              return (
                                (n = l),
                                (r = e.id),
                                (t = o),
                                void (0, c.jW)(t, async () => {
                                  let { default: e } = await i
                                    .e("60079")
                                    .then(i.bind(i, 850902));
                                  return (l) =>
                                    (0, a.jsx)(e, {
                                      ...l,
                                      roleId: r,
                                      onLeaveRole: () =>
                                        u.Z.unassignGuildRoleConnection(n, r),
                                    });
                                })
                              );
                            }
                          : void 0,
                        children: [
                          n
                            ? (0, a.jsx)("div", {
                                className: E.roleCheckmark,
                                children: (0, a.jsx)(d.CheckmarkSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                              })
                            : null,
                          (0, a.jsx)(g.Z, { guildId: l, role: e, size: 24 }),
                          (0, a.jsxs)("div", {
                            className: E.verifiedRoleNameDescriptionContainer,
                            children: [
                              (0, a.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: E.verifiedRoleName,
                                children: e.name,
                              }),
                              void 0 !== e.description
                                ? (0, a.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: E.verifiedRoleDescription,
                                    children: e.description,
                                  })
                                : null,
                            ],
                          }),
                          (0, a.jsx)(v.Z, {
                            showUserPopout: !1,
                            guildId: l,
                            users: t.map(() => null),
                            renderUser: (e, l, i) =>
                              (0, a.jsx)(o.Fragment, { children: t[i] }, i),
                            max: 3,
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    225104: function (e, l, i) {
      i.d(l, {
        Z: function () {
          return d;
        },
      });
      var a = i(735250);
      i(470079);
      var o = i(866442),
        n = i(91218),
        r = i(518738),
        t = i(134433),
        s = i(981631);
      function d(e) {
        var l;
        let { guildId: i, role: d, size: c, className: u } = e,
          f = (0, r.p9)({ guildId: i, roleId: d.id, size: c });
        return null != f
          ? (0, a.jsx)(n.Z, { className: u, ...f })
          : (0, a.jsx)(t.Z, {
              color:
                null !== (l = d.colorString) && void 0 !== l
                  ? l
                  : (0, o.Rf)(s.p6O),
              className: u,
              size: c,
            });
      }
    },
    140167: function (e, l, i) {
      e.exports = {
        modal: "modal_b8f561",
        container: "container_b8f561",
        headerIcon: "headerIcon_b8f561",
        modalCloseButton: "modalCloseButton_b8f561",
        verifiedRoles: "verifiedRoles_b8f561",
        verifiedRole: "verifiedRole_b8f561",
        verifiedRoleNameDescriptionContainer:
          "verifiedRoleNameDescriptionContainer_b8f561",
        verifiedRoleName: "verifiedRoleName_b8f561",
        verifiedRoleDescription: "verifiedRoleDescription_b8f561",
        verifiedRoleHasRole: "verifiedRoleHasRole_b8f561",
        roleCheckmark: "roleCheckmark_b8f561",
        botAvatar: "botAvatar_b8f561",
      };
    },
  },
]);
//# sourceMappingURL=06758c0fc2e1bac5a468.js.map
