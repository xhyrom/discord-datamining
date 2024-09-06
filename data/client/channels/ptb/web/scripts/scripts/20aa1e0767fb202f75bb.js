"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14203"],
  {
    914814: function (e) {
      e.exports = "/assets/bb9dbec63310ef1d5269.svg";
    },
    370392: function (e) {
      e.exports = "/assets/56b4ca8deff0b44cbc6f.svg";
    },
    790904: function (e) {
      e.exports = "/assets/a4b4fa4048e7bbfd121f.svg";
    },
    609182: function (e) {
      e.exports = "/assets/bf1e6089054735950c07.svg";
    },
    893916: function (e) {
      e.exports = "/assets/067a6d87ce798abe8173.svg";
    },
    408942: function (e) {
      e.exports = "/assets/7436a09f14ccab95db39.svg";
    },
    62640: function (e) {
      e.exports = "/assets/c61fe8d4e58fa62f15fb.svg";
    },
    639933: function (e) {
      e.exports = "/assets/f24b23296e9c6847e7f4.svg";
    },
    509399: function (e) {
      e.exports = "/assets/df20f137da47b3b453cd.svg";
    },
    995648: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(481060),
        o = t(422559),
        r = t(812666);
      function d(e) {
        let {
          grantedPermissions: n,
          disabledPermissions: t,
          grantedPermissionsHeader: a,
          disabledPermissionsHeader: d,
          className: c,
        } = e;
        return (0, i.jsxs)("div", {
          className: s()(r.list, c),
          children: [
            null != n && n.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != a
                      ? (0, i.jsx)(l.FormTitle, {
                          className: r.permissionHeader,
                          children: a,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: r.container,
                      children: n.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: r.permission,
                            children: [
                              (0, i.jsx)(l.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: r.check,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, o.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            null != t && t.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != d
                      ? (0, i.jsx)(l.FormTitle, {
                          className: r.permissionHeader,
                          children: d,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: r.container,
                      children: t.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: r.permission,
                            children: [
                              (0, i.jsx)(l.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: r.cross,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, o.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    144991: function (e, n, t) {
      t(411104);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(149765),
        r = t(481060),
        d = t(208884),
        c = t(453628),
        u = t(996987),
        I = t(262401),
        m = t(224499);
      class _ extends a.PureComponent {
        getOverwriteValue(e) {
          let { allow: n, deny: t } = this.props;
          if (null == n || null == t)
            throw Error(
              "PermissionsForm.getOverwriteValue: Invalid allow or deny props",
            );
          return o.e$(n, e)
            ? c.y.ALLOW
            : o.e$(t, e)
              ? c.y.DENY
              : c.y.PASSTHROUGH;
        }
        getPermissionValue(e, n) {
          return o.e$(n, e);
        }
        handleChange(e, n) {
          let { onChange: t } = this.props;
          t(e, n);
        }
        renderDisabledIndicator(e) {
          return (0, i.jsx)(r.Tooltip, {
            text: e,
            position: "top",
            color: r.Tooltip.Colors.RED,
            children: (e) =>
              (0, i.jsx)("span", {
                ...e,
                children: (0, i.jsx)(r.DenyIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: I.icon,
                }),
              }),
          });
        }
        renderComponent(e) {
          let { title: n, description: t, helpdeskArticleId: a, flag: s } = e,
            { permissions: o, locked: c, permissionRender: m } = this.props,
            _ = null == m ? void 0 : m(s),
            N = !!(c || _),
            E = "string" == typeof _ ? this.renderDisabledIndicator(_) : null,
            T = l()({ [I.title]: null != E });
          return null == o
            ? (0, i.jsxs)(
                u.Z,
                {
                  disabled: N,
                  value: this.getOverwriteValue(s),
                  onChange: (e) => this.handleChange(s, e),
                  note: (0, d._u)(t),
                  helpdeskArticleId: a,
                  children: [
                    E,
                    (0, i.jsx)("span", { className: T, children: n }),
                  ],
                },
                String(s),
              )
            : (0, i.jsxs)(
                r.FormSwitch,
                {
                  disabled: N,
                  value: this.getPermissionValue(s, o),
                  onChange: (e) => this.handleChange(s, e),
                  note: (0, d._u)(t),
                  children: [
                    E,
                    (0, i.jsx)("span", { className: T, children: n }),
                  ],
                },
                String(s),
              );
        }
        render() {
          let { spec: e, className: n } = this.props;
          return (0, i.jsx)(r.FormSection, {
            className: n,
            children: (0, i.jsxs)(r.HeadingLevel, {
              component: (0, i.jsx)(r.FormTitle, {
                tag: r.FormTitleTags.H5,
                className:
                  null != e.description ? m.marginBottom8 : m.marginBottom20,
                children: e.title,
              }),
              children: [
                null != e.description &&
                  (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: m.marginBottom20,
                    children: e.description,
                  }),
                e.permissions.map(this.renderComponent, this),
              ],
            }),
          });
        }
      }
      n.Z = _;
    },
    228643: function (e, n, t) {
      t.d(n, {
        L_: function () {
          return r;
        },
        nj: function () {
          return d;
        },
        sE: function () {
          return o;
        },
      });
      var i = t(544891),
        a = t(570140),
        s = t(480608),
        l = t(981631);
      function o(e, n) {
        i.tn
          .get({ url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n) })
          .then((e) => {
            let t = [];
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
              a.Z.dispatch({
                type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                roleId: n,
                roleConnectionConfigurations: t,
              });
          })
          .catch(() => {});
      }
      async function r(e, n, t) {
        let o = t.map((e) =>
            e.map((e) => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            })),
          ),
          r = await i.tn
            .put({
              url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
              body: 0 === o.length ? [] : o,
              oldFormErrors: !0,
            })
            .then((e) => {
              let n = [];
              return (
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
                n
              );
            }),
          d = await (0, s.H)(e, n, !1);
        null != d &&
          a.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: n,
            count: d,
          }),
          a.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: n,
            roleConnectionConfigurations: r,
          });
      }
      async function d() {
        return (
          await i.tn.get({ url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS })
        ).body;
      }
    },
    325476: function (e, n, t) {
      var i,
        a,
        s = t(735250),
        l = t(470079),
        o = t(120356),
        r = t.n(o),
        d = t(481060),
        c = t(600164),
        u = t(811692);
      function I(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class m extends (i = l.PureComponent) {
        render() {
          let { scrollable: e, ...n } = this.props;
          return e
            ? (0, s.jsx)("aside", {
                className: u.sidebarScrollable,
                children: (0, s.jsx)(d.Scroller, {
                  fade: !0,
                  className: u.scroller,
                  children: (0, s.jsx)(c.Z.Child, { ...n, wrap: !0 }),
                }),
              })
            : (0, s.jsx)(c.Z.Child, { ...n, wrap: !0 });
        }
      }
      I(m, "defaultProps", {
        basis: 232,
        grow: 0,
        shrink: 0,
        className: u.sidebar,
      });
      class _ extends l.PureComponent {
        render() {
          let { className: e, ...n } = this.props;
          return (0, s.jsx)(c.Z.Child, {
            className: r()(u.content, e),
            wrap: !0,
            ...n,
          });
        }
      }
      class N extends (a = l.PureComponent) {
        render() {
          return (0, s.jsx)(c.Z, { ...this.props });
        }
      }
      I(N, "defaultProps", {
        className: u.layout,
        direction: c.Z.Direction.HORIZONTAL,
        justify: c.Z.Justify.START,
        align: c.Z.Align.START,
        wrap: c.Z.Wrap.NO_WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
      }),
        I(N, "Direction", c.Z.Direction),
        I(N, "Justify", c.Z.Justify),
        I(N, "Align", c.Z.Align),
        I(N, "Wrap", c.Z.Wrap),
        I(N, "Sidebar", m),
        I(N, "Content", _),
        (n.ZP = N);
    },
    603211: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(225857),
        s = t(290843);
      function l(e) {
        let {
            type: n,
            index: t,
            optionId: l,
            onDragStart: o,
            onDragComplete: r,
            onDragReset: d,
          } = e,
          [c, u] = i.useState(!1),
          [, I] = (0, a.c)({
            type: n,
            item: () => (o(l), { id: l, position: t }),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, n) => {
              let t = n.getDropResult();
              if (null == t) {
                d();
                return;
              }
              r(t.optionId);
            },
          }),
          [{ dragSourcePosition: m }, _] = (0, s.L)({
            accept: n,
            canDrop: () => !0,
            collect: (e) => {
              let n = e.getItem();
              return null != n && e.isOver() && e.canDrop()
                ? { dragSourcePosition: n.position }
                : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: l }),
          });
        return { drag: I, dragSourcePosition: m, drop: _, setIsDraggable: u };
      }
    },
    710344: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(47120);
      var i = t(470079);
      function a(e, n) {
        let [t, a] = i.useState(null),
          s = i.useCallback((e) => {
            a(e);
          }, []),
          l = i.useCallback(() => {
            a(null);
          }, []),
          o = i.useCallback(
            (i) => {
              l();
              let a = e.find((e) => {
                  let { id: n } = e;
                  return t === n;
                }),
                s = e.find((e) => {
                  let { id: n } = e;
                  return i === n;
                });
              if (null == a || null == s || a === s) return;
              let o = [...e],
                r = o.indexOf(a),
                d = o.indexOf(s),
                c = d - r > 0 ? 1 : 0;
              o.splice(r, 1), (d = o.indexOf(s)), o.splice(d + c, 0, a), n(o);
            },
            [e, t, l, n],
          );
        return {
          draggingId: t,
          handleDragStart: s,
          handleDragReset: l,
          handleDragComplete: o,
        };
      }
    },
    741247: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
          useHasGuildRoleItems: function () {
            return r;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(239091),
        l = t(241635),
        o = t(689938);
      function r(e, n) {
        return (0, l.Z)(e, n).length > 0;
      }
      function d(e) {
        let { role: n, guild: t, onSelect: r } = e,
          d = (0, l.Z)(t, n);
        return 0 === d.length
          ? null
          : (0, i.jsx)(a.Menu, {
              navId: "guild-settings-role-context",
              "aria-label": o.Z.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
              onClose: s.Zy,
              onSelect: r,
              children: d,
            });
      }
    },
    241635: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(653041);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(749210),
        o = t(240872),
        r = t(605436),
        d = t(228643),
        c = t(299206),
        u = t(496675),
        I = t(867108),
        m = t(689938);
      function _(e, n) {
        var t;
        let _ = (0, a.e7)([u.Z], () => {
            let t = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, t, n);
          }),
          N = [],
          E = (0, I.Z)(e, n);
        null != E && N.push(E);
        let T = (0, c.Z)({ id: n.id, label: m.Z.Messages.COPY_ID_ROLE });
        null != T && N.push(T);
        let h =
            (null === (t = n.tags) || void 0 === t
              ? void 0
              : t.guild_connections) === null,
          g = n.managed && !h,
          p = null != n && (0, r.pM)(e.id, n.id);
        return (
          !_ &&
            !g &&
            !p &&
            N.push(
              (0, i.jsx)(
                s.MenuGroup,
                {
                  children: (0, i.jsx)(s.MenuItem, {
                    id: "delete-role",
                    label: m.Z.Messages.DELETE,
                    color: "danger",
                    icon: s.TrashIcon,
                    action: () => {
                      o.Z.show({
                        title: m.Z.Messages.SETTINGS_ROLES_DELETE_TITLE,
                        body: m.Z.Messages.SETTINGS_ROLES_DELETE_BODY.format({
                          name: n.name,
                        }),
                        cancelText: m.Z.Messages.CANCEL,
                        onConfirm: async () => {
                          h && (await (0, d.L_)(e.id, n.id, [])),
                            l.Z.deleteRole(e.id, n.id);
                        },
                      });
                    },
                  }),
                },
                "delete-role",
              ),
            ),
          N
        );
      }
    },
    867108: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        l = t(434404),
        o = t(962086),
        r = t(225675),
        d = t(496675),
        c = t(981631),
        u = t(689938);
      function I(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : c.pNK.ROLES;
        return (0, a.e7)([d.Z], () => d.Z.canImpersonateRole(e, n))
          ? (0, i.jsx)(
              s.MenuItem,
              {
                id: "view-as-role",
                label: u.Z.Messages.VIEW_AS_ROLE,
                icon: s.ArrowSmallRightIcon,
                action: () => {
                  l.Z.close(),
                    (0, o.iD)(e.id, {
                      type: r.z.ROLES,
                      roles: { [n.id]: n },
                      returnToSection: t,
                    });
                },
              },
              "view-as-role",
            )
          : null;
      }
    },
    369994: function (e, n, t) {
      t.d(n, {
        C4: function () {
          return N;
        },
        Fi: function () {
          return _;
        },
        KK: function () {
          return u;
        },
        f6: function () {
          return I;
        },
        n: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(913527),
        a = t.n(i),
        s = t(544891),
        l = t(367907),
        o = t(434404),
        r = t(430824),
        d = t(626135),
        c = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, l.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function I(e, n) {
        let t = new Set(e.features);
        t.has(c.oNc.COMMUNITY)
          ? n
            ? t.delete(c.oNc.RAID_ALERTS_DISABLED)
            : t.add(c.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(c.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS),
          await o.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function m(e, n, t, i) {
        let l = a()().add(i, "hours").toISOString();
        return await s.tn.put({
          url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? l : null,
            dms_disabled_until: t ? l : null,
          },
        });
      }
      async function _(e, n, t) {
        let i = r.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await s.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function N(e) {
        let n = r.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await s.tn.post({ url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
      }
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return d;
        },
        N8: function () {
          return r;
        },
      });
      var i = t(442837);
      t(467319);
      var a = t(496675),
        s = t(533244),
        l = t(487419),
        o = t(981631);
      function r(e) {
        let n = (0, i.e7)(
            [a.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : a.Z;
                return (
                  n.can(o.Plq.BAN_MEMBERS, e) ||
                  n.can(o.Plq.KICK_MEMBERS, e) ||
                  n.can(o.Plq.MANAGE_GUILD, e)
                );
              })(e, a.Z),
            [e],
          ),
          t = (0, i.e7)(
            [l.Z],
            () => (null != e ? l.Z.getGuildIncident(e.id) : null),
            [e],
          );
        return !(null != t && (0, s.i9)(t)) && n;
      }
      function d(e) {
        return (0, i.e7)(
          [a.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : a.Z;
              return n.can(o.Plq.MANAGE_GUILD, e);
            })(e, a.Z),
          [e],
        );
      }
    },
    821312: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(831209),
        r = t(481060),
        d = t(367907),
        c = t(177862),
        u = t(981631),
        I = t(689938),
        m = t(715218);
      function _(e) {
        let { guildId: n, transitionState: t, onClose: s } = e,
          [_, N] = a.useState([]),
          [E, T] = a.useState(),
          h = [
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
              value: c.C2.DM_SPAM,
            },
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
              value: c.C2.MENTION_SPAM,
            },
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
              value: c.C2.CHANNEL_SPAM,
            },
            {
              text: I.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
              value: c.C2.SUS_NEW_MEMBERS,
            },
            {
              text: I.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
              value: c.C2.CHANGING_SETTINGS,
            },
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
              value: c.C2.OTHER,
            },
          ];
        function g(e) {
          _.includes(e)
            ? N((n) => n.filter((n) => n !== e))
            : N((n) => [...n, e]);
        }
        return null == n
          ? (s(), null)
          : (0, i.jsxs)(r.ModalRoot, {
              transitionState: t,
              size: r.ModalSize.MEDIUM,
              children: [
                (0, i.jsx)(r.ModalHeader, {
                  separator: !0,
                  children: (0, i.jsxs)("div", {
                    className: m.headerContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: m.headerText,
                        children: [
                          (0, i.jsx)(r.LockIcon, {
                            size: "xs",
                            color: o.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, i.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children:
                              I.Z.Messages
                                .GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.Clickable, {
                        onClick: s,
                        children: (0, i.jsx)(r.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: m.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(r.ModalContent, {
                  children: (0, i.jsx)("div", {
                    className: m.options,
                    children: h.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: l()(m.optionContainer, {
                            [m.optionContainerOther]: t === c.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(r.Clickable, {
                              className: m.optionText,
                              onClick: () => g(t),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(r.Checkbox, {
                                    type: r.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: _.includes(t),
                                    onChange: () => g(t),
                                  }),
                                }),
                                (0, i.jsx)(r.Text, {
                                  variant: "text-md/medium",
                                  color: _.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === c.C2.OTHER &&
                              _.includes(c.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: m.textboxContainer,
                                children: (0, i.jsx)(r.TextArea, {
                                  className: m.serverLockdownReasonText,
                                  placeholder:
                                    I.Z.Messages
                                      .GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                  onChange: (e) => T(e),
                                  value: E,
                                  rows: 2,
                                  autoFocus: !0,
                                  flex: !0,
                                }),
                              }),
                          ],
                        },
                        t,
                      );
                    }),
                  }),
                }),
                (0, i.jsx)(r.ModalFooter, {
                  children: (0, i.jsx)(r.Button, {
                    onClick: function () {
                      (0, d.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: _,
                        raid_lockdown_feedback_other_reason: E,
                        guild_id: n,
                      }),
                        s();
                    },
                    color: r.Button.Colors.BRAND,
                    look: r.Button.Looks.FILLED,
                    submitting: !1,
                    children:
                      I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUBMIT,
                  }),
                }),
              ],
            });
      }
    },
    664452: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(831209),
        l = t(442837),
        o = t(481060),
        r = t(688465),
        d = t(430824),
        c = t(626135),
        u = t(369994),
        I = t(162157),
        m = t(533244),
        _ = t(487419),
        N = t(821312),
        E = t(676770),
        T = t(981631),
        h = t(689938),
        g = t(387410);
      function p(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: p,
            analyticsData: f,
          } = e,
          O = (0, l.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          x = !!(null == O ? void 0 : O.hasFeature(T.oNc.INVITES_DISABLED)),
          [C] = a.useState(!1),
          [S, A] = a.useState(E.Fl),
          R = (0, l.e7)([_.Z], () => _.Z.getGuildIncident(n)),
          b = (0, I.BT)(O),
          Z = (0, m.SG)(R) || x,
          v = (0, m.sN)(R),
          [M, L] = a.useState(Z),
          [j, D] = a.useState(v),
          [P, B] = a.useState(!1),
          y = M !== Z || j !== v || P,
          G = x && !b;
        if (null == O) return p(), null;
        function k() {
          L((e) => !e);
        }
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: t,
          size: o.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(o.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: g.headerContainer,
                children: [
                  (0, i.jsx)(o.LockIcon, {
                    size: "xs",
                    color: s.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, i.jsx)(o.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE,
                  }),
                  (0, i.jsx)(r.Z, {}),
                ],
              }),
            }),
            (0, i.jsx)(o.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: g.mainContainer,
                children: [
                  (0, i.jsx)(o.Select, {
                    placeholder:
                      h.Z.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                    options: (0, E.c1)(),
                    select: (e) => {
                      A(e), B(!0);
                    },
                    isSelected: (e) => e === S,
                    serialize: (e) => String(e),
                  }),
                  (0, i.jsxs)("div", {
                    className: g.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: g.pauseText,
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.Z.Messages.DISABLE_INVITES,
                          }),
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              h.Z.Messages
                                .GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.Tooltip, {
                        text: h.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                        shouldShow: x,
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(o.Switch, {
                              className: g.toggle,
                              onChange: k,
                              checked: M,
                              disabled: G,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: g.pauseContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: g.pauseText,
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.Z.Messages.DISABLE_DMS,
                          }),
                          (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              h.Z.Messages
                                .GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.Switch, {
                        className: g.toggle,
                        onChange: function () {
                          D((e) => !e);
                        },
                        checked: j,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(o.ModalFooter, {
              children: [
                (0, i.jsx)(o.Button, {
                  onClick: () => {
                    (Z || v) && !M && !j
                      ? ((0, u.n)(O.id, !1, !1),
                        (0, o.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(N.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(O.id, M, j, S);
                    let { source: e, alertType: t, messageId: a } = f;
                    c.default.track(
                      T.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE,
                      {
                        guild_id: n,
                        source: e,
                        raid_alert_id: a,
                        raid_alert_type: t,
                        intervention_type_enabled: (0, m.sO)(M, j),
                        intervention_type_disabled: (0, m.lk)(M, j),
                        duration: 60 * S,
                      },
                    ),
                      p();
                  },
                  color: o.Button.Colors.BRAND,
                  look: o.Button.Looks.FILLED,
                  submitting: C,
                  disabled: !y,
                  children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA,
                }),
                (0, i.jsx)(o.Button, {
                  onClick: p,
                  color: o.Button.Colors.PRIMARY,
                  look: o.Button.Looks.LINK,
                  disabled: C,
                  children: h.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    360606: function (e, n, t) {
      let i, a;
      t(653041), t(47120);
      var s,
        l,
        o,
        r,
        d = t(392711),
        c = t.n(d),
        u = t(442837),
        I = t(570140),
        m = t(308063),
        _ = t(496675),
        N = t(855674),
        E = t(999382),
        T = t(981631);
      let h = [],
        g = [],
        p = null,
        f = null,
        O = null,
        x = !1,
        C = !1,
        S = T.QZA.CLOSED,
        A = {},
        R = !1,
        b = null;
      function Z(e) {
        let { section: n } = e;
        if (n !== T.pNK.INTEGRATIONS) return !1;
        if (((a = T.b4C.OVERVIEW), null == i)) {
          let e = E.Z.getGuildId();
          null != e && m.Z.fetchForGuild(e), v(!1);
        }
      }
      function v(e) {
        if (
          null != (i = E.Z.getProps().guild) &&
          _.Z.can(T.Plq.MANAGE_GUILD, i)
        ) {
          let e = E.Z.getProps().integrations;
          null == e && (C = !0), (h = null != e ? e : []);
        } else h = [];
        if (
          ((g =
            null != i && _.Z.can(T.Plq.MANAGE_WEBHOOKS, i)
              ? N.Z.getWebhooksForGuild(i.id)
              : []),
          !e && null != f)
        ) {
          let e = L(f.id);
          null != e && (f = e);
        }
        if (null != O) {
          let e = j(O.id);
          null != e && (O = e);
        }
        (p = null), (S = T.QZA.OPEN), (A = {}), (R = !1);
      }
      let M = c().debounce(() => {
        R &&
          (null != f
            ? c().isEqual(f, L(f.id)) && (R = !1)
            : null != O && c().isEqual(O, j(O.id)) && (R = !1),
          !R && P.emitChange());
      }, 500);
      function L(e) {
        return h.find((n) => {
          let { id: t } = n;
          return t === e;
        });
      }
      function j(e) {
        return g.find((n) => {
          let { id: t } = n;
          return t === e;
        });
      }
      class D extends (s = u.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, N.Z, _.Z);
        }
        hasChanges() {
          return R;
        }
        get guild() {
          return i;
        }
        get integrations() {
          return h;
        }
        get webhooks() {
          return g;
        }
        get editedCommandId() {
          return p;
        }
        get editedIntegration() {
          return f;
        }
        get editedWebhook() {
          return O;
        }
        get formState() {
          return S;
        }
        getErrors() {
          return A;
        }
        getSection() {
          return a;
        }
        getSectionId() {
          return b;
        }
        getIntegration(e) {
          return L(e);
        }
        getWebhook(e) {
          return j(e);
        }
        isFetching() {
          return C || x;
        }
        showNotice() {
          return this.hasChanges();
        }
        getApplication(e) {
          var n;
          return null ===
            (n = h.find((n) => {
              var t;
              return (
                (null === (t = n.application) || void 0 === t
                  ? void 0
                  : t.id) === e
              );
            })) || void 0 === n
            ? void 0
            : n.application;
        }
      }
      (r = "GuildSettingsIntegrationsStore"),
        (o = "displayName") in (l = D)
          ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = r);
      let P = new D(
        I.Z,
        __OVERLAY__
          ? {}
          : {
              INTEGRATION_SETTINGS_INIT: function () {
                return v(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                return v(!0);
              },
              GUILD_SETTINGS_INIT: Z,
              GUILD_SETTINGS_SET_SECTION: Z,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                let { section: n, sectionId: t } = e;
                (a = n), (b = t);
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                let { commandId: n } = e;
                (p = n), (f = null), (O = null), (A = {}), (R = !0);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                let { commandId: n } = e;
                if (null == p || p !== n) return !1;
                (p = null), (A = {}), (R = !1);
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                let { integrationId: n } = e,
                  t = L(n);
                if (null == t) return !1;
                (f = t), (p = null), (O = null), (A = {}), (R = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                (f = null), (A = {}), (R = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                let { settings: n } = e;
                if (null == f) return !1;
                (f = { ...f }),
                  null != n.enableEmoticons &&
                    f.enable_emoticons !== n.enableEmoticons &&
                    ((f.enable_emoticons = n.enableEmoticons), (R = !0)),
                  null != n.expireBehavior &&
                    f.expire_behavior !== n.expireBehavior &&
                    ((f.expire_behavior = n.expireBehavior), (R = !0)),
                  null != n.expireGracePeriod &&
                    f.expire_grace_period !== n.expireGracePeriod &&
                    ((f.expire_grace_period = n.expireGracePeriod), (R = !0)),
                  R && M();
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                let { settings: n } = e;
                if (null == O) return !1;
                (O = { ...O }),
                  null != n.name &&
                    O.name !== n.name &&
                    ((O.name = n.name), (R = !0)),
                  void 0 !== n.avatar &&
                    O.avatar !== n.avatar &&
                    ((O.avatar = n.avatar), (R = !0)),
                  null != n.channelId &&
                    O.channel_id !== n.channelId &&
                    ((O.channel_id = n.channelId), (R = !0)),
                  R && M();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                let { webhookId: n } = e,
                  t = j(n);
                if (null == t) return !1;
                (O = t), (p = null), (f = null), (A = {}), (R = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                (O = null), (A = {}), (R = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                (i = null),
                  (h = []),
                  (g = []),
                  (p = null),
                  (f = null),
                  (O = null),
                  (S = T.QZA.CLOSED),
                  (R = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                let { guildId: n, integrations: t } = e;
                if (null == i || n !== i.id || S === T.QZA.SUBMITTING)
                  return !1;
                for (let e of ((C = !1), t))
                  if (
                    null ==
                    h.find((n) => {
                      let { id: t } = n;
                      if (t === e.id) return !0;
                    })
                  ) {
                    var a, s;
                    h.push(e),
                      e.type === (null == f ? void 0 : f.type) &&
                        (null === (a = e.account) || void 0 === a
                          ? void 0
                          : a.id) ===
                          (null === (s = f.account) || void 0 === s
                            ? void 0
                            : s.id) &&
                        (f = e);
                  }
                for (let e = h.length - 1; e >= 0; e--) {
                  let n = h[e],
                    i = t.find((e) => {
                      let { id: t } = e;
                      if (t === n.id) return !0;
                    });
                  if (null != i) {
                    let t = { ...n, ...i };
                    (null == f ? void 0 : f.id) === t.id &&
                      (!1 === t.enabled ? (f = null) : !R && (f = t)),
                      (h[e] = t);
                  } else
                    (null == f ? void 0 : f.id) === n.id && (f = null),
                      h.splice(e, 1);
                }
                (h = [...h]), M();
              },
              WEBHOOKS_UPDATE: function (e) {
                let { guildId: n, channelId: t, webhooks: a } = e;
                if (
                  null == i ||
                  n !== i.id ||
                  null == a ||
                  S === T.QZA.SUBMITTING
                )
                  return !1;
                x = !1;
                for (let e = g.length - 1; e >= 0; e--) {
                  let n = g[e];
                  if (null != t && (null == n ? void 0 : n.channel_id) !== t)
                    continue;
                  let i = a.find((e) => {
                    let { id: t } = e;
                    if (t === n.id) return !0;
                  });
                  if (null != i) {
                    let t = { ...n, ...i };
                    (g[e] = t),
                      !R && (null == O ? void 0 : O.id) === t.id && (O = t);
                  } else
                    (null == O ? void 0 : O.id) === n.id && (O = null),
                      g.splice(e, 1);
                }
                for (let e of a)
                  null ==
                    g.find((n) => {
                      let { id: t } = n;
                      if (t === e.id) return !0;
                    }) && g.push(e);
                (g = [...g]), M();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                (S = T.QZA.SUBMITTING), (A = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                var n;
                if (S !== T.QZA.SUBMITTING) return !1;
                (S = T.QZA.OPEN),
                  (A = null !== (n = e.errors) && void 0 !== n ? n : {});
              },
            },
      );
      n.Z = P;
    },
    282923: function (e, n, t) {
      t.d(n, {
        B: function () {
          return s;
        },
      }),
        t(653041),
        t(47120);
      var i = t(658722),
        a = t.n(i);
      function s(e, n, t) {
        if ("" === t) return e;
        let i = t.toLowerCase(),
          s = [];
        for (let l of e) {
          let { id: e, names: o } = n(l);
          if (e === t) return [l];
          o.some((e) => a()(i, e.toLowerCase())) && s.push(l);
        }
        return s;
      }
    },
    905753: function (e, n, t) {
      let i, a, s;
      t(47120);
      var l,
        o,
        r,
        d,
        c = t(442837),
        u = t(570140),
        I = t(581364),
        m = t(399860);
      let _ = {},
        N = {},
        E = !1;
      function T() {
        (i = void 0), (_ = {}), (N = {}), (a = void 0), (s = void 0), (E = !1);
      }
      class h extends (l = c.ZP.Store) {
        getApplicationPermissions() {
          return _;
        }
        getCommands() {
          return N;
        }
        getCommand(e) {
          return null == N ? void 0 : N[e];
        }
        getEditedApplication() {
          return a;
        }
        getEditedCommand() {
          return s;
        }
        isUnavailable() {
          return E;
        }
        getApplicationId() {
          return i;
        }
      }
      (d = "IntegrationPermissionStore"),
        (r = "displayName") in (o = h)
          ? Object.defineProperty(o, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[r] = d),
        (n.Z = new h(u.Z, {
          LOGOUT: T,
          INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE:
            function (e) {
              let { applicationId: n } = e;
              if (n !== i) return !1;
              E = !0;
            },
          INTEGRATION_PERMISSION_SETTINGS_CLEAR: T,
          INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
            let { applicationId: n } = e;
            T(), (i = n);
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
            let { applicationId: n, commandId: t, permissions: a } = e;
            if (n !== i) return !1;
            if (t === i) {
              _ = (0, m.tk)(a);
              return;
            }
            let s = N[t];
            if (null == s) return !1;
            N[t] = { ...s, permissions: (0, m.tk)(a) };
          },
          INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
            let { applicationId: n, commandId: t, permissions: l } = e;
            if (n !== i) return !1;
            t === i ? (a = l) : (s = { commandId: t, permissions: l });
          },
          INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
            let { commandId: n } = e;
            null == n ? (a = void 0) : (s = void 0);
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
            let { applicationId: n } = e;
            if (n !== i) return !1;
            E = !0;
          },
          INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
            let { applicationId: n, commands: t, permissions: a } = e;
            if (n !== i) return !1;
            let s = Object.fromEntries(a.map((e) => [e.id, e.permissions])),
              l = {};
            for (let e of t)
              if (e.application_id === i) {
                let n = (0, I.Z8)({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                  }),
                  t = s[e.id];
                null != t && (n.permissions = (0, m.tk)(t)), (l[e.id] = n);
              }
            N = l;
          },
        }));
    },
    937427: function (e, n, t) {
      t.d(n, {
        w: function () {
          return c;
        },
      }),
        t(47120),
        t(653041),
        t(733860);
      var i = t(470079),
        a = t(581364),
        s = t(984933),
        l = t(496675),
        o = t(282923),
        r = t(981631),
        d = t(689938);
      function c(e) {
        let n = i.useMemo(() => {
            let n = s.ZP.getChannels(e),
              t = [...n[s.sH]];
            t.push(...n[s.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = t.map((e) => ({
              id: e.channel.id,
              name: e.channel.name,
              canManage: l.Z.can(r.Plq.MANAGE_ROLES, e.channel),
            }));
            return (
              i.unshift({
                id: (0, a.bD)(e),
                name: d.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                canManage: !0,
              }),
              i
            );
          }, [e]),
          [t, c] = i.useState(""),
          I = i.useMemo(() => {
            let e = (function (e) {
              return e.startsWith("#") ? e.substr(1) : e;
            })(t);
            return (0, o.B)(n, u, e);
          }, [n, t]);
        return { query: t, results: I, setQuery: c, unfilteredCount: n.length };
      }
      function u(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    932776: function (e, n, t) {
      t.d(n, {
        O: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(373793),
        s = t(442837),
        l = t(911969),
        o = t(282923),
        r = t(905753);
      function d() {
        let e = (0, s.cj)([r.Z], () => {
            var e;
            return Object.values(
              null !== (e = r.Z.getCommands()) && void 0 !== e ? e : {},
            );
          }),
          [n, t] = i.useState(""),
          d = i.useMemo(
            () =>
              e.filter((e) => {
                var n;
                return (
                  (null == e.integration_types ||
                    e.integration_types.includes(a.Y.GUILD_INSTALL)) &&
                  (null == e.contexts ||
                    (null === (n = e.contexts) || void 0 === n
                      ? void 0
                      : n.includes(l.D.GUILD)))
                );
              }),
            [e],
          ),
          u = i.useMemo(
            () =>
              [...d].sort((e, n) => {
                let t = l.yU.CHAT + 1,
                  i = n.type > t ? t : n.type,
                  a = i - (e.type > t ? t : e.type);
                return 0 !== a
                  ? a
                  : e.untranslatedName.localeCompare(n.untranslatedName);
              }),
            [d],
          ),
          I = i.useMemo(
            () =>
              n.startsWith("/") ? u.filter((e) => e.type === l.yU.CHAT) : u,
            [n, u],
          ),
          m = i.useMemo(() => (n.startsWith("/") ? n.substring(1) : n), [n]);
        return {
          query: n,
          results: i.useMemo(() => (0, o.B)(I, c, m), [I, m]),
          setQuery: t,
          unfilteredCount: e.length,
        };
      }
      function c(e) {
        return { id: e.id, names: [e.displayName] };
      }
    },
    643886: function (e, n, t) {
      t.d(n, {
        U: function () {
          return N;
        },
      }),
        t(653041),
        t(47120),
        t(733860);
      var i = t(470079),
        a = t(512722),
        s = t.n(a),
        l = t(149765),
        o = t(442837),
        r = t(271383),
        d = t(430824),
        c = t(496675),
        u = t(594174),
        I = t(700785),
        m = t(282923),
        _ = t(981631);
      function N(e) {
        let n = (0, o.e7)([d.Z], () => d.Z.getGuild(e));
        s()(
          null != n,
          "guild must be present to be editing its integration settings",
        );
        let t = (0, o.e7)([c.Z], () => c.Z.getHighestRole(n)),
          a = (0, o.Wu)([r.ZP], () => r.ZP.getMembers(e), [e]),
          N = (0, o.cj)([u.default], () => u.default.getUsers()),
          h = (0, o.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
          g = i.useMemo(() => {
            let e = [];
            for (let t of a) {
              let i = N[t.userId];
              if (null == i || i.bot) continue;
              let a =
                i.id !== n.ownerId &&
                !I.BT({
                  permission: _.Plq.ADMINISTRATOR,
                  user: i,
                  context: n,
                }) &&
                c.Z.canManageUser(_.Plq.USE_APPLICATION_COMMANDS, i, n);
              e.push({
                id: i.id,
                canManage: a,
                nick: t.nick,
                username: i.username,
              });
            }
            return e;
          }, [n, a, N]),
          p = (e) => {
            var n;
            return (
              e.managed &&
              (null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id) !=
                null
            );
          },
          f = i.useMemo(() => {
            let i = [];
            for (let a of h) {
              if (p(a)) continue;
              let s =
                  !l.e$(a.permissions, _.Plq.ADMINISTRATOR) &&
                  c.Z.isRoleHigher(n, t, a),
                o = { id: a.id, name: a.name, canManage: s };
              a.id === e ? i.unshift(o) : i.push(o);
            }
            return i;
          }, [h, e, n, t]),
          [O, x] = i.useState(""),
          C = i.useMemo(() => {
            let n = (function (e) {
                return e.startsWith("@") ? e.substr(1) : e;
              })(O),
              t = O.startsWith("@") ? f.filter((n) => n.id === e) : f,
              i = (0, m.B)(g, E, n);
            return { members: i, roles: (0, m.B)(t, T, n) };
          }, [e, g, O, f]);
        return {
          query: O,
          results: C,
          setQuery: x,
          unfilteredCount: C.members.length + C.roles.length,
        };
      }
      function E(e) {
        let n = [e.username];
        return (
          (null == e ? void 0 : e.nick) != null && n.push(e.nick),
          { id: e.id, names: n }
        );
      }
      function T(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    995390: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(653041),
        t(47120);
      var i = t(470079),
        a = t(512722),
        s = t.n(a),
        l = t(392711),
        o = t.n(l),
        r = t(442837),
        d = t(139387),
        c = t(895924),
        u = t(581364),
        I = t(592125),
        m = t(430824),
        _ = t(496675),
        N = t(594174),
        E = t(823379),
        T = t(905753),
        h = t(399860),
        g = t(981631);
      function p(e, n, t) {
        let a = (0, r.e7)([T.Z], () => T.Z.getApplicationPermissions()),
          l = i.useMemo(
            () =>
              (function (e, n) {
                let t = { ...n },
                  i = (0, u.bD)(e),
                  a = (0, h.rE)(i, c.Kw.CHANNEL),
                  s = (0, h.rE)(e, c.Kw.ROLE);
                return (
                  !(s in t) &&
                    (t[s] = { id: e, permission: !0, type: c.Kw.ROLE }),
                  !(a in t) &&
                    (t[a] = { id: i, permission: !0, type: c.Kw.CHANNEL }),
                  t
                );
              })(e, null != a ? a : {}),
            [a, e],
          ),
          p = (0, r.e7)(
            [T.Z],
            () => {
              var e;
              if (null == t) return;
              let n = T.Z.getCommand(t);
              return null !== (e = null == n ? void 0 : n.permissions) &&
                void 0 !== e
                ? e
                : {};
            },
            [t],
          ),
          f = (0, r.e7)(
            [T.Z],
            () => {
              var e;
              return null == t
                ? T.Z.getEditedApplication()
                : null === (e = T.Z.getEditedCommand()) || void 0 === e
                  ? void 0
                  : e.permissions;
            },
            [t],
          ),
          O = null != t ? t : n,
          x = null != t ? p : l,
          C = i.useMemo(
            () => (null != f ? f : { ...(null != x ? x : {}) }),
            [f, x],
          ),
          S = i.useMemo(() => Object.keys(C).length, [C]),
          A = i.useMemo(
            () => (null == x || null == C ? null : !o().isEqual(x, C)),
            [x, C],
          );
        return (
          i.useEffect(() => {
            if (O === n)
              A
                ? d.Z.startEditingCommandPermissions(O)
                : d.Z.stopEditingCommandPermissions(O);
          }, [n, A, O]),
          {
            originalApplicationPermissions: l,
            originalCommandPermissions: p,
            editedTargetPermissions: (function (e, n) {
              let t = (0, r.e7)([m.Z], () => m.Z.getGuild(e), [e]);
              s()(
                null != t,
                "guild must be present to be editing its integration settings",
              );
              let a = (0, r.e7)([_.Z], () => _.Z.getHighestRole(t), [t]),
                l = (0, r.e7)([N.default], () => {
                  var e;
                  return null === (e = N.default.getCurrentUser()) ||
                    void 0 === e
                    ? void 0
                    : e.id;
                });
              s()(
                null != l,
                "useComputePermissions: currentUserId must not be null",
              );
              let o = l === t.ownerId,
                {
                  channelIds: d,
                  roleIds: T,
                  userIds: h,
                } = i.useMemo(() => {
                  let e = [],
                    t = [],
                    i = [];
                  for (let a of Object.values(n))
                    a.type === c.Kw.CHANNEL
                      ? e.push(a.id)
                      : a.type === c.Kw.ROLE
                        ? t.push(a.id)
                        : a.type === c.Kw.USER && i.push(a.id);
                  return { channelIds: e, roleIds: t, userIds: i };
                }, [n]),
                p = (0, r.cj)(
                  [I.Z],
                  () =>
                    Object.fromEntries(
                      d
                        .map(I.Z.getChannel)
                        .filter(E.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [d],
                ),
                f = (0, r.cj)(
                  [m.Z],
                  () =>
                    Object.fromEntries(
                      T.map((n) => m.Z.getRole(e, n))
                        .filter(E.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [T, e],
                ),
                O = (0, r.cj)(
                  [N.default],
                  () =>
                    Object.fromEntries(
                      h
                        .map(N.default.getUser)
                        .filter(E.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [h],
                );
              return i.useMemo(() => {
                let e = t.id,
                  i = (0, u.bD)(t.id),
                  s = {};
                for (let [l, r] of Object.entries(n)) {
                  let n = !1,
                    d = !1;
                  if (r.type === c.Kw.CHANNEL) {
                    let e = r.id === i,
                      t = p[r.id];
                    (n = e || _.Z.can(g.Plq.VIEW_CHANNEL, t)), (d = !0);
                  } else if (r.type === c.Kw.ROLE) {
                    let i = r.id === e,
                      s = f[r.id];
                    (n = i || null != s),
                      (d = o || i || _.Z.isRoleHigher(t, a, s));
                  } else if (r.type === c.Kw.USER) {
                    let e = O[r.id];
                    (n = null != e),
                      (d =
                        null != e &&
                        (o ||
                          _.Z.canManageUser(
                            g.Plq.USE_APPLICATION_COMMANDS,
                            e,
                            t,
                          )));
                  }
                  s[l] = { ...r, canRead: n, canWrite: d };
                }
                return s;
              }, [p, t, a, o, n, f, O]);
            })(e, C),
            hasChanges: A,
            selectedPermissionCount: S,
          }
        );
      }
    },
    680298: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(239091),
        o = t(911969),
        r = t(399860),
        d = t(689938),
        c = t(521422);
      function u(e) {
        let {
            applicationIcon: n,
            applicationName: u,
            canNavigate: I,
            command: m,
            guildId: _,
          } = e,
          N = a.useMemo(() => {
            var e;
            return (
              0 !==
              Object.keys(null !== (e = m.permissions) && void 0 !== e ? e : {})
                .length
            );
          }, [m.permissions]),
          E = a.useCallback(() => {
            null != m &&
              I() &&
              (0, s.openModalLazy)(async () => {
                let { default: e } = await t.e("78786").then(t.bind(t, 50474));
                return (t) =>
                  (0, i.jsx)(e, {
                    applicationIcon: n,
                    applicationId: m.applicationId,
                    applicationName: u,
                    command: m,
                    guildId: _,
                    ...t,
                  });
              });
          }, [n, u, I, m, _]),
          T = a.useCallback(
            (e) => {
              (0, l.jW)(e, async () => {
                let { default: e } = await t.e("5396").then(t.bind(t, 731646));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    id: m.id,
                    label: d.Z.Messages.COPY_ID_COMMAND,
                  });
              });
            },
            [m],
          ),
          h = m.type === o.yU.CHAT ? s.SlashBoxIcon : s.PaperIcon,
          g = (0, r.gw)(m.type, m.displayName);
        return (0, i.jsxs)(s.Clickable, {
          onClick: E,
          className: c.item,
          onContextMenu: T,
          children: [
            (0, i.jsxs)("div", {
              className: c.identifier,
              children: [
                (0, i.jsx)(h, {
                  className: c.icon,
                  size: "md",
                  color: "currentColor",
                }),
                (0, i.jsx)(s.Text, { variant: "text-md/normal", children: g }),
              ],
            }),
            (0, i.jsx)("div", {
              className: c.statusContainer,
              children: N
                ? (0, i.jsxs)("div", {
                    className: c.statusLine,
                    children: [
                      (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children:
                          d.Z.Messages
                            .INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES,
                      }),
                      (0, i.jsx)(s.CircleInformationIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: c.statusIcon,
                      }),
                    ],
                  })
                : null,
            }),
          ],
        });
      }
    },
    469880: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(932776),
        o = t(680298),
        r = t(289465),
        d = t(689938),
        c = t(400587);
      function u(e) {
        let {
            applicationIcon: n,
            applicationName: t,
            canNavigate: u,
            guildId: I,
          } = e,
          {
            results: m,
            query: _,
            setQuery: N,
            unfilteredCount: E,
          } = (0, l.O)(),
          T = null != m && E > 0;
        return (0, i.jsx)(a.Fragment, {
          children: T
            ? (0, i.jsx)(r.Z, {
                bar: (0, i.jsx)(s.SearchBar, {
                  query: _,
                  onChange: N,
                  onClear: () => N(""),
                }),
                inModal: !1,
                title: d.Z.Messages.COMMANDS,
                children: m.map((e, l) =>
                  (0, i.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        (0, i.jsx)(o.Z, {
                          applicationIcon: n,
                          applicationName: t,
                          canNavigate: u,
                          command: e,
                          guildId: I,
                        }),
                        l < m.length - 1 ? (0, i.jsx)(s.FormDivider, {}) : null,
                      ],
                    },
                    e.id,
                  ),
                ),
              })
            : (0, i.jsx)(s.Card, {
                className: c.emptyCard,
                editable: !0,
                children: (0, i.jsx)(s.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: d.Z.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS,
                }),
              }),
        });
      }
    },
    335049: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(512722),
        r = t.n(o),
        d = t(866442),
        c = t(442837),
        u = t(481060),
        I = t(239091),
        m = t(895924),
        _ = t(581364),
        N = t(471445),
        E = t(91218),
        T = t(518738),
        h = t(592125),
        g = t(271383),
        p = t(430824),
        f = t(246946),
        O = t(594174),
        x = t(51144),
        C = t(981631),
        S = t(689938),
        A = t(53504);
      function R(e) {
        let { guild: n, id: s, type: l, isLocked: o, lockTooltipText: d } = e,
          c = !o || null != d;
        r()(c, "No lockTooltipText provided while isLocked=true");
        let u = a.useCallback(
          (e) => {
            (0, I.jW)(e, async () => {
              let { default: e } = await t.e("5396").then(t.bind(t, 731646));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  id: s,
                  label: S.Z.Messages.COPY_ID_COMMAND,
                });
            });
          },
          [s],
        );
        switch (l) {
          case m.Kw.CHANNEL:
            return (0, i.jsx)(b, {
              guild: n,
              id: s,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
          case m.Kw.ROLE:
            return (0, i.jsx)(Z, {
              guild: n,
              id: s,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
          case m.Kw.USER:
            return (0, i.jsx)(v, {
              guild: n,
              id: s,
              isLocked: o,
              lockTooltipText: d,
              openEntryContextMenu: u,
            });
        }
      }
      function b(e) {
        let {
            guild: n,
            id: t,
            isLocked: s,
            lockTooltipText: o,
            openEntryContextMenu: r,
          } = e,
          d = (0, _.bD)(n.id),
          {
            icon: I,
            name: m,
            categoryName: E,
          } = (0, c.cj)(
            [h.Z],
            () => {
              if (d === t)
                return {
                  name: S.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                  icon: u.TextIcon,
                };
              let e = h.Z.getChannel(t),
                i =
                  (null == e ? void 0 : e.parent_id) != null
                    ? h.Z.getChannel(e.parent_id)
                    : null;
              return {
                icon: null != e ? (0, N.KS)(e, n) : null,
                name: null == e ? void 0 : e.name,
                categoryName: null == i ? void 0 : i.name,
              };
            },
            [d, n, t],
          ),
          T = a.useCallback(
            (e) => {
              t !== d && r(e);
            },
            [d, t, r],
          );
        return null == I || null == m
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: T,
              className: A.identifier,
              children: [
                (0, i.jsx)(I, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: l()(A.channelIcon, A.image),
                }),
                (0, i.jsx)(u.Text, {
                  className: A.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: m,
                }),
                null != E
                  ? (0, i.jsxs)(u.Text, {
                      className: A.tag,
                      variant: "text-sm/normal",
                      children: ["(", E, ")"],
                    })
                  : null,
                s ? (0, i.jsx)(M, { tooltipText: o }) : null,
              ],
            });
      }
      function Z(e) {
        var n;
        let { guild: s, id: o, isLocked: r, lockTooltipText: m } = e,
          _ = (0, c.e7)([p.Z], () => p.Z.getRole(s.id, o)),
          N = (0, T.p9)({ guildId: s.id, roleId: o, size: 24 }),
          h = a.useCallback(
            (e) => {
              if (null != s && null != _)
                (0, I.jW)(e, async () => {
                  let { default: e } = await t
                    .e("14486")
                    .then(t.bind(t, 786746));
                  return (n) => (0, i.jsx)(e, { ...n, guild: s, role: _ });
                });
            },
            [s, _],
          );
        return (null == _ ? void 0 : _.name) == null
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: h,
              className: A.identifier,
              children: [
                null != N
                  ? (0, i.jsx)(E.Z, {
                      className: l()(A.__invalid_icon, A.image),
                      ...N,
                    })
                  : (0, i.jsx)(u.ShieldUserIcon, {
                      size: "custom",
                      width: 23,
                      height: 23,
                      className: l()(A.shield, A.image),
                      color:
                        null !== (n = _.colorString) && void 0 !== n
                          ? n
                          : (0, d.Rf)(C.p6O),
                    }),
                (0, i.jsx)(u.Text, {
                  className: A.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: _.name,
                }),
                r ? (0, i.jsx)(M, { tooltipText: m }) : null,
              ],
            });
      }
      function v(e) {
        let {
            guild: n,
            id: t,
            isLocked: a,
            lockTooltipText: s,
            openEntryContextMenu: l,
          } = e,
          o = (0, c.e7)([O.default], () => O.default.getUser(t)),
          r = (0, c.e7)(
            [g.ZP],
            () => {
              var e;
              return null === (e = g.ZP.getMember(n.id, t)) || void 0 === e
                ? void 0
                : e.nick;
            },
            [n.id, t],
          ),
          d = (0, c.e7)([f.Z], () => f.Z.hidePersonalInformation);
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: l,
              className: A.identifier,
              children: [
                (0, i.jsx)(u.Avatar, {
                  className: A.image,
                  src: o.getAvatarURL(n.id, 24),
                  "aria-label": o.username,
                  size: u.AvatarSizes.SIZE_24,
                }),
                (0, i.jsx)(u.Text, {
                  className: A.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: null != r ? r : o.username,
                }),
                d
                  ? null
                  : (0, i.jsx)(u.Text, {
                      className: A.tag,
                      variant: "text-sm/normal",
                      children: x.ZP.getUserTag(o),
                    }),
                a ? (0, i.jsx)(M, { tooltipText: s }) : null,
              ],
            });
      }
      function M(e) {
        let { tooltipText: n } = e;
        return (0, i.jsx)(u.Tooltip, {
          text: n,
          children: (e) =>
            (0, i.jsx)("div", {
              className: A.lockIcon,
              ...e,
              children: (0, i.jsx)(u.LockIcon, {
                size: "xs",
                color: "currentColor",
              }),
            }),
        });
      }
    },
    869157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      }),
        t(724458),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(512722),
        l = t.n(s),
        o = t(392711),
        r = t.n(o),
        d = t(442837),
        c = t(481060),
        u = t(749210),
        I = t(367907),
        m = t(895924),
        _ = t(581364),
        N = t(929507),
        E = t(997787),
        T = t(970731),
        h = t(314897),
        g = t(430824),
        p = t(594174),
        f = t(626135),
        O = t(5192),
        x = t(709054),
        C = t(360606),
        S = t(905753),
        A = t(399860),
        R = t(335049),
        b = t(617012),
        Z = t(981631),
        v = t(689938),
        M = t(570767);
      function L(e) {
        let {
            commandId: n,
            editPermissions: t,
            guildId: s,
            noneSelectedText: o,
            overwrites: I,
            hasAccessToMutatePermissions: N,
          } = e,
          T = (0, d.e7)([g.Z], () => g.Z.getGuild(s));
        l()(null != T, "");
        let h = (0, d.e7)([g.Z], () => g.Z.getRoles(s)),
          [f, R] = a.useState(new Set()),
          b = a.useMemo(() => {
            var e;
            let n = (0, _.bD)(s);
            let t =
              ((e = h),
              r()(e)
                .sortBy((e) => e.position)
                .reduce((e, n, t) => ((e[n.id] = t), e), {}));
            return Object.values(I)
              .filter((e) => e.canRead)
              .sort((e, i) => {
                let a = e.type - i.type;
                if (0 !== a) return a;
                switch (e.type) {
                  case m.Kw.USER:
                    return (function (e, n, t) {
                      let i = Number(e.canWrite) - Number(n.canWrite);
                      if (0 !== i) return i;
                      let a = p.default.getUser(e.id),
                        s = p.default.getUser(n.id);
                      if (null != a && null != s) {
                        let e = O.ZP.getName(t, void 0, a),
                          n = O.ZP.getName(t, void 0, s);
                        return null == e ? void 0 : e.localeCompare(n);
                      }
                      return x.default.compare(e.id, n.id);
                    })(e, i, s);
                  case m.Kw.ROLE:
                    return (function (e, n, t, i) {
                      if (e.id === t) return -1;
                      if (n.id === t) return 1;
                      let a = i[e.id];
                      return a > i[n.id] ? -1 : 1;
                    })(e, i, s, t);
                  case m.Kw.CHANNEL:
                    return (function (e, n, t) {
                      if (e.id === t) return -1;
                      if (n.id === t) return 1;
                      let i = Number(e.canWrite) - Number(n.canWrite);
                      return 0 !== i ? i : x.default.compare(e.id, n.id);
                    })(e, i, n);
                }
              });
          }, [s, I, h]),
          Z = a.useCallback(
            (e, n) => {
              t({}, [(0, A.rE)(e, n)]);
            },
            [t],
          ),
          v = a.useCallback(
            (e, n, i) => {
              let a = (0, A.rE)(e, n);
              null != I[a] && t({ [a]: { id: e, permission: i, type: n } }, []);
            },
            [t, I],
          );
        a.useEffect(() => {
          let e = Object.values(I)
            .filter((e) => e.type === m.Kw.USER && !e.canRead && !f.has(e.id))
            .map((e) => e.id);
          if (0 !== e.length)
            u.Z.requestMembersById(s, e, !1), R((n) => new Set([...n, ...e]));
        }, [s, I, f, R]);
        let L = (0, d.e7)([S.Z], () => S.Z.getApplicationId()),
          D = (0, d.e7)([C.Z], () =>
            null == L
              ? void 0
              : C.Z.integrations.find((e) => {
                  var n;
                  return (
                    (null === (n = e.application) || void 0 === n
                      ? void 0
                      : n.id) === L
                  );
                }),
          ),
          P = (0, d.e7)(
            [E.Z],
            () => void 0 !== D && E.Z.canShowToggleTooltip(D.id),
          );
        return (0, i.jsx)(a.Fragment, {
          children:
            b.length > 0
              ? b.map((e) =>
                  (0, i.jsx)(
                    j,
                    {
                      guild: T,
                      commandId: n,
                      onChange: (n) => v(e.id, e.type, n),
                      onRemove: () => Z(e.id, e.type),
                      overwrite: e,
                      integration: D,
                      canShowMigrationTooltip: P,
                      hasAccessToMutatePermissions: N,
                    },
                    e.id,
                  ),
                )
              : (0, i.jsx)("div", {
                  className: M.noItemsSelected,
                  children: (0, i.jsx)(c.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: o,
                  }),
                }),
        });
      }
      function j(e) {
        var n, t, s;
        let l,
          {
            guild: o,
            commandId: r,
            onChange: d,
            onRemove: u,
            overwrite: E,
            integration: g,
            canShowMigrationTooltip: p,
            hasAccessToMutatePermissions: O,
          } = e,
          x = E.id === o.id || E.id === (0, _.bD)(o.id),
          C =
            null == g
              ? void 0
              : null === (t = g.application) || void 0 === t
                ? void 0
                : null === (n = t.bot) || void 0 === n
                  ? void 0
                  : n.username,
          S = !E.canWrite || !O,
          A = h.default.getId();
        O
          ? !E.canWrite &&
            (E.type === m.Kw.USER
              ? (l =
                  E.id === A
                    ? v.Z.Messages
                        .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF
                    : v.Z.Messages
                        .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER)
              : E.type === m.Kw.ROLE &&
                (l =
                  v.Z.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE))
          : (l =
              null != r
                ? v.Z.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND
                : v.Z.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION);
        let L =
          p && null != g && E.id === o.id && void 0 !== C && !E.permission;
        a.useEffect(() => {
          if (L) {
            var e;
            f.default.track(Z.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, I.hH)(o.id),
              application_id:
                null == g
                  ? void 0
                  : null === (e = g.application) || void 0 === e
                    ? void 0
                    : e.id,
              location: "toggle",
            });
          }
        }, [
          o.id,
          null == g
            ? void 0
            : null === (s = g.application) || void 0 === s
              ? void 0
              : s.id,
          L,
        ]);
        let j = (0, i.jsx)(c.Tooltip, {
            tooltipClassName: M.tooltip,
            text: l,
            shouldShow: S,
            position: "left",
            hideOnClick: !1,
            children: (e) =>
              (0, i.jsx)("div", {
                ...e,
                children: (0, i.jsx)(b.Z, {
                  isDisabled: S,
                  currentValue: E.permission,
                  onChange: L
                    ? (e) => {
                        N.Z.dismissToggleTooltip(o.id, g), d(e);
                      }
                    : d,
                }),
              }),
          }),
          P = (0, i.jsx)(c.Popout, {
            renderPopout: () =>
              (0, i.jsx)(c.Clickable, {
                onClick: (e) => {
                  e.stopPropagation(), N.Z.dismissToggleTooltip(o.id, g);
                },
                children: (0, i.jsx)(T.ZP, {
                  className: M.tooltip,
                  content:
                    v.Z.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format(
                      {
                        botName: C,
                        link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
                      },
                    ),
                  onClick: () => {},
                }),
              }),
            position: "bottom",
            align: "center",
            animation: c.Popout.Animation.TRANSLATE,
            onRequestClose: () => N.Z.dismissToggleTooltip(o.id, g),
            shouldShow: L,
            closeOnScroll: !0,
            children: () => j,
          });
        return (0, i.jsxs)(
          "div",
          {
            className: M.entryItem,
            children: [
              (0, i.jsx)("div", {
                className: M.entryName,
                children: (0, i.jsx)(R.Z, {
                  guild: o,
                  id: E.id,
                  type: E.type,
                  isLocked: S,
                  lockTooltipText: l,
                }),
              }),
              (0, i.jsxs)("div", {
                className: M.entryActions,
                children: [
                  (0, i.jsx)(D, {
                    commandId: r,
                    isSentinel: x,
                    isDisabled: !O,
                    onRemove: u,
                  }),
                  P,
                ],
              }),
            ],
          },
          E.id,
        );
      }
      function D(e) {
        let { commandId: n, isSentinel: t, isDisabled: a, onRemove: s } = e;
        return a
          ? null
          : null != n || !t
            ? (0, i.jsx)("div", {
                className: M.removeActions,
                children: (0, i.jsx)(c.Clickable, {
                  className: M.removeContainer,
                  "aria-label":
                    v.Z.Messages
                      .INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
                  onClick: s,
                  children: (0, i.jsx)(c.TrashIcon, {
                    size: "md",
                    color: "currentColor",
                    className: M.removeIcon,
                  }),
                }),
              })
            : null;
      }
    },
    665578: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(392711),
        l = t.n(s),
        o = t(149765),
        r = t(442837),
        d = t(481060),
        c = t(895924),
        u = t(581364),
        I = t(605436),
        m = t(271383),
        _ = t(430824),
        N = t(496675),
        E = t(821864),
        T = t(905753),
        h = t(937427),
        g = t(643886),
        p = t(869157),
        f = t(454092),
        O = t(289465),
        x = t(981631),
        C = t(689079),
        S = t(689938),
        A = t(869880);
      function R(e) {
        let {
            applicationId: n,
            commandId: s,
            guildId: h,
            inModal: g,
            editedTargetPermissions: R,
            originalApplicationPermissions: v,
            originalCommandPermissions: M,
            selectedPermissionCount: L,
          } = e,
          j = (0, r.e7)([T.Z], () => (null == s ? null : T.Z.getCommand(s)), [
            s,
          ]),
          D = (null == j ? void 0 : j.defaultMemberPermissions) != null,
          P = (0, r.e7)(
            [_.Z, m.ZP, N.Z],
            () => {
              let e = _.Z.getGuild(h),
                n = m.ZP.getSelfMember(h);
              return (
                null != e &&
                null != n &&
                (0, u.Ft)({
                  PermissionStore: N.Z,
                  guild: e,
                  selfMember: n,
                  applicationLevelPermissions: v,
                  commandLevelPermissions: M,
                  defaultMemberPermissions:
                    null == j ? void 0 : j.defaultMemberPermissions,
                })
              );
            },
            [h, j, v, M],
          ),
          B = null != s ? s : n,
          [y, G] = a.useMemo(() => {
            let e = {},
              n = {};
            for (let [t, i] of Object.entries(R))
              i.type === c.Kw.CHANNEL ? (e[t] = i) : (n[t] = i);
            return [e, n];
          }, [R]),
          k = a.useCallback(
            (e) => {
              let n = _.Z.getGuild(h),
                t = m.ZP.getSelfMember(h);
              return (
                null != n &&
                null != t &&
                (null != s
                  ? (0, u.Ft)({
                      PermissionStore: N.Z,
                      guild: n,
                      selfMember: t,
                      applicationLevelPermissions: v,
                      commandLevelPermissions: e,
                      defaultMemberPermissions:
                        null == j ? void 0 : j.defaultMemberPermissions,
                    })
                  : (0, u.Ft)({
                      PermissionStore: N.Z,
                      guild: n,
                      selfMember: t,
                      applicationLevelPermissions: e,
                    }))
              );
            },
            [h, j, s, v],
          ),
          U = a.useCallback(
            (e, n) => {
              let t;
              let i = null;
              if (0 !== n.length) {
                let e = R[n[0]];
                if (e.type === c.Kw.USER) t = f.s.REMOVE_SELF;
                else {
                  let n = e.id;
                  if (((t = f.s.REMOVE_ROLE), (0, I.pM)(h, n))) i = "@everyone";
                  else {
                    let e = _.Z.getRole(h, n);
                    i = null != e ? e.name : "role";
                  }
                }
              } else {
                let n = Object.values(e)[0].id;
                if (((t = f.s.DENY_ROLE), (0, I.pM)(h, n))) i = "@everyone";
                else {
                  let e = _.Z.getRole(h, n);
                  i = null != e ? e.name : "role";
                }
              }
              (0, f._)(t, i);
            },
            [h, R],
          ),
          w = a.useCallback(
            (e, t) => {
              let i = {};
              for (let [e, n] of Object.entries(R))
                i[e] = { id: n.id, permission: n.permission, type: n.type };
              if (
                ((i = Object.assign(i, e)),
                t.length > 0 && (i = l().omit(i, t)),
                !k(i))
              ) {
                U(e, t);
                return;
              }
              E.W4(n, B, i);
            },
            [n, R, B, k, U],
          ),
          H = a.useCallback(() => {
            let e = Object.keys(y);
            return (0, d.openModalLazy)(async () => {
              let { default: n } = await t.e("64908").then(t.bind(t, 557944));
              return (t) =>
                (0, i.jsx)(n, {
                  editPermissions: w,
                  guildId: h,
                  headerText:
                    S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                  hasMemberSearch: !1,
                  overwrittenKeys: e,
                  search: b,
                  searchPlaceholderText:
                    S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
                  selectedPermissionCount: L,
                  ...t,
                });
            });
          }, [w, y, h, L]),
          W = a.useCallback(() => {
            let e = Object.keys(G);
            return (0, d.openModalLazy)(async () => {
              let { default: n } = await t.e("64908").then(t.bind(t, 557944));
              return (t) =>
                (0, i.jsx)(n, {
                  editPermissions: w,
                  guildId: h,
                  hasMemberSearch: !0,
                  headerText:
                    S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                  overwrittenKeys: e,
                  search: Z,
                  searchPlaceholderText:
                    S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
                  selectedPermissionCount: L,
                  ...t,
                });
            });
          }, [w, h, G, L]),
          F = a.useCallback(
            () =>
              (0, d.openModalLazy)(async () => {
                let { default: e } = await t.e("21897").then(t.bind(t, 303313)),
                  n = j.defaultMemberPermissions;
                return (
                  o.fS(n, u.BO) && (n = x.Plq.ADMINISTRATOR),
                  (t) => (0, i.jsx)(e, { ...t, defaultMemberPermissions: n })
                );
              }),
            [j],
          ),
          V = L - C._n,
          K = V >= 0,
          Y = [
            {
              buttonClick: W,
              buttonText:
                S.Z.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
              noneSelectedText:
                S.Z.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
              overwrites: G,
              title:
                null == s
                  ? S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD
                  : S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER,
            },
            {
              buttonClick: H,
              buttonText:
                S.Z.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
              noneSelectedText:
                S.Z.Messages
                  .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
              overwrites: y,
              title:
                null == s
                  ? S.Z.Messages.CHANNELS
                  : S.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER,
            },
          ];
        return (0, i.jsxs)(a.Fragment, {
          children: [
            V > 0
              ? (0, i.jsx)(d.HelpMessage, {
                  messageType: d.HelpMessageTypes.WARNING,
                  children:
                    S.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format(
                      { removeCount: V },
                    ),
                })
              : null,
            D
              ? (0, i.jsxs)("div", {
                  className: A.requiredPermissionsBanner,
                  children: [
                    (0, i.jsx)(d.CircleInformationIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: A.icon,
                    }),
                    (0, i.jsx)("span", {
                      className: A.message,
                      children:
                        S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format(),
                    }),
                    (0, i.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      onClick: F,
                      size: d.Button.Sizes.SMALL,
                      className: A.addButton,
                      children: S.Z.Messages.VIEW,
                    }),
                  ],
                })
              : null,
            Y.map((e, n) => {
              let t = (n) =>
                  (0, i.jsx)(d.Button, {
                    ...n,
                    color: d.Button.Colors.PRIMARY,
                    disabled: K || !P,
                    onClick: e.buttonClick,
                    size: d.Button.Sizes.TINY,
                    className: A.addButton,
                    children: e.buttonText,
                  }),
                a = null;
              return (
                P
                  ? K &&
                    (a = S.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX)
                  : (a =
                      null != s
                        ? S.Z.Messages
                            .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND
                        : S.Z.Messages
                            .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION),
                (0, i.jsx)(
                  O.Z,
                  {
                    bar: (0, i.jsx)(d.Tooltip, {
                      tooltipClassName: A.tooltip,
                      text: a,
                      shouldShow: null != a,
                      children: (e) => t(e),
                    }),
                    inModal: g,
                    title: e.title,
                    children: (0, i.jsx)("div", {
                      className: g ? void 0 : A.listContainer,
                      children: (0, i.jsx)(p.Z, {
                        guildId: h,
                        commandId: s,
                        noneSelectedText: e.noneSelectedText,
                        overwrites: e.overwrites,
                        editPermissions: w,
                        hasAccessToMutatePermissions: P,
                      }),
                    }),
                  },
                  n,
                )
              );
            }),
          ],
        });
      }
      function b(e) {
        let n = (0, h.w)(e);
        return {
          ...n,
          results: n.results.map((e) => ({ ...e, type: c.Kw.CHANNEL })),
        };
      }
      function Z(e) {
        let n = (0, g.U)(e);
        return {
          ...n,
          results: n.results.roles
            .map((e) => ({ ...e, type: c.Kw.ROLE }))
            .concat(n.results.members.map((e) => ({ ...e, type: c.Kw.USER }))),
        };
      }
    },
    617012: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(481060),
        r = t(689938),
        d = t(492701);
      let c = [!1, !0];
      function u(e) {
        let { isDisabled: n, currentValue: t, onChange: s } = e,
          r = (0, o.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: n,
          }),
          u = a.useCallback(
            (e) => {
              !n && e !== t && s(e);
            },
            [n, t, s],
          );
        return (0, i.jsx)("div", {
          className: l()(d.group, { [d.disabled]: n }),
          ...r,
          children: c.map((e) =>
            (0, i.jsx)(
              I,
              { isSelected: t === e, itemValue: e, onClick: () => u(e) },
              e.toString(),
            ),
          ),
        });
      }
      function I(e) {
        let { isSelected: n, itemValue: t, onClick: a } = e,
          s = t ? d.allow : d.deny,
          c = t ? o.CheckmarkLargeIcon : o.XSmallIcon,
          u = t
            ? r.Z.Messages.PERMISSION_OVERRIDE_ALLOW
            : r.Z.Messages.PERMISSION_OVERRIDE_DENY,
          I = (0, o.useRadioItem)({ isSelected: n, label: u });
        return (0, i.jsx)(o.Clickable, {
          className: l()(d.item, s, { [d.selected]: n }),
          onClick: a,
          ...I,
          children: (0, i.jsx)(c, { size: "xs", color: "currentColor" }),
        });
      }
    },
    454092: function (e, n, t) {
      t.d(n, {
        _: function () {
          return d;
        },
        s: function () {
          return a;
        },
      });
      var i,
        a,
        s = t(668781),
        l = t(63063),
        o = t(981631),
        r = t(689938);
      function d(e, n) {
        let t;
        0 === e
          ? (t =
              r.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format())
          : 1 === e
            ? (t =
                r.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format(
                  { name: n },
                ))
            : 2 === e &&
              (t =
                r.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format(
                  { name: n },
                )),
          s.Z.show({
            title: r.Z.Messages.SELF_DENY_PERMISSION_TITLE,
            body: t,
            cancelText: r.Z.Messages.HELP_DESK,
            onCancel() {
              window.open(
                l.Z.getArticleURL(
                  o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT,
                ),
              );
            },
          });
      }
      ((i = a || (a = {}))[(i.REMOVE_SELF = 0)] = "REMOVE_SELF"),
        (i[(i.REMOVE_ROLE = 1)] = "REMOVE_ROLE"),
        (i[(i.DENY_ROLE = 2)] = "DENY_ROLE");
    },
    289465: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(481060),
        o = t(574768);
      function r(e) {
        let { bar: n, children: t, className: a, inModal: r, title: d } = e;
        return (0, i.jsxs)(l.Card, {
          editable: !0,
          className: s()(o.card, a, { [o.inModal]: r }),
          children: [
            (0, i.jsxs)("div", {
              className: s()(o.cardHeader, { [o.inModal]: r }),
              children: [
                (0, i.jsx)(l.Text, {
                  variant: "text-xs/semibold",
                  className: o.title,
                  children: d,
                }),
                (0, i.jsx)("div", { children: n }),
              ],
            }),
            r ? (0, i.jsx)(l.FormDivider, {}) : null,
            t,
          ],
        });
      }
    },
    590157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        o = t(366598),
        r = t(821864),
        d = t(905753),
        c = t(995390),
        u = t(469880),
        I = t(665578),
        m = t(689938),
        _ = t(103401);
      function N(e) {
        let { application: n, canNavigate: t, guildId: c } = e,
          I = (0, s.e7)([d.Z], () => d.Z.isUnavailable());
        return (a.useEffect(() => (r.I4(n.id), r.kZ), [n.id]),
        a.useEffect(() => {
          r.gq(n.id, c, n.id), r.Sn(c, n.id);
        }, [n.id, c]),
        I)
          ? null
          : (0, i.jsxs)(a.Fragment, {
              children: [
                (0, i.jsx)(o.Z, {
                  icon: (0, i.jsx)(l.SlashBoxIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                  title:
                    m.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS,
                }),
                (0, i.jsx)(l.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children:
                    m.Z.Messages
                      .INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION,
                }),
                (0, i.jsx)(E, { guildId: c, applicationId: n.id }),
                (0, i.jsx)(u.Z, {
                  applicationIcon: n.icon,
                  applicationName: n.name,
                  canNavigate: t,
                  guildId: c,
                }),
              ],
            });
      }
      function E(e) {
        let { applicationId: n, guildId: t } = e,
          {
            originalApplicationPermissions: a,
            editedTargetPermissions: s,
            selectedPermissionCount: l,
          } = (0, c.Z)(t, n);
        return (0, i.jsx)("div", {
          className: _.applicationPermissions,
          children: (0, i.jsx)(I.Z, {
            applicationId: n,
            guildId: t,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: a,
            selectedPermissionCount: l,
          }),
        });
      }
    },
    270394: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(512722),
        r = t.n(o),
        d = t(392711),
        c = t.n(d),
        u = t(399606),
        I = t(692547),
        m = t(481060),
        _ = t(447543),
        N = t(225433),
        E = t(129861),
        T = t(493544),
        h = t(700582),
        g = t(410030),
        p = t(933557),
        f = t(346486),
        O = t(600164),
        x = t(666657),
        C = t(487419),
        S = t(664452),
        A = t(560114),
        R = t(699516),
        b = t(594174),
        Z = t(965638),
        v = t(981631),
        M = t(689938),
        L = t(778011),
        j = t(440376),
        D = t(224499);
      let P = { INVITER: 3, INVITE_CODE: 3, USES: 1, EXPIRES: 2 };
      function B(e) {
        var n, t;
        let {
            invite: a,
            showChannel: s = !1,
            inviteDisabled: o = !1,
            hide: r = !1,
          } = e,
          d = a.uses;
        return (
          a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)),
          (0, i.jsxs)(O.Z, {
            className: l()(L.inviteSettingsInviteRow, j.card, {
              [L.inviteDisabledRow]: o,
            }),
            children: [
              (0, i.jsx)(O.Z, {
                grow: P.INVITER,
                basis: 0,
                align: O.Z.Align.CENTER,
                className: l()(L.text),
                children: (0, i.jsxs)(O.Z.Child, {
                  children: [
                    null == (n = a.inviter)
                      ? null
                      : (0, i.jsxs)("div", {
                          className: L.user,
                          children: [
                            (0, i.jsx)(h.Z, {
                              user: n,
                              size: m.AvatarSizes.SIZE_20,
                              className: L.avatar,
                            }),
                            (0, i.jsx)(E.Z, {
                              className: L.username,
                              discriminatorClass: L.discriminator,
                              user: n,
                            }),
                          ],
                        }),
                    ((t = a.channel),
                    s
                      ? (0, i.jsx)(m.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: (0, p.F6)(t, b.default, R.Z, !0),
                        })
                      : null),
                  ],
                }),
              }),
              (0, i.jsx)(O.Z, {
                grow: P.INVITE_CODE,
                shrink: 1,
                basis: 0,
                align: O.Z.Align.CENTER,
                className: L.text,
                children: (0, i.jsx)(m.Text, {
                  className: L.inviteCode,
                  variant: "text-sm/normal",
                  children: r ? "..." : a.code,
                }),
              }),
              (0, i.jsx)(O.Z, {
                grow: P.USES,
                basis: 0,
                justify: O.Z.Justify.END,
                align: O.Z.Align.CENTER,
                className: l()(L.text),
                children: (0, i.jsx)(m.Text, {
                  className: L.uses,
                  variant: "text-sm/normal",
                  children: d,
                }),
              }),
              (0, i.jsx)(O.Z, {
                grow: P.EXPIRES,
                basis: 0,
                align: O.Z.Align.CENTER,
                justify: O.Z.Justify.END,
                className: l()(L.text, L.countdownColumn),
                children: (0, i.jsx)(m.Text, {
                  className: L.countdown,
                  variant: "text-sm/normal",
                  children: (0, i.jsx)(f.Z, { deadline: a.getExpiresAt() }),
                }),
              }),
              (0, i.jsx)(N.Z, {
                className: L.revokeInvite,
                onClick: () => {
                  _.Z.revokeInvite(a);
                },
              }),
            ],
          })
        );
      }
      function y(e) {
        let {
          invites: n,
          guild: s,
          hide: l,
          channel: o = null,
          showChannel: d = !1,
          loading: _ = !1,
          canCreateInvites: N = !1,
        } = e;
        r()(null != s, "guild is required");
        let E = (0, Z.M)(s),
          h = (0, u.e7)([C.Z], () => C.Z.getGuildIncident(s.id)),
          p =
            s.hasFeature(v.oNc.INVITES_DISABLED) ||
            ((null == h ? void 0 : h.invitesDisabledUntil) != null &&
              new Date(h.invitesDisabledUntil) > new Date()),
          f = (0, g.ZP)(),
          R = a.useMemo(
            () =>
              null == n || _
                ? []
                : c()(n)
                    .sortBy((e) => {
                      var n, t;
                      return (
                        null !==
                          (t =
                            null === (n = e.inviter) || void 0 === n
                              ? void 0
                              : n.username) && void 0 !== t
                          ? t
                          : ""
                      ).toLowerCase();
                    })
                    .value(),
            [n, _],
          ),
          b = () => {
            (0, m.openModalLazy)(
              async () => (e) =>
                (0, i.jsx)(A.default, {
                  ...e,
                  channel: o,
                  guild: s,
                  source: v.t4x.SETTINGS_INVITE,
                }),
            );
          },
          j = () => {
            let e = { source: x.Zu.GUILD_SETTINGS };
            (0, m.openModalLazy)(
              async () => (n) =>
                (0, i.jsx)(S.default, {
                  ...n,
                  guildId: s.id,
                  analyticsData: e,
                }),
            );
          };
        return (0, i.jsx)(T.Xi, {
          sections: [Math.max(1, R.length)],
          renderSection: () => {
            let e;
            return (
              (e =
                0 !== R.length || _
                  ? (0, i.jsxs)(O.Z, {
                      children: [
                        (0, i.jsx)(O.Z.Child, {
                          grow: P.INVITER,
                          basis: 0,
                          className: D.marginReset,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_INVITER,
                          }),
                        }),
                        (0, i.jsx)(O.Z.Child, {
                          basis: 0,
                          grow: P.INVITE_CODE,
                          className: D.marginReset,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_INVITE_CODE,
                          }),
                        }),
                        (0, i.jsx)(O.Z.Child, {
                          grow: P.USES,
                          basis: 0,
                          className: L.textAlignRight,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_USES,
                          }),
                        }),
                        (0, i.jsx)(O.Z.Child, {
                          grow: P.EXPIRES,
                          basis: 0,
                          className: L.textAlignRight,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_EXPIRES,
                          }),
                        }),
                      ],
                    })
                  : (0, i.jsxs)(m.EmptyState, {
                      theme: f,
                      children: [
                        (0, i.jsx)(m.EmptyStateImage, {
                          darkSrc: t(914814),
                          lightSrc: t(370392),
                          width: 256,
                          height: 130,
                        }),
                        (0, i.jsx)(m.EmptyStateText, {
                          note: M.Z.Messages.NO_INVITES_BODY,
                          children: M.Z.Messages.NO_INVITES_LABEL,
                        }),
                      ],
                    })),
              (0, i.jsx)(
                m.FormSection,
                {
                  className: L.headerSection,
                  children: (0, i.jsxs)(m.HeadingLevel, {
                    component: (0, i.jsx)(m.FormTitle, {
                      tag: m.FormTitleTags.H1,
                      children: M.Z.Messages.INVITES,
                    }),
                    children: [
                      (0, i.jsx)(m.FormText, {
                        className: D.marginBottom20,
                        type: m.FormTextTypes.DESCRIPTION,
                        children: N
                          ? M.Z.Messages.SETTINGS_INVITE_TIP.format({
                              onCreateInvite: b,
                            })
                          : M.Z.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE,
                      }),
                      (0, i.jsxs)("div", {
                        className: L.inviteDisabledContainer,
                        children: [
                          (0, i.jsx)(m.Button, {
                            size: m.Button.Sizes.SMALL,
                            color: p
                              ? m.Button.Colors.BRAND
                              : m.Button.Colors.RED,
                            disabled: !E,
                            onClick: j,
                            children: p
                              ? M.Z.Messages.ENABLE_INVITES
                              : M.Z.Messages.DISABLE_INVITES,
                          }),
                          p &&
                            (0, i.jsxs)("div", {
                              className: L.inviteDisabledTip,
                              children: [
                                (0, i.jsx)(m.CircleWarningIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: I.Z.unsafe_rawColors.YELLOW_300.css,
                                }),
                                (0, i.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  children: M.Z.Messages.INVITES_DISABLED_TIP,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, i.jsx)(m.FormDivider, { className: L.headerDivider }),
                      e,
                    ],
                  }),
                },
                "header",
              )
            );
          },
          renderRow: (e) => {
            let { section: n, row: t } = e;
            if (0 === R.length && 0 === t && _)
              return (0, i.jsx)(
                m.Spinner,
                {
                  className: D.marginTop20,
                  type: m.Spinner.Type.SPINNING_CIRCLE,
                },
                "spinner",
              );
            if (n > 0) return null;
            let a = R[t];
            return null == a
              ? null
              : (0, i.jsx)(
                  B,
                  { hide: l, invite: a, showChannel: d, inviteDisabled: p },
                  a.code,
                );
          },
          rowHeight: (e, n) =>
            e > 0
              ? 0
              : 0 === R.length && 0 === n && _
                ? 62
                : null != R[n]
                  ? 62
                  : 0,
          sectionHeight: () => (0 !== R.length || _ ? 120 : 344),
        });
      }
    },
    208567: function (e, n, t) {
      t.d(n, {
        S: function () {
          return T;
        },
      }),
        t(47120);
      var i,
        a = t(735250),
        s = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(512722),
        d = t.n(r),
        c = t(481060),
        u = t(624138),
        I = t(813197),
        m = t(981631),
        _ = t(689938),
        N = t(953752);
      function E(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function T(e) {
        let { className: n, icon: t = null } = e;
        return (0, a.jsx)(c.ThemeProvider, {
          theme: m.BRd.LIGHT,
          children: (e) =>
            (0, a.jsx)("div", {
              className: o()(N.imageUploaderIcon, n, e),
              children: t,
            }),
        });
      }
      class h extends (i = s.PureComponent) {
        handleExternalFileChange(e) {
          d()(
            null != this.inputRef.current,
            "ImageInputRef asked to handleExternalFileChange when not mounted",
          ),
            this.inputRef.current.handleFileChange(e);
        }
        render() {
          var e;
          let n, t, i, s;
          let {
            image: l,
            hint: r,
            name: d,
            makeURL: E,
            disabled: h,
            onChange: g,
            showIcon: p,
            showIconDisabled: f,
            className: O,
            imageClassName: x,
            iconClassName: C,
            iconWrapperClassName: S,
            icon: A,
            hideSize: R,
            imageStyle: b,
            showRemoveButton: Z,
            maxFileSizeBytes: v,
            onFileSizeError: M,
            onOpenImageSelectModal: L,
            "aria-label": j,
          } = this.props;
          if (
            (null != (n = null != l && /^data:/.test(l) ? l : E(l))
              ? (t = 'url("'.concat(n, '")'))
              : null != d &&
                (i = (0, a.jsx)(c.Heading, {
                  variant: "heading-xxl/normal",
                  color: "always-white",
                  className: N.imageUploaderAcronym,
                  children: (0, u.Zg)(d),
                })),
            h)
          )
            return (0, a.jsx)("div", {
              className: o()(N.imageUploader, N.disabled, O),
              children: (0, a.jsxs)("div", {
                className: o()(N.imageUploaderInner, x),
                style: { ...b, backgroundImage: t },
                children: [
                  i,
                  f &&
                    (0, a.jsx)("div", {
                      className: o()(
                        N.imageUploaderIcon,
                        N.imageUploaderIconDisabled,
                        C,
                      ),
                      children: A,
                    }),
                ],
              }),
            });
          null != l
            ? (s = (0, a.jsx)(c.Anchor, {
                className: N.removeButton,
                onClick: this.handleRemove,
                children: _.Z.Messages.REMOVE,
              }))
            : !R &&
              (s = (0, a.jsx)("small", {
                className: N.sizeInfo,
                children: _.Z.Messages.MINIMUM_SIZE.format({ size: m.IXf }),
              }));
          let D =
            null !== (e = null != j ? j : r) && void 0 !== e
              ? e
              : _.Z.Messages.CHANGE_AVATAR;
          return (0, a.jsxs)("div", {
            className: o()(N.imageUploader, O),
            children: [
              (0, a.jsx)(c.FocusRing, {
                within: !0,
                children: (0, a.jsxs)("div", {
                  className: p ? o()(N.imageUploaderIconWrapper, S) : void 0,
                  children: [
                    (0, a.jsxs)("div", {
                      className: o()(N.imageUploaderInner, x),
                      style: { ...b, backgroundImage: t },
                      children: [
                        (0, a.jsx)("span", { "aria-hidden": !0, children: i }),
                        null != L
                          ? (0, a.jsx)(c.Clickable, {
                              className: N.imageUploaderFileInput,
                              "aria-label": D,
                              onClick: L,
                            })
                          : (0, a.jsx)(I.ZP, {
                              ref: this.inputRef,
                              onChange: g,
                              className: N.imageUploaderFileInput,
                              "aria-label": D,
                              tabIndex: 0,
                              maxFileSizeBytes: v,
                              onFileSizeError: M,
                            }),
                      ],
                    }),
                    null != r &&
                      (0, a.jsx)("div", {
                        className: N.imageUploaderHint,
                        "aria-hidden": "true",
                        children: r,
                      }),
                    p && (0, a.jsx)(T, { className: C, icon: A }),
                  ],
                }),
              }),
              Z ? s : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            E(this, "inputRef", s.createRef()),
            E(this, "handleRemove", () => {
              this.props.onChange(null);
            });
        }
      }
      E(h, "defaultProps", {
        name: "",
        makeURL: (e) => e,
        disabled: !1,
        showIcon: !1,
        hideSize: !1,
        showRemoveButton: !0,
        maxFileSizeBytes: 1 / 0,
        icon: null,
      }),
        (n.Z = h);
    },
    486199: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(481060),
        o = t(600164),
        r = t(528144),
        d = t(689938),
        c = t(479422);
      function u(e) {
        let {
          name: n,
          description: t,
          icon: a,
          imageSrc: u,
          iconBackgroundColor: I,
          iconClassName: m,
          details: _,
          detailsClassName: N,
          isHeader: E,
          isPremium: T,
        } = e;
        return (0, i.jsxs)(o.Z, {
          justify: o.Z.Justify.CENTER,
          className: c.wrapper,
          children: [
            null != a || null != u
              ? (0, i.jsx)(o.Z.Child, {
                  shrink: 0,
                  grow: 0,
                  children: (function (e, n, t, a) {
                    if (null != n)
                      return (0, i.jsx)("img", {
                        alt: "",
                        src: n,
                        className: s()(c.iconWrapper, a),
                      });
                    let l = null;
                    return (
                      null != e &&
                        (l =
                          "string" == typeof e
                            ? (0, i.jsx)("img", {
                                alt: "",
                                src: e,
                                className: s()(c.icon, a),
                              })
                            : (0, i.jsx)(e, {
                                className: s()(c.icon, a),
                                color: "currentColor",
                              })),
                      (0, i.jsx)(o.Z, {
                        align: o.Z.Align.CENTER,
                        justify: o.Z.Justify.CENTER,
                        style: { backgroundColor: t },
                        className: c.iconWrapper,
                        children: l,
                      })
                    );
                  })(a, u, I, m),
                })
              : null,
            (function (e) {
              let {
                  name: n,
                  description: t,
                  details: a,
                  detailsClassName: u,
                  isHeader: I,
                  isPremium: m,
                } = e,
                _ =
                  null == a
                    ? void 0
                    : a.map((e, n) => {
                        let { icon: t, text: a } = e;
                        return (0, i.jsxs)(
                          "div",
                          {
                            className: s()(
                              c.detailsWrapper,
                              I ? c.headerDetailsWrapper : null,
                            ),
                            children: [
                              null != t
                                ? (0, i.jsx)(t, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: c.detailsIcon,
                                  })
                                : null,
                              (0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: u,
                                children: a,
                              }),
                            ],
                          },
                          n,
                        );
                      });
              return (0, i.jsxs)(o.Z, {
                direction: o.Z.Direction.VERTICAL,
                children: [
                  (0, i.jsxs)(r.Z, {
                    size: I ? r.Z.Sizes.SIZE_24 : r.Z.Sizes.SIZE_16,
                    className: I ? c.header : c.secondaryHeader,
                    children: [
                      n,
                      m &&
                        (0, i.jsx)(l.Tooltip, {
                          text: d.Z.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
                          children: (e) =>
                            (0, i.jsx)(l.TicketIcon, {
                              size: "xs",
                              color: "currentColor",
                              ...e,
                              className: c.premiumIcon,
                            }),
                        }),
                    ],
                  }),
                  null != t
                    ? (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t,
                      })
                    : null,
                  (0, i.jsx)(o.Z, {
                    direction: o.Z.Direction.HORIZONTAL,
                    align: o.Z.Align.CENTER,
                    wrap: o.Z.Wrap.WRAP,
                    children: _,
                  }),
                ],
              });
            })({
              name: n,
              description: t,
              details: _,
              detailsClassName: N,
              isHeader: E,
              isPremium: T,
            }),
          ],
        });
      }
    },
    366598: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(481060),
        r = t(169991);
      function d(e) {
        let { children: n, icon: t, title: s } = e;
        return (0, i.jsxs)("header", {
          className: r.header,
          children: [
            (0, i.jsxs)("div", {
              className: r.name,
              children: [
                a.cloneElement(t, {
                  className: l()(t.props.className, r.icon),
                  height: 24,
                  width: 24,
                }),
                (0, i.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  className: r.title,
                  children: s,
                }),
              ],
            }),
            n,
          ],
        });
      }
    },
    919196: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(47120),
        t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        o = t(668781),
        r = t(600164),
        d = t(434404),
        c = t(590157),
        u = t(280885),
        I = t(496675),
        m = t(768581),
        _ = t(709054),
        N = t(51144),
        E = t(486199),
        T = t(366598),
        h = t(125657),
        g = t(725875),
        p = t(981631),
        f = t(689938),
        O = t(819949);
      function x(e) {
        let { application: n, guild: t, integration: a, ...s } = e;
        return (0, i.jsx)(l.ConfirmModal, {
          ...s,
          header: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
            applicationName: n.name,
          }),
          confirmText: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
          cancelText: f.Z.Messages.CANCEL,
          onConfirm: () => {
            d.Z.disableIntegration(t.id, a.id).catch(() => {
              o.Z.show({
                title: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                body: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR,
              });
            });
          },
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
              applicationName: n.name,
            }),
          }),
        });
      }
      function C(e) {
        var n;
        let {
            guild: t,
            applicationIntegration: o,
            selectableWebhookChannels: d,
            editedWebhook: C,
            errors: S,
            canNavigate: A,
          } = e,
          { application: R, integration: b, webhooks: Z } = o,
          [v, M] = (0, s.Wu)(
            [I.Z],
            () => [
              I.Z.can(p.Plq.MANAGE_ROLES, t),
              null == R.bot ||
                I.Z.canManageUser(p.Plq.MANAGE_GUILD, R.bot.id, t),
            ],
            [R.bot, t],
          ),
          L = (0, s.e7)([I.Z], () => I.Z.can(p.Plq.MANAGE_WEBHOOKS, t), [t]),
          j = a.useCallback(() => {
            A() &&
              (0, l.openModal)((e) =>
                (0, i.jsx)(x, {
                  guild: t,
                  application: R,
                  integration: b,
                  ...e,
                }),
              );
          }, [R, A, t, b]),
          D = a.useMemo(() => {
            let e = [
              {
                icon: l.ClockIcon,
                text: f.Z.Messages.INTEGRATION_ADDED_DATE.format({
                  timestamp: _.default.extractTimestamp(b.id),
                }),
              },
            ];
            return (
              null != b.user &&
                e.push({
                  icon: l.UserIcon,
                  text: f.Z.Messages.INTEGRATION_ADDED_USER.format({
                    user: N.ZP.getUserTag(b.user),
                  }),
                }),
              e
            );
          }, [b.id, b.user]),
          P = a.useMemo(
            () =>
              null != R.bot
                ? (0, i.jsx)(h.Z, { guild: t, applicationIntegration: o })
                : (0, i.jsx)(l.Card, {
                    className: O.emptyCard,
                    editable: !0,
                    children: (0, i.jsx)(l.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: f.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT,
                    }),
                  }),
            [R.bot, o, t],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(E.Z, {
              name: R.name,
              imageSrc:
                null !== (n = R.getIconURL(32)) && void 0 !== n ? n : m.pK["0"],
              details: D,
              isHeader: !0,
            }),
            (null == R ? void 0 : R.description) != null
              ? (0, i.jsx)(u.Z, {
                  userBio: R.description,
                  className: O.headerDescription,
                })
              : null,
            v
              ? (0, i.jsx)(c.Z, {
                  application: R,
                  canNavigate: A,
                  guildId: t.id,
                })
              : null,
            (0, i.jsx)(l.FormDivider, { className: O.headerDivider }),
            null != R.bot
              ? (0, i.jsxs)("div", {
                  className: O.section,
                  children: [
                    (0, i.jsx)(T.Z, {
                      icon: (0, i.jsx)(l.RobotIcon, {
                        size: "xs",
                        color: "currentColor",
                      }),
                      title: f.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
                    }),
                    P,
                  ],
                })
              : null,
            (0, i.jsxs)("div", {
              className: O.section,
              children: [
                (0, i.jsx)(T.Z, {
                  icon: (0, i.jsx)(l.WebhookIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                  title: f.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS,
                }),
                Z.length > 0
                  ? (0, i.jsx)(g.Z, {
                      webhooks: Z,
                      editedWebhook: C,
                      selectableWebhookChannels: d,
                      errors: S,
                      canNavigate: A,
                    })
                  : (0, i.jsx)(l.Card, {
                      className: O.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(l.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: L
                          ? f.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS
                          : f.Z.Messages
                              .INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS,
                      }),
                    }),
              ],
            }),
            (0, i.jsx)(l.FormDivider, { className: O.headerDivider }),
            (0, i.jsxs)(r.Z, {
              className: O.section,
              justify: r.Z.Justify.BETWEEN,
              align: r.Z.Align.CENTER,
              children: [
                (0, i.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: M
                    ? f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY
                    : f.Z.Messages
                        .INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS,
                }),
                (0, i.jsx)(r.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(l.Button, {
                    size: l.Button.Sizes.SMALL,
                    color: l.Button.Colors.RED,
                    look: l.Button.Looks.FILLED,
                    disabled: !M,
                    onClick: j,
                    children: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    731072: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(139387),
        o = t(726542),
        r = t(434404),
        d = t(486199),
        c = t(13051),
        u = t(288179);
      function I(e) {
        let {
            integrations: n,
            editedIntegration: t,
            guild: I,
            platformType: m,
            labelText: _,
            descriptionText: N,
            helpText: E,
            canNavigate: T,
          } = e,
          h = o.Z.get(m),
          g = a.useCallback(
            async (e) => {
              T() &&
                (await r.Z.enableIntegration(I.id, e.type, e.id),
                l.Z.startEditingIntegration(e.id));
            },
            [T, I.id],
          ),
          p = a.useCallback(
            (e) => {
              T() &&
                (e.id === (null == t ? void 0 : t.id) &&
                  l.Z.stopEditingIntegration(),
                r.Z.disableIntegration(I.id, e.id));
            },
            [T, t, I.id],
          ),
          f = a.useCallback(
            (e) => {
              T() &&
                (e === (null == t ? void 0 : t.id)
                  ? l.Z.stopEditingIntegration()
                  : l.Z.startEditingIntegration(e));
            },
            [T, t],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.Z, {
              name: _,
              icon: null == h ? void 0 : h.icon.whiteSVG,
              iconBackgroundColor: null == h ? void 0 : h.color,
              iconClassName: u.platformIcon,
              description: N,
              isHeader: !0,
            }),
            (0, i.jsx)(s.FormDivider, { className: u.headerDivider }),
            n.map((e) =>
              (0, i.jsx)(
                c.Z,
                {
                  integration: e,
                  editedIntegration: t,
                  guild: I,
                  isExpanded: (null == t ? void 0 : t.id) === e.id,
                  onEnable: g,
                  onDisable: p,
                  onToggleExpand: () => f(e.id),
                },
                e.id,
              ),
            ),
            (0, i.jsx)(s.Text, {
              className: u.helpText,
              color: "text-muted",
              variant: "text-sm/normal",
              children: E,
            }),
          ],
        });
      }
    },
    494118: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(780384),
        s = t(481060),
        l = t(410030),
        o = t(600164),
        r = t(63063),
        d = t(725875),
        c = t(981631),
        u = t(689938),
        I = t(488558),
        m = t(893916),
        _ = t(408942);
      function N(e) {
        let {
            followedChannelWebhooks: n,
            editedWebhook: t,
            selectableWebhookChannels: N,
            errors: E,
            canNavigate: T,
          } = e,
          h = (0, l.ZP)();
        return (0, i.jsxs)(s.FormSection, {
          children: [
            (0, i.jsx)(s.FormText, {
              type: s.FormTextTypes.DESCRIPTION,
              children:
                u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
                  helpdeskArticle: r.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING),
                }),
            }),
            (0, i.jsx)(s.FormDivider, { className: I.headerDivider }),
            n.length > 0
              ? (0, i.jsx)(d.Z, {
                  webhooks: n,
                  editedWebhook: t,
                  selectableWebhookChannels: N,
                  errors: E,
                  canNavigate: T,
                })
              : (function (e, n) {
                  let t = (0, a.wj)(e) ? m : _;
                  return (0, i.jsxs)(o.Z, {
                    direction: o.Z.Direction.VERTICAL,
                    align: o.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: t,
                        className: I.emptyStateImage,
                      }),
                      (0, i.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        children:
                          u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY,
                      }),
                      (0, i.jsx)(s.Button, {
                        className: I.emptyStateButton,
                        onClick: n,
                        children:
                          u.Z.Messages
                            .INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON,
                      }),
                    ],
                  });
                })(h, () => open(r.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING))),
          ],
        });
      }
    },
    351644: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return B;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(658722),
        r = t.n(o),
        d = t(442837),
        c = t(780384),
        u = t(481060),
        I = t(37234),
        m = t(410030),
        _ = t(726542),
        N = t(132871),
        E = t(147890),
        T = t(231757),
        h = t(600164),
        g = t(553795),
        p = t(496675),
        f = t(626135),
        O = t(768581),
        x = t(63063),
        C = t(709054),
        S = t(51144),
        A = t(585835),
        R = t(997787),
        b = t(981631),
        Z = t(689938),
        v = t(112286),
        M = t(509399),
        L = t(790904),
        j = t(609182);
      function D(e, n) {
        return n.includes(e);
      }
      function P(e) {
        let { query: n, setQuery: t } = e,
          s = a.useCallback(
            (e) => {
              t(e);
            },
            [t],
          );
        return (0, i.jsx)("div", {
          className: v.searchContainer,
          children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: s,
            onClear: () => t(""),
            placeholder: Z.Z.Messages.INTEGRATIONS_SEARCH,
            "aria-label": Z.Z.Messages.INTEGRATIONS_SEARCH,
          }),
        });
      }
      function B(e) {
        let {
            guild: n,
            channel: t,
            applicationIntegrations: s,
            builtInIntegrations: o,
            customWebhooks: B,
            followedChannelWebhooks: y,
            isLoading: G,
            canCreateWebhook: k,
            onManageBuiltIn: U,
            onManageCustomWebhooks: w,
            onManageFollowedChannels: H,
            onManageApplication: W,
          } = e,
          F = (0, m.ZP)(),
          [V, K] = a.useState(""),
          { isFetchingConnections: Y, accounts: z } = (0, d.cj)(
            [g.Z],
            () => ({
              isFetchingConnections: g.Z.isFetching(),
              accounts: g.Z.getAccounts(),
            }),
            [],
          ),
          { canManageWebhooks: q, canManageGuild: X } = (0, d.cj)(
            [p.Z],
            () => ({
              canManageWebhooks:
                (null != n && p.Z.can(b.Plq.MANAGE_WEBHOOKS, n)) ||
                (null != t && p.Z.can(b.Plq.MANAGE_WEBHOOKS, t)),
              canManageGuild:
                null != n && null == t && p.Z.can(b.Plq.MANAGE_GUILD, n),
            }),
            [n, t],
          ),
          {
            availableTwitchIntegrations: J,
            availableYoutubeIntegrations: Q,
            guildTwitchIntegrations: $,
            guildYoutubeIntegrations: ee,
          } = a.useMemo(() => {
            var e, n, t, i, a, s, l, r;
            return {
              availableTwitchIntegrations:
                null !==
                  (a =
                    null === (e = o.twitch) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== a
                  ? a
                  : 0,
              availableYoutubeIntegrations:
                null !==
                  (s =
                    null === (n = o.youtube) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== s
                  ? s
                  : 0,
              guildTwitchIntegrations:
                null !==
                  (l =
                    null === (t = o.twitch) || void 0 === t
                      ? void 0
                      : t.filter((e) => e.enabled).length) && void 0 !== l
                  ? l
                  : 0,
              guildYoutubeIntegrations:
                null !==
                  (r =
                    null === (i = o.youtube) || void 0 === i
                      ? void 0
                      : i.filter((e) => e.enabled).length) && void 0 !== r
                  ? r
                  : 0,
            };
          }, [o.twitch, o.youtube]),
          { showTwitchCard: en, showYoutubeCard: et } = a.useMemo(() => {
            if (Y || !X) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = null == n ? void 0 : n.hasFeature(b.oNc.COMMUNITY),
              t = z.filter((e) => e.type === b.ABu.TWITCH).length > 0,
              i = z.filter((e) => e.type === b.ABu.YOUTUBE).length > 0;
            return {
              showTwitchCard: J > 0 || (!t && e),
              showYoutubeCard: Q > 0 || (!i && e),
            };
          }, [Y, X, n, z, J, Q]),
          ei = Object.values(s).length,
          ea = a.useMemo(() => {
            let e = ei > 100 ? D : r();
            return Object.values(s).filter((n) => {
              var t, i, a;
              let { application: s } = n;
              return (
                (t = s),
                (i = V),
                (a = e),
                !!(
                  "" === (i = i.trim().toLowerCase()) ||
                  t.id === i ||
                  a(i, t.name.toLowerCase()) ||
                  (null != t.bot && a(i, t.bot.username.toLowerCase()))
                ) || !1
              );
            });
          }, [s, ei, V]),
          es = (0, d.e7)(
            [R.Z],
            () => {
              if (null != n)
                return ea.find((e) =>
                  R.Z.canShowOverviewTooltip(n.id, e.integration.id),
                );
            },
            [ea, n],
          ),
          el = a.useMemo(
            () =>
              void 0 !== es
                ? [
                    es,
                    ...ea.filter((e) => e.integration.id !== es.integration.id),
                  ]
                : ea,
            [ea, es],
          ),
          eo = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
          [er, ed] = a.useState(!1),
          ec = a.useRef(0),
          eu = () => {
            ed(!0),
              clearTimeout(ec.current),
              (ec.current = setTimeout(() => {
                ed(!1);
              }, 200));
          };
        a.useEffect(
          () => (
            window.addEventListener("scroll", eu, !0),
            () => window.removeEventListener("scroll", eu)
          ),
        );
        let eI = el.map((e) => {
            let t =
              !eo &&
              e.integration.id === (null == es ? void 0 : es.integration.id);
            return (function (e, n, t, a, s) {
              var l;
              let { application: o, integration: r } = n,
                d = [];
              return (
                null != r.user
                  ? d.push({
                      icon: u.ClockIcon,
                      text: Z.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                        timestamp: C.default.extractTimestamp(r.id),
                        user: S.ZP.getUserTag(r.user),
                      }),
                    })
                  : d.push({
                      icon: u.ClockIcon,
                      text: Z.Z.Messages.INTEGRATION_ADDED_DATE.format({
                        timestamp: C.default.extractTimestamp(r.id),
                      }),
                    }),
                (0, i.jsx)(
                  A.Z,
                  {
                    name: o.name,
                    imageSrc:
                      null !== (l = o.getIconURL(48)) && void 0 !== l
                        ? l
                        : O.pK["0"],
                    integration: n,
                    buttonText: Z.Z.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                    hasNextSection: !0,
                    onButtonClick: () => {
                      t(o.id),
                        f.default.track(b.rMx.APP_MANAGE_CTA_CLICKED, {
                          application_id: o.id,
                          guild_id: null == e ? void 0 : e.id,
                          is_admin:
                            null != e
                              ? p.Z.can(b.Plq.ADMINISTRATOR, e)
                              : void 0,
                        });
                    },
                    details: d,
                    guildId: null == e ? void 0 : e.id,
                    isScrolling: a,
                    canShowMigrationTooltip: s,
                  },
                  "integration-".concat(r.id),
                )
              );
            })(n, e, W, er, t);
          }),
          em = (0, i.jsx)("div", { className: v.footerImage });
        0 === eI.length &&
          X &&
          ((eI = (function (e, n, t) {
            let a = (0, c.wj)(e) ? L : j,
              s = (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                align: h.Z.Align.CENTER,
                className: v.emptyStateWrapper,
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: a,
                    className: v.emptyStateSearchImage,
                  }),
                  (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: v.emptyStateCard,
                    children: (0, i.jsx)(u.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: Z.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH,
                    }),
                  }),
                ],
              }),
              l = (0, i.jsx)(u.Card, {
                editable: !0,
                className: v.emptyStateCard,
                children: (0, i.jsxs)("div", {
                  className: v.emptyStateText,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: M,
                      className: v.emptyStateImage,
                    }),
                    (0, i.jsx)(u.Heading, {
                      color: "header-secondary",
                      variant: "heading-xl/bold",
                      children:
                        Z.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS,
                    }),
                    (0, i.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children:
                        Z.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format(
                          {
                            handleGoToAppDirectory: () => {
                              (0, E.goToAppDirectory)({
                                guildId: t,
                                entrypoint: {
                                  name: N.ApplicationDirectoryEntrypointNames
                                    .GUILD_INTEGRATION_SETTINGS,
                                },
                              }),
                                (0, I.xf)();
                            },
                          },
                        ),
                    }),
                  ],
                }),
              });
            return n > 0 ? s : l;
          })(F, ei, null == n ? void 0 : n.id)),
          (em = null));
        let e_ = x.Z.getArticleURL(b.BhN.INTEGRATIONS),
          eN =
            null != t
              ? Z.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL
              : Z.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
          eE = [];
        if (q) {
          var eT, eh, eg, ep, ef;
          let e;
          if (
            (eE.push(
              ((eT = B.length),
              (eh = k),
              (eg = w),
              (e =
                eT > 0
                  ? Z.Z.Messages.INTEGRATIONS_WEBHOOKS_BUTTON
                  : Z.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON),
              (0, i.jsx)(
                A.Z,
                {
                  name: Z.Z.Messages.INTEGRATIONS_WEBHOOKS,
                  icon: u.WebhookIcon,
                  buttonText: e,
                  buttonDisabled: !eh,
                  onButtonClick: eg,
                  hasNextSection: eT > 0,
                  details: [
                    {
                      text: Z.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                        count: eT,
                      }),
                    },
                  ],
                },
                "webhooks",
              )),
            ),
            (null == t ? void 0 : t.type) !== b.d4z.GUILD_VOICE &&
              ((null == t ? void 0 : t.type) == null ||
                !b.TPd.GUILD_THREADS_ONLY.has(t.type)))
          ) {
            let e, n;
            eE.push(
              ((ep = y.length),
              (ef = H),
              ep > 0
                ? ((e = Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON),
                  (n = ef))
                : ((e =
                    Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON),
                  (n = () => open(x.Z.getArticleURL(b.BhN.CHANNEL_FOLLOWING)))),
              (0, i.jsx)(
                A.Z,
                {
                  name: Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                  icon: u.ChannelsFollowedIcon,
                  buttonText: e,
                  onButtonClick: n,
                  hasNextSection: ep > 0,
                  details: [
                    {
                      text: Z.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format(
                        { count: ep },
                      ),
                    },
                  ],
                },
                "channels-followed",
              )),
            );
          }
        }
        return (
          en &&
            eE.push(
              (function (e, n, t) {
                let a, s, l;
                let o = _.Z.get(b.ABu.TWITCH);
                return (
                  e > 0
                    ? ((a = Z.Z.Messages.INTEGRATIONS_TWITCH_BUTTON),
                      (s = Z.Z.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
                        count: n,
                      })),
                      (l = () => t(b.ABu.TWITCH)))
                    : ((a = Z.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON),
                      (s = Z.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY),
                      (l = () =>
                        (0, T.Z)({
                          platformType: b.ABu.TWITCH,
                          location: "Integration Settings",
                        }))),
                  (0, i.jsx)(
                    A.Z,
                    {
                      name: Z.Z.Messages.INTEGRATIONS_TWITCH,
                      icon: o.icon.whiteSVG,
                      iconBackgroundColor: o.color,
                      iconClassName: v.platformIcon,
                      buttonText: a,
                      onButtonClick: l,
                      hasNextSection: e > 0,
                      details: [{ text: s }],
                    },
                    "integrations-twitch",
                  )
                );
              })(J, $, U),
            ),
          et &&
            eE.push(
              (function (e, n, t) {
                let a, s, l;
                let o = _.Z.get(b.ABu.YOUTUBE);
                return (
                  e > 0
                    ? ((a = Z.Z.Messages.INTEGRATIONS_YOUTUBE_BUTTON),
                      (s = Z.Z.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
                        count: n,
                      })),
                      (l = () => t(b.ABu.YOUTUBE)))
                    : ((a = Z.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON),
                      (s = Z.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY),
                      (l = () =>
                        (0, T.Z)({
                          platformType: b.ABu.YOUTUBE,
                          location: "Integration Settings",
                        }))),
                  (0, i.jsx)(
                    A.Z,
                    {
                      name: Z.Z.Messages.INTEGRATIONS_YOUTUBE,
                      icon: o.icon.whiteSVG,
                      iconBackgroundColor: o.color,
                      iconClassName: v.platformIcon,
                      buttonText: a,
                      onButtonClick: l,
                      hasNextSection: e > 0,
                      details: [{ text: s }],
                    },
                    "integrations-youtube",
                  )
                );
              })(Q, ee, U),
            ),
          (0, i.jsxs)(u.FormSection, {
            className: l()(null != em ? v.footerPlaceholder : null),
            children: [
              (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: eN.format({ helpdeskArticle: e_ }),
              }),
              (0, i.jsx)(u.FormDivider, { className: v.divider }),
              G || Y || null == n
                ? (0, i.jsx)(u.Spinner, {
                    className: v.__invalid_spinner,
                    type: u.Spinner.Type.SPINNING_CIRCLE,
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      eE,
                      X
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              eE.length > 0
                                ? (0, i.jsx)(u.FormDivider, {
                                    className: v.divider,
                                  })
                                : null,
                              (0, i.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: v.sectionHeader,
                                children:
                                  Z.Z.Messages.INTEGRATIONS_APPLICATION_SECTION,
                              }),
                              ei > 4
                                ? (0, i.jsx)(P, { query: V, setQuery: K })
                                : null,
                              eI,
                            ],
                          })
                        : null,
                      em,
                    ],
                  }),
            ],
          })
        );
      }
    },
    720764: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(780384),
        l = t(481060),
        o = t(668781),
        r = t(308063),
        d = t(410030),
        c = t(600164),
        u = t(63063),
        I = t(725875),
        m = t(981631),
        _ = t(689938),
        N = t(165204),
        E = t(893916),
        T = t(408942);
      function h(e) {
        let n,
          {
            guild: t,
            channel: h,
            customWebhooks: g,
            editedWebhook: p,
            selectableWebhookChannels: f,
            refToScroller: O,
            errors: x,
            canNavigate: C,
          } = e,
          S = (0, d.ZP)(),
          [A, R] = a.useState(null),
          [b, Z] = a.useState(null);
        if (null != h) n = h;
        else {
          let e = Object.values(f);
          n = e.length > 0 ? e[0] : null;
        }
        let v = a.useCallback(async () => {
          if (C() && null !== n) {
            let e = await r.Z.create(t.id, n.id).catch((e) => {
              let { body: n, status: t } = e;
              return (
                n && n.code === m.evJ.TOO_MANY_WEBHOOKS
                  ? o.Z.show({
                      title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                      body: _.Z.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED,
                    })
                  : 429 === t
                    ? o.Z.show({
                        title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                        body: _.Z.Messages
                          .WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT,
                      })
                    : o.Z.show({
                        title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                        body: _.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                      }),
                null
              );
            });
            null != e && (Z(e.id), R(e));
          }
        }, [C, n, t]);
        a.useEffect(() => {
          0 === g.length && v();
        }, []);
        let M = null !== n;
        return (0, i.jsxs)(l.FormSection, {
          children: [
            (0, i.jsx)(l.FormText, {
              type: l.FormTextTypes.DESCRIPTION,
              children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
                helpdeskArticle: u.Z.getArticleURL(m.BhN.WEBHOOKS),
                developersArticle: m.EYA.API_DOCS_WEBHOOKS,
              }),
            }),
            (0, i.jsx)(l.FormDivider, { className: N.headerDivider }),
            g.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(l.Button, {
                      className: N.createButton,
                      size: l.Button.Sizes.SMALL,
                      disabled: !M,
                      onClick: v,
                      children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_CREATE,
                    }),
                    (0, i.jsx)(I.Z, {
                      webhooks: g,
                      editedWebhook: p,
                      selectableWebhookChannels: f,
                      lastCreatedWebhookId: null == A ? void 0 : A.id,
                      errors: x,
                      canNavigate: C,
                    }),
                  ],
                })
              : (function (e, n, t) {
                  let a = (0, s.wj)(e) ? E : T;
                  return (0, i.jsxs)(c.Z, {
                    direction: c.Z.Direction.VERTICAL,
                    align: c.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: a,
                        className: N.emptyStateImage,
                      }),
                      (0, i.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY,
                      }),
                      (0, i.jsx)(l.Button, {
                        className: N.emptyStateButton,
                        disabled: !n,
                        onClick: t,
                        children:
                          _.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON,
                      }),
                    ],
                  });
                })(S, M, v),
          ],
        });
      }
    },
    490655: function (e, n, t) {
      t(47120), t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(392711),
        l = t.n(s),
        o = t(442837),
        r = t(481060),
        d = t(139387),
        c = t(503089),
        u = t(231757),
        I = t(600164),
        m = t(106976),
        _ = t(488915),
        N = t(984933),
        E = t(496675),
        T = t(585483),
        h = t(63063),
        g = t(919196),
        p = t(731072),
        f = t(494118),
        O = t(351644),
        x = t(720764),
        C = t(981631),
        S = t(689938),
        A = t(37939);
      function R(e, n) {
        switch (e) {
          case C.b4C.APPLICATION:
            var t;
            return null !== (t = null == n ? void 0 : n.application.name) &&
              void 0 !== t
              ? t
              : "";
          case C.b4C.OVERVIEW:
            return S.Z.Messages.INTEGRATIONS_OVERVIEW;
          case C.b4C.CHANNEL_FOLLOWING:
            return S.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
          case C.b4C.TWITCH:
            return S.Z.Messages.INTEGRATIONS_TWITCH;
          case C.b4C.WEBHOOKS:
            return S.Z.Messages.INTEGRATIONS_WEBHOOKS;
          case C.b4C.YOUTUBE:
            return S.Z.Messages.INTEGRATIONS_YOUTUBE;
          default:
            return "";
        }
      }
      n.Z = a.memo(function (e) {
        let {
            section: n,
            sectionId: t,
            guild: s,
            channel: b,
            integrations: Z,
            editedIntegration: v,
            webhooks: M,
            editedWebhook: L,
            isFetching: j,
            refToScroller: D,
            errors: P,
            hasChanges: B,
          } = e,
          y = (0, o.e7)([N.ZP], () =>
            null != s ? N.ZP.getDefaultChannel(s.id) : null,
          ),
          G = (0, o.cj)([N.ZP], () =>
            N.ZP.getChannels(null == s ? void 0 : s.id),
          ),
          k = (0, o.cj)([E.Z], () =>
            l().keyBy(
              G.SELECTABLE.map((e) => e.channel).filter((e) =>
                E.Z.can(C.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          U = (0, o.cj)([E.Z], () =>
            l().keyBy(
              G.VOCAL.map((e) => e.channel).filter(
                (e) => e.isGuildVocal() && E.Z.can(C.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          w = null != b ? b : y,
          H = n === C.b4C.APPLICATION ? t : null,
          [W, F] = a.useState(c.$x),
          V = a.useCallback(
            () =>
              B()
                ? (T.S.dispatch(C.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: W,
                  }),
                  F(Math.min(W + c.d7, c.w6)),
                  T.S.dispatch(C.CkL.EMPHASIZE_NOTICE),
                  !1)
                : (F(c.$x), !0),
            [B, W],
          ),
          K = a.useCallback((e) => !!V() && (d.Z.setSection(e), !0), [V]),
          {
            applicationIntegrations: Y,
            applicationBotIds: z,
            builtInIntegrations: q,
            customWebhooks: X,
            followedChannelWebhooks: J,
          } = a.useMemo(() => {
            let e = {},
              n = {},
              t = {},
              i = [],
              a = [];
            if (null != Z)
              for (let i of Z)
                if ("discord" === i.type) {
                  if (null != i.application) {
                    var s;
                    (e[i.application.id] = {
                      application: i.application,
                      integration: i,
                      webhooks: [],
                    }),
                      (null === (s = i.application.bot) || void 0 === s
                        ? void 0
                        : s.id) !== void 0 &&
                        (n[i.application.bot.id] = i.application.id);
                  }
                } else !(i.type in t) && (t[i.type] = []), t[i.type].push(i);
            for (let n of M) {
              if (n.channel_id in k || n.channel_id in U)
                null != n.application_id && n.application_id in e
                  ? e[n.application_id].webhooks.push(n)
                  : n.type === C.ylB.CHANNEL_FOLLOWER
                    ? a.push(n)
                    : i.push(n);
            }
            return {
              applicationIntegrations: e,
              applicationBotIds: n,
              builtInIntegrations: t,
              customWebhooks: i,
              followedChannelWebhooks: a,
            };
          }, [Z, k, U, M]);
        a.useEffect(() => {
          if (!j)
            switch (n) {
              case C.b4C.TWITCH:
                null == q[C.ABu.TWITCH] && d.Z.setSection(C.b4C.OVERVIEW);
                break;
              case C.b4C.YOUTUBE:
                null == q[C.ABu.YOUTUBE] && d.Z.setSection(C.b4C.OVERVIEW);
                break;
              case C.b4C.APPLICATION:
                (null == H || !(H in z || H in Y)) &&
                  d.Z.setSection(C.b4C.OVERVIEW);
            }
        }, [Y, z, q, H, n, j]),
          a.useEffect(() => {
            if ((null == s ? void 0 : s.id) != null)
              _.Z.getEntitlementsForGuildFetchState(s.id) === _.M.NOT_FETCHED &&
                m.i1(s.id);
          }, [null == s ? void 0 : s.id]);
        let Q = null;
        switch (n) {
          case C.b4C.TWITCH:
            null != q[C.ABu.TWITCH] &&
              (Q = (0, i.jsx)(p.Z, {
                guild: s,
                integrations: q[C.ABu.TWITCH],
                editedIntegration: v,
                labelText: S.Z.Messages.INTEGRATIONS_TWITCH,
                platformType: C.ABu.TWITCH,
                descriptionText: S.Z.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
                helpText: S.Z.Messages.INTEGRATIONS_TWITCH_HELP.format({
                  connectAction: () =>
                    (0, u.Z)({
                      platformType: C.ABu.TWITCH,
                      location: "Integration Settings",
                    }),
                  helpdeskArticle: h.Z.getArticleURL(C.BhN.TWITCH_INTEGRATION),
                }),
                canNavigate: V,
              }));
            break;
          case C.b4C.YOUTUBE:
            null != q[C.ABu.YOUTUBE] &&
              (Q = (0, i.jsx)(p.Z, {
                guild: s,
                integrations: q[C.ABu.YOUTUBE],
                editedIntegration: v,
                labelText: S.Z.Messages.INTEGRATIONS_YOUTUBE,
                platformType: C.ABu.YOUTUBE,
                descriptionText: S.Z.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
                helpText: S.Z.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
                  connectAction: () =>
                    (0, u.Z)({ platformType: C.ABu.YOUTUBE }),
                  helpdeskArticle: h.Z.getArticleURL(C.BhN.YOUTUBE_INTEGRATION),
                }),
                canNavigate: V,
              }));
            break;
          case C.b4C.APPLICATION:
            var $;
            let ee =
              null != H
                ? null !== ($ = Y[z[H]]) && void 0 !== $
                  ? $
                  : Y[H]
                : null;
            null != ee &&
              (Q = (0, i.jsx)(g.Z, {
                guild: s,
                applicationIntegration: ee,
                editedWebhook: L,
                selectableWebhookChannels: k,
                errors: P,
                canNavigate: V,
              }));
            break;
          case C.b4C.CHANNEL_FOLLOWING:
            Q = (0, i.jsx)(f.Z, {
              followedChannelWebhooks: J,
              editedWebhook: L,
              selectableWebhookChannels: k,
              canNavigate: V,
              errors: P,
            });
            break;
          case C.b4C.WEBHOOKS:
            Q = (0, i.jsx)(x.Z, {
              guild: s,
              channel: b,
              customWebhooks: X,
              editedWebhook: L,
              selectableWebhookChannels: { ...k, ...U },
              canNavigate: V,
              refToScroller: D,
              errors: P,
            });
            break;
          default:
            Q = (0, i.jsx)(O.Z, {
              guild: s,
              channel: b,
              applicationIntegrations: Y,
              builtInIntegrations: q,
              customWebhooks: X,
              followedChannelWebhooks: J,
              isLoading: j || null == s,
              canCreateWebhook: null != w,
              onManageCustomWebhooks: () => {
                d.Z.setSection(C.b4C.WEBHOOKS);
              },
              onManageFollowedChannels: () => {
                d.Z.setSection(C.b4C.CHANNEL_FOLLOWING);
              },
              onManageApplication: (e) => {
                d.Z.setSection(C.b4C.APPLICATION, e);
              },
              onManageBuiltIn: (e) => {
                switch (e) {
                  case C.ABu.TWITCH:
                    d.Z.setSection(C.b4C.TWITCH);
                    break;
                  case C.ABu.YOUTUBE:
                    d.Z.setSection(C.b4C.YOUTUBE);
                }
              },
            });
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(I.Z, {
              align: I.Z.Align.CENTER,
              className: A.breadcrumbs,
              children:
                n === C.b4C.OVERVIEW
                  ? (0, i.jsx)(r.FormTitle, {
                      tag: "h1",
                      children: R(C.b4C.OVERVIEW),
                    })
                  : (0, i.jsx)(r.Breadcrumbs, {
                      activeId: n.toString(),
                      breadcrumbs: [C.b4C.OVERVIEW, n].map((e) => ({
                        id: e.toString(),
                        label: R(e, Y[H]),
                      })),
                      onBreadcrumbClick: (e) => {
                        if (n !== parseInt(e.id)) K(parseInt(e.id));
                      },
                      renderCustomBreadcrumb: (e, n) =>
                        (0, i.jsx)(r.FormTitle, {
                          tag: "h1",
                          className: n
                            ? A.breadcrumbActive
                            : A.breadcrumbInactive,
                          children: e.label,
                        }),
                    }),
            }),
            Q,
          ],
        });
      });
    },
    125657: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(149765),
        l = t(442837),
        o = t(481060),
        r = t(749210),
        d = t(412899),
        c = t(995648),
        u = t(385499),
        I = t(600164),
        m = t(422559),
        _ = t(598077),
        N = t(271383),
        E = t(430824),
        T = t(823379),
        h = t(700785),
        g = t(689938),
        p = t(276118);
      function f(e) {
        var n;
        let { guild: t, applicationIntegration: f } = e,
          O = (0, l.e7)([E.Z], () => E.Z.getRoles(t.id)),
          { application: x } = f,
          C = null != x.bot ? new _.Z(x.bot) : null,
          S = (0, l.e7)(
            [N.ZP],
            () => (null != C ? N.ZP.getMember(t.id, C.id) : null),
            [C, t],
          ),
          A = null == C ? void 0 : C.id;
        a.useEffect(() => {
          if (null != A) r.Z.requestMembersById(t.id, A);
        }, [t.id, A]);
        let R = a.useMemo(() => {
          var e, n, i;
          let a = O[t.getEveryoneRoleId()],
            l =
              null !==
                (n =
                  null == S
                    ? void 0
                    : null === (e = S.roles) || void 0 === e
                      ? void 0
                      : e.map((e) => O[e]).filter(T.lm)) && void 0 !== n
                ? n
                : [],
            o =
              null !== (i = null == a ? void 0 : a.permissions) && void 0 !== i
                ? i
                : h.Hn;
          for (let e of l) o = s.IH(o, e.permissions);
          return o;
        }, [t, O, S]);
        return null == C
          ? null
          : (0, i.jsx)(o.Card, {
              editable: !0,
              className: p.card,
              children: (0, i.jsxs)(I.Z, {
                direction: I.Z.Direction.VERTICAL,
                children: [
                  (0, i.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)("img", {
                        alt: "",
                        src: C.getAvatarURL(t.id, 32),
                        className: p.iconWrapper,
                      }),
                      (0, i.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-sm/normal",
                        children:
                          g.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format(
                            { user: C },
                          ),
                      }),
                      (0, i.jsx)(u.Z, {
                        className: p.tag,
                        verified: C.isVerifiedBot(),
                      }),
                    ],
                  }),
                  (function (e, n, t, a) {
                    let l = [],
                      r = [];
                    for (let e of m.VY) s.e$(a, e) ? l.push(e) : r.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.FormDivider, { className: p.divider }),
                        t.length > 0
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(o.FormTitle, {
                                  className: p.permissionHeader,
                                  children: g.Z.Messages.ROLES_LIST.format({
                                    numRoles: t.length,
                                  }),
                                }),
                                (0, i.jsx)(d.ZP, {
                                  className: p.rolePills,
                                  user: e,
                                  guild: n,
                                  userRoles: t,
                                  wrap: !1,
                                  readOnly: !0,
                                }),
                              ],
                            })
                          : null,
                        l.length > 0 || r.length > 0
                          ? (0, i.jsx)(c.Z, {
                              className: p.permissionList,
                              grantedPermissions: l,
                              grantedPermissionsHeader:
                                g.Z.Messages
                                  .INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
                              disabledPermissions: r,
                              disabledPermissionsHeader:
                                g.Z.Messages
                                  .INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS,
                            })
                          : null,
                      ],
                    });
                  })(
                    C,
                    t,
                    null !== (n = null == S ? void 0 : S.roles) && void 0 !== n
                      ? n
                      : [],
                    R,
                  ),
                ],
              }),
            });
      }
    },
    13051: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(913527),
        r = t.n(o),
        d = t(442837),
        c = t(481060),
        u = t(139387),
        I = t(726542),
        m = t(600164),
        _ = t(339085),
        N = t(434404),
        E = t(598077),
        T = t(430824),
        h = t(246946),
        g = t(259580),
        p = t(531087),
        f = t(768581),
        O = t(709054),
        x = t(486199),
        C = t(981631),
        S = t(689938),
        A = t(436911),
        R = t(224499);
      function b(e) {
        let n,
          {
            guild: t,
            integration: s,
            editedIntegration: o,
            isExpanded: b,
            onToggleExpand: Z,
            onDisable: v,
            onEnable: M,
          } = e,
          L = (0, d.e7)([T.Z], () => T.Z.getRoles(t.id)),
          [j, D] = a.useState(!1),
          P = (0, d.e7)([h.Z], () => h.Z.hidePersonalInformation),
          B = a.useCallback(() => {
            D(!0), M(s);
          }, [s, M]),
          y = a.useCallback(() => {
            !s.syncing &&
              (0, c.openModal)((e) => {
                let n =
                  0 === s.expire_behavior
                    ? S.Z.Messages.REMOVE_SYNCED_ROLE
                    : S.Z.Messages.KICK_FROM_SERVER;
                return (0, i.jsx)(c.ConfirmModal, {
                  ...e,
                  header: S.Z.Messages.DISABLE_INTEGRATION_TITLE,
                  confirmText: n,
                  cancelText: S.Z.Messages.CANCEL,
                  onConfirm: () => v(s),
                  children: (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children:
                      s.type === C.ABu.YOUTUBE
                        ? S.Z.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY
                        : S.Z.Messages.DISABLE_INTEGRATION_TWITCH_BODY,
                  }),
                });
              });
          }, [s, v]),
          G = a.useCallback(() => {
            N.Z.syncIntegration(t.id, s.id);
          }, [t.id, s.id]),
          k = a.useCallback(() => {
            null != s.role_id &&
              (N.Z.setSection(C.pNK.ROLES), N.Z.selectRole(s.role_id));
          }, [s.role_id]),
          {
            serviceName: U,
            channelURL: w,
            expireBehaviorLabel: H,
            syncLabel: W,
            subscribersText: F,
          } = a.useMemo(() => {
            var e, n, t, i, a;
            let l =
              null !==
                (t =
                  null === (n = I.Z.get(s.type)) || void 0 === n
                    ? void 0
                    : null === (e = n.getPlatformUserUrl) || void 0 === e
                      ? void 0
                      : e.call(n, s.account)) && void 0 !== t
                ? t
                : "";
            switch (s.type) {
              case C.ABu.YOUTUBE:
                return {
                  serviceName: S.Z.Messages.INTEGRATIONS_YOUTUBE,
                  expireBehaviorLabel:
                    S.Z.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR,
                  syncLabel: S.Z.Messages.FORM_LABEL_SYNCED_MEMBERS,
                  subscribersText: S.Z.Messages.NUM_MEMBERS.format({
                    subscribers:
                      null !== (i = s.subscriber_count) && void 0 !== i ? i : 0,
                  }),
                  channelURL: l,
                };
              case C.ABu.TWITCH:
              default:
                return {
                  serviceName: S.Z.Messages.INTEGRATIONS_TWITCH,
                  expireBehaviorLabel:
                    S.Z.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR,
                  syncLabel: S.Z.Messages.FORM_LABEL_SYNCED_SUBS,
                  subscribersText: S.Z.Messages.NUM_SUBSCRIBERS.format({
                    subscribers:
                      null !== (a = s.subscriber_count) && void 0 !== a ? a : 0,
                  }),
                  channelURL: l,
                };
            }
          }, [s.account, s.subscriber_count, s.type]),
          { roleLink: V, syncDescriptionText: K } = a.useMemo(() => {
            let e, n;
            let t = null != s.role_id ? L[s.role_id] : null;
            e =
              null != t
                ? (0, i.jsx)(c.Anchor, { onClick: k, children: t.name })
                : S.Z.Messages.NONE;
            let a = I.Z.get(s.type);
            return {
              roleLink: e,
              syncDescriptionText: (n =
                s.revoked && null != a
                  ? S.Z.Messages.SYNC_REVOKED.format({
                      user: s.user,
                      platformName: a.name,
                    })
                  : S.Z.Messages.INTEGRATIONS_LAST_SYNC.format({
                      datetime: r()(s.synced_at).calendar(),
                    })),
            };
          }, [L, k, s.revoked, s.role_id, s.synced_at, s.type, s.user]),
          Y = a.useMemo(() => {
            let e = _.ZP.getGuildEmoji(t.id),
              n = Object.values(L)
                .filter((e) => null != e.tags && e.tags.integration_id === s.id)
                .map((e) => e.id);
            return s.enable_emoticons
              ? e
                  .sort((e, n) => e.name.localeCompare(n.name))
                  .filter(
                    (e) =>
                      null != s.role_id &&
                      (null == e ? void 0 : e.roles.some((e) => n.includes(e))),
                  )
              : [];
          }, [t.id, L, s.enable_emoticons, s.id, s.role_id]);
        if (
          (a.useEffect(() => {
            (null == o ? void 0 : o.id) === s.id &&
              (null == o ? void 0 : o.enabled) === !0 &&
              D(!1);
          }, [o, s.id]),
          s.enabled && null != s.user)
        )
          n = [
            {
              icon: c.ClockIcon,
              text: P
                ? S.Z.Messages.INTEGRATION_ADDED_DATE.format({
                    timestamp: O.default.extractTimestamp(s.id),
                  })
                : S.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                    user: null != s.user ? new E.Z(s.user).tag : null,
                    timestamp: O.default.extractTimestamp(s.id),
                  }),
            },
          ];
        else {
          let e = new URL(w);
          n = [
            {
              text: S.Z.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                serviceName: U,
                accountUrl: w,
                accountUrlText: e.hostname + e.pathname,
              }),
            },
          ];
        }
        let z = (0, i.jsxs)(m.Z, {
            className: A.header,
            align: m.Z.Align.CENTER,
            children: [
              (0, i.jsx)(x.Z, {
                name: "".concat(s.name),
                detailsClassName: A.description,
                details: n,
              }),
              s.enabled
                ? (0, i.jsx)(m.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsx)(g.Z, {
                      className: A.expandIcon,
                      expanded: b && !j,
                      "aria-hidden": !0,
                    }),
                  })
                : (0, i.jsx)(m.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsx)(c.Button, {
                      size: c.Button.Sizes.SMALL,
                      color: c.Button.Colors.PRIMARY,
                      onClick: B,
                      disabled: j,
                      children: j
                        ? (0, i.jsx)(p.Z, { width: 24, height: 24 })
                        : (0, i.jsx)(i.Fragment, {
                            children: S.Z.Messages.INTEGRATIONS_ENABLE,
                          }),
                    }),
                  }),
            ],
          }),
          q = null;
        return (
          b &&
            !j &&
            null != o &&
            (q = (0, i.jsxs)(m.Z, {
              className: A.body,
              direction: m.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(c.FormDivider, { className: A.topDivider }),
                (function (e) {
                  let {
                    integration: n,
                    labelText: t,
                    subscribersText: a,
                    descriptionText: s,
                    roleLink: l,
                    onSync: o,
                  } = e;
                  return (0, i.jsxs)(m.Z, {
                    children: [
                      (0, i.jsxs)(m.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: R.marginBottom8,
                            children: S.Z.Messages.FORM_LABEL_SYNCED_ROLE,
                          }),
                          (0, i.jsx)(c.Text, {
                            className: A.syncedRole,
                            color: "header-primary",
                            variant: "text-sm/normal",
                            children: l,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(m.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: R.marginBottom8,
                            children: t,
                          }),
                          (0, i.jsxs)(m.Z, {
                            justify: m.Z.Justify.BETWEEN,
                            children: [
                              (0, i.jsxs)(m.Z, {
                                direction: m.Z.Direction.VERTICAL,
                                children: [
                                  (0, i.jsx)(c.Text, {
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: a,
                                  }),
                                  (0, i.jsx)(c.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: s,
                                  }),
                                ],
                              }),
                              (0, i.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                look: c.Button.Looks.FILLED,
                                color: c.Button.Colors.PRIMARY,
                                disabled: n.syncing || n.revoked,
                                onClick: o,
                                children: n.syncing
                                  ? (0, i.jsx)(p.Z, { width: 24, height: 24 })
                                  : (0, i.jsx)(i.Fragment, {
                                      children: S.Z.Messages.SYNC,
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                })({
                  integration: o,
                  labelText: W,
                  subscribersText: F,
                  descriptionText: K,
                  roleLink: V,
                  onSync: G,
                }),
                (0, i.jsx)(c.FormDivider, { className: A.midDivider }),
                (function (e) {
                  let {
                    integration: n,
                    labelText: t,
                    onBehaviorChange: a,
                    onGracePeriodChange: s,
                  } = e;
                  return (0, i.jsxs)(m.Z, {
                    children: [
                      (0, i.jsxs)(m.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: R.marginBottom8,
                            children: t,
                          }),
                          (0, i.jsx)(c.SingleSelect, {
                            placeholder: t,
                            value: "".concat(n.expire_behavior),
                            options: [
                              {
                                value: "0",
                                label: S.Z.Messages.REMOVE_SYNCED_ROLE,
                              },
                              {
                                value: "1",
                                label: S.Z.Messages.KICK_FROM_SERVER,
                              },
                            ],
                            isDisabled: n.syncing,
                            onChange: (e) => a(parseInt(e)),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(m.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(c.FormTitle, {
                            className: R.marginBottom8,
                            children:
                              S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                          }),
                          (0, i.jsx)(c.SingleSelect, {
                            placeholder:
                              S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                            maxVisibleItems: 5,
                            value: "".concat(n.expire_grace_period),
                            options: [1, 3, 7, 14, 30].map((e) => ({
                              value: "".concat(e),
                              label: S.Z.Messages.N_DAYS.format({ days: e }),
                            })),
                            onChange: (e) => s(parseInt(e)),
                            isDisabled: n.syncing,
                          }),
                        ],
                      }),
                    ],
                  });
                })({
                  integration: o,
                  labelText: H,
                  onBehaviorChange: function (e) {
                    u.Z.updateIntegration({ expireBehavior: e });
                  },
                  onGracePeriodChange: function (e) {
                    u.Z.updateIntegration({ expireGracePeriod: e });
                  },
                }),
                s.type === C.ABu.TWITCH
                  ? (function (e) {
                      let { integration: n, emojis: t, onToggle: a } = e;
                      return (0, i.jsxs)(m.Z, {
                        direction: m.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            className: l()(R.marginTop20, R.marginBottom8),
                            value: n.enable_emoticons,
                            disabled: n.syncing,
                            onChange: (e) => {
                              let { currentTarget: n } = e;
                              return a(n.checked);
                            },
                            children: (0, i.jsx)(c.FormText, {
                              children: S.Z.Messages.ENABLE_TWITCH_EMOJI_SYNC,
                            }),
                          }),
                          (0, i.jsx)(m.Z, {
                            wrap: m.Z.Wrap.WRAP,
                            className: A.__invalid_twitchEmojis,
                            children: t.map((e, n) =>
                              (0, i.jsx)(
                                c.Tooltip,
                                {
                                  text: e.name,
                                  children: (n) =>
                                    (0, i.jsx)(
                                      "img",
                                      {
                                        alt: S.Z.Messages.IMG_ALT_EMOJI.format({
                                          name: e.name,
                                        }),
                                        draggable: !1,
                                        className: l()(
                                          A.emoji,
                                          "emoji",
                                          "jumboable",
                                        ),
                                        src: f.ZP.getEmojiURL({
                                          id: e.id,
                                          animated: e.animated,
                                          size: 28,
                                        }),
                                        ...n,
                                      },
                                      e.name,
                                    ),
                                },
                                n,
                              ),
                            ),
                          }),
                        ],
                      });
                    })({
                      integration: o,
                      emojis: Y,
                      onToggle: function (e) {
                        u.Z.updateIntegration({ enableEmoticons: e });
                      },
                    })
                  : null,
                (0, i.jsx)(c.FormDivider, { className: A.bottomDivider }),
                (0, i.jsx)(m.Z, {
                  children: (0, i.jsx)(c.Button, {
                    className: A.disableButton,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.RED,
                    look: c.Button.Looks.LINK,
                    onClick: y,
                    children: S.Z.Messages.INTEGRATIONS_DISABLE,
                  }),
                }),
              ],
            })),
          (0, i.jsx)(c.Card, {
            editable: !0,
            className: A.card,
            children: (0, i.jsxs)(m.Z, {
              direction: m.Z.Direction.VERTICAL,
              children: [
                s.enabled
                  ? (0, i.jsx)(c.Clickable, {
                      className: A.expandableHeader,
                      "aria-expanded": b && !j,
                      onClick: Z,
                      children: z,
                    })
                  : z,
                q,
              ],
            }),
          })
        );
      }
    },
    491302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(668781),
        o = t(139387),
        r = t(308063),
        d = t(600164),
        c = t(259580),
        u = t(768581),
        I = t(486199),
        m = t(981631),
        _ = t(689938),
        N = t(707692);
      function E(e) {
        let {
            webhook: n,
            editedWebhook: t,
            channelOptions: E,
            isExpanded: T,
            errors: h,
            onToggleExpand: g,
          } = e,
          p = a.useMemo(() => {
            var e, t;
            return (
              (e = n),
              null != (t = n.avatar) && /^data:/.test(t)
                ? t
                : (0, u.ov)({ id: e.id, avatar: t, discriminator: m.fo$ })
            );
          }, [n]),
          f = a.useCallback(() => {
            (0, s.openModal)((e) =>
              (0, i.jsx)(s.ConfirmModal, {
                ...e,
                header:
                  _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format(
                    { name: n.name },
                  ),
                confirmText: _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                cancelText: _.Z.Messages.CANCEL,
                onConfirm: () => {
                  r.Z.delete(n.guild_id, n.id).catch(() => {
                    l.Z.show({
                      title:
                        _.Z.Messages
                          .INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
                      body: _.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                    });
                  });
                },
                children: (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children:
                    _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY,
                }),
              }),
            );
          }, [n.guild_id, n.id, n.name]),
          O = [];
        null != n.source_channel &&
          null != n.source_guild &&
          (O.push({ icon: s.AnnouncementsIcon, text: n.source_channel.name }),
          O.push({
            text: (0, i.jsx)(
              "span",
              {
                className: N.guildSource,
                children:
                  _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format(
                    {
                      guildHook: () =>
                        (0, i.jsx)(
                          "span",
                          {
                            className: N.sourceName,
                            children: n.source_guild.name,
                          },
                          n.id,
                        ),
                    },
                  ),
              },
              "guild-source",
            ),
          }));
        let x = null;
        return (
          T &&
            null != t &&
            (x = (0, i.jsxs)("div", {
              className: N.body,
              children: [
                (0, i.jsx)(s.FormDivider, { className: N.topDivider }),
                (0, i.jsx)(d.Z, {
                  children: (0, i.jsxs)(d.Z, {
                    direction: d.Z.Direction.VERTICAL,
                    children: [
                      (0, i.jsxs)(d.Z, {
                        children: [
                          (0, i.jsx)(d.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(s.FormItem, {
                              title:
                                _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                              children: (0, i.jsx)(s.TextInput, {
                                value: t.name,
                                onChange: (e) => {
                                  o.Z.updateWebhook({ name: e });
                                },
                                maxLength: 80,
                                error: h.name,
                              }),
                            }),
                          }),
                          (0, i.jsx)(d.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(s.FormItem, {
                              title:
                                _.Z.Messages
                                  .INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                              children: (0, i.jsx)(s.SingleSelect, {
                                value: t.channel_id,
                                options: E,
                                onChange: (e) => {
                                  o.Z.updateWebhook({ channelId: e });
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.FormDivider, { className: N.bottomDivider }),
                      (0, i.jsx)(d.Z, {
                        children: (0, i.jsx)(s.Button, {
                          onClick: f,
                          size: s.Button.Sizes.SMALL,
                          color: s.Button.Colors.RED,
                          look: s.Button.Looks.LINK,
                          className: N.removeButton,
                          children:
                            _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })),
          (0, i.jsx)(s.Card, {
            editable: !0,
            className: N.card,
            children: (0, i.jsxs)(d.Z, {
              direction: d.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(s.Clickable, {
                  className: N.header,
                  "aria-expanded": T,
                  onClick: g,
                  children: (0, i.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(I.Z, {
                        name: n.name,
                        imageSrc: p,
                        detailsClassName: N.__invalid_description,
                        details: O,
                      }),
                      (0, i.jsx)(c.Z, {
                        className: N.expandIcon,
                        expanded: T,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                x,
              ],
            }),
          })
        );
      }
    },
    585835: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(243814),
        r = t(442837),
        d = t(481060),
        c = t(367907),
        u = t(213459),
        I = t(600164),
        m = t(488915),
        _ = t(970731),
        N = t(598077),
        E = t(626135),
        T = t(486199),
        h = t(929507),
        g = t(981631),
        p = t(689938),
        f = t(503899);
      function O(e) {
        var n, t, s, O, x, C, S;
        let {
            name: A,
            icon: R,
            imageSrc: b,
            iconBackgroundColor: Z,
            iconClassName: v,
            details: M,
            integration: L,
            buttonText: j,
            buttonDisabled: D,
            hasNextSection: P,
            onButtonClick: B,
            guildId: y,
            isScrolling: G,
            canShowMigrationTooltip: k,
          } = e,
          [U, w] = a.useState(!1),
          [H, W] = a.useState(!1);
        let F =
            ((O = j),
            (x = D),
            (C = P),
            (S = B),
            null == O || null == S
              ? null
              : C
                ? (0, i.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: O,
                      }),
                      C
                        ? (0, i.jsx)(d.ChevronSmallRightIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 10,
                            height: 10,
                            className: f.caret,
                          })
                        : null,
                    ],
                  })
                : (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    look: C ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
                    color: C ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                    disabled: x,
                    onClick: S,
                    children: O,
                  })),
          V = k && !G && !H && void 0 !== y && null != L;
        a.useEffect(() => {
          V &&
            E.default.track(g.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, c.hH)(y),
              application_id: null == L ? void 0 : L.application.id,
              location: "overview",
            });
        }, [y, null == L ? void 0 : L.application.id, V]);
        let K = V
            ? (0, i.jsx)(d.Popout, {
                renderPopout: () =>
                  (0, i.jsx)(d.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        W(!0),
                        h.Z.dismissOverviewTooltip(y, L.integration);
                    },
                    children: (0, i.jsx)(_.ZP, {
                      content:
                        p.Z.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                      onClick: () => {},
                    }),
                  }),
                position: "bottom",
                align: "center",
                animation: d.Popout.Animation.TRANSLATE,
                shouldShow: !0,
                children: () => F,
              })
            : F,
          Y = (0, r.Wu)([m.Z], () => {
            var e;
            return null != L &&
              null != y &&
              null !==
                (e = m.Z.getApplicationEntitlementsForGuild(
                  L.application.id,
                  y,
                )) &&
              void 0 !== e
              ? e
              : [];
          }),
          z = (0, u.LD)(y, !0),
          q =
            (null == L ? void 0 : L.application) != null &&
            Object.keys(
              null !==
                (s =
                  null === (t = z.result) || void 0 === t
                    ? void 0
                    : null === (n = t.sections[L.application.id]) ||
                        void 0 === n
                      ? void 0
                      : n.commands) && void 0 !== s
                ? s
                : {},
            ).length > 0,
          X = (0, i.jsxs)(I.Z, {
            children: [
              (0, i.jsx)(T.Z, {
                name: A,
                icon: R,
                imageSrc: b,
                iconBackgroundColor: Z,
                iconClassName: v,
                details: M,
                isPremium: Y.length > 0,
              }),
              (0, i.jsx)(I.Z.Child, {
                shrink: 0,
                grow: 0,
                children: (0, i.jsxs)(I.Z, {
                  align: I.Z.Align.CENTER,
                  justify: I.Z.Justify.END,
                  children: [
                    (function (e, n, t) {
                      var a;
                      if (null == e) return null;
                      let s = [],
                        { application: l, integration: r, webhooks: c } = e;
                      return (
                        null != l.bot &&
                          s.push(
                            (0, i.jsx)(
                              d.TooltipContainer,
                              {
                                forceOpen: n,
                                text: new N.Z(l.bot).isVerifiedBot()
                                  ? p.Z.Messages
                                      .INTEGRATIONS_APPLICATION_VERIFIED_BOT
                                  : p.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
                                className: f.feature,
                                children: (0, i.jsx)(d.RobotIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: f.featureIcon,
                                }),
                              },
                              "bot",
                            ),
                          ),
                        c.length > 0 &&
                          s.push(
                            (0, i.jsx)(
                              d.TooltipContainer,
                              {
                                forceOpen: n,
                                text: p.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format(
                                  { count: c.length },
                                ),
                                className: f.feature,
                                children: (0, i.jsx)(d.WebhookIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: f.featureIcon,
                                }),
                              },
                              "webhooks",
                            ),
                          ),
                        (null == r
                          ? void 0
                          : null === (a = r.scopes) || void 0 === a
                            ? void 0
                            : a.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                          t &&
                          s.push(
                            (0, i.jsx)(
                              "div",
                              {
                                className: f.feature,
                                children: (0, i.jsx)(d.SlashBoxIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: f.featureIcon,
                                }),
                              },
                              "commands",
                            ),
                          ),
                        s
                      );
                    })(L, U, q),
                    K,
                  ],
                }),
              }),
            ],
          });
        return P
          ? (0, i.jsx)(d.Clickable, {
              onClick: () => {
                k &&
                  null != y &&
                  null != L &&
                  h.Z.dismissOverviewTooltip(y, L.integration),
                  null == B || B();
              },
              onFocus: () => w(!0),
              onBlur: () => w(!1),
              children: (0, i.jsx)(d.Card, {
                editable: !0,
                className: l()(f.card, f.clickable),
                children: X,
              }),
            })
          : (0, i.jsx)(d.Card, {
              editable: !0,
              className: f.card,
              children: X,
            });
      }
    },
    936726: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(47120),
        t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        o = t(544891),
        r = t(846519),
        d = t(481060),
        c = t(668781),
        u = t(139387),
        I = t(308063),
        m = t(600164),
        _ = t(208567),
        N = t(598077),
        E = t(259580),
        T = t(768581),
        h = t(572004),
        g = t(709054),
        p = t(51144),
        f = t(486199),
        O = t(981631),
        x = t(689938),
        C = t(824377);
      let S = (e) => {
        if (null == e) return null;
        let n = new N.Z(e);
        return p.ZP.getUserTag(n);
      };
      function A(e, n) {
        return null != n && /^data:/.test(n)
          ? n
          : (0, T.ov)({ id: e.id, avatar: n, discriminator: O.fo$ });
      }
      function R(e) {
        let {
            id: n,
            webhook: t,
            editedWebhook: s,
            channelOptions: N,
            isExpanded: T,
            isNew: p,
            errors: R,
            onToggleExpand: b,
          } = e,
          [Z, v] = a.useState(!1),
          [M] = a.useState(new r.V7());
        a.useEffect(() => () => M.stop(), [M]);
        let L = a.useMemo(() => A(t, t.avatar), [t]),
          j = a.useCallback(() => {
            let e = ""
              .concat((0, o.K0)(!1))
              .concat(O.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
            (0, h.JG)(e);
          }, [t]),
          D = a.useCallback(() => {
            (0, d.openModal)((e) =>
              (0, i.jsx)(d.ConfirmModal, {
                ...e,
                header: x.Z.Messages.WEBHOOK_DELETE_TITLE.format({
                  name: t.name,
                }),
                confirmText: x.Z.Messages.WEBHOOK_DELETE,
                cancelText: x.Z.Messages.WEBHOOK_CANCEL,
                onConfirm: () => {
                  I.Z.delete(t.guild_id, t.id).catch((e) => {
                    let { status: n } = e;
                    429 === n
                      ? c.Z.show({
                          title: x.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                          body: x.Z.Messages
                            .WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT,
                        })
                      : c.Z.show({
                          title: x.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                          body: x.Z.Messages
                            .WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                        });
                  });
                },
                children: (0, i.jsx)(d.Text, {
                  variant: "text-md/normal",
                  children: x.Z.Messages.WEBHOOK_DELETE_BODY.format({
                    name: t.name,
                  }),
                }),
              }),
            );
          }, [t.guild_id, t.id, t.name]),
          P = [];
        null != t.user
          ? P.push({
              icon: d.ClockIcon,
              text: x.Z.Messages.INTEGRATION_CREATED_USER_DATE.format({
                user: S(t.user),
                timestamp: g.default.extractTimestamp(t.id),
              }),
            })
          : P.push({
              icon: d.ClockIcon,
              text: x.Z.Messages.INTEGRATION_CREATED_DATE.format({
                timestamp: g.default.extractTimestamp(t.id),
              }),
            });
        let B = null;
        return (
          T &&
            null != s &&
            (B = (0, i.jsxs)("div", {
              className: C.body,
              children: [
                (0, i.jsx)(d.FormDivider, { className: C.topDivider }),
                (0, i.jsxs)(m.Z, {
                  children: [
                    (0, i.jsx)(m.Z.Child, {
                      shrink: 1,
                      grow: 0,
                      children: (0, i.jsxs)(m.Z, {
                        className: C.avatarWrapper,
                        direction: m.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(_.Z, {
                            image: s.avatar,
                            onChange: (e) => {
                              u.Z.updateWebhook({ avatar: e });
                            },
                            makeURL: (e) => A(t, e),
                            imageClassName: C.avatarUploaderInner,
                            showIcon: !0,
                          }),
                          null != R.avatar && "" !== R.avatar
                            ? (0, i.jsx)(d.Text, {
                                color: "text-danger",
                                variant: "text-sm/normal",
                                children: R.avatar,
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, i.jsxs)(m.Z, {
                      direction: m.Z.Direction.VERTICAL,
                      children: [
                        (0, i.jsxs)(m.Z, {
                          children: [
                            (0, i.jsx)(m.Z.Child, {
                              basis: "50%",
                              children: (0, i.jsx)(d.FormItem, {
                                title: x.Z.Messages.WEBHOOK_FORM_NAME,
                                children: (0, i.jsx)(d.TextInput, {
                                  value: s.name,
                                  onChange: (e) => {
                                    u.Z.updateWebhook({ name: e });
                                  },
                                  maxLength: 80,
                                  error: R.name,
                                }),
                              }),
                            }),
                            (0, i.jsx)(m.Z.Child, {
                              basis: "50%",
                              children: (0, i.jsx)(d.FormItem, {
                                title: x.Z.Messages.CHANNEL,
                                children: (0, i.jsx)(d.SearchableSelect, {
                                  value: s.channel_id,
                                  options: N,
                                  onChange: (e) => {
                                    u.Z.updateWebhook({ channelId: e });
                                  },
                                  placeholder: x.Z.Messages.CHANNEL_SELECT,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(d.FormDivider, {
                          className: C.bottomDivider,
                        }),
                        (0, i.jsxs)(m.Z, {
                          children: [
                            (0, i.jsx)(d.Tooltip, {
                              text: x.Z.Messages
                                .INTEGRATIONS_WEBHOOK_COPIED_URL,
                              forceOpen: Z,
                              color: d.TooltipColors.GREEN,
                              disableTooltipPointerEvents: !0,
                              children: (e) => {
                                let {
                                  onClick: n,
                                  onMouseEnter: a,
                                  onMouseLeave: s,
                                  onBlur: l,
                                  onFocus: o,
                                  ...r
                                } = e;
                                return (0, i.jsx)(d.Button, {
                                  ...r,
                                  "aria-label": "",
                                  onClick: () => {
                                    null == n || n(),
                                      v(!0),
                                      d.AccessibilityAnnouncer.announce(
                                        x.Z.Messages
                                          .INTEGRATIONS_WEBHOOK_COPIED_URL,
                                      ),
                                      M.start(1e3, () => v(!1)),
                                      j();
                                  },
                                  size: d.Button.Sizes.SMALL,
                                  color: d.Button.Colors.PRIMARY,
                                  look: d.Button.Looks.FILLED,
                                  className: C.copyButton,
                                  disabled: null == t.token || "" === t.token,
                                  children:
                                    x.Z.Messages.INTEGRATIONS_WEBHOOK_COPY_URL,
                                });
                              },
                            }),
                            (0, i.jsx)(d.Button, {
                              onClick: D,
                              size: d.Button.Sizes.SMALL,
                              color: d.Button.Colors.RED,
                              look: d.Button.Looks.LINK,
                              children:
                                x.Z.Messages.INTEGRATIONS_WEBHOOK_DELETE,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
          (0, i.jsx)(d.Card, {
            editable: !0,
            id: n,
            className: l()(C.card, p ? C.pulse : null),
            children: (0, i.jsxs)(m.Z, {
              direction: m.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(d.Clickable, {
                  className: C.header,
                  "aria-expanded": T,
                  onClick: b,
                  children: (0, i.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(f.Z, {
                        name: t.name,
                        imageSrc: L,
                        details: P,
                      }),
                      (0, i.jsx)(E.Z, {
                        className: C.expandIcon,
                        expanded: T,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                B,
              ],
            }),
          })
        );
      }
    },
    725875: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(139387),
        o = t(933557),
        r = t(699516),
        d = t(594174),
        c = t(491302),
        u = t(936726),
        I = t(981631),
        m = t(689938),
        _ = t(785560);
      function N(e) {
        let {
            webhooks: n,
            selectableWebhookChannels: t,
            lastCreatedWebhookId: N,
            editedWebhook: E,
            errors: T,
            canNavigate: h,
          } = e,
          g = a.useMemo(
            () =>
              Object.values(t).map((e) => ({
                value: e.id,
                label: (0, o.F6)(e, d.default, r.Z, !0),
              })),
            [t],
          ),
          p = a.useMemo(() => {
            let e = {};
            for (let i of n)
              if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
              else {
                let n = t[i.channel_id];
                null != n && (e[i.channel_id] = { channel: n, webhooks: [i] });
              }
            return Object.values(e).sort((e, n) =>
              e.channel.name.localeCompare(n.channel.name),
            );
          }, [t, n]),
          f = a.useCallback(
            (e) => {
              h() &&
                (e === (null == E ? void 0 : E.id)
                  ? l.Z.stopEditingWebhook()
                  : l.Z.startEditingWebhook(e));
            },
            [h, E],
          );
        return (0, i.jsx)("div", {
          className: _.__invalid_list,
          children: p.map((e) => {
            let { channel: n, webhooks: t } = e;
            return (function (e) {
              let {
                channel: n,
                webhooks: t,
                channelOptions: a,
                lastCreatedWebhookId: l,
                editedWebhook: N,
                errors: E,
                toggleWebhookExpand: T,
              } = e;
              return (0, i.jsxs)(
                "div",
                {
                  children: [
                    (0, i.jsx)(s.FormTitle, {
                      className: _.groupHeader,
                      children:
                        m.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format(
                          {
                            channelHook: () =>
                              (0, i.jsx)(
                                "span",
                                {
                                  className: _.channelName,
                                  children: (0, o.F6)(n, d.default, r.Z, !0),
                                },
                                n.id,
                              ),
                          },
                        ),
                    }),
                    t.map((e) => {
                      var n;
                      if (e.type === I.ylB.CHANNEL_FOLLOWER)
                        return (0, i.jsx)(
                          c.Z,
                          {
                            webhook: e,
                            editedWebhook: N,
                            channelOptions: a,
                            isExpanded: (null == N ? void 0 : N.id) === e.id,
                            onToggleExpand: () => T(e.id),
                            errors: E,
                          },
                          e.id,
                        );
                      return (0, i.jsx)(
                        u.Z,
                        {
                          id:
                            ((n = e.id),
                            "settings-integrations-webhook-".concat(n)),
                          webhook: e,
                          editedWebhook: N,
                          channelOptions: a,
                          isExpanded: (null == N ? void 0 : N.id) === e.id,
                          isNew: l === e.id,
                          onToggleExpand: () => T(e.id),
                          errors: E,
                        },
                        e.id,
                      );
                    }),
                  ],
                },
                n.id,
              );
            })({
              channel: n,
              webhooks: t,
              channelOptions: g,
              lastCreatedWebhookId: N,
              editedWebhook: E,
              errors: T,
              toggleWebhookExpand: f,
            });
          }),
        });
      }
    },
    453628: function (e, n, t) {
      t.d(n, {
        y: function () {
          return a;
        },
      });
      var i,
        a,
        s = t(735250);
      t(470079);
      var l = t(120356),
        o = t.n(l),
        r = t(481060),
        d = t(689938),
        c = t(544978);
      ((i = a || (a = {})).DENY = "DENY"),
        (i.PASSTHROUGH = "PASSTHROUGH"),
        (i.ALLOW = "ALLOW");
      let u = Object.keys(a);
      function I(e) {
        let {
            value: n = "PASSTHROUGH",
            onChange: t,
            labelledBy: i,
            disabled: a = !1,
          } = e,
          l = (0, r.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: a,
            labelledBy: i,
          });
        return (0, s.jsx)("div", {
          className: o()(c.group, { [c.disabled]: a }),
          ...l,
          children: u.map((e) =>
            (0, s.jsx)(
              m,
              {
                type: e,
                isSelected: n === e,
                onSelect: (e) => {
                  n !== e && !a && t(e);
                },
              },
              e,
            ),
          ),
        });
      }
      function m(e) {
        let n,
          t,
          i,
          { type: a, onSelect: l, isSelected: u } = e;
        switch (a) {
          case "DENY":
            (i = d.Z.Messages.PERMISSION_OVERRIDE_DENY),
              (n = r.XSmallIcon),
              (t = c.deny);
            break;
          case "ALLOW":
            (i = d.Z.Messages.PERMISSION_OVERRIDE_ALLOW),
              (n = r.CheckmarkLargeIcon),
              (t = c.allow);
            break;
          default:
            (i = d.Z.Messages.PERMISSION_OVERRIDE_PASSTHROUGH),
              (n = r.SlashIcon),
              (t = c.passthrough);
        }
        let I = (0, r.useRadioItem)({ isSelected: u, label: i });
        return (0, s.jsx)(r.Clickable, {
          className: o()(c.item, t, { [c.selected]: u }),
          onClick: () => l(a),
          ...I,
          children: (0, s.jsx)(n, { color: "currentColor", size: "xs" }),
        });
      }
      (I.Types = a), (n.Z = I);
    },
    996987: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(600164),
        l = t(313201),
        o = t(63063),
        r = t(453628),
        d = t(689938),
        c = t(224499);
      function u(e) {
        let {
            value: n,
            onChange: t,
            children: u,
            note: I,
            helpdeskArticleId: m,
            style: _,
            disabled: N = !1,
            hideBorder: E = !1,
            className: T = c.marginBottom20,
          } = e,
          h = (0, l.Dt)();
        return (0, i.jsxs)(s.Z, {
          style: _,
          className: T,
          direction: s.Z.Direction.VERTICAL,
          children: [
            (0, i.jsxs)(s.Z, {
              children: [
                (0, i.jsx)(s.Z.Child, {
                  children: (0, i.jsx)(a.FormTitle, {
                    id: h,
                    className: c.marginReset,
                    tag: a.FormTitleTags.H3,
                    disabled: N,
                    children: u,
                  }),
                }),
                (0, i.jsx)(s.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(r.Z, {
                    value: n,
                    onChange: t,
                    disabled: N,
                    labelledBy: h,
                  }),
                }),
              ],
            }),
            null != I &&
              (0, i.jsx)(s.Z.Child, {
                className: c.marginTop4,
                children: (0, i.jsx)(a.FormText, {
                  type: a.FormTextTypes.DESCRIPTION,
                  children: I,
                }),
              }),
            null != m &&
              (0, i.jsx)(s.Z.Child, {
                className: c.marginTop4,
                children: (0, i.jsx)(a.FormText, {
                  disabled: N,
                  type: a.FormTextTypes.DESCRIPTION,
                  children: (0, i.jsx)(a.Anchor, {
                    href: o.Z.getArticleURL(m),
                    children: d.Z.Messages.LEARN_MORE,
                  }),
                }),
              }),
            !E &&
              (0, i.jsx)(s.Z.Child, {
                className: c.marginTop20,
                children: (0, i.jsx)(a.FormDivider, {}),
              }),
          ],
        });
      }
      r.Z.Types, (u.Types = r.Z.Types);
    },
    531087: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(325767),
        o = t(877791);
      function r(e) {
        let {
          width: n = 16,
          height: t = 16,
          color: a = "currentColor",
          foreground: r,
          className: d,
          ...c
        } = e;
        return (0, i.jsx)("svg", {
          className: s()(o.updateAvailable, d),
          ...(0, l.Z)(c),
          width: n,
          height: t,
          viewBox: "0 0 24 24",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, i.jsx)("path", {
                fill: a,
                className: r,
                fillRule: "nonzero",
                d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z",
              }),
              (0, i.jsx)("polygon", { points: "24 0 0 0 0 24 24 24" }),
            ],
          }),
        });
      }
    },
    812666: function (e, n, t) {
      e.exports = {
        container: "container_a06168",
        list: "list_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
        permissionHeader: "permissionHeader_a06168",
      };
    },
    642769: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    262401: function (e, n, t) {
      e.exports = { title: "title_cf92b5", icon: "icon_cf92b5" };
    },
    591318: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    598627: function (e, n, t) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    326617: function (e, n, t) {
      t.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    811692: function (e, n, t) {
      e.exports = {
        layout: "layout_ff90b2",
        sidebar: "sidebar_ff90b2",
        content: "content_ff90b2",
        sidebarScrollable: "sidebarScrollable_ff90b2",
        scroller: "scroller_ff90b2",
      };
    },
    715218: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_e99e33",
        headerText: "headerText_e99e33",
        closeIcon: "closeIcon_e99e33",
        options: "options_e99e33",
        optionContainer: "optionContainer_e99e33",
        optionContainerOther: "optionContainerOther_e99e33",
        optionText: "optionText_e99e33",
        textboxContainer: "textboxContainer_e99e33",
        serverLockdownReasonText: "serverLockdownReasonText_e99e33",
      };
    },
    387410: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    521422: function (e, n, t) {
      e.exports = {
        icon: "icon_b119de",
        identifier: "identifier_b119de",
        item: "item_b119de",
        statusContainer: "statusContainer_b119de",
        statusLine: "statusLine_b119de",
        statusIcon: "statusIcon_b119de",
      };
    },
    400587: function (e, n, t) {
      e.exports = { emptyCard: "emptyCard_e74f7d" };
    },
    53504: function (e, n, t) {
      e.exports = {
        channelIcon: "channelIcon_a93d5d",
        lockIcon: "lockIcon_a93d5d",
        identifier: "identifier_a93d5d",
        image: "image_a93d5d " + t("212711").desaturateUserColors,
        shield: "shield_a93d5d " + t("212711").desaturateUserColors,
        roleName: "roleName_a93d5d",
        tag: "tag_a93d5d",
      };
    },
    570767: function (e, n, t) {
      e.exports = {
        entryActions: "entryActions_ec6bf1",
        entryItem: "entryItem_ec6bf1",
        entryName: "entryName_ec6bf1",
        noItemsSelected: "noItemsSelected_ec6bf1",
        removeActions: "removeActions_ec6bf1",
        removeIcon: "removeIcon_ec6bf1",
        removeContainer: "removeContainer_ec6bf1",
        tooltip: "tooltip_ec6bf1",
      };
    },
    869880: function (e, n, t) {
      e.exports = {
        addButton: "addButton_f575ef",
        listContainer: "listContainer_f575ef",
        tooltip: "tooltip_f575ef",
        requiredPermissionsBanner: "requiredPermissionsBanner_f575ef",
        message: "message_f575ef",
        icon: "icon_f575ef",
      };
    },
    492701: function (e, n, t) {
      e.exports = {
        group: "group_b05c08",
        disabled: "disabled_b05c08",
        item: "item_b05c08",
        allow: "allow_b05c08",
        selected: "selected_b05c08",
        deny: "deny_b05c08",
      };
    },
    574768: function (e, n, t) {
      e.exports = {
        card: "card_dedfd1",
        inModal: "inModal_dedfd1",
        cardHeader: "cardHeader_dedfd1",
        title: "title_dedfd1",
      };
    },
    103401: function (e, n, t) {
      e.exports = { applicationPermissions: "applicationPermissions_c50086" };
    },
    778011: function (e, n, t) {
      e.exports = {
        inviteSettingsInviteRow: "inviteSettingsInviteRow_edb39d",
        headerSection: "headerSection_edb39d",
        headerDivider: "headerDivider_edb39d",
        revokeInvite: "revokeInvite_edb39d",
        text: "text_edb39d",
        inviteDisabledRow: "inviteDisabledRow_edb39d",
        inviteDisabledTip: "inviteDisabledTip_edb39d",
        inviteDisabledContainer: "inviteDisabledContainer_edb39d",
        username: "username_edb39d",
        countdownColumn: "countdownColumn_edb39d",
        inviteCode: "inviteCode_edb39d",
        textAlignRight: "textAlignRight_edb39d",
        uses: "uses_edb39d",
        countdown: "countdown_edb39d",
        user: "user_edb39d",
        discriminator: "discriminator_edb39d",
        avatar: "avatar_edb39d",
      };
    },
    953752: function (e, n, t) {
      e.exports = {
        imageUploader: "imageUploader_de76e4",
        removeButton: "removeButton_de76e4",
        sizeInfo: "sizeInfo_de76e4",
        disabled: "disabled_de76e4",
        imageUploaderInner: "imageUploaderInner_de76e4",
        imageUploaderIconWrapper: "imageUploaderIconWrapper_de76e4",
        imageUploaderFileInput: "imageUploaderFileInput_de76e4",
        imageUploaderAcronym: "imageUploaderAcronym_de76e4",
        imageUploaderHint: "imageUploaderHint_de76e4",
        imageUploaderIcon: "imageUploaderIcon_de76e4",
        imageUploaderIconDisabled: "imageUploaderIconDisabled_de76e4",
      };
    },
    324655: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_cedfaf",
        scroller: "scroller_cedfaf",
        modal: "modal_cedfaf",
        closeButton: "closeButton_cedfaf",
        headerCloseButtonSpacing: "headerCloseButtonSpacing_cedfaf",
        header: "header_cedfaf",
        headerText: "headerText_cedfaf",
        headerChannelContainer: "headerChannelContainer_cedfaf",
        channelIcon: "channelIcon_cedfaf",
        searchBar: "searchBar_cedfaf",
        hubHeader: "hubHeader_cedfaf",
        hubInviteTitle: "hubInviteTitle_cedfaf",
        hubFriendSearch: "hubFriendSearch_cedfaf",
        inviteRow: "inviteRow_cedfaf",
        inviteRowAvatar: "inviteRowAvatar_cedfaf",
        inviteRowInfo: "inviteRowInfo_cedfaf",
        inviteRowName: "inviteRowName_cedfaf",
        inviteRowButton: "inviteRowButton_cedfaf",
        inviteRowEmptyState: "inviteRowEmptyState_cedfaf",
        warningContainer: "warningContainer_cedfaf",
        warningIcon: "warningIcon_cedfaf",
        input: "input_cedfaf",
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        copyInput: "copyInput_cedfaf",
        copyButton: "copyButton_cedfaf",
        subText: "subText_cedfaf",
        temporaryMembershipContainerBackground:
          "temporaryMembershipContainerBackground_cedfaf",
        temporaryMembershipContainer: "temporaryMembershipContainer_cedfaf",
        noScroll: "noScroll_cedfaf",
        settingsFooter: "settingsFooter_cedfaf",
        footer: "footer_cedfaf",
        footerText: "footerText_cedfaf",
        headerContainer: "headerContainer_cedfaf",
        welcomeImage: "welcomeImage_cedfaf",
        welcomeHeading: "welcomeHeading_cedfaf",
        welcomeSubheading: "welcomeSubheading_cedfaf",
        errorMessage: "errorMessage_cedfaf",
        errorLink: "errorLink_cedfaf",
        acronym: "acronym_cedfaf",
        guestBody: "guestBody_cedfaf",
        guestSendInviteLinkHeader: "guestSendInviteLinkHeader_cedfaf",
        guestSelectChannelHeader: "guestSelectChannelHeader_cedfaf",
      };
    },
    793762: function (e, n, t) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    479422: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_d5408a",
        header: "header_d5408a",
        secondaryHeader: "secondaryHeader_d5408a",
        icon: "icon_d5408a",
        iconWrapper: "iconWrapper_d5408a",
        detailsIcon: "detailsIcon_d5408a",
        detailsWrapper: "detailsWrapper_d5408a",
        headerDetailsWrapper: "headerDetailsWrapper_d5408a",
        premiumIcon: "premiumIcon_d5408a",
      };
    },
    169991: function (e, n, t) {
      e.exports = {
        header: "header_bfc5ea",
        icon: "icon_bfc5ea",
        name: "name_bfc5ea",
        title: "title_bfc5ea",
      };
    },
    819949: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_d32069",
        headerDescription: "headerDescription_d32069",
        section: "section_d32069",
        emptyCard: "emptyCard_d32069",
      };
    },
    288179: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_ab06eb",
        platformIcon: "platformIcon_ab06eb",
        helpText: "helpText_ab06eb",
      };
    },
    488558: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_cb4c8f",
        emptyStateImage: "emptyStateImage_cb4c8f",
        emptyStateButton: "emptyStateButton_cb4c8f",
      };
    },
    112286: function (e, n, t) {
      e.exports = {
        divider: "divider_fab929",
        sectionHeader: "sectionHeader_fab929",
        emptyStateWrapper: "emptyStateWrapper_fab929",
        emptyStateImage: "emptyStateImage_fab929",
        emptyStateText: "emptyStateText_fab929",
        emptyStateCard: "emptyStateCard_fab929",
        emptyStateSearchImage: "emptyStateSearchImage_fab929",
        footerPlaceholder: "footerPlaceholder_fab929",
        footerImage: "footerImage_fab929",
        platformIcon: "platformIcon_fab929",
        searchContainer: "searchContainer_fab929",
      };
    },
    165204: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_b363b0",
        createButton: "createButton_b363b0",
        emptyStateImage: "emptyStateImage_b363b0",
        emptyStateButton: "emptyStateButton_b363b0",
      };
    },
    37939: function (e, n, t) {
      e.exports = {
        breadcrumbs: "breadcrumbs_f9e5d0",
        breadcrumbActive: "breadcrumbActive_f9e5d0",
        breadcrumbInactive: "breadcrumbInactive_f9e5d0",
      };
    },
    276118: function (e, n, t) {
      e.exports = {
        card: "card_f925ba",
        iconWrapper: "iconWrapper_f925ba",
        tag: "tag_f925ba",
        divider: "divider_f925ba",
        permissionHeader: "permissionHeader_f925ba",
        permissionList: "permissionList_f925ba",
        rolePills: "rolePills_f925ba",
      };
    },
    436911: function (e, n, t) {
      e.exports = {
        card: "card_a9c36f",
        header: "header_a9c36f",
        expandableHeader: "expandableHeader_a9c36f",
        body: "body_a9c36f",
        topDivider: "topDivider_a9c36f",
        midDivider: "midDivider_a9c36f",
        bottomDivider: "bottomDivider_a9c36f",
        description: "description_a9c36f",
        syncedRole: "syncedRole_a9c36f",
        emoji: "emoji_a9c36f",
        expandIcon: "expandIcon_a9c36f",
        disableButton: "disableButton_a9c36f",
      };
    },
    707692: function (e, n, t) {
      e.exports = {
        card: "card_c26824",
        header: "header_c26824",
        body: "body_c26824",
        topDivider: "topDivider_c26824",
        bottomDivider: "bottomDivider_c26824",
        expandIcon: "expandIcon_c26824",
        sourceName: "sourceName_c26824",
        guildSource: "guildSource_c26824",
        removeButton: "removeButton_c26824",
      };
    },
    503899: function (e, n, t) {
      e.exports = {
        card: "card_ea2a21",
        caret: "caret_ea2a21",
        feature: "feature_ea2a21",
        featureIcon: "featureIcon_ea2a21",
        clickable: "clickable_ea2a21",
      };
    },
    824377: function (e, n, t) {
      e.exports = {
        card: "card_adb740",
        pulse: "pulse_adb740",
        header: "header_adb740",
        body: "body_adb740",
        avatarWrapper: "avatarWrapper_adb740",
        avatarUploaderInner: "avatarUploaderInner_adb740",
        topDivider: "topDivider_adb740",
        bottomDivider: "bottomDivider_adb740",
        copyButton: "copyButton_adb740",
        expandIcon: "expandIcon_adb740",
      };
    },
    785560: function (e, n, t) {
      e.exports = {
        groupHeader: "groupHeader_fef602",
        channelName: "channelName_fef602",
      };
    },
    544978: function (e, n, t) {
      e.exports = {
        group: "group_d25d19",
        item: "item_d25d19",
        disabled: "disabled_d25d19",
        allow: "allow_d25d19",
        selected: "selected_d25d19",
        deny: "deny_d25d19",
        passthrough: "passthrough_d25d19",
      };
    },
    840309: function (e, n, t) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    877791: function (e, n, t) {
      e.exports = { updateAvailable: "updateAvailable_e3584a" };
    },
  },
]);
//# sourceMappingURL=20aa1e0767fb202f75bb.js.map
