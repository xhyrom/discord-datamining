"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40897"],
  {
    507294: function (e, l, i) {
      i.r(l), i(47120), i(536091);
      var a = i(735250),
        r = i(470079),
        o = i(120356),
        n = i.n(o),
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
        E = i(516920),
        I = i(39368);
      l.default = function (e) {
        let { guildId: l, transitionState: o, onClose: O } = e,
          A = (0, t.e7)([x.Z], () => x.Z.getRoles(l)),
          S = (0, t.e7)([R.default], () => R.default.getId()),
          L = (0, t.e7)([_.ZP], () => _.ZP.getMember(l, S)),
          [M, y] = r.useState([]),
          T = (0, f.ZP)(),
          D = (0, h.Dt)();
        if (
          (r.useEffect(() => {
            if (0 !== M.length)
              C.default.track(k.rMx.PASSPORT_ENTRY_VIEWED, {
                role_ids: M.map((e) => {
                  let { role_id: l } = e;
                  return l;
                }),
                ...(0, p.hH)(l),
              });
          }, [l, M]),
          r.useEffect(() => {
            u.Z.getGuildRoleConnectionsConfigurations(l).then((e) => y(e));
          }, [l]),
          null == L)
        )
          return null;
        let H = Object.values(A).filter((e) => {
          var l;
          return (
            (null === (l = e.tags) || void 0 === l
              ? void 0
              : l.guild_connections) === null
          );
        });
        return (0, a.jsxs)(d.ModalRoot, {
          transitionState: o,
          "aria-labelledby": D,
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
                  children: H.map((e) => {
                    let o = L.roles.includes(e.id),
                      t = (function (e) {
                        let i = M.find((l) => {
                          let { role_id: i } = l;
                          return i === e;
                        });
                        if (null == i) return [];
                        let r = {};
                        for (let e of i.rules.flat()) {
                          let t;
                          if (null != e.application_id) {
                            var o;
                            let r =
                              null === (o = i.applications) || void 0 === o
                                ? void 0
                                : o[e.application_id];
                            t =
                              (null == r ? void 0 : r.bot) != null
                                ? (0, a.jsx)("img", {
                                    src: new N.Z(r.bot).getAvatarURL(l, 24),
                                    alt: "",
                                    className: n()(E.botAvatar, I.avatar),
                                  })
                                : null;
                          } else {
                            let l = m.Z.get(e.connection_type);
                            t = (0, a.jsx)("img", {
                              src: (0, s.ap)(T)
                                ? l.icon.lightSVG
                                : l.icon.darkSVG,
                              alt: "",
                              className: I.avatar,
                            });
                          }
                          if (null != t)
                            r[
                              ""
                                .concat(e.connection_type, ":")
                                .concat(e.application_id)
                            ] = t;
                        }
                        return Object.values(r);
                      })(e.id);
                    return (0, a.jsxs)(
                      d.Clickable,
                      {
                        className: n()(
                          E.verifiedRole,
                          o ? E.verifiedRoleHasRole : null,
                        ),
                        onClick: o
                          ? void 0
                          : () => {
                              var r, o;
                              return (
                                (r = e),
                                (o = l),
                                void (0, d.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                    i.e("12661"),
                                    i.e("90537"),
                                  ]).then(i.bind(i, 107807));
                                  return (l) =>
                                    (0, a.jsx)(e, {
                                      role: r,
                                      guildId: o,
                                      ...l,
                                    });
                                })
                              );
                            },
                        onContextMenu: o
                          ? (r) => {
                              var o, n, t;
                              return (
                                (o = l),
                                (n = e.id),
                                (t = r),
                                void (0, c.jW)(t, async () => {
                                  let { default: e } = await i
                                    .e("60079")
                                    .then(i.bind(i, 850902));
                                  return (l) =>
                                    (0, a.jsx)(e, {
                                      ...l,
                                      roleId: n,
                                      onLeaveRole: () =>
                                        u.Z.unassignGuildRoleConnection(o, n),
                                    });
                                })
                              );
                            }
                          : void 0,
                        children: [
                          o
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
                              (0, a.jsx)(r.Fragment, { children: t[i] }, i),
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
      var r = i(866442),
        o = i(91218),
        n = i(518738),
        t = i(134433),
        s = i(981631);
      function d(e) {
        var l;
        let { guildId: i, role: d, size: c, className: u } = e,
          f = (0, n.p9)({ guildId: i, roleId: d.id, size: c });
        return null != f
          ? (0, a.jsx)(o.Z, { className: u, ...f })
          : (0, a.jsx)(t.Z, {
              color:
                null !== (l = d.colorString) && void 0 !== l
                  ? l
                  : (0, r.Rf)(s.p6O),
              className: u,
              size: c,
            });
      }
    },
    516920: function (e, l, i) {
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
//# sourceMappingURL=8f807ec3b0d10da8ef76.js.map
