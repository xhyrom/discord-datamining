"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54597"],
  {
    173326: function (e) {
      e.exports = "/assets/5fd117394b8b03855f02.svg";
    },
    228643: function (e, t, n) {
      n.d(t, {
        L_: function () {
          return s;
        },
        nj: function () {
          return c;
        },
        sE: function () {
          return r;
        },
      });
      var i = n(544891),
        o = n(570140),
        a = n(480608),
        l = n(981631);
      function r(e, t) {
        i.tn
          .get({
            url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
            rejectWithError: !0,
          })
          .then((e) => {
            let n = [];
            e.body.length > 0 &&
              (n = e.body.map((e) =>
                e.map((e) => ({
                  connectionType: e.connection_type,
                  connectionMetadataField: e.connection_metadata_field,
                  applicationId: e.application_id,
                  operator: e.operator,
                  value: e.value,
                })),
              )),
              o.Z.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: t,
                roleConnectionConfigurations: n,
              });
          })
          .catch(() => {});
      }
      async function s(e, t, n) {
        let r = n.map((e) =>
            e.map((e) => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            })),
          ),
          s = await i.tn
            .put({
              url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
              body: 0 === r.length ? [] : r,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
            .then((e) => {
              let t = [];
              return (
                e.body.length > 0 &&
                  (t = e.body.map((e) =>
                    e.map((e) => ({
                      connectionType: e.connection_type,
                      connectionMetadataField: e.connection_metadata_field,
                      applicationId: e.application_id,
                      operator: e.operator,
                      value: e.value,
                    })),
                  )),
                t
              );
            }),
          c = await (0, a.H)(e, t, !1);
        null != c &&
          o.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: t,
            count: c,
          }),
          o.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: s,
          });
      }
      async function c() {
        return (
          await i.tn.get({
            url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1,
          })
        ).body;
      }
    },
    29022: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        }),
        n(47120),
        n(653041);
      var i,
        o,
        a = n(200651),
        l = n(192379),
        r = n(149765),
        s = n(442837),
        c = n(704215),
        d = n(692547),
        u = n(481060),
        _ = n(388905),
        m = n(434404),
        p = n(764260),
        I = n(422559),
        N = n(430824),
        E = n(768581),
        S = n(700785),
        h = n(645041),
        T = n(981631),
        x = n(921944),
        f = n(135899),
        C = n(388032),
        O = n(145175);
      function g(e) {
        let { guild: t, headerText: i, headerSubtext: o, step: l } = e,
          r = E.ZP.getGuildIconURL({ id: t.id, icon: t.icon, size: 120 });
        return (0, a.jsxs)(u.ModalHeader, {
          className: O.header,
          children: [
            (0, a.jsxs)("div", {
              className: O.headerIconContainer,
              children: [
                null != r
                  ? (0, a.jsx)(u.Avatar, {
                      src: r,
                      "aria-label": t.name,
                      size: u.AvatarSizes.SIZE_120,
                      className: O.__invalid_guildIcon,
                    })
                  : (0, a.jsx)("div", {
                      className: O.acronym,
                      children: t.acronym,
                    }),
                2 === l
                  ? (0, a.jsx)(u.CircleCheckIcon, {
                      size: "md",
                      className: O.greenPing,
                      color: d.Z.unsafe_rawColors.GREEN_360.css,
                      secondaryColor: d.Z.unsafe_rawColors.WHITE_100.css,
                    })
                  : (0, a.jsx)(_.Ee, { src: n(173326), className: O.redPing }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: O.headerText,
              children: [
                (0, a.jsx)(u.Heading, {
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  children: i,
                }),
                (0, a.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: "header-primary",
                  children: o,
                }),
              ],
            }),
          ],
        });
      }
      function R(e) {
        let { guild: t } = e,
          n = (0, s.e7)([N.Z], () => N.Z.getRole(t.id, t.getEveryoneRoleId()));
        if (null == n) return null;
        let { name: i, color: o } = n;
        return (0, a.jsxs)("span", {
          className: O.roleRow,
          children: [
            (0, a.jsx)(u.RoleDot, {
              className: O.roleDot,
              color: o.toString(),
              background: !1,
              tooltip: !1,
            }),
            (0, a.jsx)(u.Text, {
              className: O.roleName,
              variant: "text-sm/medium",
              color: "interactive-active",
              children: i,
            }),
          ],
        });
      }
      ((o = i || (i = {}))[(o.DEFAULT = 0)] = "DEFAULT"),
        (o[(o.SUBMITTING = 1)] = "SUBMITTING"),
        (o[(o.SUBMITTED = 2)] = "SUBMITTED");
      let L = (e) => {
        if (e.toString() === T.Plq.MENTION_EVERYONE.toString())
          return C.intl.string(C.t.yCpsQ0);
        return (0, I.wt)(e);
      };
      function v(e) {
        let { permissions: t, step: n } = e;
        return 2 === n
          ? null
          : (0, a.jsxs)("div", {
              className: O.tableContainer,
              children: [
                (0, a.jsx)(u.Text, {
                  className: O.tableHeader,
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children:
                    0 === n
                      ? C.intl.string(C.t["0WZKIy"])
                      : C.intl.string(C.t.xU8RDg),
                }),
                (0, a.jsx)("div", {
                  className: O.permissionsTable,
                  children: t.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: O.permissionRow,
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              0 === n ? O.bulletPositive : O.bulletWarning,
                          }),
                          (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-normal",
                            children: L(e),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            });
      }
      function j(e) {
        let { permissions: t, step: n } = e;
        return 0 === t.length && 2 !== n
          ? null
          : (2 === n && (t = f.$X),
            (0, a.jsxs)("div", {
              className: O.tableContainer,
              children: [
                (0, a.jsx)(u.Text, {
                  className: O.tableHeader,
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children:
                    2 === n
                      ? C.intl.string(C.t.FgMS6u)
                      : C.intl.string(C.t.Yo5qlp),
                }),
                (0, a.jsx)("div", {
                  className: O.permissionsTable,
                  children: t.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: O.permissionRow,
                        children: [
                          (0, a.jsx)("div", { className: O.bullet }),
                          (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: L(e),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }));
      }
      function b(e) {
        let { permissions: t, step: n } = e,
          { enabledPermissions: i, disabledPermissions: o } = t;
        return 0 === i.length && 2 !== n
          ? null
          : (0, a.jsxs)("div", {
              className: O.table,
              children: [
                2 !== n ? (0, a.jsx)(v, { permissions: i, step: n }) : null,
                (0, a.jsx)(j, { permissions: o, step: n }),
              ],
            });
      }
      function y(e) {
        let {
          guild: t,
          permissions: n,
          step: i,
          canEveryoneModerate: o,
          isDefaultNotificationsAllMessages: l,
        } = e;
        return (0, a.jsx)(u.ModalContent, {
          children: (0, a.jsxs)("div", {
            className: O.updatedForm,
            children: [
              l
                ? (0, a.jsxs)("div", {
                    className: O.checklistRow,
                    children: [
                      (0, a.jsx)(u.CircleCheckIcon, {
                        size: "md",
                        className: O.checklistIcon,
                        color: d.Z.unsafe_rawColors.GREEN_360.css,
                        secondaryColor: d.Z.unsafe_rawColors.WHITE_100.css,
                      }),
                      (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: C.intl.format(C.t.K8Eg4O, {
                          infoHook: () =>
                            (0, a.jsx)(u.Tooltip, {
                              text: C.intl.string(C.t["3h2WyM"]),
                              "aria-label": C.intl.string(C.t["3h2WyM"]),
                              children: (e) =>
                                (0, a.jsx)(u.CircleInformationIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: O.icon,
                                  ...e,
                                }),
                            }),
                        }),
                      }),
                    ],
                  })
                : null,
              o
                ? (0, a.jsxs)("div", {
                    className: O.checklistRow,
                    children: [
                      (0, a.jsx)(u.CircleCheckIcon, {
                        size: "md",
                        className: O.checklistIcon,
                        color: d.Z.unsafe_rawColors.GREEN_360.css,
                        secondaryColor: d.Z.unsafe_rawColors.WHITE_100.css,
                      }),
                      (0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: C.intl.string(C.t.LfeFFh),
                      }),
                      (0, a.jsx)(R, { guild: t }),
                    ],
                  })
                : null,
              (0, a.jsx)(b, { permissions: n, step: i }),
            ],
          }),
        });
      }
      function U(e) {
        let { onConfirm: t, onDismiss: n, canEveryoneModerate: i, step: o } = e;
        return (0, a.jsxs)(u.ModalFooter, {
          className: O.footer,
          children: [
            (0, a.jsx)(u.Button, {
              onClick: t,
              submitting: 1 === o,
              children:
                0 === o
                  ? i
                    ? C.intl.string(C.t.R7GC7e)
                    : C.intl.string(C.t.iOSdAQ)
                  : C.intl.string(C.t.mVuDq6),
            }),
            0 === o
              ? (0, a.jsx)(u.Button, {
                  look: u.Button.Looks.LINK,
                  onClick: n,
                  color: u.Button.Colors.PRIMARY,
                  children: (0, a.jsx)(u.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: C.intl.string(C.t.gWQZvr),
                  }),
                })
              : null,
          ],
        });
      }
      function G(e) {
        let {
            guild: t,
            canEveryoneModerate: n,
            isDefaultNotificationsAllMessages: i,
            transitionState: o,
            onClose: s,
          } = e,
          [d, _] = l.useState(0),
          I = l.useMemo(() => {
            let e = [],
              n = [];
            return (
              f.$X.map((i) => {
                S.oz(i, t) ? e.push(i) : n.push(i);
              }),
              { enabledPermissions: e, disabledPermissions: n }
            );
          }, [t]);
        if (null == t) return null;
        let E = () => {
            let e = N.Z.getRole(t.id, t.getEveryoneRoleId());
            if (null == e) return;
            let n = r.Od(e.permissions, f.mu);
            (0, p.Gf)(t.id, [{ ...e, permissions: n }]);
          },
          R = () => {
            m.Z.updateGuild({
              defaultMessageNotifications: T.bL.ONLY_MENTIONS,
            }),
              m.Z.saveGuild(t.id, {
                defaultMessageNotifications: T.bL.ONLY_MENTIONS,
              });
          },
          L = () => {
            n && E(), i && R();
          };
        return (0, a.jsxs)(u.ModalRoot, {
          transitionState: o,
          size: u.ModalSize.SMALL,
          className: O.modal,
          children: [
            (0, a.jsx)(g, {
              guild: t,
              headerText: n
                ? C.intl.string(C.t["7/ux19"])
                : C.intl.string(C.t["sRcn4+"]),
              headerSubtext: n
                ? C.intl.string(C.t.aliKPz)
                : C.intl.string(C.t.F4KDOD),
              step: d,
            }),
            (0, a.jsx)(y, {
              guild: t,
              permissions: I,
              step: d,
              canEveryoneModerate: n,
              isDefaultNotificationsAllMessages: i,
            }),
            (0, a.jsx)(U, {
              onConfirm: () => {
                var e, i;
                !n &&
                  (L(),
                  s(),
                  (0, h.Qd)(
                    c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                    null !== (e = null == t ? void 0 : t.id) && void 0 !== e
                      ? e
                      : "",
                    !0,
                    x.L.PRIMARY,
                  )),
                  0 === d
                    ? (_(1), setTimeout(() => _(2), 3e3))
                    : 2 === d &&
                      (L(),
                      s(),
                      (0, h.Qd)(
                        c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                        null !== (i = null == t ? void 0 : t.id) && void 0 !== i
                          ? i
                          : "",
                        !0,
                        x.L.PRIMARY,
                      ));
              },
              onDismiss: () => {
                s(),
                  (0, h.Qd)(
                    c.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE,
                    t.id,
                    !0,
                    x.L.DISMISS,
                  );
              },
              step: d,
              canEveryoneModerate: n,
            }),
          ],
        });
      }
    },
    764260: function (e, t, n) {
      n.d(t, {
        Gf: function () {
          return I;
        },
        OW: function () {
          return u;
        },
        S1: function () {
          return r;
        },
        TY: function () {
          return c;
        },
        Uv: function () {
          return d;
        },
        _l: function () {
          return m;
        },
        d_: function () {
          return p;
        },
        lO: function () {
          return s;
        },
        sI: function () {
          return l;
        },
        we: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(570140),
        o = n(749210),
        a = n(228643);
      function l(e) {
        i.Z.dispatch({ type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles: e });
      }
      function r() {
        i.Z.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
      }
      function s(e, t, n) {
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
          id: e,
          flag: t,
          allow: n,
        });
      }
      function c(e) {
        i.Z.dispatch({ type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id: e });
      }
      function d(e, t) {
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
          id: e,
          name: t,
        });
      }
      function u(e, t) {
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
          id: e,
          color: t,
        });
      }
      function _(e, t, n) {
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
          id: e,
          hoist: t,
          mentionable: n,
        });
      }
      function m(e, t, n) {
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
          id: e,
          icon: t,
          unicodeEmoji: n,
        });
      }
      function p(e, t) {
        i.Z.dispatch({
          type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
          roleId: e,
          roleConnectionConfigurations: t,
        });
      }
      async function I(e, t, n, l, r) {
        i.Z.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
        try {
          let i = async () => {
            if (null == t || 0 === t.length) return;
            let n = t.pop();
            if (null == n || "" === n.name) return i();
            await o.Z.updateRole(e, n.id, {
              name: n.name,
              description: n.description,
              permissions: n.permissions,
              color: n.color,
              hoist: n.hoist,
              mentionable: n.mentionable,
              icon: n.icon,
              unicodeEmoji: n.unicodeEmoji,
            }).then(i, i);
          };
          if (
            (null != n && n.length > 0
              ? await o.Z.batchRoleUpdate(e, n).then(i, i)
              : await i(),
            null != r && null != l)
          )
            for await (let t of l) {
              let n = r.get(t);
              await (0, a.L_)(e, t, null != n ? n : []);
            }
        } catch (e) {
          var s, c;
          i.Z.dispatch({
            type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
            message:
              null !==
                (c =
                  null === (s = e.body) || void 0 === s ? void 0 : s.message) &&
              void 0 !== c
                ? c
                : Object.values(e.body)[0],
          });
          return;
        }
        i.Z.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
      }
    },
    145175: function (e, t, n) {
      e.exports = {
        modal: "modal_ce608a",
        header: "header_ce608a",
        headerIconContainer: "headerIconContainer_ce608a",
        acronym: "acronym_ce608a",
        redPing: "redPing_ce608a ping_ce608a",
        greenPing: "greenPing_ce608a ping_ce608a",
        headerText: "headerText_ce608a",
        updatedForm: "updatedForm_ce608a",
        checklistRow: "checklistRow_ce608a",
        checklistIcon: "checklistIcon_ce608a",
        icon: "icon_ce608a",
        roleRow: "roleRow_ce608a",
        roleDot: "roleDot_ce608a",
        roleName: "roleName_ce608a",
        table: "table_ce608a",
        tableContainer: "tableContainer_ce608a",
        tableHeader: "tableHeader_ce608a",
        permissionsTable: "permissionsTable_ce608a",
        permissionRow: "permissionRow_ce608a",
        bullet: "bullet_ce608a",
        bulletWarning: "bulletWarning_ce608a bullet_ce608a",
        bulletPositive: "bulletPositive_ce608a bullet_ce608a",
        footer: "footer_ce608a",
      };
    },
  },
]);
//# sourceMappingURL=99eef52d90d26f0421b0.js.map
