"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44294"],
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
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(481060),
        r = t(422559),
        o = t(594045);
      function c(e) {
        let {
          grantedPermissions: n,
          disabledPermissions: t,
          grantedPermissionsHeader: a,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, i.jsxs)("div", {
          className: s()(o.list, d),
          children: [
            null != n && n.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    null != a
                      ? (0, i.jsx)(l.FormTitle, {
                          className: o.permissionHeader,
                          children: a,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: o.container,
                      children: n.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: o.permission,
                            children: [
                              (0, i.jsx)(l.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: o.check,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, r.wt)(e),
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
                    null != c
                      ? (0, i.jsx)(l.FormTitle, {
                          className: o.permissionHeader,
                          children: c,
                        })
                      : null,
                    (0, i.jsx)("div", {
                      className: o.container,
                      children: t.map((e) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: o.permission,
                            children: [
                              (0, i.jsx)(l.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: o.cross,
                              }),
                              (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: (0, r.wt)(e),
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
        r = t(149765),
        o = t(481060),
        c = t(208884),
        d = t(453628),
        u = t(996987),
        I = t(332014),
        m = t(113207);
      class _ extends a.PureComponent {
        getOverwriteValue(e) {
          let { allow: n, deny: t } = this.props;
          if (null == n || null == t)
            throw Error(
              "PermissionsForm.getOverwriteValue: Invalid allow or deny props",
            );
          return r.e$(n, e)
            ? d.y.ALLOW
            : r.e$(t, e)
              ? d.y.DENY
              : d.y.PASSTHROUGH;
        }
        getPermissionValue(e, n) {
          return r.e$(n, e);
        }
        handleChange(e, n) {
          let { onChange: t } = this.props;
          t(e, n);
        }
        renderDisabledIndicator(e) {
          return (0, i.jsx)(o.Tooltip, {
            text: e,
            position: "top",
            color: o.Tooltip.Colors.RED,
            children: (e) =>
              (0, i.jsx)("span", {
                ...e,
                children: (0, i.jsx)(o.DenyIcon, {
                  size: "sm",
                  color: "currentColor",
                  className: I.icon,
                }),
              }),
          });
        }
        renderComponent(e) {
          let { title: n, description: t, helpdeskArticleId: a, flag: s } = e,
            { permissions: r, locked: d, permissionRender: m } = this.props,
            _ = null == m ? void 0 : m(s),
            N = !!(d || _),
            E = "string" == typeof _ ? this.renderDisabledIndicator(_) : null,
            T = l()({ [I.title]: null != E });
          return null == r
            ? (0, i.jsxs)(
                u.Z,
                {
                  disabled: N,
                  value: this.getOverwriteValue(s),
                  onChange: (e) => this.handleChange(s, e),
                  note: (0, c._u)(t),
                  helpdeskArticleId: a,
                  children: [
                    E,
                    (0, i.jsx)("span", { className: T, children: n }),
                  ],
                },
                String(s),
              )
            : (0, i.jsxs)(
                o.FormSwitch,
                {
                  disabled: N,
                  value: this.getPermissionValue(s, r),
                  onChange: (e) => this.handleChange(s, e),
                  note: (0, c._u)(t),
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
          return (0, i.jsx)(o.FormSection, {
            className: n,
            children: (0, i.jsxs)(o.HeadingLevel, {
              component: (0, i.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H5,
                className:
                  null != e.description ? m.marginBottom8 : m.marginBottom20,
                children: e.title,
              }),
              children: [
                null != e.description &&
                  (0, i.jsx)(o.Text, {
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
          return o;
        },
        nj: function () {
          return c;
        },
        sE: function () {
          return r;
        },
      });
      var i = t(544891),
        a = t(570140),
        s = t(480608),
        l = t(981631);
      function r(e, n) {
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
      async function o(e, n, t) {
        let r = t.map((e) =>
            e.map((e) => ({
              connection_type: e.connectionType,
              connection_metadata_field: e.connectionMetadataField,
              application_id: e.applicationId,
              operator: e.operator,
              value: e.value,
            })),
          ),
          o = await i.tn
            .put({
              url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
              body: 0 === r.length ? [] : r,
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
          c = await (0, s.H)(e, n, !1);
        null != c &&
          a.Z.dispatch({
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: e,
            roleId: n,
            count: c,
          }),
          a.Z.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: n,
            roleConnectionConfigurations: o,
          });
      }
      async function c() {
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
        r = t(120356),
        o = t.n(r),
        c = t(481060),
        d = t(600164),
        u = t(121173);
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
                children: (0, s.jsx)(c.Scroller, {
                  fade: !0,
                  className: u.scroller,
                  children: (0, s.jsx)(d.Z.Child, { ...n, wrap: !0 }),
                }),
              })
            : (0, s.jsx)(d.Z.Child, { ...n, wrap: !0 });
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
          return (0, s.jsx)(d.Z.Child, {
            className: o()(u.content, e),
            wrap: !0,
            ...n,
          });
        }
      }
      class N extends (a = l.PureComponent) {
        render() {
          return (0, s.jsx)(d.Z, { ...this.props });
        }
      }
      I(N, "defaultProps", {
        className: u.layout,
        direction: d.Z.Direction.HORIZONTAL,
        justify: d.Z.Justify.START,
        align: d.Z.Align.START,
        wrap: d.Z.Wrap.NO_WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
      }),
        I(N, "Direction", d.Z.Direction),
        I(N, "Justify", d.Z.Justify),
        I(N, "Align", d.Z.Align),
        I(N, "Wrap", d.Z.Wrap),
        I(N, "Sidebar", m),
        I(N, "Content", _),
        (n.ZP = N);
    },
    659388: function (e, n, t) {
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
            onDragStart: r,
            onDragComplete: o,
            onDragReset: c,
          } = e,
          [d, u] = i.useState(!1),
          [, I] = (0, a.c)({
            type: n,
            item: () => (r(l), { id: l, position: t }),
            canDrag: () => d,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, n) => {
              let t = n.getDropResult();
              if (null == t) {
                c();
                return;
              }
              o(t.optionId);
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
          r = i.useCallback(
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
              let r = [...e],
                o = r.indexOf(a),
                c = r.indexOf(s),
                d = c - o > 0 ? 1 : 0;
              r.splice(o, 1), (c = r.indexOf(s)), r.splice(c + d, 0, a), n(r);
            },
            [e, t, l, n],
          );
        return {
          draggingId: t,
          handleDragStart: s,
          handleDragReset: l,
          handleDragComplete: r,
        };
      }
    },
    741247: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
          useHasGuildRoleItems: function () {
            return o;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(239091),
        l = t(241635),
        r = t(689938);
      function o(e, n) {
        return (0, l.Z)(e, n).length > 0;
      }
      function c(e) {
        let { role: n, guild: t, onSelect: o } = e,
          c = (0, l.Z)(t, n);
        return 0 === c.length
          ? null
          : (0, i.jsx)(a.Menu, {
              navId: "guild-settings-role-context",
              "aria-label": r.Z.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
              onClose: s.Zy,
              onSelect: o,
              children: c,
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
        r = t(240872),
        o = t(605436),
        c = t(228643),
        d = t(299206),
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
        let T = (0, d.Z)({ id: n.id, label: m.Z.Messages.COPY_ID_ROLE });
        null != T && N.push(T);
        let h =
            (null === (t = n.tags) || void 0 === t
              ? void 0
              : t.guild_connections) === null,
          g = n.managed && !h,
          p = null != n && (0, o.pM)(e.id, n.id);
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
                      r.Z.show({
                        title: m.Z.Messages.SETTINGS_ROLES_DELETE_TITLE,
                        body: m.Z.Messages.SETTINGS_ROLES_DELETE_BODY.format({
                          name: n.name,
                        }),
                        cancelText: m.Z.Messages.CANCEL,
                        onConfirm: async () => {
                          h && (await (0, c.L_)(e.id, n.id, [])),
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
        r = t(962086),
        o = t(225675),
        c = t(496675),
        d = t(981631),
        u = t(689938);
      function I(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : d.pNK.ROLES;
        return (0, a.e7)([c.Z], () => c.Z.canImpersonateRole(e, n))
          ? (0, i.jsx)(
              s.MenuItem,
              {
                id: "view-as-role",
                label: u.Z.Messages.VIEW_AS_ROLE,
                icon: s.ArrowSmallRightIcon,
                action: () => {
                  l.Z.close(),
                    (0, r.iD)(e.id, {
                      type: o.z.ROLES,
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
        r = t(434404),
        o = t(430824),
        c = t(626135),
        d = t(981631);
      function u(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (0 !== n.length)
          c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, l.hH)(e),
            guild_id: e,
            raid_types: n,
          });
      }
      async function I(e, n) {
        let t = new Set(e.features);
        t.has(d.oNc.COMMUNITY)
          ? n
            ? t.delete(d.oNc.RAID_ALERTS_DISABLED)
            : t.add(d.oNc.RAID_ALERTS_DISABLED)
          : n
            ? t.add(d.oNc.NON_COMMUNITY_RAID_ALERTS)
            : t.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS),
          await r.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
      }
      async function m(e, n, t, i) {
        let l = a()().add(i, "hours").toISOString();
        return await s.tn.put({
          url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
          body: {
            invites_disabled_until: n ? l : null,
            dms_disabled_until: t ? l : null,
          },
        });
      }
      async function _(e, n, t) {
        let i = o.Z.getGuild(e);
        return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
          ? null
          : await s.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: { alert_message_id: n, reason: t },
            });
      }
      async function N(e) {
        let n = o.Z.getGuild(e);
        return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
          ? null
          : await s.tn.post({ url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e) });
      }
    },
    162157: function (e, n, t) {
      t.d(n, {
        BT: function () {
          return c;
        },
        N8: function () {
          return o;
        },
      });
      var i = t(442837);
      t(467319);
      var a = t(496675),
        s = t(533244),
        l = t(487419),
        r = t(981631);
      function o(e) {
        let n = (0, i.e7)(
            [a.Z],
            () =>
              (function (e) {
                let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : a.Z;
                return (
                  n.can(r.Plq.BAN_MEMBERS, e) ||
                  n.can(r.Plq.KICK_MEMBERS, e) ||
                  n.can(r.Plq.MANAGE_GUILD, e)
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
      function c(e) {
        return (0, i.e7)(
          [a.Z],
          () =>
            (function (e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : a.Z;
              return n.can(r.Plq.MANAGE_GUILD, e);
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
        r = t(831209),
        o = t(481060),
        c = t(367907),
        d = t(177862),
        u = t(981631),
        I = t(689938),
        m = t(217329);
      function _(e) {
        let { guildId: n, transitionState: t, onClose: s } = e,
          [_, N] = a.useState([]),
          [E, T] = a.useState(),
          h = [
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_DM_SPAM,
              value: d.C2.DM_SPAM,
            },
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_MENTION_SPAM,
              value: d.C2.MENTION_SPAM,
            },
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANNEL_SPAM,
              value: d.C2.CHANNEL_SPAM,
            },
            {
              text: I.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_SUS_NEW_MEMBERS,
              value: d.C2.SUS_NEW_MEMBERS,
            },
            {
              text: I.Z.Messages
                .GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_CHANGING_SETTINGS,
              value: d.C2.CHANGING_SETTINGS,
            },
            {
              text: I.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_FEEDBACK_OTHER,
              value: d.C2.OTHER,
            },
          ];
        function g(e) {
          _.includes(e)
            ? N((n) => n.filter((n) => n !== e))
            : N((n) => [...n, e]);
        }
        return null == n
          ? (s(), null)
          : (0, i.jsxs)(o.ModalRoot, {
              transitionState: t,
              size: o.ModalSize.MEDIUM,
              children: [
                (0, i.jsx)(o.ModalHeader, {
                  separator: !0,
                  children: (0, i.jsxs)("div", {
                    className: m.headerContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: m.headerText,
                        children: [
                          (0, i.jsx)(o.LockIcon, {
                            size: "xs",
                            color: r.Z.INTERACTIVE_NORMAL,
                          }),
                          (0, i.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            children:
                              I.Z.Messages
                                .GUILD_SERVER_LOCKDOWN_FEEDBACK_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.Clickable, {
                        onClick: s,
                        children: (0, i.jsx)(o.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                          className: m.closeIcon,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(o.ModalContent, {
                  children: (0, i.jsx)("div", {
                    className: m.options,
                    children: h.map((e) => {
                      let { text: n, value: t } = e;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: l()(m.optionContainer, {
                            [m.optionContainerOther]: t === d.C2.OTHER,
                          }),
                          children: [
                            (0, i.jsxs)(o.Clickable, {
                              className: m.optionText,
                              onClick: () => g(t),
                              children: [
                                (0, i.jsx)("div", {
                                  children: (0, i.jsx)(o.Checkbox, {
                                    type: o.Checkbox.Types.INVERTED,
                                    size: 20,
                                    value: _.includes(t),
                                    onChange: () => g(t),
                                  }),
                                }),
                                (0, i.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  color: _.includes(t)
                                    ? "interactive-active"
                                    : "interactive-normal",
                                  children: n,
                                }),
                              ],
                            }),
                            t === d.C2.OTHER &&
                              _.includes(d.C2.OTHER) &&
                              (0, i.jsx)("div", {
                                className: m.textboxContainer,
                                children: (0, i.jsx)(o.TextArea, {
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
                (0, i.jsx)(o.ModalFooter, {
                  children: (0, i.jsx)(o.Button, {
                    onClick: function () {
                      (0, c.yw)(u.rMx.GUILD_RAID_LOCKDOWN_FEEDBACK, {
                        raid_lockdown_feedback_type: _,
                        raid_lockdown_feedback_other_reason: E,
                        guild_id: n,
                      }),
                        s();
                    },
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
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
        r = t(481060),
        o = t(688465),
        c = t(430824),
        d = t(626135),
        u = t(369994),
        I = t(162157),
        m = t(533244),
        _ = t(487419),
        N = t(821312),
        E = t(676770),
        T = t(981631),
        h = t(689938),
        g = t(547193);
      function p(e) {
        let {
            guildId: n,
            transitionState: t,
            onClose: p,
            analyticsData: f,
          } = e,
          x = (0, l.e7)([c.Z], () => c.Z.getGuild(n), [n]),
          C = !!(null == x ? void 0 : x.hasFeature(T.oNc.INVITES_DISABLED)),
          [O] = a.useState(!1),
          [S, A] = a.useState(E.Fl),
          R = (0, l.e7)([_.Z], () => _.Z.getGuildIncident(n)),
          b = (0, I.BT)(x),
          Z = (0, m.SG)(R) || C,
          v = (0, m.sN)(R),
          [M, L] = a.useState(Z),
          [j, D] = a.useState(v),
          [P, B] = a.useState(!1),
          y = M !== Z || j !== v || P,
          G = C && !b;
        if (null == x) return p(), null;
        function k() {
          L((e) => !e);
        }
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: t,
          size: r.ModalSize.MEDIUM,
          children: [
            (0, i.jsx)(r.ModalHeader, {
              separator: !0,
              children: (0, i.jsxs)("div", {
                className: g.headerContainer,
                children: [
                  (0, i.jsx)(r.LockIcon, {
                    size: "xs",
                    color: s.Z.INTERACTIVE_NORMAL,
                  }),
                  (0, i.jsx)(r.Heading, {
                    color: "header-primary",
                    variant: "heading-md/semibold",
                    children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_TITLE,
                  }),
                  (0, i.jsx)(o.Z, {}),
                ],
              }),
            }),
            (0, i.jsx)(r.ModalContent, {
              children: (0, i.jsxs)("div", {
                className: g.mainContainer,
                children: [
                  (0, i.jsx)(r.Select, {
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
                          (0, i.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.Z.Messages.DISABLE_INVITES,
                          }),
                          (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              h.Z.Messages
                                .GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.Tooltip, {
                        text: h.Z.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                        shouldShow: C,
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsx)(r.Switch, {
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
                          (0, i.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: h.Z.Messages.DISABLE_DMS,
                          }),
                          (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                              h.Z.Messages
                                .GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION,
                          }),
                        ],
                      }),
                      (0, i.jsx)(r.Switch, {
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
            (0, i.jsxs)(r.ModalFooter, {
              children: [
                (0, i.jsx)(r.Button, {
                  onClick: () => {
                    (Z || v) && !M && !j
                      ? ((0, u.n)(x.id, !1, !1),
                        (0, r.openModalLazy)(() =>
                          Promise.resolve((e) =>
                            (0, i.jsx)(N.Z, { ...e, guildId: n }),
                          ),
                        ))
                      : (0, u.n)(x.id, M, j, S);
                    let { source: e, alertType: t, messageId: a } = f;
                    d.default.track(
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
                  color: r.Button.Colors.BRAND,
                  look: r.Button.Looks.FILLED,
                  submitting: O,
                  disabled: !y,
                  children: h.Z.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA,
                }),
                (0, i.jsx)(r.Button, {
                  onClick: p,
                  color: r.Button.Colors.PRIMARY,
                  look: r.Button.Looks.LINK,
                  disabled: O,
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
        r,
        o,
        c = t(392711),
        d = t.n(c),
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
        x = null,
        C = !1,
        O = !1,
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
          null == e && (O = !0), (h = null != e ? e : []);
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
        if (null != x) {
          let e = j(x.id);
          null != e && (x = e);
        }
        (p = null), (S = T.QZA.OPEN), (A = {}), (R = !1);
      }
      let M = d().debounce(() => {
        R &&
          (null != f
            ? d().isEqual(f, L(f.id)) && (R = !1)
            : null != x && d().isEqual(x, j(x.id)) && (R = !1),
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
          return x;
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
          return O || C;
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
      (o = "GuildSettingsIntegrationsStore"),
        (r = "displayName") in (l = D)
          ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = o);
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
                (p = n), (f = null), (x = null), (A = {}), (R = !0);
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
                (f = t), (p = null), (x = null), (A = {}), (R = !1);
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
                if (null == x) return !1;
                (x = { ...x }),
                  null != n.name &&
                    x.name !== n.name &&
                    ((x.name = n.name), (R = !0)),
                  void 0 !== n.avatar &&
                    x.avatar !== n.avatar &&
                    ((x.avatar = n.avatar), (R = !0)),
                  null != n.channelId &&
                    x.channel_id !== n.channelId &&
                    ((x.channel_id = n.channelId), (R = !0)),
                  R && M();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                let { webhookId: n } = e,
                  t = j(n);
                if (null == t) return !1;
                (x = t), (p = null), (f = null), (A = {}), (R = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                (x = null), (A = {}), (R = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                (i = null),
                  (h = []),
                  (g = []),
                  (p = null),
                  (f = null),
                  (x = null),
                  (S = T.QZA.CLOSED),
                  (R = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                let { guildId: n, integrations: t } = e;
                if (null == i || n !== i.id || S === T.QZA.SUBMITTING)
                  return !1;
                for (let e of ((O = !1), t))
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
                C = !1;
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
                      !R && (null == x ? void 0 : x.id) === t.id && (x = t);
                  } else
                    (null == x ? void 0 : x.id) === n.id && (x = null),
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
          let { id: e, names: r } = n(l);
          if (e === t) return [l];
          r.some((e) => a()(i, e.toLowerCase())) && s.push(l);
        }
        return s;
      }
    },
    905753: function (e, n, t) {
      let i, a, s;
      t(47120);
      var l,
        r,
        o,
        c,
        d = t(442837),
        u = t(570140),
        I = t(581364),
        m = t(399860);
      let _ = {},
        N = {},
        E = !1;
      function T() {
        (i = void 0), (_ = {}), (N = {}), (a = void 0), (s = void 0), (E = !1);
      }
      class h extends (l = d.ZP.Store) {
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
      (c = "IntegrationPermissionStore"),
        (o = "displayName") in (r = h)
          ? Object.defineProperty(r, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = c),
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
          return d;
        },
      }),
        t(47120),
        t(653041),
        t(733860);
      var i = t(470079),
        a = t(581364),
        s = t(984933),
        l = t(496675),
        r = t(282923),
        o = t(981631),
        c = t(689938);
      function d(e) {
        let n = i.useMemo(() => {
            let n = s.ZP.getChannels(e),
              t = [...n[s.sH]];
            t.push(...n[s.Zb].filter((e) => e.channel.isGuildVocal()));
            let i = t.map((e) => ({
              id: e.channel.id,
              name: e.channel.name,
              canManage: l.Z.can(o.Plq.MANAGE_ROLES, e.channel),
            }));
            return (
              i.unshift({
                id: (0, a.bD)(e),
                name: c.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                canManage: !0,
              }),
              i
            );
          }, [e]),
          [t, d] = i.useState(""),
          I = i.useMemo(() => {
            let e = (function (e) {
              return e.startsWith("#") ? e.substr(1) : e;
            })(t);
            return (0, r.B)(n, u, e);
          }, [n, t]);
        return { query: t, results: I, setQuery: d, unfilteredCount: n.length };
      }
      function u(e) {
        return { id: e.id, names: [e.name] };
      }
    },
    932776: function (e, n, t) {
      t.d(n, {
        O: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(373793),
        s = t(442837),
        l = t(911969),
        r = t(282923),
        o = t(905753);
      function c() {
        let e = (0, s.cj)([o.Z], () => {
            var e;
            return Object.values(
              null !== (e = o.Z.getCommands()) && void 0 !== e ? e : {},
            );
          }),
          [n, t] = i.useState(""),
          c = i.useMemo(
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
              [...c].sort((e, n) => {
                let t = l.yU.CHAT + 1,
                  i = n.type > t ? t : n.type,
                  a = i - (e.type > t ? t : e.type);
                return 0 !== a
                  ? a
                  : e.untranslatedName.localeCompare(n.untranslatedName);
              }),
            [c],
          ),
          I = i.useMemo(
            () =>
              n.startsWith("/") ? u.filter((e) => e.type === l.yU.CHAT) : u,
            [n, u],
          ),
          m = i.useMemo(() => (n.startsWith("/") ? n.substring(1) : n), [n]);
        return {
          query: n,
          results: i.useMemo(() => (0, r.B)(I, d, m), [I, m]),
          setQuery: t,
          unfilteredCount: e.length,
        };
      }
      function d(e) {
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
        r = t(442837),
        o = t(271383),
        c = t(430824),
        d = t(496675),
        u = t(594174),
        I = t(700785),
        m = t(282923),
        _ = t(981631);
      function N(e) {
        let n = (0, r.e7)([c.Z], () => c.Z.getGuild(e));
        s()(
          null != n,
          "guild must be present to be editing its integration settings",
        );
        let t = (0, r.e7)([d.Z], () => d.Z.getHighestRole(n)),
          a = (0, r.Wu)([o.ZP], () => o.ZP.getMembers(e), [e]),
          N = (0, r.cj)([u.default], () => u.default.getUsers()),
          h = (0, r.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
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
                d.Z.canManageUser(_.Plq.USE_APPLICATION_COMMANDS, i, n);
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
                  d.Z.isRoleHigher(n, t, a),
                r = { id: a.id, name: a.name, canManage: s };
              a.id === e ? i.unshift(r) : i.push(r);
            }
            return i;
          }, [h, e, n, t]),
          [x, C] = i.useState(""),
          O = i.useMemo(() => {
            let n = (function (e) {
                return e.startsWith("@") ? e.substr(1) : e;
              })(x),
              t = x.startsWith("@") ? f.filter((n) => n.id === e) : f,
              i = (0, m.B)(g, E, n);
            return { members: i, roles: (0, m.B)(t, T, n) };
          }, [e, g, x, f]);
        return {
          query: x,
          results: O,
          setQuery: C,
          unfilteredCount: O.members.length + O.roles.length,
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
        r = t.n(l),
        o = t(442837),
        c = t(139387),
        d = t(895924),
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
        let a = (0, o.e7)([T.Z], () => T.Z.getApplicationPermissions()),
          l = i.useMemo(
            () =>
              (function (e, n) {
                let t = { ...n },
                  i = (0, u.bD)(e),
                  a = (0, h.rE)(i, d.Kw.CHANNEL),
                  s = (0, h.rE)(e, d.Kw.ROLE);
                return (
                  !(s in t) &&
                    (t[s] = { id: e, permission: !0, type: d.Kw.ROLE }),
                  !(a in t) &&
                    (t[a] = { id: i, permission: !0, type: d.Kw.CHANNEL }),
                  t
                );
              })(e, null != a ? a : {}),
            [a, e],
          ),
          p = (0, o.e7)(
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
          f = (0, o.e7)(
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
          x = null != t ? t : n,
          C = null != t ? p : l,
          O = i.useMemo(
            () => (null != f ? f : { ...(null != C ? C : {}) }),
            [f, C],
          ),
          S = i.useMemo(() => Object.keys(O).length, [O]),
          A = i.useMemo(
            () => (null == C || null == O ? null : !r().isEqual(C, O)),
            [C, O],
          );
        return (
          i.useEffect(() => {
            if (x === n)
              A
                ? c.Z.startEditingCommandPermissions(x)
                : c.Z.stopEditingCommandPermissions(x);
          }, [n, A, x]),
          {
            originalApplicationPermissions: l,
            originalCommandPermissions: p,
            editedTargetPermissions: (function (e, n) {
              let t = (0, o.e7)([m.Z], () => m.Z.getGuild(e), [e]);
              s()(
                null != t,
                "guild must be present to be editing its integration settings",
              );
              let a = (0, o.e7)([_.Z], () => _.Z.getHighestRole(t), [t]),
                l = (0, o.e7)([N.default], () => {
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
              let r = l === t.ownerId,
                {
                  channelIds: c,
                  roleIds: T,
                  userIds: h,
                } = i.useMemo(() => {
                  let e = [],
                    t = [],
                    i = [];
                  for (let a of Object.values(n))
                    a.type === d.Kw.CHANNEL
                      ? e.push(a.id)
                      : a.type === d.Kw.ROLE
                        ? t.push(a.id)
                        : a.type === d.Kw.USER && i.push(a.id);
                  return { channelIds: e, roleIds: t, userIds: i };
                }, [n]),
                p = (0, o.cj)(
                  [I.Z],
                  () =>
                    Object.fromEntries(
                      c
                        .map(I.Z.getChannel)
                        .filter(E.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [c],
                ),
                f = (0, o.cj)(
                  [m.Z],
                  () =>
                    Object.fromEntries(
                      T.map((n) => m.Z.getRole(e, n))
                        .filter(E.lm)
                        .map((e) => [e.id, e]),
                    ),
                  [T, e],
                ),
                x = (0, o.cj)(
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
                for (let [l, o] of Object.entries(n)) {
                  let n = !1,
                    c = !1;
                  if (o.type === d.Kw.CHANNEL) {
                    let e = o.id === i,
                      t = p[o.id];
                    (n = e || _.Z.can(g.Plq.VIEW_CHANNEL, t)), (c = !0);
                  } else if (o.type === d.Kw.ROLE) {
                    let i = o.id === e,
                      s = f[o.id];
                    (n = i || null != s),
                      (c = r || i || _.Z.isRoleHigher(t, a, s));
                  } else if (o.type === d.Kw.USER) {
                    let e = x[o.id];
                    (n = null != e),
                      (c =
                        null != e &&
                        (r ||
                          _.Z.canManageUser(
                            g.Plq.USE_APPLICATION_COMMANDS,
                            e,
                            t,
                          )));
                  }
                  s[l] = { ...o, canRead: n, canWrite: c };
                }
                return s;
              }, [p, t, a, r, n, f, x]);
            })(e, O),
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
        r = t(911969),
        o = t(399860),
        c = t(689938),
        d = t(83956);
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
                    label: c.Z.Messages.COPY_ID_COMMAND,
                  });
              });
            },
            [m],
          ),
          h = m.type === r.yU.CHAT ? s.SlashBoxIcon : s.PaperIcon,
          g = (0, o.gw)(m.type, m.displayName);
        return (0, i.jsxs)(s.Clickable, {
          onClick: E,
          className: d.item,
          onContextMenu: T,
          children: [
            (0, i.jsxs)("div", {
              className: d.identifier,
              children: [
                (0, i.jsx)(h, {
                  className: d.icon,
                  size: "md",
                  color: "currentColor",
                }),
                (0, i.jsx)(s.Text, { variant: "text-md/normal", children: g }),
              ],
            }),
            (0, i.jsx)("div", {
              className: d.statusContainer,
              children: N
                ? (0, i.jsxs)("div", {
                    className: d.statusLine,
                    children: [
                      (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children:
                          c.Z.Messages
                            .INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES,
                      }),
                      (0, i.jsx)(s.CircleInformationIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: d.statusIcon,
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
        r = t(680298),
        o = t(289465),
        c = t(689938),
        d = t(701468);
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
            ? (0, i.jsx)(o.Z, {
                bar: (0, i.jsx)(s.SearchBar, {
                  query: _,
                  onChange: N,
                  onClear: () => N(""),
                }),
                inModal: !1,
                title: c.Z.Messages.COMMANDS,
                children: m.map((e, l) =>
                  (0, i.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        (0, i.jsx)(r.Z, {
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
                className: d.emptyCard,
                editable: !0,
                children: (0, i.jsx)(s.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: c.Z.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS,
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
        r = t(512722),
        o = t.n(r),
        c = t(866442),
        d = t(442837),
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
        x = t(594174),
        C = t(51144),
        O = t(981631),
        S = t(689938),
        A = t(142208);
      function R(e) {
        let { guild: n, id: s, type: l, isLocked: r, lockTooltipText: c } = e,
          d = !r || null != c;
        o()(d, "No lockTooltipText provided while isLocked=true");
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
              isLocked: r,
              lockTooltipText: c,
              openEntryContextMenu: u,
            });
          case m.Kw.ROLE:
            return (0, i.jsx)(Z, {
              guild: n,
              id: s,
              isLocked: r,
              lockTooltipText: c,
              openEntryContextMenu: u,
            });
          case m.Kw.USER:
            return (0, i.jsx)(v, {
              guild: n,
              id: s,
              isLocked: r,
              lockTooltipText: c,
              openEntryContextMenu: u,
            });
        }
      }
      function b(e) {
        let {
            guild: n,
            id: t,
            isLocked: s,
            lockTooltipText: r,
            openEntryContextMenu: o,
          } = e,
          c = (0, _.bD)(n.id),
          {
            icon: I,
            name: m,
            categoryName: E,
          } = (0, d.cj)(
            [h.Z],
            () => {
              if (c === t)
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
            [c, n, t],
          ),
          T = a.useCallback(
            (e) => {
              t !== c && o(e);
            },
            [c, t, o],
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
                s ? (0, i.jsx)(M, { tooltipText: r }) : null,
              ],
            });
      }
      function Z(e) {
        var n;
        let { guild: s, id: r, isLocked: o, lockTooltipText: m } = e,
          _ = (0, d.e7)([p.Z], () => p.Z.getRole(s.id, r)),
          N = (0, T.p9)({ guildId: s.id, roleId: r, size: 24 }),
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
                          : (0, c.Rf)(O.p6O),
                    }),
                (0, i.jsx)(u.Text, {
                  className: A.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: _.name,
                }),
                o ? (0, i.jsx)(M, { tooltipText: m }) : null,
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
          r = (0, d.e7)([x.default], () => x.default.getUser(t)),
          o = (0, d.e7)(
            [g.ZP],
            () => {
              var e;
              return null === (e = g.ZP.getMember(n.id, t)) || void 0 === e
                ? void 0
                : e.nick;
            },
            [n.id, t],
          ),
          c = (0, d.e7)([f.Z], () => f.Z.hidePersonalInformation);
        return null == r
          ? null
          : (0, i.jsxs)("div", {
              onContextMenu: l,
              className: A.identifier,
              children: [
                (0, i.jsx)(u.Avatar, {
                  className: A.image,
                  src: r.getAvatarURL(n.id, 24),
                  "aria-label": r.username,
                  size: u.AvatarSizes.SIZE_24,
                }),
                (0, i.jsx)(u.Text, {
                  className: A.roleName,
                  color: "header-primary",
                  variant: "text-md/normal",
                  children: null != o ? o : r.username,
                }),
                c
                  ? null
                  : (0, i.jsx)(u.Text, {
                      className: A.tag,
                      variant: "text-sm/normal",
                      children: C.ZP.getUserTag(r),
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
        r = t(392711),
        o = t.n(r),
        c = t(442837),
        d = t(481060),
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
        x = t(5192),
        C = t(709054),
        O = t(360606),
        S = t(905753),
        A = t(399860),
        R = t(335049),
        b = t(617012),
        Z = t(981631),
        v = t(689938),
        M = t(408795);
      function L(e) {
        let {
            commandId: n,
            editPermissions: t,
            guildId: s,
            noneSelectedText: r,
            overwrites: I,
            hasAccessToMutatePermissions: N,
          } = e,
          T = (0, c.e7)([g.Z], () => g.Z.getGuild(s));
        l()(null != T, "");
        let h = (0, c.e7)([g.Z], () => g.Z.getRoles(s)),
          [f, R] = a.useState(new Set()),
          b = a.useMemo(() => {
            var e;
            let n = (0, _.bD)(s);
            let t =
              ((e = h),
              o()(e)
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
                        let e = x.ZP.getName(t, void 0, a),
                          n = x.ZP.getName(t, void 0, s);
                        return null == e ? void 0 : e.localeCompare(n);
                      }
                      return C.default.compare(e.id, n.id);
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
                      return 0 !== i ? i : C.default.compare(e.id, n.id);
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
        let L = (0, c.e7)([S.Z], () => S.Z.getApplicationId()),
          D = (0, c.e7)([O.Z], () =>
            null == L
              ? void 0
              : O.Z.integrations.find((e) => {
                  var n;
                  return (
                    (null === (n = e.application) || void 0 === n
                      ? void 0
                      : n.id) === L
                  );
                }),
          ),
          P = (0, c.e7)(
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
                  children: (0, i.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: r,
                  }),
                }),
        });
      }
      function j(e) {
        var n, t, s;
        let l,
          {
            guild: r,
            commandId: o,
            onChange: c,
            onRemove: u,
            overwrite: E,
            integration: g,
            canShowMigrationTooltip: p,
            hasAccessToMutatePermissions: x,
          } = e,
          C = E.id === r.id || E.id === (0, _.bD)(r.id),
          O =
            null == g
              ? void 0
              : null === (t = g.application) || void 0 === t
                ? void 0
                : null === (n = t.bot) || void 0 === n
                  ? void 0
                  : n.username,
          S = !E.canWrite || !x,
          A = h.default.getId();
        x
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
              null != o
                ? v.Z.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND
                : v.Z.Messages
                    .INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION);
        let L =
          p && null != g && E.id === r.id && void 0 !== O && !E.permission;
        a.useEffect(() => {
          if (L) {
            var e;
            f.default.track(Z.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, I.hH)(r.id),
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
          r.id,
          null == g
            ? void 0
            : null === (s = g.application) || void 0 === s
              ? void 0
              : s.id,
          L,
        ]);
        let j = (0, i.jsx)(d.Tooltip, {
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
                        N.Z.dismissToggleTooltip(r.id, g), c(e);
                      }
                    : c,
                }),
              }),
          }),
          P = (0, i.jsx)(d.Popout, {
            renderPopout: () =>
              (0, i.jsx)(d.Clickable, {
                onClick: (e) => {
                  e.stopPropagation(), N.Z.dismissToggleTooltip(r.id, g);
                },
                children: (0, i.jsx)(T.ZP, {
                  className: M.tooltip,
                  content:
                    v.Z.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format(
                      {
                        botName: O,
                        link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
                      },
                    ),
                  onClick: () => {},
                }),
              }),
            position: "bottom",
            align: "center",
            animation: d.Popout.Animation.TRANSLATE,
            onRequestClose: () => N.Z.dismissToggleTooltip(r.id, g),
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
                  guild: r,
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
                    commandId: o,
                    isSentinel: C,
                    isDisabled: !x,
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
                children: (0, i.jsx)(d.Clickable, {
                  className: M.removeContainer,
                  "aria-label":
                    v.Z.Messages
                      .INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
                  onClick: s,
                  children: (0, i.jsx)(d.TrashIcon, {
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
        r = t(149765),
        o = t(442837),
        c = t(481060),
        d = t(895924),
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
        x = t(289465),
        C = t(981631),
        O = t(689079),
        S = t(689938),
        A = t(457237);
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
          j = (0, o.e7)([T.Z], () => (null == s ? null : T.Z.getCommand(s)), [
            s,
          ]),
          D = (null == j ? void 0 : j.defaultMemberPermissions) != null,
          P = (0, o.e7)(
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
              i.type === d.Kw.CHANNEL ? (e[t] = i) : (n[t] = i);
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
          H = a.useCallback(
            (e, n) => {
              let t;
              let i = null;
              if (0 !== n.length) {
                let e = R[n[0]];
                if (e.type === d.Kw.USER) t = f.s.REMOVE_SELF;
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
                H(e, t);
                return;
              }
              E.W4(n, B, i);
            },
            [n, R, B, k, H],
          ),
          U = a.useCallback(() => {
            let e = Object.keys(y);
            return (0, c.openModalLazy)(async () => {
              let { default: n } = await t.e("64908").then(t.bind(t, 46851));
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
            return (0, c.openModalLazy)(async () => {
              let { default: n } = await t.e("64908").then(t.bind(t, 46851));
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
              (0, c.openModalLazy)(async () => {
                let { default: e } = await t.e("21897").then(t.bind(t, 303313)),
                  n = j.defaultMemberPermissions;
                return (
                  r.fS(n, u.BO) && (n = C.Plq.ADMINISTRATOR),
                  (t) => (0, i.jsx)(e, { ...t, defaultMemberPermissions: n })
                );
              }),
            [j],
          ),
          V = L - O._n,
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
              buttonClick: U,
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
              ? (0, i.jsx)(c.HelpMessage, {
                  messageType: c.HelpMessageTypes.WARNING,
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
                    (0, i.jsx)(c.CircleInformationIcon, {
                      size: "sm",
                      color: "currentColor",
                      className: A.icon,
                    }),
                    (0, i.jsx)("span", {
                      className: A.message,
                      children:
                        S.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format(),
                    }),
                    (0, i.jsx)(c.Button, {
                      color: c.Button.Colors.PRIMARY,
                      onClick: F,
                      size: c.Button.Sizes.SMALL,
                      className: A.addButton,
                      children: S.Z.Messages.VIEW,
                    }),
                  ],
                })
              : null,
            Y.map((e, n) => {
              let t = (n) =>
                  (0, i.jsx)(c.Button, {
                    ...n,
                    color: c.Button.Colors.PRIMARY,
                    disabled: K || !P,
                    onClick: e.buttonClick,
                    size: c.Button.Sizes.TINY,
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
                  x.Z,
                  {
                    bar: (0, i.jsx)(c.Tooltip, {
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
          results: n.results.map((e) => ({ ...e, type: d.Kw.CHANNEL })),
        };
      }
      function Z(e) {
        let n = (0, g.U)(e);
        return {
          ...n,
          results: n.results.roles
            .map((e) => ({ ...e, type: d.Kw.ROLE }))
            .concat(n.results.members.map((e) => ({ ...e, type: d.Kw.USER }))),
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
        r = t(481060),
        o = t(689938),
        c = t(471951);
      let d = [!1, !0];
      function u(e) {
        let { isDisabled: n, currentValue: t, onChange: s } = e,
          o = (0, r.useRadioGroup)({
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
          className: l()(c.group, { [c.disabled]: n }),
          ...o,
          children: d.map((e) =>
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
          s = t ? c.allow : c.deny,
          d = t ? r.CheckmarkLargeIcon : r.XSmallIcon,
          u = t
            ? o.Z.Messages.PERMISSION_OVERRIDE_ALLOW
            : o.Z.Messages.PERMISSION_OVERRIDE_DENY,
          I = (0, r.useRadioItem)({ isSelected: n, label: u });
        return (0, i.jsx)(r.Clickable, {
          className: l()(c.item, s, { [c.selected]: n }),
          onClick: a,
          ...I,
          children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
        });
      }
    },
    454092: function (e, n, t) {
      t.d(n, {
        _: function () {
          return c;
        },
        s: function () {
          return a;
        },
      });
      var i,
        a,
        s = t(668781),
        l = t(63063),
        r = t(981631),
        o = t(689938);
      function c(e, n) {
        let t;
        0 === e
          ? (t =
              o.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format())
          : 1 === e
            ? (t =
                o.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format(
                  { name: n },
                ))
            : 2 === e &&
              (t =
                o.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format(
                  { name: n },
                )),
          s.Z.show({
            title: o.Z.Messages.SELF_DENY_PERMISSION_TITLE,
            body: t,
            cancelText: o.Z.Messages.HELP_DESK,
            onCancel() {
              window.open(
                l.Z.getArticleURL(
                  r.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT,
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
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(481060),
        r = t(483337);
      function o(e) {
        let { bar: n, children: t, className: a, inModal: o, title: c } = e;
        return (0, i.jsxs)(l.Card, {
          editable: !0,
          className: s()(r.card, a, { [r.inModal]: o }),
          children: [
            (0, i.jsxs)("div", {
              className: s()(r.cardHeader, { [r.inModal]: o }),
              children: [
                (0, i.jsx)(l.Text, {
                  variant: "text-xs/semibold",
                  className: r.title,
                  children: c,
                }),
                (0, i.jsx)("div", { children: n }),
              ],
            }),
            o ? (0, i.jsx)(l.FormDivider, {}) : null,
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
        r = t(366598),
        o = t(821864),
        c = t(905753),
        d = t(995390),
        u = t(469880),
        I = t(665578),
        m = t(689938),
        _ = t(121080);
      function N(e) {
        let { application: n, canNavigate: t, guildId: d } = e,
          I = (0, s.e7)([c.Z], () => c.Z.isUnavailable());
        return (a.useEffect(() => (o.I4(n.id), o.kZ), [n.id]),
        a.useEffect(() => {
          o.gq(n.id, d, n.id), o.Sn(d, n.id);
        }, [n.id, d]),
        I)
          ? null
          : (0, i.jsxs)(a.Fragment, {
              children: [
                (0, i.jsx)(r.Z, {
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
                (0, i.jsx)(E, { guildId: d, applicationId: n.id }),
                (0, i.jsx)(u.Z, {
                  applicationIcon: n.icon,
                  applicationName: n.name,
                  canNavigate: t,
                  guildId: d,
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
          } = (0, d.Z)(t, n);
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
        r = t(512722),
        o = t.n(r),
        c = t(392711),
        d = t.n(c),
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
        x = t(600164),
        C = t(666657),
        O = t(487419),
        S = t(664452),
        A = t(560114),
        R = t(699516),
        b = t(594174),
        Z = t(965638),
        v = t(981631),
        M = t(689938),
        L = t(690873),
        j = t(869042),
        D = t(113207);
      let P = { INVITER: 3, INVITE_CODE: 3, USES: 1, EXPIRES: 2 };
      function B(e) {
        var n, t;
        let {
            invite: a,
            showChannel: s = !1,
            inviteDisabled: r = !1,
            hide: o = !1,
          } = e,
          c = a.uses;
        return (
          a.maxUses > 0 && (c = "".concat(a.uses, "/").concat(a.maxUses)),
          (0, i.jsxs)(x.Z, {
            className: l()(L.inviteSettingsInviteRow, j.card, {
              [L.inviteDisabledRow]: r,
            }),
            children: [
              (0, i.jsx)(x.Z, {
                grow: P.INVITER,
                basis: 0,
                align: x.Z.Align.CENTER,
                className: l()(L.text),
                children: (0, i.jsxs)(x.Z.Child, {
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
              (0, i.jsx)(x.Z, {
                grow: P.INVITE_CODE,
                shrink: 1,
                basis: 0,
                align: x.Z.Align.CENTER,
                className: L.text,
                children: (0, i.jsx)(m.Text, {
                  className: L.inviteCode,
                  variant: "text-sm/normal",
                  children: o ? "..." : a.code,
                }),
              }),
              (0, i.jsx)(x.Z, {
                grow: P.USES,
                basis: 0,
                justify: x.Z.Justify.END,
                align: x.Z.Align.CENTER,
                className: l()(L.text),
                children: (0, i.jsx)(m.Text, {
                  className: L.uses,
                  variant: "text-sm/normal",
                  children: c,
                }),
              }),
              (0, i.jsx)(x.Z, {
                grow: P.EXPIRES,
                basis: 0,
                align: x.Z.Align.CENTER,
                justify: x.Z.Justify.END,
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
          channel: r = null,
          showChannel: c = !1,
          loading: _ = !1,
          canCreateInvites: N = !1,
        } = e;
        o()(null != s, "guild is required");
        let E = (0, Z.M)(s),
          h = (0, u.e7)([O.Z], () => O.Z.getGuildIncident(s.id)),
          p =
            s.hasFeature(v.oNc.INVITES_DISABLED) ||
            ((null == h ? void 0 : h.invitesDisabledUntil) != null &&
              new Date(h.invitesDisabledUntil) > new Date()),
          f = (0, g.ZP)(),
          R = a.useMemo(
            () =>
              null == n || _
                ? []
                : d()(n)
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
                  channel: r,
                  guild: s,
                  source: v.t4x.SETTINGS_INVITE,
                }),
            );
          },
          j = () => {
            let e = { source: C.Zu.GUILD_SETTINGS };
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
                  ? (0, i.jsxs)(x.Z, {
                      children: [
                        (0, i.jsx)(x.Z.Child, {
                          grow: P.INVITER,
                          basis: 0,
                          className: D.marginReset,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_INVITER,
                          }),
                        }),
                        (0, i.jsx)(x.Z.Child, {
                          basis: 0,
                          grow: P.INVITE_CODE,
                          className: D.marginReset,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_INVITE_CODE,
                          }),
                        }),
                        (0, i.jsx)(x.Z.Child, {
                          grow: P.USES,
                          basis: 0,
                          className: L.textAlignRight,
                          children: (0, i.jsx)(m.FormTitle, {
                            children: M.Z.Messages.INSTANT_INVITE_USES,
                          }),
                        }),
                        (0, i.jsx)(x.Z.Child, {
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
                  { hide: l, invite: a, showChannel: c, inviteDisabled: p },
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
        r = t.n(l),
        o = t(512722),
        c = t.n(o),
        d = t(481060),
        u = t(624138),
        I = t(813197),
        m = t(981631),
        _ = t(689938),
        N = t(315822);
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
        return (0, a.jsx)(d.ThemeProvider, {
          theme: m.BRd.LIGHT,
          children: (e) =>
            (0, a.jsx)("div", {
              className: r()(N.imageUploaderIcon, n, e),
              children: t,
            }),
        });
      }
      class h extends (i = s.PureComponent) {
        handleExternalFileChange(e) {
          c()(
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
            hint: o,
            name: c,
            makeURL: E,
            disabled: h,
            onChange: g,
            showIcon: p,
            showIconDisabled: f,
            className: x,
            imageClassName: C,
            iconClassName: O,
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
              : null != c &&
                (i = (0, a.jsx)(d.Heading, {
                  variant: "heading-xxl/normal",
                  color: "always-white",
                  className: N.imageUploaderAcronym,
                  children: (0, u.Zg)(c),
                })),
            h)
          )
            return (0, a.jsx)("div", {
              className: r()(N.imageUploader, N.disabled, x),
              children: (0, a.jsxs)("div", {
                className: r()(N.imageUploaderInner, C),
                style: { ...b, backgroundImage: t },
                children: [
                  i,
                  f &&
                    (0, a.jsx)("div", {
                      className: r()(
                        N.imageUploaderIcon,
                        N.imageUploaderIconDisabled,
                        O,
                      ),
                      children: A,
                    }),
                ],
              }),
            });
          null != l
            ? (s = (0, a.jsx)(d.Anchor, {
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
            null !== (e = null != j ? j : o) && void 0 !== e
              ? e
              : _.Z.Messages.CHANGE_AVATAR;
          return (0, a.jsxs)("div", {
            className: r()(N.imageUploader, x),
            children: [
              (0, a.jsx)(d.FocusRing, {
                within: !0,
                children: (0, a.jsxs)("div", {
                  className: p ? r()(N.imageUploaderIconWrapper, S) : void 0,
                  children: [
                    (0, a.jsxs)("div", {
                      className: r()(N.imageUploaderInner, C),
                      style: { ...b, backgroundImage: t },
                      children: [
                        (0, a.jsx)("span", { "aria-hidden": !0, children: i }),
                        null != L
                          ? (0, a.jsx)(d.Clickable, {
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
                    null != o &&
                      (0, a.jsx)("div", {
                        className: N.imageUploaderHint,
                        "aria-hidden": "true",
                        children: o,
                      }),
                    p && (0, a.jsx)(T, { className: O, icon: A }),
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
        r = t(600164),
        o = t(528144),
        c = t(689938),
        d = t(365515);
      function u(e) {
        let {
          name: n,
          description: t,
          icon: a,
          imageSrc: u,
          iconBackgroundColor: I,
          iconClassName: m,
          iconWrapperClassName: _,
          details: N,
          detailsClassName: E,
          isHeader: T,
          isPremium: h,
        } = e;
        return (0, i.jsxs)(r.Z, {
          justify: r.Z.Justify.CENTER,
          className: d.wrapper,
          children: [
            null != a || null != u
              ? (0, i.jsx)(r.Z.Child, {
                  shrink: 0,
                  grow: 0,
                  children: (function (e, n, t, a, l) {
                    if (null != n)
                      return (0, i.jsx)("img", {
                        alt: "",
                        src: n,
                        className: s()(d.iconWrapper, a),
                      });
                    let o = null;
                    return (
                      null != e &&
                        (o =
                          "string" == typeof e
                            ? (0, i.jsx)("img", {
                                alt: "",
                                src: e,
                                className: s()(d.icon, a),
                              })
                            : (0, i.jsx)(e, {
                                className: s()(d.icon, a),
                                color: "currentColor",
                              })),
                      (0, i.jsx)(r.Z, {
                        align: r.Z.Align.CENTER,
                        justify: r.Z.Justify.CENTER,
                        style: { backgroundColor: t },
                        className: s()(d.iconWrapper, l),
                        children: o,
                      })
                    );
                  })(a, u, I, m, _),
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
                              d.detailsWrapper,
                              I ? d.headerDetailsWrapper : null,
                            ),
                            children: [
                              null != t
                                ? (0, i.jsx)(t, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: d.detailsIcon,
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
              return (0, i.jsxs)(r.Z, {
                direction: r.Z.Direction.VERTICAL,
                children: [
                  (0, i.jsxs)(o.Z, {
                    size: I ? o.Z.Sizes.SIZE_24 : o.Z.Sizes.SIZE_16,
                    className: I ? d.header : d.secondaryHeader,
                    children: [
                      n,
                      m &&
                        (0, i.jsx)(l.Tooltip, {
                          text: c.Z.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
                          children: (e) =>
                            (0, i.jsx)(l.TicketIcon, {
                              size: "xs",
                              color: "currentColor",
                              ...e,
                              className: d.premiumIcon,
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
                  (0, i.jsx)(r.Z, {
                    direction: r.Z.Direction.HORIZONTAL,
                    align: r.Z.Align.CENTER,
                    wrap: r.Z.Wrap.WRAP,
                    children: _,
                  }),
                ],
              });
            })({
              name: n,
              description: t,
              details: N,
              detailsClassName: E,
              isHeader: T,
              isPremium: h,
            }),
          ],
        });
      }
    },
    366598: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        r = t(481060),
        o = t(926152);
      function c(e) {
        let { children: n, icon: t, title: s } = e;
        return (0, i.jsxs)("header", {
          className: o.header,
          children: [
            (0, i.jsxs)("div", {
              className: o.name,
              children: [
                a.cloneElement(t, {
                  className: l()(t.props.className, o.icon),
                  height: 24,
                  width: 24,
                }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  className: o.title,
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
          return O;
        },
      }),
        t(47120),
        t(653041);
      var i = t(735250),
        a = t(470079),
        s = t(442837),
        l = t(481060),
        r = t(668781),
        o = t(600164),
        c = t(434404),
        d = t(590157),
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
        x = t(695768);
      function C(e) {
        let { application: n, guild: t, integration: a, ...s } = e;
        return (0, i.jsx)(l.ConfirmModal, {
          ...s,
          header: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
            applicationName: n.name,
          }),
          confirmText: f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
          cancelText: f.Z.Messages.CANCEL,
          onConfirm: () => {
            c.Z.disableIntegration(t.id, a.id).catch(() => {
              r.Z.show({
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
      function O(e) {
        var n;
        let {
            guild: t,
            applicationIntegration: r,
            selectableWebhookChannels: c,
            editedWebhook: O,
            errors: S,
            canNavigate: A,
          } = e,
          { application: R, integration: b, webhooks: Z } = r,
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
                (0, i.jsx)(C, {
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
                ? (0, i.jsx)(h.Z, { guild: t, applicationIntegration: r })
                : (0, i.jsx)(l.Card, {
                    className: x.emptyCard,
                    editable: !0,
                    children: (0, i.jsx)(l.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: f.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT,
                    }),
                  }),
            [R.bot, r, t],
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
                  className: x.headerDescription,
                })
              : null,
            v
              ? (0, i.jsx)(d.Z, {
                  application: R,
                  canNavigate: A,
                  guildId: t.id,
                })
              : null,
            (0, i.jsx)(l.FormDivider, { className: x.headerDivider }),
            null != R.bot
              ? (0, i.jsxs)("div", {
                  className: x.section,
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
              className: x.section,
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
                      editedWebhook: O,
                      selectableWebhookChannels: c,
                      errors: S,
                      canNavigate: A,
                    })
                  : (0, i.jsx)(l.Card, {
                      className: x.emptyCard,
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
            (0, i.jsx)(l.FormDivider, { className: x.headerDivider }),
            (0, i.jsxs)(o.Z, {
              className: x.section,
              justify: o.Z.Justify.BETWEEN,
              align: o.Z.Align.CENTER,
              children: [
                (0, i.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  children: M
                    ? f.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY
                    : f.Z.Messages
                        .INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS,
                }),
                (0, i.jsx)(o.Z.Child, {
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
        r = t(726542),
        o = t(434404),
        c = t(486199),
        d = t(13051),
        u = t(734761);
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
          h = r.Z.get(m),
          g = a.useCallback(
            async (e) => {
              T() &&
                (await o.Z.enableIntegration(I.id, e.type, e.id),
                l.Z.startEditingIntegration(e.id));
            },
            [T, I.id],
          ),
          p = a.useCallback(
            (e) => {
              T() &&
                (e.id === (null == t ? void 0 : t.id) &&
                  l.Z.stopEditingIntegration(),
                o.Z.disableIntegration(I.id, e.id));
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
            (0, i.jsx)(c.Z, {
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
                d.Z,
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
        r = t(600164),
        o = t(63063),
        c = t(725875),
        d = t(981631),
        u = t(689938),
        I = t(904426),
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
                  helpdeskArticle: o.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING),
                }),
            }),
            (0, i.jsx)(s.FormDivider, { className: I.headerDivider }),
            n.length > 0
              ? (0, i.jsx)(c.Z, {
                  webhooks: n,
                  editedWebhook: t,
                  selectableWebhookChannels: N,
                  errors: E,
                  canNavigate: T,
                })
              : (function (e, n) {
                  let t = (0, a.wj)(e) ? m : _;
                  return (0, i.jsxs)(r.Z, {
                    direction: r.Z.Direction.VERTICAL,
                    align: r.Z.Align.CENTER,
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
                })(h, () => open(o.Z.getArticleURL(d.BhN.CHANNEL_FOLLOWING))),
          ],
        });
      }
    },
    327934: function (e, n, t) {
      t.d(n, {
        I: function () {
          return c;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(481060),
        l = t(296023),
        r = t(768581),
        o = t(585835);
      function c(e) {
        var n;
        let { channel: c, application: d, showApplicationImage: u, ...I } = e,
          m = (0, l.w)(c),
          _ = a.useCallback(
            () =>
              (0, s.openModalLazy)(async () => {
                let { default: e } = await t.e("14089").then(t.bind(t, 262528));
                return (n) =>
                  (0, i.jsx)(e, { ...n, channel: c, application: d });
              }),
            [d, c],
          ),
          N = u
            ? null !== (n = d.getIconURL(48)) && void 0 !== n
              ? n
              : r.pK["0"]
            : void 0;
        return (0, i.jsx)(o.Z, {
          imageSrc: N,
          onButtonClick: _,
          details: null != m ? [{ text: m }] : void 0,
          ...I,
        });
      }
    },
    491500: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(735250),
        a = t(470079),
        s = t(392711),
        l = t.n(s),
        r = t(481060),
        o = t(139387),
        c = t(835473),
        d = t(471445),
        u = t(925329),
        I = t(163400),
        m = t(327934),
        _ = t(981631),
        N = t(689938),
        E = t(778429);
      function T(e) {
        let { applicationId: n, channels: t } = e,
          a = (0, c.q)(n);
        return 0 === t.length || null == a
          ? null
          : (0, i.jsxs)("div", {
              className: E.applicationGroup,
              children: [
                (0, i.jsxs)("div", {
                  className: E.header,
                  children: [
                    (0, i.jsx)(u.Z, { game: a, size: u.Z.Sizes.XSMALL }),
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: null == a ? void 0 : a.name,
                    }),
                  ],
                }),
                t.map((e) => {
                  var n;
                  return (0, i.jsx)(
                    m.I,
                    {
                      channel: e,
                      application: a,
                      name: e.name,
                      icon:
                        null !== (n = (0, d.KS)(e)) && void 0 !== n
                          ? n
                          : void 0,
                      iconWrapperClassName: E.iconwrapper,
                      hasNextSection: !0,
                      trailing: (0, i.jsx)(r.PencilIcon, { size: "xs" }),
                    },
                    e.id,
                  );
                }),
              ],
            });
      }
      function h(e) {
        let { guild: n } = e,
          t = (0, I.F)(n.id),
          s = l().groupBy(t, (e) => {
            var n;
            return null === (n = e.linkedLobby) || void 0 === n
              ? void 0
              : n.application_id;
          }),
          c = Object.keys(s);
        return (
          a.useEffect(() => {
            0 === t.length && o.Z.setSection(_.b4C.OVERVIEW);
          }, [t]),
          (0, i.jsxs)(r.FormSection, {
            children: [
              (0, i.jsx)(r.FormText, {
                type: r.FormTextTypes.DESCRIPTION,
                children:
                  N.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING_INFO.format(
                    { helpdeskArticle: "#" },
                  ),
              }),
              (0, i.jsx)(r.FormDivider, { className: E.headerDivider }),
              c.map((e) =>
                (0, i.jsx)(T, { applicationId: e, channels: s[e] }, e),
              ),
            ],
          })
        );
      }
    },
    351644: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return H;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        r = t(658722),
        o = t.n(r),
        c = t(442837),
        d = t(780384),
        u = t(481060),
        I = t(37234),
        m = t(410030),
        _ = t(726542),
        N = t(132871),
        E = t(147890),
        T = t(835473),
        h = t(231757),
        g = t(600164),
        p = t(685929),
        f = t(163400),
        x = t(553795),
        C = t(496675),
        O = t(626135),
        S = t(768581),
        A = t(63063),
        R = t(709054),
        b = t(51144),
        Z = t(327934),
        v = t(585835),
        M = t(997787),
        L = t(981631),
        j = t(689938),
        D = t(560551),
        P = t(509399),
        B = t(790904),
        y = t(609182);
      function G(e, n) {
        return n.includes(e);
      }
      function k(e) {
        let { query: n, setQuery: t } = e,
          s = a.useCallback(
            (e) => {
              t(e);
            },
            [t],
          );
        return (0, i.jsx)("div", {
          className: D.searchContainer,
          children: (0, i.jsx)(u.SearchBar, {
            size: u.SearchBar.Sizes.MEDIUM,
            query: n,
            onChange: s,
            onClear: () => t(""),
            placeholder: j.Z.Messages.INTEGRATIONS_SEARCH,
            "aria-label": j.Z.Messages.INTEGRATIONS_SEARCH,
          }),
        });
      }
      function H(e) {
        var n, t, s, r, H, w, U, W;
        let {
            guild: F,
            channel: V,
            applicationIntegrations: K,
            builtInIntegrations: Y,
            customWebhooks: z,
            followedChannelWebhooks: q,
            isLoading: X,
            canCreateWebhook: J,
            onManageBuiltIn: Q,
            onManageCustomWebhooks: $,
            onManageFollowedChannels: ee,
            onManageApplication: en,
            onManageChannelsSyncing: et,
          } = e,
          ei = (0, m.ZP)(),
          [ea, es] = a.useState(""),
          { isFetchingConnections: el, accounts: er } = (0, c.cj)(
            [x.Z],
            () => ({
              isFetchingConnections: x.Z.isFetching(),
              accounts: x.Z.getAccounts(),
            }),
            [],
          ),
          { canManageWebhooks: eo, canManageGuild: ec } = (0, c.cj)(
            [C.Z],
            () => ({
              canManageWebhooks:
                (null != F && C.Z.can(L.Plq.MANAGE_WEBHOOKS, F)) ||
                (null != V && C.Z.can(L.Plq.MANAGE_WEBHOOKS, V)),
              canManageGuild:
                null != F && null == V && C.Z.can(L.Plq.MANAGE_GUILD, F),
            }),
            [F, V],
          ),
          ed = (0, p.Y)(V),
          eu = (0, T.q)(
            null == V
              ? void 0
              : null === (n = V.linkedLobby) || void 0 === n
                ? void 0
                : n.application_id,
          ),
          eI = (0, f.F)(null == F ? void 0 : F.id),
          {
            availableTwitchIntegrations: em,
            availableYoutubeIntegrations: e_,
            guildTwitchIntegrations: eN,
            guildYoutubeIntegrations: eE,
          } = a.useMemo(() => {
            var e, n, t, i, a, s, l, r;
            return {
              availableTwitchIntegrations:
                null !==
                  (a =
                    null === (e = Y.twitch) || void 0 === e
                      ? void 0
                      : e.length) && void 0 !== a
                  ? a
                  : 0,
              availableYoutubeIntegrations:
                null !==
                  (s =
                    null === (n = Y.youtube) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== s
                  ? s
                  : 0,
              guildTwitchIntegrations:
                null !==
                  (l =
                    null === (t = Y.twitch) || void 0 === t
                      ? void 0
                      : t.filter((e) => e.enabled).length) && void 0 !== l
                  ? l
                  : 0,
              guildYoutubeIntegrations:
                null !==
                  (r =
                    null === (i = Y.youtube) || void 0 === i
                      ? void 0
                      : i.filter((e) => e.enabled).length) && void 0 !== r
                  ? r
                  : 0,
            };
          }, [Y.twitch, Y.youtube]),
          { showTwitchCard: eT, showYoutubeCard: eh } = a.useMemo(() => {
            if (el || !ec) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = null == F ? void 0 : F.hasFeature(L.oNc.COMMUNITY),
              n = er.filter((e) => e.type === L.ABu.TWITCH).length > 0,
              t = er.filter((e) => e.type === L.ABu.YOUTUBE).length > 0;
            return {
              showTwitchCard: em > 0 || (!n && e),
              showYoutubeCard: e_ > 0 || (!t && e),
            };
          }, [el, ec, F, er, em, e_]),
          eg = Object.values(K).length,
          ep = a.useMemo(() => {
            let e = eg > 100 ? G : o();
            return Object.values(K).filter((n) => {
              var t, i, a;
              let { application: s } = n;
              return (
                (t = s),
                (i = ea),
                (a = e),
                !!(
                  "" === (i = i.trim().toLowerCase()) ||
                  t.id === i ||
                  a(i, t.name.toLowerCase()) ||
                  (null != t.bot && a(i, t.bot.username.toLowerCase()))
                ) || !1
              );
            });
          }, [K, eg, ea]),
          ef = (0, c.e7)(
            [M.Z],
            () => {
              if (null != F)
                return ep.find((e) =>
                  M.Z.canShowOverviewTooltip(F.id, e.integration.id),
                );
            },
            [ep, F],
          ),
          ex = a.useMemo(
            () =>
              void 0 !== ef
                ? [
                    ef,
                    ...ep.filter((e) => e.integration.id !== ef.integration.id),
                  ]
                : ep,
            [ep, ef],
          ),
          eC = (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
          [eO, eS] = a.useState(!1),
          eA = a.useRef(0),
          eR = () => {
            eS(!0),
              clearTimeout(eA.current),
              (eA.current = setTimeout(() => {
                eS(!1);
              }, 200));
          };
        a.useEffect(
          () => (
            window.addEventListener("scroll", eR, !0),
            () => window.removeEventListener("scroll", eR)
          ),
        );
        let eb = ex.map((e) => {
            let n =
              !eC &&
              e.integration.id === (null == ef ? void 0 : ef.integration.id);
            return (function (e, n, t, a, s) {
              var l;
              let { application: r, integration: o } = n,
                c = [];
              return (
                null != o.user
                  ? c.push({
                      icon: u.ClockIcon,
                      text: j.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                        timestamp: R.default.extractTimestamp(o.id),
                        user: b.ZP.getUserTag(o.user),
                      }),
                    })
                  : c.push({
                      icon: u.ClockIcon,
                      text: j.Z.Messages.INTEGRATION_ADDED_DATE.format({
                        timestamp: R.default.extractTimestamp(o.id),
                      }),
                    }),
                (0, i.jsx)(
                  v.Z,
                  {
                    name: r.name,
                    imageSrc:
                      null !== (l = r.getIconURL(48)) && void 0 !== l
                        ? l
                        : S.pK["0"],
                    integration: n,
                    buttonText: j.Z.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                    hasNextSection: !0,
                    onButtonClick: () => {
                      t(r.id),
                        O.default.track(L.rMx.APP_MANAGE_CTA_CLICKED, {
                          application_id: r.id,
                          guild_id: null == e ? void 0 : e.id,
                          is_admin:
                            null != e
                              ? C.Z.can(L.Plq.ADMINISTRATOR, e)
                              : void 0,
                        });
                    },
                    details: c,
                    guildId: null == e ? void 0 : e.id,
                    isScrolling: a,
                    canShowMigrationTooltip: s,
                  },
                  "integration-".concat(o.id),
                )
              );
            })(F, e, en, eO, n);
          }),
          eZ = (0, i.jsx)("div", { className: D.footerImage });
        0 === eb.length &&
          ec &&
          ((eb = (function (e, n, t) {
            let a = (0, d.wj)(e) ? B : y,
              s = (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                align: g.Z.Align.CENTER,
                className: D.emptyStateWrapper,
                children: [
                  (0, i.jsx)("img", {
                    alt: "",
                    src: a,
                    className: D.emptyStateSearchImage,
                  }),
                  (0, i.jsx)(u.Card, {
                    editable: !0,
                    className: D.emptyStateCard,
                    children: (0, i.jsx)(u.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: j.Z.Messages.INTEGRATIONS_SEARCH_NO_MATCH,
                    }),
                  }),
                ],
              }),
              l = (0, i.jsx)(u.Card, {
                editable: !0,
                className: D.emptyStateCard,
                children: (0, i.jsxs)("div", {
                  className: D.emptyStateText,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: P,
                      className: D.emptyStateImage,
                    }),
                    (0, i.jsx)(u.Heading, {
                      color: "header-secondary",
                      variant: "heading-xl/bold",
                      children:
                        j.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS,
                    }),
                    (0, i.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children:
                        j.Z.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format(
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
          })(ei, eg, null == F ? void 0 : F.id)),
          (eZ = null));
        let ev = A.Z.getArticleURL(L.BhN.INTEGRATIONS),
          eM =
            null != V
              ? j.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL
              : j.Z.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
          eL = [];
        if (eo) {
          let e, n;
          if (
            (eL.push(
              ((t = z.length),
              (s = J),
              (r = $),
              t > 0
                ? (n = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" }))
                : (e = j.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON),
              (0, i.jsx)(
                v.Z,
                {
                  name: j.Z.Messages.INTEGRATIONS_WEBHOOKS,
                  icon: u.WebhookIcon,
                  buttonText: e,
                  buttonDisabled: !s,
                  trailing: n,
                  onButtonClick: r,
                  hasNextSection: t > 0,
                  details: [
                    {
                      text: j.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                        count: t,
                      }),
                    },
                  ],
                },
                "webhooks",
              )),
            ),
            (null == V ? void 0 : V.type) !== L.d4z.GUILD_VOICE &&
              ((null == V ? void 0 : V.type) == null ||
                !L.TPd.GUILD_THREADS_ONLY.has(V.type)))
          ) {
            let e, n, t;
            eL.push(
              ((H = q.length),
              (w = ee),
              H > 0
                ? ((t = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" })),
                  (n = w))
                : ((e =
                    j.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON),
                  (n = () => open(A.Z.getArticleURL(L.BhN.CHANNEL_FOLLOWING)))),
              (0, i.jsx)(
                v.Z,
                {
                  name: j.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                  icon: u.ChannelsFollowedIcon,
                  buttonText: e,
                  onButtonClick: n,
                  trailing: t,
                  hasNextSection: H > 0,
                  details: [
                    {
                      text: j.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format(
                        { count: H },
                      ),
                    },
                  ],
                },
                "channels-followed",
              )),
            );
          }
        }
        if (null == V && eI.length > 0) {
          eL.push(
            ((U = eI.length),
            (W = et),
            (0, i.jsx)(
              v.Z,
              {
                name: j.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING,
                icon: u.RefreshIcon,
                trailing: (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" }),
                onButtonClick: W,
                hasNextSection: !0,
                details: [
                  {
                    text: j.Z.Messages.INTEGRATIONS_LINKED_NUM_CHANNELS_SYNCING.format(
                      { count: U },
                    ),
                  },
                ],
              },
              "channels-syncing",
            )),
          );
        }
        eT &&
          eL.push(
            (function (e, n, t) {
              let a, s, l, r;
              let o = _.Z.get(L.ABu.TWITCH);
              return (
                e > 0
                  ? ((r = (0, i.jsx)(u.ChevronLargeRightIcon, { size: "xs" })),
                    (s = j.Z.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
                      count: n,
                    })),
                    (l = () => t(L.ABu.TWITCH)))
                  : ((a = j.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON),
                    (s = j.Z.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY),
                    (l = () =>
                      (0, h.Z)({
                        platformType: L.ABu.TWITCH,
                        location: "Integration Settings",
                      }))),
                (0, i.jsx)(
                  v.Z,
                  {
                    name: j.Z.Messages.INTEGRATIONS_TWITCH,
                    icon: o.icon.whiteSVG,
                    iconBackgroundColor: o.color,
                    iconClassName: D.platformIcon,
                    buttonText: a,
                    onButtonClick: l,
                    trailing: r,
                    hasNextSection: e > 0,
                    details: [{ text: s }],
                  },
                  "integrations-twitch",
                )
              );
            })(em, eN, Q),
          ),
          eh &&
            eL.push(
              (function (e, n, t) {
                let a, s, l, r;
                let o = _.Z.get(L.ABu.YOUTUBE);
                return (
                  e > 0
                    ? ((r = (0, i.jsx)(u.ChevronLargeRightIcon, {
                        size: "xs",
                      })),
                      (s = j.Z.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
                        count: n,
                      })),
                      (l = () => t(L.ABu.YOUTUBE)))
                    : ((a = j.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON),
                      (s = j.Z.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY),
                      (l = () =>
                        (0, h.Z)({
                          platformType: L.ABu.YOUTUBE,
                          location: "Integration Settings",
                        }))),
                  (0, i.jsx)(
                    v.Z,
                    {
                      name: j.Z.Messages.INTEGRATIONS_YOUTUBE,
                      icon: o.icon.whiteSVG,
                      iconBackgroundColor: o.color,
                      iconClassName: D.platformIcon,
                      buttonText: a,
                      onButtonClick: l,
                      trailing: r,
                      hasNextSection: e > 0,
                      details: [{ text: s }],
                    },
                    "integrations-youtube",
                  )
                );
              })(e_, eE, Q),
            );
        let ej = null != V && ed && null != eu;
        return (0, i.jsxs)(u.FormSection, {
          className: l()(null != eZ ? D.footerPlaceholder : null),
          children: [
            (0, i.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              children: eM.format({ helpdeskArticle: ev }),
            }),
            (0, i.jsx)(u.FormDivider, { className: D.divider }),
            X || el || null == F
              ? (0, i.jsx)(u.Spinner, {
                  className: D.__invalid_spinner,
                  type: u.Spinner.Type.SPINNING_CIRCLE,
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    eL,
                    ej &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          eL.length > 0
                            ? (0, i.jsx)(u.FormDivider, {
                                className: D.divider,
                              })
                            : null,
                          (0, i.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            className: D.sectionHeader,
                            children:
                              j.Z.Messages
                                .INTEGRATIONS_LINKED_LOBBY_SECTION_TITLE,
                          }),
                          (0, i.jsx)(Z.I, {
                            channel: V,
                            application: eu,
                            showApplicationImage: !0,
                            name: eu.name,
                            hasNextSection: !0,
                            iconClassName: D.linkedLobbyIcon,
                            trailing: (0, i.jsx)(u.PencilIcon, { size: "xs" }),
                          }),
                        ],
                      }),
                    ec
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            eL.length > 0 || ej
                              ? (0, i.jsx)(u.FormDivider, {
                                  className: D.divider,
                                })
                              : null,
                            (0, i.jsx)(u.Heading, {
                              variant: "heading-md/semibold",
                              className: D.sectionHeader,
                              children:
                                j.Z.Messages.INTEGRATIONS_APPLICATION_SECTION,
                            }),
                            eg > 4
                              ? (0, i.jsx)(k, { query: ea, setQuery: es })
                              : null,
                            eb,
                          ],
                        })
                      : null,
                    eZ,
                  ],
                }),
          ],
        });
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
        r = t(668781),
        o = t(308063),
        c = t(410030),
        d = t(600164),
        u = t(63063),
        I = t(725875),
        m = t(981631),
        _ = t(689938),
        N = t(290883),
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
            refToScroller: x,
            errors: C,
            canNavigate: O,
          } = e,
          S = (0, c.ZP)(),
          [A, R] = a.useState(null),
          [b, Z] = a.useState(null);
        if (null != h) n = h;
        else {
          let e = Object.values(f);
          n = e.length > 0 ? e[0] : null;
        }
        let v = a.useCallback(async () => {
          if (O() && null !== n) {
            let e = await o.Z.create(t.id, n.id).catch((e) => {
              let { body: n, status: t } = e;
              return (
                n && n.code === m.evJ.TOO_MANY_WEBHOOKS
                  ? r.Z.show({
                      title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                      body: _.Z.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED,
                    })
                  : 429 === t
                    ? r.Z.show({
                        title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                        body: _.Z.Messages
                          .WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT,
                      })
                    : r.Z.show({
                        title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                        body: _.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                      }),
                null
              );
            });
            null != e && (Z(e.id), R(e));
          }
        }, [O, n, t]);
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
                      errors: C,
                      canNavigate: O,
                    }),
                  ],
                })
              : (function (e, n, t) {
                  let a = (0, s.wj)(e) ? E : T;
                  return (0, i.jsxs)(d.Z, {
                    direction: d.Z.Direction.VERTICAL,
                    align: d.Z.Align.CENTER,
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
        r = t(442837),
        o = t(481060),
        c = t(139387),
        d = t(503089),
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
        x = t(491500),
        C = t(351644),
        O = t(720764),
        S = t(981631),
        A = t(689938),
        R = t(194639);
      function b(e, n) {
        switch (e) {
          case S.b4C.APPLICATION:
            var t;
            return null !== (t = null == n ? void 0 : n.application.name) &&
              void 0 !== t
              ? t
              : "";
          case S.b4C.OVERVIEW:
            return A.Z.Messages.INTEGRATIONS_OVERVIEW;
          case S.b4C.CHANNEL_FOLLOWING:
            return A.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
          case S.b4C.TWITCH:
            return A.Z.Messages.INTEGRATIONS_TWITCH;
          case S.b4C.WEBHOOKS:
            return A.Z.Messages.INTEGRATIONS_WEBHOOKS;
          case S.b4C.YOUTUBE:
            return A.Z.Messages.INTEGRATIONS_YOUTUBE;
          case S.b4C.CHANNELS_SYNCING:
            return A.Z.Messages.INTEGRATIONS_LINKED_LOBBY_CHANNELS_SYNCING;
          default:
            return "";
        }
      }
      n.Z = a.memo(function (e) {
        let {
            section: n,
            sectionId: t,
            guild: s,
            channel: Z,
            integrations: v,
            editedIntegration: M,
            webhooks: L,
            editedWebhook: j,
            isFetching: D,
            refToScroller: P,
            errors: B,
            hasChanges: y,
          } = e,
          G = (0, r.e7)([N.ZP], () =>
            null != s ? N.ZP.getDefaultChannel(s.id) : null,
          ),
          k = (0, r.cj)([N.ZP], () =>
            N.ZP.getChannels(null == s ? void 0 : s.id),
          ),
          H = (0, r.cj)([E.Z], () =>
            l().keyBy(
              k.SELECTABLE.map((e) => e.channel).filter((e) =>
                E.Z.can(S.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          w = (0, r.cj)([E.Z], () =>
            l().keyBy(
              k.VOCAL.map((e) => e.channel).filter(
                (e) => e.isGuildVocal() && E.Z.can(S.Plq.MANAGE_WEBHOOKS, e),
              ),
              "id",
            ),
          ),
          U = null != Z ? Z : G,
          W = n === S.b4C.APPLICATION ? t : null,
          [F, V] = a.useState(d.$x),
          K = a.useCallback(
            () =>
              y()
                ? (T.S.dispatch(S.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: F,
                  }),
                  V(Math.min(F + d.d7, d.w6)),
                  T.S.dispatch(S.CkL.EMPHASIZE_NOTICE),
                  !1)
                : (V(d.$x), !0),
            [y, F],
          ),
          Y = a.useCallback((e) => !!K() && (c.Z.setSection(e), !0), [K]),
          {
            applicationIntegrations: z,
            applicationBotIds: q,
            builtInIntegrations: X,
            customWebhooks: J,
            followedChannelWebhooks: Q,
          } = a.useMemo(() => {
            let e = {},
              n = {},
              t = {},
              i = [],
              a = [];
            if (null != v)
              for (let i of v)
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
            for (let n of L) {
              if (n.channel_id in H || n.channel_id in w)
                null != n.application_id && n.application_id in e
                  ? e[n.application_id].webhooks.push(n)
                  : n.type === S.ylB.CHANNEL_FOLLOWER
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
          }, [v, H, w, L]);
        a.useEffect(() => {
          if (!D)
            switch (n) {
              case S.b4C.TWITCH:
                null == X[S.ABu.TWITCH] && c.Z.setSection(S.b4C.OVERVIEW);
                break;
              case S.b4C.YOUTUBE:
                null == X[S.ABu.YOUTUBE] && c.Z.setSection(S.b4C.OVERVIEW);
                break;
              case S.b4C.APPLICATION:
                (null == W || !(W in q || W in z)) &&
                  c.Z.setSection(S.b4C.OVERVIEW);
            }
        }, [z, q, X, W, n, D]),
          a.useEffect(() => {
            if ((null == s ? void 0 : s.id) != null)
              _.Z.getEntitlementsForGuildFetchState(s.id) === _.M.NOT_FETCHED &&
                m.i1(s.id);
          }, [null == s ? void 0 : s.id]);
        let $ = null;
        switch (n) {
          case S.b4C.TWITCH:
            null != X[S.ABu.TWITCH] &&
              ($ = (0, i.jsx)(p.Z, {
                guild: s,
                integrations: X[S.ABu.TWITCH],
                editedIntegration: M,
                labelText: A.Z.Messages.INTEGRATIONS_TWITCH,
                platformType: S.ABu.TWITCH,
                descriptionText: A.Z.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
                helpText: A.Z.Messages.INTEGRATIONS_TWITCH_HELP.format({
                  connectAction: () =>
                    (0, u.Z)({
                      platformType: S.ABu.TWITCH,
                      location: "Integration Settings",
                    }),
                  helpdeskArticle: h.Z.getArticleURL(S.BhN.TWITCH_INTEGRATION),
                }),
                canNavigate: K,
              }));
            break;
          case S.b4C.YOUTUBE:
            null != X[S.ABu.YOUTUBE] &&
              ($ = (0, i.jsx)(p.Z, {
                guild: s,
                integrations: X[S.ABu.YOUTUBE],
                editedIntegration: M,
                labelText: A.Z.Messages.INTEGRATIONS_YOUTUBE,
                platformType: S.ABu.YOUTUBE,
                descriptionText: A.Z.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
                helpText: A.Z.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
                  connectAction: () =>
                    (0, u.Z)({ platformType: S.ABu.YOUTUBE }),
                  helpdeskArticle: h.Z.getArticleURL(S.BhN.YOUTUBE_INTEGRATION),
                }),
                canNavigate: K,
              }));
            break;
          case S.b4C.APPLICATION:
            var ee;
            let en =
              null != W
                ? null !== (ee = z[q[W]]) && void 0 !== ee
                  ? ee
                  : z[W]
                : null;
            null != en &&
              ($ = (0, i.jsx)(g.Z, {
                guild: s,
                applicationIntegration: en,
                editedWebhook: j,
                selectableWebhookChannels: H,
                errors: B,
                canNavigate: K,
              }));
            break;
          case S.b4C.CHANNEL_FOLLOWING:
            $ = (0, i.jsx)(f.Z, {
              followedChannelWebhooks: Q,
              editedWebhook: j,
              selectableWebhookChannels: H,
              canNavigate: K,
              errors: B,
            });
            break;
          case S.b4C.WEBHOOKS:
            $ = (0, i.jsx)(O.Z, {
              guild: s,
              channel: Z,
              customWebhooks: J,
              editedWebhook: j,
              selectableWebhookChannels: { ...H, ...w },
              canNavigate: K,
              refToScroller: P,
              errors: B,
            });
            break;
          case S.b4C.CHANNELS_SYNCING:
            $ = (0, i.jsx)(x.Z, { guild: s });
            break;
          default:
            $ = (0, i.jsx)(C.Z, {
              guild: s,
              channel: Z,
              applicationIntegrations: z,
              builtInIntegrations: X,
              customWebhooks: J,
              followedChannelWebhooks: Q,
              isLoading: D || null == s,
              canCreateWebhook: null != U,
              onManageCustomWebhooks: () => {
                c.Z.setSection(S.b4C.WEBHOOKS);
              },
              onManageFollowedChannels: () => {
                c.Z.setSection(S.b4C.CHANNEL_FOLLOWING);
              },
              onManageApplication: (e) => {
                c.Z.setSection(S.b4C.APPLICATION, e);
              },
              onManageBuiltIn: (e) => {
                switch (e) {
                  case S.ABu.TWITCH:
                    c.Z.setSection(S.b4C.TWITCH);
                    break;
                  case S.ABu.YOUTUBE:
                    c.Z.setSection(S.b4C.YOUTUBE);
                }
              },
              onManageChannelsSyncing: () => {
                c.Z.setSection(S.b4C.CHANNELS_SYNCING);
              },
            });
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(I.Z, {
              align: I.Z.Align.CENTER,
              className: R.breadcrumbs,
              children:
                n === S.b4C.OVERVIEW
                  ? (0, i.jsx)(o.FormTitle, {
                      tag: "h1",
                      children: b(S.b4C.OVERVIEW),
                    })
                  : (0, i.jsx)(o.Breadcrumbs, {
                      activeId: n.toString(),
                      breadcrumbs: [S.b4C.OVERVIEW, n].map((e) => ({
                        id: e.toString(),
                        label: b(e, z[W]),
                      })),
                      onBreadcrumbClick: (e) => {
                        if (n !== parseInt(e.id)) Y(parseInt(e.id));
                      },
                      renderCustomBreadcrumb: (e, n) =>
                        (0, i.jsx)(o.FormTitle, {
                          tag: "h1",
                          className: n
                            ? R.breadcrumbActive
                            : R.breadcrumbInactive,
                          children: e.label,
                        }),
                    }),
            }),
            $,
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
        r = t(481060),
        o = t(749210),
        c = t(412899),
        d = t(995648),
        u = t(385499),
        I = t(600164),
        m = t(422559),
        _ = t(598077),
        N = t(271383),
        E = t(430824),
        T = t(823379),
        h = t(700785),
        g = t(689938),
        p = t(452199);
      function f(e) {
        var n;
        let { guild: t, applicationIntegration: f } = e,
          x = (0, l.e7)([E.Z], () => E.Z.getRoles(t.id)),
          { application: C } = f,
          O = null != C.bot ? new _.Z(C.bot) : null,
          S = (0, l.e7)(
            [N.ZP],
            () => (null != O ? N.ZP.getMember(t.id, O.id) : null),
            [O, t],
          ),
          A = null == O ? void 0 : O.id;
        a.useEffect(() => {
          if (null != A) o.Z.requestMembersById(t.id, A);
        }, [t.id, A]);
        let R = a.useMemo(() => {
          var e, n, i;
          let a = x[t.getEveryoneRoleId()],
            l =
              null !==
                (n =
                  null == S
                    ? void 0
                    : null === (e = S.roles) || void 0 === e
                      ? void 0
                      : e.map((e) => x[e]).filter(T.lm)) && void 0 !== n
                ? n
                : [],
            r =
              null !== (i = null == a ? void 0 : a.permissions) && void 0 !== i
                ? i
                : h.Hn;
          for (let e of l) r = s.IH(r, e.permissions);
          return r;
        }, [t, x, S]);
        return null == O
          ? null
          : (0, i.jsx)(r.Card, {
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
                        src: O.getAvatarURL(t.id, 32),
                        className: p.iconWrapper,
                      }),
                      (0, i.jsx)(r.Text, {
                        color: "header-primary",
                        variant: "text-sm/normal",
                        children:
                          g.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format(
                            { user: O },
                          ),
                      }),
                      (0, i.jsx)(u.Z, {
                        className: p.tag,
                        verified: O.isVerifiedBot(),
                      }),
                    ],
                  }),
                  (function (e, n, t, a) {
                    let l = [],
                      o = [];
                    for (let e of m.VY) s.e$(a, e) ? l.push(e) : o.push(e);
                    return (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(r.FormDivider, { className: p.divider }),
                        t.length > 0
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(r.FormTitle, {
                                  className: p.permissionHeader,
                                  children: g.Z.Messages.ROLES_LIST.format({
                                    numRoles: t.length,
                                  }),
                                }),
                                (0, i.jsx)(c.ZP, {
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
                        l.length > 0 || o.length > 0
                          ? (0, i.jsx)(d.Z, {
                              className: p.permissionList,
                              grantedPermissions: l,
                              grantedPermissionsHeader:
                                g.Z.Messages
                                  .INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
                              disabledPermissions: o,
                              disabledPermissionsHeader:
                                g.Z.Messages
                                  .INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS,
                            })
                          : null,
                      ],
                    });
                  })(
                    O,
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
        r = t(913527),
        o = t.n(r),
        c = t(442837),
        d = t(481060),
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
        x = t(709054),
        C = t(486199),
        O = t(981631),
        S = t(689938),
        A = t(101494),
        R = t(113207);
      function b(e) {
        let n,
          {
            guild: t,
            integration: s,
            editedIntegration: r,
            isExpanded: b,
            onToggleExpand: Z,
            onDisable: v,
            onEnable: M,
          } = e,
          L = (0, c.e7)([T.Z], () => T.Z.getRoles(t.id)),
          [j, D] = a.useState(!1),
          P = (0, c.e7)([h.Z], () => h.Z.hidePersonalInformation),
          B = a.useCallback(() => {
            D(!0), M(s);
          }, [s, M]),
          y = a.useCallback(() => {
            !s.syncing &&
              (0, d.openModal)((e) => {
                let n =
                  0 === s.expire_behavior
                    ? S.Z.Messages.REMOVE_SYNCED_ROLE
                    : S.Z.Messages.KICK_FROM_SERVER;
                return (0, i.jsx)(d.ConfirmModal, {
                  ...e,
                  header: S.Z.Messages.DISABLE_INTEGRATION_TITLE,
                  confirmText: n,
                  cancelText: S.Z.Messages.CANCEL,
                  onConfirm: () => v(s),
                  children: (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    children:
                      s.type === O.ABu.YOUTUBE
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
              (N.Z.setSection(O.pNK.ROLES), N.Z.selectRole(s.role_id));
          }, [s.role_id]),
          {
            serviceName: H,
            channelURL: w,
            expireBehaviorLabel: U,
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
              case O.ABu.YOUTUBE:
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
              case O.ABu.TWITCH:
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
                ? (0, i.jsx)(d.Anchor, { onClick: k, children: t.name })
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
                      datetime: o()(s.synced_at).calendar(),
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
            (null == r ? void 0 : r.id) === s.id &&
              (null == r ? void 0 : r.enabled) === !0 &&
              D(!1);
          }, [r, s.id]),
          s.enabled && null != s.user)
        )
          n = [
            {
              icon: d.ClockIcon,
              text: P
                ? S.Z.Messages.INTEGRATION_ADDED_DATE.format({
                    timestamp: x.default.extractTimestamp(s.id),
                  })
                : S.Z.Messages.INTEGRATION_ADDED_USER_DATE.format({
                    user: null != s.user ? new E.Z(s.user).tag : null,
                    timestamp: x.default.extractTimestamp(s.id),
                  }),
            },
          ];
        else {
          let e = new URL(w);
          n = [
            {
              text: S.Z.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                serviceName: H,
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
              (0, i.jsx)(C.Z, {
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
                    children: (0, i.jsx)(d.Button, {
                      size: d.Button.Sizes.SMALL,
                      color: d.Button.Colors.PRIMARY,
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
            null != r &&
            (q = (0, i.jsxs)(m.Z, {
              className: A.body,
              direction: m.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(d.FormDivider, { className: A.topDivider }),
                (function (e) {
                  let {
                    integration: n,
                    labelText: t,
                    subscribersText: a,
                    descriptionText: s,
                    roleLink: l,
                    onSync: r,
                  } = e;
                  return (0, i.jsxs)(m.Z, {
                    children: [
                      (0, i.jsxs)(m.Z.Child, {
                        basis: "50%",
                        children: [
                          (0, i.jsx)(d.FormTitle, {
                            className: R.marginBottom8,
                            children: S.Z.Messages.FORM_LABEL_SYNCED_ROLE,
                          }),
                          (0, i.jsx)(d.Text, {
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
                          (0, i.jsx)(d.FormTitle, {
                            className: R.marginBottom8,
                            children: t,
                          }),
                          (0, i.jsxs)(m.Z, {
                            justify: m.Z.Justify.BETWEEN,
                            children: [
                              (0, i.jsxs)(m.Z, {
                                direction: m.Z.Direction.VERTICAL,
                                children: [
                                  (0, i.jsx)(d.Text, {
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: a,
                                  }),
                                  (0, i.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    children: s,
                                  }),
                                ],
                              }),
                              (0, i.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                look: d.Button.Looks.FILLED,
                                color: d.Button.Colors.PRIMARY,
                                disabled: n.syncing || n.revoked,
                                onClick: r,
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
                  integration: r,
                  labelText: W,
                  subscribersText: F,
                  descriptionText: K,
                  roleLink: V,
                  onSync: G,
                }),
                (0, i.jsx)(d.FormDivider, { className: A.midDivider }),
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
                          (0, i.jsx)(d.FormTitle, {
                            className: R.marginBottom8,
                            children: t,
                          }),
                          (0, i.jsx)(d.SingleSelect, {
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
                          (0, i.jsx)(d.FormTitle, {
                            className: R.marginBottom8,
                            children:
                              S.Z.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                          }),
                          (0, i.jsx)(d.SingleSelect, {
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
                  integration: r,
                  labelText: U,
                  onBehaviorChange: function (e) {
                    u.Z.updateIntegration({ expireBehavior: e });
                  },
                  onGracePeriodChange: function (e) {
                    u.Z.updateIntegration({ expireGracePeriod: e });
                  },
                }),
                s.type === O.ABu.TWITCH
                  ? (function (e) {
                      let { integration: n, emojis: t, onToggle: a } = e;
                      return (0, i.jsxs)(m.Z, {
                        direction: m.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.INVERTED,
                            className: l()(R.marginTop20, R.marginBottom8),
                            value: n.enable_emoticons,
                            disabled: n.syncing,
                            onChange: (e) => {
                              let { currentTarget: n } = e;
                              return a(n.checked);
                            },
                            children: (0, i.jsx)(d.FormText, {
                              children: S.Z.Messages.ENABLE_TWITCH_EMOJI_SYNC,
                            }),
                          }),
                          (0, i.jsx)(m.Z, {
                            wrap: m.Z.Wrap.WRAP,
                            className: A.__invalid_twitchEmojis,
                            children: t.map((e, n) =>
                              (0, i.jsx)(
                                d.Tooltip,
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
                      integration: r,
                      emojis: Y,
                      onToggle: function (e) {
                        u.Z.updateIntegration({ enableEmoticons: e });
                      },
                    })
                  : null,
                (0, i.jsx)(d.FormDivider, { className: A.bottomDivider }),
                (0, i.jsx)(m.Z, {
                  children: (0, i.jsx)(d.Button, {
                    className: A.disableButton,
                    size: d.Button.Sizes.SMALL,
                    color: d.Button.Colors.RED,
                    look: d.Button.Looks.LINK,
                    onClick: y,
                    children: S.Z.Messages.INTEGRATIONS_DISABLE,
                  }),
                }),
              ],
            })),
          (0, i.jsx)(d.Card, {
            editable: !0,
            className: A.card,
            children: (0, i.jsxs)(m.Z, {
              direction: m.Z.Direction.VERTICAL,
              children: [
                s.enabled
                  ? (0, i.jsx)(d.Clickable, {
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
        r = t(139387),
        o = t(308063),
        c = t(600164),
        d = t(259580),
        u = t(768581),
        I = t(486199),
        m = t(981631),
        _ = t(689938),
        N = t(176662);
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
                  o.Z.delete(n.guild_id, n.id).catch(() => {
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
          x = [];
        null != n.source_channel &&
          null != n.source_guild &&
          (x.push({ icon: s.AnnouncementsIcon, text: n.source_channel.name }),
          x.push({
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
        let C = null;
        return (
          T &&
            null != t &&
            (C = (0, i.jsxs)("div", {
              className: N.body,
              children: [
                (0, i.jsx)(s.FormDivider, { className: N.topDivider }),
                (0, i.jsx)(c.Z, {
                  children: (0, i.jsxs)(c.Z, {
                    direction: c.Z.Direction.VERTICAL,
                    children: [
                      (0, i.jsxs)(c.Z, {
                        children: [
                          (0, i.jsx)(c.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(s.FormItem, {
                              title:
                                _.Z.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                              children: (0, i.jsx)(s.TextInput, {
                                value: t.name,
                                onChange: (e) => {
                                  r.Z.updateWebhook({ name: e });
                                },
                                maxLength: 80,
                                error: h.name,
                              }),
                            }),
                          }),
                          (0, i.jsx)(c.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(s.FormItem, {
                              title:
                                _.Z.Messages
                                  .INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                              children: (0, i.jsx)(s.SingleSelect, {
                                value: t.channel_id,
                                options: E,
                                onChange: (e) => {
                                  r.Z.updateWebhook({ channelId: e });
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(s.FormDivider, { className: N.bottomDivider }),
                      (0, i.jsx)(c.Z, {
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
            children: (0, i.jsxs)(c.Z, {
              direction: c.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(s.Clickable, {
                  className: N.header,
                  "aria-expanded": T,
                  onClick: g,
                  children: (0, i.jsxs)(c.Z, {
                    align: c.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(I.Z, {
                        name: n.name,
                        imageSrc: p,
                        detailsClassName: N.__invalid_description,
                        details: x,
                      }),
                      (0, i.jsx)(d.Z, {
                        className: N.expandIcon,
                        expanded: T,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                }),
                C,
              ],
            }),
          })
        );
      }
    },
    585835: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250),
        a = t(470079),
        s = t(120356),
        l = t.n(s),
        r = t(243814),
        o = t(442837),
        c = t(481060),
        d = t(367907),
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
        f = t(556208);
      function x(e) {
        var n, t, s, x, C, O, S;
        let {
            name: A,
            icon: R,
            imageSrc: b,
            iconBackgroundColor: Z,
            iconClassName: v,
            iconWrapperClassName: M,
            details: L,
            integration: j,
            buttonText: D,
            buttonDisabled: P,
            hasNextSection: B,
            onButtonClick: y,
            guildId: G,
            isScrolling: k,
            canShowMigrationTooltip: H,
            trailing: w,
          } = e,
          [U, W] = a.useState(!1),
          [F, V] = a.useState(!1);
        let K =
            ((x = D),
            (C = P),
            (O = B),
            (S = y),
            null == x || null == S
              ? null
              : O
                ? (0, i.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
                    children: [
                      (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: x,
                      }),
                      O
                        ? (0, i.jsx)(c.ChevronSmallRightIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 10,
                            height: 10,
                            className: f.caret,
                          })
                        : null,
                    ],
                  })
                : (0, i.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    look: O ? c.Button.Looks.LINK : c.Button.Looks.FILLED,
                    color: O ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                    disabled: C,
                    onClick: S,
                    children: x,
                  })),
          Y = H && !k && !F && void 0 !== G && null != j;
        a.useEffect(() => {
          Y &&
            E.default.track(g.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
              ...(0, d.hH)(G),
              application_id: null == j ? void 0 : j.application.id,
              location: "overview",
            });
        }, [G, null == j ? void 0 : j.application.id, Y]);
        let z = Y
            ? (0, i.jsx)(c.Popout, {
                renderPopout: () =>
                  (0, i.jsx)(c.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        V(!0),
                        h.Z.dismissOverviewTooltip(G, j.integration);
                    },
                    children: (0, i.jsx)(_.ZP, {
                      content:
                        p.Z.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                      onClick: () => {},
                    }),
                  }),
                position: "bottom",
                align: "center",
                animation: c.Popout.Animation.TRANSLATE,
                shouldShow: !0,
                children: () => K,
              })
            : K,
          q = (0, o.Wu)([m.Z], () => {
            var e;
            return null != j &&
              null != G &&
              null !==
                (e = m.Z.getApplicationEntitlementsForGuild(
                  j.application.id,
                  G,
                )) &&
              void 0 !== e
              ? e
              : [];
          }),
          X = (0, u.LD)(G, !0),
          J =
            (null == j ? void 0 : j.application) != null &&
            Object.keys(
              null !==
                (s =
                  null === (t = X.result) || void 0 === t
                    ? void 0
                    : null === (n = t.sections[j.application.id]) ||
                        void 0 === n
                      ? void 0
                      : n.commands) && void 0 !== s
                ? s
                : {},
            ).length > 0,
          Q = (0, i.jsxs)(I.Z, {
            children: [
              (0, i.jsx)(T.Z, {
                name: A,
                icon: R,
                imageSrc: b,
                iconBackgroundColor: Z,
                iconClassName: v,
                iconWrapperClassName: M,
                details: L,
                isPremium: q.length > 0,
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
                        { application: l, integration: o, webhooks: d } = e;
                      return (
                        null != l.bot &&
                          s.push(
                            (0, i.jsx)(
                              c.TooltipContainer,
                              {
                                forceOpen: n,
                                text: new N.Z(l.bot).isVerifiedBot()
                                  ? p.Z.Messages
                                      .INTEGRATIONS_APPLICATION_VERIFIED_BOT
                                  : p.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
                                className: f.feature,
                                children: (0, i.jsx)(c.RobotIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: f.featureIcon,
                                }),
                              },
                              "bot",
                            ),
                          ),
                        d.length > 0 &&
                          s.push(
                            (0, i.jsx)(
                              c.TooltipContainer,
                              {
                                forceOpen: n,
                                text: p.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format(
                                  { count: d.length },
                                ),
                                className: f.feature,
                                children: (0, i.jsx)(c.WebhookIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: f.featureIcon,
                                }),
                              },
                              "webhooks",
                            ),
                          ),
                        (null == o
                          ? void 0
                          : null === (a = o.scopes) || void 0 === a
                            ? void 0
                            : a.includes(r.x.APPLICATIONS_COMMANDS)) === !0 &&
                          t &&
                          s.push(
                            (0, i.jsx)(
                              "div",
                              {
                                className: f.feature,
                                children: (0, i.jsx)(c.SlashBoxIcon, {
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
                    })(j, U, J),
                    z,
                    w,
                  ],
                }),
              }),
            ],
          });
        return B
          ? (0, i.jsx)(c.Clickable, {
              onClick: () => {
                H &&
                  null != G &&
                  null != j &&
                  h.Z.dismissOverviewTooltip(G, j.integration),
                  null == y || y();
              },
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              children: (0, i.jsx)(c.Card, {
                editable: !0,
                className: l()(f.card, f.clickable),
                children: Q,
              }),
            })
          : (0, i.jsx)(c.Card, {
              editable: !0,
              className: f.card,
              children: Q,
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
        r = t(544891),
        o = t(846519),
        c = t(481060),
        d = t(668781),
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
        x = t(981631),
        C = t(689938),
        O = t(230685);
      let S = (e) => {
        if (null == e) return null;
        let n = new N.Z(e);
        return p.ZP.getUserTag(n);
      };
      function A(e, n) {
        return null != n && /^data:/.test(n)
          ? n
          : (0, T.ov)({ id: e.id, avatar: n, discriminator: x.fo$ });
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
          [M] = a.useState(new o.V7());
        a.useEffect(() => () => M.stop(), [M]);
        let L = a.useMemo(() => A(t, t.avatar), [t]),
          j = a.useCallback(() => {
            let e = ""
              .concat((0, r.K0)(!1))
              .concat(x.ANM.WEBHOOK_INTEGRATION(t.id, t.token));
            (0, h.JG)(e);
          }, [t]),
          D = a.useCallback(() => {
            (0, c.openModal)((e) =>
              (0, i.jsx)(c.ConfirmModal, {
                ...e,
                header: C.Z.Messages.WEBHOOK_DELETE_TITLE.format({
                  name: t.name,
                }),
                confirmText: C.Z.Messages.WEBHOOK_DELETE,
                cancelText: C.Z.Messages.WEBHOOK_CANCEL,
                onConfirm: () => {
                  I.Z.delete(t.guild_id, t.id).catch((e) => {
                    let { status: n } = e;
                    429 === n
                      ? d.Z.show({
                          title: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                          body: C.Z.Messages
                            .WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT,
                        })
                      : d.Z.show({
                          title: C.Z.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                          body: C.Z.Messages
                            .WEBHOOK_ERROR_INTERNAL_SERVER_ERROR,
                        });
                  });
                },
                children: (0, i.jsx)(c.Text, {
                  variant: "text-md/normal",
                  children: C.Z.Messages.WEBHOOK_DELETE_BODY.format({
                    name: t.name,
                  }),
                }),
              }),
            );
          }, [t.guild_id, t.id, t.name]),
          P = [];
        null != t.user
          ? P.push({
              icon: c.ClockIcon,
              text: C.Z.Messages.INTEGRATION_CREATED_USER_DATE.format({
                user: S(t.user),
                timestamp: g.default.extractTimestamp(t.id),
              }),
            })
          : P.push({
              icon: c.ClockIcon,
              text: C.Z.Messages.INTEGRATION_CREATED_DATE.format({
                timestamp: g.default.extractTimestamp(t.id),
              }),
            });
        let B = null;
        return (
          T &&
            null != s &&
            (B = (0, i.jsxs)("div", {
              className: O.body,
              children: [
                (0, i.jsx)(c.FormDivider, { className: O.topDivider }),
                (0, i.jsxs)(m.Z, {
                  children: [
                    (0, i.jsx)(m.Z.Child, {
                      shrink: 1,
                      grow: 0,
                      children: (0, i.jsxs)(m.Z, {
                        className: O.avatarWrapper,
                        direction: m.Z.Direction.VERTICAL,
                        children: [
                          (0, i.jsx)(_.Z, {
                            image: s.avatar,
                            onChange: (e) => {
                              u.Z.updateWebhook({ avatar: e });
                            },
                            makeURL: (e) => A(t, e),
                            imageClassName: O.avatarUploaderInner,
                            showIcon: !0,
                          }),
                          null != R.avatar && "" !== R.avatar
                            ? (0, i.jsx)(c.Text, {
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
                              children: (0, i.jsx)(c.FormItem, {
                                title: C.Z.Messages.WEBHOOK_FORM_NAME,
                                children: (0, i.jsx)(c.TextInput, {
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
                              children: (0, i.jsx)(c.FormItem, {
                                title: C.Z.Messages.CHANNEL,
                                children: (0, i.jsx)(c.SearchableSelect, {
                                  value: s.channel_id,
                                  options: N,
                                  onChange: (e) => {
                                    u.Z.updateWebhook({ channelId: e });
                                  },
                                  placeholder: C.Z.Messages.CHANNEL_SELECT,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(c.FormDivider, {
                          className: O.bottomDivider,
                        }),
                        (0, i.jsxs)(m.Z, {
                          children: [
                            (0, i.jsx)(c.Tooltip, {
                              text: C.Z.Messages
                                .INTEGRATIONS_WEBHOOK_COPIED_URL,
                              forceOpen: Z,
                              color: c.TooltipColors.GREEN,
                              disableTooltipPointerEvents: !0,
                              children: (e) => {
                                let {
                                  onClick: n,
                                  onMouseEnter: a,
                                  onMouseLeave: s,
                                  onBlur: l,
                                  onFocus: r,
                                  ...o
                                } = e;
                                return (0, i.jsx)(c.Button, {
                                  ...o,
                                  "aria-label": "",
                                  onClick: () => {
                                    null == n || n(),
                                      v(!0),
                                      c.AccessibilityAnnouncer.announce(
                                        C.Z.Messages
                                          .INTEGRATIONS_WEBHOOK_COPIED_URL,
                                      ),
                                      M.start(1e3, () => v(!1)),
                                      j();
                                  },
                                  size: c.Button.Sizes.SMALL,
                                  color: c.Button.Colors.PRIMARY,
                                  look: c.Button.Looks.FILLED,
                                  className: O.copyButton,
                                  disabled: null == t.token || "" === t.token,
                                  children:
                                    C.Z.Messages.INTEGRATIONS_WEBHOOK_COPY_URL,
                                });
                              },
                            }),
                            (0, i.jsx)(c.Button, {
                              onClick: D,
                              size: c.Button.Sizes.SMALL,
                              color: c.Button.Colors.RED,
                              look: c.Button.Looks.LINK,
                              children:
                                C.Z.Messages.INTEGRATIONS_WEBHOOK_DELETE,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
          (0, i.jsx)(c.Card, {
            editable: !0,
            id: n,
            className: l()(O.card, p ? O.pulse : null),
            children: (0, i.jsxs)(m.Z, {
              direction: m.Z.Direction.VERTICAL,
              children: [
                (0, i.jsx)(c.Clickable, {
                  className: O.header,
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
                        className: O.expandIcon,
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
        r = t(933557),
        o = t(699516),
        c = t(594174),
        d = t(491302),
        u = t(936726),
        I = t(981631),
        m = t(689938),
        _ = t(672994);
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
                label: (0, r.F6)(e, c.default, o.Z, !0),
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
                                  children: (0, r.F6)(n, c.default, o.Z, !0),
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
                          d.Z,
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
    685929: function (e, n, t) {
      t.d(n, {
        C: function () {
          return l;
        },
        Y: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(496675),
        s = t(981631);
      function l(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
        return (
          null != e &&
          null != e.linkedLobby &&
          n.can(s.Plq.MANAGE_CHANNELS, e) &&
          n.can(s.Plq.VIEW_CHANNEL, e) &&
          n.can(s.Plq.SEND_MESSAGES, e)
        );
      }
      function r(e) {
        return (0, i.e7)([a.Z], () => l(e, a.Z));
      }
    },
    163400: function (e, n, t) {
      t.d(n, {
        F: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(984933),
        s = t(496675),
        l = t(685929);
      function r(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : a.ZP,
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : s.Z;
        return null == e
          ? []
          : n
              .getChannels(e)
              [a.sH].filter((e) => (0, l.C)(e.channel, t))
              .map((e) => e.channel);
      }
      function o(e) {
        return (0, i.Wu)([s.Z, a.ZP], () => r(e, a.ZP, s.Z));
      }
    },
    296023: function (e, n, t) {
      t.d(n, {
        w: function () {
          return r;
        },
      });
      var i = t(470079),
        a = t(442837),
        s = t(594174),
        l = t(689938);
      function r(e) {
        var n;
        let t =
            null === (n = e.linkedLobby) || void 0 === n ? void 0 : n.linked_at,
          r = (0, a.e7)([s.default], () => {
            var n;
            return s.default.getUser(
              null === (n = e.linkedLobby) || void 0 === n
                ? void 0
                : n.linked_by,
            );
          });
        return i.useMemo(() => {
          if (null == t) return;
          let e = new Date(t);
          return null != r
            ? l.Z.Messages.CHANNEL_SYNCING_ADDED_BY_NO_LINK.format({
                username: r.username,
                linkedAtDate: e,
              })
            : l.Z.Messages.CHANNEL_SYNCING_ADDED_BY_UNKNOWN_USER.format({
                linkedAtDate: e,
              });
        }, [t, r]);
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
        r = t.n(l),
        o = t(481060),
        c = t(689938),
        d = t(228020);
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
          l = (0, o.useRadioGroup)({
            orientation: "horizontal",
            isDisabled: a,
            labelledBy: i,
          });
        return (0, s.jsx)("div", {
          className: r()(d.group, { [d.disabled]: a }),
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
            (i = c.Z.Messages.PERMISSION_OVERRIDE_DENY),
              (n = o.XSmallIcon),
              (t = d.deny);
            break;
          case "ALLOW":
            (i = c.Z.Messages.PERMISSION_OVERRIDE_ALLOW),
              (n = o.CheckmarkLargeIcon),
              (t = d.allow);
            break;
          default:
            (i = c.Z.Messages.PERMISSION_OVERRIDE_PASSTHROUGH),
              (n = o.SlashIcon),
              (t = d.passthrough);
        }
        let I = (0, o.useRadioItem)({ isSelected: u, label: i });
        return (0, s.jsx)(o.Clickable, {
          className: r()(d.item, t, { [d.selected]: u }),
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
        r = t(63063),
        o = t(453628),
        c = t(689938),
        d = t(113207);
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
            className: T = d.marginBottom20,
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
                    className: d.marginReset,
                    tag: a.FormTitleTags.H3,
                    disabled: N,
                    children: u,
                  }),
                }),
                (0, i.jsx)(s.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(o.Z, {
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
                className: d.marginTop4,
                children: (0, i.jsx)(a.FormText, {
                  type: a.FormTextTypes.DESCRIPTION,
                  children: I,
                }),
              }),
            null != m &&
              (0, i.jsx)(s.Z.Child, {
                className: d.marginTop4,
                children: (0, i.jsx)(a.FormText, {
                  disabled: N,
                  type: a.FormTextTypes.DESCRIPTION,
                  children: (0, i.jsx)(a.Anchor, {
                    href: r.Z.getArticleURL(m),
                    children: c.Z.Messages.LEARN_MORE,
                  }),
                }),
              }),
            !E &&
              (0, i.jsx)(s.Z.Child, {
                className: d.marginTop20,
                children: (0, i.jsx)(a.FormDivider, {}),
              }),
          ],
        });
      }
      o.Z.Types, (u.Types = o.Z.Types);
    },
    531087: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        s = t.n(a),
        l = t(325767),
        r = t(373963);
      function o(e) {
        let {
          width: n = 16,
          height: t = 16,
          color: a = "currentColor",
          foreground: o,
          className: c,
          ...d
        } = e;
        return (0, i.jsx)("svg", {
          className: s()(r.updateAvailable, c),
          ...(0, l.Z)(d),
          width: n,
          height: t,
          viewBox: "0 0 24 24",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, i.jsx)("path", {
                fill: a,
                className: o,
                fillRule: "nonzero",
                d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z",
              }),
              (0, i.jsx)("polygon", { points: "24 0 0 0 0 24 24 24" }),
            ],
          }),
        });
      }
    },
    594045: function (e, n, t) {
      e.exports = {
        container: "container_a06168",
        list: "list_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
        permissionHeader: "permissionHeader_a06168",
      };
    },
    60179: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    332014: function (e, n, t) {
      e.exports = { title: "title_cf92b5", icon: "icon_cf92b5" };
    },
    147768: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    11377: function (e, n, t) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, n, t) {
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
    121173: function (e, n, t) {
      e.exports = {
        layout: "layout_ff90b2",
        sidebar: "sidebar_ff90b2",
        content: "content_ff90b2",
        sidebarScrollable: "sidebarScrollable_ff90b2",
        scroller: "scroller_ff90b2",
      };
    },
    217329: function (e, n, t) {
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
    547193: function (e, n, t) {
      e.exports = {
        headerContainer: "headerContainer_ae0ed5",
        mainContainer: "mainContainer_ae0ed5",
        pauseContainer: "pauseContainer_ae0ed5",
        pauseText: "pauseText_ae0ed5",
        toggle: "toggle_ae0ed5",
      };
    },
    83956: function (e, n, t) {
      e.exports = {
        icon: "icon_b119de",
        identifier: "identifier_b119de",
        item: "item_b119de",
        statusContainer: "statusContainer_b119de",
        statusLine: "statusLine_b119de",
        statusIcon: "statusIcon_b119de",
      };
    },
    701468: function (e, n, t) {
      e.exports = { emptyCard: "emptyCard_e74f7d" };
    },
    142208: function (e, n, t) {
      e.exports = {
        channelIcon: "channelIcon_a93d5d",
        lockIcon: "lockIcon_a93d5d",
        identifier: "identifier_a93d5d",
        image: "image_a93d5d " + t("403600").desaturateUserColors,
        shield: "shield_a93d5d " + t("403600").desaturateUserColors,
        roleName: "roleName_a93d5d",
        tag: "tag_a93d5d",
      };
    },
    408795: function (e, n, t) {
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
    457237: function (e, n, t) {
      e.exports = {
        addButton: "addButton_f575ef",
        listContainer: "listContainer_f575ef",
        tooltip: "tooltip_f575ef",
        requiredPermissionsBanner: "requiredPermissionsBanner_f575ef",
        message: "message_f575ef",
        icon: "icon_f575ef",
      };
    },
    471951: function (e, n, t) {
      e.exports = {
        group: "group_b05c08",
        disabled: "disabled_b05c08",
        item: "item_b05c08",
        allow: "allow_b05c08",
        selected: "selected_b05c08",
        deny: "deny_b05c08",
      };
    },
    483337: function (e, n, t) {
      e.exports = {
        card: "card_dedfd1",
        inModal: "inModal_dedfd1",
        cardHeader: "cardHeader_dedfd1",
        title: "title_dedfd1",
      };
    },
    121080: function (e, n, t) {
      e.exports = { applicationPermissions: "applicationPermissions_c50086" };
    },
    690873: function (e, n, t) {
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
    315822: function (e, n, t) {
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
    871820: function (e, n, t) {
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
    600923: function (e, n, t) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
    365515: function (e, n, t) {
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
    926152: function (e, n, t) {
      e.exports = {
        header: "header_bfc5ea",
        icon: "icon_bfc5ea",
        name: "name_bfc5ea",
        title: "title_bfc5ea",
      };
    },
    695768: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_d32069",
        headerDescription: "headerDescription_d32069",
        section: "section_d32069",
        emptyCard: "emptyCard_d32069",
      };
    },
    734761: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_ab06eb",
        platformIcon: "platformIcon_ab06eb",
        helpText: "helpText_ab06eb",
      };
    },
    904426: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_cb4c8f",
        emptyStateImage: "emptyStateImage_cb4c8f",
        emptyStateButton: "emptyStateButton_cb4c8f",
      };
    },
    778429: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_ca72b9",
        header: "header_ca72b9",
        applicationGroup: "applicationGroup_ca72b9",
        iconwrapper: "iconwrapper_ca72b9",
      };
    },
    560551: function (e, n, t) {
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
        linkedLobbyIcon: "linkedLobbyIcon_fab929",
        platformIcon: "platformIcon_fab929",
        searchContainer: "searchContainer_fab929",
      };
    },
    290883: function (e, n, t) {
      e.exports = {
        headerDivider: "headerDivider_b363b0",
        createButton: "createButton_b363b0",
        emptyStateImage: "emptyStateImage_b363b0",
        emptyStateButton: "emptyStateButton_b363b0",
      };
    },
    194639: function (e, n, t) {
      e.exports = {
        breadcrumbs: "breadcrumbs_f9e5d0",
        breadcrumbActive: "breadcrumbActive_f9e5d0",
        breadcrumbInactive: "breadcrumbInactive_f9e5d0",
      };
    },
    452199: function (e, n, t) {
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
    101494: function (e, n, t) {
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
    176662: function (e, n, t) {
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
    556208: function (e, n, t) {
      e.exports = {
        card: "card_ea2a21",
        caret: "caret_ea2a21",
        feature: "feature_ea2a21",
        featureIcon: "featureIcon_ea2a21",
        clickable: "clickable_ea2a21",
      };
    },
    230685: function (e, n, t) {
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
    672994: function (e, n, t) {
      e.exports = {
        groupHeader: "groupHeader_fef602",
        channelName: "channelName_fef602",
      };
    },
    228020: function (e, n, t) {
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
    655580: function (e, n, t) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    373963: function (e, n, t) {
      e.exports = { updateAvailable: "updateAvailable_e3584a" };
    },
  },
]);
//# sourceMappingURL=95cdd09a4dfa1fbe5d66.js.map
