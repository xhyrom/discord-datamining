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
      var n = i(200651),
        o = i(192379),
        r = i(120356),
        a = i.n(r),
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
        x = i(598077),
        R = i(314897),
        b = i(271383),
        j = i(430824),
        C = i(626135),
        g = i(63063),
        N = i(134433),
        _ = i(225104),
        k = i(981631),
        Z = i(388032),
        I = i(698948),
        y = i(795661);
      function A(e, l) {
        (0, d.openModalLazy)(async () => {
          let { default: o } = await Promise.all([
            i.e("56630"),
            i.e("82412"),
            i.e("83953"),
          ]).then(i.bind(i, 107807));
          return (i) => (0, n.jsx)(o, { role: e, guildId: l, ...i });
        });
      }
      l.default = function (e) {
        let { guildId: l, transitionState: r, onClose: D } = e,
          M = (0, t.e7)([j.Z], () => j.Z.getRoles(l)),
          S = (0, t.e7)([R.default], () => R.default.getId()),
          E = (0, t.e7)([b.ZP], () => b.ZP.getMember(l, S)),
          [H, P] = o.useState([]),
          T = (0, f.ZP)(),
          w = (0, h.Dt)();
        if (
          (o.useEffect(() => {
            if (0 !== H.length)
              C.default.track(k.rMx.PASSPORT_ENTRY_VIEWED, {
                role_ids: H.map((e) => {
                  let { role_id: l } = e;
                  return l;
                }),
                ...(0, p.hH)(l),
              });
          }, [l, H]),
          o.useEffect(() => {
            u.Z.getGuildRoleConnectionsConfigurations(l).then((e) => P(e));
          }, [l]),
          null == E)
        )
          return null;
        let O = Object.values(M).filter((e) => {
          var l;
          return (
            (null === (l = e.tags) || void 0 === l
              ? void 0
              : l.guild_connections) === null
          );
        });
        return (0, n.jsxs)(d.ModalRoot, {
          transitionState: r,
          "aria-labelledby": w,
          className: I.modal,
          children: [
            (0, n.jsxs)(d.ModalHeader, {
              separator: !1,
              children: [
                (0, n.jsx)(N.Z, { className: I.headerIcon, size: 24 }),
                (0, n.jsx)(d.Heading, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: Z.intl.string(Z.t.ghtnsr),
                }),
                (0, n.jsx)(d.ModalCloseButton, {
                  className: I.modalCloseButton,
                  onClick: D,
                }),
              ],
            }),
            (0, n.jsxs)(d.ModalContent, {
              className: I.container,
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: Z.intl.format(Z.t["Y+TsER"], {
                    helpdeskArticleUrl: g.Z.getArticleURL(
                      k.BhN.CONNECTION_DETAILS,
                    ),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: I.verifiedRoles,
                  children: O.map((e) => {
                    let r = E.roles.includes(e.id),
                      t = (function (e) {
                        let i = H.find((l) => {
                          let { role_id: i } = l;
                          return i === e;
                        });
                        if (null == i) return [];
                        let o = {};
                        for (let e of i.rules.flat()) {
                          let t;
                          if (null != e.application_id) {
                            var r;
                            let o =
                              null === (r = i.applications) || void 0 === r
                                ? void 0
                                : r[e.application_id];
                            t =
                              (null == o ? void 0 : o.bot) != null
                                ? (0, n.jsx)("img", {
                                    src: new x.Z(o.bot).getAvatarURL(l, 24),
                                    alt: "",
                                    className: a()(I.botAvatar, y.avatar),
                                  })
                                : null;
                          } else {
                            let l = m.Z.get(e.connection_type);
                            t = (0, n.jsx)("img", {
                              src: (0, s.ap)(T)
                                ? l.icon.lightSVG
                                : l.icon.darkSVG,
                              alt: "",
                              className: y.avatar,
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
                    return (0, n.jsxs)(
                      d.Clickable,
                      {
                        className: a()(
                          I.verifiedRole,
                          r ? I.verifiedRoleHasRole : null,
                        ),
                        onClick: r ? void 0 : () => A(e, l),
                        onContextMenu: r
                          ? (o) => {
                              var r, a, t;
                              return (
                                (r = l),
                                (a = e.id),
                                (t = o),
                                void (0, c.jW)(t, async () => {
                                  let { default: e } = await i
                                    .e("60079")
                                    .then(i.bind(i, 850902));
                                  return (l) =>
                                    (0, n.jsx)(e, {
                                      ...l,
                                      roleId: a,
                                      onLeaveRole: () =>
                                        u.Z.unassignGuildRoleConnection(r, a),
                                    });
                                })
                              );
                            }
                          : void 0,
                        children: [
                          r
                            ? (0, n.jsx)("div", {
                                className: I.roleCheckmark,
                                children: (0, n.jsx)(d.CheckmarkSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                              })
                            : null,
                          (0, n.jsx)(_.Z, { guildId: l, role: e, size: 24 }),
                          (0, n.jsxs)("div", {
                            className: I.verifiedRoleNameDescriptionContainer,
                            children: [
                              (0, n.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: I.verifiedRoleName,
                                children: e.name,
                              }),
                              void 0 !== e.description
                                ? (0, n.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: I.verifiedRoleDescription,
                                    children: e.description,
                                  })
                                : null,
                            ],
                          }),
                          (0, n.jsx)(v.Z, {
                            showUserPopout: !1,
                            guildId: l,
                            users: t.map(() => null),
                            renderUser: (e, l, i) =>
                              (0, n.jsx)(o.Fragment, { children: t[i] }, i),
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
      var n = i(200651);
      i(192379);
      var o = i(866442),
        r = i(91218),
        a = i(518738),
        t = i(134433),
        s = i(981631);
      function d(e) {
        var l;
        let { guildId: i, role: d, size: c, className: u } = e,
          f = (0, a.p9)({ guildId: i, roleId: d.id, size: c });
        return null != f
          ? (0, n.jsx)(r.Z, { className: u, ...f })
          : (0, n.jsx)(t.Z, {
              color:
                null !== (l = d.colorString) && void 0 !== l
                  ? l
                  : (0, o.Rf)(s.p6O),
              className: u,
              size: c,
            });
      }
    },
    698948: function (e, l, i) {
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
//# sourceMappingURL=dcd739c43741b9833991.js.map
